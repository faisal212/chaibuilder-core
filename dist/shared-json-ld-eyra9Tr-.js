import { jsx as e, jsxs as n, Fragment as j } from "react/jsx-runtime";
import { filter as me, find as he } from "lodash-es";
import { Info as ue, Loader as O, Plus as ge, Eye as fe, Edit as pe, Trash as xe } from "lucide-react";
import { useState as g, useEffect as $, useMemo as z } from "react";
import { D as W, e as Y, f as X, g as Z, p as y, a0 as U, a1 as _, a2 as R, a3 as M, a4 as q, a5 as H, a6 as K, a7 as Q, d as Ne, F as L, G as J, H as F, a8 as be, I as ye, J as ve, K as we, a9 as Ae, M as Ce, T as Se } from "./index-DRB61_kK.js";
import { D as Pe, E as Te, z as G, B as v } from "./register-chai-top-bar-DWmJ2efT.js";
import { ai as De, aj as Ee, ag as V, aq as le, ay as Le, az as se, ax as re, aA as de, aB as Je, aC as Fe, aD as Oe, g as ke, aE as je } from "./index-zhi1qv_b.js";
import { useQuery as Ge, useQueryClient as Be } from "@tanstack/react-query";
import { toast as B } from "sonner";
const oe = () => {
  const t = De(), i = Ee();
  return Ge({
    queryKey: [V.GET_GLOBAL_JSONLD_ITEMS],
    queryFn: async () => i(t, { action: V.GET_GLOBAL_JSONLD_ITEMS })
  });
}, Ie = ({
  show: t,
  onClose: i,
  initialData: a
}) => /* @__PURE__ */ e(W, { open: t, onOpenChange: () => i(), children: t && /* @__PURE__ */ e(ze, { show: t, onClose: i, initialData: a }) }), ze = ({
  show: t,
  onClose: i,
  initialData: a
}) => {
  const [d, f] = g({
    name: "",
    content: "",
    description: "",
    enabledByDefaultForNewPages: !1
  }), [x, S] = g(!1), { data: u } = le(), { mutateAsync: C, isPending: p } = Le(), { mutateAsync: c } = se(), w = Be();
  $(() => {
    f(a ? {
      name: a.name,
      description: a.description,
      content: JSON.stringify(a.jsonld, null, 2),
      enabledByDefaultForNewPages: !1
    } : { name: "", description: "", content: "", enabledByDefaultForNewPages: !1 }), S(!1);
  }, [t, a]);
  const o = async () => {
    if (!d.name || !d.content) {
      B.error("Please enter a name and content");
      return;
    }
    const l = de(d.content);
    if (!l.isValid) {
      B.error("Invalid JSON-LD content");
      return;
    }
    const N = {
      name: d.name,
      jsonld: l.parsed,
      addToExistingPages: x,
      addToNewPages: d.enabledByDefaultForNewPages,
      description: d.description
    };
    a != null && a.primaryPageId && (N.primaryPage = a.primaryPageId);
    const A = await C(N);
    u != null && u.id && (A != null && A.id) && !(a != null && a.primaryPageId) && (await c({
      schemaId: A.id,
      pageId: u.id,
      enabled: !0
    }), w.invalidateQueries({
      queryKey: [V.GET_LANGUAGE_PAGES, u.id]
    })), i();
  };
  return /* @__PURE__ */ n(Y, { className: "flex max-w-xl flex-col overflow-y-auto", children: [
    /* @__PURE__ */ e(X, { children: /* @__PURE__ */ e(Z, { children: "Add New Shared JSON-LD Schema" }) }),
    /* @__PURE__ */ n("div", { className: "flex max-h-[75vh] flex-col space-y-2 overflow-y-auto", children: [
      (a == null ? void 0 : a.languageCode) && /* @__PURE__ */ n(Pe, { className: "border-blue-200 bg-blue-50", children: [
        /* @__PURE__ */ e(ue, { className: "h-4 w-4 text-blue-600" }),
        /* @__PURE__ */ n(Te, { className: "text-sm text-blue-800", children: [
          "You are creating a ",
          /* @__PURE__ */ e("span", { className: "font-semibold", children: a.languageCode }),
          " language version of this schema. This will be linked to the default language schema."
        ] })
      ] }),
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e(y, { htmlFor: "new-name", children: "Schema Name" }),
        /* @__PURE__ */ e(
          G,
          {
            id: "new-name",
            value: d.name,
            onChange: (l) => f({ ...d, name: l.target.value }),
            placeholder: "e.g., Product Schema",
            className: "text-xs"
          }
        )
      ] }),
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e(y, { htmlFor: "new-description", children: "Description" }),
        /* @__PURE__ */ e(
          G,
          {
            id: "new-description",
            value: d.description || "",
            onChange: (l) => f({ ...d, description: l.target.value }),
            placeholder: "Brief description of this schema"
          }
        )
      ] }),
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e(y, { htmlFor: "new-content", children: "JSON-LD Content" }),
        /* @__PURE__ */ e(
          re,
          {
            id: "new-content",
            value: d.content || "{}",
            onChange: (l) => f({ ...d, content: l }),
            placeholder: "Enter JSON-LD markup...",
            rows: 10
          }
        )
      ] }),
      !(a != null && a.primaryPageId) && /* @__PURE__ */ n("div", { className: "flex flex-col gap-3 pt-2", children: [
        /* @__PURE__ */ n("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "checkbox",
              id: "add-to-all-existing",
              checked: x,
              onChange: (l) => S(l.target.checked),
              className: "h-5 w-5 cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
            }
          ),
          /* @__PURE__ */ n(y, { htmlFor: "add-to-all-existing", children: [
            /* @__PURE__ */ e("div", { children: "Add to all existing pages" }),
            /* @__PURE__ */ e("div", { className: "text-xs font-light text-muted-foreground", children: "This schema will be added to all existing pages on your site" })
          ] })
        ] }),
        /* @__PURE__ */ n("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "checkbox",
              id: "new-enabled",
              checked: d.enabledByDefaultForNewPages,
              onChange: (l) => f({ ...d, enabledByDefaultForNewPages: l.target.checked }),
              className: "h-5 w-5 cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
            }
          ),
          /* @__PURE__ */ n(y, { htmlFor: "new-enabled", children: [
            /* @__PURE__ */ e("div", { children: "Enabled by default for new pages" }),
            /* @__PURE__ */ e("div", { className: "text-xs font-light text-muted-foreground", children: "New pages will automatically include this schema" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "border-t pt-3", children: /* @__PURE__ */ n("div", { className: "flex items-center justify-end gap-2", children: [
        /* @__PURE__ */ e(v, { disabled: p, variant: "outline", type: "button", size: "sm", onClick: () => i(), children: "Cancel" }),
        /* @__PURE__ */ e(v, { disabled: p, type: "button", size: "sm", onClick: o, children: p ? /* @__PURE__ */ n(j, { children: [
          /* @__PURE__ */ e(O, { className: "h-4 w-4 animate-spin" }),
          " Adding"
        ] }) : /* @__PURE__ */ n(j, { children: [
          "Add Schema",
          (a == null ? void 0 : a.languageCode) && ` (${a.languageCode})`
        ] }) })
      ] }) })
    ] })
  ] });
}, Ue = ({ id: t, onClose: i }) => /* @__PURE__ */ e(W, { open: !!t, onOpenChange: () => i(), children: t && /* @__PURE__ */ e(_e, { id: t, onClose: i }) }), _e = ({ id: t, onClose: i }) => {
  const [a, d] = g({
    name: "",
    content: "",
    description: "",
    enabledByDefaultForNewPages: !1
  }), [f, x] = g(!1), [S, u] = g(!1), [C, p] = g(!1), { data: c } = oe(), { mutateAsync: w, isPending: o } = Je(), { mutateAsync: l } = Fe(), { mutateAsync: N } = Oe();
  $(() => {
    var m, T;
    if (t && c) {
      const b = c.find((E) => E.id === t);
      b && (d({
        name: b.name,
        description: ((m = b.metadata) == null ? void 0 : m.description) || "",
        content: JSON.stringify(b.jsonld, null, 2),
        enabledByDefaultForNewPages: ((T = b.metadata) == null ? void 0 : T.addToNewPages) || !1
      }), p(!!b.primaryPage));
    }
  }, [t, c]);
  const A = async () => {
    if (!a.name || !a.content) {
      B.error("Please enter a name and content");
      return;
    }
    const m = de(a.content);
    if (!m.isValid) {
      B.error("Invalid JSON-LD content");
      return;
    }
    const T = {
      id: t,
      name: a.name,
      jsonld: m.parsed,
      addToNewPages: a.enabledByDefaultForNewPages,
      description: a.description
    };
    await w(T), i();
  }, I = async () => {
    try {
      await l(t);
    } finally {
      x(!1);
    }
  }, P = async () => {
    try {
      await N(t);
    } finally {
      u(!1);
    }
  };
  return /* @__PURE__ */ n(Y, { className: "flex max-w-xl flex-col overflow-y-auto", children: [
    /* @__PURE__ */ e(X, { children: /* @__PURE__ */ e(Z, { children: "Edit Shared JSON-LD Schema" }) }),
    /* @__PURE__ */ n("div", { className: "flex max-h-[75vh] flex-col space-y-2 overflow-y-auto", children: [
      !C && /* @__PURE__ */ n("div", { className: "flex items-center justify-between rounded-lg border border-blue-300 bg-blue-500/10 p-2", children: [
        /* @__PURE__ */ n("div", { children: [
          /* @__PURE__ */ e("div", { className: "text-sm font-medium text-blue-900", children: "Manage Existing Pages" }),
          /* @__PURE__ */ e("div", { className: "text-xs text-blue-700", children: "Add or remove this schema from all existing pages on your site" })
        ] }),
        /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(v, { size: "sm", className: "text-xs", variant: "outline", onClick: () => x(!0), children: "Add to all existing" }),
          /* @__PURE__ */ e(v, { size: "sm", variant: "ghost", className: "text-xs", onClick: () => u(!0), children: "Remove from all" })
        ] })
      ] }),
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e(y, { htmlFor: "edit-name", children: "Schema Name" }),
        /* @__PURE__ */ e(
          G,
          {
            id: "edit-name",
            value: a.name,
            onChange: (m) => d({ ...a, name: m.target.value }),
            placeholder: "e.g., Product Schema",
            className: "text-xs"
          }
        )
      ] }),
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e(y, { htmlFor: "edit-description", children: "Description" }),
        /* @__PURE__ */ e(
          G,
          {
            id: "edit-description",
            value: a.description || "",
            onChange: (m) => d({ ...a, description: m.target.value }),
            placeholder: "Brief description of this schema"
          }
        )
      ] }),
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e(y, { htmlFor: "edit-content", children: "JSON-LD Content" }),
        /* @__PURE__ */ e(
          re,
          {
            id: "edit-content",
            value: a.content || "{}",
            onChange: (m) => d({ ...a, content: m }),
            placeholder: "Enter JSON-LD markup...",
            rows: 10
          }
        )
      ] }),
      !C && /* @__PURE__ */ n("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "checkbox",
            id: "edit-enabled",
            checked: a.enabledByDefaultForNewPages,
            onChange: (m) => d({ ...a, enabledByDefaultForNewPages: m.target.checked }),
            className: "h-5 w-5 cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
          }
        ),
        /* @__PURE__ */ n(y, { htmlFor: "edit-enabled", children: [
          /* @__PURE__ */ e("div", { children: "Enabled by default for new pages" }),
          /* @__PURE__ */ e("div", { className: "text-xs font-light text-muted-foreground", children: "New pages will automatically include this schema" })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "border-t pt-3", children: /* @__PURE__ */ n("div", { className: "flex items-center justify-end gap-2", children: [
        /* @__PURE__ */ e(v, { disabled: o, variant: "outline", type: "button", size: "sm", onClick: () => i(), children: "Cancel" }),
        /* @__PURE__ */ e(v, { disabled: o, type: "button", size: "sm", onClick: A, children: o ? /* @__PURE__ */ n(j, { children: [
          /* @__PURE__ */ e(O, { className: "h-4 w-4 animate-spin" }),
          " Updating"
        ] }) : "Update Schema" })
      ] }) })
    ] }),
    /* @__PURE__ */ e(U, { open: f, onOpenChange: x, children: /* @__PURE__ */ n(_, { children: [
      /* @__PURE__ */ n(R, { children: [
        /* @__PURE__ */ e(M, { children: "Add to All Existing Pages?" }),
        /* @__PURE__ */ n(q, { children: [
          "This will add the schema ",
          /* @__PURE__ */ e("span", { className: "font-medium", children: a.name }),
          " to all existing pages on your site. This action cannot be undone automatically."
        ] })
      ] }),
      /* @__PURE__ */ n(H, { children: [
        /* @__PURE__ */ e(K, { children: "Cancel" }),
        /* @__PURE__ */ e(Q, { onClick: I, children: "Add to All" })
      ] })
    ] }) }),
    /* @__PURE__ */ e(U, { open: S, onOpenChange: u, children: /* @__PURE__ */ n(_, { children: [
      /* @__PURE__ */ n(R, { children: [
        /* @__PURE__ */ e(M, { children: "Remove from All Pages?" }),
        /* @__PURE__ */ n(q, { children: [
          "This will remove the schema ",
          /* @__PURE__ */ e("span", { className: "font-medium", children: a.name }),
          " from all existing pages on your site. This action cannot be undone automatically."
        ] })
      ] }),
      /* @__PURE__ */ n(H, { children: [
        /* @__PURE__ */ e(K, { children: "Cancel" }),
        /* @__PURE__ */ e(Q, { onClick: P, className: "bg-red-500 hover:bg-red-600", children: "Remove from All" })
      ] })
    ] }) })
  ] });
};
function Xe() {
  const [t, i] = g(!1), [a, d] = g(void 0), [f, x] = g(null), [S, u] = g(null), [C, p] = g(null), { data: c, isLoading: w } = oe(), { selectedLang: o } = Ne(), { data: l } = le(), { data: N } = ke(), { mutateAsync: A } = je(), { mutateAsync: I } = se(), P = z(() => N == null ? void 0 : N.find((s) => !s.primaryPage && s.lang === ""), [N]), m = z(() => (P == null ? void 0 : P.globalJsonLds) || [], [P]), T = z(() => c ? me(c, (r) => r.primaryPage === null && r.lang === "").map((r) => {
    const h = o ? he(c, (D) => D.primaryPage === r.id && D.lang === o) : null;
    return {
      defaultSchema: r,
      languageVersion: h,
      // Use language version if available, otherwise use default
      displayItem: h || r,
      hasLanguageVersion: !!h
    };
  }) : [], [c, o]), [b, E] = g([]), k = b.length > 0 ? b : (l == null ? void 0 : l.globalJsonLds) || [];
  $(() => {
    l != null && l.globalJsonLds && E(l.globalJsonLds);
  }, [l == null ? void 0 : l.globalJsonLds]);
  const ie = async (s) => {
    if (!(l != null && l.id)) return;
    p(s);
    const r = k.includes(s), h = r ? k.filter((D) => D !== s) : [...k, s];
    E(h);
    try {
      await I({
        schemaId: s,
        pageId: l.id,
        enabled: !r
      });
    } catch {
      E(l.globalJsonLds);
    } finally {
      p(null);
    }
  }, ce = async (s) => {
    p(s);
    try {
      await A(s);
    } finally {
      p(null);
    }
  };
  return /* @__PURE__ */ n("div", { className: "rounded border bg-muted p-2", children: [
    /* @__PURE__ */ n("div", { className: "flex items-center justify-between pb-2", children: [
      /* @__PURE__ */ n("div", { children: [
        /* @__PURE__ */ e("div", { className: "text-xs font-medium", children: "Shared JSON-LD Templates" }),
        /* @__PURE__ */ e("div", { className: "w-full text-xs text-gray-500", children: "Manage reusable JSON-LD schemas that can be applied across multiple pages" })
      ] }),
      !o && /* @__PURE__ */ n(L, { delayDuration: 0, children: [
        /* @__PURE__ */ e(
          J,
          {
            type: "button",
            disabled: w,
            className: "rounded-full bg-primary p-1 text-primary-foreground hover:bg-primary/80",
            onClick: (s) => {
              s.stopPropagation(), i(!0);
            },
            children: w ? /* @__PURE__ */ e(O, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ e(ge, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ e(F, { children: "Add new schema" })
      ] })
    ] }),
    /* @__PURE__ */ n(be, { className: "max-h-96 overflow-y-auto", children: [
      /* @__PURE__ */ n("div", { className: "space-y-2", children: [
        (!c || (c == null ? void 0 : c.length) === 0) && !w && /* @__PURE__ */ e("div", { className: "flex items-center justify-center px-2 py-4 text-xs", children: "No shared JSON-LD found" }),
        T.map(({ defaultSchema: s, displayItem: r, hasLanguageVersion: h }) => {
          var ae, te;
          const D = k.includes(r.id), ee = m.includes(s.id), ne = h && o ? ee : D;
          return /* @__PURE__ */ n(
            ye,
            {
              className: `relative border-gray-300 p-0 shadow-none transition-all ${C === r.id ? "pointer-events-none" : ""}`,
              children: [
                C === r.id && /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center rounded-xl bg-white/80", children: /* @__PURE__ */ e(O, { className: "h-5 w-5 animate-spin text-primary" }) }),
                /* @__PURE__ */ e(ve, { className: "p-2", children: /* @__PURE__ */ n("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ n("div", { className: "flex items-center gap-3", children: [
                    (h || !o) && /* @__PURE__ */ n(L, { delayDuration: 0, children: [
                      /* @__PURE__ */ e(J, { asChild: !0, children: /* @__PURE__ */ e(
                        "input",
                        {
                          type: "checkbox",
                          checked: ne,
                          onChange: () => ie(s.id),
                          disabled: !!(h && o),
                          className: "h-5 w-5 cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                        }
                      ) }),
                      h && o && /* @__PURE__ */ e(F, { children: "Using the default language state" })
                    ] }),
                    /* @__PURE__ */ n("div", { children: [
                      /* @__PURE__ */ n(we, { className: "flex items-center gap-2 text-sm leading-none", children: [
                        r.name,
                        h && o && /* @__PURE__ */ n("span", { className: "text-xs font-normal text-muted-foreground", children: [
                          "(",
                          o,
                          ")"
                        ] }),
                        ne && /* @__PURE__ */ e("span", { className: "sr-only text-xs font-normal text-muted-foreground", children: "Enabled" })
                      ] }),
                      ((ae = r == null ? void 0 : r.metadata) == null ? void 0 : ae.description) && /* @__PURE__ */ e("p", { className: "mt-1 text-xs leading-none text-muted-foreground", children: (te = r == null ? void 0 : r.metadata) == null ? void 0 : te.description })
                    ] })
                  ] }),
                  /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e("div", { className: "mx-2 h-6 w-px bg-border" }),
                    /* @__PURE__ */ n(L, { delayDuration: 0, children: [
                      /* @__PURE__ */ e(J, { asChild: !0, children: /* @__PURE__ */ e(
                        v,
                        {
                          type: "button",
                          variant: "ghost",
                          size: "icon",
                          className: "h-5 w-5 p-0",
                          onClick: () => u(r.id),
                          children: /* @__PURE__ */ e(fe, { className: "h-4 w-4" })
                        }
                      ) }),
                      /* @__PURE__ */ e(F, { children: "View schema" })
                    ] }),
                    (h || !o) && /* @__PURE__ */ n(j, { children: [
                      /* @__PURE__ */ n(L, { delayDuration: 0, children: [
                        /* @__PURE__ */ e(J, { asChild: !0, children: /* @__PURE__ */ e(
                          v,
                          {
                            type: "button",
                            variant: "ghost",
                            size: "icon",
                            className: "h-5 w-5 p-0",
                            onClick: () => x(r.id),
                            children: /* @__PURE__ */ e(pe, { className: "h-4 w-4" })
                          }
                        ) }),
                        /* @__PURE__ */ e(F, { children: "Edit schema" })
                      ] }),
                      /* @__PURE__ */ n(U, { children: [
                        /* @__PURE__ */ n(L, { delayDuration: 0, children: [
                          /* @__PURE__ */ e(J, { asChild: !0, children: /* @__PURE__ */ e(Ae, { className: "flex h-5 w-5 items-center justify-center rounded-md text-red-500 hover:bg-red-100 hover:text-red-800", children: /* @__PURE__ */ e(xe, { className: "h-4 w-4" }) }) }),
                          /* @__PURE__ */ e(F, { children: "Delete schema" })
                        ] }),
                        /* @__PURE__ */ n(_, { children: [
                          /* @__PURE__ */ n(R, { children: [
                            /* @__PURE__ */ e(M, { children: "Delete Schema" }),
                            /* @__PURE__ */ n(q, { children: [
                              "Are you sure you want to delete",
                              " ",
                              /* @__PURE__ */ e("span", { className: "font-medium", children: r.name }),
                              "? This action cannot be undone."
                            ] })
                          ] }),
                          /* @__PURE__ */ n(H, { children: [
                            /* @__PURE__ */ e(K, { type: "button", children: "Cancel" }),
                            /* @__PURE__ */ e(
                              Q,
                              {
                                type: "button",
                                onClick: () => ce(r.id),
                                className: "bg-red-500 text-white hover:bg-red-600",
                                children: "Delete"
                              }
                            )
                          ] })
                        ] })
                      ] })
                    ] })
                  ] })
                ] }) }),
                !h && o && /* @__PURE__ */ e(Ce, { className: "px-2 pb-2", children: /* @__PURE__ */ n("div", { className: "flex w-full flex-col items-center justify-center rounded-lg border bg-gray-100 py-3", children: [
                  /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ n("div", { className: "max-w-xl text-center text-xs text-gray-500", children: [
                      "Not available in '",
                      o,
                      "' language. Default language JSONLD will be used."
                    ] }),
                    ee && /* @__PURE__ */ e("span", { className: "rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700", children: "Enabled in default" })
                  ] }),
                  /* @__PURE__ */ e(
                    v,
                    {
                      type: "button",
                      size: "sm",
                      variant: "outline",
                      className: "mt-2",
                      onClick: () => {
                        d({
                          name: s.name,
                          description: s.description || "",
                          jsonld: s.jsonld,
                          languageCode: o,
                          primaryPageId: s.id
                        }), i(!0);
                      },
                      children: "Copy & Edit from default language"
                    }
                  )
                ] }) })
              ]
            },
            s.id
          );
        })
      ] }),
      w && /* @__PURE__ */ e("div", { className: "flex items-center justify-center p-4", children: /* @__PURE__ */ e(O, { className: "h-5 w-5 animate-spin" }) })
    ] }),
    /* @__PURE__ */ e(
      Ie,
      {
        show: t,
        onClose: () => {
          i(!1), d(void 0);
        },
        initialData: a
      }
    ),
    /* @__PURE__ */ e(Ue, { id: f, onClose: () => x(null) }),
    /* @__PURE__ */ e(
      Re,
      {
        schema: c == null ? void 0 : c.find((s) => s.id === S),
        onClose: () => u(null)
      }
    )
  ] });
}
const Re = ({ schema: t, onClose: i }) => /* @__PURE__ */ e(W, { open: !!t, onOpenChange: i, children: /* @__PURE__ */ n(Y, { className: "max-w-2xl", children: [
  /* @__PURE__ */ e(X, { children: /* @__PURE__ */ n(Z, { className: "flex items-center gap-2", children: [
    t == null ? void 0 : t.name,
    (t == null ? void 0 : t.lang) && /* @__PURE__ */ n("span", { className: "text-sm font-normal text-muted-foreground", children: [
      "(",
      t.lang,
      ")"
    ] })
  ] }) }),
  /* @__PURE__ */ n("div", { className: "space-y-3", children: [
    (t == null ? void 0 : t.description) && /* @__PURE__ */ n("div", { children: [
      /* @__PURE__ */ e("div", { className: "text-xs font-medium text-muted-foreground", children: "Description" }),
      /* @__PURE__ */ e("div", { className: "text-sm", children: t.description })
    ] }),
    /* @__PURE__ */ n("div", { children: [
      /* @__PURE__ */ e("div", { className: "mb-2 text-xs font-medium text-muted-foreground", children: "JSON-LD Schema" }),
      /* @__PURE__ */ e(
        Se,
        {
          value: JSON.stringify(t == null ? void 0 : t.jsonld, null, 2),
          readOnly: !0,
          className: "font-mono text-xs",
          rows: 15
        }
      )
    ] })
  ] })
] }) });
export {
  Xe as default
};
