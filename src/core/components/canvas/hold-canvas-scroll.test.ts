import {
  CANVAS_EDIT_HOLD_MS,
  CANVAS_GESTURE_GRACE_MS,
  CANVAS_GLIDE_MAX_MS,
  CANVAS_GLIDE_MIN_MS,
  CANVAS_SCROLL_BEHAVIOR,
  clampScrollTarget,
  decideCanvasScroll,
  cancelCanvasGlide,
  easeOutCubic,
  glideCanvasTo,
  glideDurationFor,
  glideScrollTop,
  markIntentionalCanvasScroll,
  resetIntentionalCanvasScroll,
  takeIntentionalCanvasScroll,
} from "~/core/components/canvas/hold-canvas-scroll";

const NEVER = Number.NEGATIVE_INFINITY;
const base = {
  scrollY: 2953,
  intended: 1854,
  lastGestureAt: NEVER,
  lastEditAt: 9_950,
  now: 10_000,
};

describe("decideCanvasScroll", () => {
  test("puts back a jump nobody asked for", () => {
    // The measured case: 1854 -> 2953 on WebKit, right after an edit, with no gesture.
    expect(decideCanvasScroll(base)).toBe("restore");
  });

  test("adopts a person's own scrolling", () => {
    expect(decideCanvasScroll({ ...base, lastGestureAt: 9_900 })).toBe("adopt");
  });

  test("keeps adopting while momentum is still running", () => {
    expect(decideCanvasScroll({ ...base, lastGestureAt: 10_000 - CANVAS_GESTURE_GRACE_MS + 1 })).toBe("adopt");
  });

  test("takes over again once the momentum window has passed", () => {
    expect(decideCanvasScroll({ ...base, lastGestureAt: 10_000 - CANVAS_GESTURE_GRACE_MS - 1 })).toBe("restore");
  });

  test("holds when the canvas has not actually moved", () => {
    expect(decideCanvasScroll({ ...base, scrollY: 1854 })).toBe("hold");
    expect(decideCanvasScroll({ ...base, scrollY: 1856 })).toBe("hold");
  });

  test("treats a move of more than the tolerance as a jump", () => {
    expect(decideCanvasScroll({ ...base, scrollY: 1857 })).toBe("restore");
  });

  test("puts back a jump in either direction", () => {
    expect(decideCanvasScroll({ ...base, scrollY: 400 })).toBe("restore");
  });

  test("leaves scrolling alone when no edit just happened", () => {
    // The window is the edit. Outside it, `scrollIntoViewIfNeeded` — which is how a screen reader,
    // find-in-page and a browser test reach something — must work. A first version held the canvas
    // at all times and broke exactly that.
    expect(decideCanvasScroll({ ...base, lastEditAt: NEVER })).toBe("adopt");
    expect(decideCanvasScroll({ ...base, lastEditAt: 10_000 - CANVAS_EDIT_HOLD_MS - 1 })).toBe("adopt");
  });

  test("holds for as long as the edit window lasts", () => {
    expect(decideCanvasScroll({ ...base, lastEditAt: 10_000 - CANVAS_EDIT_HOLD_MS + 1 })).toBe("restore");
  });
});

describe("markIntentionalCanvasScroll", () => {
  beforeEach(() => resetIntentionalCanvasScroll());

  test("claims nothing until the editor marks a scroll", () => {
    expect(takeIntentionalCanvasScroll()).toBeNull();
  });

  test("remembers WHERE the editor meant to go, once", () => {
    // Not "the next scroll is fine": Safari coalesces the editor's own scroll with the jump that
    // follows into a single event, so the place that event lands on is already the wrong one.
    // Measured — revealing the Gallery should have scrolled to 3948 and settled at 3074.
    markIntentionalCanvasScroll(3948);
    expect(takeIntentionalCanvasScroll()).toEqual({ target: 3948, glideUntil: Number.NEGATIVE_INFINITY });
    expect(takeIntentionalCanvasScroll()).toBeNull();
  });

  test("the remembered target is what a jump is then measured against", () => {
    markIntentionalCanvasScroll(3948);
    const { target: intended } = takeIntentionalCanvasScroll()!;
    expect(decideCanvasScroll({ ...base, intended, scrollY: 3074 })).toBe("restore");
    expect(decideCanvasScroll({ ...base, intended, scrollY: 3948 })).toBe("hold");
  });
});

describe("clampScrollTarget", () => {
  test("keeps a reachable target as it is", () => {
    expect(clampScrollTarget(3948, 5000, 898)).toBe(3948);
  });

  test("brings a target past the end back to the end", () => {
    // Without this the canvas would be restored to an unreachable number on every scroll, for ever.
    expect(clampScrollTarget(9_000, 5000, 898)).toBe(4102);
  });

  test("never goes negative", () => {
    expect(clampScrollTarget(-40, 5000, 898)).toBe(0);
    expect(clampScrollTarget(100, 400, 898)).toBe(0);
  });
});

describe("CANVAS_SCROLL_BEHAVIOR", () => {
  test("is instant, because auto is not", () => {
    // `auto` means "whatever the CSS says", and the canvas is served with `scroll-smooth` on
    // `<html>`. A restore issued with `auto` was measured creeping back over dozens of frames.
    expect(CANVAS_SCROLL_BEHAVIOR).toBe("instant");
  });
});

describe("the editor's own glide", () => {
  test("a scroll inside the animation window is left alone", () => {
    // Without this the keeper would fight every frame of the editor's own reveal and the canvas
    // would stutter between the animation and the correction.
    expect(decideCanvasScroll({ ...base, glideUntil: 10_000 })).toBe("glide");
    expect(decideCanvasScroll({ ...base, glideUntil: 10_200 })).toBe("glide");
  });

  test("the window closes, and the usual rules come back", () => {
    expect(decideCanvasScroll({ ...base, glideUntil: 9_999 })).toBe("restore");
  });

  test("a glide travels a section in about a fifth of a second", () => {
    expect(glideDurationFor(2000)).toBe(200);
  });

  test("and never drags, however far it goes", () => {
    expect(glideDurationFor(40_000)).toBe(CANVAS_GLIDE_MAX_MS);
    expect(glideDurationFor(-40_000)).toBe(CANVAS_GLIDE_MAX_MS);
  });

  test("nor snaps, however near", () => {
    expect(glideDurationFor(12)).toBe(CANVAS_GLIDE_MIN_MS);
    expect(glideDurationFor(0)).toBe(CANVAS_GLIDE_MIN_MS);
  });

  test("it starts fast and settles", () => {
    expect(easeOutCubic(0)).toBe(0);
    expect(easeOutCubic(1)).toBe(1);
    expect(easeOutCubic(0.5)).toBeGreaterThan(0.5);
    // Clamped, because a frame can land after the last one was due.
    expect(easeOutCubic(1.4)).toBe(1);
    expect(easeOutCubic(-0.2)).toBe(0);
  });

  test("every frame is an absolute position, and the last one is the target exactly", () => {
    // This is what makes the glide safe against WebKit's jump: a frame does not nudge the canvas
    // along, it states where the canvas is, so anything that moved it in between is overwritten.
    expect(glideScrollTop(0, 3948, 0, 200)).toBe(0);
    expect(glideScrollTop(0, 3948, 200, 200)).toBe(3948);
    expect(glideScrollTop(0, 3948, 320, 200)).toBe(3948);
    expect(glideScrollTop(4000, 100, 200, 200)).toBe(100);
    const half = glideScrollTop(0, 3948, 100, 200);
    expect(half).toBeGreaterThan(3948 / 2);
    expect(half).toBeLessThan(3948);
  });

  test("a reveal with no time to take lands immediately", () => {
    // Reduced motion asks for the position, not the journey.
    expect(glideScrollTop(0, 3948, 0, 0)).toBe(3948);
  });
});

describe("glideCanvasTo", () => {
  /** A canvas window with a clock and a frame loop a test can turn by hand. */
  const stubView = (from: number) => {
    const frames: (() => void)[] = [];
    const view = {
      scrollY: from,
      clock: 0,
      performance: { now: () => view.clock },
      matchMedia: (query: string) => ({ matches: view.reducedMotion && query.includes("reduce") }),
      reducedMotion: false,
      scrollTo: ({ top }: { top: number }) => {
        view.scrollY = top;
        view.positions.push(top);
      },
      positions: [] as number[],
      requestAnimationFrame: (fn: () => void) => frames.push(fn) as unknown as number,
    };
    const turn = (ms: number) => {
      view.clock += ms;
      const due = frames.splice(0, frames.length);
      for (const frame of due) frame();
    };
    return { view, turn, pending: () => frames.length };
  };

  test("it lands exactly on the target, and marks where it was going", () => {
    const { view, turn } = stubView(0);
    glideCanvasTo(view as unknown as Window, 3948);
    expect(takeIntentionalCanvasScroll()).toEqual({ target: 3948, glideUntil: glideDurationFor(3948) });
    markIntentionalCanvasScroll(3948, glideDurationFor(3948));
    for (let step = 0; step < 12; step += 1) turn(40);
    expect(view.positions[view.positions.length - 1]).toBe(3948);
    expect(view.positions.length).toBeGreaterThan(2);
    resetIntentionalCanvasScroll();
  });

  test("a person's gesture ends it where it stands", () => {
    // Not "it finishes anyway, it is only 200ms": the remaining frames would drag the canvas back
    // to a place nobody is looking at any more.
    const { view, turn } = stubView(0);
    glideCanvasTo(view as unknown as Window, 3948);
    turn(40);
    const whereItGotTo = view.scrollY;
    cancelCanvasGlide();
    turn(40);
    turn(40);
    expect(view.scrollY).toBe(whereItGotTo);
    resetIntentionalCanvasScroll();
  });

  test("a second reveal supersedes the first rather than racing it", () => {
    const { view, turn } = stubView(0);
    glideCanvasTo(view as unknown as Window, 3948);
    turn(40);
    glideCanvasTo(view as unknown as Window, 1000);
    for (let step = 0; step < 12; step += 1) turn(40);
    expect(view.scrollY).toBe(1000);
    resetIntentionalCanvasScroll();
  });

  test("reduced motion gets the position without the journey", () => {
    const { view } = stubView(0);
    view.reducedMotion = true;
    glideCanvasTo(view as unknown as Window, 3948);
    expect(view.positions).toEqual([3948]);
    expect(takeIntentionalCanvasScroll()).toEqual({ target: 3948, glideUntil: 0 });
  });
});
