import { get as r, has as c } from "lodash-es";
const t = {};
function i(a, e) {
  c(t, a) && console.warn(`Collection ${a} already registered`), t[a] = { ...e, id: a };
}
const l = () => Object.values(t), g = (a) => r(t, a);
let o = async (a) => ({
  ...a
});
const C = (a) => {
  o = a;
}, h = async (a) => {
  try {
    return await o(a);
  } catch (e) {
    return console.error(e), {};
  }
}, s = {}, P = () => Object.values(s), u = (a) => s[a], T = (a, e) => {
  s[a] = { key: a, ...e, hasSlug: !0 };
}, p = (a, e) => {
  s[a] = { key: a, ...e, hasSlug: !1 };
};
export {
  t as C,
  s as P,
  g as a,
  o as b,
  C as c,
  h as d,
  P as e,
  u as f,
  l as g,
  T as h,
  p as i,
  i as r
};
