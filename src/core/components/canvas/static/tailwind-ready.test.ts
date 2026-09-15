import { afterEach, beforeEach, describe, expect, test } from "vitest";
import { TAILWIND_THEME_STYLE_ID } from "~/core/components/canvas/IframeInitialContent";
import { TAILWIND_READY_ATTRIBUTE, watchTailwindReady } from "./tailwind-ready";

/** A stand-in for the engine's generated sheet: a bare <style> in <head>, as both builds append. */
let sheet: HTMLStyleElement;
let dispose: () => void = () => {};
const flush = () => new Promise((resolve) => setTimeout(resolve, 0));
const ready = () => document.documentElement.hasAttribute(TAILWIND_READY_ATTRIBUTE);

beforeEach(() => {
  document.head.innerHTML = "";
  document.documentElement.removeAttribute(TAILWIND_READY_ATTRIBUTE);
  sheet = document.createElement("style");
  document.head.append(sheet);
});

afterEach(() => dispose());

describe("watchTailwindReady", () => {
  test("an unthemed first build does not count; the write after the theme is filled does", async () => {
    const placeholder = document.createElement("style");
    placeholder.type = "text/tailwindcss";
    placeholder.id = TAILWIND_THEME_STYLE_ID;
    document.head.append(placeholder);
    dispose = watchTailwindReady(document);

    sheet.textContent = ".flex{display:flex}";
    await flush();
    expect(ready()).toBe(false);

    placeholder.textContent = "@theme static { --color-primary: hsl(var(--primary)); }";
    await flush();
    expect(ready()).toBe(false);

    sheet.textContent = ".flex{display:flex}.bg-primary{background-color:hsl(var(--primary))}";
    await flush();
    expect(ready()).toBe(true);
  });

  test("with no placeholder in the document, the first generated write counts", async () => {
    dispose = watchTailwindReady(document);
    expect(ready()).toBe(false);
    sheet.textContent = ".flex{display:flex}";
    await flush();
    expect(ready()).toBe(true);
  });

  test("a sheet that is already themed when the watcher mounts is reported at once", () => {
    sheet.textContent = ".flex{display:flex}";
    dispose = watchTailwindReady(document);
    expect(ready()).toBe(true);
  });

  test("an empty write, or a write to a style that is not the generated sheet, is ignored", async () => {
    dispose = watchTailwindReady(document);
    sheet.textContent = "";
    const own = document.createElement("style");
    own.id = "selected-blocks";
    own.textContent = "[data-block-id]{outline:1px solid}";
    document.head.append(own);
    await flush();
    expect(ready()).toBe(false);
  });
});
