import { renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

/**
 * The page's document is in the editor before anything else can happen — no timer between the
 * editor mounting and its blocks arriving, so no edit made in that gap can be overwritten.
 */
const calls: string[] = [];
const setAllBlocks = vi.fn(() => { calls.push("setAllBlocks"); });
const reset = vi.fn(() => { calls.push("reset"); });
const postMessage = vi.fn();
const setIsPageLoaded = vi.fn((value: boolean) => { calls.push(`loaded:${value}`); });
const runValidation = vi.fn();

vi.mock("jotai", async () => {
  const real = await vi.importActual<typeof import("jotai")>("jotai");
  return { ...real, useAtom: () => [false, setIsPageLoaded] };
});
vi.mock("~/hooks/history/use-blocks-store-undoable-actions", () => ({ useBlocksStore: () => [[], setAllBlocks] }));
vi.mock("~/hooks/use-builder-reset", () => ({ useBuilderReset: () => reset }));
vi.mock("~/hooks/use-broadcast-channel", () => ({ useBroadcastChannel: () => ({ postMessage }) }));
vi.mock("~/hooks/use-check-structure", () => ({ useCheckStructure: () => runValidation }));
vi.mock("~/runtime", () => ({ syncBlocksWithDefaultProps: (blocks: unknown[]) => blocks }));

const { useLoadPageBlocks } = await import("./use-load-page-blocks");

beforeEach(() => {
  vi.useFakeTimers();
  calls.length = 0;
  vi.clearAllMocks();
});
afterEach(() => { vi.useRealTimers(); });

describe("useLoadPageBlocks", () => {
  test("the page's blocks are in the store on mount, with no timer in between", () => {
    const blocks = [{ _id: "a", _type: "Heading" }];
    renderHook(() => useLoadPageBlocks(blocks as never));
    // No timer has run: the write already happened.
    expect(setAllBlocks).toHaveBeenCalledWith(blocks);
    expect(calls).toEqual(["setAllBlocks", "reset", "loaded:true"]);
    expect(postMessage).toHaveBeenCalledWith({ type: "blocks-updated", blocks });
    expect(runValidation).toHaveBeenCalledWith(blocks);
  });

  test("the same blocks on a re-render are not written again", () => {
    const blocks = [{ _id: "a", _type: "Heading" }];
    const { rerender } = renderHook(({ b }) => useLoadPageBlocks(b as never), { initialProps: { b: blocks } });
    rerender({ b: blocks });
    vi.runAllTimers();
    expect(setAllBlocks).toHaveBeenCalledTimes(1);
  });

  test("a new document replaces the old one straight away", () => {
    const first = [{ _id: "a", _type: "Heading" }];
    const second = [{ _id: "b", _type: "Paragraph" }];
    const { rerender } = renderHook(({ b }) => useLoadPageBlocks(b as never), { initialProps: { b: first } });
    rerender({ b: second });
    expect(setAllBlocks).toHaveBeenLastCalledWith(second);
  });
});
