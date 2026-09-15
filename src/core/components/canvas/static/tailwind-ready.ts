/**
 * Tells the host when the canvas is styled.
 *
 * The Tailwind browser build in the canvas iframe writes its generated rules into one bare
 * `<style>` in `<head>` some time after the document loads: the script has to arrive, compile, and
 * re-compile once `TailwindV4Theme` has filled the theme placeholder, because the first build can
 * finish before the theme is there. Until that themed
 * write lands, the canvas paints without `flex`, spacing or colours. A host that wants to reveal the
 * canvas only once it is styled has nothing to wait on, so this watcher sets `data-tailwind-ready`
 * on the iframe's `<html>` at the first generated-sheet write that carries the theme (the
 * placeholder had content before the write; with no placeholder in the document, the first write).
 * The attribute is not in the browser build's `attributeFilter` (`class` only), so setting it
 * starts no rebuild.
 */
import { TAILWIND_THEME_STYLE_ID } from "~/core/components/canvas/IframeInitialContent";

export const TAILWIND_READY_ATTRIBUTE = "data-tailwind-ready";

/** The engine's generated sheet: a bare `<style>` in `<head>` — every other canvas style has an id, a type or a React precedence. */
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

/** Did this mutation come from a finished build (its sheet appended, or its text replaced)? */
export function isTailwindBuildWrite(record: MutationRecord): boolean {
  if (record.type === "characterData") return isGeneratedSheet(record.target.parentNode);
  if (isGeneratedSheet(record.target)) return true;
  return Array.from(record.addedNodes).some(isGeneratedSheet);
}

const generatedSheetText = (doc: Document): string =>
  Array.from(doc.head.querySelectorAll("style"))
    .filter((style) => !style.id && !style.hasAttribute("type") && !style.hasAttribute("data-precedence"))
    .map((style) => style.textContent ?? "")
    .join("");

const themeIsFilled = (doc: Document): boolean => {
  const placeholder = doc.getElementById(TAILWIND_THEME_STYLE_ID);
  return !placeholder || (placeholder.textContent ?? "").trim().length > 0;
};

/** Starts watching; returns the disposer. The attribute, once set, stays for the document's life. */
export function watchTailwindReady(doc: Document): () => void {
  const View = doc.defaultView as (Window & typeof globalThis) | null;
  if (!View) return () => {};
  const markReady = () => doc.documentElement.setAttribute(TAILWIND_READY_ATTRIBUTE, "true");

  if (themeIsFilled(doc) && generatedSheetText(doc).trim()) {
    markReady();
    return () => {};
  }

  const observer = new View.MutationObserver((records) => {
    const wrote = records.some(isTailwindBuildWrite);
    if (!wrote) return;
    if (!themeIsFilled(doc) || !generatedSheetText(doc).trim()) return;
    markReady();
    observer.disconnect();
  });
  observer.observe(doc.head, { childList: true, subtree: true, characterData: true });
  return () => observer.disconnect();
}
