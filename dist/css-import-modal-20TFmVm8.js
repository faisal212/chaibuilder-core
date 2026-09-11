import { jsx as i, jsxs as u } from "react/jsx-runtime";
import * as x from "react";
import { useTranslation as T } from "react-i18next";
import { B as y } from "./register-chai-top-bar-DWmJ2efT.js";
import { D as V, e as N, f as R, g as E, o as D, p as I, T as A, q as P } from "./index-z9dYL-7R.js";
import "lodash-es";
import * as b from "culori";
import { a as H } from "./fonts-B3UYxuJI.js";
const d = (o) => o ? o % 1 === 0 ? o : o.toFixed(4) : "0", L = (o) => `hsl(${d(o.h)} ${d(o.s * 100)}% ${d(o.l * 100)}%)`, M = (o, e = "hsl", s = "4") => {
  try {
    const r = b.parse(o);
    if (!r) throw new Error("Invalid color input");
    switch (e) {
      case "hsl": {
        const t = b.converter("hsl")(r);
        return s === "4" ? L(t) : `${d(t.h)} ${d(t.s * 100)}% ${d(t.l * 100)}%`;
      }
      case "rgb":
        return b.formatRgb(r);
      case "oklch": {
        const t = b.converter("oklch")(r);
        return `oklch(${d(t.l)} ${d(t.c)} ${d(t.h)})`;
      }
      case "hex":
        return b.formatHex(r);
      default:
        return o;
    }
  } catch (r) {
    return console.error(`Failed to convert color: ${o}`, r), o;
  }
}, S = (o) => M(o, "hex"), z = (o) => {
  const e = {
    fontFamily: {
      heading: "",
      body: ""
    },
    borderRadius: "",
    colors: {}
  };
  try {
    const s = w(o);
    if (!s.isValid)
      return console.warn("CSS validation failed:", s.error), $();
    const r = v(o, ":root"), t = v(o, ".dark"), l = f(r, "--font-sans") || f(r, "--font-family") || f(r, "--font-heading") || f(r, "--font-body"), n = B(l);
    e.fontFamily = {
      heading: n,
      body: n
    };
    const m = f(r, "--radius") || f(r, "--border-radius") || "0.5rem";
    e.borderRadius = q(m), [
      "background",
      "foreground",
      "primary",
      "primary-foreground",
      "secondary",
      "secondary-foreground",
      "muted",
      "muted-foreground",
      "accent",
      "accent-foreground",
      "destructive",
      "destructive-foreground",
      "border",
      "input",
      "ring",
      "card",
      "card-foreground",
      "popover",
      "popover-foreground"
    ].forEach((a) => {
      const p = f(r, `--${a}`), g = f(t, `--${a}`);
      if (p || g) {
        const c = p ? k(p) : "#000000", C = g ? k(g) : c;
        e.colors[a] = [c, C];
      }
    });
  } catch (s) {
    return console.error("Error parsing CSS to ChaiThemeValues:", s), $();
  }
  return e;
}, v = (o, e) => {
  var r, t;
  const s = new RegExp(`${F(e)}\\s*{([^}]+)}`);
  return ((t = (r = o.match(s)) == null ? void 0 : r[1]) == null ? void 0 : t.trim()) || null;
}, f = (o, e) => {
  var t;
  if (!o) return null;
  const s = new RegExp(`${F(e)}\\s*:\\s*([^;]+)`), r = o.match(s);
  return ((t = r == null ? void 0 : r[1]) == null ? void 0 : t.trim()) || null;
}, k = (o) => {
  if (!o || typeof o != "string")
    return "#000000";
  try {
    const e = o.replace(/var\([^)]+\)/g, "").trim();
    if (!e) return "#000000";
    if (/^[a-z]+$/i.test(e))
      return S(e) || "#000000";
    if (/^#?([0-9A-F]{3,4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(e.replace(/#/g, ""))) {
      const r = e.startsWith("#") ? e : `#${e}`;
      return r.length <= 5 ? `#${r.slice(1).split("").map((t) => t + t).join("")}`.slice(0, 7) : r.length > 7 ? r.slice(0, 7) : r;
    }
    if (/^(rgb|hsl|oklch)a?\(/i.test(e))
      return S(e) || "#000000";
    const s = e.match(/^(\d+\.?\d*)\s+(\d+\.?\d*)%\s+(\d+\.?\d*)%$/);
    if (s) {
      const [, r, t, l] = s, n = `hsl(${r} ${t}% ${l}%)`;
      return S(n) || "#000000";
    }
    if (/^[\d.]+[\s,]+[\d.]+[\s,]+[\d.]+(?:[\s,/]+[\d.]+)?$/.test(e)) {
      const r = e.split(/[\s,]+/).filter(Boolean);
      if (r.length >= 3) {
        const l = r.some((n) => n.includes("%")) ? `hsl(${r[0]} ${r[1]} ${r[2]})` : `rgb(${r[0]}, ${r[1]}, ${r[2]})`;
        return S(l) || "#000000";
      }
    }
    return S(e) || "#000000";
  } catch (e) {
    return console.warn("Failed to process color:", o, e), "#000000";
  }
}, B = (o) => {
  const e = H();
  if (!o)
    return "ui-sans-serif, system-ui, sans-serif";
  try {
    const r = o.replace(/["']/g, "").trim().split(",")[0].trim(), t = e.find((l) => l.family.toLowerCase() === r.toLowerCase());
    return (t == null ? void 0 : t.family) || "ui-sans-serif, system-ui, sans-serif";
  } catch (s) {
    return console.warn("Error processing font family:", o, s), "ui-sans-serif, system-ui, sans-serif";
  }
}, q = (o) => {
  try {
    const e = o.trim();
    if (e.endsWith("px"))
      return e;
    if (e.endsWith("rem")) {
      const r = parseFloat(e.replace("rem", ""));
      if (!isNaN(r))
        return `${Math.round(r * 16)}px`;
    }
    if (e.endsWith("em")) {
      const r = parseFloat(e.replace("em", ""));
      if (!isNaN(r))
        return `${Math.round(r * 16)}px`;
    }
    const s = parseFloat(e);
    return isNaN(s) ? "8px" : `${Math.round(s)}px`;
  } catch (e) {
    return console.warn("Error converting border radius to px:", o, e), "8px";
  }
}, $ = () => ({
  fontFamily: {
    heading: "ui-sans-serif, system-ui, sans-serif",
    body: "ui-sans-serif, system-ui, sans-serif"
  },
  borderRadius: "8px",
  colors: {
    background: ["#ffffff", "#000000"],
    foreground: ["#000000", "#ffffff"],
    primary: ["#3b82f6", "#60a5fa"],
    "primary-foreground": ["#ffffff", "#1e293b"],
    secondary: ["#f1f5f9", "#334155"],
    "secondary-foreground": ["#0f172a", "#f8fafc"],
    muted: ["#f8fafc", "#1e293b"],
    "muted-foreground": ["#64748b", "#94a3b8"],
    accent: ["#f1f5f9", "#334155"],
    "accent-foreground": ["#0f172a", "#f8fafc"],
    destructive: ["#ef4444", "#f87171"],
    "destructive-foreground": ["#ffffff", "#1e293b"],
    border: ["#e2e8f0", "#475569"],
    input: ["#e2e8f0", "#475569"],
    ring: ["#3b82f6", "#60a5fa"],
    card: ["#ffffff", "#0f172a"],
    "card-foreground": ["#000000", "#f8fafc"],
    popover: ["#ffffff", "#0f172a"],
    "popover-foreground": ["#000000", "#f8fafc"]
  }
}), F = (o) => o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), W = (o) => ["background", "foreground", "primary", "primary-foreground"].every(
  (r) => o.colors[r] && Array.isArray(o.colors[r]) && o.colors[r].length >= 2
) && !!o.fontFamily.heading && !!o.fontFamily.body && !!o.borderRadius, w = (o) => {
  if (!o || typeof o != "string")
    return { isValid: !1, error: "Please enter valid CSS content" };
  const e = o.trim();
  if (!e)
    return { isValid: !1, error: "Please enter CSS content" };
  try {
    if (!e.includes("{") || !e.includes("}"))
      return {
        isValid: !1,
        error: "Invalid CSS format. CSS should contain proper block structure with { }"
      };
    const s = (e.match(/{/g) || []).length, r = (e.match(/}/g) || []).length;
    return s !== r ? {
      isValid: !1,
      error: "Invalid CSS format. Unmatched braces detected"
    } : !e.includes("--") || !e.includes(":") ? {
      isValid: !1,
      error: "Invalid CSS format. CSS should contain variable definitions like --primary: #color"
    } : !e.includes(":root") && !e.includes(".dark") ? {
      isValid: !1,
      error: "CSS should contain at least :root or .dark selector with theme variables"
    } : { isValid: !0 };
  } catch (s) {
    return console.error("CSS validation error:", s), { isValid: !1, error: "Failed to parse CSS. Please check your syntax." };
  }
}, _ = `:root {
  --background: 0 0% 100%;
  --foreground: oklch(0.52 0.13 144.17);
  --primary: #3e2723;
  --primary-foreground: #ffffff;
  }

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: hsl(37.50 36.36% 95.69%);
  --primary: rgb(46, 125, 50);
  --primary-foreground: #ffffff;
}`, Q = ({ open: o, onOpenChange: e, onImport: s }) => {
  const [r, t] = x.useState(""), [l, n] = x.useState(null), [m, h] = x.useState(!1), { t: a } = T(), p = async () => {
    h(!0), n(null);
    try {
      const c = w(r);
      if (!c.isValid) {
        n(c.error || a("Invalid CSS format")), setTimeout(() => {
          n(null);
        }, 5e3), h(!1);
        return;
      }
      const C = z(r);
      if (!W(C)) {
        n(
          a(
            "The CSS doesn't contain enough theme information. Please ensure it includes at least background, foreground, primary, and primary-foreground colors."
          )
        ), setTimeout(() => {
          n(null);
        }, 5e3), h(!1);
        return;
      }
      s(C), t(""), n(null), e(!1);
    } catch (c) {
      console.error("Error importing CSS:", c), n(a("Failed to parse CSS. Please check your syntax and try again.")), setTimeout(() => {
        n(null);
      }, 5e3);
    } finally {
      h(!1);
    }
  }, g = () => {
    t(""), n(null), e(!1);
  };
  return /* @__PURE__ */ i(V, { open: o, onOpenChange: e, children: /* @__PURE__ */ u(N, { className: "flex max-h-[80vh] max-w-2xl flex-col", children: [
    /* @__PURE__ */ u(R, { children: [
      /* @__PURE__ */ i(E, { children: a("Import CSS Theme") }),
      /* @__PURE__ */ u(D, { className: "space-y-2", children: [
        /* @__PURE__ */ i("p", { children: a(
          "Paste your CSS variables to import a custom theme. The CSS should contain :root and .dark blocks with CSS custom properties."
        ) }),
        /* @__PURE__ */ u("div", { className: "flex items-center", children: [
          /* @__PURE__ */ i("p", { className: "font-bold", children: "Get theme resources:" }),
          /* @__PURE__ */ i(y, { variant: "link", size: "sm", onClick: () => window.open("https://tweakcn.com/", "_blank"), children: "TweakCN" }),
          /* @__PURE__ */ i(
            y,
            {
              variant: "link",
              size: "sm",
              onClick: () => window.open("https://ui.shadcn.com/themes#themes", "_blank"),
              children: "shadcn/ui Themes"
            }
          ),
          /* @__PURE__ */ i(
            y,
            {
              variant: "link",
              size: "sm",
              onClick: () => window.open("https://zippystarter.com/tools/shadcn-ui-theme-generator", "_blank"),
              children: "ZippyStarter"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u("div", { className: "flex-1 space-y-4 overflow-hidden", children: [
      /* @__PURE__ */ u("div", { className: "space-y-2", children: [
        /* @__PURE__ */ i(I, { htmlFor: "css-input", children: a("CSS Variables") }),
        /* @__PURE__ */ i(
          A,
          {
            id: "css-input",
            placeholder: _,
            value: r,
            onChange: (c) => t(c.target.value),
            className: "min-h-[300px] resize-none font-mono text-sm",
            disabled: m
          }
        )
      ] }),
      l && /* @__PURE__ */ i("div", { className: "rounded-md border border-red-200 bg-red-50 p-3", children: /* @__PURE__ */ i("p", { className: "text-sm text-red-600", children: l }) })
    ] }),
    /* @__PURE__ */ u(P, { className: "gap-2", children: [
      /* @__PURE__ */ i(y, { variant: "outline", onClick: g, disabled: m, children: a("Cancel") }),
      /* @__PURE__ */ i(y, { onClick: p, disabled: !r.trim() || m, children: a(m ? "Importing..." : "Import Theme") })
    ] })
  ] }) });
};
export {
  Q as CssImportModal
};
