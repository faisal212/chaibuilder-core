import { filter, get, has } from "lodash-es";
import React, { useEffect, useMemo } from "react";
import { getIframeInitialContent, type TailwindCSSVersion } from "~/core/components/canvas/IframeInitialContent";
import {
  getThemeCustomFontFace,
  getThemeFontsUrls,
} from "~/core/components/canvas/static/chai-theme-helpers";
import { TailwindV4Theme, useTailwindV3 } from "~/core/components/canvas/static/head-tags";
import { CssThemeVariables } from "~/core/components/css-theme-var";
import { ChaiFrame, useFrame } from "~/core/frame";
import { useBuilderProp } from "~/hooks/use-builder-prop";
import { useDarkMode } from "~/hooks/use-dark-mode";
import { useTheme, useThemeOptions } from "~/hooks/use-theme";
import { useRegisteredFonts } from "~/runtime";
import { ChaiFontBySrc, ChaiFontByUrl, ChaiTheme } from "~/types";

const PreviewHeadTags = () => {
  const [chaiTheme] = useTheme();
  const chaiThemeOptions = useThemeOptions();
  const [darkMode] = useDarkMode();
  const { document: iframeDoc, window: iframeWin } = useFrame();
  const registeredFonts = useRegisteredFonts();
  const tailwindCSS = useBuilderProp<TailwindCSSVersion>("tailwindCSS", "4");

  useEffect(() => {
    if (darkMode) iframeDoc?.documentElement.classList.add("dark");
    else iframeDoc?.documentElement.classList.remove("dark");
  }, [darkMode, iframeDoc]);

  useTailwindV3(chaiTheme, chaiThemeOptions, iframeDoc, iframeWin, tailwindCSS === "3");

  const pickedFonts = useMemo(() => {
    const heading = get(chaiTheme, "fontFamily.heading");
    const body = get(chaiTheme, "fontFamily.body");
    return registeredFonts.filter((font) => font.family === heading || font.family === body);
  }, [chaiTheme, registeredFonts]);

  const fontUrls = useMemo(
    () => getThemeFontsUrls(filter(pickedFonts, (font) => has(font, "url")) as ChaiFontByUrl[]),
    [pickedFonts],
  );
  const customFontFaces = useMemo(
    () => getThemeCustomFontFace(filter(pickedFonts, (font) => has(font, "src")) as ChaiFontBySrc[]),
    [pickedFonts],
  );

  return (
    <>
      <CssThemeVariables theme={chaiTheme as ChaiTheme} />
      {tailwindCSS === "4" ? <TailwindV4Theme chaiThemeOptions={chaiThemeOptions} /> : null}
      {fontUrls.map((url, index) => (
        <link key={`preview-font-${index}`} rel="stylesheet" href={url} />
      ))}
      <style id="chai-custom-fonts" dangerouslySetInnerHTML={{ __html: customFontFaces }} />
    </>
  );
};

interface TailwindPreviewIframeProps {
  content: string;
  classes?: string;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
}

export const TailwindPreviewIframe = ({
  content,
  classes = "",
  className = "w-full rounded border-0",
  style = { minHeight: 80 },
  title = "Preview",
}: TailwindPreviewIframeProps) => {
  const tailwindCSS = useBuilderProp<TailwindCSSVersion>("tailwindCSS", "4");
  const tailwindScriptUrl = useBuilderProp<string | undefined>("tailwindScriptUrl", undefined);
  const initialContent = useMemo(
    () => getIframeInitialContent({ htmlDir: "ltr", tailwindCSS, tailwindScriptUrl }),
    [tailwindCSS, tailwindScriptUrl],
  );

  return (
    // @ts-ignore
    <ChaiFrame className={className} style={style} title={title} initialContent={initialContent}>
      <PreviewHeadTags />
      <div className="h-full p-4">
        <div className={classes || undefined} dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </ChaiFrame>
  );
};
