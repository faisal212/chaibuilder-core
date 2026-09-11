import { useEffect, useRef } from "react";
import { useFrame } from "~/core/frame/frame-context";
import { useBlocksStore } from "~/hooks/history/use-blocks-store-undoable-actions";
import { useSelectedBlockIds } from "~/hooks/use-selected-blockIds";
import {
  CANVAS_GESTURE_EVENTS,
  CANVAS_SCROLL_BEHAVIOR,
  lastIntentionalCanvasScroll,
  shouldRestoreScroll,
} from "~/core/components/canvas/hold-canvas-scroll";

/**
 * Puts the canvas back when something moves it that nobody asked to move it.
 *
 * See `hold-canvas-scroll.ts` for the measurements and for the five causes that were ruled out. The
 * short version: on WebKit every edit moved the canvas 1099px and took the element being edited off
 * the screen, without any script scrolling, without the document resizing, and without anything
 * re-mounting. This does not diagnose that; it holds the property that makes it not matter.
 *
 * Renders nothing. It listens inside the canvas document, which is the only place its scroll exists.
 */
export const CanvasScrollKeeper = () => {
  const { document: doc } = useFrame();
  const [blocks] = useBlocksStore();
  const [selectedIds] = useSelectedBlockIds();
  // When the editor last changed something. A prop write replaces the blocks array's identity, so
  // that covers every edit; the selection is the other thing that moved the canvas on WebKit (528px,
  // measured). The window these open is the only time this component touches the scroll at all.
  const lastEditAt = useRef(Number.NEGATIVE_INFINITY);

  useEffect(() => {
    lastEditAt.current = doc?.defaultView?.performance.now() ?? Number.NEGATIVE_INFINITY;
  }, [blocks, selectedIds, doc]);

  useEffect(() => {
    const view = doc?.defaultView;
    if (!view) return;

    let intended = view.scrollY;
    let lastGestureAt = Number.NEGATIVE_INFINITY;

    const noteGesture = () => {
      lastGestureAt = view.performance.now();
      intended = view.scrollY;
    };

    const onScroll = () => {
      const now = view.performance.now();
      const decision = {
        scrollY: view.scrollY,
        intended,
        lastGestureAt,
        lastIntentionalAt: lastIntentionalCanvasScroll(),
        lastEditAt: lastEditAt.current,
        now,
      };
      if (shouldRestoreScroll(decision)) {
        // `instant` rather than `auto` — the canvas is served with `scroll-smooth`, so `auto`
        // glides. And `intended` is left alone: this is an undo, not a new position.
        view.scrollTo({ top: intended, behavior: CANVAS_SCROLL_BEHAVIOR });
        return;
      }
      intended = view.scrollY;
    };

    for (const name of CANVAS_GESTURE_EVENTS) {
      view.addEventListener(name, noteGesture, { passive: true, capture: true });
    }
    view.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      for (const name of CANVAS_GESTURE_EVENTS) {
        view.removeEventListener(name, noteGesture, { capture: true } as EventListenerOptions);
      }
      view.removeEventListener("scroll", onScroll);
    };
  }, [doc]);

  return null;
};
