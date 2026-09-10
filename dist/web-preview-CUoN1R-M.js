import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { useState as d, createElement as m } from "react";
import { useAtom as h } from "jotai";
import { map as p } from "lodash-es";
import { Smartphone as w, Tablet as f, Laptop as u, LaptopMinimal as x } from "lucide-react";
import { B as s } from "./register-chai-top-bar-DWmJ2efT.js";
import { p as v, T as _ } from "./index-BgB6fJ56.js";
const b = [
  {
    title: "mobile_xs_title",
    content: "mobile_xs_content",
    icon: /* @__PURE__ */ e(w, { className: "h-4 w-4" }),
    width: 400
  },
  {
    title: "tablet_md_title",
    content: "tablet_md_content",
    icon: /* @__PURE__ */ e(f, { className: "h-4 w-4" }),
    width: 800
  },
  {
    title: "desktop_xl_title",
    content: "desktop_xl_content",
    icon: /* @__PURE__ */ e(u, { className: "h-4 w-4" }),
    width: 1200
  },
  {
    title: "large_desktop_2xl_title",
    content: "large_desktop_2xl_content",
    icon: /* @__PURE__ */ e(x, { className: "h-4 w-4" }),
    width: 1600
  }
], g = ({ currentWidth: t, width: r, icon: l, setIframeWidth: o }) => /* @__PURE__ */ e(
  s,
  {
    className: "px-3 py-3",
    onClick: () => o(r),
    variant: r === t ? "default" : "ghost",
    children: l
  }
), j = () => {
  const [t, r] = d(1200), l = (i) => r(i), [o, a] = h(v);
  if (!o) return null;
  const c = () => {
    a("");
  };
  return /* @__PURE__ */ n("div", { className: "absolute inset-0 z-[999999] flex h-screen w-screen flex-col overflow-hidden bg-gray-100", children: [
    /* @__PURE__ */ n("div", { className: "flex h-[50px] items-center justify-center border-b border-gray-200 px-4 shadow-sm", children: [
      /* @__PURE__ */ e("div", { className: "flex items-center justify-center rounded-md border border-gray-300", children: p(b, (i) => /* @__PURE__ */ m(g, { ...i, setIframeWidth: l, key: i.title, currentWidth: t })) }),
      " ",
      /* @__PURE__ */ e(_, { content: "Exit Preview", delayDuration: 0, children: /* @__PURE__ */ e(s, { variant: "destructive", size: "sm", onClick: c, children: /* @__PURE__ */ e("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ e(
        "path",
        {
          d: "M2 3C2 2.44772 2.44772 2 3 2H12C12.5523 2 13 2.44772 13 3V12C13 12.5523 12.5523 13 12 13H3C2.44772 13 2 12.5523 2 12V3ZM12 3H3V12H12V3Z",
          fill: "currentColor",
          fillRule: "evenodd",
          "clip-rule": "evenodd"
        }
      ) }) }) })
    ] }),
    /* @__PURE__ */ e(
      "iframe",
      {
        style: { width: `${t}px`, transition: "width 0.3s ease-in-out" },
        className: "no-scrollbar mx-auto h-full overflow-y-auto border bg-white",
        src: o
      }
    )
  ] });
};
export {
  j as default
};
