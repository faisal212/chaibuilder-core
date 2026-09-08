import { jsxs as o, jsx as e } from "react/jsx-runtime";
import m from "@monaco-editor/react";
import { CheckIcon as h, CopyIcon as C, DownloadIcon as y } from "@radix-ui/react-icons";
import { useState as l } from "react";
import { B as s } from "./register-chai-top-bar-DWmJ2efT.js";
function N({
  code: r,
  onCopy: d,
  language: a = "javascript",
  onDownload: c,
  downloadText: p = "Download"
}) {
  const [n, i] = l(!1), [t, f] = l(r);
  return /* @__PURE__ */ o("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ e("div", { className: "h-[500px] max-h-full overflow-hidden rounded-md border py-2", children: /* @__PURE__ */ e(
      m,
      {
        height: "100%",
        defaultLanguage: a,
        language: a,
        value: t,
        onChange: (u) => f(u || ""),
        theme: "vs-light",
        options: {
          minimap: { enabled: !1 },
          fontSize: 12,
          lineNumbers: "off",
          roundedSelection: !1,
          scrollBeyondLastLine: !1,
          automaticLayout: !0,
          tabSize: 2,
          insertSpaces: !0,
          wordWrap: "on",
          bracketPairColorization: { enabled: !0 },
          suggest: {
            showKeywords: !1,
            showSnippets: !1
          }
        }
      }
    ) }),
    /* @__PURE__ */ o("div", { className: "flex justify-end gap-2", children: [
      /* @__PURE__ */ o(s, { type: "button", variant: "outline", onClick: () => {
        d(t), i(!0), setTimeout(() => {
          i(!1);
        }, 2e3);
      }, children: [
        n ? /* @__PURE__ */ e(h, { className: "text-green-500" }) : /* @__PURE__ */ e(C, {}),
        " ",
        n ? "Copied" : "Copy"
      ] }),
      /* @__PURE__ */ o(s, { type: "button", onClick: () => {
        c(t);
      }, children: [
        /* @__PURE__ */ e(y, {}),
        " ",
        p
      ] })
    ] })
  ] });
}
export {
  N as default
};
