import { a as Ke, b as Re, c as Ae } from "./chai-theme-helpers-BEf2rwE4.js";
import { a as O, b as N, c as E, d as J, r as z, e as S, f as W } from "./apply-binding-v_W4uR3U.js";
import { h as Me, i as Oe, g as Ne } from "./apply-binding-v_W4uR3U.js";
import { jsx as m } from "react/jsx-runtime";
import { has as v, isFunction as I, omit as j, get as d, isString as X, isNull as q, isArray as b, uniqBy as H, filter as T, isEmpty as h, map as U, find as A, cloneDeep as Y } from "lodash-es";
import { Suspense as F, createElement as u } from "react";
import { f as L } from "./core-nSRy3D7z.js";
import { createTailwindcss as Z } from "@mhsdesign/jit-browser-tailwindcss";
import ee from "@tailwindcss/aspect-ratio";
import te from "@tailwindcss/container-queries";
import ae from "@tailwindcss/forms";
import re from "@tailwindcss/typography";
import { c as ne, g as ie } from "./get-chai-builder-theme-DLpviqPJ.js";
async function oe(e) {
  const t = {
    pageProps: e.pageProps,
    block: e.block,
    lang: e.lang,
    draft: e.draft,
    inBuilder: !1
  }, r = await e.dataProvider(t);
  return v(r, "$metadata") && I(e.dataProviderMetadataCallback) && e.dataProviderMetadataCallback(e.block, r.$metadata), e.children({
    ...j(r, "$metadata")
  });
}
const se = () => /* @__PURE__ */ m("div", {}), le = (e) => {
  const { block: t, lang: r, fallbackLang: i, children: n, externalData: o, blocks: s, draft: a, pageProps: l, dataProviderMetadataCallback: y } = e, g = L(t._type), c = d(g, "component", null), _ = d(e.repeaterData, "index", -1), P = d(e.repeaterData, "dataKey", ""), f = O(
    N(t, r === i ? "" : r ?? "", g),
    o ?? {},
    { index: _, key: P }
  ), p = E(t, !1), x = V(s, t._id, J(t._type)), K = v(g, "dataProvider") && I(g.dataProvider), $ = {
    ...f,
    ...p,
    ...x
  }, B = {
    blockProps: {},
    inBuilder: !1,
    lang: r || i || "en",
    draft: a ?? !1,
    pageData: o ?? {},
    ...$
  };
  let k = d($, "_show", !0);
  if (X(k) && k.startsWith("{{") && (k = z(k, o) !== "false"), q(c) || !k) return null;
  if (K) {
    const C = d(g, "suspenseFallback", se);
    return /* @__PURE__ */ m(F, { fallback: u(C), children: /* @__PURE__ */ m(
      oe,
      {
        lang: r ?? "",
        pageProps: l,
        block: $,
        dataProvider: g.dataProvider,
        ...y ? { dataProviderMetadataCallback: y } : {},
        draft: a ?? !1,
        children: (R) => u(c, {
          ...B,
          ...R,
          children: n({
            _id: t._id,
            _type: t._type,
            ...b(f.repeaterItems) ? {
              repeaterItems: S(f.repeaterItems, t),
              $repeaterItemsKey: f.$repeaterItemsKey,
              repeaterTotalItems: f.repeaterTotalItems ?? -1
            } : {}
          })
        })
      }
    ) });
  }
  return /* @__PURE__ */ m(F, { children: u(c, {
    ...B,
    children: n({
      _id: t._id,
      _type: t._type,
      ...b(f.repeaterItems) ? {
        repeaterItems: S(f.repeaterItems, t),
        $repeaterItemsKey: f.$repeaterItemsKey,
        repeaterTotalItems: f.repeaterTotalItems ?? -1
      } : {}
    })
  }) });
}, M = (e) => {
  const { blocks: t, parent: r, repeaterData: i, type: n } = e;
  let o = H(
    T(t, (a) => v(a, "_id") && (h(r) ? !a._parent : a._parent === r)),
    "_id"
  );
  const s = (a) => T(t, (l) => l._parent === a).length > 0;
  return (n === "Heading" || n === "Paragraph" || n === "Link" || n === "Span") && (o = W(o)), U(o, (a, l) => a ? /* @__PURE__ */ u(le, { ...e, key: a._id ? `${a._id}-${l}` : `block-${l}`, block: a }, ({ _id: y, _type: g, repeaterItems: c, $repeaterItemsKey: _ }) => g === "Repeater" ? b(c) && c.map((P, w) => /* @__PURE__ */ u(
    M,
    {
      ...e,
      parent: a._id,
      key: `${d(a, "_parent", "root")}-${a._id}-${l}-${w}`,
      repeaterData: { index: w, dataKey: _ }
    }
  )) : s(y) ? /* @__PURE__ */ u(
    M,
    {
      ...e,
      parent: a._id,
      key: `${d(a, "_parent", "root")}-${a._id}-${l}`,
      repeaterData: i,
      type: a._type
    }
  ) : null) : null);
}, V = (e, t, r) => h(r) ? {} : Object.entries(r).reduce(
  (i, [n, o]) => {
    const s = [];
    let a = A(e, { _id: t });
    for (; a; )
      s.push(a), a = A(e, { _id: a._parent });
    const l = A(s, { _type: o.block });
    return l && (i[n] = d(l, d(o, "prop"), null)), i;
  },
  {}
);
function Ie(e) {
  if (h(e.lang) && !h(e.fallbackLang))
    throw new Error("lang prop is required when fallbackLang is provided");
  if (h(e.blocks))
    return null;
  const t = e.lang ?? "en", r = e.fallbackLang ?? t;
  return /* @__PURE__ */ m(M, { ...e, lang: t, fallbackLang: r });
}
async function de(e) {
  const t = await e.dataProvider;
  return v(t, "$metadata") && I(e.dataProviderMetadataCallback) && e.dataProviderMetadataCallback(e.block, t.$metadata), e.children({
    ...j(t, "$metadata")
  });
}
const ce = () => /* @__PURE__ */ m("div", {}), ge = async (e) => {
  const {
    block: t,
    lang: r,
    fallbackLang: i,
    children: n,
    externalData: o,
    blocks: s,
    draft: a,
    pageProps: l,
    dataProviderMetadataCallback: y,
    dataProviders: g
  } = e, c = L(t._type), _ = d(c, "component", null), P = d(e.repeaterData, "index", -1), w = d(e.repeaterData, "dataKey", ""), p = O(
    N(t, r === i ? "" : r ?? "en", c),
    o ?? {},
    { index: P, key: w }
  ), x = E(t, !1), K = V(s, t._id, J(t._type)), $ = v(c, "dataProvider") && I(c.dataProvider), B = {
    ...p,
    ...x,
    ...K
  }, k = {
    blockProps: {},
    inBuilder: !1,
    lang: r || i || "en",
    draft: a ?? !1,
    pageData: o ?? {},
    ...B
  }, C = d(B, "_show", !0);
  if (q(_) || !C) return null;
  if ($) {
    const R = d(g, t._id, Promise.resolve({})), G = d(c, "suspenseFallback", ce);
    return /* @__PURE__ */ m(F, { fallback: u(G), children: /* @__PURE__ */ m(
      de,
      {
        lang: r ?? "",
        pageProps: l,
        block: B,
        dataProvider: R,
        ...y ? { dataProviderMetadataCallback: y } : {},
        draft: a ?? !1,
        children: (Q) => u(_, {
          ...k,
          ...Q,
          children: n({
            _id: t._id,
            _type: t._type,
            ...b(p.repeaterItems) ? {
              repeaterItems: S(p.repeaterItems, t),
              $repeaterItemsKey: p.$repeaterItemsKey,
              repeaterTotalItems: p.repeaterTotalItems ?? -1
            } : {}
          })
        })
      }
    ) });
  }
  return u(_, {
    ...k,
    children: n({
      _id: t._id,
      _type: t._type,
      ...b(p.repeaterItems) ? {
        repeaterItems: S(p.repeaterItems, t),
        $repeaterItemsKey: p.$repeaterItemsKey,
        repeaterTotalItems: p.repeaterTotalItems ?? -1
      } : {}
    })
  });
}, D = async (e) => {
  const { blocks: t, parent: r, repeaterData: i, type: n } = e;
  let o = H(
    T(t, (a) => v(a, "_id") && (h(r) ? !a._parent : a._parent === r)),
    "_id"
  );
  const s = (a) => T(t, (l) => l._parent === a).length > 0;
  return (n === "Heading" || n === "Paragraph" || n === "Link") && (o = W(o)), U(o, (a) => a ? /* @__PURE__ */ u(ge, { ...e, dataProviders: e.dataProviders, key: a._id, block: a }, ({ _id: l, _type: y, repeaterItems: g, $repeaterItemsKey: c }) => y === "Repeater" ? b(g) && g.map((_, P) => /* @__PURE__ */ u(
    D,
    {
      ...e,
      parent: a._id,
      key: `${d(a, "_parent", "root")}-${a._id}-${P}`,
      repeaterData: { index: P, dataKey: c }
    }
  )) : s(l) ? /* @__PURE__ */ u(
    D,
    {
      ...e,
      parent: a._id,
      key: `${d(a, "_parent", "root")}-${a._id}`,
      repeaterData: i,
      type: a._type
    }
  ) : null) : null);
};
async function Ce(e) {
  if (h(e.lang) && !h(e.fallbackLang))
    throw new Error("lang prop is required when fallbackLang is provided");
  if (h(e.blocks))
    return null;
  const t = e.lang ?? "en", r = e.fallbackLang ?? t;
  if (e.dataProviders)
    return /* @__PURE__ */ m(D, { ...e, lang: t, fallbackLang: r, dataProviders: e.dataProviders });
  const n = e.blocks.filter((o) => {
    const s = L(o._type);
    return !!(v(s, "dataProvider") && I(s.dataProvider));
  }).reduce(
    (o, s) => {
      const a = L(s._type);
      if (!a || !a.dataProvider)
        return o;
      const l = {
        pageProps: e.pageProps,
        block: s,
        lang: e.lang,
        draft: e.draft,
        inBuilder: !1
      };
      return o[s._id] = Promise.resolve(a.dataProvider(l)), o;
    },
    {}
  );
  return /* @__PURE__ */ m(D, { ...e, lang: t, fallbackLang: r, dataProviders: n });
}
function Se(e, t) {
  const r = e.filter((i) => i._type === "GlobalBlock" || i._type === "PartialBlock");
  for (let i = 0; i < r.length; i++) {
    const n = r[i], o = d(n, "partialBlockId", d(n, "globalBlock", ""));
    if (o === "") continue;
    let s = Y(d(t, o, []));
    n._parent && (s == null ? void 0 : s.length) > 0 && (s = s.map((l) => (h(l._parent) && (l._parent = n._parent), l)));
    const a = e.indexOf(n);
    e.splice(a, 1, ...s);
  }
  return e;
}
const Te = (e) => {
  if (!e) return [];
  try {
    return JSON.parse(ue(e)).filter((r) => !r._type.startsWith("@chai"));
  } catch {
    return [{ _type: "Paragraph", _id: "error", content: "Invalid JSON. Please check the JSON string." }];
  }
};
function ue(e) {
  const t = /(asset:\/\/|https:\/\/asset\.localhost\/)(?:localhost\/)?[^"']+/g;
  return e.replace(t, (r) => {
    const i = decodeURIComponent(r), n = i.indexOf("public");
    return n !== -1 ? i.substring(n + 6) : i;
  });
}
async function pe(e, t = [], r = !1) {
  return await Z({
    tailwindConfig: {
      darkMode: "class",
      safelist: t,
      theme: {
        // @ts-ignore
        extend: {
          ...ie(),
          keyframes: {
            "accordion-down": {
              from: {
                height: "0"
              },
              to: {
                height: "var(--radix-accordion-content-height)"
              }
            },
            "accordion-up": {
              from: {
                height: "var(--radix-accordion-content-height)"
              },
              to: {
                height: "0"
              }
            }
          },
          animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out"
          }
        }
      },
      plugins: [ae, re, ee, te, ne],
      corePlugins: { preflight: r }
    }
  }).generateStylesFromContent(
    ` ${r ? "@tailwind base;" : ""}
      @tailwind components;
      @tailwind utilities;`,
    e
  );
}
const fe = (e, t) => {
  const r = JSON.stringify(e).replace(/#styles:([^"]*)/g, (i, n) => `#styles:${n.replace(/^,/g, " ")}`.replace(/#styles:/g, ""));
  return pe([r], [], t);
}, Le = async (e, t = !1) => await fe(e, t);
export {
  Ce as AsyncRenderChaiBlocks,
  Ie as RenderChaiBlocks,
  Me as applyChaiDataBinding,
  Oe as applyDesignTokens,
  Ne as convertHTMLToChaiBlocks,
  Te as convertToBlocks,
  Ke as getChaiThemeCssVariables,
  Se as getMergedPartialBlocks,
  Le as getStylesForBlocks,
  Re as getThemeFontsCSSImport,
  Ae as getThemeFontsLinkMarkup
};
