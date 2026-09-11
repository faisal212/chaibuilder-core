import { jsx as r, jsxs as u } from "react/jsx-runtime";
import { get as i } from "lodash-es";
import { ChevronDown as h } from "lucide-react";
import { useRef as p, useEffect as m } from "react";
import { B as f, z as x } from "./register-chai-top-bar-DWmJ2efT.js";
import { d as g, v, w, x as b, y as N } from "./index-pwg0IcuG.js";
import { k as y } from "./index-CVJ1i1qa.js";
const D = ({
  isDefaultLang: e,
  searchQuery: s,
  setSearchQuery: l
}) => /* @__PURE__ */ r(
  x,
  {
    type: "text",
    autoFocus: !0,
    value: e ? s : "",
    onChange: (o) => l(o.target.value),
    placeholder: e ? "Search pages..." : "To search select default language",
    disabled: !e,
    onKeyDown: (o) => o.stopPropagation()
  }
), S = ({
  dynamicPage: e,
  setDynamicPage: s,
  searchQuery: l,
  setSearchQuery: o,
  dynamicPages: a
}) => {
  const { selectedLang: n, fallbackLang: d } = g(), c = (n == null ? void 0 : n.length) === 0;
  return /* @__PURE__ */ u(v, { children: [
    /* @__PURE__ */ r(w, { asChild: !0, children: /* @__PURE__ */ u(
      f,
      {
        variant: "ghost",
        className: "h-max w-max rounded-md border border-[0px] border-gray-200 py-1 pl-4 text-sm hover:bg-gray-100 focus:outline-none focus:ring-0",
        children: [
          e ? i(e, "name") : "Select Page",
          /* @__PURE__ */ r(h, { className: "ml-2 h-4 w-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ u(b, { className: "max-h-[75vh] w-96 divide-y p-0 shadow-xl", children: [
      /* @__PURE__ */ r("div", { className: "bg-gray-50/30 p-1.5", children: /* @__PURE__ */ r(D, { isDefaultLang: c, searchQuery: l, setSearchQuery: o }) }),
      (a == null ? void 0 : a.length) === 0 ? /* @__PURE__ */ r("div", { className: "flex h-24 items-center justify-center text-xs", children: "No pages found" }) : a == null ? void 0 : a.map((t) => /* @__PURE__ */ r(
        N,
        {
          onClick: () => s(t),
          disabled: c ? d !== t.lang : n !== t.lang,
          className: `no-scrollbar flex cursor-pointer flex-col justify-start overflow-x-auto whitespace-nowrap ${t.id === (e == null ? void 0 : e.id) ? "bg-blue-50" : "hover:bg-gray-50"}`,
          children: /* @__PURE__ */ r("div", { className: "w-full whitespace-nowrap px-2 py-[2px] text-xs", children: /* @__PURE__ */ u("div", { className: "flex items-center gap-x-2", children: [
            /* @__PURE__ */ r("span", { className: "font-medium", children: t.name }),
            /* @__PURE__ */ r("span", { className: "truncate rounded-full border border-gray-300 px-2 py-[1px] font-mono text-xs font-medium text-gray-500", children: t.slug })
          ] }) })
        },
        t.id
      ))
    ] })
  ] });
}, B = () => {
  const {
    dynamicPage: e,
    dynamicPages: s,
    allLangPages: l,
    selectedLang: o,
    searchQuery: a,
    updateDynamicPage: n,
    updateSearchQuery: d,
    onChangeLanguage: c
  } = y(), t = p(void 0);
  return m(() => {
    t.current !== o && e && (c(), t.current = o);
  }, [o, s]), /* @__PURE__ */ r("div", { className: "relative", children: /* @__PURE__ */ r(
    S,
    {
      dynamicPage: e,
      setDynamicPage: n,
      searchQuery: a,
      setSearchQuery: d,
      dynamicPages: l
    }
  ) });
};
export {
  B as default
};
