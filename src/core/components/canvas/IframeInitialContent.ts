// Tailwind 3 / 4 switch ported from chaibuilder/core main (39e0a51b, 2026-09-12), in the fork's own
// layout. One deliberate difference from upstream: the script URL is a builder prop
// (`tailwindScriptUrl`), so a host can serve the Tailwind browser build from its own origin;
// upstream's CDN URLs stay the defaults.
const IframeInitialContentTemplate: string = `<!doctype html>
<html lang="en" dir="__HTML_DIR__" class="scroll-smooth h-full overflow-y-auto">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="__TAILWIND_SCRIPT__"></script>
    <style>
      html { height: 100%; overflow:auto; }
      body { height: 100%; }
      .air-highlight{ outline: 1px solid #42a1fc !important; outline-offset: -1px;}
      .air-highlight-multi{ outline: 1px solid #29e503 !important; outline-offset: -1px;}
      body{   -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none;
              -moz-user-select: none;-ms-user-select: none; user-select: none; }
      html{
        -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
      }
      /** IMPORTANT: Make fields content editable in SAFARI */
      [contenteditable] {-webkit-user-select: text;user-select: text;}
  
      html::-webkit-scrollbar { width: 0 !important }
      .aspect-auto{aspect-ratio: auto;}
      .aspect-square{aspect-ratio: 1/1;}
      .aspect-video{aspect-ratio: 16/9;}
      .dragging [data-dnd="leaf"] { pointer-events: none; } .dragging [data-dnd="leaf"] * { pointer-events: none; }
      .dragging [data-dnd="ignore"], .dragging [data-dnd="ignore"] * { pointer-events: none; }
      a{ pointer-events: none !important; }
      [contenteditable="true"], [contenteditable="true"] * { cursor: text !important; }
      [contenteditable="true"] {
          outline: none;
          box-shadow: 0 0 0px 4px rgba(36, 150, 255, 0.2);
          -webkit-user-select: text;
          -moz-user-select: text;
          user-select: text;
      }
      .frame-root .frame-content { height: 100%; }
      [data-drop="yes"] { outline: 2px dashed orange !important; outline-offset: -2px }
      [data-dnd="yes"] { pointer-events: auto !important}
      [data-dnd="no"],[data-block-type="GlobalBlock"],[data-block-type="PartialBlock"] > * { pointer-events: none !important; }
      [data-block-type="GlobalBlock"],[data-block-type="PartialBlock"] { position: relative !important; }
      .partial-overlay { pointer-events: auto !important; }
      [data-dnd-dragged="yes"] { opacity: 0.6; pointer-events: none; }
      [data-dnd-dragged="no"] { opacity: 1; pointer-events: auto !important; }
      [force-show] { display: block !important; }
      [data-cut-block="yes"] { pointer-events: none !important; display: none !important; }
    </style>    
    <style id="highlighted-block">
      [data-highlighted]{
        outline: 1px solid #42a1fc !important; outline-offset: -1px;
      }
    </style>
    <style>
      .react-colorful {
        height: 120px !important;
        width: 180px !important;
      }
      .react-colorful > div {
        margin-bottom: 4px;
      }
      .react-colorful__saturation {
        border-radius: 4px !important;
      }
      .react-colorful__hue,
      .react-colorful__alpha {
        height: 12px !important;
        border-radius: 4px !important;
      }
      .react-colorful__pointer {
        width: 16px !important;
        height: 16px !important;
        border: 1.5px solid #fff !important;
        cursor: pointer !important;
        z-index: 10002 !important;
      }
      #active-inline-editing-element{outline: 2px solid #00c951;}
    </style>
    __TAILWIND_STYLE__
  </head>
  <body class="font-body antialiased h-full">
    <div class="frame-root h-full"></div>
  </body>
</html>`;

export type TailwindCSSVersion = "3" | "4";

export const TAILWIND_THEME_STYLE_ID = "chai-tailwind-theme";

const RTE_UTILITIES = `
      @layer utilities {
        .rte {
          h1 {
            @apply text-2xl;
          }
          h2 {
            @apply text-xl;
          }
          h3 {
            @apply text-lg;
          }
          h4 {
            @apply text-base;
          }
          h5 {
            @apply text-sm;
          }
          h6 {
            @apply text-xs;
          }
          p {
            &:empty {
              @apply h-4;
            }
          }
          ul {
            @apply list-disc pl-6 text-base;
          }
          ol {
            @apply list-decimal pl-6 text-base;
          }
          li > p {
            @apply m-0;
          }
          blockquote {
            @apply pl-4 text-base;
            p {
              @apply pl-4 text-base;
            }
          }
        }
      }`;

// The v3 Play CDN styles the canvas from the config pushed into `window.tailwind.config`.
const TAILWIND_V3_STYLE = `<style type="text/tailwindcss">${RTE_UTILITIES}
    </style>`;

// The v4 browser build concatenates every `style[type="text/tailwindcss"]` into a single
// compile. One unknown utility fails the whole sheet, so base styles here stay on plain CSS
// vars; theme-dependent utilities come from the `@theme` block written into the placeholder
// below.
//
// The imports are spelled out (a difference from upstream, which lets the build prepend
// `@import "tailwindcss"`): the full import puts every utility in `@layer utilities`, where any
// unlayered rule a host adds to the canvas — a base reset on `button`, say — beats it whatever
// its specificity. The renderer emits utilities UNLAYERED (`tailwindcss/utilities` alone), so a
// published page resolves the same conflict by specificity. The canvas now does the same: theme
// and preflight in their layers, utilities unlayered — one cascade in the editor and on the site.
const TAILWIND_V4_STYLE = `<style type="text/tailwindcss">
      @import "tailwindcss/theme" layer(theme);
      @import "tailwindcss/preflight" layer(base);
      @import "tailwindcss/utilities";
      @custom-variant dark (&:where(.dark, .dark *));
      @layer base {
        *,
        ::after,
        ::before {
          border-color: var(--color-border, currentColor);
        }
        body {
          color: var(--color-foreground);
          background-color: var(--color-background);
        }
      }${RTE_UTILITIES}
    </style>
    <!--
      Theme placeholder, filled by TailwindV4Theme. It ships in the initial content so the first
      compile registers it: the build only re-reads stylesheets on a "full" rebuild, and it starts
      watching a style element's content once it has seen it. A style added later is only picked up
      through the added-node path, and anything it misses there is never compiled and never errors.
    -->
    <style type="text/tailwindcss" id="${TAILWIND_THEME_STYLE_ID}"></style>`;

export const TAILWIND_CDN_URLS: Record<TailwindCSSVersion, string> = {
  "3": "https://cdn.tailwindcss.com/3.4.17?plugins=forms@0.5.9,typography@0.5.15,aspect-ratio@0.4.2",
  "4": "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4",
};

const TAILWIND_STYLES: Record<TailwindCSSVersion, string> = {
  "3": TAILWIND_V3_STYLE,
  "4": TAILWIND_V4_STYLE,
};

export type IframeInitialContentOptions = {
  htmlDir?: "ltr" | "rtl" | string;
  tailwindCSS?: TailwindCSSVersion;
  /** Where the Tailwind engine script comes from; defaults to the CDN for the chosen version. */
  tailwindScriptUrl?: string;
};

export const getIframeInitialContent = ({
  htmlDir = "ltr",
  tailwindCSS = "4",
  tailwindScriptUrl,
}: IframeInitialContentOptions = {}): string =>
  IframeInitialContentTemplate.replace("__HTML_DIR__", htmlDir)
    .replace("__TAILWIND_SCRIPT__", tailwindScriptUrl || TAILWIND_CDN_URLS[tailwindCSS])
    .replace("__TAILWIND_STYLE__", TAILWIND_STYLES[tailwindCSS]);

/** The v4 canvas document with the defaults, for callers that only need a string. */
export const IframeInitialContent: string = getIframeInitialContent();
