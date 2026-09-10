import { isElementInView, revealScrollTop } from "~/core/components/canvas/reveal-selected-block";

const WINDOW = 710;

describe("isElementInView", () => {
  test("a block sitting fully on screen is in view", () => {
    expect(isElementInView({ top: 40, bottom: 210 }, WINDOW)).toBe(true);
  });

  test("a block that BEGINS above the top edge is still in view", () => {
    // The defect this replaces: the old rule read the top edge alone, so this was "out of view" and
    // the canvas was scrolled — measured at 300px of unwanted movement on a real page.
    expect(isElementInView({ top: -300, bottom: 273 }, WINDOW)).toBe(true);
  });

  test("a block taller than the window, filling it, is in view", () => {
    expect(isElementInView({ top: -400, bottom: 900 }, WINDOW)).toBe(true);
  });

  test("a block entirely above the window is not", () => {
    expect(isElementInView({ top: -520, bottom: -20 }, WINDOW)).toBe(false);
  });

  test("a block entirely below the window is not", () => {
    expect(isElementInView({ top: 900, bottom: 1100 }, WINDOW)).toBe(false);
  });

  test("a block touching the edge by one pixel is in view", () => {
    expect(isElementInView({ top: -100, bottom: 1 }, WINDOW)).toBe(true);
    expect(isElementInView({ top: WINDOW - 1, bottom: WINDOW + 200 }, WINDOW)).toBe(true);
  });
});

describe("revealScrollTop", () => {
  test("does not move the canvas for a block already on screen", () => {
    expect(revealScrollTop({ top: 40, bottom: 210 }, WINDOW, 1000)).toBeNull();
    expect(revealScrollTop({ top: -300, bottom: 273 }, WINDOW, 1955)).toBeNull();
  });

  test("brings a block below the fold to just under the top edge", () => {
    expect(revealScrollTop({ top: 900, bottom: 1100 }, WINDOW, 0)).toBe(876);
  });

  test("brings a block above the fold to the same place, so the rule reads the same both ways", () => {
    expect(revealScrollTop({ top: -520, bottom: -20 }, WINDOW, 2000)).toBe(1456);
  });

  test("is built from the frame's own scroll, not from offsetTop", () => {
    // `offsetTop` is measured from the nearest positioned ancestor, so it agrees with the document
    // only when nothing between the element and the body is positioned. Rect plus scroll always does.
    expect(revealScrollTop({ top: 200, bottom: 260 }, 100, 3000)).toBe(3176);
  });

  test("never asks for a negative scroll", () => {
    expect(revealScrollTop({ top: -10, bottom: -5 }, WINDOW, 0)).toBe(0);
  });

  test("takes the margin it is given", () => {
    expect(revealScrollTop({ top: 900, bottom: 1100 }, WINDOW, 0, 0)).toBe(900);
  });
});
