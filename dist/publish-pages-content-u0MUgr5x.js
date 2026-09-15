import { jsxs as n, jsx as t, Fragment as $ } from "react/jsx-runtime";
import { find as I, filter as a, map as b, keys as K, get as U, includes as C, orderBy as N, isEmpty as Q, uniq as A, first as J, concat as V } from "lodash-es";
import { Lock as W, GlobeIcon as X, File as Y, Edit as Z } from "lucide-react";
import { useState as F, useCallback as ee, useMemo as p, useEffect as G, startTransition as B } from "react";
import { B as j } from "./register-chai-top-bar-DWmJ2efT.js";
import { e as te, f as se, g as le, o as ae, q as ne } from "./index-BK9p0KJB.js";
import { ai as re, aj as oe, ag as D, am as O, an as ce, f as ie, h as de, ao as ue, T as q, ap as he } from "./index-DPHXbkqh.js";
import { LanguageSelector as me } from "./page-manager-search-and-filter-CRD-Qily.js";
import { useQuery as ge } from "@tanstack/react-query";
const pe = () => {
  const s = re(), d = oe();
  return ge({
    queryKey: [D.GET_CHANGES],
    queryFn: async () => d(s, { action: D.GET_CHANGES })
  });
}, fe = ({ page: s, selectedPages: d, handleCheckboxChange: k, getPageType: f, hasSlug: h, currentOwnerId: r }) => {
  const u = O(), { data: i } = ue(r), o = r === u ? null : i == null ? void 0 : i.name;
  return /* @__PURE__ */ n("tr", { className: "group relative border-b last:border-b-0 hover:bg-gray-50", children: [
    /* @__PURE__ */ n(
      "td",
      {
        scope: "row",
        className: `flex items-center gap-x-1 whitespace-nowrap px-6 py-2 text-gray-900 dark:text-white ${o ? "opacity-50" : ""}`,
        children: [
          o ? /* @__PURE__ */ t(W, { className: "h-4 w-4 fill-red-200 text-red-500" }) : /* @__PURE__ */ t(
            "input",
            {
              checked: C(d, s == null ? void 0 : s.id),
              onClick: (x) => {
                x.stopPropagation(), k(s == null ? void 0 : s.id);
              },
              type: "checkbox",
              className: "cursor-pointer rounded focus:outline-none focus:ring-0"
            }
          ),
          " ",
          h(s.pageType) ? /* @__PURE__ */ t(Y, { className: "h-4 w-4" }) : /* @__PURE__ */ t(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ t(q, { content: s.name, side: "top", showTooltip: s.name.length > 25, children: /* @__PURE__ */ t("span", { className: "max-w-[200px] truncate font-medium text-black", children: s.name }) }),
          s.slug && /* @__PURE__ */ t(q, { content: s.slug, side: "top", showTooltip: s.slug.length > 25, children: /* @__PURE__ */ t("span", { className: "max-w-[200px] truncate font-mono text-xs text-muted-foreground", children: s.slug }) })
        ]
      }
    ),
    /* @__PURE__ */ t("td", { className: "px-2", children: f(s == null ? void 0 : s.pageType) }),
    /* @__PURE__ */ t("td", { className: "px-4 text-right", children: J(s.changes) || "" }),
    /* @__PURE__ */ t($, { children: o && /* @__PURE__ */ n("button", { className: "absolute right-0 top-0 flex h-full items-center gap-x-1 rounded bg-red-50 px-2 py-0.5 text-xs font-light text-red-500 opacity-0 group-hover:opacity-100", children: [
      /* @__PURE__ */ t(Z, { size: 12, className: "stroke-[3]" }),
      " ",
      /* @__PURE__ */ t("span", { className: "font-medium", children: o }),
      " is editing this page"
    ] }) })
  ] }, s == null ? void 0 : s.id);
}, ve = ({
  onClose: s = () => {
  },
  isPending: d,
  publishPage: k
}) => {
  const f = O(), { pageToUser: h } = ce(), [r, u] = F([]), i = ie(), [o, x] = F(i), { data: T, isFetching: v } = pe(), { data: g } = de(), w = ee((e) => {
    var l;
    return (l = I(g, { key: e })) == null ? void 0 : l.hasSlug;
  }, [g]), y = p(
    () => a(g, (e) => !w(e.key)).map((e) => e.key),
    [w, g]
  ), E = A(b(T, "lang")).filter(Boolean), c = p(
    () => a(T, (e) => e.pageType === "theme" || e.pageType === "design_tokens" ? !1 : o === i ? e.lang === o || e.lang === "" : e.lang === o),
    [T, o, i]
  ), S = p(
    () => a(c, (e) => !y.includes(e.pageType)),
    [c, y]
  ), P = p(
    () => a(c, (e) => y.includes(e.pageType)),
    [c, y]
  );
  G(() => {
    const e = b(a(c, { online: !0 }), "id");
    B(() => u(e));
  }, [c]), G(() => {
    const e = a(K(h), (l) => U(h, [l, "userId"]) !== f);
    B(() => u((l) => a(l, (m) => !C(e, m))));
  }, [h, f]);
  const L = r.length === (c == null ? void 0 : c.length), _ = (e) => {
    u((l) => C(l, e) ? a(l, (m) => m !== e) : V(l, e));
  }, H = () => {
    u(L ? [] : b(c, "id"));
  }, z = () => {
    k(
      { ids: A(r) },
      {
        onSuccess: () => {
          s(), he("CENTER_CENTER"), x(i);
        }
      }
    );
  }, M = (e) => {
    if (e === "theme") return "Theme";
    const l = I(g, { key: e });
    return l ? l == null ? void 0 : l.name : e;
  }, R = p(() => {
    const e = [
      { label: "Updated", top: "pt-2" },
      ...N(a(S, { online: !0 }), "pageType"),
      ...N(a(P, { online: !0 }), "pageType")
    ].filter((m) => m.pageType !== "theme" && m.pageType !== "design_tokens"), l = [
      { label: "Offline", top: "pt-6" },
      ...N(a(S, { online: !1 }), "pageType"),
      ...N(a(P, { online: !1 }), "pageType")
    ];
    return [...e, ...l];
  }, [S, P]);
  return /* @__PURE__ */ n(te, { className: "flex max-h-[80%] max-w-4xl flex-col", children: [
    /* @__PURE__ */ n(se, { children: [
      /* @__PURE__ */ t(le, { children: "Publish changes" }),
      /* @__PURE__ */ t(ae, { className: "text-xs", children: "Select the pages you want to publish. Click publish when you're done." })
    ] }),
    E.length > 0 && /* @__PURE__ */ t("div", { className: "my-[2px] mt-0", children: /* @__PURE__ */ t(
      me,
      {
        languages: [i, ...E],
        selectedLanguage: o,
        setSelectedLanguage: x
      }
    ) }),
    /* @__PURE__ */ t("div", { className: "no-scrollbar relative -mx-4 -mt-4 h-full max-h-full overflow-y-auto", children: v ? /* @__PURE__ */ n("div", { className: "space-y-2 px-1", children: [
      /* @__PURE__ */ t("div", { className: "mt-2 h-6 w-full animate-pulse rounded bg-gray-200" }),
      /* @__PURE__ */ t("div", { className: "h-6 w-full animate-pulse rounded bg-gray-200" }),
      /* @__PURE__ */ t("div", { className: "h-6 w-full animate-pulse rounded bg-gray-200" }),
      /* @__PURE__ */ t("div", { className: "h-6 w-full animate-pulse rounded bg-gray-200" })
    ] }) : /* @__PURE__ */ n("table", { className: "w-full text-left text-xs text-gray-500 dark:text-gray-400 rtl:text-right", children: [
      /* @__PURE__ */ t("thead", { className: "sticky top-0 z-10 border-b bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ n("tr", { children: [
        /* @__PURE__ */ n("th", { scope: "col", className: "w-[1 50px] flex items-center gap-x-2 px-6 py-3", children: [
          /* @__PURE__ */ t(
            "input",
            {
              checked: L,
              onClick: (e) => {
                e.stopPropagation(), H();
              },
              type: "checkbox",
              className: "mt-1 cursor-pointer rounded focus:outline-none focus:ring-0"
            }
          ),
          "Name"
        ] }),
        /* @__PURE__ */ t("th", { scope: "col", className: "w-[150px] px-2 py-3", children: "Type" }),
        /* @__PURE__ */ t("th", { scope: "col", className: "w-[150px] px-4 py-3 text-right", children: "Status" })
      ] }) }),
      /* @__PURE__ */ t("tbody", { children: b(
        R,
        (e) => e.label ? /* @__PURE__ */ t("tr", { children: /* @__PURE__ */ n("td", { colSpan: 3, className: `relative px-6 py-2 text-xs font-medium text-gray-800 ${e.top}`, children: [
          /* @__PURE__ */ t("div", { className: "absolute inset-0 left-6 flex items-center", children: /* @__PURE__ */ t("div", { className: "order-gray-300 w-full" }) }),
          /* @__PURE__ */ t("div", { className: "relative flex justify-start", children: /* @__PURE__ */ t("span", { className: "bg-gray-50 pr-2", children: e.label }) })
        ] }) }, "separator") : /* @__PURE__ */ t(
          fe,
          {
            page: e,
            selectedPages: r,
            handleCheckboxChange: _,
            getPageType: M,
            hasSlug: w,
            currentOwnerId: U(h, [(e == null ? void 0 : e.primaryPage) || (e == null ? void 0 : e.id), "userId"])
          }
        )
      ) })
    ] }) }),
    /* @__PURE__ */ n(ne, { className: "mt-10 flex items-center justify-center", children: [
      r.length > 0 && /* @__PURE__ */ n("span", { className: "text-center text-sm text-muted-foreground", children: [
        r.length,
        " Page",
        r.length !== 1 ? "s" : "",
        " Selected"
      ] }),
      /* @__PURE__ */ t(j, { disabled: d, variant: "outline", onClick: s, children: "Cancel" }),
      /* @__PURE__ */ t(j, { disabled: d || v || Q(r), onClick: z, children: d ? "Publishing..." : "Publish Selected" })
    ] })
  ] });
};
export {
  ve as default
};
