import { useEffect, useRef } from "react";
import { useFrame } from "~/core/frame/frame-context";
import { useBlocksStore } from "~/hooks/history/use-blocks-store-undoable-actions";
import { useSelectedBlockIds } from "~/hooks/use-selected-blockIds";
import { nearestBlockElement } from "~/core/components/canvas/section-reveal";
import {
  CANVAS_EDIT_HOLD_MS,
  CANVAS_GESTURE_EVENTS,
  CANVAS_SCROLL_BEHAVIOR,
  cancelCanvasGlide,
  clampScrollTarget,
  decideCanvasScroll,
  clearCanvasScrollIntent,
  peekCanvasScrollIntent,
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
    // While the editor is animating a reveal, and for the hold window after it lands.
    let glideUntil = Number.NEGATIVE_INFINITY;

    const noteGesture = () => {
      lastGestureAt = view.performance.now();
      intended = view.scrollY;
      // A person taking hold of the canvas ends the editor's animation — its aim, and the frames it
      // still had to draw. A glide is short; it must still lose this.
      glideUntil = Number.NEGATIVE_INFINITY;
      cancelCanvasGlide();
    };

    const onScroll = () => {
      // Where the editor asked to go, if it asked. Not where this scroll landed: Safari coalesces
      // the editor's own scroll with the jump that follows into one event, so the landing place is
      // already the wrong one.
      // READ, not claimed: an intent that the next scroll event consumes is an intent the wrong
      // scroll event can consume, which cost three corrections. See `hold-canvas-scroll.ts`.
      const asked = peekCanvasScrollIntent();
      if (asked !== null) {
        const doc = view.document.documentElement;
        intended = clampScrollTarget(asked.target, doc.scrollHeight, view.innerHeight);
        glideUntil = asked.until;
        // It stands until the editor has arrived and its hold has run out; after that a scroll is
        // the person's business again.
        if (view.performance.now() > asked.until + CANVAS_EDIT_HOLD_MS) clearCanvasScrollIntent();
      }
      const action = decideCanvasScroll({
        scrollY: view.scrollY,
        intended,
        lastGestureAt,
        // The hold window runs from the END of the editor's own animation, not from the selection
        // that started it — otherwise a 260ms glide would spend most of its own protection.
        lastEditAt: Math.max(lastEditAt.current, glideUntil),
        glideUntil,
        now: view.performance.now(),
      });
      // The editor is animating this one; each of its frames is an absolute position, so there is
      // nothing here to correct.
      if (action === "glide") return;
      if (action === "restore") {
        // `instant` rather than `auto` — the canvas is served with `scroll-smooth`, so `auto`
        // glides. And `intended` is left alone: this is an undo, not a new position.
        view.scrollTo({ top: intended, behavior: CANVAS_SCROLL_BEHAVIOR });
        return;
      }
      if (action === "adopt") intended = view.scrollY;
    };

    /**
     * A pointer going down in the canvas is a person taking hold of the SCROLLBAR — unless it is
     * landing on a block, in which case it is a click.
     *
     * Treating the two alike is how a real defect survived: WebKit moves the canvas on a selection,
     * the click that caused the selection counted as "a person scrolling", and the jump was adopted
     * as theirs. Measured through the editor on WebKit — parked at 700, click a block, land at 1162.
     * A scrollbar drag's target is the document itself, so it is still honoured.
     */
    const notePointer = (event: Event) => {
      const target = event.target as Element | null;
      if (target && typeof target.closest === "function" && nearestBlockElement(target) !== null) return;
      noteGesture();
    };

    for (const name of CANVAS_GESTURE_EVENTS) {
      view.addEventListener(name, name === "pointerdown" ? notePointer : noteGesture, {
        passive: true,
        capture: true,
      });
    }
    view.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      for (const name of CANVAS_GESTURE_EVENTS) {
        view.removeEventListener(name, name === "pointerdown" ? notePointer : noteGesture, {
          capture: true,
        } as EventListenerOptions);
      }
      view.removeEventListener("scroll", onScroll);
      // The canvas this glide was aimed at is going away. Its frames and its settle loop would keep
      // calling `scrollTo` on a detached window for up to a second afterwards — bounded, unwatched,
      // and pointless. The editor's key bumps whenever the page being edited changes, so this is an
      // ordinary event rather than a teardown-only one.
      cancelCanvasGlide();
    };
  }, [doc]);

  return null;
};
