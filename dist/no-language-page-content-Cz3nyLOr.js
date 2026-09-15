import { jsx as e, jsxs as s } from "react/jsx-runtime";
import { get as h } from "lodash-es";
import { LockIcon as u } from "lucide-react";
import { useTranslation as w } from "react-i18next";
import { B as p } from "./register-chai-top-bar-DWmJ2efT.js";
import { d as f, I as P, J as C, K as S, M as L, O as x } from "./index-BK9p0KJB.js";
import { u as N, a as v, L as B, ah as E } from "./index-DPHXbkqh.js";
const A = () => {
  const { t: a } = w(), [c, l] = N(), r = c.get("lang"), i = v(r), { setSelectedLang: g } = f(), m = () => {
    const n = new URLSearchParams(window.location.search);
    n.delete("lang");
    const o = n.toString(), d = `${window.location.pathname}${o ? `?${o}` : ""}`;
    window.history.pushState({}, "", d), l(n), g(""), window.dispatchEvent(new PopStateEvent("popstate"));
  };
  if (i) return null;
  const t = h(B, r);
  return /* @__PURE__ */ e(E, { children: /* @__PURE__ */ s(P, { className: "mx-auto w-full max-w-md", children: [
    /* @__PURE__ */ e(C, { className: "space-y-1", children: /* @__PURE__ */ s(S, { className: "flex items-center gap-2 text-2xl", children: [
      /* @__PURE__ */ e(u, { className: "h-6 w-6 text-yellow-500" }),
      a("Page missing for"),
      ' "',
      t,
      '" ',
      a("language"),
      "."
    ] }) }),
    /* @__PURE__ */ e(L, { className: "grid gap-4", children: /* @__PURE__ */ s("div", { children: [
      a("Page is not available in the"),
      ' "',
      t,
      '" ',
      a("language. Either create the page in the"),
      ' "',
      t,
      '"',
      a("language or switch to the base language.")
    ] }) }),
    /* @__PURE__ */ e(x, { children: /* @__PURE__ */ e(p, { onClick: m, className: "w-full", variant: "destructive", children: a("Switch to default language") }) })
  ] }) });
};
export {
  A as default
};
