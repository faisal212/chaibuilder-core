// Ported from chaibuilder/core main (39e0a51b, 2026-09-12), src/server/chai-builder/public/styles-markup.ts.
import { STYLES_KEY } from "~/core/constants/STRINGS";
import { getSplitChaiClasses } from "~/hooks/get-split-classes";
import type { ChaiBlock } from "~/types/common";

/**
 * Flatten `#styles:base,responsive…` strings into space-separated class candidates for Tailwind
 * scanning. Replacing every comma with a space breaks gradient commas inside `[]`;
 * `getSplitChaiClasses` is bracket-safe and matches how the renderer builds the DOM `class`.
 */
export const blocksToStylesMarkup = (blocks: ChaiBlock[]): string => {
  return JSON.stringify(blocks).replace(/#styles:([^"]*)/g, (_match, content: string) => {
    const { baseClasses, classes } = getSplitChaiClasses(`${STYLES_KEY}${content}`);
    return [baseClasses, classes].filter(Boolean).join(" ");
  });
};
