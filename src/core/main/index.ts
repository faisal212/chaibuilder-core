import ChaiBuilderCanvas from "~/core/components/canvas/canvas-area";
import BlockPropsEditor from "~/core/components/settings/block-settings";
import BlockStyleEditor from "~/core/components/settings/block-styling";
import AddBlocksPanel from "~/core/components/sidepanels/panels/add-blocks/add-blocks";
import ImportHTML from "~/core/components/sidepanels/panels/add-blocks/import-html";
import UILibrariesPanel from "~/core/components/sidepanels/panels/add-blocks/libraries-panel";
import Outline from "~/core/components/sidepanels/panels/outline/list-tree";
import ThemeConfigPanel from "~/core/components/sidepanels/panels/theme-configuration/theme-config-panel";
import i18n from "~/core/locales/load";
import { registerFeatureFlags } from "~/core/utils/feature-flag";
import type { ChaiBuilderEditorProps } from "~/types";

if (typeof window === "undefined") {
  throw new Error("@chaibuilder/sdk is only supported in the browser. Avoid using it in the server side.");
}

// Register feature flags
registerFeatureFlags();

// components
export { AIUserPrompt as ChaiAskAiUserPrompt } from "~/core/components/ask-ai-panel";
export { Breakpoints as ChaiScreenSizes } from "~/core/components/canvas/topbar/canvas-breakpoints";
export { DarkMode as ChaiDarkModeSwitcher } from "~/core/components/canvas/topbar/dark-mode";
export { UndoRedo as ChaiUndoRedo } from "~/core/components/canvas/topbar/undo-redo";
export { ChaiBuilderEditor } from "~/core/components/chaibuilder-editor";
export { AddBlocksDialog as ChaiAddBlocksDialog } from "~/core/components/layout/add-blocks-dialog";
export { BlockAttributesEditor as ChaiBlockAttributesEditor } from "~/core/components/settings/new-panel/block-attributes-editor";
export { DefaultChaiBlocks as ChaiDefaultBlocks } from "~/core/components/sidepanels/panels/add-blocks/default-blocks";
export { ChaiDraggableBlock } from "~/core/components/sidepanels/panels/add-blocks/draggable-block";
export { ExportCodeModal as ChaiExportCodeModal } from "~/core/modals/export-code-modal";
export {
  AddBlocksPanel as ChaiAddBlocksPanel,
  BlockPropsEditor as ChaiBlockPropsEditor,
  BlockStyleEditor as ChaiBlockStyleEditor,
  ChaiBuilderCanvas,
  ImportHTML as ChaiImportHTML,
  Outline as ChaiOutline,
  ThemeConfigPanel as ChaiThemeConfigPanel,
  UILibrariesPanel as ChaiUILibrariesPanel,
};

// i18n
export { i18n };

// helper functions
export { generateUUID as generateBlockId, cn as mergeClasses } from "~/core/functions/common-functions";
export { getClassValueAndUnit } from "~/core/functions/helper-fn";
export { getBlocksFromHTML as convertHTMLToChaiBlocks, getBlocksFromHTML } from "~/core/import-html/html-to-json";
export { defaultChaiLibrary } from "~/core/library-blocks/default-chai-library";

// types
export type { ChaiBuilderEditorProps };

export type { ChaiLibrary, ChaiLibraryBlock } from "~/types/chaibuilder-editor-props";

// constants
export { useTranslation } from "react-i18next";
export { PERMISSIONS } from "~/core/constants/PERMISSIONS";
export { useAddBlock } from "~/hooks/use-add-block";
export { useBlocksHtmlForAi } from "~/hooks/use-blocks-html-for-ai";
export { useHtmlToBlocks } from "~/hooks/use-html-to-blocks";
export { useI18nBlocks } from "~/hooks/use-i18n-blocks";
export { useLanguages } from "~/hooks/use-languages";
export { useReplaceBlock } from "~/hooks/use-replace-block";
export { useSavePage } from "~/hooks/use-save-page";
export { useSelectedBlock } from "~/hooks/use-selected-blockIds";
// klyro fork: the section editor lists the page's sections and selects one when a row is clicked,
// and it has to know which section the canvas selection sits in. Both are already computed here —
// the setter behind useSelectedBlock, and the ancestor chain the outline walks — and only the public
// entry was missing them.
export { useSelectedBlockHierarchy, useSelectedBlockIds } from "~/hooks/use-selected-blockIds";
export { useStreamMultipleBlocksProps } from "~/hooks/use-update-blocks-props";
// klyro fork: the editor host needs the theme override setter (to clear it) and the undo stack
// (to interleave its own entries). Both already exist; only the public entry was missing them.
export { useTheme, useThemeOptions } from "~/hooks/use-theme";
export { useUndoManager, undoManager } from "~/hooks/history/use-undo-manager";
// klyro fork: the owner-mode section editor renders a form over the blocks a section is made of, so
// it needs the live document (the host's own copy is the last SAVED one, which would show stale text
// and would not follow an undo) and a targeted, undoable prop write. The only exported writer,
// useStreamMultipleBlocksProps, types a value in character by character on a timer — an AI streaming
// effect, not a form field. Both of these already exist and are used internally.
export { useBlocksStore } from "~/hooks/history/use-blocks-store-undoable-actions";
export { useUpdateBlocksProps, useUpdateMultipleBlocksProps } from "~/hooks/use-update-blocks-props";
// klyro fork: Klyro's left column is its own block tree, so it has to do what the vendor's outline
// does — move a row, add one, delete one, duplicate one — and every one of those has to land on the
// SAME undo stack the canvas uses. useBlocksStoreUndoableActions is where the vendor keeps all of
// it (moveBlocks above all, which a drag needs); the writers already exported cover props only.
// useRemoveBlocks and useDuplicateBlocks are the row menu's two destructive entries, and both
// already handle the parts that are easy to get wrong: removing a block's whole subtree, selecting
// the parent afterwards, honouring the DELETE_BLOCK permission, and placing a duplicate directly
// after its original.
export { useBlocksStoreUndoableActions } from "~/hooks/history/use-blocks-store-undoable-actions";
export { useDuplicateBlocks } from "~/hooks/use-duplicate-blocks";
export { useRemoveBlocks } from "~/hooks/use-remove-blocks";
// klyro fork: a selection is TWO pieces of state. Every call site inside the SDK clears the styling
// target before it sets the block ids, so a tree that sets only the ids leaves the styling editor
// pointed at the block that was selected before.
export { useSelectedStylingBlocks } from "~/hooks/use-selected-styling-blocks";
// klyro fork: which left panel is open. Klyro replaces the SDK's root-layout wholesale, so its own
// shell draws the rail and decides what the left column shows — but it cannot simply keep that in
// its own state, because the SDK writes this atom from inside components Klyro still renders: the
// add-blocks dialog answers the canvas's "+" (CHAI_BUILDER_EVENTS.OPEN_ADD_BLOCK) by setting the
// active panel to "add-block" whenever drag-and-drop is on, which is Klyro's configuration. Reading
// the vendor's atom instead of shadowing it is what keeps that "+" working.
export { useSidebarActivePanel } from "~/hooks/use-sidebar-active-panel";
export type { TStyleBlock } from "~/hooks/use-selected-styling-blocks";
// klyro fork: reading ONE block without subscribing to the whole document. Prop writes go through
// splitAtom(presentBlocksAtom), so every keystroke replaces the array identity and useBlocksStore
// re-renders its caller; a tree with one component per block cannot pay that on every character.
// useGetBlockAtomValue is the vendor's own cheap per-block read, and pageBlocksAtomsAtom is the
// split-atom collection it takes as its argument.
export { pageBlocksAtomsAtom } from "~/atoms/blocks";
export { useGetBlockAtomValue } from "~/hooks/use-update-block-atom";
export * from "~/runtime/client";
export type { ChaiTheme } from "~/types/chaibuilder-editor-props";
