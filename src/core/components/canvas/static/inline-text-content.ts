/**
 * klyro fork: what the canvas's plain inline editor puts on screen, and what it hands back.
 *
 * The editor used to write a block's content in with `innerHTML` and read it back with `innerText`.
 * For a block that renders its content AS MARKUP (a Heading is `dangerouslySetInnerHTML`) that is a
 * round trip from text to HTML: typing `X<img src=x onerror=…>` into a heading stored those
 * characters as the heading's content, and the next render turned them into an element whose
 * handler ran — in the editor, in Preview, on every load. It also rewrote honest text: typing
 * `Tom &amp; Jerry <em>x</em>` came back as `Tom & Jerry x`.
 *
 * So each kind of block keeps one language end to end:
 *
 * - **Markup blocks** are written and read as HTML. What the person typed is escaped by the browser
 *   on the way out (`<` becomes `&lt;`), and markup already there — the bold and links the rich-text
 *   field put in — survives an inline edit instead of being flattened to text.
 * - **Every other block** (a Button renders its content as a text node) is written and read as text,
 *   so tag-like characters stay characters and are never parsed into the editing element either.
 */
const MARKUP_CONTENT_TYPES: ReadonlySet<string> = new Set([
  "Heading",
  "Paragraph",
  "RichText",
  "Span",
  "ListItem",
  "TableCell",
  "Label",
]);

export const rendersContentAsMarkup = (blockType: string): boolean => MARKUP_CONTENT_TYPES.has(blockType);

export function writeInlineContent(element: HTMLElement, content: string, blockType: string): void {
  if (rendersContentAsMarkup(blockType)) element.innerHTML = content;
  else element.textContent = content;
}

export function readInlineContent(element: HTMLElement, blockType: string): string {
  if (rendersContentAsMarkup(blockType)) return element.innerHTML;
  // `innerText` keeps the line breaks a person sees; jsdom has no layout and leaves it undefined.
  return element.innerText ?? element.textContent ?? "";
}
