import { jsx as e, jsxs as r } from "react/jsx-runtime";
import { Suspense as t, lazy as c } from "react";
import { useTranslation as m } from "react-i18next";
import { D as p, e as h, f, g as D, o as u } from "./index-z9dYL-7R.js";
const x = c(() => import("./page-creator-FczG19sZ.js")), C = ({
  addEditPage: o,
  setAddEditPage: s,
  closePanel: l
}) => {
  const { t: n } = m(), a = !!(o != null && o.id), i = !!o;
  return /* @__PURE__ */ e(p, { open: i, onOpenChange: () => s(void 0), children: i && /* @__PURE__ */ r(h, { className: "sm:max-w-[425px]", children: [
    /* @__PURE__ */ r(f, { children: [
      /* @__PURE__ */ r(D, { children: [
        n(a ? "Edit" : "Add New"),
        " "
      ] }),
      /* @__PURE__ */ e(u, { children: n(a ? "Update your page name" : "Enter details to create a new page") })
    ] }),
    /* @__PURE__ */ e(t, { fallback: /* @__PURE__ */ e("div", { className: "min-h-40" }), children: /* @__PURE__ */ e(
      x,
      {
        closePanel: l,
        addEditPage: o,
        close: () => s(void 0)
      }
    ) })
  ] }) });
};
export {
  C as default
};
