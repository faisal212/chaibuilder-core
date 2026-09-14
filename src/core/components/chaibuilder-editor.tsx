import { useAtom } from "jotai";
import { each, noop, omit } from "lodash-es";
import React, { useEffect, useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from "sonner";
import { chaiBuilderPropsAtom, chaiDesignTokensAtom, chaiPageExternalDataAtom } from "~/atoms/builder";
import { builderStore } from "~/atoms/store";
import { selectedLibraryAtom } from "~/atoms/ui";
import { CssThemeVariables } from "~/core/components/css-theme-var";
import { FallbackError } from "~/core/components/fallback-error";
import { RootLayout } from "~/core/components/layout/root-layout";
import { PreviewScreen } from "~/core/components/PreviewScreen";
import { useAutoSave } from "~/core/components/use-auto-save";
import { setDebugLogs } from "~/core/functions/logging";
import "~/core/index.css";
import i18n from "~/core/locales/load";
import { ExportCodeModal } from "~/core/modals/export-code-modal";
import { ScreenTooSmall } from "~/core/screen-too-small";
import { useLoadPageBlocks } from "~/core/components/use-load-page-blocks";
import { defaultThemeValues } from "~/hooks/default-theme-options";
import { useUnmountBroadcastChannel } from "~/hooks/use-broadcast-channel";
import { useBuilderProp } from "~/hooks/use-builder-prop";
import { useExpandTree } from "~/hooks/use-expand-tree";
import { useKeyEventWatcher } from "~/hooks/use-key-event-watcher";
import { useWatchPartialBlocks } from "~/hooks/use-partial-blocks-store";
import { builderSaveStateAtom } from "~/hooks/use-save-page";
import { ChaiBuilderEditorProps, ChaiTheme } from "~/types";

const ChaiWatchers = (props: ChaiBuilderEditorProps) => {
  const [saveState] = useAtom(builderSaveStateAtom);
  useAtom(selectedLibraryAtom);
  useKeyEventWatcher();
  useExpandTree();
  useAutoSave();
  useWatchPartialBlocks();
  useUnmountBroadcastChannel();

  useEffect(() => {
    builderStore.set(
      // @ts-ignore
      chaiBuilderPropsAtom,
      omit(props, ["blocks", "translations", "pageExternalData", "globalStyles"]),
    );
  }, [props]);

  useEffect(() => {
    builderStore.set(chaiPageExternalDataAtom, props.pageExternalData || {});
  }, [props.pageExternalData]);

  useEffect(() => {
    builderStore.set(chaiDesignTokensAtom, props.designTokens || {});
  }, [props.designTokens]);

  // After the effects above, so the page id is already in the store — the reason upstream gave for
  // a 400 ms delay that lost every edit made inside it (see use-load-page-blocks).
  useLoadPageBlocks(props.blocks);

  useEffect(() => {
    i18n.changeLanguage(props.locale || "en");
  }, [props.locale]);

  useEffect(() => {
    setDebugLogs(props.debugLogs ?? false);
  }, [props.debugLogs]);

  useEffect(() => {
    if (!props.translations) return;
    each(props.translations, (translations: any, lng: string) => {
      i18n.addResourceBundle(lng, "translation", translations, true, true);
    });
  }, [props.translations]);

  useEffect(() => {
    if (saveState !== "SAVED") {
      window.onbeforeunload = () => "";
    } else {
      window.onbeforeunload = null;
    }

    return () => {
      window.onbeforeunload = null;
    };
  }, [saveState]);
  return null;
};

const ChaiBuilderComponent = (props: ChaiBuilderEditorProps) => {
  const RootLayoutComponent = useMemo(() => props.layout || RootLayout, [props.layout]);
  const builderTheme = useBuilderProp("builderTheme", defaultThemeValues);
  const exportCodeEnabled = useBuilderProp("flags.exportCode", false);
  return (
    <>
      {props.children}
      <CssThemeVariables theme={builderTheme as ChaiTheme} />
      <RootLayoutComponent />
      {exportCodeEnabled && <ExportCodeModal />}
    </>
  );
};
/**
 * ChaiBuilder is the main entry point for the Chai Builder Studio.
 */
const ChaiBuilderEditor: React.FC<ChaiBuilderEditorProps> = (props: ChaiBuilderEditorProps) => {
  const onErrorFn = props.onError || noop;
  return (
    <div className="h-screen w-screen">
      <ErrorBoundary fallback={<FallbackError />} onError={onErrorFn}>
        <ScreenTooSmall />
        <ChaiBuilderComponent {...props} />
        <ChaiWatchers {...props} />
        <PreviewScreen />
        <Toaster richColors />
      </ErrorBoundary>
    </div>
  );
};

export { ChaiBuilderEditor };
