import { uniqBy as d, get as g, flatten as f, keys as u } from "lodash-es";
import { g as p } from "./fonts-CnJAmks1.js";
const b = {
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
}, v = {
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
}, B = (r) => ({
  fontFamily: r.fontFamily ? u(r.fontFamily).reduce(
    (o, F) => ({
      ...o,
      [F.replace("font-", "")]: `var(--${F})`
    }),
    {}
  ) : {},
  borderRadius: r.borderRadius ? {
    lg: "var(--radius)",
    md: "calc(var(--radius) - 2px)",
    sm: "calc(var(--radius) - 4px)"
  } : {},
  colors: r.colors ? f(r.colors.map((o) => Object.entries(o.items))).reduce(
    (o, [F]) => ({ ...o, [F]: `hsl(var(--${F}))` }),
    {}
  ) : {}
}), A = (r) => {
  const e = u(r.fontFamily || {}), o = f((r.colors || []).map((t) => u(t.items))), F = e.map((t) => `--chai-${t}: var(--${t});`), a = [
    ...e.map((t) => `--font-${t.replace("font-", "")}: var(--chai-${t});`),
    ...r.borderRadius ? [
      "--radius-lg: var(--radius);",
      "--radius-md: calc(var(--radius) - 2px);",
      "--radius-sm: calc(var(--radius) - 4px);"
    ] : [],
    ...o.map((t) => `--color-${t}: hsl(var(--${t}));`)
  ];
  return `:root {
    ${F.join(`
    `)}
  }
  @theme static {
    ${a.join(`
    `)}

    --animate-accordion-down: accordion-down 0.2s ease-out;
    --animate-accordion-up: accordion-up 0.2s ease-out;

    @keyframes accordion-down {
      from { height: 0; }
      to { height: var(--radix-accordion-content-height); }
    }

    @keyframes accordion-up {
      from { height: var(--radix-accordion-content-height); }
      to { height: 0; }
    }
  }
  @layer base {
    h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }
    body {
      font-family: var(--font-body);
      color: hsl(var(--foreground));
      background-color: hsl(var(--background));
    }
  }`;
};
function m(r) {
  const e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);
  let o = parseInt(e[1], 16), F = parseInt(e[2], 16), a = parseInt(e[3], 16);
  o /= 255, F /= 255, a /= 255;
  const t = Math.max(o, F, a), i = Math.min(o, F, a);
  let n = 0, c = 0;
  const l = (t + i) / 2;
  if (t == i)
    n = c = 0;
  else {
    const s = t - i;
    switch (c = l > 0.5 ? s / (2 - t - i) : s / (t + i), t) {
      case o:
        n = (F - a) / s + (F < a ? 6 : 0);
        break;
      case F:
        n = (a - o) / s + 2;
        break;
      case a:
        n = (o - F) / s + 4;
        break;
    }
    n /= 6;
  }
  return `${Math.round(n * 360)} ${Math.round(c * 100)}% ${Math.round(l * 100)}%`;
}
const h = (r) => {
  const o = p().find((F) => F.family === r);
  return `"${r}", ${g(o, "fallback", "")}`;
}, E = ({ theme: r }) => {
  const e = r;
  return `:root {
    ${r.fontFamily ? Object.entries(r.fontFamily).map(([o, F]) => `--font-${o}: ${h(F)};`).join(`
    `) : ""}
    ${e.borderRadius ? `--radius: ${e.borderRadius};` : ""}
    ${e.colors ? Object.entries(e.colors).map(([o, F]) => `--${o}: ${m(F[0])};`).join(`
    `) : ""}
  }
  .dark {
    ${e.colors ? Object.entries(e.colors).map(([o, F]) => `--${o}: ${m(F[1])};`).join(`
    `) : ""}
  }`;
}, j = (r) => !r || r.length === 0 ? "" : d(r, "family").map((e) => `<link rel="stylesheet" href="${e.url}" />`).join(`
`), x = (r) => !r || r.length === 0 ? [] : d(r, "family").map((e) => e.url), k = (r) => !r || r.length === 0 ? "" : d(r, "family").map((e) => `@import url("${e.url}");`).join(`
`), C = (r) => !r || r.length === 0 ? "" : d(r, "family").map(
  (e) => e.src.map(
    (o) => `@font-face {
        font-family: "${e.family}";
        src: url("${o.url}") format("${o.format}");
        font-display: swap;
        ${o.fontWeight ? `font-weight: ${o.fontWeight};` : ""}
        ${o.fontStyle ? `font-style: ${o.fontStyle};` : ""}
        ${o.fontStretch ? `font-stretch: ${o.fontStretch};` : ""}
      }`
  ).join(`
`)
).join(`
`);
export {
  E as a,
  k as b,
  j as c,
  b as d,
  v as e,
  x as f,
  B as g,
  C as h,
  A as i
};
