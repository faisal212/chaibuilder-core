import { describe, expect, it } from "vitest";
import { readInlineContent, rendersContentAsMarkup, writeInlineContent } from "./inline-text-content";

// klyro fork. What a person types into a heading on the canvas is TEXT, whatever characters it holds.
// "Typing" here is a text node, which is exactly what contentEditable produces from keystrokes.
const typeInto = (element: HTMLElement, text: string) => {
  element.textContent = text;
};

/** What the block will draw, for a block that renders its content as markup. */
const rendered = (html: string) => {
  const probe = document.createElement("div");
  probe.innerHTML = html;
  return probe;
};

describe("the canvas's plain inline editor", () => {
  it("hands back typed tag-like characters escaped, so a heading draws them as text", () => {
    const heading = document.createElement("h1");
    writeInlineContent(heading, "", "Heading");
    typeInto(heading, 'X<img src=x onerror="top.document.title=`XSS`">');

    const stored = readInlineContent(heading, "Heading");

    expect(stored).toBe('X&lt;img src=x onerror="top.document.title=`XSS`"&gt;');
    expect(rendered(stored).querySelector("img")).toBeNull();
    expect(rendered(stored).textContent).toBe('X<img src=x onerror="top.document.title=`XSS`">');
  });

  it("keeps literal entity text as written instead of decoding it", () => {
    const heading = document.createElement("h2");
    typeInto(heading, "Tom &amp; Jerry <em>x</em> end");

    expect(rendered(readInlineContent(heading, "Heading")).textContent).toBe("Tom &amp; Jerry <em>x</em> end");
  });

  it("keeps a heading's own bold and links through an inline edit", () => {
    const heading = document.createElement("h1");
    writeInlineContent(heading, 'Fast <strong>plumbing</strong> in <a href="/areas">Leeds</a>', "Heading");

    expect(heading.querySelector("strong")?.textContent).toBe("plumbing");
    expect(readInlineContent(heading, "Heading")).toBe('Fast <strong>plumbing</strong> in <a href="/areas">Leeds</a>');
  });

  it("writes a text block's content as text, so nothing in it is parsed into the editing element", () => {
    const button = document.createElement("div");
    writeInlineContent(button, "<img src=x onerror=alert(1)> Book now", "Button");

    expect(button.querySelector("img")).toBeNull();
    expect(readInlineContent(button, "Button")).toBe("<img src=x onerror=alert(1)> Book now");
  });

  it("knows which blocks draw their content as markup", () => {
    for (const type of ["Heading", "Paragraph", "RichText", "Span", "ListItem", "TableCell", "Label"]) {
      expect(rendersContentAsMarkup(type)).toBe(true);
    }
    expect(rendersContentAsMarkup("Button")).toBe(false);
    expect(rendersContentAsMarkup("Link")).toBe(false);
  });
});
