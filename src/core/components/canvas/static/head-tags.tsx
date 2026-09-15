import containerQueries from "@tailwindcss/container-queries";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import { filter, get, has, map } from "lodash-es";
import { memo, useEffect, useMemo } from "react";
import plugin from "tailwindcss/plugin";
import {
  TAILWIND_THEME_STYLE_ID,
  TAILWIND_V4_IMPORTS,
  type TailwindCSSVersion,
} from "~/core/components/canvas/IframeInitialContent";
import {
  getChaiThemeCssTheme,
  getChaiThemeOptions,
  getThemeCustomFontFace,
  getThemeFontsUrls,
} from "~/core/components/canvas/static/chai-theme-helpers";
import { watchTailwindBuilds, type TailwindWindow } from "~/core/components/canvas/static/tailwind-build-guard";
import { watchTailwindReady } from "~/core/components/canvas/static/tailwind-ready";
import { CssThemeVariables } from "~/core/components/css-theme-var";
import { useFrame } from "~/core/frame";
import { useBuilderProp } from "~/hooks/use-builder-prop";
import { useDarkMode } from "~/hooks/use-dark-mode";
import { useSelectedBlockIds } from "~/hooks/use-selected-blockIds";
import { useSelectedStylingBlocks } from "~/hooks/use-selected-styling-blocks";
import { useTheme, useThemeOptions } from "~/hooks/use-theme";
import { useRegisteredFonts } from "~/runtime";
import { ChaiFontBySrc, ChaiFontByUrl, ChaiTheme } from "~/types";
import type { ChaiThemeOptions } from "~/types/chaibuilder-editor-props";

/** The v3 Play CDN config. Only on `tailwindCSS: "3"`; the v4 build takes its theme as CSS. */
export const getTailwindV3Config = (chaiThemeOptions: ChaiThemeOptions) => ({
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1400px",
        },
      },
      ...getChaiThemeOptions(chaiThemeOptions),
    },
  },
  plugins: [
    typography,
    forms,
    containerQueries,
    plugin(function ({ addBase, theme }: any) {
      addBase({
        "h1,h2,h3,h4,h5,h6": {
          fontFamily: theme("fontFamily.heading"),
        },
        body: {
          fontFamily: theme("fontFamily.body"),
          color: theme("colors.foreground"),
          backgroundColor: theme("colors.background"),
        },
      });
    }),
  ],
});

/**
 * The v3 path: push the config into the Play CDN and keep its overlapping builds whole
 * (tailwind-build-guard). Neither runs on v4 — its builds are serialised and take no JS config.
 */
export const useTailwindV3 = (
  chaiTheme: unknown,
  chaiThemeOptions: ChaiThemeOptions,
  iframeDoc: Document | undefined,
  iframeWin: Window | undefined,
  enabled: boolean,
) => {
  useEffect(() => {
    const win = iframeWin as TailwindWindow | undefined;
    if (!enabled || !win || !win.tailwind) return;
    win.tailwind.config = getTailwindV3Config(chaiThemeOptions);
  }, [chaiTheme, chaiThemeOptions, iframeWin, enabled]);

  useEffect(() => {
    if (!enabled || !iframeDoc || !iframeWin) return;
    return watchTailwindBuilds(iframeDoc, iframeWin as TailwindWindow);
  }, [iframeDoc, iframeWin, enabled]);
};

/**
 * Writes the theme into the placeholder that ships with the iframe content rather than rendering
 * a style element. The v4 browser build only re-reads stylesheets on a "full" rebuild, and it
 * watches a style's content only once a compile has seen the element, so filling a known
 * placeholder is what reliably triggers the rebuild.
 */
export const TailwindV4Theme = ({ chaiThemeOptions }: { chaiThemeOptions: ChaiThemeOptions }) => {
  const { document: iframeDoc } = useFrame();
  // The imports ride along here rather than in the document text — see TAILWIND_V4_IMPORTS.
  const themeCss = useMemo(
    () => `${TAILWIND_V4_IMPORTS}\n${getChaiThemeCssTheme(chaiThemeOptions)}`,
    [chaiThemeOptions],
  );

  useEffect(() => {
    const themeStyle = iframeDoc?.getElementById(TAILWIND_THEME_STYLE_ID);
    if (themeStyle && themeStyle.textContent !== themeCss) themeStyle.textContent = themeCss;
  }, [iframeDoc, themeCss]);

  return null;
};

/** Sets `data-tailwind-ready` on the canvas `<html>` once the engine has written a themed sheet. */
const useTailwindReady = (iframeDoc: Document | undefined) => {
  useEffect(() => {
    if (!iframeDoc) return;
    return watchTailwindReady(iframeDoc);
  }, [iframeDoc]);
};

export const HeadTags = () => {
  const [chaiTheme] = useTheme();
  const chaiThemeOptions = useThemeOptions();
  const [darkMode] = useDarkMode();
  const { document: iframeDoc, window: iframeWin } = useFrame();
  const tailwindCSS = useBuilderProp<TailwindCSSVersion>("tailwindCSS", "4");

  useEffect(() => {
    if (darkMode) iframeDoc?.documentElement.classList.add("dark");
    else iframeDoc?.documentElement.classList.remove("dark");
  }, [darkMode, iframeDoc]);

  useTailwindV3(chaiTheme, chaiThemeOptions, iframeDoc, iframeWin, tailwindCSS === "3");
  useTailwindReady(iframeDoc);

  return (
    <>
      <CssThemeVariables theme={chaiTheme as ChaiTheme} />
      {tailwindCSS === "4" ? <TailwindV4Theme chaiThemeOptions={chaiThemeOptions} /> : null}
      <Fonts />
      <SelectedBlocks />
      <SelectedStylingBlocks />
    </>
  );
};

const SelectedStylingBlocks = () => {
  const [selectedStylingBlocks] = useSelectedStylingBlocks();
  const [selectedBlockIds] = useSelectedBlockIds();
  const styles = useMemo(() => {
    return `${map(selectedStylingBlocks, ({ id }: any) => `[data-style-id="${id}"]`).join(",")}{
                outline: 1px solid ${selectedBlockIds.length > 0 ? "#42a1fc" : "#de8f09"} !important; outline-offset: -1px;
            }`;
  }, [selectedStylingBlocks, selectedBlockIds]);
  return <style id="selected-styling-blocks" dangerouslySetInnerHTML={{ __html: styles }} />;
};

const SelectedBlocks = () => {
  const [selectedBlockIds] = useSelectedBlockIds();
  const styles = useMemo(() => {
    return `${map(selectedBlockIds, (id) => `[data-block-id="${id}"]`).join(",")}{
                outline: 1px solid #42a1fc !important; outline-offset: -1px;
            }`;
  }, [selectedBlockIds]);
  return <style id="selected-blocks" dangerouslySetInnerHTML={{ __html: styles }} />;
};

const Fonts = memo(function Fonts() {
  const [chaiTheme] = useTheme();
  const registeredFonts = useRegisteredFonts();
  const pickedFonts = useMemo(() => {
    const { heading, body } = {
      heading: get(chaiTheme, "fontFamily.heading"),
      body: get(chaiTheme, "fontFamily.body"),
    };
    return registeredFonts.filter((font) => font.family === heading || font.family === body);
  }, [chaiTheme?.fontFamily, registeredFonts]);

  const fonts = useMemo(
    () => getThemeFontsUrls(filter(pickedFonts, (font) => has(font, "url")) as ChaiFontByUrl[]),
    [pickedFonts],
  );
  const customFonts = useMemo(
    () => getThemeCustomFontFace(filter(pickedFonts, (font) => has(font, "src")) as ChaiFontBySrc[]),
    [pickedFonts],
  );
  return (
    <>
      {fonts.map((font, index) => (
        <link key={`google-font-${index}`} rel="stylesheet" href={font} />
      ))}
      <style id="chai-custom-fonts" dangerouslySetInnerHTML={{ __html: customFonts }} />
    </>
  );
});
