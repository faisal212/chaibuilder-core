import { jsx as s, jsxs as n, Fragment as Le } from "react/jsx-runtime";
import { isEmpty as Fe, pick as Ke, find as De, set as P } from "lodash-es";
import { ChevronDown as te, Search as re, Check as O } from "lucide-react";
import { useState as f, useRef as Xe, useEffect as Pe, useMemo as q } from "react";
import { toast as E } from "sonner";
import { z as Q, h as $e, B as $ } from "./register-chai-top-bar-DWmJ2efT.js";
import { j as Ee, p as I, Q as oe, R as ie, P as ce, C as ue, k as me, l as Y, m as B, Y as es, d as ss } from "./index-DJuzXMHJ.js";
import { r as ee, S as ls, c as je } from "./slug-input-B3tGfOq7.js";
import { h as ns, ak as as, b as ts, c as rs, d as os, at as is, L as cs } from "./index-ffLcow1F.js";
import { g as We } from "./get-seo-defaults-9zHebckY.js";
function us({
  value: l,
  onChange: p,
  placeholder: b = "Enter custom slug part",
  dynamicPattern: h,
  onValidationChange: o
}) {
  const [d, i] = f(null), u = Xe(null), [D, j] = f(h + l);
  Pe(() => {
    j(h + l);
  }, [l, h]);
  const z = (y) => {
    const v = y.target.value;
    if (!v.startsWith(h)) {
      const F = v.replace(h, ""), R = h + F;
      j(R), p(F);
      return;
    }
    const c = v.substring(h.length).replace(/\//g, "").replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-_.]/g, "-").replace(/-+/g, "-").replace(/^-+/, "").toLowerCase(), a = (c.match(/\./g) || []).length, m = a <= 1;
    a > 1 ? i("Invalid slug. Only one dot (.) is allowed in the slug") : i(null), o && o(m);
    const g = h + c;
    j(g), p(c);
  }, W = () => {
    if (u.current) {
      const y = u.current;
      setTimeout(() => {
        const v = h.length;
        y.setSelectionRange(v, v);
      }, 0);
    }
  }, G = (y) => {
    const v = y.currentTarget;
    (v.selectionStart || 0) <= h.length && setTimeout(() => {
      const c = h.length;
      v.setSelectionRange(c, c);
    }, 0);
  };
  return /* @__PURE__ */ s("div", { children: /* @__PURE__ */ n("div", { className: "relative", children: [
    /* @__PURE__ */ n("p", { className: "mb-2 text-xs text-gray-500", children: [
      `${h}`,
      " is a dynamic segment of slug"
    ] }),
    /* @__PURE__ */ s(
      Q,
      {
        ref: u,
        value: D,
        onChange: z,
        onFocus: W,
        onClick: G,
        placeholder: b,
        className: d ? "border-red-500" : ""
      }
    ),
    d && /* @__PURE__ */ s("div", { className: "mt-1 text-xs text-red-500", children: d })
  ] }) });
}
const he = ({ children: l, onWheel: p, ...b }) => /* @__PURE__ */ s(Ee, { ...b, onWheel: (o) => {
  try {
    o.preventDefault();
    const d = o.currentTarget;
    d.scrollTop += o.deltaY;
  } catch {
    o.preventDefault();
  }
  p && p(o);
}, children: l }), ae = (...l) => l.filter(Boolean).join(" ");
function ms({
  pages: l,
  selectedParentId: p,
  onChange: b,
  className: h,
  id: o = "parentPage",
  currentPage: d
}) {
  const [i, u] = f(!1), [D, j] = f(""), z = $e("enable-add-page-dropdown");
  z || (h = "w-full rounded-md border border-gray-300 px-3 py-2");
  const W = q(() => !l || l.length === 0 ? [] : l.filter((m) => !Fe(m.slug)).filter((m) => m.slug !== "/").sort((m, g) => m.slug.localeCompare(g.slug)), [l]), G = q(() => {
    if (!D.trim()) return W;
    const a = D.toLowerCase();
    return W.filter(
      (m) => m.name.toLowerCase().includes(a) || m.slug.toLowerCase().includes(a)
    );
  }, [W, D]), y = (a) => Math.max(0, (a.match(/\//g) || []).length - 1), v = (a) => "    ".repeat(a), T = (a) => {
    if (a === "/") return "/";
    const m = a.split("/").filter(Boolean);
    if (m.length <= 1) {
      const g = m[0] || "";
      return `/${ee(g)}`;
    }
    return `/${ee(m[m.length - 1])}`;
  }, c = () => {
    if (!p || p === "none") return "None";
    const a = W.find((m) => m.id === p);
    return a ? `${a.name} (${T(a.slug)})` : "None";
  };
  return /* @__PURE__ */ n("div", { className: "space-y-0.5", children: [
    /* @__PURE__ */ s(I, { htmlFor: o, className: "text-sm", children: "Parent" }),
    z ? /* @__PURE__ */ n(oe, { open: i, onOpenChange: u, children: [
      /* @__PURE__ */ s(ie, { asChild: !0, children: /* @__PURE__ */ n(
        $,
        {
          id: o,
          variant: "outline",
          role: "combobox",
          className: ae("w-full justify-between", h),
          "data-testid": "parent-page-selector",
          children: [
            c(),
            /* @__PURE__ */ s(te, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ s(ce, { className: "w-[var(--radix-popover-trigger-width)] p-0", align: "start", children: /* @__PURE__ */ n(ue, { shouldFilter: !1, children: [
        /* @__PURE__ */ s("div", { className: "relative border-none py-2", children: /* @__PURE__ */ s("div", { className: "sticky top-0 z-10 bg-white px-3 py-2", children: /* @__PURE__ */ n("div", { className: "relative", children: [
          /* @__PURE__ */ s(re, { strokeWidth: 2, className: "absolute left-2 top-2 h-4 w-4 text-gray-400" }),
          /* @__PURE__ */ s(
            Q,
            {
              placeholder: "Search pages...",
              className: "h-8 pl-8 text-xs",
              value: D,
              onChange: (a) => j(a.target.value)
            }
          )
        ] }) }) }),
        /* @__PURE__ */ n(he, { className: "max-h-[300px] overflow-y-auto", children: [
          /* @__PURE__ */ s(me, { children: "No pages found." }),
          /* @__PURE__ */ n(Y, { children: [
            /* @__PURE__ */ n(
              B,
              {
                value: "none",
                onSelect: () => {
                  b(""), u(!1), j("");
                },
                className: "flex cursor-pointer items-center justify-between",
                children: [
                  /* @__PURE__ */ s("span", { children: "None" }),
                  /* @__PURE__ */ s(O, { className: ae("mr-2 h-4 w-4", p ? "opacity-0" : "opacity-100") })
                ]
              }
            ),
            G.map((a) => {
              const m = v(y(a.slug)), g = T(a.slug), F = /* @__PURE__ */ n("span", { className: "flex items-center text-sm", children: [
                m,
                a.name,
                /* @__PURE__ */ n("span", { className: "text-xs text-gray-500", children: [
                  " (",
                  g,
                  ")"
                ] })
              ] });
              return /* @__PURE__ */ n(
                B,
                {
                  value: a.id,
                  onSelect: () => {
                    b(a.id), u(!1), j("");
                  },
                  className: "flex cursor-pointer items-center justify-between whitespace-pre-wrap",
                  children: [
                    /* @__PURE__ */ s("span", { children: F }),
                    /* @__PURE__ */ s(
                      O,
                      {
                        className: ae(
                          "mr-2 h-4 w-4 shrink-0",
                          p === a.id ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                a.id
              );
            })
          ] })
        ] })
      ] }) })
    ] }) : /* @__PURE__ */ n(
      "select",
      {
        id: o,
        value: p || "none",
        onChange: (a) => b(a.target.value),
        className: h,
        "data-testid": "parent-page-selector",
        children: [
          /* @__PURE__ */ s("option", { value: "none", children: "None" }),
          W.map((a) => {
            const m = y(a.slug), g = m > 0 ? v(m) : "", F = T(a.slug);
            return (d == null ? void 0 : d.id) && (d.id === a.id || a.slug.startsWith(d.slug + "/")) ? null : /* @__PURE__ */ n("option", { value: a.id, children: [
              g,
              a.name,
              " (",
              F,
              ")"
            ] }, a.id);
          })
        ]
      }
    )
  ] });
}
const A = (...l) => l.filter(Boolean).join(" ");
function bs({ addEditPage: l, close: p, closePanel: b }) {
  var Ce, ke;
  const { data: h } = ns(), o = q(() => h ?? [], [h]), d = as(), i = !!(l != null && l.id), { data: u } = ts(), { mutate: D, isPending: j } = rs(), { mutate: z, isPending: W } = os(), [G, y] = f(null), [v, T] = f(!0), [c, a] = f((l == null ? void 0 : l.pageType) ?? "page"), { hasPermission: m } = es(), g = m(is.CHANGE_PAGE_TYPE), [F, R] = f(!1), [ze, Te] = f(""), { selectedLang: Re, fallbackLang: Ue } = ss(), pe = Re || Ue, [M, J] = f(""), [ge, H] = f(!1), fe = q(() => {
    const e = o.find((r) => r.key === c);
    return (e == null ? void 0 : e.hasSlug) === !1;
  }, [c, o]), [S, Ve] = f((l == null ? void 0 : l.parent) ?? ""), [U, de] = f((l == null ? void 0 : l.name) ?? ""), [w, ye] = f((l == null ? void 0 : l.dynamic) ?? !1), [C, Z] = f(w ? "" : ((l == null ? void 0 : l.slug) ?? "").split("/").pop() || ""), [ve, Ne] = f((l == null ? void 0 : l.dynamicSlugCustom) ?? ""), [Se, Ae] = f(!0), [Ie, se] = f(!1), _ = j || W, xe = $e("enable-add-page-dropdown"), le = q(() => !i || !(l != null && l.id) || !u ? null : u.find((e) => e.id === l.id), [i, l == null ? void 0 : l.id, u]), Oe = (le == null ? void 0 : le.online) || !1, qe = q(() => !i || !(l != null && l.id) || !u ? !1 : u.some((e) => e.parent === l.id), [i, l == null ? void 0 : l.id, u]), t = o.find((e) => e.key === c), V = (e) => {
    if (i && c !== e) {
      Te(e), R(!0), J(""), H(!1);
      return;
    }
    a(e), J(""), H(!1);
  }, be = () => {
    a(ze), R(!1), ye(!1);
  }, Be = (e) => {
    ye(e), e ? Z("") : Ne("");
  }, Ge = (e) => {
    if (Ve(e), e && e !== "none") {
      const r = u == null ? void 0 : u.find((N) => N.id === e), k = (r == null ? void 0 : r.slug) || "";
      if (C.startsWith(k)) {
        const N = C.slice(k.length).replace(/^\/+/, "");
        Z(N);
      } else
        Z(C.replace(/^\/+/, ""));
    } else
      Z(C ? `${C}` : "");
  }, Me = () => U.trim() ? w && !Fe(C) ? (y("Slug must be empty when using dynamic slug"), !1) : w && !Se ? (y("Dynamic slug is invalid"), !1) : !0 : (E.error("Name is required"), !1), _e = () => {
    const e = {
      pageType: t == null ? void 0 : t.key,
      name: U,
      slug: "",
      hasSlug: !1
    };
    i ? z(
      { id: l == null ? void 0 : l.id, name: U },
      {
        onSuccess: () => {
          E.success((t == null ? void 0 : t.name) + " updated successfully"), p();
        }
      }
    ) : D(e, {
      onSuccess: (r) => {
        p(), d(r.page.id, b);
      }
    });
  }, Ye = (e, r) => {
    if (!e.trim() && !w)
      return y("Child page slug is required"), !1;
    const k = ee(r), N = je(k, e);
    return Object.keys(cs).some((X) => N === `/${X}` || (N == null ? void 0 : N.startsWith(`/${X}/`))) ? (y("Slugs cannot start with a language code for primary page"), !1) : !0;
  }, Qe = (e, r) => {
    const k = ee(r), N = je(k, e), x = {
      pageType: c,
      name: U,
      slug: N.replace(/\/$/, ""),
      // remove trailing slashes
      parent: S,
      dynamic: w,
      hasSlug: !0,
      template: void 0,
      tracking: {},
      seo: {},
      jsonLD: {}
    };
    if (w && (x.dynamicSlugCustom = ve), i) {
      const L = Ke(x, ["pageType", "parent", "name", "slug", "dynamic", "dynamicSlugCustom"]);
      z(
        { id: l == null ? void 0 : l.id, ...L },
        {
          onSuccess: () => {
            E.success("Page updated successfully"), p();
          }
        }
      );
    } else {
      const L = De(o, { key: c });
      L != null && L.trackingDefault && (x.tracking = L.trackingDefault);
      const { seo: X, jsonLD: Ze } = We(L, pe);
      P(x, "seo", X), P(x, "jsonLD", Ze), D(x, {
        onSuccess: (Je) => {
          p(), d(Je.page.id, b);
        }
      });
    }
  }, He = () => {
    const e = {
      pageType: c,
      name: U,
      slug: C === "" ? "/" : `/${C.replace(/\/$/, "")}`,
      template: void 0,
      parent: null,
      tracking: {}
    };
    if (i)
      z(
        { id: l == null ? void 0 : l.id, ...e },
        {
          onSuccess: () => {
            E.success("Page updated successfully"), p();
          }
        }
      );
    else {
      const r = De(o, { key: c });
      r != null && r.trackingDefault && (e.tracking = r.trackingDefault);
      const { seo: k, jsonLD: N } = We(r, pe);
      P(e, "seo", k), P(e, "jsonLD", N), D(e, {
        onSuccess: (x) => {
          var L;
          (L = x == null ? void 0 : x.page) != null && L.id && d(x.page.id, b), p();
        }
      });
    }
  }, we = (e) => {
    if (e.preventDefault(), y(null), !!Me()) {
      if (!(t != null && t.hasSlug)) {
        _e();
        return;
      }
      if (S && S !== "none") {
        const r = u == null ? void 0 : u.find((N) => N.id === S), k = (r == null ? void 0 : r.slug) || "";
        if (!Ye(C, k))
          return;
        Qe(C, k);
      } else
        He();
    }
  }, { pagesType: ne, partialsType: K } = q(() => {
    const e = (r) => M ? r.name.toLowerCase().includes(M.toLowerCase()) || r.key.toLowerCase().includes(M.toLowerCase()) : !0;
    return {
      pagesType: o.filter((r) => r.hasSlug !== !1 && e(r)),
      partialsType: o.filter((r) => r.hasSlug === !1 && e(r))
    };
  }, [o, M]);
  return t != null && t.hasSlug ? /* @__PURE__ */ n("form", { onSubmit: we, className: "mx-auto w-full max-w-md space-y-4", children: [
    /* @__PURE__ */ n("div", { className: "space-y-0.5", children: [
      /* @__PURE__ */ s(I, { htmlFor: "pageType", className: "text-sm", children: "Type" }),
      xe ? /* @__PURE__ */ n(oe, { open: ge, onOpenChange: H, children: [
        /* @__PURE__ */ s(ie, { asChild: !0, children: /* @__PURE__ */ n(
          $,
          {
            variant: "outline",
            role: "combobox",
            disabled: i && !g,
            className: A(
              "w-full justify-between",
              i && !g ? "cursor-not-allowed text-gray-500" : ""
            ),
            children: [
              (t == null ? void 0 : t.name) || "Select page type",
              /* @__PURE__ */ s(te, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
            ]
          }
        ) }),
        /* @__PURE__ */ s(ce, { className: "w-[var(--radix-popover-trigger-width)] p-0", align: "start", children: /* @__PURE__ */ n(ue, { shouldFilter: !1, children: [
          /* @__PURE__ */ s("div", { className: "sticky top-0 z-10 bg-white px-3 py-2", children: /* @__PURE__ */ n("div", { className: "relative", children: [
            /* @__PURE__ */ s(re, { strokeWidth: 2, className: "absolute left-2 top-2 h-4 w-4 text-gray-400" }),
            /* @__PURE__ */ s(
              Q,
              {
                placeholder: "Search page types...",
                className: "h-8 pl-8 text-xs",
                value: M,
                onChange: (e) => J(e.target.value)
              }
            )
          ] }) }),
          /* @__PURE__ */ n(he, { className: "overflow-y-auto", children: [
            /* @__PURE__ */ s(me, { children: "No page type found." }),
            i ? fe ? /* @__PURE__ */ s(Y, { heading: "Partials", children: K.map((e) => /* @__PURE__ */ n(
              B,
              {
                value: e.key,
                onSelect: () => V(e.key),
                className: "flex cursor-pointer items-center justify-between",
                children: [
                  e.name,
                  /* @__PURE__ */ s(
                    O,
                    {
                      className: A("mr-2 h-4 w-4", c === e.key ? "opacity-100" : "opacity-0")
                    }
                  )
                ]
              },
              e.key
            )) }) : /* @__PURE__ */ s(Y, { heading: "Pages", children: ne.map((e) => /* @__PURE__ */ n(
              B,
              {
                value: e.key,
                onSelect: () => V(e.key),
                className: "flex cursor-pointer items-center justify-between",
                children: [
                  e.name,
                  /* @__PURE__ */ s(
                    O,
                    {
                      className: A("mr-2 h-4 w-4", c === e.key ? "opacity-100" : "opacity-0")
                    }
                  )
                ]
              },
              e.key
            )) }) : /* @__PURE__ */ n(Le, { children: [
              ne.length > 0 && /* @__PURE__ */ s(Y, { heading: "Pages", children: ne.map((e) => /* @__PURE__ */ n(
                B,
                {
                  value: e.key,
                  onSelect: () => V(e.key),
                  className: "flex cursor-pointer items-center justify-between",
                  children: [
                    e.name,
                    /* @__PURE__ */ s(
                      O,
                      {
                        className: A("mr-2 h-4 w-4", c === e.key ? "opacity-100" : "opacity-0")
                      }
                    )
                  ]
                },
                e.key
              )) }),
              K.length > 0 && /* @__PURE__ */ s(Y, { heading: "Partials", children: K.map((e) => /* @__PURE__ */ n(
                B,
                {
                  value: e.key,
                  onSelect: () => V(e.key),
                  className: "flex cursor-pointer items-center justify-between",
                  children: [
                    e.name,
                    /* @__PURE__ */ s(
                      O,
                      {
                        className: A("mr-2 h-4 w-4", c === e.key ? "opacity-100" : "opacity-0")
                      }
                    )
                  ]
                },
                e.key
              )) })
            ] })
          ] })
        ] }) })
      ] }) : /* @__PURE__ */ s(
        "select",
        {
          id: "pageType",
          value: c,
          disabled: i && !g,
          onChange: (e) => V(e.target.value),
          className: `w-full rounded-md border border-gray-300 px-3 py-2 ${i && !g ? "cursor-not-allowed text-gray-500" : ""}`,
          children: i ? fe ? /* @__PURE__ */ s("optgroup", { label: "Partials", children: o.filter((e) => e.hasSlug === !1).map((e) => /* @__PURE__ */ s("option", { value: e.key, children: e.name }, e.key)) }) : /* @__PURE__ */ s("optgroup", { label: "Pages", children: o.filter((e) => e.hasSlug !== !1).map((e) => /* @__PURE__ */ s("option", { value: e.key, children: e.name }, e.key)) }) : /* @__PURE__ */ n(Le, { children: [
            /* @__PURE__ */ s("optgroup", { label: "Pages", children: o.filter((e) => e.hasSlug !== !1).map((e) => /* @__PURE__ */ s("option", { value: e.key, children: e.name }, e.key)) }),
            /* @__PURE__ */ s("optgroup", { label: "Partials", children: o.filter((e) => e.hasSlug === !1).map((e) => /* @__PURE__ */ s("option", { value: e.key, children: e.name }, e.key)) })
          ] })
        }
      ),
      F && /* @__PURE__ */ n("div", { className: "mt-2 rounded-md border border-yellow-200 bg-yellow-50 p-3", children: [
        /* @__PURE__ */ s("p", { className: "text-sm text-yellow-800", children: "Changing the page type may impact the page data. Are you sure you want to proceed?" }),
        /* @__PURE__ */ n("div", { className: "mt-2 flex gap-2", children: [
          /* @__PURE__ */ s($, { variant: "outline", size: "sm", onClick: () => R(!1), children: "Cancel" }),
          /* @__PURE__ */ s($, { variant: "default", size: "sm", onClick: be, children: "Confirm" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ s(
      ms,
      {
        pages: u,
        selectedParentId: S,
        onChange: Ge,
        currentPage: l
      }
    ),
    /* @__PURE__ */ n("div", { className: "space-y-0.5", children: [
      /* @__PURE__ */ s(I, { htmlFor: "name", className: "text-sm", children: "Name" }),
      /* @__PURE__ */ s(
        Q,
        {
          id: "name",
          value: U,
          onChange: (e) => de(e.target.value),
          required: !0,
          "aria-required": "true",
          placeholder: "Enter page name"
        }
      )
    ] }),
    (t == null ? void 0 : t.dynamicSegments) && S && S !== "none" && /* @__PURE__ */ n("div", { className: "space-y-2", children: [
      /* @__PURE__ */ n("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ s(
          "input",
          {
            type: "checkbox",
            id: "useDynamicSlug",
            checked: w,
            onChange: (e) => Be(e.target.checked),
            className: "rounded border-gray-300"
          }
        ),
        /* @__PURE__ */ s(I, { htmlFor: "useDynamicSlug", className: "text-sm", children: "Use Dynamic Slug" })
      ] }),
      w && /* @__PURE__ */ s("div", { className: "space-y-2", children: /* @__PURE__ */ s("div", { className: "space-y-0.5", children: /* @__PURE__ */ s(
        us,
        {
          value: ve,
          onChange: Ne,
          dynamicPattern: (t == null ? void 0 : t.dynamicSlug) || "{{id}}",
          placeholder: "Enter custom slug part (optional)",
          onValidationChange: Ae
        }
      ) }) })
    ] }),
    (!(t != null && t.dynamicSegments) || !w) && /* @__PURE__ */ n("div", { className: "space-y-0.5", children: [
      /* @__PURE__ */ s(I, { htmlFor: "slug", className: "text-sm", children: "Slug" }),
      /* @__PURE__ */ s(
        ls,
        {
          value: C,
          onChange: (e) => {
            var r;
            Z(e), i && e !== (((r = l == null ? void 0 : l.slug) == null ? void 0 : r.split("/").pop()) || "") ? se(!!(Oe || qe)) : se(!1);
          },
          placeholder: S && S !== "none" ? "Enter page slug" : c === "page" ? "Leave empty for home page" : "Required - e.g. your-slug",
          parentSlug: S && S !== "none" ? (ke = u == null ? void 0 : u.find((e) => e.id === S)) == null ? void 0 : ke.slug : void 0,
          onValidationChange: T
        }
      ),
      G && /* @__PURE__ */ s("p", { className: "text-xs text-red-500", children: G }),
      Ie && /* @__PURE__ */ s("div", { className: "mt-4 rounded-md border border-amber-200 bg-amber-50 p-3", children: /* @__PURE__ */ n("div", { className: "flex items-start space-x-2", children: [
        /* @__PURE__ */ s("div", { className: "flex-shrink-0", children: /* @__PURE__ */ s("svg", { className: "h-5 w-5 text-amber-400", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ s(
          "path",
          {
            fillRule: "evenodd",
            d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
            clipRule: "evenodd"
          }
        ) }) }),
        /* @__PURE__ */ n("div", { className: "flex-1", children: [
          /* @__PURE__ */ s("h3", { className: "text-sm font-medium text-amber-800", children: "Slug Change Warning" }),
          /* @__PURE__ */ s("div", { className: "mt-1 text-sm text-amber-700", children: /* @__PURE__ */ s("p", { children: "The previous URL and any child pages will become inaccessible. You may want to set up a redirect to avoid broken links." }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ s(
      $,
      {
        disabled: _ || // Disable if regular slug is invalid and we're not using dynamic slug
        !v && (!(t != null && t.dynamicSegments) || !w) || // Disable if dynamic slug is invalid and we are using dynamic slug
        w && !Se,
        type: "submit",
        className: "w-full",
        children: i ? _ ? "Updating..." : "Update page" : _ ? "Creating..." : "Create Page"
      }
    )
  ] }) : /* @__PURE__ */ n("form", { onSubmit: we, className: "mx-auto w-full max-w-md space-y-4", children: [
    /* @__PURE__ */ n("div", { className: "space-y-0.5", children: [
      /* @__PURE__ */ s(I, { htmlFor: "pageType", className: "text-sm", children: "Type" }),
      xe ? /* @__PURE__ */ n(oe, { open: ge, onOpenChange: H, children: [
        /* @__PURE__ */ s(ie, { asChild: !0, children: /* @__PURE__ */ n(
          $,
          {
            variant: "outline",
            role: "combobox",
            disabled: i && !g,
            className: A(
              "w-full justify-between",
              i && !g ? "cursor-not-allowed text-gray-500" : ""
            ),
            children: [
              (t == null ? void 0 : t.name) || "Select page type",
              /* @__PURE__ */ s(te, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
            ]
          }
        ) }),
        /* @__PURE__ */ s(ce, { className: "w-[var(--radix-popover-trigger-width)] p-0", align: "start", children: /* @__PURE__ */ n(ue, { shouldFilter: !1, children: [
          /* @__PURE__ */ s("div", { className: "sticky top-0 z-10 bg-white px-3 py-2", children: /* @__PURE__ */ n("div", { className: "relative", children: [
            /* @__PURE__ */ s(re, { strokeWidth: 2, className: "absolute left-2 top-2 h-4 w-4 text-gray-400" }),
            /* @__PURE__ */ s(
              Q,
              {
                placeholder: "Search page types...",
                className: "h-8 pl-8 text-xs",
                value: M,
                onChange: (e) => J(e.target.value)
              }
            )
          ] }) }),
          /* @__PURE__ */ n(he, { className: "max-h-[200px] overflow-y-auto", children: [
            /* @__PURE__ */ s(me, { children: "No page type found." }),
            /* @__PURE__ */ s(Y, { heading: "Partials", children: K.map((e) => /* @__PURE__ */ n(
              B,
              {
                value: e.key,
                onSelect: () => {
                  V(e.key), H(!1);
                },
                className: "flex cursor-pointer items-center justify-between",
                children: [
                  e.name,
                  /* @__PURE__ */ s(O, { className: A("mr-2 h-4 w-4", c === e.key ? "opacity-100" : "opacity-0") })
                ]
              },
              e.key
            )) })
          ] })
        ] }) })
      ] }) : /* @__PURE__ */ s(
        "select",
        {
          id: "pageType",
          value: c,
          disabled: i && !g,
          onChange: (e) => V(e.target.value),
          className: `w-full rounded-md border border-gray-300 px-3 py-2 ${i && !g ? "cursor-not-allowed text-gray-500" : ""}`,
          children: /* @__PURE__ */ s("optgroup", { label: "Partials", children: o.filter((e) => e.hasSlug === !1).map((e) => /* @__PURE__ */ s("option", { value: e.key, children: e.name }, e.key)) })
        }
      ),
      F && /* @__PURE__ */ n("div", { className: "mt-2 rounded-md border border-yellow-200 bg-yellow-50 p-3", children: [
        /* @__PURE__ */ s("p", { className: "text-sm text-yellow-800", children: "Changing the page type may impact the page data. Are you sure you want to proceed?" }),
        /* @__PURE__ */ n("div", { className: "mt-2 flex gap-2", children: [
          /* @__PURE__ */ s($, { variant: "outline", size: "sm", onClick: () => R(!1), children: "Cancel" }),
          /* @__PURE__ */ s($, { variant: "default", size: "sm", onClick: be, children: "Confirm" })
        ] })
      ] }),
      /* @__PURE__ */ s("p", { className: "text-xs text-gray-500", children: (Ce = o.find((e) => e.key === c)) == null ? void 0 : Ce.helpText })
    ] }),
    /* @__PURE__ */ n("div", { className: "space-y-0.5", children: [
      /* @__PURE__ */ s(I, { htmlFor: "name", className: "text-sm", children: "Name" }),
      /* @__PURE__ */ s(Q, { id: "name", value: U, onChange: (e) => de(e.target.value), required: !0, "aria-required": "true" })
    ] }),
    /* @__PURE__ */ s($, { disabled: _, type: "submit", className: "w-full", children: i ? _ ? "Updating..." : "Update " + (t == null ? void 0 : t.name) : _ ? "Creating..." : "Create " + (t == null ? void 0 : t.name) })
  ] });
}
export {
  bs as default
};
