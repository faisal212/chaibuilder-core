import { act, renderHook } from "@testing-library/react";
import type React from "react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { clickCountAtom, lastClickTimeAtom } from "~/atoms/click-detection";
import { builderStore } from "~/atoms/store";
import { selectedBlockIdsAtom } from "~/hooks/use-selected-blockIds";

/**
 * Every block on the canvas calls this hook. A click must not re-render the component that calls it:
 * when it did, a Paragraph painted as HTML had its child nodes rebuilt between the two clicks of a
 * double-click, and the browser never fired `dblclick` on it.
 */
const onDragStart = vi.fn();
const onDragEnd = vi.fn();
vi.mock("./use-block-drag-start", () => ({ useBlockDragStart: () => onDragStart }));
vi.mock("./use-block-drag-end", () => ({ useBlockDragEnd: () => onDragEnd }));

const { useDirectBlockDrag } = await import("./use-direct-block-drag");

function mouseDownOn(blockId: string): React.MouseEvent {
  const block = document.createElement("div");
  block.setAttribute("data-block-id", blockId);
  const inner = document.createElement("p");
  block.appendChild(inner);
  return { button: 0, target: inner } as unknown as React.MouseEvent;
}

afterEach(() => {
  builderStore.set(lastClickTimeAtom, 0);
  builderStore.set(clickCountAtom, 0);
  builderStore.set(selectedBlockIdsAtom, []);
  vi.useRealTimers();
});

describe("useDirectBlockDrag", () => {
  test("a click selects the block without re-rendering the component that uses the hook", () => {
    let renders = 0;
    const { result } = renderHook(() => {
      renders++;
      return useDirectBlockDrag();
    });
    const rendersBefore = renders;
    act(() => result.current.onMouseDown(mouseDownOn("para-1")));
    expect(builderStore.get(selectedBlockIdsAtom)).toEqual(["para-1"]);
    expect(renders).toBe(rendersBefore);
  });

  test("a second press within 400 ms counts as a double, still without a re-render", () => {
    vi.useFakeTimers();
    let renders = 0;
    const { result } = renderHook(() => {
      renders++;
      return useDirectBlockDrag();
    });
    const rendersBefore = renders;
    const handlers = result.current;
    act(() => handlers.onMouseDown(mouseDownOn("para-1")));
    vi.advanceTimersByTime(150);
    act(() => handlers.onMouseDown(mouseDownOn("para-1")));
    expect(builderStore.get(clickCountAtom)).toBe(2);
    expect(renders).toBe(rendersBefore);
    // The handlers are the same functions after the clicks, so the blocks' props do not change either.
    expect(result.current.onMouseDown).toBe(handlers.onMouseDown);
  });
});
