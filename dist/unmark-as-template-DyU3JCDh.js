import { jsx as a, jsxs as n } from "react/jsx-runtime";
import { useState as p } from "react";
import { useTranslation as u } from "react-i18next";
import { B as r } from "./register-chai-top-bar-DWmJ2efT.js";
import { D as d, e as f, f as g, g as h, o as k, q as D } from "./index-BmV_dra3.js";
import { o as x } from "./index-D-G5gvhP.js";
const j = ({ page: i, onClose: t }) => {
  const { t: e } = u(), [s, o] = p(!1), l = x(), m = () => {
    o(!0), l.mutate(i, {
      onSuccess: () => {
        o(!1), t();
      },
      onError: () => {
        o(!1);
      }
    });
  };
  return /* @__PURE__ */ a(d, { open: !0, onOpenChange: t, children: /* @__PURE__ */ n(f, { children: [
    /* @__PURE__ */ n(g, { children: [
      /* @__PURE__ */ a(h, { children: e("Unmark as template") }),
      /* @__PURE__ */ a(k, { className: "space-y-1 py-4 text-xs text-slate-500", children: e("Are you sure you want to unmark this page as a template?") })
    ] }),
    /* @__PURE__ */ n(D, { className: s ? "pointer-events-none opacity-75" : "", children: [
      /* @__PURE__ */ a(
        r,
        {
          variant: "outline",
          onClick: (c) => {
            c.stopPropagation(), t();
          },
          children: e("Cancel")
        }
      ),
      /* @__PURE__ */ a(r, { variant: "default", disabled: s, onClick: m, children: e("Unmark as template") })
    ] })
  ] }) });
};
export {
  j as default
};
