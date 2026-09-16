import { jsx as s, jsxs as a } from "react/jsx-runtime";
import { find as fe, get as r, isEqual as Z } from "lodash-es";
import { useMemo as pe, useRef as Q, useState as C, useEffect as W } from "react";
import { useTranslation as ye } from "react-i18next";
import { toast as D } from "sonner";
import { B as R, D as xe, E as ve, z as j } from "./register-chai-top-bar-DWmJ2efT.js";
import { d as te, D as Ne, e as we, f as Se, g as De, o as Oe, n as be, Y as Le, Z as Ie, _ as Te, $ as H, p, T as X } from "./index-D3voLMRT.js";
import { g as Ee, L as ee, aq as Fe, ar as Ce, as as je, d as ke, at as Re, au as Je, av as T, aw as Pe, ax as se } from "./index-DHC7hjZy.js";
import { g as $ } from "./get-seo-defaults-9zHebckY.js";
const Ue = () => {
  const { selectedLang: t } = te(), { data: w, isFetching: m } = Ee();
  return { data: pe(() => fe(w, { lang: t || "" }) || {}, [w, t]), isFetching: m };
}, Ve = ({
  isOpen: t,
  onClose: w,
  onSave: m,
  onDiscard: c,
  isSaving: o = !1,
  fromLanguage: O,
  toLanguage: N
}) => {
  const E = ee[O] || O, g = ee[N] || N;
  return /* @__PURE__ */ s(Ne, { open: t, onOpenChange: w, children: /* @__PURE__ */ a(we, { className: "sm:max-w-[425px]", children: [
    /* @__PURE__ */ a(Se, { children: [
      /* @__PURE__ */ s(De, { children: "Unsaved SEO Changes" }),
      /* @__PURE__ */ a(Oe, { children: [
        'You have unsaved changes in the SEO for "',
        E,
        '" version. Do you want to save these changes before switching to "',
        g,
        '" version?'
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "flex justify-end gap-3 pt-4", children: [
      /* @__PURE__ */ s(R, { variant: "outline", onClick: c, disabled: o, children: "Discard Changes" }),
      /* @__PURE__ */ s(R, { onClick: m, disabled: o, children: o ? "Saving..." : "Save & Switch" })
    ] })
  ] }) });
}, Ge = (t) => {
  if (!t) return !0;
  try {
    return JSON.parse(t), !0;
  } catch {
    return !1;
  }
}, Ae = (t, w) => {
  const m = t.selectionStart || 0, c = t.selectionEnd || 0, o = t.value, O = o.substring(0, m), N = o.substring(c), E = `{{${w}}}`, g = O + "" + E + N, G = m + 0 + // Account for space before if added
  E.length;
  return {
    value: g,
    newCursorPos: G
  };
}, Be = () => {
  const { t } = ye(), [, w] = be(), { data: m } = Fe(), { data: c } = Ce(), { data: o, isFetching: O } = Ue(), N = o == null ? void 0 : o.seo, E = Q(null), [g, G] = C("seo"), J = m == null ? void 0 : m.id, ae = m == null ? void 0 : m.pageType, b = je(ae), { selectedLang: q, fallbackLang: ne } = te(), d = q || ne, [z, P] = C(!1), [le, Y] = C(!1), [oe, U] = C(!1), [y, V] = C(null), [l, x] = C({
    keyword: "",
    title: "",
    description: "",
    cononicalUrl: "",
    noIndex: !1,
    noFollow: "",
    ogTitle: "",
    ogDescription: "",
    ogImage: "",
    ogImageId: "",
    searchTitle: "",
    searchDescription: "",
    jsonLD: "{}",
    metaOther: "{}",
    ...N
  }), F = Q({}), { mutate: ie, isPending: A } = ke(), h = A || z || le, { hasPermission: re } = Le(), n = re(Re.EDIT_SEO), [ce] = Je(), de = r(ce, "flags.resetSeoToDefault", !1), _ = !q || l.jsonLD !== "{}";
  W(() => {
    if (!O && N && J) {
      const e = {
        keyword: "",
        title: "",
        description: "",
        cononicalUrl: "",
        noIndex: !1,
        noFollow: "",
        ogTitle: "",
        ogDescription: "",
        ogImage: "",
        ogImageId: "",
        searchTitle: "",
        searchDescription: "",
        jsonLD: "",
        metaOther: "",
        ...N
      };
      x(e), F.current[d] = e;
    }
  }, [O, N, d, J]), W(() => {
    const e = (i) => {
      const { fromLang: v, toLang: k, switchHandler: u } = i.detail, B = F.current[d];
      (B ? !Z(B, l) : !1) ? (V({ fromLang: v, toLang: k, switchHandler: u }), U(!0)) : u();
    };
    return window.addEventListener("seo-language-switch-check", e), () => {
      window.removeEventListener("seo-language-switch-check", e);
    };
  }, [J, l, d]);
  const me = async () => {
    if (!(!b || !d))
      try {
        P(!0);
        const e = $(b, d), i = {
          ...l,
          keyword: r(e, "seo.keyword", ""),
          title: r(e, "seo.title", ""),
          description: r(e, "seo.description", ""),
          cononicalUrl: r(e, "seo.canonicalUrl", ""),
          noIndex: r(e, "seo.noIndex", !1),
          noFollow: r(e, "seo.noFollow", !1),
          ogTitle: r(e, "seo.ogTitle", ""),
          ogDescription: r(e, "seo.ogDescription", "")
          // Keep jsonLD as is
        };
        x(i), D.success(t("SEO fields reset to defaults"));
      } catch (e) {
        D.error(t("Failed to reset SEO fields")), console.error("Reset SEO error:", e);
      } finally {
        P(!1);
      }
  }, he = async () => {
    if (!(!b || !d))
      try {
        Y(!0);
        const e = $(b, d), i = {
          ...l,
          jsonLD: r(e, "seo.jsonLD", "")
        };
        x(i), D.success(t("JSON-LD reset to default"));
      } catch (e) {
        D.error(t("Failed to reset JSON-LD")), console.error("Reset JSON-LD error:", e);
      } finally {
        Y(!1);
      }
  }, ge = async () => {
    if (!(!b || !d))
      try {
        P(!0);
        const e = $(b, d), i = {
          ...l,
          ogTitle: r(e, "seo.ogTitle", ""),
          ogDescription: r(e, "seo.ogDescription", ""),
          ogImage: r(e, "seo.ogImage", ""),
          ogImageId: r(e, "seo.ogImageId", ""),
          metaOther: r(e, "seo.metaOther", "{}")
        };
        x(i), D.success(t("Meta Tag fields reset to defaults"));
      } catch (e) {
        D.error(t("Failed to reset Meta Tag fields")), console.error("Reset Meta Tag error:", e);
      } finally {
        P(!1);
      }
  }, K = async () => {
    ie(
      { id: o == null ? void 0 : o.id, seo: l, primaryPage: J },
      {
        onSuccess: () => {
          console.log("SEO & JSON-LD updated successfully", l), F.current[d] = l, D.success("SEO & JSON-LD updated successfully");
        }
      }
    );
  }, S = (e, i) => {
    const v = document.getElementById(i);
    if (v) {
      const { value: k, newCursorPos: u } = Ae(v, e);
      E.current = {
        id: i,
        position: u
      }, v.tagName.toLowerCase() === "input" ? (v.value = k, x((I) => ({
        ...I,
        [v.name]: k
      })), v.focus(), v.setSelectionRange(u, u), [0, 10, 50, 100, 200].forEach((I) => {
        setTimeout(() => {
          const M = document.getElementById(i);
          M && (M.focus(), M.setSelectionRange(u, u));
        }, I);
      })) : (x((L) => ({
        ...L,
        [v.name]: k
      })), requestAnimationFrame(() => {
        const L = document.getElementById(i);
        L && (L.focus(), L.setSelectionRange(u, u), setTimeout(() => {
          const I = document.getElementById(i);
          I && (I.focus(), I.setSelectionRange(u, u));
        }, 50));
      }));
    }
  }, f = (e) => {
    const i = {
      ...l,
      [e.target.name]: e.target.name === "noIndex" || e.target.name === "noFollow" ? e.target.checked : e.target.value
    };
    x(i);
  }, ue = () => {
    const e = r(m, "seo.jsonLD", "{}");
    if ((e == null ? void 0 : e.trim()) === "{}") {
      D.error("Default page JSON-LD is empty");
      return;
    }
    f({ target: { name: "jsonLD", value: e } });
  };
  return /* @__PURE__ */ a("div", { className: "relative flex h-full flex-col", "data-panel-id": "seo", children: [
    !n && /* @__PURE__ */ s("div", { className: "absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm", children: /* @__PURE__ */ s(xe, { variant: "default", className: "w-[80%] max-w-md text-xs", children: /* @__PURE__ */ s(ve, { children: t("You don't have permission to edit SEO settings. Contact your administrator for access.") }) }) }),
    /* @__PURE__ */ a("div", { className: "no-scrollbar flex-grow overflow-y-auto px-2 pb-20", children: [
      /* @__PURE__ */ s("div", { className: "mb-4 flex w-full items-center justify-between rounded-md bg-gray-100 px-2 py-1 text-left text-sm", children: /* @__PURE__ */ a("span", { children: [
        /* @__PURE__ */ s("div", { className: "font-medium", children: o == null ? void 0 : o.name }),
        /* @__PURE__ */ s("span", { className: "font-mono text-xs leading-tight text-gray-500", children: o == null ? void 0 : o.slug })
      ] }) }),
      /* @__PURE__ */ s("form", { className: "space-y-8", children: /* @__PURE__ */ a(Ie, { value: g, onValueChange: G, className: "w-full", children: [
        /* @__PURE__ */ a(Te, { className: "mb-4 grid w-full grid-cols-3", children: [
          /* @__PURE__ */ s(H, { value: "seo", children: t("SEO") }),
          /* @__PURE__ */ s(H, { value: "opengraph", children: t("Meta Tags") }),
          /* @__PURE__ */ s(H, { value: "jsonld", children: t("JSON-LD") })
        ] }),
        /* @__PURE__ */ s("div", { className: g === "seo" ? "" : "sr-only", children: /* @__PURE__ */ a("div", { className: "space-y-4", children: [
          /* @__PURE__ */ a("div", { className: "space-y-1", children: [
            /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ s(p, { className: "text-xs", htmlFor: "keyword", children: t("Keyword") }),
              n && /* @__PURE__ */ s(
                T,
                {
                  dataType: "value",
                  data: c ?? {},
                  onSelect: (e) => S(e, "keyword")
                }
              )
            ] }),
            /* @__PURE__ */ s(
              j,
              {
                type: "text",
                id: "keyword",
                name: "keyword",
                value: l.keyword,
                onChange: f,
                disabled: h || !n,
                placeholder: t("Enter keyword"),
                readOnly: !n
              }
            )
          ] }),
          /* @__PURE__ */ a("div", { className: "space-y-1", children: [
            /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ s(p, { className: "text-xs", htmlFor: "title", children: t("SEO Title") }),
              /* @__PURE__ */ s("div", { className: "flex items-center justify-end gap-2", children: n && /* @__PURE__ */ s(
                T,
                {
                  dataType: "value",
                  data: c ?? {},
                  onSelect: (e) => S(e, "title")
                }
              ) })
            ] }),
            /* @__PURE__ */ s(
              j,
              {
                type: "text",
                id: "title",
                name: "title",
                value: l.title,
                onChange: f,
                disabled: h || !n,
                placeholder: t("Enter SEO title"),
                readOnly: !n
              }
            )
          ] }),
          /* @__PURE__ */ a("div", { className: "space-y-1", children: [
            /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ s(p, { className: "text-xs", htmlFor: "description", children: t("SEO Description") }),
              /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: n && /* @__PURE__ */ s(
                T,
                {
                  data: c ?? {},
                  onSelect: (e) => S(e, "description")
                }
              ) })
            ] }),
            /* @__PURE__ */ s(
              X,
              {
                id: "description",
                name: "description",
                rows: 5,
                value: l.description,
                onChange: f,
                disabled: h || !n,
                placeholder: t("Enter SEO description"),
                readOnly: !n
              }
            )
          ] }),
          /* @__PURE__ */ a("div", { className: "space-y-1", children: [
            /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ s(p, { className: "text-xs", htmlFor: "title", children: t("Canonical URL") }),
              n && /* @__PURE__ */ s(
                T,
                {
                  dataType: "value",
                  data: c ?? {},
                  onSelect: (e) => S(e, "canonicalUrl")
                }
              )
            ] }),
            /* @__PURE__ */ s(
              j,
              {
                type: "text",
                id: "canonicalUrl",
                name: "canonicalUrl",
                value: l.canonicalUrl,
                onChange: f,
                disabled: h || !n,
                placeholder: t("Enter Canonical URL"),
                readOnly: !n
              }
            )
          ] }),
          /* @__PURE__ */ a("div", { className: "", children: [
            /* @__PURE__ */ a("div", { className: "flex items-center gap-x-2", children: [
              /* @__PURE__ */ s(
                j,
                {
                  type: "checkbox",
                  id: "noIndex",
                  name: "noIndex",
                  checked: l.noIndex,
                  onChange: f,
                  disabled: h || !n,
                  className: "h-4 w-4"
                }
              ),
              /* @__PURE__ */ s(p, { className: "pb-1 text-xs", htmlFor: "noIndex", children: t("No Index") })
            ] }),
            /* @__PURE__ */ s("p", { className: "mt-0 text-[10px] font-light leading-4 text-gray-400", children: t("Check this if you don't want search engines to index this page.") })
          ] }),
          /* @__PURE__ */ a("div", { className: "", children: [
            /* @__PURE__ */ a("div", { className: "flex items-center gap-x-2", children: [
              /* @__PURE__ */ s(
                j,
                {
                  type: "checkbox",
                  id: "noFollow",
                  name: "noFollow",
                  checked: l.noFollow,
                  onChange: f,
                  disabled: h || !n,
                  className: "h-4 w-4"
                }
              ),
              /* @__PURE__ */ s(p, { className: "pb-1 text-xs", htmlFor: "noIndex", children: t("No Follow") })
            ] }),
            /* @__PURE__ */ s("p", { className: "text-[10px] font-light leading-4 text-gray-400", children: t("Check this if you don't want search engines to follow links on this page.") })
          ] })
        ] }) }),
        /* @__PURE__ */ s("div", { className: g === "opengraph" ? "" : "sr-only", children: /* @__PURE__ */ s("div", { className: "space-y-4", children: /* @__PURE__ */ a("div", { children: [
          /* @__PURE__ */ s("h3", { className: "mb-4 font-semibold text-slate-700", children: t("Open Graph") }),
          /* @__PURE__ */ a("div", { className: "space-y-4", children: [
            /* @__PURE__ */ a("div", { className: "space-y-1", children: [
              /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ s(p, { className: "text-xs", htmlFor: "ogTitle", children: t("OG Title") }),
                /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: n && /* @__PURE__ */ s(
                  T,
                  {
                    dataType: "value",
                    data: c ?? {},
                    onSelect: (e) => S(e, "ogTitle")
                  }
                ) })
              ] }),
              /* @__PURE__ */ s(
                j,
                {
                  type: "text",
                  id: "ogTitle",
                  name: "ogTitle",
                  value: l.ogTitle,
                  onChange: f,
                  disabled: h || !n,
                  placeholder: t("Enter OG title"),
                  readOnly: !n
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { className: "space-y-1", children: [
              /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ s(p, { className: "text-xs", htmlFor: "ogDescription", children: t("OG Description") }),
                /* @__PURE__ */ s("div", { className: "flex items-center gap-2", children: n && /* @__PURE__ */ s(
                  T,
                  {
                    dataType: "value",
                    data: c ?? {},
                    onSelect: (e) => S(e, "ogDescription")
                  }
                ) })
              ] }),
              /* @__PURE__ */ s(
                X,
                {
                  id: "ogDescription",
                  name: "ogDescription",
                  rows: 5,
                  value: l.ogDescription,
                  onChange: f,
                  disabled: h || !n,
                  placeholder: t("Enter OG description"),
                  readOnly: !n
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { className: "space-y-1", children: [
              /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ s(p, { className: "text-xs", htmlFor: "ogImage", children: t("OG Image") }),
                n && /* @__PURE__ */ s(
                  T,
                  {
                    dataType: "value",
                    data: c ?? {},
                    onSelect: (e) => {
                      x({
                        ...l,
                        ogImage: `{{${e}}}`,
                        ogImageId: ""
                      });
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ s(
                Pe,
                {
                  assetId: l.ogImageId,
                  assetUrl: l.ogImage,
                  onChange: (e) => {
                    x({
                      ...l,
                      ogImage: e.url,
                      ogImageId: e.id
                    });
                  },
                  disabled: h || !n,
                  placeholder: t("Select OG image"),
                  className: "mb-2"
                }
              )
            ] }),
            /* @__PURE__ */ a("div", { className: "space-y-1", children: [
              /* @__PURE__ */ s("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ s(p, { className: "text-xs", htmlFor: "metaOther", children: t("Meta Tags") }) }),
              /* @__PURE__ */ s(
                se,
                {
                  id: "metaOther",
                  value: l.metaOther,
                  onChange: (e) => {
                    f({
                      target: { name: "metaOther", value: e }
                    });
                  },
                  placeholder: t("Enter Meta Tags JSON"),
                  disabled: h || !n,
                  readOnly: !n,
                  pageData: c || {},
                  rows: 8,
                  handleFieldInsert: S
                }
              )
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ s("div", { className: g === "jsonld" ? "" : "sr-only", children: /* @__PURE__ */ s("div", { className: "space-y-4", children: /* @__PURE__ */ a("div", { className: "space-y-1", children: [
          /* @__PURE__ */ a("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ s(p, { className: "text-xs", htmlFor: "jsonLD", children: t("JSON-LD") }),
            _ && /* @__PURE__ */ s("div", { className: "flex items-center gap-2" })
          ] }),
          /* @__PURE__ */ s("div", { className: "hidden", children: JSON.stringify(c) }),
          /* @__PURE__ */ s(
            se,
            {
              id: "jsonLD",
              value: l.jsonLD,
              onChange: (e) => {
                f({ target: { name: "jsonLD", value: e } });
              },
              placeholder: t("Enter JSON-LD"),
              disabled: h || !n,
              readOnly: !n,
              pageData: c || {},
              rows: 12,
              handleFieldInsert: S,
              hasJsonLdForSelectedLang: _,
              copyJsonLDFromDefaultPage: ue
            }
          )
        ] }) }) })
      ] }) })
    ] }),
    n && /* @__PURE__ */ a("div", { className: "fixed bottom-0 left-0 right-0 flex w-full flex-shrink-0 items-center justify-between border-t bg-background p-4", children: [
      de ? /* @__PURE__ */ s(
        R,
        {
          type: "button",
          variant: "ghost",
          size: "sm",
          onClick: () => {
            g === "jsonld" ? he() : g === "opengraph" ? ge() : me();
          },
          disabled: h || !n || !b,
          children: t(z ? "Resetting..." : `Reset to ${g === "jsonld" ? "Default JSON-LD" : g === "opengraph" ? "Default Open Graph" : "Default SEO"}`)
        }
      ) : /* @__PURE__ */ s("div", {}),
      /* @__PURE__ */ a("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ s(
          R,
          {
            onClick: K,
            disabled: !Ge(l == null ? void 0 : l.jsonLD) || (F.current[d] ? Z(F.current[d], l) : !1) || h || !n,
            children: t(A ? "Saving..." : "Save")
          }
        ),
        /* @__PURE__ */ s(
          R,
          {
            variant: "link",
            className: "text-gray-500 hover:text-gray-700",
            onClick: () => w("outline"),
            children: t("Cancel")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ s(
      Ve,
      {
        isOpen: oe,
        onClose: () => {
          U(!1), V(null);
        },
        onSave: async () => {
          y && (await K(), y.switchHandler(), U(!1), V(null));
        },
        onDiscard: () => {
          if (y) {
            const e = F.current[d];
            e && x(e), y.switchHandler(), U(!1), V(null);
          }
        },
        isSaving: A,
        fromLanguage: (y == null ? void 0 : y.fromLang) || d,
        toLanguage: (y == null ? void 0 : y.toLang) || ""
      }
    )
  ] });
};
Be.displayName = "SeoPanel";
export {
  Be as default
};
