var Bt = Object.defineProperty;
var St = (t, s, e) => s in t ? Bt(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e;
var _ = (t, s, e) => St(t, typeof s != "symbol" ? s + "" : s, e);
import { parse as Nt, stringify as R } from "himalaya";
import { memoize as Et, get as y, cloneDeep as Q, forEach as W, keys as V, isString as C, startsWith as $, isArray as q, isEmpty as v, includes as E, flatten as It, flatMapDeep as Ct, set as N, find as b, startCase as At, camelCase as ot, has as U, filter as lt, some as Wt, capitalize as Lt, compact as Pt, map as ht, trim as Ft, unset as z, each as Rt, last as Dt } from "lodash-es";
import { S as w, D as ct, C as jt } from "./STRINGS-BExFecZW.js";
import { g as Mt, c as G } from "./common-functions-D2lMFR6K.js";
import { f as Ht, j as Ot } from "./core-nSRy3D7z.js";
import { twMerge as Vt } from "tailwind-merge";
const gt = (t) => {
  if (t = t.replace(w, ""), !t) return { baseClasses: "", classes: "" };
  const s = t.split(/,(?![^\[]*\])/);
  if (s.length === 1)
    return { baseClasses: "", classes: s[0].trim() };
  const [e, ...a] = s;
  return {
    baseClasses: e.trim(),
    classes: a.join(",").trim().replace(/ +(?= )/g, "")
  };
};
import.meta.vitest && describe("getSplitChaiClasses", () => {
  it("should return the base classes and the classes", () => {
    const t = {
      ",styles-2": { baseClasses: "", classes: "styles-2" },
      "styles-1,styles-2": { baseClasses: "styles-1", classes: "styles-2" },
      ",bg-[linear-gradient(-10deg,black,transparent_100%)]": {
        baseClasses: "",
        classes: "bg-[linear-gradient(-10deg,black,transparent_100%)]"
      },
      "styles-1,bg-[linear-gradient(-10deg,black,transparent_100%)]": {
        baseClasses: "styles-1",
        classes: "bg-[linear-gradient(-10deg,black,transparent_100%)]"
      },
      someclass: {
        baseClasses: "",
        classes: "someclass"
      },
      ",bg-red-500 text-center   font-bold": {
        baseClasses: "",
        classes: "bg-red-500 text-center font-bold"
      },
      "bg-[linear-gradient(-10deg,black,transparent_100%)], bg-[linear-gradient(-10deg,black,transparent_100%)]": {
        baseClasses: "bg-[linear-gradient(-10deg,black,transparent_100%)]",
        classes: "bg-[linear-gradient(-10deg,black,transparent_100%)]"
      }
    };
    for (const [s, e] of Object.entries(t)) {
      const a = gt(`${w}${s}`);
      expect(a).toEqual(e);
    }
  });
});
function Ne(t, s, e) {
  const a = y(e, "i18nProps", []);
  if (v(s) || v(a)) return t;
  const n = Q(t);
  return W(V(n), (r) => {
    if (E(a, r) && !v(s)) {
      const o = y(n, r), i = y(n, `${r}-${s}`, "");
      C(o) ? n[r] = C(i) && !v(i.trim()) && i.trimStart() || o : n[r] = v(i) ? o : i;
    }
  }), n;
}
const yt = (t, s) => {
  const { baseClasses: e, classes: a } = gt(t), r = a.split(" ").filter((i) => i.startsWith(ct)).map((i) => {
    var p;
    return (p = s[i]) == null ? void 0 : p.value;
  }), o = a.split(" ").filter((i) => !i.startsWith(ct)).join(" ");
  return Vt.apply(null, [e, ...r, o]);
};
function qt(t, s) {
  return y(t, `${s}_attrs`, {});
}
function Ee(t, s = !0, e = {}) {
  const a = {};
  return Object.keys(t).forEach((n) => {
    if (C(t[n]) && t[n].startsWith(w)) {
      const r = yt(t[n], e), o = qt(t, n);
      a[n] = {
        ...!v(r) && { className: r },
        ...o,
        ...s ? {
          "data-style-prop": n,
          "data-block-parent": t._id,
          "data-style-id": `${n}-${t._id}`
        } : {}
      };
    }
  }), a;
}
const Ie = Et((t) => {
  var n;
  const s = Ht(t), e = ((n = s == null ? void 0 : s.props) == null ? void 0 : n.schema) || ((s == null ? void 0 : s.schema) ?? {}), a = y(e, "properties", {});
  return Object.fromEntries(Object.entries(a).filter(([, r]) => y(r, "runtime", !1)));
}), Ce = (t, s) => {
  if (!q(t)) return t;
  let e = t, a;
  return typeof s.limit == "number" && s.limit > 0 && (a = s.limit), a !== void 0 && (e = e.slice(0, a)), e;
}, Ae = (t, s) => {
  const e = Q(t);
  return W(V(e), (a) => {
    if (C(e[a]) && !$(a, "_")) {
      let n = e[a];
      a === "repeaterItems" && (e.repeaterItemsBinding = n);
      const r = /\{\{(.*?)\}\}/g, o = n.match(r);
      o && o.forEach((i) => {
        let p = i.slice(2, -2);
        const l = y(s, p, i);
        n = q(l) ? l : n.replace(i, l);
      }), e[a] = n;
    }
  }), e;
}, Ut = (t) => {
  const s = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/, e = /(?:https?:\/\/)?(?:www\.)?(player)?.vimeo\.com/;
  return s.test(t) || e.test(t);
}, zt = (t) => {
  if (v(t)) return t;
  const s = /<video[^>]+src=['"]([^'">]+)['"]/, e = /<iframe[^>]+src=['"]([^'">]+)['"]/, a = t.match(s), n = t.match(e), r = a ? a[1] : n ? n[1] : null, o = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/, i = /(?:https?:\/\/)?(?:www\.)?player.vimeo\.com/;
  return r && (o.test(r) || i.test(r)) ? r : t;
}, ft = ["chai-name", "data-chai-name"], Gt = {
  img: { alt: "alt", width: "width", height: "height", src: "image" },
  video: {
    src: "url",
    autoplay: "controls.autoPlay",
    muted: "controls.muted",
    loop: "controls.loop",
    controls: "controls.widgets"
  },
  a: {
    href: "link.href",
    target: "link.target",
    type: ""
    // @TODO: Detect here what to url, email, phone, elementId
  },
  input: {
    placeholder: "placeholder",
    required: "required",
    type: "inputType",
    name: "fieldName"
  },
  textarea: {
    placeholder: "placeholder",
    required: "required",
    type: "inputType",
    name: "fieldName"
  },
  select: {
    placeholder: "placeholder",
    required: "required",
    multiple: "multiple",
    name: "fieldName"
  },
  form: {
    action: "action"
  }
}, Xt = (t, s) => {
  var e;
  return ((e = t.children) == null ? void 0 : e.length) === 1 && E(
    ["Heading", "Paragraph", "Span", "ListItem", "Button", "Label", "TableCell", "Link", "RichText"],
    s._type
  );
}, X = (t) => t.map((s) => s.type === "text" ? y(s, "content", "") : v(s.children) ? "" : X(s.children || [])).join(""), O = (t) => t === null ? "" : t, mt = (t) => {
  const s = Pt(ht(t.split(/\s+/), Ft)), e = b(s, (i) => /^w-/.test(i)), a = b(s, (i) => /^h-/.test(i));
  if (!a || !e) return { height: "", width: "" };
  const n = (i) => {
    if (!i) return;
    const p = i.match(/^[wh]-(?:\[(.*?)\]|(.+))$/);
    if (!p) return;
    if (p[1]) return p[1];
    const l = p[2];
    return /^\d+(\.\d+)?$/.test(l) ? `${Number(l) * 4}px` : l === "auto" || E(l, "%") ? l : "16px";
  }, r = n(e), o = n(a);
  return {
    width: E(r, "px") ? r : "16px",
    height: E(o, "px") ? o : "16px"
  };
}, pt = (t) => {
  if (t.tagName === "svg") return {};
  const s = {}, e = Gt[t.tagName || ""] || {}, a = t.attributes || [];
  return W(a, ({ key: n, value: r }) => {
    var o;
    if (!E(ft, n))
      if (n === "bid" && (s._bid = O(r)), e[n]) {
        if (t.tagName === "img" && n === "src" && !r.startsWith("http")) {
          const i = b(t.attributes, { key: "width" }), p = b(t.attributes, { key: "height" });
          i && p ? r = `https://picsum.photos/${i == null ? void 0 : i.value}x${p == null ? void 0 : p.value}` : r = "https://picsum.photos/150x150";
        } else if (t.tagName === "a") {
          const i = b(t.attributes, { key: "href" });
          i && typeof (i == null ? void 0 : i.value) == "string" && ((o = i == null ? void 0 : i.value) != null && o.startsWith("pageType:")) && N(s, "link.type", "pageType");
        }
        N(s, e[n], O(r));
      } else E(["style", "class", "srcset", "bid"], n) || (s.styles_attrs = s.styles_attrs || {}, $(n, "@") && (n = n.replace("@", "x-on:")), s.styles_attrs[`${n}`] = O(r));
  }), delete s.class, s;
}, Yt = (t, s = "styles") => {
  if (!t.attributes) return { [s]: `${w},` };
  const e = b(t.attributes, { key: "class" });
  if (e) {
    const a = e.value;
    return { [s]: `${w},${a}` };
  }
  return { [s]: `${w},` };
}, Zt = (t) => {
  const s = y(t, "attributes", []), e = s.find((l) => l.key === "data-chai-richtext" || l.key === "chai-richtext"), a = s.find((l) => l.key === "data-chai-lightbox" || l.key === "chai-lightbox"), n = s.find((l) => l.key === "data-chai-dropdown" || l.key === "chai-dropdown"), r = s.find(
    (l) => l.key === "data-chai-dropdown-button" || l.key === "chai-dropdown-button"
  ), o = s.find(
    (l) => l.key === "data-chai-dropdown-content" || l.key === "chai-dropdown-content"
  ), i = s.find((l) => l.key === "class"), p = i && i.value.split(/\s+/).includes("rte");
  if (n)
    return { _type: "Dropdown" };
  if (r)
    return { _type: "DropdownButton" };
  if (o)
    return { _type: "DropdownContent" };
  if (e || p)
    return { _type: "Paragraph" };
  if (a)
    return { _type: "LightBoxLink" };
  switch (t.tagName) {
    // self closing tags
    case "img":
      return { _type: "Image" };
    case "input":
      return { _type: "Input", showLabel: !1 };
    // showLabel: hiding default block label
    case "hr":
      return { _type: "Divider" };
    case "br":
      return { _type: "LineBreak" };
    case "textarea":
      return { _type: "TextArea", showLabel: !1 };
    case "audio":
      return { _type: "Audio" };
    case "canvas":
      return { _type: "Canvas" };
    case "video":
    case "iframe":
      return { _type: "CustomHTML" };
    case "svg":
      return { _type: "Icon" };
    // non self closing tags
    // fixed structure
    case "select":
      return { _type: "Select", options: [] };
    case "option":
      return { _type: "Option" };
    case "ul":
    case "ol":
    case "dl":
      return {
        _type: "List",
        tag: t.tagName,
        _listType: t.tagName === "ol" ? "list-decimal" : "list-none"
      };
    case "li":
    case "dt":
      return { _type: "ListItem", tag: t.tagName };
    // non self closing tags
    // free flow structure
    case "span":
    case "figcaption":
    case "legend":
      return { _type: "Span", tag: t.tagName };
    case "p":
      return { _type: "Paragraph", content: "" };
    case "a":
      return { _type: "Link" };
    case "form":
      return { _type: "Form" };
    case "label":
      return { _type: "Label" };
    case "button":
      return { _type: "Button" };
    case "code":
      return { _type: "Box", _name: "Code" };
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return { _type: "Heading", tag: t.tagName };
    case "table":
      return { _type: "Table" };
    case "tr":
      return { _type: "TableRow" };
    case "td":
    case "th":
      return { _type: "TableCell", tag: t.tagName };
    case "thead":
      return { _type: "TableHead" };
    case "tbody":
      return { _type: "TableBody" };
    case "tfoot":
      return { _type: "TableFooter" };
    default: {
      const l = y(t, "children", []).length > 0 ? "Box" : "EmptyBox";
      return {
        _type: l,
        tag: t.tagName,
        _name: l == "EmptyBox" || t.tagName === "div" ? l : Lt(t.tagName)
      };
    }
  }
}, Y = (t, s = null) => Ct(t, (e) => {
  var A, x, I, B, L, tt, et, st, nt, at;
  if (e.type === "comment") return [];
  let a = { _id: Mt() };
  if (s && (a._parent = s.block._id), e.type === "text")
    return v(y(e, "content", "")) ? [] : s && Xt(s.node, s.block) ? (N(s, "block.content", y(e, "content", "")), []) : { ...a, _type: "Text", content: y(e, "content", "") };
  if ($(e.tagName, "chai-")) {
    const c = e.attributes || [], u = b(c, { key: "chai-type" }), h = (u == null ? void 0 : u.value) || At(ot(e.tagName || "")).replace(/ /g, "").replace(/\s+/g, "");
    a._type = h, W(c, ({ key: k, value: rt }) => {
      if (k === "about-this-component" || k === "chai-type" || k === "can-move" || k === "can-delete") return;
      if (k === "id") {
        a._id = rt;
        return;
      }
      const $t = $(k, "_") ? k : ot(k);
      let P = O(rt);
      typeof P == "string" && $(P, "#styles:") && (P = P.replace("#styles:", "#styles:,")), a[$t] = P;
    });
    const m = Y(e.children || [], { block: a, node: e });
    return [a, ...m];
  }
  const n = y(e, "attributes", []), r = e.tagName === "p" || n.find((c) => c.key === "data-chai-richtext" || c.key === "chai-richtext"), o = n.find((c) => c.key === "class"), i = o && o.value.split(/\s+/).includes("rte"), p = n.find(
    (c) => c.key === "data-chai-lightbox" || c.key === "chai-lightbox"
  ), l = n.find(
    (c) => c.key === "data-chai-dropdown" || c.key === "chai-dropdown"
  ), f = n.find(
    (c) => c.key === "data-chai-dropdown-button" || c.key === "chai-dropdown-button"
  ), d = n.find(
    (c) => c.key === "data-chai-dropdown-content" || c.key === "chai-dropdown-content"
  );
  if (a = {
    ...a,
    ...Zt(e),
    ...pt(e),
    ...Yt(e)
  }, e.attributes) {
    const c = e.attributes.find((u) => E(ft, u.key));
    c && (a._name = c.value);
  }
  if (r || i)
    return a.content = `<p>${R(e.children || [])}</p>`, U(a, "styles_attrs.data-chai-richtext") && delete a.styles_attrs["data-chai-richtext"], U(a, "styles_attrs.chai-richtext") && delete a.styles_attrs["chai-richtext"], [a];
  if (p) {
    const c = [
      "data-chai-lightbox",
      "chai-lightbox",
      "data-vbtype",
      "data-autoplay",
      "data-maxwidth",
      "data-overlay",
      "data-gall",
      "href"
    ];
    a = {
      ...a,
      href: ((A = n.find((u) => u.key === "href")) == null ? void 0 : A.value) || "",
      hrefType: ((x = n.find((u) => u.key === "data-vbtype")) == null ? void 0 : x.value) || "video",
      autoplay: ((I = n.find((u) => u.key === "data-autoplay")) == null ? void 0 : I.value) === "true" ? "true" : "false",
      maxWidth: ((L = (B = n.find((u) => u.key === "data-maxwidth")) == null ? void 0 : B.value) == null ? void 0 : L.replace("px", "")) || "",
      backdropColor: ((tt = n.find((u) => u.key === "data-overlay")) == null ? void 0 : tt.value) || "",
      galleryName: ((et = n.find((u) => u.key === "data-gall")) == null ? void 0 : et.value) || ""
    }, W(c, (u) => {
      U(a, `styles_attrs.${u}`) && delete a.styles_attrs[u];
    });
  }
  if (l && (delete a.styles_attrs, a.showDropdown = !1), d && delete a.styles_attrs, f) {
    delete a.styles_attrs;
    const c = lt(e.children || [], (h) => (h == null ? void 0 : h.tagName) !== "span");
    a.content = X(c);
    const u = b(
      e.children || [],
      (h) => (h == null ? void 0 : h.tagName) === "span" && Wt(h.children || [], (m) => (m == null ? void 0 : m.tagName) === "svg")
    );
    if (u) {
      const h = b(u.children || [], (m) => (m == null ? void 0 : m.tagName) === "svg");
      if (h) {
        a.icon = R([h]);
        const { height: m, width: k } = Jt(h, "16px", "16px");
        a.iconHeight = m, a.iconWidth = k;
      }
    }
    return [a];
  }
  if (a._type === "Input") {
    const c = a.inputType || "text";
    c === "checkbox" ? N(a, "_type", "Checkbox") : c === "radio" && N(a, "_type", "Radio");
  } else if (e.tagName === "video" || e.tagName === "iframe") {
    const c = R([e]);
    return Ut(c) && (N(a, "_type", "Video"), N(a, "url", zt(c)), N(a, "styles", `${w},`), N(a, "controls", { autoPlay: !1, muted: !0, loop: !1, controls: !1 })), a.content = c, [a];
  } else if (e.tagName === "svg") {
    const c = y(b(e.attributes, { key: "class" }), "value", ""), { height: u, width: h } = mt(c);
    if (u && h)
      a.styles = `${w}, ${G(`w-${h} h-${u}`, c)}`.trim(), a.height = u == null ? void 0 : u.replace("px", ""), a.width = h == null ? void 0 : h.replace("px", "");
    else {
      const m = (st = b(e.attributes, { key: "height" })) == null ? void 0 : st.value, k = (nt = b(e.attributes, { key: "width" })) == null ? void 0 : nt.value;
      m && k ? (a.styles = `${w}, ${G(`w-[${k}px] h-[${m}px]`, c)}`.trim(), a.height = m, a.width = k) : a.styles = `${w}, ${G("w-full h-full", c)}`.trim();
    }
    return e.attributes = lt(e.attributes, (m) => !E(["style", "width", "height", "class"], m.key)), a.icon = R([e]), [a];
  } else if (e.tagName == "option" && s && ((at = s.block) == null ? void 0 : at._type) === "Select")
    return s.block.options.push({
      label: X(e.children || []),
      ...pt(e)
    }), [];
  const g = Y(e.children || [], { block: a, node: e });
  return [a, ...g];
}), Jt = (t, s, e) => {
  var p, l;
  const a = y(t, "attributes", []), { height: n, width: r } = mt(
    y(b(a, { key: "class" }), "value", "")
  );
  if (n && r)
    return {
      height: `[${n}px]`,
      width: `[${r}px]`
    };
  const o = (p = b(a, { key: "height" })) == null ? void 0 : p.value, i = (l = b(a, { key: "width" })) == null ? void 0 : l.value;
  return {
    height: o ? `[${o}px]` : e,
    width: i ? `[${i}px]` : s
  };
}, Qt = (t) => {
  t = t.replace(/(\w+)=\\?"(.*?)\\?"/g, (a, n, r) => {
    let o = r.replace(/\\"/g, '"');
    return o = o.replace(/{([^}]+)}/g, (i) => i.replace(/"/g, '\\"')), `${n}="${o.replace(/\\"/g, '"')}"`;
  }), t = t.replace(/\\n/g, " ").replace(/\\\\/g, "").replace(/\\([/<>])/g, "$1").replace(/\\./g, "").replace(/[\n\r\t\f\v]/g, " "), t = t.replace(/\$name="[^"]*"/g, "");
  const s = t.match(/<body[^>]*>[\s\S]*?<\/body>/);
  return (s && s.length > 0 ? s[0].replace(/<body/, "<div").replace(/<\/body>/, "</div>") : t).replace(/\s+/g, " ").replaceAll("> <", "><").replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").trim();
}, Kt = (t, s) => b(t, { _id: s }), We = (t, s) => v(s) ? t.map((e) => (z(e, "_bid"), e)) : ht(t, (e) => {
  const a = v(e._bid) ? void 0 : Kt(s, e._bid);
  if (a) {
    a._type === "Icon" && y(e, "icon", "").match(/chai-default-svg/) && delete e.icon;
    const n = { ...a, ...e };
    return z(n, "_bid"), n;
  }
  return z(e, "_bid"), e;
}), Le = (t) => {
  const s = Nt(Qt(t));
  if (v(t)) return [];
  const e = It(Y(s));
  return Ot(e);
}, T = (t, s) => t.map((e) => {
  const a = V(e).filter((n) => C(e[n]) && e[n].startsWith(w));
  return Rt(a, (n) => {
    e[n] = `${w},${yt(e[n], s)}`;
  }), e;
});
import.meta.vitest && describe("applyDesignTokens", () => {
  const t = {
    "dt#token1": { name: "primary-color", value: "bg-blue-500" },
    "dt#token2": { name: "text-size", value: "text-lg" },
    "dt#token3": { name: "spacing", value: "p-4" }
  }, s = [
    {
      _id: "block1",
      _type: "div",
      styles: "#styles:,dt#token1 bg-white text-sm",
      className: "#styles:,dt#token2 dt#token3",
      otherProp: "not-a-style",
      _name: "Test Block"
    },
    {
      _id: "block2",
      _type: "button",
      styles: "#styles:bg-red-500",
      nonStringProp: 123,
      _name: "Button Block"
    },
    {
      _id: "block3",
      _type: "span",
      noStyles: "regular-string",
      _name: "No Styles Block"
    }
  ];
  it("should process blocks and replace style properties with generated class names", () => {
    const e = T(s, t);
    expect(e).toHaveLength(3), expect(e[0].styles).toBe("#styles:,bg-white text-sm"), expect(e[0].className).toBe("#styles:,text-lg p-4"), expect(e[0].otherProp).toBe("not-a-style"), expect(e[0]._id).toBe("block1"), expect(e[0]._type).toBe("div");
  }), it("should handle blocks with no style properties", () => {
    const e = T(s, t);
    expect(e[2].noStyles).toBe("regular-string"), expect(e[2]._id).toBe("block3");
  }), it("should handle empty blocks array", () => {
    const e = T([], t);
    expect(e).toEqual([]);
  }), it("should handle empty design tokens", () => {
    const e = T(s, {});
    expect(e[0].styles).toBe("#styles:,bg-white text-sm");
  }), it("should handle blocks with only style prefix", () => {
    const a = T([
      {
        _id: "block1",
        _type: "div",
        styles: "#styles:",
        _name: "Prefix Only"
      }
    ], t);
    expect(a[0].styles).toBe("#styles:,");
  }), it("should handle blocks with multiple style properties", () => {
    const a = T([
      {
        _id: "block1",
        _type: "div",
        styles: "#styles:bg-white dt#token1",
        hoverStyles: "#styles:bg-gray-100 dt#token2",
        focusStyles: "#styles:outline-none dt#token3",
        _name: "Multi Style"
      }
    ], t);
    expect(a[0].styles).toBe("#styles:,bg-white"), expect(a[0].hoverStyles).toBe("#styles:,text-lg bg-gray-100"), expect(a[0].focusStyles).toBe("#styles:,p-4 outline-none");
  }), it("should not modify non-string properties that start with #styles:", () => {
    const a = T([
      {
        _id: "block1",
        _type: "div",
        styles: "#styles:bg-white",
        objectStyles: { startsWith: "#styles:" },
        arrayStyles: ["#styles:bg-red-500"],
        _name: "Non String Styles"
      }
    ], t);
    expect(a[0].styles).toBe("#styles:,bg-white"), expect(a[0].objectStyles).toEqual({ startsWith: "#styles:" }), expect(a[0].arrayStyles).toEqual(["#styles:bg-red-500"]);
  }), it("should handle undefined and null values", () => {
    const a = T([
      {
        _id: "block1",
        _type: "div",
        styles: "#styles:bg-white",
        nullStyles: null,
        undefinedStyles: void 0,
        _name: " Null Undefined"
      }
    ], t);
    expect(a[0].styles).toBe("#styles:,bg-white"), expect(a[0].nullStyles).toBeNull(), expect(a[0].undefinedStyles).toBeUndefined();
  }), it("should preserve block structure and non-style properties", () => {
    T(s, t).forEach((a, n) => {
      expect(a._id).toBe(s[n]._id), expect(a._type).toBe(s[n]._type), expect(a._name).toBe(s[n]._name);
    });
  }), it("should handle complex design token values", () => {
    const n = T([
      {
        _id: "block1",
        _type: "div",
        styles: "#styles:bg-white dt#complex1",
        _name: "Complex Tokens"
      }
    ], {
      "dt#complex1": { name: "complex-token", value: "hover:bg-blue-600 focus:outline-none transition-colors" },
      "dt#complex2": { name: "spacing-token", value: "px-6 py-3 m-2" }
    });
    expect(n[0].styles).toBe("#styles:,hover:bg-blue-600 focus:outline-none transition-colors bg-white");
  }), it("should handle tokens with empty values", () => {
    const n = T([
      {
        _id: "block1",
        _type: "div",
        styles: "#styles:bg-white dt#empty1 dt#valid1",
        _name: "Empty Value Tokens"
      }
    ], {
      "dt#empty1": { name: "empty-token", value: "" },
      "dt#valid1": { name: "valid-token", value: "bg-green-500" }
    });
    expect(n[0].styles).toBe("#styles:,bg-white");
  });
});
const S = (t) => {
  const s = Dt(t);
  return t.map((e) => {
    const a = Object.keys(e);
    for (let n = 0; n < a.length; n++)
      if (C(e[a[n]]) && $(a[n], "content")) {
        const r = e === s ? "" : " ";
        e[a[n]] = `${e[a[n]].trim()}${r}`;
      }
    return e;
  });
};
if (import.meta.vitest) {
  const { describe: t, it: s, expect: e } = import.meta.vitest;
  t("adjustSpacingInContentBlocks", () => {
    s("should add space after content fields except for the last block", () => {
      const n = S([
        { _id: "1", _type: "Text", content: "First" },
        { _id: "2", _type: "Text", content: "Second" },
        { _id: "3", _type: "Text", content: "Third" }
      ]);
      e(n[0].content).toBe("First "), e(n[1].content).toBe("Second "), e(n[2].content).toBe("Third");
    }), s("should trim whitespace from content before adding space", () => {
      const n = S([
        { _id: "1", _type: "Text", content: "  First  " },
        { _id: "2", _type: "Text", content: "  Second  " }
      ]);
      e(n[0].content).toBe("First "), e(n[1].content).toBe("Second");
    }), s("should handle multiple content fields in a single block", () => {
      const n = S([
        { _id: "1", _type: "Text", content: "Main", contentAlt: "Alt" },
        { _id: "2", _type: "Text", content: "Last", contentSecondary: "Secondary" }
      ]);
      e(n[0].content).toBe("Main "), e(n[0].contentAlt).toBe("Alt "), e(n[1].content).toBe("Last"), e(n[1].contentSecondary).toBe("Secondary");
    }), s("should only process fields that start with 'content'", () => {
      const n = S([
        { _id: "1", _type: "Text", content: "Text", title: "Title", text: "Text" },
        { _id: "2", _type: "Text", content: "Last" }
      ]);
      e(n[0].content).toBe("Text "), e(n[0].title).toBe("Title"), e(n[0].text).toBe("Text"), e(n[1].content).toBe("Last");
    }), s("should handle empty array", () => {
      const n = S([]);
      e(n).toEqual([]);
    }), s("should handle single block", () => {
      const n = S([{ _id: "1", _type: "Text", content: "Only" }]);
      e(n[0].content).toBe("Only");
    }), s("should handle blocks without content fields", () => {
      const n = S([
        { _id: "1", _type: "Container", title: "Title" },
        { _id: "2", _type: "Container", name: "Name" }
      ]);
      e(n[0].title).toBe("Title"), e(n[1].name).toBe("Name");
    }), s("should handle blocks with non-string content fields", () => {
      const n = S([
        { _id: "1", _type: "Text", content: "Text", contentNum: 123 },
        { _id: "2", _type: "Text", content: "Last", contentBool: !0 }
      ]);
      e(n[0].content).toBe("Text "), e(n[0].contentNum).toBe(123), e(n[1].content).toBe("Last"), e(n[1].contentBool).toBe(!0);
    }), s("should handle empty string content", () => {
      const n = S([
        { _id: "1", _type: "Text", content: "" },
        { _id: "2", _type: "Text", content: "Last" }
      ]);
      e(n[0].content).toBe(" "), e(n[1].content).toBe("Last");
    });
  });
}
var K = class extends Error {
  constructor(t) {
    super(t), this.name = "Eta Error";
  }
}, _t = class extends K {
  constructor(t) {
    super(t), this.name = "EtaParser Error";
  }
}, te = class extends K {
  constructor(t) {
    super(t), this.name = "EtaRuntime Error";
  }
}, ee = class extends K {
  constructor(t) {
    super(t), this.name = "EtaNameResolution Error";
  }
};
function F(t, s, e) {
  let a = s.slice(0, e).split(/\n/), n = a.length, r = a[n - 1].length + 1;
  throw t += " at line " + n + " col " + r + `:

  ` + s.split(/\n/)[n - 1] + `
  ` + Array(r).join(" ") + "^", new _t(t);
}
function se(t, s, e, a) {
  let n = s.split(`
`), r = Math.max(e - 3, 0), o = Math.min(n.length, e + 3), i = a, p = n.slice(r, o).map((f, d) => {
    let g = d + r + 1;
    return (g === e ? " >> " : "    ") + g + "| " + f;
  }).join(`
`), l = new te((i ? i + ":" + e + `
` : "line " + e + `
`) + p + `

` + t.message);
  throw l.name = t.name, l.cause = t, l;
}
const ne = (async () => {
}).constructor;
function ae(t, s) {
  let e = this.config, a = s != null && s.async ? ne : Function;
  try {
    return new a(e.varName, "options", this.compileToString.call(this, t, s));
  } catch (n) {
    throw n instanceof SyntaxError ? new _t(`Bad template syntax

` + n.message + `
` + Array(n.message.length + 1).join("=") + `
` + this.compileToString.call(this, t, s) + `
`) : n;
  }
}
function re(t, s) {
  let e = this.config, a = s == null ? void 0 : s.async, n = this.compileBody, r = this.parse.call(this, t), o = `${e.functionHeader}
let include = (__eta_t, __eta_d) => this.render(__eta_t, {...${e.varName}, ...(__eta_d ?? {})}, options);
let includeAsync = (__eta_t, __eta_d) => this.renderAsync(__eta_t, {...${e.varName}, ...(__eta_d ?? {})}, options);

let __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction${e.debug ? ', line: 1, templateStr: "' + t.replace(/\\|"/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n") + '"' : ""}};

function layout(path, data) {
  __eta.layout = path;
  __eta.layoutData = data;
}${e.debug ? "try {" : ""}${e.useWith ? "with(" + e.varName + "||{}){" : ""}

function ${e.outputFunctionName}(s){__eta.res+=s;}

${n.call(this, r)}
if (__eta.layout) {
  __eta.res = ${a ? "await includeAsync" : "include"} (__eta.layout, {...${e.varName}, body: __eta.res, ...__eta.layoutData});
}
${e.useWith ? "}" : ""}${e.debug ? "} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }" : ""}
return __eta.res;
`;
  if (e.plugins) for (let i = 0; i < e.plugins.length; i++) {
    let p = e.plugins[i];
    p.processFnString && (o = p.processFnString(o, e));
  }
  return o;
}
function ie(t) {
  let s = this.config, e = 0, a = t.length, n = "";
  for (; e < a; e++) {
    let r = t[e];
    if (typeof r == "string") n += "__eta.res+='" + r + `';
`;
    else {
      let o = r.t, i = r.val || "";
      s.debug && (n += "__eta.line=" + r.lineNo + `
`), o === "r" ? (s.autoFilter && (i = "__eta.f(" + i + ")"), n += "__eta.res+=" + i + `;
`) : o === "i" ? (s.autoFilter && (i = "__eta.f(" + i + ")"), s.autoEscape && (i = "__eta.e(" + i + ")"), n += "__eta.res+=" + i + `;
`) : o === "e" && (n += i + `
`);
    }
  }
  return n;
}
function oe(t, s, e, a) {
  let n, r;
  return Array.isArray(s.autoTrim) ? (n = s.autoTrim[1], r = s.autoTrim[0]) : n = r = s.autoTrim, (e || e === !1) && (n = e), (a || a === !1) && (r = a), !r && !n ? t : n === "slurp" && r === "slurp" ? t.trim() : (n === "_" || n === "slurp" ? t = t.trimStart() : (n === "-" || n === "nl") && (t = t.replace(/^(?:\r\n|\n|\r)/, "")), r === "_" || r === "slurp" ? t = t.trimEnd() : (r === "-" || r === "nl") && (t = t.replace(/(?:\r\n|\n|\r)$/, "")), t);
}
const le = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
function ce(t) {
  return le[t];
}
function pe(t) {
  let s = String(t);
  return /[&<>"']/.test(s) ? s.replace(/[&<>"']/g, ce) : s;
}
const ut = { autoEscape: !0, autoFilter: !1, autoTrim: [!1, "nl"], cache: !1, cacheFilepaths: !0, debug: !1, escapeFunction: pe, filterFunction: (t) => String(t), outputFunctionName: "output", functionHeader: "", parse: { exec: "", interpolate: "=", raw: "~" }, plugins: [], rmWhitespace: !1, tags: ["<%", "%>"], useWith: !1, varName: "it", defaultExtension: ".eta" }, D = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g, j = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g, M = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
function H(t) {
  return t.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function ue(t, s) {
  return t.slice(0, s).split(`
`).length;
}
function de(t) {
  let s = this.config, e = [], a = !1, n = 0, r = s.parse;
  if (s.plugins) for (let d = 0; d < s.plugins.length; d++) {
    let g = s.plugins[d];
    g.processTemplate && (t = g.processTemplate(t, s));
  }
  s.rmWhitespace && (t = t.replace(/[\r\n]+/g, `
`).replace(/^\s+|\s+$/gm, "")), D.lastIndex = 0, j.lastIndex = 0, M.lastIndex = 0;
  function o(d, g) {
    d && (d = oe(d, s, a, g), d && (d = d.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), e.push(d)));
  }
  let i = [r.exec, r.interpolate, r.raw].reduce((d, g) => d && g ? d + "|" + H(g) : g ? H(g) : d, ""), p = RegExp(H(s.tags[0]) + "(-|_)?\\s*(" + i + ")?\\s*", "g"), l = RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + H(s.tags[1]) + ")", "g"), f;
  for (; f = p.exec(t); ) {
    let d = t.slice(n, f.index);
    n = f[0].length + f.index;
    let g = f[1], A = f[2] || "";
    o(d, g), l.lastIndex = n;
    let x, I = !1;
    for (; x = l.exec(t); ) if (x[1]) {
      let B = t.slice(n, x.index);
      p.lastIndex = n = l.lastIndex, a = x[2], I = { t: A === r.exec ? "e" : A === r.raw ? "r" : A === r.interpolate ? "i" : "", val: B };
      break;
    } else {
      let B = x[0];
      if (B === "/*") {
        let L = t.indexOf("*/", l.lastIndex);
        L === -1 && F("unclosed comment", t, x.index), l.lastIndex = L;
      } else B === "'" ? (j.lastIndex = x.index, j.exec(t) ? l.lastIndex = j.lastIndex : F("unclosed string", t, x.index)) : B === '"' ? (M.lastIndex = x.index, M.exec(t) ? l.lastIndex = M.lastIndex : F("unclosed string", t, x.index)) : B === "`" && (D.lastIndex = x.index, D.exec(t) ? l.lastIndex = D.lastIndex : F("unclosed string", t, x.index));
    }
    I ? (s.debug && (I.lineNo = ue(t, f.index)), e.push(I)) : F("unclosed tag", t, f.index);
  }
  if (o(t.slice(n, t.length), !1), s.plugins) for (let d = 0; d < s.plugins.length; d++) {
    let g = s.plugins[d];
    g.processAST && (e = g.processAST(e, s));
  }
  return e;
}
function bt(t, s) {
  let e = s != null && s.async ? this.templatesAsync : this.templatesSync;
  if (this.resolvePath && this.readFile && !t.startsWith("@")) {
    let a = s.filepath, n = e.get(a);
    if (this.config.cache && n) return n;
    {
      let r = this.readFile(a), o = this.compile(r, s);
      return this.config.cache && e.define(a, o), o;
    }
  } else {
    let a = e.get(t);
    if (a) return a;
    throw new ee(`Failed to get template '${t}'`);
  }
}
function xt(t, s, e) {
  let a, n = { ...e, async: !1 };
  return typeof t == "string" ? (this.resolvePath && this.readFile && !t.startsWith("@") && (n.filepath = this.resolvePath(t, n)), a = bt.call(this, t, n)) : a = t, a.call(this, s, n);
}
function kt(t, s, e) {
  let a, n = { ...e, async: !0 };
  typeof t == "string" ? (this.resolvePath && this.readFile && !t.startsWith("@") && (n.filepath = this.resolvePath(t, n)), a = bt.call(this, t, n)) : a = t;
  let r = a.call(this, s, n);
  return Promise.resolve(r);
}
function he(t, s) {
  let e = this.compile(t, { async: !1 });
  return xt.call(this, e, s);
}
function ge(t, s) {
  let e = this.compile(t, { async: !0 });
  return kt.call(this, e, s);
}
var dt = class {
  constructor(t) {
    this.cache = t;
  }
  define(t, s) {
    this.cache[t] = s;
  }
  get(t) {
    return this.cache[t];
  }
  remove(t) {
    delete this.cache[t];
  }
  reset() {
    this.cache = {};
  }
  load(t) {
    this.cache = { ...this.cache, ...t };
  }
}, ye = class {
  constructor(t) {
    _(this, "config");
    _(this, "RuntimeErr", se);
    _(this, "compile", ae);
    _(this, "compileToString", re);
    _(this, "compileBody", ie);
    _(this, "parse", de);
    _(this, "render", xt);
    _(this, "renderAsync", kt);
    _(this, "renderString", he);
    _(this, "renderStringAsync", ge);
    _(this, "filepathCache", {});
    _(this, "templatesSync", new dt({}));
    _(this, "templatesAsync", new dt({}));
    _(this, "resolvePath", null);
    _(this, "readFile", null);
    t ? this.config = { ...ut, ...t } : this.config = { ...ut };
  }
  configure(t) {
    this.config = { ...this.config, ...t };
  }
  withConfig(t) {
    return { ...this, config: { ...this.config, ...t } };
  }
  loadTemplate(t, s, e) {
    if (typeof s == "string") (e != null && e.async ? this.templatesAsync : this.templatesSync).define(t, this.compile(s, e));
    else {
      let a = this.templatesSync;
      (s.constructor.name === "AsyncFunction" || e != null && e.async) && (a = this.templatesAsync), a.define(t, s);
    }
  }
}, fe = class extends ye {
};
const Z = /\{\{(.*?)\}\}/g, vt = /^[\w$][\w$.]*$/, me = new fe({
  tags: ["{{", "}}"],
  autoEscape: !0,
  autoTrim: !1,
  useWith: !0,
  parse: { interpolate: "", exec: "~", raw: "~" },
  functionHeader: 'const safeGet = (obj, path) => { const parts = path.split("."); let val = obj; for (const p of parts) { if (val == null) return undefined; val = val[p]; } return val; };'
}), wt = (t, s, e) => {
  const a = e.slice(2, -2).trim();
  return s !== -1 && $(t, "$index.") ? `${a}.${s}.${t.slice(7)}` : s !== -1 && $(t, "$index") ? `${a}.${s}` : t;
}, _e = (t, s, e) => {
  if (s === -1 || !e) return t;
  const a = e.slice(2, -2).trim();
  return t.replace(/\$index\./g, `safeGet(it, "${a}.${s}").`).replace(/\$index/g, `safeGet(it, "${a}.${s}")`);
}, be = (t, s, e) => t.replace(Z, (a, n) => {
  const r = n.trim();
  return r ? vt.test(r) ? `{{safeGet(it, "${wt(r, s, e)}") ?? ""}}` : `{{${_e(r, s, e)}}}` : '{{""}}';
}), xe = (t, s, e, a) => {
  try {
    return me.renderString(be(t, e, a), s);
  } catch {
    return "";
  }
}, Tt = (t, s, e, a, n) => {
  Z.lastIndex = 0;
  const r = t.match(Z);
  if (!r) return t;
  const o = n === "image" || n === "mobileImage";
  for (const i of r) {
    const p = i.slice(2, -2).trim();
    if (!vt.test(p)) continue;
    const l = wt(p, e, a), f = y(s, l);
    if (q(f) || o && f !== void 0) return f;
  }
  return xe(t, s, e, a);
}, Pe = (t, s) => Tt(t, s, -1, ""), J = (t, s, { index: e, key: a }, n) => {
  if (C(t))
    return Tt(t, s, e, a, n);
  if (q(t))
    return t.map((r) => J(r, s, { index: e, key: a }, n));
  if (t && typeof t == "object") {
    const r = {};
    return W(V(t), (o) => {
      !$(o, "_") && o !== "$repeaterItemsKey" ? r[o] = J(
        t[o],
        s,
        { index: e, key: a },
        o
      ) : r[o] = t[o];
    }), r;
  }
  return t;
}, Fe = (t, s, { index: e, key: a }) => {
  let n = Q(t);
  return n.repeaterItems && (n.$repeaterItemsKey = n.repeaterItems, $(n.repeaterItems, `{{${jt}`) && (n.$repeaterItemsKey = n.repeaterItems = `${n.repeaterItems.replace("}}", `/${n._id}}}`)}`), !v(n.repeaterItems) && n.pagination && (n.repeaterTotalItems = `${n.repeaterItems.replace("}}", `/${n._id}/totalItems}}`)}`)), J(n, s, { index: e, key: a });
};
export {
  Fe as a,
  Ne as b,
  Ee as c,
  Ie as d,
  Ce as e,
  S as f,
  Le as g,
  gt as h,
  Ae as i,
  T as j,
  fe as k,
  We as m,
  Pe as r
};
