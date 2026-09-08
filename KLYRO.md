# Why this fork exists

This is a fork of [`chaibuilder/core`](https://github.com/chaibuilder/core) at tag
`v4.0.0-beta.51` (commit `0e61c1b7`), maintained for [Klyro](https://github.com/faisal212/klyro).

It adds **two export lines and nothing else.** No behaviour is changed. That limit is the point:
this stays a *tracked vendor package*, not a codebase we maintain.

## What changed

| File | Change |
|---|---|
| `src/core/main/index.ts` | Exports `useTheme` / `useThemeOptions` and `useUndoManager` / `undoManager` from the public entry |
| `package.json` | `version` set to `4.0.0-beta.51-klyro.1`; `prepare: husky` removed |
| `.gitignore` | `dist` is no longer ignored |

Both hooks already existed in `src/hooks/`, fully written and used internally. They were simply
absent from the public entry — `src/hooks/index.ts` lists them, but that file is a dead barrel
(it points at `~/core/hooks/…`, which no longer exists), so nothing consumed it.

## Why those two hooks

**`useTheme`.** The canvas theme is
`{...defaults, ...(!isEmpty(theme) && theme), ...(!isEmpty(chaiTheme) && chaiTheme)}`, and the
builder's own theme panel writes the whole merged theme into `chaiThemeValuesAtom` on its first
edit. From then on the host application's `theme` prop can never repaint the canvas. The atom is
module-scope with no jotai `Provider`, so a React remount does not clear it either — only a page
load does. `setChaiTheme({})` empties the override (`isEmpty({})` makes that spread a no-op) and
lets the prop win again, which is what a host needs in order to revert or discard a design change
without reloading the page and destroying the user's undo history.

**`useUndoManager`.** The `UndoManager` instance is module-private, and `ChaiUndoRedo` is the only
undo-related symbol on the public surface. A host that performs its own reversible actions
alongside the builder cannot put them on the same stack, so `⌘Z` silently means two different
things depending on what the user last did. `add({ undo, redo })` fixes that with one shared stack.

## Why `dist` is committed

Klyro consumes this as a **git dependency**, so there is no npm tarball to install. `files` is
`["dist"]`, and `prepare` was removed so that nothing builds — and no devDependencies are
installed — when a consumer runs `pnpm install`.

## Build reproducibility

Built from source at `0e61c1b7`, `pnpm build` reproduces the published `4.0.0-beta.51` tarball
**exactly**: 202 of 202 files byte-identical by SHA-256. This fork's `dist` is that build plus the
two new exports.

## Upstream

The same two export lines have been offered upstream. If they are merged and released, Klyro
returns to the plain npm specifier and this fork is retired.

## Licence

Unchanged: BSD-3-Clause, copyright the original authors. See `LICENSE`.
