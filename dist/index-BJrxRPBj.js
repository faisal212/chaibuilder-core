var br = Object.defineProperty;
var Qn = (e) => {
  throw TypeError(e);
};
var _r = (e, t, n) => t in e ? br(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var cn = (e, t, n) => _r(e, typeof t != "symbol" ? t + "" : t, n), zn = (e, t, n) => t.has(e) || Qn("Cannot " + n);
var A = (e, t, n) => (zn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), C = (e, t, n) => t.has(e) ? Qn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), v = (e, t, n, s) => (zn(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
import { jsx as l, jsxs as m, Fragment as de } from "react/jsx-runtime";
import { useQueryClient as Z, onlineManager as bs, useQuery as le, useMutation as ne, QueryClient as vr, QueryClientProvider as Lr } from "@tanstack/react-query";
import * as W from "react";
import Nr, { useMemo as q, useState as N, useEffect as ae, useCallback as j, useRef as Zt, lazy as Q, Suspense as X, createContext as Ir, useContext as Cr, startTransition as Wn } from "react";
import { useAtom as me, atom as Ae, useSetAtom as kn, useAtomValue as Gr } from "jotai";
import { round as kr, get as $, noop as Xt, keyBy as xr, map as An, find as oe, values as Dr, reverse as Or, sortBy as Mr, isEmpty as fe, compact as ft, filter as xn, uniq as Rr, each as Br, upperCase as Yn, includes as Ur, has as _s, startCase as Fr, isFunction as Hr, isArray as Kr, pick as vs, cloneDeep as Vr } from "lodash-es";
import { MoreVertical as Ls, CopyPlusIcon as qr, Pencil as Ns, Power as $r, Trash as jr, Loader as Oe, Hash as Qr, File as zr, MoreHorizontal as Wr, Languages as Jn, ChevronDown as Sn, Star as Yr, Plus as Dn, Palette as Jr, Play as Zr, CheckCircle as Xr, Save as ea, Send as Zn, Rocket as Xn, TriangleAlert as ta, ExternalLink as na, Folder as es, ChevronRight as sa, User as ra, X as ts, Trash2 as aa, ImageIcon as ns, Code as ia, Eye as oa, Share2 as la, FileCode2 as ca, AlertTriangle as ua } from "lucide-react";
import { B as M, h as da, v as un, e as ss, j as fa, m as ha, x as ga, D as ma, E as pa } from "./register-chai-top-bar-DWmJ2efT.js";
import { ag as ya, ah as Tn, ai as Ea, aj as Aa, ak as Sa, al as Ta, am as Pa, v as en, w as tn, x as nn, y as Pe, af as wa, d as pe, an as ba, Y as _a, ao as va, ap as La, aq as Na, ar as kt, D as On, as as Ia, ae as Ca, F as Mn, G as Rn, H as Bn, at as Ga, au as rs, av as ka, aw as xa, ax as Da, ay as Oa, az as Ma, aA as Ra, ab as Ba, aa as Ua, ac as Fa, e as Is, a0 as Ha, a9 as Ka, a1 as Va, a2 as qa, a3 as $a, a4 as ja, a5 as Qa, a6 as za, a7 as Wa, aB as Ya, Q as Ja, R as Za, f as Xa, g as ei, Z as ti, _ as ni, $ as dn, aC as fn, T as as } from "./index-CrqH_FTA.js";
import { ZoomInIcon as si, LightningBoltIcon as ri } from "@radix-ui/react-icons";
import { useTranslation as ce } from "react-i18next";
import { e as ai } from "./chai-theme-helpers-BEf2rwE4.js";
import { toast as B } from "sonner";
import { c as qt } from "./common-functions-D2lMFR6K.js";
import { A as ii, g as oi } from "./models-DZ9C6CvE.js";
import { ErrorBoundary as li } from "react-error-boundary";
import { j as ci } from "./core-nSRy3D7z.js";
import { loadWebBlocks as ui } from "./web-blocks.js";
import { g as di } from "./apply-binding-v_W4uR3U.js";
var w = {
  context: void 0,
  registry: void 0,
  effects: void 0,
  done: !1,
  getContextId() {
    return is(this.context.count);
  },
  getNextContextId() {
    return is(this.context.count++);
  }
};
function is(e) {
  const t = String(e), n = t.length - 1;
  return w.context.id + (n ? String.fromCharCode(96 + n) : "") + t;
}
function ct(e) {
  w.context = e;
}
var Cs = !1, fi = (e, t) => e === t, $t = Symbol("solid-proxy"), Gs = typeof Proxy == "function", ks = Symbol("solid-track"), jt = {
  equals: fi
}, xs = Fs, be = 1, Qt = 2, Ds = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
}, hn = {}, L = null, gn = null, hi = null, O = null, te = null, we = null, sn = 0;
function ke(e, t) {
  const n = O, s = L, r = e.length === 0, a = t === void 0 ? s : t, i = r ? Ds : {
    owned: null,
    cleanups: null,
    context: a ? a.context : null,
    owner: a
  }, o = r ? e : () => e(() => ee(() => gt(i)));
  L = i, O = null;
  try {
    return Ee(o, !0);
  } finally {
    O = n, L = s;
  }
}
function H(e, t) {
  t = t ? Object.assign({}, jt, t) : jt;
  const n = {
    value: e,
    observers: null,
    observerSlots: null,
    comparator: t.equals || void 0
  }, s = (r) => (typeof r == "function" && (r = r(n.value)), Us(n, r));
  return [Bs.bind(n), s];
}
function gi(e, t, n) {
  const s = rn(e, t, !0, be);
  it(s);
}
function xe(e, t, n) {
  const s = rn(e, t, !1, be);
  it(s);
}
function Os(e, t, n) {
  xs = wi;
  const s = rn(e, t, !1, be);
  (!n || !n.render) && (s.user = !0), we ? we.push(s) : it(s);
}
function J(e, t, n) {
  n = n ? Object.assign({}, jt, n) : jt;
  const s = rn(e, t, !0, 0);
  return s.observers = null, s.observerSlots = null, s.comparator = n.equals || void 0, it(s), Bs.bind(s);
}
function mi(e) {
  return e && typeof e == "object" && "then" in e;
}
function pi(e, t, n) {
  let s, r, a;
  s = !0, r = e, a = {};
  let i = null, o = hn, c = null, u = !1, f = "initialValue" in a, d = typeof s == "function" && J(s);
  const g = /* @__PURE__ */ new Set(), [h, y] = (a.storage || H)(a.initialValue), [P, G] = H(void 0), [E, S] = H(void 0, {
    equals: !1
  }), [T, D] = H(f ? "ready" : "unresolved");
  w.context && (c = w.getNextContextId(), a.ssrLoadFrom === "initial" ? o = a.initialValue : w.load && w.has(c) && (o = w.load(c)));
  function U(b, _, V, K) {
    return i === b && (i = null, K !== void 0 && (f = !0), (b === o || _ === o) && a.onHydrated && queueMicrotask(() => a.onHydrated(K, {
      value: _
    })), o = hn, x(_, V)), _;
  }
  function x(b, _) {
    Ee(() => {
      _ === void 0 && y(() => b), D(_ !== void 0 ? "errored" : f ? "ready" : "unresolved"), G(_);
      for (const V of g.keys()) V.decrement();
      g.clear();
    }, !1);
  }
  function Y() {
    const b = Si, _ = h(), V = P();
    if (V !== void 0 && !i) throw V;
    return O && O.user, _;
  }
  function se(b = !0) {
    if (b !== !1 && u) return;
    u = !1;
    const _ = d ? d() : s;
    if (_ == null || _ === !1) {
      U(i, ee(h));
      return;
    }
    let V;
    const K = o !== hn ? o : ee(() => {
      try {
        return r(_, {
          value: h(),
          refetching: b
        });
      } catch (ie) {
        V = ie;
      }
    });
    if (V !== void 0) {
      U(i, void 0, Kt(V), _);
      return;
    } else if (!mi(K))
      return U(i, K, void 0, _), K;
    return i = K, "v" in K ? (K.s === 1 ? U(i, K.v, void 0, _) : U(i, void 0, Kt(K.v), _), K) : (u = !0, queueMicrotask(() => u = !1), Ee(() => {
      D(f ? "refreshing" : "pending"), S();
    }, !1), K.then((ie) => U(K, ie, void 0, _), (ie) => U(K, void 0, Kt(ie), _)));
  }
  Object.defineProperties(Y, {
    state: {
      get: () => T()
    },
    error: {
      get: () => P()
    },
    loading: {
      get() {
        const b = T();
        return b === "pending" || b === "refreshing";
      }
    },
    latest: {
      get() {
        if (!f) return Y();
        const b = P();
        if (b && !i) throw b;
        return h();
      }
    }
  });
  let F = L;
  return d ? gi(() => (F = L, se(!1))) : se(!1), [Y, {
    refetch: (b) => Ms(F, () => se(b)),
    mutate: y
  }];
}
function Au(e) {
  return Ee(e, !1);
}
function ee(e) {
  if (O === null) return e();
  const t = O;
  O = null;
  try {
    return e();
  } finally {
    O = t;
  }
}
function Su(e, t, n) {
  const s = Array.isArray(e);
  let r, a = n && n.defer;
  return (i) => {
    let o;
    if (s) {
      o = Array(e.length);
      for (let u = 0; u < e.length; u++) o[u] = e[u]();
    } else o = e();
    if (a)
      return a = !1, i;
    const c = ee(() => t(o, r, i));
    return r = o, c;
  };
}
function yi(e) {
  Os(() => ee(e));
}
function ht(e) {
  return L === null || (L.cleanups === null ? L.cleanups = [e] : L.cleanups.push(e)), e;
}
function os() {
  return L;
}
function Ms(e, t) {
  const n = L, s = O;
  L = e, O = null;
  try {
    return Ee(t, !0);
  } catch (r) {
    Un(r);
  } finally {
    L = n, O = s;
  }
}
function Ei(e) {
  const t = O, n = L;
  return Promise.resolve().then(() => {
    O = t, L = n;
    let s;
    return Ee(e, !1), O = L = null, s ? s.done : void 0;
  });
}
var [Ai, Tu] = /* @__PURE__ */ H(!1);
function Pu() {
  return [Ai, Ei];
}
function wu(e, t) {
  const n = Symbol("context");
  return {
    id: n,
    Provider: bi(n),
    defaultValue: e
  };
}
function bu(e) {
  let t;
  return L && L.context && (t = L.context[e.id]) !== void 0 ? t : e.defaultValue;
}
function Rs(e) {
  const t = J(e), n = J(() => Pn(t()));
  return n.toArray = () => {
    const s = n();
    return Array.isArray(s) ? s : s != null ? [s] : [];
  }, n;
}
var Si;
function Bs() {
  if (this.sources && this.state)
    if (this.state === be) it(this);
    else {
      const e = te;
      te = null, Ee(() => Wt(this), !1), te = e;
    }
  if (O) {
    const e = this.observers ? this.observers.length : 0;
    O.sources ? (O.sources.push(this), O.sourceSlots.push(e)) : (O.sources = [this], O.sourceSlots = [e]), this.observers ? (this.observers.push(O), this.observerSlots.push(O.sources.length - 1)) : (this.observers = [O], this.observerSlots = [O.sources.length - 1]);
  }
  return this.value;
}
function Us(e, t, n) {
  let s = e.value;
  return (!e.comparator || !e.comparator(s, t)) && (e.value = t, e.observers && e.observers.length && Ee(() => {
    for (let r = 0; r < e.observers.length; r += 1) {
      const a = e.observers[r], i = gn && gn.running;
      i && gn.disposed.has(a), (i ? !a.tState : !a.state) && (a.pure ? te.push(a) : we.push(a), a.observers && Hs(a)), i || (a.state = be);
    }
    if (te.length > 1e6)
      throw te = [], new Error();
  }, !1)), t;
}
function it(e) {
  if (!e.fn) return;
  gt(e);
  const t = sn;
  Ti(e, e.value, t);
}
function Ti(e, t, n) {
  let s;
  const r = L, a = O;
  O = L = e;
  try {
    s = e.fn(t);
  } catch (i) {
    return e.pure && (e.state = be, e.owned && e.owned.forEach(gt), e.owned = null), e.updatedAt = n + 1, Un(i);
  } finally {
    O = a, L = r;
  }
  (!e.updatedAt || e.updatedAt <= n) && (e.updatedAt != null && "observers" in e ? Us(e, s) : e.value = s, e.updatedAt = n);
}
function rn(e, t, n, s = be, r) {
  const a = {
    fn: e,
    state: s,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: L,
    context: L ? L.context : null,
    pure: n
  };
  return L === null || L !== Ds && (L.owned ? L.owned.push(a) : L.owned = [a]), a;
}
function zt(e) {
  if (e.state === 0) return;
  if (e.state === Qt) return Wt(e);
  if (e.suspense && ee(e.suspense.inFallback)) return e.suspense.effects.push(e);
  const t = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < sn); )
    e.state && t.push(e);
  for (let n = t.length - 1; n >= 0; n--)
    if (e = t[n], e.state === be)
      it(e);
    else if (e.state === Qt) {
      const s = te;
      te = null, Ee(() => Wt(e, t[0]), !1), te = s;
    }
}
function Ee(e, t) {
  if (te) return e();
  let n = !1;
  t || (te = []), we ? n = !0 : we = [], sn++;
  try {
    const s = e();
    return Pi(n), s;
  } catch (s) {
    n || (we = null), te = null, Un(s);
  }
}
function Pi(e) {
  if (te && (Fs(te), te = null), e) return;
  const t = we;
  we = null, t.length && Ee(() => xs(t), !1);
}
function Fs(e) {
  for (let t = 0; t < e.length; t++) zt(e[t]);
}
function wi(e) {
  let t, n = 0;
  for (t = 0; t < e.length; t++) {
    const s = e[t];
    s.user ? e[n++] = s : zt(s);
  }
  if (w.context) {
    if (w.count) {
      w.effects || (w.effects = []), w.effects.push(...e.slice(0, n));
      return;
    }
    ct();
  }
  for (w.effects && (w.done || !w.count) && (e = [...w.effects, ...e], n += w.effects.length, delete w.effects), t = 0; t < n; t++) zt(e[t]);
}
function Wt(e, t) {
  e.state = 0;
  for (let n = 0; n < e.sources.length; n += 1) {
    const s = e.sources[n];
    if (s.sources) {
      const r = s.state;
      r === be ? s !== t && (!s.updatedAt || s.updatedAt < sn) && zt(s) : r === Qt && Wt(s, t);
    }
  }
}
function Hs(e) {
  for (let t = 0; t < e.observers.length; t += 1) {
    const n = e.observers[t];
    n.state || (n.state = Qt, n.pure ? te.push(n) : we.push(n), n.observers && Hs(n));
  }
}
function gt(e) {
  let t;
  if (e.sources)
    for (; e.sources.length; ) {
      const n = e.sources.pop(), s = e.sourceSlots.pop(), r = n.observers;
      if (r && r.length) {
        const a = r.pop(), i = n.observerSlots.pop();
        s < r.length && (a.sourceSlots[i] = s, r[s] = a, n.observerSlots[s] = i);
      }
    }
  if (e.tOwned) {
    for (t = e.tOwned.length - 1; t >= 0; t--) gt(e.tOwned[t]);
    delete e.tOwned;
  }
  if (e.owned) {
    for (t = e.owned.length - 1; t >= 0; t--) gt(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = e.cleanups.length - 1; t >= 0; t--) e.cleanups[t]();
    e.cleanups = null;
  }
  e.state = 0;
}
function Kt(e) {
  return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", {
    cause: e
  });
}
function Un(e, t = L) {
  throw Kt(e);
}
function Pn(e) {
  if (typeof e == "function" && !e.length) return Pn(e());
  if (Array.isArray(e)) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const s = Pn(e[n]);
      Array.isArray(s) ? t.push.apply(t, s) : t.push(s);
    }
    return t;
  }
  return e;
}
function bi(e, t) {
  return function(s) {
    let r;
    return xe(() => r = ee(() => (L.context = {
      ...L.context,
      [e]: s.value
    }, Rs(() => s.children))), void 0), r;
  };
}
var wn = Symbol("fallback");
function Yt(e) {
  for (let t = 0; t < e.length; t++) e[t]();
}
function _i(e, t, n = {}) {
  let s = [], r = [], a = [], i = 0, o = t.length > 1 ? [] : null;
  return ht(() => Yt(a)), () => {
    let c = e() || [], u = c.length, f, d;
    return c[ks], ee(() => {
      let h, y, P, G, E, S, T, D, U;
      if (u === 0)
        i !== 0 && (Yt(a), a = [], s = [], r = [], i = 0, o && (o = [])), n.fallback && (s = [wn], r[0] = ke((x) => (a[0] = x, n.fallback())), i = 1);
      else if (i === 0) {
        for (r = new Array(u), d = 0; d < u; d++)
          s[d] = c[d], r[d] = ke(g);
        i = u;
      } else {
        for (P = new Array(u), G = new Array(u), o && (E = new Array(u)), S = 0, T = Math.min(i, u); S < T && s[S] === c[S]; S++) ;
        for (T = i - 1, D = u - 1; T >= S && D >= S && s[T] === c[D]; T--, D--)
          P[D] = r[T], G[D] = a[T], o && (E[D] = o[T]);
        for (h = /* @__PURE__ */ new Map(), y = new Array(D + 1), d = D; d >= S; d--)
          U = c[d], f = h.get(U), y[d] = f === void 0 ? -1 : f, h.set(U, d);
        for (f = S; f <= T; f++)
          U = s[f], d = h.get(U), d !== void 0 && d !== -1 ? (P[d] = r[f], G[d] = a[f], o && (E[d] = o[f]), d = y[d], h.set(U, d)) : a[f]();
        for (d = S; d < u; d++)
          d in P ? (r[d] = P[d], a[d] = G[d], o && (o[d] = E[d], o[d](d))) : r[d] = ke(g);
        r = r.slice(0, i = u), s = c.slice(0);
      }
      return r;
    });
    function g(h) {
      if (a[d] = h, o) {
        const [y, P] = H(d);
        return o[d] = P, t(c[d], y);
      }
      return t(c[d]);
    }
  };
}
function vi(e, t, n = {}) {
  let s = [], r = [], a = [], i = [], o = 0, c;
  return ht(() => Yt(a)), () => {
    const u = e() || [], f = u.length;
    return u[ks], ee(() => {
      if (f === 0)
        return o !== 0 && (Yt(a), a = [], s = [], r = [], o = 0, i = []), n.fallback && (s = [wn], r[0] = ke((g) => (a[0] = g, n.fallback())), o = 1), r;
      for (s[0] === wn && (a[0](), a = [], s = [], r = [], o = 0), c = 0; c < f; c++)
        c < s.length && s[c] !== u[c] ? i[c](() => u[c]) : c >= s.length && (r[c] = ke(d));
      for (; c < s.length; c++)
        a[c]();
      return o = i.length = a.length = f, s = u.slice(0), r = r.slice(0, o);
    });
    function d(g) {
      a[c] = g;
      const [h, y] = H(u[c]);
      return i[c] = y, t(h, c);
    }
  };
}
function Ks(e, t) {
  return ee(() => e(t || {}));
}
function Mt() {
  return !0;
}
var bn = {
  get(e, t, n) {
    return t === $t ? n : e.get(t);
  },
  has(e, t) {
    return t === $t ? !0 : e.has(t);
  },
  set: Mt,
  deleteProperty: Mt,
  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return e.get(t);
      },
      set: Mt,
      deleteProperty: Mt
    };
  },
  ownKeys(e) {
    return e.keys();
  }
};
function mn(e) {
  return (e = typeof e == "function" ? e() : e) ? e : {};
}
function Li() {
  for (let e = 0, t = this.length; e < t; ++e) {
    const n = this[e]();
    if (n !== void 0) return n;
  }
}
function Vs(...e) {
  let t = !1;
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    t = t || !!o && $t in o, e[i] = typeof o == "function" ? (t = !0, J(o)) : o;
  }
  if (Gs && t)
    return new Proxy({
      get(i) {
        for (let o = e.length - 1; o >= 0; o--) {
          const c = mn(e[o])[i];
          if (c !== void 0) return c;
        }
      },
      has(i) {
        for (let o = e.length - 1; o >= 0; o--)
          if (i in mn(e[o])) return !0;
        return !1;
      },
      keys() {
        const i = [];
        for (let o = 0; o < e.length; o++) i.push(...Object.keys(mn(e[o])));
        return [...new Set(i)];
      }
    }, bn);
  const n = {}, s = /* @__PURE__ */ Object.create(null);
  for (let i = e.length - 1; i >= 0; i--) {
    const o = e[i];
    if (!o) continue;
    const c = Object.getOwnPropertyNames(o);
    for (let u = c.length - 1; u >= 0; u--) {
      const f = c[u];
      if (f === "__proto__" || f === "constructor") continue;
      const d = Object.getOwnPropertyDescriptor(o, f);
      if (!s[f])
        s[f] = d.get ? {
          enumerable: !0,
          configurable: !0,
          get: Li.bind(n[f] = [d.get.bind(o)])
        } : d.value !== void 0 ? d : void 0;
      else {
        const g = n[f];
        g && (d.get ? g.push(d.get.bind(o)) : d.value !== void 0 && g.push(() => d.value));
      }
    }
  }
  const r = {}, a = Object.keys(s);
  for (let i = a.length - 1; i >= 0; i--) {
    const o = a[i], c = s[o];
    c && c.get ? Object.defineProperty(r, o, c) : r[o] = c ? c.value : void 0;
  }
  return r;
}
function Ni(e, ...t) {
  if (Gs && $t in e) {
    const r = new Set(t.length > 1 ? t.flat() : t[0]), a = t.map((i) => new Proxy({
      get(o) {
        return i.includes(o) ? e[o] : void 0;
      },
      has(o) {
        return i.includes(o) && o in e;
      },
      keys() {
        return i.filter((o) => o in e);
      }
    }, bn));
    return a.push(new Proxy({
      get(i) {
        return r.has(i) ? void 0 : e[i];
      },
      has(i) {
        return r.has(i) ? !1 : i in e;
      },
      keys() {
        return Object.keys(e).filter((i) => !r.has(i));
      }
    }, bn)), a;
  }
  const n = {}, s = t.map(() => ({}));
  for (const r of Object.getOwnPropertyNames(e)) {
    const a = Object.getOwnPropertyDescriptor(e, r), i = !a.get && !a.set && a.enumerable && a.writable && a.configurable;
    let o = !1, c = 0;
    for (const u of t)
      u.includes(r) && (o = !0, i ? s[c][r] = a.value : Object.defineProperty(s[c], r, a)), ++c;
    o || (i ? n[r] = a.value : Object.defineProperty(n, r, a));
  }
  return [...s, n];
}
function qs(e) {
  let t, n;
  const s = (r) => {
    const a = w.context;
    if (a) {
      const [o, c] = H();
      w.count || (w.count = 0), w.count++, (n || (n = e())).then((u) => {
        !w.done && ct(a), w.count--, c(() => u.default), ct();
      }), t = o;
    } else if (!t) {
      const [o] = pi(() => (n || (n = e())).then((c) => c.default));
      t = o;
    }
    let i;
    return J(() => (i = t()) ? ee(() => {
      if (!a || w.done) return i(r);
      const o = w.context;
      ct(a);
      const c = i(r);
      return ct(o), c;
    }) : "");
  };
  return s.preload = () => n || ((n = e()).then((r) => t = () => r.default), n), s;
}
var Ii = 0;
function _u() {
  return w.context ? w.getNextContextId() : `cl-${Ii++}`;
}
var $s = (e) => `Stale read from <${e}>.`;
function vu(e) {
  const t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return J(_i(() => e.each, e.children, t || void 0));
}
function Lu(e) {
  const t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return J(vi(() => e.each, e.children, t || void 0));
}
function Nu(e) {
  const t = e.keyed, n = J(() => e.when, void 0, void 0), s = t ? n : J(n, void 0, {
    equals: (r, a) => !r == !a
  });
  return J(() => {
    const r = s();
    if (r) {
      const a = e.children;
      return typeof a == "function" && a.length > 0 ? ee(() => a(t ? r : () => {
        if (!ee(s)) throw $s("Show");
        return n();
      })) : a;
    }
    return e.fallback;
  }, void 0, void 0);
}
function Iu(e) {
  const t = Rs(() => e.children), n = J(() => {
    const s = t(), r = Array.isArray(s) ? s : [s];
    let a = () => {
    };
    for (let i = 0; i < r.length; i++) {
      const o = i, c = r[i], u = a, f = J(() => u() ? void 0 : c.when, void 0, void 0), d = c.keyed ? f : J(f, void 0, {
        equals: (g, h) => !g == !h
      });
      a = () => u() || (d() ? [o, f, c] : void 0);
    }
    return a;
  });
  return J(() => {
    const s = n()();
    if (!s) return e.fallback;
    const [r, a, i] = s, o = i.children;
    return typeof o == "function" && o.length > 0 ? ee(() => o(i.keyed ? a() : () => {
      var u;
      if (((u = ee(n)()) == null ? void 0 : u[0]) !== r) throw $s("Match");
      return a();
    })) : o;
  }, void 0, void 0);
}
function Cu(e) {
  return e;
}
var Ci = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"], Gi = /* @__PURE__ */ new Set(["className", "value", "readOnly", "noValidate", "formNoValidate", "isMap", "noModule", "playsInline", ...Ci]), ki = /* @__PURE__ */ new Set(["innerHTML", "textContent", "innerText", "children"]), xi = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), Di = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  class: "className",
  novalidate: {
    $: "noValidate",
    FORM: 1
  },
  formnovalidate: {
    $: "formNoValidate",
    BUTTON: 1,
    INPUT: 1
  },
  ismap: {
    $: "isMap",
    IMG: 1
  },
  nomodule: {
    $: "noModule",
    SCRIPT: 1
  },
  playsinline: {
    $: "playsInline",
    VIDEO: 1
  },
  readonly: {
    $: "readOnly",
    INPUT: 1,
    TEXTAREA: 1
  }
});
function Oi(e, t) {
  const n = Di[e];
  return typeof n == "object" ? n[t] ? n.$ : void 0 : n;
}
var Mi = /* @__PURE__ */ new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]), Ri = /* @__PURE__ */ new Set([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animate",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "color-profile",
  "cursor",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "font",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignObject",
  "g",
  "glyph",
  "glyphRef",
  "hkern",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "missing-glyph",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "set",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  "tref",
  "tspan",
  "use",
  "view",
  "vkern"
]), Bi = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
}, Gu = (e) => J(() => e());
function Ui(e, t, n) {
  let s = n.length, r = t.length, a = s, i = 0, o = 0, c = t[r - 1].nextSibling, u = null;
  for (; i < r || o < a; ) {
    if (t[i] === n[o]) {
      i++, o++;
      continue;
    }
    for (; t[r - 1] === n[a - 1]; )
      r--, a--;
    if (r === i) {
      const f = a < s ? o ? n[o - 1].nextSibling : n[a - o] : c;
      for (; o < a; ) e.insertBefore(n[o++], f);
    } else if (a === o)
      for (; i < r; )
        (!u || !u.has(t[i])) && t[i].remove(), i++;
    else if (t[i] === n[a - 1] && n[o] === t[r - 1]) {
      const f = t[--r].nextSibling;
      e.insertBefore(n[o++], t[i++].nextSibling), e.insertBefore(n[--a], f), t[r] = n[a];
    } else {
      if (!u) {
        u = /* @__PURE__ */ new Map();
        let d = o;
        for (; d < a; ) u.set(n[d], d++);
      }
      const f = u.get(t[i]);
      if (f != null)
        if (o < f && f < a) {
          let d = i, g = 1, h;
          for (; ++d < r && d < a && !((h = u.get(t[d])) == null || h !== f + g); )
            g++;
          if (g > f - o) {
            const y = t[i];
            for (; o < f; ) e.insertBefore(n[o++], y);
          } else e.replaceChild(n[o++], t[i++]);
        } else i++;
      else t[i++].remove();
    }
  }
}
var ut = "_$DX_DELEGATE";
function js(e, t, n, s = {}) {
  let r;
  return ke((a) => {
    r = a, t === document ? e() : vn(t, e(), t.firstChild ? null : void 0, n);
  }, s.owner), () => {
    r(), t.textContent = "";
  };
}
function ku(e, t, n, s) {
  let r;
  const a = () => {
    const o = document.createElement("template");
    return o.innerHTML = e, o.content.firstChild;
  }, i = () => (r || (r = a())).cloneNode(!0);
  return i.cloneNode = i, i;
}
function Fi(e, t = window.document) {
  const n = t[ut] || (t[ut] = /* @__PURE__ */ new Set());
  for (let s = 0, r = e.length; s < r; s++) {
    const a = e[s];
    n.has(a) || (n.add(a), t.addEventListener(a, Qs));
  }
}
function xu(e = window.document) {
  if (e[ut]) {
    for (let t of e[ut].keys()) e.removeEventListener(t, Qs);
    delete e[ut];
  }
}
function _n(e, t, n) {
  Me(e) || (n == null ? e.removeAttribute(t) : e.setAttribute(t, n));
}
function Hi(e, t, n, s) {
  Me(e) || (s == null ? e.removeAttributeNS(t, n) : e.setAttributeNS(t, n, s));
}
function Ki(e, t, n) {
  Me(e) || (n ? e.setAttribute(t, "") : e.removeAttribute(t));
}
function Vi(e, t) {
  Me(e) || (t == null ? e.removeAttribute("class") : e.className = t);
}
function qi(e, t, n, s) {
  if (s)
    Array.isArray(n) ? (e[`$$${t}`] = n[0], e[`$$${t}Data`] = n[1]) : e[`$$${t}`] = n;
  else if (Array.isArray(n)) {
    const r = n[0];
    e.addEventListener(t, n[0] = (a) => r.call(e, n[1], a));
  } else e.addEventListener(t, n, typeof n != "function" && n);
}
function $i(e, t, n = {}) {
  const s = Object.keys(t || {}), r = Object.keys(n);
  let a, i;
  for (a = 0, i = r.length; a < i; a++) {
    const o = r[a];
    !o || o === "undefined" || t[o] || (ls(e, o, !1), delete n[o]);
  }
  for (a = 0, i = s.length; a < i; a++) {
    const o = s[a], c = !!t[o];
    !o || o === "undefined" || n[o] === c || !c || (ls(e, o, !0), n[o] = c);
  }
  return n;
}
function ji(e, t, n) {
  if (!t) return n ? _n(e, "style") : t;
  const s = e.style;
  if (typeof t == "string") return s.cssText = t;
  typeof n == "string" && (s.cssText = n = void 0), n || (n = {}), t || (t = {});
  let r, a;
  for (a in n)
    t[a] == null && s.removeProperty(a), delete n[a];
  for (a in t)
    r = t[a], r !== n[a] && (s.setProperty(a, r), n[a] = r);
  return n;
}
function Qi(e, t = {}, n, s) {
  const r = {};
  return s || xe(() => r.children = mt(e, t.children, r.children)), xe(() => typeof t.ref == "function" && zi(t.ref, e)), xe(() => Wi(e, t, n, !0, r, !0)), r;
}
function zi(e, t, n) {
  return ee(() => e(t, n));
}
function vn(e, t, n, s) {
  if (n !== void 0 && !s && (s = []), typeof t != "function") return mt(e, t, s, n);
  xe((r) => mt(e, t(), r, n), s);
}
function Wi(e, t, n, s, r = {}, a = !1) {
  t || (t = {});
  for (const i in r)
    if (!(i in t)) {
      if (i === "children") continue;
      r[i] = cs(e, i, null, r[i], n, a, t);
    }
  for (const i in t) {
    if (i === "children")
      continue;
    const o = t[i];
    r[i] = cs(e, i, o, r[i], n, a, t);
  }
}
function Yi(e) {
  let t, n;
  return !Me() || !(t = w.registry.get(n = Zi())) ? e() : (w.completed && w.completed.add(t), w.registry.delete(n), t);
}
function Me(e) {
  return !!w.context && !w.done && (!e || e.isConnected);
}
function Ji(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (t, n) => n.toUpperCase());
}
function ls(e, t, n) {
  const s = t.trim().split(/\s+/);
  for (let r = 0, a = s.length; r < a; r++) e.classList.toggle(s[r], n);
}
function cs(e, t, n, s, r, a, i) {
  let o, c, u, f, d;
  if (t === "style") return ji(e, n, s);
  if (t === "classList") return $i(e, n, s);
  if (n === s) return s;
  if (t === "ref")
    a || n(e);
  else if (t.slice(0, 3) === "on:") {
    const g = t.slice(3);
    s && e.removeEventListener(g, s, typeof s != "function" && s), n && e.addEventListener(g, n, typeof n != "function" && n);
  } else if (t.slice(0, 10) === "oncapture:") {
    const g = t.slice(10);
    s && e.removeEventListener(g, s, !0), n && e.addEventListener(g, n, !0);
  } else if (t.slice(0, 2) === "on") {
    const g = t.slice(2).toLowerCase(), h = Mi.has(g);
    if (!h && s) {
      const y = Array.isArray(s) ? s[0] : s;
      e.removeEventListener(g, y);
    }
    (h || n) && (qi(e, g, n, h), h && Fi([g]));
  } else if (t.slice(0, 5) === "attr:")
    _n(e, t.slice(5), n);
  else if (t.slice(0, 5) === "bool:")
    Ki(e, t.slice(5), n);
  else if ((d = t.slice(0, 5) === "prop:") || (u = ki.has(t)) || !r && ((f = Oi(t, e.tagName)) || (c = Gi.has(t))) || (o = e.nodeName.includes("-") || "is" in i)) {
    if (d)
      t = t.slice(5), c = !0;
    else if (Me(e)) return n;
    t === "class" || t === "className" ? Vi(e, n) : o && !c && !u ? e[Ji(t)] = n : e[f || t] = n;
  } else {
    const g = r && t.indexOf(":") > -1 && Bi[t.split(":")[0]];
    g ? Hi(e, g, t, n) : _n(e, xi[t] || t, n);
  }
  return n;
}
function Qs(e) {
  if (w.registry && w.events && w.events.find(([c, u]) => u === e))
    return;
  let t = e.target;
  const n = `$$${e.type}`, s = e.target, r = e.currentTarget, a = (c) => Object.defineProperty(e, "target", {
    configurable: !0,
    value: c
  }), i = () => {
    const c = t[n];
    if (c && !t.disabled) {
      const u = t[`${n}Data`];
      if (u !== void 0 ? c.call(t, u, e) : c.call(t, e), e.cancelBubble) return;
    }
    return t.host && typeof t.host != "string" && !t.host._$host && t.contains(e.target) && a(t.host), !0;
  }, o = () => {
    for (; i() && (t = t._$host || t.parentNode || t.host); ) ;
  };
  if (Object.defineProperty(e, "currentTarget", {
    configurable: !0,
    get() {
      return t || document;
    }
  }), w.registry && !w.done && (w.done = _$HY.done = !0), e.composedPath) {
    const c = e.composedPath();
    a(c[0]);
    for (let u = 0; u < c.length - 2 && (t = c[u], !!i()); u++) {
      if (t._$host) {
        t = t._$host, o();
        break;
      }
      if (t.parentNode === r)
        break;
    }
  } else o();
  a(s);
}
function mt(e, t, n, s, r) {
  const a = Me(e);
  if (a) {
    !n && (n = [...e.childNodes]);
    let c = [];
    for (let u = 0; u < n.length; u++) {
      const f = n[u];
      f.nodeType === 8 && f.data.slice(0, 2) === "!$" ? f.remove() : c.push(f);
    }
    n = c;
  }
  for (; typeof n == "function"; ) n = n();
  if (t === n) return n;
  const i = typeof t, o = s !== void 0;
  if (e = o && n[0] && n[0].parentNode || e, i === "string" || i === "number") {
    if (a || i === "number" && (t = t.toString(), t === n))
      return n;
    if (o) {
      let c = n[0];
      c && c.nodeType === 3 ? c.data !== t && (c.data = t) : c = document.createTextNode(t), n = Fe(e, n, s, c);
    } else
      n !== "" && typeof n == "string" ? n = e.firstChild.data = t : n = e.textContent = t;
  } else if (t == null || i === "boolean") {
    if (a) return n;
    n = Fe(e, n, s);
  } else {
    if (i === "function")
      return xe(() => {
        let c = t();
        for (; typeof c == "function"; ) c = c();
        n = mt(e, c, n, s);
      }), () => n;
    if (Array.isArray(t)) {
      const c = [], u = n && Array.isArray(n);
      if (Ln(c, t, n, r))
        return xe(() => n = mt(e, c, n, s, !0)), () => n;
      if (a) {
        if (!c.length) return n;
        if (s === void 0) return n = [...e.childNodes];
        let f = c[0];
        if (f.parentNode !== e) return n;
        const d = [f];
        for (; (f = f.nextSibling) !== s; ) d.push(f);
        return n = d;
      }
      if (c.length === 0) {
        if (n = Fe(e, n, s), o) return n;
      } else u ? n.length === 0 ? us(e, c, s) : Ui(e, n, c) : (n && Fe(e), us(e, c));
      n = c;
    } else if (t.nodeType) {
      if (a && t.parentNode) return n = o ? [t] : t;
      if (Array.isArray(n)) {
        if (o) return n = Fe(e, n, s, t);
        Fe(e, n, null, t);
      } else n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      n = t;
    }
  }
  return n;
}
function Ln(e, t, n, s) {
  let r = !1;
  for (let a = 0, i = t.length; a < i; a++) {
    let o = t[a], c = n && n[e.length], u;
    if (!(o == null || o === !0 || o === !1)) if ((u = typeof o) == "object" && o.nodeType)
      e.push(o);
    else if (Array.isArray(o))
      r = Ln(e, o, c) || r;
    else if (u === "function")
      if (s) {
        for (; typeof o == "function"; ) o = o();
        r = Ln(e, Array.isArray(o) ? o : [o], Array.isArray(c) ? c : [c]) || r;
      } else
        e.push(o), r = !0;
    else {
      const f = String(o);
      c && c.nodeType === 3 && c.data === f ? e.push(c) : e.push(document.createTextNode(f));
    }
  }
  return r;
}
function us(e, t, n = null) {
  for (let s = 0, r = t.length; s < r; s++) e.insertBefore(t[s], n);
}
function Fe(e, t, n, s) {
  if (n === void 0) return e.textContent = "";
  const r = s || document.createTextNode("");
  if (t.length) {
    let a = !1;
    for (let i = t.length - 1; i >= 0; i--) {
      const o = t[i];
      if (r !== o) {
        const c = o.parentNode === e;
        !a && !i ? c ? e.replaceChild(r, o) : e.insertBefore(r, n) : c && o.remove();
      } else a = !0;
    }
  } else e.insertBefore(r, n);
  return [r];
}
function Zi() {
  return w.getNextContextId();
}
var Xi = "http://www.w3.org/2000/svg";
function zs(e, t = !1) {
  return t ? document.createElementNS(Xi, e) : document.createElement(e);
}
function Du(e) {
  const {
    useShadow: t
  } = e, n = document.createTextNode(""), s = () => e.mount || document.body, r = os();
  let a, i = !!w.context;
  return Os(() => {
    i && (os().user = i = !1), a || (a = Ms(r, () => J(() => e.children)));
    const o = s();
    if (o instanceof HTMLHeadElement) {
      const [c, u] = H(!1), f = () => u(!0);
      ke((d) => vn(o, () => c() ? d() : a(), null)), ht(f);
    } else {
      const c = zs(e.isSVG ? "g" : "div", e.isSVG), u = t && c.attachShadow ? c.attachShadow({
        mode: "open"
      }) : c;
      Object.defineProperty(c, "_$host", {
        get() {
          return n.parentNode;
        },
        configurable: !0
      }), vn(u, a), o.appendChild(c), e.ref && e.ref(c), ht(() => o.removeChild(c));
    }
  }, void 0, {
    render: !i
  }), n;
}
function eo(e, t) {
  const n = J(e);
  return J(() => {
    const s = n();
    switch (typeof s) {
      case "function":
        return ee(() => s(t));
      case "string":
        const r = Ri.has(s), a = w.context ? Yi() : zs(s, r);
        return Qi(a, t, r), a;
    }
  });
}
function Ou(e) {
  const [, t] = Ni(e, ["component"]);
  return eo(() => e.component, t);
}
var to = class {
  constructor() {
    this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
  }
  set(e, t) {
    this.keyToValue.set(e, t), this.valueToKey.set(t, e);
  }
  getByKey(e) {
    return this.keyToValue.get(e);
  }
  getByValue(e) {
    return this.valueToKey.get(e);
  }
  clear() {
    this.keyToValue.clear(), this.valueToKey.clear();
  }
}, Ws = class {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new to();
  }
  register(e, t) {
    this.kv.getByValue(e) || (t || (t = this.generateIdentifier(e)), this.kv.set(t, e));
  }
  clear() {
    this.kv.clear();
  }
  getIdentifier(e) {
    return this.kv.getByValue(e);
  }
  getValue(e) {
    return this.kv.getByKey(e);
  }
}, no = class extends Ws {
  constructor() {
    super((e) => e.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
  }
  register(e, t) {
    typeof t == "object" ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t);
  }
  getAllowedProps(e) {
    return this.classToAllowedProps.get(e);
  }
};
function so(e) {
  if ("values" in Object)
    return Object.values(e);
  const t = [];
  for (const n in e)
    e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function ro(e, t) {
  const n = so(e);
  if ("find" in n)
    return n.find(t);
  const s = n;
  for (let r = 0; r < s.length; r++) {
    const a = s[r];
    if (t(a))
      return a;
  }
}
function at(e, t) {
  Object.entries(e).forEach(([n, s]) => t(s, n));
}
function Vt(e, t) {
  return e.indexOf(t) !== -1;
}
function ds(e, t) {
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    if (t(s))
      return s;
  }
}
var ao = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return ro(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
}, io = (e) => Object.prototype.toString.call(e).slice(8, -1), Ys = (e) => typeof e > "u", oo = (e) => e === null, pt = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, Nn = (e) => pt(e) && Object.keys(e).length === 0, ve = (e) => Array.isArray(e), lo = (e) => typeof e == "string", co = (e) => typeof e == "number" && !isNaN(e), uo = (e) => typeof e == "boolean", fo = (e) => e instanceof RegExp, yt = (e) => e instanceof Map, Et = (e) => e instanceof Set, Js = (e) => io(e) === "Symbol", ho = (e) => e instanceof Date && !isNaN(e.valueOf()), go = (e) => e instanceof Error, fs = (e) => typeof e == "number" && isNaN(e), mo = (e) => uo(e) || oo(e) || Ys(e) || co(e) || lo(e) || Js(e), po = (e) => typeof e == "bigint", yo = (e) => e === 1 / 0 || e === -1 / 0, Eo = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), Ao = (e) => e instanceof URL, Zs = (e) => e.replace(/\./g, "\\."), pn = (e) => e.map(String).map(Zs).join("."), dt = (e) => {
  const t = [];
  let n = "";
  for (let r = 0; r < e.length; r++) {
    let a = e.charAt(r);
    if (a === "\\" && e.charAt(r + 1) === ".") {
      n += ".", r++;
      continue;
    }
    if (a === ".") {
      t.push(n), n = "";
      continue;
    }
    n += a;
  }
  const s = n;
  return t.push(s), t;
};
function ye(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var Xs = [
  ye(Ys, "undefined", () => null, () => {
  }),
  ye(po, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : e),
  ye(ho, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  ye(go, "Error", (e, t) => {
    const n = {
      name: e.name,
      message: e.message
    };
    return t.allowedErrorProps.forEach((s) => {
      n[s] = e[s];
    }), n;
  }, (e, t) => {
    const n = new Error(e.message);
    return n.name = e.name, n.stack = e.stack, t.allowedErrorProps.forEach((s) => {
      n[s] = e[s];
    }), n;
  }),
  ye(fo, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  ye(
    Et,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  ye(yt, "map", (e) => [...e.entries()], (e) => new Map(e)),
  ye((e) => fs(e) || yo(e), "number", (e) => fs(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  ye((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  ye(Ao, "URL", (e) => e.toString(), (e) => new URL(e))
];
function an(e, t, n, s) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: s
  };
}
var er = an((e, t) => Js(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
  const s = n.symbolRegistry.getValue(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown symbol");
  return s;
}), So = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), tr = an(Eo, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = So[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function nr(e, t) {
  return e != null && e.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var sr = an(nr, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
  const n = t.classRegistry.getAllowedProps(e.constructor);
  if (!n)
    return { ...e };
  const s = {};
  return n.forEach((r) => {
    s[r] = e[r];
  }), s;
}, (e, t, n) => {
  const s = n.classRegistry.getValue(t[1]);
  if (!s)
    throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
  return Object.assign(Object.create(s.prototype), e);
}), rr = an((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const s = n.customTransformerRegistry.findByName(t[1]);
  if (!s)
    throw new Error("Trying to deserialize unknown custom value");
  return s.deserialize(e);
}), To = [sr, er, rr, tr], hs = (e, t) => {
  const n = ds(To, (r) => r.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const s = ds(Xs, (r) => r.isApplicable(e, t));
  if (s)
    return {
      value: s.transform(e, t),
      type: s.annotation
    };
}, ar = {};
Xs.forEach((e) => {
  ar[e.annotation] = e;
});
var Po = (e, t, n) => {
  if (ve(t))
    switch (t[0]) {
      case "symbol":
        return er.untransform(e, t, n);
      case "class":
        return sr.untransform(e, t, n);
      case "custom":
        return rr.untransform(e, t, n);
      case "typed-array":
        return tr.untransform(e, t, n);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    const s = ar[t];
    if (!s)
      throw new Error("Unknown transformation: " + t);
    return s.untransform(e, n);
  }
}, He = (e, t) => {
  if (t > e.size)
    throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function ir(e) {
  if (Vt(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (Vt(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (Vt(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var wo = (e, t) => {
  ir(t);
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (Et(e))
      e = He(e, +s);
    else if (yt(e)) {
      const r = +s, a = +t[++n] == 0 ? "key" : "value", i = He(e, r);
      switch (a) {
        case "key":
          e = i;
          break;
        case "value":
          e = e.get(i);
          break;
      }
    } else
      e = e[s];
  }
  return e;
}, In = (e, t, n) => {
  if (ir(t), t.length === 0)
    return n(e);
  let s = e;
  for (let a = 0; a < t.length - 1; a++) {
    const i = t[a];
    if (ve(s)) {
      const o = +i;
      s = s[o];
    } else if (pt(s))
      s = s[i];
    else if (Et(s)) {
      const o = +i;
      s = He(s, o);
    } else if (yt(s)) {
      if (a === t.length - 2)
        break;
      const c = +i, u = +t[++a] == 0 ? "key" : "value", f = He(s, c);
      switch (u) {
        case "key":
          s = f;
          break;
        case "value":
          s = s.get(f);
          break;
      }
    }
  }
  const r = t[t.length - 1];
  if (ve(s) ? s[+r] = n(s[+r]) : pt(s) && (s[r] = n(s[r])), Et(s)) {
    const a = He(s, +r), i = n(a);
    a !== i && (s.delete(a), s.add(i));
  }
  if (yt(s)) {
    const a = +t[t.length - 2], i = He(s, a);
    switch (+r == 0 ? "key" : "value") {
      case "key": {
        const c = n(i);
        s.set(c, s.get(i)), c !== i && s.delete(i);
        break;
      }
      case "value": {
        s.set(i, n(s.get(i)));
        break;
      }
    }
  }
  return e;
};
function Cn(e, t, n = []) {
  if (!e)
    return;
  if (!ve(e)) {
    at(e, (a, i) => Cn(a, t, [...n, ...dt(i)]));
    return;
  }
  const [s, r] = e;
  r && at(r, (a, i) => {
    Cn(a, t, [...n, ...dt(i)]);
  }), t(s, n);
}
function bo(e, t, n) {
  return Cn(t, (s, r) => {
    e = In(e, r, (a) => Po(a, s, n));
  }), e;
}
function _o(e, t) {
  function n(s, r) {
    const a = wo(e, dt(r));
    s.map(dt).forEach((i) => {
      e = In(e, i, () => a);
    });
  }
  if (ve(t)) {
    const [s, r] = t;
    s.forEach((a) => {
      e = In(e, dt(a), () => e);
    }), r && at(r, n);
  } else
    at(t, n);
  return e;
}
var vo = (e, t) => pt(e) || ve(e) || yt(e) || Et(e) || nr(e, t);
function Lo(e, t, n) {
  const s = n.get(e);
  s ? s.push(t) : n.set(e, [t]);
}
function No(e, t) {
  const n = {};
  let s;
  return e.forEach((r) => {
    if (r.length <= 1)
      return;
    t || (r = r.map((o) => o.map(String)).sort((o, c) => o.length - c.length));
    const [a, ...i] = r;
    a.length === 0 ? s = i.map(pn) : n[pn(a)] = i.map(pn);
  }), s ? Nn(n) ? [s] : [s, n] : Nn(n) ? void 0 : n;
}
var or = (e, t, n, s, r = [], a = [], i = /* @__PURE__ */ new Map()) => {
  const o = mo(e);
  if (!o) {
    Lo(e, r, t);
    const h = i.get(e);
    if (h)
      return s ? {
        transformedValue: null
      } : h;
  }
  if (!vo(e, n)) {
    const h = hs(e, n), y = h ? {
      transformedValue: h.value,
      annotations: [h.type]
    } : {
      transformedValue: e
    };
    return o || i.set(e, y), y;
  }
  if (Vt(a, e))
    return {
      transformedValue: null
    };
  const c = hs(e, n), u = (c == null ? void 0 : c.value) ?? e, f = ve(u) ? [] : {}, d = {};
  at(u, (h, y) => {
    if (y === "__proto__" || y === "constructor" || y === "prototype")
      throw new Error(`Detected property ${y}. This is a prototype pollution risk, please remove it from your object.`);
    const P = or(h, t, n, s, [...r, y], [...a, e], i);
    f[y] = P.transformedValue, ve(P.annotations) ? d[y] = P.annotations : pt(P.annotations) && at(P.annotations, (G, E) => {
      d[Zs(y) + "." + E] = G;
    });
  });
  const g = Nn(d) ? {
    transformedValue: f,
    annotations: c ? [c.type] : void 0
  } : {
    transformedValue: f,
    annotations: c ? [c.type, d] : d
  };
  return o || i.set(e, g), g;
};
function lr(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function gs(e) {
  return lr(e) === "Array";
}
function Io(e) {
  if (lr(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function Co(e, t, n, s, r) {
  const a = {}.propertyIsEnumerable.call(s, t) ? "enumerable" : "nonenumerable";
  a === "enumerable" && (e[t] = n), r && a === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Gn(e, t = {}) {
  if (gs(e))
    return e.map((r) => Gn(r, t));
  if (!Io(e))
    return e;
  const n = Object.getOwnPropertyNames(e), s = Object.getOwnPropertySymbols(e);
  return [...n, ...s].reduce((r, a) => {
    if (gs(t.props) && !t.props.includes(a))
      return r;
    const i = e[a], o = Gn(i, t);
    return Co(r, a, o, e, t.nonenumerable), r;
  }, {});
}
var R = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new no(), this.symbolRegistry = new Ws((t) => t.description ?? ""), this.customTransformerRegistry = new ao(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = or(e, t, this, this.dedupe), s = {
      json: n.transformedValue
    };
    n.annotations && (s.meta = {
      ...s.meta,
      values: n.annotations
    });
    const r = No(t, this.dedupe);
    return r && (s.meta = {
      ...s.meta,
      referentialEqualities: r
    }), s;
  }
  deserialize(e) {
    const { json: t, meta: n } = e;
    let s = Gn(t);
    return n != null && n.values && (s = bo(s, n.values, this)), n != null && n.referentialEqualities && (s = _o(s, n.referentialEqualities)), s;
  }
  stringify(e) {
    return JSON.stringify(this.serialize(e));
  }
  parse(e) {
    return this.deserialize(JSON.parse(e));
  }
  registerClass(e, t) {
    this.classRegistry.register(e, t);
  }
  registerSymbol(e, t) {
    this.symbolRegistry.register(e, t);
  }
  registerCustom(e, t) {
    this.customTransformerRegistry.register({
      name: t,
      ...e
    });
  }
  allowErrorProps(...e) {
    this.allowedErrorProps.push(...e);
  }
};
R.defaultInstance = new R();
R.serialize = R.defaultInstance.serialize.bind(R.defaultInstance);
R.deserialize = R.defaultInstance.deserialize.bind(R.defaultInstance);
R.stringify = R.defaultInstance.stringify.bind(R.defaultInstance);
R.parse = R.defaultInstance.parse.bind(R.defaultInstance);
R.registerClass = R.defaultInstance.registerClass.bind(R.defaultInstance);
R.registerSymbol = R.defaultInstance.registerSymbol.bind(R.defaultInstance);
R.registerCustom = R.defaultInstance.registerCustom.bind(R.defaultInstance);
R.allowErrorProps = R.defaultInstance.allowErrorProps.bind(R.defaultInstance);
var Go = R.serialize, Mu = R.stringify;
function Ru(e) {
  return e.state.fetchStatus === "fetching" ? "fetching" : e.getObserversCount() ? e.state.fetchStatus === "paused" ? "paused" : e.isStale() ? "stale" : "fresh" : "inactive";
}
function Bu(e, t) {
  return `${e}${t.charAt(0).toUpperCase() + t.slice(1)}`;
}
function Uu({
  queryState: e,
  observerCount: t,
  isStale: n
}) {
  return e.fetchStatus === "fetching" ? "blue" : t ? e.fetchStatus === "paused" ? "purple" : n ? "yellow" : "green" : "gray";
}
function Fu({
  status: e,
  isPaused: t
}) {
  return t ? "purple" : e === "error" ? "red" : e === "pending" ? "yellow" : e === "success" ? "green" : "gray";
}
function Hu(e) {
  return e === "fresh" ? "green" : e === "stale" ? "yellow" : e === "paused" ? "purple" : e === "inactive" ? "gray" : "blue";
}
var Ku = (e, t = !1) => {
  const {
    json: n
  } = Go(e);
  return JSON.stringify(n, null, t ? 2 : void 0);
}, Rt = (e) => e.state.fetchStatus !== "idle" ? 0 : e.getObserversCount() ? e.isStale() ? 2 : 1 : 3, ko = (e, t) => e.queryHash.localeCompare(t.queryHash), cr = (e, t) => e.state.dataUpdatedAt < t.state.dataUpdatedAt ? 1 : -1, xo = (e, t) => Rt(e) === Rt(t) ? cr(e, t) : Rt(e) > Rt(t) ? 1 : -1, Vu = {
  status: xo,
  "query hash": ko,
  "last updated": cr
}, Bt = (e) => e.state.isPaused ? 0 : e.state.status === "error" ? 2 : e.state.status === "pending" ? 1 : 3, ur = (e, t) => e.state.submittedAt < t.state.submittedAt ? 1 : -1, Do = (e, t) => Bt(e) === Bt(t) ? ur(e, t) : Bt(e) > Bt(t) ? 1 : -1, qu = {
  status: Do,
  "last updated": ur
}, $u = (e) => e * parseFloat(getComputedStyle(document.documentElement).fontSize), ju = () => {
  const [e, t] = H("dark");
  return yi(() => {
    const n = window.matchMedia("(prefers-color-scheme: dark)");
    t(n.matches ? "dark" : "light");
    const s = (r) => {
      t(r.matches ? "dark" : "light");
    };
    n.addEventListener("change", s), ht(() => n.removeEventListener("change", s));
  }), e;
}, Ut = (e, t, n) => {
  if (t.length === 0)
    return n;
  if (e instanceof Map) {
    const s = new Map(e);
    if (t.length === 1)
      return s.set(t[0], n), s;
    const [r, ...a] = t;
    return s.set(r, Ut(s.get(r), a, n)), s;
  }
  if (e instanceof Set) {
    const s = Ut(Array.from(e), t, n);
    return new Set(s);
  }
  if (Array.isArray(e)) {
    const s = [...e];
    if (t.length === 1)
      return s[t[0]] = n, s;
    const [r, ...a] = t;
    return s[r] = Ut(s[r], a, n), s;
  }
  if (e instanceof Object) {
    const s = {
      ...e
    };
    if (t.length === 1)
      return s[t[0]] = n, s;
    const [r, ...a] = t;
    return s[r] = Ut(s[r], a, n), s;
  }
  return e;
}, Ft = (e, t) => {
  if (e instanceof Map) {
    const n = new Map(e);
    if (t.length === 1)
      return n.delete(t[0]), n;
    const [s, ...r] = t;
    return n.set(s, Ft(n.get(s), r)), n;
  }
  if (e instanceof Set) {
    const n = Ft(Array.from(e), t);
    return new Set(n);
  }
  if (Array.isArray(e)) {
    const n = [...e];
    if (t.length === 1)
      return n.filter((a, i) => i.toString() !== t[0]);
    const [s, ...r] = t;
    return n[s] = Ft(n[s], r), n;
  }
  if (e instanceof Object) {
    const n = {
      ...e
    };
    if (t.length === 1)
      return delete n[t[0]], n;
    const [s, ...r] = t;
    return n[s] = Ft(n[s], r), n;
  }
  return e;
}, dr = (e, t) => {
  if (!e || document.querySelector("#_goober") || (t == null ? void 0 : t.querySelector("#_goober"))) return;
  const s = document.createElement("style"), r = document.createTextNode("");
  s.appendChild(r), s.id = "_goober", s.setAttribute("nonce", e), t ? t.appendChild(s) : document.head.appendChild(s);
}, Ke, St, Tt, Pt, Ce, wt, Ve, qe, $e, je, Qe, bt, ze, We, _t, Ps, Oo = (Ps = class {
  constructor(e) {
    C(this, Ke);
    C(this, St);
    C(this, Tt);
    C(this, Pt);
    C(this, Ce, !1);
    C(this, wt);
    C(this, Ve);
    C(this, qe);
    C(this, $e);
    C(this, je);
    C(this, Qe);
    C(this, bt);
    C(this, ze);
    C(this, We);
    C(this, _t);
    const {
      client: t,
      queryFlavor: n,
      version: s,
      onlineManager: r,
      buttonPosition: a,
      position: i,
      initialIsOpen: o,
      errorTypes: c,
      styleNonce: u,
      shadowDOMTarget: f,
      hideDisabledQueries: d,
      theme: g
    } = e;
    v(this, Ke, H(t)), v(this, Tt, n), v(this, Pt, s), v(this, St, r), v(this, wt, u), v(this, Ve, f), v(this, qe, H(a)), v(this, $e, H(i)), v(this, je, H(o)), v(this, Qe, H(c)), v(this, bt, H(d)), v(this, We, H(g));
  }
  setButtonPosition(e) {
    A(this, qe)[1](e);
  }
  setPosition(e) {
    A(this, $e)[1](e);
  }
  setInitialIsOpen(e) {
    A(this, je)[1](e);
  }
  setErrorTypes(e) {
    A(this, Qe)[1](e);
  }
  setClient(e) {
    A(this, Ke)[1](e);
  }
  setTheme(e) {
    A(this, We)[1](e);
  }
  mount(e) {
    if (A(this, Ce))
      throw new Error("Devtools is already mounted");
    const t = js(() => {
      const n = this, [s] = A(this, qe), [r] = A(this, $e), [a] = A(this, je), [i] = A(this, Qe), [o] = A(this, bt), [c] = A(this, Ke), [u] = A(this, We);
      let f;
      return A(this, ze) ? f = A(this, ze) : (f = qs(() => import("./WDYDFRGG-CgT6QZ7y.js")), v(this, ze, f)), dr(A(this, wt), A(this, Ve)), Ks(f, Vs({
        get queryFlavor() {
          return A(n, Tt);
        },
        get version() {
          return A(n, Pt);
        },
        get onlineManager() {
          return A(n, St);
        },
        get shadowDOMTarget() {
          return A(n, Ve);
        }
      }, {
        get client() {
          return c();
        },
        get buttonPosition() {
          return s();
        },
        get position() {
          return r();
        },
        get initialIsOpen() {
          return a();
        },
        get errorTypes() {
          return i();
        },
        get hideDisabledQueries() {
          return o();
        },
        get theme() {
          return u();
        }
      }));
    }, e);
    v(this, Ce, !0), v(this, _t, t);
  }
  unmount() {
    var e;
    if (!A(this, Ce))
      throw new Error("Devtools is not mounted");
    (e = A(this, _t)) == null || e.call(this), v(this, Ce, !1);
  }
}, Ke = new WeakMap(), St = new WeakMap(), Tt = new WeakMap(), Pt = new WeakMap(), Ce = new WeakMap(), wt = new WeakMap(), Ve = new WeakMap(), qe = new WeakMap(), $e = new WeakMap(), je = new WeakMap(), Qe = new WeakMap(), bt = new WeakMap(), ze = new WeakMap(), We = new WeakMap(), _t = new WeakMap(), Ps), Ye, vt, Lt, Nt, Ge, It, Je, Ze, Xe, et, tt, Ct, nt, st, rt, Gt, ws, Mo = (ws = class {
  constructor(e) {
    C(this, Ye);
    C(this, vt);
    C(this, Lt);
    C(this, Nt);
    C(this, Ge, !1);
    C(this, It);
    C(this, Je);
    C(this, Ze);
    C(this, Xe);
    C(this, et);
    C(this, tt);
    C(this, Ct);
    C(this, nt);
    C(this, st);
    C(this, rt);
    C(this, Gt);
    const {
      client: t,
      queryFlavor: n,
      version: s,
      onlineManager: r,
      buttonPosition: a,
      position: i,
      initialIsOpen: o,
      errorTypes: c,
      styleNonce: u,
      shadowDOMTarget: f,
      onClose: d,
      hideDisabledQueries: g,
      theme: h
    } = e;
    v(this, Ye, H(t)), v(this, Lt, n), v(this, Nt, s), v(this, vt, r), v(this, It, u), v(this, Je, f), v(this, Ze, H(a)), v(this, Xe, H(i)), v(this, et, H(o)), v(this, tt, H(c)), v(this, Ct, H(g)), v(this, nt, H(d)), v(this, rt, H(h));
  }
  setButtonPosition(e) {
    A(this, Ze)[1](e);
  }
  setPosition(e) {
    A(this, Xe)[1](e);
  }
  setInitialIsOpen(e) {
    A(this, et)[1](e);
  }
  setErrorTypes(e) {
    A(this, tt)[1](e);
  }
  setClient(e) {
    A(this, Ye)[1](e);
  }
  setOnClose(e) {
    A(this, nt)[1](() => e);
  }
  setTheme(e) {
    A(this, rt)[1](e);
  }
  mount(e) {
    if (A(this, Ge))
      throw new Error("Devtools is already mounted");
    const t = js(() => {
      const n = this, [s] = A(this, Ze), [r] = A(this, Xe), [a] = A(this, et), [i] = A(this, tt), [o] = A(this, Ct), [c] = A(this, Ye), [u] = A(this, nt), [f] = A(this, rt);
      let d;
      return A(this, st) ? d = A(this, st) : (d = qs(() => import("./2SSKDMRQ-DFoeKaIC.js")), v(this, st, d)), dr(A(this, It), A(this, Je)), Ks(d, Vs({
        get queryFlavor() {
          return A(n, Lt);
        },
        get version() {
          return A(n, Nt);
        },
        get onlineManager() {
          return A(n, vt);
        },
        get shadowDOMTarget() {
          return A(n, Je);
        }
      }, {
        get client() {
          return c();
        },
        get buttonPosition() {
          return s();
        },
        get position() {
          return r();
        },
        get initialIsOpen() {
          return a();
        },
        get errorTypes() {
          return i();
        },
        get hideDisabledQueries() {
          return o();
        },
        get onClose() {
          return u();
        },
        get theme() {
          return f();
        }
      }));
    }, e);
    v(this, Ge, !0), v(this, Gt, t);
  }
  unmount() {
    var e;
    if (!A(this, Ge))
      throw new Error("Devtools is not mounted");
    (e = A(this, Gt)) == null || e.call(this), v(this, Ge, !1);
  }
}, Ye = new WeakMap(), vt = new WeakMap(), Lt = new WeakMap(), Nt = new WeakMap(), Ge = new WeakMap(), It = new WeakMap(), Je = new WeakMap(), Ze = new WeakMap(), Xe = new WeakMap(), et = new WeakMap(), tt = new WeakMap(), Ct = new WeakMap(), nt = new WeakMap(), st = new WeakMap(), rt = new WeakMap(), Gt = new WeakMap(), ws);
function Ro(e) {
  const t = Z(e.client), n = W.useRef(null), {
    buttonPosition: s,
    position: r,
    initialIsOpen: a,
    errorTypes: i,
    styleNonce: o,
    shadowDOMTarget: c,
    hideDisabledQueries: u,
    theme: f
  } = e, [d] = W.useState(
    new Oo({
      client: t,
      queryFlavor: "React Query",
      version: "5",
      onlineManager: bs,
      buttonPosition: s,
      position: r,
      initialIsOpen: a,
      errorTypes: i,
      styleNonce: o,
      shadowDOMTarget: c,
      hideDisabledQueries: u,
      theme: f
    })
  );
  return W.useEffect(() => {
    d.setClient(t);
  }, [t, d]), W.useEffect(() => {
    s && d.setButtonPosition(s);
  }, [s, d]), W.useEffect(() => {
    r && d.setPosition(r);
  }, [r, d]), W.useEffect(() => {
    d.setInitialIsOpen(a || !1);
  }, [a, d]), W.useEffect(() => {
    d.setErrorTypes(i || []);
  }, [i, d]), W.useEffect(() => {
    d.setTheme(f);
  }, [f, d]), W.useEffect(() => (n.current && d.mount(n.current), () => {
    d.unmount();
  }), [d]), /* @__PURE__ */ l("div", { dir: "ltr", className: "tsqd-parent-container", ref: n });
}
function Bo(e) {
  const t = Z(e.client), n = W.useRef(null), {
    errorTypes: s,
    styleNonce: r,
    shadowDOMTarget: a,
    hideDisabledQueries: i,
    theme: o
  } = e, [c] = W.useState(
    new Mo({
      client: t,
      queryFlavor: "React Query",
      version: "5",
      onlineManager: bs,
      buttonPosition: "bottom-left",
      position: "bottom",
      initialIsOpen: !0,
      errorTypes: s,
      styleNonce: r,
      shadowDOMTarget: a,
      onClose: e.onClose,
      hideDisabledQueries: i,
      theme: o
    })
  );
  return W.useEffect(() => {
    c.setClient(t);
  }, [t, c]), W.useEffect(() => {
    c.setOnClose(e.onClose ?? (() => {
    }));
  }, [e.onClose, c]), W.useEffect(() => {
    c.setErrorTypes(s || []);
  }, [s, c]), W.useEffect(() => {
    c.setTheme(o);
  }, [o, c]), W.useEffect(() => (n.current && c.mount(n.current), () => {
    c.unmount();
  }), [c]), /* @__PURE__ */ l(
    "div",
    {
      style: { height: "500px", ...e.style },
      className: "tsqd-parent-container",
      ref: n
    }
  );
}
var ms = process.env.NODE_ENV !== "development" ? function() {
  return null;
} : Ro;
process.env.NODE_ENV;
const Uo = () => {
  const [e] = ya();
  return /* @__PURE__ */ m("div", { className: "flex w-12 cursor-not-allowed items-center justify-center gap-x-1 space-x-0 font-medium text-gray-400", children: [
    /* @__PURE__ */ l(si, { className: "h-3.5 w-3.5 flex-shrink-0" }),
    " ",
    /* @__PURE__ */ m("div", { className: "text-xs leading-3", children: [
      kr(e, 0),
      "%"
    ] })
  ] });
}, Fo = () => {
  const e = Tn("flags.darkMode", !1), t = Tn("flags.dataBinding", !0), [n, s] = me(Ea), { t: r } = ce();
  return /* @__PURE__ */ m("div", { className: "flex h-10 items-center justify-between px-2", children: [
    /* @__PURE__ */ l("div", { className: "flex h-full space-x-2", children: e ? /* @__PURE__ */ l(Aa, {}) : null }),
    /* @__PURE__ */ m("div", { className: "flex h-full items-center space-x-2", children: [
      /* @__PURE__ */ l(Sa, { canvas: !0, openDelay: 400, activeButtonClass: "bg-gray-200" }),
      /* @__PURE__ */ l(Uo, {}),
      /* @__PURE__ */ l(Ta, {})
    ] }),
    /* @__PURE__ */ m("div", { className: "flex h-full items-center", children: [
      /* @__PURE__ */ l(Pa, {}),
      t ? /* @__PURE__ */ m(en, { children: [
        /* @__PURE__ */ l(tn, { asChild: !0, children: /* @__PURE__ */ l(M, { size: "sm", variant: "ghost", className: "size-2 h-7 w-7 rounded-md p-1", children: /* @__PURE__ */ l(Ls, { className: "h-2 w-2" }) }) }),
        /* @__PURE__ */ l(nn, { className: "w-56 border-border text-xs", children: /* @__PURE__ */ m(Pe, { className: "flex items-center gap-2", onSelect: (o) => o.preventDefault(), children: [
          /* @__PURE__ */ l(ri, { className: "h-4 w-4 text-gray-500" }),
          /* @__PURE__ */ l("span", { className: "flex-1", children: r("Data Binding") }),
          /* @__PURE__ */ l(wa, { checked: n, onCheckedChange: () => s(!n) })
        ] }) })
      ] }) : null
    ] })
  ] });
}, Jt = Ae(null), Ho = Ae({}), Fn = () => me(Ho), he = (e, t) => {
  const [n] = Fn();
  return q(() => $(n, e, t), [n, e, t]);
}, I = () => he("apiUrl", "/chai/api"), Ko = () => he("realtimeAdapter", null);
function Se() {
  const [e, t] = N(
    new URLSearchParams(window.location.search)
  );
  return ae(() => {
    const n = () => {
      t(new URLSearchParams(window.location.search));
    };
    return window.addEventListener("popstate", n), () => {
      window.removeEventListener("popstate", n);
    };
  }, []), [e, t];
}
const p = {
  GET_GLOBAL_JSONLD_ITEMS: "GET_GLOBAL_JSONLD_ITEMS",
  GENERATE_SEO_FIELD: "GENERATE_SEO_FIELD",
  UPDATE_PAGE_METADATA: "UPDATE_PAGE_METADATA",
  GET_BLOCK_ASYNC_PROPS: "GET_BLOCK_ASYNC_PROPS",
  ASK_AI: "ASK_AI",
  GET_DRAFT_PAGE: "GET_DRAFT_PAGE",
  CREATE_PAGE: "CREATE_PAGE",
  UPDATE_PAGE: "UPDATE_PAGE",
  DELETE_PAGE: "DELETE_PAGE",
  DUPLICATE_PAGE: "DUPLICATE_PAGE",
  CHANGE_SLUG: "CHANGE_SLUG",
  TAKE_OFFLINE: "TAKE_OFFLINE",
  PUBLISH_PAGE: "PUBLISH_PAGE",
  PUBLISH_CHANGES: "PUBLISH_CHANGES",
  ADD_NEW_LANGUAGE: "ADD_NEW_LANGUAGE",
  EDIT_LANGUAGE: "EDIT_LANGUAGE",
  DELETE_LANGUAGE: "DELETE_LANGUAGE",
  GET_CHANGES: "GET_CHANGES",
  GET_SERVER_BLOCK: "GET_SERVER_BLOCK",
  GET_LANGUAGE_PAGES: "GET_LANGUAGE_PAGES",
  GET_PROJECT_PAGES: "GET_PROJECT_PAGES",
  GET_WEBSITE_PAGES: "GET_WEBSITE_PAGES",
  UPDATE_WEBSITE_FIELDS: "UPDATE_WEBSITE_FIELDS",
  GET_COLLECTIONS: "GET_COLLECTIONS",
  GET_PAGE_TYPES: "GET_PAGE_TYPES",
  SEARCH_PAGES: "SEARCH_PAGES",
  GET_WEBSITE_DRAFT_SETTINGS: "GET_WEBSITE_DRAFT_SETTINGS",
  AI_CONTEXT: "AI_CONTEXT",
  GET_WEBSITE_DATA: "GET_WEBSITE_DATA",
  GET_CHAI_USER: "GET_CHAI_USER",
  CHANGE_PASSWORD: "CHANGE_PASSWORD",
  GET_SEO_FIELDS: "GET_SEO_FIELDS",
  GET_BUILDER_PAGE_DATA: "GET_BUILDER_PAGE_DATA",
  GET_PAGE_ALL_DATA: "GET_PAGE_ALL_DATA",
  GET_PAGE_REVISIONS: "GET_PAGE_REVISIONS",
  DELETE_PAGE_REVISION: "DELETE_PAGE_REVISION",
  RESTORE_PAGE_REVISION: "RESTORE_PAGE_REVISION",
  GET_REVISION_DATA: "GET_REVISION_DATA",
  GET_PAGE_DATA: "GET_PAGE_DATA",
  GET_COMPARE_DATA: "GET_COMPARE_DATA",
  UPSERT_LIBRARY_ITEM: "UPSERT_LIBRARY_ITEM",
  GET_LIBRARIES: "GET_LIBRARIES",
  GET_LIBRARY_ITEM: "GET_LIBRARY_ITEM",
  GET_LIBRARY_ITEMS: "GET_LIBRARY_ITEMS",
  DELETE_LIBRARY_ITEM: "DELETE_LIBRARY_ITEM",
  MARK_AS_TEMPLATE: "MARK_AS_TEMPLATE",
  UNMARK_AS_TEMPLATE: "UNMARK_AS_TEMPLATE",
  GET_TEMPLATES_BY_TYPE: "GET_TEMPLATES_BY_TYPE",
  GET_DYNAMIC_PAGES: "GET_DYNAMIC_PAGES",
  GET_APP_SHARED_JSONLD: "GET_APP_SHARED_JSONLD",
  UPDATE_APP_SHARED_JSONLD: "UPDATE_APP_SHARED_JSONLD",
  ADD_GLOBAL_SCHEMA: "ADD_GLOBAL_SCHEMA",
  UPDATE_GLOBAL_SCHEMA: "UPDATE_GLOBAL_SCHEMA",
  DELETE_GLOBAL_SCHEMA: "DELETE_GLOBAL_SCHEMA",
  TOGGLE_PAGE_GLOBAL_SCHEMA: "TOGGLE_PAGE_GLOBAL_SCHEMA",
  APPLY_SCHEMA_TO_ALL_PAGES: "APPLY_SCHEMA_TO_ALL_PAGES",
  UI_LIBRARIES: "UI_LIBRARIES",
  REMOVE_SCHEMA_FROM_ALL_PAGES: "REMOVE_SCHEMA_FROM_ALL_PAGES",
  // DAM Actions
  UPLOAD_ASSET: "UPLOAD_ASSET",
  DELETE_ASSET: "DELETE_ASSET",
  UPDATE_ASSET: "UPDATE_ASSET",
  GET_ASSETS: "GET_ASSETS",
  GET_ASSET: "GET_ASSET"
}, fr = async (e, t, n = {}) => await fetch(e, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    ...n
  },
  body: JSON.stringify(t)
}), Vo = () => {
  const e = k(), t = I();
  return j(
    async ({
      body: n,
      headers: s = {},
      url: r = t,
      streamResponse: a = !1
    }) => e(r, n, s, a),
    [e, t]
  );
}, k = () => {
  const e = he("onLogout", Xt), t = he("getAccessToken"), n = I();
  return j(
    async (s = n, r, a = {}, i = !1) => {
      const o = await t();
      try {
        const c = $(r, "action", "").toLowerCase(), u = await fr(s + (c ? `?action=${c}` : ""), r, {
          ...a,
          Authorization: `Bearer ${o}`
        });
        if (i)
          return u;
        if (u.status === 401)
          return console.log("401 Response", u), await e("SESSION_EXPIRED"), null;
        if (!u.ok) {
          const f = await u.json();
          throw console.error(`API Error (${u.status}):`, f), {
            status: u.status,
            statusText: u.statusText,
            ...f,
            message: f.error || f.message || `Server error: ${u.status}`
          };
        }
        return await u.json();
      } catch (c) {
        throw console.error("API request failed:", r, c), c;
      }
    },
    [e, t]
  );
}, qo = Ae(null), hr = () => me(qo), Hn = () => {
  const [e] = hr();
  return (e == null ? void 0 : e.slug) || "";
};
function $o(e, t) {
  const [n, s] = N(e);
  return ae(() => {
    const r = setTimeout(() => s(e), t);
    return () => clearTimeout(r);
  }, [e, t]), n;
}
const jo = ({ query: e, uuid: t }) => {
  const { selectedLang: n, fallbackLang: s } = pe(), { data: r } = ue(), a = r == null ? void 0 : r.pageType, i = I(), o = k(), { data: c, isFetching: u } = le({
    queryKey: [p.GET_DYNAMIC_PAGES, e, a, t],
    staleTime: 3600 * 1e3,
    placeholderData: [],
    queryFn: async () => await o(i, {
      action: p.GET_DYNAMIC_PAGES,
      data: { query: e, pageType: a, uuid: t }
    }) || [],
    enabled: !!a
  }), f = q(() => n === "" ? c.filter((d) => d.lang === "" || d.lang === s) : c.filter((d) => d.lang === n), [n, s, c]);
  return { allLangPages: c, data: f, isFetching: u };
}, Qo = () => {
  const { selectedLang: e, fallbackLang: t } = pe(), [n, s] = hr(), [r, a] = N(""), i = $o(r, 500), { allLangPages: o, data: c, isFetching: u } = jo({ query: i }), f = j((h) => s(h), [s]), d = j((h) => a(h), [a]), g = j(() => {
    if (!n) return;
    const h = !(n != null && n.primaryPage), y = e.length === 0, P = h ? n == null ? void 0 : n.id : n == null ? void 0 : n.primaryPage, E = o.filter(
      (S) => (S == null ? void 0 : S.primaryPage) === P || S.id === P
    ).find((S) => y ? S.lang === e || S.lang === t : S.lang === e);
    s(E || n);
  }, [n, e, o, s, t]);
  return {
    isFetching: u,
    dynamicPage: n,
    searchQuery: r,
    selectedLang: e,
    dynamicPages: c,
    allLangPages: o,
    updateDynamicPage: f,
    updateSearchQuery: d,
    onChangeLanguage: g
  };
}, xt = () => {
  const e = I(), t = k();
  return le({
    queryKey: [p.GET_WEBSITE_DRAFT_SETTINGS],
    staleTime: 300 * 1e3,
    placeholderData: {
      languages: [],
      theme: ai,
      appKey: "",
      fallbackLang: "",
      settings: {},
      designTokens: {}
    },
    queryFn: async () => t(e, {
      action: p.GET_WEBSITE_DRAFT_SETTINGS,
      data: { draft: !0 }
    })
  });
}, Kn = () => {
  const { data: e } = xt();
  return q(() => (e == null ? void 0 : e.fallbackLang) || "en", [e]);
}, Re = () => {
  const e = k(), t = I();
  return le({
    queryKey: [p.GET_WEBSITE_PAGES],
    staleTime: 1e3 * 60 * 5,
    queryFn: async () => e(t, { action: p.GET_WEBSITE_PAGES }) || [],
    placeholderData: (n) => n || []
  });
}, zo = (e) => {
  const t = k(), n = I(), s = Kn();
  return le({
    queryKey: [p.GET_WEBSITE_PAGES, e, s],
    staleTime: 1e3 * 60 * 5,
    enabled: !!e,
    queryFn: async () => {
      if (s === e) return {};
      const r = await t(n, { action: p.GET_WEBSITE_PAGES, data: { lang: e } }) || [];
      return xr(
        An(r, (a) => ({ ...a, lang: e })),
        "primaryPage"
      );
    },
    placeholderData: (r) => r || {}
  });
}, Wo = Ae({ lastSaved: void 0 }), Yo = () => me(Wo), ue = () => {
  const [e] = Se(), t = e.get("page"), { data: n, isFetching: s } = Re();
  return { data: q(() => ({ ...oe(n, { id: t }) || {} }), [n, t]), isFetching: s };
}, _e = () => {
  const [e] = Se(), t = e.get("lang") ?? "", n = e.get("page"), { data: s, isFetching: r } = zo(t), { data: a } = Re();
  return { data: q(
    () => oe([...Dr(s), ...a], t == "" ? { id: n } : { lang: t, primaryPage: n }) || {},
    [s, a, t, n]
  ), isFetching: r };
};
Ae({});
const Jo = () => {
  const { data: e } = _e(), t = Hn(), n = he("getLiveUrl", Xt), s = e == null ? void 0 : e.slug, r = n(s || "/");
  return t ? r + t : r;
}, on = (e) => {
  const t = I(), [n] = Se(), s = e ?? n.get("page"), r = k(), { languages: a } = pe();
  return le({
    queryKey: [p.GET_LANGUAGE_PAGES, s],
    staleTime: 1 / 0,
    gcTime: 0,
    placeholderData: [],
    queryFn: async () => {
      if (!s) return null;
      const i = await r(t, {
        action: p.GET_LANGUAGE_PAGES,
        data: { id: s }
      });
      return Or(Mr(i, "primaryPage"));
    },
    enabled: !!s && !!(a != null && a.length)
  });
}, Ie = {
  ...ba,
  //pages
  ADD_PAGE: "add_page",
  EDIT_PAGE: "edit_page",
  DELETE_PAGE: "delete_page",
  CHANGE_PAGE_TYPE: "change_page_type",
  UNPUBLISH_PAGE: "unpublish_page",
  //SEO
  EDIT_SEO: "edit_seo"
}, Be = () => {
  const e = I(), t = k();
  return le({
    queryKey: [p.GET_PAGE_TYPES],
    staleTime: 1 / 0,
    placeholderData: [],
    queryFn: async () => t(e, { action: p.GET_PAGE_TYPES })
  });
}, Zo = (e) => {
  const { data: t } = Be();
  return q(() => t == null ? void 0 : t.find((n) => n.key === e), [t, e]);
}, Xo = () => {
  const { data: e } = Re();
  return { searchPages: j(
    async (n, s) => {
      if (!e || !s) return [];
      if (Array.isArray(s))
        return e.filter((a) => s.includes(a.id));
      const r = s.toLowerCase();
      return e.filter(
        (a) => a.slug && !a.dynamic && (a.id === s || (a.name || "").toLowerCase().includes(r) || (a.slug || "").toLowerCase().includes(r))
      );
    },
    [e]
  ) };
}, el = ({
  page: e,
  setDuplicatePage: t,
  setAddEditPage: n,
  setUnpublishPage: s,
  setDeletePage: r,
  children: a,
  isLanguagePage: i
}) => {
  const { t: o } = ce(), { hasPermission: c } = _a(), { data: u } = Be(), f = q(() => oe(u, { key: e.pageType }), [u, e.pageType]);
  return !c(Ie.EDIT_PAGE) && !c(Ie.DELETE_PAGE) && !c(Ie.UNPUBLISH_PAGE) || !e ? null : /* @__PURE__ */ m(en, { children: [
    /* @__PURE__ */ l(tn, { asChild: !0, onClick: (g) => g.stopPropagation(), children: a }),
    /* @__PURE__ */ m(nn, { align: "center", className: "text-sm", children: [
      c(Ie.ADD_PAGE) && !i && /* @__PURE__ */ m(
        Pe,
        {
          className: "flex cursor-pointer items-center gap-2",
          onClick: (g) => {
            g.stopPropagation(), t(e);
          },
          children: [
            /* @__PURE__ */ l(qr, { className: "size-3" }),
            "Duplicate page"
          ]
        }
      ),
      c(Ie.EDIT_PAGE) && /* @__PURE__ */ m(
        Pe,
        {
          className: "flex cursor-pointer items-center gap-2",
          onClick: (g) => {
            g.stopPropagation(), n({
              ...e,
              global: !(f != null && f.hasSlug)
            });
          },
          children: [
            /* @__PURE__ */ l(Ns, { className: "size-3" }),
            "Edit"
          ]
        }
      ),
      (e == null ? void 0 : e.online) && c(Ie.UNPUBLISH_PAGE) && /* @__PURE__ */ m(
        Pe,
        {
          className: "flex cursor-pointer items-center gap-2",
          onClick: (g) => {
            g.stopPropagation(), s(e);
          },
          children: [
            /* @__PURE__ */ l($r, { className: "size-3" }),
            o("Unpublish")
          ]
        }
      ),
      c(Ie.DELETE_PAGE) && /* @__PURE__ */ m(
        Pe,
        {
          className: "flex cursor-pointer items-center gap-2",
          onClick: (g) => {
            g.stopPropagation(), r(e);
          },
          children: [
            /* @__PURE__ */ l(jr, { className: "size-3" }),
            o("Delete")
          ]
        }
      )
    ] })
  ] });
}, tl = (e, t, n) => ((e.includes("THEME") || (t == null ? void 0 : t.theme) !== void 0) && (e.push("THEME"), n && (t != null && t.theme) && n(t.theme)), e), nl = (e, t, n) => ((e.includes("DESIGN_TOKENS") || (t == null ? void 0 : t.designTokens) !== void 0) && (e.push("DESIGN_TOKENS"), n && t.designTokens && n(t.designTokens)), e), sl = (e, t, n, s) => {
  let r = (e == null ? void 0 : e.appChanges) || [];
  return r = tl(r, t, n), r = nl(r, t, s), e ? {
    ...e,
    ...t,
    appChanges: r
  } : t;
}, rl = ({ queryClient: e, queryKey: t, data: n, setTheme: s, setDesignTokens: r }) => {
  e.setQueryData(
    t,
    (a) => sl(a, n, s, r)
  );
}, al = (e, t, n, s, r) => e.id === t ? {
  ...e,
  designTokens: n,
  links: s,
  partialBlocks: r,
  changes: [{ type: "Page" }]
} : e, il = ({ queryClient: e, pageId: t, designTokens: n, linkPageIds: s, partialIds: r }) => {
  e.setQueryData([p.GET_WEBSITE_PAGES], (a) => {
    if (!a || !Array.isArray(a)) return a;
    const i = s.join(" | "), o = r.join(" | ");
    return a.map((c) => al(c, t, n, i, o));
  });
}, ol = (e, t, n, s, r, a, i) => {
  t.settings && (rl({
    queryClient: e,
    queryKey: [p.GET_WEBSITE_DRAFT_SETTINGS],
    data: t.settings,
    setTheme: a,
    setDesignTokens: i
  }), !n && s && (t.settings.theme !== void 0 && B.success(r("Theme Updated"), {
    description: r("{{userName}} updated the theme", { userName: s }),
    position: "bottom-left"
  }), t.settings.designTokens !== void 0 && B.success(r("Design Tokens Updated"), {
    description: r("{{userName}} updated the design tokens", { userName: s }),
    position: "bottom-left"
  })));
}, ll = (e, t) => {
  t.pageId && t.designTokens && t.linkPageIds && t.partialIds && il({
    queryClient: e,
    pageId: t.pageId,
    designTokens: t.designTokens,
    linkPageIds: t.linkPageIds,
    partialIds: t.partialIds
  });
}, ps = (e, t) => t.includes(e.id) ? {
  ...e,
  changes: [],
  online: !0
} : e, cl = (e, t) => {
  if (!e) return e;
  const s = (e.appChanges || []).filter((r) => !t.includes(r));
  return {
    ...e,
    appChanges: s
  };
}, ul = ({ queryClient: e, ids: t }) => {
  e.setQueryData([p.GET_WEBSITE_PAGES], (n) => !n || !Array.isArray(n) ? n : n.map((s) => ps(s, t))), e.setQueryData([p.GET_LANGUAGE_PAGES], (n) => !n || !Array.isArray(n) ? n : n.map((s) => ps(s, t))), (t.includes("THEME") || t.includes("DESIGN_TOKENS")) && e.setQueryData(
    [p.GET_WEBSITE_DRAFT_SETTINGS],
    (n) => cl(n, t)
  );
}, ys = (e, t) => e.id === t ? {
  ...e,
  online: !1
} : e, dl = ({ queryClient: e, pageId: t, primaryPage: n }) => {
  n ? e.setQueryData([p.GET_LANGUAGE_PAGES, n], (s) => !s || !Array.isArray(s) ? s : s.map((r) => ys(r, t))) : e.setQueryData([p.GET_WEBSITE_PAGES], (s) => !s || !Array.isArray(s) ? s : s.map((r) => ys(r, t)));
}, fl = (e, t, n, s) => {
  e && t(n, { data: s });
}, hl = (e, t, n, s, r) => {
  const { type: a, data: i, sync: o = !1, userName: c } = e;
  switch (a) {
    case "UPDATE_WEBSITE_DATA":
      ol(t, i, o, c, r, n, s);
      break;
    case "UPDATE_PAGE_DATA":
      ll(t, i);
      break;
    case "PUBLISH_CHANGES":
      i.ids && ul({ queryClient: t, ids: i.ids });
      break;
    case "UNPUBLISH_PAGE":
      i.pageId && dl({ queryClient: t, pageId: i.pageId, primaryPage: i.primaryPage });
      break;
    default:
      console.log(r("Unknown sync type"), a);
  }
  return o;
}, ln = () => {
  const e = Z(), t = bl(), [n, s] = me(va), [, r] = me(La), { t: a } = ce(), i = j(
    (c) => {
      r(c);
    },
    [r]
  );
  return {
    handleQuerySync: j(
      (c) => {
        const u = hl(c, e, s, i, a);
        fl(u, t, c.type, c.data);
      },
      [e, t, s, i, a]
    )
  };
}, Vn = () => {
  const e = he("currentUser"), t = he("onLogout");
  return {
    isLoggedIn: !!e,
    user: e,
    logout: t
  };
}, De = {
  LOCKED: "LOCKED",
  EDITING: "EDITING",
  CHECKING: "CHECKING",
  ACTIVE_IN_ANOTHER_TAB: "ACTIVE_IN_ANOTHER_TAB"
}, gl = Ae({}), ml = Ae(null), pl = Ae(De.CHECKING), yl = Ae({}), El = () => {
  const { user: e } = Vn();
  return e == null ? void 0 : e.id;
}, gr = () => {
  const { data: e } = ue();
  return e == null ? void 0 : e.id;
}, Al = crypto.randomUUID();
let yn = null;
const Sl = () => {
  const [e, t] = me(gl);
  return { pageToUser: e, setPageToUser: t };
}, Le = () => {
  const [e, t] = me(pl), n = [De.LOCKED, De.ACTIVE_IN_ANOTHER_TAB].includes(e), s = [De.EDITING].includes(e);
  return { pageStatus: e, setPageStatus: t, isLocked: n, isEditing: s };
}, Tl = () => {
  const [e, t] = me(yl);
  return { pageLockMeta: e, setPageLockMeta: t };
}, Pl = () => {
  const e = gr(), { pageToUser: t } = Sl();
  return q(() => t[e], [t, e]);
}, wl = () => {
  const e = Ko(), { setPageStatus: t } = Le(), [n] = me(ml);
  return ae(() => {
    if (clearTimeout(yn), !e)
      return yn = setTimeout(() => {
        e || t(De.EDITING);
      }, 500), () => clearTimeout(yn);
  }, [e, t]), n;
}, bl = () => {
  const e = El(), t = gr(), n = wl(), s = Pl(), { setPageLockMeta: r } = Tl(), { user: a } = Vn(), i = Zt(t);
  return ae(() => {
    i.current = t;
  }, [t]), j(
    async (o, c) => {
      if (!n) return;
      const u = c || {};
      u.userId = e, u.userName = (a == null ? void 0 : a.name) || (a == null ? void 0 : a.email) || "Unknown user", u.pageId = i.current, u.senderClientId = Al, u.receiverClientId = (c == null ? void 0 : c.requestingClientId) || (s == null ? void 0 : s.clientId), await n.send(o, u), r({});
    },
    [n, e, s, r, a]
  );
}, _l = Q(() => import("./add-new-page-BFoyYBvq.js")), vl = Q(() => import("./delete-page-C7Uhdl1H.js")), Ll = Q(() => import("./duplicate-page-Ox2oG7do.js")), Nl = Q(() => import("./mark-as-template-2vTKQ1gu.js")), Il = Q(() => import("./unmark-as-template-DzEjNIx1.js")), Cl = Q(() => import("./unpublish-page-DxktWd2g.js")), Gl = () => {
  const [e, t] = N(null), [n, s] = N(null), [r, a] = N(null), [i, o] = N(null), [c, u] = N(null), [f, d] = N(null), { data: g, isFetching: h } = _e(), { selectedLang: y, fallbackLang: P } = pe(), { data: G } = on(), E = G == null ? void 0 : G.find((x) => x.lang === y), { isLocked: S } = Le(), T = !(g != null && g.slug), D = kn(Jt);
  if (!g) return null;
  const U = (x) => {
    y.length > 0 && y !== P ? D({
      edit: !0,
      id: x == null ? void 0 : x.id,
      primaryPage: x == null ? void 0 : x.primaryPage
    }) : d(x);
  };
  return /* @__PURE__ */ m(de, { children: [
    /* @__PURE__ */ m("div", { className: "flex items-center justify-between rounded px-[2px] transition-colors duration-200", children: [
      /* @__PURE__ */ l("p", { className: "flex h-7 max-w-[200px] items-center truncate rounded px-1 text-xs font-medium", children: h ? /* @__PURE__ */ l(Oe, { className: "h-4 w-4 animate-spin text-slate-400" }) : /* @__PURE__ */ m("span", { className: "flex items-end overflow-hidden text-ellipsis whitespace-nowrap rounded-sm text-xs font-medium", children: [
        T ? /* @__PURE__ */ l(Qr, { className: "mr-1 h-4 w-4" }) : /* @__PURE__ */ l(zr, { className: "mr-1 h-4 w-4" }),
        $(E || g, "name") ?? ""
      ] }) }),
      S ? /* @__PURE__ */ l(
        M,
        {
          variant: "ghost",
          size: "icon",
          className: "h-7 w-7 cursor-not-allowed rounded opacity-50 hover:bg-transparent",
          children: /* @__PURE__ */ l(Wr, { className: "h-4 w-4" })
        }
      ) : /* @__PURE__ */ l(
        el,
        {
          page: g,
          setDuplicatePage: (x) => u(x),
          setAddEditPage: (x) => U(x),
          setUnpublishPage: (x) => s(x),
          setDeletePage: (x) => t(x),
          isLanguagePage: y.length > 0 && y !== P,
          children: /* @__PURE__ */ l(M, { variant: "ghost", size: "icon", className: "h-7 w-7 rounded", children: /* @__PURE__ */ l(Ls, { className: "h-4 w-4" }) })
        }
      )
    ] }),
    f && /* @__PURE__ */ l(X, { children: /* @__PURE__ */ l(
      _l,
      {
        closePanel: () => d(null),
        editPage: () => {
        },
        addEditPage: f,
        setAddEditPage: d
      }
    ) }),
    e && /* @__PURE__ */ l(X, { children: /* @__PURE__ */ l(vl, { page: e, onClose: () => t(null) }) }),
    n && /* @__PURE__ */ l(X, { children: /* @__PURE__ */ l(Cl, { page: n, onClose: () => s(null) }) }),
    r && /* @__PURE__ */ l(X, { children: /* @__PURE__ */ l(Nl, { page: r, onClose: () => a(null) }) }),
    i && /* @__PURE__ */ l(X, { children: /* @__PURE__ */ l(Il, { page: i, onClose: () => o(null) }) }),
    c && /* @__PURE__ */ l(X, { children: /* @__PURE__ */ l(
      Ll,
      {
        page: c,
        onClose: () => u(null),
        closePanel: () => d(null)
      }
    ) })
  ] });
}, At = ({ children: e, className: t = "" }) => /* @__PURE__ */ l(
  "div",
  {
    className: qt(
      "fixed bottom-0 left-0 right-0 top-[50px] z-[20] flex w-screen flex-col items-center justify-center bg-black/40 transition-all",
      t
    ),
    children: e
  }
), kl = ({ hasDynamicPage: e }) => /* @__PURE__ */ l(At, { children: /* @__PURE__ */ m("div", { className: "flex min-w-[300px] max-w-[400px] flex-col items-center justify-center rounded-lg border bg-white p-4 shadow-lg", children: [
  /* @__PURE__ */ l("h1", { className: "text-lg font-medium", children: e ? "Select a page" : "No pages found" }),
  /* @__PURE__ */ l("p", { className: "pt-2 text-center text-sm font-light text-gray-600", children: e ? "Please select a page from the list in the top header. This will enable you to edit the page." : "Please add a new page" })
] }) }), Ht = {
  ab: "Abkhazian",
  aa: "Afar",
  af: "Afrikaans",
  ak: "Akan",
  sq: "Albanian",
  am: "Amharic",
  ar: "Arabic",
  an: "Aragonese",
  hy: "Armenian",
  as: "Assamese",
  av: "Avaric",
  ae: "Avestan",
  ay: "Aymara",
  az: "Azerbaijani",
  bm: "Bambara",
  ba: "Bashkir",
  eu: "Basque",
  be: "Belarusian",
  bn: "Bengali",
  bh: "Bihari",
  bi: "Bislama",
  bs: "Bosnian",
  br: "Breton",
  bg: "Bulgarian",
  my: "Burmese",
  ca: "Catalan",
  ch: "Chamorro",
  ce: "Chechen",
  ny: "Chichewa",
  zh: "Chinese",
  "zh-Hans": "Chinese (Simplified)",
  "zh-Hant": "Chinese (Traditional)",
  cv: "Chuvash",
  kw: "Cornish",
  co: "Corsican",
  cr: "Cree",
  hr: "Croatian",
  cs: "Czech",
  da: "Danish",
  dv: "Maldivian",
  nl: "Dutch",
  dz: "Dzongkha",
  en: "English",
  eo: "Esperanto",
  et: "Estonian",
  ee: "Ewe",
  fo: "Faroese",
  fj: "Fijian",
  fi: "Finnish",
  fr: "French",
  ff: "Fula, Pular",
  gl: "Galician",
  gd: "Gaelic (Scottish)",
  gv: "Manx",
  ka: "Georgian",
  de: "German",
  el: "Greek",
  kl: "Kalaallisut",
  gn: "Guarani",
  gu: "Gujarati",
  ht: "Haitian Creole",
  ha: "Hausa",
  he: "Hebrew",
  hz: "Herero",
  hi: "Hindi",
  ho: "Hiri Motu",
  hu: "Hungarian",
  is: "Icelandic",
  io: "Ido",
  ig: "Igbo",
  id: "Indonesian",
  ia: "Interlingua",
  ie: "Interlingue",
  iu: "Inuktitut",
  ik: "Inupiak",
  ga: "Irish",
  it: "Italian",
  ja: "Japanese",
  jv: "Javanese",
  kn: "Kannada",
  kr: "Kanuri",
  ks: "Kashmiri",
  kk: "Kazakh",
  km: "Khmer",
  ki: "Kikuyu",
  rw: "Kinyarwanda",
  rn: "Kirundi",
  ky: "Kyrgyz",
  kv: "Komi",
  kg: "Kongo",
  ko: "Korean",
  ku: "Kurdish",
  kj: "Kwanyama",
  lo: "Lao",
  la: "Latin",
  lv: "Latvian",
  li: "Limburgish",
  ln: "Lingala",
  lt: "Lithuanian",
  lu: "Luga-Katanga",
  lg: "Luganda, Ganda",
  lb: "Luxembourgish",
  mk: "Macedonian",
  mg: "Malagasy",
  ms: "Malay",
  ml: "Malayalam",
  mt: "Maltese",
  mi: "Maori",
  mr: "Marathi",
  mh: "Marshallese",
  mo: "Moldavian",
  mn: "Mongolian",
  na: "Nauru",
  nv: "Navajo",
  ng: "Ndonga",
  nd: "Northern Ndebele",
  ne: "Nepali",
  no: "Norwegian",
  nb: "Norwegian bokmål",
  nn: "Norwegian nynorsk",
  ii: "Sichuan Yi",
  oc: "Occitan",
  oj: "Ojibwe",
  cu: "Old Church Slavonic",
  or: "Oriya",
  om: "Oromo",
  os: "Ossetian",
  pi: "Pāli",
  ps: "Pashto, Pushto",
  fa: "Persian (Farsi)",
  pl: "Polish",
  pt: "Portuguese",
  pa: "Punjabi (Eastern)",
  qu: "Quechua",
  rm: "Romansh",
  ro: "Romanian",
  ru: "Russian",
  se: "Sami",
  sm: "Samoan",
  sg: "Sango",
  sa: "Sanskrit",
  sr: "Serbian",
  sh: "Serbo-Croatian",
  st: "Sesotho",
  tn: "Setswana",
  sn: "Shona",
  sd: "Sindhi",
  si: "Sinhalese",
  ss: "Swati",
  sk: "Slovak",
  sl: "Slovenian",
  so: "Somali",
  nr: "Southern Ndebele",
  es: "Spanish",
  su: "Sundanese",
  sw: "Swahili (Kiswahili)",
  sv: "Swedish",
  tl: "Tagalog",
  ty: "Tahitian",
  tg: "Tajik",
  ta: "Tamil",
  tt: "Tatar",
  te: "Telugu",
  th: "Thai",
  bo: "Tibetan",
  ti: "Tigrinya",
  to: "Tonga",
  ts: "Tsonga",
  tr: "Turkish",
  tk: "Turkmen",
  tw: "Twi",
  ug: "Uyghur",
  uk: "Ukrainian",
  ur: "Urdu",
  uz: "Uzbek",
  ve: "Venda",
  vi: "Vietnamese",
  vo: "Volapük",
  wa: "Wallon",
  cy: "Welsh",
  wo: "Wolof",
  fy: "Western Frisian",
  xh: "Xhosa",
  yi: "Yiddish",
  yo: "Yoruba",
  za: "Zhuang, Chuang",
  zu: "Zulu"
};
function xl(e, t, n = !1) {
  const s = e.toString() ? `?${e.toString()}` : "/";
  n ? window.history.replaceState(null, "", s) : window.history.pushState({}, "", s), t(e), window.dispatchEvent(new PopStateEvent("popstate"));
}
const Dl = Q(() => import("./add-new-language-page-Dy5guM9R.js")), Ol = () => {
  const e = he("topLeftCorner", null);
  return e ? /* @__PURE__ */ l("div", { className: "max-h-9 w-full overflow-hidden pr-2", children: Nr.createElement(e, {}) }) : null;
}, Qu = ({
  showAdd: e = !0,
  goToDefaultLang: t = !1
}) => {
  const { fallbackLang: n, languages: s, selectedLang: r, setSelectedLang: a } = pe(), i = fe(r) ? n : r, [, o] = Se(), { isLocked: c } = Le(), { t: u } = ce();
  ae(() => {
    const E = new URLSearchParams(window.location.search), S = E.get("lang");
    S && (s.includes(S) ? a(S) : (E.delete("lang"), o(E), a("")));
  }, [s, o, a]);
  const f = kn(Jt), { data: d } = ue(), { data: g } = xt(), { data: h } = on(), y = q(() => {
    const E = ft(
      An($(g, "languages"), (S) => {
        const T = oe(h, { lang: S });
        return {
          key: S,
          value: $(Ht, S, S),
          isLangPageAdded: !!T
        };
      })
    ).filter(Boolean);
    return [
      {
        key: n,
        value: $(Ht, n),
        isLangPageAdded: !0
      },
      ...E
    ];
  }, [n, h, g]), P = (E) => {
    if (document.querySelector('[data-panel-id="seo"]')) {
      const T = new CustomEvent("seo-language-switch-check", {
        detail: {
          fromLang: i,
          toLang: E,
          switchHandler: () => G(E)
        }
      });
      window.dispatchEvent(T);
      return;
    }
    G(E);
  }, G = (E) => {
    a(E);
    const S = new URLSearchParams(window.location.search);
    E === n ? S.delete("lang") : S.set("lang", E), xl(S, o);
  };
  return fe(s) ? null : c ? /* @__PURE__ */ m(M, { variant: "ghost", size: "sm", className: "ml-px h-max cursor-not-allowed gap-2 py-1.5 opacity-50", children: [
    /* @__PURE__ */ l(Jn, { className: "h-4 w-4" }),
    $(Ht, i, i),
    /* @__PURE__ */ l(Sn, { className: "h-4 w-4" })
  ] }) : t ? /* @__PURE__ */ l(M, { onClick: () => G(n), variant: "link", size: "sm", children: u("Switch to default language") }) : /* @__PURE__ */ l(de, { children: /* @__PURE__ */ m(en, { children: [
    /* @__PURE__ */ l(tn, { asChild: !0, className: "focus:outline-none", children: /* @__PURE__ */ m(M, { disabled: !!c, variant: "outline", size: "sm", className: "ml-px h-max gap-2 py-1.5", children: [
      /* @__PURE__ */ l(Jn, { className: "h-4 w-4" }),
      $(Ht, i, i),
      /* @__PURE__ */ l(Sn, { className: "h-4 w-4" })
    ] }) }),
    /* @__PURE__ */ m(nn, { className: "space-y-1 border-border", children: [
      An(
        y.filter((E) => E.isLangPageAdded),
        (E) => /* @__PURE__ */ m(
          Pe,
          {
            className: qt(
              "flex cursor-pointer items-center justify-between text-xs font-medium text-gray-800",
              E.key === i && "!bg-gray-200 text-gray-700"
            ),
            onClick: () => P(E.key),
            children: [
              /* @__PURE__ */ l("div", { className: "text-slate-600", children: E.value }),
              E.key === n && /* @__PURE__ */ m("small", { className: "flex items-center gap-x-1 text-[9px] leading-none text-orange-500", children: [
                /* @__PURE__ */ l(Yr, { fill: "orange", className: "h-2 w-2" }),
                "Primary"
              ] })
            ]
          },
          E.value
        )
      ),
      e && !fe(y.filter((E) => !E.isLangPageAdded)) && /* @__PURE__ */ m(de, { children: [
        /* @__PURE__ */ l(Na, {}),
        /* @__PURE__ */ m(
          M,
          {
            size: "sm",
            variant: "ghost",
            onClick: () => {
              d && f({
                edit: !1,
                primaryPage: d.id
              });
            },
            className: "text-xs font-normal duration-200 hover:bg-slate-300 hover:text-slate-800",
            children: [
              /* @__PURE__ */ l(Dn, { className: "mr-1 h-3 w-3" }),
              " Add Language"
            ]
          }
        )
      ] })
    ] })
  ] }) });
};
function Ml() {
  const e = Gr(Jt), t = kn(Jt);
  return /* @__PURE__ */ m("div", { className: "relative z-10 flex items-center justify-end gap-1", children: [
    /* @__PURE__ */ l(Ol, {}),
    e && /* @__PURE__ */ l(X, { children: /* @__PURE__ */ l(
      Dl,
      {
        isOpen: !0,
        id: e == null ? void 0 : e.id,
        edit: !!(e != null && e.id),
        primaryPage: e == null ? void 0 : e.primaryPage,
        preselectedLang: e == null ? void 0 : e.preselectedLang,
        onClose: () => t(null)
      }
    ) })
  ] });
}
const Rl = {
  SLUG_ALREADY_USED: "This slug is already in use. Please choose a different one."
}, zu = () => {
  const e = I(), t = Z(), n = k(), { data: s } = Be();
  return ne({
    mutationFn: async (r) => await n(e, {
      action: p.CREATE_PAGE,
      data: r
    }),
    onSuccess: (r, a) => {
      var o;
      a && (a != null && a.primaryPage) ? (t.invalidateQueries({
        queryKey: [p.GET_LANGUAGE_PAGES, a == null ? void 0 : a.primaryPage]
      }), t.invalidateQueries({
        queryKey: [p.GET_WEBSITE_PAGES, a == null ? void 0 : a.lang]
      })) : t.invalidateQueries({
        queryKey: [p.GET_WEBSITE_PAGES]
      });
      const i = a.template ? `Page created from "${a.template.name}" template` : a.hasSlug === !1 ? "New " + ((o = oe(s, { key: a.pageType })) == null ? void 0 : o.name) + " added successfully" : "New page added successfully";
      B.success(i);
    },
    onError: (r, a) => {
      const i = oe(s, { key: a.pageType });
      B.error(`Failed to add new ${i != null && i.hasSlug ? "page" : i.name}.`, {
        description: $(Rl, r.message, r.message)
      });
    }
  });
}, Wu = () => {
  const e = I(), t = Z(), n = k(), { data: s } = _e(), { data: r } = Be();
  return ne({
    mutationFn: async (a) => await n(e, {
      action: p.UPDATE_PAGE,
      data: a
    }),
    onSuccess: (a, i) => {
      (s == null ? void 0 : s.id) === (i == null ? void 0 : i.id) && t.invalidateQueries({
        queryKey: [p.GET_LANGUAGE_PAGES]
      }), i && (i != null && i.primaryPage || i != null && i.seo) ? (t.invalidateQueries({
        queryKey: [p.GET_LANGUAGE_PAGES, i == null ? void 0 : i.primaryPage]
      }), t.invalidateQueries({
        queryKey: [p.GET_WEBSITE_PAGES]
      })) : t.invalidateQueries({
        queryKey: [p.GET_WEBSITE_PAGES]
      });
    },
    onError: (a, i) => {
      const o = oe(r, { key: i.pageType });
      B.error(`Failed to update ${o != null && o.hasSlug ? "page" : o.name}.`, {
        description: a.message
      });
    }
  });
}, Yu = () => {
  const e = I(), t = Z(), n = k(), { data: s } = Be();
  return ne({
    mutationFn: async (r) => n(e, {
      action: p.DELETE_PAGE,
      data: { id: r == null ? void 0 : r.id }
    }),
    onSuccess: (r, a) => {
      if (r.code === "PAGE_LOCKED") {
        B.error("Delete not allowed", {
          description: "Page is currently being edited by another user."
        });
        return;
      }
      a && (a != null && a.primaryPage) ? (t.invalidateQueries({
        queryKey: [p.GET_LANGUAGE_PAGES, a == null ? void 0 : a.primaryPage]
      }), t.invalidateQueries({
        queryKey: [p.GET_WEBSITE_PAGES]
      })) : t.invalidateQueries({
        queryKey: [p.GET_WEBSITE_PAGES]
      });
    },
    onError: (r, a) => {
      const i = oe(s, { key: a.pageType });
      B.error(`Failed to delete ${i != null && i.hasSlug ? "page" : i.name}.`, {
        description: r.message
      });
    }
  });
}, Ju = () => {
  const e = I(), t = k(), { data: n } = Be(), { handleQuerySync: s } = ln();
  return ne({
    mutationFn: async (r) => t(e, {
      action: p.TAKE_OFFLINE,
      data: { id: r == null ? void 0 : r.id }
    }),
    onSuccess: (r, a) => {
      s({
        type: "UNPUBLISH_PAGE",
        data: {
          pageId: a == null ? void 0 : a.id,
          primaryPage: a == null ? void 0 : a.primaryPage
        },
        sync: !0
      });
      const i = oe(n, { key: a.pageType });
      B.success(
        i != null && i.hasSlug ? "Page unpublished successfully." : "New " + i.name + " added successfully."
      );
    },
    onError: (r, a) => {
      const i = oe(n, { key: a.pageType });
      B.error(`Failed to take offline ${i != null && i.hasSlug ? "page" : i.name}.`, {
        description: r.message
      });
    }
  });
}, mr = () => {
  const e = I(), t = k(), { savePageAsync: n } = kt(), { handleQuerySync: s } = ln();
  return ne({
    mutationFn: async ({ ids: r }) => (await n(), t(e, {
      action: p.PUBLISH_CHANGES,
      data: { ids: r, revisions: !1 }
    })),
    onSuccess: (r, { ids: a }) => {
      s({
        type: "PUBLISH_CHANGES",
        data: { ids: a },
        sync: !0
      });
    },
    onError: (r) => {
      console.log(r), B.error("Failed to publish pages.");
    }
  });
}, Zu = () => {
  const e = I(), t = k(), n = Z();
  return ne({
    mutationFn: async (s) => {
      var r;
      return t(e, {
        action: p.MARK_AS_TEMPLATE,
        data: {
          id: (r = s.page) == null ? void 0 : r.id,
          name: s.name,
          description: s.description,
          pageType: s.pageType,
          previewImage: s.previewImage
        }
      });
    },
    onSuccess: () => {
      n.invalidateQueries({
        queryKey: [p.GET_WEBSITE_PAGES]
      }), B.success("Page marked as template successfully.");
    },
    onError: () => {
      B.error("Failed to mark page as template.");
    }
  });
}, Xu = () => {
  const e = I(), t = k(), n = Z();
  return ne({
    mutationFn: async (s) => t(e, {
      action: p.UNMARK_AS_TEMPLATE,
      data: { id: s == null ? void 0 : s.id }
    }),
    onSuccess: () => {
      n.invalidateQueries({
        queryKey: [p.GET_WEBSITE_PAGES]
      }), B.success("Page unmarked as template successfully.");
    },
    onError: () => {
      B.error("Failed to unmark page as template.");
    }
  });
}, Bl = Q(() => import("./publish-pages-content-Q6lS94j7.js"));
function Ul({
  showModal: e = !1,
  onClose: t = () => console.log("Cancelled")
}) {
  const { mutate: n, isPending: s } = mr();
  return /* @__PURE__ */ l(On, { open: e, onOpenChange: s ? () => {
  } : t, children: e && /* @__PURE__ */ l(X, { fallback: /* @__PURE__ */ l("div", { className: "h-96 w-96 animate-pulse bg-gray-100" }), children: /* @__PURE__ */ l(Bl, { onClose: t, isPending: s, publishPage: n }) }) });
}
const Fl = () => {
  const [e] = Ia(), { data: t } = Re();
  return j(() => {
    if (!t)
      return { ids: [], names: [], partialBlocksInfo: [] };
    const s = xn(e, (c) => c._type === "PartialBlock"), r = Rr(ft(s.map((c) => $(c, "partialBlockId", "")))), a = ft(
      r.map((c) => {
        const u = oe(t, { id: c });
        if (!u) return null;
        if (u.online) {
          if (!fe(u.changes))
            return {
              id: u.id,
              name: u.name || u.slug || u.id,
              status: "unpublished_changes"
            };
        } else return {
          id: u.id,
          name: u.name || u.slug || u.id,
          status: "unpublished"
        };
        return null;
      })
    ), i = a.map((c) => c.id), o = a.map((c) => c.name);
    return { ids: i, names: o, partialBlocksInfo: a };
  }, [e, t]);
}, Hl = (e) => {
  const { fallbackLang: t } = pe(), { data: n } = xt(), { data: s, isFetching: r } = on(), a = q(() => {
    const i = { [t]: !0 };
    return Br($(n, "languages"), (o) => {
      const c = oe(s, { lang: o });
      i[o] = !!c;
    }), i;
  }, [t, s, n]);
  return r || fe(e) || e && a[e];
}, Kl = () => {
  const { data: e, isLoading: t } = xt(), n = e == null ? void 0 : e.appChanges, s = n == null ? void 0 : n.includes("THEME"), r = n == null ? void 0 : n.includes("DESIGN_TOKENS");
  return {
    hasUnpublishedSettings: s || r,
    hasUnpublishedTheme: s,
    hasUnpublishedDesignToken: r,
    isLoading: t
  };
}, Vl = {
  particleCount: 350,
  spread: 120,
  origin: { y: 0.6 },
  angle: 90
}, ql = {
  TOP_RIGHT: {
    angle: 225,
    origin: { x: 0.9, y: 0 }
  },
  BOTTOM_RIGHT: {
    angle: 100,
    origin: { x: 0.9, y: 0.9 }
  }
}, $l = async () => {
  const { default: e } = await import("canvas-confetti");
  return e;
}, En = (e) => {
  let t = ql[e];
  t || (t = {});
  const n = { ...Vl, ...t };
  $l().then((s) => s(n));
};
function Dt({
  children: e,
  content: t,
  side: n = "bottom",
  delayDuration: s = 700,
  showTooltip: r = !0
}) {
  return r ? /* @__PURE__ */ l(Ca, { children: /* @__PURE__ */ m(Mn, { delayDuration: s, children: [
    /* @__PURE__ */ l(Rn, { asChild: !0, children: e }),
    /* @__PURE__ */ l(Bn, { side: n, sideOffset: 10, children: /* @__PURE__ */ l("p", { children: t }) })
  ] }) }) : e;
}
const jl = Q(() => import("./unpublish-page-DxktWd2g.js")), Ql = Q(
  () => import("./unpublished-partials-modal-Bdhs6GXZ.js")
), zl = () => {
  const { t: e } = ce(), { selectedLang: t, fallbackLang: n } = pe(), s = he("getPreviewUrl", async (g) => g), [r, a] = N(""), { data: i } = ue(), { data: o } = on(), { data: c } = Be(), u = q(
    () => {
      var g;
      return (g = o == null ? void 0 : o.find((h) => (h == null ? void 0 : h.lang) === t)) == null ? void 0 : g.slug;
    },
    [t, o]
  ), f = j((g) => {
    var h;
    return (h = oe(c, { key: g })) == null ? void 0 : h.hasSlug;
  }, [c]), d = t === n ? "" : t;
  return ae(() => {
    (async () => {
      if (typeof s == "function") {
        const g = !f(i == null ? void 0 : i.pageType), h = await s(
          g ? `/_partial/${d !== "" ? d + "/" : ""}${i == null ? void 0 : i.id}` : u || ""
        );
        a(h);
      } else
        a("");
    })();
  }, [s, u, i == null ? void 0 : i.pageType, f, i == null ? void 0 : i.id, d]), /* @__PURE__ */ m(de, { children: [
    /* @__PURE__ */ l(Dt, { content: e("Open preview in new tab"), delayDuration: 0, children: /* @__PURE__ */ l("a", { href: r, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ l(M, { variant: "ghost", size: "sm", className: "gap-2", children: /* @__PURE__ */ l(Zr, { className: "h-4 w-4" }) }) }) }),
    /* @__PURE__ */ l("div", { className: "h-4 w-px bg-gray-200" })
  ] });
}, Wl = () => {
  const { t: e } = ce(), [t, n] = Ga();
  return /* @__PURE__ */ m(de, { children: [
    /* @__PURE__ */ l(Dt, { content: e("Theme"), delayDuration: 0, children: /* @__PURE__ */ l(
      M,
      {
        variant: t === "theme" ? "outline" : "ghost",
        size: "icon",
        className: "gap-2",
        onClick: () => n(t === "theme" ? "block" : "theme"),
        children: /* @__PURE__ */ l(Jr, { className: "h-4 w-4" })
      }
    ) }),
    /* @__PURE__ */ l("div", { className: "h-4 w-px bg-gray-200" })
  ] });
}, Yl = () => {
  const { t: e } = ce(), [t, n] = N(!1), { isLocked: s } = Le(), { savePageAsync: r, saveState: a } = kt();
  ae(() => {
    const f = (d) => {
      a === "UNSAVED" && (d.preventDefault(), d.returnValue = !1);
    };
    return a === "UNSAVED" && window.addEventListener("beforeunload", f), () => {
      window.removeEventListener("beforeunload", f);
    };
  }, [a]);
  const i = j(async () => {
    t || (n(!0), await r(), n(!1));
  }, [r, t]), { buttonIcon: o, buttonClass: c, tooltipContent: u } = q(() => {
    switch (a) {
      case "UNSAVED":
        return {
          tooltipContent: e("Save draft"),
          buttonIcon: /* @__PURE__ */ l(ea, { className: "h-4 w-4" }),
          buttonClass: "gap-x-1"
        };
      case "SAVING":
        return {
          tooltipContent: e("Saving"),
          buttonIcon: /* @__PURE__ */ l(Oe, { className: "h-4 w-4 animate-spin text-sky-700" }),
          buttonClass: "gap-x-1"
        };
      case "SAVED":
        return {
          tooltipContent: e("Saved"),
          buttonIcon: /* @__PURE__ */ l(Xr, { className: "h-4 w-4" }),
          buttonClass: "text-green-500 gap-x-1"
        };
    }
  }, [a, e]);
  return s ? null : /* @__PURE__ */ l(Dt, { content: u, children: /* @__PURE__ */ l(M, { size: "sm", variant: "ghost", onClick: i, className: `${c}`, children: o }) });
}, Jl = () => {
  const { t: e } = ce(), { selectedLang: t } = pe(), { data: n } = _e(), s = Fl(), [r, a] = N(!1), [i, o] = N(!1), [c, u] = N(null), { hasUnpublishedSettings: f, hasUnpublishedTheme: d } = Kl(), [g, h] = N(!1), [y, P] = N([]), [G, E] = N([]), [, S] = N(null), { data: T } = ue(), { mutate: D, isPending: U } = mr(), { needTranslations: x } = kt(), Y = x(), { buttonText: se, buttonClassName: F, isPublished: b, hasUnpublishedChanges: _ } = q(() => {
    const z = T && (T == null ? void 0 : T.online), ge = !fe(T == null ? void 0 : T.changes);
    let Ue = z ? "hover:bg-green-600 bg-green-500" : "", lt = e(z ? "Published" : "Publish");
    return z && ge && (Ue = "hover:bg-blue-600 bg-blue-500", lt = e("Publish")), {
      buttonClassName: Ue,
      isPublished: z,
      hasUnpublishedChanges: ge,
      buttonText: lt
    };
  }, [T, e]), V = async () => {
    Y || ie([n == null ? void 0 : n.id, n == null ? void 0 : n.primaryPage]);
  }, K = (z) => {
    const ge = [n == null ? void 0 : n.id, n == null ? void 0 : n.primaryPage, ...Array.isArray(z) ? z : []];
    D({ ids: ft(ge) }, { onSuccess: () => En("TOP_RIGHT") });
  }, ie = j(
    (z) => {
      const { ids: ge, partialBlocksInfo: Ue } = s();
      ge.length > 0 ? (P(ge), E(Ue), h(!0)) : D({ ids: ft(z) }, { onSuccess: () => En("TOP_RIGHT") });
    },
    [s, D]
  ), ot = () => {
    h(!1), K(y), P([]), E([]);
  }, Te = () => {
    h(!1), P([]), E([]);
  }, Ne = j((z, ge) => {
    S({ id: z, name: ge });
  }, []);
  return /* @__PURE__ */ m(de, { children: [
    /* @__PURE__ */ m("div", { className: "flex", children: [
      /* @__PURE__ */ m(
        M,
        {
          size: "sm",
          onClick: V,
          disabled: U || !(T != null && T.id),
          className: `relative flex items-center gap-1 overflow-hidden rounded-r-none text-white transition-all duration-300 ease-in-out ${F}`,
          onMouseEnter: () => o(!0),
          onMouseLeave: () => o(!1),
          children: [
            /* @__PURE__ */ l(
              "span",
              {
                className: `flex items-center transition-transform duration-300 ease-in-out ${i ? "-translate-y-10" : ""}`,
                children: b ? _ ? /* @__PURE__ */ l(Ns, { className: "h-4 w-4" }) : /* @__PURE__ */ l(Zn, { className: "h-4 w-4" }) : /* @__PURE__ */ l(Xn, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ l(
              "span",
              {
                className: `absolute inset-0 left-3 flex items-center transition-transform duration-300 ease-in-out ${i ? "" : "translate-y-10"}`,
                children: b ? /* @__PURE__ */ l(Xn, { className: "h-4 w-4" }) : /* @__PURE__ */ l(Zn, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ l("span", { children: se }),
            t ? `(${Yn(t)})` : ""
          ]
        }
      ),
      /* @__PURE__ */ m(en, { children: [
        /* @__PURE__ */ l(tn, { asChild: !0, children: /* @__PURE__ */ m(
          M,
          {
            size: "sm",
            disabled: U || !(T != null && T.id),
            className: `relative rounded-l-none border-l border-white/50 px-2 text-white ${f ? "bg-gray-500 hover:bg-gray-600" : F}`,
            children: [
              /* @__PURE__ */ l(Sn, { className: "h-4 w-4" }),
              f && /* @__PURE__ */ m(de, { children: [
                /* @__PURE__ */ l("span", { className: "absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-orange-500" }),
                /* @__PURE__ */ l("span", { className: "absolute -right-0.5 -top-0.5 h-2 w-2 animate-ping rounded-full bg-orange-500" })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ m(nn, { align: "end", className: "w-60", children: [
          /* @__PURE__ */ l(rs, { className: "-mt-1 text-xs font-light text-gray-600", children: e("Page") }),
          !b && /* @__PURE__ */ m(
            Pe,
            {
              disabled: U,
              className: "cursor-pointer text-xs",
              onClick: () => ie([T == null ? void 0 : T.id]),
              children: [
                e("Publish"),
                " page"
              ]
            }
          ),
          b && /* @__PURE__ */ m(Pe, { onClick: () => u(n), className: "cursor-pointer text-xs", children: [
            /* @__PURE__ */ l(ta, { className: "mr-0.5 h-3 w-3" }),
            e("Unpublish"),
            " page ",
            t ? `(${Yn(t)})` : ""
          ] }),
          f && /* @__PURE__ */ m(de, { children: [
            /* @__PURE__ */ l(ka, { className: "bg-gray-200" }),
            /* @__PURE__ */ l(rs, { className: "-mt-1 text-xs font-light text-gray-600", children: e("Unpublished website settings") })
          ] }),
          d && /* @__PURE__ */ l(
            Pe,
            {
              disabled: U,
              className: "cursor-pointer text-xs",
              onClick: () => D({ ids: ["THEME"] }, { onSuccess: () => En("TOP_RIGHT") }),
              children: /* @__PURE__ */ m("span", { className: "flex h-full w-full items-center gap-2", children: [
                /* @__PURE__ */ l("span", { className: "mt-0.5 h-1 w-1 animate-pulse rounded-full bg-orange-500" }),
                e("Publish"),
                " theme"
              ] })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l(Ul, { showModal: r, onClose: () => a(!1) }),
    c && /* @__PURE__ */ l(X, { children: /* @__PURE__ */ l(jl, { page: c, onClose: () => u(null) }) }),
    g && /* @__PURE__ */ l(X, { children: /* @__PURE__ */ l(
      Ql,
      {
        isOpen: g,
        onClose: Te,
        onContinue: ot,
        onViewChanges: Ne,
        isPending: U,
        partialBlocksInfo: G
      }
    ) })
  ] });
}, Zl = () => {
  const { t: e } = ce(), { data: t } = ue(), n = Jo();
  return (t == null ? void 0 : t.online) ? /* @__PURE__ */ l(Dt, { content: e("Open live page"), delayDuration: 0, children: /* @__PURE__ */ l("a", { href: n, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ l(M, { variant: "ghost", size: "icon", className: "ml-1 h-8 w-8", children: /* @__PURE__ */ l(na, { className: "h-4 w-4" }) }) }) }) : null;
};
function Xl() {
  const { isLocked: e } = Le(), [t] = Se(), n = t.get("lang"), s = Hl(n);
  return e || !s ? /* @__PURE__ */ l("div", {}) : /* @__PURE__ */ m("div", { className: "flex items-center justify-end gap-1", children: [
    /* @__PURE__ */ l(Wl, {}),
    /* @__PURE__ */ l(zl, {}),
    /* @__PURE__ */ l(Yl, {}),
    /* @__PURE__ */ l(Jl, {}),
    /* @__PURE__ */ l(Zl, {})
  ] });
}
const ec = Q(() => import("./page-manager-new-B3cxEqA2.js")), tc = ({ children: e }) => {
  const { t } = ce(), [n] = Se(), s = n.get("page"), { data: r, isFetching: a } = ue(), { data: i, isFetching: o } = Re(), [c, u] = N(!1), [f, d] = N(!0), { savePage: g } = kt(), h = !!s && !fe(r), { isLocked: y } = Le();
  ae(() => {
    !o && i && d(!1);
  }, [o, i]);
  const P = !f && !s, G = !f && !a && fe(r), E = c || P || G;
  return /* @__PURE__ */ m(de, { children: [
    /* @__PURE__ */ m(Mn, { children: [
      /* @__PURE__ */ l(
        Rn,
        {
          asChild: !0,
          onClick: () => {
            y || g(), u(!0);
          },
          children: e || /* @__PURE__ */ m(
            M,
            {
              variant: "ghost",
              className: "flex w-full items-center justify-center rounded-md p-2 pl-0",
              children: [
                /* @__PURE__ */ l(es, { className: "ml-2 h-10 w-10 fill-primary text-primary" }),
                /* @__PURE__ */ l("div", { className: "flex flex-col items-start", children: /* @__PURE__ */ l("span", { className: "text-sm font-semibold", children: t("Pages") }) })
              ]
            },
            "template-viewer"
          )
        }
      ),
      /* @__PURE__ */ l(Bn, { side: "right", children: /* @__PURE__ */ l("p", { children: t("Open pages manager") }) })
    ] }),
    /* @__PURE__ */ l(xa, { open: E, onOpenChange: (S) => !S && h && u(!1), children: /* @__PURE__ */ m(
      Da,
      {
        side: "left",
        "aria-describedby": "pages-manager-description",
        className: `z-50 !min-w-[50vh] !max-w-[800px] border-border p-0 ${h ? "" : "sheet-hide-close-btn"}`,
        children: [
          /* @__PURE__ */ m(Oa, { className: "mb-3 px-4 pt-4", children: [
            /* @__PURE__ */ m(Ma, { className: "flex items-center gap-2 text-sm font-semibold", children: [
              /* @__PURE__ */ l("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground", children: /* @__PURE__ */ l(es, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ m("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ l("span", { className: "text-sm font-semibold", children: t("Pages") }),
                /* @__PURE__ */ l("span", { id: "pages-manager-description", className: "text-xs font-normal text-muted-foreground", children: t("Manage your site structure") })
              ] })
            ] }),
            /* @__PURE__ */ l(Ra, { className: "sr-only", children: t("Manage your site structure") })
          ] }),
          /* @__PURE__ */ l("div", { className: "h-[calc(100vh-80px)] overflow-y-auto", children: E && /* @__PURE__ */ l(X, { children: /* @__PURE__ */ l(ec, { close: () => u(!1) }) }) })
        ]
      }
    ) })
  ] });
}, nc = Q(() => import("./dynamic-page-selector-CYAjx35u.js")), sc = () => {
  const { dynamicPage: e, allLangPages: t, isFetching: n } = Qo(), s = t.length > 0;
  return n ? null : /* @__PURE__ */ m("div", { className: "relative", children: [
    !e && /* @__PURE__ */ l(kl, { hasDynamicPage: s }),
    /* @__PURE__ */ l(X, { children: /* @__PURE__ */ l(nc, {}) })
  ] });
}, rc = () => {
  const { isFetching: e } = _e(), { data: t, isFetching: n } = ue(), s = $(t, "dynamic", !1), r = da("dynamic-page-selector"), a = e || n;
  return /* @__PURE__ */ m("div", { className: "relative flex items-center", children: [
    /* @__PURE__ */ m("div", { className: "flex items-center", children: [
      /* @__PURE__ */ l("div", { className: qt("flex h-8 items-center", a && "max-w-0 overflow-hidden opacity-0"), children: /* @__PURE__ */ l(tc, {}) }),
      /* @__PURE__ */ l(sa, { className: "mx-1 h-3 w-3 flex-shrink-0 text-gray-400" }),
      /* @__PURE__ */ l("div", { className: qt("flex h-8 items-center", a && "max-w-0 overflow-hidden opacity-0"), children: /* @__PURE__ */ l(Gl, {}) })
    ] }),
    s && r && /* @__PURE__ */ l(sc, {})
  ] });
}, ac = () => /* @__PURE__ */ m("div", { className: "grid h-full w-full grid-cols-3 items-center px-2", children: [
  /* @__PURE__ */ m("div", { className: "flex justify-start", children: [
    /* @__PURE__ */ l(Ml, {}),
    /* @__PURE__ */ l(rc, {})
  ] }),
  /* @__PURE__ */ l("div", { className: "flex justify-center", children: /* @__PURE__ */ l(Fo, {}) }),
  /* @__PURE__ */ l("div", { className: "flex items-center justify-end", children: /* @__PURE__ */ l(Xl, {}) })
] }), ic = () => {
  const e = Z(), { data: t } = le({
    queryKey: [p.AI_CONTEXT],
    initialData: "",
    queryFn: () => "",
    staleTime: 0
  });
  return { setAiContext: j(
    (s) => {
      e.setQueryData([p.AI_CONTEXT], s);
    },
    [e]
  ), aiContext: t };
}, oc = () => {
  const e = I(), { aiContext: t } = ic(), n = k();
  return j(
    async (s, r, a, i) => n(e, {
      action: p.ASK_AI,
      data: { type: s, prompt: r, blocks: a, context: t, lang: i }
    }),
    [e, t, n]
  );
}, lc = (e) => q(() => {
  if (!e || fe(e)) return { blocks: [] };
  const t = xn(e, (n) => !Ur(n == null ? void 0 : n._type, "@chai/"));
  return { blocks: ci(t) };
}, [e]), cc = () => {
  const [e] = Se(), t = e.get("page"), n = I(), s = k(), r = Z(), { data: a } = ue(), { data: i } = _e(), o = Kn(), c = Hn();
  return le({
    queryKey: [p.GET_PAGE_ALL_DATA, t, i == null ? void 0 : i.id, c],
    staleTime: 1 / 0,
    gcTime: 0,
    queryFn: async () => {
      const u = await s(n, {
        action: p.GET_PAGE_ALL_DATA,
        data: {
          id: t,
          lang: (i == null ? void 0 : i.lang) || o,
          pageType: a == null ? void 0 : a.pageType,
          pageProps: {
            slug: (i == null ? void 0 : i.slug) + c,
            searchParams: {},
            pageType: i == null ? void 0 : i.pageType,
            fallbackLang: o,
            lastSaved: i == null ? void 0 : i.lastSaved,
            pageId: a == null ? void 0 : a.id,
            primaryPageId: (i == null ? void 0 : i.primaryPage) || (a == null ? void 0 : a.id),
            pageBaseSlug: i == null ? void 0 : i.slug,
            dynamic: a == null ? void 0 : a.dynamic,
            languagePageId: i == null ? void 0 : i.id,
            metadata: (a == null ? void 0 : a.metadata) || {}
          }
        }
      });
      return r.setQueryData([p.GET_BUILDER_PAGE_DATA, i == null ? void 0 : i.id, c], u.builderPageData), r.setQueryData([p.GET_LANGUAGE_PAGES, t], u.languagePages), u;
    },
    enabled: !!t && !!(a != null && a.pageType) && !!(i != null && i.id)
  });
}, uc = () => {
  const e = I(), t = k(), { handleQuerySync: n } = ln();
  return ne({
    mutationFn: async (s) => t(e, {
      action: p.UPDATE_WEBSITE_FIELDS,
      data: s
    }),
    onSuccess: (s, r) => {
      n({
        type: "UPDATE_WEBSITE_DATA",
        data: r,
        sync: !0
      });
    },
    onError: (s) => {
      B.error("Failed to update website settings", {
        description: s.message
      });
    }
  });
}, ed = () => {
  const e = I(), t = Z(), n = k(), { selectedLang: s } = pe();
  return ne({
    mutationFn: async (r) => n(e, { action: p.ADD_GLOBAL_SCHEMA, data: { ...r, lang: s } }),
    onSuccess: () => {
      t.invalidateQueries({
        queryKey: [p.GET_GLOBAL_JSONLD_ITEMS]
      }), B.success("Schema added successfully.");
    },
    onError: (r) => {
      B.error("Failed to add schema", {
        description: r.message
      });
    }
  });
}, td = () => {
  const e = I(), t = Z(), n = k(), { selectedLang: s } = pe();
  return ne({
    mutationFn: async (r) => n(e, { action: p.UPDATE_GLOBAL_SCHEMA, data: { ...r, lang: s } }),
    onSuccess: () => {
      t.invalidateQueries({
        queryKey: [p.GET_GLOBAL_JSONLD_ITEMS]
      }), B.success("Schema updated successfully.");
    },
    onError: (r) => {
      B.error("Failed to update schema", {
        description: r.message
      });
    }
  });
}, nd = () => {
  const e = I(), t = Z(), n = k();
  return ne({
    mutationFn: async (s) => n(e, { action: p.DELETE_GLOBAL_SCHEMA, data: { id: s } }),
    onSuccess: () => {
      t.invalidateQueries({
        queryKey: [p.GET_GLOBAL_JSONLD_ITEMS]
      }), B.success("Schema deleted successfully.");
    },
    onError: (s) => {
      B.error("Failed to delete schema", {
        description: s.message
      });
    }
  });
}, sd = () => {
  const e = I(), t = k();
  return ne({
    mutationFn: async (n) => t(e, { action: p.TOGGLE_PAGE_GLOBAL_SCHEMA, data: n }),
    onError: (n) => {
      B.error("Failed to toggle schema", {
        description: n.message
      });
    }
  });
}, rd = () => {
  const e = I(), t = k();
  return ne({
    mutationFn: async (n) => t(e, { action: p.APPLY_SCHEMA_TO_ALL_PAGES, data: { schemaId: n } }),
    onSuccess: (n) => {
      B.success(`Schema applied to ${n.count} page(s)`);
    },
    onError: (n) => {
      B.error("Failed to apply schema to all pages", {
        description: n.message
      });
    }
  });
}, ad = () => {
  const e = I(), t = k();
  return ne({
    mutationFn: async (n) => t(e, { action: p.REMOVE_SCHEMA_FROM_ALL_PAGES, data: { schemaId: n } }),
    onSuccess: (n) => {
      B.success(`Schema removed from ${n.count} page(s)`);
    },
    onError: (n) => {
      B.error("Failed to remove schema from all pages", {
        description: n.message
      });
    }
  });
}, pr = (e = 300) => {
  const t = he("onLogout", Xt), n = he("getAccessToken"), s = I();
  return le({
    queryKey: ["check-user-access"],
    queryFn: async () => {
      const r = await n(), i = await fr(
        s + "?action=check_user_access",
        { action: "CHECK_USER_ACCESS" },
        { Authorization: `Bearer ${r}` }
      );
      if (i.status === 401)
        throw console.log("401 Response", i), B.error("You do not have access to edit this website. Please contact administrator"), await t("UNAUTHORIZED"), new Error("Unauthorized");
      return await i.json();
    },
    refetchInterval: e * 1e3,
    refetchIntervalInBackground: !0,
    retry: !1
  });
}, dc = () => {
  const e = I(), t = k(), [, n] = Yo(), s = Z(), { handleQuerySync: r } = ln();
  return { onSave: async ({
    page: i,
    blocks: o,
    needTranslations: c,
    partialIds: u,
    linkPageIds: f,
    designTokens: d
  }) => {
    try {
      const g = await t(e, {
        action: "UPDATE_PAGE",
        data: { id: i, blocks: o, needTranslations: c }
      });
      return g.code === "PAGE_LOCKED" ? !0 : (n((h) => ({
        ...h,
        lastSaved: (/* @__PURE__ */ new Date()).toISOString()
      })), s.setQueryData([p.GET_LANGUAGE_PAGES, i], (h) => h && (h == null ? void 0 : h.map((y) => (y == null ? void 0 : y.id) === i ? { ...y, changes: ["Page"] } : y))), r({
        type: "UPDATE_PAGE_DATA",
        data: {
          pageId: i,
          partialIds: u,
          linkPageIds: f,
          designTokens: d
        },
        sync: !0
      }), g);
    } catch (g) {
      return console.error(g), new Error("Failed to save blocks");
    }
  } };
}, fc = () => {
  const { data: e } = Re(), t = I(), n = k();
  return {
    getPartialBlocks: j(async () => {
      const s = {};
      for (const r of e ?? [])
        fe(r == null ? void 0 : r.slug) && (s[r.id] = {
          type: r.pageType,
          name: Fr(r.name ?? r.slug),
          description: ""
        });
      return s;
    }, [e]),
    getPartialBlockBlocks: j(
      async (s) => {
        if (!s) return [];
        try {
          const r = await n(t, {
            action: "GET_DRAFT_PAGE",
            data: { id: s, draft: !0, editor: !1, mergePartials: !0 }
          });
          return xn(r.blocks, (a) => _s(a, "_id"));
        } catch (r) {
          return console.error(r), [];
        }
      },
      [n, t]
    )
  };
}, hc = Q(() => Promise.resolve().then(() => Qc)), yr = "chai-chat-panel", gc = ({ className: e = "h-full w-full" }) => /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", version: "1.1", className: e, children: [
  /* @__PURE__ */ l("title", { children: "ai" }),
  /* @__PURE__ */ l("g", { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: /* @__PURE__ */ l("g", { id: "icon", fill: "currentColor", transform: "translate(64.000000, 64.000000)", children: /* @__PURE__ */ l(
    "path",
    {
      d: "M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z",
      id: "Combined-Shape"
    }
  ) }) })
] }), mc = ({ isActive: e, show: t }) => Tn("flags.ai", !1) ? /* @__PURE__ */ l(M, { size: "icon", className: "p-0 [&_svg]:size-6", onClick: t, variant: e ? "default" : "ghost", children: /* @__PURE__ */ l(gc, { className: e ? "h-5 w-5 text-white" : "h-5 w-5 text-primary" }) }) : null, pc = {
  id: yr,
  label: "AI Assistant",
  button: mc,
  panel: () => /* @__PURE__ */ l(hc, { onSuccess: console.log, onError: console.log, onComplete: console.log }),
  position: "top"
}, yc = Q(() => import("./seo-panel-Bi3R1pIQ.js")), Er = "seo", Ec = ({ isActive: e, show: t }) => {
  const { data: n } = ue(), s = Zo(n == null ? void 0 : n.pageType);
  return !_s(s, "hasSlug") || !s.hasSlug ? null : /* @__PURE__ */ l(M, { size: "icon", className: "my-1 p-0", onClick: t, variant: e ? "default" : "ghost", children: /* @__PURE__ */ m(
    "svg",
    {
      stroke: "currentColor",
      fill: "none",
      style: { height: "20px", width: "20px" },
      strokeWidth: "2",
      viewBox: "0 0 24 24",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ l("path", { d: "M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3" }),
        /* @__PURE__ */ l("path", { d: "M14 16h-4v-8h4" }),
        /* @__PURE__ */ l("path", { d: "M11 12h2" }),
        /* @__PURE__ */ l("path", { d: "M17 8m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" })
      ]
    }
  ) });
}, Ac = {
  id: Er,
  label: "SEO",
  panel: yc,
  button: Ec,
  position: "top",
  width: 600,
  view: "modal"
}, Sc = Q(
  () => import("./change-password-modal-Ch-t0D36.js").then((e) => ({ default: e.ChangePasswordModal }))
), Ar = "user-info", Tc = () => {
  const { t: e } = ce(), { user: t, logout: n } = Vn(), s = he("onLogout", Xt), [r, a] = N(!1);
  return t ? /* @__PURE__ */ m(Ba, { children: [
    /* @__PURE__ */ l(Ua, { asChild: !0, children: /* @__PURE__ */ l(M, { variant: "ghost", className: "text-sm font-medium", children: /* @__PURE__ */ l(ra, { className: "h-4 w-4" }) }) }),
    /* @__PURE__ */ m(Fa, { className: "w-auto space-y-2 p-4", children: [
      /* @__PURE__ */ l("div", { className: "text-sm font-medium", children: t.name ?? t.email }),
      /* @__PURE__ */ l("div", { className: "text-xs text-muted-foreground", children: t.email }),
      /* @__PURE__ */ l(M, { variant: "outline", size: "sm", className: "w-full", onClick: () => a(!0), children: e("Change Password") }),
      r && /* @__PURE__ */ l(
        X,
        {
          fallback: /* @__PURE__ */ l(On, { open: r, onOpenChange: a, children: /* @__PURE__ */ l(Is, { className: "sm:max-w-[425px]", children: /* @__PURE__ */ l("div", { className: "flex h-[340px] items-center justify-center", children: /* @__PURE__ */ l(Oe, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) }) }),
          children: /* @__PURE__ */ l(Sc, { open: r, onOpenChange: a })
        }
      ),
      /* @__PURE__ */ m(Ha, { children: [
        /* @__PURE__ */ l(Ka, { asChild: !0, children: /* @__PURE__ */ l(M, { variant: "outline", size: "sm", className: "w-full", children: e("Logout") }) }),
        /* @__PURE__ */ m(Va, { children: [
          /* @__PURE__ */ m(qa, { children: [
            /* @__PURE__ */ l($a, { children: e("Are you sure you want to logout?") }),
            /* @__PURE__ */ l(ja, { children: e("You will be redirected to the login page.") })
          ] }),
          /* @__PURE__ */ m(Qa, { children: [
            /* @__PURE__ */ l(za, { children: e("Cancel") }),
            /* @__PURE__ */ l(
              Wa,
              {
                onClick: () => {
                  n(), Hr(s) && s();
                },
                children: e("Logout")
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] }) : null;
}, Pc = {
  id: Ar,
  label: "User Info",
  button: Tc,
  position: "bottom"
}, wc = () => {
  un(Er, Ac), un(Ar, Pc), un(yr, pc);
}, bc = Ae(""), _c = () => {
  ss("dynamic-page-selector", {
    description: "Dynamic page selector"
  }), ss("enable-add-page-dropdown", {
    description: "Enable add page dropdown"
  });
}, qn = () => {
  const e = k(), t = I(), n = Z();
  return le({
    queryKey: [p.GET_WEBSITE_DATA],
    staleTime: 300 * 1e3,
    queryFn: async () => {
      const s = await e(t, { action: p.GET_WEBSITE_DATA });
      return n.setQueryData([p.GET_WEBSITE_DRAFT_SETTINGS], s.websiteSettings), n.setQueryData([p.GET_WEBSITE_PAGES], s.websitePages), n.setQueryData([p.GET_PAGE_TYPES], s.pageTypes), n.setQueryData([p.GET_LIBRARIES], s.libraries), n.setQueryData([p.GET_COLLECTIONS], s.collections), s;
    }
  });
}, Es = {
  async getUILibraryBlock(e, t, n) {
    const s = await t(n, {
      action: "GET_LIBRARY_ITEM",
      data: { id: e.id }
    }), r = $(s, "html", ""), a = $(s, "blocks", []);
    return Kr(a) ? a : di(r);
  },
  async getUILibraryBlocks(e, t, n) {
    return (await t(n, {
      action: "GET_LIBRARY_ITEMS",
      data: { id: e.id }
    })).map((r) => ({
      ...r
    }));
  }
}, vc = () => {
  const e = k(), t = I(), { data: n } = qn(), s = n == null ? void 0 : n.libraries;
  return le({
    queryKey: [p.UI_LIBRARIES],
    staleTime: "static",
    queryFn: async () => {
      const r = s.map((a) => ({
        ...a
      }));
      return r.forEach((a) => {
        fa(a.id, {
          name: a.isSiteLibrary ? a.name + " (Current Site) " : a.name,
          description: a.description,
          getBlocksList: (i) => Es.getUILibraryBlocks(i, e, t),
          getBlock: ({ block: i }) => Es.getUILibraryBlock(i, e, t)
        });
      }), r;
    }
  });
}, Lc = () => {
  const { data: e } = ue(), { data: t } = _e(), { data: n } = xt(), s = I(), r = k(), a = q(() => (n == null ? void 0 : n.fallbackLang) || "en", [n == null ? void 0 : n.fallbackLang]), i = Zt(/* @__PURE__ */ new Map());
  return ne({
    mutationFn: async ({ block: o }) => {
      const c = o._id, u = (t == null ? void 0 : t.lang) || a, f = `${c}:${u}`;
      if (i.current.has(f))
        return i.current.get(f);
      const d = r(s, {
        action: p.GET_BLOCK_ASYNC_PROPS,
        data: {
          block: o,
          lang: u,
          pageProps: {
            slug: t == null ? void 0 : t.slug,
            searchParams: {},
            pageType: t == null ? void 0 : t.pageType,
            fallbackLang: a,
            lastSaved: t.lastSaved,
            pageId: e.id,
            primaryPageId: t.primaryPage || e.id,
            pageBaseSlug: t == null ? void 0 : t.slug,
            dynamic: e == null ? void 0 : e.dynamic,
            languagePageId: t.id
          }
        }
      });
      return i.current.set(f, d), d.finally(() => {
        i.current.delete(f);
      }), d;
    }
  });
}, Nc = () => {
  const [, e] = Se();
  return j(
    (t, n) => {
      const r = new URLSearchParams(window.location.search).get("lang"), a = new URLSearchParams({ page: t });
      r && a.set("lang", r), window.history.pushState({}, "", `?${a.toString()}`), e(a), window.dispatchEvent(new PopStateEvent("popstate")), n == null || n();
    },
    [e]
  );
}, Ic = () => {
  const e = Nc();
  return j(
    ({ pageId: t }) => {
      e(t);
    },
    [e]
  );
};
function Cc(e) {
  const t = {};
  for (const n of e)
    t[n.id] = {
      name: n.name,
      isPartial: fe(n.slug),
      partialBlocks: n.partialBlocks ? n.partialBlocks.split("|").filter(Boolean) : [],
      links: n.links ? n.links.split("|").filter(Boolean) : [],
      designTokens: n.designTokens ?? {}
    };
  return t;
}
const Gc = () => {
  const { data: e } = Re();
  return { data: q(() => Cc(e ?? []), [e]) };
}, kc = Q(() => import("./no-language-page-dialog-DZ2b5XXr.js")), xc = Q(() => import("./digital-asset-manager-DpNk4Blw.js")), Dc = Q(() => import("./web-preview-Ddueh_VG.js"));
_c();
ui();
ga(ac);
wc();
ha(xc);
const Oc = {
  role: "admin",
  permissions: null
}, As = (e) => {
  const { isLoading: t } = pr();
  return t ? /* @__PURE__ */ l(At, { className: "fixed inset-0 bg-white", children: /* @__PURE__ */ l(Oe, { className: "h-6 w-6 animate-spin text-primary" }) }) : /* @__PURE__ */ l(Mc, { ...e });
}, Mc = (e) => {
  const { data: t, isFetching: n, isError: s } = qn();
  return !t || n ? /* @__PURE__ */ l(At, { className: "fixed inset-0 bg-white", children: /* @__PURE__ */ l(Oe, { className: "h-6 w-6 animate-spin text-primary" }) }) : s ? /* @__PURE__ */ m(At, { className: "fixed inset-0 bg-white", children: [
    /* @__PURE__ */ l("p", { children: "Failed to load website data" }),
    /* @__PURE__ */ l(M, { onClick: () => window.location.reload(), children: "Retry" })
  ] }) : /* @__PURE__ */ l(Rc, { ...e });
}, Rc = ({ ...e }) => {
  var $n;
  const { data: t } = qn(), { data: n } = Gc(), { data: s } = vc(), { collections: r, pageTypes: a, websiteSettings: i } = t, o = q(() => (i == null ? void 0 : i.fallbackLang) || "en", [i]), { data: c, isFetching: u } = pr(), f = c || Oc, [d] = Se(), g = d.get("page"), { data: h } = ue(), { data: y, isFetching: P } = cc(), { blocks: G } = lc((($n = y == null ? void 0 : y.draftPage) == null ? void 0 : $n.blocks) ?? []), { pageStatus: E } = Le(), S = oc(), { onSave: T } = dc(), { mutateAsync: D } = Lc(), { getPartialBlocks: U, getPartialBlockBlocks: x } = fc(), { searchPages: Y } = Xo(), { mutateAsync: se } = uc(), F = Ic(), [b, _] = N(!1), V = Zt([]), K = q(() => $(i, "theme", {}) || {}, [i]), ie = q(() => $(i, "languages", []) || [], [i]), ot = q(() => $(i, "designTokens", {}) || {}, [i]), Te = E === De.EDITING, Ne = E === De.CHECKING, z = P || Ne;
  ae(() => {
    V.current = G;
  }, [G]);
  const [ge] = me(bc);
  ae(() => {
    const re = () => {
      document.hidden ? _(!0) : _(!1);
    };
    return window.addEventListener("visibilitychange", re), () => window.removeEventListener("visibilitychange", re);
  }, []);
  const Ue = q(() => {
    const re = {};
    return f && (re.permissions = $(f, "permissions", null), re.role = $(f, "role", "user")), re.pageExternalData = (y == null ? void 0 : y.builderPageData) ?? {}, re;
  }, [f, y]), lt = q(() => s == null ? void 0 : s.some((re) => re.isSiteLibrary), [s]);
  return /* @__PURE__ */ m(de, { children: [
    P && /* @__PURE__ */ l(At, { className: u ? "fixed inset-0 bg-white" : "bg-white/75", children: /* @__PURE__ */ l(Oe, { className: `animate-spin text-primary ${u ? "h-6 w-6" : "h-5 w-5"}` }) }),
    ge && /* @__PURE__ */ l(
      X,
      {
        fallback: /* @__PURE__ */ l("div", { className: "absolute inset-0 z-[999999] flex min-h-screen w-screen items-center justify-center bg-gray-100", children: /* @__PURE__ */ l(Oe, { className: "h-6 w-6 animate-spin text-primary" }) }),
        children: /* @__PURE__ */ l(Dc, {})
      }
    ),
    /* @__PURE__ */ l(
      Ya,
      {
        siteWideUsage: n ?? {},
        flags: e.flags ? { ...e.flags, librarySite: lt } : { librarySite: lt },
        gotoPage: F,
        collections: r ?? [],
        getBlockAsyncProps: D,
        themePresets: e.themePresets ?? [],
        pageId: h == null ? void 0 : h.id,
        loading: z,
        fallbackLang: o,
        languages: ie,
        brandingOptions: K,
        designTokens: ot,
        translations: e.translations || {},
        locale: e.locale || "en",
        htmlDir: e.htmlDir || "ltr",
        autoSave: !b && Te && (e.autoSave ?? !0),
        autoSaveActionsCount: e.autoSaveActionsCount ?? 10,
        onError: e.onError || console.error,
        getPartialBlockBlocks: x,
        getPartialBlocks: U,
        blocks: P ? [] : G,
        theme: Vr(K),
        pageTypes: a,
        searchPageTypeItems: Y,
        askAiCallBack: S,
        onSave: async ({ blocks: re, needTranslations: Ot, partialIds: Tr, linkPageIds: Pr, designTokens: wr }) => {
          if (!g) return !0;
          V.current = re;
          const jn = [...re];
          return await T({
            page: g,
            blocks: jn,
            needTranslations: Ot,
            partialIds: Tr,
            linkPageIds: Pr,
            designTokens: wr
          }), V.current = jn, !0;
        },
        onSaveWebsiteData: async ({ type: re, data: Ot }) => (re === "THEME" ? await se({ settings: { theme: Ot } }) : re === "DESIGN_TOKENS" && await se({ settings: { designTokens: Ot } }), !0),
        ...Ue
      }
    ),
    /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(kc, {}) })
  ] });
}, Bc = new vr({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: !1,
      refetchOnReconnect: !1,
      refetchOnMount: !1
    }
  }
}), id = (e) => {
  const [, t] = Fn(), [n, s] = N(!1);
  return ae(() => (t(
    vs(e, [
      "apiUrl",
      "usersApiUrl",
      "assetsApiUrl",
      "getPreviewUrl",
      "getLiveUrl",
      "topLeftCorner",
      "onLogout",
      "getAccessToken",
      "websocket",
      "realtimeAdapter",
      "getLoggedInUser",
      "flags",
      "currentUser"
    ])
  ), setTimeout(() => {
    s(!0);
  }, 200), () => {
    s(!1), t({});
  }), [e, t]), n ? $(e, "hasReactQueryProvider", !1) === !0 ? /* @__PURE__ */ m(de, { children: [
    /* @__PURE__ */ l(As, { ...e }),
    /* @__PURE__ */ l(ms, {})
  ] }) : /* @__PURE__ */ m(Lr, { client: Bc, children: [
    /* @__PURE__ */ l(As, { ...e }),
    /* @__PURE__ */ l(ms, {})
  ] }) : /* @__PURE__ */ l("div", {});
}, Uc = W.lazy(() => import("./nested-path-selector-content-DRbLSK-V.js"));
function Fc({ data: e, onSelect: t, dataType: n = "value", disabled: s = !1 }) {
  const [r, a] = W.useState(!1);
  return /* @__PURE__ */ m(Ja, { open: r, onOpenChange: a, children: [
    /* @__PURE__ */ m(Mn, { children: [
      /* @__PURE__ */ l(Rn, { asChild: !0, children: /* @__PURE__ */ l(Za, { asChild: !0, children: /* @__PURE__ */ l(
        M,
        {
          size: "sm",
          variant: "outline",
          className: "h-6 w-6 px-1 py-0 text-[9px] text-muted-foreground",
          role: "combobox",
          "aria-expanded": r,
          disabled: s,
          children: /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24px", height: "24px", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ l(
            "path",
            {
              d: "M9.5 5H9C7.89543 5 7 5.89543 7 7V9C7 10 6.4 12 4 12C5 12 7 12.6 7 15V17.0002C7 18.1048 7.89543 19 9 19H9.5M14.5 5H15C16.1046 5 17 5.89543 17 7V9C17 10 17.6 12 20 12C19 12 17 12.6 17 15V17.0002C17 18.1048 16.1046 19 15 19H14.5",
              stroke: "#000000",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2"
            }
          ) })
        }
      ) }) }),
      /* @__PURE__ */ l(Bn, { children: "Add field" })
    ] }),
    r && /* @__PURE__ */ l(W.Suspense, { children: /* @__PURE__ */ l(
      Uc,
      {
        data: e,
        onSelect: t,
        dataType: n,
        open: r,
        setOpen: a
      }
    ) })
  ] });
}
const od = () => {
  const { data: e } = ue(), { data: t } = _e(), n = I(), s = k(), r = Kn(), a = Hn();
  return le({
    queryKey: [p.GET_BUILDER_PAGE_DATA, t == null ? void 0 : t.id, a],
    staleTime: 1 / 0,
    gcTime: 0,
    queryFn: async () => s(n, {
      action: p.GET_BUILDER_PAGE_DATA,
      data: {
        pageType: e == null ? void 0 : e.pageType,
        lang: (t == null ? void 0 : t.lang) || r,
        dynamic: e == null ? void 0 : e.dynamic,
        pageProps: {
          slug: (t == null ? void 0 : t.slug) + a,
          searchParams: {},
          pageType: t == null ? void 0 : t.pageType,
          fallbackLang: r,
          lastSaved: t.lastSaved,
          pageId: e.id,
          primaryPageId: t.primaryPage || e.id,
          pageBaseSlug: t == null ? void 0 : t.slug,
          dynamic: e == null ? void 0 : e.dynamic,
          //
          languagePageId: t.id,
          metadata: e.metadata || {}
        }
      }
    }),
    enabled: !!(e != null && e.pageType) && !!t.id
  });
}, ld = () => {
  const { savePageAsync: e } = kt(), t = Z(), { isLocked: n } = Le();
  return j(async () => {
    n || await e(), t.invalidateQueries({ queryKey: [p.GET_DRAFT_PAGE] }), t.invalidateQueries({ queryKey: [p.GET_BUILDER_PAGE_DATA] });
  }, [e, t, n]);
}, cd = () => {
  const e = Z();
  return j(() => {
    e.clear();
  }, [e]);
}, ud = () => {
  const e = I(), t = k(), { data: n } = _e(), s = Z();
  return ne({
    mutationFn: async (r) => {
      if (!(n != null && n.id))
        throw new Error("No active page found");
      return await t(`${e}`, {
        action: p.UPDATE_PAGE_METADATA,
        data: {
          id: n.id,
          metadata: r
        }
      });
    },
    onSuccess: () => {
      s.invalidateQueries({
        queryKey: [p.GET_BUILDER_PAGE_DATA]
      }), s.invalidateQueries({
        queryKey: [p.GET_LANGUAGE_PAGES]
      });
    },
    onError: () => {
      console.error("Failed to update metadata");
    }
  });
}, Hc = Q(() => import("./digital-asset-manager-DpNk4Blw.js")), dd = ({
  assetId: e,
  assetUrl: t,
  onChange: n,
  className: s = "",
  placeholder: r = "Select an image",
  disabled: a = !1
}) => {
  const { t: i } = ce(), [o, c] = N(!1), u = () => {
    a || c(!0);
  }, f = () => {
    c(!1);
  }, d = (y) => {
    const P = Array.isArray(y) ? y[0] : y;
    P != null && P.url && n(vs(P, ["url", "id"])), c(!1);
  }, g = () => {
    n({ url: "", id: "" });
  }, h = (t == null ? void 0 : t.startsWith("{{")) && (t == null ? void 0 : t.endsWith("}}"));
  return /* @__PURE__ */ m("div", { className: `w-full ${s}`, children: [
    t ? /* @__PURE__ */ m("div", { className: "relative overflow-hidden rounded-md border", children: [
      h ? /* @__PURE__ */ l("div", { className: "flex h-12 items-center bg-gray-100 px-4", children: /* @__PURE__ */ l("p", { className: "text-xs text-gray-500", children: t }) }) : /* @__PURE__ */ l(
        "img",
        {
          onClick: u,
          src: t,
          alt: i("Selected image"),
          className: "h-auto max-h-[100px] w-full bg-gray-100 object-contain"
        }
      ),
      /* @__PURE__ */ m("div", { className: "absolute right-2 top-2 flex gap-2", children: [
        /* @__PURE__ */ l(
          M,
          {
            type: "button",
            variant: "outline",
            size: "icon",
            className: "h-8 w-8 rounded-full bg-white text-red-500",
            onClick: g,
            disabled: a,
            children: h ? /* @__PURE__ */ l(ts, { className: "h-4 w-4" }) : /* @__PURE__ */ l(aa, { className: "h-4 w-4" })
          }
        ),
        !h && /* @__PURE__ */ l(
          M,
          {
            type: "button",
            variant: "outline",
            size: "icon",
            className: "h-8 w-8 rounded-full bg-white/80 hover:bg-white/90",
            onClick: u,
            disabled: a,
            children: /* @__PURE__ */ l(ns, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }) : /* @__PURE__ */ l(
      "div",
      {
        className: `flex cursor-pointer items-center justify-center rounded-md border border-dashed p-6 ${a ? "cursor-not-allowed opacity-50" : "hover:border-gray-400"}`,
        onClick: u,
        children: /* @__PURE__ */ m("div", { className: "flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ l(ns, { className: "h-10 w-10 text-gray-400" }),
          /* @__PURE__ */ l("p", { className: "text-sm text-gray-500", children: r })
        ] })
      }
    ),
    /* @__PURE__ */ l(On, { open: o, onOpenChange: c, children: /* @__PURE__ */ m(Is, { className: "h-fit w-full max-w-7xl overflow-hidden p-0", children: [
      /* @__PURE__ */ m(Xa, { className: "hidden border-b px-4 py-2", children: [
        /* @__PURE__ */ l(ei, { children: i("Select Image") }),
        /* @__PURE__ */ l(
          M,
          {
            type: "button",
            variant: "ghost",
            size: "icon",
            className: "absolute right-4 top-2",
            onClick: f,
            children: /* @__PURE__ */ l(ts, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ l("div", { className: "h-full flex-1 p-4", children: /* @__PURE__ */ l(X, { children: /* @__PURE__ */ l(
        Hc,
        {
          close: f,
          onSelect: d,
          mode: "image",
          assetId: e
        }
      ) }) })
    ] }) })
  ] });
}, Sr = Ir(void 0), Kc = ({ children: e, config: t }) => {
  const n = {
    ...t,
    models: (t == null ? void 0 : t.models) || ii
  };
  return /* @__PURE__ */ l(Sr.Provider, { value: n, children: e });
}, Vc = () => {
  const e = Cr(Sr);
  if (e === void 0)
    throw new Error("useAIConfig must be used within AIConfigProvider");
  return e;
}, fd = () => ({ models: Vc().models }), qc = Q(() => import("./ai-panel-default-lang-DKYsNxai.js")), $c = Q(() => import("./ai-panel-other-lang-CGD89TLZ.js")), jc = () => {
  const { t: e } = ce(), [t, n] = N(""), [s, r] = N([]), [a, i] = N(!1), [o, c] = N(null), [u, f] = N(null), [d, g] = N(oi().id), { selectedLang: h, fallbackLang: y } = pe(), P = Vo(), [G] = Se(), E = G.get("page"), S = (s == null ? void 0 : s.filter((Y) => Y.role === "user").length) >= 4, T = (s == null ? void 0 : s.filter((Y) => Y.role === "user").length) >= 10;
  ae(() => {
    r([]);
  }, [h, E]);
  const D = () => {
    r([]), n(""), f(null), c(null), i(!1);
  }, x = {
    t: e,
    fetch: P,
    input: t,
    messages: s,
    setInput: n,
    isLoading: a,
    handleStop: () => {
      o && (o.abort(), c(null)), i(!1), n(""), f(null), r((Y) => {
        const se = Y[Y.length - 1];
        return se && se.role === "assistant" && se.isReasoning && se.isStreaming ? Y.slice(0, -1) : Y;
      }), B.info(e("Generation stopped"));
    },
    handleReset: D,
    setMessages: r,
    setIsLoading: i,
    currentBlock: u,
    fallbackLang: y,
    abortController: o,
    setCurrentBlock: f,
    setAbortController: c,
    forceNewConversation: T,
    suggestNewConversation: S,
    selectedModel: d,
    onModelChange: g
  };
  return /* @__PURE__ */ m(de, { children: [
    a && /* @__PURE__ */ l("div", { className: "fixed inset-0 left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center bg-transparent" }),
    /* @__PURE__ */ m("div", { className: "flex h-full w-full flex-col", children: [
      /* @__PURE__ */ m("div", { className: "flex w-full items-center justify-between", children: [
        /* @__PURE__ */ l("p", { className: "text-xs text-gray-500", children: e("Generate with AI") }),
        (s == null ? void 0 : s.length) > 0 && /* @__PURE__ */ l(M, { variant: "outline", size: "icon", onClick: D, className: "h-6 w-6", disabled: a, children: /* @__PURE__ */ l(Dn, {}) })
      ] }),
      /* @__PURE__ */ l(
        X,
        {
          fallback: /* @__PURE__ */ l("div", { className: "flex h-full w-full items-center justify-center text-xs", children: "Loading AI Panel" }),
          children: h ? /* @__PURE__ */ l($c, { ...x, selectedLang: h }) : /* @__PURE__ */ l(qc, { ...x })
        }
      )
    ] })
  ] });
}, Ss = ({
  models: e,
  onAIEvent: t,
  onSuccess: n,
  onError: s,
  onComplete: r,
  context: a,
  ...i
}) => {
  const o = {
    models: e,
    onAIEvent: t,
    onSuccess: n,
    onError: s,
    onComplete: r,
    context: a,
    ...i
  };
  return /* @__PURE__ */ l(Kc, { config: o, children: /* @__PURE__ */ l(jc, {}) });
}, Qc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AiPanelContent: Ss,
  default: Ss
}, Symbol.toStringTag, { value: "Module" })), zc = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), Ts = (e) => {
  if (!e.trim())
    return { isValid: !1, parsed: null, placeholders: [], error: { message: "JSON is empty" } };
  try {
    return { isValid: !0, parsed: JSON.parse(e), error: null, placeholders: [] };
  } catch {
  }
  const t = /{{([^{}]+)}}/g, n = [];
  let s = e, r;
  for (; (r = t.exec(e)) !== null; ) {
    const a = r[0], i = r.index, o = `"__placeholder_${n.length}__"`;
    n.push({ original: a, replaced: o, position: i }), s = s.replace(a, o);
  }
  try {
    return { isValid: !0, parsed: JSON.parse(s), error: null, placeholders: n };
  } catch (a) {
    const i = a, o = i.message.match(/position (\d+)/), c = o ? parseInt(o[1]) : void 0;
    let u, f;
    if (c !== void 0) {
      const d = s.substring(0, c).split(`
`);
      u = d.length, f = d[d.length - 1].length + 1;
    }
    return {
      isValid: !1,
      parsed: null,
      placeholders: n,
      error: {
        message: i.message,
        line: u,
        column: f,
        position: c
      }
    };
  }
}, Wc = (e, t) => {
  let s = JSON.stringify(e, null, 2);
  return t.forEach(({ original: r }, a) => {
    const i = `"__placeholder_${a}__"`, o = new RegExp(zc(i), "g");
    s = s.replace(o, r);
  }), s;
}, Yc = (e, t) => {
  if (!e) return "";
  let n = JSON.stringify(e, null, 2);
  const s = /{{([^{}]+)}}/g;
  let r;
  for (; (r = s.exec(n)) !== null; ) {
    const a = r[1], i = $(t, a, null);
    n = n.replace(r[0], i);
  }
  return n;
}, Jc = Q(() => import("./shared-json-ld-CrOxqYYe.js")), hd = ({
  value: e,
  onChange: t,
  disabled: n = !1,
  readOnly: s = !1,
  placeholder: r = "Enter JSON",
  rows: a = 6,
  id: i = "json-input",
  pageData: o = {},
  handleFieldInsert: c,
  hasJsonLdForSelectedLang: u,
  copyJsonLDFromDefaultPage: f
}) => {
  const [d, g] = N("edit"), [h, y] = N(null), [P, G] = N(""), E = Zt(null), [S] = Fn(), T = i === "jsonLD" && $(S, "flags.sharedJsonLD", !1), D = i === "jsonLD" && !u && !!f;
  ae(() => {
    e.trim() === "" && t("{}");
  }, [e, t]);
  const U = (F) => {
    if (s) return;
    const b = F.target.value;
    t(b);
  }, x = (F) => {
    if (F.key === "Tab") {
      F.preventDefault();
      const b = F.currentTarget, _ = b.selectionStart, V = b.selectionEnd;
      if (_ !== V) {
        const ie = e.substring(_, V).split(`
`);
        if (F.shiftKey) {
          const Te = ie.map((z) => z.startsWith("  ") ? z.substring(2) : z).join(`
`), Ne = e.substring(0, _) + Te + e.substring(V);
          t(Ne), setTimeout(() => {
            b.selectionStart = _, b.selectionEnd = _ + Te.length;
          }, 0);
        } else {
          const Te = ie.map((z) => `  ${z}`).join(`
`), Ne = e.substring(0, _) + Te + e.substring(V);
          t(Ne), setTimeout(() => {
            b.selectionStart = _, b.selectionEnd = _ + Te.length;
          }, 0);
        }
      } else {
        const K = e.substring(0, _) + "  " + e.substring(V);
        t(K), setTimeout(() => {
          b.selectionStart = b.selectionEnd = _ + 2;
        }, 0);
      }
    }
  };
  ae(() => {
    const F = Ts(e);
    F.isValid ? Wn(() => {
      if (y(null), F.parsed) {
        const b = Yc(F.parsed, o);
        G(b);
      } else
        G("");
    }) : Wn(() => {
      y(F.error), G("");
    });
  }, [e, o]);
  const Y = () => {
    const F = Ts(e);
    if (F.isValid && F.parsed) {
      const b = Wc(F.parsed, F.placeholders);
      t(b);
    }
  }, se = () => {
    h != null && h.position && E.current && (E.current.focus(), E.current.setSelectionRange(h.position, h.position + 1));
  };
  return /* @__PURE__ */ l(li, { fallback: /* @__PURE__ */ l("div", { children: "Some error" }), children: /* @__PURE__ */ l("div", { className: "space-y-2", children: /* @__PURE__ */ m(ti, { value: d, onValueChange: g, className: "w-full", children: [
    /* @__PURE__ */ m("div", { className: "mb-2 flex items-center justify-between", children: [
      /* @__PURE__ */ m(ni, { className: "w-max", children: [
        /* @__PURE__ */ m(dn, { value: "edit", className: "flex items-center gap-1", children: [
          /* @__PURE__ */ l(ia, { className: "h-4 w-4" }),
          /* @__PURE__ */ l("span", { children: "Edit" })
        ] }),
        /* @__PURE__ */ m(
          dn,
          {
            value: "preview",
            className: "flex items-center gap-1",
            disabled: !e.trim() || h !== null || D,
            children: [
              /* @__PURE__ */ l(oa, { className: "h-4 w-4" }),
              /* @__PURE__ */ l("span", { children: "Preview" })
            ]
          }
        ),
        T && /* @__PURE__ */ m(
          dn,
          {
            value: "shared",
            className: "flex items-center gap-1",
            disabled: !e.trim() || h !== null,
            children: [
              /* @__PURE__ */ l(la, { className: "h-4 w-4" }),
              /* @__PURE__ */ l("span", { children: "Shared" })
            ]
          }
        )
      ] }),
      D ? null : d === "edit" && !s && /* @__PURE__ */ l("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ l(
        Fc,
        {
          dataType: "value",
          data: o ?? {},
          onSelect: (F) => c && c(F, i)
        }
      ) })
    ] }),
    /* @__PURE__ */ m(fn, { value: "edit", className: "relative mt-0", children: [
      !D && d === "edit" && /* @__PURE__ */ l(Dt, { content: "Format JSON", side: "right", showTooltip: !n && !h, children: /* @__PURE__ */ l(
        M,
        {
          type: "button",
          variant: "outline",
          size: "icon",
          onClick: Y,
          className: "absolute right-1 top-1 h-6 w-6 p-1",
          disabled: !e.trim() || n || h !== null,
          children: /* @__PURE__ */ l(ca, {})
        }
      ) }),
      D ? /* @__PURE__ */ l("div", { className: "flex h-40 items-center justify-center rounded-md bg-black/20", children: /* @__PURE__ */ m("div", { className: "flex max-w-[400px] flex-col items-center gap-2 rounded-md bg-white p-4 shadow-lg", children: [
        /* @__PURE__ */ l("div", { className: "max-w-xl text-center text-xs text-gray-500", children: "JSON-LD for is not added for selected language. JSON LD will be used from default language." }),
        /* @__PURE__ */ m(M, { type: "button", variant: "default", size: "sm", onClick: f, children: [
          /* @__PURE__ */ l(Dn, {}),
          "Copy & Edit from default language"
        ] })
      ] }) }) : /* @__PURE__ */ l(
        as,
        {
          ref: E,
          id: i,
          name: i,
          className: `rounded-md border border-input text-xs ${h ? "border-red-500" : ""}`,
          onChange: U,
          onKeyDown: x,
          value: e,
          placeholder: r,
          rows: a,
          disabled: n,
          readOnly: s
        }
      ),
      h && /* @__PURE__ */ m(ma, { variant: "destructive", className: "mt-2", children: [
        /* @__PURE__ */ l(ua, { className: "h-4 w-4" }),
        /* @__PURE__ */ m(pa, { className: "flex flex-col", children: [
          /* @__PURE__ */ l("span", { className: "font-medium", children: "Invalid JSON" }),
          /* @__PURE__ */ l("span", { className: "text-sm", children: h.message }),
          h.line && h.column && /* @__PURE__ */ m("span", { className: "text-sm", children: [
            "Error at line ",
            h.line,
            ", column ",
            h.column
          ] }),
          /* @__PURE__ */ l(
            M,
            {
              type: "button",
              variant: "link",
              size: "sm",
              className: "mt-1 h-auto self-start p-0 text-sm",
              onClick: se,
              children: "Show position"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ m(fn, { value: "preview", className: "mt-0", children: [
      /* @__PURE__ */ l(as, { rows: a, value: P, readOnly: !0, className: "cursor-default bg-muted font-mono text-sm" }),
      /* @__PURE__ */ l("p", { className: "mt-1 text-xs text-muted-foreground", children: "This is how the JSON will look after placeholder substitution." })
    ] }),
    T && /* @__PURE__ */ l(fn, { value: "shared", className: "mt-0", children: /* @__PURE__ */ l(X, { children: /* @__PURE__ */ l(Jc, {}) }) })
  ] }) }) });
}, gd = (e) => {
  const t = I(), n = k();
  return le({
    queryKey: [p.GET_CHAI_USER, e],
    queryFn: async () => {
      const s = await n(t, {
        action: p.GET_CHAI_USER,
        data: { userId: e }
      }), r = (s == null ? void 0 : s.data) || {};
      return { ...r, name: r.name || r.email };
    },
    enabled: !fe(e),
    staleTime: "static"
  });
};
class Zc {
  constructor(t) {
    cn(this, "channel");
    this.channel = t;
  }
  get topic() {
    return this.channel.topic;
  }
  getState() {
    const t = this.channel.state;
    return {
      closed: "CLOSED",
      errored: "ERROR",
      joined: "JOINED",
      joining: "JOINING",
      leaving: "LEAVING"
    }[t] || "CLOSED";
  }
  async subscribe(t) {
    this.channel.subscribe((n) => {
      t(n);
    });
  }
  unsubscribe() {
    this.channel.unsubscribe();
  }
  onBroadcast(t, n) {
    this.channel.on("broadcast", { event: t }, n);
  }
  onPresence(t, n) {
    this.channel.on("presence", { event: t }, n);
  }
  async send(t, n) {
    await this.channel.send({ event: t, payload: n, type: "broadcast" });
  }
  async track(t) {
    await this.channel.track(t);
  }
  untrack() {
    this.channel.untrack();
  }
  presenceState() {
    return this.channel.presenceState();
  }
}
class Xc {
  constructor(t) {
    cn(this, "client");
    this.client = t;
  }
  channel(t, n) {
    const s = this.client.channel(t, n);
    return new Zc(s);
  }
}
function md(e) {
  return new Xc(e);
}
if (typeof window > "u")
  throw new Error("@chaibuilder/pages is not available on the server");
export {
  ee as $,
  ku as A,
  vn as B,
  xe as C,
  Vi as D,
  xu as E,
  Fi as F,
  bu as G,
  ht as H,
  Vu as I,
  qu as J,
  Su as K,
  Ht as L,
  _n as M,
  Bu as N,
  zi as O,
  Du as P,
  $u as Q,
  _u as R,
  Nu as S,
  Dt as T,
  Au as U,
  Ru as V,
  Fu as W,
  Uu as X,
  Hu as Y,
  Ku as Z,
  vu as _,
  Hl as a,
  ks as a0,
  Pu as a1,
  Qi as a2,
  Vs as a3,
  ke as a4,
  Go as a5,
  Lu as a6,
  Ut as a7,
  qi as a8,
  Mu as a9,
  Ts as aA,
  td as aB,
  rd as aC,
  ad as aD,
  nd as aE,
  el as aF,
  Jt as aG,
  zo as aH,
  xl as aI,
  id as aJ,
  _e as aK,
  cd as aL,
  Ic as aM,
  cc as aN,
  ld as aO,
  ud as aP,
  Qu as aQ,
  Ss as aR,
  Ko as aS,
  Vn as aT,
  pr as aU,
  Vo as aV,
  md as aW,
  Xc as aX,
  Cu as aa,
  Iu as ab,
  Ft as ac,
  Ni as ad,
  Ou as ae,
  gi as af,
  p as ag,
  At as ah,
  I as ai,
  k as aj,
  Nc as ak,
  he as al,
  El as am,
  Sl as an,
  gd as ao,
  En as ap,
  ue as aq,
  od as ar,
  Zo as as,
  Ie as at,
  Fn as au,
  Fc as av,
  dd as aw,
  hd as ax,
  ed as ay,
  sd as az,
  Re as b,
  zu as c,
  Wu as d,
  xt as e,
  Kn as f,
  on as g,
  Be as h,
  fd as i,
  Vc as j,
  Qo as k,
  Yu as l,
  Gc as m,
  Zu as n,
  Xu as o,
  bc as p,
  Ju as q,
  ju as r,
  J as s,
  Ks as t,
  Se as u,
  wu as v,
  H as w,
  yi as x,
  Os as y,
  Gu as z
};
