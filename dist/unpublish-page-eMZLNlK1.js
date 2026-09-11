import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { useTranslation as c } from "react-i18next";
import { B as l } from "./register-chai-top-bar-DWmJ2efT.js";
import { D as u, e as h, f as d, g as m, o as b, q as f } from "./index-DRB61_kK.js";
import { q as D } from "./index-zhi1qv_b.js";
const v = ({ page: n, onClose: r }) => {
  const { t: i } = c(), { mutate: e, isPending: t } = D(), a = async () => {
    e(n, { onSuccess: r });
  };
  return /* @__PURE__ */ o(u, { open: !!n, onOpenChange: r, children: /* @__PURE__ */ s(h, { children: [
    /* @__PURE__ */ s(d, { children: [
      /* @__PURE__ */ o(m, { children: i("Confirm action") }),
      /* @__PURE__ */ s(b, { children: [
        i("Are you sure you want to unpublish"),
        " ",
        /* @__PURE__ */ o("b", { children: (n == null ? void 0 : n.name) ?? (n == null ? void 0 : n.slug) }),
        "?"
      ] })
    ] }),
    /* @__PURE__ */ s(f, { children: [
      /* @__PURE__ */ o(l, { variant: "outline", onClick: r, children: i("Cancel") }),
      /* @__PURE__ */ o(l, { variant: "destructive", disabled: t, onClick: a, children: i(t ? "Updating..." : "Unpublish") })
    ] })
  ] }) });
};
export {
  v as default
};
