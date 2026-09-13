import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

// klyro fork. A write that changes nothing is not an edit: it must not go on the undo stack, count
// towards autosave, or put "Unsaved changes" back on a page that is saved.

vi.mock("~/hooks/use-broadcast-channel", () => ({ useBroadcastChannel: () => ({ postMessage: vi.fn() }) }));
vi.mock("~/hooks/use-check-structure", () => ({ useCheckStructure: () => vi.fn() }));
vi.mock("~/hooks/use-builder-prop", () => ({ useBuilderProp: (_key: string, fallback: unknown) => fallback }));

import { userActionsCountAtom } from "~/atoms/builder";
import { presentBlocksAtom } from "~/atoms/blocks";
import { builderStore } from "~/atoms/store";
import { useBlocksStoreUndoableActions } from "~/hooks/history/use-blocks-store-undoable-actions";
import { undoManager } from "~/hooks/history/use-undo-manager";
import { builderSaveStateAtom } from "~/hooks/use-save-page";
import type { ChaiBlock } from "~/types/common";

const heading = (content: string) => ({ _id: "h", _type: "Heading", _parent: null, content }) as unknown as ChaiBlock;
const contentOf = () => (builderStore.get(presentBlocksAtom)[0] as unknown as { content: string }).content;

describe("writing a block's props", () => {
  beforeEach(() => {
    undoManager.clear();
    builderStore.set(presentBlocksAtom, [heading("Hello")]);
    builderStore.set(builderSaveStateAtom, "SAVED");
    builderStore.set(userActionsCountAtom, 0);
  });

  it("leaves a saved page saved when the write changes nothing", () => {
    const { result } = renderHook(() => useBlocksStoreUndoableActions());
    act(() => result.current.updateBlocks(["h"], { content: "Hello" }));

    expect(undoManager.hasUndo()).toBe(false);
    expect(builderStore.get(userActionsCountAtom)).toBe(0);
    expect(builderStore.get(builderSaveStateAtom)).toBe("SAVED");
  });

  it("still records a real change as an edit", () => {
    const { result } = renderHook(() => useBlocksStoreUndoableActions());
    act(() => result.current.updateBlocks(["h"], { content: "Hi" }));

    expect(contentOf()).toBe("Hi");
    expect(undoManager.hasUndo()).toBe(true);
    expect(builderStore.get(userActionsCountAtom)).toBe(1);
    expect(builderStore.get(builderSaveStateAtom)).toBe("UNSAVED");
  });

  it("commits a change that was painted live first, measured against the values the caller gives", () => {
    builderStore.set(presentBlocksAtom, [heading("Hi")]);
    const { result } = renderHook(() => useBlocksStoreUndoableActions());
    act(() => result.current.updateBlocks(["h"], { content: "Hi" }, { content: "Hello" }));

    expect(undoManager.hasUndo()).toBe(true);
    act(() => undoManager.undo());
    expect(contentOf()).toBe("Hello");
  });

  it("ignores a multi-block write that changes nothing", () => {
    const { result } = renderHook(() => useBlocksStoreUndoableActions());
    act(() => result.current.updateMultipleBlocksProps([{ _id: "h", content: "Hello" }]));

    expect(undoManager.hasUndo()).toBe(false);
    expect(builderStore.get(builderSaveStateAtom)).toBe("SAVED");
  });
});
