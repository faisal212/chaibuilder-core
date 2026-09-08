import { has as g, uniqBy as u, filter as m, compact as d, map as C, keys as P, intersection as n, get as p, each as y, isEmpty as h, omit as B } from "lodash-es";
import { S as l } from "./STRINGS-BExFecZW.js";
import { b as Y, C as K, P as q, a as z, g as H, d as N, f as U, e as V, r as J, c as M, h as Q, i as X } from "./register-partial-type-BjtdfKHE.js";
import { s as S } from "./core-nSRy3D7z.js";
import { c as ee, g as te, a as se, b as re, d as oe, e as ae, f as ie, r as ne, h as le, i as ce, j as pe, k as he, u as ge, l as ue } from "./core-nSRy3D7z.js";
import { g as f } from "./fonts-B3UYxuJI.js";
import { a as me, r as de, u as Ce } from "./fonts-B3UYxuJI.js";
const k = (e) => {
  const t = m(d(C(e, f)), (s) => g(s, "src"));
  return $(t);
}, $ = (e) => !e || e.length === 0 ? "" : u(e, "family").map(
  (t) => t.src.map(
    (s) => `@font-face {
        font-family: "${t.family}";
        src: url("${s.url}") format("${s.format}");
        font-display: swap;
        font-optical-sizing: auto;
        ${s.fontWeight ? `font-weight: ${s.fontWeight};` : ""}
        ${s.fontStyle ? `font-style: ${s.fontStyle};` : ""}
        ${s.fontStretch ? `font-stretch: ${s.fontStretch};` : ""}
      }`
  ).join(`
`)
).join(`
`), _ = async (e, t) => {
  const s = k([e, t]), o = [];
  return [e, ...e !== t ? [t] : []].forEach((a) => {
    const r = f(a);
    r && g(r, "src") && r.src && r.src.length > 0 && o.push(r.src[0].url);
  }), { fontStyles: s, preloads: u(o, (a) => a) };
}, v = S, A = (e) => (console.warn("registerChaiBlockSchema is deprecated, use registerChaiBlockProps instead"), w(e)), w = (e) => {
  const t = ["_type", "_id", "_parent", "_bindings", "_name"], s = ["$loading", "blockProps", "inBuilder", "lang", "draft", "pageProps", "pageData", "children"], o = P(e.properties);
  if (n(o, t).length > 0)
    throw new Error(`Reserved props are not allowed: ${n(o, t).join(", ")}`);
  if (n(o, s).length > 0)
    throw new Error(`Runtime props are not allowed in schema: ${n(o, s).join(", ")}`);
  const i = p(e, "properties", {}), a = {};
  return y(i, (r, c) => {
    h(r.ui) || (a[c] = { ...r.ui }, delete i[c].ui);
  }), {
    schema: h(i) ? {} : { ...B(e, ["ui"]) },
    uiSchema: { ...p(e, "ui", {}), ...a }
  };
}, F = (e) => {
  var t;
  return ((t = e.props) == null ? void 0 : t.schema) || e.schema;
}, j = (e) => {
  var t;
  return ((t = e.props) == null ? void 0 : t.uiSchema) || e.uiSchema;
}, I = (e = "") => (console.warn("StylesProp is deprecated, use stylesProp instead"), {
  type: "string",
  styles: !0,
  default: `${l},${e}`,
  ui: { "ui:widget": "hidden" }
}), L = (e = "") => ({
  type: "string",
  styles: !0,
  default: `${l},${e}`,
  ui: { "ui:widget": "hidden" }
}), b = (e) => (console.warn("runtimeProp is deprecated, use builderProp instead"), {
  runtime: !0,
  ...e
}), x = (e) => ({
  builderProp: !0,
  ...e
}), G = (e) => `${l},${e}`;
export {
  Y as CHAI_GLOBAL_DATA_PROVIDER,
  K as COLLECTIONS,
  q as PAGE_TYPES,
  I as StylesProp,
  x as builderProp,
  ee as closestBlockProp,
  G as defaultChaiStyles,
  te as getAIBlockProps,
  me as getAllRegisteredFonts,
  se as getBlockDefaultProps,
  re as getBlockFormSchemas,
  F as getBlockSchema,
  j as getBlockUiSchema,
  z as getChaiCollection,
  H as getChaiCollections,
  N as getChaiGlobalData,
  U as getChaiPageType,
  V as getChaiPageTypes,
  oe as getDefaultBlockProps,
  _ as getFontStyles,
  ae as getI18nBlockProps,
  ie as getRegisteredChaiBlock,
  f as getRegisteredFont,
  ne as registerChaiBlock,
  w as registerChaiBlockProps,
  A as registerChaiBlockSchema,
  J as registerChaiCollection,
  de as registerChaiFont,
  M as registerChaiGlobalDataProvider,
  Q as registerChaiPageType,
  X as registerChaiPartialType,
  le as registerChaiServerBlock,
  b as runtimeProp,
  ce as setChaiBlockComponent,
  v as setChaiBlockDataProvider,
  S as setChaiServerBlockDataProvider,
  L as stylesProp,
  pe as syncBlocksWithDefaultProps,
  he as syncBlocksWithDefaults,
  ge as useRegisteredChaiBlock,
  ue as useRegisteredChaiBlocks,
  Ce as useRegisteredFonts
};
