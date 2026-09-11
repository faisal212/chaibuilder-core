import {
  CANVAS_EDIT_HOLD_MS,
  CANVAS_GESTURE_GRACE_MS,
  CANVAS_SCROLL_BEHAVIOR,
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
  editorJustScrolled: false,
  now: 10_000,
};

describe("decideCanvasScroll", () => {
  test("puts back a jump nobody asked for", () => {
    // The measured case: 1854 -> 2953 on WebKit, right after an edit, with no gesture.
    expect(decideCanvasScroll(base)).toBe("restore");
  });

  test("adopts the scroll the editor just performed itself", () => {
    // Reading the position back, rather than remembering the number asked for, is what lets a
    // clamped scroll — past the end of the document — settle instead of being fought.
    expect(decideCanvasScroll({ ...base, editorJustScrolled: true })).toBe("adopt");
  });

  test("does NOT give the editor a window in which anything goes", () => {
    // This is the hole real Safari walked through: selecting a section below the fold revealed it
    // correctly, then jumped ~500px further, and a time-based pass let that through — so the
    // element ended up ABOVE the window. The mark claims one scroll, not an interval.
    expect(decideCanvasScroll({ ...base, editorJustScrolled: true })).toBe("adopt");
    expect(decideCanvasScroll({ ...base, editorJustScrolled: false })).toBe("restore");
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
    expect(takeIntentionalCanvasScroll()).toBe(false);
  });

  test("claims exactly one scroll", () => {
    markIntentionalCanvasScroll();
    expect(takeIntentionalCanvasScroll()).toBe(true);
    // The jump that follows is NOT the editor's, and must not inherit its permission.
    expect(takeIntentionalCanvasScroll()).toBe(false);
  });
});

describe("CANVAS_SCROLL_BEHAVIOR", () => {
  test("is instant, because auto is not", () => {
    // `auto` means "whatever the CSS says", and the canvas is served with `scroll-smooth` on
    // `<html>`. A restore issued with `auto` was measured creeping back over dozens of frames.
    expect(CANVAS_SCROLL_BEHAVIOR).toBe("instant");
  });
});
