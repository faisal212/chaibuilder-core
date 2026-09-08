import { jsx as e, jsxs as t } from "react/jsx-runtime";
import { startCase as w } from "lodash-es";
import { Tag as z, File as P, ImageIcon as B, X as E } from "lucide-react";
import { useState as c, useRef as L, useCallback as S } from "react";
import { useTranslation as U } from "react-i18next";
import { toast as y } from "sonner";
import { z as R, B as m } from "./register-chai-top-bar-DWmJ2efT.js";
import { D as j, e as O, f as X, g as _, o as $, p as k, T as q, q as H } from "./index-BmV_dra3.js";
import { n as K, h as Z } from "./index-D-G5gvhP.js";
const G = 1 * 1024 * 1024, re = ({ page: n, onClose: d }) => {
  const { t: a } = U(), [g, p] = c(!1), [x, T] = c(""), [l, N] = c(""), [v, u] = c(!1), i = L(null), I = K(), { data: h } = Z(), f = h == null ? void 0 : h.find((s) => s.key === n.pageType), C = (f == null ? void 0 : f.name) || w(n.pageType), D = S(
    (s) => {
      var b;
      const o = (b = s.target.files) == null ? void 0 : b[0];
      if (o) {
        if (o.size > G) {
          y.error(a("File too large"), {
            description: `${a("Maximum file size is 1MB. Selected file is")} ${(o.size / 1024).toFixed(2)}KB.`
          }), i.current && (i.current.value = "");
          return;
        }
        try {
          u(!0);
          const r = new FileReader();
          r.onloadend = () => {
            N(r.result), u(!1);
          }, r.readAsDataURL(o);
        } catch (r) {
          console.error("Error reading file:", r), u(!1), y.error(a("Failed to process image"), {
            description: r instanceof Error ? r.message : a("Unknown error")
          });
        }
      }
    },
    [a]
  ), F = () => {
    N(""), i.current && (i.current.value = "");
  }, M = () => {
    var s;
    (s = i.current) == null || s.click();
  }, A = () => {
    p(!0), I.mutate(
      {
        page: n,
        name: n.name,
        description: x.trim() || void 0,
        pageType: n.pageType,
        ...l ? { previewImage: l } : {}
      },
      {
        onSuccess: () => {
          p(!1), d();
        },
        onError: () => {
          p(!1);
        }
      }
    );
  };
  return /* @__PURE__ */ e(j, { open: !0, onOpenChange: d, children: /* @__PURE__ */ t(O, { children: [
    /* @__PURE__ */ t(X, { children: [
      /* @__PURE__ */ e(_, { children: a("Mark as template") }),
      /* @__PURE__ */ t($, { className: "space-y-1 py-4 text-xs text-slate-500", children: [
        a("Are you sure you want to mark this page as a template?"),
        /* @__PURE__ */ e("br", {}),
        a("Templates can be used to create new pages with the same content.")
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "mb-4 space-y-4 text-xs", children: [
      /* @__PURE__ */ t("div", { className: "space-y-3 rounded border bg-slate-50 p-4", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(z, { className: "h-4 w-4 text-slate-500" }),
          /* @__PURE__ */ t("span", { className: "font-medium text-slate-500", children: [
            a("Page Name"),
            ":"
          ] }),
          /* @__PURE__ */ e("span", { className: "font-semibold", children: w(n.name) })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e(P, { className: "h-4 w-4 text-slate-500" }),
          /* @__PURE__ */ t("span", { className: "font-medium text-slate-500", children: [
            a("Type"),
            ":"
          ] }),
          /* @__PURE__ */ e("span", { className: "font-semibold", children: C })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e(k, { htmlFor: "description", className: "text-xs font-medium", children: a("Description (Optional)") }),
        /* @__PURE__ */ e(
          q,
          {
            id: "description",
            placeholder: a("Describe this template's purpose"),
            className: "mt-1 h-24 resize-none text-xs",
            value: x,
            onChange: (s) => T(s.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { className: "space-y-2", children: [
        /* @__PURE__ */ e(k, { htmlFor: "previewImage", className: "text-xs font-medium", children: a("Preview Image (Optional)") }),
        /* @__PURE__ */ t("div", { className: "space-y-2", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e(
              R,
              {
                type: "file",
                id: "previewImage",
                ref: i,
                onChange: D,
                accept: "image/*",
                className: "hidden"
              }
            ),
            /* @__PURE__ */ e(
              m,
              {
                type: "button",
                variant: "outline",
                onClick: M,
                disabled: v,
                className: "w-full",
                children: v ? /* @__PURE__ */ t("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }),
                  a("Uploading...")
                ] }) : /* @__PURE__ */ t("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(B, { className: "h-4 w-4" }),
                  a("Select image")
                ] })
              }
            ),
            l && /* @__PURE__ */ e(m, { type: "button", variant: "outline", size: "icon", onClick: F, children: /* @__PURE__ */ e(E, { className: "h-4 w-4" }) })
          ] }),
          l && /* @__PURE__ */ e("div", { className: "aspect-video overflow-hidden rounded-md border", children: /* @__PURE__ */ e("img", { src: l, alt: a("Preview"), className: "h-full max-h-[200px] w-full object-contain" }) }),
          /* @__PURE__ */ e("p", { className: "text-xs text-muted-foreground", children: a("max 1mb") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t(H, { className: g ? "pointer-events-none opacity-75" : "", children: [
      /* @__PURE__ */ e(
        m,
        {
          variant: "outline",
          onClick: (s) => {
            s.stopPropagation(), d();
          },
          children: a("Cancel")
        }
      ),
      /* @__PURE__ */ e(m, { variant: "default", disabled: g, onClick: A, children: a("Mark as template") })
    ] })
  ] }) });
};
export {
  re as default
};
