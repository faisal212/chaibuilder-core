import { jsxs as w, Fragment as q, jsx as t } from "react/jsx-runtime";
import { atom as be, useAtom as ge, useSetAtom as ke } from "jotai";
import { compact as de, filter as z, isEmpty as k, uniqBy as ve, keyBy as ue, mapValues as Ne, startCase as Se, toLower as T, includes as _, get as D, find as H, map as Le } from "lodash-es";
import { ExternalLink as Ce, Pencil as Ae, MoreHorizontal as Ee, Lock as $e, Plus as Te, ChevronRight as Ie, StarsIcon as Me, Hash as Ue, File as me } from "lucide-react";
import { useRef as Fe, useEffect as $, useMemo as W, useState as N, useCallback as ie, startTransition as ze, Suspense as E, lazy as I } from "react";
import { useTranslation as Be } from "react-i18next";
import { d as le } from "./index-BaxiqbJy.js";
import { am as Ge, an as Oe, ao as je, f as he, T as R, aF as De, L as Re, h as He, b as We, u as _e, aG as qe, aH as Ve, aI as Qe } from "./index-DWTIpiDi.js";
import { u as J } from "./use-page-expand-manager-Cf4MUEJw.js";
import { B as Xe } from "./register-chai-top-bar-DWmJ2efT.js";
const ce = (e, s) => !e || !Array.isArray(e) ? [] : k(s) ? e : de(
  z(e, (a) => {
    const n = T(s);
    return _(T((a == null ? void 0 : a.name) || ""), n) || _(T((a == null ? void 0 : a.slug) || ""), n);
  })
), Ye = (e, s) => {
  const a = /* @__PURE__ */ new Set(), n = ue(e, "id");
  return s.forEach((i) => {
    let o = i;
    for (; o.parent && n[o.parent]; )
      a.add(o.parent), o = n[o.parent];
  }), Array.from(a).map((i) => n[i]);
}, Y = (e, s, a) => k(s) ? e : e.map((n) => {
  if (!a(n.pageType))
    return {
      ...n,
      shouldExpandOnSearch: !0,
      children: n.children ? Y(n.children, s, a) : []
    };
  const i = n.children && n.children.some(
    (o) => _(T(o.name || ""), T(s)) || _(T(o.slug || ""), T(s))
  );
  return {
    ...n,
    shouldExpandOnSearch: i,
    children: n.children ? Y(n.children, s, a) : []
  };
}), Je = (e) => {
  if (!e || !e.length) return [];
  const s = {};
  e.forEach((n) => {
    s[n.id] = { ...n, children: [] };
  });
  const a = [];
  return Object.values(s).forEach((n) => {
    n.parent && s[n.parent] ? s[n.parent].children.push(n) : a.push(n);
  }), a;
}, fe = (e) => !e || !e.length ? [] : [...e].sort((a, n) => (a.name || "").localeCompare(n.name || "")).map((a) => ({
  ...a,
  children: a.children ? fe(a.children) : []
})), Ke = (e, s, a, n) => {
  if (!e || !e.length) return [];
  let i = e;
  if (a !== "all" && (i = de(z(e, { pageType: a }))), k(s))
    i = ce(i, s);
  else {
    const m = ce(i, s), l = Ye(e, m);
    i = ve([...m, ...l], "id");
  }
  const o = fe(Je(i)), f = Y(o, s, n), y = z(f, (m) => n(m.pageType)).sort(
    (m, l) => (m.name || "").localeCompare(l.name || "")
  ), c = z(f, (m) => !n(m.pageType));
  let x = [];
  if (a === "all") {
    const m = ue(c, "pageType");
    x = Object.values(
      Ne(m, (l, p) => ({
        ...l,
        id: p,
        name: Se(p),
        isPartialGroup: !0,
        children: f.filter((v) => v.pageType === p)
      }))
    );
  } else
    x = c.sort((m, l) => (m.name || "").localeCompare(l.name || ""));
  return [...y, ...x];
}, Ze = be({
  pageId: null,
  position: { x: 0, y: 0 }
}), et = ({ pageId: e, children: s }) => {
  const [a, n] = ge(Ze), i = Fe(null), o = a.pageId === e;
  $(() => {
    const c = () => n({ pageId: null, position: { x: 0, y: 0 } });
    if (o)
      return document.addEventListener("click", c), () => document.removeEventListener("click", c);
  }, [o, n]);
  const f = (c) => {
    c.preventDefault(), c.stopPropagation(), n({ pageId: e, position: { x: c.clientX, y: c.clientY } });
  }, y = () => {
    const c = `${window.location.pathname}?page=${e}`;
    window.open(c, "_blank"), n({ pageId: null, position: { x: 0, y: 0 } });
  };
  return /* @__PURE__ */ w(q, { children: [
    /* @__PURE__ */ t("span", { onContextMenu: f, children: s }),
    o && /* @__PURE__ */ t(
      "div",
      {
        ref: i,
        className: "fixed z-[9999] max-w-[160px] rounded-md border border-gray-200 bg-white",
        style: { top: a.position.y, left: a.position.x },
        children: /* @__PURE__ */ t("div", { className: "", children: /* @__PURE__ */ w(
          Xe,
          {
            variant: "ghost",
            onClick: y,
            className: "w-full px-2.5 py-1 text-start text-sm text-gray-700 hover:bg-gray-100",
            children: [
              /* @__PURE__ */ t(Ce, { className: "h-4 w-4" }),
              "Open in new tab"
            ]
          }
        ) })
      }
    )
  ] });
}, tt = ({ page: e }) => {
  var n, i;
  const { isExpanded: s, toggleExpanded: a } = J(e == null ? void 0 : e.id);
  return /* @__PURE__ */ t(
    "button",
    {
      onClick: (o) => {
        o.stopPropagation(), a();
      },
      disabled: !((n = e == null ? void 0 : e.children) != null && n.length),
      className: `flex h-[calc(100%-2px)] w-5 items-center justify-center rounded text-gray-400 transition-colors hover:bg-gray-200 hover:px-1 hover:text-gray-500 ${(i = e == null ? void 0 : e.children) != null && i.length ? "hover:text-blue-400" : "opacity-0"}`,
      children: /* @__PURE__ */ t(
        Ie,
        {
          size: 12,
          className: `stroke-[4] transition-transform duration-200 ${s ? "rotate-90" : ""}`
        }
      )
    }
  );
}, nt = ({ page: e, pageType: s }) => /* @__PURE__ */ t("div", { className: "flex h-full items-center justify-center gap-x-1", children: e.dynamic ? /* @__PURE__ */ t(Me, { size: 12, className: "text-yellow-400" }) : s != null && s.icon ? /* @__PURE__ */ t(
  "div",
  {
    className: "flex h-4 max-h-4 w-4 max-w-4 items-center justify-center stroke-[1] text-slate-500",
    dangerouslySetInnerHTML: { __html: s.icon }
  }
) : s != null && s.hasSlug ? /* @__PURE__ */ t(me, { size: 12, className: "stroke-[1] text-slate-500" }) : /* @__PURE__ */ t(Ue, { size: 12, className: "stroke-[1] text-slate-500" }) }), st = ({ isOnline: e }) => /* @__PURE__ */ t("div", { className: `h-2 w-2 rounded-full ${e ? "bg-green-300" : "bg-gray-300"}` }), at = ({
  page: e,
  pageTypes: s,
  currentPage: a,
  onClickAction: n,
  languagePages: i,
  selectedLanguage: o,
  showUntranslatedPages: f
}) => {
  const y = Ge(), { pageToUser: c } = Oe(), x = D(c, [e == null ? void 0 : e.id, "userId"]), { data: m } = je(x), l = m && y !== x ? m == null ? void 0 : m.name : null, p = he(), v = a === e.id, P = W(() => H(s, { key: e.pageType }), [s, e.pageType]);
  let d = D(i, e == null ? void 0 : e.id);
  d = D(d, "lang") === o ? d : null;
  const L = o === p || !!d, M = (d == null ? void 0 : d.name) || (e == null ? void 0 : e.name) || "No name";
  let g = (d == null ? void 0 : d.slug) || (e == null ? void 0 : e.slug) || "";
  const B = g + (e != null && e.dynamic ? `/${P == null ? void 0 : P.dynamicSlug}` : "") + (e != null && e.dynamicSlugCustom ? `${e.dynamicSlugCustom}` : "");
  if (g.startsWith("/") && !f) {
    const h = g.split("/").pop();
    g = g.endsWith(h) && e.dynamic ? "" : `/${h}`;
  }
  const G = W(() => {
    const h = "flex h-7 min-w-0 flex-1 cursor-pointer select-none items-center gap-x-1.5 rounded px-px text-xs duration-300 border-[1px]", A = `${v ? "border-primary/30 bg-primary/5" : "border-transparent hover:border-gray-200 hover:bg-gray-100"}`;
    return L ? `${h} ${A} ${l ? "opacity-60" : ""}` : `${h} bg-gray-100 opacity-50 group-hover:border-gray-200 border-transparent group-hover:bg-blue-100`;
  }, [L, v, l]), O = W(() => {
    if (e.isPartialGroup) return !1;
    if (d) {
      if (!d.online || k(d.changes)) return !1;
    } else if (e && (!e.online || k(e.changes)))
      return !1;
    return !0;
  }, [d, e]);
  return /* @__PURE__ */ w("div", { className: "group relative", children: [
    /* @__PURE__ */ t(et, { pageId: e.id, children: /* @__PURE__ */ w(
      "div",
      {
        onClick: () => !e.isPartialGroup && L && n("select", e == null ? void 0 : e.id),
        className: G,
        children: [
          /* @__PURE__ */ t(tt, { page: e }),
          !e.isPartialGroup && /* @__PURE__ */ t(st, { isOnline: d ? d.online : e.online }),
          !e.isPartialGroup && /* @__PURE__ */ t(nt, { page: e, pageType: P }),
          /* @__PURE__ */ t(R, { content: M, side: "top", showTooltip: M.length > 35, children: /* @__PURE__ */ t("span", { className: "max-w-[40%] truncate font-medium text-black", children: M }) }),
          (g || e.dynamic) && /* @__PURE__ */ t(R, { content: B, side: "top", showTooltip: !0, children: /* @__PURE__ */ w("span", { className: "max-w-[40%] truncate font-mono text-xs text-muted-foreground", children: [
            g,
            e.dynamic && (P == null ? void 0 : P.dynamicSlug) && /* @__PURE__ */ w("span", { className: "text-xs text-gray-500", children: [
              "/",
              P == null ? void 0 : P.dynamicSlug,
              e.dynamicSlugCustom
            ] })
          ] }) }),
          O && /* @__PURE__ */ t(R, { content: "Has unpublished changes", side: "top", children: /* @__PURE__ */ t("span", { className: "text-amber-500", children: /* @__PURE__ */ t(Ae, { size: 12, className: "stroke-[2]" }) }) }),
          !e.isPartialGroup && L && !l ? /* @__PURE__ */ t("div", { className: "duration absolute right-0.5 top-[3px]", children: /* @__PURE__ */ t(
            De,
            {
              isLanguagePage: !!d,
              page: d || e,
              setDuplicatePage: (h) => n("duplicate", h),
              setAddEditPage: (h) => n("edit", d || h),
              setUnpublishPage: (h) => n("unpublish", h),
              setDeletePage: (h) => n("delete", d || h),
              children: /* @__PURE__ */ t("div", { className: "m-0 cursor-pointer rounded border border-transparent p-0.5 duration-100 hover:border-gray-400 hover:bg-white", children: /* @__PURE__ */ t(Ee, { className: "h-4 w-4", onClick: (h) => h.stopPropagation() }) })
            }
          ) }) : l ? /* @__PURE__ */ w("span", { className: "duration absolute right-1.5 top-1/2 flex -translate-y-1/2 items-center gap-x-1 text-xs text-red-500", children: [
            /* @__PURE__ */ t($e, { className: "h-3 w-3 fill-red-200 text-red-500" }),
            /* @__PURE__ */ t(R, { content: `${l} is editing this page`, children: /* @__PURE__ */ t("span", { className: "font-bold", children: l }) })
          ] }) : null
        ]
      }
    ) }),
    /* @__PURE__ */ t(q, { children: !L && !e.isPartialGroup && !l && /* @__PURE__ */ w(
      "button",
      {
        onClick: (h) => {
          h.stopPropagation(), n("addLanguagePage", { language: o, page: e });
        },
        className: "absolute left-1/2 top-1 flex -translate-x-1/2 items-center gap-x-1 rounded bg-blue-500 px-2 py-0.5 text-xs text-white opacity-0 duration-200 hover:bg-blue-700 group-hover:opacity-100",
        children: [
          /* @__PURE__ */ t(Te, { size: 12, className: "stroke-[3]" }),
          " ",
          /* @__PURE__ */ w("span", { className: "text-[10px]", children: [
            "Add ",
            D(Re, o),
            " Page"
          ] })
        ]
      }
    ) })
  ] });
}, xe = ({
  pages: e,
  tier: s,
  pageTypes: a,
  currentPage: n,
  onClickAction: i,
  languagePages: o,
  selectedLanguage: f,
  showUntranslatedPages: y
}) => {
  const { expandedPages: c } = J();
  return /* @__PURE__ */ t("div", { className: "space-y-0.5", style: { paddingLeft: `${s * 10}px` }, children: e.map((x) => /* @__PURE__ */ w(q, { children: [
    /* @__PURE__ */ t(
      at,
      {
        page: x,
        pageTypes: a,
        currentPage: n,
        onClickAction: i,
        languagePages: o,
        selectedLanguage: f,
        showUntranslatedPages: y
      }
    ),
    x.children && x.children.length > 0 && (c == null ? void 0 : c.includes(x.id)) && /* @__PURE__ */ t(
      xe,
      {
        pages: x.children,
        tier: s + 1,
        pageTypes: a,
        currentPage: n,
        onClickAction: i,
        languagePages: o,
        selectedLanguage: f,
        showUntranslatedPages: y
      }
    )
  ] }, x.id)) });
}, rt = I(() => import("./page-manager-search-and-filter-Bs0jGOJz.js")), ot = I(() => import("./add-new-page-CxW_CDSX.js")), it = I(() => import("./delete-page-BZf_G5qk.js")), lt = I(() => import("./duplicate-page-19wPeh6s.js")), ct = I(() => import("./mark-as-template-ob_LZufW.js")), dt = I(() => import("./unmark-as-template-7lSJ_WJp.js")), ut = I(() => import("./unpublish-page-BkYM5973.js")), kt = ({ close: e }) => {
  const { t: s } = Be(), { languages: a, setSelectedLang: n } = le(), { data: i } = He(), { data: o, isFetching: f } = We(), [y, c] = _e(), { updateForSelectedPage: x, expandPagesOnSearch: m } = J(null), l = he(), p = y.get("page"), [v, P] = N(""), [d, L] = N(null), [M, g] = N(null), [B, G] = N(null), [O, h] = N(null), [A, V] = N(""), [K, Z] = N(null), [ee, te] = N(null), [b, Q] = N(l), [pe, we] = N(!1), ne = ke(qe), j = pe && b !== l, { data: U, isFetching: ye } = Ve(b), se = ie(
    (u) => {
      var r;
      return (r = H(i, { key: u })) == null ? void 0 : r.hasSlug;
    },
    [i]
  ), S = W(() => o ? j ? z(o, (u) => !(U != null && U[u.id])) : Ke(o, v, A, se) : [], [o, se, v, A, U, j]);
  $(() => {
    n(l);
  }, [l, n]), $(() => {
    const u = y.get("lang");
    if (u) {
      const r = a, C = a[0] ?? l, F = r.includes(u);
      ze(() => {
        F && b !== u ? Q(u) : !F && b !== C && Q(C);
      });
    }
  }, []), $(() => {
    if (!k(A)) return;
    const u = sessionStorage.getItem("pageTypeFilter") || "all";
    !k(i) && u && (H(i, { key: u }) ? V(u) : V("all"));
  }, [i, A]), $(() => {
    if (p && !f && !H(o, { id: p })) {
      const r = new URLSearchParams(y.toString());
      if (r.delete("page"), [...r.keys()].length > 0) {
        if (typeof window < "u" && window.history && window.location) {
          const C = r.toString(), F = window.location.hash || "", oe = window.location.pathname, Pe = C ? `${oe}?${C}${F}` : `${oe}${F}`;
          window.history.replaceState(window.history.state, "", Pe);
        }
        c(r);
      } else
        typeof window < "u" && window.history && window.location && (window.history.replaceState(window.history.state, "", window.location.pathname + window.location.hash), window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }))), c(r);
    }
  }, [o, p, f, c]), $(() => {
    p && !f && !k(S) && x(S, p);
  }, [p, f, S, x]), $(() => {
    !k(v) && !k(S) && m(S);
  }, [v, S, m]);
  const { setSelectedLang: X } = le(), ae = ie(
    (u) => {
      const r = new URLSearchParams({ page: u });
      b !== l ? (r.set("lang", b), X(b)) : X(""), Qe(r, c), e();
    },
    [e, c, X, b, l]
  ), re = (u, r) => {
    var C;
    if (r)
      switch (u) {
        case "add":
          g(r);
          break;
        case "select":
          ae(r);
          break;
        case "edit":
          b !== l ? ne({
            edit: !0,
            id: r == null ? void 0 : r.id,
            primaryPage: r == null ? void 0 : r.primaryPage
          }) : g(r);
          break;
        case "delete":
          L(r);
          break;
        case "unpublish":
          G(r);
          break;
        case "markAsTemplate":
          h(r);
          break;
        case "unmarkAsTemplate":
          te(r);
          break;
        case "duplicate":
          Z(r);
          break;
        case "addLanguagePage":
          ne({
            edit: !1,
            primaryPage: ((C = r == null ? void 0 : r.page) == null ? void 0 : C.id) || "",
            preselectedLang: (r == null ? void 0 : r.language) || b
          });
          break;
      }
  };
  return /* @__PURE__ */ w(q, { children: [
    /* @__PURE__ */ w("div", { className: "flex h-full flex-col justify-between", children: [
      /* @__PURE__ */ t(E, { children: /* @__PURE__ */ t(
        rt,
        {
          pages: S,
          search: v,
          setSearch: P,
          languages: [l, ...a],
          selectedLanguage: b,
          setSelectedLanguage: Q,
          selectedPageType: A,
          setSelectedPageType: V,
          onAddPage: (u) => re("add", u),
          showUntranslatedPages: j,
          setShowUntranslatedPages: we
        }
      ) }),
      /* @__PURE__ */ t("div", { className: "flex-1 overflow-y-auto px-4 pb-6 pt-2", children: f || ye ? /* @__PURE__ */ t("div", { className: "space-y-2", children: Le([...Array(15).keys()], (u) => /* @__PURE__ */ t("div", { className: "h-7 w-full animate-pulse rounded border border-gray-300 bg-gray-200" }, u)) }) : k(S) ? /* @__PURE__ */ w("div", { className: "flex h-[70vh] flex-col items-center justify-center gap-y-1 text-sm font-medium text-slate-500", children: [
        /* @__PURE__ */ t(me, { className: "h-6 w-6 stroke-[1]" }),
        s("Empty List!"),
        /* @__PURE__ */ t("span", { className: "font-light", children: s("Add new page to start") })
      ] }) : /* @__PURE__ */ t(
        xe,
        {
          tier: 0,
          pages: S,
          pageTypes: i,
          currentPage: p || "",
          onClickAction: re,
          languagePages: U,
          selectedLanguage: b,
          showUntranslatedPages: j
        }
      ) })
    ] }),
    M && /* @__PURE__ */ t(E, { children: /* @__PURE__ */ t(
      ot,
      {
        closePanel: e,
        editPage: ae,
        addEditPage: M,
        setAddEditPage: g
      }
    ) }),
    d && /* @__PURE__ */ t(E, { children: /* @__PURE__ */ t(it, { page: d, onClose: () => L(null) }) }),
    B && /* @__PURE__ */ t(E, { children: /* @__PURE__ */ t(ut, { page: B, onClose: () => G(null) }) }),
    O && /* @__PURE__ */ t(E, { children: /* @__PURE__ */ t(ct, { page: O, onClose: () => h(null) }) }),
    ee && /* @__PURE__ */ t(E, { children: /* @__PURE__ */ t(dt, { page: ee, onClose: () => te(null) }) }),
    K && /* @__PURE__ */ t(E, { children: /* @__PURE__ */ t(lt, { page: K, onClose: () => Z(null), closePanel: e }) })
  ] });
};
export {
  kt as default
};
