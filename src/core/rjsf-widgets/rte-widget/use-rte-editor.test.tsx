import { renderHook } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { useRTEditor } from "./use-rte-editor";

/**
 * The rich-text editor exists on its first render, even inside a Next.js host.
 *
 * TipTap 2.27 reads `window.next` as "server-rendered" when `immediatelyRender` is left undefined and
 * returns no editor on the first render. In the canvas that meant the first paragraph double-click
 * after the editor loaded opened nothing. `window.next` is set here to stand in for the Next.js host.
 */
type NextWindow = Window & { next?: unknown };

afterEach(() => {
  delete (window as NextWindow).next;
});

describe("useRTEditor", () => {
  test("returns an editor on the very first render inside a Next.js host", () => {
    (window as NextWindow).next = {};
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
