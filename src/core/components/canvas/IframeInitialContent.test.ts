import { describe, expect, it } from "vitest";
import {
  getIframeInitialContent,
  IframeInitialContent,
  TAILWIND_BROWSER_CDN_URL,
  TAILWIND_THEME_STYLE_ID,
  TAILWIND_V4_IMPORTS,
} from "./IframeInitialContent";

describe("getIframeInitialContent", () => {
  it("loads the Tailwind 4 browser build from the CDN by default", () => {
    const html = getIframeInitialContent();
    expect(html).toContain(`src="${TAILWIND_BROWSER_CDN_URL}"`);
    expect(html).not.toContain("__TAILWIND_SCRIPT__");
    expect(html).not.toContain("__HTML_DIR__");
    expect(html).not.toContain("cdn.tailwindcss.com");
    expect(IframeInitialContent).toBe(html);
  });

  it("loads the engine from the host's own URL when one is given", () => {
    const html = getIframeInitialContent({ tailwindScriptUrl: "/vendor/tailwindcss-browser-4.3.3.js" });
    expect(html).toContain('<script src="/vendor/tailwindcss-browser-4.3.3.js"></script>');
    expect(html).not.toContain("jsdelivr");
  });

  it("sets html dir for rtl layouts", () => {
    expect(getIframeInitialContent({ htmlDir: "rtl" })).toContain('dir="rtl"');
  });

  // The browser build drops the whole sheet when one utility is unknown.
  it("keeps the base rules on plain CSS variables and declares the layer order", () => {
    const html = getIframeInitialContent();
    expect(html).toContain("@custom-variant dark (&:where(.dark, .dark *));");
    expect(html).toContain("border-color: var(--color-border, currentColor);");
    expect(html).toContain("@layer theme, base, components, utilities;");
    expect(html).not.toContain("@apply border-border");
    expect(html).not.toContain("__TAILWIND_STYLE__");
  });

  // The preload scanner fetches any `@import` it finds in a <style>, whatever its type; the
  // imports travel in TAILWIND_V4_IMPORTS, written from JavaScript, never in the document text.
  it("carries no @import text and exports the imports for the theme writer", () => {
    expect(getIframeInitialContent()).not.toContain("@import");
    expect(TAILWIND_V4_IMPORTS).toContain('@import "tailwindcss/theme" layer(theme);');
    expect(TAILWIND_V4_IMPORTS).toContain('@import "tailwindcss/preflight" layer(base);');
    expect(TAILWIND_V4_IMPORTS).toContain('@import "tailwindcss/utilities";');
    expect(TAILWIND_V4_IMPORTS).not.toContain('@import "tailwindcss";');
  });

  it("ships an empty theme placeholder for TailwindV4Theme to fill, and the rte utilities", () => {
    const html = getIframeInitialContent();
    expect(html).toContain(`<style type="text/tailwindcss" id="${TAILWIND_THEME_STYLE_ID}"></style>`);
    expect(html).toContain("@apply list-disc pl-6 text-base;");
  });
});
