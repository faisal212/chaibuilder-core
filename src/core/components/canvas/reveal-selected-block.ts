/**
 * Whether selecting a block should move the canvas, and where to.
 *
 * Selecting something you are already looking at must not move the page. The rule this replaces
 * decided "is it in view?" from the element's TOP EDGE alone:
 *
 *     top + offset >= 0 && top - offset <= window.innerHeight
 *
 * so any block that begins above the top of the window was judged out of view — even one filling
 * the screen — and the canvas was scrolled so its top sat flush at 0. Measured on a real page: a
 * 573px section, on screen, selected after scrolling 300px into it, was smooth-scrolled back by
 * exactly 300px. Three sections, three times, the same each time.
 *
 * Two other things this function fixes by taking its inputs instead of reading globals:
 *
 *  - the viewport height must be the CANVAS window's, not the editor's. The old rule read
 *    `window.innerHeight` from the component's own context, which is the outer document — a
 *    different number from the iframe the element actually lives in.
 *  - the scroll target must be built from the element's rect plus the frame's own scroll, not from
 *    `offsetTop`, which is measured from the nearest positioned ancestor and only happens to agree
 *    when nothing between the element and the body is positioned.
 */
export type ElementBox = {
  /** `getBoundingClientRect().top`, relative to the canvas viewport. */
  top: number;
  /** `getBoundingClientRect().bottom`. */
  bottom: number;
};

/** In view means ANY part of it is on screen — not that its top edge happens to be. */
export const isElementInView = (box: ElementBox, viewportHeight: number): boolean =>
  box.bottom > 0 && box.top < viewportHeight;

/**
 * The scroll position that brings a block into view, or `null` when it already is and the canvas
 * must not move.
 *
 * One rule, so it is predictable in both directions: put the block's top just below the top edge.
 */
export const revealScrollTop = (
  box: ElementBox,
  viewportHeight: number,
  scrollY: number,
  margin = 24,
): number | null => {
  if (isElementInView(box, viewportHeight)) return null;
  return Math.max(0, Math.round(scrollY + box.top - margin));
};
