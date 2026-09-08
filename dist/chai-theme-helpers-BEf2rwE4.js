import { g as $ } from "./_commonjsHelpers-C6fGbg64.js";
import { uniqBy as s, get as b, flatten as v, keys as B } from "lodash-es";
import { a as _ } from "./fonts-B3UYxuJI.js";
const x = {
  fontFamily: {
    "font-heading": "Arial",
    "font-body": "Arial"
  },
  borderRadius: "10px",
  colors: [
    {
      group: "Body",
      items: {
        background: ["#FFFFFF", "#121212"],
        foreground: ["#121212", "#FFFFFF"]
      }
    },
    {
      group: "Primary",
      items: {
        primary: ["#2563EB", "#3B82F6"],
        "primary-foreground": ["#FFFFFF", "#FFFFFF"]
      }
    },
    {
      group: "Secondary",
      items: {
        secondary: ["#F3F4F6", "#374151"],
        "secondary-foreground": ["#1F2937", "#F9FAFB"]
      }
    },
    {
      group: "Border, Input & Ring",
      items: {
        border: ["#E5E7EB", "#374151"],
        input: ["#E5E7EB", "#374151"],
        ring: ["#2563EB", "#3B82F6"]
      }
    },
    {
      group: "Card",
      items: {
        card: ["#FFFFFF", "#1F2937"],
        "card-foreground": ["#121212", "#FFFFFF"]
      }
    },
    {
      group: "Popover",
      items: {
        popover: ["#FFFFFF", "#1F2937"],
        "popover-foreground": ["#121212", "#FFFFFF"]
      }
    },
    {
      group: "Muted",
      items: {
        muted: ["#F3F4F6", "#374151"],
        "muted-foreground": ["#6B7280", "#9CA3AF"]
      }
    },
    {
      group: "Accent",
      items: {
        accent: ["#F3F4F6", "#374151"],
        "accent-foreground": ["#1F2937", "#FFFFFF"]
      }
    },
    {
      group: "Destructive",
      items: {
        destructive: ["#DC2626", "#EF4444"],
        "destructive-foreground": ["#FFFFFF", "#FFFFFF"]
      }
    }
  ]
}, q = {
  fontFamily: {
    heading: "Arial",
    body: "Arial"
  },
  borderRadius: "6px",
  colors: {
    background: ["#FFFFFF", "#09090B"],
    foreground: ["#09090B", "#FFFFFF"],
    primary: ["#2563EB", "#3B82F6"],
    "primary-foreground": ["#FFFFFF", "#FFFFFF"],
    secondary: ["#F4F4F5", "#27272A"],
    "secondary-foreground": ["#09090B", "#FFFFFF"],
    muted: ["#F4F4F5", "#27272A"],
    "muted-foreground": ["#71717A", "#A1A1AA"],
    accent: ["#F4F4F5", "#27272A"],
    "accent-foreground": ["#09090B", "#FFFFFF"],
    destructive: ["#EF4444", "#7F1D1D"],
    "destructive-foreground": ["#FFFFFF", "#FFFFFF"],
    border: ["#E4E4E7", "#27272A"],
    input: ["#E4E4E7", "#27272A"],
    ring: ["#2563EB", "#3B82F6"],
    card: ["#FFFFFF", "#09090B"],
    "card-foreground": ["#09090B", "#FFFFFF"],
    popover: ["#FFFFFF", "#09090B"],
    "popover-foreground": ["#09090B", "#FFFFFF"]
  }
};
var d = {}, c = {}, m;
function E() {
  return m || (m = 1, (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    function F(t, n) {
      return {
        handler: t,
        config: n
      };
    }
    F.withOptions = function(t, n = () => ({})) {
      const o = function(a) {
        return {
          __options: a,
          handler: t(a),
          config: n(a)
        };
      };
      return o.__isOptionsFunction = !0, o.__pluginFunction = t, o.__configFunction = n, o;
    };
    const r = F;
  })(c)), c;
}
var p;
function A() {
  return p || (p = 1, (function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t;
      }
    });
    const F = /* @__PURE__ */ r(E());
    function r(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }
    const t = F.default;
  })(d)), d;
}
var f, y;
function P() {
  if (y) return f;
  y = 1;
  let e = A();
  return f = (e.__esModule ? e : { default: e }).default, f;
}
var j = P();
const O = /* @__PURE__ */ $(j), S = (e) => ({
  fontFamily: e.fontFamily ? B(e.fontFamily).reduce(
    (r, t) => ({
      ...r,
      [t.replace("font-", "")]: `var(--${t})`
    }),
    {}
  ) : {},
  borderRadius: e.borderRadius ? {
    lg: "var(--radius)",
    md: "calc(var(--radius) - 2px)",
    sm: "calc(var(--radius) - 4px)"
  } : {},
  colors: e.colors ? v(e.colors.map((r) => Object.entries(r.items))).reduce(
    (r, [t]) => ({ ...r, [t]: `hsl(var(--${t}))` }),
    {}
  ) : {}
});
function h(e) {
  const F = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  let r = parseInt(F[1], 16), t = parseInt(F[2], 16), n = parseInt(F[3], 16);
  r /= 255, t /= 255, n /= 255;
  const o = Math.max(r, t, n), a = Math.min(r, t, n);
  let u = 0, l = 0;
  const g = (o + a) / 2;
  if (o == a)
    u = l = 0;
  else {
    const i = o - a;
    switch (l = g > 0.5 ? i / (2 - o - a) : i / (o + a), o) {
      case r:
        u = (t - n) / i + (t < n ? 6 : 0);
        break;
      case t:
        u = (n - r) / i + 2;
        break;
      case n:
        u = (r - t) / i + 4;
        break;
    }
    u /= 6;
  }
  return `${Math.round(u * 360)} ${Math.round(l * 100)}% ${Math.round(g * 100)}%`;
}
const C = (e) => {
  const r = _().find((t) => t.family === e);
  return `"${e}", ${b(r, "fallback", "")}`;
}, T = ({ theme: e }) => {
  const F = e;
  return `:root {
    ${e.fontFamily ? Object.entries(e.fontFamily).map(([r, t]) => `--font-${r}: ${C(t)};`).join(`
    `) : ""}
    ${F.borderRadius ? `--radius: ${F.borderRadius};` : ""}
    ${F.colors ? Object.entries(F.colors).map(([r, t]) => `--${r}: ${h(t[0])};`).join(`
    `) : ""}
  }
  .dark {
    ${F.colors ? Object.entries(F.colors).map(([r, t]) => `--${r}: ${h(t[1])};`).join(`
    `) : ""}
  }`;
}, D = (e) => !e || e.length === 0 ? "" : s(e, "family").map((F) => `<link rel="stylesheet" href="${F.url}" />`).join(`
`), I = (e) => !e || e.length === 0 ? [] : s(e, "family").map((F) => F.url), w = (e) => !e || e.length === 0 ? "" : s(e, "family").map((F) => `@import url("${F.url}");`).join(`
`), L = (e) => !e || e.length === 0 ? "" : s(e, "family").map(
  (F) => F.src.map(
    (r) => `@font-face {
        font-family: "${F.family}";
        src: url("${r.url}") format("${r.format}");
        font-display: swap;
        ${r.fontWeight ? `font-weight: ${r.fontWeight};` : ""}
        ${r.fontStyle ? `font-style: ${r.fontStyle};` : ""}
        ${r.fontStretch ? `font-stretch: ${r.fontStretch};` : ""}
      }`
  ).join(`
`)
).join(`
`);
export {
  T as a,
  w as b,
  D as c,
  x as d,
  q as e,
  I as f,
  S as g,
  L as h,
  O as p
};
