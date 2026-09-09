import { jsx as s, jsxs as t, Fragment as L } from "react/jsx-runtime";
import { Loader2 as T } from "lucide-react";
import { useState as c, useCallback as A, useEffect as O } from "react";
import { useTranslation as q } from "react-i18next";
import { z as m } from "zod";
import { z as h, B as E } from "./register-chai-top-bar-DWmJ2efT.js";
import { D as z, e as B, f as H, g as I, o as M, p as f, q as R } from "./index-B_Rd1YVJ.js";
import { ai as U, aj as W, ag as S, al as G } from "./index-DbFHENK5.js";
import { useMutation as _ } from "@tanstack/react-query";
const K = () => {
  const a = U(), o = W();
  return _({
    mutationKey: [S.CHANGE_PASSWORD],
    mutationFn: async (e) => {
      const n = await o(a, {
        action: S.CHANGE_PASSWORD,
        data: e
      });
      return n == null ? void 0 : n.data;
    }
  });
}, V = (a) => m.object({
  oldPassword: m.string().min(1, a("Current password is required")),
  newPassword: m.string().min(8, a("Password must be at least 8 characters")).max(128, a("Password must be less than 128 characters")).regex(/[A-Z]/, a("Password must contain at least one uppercase letter")).regex(/[a-z]/, a("Password must contain at least one lowercase letter")).regex(/[0-9]/, a("Password must contain at least one number")).regex(/[!@#$%^&*(),.?":{}|<>]/, a("Password must contain at least one special character")),
  confirmPassword: m.string().min(1, a("Confirm password is required"))
}).refine((o) => o.newPassword === o.confirmPassword, {
  message: a("New password and confirm password do not match"),
  path: ["confirmPassword"]
}).refine((o) => o.oldPassword !== o.newPassword, {
  message: a("New password must be different from current password"),
  path: ["newPassword"]
}), os = ({ open: a, onOpenChange: o }) => {
  const { t: e } = q(), n = G("currentUser", null), { mutate: j, isPending: w, isSuccess: u, reset: g } = K(), [P, C] = c(""), [x, N] = c(""), [v, D] = c(""), [b, d] = c(null), y = A(() => {
    C(""), N(""), D(""), d(null), g();
  }, [g]), l = A(
    (r) => {
      o(r), r || y();
    },
    [o, y]
  );
  O(() => {
    if (u) {
      const r = setTimeout(() => {
        l(!1);
      }, 2e3);
      return () => clearTimeout(r);
    }
  }, [u, l]);
  const k = () => {
    var F;
    d(null);
    const r = {
      oldPassword: P.trim(),
      newPassword: x.trim(),
      confirmPassword: v.trim()
    }, i = V(e).safeParse(r);
    if (!i.success) {
      d(((F = i.error.issues[0]) == null ? void 0 : F.message) || e("Validation failed"));
      return;
    }
    if (!(n != null && n.email)) {
      d(e("User email not found"));
      return;
    }
    j(
      {
        email: n.email,
        oldPassword: i.data.oldPassword,
        newPassword: i.data.newPassword,
        confirmPassword: i.data.confirmPassword
      },
      {
        onError: (p) => {
          d((p == null ? void 0 : p.message) || e("Failed to change password"));
        }
      }
    );
  };
  return /* @__PURE__ */ s(z, { open: a, onOpenChange: l, children: /* @__PURE__ */ s(B, { className: "sm:max-w-[425px]", children: w ? /* @__PURE__ */ s("div", { className: "flex h-[340px] items-center justify-center", children: /* @__PURE__ */ s(T, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : u ? /* @__PURE__ */ t("div", { className: "flex h-[340px] flex-col items-center justify-center gap-2", children: [
    /* @__PURE__ */ s("div", { className: "rounded-full bg-green-100 p-3", children: /* @__PURE__ */ s("svg", { className: "h-6 w-6 text-green-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ s("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) }),
    /* @__PURE__ */ s("p", { className: "text-lg font-medium", children: e("Password updated successfully") })
  ] }) : /* @__PURE__ */ t(L, { children: [
    /* @__PURE__ */ t(H, { children: [
      /* @__PURE__ */ s(I, { children: e("Change Password") }),
      /* @__PURE__ */ s(M, { children: e("Enter your current password and a new password.") })
    ] }),
    /* @__PURE__ */ t("div", { className: "grid gap-4 py-4", children: [
      /* @__PURE__ */ t("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ s(f, { htmlFor: "old-password", children: e("Current Password") }),
        /* @__PURE__ */ s(
          h,
          {
            id: "old-password",
            type: "password",
            value: P,
            onChange: (r) => C(r.target.value),
            placeholder: e("Enter current password")
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ s(f, { htmlFor: "new-password", children: e("New Password") }),
        /* @__PURE__ */ s(
          h,
          {
            id: "new-password",
            type: "password",
            value: x,
            onChange: (r) => N(r.target.value),
            placeholder: e("Enter new password")
          }
        )
      ] }),
      /* @__PURE__ */ t("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ s(f, { htmlFor: "confirm-password", children: e("Confirm Password") }),
        /* @__PURE__ */ s(
          h,
          {
            id: "confirm-password",
            type: "password",
            value: v,
            onChange: (r) => D(r.target.value),
            placeholder: e("Confirm new password")
          }
        )
      ] }),
      b && /* @__PURE__ */ s("p", { className: "text-sm text-destructive", children: b })
    ] }),
    /* @__PURE__ */ t(R, { children: [
      /* @__PURE__ */ s(E, { variant: "outline", onClick: () => l(!1), disabled: w, children: e("Cancel") }),
      /* @__PURE__ */ s(E, { onClick: k, disabled: w, children: e("Change Password") })
    ] })
  ] }) }) });
};
export {
  os as ChangePasswordModal
};
