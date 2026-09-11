import {
  CANVAS_EDIT_HOLD_MS,
  CANVAS_GESTURE_GRACE_MS,
  CANVAS_SCROLL_BEHAVIOR,
  lastIntentionalCanvasScroll,
  markIntentionalCanvasScroll,
  resetIntentionalCanvasScroll,
  shouldRestoreScroll,
} from "~/core/components/canvas/hold-canvas-scroll";

const NEVER = Number.NEGATIVE_INFINITY;
const base = { scrollY: 2953, intended: 1854, lastGestureAt: NEVER, lastIntentionalAt: NEVER, lastEditAt: 9_950, now: 10_000 };

describe("shouldRestoreScroll", () => {
  test("undoes a jump nobody asked for", () => {
    // The measured case: 1854 -> 2953 on WebKit, with no gesture and no editor scroll.
    expect(shouldRestoreScroll(base)).toBe(true);
  });

  test("leaves a person's own scrolling alone", () => {
    expect(shouldRestoreScroll({ ...base, lastGestureAt: 9_900 })).toBe(false);
  });

  test("keeps leaving it alone while momentum is still running", () => {
    expect(shouldRestoreScroll({ ...base, lastGestureAt: 10_000 - CANVAS_GESTURE_GRACE_MS + 1 })).toBe(false);
  });

  test("takes over again once the momentum window has passed", () => {
    expect(shouldRestoreScroll({ ...base, lastGestureAt: 10_000 - CANVAS_GESTURE_GRACE_MS - 1 })).toBe(true);
  });

  test("leaves the editor's own deliberate scroll alone", () => {
    // Revealing a selection that really is off screen must not be undone.
    expect(shouldRestoreScroll({ ...base, lastIntentionalAt: 9_950 })).toBe(false);
  });

  test("does nothing when the canvas has not actually moved", () => {
    expect(shouldRestoreScroll({ ...base, scrollY: 1854 })).toBe(false);
    expect(shouldRestoreScroll({ ...base, scrollY: 1856 })).toBe(false);
  });

  test("treats a move of more than the tolerance as a jump", () => {
    expect(shouldRestoreScroll({ ...base, scrollY: 1857 })).toBe(true);
  });

  test("undoes a jump in either direction", () => {
    expect(shouldRestoreScroll({ ...base, scrollY: 400 })).toBe(true);
  });

  test("leaves scrolling alone when no edit just happened", () => {
    // The window is the edit. Outside it, `scrollIntoViewIfNeeded` — which is how a screen reader,
    // find-in-page and a browser test reach something — must work. A first version held the canvas
    // at all times and broke exactly that.
    expect(shouldRestoreScroll({ ...base, lastEditAt: NEVER })).toBe(false);
    expect(shouldRestoreScroll({ ...base, lastEditAt: 10_000 - CANVAS_EDIT_HOLD_MS - 1 })).toBe(false);
  });

  test("holds for as long as the edit window lasts", () => {
    expect(shouldRestoreScroll({ ...base, lastEditAt: 10_000 - CANVAS_EDIT_HOLD_MS + 1 })).toBe(true);
  });
});

describe("markIntentionalCanvasScroll", () => {
  beforeEach(() => resetIntentionalCanvasScroll());

  test("starts never", () => {
    expect(lastIntentionalCanvasScroll()).toBe(NEVER);
  });

  test("remembers when the editor last moved the canvas", () => {
    markIntentionalCanvasScroll(1_234);
    expect(lastIntentionalCanvasScroll()).toBe(1_234);
    expect(shouldRestoreScroll({ ...base, lastEditAt: 1_290, lastIntentionalAt: lastIntentionalCanvasScroll(), now: 1_300 })).toBe(false);
  });

  test("stops covering a scroll once the window has passed", () => {
    markIntentionalCanvasScroll(1_000);
    const now = 1_000 + CANVAS_GESTURE_GRACE_MS + 1;
    expect(shouldRestoreScroll({ ...base, lastEditAt: now - 10, lastIntentionalAt: lastIntentionalCanvasScroll(), now })).toBe(true);
  });
});

describe("CANVAS_SCROLL_BEHAVIOR", () => {
  test("is instant, because auto is not", () => {
    // `auto` means "whatever the CSS says", and the canvas is served with `scroll-smooth` on
    // `<html>`. A restore issued with `auto` was measured creeping back over dozens of frames.
    expect(CANVAS_SCROLL_BEHAVIOR).toBe("instant");
  });
});
