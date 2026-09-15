import { describe, expect, it } from "vitest";
import type { ChaiBlock } from "~/types/common";
import { getStylesForBlocks } from "./get-tailwind-css";

const block = (styles: string): ChaiBlock => ({ _id: "b1", _type: "Box", _name: "T", styles });

describe("getStylesForBlocks (Tailwind 4)", () => {
  it("generates CSS for a class in a #styles: string", async () => {
    const css = await getStylesForBlocks([block("#styles:,bg-red-500")]);
    expect(css).toContain("bg-red-500");
  });

  it("picks up every class of the standard #styles: format", async () => {
    const css = await getStylesForBlocks([block("#styles:,py-4 text-white")]);
    expect(css).toContain("py-4");
    expect(css).toContain("text-white");
  });

  it("leaves preflight out unless asked for", async () => {
    expect(await getStylesForBlocks([block("#styles:,text-sm")], false)).not.toContain("box-sizing");
    expect(await getStylesForBlocks([block("#styles:,text-sm")], true)).toContain("box-sizing");
  });

  it("compiles arbitrary gradients and background sizes", async () => {
    const css = await getStylesForBlocks([
      block(
        "#styles:,bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]",
      ),
    ]);
    expect(css).toContain("background-image");
    expect(css).toContain(
      "linear-gradient(to right,#80808012 1px,transparent 1px),linear-gradient(to bottom,#80808012 1px,transparent 1px)",
    );
    expect(css).toContain("background-size");
    expect(css).toContain("24px 24px");
  });

  it("splits #styles media,base commas so both candidates compile", async () => {
    const css = await getStylesForBlocks([block("#styles:md:flex,hidden")]);
    expect(css).toMatch(/(?:^|[^\w-])\.hidden\s*\{/);
    expect(css).toContain("md\\:flex");
  });

  // The theme colours and radii come from the v3-shaped config through @config, so a published
  // page keeps reading the same CSS variables the site sets on its root.
  it("resolves themed utilities to the site's CSS variables", async () => {
    const css = await getStylesForBlocks([block("#styles:,bg-primary rounded-lg rounded-md text-foreground font-heading")]);
    expect(css).toContain("hsl(var(--primary))");
    expect(css).toContain("var(--radius)");
    expect(css).toContain("calc(var(--radius) - 2px)");
    expect(css).toContain("hsl(var(--foreground))");
    expect(css).toContain("var(--font-heading)");
  });

  it("keeps dark mode on the class strategy", async () => {
    const css = await getStylesForBlocks([block("#styles:,dark:bg-background")]);
    expect(css).toContain(".dark");
    expect(css).not.toContain("prefers-color-scheme");
  });

  it("puts the forms and typography plugins on the page", async () => {
    const css = await getStylesForBlocks([block("#styles:,prose form-input")]);
    expect(css).toContain(".prose");
    expect(css).toContain(".form-input");
  });
});
