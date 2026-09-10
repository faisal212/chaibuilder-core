import { jsx as t, jsxs as g, Fragment as hn } from "react/jsx-runtime";
import { filter as fn, find as gn, startsWith as mn } from "lodash-es";
import { Loader as xn } from "lucide-react";
import { useMemo as $, useState as L, useEffect as Z } from "react";
import { useTranslation as T } from "react-i18next";
import { z as vn, D as H, B as pn } from "./register-chai-top-bar-DWmJ2efT.js";
import { d as Sn, n as Nn, D as Fn, e as wn, f as An, g as Cn, o as Dn, p as I, q as En } from "./index-BaxiqbJy.js";
import { p as $n, r as Ln, S as Tn } from "./slug-input-pRgSfj2h.js";
import { b as Un, c as kn, d as Bn, e as Rn, f as Wn, g as _, h as In, u as qn, L as A } from "./index-DWTIpiDi.js";
const b = ({
  edit: c,
  lang: h,
  languages: a,
  name: i,
  setLang: s,
  setName: d,
  primaryPageObject: o
}) => {
  const { t: n } = T();
  return /* @__PURE__ */ g("div", { className: "space-y-1", children: [
    /* @__PURE__ */ t(I, { htmlFor: "lang", children: n("Language") }),
    /* @__PURE__ */ g(
      "select",
      {
        value: c ? "" : h,
        disabled: c || !a.length,
        onChange: (l) => {
          const f = l.target.value;
          s(f), !c && (mn(i, o == null ? void 0 : o.name) || i.length === 0) && d(`${o == null ? void 0 : o.name} - ${A[f]}`);
        },
        className: "col-span-3 flex h-9 w-full rounded-md border border-border bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        children: [
          /* @__PURE__ */ t("option", { value: "", disabled: !0, children: c ? A[h] || h : a.length ? n("Choose language") : n("All available language page is created.") }),
          a.map((l) => /* @__PURE__ */ t("option", { value: l, children: A[l] || l }, l))
        ]
      }
    )
  ] });
}, y = ({ lang: c, name: h, setName: a, parentHasSelectedLanguagePage: i }) => {
  const { t: s } = T();
  return /* @__PURE__ */ g("div", { className: "space-y-1", children: [
    /* @__PURE__ */ t(I, { htmlFor: "name", children: s("Page Name") }),
    /* @__PURE__ */ t(
      vn,
      {
        id: "name",
        value: c ? h : "",
        onChange: (d) => a(d.target.value),
        required: !0,
        placeholder: s(c ? "Enter page name" : "Choose language to add slug"),
        disabled: !i || !c
      }
    )
  ] });
}, Gn = ({
  dynamic: c,
  isNonSlugPageType: h,
  isRootPage: a,
  lang: i,
  useLanguagePrefix: s,
  setUseLanguagePrefix: d,
  isHomePage: o,
  parentSlug: n,
  parentHasSelectedLanguagePage: l,
  slug: f,
  setSlug: u,
  setIsSlugValid: x,
  getSlug: m
}) => {
  const { t: r } = T();
  return h ? null : /* @__PURE__ */ g("div", { className: "space-y-1", children: [
    a && i && /* @__PURE__ */ g("div", { className: "flex items-center space-x-2 pb-1", children: [
      /* @__PURE__ */ t(
        "input",
        {
          type: "checkbox",
          id: "useLanguagePrefix",
          checked: s,
          onChange: (p) => d(p.target.checked),
          className: "rounded border-gray-300"
        }
      ),
      /* @__PURE__ */ g(I, { htmlFor: "useLanguagePrefix", className: "text-sm font-normal leading-tight", children: [
        "Add language code (",
        /* @__PURE__ */ g("span", { className: "font-mono text-gray-900", children: [
          "/",
          i
        ] }),
        ") as slug prefix"
      ] })
    ] }),
    /* @__PURE__ */ t(I, { htmlFor: "slug", children: r("Slug") }),
    c ? /* @__PURE__ */ t(H, { variant: "default", className: "p-2 text-xs font-medium italic text-muted-foreground", children: r("This page will use dynamic slug as defined in primary page") }) : /* @__PURE__ */ t(
      Tn,
      {
        disabled: !i || !l,
        value: f,
        onChange: u,
        placeholder: r(i ? o && s ? "Leave empty for home page" : "Enter page slug" : "Choose language to add slug"),
        parentSlug: n,
        onValidationChange: x,
        fullSlug: m()
      }
    )
  ] });
}, P = ({
  parentHasSelectedLanguagePage: c,
  name: h,
  lang: a,
  slug: i,
  edit: s,
  id: d,
  primaryPageObject: o,
  pages: n,
  isNonSlugPageType: l,
  isHomePage: f,
  useLanguagePrefix: u,
  isSlugValid: x,
  isPending: m
}) => {
  const { t: r } = T(), p = m || !h || !a || n.some((v) => (s ? v.id !== d : !0) && v.parent === (o == null ? void 0 : o.id) && v.lang === a) || !l && !(f && u) && (!x || !i);
  return /* @__PURE__ */ t(En, { children: c ? /* @__PURE__ */ g(hn, { children: [
    /* @__PURE__ */ t(pn, { type: "submit", disabled: p && !o.dynamic, children: m ? /* @__PURE__ */ g("span", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ t("span", { className: "loader mr-2" }),
      r(s ? "Updating..." : "Adding...")
    ] }) : r(s ? "Update" : "Add new language page") }),
    n.some(
      (v) => (s ? v.id !== d : !0) && v.parent === (o == null ? void 0 : o.id) && v.lang === a
    ) && /* @__PURE__ */ t("p", { className: "mt-2 text-xs text-red-500", children: r("A page for this language already exists.") })
  ] }) : a && /* @__PURE__ */ t(H, { variant: "destructive", children: /* @__PURE__ */ g("p", { className: "mx-auto w-5/6 text-center", children: [
    r("You need to create the"),
    " ",
    /* @__PURE__ */ t("span", { className: "font-medium", children: A[a] }),
    " ",
    r("page in the parent to add here.")
  ] }) }) });
}, zn = ({
  onSubmit: c,
  edit: h,
  lang: a,
  languages: i,
  name: s,
  setLang: d,
  setName: o,
  primaryPageObject: n,
  parentHasSelectedLanguagePage: l,
  id: f,
  pages: u,
  isNonSlugPageType: x,
  isHomePage: m,
  useLanguagePrefix: r,
  slug: p,
  isSlugValid: v,
  isPending: S
}) => /* @__PURE__ */ g("form", { onSubmit: c, children: [
  /* @__PURE__ */ g("div", { className: "grid gap-4 py-4", children: [
    /* @__PURE__ */ t(
      b,
      {
        edit: h,
        lang: a,
        languages: i,
        name: s,
        setLang: d,
        setName: o,
        primaryPageObject: n
      }
    ),
    /* @__PURE__ */ t(
      y,
      {
        lang: a,
        name: s,
        setName: o,
        parentHasSelectedLanguagePage: l
      }
    )
  ] }),
  /* @__PURE__ */ t(
    P,
    {
      parentHasSelectedLanguagePage: l,
      name: s,
      lang: a,
      slug: p,
      edit: h,
      id: f,
      primaryPageObject: n,
      pages: u,
      isNonSlugPageType: x,
      isHomePage: m,
      useLanguagePrefix: r,
      isSlugValid: v,
      isPending: S
    }
  )
] }), Mn = ({
  loading: c,
  onSubmit: h,
  edit: a,
  lang: i,
  languages: s,
  name: d,
  setLang: o,
  setName: n,
  primaryPageObject: l,
  parentHasSelectedLanguagePage: f,
  isNonSlugPageType: u,
  isRootPage: x,
  useLanguagePrefix: m,
  setUseLanguagePrefix: r,
  isHomePage: p,
  parentSlug: v,
  slug: S,
  setSlug: U,
  isSlugValid: E,
  setIsSlugValid: q,
  getSlug: G,
  isPending: k,
  id: B,
  pages: w
}) => c ? /* @__PURE__ */ t("div", { className: "flex h-80 items-center justify-center", children: /* @__PURE__ */ t(xn, { className: "animate-spin" }) }) : u ? /* @__PURE__ */ t(
  zn,
  {
    onSubmit: h,
    edit: a,
    lang: i,
    languages: s,
    name: d,
    setLang: o,
    setName: n,
    primaryPageObject: l,
    parentHasSelectedLanguagePage: f,
    id: B,
    pages: w,
    isNonSlugPageType: u,
    isHomePage: p,
    useLanguagePrefix: m,
    slug: S,
    isSlugValid: E,
    isPending: k
  }
) : /* @__PURE__ */ g("form", { onSubmit: h, children: [
  /* @__PURE__ */ g("div", { className: "grid gap-4 py-4", children: [
    /* @__PURE__ */ t(
      b,
      {
        edit: a,
        lang: i,
        languages: s,
        name: d,
        setLang: o,
        setName: n,
        primaryPageObject: l
      }
    ),
    /* @__PURE__ */ t(
      y,
      {
        lang: i,
        name: d,
        setName: n,
        parentHasSelectedLanguagePage: f
      }
    ),
    /* @__PURE__ */ t(
      Gn,
      {
        dynamic: l == null ? void 0 : l.dynamic,
        isNonSlugPageType: u,
        isRootPage: x,
        lang: i,
        useLanguagePrefix: m,
        setUseLanguagePrefix: r,
        isHomePage: p,
        parentSlug: v,
        parentHasSelectedLanguagePage: f,
        slug: S,
        setSlug: U,
        isSlugValid: E,
        setIsSlugValid: q,
        getSlug: G
      }
    )
  ] }),
  /* @__PURE__ */ t(
    P,
    {
      parentHasSelectedLanguagePage: f,
      name: d,
      lang: i,
      slug: S,
      edit: a,
      id: B,
      primaryPageObject: l,
      pages: w,
      isNonSlugPageType: u,
      isHomePage: p,
      useLanguagePrefix: m,
      isSlugValid: E,
      isPending: k
    }
  )
] }), bn = ({
  id: c,
  isOpen: h,
  onClose: a,
  primaryPage: i,
  edit: s = !1,
  preselectedLang: d
}) => {
  const { data: o = [] } = Un(), n = $(() => o.find((e) => e.id === i), [o, i]), [l, f] = L(""), [u, x] = L(""), [m, r] = L(""), [p, v] = L(!0), [S, U] = L(!0), { mutate: E, isPending: q } = kn(), { mutate: G, isPending: k } = Bn(), B = q || k, { data: w, isFetching: j } = Rn(), Y = Wn(), { data: C, isFetching: O } = _(i), { data: F = [], isFetching: nn } = _(
    n == null ? void 0 : n.parent
  ), { data: J = [], isFetching: en } = In(), { setSelectedLang: sn } = Sn(), { t: z } = T(), [, tn] = qn(), [, on] = Nn(), ln = j || O || nn || en, D = $(() => fn(w == null ? void 0 : w.languages, (e) => !gn(C, { lang: e })), [w, C]), M = $(
    () => J.find((e) => e.key === (n == null ? void 0 : n.pageType)),
    [J, n == null ? void 0 : n.pageType]
  ), K = !(M != null && M.hasSlug), V = (n == null ? void 0 : n.slug) === "/";
  Z(() => {
    if (!s && n && d && (x(d), f(`${n.name} - ${A[d]}`)), !s || !n) return;
    const e = C == null ? void 0 : C.find((rn) => rn.id === c);
    if (!e) return;
    f(e.name), x(e.lang);
    const N = e.slug || "", { initSlug: W, prefix: cn } = $n(N, n);
    r(W), U(cn);
  }, [s, c, C, n, d]), Z(() => {
    if (d)
      x(d);
    else if ((D == null ? void 0 : D.length) === 1 && !s) {
      const e = D[0];
      if (!e || !A[e]) return;
      x(e), (!l || l === (n == null ? void 0 : n.name)) && f(`${n == null ? void 0 : n.name} - ${A[e]}`);
    }
  }, [d, D, s, l, n]);
  const { parentSlug: Q, isRootPage: R } = $(() => {
    if (V || !u)
      return { parentSlug: void 0, isRootPage: !(n != null && n.parent) };
    if (!(n != null && n.parent))
      return {
        parentSlug: S ? `/${u}` : void 0,
        isRootPage: !0
      };
    const e = F == null ? void 0 : F.find((N) => N.lang === u);
    return { parentSlug: e == null ? void 0 : e.slug, isRootPage: !1 };
  }, [n == null ? void 0 : n.parent, F, S, u, V]), an = $(() => R ? !0 : !!(F != null && F.some((e) => (e == null ? void 0 : e.lang) === u)), [u, F, R]), X = () => {
    let e = "";
    return R ? e = `/${S ? [u, m].filter(Boolean).join("/") : m}` : e = `${Ln(Q)}/${m}`, e.replace(/\/{2,}/g, "/").replace(/\/$/, "");
  }, dn = (e) => {
    const N = new URLSearchParams(window.location.search);
    Y && e === Y ? N.delete("lang") : N.set("lang", e), tn(N), window.dispatchEvent(new PopStateEvent("popstate"));
  }, un = (e) => {
    e.preventDefault();
    const N = {
      name: l,
      lang: u,
      primaryPage: n == null ? void 0 : n.id,
      slug: K ? "" : X(),
      pageType: n == null ? void 0 : n.pageType,
      ...s && { id: c }
    }, W = () => {
      !s && u && (sn(u), dn(u)), on("outline"), a();
    };
    s ? G(N, { onSuccess: W }) : E(N, { onSuccess: W });
  };
  return /* @__PURE__ */ t(Fn, { open: h, onOpenChange: a, children: h && /* @__PURE__ */ g(wn, { className: "text-slate-600 sm:max-w-[425px]", children: [
    /* @__PURE__ */ g(An, { children: [
      /* @__PURE__ */ t(Cn, { children: z(s ? "Edit language" : "Add new language page") }),
      /* @__PURE__ */ t(Dn, { className: "font-light", children: z("Enter the details for the language") })
    ] }),
    /* @__PURE__ */ t(
      Mn,
      {
        id: c,
        pages: o,
        loading: ln,
        onSubmit: un,
        edit: s,
        lang: u,
        languages: D,
        name: l,
        setLang: x,
        setName: f,
        primaryPageObject: n,
        parentHasSelectedLanguagePage: an,
        isNonSlugPageType: K,
        isRootPage: R,
        useLanguagePrefix: S,
        setUseLanguagePrefix: U,
        isHomePage: V,
        parentSlug: Q,
        slug: m,
        setSlug: r,
        isSlugValid: p,
        setIsSlugValid: v,
        getSlug: X,
        isPending: B
      }
    )
  ] }) });
};
export {
  bn as default
};
