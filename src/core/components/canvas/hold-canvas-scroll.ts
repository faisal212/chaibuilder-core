/**
 * The canvas only moves when a person moves it, or when the editor means to.
 *
 * On WebKit, **every** edit moved the canvas. Measured on a real page, the same number every time:
 * scrolled to 1854, change a background, a text alignment, a padding, or just the section's words —
 * and the canvas lands at 2953. 1099px, deterministic, and the element being edited leaves the
 * screen. Chromium moves 0px and Firefox 1px on the same edits.
 *
 * What it is NOT, each ruled out by measurement rather than by argument:
 *
 *  - **not the editor scrolling.** `scrollTo`, `scroll`, `scrollBy`, `scrollTop`, `scrollIntoView`
 *    and `focusin` were all hooked inside the canvas; not one fired. The browser moves it.
 *  - **not the document resizing.** `scrollHeight` is 5003 before and 5003 after.
 *  - **not a re-mount.** The section, the canvas root, `body` and `html` all keep expandos set
 *    before the edit, so the DOM is updated in place.
 *  - **not the floating toolbar.** Hiding it changes nothing: still 1099px.
 *  - **not focus.** `document.activeElement` in the canvas is `BODY` before and after.
 *
 * So the cause inside WebKit is still unknown, and this does not pretend to know it. It enforces the
 * property instead, which is true whatever the cause: **an edit must not move the canvas.**
 *
 * That is deliberately narrower than "nothing may ever scroll the canvas". A first version held the
 * scroll at all times, and it was wrong twice over: it undid `scrollIntoViewIfNeeded`, which is how
 * a browser test — and a screen reader, and find-in-page — brings something into view, and it had
 * no reason to.
 *
 * So there is a window, and it opens on the two things the editor does to the canvas: **a document
 * change and a selection change.** Both were measured moving it on WebKit — an edit by 1099px, a
 * selection by 528px — and neither should. Outside those moments scrolling is nobody's business but
 * the person's.
 *
 * Inside the window, two things still count as asked for: a person (a wheel, a touch, a key, a
 * pointer on the scrollbar) and the editor itself, via `markIntentionalCanvasScroll()`.
 *
 * **What the editor's own mark means, and what it must not mean.** It took three goes, each
 * corrected by a browser:
 *
 *  1. *A 700ms pass in which nothing was undone.* Real Safari walked straight through it — the jump
 *     lands ~150ms after the reveal — so the section was revealed and then slid off the top.
 *  2. *Adopt whatever position the next scroll lands on.* Real Safari coalesces the reveal and the
 *     jump into ONE scroll event, so the adopted position was the jumped one. Measured: revealing
 *     the Gallery should have scrolled to 3948 and settled at 3074 — 874px short, with the section
 *     still off screen.
 *  3. *Remember where the editor asked to go, and hold that.* Which is this. The target is clamped
 *     to what the document can actually offer, so a scroll past the end settles instead of being
 *     fought forever.
 */

/** What counts as a person moving the canvas. */
export const CANVAS_GESTURE_EVENTS = ["wheel", "touchstart", "touchmove", "pointerdown", "keydown"] as const;

/**
 * How long after a gesture a scroll still counts as that gesture's.
 *
 * Momentum scrolling keeps firing `scroll` long after the last `wheel`, so this is generous. It only
 * has to be shorter than the gap between a person letting go and the next edit landing.
 */
export const CANVAS_GESTURE_GRACE_MS = 700;

/**
 * How the canvas must be scrolled from code: `instant`, never `auto`.
 *
 * `auto` does not mean "immediately" — it means "whatever the CSS says", and the canvas document is
 * served with `class="scroll-smooth"` on `<html>` (`IframeInitialContent.ts`), so every scripted
 * scroll glides. That is most of what "the editor feels odd" is made of, and it hid inside a fix
 * that already believed it was instant: a restore issued with `auto` was measured creeping back
 * 2953 -> 2931 -> 2888 -> 2827 over dozens of frames instead of landing.
 */
export const CANVAS_SCROLL_BEHAVIOR = "instant" as const;

/** Smaller than this and it is rounding, not a jump. */
export const CANVAS_SCROLL_TOLERANCE = 2;

/**
 * How long after the editor changes something the canvas holds its position.
 *
 * The measured jump landed ~150ms after the edit. This only has to outlast the commit that caused
 * it, and it must be short enough that the next thing a person does is their own.
 */
export const CANVAS_EDIT_HOLD_MS = 400;

export type ScrollDecision = {
  /** Where the canvas is now. */
  scrollY: number;
  /** Where it was last put on purpose. */
  intended: number;
  /** When a person last touched it. `-Infinity` if never. */
  lastGestureAt: number;
  /** When the editor last changed the document or the selection. `-Infinity` if it has not. */
  lastEditAt: number;
  now: number;
  /** How long an edit holds the canvas still. */
  holdMs?: number;
  graceMs?: number;
  tolerance?: number;
};

/**
 * What to do about a scroll that just happened.
 *
 *  - `adopt` — this is where the canvas is meant to be from now on.
 *  - `hold` — it is already where it is meant to be; nothing to do.
 *  - `restore` — nobody asked for this; put it back.
 */
export type ScrollAction = "adopt" | "hold" | "restore";

export const decideCanvasScroll = (input: ScrollDecision): ScrollAction => {
  const grace = input.graceMs ?? CANVAS_GESTURE_GRACE_MS;
  const tolerance = input.tolerance ?? CANVAS_SCROLL_TOLERANCE;
  const hold = input.holdMs ?? CANVAS_EDIT_HOLD_MS;
  // Outside the moment the editor changed something, a scroll is nobody's business but the
  // person's — including `scrollIntoViewIfNeeded`, which is how a screen reader and find-in-page
  // reach things.
  if (input.now - input.lastEditAt > hold) return "adopt";
  if (Math.abs(input.scrollY - input.intended) <= tolerance) return "hold";
  if (input.now - input.lastGestureAt <= grace) return "adopt";
  return "restore";
};

/**
 * A scroll the editor can actually reach.
 *
 * Without this, a target past the end of the document could never be matched and the canvas would
 * be restored to it on every scroll event, for ever.
 */
export const clampScrollTarget = (target: number, scrollHeight: number, windowHeight: number): number =>
  Math.max(0, Math.min(Math.round(target), Math.max(0, Math.round(scrollHeight - windowHeight))));

let pendingTarget: number | null = null;

/**
 * The editor is about to move the canvas on purpose, and this is **where to**.
 *
 * The position is what matters, not the moment: Safari coalesces the editor's own scroll with the
 * jump that follows it into a single event, so "whatever the next scroll lands on" is the jumped
 * place. Remembering the target is what survives that.
 */
export const markIntentionalCanvasScroll = (top: number): void => {
  pendingTarget = top;
};

/** Claims the target, if one is pending. Answers once and then clears it. */
export const takeIntentionalCanvasScroll = (): number | null => {
  const target = pendingTarget;
  pendingTarget = null;
  return target;
};

/** Test seam: forget that the editor was about to move it. */
export const resetIntentionalCanvasScroll = (): void => {
  pendingTarget = null;
};
