import { jsx as i, jsxs as E } from "react/jsx-runtime";
import { debounce as L } from "lodash-es";
import { Save as R, Copy as S, Loader as j } from "lucide-react";
import { memo as D, useState as m, useEffect as x, useMemo as r, useCallback as b } from "react";
import O from "react-filerobot-image-editor";
import { useTranslation as P } from "react-i18next";
import { D as A, e as N } from "./index-d9BE8SKG.js";
const F = D(
  ({ imageUrl: d, onSave: c, onClose: u, defaultSavedImageName: y, isEditing: f = !1 }) => {
    const { t: o } = P(), [v, s] = m(!1), [p, I] = m(!0), [w, C] = m(!1);
    x(() => {
      const e = new Image();
      return e.src = d, e.onload = () => C(!0), () => {
        e.onload = null;
      };
    }, [d]), x(() => {
      const e = (t) => {
        t.key === "Escape" && p && (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation());
      };
      return document.addEventListener("keydown", e, !0), () => {
        document.removeEventListener("keydown", e, !0);
      };
    }, []);
    const g = r(
      () => L(async (e, t = !1) => {
        s(!0);
        const a = e.imageBase64;
        await c(a, t), I(!1), s(!1);
      }, 300),
      [c]
    ), n = b(
      (e, t = !1) => {
        g(e, t);
      },
      [g]
    ), h = b(() => {
      I(!1), u();
    }, [u]), l = r(
      () => ({
        tabsIds: ["Adjust", "Annotate", "Watermark", "Finetune", "Resize", "Filters"],
        toolsIds: ["Rotate"],
        defaultTabId: "Adjust",
        defaultToolId: "Rotate"
      }),
      []
    ), T = r(
      () => ({
        colors: {
          primary: "#000000",
          secondary: "#000000",
          tertiary: "#000000"
        }
      }),
      []
    ), k = r(
      () => f ? [
        {
          label: o("Update this file"),
          onClick: (e, t) => t((...a) => {
            s(!0), n(a[0], !1);
          }),
          icon: R
        },
        {
          label: o("Save as new file"),
          onClick: (e, t) => t((...a) => {
            s(!0), n(a[0], !0);
          }),
          icon: S
        }
      ] : [],
      [f, n, o]
    );
    return /* @__PURE__ */ i(A, { open: !0, onOpenChange: (e) => !e && h(), children: /* @__PURE__ */ E(
      N,
      {
        id: "chai-image-editor-container",
        className: "flex h-[80vh] max-h-[1232px] w-[80vw] max-w-[1232px] flex-col space-y-4 p-0",
        children: [
          v && /* @__PURE__ */ i("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 text-white", children: /* @__PURE__ */ i(j, { className: "h-4 w-4 animate-spin" }) }),
          p && w && /* @__PURE__ */ i(
            O,
            {
              theme: T,
              source: d,
              onSave: n,
              onClose: h,
              Text: { text: o("Add text here") },
              Rotate: { angle: 90, componentType: "slider" },
              tabsIds: l.tabsIds,
              defaultTabId: l.defaultTabId,
              defaultToolId: l.defaultToolId,
              savingPixelRatio: 20,
              previewPixelRatio: 6,
              defaultSavedImageName: y,
              moreSaveOptions: k,
              useZoomPresetsMenu: !0
            }
          )
        ]
      }
    ) });
  }
);
F.displayName = "ImageEditor";
export {
  F as default
};
