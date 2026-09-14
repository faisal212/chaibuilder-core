/**
 * Keeps the canvas's Tailwind stylesheet whole.
 *
 * The canvas styles itself with cdn.tailwindcss.com (3.4.17, loaded by `IframeInitialContent`). Its
 * rebuilds are not serialised: every DOM change that brings a class it has not seen starts a build,
 * each build marks its classes "seen" BEFORE it finishes, and whichever build finishes last writes the
 * one generated `<style>`. When two overlap and the older one lands last, the newer one's classes are
 * dropped from the sheet and — being "seen" — are never built again. The canvas then renders with its
 * base rules only: no `flex`, no spacing, images at their natural size, until a browser refresh.
 * Measured 2026-09-14: five Discards out of five after an edit and a save, in Chromium; the owner saw
 * it on staging in Safari. Reassigning `tailwind.config` (the CDN's own setter) clears "seen" and
 * rebuilds everything, which is exactly what heals it.
 *
 * So: watch the CDN's writes to its stylesheet, and once they have been quiet for `settleMs`, force
 * one full rebuild if any build other than our own has landed since the last one. Our rebuild's own
 * write is recognised and does not ask for another, so this settles instead of looping. A full rebuild
 * of the whole canvas measured 71–86 ms. The first one is owed at mount, because the race can finish
 * before this watcher exists.
 */
export const TAILWIND_SETTLE_MS = 300;

type TailwindCdn = { config?: Record<string, unknown> };
export type TailwindWindow = Window & { tailwind?: TailwindCdn };

/** The CDN's generated sheet: a bare `<style>` in `<head>` — every other canvas style has an id, a type or a React precedence. */
function isGeneratedSheet(node: Node | null): boolean {
  if (!node || node.nodeType !== Node.ELEMENT_NODE) return false;
  const element = node as Element;
  return (
    element.tagName === "STYLE" &&
    element.parentNode === element.ownerDocument.head &&
    !element.id &&
    !element.hasAttribute("type") &&
    !element.hasAttribute("href") &&
    !element.hasAttribute("data-precedence")
  );
}

/** Did this mutation come from a finished CDN build (its sheet appended, or its text replaced)? */
export function isTailwindBuildWrite(record: MutationRecord): boolean {
  if (record.type === "characterData") return isGeneratedSheet(record.target.parentNode);
  if (isGeneratedSheet(record.target)) return true;
  return Array.from(record.addedNodes).some(isGeneratedSheet);
}

/** Starts watching; returns the disposer. */
export function watchTailwindBuilds(doc: Document, win: TailwindWindow, settleMs = TAILWIND_SETTLE_MS): () => void {
  // The canvas's own window: its timers and observer die with the iframe.
  const View = (doc.defaultView ?? win) as Window & typeof globalThis;
  let timer: number | undefined;
  let dirty = true;
  let healing = false;

  const heal = () => {
    timer = undefined;
    const tailwind = win.tailwind;
    if (!dirty || !tailwind?.config) return;
    dirty = false;
    healing = true;
    tailwind.config = { ...tailwind.config };
  };
  const schedule = () => {
    if (timer !== undefined) View.clearTimeout(timer);
    timer = View.setTimeout(heal, settleMs);
  };

  const observer = new View.MutationObserver((records) => {
    let wrote = false;
    for (const record of records) {
      if (!isTailwindBuildWrite(record)) continue;
      wrote = true;
      if (healing) healing = false;
      else dirty = true;
    }
    if (wrote) schedule();
  });
  observer.observe(doc.head, { childList: true, subtree: true, characterData: true });
  schedule();

  return () => {
    observer.disconnect();
    if (timer !== undefined) View.clearTimeout(timer);
  };
}
