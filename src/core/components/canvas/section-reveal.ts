/**
 * Where the canvas goes when the editor is asked to reveal a block — and who is allowed to ask.
 *
 * This replaces `reveal-selected-block.ts`, which answered a narrower question: *"is this block on
 * screen, and if not, bring it on screen."* That rule was right about the defect it fixed — the
 * vendor decided "in view?" from the element's TOP EDGE alone, so a section filling the window
 * counted as out of view and the canvas was yanked back by exactly however far you had scrolled into
 * it (measured: 60px, 300px, 245px on three real sections) — but it was not what the editor is for.
 *
 * The owner met the gap with a heading nested inside the **Gallery** section: the heading was already
 * visible at the very bottom of the canvas, so "it is on screen, do not move" was satisfied, and the
 * section they were actually working on stayed three-quarters below the fold under two other
 * sections. What an editor owes you is not a glimpse of the element — it is the **section** it lives
 * in, put where you can work on it.
 *
 * So the rule is now:
 *
 *   Selecting anything — the section itself, a word inside it, or a block nested six levels down —
 *   puts that block's OUTERMOST section flush with the top of the canvas.
 *
 * with one safeguard, because a section can be taller than the window: if aligning the section's top
 * would push the block you actually chose below the fold, the canvas goes only as far as keeping that
 * block on screen — and if the block is itself taller than the window, its own top wins.
 *
 * **Nothing here fires on its own.** The vendor used to reveal on *every* selection change, including
 * a click inside the canvas — which moves the page out from under the very thing you are pointing at.
 * A reveal now happens only when something outside the canvas asks for it by id
 * (`requestBlockReveal`): Klyro's outline, and the editor's own insert-then-select. A click in the
 * canvas asks for nothing, so the canvas does not move. Shopify's Horizon behaves the same way.
 */
import { CANVAS_SCROLL_TOLERANCE } from "./hold-canvas-scroll";

/** A block's box in the canvas viewport — `getBoundingClientRect()`, the two edges that matter. */
export type ElementBox = {
  top: number;
  bottom: number;
};

/** How far below the top edge a revealed section sits. Near the top, not jammed against it. */
export const SECTION_REVEAL_MARGIN = 24;

export type RevealBoxes = {
  /** The outermost section the selection lives in. */
  section: ElementBox;
  /** The block that was actually selected — the same element when a whole section is chosen. */
  selected: ElementBox;
};

/**
 * `data-block-id` values that are not blocks.
 *
 * The canvas wraps the page in `<div data-block-id="canvas">` (`chai-canvas.tsx`), and `container`
 * is the same idea one level in. The SDK's own click handling already treats both as "not a block" —
 * and a walk that does not is worse than useless here, because the wrapper starts at the top of the
 * document, so every reveal would compute a target of zero and nothing would ever move. Which is
 * exactly what four browser tests said before this existed.
 */
const NON_BLOCK_IDS = new Set(["canvas", "container"]);

const isBlock = (element: Element): boolean => {
  const id = element.getAttribute("data-block-id");
  return id !== null && !NON_BLOCK_IDS.has(id);
};


/**
 * The block something sits in: the FIRST real `[data-block-id]` on the way up.
 *
 * Used to tell a pointer that is CLICKING a block from a pointer that is dragging the scrollbar —
 * see `canvas-scroll-keeper.tsx`, where treating the two alike cost 462px of unasked-for scrolling
 * on every canvas click in WebKit.
 */
export const nearestBlockElement = (element: Element): HTMLElement | null => {
  let node: Element | null = element;
  while (node) {
    if (isBlock(node)) return node as HTMLElement;
    node = node.parentElement;
  }
  return null;
};

/**
 * The section a block belongs to: the LAST real `[data-block-id]` on the way up to the document.
 *
 * Whatever the depth — a heading inside a column inside a grid inside a section — this answers with
 * the top-level block, which is what a person means by "this section". Returns the element itself
 * when it is already top level, and `null` only when it is not a block at all.
 */
export const outermostBlockElement = (element: Element): HTMLElement | null => {
  let outermost: HTMLElement | null = isBlock(element) ? (element as HTMLElement) : null;
  let node: Element | null = element.parentElement;
  while (node) {
    if (isBlock(node)) outermost = node as HTMLElement;
    node = node.parentElement;
  }
  return outermost;
};

/**
 * Where to scroll the canvas, or `null` when it is already there.
 *
 * `null` is not "it is visible" — it is "the canvas is already within a pixel or two of where this
 * reveal would put it", so selecting a section that is already at the top does nothing at all.
 */
export const sectionRevealTop = (
  boxes: RevealBoxes,
  viewportHeight: number,
  scrollY: number,
  margin = SECTION_REVEAL_MARGIN,
): number | null => {
  const sectionAtTop = scrollY + boxes.section.top - margin;
  // Where the chosen block's bottom edge would land if the section went flush to the top.
  const selectedBottomAfterwards = boxes.selected.bottom - boxes.section.top + margin;
  let want = sectionAtTop;
  if (selectedBottomAfterwards > viewportHeight) {
    // The section is too tall to show the chosen block as well. Go far enough to see the block —
    // but never past its own top, or a block taller than the window would scroll clean past it.
    const selectedAtTop = scrollY + boxes.selected.top - margin;
    const selectedOnScreen = scrollY + boxes.selected.bottom + margin - viewportHeight;
    want = Math.min(selectedAtTop, selectedOnScreen);
  }
  const target = Math.max(0, Math.round(want));
  return Math.abs(target - scrollY) <= CANVAS_SCROLL_TOLERANCE ? null : target;
};

let pendingRevealId: string | null = null;

/**
 * Ask for the next selection of this block to reveal its section.
 *
 * By id rather than by a bare flag: a request made for one block must never be spent on another that
 * happens to be selected first.
 */
export const requestBlockReveal = (blockId: string): void => {
  pendingRevealId = blockId;
};

/**
 * Claims the request, if it was made for this block. Answers once, and clears whatever was pending
 * either way — an unclaimed request must not survive to surprise a later click.
 */
export const takeBlockRevealRequest = (blockId: string): boolean => {
  const asked = pendingRevealId === blockId;
  pendingRevealId = null;
  return asked;
};

/** Test seam: forget any pending request. */
export const resetBlockRevealRequest = (): void => {
  pendingRevealId = null;
};
