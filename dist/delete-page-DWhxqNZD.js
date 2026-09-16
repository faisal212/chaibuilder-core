import { jsx as s, jsxs as t } from "react/jsx-runtime";
import { isEmpty as U, get as k } from "lodash-es";
import { useMemo as f } from "react";
import { useTranslation as W } from "react-i18next";
import { B as L } from "./register-chai-top-bar-DWmJ2efT.js";
import { d as g, n as B, D as G, e as R, f as q, g as F, o as H, q as M } from "./index-D3voLMRT.js";
import { u as Q, l as T, h as $, b as j, g as z, m as I, L as J } from "./index-DHC7hjZy.js";
const x = (e, l) => {
  const i = l.filter((m) => m.parent === e);
  if (i.length === 0) return 0;
  let c = i.length;
  return i.forEach((m) => {
    c += x(m.id, l);
  }), c;
};
function p({ page: e, onClose: l }) {
  const { t: i } = W(), [, c] = Q(), { mutate: m, isPending: P } = T(), { data: y } = $(), { data: u = [] } = j(), { setSelectedLang: b, fallbackLang: C } = g(), [, A] = B(), a = !(e != null && e.primaryPage), { data: r = [] } = z(a ? e == null ? void 0 : e.id : void 0), { data: D } = I(), v = f(() => U(e == null ? void 0 : e.slug), [e == null ? void 0 : e.slug]), N = f(() => {
    if (!v || !(e != null && e.id) || !D) return [];
    const n = [];
    return Object.entries(D).forEach(([o, w]) => {
      w.partialBlocks.includes(e.id) && !w.isPartial && n.push({ id: o, name: w.name });
    }), n;
  }, [v, e.id, D]), S = f(() => !a || !r ? 0 : r.filter((n) => n.id !== e.id).length, [a, r, e.id]), h = f(() => {
    if (!(e != null && e.id) || !u.length) return 0;
    let n = x(e.id, u);
    return a && r && r.length > 0 && r.forEach((o) => {
      o.id !== e.id && (n += x(o.id, u));
    }), n;
  }, [e.id, u, a, r]), E = () => {
    P || m(e, {
      onSuccess: () => {
        e != null && e.primaryPage ? (window.history.replaceState({}, "", `/?page=${e.primaryPage}`), c(new URLSearchParams({ page: e.primaryPage }))) : (window.history.replaceState({}, "", "/"), c(new URLSearchParams())), window.dispatchEvent(new PopStateEvent("popstate")), b(C), A("outline"), l();
      }
    });
  }, d = y == null ? void 0 : y.find((n) => n.key === (e == null ? void 0 : e.pageType));
  return /* @__PURE__ */ s(G, { open: !!e, onOpenChange: l, children: /* @__PURE__ */ t(R, { children: [
    /* @__PURE__ */ t(q, { children: [
      /* @__PURE__ */ s(F, { children: i("Confirm Deletion") }),
      /* @__PURE__ */ t(H, { className: "py-4 text-slate-500", children: [
        /* @__PURE__ */ t("div", { children: [
          i("Are you sure you want to remove"),
          " ",
          /* @__PURE__ */ s("b", { children: (e == null ? void 0 : e.name) ?? (e == null ? void 0 : e.slug) }),
          " ",
          d != null && d.hasSlug ? (d == null ? void 0 : d.name) + "?" : i("page?")
        ] }),
        a && (S > 0 || h > 0) && /* @__PURE__ */ t("div", { className: "mt-3 rounded-md bg-red-50 p-3 text-sm", children: [
          /* @__PURE__ */ t("div", { className: "font-semibold text-red-800", children: [
            i("Warning: Deleting this primary page will also delete"),
            ":"
          ] }),
          /* @__PURE__ */ t("ul", { className: "mt-2 list-inside list-disc space-y-1 text-red-700", children: [
            h > 0 && /* @__PURE__ */ t("li", { children: [
              /* @__PURE__ */ s("span", { className: "font-medium", children: h }),
              " ",
              i(h === 1 ? "nested child page" : "nested child pages")
            ] }),
            S > 0 && /* @__PURE__ */ s("li", { children: i("All associated language pages") })
          ] })
        ] }),
        v && N.length > 0 && /* @__PURE__ */ t("div", { className: "mt-3 rounded-md bg-red-50 p-3 text-sm", children: [
          /* @__PURE__ */ t("div", { className: "font-semibold text-red-800", children: [
            i("Warning: This partial is currently used in the following pages"),
            ":"
          ] }),
          /* @__PURE__ */ s("ul", { className: "mt-2 list-inside list-disc space-y-1 text-red-700", children: N.map(({ id: n, name: o }) => /* @__PURE__ */ s("li", { children: /* @__PURE__ */ s("span", { className: "font-medium", children: o }) }, n)) })
        ] }),
        e.lang && /* @__PURE__ */ t("div", { className: "py-2 text-sm", children: [
          i("Language"),
          ":",
          " ",
          /* @__PURE__ */ s("span", { className: "font-medium text-gray-500", children: k(J, e.lang, e.lang) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t(M, { children: [
      /* @__PURE__ */ s(L, { variant: "outline", onClick: l, children: i("Cancel") }),
      /* @__PURE__ */ s(L, { variant: "destructive", disabled: P, onClick: E, children: i(P ? "Deleting..." : "Delete") })
    ] })
  ] }) });
}
export {
  p as default
};
