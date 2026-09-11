import {
  CANVAS_GESTURE_GRACE_MS,
  lastIntentionalCanvasScroll,
  markIntentionalCanvasScroll,
  resetIntentionalCanvasScroll,
  shouldRestoreScroll,
} from "~/core/components/canvas/hold-canvas-scroll";

const NEVER = Number.NEGATIVE_INFINITY;
const base = { scrollY: 2953, intended: 1854, lastGestureAt: NEVER, lastIntentionalAt: NEVER, now: 10_000 };

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
});

describe("markIntentionalCanvasScroll", () => {
  beforeEach(() => resetIntentionalCanvasScroll());

  test("starts never", () => {
    expect(lastIntentionalCanvasScroll()).toBe(NEVER);
  });

  test("remembers when the editor last moved the canvas", () => {
    markIntentionalCanvasScroll(1_234);
    expect(lastIntentionalCanvasScroll()).toBe(1_234);
    expect(shouldRestoreScroll({ ...base, lastIntentionalAt: lastIntentionalCanvasScroll(), now: 1_300 })).toBe(false);
  });

  test("stops covering a scroll once the window has passed", () => {
    markIntentionalCanvasScroll(1_000);
    expect(shouldRestoreScroll({ ...base, lastIntentionalAt: lastIntentionalCanvasScroll(), now: 1_000 + CANVAS_GESTURE_GRACE_MS + 1 })).toBe(true);
  });
});
