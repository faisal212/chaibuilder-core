import { jsx as a } from "react/jsx-runtime";
import { Suspense as g, lazy as n } from "react";
import { u as s, a as t } from "./index-zhi1qv_b.js";
const o = n(() => import("./no-language-page-content-D9ZBOm6K.js")), l = () => {
  const [e] = s(), r = e.get("lang");
  return t(r) ? null : /* @__PURE__ */ a(g, { children: /* @__PURE__ */ a(o, {}) });
};
export {
  l as default
};
