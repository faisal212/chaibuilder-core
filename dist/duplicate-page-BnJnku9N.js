import { jsx as t, jsxs as a } from "react/jsx-runtime";
import { isEmpty as C, initial as A } from "lodash-es";
import { AlertCircle as T } from "lucide-react";
import { useState as p } from "react";
import { useTranslation as w } from "react-i18next";
import { z as F, D as _, B as v } from "./register-chai-top-bar-DWmJ2efT.js";
import { D as j, e as q, f as G, g as L, o as U, p as D } from "./index-5jmt7Tq5.js";
import { useQueryClient as $, useMutation as B } from "@tanstack/react-query";
import { toast as P } from "sonner";
import { ai as O, aj as k, ag as M, ak as Q } from "./index-DU3EamrW.js";
import { S as V } from "./slug-input-YkkfwpPJ.js";
const z = () => {
  const s = O(), o = $(), g = k();
  return B({
    mutationFn: async ({ pageId: e, name: h, slug: r }) => {
      const u = {
        pageId: e,
        name: h
      };
      return r && (u.slug = r), await g(s, {
        action: "DUPLICATE_PAGE",
        data: u
      });
    },
    onSuccess: () => {
      o.invalidateQueries({
        queryKey: [M.GET_WEBSITE_PAGES]
      }), P.success("Page duplicated successfully");
    },
    onError: (e) => {
      P.error("Failed to duplicate page", {
        description: e.message || "An error occurred while duplicating the page"
      });
    }
  });
}, te = ({
  page: s,
  onClose: o,
  closePanel: g = () => {
  }
}) => {
  const { t: e } = w(), { mutate: h, isPending: r } = z(), [u, i] = p(null), [m, x] = p(`${s.name} (Copy)`), I = Q(), l = C(s.slug), [d, E] = p(l ? "" : `${s.slug.split("/").pop()}-copy`), y = l ? "" : A(s.slug.split("/")).join("/"), [N, f] = p(!1), b = (n) => {
    if (n.preventDefault(), !m.trim()) {
      i(e("Name is required"));
      return;
    }
    if (!l && !d.trim()) {
      i(e("Slug is required"));
      return;
    }
    i(null), f(!0);
    const S = {
      pageId: s.id,
      name: m
    };
    l || (S.slug = `${y}/${d}`), h(S, {
      onSuccess: (c) => {
        f(!1), o(), I(c.id, g);
      },
      onError: (c) => {
        f(!1), c.code === "SLUG_EXISTS" ? i(e("A page with this slug already exists. Please choose a different slug.")) : c.code === "INVALID_SLUG" ? i(e("The slug format is invalid. Please use only lowercase letters, numbers, and hyphens.")) : c.code === "PERMISSION_DENIED" ? i(e("You don't have permission to duplicate this page.")) : i(c.message || e("Failed to duplicate page. Please try again later."));
      }
    });
  };
  return /* @__PURE__ */ t(j, { open: !!s, onOpenChange: o, children: /* @__PURE__ */ a(q, { className: "sm:max-w-[425px]", children: [
    /* @__PURE__ */ a(G, { children: [
      /* @__PURE__ */ t(L, { children: e("Duplicate Page") }),
      /* @__PURE__ */ t(U, { children: e("Create a copy of the page with a new name and slug") })
    ] }),
    /* @__PURE__ */ a("div", { className: "mb-4 rounded-md bg-gray-50 p-3", children: [
      /* @__PURE__ */ a("h3", { className: "mb-1 text-sm font-medium", children: [
        e("Duplicating:"),
        ":"
      ] }),
      /* @__PURE__ */ a("div", { className: "flex flex-col gap-1 text-sm text-gray-700", children: [
        /* @__PURE__ */ a("div", { children: [
          /* @__PURE__ */ a("span", { className: "font-medium", children: [
            e("Name"),
            ":"
          ] }),
          " ",
          s.name
        ] }),
        !l && /* @__PURE__ */ a("div", { children: [
          /* @__PURE__ */ a("span", { className: "font-medium", children: [
            e("Slug"),
            ":"
          ] }),
          " ",
          s.slug
        ] }),
        /* @__PURE__ */ a("div", { children: [
          /* @__PURE__ */ a("span", { className: "font-medium", children: [
            e("Type"),
            ":"
          ] }),
          " ",
          s.pageType
        ] })
      ] })
    ] }),
    /* @__PURE__ */ a("form", { onSubmit: b, className: "space-y-4", children: [
      /* @__PURE__ */ a("div", { className: "space-y-2", children: [
        /* @__PURE__ */ t(D, { htmlFor: "name", className: "text-sm", children: e("Name") }),
        /* @__PURE__ */ t(F, { id: "name", value: m, onChange: (n) => x(n.target.value), required: !0 })
      ] }),
      !l && /* @__PURE__ */ a("div", { className: "space-y-2", children: [
        /* @__PURE__ */ t(D, { htmlFor: "slug", className: "text-sm", children: e("Slug") }),
        /* @__PURE__ */ t(
          V,
          {
            value: d,
            onChange: (n) => E(n),
            parentSlug: y,
            onValidationChange: (n) => {
              i(n ? null : e("Invalid slug"));
            }
          }
        )
      ] }),
      u && /* @__PURE__ */ a(_, { variant: "destructive", className: "py-2", children: [
        /* @__PURE__ */ t(T, { className: "h-4 w-4" }),
        /* @__PURE__ */ t("span", { className: "text-sm", children: u })
      ] }),
      /* @__PURE__ */ a("div", { className: "flex justify-end gap-2", children: [
        /* @__PURE__ */ t(v, { type: "button", variant: "outline", onClick: o, disabled: r, children: e("Cancel") }),
        /* @__PURE__ */ t(v, { type: "submit", disabled: !m.trim() || !l && !d.trim() || r || N, children: e(r || N ? "Duplicating..." : "Duplicate") })
      ] })
    ] })
  ] }) });
};
export {
  te as default
};
