/**
 * What the canvas rich-text editor hands back when it closes: `null` when nothing was edited, else the
 * editor's HTML.
 *
 * TipTap parses a block's stored content into its own document on open, so `getHTML()` on a paragraph
 * whose stored text is `Intro text` answers `<p>Intro text</p>` before a single key is pressed. Writing
 * that back on close changed the stored content of every paragraph anyone opened and left, and moved the
 * page to "Changes not published" (found 2026-09-14: open, Escape, and a seeded Services paragraph was
 * saved wrapped in `<p style="text-align: left;">…</p>`). So "unchanged" is asked of TipTap's own reading
 * of the content at open, not of the stored string.
 */
export const contentToSaveOnClose = (htmlAtOpen: string | null, htmlNow: string): string | null =>
  htmlAtOpen !== null && htmlNow === htmlAtOpen ? null : htmlNow;
