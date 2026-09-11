import { jsx as t, jsxs as c } from "react/jsx-runtime";
import { useThrottledCallback as k } from "@react-hookz/web";
import { get as v } from "lodash-es";
import { useState as p, useMemo as T, useCallback as E, useEffect as L } from "react";
import { useTranslation as N } from "react-i18next";
import { u as y, a as w, b as D, c as H, d as M, L as P, D as B, e as I, f as S, g as j, T as R } from "./index-CrqH_FTA.js";
const x = (a) => {
  const s = document.createElement("div");
  return s.innerHTML = a, s.innerHTML;
};
function J() {
  const { t: a } = N(), [s, f] = p(!1), [n, h] = p(""), [e, i] = y(), [d] = w(), g = D(), C = H(), { selectedLang: r } = M(), m = T(() => v(P, r, r), [r]), b = k(
    (o) => {
      if (!e) return;
      const l = x(o);
      C([e.blockId], { [e.blockProp]: l });
    },
    [],
    300
  ), u = E(() => {
    if (s && e) {
      const o = x(n);
      g([e.blockId], { [e.blockProp]: o });
    }
  }, [s, n, e]);
  return L(() => {
    e && !d.includes(e.blockId) && (u(), i(null));
  }, [d, e]), /* @__PURE__ */ t(B, { open: !0, onOpenChange: () => {
    u(), i(null);
  }, children: /* @__PURE__ */ c(I, { className: "flex max-h-[400px] min-h-[200px] max-w-4xl flex-col border-gray-700 text-black", children: [
    /* @__PURE__ */ t(S, { className: "shrink-0 pb-3", children: /* @__PURE__ */ t(j, { className: "flex items-center justify-between text-black", children: /* @__PURE__ */ c("div", { className: "space-x-3 text-sm font-semibold", children: [
      /* @__PURE__ */ t("span", { children: a("HTML Code Editor") }),
      m && /* @__PURE__ */ c("span", { className: "text-xs text-gray-400", children: [
        "(",
        m,
        ")"
      ] }),
      /* @__PURE__ */ t("span", { className: "text-xs text-gray-400", children: a("Scripts will be only executed in preview and live mode.") })
    ] }) }) }),
    /* @__PURE__ */ t("div", { className: "min-h-0 flex-1 overflow-hidden", children: /* @__PURE__ */ t(
      R,
      {
        className: "h-full w-full resize-none font-mono md:text-xs",
        value: e ? n || e.initialCode : "",
        onChange: (o) => {
          const l = o.target.value;
          f(!0), h(l), b(l);
        },
        rows: 10,
        placeholder: "Enter your code here..."
      }
    ) })
  ] }) });
}
export {
  J as default
};
