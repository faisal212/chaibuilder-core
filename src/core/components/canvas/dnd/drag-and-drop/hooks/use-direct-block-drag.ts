/**
 * ============================================================================
 * USE DIRECT BLOCK DRAG HOOK
 * ============================================================================
 *
 * Hook that enables direct click-and-drag functionality for blocks in the canvas.
 * Users can click and hold any block to immediately start dragging without
 * needing to select it first or use the floating action toolbar.
 *
 * @module use-direct-block-drag
 */

import { useSetAtom } from "jotai";
import { find } from "lodash-es";
import { useCallback, useRef } from "react";
import { presentBlocksAtom } from "~/atoms/blocks";
import { clickCountAtom, lastClickTimeAtom } from "~/atoms/click-detection";
import { builderStore } from "~/atoms/store";
import { selectedBlockIdsAtom } from "~/hooks/use-selected-blockIds";
import { ChaiBlock } from "~/types/common";
// Only start and end: `useDragAndDrop` also builds drag-over and drop, which subscribe every block to
// the whole block array and the drop indicator.
import { useBlockDragEnd } from "./use-block-drag-end";
import { useBlockDragStart } from "./use-block-drag-start";

interface DirectDragHandlers {
  onMouseDown: (e: React.MouseEvent) => void;
  onDragStart: (e: React.DragEvent) => void;
  onDragEnd: () => void;
}

/**
 * @HOOK useDirectBlockDrag
 * @description
 * Enables direct click-and-drag functionality for canvas blocks.
 * Automatically selects the block and initiates drag on mousedown + movement.
 *
 * klyro fork: it SUBSCRIBES to nothing a click changes. Every block on the canvas calls this hook, and
 * it used to read the last-click time, the click count, the selection and the whole block array with
 * `useAtom` — so each mousedown (which writes the click time and the selection) re-rendered every block
 * on the page. A block that paints its content as HTML (Paragraph, via `dangerouslySetInnerHTML` with a
 * fresh object each render) then had its child nodes rebuilt between the two clicks of a double-click,
 * and a browser only fires `dblclick` when both clicks land on the same node: double-clicking a
 * paragraph whose text sits in an inner `<p>` (anything brought in with Import HTML) never opened its
 * editor on the first try (measured 2026-09-14, 3/3). The values are now read and written in the store
 * at the moment of the event; what a click does is unchanged.
 */
export const useDirectBlockDrag = (): DirectDragHandlers => {
  const setSelectedBlockIds = useSetAtom(selectedBlockIdsAtom);
  const onDragStart = useBlockDragStart();
  const onDragEnd = useBlockDragEnd();
  const dragBlockIdRef = useRef<string | null>(null);

  /**
   * Handle mousedown - prepare for potential drag
   */
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      // Only handle left mouse button
      if (e.button !== 0) return;
      const currentTime = Date.now();
      const timeSinceLastClick = currentTime - (builderStore.get(lastClickTimeAtom) as number);
      if (timeSinceLastClick < 400 && timeSinceLastClick > 0) {
        builderStore.set(clickCountAtom, 2);
        return;
      }
      builderStore.set(lastClickTimeAtom, currentTime);

      const target = e.target as HTMLElement;

      // Check if clicking on a child block (let child handle it)
      const clickedBlockId = target.closest("[data-block-id]")?.getAttribute("data-block-id");
      if (!clickedBlockId) return;

      // Select this block immediately on mousedown
      setSelectedBlockIds([clickedBlockId]);
      dragBlockIdRef.current = clickedBlockId;
    },
    [setSelectedBlockIds],
  );

  /**
   * Handle dragstart - initiate the drag operation
   */
  const handleDragStart = useCallback(
    (e: React.DragEvent) => {
      if (!dragBlockIdRef.current) return;

      const selectedBlock = find(builderStore.get(presentBlocksAtom) as ChaiBlock[], { _id: dragBlockIdRef.current });
      if (selectedBlock) {
        onDragStart(e, selectedBlock, false);
      }
    },
    [onDragStart],
  );

  /**
   * Handle dragend - terminate the drag operation
   */
  const handleDragEnd = useCallback(() => {
    onDragEnd();
    dragBlockIdRef.current = null;
  }, [onDragEnd]);

  return {
    onMouseDown: handleMouseDown,
    onDragStart: handleDragStart,
    onDragEnd: handleDragEnd,
  };
};
