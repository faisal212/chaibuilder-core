import { useAtom } from "jotai";
import { each, first, isEqual, keys, map } from "lodash-es";
import { presentBlocksAtom } from "~/atoms/blocks";
import { partialBlocksAtom } from "~/hooks/partial-blocks/atoms";
import { builderStore } from "~/atoms/store";
import { useBlocksStoreManager } from "~/hooks/history/use-blocks-store-manager";
import { useUndoManager } from "~/hooks/history/use-undo-manager";
import { ChaiBlock } from "~/types/common";

/**
 * klyro fork: a block the editor can change, wherever it lives.
 *
 * A page's own array, and then the blocks of every partial it uses. Every undoable prop write reads
 * a block's PREVIOUS values through this so it can put them back; reading the page's array alone
 * meant a write to anything inside the site's header threw on an undefined block before it reached
 * the store at all.
 */
const editableBlocks = (): ChaiBlock[] => {
  const partials = builderStore.get(partialBlocksAtom) as Record<string, { blocks: ChaiBlock[] }>;
  return [
    ...(builderStore.get(presentBlocksAtom) as ChaiBlock[]),
    ...Object.values(partials).flatMap((entry) => entry.blocks),
  ];
};

/**
 * klyro fork: whether a props write would change anything at all.
 *
 * Every write went on the undo stack and bumped the autosave counter, and both of those mark the page
 * UNSAVED. Plenty of writes change nothing — an inline edit opened and closed without typing, a
 * rich-text field that re-emits the value it already holds after a save — so the top bar went back
 * to "Unsaved changes" on a page that was saved, and the next Save wrote an identical revision.
 *
 * `before` is the caller's own "previous values" when it gave them (the settings panel paints a
 * change live first and only then commits it with the values from before), otherwise the block as
 * the store holds it. A block that cannot be found counts as a change, which is the old behaviour.
 */
const changesAnything = (
  blockIds: string[],
  props: Record<string, any>,
  latestBlocks: ChaiBlock[],
  oldPropsState?: Record<string, any>,
): boolean =>
  blockIds.some((_id) => {
    const before = oldPropsState ?? latestBlocks.find((block) => block._id === _id);
    if (!before) return true;
    return keys(props).some((key) => key !== "_id" && !isEqual(before[key], props[key]));
  });

export const useBlocksStore = () => {
  return useAtom(presentBlocksAtom);
};

export const useBlocksStoreUndoableActions = () => {
  const { add } = useUndoManager();
  const {
    setNewBlocks: setBlocks,
    addBlocks: addNewBlocks,
    removeBlocks: removeExistingBlocks,
    moveBlocks: moveExistingBlocks,
    updateBlocksProps,
  } = useBlocksStoreManager();

  const setNewBlocks = (newBlocks: ChaiBlock[]) => {
    const previousBlocks = builderStore.get(presentBlocksAtom) as ChaiBlock[];
    setBlocks(newBlocks);
    add({
      undo: () => setBlocks(previousBlocks),
      redo: () => setBlocks(newBlocks),
    });
  };

  const addBlocks = (newBlocks: ChaiBlock[], parent?: string, position?: number) => {
    addNewBlocks(newBlocks, parent, position);
    add({
      undo: () => removeExistingBlocks(map(newBlocks, "_id")),
      redo: () => addNewBlocks(newBlocks, parent, position),
    });
  };

  const removeBlocks = (blocks: ChaiBlock[]) => {
    const latestBlocks = builderStore.get(presentBlocksAtom) as ChaiBlock[];
    const parentId = first(blocks)?._parent;
    const siblings = latestBlocks.filter((block) => (parentId ? block._parent === parentId : !block._parent));
    const position = siblings.indexOf(first(blocks) as ChaiBlock);

    removeExistingBlocks(map(blocks, "_id"));
    add({
      undo: () => addNewBlocks(blocks, parentId ?? undefined, position),
      redo: () => removeExistingBlocks(map(blocks, "_id")),
    });
  };

  const moveBlocks = (blockIds: string[], parent: string | undefined, position: number) => {
    const latestBlocks = builderStore.get(presentBlocksAtom) as ChaiBlock[];
    // Save the current positions of the blocks for undo
    const currentPositions = map(blockIds, (_id: string) => {
      const block = latestBlocks.find((block) => block._id === _id) as ChaiBlock;
      const oldParent = block._parent || null;
      const siblings = latestBlocks
        .filter((block) => (oldParent ? block._parent === oldParent : !block._parent))
        .map((block) => block._id);
      const oldPosition = siblings.indexOf(_id);
      return { _id, oldParent, oldPosition };
    });

    //if the parent and position are the same as the current parent and position, do nothing
    const firstBlock = currentPositions.find(({ _id }) => _id === blockIds[0]);
    if (firstBlock && firstBlock.oldParent === parent && firstBlock.oldPosition === position) {
      return;
    }

    moveExistingBlocks(blockIds, parent ?? null, position);
    add({
      undo: () =>
        each(currentPositions, ({ _id, oldParent, oldPosition }) => {
          moveExistingBlocks([_id], oldParent ?? null, oldPosition);
        }),
      redo: () => moveExistingBlocks(blockIds, parent ?? null, position),
    });
  };

  const updateBlocks = (blockIds: string[], props: Partial<ChaiBlock>, oldPropsState?: Partial<ChaiBlock>) => {
    const latestBlocks = editableBlocks();
    if (!changesAnything(blockIds, props, latestBlocks, oldPropsState)) return;
    let previousPropsState = [];
    if (oldPropsState) {
      previousPropsState = map(blockIds, (_id: string) => {
        return { _id, ...oldPropsState };
      });
    } else {
      const propKeys = keys(props);
      previousPropsState = map(blockIds, (_id: string) => {
        const block = latestBlocks.find((block) => block._id === _id);
        const prevProps: Record<string, any> = { _id };
        each(propKeys, (key: string) => (prevProps[key] = block?.[key]));
        return prevProps;
      });
    }

    updateBlocksProps(map(blockIds, (_id: string) => ({ _id, ...props })));
    add({
      undo: () => updateBlocksProps(previousPropsState as Array<{ _id: string } & Partial<ChaiBlock>>),
      redo: () => updateBlocksProps(map(blockIds, (_id: string) => ({ _id, ...props }))),
    });
  };

  const updateMultipleBlocksProps = (blocks: Array<{ _id: string } & Partial<ChaiBlock>>) => {
    const latestBlocks = editableBlocks();
    if (!blocks.some((block) => changesAnything([block._id], block, latestBlocks))) return;
    let previousPropsState = [];
    previousPropsState = map(blocks, (block: Partial<ChaiBlock>) => {
      const propKeys = keys(block);
      const currentBlock = latestBlocks.find((currentBlock) => currentBlock._id === block._id);
      const prevProps: Record<string, any> = {};
      each(propKeys, (key: string) => (prevProps[key] = currentBlock?.[key]));
      return prevProps;
    });

    updateBlocksProps(blocks);
    add({
      undo: () => updateBlocksProps(previousPropsState as Array<{ _id: string } & Partial<ChaiBlock>>),
      redo: () => updateBlocksProps(blocks),
    });
  };

  const updateBlocksRuntime = (blockIds: string[], props: Record<string, any>) => {
    updateBlocksProps(map(blockIds, (_id: string) => ({ _id, ...props })));
  };

  return {
    moveBlocks,
    addBlocks,
    removeBlocks,
    updateBlocks,
    updateBlocksRuntime,
    setNewBlocks,
    updateMultipleBlocksProps,
  };
};
