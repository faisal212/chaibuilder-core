# Why this fork exists

This is a fork of [`chaibuilder/core`](https://github.com/chaibuilder/core) at tag
`v4.0.0-beta.51` (commit `0e61c1b7`), maintained for [Klyro](https://github.com/faisal212/klyro).

It began (release `-1`) as two export lines and nothing else — a tracked vendor package. It is now
a **maintained divergence**: upstream's `main` has since become `chaicore 0.1.0`, a 300-file
rewrite (`src/core` → `src/builder`, no tags), so there is no branch to rebase onto. Fixes land here,
each with a test, and upstream work is **ported** file for file, with attribution, when Klyro needs
it. The same BSD-3 licence covers all of it.

## What the fork carries

Releases are `4.0.0-beta.51-klyro.<n>`, tagged `klyro-v4.0.0-beta.51-<n>`. `-27` is a mis-tag and
is never pinned. The ledger of every fix, with the measurement that justified it, is Klyro's
`docs/planning/chai-sdk-fork-PROGRESS.md` and `docs/planning/editor-qa-fixes-PROGRESS.md`.

| Area | What the fork changed |
|---|---|
| Public entry | Exports `useTheme` / `useThemeOptions` and `useUndoManager` / `undoManager` (`-1`) |
| Canvas | Section reveal on selection, scroll kept across remounts, rich-text editor fixes (open on first double-click, no rewrite on Escape, imported paragraphs editable), pop-up placement, edits in the first 400 ms kept |
| **Tailwind 4** (`-29`) | Canvas styled by the Tailwind 4 browser build, published pages compiled by Tailwind 4 `compile()`, the SDK's own stylesheet built by Tailwind 4 — see below |
| `package.json` | `version` per release; `prepare: husky` removed; `dist` committed |

## Tailwind 4 (`-29`, 2026-09-15)

Ported from upstream `chaibuilder/core` main commit `39e0a51b` (2026-09-12, "feat: initial commit
tailwind v4") into this fork's layout:

- **Builder prop `tailwindCSS: "3" | "4"`** (default `"4"`). `IframeInitialContent.ts` is now
  `getIframeInitialContent({ htmlDir, tailwindCSS, tailwindScriptUrl })`: the v3 document as before
  (Play CDN + `window.tailwind.config` + the `-24` build guard), or the v4 document (`@custom-variant
  dark`, base border colour, RTE utilities, and an empty `<style id="chai-tailwind-theme">` that
  `TailwindV4Theme` fills with `getChaiThemeCssTheme()` — an `@theme static` block).
- **One deliberate difference from upstream:** the engine's script URL is a builder prop,
  `tailwindScriptUrl`, so a host can serve `@tailwindcss/browser` from its own origin. Upstream's CDN
  URLs remain the defaults.
- **A "styled" signal, new here:** `static/tailwind-ready.ts` sets `data-tailwind-ready` on the
  canvas `<html>` at the first generated-sheet write that carries the theme. A host that wants to
  reveal the canvas only once it is styled has something to wait on.
- **Renderer:** `getStylesForBlocks(blocks, includeBaseStyles)` keeps its signature and its
  v3-shaped config, compiled through Tailwind 4's `compile()` via the `@config` bridge in
  `utils/tailwind-css-compat.ts` (candidate extraction, a per-request compiler pool, a min-width media
  sort); Tailwind's stylesheets are vendored into `utils/tailwind-v4-stylesheets.generated.ts` by
  `scripts/vendor-tailwind-v4-css.mjs`, so nothing reads `node_modules` at runtime.
  `tailwindcss` is a **peer dependency `^4`**: the consumer's copy compiles its pages.
- **The SDK's own stylesheet** (`src/index.css` → `dist/sdk.css`) is built by Tailwind 4 through
  `@config "../tailwind.config.js"`; `@apply` in the other stylesheets goes through `@reference`.
- Gone: `@mhsdesign/jit-browser-tailwindcss`, `@tailwindcss/aspect-ratio`, `@tailwindcss/line-clamp`,
  `autoprefixer`, `tailwindcss@3`.

## Why `dist` is committed

Klyro consumes this as a **git dependency**, so there is no npm tarball to install. `files` is
`["dist"]`, and `prepare` was removed so that nothing builds — and no devDependencies are
installed — when a consumer runs `pnpm install`. `pnpm build` (`tsc && vite build`) regenerates it;
`pnpm test` (`vitest --run`) is the suite.

## Upstream

The two original export lines are offered upstream as
[chaibuilder/core#811](https://github.com/chaibuilder/core/pull/811). Since upstream is now a
rewrite, the way to retire this fork is a future re-port of Klyro onto `chaicore`, not a merged PR.

## Licence

Unchanged: BSD-3-Clause, copyright the original authors. See `LICENSE`.
