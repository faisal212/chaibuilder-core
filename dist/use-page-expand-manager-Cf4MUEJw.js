import { useAtom as A } from "jotai";
import { atomWithStorage as S } from "jotai/utils";
import { useCallback as p } from "react";
import { isEmpty as i, uniq as y, union as O, flatMap as P, includes as C, filter as F, find as M } from "lodash-es";
const T = S("expandedPagesState", []), m = (e) => P(e, (n) => [
  n,
  ...n.children ? m(n.children) : []
]), b = (e, n) => {
  const t = (s, o = []) => {
    for (const r of s) {
      const d = [...o, r.id];
      if (r.id === n)
        return d;
      if (r.children && r.children.length > 0) {
        const l = t(r.children, d);
        if (l) return l;
      }
    }
    return null;
  };
  return t(e) || [];
}, x = (e, n) => {
  if (!n) return [];
  const t = m(e), s = M(t, (o) => o.id === n);
  if (s) {
    if (s.parent)
      return [...x(e, s.parent), n];
    const o = b(e, n);
    if (!i(o))
      return o;
  }
  return [n];
}, k = (e) => {
  const n = /* @__PURE__ */ new Set(), t = (s, o = []) => {
    s.forEach((r) => {
      const d = [...o, r.id];
      r.shouldExpandOnSearch && d.forEach((l) => n.add(l)), r.children && !i(r.children) && t(r.children, d);
    });
  };
  return t(e), Array.from(n);
}, W = (e) => {
  const [n, t] = A(T), s = e ? C(n, e) : !1, o = p(() => {
    t(
      (a) => s ? F(a, (c) => c !== e) : [...a, e]
    );
  }, [t, s, e]), r = p(
    (a, c) => {
      if (!c || i(a)) return;
      const h = m(a), f = x(h, c);
      if (!Array.isArray(f) || i(f)) return;
      const u = f.slice(0, -1);
      i(u) || t((E) => y([...E, ...u]));
    },
    [t]
  ), d = p(
    (a) => {
      if (i(a)) return;
      const c = k(a);
      i(c) || t((h) => O(h, c));
    },
    [t]
  ), l = p((a) => {
    if (i(a)) return;
    const c = P(a, (h) => {
      const f = (u) => [u.id, ...u.children ? P(u.children, f) : []];
      return f(h);
    });
    t(c);
  }, [t]), g = p(() => {
    t([]);
  }, [t]);
  return {
    isExpanded: s,
    toggleExpanded: o,
    updateForSelectedPage: r,
    expandedPages: n,
    expandPagesOnSearch: d,
    setExpandedPages: t,
    expandAll: l,
    collapseAll: g
  };
};
export {
  W as u
};
