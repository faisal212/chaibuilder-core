import { describe, expect, it } from "vitest";
import { getIframeInitialContent, TAILWIND_V4_IMPORTS } from "~/core/components/canvas/IframeInitialContent";
import { getChaiThemeCssTheme } from "~/core/components/canvas/static/chai-theme-helpers";
import { TAILWIND_V4_STYLESHEETS } from "~/utils/tailwind-v4-stylesheets.generated";

// The same stylesheets the browser build carries, served from the vendored copies.
const loadStylesheet = async (id: string, base: string) => {
  const file = id === "tailwindcss" ? "index.css" : `${id.replace(/^tailwindcss\//, "").replace(/^\.\//, "")}`;
  const name = file.endsWith(".css") ? file : `${file}.css`;
  return { path: `virtual:tailwindcss/${name}`, base, content: TAILWIND_V4_STYLESHEETS[name] };
};

// Mirrors the browser build: concatenate every text/tailwindcss style in document order, with the
// theme placeholder filled the way TailwindV4Theme fills it (the imports first, then the theme),
// and prepend the default import only when the result carries none of its own.
const readTailwindStyles = (html: string, themeCss = "") => {
  const css = Array.from(html.matchAll(/<style type="text\/tailwindcss"[^>]*>([\s\S]*?)<\/style>/g))
    .map((match) => match[1])
    .join("\n");
  const filled = `${css}\n${TAILWIND_V4_IMPORTS}\n${themeCss}`;
  return filled.includes("@import") ? filled : `@import "tailwindcss";${filled}`;
};

const compileCanvas = async (css: string) => {
  const { compile } = await import("tailwindcss");
  return compile(css, { base: "/", loadStylesheet });
};

describe("tailwind v4 canvas CSS", () => {
  it("compiles with real tailwind v4 and emits themed utilities", async () => {
    const themeOptions = {
      fontFamily: { "font-heading": "Heading", "font-body": "Body" },
      borderRadius: "0.5rem",
      colors: [{ group: "Base", items: { primary: "Primary", border: "Border", background: "Bg", foreground: "Fg" } }],
    } as never;

    const css = readTailwindStyles(getIframeInitialContent({ tailwindCSS: "4" }), getChaiThemeCssTheme(themeOptions));
    const compiler = await compileCanvas(css);
    const built = compiler.build([
      "bg-primary",
      "rounded-lg",
      "font-heading",
      "dark:bg-background",
      "text-2xl",
      "border-border",
      "animate-accordion-down",
    ]);

    expect(built).toContain("hsl(var(--primary))");
    expect(built).toContain("var(--radius)");
    expect(built).toContain("var(--chai-font-heading)");
    expect(built).toContain(".dark");
    expect(built).toContain("accordion-down 0.2s ease-out");
    expect(built).toContain("@keyframes accordion-down");
  });

  // `@theme inline` would resolve values into the utilities but never emit these variables,
  // leaving the base `border-color: var(--color-border, currentColor)` on its fallback.
  it("emits the --color-* variables the canvas base styles depend on", async () => {
    const themeOptions = { colors: [{ group: "Base", items: { border: "Border", primary: "Primary" } }] } as never;
    const css = readTailwindStyles(getIframeInitialContent({ tailwindCSS: "4" }), getChaiThemeCssTheme(themeOptions));
    const built = (await compileCanvas(css)).build(["p-2"]);

    expect(built).toContain("--color-border: hsl(var(--border));");
    expect(built).toContain("--color-primary: hsl(var(--primary));");
  });

  it("compiles the rte utilities without the forms and typography plugins", async () => {
    const css = readTailwindStyles(getIframeInitialContent({ tailwindCSS: "4" }), getChaiThemeCssTheme({} as never));
    const built = (await compileCanvas(css)).build(["rte"]);
    expect(built).toContain(".rte");
    expect(built).toContain("list-style-type: disc");
  });

  it("emits the utilities unlayered and the theme and preflight in layers", async () => {
    const css = readTailwindStyles(getIframeInitialContent({ tailwindCSS: "4" }), getChaiThemeCssTheme({} as never));
    const built = (await compileCanvas(css)).build(["flex", "p-2"]);
    const utilitiesAt = built.indexOf(".flex {");
    expect(utilitiesAt).toBeGreaterThan(-1);
    // Every `@layer x {` block that opens before `.flex` must have closed again before it.
    const before = built.slice(0, utilitiesAt);
    let depth = 0;
    let inLayer = false;
    for (const token of before.match(/@layer [^{;]*\{|\{|\}/g) ?? []) {
      if (token.startsWith("@layer")) { inLayer = depth === 0 ? true : inLayer; depth += 1; }
      else if (token === "{") depth += 1;
      else { depth -= 1; if (depth === 0) inLayer = false; }
    }
    expect(inLayer).toBe(false);
    expect(built).toMatch(/@layer theme\s*\{/);
    expect(built).toMatch(/@layer base\s*\{/);
    // The only `@layer utilities` block is the rte one from the srcdoc, not Tailwind's utilities.
    expect(built.match(/@layer utilities\s*\{/g) ?? []).toHaveLength(1);
  });
});
