import { get as c, each as f, has as d, set as o, cloneDeep as m, omitBy as P } from "lodash-es";
import { useMemo as y } from "react";
const t = {}, w = () => t, R = (s) => y(() => c(t, s, null), [s]), k = (s) => c(t, s), U = (s) => (console.warn("getDefaultBlockProps is deprecated. Use getBlockDefaultProps instead."), g(s)), g = (s) => {
  var n;
  const e = c(t, s), r = ((n = e == null ? void 0 : e.props) == null ? void 0 : n.schema) || ((e == null ? void 0 : e.schema) ?? {}), i = c(r, "properties", {}), a = {};
  return f(i, (l, p) => {
    d(l, "block") || o(a, p, l.default);
  }), a;
}, v = (s) => (console.warn("getI18nBlockProps is deprecated. Use getBlockI18nProps instead."), c(t, `${s}.i18nProps`, [])), A = (s) => (console.warn("getAIBlockProps is deprecated. Use getBlockAIProps instead."), c(t, `${s}.aiProps`, [])), W = (s) => {
  var B, h;
  const e = k(s);
  if (!e)
    return;
  const r = ((B = e.props) == null ? void 0 : B.schema) || (e.schema ?? {}), i = ((h = e.props) == null ? void 0 : h.uiSchema) || (e.uiSchema ?? {}), a = m(r), n = c(a, "properties", {}), l = P(n, (u) => (u == null ? void 0 : u.styles) === !0);
  return o(a, "properties", l), { schema: a, uiSchema: i || {} };
}, _ = (s) => (console.warn("syncBlocksWithDefaults is deprecated. Use syncBlocksWithDefaultProps instead."), D(s)), D = (s) => s.map((e) => d(t, e._type) ? { ...g(e._type), ...e } : e), S = (s, e) => {
  const r = c(t, e.type);
  r ? o(t, e.type, { ...r, component: s, ...e }) : o(t, e.type, { component: s, ...e });
}, x = (s, e) => {
  S(s, { ...e, category: e.category || "core" });
}, E = (s, e) => {
  const r = c(t, e.type);
  r ? o(t, e.type, { ...r, component: s, ...e }) : o(t, e.type, { component: s, ...e });
}, b = (s, e) => {
  const r = k(s);
  o(t, s, { ...r, dataProvider: e });
}, $ = (s, e) => {
  const r = k(s);
  o(t, s, { ...r, component: e });
}, j = (s, e) => ({
  type: "null",
  block: s,
  prop: e,
  default: null,
  runtime: !0,
  ui: { "ui:widget": "hidden" }
});
export {
  g as a,
  W as b,
  j as c,
  U as d,
  v as e,
  k as f,
  A as g,
  E as h,
  $ as i,
  D as j,
  _ as k,
  w as l,
  x as r,
  b as s,
  R as u
};
