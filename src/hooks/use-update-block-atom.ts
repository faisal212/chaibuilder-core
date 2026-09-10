import { Atom, Getter, Setter, atom, useSetAtom } from "jotai";
import { useAtomCallback } from "jotai/utils";
import { find, isString } from "lodash-es";
import { useCallback } from "react";
import { pageBlocksAtomsAtom } from "~/atoms/blocks";
import { partialBlocksAtom } from "~/hooks/partial-blocks/atoms";
import { builderStore } from "~/atoms/store";
import { ChaiBlock } from "~/types/common";

const writeAtomValue = atom(
  null, // it's a convention to pass `null` for the first argument
  (get, set, { id, props }: { id: string; props: Record<string, any> }) => {
    const blockAsAtoms = get(pageBlocksAtomsAtom);
    const blockAtom = find(blockAsAtoms, (b) => (get(b) as ChaiBlock)._id === id);
    if (!blockAtom) {
      // klyro fork: the block may live in the site's header or footer rather than in the page. Those
      // are kept in their own store, so a write there lands in that store — the page's document is
      // never touched, which is exactly what makes editing a header on the page it appears on safe:
      // there is nothing merged into the page's array and nothing to split apart again on save.
      return setPartialBlockProps(get, set, id, props);
    }
    return set(blockAtom, { ...(get(blockAtom) as any), ...props });
  },
);

function setPartialBlockProps(get: Getter, set: Setter, id: string, props: Record<string, any>) {
  const partials = get(partialBlocksAtom);
  for (const [key, entry] of Object.entries(partials)) {
    if (!entry.blocks.some((block: ChaiBlock) => block._id === id)) continue;
    set(partialBlocksAtom, {
      ...partials,
      [key]: {
        ...entry,
        blocks: entry.blocks.map((block: ChaiBlock) => (block._id === id ? { ...block, ...props } : block)),
      },
    });
    return null;
  }
  return null;
}

export const useUpdateBlockAtom = () => {
  return useSetAtom(writeAtomValue);
};

export const useGetBlockAtomValue = (splitAtoms: Atom<Atom<ChaiBlock>[]>) => {
  return useAtomCallback(
    useCallback(
      (get, _set, idOrAtom: Atom<ChaiBlock> | string) => {
        const blockAsAtoms = get(splitAtoms);
        if (!blockAsAtoms || !blockAsAtoms.length) {
          return null;
        }
        const blockAtom = find(
          blockAsAtoms,
          (b) => (get(b) as ChaiBlock)._id === (isString(idOrAtom) ? idOrAtom : get(idOrAtom as Atom<ChaiBlock>)._id),
        );
        if (!blockAtom) {
          return null;
        }
        return get(blockAtom) as ChaiBlock;
      },
      [splitAtoms],
    ),
    { store: builderStore },
  );
};

export const useGetBlockAtom = (splitAtoms: Atom<Atom<ChaiBlock>[]>) => {
  return useAtomCallback(
    useCallback(
      (get, _set, idOrAtom: Atom<ChaiBlock> | string) => {
        const blockAsAtoms = get(splitAtoms);
        if (!blockAsAtoms || !blockAsAtoms.length) {
          console.warn("No blocks available in splitAtoms");
          return null;
        }
        const blockAtom = find(
          blockAsAtoms,
          (b) => (get(b) as ChaiBlock)._id === (isString(idOrAtom) ? idOrAtom : get(idOrAtom as Atom<ChaiBlock>)._id),
        );
        if (!blockAtom) {
          console.warn(`Block with id ${idOrAtom} not found`);
          return null;
        }
        return blockAtom;
      },
      [splitAtoms],
    ),
    { store: builderStore },
  );
};
