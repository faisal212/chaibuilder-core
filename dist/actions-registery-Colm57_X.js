var Mu = Object.defineProperty;
var Fu = (e, t, r) => t in e ? Mu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ae = (e, t, r) => Fu(e, typeof t != "symbol" ? t + "" : t, r);
import { noop as La, omit as ca, isEmpty as Mt, isFunction as Yn, map as Ua, uniq as Xr, set as Wn, orderBy as zu, get as Dt, has as Lu, each as Uu, first as ju, flattenDeep as ja, pick as wn, compact as Za, keys as kn } from "lodash-es";
import { a as Zu, d as Gu, f as da, g as Bu, e as Vu, h as qu, i as Hu } from "./register-partial-type-BjtdfKHE.js";
import { z as m } from "zod";
import Ju from "fs";
import Yu from "path";
import Wu from "os";
import Ku, { createHash as Xu } from "crypto";
import { drizzle as Qu } from "drizzle-orm/postgres-js";
import ec from "postgres";
import { pgSequence as Cs, pgTable as Je, timestamp as xe, text as O, numeric as _r, uuid as J, foreignKey as et, jsonb as K, boolean as er, json as Ga, doublePrecision as tc, bigint as rc } from "drizzle-orm/pg-core";
import { sql as pa, and as Z, eq as T, inArray as Tt, isNotNull as Ba, isNull as nc, or as Ps, like as ac, ilike as Va } from "drizzle-orm";
import { A as oc } from "./models-DZ9C6CvE.js";
import { f as sc } from "./core-nSRy3D7z.js";
import { randomUUID as ic } from "node:crypto";
var ks = "vercel.ai.error", lc = Symbol.for(ks), qa, Ha, H = class Ds extends (Ha = Error, qa = lc, Ha) {
  /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */
  constructor({
    name: t,
    message: r,
    cause: n
  }) {
    super(r), this[qa] = !0, this.name = t, this.cause = n;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return Ds.hasMarker(t, ks);
  }
  static hasMarker(t, r) {
    const n = Symbol.for(r);
    return t != null && typeof t == "object" && n in t && typeof t[n] == "boolean" && t[n] === !0;
  }
}, $s = "AI_APICallError", Ms = `vercel.ai.error.${$s}`, uc = Symbol.for(Ms), Ja, Ya, Le = class extends (Ya = H, Ja = uc, Ya) {
  constructor({
    message: e,
    url: t,
    requestBodyValues: r,
    statusCode: n,
    responseHeaders: a,
    responseBody: o,
    cause: s,
    isRetryable: i = n != null && (n === 408 || // request timeout
    n === 409 || // conflict
    n === 429 || // too many requests
    n >= 500),
    // server error
    data: l
  }) {
    super({ name: $s, message: e, cause: s }), this[Ja] = !0, this.url = t, this.requestBodyValues = r, this.statusCode = n, this.responseHeaders = a, this.responseBody = o, this.isRetryable = i, this.data = l;
  }
  static isInstance(e) {
    return H.hasMarker(e, Ms);
  }
}, Fs = "AI_EmptyResponseBodyError", zs = `vercel.ai.error.${Fs}`, cc = Symbol.for(zs), Wa, Ka, dc = class extends (Ka = H, Wa = cc, Ka) {
  // used in isInstance
  constructor({ message: e = "Empty response body" } = {}) {
    super({ name: Fs, message: e }), this[Wa] = !0;
  }
  static isInstance(e) {
    return H.hasMarker(e, zs);
  }
};
function or(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Ls = "AI_InvalidArgumentError", Us = `vercel.ai.error.${Ls}`, pc = Symbol.for(Us), Xa, Qa, fc = class extends (Qa = H, Xa = pc, Qa) {
  constructor({
    message: t,
    cause: r,
    argument: n
  }) {
    super({ name: Ls, message: t, cause: r }), this[Xa] = !0, this.argument = n;
  }
  static isInstance(t) {
    return H.hasMarker(t, Us);
  }
}, js = "AI_InvalidPromptError", Zs = `vercel.ai.error.${js}`, gc = Symbol.for(Zs), eo, to, Wt = class extends (to = H, eo = gc, to) {
  constructor({
    prompt: e,
    message: t,
    cause: r
  }) {
    super({ name: js, message: `Invalid prompt: ${t}`, cause: r }), this[eo] = !0, this.prompt = e;
  }
  static isInstance(e) {
    return H.hasMarker(e, Zs);
  }
}, Gs = "AI_JSONParseError", Bs = `vercel.ai.error.${Gs}`, hc = Symbol.for(Bs), ro, no, en = class extends (no = H, ro = hc, no) {
  constructor({ text: e, cause: t }) {
    super({
      name: Gs,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${or(t)}`,
      cause: t
    }), this[ro] = !0, this.text = e;
  }
  static isInstance(e) {
    return H.hasMarker(e, Bs);
  }
}, Vs = "AI_TypeValidationError", qs = `vercel.ai.error.${Vs}`, mc = Symbol.for(qs), ao, oo, Ft = class Kn extends (oo = H, ao = mc, oo) {
  constructor({ value: t, cause: r }) {
    super({
      name: Vs,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${or(r)}`,
      cause: r
    }), this[ao] = !0, this.value = t;
  }
  static isInstance(t) {
    return H.hasMarker(t, qs);
  }
  /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */
  static wrap({
    value: t,
    cause: r
  }) {
    return Kn.isInstance(r) && r.value === t ? r : new Kn({ value: t, cause: r });
  }
};
function _(e, t, r) {
  function n(i, l) {
    if (i._zod || Object.defineProperty(i, "_zod", {
      value: {
        def: l,
        constr: s,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), i._zod.traits.has(e))
      return;
    i._zod.traits.add(e), t(i, l);
    const u = s.prototype, c = Object.keys(u);
    for (let d = 0; d < c.length; d++) {
      const p = c[d];
      p in i || (i[p] = u[p].bind(i));
    }
  }
  const a = (r == null ? void 0 : r.Parent) ?? Object;
  class o extends a {
  }
  Object.defineProperty(o, "name", { value: e });
  function s(i) {
    var l;
    const u = r != null && r.Parent ? new o() : this;
    n(u, i), (l = u._zod).deferred ?? (l.deferred = []);
    for (const c of u._zod.deferred)
      c();
    return u;
  }
  return Object.defineProperty(s, "init", { value: n }), Object.defineProperty(s, Symbol.hasInstance, {
    value: (i) => {
      var l, u;
      return r != null && r.Parent && i instanceof r.Parent ? !0 : (u = (l = i == null ? void 0 : i._zod) == null ? void 0 : l.traits) == null ? void 0 : u.has(e);
    }
  }), Object.defineProperty(s, "name", { value: e }), s;
}
class Qt extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Hs extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const Js = {};
function It(e) {
  return Js;
}
function Ys(e) {
  const t = Object.values(e).filter((n) => typeof n == "number");
  return Object.entries(e).filter(([n, a]) => t.indexOf(+n) === -1).map(([n, a]) => a);
}
function Xn(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function _n(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function fa(e) {
  return e == null;
}
function ga(e) {
  const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function yc(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = t.toString();
  let a = (n.split(".")[1] || "").length;
  if (a === 0 && /\d?e-\d?/.test(n)) {
    const l = n.match(/\d?e-(\d?)/);
    l != null && l[1] && (a = Number.parseInt(l[1]));
  }
  const o = r > a ? r : a, s = Number.parseInt(e.toFixed(o).replace(".", "")), i = Number.parseInt(t.toFixed(o).replace(".", ""));
  return s % i / 10 ** o;
}
const so = Symbol("evaluating");
function W(e, t, r) {
  let n;
  Object.defineProperty(e, t, {
    get() {
      if (n !== so)
        return n === void 0 && (n = so, n = r()), n;
    },
    set(a) {
      Object.defineProperty(e, t, {
        value: a
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function Ut(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Ot(...e) {
  const t = {};
  for (const r of e) {
    const n = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, n);
  }
  return Object.defineProperties({}, t);
}
function io(e) {
  return JSON.stringify(e);
}
function vc(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Ws = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function br(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const wc = _n(() => {
  var e;
  if (typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) != null && e.includes("Cloudflare")))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function tr(e) {
  if (br(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const r = t.prototype;
  return !(br(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function Ks(e) {
  return tr(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const _c = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function rr(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Rt(e, t, r) {
  const n = new e._zod.constr(t ?? e._zod.def);
  return (!t || r != null && r.parent) && (n._zod.parent = e), n;
}
function C(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if ((t == null ? void 0 : t.message) !== void 0) {
    if ((t == null ? void 0 : t.error) !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function Tc(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const Ec = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function bc(e, t) {
  const r = e._zod.def, n = r.checks;
  if (n && n.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const o = Ot(e._zod.def, {
    get shape() {
      const s = {};
      for (const i in t) {
        if (!(i in r.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        t[i] && (s[i] = r.shape[i]);
      }
      return Ut(this, "shape", s), s;
    },
    checks: []
  });
  return Rt(e, o);
}
function Ic(e, t) {
  const r = e._zod.def, n = r.checks;
  if (n && n.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const o = Ot(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape };
      for (const i in t) {
        if (!(i in r.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        t[i] && delete s[i];
      }
      return Ut(this, "shape", s), s;
    },
    checks: []
  });
  return Rt(e, o);
}
function Sc(e, t) {
  if (!tr(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0) {
    const o = e._zod.def.shape;
    for (const s in t)
      if (Object.getOwnPropertyDescriptor(o, s) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const a = Ot(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t };
      return Ut(this, "shape", o), o;
    }
  });
  return Rt(e, a);
}
function Ac(e, t) {
  if (!tr(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = Ot(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t };
      return Ut(this, "shape", n), n;
    }
  });
  return Rt(e, r);
}
function Nc(e, t) {
  const r = Ot(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t._zod.def.shape };
      return Ut(this, "shape", n), n;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Rt(e, r);
}
function Oc(e, t, r) {
  const a = t._zod.def.checks;
  if (a && a.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const s = Ot(t._zod.def, {
    get shape() {
      const i = t._zod.def.shape, l = { ...i };
      if (r)
        for (const u in r) {
          if (!(u in i))
            throw new Error(`Unrecognized key: "${u}"`);
          r[u] && (l[u] = e ? new e({
            type: "optional",
            innerType: i[u]
          }) : i[u]);
        }
      else
        for (const u in i)
          l[u] = e ? new e({
            type: "optional",
            innerType: i[u]
          }) : i[u];
      return Ut(this, "shape", l), l;
    },
    checks: []
  });
  return Rt(t, s);
}
function Rc(e, t, r) {
  const n = Ot(t._zod.def, {
    get shape() {
      const a = t._zod.def.shape, o = { ...a };
      if (r)
        for (const s in r) {
          if (!(s in o))
            throw new Error(`Unrecognized key: "${s}"`);
          r[s] && (o[s] = new e({
            type: "nonoptional",
            innerType: a[s]
          }));
        }
      else
        for (const s in a)
          o[s] = new e({
            type: "nonoptional",
            innerType: a[s]
          });
      return Ut(this, "shape", o), o;
    }
  });
  return Rt(t, n);
}
function Kt(e, t = 0) {
  var r;
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (((r = e.issues[n]) == null ? void 0 : r.continue) !== !0)
      return !0;
  return !1;
}
function Xt(e, t) {
  return t.map((r) => {
    var n;
    return (n = r).path ?? (n.path = []), r.path.unshift(e), r;
  });
}
function Hr(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.message;
}
function St(e, t, r) {
  var a, o, s, i, l, u;
  const n = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const c = Hr((s = (o = (a = e.inst) == null ? void 0 : a._zod.def) == null ? void 0 : o.error) == null ? void 0 : s.call(o, e)) ?? Hr((i = t == null ? void 0 : t.error) == null ? void 0 : i.call(t, e)) ?? Hr((l = r.customError) == null ? void 0 : l.call(r, e)) ?? Hr((u = r.localeError) == null ? void 0 : u.call(r, e)) ?? "Invalid input";
    n.message = c;
  }
  return delete n.inst, delete n.continue, t != null && t.reportInput || delete n.input, n;
}
function ha(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Ir(...e) {
  const [t, r, n] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: r,
    inst: n
  } : { ...t };
}
const Xs = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, Xn, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Qs = _("$ZodError", Xs), ei = _("$ZodError", Xs, { Parent: Error });
function xc(e, t = (r) => r.message) {
  const r = {}, n = [];
  for (const a of e.issues)
    a.path.length > 0 ? (r[a.path[0]] = r[a.path[0]] || [], r[a.path[0]].push(t(a))) : n.push(t(a));
  return { formErrors: n, fieldErrors: r };
}
function Cc(e, t = (r) => r.message) {
  const r = { _errors: [] }, n = (a) => {
    for (const o of a.issues)
      if (o.code === "invalid_union" && o.errors.length)
        o.errors.map((s) => n({ issues: s }));
      else if (o.code === "invalid_key")
        n({ issues: o.issues });
      else if (o.code === "invalid_element")
        n({ issues: o.issues });
      else if (o.path.length === 0)
        r._errors.push(t(o));
      else {
        let s = r, i = 0;
        for (; i < o.path.length; ) {
          const l = o.path[i];
          i === o.path.length - 1 ? (s[l] = s[l] || { _errors: [] }, s[l]._errors.push(t(o))) : s[l] = s[l] || { _errors: [] }, s = s[l], i++;
        }
      }
  };
  return n(e), r;
}
const ma = (e) => (t, r, n, a) => {
  const o = n ? Object.assign(n, { async: !1 }) : { async: !1 }, s = t._zod.run({ value: r, issues: [] }, o);
  if (s instanceof Promise)
    throw new Qt();
  if (s.issues.length) {
    const i = new ((a == null ? void 0 : a.Err) ?? e)(s.issues.map((l) => St(l, o, It())));
    throw Ws(i, a == null ? void 0 : a.callee), i;
  }
  return s.value;
}, ya = (e) => async (t, r, n, a) => {
  const o = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: r, issues: [] }, o);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const i = new ((a == null ? void 0 : a.Err) ?? e)(s.issues.map((l) => St(l, o, It())));
    throw Ws(i, a == null ? void 0 : a.callee), i;
  }
  return s.value;
}, Tn = (e) => (t, r, n) => {
  const a = n ? { ...n, async: !1 } : { async: !1 }, o = t._zod.run({ value: r, issues: [] }, a);
  if (o instanceof Promise)
    throw new Qt();
  return o.issues.length ? {
    success: !1,
    error: new (e ?? Qs)(o.issues.map((s) => St(s, a, It())))
  } : { success: !0, data: o.value };
}, Pc = /* @__PURE__ */ Tn(ei), En = (e) => async (t, r, n) => {
  const a = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let o = t._zod.run({ value: r, issues: [] }, a);
  return o instanceof Promise && (o = await o), o.issues.length ? {
    success: !1,
    error: new e(o.issues.map((s) => St(s, a, It())))
  } : { success: !0, data: o.value };
}, kc = /* @__PURE__ */ En(ei), Dc = (e) => (t, r, n) => {
  const a = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return ma(e)(t, r, a);
}, $c = (e) => (t, r, n) => ma(e)(t, r, n), Mc = (e) => async (t, r, n) => {
  const a = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return ya(e)(t, r, a);
}, Fc = (e) => async (t, r, n) => ya(e)(t, r, n), zc = (e) => (t, r, n) => {
  const a = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Tn(e)(t, r, a);
}, Lc = (e) => (t, r, n) => Tn(e)(t, r, n), Uc = (e) => async (t, r, n) => {
  const a = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return En(e)(t, r, a);
}, jc = (e) => async (t, r, n) => En(e)(t, r, n), Zc = /^[cC][^\s-]{8,}$/, Gc = /^[0-9a-z]+$/, Bc = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Vc = /^[0-9a-vA-V]{20}$/, qc = /^[A-Za-z0-9]{27}$/, Hc = /^[a-zA-Z0-9_-]{21}$/, Jc = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Yc = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, lo = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Wc = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Kc = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Xc() {
  return new RegExp(Kc, "u");
}
const Qc = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ed = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, td = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, rd = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, nd = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, ti = /^[A-Za-z0-9_-]*$/, ad = /^\+[1-9]\d{6,14}$/, ri = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", od = /* @__PURE__ */ new RegExp(`^${ri}$`);
function ni(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function sd(e) {
  return new RegExp(`^${ni(e)}$`);
}
function id(e) {
  const t = ni({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const n = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${ri}T(?:${n})$`);
}
const ld = (e) => {
  const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, ud = /^-?\d+$/, ai = /^-?\d+(?:\.\d+)?$/, cd = /^(?:true|false)$/i, dd = /^null$/i, pd = /^[^A-Z]*$/, fd = /^[^a-z]*$/, Ue = /* @__PURE__ */ _("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), oi = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, si = /* @__PURE__ */ _("$ZodCheckLessThan", (e, t) => {
  Ue.init(e, t);
  const r = oi[typeof t.value];
  e._zod.onattach.push((n) => {
    const a = n._zod.bag, o = (t.inclusive ? a.maximum : a.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < o && (t.inclusive ? a.maximum = t.value : a.exclusiveMaximum = t.value);
  }), e._zod.check = (n) => {
    (t.inclusive ? n.value <= t.value : n.value < t.value) || n.issues.push({
      origin: r,
      code: "too_big",
      maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: n.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), ii = /* @__PURE__ */ _("$ZodCheckGreaterThan", (e, t) => {
  Ue.init(e, t);
  const r = oi[typeof t.value];
  e._zod.onattach.push((n) => {
    const a = n._zod.bag, o = (t.inclusive ? a.minimum : a.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > o && (t.inclusive ? a.minimum = t.value : a.exclusiveMinimum = t.value);
  }), e._zod.check = (n) => {
    (t.inclusive ? n.value >= t.value : n.value > t.value) || n.issues.push({
      origin: r,
      code: "too_small",
      minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: n.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), gd = /* @__PURE__ */ _("$ZodCheckMultipleOf", (e, t) => {
  Ue.init(e, t), e._zod.onattach.push((r) => {
    var n;
    (n = r._zod.bag).multipleOf ?? (n.multipleOf = t.value);
  }), e._zod.check = (r) => {
    if (typeof r.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % t.value === BigInt(0) : yc(r.value, t.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), hd = /* @__PURE__ */ _("$ZodCheckNumberFormat", (e, t) => {
  var s;
  Ue.init(e, t), t.format = t.format || "float64";
  const r = (s = t.format) == null ? void 0 : s.includes("int"), n = r ? "int" : "number", [a, o] = Ec[t.format];
  e._zod.onattach.push((i) => {
    const l = i._zod.bag;
    l.format = t.format, l.minimum = a, l.maximum = o, r && (l.pattern = ud);
  }), e._zod.check = (i) => {
    const l = i.value;
    if (r) {
      if (!Number.isInteger(l)) {
        i.issues.push({
          expected: n,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: l,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(l)) {
        l > 0 ? i.issues.push({
          input: l,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: n,
          inclusive: !0,
          continue: !t.abort
        }) : i.issues.push({
          input: l,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: n,
          inclusive: !0,
          continue: !t.abort
        });
        return;
      }
    }
    l < a && i.issues.push({
      origin: "number",
      input: l,
      code: "too_small",
      minimum: a,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), l > o && i.issues.push({
      origin: "number",
      input: l,
      code: "too_big",
      maximum: o,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    });
  };
}), md = /* @__PURE__ */ _("$ZodCheckMaxLength", (e, t) => {
  var r;
  Ue.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const a = n.value;
    return !fa(a) && a.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const a = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < a && (n._zod.bag.maximum = t.maximum);
  }), e._zod.check = (n) => {
    const a = n.value;
    if (a.length <= t.maximum)
      return;
    const s = ha(a);
    n.issues.push({
      origin: s,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: a,
      inst: e,
      continue: !t.abort
    });
  };
}), yd = /* @__PURE__ */ _("$ZodCheckMinLength", (e, t) => {
  var r;
  Ue.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const a = n.value;
    return !fa(a) && a.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const a = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > a && (n._zod.bag.minimum = t.minimum);
  }), e._zod.check = (n) => {
    const a = n.value;
    if (a.length >= t.minimum)
      return;
    const s = ha(a);
    n.issues.push({
      origin: s,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: a,
      inst: e,
      continue: !t.abort
    });
  };
}), vd = /* @__PURE__ */ _("$ZodCheckLengthEquals", (e, t) => {
  var r;
  Ue.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const a = n.value;
    return !fa(a) && a.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const a = n._zod.bag;
    a.minimum = t.length, a.maximum = t.length, a.length = t.length;
  }), e._zod.check = (n) => {
    const a = n.value, o = a.length;
    if (o === t.length)
      return;
    const s = ha(a), i = o > t.length;
    n.issues.push({
      origin: s,
      ...i ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), bn = /* @__PURE__ */ _("$ZodCheckStringFormat", (e, t) => {
  var r, n;
  Ue.init(e, t), e._zod.onattach.push((a) => {
    const o = a._zod.bag;
    o.format = t.format, t.pattern && (o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(t.pattern));
  }), t.pattern ? (r = e._zod).check ?? (r.check = (a) => {
    t.pattern.lastIndex = 0, !t.pattern.test(a.value) && a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: a.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (n = e._zod).check ?? (n.check = () => {
  });
}), wd = /* @__PURE__ */ _("$ZodCheckRegex", (e, t) => {
  bn.init(e, t), e._zod.check = (r) => {
    t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: r.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), _d = /* @__PURE__ */ _("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = pd), bn.init(e, t);
}), Td = /* @__PURE__ */ _("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = fd), bn.init(e, t);
}), Ed = /* @__PURE__ */ _("$ZodCheckIncludes", (e, t) => {
  Ue.init(e, t);
  const r = rr(t.includes), n = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${r}` : r);
  t.pattern = n, e._zod.onattach.push((a) => {
    const o = a._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(n);
  }), e._zod.check = (a) => {
    a.value.includes(t.includes, t.position) || a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: a.value,
      inst: e,
      continue: !t.abort
    });
  };
}), bd = /* @__PURE__ */ _("$ZodCheckStartsWith", (e, t) => {
  Ue.init(e, t);
  const r = new RegExp(`^${rr(t.prefix)}.*`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((n) => {
    const a = n._zod.bag;
    a.patterns ?? (a.patterns = /* @__PURE__ */ new Set()), a.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.startsWith(t.prefix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Id = /* @__PURE__ */ _("$ZodCheckEndsWith", (e, t) => {
  Ue.init(e, t);
  const r = new RegExp(`.*${rr(t.suffix)}$`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((n) => {
    const a = n._zod.bag;
    a.patterns ?? (a.patterns = /* @__PURE__ */ new Set()), a.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.endsWith(t.suffix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Sd = /* @__PURE__ */ _("$ZodCheckOverwrite", (e, t) => {
  Ue.init(e, t), e._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
class Ad {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const n = t.split(`
`).filter((s) => s), a = Math.min(...n.map((s) => s.length - s.trimStart().length)), o = n.map((s) => s.slice(a)).map((s) => " ".repeat(this.indent * 2) + s);
    for (const s of o)
      this.content.push(s);
  }
  compile() {
    const t = Function, r = this == null ? void 0 : this.args, a = [...((this == null ? void 0 : this.content) ?? [""]).map((o) => `  ${o}`)];
    return new t(...r, a.join(`
`));
  }
}
const Nd = {
  major: 4,
  minor: 3,
  patch: 5
}, pe = /* @__PURE__ */ _("$ZodType", (e, t) => {
  var a;
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Nd;
  const n = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && n.unshift(e);
  for (const o of n)
    for (const s of o._zod.onattach)
      s(e);
  if (n.length === 0)
    (r = e._zod).deferred ?? (r.deferred = []), (a = e._zod.deferred) == null || a.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const o = (i, l, u) => {
      let c = Kt(i), d;
      for (const p of l) {
        if (p._zod.def.when) {
          if (!p._zod.def.when(i))
            continue;
        } else if (c)
          continue;
        const y = i.issues.length, E = p._zod.check(i);
        if (E instanceof Promise && (u == null ? void 0 : u.async) === !1)
          throw new Qt();
        if (d || E instanceof Promise)
          d = (d ?? Promise.resolve()).then(async () => {
            await E, i.issues.length !== y && (c || (c = Kt(i, y)));
          });
        else {
          if (i.issues.length === y)
            continue;
          c || (c = Kt(i, y));
        }
      }
      return d ? d.then(() => i) : i;
    }, s = (i, l, u) => {
      if (Kt(i))
        return i.aborted = !0, i;
      const c = o(l, n, u);
      if (c instanceof Promise) {
        if (u.async === !1)
          throw new Qt();
        return c.then((d) => e._zod.parse(d, u));
      }
      return e._zod.parse(c, u);
    };
    e._zod.run = (i, l) => {
      if (l.skipChecks)
        return e._zod.parse(i, l);
      if (l.direction === "backward") {
        const c = e._zod.parse({ value: i.value, issues: [] }, { ...l, skipChecks: !0 });
        return c instanceof Promise ? c.then((d) => s(d, i, l)) : s(c, i, l);
      }
      const u = e._zod.parse(i, l);
      if (u instanceof Promise) {
        if (l.async === !1)
          throw new Qt();
        return u.then((c) => o(c, n, l));
      }
      return o(u, n, l);
    };
  }
  W(e, "~standard", () => ({
    validate: (o) => {
      var s;
      try {
        const i = Pc(e, o);
        return i.success ? { value: i.data } : { issues: (s = i.error) == null ? void 0 : s.issues };
      } catch {
        return kc(e, o).then((l) => {
          var u;
          return l.success ? { value: l.data } : { issues: (u = l.error) == null ? void 0 : u.issues };
        });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), va = /* @__PURE__ */ _("$ZodString", (e, t) => {
  var r;
  pe.init(e, t), e._zod.pattern = [...((r = e == null ? void 0 : e._zod.bag) == null ? void 0 : r.patterns) ?? []].pop() ?? ld(e._zod.bag), e._zod.parse = (n, a) => {
    if (t.coerce)
      try {
        n.value = String(n.value);
      } catch {
      }
    return typeof n.value == "string" || n.issues.push({
      expected: "string",
      code: "invalid_type",
      input: n.value,
      inst: e
    }), n;
  };
}), ve = /* @__PURE__ */ _("$ZodStringFormat", (e, t) => {
  bn.init(e, t), va.init(e, t);
}), Od = /* @__PURE__ */ _("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = Yc), ve.init(e, t);
}), Rd = /* @__PURE__ */ _("$ZodUUID", (e, t) => {
  if (t.version) {
    const n = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (n === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = lo(n));
  } else
    t.pattern ?? (t.pattern = lo());
  ve.init(e, t);
}), xd = /* @__PURE__ */ _("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = Wc), ve.init(e, t);
}), Cd = /* @__PURE__ */ _("$ZodURL", (e, t) => {
  ve.init(e, t), e._zod.check = (r) => {
    try {
      const n = r.value.trim(), a = new URL(n);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(a.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(a.protocol.endsWith(":") ? a.protocol.slice(0, -1) : a.protocol) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? r.value = a.href : r.value = n;
      return;
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), Pd = /* @__PURE__ */ _("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = Xc()), ve.init(e, t);
}), kd = /* @__PURE__ */ _("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = Hc), ve.init(e, t);
}), Dd = /* @__PURE__ */ _("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Zc), ve.init(e, t);
}), $d = /* @__PURE__ */ _("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Gc), ve.init(e, t);
}), Md = /* @__PURE__ */ _("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Bc), ve.init(e, t);
}), Fd = /* @__PURE__ */ _("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = Vc), ve.init(e, t);
}), zd = /* @__PURE__ */ _("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = qc), ve.init(e, t);
}), Ld = /* @__PURE__ */ _("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = id(t)), ve.init(e, t);
}), Ud = /* @__PURE__ */ _("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = od), ve.init(e, t);
}), jd = /* @__PURE__ */ _("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = sd(t)), ve.init(e, t);
}), Zd = /* @__PURE__ */ _("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Jc), ve.init(e, t);
}), Gd = /* @__PURE__ */ _("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = Qc), ve.init(e, t), e._zod.bag.format = "ipv4";
}), Bd = /* @__PURE__ */ _("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = ed), ve.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (r) => {
    try {
      new URL(`http://[${r.value}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), Vd = /* @__PURE__ */ _("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = td), ve.init(e, t);
}), qd = /* @__PURE__ */ _("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = rd), ve.init(e, t), e._zod.check = (r) => {
    const n = r.value.split("/");
    try {
      if (n.length !== 2)
        throw new Error();
      const [a, o] = n;
      if (!o)
        throw new Error();
      const s = Number(o);
      if (`${s}` !== o)
        throw new Error();
      if (s < 0 || s > 128)
        throw new Error();
      new URL(`http://[${a}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function li(e) {
  if (e === "")
    return !0;
  if (e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const Hd = /* @__PURE__ */ _("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = nd), ve.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (r) => {
    li(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function Jd(e) {
  if (!ti.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return li(r);
}
const Yd = /* @__PURE__ */ _("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = ti), ve.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (r) => {
    Jd(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Wd = /* @__PURE__ */ _("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = ad), ve.init(e, t);
});
function Kd(e, t = null) {
  try {
    const r = e.split(".");
    if (r.length !== 3)
      return !1;
    const [n] = r;
    if (!n)
      return !1;
    const a = JSON.parse(atob(n));
    return !("typ" in a && (a == null ? void 0 : a.typ) !== "JWT" || !a.alg || t && (!("alg" in a) || a.alg !== t));
  } catch {
    return !1;
  }
}
const Xd = /* @__PURE__ */ _("$ZodJWT", (e, t) => {
  ve.init(e, t), e._zod.check = (r) => {
    Kd(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ui = /* @__PURE__ */ _("$ZodNumber", (e, t) => {
  pe.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? ai, e._zod.parse = (r, n) => {
    if (t.coerce)
      try {
        r.value = Number(r.value);
      } catch {
      }
    const a = r.value;
    if (typeof a == "number" && !Number.isNaN(a) && Number.isFinite(a))
      return r;
    const o = typeof a == "number" ? Number.isNaN(a) ? "NaN" : Number.isFinite(a) ? void 0 : "Infinity" : void 0;
    return r.issues.push({
      expected: "number",
      code: "invalid_type",
      input: a,
      inst: e,
      ...o ? { received: o } : {}
    }), r;
  };
}), Qd = /* @__PURE__ */ _("$ZodNumberFormat", (e, t) => {
  hd.init(e, t), ui.init(e, t);
}), ep = /* @__PURE__ */ _("$ZodBoolean", (e, t) => {
  pe.init(e, t), e._zod.pattern = cd, e._zod.parse = (r, n) => {
    if (t.coerce)
      try {
        r.value = !!r.value;
      } catch {
      }
    const a = r.value;
    return typeof a == "boolean" || r.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: a,
      inst: e
    }), r;
  };
}), tp = /* @__PURE__ */ _("$ZodNull", (e, t) => {
  pe.init(e, t), e._zod.pattern = dd, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (r, n) => {
    const a = r.value;
    return a === null || r.issues.push({
      expected: "null",
      code: "invalid_type",
      input: a,
      inst: e
    }), r;
  };
}), rp = /* @__PURE__ */ _("$ZodAny", (e, t) => {
  pe.init(e, t), e._zod.parse = (r) => r;
}), np = /* @__PURE__ */ _("$ZodUnknown", (e, t) => {
  pe.init(e, t), e._zod.parse = (r) => r;
}), ap = /* @__PURE__ */ _("$ZodNever", (e, t) => {
  pe.init(e, t), e._zod.parse = (r, n) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
});
function uo(e, t, r) {
  e.issues.length && t.issues.push(...Xt(r, e.issues)), t.value[r] = e.value;
}
const op = /* @__PURE__ */ _("$ZodArray", (e, t) => {
  pe.init(e, t), e._zod.parse = (r, n) => {
    const a = r.value;
    if (!Array.isArray(a))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: a,
        inst: e
      }), r;
    r.value = Array(a.length);
    const o = [];
    for (let s = 0; s < a.length; s++) {
      const i = a[s], l = t.element._zod.run({
        value: i,
        issues: []
      }, n);
      l instanceof Promise ? o.push(l.then((u) => uo(u, r, s))) : uo(l, r, s);
    }
    return o.length ? Promise.all(o).then(() => r) : r;
  };
});
function tn(e, t, r, n, a) {
  if (e.issues.length) {
    if (a && !(r in n))
      return;
    t.issues.push(...Xt(r, e.issues));
  }
  e.value === void 0 ? r in n && (t.value[r] = void 0) : t.value[r] = e.value;
}
function ci(e) {
  var n, a, o, s;
  const t = Object.keys(e.shape);
  for (const i of t)
    if (!((s = (o = (a = (n = e.shape) == null ? void 0 : n[i]) == null ? void 0 : a._zod) == null ? void 0 : o.traits) != null && s.has("$ZodType")))
      throw new Error(`Invalid element at key "${i}": expected a Zod schema`);
  const r = Tc(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r)
  };
}
function di(e, t, r, n, a, o) {
  const s = [], i = a.keySet, l = a.catchall._zod, u = l.def.type, c = l.optout === "optional";
  for (const d in t) {
    if (i.has(d))
      continue;
    if (u === "never") {
      s.push(d);
      continue;
    }
    const p = l.run({ value: t[d], issues: [] }, n);
    p instanceof Promise ? e.push(p.then((y) => tn(y, r, d, t, c))) : tn(p, r, d, t, c);
  }
  return s.length && r.issues.push({
    code: "unrecognized_keys",
    keys: s,
    input: t,
    inst: o
  }), e.length ? Promise.all(e).then(() => r) : r;
}
const sp = /* @__PURE__ */ _("$ZodObject", (e, t) => {
  pe.init(e, t);
  const r = Object.getOwnPropertyDescriptor(t, "shape");
  if (!(r != null && r.get)) {
    const i = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const l = { ...i };
        return Object.defineProperty(t, "shape", {
          value: l
        }), l;
      }
    });
  }
  const n = _n(() => ci(t));
  W(e._zod, "propValues", () => {
    const i = t.shape, l = {};
    for (const u in i) {
      const c = i[u]._zod;
      if (c.values) {
        l[u] ?? (l[u] = /* @__PURE__ */ new Set());
        for (const d of c.values)
          l[u].add(d);
      }
    }
    return l;
  });
  const a = br, o = t.catchall;
  let s;
  e._zod.parse = (i, l) => {
    s ?? (s = n.value);
    const u = i.value;
    if (!a(u))
      return i.issues.push({
        expected: "object",
        code: "invalid_type",
        input: u,
        inst: e
      }), i;
    i.value = {};
    const c = [], d = s.shape;
    for (const p of s.keys) {
      const y = d[p], E = y._zod.optout === "optional", v = y._zod.run({ value: u[p], issues: [] }, l);
      v instanceof Promise ? c.push(v.then((b) => tn(b, i, p, u, E))) : tn(v, i, p, u, E);
    }
    return o ? di(c, u, i, l, n.value, e) : c.length ? Promise.all(c).then(() => i) : i;
  };
}), ip = /* @__PURE__ */ _("$ZodObjectJIT", (e, t) => {
  sp.init(e, t);
  const r = e._zod.parse, n = _n(() => ci(t)), a = (p) => {
    var g;
    const y = new Ad(["shape", "payload", "ctx"]), E = n.value, v = ($) => {
      const R = io($);
      return `shape[${R}]._zod.run({ value: input[${R}], issues: [] }, ctx)`;
    };
    y.write("const input = payload.value;");
    const b = /* @__PURE__ */ Object.create(null);
    let P = 0;
    for (const $ of E.keys)
      b[$] = `key_${P++}`;
    y.write("const newResult = {};");
    for (const $ of E.keys) {
      const R = b[$], h = io($), N = p[$], D = ((g = N == null ? void 0 : N._zod) == null ? void 0 : g.optout) === "optional";
      y.write(`const ${R} = ${v($)};`), D ? y.write(`
        if (${R}.issues.length) {
          if (${h} in input) {
            payload.issues = payload.issues.concat(${R}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${h}, ...iss.path] : [${h}]
            })));
          }
        }
        
        if (${R}.value === undefined) {
          if (${h} in input) {
            newResult[${h}] = undefined;
          }
        } else {
          newResult[${h}] = ${R}.value;
        }
        
      `) : y.write(`
        if (${R}.issues.length) {
          payload.issues = payload.issues.concat(${R}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${h}, ...iss.path] : [${h}]
          })));
        }
        
        if (${R}.value === undefined) {
          if (${h} in input) {
            newResult[${h}] = undefined;
          }
        } else {
          newResult[${h}] = ${R}.value;
        }
        
      `);
    }
    y.write("payload.value = newResult;"), y.write("return payload;");
    const k = y.compile();
    return ($, R) => k(p, $, R);
  };
  let o;
  const s = br, i = !Js.jitless, u = i && wc.value, c = t.catchall;
  let d;
  e._zod.parse = (p, y) => {
    d ?? (d = n.value);
    const E = p.value;
    return s(E) ? i && u && (y == null ? void 0 : y.async) === !1 && y.jitless !== !0 ? (o || (o = a(t.shape)), p = o(p, y), c ? di([], E, p, y, d, e) : p) : r(p, y) : (p.issues.push({
      expected: "object",
      code: "invalid_type",
      input: E,
      inst: e
    }), p);
  };
});
function co(e, t, r, n) {
  for (const o of e)
    if (o.issues.length === 0)
      return t.value = o.value, t;
  const a = e.filter((o) => !Kt(o));
  return a.length === 1 ? (t.value = a[0].value, a[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map((o) => o.issues.map((s) => St(s, n, It())))
  }), t);
}
const pi = /* @__PURE__ */ _("$ZodUnion", (e, t) => {
  pe.init(e, t), W(e._zod, "optin", () => t.options.some((a) => a._zod.optin === "optional") ? "optional" : void 0), W(e._zod, "optout", () => t.options.some((a) => a._zod.optout === "optional") ? "optional" : void 0), W(e._zod, "values", () => {
    if (t.options.every((a) => a._zod.values))
      return new Set(t.options.flatMap((a) => Array.from(a._zod.values)));
  }), W(e._zod, "pattern", () => {
    if (t.options.every((a) => a._zod.pattern)) {
      const a = t.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${a.map((o) => ga(o.source)).join("|")})$`);
    }
  });
  const r = t.options.length === 1, n = t.options[0]._zod.run;
  e._zod.parse = (a, o) => {
    if (r)
      return n(a, o);
    let s = !1;
    const i = [];
    for (const l of t.options) {
      const u = l._zod.run({
        value: a.value,
        issues: []
      }, o);
      if (u instanceof Promise)
        i.push(u), s = !0;
      else {
        if (u.issues.length === 0)
          return u;
        i.push(u);
      }
    }
    return s ? Promise.all(i).then((l) => co(l, a, e, o)) : co(i, a, e, o);
  };
}), lp = /* @__PURE__ */ _("$ZodDiscriminatedUnion", (e, t) => {
  t.inclusive = !1, pi.init(e, t);
  const r = e._zod.parse;
  W(e._zod, "propValues", () => {
    const a = {};
    for (const o of t.options) {
      const s = o._zod.propValues;
      if (!s || Object.keys(s).length === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(o)}"`);
      for (const [i, l] of Object.entries(s)) {
        a[i] || (a[i] = /* @__PURE__ */ new Set());
        for (const u of l)
          a[i].add(u);
      }
    }
    return a;
  });
  const n = _n(() => {
    var s;
    const a = t.options, o = /* @__PURE__ */ new Map();
    for (const i of a) {
      const l = (s = i._zod.propValues) == null ? void 0 : s[t.discriminator];
      if (!l || l.size === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`);
      for (const u of l) {
        if (o.has(u))
          throw new Error(`Duplicate discriminator value "${String(u)}"`);
        o.set(u, i);
      }
    }
    return o;
  });
  e._zod.parse = (a, o) => {
    const s = a.value;
    if (!br(s))
      return a.issues.push({
        code: "invalid_type",
        expected: "object",
        input: s,
        inst: e
      }), a;
    const i = n.value.get(s == null ? void 0 : s[t.discriminator]);
    return i ? i._zod.run(a, o) : t.unionFallback ? r(a, o) : (a.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: t.discriminator,
      input: s,
      path: [t.discriminator],
      inst: e
    }), a);
  };
}), up = /* @__PURE__ */ _("$ZodIntersection", (e, t) => {
  pe.init(e, t), e._zod.parse = (r, n) => {
    const a = r.value, o = t.left._zod.run({ value: a, issues: [] }, n), s = t.right._zod.run({ value: a, issues: [] }, n);
    return o instanceof Promise || s instanceof Promise ? Promise.all([o, s]).then(([l, u]) => po(r, l, u)) : po(r, o, s);
  };
});
function Qn(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (tr(e) && tr(t)) {
    const r = Object.keys(t), n = Object.keys(e).filter((o) => r.indexOf(o) !== -1), a = { ...e, ...t };
    for (const o of n) {
      const s = Qn(e[o], t[o]);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...s.mergeErrorPath]
        };
      a[o] = s.data;
    }
    return { valid: !0, data: a };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const r = [];
    for (let n = 0; n < e.length; n++) {
      const a = e[n], o = t[n], s = Qn(a, o);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [n, ...s.mergeErrorPath]
        };
      r.push(s.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function po(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  let a;
  for (const i of t.issues)
    if (i.code === "unrecognized_keys") {
      a ?? (a = i);
      for (const l of i.keys)
        n.has(l) || n.set(l, {}), n.get(l).l = !0;
    } else
      e.issues.push(i);
  for (const i of r.issues)
    if (i.code === "unrecognized_keys")
      for (const l of i.keys)
        n.has(l) || n.set(l, {}), n.get(l).r = !0;
    else
      e.issues.push(i);
  const o = [...n].filter(([, i]) => i.l && i.r).map(([i]) => i);
  if (o.length && a && e.issues.push({ ...a, keys: o }), Kt(e))
    return e;
  const s = Qn(t.value, r.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return e.value = s.data, e;
}
const cp = /* @__PURE__ */ _("$ZodRecord", (e, t) => {
  pe.init(e, t), e._zod.parse = (r, n) => {
    const a = r.value;
    if (!tr(a))
      return r.issues.push({
        expected: "record",
        code: "invalid_type",
        input: a,
        inst: e
      }), r;
    const o = [], s = t.keyType._zod.values;
    if (s) {
      r.value = {};
      const i = /* @__PURE__ */ new Set();
      for (const u of s)
        if (typeof u == "string" || typeof u == "number" || typeof u == "symbol") {
          i.add(typeof u == "number" ? u.toString() : u);
          const c = t.valueType._zod.run({ value: a[u], issues: [] }, n);
          c instanceof Promise ? o.push(c.then((d) => {
            d.issues.length && r.issues.push(...Xt(u, d.issues)), r.value[u] = d.value;
          })) : (c.issues.length && r.issues.push(...Xt(u, c.issues)), r.value[u] = c.value);
        }
      let l;
      for (const u in a)
        i.has(u) || (l = l ?? [], l.push(u));
      l && l.length > 0 && r.issues.push({
        code: "unrecognized_keys",
        input: a,
        inst: e,
        keys: l
      });
    } else {
      r.value = {};
      for (const i of Reflect.ownKeys(a)) {
        if (i === "__proto__")
          continue;
        let l = t.keyType._zod.run({ value: i, issues: [] }, n);
        if (l instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (typeof i == "string" && ai.test(i) && l.issues.length && l.issues.some((d) => d.code === "invalid_type" && d.expected === "number")) {
          const d = t.keyType._zod.run({ value: Number(i), issues: [] }, n);
          if (d instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          d.issues.length === 0 && (l = d);
        }
        if (l.issues.length) {
          t.mode === "loose" ? r.value[i] = a[i] : r.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: l.issues.map((d) => St(d, n, It())),
            input: i,
            path: [i],
            inst: e
          });
          continue;
        }
        const c = t.valueType._zod.run({ value: a[i], issues: [] }, n);
        c instanceof Promise ? o.push(c.then((d) => {
          d.issues.length && r.issues.push(...Xt(i, d.issues)), r.value[l.value] = d.value;
        })) : (c.issues.length && r.issues.push(...Xt(i, c.issues)), r.value[l.value] = c.value);
      }
    }
    return o.length ? Promise.all(o).then(() => r) : r;
  };
}), dp = /* @__PURE__ */ _("$ZodEnum", (e, t) => {
  pe.init(e, t);
  const r = Ys(t.entries), n = new Set(r);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${r.filter((a) => _c.has(typeof a)).map((a) => typeof a == "string" ? rr(a) : a.toString()).join("|")})$`), e._zod.parse = (a, o) => {
    const s = a.value;
    return n.has(s) || a.issues.push({
      code: "invalid_value",
      values: r,
      input: s,
      inst: e
    }), a;
  };
}), pp = /* @__PURE__ */ _("$ZodLiteral", (e, t) => {
  if (pe.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const r = new Set(t.values);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${t.values.map((n) => typeof n == "string" ? rr(n) : n ? rr(n.toString()) : String(n)).join("|")})$`), e._zod.parse = (n, a) => {
    const o = n.value;
    return r.has(o) || n.issues.push({
      code: "invalid_value",
      values: t.values,
      input: o,
      inst: e
    }), n;
  };
}), fp = /* @__PURE__ */ _("$ZodTransform", (e, t) => {
  pe.init(e, t), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new Hs(e.constructor.name);
    const a = t.transform(r.value, r);
    if (n.async)
      return (a instanceof Promise ? a : Promise.resolve(a)).then((s) => (r.value = s, r));
    if (a instanceof Promise)
      throw new Qt();
    return r.value = a, r;
  };
});
function fo(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const fi = /* @__PURE__ */ _("$ZodOptional", (e, t) => {
  pe.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", W(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), W(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${ga(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, n) => {
    if (t.innerType._zod.optin === "optional") {
      const a = t.innerType._zod.run(r, n);
      return a instanceof Promise ? a.then((o) => fo(o, r.value)) : fo(a, r.value);
    }
    return r.value === void 0 ? r : t.innerType._zod.run(r, n);
  };
}), gp = /* @__PURE__ */ _("$ZodExactOptional", (e, t) => {
  fi.init(e, t), W(e._zod, "values", () => t.innerType._zod.values), W(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (r, n) => t.innerType._zod.run(r, n);
}), hp = /* @__PURE__ */ _("$ZodNullable", (e, t) => {
  pe.init(e, t), W(e._zod, "optin", () => t.innerType._zod.optin), W(e._zod, "optout", () => t.innerType._zod.optout), W(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${ga(r.source)}|null)$`) : void 0;
  }), W(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, n) => r.value === null ? r : t.innerType._zod.run(r, n);
}), mp = /* @__PURE__ */ _("$ZodDefault", (e, t) => {
  pe.init(e, t), e._zod.optin = "optional", W(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    if (r.value === void 0)
      return r.value = t.defaultValue, r;
    const a = t.innerType._zod.run(r, n);
    return a instanceof Promise ? a.then((o) => go(o, t)) : go(a, t);
  };
});
function go(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const yp = /* @__PURE__ */ _("$ZodPrefault", (e, t) => {
  pe.init(e, t), e._zod.optin = "optional", W(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => (n.direction === "backward" || r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, n));
}), vp = /* @__PURE__ */ _("$ZodNonOptional", (e, t) => {
  pe.init(e, t), W(e._zod, "values", () => {
    const r = t.innerType._zod.values;
    return r ? new Set([...r].filter((n) => n !== void 0)) : void 0;
  }), e._zod.parse = (r, n) => {
    const a = t.innerType._zod.run(r, n);
    return a instanceof Promise ? a.then((o) => ho(o, e)) : ho(a, e);
  };
});
function ho(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const wp = /* @__PURE__ */ _("$ZodCatch", (e, t) => {
  pe.init(e, t), W(e._zod, "optin", () => t.innerType._zod.optin), W(e._zod, "optout", () => t.innerType._zod.optout), W(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    const a = t.innerType._zod.run(r, n);
    return a instanceof Promise ? a.then((o) => (r.value = o.value, o.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: o.issues.map((s) => St(s, n, It()))
      },
      input: r.value
    }), r.issues = []), r)) : (r.value = a.value, a.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: a.issues.map((o) => St(o, n, It()))
      },
      input: r.value
    }), r.issues = []), r);
  };
}), _p = /* @__PURE__ */ _("$ZodPipe", (e, t) => {
  pe.init(e, t), W(e._zod, "values", () => t.in._zod.values), W(e._zod, "optin", () => t.in._zod.optin), W(e._zod, "optout", () => t.out._zod.optout), W(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, n) => {
    if (n.direction === "backward") {
      const o = t.out._zod.run(r, n);
      return o instanceof Promise ? o.then((s) => Jr(s, t.in, n)) : Jr(o, t.in, n);
    }
    const a = t.in._zod.run(r, n);
    return a instanceof Promise ? a.then((o) => Jr(o, t.out, n)) : Jr(a, t.out, n);
  };
});
function Jr(e, t, r) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, r);
}
const Tp = /* @__PURE__ */ _("$ZodReadonly", (e, t) => {
  pe.init(e, t), W(e._zod, "propValues", () => t.innerType._zod.propValues), W(e._zod, "values", () => t.innerType._zod.values), W(e._zod, "optin", () => {
    var r, n;
    return (n = (r = t.innerType) == null ? void 0 : r._zod) == null ? void 0 : n.optin;
  }), W(e._zod, "optout", () => {
    var r, n;
    return (n = (r = t.innerType) == null ? void 0 : r._zod) == null ? void 0 : n.optout;
  }), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    const a = t.innerType._zod.run(r, n);
    return a instanceof Promise ? a.then(mo) : mo(a);
  };
});
function mo(e) {
  return e.value = Object.freeze(e.value), e;
}
const Ep = /* @__PURE__ */ _("$ZodLazy", (e, t) => {
  pe.init(e, t), W(e._zod, "innerType", () => t.getter()), W(e._zod, "pattern", () => {
    var r, n;
    return (n = (r = e._zod.innerType) == null ? void 0 : r._zod) == null ? void 0 : n.pattern;
  }), W(e._zod, "propValues", () => {
    var r, n;
    return (n = (r = e._zod.innerType) == null ? void 0 : r._zod) == null ? void 0 : n.propValues;
  }), W(e._zod, "optin", () => {
    var r, n;
    return ((n = (r = e._zod.innerType) == null ? void 0 : r._zod) == null ? void 0 : n.optin) ?? void 0;
  }), W(e._zod, "optout", () => {
    var r, n;
    return ((n = (r = e._zod.innerType) == null ? void 0 : r._zod) == null ? void 0 : n.optout) ?? void 0;
  }), e._zod.parse = (r, n) => e._zod.innerType._zod.run(r, n);
}), bp = /* @__PURE__ */ _("$ZodCustom", (e, t) => {
  Ue.init(e, t), pe.init(e, t), e._zod.parse = (r, n) => r, e._zod.check = (r) => {
    const n = r.value, a = t.fn(n);
    if (a instanceof Promise)
      return a.then((o) => yo(o, r, n, e));
    yo(a, r, n, e);
  };
});
function yo(e, t, r, n) {
  if (!e) {
    const a = {
      code: "custom",
      input: r,
      inst: n,
      // incorporates params.error into issue reporting
      path: [...n._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !n._zod.def.abort
      // params: inst._zod.def.params,
    };
    n._zod.def.params && (a.params = n._zod.def.params), t.issues.push(Ir(a));
  }
}
var vo;
class Ip {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...r) {
    const n = r[0];
    return this._map.set(t, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, t), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const r = this._map.get(t);
    return r && typeof r == "object" && "id" in r && this._idmap.delete(r.id), this._map.delete(t), this;
  }
  get(t) {
    const r = t._zod.parent;
    if (r) {
      const n = { ...this.get(r) ?? {} };
      delete n.id;
      const a = { ...n, ...this._map.get(t) };
      return Object.keys(a).length ? a : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function Sp() {
  return new Ip();
}
(vo = globalThis).__zod_globalRegistry ?? (vo.__zod_globalRegistry = Sp());
const vr = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function Ap(e, t) {
  return new e({
    type: "string",
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Np(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function wo(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Op(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Rp(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function xp(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Cp(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Pp(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function kp(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Dp(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function $p(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Mp(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Fp(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function zp(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Lp(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Up(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function jp(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Zp(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Gp(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Bp(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Vp(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function qp(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Hp(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Jp(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Yp(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Wp(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Kp(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Xp(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Qp(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ef(e, t) {
  return new e({
    type: "boolean",
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function tf(e, t) {
  return new e({
    type: "null",
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function rf(e) {
  return new e({
    type: "any"
  });
}
// @__NO_SIDE_EFFECTS__
function nf(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function af(e, t) {
  return new e({
    type: "never",
    ...C(t)
  });
}
// @__NO_SIDE_EFFECTS__
function _o(e, t) {
  return new si({
    check: "less_than",
    ...C(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Dn(e, t) {
  return new si({
    check: "less_than",
    ...C(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function To(e, t) {
  return new ii({
    check: "greater_than",
    ...C(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function $n(e, t) {
  return new ii({
    check: "greater_than",
    ...C(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Eo(e, t) {
  return new gd({
    check: "multiple_of",
    ...C(t),
    value: e
  });
}
// @__NO_SIDE_EFFECTS__
function gi(e, t) {
  return new md({
    check: "max_length",
    ...C(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function rn(e, t) {
  return new yd({
    check: "min_length",
    ...C(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function hi(e, t) {
  return new vd({
    check: "length_equals",
    ...C(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function of(e, t) {
  return new wd({
    check: "string_format",
    format: "regex",
    ...C(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function sf(e) {
  return new _d({
    check: "string_format",
    format: "lowercase",
    ...C(e)
  });
}
// @__NO_SIDE_EFFECTS__
function lf(e) {
  return new Td({
    check: "string_format",
    format: "uppercase",
    ...C(e)
  });
}
// @__NO_SIDE_EFFECTS__
function uf(e, t) {
  return new Ed({
    check: "string_format",
    format: "includes",
    ...C(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function cf(e, t) {
  return new bd({
    check: "string_format",
    format: "starts_with",
    ...C(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function df(e, t) {
  return new Id({
    check: "string_format",
    format: "ends_with",
    ...C(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function sr(e) {
  return new Sd({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function pf(e) {
  return /* @__PURE__ */ sr((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function ff() {
  return /* @__PURE__ */ sr((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function gf() {
  return /* @__PURE__ */ sr((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function hf() {
  return /* @__PURE__ */ sr((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function mf() {
  return /* @__PURE__ */ sr((e) => vc(e));
}
// @__NO_SIDE_EFFECTS__
function yf(e, t, r) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...C(r)
  });
}
// @__NO_SIDE_EFFECTS__
function vf(e, t, r) {
  const n = C(r);
  return n.abort ?? (n.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...n
  });
}
// @__NO_SIDE_EFFECTS__
function wf(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...C(r)
  });
}
// @__NO_SIDE_EFFECTS__
function _f(e) {
  const t = /* @__PURE__ */ Tf((r) => (r.addIssue = (n) => {
    if (typeof n == "string")
      r.issues.push(Ir(n, r.value, t._zod.def));
    else {
      const a = n;
      a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), a.input ?? (a.input = r.value), a.inst ?? (a.inst = t), a.continue ?? (a.continue = !t._zod.def.abort), r.issues.push(Ir(a));
    }
  }, e(r.value, r)));
  return t;
}
// @__NO_SIDE_EFFECTS__
function Tf(e, t) {
  const r = new Ue({
    check: "custom",
    ...C(t)
  });
  return r._zod.check = e, r;
}
function nn(e) {
  let t = (e == null ? void 0 : e.target) ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: (e == null ? void 0 : e.metadata) ?? vr,
    target: t,
    unrepresentable: (e == null ? void 0 : e.unrepresentable) ?? "throw",
    override: (e == null ? void 0 : e.override) ?? (() => {
    }),
    io: (e == null ? void 0 : e.io) ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: (e == null ? void 0 : e.cycles) ?? "ref",
    reused: (e == null ? void 0 : e.reused) ?? "inline",
    external: (e == null ? void 0 : e.external) ?? void 0
  };
}
function de(e, t, r = { path: [], schemaPath: [] }) {
  var c, d;
  var n;
  const a = e._zod.def, o = t.seen.get(e);
  if (o)
    return o.count++, r.schemaPath.includes(e) && (o.cycle = r.path), o.schema;
  const s = { schema: {}, count: 1, cycle: void 0, path: r.path };
  t.seen.set(e, s);
  const i = (d = (c = e._zod).toJSONSchema) == null ? void 0 : d.call(c);
  if (i)
    s.schema = i;
  else {
    const p = {
      ...r,
      schemaPath: [...r.schemaPath, e],
      path: r.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, s.schema, p);
    else {
      const E = s.schema, v = t.processors[a.type];
      if (!v)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${a.type}`);
      v(e, t, E, p);
    }
    const y = e._zod.parent;
    y && (s.ref || (s.ref = y), de(y, t, p), t.seen.get(y).isParent = !0);
  }
  const l = t.metadataRegistry.get(e);
  return l && Object.assign(s.schema, l), t.io === "input" && ze(e) && (delete s.schema.examples, delete s.schema.default), t.io === "input" && s.schema._prefault && ((n = s.schema).default ?? (n.default = s.schema._prefault)), delete s.schema._prefault, t.seen.get(e).schema;
}
function an(e, t) {
  var s, i, l, u;
  const r = e.seen.get(t);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const n = /* @__PURE__ */ new Map();
  for (const c of e.seen.entries()) {
    const d = (s = e.metadataRegistry.get(c[0])) == null ? void 0 : s.id;
    if (d) {
      const p = n.get(d);
      if (p && p !== c[0])
        throw new Error(`Duplicate schema id "${d}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      n.set(d, c[0]);
    }
  }
  const a = (c) => {
    var v;
    const d = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const b = (v = e.external.registry.get(c[0])) == null ? void 0 : v.id, P = e.external.uri ?? ((g) => g);
      if (b)
        return { ref: P(b) };
      const k = c[1].defId ?? c[1].schema.id ?? `schema${e.counter++}`;
      return c[1].defId = k, { defId: k, ref: `${P("__shared")}#/${d}/${k}` };
    }
    if (c[1] === r)
      return { ref: "#" };
    const y = `#/${d}/`, E = c[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: E, ref: y + E };
  }, o = (c) => {
    if (c[1].schema.$ref)
      return;
    const d = c[1], { ref: p, defId: y } = a(c);
    d.def = { ...d.schema }, y && (d.defId = y);
    const E = d.schema;
    for (const v in E)
      delete E[v];
    E.$ref = p;
  };
  if (e.cycles === "throw")
    for (const c of e.seen.entries()) {
      const d = c[1];
      if (d.cycle)
        throw new Error(`Cycle detected: #/${(i = d.cycle) == null ? void 0 : i.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const c of e.seen.entries()) {
    const d = c[1];
    if (t === c[0]) {
      o(c);
      continue;
    }
    if (e.external) {
      const y = (l = e.external.registry.get(c[0])) == null ? void 0 : l.id;
      if (t !== c[0] && y) {
        o(c);
        continue;
      }
    }
    if ((u = e.metadataRegistry.get(c[0])) == null ? void 0 : u.id) {
      o(c);
      continue;
    }
    if (d.cycle) {
      o(c);
      continue;
    }
    if (d.count > 1 && e.reused === "ref") {
      o(c);
      continue;
    }
  }
}
function on(e, t) {
  var s, i, l;
  const r = e.seen.get(t);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const n = (u) => {
    const c = e.seen.get(u);
    if (c.ref === null)
      return;
    const d = c.def ?? c.schema, p = { ...d }, y = c.ref;
    if (c.ref = null, y) {
      n(y);
      const v = e.seen.get(y), b = v.schema;
      if (b.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (d.allOf = d.allOf ?? [], d.allOf.push(b)) : Object.assign(d, b), Object.assign(d, p), u._zod.parent === y)
        for (const k in d)
          k === "$ref" || k === "allOf" || k in p || delete d[k];
      if (b.$ref)
        for (const k in d)
          k === "$ref" || k === "allOf" || k in v.def && JSON.stringify(d[k]) === JSON.stringify(v.def[k]) && delete d[k];
    }
    const E = u._zod.parent;
    if (E && E !== y) {
      n(E);
      const v = e.seen.get(E);
      if (v != null && v.schema.$ref && (d.$ref = v.schema.$ref, v.def))
        for (const b in d)
          b === "$ref" || b === "allOf" || b in v.def && JSON.stringify(d[b]) === JSON.stringify(v.def[b]) && delete d[b];
    }
    e.override({
      zodSchema: u,
      jsonSchema: d,
      path: c.path ?? []
    });
  };
  for (const u of [...e.seen.entries()].reverse())
    n(u[0]);
  const a = {};
  if (e.target === "draft-2020-12" ? a.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? a.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? a.$schema = "http://json-schema.org/draft-04/schema#" : e.target, (s = e.external) != null && s.uri) {
    const u = (i = e.external.registry.get(t)) == null ? void 0 : i.id;
    if (!u)
      throw new Error("Schema is missing an `id` property");
    a.$id = e.external.uri(u);
  }
  Object.assign(a, r.def ?? r.schema);
  const o = ((l = e.external) == null ? void 0 : l.defs) ?? {};
  for (const u of e.seen.entries()) {
    const c = u[1];
    c.def && c.defId && (o[c.defId] = c.def);
  }
  e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? a.$defs = o : a.definitions = o);
  try {
    const u = JSON.parse(JSON.stringify(a));
    return Object.defineProperty(u, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: sn(t, "input", e.processors),
          output: sn(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), u;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function ze(e, t) {
  const r = t ?? { seen: /* @__PURE__ */ new Set() };
  if (r.seen.has(e))
    return !1;
  r.seen.add(e);
  const n = e._zod.def;
  if (n.type === "transform")
    return !0;
  if (n.type === "array")
    return ze(n.element, r);
  if (n.type === "set")
    return ze(n.valueType, r);
  if (n.type === "lazy")
    return ze(n.getter(), r);
  if (n.type === "promise" || n.type === "optional" || n.type === "nonoptional" || n.type === "nullable" || n.type === "readonly" || n.type === "default" || n.type === "prefault")
    return ze(n.innerType, r);
  if (n.type === "intersection")
    return ze(n.left, r) || ze(n.right, r);
  if (n.type === "record" || n.type === "map")
    return ze(n.keyType, r) || ze(n.valueType, r);
  if (n.type === "pipe")
    return ze(n.in, r) || ze(n.out, r);
  if (n.type === "object") {
    for (const a in n.shape)
      if (ze(n.shape[a], r))
        return !0;
    return !1;
  }
  if (n.type === "union") {
    for (const a of n.options)
      if (ze(a, r))
        return !0;
    return !1;
  }
  if (n.type === "tuple") {
    for (const a of n.items)
      if (ze(a, r))
        return !0;
    return !!(n.rest && ze(n.rest, r));
  }
  return !1;
}
const Ef = (e, t = {}) => (r) => {
  const n = nn({ ...r, processors: t });
  return de(e, n), an(n, e), on(n, e);
}, sn = (e, t, r = {}) => (n) => {
  const { libraryOptions: a, target: o } = n ?? {}, s = nn({ ...a ?? {}, target: o, io: t, processors: r });
  return de(e, s), an(s, e), on(s, e);
}, bf = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, mi = (e, t, r, n) => {
  const a = r;
  a.type = "string";
  const { minimum: o, maximum: s, format: i, patterns: l, contentEncoding: u } = e._zod.bag;
  if (typeof o == "number" && (a.minLength = o), typeof s == "number" && (a.maxLength = s), i && (a.format = bf[i] ?? i, a.format === "" && delete a.format, i === "time" && delete a.format), u && (a.contentEncoding = u), l && l.size > 0) {
    const c = [...l];
    c.length === 1 ? a.pattern = c[0].source : c.length > 1 && (a.allOf = [
      ...c.map((d) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: d.source
      }))
    ]);
  }
}, yi = (e, t, r, n) => {
  const a = r, { minimum: o, maximum: s, format: i, multipleOf: l, exclusiveMaximum: u, exclusiveMinimum: c } = e._zod.bag;
  typeof i == "string" && i.includes("int") ? a.type = "integer" : a.type = "number", typeof c == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (a.minimum = c, a.exclusiveMinimum = !0) : a.exclusiveMinimum = c), typeof o == "number" && (a.minimum = o, typeof c == "number" && t.target !== "draft-04" && (c >= o ? delete a.minimum : delete a.exclusiveMinimum)), typeof u == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (a.maximum = u, a.exclusiveMaximum = !0) : a.exclusiveMaximum = u), typeof s == "number" && (a.maximum = s, typeof u == "number" && t.target !== "draft-04" && (u <= s ? delete a.maximum : delete a.exclusiveMaximum)), typeof l == "number" && (a.multipleOf = l);
}, vi = (e, t, r, n) => {
  r.type = "boolean";
}, If = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("BigInt cannot be represented in JSON Schema");
}, Sf = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Symbols cannot be represented in JSON Schema");
}, wi = (e, t, r, n) => {
  t.target === "openapi-3.0" ? (r.type = "string", r.nullable = !0, r.enum = [null]) : r.type = "null";
}, Af = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Undefined cannot be represented in JSON Schema");
}, Nf = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Void cannot be represented in JSON Schema");
}, _i = (e, t, r, n) => {
  r.not = {};
}, Ti = (e, t, r, n) => {
}, Ei = (e, t, r, n) => {
}, Of = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Date cannot be represented in JSON Schema");
}, bi = (e, t, r, n) => {
  const a = e._zod.def, o = Ys(a.entries);
  o.every((s) => typeof s == "number") && (r.type = "number"), o.every((s) => typeof s == "string") && (r.type = "string"), r.enum = o;
}, Ii = (e, t, r, n) => {
  const a = e._zod.def, o = [];
  for (const s of a.values)
    if (s === void 0) {
      if (t.unrepresentable === "throw")
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof s == "bigint") {
      if (t.unrepresentable === "throw")
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      o.push(Number(s));
    } else
      o.push(s);
  if (o.length !== 0) if (o.length === 1) {
    const s = o[0];
    r.type = s === null ? "null" : typeof s, t.target === "draft-04" || t.target === "openapi-3.0" ? r.enum = [s] : r.const = s;
  } else
    o.every((s) => typeof s == "number") && (r.type = "number"), o.every((s) => typeof s == "string") && (r.type = "string"), o.every((s) => typeof s == "boolean") && (r.type = "boolean"), o.every((s) => s === null) && (r.type = "null"), r.enum = o;
}, Rf = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("NaN cannot be represented in JSON Schema");
}, xf = (e, t, r, n) => {
  const a = r, o = e._zod.pattern;
  if (!o)
    throw new Error("Pattern not found in template literal");
  a.type = "string", a.pattern = o.source;
}, Cf = (e, t, r, n) => {
  const a = r, o = {
    type: "string",
    format: "binary",
    contentEncoding: "binary"
  }, { minimum: s, maximum: i, mime: l } = e._zod.bag;
  s !== void 0 && (o.minLength = s), i !== void 0 && (o.maxLength = i), l ? l.length === 1 ? (o.contentMediaType = l[0], Object.assign(a, o)) : (Object.assign(a, o), a.anyOf = l.map((u) => ({ contentMediaType: u }))) : Object.assign(a, o);
}, Pf = (e, t, r, n) => {
  r.type = "boolean";
}, Si = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, kf = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Function types cannot be represented in JSON Schema");
}, Ai = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, Df = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Map cannot be represented in JSON Schema");
}, $f = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Set cannot be represented in JSON Schema");
}, Ni = (e, t, r, n) => {
  const a = r, o = e._zod.def, { minimum: s, maximum: i } = e._zod.bag;
  typeof s == "number" && (a.minItems = s), typeof i == "number" && (a.maxItems = i), a.type = "array", a.items = de(o.element, t, { ...n, path: [...n.path, "items"] });
}, Oi = (e, t, r, n) => {
  var u;
  const a = r, o = e._zod.def;
  a.type = "object", a.properties = {};
  const s = o.shape;
  for (const c in s)
    a.properties[c] = de(s[c], t, {
      ...n,
      path: [...n.path, "properties", c]
    });
  const i = new Set(Object.keys(s)), l = new Set([...i].filter((c) => {
    const d = o.shape[c]._zod;
    return t.io === "input" ? d.optin === void 0 : d.optout === void 0;
  }));
  l.size > 0 && (a.required = Array.from(l)), ((u = o.catchall) == null ? void 0 : u._zod.def.type) === "never" ? a.additionalProperties = !1 : o.catchall ? o.catchall && (a.additionalProperties = de(o.catchall, t, {
    ...n,
    path: [...n.path, "additionalProperties"]
  })) : t.io === "output" && (a.additionalProperties = !1);
}, Ri = (e, t, r, n) => {
  const a = e._zod.def, o = a.inclusive === !1, s = a.options.map((i, l) => de(i, t, {
    ...n,
    path: [...n.path, o ? "oneOf" : "anyOf", l]
  }));
  o ? r.oneOf = s : r.anyOf = s;
}, xi = (e, t, r, n) => {
  const a = e._zod.def, o = de(a.left, t, {
    ...n,
    path: [...n.path, "allOf", 0]
  }), s = de(a.right, t, {
    ...n,
    path: [...n.path, "allOf", 1]
  }), i = (u) => "allOf" in u && Object.keys(u).length === 1, l = [
    ...i(o) ? o.allOf : [o],
    ...i(s) ? s.allOf : [s]
  ];
  r.allOf = l;
}, Mf = (e, t, r, n) => {
  const a = r, o = e._zod.def;
  a.type = "array";
  const s = t.target === "draft-2020-12" ? "prefixItems" : "items", i = t.target === "draft-2020-12" || t.target === "openapi-3.0" ? "items" : "additionalItems", l = o.items.map((p, y) => de(p, t, {
    ...n,
    path: [...n.path, s, y]
  })), u = o.rest ? de(o.rest, t, {
    ...n,
    path: [...n.path, i, ...t.target === "openapi-3.0" ? [o.items.length] : []]
  }) : null;
  t.target === "draft-2020-12" ? (a.prefixItems = l, u && (a.items = u)) : t.target === "openapi-3.0" ? (a.items = {
    anyOf: l
  }, u && a.items.anyOf.push(u), a.minItems = l.length, u || (a.maxItems = l.length)) : (a.items = l, u && (a.additionalItems = u));
  const { minimum: c, maximum: d } = e._zod.bag;
  typeof c == "number" && (a.minItems = c), typeof d == "number" && (a.maxItems = d);
}, Ci = (e, t, r, n) => {
  const a = r, o = e._zod.def;
  a.type = "object";
  const s = o.keyType, i = s._zod.bag, l = i == null ? void 0 : i.patterns;
  if (o.mode === "loose" && l && l.size > 0) {
    const c = de(o.valueType, t, {
      ...n,
      path: [...n.path, "patternProperties", "*"]
    });
    a.patternProperties = {};
    for (const d of l)
      a.patternProperties[d.source] = c;
  } else
    (t.target === "draft-07" || t.target === "draft-2020-12") && (a.propertyNames = de(o.keyType, t, {
      ...n,
      path: [...n.path, "propertyNames"]
    })), a.additionalProperties = de(o.valueType, t, {
      ...n,
      path: [...n.path, "additionalProperties"]
    });
  const u = s._zod.values;
  if (u) {
    const c = [...u].filter((d) => typeof d == "string" || typeof d == "number");
    c.length > 0 && (a.required = c);
  }
}, Pi = (e, t, r, n) => {
  const a = e._zod.def, o = de(a.innerType, t, n), s = t.seen.get(e);
  t.target === "openapi-3.0" ? (s.ref = a.innerType, r.nullable = !0) : r.anyOf = [o, { type: "null" }];
}, ki = (e, t, r, n) => {
  const a = e._zod.def;
  de(a.innerType, t, n);
  const o = t.seen.get(e);
  o.ref = a.innerType;
}, Di = (e, t, r, n) => {
  const a = e._zod.def;
  de(a.innerType, t, n);
  const o = t.seen.get(e);
  o.ref = a.innerType, r.default = JSON.parse(JSON.stringify(a.defaultValue));
}, $i = (e, t, r, n) => {
  const a = e._zod.def;
  de(a.innerType, t, n);
  const o = t.seen.get(e);
  o.ref = a.innerType, t.io === "input" && (r._prefault = JSON.parse(JSON.stringify(a.defaultValue)));
}, Mi = (e, t, r, n) => {
  const a = e._zod.def;
  de(a.innerType, t, n);
  const o = t.seen.get(e);
  o.ref = a.innerType;
  let s;
  try {
    s = a.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  r.default = s;
}, Fi = (e, t, r, n) => {
  const a = e._zod.def, o = t.io === "input" ? a.in._zod.def.type === "transform" ? a.out : a.in : a.out;
  de(o, t, n);
  const s = t.seen.get(e);
  s.ref = o;
}, zi = (e, t, r, n) => {
  const a = e._zod.def;
  de(a.innerType, t, n);
  const o = t.seen.get(e);
  o.ref = a.innerType, r.readOnly = !0;
}, Ff = (e, t, r, n) => {
  const a = e._zod.def;
  de(a.innerType, t, n);
  const o = t.seen.get(e);
  o.ref = a.innerType;
}, wa = (e, t, r, n) => {
  const a = e._zod.def;
  de(a.innerType, t, n);
  const o = t.seen.get(e);
  o.ref = a.innerType;
}, Li = (e, t, r, n) => {
  const a = e._zod.innerType;
  de(a, t, n);
  const o = t.seen.get(e);
  o.ref = a;
}, bo = {
  string: mi,
  number: yi,
  boolean: vi,
  bigint: If,
  symbol: Sf,
  null: wi,
  undefined: Af,
  void: Nf,
  never: _i,
  any: Ti,
  unknown: Ei,
  date: Of,
  enum: bi,
  literal: Ii,
  nan: Rf,
  template_literal: xf,
  file: Cf,
  success: Pf,
  custom: Si,
  function: kf,
  transform: Ai,
  map: Df,
  set: $f,
  array: Ni,
  object: Oi,
  union: Ri,
  intersection: xi,
  tuple: Mf,
  record: Ci,
  nullable: Pi,
  nonoptional: ki,
  default: Di,
  prefault: $i,
  catch: Mi,
  pipe: Fi,
  readonly: zi,
  promise: Ff,
  optional: wa,
  lazy: Li
};
function zf(e, t) {
  if ("_idmap" in e) {
    const n = e, a = nn({ ...t, processors: bo }), o = {};
    for (const l of n._idmap.entries()) {
      const [u, c] = l;
      de(c, a);
    }
    const s = {}, i = {
      registry: n,
      uri: t == null ? void 0 : t.uri,
      defs: o
    };
    a.external = i;
    for (const l of n._idmap.entries()) {
      const [u, c] = l;
      an(a, c), s[u] = on(a, c);
    }
    if (Object.keys(o).length > 0) {
      const l = a.target === "draft-2020-12" ? "$defs" : "definitions";
      s.__shared = {
        [l]: o
      };
    }
    return { schemas: s };
  }
  const r = nn({ ...t, processors: bo });
  return de(e, r), an(r, e), on(r, e);
}
const Lf = /* @__PURE__ */ _("ZodISODateTime", (e, t) => {
  Ld.init(e, t), _e.init(e, t);
});
function Uf(e) {
  return /* @__PURE__ */ Jp(Lf, e);
}
const jf = /* @__PURE__ */ _("ZodISODate", (e, t) => {
  Ud.init(e, t), _e.init(e, t);
});
function Zf(e) {
  return /* @__PURE__ */ Yp(jf, e);
}
const Gf = /* @__PURE__ */ _("ZodISOTime", (e, t) => {
  jd.init(e, t), _e.init(e, t);
});
function Bf(e) {
  return /* @__PURE__ */ Wp(Gf, e);
}
const Vf = /* @__PURE__ */ _("ZodISODuration", (e, t) => {
  Zd.init(e, t), _e.init(e, t);
});
function qf(e) {
  return /* @__PURE__ */ Kp(Vf, e);
}
const Hf = (e, t) => {
  Qs.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => Cc(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => xc(e, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        e.issues.push(r), e.message = JSON.stringify(e.issues, Xn, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        e.issues.push(...r), e.message = JSON.stringify(e.issues, Xn, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, Ye = _("ZodError", Hf, {
  Parent: Error
}), Jf = /* @__PURE__ */ ma(Ye), Yf = /* @__PURE__ */ ya(Ye), Wf = /* @__PURE__ */ Tn(Ye), Ui = /* @__PURE__ */ En(Ye), Kf = /* @__PURE__ */ Dc(Ye), Xf = /* @__PURE__ */ $c(Ye), Qf = /* @__PURE__ */ Mc(Ye), eg = /* @__PURE__ */ Fc(Ye), tg = /* @__PURE__ */ zc(Ye), rg = /* @__PURE__ */ Lc(Ye), ng = /* @__PURE__ */ Uc(Ye), ag = /* @__PURE__ */ jc(Ye), fe = /* @__PURE__ */ _("ZodType", (e, t) => (pe.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: sn(e, "input"),
    output: sn(e, "output")
  }
}), e.toJSONSchema = Ef(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...r) => e.clone(Ot(t, {
  checks: [
    ...t.checks ?? [],
    ...r.map((n) => typeof n == "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (r, n) => Rt(e, r, n), e.brand = () => e, e.register = ((r, n) => (r.add(e, n), e)), e.parse = (r, n) => Jf(e, r, n, { callee: e.parse }), e.safeParse = (r, n) => Wf(e, r, n), e.parseAsync = async (r, n) => Yf(e, r, n, { callee: e.parseAsync }), e.safeParseAsync = async (r, n) => Ui(e, r, n), e.spa = e.safeParseAsync, e.encode = (r, n) => Kf(e, r, n), e.decode = (r, n) => Xf(e, r, n), e.encodeAsync = async (r, n) => Qf(e, r, n), e.decodeAsync = async (r, n) => eg(e, r, n), e.safeEncode = (r, n) => tg(e, r, n), e.safeDecode = (r, n) => rg(e, r, n), e.safeEncodeAsync = async (r, n) => ng(e, r, n), e.safeDecodeAsync = async (r, n) => ag(e, r, n), e.refine = (r, n) => e.check(nh(r, n)), e.superRefine = (r) => e.check(ah(r)), e.overwrite = (r) => e.check(/* @__PURE__ */ sr(r)), e.optional = () => Ao(e), e.exactOptional = () => Zg(e), e.nullable = () => No(e), e.nullish = () => Ao(No(e)), e.nonoptional = (r) => Jg(e, r), e.array = () => Ge(e), e.or = (r) => $e([e, r]), e.and = (r) => Mg(e, r), e.transform = (r) => Oo(e, Ug(r)), e.default = (r) => Vg(e, r), e.prefault = (r) => Hg(e, r), e.catch = (r) => Wg(e, r), e.pipe = (r) => Oo(e, r), e.readonly = () => Qg(e), e.describe = (r) => {
  const n = e.clone();
  return vr.add(n, { description: r }), n;
}, Object.defineProperty(e, "description", {
  get() {
    var r;
    return (r = vr.get(e)) == null ? void 0 : r.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0)
    return vr.get(e);
  const n = e.clone();
  return vr.add(n, r[0]), n;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (r) => r(e), e)), ji = /* @__PURE__ */ _("_ZodString", (e, t) => {
  va.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (n, a, o) => mi(e, n, a);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...n) => e.check(/* @__PURE__ */ of(...n)), e.includes = (...n) => e.check(/* @__PURE__ */ uf(...n)), e.startsWith = (...n) => e.check(/* @__PURE__ */ cf(...n)), e.endsWith = (...n) => e.check(/* @__PURE__ */ df(...n)), e.min = (...n) => e.check(/* @__PURE__ */ rn(...n)), e.max = (...n) => e.check(/* @__PURE__ */ gi(...n)), e.length = (...n) => e.check(/* @__PURE__ */ hi(...n)), e.nonempty = (...n) => e.check(/* @__PURE__ */ rn(1, ...n)), e.lowercase = (n) => e.check(/* @__PURE__ */ sf(n)), e.uppercase = (n) => e.check(/* @__PURE__ */ lf(n)), e.trim = () => e.check(/* @__PURE__ */ ff()), e.normalize = (...n) => e.check(/* @__PURE__ */ pf(...n)), e.toLowerCase = () => e.check(/* @__PURE__ */ gf()), e.toUpperCase = () => e.check(/* @__PURE__ */ hf()), e.slugify = () => e.check(/* @__PURE__ */ mf());
}), og = /* @__PURE__ */ _("ZodString", (e, t) => {
  va.init(e, t), ji.init(e, t), e.email = (r) => e.check(/* @__PURE__ */ Np(sg, r)), e.url = (r) => e.check(/* @__PURE__ */ Pp(ig, r)), e.jwt = (r) => e.check(/* @__PURE__ */ Hp(Eg, r)), e.emoji = (r) => e.check(/* @__PURE__ */ kp(lg, r)), e.guid = (r) => e.check(/* @__PURE__ */ wo(Io, r)), e.uuid = (r) => e.check(/* @__PURE__ */ Op(Yr, r)), e.uuidv4 = (r) => e.check(/* @__PURE__ */ Rp(Yr, r)), e.uuidv6 = (r) => e.check(/* @__PURE__ */ xp(Yr, r)), e.uuidv7 = (r) => e.check(/* @__PURE__ */ Cp(Yr, r)), e.nanoid = (r) => e.check(/* @__PURE__ */ Dp(ug, r)), e.guid = (r) => e.check(/* @__PURE__ */ wo(Io, r)), e.cuid = (r) => e.check(/* @__PURE__ */ $p(cg, r)), e.cuid2 = (r) => e.check(/* @__PURE__ */ Mp(dg, r)), e.ulid = (r) => e.check(/* @__PURE__ */ Fp(pg, r)), e.base64 = (r) => e.check(/* @__PURE__ */ Bp(wg, r)), e.base64url = (r) => e.check(/* @__PURE__ */ Vp(_g, r)), e.xid = (r) => e.check(/* @__PURE__ */ zp(fg, r)), e.ksuid = (r) => e.check(/* @__PURE__ */ Lp(gg, r)), e.ipv4 = (r) => e.check(/* @__PURE__ */ Up(hg, r)), e.ipv6 = (r) => e.check(/* @__PURE__ */ jp(mg, r)), e.cidrv4 = (r) => e.check(/* @__PURE__ */ Zp(yg, r)), e.cidrv6 = (r) => e.check(/* @__PURE__ */ Gp(vg, r)), e.e164 = (r) => e.check(/* @__PURE__ */ qp(Tg, r)), e.datetime = (r) => e.check(Uf(r)), e.date = (r) => e.check(Zf(r)), e.time = (r) => e.check(Bf(r)), e.duration = (r) => e.check(qf(r));
});
function x(e) {
  return /* @__PURE__ */ Ap(og, e);
}
const _e = /* @__PURE__ */ _("ZodStringFormat", (e, t) => {
  ve.init(e, t), ji.init(e, t);
}), sg = /* @__PURE__ */ _("ZodEmail", (e, t) => {
  xd.init(e, t), _e.init(e, t);
}), Io = /* @__PURE__ */ _("ZodGUID", (e, t) => {
  Od.init(e, t), _e.init(e, t);
}), Yr = /* @__PURE__ */ _("ZodUUID", (e, t) => {
  Rd.init(e, t), _e.init(e, t);
}), ig = /* @__PURE__ */ _("ZodURL", (e, t) => {
  Cd.init(e, t), _e.init(e, t);
}), lg = /* @__PURE__ */ _("ZodEmoji", (e, t) => {
  Pd.init(e, t), _e.init(e, t);
}), ug = /* @__PURE__ */ _("ZodNanoID", (e, t) => {
  kd.init(e, t), _e.init(e, t);
}), cg = /* @__PURE__ */ _("ZodCUID", (e, t) => {
  Dd.init(e, t), _e.init(e, t);
}), dg = /* @__PURE__ */ _("ZodCUID2", (e, t) => {
  $d.init(e, t), _e.init(e, t);
}), pg = /* @__PURE__ */ _("ZodULID", (e, t) => {
  Md.init(e, t), _e.init(e, t);
}), fg = /* @__PURE__ */ _("ZodXID", (e, t) => {
  Fd.init(e, t), _e.init(e, t);
}), gg = /* @__PURE__ */ _("ZodKSUID", (e, t) => {
  zd.init(e, t), _e.init(e, t);
}), hg = /* @__PURE__ */ _("ZodIPv4", (e, t) => {
  Gd.init(e, t), _e.init(e, t);
}), mg = /* @__PURE__ */ _("ZodIPv6", (e, t) => {
  Bd.init(e, t), _e.init(e, t);
}), yg = /* @__PURE__ */ _("ZodCIDRv4", (e, t) => {
  Vd.init(e, t), _e.init(e, t);
}), vg = /* @__PURE__ */ _("ZodCIDRv6", (e, t) => {
  qd.init(e, t), _e.init(e, t);
}), wg = /* @__PURE__ */ _("ZodBase64", (e, t) => {
  Hd.init(e, t), _e.init(e, t);
}), _g = /* @__PURE__ */ _("ZodBase64URL", (e, t) => {
  Yd.init(e, t), _e.init(e, t);
}), Tg = /* @__PURE__ */ _("ZodE164", (e, t) => {
  Wd.init(e, t), _e.init(e, t);
}), Eg = /* @__PURE__ */ _("ZodJWT", (e, t) => {
  Xd.init(e, t), _e.init(e, t);
}), Zi = /* @__PURE__ */ _("ZodNumber", (e, t) => {
  ui.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (n, a, o) => yi(e, n, a), e.gt = (n, a) => e.check(/* @__PURE__ */ To(n, a)), e.gte = (n, a) => e.check(/* @__PURE__ */ $n(n, a)), e.min = (n, a) => e.check(/* @__PURE__ */ $n(n, a)), e.lt = (n, a) => e.check(/* @__PURE__ */ _o(n, a)), e.lte = (n, a) => e.check(/* @__PURE__ */ Dn(n, a)), e.max = (n, a) => e.check(/* @__PURE__ */ Dn(n, a)), e.int = (n) => e.check(So(n)), e.safe = (n) => e.check(So(n)), e.positive = (n) => e.check(/* @__PURE__ */ To(0, n)), e.nonnegative = (n) => e.check(/* @__PURE__ */ $n(0, n)), e.negative = (n) => e.check(/* @__PURE__ */ _o(0, n)), e.nonpositive = (n) => e.check(/* @__PURE__ */ Dn(0, n)), e.multipleOf = (n, a) => e.check(/* @__PURE__ */ Eo(n, a)), e.step = (n, a) => e.check(/* @__PURE__ */ Eo(n, a)), e.finite = () => e;
  const r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), e.isFinite = !0, e.format = r.format ?? null;
});
function ln(e) {
  return /* @__PURE__ */ Xp(Zi, e);
}
const bg = /* @__PURE__ */ _("ZodNumberFormat", (e, t) => {
  Qd.init(e, t), Zi.init(e, t);
});
function So(e) {
  return /* @__PURE__ */ Qp(bg, e);
}
const Ig = /* @__PURE__ */ _("ZodBoolean", (e, t) => {
  ep.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => vi(e, r, n);
});
function _a(e) {
  return /* @__PURE__ */ ef(Ig, e);
}
const Sg = /* @__PURE__ */ _("ZodNull", (e, t) => {
  tp.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => wi(e, r, n);
});
function Ag(e) {
  return /* @__PURE__ */ tf(Sg, e);
}
const Ng = /* @__PURE__ */ _("ZodAny", (e, t) => {
  rp.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => Ti();
});
function Et() {
  return /* @__PURE__ */ rf(Ng);
}
const Og = /* @__PURE__ */ _("ZodUnknown", (e, t) => {
  np.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => Ei();
});
function zt() {
  return /* @__PURE__ */ nf(Og);
}
const Rg = /* @__PURE__ */ _("ZodNever", (e, t) => {
  ap.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => _i(e, r, n);
});
function xg(e) {
  return /* @__PURE__ */ af(Rg, e);
}
const Cg = /* @__PURE__ */ _("ZodArray", (e, t) => {
  op.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => Ni(e, r, n, a), e.element = t.element, e.min = (r, n) => e.check(/* @__PURE__ */ rn(r, n)), e.nonempty = (r) => e.check(/* @__PURE__ */ rn(1, r)), e.max = (r, n) => e.check(/* @__PURE__ */ gi(r, n)), e.length = (r, n) => e.check(/* @__PURE__ */ hi(r, n)), e.unwrap = () => e.element;
});
function Ge(e, t) {
  return /* @__PURE__ */ yf(Cg, e, t);
}
const Pg = /* @__PURE__ */ _("ZodObject", (e, t) => {
  ip.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => Oi(e, r, n, a), W(e, "shape", () => t.shape), e.keyof = () => Bi(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: zt() }), e.loose = () => e.clone({ ...e._zod.def, catchall: zt() }), e.strict = () => e.clone({ ...e._zod.def, catchall: xg() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => Sc(e, r), e.safeExtend = (r) => Ac(e, r), e.merge = (r) => Nc(e, r), e.pick = (r) => bc(e, r), e.omit = (r) => Ic(e, r), e.partial = (...r) => Oc(Vi, e, r[0]), e.required = (...r) => Rc(qi, e, r[0]);
});
function B(e, t) {
  const r = {
    type: "object",
    shape: e ?? {},
    ...C(t)
  };
  return new Pg(r);
}
const Gi = /* @__PURE__ */ _("ZodUnion", (e, t) => {
  pi.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => Ri(e, r, n, a), e.options = t.options;
});
function $e(e, t) {
  return new Gi({
    type: "union",
    options: e,
    ...C(t)
  });
}
const kg = /* @__PURE__ */ _("ZodDiscriminatedUnion", (e, t) => {
  Gi.init(e, t), lp.init(e, t);
});
function Dg(e, t, r) {
  return new kg({
    type: "union",
    options: t,
    discriminator: e,
    ...C(r)
  });
}
const $g = /* @__PURE__ */ _("ZodIntersection", (e, t) => {
  up.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => xi(e, r, n, a);
});
function Mg(e, t) {
  return new $g({
    type: "intersection",
    left: e,
    right: t
  });
}
const Fg = /* @__PURE__ */ _("ZodRecord", (e, t) => {
  cp.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => Ci(e, r, n, a), e.keyType = t.keyType, e.valueType = t.valueType;
});
function At(e, t, r) {
  return new Fg({
    type: "record",
    keyType: e,
    valueType: t,
    ...C(r)
  });
}
const ea = /* @__PURE__ */ _("ZodEnum", (e, t) => {
  dp.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (n, a, o) => bi(e, n, a), e.enum = t.entries, e.options = Object.values(t.entries);
  const r = new Set(Object.keys(t.entries));
  e.extract = (n, a) => {
    const o = {};
    for (const s of n)
      if (r.has(s))
        o[s] = t.entries[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new ea({
      ...t,
      checks: [],
      ...C(a),
      entries: o
    });
  }, e.exclude = (n, a) => {
    const o = { ...t.entries };
    for (const s of n)
      if (r.has(s))
        delete o[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new ea({
      ...t,
      checks: [],
      ...C(a),
      entries: o
    });
  };
});
function Bi(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((n) => [n, n])) : e;
  return new ea({
    type: "enum",
    entries: r,
    ...C(t)
  });
}
const zg = /* @__PURE__ */ _("ZodLiteral", (e, t) => {
  pp.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => Ii(e, r, n), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function re(e, t) {
  return new zg({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...C(t)
  });
}
const Lg = /* @__PURE__ */ _("ZodTransform", (e, t) => {
  fp.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => Ai(e, r), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new Hs(e.constructor.name);
    r.addIssue = (o) => {
      if (typeof o == "string")
        r.issues.push(Ir(o, r.value, t));
      else {
        const s = o;
        s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), s.input ?? (s.input = r.value), s.inst ?? (s.inst = e), r.issues.push(Ir(s));
      }
    };
    const a = t.transform(r.value, r);
    return a instanceof Promise ? a.then((o) => (r.value = o, r)) : (r.value = a, r);
  };
});
function Ug(e) {
  return new Lg({
    type: "transform",
    transform: e
  });
}
const Vi = /* @__PURE__ */ _("ZodOptional", (e, t) => {
  fi.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => wa(e, r, n, a), e.unwrap = () => e._zod.def.innerType;
});
function Ao(e) {
  return new Vi({
    type: "optional",
    innerType: e
  });
}
const jg = /* @__PURE__ */ _("ZodExactOptional", (e, t) => {
  gp.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => wa(e, r, n, a), e.unwrap = () => e._zod.def.innerType;
});
function Zg(e) {
  return new jg({
    type: "optional",
    innerType: e
  });
}
const Gg = /* @__PURE__ */ _("ZodNullable", (e, t) => {
  hp.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => Pi(e, r, n, a), e.unwrap = () => e._zod.def.innerType;
});
function No(e) {
  return new Gg({
    type: "nullable",
    innerType: e
  });
}
const Bg = /* @__PURE__ */ _("ZodDefault", (e, t) => {
  mp.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => Di(e, r, n, a), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Vg(e, t) {
  return new Bg({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Ks(t);
    }
  });
}
const qg = /* @__PURE__ */ _("ZodPrefault", (e, t) => {
  yp.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => $i(e, r, n, a), e.unwrap = () => e._zod.def.innerType;
});
function Hg(e, t) {
  return new qg({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Ks(t);
    }
  });
}
const qi = /* @__PURE__ */ _("ZodNonOptional", (e, t) => {
  vp.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => ki(e, r, n, a), e.unwrap = () => e._zod.def.innerType;
});
function Jg(e, t) {
  return new qi({
    type: "nonoptional",
    innerType: e,
    ...C(t)
  });
}
const Yg = /* @__PURE__ */ _("ZodCatch", (e, t) => {
  wp.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => Mi(e, r, n, a), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Wg(e, t) {
  return new Yg({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Kg = /* @__PURE__ */ _("ZodPipe", (e, t) => {
  _p.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => Fi(e, r, n, a), e.in = t.in, e.out = t.out;
});
function Oo(e, t) {
  return new Kg({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Xg = /* @__PURE__ */ _("ZodReadonly", (e, t) => {
  Tp.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => zi(e, r, n, a), e.unwrap = () => e._zod.def.innerType;
});
function Qg(e) {
  return new Xg({
    type: "readonly",
    innerType: e
  });
}
const eh = /* @__PURE__ */ _("ZodLazy", (e, t) => {
  Ep.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => Li(e, r, n, a), e.unwrap = () => e._zod.def.getter();
});
function th(e) {
  return new eh({
    type: "lazy",
    getter: e
  });
}
const Ta = /* @__PURE__ */ _("ZodCustom", (e, t) => {
  bp.init(e, t), fe.init(e, t), e._zod.processJSONSchema = (r, n, a) => Si(e, r);
});
function rh(e, t) {
  return /* @__PURE__ */ vf(Ta, e ?? (() => !0), t);
}
function nh(e, t = {}) {
  return /* @__PURE__ */ wf(Ta, e, t);
}
function ah(e) {
  return /* @__PURE__ */ _f(e);
}
function un(e, t = {}) {
  const r = new Ta({
    type: "custom",
    check: "custom",
    fn: (n) => n instanceof e,
    abort: !0,
    ...C(t)
  });
  return r._zod.bag.Class = e, r._zod.check = (n) => {
    n.value instanceof e || n.issues.push({
      code: "invalid_type",
      expected: e.name,
      input: n.value,
      inst: r,
      path: [...r._zod.def.path ?? []]
    });
  }, r;
}
var Sr;
(function(e) {
  e.assertEqual = (a) => {
  };
  function t(a) {
  }
  e.assertIs = t;
  function r(a) {
    throw new Error();
  }
  e.assertNever = r, e.arrayToEnum = (a) => {
    const o = {};
    for (const s of a)
      o[s] = s;
    return o;
  }, e.getValidEnumValues = (a) => {
    const o = e.objectKeys(a).filter((i) => typeof a[a[i]] != "number"), s = {};
    for (const i of o)
      s[i] = a[i];
    return e.objectValues(s);
  }, e.objectValues = (a) => e.objectKeys(a).map(function(o) {
    return a[o];
  }), e.objectKeys = typeof Object.keys == "function" ? (a) => Object.keys(a) : (a) => {
    const o = [];
    for (const s in a)
      Object.prototype.hasOwnProperty.call(a, s) && o.push(s);
    return o;
  }, e.find = (a, o) => {
    for (const s of a)
      if (o(s))
        return s;
  }, e.isInteger = typeof Number.isInteger == "function" ? (a) => Number.isInteger(a) : (a) => typeof a == "number" && Number.isFinite(a) && Math.floor(a) === a;
  function n(a, o = " | ") {
    return a.map((s) => typeof s == "string" ? `'${s}'` : s).join(o);
  }
  e.joinValues = n, e.jsonStringifyReplacer = (a, o) => typeof o == "bigint" ? o.toString() : o;
})(Sr || (Sr = {}));
var Ro;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(Ro || (Ro = {}));
Sr.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
Sr.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class cn extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = t;
  }
  format(t) {
    const r = t || function(o) {
      return o.message;
    }, n = { _errors: [] }, a = (o) => {
      for (const s of o.issues)
        if (s.code === "invalid_union")
          s.unionErrors.map(a);
        else if (s.code === "invalid_return_type")
          a(s.returnTypeError);
        else if (s.code === "invalid_arguments")
          a(s.argumentsError);
        else if (s.path.length === 0)
          n._errors.push(r(s));
        else {
          let i = n, l = 0;
          for (; l < s.path.length; ) {
            const u = s.path[l];
            l === s.path.length - 1 ? (i[u] = i[u] || { _errors: [] }, i[u]._errors.push(r(s))) : i[u] = i[u] || { _errors: [] }, i = i[u], l++;
          }
        }
    };
    return a(this), n;
  }
  static assert(t) {
    if (!(t instanceof cn))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Sr.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (r) => r.message) {
    const r = /* @__PURE__ */ Object.create(null), n = [];
    for (const a of this.issues)
      if (a.path.length > 0) {
        const o = a.path[0];
        r[o] = r[o] || [], r[o].push(t(a));
      } else
        n.push(t(a));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
cn.create = (e) => new cn(e);
var xo;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(xo || (xo = {}));
var j;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(j || (j = {}));
class Co extends Error {
  constructor(t, r) {
    super(t), this.name = "ParseError", this.type = r.type, this.field = r.field, this.value = r.value, this.line = r.line;
  }
}
function Mn(e) {
}
function oh(e) {
  if (typeof e == "function")
    throw new TypeError(
      "`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?"
    );
  const { onEvent: t = Mn, onError: r = Mn, onRetry: n = Mn, onComment: a } = e;
  let o = "", s = !0, i, l = "", u = "";
  function c(v) {
    const b = s ? v.replace(/^\xEF\xBB\xBF/, "") : v, [P, k] = sh(`${o}${b}`);
    for (const g of P)
      d(g);
    o = k, s = !1;
  }
  function d(v) {
    if (v === "") {
      y();
      return;
    }
    if (v.startsWith(":")) {
      a && a(v.slice(v.startsWith(": ") ? 2 : 1));
      return;
    }
    const b = v.indexOf(":");
    if (b !== -1) {
      const P = v.slice(0, b), k = v[b + 1] === " " ? 2 : 1, g = v.slice(b + k);
      p(P, g, v);
      return;
    }
    p(v, "", v);
  }
  function p(v, b, P) {
    switch (v) {
      case "event":
        u = b;
        break;
      case "data":
        l = `${l}${b}
`;
        break;
      case "id":
        i = b.includes("\0") ? void 0 : b;
        break;
      case "retry":
        /^\d+$/.test(b) ? n(parseInt(b, 10)) : r(
          new Co(`Invalid \`retry\` value: "${b}"`, {
            type: "invalid-retry",
            value: b,
            line: P
          })
        );
        break;
      default:
        r(
          new Co(
            `Unknown field "${v.length > 20 ? `${v.slice(0, 20)}…` : v}"`,
            { type: "unknown-field", field: v, value: b, line: P }
          )
        );
        break;
    }
  }
  function y() {
    l.length > 0 && t({
      id: i,
      event: u || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: l.endsWith(`
`) ? l.slice(0, -1) : l
    }), i = void 0, l = "", u = "";
  }
  function E(v = {}) {
    o && v.consume && d(o), s = !0, i = void 0, l = "", u = "", o = "";
  }
  return { feed: c, reset: E };
}
function sh(e) {
  const t = [];
  let r = "", n = 0;
  for (; n < e.length; ) {
    const a = e.indexOf("\r", n), o = e.indexOf(`
`, n);
    let s = -1;
    if (a !== -1 && o !== -1 ? s = Math.min(a, o) : a !== -1 ? a === e.length - 1 ? s = -1 : s = a : o !== -1 && (s = o), s === -1) {
      r = e.slice(n);
      break;
    } else {
      const i = e.slice(n, s);
      t.push(i), n = s + 1, e[n - 1] === "\r" && e[n] === `
` && n++;
    }
  }
  return [t, r];
}
class ih extends TransformStream {
  constructor({ onError: t, onRetry: r, onComment: n } = {}) {
    let a;
    super({
      start(o) {
        a = oh({
          onEvent: (s) => {
            o.enqueue(s);
          },
          onError(s) {
            t === "terminate" ? o.error(s) : typeof t == "function" && t(s);
          },
          onRetry: r,
          onComment: n
        });
      },
      transform(o) {
        a.feed(o);
      }
    });
  }
}
function dn(...e) {
  return e.reduce(
    (t, r) => ({
      ...t,
      ...r ?? {}
    }),
    {}
  );
}
async function lh(e, t) {
  if (e == null)
    return Promise.resolve();
  const r = t == null ? void 0 : t.abortSignal;
  return new Promise((n, a) => {
    if (r != null && r.aborted) {
      a(Po());
      return;
    }
    const o = setTimeout(() => {
      s(), n();
    }, e), s = () => {
      clearTimeout(o), r == null || r.removeEventListener("abort", i);
    }, i = () => {
      s(), a(Po());
    };
    r == null || r.addEventListener("abort", i);
  });
}
function Po() {
  return new DOMException("Delay was aborted", "AbortError");
}
var mr = class {
  constructor() {
    this.status = { type: "pending" }, this._resolve = void 0, this._reject = void 0;
  }
  get promise() {
    return this._promise ? this._promise : (this._promise = new Promise((e, t) => {
      this.status.type === "resolved" ? e(this.status.value) : this.status.type === "rejected" && t(this.status.error), this._resolve = e, this._reject = t;
    }), this._promise);
  }
  resolve(e) {
    var t;
    this.status = { type: "resolved", value: e }, this._promise && ((t = this._resolve) == null || t.call(this, e));
  }
  reject(e) {
    var t;
    this.status = { type: "rejected", error: e }, this._promise && ((t = this._reject) == null || t.call(this, e));
  }
  isResolved() {
    return this.status.type === "resolved";
  }
  isRejected() {
    return this.status.type === "rejected";
  }
  isPending() {
    return this.status.type === "pending";
  }
};
function Mr(e) {
  return Object.fromEntries([...e.headers]);
}
var { btoa: uh, atob: ch } = globalThis;
function Ea(e) {
  const t = e.replace(/-/g, "+").replace(/_/g, "/"), r = ch(t);
  return Uint8Array.from(r, (n) => n.codePointAt(0));
}
function pn(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    t += String.fromCodePoint(e[r]);
  return uh(t);
}
var Hi = "AI_DownloadError", Ji = `vercel.ai.error.${Hi}`, dh = Symbol.for(Ji), ko, Do, Fn = class extends (Do = H, ko = dh, Do) {
  constructor({
    url: e,
    statusCode: t,
    statusText: r,
    cause: n,
    message: a = n == null ? `Failed to download ${e}: ${t} ${r}` : `Failed to download ${e}: ${n}`
  }) {
    super({ name: Hi, message: a, cause: n }), this[ko] = !0, this.url = e, this.statusCode = t, this.statusText = r;
  }
  static isInstance(e) {
    return H.hasMarker(e, Ji);
  }
}, Fr = ({
  prefix: e,
  size: t = 16,
  alphabet: r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: n = "-"
} = {}) => {
  const a = () => {
    const o = r.length, s = new Array(t);
    for (let i = 0; i < t; i++)
      s[i] = r[Math.random() * o | 0];
    return s.join("");
  };
  if (e == null)
    return a;
  if (r.includes(n))
    throw new fc({
      argument: "separator",
      message: `The separator "${n}" must not be part of the alphabet "${r}".`
    });
  return () => `${e}${n}${a()}`;
};
Fr();
function ba(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
function Lt(e) {
  return (e instanceof Error || e instanceof DOMException) && (e.name === "AbortError" || e.name === "ResponseAborted" || // Next.js
  e.name === "TimeoutError");
}
var ph = ["fetch failed", "failed to fetch"];
function Yi({
  error: e,
  url: t,
  requestBodyValues: r
}) {
  if (Lt(e))
    return e;
  if (e instanceof TypeError && ph.includes(e.message.toLowerCase())) {
    const n = e.cause;
    if (n != null)
      return new Le({
        message: `Cannot connect to API: ${n.message}`,
        cause: n,
        url: t,
        requestBodyValues: r,
        isRetryable: !0
        // retry when network error
      });
  }
  return e;
}
function Ia(e = globalThis) {
  var t, r, n;
  return e.window ? "runtime/browser" : (t = e.navigator) != null && t.userAgent ? `runtime/${e.navigator.userAgent.toLowerCase()}` : (n = (r = e.process) == null ? void 0 : r.versions) != null && n.node ? `runtime/node.js/${e.process.version.substring(0)}` : e.EdgeRuntime ? "runtime/vercel-edge" : "runtime/unknown";
}
function fh(e) {
  if (e == null)
    return {};
  const t = {};
  if (e instanceof Headers)
    e.forEach((r, n) => {
      t[n.toLowerCase()] = r;
    });
  else {
    Array.isArray(e) || (e = Object.entries(e));
    for (const [r, n] of e)
      n != null && (t[r.toLowerCase()] = n);
  }
  return t;
}
function zr(e, ...t) {
  const r = new Headers(fh(e)), n = r.get("user-agent") || "";
  return r.set(
    "user-agent",
    [n, ...t].filter(Boolean).join(" ")
  ), Object.fromEntries(r.entries());
}
var Wi = "4.0.3", gh = () => globalThis.fetch, $o = async ({
  url: e,
  headers: t = {},
  successfulResponseHandler: r,
  failedResponseHandler: n,
  abortSignal: a,
  fetch: o = gh()
}) => {
  try {
    const s = await o(e, {
      method: "GET",
      headers: zr(
        t,
        `ai-sdk/provider-utils/${Wi}`,
        Ia()
      ),
      signal: a
    }), i = Mr(s);
    if (!s.ok) {
      let l;
      try {
        l = await n({
          response: s,
          url: e,
          requestBodyValues: {}
        });
      } catch (u) {
        throw Lt(u) || Le.isInstance(u) ? u : new Le({
          message: "Failed to process error response",
          cause: u,
          statusCode: s.status,
          url: e,
          responseHeaders: i,
          requestBodyValues: {}
        });
      }
      throw l.value;
    }
    try {
      return await r({
        response: s,
        url: e,
        requestBodyValues: {}
      });
    } catch (l) {
      throw l instanceof Error && (Lt(l) || Le.isInstance(l)) ? l : new Le({
        message: "Failed to process successful response",
        cause: l,
        statusCode: s.status,
        url: e,
        responseHeaders: i,
        requestBodyValues: {}
      });
    }
  } catch (s) {
    throw Yi({ error: s, url: e, requestBodyValues: {} });
  }
};
function hh({
  mediaType: e,
  url: t,
  supportedUrls: r
}) {
  return t = t.toLowerCase(), e = e.toLowerCase(), Object.entries(r).map(([n, a]) => {
    const o = n.toLowerCase();
    return o === "*" || o === "*/*" ? { mediaTypePrefix: "", regexes: a } : { mediaTypePrefix: o.replace(/\*/, ""), regexes: a };
  }).filter(({ mediaTypePrefix: n }) => e.startsWith(n)).flatMap(({ regexes: n }) => n).some((n) => n.test(t));
}
function Qr({
  settingValue: e,
  environmentVariableName: t
}) {
  if (typeof e == "string")
    return e;
  if (!(e != null || typeof process > "u") && (e = process.env[t], !(e == null || typeof e != "string")))
    return e;
}
var mh = /"__proto__"\s*:/, yh = /"constructor"\s*:/;
function Mo(e) {
  const t = JSON.parse(e);
  return t === null || typeof t != "object" || mh.test(e) === !1 && yh.test(e) === !1 ? t : vh(t);
}
function vh(e) {
  let t = [e];
  for (; t.length; ) {
    const r = t;
    t = [];
    for (const n of r) {
      if (Object.prototype.hasOwnProperty.call(n, "__proto__"))
        throw new SyntaxError("Object contains forbidden prototype property");
      if (Object.prototype.hasOwnProperty.call(n, "constructor") && Object.prototype.hasOwnProperty.call(n.constructor, "prototype"))
        throw new SyntaxError("Object contains forbidden prototype property");
      for (const a in n) {
        const o = n[a];
        o && typeof o == "object" && t.push(o);
      }
    }
  }
  return e;
}
function Ki(e) {
  const { stackTraceLimit: t } = Error;
  try {
    Error.stackTraceLimit = 0;
  } catch {
    return Mo(e);
  }
  try {
    return Mo(e);
  } finally {
    Error.stackTraceLimit = t;
  }
}
function Xi(e) {
  if (e.type === "object" || Array.isArray(e.type) && e.type.includes("object")) {
    e.additionalProperties = !1;
    const { properties: r } = e;
    if (r != null)
      for (const n of Object.keys(r))
        r[n] = Pt(r[n]);
  }
  e.items != null && (e.items = Array.isArray(e.items) ? e.items.map(Pt) : Pt(e.items)), e.anyOf != null && (e.anyOf = e.anyOf.map(Pt)), e.allOf != null && (e.allOf = e.allOf.map(Pt)), e.oneOf != null && (e.oneOf = e.oneOf.map(Pt));
  const { definitions: t } = e;
  if (t != null)
    for (const r of Object.keys(t))
      t[r] = Pt(t[r]);
  return e;
}
function Pt(e) {
  return typeof e == "boolean" ? e : Xi(e);
}
var wh = Symbol(
  "Let zodToJsonSchema decide on which parser to use"
), Fo = {
  name: void 0,
  $refStrategy: "root",
  basePath: ["#"],
  effectStrategy: "input",
  pipeStrategy: "all",
  dateStrategy: "format:date-time",
  mapStrategy: "entries",
  removeAdditionalStrategy: "passthrough",
  allowedAdditionalProperties: !0,
  rejectedAdditionalProperties: !1,
  definitionPath: "definitions",
  strictUnions: !1,
  definitions: {},
  errorMessages: !1,
  patternStrategy: "escape",
  applyRegexFlags: !1,
  emailStrategy: "format:email",
  base64Strategy: "contentEncoding:base64",
  nameStrategy: "ref"
}, _h = (e) => typeof e == "string" ? {
  ...Fo,
  name: e
} : {
  ...Fo,
  ...e
};
function Be() {
  return {};
}
function Th(e, t) {
  var r, n, a;
  const o = {
    type: "array"
  };
  return (r = e.type) != null && r._def && ((a = (n = e.type) == null ? void 0 : n._def) == null ? void 0 : a.typeName) !== j.ZodAny && (o.items = ie(e.type._def, {
    ...t,
    currentPath: [...t.currentPath, "items"]
  })), e.minLength && (o.minItems = e.minLength.value), e.maxLength && (o.maxItems = e.maxLength.value), e.exactLength && (o.minItems = e.exactLength.value, o.maxItems = e.exactLength.value), o;
}
function Eh(e) {
  const t = {
    type: "integer",
    format: "int64"
  };
  if (!e.checks) return t;
  for (const r of e.checks)
    switch (r.kind) {
      case "min":
        r.inclusive ? t.minimum = r.value : t.exclusiveMinimum = r.value;
        break;
      case "max":
        r.inclusive ? t.maximum = r.value : t.exclusiveMaximum = r.value;
        break;
      case "multipleOf":
        t.multipleOf = r.value;
        break;
    }
  return t;
}
function bh() {
  return { type: "boolean" };
}
function Qi(e, t) {
  return ie(e.type._def, t);
}
var Ih = (e, t) => ie(e.innerType._def, t);
function el(e, t, r) {
  const n = r ?? t.dateStrategy;
  if (Array.isArray(n))
    return {
      anyOf: n.map((a, o) => el(e, t, a))
    };
  switch (n) {
    case "string":
    case "format:date-time":
      return {
        type: "string",
        format: "date-time"
      };
    case "format:date":
      return {
        type: "string",
        format: "date"
      };
    case "integer":
      return Sh(e);
  }
}
var Sh = (e) => {
  const t = {
    type: "integer",
    format: "unix-time"
  };
  for (const r of e.checks)
    switch (r.kind) {
      case "min":
        t.minimum = r.value;
        break;
      case "max":
        t.maximum = r.value;
        break;
    }
  return t;
};
function Ah(e, t) {
  return {
    ...ie(e.innerType._def, t),
    default: e.defaultValue()
  };
}
function Nh(e, t) {
  return t.effectStrategy === "input" ? ie(e.schema._def, t) : Be();
}
function Oh(e) {
  return {
    type: "string",
    enum: Array.from(e.values)
  };
}
var Rh = (e) => "type" in e && e.type === "string" ? !1 : "allOf" in e;
function xh(e, t) {
  const r = [
    ie(e.left._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "0"]
    }),
    ie(e.right._def, {
      ...t,
      currentPath: [...t.currentPath, "allOf", "1"]
    })
  ].filter((a) => !!a), n = [];
  return r.forEach((a) => {
    if (Rh(a))
      n.push(...a.allOf);
    else {
      let o = a;
      if ("additionalProperties" in a && a.additionalProperties === !1) {
        const { additionalProperties: s, ...i } = a;
        o = i;
      }
      n.push(o);
    }
  }), n.length ? { allOf: n } : void 0;
}
function Ch(e) {
  const t = typeof e.value;
  return t !== "bigint" && t !== "number" && t !== "boolean" && t !== "string" ? {
    type: Array.isArray(e.value) ? "array" : "object"
  } : {
    type: t === "bigint" ? "integer" : t,
    const: e.value
  };
}
var zn = void 0, Ke = {
  /**
   * `c` was changed to `[cC]` to replicate /i flag
   */
  cuid: /^[cC][^\s-]{8,}$/,
  cuid2: /^[0-9a-z]+$/,
  ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
  /**
   * `a-z` was added to replicate /i flag
   */
  email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
  /**
   * Constructed a valid Unicode RegExp
   *
   * Lazily instantiate since this type of regex isn't supported
   * in all envs (e.g. React Native).
   *
   * See:
   * https://github.com/colinhacks/zod/issues/2433
   * Fix in Zod:
   * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
   */
  emoji: () => (zn === void 0 && (zn = RegExp(
    "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
    "u"
  )), zn),
  /**
   * Unused
   */
  uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
  /**
   * Unused
   */
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  /**
   * Unused
   */
  ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  nanoid: /^[a-zA-Z0-9_-]{21}$/,
  jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function tl(e, t) {
  const r = {
    type: "string"
  };
  if (e.checks)
    for (const n of e.checks)
      switch (n.kind) {
        case "min":
          r.minLength = typeof r.minLength == "number" ? Math.max(r.minLength, n.value) : n.value;
          break;
        case "max":
          r.maxLength = typeof r.maxLength == "number" ? Math.min(r.maxLength, n.value) : n.value;
          break;
        case "email":
          switch (t.emailStrategy) {
            case "format:email":
              Xe(r, "email", n.message, t);
              break;
            case "format:idn-email":
              Xe(r, "idn-email", n.message, t);
              break;
            case "pattern:zod":
              Fe(r, Ke.email, n.message, t);
              break;
          }
          break;
        case "url":
          Xe(r, "uri", n.message, t);
          break;
        case "uuid":
          Xe(r, "uuid", n.message, t);
          break;
        case "regex":
          Fe(r, n.regex, n.message, t);
          break;
        case "cuid":
          Fe(r, Ke.cuid, n.message, t);
          break;
        case "cuid2":
          Fe(r, Ke.cuid2, n.message, t);
          break;
        case "startsWith":
          Fe(
            r,
            RegExp(`^${Ln(n.value, t)}`),
            n.message,
            t
          );
          break;
        case "endsWith":
          Fe(
            r,
            RegExp(`${Ln(n.value, t)}$`),
            n.message,
            t
          );
          break;
        case "datetime":
          Xe(r, "date-time", n.message, t);
          break;
        case "date":
          Xe(r, "date", n.message, t);
          break;
        case "time":
          Xe(r, "time", n.message, t);
          break;
        case "duration":
          Xe(r, "duration", n.message, t);
          break;
        case "length":
          r.minLength = typeof r.minLength == "number" ? Math.max(r.minLength, n.value) : n.value, r.maxLength = typeof r.maxLength == "number" ? Math.min(r.maxLength, n.value) : n.value;
          break;
        case "includes": {
          Fe(
            r,
            RegExp(Ln(n.value, t)),
            n.message,
            t
          );
          break;
        }
        case "ip": {
          n.version !== "v6" && Xe(r, "ipv4", n.message, t), n.version !== "v4" && Xe(r, "ipv6", n.message, t);
          break;
        }
        case "base64url":
          Fe(r, Ke.base64url, n.message, t);
          break;
        case "jwt":
          Fe(r, Ke.jwt, n.message, t);
          break;
        case "cidr": {
          n.version !== "v6" && Fe(r, Ke.ipv4Cidr, n.message, t), n.version !== "v4" && Fe(r, Ke.ipv6Cidr, n.message, t);
          break;
        }
        case "emoji":
          Fe(r, Ke.emoji(), n.message, t);
          break;
        case "ulid": {
          Fe(r, Ke.ulid, n.message, t);
          break;
        }
        case "base64": {
          switch (t.base64Strategy) {
            case "format:binary": {
              Xe(r, "binary", n.message, t);
              break;
            }
            case "contentEncoding:base64": {
              r.contentEncoding = "base64";
              break;
            }
            case "pattern:zod": {
              Fe(r, Ke.base64, n.message, t);
              break;
            }
          }
          break;
        }
        case "nanoid":
          Fe(r, Ke.nanoid, n.message, t);
      }
  return r;
}
function Ln(e, t) {
  return t.patternStrategy === "escape" ? kh(e) : e;
}
var Ph = new Set(
  "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789"
);
function kh(e) {
  let t = "";
  for (let r = 0; r < e.length; r++)
    Ph.has(e[r]) || (t += "\\"), t += e[r];
  return t;
}
function Xe(e, t, r, n) {
  var a;
  e.format || (a = e.anyOf) != null && a.some((o) => o.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
    format: e.format
  }), delete e.format), e.anyOf.push({
    format: t,
    ...r && n.errorMessages && { errorMessage: { format: r } }
  })) : e.format = t;
}
function Fe(e, t, r, n) {
  var a;
  e.pattern || (a = e.allOf) != null && a.some((o) => o.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern
  }), delete e.pattern), e.allOf.push({
    pattern: zo(t, n),
    ...r && n.errorMessages && { errorMessage: { pattern: r } }
  })) : e.pattern = zo(t, n);
}
function zo(e, t) {
  var r;
  if (!t.applyRegexFlags || !e.flags)
    return e.source;
  const n = {
    i: e.flags.includes("i"),
    // Case-insensitive
    m: e.flags.includes("m"),
    // `^` and `$` matches adjacent to newline characters
    s: e.flags.includes("s")
    // `.` matches newlines
  }, a = n.i ? e.source.toLowerCase() : e.source;
  let o = "", s = !1, i = !1, l = !1;
  for (let u = 0; u < a.length; u++) {
    if (s) {
      o += a[u], s = !1;
      continue;
    }
    if (n.i) {
      if (i) {
        if (a[u].match(/[a-z]/)) {
          l ? (o += a[u], o += `${a[u - 2]}-${a[u]}`.toUpperCase(), l = !1) : a[u + 1] === "-" && ((r = a[u + 2]) != null && r.match(/[a-z]/)) ? (o += a[u], l = !0) : o += `${a[u]}${a[u].toUpperCase()}`;
          continue;
        }
      } else if (a[u].match(/[a-z]/)) {
        o += `[${a[u]}${a[u].toUpperCase()}]`;
        continue;
      }
    }
    if (n.m) {
      if (a[u] === "^") {
        o += `(^|(?<=[\r
]))`;
        continue;
      } else if (a[u] === "$") {
        o += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (n.s && a[u] === ".") {
      o += i ? `${a[u]}\r
` : `[${a[u]}\r
]`;
      continue;
    }
    o += a[u], a[u] === "\\" ? s = !0 : i && a[u] === "]" ? i = !1 : !i && a[u] === "[" && (i = !0);
  }
  try {
    new RegExp(o);
  } catch {
    return console.warn(
      `Could not convert regex pattern at ${t.currentPath.join(
        "/"
      )} to a flag-independent form! Falling back to the flag-ignorant source`
    ), e.source;
  }
  return o;
}
function rl(e, t) {
  var r, n, a, o, s, i;
  const l = {
    type: "object",
    additionalProperties: (r = ie(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalProperties"]
    })) != null ? r : t.allowedAdditionalProperties
  };
  if (((n = e.keyType) == null ? void 0 : n._def.typeName) === j.ZodString && ((a = e.keyType._def.checks) != null && a.length)) {
    const { type: u, ...c } = tl(e.keyType._def, t);
    return {
      ...l,
      propertyNames: c
    };
  } else {
    if (((o = e.keyType) == null ? void 0 : o._def.typeName) === j.ZodEnum)
      return {
        ...l,
        propertyNames: {
          enum: e.keyType._def.values
        }
      };
    if (((s = e.keyType) == null ? void 0 : s._def.typeName) === j.ZodBranded && e.keyType._def.type._def.typeName === j.ZodString && ((i = e.keyType._def.type._def.checks) != null && i.length)) {
      const { type: u, ...c } = Qi(
        e.keyType._def,
        t
      );
      return {
        ...l,
        propertyNames: c
      };
    }
  }
  return l;
}
function Dh(e, t) {
  if (t.mapStrategy === "record")
    return rl(e, t);
  const r = ie(e.keyType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "0"]
  }) || Be(), n = ie(e.valueType._def, {
    ...t,
    currentPath: [...t.currentPath, "items", "items", "1"]
  }) || Be();
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [r, n],
      minItems: 2,
      maxItems: 2
    }
  };
}
function $h(e) {
  const t = e.values, n = Object.keys(e.values).filter((o) => typeof t[t[o]] != "number").map((o) => t[o]), a = Array.from(
    new Set(n.map((o) => typeof o))
  );
  return {
    type: a.length === 1 ? a[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: n
  };
}
function Mh() {
  return { not: Be() };
}
function Fh() {
  return {
    type: "null"
  };
}
var ta = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function zh(e, t) {
  const r = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (r.every(
    (n) => n._def.typeName in ta && (!n._def.checks || !n._def.checks.length)
  )) {
    const n = r.reduce((a, o) => {
      const s = ta[o._def.typeName];
      return s && !a.includes(s) ? [...a, s] : a;
    }, []);
    return {
      type: n.length > 1 ? n : n[0]
    };
  } else if (r.every((n) => n._def.typeName === "ZodLiteral" && !n.description)) {
    const n = r.reduce(
      (a, o) => {
        const s = typeof o._def.value;
        switch (s) {
          case "string":
          case "number":
          case "boolean":
            return [...a, s];
          case "bigint":
            return [...a, "integer"];
          case "object":
            if (o._def.value === null) return [...a, "null"];
          case "symbol":
          case "undefined":
          case "function":
          default:
            return a;
        }
      },
      []
    );
    if (n.length === r.length) {
      const a = n.filter((o, s, i) => i.indexOf(o) === s);
      return {
        type: a.length > 1 ? a : a[0],
        enum: r.reduce(
          (o, s) => o.includes(s._def.value) ? o : [...o, s._def.value],
          []
        )
      };
    }
  } else if (r.every((n) => n._def.typeName === "ZodEnum"))
    return {
      type: "string",
      enum: r.reduce(
        (n, a) => [
          ...n,
          ...a._def.values.filter((o) => !n.includes(o))
        ],
        []
      )
    };
  return Lh(e, t);
}
var Lh = (e, t) => {
  const r = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map(
    (n, a) => ie(n._def, {
      ...t,
      currentPath: [...t.currentPath, "anyOf", `${a}`]
    })
  ).filter(
    (n) => !!n && (!t.strictUnions || typeof n == "object" && Object.keys(n).length > 0)
  );
  return r.length ? { anyOf: r } : void 0;
};
function Uh(e, t) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(
    e.innerType._def.typeName
  ) && (!e.innerType._def.checks || !e.innerType._def.checks.length))
    return {
      type: [
        ta[e.innerType._def.typeName],
        "null"
      ]
    };
  const r = ie(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "0"]
  });
  return r && { anyOf: [r, { type: "null" }] };
}
function jh(e) {
  const t = {
    type: "number"
  };
  if (!e.checks) return t;
  for (const r of e.checks)
    switch (r.kind) {
      case "int":
        t.type = "integer";
        break;
      case "min":
        r.inclusive ? t.minimum = r.value : t.exclusiveMinimum = r.value;
        break;
      case "max":
        r.inclusive ? t.maximum = r.value : t.exclusiveMaximum = r.value;
        break;
      case "multipleOf":
        t.multipleOf = r.value;
        break;
    }
  return t;
}
function Zh(e, t) {
  const r = {
    type: "object",
    properties: {}
  }, n = [], a = e.shape();
  for (const s in a) {
    let i = a[s];
    if (i === void 0 || i._def === void 0)
      continue;
    const l = Bh(i), u = ie(i._def, {
      ...t,
      currentPath: [...t.currentPath, "properties", s],
      propertyPath: [...t.currentPath, "properties", s]
    });
    u !== void 0 && (r.properties[s] = u, l || n.push(s));
  }
  n.length && (r.required = n);
  const o = Gh(e, t);
  return o !== void 0 && (r.additionalProperties = o), r;
}
function Gh(e, t) {
  if (e.catchall._def.typeName !== "ZodNever")
    return ie(e.catchall._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalProperties"]
    });
  switch (e.unknownKeys) {
    case "passthrough":
      return t.allowedAdditionalProperties;
    case "strict":
      return t.rejectedAdditionalProperties;
    case "strip":
      return t.removeAdditionalStrategy === "strict" ? t.allowedAdditionalProperties : t.rejectedAdditionalProperties;
  }
}
function Bh(e) {
  try {
    return e.isOptional();
  } catch {
    return !0;
  }
}
var Vh = (e, t) => {
  var r;
  if (t.currentPath.toString() === ((r = t.propertyPath) == null ? void 0 : r.toString()))
    return ie(e.innerType._def, t);
  const n = ie(e.innerType._def, {
    ...t,
    currentPath: [...t.currentPath, "anyOf", "1"]
  });
  return n ? { anyOf: [{ not: Be() }, n] } : Be();
}, qh = (e, t) => {
  if (t.pipeStrategy === "input")
    return ie(e.in._def, t);
  if (t.pipeStrategy === "output")
    return ie(e.out._def, t);
  const r = ie(e.in._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", "0"]
  }), n = ie(e.out._def, {
    ...t,
    currentPath: [...t.currentPath, "allOf", r ? "1" : "0"]
  });
  return {
    allOf: [r, n].filter((a) => a !== void 0)
  };
};
function Hh(e, t) {
  return ie(e.type._def, t);
}
function Jh(e, t) {
  const n = {
    type: "array",
    uniqueItems: !0,
    items: ie(e.valueType._def, {
      ...t,
      currentPath: [...t.currentPath, "items"]
    })
  };
  return e.minSize && (n.minItems = e.minSize.value), e.maxSize && (n.maxItems = e.maxSize.value), n;
}
function Yh(e, t) {
  return e.rest ? {
    type: "array",
    minItems: e.items.length,
    items: e.items.map(
      (r, n) => ie(r._def, {
        ...t,
        currentPath: [...t.currentPath, "items", `${n}`]
      })
    ).reduce(
      (r, n) => n === void 0 ? r : [...r, n],
      []
    ),
    additionalItems: ie(e.rest._def, {
      ...t,
      currentPath: [...t.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: e.items.length,
    maxItems: e.items.length,
    items: e.items.map(
      (r, n) => ie(r._def, {
        ...t,
        currentPath: [...t.currentPath, "items", `${n}`]
      })
    ).reduce(
      (r, n) => n === void 0 ? r : [...r, n],
      []
    )
  };
}
function Wh() {
  return {
    not: Be()
  };
}
function Kh() {
  return Be();
}
var Xh = (e, t) => ie(e.innerType._def, t), Qh = (e, t, r) => {
  switch (t) {
    case j.ZodString:
      return tl(e, r);
    case j.ZodNumber:
      return jh(e);
    case j.ZodObject:
      return Zh(e, r);
    case j.ZodBigInt:
      return Eh(e);
    case j.ZodBoolean:
      return bh();
    case j.ZodDate:
      return el(e, r);
    case j.ZodUndefined:
      return Wh();
    case j.ZodNull:
      return Fh();
    case j.ZodArray:
      return Th(e, r);
    case j.ZodUnion:
    case j.ZodDiscriminatedUnion:
      return zh(e, r);
    case j.ZodIntersection:
      return xh(e, r);
    case j.ZodTuple:
      return Yh(e, r);
    case j.ZodRecord:
      return rl(e, r);
    case j.ZodLiteral:
      return Ch(e);
    case j.ZodEnum:
      return Oh(e);
    case j.ZodNativeEnum:
      return $h(e);
    case j.ZodNullable:
      return Uh(e, r);
    case j.ZodOptional:
      return Vh(e, r);
    case j.ZodMap:
      return Dh(e, r);
    case j.ZodSet:
      return Jh(e, r);
    case j.ZodLazy:
      return () => e.getter()._def;
    case j.ZodPromise:
      return Hh(e, r);
    case j.ZodNaN:
    case j.ZodNever:
      return Mh();
    case j.ZodEffects:
      return Nh(e, r);
    case j.ZodAny:
      return Be();
    case j.ZodUnknown:
      return Kh();
    case j.ZodDefault:
      return Ah(e, r);
    case j.ZodBranded:
      return Qi(e, r);
    case j.ZodReadonly:
      return Xh(e, r);
    case j.ZodCatch:
      return Ih(e, r);
    case j.ZodPipeline:
      return qh(e, r);
    case j.ZodFunction:
    case j.ZodVoid:
    case j.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((n) => {
      })();
  }
}, em = (e, t) => {
  let r = 0;
  for (; r < e.length && r < t.length && e[r] === t[r]; r++)
    ;
  return [(e.length - r).toString(), ...t.slice(r)].join("/");
};
function ie(e, t, r = !1) {
  var n;
  const a = t.seen.get(e);
  if (t.override) {
    const l = (n = t.override) == null ? void 0 : n.call(
      t,
      e,
      t,
      a,
      r
    );
    if (l !== wh)
      return l;
  }
  if (a && !r) {
    const l = tm(a, t);
    if (l !== void 0)
      return l;
  }
  const o = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, o);
  const s = Qh(e, e.typeName, t), i = typeof s == "function" ? ie(s(), t) : s;
  if (i && rm(e, t, i), t.postProcess) {
    const l = t.postProcess(i, e, t);
    return o.jsonSchema = i, l;
  }
  return o.jsonSchema = i, i;
}
var tm = (e, t) => {
  switch (t.$refStrategy) {
    case "root":
      return { $ref: e.path.join("/") };
    case "relative":
      return { $ref: em(t.currentPath, e.path) };
    case "none":
    case "seen":
      return e.path.length < t.currentPath.length && e.path.every((r, n) => t.currentPath[n] === r) ? (console.warn(
        `Recursive reference detected at ${t.currentPath.join(
          "/"
        )}! Defaulting to any`
      ), Be()) : t.$refStrategy === "seen" ? Be() : void 0;
  }
}, rm = (e, t, r) => (e.description && (r.description = e.description), r), nm = (e) => {
  const t = _h(e), r = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
  return {
    ...t,
    currentPath: r,
    propertyPath: void 0,
    seen: new Map(
      Object.entries(t.definitions).map(([n, a]) => [
        a._def,
        {
          def: a._def,
          path: [...t.basePath, t.definitionPath, n],
          // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
          jsonSchema: void 0
        }
      ])
    )
  };
}, am = (e, t) => {
  var r;
  const n = nm(t);
  let a = typeof t == "object" && t.definitions ? Object.entries(t.definitions).reduce(
    (u, [c, d]) => {
      var p;
      return {
        ...u,
        [c]: (p = ie(
          d._def,
          {
            ...n,
            currentPath: [...n.basePath, n.definitionPath, c]
          },
          !0
        )) != null ? p : Be()
      };
    },
    {}
  ) : void 0;
  const o = typeof t == "string" ? t : (t == null ? void 0 : t.nameStrategy) === "title" || t == null ? void 0 : t.name, s = (r = ie(
    e._def,
    o === void 0 ? n : {
      ...n,
      currentPath: [...n.basePath, n.definitionPath, o]
    },
    !1
  )) != null ? r : Be(), i = typeof t == "object" && t.name !== void 0 && t.nameStrategy === "title" ? t.name : void 0;
  i !== void 0 && (s.title = i);
  const l = o === void 0 ? a ? {
    ...s,
    [n.definitionPath]: a
  } : s : {
    $ref: [
      ...n.$refStrategy === "relative" ? [] : n.basePath,
      n.definitionPath,
      o
    ].join("/"),
    [n.definitionPath]: {
      ...a,
      [o]: s
    }
  };
  return l.$schema = "http://json-schema.org/draft-07/schema#", l;
}, ra = Symbol.for("vercel.ai.schema");
function ir(e) {
  let t;
  return () => (t == null && (t = e()), t);
}
function In(e, {
  validate: t
} = {}) {
  return {
    [ra]: !0,
    _type: void 0,
    // should never be used directly
    get jsonSchema() {
      return typeof e == "function" && (e = e()), e;
    },
    validate: t
  };
}
function om(e) {
  return typeof e == "object" && e !== null && ra in e && e[ra] === !0 && "jsonSchema" in e && "validate" in e;
}
function lr(e) {
  return e == null ? In({ properties: {}, additionalProperties: !1 }) : om(e) ? e : "~standard" in e ? e["~standard"].vendor === "zod" ? jt(e) : sm(e) : e();
}
function sm(e) {
  return In(
    () => e["~standard"].jsonSchema.input({
      target: "draft-07"
    }),
    {
      validate: async (t) => {
        const r = await e["~standard"].validate(t);
        return "value" in r ? { success: !0, value: r.value } : {
          success: !1,
          error: new Ft({
            value: t,
            cause: r.issues
          })
        };
      }
    }
  );
}
function im(e, t) {
  var r;
  const n = (r = void 0) != null ? r : !1;
  return In(
    // defer json schema creation to avoid unnecessary computation when only validation is needed
    () => am(e, {
      $refStrategy: n ? "root" : "none"
    }),
    {
      validate: async (a) => {
        const o = await e.safeParseAsync(a);
        return o.success ? { success: !0, value: o.data } : { success: !1, error: o.error };
      }
    }
  );
}
function lm(e, t) {
  var r;
  const n = (r = void 0) != null ? r : !1;
  return In(
    // defer json schema creation to avoid unnecessary computation when only validation is needed
    () => Xi(
      zf(e, {
        target: "draft-7",
        io: "input",
        reused: n ? "ref" : "inline"
      })
    ),
    {
      validate: async (a) => {
        const o = await Ui(e, a);
        return o.success ? { success: !0, value: o.data } : { success: !1, error: o.error };
      }
    }
  );
}
function um(e) {
  return "_zod" in e;
}
function jt(e, t) {
  return um(e) ? lm(e) : im(e);
}
async function na({
  value: e,
  schema: t
}) {
  const r = await it({ value: e, schema: t });
  if (!r.success)
    throw Ft.wrap({ value: e, cause: r.error });
  return r.value;
}
async function it({
  value: e,
  schema: t
}) {
  const r = lr(t);
  try {
    if (r.validate == null)
      return { success: !0, value: e, rawValue: e };
    const n = await r.validate(e);
    return n.success ? { success: !0, value: n.value, rawValue: e } : {
      success: !1,
      error: Ft.wrap({ value: e, cause: n.error }),
      rawValue: e
    };
  } catch (n) {
    return {
      success: !1,
      error: Ft.wrap({ value: e, cause: n }),
      rawValue: e
    };
  }
}
async function cm({
  text: e,
  schema: t
}) {
  try {
    const r = Ki(e);
    return t == null ? r : na({ value: r, schema: t });
  } catch (r) {
    throw en.isInstance(r) || Ft.isInstance(r) ? r : new en({ text: e, cause: r });
  }
}
async function tt({
  text: e,
  schema: t
}) {
  try {
    const r = Ki(e);
    return t == null ? { success: !0, value: r, rawValue: r } : await it({ value: r, schema: t });
  } catch (r) {
    return {
      success: !1,
      error: en.isInstance(r) ? r : new en({ text: e, cause: r }),
      rawValue: void 0
    };
  }
}
function dm({
  stream: e,
  schema: t
}) {
  return e.pipeThrough(new TextDecoderStream()).pipeThrough(new ih()).pipeThrough(
    new TransformStream({
      async transform({ data: r }, n) {
        r !== "[DONE]" && n.enqueue(await tt({ text: r, schema: t }));
      }
    })
  );
}
var pm = () => globalThis.fetch, fn = async ({
  url: e,
  headers: t,
  body: r,
  failedResponseHandler: n,
  successfulResponseHandler: a,
  abortSignal: o,
  fetch: s
}) => fm({
  url: e,
  headers: {
    "Content-Type": "application/json",
    ...t
  },
  body: {
    content: JSON.stringify(r),
    values: r
  },
  failedResponseHandler: n,
  successfulResponseHandler: a,
  abortSignal: o,
  fetch: s
}), fm = async ({
  url: e,
  headers: t = {},
  body: r,
  successfulResponseHandler: n,
  failedResponseHandler: a,
  abortSignal: o,
  fetch: s = pm()
}) => {
  try {
    const i = await s(e, {
      method: "POST",
      headers: zr(
        t,
        `ai-sdk/provider-utils/${Wi}`,
        Ia()
      ),
      body: r.content,
      signal: o
    }), l = Mr(i);
    if (!i.ok) {
      let u;
      try {
        u = await a({
          response: i,
          url: e,
          requestBodyValues: r.values
        });
      } catch (c) {
        throw Lt(c) || Le.isInstance(c) ? c : new Le({
          message: "Failed to process error response",
          cause: c,
          statusCode: i.status,
          url: e,
          responseHeaders: l,
          requestBodyValues: r.values
        });
      }
      throw u.value;
    }
    try {
      return await n({
        response: i,
        url: e,
        requestBodyValues: r.values
      });
    } catch (u) {
      throw u instanceof Error && (Lt(u) || Le.isInstance(u)) ? u : new Le({
        message: "Failed to process successful response",
        cause: u,
        statusCode: i.status,
        url: e,
        responseHeaders: l,
        requestBodyValues: r.values
      });
    }
  } catch (i) {
    throw Yi({ error: i, url: e, requestBodyValues: r.values });
  }
};
async function He(e) {
  return typeof e == "function" && (e = e()), Promise.resolve(e);
}
var nr = ({
  errorSchema: e,
  errorToMessage: t,
  isRetryable: r
}) => async ({ response: n, url: a, requestBodyValues: o }) => {
  const s = await n.text(), i = Mr(n);
  if (s.trim() === "")
    return {
      responseHeaders: i,
      value: new Le({
        message: n.statusText,
        url: a,
        requestBodyValues: o,
        statusCode: n.status,
        responseHeaders: i,
        responseBody: s,
        isRetryable: r == null ? void 0 : r(n)
      })
    };
  try {
    const l = await cm({
      text: s,
      schema: e
    });
    return {
      responseHeaders: i,
      value: new Le({
        message: t(l),
        url: a,
        requestBodyValues: o,
        statusCode: n.status,
        responseHeaders: i,
        responseBody: s,
        data: l,
        isRetryable: r == null ? void 0 : r(n, l)
      })
    };
  } catch {
    return {
      responseHeaders: i,
      value: new Le({
        message: n.statusText,
        url: a,
        requestBodyValues: o,
        statusCode: n.status,
        responseHeaders: i,
        responseBody: s,
        isRetryable: r == null ? void 0 : r(n)
      })
    };
  }
}, gm = (e) => async ({ response: t }) => {
  const r = Mr(t);
  if (t.body == null)
    throw new dc({});
  return {
    responseHeaders: r,
    value: dm({
      stream: t.body,
      schema: e
    })
  };
}, Ar = (e) => async ({ response: t, url: r, requestBodyValues: n }) => {
  const a = await t.text(), o = await tt({
    text: a,
    schema: e
  }), s = Mr(t);
  if (!o.success)
    throw new Le({
      message: "Invalid JSON response",
      cause: o.error,
      statusCode: t.status,
      responseHeaders: s,
      responseBody: a,
      url: r,
      requestBodyValues: n
    });
  return {
    responseHeaders: s,
    value: o.value,
    rawValue: o.rawValue
  };
};
function hm(e) {
  return e == null ? void 0 : e.replace(/\/$/, "");
}
function mm(e) {
  return e != null && typeof e[Symbol.asyncIterator] == "function";
}
async function* ym({
  execute: e,
  input: t,
  options: r
}) {
  const n = e(t, r);
  if (mm(n)) {
    let a;
    for await (const o of n)
      a = o, yield { type: "preliminary", output: o };
    yield { type: "final", output: a };
  } else
    yield { type: "final", output: await n };
}
function vm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Un, Lo;
function wm() {
  if (Lo) return Un;
  Lo = 1;
  var e = Object.defineProperty, t = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, n = Object.prototype.hasOwnProperty, a = (c, d) => {
    for (var p in d)
      e(c, p, { get: d[p], enumerable: !0 });
  }, o = (c, d, p, y) => {
    if (d && typeof d == "object" || typeof d == "function")
      for (let E of r(d))
        !n.call(c, E) && E !== p && e(c, E, { get: () => d[E], enumerable: !(y = t(d, E)) || y.enumerable });
    return c;
  }, s = (c) => o(e({}, "__esModule", { value: !0 }), c), i = {};
  a(i, {
    SYMBOL_FOR_REQ_CONTEXT: () => l,
    getContext: () => u
  }), Un = s(i);
  const l = Symbol.for("@vercel/request-context");
  function u() {
    var d, p;
    return ((p = (d = globalThis[l]) == null ? void 0 : d.get) == null ? void 0 : p.call(d)) ?? {};
  }
  return Un;
}
var jn, Uo;
function _m() {
  if (Uo) return jn;
  Uo = 1;
  var e = Object.defineProperty, t = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, n = Object.prototype.hasOwnProperty, a = (d, p) => {
    for (var y in p)
      e(d, y, { get: p[y], enumerable: !0 });
  }, o = (d, p, y, E) => {
    if (p && typeof p == "object" || typeof p == "function")
      for (let v of r(p))
        !n.call(d, v) && v !== y && e(d, v, { get: () => p[v], enumerable: !(E = t(p, v)) || E.enumerable });
    return d;
  }, s = (d) => o(e({}, "__esModule", { value: !0 }), d), i = {};
  a(i, {
    getContext: () => l.getContext,
    getVercelOidcToken: () => u,
    getVercelOidcTokenSync: () => c
  }), jn = s(i);
  var l = wm();
  async function u() {
    return "";
  }
  function c() {
    return "";
  }
  return jn;
}
var nl = _m(), Tm = "vercel.ai.gateway.error", Zn = Symbol.for(Tm), jo, Zo, Ve = class al extends (Zo = Error, jo = Zn, Zo) {
  constructor({
    message: t,
    statusCode: r = 500,
    cause: n
  }) {
    super(t), this[jo] = !0, this.statusCode = r, this.cause = n;
  }
  /**
   * Checks if the given error is a Gateway Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is a Gateway Error, false otherwise.
   */
  static isInstance(t) {
    return al.hasMarker(t);
  }
  static hasMarker(t) {
    return typeof t == "object" && t !== null && Zn in t && t[Zn] === !0;
  }
}, ol = "GatewayAuthenticationError", Em = `vercel.ai.gateway.error.${ol}`, Go = Symbol.for(Em), Bo, Vo, Sa = class sl extends (Vo = Ve, Bo = Go, Vo) {
  constructor({
    message: t = "Authentication failed",
    statusCode: r = 401,
    cause: n
  } = {}) {
    super({ message: t, statusCode: r, cause: n }), this[Bo] = !0, this.name = ol, this.type = "authentication_error";
  }
  static isInstance(t) {
    return Ve.hasMarker(t) && Go in t;
  }
  /**
   * Creates a contextual error message when authentication fails
   */
  static createContextualError({
    apiKeyProvided: t,
    oidcTokenProvided: r,
    message: n = "Authentication failed",
    statusCode: a = 401,
    cause: o
  }) {
    let s;
    return t ? s = `AI Gateway authentication failed: Invalid API key.

Create a new API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys

Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.` : r ? s = `AI Gateway authentication failed: Invalid OIDC token.

Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.

Alternatively, use an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys` : s = `AI Gateway authentication failed: No authentication provided.

Option 1 - API key:
Create an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys
Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.

Option 2 - OIDC token:
Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.`, new sl({
      message: s,
      statusCode: a,
      cause: o
    });
  }
}, il = "GatewayInvalidRequestError", bm = `vercel.ai.gateway.error.${il}`, qo = Symbol.for(bm), Ho, Jo, Im = class extends (Jo = Ve, Ho = qo, Jo) {
  constructor({
    message: e = "Invalid request",
    statusCode: t = 400,
    cause: r
  } = {}) {
    super({ message: e, statusCode: t, cause: r }), this[Ho] = !0, this.name = il, this.type = "invalid_request_error";
  }
  static isInstance(e) {
    return Ve.hasMarker(e) && qo in e;
  }
}, ll = "GatewayRateLimitError", Sm = `vercel.ai.gateway.error.${ll}`, Yo = Symbol.for(Sm), Wo, Ko, Am = class extends (Ko = Ve, Wo = Yo, Ko) {
  constructor({
    message: e = "Rate limit exceeded",
    statusCode: t = 429,
    cause: r
  } = {}) {
    super({ message: e, statusCode: t, cause: r }), this[Wo] = !0, this.name = ll, this.type = "rate_limit_exceeded";
  }
  static isInstance(e) {
    return Ve.hasMarker(e) && Yo in e;
  }
}, ul = "GatewayModelNotFoundError", Nm = `vercel.ai.gateway.error.${ul}`, Xo = Symbol.for(Nm), Om = ir(
  () => jt(
    B({
      modelId: x()
    })
  )
), Qo, es, Rm = class extends (es = Ve, Qo = Xo, es) {
  constructor({
    message: e = "Model not found",
    statusCode: t = 404,
    modelId: r,
    cause: n
  } = {}) {
    super({ message: e, statusCode: t, cause: n }), this[Qo] = !0, this.name = ul, this.type = "model_not_found", this.modelId = r;
  }
  static isInstance(e) {
    return Ve.hasMarker(e) && Xo in e;
  }
}, cl = "GatewayInternalServerError", xm = `vercel.ai.gateway.error.${cl}`, ts = Symbol.for(xm), rs, ns, as = class extends (ns = Ve, rs = ts, ns) {
  constructor({
    message: e = "Internal server error",
    statusCode: t = 500,
    cause: r
  } = {}) {
    super({ message: e, statusCode: t, cause: r }), this[rs] = !0, this.name = cl, this.type = "internal_server_error";
  }
  static isInstance(e) {
    return Ve.hasMarker(e) && ts in e;
  }
}, dl = "GatewayResponseError", Cm = `vercel.ai.gateway.error.${dl}`, os = Symbol.for(Cm), ss, is, Pm = class extends (is = Ve, ss = os, is) {
  constructor({
    message: e = "Invalid response from Gateway",
    statusCode: t = 502,
    response: r,
    validationError: n,
    cause: a
  } = {}) {
    super({ message: e, statusCode: t, cause: a }), this[ss] = !0, this.name = dl, this.type = "response_error", this.response = r, this.validationError = n;
  }
  static isInstance(e) {
    return Ve.hasMarker(e) && os in e;
  }
};
async function ls({
  response: e,
  statusCode: t,
  defaultMessage: r = "Gateway request failed",
  cause: n,
  authMethod: a
}) {
  const o = await it({
    value: e,
    schema: km
  });
  if (!o.success)
    return new Pm({
      message: `Invalid error response format: ${r}`,
      statusCode: t,
      response: e,
      validationError: o.error,
      cause: n
    });
  const s = o.value, i = s.error.type, l = s.error.message;
  switch (i) {
    case "authentication_error":
      return Sa.createContextualError({
        apiKeyProvided: a === "api-key",
        oidcTokenProvided: a === "oidc",
        statusCode: t,
        cause: n
      });
    case "invalid_request_error":
      return new Im({ message: l, statusCode: t, cause: n });
    case "rate_limit_exceeded":
      return new Am({ message: l, statusCode: t, cause: n });
    case "model_not_found": {
      const u = await it({
        value: s.error.param,
        schema: Om
      });
      return new Rm({
        message: l,
        statusCode: t,
        modelId: u.success ? u.value.modelId : void 0,
        cause: n
      });
    }
    case "internal_server_error":
      return new as({ message: l, statusCode: t, cause: n });
    default:
      return new as({ message: l, statusCode: t, cause: n });
  }
}
var km = ir(
  () => jt(
    B({
      error: B({
        message: x(),
        type: x().nullish(),
        param: zt().nullish(),
        code: $e([x(), ln()]).nullish()
      })
    })
  )
);
function Nt(e, t) {
  var r;
  return Ve.isInstance(e) ? e : Le.isInstance(e) ? ls({
    response: Dm(e),
    statusCode: (r = e.statusCode) != null ? r : 500,
    defaultMessage: "Gateway request failed",
    cause: e,
    authMethod: t
  }) : ls({
    response: {},
    statusCode: 500,
    defaultMessage: e instanceof Error ? `Gateway request failed: ${e.message}` : "Unknown Gateway error",
    cause: e,
    authMethod: t
  });
}
function Dm(e) {
  if (e.data !== void 0)
    return e.data;
  if (e.responseBody != null)
    try {
      return JSON.parse(e.responseBody);
    } catch {
      return e.responseBody;
    }
  return {};
}
var pl = "ai-gateway-auth-method";
async function ar(e) {
  const t = await it({
    value: e[pl],
    schema: $m
  });
  return t.success ? t.value : void 0;
}
var $m = ir(
  () => jt($e([re("api-key"), re("oidc")]))
), us = class {
  constructor(e) {
    this.config = e;
  }
  async getAvailableModels() {
    try {
      const { value: e } = await $o({
        url: `${this.config.baseURL}/config`,
        headers: await He(this.config.headers()),
        successfulResponseHandler: Ar(
          Mm
        ),
        failedResponseHandler: nr({
          errorSchema: Et(),
          errorToMessage: (t) => t
        }),
        fetch: this.config.fetch
      });
      return e;
    } catch (e) {
      throw await Nt(e);
    }
  }
  async getCredits() {
    try {
      const e = new URL(this.config.baseURL), { value: t } = await $o({
        url: `${e.origin}/v1/credits`,
        headers: await He(this.config.headers()),
        successfulResponseHandler: Ar(
          Fm
        ),
        failedResponseHandler: nr({
          errorSchema: Et(),
          errorToMessage: (r) => r
        }),
        fetch: this.config.fetch
      });
      return t;
    } catch (e) {
      throw await Nt(e);
    }
  }
}, Mm = ir(
  () => jt(
    B({
      models: Ge(
        B({
          id: x(),
          name: x(),
          description: x().nullish(),
          pricing: B({
            input: x(),
            output: x(),
            input_cache_read: x().nullish(),
            input_cache_write: x().nullish()
          }).transform(
            ({ input: e, output: t, input_cache_read: r, input_cache_write: n }) => ({
              input: e,
              output: t,
              ...r ? { cachedInputTokens: r } : {},
              ...n ? { cacheCreationInputTokens: n } : {}
            })
          ).nullish(),
          specification: B({
            specificationVersion: re("v3"),
            provider: x(),
            modelId: x()
          }),
          modelType: Bi(["language", "embedding", "image"]).nullish()
        })
      )
    })
  )
), Fm = ir(
  () => jt(
    B({
      balance: x(),
      total_used: x()
    }).transform(({ balance: e, total_used: t }) => ({
      balance: e,
      totalUsed: t
    }))
  )
), zm = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v3", this.supportedUrls = { "*/*": [/.*/] };
  }
  get provider() {
    return this.config.provider;
  }
  async getArgs(e) {
    const { abortSignal: t, ...r } = e;
    return {
      args: this.maybeEncodeFileParts(r),
      warnings: []
    };
  }
  async doGenerate(e) {
    const { args: t, warnings: r } = await this.getArgs(e), { abortSignal: n } = e, a = await He(this.config.headers());
    try {
      const {
        responseHeaders: o,
        value: s,
        rawValue: i
      } = await fn({
        url: this.getUrl(),
        headers: dn(
          a,
          e.headers,
          this.getModelConfigHeaders(this.modelId, !1),
          await He(this.config.o11yHeaders)
        ),
        body: t,
        successfulResponseHandler: Ar(Et()),
        failedResponseHandler: nr({
          errorSchema: Et(),
          errorToMessage: (l) => l
        }),
        ...n && { abortSignal: n },
        fetch: this.config.fetch
      });
      return {
        ...s,
        request: { body: t },
        response: { headers: o, body: i },
        warnings: r
      };
    } catch (o) {
      throw await Nt(o, await ar(a));
    }
  }
  async doStream(e) {
    const { args: t, warnings: r } = await this.getArgs(e), { abortSignal: n } = e, a = await He(this.config.headers());
    try {
      const { value: o, responseHeaders: s } = await fn({
        url: this.getUrl(),
        headers: dn(
          a,
          e.headers,
          this.getModelConfigHeaders(this.modelId, !0),
          await He(this.config.o11yHeaders)
        ),
        body: t,
        successfulResponseHandler: gm(Et()),
        failedResponseHandler: nr({
          errorSchema: Et(),
          errorToMessage: (i) => i
        }),
        ...n && { abortSignal: n },
        fetch: this.config.fetch
      });
      return {
        stream: o.pipeThrough(
          new TransformStream({
            start(i) {
              r.length > 0 && i.enqueue({ type: "stream-start", warnings: r });
            },
            transform(i, l) {
              if (i.success) {
                const u = i.value;
                if (u.type === "raw" && !e.includeRawChunks)
                  return;
                u.type === "response-metadata" && u.timestamp && typeof u.timestamp == "string" && (u.timestamp = new Date(u.timestamp)), l.enqueue(u);
              } else
                l.error(
                  i.error
                );
            }
          })
        ),
        request: { body: t },
        response: { headers: s }
      };
    } catch (o) {
      throw await Nt(o, await ar(a));
    }
  }
  isFilePart(e) {
    return e && typeof e == "object" && "type" in e && e.type === "file";
  }
  /**
   * Encodes file parts in the prompt to base64. Mutates the passed options
   * instance directly to avoid copying the file data.
   * @param options - The options to encode.
   * @returns The options with the file parts encoded.
   */
  maybeEncodeFileParts(e) {
    for (const t of e.prompt)
      for (const r of t.content)
        if (this.isFilePart(r)) {
          const n = r;
          if (n.data instanceof Uint8Array) {
            const a = Uint8Array.from(n.data), o = Buffer.from(a).toString("base64");
            n.data = new URL(
              `data:${n.mediaType || "application/octet-stream"};base64,${o}`
            );
          }
        }
    return e;
  }
  getUrl() {
    return `${this.config.baseURL}/language-model`;
  }
  getModelConfigHeaders(e, t) {
    return {
      "ai-language-model-specification-version": "3",
      "ai-language-model-id": e,
      "ai-language-model-streaming": String(t)
    };
  }
}, Lm = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v3", this.maxEmbeddingsPerCall = 2048, this.supportsParallelCalls = !0;
  }
  get provider() {
    return this.config.provider;
  }
  async doEmbed({
    values: e,
    headers: t,
    abortSignal: r,
    providerOptions: n
  }) {
    var a;
    const o = await He(this.config.headers());
    try {
      const {
        responseHeaders: s,
        value: i,
        rawValue: l
      } = await fn({
        url: this.getUrl(),
        headers: dn(
          o,
          t ?? {},
          this.getModelConfigHeaders(),
          await He(this.config.o11yHeaders)
        ),
        body: {
          values: e,
          ...n ? { providerOptions: n } : {}
        },
        successfulResponseHandler: Ar(
          Um
        ),
        failedResponseHandler: nr({
          errorSchema: Et(),
          errorToMessage: (u) => u
        }),
        ...r && { abortSignal: r },
        fetch: this.config.fetch
      });
      return {
        embeddings: i.embeddings,
        usage: (a = i.usage) != null ? a : void 0,
        providerMetadata: i.providerMetadata,
        response: { headers: s, body: l },
        warnings: []
      };
    } catch (s) {
      throw await Nt(s, await ar(o));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/embedding-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-embedding-model-specification-version": "3",
      "ai-model-id": this.modelId
    };
  }
}, Um = ir(
  () => jt(
    B({
      embeddings: Ge(Ge(ln())),
      usage: B({ tokens: ln() }).nullish(),
      providerMetadata: At(x(), At(x(), zt())).optional()
    })
  )
), jm = class {
  constructor(e, t) {
    this.modelId = e, this.config = t, this.specificationVersion = "v3", this.maxImagesPerCall = Number.MAX_SAFE_INTEGER;
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    prompt: e,
    n: t,
    size: r,
    aspectRatio: n,
    seed: a,
    files: o,
    mask: s,
    providerOptions: i,
    headers: l,
    abortSignal: u
  }) {
    var c;
    const d = await He(this.config.headers());
    try {
      const {
        responseHeaders: p,
        value: y,
        rawValue: E
      } = await fn({
        url: this.getUrl(),
        headers: dn(
          d,
          l ?? {},
          this.getModelConfigHeaders(),
          await He(this.config.o11yHeaders)
        ),
        body: {
          prompt: e,
          n: t,
          ...r && { size: r },
          ...n && { aspectRatio: n },
          ...a && { seed: a },
          ...i && { providerOptions: i },
          ...o && {
            files: o.map((v) => cs(v))
          },
          ...s && { mask: cs(s) }
        },
        successfulResponseHandler: Ar(
          Gm
        ),
        failedResponseHandler: nr({
          errorSchema: Et(),
          errorToMessage: (v) => v
        }),
        ...u && { abortSignal: u },
        fetch: this.config.fetch
      });
      return {
        images: y.images,
        // Always base64 strings from server
        warnings: (c = y.warnings) != null ? c : [],
        providerMetadata: y.providerMetadata,
        response: {
          timestamp: /* @__PURE__ */ new Date(),
          modelId: this.modelId,
          headers: p
        }
      };
    } catch (p) {
      throw Nt(p, await ar(d));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/image-model`;
  }
  getModelConfigHeaders() {
    return {
      "ai-image-model-specification-version": "3",
      "ai-model-id": this.modelId
    };
  }
};
function cs(e) {
  return e.type === "file" && e.data instanceof Uint8Array ? {
    ...e,
    data: pn(e.data)
  } : e;
}
var Zm = B({
  images: Ge(zt()).optional()
}).catchall(zt()), Gm = B({
  images: Ge(x()),
  // Always base64 strings over the wire
  warnings: Ge(
    B({
      type: re("other"),
      message: x()
    })
  ).optional(),
  providerMetadata: At(x(), Zm).optional()
});
async function Bm() {
  var e;
  return (e = nl.getContext().headers) == null ? void 0 : e["x-vercel-id"];
}
var Vm = "3.0.8", qm = "0.0.1";
function Hm(e = {}) {
  var t, r;
  let n = null, a = null;
  const o = (t = e.metadataCacheRefreshMillis) != null ? t : 1e3 * 60 * 5;
  let s = 0;
  const i = (r = hm(e.baseURL)) != null ? r : "https://ai-gateway.vercel.sh/v3/ai", l = async () => {
    try {
      const v = await Ym(e);
      return zr(
        {
          Authorization: `Bearer ${v.token}`,
          "ai-gateway-protocol-version": qm,
          [pl]: v.authMethod,
          ...e.headers
        },
        `ai-sdk/gateway/${Vm}`
      );
    } catch (v) {
      throw Sa.createContextualError({
        apiKeyProvided: !1,
        oidcTokenProvided: !1,
        statusCode: 401,
        cause: v
      });
    }
  }, u = () => {
    const v = Qr({
      settingValue: void 0,
      environmentVariableName: "VERCEL_DEPLOYMENT_ID"
    }), b = Qr({
      settingValue: void 0,
      environmentVariableName: "VERCEL_ENV"
    }), P = Qr({
      settingValue: void 0,
      environmentVariableName: "VERCEL_REGION"
    });
    return async () => {
      const k = await Bm();
      return {
        ...v && { "ai-o11y-deployment-id": v },
        ...b && { "ai-o11y-environment": b },
        ...P && { "ai-o11y-region": P },
        ...k && { "ai-o11y-request-id": k }
      };
    };
  }, c = (v) => new zm(v, {
    provider: "gateway",
    baseURL: i,
    headers: l,
    fetch: e.fetch,
    o11yHeaders: u()
  }), d = async () => {
    var v, b, P;
    const k = (P = (b = (v = e._internal) == null ? void 0 : v.currentDate) == null ? void 0 : b.call(v).getTime()) != null ? P : Date.now();
    return (!n || k - s > o) && (s = k, n = new us({
      baseURL: i,
      headers: l,
      fetch: e.fetch
    }).getAvailableModels().then((g) => (a = g, g)).catch(async (g) => {
      throw await Nt(
        g,
        await ar(await l())
      );
    })), a ? Promise.resolve(a) : n;
  }, p = async () => new us({
    baseURL: i,
    headers: l,
    fetch: e.fetch
  }).getCredits().catch(async (v) => {
    throw await Nt(
      v,
      await ar(await l())
    );
  }), y = function(v) {
    if (new.target)
      throw new Error(
        "The Gateway Provider model function cannot be called with the new keyword."
      );
    return c(v);
  };
  y.specificationVersion = "v3", y.getAvailableModels = d, y.getCredits = p, y.imageModel = (v) => new jm(v, {
    provider: "gateway",
    baseURL: i,
    headers: l,
    fetch: e.fetch,
    o11yHeaders: u()
  }), y.languageModel = c;
  const E = (v) => new Lm(v, {
    provider: "gateway",
    baseURL: i,
    headers: l,
    fetch: e.fetch,
    o11yHeaders: u()
  });
  return y.embeddingModel = E, y.textEmbeddingModel = E, y;
}
var Jm = Hm();
async function Ym(e) {
  const t = Qr({
    settingValue: e.apiKey,
    environmentVariableName: "AI_GATEWAY_API_KEY"
  });
  return t ? {
    token: t,
    authMethod: "api-key"
  } : {
    token: await nl.getVercelOidcToken(),
    authMethod: "oidc"
  };
}
var Wm = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, $t = "1.9.0", ds = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function Km(e) {
  var t = /* @__PURE__ */ new Set([e]), r = /* @__PURE__ */ new Set(), n = e.match(ds);
  if (!n)
    return function() {
      return !1;
    };
  var a = {
    major: +n[1],
    minor: +n[2],
    patch: +n[3],
    prerelease: n[4]
  };
  if (a.prerelease != null)
    return function(l) {
      return l === e;
    };
  function o(i) {
    return r.add(i), !1;
  }
  function s(i) {
    return t.add(i), !0;
  }
  return function(l) {
    if (t.has(l))
      return !0;
    if (r.has(l))
      return !1;
    var u = l.match(ds);
    if (!u)
      return o(l);
    var c = {
      major: +u[1],
      minor: +u[2],
      patch: +u[3],
      prerelease: u[4]
    };
    return c.prerelease != null || a.major !== c.major ? o(l) : a.major === 0 ? a.minor === c.minor && a.patch <= c.patch ? s(l) : o(l) : a.minor <= c.minor ? s(l) : o(l);
  };
}
var Xm = Km($t), Qm = $t.split(".")[0], Nr = Symbol.for("opentelemetry.js.api." + Qm), Or = Wm;
function Aa(e, t, r, n) {
  var a;
  n === void 0 && (n = !1);
  var o = Or[Nr] = (a = Or[Nr]) !== null && a !== void 0 ? a : {
    version: $t
  };
  if (!n && o[e]) {
    var s = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
    return r.error(s.stack || s.message), !1;
  }
  if (o.version !== $t) {
    var s = new Error("@opentelemetry/api: Registration of version v" + o.version + " for " + e + " does not match previously registered API v" + $t);
    return r.error(s.stack || s.message), !1;
  }
  return o[e] = t, r.debug("@opentelemetry/api: Registered a global for " + e + " v" + $t + "."), !0;
}
function Rr(e) {
  var t, r, n = (t = Or[Nr]) === null || t === void 0 ? void 0 : t.version;
  if (!(!n || !Xm(n)))
    return (r = Or[Nr]) === null || r === void 0 ? void 0 : r[e];
}
function Na(e, t) {
  t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + $t + ".");
  var r = Or[Nr];
  r && delete r[e];
}
var ey = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), a, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) o.push(a.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return o;
}, ty = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, o; n < a; n++)
    (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}, ry = (
  /** @class */
  (function() {
    function e(t) {
      this._namespace = t.namespace || "DiagComponentLogger";
    }
    return e.prototype.debug = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return yr("debug", this._namespace, t);
    }, e.prototype.error = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return yr("error", this._namespace, t);
    }, e.prototype.info = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return yr("info", this._namespace, t);
    }, e.prototype.warn = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return yr("warn", this._namespace, t);
    }, e.prototype.verbose = function() {
      for (var t = [], r = 0; r < arguments.length; r++)
        t[r] = arguments[r];
      return yr("verbose", this._namespace, t);
    }, e;
  })()
);
function yr(e, t, r) {
  var n = Rr("diag");
  if (n)
    return r.unshift(t), n[e].apply(n, ty([], ey(r), !1));
}
var Ze;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.ERROR = 30] = "ERROR", e[e.WARN = 50] = "WARN", e[e.INFO = 60] = "INFO", e[e.DEBUG = 70] = "DEBUG", e[e.VERBOSE = 80] = "VERBOSE", e[e.ALL = 9999] = "ALL";
})(Ze || (Ze = {}));
function ny(e, t) {
  e < Ze.NONE ? e = Ze.NONE : e > Ze.ALL && (e = Ze.ALL), t = t || {};
  function r(n, a) {
    var o = t[n];
    return typeof o == "function" && e >= a ? o.bind(t) : function() {
    };
  }
  return {
    error: r("error", Ze.ERROR),
    warn: r("warn", Ze.WARN),
    info: r("info", Ze.INFO),
    debug: r("debug", Ze.DEBUG),
    verbose: r("verbose", Ze.VERBOSE)
  };
}
var ay = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), a, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) o.push(a.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return o;
}, oy = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, o; n < a; n++)
    (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}, sy = "diag", gn = (
  /** @class */
  (function() {
    function e() {
      function t(a) {
        return function() {
          for (var o = [], s = 0; s < arguments.length; s++)
            o[s] = arguments[s];
          var i = Rr("diag");
          if (i)
            return i[a].apply(i, oy([], ay(o), !1));
        };
      }
      var r = this, n = function(a, o) {
        var s, i, l;
        if (o === void 0 && (o = { logLevel: Ze.INFO }), a === r) {
          var u = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
          return r.error((s = u.stack) !== null && s !== void 0 ? s : u.message), !1;
        }
        typeof o == "number" && (o = {
          logLevel: o
        });
        var c = Rr("diag"), d = ny((i = o.logLevel) !== null && i !== void 0 ? i : Ze.INFO, a);
        if (c && !o.suppressOverrideMessage) {
          var p = (l = new Error().stack) !== null && l !== void 0 ? l : "<failed to generate stacktrace>";
          c.warn("Current logger will be overwritten from " + p), d.warn("Current logger will overwrite one already registered from " + p);
        }
        return Aa("diag", d, r, !0);
      };
      r.setLogger = n, r.disable = function() {
        Na(sy, r);
      }, r.createComponentLogger = function(a) {
        return new ry(a);
      }, r.verbose = t("verbose"), r.debug = t("debug"), r.info = t("info"), r.warn = t("warn"), r.error = t("error");
    }
    return e.instance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e;
  })()
);
function iy(e) {
  return Symbol.for(e);
}
var ly = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(t) {
      var r = this;
      r._currentContext = t ? new Map(t) : /* @__PURE__ */ new Map(), r.getValue = function(n) {
        return r._currentContext.get(n);
      }, r.setValue = function(n, a) {
        var o = new e(r._currentContext);
        return o._currentContext.set(n, a), o;
      }, r.deleteValue = function(n) {
        var a = new e(r._currentContext);
        return a._currentContext.delete(n), a;
      };
    }
    return e;
  })()
), uy = new ly(), cy = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), a, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) o.push(a.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return o;
}, dy = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, o; n < a; n++)
    (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}, py = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.active = function() {
      return uy;
    }, e.prototype.with = function(t, r, n) {
      for (var a = [], o = 3; o < arguments.length; o++)
        a[o - 3] = arguments[o];
      return r.call.apply(r, dy([n], cy(a), !1));
    }, e.prototype.bind = function(t, r) {
      return r;
    }, e.prototype.enable = function() {
      return this;
    }, e.prototype.disable = function() {
      return this;
    }, e;
  })()
), fy = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), a, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) o.push(a.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return o;
}, gy = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, o; n < a; n++)
    (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}, Gn = "context", hy = new py(), fl = (
  /** @class */
  (function() {
    function e() {
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalContextManager = function(t) {
      return Aa(Gn, t, gn.instance());
    }, e.prototype.active = function() {
      return this._getContextManager().active();
    }, e.prototype.with = function(t, r, n) {
      for (var a, o = [], s = 3; s < arguments.length; s++)
        o[s - 3] = arguments[s];
      return (a = this._getContextManager()).with.apply(a, gy([t, r, n], fy(o), !1));
    }, e.prototype.bind = function(t, r) {
      return this._getContextManager().bind(t, r);
    }, e.prototype._getContextManager = function() {
      return Rr(Gn) || hy;
    }, e.prototype.disable = function() {
      this._getContextManager().disable(), Na(Gn, gn.instance());
    }, e;
  })()
), aa;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
})(aa || (aa = {}));
var gl = "0000000000000000", hl = "00000000000000000000000000000000", my = {
  traceId: hl,
  spanId: gl,
  traceFlags: aa.NONE
}, Tr = (
  /** @class */
  (function() {
    function e(t) {
      t === void 0 && (t = my), this._spanContext = t;
    }
    return e.prototype.spanContext = function() {
      return this._spanContext;
    }, e.prototype.setAttribute = function(t, r) {
      return this;
    }, e.prototype.setAttributes = function(t) {
      return this;
    }, e.prototype.addEvent = function(t, r) {
      return this;
    }, e.prototype.addLink = function(t) {
      return this;
    }, e.prototype.addLinks = function(t) {
      return this;
    }, e.prototype.setStatus = function(t) {
      return this;
    }, e.prototype.updateName = function(t) {
      return this;
    }, e.prototype.end = function(t) {
    }, e.prototype.isRecording = function() {
      return !1;
    }, e.prototype.recordException = function(t, r) {
    }, e;
  })()
), Oa = iy("OpenTelemetry Context Key SPAN");
function Ra(e) {
  return e.getValue(Oa) || void 0;
}
function yy() {
  return Ra(fl.getInstance().active());
}
function xa(e, t) {
  return e.setValue(Oa, t);
}
function vy(e) {
  return e.deleteValue(Oa);
}
function wy(e, t) {
  return xa(e, new Tr(t));
}
function ml(e) {
  var t;
  return (t = Ra(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var _y = /^([0-9a-f]{32})$/i, Ty = /^[0-9a-f]{16}$/i;
function Ey(e) {
  return _y.test(e) && e !== hl;
}
function by(e) {
  return Ty.test(e) && e !== gl;
}
function yl(e) {
  return Ey(e.traceId) && by(e.spanId);
}
function Iy(e) {
  return new Tr(e);
}
var Bn = fl.getInstance(), vl = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.startSpan = function(t, r, n) {
      n === void 0 && (n = Bn.active());
      var a = !!(r != null && r.root);
      if (a)
        return new Tr();
      var o = n && ml(n);
      return Sy(o) && yl(o) ? new Tr(o) : new Tr();
    }, e.prototype.startActiveSpan = function(t, r, n, a) {
      var o, s, i;
      if (!(arguments.length < 2)) {
        arguments.length === 2 ? i = r : arguments.length === 3 ? (o = r, i = n) : (o = r, s = n, i = a);
        var l = s ?? Bn.active(), u = this.startSpan(t, o, l), c = xa(l, u);
        return Bn.with(c, i, void 0, u);
      }
    }, e;
  })()
);
function Sy(e) {
  return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
var Ay = new vl(), Ny = (
  /** @class */
  (function() {
    function e(t, r, n, a) {
      this._provider = t, this.name = r, this.version = n, this.options = a;
    }
    return e.prototype.startSpan = function(t, r, n) {
      return this._getTracer().startSpan(t, r, n);
    }, e.prototype.startActiveSpan = function(t, r, n, a) {
      var o = this._getTracer();
      return Reflect.apply(o.startActiveSpan, o, arguments);
    }, e.prototype._getTracer = function() {
      if (this._delegate)
        return this._delegate;
      var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
      return t ? (this._delegate = t, this._delegate) : Ay;
    }, e;
  })()
), Oy = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      return new vl();
    }, e;
  })()
), Ry = new Oy(), ps = (
  /** @class */
  (function() {
    function e() {
    }
    return e.prototype.getTracer = function(t, r, n) {
      var a;
      return (a = this.getDelegateTracer(t, r, n)) !== null && a !== void 0 ? a : new Ny(this, t, r, n);
    }, e.prototype.getDelegate = function() {
      var t;
      return (t = this._delegate) !== null && t !== void 0 ? t : Ry;
    }, e.prototype.setDelegate = function(t) {
      this._delegate = t;
    }, e.prototype.getDelegateTracer = function(t, r, n) {
      var a;
      return (a = this._delegate) === null || a === void 0 ? void 0 : a.getTracer(t, r, n);
    }, e;
  })()
), hn;
(function(e) {
  e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
})(hn || (hn = {}));
var Vn = "trace", xy = (
  /** @class */
  (function() {
    function e() {
      this._proxyTracerProvider = new ps(), this.wrapSpanContext = Iy, this.isSpanContextValid = yl, this.deleteSpan = vy, this.getSpan = Ra, this.getActiveSpan = yy, this.getSpanContext = ml, this.setSpan = xa, this.setSpanContext = wy;
    }
    return e.getInstance = function() {
      return this._instance || (this._instance = new e()), this._instance;
    }, e.prototype.setGlobalTracerProvider = function(t) {
      var r = Aa(Vn, this._proxyTracerProvider, gn.instance());
      return r && this._proxyTracerProvider.setDelegate(t), r;
    }, e.prototype.getTracerProvider = function() {
      return Rr(Vn) || this._proxyTracerProvider;
    }, e.prototype.getTracer = function(t, r) {
      return this.getTracerProvider().getTracer(t, r);
    }, e.prototype.disable = function() {
      Na(Vn, gn.instance()), this._proxyTracerProvider = new ps();
    }, e;
  })()
), Cy = xy.getInstance(), Py = Object.defineProperty, ky = (e, t) => {
  for (var r in t)
    Py(e, r, { get: t[r], enumerable: !0 });
}, wl = "AI_InvalidArgumentError", _l = `vercel.ai.error.${wl}`, Dy = Symbol.for(_l), Tl, ot = class extends H {
  constructor({
    parameter: e,
    value: t,
    message: r
  }) {
    super({
      name: wl,
      message: `Invalid argument for parameter ${e}: ${r}`
    }), this[Tl] = !0, this.parameter = e, this.value = t;
  }
  static isInstance(e) {
    return H.hasMarker(e, _l);
  }
};
Tl = Dy;
var El = "AI_InvalidToolApprovalError", bl = `vercel.ai.error.${El}`, $y = Symbol.for(bl), Il, My = class extends H {
  constructor({ approvalId: e }) {
    super({
      name: El,
      message: `Tool approval response references unknown approvalId: "${e}". No matching tool-approval-request found in message history.`
    }), this[Il] = !0, this.approvalId = e;
  }
  static isInstance(e) {
    return H.hasMarker(e, bl);
  }
};
Il = $y;
var Sl = "AI_InvalidToolInputError", Al = `vercel.ai.error.${Sl}`, Fy = Symbol.for(Al), Nl, Ca = class extends H {
  constructor({
    toolInput: e,
    toolName: t,
    cause: r,
    message: n = `Invalid input for tool ${t}: ${or(r)}`
  }) {
    super({ name: Sl, message: n, cause: r }), this[Nl] = !0, this.toolInput = e, this.toolName = t;
  }
  static isInstance(e) {
    return H.hasMarker(e, Al);
  }
};
Nl = Fy;
var Ol = "AI_ToolCallNotFoundForApprovalError", Rl = `vercel.ai.error.${Ol}`, zy = Symbol.for(Rl), xl, Pa = class extends H {
  constructor({
    toolCallId: e,
    approvalId: t
  }) {
    super({
      name: Ol,
      message: `Tool call "${e}" not found for approval request "${t}".`
    }), this[xl] = !0, this.toolCallId = e, this.approvalId = t;
  }
  static isInstance(e) {
    return H.hasMarker(e, Rl);
  }
};
xl = zy;
var Cl = "AI_NoObjectGeneratedError", Pl = `vercel.ai.error.${Cl}`, Ly = Symbol.for(Pl), kl, bt = class extends H {
  constructor({
    message: e = "No object generated.",
    cause: t,
    text: r,
    response: n,
    usage: a,
    finishReason: o
  }) {
    super({ name: Cl, message: e, cause: t }), this[kl] = !0, this.text = r, this.response = n, this.usage = a, this.finishReason = o;
  }
  static isInstance(e) {
    return H.hasMarker(e, Pl);
  }
};
kl = Ly;
var Dl = "AI_NoOutputGeneratedError", $l = `vercel.ai.error.${Dl}`, Uy = Symbol.for($l), Ml, Fl = class extends H {
  // used in isInstance
  constructor({
    message: e = "No output generated.",
    cause: t
  } = {}) {
    super({ name: Dl, message: e, cause: t }), this[Ml] = !0;
  }
  static isInstance(e) {
    return H.hasMarker(e, $l);
  }
};
Ml = Uy;
var zl = "AI_NoSuchToolError", Ll = `vercel.ai.error.${zl}`, jy = Symbol.for(Ll), Ul, oa = class extends H {
  constructor({
    toolName: e,
    availableTools: t = void 0,
    message: r = `Model tried to call unavailable tool '${e}'. ${t === void 0 ? "No tools are available." : `Available tools: ${t.join(", ")}.`}`
  }) {
    super({ name: zl, message: r }), this[Ul] = !0, this.toolName = e, this.availableTools = t;
  }
  static isInstance(e) {
    return H.hasMarker(e, Ll);
  }
};
Ul = jy;
var jl = "AI_ToolCallRepairError", Zl = `vercel.ai.error.${jl}`, Zy = Symbol.for(Zl), Gl, Gy = class extends H {
  constructor({
    cause: e,
    originalError: t,
    message: r = `Error repairing tool call: ${or(e)}`
  }) {
    super({ name: jl, message: r, cause: e }), this[Gl] = !0, this.originalError = t;
  }
  static isInstance(e) {
    return H.hasMarker(e, Zl);
  }
};
Gl = Zy;
var By = class extends H {
  constructor(e) {
    super({
      name: "AI_UnsupportedModelVersionError",
      message: `Unsupported model version ${e.version} for provider "${e.provider}" and model "${e.modelId}". AI SDK 5 only supports models that implement specification version "v2".`
    }), this.version = e.version, this.provider = e.provider, this.modelId = e.modelId;
  }
}, Bl = "AI_InvalidMessageRoleError", Vl = `vercel.ai.error.${Bl}`, Vy = Symbol.for(Vl), ql, qy = class extends H {
  constructor({
    role: e,
    message: t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".`
  }) {
    super({ name: Bl, message: t }), this[ql] = !0, this.role = e;
  }
  static isInstance(e) {
    return H.hasMarker(e, Vl);
  }
};
ql = Vy;
var Hl = "AI_RetryError", Jl = `vercel.ai.error.${Hl}`, Hy = Symbol.for(Jl), Yl, fs = class extends H {
  constructor({
    message: e,
    reason: t,
    errors: r
  }) {
    super({ name: Hl, message: e }), this[Yl] = !0, this.reason = t, this.errors = r, this.lastError = r[r.length - 1];
  }
  static isInstance(e) {
    return H.hasMarker(e, Jl);
  }
};
Yl = Hy;
function Jy({
  warning: e,
  provider: t,
  model: r
}) {
  const n = `AI SDK Warning (${t} / ${r}):`;
  switch (e.type) {
    case "unsupported": {
      let a = `${n} The feature "${e.feature}" is not supported.`;
      return e.details && (a += ` ${e.details}`), a;
    }
    case "compatibility": {
      let a = `${n} The feature "${e.feature}" is used in a compatibility mode.`;
      return e.details && (a += ` ${e.details}`), a;
    }
    case "other":
      return `${n} ${e.message}`;
    default:
      return `${n} ${JSON.stringify(e, null, 2)}`;
  }
}
var Yy = "AI SDK Warning System: To turn off warning logging, set the AI_SDK_LOG_WARNINGS global to false.", gs = !1, ka = (e) => {
  if (e.warnings.length === 0)
    return;
  const t = globalThis.AI_SDK_LOG_WARNINGS;
  if (t !== !1) {
    if (typeof t == "function") {
      t(e);
      return;
    }
    gs || (gs = !0, console.info(Yy));
    for (const r of e.warnings)
      console.warn(
        Jy({
          warning: r,
          provider: e.provider,
          model: e.model
        })
      );
  }
};
function Wy({
  provider: e,
  modelId: t
}) {
  ka({
    warnings: [
      {
        type: "compatibility",
        feature: "specificationVersion",
        details: "Using v2 specification compatibility mode. Some features may not be available."
      }
    ],
    provider: e,
    model: t
  });
}
function Ky(e) {
  return e.specificationVersion === "v3" ? e : (Wy({
    provider: e.provider,
    modelId: e.modelId
  }), new Proxy(e, {
    get(t, r) {
      switch (r) {
        case "specificationVersion":
          return "v3";
        case "doGenerate":
          return async (...n) => {
            const a = await t.doGenerate(...n);
            return {
              ...a,
              finishReason: Wl(a.finishReason),
              usage: Kl(a.usage)
            };
          };
        case "doStream":
          return async (...n) => {
            const a = await t.doStream(...n);
            return {
              ...a,
              stream: Xy(a.stream)
            };
          };
        default:
          return t[r];
      }
    }
  }));
}
function Xy(e) {
  return e.pipeThrough(
    new TransformStream({
      transform(t, r) {
        switch (t.type) {
          case "finish":
            r.enqueue({
              ...t,
              finishReason: Wl(t.finishReason),
              usage: Kl(t.usage)
            });
            break;
          default:
            r.enqueue(t);
            break;
        }
      }
    })
  );
}
function Wl(e) {
  return {
    unified: e === "unknown" ? "other" : e,
    raw: void 0
  };
}
function Kl(e) {
  return {
    inputTokens: {
      total: e.inputTokens,
      noCache: void 0,
      cacheRead: e.cachedInputTokens,
      cacheWrite: void 0
    },
    outputTokens: {
      total: e.outputTokens,
      text: void 0,
      reasoning: e.reasoningTokens
    }
  };
}
function mn(e) {
  if (typeof e != "string") {
    if (e.specificationVersion !== "v3" && e.specificationVersion !== "v2") {
      const t = e;
      throw new By({
        version: t.specificationVersion,
        provider: t.provider,
        modelId: t.modelId
      });
    }
    return Ky(e);
  }
  return Qy().languageModel(e);
}
function Qy() {
  var e;
  return (e = globalThis.AI_SDK_DEFAULT_PROVIDER) != null ? e : Jm;
}
var ev = [
  {
    mediaType: "image/gif",
    bytesPrefix: [71, 73, 70]
    // GIF
  },
  {
    mediaType: "image/png",
    bytesPrefix: [137, 80, 78, 71]
    // PNG
  },
  {
    mediaType: "image/jpeg",
    bytesPrefix: [255, 216]
    // JPEG
  },
  {
    mediaType: "image/webp",
    bytesPrefix: [
      82,
      73,
      70,
      70,
      // "RIFF"
      null,
      null,
      null,
      null,
      // file size (variable)
      87,
      69,
      66,
      80
      // "WEBP"
    ]
  },
  {
    mediaType: "image/bmp",
    bytesPrefix: [66, 77]
  },
  {
    mediaType: "image/tiff",
    bytesPrefix: [73, 73, 42, 0]
  },
  {
    mediaType: "image/tiff",
    bytesPrefix: [77, 77, 0, 42]
  },
  {
    mediaType: "image/avif",
    bytesPrefix: [
      0,
      0,
      0,
      32,
      102,
      116,
      121,
      112,
      97,
      118,
      105,
      102
    ]
  },
  {
    mediaType: "image/heic",
    bytesPrefix: [
      0,
      0,
      0,
      32,
      102,
      116,
      121,
      112,
      104,
      101,
      105,
      99
    ]
  }
], tv = (e) => {
  const t = typeof e == "string" ? Ea(e) : e, r = (t[6] & 127) << 21 | (t[7] & 127) << 14 | (t[8] & 127) << 7 | t[9] & 127;
  return t.slice(r + 10);
};
function rv(e) {
  return typeof e == "string" && e.startsWith("SUQz") || typeof e != "string" && e.length > 10 && e[0] === 73 && // 'I'
  e[1] === 68 && // 'D'
  e[2] === 51 ? tv(e) : e;
}
function nv({
  data: e,
  signatures: t
}) {
  const r = rv(e), n = typeof r == "string" ? Ea(
    r.substring(0, Math.min(r.length, 24))
  ) : r;
  for (const a of t)
    if (n.length >= a.bytesPrefix.length && a.bytesPrefix.every(
      (o, s) => o === null || n[s] === o
    ))
      return a.mediaType;
}
var Xl = "6.0.11", av = async ({ url: e }) => {
  var t;
  const r = e.toString();
  try {
    const n = await fetch(r, {
      headers: zr(
        {},
        `ai-sdk/${Xl}`,
        Ia()
      )
    });
    if (!n.ok)
      throw new Fn({
        url: r,
        statusCode: n.status,
        statusText: n.statusText
      });
    return {
      data: new Uint8Array(await n.arrayBuffer()),
      mediaType: (t = n.headers.get("content-type")) != null ? t : void 0
    };
  } catch (n) {
    throw Fn.isInstance(n) ? n : new Fn({ url: r, cause: n });
  }
}, ov = (e = av) => (t) => Promise.all(
  t.map(
    async (r) => r.isUrlSupportedByModel ? null : e(r)
  )
);
function sv(e) {
  try {
    const [t, r] = e.split(",");
    return {
      mediaType: t.split(";")[0].split(":")[1],
      base64Content: r
    };
  } catch {
    return {
      mediaType: void 0,
      base64Content: void 0
    };
  }
}
var Ql = $e([
  x(),
  un(Uint8Array),
  un(ArrayBuffer),
  rh(
    // Buffer might not be available in some environments such as CloudFlare:
    (e) => {
      var t, r;
      return (r = (t = globalThis.Buffer) == null ? void 0 : t.isBuffer(e)) != null ? r : !1;
    },
    { message: "Must be a Buffer" }
  )
]);
function eu(e) {
  if (e instanceof Uint8Array)
    return { data: e, mediaType: void 0 };
  if (e instanceof ArrayBuffer)
    return { data: new Uint8Array(e), mediaType: void 0 };
  if (typeof e == "string")
    try {
      e = new URL(e);
    } catch {
    }
  if (e instanceof URL && e.protocol === "data:") {
    const { mediaType: t, base64Content: r } = sv(
      e.toString()
    );
    if (t == null || r == null)
      throw new H({
        name: "InvalidDataContentError",
        message: `Invalid data URL format in content ${e.toString()}`
      });
    return { data: r, mediaType: t };
  }
  return { data: e, mediaType: void 0 };
}
function iv(e) {
  return typeof e == "string" ? e : e instanceof ArrayBuffer ? pn(new Uint8Array(e)) : pn(e);
}
function xr(e) {
  return e === void 0 ? [] : Array.isArray(e) ? e : [e];
}
async function tu({
  prompt: e,
  supportedUrls: t,
  download: r = ov()
}) {
  const n = await uv(
    e.messages,
    r,
    t
  ), a = [
    ...e.system != null ? typeof e.system == "string" ? [{ role: "system", content: e.system }] : xr(e.system).map((s) => ({
      role: "system",
      content: s.content,
      providerOptions: s.providerOptions
    })) : [],
    ...e.messages.map(
      (s) => lv({ message: s, downloadedAssets: n })
    )
  ], o = [];
  for (const s of a) {
    if (s.role !== "tool") {
      o.push(s);
      continue;
    }
    const i = o.at(-1);
    (i == null ? void 0 : i.role) === "tool" ? i.content.push(...s.content) : o.push(s);
  }
  return o;
}
function lv({
  message: e,
  downloadedAssets: t
}) {
  const r = e.role;
  switch (r) {
    case "system":
      return {
        role: "system",
        content: e.content,
        providerOptions: e.providerOptions
      };
    case "user":
      return typeof e.content == "string" ? {
        role: "user",
        content: [{ type: "text", text: e.content }],
        providerOptions: e.providerOptions
      } : {
        role: "user",
        content: e.content.map((n) => cv(n, t)).filter((n) => n.type !== "text" || n.text !== ""),
        providerOptions: e.providerOptions
      };
    case "assistant":
      return typeof e.content == "string" ? {
        role: "assistant",
        content: [{ type: "text", text: e.content }],
        providerOptions: e.providerOptions
      } : {
        role: "assistant",
        content: e.content.filter(
          // remove empty text parts (no text, and no provider options):
          (n) => n.type !== "text" || n.text !== "" || n.providerOptions != null
        ).filter(
          (n) => n.type !== "tool-approval-request"
        ).map((n) => {
          const a = n.providerOptions;
          switch (n.type) {
            case "file": {
              const { data: o, mediaType: s } = eu(
                n.data
              );
              return {
                type: "file",
                data: o,
                filename: n.filename,
                mediaType: s ?? n.mediaType,
                providerOptions: a
              };
            }
            case "reasoning":
              return {
                type: "reasoning",
                text: n.text,
                providerOptions: a
              };
            case "text":
              return {
                type: "text",
                text: n.text,
                providerOptions: a
              };
            case "tool-call":
              return {
                type: "tool-call",
                toolCallId: n.toolCallId,
                toolName: n.toolName,
                input: n.input,
                providerExecuted: n.providerExecuted,
                providerOptions: a
              };
            case "tool-result":
              return {
                type: "tool-result",
                toolCallId: n.toolCallId,
                toolName: n.toolName,
                output: hs(n.output),
                providerOptions: a
              };
          }
        }),
        providerOptions: e.providerOptions
      };
    case "tool":
      return {
        role: "tool",
        content: e.content.filter(
          // Only include tool-approval-response for provider-executed tools
          (n) => n.type !== "tool-approval-response" || n.providerExecuted
        ).map((n) => {
          switch (n.type) {
            case "tool-result":
              return {
                type: "tool-result",
                toolCallId: n.toolCallId,
                toolName: n.toolName,
                output: hs(n.output),
                providerOptions: n.providerOptions
              };
            case "tool-approval-response":
              return {
                type: "tool-approval-response",
                approvalId: n.approvalId,
                approved: n.approved,
                reason: n.reason
              };
          }
        }),
        providerOptions: e.providerOptions
      };
    default: {
      const n = r;
      throw new qy({ role: n });
    }
  }
}
async function uv(e, t, r) {
  const n = e.filter((o) => o.role === "user").map((o) => o.content).filter(
    (o) => Array.isArray(o)
  ).flat().filter(
    (o) => o.type === "image" || o.type === "file"
  ).map((o) => {
    var s;
    const i = (s = o.mediaType) != null ? s : o.type === "image" ? "image/*" : void 0;
    let l = o.type === "image" ? o.image : o.data;
    if (typeof l == "string")
      try {
        l = new URL(l);
      } catch {
      }
    return { mediaType: i, data: l };
  }).filter(
    (o) => o.data instanceof URL
  ).map((o) => ({
    url: o.data,
    isUrlSupportedByModel: o.mediaType != null && hh({
      url: o.data.toString(),
      mediaType: o.mediaType,
      supportedUrls: r
    })
  })), a = await t(n);
  return Object.fromEntries(
    a.map(
      (o, s) => o == null ? null : [
        n[s].url.toString(),
        { data: o.data, mediaType: o.mediaType }
      ]
    ).filter((o) => o != null)
  );
}
function cv(e, t) {
  var r;
  if (e.type === "text")
    return {
      type: "text",
      text: e.text,
      providerOptions: e.providerOptions
    };
  let n;
  const a = e.type;
  switch (a) {
    case "image":
      n = e.image;
      break;
    case "file":
      n = e.data;
      break;
    default:
      throw new Error(`Unsupported part type: ${a}`);
  }
  const { data: o, mediaType: s } = eu(n);
  let i = s ?? e.mediaType, l = o;
  if (l instanceof URL) {
    const u = t[l.toString()];
    u && (l = u.data, i ?? (i = u.mediaType));
  }
  switch (a) {
    case "image":
      return (l instanceof Uint8Array || typeof l == "string") && (i = (r = nv({ data: l, signatures: ev })) != null ? r : i), {
        type: "file",
        mediaType: i ?? "image/*",
        // any image
        filename: void 0,
        data: l,
        providerOptions: e.providerOptions
      };
    case "file": {
      if (i == null)
        throw new Error("Media type is missing for file part");
      return {
        type: "file",
        mediaType: i,
        filename: e.filename,
        data: l,
        providerOptions: e.providerOptions
      };
    }
  }
}
function hs(e) {
  return e.type !== "content" ? e : {
    type: "content",
    value: e.value.map((t) => t.type !== "media" ? t : t.mediaType.startsWith("image/") ? {
      type: "image-data",
      data: t.data,
      mediaType: t.mediaType
    } : {
      type: "file-data",
      data: t.data,
      mediaType: t.mediaType
    })
  };
}
async function Er({
  toolCallId: e,
  input: t,
  output: r,
  tool: n,
  errorMode: a
}) {
  return a === "text" ? { type: "error-text", value: or(r) } : a === "json" ? { type: "error-json", value: ms(r) } : n != null && n.toModelOutput ? await n.toModelOutput({ toolCallId: e, input: t, output: r }) : typeof r == "string" ? { type: "text", value: r } : { type: "json", value: ms(r) };
}
function ms(e) {
  return e === void 0 ? null : e;
}
function sa({
  maxOutputTokens: e,
  temperature: t,
  topP: r,
  topK: n,
  presencePenalty: a,
  frequencyPenalty: o,
  seed: s,
  stopSequences: i
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new ot({
        parameter: "maxOutputTokens",
        value: e,
        message: "maxOutputTokens must be an integer"
      });
    if (e < 1)
      throw new ot({
        parameter: "maxOutputTokens",
        value: e,
        message: "maxOutputTokens must be >= 1"
      });
  }
  if (t != null && typeof t != "number")
    throw new ot({
      parameter: "temperature",
      value: t,
      message: "temperature must be a number"
    });
  if (r != null && typeof r != "number")
    throw new ot({
      parameter: "topP",
      value: r,
      message: "topP must be a number"
    });
  if (n != null && typeof n != "number")
    throw new ot({
      parameter: "topK",
      value: n,
      message: "topK must be a number"
    });
  if (a != null && typeof a != "number")
    throw new ot({
      parameter: "presencePenalty",
      value: a,
      message: "presencePenalty must be a number"
    });
  if (o != null && typeof o != "number")
    throw new ot({
      parameter: "frequencyPenalty",
      value: o,
      message: "frequencyPenalty must be a number"
    });
  if (s != null && !Number.isInteger(s))
    throw new ot({
      parameter: "seed",
      value: s,
      message: "seed must be an integer"
    });
  return {
    maxOutputTokens: e,
    temperature: t,
    topP: r,
    topK: n,
    presencePenalty: a,
    frequencyPenalty: o,
    stopSequences: i,
    seed: s
  };
}
function dv(e) {
  return e != null && Object.keys(e).length > 0;
}
async function ru({
  tools: e,
  toolChoice: t,
  activeTools: r
}) {
  if (!dv(e))
    return {
      tools: void 0,
      toolChoice: void 0
    };
  const n = r != null ? Object.entries(e).filter(
    ([o]) => r.includes(o)
  ) : Object.entries(e), a = [];
  for (const [o, s] of n) {
    const i = s.type;
    switch (i) {
      case void 0:
      case "dynamic":
      case "function":
        a.push({
          type: "function",
          name: o,
          description: s.description,
          inputSchema: await lr(s.inputSchema).jsonSchema,
          ...s.inputExamples != null ? { inputExamples: s.inputExamples } : {},
          providerOptions: s.providerOptions,
          ...s.strict != null ? { strict: s.strict } : {}
        });
        break;
      case "provider":
        a.push({
          type: "provider",
          name: o,
          id: s.id,
          args: s.args
        });
        break;
      default: {
        const l = i;
        throw new Error(`Unsupported tool type: ${l}`);
      }
    }
  }
  return {
    tools: a,
    toolChoice: t == null ? { type: "auto" } : typeof t == "string" ? { type: t } : { type: "tool", toolName: t.toolName }
  };
}
var Cr = th(
  () => $e([
    Ag(),
    x(),
    ln(),
    _a(),
    At(x(), Cr.optional()),
    Ge(Cr)
  ])
), we = At(
  x(),
  At(x(), Cr.optional())
), nu = B({
  type: re("text"),
  text: x(),
  providerOptions: we.optional()
}), pv = B({
  type: re("image"),
  image: $e([Ql, un(URL)]),
  mediaType: x().optional(),
  providerOptions: we.optional()
}), au = B({
  type: re("file"),
  data: $e([Ql, un(URL)]),
  filename: x().optional(),
  mediaType: x(),
  providerOptions: we.optional()
}), fv = B({
  type: re("reasoning"),
  text: x(),
  providerOptions: we.optional()
}), gv = B({
  type: re("tool-call"),
  toolCallId: x(),
  toolName: x(),
  input: zt(),
  providerOptions: we.optional(),
  providerExecuted: _a().optional()
}), hv = Dg(
  "type",
  [
    B({
      type: re("text"),
      value: x(),
      providerOptions: we.optional()
    }),
    B({
      type: re("json"),
      value: Cr,
      providerOptions: we.optional()
    }),
    B({
      type: re("execution-denied"),
      reason: x().optional(),
      providerOptions: we.optional()
    }),
    B({
      type: re("error-text"),
      value: x(),
      providerOptions: we.optional()
    }),
    B({
      type: re("error-json"),
      value: Cr,
      providerOptions: we.optional()
    }),
    B({
      type: re("content"),
      value: Ge(
        $e([
          B({
            type: re("text"),
            text: x(),
            providerOptions: we.optional()
          }),
          B({
            type: re("media"),
            data: x(),
            mediaType: x()
          }),
          B({
            type: re("file-data"),
            data: x(),
            mediaType: x(),
            filename: x().optional(),
            providerOptions: we.optional()
          }),
          B({
            type: re("file-url"),
            url: x(),
            providerOptions: we.optional()
          }),
          B({
            type: re("file-id"),
            fileId: $e([x(), At(x(), x())]),
            providerOptions: we.optional()
          }),
          B({
            type: re("image-data"),
            data: x(),
            mediaType: x(),
            providerOptions: we.optional()
          }),
          B({
            type: re("image-url"),
            url: x(),
            providerOptions: we.optional()
          }),
          B({
            type: re("image-file-id"),
            fileId: $e([x(), At(x(), x())]),
            providerOptions: we.optional()
          }),
          B({
            type: re("custom"),
            providerOptions: we.optional()
          })
        ])
      )
    })
  ]
), ou = B({
  type: re("tool-result"),
  toolCallId: x(),
  toolName: x(),
  output: hv,
  providerOptions: we.optional()
}), mv = B({
  type: re("tool-approval-request"),
  approvalId: x(),
  toolCallId: x()
}), yv = B({
  type: re("tool-approval-response"),
  approvalId: x(),
  approved: _a(),
  reason: x().optional()
}), vv = B(
  {
    role: re("system"),
    content: x(),
    providerOptions: we.optional()
  }
), wv = B({
  role: re("user"),
  content: $e([
    x(),
    Ge($e([nu, pv, au]))
  ]),
  providerOptions: we.optional()
}), _v = B({
  role: re("assistant"),
  content: $e([
    x(),
    Ge(
      $e([
        nu,
        au,
        fv,
        gv,
        ou,
        mv
      ])
    )
  ]),
  providerOptions: we.optional()
}), Tv = B({
  role: re("tool"),
  content: Ge($e([ou, yv])),
  providerOptions: we.optional()
}), Ev = $e([
  vv,
  wv,
  _v,
  Tv
]);
async function su(e) {
  if (e.prompt == null && e.messages == null)
    throw new Wt({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (e.prompt != null && e.messages != null)
    throw new Wt({
      prompt: e,
      message: "prompt and messages cannot be defined at the same time"
    });
  if (e.system != null && typeof e.system != "string" && !xr(e.system).every(
    (n) => typeof n == "object" && n !== null && "role" in n && n.role === "system"
  ))
    throw new Wt({
      prompt: e,
      message: "system must be a string, SystemModelMessage, or array of SystemModelMessage"
    });
  let t;
  if (e.prompt != null && typeof e.prompt == "string")
    t = [{ role: "user", content: e.prompt }];
  else if (e.prompt != null && Array.isArray(e.prompt))
    t = e.prompt;
  else if (e.messages != null)
    t = e.messages;
  else
    throw new Wt({
      prompt: e,
      message: "prompt or messages must be defined"
    });
  if (t.length === 0)
    throw new Wt({
      prompt: e,
      message: "messages must not be empty"
    });
  const r = await it({
    value: t,
    schema: Ge(Ev)
  });
  if (!r.success)
    throw new Wt({
      prompt: e,
      message: "The messages do not match the ModelMessage[] schema.",
      cause: r.error
    });
  return {
    messages: t,
    system: e.system
  };
}
function iu(e) {
  if (!Sa.isInstance(e))
    return e;
  const t = (process == null ? void 0 : process.env.NODE_ENV) === "production", r = "https://ai-sdk.dev/unauthenticated-ai-gateway";
  return t ? new H({
    name: "GatewayError",
    message: `Unauthenticated. Configure AI_GATEWAY_API_KEY or use a provider module. Learn more: ${r}`
  }) : Object.assign(
    new Error(`\x1B[1m\x1B[31mUnauthenticated request to AI Gateway.\x1B[0m

To authenticate, set the \x1B[33mAI_GATEWAY_API_KEY\x1B[0m environment variable with your API key.

Alternatively, you can use a provider module instead of the AI Gateway.

Learn more: \x1B[34m${r}\x1B[0m

`),
    { name: "GatewayAuthenticationError" }
  );
}
function Pr({
  operationId: e,
  telemetry: t
}) {
  return {
    // standardized operation and resource name:
    "operation.name": `${e}${(t == null ? void 0 : t.functionId) != null ? ` ${t.functionId}` : ""}`,
    "resource.name": t == null ? void 0 : t.functionId,
    // detailed, AI SDK specific data:
    "ai.operationId": e,
    "ai.telemetry.functionId": t == null ? void 0 : t.functionId
  };
}
function lu({
  model: e,
  settings: t,
  telemetry: r,
  headers: n
}) {
  var a;
  return {
    "ai.model.provider": e.provider,
    "ai.model.id": e.modelId,
    // settings:
    ...Object.entries(t).reduce((o, [s, i]) => (o[`ai.settings.${s}`] = i, o), {}),
    // add metadata as attributes:
    ...Object.entries((a = r == null ? void 0 : r.metadata) != null ? a : {}).reduce(
      (o, [s, i]) => (o[`ai.telemetry.metadata.${s}`] = i, o),
      {}
    ),
    // request headers
    ...Object.entries(n ?? {}).reduce((o, [s, i]) => (i !== void 0 && (o[`ai.request.headers.${s}`] = i), o), {})
  };
}
var bv = {
  startSpan() {
    return Wr;
  },
  startActiveSpan(e, t, r, n) {
    if (typeof t == "function")
      return t(Wr);
    if (typeof r == "function")
      return r(Wr);
    if (typeof n == "function")
      return n(Wr);
  }
}, Wr = {
  spanContext() {
    return Iv;
  },
  setAttribute() {
    return this;
  },
  setAttributes() {
    return this;
  },
  addEvent() {
    return this;
  },
  addLink() {
    return this;
  },
  addLinks() {
    return this;
  },
  setStatus() {
    return this;
  },
  updateName() {
    return this;
  },
  end() {
    return this;
  },
  isRecording() {
    return !1;
  },
  recordException() {
    return this;
  }
}, Iv = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
function uu({
  isEnabled: e = !1,
  tracer: t
} = {}) {
  return e ? t || Cy.getTracer("ai") : bv;
}
async function kr({
  name: e,
  tracer: t,
  attributes: r,
  fn: n,
  endWhenDone: a = !0
}) {
  return t.startActiveSpan(
    e,
    { attributes: await r },
    async (o) => {
      try {
        const s = await n(o);
        return a && o.end(), s;
      } catch (s) {
        try {
          cu(o, s);
        } finally {
          o.end();
        }
        throw s;
      }
    }
  );
}
function cu(e, t) {
  t instanceof Error ? (e.recordException({
    name: t.name,
    message: t.message,
    stack: t.stack
  }), e.setStatus({
    code: hn.ERROR,
    message: t.message
  })) : e.setStatus({ code: hn.ERROR });
}
async function st({
  telemetry: e,
  attributes: t
}) {
  if ((e == null ? void 0 : e.isEnabled) !== !0)
    return {};
  const r = {};
  for (const [n, a] of Object.entries(t))
    if (a != null) {
      if (typeof a == "object" && "input" in a && typeof a.input == "function") {
        if ((e == null ? void 0 : e.recordInputs) === !1)
          continue;
        const o = await a.input();
        o != null && (r[n] = o);
        continue;
      }
      if (typeof a == "object" && "output" in a && typeof a.output == "function") {
        if ((e == null ? void 0 : e.recordOutputs) === !1)
          continue;
        const o = await a.output();
        o != null && (r[n] = o);
        continue;
      }
      r[n] = a;
    }
  return r;
}
function du(e) {
  return JSON.stringify(
    e.map((t) => ({
      ...t,
      content: typeof t.content == "string" ? t.content : t.content.map(
        (r) => r.type === "file" ? {
          ...r,
          data: r.data instanceof Uint8Array ? iv(r.data) : r.data
        } : r
      )
    }))
  );
}
function pu(e) {
  return {
    inputTokens: e.inputTokens.total,
    inputTokenDetails: {
      noCacheTokens: e.inputTokens.noCache,
      cacheReadTokens: e.inputTokens.cacheRead,
      cacheWriteTokens: e.inputTokens.cacheWrite
    },
    outputTokens: e.outputTokens.total,
    outputTokenDetails: {
      textTokens: e.outputTokens.text,
      reasoningTokens: e.outputTokens.reasoning
    },
    totalTokens: Qe(
      e.inputTokens.total,
      e.outputTokens.total
    ),
    raw: e.raw,
    reasoningTokens: e.outputTokens.reasoning,
    cachedInputTokens: e.inputTokens.cacheRead
  };
}
function qn() {
  return {
    inputTokens: void 0,
    inputTokenDetails: {
      noCacheTokens: void 0,
      cacheReadTokens: void 0,
      cacheWriteTokens: void 0
    },
    outputTokens: void 0,
    outputTokenDetails: {
      textTokens: void 0,
      reasoningTokens: void 0
    },
    totalTokens: void 0,
    raw: void 0
  };
}
function fu(e, t) {
  var r, n, a, o, s, i, l, u, c, d;
  return {
    inputTokens: Qe(e.inputTokens, t.inputTokens),
    inputTokenDetails: {
      noCacheTokens: Qe(
        (r = e.inputTokenDetails) == null ? void 0 : r.noCacheTokens,
        (n = t.inputTokenDetails) == null ? void 0 : n.noCacheTokens
      ),
      cacheReadTokens: Qe(
        (a = e.inputTokenDetails) == null ? void 0 : a.cacheReadTokens,
        (o = t.inputTokenDetails) == null ? void 0 : o.cacheReadTokens
      ),
      cacheWriteTokens: Qe(
        (s = e.inputTokenDetails) == null ? void 0 : s.cacheWriteTokens,
        (i = t.inputTokenDetails) == null ? void 0 : i.cacheWriteTokens
      )
    },
    outputTokens: Qe(e.outputTokens, t.outputTokens),
    outputTokenDetails: {
      textTokens: Qe(
        (l = e.outputTokenDetails) == null ? void 0 : l.textTokens,
        (u = t.outputTokenDetails) == null ? void 0 : u.textTokens
      ),
      reasoningTokens: Qe(
        (c = e.outputTokenDetails) == null ? void 0 : c.reasoningTokens,
        (d = t.outputTokenDetails) == null ? void 0 : d.reasoningTokens
      )
    },
    totalTokens: Qe(e.totalTokens, t.totalTokens),
    reasoningTokens: Qe(
      e.reasoningTokens,
      t.reasoningTokens
    ),
    cachedInputTokens: Qe(
      e.cachedInputTokens,
      t.cachedInputTokens
    )
  };
}
function Qe(e, t) {
  return e == null && t == null ? void 0 : (e ?? 0) + (t ?? 0);
}
function Sn(e, t) {
  if (e === void 0 && t === void 0)
    return;
  if (e === void 0)
    return t;
  if (t === void 0)
    return e;
  const r = { ...e };
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n)) {
      const a = t[n];
      if (a === void 0)
        continue;
      const o = n in e ? e[n] : void 0, s = a !== null && typeof a == "object" && !Array.isArray(a) && !(a instanceof Date) && !(a instanceof RegExp), i = o != null && typeof o == "object" && !Array.isArray(o) && !(o instanceof Date) && !(o instanceof RegExp);
      s && i ? r[n] = Sn(
        o,
        a
      ) : r[n] = a;
    }
  return r;
}
function Sv({
  error: e,
  exponentialBackoffDelay: t
}) {
  const r = e.responseHeaders;
  if (!r)
    return t;
  let n;
  const a = r["retry-after-ms"];
  if (a) {
    const s = parseFloat(a);
    Number.isNaN(s) || (n = s);
  }
  const o = r["retry-after"];
  if (o && n === void 0) {
    const s = parseFloat(o);
    Number.isNaN(s) ? n = Date.parse(o) - Date.now() : n = s * 1e3;
  }
  return n != null && !Number.isNaN(n) && 0 <= n && (n < 60 * 1e3 || n < t) ? n : t;
}
var Av = ({
  maxRetries: e = 2,
  initialDelayInMs: t = 2e3,
  backoffFactor: r = 2,
  abortSignal: n
} = {}) => async (a) => gu(a, {
  maxRetries: e,
  delayInMs: t,
  backoffFactor: r,
  abortSignal: n
});
async function gu(e, {
  maxRetries: t,
  delayInMs: r,
  backoffFactor: n,
  abortSignal: a
}, o = []) {
  try {
    return await e();
  } catch (s) {
    if (Lt(s) || t === 0)
      throw s;
    const i = ba(s), l = [...o, s], u = l.length;
    if (u > t)
      throw new fs({
        message: `Failed after ${u} attempts. Last error: ${i}`,
        reason: "maxRetriesExceeded",
        errors: l
      });
    if (s instanceof Error && Le.isInstance(s) && s.isRetryable === !0 && u <= t)
      return await lh(
        Sv({
          error: s,
          exponentialBackoffDelay: r
        }),
        { abortSignal: a }
      ), gu(
        e,
        {
          maxRetries: t,
          delayInMs: n * r,
          backoffFactor: n,
          abortSignal: a
        },
        l
      );
    throw u === 1 ? s : new fs({
      message: `Failed after ${u} attempts with non-retryable error: '${i}'`,
      reason: "errorNotRetryable",
      errors: l
    });
  }
}
function hu({
  maxRetries: e,
  abortSignal: t
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new ot({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be an integer"
      });
    if (e < 0)
      throw new ot({
        parameter: "maxRetries",
        value: e,
        message: "maxRetries must be >= 0"
      });
  }
  const r = e ?? 2;
  return {
    maxRetries: r,
    retry: Av({
      maxRetries: r,
      abortSignal: t
    })
  };
}
function mu({
  messages: e
}) {
  const t = e.at(-1);
  if ((t == null ? void 0 : t.role) != "tool")
    return {
      approvedToolApprovals: [],
      deniedToolApprovals: []
    };
  const r = {};
  for (const l of e)
    if (l.role === "assistant" && typeof l.content != "string") {
      const u = l.content;
      for (const c of u)
        c.type === "tool-call" && (r[c.toolCallId] = c);
    }
  const n = {};
  for (const l of e)
    if (l.role === "assistant" && typeof l.content != "string") {
      const u = l.content;
      for (const c of u)
        c.type === "tool-approval-request" && (n[c.approvalId] = c);
    }
  const a = {};
  for (const l of t.content)
    l.type === "tool-result" && (a[l.toolCallId] = l);
  const o = [], s = [], i = t.content.filter(
    (l) => l.type === "tool-approval-response"
  );
  for (const l of i) {
    const u = n[l.approvalId];
    if (u == null)
      throw new My({
        approvalId: l.approvalId
      });
    if (a[u.toolCallId] != null)
      continue;
    const c = r[u.toolCallId];
    if (c == null)
      throw new Pa({
        toolCallId: u.toolCallId,
        approvalId: u.approvalId
      });
    const d = {
      approvalRequest: u,
      approvalResponse: l,
      toolCall: c
    };
    l.approved ? o.push(d) : s.push(d);
  }
  return { approvedToolApprovals: o, deniedToolApprovals: s };
}
async function Da({
  toolCall: e,
  tools: t,
  tracer: r,
  telemetry: n,
  messages: a,
  abortSignal: o,
  experimental_context: s,
  onPreliminaryToolResult: i
}) {
  const { toolName: l, toolCallId: u, input: c } = e, d = t == null ? void 0 : t[l];
  if ((d == null ? void 0 : d.execute) != null)
    return kr({
      name: "ai.toolCall",
      attributes: st({
        telemetry: n,
        attributes: {
          ...Pr({
            operationId: "ai.toolCall",
            telemetry: n
          }),
          "ai.toolCall.name": l,
          "ai.toolCall.id": u,
          "ai.toolCall.args": {
            output: () => JSON.stringify(c)
          }
        }
      }),
      tracer: r,
      fn: async (p) => {
        let y;
        try {
          const E = ym({
            execute: d.execute.bind(d),
            input: c,
            options: {
              toolCallId: u,
              messages: a,
              abortSignal: o,
              experimental_context: s
            }
          });
          for await (const v of E)
            v.type === "preliminary" ? i == null || i({
              ...e,
              type: "tool-result",
              output: v.output,
              preliminary: !0
            }) : y = v.output;
        } catch (E) {
          return cu(p, E), {
            type: "tool-error",
            toolCallId: u,
            toolName: l,
            input: c,
            error: E,
            dynamic: d.type === "dynamic",
            ...e.providerMetadata != null ? { providerMetadata: e.providerMetadata } : {}
          };
        }
        try {
          p.setAttributes(
            await st({
              telemetry: n,
              attributes: {
                "ai.toolCall.result": {
                  output: () => JSON.stringify(y)
                }
              }
            })
          );
        } catch {
        }
        return {
          type: "tool-result",
          toolCallId: u,
          toolName: l,
          input: c,
          output: y,
          dynamic: d.type === "dynamic",
          ...e.providerMetadata != null ? { providerMetadata: e.providerMetadata } : {}
        };
      }
    });
}
function ys(e) {
  const t = e.filter(
    (r) => r.type === "text"
  );
  if (t.length !== 0)
    return t.map((r) => r.text).join("");
}
var yu = class {
  constructor({
    data: e,
    mediaType: t
  }) {
    const r = e instanceof Uint8Array;
    this.base64Data = r ? void 0 : e, this.uint8ArrayData = r ? e : void 0, this.mediaType = t;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get base64() {
    return this.base64Data == null && (this.base64Data = pn(this.uint8ArrayData)), this.base64Data;
  }
  // lazy conversion with caching to avoid unnecessary conversion overhead:
  get uint8Array() {
    return this.uint8ArrayData == null && (this.uint8ArrayData = Ea(this.base64Data)), this.uint8ArrayData;
  }
}, Nv = class extends yu {
  constructor(e) {
    super(e), this.type = "file";
  }
};
async function vu({
  tool: e,
  toolCall: t,
  messages: r,
  experimental_context: n
}) {
  return e.needsApproval == null ? !1 : typeof e.needsApproval == "boolean" ? e.needsApproval : await e.needsApproval(t.input, {
    toolCallId: t.toolCallId,
    messages: r,
    experimental_context: n
  });
}
var Ov = {};
ky(Ov, {
  array: () => Cv,
  choice: () => Pv,
  json: () => kv,
  object: () => xv,
  text: () => yn
});
function Rv(e) {
  const t = ["ROOT"];
  let r = -1, n = null;
  function a(l, u, c) {
    switch (l) {
      case '"': {
        r = u, t.pop(), t.push(c), t.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        r = u, n = u, t.pop(), t.push(c), t.push("INSIDE_LITERAL");
        break;
      }
      case "-": {
        t.pop(), t.push(c), t.push("INSIDE_NUMBER");
        break;
      }
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9": {
        r = u, t.pop(), t.push(c), t.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        r = u, t.pop(), t.push(c), t.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        r = u, t.pop(), t.push(c), t.push("INSIDE_ARRAY_START");
        break;
      }
    }
  }
  function o(l, u) {
    switch (l) {
      case ",": {
        t.pop(), t.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        r = u, t.pop();
        break;
      }
    }
  }
  function s(l, u) {
    switch (l) {
      case ",": {
        t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      }
      case "]": {
        r = u, t.pop();
        break;
      }
    }
  }
  for (let l = 0; l < e.length; l++) {
    const u = e[l];
    switch (t[t.length - 1]) {
      case "ROOT":
        a(u, l, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (u) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            r = l, t.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_COMMA": {
        switch (u) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        switch (u) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_AFTER_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        switch (u) {
          case ":": {
            t.pop(), t.push("INSIDE_OBJECT_BEFORE_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        a(u, l, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        o(u, l);
        break;
      }
      case "INSIDE_STRING": {
        switch (u) {
          case '"': {
            t.pop(), r = l;
            break;
          }
          case "\\": {
            t.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default:
            r = l;
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (u) {
          case "]": {
            r = l, t.pop();
            break;
          }
          default: {
            r = l, a(u, l, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (u) {
          case ",": {
            t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
            break;
          }
          case "]": {
            r = l, t.pop();
            break;
          }
          default: {
            r = l;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        a(u, l, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        t.pop(), r = l;
        break;
      }
      case "INSIDE_NUMBER": {
        switch (u) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9": {
            r = l;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && s(u, l), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && o(u, l);
            break;
          }
          case "}": {
            t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && o(u, l);
            break;
          }
          case "]": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && s(u, l);
            break;
          }
          default: {
            t.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_LITERAL": {
        const d = e.substring(n, l + 1);
        !"false".startsWith(d) && !"true".startsWith(d) && !"null".startsWith(d) ? (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? o(u, l) : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && s(u, l)) : r = l;
        break;
      }
    }
  }
  let i = e.slice(0, r + 1);
  for (let l = t.length - 1; l >= 0; l--)
    switch (t[l]) {
      case "INSIDE_STRING": {
        i += '"';
        break;
      }
      case "INSIDE_OBJECT_KEY":
      case "INSIDE_OBJECT_AFTER_KEY":
      case "INSIDE_OBJECT_AFTER_COMMA":
      case "INSIDE_OBJECT_START":
      case "INSIDE_OBJECT_BEFORE_VALUE":
      case "INSIDE_OBJECT_AFTER_VALUE": {
        i += "}";
        break;
      }
      case "INSIDE_ARRAY_START":
      case "INSIDE_ARRAY_AFTER_COMMA":
      case "INSIDE_ARRAY_AFTER_VALUE": {
        i += "]";
        break;
      }
      case "INSIDE_LITERAL": {
        const c = e.substring(n, e.length);
        "true".startsWith(c) ? i += "true".slice(c.length) : "false".startsWith(c) ? i += "false".slice(c.length) : "null".startsWith(c) && (i += "null".slice(c.length));
      }
    }
  return i;
}
async function Lr(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = await tt({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = await tt({ text: Rv(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var yn = () => ({
  responseFormat: Promise.resolve({ type: "text" }),
  async parseCompleteOutput({ text: e }) {
    return e;
  },
  async parsePartialOutput({ text: e }) {
    return { partial: e };
  }
}), xv = ({
  schema: e,
  name: t,
  description: r
}) => {
  const n = lr(e);
  return {
    responseFormat: He(n.jsonSchema).then((a) => ({
      type: "json",
      schema: a,
      ...t != null && { name: t },
      ...r != null && { description: r }
    })),
    async parseCompleteOutput({ text: a }, o) {
      const s = await tt({ text: a });
      if (!s.success)
        throw new bt({
          message: "No object generated: could not parse the response.",
          cause: s.error,
          text: a,
          response: o.response,
          usage: o.usage,
          finishReason: o.finishReason
        });
      const i = await it({
        value: s.value,
        schema: n
      });
      if (!i.success)
        throw new bt({
          message: "No object generated: response did not match schema.",
          cause: i.error,
          text: a,
          response: o.response,
          usage: o.usage,
          finishReason: o.finishReason
        });
      return i.value;
    },
    async parsePartialOutput({ text: a }) {
      const o = await Lr(a);
      switch (o.state) {
        case "failed-parse":
        case "undefined-input":
          return;
        case "repaired-parse":
        case "successful-parse":
          return {
            // Note: currently no validation of partial results:
            partial: o.value
          };
      }
    }
  };
}, Cv = ({
  element: e,
  name: t,
  description: r
}) => {
  const n = lr(e);
  return {
    // JSON schema that describes an array of elements:
    responseFormat: He(n.jsonSchema).then((a) => {
      const { $schema: o, ...s } = a;
      return {
        type: "json",
        schema: {
          $schema: "http://json-schema.org/draft-07/schema#",
          type: "object",
          properties: {
            elements: { type: "array", items: s }
          },
          required: ["elements"],
          additionalProperties: !1
        },
        ...t != null && { name: t },
        ...r != null && { description: r }
      };
    }),
    async parseCompleteOutput({ text: a }, o) {
      const s = await tt({ text: a });
      if (!s.success)
        throw new bt({
          message: "No object generated: could not parse the response.",
          cause: s.error,
          text: a,
          response: o.response,
          usage: o.usage,
          finishReason: o.finishReason
        });
      const i = s.value;
      if (i == null || typeof i != "object" || !("elements" in i) || !Array.isArray(i.elements))
        throw new bt({
          message: "No object generated: response did not match schema.",
          cause: new Ft({
            value: i,
            cause: "response must be an object with an elements array"
          }),
          text: a,
          response: o.response,
          usage: o.usage,
          finishReason: o.finishReason
        });
      for (const l of i.elements) {
        const u = await it({
          value: l,
          schema: n
        });
        if (!u.success)
          throw new bt({
            message: "No object generated: response did not match schema.",
            cause: u.error,
            text: a,
            response: o.response,
            usage: o.usage,
            finishReason: o.finishReason
          });
      }
      return i.elements;
    },
    async parsePartialOutput({ text: a }) {
      const o = await Lr(a);
      switch (o.state) {
        case "failed-parse":
        case "undefined-input":
          return;
        case "repaired-parse":
        case "successful-parse": {
          const s = o.value;
          if (s == null || typeof s != "object" || !("elements" in s) || !Array.isArray(s.elements))
            return;
          const i = o.state === "repaired-parse" && s.elements.length > 0 ? s.elements.slice(0, -1) : s.elements, l = [];
          for (const u of i) {
            const c = await it({
              value: u,
              schema: n
            });
            c.success && l.push(c.value);
          }
          return { partial: l };
        }
      }
    }
  };
}, Pv = ({
  options: e,
  name: t,
  description: r
}) => ({
  // JSON schema that describes an enumeration:
  responseFormat: Promise.resolve({
    type: "json",
    schema: {
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: {
        result: { type: "string", enum: e }
      },
      required: ["result"],
      additionalProperties: !1
    },
    ...t != null && { name: t },
    ...r != null && { description: r }
  }),
  async parseCompleteOutput({ text: n }, a) {
    const o = await tt({ text: n });
    if (!o.success)
      throw new bt({
        message: "No object generated: could not parse the response.",
        cause: o.error,
        text: n,
        response: a.response,
        usage: a.usage,
        finishReason: a.finishReason
      });
    const s = o.value;
    if (s == null || typeof s != "object" || !("result" in s) || typeof s.result != "string" || !e.includes(s.result))
      throw new bt({
        message: "No object generated: response did not match schema.",
        cause: new Ft({
          value: s,
          cause: "response must be an object that contains a choice value."
        }),
        text: n,
        response: a.response,
        usage: a.usage,
        finishReason: a.finishReason
      });
    return s.result;
  },
  async parsePartialOutput({ text: n }) {
    const a = await Lr(n);
    switch (a.state) {
      case "failed-parse":
      case "undefined-input":
        return;
      case "repaired-parse":
      case "successful-parse": {
        const o = a.value;
        if (o == null || typeof o != "object" || !("result" in o) || typeof o.result != "string")
          return;
        const s = e.filter(
          (i) => i.startsWith(o.result)
        );
        return a.state === "successful-parse" ? s.includes(o.result) ? { partial: o.result } : void 0 : s.length === 1 ? { partial: s[0] } : void 0;
      }
    }
  }
}), kv = ({
  name: e,
  description: t
} = {}) => ({
  responseFormat: Promise.resolve({
    type: "json",
    ...e != null && { name: e },
    ...t != null && { description: t }
  }),
  async parseCompleteOutput({ text: r }, n) {
    const a = await tt({ text: r });
    if (!a.success)
      throw new bt({
        message: "No object generated: could not parse the response.",
        cause: a.error,
        text: r,
        response: n.response,
        usage: n.usage,
        finishReason: n.finishReason
      });
    return a.value;
  },
  async parsePartialOutput({ text: r }) {
    const n = await Lr(r);
    switch (n.state) {
      case "failed-parse":
      case "undefined-input":
        return;
      case "repaired-parse":
      case "successful-parse":
        return n.value === void 0 ? void 0 : { partial: n.value };
    }
  }
});
async function wu({
  toolCall: e,
  tools: t,
  repairToolCall: r,
  system: n,
  messages: a
}) {
  var o;
  try {
    if (t == null) {
      if (e.providerExecuted && e.dynamic)
        return await _u(e);
      throw new oa({ toolName: e.toolName });
    }
    try {
      return await vs({ toolCall: e, tools: t });
    } catch (s) {
      if (r == null || !(oa.isInstance(s) || Ca.isInstance(s)))
        throw s;
      let i = null;
      try {
        i = await r({
          toolCall: e,
          tools: t,
          inputSchema: async ({ toolName: l }) => {
            const { inputSchema: u } = t[l];
            return await lr(u).jsonSchema;
          },
          system: n,
          messages: a,
          error: s
        });
      } catch (l) {
        throw new Gy({
          cause: l,
          originalError: s
        });
      }
      if (i == null)
        throw s;
      return await vs({ toolCall: i, tools: t });
    }
  } catch (s) {
    const i = await tt({ text: e.input }), l = i.success ? i.value : e.input;
    return {
      type: "tool-call",
      toolCallId: e.toolCallId,
      toolName: e.toolName,
      input: l,
      dynamic: !0,
      invalid: !0,
      error: s,
      title: (o = t == null ? void 0 : t[e.toolName]) == null ? void 0 : o.title,
      providerExecuted: e.providerExecuted,
      providerMetadata: e.providerMetadata
    };
  }
}
async function _u(e) {
  const t = e.input.trim() === "" ? { success: !0, value: {} } : await tt({ text: e.input });
  if (t.success === !1)
    throw new Ca({
      toolName: e.toolName,
      toolInput: e.input,
      cause: t.error
    });
  return {
    type: "tool-call",
    toolCallId: e.toolCallId,
    toolName: e.toolName,
    input: t.value,
    providerExecuted: !0,
    dynamic: !0,
    providerMetadata: e.providerMetadata
  };
}
async function vs({
  toolCall: e,
  tools: t
}) {
  const r = e.toolName, n = t[r];
  if (n == null) {
    if (e.providerExecuted && e.dynamic)
      return await _u(e);
    throw new oa({
      toolName: e.toolName,
      availableTools: Object.keys(t)
    });
  }
  const a = lr(n.inputSchema), o = e.input.trim() === "" ? await it({ value: {}, schema: a }) : await tt({ text: e.input, schema: a });
  if (o.success === !1)
    throw new Ca({
      toolName: r,
      toolInput: e.input,
      cause: o.error
    });
  return n.type === "dynamic" ? {
    type: "tool-call",
    toolCallId: e.toolCallId,
    toolName: e.toolName,
    input: o.value,
    providerExecuted: e.providerExecuted,
    providerMetadata: e.providerMetadata,
    dynamic: !0,
    title: n.title
  } : {
    type: "tool-call",
    toolCallId: e.toolCallId,
    toolName: r,
    input: o.value,
    providerExecuted: e.providerExecuted,
    providerMetadata: e.providerMetadata,
    title: n.title
  };
}
var Tu = class {
  constructor({
    content: e,
    finishReason: t,
    rawFinishReason: r,
    usage: n,
    warnings: a,
    request: o,
    response: s,
    providerMetadata: i
  }) {
    this.content = e, this.finishReason = t, this.rawFinishReason = r, this.usage = n, this.warnings = a, this.request = o, this.response = s, this.providerMetadata = i;
  }
  get text() {
    return this.content.filter((e) => e.type === "text").map((e) => e.text).join("");
  }
  get reasoning() {
    return this.content.filter((e) => e.type === "reasoning");
  }
  get reasoningText() {
    return this.reasoning.length === 0 ? void 0 : this.reasoning.map((e) => e.text).join("");
  }
  get files() {
    return this.content.filter((e) => e.type === "file").map((e) => e.file);
  }
  get sources() {
    return this.content.filter((e) => e.type === "source");
  }
  get toolCalls() {
    return this.content.filter((e) => e.type === "tool-call");
  }
  get staticToolCalls() {
    return this.toolCalls.filter(
      (e) => e.dynamic !== !0
    );
  }
  get dynamicToolCalls() {
    return this.toolCalls.filter(
      (e) => e.dynamic === !0
    );
  }
  get toolResults() {
    return this.content.filter((e) => e.type === "tool-result");
  }
  get staticToolResults() {
    return this.toolResults.filter(
      (e) => e.dynamic !== !0
    );
  }
  get dynamicToolResults() {
    return this.toolResults.filter(
      (e) => e.dynamic === !0
    );
  }
};
function Eu(e) {
  return ({ steps: t }) => t.length === e;
}
async function bu({
  stopConditions: e,
  steps: t
}) {
  return (await Promise.all(e.map((r) => r({ steps: t })))).some((r) => r);
}
async function ia({
  content: e,
  tools: t
}) {
  const r = [], n = [];
  for (const o of e)
    if (o.type !== "source" && !((o.type === "tool-result" || o.type === "tool-error") && !o.providerExecuted) && !(o.type === "text" && o.text.length === 0))
      switch (o.type) {
        case "text":
          n.push({
            type: "text",
            text: o.text,
            providerOptions: o.providerMetadata
          });
          break;
        case "reasoning":
          n.push({
            type: "reasoning",
            text: o.text,
            providerOptions: o.providerMetadata
          });
          break;
        case "file":
          n.push({
            type: "file",
            data: o.file.base64,
            mediaType: o.file.mediaType,
            providerOptions: o.providerMetadata
          });
          break;
        case "tool-call":
          n.push({
            type: "tool-call",
            toolCallId: o.toolCallId,
            toolName: o.toolName,
            input: o.input,
            providerExecuted: o.providerExecuted,
            providerOptions: o.providerMetadata
          });
          break;
        case "tool-result": {
          const s = await Er({
            toolCallId: o.toolCallId,
            input: o.input,
            tool: t == null ? void 0 : t[o.toolName],
            output: o.output,
            errorMode: "none"
          });
          n.push({
            type: "tool-result",
            toolCallId: o.toolCallId,
            toolName: o.toolName,
            output: s,
            providerOptions: o.providerMetadata
          });
          break;
        }
        case "tool-error": {
          const s = await Er({
            toolCallId: o.toolCallId,
            input: o.input,
            tool: t == null ? void 0 : t[o.toolName],
            output: o.error,
            errorMode: "json"
          });
          n.push({
            type: "tool-result",
            toolCallId: o.toolCallId,
            toolName: o.toolName,
            output: s,
            providerOptions: o.providerMetadata
          });
          break;
        }
        case "tool-approval-request":
          n.push({
            type: "tool-approval-request",
            approvalId: o.approvalId,
            toolCallId: o.toolCall.toolCallId
          });
          break;
      }
  n.length > 0 && r.push({
    role: "assistant",
    content: n
  });
  const a = [];
  for (const o of e) {
    if (!(o.type === "tool-result" || o.type === "tool-error") || o.providerExecuted)
      continue;
    const s = await Er({
      toolCallId: o.toolCallId,
      input: o.input,
      tool: t == null ? void 0 : t[o.toolName],
      output: o.type === "tool-result" ? o.output : o.error,
      errorMode: o.type === "tool-error" ? "text" : "none"
    });
    a.push({
      type: "tool-result",
      toolCallId: o.toolCallId,
      toolName: o.toolName,
      output: s,
      ...o.providerMetadata != null ? { providerOptions: o.providerMetadata } : {}
    });
  }
  return a.length > 0 && r.push({
    role: "tool",
    content: a
  }), r;
}
var Dv = Fr({
  prefix: "aitxt",
  size: 24
});
async function la({
  model: e,
  tools: t,
  toolChoice: r,
  system: n,
  prompt: a,
  messages: o,
  maxRetries: s,
  abortSignal: i,
  headers: l,
  stopWhen: u = Eu(1),
  experimental_output: c,
  output: d = c,
  experimental_telemetry: p,
  providerOptions: y,
  experimental_activeTools: E,
  activeTools: v = E,
  experimental_prepareStep: b,
  prepareStep: P = b,
  experimental_repairToolCall: k,
  experimental_download: g,
  experimental_context: $,
  _internal: {
    generateId: R = Dv,
    currentDate: h = () => /* @__PURE__ */ new Date()
  } = {},
  onStepFinish: N,
  onFinish: D,
  ...z
}) {
  const le = mn(e), L = xr(u), { maxRetries: ee, retry: te } = hu({
    maxRetries: s,
    abortSignal: i
  }), ce = sa(z), Ce = zr(
    l ?? {},
    `ai/${Xl}`
  ), be = lu({
    model: le,
    telemetry: p,
    headers: Ce,
    settings: { ...ce, maxRetries: ee }
  }), gt = await su({
    system: n,
    prompt: a,
    messages: o
  }), je = uu(p);
  try {
    return await kr({
      name: "ai.generateText",
      attributes: st({
        telemetry: p,
        attributes: {
          ...Pr({
            operationId: "ai.generateText",
            telemetry: p
          }),
          ...be,
          // model:
          "ai.model.provider": le.provider,
          "ai.model.id": le.modelId,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: n, prompt: a, messages: o })
          }
        }
      }),
      tracer: je,
      fn: async (Zt) => {
        var Gt, Me, Bt, Vt, lt, ut, Ur, ht;
        const ur = gt.messages, ct = [], { approvedToolApprovals: jr, deniedToolApprovals: cr } = mu({ messages: ur }), xt = jr.filter(
          (U) => !U.toolCall.providerExecuted
        );
        if (cr.length > 0 || xt.length > 0) {
          const U = await ws({
            toolCalls: xt.map(
              (X) => X.toolCall
            ),
            tools: t,
            tracer: je,
            telemetry: p,
            messages: ur,
            abortSignal: i,
            experimental_context: $
          }), se = [];
          for (const X of U) {
            const dt = await Er({
              toolCallId: X.toolCallId,
              input: X.input,
              tool: t == null ? void 0 : t[X.toolName],
              output: X.type === "tool-result" ? X.output : X.error,
              errorMode: X.type === "tool-error" ? "json" : "none"
            });
            se.push({
              type: "tool-result",
              toolCallId: X.toolCallId,
              toolName: X.toolName,
              output: dt
            });
          }
          for (const X of cr)
            se.push({
              type: "tool-result",
              toolCallId: X.toolCall.toolCallId,
              toolName: X.toolCall.toolName,
              output: {
                type: "execution-denied",
                reason: X.approvalResponse.reason,
                // For provider-executed tools, include approvalId so provider can correlate
                ...X.toolCall.providerExecuted && {
                  providerOptions: {
                    openai: {
                      approvalId: X.approvalResponse.approvalId
                    }
                  }
                }
              }
            });
          ct.push({
            role: "tool",
            content: se
          });
        }
        const qe = [
          ...jr,
          ...cr
        ].filter((U) => U.toolCall.providerExecuted);
        qe.length > 0 && ct.push({
          role: "tool",
          content: qe.map(
            (U) => ({
              type: "tool-approval-response",
              approvalId: U.approvalResponse.approvalId,
              approved: U.approvalResponse.approved,
              reason: U.approvalResponse.reason,
              providerExecuted: !0
            })
          )
        });
        const Zr = sa(z);
        let Y, ge = [], he = [];
        const oe = [], q = /* @__PURE__ */ new Map();
        do {
          const U = [...ur, ...ct], se = await (P == null ? void 0 : P({
            model: le,
            steps: oe,
            stepNumber: oe.length,
            messages: U,
            experimental_context: $
          })), X = mn(
            (Gt = se == null ? void 0 : se.model) != null ? Gt : le
          ), dt = await tu({
            prompt: {
              system: (Me = se == null ? void 0 : se.system) != null ? Me : gt.system,
              messages: (Bt = se == null ? void 0 : se.messages) != null ? Bt : U
            },
            supportedUrls: await X.supportedUrls,
            download: g
          });
          $ = (Vt = se == null ? void 0 : se.experimental_context) != null ? Vt : $;
          const { toolChoice: De, tools: mt } = await ru({
            tools: t,
            toolChoice: (lt = se == null ? void 0 : se.toolChoice) != null ? lt : r,
            activeTools: (ut = se == null ? void 0 : se.activeTools) != null ? ut : v
          });
          Y = await te(
            () => {
              var M;
              return kr({
                name: "ai.generateText.doGenerate",
                attributes: st({
                  telemetry: p,
                  attributes: {
                    ...Pr({
                      operationId: "ai.generateText.doGenerate",
                      telemetry: p
                    }),
                    ...be,
                    // model:
                    "ai.model.provider": X.provider,
                    "ai.model.id": X.modelId,
                    // prompt:
                    "ai.prompt.messages": {
                      input: () => du(dt)
                    },
                    "ai.prompt.tools": {
                      // convert the language model level tools:
                      input: () => mt == null ? void 0 : mt.map((Ie) => JSON.stringify(Ie))
                    },
                    "ai.prompt.toolChoice": {
                      input: () => De != null ? JSON.stringify(De) : void 0
                    },
                    // standardized gen-ai llm span attributes:
                    "gen_ai.system": X.provider,
                    "gen_ai.request.model": X.modelId,
                    "gen_ai.request.frequency_penalty": z.frequencyPenalty,
                    "gen_ai.request.max_tokens": z.maxOutputTokens,
                    "gen_ai.request.presence_penalty": z.presencePenalty,
                    "gen_ai.request.stop_sequences": z.stopSequences,
                    "gen_ai.request.temperature": (M = z.temperature) != null ? M : void 0,
                    "gen_ai.request.top_k": z.topK,
                    "gen_ai.request.top_p": z.topP
                  }
                }),
                tracer: je,
                fn: async (Ie) => {
                  var qt, pt, Ht, Gr, Br, dr, pr, ft;
                  const Vr = Sn(
                    y,
                    se == null ? void 0 : se.providerOptions
                  ), Pe = await X.doGenerate({
                    ...Zr,
                    tools: mt,
                    toolChoice: De,
                    responseFormat: await (d == null ? void 0 : d.responseFormat),
                    prompt: dt,
                    providerOptions: Vr,
                    abortSignal: i,
                    headers: Ce
                  }), vt = {
                    id: (pt = (qt = Pe.response) == null ? void 0 : qt.id) != null ? pt : R(),
                    timestamp: (Gr = (Ht = Pe.response) == null ? void 0 : Ht.timestamp) != null ? Gr : h(),
                    modelId: (dr = (Br = Pe.response) == null ? void 0 : Br.modelId) != null ? dr : X.modelId,
                    headers: (pr = Pe.response) == null ? void 0 : pr.headers,
                    body: (ft = Pe.response) == null ? void 0 : ft.body
                  };
                  return Ie.setAttributes(
                    await st({
                      telemetry: p,
                      attributes: {
                        "ai.response.finishReason": Pe.finishReason.unified,
                        "ai.response.text": {
                          output: () => ys(Pe.content)
                        },
                        "ai.response.toolCalls": {
                          output: () => {
                            const wt = _s(Pe.content);
                            return wt == null ? void 0 : JSON.stringify(wt);
                          }
                        },
                        "ai.response.id": vt.id,
                        "ai.response.model": vt.modelId,
                        "ai.response.timestamp": vt.timestamp.toISOString(),
                        "ai.response.providerMetadata": JSON.stringify(
                          Pe.providerMetadata
                        ),
                        // TODO rename telemetry attributes to inputTokens and outputTokens
                        "ai.usage.promptTokens": Pe.usage.inputTokens.total,
                        "ai.usage.completionTokens": Pe.usage.outputTokens.total,
                        // standardized gen-ai llm span attributes:
                        "gen_ai.response.finish_reasons": [
                          Pe.finishReason.unified
                        ],
                        "gen_ai.response.id": vt.id,
                        "gen_ai.response.model": vt.modelId,
                        "gen_ai.usage.input_tokens": Pe.usage.inputTokens.total,
                        "gen_ai.usage.output_tokens": Pe.usage.outputTokens.total
                      }
                    })
                  ), { ...Pe, response: vt };
                }
              });
            }
          );
          const Te = await Promise.all(
            Y.content.filter(
              (M) => M.type === "tool-call"
            ).map(
              (M) => wu({
                toolCall: M,
                tools: t,
                repairToolCall: k,
                system: n,
                messages: U
              })
            )
          ), Oe = {};
          for (const M of Te) {
            if (M.invalid)
              continue;
            const Ie = t == null ? void 0 : t[M.toolName];
            Ie != null && ((Ie == null ? void 0 : Ie.onInputAvailable) != null && await Ie.onInputAvailable({
              input: M.input,
              toolCallId: M.toolCallId,
              messages: U,
              abortSignal: i,
              experimental_context: $
            }), await vu({
              tool: Ie,
              toolCall: M,
              messages: U,
              experimental_context: $
            }) && (Oe[M.toolCallId] = {
              type: "tool-approval-request",
              approvalId: R(),
              toolCall: M
            }));
          }
          const Ee = Te.filter(
            (M) => M.invalid && M.dynamic
          );
          he = [];
          for (const M of Ee)
            he.push({
              type: "tool-error",
              toolCallId: M.toolCallId,
              toolName: M.toolName,
              input: M.input,
              error: ba(M.error),
              dynamic: !0
            });
          ge = Te.filter(
            (M) => !M.providerExecuted
          ), t != null && he.push(
            ...await ws({
              toolCalls: ge.filter(
                (M) => !M.invalid && Oe[M.toolCallId] == null
              ),
              tools: t,
              tracer: je,
              telemetry: p,
              messages: U,
              abortSignal: i,
              experimental_context: $
            })
          );
          for (const M of Te) {
            if (!M.providerExecuted)
              continue;
            const Ie = t == null ? void 0 : t[M.toolName];
            (Ie == null ? void 0 : Ie.type) === "provider" && Ie.supportsDeferredResults && (Y.content.some(
              (pt) => pt.type === "tool-result" && pt.toolCallId === M.toolCallId
            ) || q.set(M.toolCallId, {
              toolName: M.toolName
            }));
          }
          for (const M of Y.content)
            M.type === "tool-result" && q.delete(M.toolCallId);
          const Ct = Mv({
            content: Y.content,
            toolCalls: Te,
            toolOutputs: he,
            toolApprovalRequests: Object.values(Oe),
            tools: t
          });
          ct.push(
            ...await ia({
              content: Ct,
              tools: t
            })
          );
          const yt = new Tu({
            content: Ct,
            finishReason: Y.finishReason.unified,
            rawFinishReason: Y.finishReason.raw,
            usage: pu(Y.usage),
            warnings: Y.warnings,
            providerMetadata: Y.providerMetadata,
            request: (Ur = Y.request) != null ? Ur : {},
            response: {
              ...Y.response,
              // deep clone msgs to avoid mutating past messages in multi-step:
              messages: structuredClone(ct)
            }
          });
          ka({
            warnings: (ht = Y.warnings) != null ? ht : [],
            provider: X.provider,
            model: X.modelId
          }), oe.push(yt), await (N == null ? void 0 : N(yt));
        } while (
          // Continue if:
          // 1. There are client tool calls that have all been executed, OR
          // 2. There are pending deferred results from provider-executed tools
          (ge.length > 0 && he.length === ge.length || q.size > 0) && // continue until a stop condition is met:
          !await bu({ stopConditions: L, steps: oe })
        );
        Zt.setAttributes(
          await st({
            telemetry: p,
            attributes: {
              "ai.response.finishReason": Y.finishReason.unified,
              "ai.response.text": {
                output: () => ys(Y.content)
              },
              "ai.response.toolCalls": {
                output: () => {
                  const U = _s(Y.content);
                  return U == null ? void 0 : JSON.stringify(U);
                }
              },
              "ai.response.providerMetadata": JSON.stringify(
                Y.providerMetadata
              ),
              // TODO rename telemetry attributes to inputTokens and outputTokens
              "ai.usage.promptTokens": Y.usage.inputTokens.total,
              "ai.usage.completionTokens": Y.usage.outputTokens.total
            }
          })
        );
        const V = oe[oe.length - 1], rt = oe.reduce(
          (U, se) => fu(U, se.usage),
          {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0,
            reasoningTokens: void 0,
            cachedInputTokens: void 0
          }
        );
        await (D == null ? void 0 : D({
          finishReason: V.finishReason,
          rawFinishReason: V.rawFinishReason,
          usage: V.usage,
          content: V.content,
          text: V.text,
          reasoningText: V.reasoningText,
          reasoning: V.reasoning,
          files: V.files,
          sources: V.sources,
          toolCalls: V.toolCalls,
          staticToolCalls: V.staticToolCalls,
          dynamicToolCalls: V.dynamicToolCalls,
          toolResults: V.toolResults,
          staticToolResults: V.staticToolResults,
          dynamicToolResults: V.dynamicToolResults,
          request: V.request,
          response: V.response,
          warnings: V.warnings,
          providerMetadata: V.providerMetadata,
          steps: oe,
          totalUsage: rt,
          experimental_context: $
        }));
        let A;
        return V.finishReason === "stop" && (A = await (d ?? yn()).parseCompleteOutput(
          { text: V.text },
          {
            response: V.response,
            usage: V.usage,
            finishReason: V.finishReason
          }
        )), new $v({
          steps: oe,
          totalUsage: rt,
          output: A
        });
      }
    });
  } catch (Zt) {
    throw iu(Zt);
  }
}
async function ws({
  toolCalls: e,
  tools: t,
  tracer: r,
  telemetry: n,
  messages: a,
  abortSignal: o,
  experimental_context: s
}) {
  return (await Promise.all(
    e.map(
      async (l) => Da({
        toolCall: l,
        tools: t,
        tracer: r,
        telemetry: n,
        messages: a,
        abortSignal: o,
        experimental_context: s
      })
    )
  )).filter(
    (l) => l != null
  );
}
var $v = class {
  constructor(e) {
    this.steps = e.steps, this._output = e.output, this.totalUsage = e.totalUsage;
  }
  get finalStep() {
    return this.steps[this.steps.length - 1];
  }
  get content() {
    return this.finalStep.content;
  }
  get text() {
    return this.finalStep.text;
  }
  get files() {
    return this.finalStep.files;
  }
  get reasoningText() {
    return this.finalStep.reasoningText;
  }
  get reasoning() {
    return this.finalStep.reasoning;
  }
  get toolCalls() {
    return this.finalStep.toolCalls;
  }
  get staticToolCalls() {
    return this.finalStep.staticToolCalls;
  }
  get dynamicToolCalls() {
    return this.finalStep.dynamicToolCalls;
  }
  get toolResults() {
    return this.finalStep.toolResults;
  }
  get staticToolResults() {
    return this.finalStep.staticToolResults;
  }
  get dynamicToolResults() {
    return this.finalStep.dynamicToolResults;
  }
  get sources() {
    return this.finalStep.sources;
  }
  get finishReason() {
    return this.finalStep.finishReason;
  }
  get rawFinishReason() {
    return this.finalStep.rawFinishReason;
  }
  get warnings() {
    return this.finalStep.warnings;
  }
  get providerMetadata() {
    return this.finalStep.providerMetadata;
  }
  get response() {
    return this.finalStep.response;
  }
  get request() {
    return this.finalStep.request;
  }
  get usage() {
    return this.finalStep.usage;
  }
  get experimental_output() {
    return this.output;
  }
  get output() {
    if (this._output == null)
      throw new Fl();
    return this._output;
  }
};
function _s(e) {
  const t = e.filter(
    (r) => r.type === "tool-call"
  );
  if (t.length !== 0)
    return t.map((r) => ({
      toolCallId: r.toolCallId,
      toolName: r.toolName,
      input: r.input
    }));
}
function Mv({
  content: e,
  toolCalls: t,
  toolOutputs: r,
  toolApprovalRequests: n,
  tools: a
}) {
  const o = [];
  for (const s of e)
    switch (s.type) {
      case "text":
      case "reasoning":
      case "source":
        o.push(s);
        break;
      case "file": {
        o.push({
          type: "file",
          file: new yu(s),
          ...s.providerMetadata != null ? { providerMetadata: s.providerMetadata } : {}
        });
        break;
      }
      case "tool-call": {
        o.push(
          t.find((i) => i.toolCallId === s.toolCallId)
        );
        break;
      }
      case "tool-result": {
        const i = t.find(
          (l) => l.toolCallId === s.toolCallId
        );
        if (i == null) {
          const l = a == null ? void 0 : a[s.toolName];
          if (!((l == null ? void 0 : l.type) === "provider" && l.supportsDeferredResults))
            throw new Error(`Tool call ${s.toolCallId} not found.`);
          s.isError ? o.push({
            type: "tool-error",
            toolCallId: s.toolCallId,
            toolName: s.toolName,
            input: void 0,
            error: s.result,
            providerExecuted: !0,
            dynamic: s.dynamic
          }) : o.push({
            type: "tool-result",
            toolCallId: s.toolCallId,
            toolName: s.toolName,
            input: void 0,
            output: s.result,
            providerExecuted: !0,
            dynamic: s.dynamic
          });
          break;
        }
        s.isError ? o.push({
          type: "tool-error",
          toolCallId: s.toolCallId,
          toolName: s.toolName,
          input: i.input,
          error: s.result,
          providerExecuted: !0,
          dynamic: i.dynamic
        }) : o.push({
          type: "tool-result",
          toolCallId: s.toolCallId,
          toolName: s.toolName,
          input: i.input,
          output: s.result,
          providerExecuted: !0,
          dynamic: i.dynamic
        });
        break;
      }
      case "tool-approval-request": {
        const i = t.find(
          (l) => l.toolCallId === s.toolCallId
        );
        if (i == null)
          throw new Pa({
            toolCallId: s.toolCallId,
            approvalId: s.approvalId
          });
        o.push({
          type: "tool-approval-request",
          approvalId: s.approvalId,
          toolCall: i
        });
        break;
      }
    }
  return [...o, ...r, ...n];
}
function An(e, t) {
  const r = new Headers(e ?? {});
  for (const [n, a] of Object.entries(t))
    r.has(n) || r.set(n, a);
  return r;
}
function Fv({
  status: e,
  statusText: t,
  headers: r,
  textStream: n
}) {
  return new Response(n.pipeThrough(new TextEncoderStream()), {
    status: e ?? 200,
    statusText: t,
    headers: An(r, {
      "content-type": "text/plain; charset=utf-8"
    })
  });
}
function Iu({
  response: e,
  status: t,
  statusText: r,
  headers: n,
  stream: a
}) {
  const o = t ?? 200;
  r !== void 0 ? e.writeHead(o, r, n) : e.writeHead(o, n);
  const s = a.getReader();
  (async () => {
    try {
      for (; ; ) {
        const { done: l, value: u } = await s.read();
        if (l)
          break;
        e.write(u) || await new Promise((d) => {
          e.once("drain", d);
        });
      }
    } catch (l) {
      throw l;
    } finally {
      e.end();
    }
  })();
}
function zv({
  response: e,
  status: t,
  statusText: r,
  headers: n,
  textStream: a
}) {
  Iu({
    response: e,
    status: t,
    statusText: r,
    headers: Object.fromEntries(
      An(n, {
        "content-type": "text/plain; charset=utf-8"
      }).entries()
    ),
    stream: a.pipeThrough(new TextEncoderStream())
  });
}
var Su = class extends TransformStream {
  constructor() {
    super({
      transform(e, t) {
        t.enqueue(`data: ${JSON.stringify(e)}

`);
      },
      flush(e) {
        e.enqueue(`data: [DONE]

`);
      }
    });
  }
}, Au = {
  "content-type": "text/event-stream",
  "cache-control": "no-cache",
  connection: "keep-alive",
  "x-vercel-ai-ui-message-stream": "v1",
  "x-accel-buffering": "no"
  // disable nginx buffering
};
function Lv({
  status: e,
  statusText: t,
  headers: r,
  stream: n,
  consumeSseStream: a
}) {
  let o = n.pipeThrough(new Su());
  if (a) {
    const [s, i] = o.tee();
    o = s, a({ stream: i });
  }
  return new Response(o.pipeThrough(new TextEncoderStream()), {
    status: e,
    statusText: t,
    headers: An(r, Au)
  });
}
function Uv({
  originalMessages: e,
  responseMessageId: t
}) {
  if (e == null)
    return;
  const r = e[e.length - 1];
  return (r == null ? void 0 : r.role) === "assistant" ? r.id : typeof t == "function" ? t() : t;
}
function jv(e) {
  return e.type.startsWith("data-");
}
function ua(e) {
  return e.type.startsWith("tool-");
}
function Zv(e) {
  return e.type === "dynamic-tool";
}
function Gv(e) {
  return ua(e) || Zv(e);
}
function Ts(e) {
  return e.type.split("-").slice(1).join("-");
}
function Bv({
  lastMessage: e,
  messageId: t
}) {
  return {
    message: (e == null ? void 0 : e.role) === "assistant" ? e : {
      id: t,
      metadata: void 0,
      role: "assistant",
      parts: []
    },
    activeTextParts: {},
    activeReasoningParts: {},
    partialToolCalls: {}
  };
}
function Vv({
  stream: e,
  messageMetadataSchema: t,
  dataPartSchemas: r,
  runUpdateMessageJob: n,
  onError: a,
  onToolCall: o,
  onData: s
}) {
  return e.pipeThrough(
    new TransformStream({
      async transform(i, l) {
        await n(async ({ state: u, write: c }) => {
          var d, p, y, E;
          function v(g) {
            const R = u.message.parts.filter(Gv).find(
              (h) => h.toolCallId === g
            );
            if (R == null)
              throw new Error(
                `no tool invocation found for tool call ${g}`
              );
            return R;
          }
          function b(g) {
            var $;
            const R = u.message.parts.find(
              (D) => ua(D) && D.toolCallId === g.toolCallId
            ), h = g, N = R;
            R != null ? (R.state = g.state, N.input = h.input, N.output = h.output, N.errorText = h.errorText, N.rawInput = h.rawInput, N.preliminary = h.preliminary, g.title !== void 0 && (N.title = g.title), N.providerExecuted = ($ = h.providerExecuted) != null ? $ : R.providerExecuted, h.providerMetadata != null && R.state === "input-available" && (R.callProviderMetadata = h.providerMetadata)) : u.message.parts.push({
              type: `tool-${g.toolName}`,
              toolCallId: g.toolCallId,
              state: g.state,
              title: g.title,
              input: h.input,
              output: h.output,
              rawInput: h.rawInput,
              errorText: h.errorText,
              providerExecuted: h.providerExecuted,
              preliminary: h.preliminary,
              ...h.providerMetadata != null ? { callProviderMetadata: h.providerMetadata } : {}
            });
          }
          function P(g) {
            var $, R;
            const h = u.message.parts.find(
              (z) => z.type === "dynamic-tool" && z.toolCallId === g.toolCallId
            ), N = g, D = h;
            h != null ? (h.state = g.state, D.toolName = g.toolName, D.input = N.input, D.output = N.output, D.errorText = N.errorText, D.rawInput = ($ = N.rawInput) != null ? $ : D.rawInput, D.preliminary = N.preliminary, g.title !== void 0 && (D.title = g.title), D.providerExecuted = (R = N.providerExecuted) != null ? R : h.providerExecuted, N.providerMetadata != null && h.state === "input-available" && (h.callProviderMetadata = N.providerMetadata)) : u.message.parts.push({
              type: "dynamic-tool",
              toolName: g.toolName,
              toolCallId: g.toolCallId,
              state: g.state,
              input: N.input,
              output: N.output,
              errorText: N.errorText,
              preliminary: N.preliminary,
              providerExecuted: N.providerExecuted,
              title: g.title,
              ...N.providerMetadata != null ? { callProviderMetadata: N.providerMetadata } : {}
            });
          }
          async function k(g) {
            if (g != null) {
              const $ = u.message.metadata != null ? Sn(u.message.metadata, g) : g;
              t != null && await na({
                value: $,
                schema: t
              }), u.message.metadata = $;
            }
          }
          switch (i.type) {
            case "text-start": {
              const g = {
                type: "text",
                text: "",
                providerMetadata: i.providerMetadata,
                state: "streaming"
              };
              u.activeTextParts[i.id] = g, u.message.parts.push(g), c();
              break;
            }
            case "text-delta": {
              const g = u.activeTextParts[i.id];
              g.text += i.delta, g.providerMetadata = (d = i.providerMetadata) != null ? d : g.providerMetadata, c();
              break;
            }
            case "text-end": {
              const g = u.activeTextParts[i.id];
              g.state = "done", g.providerMetadata = (p = i.providerMetadata) != null ? p : g.providerMetadata, delete u.activeTextParts[i.id], c();
              break;
            }
            case "reasoning-start": {
              const g = {
                type: "reasoning",
                text: "",
                providerMetadata: i.providerMetadata,
                state: "streaming"
              };
              u.activeReasoningParts[i.id] = g, u.message.parts.push(g), c();
              break;
            }
            case "reasoning-delta": {
              const g = u.activeReasoningParts[i.id];
              g.text += i.delta, g.providerMetadata = (y = i.providerMetadata) != null ? y : g.providerMetadata, c();
              break;
            }
            case "reasoning-end": {
              const g = u.activeReasoningParts[i.id];
              g.providerMetadata = (E = i.providerMetadata) != null ? E : g.providerMetadata, g.state = "done", delete u.activeReasoningParts[i.id], c();
              break;
            }
            case "file": {
              u.message.parts.push({
                type: "file",
                mediaType: i.mediaType,
                url: i.url
              }), c();
              break;
            }
            case "source-url": {
              u.message.parts.push({
                type: "source-url",
                sourceId: i.sourceId,
                url: i.url,
                title: i.title,
                providerMetadata: i.providerMetadata
              }), c();
              break;
            }
            case "source-document": {
              u.message.parts.push({
                type: "source-document",
                sourceId: i.sourceId,
                mediaType: i.mediaType,
                title: i.title,
                filename: i.filename,
                providerMetadata: i.providerMetadata
              }), c();
              break;
            }
            case "tool-input-start": {
              const g = u.message.parts.filter(ua);
              u.partialToolCalls[i.toolCallId] = {
                text: "",
                toolName: i.toolName,
                index: g.length,
                dynamic: i.dynamic,
                title: i.title
              }, i.dynamic ? P({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "input-streaming",
                input: void 0,
                providerExecuted: i.providerExecuted,
                title: i.title
              }) : b({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "input-streaming",
                input: void 0,
                providerExecuted: i.providerExecuted,
                title: i.title
              }), c();
              break;
            }
            case "tool-input-delta": {
              const g = u.partialToolCalls[i.toolCallId];
              g.text += i.inputTextDelta;
              const { value: $ } = await Lr(
                g.text
              );
              g.dynamic ? P({
                toolCallId: i.toolCallId,
                toolName: g.toolName,
                state: "input-streaming",
                input: $,
                title: g.title
              }) : b({
                toolCallId: i.toolCallId,
                toolName: g.toolName,
                state: "input-streaming",
                input: $,
                title: g.title
              }), c();
              break;
            }
            case "tool-input-available": {
              i.dynamic ? P({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "input-available",
                input: i.input,
                providerExecuted: i.providerExecuted,
                providerMetadata: i.providerMetadata,
                title: i.title
              }) : b({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "input-available",
                input: i.input,
                providerExecuted: i.providerExecuted,
                providerMetadata: i.providerMetadata,
                title: i.title
              }), c(), o && !i.providerExecuted && await o({
                toolCall: i
              });
              break;
            }
            case "tool-input-error": {
              i.dynamic ? P({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "output-error",
                input: i.input,
                errorText: i.errorText,
                providerExecuted: i.providerExecuted,
                providerMetadata: i.providerMetadata
              }) : b({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "output-error",
                input: void 0,
                rawInput: i.input,
                errorText: i.errorText,
                providerExecuted: i.providerExecuted,
                providerMetadata: i.providerMetadata
              }), c();
              break;
            }
            case "tool-approval-request": {
              const g = v(i.toolCallId);
              g.state = "approval-requested", g.approval = { id: i.approvalId }, c();
              break;
            }
            case "tool-output-denied": {
              const g = v(i.toolCallId);
              g.state = "output-denied", c();
              break;
            }
            case "tool-output-available": {
              const g = v(i.toolCallId);
              g.type === "dynamic-tool" ? P({
                toolCallId: i.toolCallId,
                toolName: g.toolName,
                state: "output-available",
                input: g.input,
                output: i.output,
                preliminary: i.preliminary,
                providerExecuted: i.providerExecuted,
                title: g.title
              }) : b({
                toolCallId: i.toolCallId,
                toolName: Ts(g),
                state: "output-available",
                input: g.input,
                output: i.output,
                providerExecuted: i.providerExecuted,
                preliminary: i.preliminary,
                title: g.title
              }), c();
              break;
            }
            case "tool-output-error": {
              const g = v(i.toolCallId);
              g.type === "dynamic-tool" ? P({
                toolCallId: i.toolCallId,
                toolName: g.toolName,
                state: "output-error",
                input: g.input,
                errorText: i.errorText,
                providerExecuted: i.providerExecuted,
                title: g.title
              }) : b({
                toolCallId: i.toolCallId,
                toolName: Ts(g),
                state: "output-error",
                input: g.input,
                rawInput: g.rawInput,
                errorText: i.errorText,
                providerExecuted: i.providerExecuted,
                title: g.title
              }), c();
              break;
            }
            case "start-step": {
              u.message.parts.push({ type: "step-start" });
              break;
            }
            case "finish-step": {
              u.activeTextParts = {}, u.activeReasoningParts = {};
              break;
            }
            case "start": {
              i.messageId != null && (u.message.id = i.messageId), await k(i.messageMetadata), (i.messageId != null || i.messageMetadata != null) && c();
              break;
            }
            case "finish": {
              i.finishReason != null && (u.finishReason = i.finishReason), await k(i.messageMetadata), i.messageMetadata != null && c();
              break;
            }
            case "message-metadata": {
              await k(i.messageMetadata), i.messageMetadata != null && c();
              break;
            }
            case "error": {
              a == null || a(new Error(i.errorText));
              break;
            }
            default:
              if (jv(i)) {
                (r == null ? void 0 : r[i.type]) != null && await na({
                  value: i.data,
                  schema: r[i.type]
                });
                const g = i;
                if (g.transient) {
                  s == null || s(g);
                  break;
                }
                const $ = g.id != null ? u.message.parts.find(
                  (R) => g.type === R.type && g.id === R.id
                ) : void 0;
                $ != null ? $.data = g.data : u.message.parts.push(g), s == null || s(g), c();
              }
          }
          l.enqueue(i);
        });
      }
    })
  );
}
function qv({
  messageId: e,
  originalMessages: t = [],
  onFinish: r,
  onError: n,
  stream: a
}) {
  let o = t == null ? void 0 : t[t.length - 1];
  (o == null ? void 0 : o.role) !== "assistant" ? o = void 0 : e = o.id;
  let s = !1;
  const i = a.pipeThrough(
    new TransformStream({
      transform(p, y) {
        if (p.type === "start") {
          const E = p;
          E.messageId == null && e != null && (E.messageId = e);
        }
        p.type === "abort" && (s = !0), y.enqueue(p);
      }
    })
  );
  if (r == null)
    return i;
  const l = Bv({
    lastMessage: o ? structuredClone(o) : void 0,
    messageId: e ?? ""
    // will be overridden by the stream
  }), u = async (p) => {
    await p({ state: l, write: () => {
    } });
  };
  let c = !1;
  const d = async () => {
    if (c || !r)
      return;
    c = !0;
    const p = l.message.id === (o == null ? void 0 : o.id);
    await r({
      isAborted: s,
      isContinuation: p,
      responseMessage: l.message,
      messages: [
        ...p ? t.slice(0, -1) : t,
        l.message
      ],
      finishReason: l.finishReason
    });
  };
  return Vv({
    stream: i,
    runUpdateMessageJob: u,
    onError: n
  }).pipeThrough(
    new TransformStream({
      transform(p, y) {
        y.enqueue(p);
      },
      // @ts-expect-error cancel is still new and missing from types https://developer.mozilla.org/en-US/docs/Web/API/TransformStream#browser_compatibility
      async cancel() {
        await d();
      },
      async flush() {
        await d();
      }
    })
  );
}
function Hv({
  response: e,
  status: t,
  statusText: r,
  headers: n,
  stream: a,
  consumeSseStream: o
}) {
  let s = a.pipeThrough(new Su());
  if (o) {
    const [i, l] = s.tee();
    s = i, o({ stream: l });
  }
  Iu({
    response: e,
    status: t,
    statusText: r,
    headers: Object.fromEntries(
      An(n, Au).entries()
    ),
    stream: s.pipeThrough(new TextEncoderStream())
  });
}
function Kr(e) {
  const t = e.pipeThrough(new TransformStream());
  return t[Symbol.asyncIterator] = function() {
    const r = this.getReader();
    let n = !1;
    async function a(o) {
      var s;
      n = !0;
      try {
        o && await ((s = r.cancel) == null ? void 0 : s.call(r));
      } finally {
        try {
          r.releaseLock();
        } catch {
        }
      }
    }
    return {
      /**
       * Reads the next chunk from the stream.
       * @returns A promise resolving to the next IteratorResult.
       */
      async next() {
        if (n)
          return { done: !0, value: void 0 };
        const { done: o, value: s } = await r.read();
        return o ? (await a(!0), { done: !0, value: void 0 }) : { done: !1, value: s };
      },
      /**
       * Called on early exit (e.g., break from for-await).
       * Ensures the stream is cancelled and resources are released.
       * @returns A promise resolving to a completed IteratorResult.
       */
      async return() {
        return await a(!0), { done: !0, value: void 0 };
      },
      /**
       * Called on early exit with error.
       * Ensures the stream is cancelled and resources are released, then rethrows the error.
       * @param err The error to throw.
       * @returns A promise that rejects with the provided error.
       */
      async throw(o) {
        throw await a(!0), o;
      }
    };
  }, t;
}
async function Jv({
  stream: e,
  onError: t
}) {
  const r = e.getReader();
  try {
    for (; ; ) {
      const { done: n } = await r.read();
      if (n)
        break;
    }
  } catch (n) {
    t == null || t(n);
  } finally {
    r.releaseLock();
  }
}
function Es() {
  let e, t;
  return {
    promise: new Promise((n, a) => {
      e = n, t = a;
    }),
    resolve: e,
    reject: t
  };
}
function Yv() {
  let e = [], t = null, r = !1, n = Es();
  const a = () => {
    r = !0, n.resolve(), e.forEach((s) => s.cancel()), e = [], t == null || t.close();
  }, o = async () => {
    if (r && e.length === 0) {
      t == null || t.close();
      return;
    }
    if (e.length === 0)
      return n = Es(), await n.promise, o();
    try {
      const { value: s, done: i } = await e[0].read();
      i ? (e.shift(), e.length === 0 && r ? t == null || t.close() : await o()) : t == null || t.enqueue(s);
    } catch (s) {
      t == null || t.error(s), e.shift(), a();
    }
  };
  return {
    stream: new ReadableStream({
      start(s) {
        t = s;
      },
      pull: o,
      async cancel() {
        for (const s of e)
          await s.cancel();
        e = [], r = !0;
      }
    }),
    addStream: (s) => {
      if (r)
        throw new Error("Cannot add inner stream: outer stream is closed");
      e.push(s.getReader()), n.resolve();
    },
    /**
     * Gracefully close the outer stream. This will let the inner streams
     * finish processing and then close the outer stream.
     */
    close: () => {
      r = !0, n.resolve(), e.length === 0 && (t == null || t.close());
    },
    /**
     * Immediately close the outer stream. This will cancel all inner streams
     * and close the outer stream.
     */
    terminate: a
  };
}
function Wv() {
  var e, t;
  return (t = (e = globalThis == null ? void 0 : globalThis.performance) == null ? void 0 : e.now()) != null ? t : Date.now();
}
function Kv({
  tools: e,
  generatorStream: t,
  tracer: r,
  telemetry: n,
  system: a,
  messages: o,
  abortSignal: s,
  repairToolCall: i,
  experimental_context: l,
  generateId: u
}) {
  let c = null;
  const d = new ReadableStream({
    start(g) {
      c = g;
    }
  }), p = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map();
  let v = !1, b;
  function P() {
    v && p.size === 0 && (b != null && c.enqueue(b), c.close());
  }
  const k = new TransformStream({
    async transform(g, $) {
      const R = g.type;
      switch (R) {
        case "stream-start":
        case "text-start":
        case "text-delta":
        case "text-end":
        case "reasoning-start":
        case "reasoning-delta":
        case "reasoning-end":
        case "tool-input-start":
        case "tool-input-delta":
        case "tool-input-end":
        case "source":
        case "response-metadata":
        case "error":
        case "raw": {
          $.enqueue(g);
          break;
        }
        case "file": {
          $.enqueue({
            type: "file",
            file: new Nv({
              data: g.data,
              mediaType: g.mediaType
            })
          });
          break;
        }
        case "finish": {
          b = {
            type: "finish",
            finishReason: g.finishReason.unified,
            rawFinishReason: g.finishReason.raw,
            usage: pu(g.usage),
            providerMetadata: g.providerMetadata
          };
          break;
        }
        case "tool-approval-request": {
          const h = E.get(g.toolCallId);
          if (h == null) {
            c.enqueue({
              type: "error",
              error: new Pa({
                toolCallId: g.toolCallId,
                approvalId: g.approvalId
              })
            });
            break;
          }
          $.enqueue({
            type: "tool-approval-request",
            approvalId: g.approvalId,
            toolCall: h
          });
          break;
        }
        case "tool-call": {
          try {
            const h = await wu({
              toolCall: g,
              tools: e,
              repairToolCall: i,
              system: a,
              messages: o
            });
            if (E.set(h.toolCallId, h), $.enqueue(h), h.invalid) {
              c.enqueue({
                type: "tool-error",
                toolCallId: h.toolCallId,
                toolName: h.toolName,
                input: h.input,
                error: ba(h.error),
                dynamic: !0,
                title: h.title
              });
              break;
            }
            const N = e == null ? void 0 : e[h.toolName];
            if (N == null)
              break;
            if (N.onInputAvailable != null && await N.onInputAvailable({
              input: h.input,
              toolCallId: h.toolCallId,
              messages: o,
              abortSignal: s,
              experimental_context: l
            }), await vu({
              tool: N,
              toolCall: h,
              messages: o,
              experimental_context: l
            })) {
              c.enqueue({
                type: "tool-approval-request",
                approvalId: u(),
                toolCall: h
              });
              break;
            }
            if (y.set(h.toolCallId, h.input), N.execute != null && h.providerExecuted !== !0) {
              const D = u();
              p.add(D), Da({
                toolCall: h,
                tools: e,
                tracer: r,
                telemetry: n,
                messages: o,
                abortSignal: s,
                experimental_context: l,
                onPreliminaryToolResult: (z) => {
                  c.enqueue(z);
                }
              }).then((z) => {
                c.enqueue(z);
              }).catch((z) => {
                c.enqueue({
                  type: "error",
                  error: z
                });
              }).finally(() => {
                p.delete(D), P();
              });
            }
          } catch (h) {
            c.enqueue({ type: "error", error: h });
          }
          break;
        }
        case "tool-result": {
          const h = g.toolName;
          g.isError ? c.enqueue({
            type: "tool-error",
            toolCallId: g.toolCallId,
            toolName: h,
            input: y.get(g.toolCallId),
            providerExecuted: !0,
            error: g.result,
            dynamic: g.dynamic
          }) : $.enqueue({
            type: "tool-result",
            toolCallId: g.toolCallId,
            toolName: h,
            input: y.get(g.toolCallId),
            output: g.result,
            providerExecuted: !0,
            dynamic: g.dynamic
          });
          break;
        }
        default: {
          const h = R;
          throw new Error(`Unhandled chunk type: ${h}`);
        }
      }
    },
    flush() {
      v = !0, P();
    }
  });
  return new ReadableStream({
    async start(g) {
      return Promise.all([
        t.pipeThrough(k).pipeTo(
          new WritableStream({
            write($) {
              g.enqueue($);
            },
            close() {
            }
          })
        ),
        d.pipeTo(
          new WritableStream({
            write($) {
              g.enqueue($);
            },
            close() {
              g.close();
            }
          })
        )
      ]);
    }
  });
}
var Xv = Fr({
  prefix: "aitxt",
  size: 24
});
function Qv({
  model: e,
  tools: t,
  toolChoice: r,
  system: n,
  prompt: a,
  messages: o,
  maxRetries: s,
  abortSignal: i,
  headers: l,
  stopWhen: u = Eu(1),
  experimental_output: c,
  output: d = c,
  experimental_telemetry: p,
  prepareStep: y,
  providerOptions: E,
  experimental_activeTools: v,
  activeTools: b = v,
  experimental_repairToolCall: P,
  experimental_transform: k,
  experimental_download: g,
  includeRawChunks: $ = !1,
  onChunk: R,
  onError: h = ({ error: Ce }) => {
    console.error(Ce);
  },
  onFinish: N,
  onAbort: D,
  onStepFinish: z,
  experimental_context: le,
  _internal: {
    now: L = Wv,
    generateId: ee = Xv,
    currentDate: te = () => /* @__PURE__ */ new Date()
  } = {},
  ...ce
}) {
  return new tw({
    model: mn(e),
    telemetry: p,
    headers: l,
    settings: ce,
    maxRetries: s,
    abortSignal: i,
    system: n,
    prompt: a,
    messages: o,
    tools: t,
    toolChoice: r,
    transforms: xr(k),
    activeTools: b,
    repairToolCall: P,
    stopConditions: xr(u),
    output: d,
    providerOptions: E,
    prepareStep: y,
    includeRawChunks: $,
    onChunk: R,
    onError: h,
    onFinish: N,
    onAbort: D,
    onStepFinish: z,
    now: L,
    currentDate: te,
    generateId: ee,
    experimental_context: le,
    download: g
  });
}
function ew(e) {
  let t, r = "", n = "", a, o = "";
  function s({
    controller: i,
    partialOutput: l = void 0
  }) {
    i.enqueue({
      part: {
        type: "text-delta",
        id: t,
        text: n,
        providerMetadata: a
      },
      partialOutput: l
    }), n = "";
  }
  return new TransformStream({
    async transform(i, l) {
      var u;
      if (i.type === "finish-step" && n.length > 0 && s({ controller: l }), i.type !== "text-delta" && i.type !== "text-start" && i.type !== "text-end") {
        l.enqueue({ part: i, partialOutput: void 0 });
        return;
      }
      if (t == null)
        t = i.id;
      else if (i.id !== t) {
        l.enqueue({ part: i, partialOutput: void 0 });
        return;
      }
      if (i.type === "text-start") {
        l.enqueue({ part: i, partialOutput: void 0 });
        return;
      }
      if (i.type === "text-end") {
        n.length > 0 && s({ controller: l }), l.enqueue({ part: i, partialOutput: void 0 });
        return;
      }
      r += i.text, n += i.text, a = (u = i.providerMetadata) != null ? u : a;
      const c = await e.parsePartialOutput({ text: r });
      if (c !== void 0) {
        const d = JSON.stringify(c.partial);
        d !== o && (s({ controller: l, partialOutput: c.partial }), o = d);
      }
    }
  });
}
var tw = class {
  constructor({
    model: e,
    telemetry: t,
    headers: r,
    settings: n,
    maxRetries: a,
    abortSignal: o,
    system: s,
    prompt: i,
    messages: l,
    tools: u,
    toolChoice: c,
    transforms: d,
    activeTools: p,
    repairToolCall: y,
    stopConditions: E,
    output: v,
    providerOptions: b,
    prepareStep: P,
    includeRawChunks: k,
    now: g,
    currentDate: $,
    generateId: R,
    onChunk: h,
    onError: N,
    onFinish: D,
    onAbort: z,
    onStepFinish: le,
    experimental_context: L,
    download: ee
  }) {
    this._totalUsage = new mr(), this._finishReason = new mr(), this._rawFinishReason = new mr(), this._steps = new mr(), this.outputSpecification = v, this.includeRawChunks = k, this.tools = u;
    let te, ce = [];
    const Ce = [];
    let be, gt, je, Zt = {}, Gt = [];
    const Me = [], Bt = /* @__PURE__ */ new Map();
    let Vt, lt = {}, ut = {};
    const Ur = new TransformStream({
      async transform(ge, he) {
        var oe, q, V, rt;
        he.enqueue(ge);
        const { part: A } = ge;
        if ((A.type === "text-delta" || A.type === "reasoning-delta" || A.type === "source" || A.type === "tool-call" || A.type === "tool-result" || A.type === "tool-input-start" || A.type === "tool-input-delta" || A.type === "raw") && await (h == null ? void 0 : h({ chunk: A })), A.type === "error" && await N({ error: iu(A.error) }), A.type === "text-start" && (lt[A.id] = {
          type: "text",
          text: "",
          providerMetadata: A.providerMetadata
        }, ce.push(lt[A.id])), A.type === "text-delta") {
          const U = lt[A.id];
          if (U == null) {
            he.enqueue({
              part: {
                type: "error",
                error: `text part ${A.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          U.text += A.text, U.providerMetadata = (oe = A.providerMetadata) != null ? oe : U.providerMetadata;
        }
        if (A.type === "text-end") {
          const U = lt[A.id];
          if (U == null) {
            he.enqueue({
              part: {
                type: "error",
                error: `text part ${A.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          U.providerMetadata = (q = A.providerMetadata) != null ? q : U.providerMetadata, delete lt[A.id];
        }
        if (A.type === "reasoning-start" && (ut[A.id] = {
          type: "reasoning",
          text: "",
          providerMetadata: A.providerMetadata
        }, ce.push(ut[A.id])), A.type === "reasoning-delta") {
          const U = ut[A.id];
          if (U == null) {
            he.enqueue({
              part: {
                type: "error",
                error: `reasoning part ${A.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          U.text += A.text, U.providerMetadata = (V = A.providerMetadata) != null ? V : U.providerMetadata;
        }
        if (A.type === "reasoning-end") {
          const U = ut[A.id];
          if (U == null) {
            he.enqueue({
              part: {
                type: "error",
                error: `reasoning part ${A.id} not found`
              },
              partialOutput: void 0
            });
            return;
          }
          U.providerMetadata = (rt = A.providerMetadata) != null ? rt : U.providerMetadata, delete ut[A.id];
        }
        if (A.type === "file" && ce.push({ type: "file", file: A.file }), A.type === "source" && ce.push(A), A.type === "tool-call" && ce.push(A), A.type === "tool-result" && !A.preliminary && ce.push(A), A.type === "tool-approval-request" && ce.push(A), A.type === "tool-error" && ce.push(A), A.type === "start-step" && (ce = [], ut = {}, lt = {}, Zt = A.request, Gt = A.warnings), A.type === "finish-step") {
          const U = await ia({
            content: ce,
            tools: u
          }), se = new Tu({
            content: ce,
            finishReason: A.finishReason,
            rawFinishReason: A.rawFinishReason,
            usage: A.usage,
            warnings: Gt,
            request: Zt,
            response: {
              ...A.response,
              messages: [...Ce, ...U]
            },
            providerMetadata: A.providerMetadata
          });
          await (le == null ? void 0 : le(se)), ka({
            warnings: Gt,
            provider: e.provider,
            model: e.modelId
          }), Me.push(se), Ce.push(...U), te.resolve();
        }
        A.type === "finish" && (je = A.totalUsage, be = A.finishReason, gt = A.rawFinishReason);
      },
      async flush(ge) {
        try {
          if (Me.length === 0) {
            const V = new Fl({
              message: "No output generated. Check the stream for errors."
            });
            Y._finishReason.reject(V), Y._rawFinishReason.reject(V), Y._totalUsage.reject(V), Y._steps.reject(V);
            return;
          }
          const he = be ?? "other", oe = je ?? qn();
          Y._finishReason.resolve(he), Y._rawFinishReason.resolve(gt), Y._totalUsage.resolve(oe), Y._steps.resolve(Me);
          const q = Me[Me.length - 1];
          await (D == null ? void 0 : D({
            finishReason: q.finishReason,
            rawFinishReason: q.rawFinishReason,
            totalUsage: oe,
            usage: q.usage,
            content: q.content,
            text: q.text,
            reasoningText: q.reasoningText,
            reasoning: q.reasoning,
            files: q.files,
            sources: q.sources,
            toolCalls: q.toolCalls,
            staticToolCalls: q.staticToolCalls,
            dynamicToolCalls: q.dynamicToolCalls,
            toolResults: q.toolResults,
            staticToolResults: q.staticToolResults,
            dynamicToolResults: q.dynamicToolResults,
            request: q.request,
            response: q.response,
            warnings: q.warnings,
            providerMetadata: q.providerMetadata,
            steps: Me,
            experimental_context: L
          })), Vt.setAttributes(
            await st({
              telemetry: t,
              attributes: {
                "ai.response.finishReason": he,
                "ai.response.text": { output: () => q.text },
                "ai.response.toolCalls": {
                  output: () => {
                    var V;
                    return (V = q.toolCalls) != null && V.length ? JSON.stringify(q.toolCalls) : void 0;
                  }
                },
                "ai.response.providerMetadata": JSON.stringify(
                  q.providerMetadata
                ),
                "ai.usage.inputTokens": oe.inputTokens,
                "ai.usage.outputTokens": oe.outputTokens,
                "ai.usage.totalTokens": oe.totalTokens,
                "ai.usage.reasoningTokens": oe.reasoningTokens,
                "ai.usage.cachedInputTokens": oe.cachedInputTokens
              }
            })
          );
        } catch (he) {
          ge.error(he);
        } finally {
          Vt.end();
        }
      }
    }), ht = Yv();
    this.addStream = ht.addStream, this.closeStream = ht.close;
    const ur = ht.stream.getReader();
    let ct = new ReadableStream({
      async start(ge) {
        ge.enqueue({ type: "start" });
      },
      async pull(ge) {
        function he() {
          z == null || z({ steps: Me }), ge.enqueue({ type: "abort" }), ge.close();
        }
        try {
          const { done: oe, value: q } = await ur.read();
          if (oe) {
            ge.close();
            return;
          }
          if (o != null && o.aborted) {
            he();
            return;
          }
          ge.enqueue(q);
        } catch (oe) {
          Lt(oe) && (o != null && o.aborted) ? he() : ge.error(oe);
        }
      },
      cancel(ge) {
        return ht.stream.cancel(ge);
      }
    });
    for (const ge of d)
      ct = ct.pipeThrough(
        ge({
          tools: u,
          stopStream() {
            ht.terminate();
          }
        })
      );
    this.baseStream = ct.pipeThrough(ew(v ?? yn())).pipeThrough(Ur);
    const { maxRetries: jr, retry: cr } = hu({
      maxRetries: a,
      abortSignal: o
    }), xt = uu(t), qe = sa(n), Zr = lu({
      model: e,
      telemetry: t,
      headers: r,
      settings: { ...qe, maxRetries: jr }
    }), Y = this;
    kr({
      name: "ai.streamText",
      attributes: st({
        telemetry: t,
        attributes: {
          ...Pr({ operationId: "ai.streamText", telemetry: t }),
          ...Zr,
          // specific settings that only make sense on the outer level:
          "ai.prompt": {
            input: () => JSON.stringify({ system: s, prompt: i, messages: l })
          }
        }
      }),
      tracer: xt,
      endWhenDone: !1,
      fn: async (ge) => {
        Vt = ge;
        const he = await su({
          system: s,
          prompt: i,
          messages: l
        }), oe = he.messages, q = [], { approvedToolApprovals: V, deniedToolApprovals: rt } = mu({ messages: oe });
        if (rt.length > 0 || V.length > 0) {
          const U = [
            ...V,
            ...rt
          ].filter((Te) => Te.toolCall.providerExecuted), se = V.filter(
            (Te) => !Te.toolCall.providerExecuted
          ), X = rt.filter(
            (Te) => !Te.toolCall.providerExecuted
          ), dt = rt.filter(
            (Te) => Te.toolCall.providerExecuted
          );
          let De;
          const mt = new ReadableStream({
            start(Te) {
              De = Te;
            }
          });
          Y.addStream(mt);
          try {
            for (const Oe of [
              ...X,
              ...dt
            ])
              De == null || De.enqueue({
                type: "tool-output-denied",
                toolCallId: Oe.toolCall.toolCallId,
                toolName: Oe.toolCall.toolName
              });
            const Te = [];
            if (await Promise.all(
              se.map(async (Oe) => {
                const Ee = await Da({
                  toolCall: Oe.toolCall,
                  tools: u,
                  tracer: xt,
                  telemetry: t,
                  messages: oe,
                  abortSignal: o,
                  experimental_context: L,
                  onPreliminaryToolResult: (Ct) => {
                    De == null || De.enqueue(Ct);
                  }
                });
                Ee != null && (De == null || De.enqueue(Ee), Te.push(Ee));
              })
            ), U.length > 0 && q.push({
              role: "tool",
              content: U.map(
                (Oe) => ({
                  type: "tool-approval-response",
                  approvalId: Oe.approvalResponse.approvalId,
                  approved: Oe.approvalResponse.approved,
                  reason: Oe.approvalResponse.reason,
                  providerExecuted: !0
                })
              )
            }), Te.length > 0 || X.length > 0) {
              const Oe = [];
              for (const Ee of Te)
                Oe.push({
                  type: "tool-result",
                  toolCallId: Ee.toolCallId,
                  toolName: Ee.toolName,
                  output: await Er({
                    toolCallId: Ee.toolCallId,
                    input: Ee.input,
                    tool: u == null ? void 0 : u[Ee.toolName],
                    output: Ee.type === "tool-result" ? Ee.output : Ee.error,
                    errorMode: Ee.type === "tool-error" ? "json" : "none"
                  })
                });
              for (const Ee of X)
                Oe.push({
                  type: "tool-result",
                  toolCallId: Ee.toolCall.toolCallId,
                  toolName: Ee.toolCall.toolName,
                  output: {
                    type: "execution-denied",
                    reason: Ee.approvalResponse.reason
                  }
                });
              q.push({
                role: "tool",
                content: Oe
              });
            }
          } finally {
            De == null || De.close();
          }
        }
        Ce.push(...q);
        async function A({
          currentStep: U,
          responseMessages: se,
          usage: X
        }) {
          var dt, De, mt, Te, Oe, Ee;
          const Ct = Y.includeRawChunks;
          te = new mr();
          const yt = [...oe, ...se], M = await (P == null ? void 0 : P({
            model: e,
            steps: Me,
            stepNumber: Me.length,
            messages: yt,
            experimental_context: L
          })), Ie = mn(
            (dt = M == null ? void 0 : M.model) != null ? dt : e
          ), qt = await tu({
            prompt: {
              system: (De = M == null ? void 0 : M.system) != null ? De : he.system,
              messages: (mt = M == null ? void 0 : M.messages) != null ? mt : yt
            },
            supportedUrls: await Ie.supportedUrls,
            download: ee
          }), { toolChoice: pt, tools: Ht } = await ru({
            tools: u,
            toolChoice: (Te = M == null ? void 0 : M.toolChoice) != null ? Te : c,
            activeTools: (Oe = M == null ? void 0 : M.activeTools) != null ? Oe : p
          });
          L = (Ee = M == null ? void 0 : M.experimental_context) != null ? Ee : L;
          const Gr = Sn(
            b,
            M == null ? void 0 : M.providerOptions
          ), {
            result: { stream: Br, response: dr, request: pr },
            doStreamSpan: ft,
            startTimestampMs: Vr
          } = await cr(
            () => kr({
              name: "ai.streamText.doStream",
              attributes: st({
                telemetry: t,
                attributes: {
                  ...Pr({
                    operationId: "ai.streamText.doStream",
                    telemetry: t
                  }),
                  ...Zr,
                  // model:
                  "ai.model.provider": Ie.provider,
                  "ai.model.id": Ie.modelId,
                  // prompt:
                  "ai.prompt.messages": {
                    input: () => du(qt)
                  },
                  "ai.prompt.tools": {
                    // convert the language model level tools:
                    input: () => Ht == null ? void 0 : Ht.map((F) => JSON.stringify(F))
                  },
                  "ai.prompt.toolChoice": {
                    input: () => pt != null ? JSON.stringify(pt) : void 0
                  },
                  // standardized gen-ai llm span attributes:
                  "gen_ai.system": Ie.provider,
                  "gen_ai.request.model": Ie.modelId,
                  "gen_ai.request.frequency_penalty": qe.frequencyPenalty,
                  "gen_ai.request.max_tokens": qe.maxOutputTokens,
                  "gen_ai.request.presence_penalty": qe.presencePenalty,
                  "gen_ai.request.stop_sequences": qe.stopSequences,
                  "gen_ai.request.temperature": qe.temperature,
                  "gen_ai.request.top_k": qe.topK,
                  "gen_ai.request.top_p": qe.topP
                }
              }),
              tracer: xt,
              endWhenDone: !1,
              fn: async (F) => ({
                startTimestampMs: g(),
                // get before the call
                doStreamSpan: F,
                result: await Ie.doStream({
                  ...qe,
                  tools: Ht,
                  toolChoice: pt,
                  responseFormat: await (v == null ? void 0 : v.responseFormat),
                  prompt: qt,
                  providerOptions: Gr,
                  abortSignal: o,
                  headers: r,
                  includeRawChunks: Ct
                })
              })
            })
          ), Pe = Kv({
            tools: u,
            generatorStream: Br,
            tracer: xt,
            telemetry: t,
            system: s,
            messages: yt,
            repairToolCall: y,
            abortSignal: o,
            experimental_context: L,
            generateId: R
          }), vt = pr ?? {}, wt = [], fr = [];
          let Nn;
          const On = {};
          let Jt = "other", Rn, We = qn(), xn, Fa = !0, nt = {
            id: R(),
            timestamp: $(),
            modelId: e.modelId
          }, za = "";
          Y.addStream(
            Pe.pipeThrough(
              new TransformStream({
                async transform(F, ke) {
                  var gr, hr, qr, Re, Yt;
                  if (F.type === "stream-start") {
                    Nn = F.warnings;
                    return;
                  }
                  if (Fa) {
                    const Se = g() - Vr;
                    Fa = !1, ft.addEvent("ai.stream.firstChunk", {
                      "ai.response.msToFirstChunk": Se
                    }), ft.setAttributes({
                      "ai.response.msToFirstChunk": Se
                    }), ke.enqueue({
                      type: "start-step",
                      request: vt,
                      warnings: Nn ?? []
                    });
                  }
                  const Cn = F.type;
                  switch (Cn) {
                    case "tool-approval-request":
                    case "text-start":
                    case "text-end": {
                      ke.enqueue(F);
                      break;
                    }
                    case "text-delta": {
                      F.delta.length > 0 && (ke.enqueue({
                        type: "text-delta",
                        id: F.id,
                        text: F.delta,
                        providerMetadata: F.providerMetadata
                      }), za += F.delta);
                      break;
                    }
                    case "reasoning-start":
                    case "reasoning-end": {
                      ke.enqueue(F);
                      break;
                    }
                    case "reasoning-delta": {
                      ke.enqueue({
                        type: "reasoning-delta",
                        id: F.id,
                        text: F.delta,
                        providerMetadata: F.providerMetadata
                      });
                      break;
                    }
                    case "tool-call": {
                      ke.enqueue(F), wt.push(F);
                      break;
                    }
                    case "tool-result": {
                      ke.enqueue(F), F.preliminary || fr.push(F);
                      break;
                    }
                    case "tool-error": {
                      ke.enqueue(F), fr.push(F);
                      break;
                    }
                    case "response-metadata": {
                      nt = {
                        id: (gr = F.id) != null ? gr : nt.id,
                        timestamp: (hr = F.timestamp) != null ? hr : nt.timestamp,
                        modelId: (qr = F.modelId) != null ? qr : nt.modelId
                      };
                      break;
                    }
                    case "finish": {
                      We = F.usage, Jt = F.finishReason, Rn = F.rawFinishReason, xn = F.providerMetadata;
                      const Se = g() - Vr;
                      ft.addEvent("ai.stream.finish"), ft.setAttributes({
                        "ai.response.msToFinish": Se,
                        "ai.response.avgOutputTokensPerSecond": 1e3 * ((Re = We.outputTokens) != null ? Re : 0) / Se
                      });
                      break;
                    }
                    case "file": {
                      ke.enqueue(F);
                      break;
                    }
                    case "source": {
                      ke.enqueue(F);
                      break;
                    }
                    case "tool-input-start": {
                      On[F.id] = F.toolName;
                      const Se = u == null ? void 0 : u[F.toolName];
                      (Se == null ? void 0 : Se.onInputStart) != null && await Se.onInputStart({
                        toolCallId: F.id,
                        messages: yt,
                        abortSignal: o,
                        experimental_context: L
                      }), ke.enqueue({
                        ...F,
                        dynamic: (Yt = F.dynamic) != null ? Yt : (Se == null ? void 0 : Se.type) === "dynamic",
                        title: Se == null ? void 0 : Se.title
                      });
                      break;
                    }
                    case "tool-input-end": {
                      delete On[F.id], ke.enqueue(F);
                      break;
                    }
                    case "tool-input-delta": {
                      const Se = On[F.id], Pn = u == null ? void 0 : u[Se];
                      (Pn == null ? void 0 : Pn.onInputDelta) != null && await Pn.onInputDelta({
                        inputTextDelta: F.delta,
                        toolCallId: F.id,
                        messages: yt,
                        abortSignal: o,
                        experimental_context: L
                      }), ke.enqueue(F);
                      break;
                    }
                    case "error": {
                      ke.enqueue(F), Jt = "error";
                      break;
                    }
                    case "raw": {
                      Ct && ke.enqueue(F);
                      break;
                    }
                    default: {
                      const Se = Cn;
                      throw new Error(`Unknown chunk type: ${Se}`);
                    }
                  }
                },
                // invoke onFinish callback and resolve toolResults promise when the stream is about to close:
                async flush(F) {
                  const ke = wt.length > 0 ? JSON.stringify(wt) : void 0;
                  try {
                    ft.setAttributes(
                      await st({
                        telemetry: t,
                        attributes: {
                          "ai.response.finishReason": Jt,
                          "ai.response.text": {
                            output: () => za
                          },
                          "ai.response.toolCalls": {
                            output: () => ke
                          },
                          "ai.response.id": nt.id,
                          "ai.response.model": nt.modelId,
                          "ai.response.timestamp": nt.timestamp.toISOString(),
                          "ai.response.providerMetadata": JSON.stringify(xn),
                          "ai.usage.inputTokens": We.inputTokens,
                          "ai.usage.outputTokens": We.outputTokens,
                          "ai.usage.totalTokens": We.totalTokens,
                          "ai.usage.reasoningTokens": We.reasoningTokens,
                          "ai.usage.cachedInputTokens": We.cachedInputTokens,
                          // standardized gen-ai llm span attributes:
                          "gen_ai.response.finish_reasons": [Jt],
                          "gen_ai.response.id": nt.id,
                          "gen_ai.response.model": nt.modelId,
                          "gen_ai.usage.input_tokens": We.inputTokens,
                          "gen_ai.usage.output_tokens": We.outputTokens
                        }
                      })
                    );
                  } catch {
                  } finally {
                    ft.end();
                  }
                  F.enqueue({
                    type: "finish-step",
                    finishReason: Jt,
                    rawFinishReason: Rn,
                    usage: We,
                    providerMetadata: xn,
                    response: {
                      ...nt,
                      headers: dr == null ? void 0 : dr.headers
                    }
                  });
                  const gr = fu(X, We);
                  await te.promise;
                  const hr = wt.filter(
                    (Re) => Re.providerExecuted !== !0
                  ), qr = fr.filter(
                    (Re) => Re.providerExecuted !== !0
                  );
                  for (const Re of wt) {
                    if (Re.providerExecuted !== !0)
                      continue;
                    const Yt = u == null ? void 0 : u[Re.toolName];
                    (Yt == null ? void 0 : Yt.type) === "provider" && Yt.supportsDeferredResults && (fr.some(
                      (Se) => Se.type === "tool-result" && Se.toolCallId === Re.toolCallId
                    ) || Bt.set(Re.toolCallId, {
                      toolName: Re.toolName
                    }));
                  }
                  for (const Re of fr)
                    Re.type === "tool-result" && Bt.delete(Re.toolCallId);
                  if (
                    // Continue if:
                    // 1. There are client tool calls that have all been executed, OR
                    // 2. There are pending deferred results from provider-executed tools
                    (hr.length > 0 && qr.length === hr.length || Bt.size > 0) && // continue until a stop condition is met:
                    !await bu({
                      stopConditions: E,
                      steps: Me
                    })
                  ) {
                    se.push(
                      ...await ia({
                        content: (
                          // use transformed content to create the messages for the next step:
                          Me[Me.length - 1].content
                        ),
                        tools: u
                      })
                    );
                    try {
                      await A({
                        currentStep: U + 1,
                        responseMessages: se,
                        usage: gr
                      });
                    } catch (Re) {
                      F.enqueue({
                        type: "error",
                        error: Re
                      }), Y.closeStream();
                    }
                  } else
                    F.enqueue({
                      type: "finish",
                      finishReason: Jt,
                      rawFinishReason: Rn,
                      totalUsage: gr
                    }), Y.closeStream();
                }
              })
            )
          );
        }
        await A({
          currentStep: 0,
          responseMessages: q,
          usage: qn()
        });
      }
    }).catch((ge) => {
      Y.addStream(
        new ReadableStream({
          start(he) {
            he.enqueue({ type: "error", error: ge }), he.close();
          }
        })
      ), Y.closeStream();
    });
  }
  get steps() {
    return this.consumeStream(), this._steps.promise;
  }
  get finalStep() {
    return this.steps.then((e) => e[e.length - 1]);
  }
  get content() {
    return this.finalStep.then((e) => e.content);
  }
  get warnings() {
    return this.finalStep.then((e) => e.warnings);
  }
  get providerMetadata() {
    return this.finalStep.then((e) => e.providerMetadata);
  }
  get text() {
    return this.finalStep.then((e) => e.text);
  }
  get reasoningText() {
    return this.finalStep.then((e) => e.reasoningText);
  }
  get reasoning() {
    return this.finalStep.then((e) => e.reasoning);
  }
  get sources() {
    return this.finalStep.then((e) => e.sources);
  }
  get files() {
    return this.finalStep.then((e) => e.files);
  }
  get toolCalls() {
    return this.finalStep.then((e) => e.toolCalls);
  }
  get staticToolCalls() {
    return this.finalStep.then((e) => e.staticToolCalls);
  }
  get dynamicToolCalls() {
    return this.finalStep.then((e) => e.dynamicToolCalls);
  }
  get toolResults() {
    return this.finalStep.then((e) => e.toolResults);
  }
  get staticToolResults() {
    return this.finalStep.then((e) => e.staticToolResults);
  }
  get dynamicToolResults() {
    return this.finalStep.then((e) => e.dynamicToolResults);
  }
  get usage() {
    return this.finalStep.then((e) => e.usage);
  }
  get request() {
    return this.finalStep.then((e) => e.request);
  }
  get response() {
    return this.finalStep.then((e) => e.response);
  }
  get totalUsage() {
    return this.consumeStream(), this._totalUsage.promise;
  }
  get finishReason() {
    return this.consumeStream(), this._finishReason.promise;
  }
  get rawFinishReason() {
    return this.consumeStream(), this._rawFinishReason.promise;
  }
  /**
  Split out a new stream from the original stream.
  The original stream is replaced to allow for further splitting,
  since we do not know how many times the stream will be split.
  
  Note: this leads to buffering the stream content on the server.
  However, the LLM results are expected to be small enough to not cause issues.
     */
  teeStream() {
    const [e, t] = this.baseStream.tee();
    return this.baseStream = t, e;
  }
  get textStream() {
    return Kr(
      this.teeStream().pipeThrough(
        new TransformStream({
          transform({ part: e }, t) {
            e.type === "text-delta" && t.enqueue(e.text);
          }
        })
      )
    );
  }
  get fullStream() {
    return Kr(
      this.teeStream().pipeThrough(
        new TransformStream({
          transform({ part: e }, t) {
            t.enqueue(e);
          }
        })
      )
    );
  }
  async consumeStream(e) {
    var t;
    try {
      await Jv({
        stream: this.fullStream,
        onError: e == null ? void 0 : e.onError
      });
    } catch (r) {
      (t = e == null ? void 0 : e.onError) == null || t.call(e, r);
    }
  }
  get experimental_partialOutputStream() {
    return this.partialOutputStream;
  }
  get partialOutputStream() {
    return Kr(
      this.teeStream().pipeThrough(
        new TransformStream({
          transform({ partialOutput: e }, t) {
            e != null && t.enqueue(e);
          }
        })
      )
    );
  }
  get output() {
    return this.finalStep.then((e) => {
      var t;
      return ((t = this.outputSpecification) != null ? t : yn()).parseCompleteOutput(
        { text: e.text },
        {
          response: e.response,
          usage: e.usage,
          finishReason: e.finishReason
        }
      );
    });
  }
  toUIMessageStream({
    originalMessages: e,
    generateMessageId: t,
    onFinish: r,
    messageMetadata: n,
    sendReasoning: a = !0,
    sendSources: o = !1,
    sendStart: s = !0,
    sendFinish: i = !0,
    onError: l = or
  } = {}) {
    const u = t != null ? Uv({
      originalMessages: e,
      responseMessageId: t
    }) : void 0, c = (p) => {
      var y;
      const E = (y = this.tools) == null ? void 0 : y[p.toolName];
      return E == null ? p.dynamic : (E == null ? void 0 : E.type) === "dynamic" ? !0 : void 0;
    }, d = this.fullStream.pipeThrough(
      new TransformStream({
        transform: async (p, y) => {
          const E = n == null ? void 0 : n({ part: p }), v = p.type;
          switch (v) {
            case "text-start": {
              y.enqueue({
                type: "text-start",
                id: p.id,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "text-delta": {
              y.enqueue({
                type: "text-delta",
                id: p.id,
                delta: p.text,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "text-end": {
              y.enqueue({
                type: "text-end",
                id: p.id,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "reasoning-start": {
              y.enqueue({
                type: "reasoning-start",
                id: p.id,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "reasoning-delta": {
              a && y.enqueue({
                type: "reasoning-delta",
                id: p.id,
                delta: p.text,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "reasoning-end": {
              y.enqueue({
                type: "reasoning-end",
                id: p.id,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "file": {
              y.enqueue({
                type: "file",
                mediaType: p.file.mediaType,
                url: `data:${p.file.mediaType};base64,${p.file.base64}`
              });
              break;
            }
            case "source": {
              o && p.sourceType === "url" && y.enqueue({
                type: "source-url",
                sourceId: p.id,
                url: p.url,
                title: p.title,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              }), o && p.sourceType === "document" && y.enqueue({
                type: "source-document",
                sourceId: p.id,
                mediaType: p.mediaType,
                title: p.title,
                filename: p.filename,
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}
              });
              break;
            }
            case "tool-input-start": {
              const b = c(p);
              y.enqueue({
                type: "tool-input-start",
                toolCallId: p.id,
                toolName: p.toolName,
                ...p.providerExecuted != null ? { providerExecuted: p.providerExecuted } : {},
                ...b != null ? { dynamic: b } : {},
                ...p.title != null ? { title: p.title } : {}
              });
              break;
            }
            case "tool-input-delta": {
              y.enqueue({
                type: "tool-input-delta",
                toolCallId: p.id,
                inputTextDelta: p.delta
              });
              break;
            }
            case "tool-call": {
              const b = c(p);
              p.invalid ? y.enqueue({
                type: "tool-input-error",
                toolCallId: p.toolCallId,
                toolName: p.toolName,
                input: p.input,
                ...p.providerExecuted != null ? { providerExecuted: p.providerExecuted } : {},
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {},
                ...b != null ? { dynamic: b } : {},
                errorText: l(p.error),
                ...p.title != null ? { title: p.title } : {}
              }) : y.enqueue({
                type: "tool-input-available",
                toolCallId: p.toolCallId,
                toolName: p.toolName,
                input: p.input,
                ...p.providerExecuted != null ? { providerExecuted: p.providerExecuted } : {},
                ...p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {},
                ...b != null ? { dynamic: b } : {},
                ...p.title != null ? { title: p.title } : {}
              });
              break;
            }
            case "tool-approval-request": {
              y.enqueue({
                type: "tool-approval-request",
                approvalId: p.approvalId,
                toolCallId: p.toolCall.toolCallId
              });
              break;
            }
            case "tool-result": {
              const b = c(p);
              y.enqueue({
                type: "tool-output-available",
                toolCallId: p.toolCallId,
                output: p.output,
                ...p.providerExecuted != null ? { providerExecuted: p.providerExecuted } : {},
                ...p.preliminary != null ? { preliminary: p.preliminary } : {},
                ...b != null ? { dynamic: b } : {}
              });
              break;
            }
            case "tool-error": {
              const b = c(p);
              y.enqueue({
                type: "tool-output-error",
                toolCallId: p.toolCallId,
                errorText: l(p.error),
                ...p.providerExecuted != null ? { providerExecuted: p.providerExecuted } : {},
                ...b != null ? { dynamic: b } : {}
              });
              break;
            }
            case "tool-output-denied": {
              y.enqueue({
                type: "tool-output-denied",
                toolCallId: p.toolCallId
              });
              break;
            }
            case "error": {
              y.enqueue({
                type: "error",
                errorText: l(p.error)
              });
              break;
            }
            case "start-step": {
              y.enqueue({ type: "start-step" });
              break;
            }
            case "finish-step": {
              y.enqueue({ type: "finish-step" });
              break;
            }
            case "start": {
              s && y.enqueue({
                type: "start",
                ...E != null ? { messageMetadata: E } : {},
                ...u != null ? { messageId: u } : {}
              });
              break;
            }
            case "finish": {
              i && y.enqueue({
                type: "finish",
                finishReason: p.finishReason,
                ...E != null ? { messageMetadata: E } : {}
              });
              break;
            }
            case "abort": {
              y.enqueue(p);
              break;
            }
            case "tool-input-end":
              break;
            case "raw":
              break;
            default: {
              const b = v;
              throw new Error(`Unknown chunk type: ${b}`);
            }
          }
          E != null && v !== "start" && v !== "finish" && y.enqueue({
            type: "message-metadata",
            messageMetadata: E
          });
        }
      })
    );
    return Kr(
      qv({
        stream: d,
        messageId: u ?? (t == null ? void 0 : t()),
        originalMessages: e,
        onFinish: r,
        onError: l
      })
    );
  }
  pipeUIMessageStreamToResponse(e, {
    originalMessages: t,
    generateMessageId: r,
    onFinish: n,
    messageMetadata: a,
    sendReasoning: o,
    sendSources: s,
    sendFinish: i,
    sendStart: l,
    onError: u,
    ...c
  } = {}) {
    Hv({
      response: e,
      stream: this.toUIMessageStream({
        originalMessages: t,
        generateMessageId: r,
        onFinish: n,
        messageMetadata: a,
        sendReasoning: o,
        sendSources: s,
        sendFinish: i,
        sendStart: l,
        onError: u
      }),
      ...c
    });
  }
  pipeTextStreamToResponse(e, t) {
    zv({
      response: e,
      textStream: this.textStream,
      ...t
    });
  }
  toUIMessageStreamResponse({
    originalMessages: e,
    generateMessageId: t,
    onFinish: r,
    messageMetadata: n,
    sendReasoning: a,
    sendSources: o,
    sendFinish: s,
    sendStart: i,
    onError: l,
    ...u
  } = {}) {
    return Lv({
      stream: this.toUIMessageStream({
        originalMessages: e,
        generateMessageId: t,
        onFinish: r,
        messageMetadata: n,
        sendReasoning: a,
        sendSources: o,
        sendFinish: s,
        sendStart: i,
        onError: l
      }),
      ...u
    });
  }
  toTextStreamResponse(e) {
    return Fv({
      textStream: this.textStream,
      ...e
    });
  }
};
Fr({ prefix: "aiobj", size: 24 });
Fr({ prefix: "aiobj", size: 24 });
const rw = `You are an expert language translator specializing in preserving data structure integrity while translating content.

TASK: Translate all text content within the provided JSON structure to the target language.

TRANSLATION PATTERN:
1. Content Translation Strategy:
   - Identify text content properties (e.g., 'content', 'label', 'text', 'title', 'description')
   - Preserve the original property as the default language content
   - Add language-specific variants using the pattern: '{propertyName}-{languageCode}'
   
2. Property Naming Convention:
   - Original: 'content' (default language)
   - Translated: 'content-fr', 'content-es', 'content-de', etc.
   - Examples: 'label' → 'label-fr', 'title' → 'title-es', 'description' → 'description-de'

3. Implementation Rules:
   - NEVER override or remove the original property
   - Language code is provided in the user request
   - If there is already a property with the same name as the translated property, replace it with the translated property.

REQUIREMENTS (Common):
1. Return ONLY the translated JSON structure - no markdown formatting, code blocks, or explanations
2. Preserve the exact JSON structure, keys, and data types
3. Maintain proper grammar, tone, and cultural context in the target language
4. Maintain the original structure and data types
5. Translate ONLY human-readable text content - do NOT translate:
   - JSON keys/property names
   - Data binding placeholders (format: {{dataBindingId}})
   - HTML attributes (class, id, data-*, etc.)
   - URLs, file paths, or technical identifiers
   - Code snippets or technical values
6. Ensure translated text fits naturally within the original context
7. Keep numbers, dates, and technical terms unchanged unless culturally appropriate to translate

OUTPUT FORMAT: Valid JSON only, ready to be parsed directly.`, nw = `You are an expert language translator and content editor specializing in preserving data structure integrity while modifying content.

TASK: Modify content within the provided JSON structure according to user request for the target language.

CONTENT MODIFICATION STRATEGY:
1. Language Property Selection:
   - First, check if '{propertyName}-{languageCode}' exists (e.g., 'content-fr', 'label-es', 'title-de')
   - If language-specific property exists: Use and modify that property's content
   - If language-specific property does NOT exist: Use the default language property content, translate it to the target language, and create the '{propertyName}-{languageCode}' property with the translated content
   
2. Property Naming Convention:
   - Default language: 'content', 'label', 'text', 'title', 'description'
   - Language-specific: 'content-{languageCode}', 'label-{languageCode}', etc.
   - Examples: 'content-fr', 'label-es', 'title-de', 'description-ja'

3. Implementation Rules:
   - NEVER modify the original default language property
   - Only modify or create the language-specific property ('{propertyName}-{languageCode}')
   - Language code is provided in the user request
   - Preserve all other language variants unchanged

REQUIREMENTS (Common):
1. Return ONLY the modified JSON structure - no markdown formatting, code blocks, or explanations
2. Preserve the exact JSON structure, keys, and data types
3. Maintain proper grammar, tone, and cultural context in the target language
4. Maintain the original structure and data types

CRITICAL REQUIREMENTS (Content Modification):
1. Apply user-requested modifications (improve, lengthen, shorten, fix grammar, change tone, rephrase, etc.) to the language-specific property
2. If language-specific property exists: Modify its content according to user request
3. If language-specific property does NOT exist: Translate default content to target language first, then apply modifications
4. Do NOT translate or modify:
   - JSON keys/property names
   - Data binding placeholders (format: {{dataBindingId}})
   - HTML attributes (class, id, data-*, etc.)
   - URLs, file paths, or technical identifiers
   - Code snippets or technical values
5. Preserve all other language variants and properties unchanged
6. Apply changes consistently across related properties when applicable

OUTPUT FORMAT: Valid JSON only, ready to be parsed directly.`, bs = `
🚨 CRITICAL FORMAT REQUIREMENT: Your response MUST start with '--START--' immediately. NEVER include any text, thinking, or reasoning before '--START--'. 🚨


# 1. RESPONSE FORMAT RULES (ALWAYS OBEY FIRST)

Every response MUST follow this structure:

--START--
--THINKING={short plain-language reasoning}
(one or more ACTION blocks: ADD / EDIT / REMOVE)
--END--

Rules:
- The VERY FIRST characters must be '--START--'.
- '--THINKING=' must appear immediately after '--START--'.
- No commentary, markdown, or text outside '--START--' and '--END--'.
- Use simple natural language in THINKING. Do NOT mention ids, attributes, DOM, HTML tags, or technical terms.
- If no action is required, still output:
  --START--
  --THINKING={why no changes needed}
  --END--


# 2. ACTION FORMAT DEFINITIONS (MANDATORY)

### ADD Action
Used to insert new HTML.
Do not add bid attribute to any element.

Format:
--ACTION=ADD|PARENT={parent_id or 'undefined'}|POS={position or -1}--
--TASK={plain-language description of what you are adding}
--HTML--
{HTML here}
--ENDHTML--
--MSG={plain-language explanation}
--ENDACTION--

Rules:
- PARENT = bid of parent, or 'undefined' for root.
- POS = -1 to append at the end.
- HTML must include full and valid tags.


### EDIT Action
Used to replace an existing element completely.
Combine multiple edits into one action with one edit id where possible.

Format:
--ACTION=EDIT|ID={target_id}--
--TASK={plain-language description of what you are changing}
--HTML--
{full replacement HTML here}
--ENDHTML--
--MSG={plain-language explanation}
--ENDACTION--

Rules:
- Must include full tag being replaced.
- Never partially edit; always replace full HTML for the target element.


### REMOVE Action
Used to delete elements.

Format:
--ACTION=REMOVE|IDS={id1, id2, ...}--
--TASK={plain-language description of what you are removing}
--MSG={plain-language explanation}
--ENDACTION--


### THINKING Block (STRICT)
Placed immediately after '--START--'.

Format:
--THINKING={short plain-language reasoning}

Rules:
- Only one concise line.
- No mentions of tags, ids, attributes, DOM, or code.
- Focus on visual/content intentions.


# 3. HTML GENERATION RULES (MANDATORY)

You are an expert HTML/CSS developer specializing in Tailwind CSS and shadcn/ui patterns. 
You produce clean, semantic, accessible, production-ready HTML.
Generate **pure HTML**, with no markdown, no comments, no extra text.

### General Guidelines
1. Use **only Tailwind CSS v3 utility classes**, no custom CSS.
2. Use **shadcn/ui design system** semantic tokens for all colors.
3. Use **semantic HTML** with proper accessibility.
4. Always produce **responsive, mobile-first** layout.
5. **Do NOT include** <!DOCTYPE>, <html>, <head>, or <body>.
6. Keep UI varied — don't repeat the same layout patterns.
7. Use \`<details><summary>\` for accordion, FAQ, and mobile menu interactions.
8. Do NOT use Tailwind container queries.
9. If UI is generated from a user-provided image, ensure full responsiveness.
10. **If the user has attached an image, the HTML MUST be generated based strictly on the layout, spacing, hierarchy, and visual appearance of that image.**
    - Match structure as closely as possible
    - Maintain the Tailwind + shadcn theme rules
    - The HTML output should reflect the exact design of the provided image


# 3.1 DESIGN EXCELLENCE & CREATIVITY (CRITICAL)

Create distinctive, production-grade interfaces that avoid generic "AI slop" aesthetics. Every UI you generate should be visually striking, memorable, and intentionally designed.

### Design Thinking Process
Before generating HTML, commit to a BOLD aesthetic direction:
- **Purpose**: Consider what problem this interface solves and who uses it
- **Tone**: Choose a clear aesthetic direction: brutally minimal, maximalist, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. Use these for inspiration but design something true to the context.
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

### Design Excellence Guidelines

**Typography & Font Selection**:
- Choose fonts that are beautiful, unique, and interesting
- AVOID generic fonts: Arial, Inter, Roboto, system fonts
- Use distinctive font combinations that elevate the design
- Pair a distinctive display font with a refined body font
- Consider: font-serif, font-mono for variety, or use weight variations (font-light, font-bold) creatively

**Color & Visual Hierarchy**:
- Commit to a cohesive aesthetic with dominant colors and sharp accents
- Avoid timid, evenly-distributed palettes
- Use shadcn tokens creatively (not just bg-background everywhere)
- Consider bold color blocking, dramatic contrasts, or refined monochrome
- AVOID: purple gradients on white backgrounds, predictable color schemes

**Spatial Composition**:
- Create unexpected layouts with asymmetry, overlap, diagonal flow
- Use grid-breaking elements and generous negative space OR controlled density
- Avoid predictable grid patterns - be creative with positioning
- Consider: absolute positioning, creative flexbox/grid layouts, overlapping elements

**Backgrounds & Visual Details**:
- Create atmosphere and depth rather than defaulting to solid colors
- Consider: gradient meshes, subtle textures, geometric patterns
- Use layered transparencies, dramatic shadows, decorative borders
- Add visual interest with background patterns or accent elements

**NEVER Use Generic AI Aesthetics**:
- Overused font families (Inter, Roboto, Arial, system fonts)
- Cliched color schemes (purple gradients on white)
- Predictable layouts and component patterns
- Cookie-cutter designs lacking context-specific character
- NEVER converge on common choices (Space Grotesk, etc.) across generations

**Implementation Complexity**:
- Match complexity to the aesthetic vision
- Maximalist designs: elaborate code with extensive effects
- Minimalist designs: restraint, precision, careful spacing and typography
- Elegance comes from executing the vision well

**Variation Mandate**:
- Every design should be different
- Vary between light and dark themes
- Change fonts, layouts, color schemes between generations
- Interpret user requests creatively with unexpected choices


# 4. ATTRIBUTE & CUSTOM COMPONENT RULES

### chai-name
- Add \`chai-name\` attribute to tags
- Use descriptive section names (e.g., "Hero Section", "Navigation").

## Custom Web components(CRITICAL)
- Html can have custom web components. All web components starts with <chai- prefix.
- Use "about-this-component" attribute to understand what the component does.
- Check for can-move and can-delete attribute to check if the component can be moved or deleted.
- If an attribute value starts with #styles: treat it like class attribute with tailwind classes. 
   Use the attribute key to understand what the attribute does and apply classes. Maintain the #styles: at start followed by tailwind classes.
- Do not change the chai-type attribute. Do not remove any attributes.

### SVG & Icons
- Always include width/height attributes.
- Ensure correct \`viewBox\`.


# 5. SHADCN/THEME COLOR RULES (STRICT)

Use ONLY these semantic tokens:

- bg-background + text-foreground
- bg-card + text-card-foreground
- bg-primary + text-primary-foreground
- bg-secondary + text-secondary-foreground
- bg-muted + text-muted-foreground
- bg-accent + text-accent-foreground
- bg-destructive + text-destructive-foreground
- border-border, border-input
- ring-ring

### Contrast Rules
- Always maintain clear readable contrast.
- Never pair same-family bg/text tokens (e.g., bg-primary + text-primary).

### Hover Rules
- Primary buttons: hover:bg-primary/90
- Cards: hover:bg-accent hover:text-accent-foreground
- Links: text-muted-foreground hover:text-foreground
- Nav links: text-foreground/80 hover:text-foreground



# 6. RESPONSIVENESS RULES

- Mobile-first approach.
- Breakpoints: sm, md, lg, xl.
- Smooth scaling between sizes.
- At md breakpoint:
  * Reduce grid columns (lg:4 → md:2 → sm:1)
  * Adjust padding, spacing, and layouts
  * Ensure nav/mobilmenus behave correctly
  * Ensure cards remain aligned


# 7. SPECIFIC UI PATTERNS

### Mobile Menu (<details><summary>)
- Use 'summary' containing an SVG hamburger icon.
- Mobile menu container sample:
  absolute right-1 mt-2 min-w-64 bg-card border border-border rounded-lg shadow-lg z-50 p-4
- Menu item sample:
  block py-2 px-4 hover:bg-accent rounded-md transition-colors
- Touch targets must be at least 44px tall.

### Accordions / Nested Menus
- Always use <details> and <summary>.


# 8. IMAGE RULES

- Use **Picsum Photos** only.
Format:
  https://picsum.photos/seed/{seed}/{width}/{height}

- Seeds must be descriptive, e.g.:
  workspace-modern, tech-innovation, team-office

- Suggested sizes:
  * Hero: 1200x600
  * Cards: 400x300
  * Team: 300x300

- Always include descriptive alt text.
- Always include explicit \`width\` and \`height\` HTML attributes on every \`<img>\` tag** matching the image dimensions.
  Example: \`<img src="https://domain/hero/1200/600" alt="Hero image" width="1200" height="600">\`


# 9. OUTPUT RESTRICTIONS

- Output ONLY the exact allowed action blocks inside the mandatory format.
- NEVER include stray text.
- NEVER include markdown.
- NEVER break the format.
- NEVER place ANYTHING before '--START--'.
- The output must always begin with '--START--' and end with '--END--'.
`.trim();
function aw(e = null) {
  if (e)
    switch (e) {
      case "TRANSLATE_CONTENT":
        return rw;
      case "UPDATE_CONTENT":
        return nw;
      default:
        return bs;
    }
  return bs;
}
const ow = "google/gemini-2.5-flash";
class sw {
  constructor(t) {
    Ae(this, "model", ow);
    Ae(this, "temperature", 0.7);
    this.options = t, this.model = (t == null ? void 0 : t.model) ?? this.model;
  }
  async handleRequest(t, r) {
    var E, v;
    const { messages: n, image: a, initiator: o = null, model: s, context: i } = t, l = s || this.model, u = n.filter((b) => b.role !== "system"), c = u[u.length - 1], d = a ? [
      ...u.slice(0, -1),
      {
        role: "user",
        content: [
          {
            type: "text",
            text: c.content
          },
          {
            type: "image",
            image: a
          }
        ]
      }
    ] : n;
    let p = aw(o);
    i && (p += `

## Additional Information`, i != null && i.site && (p += `

## Website Information
${JSON.stringify(i.site)}`), i != null && i.page && (p += `

## Page Information
${JSON.stringify(i.page)}`));
    const y = Qv({
      model: l,
      system: p,
      messages: d,
      temperature: this.temperature,
      onFinish: ((E = this.options) == null ? void 0 : E.onFinish) ?? La,
      onError: ((v = this.options) == null ? void 0 : v.onError) ?? La
    });
    return r && y.pipeTextStreamToResponse(r), y;
  }
  isConfigured() {
    return !0;
  }
}
var at = { exports: {} };
const iw = "16.6.1", lw = {
  version: iw
};
var Is;
function Nu() {
  if (Is) return at.exports;
  Is = 1;
  const e = Ju, t = Yu, r = Wu, n = Ku, o = lw.version, s = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
  function i(h) {
    const N = {};
    let D = h.toString();
    D = D.replace(/\r\n?/mg, `
`);
    let z;
    for (; (z = s.exec(D)) != null; ) {
      const le = z[1];
      let L = z[2] || "";
      L = L.trim();
      const ee = L[0];
      L = L.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), ee === '"' && (L = L.replace(/\\n/g, `
`), L = L.replace(/\\r/g, "\r")), N[le] = L;
    }
    return N;
  }
  function l(h) {
    h = h || {};
    const N = E(h);
    h.path = N;
    const D = R.configDotenv(h);
    if (!D.parsed) {
      const ee = new Error(`MISSING_DATA: Cannot parse ${N} for an unknown reason`);
      throw ee.code = "MISSING_DATA", ee;
    }
    const z = p(h).split(","), le = z.length;
    let L;
    for (let ee = 0; ee < le; ee++)
      try {
        const te = z[ee].trim(), ce = y(D, te);
        L = R.decrypt(ce.ciphertext, ce.key);
        break;
      } catch (te) {
        if (ee + 1 >= le)
          throw te;
      }
    return R.parse(L);
  }
  function u(h) {
    console.log(`[dotenv@${o}][WARN] ${h}`);
  }
  function c(h) {
    console.log(`[dotenv@${o}][DEBUG] ${h}`);
  }
  function d(h) {
    console.log(`[dotenv@${o}] ${h}`);
  }
  function p(h) {
    return h && h.DOTENV_KEY && h.DOTENV_KEY.length > 0 ? h.DOTENV_KEY : process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0 ? process.env.DOTENV_KEY : "";
  }
  function y(h, N) {
    let D;
    try {
      D = new URL(N);
    } catch (te) {
      if (te.code === "ERR_INVALID_URL") {
        const ce = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
        throw ce.code = "INVALID_DOTENV_KEY", ce;
      }
      throw te;
    }
    const z = D.password;
    if (!z) {
      const te = new Error("INVALID_DOTENV_KEY: Missing key part");
      throw te.code = "INVALID_DOTENV_KEY", te;
    }
    const le = D.searchParams.get("environment");
    if (!le) {
      const te = new Error("INVALID_DOTENV_KEY: Missing environment part");
      throw te.code = "INVALID_DOTENV_KEY", te;
    }
    const L = `DOTENV_VAULT_${le.toUpperCase()}`, ee = h.parsed[L];
    if (!ee) {
      const te = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${L} in your .env.vault file.`);
      throw te.code = "NOT_FOUND_DOTENV_ENVIRONMENT", te;
    }
    return { ciphertext: ee, key: z };
  }
  function E(h) {
    let N = null;
    if (h && h.path && h.path.length > 0)
      if (Array.isArray(h.path))
        for (const D of h.path)
          e.existsSync(D) && (N = D.endsWith(".vault") ? D : `${D}.vault`);
      else
        N = h.path.endsWith(".vault") ? h.path : `${h.path}.vault`;
    else
      N = t.resolve(process.cwd(), ".env.vault");
    return e.existsSync(N) ? N : null;
  }
  function v(h) {
    return h[0] === "~" ? t.join(r.homedir(), h.slice(1)) : h;
  }
  function b(h) {
    const N = !!(h && h.debug), D = h && "quiet" in h ? h.quiet : !0;
    (N || !D) && d("Loading env from encrypted .env.vault");
    const z = R._parseVault(h);
    let le = process.env;
    return h && h.processEnv != null && (le = h.processEnv), R.populate(le, z, h), { parsed: z };
  }
  function P(h) {
    const N = t.resolve(process.cwd(), ".env");
    let D = "utf8";
    const z = !!(h && h.debug), le = h && "quiet" in h ? h.quiet : !0;
    h && h.encoding ? D = h.encoding : z && c("No encoding is specified. UTF-8 is used by default");
    let L = [N];
    if (h && h.path)
      if (!Array.isArray(h.path))
        L = [v(h.path)];
      else {
        L = [];
        for (const Ce of h.path)
          L.push(v(Ce));
      }
    let ee;
    const te = {};
    for (const Ce of L)
      try {
        const be = R.parse(e.readFileSync(Ce, { encoding: D }));
        R.populate(te, be, h);
      } catch (be) {
        z && c(`Failed to load ${Ce} ${be.message}`), ee = be;
      }
    let ce = process.env;
    if (h && h.processEnv != null && (ce = h.processEnv), R.populate(ce, te, h), z || !le) {
      const Ce = Object.keys(te).length, be = [];
      for (const gt of L)
        try {
          const je = t.relative(process.cwd(), gt);
          be.push(je);
        } catch (je) {
          z && c(`Failed to load ${gt} ${je.message}`), ee = je;
        }
      d(`injecting env (${Ce}) from ${be.join(",")}`);
    }
    return ee ? { parsed: te, error: ee } : { parsed: te };
  }
  function k(h) {
    if (p(h).length === 0)
      return R.configDotenv(h);
    const N = E(h);
    return N ? R._configVault(h) : (u(`You set DOTENV_KEY but you are missing a .env.vault file at ${N}. Did you forget to build it?`), R.configDotenv(h));
  }
  function g(h, N) {
    const D = Buffer.from(N.slice(-64), "hex");
    let z = Buffer.from(h, "base64");
    const le = z.subarray(0, 12), L = z.subarray(-16);
    z = z.subarray(12, -16);
    try {
      const ee = n.createDecipheriv("aes-256-gcm", D, le);
      return ee.setAuthTag(L), `${ee.update(z)}${ee.final()}`;
    } catch (ee) {
      const te = ee instanceof RangeError, ce = ee.message === "Invalid key length", Ce = ee.message === "Unsupported state or unable to authenticate data";
      if (te || ce) {
        const be = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
        throw be.code = "INVALID_DOTENV_KEY", be;
      } else if (Ce) {
        const be = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
        throw be.code = "DECRYPTION_FAILED", be;
      } else
        throw ee;
    }
  }
  function $(h, N, D = {}) {
    const z = !!(D && D.debug), le = !!(D && D.override);
    if (typeof N != "object") {
      const L = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
      throw L.code = "OBJECT_REQUIRED", L;
    }
    for (const L of Object.keys(N))
      Object.prototype.hasOwnProperty.call(h, L) ? (le === !0 && (h[L] = N[L]), z && c(le === !0 ? `"${L}" is already defined and WAS overwritten` : `"${L}" is already defined and was NOT overwritten`)) : h[L] = N[L];
  }
  const R = {
    configDotenv: P,
    _configVault: b,
    _parseVault: l,
    config: k,
    decrypt: g,
    parse: i,
    populate: $
  };
  return at.exports.configDotenv = R.configDotenv, at.exports._configVault = R._configVault, at.exports._parseVault = R._parseVault, at.exports.config = R.config, at.exports.decrypt = R.decrypt, at.exports.parse = R.parse, at.exports.populate = R.populate, at.exports = R, at.exports;
}
var uw = Nu();
const cw = /* @__PURE__ */ vm(uw), dw = Cs("app_pages_metadata_id_seq", { startWith: "1", increment: "1", minValue: "1", maxValue: "9223372036854775807", cache: "1", cycle: !1 }), pw = Cs("webhook_events_id_seq", { startWith: "1", increment: "1", minValue: "1", maxValue: "9223372036854775807", cache: "1", cycle: !1 }), fw = Je("app_assets", {
  id: J().defaultRandom().primaryKey().notNull(),
  app: J(),
  name: O(),
  description: O(),
  url: O(),
  size: O(),
  folderId: O(),
  thumbnailUrl: O(),
  duration: _r(),
  format: O(),
  width: _r(),
  height: _r(),
  createdBy: O(),
  createdAt: xe({ withTimezone: !0, mode: "string" }).defaultNow().notNull(),
  type: O(),
  updatedAt: xe({ withTimezone: !0, mode: "string" })
}, (e) => [
  et({
    columns: [e.app],
    foreignColumns: [me.id],
    name: "app_assets_app_fkey"
  })
]), ye = Je("app_pages_online", {
  createdAt: xe({ withTimezone: !0, mode: "string" }).defaultNow().notNull(),
  slug: O().notNull(),
  lang: O().default("").notNull(),
  seo: K().default({}),
  app: J().notNull(),
  id: J().primaryKey().notNull(),
  name: O().notNull(),
  primaryPage: J(),
  blocks: K().default([]),
  currentEditor: O(),
  changes: K(),
  partialBlocks: O(),
  links: O(),
  online: er().default(!0),
  pageType: O(),
  parent: J(),
  lastSaved: xe({ withTimezone: !0, mode: "string" }),
  dynamic: er().default(!1),
  libRefId: J(),
  dynamicSlugCustom: O().default(""),
  metadata: K().default({}),
  jsonld: K().default({}),
  globalJsonLds: K().default([]),
  designTokens: K()
}, (e) => [
  et({
    columns: [e.app],
    foreignColumns: [me.id],
    name: "app_pages_online_app_fkey"
  })
]), me = Je("apps", {
  id: J().defaultRandom().primaryKey().notNull(),
  createdAt: xe({ withTimezone: !0, mode: "string" }).defaultNow().notNull(),
  name: O(),
  user: O(),
  settings: K().default({}),
  theme: K().default({}),
  fallbackLang: O().default("en"),
  languages: K().default([]),
  changes: K(),
  deletedAt: xe({ withTimezone: !0, mode: "string" }),
  client: J(),
  designTokens: K().default({})
}), _t = Je("apps_online", {
  id: J().primaryKey().notNull(),
  createdAt: xe({ withTimezone: !0, mode: "string" }).defaultNow().notNull(),
  name: O(),
  user: O(),
  settings: K().default({}),
  theme: K().default({}),
  fallbackLang: O().default("en"),
  languages: K().default([]),
  changes: K(),
  apiKey: O(),
  deletedAt: xe({ withTimezone: !0, mode: "string" }),
  client: J(),
  designTokens: K().default({})
}), Q = Je("libraries", {
  id: J().defaultRandom().primaryKey().notNull(),
  createdAt: xe({ withTimezone: !0, mode: "string" }).defaultNow().notNull(),
  name: O(),
  app: J(),
  type: O(),
  status: O().default("active").notNull(),
  client: J()
}, (e) => [
  et({
    columns: [e.app],
    foreignColumns: [me.id],
    name: "libraries_app_fkey"
  })
]), gw = Je("app_form_submissions", {
  id: J().defaultRandom().primaryKey().notNull(),
  createdAt: xe({ withTimezone: !0, mode: "string" }).defaultNow().notNull(),
  app: J(),
  formData: Ga(),
  additionalData: Ga(),
  formName: O().default(""),
  pageUrl: O()
}, (e) => [
  et({
    columns: [e.app],
    foreignColumns: [me.id],
    name: "app_form_submissions_app_fkey"
  })
]), f = Je("app_pages", {
  createdAt: xe({ withTimezone: !0, mode: "string" }).defaultNow().notNull(),
  slug: O().notNull(),
  lang: O().default("").notNull(),
  seo: K().default({}),
  app: J().notNull(),
  id: J().defaultRandom().primaryKey().notNull(),
  name: O().notNull(),
  primaryPage: J(),
  blocks: K().default([]),
  currentEditor: O(),
  changes: K(),
  online: er().default(!1),
  parent: J(),
  pageType: O(),
  lastSaved: xe({ withTimezone: !0, mode: "string" }),
  dynamic: er().default(!1),
  libRefId: J(),
  dynamicSlugCustom: O().default(""),
  metadata: K().default({}),
  jsonld: K().default({}),
  globalJsonLds: K().default([]),
  links: O(),
  partialBlocks: O(),
  designTokens: K()
}, (e) => [
  et({
    columns: [e.app],
    foreignColumns: [me.id],
    name: "app_pages_app_fkey"
  }),
  et({
    columns: [e.parent],
    foreignColumns: [e.id],
    name: "app_pages_parent_fkey"
  })
]), Ne = Je("app_pages_revisions", {
  createdAt: xe({ withTimezone: !0, mode: "string" }).defaultNow().notNull(),
  slug: O().notNull(),
  lang: O().default("").notNull(),
  seo: K().default({}),
  app: J().notNull(),
  id: J().notNull(),
  name: O().notNull(),
  primaryPage: J(),
  blocks: K().default([]),
  currentEditor: O(),
  changes: K(),
  partialBlocks: O(),
  links: O(),
  online: er().default(!0),
  pageType: O(),
  parent: J(),
  lastSaved: xe({ withTimezone: !0, mode: "string" }),
  dynamic: er().default(!1),
  uid: J().defaultRandom().primaryKey().notNull(),
  type: O(),
  libRefId: J(),
  dynamicSlugCustom: O().default(""),
  metadata: K().default({}),
  jsonld: K().default({}),
  globalJsonLds: K().default([]),
  designTokens: K()
}, (e) => [
  et({
    columns: [e.app],
    foreignColumns: [me.id],
    name: "app_pages_revisions_app_fkey"
  })
]), wr = Je("app_users", {
  id: J().defaultRandom().primaryKey().notNull(),
  createdAt: xe({ withTimezone: !0, mode: "string" }).defaultNow().notNull(),
  user: O(),
  app: J(),
  role: O(),
  permissions: K(),
  status: O().default("active").notNull()
}, (e) => [
  et({
    columns: [e.app],
    foreignColumns: [me.id],
    name: "app_users_app_fkey"
  })
]), ne = Je("library_templates", {
  id: J().defaultRandom().primaryKey().notNull(),
  createdAt: xe({ withTimezone: !0, mode: "string" }).defaultNow().notNull(),
  user: O(),
  name: O(),
  description: O(),
  pageId: J(),
  pageType: O(),
  library: J(),
  preview: O()
}, (e) => [
  et({
    columns: [e.library],
    foreignColumns: [Q.id],
    name: "library_templates_library_fkey"
  })
]), ae = Je("library_items", {
  id: J().defaultRandom().primaryKey().notNull(),
  createdAt: xe({ withTimezone: !0, mode: "string" }).defaultNow().notNull(),
  library: J(),
  name: O(),
  description: O(),
  blocks: K().default([]),
  preview: O(),
  group: O().default("general"),
  user: O(),
  html: O()
}, (e) => [
  et({
    columns: [e.library],
    foreignColumns: [Q.id],
    name: "library_items_library_fkey"
  })
]), $a = Je("ai_logs", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: rc({ mode: "number" }).primaryKey().generatedByDefaultAsIdentity({ name: "ai_logs_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 9223372036854776e3, cache: 1 }),
  createdAt: xe({ withTimezone: !0, mode: "string" }).defaultNow().notNull(),
  model: O(),
  totalDuration: _r(),
  error: O(),
  totalTokens: _r(),
  tokenUsage: K(),
  user: O(),
  client: J().defaultRandom(),
  cost: tc().default(pa`'0'`),
  prompt: O(),
  app: J()
}, (e) => [
  et({
    columns: [e.app],
    foreignColumns: [me.id],
    name: "ai_logs_app_fkey"
  })
]), hw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  aiLogs: $a,
  appAssets: fw,
  appFormSubmissions: gw,
  appPages: f,
  appPagesMetadataIdSeq: dw,
  appPagesOnline: ye,
  appPagesRevisions: Ne,
  appUsers: wr,
  apps: me,
  appsOnline: _t,
  libraries: Q,
  libraryItems: ae,
  libraryTemplates: ne,
  webhookEventsIdSeq: pw
}, Symbol.toStringTag, { value: "Module" }));
cw.config();
let Dr = process.env.CHAIBUILDER_DATABASE_URL;
if (!Dr)
  throw new Error("Database not configured. Please set CHAIBUILDER_DATABASE_URL environment variable.");
const mw = (e) => e.trim().replace(/^"|"$/g, "");
Dr = mw(Dr);
const yw = (e) => e.startsWith("postgresql://") || e.startsWith("postgres://");
if (!yw(Dr))
  throw new Error(
    "Database connection string is invalid. Please check your CHAIBUILDER_DATABASE_URL environment variable."
  );
const vw = ec(Dr, { max: 10 }), I = Qu(vw, { schema: hw });
async function S(e) {
  try {
    return { data: await e(), error: null };
  } catch (t) {
    return { data: null, error: t };
  }
}
const ww = (e) => {
  var t;
  return ((t = oc.find((r) => r.id === e)) == null ? void 0 : t.multiplier) || 1;
};
async function _w({
  userId: e,
  startTime: t,
  error: r,
  model: n,
  prompt: a,
  appId: o
}) {
  var c;
  const s = String(r), i = t > 0 ? (/* @__PURE__ */ new Date()).getTime() - t : 0, l = {
    model: n,
    totalDuration: String(i),
    error: s,
    totalTokens: "0",
    tokenUsage: {},
    cost: 0,
    prompt: a,
    user: e,
    client: ((c = process == null ? void 0 : process.env) == null ? void 0 : c.CHAIBUILDER_CLIENT_ID) || null,
    app: o
  }, { error: u } = await S(() => I.insert($a).values(l));
  u && console.error("Error logging AI request error:", u);
}
async function Tw({
  userId: e,
  startTime: t,
  arg: r,
  prompt: n,
  model: a,
  appId: o
}) {
  var p, y, E;
  const s = r == null ? void 0 : r.totalUsage, i = (y = (p = r == null ? void 0 : r.providerMetadata) == null ? void 0 : p.gateway) == null ? void 0 : y.cost, l = t > 0 ? Math.floor((/* @__PURE__ */ new Date()).getTime() - t) : 0, u = n.indexOf("USER REQUEST");
  n = n.substring(u).trim();
  const c = {
    model: a,
    totalDuration: String(l),
    error: null,
    totalTokens: String(Math.round(((s == null ? void 0 : s.totalTokens) ?? 0) * ww(a))),
    tokenUsage: s,
    cost: i,
    prompt: n,
    user: e,
    client: ((E = process == null ? void 0 : process.env) == null ? void 0 : E.CHAIBUILDER_CLIENT_ID) || null,
    app: o
  }, { error: d } = await S(() => I.insert($a).values(c));
  d && console.error("Error logging AI request:", d);
}
class w extends Error {
  constructor(t, r = "ACTION_ERROR", n = 400, a) {
    super(t), this.code = r, this.status = n, this.error = a, this.name = "ActionError", a && console.error(a);
  }
}
class G {
  constructor() {
    Ae(this, "context", null);
  }
  /**
   * Validate the action data using the schema provided by getValidationSchema
   * @param data The data to validate
   * @returns true if the data is valid, false otherwise
   */
  validate(t) {
    if (!t) return !0;
    try {
      return this.getValidationSchema().parse(t), !0;
    } catch {
      return !1;
    }
  }
  /**
   * Get validation errors for the action data
   * This can be useful for debugging or providing more detailed error messages
   * @param data The data to validate
   * @returns An array of validation errors or null if the data is valid
   */
  getValidationErrors(t) {
    if (!t) return null;
    try {
      return this.getValidationSchema().parse(t), null;
    } catch (r) {
      return r instanceof m.ZodError ? r.issues.map((a) => `${a.path.join(".")}: ${a.message}`).join(", ") : null;
    }
  }
  /**
   * Set the action context
   * @param context The context to set
   */
  setContext(t) {
    this.context = t;
  }
  /**
   * Verify if the user has access to the app.
   * Delegates to the CHECK_USER_ACCESS action from the registry so that
   * callers can override the default access-check by registering a custom action.
   * Uses a dynamic import to avoid a circular module dependency at init time.
   * @throws ActionError if the user does not have access
   */
  async verifyAccess() {
    if (!this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET", 500);
    const { getChaiAction: t } = await Promise.resolve().then(() => l_), r = t("CHECK_USER_ACCESS");
    if (!r)
      throw new w("CHECK_USER_ACCESS action not registered", "ACCESS_CHECK_NOT_FOUND", 500);
    r.setContext(this.context), await r.execute({});
  }
  /**
   * Helper method to handle common errors in actions
   * @param error The error to handle
   * @throws ActionError with appropriate message and code
   */
  handleError(t) {
    if (t instanceof w)
      throw t;
    if (t instanceof m.ZodError) {
      const r = t.issues.map((n) => `${n.path.join(".")}: ${n.message}`).join(", ");
      throw new w(`Validation failed: ${r}`, "VALIDATION_ERROR");
    } else {
      const r = t instanceof Error ? t.message : "Unknown error";
      throw new w(r, "ACTION_ERROR");
    }
  }
}
class Ew extends G {
  getValidationSchema() {
    return m.any();
  }
  async execute(t) {
    if (!this.context)
      throw new Error("Context not set");
    const r = (/* @__PURE__ */ new Date()).getTime(), { userId: n, appId: a } = this.context, o = new sw({
      //@ts-ignore
      onFinish: (l) => {
        var u, c;
        try {
          Tw({
            arg: l,
            prompt: ((c = (u = t.messages) == null ? void 0 : u[t.messages.length - 1]) == null ? void 0 : c.content) || "",
            userId: n,
            model: t.model || "",
            startTime: r,
            appId: a
          });
        } catch (d) {
          console.error("Error logging AI request:", d);
        }
      },
      onError: (l) => {
        var u, c;
        try {
          _w({
            error: l,
            userId: n,
            startTime: r,
            model: t.model || "",
            prompt: ((c = (u = t.messages) == null ? void 0 : u[t.messages.length - 1]) == null ? void 0 : c.content) || "",
            appId: a
          });
        } catch (d) {
          console.error("Error logging AI request error:", d);
        }
      }
    }), s = {
      messages: t.messages || [],
      image: t.image,
      model: t.model,
      initiator: t.initiator || null,
      context: t.context
    };
    return {
      _streamingResponse: !0,
      _streamResult: await o.handleRequest(s)
    };
  }
}
async function bw(e) {
  const { appId: t, userId: r } = e;
  if (!r)
    throw new w("User ID not found in context", "UNAUTHORIZED", 401);
  const { data: n, error: a } = await S(
    () => I.select().from(wr).where(
      Z(T(wr.app, t), T(wr.user, r), T(wr.status, "active"))
    )
  );
  if (a)
    throw new w("Error checking user access", "ERROR_CHECKING_USER_ACCESS", 500, a);
  if (!n || n.length === 0)
    throw new w("User does not have access to this app", "UNAUTHORIZED", 401);
  return n[0];
}
class Iw extends G {
  getValidationSchema() {
    return m.any();
  }
  async execute() {
    if (!this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET", 500);
    const t = await bw(this.context);
    return {
      access: !0,
      role: t.role || "user",
      permissions: t.permissions || null
    };
  }
}
class Sw extends G {
  /**
   * Define the validation schema for create page action
   */
  getValidationSchema() {
    return m.object({
      name: m.string().min(1),
      slug: m.string(),
      pageType: m.string(),
      parent: m.string().nullable().optional(),
      lang: m.string().optional(),
      primaryPage: m.string().nullable().optional(),
      dynamic: m.boolean().optional(),
      hasSlug: m.boolean().optional(),
      template: m.string().optional(),
      seo: m.record(m.string(), m.any()).optional(),
      jsonLD: m.record(m.string(), m.any()).optional(),
      dynamicSlugCustom: m.string().optional()
    }).refine(
      (t) => t.lang && t.lang !== "" ? !!t.primaryPage : !0,
      {
        message: "primaryPage is required when lang option is not empty",
        path: ["primaryPage"]
      }
    );
  }
  /**
   * Execute the create page action
   */
  async execute(t) {
    if (await this.verifyAccess(), !this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    const { appId: r } = this.context;
    if ((t.hasSlug ?? t.pageType !== "global") && t.slug && await this.doesSlugExist(t.slug, t.pageType))
      throw new w("Slug already exists", "SLUG_ALREADY_USED");
    let a = [];
    t.template && (a = await this.getTemplateBlocks(t.template, r));
    let o = t.dynamic ?? !1, s = t.dynamicSlugCustom ?? "";
    if (t.primaryPage) {
      const { data: d } = await S(
        () => I.query.appPages.findFirst({
          where: Z(T(f.id, t.primaryPage), T(f.app, r)),
          columns: {
            dynamic: !0,
            dynamicSlugCustom: !0
          }
        })
      );
      d && (o = d.dynamic ?? !1, s = d.dynamicSlugCustom ?? "");
    }
    const i = {
      app: r,
      name: t.name,
      slug: t.slug,
      pageType: t.pageType,
      parent: t.parent ?? null,
      lang: t.primaryPage ? t.lang ?? "" : "",
      primaryPage: t.primaryPage ?? null,
      dynamic: o,
      dynamicSlugCustom: s,
      blocks: a,
      seo: t.seo ?? {
        title: t.name,
        jsonLD: "",
        noIndex: !1,
        ogImage: "",
        ogTitle: "",
        noFollow: "",
        description: "",
        searchTitle: "",
        cononicalUrl: "",
        ogDescription: "",
        searchDescription: ""
      },
      jsonld: {},
      online: !1,
      currentEditor: null,
      changes: null,
      libRefId: null,
      lastSaved: null
    }, { data: l, error: u } = await S(
      () => I.insert(f).values(i).returning({
        id: f.id,
        name: f.name,
        slug: f.slug,
        lang: f.lang,
        pageType: f.pageType,
        parent: f.parent,
        online: f.online,
        primaryPage: f.primaryPage
      })
    );
    if (u)
      throw new w("Failed to create page", "ERROR_CREATING_PAGE", 500, u);
    if (!l || l.length === 0)
      throw new w("Failed to create page", "INSERT_FAILED");
    const c = l[0];
    return {
      page: ca(c.primaryPage ? { ...c, id: c.primaryPage } : c, [
        "primaryPage"
      ])
    };
  }
  /**
   * Check if slug already exists for the given page type
   */
  async doesSlugExist(t, r) {
    if (!this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    const { appId: n } = this.context, { data: a, error: o } = await S(
      () => I.query.appPages.findFirst({
        where: Z(
          T(f.slug, t),
          T(f.pageType, r),
          T(f.app, n)
        ),
        columns: {
          id: !0
        }
      })
    );
    if (o)
      throw new w(`${o.message}`, "SLUG_CHECK_FAILED");
    return !!a;
  }
  /**
   * Get blocks from a template and handle partial blocks from external libraries
   */
  async getTemplateBlocks(t, r) {
    const { data: n, error: a } = await S(
      () => I.select({
        template: ne,
        library: {
          id: Q.id,
          app: Q.app,
          name: Q.name
        }
      }).from(ne).leftJoin(Q, T(ne.library, Q.id)).where(T(ne.id, t)).limit(1).then((d) => d[0])
    );
    if (a)
      throw new w(
        `Failed to fetch template: ${a.message || "Unknown database error"}`,
        "ERROR_GETTING_TEMPLATE_BLOCKS",
        500,
        a
      );
    if (!n || !n.template || !n.library)
      throw new w(`Template not found with ID: ${t}`, "TEMPLATE_NOT_FOUND");
    const o = n.template, s = n.library, { data: i, error: l } = await S(
      () => I.query.appPages.findFirst({
        where: T(f.id, o.pageId),
        columns: {
          blocks: !0
        }
      })
    );
    if (l)
      throw new w(
        `Failed to fetch template blocks: ${l.message || "Unknown database error"}`,
        "ERROR_GETTING_TEMPLATE_BLOCKS",
        500,
        l
      );
    if (!i)
      throw new w(`Template page not found with ID: ${o.pageId}`, "TEMPLATE_PAGE_NOT_FOUND");
    let u = i.blocks || [];
    if (u = u.map((d) => d._type === "GlobalBlock" && !Mt(d.globalBlock) ? {
      ...d,
      _type: "PartialBlock",
      partialBlockId: d.globalBlock
    } : d), !(s.app === r)) {
      const d = s.name || "", p = u.filter((E) => E._type === "PartialBlock" && !Mt(E.partialBlockId)), y = await Promise.all(
        p.map(
          ({ partialBlockId: E }) => this.copyPartialBlockFromTemplate(E, d, r)
        )
      );
      u = u.map((E) => {
        const v = y.find((b) => (b == null ? void 0 : b.libRefId) === E.partialBlockId);
        return v && (E._name = `${d} - ${E._name}`, E.partialBlockId = v.id), E;
      });
    }
    return u;
  }
  /**
   * Copy a partial block from a template library
   */
  async copyPartialBlockFromTemplate(t, r, n) {
    const { data: a, error: o } = await S(
      () => I.query.appPages.findFirst({
        where: T(f.id, t)
      })
    );
    if (o || !a)
      return console.error("Failed to fetch partial block:", o), null;
    const s = {
      ...a,
      id: void 0,
      // Let database generate new ID
      app: n,
      libRefId: t,
      name: `${r} - ${a.name}`,
      createdAt: void 0,
      online: !1,
      currentEditor: null,
      changes: null,
      lastSaved: null
    }, { data: i, error: l } = await S(
      () => I.insert(f).values(s).returning({
        id: f.id,
        libRefId: f.libRefId
      })
    );
    if (l || !i || i.length === 0)
      return console.error("Failed to create partial block copy:", l), null;
    const u = i[0];
    return {
      id: u.id,
      libRefId: u.libRefId || t
    };
  }
}
class Aw extends G {
  /**
   * Define the validation schema for delete library item action
   */
  getValidationSchema() {
    return m.object({
      id: m.string().min(1)
    });
  }
  /**
   * Execute the delete library item action
   */
  async execute(t) {
    if (await this.verifyAccess(), !this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    const { id: r } = t, { error: n } = await S(() => I.delete(ae).where(T(ae.id, r)));
    if (n)
      throw new w("Failed to delete library item", "DELETE_LIBRARY_ITEM_FAILED", 500, n);
    return { success: !0 };
  }
}
const ue = (e, t) => (console.error(t), new Error(e));
class $r {
  /**
   * @param appId - Application ID to filter pages
   * @param enableLogging - Enable console logging for debugging (default: false)
   */
  constructor(t, r = !1) {
    Ae(this, "appId");
    Ae(this, "enableLogging");
    this.appId = t, this.enableLogging = r;
  }
  /**
   * Fetch and build complete page trees
   * @returns PageTreeResult containing primary and language trees
   */
  async getPagesTree() {
    const { data: t, error: r } = await S(
      () => I.select({
        id: f.id,
        name: f.name,
        slug: f.slug,
        pageType: f.pageType,
        primaryPage: f.primaryPage,
        parent: f.parent,
        lang: f.lang,
        dynamic: f.dynamic
      }).from(f).where(T(f.app, this.appId))
    );
    if (r)
      throw ue("ERROR_GETTING_PAGES", r);
    const n = (t == null ? void 0 : t.filter((i) => i.primaryPage === null)) || [], a = (t == null ? void 0 : t.filter((i) => i.primaryPage !== null)) || [], o = this.buildPrimaryTree(n);
    this.enableLogging && (console.log(`
=== PRIMARY LANGUAGE PAGES TREE ===`), console.log(JSON.stringify(o, null, 2)));
    const s = this.buildLanguageTree(a, o);
    return this.enableLogging && (console.log(`
=== OTHER LANGUAGE PAGES TREE ===`), console.log(JSON.stringify(s, null, 2))), {
      primaryTree: o,
      languageTree: s,
      totalPrimaryPages: n.length,
      totalLanguagePages: a.length
    };
  }
  /**
   * Build a hierarchical tree structure from primary pages
   * @param pages - Array of primary page objects
   * @returns Array of root PageTreeNode objects
   */
  buildPrimaryTree(t) {
    const r = /* @__PURE__ */ new Map();
    t.forEach((a) => {
      r.set(a.id, {
        id: a.id,
        pageType: a.pageType,
        primaryPage: a.primaryPage,
        parent: a.parent,
        name: a.name,
        dynamic: a.dynamic,
        slug: a.slug,
        children: []
      });
    });
    const n = [];
    return t.forEach((a) => {
      const o = r.get(a.id);
      if (o)
        if (a.parent === null)
          n.push(o);
        else {
          const s = r.get(a.parent);
          s ? s.children.push(o) : n.push(o);
        }
    }), n;
  }
  /**
   * Build a language pages tree based on the primary tree structure
   * @param languagePages - Array of language page objects
   * @param primaryTree - The primary pages tree
   * @returns Array of language page tree nodes
   */
  buildLanguageTree(t, r) {
    const n = /* @__PURE__ */ new Map();
    t.forEach((i) => {
      const l = i.primaryPage;
      n.has(l) || n.set(l, []), n.get(l).push(i);
    });
    const a = (i, l) => {
      const c = (n.get(i.id) || []).find((p) => p.lang === l);
      if (!c)
        return null;
      const d = {
        id: c.id,
        pageType: c.pageType,
        primaryPage: c.primaryPage,
        parent: c.parent,
        lang: c.lang,
        name: c.name,
        slug: c.slug,
        dynamic: c.dynamic,
        children: []
      };
      return i.children.forEach((p) => {
        const y = a(p, l);
        y && d.children.push(y);
      }), d;
    }, o = [], s = /* @__PURE__ */ new Set();
    return t.forEach((i) => {
      i.lang && s.add(i.lang);
    }), s.forEach((i) => {
      r.forEach((l) => {
        const u = a(l, i);
        u && o.push(u);
      });
    }), o;
  }
  /**
   * Find a page in the primary tree by ID
   * @param id - Page ID to search for
   * @param primaryTree - The primary pages tree to search in
   * @returns PageTreeNode if found, null otherwise
   */
  findPageInPrimaryTree(t, r) {
    for (const n of r) {
      if (n.id === t)
        return n;
      if (n.children && n.children.length > 0) {
        const a = this.findPageInPrimaryTree(t, n.children);
        if (a) return a;
      }
    }
    return null;
  }
  /**
   * Find a page in the language tree by ID
   * @param id - Page ID to search for
   * @param languageTree - The language pages tree to search in
   * @returns Language page node if found, null otherwise
   */
  findPageInLanguageTree(t, r) {
    for (const n of r) {
      if (n.id === t)
        return n;
      if (n.children && n.children.length > 0) {
        const a = this.findPageInLanguageTree(t, n.children);
        if (a) return a;
      }
    }
    return null;
  }
  /**
   * Calculate new slug based on parent path
   * @param newParentId - New parent page ID (null for root level)
   * @param currentSlug - Current slug of the page
   * @param primaryTree - The primary pages tree
   * @returns New slug based on parent path
   */
  calculateSlugFromParent(t, r, n) {
    if (!t) {
      const l = r.split("/").filter(Boolean);
      return "/" + (l[l.length - 1] || "");
    }
    let a = this.findPageInPrimaryTree(t, n);
    if (!a && (a = this.findPageInLanguageTree(t, n), !a))
      throw new Error("Parent page not found in tree");
    const o = r.split("/").filter(Boolean), s = o[o.length - 1] || "";
    return `${a.slug.endsWith("/") ? a.slug.slice(0, -1) : a.slug}/${s}`;
  }
  /**
   * Collect all nested child IDs from a tree node
   * @param node - The node to collect children from
   * @returns Array of child IDs
   */
  collectNestedChildIds(t) {
    const r = [];
    for (const n of t.children) {
      r.push(n.id);
      const a = this.collectNestedChildIds(n);
      r.push(...a);
    }
    return r;
  }
  /**
   * Find all language pages for a given primary page ID
   * @param primaryPageId - Primary page ID to find variants for
   * @param languageTree - The language pages tree to search in
   * @returns Array of language page nodes
   */
  findLanguagePagesForPrimary(t, r) {
    const n = [], a = (o) => {
      for (const s of o)
        s.primaryPage === t && n.push(s), s.children && s.children.length > 0 && a(s.children);
    };
    return a(r), n;
  }
  /**
   * Collect all nested children with their IDs and slugs for slug updates
   * @param node - The node to collect children from
   * @param oldParentSlug - The old parent slug to replace
   * @param newParentSlug - The new parent slug
   * @returns Array of objects with id, oldSlug, and newSlug
   */
  collectNestedChildSlugs(t, r, n) {
    const a = [], o = (s, i, l) => {
      for (const u of s) {
        const c = this.generateNewChildSlug(u.slug, i, l);
        a.push({
          id: u.id,
          oldSlug: u.slug,
          newSlug: c
        }), u.children && u.children.length > 0 && o(u.children, u.slug, c);
      }
    };
    return o(t.children, r, n), a;
  }
  /**
   * Generate new slug for child page based on parent slug change
   * @param currentChildSlug - Current child slug
   * @param oldParentSlug - Old parent slug
   * @param newParentSlug - New parent slug
   * @returns New child slug
   */
  generateNewChildSlug(t, r, n) {
    return t === r ? n : t.startsWith(r + "/") ? t.replace(r + "/", n + "/") : t.startsWith(r) && t !== r ? t.replace(r, n) : `${n}/${t.split("/").pop()}`;
  }
}
class Nw extends G {
  constructor() {
    super(...arguments);
    Ae(this, "appId", "");
    Ae(this, "userId", "");
    Ae(this, "pageTreeBuilder");
  }
  /**
   * Define the validation schema for delete page action
   */
  getValidationSchema() {
    return m.object({
      id: m.string().min(1, "Page ID is required")
    });
  }
  /**
   * Execute the delete page action
   */
  async execute(r) {
    if (await this.verifyAccess(), !this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    this.appId = this.context.appId, this.userId = this.context.userId || "";
    try {
      return this.pageTreeBuilder = new $r(this.appId), await this.deletePage(r.id);
    } catch (n) {
      if (n instanceof w)
        throw n;
      const a = n instanceof Error ? n.message : "Failed to delete page";
      throw new w(a, "DELETE_PAGE_ERROR");
    }
  }
  /**
   * Main delete page logic
   */
  async deletePage(r) {
    const n = await this.getCurrentEditor(r);
    if (n && n !== this.userId)
      return { tags: [], code: "PAGE_LOCKED", editor: n };
    const a = await this.pageTreeBuilder.getPagesTree(), o = this.pageTreeBuilder.findPageInLanguageTree(r, a.languageTree), s = this.pageTreeBuilder.findPageInPrimaryTree(r, a.primaryTree);
    if (!o && !s)
      throw ue("ERROR_DELETING_PAGE", "Page not found");
    return o !== null ? await this.deleteLanguagePageWithTree(r, o, a) : await this.deletePrimaryPageWithTree(r, a);
  }
  /**
   * Perform Deletion With Ids using Drizzle ORM
   */
  async performDeletionWithIds(r) {
    const n = [...r].reverse(), { error: a } = await S(
      () => I.delete(ne).where(Tt(ne.pageId, n))
    );
    if (a) throw ue("DELETE_FAILED", a);
    const { error: o } = await S(
      () => I.delete(Ne).where(Tt(Ne.id, n))
    );
    if (o) throw ue("DELETE_FAILED", o);
    const { error: s } = await S(
      () => I.delete(f).where(Tt(f.id, n))
    );
    if (s) throw ue("DELETE_FAILED", s);
    const { error: i } = await S(
      () => I.delete(ye).where(Tt(ye.id, n))
    );
    if (i) throw ue("DELETE_FAILED", i);
  }
  /**
   * Delete a language page using tree data
   */
  async deleteLanguagePageWithTree(r, n, a) {
    const o = n.primaryPage;
    if (!this.pageTreeBuilder.findPageInPrimaryTree(o, a.primaryTree))
      throw ue("ERROR_DELETING_PAGE", "Primary page not found");
    const i = this.pageTreeBuilder.collectNestedChildIds(n);
    return await this.performDeletionWithIds([r, ...i]), {
      tags: [`page-${r}`, ...i.map((l) => `page-${l}`)],
      totalDeleted: 1 + i.length
    };
  }
  /**
   * Delete a primary page using tree data
   */
  async deletePrimaryPageWithTree(r, n) {
    const a = this.pageTreeBuilder.findPageInPrimaryTree(r, n.primaryTree);
    if (!a)
      throw ue("ERROR_DELETING_PAGE", "Primary page not found");
    const o = this.pageTreeBuilder.collectNestedChildIds(a), s = this.pageTreeBuilder.findLanguagePagesForPrimary(r, n.languageTree), i = [];
    s.forEach((u) => {
      i.push(u.id);
      const c = this.pageTreeBuilder.collectNestedChildIds(u);
      i.push(...c);
    });
    const l = [.../* @__PURE__ */ new Set([...o, ...i])];
    return await this.performDeletionWithIds([r, ...l]), {
      tags: [`page-${r}`, ...l.map((u) => `page-${u}`)],
      totalDeleted: 1 + l.length
    };
  }
  /**
   * Get current editor for a page
   */
  async getCurrentEditor(r) {
    var o;
    const { data: n, error: a } = await S(
      () => I.select({ currentEditor: f.currentEditor }).from(f).where(Z(T(f.id, r), T(f.app, this.appId))).limit(1)
    );
    return a || !n || n.length === 0 ? null : ((o = n[0]) == null ? void 0 : o.currentEditor) || null;
  }
}
class Ow extends G {
  /**
   * Define the validation schema for delete page revision action
   */
  getValidationSchema() {
    return m.object({
      revisionId: m.string().nonempty("Revision ID is required")
    });
  }
  /**
   * Execute the delete page revision action
   */
  async execute(t) {
    if (await this.verifyAccess(), !this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    const { appId: r } = this.context, { error: n } = await S(
      () => I.delete(Ne).where(Z(T(Ne.uid, t.revisionId), T(Ne.app, r)))
    );
    if (n)
      throw new w("Failed to delete page revision", "DELETE_REVISION_ERROR");
    return { success: !0 };
  }
}
class Rw extends G {
  /**
   * Define the validation schema for duplicate page action
   */
  getValidationSchema() {
    return m.object({
      pageId: m.string().nonempty(),
      name: m.string().nonempty(),
      slug: m.string().optional()
    });
  }
  /**
   * Execute the duplicate page action
   */
  async execute(t) {
    if (await this.verifyAccess(), !this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    const { appId: r } = this.context;
    if (t.slug && await this.doesSlugExist(t.slug))
      throw new w("Slug already exists", "SLUG_EXISTS");
    const { data: n, error: a } = await S(
      () => I.query.appPages.findFirst({
        where: Z(T(f.id, t.pageId), T(f.app, r))
      })
    );
    if (a)
      throw a;
    if (!n)
      throw new w("Page not found", "PAGE_NOT_FOUND");
    const o = {
      ...n,
      id: void 0,
      createdAt: void 0,
      name: t.name,
      currentEditor: null,
      changes: null,
      online: !1,
      libRefId: null,
      lastSaved: null,
      ...t.slug && { slug: t.slug }
    }, [s] = await I.insert(f).values(o).returning({ id: f.id });
    if (!s)
      throw new w("Failed to create duplicate page", "INSERT_FAILED");
    return { id: s.id };
  }
  async doesSlugExist(t) {
    if (!this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    const { appId: r } = this.context, { data: n, error: a } = await S(
      () => I.query.appPages.findFirst({
        where: Z(T(f.slug, t), T(f.app, r)),
        columns: {
          id: !0
        }
      })
    );
    if (a)
      throw new w(`${a.message}`, "SLUG_CHECK_FAILED");
    return !!n;
  }
}
var Ss = {}, Hn, As;
function xw() {
  if (As) return Hn;
  As = 1;
  const e = {};
  return process.env.DOTENV_CONFIG_ENCODING != null && (e.encoding = process.env.DOTENV_CONFIG_ENCODING), process.env.DOTENV_CONFIG_PATH != null && (e.path = process.env.DOTENV_CONFIG_PATH), process.env.DOTENV_CONFIG_QUIET != null && (e.quiet = process.env.DOTENV_CONFIG_QUIET), process.env.DOTENV_CONFIG_DEBUG != null && (e.debug = process.env.DOTENV_CONFIG_DEBUG), process.env.DOTENV_CONFIG_OVERRIDE != null && (e.override = process.env.DOTENV_CONFIG_OVERRIDE), process.env.DOTENV_CONFIG_DOTENV_KEY != null && (e.DOTENV_KEY = process.env.DOTENV_CONFIG_DOTENV_KEY), Hn = e, Hn;
}
var Jn, Ns;
function Cw() {
  if (Ns) return Jn;
  Ns = 1;
  const e = /^dotenv_config_(encoding|path|quiet|debug|override|DOTENV_KEY)=(.+)$/;
  return Jn = function(r) {
    const n = r.reduce(function(a, o) {
      const s = o.match(e);
      return s && (a[s[1]] = s[2]), a;
    }, {});
    return "quiet" in n || (n.quiet = "true"), n;
  }, Jn;
}
var Os;
function Pw() {
  return Os || (Os = 1, (function() {
    Nu().config(
      Object.assign(
        {},
        xw(),
        Cw()(process.argv)
      )
    );
  })()), Ss;
}
Pw();
const Rs = "anthropic/claude-haiku-4.5";
class kw extends G {
  /**
   * Define the validation schema for generate HTML action
   */
  getValidationSchema() {
    return m.object({
      prompt: m.string().min(1, "Prompt is required"),
      context: m.string().optional(),
      image: m.string().optional()
    });
  }
  /**
   * Execute the generate HTML action
   */
  async execute(t) {
    if (await this.verifyAccess(), !this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    try {
      const r = `You are an expert HTML/CSS developer specializing in Tailwind CSS and shadcn/ui design patterns.

Create pure HTML code only. Make it fully responsive using Tailwind CSS v3 classes exclusively - no custom CSS or classes allowed. Implement container queries (@container) where appropriate for enhanced responsive behavior.

CRITICAL REQUIREMENTS:
1. Return ONLY the HTML code without any markdown formatting, code blocks, or explanations
2. Use ONLY Tailwind CSS v3+ utility classes - absolutely no custom CSS or classes
3. Use shadcn/ui design system theming and styling patterns (neutral colors, proper spacing, modern aesthetics)
4. Apply semantic HTML structure with proper accessibility attributes (ARIA labels, alt texts, proper heading hierarchy)
5. Add \`chai-name\` attributes to ALL wrapper/container elements with descriptive values that match their content purpose
6. Ensure mobile-first responsive design approach
7. Implement container queries using @container classes where appropriate for enhanced responsive behavior
8. Do NOT include <!DOCTYPE>, <html>, <head>, or <body> tags - only the content HTML
9. Use proper contrast ratios for accessibility
10. Keep the code clean, well-structured, and semantic
11. Think about UI randomly. Do not generate the same layout every time.
12. For accordion style ui, use html details and summary tags. eg: accordions, mobile menu etc.

Examples of chai-name usage:
- Navigation wrapper: chai-name="Navigation"
- Links container: chai-name="Nav Links"
- Hero section: chai-name="Hero Section"
- Content wrapper: chai-name="Main Content"
- Footer: chai-name="Site Footer"

HTML Tags (EXTREMELY IMPORTANT):
- for navbar, always create a mobile menu with details and summary tags. Createa proper mobile menu with hamburger icon and  dropdown style menu items.
- for accordion style ui, use html details and summary tags.
- For nested menu, use html details and summary tags with dropdown style menu items.

Shadcn/ui Classes (EXTREMELY IMPORTANT):
- NEVER use hardcoded color classes like bg-blue-500, text-red-600, border-green-400, etc.
- ONLY use shadcn/ui theme color classes that work with CSS variables
- Allowed color classes: bg-background, bg-foreground, bg-card, bg-popover, bg-primary, bg-secondary, bg-muted, bg-accent, bg-destructive
- Text colors: text-foreground, text-muted-foreground, text-primary, text-secondary, text-accent, text-destructive, text-card-foreground, text-popover-foreground, text-primary-foreground, text-secondary-foreground, text-accent-foreground, text-destructive-foreground
- Border colors: border-border, border-input, border-ring, border-primary, border-secondary, border-accent, border-destructive
- DO NOT use dark mode classes (dark:bg-*, dark:text-*, etc.) - we handle dark mode via CSS variables
- For neutral backgrounds use: bg-background, bg-card, bg-muted
- For text use: text-foreground, text-muted-foreground
- For interactive elements use: bg-primary, text-primary-foreground, hover:bg-primary/90
- For borders use: border-border, border-input

IMAGE USAGE RULES:
- Use royalty-free images from Unsplash or picsum photos
- Choose images that are relevant to the content context
- Always include descriptive alt text for accessibility
- Use appropriate image dimensions (e.g., w=1200 for hero images, w=800 for cards, w=400 for thumbnails)
- Always include explicit width and height HTML attributes on every <img> tag matching the image dimensions
  Example: \`<img src="https://domain/hero/1200/600" alt="Hero image" width="1200" height="600">\`
The final output should be clean, semantic HTML that works across all devices and screen sizes.

${t.context ? `Additional Context: ${t.context}` : ""}`;
      let a = (t.image ? await la({
        model: Rs,
        system: r,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: t.prompt
              },
              {
                type: "image",
                image: t.image
              }
            ]
          }
        ],
        temperature: 0.7
      }) : await la({
        model: Rs,
        system: r,
        prompt: t.prompt,
        temperature: 0.7
      })).text.trim();
      return a = a.replace(/^```html\n?/i, ""), a = a.replace(/^```\n?/, ""), a = a.replace(/\n?```$/, ""), a = a.trim(), { html: a };
    } catch (r) {
      console.log("error", r), this.handleError(r);
    }
  }
}
const Dw = "anthropic/claude-haiku-4.5", xs = {
  title: "Generate title for the following page. Max length: 60 characters",
  description: "Generate description for the following page. Max length: 160 characters",
  ogTitle: "Generate og title for the following page. Max length: 60 characters",
  ogDescription: "Generate og description for the following page. Max length: 160 characters",
  searchTitle: "Generate search title for the following page. Max length: 60 characters",
  searchDescription: "Generate search description for the following page. Max length: 160 characters",
  jsonLD: "Generate json ld for the following page. Return only json ld"
};
class $w extends G {
  /**
   * Define the validation schema for duplicate page action
   */
  getValidationSchema() {
    return m.object({
      pageContext: m.string(),
      dynamic: m.boolean(),
      pageContent: m.string(),
      field: m.enum(["title", "description", "ogTitle", "ogDescription", "searchTitle", "searchDescription", "jsonLD"]),
      lang: m.string().nonempty(),
      keyword: m.string().optional()
    });
  }
  /**
   * Execute the duplicate page action
   */
  async execute(t) {
    if (await this.verifyAccess(), !this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    return { field: (await la({
      model: Dw,
      system: `You are a SEO expert. Follow the instructions carefully. 
      Return plain string values except for json ld. For JSONLD, remove \`\`\`json\`\`\` and \`\`\`\`\` and return only valid JSON.
      Instructions: ${xs[t.field]}
      ${t.keyword ? `Optimize the generated content for "${t.keyword}" keyword(s)` : ""}
      Page Context: ${t.pageContext}
      Page Content: ${t.pageContent}
      Dynamic: ${t.dynamic}
      Language: ${t.lang}`,
      prompt: `${xs[t.field]}
      Page Context: ${t.pageContext}
      Page Content: ${t.pageContent}
      Dynamic: ${t.dynamic}
      Language: ${t.lang}`
    })).text };
  }
}
class Mw extends G {
  getValidationSchema() {
    return m.object({
      block: m.any(),
      pageProps: m.any().optional().default({}),
      lang: m.string()
    });
  }
  async execute(t) {
    var r;
    try {
      const { block: n, pageProps: a, lang: o } = t, s = n._type;
      if (s === "Repeater" && ((r = n == null ? void 0 : n.repeaterItems) != null && r.includes("{{#"))) {
        const u = n.repeaterItems.replace("{{#", "").replace("}}", ""), c = Zu(u);
        return c ? await (c == null ? void 0 : c.fetch({
          block: n,
          pageProps: a,
          lang: o,
          draft: !0,
          inBuilder: !0
        })) ?? [] : [];
      }
      const i = sc(s);
      return !i || !Yn(i.dataProvider) ? {} : await i.dataProvider({
        block: n,
        pageProps: a,
        lang: o,
        draft: !0,
        inBuilder: !0
      }) ?? {};
    } catch (n) {
      return this.handleError(n);
    }
  }
}
class Ou extends G {
  getValidationSchema() {
    return m.object({
      lang: m.string(),
      pageType: m.string().optional(),
      pageProps: m.any().optional().default({})
    });
  }
  async execute(t) {
    try {
      const { lang: r, pageType: n, pageProps: a = {} } = t, o = await Gu({
        lang: r,
        draft: !0,
        inBuilder: !0
      });
      if (!n)
        return { global: o };
      const s = da(n);
      return s ? {
        ...s.dataProvider ? await s.dataProvider({
          lang: r,
          draft: !0,
          inBuilder: !0,
          pageProps: a
        }) : {},
        global: o
      } : { global: o };
    } catch (r) {
      return this.handleError(r);
    }
  }
}
class Fw extends G {
  constructor() {
    super(...arguments);
    Ae(this, "appId", "");
  }
  /**
   * Define the validation schema for get changes action
   */
  getValidationSchema() {
    return m.object({});
  }
  /**
   * Execute the get changes action
   */
  async execute() {
    if (!this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    this.appId = this.context.appId;
    try {
      return await this.getChanges();
    } catch (r) {
      if (r instanceof w)
        throw r;
      const n = r instanceof Error ? r.message : "Failed to get changes";
      throw new w(n, "GET_CHANGES_ERROR");
    }
  }
  /**
   * Main get changes logic
   */
  async getChanges() {
    const { data: r, error: n } = await S(
      () => I.select({
        id: f.id,
        slug: f.slug,
        name: f.name,
        pageType: f.pageType,
        lang: f.lang,
        changes: f.changes,
        primaryPage: f.primaryPage,
        online: f.online,
        currentEditor: f.currentEditor
      }).from(f).where(Z(T(f.app, this.appId), Ba(f.changes)))
    );
    if (n)
      throw new w("Error getting changed pages", "ERROR_GETTING_CHANGES");
    const { data: a, error: o } = await S(
      () => I.select({
        id: f.id,
        slug: f.slug,
        name: f.name,
        pageType: f.pageType,
        lang: f.lang,
        changes: f.changes,
        primaryPage: f.primaryPage,
        online: f.online
      }).from(f).where(
        Z(
          T(f.app, this.appId),
          nc(f.currentEditor),
          T(f.online, !1)
        )
      )
    );
    if (o)
      throw new w("Error getting offline pages", "ERROR_GETTING_OFFLINE_PAGES");
    const s = (a || []).map((d) => ({
      ...d,
      changes: ["Take Online"]
    })), l = [
      ...(r || []).filter((d) => !s.some((p) => p.id === d.id)).map((d) => ({
        ...d,
        changes: d.changes
      })),
      ...s
    ], { data: u, error: c } = await S(
      () => I.select({
        changes: me.changes
      }).from(me).where(Z(T(me.id, this.appId), Ba(me.changes)))
    );
    if (!c && u && u.length > 0) {
      const d = u[0].changes ?? [];
      d.includes("THEME") && l.push({
        id: "THEME",
        slug: "",
        name: "Theme",
        pageType: "theme",
        lang: "",
        changes: ["Updated"],
        primaryPage: null,
        online: !0
      }), d.includes("DESIGN_TOKENS") && l.push({
        id: "DESIGN_TOKENS",
        slug: "",
        name: "Design Tokens",
        pageType: "design_tokens",
        lang: "",
        changes: ["Updated"],
        primaryPage: null,
        online: !0
      });
    }
    return l;
  }
}
class Ru extends G {
  getValidationSchema() {
    return m.object({});
  }
  async execute() {
    try {
      return Bu().map((r) => ca(r, "fetch"));
    } catch (t) {
      return this.handleError(t);
    }
  }
}
class zw extends G {
  /**
   * Define the validation schema for update page action
   */
  getValidationSchema() {
    return m.object({
      versions: m.object({
        version1: m.object({
          type: m.enum(["draft", "revision", "live"]),
          id: m.string()
        }),
        version2: m.object({
          type: m.enum(["draft", "revision", "live"]),
          id: m.string()
        })
      })
    });
  }
  /**
   * Execute the update page action
   */
  async execute(t) {
    this.validateContext();
    const r = await this.getBlocksForVersion(t.versions.version1.type, t.versions.version1.id), n = await this.getBlocksForVersion(t.versions.version2.type, t.versions.version2.id);
    return {
      version1: {
        blocks: r.blocks,
        seo: r.seo
      },
      version2: {
        blocks: n.blocks,
        seo: n.seo
      }
    };
  }
  /**
   * Get blocks from the appropriate table based on type
   */
  async getBlocksForVersion(t, r) {
    let n, a;
    switch (t) {
      case "draft":
        ({ data: n, error: a } = await S(
          () => I.query.appPages.findFirst({
            where: T(f.id, r),
            columns: {
              blocks: !0,
              seo: !0
            }
          })
        ));
        break;
      case "live":
        ({ data: n, error: a } = await S(
          () => I.query.appPagesOnline.findFirst({
            where: T(ye.id, r),
            columns: {
              blocks: !0,
              seo: !0
            }
          })
        ));
        break;
      case "revision":
        ({ data: n, error: a } = await S(
          () => I.query.appPagesRevisions.findFirst({
            where: T(Ne.uid, r),
            columns: {
              blocks: !0,
              seo: !0
            }
          })
        ));
        break;
      default:
        throw new w(`Invalid version type: ${t}`, "INVALID_VERSION_TYPE");
    }
    if (a)
      throw new w(`Failed to fetch blocks for ${t} version: ${a.message}`, "FETCH_BLOCKS_ERROR");
    if (!n)
      throw new w(`No data found for ${t} version with id: ${r}`, "VERSION_NOT_FOUND");
    return {
      blocks: n.blocks || [],
      seo: n.seo || {}
    };
  }
  /**
   * Validate that context is properly set
   */
  validateContext() {
    if (!this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
  }
}
class xu extends G {
  getValidationSchema() {
    return m.object({
      id: m.string()
    });
  }
  async execute(t) {
    var c;
    if (!this.context)
      throw ue("CONTEXT_NOT_SET", new Error("CONTEXT_NOT_SET"));
    const { appId: r } = this.context, { id: n } = t, a = f, { data: o, error: s } = await S(
      () => I.select({
        id: a.id,
        name: a.name,
        slug: a.slug,
        lang: a.lang,
        primaryPage: a.primaryPage,
        seo: a.seo,
        currentEditor: a.currentEditor,
        pageType: a.pageType,
        lastSaved: a.lastSaved,
        dynamic: a.dynamic,
        parent: a.parent,
        blocks: a.blocks
      }).from(a).where(Z(T(a.app, r), T(a.id, n))).limit(1)
    );
    if (s)
      throw ue("PAGE_NOT_FOUND", s);
    if (!o || o.length === 0)
      throw ue("PAGE_NOT_FOUND", new Error("Page not found"));
    const i = o[0], l = i.primaryPage ?? i.id;
    let u = i.blocks ?? [];
    if (l !== i.id) {
      const { data: d, error: p } = await S(
        () => I.select({
          blocks: a.blocks
        }).from(a).where(Z(T(a.app, r), T(a.id, l))).limit(1)
      );
      if (p)
        throw ue("BLOCKS_NOT_FOUND", p);
      u = ((c = d == null ? void 0 : d[0]) == null ? void 0 : c.blocks) ?? [];
    }
    return {
      ...i,
      blocks: u,
      id: n,
      languagePageId: i.id
    };
  }
}
class Lw extends G {
  getValidationSchema() {
    return m.object({
      pageType: m.string()
    });
  }
  async execute(t) {
    try {
      const { pageType: r, ...n } = t, a = da(r);
      return a ? a.getDynamicPages ? await a.getDynamicPages(n) : [] : { error: "Page type not found" };
    } catch (r) {
      return this.handleError(r);
    }
  }
}
class Cu extends G {
  getValidationSchema() {
    return m.object({
      id: m.string()
    });
  }
  async execute(t) {
    if (!this.context)
      throw ue("CONTEXT_NOT_SET", new Error("CONTEXT_NOT_SET"));
    const { appId: r } = this.context, { id: n } = t, { data: a, error: o } = await S(
      () => I.select({
        id: f.id,
        name: f.name,
        slug: f.slug,
        lang: f.lang,
        primaryPage: f.primaryPage,
        pageType: f.pageType,
        seo: f.seo,
        currentEditor: f.currentEditor,
        online: f.online,
        parent: f.parent,
        metadata: f.metadata,
        dynamic: f.dynamic,
        dynamicSlugCustom: f.dynamicSlugCustom,
        changes: f.changes
      }).from(f).where(
        Z(T(f.app, r), Ps(T(f.primaryPage, n), T(f.id, n)))
      )
    );
    if (o)
      throw ue("LANGUAGE_PAGES_ERROR", o);
    return a.map((s) => ca(s, ["app"]));
  }
}
class Pu extends G {
  getValidationSchema() {
    return m.object({}).optional().default({});
  }
  async execute() {
    var l;
    if (!this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    const { appId: t } = this.context, r = await S(
      () => I.select({
        id: Q.id,
        name: Q.name,
        type: Q.type,
        createdAt: Q.createdAt
      }).from(Q).where(T(Q.app, t)).limit(1)
    );
    if (r.error)
      throw new w("Failed to fetch site library", "DB_ERROR");
    const n = r.data[0] || null, a = ((l = process == null ? void 0 : process.env) == null ? void 0 : l.CHAIBUILDER_CLIENT_ID) || null;
    if (!a)
      return n ? [
        {
          id: n.id,
          name: n.name,
          type: n.type,
          createdAt: n.createdAt,
          isSiteLibrary: !0
        }
      ] : [];
    const { data: o, error: s } = await S(
      () => I.select({
        id: Q.id,
        name: Q.name,
        type: Q.type,
        createdAt: Q.createdAt
      }).from(Q).where(T(Q.client, a))
    );
    if (s)
      throw new w("Failed to fetch libraries", "DB_ERROR");
    const i = (n == null ? void 0 : n.id) || null;
    return o.map((u) => ({
      id: u.id,
      name: u.name,
      type: u.type,
      createdAt: u.createdAt,
      isSiteLibrary: i ? u.id === i : !1
    }));
  }
}
class Uw extends G {
  /**
   * Define the validation schema for get library groups action
   */
  getValidationSchema() {
    return m.object({});
  }
  /**
   * Execute the get library groups action
   */
  async execute() {
    if (!this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    const { data: t, error: r } = await S(
      () => I.select({
        id: Q.id
      }).from(Q).where(T(Q.app, this.context.appId)).limit(1)
    );
    if (r)
      throw new w("Failed to fetch site library", "GET_SITE_LIBRARY_FAILED", 500, r);
    if (!t || t.length === 0)
      return [];
    const n = t[0], { data: a, error: o } = await S(
      () => I.select({
        group: ae.group
      }).from(ae).where(T(ae.library, n.id))
    );
    if (o)
      throw new w("Failed to fetch library groups", "GET_LIBRARY_GROUPS_FAILED", 500, o);
    const s = Ua(a, "group").filter((i) => i != null);
    return Ua(Xr(s), (i) => ({
      id: i,
      name: i
    }));
  }
}
class jw extends G {
  /**
   * Define the validation schema for get library item action
   */
  getValidationSchema() {
    return m.object({
      id: m.string().min(1)
    });
  }
  /**
   * Execute the get library item action
   */
  async execute(t) {
    if (!this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    const { appId: r } = this.context, { id: n } = t, { data: a, error: o } = await S(
      () => I.select({
        id: ae.id,
        name: ae.name,
        blocks: ae.blocks,
        library: ae.library,
        description: ae.description,
        group: ae.group,
        user: ae.user,
        preview: ae.preview,
        createdAt: ae.createdAt,
        html: ae.html,
        libraryApp: Q.app,
        libraryName: Q.name
      }).from(ae).leftJoin(Q, T(ae.library, Q.id)).where(T(ae.id, n))
    );
    if (o)
      throw new w("Failed to fetch library item", "GET_LIBRARY_ITEM_FAILED", 500, o);
    if (!a || a.length === 0)
      throw new w("Library item not found", "GET_LIBRARY_ITEM_FAILED");
    const s = a[0], i = Array.isArray(s.blocks) ? [...s.blocks] : s.blocks;
    return s.libraryApp === r ? Wn(i, "0._libBlockId", s.id) : Wn(i, "0._libBlockId", void 0), {
      id: s.id,
      name: s.name,
      blocks: i,
      description: s.description,
      group: s.group,
      user: s.user,
      preview: s.preview,
      createdAt: s.createdAt,
      html: s.html
    };
  }
}
class Zw extends G {
  /**
   * Define the validation schema for get library items action
   */
  getValidationSchema() {
    return m.object({
      id: m.string().min(1)
    });
  }
  /**
   * Execute the get library items action
   */
  async execute(t) {
    if (!this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    const { id: r } = t, { data: n, error: a } = await S(
      () => I.select({
        id: ae.id,
        name: ae.name,
        library: ae.library,
        group: ae.group,
        description: ae.description,
        preview: ae.preview
      }).from(ae).where(T(ae.library, r))
    );
    if (a)
      throw new w("Failed to fetch library items", "GET_LIBRARY_ITEMS_FAILED", 500, a);
    return n || [];
  }
}
class Gw extends G {
  getValidationSchema() {
    return m.object({
      id: m.string(),
      lang: m.string(),
      pageType: m.string().optional(),
      pageProps: m.any().optional().default({})
    });
  }
  async execute(t) {
    const { id: r, lang: n, pageType: a, pageProps: o = {} } = t, s = new xu(), i = new Ou(), l = new Cu();
    this.context && (s.setContext(this.context), i.setContext(this.context), l.setContext(this.context));
    try {
      const [u, c, d] = await Promise.all([
        s.execute({ id: r }),
        i.execute({ lang: n, pageType: a, pageProps: o }),
        l.execute({ id: r })
      ]);
      return {
        draftPage: u,
        builderPageData: c,
        languagePages: d
      };
    } catch (u) {
      const c = u instanceof Error ? u.message : String(u);
      throw new Error(`Failed to fetch page data: ${c}`);
    }
  }
}
class Bw extends G {
  /**
   * Define the validation schema for get page revisions action
   */
  getValidationSchema() {
    return m.object({
      pageId: m.string().min(1, "Page ID is required")
    });
  }
  /**
   * Execute the get page revisions action
   */
  async execute(t) {
    if (!this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    try {
      return await this.getRevisions(t.pageId);
    } catch (r) {
      if (r instanceof w)
        throw r;
      const n = r instanceof Error ? r.message : "Failed to get page revisions";
      throw new w(n, "GET_PAGE_REVISIONS_ERROR");
    }
  }
  /**
   * Main logic to get page revisions
   */
  async getRevisions(t) {
    const { data: r, error: n } = await S(
      () => I.select({
        currentEditor: f.currentEditor,
        createdAt: f.createdAt
      }).from(f).where(Z(T(f.app, this.context.appId), T(f.id, t)))
    ), { data: a, error: o } = await S(
      () => I.select({
        uid: Ne.uid,
        currentEditor: Ne.currentEditor,
        createdAt: Ne.createdAt,
        type: Ne.type
      }).from(Ne).where(Z(T(Ne.app, this.context.appId), T(Ne.id, t)))
    );
    if (n) {
      const u = n instanceof Error ? `Error getting current page for revisions: ${n.message}` : "Error getting current page for revisions";
      throw new w(u, "ERROR_GETTING_CURRENT_PAGE_FOR_REVISIONS");
    }
    if (o) {
      const u = o instanceof Error ? `Error getting page revisions: ${o.message}` : "Error getting page revisions";
      throw new w(u, "ERROR_GETTING_PAGE_REVISIONS");
    }
    const s = r == null ? void 0 : r[0], l = [...s ? [
      {
        ...s,
        type: "published",
        uid: "current"
      }
    ] : [], ...a ?? []];
    return zu(l, ["createdAt"], ["desc"]);
  }
}
class ku extends G {
  getValidationSchema() {
    return m.object({});
  }
  async execute() {
    try {
      return await Promise.all(
        Vu().map(async (r) => ({
          key: r.key,
          helpText: r.helpText ?? "",
          icon: r.icon ?? "",
          dynamicSegments: r.dynamicSegments ?? "",
          dynamicSlug: r.dynamicSlug ?? "",
          hasSlug: r.hasSlug ?? !0,
          name: typeof r.name == "function" ? await r.name() : r.name,
          ...Yn(r.defaultSeo) ? { defaultSeo: r.defaultSeo() } : {},
          ...Yn(r.defaultJSONLD) ? { defaultJSONLD: r.defaultJSONLD() } : {}
        }))
      );
    } catch (t) {
      return this.handleError(t);
    }
  }
}
class Vw extends G {
  /**
   * Define the validation schema for duplicate page action
   */
  getValidationSchema() {
    return m.object({
      id: m.string().nonempty(),
      type: m.enum(["draft", "live", "revision"])
    });
  }
  /**
   * Execute the duplicate page action
   */
  async execute(t) {
    if (!this.context)
      throw ue("CONTEXT_NOT_SET", new Error("CONTEXT_NOT_SET"));
    let r, n;
    switch (t.type) {
      case "draft":
        ({ data: r, error: n } = await S(
          () => I.query.appPages.findFirst({
            where: Z(T(f.id, t.id), T(f.lang, t.lang ?? ""))
          })
        ));
        break;
      case "live":
        ({ data: r, error: n } = await S(
          () => I.query.appPagesOnline.findFirst({
            where: Z(T(ye.id, t.id), T(ye.lang, t.lang ?? ""))
          })
        ));
        break;
      case "revision":
        ({ data: r, error: n } = await S(
          () => I.query.appPagesRevisions.findFirst({
            where: Z(T(Ne.uid, t.id), T(Ne.lang, t.lang ?? ""))
          })
        ));
        break;
    }
    if (n || !r)
      throw ue("NOT_FOUND", n || new Error("Page not found"));
    let a = (r == null ? void 0 : r.blocks) ?? [];
    return a = await this.getMergedBlocks(a, t.type === "draft", this.context.appId), {
      ...r,
      blocks: a
    };
  }
  /**
   * Merge partial blocks into the main blocks array
   * Optimized to fetch all partial blocks in a single query
   */
  async getMergedBlocks(t, r, n) {
    const a = r ? f : ye, o = t.filter(({ _type: c }) => c === "GlobalBlock" || c === "PartialBlock");
    if (o.length === 0)
      return t;
    const s = o.map((c) => Dt(c, "partialBlockId", Dt(c, "globalBlock", ""))).filter((c) => c !== "");
    if (s.length === 0)
      return t;
    const { data: i, error: l } = await S(
      () => I.select({
        id: a.id,
        blocks: a.blocks
      }).from(a).where(Z(T(a.app, n), Tt(a.id, s)))
    );
    if (l)
      throw ue("PARTIAL_BLOCKS_FETCH_ERROR", l);
    const u = /* @__PURE__ */ new Map();
    i && i.forEach((c) => {
      u.set(c.id, c.blocks ?? []);
    });
    for (let c = 0; c < o.length; c++) {
      const d = o[c];
      if (!d) continue;
      const p = Dt(d, "partialBlockId", Dt(d, "globalBlock", ""));
      if (p === "") continue;
      let y = u.get(p) ?? [];
      y.length > 0 && (y = y.map((v) => (Mt(v._parent) && (v._parent = d._parent), Lu(d, "_show") && (v._show = d._show), v)));
      const E = t.indexOf(d);
      E !== -1 && t.splice(E, 1, ...y);
    }
    return t;
  }
}
class qw extends G {
  /**
   * Define the validation schema for duplicate page action
   */
  getValidationSchema() {
    return m.undefined();
  }
  /**
   * Execute the duplicate page action
   */
  async execute() {
    if (!this.context)
      throw ue("CONTEXT_NOT_SET", new Error("CONTEXT_NOT_SET"));
    const { appId: t } = this.context, { data: r, error: n } = await S(
      () => I.select({
        id: f.id,
        designTokens: f.designTokens,
        name: f.name,
        slug: f.slug,
        links: f.links,
        partialBlocks: f.partialBlocks
      }).from(f).where(Z(T(f.lang, ""), T(f.app, t)))
    );
    if (n)
      throw ue("FETCH_SITE_DATA_FAILED", n);
    const a = {};
    return Uu(r, (o) => {
      var s;
      a[o.id] = {
        name: o.name,
        isPartial: Mt(o.slug),
        partialBlocks: o.partialBlocks ? (s = o.partialBlocks) == null ? void 0 : s.split("|").filter(Boolean) : [],
        links: o.links ? o.links.split("|").filter(Boolean) : [],
        designTokens: o.designTokens ?? {}
      };
    }), a;
  }
}
class Hw extends G {
  /**
   * Define the validation schema for get templates by type action
   */
  getValidationSchema() {
    return m.object({
      pageType: m.string().min(1)
    });
  }
  /**
   * Execute the get templates by type action
   */
  async execute(t) {
    if (!this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    const { appId: r } = this.context, { pageType: n } = t, { data: a, error: o } = await S(
      () => I.query.libraries.findFirst({
        where: T(Q.app, r),
        columns: {
          id: !0
        }
      })
    );
    if (o)
      throw new w("Failed to fetch site library", "GET_SITE_LIBRARY_FAILED", 500, o);
    const { data: s, error: i } = await S(
      () => I.select({
        id: Q.id
      }).from(Q).where(T(Q.type, "shared"))
    );
    if (i)
      throw new w("Failed to fetch shared libraries", "GET_SHARED_LIBRARIES_FAILED", 500, i);
    const l = [...a ? [a.id] : [], ...(s || []).map((d) => d.id)];
    if (l.length === 0)
      return [];
    const { data: u, error: c } = await S(
      () => I.select({
        id: ne.id,
        library: ne.library,
        pageId: ne.pageId,
        pageType: ne.pageType,
        name: ne.name,
        description: ne.description,
        preview: ne.preview,
        user: ne.user,
        createdAt: ne.createdAt
      }).from(ne).where(
        Z(T(ne.pageType, n), Tt(ne.library, l))
      )
    );
    if (c)
      throw new w("Failed to fetch templates", "GET_TEMPLATES_FAILED", 500, c);
    return u || [];
  }
}
class Du extends G {
  getValidationSchema() {
    return m.object({
      lang: m.string().optional()
    });
  }
  async execute(t) {
    if (!this.context)
      throw ue("CONTEXT_NOT_SET", new Error("CONTEXT_NOT_SET"));
    const { appId: r } = this.context, a = (t ?? { lang: "" }).lang ?? "", { data: o, error: s } = await S(
      () => I.select({
        id: f.id,
        name: f.name,
        slug: f.slug,
        pageType: f.pageType,
        currentEditor: f.currentEditor,
        parent: f.parent,
        online: f.online,
        lastSaved: f.lastSaved,
        createdAt: f.createdAt,
        dynamic: f.dynamic,
        dynamicSlugCustom: f.dynamicSlugCustom,
        primaryPage: f.primaryPage,
        changes: f.changes,
        lang: f.lang,
        designTokens: f.designTokens,
        links: f.links,
        partialBlocks: f.partialBlocks
      }).from(f).where(Z(T(f.app, r), T(f.lang, a)))
    );
    if (s)
      throw ue("ERROR_GETTING_WEBSITE_PAGES", s);
    if (!o || o.length === 0)
      return [];
    const i = o.filter((d) => !Mt(d.slug)).map((d) => d.id), { data: l, error: u } = await S(
      () => I.select({
        pageId: ne.pageId
      }).from(ne).where(Tt(ne.pageId, i))
    );
    if (u)
      throw ue("ERROR_GETTING_TEMPLATE_INFO", u);
    const c = new Set((l || []).map((d) => d.pageId));
    return o.map((d) => ({
      ...d,
      pageType: d.pageType ?? "page",
      isTemplate: c.has(d.id),
      changes: d.changes,
      lang: d.lang,
      designTokens: d.designTokens,
      links: d.links,
      partialBlocks: d.partialBlocks
    }));
  }
}
class $u extends G {
  getValidationSchema() {
    return m.object({
      draft: m.boolean()
    });
  }
  async execute(t) {
    if (!this.context)
      throw ue("CONTEXT_NOT_SET", new Error("CONTEXT_NOT_SET"));
    const { appId: r } = this.context, { draft: n } = t, a = n ? me : _t, { data: o, error: s } = await S(
      () => I.select({
        theme: a.theme,
        fallbackLang: a.fallbackLang,
        languages: a.languages,
        settings: a.settings,
        designTokens: a.designTokens,
        changes: a.changes
      }).from(a).where(T(a.id, r)).limit(1)
    );
    if (s)
      throw ue("ERROR_PROJECT_CONFIG", s);
    if (!o || o.length === 0)
      throw ue("PROJECT_NOT_FOUND", new Error("Project not found"));
    const i = ju(o), l = (i == null ? void 0 : i.changes) ?? [];
    return {
      ...this.getDefaultSettings(),
      ...i,
      // Handle null/undefined values by providing defaults
      fallbackLang: (i == null ? void 0 : i.fallbackLang) || this.getDefaultSettings().fallbackLang,
      languages: (i == null ? void 0 : i.languages) || this.getDefaultSettings().languages,
      theme: (i == null ? void 0 : i.theme) || this.getDefaultSettings().theme,
      // Generate deterministic app key like the original implementation
      appKey: this.generateDeterministicUuid(r),
      appChanges: l
    };
  }
  getDefaultSettings() {
    return {
      fallbackLang: "en",
      languages: [],
      theme: {
        colors: {
          card: ["#FFFFFF", "#09090B"],
          ring: ["#2563EB", "#3B82F6"],
          input: ["#E4E4E7", "#27272A"],
          muted: ["#F4F4F5", "#27272A"],
          accent: ["#F4F4F5", "#27272A"],
          border: ["#E4E4E7", "#27272A"],
          popover: ["#FFFFFF", "#09090B"],
          primary: ["#2563EB", "#3B82F6"],
          secondary: ["#F4F4F5", "#27272A"],
          background: ["#FFFFFF", "#09090B"],
          foreground: ["#09090B", "#FFFFFF"],
          destructive: ["#EF4444", "#7F1D1D"],
          "card-foreground": ["#09090B", "#FFFFFF"],
          "muted-foreground": ["#71717A", "#A1A1AA"],
          "accent-foreground": ["#09090B", "#FFFFFF"],
          "popover-foreground": ["#09090B", "#FFFFFF"],
          "primary-foreground": ["#FFFFFF", "#FFFFFF"],
          "secondary-foreground": ["#09090B", "#FFFFFF"],
          "destructive-foreground": ["#FFFFFF", "#FFFFFF"]
        },
        fontFamily: { body: "Roboto", heading: "Poppins" },
        borderRadius: "30px"
      },
      settings: {},
      designTokens: {}
    };
  }
  generateDeterministicUuid(t) {
    const r = Xu("sha256").update(t).digest("hex");
    return [
      r.substring(0, 8),
      r.substring(8, 12),
      "4" + r.substring(13, 16),
      // Version 4
      (parseInt(r.substring(16, 17), 16) & 3 | 8).toString(16) + r.substring(17, 20),
      // Variant bits
      r.substring(20, 32)
    ].join("-");
  }
}
class Jw extends G {
  getValidationSchema() {
    return m.object({}).optional().default({});
  }
  async execute() {
    const t = new $u(), r = new Du(), n = new ku(), a = new Pu(), o = new Ru();
    this.context && (t.setContext(this.context), r.setContext(this.context), n.setContext(this.context), a.setContext(this.context), o.setContext(this.context));
    const [s, i, l, u, c] = await Promise.all([
      t.execute({ draft: !0 }),
      r.execute({ lang: "" }),
      n.execute(),
      a.execute(),
      o.execute()
    ]);
    return {
      websiteSettings: s,
      websitePages: i,
      pageTypes: l,
      libraries: u,
      collections: c
    };
  }
}
class Yw extends G {
  /**
   * Define the validation schema for mark as template action
   */
  getValidationSchema() {
    return m.object({
      id: m.string().min(1),
      description: m.string().optional(),
      name: m.string().min(1),
      pageType: m.string().min(1),
      previewImage: m.string().optional(),
      previewImageUrl: m.string().optional()
    });
  }
  /**
   * Execute the mark as template action
   */
  async execute(t) {
    var v;
    if (await this.verifyAccess(), !this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    const { appId: r, userId: n } = this.context, { id: a, description: o, name: s, pageType: i, previewImage: l, previewImageUrl: u } = t, { data: c, error: d } = await S(
      () => I.query.libraries.findFirst({
        where: T(Q.app, r),
        columns: {
          id: !0
        }
      })
    );
    if (d)
      throw new w("Failed to fetch site library", "GET_SITE_LIBRARY_FAILED", 500, d);
    if (!c)
      throw new w("Library not found for this app", "GET_SITE_LIBRARY_FAILED");
    let p = u;
    if (l) {
      const b = Ma("UPLOAD_TO_STORAGE");
      b == null || b.setContext(this.context);
      const P = `template-${Date.now()}.webp`, k = `${r}/templates`, g = await (b == null ? void 0 : b.execute({
        file: l,
        fileName: P,
        contentType: "image/webp",
        folder: k
      }));
      if (g != null && g.error)
        throw new w("Failed to upload preview image", "UPLOAD_PREVIEW_FAILED", 500, g.error);
      p = ((v = g == null ? void 0 : g.data) == null ? void 0 : v.url) || u;
    }
    const { data: y, error: E } = await S(
      () => I.insert(ne).values({
        library: c.id,
        user: n ?? null,
        pageId: a,
        description: o ?? null,
        name: s + " Template",
        pageType: i,
        preview: p ?? null
      }).returning({
        id: ne.id,
        library: ne.library,
        pageType: ne.pageType,
        pageId: ne.pageId,
        description: ne.description,
        preview: ne.preview
      })
    );
    if (E || !y || y.length === 0)
      throw new w("Failed to mark page as template", "UPDATE_FAILED", 500, E);
    return y[0];
  }
}
class Ww extends G {
  constructor() {
    super(...arguments);
    Ae(this, "appId", "");
    Ae(this, "revisionsEnabled", !1);
  }
  /**
   * Define the validation schema for publish changes action
   */
  getValidationSchema() {
    return m.object({
      ids: m.array(m.string()).optional(),
      revisions: m.boolean().optional()
    });
  }
  /**
   * Execute the publish changes action
   */
  async execute(r) {
    await this.verifyAccess(), this.validateContext(), this.appId = this.context.appId, this.revisionsEnabled = r.revisions ?? !1;
    try {
      const n = r.ids ?? [];
      if (n.length === 0)
        throw new w("IDS_REQUIRED", "At least one page ID or THEME must be provided");
      const a = await Promise.all(
        n.map((i) => i === "THEME" ? this.publishTheme() : i === "DESIGN_TOKENS" ? this.publishDesignToken() : this.publishPage(i))
      );
      await this.clearChanges(n);
      const o = Xr(ja(a.map((i) => i.tags))), s = Xr(ja(a.map((i) => i.paths)));
      return { tags: o, paths: s };
    } catch (n) {
      return this.handleExecutionError(n);
    }
  }
  /**
   * Validate that context is properly set
   */
  validateContext() {
    if (!this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
  }
  /**
   * Publish theme changes
   */
  async publishTheme() {
    const r = await this.cloneApp(), { error: n } = await S(
      () => I.delete(_t).where(T(_t.id, this.appId))
    );
    if (n)
      throw new w("Error deleting online theme", "ERROR_PUBLISHING_THEME", 500, n);
    const { error: a } = await S(
      () => I.insert(_t).values({ ...r, changes: null })
    );
    if (a)
      throw new w("Error inserting online theme", "ERROR_PUBLISHING_THEME", 500, a);
    return await this.removeFromChangesArray("THEME", "ERROR_PUBLISHING_THEME"), { tags: [`website-settings-${this.appId}`], paths: [] };
  }
  /**
   * Publish design token changes
   */
  async publishDesignToken() {
    const r = await this.cloneApp(), { error: n } = await S(
      () => I.delete(_t).where(T(_t.id, this.appId))
    );
    if (n)
      throw new w("Error deleting online app", "ERROR_PUBLISHING_DESIGN_TOKEN", 500, n);
    const { error: a } = await S(
      () => I.insert(_t).values({ ...r, changes: null })
    );
    if (a)
      throw new w("Error inserting online app", "ERROR_PUBLISHING_DESIGN_TOKEN", 500, a);
    return await this.removeFromChangesArray("DESIGN_TOKENS", "ERROR_PUBLISHING_DESIGN_TOKEN"), { tags: [`website-settings-${this.appId}`], paths: [] };
  }
  /**
   * Remove a specific key from the app's changes array.
   * Sets changes to null only if the array becomes empty after removal.
   */
  async removeFromChangesArray(r, n) {
    var u;
    const { data: a, error: o } = await S(
      () => I.select({ changes: me.changes }).from(me).where(T(me.id, this.appId))
    );
    if (o)
      throw new w("Error fetching changes", n, 500, o);
    const i = (((u = a == null ? void 0 : a[0]) == null ? void 0 : u.changes) ?? []).filter((c) => c !== r), { error: l } = await S(
      () => I.update(me).set({ changes: i.length > 0 ? i : null }).where(T(me.id, this.appId))
    );
    if (l)
      throw new w("Error updating changes", n, 500, l);
  }
  /**
   * Clone app data from main table
   */
  async cloneApp() {
    const { data: r, error: n } = await S(
      () => I.query.apps.findFirst({
        where: T(me.id, this.appId)
      })
    );
    if (n || !r)
      throw new w("Site not found", "SITE_NOT_FOUND", 404, n);
    return r;
  }
  /**
   * Clear changes flag after publishing
   */
  async clearChanges(r) {
    const n = r.filter((o) => o !== "THEME" && o !== "DESIGN_TOKENS");
    if (n.length === 0)
      return;
    const { error: a } = await S(
      () => I.update(f).set({ changes: null, online: !0 }).where(Z(Tt(f.id, n), T(f.app, this.appId)))
    );
    if (a)
      throw new w("Error clearing changes", "ERROR_CLEARING_CHANGES", 500, a);
  }
  /**
   * Get pages that use a partial block
   */
  async getPartialBlockUsage(r) {
    const { data: n } = await S(
      () => I.query.appPagesOnline.findMany({
        where: Z(T(ye.app, this.appId), ac(ye.partialBlocks, `%${r}%`)),
        columns: {
          id: !0
        }
      })
    );
    return Xr(n ?? []).map((a) => a.id).map((a) => `page-${a}`);
  }
  /**
   * Publish a single page
   */
  async publishPage(r) {
    const n = await this.clonePage(r);
    await this.addOnlinePage(n);
    const a = [`page-${n.primaryPage ?? n.id}`], o = [];
    return Mt(n.slug) ? a.push(...await this.getPartialBlockUsage(n.primaryPage ?? n.id)) : o.push(`${n.slug}`), { tags: a, paths: o };
  }
  /**
   * Create a revision before publishing
   */
  async createRevision(r) {
    if (!this.revisionsEnabled)
      return !1;
    const { data: n, error: a } = await S(
      () => I.query.appPagesOnline.findFirst({
        where: T(ye.id, r)
      })
    );
    if (a || !n || !Mt(n.primaryPage))
      return !1;
    const { error: o } = await S(
      () => I.insert(Ne).values({
        ...n,
        type: "published",
        uid: void 0
        // Let database generate new uid
      })
    );
    if (o)
      throw new w("Error creating revision", "ERROR_CREATING_REVISION", 500, o);
    return !0;
  }
  /**
   * Add page to online table
   */
  async addOnlinePage(r) {
    await this.createRevision(r.id);
    const { error: n } = await S(
      () => I.delete(ye).where(T(ye.id, r.id))
    );
    if (n)
      throw new w("Error deleting online page", "ERROR_PUBLISHING_PAGE", 500, n);
    const { changes: a, createdAt: o, ...s } = r, { data: i, error: l } = await S(
      () => {
        var c;
        return I.insert(ye).values({
          ...s,
          currentEditor: (c = this.context) == null ? void 0 : c.userId
        }).returning({
          id: ye.id,
          primaryPage: ye.primaryPage
        });
      }
    );
    if (l || !i || i.length === 0)
      throw new w("Error publishing page", "ERROR_PUBLISHING_PAGE", 500, l);
    const { error: u } = await S(
      () => I.update(f).set({ changes: null }).where(T(f.id, r.id))
    );
    if (u)
      throw new w("Error clearing page changes", "ERROR_PUBLISHING_PAGE", 500, u);
    return i[0];
  }
  /**
   * Clone page data from main table
   */
  async clonePage(r) {
    const { data: n, error: a } = await S(
      () => I.query.appPages.findFirst({
        where: Z(T(f.id, r), T(f.app, this.appId))
      })
    );
    if (a || !n)
      throw new w("Page not found", "PAGE_NOT_FOUND", 404, a);
    return n;
  }
  /**
   * Handle execution errors with proper error transformation
   */
  handleExecutionError(r) {
    throw r instanceof w ? r : new w(
      `Failed to publish changes: ${r instanceof Error ? r.message : "Unknown error"}`,
      "PUBLISH_CHANGES_FAILED"
    );
  }
}
class Kw extends G {
  /**
   * Define the validation schema for restore page action
   */
  getValidationSchema() {
    return m.object({
      revisionId: m.string().nonempty(),
      discardCurrent: m.boolean(),
      pageId: m.string().optional()
    });
  }
  /**
   * Execute the restore page action
   */
  async execute(t) {
    if (await this.verifyAccess(), !this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    const { appId: r } = this.context;
    let n, a;
    if (t.revisionId === "current") {
      if (!t.pageId)
        throw new w("pageId is required when restoring current revision", "PAGE_ID_REQUIRED");
      const { data: o, error: s } = await S(
        () => I.query.appPagesOnline.findFirst({
          where: Z(T(ye.id, t.pageId), T(ye.app, r)),
          columns: {
            id: !0,
            blocks: !0
          }
        })
      );
      if (s)
        throw new w("Error fetching live page", "FETCH_ERROR");
      if (!o)
        throw new w("Live page not found", "PAGE_NOT_FOUND");
      n = o.id, a = o.blocks;
    } else {
      const { data: o, error: s } = await S(
        () => I.query.appPagesRevisions.findFirst({
          where: Z(T(Ne.uid, t.revisionId), T(Ne.app, r)),
          columns: {
            id: !0,
            blocks: !0,
            type: !0
          }
        })
      );
      if (s)
        throw new w("Error fetching revision", "FETCH_ERROR");
      if (!o)
        throw new w("Revision not found", "REVISION_NOT_FOUND");
      n = o.id, a = o.blocks;
    }
    if (!t.discardCurrent) {
      const { data: o, error: s } = await S(
        () => I.query.appPages.findFirst({
          where: Z(T(f.id, n), T(f.app, r))
        })
      );
      if (s)
        throw new w("Error fetching current page", "FETCH_ERROR");
      if (!o)
        throw new w("Current page not found", "PAGE_NOT_FOUND");
      const i = o.blocks, l = {
        id: n,
        blocks: i,
        type: "draft",
        createdAt: "now()",
        ...wn(o, ["name", "slug", "pageType", "lang", "app", "currentEditor"])
      };
      await I.insert(Ne).values(l);
    }
    return await I.update(f).set({ blocks: a }).where(T(f.id, n)), { success: !0, pageId: n };
  }
}
class Xw extends G {
  getValidationSchema() {
    return m.object({
      pageType: m.string(),
      query: m.string()
    });
  }
  async execute(t) {
    try {
      const { pageType: r, query: n } = t, a = da(r);
      if (!a)
        return { error: "Page type not found" };
      if (a.search) {
        const o = await a.search(n);
        return o instanceof Error ? { error: o.message } : o;
      }
      return [];
    } catch (r) {
      return this.handleError(r);
    }
  }
}
class Qw extends G {
  /**
   * Define the validation schema for search pages action
   */
  getValidationSchema() {
    return m.object({
      pageType: m.string().min(1),
      query: m.string().optional()
    });
  }
  /**
   * Execute the search pages action
   */
  async execute(t) {
    if (!this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    const { appId: r } = this.context, { pageType: n, query: a = "" } = t, o = this.isUUID(a), s = [T(f.app, r), T(f.pageType, n)];
    let i;
    a ? o ? i = Z(...s, T(f.id, a)) : i = Z(
      ...s,
      Ps(Va(f.slug, `%${a}%`), Va(f.name, `%${a}%`))
    ) : i = Z(...s);
    const { data: l, error: u } = await S(
      () => I.select({
        id: f.id,
        slug: f.slug,
        name: f.name,
        lang: f.lang,
        primaryPage: f.primaryPage
      }).from(f).where(i)
    );
    if (u)
      throw new w("Failed to search pages", "ERROR_SEARCHING_PAGES", 500, u);
    return l || [];
  }
  /**
   * Check if a string is a UUID (length 36)
   */
  isUUID(t) {
    return t.length === 36;
  }
}
class e_ extends G {
  constructor() {
    super(...arguments);
    Ae(this, "appId", "");
  }
  /**
   * Define the validation schema for take offline action
   */
  getValidationSchema() {
    return m.object({
      id: m.string().min(1, "Page ID is required")
    });
  }
  /**
   * Execute the take offline action
   */
  async execute(r) {
    if (await this.verifyAccess(), !this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    this.appId = this.context.appId;
    try {
      return await this.takeOffline(r.id);
    } catch (n) {
      if (n instanceof w)
        throw n;
      const a = n instanceof Error ? n.message : "Failed to take page offline";
      throw new w(a, "TAKE_OFFLINE_ERROR");
    }
  }
  /**
   * Main take offline logic
   */
  async takeOffline(r) {
    const n = await this.getPageType(r), { error: a } = await S(
      () => I.update(f).set({ online: !1 }).where(Z(T(f.id, r), T(f.app, this.appId)))
    );
    if (a)
      throw new w("Error taking page offline", "ERROR_TAKING_PAGE_OFFLINE");
    if (await this.deleteOnlinePage(r), n === "language")
      return { tags: [`page-${await this.getPrimaryPage(r)}`] };
    if (n === "partial")
      return { tags: [...(await this.getPartialBlockUsage(r)).map((l) => `page-${l}`)] };
    const { data: o, error: s } = await S(
      () => I.select({
        id: f.id,
        slug: f.slug,
        lang: f.lang,
        pageType: f.pageType,
        name: f.name,
        online: f.online,
        seo: f.seo
      }).from(f).where(T(f.id, r))
    );
    if (s || !o || o.length === 0)
      throw new w("Error getting page after taking offline", "ERROR_TAKING_PAGE_OFFLINE");
    return { tags: [`page-${r}`], page: o[0] };
  }
  /**
   * Delete page from online pages table
   */
  async deleteOnlinePage(r) {
    const { error: n } = await S(
      () => I.delete(ye).where(T(ye.id, r))
    );
    if (n)
      throw new w(
        "Error deleting page from online pages table",
        "ERROR_DELETING_PAGE_FROM_ONLINE_PAGES_TABLE"
      );
    const { error: a } = await S(
      () => I.delete(ye).where(T(ye.primaryPage, r))
    );
    if (a)
      throw new w(
        "Error deleting page from online pages table",
        "ERROR_DELETING_PAGE_FROM_ONLINE_PAGES_TABLE"
      );
  }
  /**
   * Get the page type
   */
  async getPageType(r) {
    const { data: n, error: a } = await S(
      () => I.select({
        primaryPage: f.primaryPage,
        pageType: f.pageType,
        slug: f.slug
      }).from(f).where(Z(T(f.id, r), T(f.app, this.appId)))
    );
    if (a || !n || n.length === 0)
      throw new w("Page not found", "PAGE_NOT_FOUND");
    const o = n[0];
    return ((i) => !i || i.trim() === "")(o.slug) ? "partial" : o.primaryPage ? "language" : "primary";
  }
  /**
   * Get the primary page ID for a language page
   */
  async getPrimaryPage(r) {
    const { data: n, error: a } = await S(
      () => I.select({
        id: f.id,
        primaryPage: f.primaryPage
      }).from(f).where(Z(T(f.id, r), T(f.app, this.appId)))
    );
    if (a || !n || n.length === 0)
      throw new w("Error getting primary page", "ERROR_GETTING_PRIMARY_PAGE");
    const o = n[0];
    return o.primaryPage ?? o.id;
  }
  /**
   * Get pages that use this partial block
   */
  async getPartialBlockUsage(r) {
    const { data: n, error: a } = await S(
      () => I.select({
        id: f.id,
        partialBlocks: f.partialBlocks
      }).from(f).where(T(f.app, this.appId))
    );
    return a || !n ? [] : n.filter((o) => (o.partialBlocks || "").split("|").includes(r)).map((o) => o.id);
  }
}
class t_ extends G {
  /**
   * Define the validation schema for unmark as template action
   */
  getValidationSchema() {
    return m.object({
      id: m.string().min(1)
    });
  }
  /**
   * Execute the unmark as template action
   */
  async execute(t) {
    if (await this.verifyAccess(), !this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    const { id: r } = t, { error: n } = await S(
      () => I.delete(ne).where(T(ne.pageId, r))
    );
    if (n)
      throw new w("Failed to unmark page as template", "DELETE_FAILED", 500, n);
    return { success: !0 };
  }
}
class r_ {
  constructor(t) {
    Ae(this, "appId");
    Ae(this, "pageTreeBuilder");
    this.appId = t;
  }
  /**
   * Update a node's slug in the tree (mutates the tree in place)
   */
  updateNodeSlugInTree(t, r, n) {
    for (const a of n) {
      if (a.id === t)
        return a.slug = r, !0;
      if (a.children && a.children.length > 0 && this.updateNodeSlugInTree(t, r, a.children))
        return !0;
    }
    return !1;
  }
  /**
   * Validate that the new slug doesn't conflict with existing pages using tree data
   */
  validateSlugAvailabilityInTree(t, r, n, a, o = !1) {
    const s = (i) => {
      for (const l of i) {
        const u = l.dynamic ?? !1;
        if (l.slug === t && l.id !== r && u === n || l.children && l.children.length > 0 && s(l.children))
          return !0;
      }
      return !1;
    };
    if (s(a.primaryTree)) {
      const i = o ? `Slug '${t}' conflicts with a primary page slug. Language page slugs cannot overlap with primary page slugs.` : `Slug '${t}' is already in use. Please choose another slug`;
      throw new w(i, "SLUG_ALREADY_EXISTS");
    }
    if (s(a.languageTree)) {
      const i = o ? `Slug '${t}' is already in use by another language page. Please choose another slug.` : `Slug '${t}' conflicts with a language page slug. Please choose another slug.`;
      throw new w(i, "SLUG_ALREADY_EXISTS");
    }
  }
  /**
   * Check if slug has changed (lightweight check without DB query)
   */
  async isSlugChanged(t, r) {
    if (!r)
      return !1;
    const { data: n, error: a } = await S(
      () => I.select({ slug: f.slug }).from(f).where(Z(T(f.id, t), T(f.app, this.appId))).limit(1)
    );
    if (a || !n || n.length === 0)
      return !1;
    const o = n[0];
    return (o == null ? void 0 : o.slug) !== r;
  }
  /**
   * Check if the parent is being changed (lightweight check without DB query)
   */
  async isParentChanged(t, r) {
    if (r === void 0) return !1;
    const { data: n, error: a } = await S(
      () => I.select({ parent: f.parent }).from(f).where(Z(T(f.id, t), T(f.app, this.appId))).limit(1)
    );
    if (a || !n || n.length === 0)
      return !1;
    const o = n[0];
    return (o == null ? void 0 : o.parent) !== r;
  }
  /**
   * Handle slug change using PageTreeBuilder (ONLY 1 DB query - the tree fetch)
   */
  async handleSlugChangeWithTree(t, r) {
    const n = r.slug;
    this.pageTreeBuilder || (this.pageTreeBuilder = new $r(this.appId));
    const a = await this.pageTreeBuilder.getPagesTree();
    let o = this.pageTreeBuilder.findPageInPrimaryTree(t, a.primaryTree);
    if (!o && (o = this.pageTreeBuilder.findPageInLanguageTree(t, a.languageTree), !o))
      throw new w("Page not found in tree", "PAGE_NOT_FOUND_IN_TREE");
    const s = o.slug, i = o.dynamic || !1;
    this.validateSlugAvailabilityInTree(n, t, i, a);
    let l = [];
    const u = this.pageTreeBuilder.collectNestedChildSlugs(o, s, n);
    return l = [{ id: t, newSlug: n }, ...u.map((c) => ({ id: c.id, newSlug: c.newSlug }))], l;
  }
  /**
   * Handle parent change by recalculating slugs for the page and its children (ONLY 1 DB query - the tree fetch)
   */
  async handleParentChangeWithTree(t, r) {
    const n = r.parent;
    this.pageTreeBuilder || (this.pageTreeBuilder = new $r(this.appId));
    const a = await this.pageTreeBuilder.getPagesTree(), o = this.pageTreeBuilder.findPageInPrimaryTree(t, a.primaryTree);
    if (!o)
      throw this.pageTreeBuilder.findPageInLanguageTree(t, a.languageTree) ? new w("Cannot change parent of language pages directly", "INVALID_OPERATION") : new w("Primary page not found in tree", "PAGE_NOT_FOUND_IN_TREE");
    const s = o.slug, i = r.slug ? r.slug : this.pageTreeBuilder.calculateSlugFromParent(n, s, a.primaryTree);
    this.validateSlugAvailabilityInTree(i, t, o.dynamic || !1, a), this.updateNodeSlugInTree(t, i, a.primaryTree);
    const l = this.pageTreeBuilder.collectNestedChildSlugs(o, s, i), u = [
      { id: t, newSlug: i },
      ...l.map((p) => ({ id: p.id, newSlug: p.newSlug }))
    ];
    for (const p of l)
      this.updateNodeSlugInTree(p.id, p.newSlug, a.primaryTree);
    const c = this.pageTreeBuilder.findLanguagePagesForPrimary(t, a.languageTree);
    let d;
    n && (d = this.pageTreeBuilder.findLanguagePagesForPrimary(n, a.languageTree));
    for (const p of c) {
      const y = d == null ? void 0 : d.filter((P) => P.lang === p.lang)[0], E = (y == null ? void 0 : y.id) || null, v = this.pageTreeBuilder.calculateSlugFromParent(
        E,
        p.slug,
        a.languageTree
      );
      this.validateSlugAvailabilityInTree(
        v,
        p.id,
        p.dynamic || !1,
        a,
        !0
      ), this.updateNodeSlugInTree(p.id, v, a.languageTree);
      const b = this.pageTreeBuilder.collectNestedChildSlugs(
        p,
        p.slug,
        v
      );
      for (const P of b)
        this.updateNodeSlugInTree(P.id, P.newSlug, a.languageTree);
      u.push({ id: p.id, newSlug: v }), u.push(...b.map((P) => ({ id: P.id, newSlug: P.newSlug })));
    }
    return u;
  }
  /**
   * Batch update slugs in both app_pages and app_pages_online tables
   */
  async batchUpdateSlugs(t, r, n, a) {
    const o = t.map(async (i) => {
      const l = {
        slug: i.newSlug,
        lastSaved: pa`now()`
      };
      if (i.id === n) {
        const c = wn(r, [
          "name",
          "seo",
          "blocks",
          "currentEditor",
          "buildTime",
          "parent",
          "pageType",
          "dynamic",
          "dynamicSlugCustom",
          "links",
          "partialBlocks",
          "designTokens"
        ]);
        Object.keys(c).forEach((d) => {
          c[d] === void 0 && delete c[d];
        }), Object.assign(l, {
          ...c,
          changes: a
        });
      }
      const { error: u } = await S(
        () => I.update(f).set(l).where(Z(T(f.id, i.id), T(f.app, this.appId)))
      );
      if (u)
        throw new w(`Failed to update page ${i.id}`, "UPDATE_PAGE_FAILED");
      return i.id;
    });
    await Promise.all(o);
    const s = t.map(async (i) => {
      await S(
        () => I.update(ye).set({ slug: i.newSlug }).where(Z(T(ye.id, i.id), T(ye.app, this.appId)))
      );
    });
    await Promise.all(s);
  }
  /**
   * Set the PageTreeBuilder instance
   */
  setPageTreeBuilder(t) {
    this.pageTreeBuilder = t;
  }
}
class n_ extends G {
  constructor() {
    super(...arguments);
    Ae(this, "appId", "");
    Ae(this, "pageTreeBuilder");
    Ae(this, "slugChangeHandler");
  }
  /**
   * Define the validation schema for update page action
   */
  getValidationSchema() {
    return m.object({
      id: m.string().nonempty(),
      blocks: m.array(m.any()).optional(),
      currentEditor: m.string().optional(),
      slug: m.string().optional(),
      name: m.string().optional(),
      seo: m.record(m.string(), m.any()).optional(),
      buildTime: m.boolean().optional(),
      parent: m.union([m.string(), m.null()]).optional(),
      pageType: m.string().optional(),
      dynamic: m.boolean().optional(),
      dynamicSlugCustom: m.string().optional(),
      needTranslations: m.boolean().optional()
    });
  }
  /**
   * Execute the update page action
   */
  async execute(r) {
    await this.verifyAccess(), this.validateContext(), this.appId = this.context.appId;
    try {
      if (this.isOnlyBlocksUpdate(r))
        return await this.updateBlocks(r.id, r.blocks), await this.buildResponse(r.id, r);
      const n = this.extractAllowedPageFields(r);
      this.slugChangeHandler = new r_(this.appId);
      const a = await this.slugChangeHandler.isSlugChanged(r.id, n.slug);
      return await this.slugChangeHandler.isParentChanged(r.id, n.parent) && n.parent !== void 0 ? (this.pageTreeBuilder = new $r(this.appId), this.slugChangeHandler.setPageTreeBuilder(this.pageTreeBuilder), await this.handleParentChangeWithHandler(r.id, n)) : a && n.slug ? (this.pageTreeBuilder = new $r(this.appId), this.slugChangeHandler.setPageTreeBuilder(this.pageTreeBuilder), await this.handleSlugChangeWithHandler(r.id, n)) : await this.updatePageInDatabase(r.id, n), await this.syncDynamicFieldsToSecondaryPages(r.id, n), await this.buildResponse(r.id, n);
    } catch (n) {
      return this.handleExecutionError(n);
    }
  }
  async updateBlocks(r, n) {
    const a = this.getLinks(n), o = this.getPartialBlocks(n), s = this.getDesignTokens(n);
    await this.updatePageInDatabase(r, { blocks: n, links: a, partialBlocks: o, designTokens: s });
  }
  getPartialBlocks(r) {
    return Za(
      r.filter((n) => n._type === "GlobalBlock" || n._type === "PartialBlock").map((n) => Dt(n, "partialBlockId", Dt(n, "globalBlock", !1)))
    ).join("|");
  }
  getLinks(r) {
    const n = JSON.stringify(r), a = /pageType:[^:]+:([a-f0-9-]{36})/gi, o = [];
    let s;
    for (; (s = a.exec(n)) !== null; )
      s[1] && o.push(s[1]);
    return Za(o).join("|");
  }
  getDesignTokens(r) {
    const n = /dt#[^ "]+/g, a = {};
    for (const o of r) {
      const s = JSON.stringify(o);
      let i;
      for (; (i = n.exec(s)) !== null; )
        if (i[0]) {
          const l = i[0];
          a[l] || (a[l] = {}), a[l][o._id] = o._name || o._type;
        }
    }
    return a;
  }
  /**
   * Validate that context is properly set
   */
  validateContext() {
    if (!this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
  }
  /**
   * Extract only the allowed fields for page updates
   */
  extractAllowedPageFields(r) {
    return wn(r, [
      "slug",
      "name",
      "seo",
      "blocks",
      "currentEditor",
      "buildTime",
      "parent",
      "pageType",
      "dynamic",
      "dynamicSlugCustom"
    ]);
  }
  /**
   * Handle slug change using SlugChangeHandler
   */
  async handleSlugChangeWithHandler(r, n) {
    const a = await this.slugChangeHandler.handleSlugChangeWithTree(r, n), o = this.determineChangeTypes(n);
    await this.slugChangeHandler.batchUpdateSlugs(a, n, r, o);
  }
  /**
   * Handle parent change using SlugChangeHandler
   */
  async handleParentChangeWithHandler(r, n) {
    const a = await this.slugChangeHandler.handleParentChangeWithTree(r, n), o = this.determineChangeTypes(n);
    await this.slugChangeHandler.batchUpdateSlugs(a, n, r, o);
  }
  /**
   * Determine what type of changes are being made
   */
  determineChangeTypes(r) {
    const n = [], a = kn(r);
    return a.includes("blocks") && n.push("Page"), a.includes("seo") && n.push("SEO"), n.length > 0 ? n : ["Updated"];
  }
  /**
   * Update the page in the database (simple update without slug change)
   */
  async updatePageInDatabase(r, n) {
    const a = this.determineChangeTypes(n), { error: o } = await S(
      () => I.update(f).set({
        ...n,
        changes: a,
        lastSaved: pa`now()`
      }).where(Z(T(f.id, r), T(f.app, this.appId)))
    );
    if (a.includes("Page")) {
      const { error: s } = await S(
        () => I.update(f).set({ changes: a }).where(Z(T(f.primaryPage, r), T(f.app, this.appId)))
      );
      if (s)
        throw new w("Error updating page", "ERROR_UPDATING_PAGE");
    }
    if (o)
      throw new w("Error updating page", "ERROR_UPDATING_PAGE");
  }
  /**
   * Check if only blocks are being updated
   */
  isOnlyBlocksUpdate(r) {
    return kn(r).includes("blocks");
  }
  /**
   * Fetch the updated page data from database
   */
  async fetchUpdatedPageData(r) {
    const { data: n, error: a } = await S(
      () => I.select({
        id: f.id,
        slug: f.slug,
        lang: f.lang,
        pageType: f.pageType,
        name: f.name,
        online: f.online,
        parent: f.parent,
        seo: f.seo
      }).from(f).where(T(f.id, r)).limit(1)
    );
    if (a || !n || n.length === 0)
      throw new w("Error getting updated page", "ERROR_GETTING_PAGE");
    return n[0];
  }
  /**
   * Build the appropriate response based on update type
   */
  async buildResponse(r, n) {
    return this.isOnlyBlocksUpdate(n) ? { success: !0 } : { page: await this.fetchUpdatedPageData(r) };
  }
  /**
   * Sync dynamic and dynamicSlugCustom fields to secondary pages based on primary page.
   */
  async syncDynamicFieldsToSecondaryPages(r, n) {
    const a = kn(n);
    if (!(a.includes("dynamic") || a.includes("dynamicSlugCustom"))) return;
    const s = {};
    a.includes("dynamic") && (s.dynamic = n.dynamic), a.includes("dynamicSlugCustom") && (s.dynamicSlugCustom = n.dynamicSlugCustom);
    const { error: i } = await S(
      () => I.update(f).set(s).where(Z(T(f.primaryPage, r), T(f.app, this.appId)))
    );
    i && console.error("Failed to sync dynamic fields to secondary pages:", i);
  }
  /**
   * Handle execution errors with proper error transformation
   */
  handleExecutionError(r) {
    throw console.log("Error updating page:", r), r instanceof w ? r : new w(
      `Failed to update page: ${r instanceof Error ? r.message : "Unknown error"}`,
      "UPDATE_PAGE_FAILED"
    );
  }
}
class a_ extends G {
  /**
   * Define the validation schema for update page metadata action
   */
  getValidationSchema() {
    return m.object({
      id: m.string().nonempty(),
      metadata: m.record(m.string(), m.any())
    });
  }
  /**
   * Execute the update page metadata action
   */
  async execute(t) {
    if (await this.verifyAccess(), !this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    const { appId: r } = this.context, { data: n, error: a } = await S(
      () => I.query.appPages.findFirst({
        where: Z(T(f.id, t.id), T(f.app, r)),
        columns: {
          id: !0
        }
      })
    );
    if (a)
      throw new w(`Failed to fetch page: ${a.message}`, "FETCH_FAILED");
    if (!n)
      throw new w("Page not found", "PAGE_NOT_FOUND");
    const { error: o } = await S(
      () => I.update(f).set({ metadata: t.metadata }).where(Z(T(f.id, t.id), T(f.app, r)))
    );
    if (o)
      throw console.error(o), new w("Failed to update page metadata", "UPDATE_FAILED");
    return { success: !0 };
  }
}
class o_ extends G {
  getValidationSchema() {
    return m.object({
      settings: m.any()
    });
  }
  async execute(t) {
    if (await this.verifyAccess(), !this.context)
      throw ue("CONTEXT_NOT_SET", new Error("CONTEXT_NOT_SET"));
    const { appId: r } = this.context, n = wn(t.settings, ["theme", "designTokens"]), { data: a, error: o } = await S(
      () => I.select({ changes: me.changes }).from(me).where(T(me.id, r))
    );
    if (o)
      throw ue("ERROR_UPDATE_WEBSITE_FIELDS", o);
    const s = a[0].changes ?? [], i = { theme: "THEME", designTokens: "DESIGN_TOKENS" }, l = Object.keys(n).map((p) => i[p]).filter(Boolean), u = [.../* @__PURE__ */ new Set([...s, ...l])], c = {
      ...n,
      changes: u
    }, { error: d } = await S(() => I.update(me).set(c).where(T(me.id, r)));
    if (d)
      throw ue("ERROR_UPDATE_WEBSITE_FIELDS", d);
    return { success: !0 };
  }
}
class s_ extends G {
  /**
   * Define the validation schema for upsert library item action
   */
  getValidationSchema() {
    return m.object({
      name: m.string().min(1),
      group: m.string().min(1),
      blocks: m.array(m.any()),
      description: m.string().optional(),
      previewImage: m.string().optional(),
      id: m.string().optional(),
      previewImageUrl: m.string().optional()
    });
  }
  /**
   * Execute the upsert library item action
   */
  async execute(t) {
    var E;
    if (await this.verifyAccess(), !this.context)
      throw new w("Context not set", "CONTEXT_NOT_SET");
    const { appId: r, userId: n } = this.context, { name: a, group: o, blocks: s, description: i, previewImage: l, previewImageUrl: u, id: c } = t, { data: d, error: p } = await S(
      () => I.query.libraries.findFirst({
        where: T(Q.app, r),
        columns: {
          id: !0
        }
      })
    );
    if (p)
      throw new w("Failed to fetch site library", "GET_SITE_LIBRARY_FAILED", 500, p);
    if (!d)
      throw new w("Library not found for this app", "GET_SITE_LIBRARY_FAILED");
    let y = u;
    if (l) {
      const v = Ma("UPLOAD_TO_STORAGE");
      v == null || v.setContext(this.context);
      const b = `library-item-${Date.now()}.webp`, P = `${r}/library-items`, k = await (v == null ? void 0 : v.execute({
        file: l,
        fileName: b,
        contentType: "image/webp",
        folder: P
      }));
      if (k != null && k.error)
        throw new w("Failed to upload preview image", "UPLOAD_PREVIEW_FAILED", 500, k.error);
      y = ((E = k == null ? void 0 : k.data) == null ? void 0 : E.url) || u;
    }
    if (c) {
      const v = {
        name: a,
        blocks: s,
        library: d.id,
        description: i ?? null,
        group: o,
        user: n ?? null
      };
      y && (v.preview = y);
      const { data: b, error: P } = await S(
        () => I.update(ae).set(v).where(T(ae.id, c)).returning()
      );
      if (P || !b || b.length === 0)
        throw new w("Failed to update library item", "UPDATE_LIBRARY_ITEM_FAILED", 500, P);
      return b[0];
    } else {
      const v = ic(), b = [...s];
      Wn(b, "0._libBlockId", v);
      const P = {
        id: v,
        name: a,
        blocks: b,
        library: d.id,
        description: i ?? null,
        group: o,
        user: n ?? null,
        preview: y ?? null
      }, { data: k, error: g } = await S(
        () => I.insert(ae).values(P).returning()
      );
      if (g || !k || k.length === 0)
        throw new w("Failed to create library item", "CREATE_LIBRARY_ITEM_FAILED", 500, g);
      return k[0];
    }
  }
}
const kt = class kt {
  constructor() {
    Ae(this, "actions", {});
    qu("page", {
      name: "Static Page",
      icon: '<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 8V20H19V8H5ZM5 6H19V4H5V6ZM20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM7 10H11V14H7V10ZM7 16H17V18H7V16ZM13 11H17V13H13V11Z"></path></svg>'
    }), Hu("global", {
      name: "Global Block",
      helpText: "A global block can be reused in multiple pages.",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hash-icon lucide-hash"><line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/></svg>'
    }), this.register("ASK_AI", new Ew()), this.register("CHECK_USER_ACCESS", new Iw()), this.register("CREATE_PAGE", new Sw()), this.register("DELETE_PAGE", new Nw()), this.register("DUPLICATE_PAGE", new Rw()), this.register("RESTORE_PAGE_REVISION", new Kw()), this.register("UPDATE_PAGE_METADATA", new a_()), this.register("GENERATE_SEO_FIELD", new $w()), this.register("GENERATE_HTML_FROM_PROMPT", new kw()), this.register("GET_REVISION_PAGE", new Vw()), this.register("UPDATE_PAGE", new n_()), this.register("GET_COMPARE_DATA", new zw()), this.register("GET_SITE_WIDE_USAGE", new qw()), this.register("GET_WEBSITE_DRAFT_SETTINGS", new $u()), this.register("GET_WEBSITE_PAGES", new Du()), this.register("GET_LIBRARIES", new Pu()), this.register("GET_DRAFT_PAGE", new xu()), this.register("GET_LANGUAGE_PAGES", new Cu()), this.register("UPSERT_LIBRARY_ITEM", new s_()), this.register("MARK_AS_TEMPLATE", new Yw()), this.register("GET_LIBRARY_ITEM", new jw()), this.register("GET_LIBRARY_ITEMS", new Zw()), this.register("DELETE_LIBRARY_ITEM", new Aw()), this.register("UNMARK_AS_TEMPLATE", new t_()), this.register("GET_TEMPLATES_BY_TYPE", new Hw()), this.register("SEARCH_PAGES", new Qw()), this.register("GET_PAGE_REVISIONS", new Bw()), this.register("PUBLISH_CHANGES", new Ww()), this.register("UPDATE_WEBSITE_FIELDS", new o_()), this.register("TAKE_OFFLINE", new e_()), this.register("GET_CHANGES", new Fw()), this.register("GET_LIBRARY_GROUPS", new Uw()), this.register("DELETE_PAGE_REVISION", new Ow()), this.register("GET_COLLECTIONS", new Ru()), this.register("GET_BLOCK_ASYNC_PROPS", new Mw()), this.register("GET_BUILDER_PAGE_DATA", new Ou()), this.register("GET_PAGE_TYPES", new ku()), this.register("SEARCH_PAGE_TYPE_ITEMS", new Xw()), this.register("GET_DYNAMIC_PAGES", new Lw()), this.register("GET_WEBSITE_DATA", new Jw()), this.register("GET_PAGE_ALL_DATA", new Gw());
  }
  /**
   * Get the singleton instance of the registry
   */
  static getInstance() {
    return kt.instance || (kt.instance = new kt()), kt.instance;
  }
  /**
   * Register a new action handler
   */
  register(t, r) {
    this.actions[t] = r;
  }
  registerActions(t) {
    for (const [r, n] of Object.entries(t))
      this.register(r, n);
  }
  /**
   * Get an action handler by name
   */
  getAction(t) {
    return Dt(this.actions, t);
  }
  /**
   * Get all registered actions
   */
  getAllActions() {
    return this.actions;
  }
};
Ae(kt, "instance");
let vn = kt;
const Ma = (e) => vn.getInstance().getAction(e), i_ = vn.getInstance(), l_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: i_,
  getChaiAction: Ma
}, Symbol.toStringTag, { value: "Module" }));
export {
  w as A,
  G as C,
  Ww as P,
  i_ as a,
  aw as b,
  hw as c,
  I as d,
  Ma as g,
  S as s
};
