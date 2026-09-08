import { isEmpty as w, get as C, map as T, isNull as F, omit as E, pick as M } from "lodash-es";
import { jsx as i, jsxs as h, Fragment as S } from "react/jsx-runtime";
import * as b from "react";
import { createElement as x } from "react";
import { registerChaiBlockProps as u, stylesProp as p } from "./runtime.js";
import { c as N, g as I } from "./common-functions-D2lMFR6K.js";
import { ButtonIcon as H, CodeIcon as $, FrameIcon as j, SketchLogoIcon as U, RowsIcon as D, LayoutIcon as Z, DividerHorizontalIcon as q, CheckboxIcon as G, FileTextIcon as W, InputIcon as V, LetterCaseToggleIcon as O, RadiobuttonIcon as Y, DropdownMenuIcon as Q, HeadingIcon as J, TableIcon as X, BorderTopIcon as K, BorderAllIcon as ee, ViewHorizontalIcon as te, DragHandleHorizontalIcon as oe, ImageIcon as le, Link1Icon as re, ColumnsIcon as ne, TextIcon as ie, CursorTextIcon as ae, SpaceBetweenVerticallyIcon as se, VideoIcon as ce, ChevronLeftIcon as pe, ChevronRightIcon as de, LoopIcon as z } from "@radix-ui/react-icons";
import { r as d, f as ue, c as me } from "./core-nSRy3D7z.js";
const v = ({ className: e = "", inBuilder: o }) => o ? /* @__PURE__ */ i("div", { className: N("pointer-events-none flex h-20 flex-col items-center justify-center p-2", e), children: /* @__PURE__ */ i("div", { className: "h-full w-full rounded bg-gray-200 p-2 dark:bg-gray-800", children: /* @__PURE__ */ i("div", { className: "flex h-full w-full items-center justify-center outline-dashed outline-1 -outline-offset-1 outline-gray-400 duration-300 dark:outline-gray-700" }) }) }) : null, ye = (e) => {
  const { blockProps: o, inBuilder: t, backgroundImage: l, children: r, tag: n = "div", styles: a } = e;
  let s = r;
  r || (s = /* @__PURE__ */ i(v, { inBuilder: t }));
  let c = {};
  return l && (c = { backgroundImage: `url(${l})` }), b.createElement(n, { ...o, ...a, style: c }, s);
}, ge = {
  type: "Box",
  description: "Similar to a div or section elements in HTML",
  label: "Box",
  category: "core",
  group: "basic",
  props: u({
    properties: {
      styles: p(""),
      tag: {
        type: "string",
        default: "div",
        title: "Tag",
        oneOf: [
          { const: "div", title: "div" },
          { const: "header", title: "header" },
          { const: "footer", title: "footer" },
          { const: "section", title: "section" },
          { const: "article", title: "article" },
          { const: "aside", title: "aside" },
          { const: "main", title: "main" },
          { const: "nav", title: "nav" },
          { const: "figure", title: "figure" },
          { const: "details", title: "details" },
          { const: "summary", title: "summary" },
          { const: "dialog", title: "dialog" },
          { const: "strike", title: "strike" },
          { const: "caption", title: "caption" },
          { const: "legend", title: "legend" },
          { const: "figcaption", title: "figcaption" },
          { const: "mark", title: "mark" }
        ]
      },
      backgroundImage: {
        type: "string",
        default: "",
        title: "Background Image",
        ui: { "ui:widget": "image", "ui:allowEmpty": !0 }
      }
    }
  }),
  canAcceptBlock: () => !0
}, be = (e) => {
  const { blockProps: o, iconSize: t, icon: l, content: r, styles: n, children: a, iconPos: s, link: c, inBuilder: g } = e, m = l, k = a || /* @__PURE__ */ h(S, { children: [
    r && /* @__PURE__ */ i("span", { children: r }),
    m && /* @__PURE__ */ i(
      "div",
      {
        style: { width: t + "px" },
        className: s + " " + (r ? s === "order-first" ? "mr-2" : "ml-2" : "") || "",
        dangerouslySetInnerHTML: { __html: m }
      }
    )
  ] }), f = x(
    "button",
    {
      ...o,
      ...n,
      type: "button",
      "aria-label": r
    },
    k
  );
  return w(C(c, "href")) ? f : g ? /* @__PURE__ */ i("span", { children: f }) : /* @__PURE__ */ i("a", { "aria-label": r, href: C(c, "href") || "/", target: C(c, "target", "_self"), children: f });
}, fe = {
  type: "Button",
  description: "similar to a button element in HTML",
  label: "Button",
  category: "core",
  icon: H,
  group: "basic",
  props: u({
    properties: {
      styles: p("text-primary-foreground bg-primary px-4 py-2 rounded-lg flex items-center"),
      content: {
        type: "string",
        title: "Button label",
        default: "Button"
      },
      icon: {
        type: "string",
        title: "Icon",
        default: "",
        ui: { "ui:widget": "icon" }
      },
      iconSize: {
        type: "number",
        title: "Icon size",
        default: 16
      },
      iconPos: {
        type: "string",
        title: "Icon position",
        default: "order-last",
        enum: ["order-first", "order-last"],
        enumNames: ["Left", "Right"]
      },
      link: {
        type: "object",
        properties: {
          type: { type: "string" },
          href: { type: "string" },
          target: { type: "string" }
        },
        default: {
          type: "url",
          href: "",
          target: "_self"
        },
        ui: { "ui:field": "link" }
      },
      prefetchLink: {
        type: "boolean",
        default: !0,
        title: "Prefetch Link"
      }
    }
  }),
  i18nProps: ["content", "link"],
  aiProps: ["content"]
}, he = (e) => {
  const { blockProps: o, styles: t, htmlCode: l, inBuilder: r } = e;
  return r ? /* @__PURE__ */ h("div", { className: "relative", ...o, children: [
    r ? /* @__PURE__ */ i("div", { ...t, className: "absolute z-20 h-full w-full" }) : null,
    b.createElement("div", {
      ...t,
      dangerouslySetInnerHTML: { __html: l.replace(/<script.*?>.*?<\/script>/g, "") }
    })
  ] }) : b.createElement("div", {
    ...o,
    ...t,
    dangerouslySetInnerHTML: { __html: l }
  });
}, Ce = {
  type: "CustomHTML",
  description: "similar to a div or section elements in HTML",
  label: "Custom HTML",
  category: "core",
  icon: $,
  group: "advanced",
  props: u({
    properties: {
      styles: p(""),
      htmlCode: {
        type: "string",
        default: "<div><p>Enter your HTML code here...</p></div>",
        ui: { "ui:widget": "code" }
      }
    }
  }),
  i18nProps: ["htmlCode"]
}, ke = (e) => {
  const { scripts: o, inBuilder: t, blockProps: l } = e;
  return t ? /* @__PURE__ */ i("div", { ...l, children: /* @__PURE__ */ i("div", { className: N("pointer-events-none flex flex-col items-center justify-center p-2", ""), children: /* @__PURE__ */ i("div", { className: "h-full w-full rounded bg-gray-200 p-1 dark:bg-gray-800", children: /* @__PURE__ */ i("p", { className: "text-left text-xs text-gray-400", children: "Scripts will be only executed in preview and live mode. Place your script at the bottom of the" }) }) }) }) : /* @__PURE__ */ i("div", { dangerouslySetInnerHTML: { __html: o } });
}, xe = {
  type: "CustomScript",
  description: "similar to a script element in HTML",
  label: "Custom Script",
  category: "core",
  icon: $,
  hidden: !0,
  group: "advanced",
  props: u({
    properties: {
      scripts: {
        type: "string",
        title: "Script",
        default: "",
        format: "code",
        placeholder: "<script>console.log('Hello, world!');<\/script>"
      }
    }
  })
}, we = (e) => {
  const { blockProps: o, inBuilder: t, children: l, globalBlock: r } = e;
  return t && !r ? /* @__PURE__ */ h(
    "div",
    {
      className: "flex flex-col items-center justify-center gap-y-1 rounded-lg bg-gray-100 py-4 dark:bg-gray-800",
      ...o,
      children: [
        /* @__PURE__ */ h("h1", { children: [
          "Global Block - ",
          r
        ] }),
        /* @__PURE__ */ i("p", { children: "Choose a block from the sidebar to add it to this page." })
      ]
    }
  ) : b.createElement("span", { ...o }, l);
}, ve = {
  type: "GlobalBlock",
  description: "A global block component",
  label: "Global Block",
  icon: j,
  category: "core",
  group: "basic",
  hidden: !0,
  props: u({
    properties: {
      globalBlock: {
        type: "string",
        title: "Global Block",
        default: "",
        ui: { "ui:widget": "hidden" }
      }
    }
  })
}, _ = (e, ...o) => ({
  ...e,
  className: N(e.className, ...o)
}), Ie = (e) => {
  const { blockProps: o, icon: t, styles: l, width: r, inBuilder: n, height: a } = e, s = _(l, "");
  if (w(t))
    return /* @__PURE__ */ i(v, { inBuilder: n, className: "h-8 w-14" });
  const c = t.replace(/<svg /g, '<svg class="w-[inherit] h-[inherit]" ');
  return b.createElement("span", {
    ...o,
    ...s,
    style: {
      width: r ? `${r}px` : "auto",
      height: a ? `${a}px` : "auto"
    },
    dangerouslySetInnerHTML: { __html: c }
  });
}, Pe = {
  type: "Icon",
  label: "web_blocks.icon",
  category: "core",
  description: "Icon block is used to display an icon/svg.",
  icon: U,
  group: "media",
  props: u({
    properties: {
      styles: p(""),
      icon: {
        type: "string",
        title: "Icon",
        default: '<svg xmlns="http://www.w3.org/2000/svg" class="chai-default-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-diamond-icon lucide-diamond"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"/></svg>',
        ui: { "ui:widget": "icon" }
      },
      width: {
        type: "number",
        default: 16,
        title: "Width"
      },
      height: {
        type: "number",
        default: 16,
        title: "Height"
      }
    }
  })
}, Le = (e) => {
  const { blockProps: o, inBuilder: t, children: l, partialBlockId: r } = e;
  return t && !r ? /* @__PURE__ */ h(
    "div",
    {
      className: "flex flex-col items-center justify-center gap-y-1 rounded-lg bg-gray-100 py-4 dark:bg-gray-800",
      ...o,
      children: [
        /* @__PURE__ */ h("h1", { children: [
          "Partial Block - ",
          r
        ] }),
        /* @__PURE__ */ i("p", { children: "Choose a block from the sidebar to add it to this page." })
      ]
    }
  ) : b.createElement("span", { ...o }, l);
}, Be = {
  type: "PartialBlock",
  description: "A partial block component. Partial blocks are global blocks that can be used in multiple pages.",
  label: "Partial Block",
  icon: j,
  category: "core",
  group: "basic",
  hidden: !0,
  props: u({
    properties: {
      partialBlockId: {
        type: "string",
        title: "Partial Block",
        default: "",
        ui: { "ui:widget": "hidden" }
      }
    }
  })
}, L = {
  SMALL: {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
    5: "col-span-5",
    6: "col-span-6",
    7: "col-span-7",
    8: "col-span-8",
    9: "col-span-9",
    10: "col-span-10",
    11: "col-span-11",
    12: "col-span-12"
  },
  MEDIUM: {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4",
    5: "md:col-span-5",
    6: "md:col-span-6",
    7: "md:col-span-7",
    8: "md:col-span-8",
    9: "md:col-span-9",
    10: "md:col-span-10",
    11: "md:col-span-11",
    12: "md:col-span-12"
  },
  LARGE: {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
    5: "lg:col-span-5",
    6: "lg:col-span-6",
    7: "lg:col-span-7",
    8: "lg:col-span-8",
    9: "lg:col-span-9",
    10: "lg:col-span-10",
    11: "lg:col-span-11",
    12: "lg:col-span-12"
  }
}, Se = (e) => {
  const { blockProps: o, children: t, styles: l, colSpan: r, tabletColSpan: n, desktopColSpan: a } = e, c = { className: [
    C(l, "className", ""),
    C(L, ["SMALL", isNaN(r) || !r ? 6 : r], ""),
    n ? C(L, ["MEDIUM", n || r], "") : "",
    a ? C(L, ["LARGE", n || r], "") : ""
  ].join(" ") };
  return /* @__PURE__ */ i("div", { ...o, ...l, ...c, children: t || /* @__PURE__ */ i("div", { className: "h-full min-h-12 w-full border-2 border-dashed border-gray-400 bg-gray-100 dark:bg-gray-900" }) });
}, Ne = {
  type: "Column",
  description: "A column component",
  label: "Column",
  group: "basic",
  category: "core",
  icon: Z,
  wrapper: !0,
  hidden: !0,
  canDelete: () => !0,
  canAcceptBlock: () => !0,
  canBeNested: (e) => e === "Row",
  props: u({
    properties: {
      styles: p(""),
      colSpan: {
        type: "number",
        title: "Column Span",
        default: 6,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      },
      tabletColSpan: {
        type: "number",
        title: "Column Span (Tablet)",
        default: null,
        enumNames: ["Default", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        enum: [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      },
      desktopColSpan: {
        type: "number",
        title: "Column Span (Desktop)",
        default: null,
        enumNames: ["Default", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        enum: [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      }
    }
  })
}, _e = (e) => {
  const { blockProps: o, children: t, styles: l, gutter: r } = e, a = { className: [C(l, "className", ""), " grid grid-cols-12"].join() };
  return typeof (l == null ? void 0 : l.style) == "object" && l.style !== null ? a.style = { ...l.style, gap: `${r}px` } : a.style = { gap: `${r}px` }, /* @__PURE__ */ i("div", { ...o, ...l, ...a, children: t });
}, Te = {
  type: "Row",
  description: "A row component",
  label: "Row",
  group: "basic",
  icon: D,
  hidden: !0,
  blocks: () => [
    { _type: "Row", _id: "row", styles: "#styles:,p-1" },
    { _type: "Column", id: "column", _parent: "row", styles: "#styles:," },
    { _type: "Column", id: "column", _parent: "row", styles: "#styles:," }
  ],
  category: "core",
  wrapper: !0,
  canAcceptBlock: (e) => e === "Column",
  props: u({
    properties: {
      styles: p(""),
      colCount: {
        type: "number",
        default: 2,
        minimum: 0,
        ui: { "ui:widget": "colCount" }
      },
      gutter: {
        type: "number",
        title: "Gutter (in px)",
        default: 16,
        minimum: 0
      }
    }
  })
}, Re = (e) => {
  const { blockProps: o, styles: t } = e;
  return x("hr", { ...t, ...o });
}, Ae = {
  type: "Divider",
  description: "A horizontal line component",
  label: "Divider",
  category: "core",
  icon: q,
  group: "basic",
  props: u({
    properties: {
      styles: p("bg-gray-900 h-0.5 py-2 my-1")
    }
  })
}, Ee = (e) => {
  const { blockProps: o, styles: t, backgroundImage: l } = e;
  let r = {};
  return l && (r = { backgroundImage: `url(${l})` }), b.createElement("div", { ...o, ...t, style: r });
}, Me = {
  type: "EmptyBox",
  description: "A box component with no children",
  label: "Empty Box",
  category: "core",
  group: "basic",
  props: u({
    properties: {
      styles: p(""),
      backgroundImage: {
        type: "string",
        title: "Background Image",
        default: "",
        ui: { "ui:widget": "image", "ui:allowEmpty": !0 }
      }
    }
  })
}, He = (e) => {
  const { blockProps: o, fieldName: t, label: l, styles: r, inputStyles: n, required: a, checked: s, showLabel: c = !0 } = e;
  return c ? /* @__PURE__ */ h("div", { ...r, ...o, children: [
    /* @__PURE__ */ i("input", { ...n, name: t, type: "checkbox", required: a, defaultChecked: s }),
    l && /* @__PURE__ */ i("label", { htmlFor: t, children: l })
  ] }) : /* @__PURE__ */ i(
    "input",
    {
      name: t,
      ...o,
      ...n,
      ...r,
      type: "checkbox",
      required: a,
      defaultChecked: s
    }
  );
}, $e = {
  type: "Checkbox",
  label: "web_blocks.checkbox",
  category: "core",
  icon: G,
  group: "form",
  props: u({
    properties: {
      styles: p("flex items-center gap-x-2"),
      inputStyles: p(""),
      fieldName: {
        type: "string",
        title: "Field Name",
        default: "fieldName"
      },
      label: {
        type: "string",
        title: "Label",
        default: "Label"
      },
      checked: {
        type: "boolean",
        title: "Checked",
        default: !1
      },
      required: {
        type: "boolean",
        title: "Required",
        default: !1
      },
      showLabel: {
        type: "boolean",
        title: "Show Label",
        default: !0
      }
    }
  }),
  aiProps: ["label"],
  i18nProps: ["label"]
}, je = (e) => {
  const { children: o, blockProps: t, errorMessage: l, successMessage: r, action: n, styles: a, inBuilder: s } = e;
  let c = o;
  return o || (c = /* @__PURE__ */ i(v, { inBuilder: s })), /* @__PURE__ */ h(
    "form",
    {
      ...{
        "x-data": "{}",
        "x-on:submit.prevent": "post"
      },
      "data-error": l,
      "data-success": r,
      method: "post",
      action: n,
      ...t,
      ...a,
      children: [
        /* @__PURE__ */ i("div", { ...{
          "x-html": "",
          ":class": "{'text-red-500': formStatus === 'ERROR', 'text-green-500': formStatus === 'SUCCESS'}"
        } }),
        c
      ]
    }
  );
}, De = {
  type: "Form",
  label: "Form",
  category: "core",
  icon: W,
  group: "form",
  blocks: () => [
    { _type: "Form", _id: "form", styles: "#styles:p-1 space-y-2," },
    { _type: "Input", _id: "form_input", _parent: "form", styles: "#styles:," },
    {
      _type: "FormButton",
      _id: "form_submit_btn",
      _parent: "form",
      styles: "#styles:bg-black text-white rounded px-3 py-1,"
    }
  ],
  props: u({
    properties: {
      styles: p(""),
      action: {
        type: "string",
        title: "Submit URL",
        default: "/api/form"
      },
      errorMessage: {
        type: "string",
        title: "Error Message",
        default: "Something went wrong. Please try again",
        ui: { "ui:widget": "richtext" }
      },
      successMessage: {
        type: "string",
        title: "Success Message",
        default: "Thank you for your submission.",
        ui: { "ui:widget": "richtext" }
      }
    }
  }),
  i18nProps: ["errorMessage", "successMessage"],
  aiProps: ["errorMessage", "successMessage"],
  canAcceptBlock: () => !0
}, Ve = (e) => {
  const { blockProps: o, inBuilder: t, label: l, styles: r, icon: n, iconSize: a, iconPos: s } = e;
  return /* @__PURE__ */ h("button", { ...r, ...o || {}, type: t ? "button" : "submit", "aria-label": l, children: [
    l,
    n && /* @__PURE__ */ i(
      "div",
      {
        style: { width: a + "px" },
        className: s + " " + (s === "order-first" ? "mr-2" : "ml-2") || "",
        dangerouslySetInnerHTML: { __html: n }
      }
    )
  ] });
}, ze = {
  type: "FormButton",
  label: "Submit Button",
  category: "core",
  icon: H,
  group: "form",
  props: u({
    properties: {
      styles: p(
        "text-white bg-primary disabled:bg-gray-400 px-4 py-2 rounded-global flex items-center gap-x-2"
      ),
      label: {
        type: "string",
        title: "Label",
        default: "Submit",
        ai: !0,
        i18n: !0
      },
      icon: {
        type: "string",
        title: "Icon",
        default: "",
        ui: { "ui:widget": "icon" }
      },
      iconSize: {
        type: "number",
        title: "Icon size",
        default: 24
      },
      iconPos: {
        type: "string",
        title: "Icon Position",
        default: "order-last",
        enum: ["order-first", "order-last"]
      }
    }
  }),
  i18nProps: ["label"],
  aiProps: ["label"]
}, Fe = (e) => {
  const o = { type: "text", autoComplete: "on" };
  return e ? ["text", "password", "number", "hidden", "range", "color", "date", "time"].includes(e) ? { type: e, autoComplete: "on" } : e === "email" ? { type: "email", autoComplete: "email" } : e === "tel" ? { type: "tel", autoComplete: "tel" } : e === "url" ? { type: "url", autoComplete: "url" } : {
    // Special cases
    off: { type: "text", autoComplete: "off" },
    on: { type: "text", autoComplete: "on" },
    // Name related
    name: { type: "text", autoComplete: "name" },
    "honorific-prefix": { type: "text", autoComplete: "honorific-prefix" },
    "given-name": { type: "text", autoComplete: "given-name" },
    "additional-name": { type: "text", autoComplete: "additional-name" },
    "family-name": { type: "text", autoComplete: "family-name" },
    "honorific-suffix": { type: "text", autoComplete: "honorific-suffix" },
    nickname: { type: "text", autoComplete: "nickname" },
    firstName: { type: "text", autoComplete: "given-name" },
    lastName: { type: "text", autoComplete: "family-name" },
    // Contact related
    email: { type: "email", autoComplete: "email" },
    tel: { type: "tel", autoComplete: "tel" },
    "tel-country-code": { type: "tel", autoComplete: "tel-country-code" },
    "tel-national": { type: "tel", autoComplete: "tel-national" },
    "tel-area-code": { type: "tel", autoComplete: "tel-area-code" },
    "tel-local": { type: "tel", autoComplete: "tel-local" },
    "tel-extension": { type: "tel", autoComplete: "tel-extension" },
    // Address related
    "street-address": { type: "text", autoComplete: "street-address" },
    "address-line1": { type: "text", autoComplete: "address-line1" },
    "address-line2": { type: "text", autoComplete: "address-line2" },
    "address-line3": { type: "text", autoComplete: "address-line3" },
    "address-level1": { type: "text", autoComplete: "address-level1" },
    "address-level2": { type: "text", autoComplete: "address-level2" },
    "address-level3": { type: "text", autoComplete: "address-level3" },
    "address-level4": { type: "text", autoComplete: "address-level4" },
    country: { type: "text", autoComplete: "country" },
    "country-name": { type: "text", autoComplete: "country-name" },
    "postal-code": { type: "text", autoComplete: "postal-code" },
    // Credit card related
    "cc-name": { type: "text", autoComplete: "cc-name" },
    "cc-given-name": { type: "text", autoComplete: "cc-given-name" },
    "cc-additional-name": { type: "text", autoComplete: "cc-additional-name" },
    "cc-family-name": { type: "text", autoComplete: "cc-family-name" },
    "cc-number": { type: "text", autoComplete: "cc-number" },
    "cc-exp": { type: "text", autoComplete: "cc-exp" },
    "cc-exp-month": { type: "number", autoComplete: "cc-exp-month" },
    "cc-exp-year": { type: "number", autoComplete: "cc-exp-year" },
    "cc-csc": { type: "text", autoComplete: "cc-csc" },
    "cc-type": { type: "text", autoComplete: "cc-type" },
    // Date related
    bday: { type: "date", autoComplete: "bday" },
    "bday-day": { type: "number", autoComplete: "bday-day" },
    "bday-month": { type: "number", autoComplete: "bday-month" },
    "bday-year": { type: "number", autoComplete: "bday-year" },
    // Login related
    username: { type: "text", autoComplete: "username" },
    "new-password": { type: "password", autoComplete: "new-password" },
    "current-password": { type: "password", autoComplete: "current-password" },
    "one-time-code": { type: "text", autoComplete: "one-time-code" },
    // Transaction related
    "transaction-currency": { type: "text", autoComplete: "transaction-currency" },
    "transaction-amount": { type: "number", autoComplete: "transaction-amount" },
    // Other
    url: { type: "url", autoComplete: "url" },
    photo: { type: "url", autoComplete: "photo" },
    sex: { type: "text", autoComplete: "sex" },
    "organization-title": { type: "text", autoComplete: "organization-title" },
    organization: { type: "text", autoComplete: "organization" },
    language: { type: "text", autoComplete: "language" }
  }[e] || o : o;
}, Ue = (e) => {
  const {
    blockProps: o,
    fieldName: t,
    label: l,
    placeholder: r,
    styles: n,
    inputStyles: a,
    showLabel: s,
    required: c,
    inputType: g,
    defaultValue: m
  } = e, { type: k, autoComplete: f } = Fe(g);
  return s ? /* @__PURE__ */ h("div", { ...n, ...o, children: [
    s && /* @__PURE__ */ i("label", { htmlFor: t, children: l }),
    /* @__PURE__ */ i(
      "input",
      {
        name: t,
        defaultValue: m,
        ...a,
        type: k,
        placeholder: r,
        required: c,
        autoComplete: f,
        ...k === "hidden" && m ? { value: m } : {}
      }
    )
  ] }) : /* @__PURE__ */ i(
    "input",
    {
      name: t,
      ...o,
      ...a,
      ...n,
      type: k,
      placeholder: r,
      required: c,
      autoComplete: f,
      defaultValue: m,
      ...k === "hidden" && m ? { value: m } : {}
    }
  );
}, Ze = {
  type: "Input",
  label: "web_blocks.input",
  category: "core",
  icon: V,
  group: "form",
  props: u({
    properties: {
      styles: p(""),
      inputStyles: p("w-full p-1"),
      fieldName: {
        type: "string",
        title: "Field Name",
        default: "fieldName"
      },
      inputType: {
        type: "string",
        title: "Type",
        default: "email",
        oneOf: [
          // Basic HTML input types
          { const: "text", title: "Text" },
          { const: "email", title: "Email" },
          { const: "password", title: "Password" },
          { const: "number", title: "Number" },
          { const: "tel", title: "Telephone" },
          { const: "hidden", title: "Hidden" },
          { const: "range", title: "Range" },
          { const: "color", title: "Color" },
          { const: "date", title: "Date" },
          { const: "time", title: "Time" },
          { const: "url", title: "URL" },
          // Name related
          { const: "name", title: "Name" },
          { const: "firstName", title: "First Name" },
          { const: "lastName", title: "Last Name" },
          // Contact related
          { const: "tel-country-code", title: "Telephone Country Code" },
          { const: "tel-national", title: "Telephone National" },
          { const: "tel-area-code", title: "Telephone Area Code" },
          { const: "tel-local", title: "Telephone Local" },
          { const: "tel-extension", title: "Telephone Extension" },
          // Address related
          { const: "street-address", title: "Street Address" },
          { const: "address-line1", title: "Address Line 1" },
          { const: "address-line2", title: "Address Line 2" },
          { const: "address-line3", title: "Address Line 3" },
          { const: "address-level1", title: "Address Level 1" },
          { const: "address-level2", title: "Address Level 2" },
          { const: "address-level3", title: "Address Level 3" },
          { const: "address-level4", title: "Address Level 4" },
          { const: "country", title: "Country" },
          { const: "country-name", title: "Country Name" },
          { const: "postal-code", title: "Postal Code" },
          // Credit card related
          { const: "cc-name", title: "Credit Card Name" },
          { const: "cc-number", title: "Credit Card Number" },
          { const: "cc-exp", title: "Credit Card Expiry" },
          { const: "cc-exp-month", title: "Credit Card Expiry Month" },
          { const: "cc-exp-year", title: "Credit Card Expiry Year" },
          { const: "cc-csc", title: "Credit Card CSC" },
          { const: "cc-type", title: "Credit Card Type" },
          // Date related
          { const: "bday", title: "Birthday" },
          { const: "bday-day", title: "Birthday Day" },
          { const: "bday-month", title: "Birthday Month" },
          { const: "bday-year", title: "Birthday Year" },
          // Login related
          { const: "username", title: "Username" },
          { const: "new-password", title: "New Password" },
          { const: "current-password", title: "Current Password" },
          { const: "one-time-code", title: "One Time Code" },
          // Transaction related
          { const: "transaction-currency", title: "Transaction Currency" },
          { const: "transaction-amount", title: "Transaction Amount" },
          // Other
          { const: "url", title: "URL" },
          { const: "photo", title: "Photo" },
          { const: "sex", title: "Sex" },
          { const: "organization-title", title: "Organization Title" },
          { const: "organization", title: "Organization" },
          { const: "language", title: "Language" }
        ]
      },
      showLabel: {
        type: "boolean",
        title: "Show Label",
        default: !0
      },
      label: {
        type: "string",
        title: "Label",
        default: "Label",
        ai: !0,
        i18n: !0
      },
      placeholder: {
        type: "string",
        title: "Placeholder",
        default: "Placeholder"
      },
      required: {
        type: "boolean",
        title: "Required",
        default: !1
      },
      defaultValue: {
        type: "string",
        title: "Default Value",
        default: ""
      }
    }
  }),
  aiProps: ["label", "placeholder"],
  i18nProps: ["label", "placeholder"]
}, qe = (e) => {
  const { blockProps: o, content: t, styles: l, children: r } = e, n = { ...l, ...o };
  return r ? b.createElement("label", n, r) : b.createElement("label", {
    ...n,
    dangerouslySetInnerHTML: { __html: t }
  });
}, Ge = {
  type: "Label",
  label: "Label",
  category: "core",
  icon: O,
  group: "form",
  props: u({
    properties: {
      styles: p(),
      content: {
        type: "string",
        title: "Content",
        default: ""
      }
    }
  }),
  aiProps: ["content"],
  i18nProps: ["content"]
}, We = (e) => {
  const { blockProps: o, fieldName: t, label: l, styles: r, inputStyles: n, required: a, checked: s, showLabel: c = !0 } = e;
  return c ? /* @__PURE__ */ h("div", { ...r, ...o, children: [
    /* @__PURE__ */ i("input", { ...n, name: t, type: "radio", required: a, defaultChecked: s }),
    l && /* @__PURE__ */ i("label", { htmlFor: t, children: l })
  ] }) : /* @__PURE__ */ i(
    "input",
    {
      name: t,
      ...o,
      ...n,
      ...r,
      type: "radio",
      required: a,
      checked: s
    }
  );
}, Oe = {
  type: "Radio",
  label: "web_blocks.radio",
  category: "core",
  icon: Y,
  group: "form",
  props: u({
    properties: {
      styles: p("flex items-center gap-x-2"),
      inputStyles: p(""),
      fieldName: {
        type: "string",
        title: "Field Name",
        default: "fieldName"
      },
      label: {
        type: "string",
        title: "Label",
        default: "Label"
      },
      checked: {
        type: "boolean",
        title: "Checked",
        default: !1
      },
      required: {
        type: "boolean",
        title: "Required",
        default: !1
      },
      showLabel: {
        type: "boolean",
        title: "Show Label",
        default: !0
      }
    }
  }),
  aiProps: ["label"],
  i18nProps: ["label"]
}, Ye = (e) => {
  const {
    blockProps: o,
    fieldName: t,
    label: l,
    placeholder: r,
    styles: n,
    inputStyles: a,
    required: s,
    showLabel: c,
    _multiple: g,
    options: m,
    defaultValue: k
  } = e, f = g && k ? k.split(",").map((y) => y.trim()) : k || "";
  return c ? /* @__PURE__ */ h("div", { ...n, ...o, children: [
    c && /* @__PURE__ */ i("label", { htmlFor: t, children: l }),
    /* @__PURE__ */ h(
      "select",
      {
        ...a,
        required: s,
        multiple: g,
        name: t,
        defaultValue: f,
        children: [
          /* @__PURE__ */ i("option", { value: "", disabled: !0, hidden: !0, children: r }),
          T(m, (y) => /* @__PURE__ */ i("option", { value: y == null ? void 0 : y.value, children: y == null ? void 0 : y.label }, y == null ? void 0 : y.value))
        ]
      }
    )
  ] }) : /* @__PURE__ */ h(
    "select",
    {
      ...n,
      ...o,
      required: s,
      multiple: g,
      name: t,
      defaultValue: f,
      children: [
        /* @__PURE__ */ i("option", { value: "", disabled: !0, hidden: !0, children: r }),
        T(m, (y) => /* @__PURE__ */ i("option", { value: y == null ? void 0 : y.value, children: y == null ? void 0 : y.label }, y == null ? void 0 : y.value))
      ]
    }
  );
}, Qe = {
  type: "Select",
  label: "web_blocks.select",
  category: "core",
  icon: Q,
  group: "form",
  props: u({
    properties: {
      styles: p(""),
      inputStyles: p("w-full p-1"),
      fieldName: {
        type: "string",
        title: "Field Name",
        default: "fieldName"
      },
      showLabel: {
        type: "boolean",
        title: "Show Label",
        default: !0
      },
      label: {
        type: "string",
        title: "Label",
        default: "Label"
      },
      placeholder: {
        type: "string",
        title: "Placeholder",
        default: "Placeholder"
      },
      required: {
        type: "boolean",
        title: "Required",
        default: !1
      },
      defaultValue: {
        type: "string",
        title: "Default Value",
        default: ""
      },
      _multiple: {
        type: "boolean",
        title: "Multiple",
        default: !1
      },
      options: {
        title: "Options",
        type: "array",
        default: [],
        items: {
          type: "object",
          properties: {
            label: {
              type: "string",
              title: "Label",
              default: ""
            },
            value: {
              type: "string",
              title: "Value",
              default: ""
            }
          }
        }
      }
    }
  }),
  aiProps: ["label", "placeholder"],
  i18nProps: ["label", "placeholder"]
}, Je = (e) => {
  const { blockProps: o, fieldName: t, label: l, placeholder: r, styles: n, inputStyles: a, rows: s, showLabel: c, required: g, defaultValue: m } = e;
  return c ? /* @__PURE__ */ h("div", { ...n, ...o, children: [
    c && /* @__PURE__ */ i("label", { htmlFor: t, children: l }),
    /* @__PURE__ */ i(
      "textarea",
      {
        name: t,
        ...a,
        placeholder: r,
        rows: s,
        required: g,
        defaultValue: m
      }
    )
  ] }) : /* @__PURE__ */ i(
    "textarea",
    {
      name: t,
      ...o,
      ...a,
      ...n,
      placeholder: r,
      rows: s,
      required: g,
      defaultValue: m
    }
  );
}, Xe = {
  type: "TextArea",
  label: "web_blocks.textarea",
  category: "core",
  icon: V,
  group: "form",
  props: u({
    properties: {
      fieldName: {
        type: "string",
        title: "Field Name",
        default: "fieldName"
      },
      styles: p(""),
      inputStyles: p("w-full p-1"),
      showLabel: {
        type: "boolean",
        title: "Show Label",
        default: !0
      },
      label: {
        type: "string",
        title: "Label",
        default: "Label",
        ui: { "ui:widget": "textarea", "ui:autosize": !0, "ui:rows": 3 }
      },
      placeholder: {
        type: "string",
        title: "Placeholder",
        default: "Placeholder"
      },
      rows: {
        type: "number",
        title: "Rows",
        default: 3
      },
      required: {
        type: "boolean",
        title: "Required",
        default: !1
      },
      defaultValue: {
        type: "string",
        title: "Default Value",
        default: "",
        ui: { "ui:widget": "textarea", "ui:autosize": !0, "ui:rows": 3 }
      }
    }
  }),
  aiProps: ["label", "placeholder"],
  i18nProps: ["label", "placeholder"]
}, Ke = (e) => {
  const { blockProps: o, styles: t, content: l, tag: r = "h1", children: n = null } = e;
  return n ? b.createElement(r, { ...t, ...o }, n) : b.createElement(r, {
    ...t,
    ...o,
    dangerouslySetInnerHTML: { __html: l }
  });
}, et = {
  type: "Heading",
  description: "A heading component similar to h1, h2, h3, h4, h5, h6 elements in HTML",
  label: "Heading",
  category: "core",
  icon: J,
  group: "typography",
  props: u({
    properties: {
      tag: {
        type: "string",
        default: "h2",
        title: "Level",
        enum: ["h1", "h2", "h3", "h4", "h5", "h6"]
      },
      styles: p("text-3xl"),
      content: {
        type: "string",
        default: "Heading goes here",
        title: "Content",
        ui: { "ui:widget": "textarea", "ui:rows": 3 }
      }
    }
  }),
  aiProps: ["content"],
  i18nProps: ["content"],
  canAcceptBlock: () => !0
}, tt = (e) => {
  const { blockProps: o, styles: t } = e;
  return x("br", { ...o, ...t });
}, ot = {
  type: "LineBreak",
  label: "Line Break",
  category: "core",
  group: "basic",
  hidden: !0,
  props: u({
    properties: {
      styles: p("")
    }
  }),
  canAcceptBlock: () => !0,
  canDelete: () => !1,
  canMove: () => !1,
  canDuplicate: () => !1
}, lt = (e) => {
  const { blockProps: o, children: t, styles: l } = e;
  return t ? x("table", { ...o, ...l }, t) : /* @__PURE__ */ i(v, {});
}, rt = (e) => {
  const { blockProps: o, children: t, styles: l } = e;
  return t ? x("thead", { ...o, ...l }, t) : /* @__PURE__ */ i(v, {});
}, nt = (e) => {
  const { blockProps: o, children: t, styles: l } = e;
  return t ? x("tbody", { ...o, ...l }, t) : /* @__PURE__ */ i(v, {});
}, it = (e) => {
  const { blockProps: o, children: t, styles: l } = e;
  return t ? x("tr", { ...o, ...l }, t) : /* @__PURE__ */ i(v, {});
}, at = (e) => {
  const { blockProps: o, children: t, content: l, styles: r } = e;
  return !t && w(l) ? /* @__PURE__ */ i(v, {}) : t ? x("td", { ...o, ...r }, t) : x("td", {
    ...o,
    ...r,
    dangerouslySetInnerHTML: { __html: l }
  });
};
d(lt, {
  type: "Table",
  label: "Table",
  category: "core",
  group: "table",
  hidden: !0,
  icon: X,
  props: u({
    properties: {
      styles: p("")
    }
  }),
  blocks: P("Table")
});
d(rt, {
  type: "TableHead",
  label: "Table Head",
  category: "core",
  group: "table",
  hidden: !0,
  icon: K,
  props: u({
    properties: {
      styles: p("")
    }
  }),
  blocks: P("TableHead")
});
d(nt, {
  type: "TableBody",
  label: "Table Body",
  category: "core",
  group: "table",
  hidden: !0,
  icon: ee,
  props: u({
    properties: {
      styles: p("")
    }
  }),
  blocks: P("TableBody")
});
d(it, {
  type: "TableRow",
  label: "Table Row",
  category: "core",
  group: "table",
  hidden: !0,
  icon: te,
  props: u({
    properties: {
      styles: p("")
    }
  }),
  blocks: P("TableRow")
});
d(at, {
  type: "TableCell",
  label: "Table Cell",
  category: "core",
  group: "table",
  hidden: !0,
  icon: oe,
  props: u({
    properties: {
      styles: p(""),
      content: {
        type: "string",
        default: "Heading goes here",
        title: "Content",
        ui: { "ui:widget": "textarea" }
      }
    }
  }),
  blocks: P("TableCell"),
  i18nProps: ["content"],
  aiProps: ["content"]
});
function P(e) {
  const o = (n, a) => ({
    _id: I(),
    _parent: n,
    _type: "TableCell",
    styles: "#styles:,",
    content: `${e === "TableHead" ? "Table Head" : "Table Cell " + a}`
  }), t = (n) => {
    const a = I(), s = {
      _type: "TableRow",
      _id: a,
      styles: "#styles:,border-b"
    };
    return n && (s._parent = n), [s, o(a, "1"), o(a, "2"), o(a, "3")];
  }, l = (n) => {
    const a = I(), s = {
      _id: a,
      _type: "TableHead",
      styles: "#styles:,font-medium"
    };
    return n && (s._parent = n), [s, ...t(a)];
  }, r = (n) => {
    const a = I(), s = {
      _id: a,
      _type: "TableBody",
      styles: "#styles:,"
    };
    return n && (s._parent = n), [s, ...t(a), ...t(a)];
  };
  if (e === "Table") {
    const n = I();
    return [
      {
        _id: n,
        _type: "Table",
        styles: "#styles:,w-full text-left text-gray-500 dark:text-gray-400"
      },
      ...l(n),
      ...r(n)
    ];
  }
  return e === "TableRow" ? t() : e === "TableHead" ? l() : e === "TableBody" ? r() : [];
}
const st = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2Q1ZDdkYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIFBsYWNlaG9sZGVyPC90ZXh0Pjwvc3ZnPg==", ct = (e) => {
  const { blockProps: o, image: t, mobileImage: l, styles: r, alt: n, height: a, width: s, lazyLoading: c, mobileWidth: g, mobileHeight: m } = e;
  return w(t) ? /* @__PURE__ */ i(v, { className: "h-36" }) : /* @__PURE__ */ h("picture", { children: [
    l && /* @__PURE__ */ i("source", { srcSet: l, media: "(max-width: 480px)", width: g, height: m }),
    /* @__PURE__ */ i(
      "img",
      {
        ...o,
        ...r,
        src: t,
        alt: n,
        loading: c ? "lazy" : "eager",
        width: s,
        height: a
      }
    )
  ] });
}, pt = {
  type: "Image",
  description: "A image component",
  label: "Image",
  category: "core",
  icon: le,
  group: "media",
  props: u({
    properties: {
      styles: p("w-full h-full object-cover"),
      image: {
        type: "string",
        title: "Image",
        default: st,
        ui: { "ui:widget": "image" }
      },
      width: {
        type: "string",
        title: "Width",
        default: "",
        ui: { "ui:placeholder": "Enter width" }
      },
      height: {
        type: "string",
        title: "Height",
        default: "",
        ui: { "ui:placeholder": "Enter height" }
      },
      mobileImage: {
        type: "string",
        title: "Mobile Image",
        default: "",
        ui: { "ui:widget": "image" }
      },
      mobileWidth: {
        type: "string",
        title: "Mobile Width",
        default: "",
        ui: { "ui:placeholder": "Enter width" }
      },
      mobileHeight: {
        type: "string",
        title: "Mobile Height",
        default: "",
        ui: { "ui:placeholder": "Enter height" }
      },
      alt: {
        type: "string",
        title: "Alt text",
        default: "",
        ui: { "ui:placeholder": "Enter  alt text" }
      },
      lazyLoading: {
        type: "boolean",
        title: "Lazy Load",
        default: !0
      }
    }
  }),
  aiProps: ["alt"],
  i18nProps: ["alt", "image", "_imageId", "mobileImage", "_mobileImageId"]
}, dt = (e) => {
  const { blockProps: o, link: t, children: l, styles: r, inBuilder: n, content: a } = e;
  let s = {};
  return !l && w(a) && (s = { minHeight: "50px", display: "flex", alignItems: "center", justifyContent: "center" }), n ? l ? /* @__PURE__ */ i("span", { role: "link", ...o, style: s, ...r, children: l }) : x(
    "span",
    {
      ...o,
      ...r,
      style: s,
      role: "link"
    },
    a
  ) : l ? /* @__PURE__ */ i("a", { "aria-label": a, href: (t == null ? void 0 : t.href) || "#/", target: t == null ? void 0 : t.target, ...o, ...r, children: l }) : x(
    "a",
    {
      ...o,
      ...r,
      href: (t == null ? void 0 : t.href) || "#",
      target: (t == null ? void 0 : t.target) || "_self",
      "aria-label": a
    },
    a
  );
}, ut = {
  type: "Link",
  description: "A link component",
  label: "Link",
  category: "core",
  icon: re,
  group: "basic",
  props: u({
    properties: {
      styles: p("block"),
      content: {
        type: "string",
        default: "Link text goes here",
        title: "Content"
      },
      link: {
        type: "object",
        properties: {
          type: { type: "string" },
          href: { type: "string" },
          target: { type: "string" }
        },
        default: {
          type: "url",
          href: "",
          target: "_self"
        },
        ui: {
          "ui:field": "link"
        }
      },
      prefetchLink: {
        type: "boolean",
        default: !1,
        title: "Prefetch Link"
      }
    }
  }),
  aiProps: ["content"],
  i18nProps: ["content", "link"],
  canAcceptBlock: (e) => e !== "Link"
}, mt = (e) => {
  const { blockProps: o, children: t, styles: l, tag: r, inBuilder: n } = e;
  return !t && w(l == null ? void 0 : l.className) ? /* @__PURE__ */ i(v, { inBuilder: n }) : b.createElement(r || "ul", { ...o, ...l }, t);
}, yt = {
  type: "List",
  description: "A list component",
  label: "List",
  icon: D,
  category: "core",
  group: "basic",
  props: u({
    properties: {
      styles: p("")
    }
  }),
  canAcceptBlock: (e) => e === "ListItem",
  blocks: [
    { _type: "List", _id: "a", styles: "#styles:," },
    {
      _type: "ListItem",
      _id: "b",
      _parent: "a",
      styles: "#styles:,",
      content: "Item 1"
    },
    {
      _type: "ListItem",
      _id: "c",
      _parent: "a",
      styles: "#styles:,",
      content: "Item 2"
    },
    {
      _type: "ListItem",
      _id: "d",
      _parent: "a",
      styles: "#styles:,",
      content: "Item 3"
    }
  ]
}, gt = (e) => {
  const { blockProps: o, content: t, styles: l, children: r, tag: n } = e;
  return r ? b.createElement(n || "li", { ...l, ...o }, r) : b.createElement(n || "li", {
    ...l,
    ...o,
    dangerouslySetInnerHTML: { __html: t }
  });
}, bt = {
  type: "ListItem",
  description: "A list item component",
  label: "List Item",
  icon: ne,
  category: "core",
  group: "basic",
  props: u({
    properties: {
      styles: p(""),
      content: {
        type: "string",
        default: "List item",
        title: "Content",
        ui: {
          "ui:widget": "textarea"
        }
      }
    }
  }),
  i18nProps: ["content"],
  aiProps: ["content"],
  canAcceptBlock: (e) => e !== "ListItem",
  canBeNested: (e) => e === "List" || e === "Repeater"
}, ft = (e) => {
  const { blockProps: o, styles: t, content: l } = e;
  if (!F(e.children)) return b.createElement("p", { ...t, ...o }, e.children);
  const r = _(t, "rte");
  return b.createElement("div", {
    ...r,
    ...o,
    dangerouslySetInnerHTML: { __html: l }
  });
}, ht = {
  type: "Paragraph",
  description: "A paragraph component",
  label: "Paragraph",
  category: "core",
  icon: ie,
  group: "typography",
  props: u({
    properties: {
      styles: p(""),
      content: {
        type: "string",
        title: "Content",
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        ui: { "ui:widget": "richtext", "ui:autosize": !0, "ui:rows": 5 }
      }
    }
  }),
  i18nProps: ["content"],
  aiProps: ["content"],
  canAcceptBlock: (e) => e === "Span" || e === "Link" || e === "Text"
}, Ct = (e) => {
  const { blockProps: o, content: t, styles: l } = e, r = _(l, "rte");
  return /* @__PURE__ */ i("div", { ...o, ...r, dangerouslySetInnerHTML: { __html: t } });
}, kt = {
  type: "RichText",
  description: "A rich text block",
  label: "Rich Text",
  hidden: !0,
  category: "core",
  icon: ae,
  group: "typography",
  props: u({
    properties: {
      styles: p(""),
      content: {
        type: "string",
        title: "Content",
        default: "<p>This is a rich text block. You can add text, and other content here.</p>",
        ui: { "ui:widget": "richtext" }
      }
    }
  }),
  aiProps: ["content"],
  i18nProps: ["content"]
}, xt = (e) => {
  const { blockProps: o, styles: t, content: l, children: r = null, tag: n } = e;
  return r ? b.createElement("span", { ...t, ...o }, r) : b.createElement(n || "span", {
    ...t,
    ...o,
    dangerouslySetInnerHTML: { __html: l || "" }
  });
}, wt = {
  type: "Span",
  description: "A span component",
  label: "Span",
  category: "core",
  group: "basic",
  props: u({
    properties: {
      styles: p(""),
      content: {
        type: "string",
        title: "Content",
        default: "",
        ui: { "ui:widget": "textarea", "ui:autosize": !0, "ui:rows": 3 }
      }
    }
  }),
  aiProps: ["content"],
  i18nProps: ["content"],
  canAcceptBlock: () => !0
}, vt = (e) => e.inBuilder || e.forceWrapper ? /* @__PURE__ */ i("span", { ...e.blockProps, children: e.content }) : `${e.content}`, It = {
  type: "Text",
  description: "A text component with no styling",
  label: "Text",
  category: "core",
  group: "typography",
  blocks: () => [{ _id: "a", _type: "Text", _name: "Text", content: "" }],
  icon: se,
  props: u({
    properties: {
      styles: p("text-black"),
      content: {
        title: "Content",
        type: "string",
        default: ""
      }
    }
  }),
  aiProps: ["content"],
  i18nProps: ["content"]
}, B = {
  type: "object",
  title: "Controls",
  default: {
    autoplay: !0,
    controls: !1,
    loop: !0,
    muted: !0
  },
  properties: {
    autoplay: {
      type: "boolean",
      title: "Autoplay",
      default: !1
    },
    controls: {
      type: "boolean",
      title: "Show Controls",
      default: !0
    },
    loop: {
      type: "boolean",
      title: "Loop Video",
      default: !1
    },
    muted: {
      type: "boolean",
      title: "Muted",
      default: !1
    }
  }
}, R = /^(https?:\/\/)?(www\.)?youtube\.com\/(watch\?v=|embed\/)([a-zA-Z0-9_-]{11})/, A = /(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/(?:channels\/[\w]+\/|groups\/[^\/]+\/videos\/|album\/\d+\/video\/|video\/)?|player\.vimeo\.com\/video\/)(\d+)/, Pt = (e, o) => {
  const t = C(o, "autoplay", !1), l = C(o, "controls", !1), r = C(o, "loop", !1), n = t || C(o, "muted", !0);
  if (R.test(e)) {
    const a = e.match(R);
    if (a) {
      const s = a[4], c = `https://www.youtube.com/embed/${s}`, g = [];
      return t && g.push("autoplay=1"), r && g.push("loop=1", `playlist=${s}`), n && g.push("mute=1", "muted=1"), g.push(l ? "controls=1" : "controls=0"), `${c}?${g.join("&")}`;
    }
  }
  if (A.test(e)) {
    const a = e.match(A);
    if (a) {
      const s = a[1], c = [];
      return t && c.push("autoplay=1"), c.push(l ? "controls=1" : "controls=0"), n && c.push("muted=1"), r && c.push("loop=1"), `https://player.vimeo.com/video/${s}?${c.join("&")}`;
    }
  }
  return null;
}, Lt = (e) => {
  const { url: o, blockProps: t, styles: l, controls: r, videoSource: n, inBuilder: a, title: s } = e, c = Pt(o, r);
  return /* @__PURE__ */ h("div", { ...E(l, "className"), className: "relative w-full overflow-hidden", style: { paddingBottom: "56.25%" }, children: [
    !c && a ? /* @__PURE__ */ i("div", { className: "absolute flex h-full w-full items-center justify-center bg-gray-300 text-center", children: w(o) ? `Provided ${n} video link in settings Video URL.` : `Provided ${n} video link is invalid.` }) : /* @__PURE__ */ i(
      "iframe",
      {
        className: `absolute left-0 top-0 h-full w-full ${M(l, "className").className || ""}`,
        src: c ?? "",
        title: s || "Video player",
        loading: "lazy",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: !0
      }
    ),
    a && /* @__PURE__ */ i("div", { ...t, className: "absolute top-0 h-full w-full" })
  ] });
}, Bt = (e) => {
  const { url: o, styles: t, controls: l, sources: r, poster: n, blockProps: a, title: s } = e;
  let c = n;
  const g = [...C(r, "srcsets", []) || []];
  o && typeof o == "string" && g.push({ url: o, width: 9999 });
  const m = g.sort((f, y) => f.width - y.width).filter((f) => !w(f.url) && !w(f.width));
  m.length === 0 && !c && (c = "https://placehold.co/300x200/EEE/ccc?text=Choose%20Video");
  const k = C(l, "autoplay", !1) || C(l, "muted", !0);
  return (c || !w(m)) && /* @__PURE__ */ i("div", { className: "relative w-full overflow-hidden", style: { paddingBottom: "56.25%" }, children: /* @__PURE__ */ x(
    "video",
    {
      ...t,
      ...a,
      title: s || "Video player",
      key: JSON.stringify(m),
      controls: C(l, "controls", !1),
      autoPlay: C(l, "autoplay", !1),
      loop: C(l, "loop", !1),
      poster: c,
      ...k ? { muted: !0 } : {}
    },
    m.map((f) => {
      if (!f.url || f.url.length < 4 || isNaN(f.width)) return null;
      const y = `(max-width: ${f.width}px)`;
      return /* @__PURE__ */ i("source", { src: f.url, media: y, type: f.type }, f.url);
    }),
    "Your browser does not support the video tag."
  ) });
}, St = (e) => {
  const { videoSource: o } = e;
  return o === "Custom" ? /* @__PURE__ */ i(Bt, { ...e }) : o === "Youtube" || o === "Vimeo" ? /* @__PURE__ */ i(Lt, { ...e }) : /* @__PURE__ */ h("div", { children: [
    "Invalid video source : ",
    o
  ] });
}, Nt = {
  type: "Video",
  label: "Video",
  category: "core",
  icon: ce,
  group: "media",
  props: u({
    properties: {
      styles: p("absolute h-full w-full object-cover"),
      videoSource: {
        type: "string",
        default: "Custom",
        enum: ["Custom", "Youtube", "Vimeo"],
        title: "Video source"
      },
      title: {
        type: "string",
        title: "Video Title",
        default: "Video player"
      }
    },
    allOf: [
      {
        if: {
          properties: {
            videoSource: { const: "Custom" }
          }
        },
        then: {
          properties: {
            url: {
              type: "string",
              title: "Video URL",
              default: ""
            },
            poster: {
              type: "string",
              title: "Poster URL",
              default: ""
            },
            sources: {
              type: "object",
              default: { srcsets: [] }
            },
            controls: { ...B }
          }
        }
      },
      {
        if: {
          properties: {
            videoSource: { const: "Youtube" }
          }
        },
        then: {
          properties: {
            url: {
              type: "string",
              title: "Youtube Video URL",
              default: ""
            },
            controls: { ...B }
          }
        }
      },
      {
        if: {
          properties: {
            videoSource: { const: "Vimeo" }
          }
        },
        then: {
          properties: {
            url: {
              type: "string",
              title: "Vimeo Video URL",
              default: ""
            },
            controls: { ...B }
          }
        }
      }
    ],
    ui: {
      url: { "ui:placeholder": "Enter Video URL" },
      sources: { "ui:field": "sources" },
      poster: { "ui:placeholder": "Enter poster URL" }
    }
  }),
  i18nProps: ["url", "title"]
}, _t = (e) => {
  const { paginationStyles: o } = e, t = ue("Pagination");
  return /* @__PURE__ */ i("div", { ...o, children: t ? b.createElement(t.component, { ...E(e, ["paginationStyles"]), blockProps: {} }) : /* @__PURE__ */ h(S, { children: [
    /* @__PURE__ */ i(
      "button",
      {
        className: "flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50",
        disabled: !0,
        children: /* @__PURE__ */ i(pe, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ i("button", { className: "flex h-9 w-9 items-center justify-center rounded-md border border-blue-500 bg-blue-500 font-medium text-white", children: "1" }),
    /* @__PURE__ */ i("button", { className: "flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 bg-white font-medium text-gray-700 hover:bg-gray-50", children: "2" }),
    /* @__PURE__ */ i("button", { className: "flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 bg-white font-medium text-gray-700 hover:bg-gray-50", children: "3" }),
    /* @__PURE__ */ i("button", { className: "flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 bg-white font-medium text-gray-700 hover:bg-gray-50", children: "4" }),
    /* @__PURE__ */ i("button", { className: "flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 bg-white font-medium text-gray-700 hover:bg-gray-50", children: "5" }),
    /* @__PURE__ */ i("button", { className: "flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 bg-white hover:bg-gray-50", children: /* @__PURE__ */ i(de, { className: "h-4 w-4" }) })
  ] }) });
}, Tt = (e) => {
  const { children: o, tag: t, styles: l, blockProps: r, $loading: n } = e, { pagination: a, inBuilder: s } = e;
  let c = o;
  return w(c) && s && (c = /* @__PURE__ */ i("div", { className: "col-span-3 flex items-center justify-center bg-orange-50 p-5 text-sm text-muted-foreground", children: "Choose a collection to display items" })), t === "none" ? n && s ? Array.from({ length: 2 }).map((g, m) => /* @__PURE__ */ h("div", { className: "animate-pulse rounded-md bg-primary/10 p-5", children: [
    /* @__PURE__ */ i("div", { className: "h-6 w-1/2 rounded-md bg-primary/10" }),
    /* @__PURE__ */ i("div", { className: "mt-2 h-4 w-1/2 rounded-md bg-primary/10" })
  ] }, m)) : c : /* @__PURE__ */ h(S, { children: [
    b.createElement(
      t,
      { ...r, ...l },
      n && s ? Array.from({ length: 2 }).map((g, m) => /* @__PURE__ */ h("div", { className: "animate-pulse rounded-md bg-primary/10 p-5", children: [
        /* @__PURE__ */ i("div", { className: "h-6 w-1/2 rounded-md bg-primary/10" }),
        /* @__PURE__ */ i("div", { className: "mt-2 h-4 w-1/2 rounded-md bg-primary/10" })
      ] }, m)) : c
    ),
    a && /* @__PURE__ */ i(
      _t,
      {
        ...M(e, [
          "limit",
          "totalItems",
          "paginationStrategy",
          "inBuilder",
          "draft",
          "lang",
          "paginationStyles"
        ])
      }
    )
  ] });
}, Rt = {
  type: "Repeater",
  label: "Repeater",
  icon: z,
  group: "basic",
  description: "Repeater block is used to display a list of items based on data binding in repeaterItems",
  dataProviderMode: "live",
  dataProviderDependencies: ["filter", "sort", "limit", "repeaterItems"],
  blocks: () => [
    { _id: "A", _type: "Repeater", tag: "ul" },
    { _id: "B", _name: "Repeater Item", _type: "RepeaterItem", parentTag: "ul", _parent: "A" }
  ],
  props: u({
    properties: {
      styles: p("grid gap-4 md:grid-cols-2 xl:grid-cols-3"),
      paginationStyles: p("flex items-center justify-center gap-2 p-4"),
      repeaterItems: {
        title: "Collection",
        type: "string",
        binding: "array",
        default: "",
        ui: {
          "ui:widget": "repeaterBinding",
          "ui:readonly": !0
        }
      },
      tag: {
        title: "Tag",
        type: "string",
        default: "ul",
        enum: ["none", "div", "ul", "ol"]
      },
      filter: {
        title: "Filter by",
        type: "string",
        default: "",
        ui: { "ui:widget": "collectionSelect" }
      },
      sort: {
        title: "Sort by",
        type: "string",
        default: "",
        ui: { "ui:widget": "collectionSelect" }
      },
      pagination: {
        title: "Pagination",
        type: "boolean",
        default: !1
      }
    },
    allOf: [
      {
        if: {
          properties: {
            pagination: { const: !0 }
          }
        },
        then: {
          properties: {
            paginationStrategy: {
              type: "string",
              title: "Pagination Strategy",
              default: "segment",
              enum: ["query", "segment"]
            },
            limit: {
              type: "number",
              title: "Items Per Page",
              default: 10,
              minimum: 1
            }
          }
        }
      },
      {
        if: {
          properties: {
            pagination: { const: !1 }
          }
        },
        then: {
          properties: {
            limit: {
              type: "number",
              title: "Max items",
              default: 10,
              minimum: 1
            }
          }
        }
      }
    ]
  }),
  canAcceptBlock: (e) => e === "Pagination"
}, At = ({
  children: e,
  blockProps: o,
  styles: t,
  parentTag: l,
  inBuilder: r
}) => {
  let n = "li";
  switch (l) {
    case "ul":
      n = "li";
      break;
    case "ol":
      n = "li";
      break;
    default:
      n = "div";
  }
  return !e && r ? b.createElement(
    n,
    { ...o, ...t },
    /* @__PURE__ */ i("div", { className: "col-span-3 flex items-center justify-center bg-orange-50 p-5 text-sm text-muted-foreground", children: "Add children to repeater item" })
  ) : b.createElement(n, { ...o, ...t }, e);
}, Et = {
  type: "RepeaterItem",
  label: "Repeater Item",
  icon: z,
  hidden: !0,
  group: "basic",
  props: u({
    properties: {
      styles: p(""),
      parentTag: me("Repeater", "tag")
    }
  }),
  canAcceptBlock: (e) => e !== "RepeaterItem",
  canDelete: () => !1,
  canMove: () => !1,
  canDuplicate: () => !1
}, Mt = ({
  children: e,
  blockProps: o,
  styles: t
}) => b.createElement("div", { ...o, ...t }, e), Ht = {
  type: "RepeaterEmptyState",
  label: "Empty State",
  hidden: !0,
  group: "basic",
  props: u({
    properties: { styles: p("p-5 flex items-center justify-center") }
  }),
  canAcceptBlock: () => !0,
  canDelete: () => !1,
  canMove: () => !1,
  canDuplicate: () => !1
}, Zt = () => {
  d(ye, ge), d(Ee, Me), d(be, fe), d(Ke, et), d(ft, ht), d(xt, wt), d(Ct, kt), d(dt, ut), d(mt, yt), d(gt, bt), d(Ie, Pe), d(ct, pt), d(St, Nt), d(he, Ce), d(ke, xe), d(vt, It), d(je, De), d(Ve, ze), d(Ue, Ze), d(He, $e), d(We, Oe), d(Ye, Qe), d(Je, Xe), d(qe, Ge), d(tt, ot), d(Re, Ae), d(we, ve), d(Le, Be), d(_e, Te), d(Se, Ne), d(Tt, Rt), d(At, Et), d(Mt, Ht);
};
export {
  Zt as loadWebBlocks
};
