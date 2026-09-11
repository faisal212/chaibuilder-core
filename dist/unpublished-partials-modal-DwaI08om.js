import { jsx as a, jsxs as r, Fragment as m } from "react/jsx-runtime";
import { useTranslation as i } from "react-i18next";
import { D as p, e as b, f as x, g as o, o as v, B as c, q as N } from "./index-fXNzx43m.js";
import { B as d } from "./register-chai-top-bar-DWmJ2efT.js";
const P = ({
  isOpen: h,
  onClose: g,
  onContinue: u,
  onViewChanges: n,
  isPending: t = !1,
  partialBlocksInfo: l = []
}) => {
  const { t: s } = i();
  return /* @__PURE__ */ a(p, { open: h, onOpenChange: g, children: h && /* @__PURE__ */ r(b, { className: "sm:max-w-[425px]", children: [
    /* @__PURE__ */ r(x, { children: [
      /* @__PURE__ */ a(o, { children: s("You have some unpublished changes") }),
      /* @__PURE__ */ a(v, { children: s("The following partials are either unpublished or have unpublished changes.") })
    ] }),
    (l == null ? void 0 : l.length) > 0 && /* @__PURE__ */ a("div", { className: "max-h-32 overflow-y-auto rounded-md border bg-muted/50 p-2", children: /* @__PURE__ */ a("ul", { className: "space-y-1 text-sm", children: l.map((e) => /* @__PURE__ */ r("li", { className: "flex items-center justify-between text-muted-foreground", children: [
      /* @__PURE__ */ r("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ a(
          "p",
          {
            className: `h-2 w-2 rounded-full ${(e == null ? void 0 : e.status) === "unpublished_changes" ? "bg-green-400" : "bg-gray-300"}`
          }
        ),
        " ",
        e == null ? void 0 : e.name
      ] }),
      /* @__PURE__ */ r("span", { className: "flex items-center gap-1", children: [
        (e == null ? void 0 : e.status) === "unpublished_changes" && /* @__PURE__ */ r(m, { children: [
          /* @__PURE__ */ a(c, { className: "border-green-200 bg-green-100 px-1.5 py-0 text-[10px] text-green-600 hover:bg-green-100", children: s("Published") }),
          n && /* @__PURE__ */ a(
            d,
            {
              variant: "ghost",
              title: s("View Changes"),
              className: "p-0 text-[10px] text-blue-600 hover:bg-transparent hover:text-blue-600 hover:underline",
              onClick: () => n(e.id, e.name),
              children: s("View Changes")
            }
          )
        ] }),
        (e == null ? void 0 : e.status) === "unpublished" && /* @__PURE__ */ a(c, { className: "border-orange-200 bg-orange-100 px-1.5 py-0 text-[10px] text-orange-600 hover:bg-orange-100", children: s("Unpublished") })
      ] })
    ] }, e == null ? void 0 : e.id)) }) }),
    /* @__PURE__ */ r(N, { className: "flex gap-2", children: [
      /* @__PURE__ */ a(d, { variant: "outline", onClick: g, disabled: t, children: s("Cancel") }),
      /* @__PURE__ */ a(d, { onClick: u, disabled: t, children: s(t ? "Publishing..." : "Publish Partials & Page") })
    ] })
  ] }) });
};
export {
  P as default
};
