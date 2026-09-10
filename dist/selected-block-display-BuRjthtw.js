import { jsx as o, jsxs as l, Fragment as f } from "react/jsx-runtime";
import { ArrowDownIcon as O, BrainIcon as D, ChevronDownIcon as P, X as $ } from "lucide-react";
import * as B from "react";
import { useCallback as _, memo as d, createContext as E, useMemo as G, useState as C, useEffect as T, useContext as j } from "react";
import { StickToBottom as S, useStickToBottomContext as F } from "use-stick-to-bottom";
import { F as r, B as R } from "./register-chai-top-bar-DWmJ2efT.js";
import { Streamdown as y } from "streamdown";
import "@radix-ui/react-slot";
import { cva as Q } from "class-variance-authority";
import { r as K } from "./index-BaxiqbJy.js";
import "clsx";
import "tailwind-merge";
import * as A from "@radix-ui/react-tooltip";
import { useControllableState as w } from "@radix-ui/react-use-controllable-state";
import * as x from "@radix-ui/react-collapsible";
import { motion as V } from "framer-motion";
import { L as h } from "./index-DWTIpiDi.js";
import { useTranslation as Y } from "react-i18next";
const Te = ({ className: e, ...t }) => /* @__PURE__ */ o(
  S,
  {
    className: r("relative flex-1 overflow-y-hidden", e),
    initial: "smooth",
    resize: "smooth",
    role: "log",
    ...t
  }
), we = ({ className: e, ...t }) => /* @__PURE__ */ o(S.Content, { className: r("flex flex-col gap-8 p-4", e), ...t }), Ee = ({
  className: e,
  title: t = "No messages yet",
  description: s = "Start a conversation to see messages here",
  icon: n,
  children: a,
  ...i
}) => /* @__PURE__ */ o(
  "div",
  {
    className: r("flex size-full flex-col items-center justify-center gap-3 p-8 text-center", e),
    ...i,
    children: a ?? /* @__PURE__ */ l(f, { children: [
      n && /* @__PURE__ */ o("div", { className: "text-muted-foreground", children: n }),
      /* @__PURE__ */ l("div", { className: "space-y-1", children: [
        /* @__PURE__ */ o("h3", { className: "text-sm font-medium", children: t }),
        s && /* @__PURE__ */ o("p", { className: "text-sm text-muted-foreground", children: s })
      ] })
    ] })
  }
), Se = ({ className: e, ...t }) => {
  const { isAtBottom: s, scrollToBottom: n } = F(), a = _(() => {
    n();
  }, [n]);
  return !s && /* @__PURE__ */ o(
    R,
    {
      className: r("absolute bottom-4 left-[50%] translate-x-[-50%] rounded-full", e),
      onClick: a,
      size: "icon",
      type: "button",
      variant: "outline",
      ...t,
      children: /* @__PURE__ */ o(O, { className: "size-4" })
    }
  );
};
Q(
  "flex w-fit items-stretch has-[>[data-slot=button-group]]:gap-2 [&>*]:focus-visible:relative [&>*]:focus-visible:z-10 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
  {
    variants: {
      orientation: {
        horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
      }
    },
    defaultVariants: {
      orientation: "horizontal"
    }
  }
);
const J = B.forwardRef(({ className: e, sideOffset: t = 4, ...s }, n) => /* @__PURE__ */ o(
  A.Content,
  {
    ref: n,
    sideOffset: t,
    className: r(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
      e
    ),
    ...s
  }
));
J.displayName = A.Content.displayName;
const Re = ({ className: e, from: t, ...s }) => /* @__PURE__ */ o(
  "div",
  {
    className: r(
      "group flex w-full max-w-[80%] flex-col gap-2",
      t === "user" ? "is-user ml-auto justify-end" : "is-assistant",
      e
    ),
    ...s
  }
), ye = ({ children: e, className: t, ...s }) => /* @__PURE__ */ o(
  "div",
  {
    className: r(
      "is-user:dark flex w-fit flex-col gap-2 overflow-hidden text-sm",
      "group-[.is-user]:ml-auto group-[.is-user]:rounded-lg group-[.is-user]:bg-secondary group-[.is-user]:px-4 group-[.is-user]:py-3 group-[.is-user]:text-foreground",
      "group-[.is-assistant]:text-foreground",
      t
    ),
    ...s,
    children: e
  }
);
E(null);
const X = d(
  ({ className: e, ...t }) => /* @__PURE__ */ o(y, { className: r("size-full [&>*:first-child]:mt-0 [&>*:last-child]:mb-0", e), ...t }),
  (e, t) => e.children === t.children
);
X.displayName = "MessageResponse";
const q = x.Root, H = x.CollapsibleTrigger, W = x.CollapsibleContent, Z = ({ children: e, as: t = "p", className: s, duration: n = 2, spread: a = 2 }) => {
  const i = V.create(t), g = G(() => ((e == null ? void 0 : e.length) ?? 0) * a, [e, a]);
  return /* @__PURE__ */ o(
    i,
    {
      animate: { backgroundPosition: "0% center" },
      className: r(
        "relative inline-block bg-[length:250%_100%,auto] bg-clip-text text-transparent",
        "[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--color-background),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box]",
        s
      ),
      initial: { backgroundPosition: "100% center" },
      style: {
        "--spread": `${g}px`,
        backgroundImage: "var(--bg), linear-gradient(var(--color-muted-foreground), var(--color-muted-foreground))"
      },
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        duration: n,
        ease: "linear"
      },
      children: e
    }
  );
}, k = d(Z), U = E(null), ee = () => {
  const e = j(U);
  if (!e)
    throw new Error("Reasoning components must be used within Reasoning");
  return e;
}, te = 1e3, oe = 1e3, se = d(
  ({
    className: e,
    isStreaming: t = !1,
    open: s,
    defaultOpen: n = !0,
    onOpenChange: a,
    duration: i,
    children: g,
    ...z
  }) => {
    const [c, m] = w({
      prop: s,
      defaultProp: n,
      onChange: a
    }), [M, b] = w({
      prop: i,
      defaultProp: void 0
    }), [N, I] = C(!1), [u, v] = C(null);
    T(() => {
      t ? u === null && v(Date.now()) : u !== null && (b(Math.ceil((Date.now() - u) / oe)), v(null));
    }, [t, u, b]), T(() => {
      if (n && !t && c && !N) {
        const p = setTimeout(() => {
          m(!1), I(!0);
        }, te);
        return () => clearTimeout(p);
      }
    }, [t, c, n, m, N]);
    const L = (p) => {
      m(p);
    };
    return /* @__PURE__ */ o(U.Provider, { value: { isStreaming: t, isOpen: c, setIsOpen: m, duration: M }, children: /* @__PURE__ */ o(
      q,
      {
        className: r("not-prose mb-4", e),
        onOpenChange: L,
        open: c,
        ...z,
        children: g
      }
    ) });
  }
), ne = (e, t) => e || t === 0 ? /* @__PURE__ */ o(k, { duration: 1, children: "Thinking..." }) : t === void 0 ? /* @__PURE__ */ o("p", { children: "Thought for a few seconds" }) : /* @__PURE__ */ l("p", { children: [
  "Thought for ",
  t,
  " seconds"
] }), ae = d(({ className: e, children: t, ...s }) => {
  const { isStreaming: n, isOpen: a, duration: i } = ee();
  return /* @__PURE__ */ o(
    H,
    {
      className: r(
        "flex w-full items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
        e
      ),
      ...s,
      children: t ?? /* @__PURE__ */ l(f, { children: [
        /* @__PURE__ */ o(D, { className: "size-4" }),
        ne(n, i),
        /* @__PURE__ */ o(P, { className: r("size-4 transition-transform", a ? "rotate-180" : "rotate-0") })
      ] })
    }
  );
}), re = d(({ className: e, children: t, ...s }) => /* @__PURE__ */ o(
  W,
  {
    className: r(
      "mt-4 text-sm",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 text-muted-foreground outline-none",
      e
    ),
    ...s,
    children: /* @__PURE__ */ o(y, { ...s, children: t })
  }
));
se.displayName = "Reasoning";
ae.displayName = "ReasoningTrigger";
re.displayName = "ReasoningContent";
const Ae = ({ className: e, content: t, isLoading: s = !1, ...n }) => /* @__PURE__ */ o("div", { className: r("is-assistant flex w-full max-w-[80%] flex-col gap-2", e), ...n, children: /* @__PURE__ */ o("div", { className: "flex w-fit flex-col gap-2 overflow-hidden text-sm", children: /* @__PURE__ */ o("div", { className: "flex items-center gap-2 rounded-lg border border-muted-foreground/20 bg-muted/50 p-3", children: /* @__PURE__ */ l("div", { className: "flex flex-1 items-center gap-2", children: [
  s && /* @__PURE__ */ o(k, { duration: 1.5, children: t }),
  !s && /* @__PURE__ */ o("div", { className: "text-xs text-muted-foreground", children: t })
] }) }) }) });
function ke({
  userInput: e,
  language: t = "en",
  currentHtml: s
}) {
  const n = h[t] || "English";
  return s && s.trim().length > 0 ? `
MODE: EDIT
CURRENT HTML:
${s}

USER REQUEST: ${e}
Use ${n} language.
`.trim() : `
  USER REQUEST: ${e}
Use ${n} language.
`.trim();
}
function Ue({
  fallbackLang: e,
  language: t,
  blocks: s = [],
  userInput: n
}) {
  const a = h[t] || "English";
  return `
USER REQUEST: ${n || "Translate the content"}
LANGUAGE TO TRANSLATE: ${a}
REQUESTED TRANSLATION LANGUAGE CODE: ${t}
FALLBACK LANGUAGE: ${h[e]}
BLOCKS: ${JSON.stringify(s)}`.trim();
}
const ze = ({ onRemove: e, isLoading: t = !1 }) => {
  const { t: s } = Y(), n = K(), a = (n == null ? void 0 : n._type) || "Unknown", i = (n == null ? void 0 : n._name) || a;
  return /* @__PURE__ */ o(f, { children: /* @__PURE__ */ l("div", { className: "mx-auto flex w-[95%] items-center justify-between rounded-t-md border border-b-0 border-blue-200 bg-blue-50", children: [
    /* @__PURE__ */ l("div", { className: "flex items-center", children: [
      /* @__PURE__ */ o("div", { className: "flex h-6 w-6 items-center justify-center rounded-l rounded-bl-none bg-blue-500 text-xs font-semibold text-white", children: "@" }),
      /* @__PURE__ */ o("div", { className: "flex w-[95%] flex-col", children: n ? /* @__PURE__ */ o(f, { children: /* @__PURE__ */ l("span", { className: "truncate text-xs font-medium text-blue-900", children: [
        " ",
        s("Context: "),
        " ",
        i
      ] }) }) : /* @__PURE__ */ l("span", { className: "text-xs font-medium text-blue-900", children: [
        " ",
        s("Context: Entire Page")
      ] }) })
    ] }),
    n && /* @__PURE__ */ o(
      R,
      {
        variant: "ghost",
        size: "icon",
        onClick: e,
        disabled: t,
        className: "h-6 w-6 text-blue-600 hover:bg-blue-100 hover:text-blue-800",
        title: "Remove block from context",
        children: /* @__PURE__ */ o($, { size: 14 })
      }
    )
  ] }) });
};
export {
  Te as C,
  Re as M,
  se as R,
  ze as S,
  Ae as T,
  we as a,
  Ee as b,
  ae as c,
  re as d,
  ye as e,
  X as f,
  Ue as g,
  Se as h,
  ke as i
};
