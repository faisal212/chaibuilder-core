import { useThrottledCallback } from "@react-hookz/web";
import { atom, useAtom, useAtomValue } from "jotai";
import { compact, has, isEmpty, noop } from "lodash-es";
import { useCallback } from "react";
import { userActionsCountAtom } from "~/atoms/builder";
import { builderStore } from "~/atoms/store";
import { useBuilderProp } from "~/hooks/use-builder-prop";
import { useCheckStructure } from "~/hooks/use-check-structure";
import { useGetPageData } from "~/hooks/use-get-page-data";
import { useIsPageLoaded } from "~/hooks/use-is-page-loaded";
import { useLanguages } from "~/hooks/use-languages";
import { usePermissions } from "~/hooks/use-permissions";
import { getRegisteredChaiBlock } from "~/runtime";
import { ChaiBlock } from "~/types/common";
import { extractPartialIds, partialBlocksAtom } from "./partial-blocks";

export const builderSaveStateAtom = atom<"SAVED" | "SAVING" | "UNSAVED">("SAVED"); // SAVING
builderSaveStateAtom.debugLabel = "builderSaveStateAtom";

export const checkMissingTranslations = (blocks: any[], lang: string): boolean => {
  if (!lang) return false;

  return blocks.some((block) => {
    if (!block?._type || block._type === "PartialBlock") {
      return false;
    }

    try {
      const blockDef = getRegisteredChaiBlock(block._type);
      if (!blockDef) return false;

      const i18nProps = has(blockDef, "i18nProps") ? (blockDef.i18nProps ?? []) : [];

      return i18nProps.some((prop: string) => {
        const translatedProp = `${prop}-${lang}`;
        return !block[translatedProp] || isEmpty(block[translatedProp]);
      });
    } catch (error) {
      console.warn(`Failed to get block definition for type: ${block._type}`, error);
      return false;
    }
  });
};

/**
 * klyro fork: whether the host's `onSave` said the save landed.
 *
 * `onSave` is typed `Promise<boolean | Error>`, and the builder used to throw that answer away: it
 * awaited the call and then marked the page SAVED 100ms later whatever came back. A save the server
 * refused therefore read "All changes saved", the leave-page guard (`ChaiWatchers`, armed while the
 * state is not SAVED) switched off, and the edit was gone on the next reload.
 *
 * Only an `Error` or `false` is a failure — a host whose `onSave` returns nothing keeps the old
 * behaviour. Exported for its unit test.
 */
export const saveSucceeded = (result: unknown): boolean => result !== false && !(result instanceof Error);

export const useSavePage = () => {
  const [saveState, setSaveState] = useAtom(builderSaveStateAtom);
  const onSave = useBuilderProp("onSave", async (_error: any) => {});
  const onSaveStateChange = useBuilderProp("onSaveStateChange", noop);
  const getPageData = useGetPageData();
  const { hasPermission } = usePermissions();
  const { selectedLang, fallbackLang } = useLanguages();
  const [isPageLoaded] = useIsPageLoaded();
  const partialBlocksStore = useAtomValue(partialBlocksAtom);
  const checkStructure = useCheckStructure();
  const [, setActionsCount] = useAtom(userActionsCountAtom);

  const needTranslations = () => {
    const pageData = getPageData();
    return !selectedLang || selectedLang === fallbackLang
      ? false
      : checkMissingTranslations(pageData.blocks || [], selectedLang);
  };

  const getAllPartialIds = useCallback(
    (blocks: ChaiBlock[]): string[] => {
      const collected = new Set<string>();
      const queue = extractPartialIds(blocks);

      while (queue.length > 0) {
        const id = queue.shift()!;
        if (collected.has(id)) continue;
        collected.add(id);

        const entry = partialBlocksStore[id];
        if (entry?.status === "loaded" && entry.dependencies.length > 0) {
          queue.push(...entry.dependencies);
        }
      }

      return [...collected];
    },
    [partialBlocksStore],
  );

  const getLinkPageIds = useCallback((blocks: ChaiBlock[]): string[] => {
    const blocksStr = JSON.stringify(blocks);
    const regex = /pageType:[^:]+:([a-f0-9-]{36})/gi;
    const uuids: string[] = [];
    let match;
    while ((match = regex.exec(blocksStr)) !== null) {
      if (match[1]) uuids.push(match[1]);
    }
    return compact([...new Set(uuids)]);
  }, []);

  const getDesignTokens = useCallback((blocks: ChaiBlock[]): Record<string, Record<string, string>> => {
    const regex = /dt#[^ "]+/g;
    const result: Record<string, Record<string, string>> = {};
    for (const block of blocks) {
      const blockStr = JSON.stringify(block);
      let match;
      while ((match = regex.exec(blockStr)) !== null) {
        if (match[0]) {
          const tokenId = match[0];
          if (!result[tokenId]) {
            result[tokenId] = {};
          }
          result[tokenId][block._id] = block._name || block._type;
        }
      }
    }
    return result;
  }, []);

  const shouldSkipSave = useCallback(
    (force: boolean) => {
      // Skip save if no permission or page not loaded
      if (!force && (!hasPermission("save_page") || !isPageLoaded)) {
        return true;
      }
      // Skip save if there are no unsaved changes
      if (!force && saveState === "SAVED") {
        return true;
      }
      return false;
    },
    [hasPermission, isPageLoaded, saveState],
  );

  /** klyro fork: a thrown `onSave` is a failed save too, not an unhandled rejection. */
  const callOnSave = async (data: Parameters<typeof onSave>[0]): Promise<unknown> => {
    try {
      return await onSave(data);
    } catch (error) {
      return error instanceof Error ? error : new Error("save_failed");
    }
  };

  /**
   * klyro fork: what the page is once the save came back.
   *
   * A failure goes straight back to UNSAVED, so the chip, the leave-page guard and the next save all
   * see the work as still unsaved. A success becomes SAVED only if nothing was edited while the
   * request was out: an edit during SAVING has already set UNSAVED, and flipping that to SAVED 100ms
   * later would have hidden exactly the change the save did not carry.
   */
  const settle = (result: unknown): boolean => {
    if (!saveSucceeded(result)) {
      setSaveState("UNSAVED");
      onSaveStateChange("UNSAVED");
      return false;
    }
    setTimeout(() => {
      if (builderStore.get(builderSaveStateAtom) !== "SAVING") return;
      setSaveState("SAVED");
      onSaveStateChange("SAVED");
    }, 100);
    return true;
  };

  const savePage = useThrottledCallback(
    async (autoSave: boolean = false, force: boolean = false) => {
      if (shouldSkipSave(force)) {
        return;
      }
      // Run structure validation before saving
      const pageData = getPageData();
      if (pageData?.blocks) {
        // @ts-ignore
        checkStructure(pageData.blocks);
      }
      setSaveState("SAVING");
      onSaveStateChange("SAVING");
      setActionsCount(0);
      return settle(
        await callOnSave({
          autoSave,
          blocks: pageData.blocks,
          needTranslations: needTranslations(),
          partialIds: getAllPartialIds((pageData.blocks as unknown as ChaiBlock[]) || []),
          linkPageIds: getLinkPageIds((pageData.blocks as unknown as ChaiBlock[]) || []),
          designTokens: getDesignTokens((pageData.blocks as unknown as ChaiBlock[]) || []),
        }),
      );
    },
    [
      shouldSkipSave,
      getPageData,
      setSaveState,
      setActionsCount,
      onSave,
      onSaveStateChange,
      isPageLoaded,
      checkStructure,
      getAllPartialIds,
      getLinkPageIds,
      getDesignTokens,
    ],
    3000, // save only every 3 seconds
  );

  const savePageAsync = async (force: boolean = false) => {
    if (shouldSkipSave(force)) {
      return;
    }
    setSaveState("SAVING");
    onSaveStateChange("SAVING");
    const pageData = getPageData();
    setActionsCount(0);
    return settle(
      await callOnSave({
        autoSave: true,
        blocks: pageData.blocks,
        needTranslations: needTranslations(),
        partialIds: getAllPartialIds((pageData.blocks as unknown as ChaiBlock[]) || []),
        linkPageIds: getLinkPageIds((pageData.blocks as unknown as ChaiBlock[]) || []),
        designTokens: getDesignTokens((pageData.blocks as unknown as ChaiBlock[]) || []),
      }),
    );
  };

  return { savePage, savePageAsync, saveState, setSaveState, needTranslations };
};
