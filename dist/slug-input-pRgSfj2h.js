import { jsxs as i, jsx as o } from "react/jsx-runtime";
import { useState as x, useEffect as v } from "react";
import { z as C } from "./register-chai-top-bar-DWmJ2efT.js";
import { L as d } from "./index-BaxiqbJy.js";
const y = (e) => {
  if (!e) return { base: e, extension: null };
  const n = e.lastIndexOf(".");
  if (n <= 0) return { base: e, extension: null };
  const t = e.substring(n);
  return { base: e.substring(0, n), extension: t };
}, g = (e) => {
  if (!e) return e;
  const { base: n } = y(e);
  return n;
};
function $(e, n) {
  const t = (e || "").split("/").filter(Boolean);
  let s = "", r = !0;
  if (n.slug === "/") {
    const a = t.pop() || "";
    if (d[a])
      r = !0;
    else {
      s = a;
      const l = t.pop() || "";
      r = !!d[l];
    }
  } else if (n.parent)
    t.length && (s = t.pop() || "");
  else if (t.length) {
    s = t.pop() || "";
    const a = t.pop() || "";
    r = !!d[a];
  }
  return { initSlug: s, prefix: r };
}
const E = (e) => e && g(e), w = (e, n) => {
  const t = g(e || "");
  return !t || t === "/" ? `/${n}` : `${t}/${n}`;
};
function D({
  value: e,
  onChange: n,
  placeholder: t,
  parentSlug: s,
  onValidationChange: r,
  disabled: a = !1,
  fullSlug: l
}) {
  const [h, u] = x(e), [c, f] = x(null);
  v(() => {
    u(e);
  }, [e]);
  const N = (b) => {
    const p = b.target.value.replace(/\//g, "").replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-_.]/g, "-").replace(/-+/g, "-").replace(/^-+/, "").toLowerCase(), m = (p.match(/\./g) || []).length, S = m <= 1;
    m > 1 ? f("Invalid slug. Only one dot (.) is allowed in the slug") : f(null), r && r(S), u(p), n(p);
  };
  return /* @__PURE__ */ i("div", { children: [
    s && /* @__PURE__ */ o("div", { className: "mb-1 flex items-center", children: /* @__PURE__ */ i("span", { className: "text-xs text-gray-500", children: [
      "Parent: ",
      /* @__PURE__ */ o("span", { className: "font-mono text-gray-900", children: E(s) })
    ] }) }),
    /* @__PURE__ */ i("div", { className: "relative", children: [
      /* @__PURE__ */ o(
        C,
        {
          disabled: a,
          value: h,
          onChange: N,
          placeholder: t,
          className: c ? "border-red-500" : ""
        }
      ),
      c && /* @__PURE__ */ o("div", { className: "mt-1 text-xs text-red-500", children: c })
    ] }),
    l && l !== "undefined" && /* @__PURE__ */ o("div", { className: "mt-1 flex items-center", children: /* @__PURE__ */ i("span", { className: "text-xs text-gray-500", children: [
      "Complete Slug: ",
      /* @__PURE__ */ o("span", { className: "font-mono text-gray-900", children: l })
    ] }) })
  ] });
}
export {
  D as S,
  w as c,
  $ as p,
  g as r
};
