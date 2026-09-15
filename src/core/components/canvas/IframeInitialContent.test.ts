import { describe, expect, it } from "vitest";
import {
  getIframeInitialContent,
  IframeInitialContent,
  TAILWIND_CDN_URLS,
  TAILWIND_THEME_STYLE_ID,
} from "./IframeInitialContent";

describe("getIframeInitialContent", () => {
  it("defaults to the Tailwind v4 browser build from the CDN", () => {
    const html = getIframeInitialContent();
    expect(html).toContain(`src="${TAILWIND_CDN_URLS["4"]}"`);
    expect(html).not.toContain("__TAILWIND_SCRIPT__");
    expect(html).not.toContain("__HTML_DIR__");
    expect(IframeInitialContent).toBe(html);
  });

  it("uses the v3 Play CDN when tailwindCSS is 3", () => {
    const html = getIframeInitialContent({ tailwindCSS: "3" });
    expect(html).toContain(TAILWIND_CDN_URLS["3"]);
    expect(html).not.toContain(TAILWIND_CDN_URLS["4"]);
  });

  it("loads the engine from the host's own URL when one is given", () => {
    const html = getIframeInitialContent({ tailwindCSS: "4", tailwindScriptUrl: "/vendor/tailwindcss-browser-4.3.3.js" });
    expect(html).toContain('<script src="/vendor/tailwindcss-browser-4.3.3.js"></script>');
    expect(html).not.toContain("jsdelivr");
    expect(html).not.toContain("cdn.tailwindcss.com");
  });

  it("sets html dir for rtl layouts", () => {
    expect(getIframeInitialContent({ htmlDir: "rtl" })).toContain('dir="rtl"');
  });

  // The v4 browser build drops the whole sheet when one utility is unknown.
  it("keeps the v4 base rules on plain CSS variables and leaves the import to the build", () => {
    const html = getIframeInitialContent({ tailwindCSS: "4" });
    expect(html).toContain("@custom-variant dark (&:where(.dark, .dark *));");
    expect(html).toContain("border-color: var(--color-border, currentColor);");
    expect(html).not.toContain("@apply border-border");
    expect(html).not.toContain("__TAILWIND_STYLE__");
  });

  // A host's unlayered canvas rules (Klyro's base reset on `button`) must lose to a utility by
  // specificity, as they do on the published page — so utilities are not wrapped in a layer.
  it("imports theme and preflight in their layers and the utilities unlayered, like the renderer", () => {
    const html = getIframeInitialContent({ tailwindCSS: "4" });
    expect(html).toContain('@import "tailwindcss/theme" layer(theme);');
    expect(html).toContain('@import "tailwindcss/preflight" layer(base);');
    expect(html).toContain('@import "tailwindcss/utilities";');
    expect(html).not.toContain('@import "tailwindcss";');
  });

  it("ships an empty theme placeholder on v4 only, for TailwindV4Theme to fill", () => {
    expect(getIframeInitialContent({ tailwindCSS: "4" })).toContain(
      `<style type="text/tailwindcss" id="${TAILWIND_THEME_STYLE_ID}"></style>`,
    );
    expect(getIframeInitialContent({ tailwindCSS: "3" })).not.toContain(TAILWIND_THEME_STYLE_ID);
  });

  it("ships the rte utilities on both versions", () => {
    for (const tailwindCSS of ["3", "4"] as const) {
      const html = getIframeInitialContent({ tailwindCSS });
      expect(html).toContain('<style type="text/tailwindcss">');
      expect(html).toContain("@apply list-disc pl-6 text-base;");
    }
  });
});
