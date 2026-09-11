import { describe, expect, test, vi } from "vitest";
import { render } from "@testing-library/react";

/**
 * What the keeper does when the canvas it is holding goes away.
 *
 * A glide keeps frames and a settle loop in flight for up to a second after it starts. If the
 * editor's key bumps in the middle of one — a different page opened, the site's header opened on
 * its own — the old canvas document is detached and every one of those callbacks is still holding a
 * reference to its window, scrolling something nobody can see.
 */
const cancelCanvasGlide = vi.fn();
const listeners: string[] = [];
const removed: string[] = [];

const view = {
  scrollY: 0,
  performance: { now: () => 0 },
  document: { documentElement: { scrollHeight: 5000 } },
  innerHeight: 900,
  addEventListener: (name: string) => { listeners.push(name); },
  removeEventListener: (name: string) => { removed.push(name); },
};
const frameDocument = { defaultView: view };

vi.mock("~/core/frame/frame-context", () => ({ useFrame: () => ({ document: frameDocument }) }));
vi.mock("~/hooks/history/use-blocks-store-undoable-actions", () => ({ useBlocksStore: () => [[]] }));
vi.mock("~/hooks/use-selected-blockIds", () => ({ useSelectedBlockIds: () => [[]] }));
vi.mock("~/core/components/canvas/section-reveal", () => ({ nearestBlockElement: () => null }));
vi.mock("~/core/components/canvas/hold-canvas-scroll", async () => {
  const real = await vi.importActual<typeof import("~/core/components/canvas/hold-canvas-scroll")>(
    "~/core/components/canvas/hold-canvas-scroll",
  );
  return { ...real, cancelCanvasGlide: () => cancelCanvasGlide() };
});

const { CanvasScrollKeeper } = await import("~/core/components/canvas/canvas-scroll-keeper");

describe("CanvasScrollKeeper", () => {
  test("it stops the editor's animation when the canvas goes away", () => {
    const { unmount } = render(<CanvasScrollKeeper />);
    expect(cancelCanvasGlide).not.toHaveBeenCalled();
    expect(listeners).toContain("scroll");

    unmount();

    expect(removed).toContain("scroll");
    expect(cancelCanvasGlide).toHaveBeenCalledTimes(1);
  });
});
