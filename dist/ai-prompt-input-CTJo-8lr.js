import { jsx as e, jsxs as N, Fragment as ie } from "react/jsx-runtime";
import { PaperclipIcon as le, XIcon as X, PlusIcon as ce, ImageIcon as ue, MicIcon as de, CornerDownLeftIcon as me, Loader2Icon as pe, SquareIcon as fe, Cpu as he, Paperclip as ge, GlobeIcon as ve, Square as be, Send as xe } from "lucide-react";
import { useContext as W, useRef as F, useEffect as A, useState as L, useCallback as O, useMemo as we, createContext as _, Fragment as Ne, startTransition as ye, Children as Ie } from "react";
import { useTranslation as Se } from "react-i18next";
import { nanoid as ke } from "nanoid";
import { F as y, B as H } from "./register-chai-top-bar-DWmJ2efT.js";
import { T as ze, aa as Pe, v as Te, w as De, x as Ae, y as Le, ab as Ce, ac as Re, D as je, ad as Me, e as Ue, g as Fe, C as Oe, j as Ge, l as Be, m as We } from "./index-B2gmw4AW.js";
import { cva as Y } from "class-variance-authority";
import { i as J } from "./index-HsRoQEnW.js";
function _e({ className: t, ...n }) {
  return /* @__PURE__ */ e(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: y(
        "group/input-group shadow-xs relative flex w-full items-center rounded-md border border-input outline-none transition-[color,box-shadow] dark:bg-input/30",
        "h-9 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:ring-1 has-[[data-slot=input-group-control]:focus-visible]:ring-ring",
        // Error state.
        "has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-destructive/20 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        t
      ),
      ...n
    }
  );
}
const He = Y(
  "text-muted-foreground flex h-auto cursor-text select-none items-center justify-center gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.4rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start": "[.border-b]:pb-3 order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5",
        "block-end": "[.border-t]:pt-3 order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function Q({
  className: t,
  align: n = "inline-start",
  ...a
}) {
  return /* @__PURE__ */ e(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": n,
      className: y(He({ align: n }), t),
      onClick: (l) => {
        var o, d;
        l.target.closest("button") || (d = (o = l.currentTarget.parentElement) == null ? void 0 : o.querySelector("input")) == null || d.focus();
      },
      ...a
    }
  );
}
const Ve = Y("flex items-center gap-2 text-sm shadow-none", {
  variants: {
    size: {
      xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
      sm: "h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5",
      "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
      "icon-sm": "size-8 p-0 has-[>svg]:p-0"
    }
  },
  defaultVariants: {
    size: "xs"
  }
});
function Z({
  className: t,
  type: n = "button",
  variant: a = "ghost",
  size: l = "xs",
  ...o
}) {
  return /* @__PURE__ */ e(
    H,
    {
      type: n,
      "data-size": l,
      variant: a,
      className: y(Ve({ size: l }), t),
      ...o
    }
  );
}
function qe({ className: t, ...n }) {
  return /* @__PURE__ */ e(
    ze,
    {
      "data-slot": "input-group-control",
      className: y(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        t
      ),
      ...n
    }
  );
}
const Ee = _(null), Ke = _(null), ee = () => W(Ee), $e = () => W(Ke), te = _(null), G = () => {
  const t = $e(), n = W(te), a = t ?? n;
  if (!a)
    throw new Error("usePromptInputAttachments must be used within a PromptInput or PromptInputProvider");
  return a;
};
function Xe({ data: t, className: n, ...a }) {
  var f;
  const l = G(), o = t.filename || "", u = ((f = t.mediaType) != null && f.startsWith("image/") && t.url ? "image" : "file") === "image", g = o || (u ? "Image" : "Attachment");
  return /* @__PURE__ */ N(lt, { children: [
    /* @__PURE__ */ e(Pe, { asChild: !0, children: /* @__PURE__ */ N(
      "div",
      {
        className: y(
          "group relative flex h-8 cursor-default select-none items-center gap-1.5 rounded-md border border-border px-1.5 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
          n
        ),
        ...a,
        children: [
          /* @__PURE__ */ N("div", { className: "relative size-5 shrink-0", children: [
            /* @__PURE__ */ e("div", { className: "absolute inset-0 flex size-5 items-center justify-center overflow-hidden rounded bg-background transition-opacity group-hover:opacity-0", children: u ? /* @__PURE__ */ e(
              "img",
              {
                alt: o || "attachment",
                className: "size-5 object-cover",
                height: 20,
                src: t.url,
                width: 20
              }
            ) : /* @__PURE__ */ e("div", { className: "flex size-5 items-center justify-center text-muted-foreground", children: /* @__PURE__ */ e(le, { className: "size-3" }) }) }),
            /* @__PURE__ */ N(
              H,
              {
                "aria-label": "Remove attachment",
                className: "absolute inset-0 size-5 cursor-pointer rounded p-0 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 [&>svg]:size-2.5",
                onClick: (m) => {
                  m.stopPropagation(), l.remove(t.id);
                },
                type: "button",
                variant: "ghost",
                children: [
                  /* @__PURE__ */ e(X, {}),
                  /* @__PURE__ */ e("span", { className: "sr-only", children: "Remove" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("span", { className: "flex-1 truncate", children: g })
        ]
      },
      t.id
    ) }),
    /* @__PURE__ */ e(ct, { className: "w-auto p-2", children: /* @__PURE__ */ N("div", { className: "w-auto space-y-3", children: [
      u && /* @__PURE__ */ e("div", { className: "flex max-h-96 w-96 items-center justify-center overflow-hidden rounded-md border", children: /* @__PURE__ */ e(
        "img",
        {
          alt: o || "attachment preview",
          className: "max-h-full max-w-full object-contain",
          height: 384,
          src: t.url,
          width: 448
        }
      ) }),
      /* @__PURE__ */ e("div", { className: "flex items-center gap-2.5", children: /* @__PURE__ */ N("div", { className: "min-w-0 flex-1 space-y-1 px-0.5", children: [
        /* @__PURE__ */ e("h4", { className: "truncate text-sm font-semibold leading-none", children: o || (u ? "Image" : "Attachment") }),
        t.mediaType && /* @__PURE__ */ e("p", { className: "truncate font-mono text-xs text-muted-foreground", children: t.mediaType })
      ] }) })
    ] }) })
  ] });
}
function Ye({ children: t, className: n, ...a }) {
  const l = G();
  return l.files.length ? /* @__PURE__ */ e("div", { className: y("flex flex-wrap items-center gap-2 p-3", n), ...a, children: l.files.map((o) => /* @__PURE__ */ e(Ne, { children: t(o) }, o.id)) }) : null;
}
const Je = ({
  label: t = "Add photos or files",
  ...n
}) => {
  const a = G();
  return /* @__PURE__ */ N(
    Le,
    {
      ...n,
      onSelect: (l) => {
        l.preventDefault(), a.openFileDialog();
      },
      children: [
        /* @__PURE__ */ e(ue, { className: "mr-2 size-4" }),
        " ",
        t
      ]
    }
  );
}, Qe = ({
  className: t,
  accept: n,
  multiple: a,
  globalDrop: l,
  syncHiddenInput: o,
  maxFiles: d,
  maxFileSize: u,
  onError: g,
  onSubmit: f,
  children: m,
  ...I
}) => {
  const s = ee(), i = !!s, h = F(null), z = F(null), S = F(null);
  A(() => {
    var v;
    const r = (v = z.current) == null ? void 0 : v.closest("form");
    r instanceof HTMLFormElement && (S.current = r);
  }, []);
  const [k, P] = L([]), T = i ? s.attachments.files : k, q = O(() => {
    var r;
    (r = h.current) == null || r.click();
  }, []), w = O(
    (r) => !n || n.trim() === "" ? !0 : n.includes("image/*") ? r.type.startsWith("image/") : !0,
    [n]
  ), j = O(
    (r) => {
      const v = Array.from(r), p = v.filter((x) => w(x));
      if (v.length && p.length === 0) {
        g == null || g({
          code: "accept",
          message: "No files match the accepted types."
        });
        return;
      }
      const c = (x) => u ? x.size <= u : !0, b = p.filter(c);
      if (p.length > 0 && b.length === 0) {
        g == null || g({
          code: "max_file_size",
          message: "All files exceed the maximum size."
        });
        return;
      }
      P((x) => {
        const C = typeof d == "number" ? Math.max(0, d - x.length) : void 0, oe = typeof C == "number" ? b.slice(0, C) : b;
        typeof C == "number" && b.length > C && (g == null || g({
          code: "max_files",
          message: "Too many files. Some were not added."
        }));
        const K = [];
        for (const B of oe)
          K.push({
            id: ke(),
            type: "file",
            url: URL.createObjectURL(B),
            mediaType: B.type,
            filename: B.name
          });
        return x.concat(K);
      });
    },
    [w, d, u, g]
  ), D = i ? (r) => s.attachments.add(r) : j, M = i ? (r) => s.attachments.remove(r) : (r) => P((v) => {
    const p = v.find((c) => c.id === r);
    return p != null && p.url && URL.revokeObjectURL(p.url), v.filter((c) => c.id !== r);
  }), R = i ? () => s.attachments.clear() : () => P((r) => {
    for (const v of r)
      v.url && URL.revokeObjectURL(v.url);
    return [];
  }), U = i ? () => s.attachments.openFileDialog() : q;
  A(() => {
    i && s.__registerFileInput(h, () => {
      var r;
      return (r = h.current) == null ? void 0 : r.click();
    });
  }, [i, s]), A(() => {
    o && h.current && T.length === 0 && (h.current.value = "");
  }, [T, o]), A(() => {
    const r = S.current;
    if (!r) return;
    const v = (c) => {
      var b, x;
      (x = (b = c.dataTransfer) == null ? void 0 : b.types) != null && x.includes("Files") && c.preventDefault();
    }, p = (c) => {
      var b, x, C;
      (x = (b = c.dataTransfer) == null ? void 0 : b.types) != null && x.includes("Files") && c.preventDefault(), (C = c.dataTransfer) != null && C.files && c.dataTransfer.files.length > 0 && D(c.dataTransfer.files);
    };
    return r.addEventListener("dragover", v), r.addEventListener("drop", p), () => {
      r.removeEventListener("dragover", v), r.removeEventListener("drop", p);
    };
  }, [D]), A(() => {
    if (!l) return;
    const r = (p) => {
      var c, b;
      (b = (c = p.dataTransfer) == null ? void 0 : c.types) != null && b.includes("Files") && p.preventDefault();
    }, v = (p) => {
      var c, b, x;
      (b = (c = p.dataTransfer) == null ? void 0 : c.types) != null && b.includes("Files") && p.preventDefault(), (x = p.dataTransfer) != null && x.files && p.dataTransfer.files.length > 0 && D(p.dataTransfer.files);
    };
    return document.addEventListener("dragover", r), document.addEventListener("drop", v), () => {
      document.removeEventListener("dragover", r), document.removeEventListener("drop", v);
    };
  }, [D, l]), A(
    () => () => {
      if (!i)
        for (const r of T)
          r.url && URL.revokeObjectURL(r.url);
    },
    [i, T]
  );
  const ne = (r) => {
    r.currentTarget.files && D(r.currentTarget.files);
  }, se = async (r) => {
    const p = await (await fetch(r)).blob();
    return new Promise((c, b) => {
      const x = new FileReader();
      x.onloadend = () => c(x.result), x.onerror = b, x.readAsDataURL(p);
    });
  }, re = we(
    () => ({
      files: T.map((r) => ({ ...r, id: r.id })),
      add: D,
      remove: M,
      clear: R,
      openFileDialog: U,
      fileInputRef: h
    }),
    [T, D, M, R, U]
  ), ae = (r) => {
    r.preventDefault();
    const v = r.currentTarget, p = i ? s.textInput.value : new FormData(v).get("message") || "";
    i || v.reset(), Promise.all(
      T.map(async ({ ...c }) => c.url && c.url.startsWith("blob:") ? {
        ...c,
        url: await se(c.url)
      } : c)
    ).then((c) => {
      try {
        const b = f({ text: p, files: c }, r);
        b instanceof Promise ? b.then(() => {
          R(), i && s.textInput.clear();
        }).catch(() => {
        }) : (R(), i && s.textInput.clear());
      } catch {
      }
    });
  }, E = /* @__PURE__ */ N(ie, { children: [
    /* @__PURE__ */ e("span", { "aria-hidden": "true", className: "hidden", ref: z }),
    /* @__PURE__ */ e(
      "input",
      {
        accept: n,
        "aria-label": "Upload files",
        className: "hidden",
        multiple: a,
        onChange: ne,
        ref: h,
        title: "Upload files",
        type: "file"
      }
    ),
    /* @__PURE__ */ e("form", { className: y("w-full", t), onSubmit: ae, ...I, children: /* @__PURE__ */ e(_e, { className: "overflow-hidden", children: m }) })
  ] });
  return i ? E : /* @__PURE__ */ e(te.Provider, { value: re, children: E });
}, Ze = ({
  onChange: t,
  className: n,
  placeholder: a = "What would you like to know?",
  ...l
}) => {
  const o = ee(), d = G(), [u, g] = L(!1), f = (s) => {
    if (s.key === "Enter") {
      if (u || s.nativeEvent.isComposing || s.shiftKey)
        return;
      s.preventDefault();
      const i = s.currentTarget.form, h = i == null ? void 0 : i.querySelector('button[type="submit"]');
      if (h != null && h.disabled)
        return;
      i == null || i.requestSubmit();
    }
    if (s.key === "Backspace" && s.currentTarget.value === "" && d.files.length > 0) {
      s.preventDefault();
      const i = d.files.at(-1);
      i && d.remove(i.id);
    }
  }, m = (s) => {
    var z;
    const i = (z = s.clipboardData) == null ? void 0 : z.items;
    if (!i)
      return;
    const h = [];
    for (const S of i)
      if (S.kind === "file") {
        const k = S.getAsFile();
        k && h.push(k);
      }
    h.length > 0 && (s.preventDefault(), d.add(h));
  }, I = o ? {
    value: o.textInput.value,
    onChange: (s) => {
      o.textInput.setInput(s.currentTarget.value), t == null || t(s);
    }
  } : {
    onChange: t
  };
  return /* @__PURE__ */ e(
    qe,
    {
      className: y("field-sizing-content max-h-48 min-h-16", n),
      name: "message",
      onCompositionEnd: () => g(!1),
      onCompositionStart: () => g(!0),
      onKeyDown: f,
      onPaste: m,
      placeholder: a,
      ...l,
      ...I
    }
  );
}, et = ({ className: t, ...n }) => /* @__PURE__ */ e(Q, { align: "block-end", className: y("order-first flex-wrap gap-1", t), ...n }), tt = ({ className: t, ...n }) => /* @__PURE__ */ e(Q, { align: "block-end", className: y("justify-between gap-1", t), ...n }), nt = ({ className: t, ...n }) => /* @__PURE__ */ e("div", { className: y("flex items-center gap-1", t), ...n }), V = ({ variant: t = "ghost", className: n, size: a, ...l }) => {
  const o = a ?? (Ie.count(l.children) > 1 ? "sm" : "icon-sm");
  return /* @__PURE__ */ e(Z, { className: y(n), size: o, type: "button", variant: t, ...l });
}, st = (t) => /* @__PURE__ */ e(Te, { ...t }), rt = ({ className: t, children: n, ...a }) => /* @__PURE__ */ e(De, { asChild: !0, children: /* @__PURE__ */ e(V, { className: t, ...a, children: n ?? /* @__PURE__ */ e(ce, { className: "size-4" }) }) }), at = ({ className: t, ...n }) => /* @__PURE__ */ e(Ae, { align: "start", className: y(t), ...n }), ot = ({
  className: t,
  variant: n = "default",
  size: a = "icon-sm",
  status: l,
  children: o,
  ...d
}) => {
  let u = /* @__PURE__ */ e(me, { className: "size-4" });
  return l === "submitted" ? u = /* @__PURE__ */ e(pe, { className: "size-4 animate-spin" }) : l === "streaming" ? u = /* @__PURE__ */ e(fe, { className: "size-4" }) : l === "error" && (u = /* @__PURE__ */ e(X, { className: "size-4" })), /* @__PURE__ */ e(
    Z,
    {
      "aria-label": "Submit",
      className: y(t),
      size: a,
      type: "submit",
      variant: n,
      ...d,
      children: o ?? u
    }
  );
}, it = ({
  className: t,
  textareaRef: n,
  onTranscriptionChange: a,
  ...l
}) => {
  const [o, d] = L(!1), [u, g] = L(null), f = F(null);
  A(() => {
    if (typeof window < "u" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
      const I = window.SpeechRecognition || window.webkitSpeechRecognition, s = new I();
      s.continuous = !0, s.interimResults = !0, s.lang = "en-US", s.onstart = () => {
        d(!0);
      }, s.onend = () => {
        d(!1);
      }, s.onresult = (i) => {
        var z;
        let h = "";
        for (let S = i.resultIndex; S < i.results.length; S++) {
          const k = i.results[S];
          k.isFinal && (h += ((z = k[0]) == null ? void 0 : z.transcript) ?? "");
        }
        if (h && (n != null && n.current)) {
          const S = n.current, k = S.value, P = k + (k ? " " : "") + h;
          S.value = P, S.dispatchEvent(new Event("input", { bubbles: !0 })), a == null || a(P);
        }
      }, s.onerror = (i) => {
        console.error("Speech recognition error:", i.error), d(!1);
      }, f.current = s, ye(() => g(s));
    }
    return () => {
      f.current && f.current.stop();
    };
  }, [n, a]);
  const m = O(() => {
    u && (o ? u.stop() : u.start());
  }, [u, o]);
  return /* @__PURE__ */ e(
    V,
    {
      className: y(
        "relative transition-all duration-200",
        o && "animate-pulse bg-accent text-accent-foreground",
        t
      ),
      disabled: !u,
      onClick: m,
      ...l,
      children: /* @__PURE__ */ e(de, { className: "size-4" })
    }
  );
}, lt = ({ openDelay: t = 0, closeDelay: n = 0, ...a }) => /* @__PURE__ */ e(Ce, { closeDelay: n, openDelay: t, ...a }), ct = ({ align: t = "start", ...n }) => /* @__PURE__ */ e(Re, { align: t, ...n }), ut = (t) => /* @__PURE__ */ e(je, { ...t }), dt = (t) => /* @__PURE__ */ e(Me, { ...t }), mt = ({
  className: t,
  children: n,
  title: a = "Model Selector",
  ...l
}) => /* @__PURE__ */ N(Ue, { className: y("p-0", t), ...l, children: [
  /* @__PURE__ */ e(Fe, { className: "sr-only", children: a }),
  /* @__PURE__ */ e(Oe, { className: "**:data-[slot=command-input-wrapper]:h-auto", children: n })
] }), pt = (t) => /* @__PURE__ */ e(Ge, { ...t }), ft = (t) => /* @__PURE__ */ e(Be, { ...t }), ht = (t) => /* @__PURE__ */ e(We, { ...t }), gt = ({ provider: t, className: n, ...a }) => /* @__PURE__ */ e(
  "img",
  {
    ...a,
    alt: `${t} logo`,
    className: y("size-3 dark:invert", n),
    height: 12,
    src: `https://models.dev/logos/${t}.svg`,
    width: 12
  }
), vt = ({ className: t, ...n }) => /* @__PURE__ */ e("span", { className: y("flex-1 truncate text-left", t), ...n }), bt = ({
  selectedModel: t,
  onModelChange: n,
  disabled: a = !1
}) => {
  const [l, o] = L(!1), { models: d } = J(), u = d.find((m) => m.id === t) || d[0], g = d.reduce(
    (m, I) => (m[I.provider] || (m[I.provider] = []), m[I.provider].push(I), m),
    {}
  ), f = (m) => {
    n(m), o(!1);
  };
  return /* @__PURE__ */ N(ut, { open: l, onOpenChange: o, children: [
    /* @__PURE__ */ e(dt, { asChild: !0, children: /* @__PURE__ */ N(H, { variant: "outline", size: "sm", disabled: a, className: "h-8 gap-1 px-2 text-xs", children: [
      /* @__PURE__ */ e(he, { size: 14 }),
      /* @__PURE__ */ e("span", { className: "max-w-20 truncate", children: u.name })
    ] }) }),
    /* @__PURE__ */ N(mt, { className: "w-96 p-0", children: [
      /* @__PURE__ */ e("h3", { className: "mt-2 px-2 py-2 font-semibold", children: "Models" }),
      /* @__PURE__ */ e(pt, { children: Object.entries(g).map(([m, I]) => /* @__PURE__ */ e(ft, { heading: m.charAt(0).toUpperCase() + m.slice(1), children: I.map((s) => /* @__PURE__ */ N(
        ht,
        {
          value: s.id,
          onSelect: () => f(s.id),
          className: "flex cursor-pointer items-center gap-2 p-2",
          children: [
            /* @__PURE__ */ e(gt, { provider: s.provider }),
            /* @__PURE__ */ N("div", { className: "flex flex-1 items-center justify-between", children: [
              /* @__PURE__ */ e(vt, { children: s.name }),
              /* @__PURE__ */ e("span", { className: "text-xs text-muted-foreground", children: s.description })
            ] }),
            t === s.id && /* @__PURE__ */ e("div", { className: "h-2 w-2 rounded-full bg-blue-500" })
          ]
        },
        s.id
      )) }, m)) })
    ] })
  ] });
}, $ = "chai-ai-selected-model", Tt = ({
  input: t,
  setInput: n,
  onSend: a,
  onStop: l,
  isLoading: o,
  disabled: d,
  selectedLang: u,
  selectedModel: g,
  onModelChange: f
}) => {
  const { t: m } = Se(), { models: I } = J(), s = I.find((w) => w.id === "google/gemini-3-flash") || I[0], [i, h] = L(g || s.id), [z, S] = L(null), k = F(null), [P, T] = L(!1);
  return A(() => {
    if (!u) {
      const w = localStorage.getItem($);
      w ? (h(w), f == null || f(w)) : (h(s.id), f == null || f(s.id));
    }
  }, [u, f, s.id]), /* @__PURE__ */ e("div", { className: "relative", children: /* @__PURE__ */ e("div", { className: "border-gray-20 rounded-lg border", children: /* @__PURE__ */ N(Qe, { onSubmit: (w) => {
    var M;
    const j = w.files.find((R) => {
      var U;
      return (U = R.mediaType) == null ? void 0 : U.startsWith("image/");
    }), D = (j == null ? void 0 : j.url) || z;
    a((M = w.text) == null ? void 0 : M.trim(), void 0, D, i), S(null);
  }, accept: "image/*", className: "flex h-auto w-full flex-col", children: [
    /* @__PURE__ */ e(et, { className: "p-0", children: /* @__PURE__ */ e(Ye, { className: "pb-0", children: (w) => /* @__PURE__ */ e(Xe, { className: "text-xs", data: w }) }) }),
    /* @__PURE__ */ e(
      Ze,
      {
        ref: k,
        value: t,
        onChange: (w) => n(w.target.value),
        placeholder: m(u ? "Ask to update content" : "Ask me anything..."),
        disabled: o,
        className: "max-h-[200px] min-h-[60px] w-full",
        rows: 3
      }
    ),
    /* @__PURE__ */ N(tt, { children: [
      u ? /* @__PURE__ */ e("div", {}) : /* @__PURE__ */ N(nt, { children: [
        /* @__PURE__ */ N(st, { children: [
          /* @__PURE__ */ e(rt, { disabled: o, children: /* @__PURE__ */ e(ge, { size: 16 }) }),
          /* @__PURE__ */ e(at, { children: /* @__PURE__ */ e(Je, {}) })
        ] }),
        /* @__PURE__ */ e(
          it,
          {
            textareaRef: k,
            onTranscriptionChange: n,
            disabled: o
          }
        ),
        /* @__PURE__ */ e(
          bt,
          {
            selectedModel: i,
            onModelChange: (w) => {
              h(w), f == null || f(w), localStorage.setItem($, w);
            },
            disabled: o
          }
        ),
        /* @__PURE__ */ N(
          V,
          {
            className: "hidden",
            size: "sm",
            onClick: () => T(!P),
            variant: P ? "default" : "ghost",
            children: [
              /* @__PURE__ */ e(ve, { size: 16 }),
              /* @__PURE__ */ e("span", { children: "Search" })
            ]
          }
        )
      ] }),
      o ? /* @__PURE__ */ e(
        "button",
        {
          onClick: l,
          className: "z-50 flex items-center gap-x-1 rounded-md bg-red-500 p-1.5 text-white transition-colors hover:bg-red-600",
          title: m("Stop generation"),
          children: /* @__PURE__ */ e(be, { size: 16 })
        }
      ) : /* @__PURE__ */ e(ot, { disabled: !t.trim() || d, children: /* @__PURE__ */ e(xe, { size: 16 }) })
    ] })
  ] }) }) });
};
export {
  Tt as default
};
