import { jsx as e, jsxs as l } from "react/jsx-runtime";
import { h as D, D as N, e as S, f as j, g as v, N as w } from "./index-DECTsLiF.js";
import { B } from "./register-chai-top-bar-DWmJ2efT.js";
const M = ({
  isOpen: f,
  onClose: r,
  editor: t,
  rteElement: x
}) => {
  const a = D(), u = (c) => {
    if (!t) return;
    const i = `{{${c}}}`;
    t.commands.focus();
    const { from: p, to: g } = t.state.selection;
    if (p !== g)
      t.chain().deleteSelection().insertContent(i).run();
    else {
      const { state: s } = t, n = s.selection.from, d = s.doc.textBetween(Math.max(0, n - 1), n), o = s.doc.textBetween(n, Math.min(n + 1, s.doc.content.size));
      let h = "";
      n > 0 && d !== " " && !/[.,!?;:]/.test(d) && (h = " ");
      let m = "";
      o && o !== " " && !/[.,!?;:]/.test(o) && (m = " "), t.chain().insertContent(h + i + m).run();
    }
  };
  return /* @__PURE__ */ e(N, { open: f, onOpenChange: (c) => !c && r(), children: /* @__PURE__ */ l(S, { className: "max-h-[90vh] overflow-y-auto sm:max-w-[800px]", children: [
    /* @__PURE__ */ e(j, { children: /* @__PURE__ */ l(v, { className: "flex items-center justify-between pr-8", children: [
      /* @__PURE__ */ e("span", { children: "Rich Text Editor" }),
      a && Object.keys(a).length > 0 && /* @__PURE__ */ l("div", { className: "flex items-center", children: [
        /* @__PURE__ */ e("span", { className: "mr-2 text-sm text-muted-foreground", children: "Add field:" }),
        /* @__PURE__ */ e("div", { className: "rte-path-selector", children: /* @__PURE__ */ e(w, { data: a, onSelect: u }) })
      ] })
    ] }) }),
    x,
    /* @__PURE__ */ e("div", { className: "mt-4 flex justify-end", children: /* @__PURE__ */ e(B, { onClick: r, children: "Done" }) })
  ] }) });
};
export {
  M as default
};
