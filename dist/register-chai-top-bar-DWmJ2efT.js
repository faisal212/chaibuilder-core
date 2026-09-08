import { has as E, set as N, values as w, filter as V } from "lodash-es";
import * as o from "react";
import { useMemo as i, useState as u } from "react";
import { useAtom as R } from "jotai";
import { atomWithStorage as U } from "jotai/utils";
import { jsx as a, jsxs as g } from "react/jsx-runtime";
import { ExclamationTriangleIcon as j } from "@radix-ui/react-icons";
import { useTranslation as H } from "react-i18next";
import { cva as S } from "class-variance-authority";
import { clsx as $ } from "clsx";
import { twMerge as z } from "tailwind-merge";
import { Slot as G } from "@radix-ui/react-slot";
function l(...e) {
  return z($(e));
}
const _ = o.forwardRef(
  ({ className: e, type: t, ...r }, s) => /* @__PURE__ */ a(
    "input",
    {
      type: t,
      className: l(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ref: s,
      ...r
    }
  )
);
_.displayName = "Input";
const W = S(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), C = o.forwardRef(
  ({ className: e, variant: t, size: r, asChild: s = !1, ...n }, h) => /* @__PURE__ */ a(
    s ? G : "button",
    {
      className: l(W({ variant: t, size: r, className: e })),
      ref: h,
      ...n
    }
  )
);
C.displayName = "Button";
const p = {}, de = (e, t) => {
  p[e] = {
    id: e,
    component: t,
    type: "widget"
  };
}, ue = (e, t) => {
  p[e] = {
    id: e,
    component: t,
    type: "field"
  };
}, ge = (e, t) => {
  p[e] = {
    id: e,
    component: t,
    type: "template"
  };
}, fe = (e) => Object.values(p).filter((t) => t.type === e).reduce(
  (t, r) => (t[r.id] = r.component, t),
  {}
), y = {}, me = (e, t) => {
  E(y, e) && console.warn(`Add block tab with id ${e} already registered`), N(y, e, { id: e, ...t });
}, pe = () => i(() => w(y), []), f = {}, q = (e, t) => {
  if (f[e])
    throw new Error(`Flag ${e} already exists`);
  f[e] = { key: e, value: !1, ...t };
}, he = (e) => {
  Object.entries(e).forEach(([t, r]) => {
    if (f[t])
      throw new Error(`Flag ${t} already exists`);
    q(t, r);
  });
}, ve = () => f, B = U("chai-feature-flags", []), J = (e) => {
  const [t] = R(B);
  return t.includes(e);
}, be = (e) => {
  const [t, r] = R(B);
  return () => {
    t.includes(e) ? r(t.filter((n) => n !== e)) : r([...t, e]);
  };
}, xe = ({ flagKey: e, children: t }) => J(e) ? t : null;
let A = {};
const Ce = (e, t) => {
  A[e] = { ...t, id: e };
}, ye = (e) => A[e], we = () => w(A), K = S(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), L = o.forwardRef(({ className: e, variant: t, ...r }, s) => /* @__PURE__ */ a("div", { ref: s, role: "alert", className: l(K({ variant: t }), e), ...r }));
L.displayName = "Alert";
const X = o.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ a("h5", { ref: r, className: l("mb-1 font-medium leading-none tracking-tight", e), ...t })
);
X.displayName = "AlertTitle";
const I = o.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ a("div", { ref: r, className: l("text-sm [&_p]:leading-relaxed", e), ...t })
);
I.displayName = "AlertDescription";
const Y = ({ close: e, onSelect: t, mode: r = "image" }) => {
  const [s, n] = u(""), [h, v] = u(!1), [P, b] = u(!1), [F, c] = u(null), D = async (x) => {
    if (!x.trim()) {
      b(!1), c("Please enter a URL");
      return;
    }
    try {
      v(!0), c(null), b(!0), c(null);
    } catch {
      b(!1), c("Error validating URL");
    } finally {
      v(!1);
    }
  }, { t: d } = H();
  return /* @__PURE__ */ g("div", { className: "flex w-96 flex-col gap-4 p-4", children: [
    /* @__PURE__ */ a("h2", { className: "text-xl font-semibold", children: d(`${r.charAt(0).toUpperCase() + r.slice(1)} Manager`) }),
    F && /* @__PURE__ */ g(L, { variant: "destructive", children: [
      /* @__PURE__ */ a(j, { className: "h-4 w-4" }),
      /* @__PURE__ */ a(I, { children: F })
    ] }),
    /* @__PURE__ */ g("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ a(
        _,
        {
          placeholder: d(`Enter ${r} URL`),
          value: s,
          onChange: (x) => n(x.target.value),
          onKeyUp: () => D(s)
        }
      ),
      /* @__PURE__ */ g("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ a(C, { variant: "outline", onClick: e, children: d("Cancel") }),
        /* @__PURE__ */ a(
          C,
          {
            onClick: () => t({ id: "dam-id", url: s, width: 600, height: 400, description: "This is image description" }),
            disabled: !P || h,
            children: d("Insert")
          }
        )
      ] })
    ] })
  ] });
}, M = {
  component: Y
}, Ae = (e) => {
  M.component = e;
}, Te = () => i(() => M.component, []);
let k = async (e) => e;
const Fe = (e) => {
  k = e;
}, Ee = async (e) => await k(e);
let T = null;
const Ne = (e) => {
  T = e;
}, Re = () => i(() => T, []), Se = () => {
  T = null;
}, m = {}, _e = (e, t) => {
  E(m, e) && console.warn(`Panel ${e} already registered. Overriding...`), N(m, e, { id: e, ...t });
}, Be = (e) => i(
  () => V(w(m), (t) => t.position === e),
  [e, m]
), Q = () => /* @__PURE__ */ a("div", {}), O = {
  component: Q
}, Le = (e) => {
  O.component = e;
}, Ie = () => i(() => O.component, []);
export {
  y as A,
  C as B,
  m as C,
  L as D,
  I as E,
  l as F,
  W as G,
  xe as I,
  p as R,
  ue as a,
  ge as b,
  me as c,
  pe as d,
  q as e,
  he as f,
  ve as g,
  J as h,
  be as i,
  Ce as j,
  ye as k,
  we as l,
  Ae as m,
  Te as n,
  Ee as o,
  Fe as p,
  Ne as q,
  de as r,
  Re as s,
  Se as t,
  fe as u,
  _e as v,
  Be as w,
  Le as x,
  Ie as y,
  _ as z
};
