import { useAtom } from "jotai";
import { useEffect } from "react";
import { useBlocksStore } from "~/hooks/history/use-blocks-store-undoable-actions";
import { useBroadcastChannel } from "~/hooks/use-broadcast-channel";
import { useBuilderReset } from "~/hooks/use-builder-reset";
import { useCheckStructure } from "~/hooks/use-check-structure";
import { isPageLoadedAtom } from "~/hooks/use-is-page-loaded";
import { syncBlocksWithDefaultProps } from "~/runtime";
import { ChaiBlock } from "~/types";

/**
 * Puts the page's document into the editor the moment the editor mounts.
 *
 * Upstream deferred this write by 400 ms, "to allow the pageId to be set". The page id is written by
 * `ChaiWatchers`' effect that runs before this one in the same commit, so the deferral bought nothing
 * — and it cost an edit window. Anything added in those 400 ms was overwritten when the deferred write
 * landed: measured 2026-09-14, an Import HTML clicked 119–234 ms after the editor appeared showed its
 * paragraphs for one 50 ms sample and then lost them, three times in three. The block store is
 * module-scope, so after a remount (Discard changes, Restore) that window also showed the previous
 * document, and an edit made in it was lost the same way.
 */
export const useLoadPageBlocks = (blocks: ChaiBlock[] | undefined) => {
  const [, setAllBlocks] = useBlocksStore();
  const reset = useBuilderReset();
  const { postMessage } = useBroadcastChannel();
  const [, setIsPageLoaded] = useAtom(isPageLoadedAtom);
  const runValidation = useCheckStructure();

  useEffect(() => {
    const withDefaults = syncBlocksWithDefaultProps(blocks || []);
    // @ts-ignore — the store's setter is typed for its own history entries
    setAllBlocks(withDefaults);
    if (withDefaults && withDefaults.length > 0) {
      postMessage({ type: "blocks-updated", blocks: withDefaults });
    }
    reset();
    setIsPageLoaded(true);
    runValidation(withDefaults);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blocks]);
};
