import { jsx as t, jsxs as a } from "react/jsx-runtime";
import { ArrowRight as r } from "lucide-react";
import { useTranslation as i } from "react-i18next";
import { B as c } from "./register-chai-top-bar-DWmJ2efT.js";
import { L as m } from "./index-DbFHENK5.js";
const u = ({
  selectedLang: l,
  isLoading: o,
  selectedBlock: s,
  onClick: n
}) => {
  const { t: e } = i();
  return /* @__PURE__ */ t("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ t("div", { className: `flex flex-col gap-2 ${o ? "pointer-events-none opacity-50" : ""}`, children: s ? /* @__PURE__ */ t(c, { variant: "outline", className: "h-auto", onClick: () => n("TRANSLATE"), children: /* @__PURE__ */ a("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ t("p", { className: "text-left text-xs font-thin", children: e("Quick Action:") }),
    /* @__PURE__ */ a("span", { className: "flex items-center gap-x-2 text-sm font-medium", children: [
      e("Translate Content"),
      " ",
      e("to"),
      " ",
      m[l],
      " ",
      /* @__PURE__ */ t(r, { className: "h-4 w-4" })
    ] })
  ] }) }) : null }) });
};
export {
  u as default
};
