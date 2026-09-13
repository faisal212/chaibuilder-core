import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

// klyro fork. The shortcut sheet says Del deletes the selected block; the binding said "del", which
// react-hotkeys-hook@5 never matches, so only Backspace ever did.

const { removeBlocks } = vi.hoisted(() => ({ removeBlocks: vi.fn() }));

vi.mock("~/core/functions/block-helpers", () => ({ canDeleteBlock: () => true }));
vi.mock("~/hooks/history/use-undo-manager", () => ({
  undoManager: { hasUndo: () => false, hasRedo: () => false },
  useUndoManager: () => ({ undo: vi.fn(), redo: vi.fn() }),
}));
vi.mock("~/hooks/use-copy-blockIds", () => ({ useCopyBlocks: () => [[], vi.fn()] }));
vi.mock("~/hooks/use-cut-blockIds", () => ({ useCutBlockIds: () => [[], vi.fn()] }));
vi.mock("~/hooks/use-duplicate-blocks", () => ({ useDuplicateBlocks: () => vi.fn() }));
vi.mock("~/hooks/use-paste-blocks", () => ({ usePasteBlocks: () => ({ canPaste: vi.fn(), pasteBlocks: vi.fn() }) }));
vi.mock("~/hooks/use-remove-blocks", () => ({ useRemoveBlocks: () => removeBlocks }));
vi.mock("~/hooks/use-selected-blockIds", () => ({
  useSelectedBlockIds: () => [["b1"], vi.fn()],
  useSelectedBlock: () => ({ _id: "b1", _type: "Heading" }),
}));

import { useKeyEventWatcher } from "~/hooks/use-key-event-watcher";

const press = (key: string, code: string) =>
  act(() => {
    document.dispatchEvent(new KeyboardEvent("keydown", { key, code, bubbles: true }));
    document.dispatchEvent(new KeyboardEvent("keyup", { key, code, bubbles: true }));
  });

describe("deleting the selected block from the keyboard", () => {
  beforeEach(() => removeBlocks.mockClear());

  it("deletes it with the forward Delete key", () => {
    renderHook(() => useKeyEventWatcher());
    press("Delete", "Delete");
    expect(removeBlocks).toHaveBeenCalledWith(["b1"]);
  });

  it("still deletes it with Backspace", () => {
    renderHook(() => useKeyEventWatcher());
    press("Backspace", "Backspace");
    expect(removeBlocks).toHaveBeenCalledWith(["b1"]);
  });
});
