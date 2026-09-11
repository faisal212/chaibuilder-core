import { jsx as c, jsxs as n } from "react/jsx-runtime";
import { ChevronLeft as v, ChevronRight as g } from "lucide-react";
import * as l from "react";
import { B as k } from "./register-chai-top-bar-DWmJ2efT.js";
import { P as N, C as x, i as P, j as S, k as w, l as B, m as d } from "./index-Caq3YofV.js";
function I({
  data: o,
  onSelect: m,
  dataType: t = "value",
  open: h,
  setOpen: u
}) {
  const [s, i] = l.useState([]), [y, f] = l.useState(o);
  l.useEffect(() => {
    h || i([]), f(o);
  }, [o, h]);
  const b = (e) => Array.isArray(e) ? "array" : typeof e == "object" && e !== null ? "object" : "value", j = l.useCallback(
    (e) => {
      const r = (a) => t === "value" ? a === "value" || a === "object" : t === "array" ? a === "array" : a === t;
      e.type === "object" ? (i((a) => [...a, e.key]), f(e.value)) : r(e.type) && (m([...s, e.key].join(".")), u(!1));
    },
    [t, m, s, u]
  ), C = l.useCallback(() => {
    if (s.length > 0) {
      const e = s.slice(0, -1);
      i(e), f(e.reduce((r, a) => r[a], o));
    }
  }, [s, o]), p = l.useMemo(() => Object.entries(y).map(([e, r]) => ({
    key: e,
    value: r,
    type: b(r)
  })).filter((e) => t === "value" ? e.type === "value" || e.type === "object" : t === "array" ? e.type === "array" || e.type === "object" : t === "object" ? e.type === "object" : !0), [y, t]);
  return /* @__PURE__ */ c(N, { className: "z-[9999] w-[200px] p-0", children: /* @__PURE__ */ n(x, { children: [
    /* @__PURE__ */ c(P, { className: "border-none", placeholder: "Search..." }),
    /* @__PURE__ */ n(
      S,
      {
        onWheel: (e) => {
          try {
            e.preventDefault();
            const r = e.currentTarget;
            r.scrollTop += e.deltaY;
          } catch {
            e.preventDefault();
          }
        },
        children: [
          /* @__PURE__ */ c(w, { children: "No option found." }),
          /* @__PURE__ */ n(B, { children: [
            s.length > 0 && /* @__PURE__ */ n(d, { onSelect: C, className: "flex items-center text-sm", children: [
              /* @__PURE__ */ c(v, { className: "mr-2 h-4 w-4" }),
              "Back"
            ] }),
            p.map((e) => /* @__PURE__ */ n(
              d,
              {
                onSelect: () => j(e),
                className: "flex items-center justify-between",
                children: [
                  /* @__PURE__ */ c("span", { children: e.key }),
                  /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                    t === "object" && e.type === "object" && /* @__PURE__ */ c(
                      k,
                      {
                        size: "sm",
                        variant: "ghost",
                        className: "h-6 px-2 hover:bg-primary hover:text-primary-foreground",
                        onClick: (r) => {
                          r.stopPropagation(), m([...s, e.key].join(".")), u(!1);
                        },
                        children: "Select"
                      }
                    ),
                    (e.type === "object" || e.type === "array") && /* @__PURE__ */ c("div", { className: "cursor-pointer rounded p-1 hover:bg-muted", children: /* @__PURE__ */ c(g, { className: "h-4 w-4 opacity-50" }) })
                  ] })
                ]
              },
              e.key
            ))
          ] })
        ]
      }
    )
  ] }) });
}
export {
  I as default
};
