import { jsxs as n, jsx as e, Fragment as H } from "react/jsx-runtime";
import { find as $e, merge as Me, pick as Y, first as Le, isEmpty as _e } from "lodash-es";
import { ChevronLeft as he, ChevronRight as Pe, Loader as G, AlertCircle as qe, Copy as fe, Pencil as Be, Link as Oe, Search as Ge, RefreshCwIcon as Re, Archive as Ke, Film as Qe, ImageIcon as We, Edit as Ve, Trash2 as He, Check as Xe, Upload as Ze, AlertTriangle as Je } from "lucide-react";
import pe, { useState as y, useMemo as ge, useEffect as O, useCallback as L, Suspense as Ye } from "react";
import { useDropzone as et } from "react-dropzone";
import { ErrorBoundary as tt } from "react-error-boundary";
import { useTranslation as te } from "react-i18next";
import { toast as w } from "sonner";
import { B as p, z as xe } from "./register-chai-top-bar-DWmJ2efT.js";
import { p as V, T as it, ae as _, F as P, G as q, H as B, D as at, e as lt, f as rt, g as nt, o as st, q as ct, af as ot } from "./index-C_FsMCTB.js";
import dt from "compressorjs";
import { useQueryClient as ie, useMutation as ae, useQuery as ve } from "@tanstack/react-query";
import { ai as R, aj as K, ag as A } from "./index-BEr4xRX7.js";
import { c as ye } from "./common-functions-D2lMFR6K.js";
const de = 0.5 * 1024 * 1024, mt = 10 * 1024 * 1024;
function ee(s) {
  const l = isNaN(s) ? 0 : typeof s == "number" ? s : parseInt(s);
  return l ? l < 1024 ? `${l.toFixed(2)} B` : l < 1024 * 1024 ? `${(l / 1024).toFixed(2)} KB` : `${(l / (1024 * 1024)).toFixed(2)} MB` : "0 B";
}
function ut(s) {
  return new Promise((l, u) => {
    if (s.size <= de) {
      l(s);
      return;
    }
    new dt(s, {
      quality: 0.9,
      // 80% quality
      maxWidth: 2048,
      // Limit max width
      maxHeight: 2048,
      // Limit max height
      convertSize: de,
      // Try to keep under 3MB
      success(i) {
        l(i);
      },
      error(i) {
        w.error(
          `Failed to compress image. Image size is ${ee(s.size)}, which exceeds the maximum allowed size of ${ee(mt)}.`
        ), u(i);
      }
    });
  });
}
const ht = () => {
  const s = R(), l = ie(), u = K();
  return ae({
    mutationFn: async (i) => {
      const c = i.map(async (r) => u(s, {
        action: A.UPLOAD_ASSET,
        data: r
      }));
      return await Promise.all(c);
    },
    onSuccess: (i) => {
      var c;
      if (i != null && i.some((a) => a.error))
        throw new Error(((c = i == null ? void 0 : i.find((a) => a.error)) == null ? void 0 : c.error) || "Failed to upload asset");
      {
        l.invalidateQueries({
          queryKey: [A.GET_ASSETS]
        });
        const a = i == null ? void 0 : i.length;
        w.success(`${a === 1 ? "Asset" : a + " Assets"} uploaded successfully`);
      }
    },
    onError: () => {
      w.error("Failed to upload asset");
    }
  });
}, ft = () => {
  const s = R(), l = ie(), u = K();
  return ae({
    mutationFn: async (i) => u(s, {
      action: A.DELETE_ASSET,
      data: { id: i }
    }),
    onSuccess: (i) => {
      if (i != null && i.error)
        throw new Error(i == null ? void 0 : i.error);
      l.invalidateQueries({
        queryKey: [A.GET_ASSETS]
      }), w.success("Asset deleted successfully");
    },
    onError: () => {
      w.error("Failed to delete asset");
    }
  });
}, pt = () => {
  const s = R(), l = ie(), u = K();
  return ae({
    mutationFn: async (i) => u(s, {
      action: A.UPDATE_ASSET,
      data: i
    }),
    onSuccess: (i) => {
      if (i != null && i.error)
        throw new Error(i == null ? void 0 : i.error);
      l.invalidateQueries({
        queryKey: [A.GET_ASSETS]
      }), i != null && i.id && l.invalidateQueries({
        queryKey: [A.GET_ASSET, i.id]
      }), w.success("Asset updated successfully");
    },
    onError: () => {
      w.error("Failed to update asset");
    }
  });
};
function gt({
  currentPage: s,
  totalPages: l,
  onPageChange: u,
  pageRangeDisplayed: i = 3,
  showPageInput: c = !0,
  className: a = ""
}) {
  const [r, k] = y(String(s)), N = ge(() => {
    const o = Math.floor(i / 2);
    let m = Math.max(1, s - o), d = Math.min(l, s + o);
    d - m + 1 < i && (m === 1 ? d = Math.min(l, m + i - 1) : d === l && (m = Math.max(1, d - i + 1)));
    const f = [];
    m > 1 && (f.push(1), m > 2 && f.push("..."));
    for (let v = m; v <= d; v++)
      f.push(v);
    return d < l && (d < l - 1 && f.push("..."), f.push(l)), f;
  }, [s, l, i]), x = (o) => {
    o !== s && o >= 1 && o <= l && (u(o), k(String(o)));
  }, g = () => {
    s > 1 && x(s - 1);
  }, b = () => {
    s < l && x(s + 1);
  }, C = () => {
    const o = Number(r);
    !isNaN(o) && o >= 1 && o <= l && x(o);
  }, S = (o) => {
    o.key === "Enter" && C();
  };
  return l <= 1 ? null : /* @__PURE__ */ n("div", { className: `flex flex-wrap items-center justify-center gap-3 ${a}`, children: [
    /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ n(
        p,
        {
          variant: "outline",
          size: "sm",
          onClick: g,
          disabled: s === 1,
          className: "px-2 py-1 text-sm hover:bg-gray-50",
          children: [
            /* @__PURE__ */ e(he, { className: "h-4 w-4" }),
            "Previous"
          ]
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: N.map((o, m) => {
        if (o === "...")
          return /* @__PURE__ */ e("span", { className: "px-2 text-muted-foreground", children: "..." }, `ellipsis-${m}`);
        const d = o, f = d === s;
        return /* @__PURE__ */ e(
          p,
          {
            variant: f ? "default" : "outline",
            size: "sm",
            onClick: () => x(d),
            className: f ? "border-blue-600 bg-blue-600 px-3 py-1 text-sm text-white" : "border px-3 py-1 text-sm hover:bg-gray-50 hover:text-black",
            children: d
          },
          d
        );
      }) }),
      /* @__PURE__ */ n(
        p,
        {
          variant: "outline",
          size: "sm",
          onClick: b,
          disabled: s === l,
          className: "px-2 py-1 text-sm hover:bg-gray-50",
          children: [
            "Next",
            /* @__PURE__ */ e(Pe, { className: "h-4 w-4" })
          ]
        }
      )
    ] }),
    c && /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e("span", { className: "text-sm text-muted-foreground", children: "Go to" }),
      /* @__PURE__ */ e(
        xe,
        {
          type: "number",
          min: 1,
          max: l,
          value: r,
          onChange: (o) => {
            const m = o.target.value.replace(/[^\d]/g, "");
            k(m);
          },
          onKeyDown: S,
          className: "h-8 w-16 px-2 py-1"
        }
      ),
      /* @__PURE__ */ e(
        p,
        {
          variant: "outline",
          size: "sm",
          onClick: C,
          disabled: r === "" || Number(r) < 1 || Number(r) > l,
          children: "Go"
        }
      )
    ] })
  ] });
}
const xt = (s = {}) => {
  const l = R(), u = K(), { search: i, page: c = 1, limit: a = 30 } = s;
  return ve({
    queryKey: [A.GET_ASSETS, i, c, a],
    queryFn: async () => {
      const r = await u(l, {
        action: A.GET_ASSETS,
        data: {
          search: i,
          page: c,
          limit: a
        }
      });
      return r.page = c, r.limit = a, r;
    },
    staleTime: 1 / 0,
    retry: 1
  });
}, vt = (s) => {
  const l = R(), u = K();
  return ve({
    queryKey: [A.GET_ASSET, s],
    queryFn: async () => s ? await u(l, {
      action: A.GET_ASSET,
      data: { id: s }
    }) : null,
    staleTime: 1 / 0,
    retry: 1
  });
};
function yt(s) {
  const l = isNaN(s) ? 0 : typeof s == "number" ? s : parseInt(s);
  return l ? l < 1024 ? `${l.toFixed(2)} B` : l < 1024 * 1024 ? `${(l / 1024).toFixed(2)} KB` : `${(l / (1024 * 1024)).toFixed(2)} MB` : "0 B";
}
function me(s) {
  if (!s) return "N/A";
  const l = new Date(s);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(l);
}
function ue(s, l) {
  let u = s, i = l == null ? void 0 : l.description;
  return (!i || typeof i != "string") && (i = ""), (!u || typeof u != "string") && (u = ""), u !== i;
}
const Nt = ({ assetId: s, onBack: l, onEdit: u, onSave: i, isSaving: c }) => {
  var o, m;
  const { t: a } = te(), { data: r, isLoading: k, isError: N } = vt(s || ""), [x, g] = y(""), [b, C] = y(!1);
  O(() => {
    const d = new Image();
    return d.src = (r == null ? void 0 : r.url) || "", d.onload = () => C(!0), () => {
      d.onload = null;
    };
  }, [r]);
  const S = async (d, f) => {
    try {
      await navigator.clipboard.writeText(d), w.success(a("{{type}} copied to clipboard", { type: f }));
    } catch (v) {
      w.error(a("Failed to copy {{type}}", { type: f }), {
        description: v == null ? void 0 : v.message
      });
    }
  };
  return pe.useEffect(() => {
    r != null && r.description && g(r.description);
  }, [r]), k || !b ? /* @__PURE__ */ e("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ e(G, { className: "h-8 w-8 animate-spin" }) }) : N || !(r != null && r.id) ? /* @__PURE__ */ e("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ n("div", { className: "mx-auto max-w-md p-6 text-center", children: [
    /* @__PURE__ */ e("div", { className: "mb-4 flex justify-center", children: /* @__PURE__ */ e(qe, { className: "h-12 w-12 text-gray-400" }) }),
    /* @__PURE__ */ e("h3", { className: "mb-2 text-lg font-medium text-gray-900", children: a("No Asset Found") }),
    /* @__PURE__ */ e("p", { className: "mb-6 text-sm text-gray-500", children: a(N ? "There was an error loading the asset. Please try again later." : "The asset you're looking for doesn't exist or has been removed.") }),
    /* @__PURE__ */ n("div", { className: "flex justify-center gap-4", children: [
      /* @__PURE__ */ e(p, { variant: "outline", onClick: l, children: a("Back to Assets") }),
      N && /* @__PURE__ */ e(p, { variant: "default", onClick: () => window.location.reload(), children: a("Try Again") })
    ] })
  ] }) }) : /* @__PURE__ */ n("div", { className: "flex flex-1 flex-col gap-y-4 overflow-hidden", children: [
    /* @__PURE__ */ n("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ n(p, { variant: "outline", size: "sm", onClick: l, disabled: c, children: [
        /* @__PURE__ */ e(he, { className: "h-4 w-4" }),
        a("Back to Assets")
      ] }),
      /* @__PURE__ */ n("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ e(p, { variant: "outline", onClick: l, disabled: c, children: a("Cancel") }),
        /* @__PURE__ */ n(p, { variant: "outline", onClick: () => S(r.url, a("Asset URL")), disabled: c, children: [
          /* @__PURE__ */ e(fe, { className: "mr-2 h-4 w-4" }),
          a("Copy URL")
        ] }),
        /* @__PURE__ */ n(p, { variant: "default", onClick: () => u(r), disabled: c, children: [
          /* @__PURE__ */ e(Be, { className: "h-4 w-4" }),
          a("Edit Image")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n("div", { className: "grid flex-1 grid-cols-2 items-start gap-6 overflow-hidden", children: [
      /* @__PURE__ */ e("div", { className: "relative flex h-[calc(80vh-200px)] w-full items-start justify-center", children: /* @__PURE__ */ e(
        "img",
        {
          src: r.url,
          alt: r.name,
          className: "h-full max-h-max w-full max-w-max rounded-lg object-contain"
        }
      ) }),
      /* @__PURE__ */ n("div", { className: "space-y-6", children: [
        /* @__PURE__ */ n("div", { className: "grid gap-3 rounded-md border bg-gray-100 pt-2", children: [
          /* @__PURE__ */ e(V, { className: "w-full text-center", children: a("Details") }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-1 gap-2 rounded-md border bg-white p-2 text-sm", children: [
            { label: a("File Name"), value: r.name },
            { label: a("Type"), value: r.type, capitalize: !0 },
            {
              label: a("Format"),
              value: ((o = r.metadata) == null ? void 0 : o.format) || r.type,
              capitalize: !0
            },
            {
              label: a("Size"),
              value: yt(r.size)
            },
            {
              label: a("Dimensions"),
              value: `${r.width || 0} × ${r.height || 0}`
            },
            {
              label: a("Created"),
              value: me(r.createdAt)
            },
            {
              label: a("Updated"),
              value: me(((m = r.metadata) == null ? void 0 : m.updatedAt) || (r == null ? void 0 : r.updatedAt) || r.createdAt)
            },
            {
              label: a("URL"),
              value: r.url,
              copyable: !0
            }
          ].map((d) => /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e(V, { className: "w-1/4 w-max px-2 text-left font-normal text-gray-700", children: d.label }),
            ":",
            /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(
                "div",
                {
                  className: "w-max text-left font-medium text-gray-900" + (d.capitalize ? " capitalize" : ""),
                  children: d.value
                }
              ),
              d.copyable && /* @__PURE__ */ e(
                p,
                {
                  variant: "ghost",
                  size: "icon",
                  className: "h-6 w-6",
                  onClick: () => S(d.value, d.label),
                  children: /* @__PURE__ */ e(Oe, { className: "h-3 w-3" })
                }
              )
            ] })
          ] }, d.label)) })
        ] }),
        r.usedOn && r.usedOn.length > 0 && /* @__PURE__ */ n("div", { className: "grid gap-3", children: [
          /* @__PURE__ */ e(V, { children: a("Used On") }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-1 gap-2 rounded-md border p-2 text-sm", children: r.usedOn.map((d, f) => /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ e("div", { className: "w-max text-left font-medium text-gray-900", children: d.name }),
            /* @__PURE__ */ n("div", { className: "text-gray-500", children: [
              "(",
              d.slug,
              ")"
            ] })
          ] }, f)) })
        ] }),
        /* @__PURE__ */ n("div", { className: "relative grid gap-3 rounded-md border bg-gray-100 pt-2", children: [
          /* @__PURE__ */ e(V, { className: "w-full text-center", children: a("Description") }),
          /* @__PURE__ */ e(
            it,
            {
              id: "description",
              value: x,
              placeholder: a("Enter a description for the asset"),
              onChange: (d) => g(d.target.value),
              rows: 3,
              disabled: c,
              className: "bg-white hover:border-black/40"
            }
          ),
          /* @__PURE__ */ e("div", { className: "absolute right-2 top-1.5 flex items-start justify-end", children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: () => i(x),
              disabled: c || !ue(x, r),
              className: `rounded-md bg-blue-500 px-3 py-0 py-0.5 text-sm text-white ${c || !ue(x, r) ? "cursor-not-allowed opacity-50" : ""}`,
              children: c ? /* @__PURE__ */ n(H, { children: [
                /* @__PURE__ */ e(G, { className: "mr-2 h-4 w-4 animate-spin" }),
                a("Saving...")
              ] }) : a("Save")
            }
          ) })
        ] })
      ] })
    ] })
  ] });
}, wt = pe.lazy(() => import("./image-editor-DmnXuUR4.js")), bt = 25 * 1024 * 1024, At = ({ isUpdatingAsset: s, allowedTypes: l, uploadAssets: u, isUploadingAsset: i, onUploaded: c }) => {
  const { t: a } = te(), [r, k] = y(() => {
    const o = localStorage.getItem("chai_optimize_images");
    return o !== null ? o === "true" : !0;
  });
  O(() => {
    localStorage.setItem("chai_optimize_images", r.toString());
  }, [r]);
  const N = s || i, x = L(
    async (o) => {
      try {
        const m = o;
        if (!m.every((E) => E.type.startsWith("image/")))
          return w.error(a("Invalid file type. Please upload a valid file.")), Promise.reject(new Error("Invalid file type"));
        const d = m.map(async (E) => {
          let j = E;
          return E.type.startsWith("image/") && r && (j = await ut(E)), new Promise((X, F) => {
            const U = new FileReader();
            U.readAsDataURL(j), U.onload = async () => {
              X({
                file: U.result,
                folderId: void 0,
                name: E.name,
                optimize: r
              });
            }, U.onerror = () => F(null);
          });
        }), f = await Promise.all(d), v = await u(f);
        return (v == null ? void 0 : v.length) === 1 && c(v[0]), v;
      } catch (m) {
        return Promise.reject(m);
      }
    },
    [u, r, c, a]
  ), g = (o) => {
    const m = [];
    let d = 0;
    return o.forEach((f) => {
      f.size > bt ? d++ : m.push(f);
    }), d > 0 && w.error(
      `${d === 1 && o.length === 1 ? a("File") : d + a(d === 1 ? " file" : " files")} ${a("exceed the maximum size limit of 10MB.")}`
    ), _e(m) ? [] : x(m);
  }, { getRootProps: b, getInputProps: C, isDragActive: S } = et({
    onDrop: g,
    accept: {
      "image/*": l.includes("image") ? [] : []
    },
    disabled: s || i,
    multiple: !0
  });
  return /* @__PURE__ */ e(
    "div",
    {
      className: `flex h-[60px] w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 p-0 py-2 hover:border-black/50 ${N ? "pointer-events-none bg-gray-100 opacity-90" : "bg-gray-100 hover:border-black/50 hover:bg-gray-100"}`,
      children: /* @__PURE__ */ n(
        "div",
        {
          ...b(),
          className: ye(
            "flex h-max w-full cursor-pointer flex-col justify-center rounded-lg text-center",
            N ? "items-start" : "items-center",
            S ? "border-primary bg-primary/5" : "border-muted-foreground/20"
          ),
          children: [
            /* @__PURE__ */ e("input", { ...C() }),
            N ? /* @__PURE__ */ e("div", { className: "flex flex-col items-center px-6", children: /* @__PURE__ */ n("div", { className: "flex items-center justify-center gap-2 leading-tight", children: [
              /* @__PURE__ */ e("div", { className: "flex items-center justify-center rounded-full bg-indigo-100 p-2", children: /* @__PURE__ */ e(G, { className: "h-4 w-4 animate-spin text-indigo-500" }) }),
              /* @__PURE__ */ n("div", { className: "text-left", children: [
                /* @__PURE__ */ e("div", { className: "font-medium", children: a(s ? "Updating file..." : "Uploading file...") }),
                /* @__PURE__ */ n("div", { className: "text-xs font-light text-muted-foreground", children: [
                  a("Please wait while we"),
                  " ",
                  a(s ? "update" : "upload"),
                  " ",
                  a("your file...")
                ] })
              ] })
            ] }) }) : /* @__PURE__ */ n("div", { className: "flex w-full items-center justify-between px-6", children: [
              /* @__PURE__ */ e("div", { className: "flex flex-col items-center", children: /* @__PURE__ */ n("div", { className: "flex items-center justify-between gap-2 leading-tight", children: [
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: "flex items-center justify-center rounded-full border border-indigo-500 bg-indigo-100 p-2",
                    children: /* @__PURE__ */ e(Ze, { className: "h-4 w-4 text-indigo-500" })
                  }
                ),
                /* @__PURE__ */ n("div", { className: "text-left", children: [
                  /* @__PURE__ */ n("div", { className: "font-medium", children: [
                    a("Drop your file here or"),
                    " ",
                    /* @__PURE__ */ e("span", { className: "cursor-pointer text-indigo-500 hover:underline", children: a("browse") })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs font-light text-muted-foreground", children: /* @__PURE__ */ n("span", { className: "", children: [
                    a("Accepted file types:"),
                    " ",
                    /* @__PURE__ */ e("span", { className: "capitalize text-indigo-400", children: l.join(", ") })
                  ] }) })
                ] })
              ] }) }),
              /* @__PURE__ */ n("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ n("span", { className: "text-xs", children: [
                    a("Optimization:"),
                    " ",
                    /* @__PURE__ */ e("span", { className: r ? "text-indigo-600" : "text-gray-400", children: a(r ? "On" : "Off") })
                  ] }),
                  /* @__PURE__ */ e(
                    ot,
                    {
                      checked: r,
                      onCheckedChange: (o) => {
                        k(o);
                      },
                      onClick: (o) => {
                        o.stopPropagation();
                      },
                      className: "data-[state=checked]:bg-indigo-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ e(_, { children: /* @__PURE__ */ n(P, { children: [
                  /* @__PURE__ */ e(q, { asChild: !0, children: /* @__PURE__ */ e(
                    "span",
                    {
                      className: `flex cursor-help items-center text-amber-500 ${r ? "invisible" : ""}`,
                      children: /* @__PURE__ */ e(Je, { className: "mr-1 h-4 w-4" })
                    }
                  ) }),
                  /* @__PURE__ */ e(B, { side: "top", children: /* @__PURE__ */ e("p", { className: "text-xs text-white", children: a("Warning: Unoptimized images may affect performance and page load times") }) })
                ] }) })
              ] })
            ] })
          ]
        }
      )
    }
  );
};
function _t({ close: s, onSelect: l, mode: u = "image", assetId: i }) {
  const { t: c } = te(), a = !1, r = 10, k = ge(() => [u], [u]), [N, x] = y(null), [g, b] = y(null), [C, S] = y(null), [o, m] = y({ show: !1, file: "" }), [d, f] = y(!1), [v, E] = y(i ? "details" : "grid"), [j, X] = y(""), [F, U] = y(""), [Q, Z] = y(1), [le] = y(30), [I, J] = y([]);
  O(() => {
    i && (x(i), E("details"));
  }, [i]), O(() => {
    const t = setTimeout(() => {
      X(F), Z(1);
    }, 300);
    return () => clearTimeout(t);
  }, [F]);
  const {
    data: $,
    isLoading: W,
    refetch: Ne
  } = xt({
    search: j.toLowerCase().trim(),
    page: Q,
    limit: le
  }), D = ($ == null ? void 0 : $.assets) || [], we = ($ == null ? void 0 : $.total) || 0, T = Math.ceil(we / le);
  O(() => {
    W || T <= 0 || Z((t) => t > T ? T : t < 1 ? 1 : t);
  }, [W, T]);
  const be = (D == null ? void 0 : D.length) > 0, { mutate: Ae } = ft(), { mutateAsync: re, isPending: Ce } = ht(), { mutateAsync: ne, isPending: Se } = pt(), se = L(
    (t) => {
      const h = Math.min(Math.max(1, t), Math.max(1, T));
      h !== Q && Z(h);
    },
    [T, Q]
  ), Ee = (t) => {
    U(t.target.value);
  }, Ie = L(
    (t) => {
      J((h) => $e(h, { id: t.id }) ? [] : [t]);
    },
    [a]
  ), ke = L(() => {
    J([]);
  }, []), ce = (t) => {
    (t == null ? void 0 : t.length) !== 0 && (l(Y(Le(t || I), ["id", "url", "width", "height", "description"])), s());
  }, Te = async (t) => {
    b(t);
  }, ze = async () => {
    g && (S(g == null ? void 0 : g.id), await Ae(g.id, {
      onSuccess: () => {
        S(null), b(null);
      },
      onError: () => {
        S(null);
      }
    }), b(null));
  }, De = (t) => {
    x(t.id), E("details");
  }, je = async (t, h) => {
    try {
      const M = localStorage.getItem("chai_optimize_images") !== "false";
      if (h) {
        const z = await re([
          {
            file: t,
            folderId: void 0,
            name: o.name || "",
            optimize: M
          }
        ]);
        if ((z == null ? void 0 : z.length) > 0) {
          const oe = z[0];
          l({
            ...Y(oe, ["id", "width", "height", "description"]),
            url: oe.url
          });
        }
      } else {
        const z = await ne({
          id: o.id || "",
          file: t
        });
        z && l({
          ...Y(z, ["id", "width", "height", "description"]),
          url: z.url
        });
      }
      m({ show: !1, file: "" }), s();
    } catch (M) {
      console.error(c("Error saving edited image:"), M);
    }
  }, Fe = L((t) => {
    J([t]);
  }, []), Ue = L(
    (t) => {
      se(t);
    },
    [se]
  );
  return /* @__PURE__ */ n(H, { children: [
    /* @__PURE__ */ n("div", { className: "flex h-[80vh] max-h-[1232px] w-[80vw] max-w-[1232px] flex-col space-y-4", children: [
      /* @__PURE__ */ e("h1", { className: "text-lg font-medium", children: c("Digital Asset Manager") }),
      v === "grid" ? /* @__PURE__ */ n(H, { children: [
        /* @__PURE__ */ e(
          At,
          {
            maxFileSize: r,
            allowedTypes: k,
            uploadAssets: re,
            isUpdatingAsset: Se,
            isUploadingAsset: Ce,
            onUploaded: Fe
          }
        ),
        /* @__PURE__ */ n("div", { className: "relative flex flex-1 flex-col gap-y-3 overflow-hidden rounded-lg border p-2", children: [
          /* @__PURE__ */ n("div", { className: "flex items-center justify-between gap-3", children: [
            /* @__PURE__ */ n("div", { className: "relative w-1/2", children: [
              /* @__PURE__ */ e(
                Ge,
                {
                  strokeWidth: 3,
                  className: `absolute left-2 top-2.5 h-4 w-4 text-muted-foreground ${F.length > 0 ? "text-indigo-800" : ""}`
                }
              ),
              /* @__PURE__ */ e(
                xe,
                {
                  placeholder: c("Search assets..."),
                  onChange: Ee,
                  value: F,
                  className: "pl-8"
                }
              )
            ] }),
            /* @__PURE__ */ n("div", { className: "flex items-center gap-x-2", children: [
              I.length > 0 ? /* @__PURE__ */ e("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ n("div", { className: "flex items-center gap-2", children: [
                I.length > 0 && /* @__PURE__ */ e(H, { children: /* @__PURE__ */ e(
                  p,
                  {
                    variant: "outline",
                    size: "sm",
                    onClick: () => ke(),
                    title: c("Clear selection"),
                    children: c("Clear")
                  }
                ) }),
                /* @__PURE__ */ e(
                  p,
                  {
                    size: "sm",
                    onClick: () => ce(I),
                    disabled: I.length === 0,
                    children: c("Select Asset")
                  }
                )
              ] }) }) : null,
              /* @__PURE__ */ e(p, { variant: "ghost", size: "icon", onClick: () => Ne(), children: /* @__PURE__ */ e(Re, { className: "h-4 w-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "flex-1 overflow-y-auto pb-[66px]", children: W ? /* @__PURE__ */ n("div", { className: "columns-1 gap-3 space-y-3 sm:columns-3 md:columns-5", children: [
            /* @__PURE__ */ e("div", { className: "h-64 w-full animate-pulse rounded bg-gray-200" }),
            /* @__PURE__ */ e("div", { className: "h-64 w-full animate-pulse rounded bg-gray-200" }),
            /* @__PURE__ */ e("div", { className: "h-64 w-full animate-pulse rounded bg-gray-200" }),
            /* @__PURE__ */ e("div", { className: "h-64 w-full animate-pulse rounded bg-gray-200" }),
            /* @__PURE__ */ e("div", { className: "h-64 w-full animate-pulse rounded bg-gray-200" }),
            /* @__PURE__ */ e("div", { className: "h-64 w-full animate-pulse rounded bg-gray-200" }),
            /* @__PURE__ */ e("div", { className: "h-64 w-full animate-pulse rounded bg-gray-200" }),
            /* @__PURE__ */ e("div", { className: "h-64 w-full animate-pulse rounded bg-gray-200" }),
            /* @__PURE__ */ e("div", { className: "h-64 w-full animate-pulse rounded bg-gray-200" }),
            /* @__PURE__ */ e("div", { className: "h-64 w-full animate-pulse rounded bg-gray-200" })
          ] }) : !W && !be ? /* @__PURE__ */ n("div", { className: "flex h-full flex-col items-center justify-center rounded-lg border", children: [
            /* @__PURE__ */ e("div", { className: "text-muted-foreground", children: /* @__PURE__ */ e(Ke, { className: "h-9 w-9 text-indigo-500" }) }),
            /* @__PURE__ */ e("div", { className: "text-lg text-muted-foreground", children: c("No assets found") }),
            /* @__PURE__ */ e("div", { className: "text-sm text-muted-foreground", children: j.length > 0 ? c("No assets found for your search: {{query}}", { query: j }) : c("Start uploading assets to get started") }),
            /* @__PURE__ */ e("br", {})
          ] }) : /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-3 p-1", children: D == null ? void 0 : D.map((t) => /* @__PURE__ */ n(
            "div",
            {
              className: ye(
                "group relative flex max-h-[180px] max-w-[180px] cursor-pointer flex-col justify-between overflow-hidden rounded-lg border-2 transition-all",
                I.some((h) => h.id === t.id) ? "border-blue-500" : "hover:border-black/90",
                C && (g == null ? void 0 : g.id) === t.id ? "pointer-events-none opacity-50" : "",
                C === t.id ? "pointer-events-none opacity-50" : ""
              ),
              onClick: () => Ie(t),
              onDoubleClick: () => ce([t]),
              children: [
                /* @__PURE__ */ n("div", { className: "aspect-square relative overflow-hidden", children: [
                  C === t.id ? /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center bg-black/50", children: /* @__PURE__ */ e(G, { className: "h-8 w-8 animate-spin text-white" }) }) : null,
                  t.type === "image" ? /* @__PURE__ */ e(
                    "img",
                    {
                      src: `${t.thumbnailUrl || "/placeholder.svg"}?v=${(t == null ? void 0 : t.updatedAt) || t.createdAt}`,
                      alt: t.name,
                      className: `h-full min-h-[80px] w-full object-contain ${I.some((h) => h.id === t.id) ? "" : "group-hover:blur group-hover:contrast-50"}`
                    }
                  ) : /* @__PURE__ */ n("div", { className: "flex h-full items-center justify-center", children: [
                    /* @__PURE__ */ e(Qe, { className: "h-12 w-12 text-muted-foreground" }),
                    t.thumbnailUrl && /* @__PURE__ */ e(
                      "img",
                      {
                        src: `${t.thumbnailUrl || "/placeholder.svg"}?v=${(t == null ? void 0 : t.updatedAt) || t.createdAt}`,
                        alt: t.name,
                        className: "absolute inset-0 h-full w-full object-cover"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ n("div", { className: "flex items-end justify-between border-t-[1px] border-black/10 bg-white px-2 py-1", children: [
                  /* @__PURE__ */ e("div", { className: "truncate text-xs leading-tight", title: t.name, children: t.name }),
                  /* @__PURE__ */ e("div", { className: "flex items-center justify-between whitespace-nowrap text-[9px] font-light text-muted-foreground", children: /* @__PURE__ */ e("span", { children: ee((t == null ? void 0 : t.size) || 0) }) })
                ] }),
                !I.some((h) => h.id === t.id) && /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100", children: /* @__PURE__ */ n("div", { className: "grid grid-cols-4 gap-2 p-2", children: [
                  /* @__PURE__ */ e(_, { children: /* @__PURE__ */ n(P, { children: [
                    /* @__PURE__ */ e(q, { asChild: !0, children: /* @__PURE__ */ e(
                      p,
                      {
                        variant: "secondary",
                        size: "icon",
                        className: "h-8 w-8 rounded-full",
                        onClick: (h) => {
                          h.stopPropagation(), De(t);
                        },
                        children: /* @__PURE__ */ e(We, { className: "h-4 w-4" })
                      }
                    ) }),
                    /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e("p", { children: c("View Details") }) })
                  ] }) }),
                  /* @__PURE__ */ e(_, { children: /* @__PURE__ */ n(P, { children: [
                    /* @__PURE__ */ e(q, { asChild: !0, children: /* @__PURE__ */ e(
                      p,
                      {
                        variant: "secondary",
                        size: "icon",
                        className: "h-8 w-8 rounded-full",
                        onClick: (h) => {
                          h.stopPropagation(), navigator.clipboard.writeText(t.url), w.success(c("Asset URL copied to clipboard"));
                        },
                        children: /* @__PURE__ */ e(fe, { className: "h-4 w-4" })
                      }
                    ) }),
                    /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e("p", { children: c("Copy URL") }) })
                  ] }) }),
                  /* @__PURE__ */ e(_, { children: /* @__PURE__ */ n(P, { children: [
                    /* @__PURE__ */ e(q, { asChild: !0, children: /* @__PURE__ */ e(
                      p,
                      {
                        variant: "secondary",
                        size: "icon",
                        className: "h-8 w-8 rounded-full",
                        onClick: (h) => {
                          h.stopPropagation(), m({
                            id: t.id,
                            show: !0,
                            file: t.url,
                            name: t.name
                          });
                        },
                        children: /* @__PURE__ */ e(Ve, { className: "h-4 w-4" })
                      }
                    ) }),
                    /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e("p", { children: c("Edit Image") }) })
                  ] }) }),
                  /* @__PURE__ */ e(_, { children: /* @__PURE__ */ n(P, { children: [
                    /* @__PURE__ */ e(q, { asChild: !0, children: /* @__PURE__ */ e(
                      p,
                      {
                        variant: "destructive",
                        size: "icon",
                        className: "h-8 w-8 rounded-full",
                        onClick: (h) => {
                          h.stopPropagation(), Te(t);
                        },
                        children: /* @__PURE__ */ e(He, { className: "h-4 w-4" })
                      }
                    ) }),
                    /* @__PURE__ */ e(B, { children: /* @__PURE__ */ e("p", { children: c("Delete Asset") }) })
                  ] }) })
                ] }) }),
                I.some((h) => h.id === t.id) && /* @__PURE__ */ e("div", { className: "absolute right-1 top-1 h-max rounded-full border border-white bg-blue-500 p-1", children: /* @__PURE__ */ e(Xe, { className: "h-3 w-3 text-white", strokeWidth: 5 }) })
              ]
            },
            t.id
          )) }) }),
          T > 1 && /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 right-0 border-t bg-white p-4", children: /* @__PURE__ */ e(tt, { fallback: /* @__PURE__ */ e("div", { className: "text-red-500", children: c("Error loading pagination") }), children: /* @__PURE__ */ e(
            gt,
            {
              currentPage: Q,
              totalPages: T,
              onPageChange: Ue,
              pageRangeDisplayed: 3,
              showPageInput: !0
            }
          ) }) })
        ] })
      ] }) : /* @__PURE__ */ e(
        Nt,
        {
          assetId: N || i || "",
          onBack: () => {
            E("grid"), x(null);
          },
          onEdit: (t) => {
            m({
              id: t.id,
              show: !0,
              file: t.url,
              name: t.name
            });
          },
          onSave: async (t) => {
            if (N) {
              f(!0);
              try {
                const h = D.find((M) => M.id === N);
                h && await ne(Me(h, { description: t }));
              } finally {
                f(!1);
              }
            }
          },
          isSaving: d
        }
      )
    ] }),
    o.show && /* @__PURE__ */ e(
      Ye,
      {
        fallback: /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ e(G, { className: "h-8 w-8 animate-spin" }) }),
        children: /* @__PURE__ */ e(
          wt,
          {
            imageUrl: o.file,
            onSave: je,
            onClose: () => m({ show: !1, file: "" }),
            defaultSavedImageName: o.name,
            isEditing: !!o.id
          }
        )
      }
    ),
    g && /* @__PURE__ */ e(at, { open: !!g, onOpenChange: () => b(null), children: /* @__PURE__ */ n(lt, { children: [
      /* @__PURE__ */ n(rt, { children: [
        /* @__PURE__ */ e(nt, { children: c("Delete Asset") }),
        /* @__PURE__ */ e(st, { children: c('Are you sure you want to delete "{{name}}"? This action cannot be undone.', {
          name: g.name
        }) })
      ] }),
      /* @__PURE__ */ n(ct, { className: "gap-2 sm:gap-0", children: [
        /* @__PURE__ */ e(p, { variant: "outline", onClick: () => b(null), children: c("Cancel") }),
        /* @__PURE__ */ e(p, { variant: "destructive", onClick: ze, children: c("Delete") })
      ] })
    ] }) })
  ] });
}
export {
  _t as default
};
