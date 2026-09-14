import { renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

/**
 * The rich-text editor exists on its first render, even inside a Next.js host.
 *
 * TipTap 2.27 reads `window.next` as "server-rendered" when `immediatelyRender` is left undefined and
 * returns no editor on the first render. In the canvas that meant the first paragraph double-click
 * after the editor loaded opened nothing.
 *
 * TipTap decides "Next.js or not" ONCE, when its module is first evaluated. So the stand-in host has to
 * exist before TipTap loads: the module cache is reset and the hook imported afresh after `window.next`
 * is set. (The first version of this test set it too late — TipTap had already looked — and passed
 * with the fix removed.)
 */
type NextWindow = Window & { next?: unknown };

beforeEach(() => {
  vi.resetModules();
  (window as NextWindow).next = {};
});

afterEach(() => {
  delete (window as NextWindow).next;
});

describe("useRTEditor", () => {
  test("returns an editor on the very first render inside a Next.js host", async () => {
    const { useRTEditor } = await import("./use-rte-editor");
    const renders: unknown[] = [];
    const { result, unmount } = renderHook(() => {
      const editor = useRTEditor({ blockId: "first-render", value: "<p>Intro</p>", onBlur: () => {}, from: "canvas" });
      renders.push(editor);
      return editor;
    });
    expect(renders[0]).not.toBeNull();
    expect(result.current?.getHTML()).toContain("Intro");
    unmount();
  });
});
