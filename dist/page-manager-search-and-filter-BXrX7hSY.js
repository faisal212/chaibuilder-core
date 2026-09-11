import { jsx as e, jsxs as s, Fragment as C } from "react/jsx-runtime";
import { useQueryClient as L } from "@tanstack/react-query";
import { get as o, isEmpty as v, filter as u, map as k } from "lodash-es";
import { Star as P, Plus as z, ListFilter as F, Search as S, ChevronsUpDown as I, ChevronsDownUp as G, RefreshCw as U } from "lucide-react";
import { useState as $, useMemo as j, useEffect as B } from "react";
import { useTranslation as g } from "react-i18next";
import { B as p, z as A } from "./register-chai-top-bar-DWmJ2efT.js";
import { S as D, z as M, A as R, E as b, F as w, G as y, H as N } from "./index-C7tJIwRP.js";
import { f as W, L as q, h as K, ag as Q } from "./index-DmHOT_-m.js";
import { u as _ } from "./use-page-expand-manager-Cf4MUEJw.js";
const H = ({ selectedPageType: t, setSelectedPageType: r }) => {
  const { t: n } = g(), [i, l] = $(""), { data: c } = K(), f = j(
    () => c.some((a) => !["page", "global"].includes(o(a, "key", ""))),
    [c]
  );
  if (B(() => {
    !f && t !== "all" && r("all");
  }, [f, t, r]), !f) return null;
  const d = (a) => {
    if (!i) return !0;
    const h = i.toLowerCase(), x = (E) => String(o(a, E, "")).toLowerCase().includes(h);
    return x("name") || x("key");
  }, m = c.find((a) => a.key === t);
  return /* @__PURE__ */ s(D, { onValueChange: r, value: t, children: [
    /* @__PURE__ */ e(
      M,
      {
        className: `${t === "all" ? "bg-gray-100/30 hover:bg-gray-100" : "gap-x-1 border bg-gray-100/30 hover:bg-gray-100"} h-9 w-max min-w-[150px] overflow-hidden whitespace-nowrap rounded p-0 px-2 py-1 text-xs text-gray-600 shadow-none ring-0 focus:ring-0 [&>svg]:hidden`,
        children: /* @__PURE__ */ s("div", { className: "flex w-full items-center justify-between gap-x-1.5", children: [
          /* @__PURE__ */ e("span", { className: "max-w-[150px] overflow-hidden truncate whitespace-nowrap font-medium leading-tight", children: (m == null ? void 0 : m.name) || n("All") }),
          /* @__PURE__ */ e(
            F,
            {
              className: `${t !== "all" ? "fill-sky-50 text-sky-500" : ""} pointer-events-none h-4 w-4 text-muted-foreground hover:bg-blue-300`
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ s(R, { children: [
      /* @__PURE__ */ e("div", { className: "sticky top-0 z-10 bg-white pb-2", children: /* @__PURE__ */ s("div", { className: "relative", children: [
        /* @__PURE__ */ e(S, { strokeWidth: 2, className: "absolute left-2 top-2.5 h-3.5 w-3.5 text-gray-400" }),
        /* @__PURE__ */ e(
          A,
          {
            placeholder: n("Search page types..."),
            className: "h-8 w-full rounded border pl-8 text-xs shadow-none",
            value: i,
            onChange: (a) => l(a.target.value),
            onKeyDown: (a) => a.stopPropagation()
          }
        )
      ] }) }),
      /* @__PURE__ */ e(b, { value: "all", children: n("All") }),
      !v(u(c, (a) => a.hasSlug && d(a))) && /* @__PURE__ */ s(C, { children: [
        /* @__PURE__ */ e("div", { className: "mt-2 border-t px-2 py-1.5 pt-2 text-xs font-semibold text-gray-500", children: n("Pages") }),
        k(
          [...u(c, (a) => a.hasSlug && d(a))].sort(
            (a, h) => o(a, "name", "").localeCompare(o(h, "name", ""))
          ),
          (a) => /* @__PURE__ */ e(b, { value: o(a, "key"), children: o(a, "name") }, o(a, "key"))
        )
      ] }),
      !v(u(c, (a) => !a.hasSlug && d(a))) && /* @__PURE__ */ s(C, { children: [
        /* @__PURE__ */ e("div", { className: "mt-2 border-t px-2 py-1.5 pt-2 text-xs font-semibold text-gray-500", children: n("Partials") }),
        k(
          [...u(c, (a) => !a.hasSlug && d(a))].sort(
            (a, h) => o(a, "name", "").localeCompare(o(h, "name", ""))
          ),
          (a) => /* @__PURE__ */ e(b, { value: o(a, "key"), children: o(a, "name") }, o(a, "key"))
        )
      ] }),
      v(u(c, d)) && /* @__PURE__ */ e("div", { className: "px-3 py-2 text-center text-sm text-gray-500", children: n("No matching page types found") })
    ] })
  ] });
}, O = ({ search: t, setSearch: r }) => {
  const { t: n } = g();
  return /* @__PURE__ */ s("div", { className: "relative flex h-9 flex-1 items-center gap-2 rounded-md border px-2.5", children: [
    /* @__PURE__ */ e("label", { htmlFor: "page-search-input", className: "sr-only", children: n("Search Pages") }),
    /* @__PURE__ */ e(
      S,
      {
        className: `${t ? "fill-sky-50 text-sky-500" : ""} pointer-events-none h-4 w-4 text-muted-foreground`,
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ e(
      A,
      {
        id: "page-search-input",
        placeholder: n("Search pages"),
        value: t,
        onChange: (i) => r(i.target.value),
        className: "border-none px-1.5 shadow-none outline-none ring-0 transition-none focus:outline-none focus:ring-0 focus-visible:ring-0",
        autoComplete: "off",
        autoFocus: !0
      }
    )
  ] });
}, T = ({ pages: t }) => {
  const { t: r } = g(), { expandAll: n, collapseAll: i, expandedPages: l } = _(null);
  return /* @__PURE__ */ s("div", { className: "flex gap-1", children: [
    /* @__PURE__ */ s(w, { children: [
      /* @__PURE__ */ e(y, { asChild: !0, children: /* @__PURE__ */ e(p, { variant: "outline", size: "icon", onClick: () => n(t), className: "rounded p-1 text-gray-500", children: /* @__PURE__ */ e(I, {}) }) }),
      /* @__PURE__ */ e(N, { children: r("Expand All") })
    ] }),
    /* @__PURE__ */ s(w, { children: [
      /* @__PURE__ */ e(y, { asChild: !0, children: /* @__PURE__ */ e(
        p,
        {
          disabled: l.length === 0,
          variant: "outline",
          size: "icon",
          onClick: () => i(),
          className: "rounded p-1 text-gray-500",
          children: /* @__PURE__ */ e(G, {})
        }
      ) }),
      /* @__PURE__ */ e(N, { children: r("Collapse All") })
    ] })
  ] });
}, le = ({ languages: t, selectedLanguage: r, setSelectedLanguage: n }) => {
  const i = W();
  return /* @__PURE__ */ e("div", { className: "scrollbar-hide flex gap-1 overflow-x-auto pb-1", children: t.map((l) => /* @__PURE__ */ s(
    p,
    {
      variant: r === l ? "default" : "outline",
      size: "sm",
      className: `h-6 flex-shrink-0 whitespace-nowrap rounded px-3 text-xs font-normal ${r === l ? "bg-black text-white hover:bg-black" : "text-gray-500"}`,
      onClick: () => n(l.toLowerCase()),
      children: [
        l === i && /* @__PURE__ */ e(P, { size: 4, className: `p-0.5 ${r === i ? "fill-white" : "fill-black"}` }),
        q[l] || ""
      ]
    },
    l
  )) });
}, V = () => {
  const { t } = g(), r = L();
  return /* @__PURE__ */ s(w, { children: [
    /* @__PURE__ */ e(y, { asChild: !0, children: /* @__PURE__ */ e(
      p,
      {
        size: "sm",
        variant: "ghost",
        onClick: () => r.invalidateQueries({ queryKey: [Q.GET_WEBSITE_PAGES] }),
        className: "mt-1 h-6 w-6",
        children: /* @__PURE__ */ e(U, {})
      }
    ) }),
    /* @__PURE__ */ e(N, { side: "bottom", children: t("Refresh pages list") })
  ] });
}, oe = ({
  pages: t,
  search: r,
  setSearch: n,
  languages: i,
  onAddPage: l,
  selectedLanguage: c,
  setSelectedLanguage: f,
  selectedPageType: d,
  setSelectedPageType: m,
  showUntranslatedPages: a,
  setShowUntranslatedPages: h
}) => {
  const { t: x } = g();
  return /* @__PURE__ */ s("div", { className: "space-y-3 border-b border-b-gray-200 px-4 pb-1", children: [
    /* @__PURE__ */ s("div", { className: "flex items-center gap-x-2", children: [
      /* @__PURE__ */ e(H, { selectedPageType: d, setSelectedPageType: m }),
      /* @__PURE__ */ e(O, { search: r, setSearch: n }),
      /* @__PURE__ */ e(T, { pages: t }),
      /* @__PURE__ */ s(p, { variant: "default", onClick: l, className: "rounded px-3 font-normal", children: [
        /* @__PURE__ */ e(z, { strokeWidth: 2, className: "stroke-white stroke-[3]" }),
        /* @__PURE__ */ e("span", { className: "font-normal text-white", children: x("Add Page") })
      ] }),
      /* @__PURE__ */ e(V, {})
    ] }),
    /* @__PURE__ */ e("div", { className: "flex items-center justify-between gap-2" })
  ] });
};
export {
  le as LanguageSelector,
  oe as default
};
