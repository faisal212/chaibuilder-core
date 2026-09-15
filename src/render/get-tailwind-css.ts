// Tailwind 4 renderer, ported from chaibuilder/core main (39e0a51b, 2026-09-12) src/render/get-tailwind-css.ts.
// Same `getStylesForBlocks(blocks, includeBaseStyles)` signature as the v3 renderer it replaces; the
// v3-shaped config (theme extend, forms, typography, container queries, chaiBuilderPlugin) is fed to
// Tailwind 4's compile() through the `@config` bridge in ~/utils/tailwind-css-compat.
import twContainer from "@tailwindcss/container-queries";
import twForms from "@tailwindcss/forms";
import twTypography from "@tailwindcss/typography";
import { ChaiBlock } from "~/types/common";
import { compileTailwindCss } from "~/utils/tailwind-css-compat";
import { chaiBuilderPlugin, getChaiBuilderTheme } from "../utils";
import { blocksToStylesMarkup } from "./styles-markup";

async function getTailwindCSS(markupString: string[], safelist: string[] = [], includeBaseStyles: boolean = false) {
  return compileTailwindCss({
    markupStrings: markupString,
    safelist,
    includeBaseStyles,
    config: {
      darkMode: "class",
      theme: {
        extend: {
          ...getChaiBuilderTheme(),
          keyframes: {
            "accordion-down": {
              from: {
                height: "0",
              },
              to: {
                height: "var(--radix-accordion-content-height)",
              },
            },
            "accordion-up": {
              from: {
                height: "var(--radix-accordion-content-height)",
              },
              to: {
                height: "0",
              },
            },
          },
          animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
          },
        },
      },
      plugins: [twForms, twTypography, twContainer, chaiBuilderPlugin],
      corePlugins: { preflight: includeBaseStyles },
    },
  });
}

/**
 * Get the tailwind css for the blocks
 * @param blocks - The blocks to get the tailwind css for
 * @param includeBaseStyles - Whether to include the base styles
 * @returns The tailwind css for the blocks
 */
const getBlocksTailwindCSS = (blocks: ChaiBlock[], includeBaseStyles: boolean) => {
  return getTailwindCSS([blocksToStylesMarkup(blocks)], [], includeBaseStyles);
};

/**
 * Get the tailwind css for the blocks
 * @param blocks - The blocks to get the tailwind css for
 * @param includeBaseStyles - Whether to include the base styles
 * @returns The tailwind css for the blocks
 */
export const getStylesForBlocks = async (blocks: ChaiBlock[], includeBaseStyles: boolean = false): Promise<string> => {
  return await getBlocksTailwindCSS(blocks, includeBaseStyles);
};
