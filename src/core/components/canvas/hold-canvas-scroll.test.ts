import {
  CANVAS_EDIT_HOLD_MS,
  CANVAS_GESTURE_GRACE_MS,
  CANVAS_SCROLL_BEHAVIOR,
  clampScrollTarget,
  decideCanvasScroll,
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
    expect(takeIntentionalCanvasScroll()).toBe(3948);
    expect(takeIntentionalCanvasScroll()).toBeNull();
  });

  test("the remembered target is what a jump is then measured against", () => {
    markIntentionalCanvasScroll(3948);
    const intended = takeIntentionalCanvasScroll()!;
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
