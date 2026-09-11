var Ru = Object.defineProperty;
var Lu = (t, e, n) => e in t ? Ru(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Yt = (t, e, n) => Lu(t, typeof e != "symbol" ? e + "" : e, n);
import { jsx as l, jsxs as b, Fragment as Q } from "react/jsx-runtime";
import { noop as wt, get as _, has as le, find as ee, filter as Z, flatten as $t, map as A, includes as Be, without as Pu, compact as jn, forEach as vo, keys as kt, isEmpty as F, set as Ge, unset as Ou, omit as vr, isString as Ct, chunk as Du, values as Lt, pick as dn, startsWith as Re, isFunction as Zt, isObject as Os, memoize as Mu, each as ht, first as ye, findIndex as ir, throttle as $u, some as Fu, uniq as Ds, cloneDeep as to, isArray as wr, isNull as tl, split as zu, reject as Ur, take as Hu, debounce as Ms, startCase as Kt, isNumber as Vu, parseInt as ju, isNaN as Wu, range as Xe, flattenDeep as Ot, toLower as nl, nth as Ki, findLast as Gu, intersection as Uu, toUpper as qo, kebabCase as rl, capitalize as $n, groupBy as ol, sortBy as Ku, reverse as Ju, camelCase as Yu } from "lodash-es";
import * as W from "react";
import te, { useMemo as M, useCallback as B, useState as $, useEffect as z, useRef as ne, Component as sl, Children as Xu, memo as kr, startTransition as qu, createElement as un, createContext as wo, useContext as yn, Suspense as We, lazy as $s } from "react";
import { ErrorBoundary as on } from "react-error-boundary";
import { F as j, z as Cr, B as re, n as Zu, u as Zo, o as Qu, l as il, d as ep, G as al, s as ll, v as Fs, y as tp, w as Ji } from "./register-chai-top-bar-DWmJ2efT.js";
import { Provider as np } from "react-wrap-balancer";
import { flip as rp, size as op, limitShift as sp } from "@floating-ui/dom";
import { useFloating as ip, shift as ap } from "@floating-ui/react-dom";
import { ChevronRightIcon as Wn, CheckIcon as Nr, CircleIcon as cl, PinTopIcon as lp, PinBottomIcon as cp, PinLeftIcon as dp, PinRightIcon as up, GearIcon as pp, DragHandleDots2Icon as fp, ArrowUpIcon as qt, PlusIcon as qe, CopyIcon as zs, TrashIcon as Hs, CaretDownIcon as gs, Cross1Icon as at, FontBoldIcon as hp, FontItalicIcon as dl, UnderlineIcon as ul, StrikethroughIcon as mp, ListBulletIcon as bs, ValueIcon as gp, TextAlignLeftIcon as Yi, TextAlignCenterIcon as Xi, TextAlignRightIcon as qi, Link2Icon as bp, LinkBreak2Icon as pl, EnterFullScreenIcon as yp, Pencil2Icon as ko, MagnifyingGlassIcon as fl, ChevronLeftIcon as hl, LoopIcon as ml, IdCardIcon as gl, ChevronDownIcon as xn, InfoCircledIcon as pr, FileIcon as xp, PlusCircledIcon as vp, DotsVerticalIcon as Co, TriangleDownIcon as wp, RowSpacingIcon as kp, Cross2Icon as No, LetterCaseUppercaseIcon as Cp, OverlineIcon as Np, StretchHorizontallyIcon as Sp, AlignRightIcon as Ep, AlignCenterHorizontallyIcon as _p, AlignLeftIcon as Ap, ArrowLeftIcon as Zn, ArrowDownIcon as Rn, ArrowRightIcon as Qn, HeightIcon as nt, WidthIcon as rt, BorderAllIcon as Bt, ArrowBottomLeftIcon as Tp, ArrowBottomRightIcon as Bp, ArrowTopRightIcon as bl, ArrowTopLeftIcon as Ip, EyeClosedIcon as no, EyeOpenIcon as yl, BoxIcon as So, MinusIcon as Rp, CrossCircledIcon as Lp, TokensIcon as Pp, ChevronUpIcon as Op, ReloadIcon as Vs, CaretRightIcon as Dp, FrameIcon as Mp, EraserIcon as xl, DownloadIcon as $p, CardStackPlusIcon as Fp, CardStackIcon as js, ScissorsIcon as zp, ExclamationTriangleIcon as Hp, StackIcon as Vp, DoubleArrowDownIcon as jp, DoubleArrowUpIcon as Wp, ResetIcon as ro, UploadIcon as Gp, TextIcon as Up, CornerTopRightIcon as Kp, MixerHorizontalIcon as oo, SunIcon as vl, MoonIcon as wl, FaceIcon as Jp, ShuffleIcon as Yp, ChatBubbleIcon as Xp, StopIcon as qp, LightningBoltIcon as Zp } from "@radix-ui/react-icons";
import { useDebouncedCallback as Nt, useThrottledCallback as pn, useResizeObserver as ys, useDebouncedState as Zi } from "@react-hookz/web";
import { useTranslation as K, initReactI18next as Qp } from "react-i18next";
import * as Ae from "@radix-ui/react-dropdown-menu";
import { f as Pe, a as Ws, j as Eo, l as Gs, b as Qi } from "./core-nSRy3D7z.js";
import ef from "@rjsf/core";
import tf from "@rjsf/validator-ajv8";
import { atom as P, getDefaultStore as nf, useAtomValue as Ue, useAtom as D, useSetAtom as vt, Provider as rf } from "jotai";
import { C as Dt, S as St, R as ar, D as Mr, a as Kr } from "./STRINGS-BExFecZW.js";
import { isObject as ea } from "@rjsf/utils";
import { splitAtom as kl, atomWithStorage as Et, useAtomCallback as Cl } from "jotai/utils";
import { g as fn, a as Nl, c as Ze } from "./common-functions-D2lMFR6K.js";
import of from "tree-model";
import sf from "undo-manager";
import * as xe from "@radix-ui/react-dialog";
import { f as af, a as Sl, b as ta, c as na, d as ra, r as lf, e as cf, j as vn, k as df, g as fr, m as uf } from "./apply-binding-v_W4uR3U.js";
import { cva as Us } from "class-variance-authority";
import * as Fn from "@radix-ui/react-tooltip";
import xs, { t as er } from "i18next";
import { Command as tt } from "cmdk";
import * as hr from "@radix-ui/react-popover";
import { useEditor as pf, BubbleMenu as ff, EditorContent as El } from "@tiptap/react";
import hf from "@tiptap/extension-text-style";
import mf from "@tiptap/extension-highlight";
import gf from "@tiptap/extension-link";
import bf from "@tiptap/extension-placeholder";
import yf from "@tiptap/extension-text-align";
import xf from "@tiptap/extension-underline";
import vf from "@tiptap/starter-kit";
import wf, { clsx as kf } from "clsx";
import { twMerge as _l } from "tailwind-merge";
import { HexAlphaColorPicker as Cf } from "react-colorful";
import { e as Ks, a as Nf, d as Al, p as Sf, g as Ef, f as _f, h as Af } from "./chai-theme-helpers-BEf2rwE4.js";
import oa, { createPortal as Tf } from "react-dom";
import * as vs from "@radix-ui/react-switch";
import * as hn from "@radix-ui/react-accordion";
import Tl from "fuse.js";
import * as _o from "@radix-ui/react-hover-card";
import Bf from "react-autosuggest";
import { toast as Ce, Toaster as If } from "sonner";
import * as sn from "@radix-ui/react-scroll-area";
import * as wn from "@radix-ui/react-tabs";
import * as Bl from "@radix-ui/react-label";
import * as _e from "@radix-ui/react-select";
import { Tree as Rf } from "react-arborist";
import * as Ke from "@radix-ui/react-alert-dialog";
import * as Il from "@radix-ui/react-separator";
import * as tr from "@radix-ui/react-slider";
import { u as Js } from "./fonts-B3UYxuJI.js";
import { parse as Lf, stringify as Pf } from "himalaya";
import "nanoid";
import "@mhsdesign/jit-browser-tailwindcss";
import Of from "@tailwindcss/aspect-ratio";
import Df from "@tailwindcss/container-queries";
import Mf from "@tailwindcss/forms";
import $f from "@tailwindcss/typography";
import { motion as $r } from "framer-motion";
import { PlusIcon as Ff, ListTree as zf } from "lucide-react";
import { s as Hf } from "./get-chai-builder-tailwind-config-k8l5sdcw.js";
import { useHotkeys as Rt } from "react-hotkeys-hook";
function zn({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ l(
    "div",
    {
      className: j("animate-pulse rounded-md bg-primary/10", t),
      ...e
    }
  );
}
const Ys = ({
  className: t = "h-full w-full",
  onClick: e = wt
}) => /* @__PURE__ */ l("svg", { className: t, viewBox: "0 0 256 256", fill: "currentColor", onClick: e, children: /* @__PURE__ */ l("path", { d: "m198.39 128.986-52.16-19.216-19.216-52.16a16 16 0 0 0-30.028 0L77.77 109.77l-52.16 19.216a16 16 0 0 0 0 30.028l52.16 19.216 19.216 52.16a16 16 0 0 0 30.028 0l19.216-52.16 52.16-19.216a16 16 0 0 0 0-30.028m-57.69 34.23a15.97 15.97 0 0 0-9.483 9.483l-19.22 52.152-19.214-52.15a15.97 15.97 0 0 0-9.482-9.484l-52.152-19.22 52.15-19.214a15.97 15.97 0 0 0 9.484-9.482l19.22-52.152 19.214 52.15a15.97 15.97 0 0 0 9.482 9.484l52.152 19.22ZM144 40a8 8 0 0 1 8-8h16V16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V48h-16a8 8 0 0 1-8-8m104 48a8 8 0 0 1-8 8h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 8 8" }) }), kn = Ae.Root, Cn = Ae.Trigger, Vf = W.forwardRef(({ className: t, inset: e, children: n, ...r }, s) => /* @__PURE__ */ b(
  Ae.SubTrigger,
  {
    ref: s,
    className: j(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      e && "pl-8",
      t
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ l(Wn, { className: "ml-auto h-4 w-4" })
    ]
  }
));
Vf.displayName = Ae.SubTrigger.displayName;
const jf = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  Ae.SubContent,
  {
    ref: n,
    className: j(
      "z-50 min-w-[8rem] origin-[--radix-dropdown-menu-content-transform-origin] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...e
  }
));
jf.displayName = Ae.SubContent.displayName;
const Ft = W.forwardRef(({ className: t, sideOffset: e = 4, ...n }, r) => /* @__PURE__ */ l(Ae.Portal, { children: /* @__PURE__ */ l(
  Ae.Content,
  {
    ref: r,
    sideOffset: e,
    className: j(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "origin-[--radix-dropdown-menu-content-transform-origin] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...n
  }
) }));
Ft.displayName = Ae.Content.displayName;
const Ee = W.forwardRef(({ className: t, inset: e, ...n }, r) => /* @__PURE__ */ l(
  Ae.Item,
  {
    ref: r,
    className: j(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      e && "pl-8",
      t
    ),
    ...n
  }
));
Ee.displayName = Ae.Item.displayName;
const Rl = W.forwardRef(({ className: t, children: e, checked: n, ...r }, s) => /* @__PURE__ */ b(
  Ae.CheckboxItem,
  {
    ref: s,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ l("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l(Ae.ItemIndicator, { children: /* @__PURE__ */ l(Nr, { className: "h-4 w-4" }) }) }),
      e
    ]
  }
));
Rl.displayName = Ae.CheckboxItem.displayName;
const Wf = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ b(
  Ae.RadioItem,
  {
    ref: r,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...n,
    children: [
      /* @__PURE__ */ l("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l(Ae.ItemIndicator, { children: /* @__PURE__ */ l(cl, { className: "h-2 w-2 fill-current" }) }) }),
      e
    ]
  }
));
Wf.displayName = Ae.RadioItem.displayName;
const Ll = W.forwardRef(({ className: t, inset: e, ...n }, r) => /* @__PURE__ */ l(
  Ae.Label,
  {
    ref: r,
    className: j("px-2 py-1.5 text-sm font-semibold", e && "pl-8", t),
    ...n
  }
));
Ll.displayName = Ae.Label.displayName;
const Pl = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(Ae.Separator, { ref: n, className: j("-mx-1 my-1 h-px bg-muted", t), ...e }));
Pl.displayName = Ae.Separator.displayName;
const se = {
  OPEN_ADD_BLOCK: "OPEN_ADD_BLOCK",
  CLOSE_ADD_BLOCK: "CLOSE_ADD_BLOCK",
  GOTO_BLOCK_SETTINGS: "GOTO_BLOCK_SETTINGS",
  OPEN_AI_PANEL: "OPEN_AI_PANEL",
  //CANVAS Events
  CLEAR_CANVAS_SELECTION: "CLEAR_CANVAS_SELECTION",
  CANVAS_BLOCK_SELECTED: "CANVAS_BLOCK_SELECTED",
  CANVAS_BLOCK_STYLE_SELECTED: "CANVAS_BLOCK_STYLE_SELECTED",
  // Export Code
  OPEN_EXPORT_CODE: "OPEN_EXPORT_CODE"
}, mt = (t, e) => {
  if (!t) return !0;
  const n = Pe(t);
  return n && n.canAcceptBlock ? n.canAcceptBlock(e) : !1;
}, so = (t) => {
  const e = Pe(t);
  return e ? le(e, "canAcceptBlock") : !1;
}, Gf = (t, e) => {
  const n = Pe(e);
  return n && n.canBeNested ? n.canBeNested(t) : !0;
}, Xs = (t) => {
  const e = Pe(t);
  return e && e.canDuplicate ? e.canDuplicate() : !0;
}, qs = (t) => {
  const e = Pe(t);
  return e && e.canDelete ? e.canDelete() : !0;
}, sa = (t, { dragSource: e, dropTarget: n }) => {
  const r = _(e, "data._type", ""), s = _(n, "data._type", "");
  return mt(s, r);
};
import.meta.vitest && describe("canDropBlock Function", () => {
  it('should return false if dragSourceType is "Slot"', () => {
    const t = { data: { _type: "Slot" } }, e = { data: {} };
    expect(sa({}, { dragSource: t, dropTarget: e })).toBe(!0);
  }), it("should return true if dropTargetType is empty", () => {
    const t = { data: { _type: "Box" } }, e = { data: {} };
    expect(sa({}, { dragSource: t, dropTarget: e })).toBe(!0);
  });
});
class Uf {
  constructor() {
    Yt(this, "subscribers", /* @__PURE__ */ new Map());
  }
  subscribe(e, n) {
    return this.subscribers.has(e) || this.subscribers.set(e, /* @__PURE__ */ new Set()), this.subscribers.get(e).add(n), () => {
      const r = this.subscribers.get(e);
      r && (r.delete(n), r.size === 0 && this.subscribers.delete(e));
    };
  }
  publish(e, n) {
    const r = this.subscribers.get(e);
    r && r.forEach((s) => s(n));
  }
}
const me = new Uf();
function Ol(t, e, n) {
  const r = Z(t, (o) => o._parent === e), s = [];
  for (let o = 0; o < r.length; o++)
    if (Z(t, { _parent: r[o]._id }).length > 0) {
      const i = fn();
      s.push({ ...r[o], oldId: r[o]._id, _id: i, _parent: n }), s.push($t(Ol(t, r[o]._id, i)));
    } else
      s.push({
        ...r[o],
        oldId: r[o]._id,
        _id: fn(),
        _parent: n
      });
  return $t(s);
}
function Zs(t) {
  const e = {};
  t.forEach((r) => {
    e[r._id] = { ...r, children: [] };
  });
  const n = [];
  return t.forEach((r) => {
    if (r._parent) {
      const s = e[r._parent];
      s && s.children.push(e[r._id]);
    } else
      n.push(e[r._id]);
  }), n;
}
const ws = (t, e, n = null) => {
  let r = ee(t, { _id: e });
  r = { ...r, oldId: r._id, _id: fn() }, n !== (r == null ? void 0 : r._parent) && (r = { ...r, _parent: n });
  const s = [r];
  return Z(t, { _parent: e }).length > 0 && s.push($t(Ol(t, e, r._id))), $t(s);
}, He = P([]);
He.debugLabel = "presentBlocksAtom";
const Dl = P((t) => {
  const e = t(He);
  return Zs([...e]);
});
Dl.debugLabel = "treeDSBlocks";
const Sr = kl(He);
Sr.debugLabel = "pageBlocksAtomsAtom";
const Kf = P("");
Kf.debugLabel = "builderActivePageAtom";
const Jf = P(-1);
Jf.debugLabel = "destinationDropIndexAtom";
const Ml = P([]);
Ml.debugLabel = "buildingBlocksAtom";
const Yf = P((t) => {
  const e = t(Ml);
  return Z(e, (n) => le(n, "blockId"));
});
Yf.debugLabel = "globalBlocksAtom";
const Gn = P([]);
Gn.debugLabel = "structureErrorsAtom";
const Qs = P(!0);
Qs.debugLabel = "structureValidationValidAtom";
const ei = P(!1);
ei.debugLabel = "hasStructureErrorsAtom";
const ti = P(!1);
ti.debugLabel = "hasStructureWarningsAtom";
const $l = P((t) => t(Gn).filter((n) => n.severity === "error").length);
$l.debugLabel = "structureErrorCountAtom";
const Fl = P((t) => t(Gn).filter((n) => n.severity === "warning").length);
Fl.debugLabel = "structureWarningCountAtom";
const zl = P((t) => {
  const e = t(Gn), n = {};
  return e.forEach((r) => {
    r.blockId && (n[r.blockId] || (n[r.blockId] = []), n[r.blockId].push(r));
  }), n;
});
zl.debugLabel = "structureErrorsByBlockAtom";
const Ut = P({}), Xf = P({}), Qe = nf(), qf = () => Qe.get(He), G = (t, e) => {
  const n = Ue(si);
  return M(() => _(n, t, e), [n, t, e]);
}, Hl = P("");
Hl.debugLabel = "selectedLanguageAtom";
const Je = () => {
  const t = G("languages", []), e = G("fallbackLang", "en"), [n, r] = D(Hl), s = (o) => {
    r(e === o ? "" : o);
  };
  return {
    languages: t == null ? void 0 : t.filter((o) => o !== e),
    fallbackLang: e,
    selectedLang: n,
    setSelectedLang: s
  };
}, Ao = P([]);
Ao.debugLabel = "selectedBlockIdsAtom";
const Vl = P((t) => {
  const e = t(Ut), n = Object.values(e).flatMap((r) => r.blocks);
  return [...t(He), ...n];
});
Vl.debugLabel = "selectableBlocksAtom";
const ni = P((t) => {
  const e = t(Vl), n = t(Ao);
  return A(
    Z(e, ({ _id: r }) => Be(n, r)),
    (r) => ({ ...r })
  );
});
ni.debugLabel = "selectedBlocksAtom";
const To = P((t) => {
  const e = t(ni);
  if (e.length !== 0 && e.length === 1)
    return e[0];
});
To.debugLabel = "selectedBlockAtom";
const ae = () => Ue(To), Zf = (t) => _(t, "_parent", null), Qf = P((t) => {
  const e = t(ni), n = A(e, Zf);
  return Z(t(He), (r) => Be(n, r._id));
});
Qf.debugLabel = "selectedBlocksParentsAtom";
const jl = P(() => !1);
jl.debugLabel = "selectedBlockFlexChildAtom";
const Wl = P(() => !1);
Wl.debugLabel = "selectedBlockGridChildAtom";
const ri = P("");
ri.debugLabel = "styleStateAtom";
const Gl = Et("styleBreakpoint", "xs");
Gl.debugLabel = "styleBreakpointAtom";
const eh = () => ({
  flexChild: Ue(jl),
  gridChild: Ue(Wl)
}), th = P((t) => {
  const e = t(To), n = t(He);
  let r = e;
  const s = [e];
  do {
    const o = n.find(({ _id: i }) => i === (r == null ? void 0 : r._parent));
    r = o, o && s.push(o);
  } while (r != null && r._parent);
  return s;
}), nh = () => jn(Ue(th)), oe = () => {
  const [t, e] = D(Ao), n = B(
    (r) => {
      e((s) => Be(s, r) ? Pu(s, r) : [...s, r]);
    },
    [e]
  );
  return [t, e, n];
}, Ul = (t, e, n) => {
  const r = Pe(_(n, "_type", ""));
  if (!r) return t;
  const s = { ...t };
  return vo(kt(t), (o) => {
    if (Be(_(r, "i18nProps", []), o) && !F(e)) {
      const i = `${o}-${e}`;
      Ge(s, i, t[o]), Ou(s, o);
    }
  }), s;
}, _t = () => {
  const { updateBlocks: t } = $e(), { selectedLang: e } = Je(), n = ae();
  return B(
    (r, s, o) => {
      const i = Ul(s, e, n);
      t(r, i, o);
    },
    [e, n, t]
  );
}, rh = () => {
  const { updateMultipleBlocksProps: t } = $e();
  return B(
    (e) => {
      t(e);
    },
    [t]
  );
}, oh = () => {
  const { updateBlocksRuntime: t } = $e();
  return B(
    async (e, n, r = 30) => {
      const s = kt(vr(n, ["_id"]));
      for (const o of s) {
        const i = n[o];
        if (Ct(i)) {
          const a = Du(i.split(""), 12);
          let c = "";
          t([e], { [o]: "" });
          for (let d = 0; d < a.length; d++)
            c += a[d].join(""), t([e], { [o]: c }), await new Promise((u) => setTimeout(u, r));
        }
      }
    },
    [t]
  );
}, sh = () => {
  const { updateMultipleBlocksProps: t } = $e(), e = oh();
  return B(
    async (n) => {
      for (const r of n)
        await e(r._id, r);
      t(n);
    },
    [e, t]
  );
}, Kl = () => {
  const { updateBlocksRuntime: t } = $e(), { selectedLang: e } = Je(), n = ae();
  return B(
    (r, s) => {
      const o = Ul(s, e, n);
      t(r, o);
    },
    [e, n, t]
  );
}, oi = P({});
oi.debugLabel = "blockRepeaterDataAtom";
const Jl = () => D(oi), ih = (t, e, n, r) => {
  const [s, o] = $({
    status: "idle",
    props: {},
    error: void 0
  }), i = Kl(), a = G("getBlockAsyncProps", async (h) => ({})), c = vt(oi), d = JSON.stringify([t == null ? void 0 : t._id, ...Lt(dn(t, n ?? []))]), u = (t == null ? void 0 : t._type) === "Repeater" && Re(t.repeaterItems, `{{${Dt}`), p = (t == null ? void 0 : t._type) !== "Repeater" && e === "live";
  return z(() => {
    if (e === "mock") {
      if (Zt(r)) {
        o((m) => ({ ...m, status: "loading", props: {} }));
        const h = r({ block: t });
        if (!ea(h))
          throw new Error("mockDataProvider should return an object");
        o((m) => ({ ...m, status: "loaded", props: h }));
      }
      return;
    }
    e === "live" && (!u && !p || (o((h) => ({ ...h, status: "loading", props: {} })), a({ block: t }).then((h = {}) => {
      u ? (c((m) => ({
        ...m,
        [t._id]: {
          status: "loaded",
          props: _(h, "items", []),
          repeaterItems: t.repeaterItems
        }
      })), o((m) => ({ ...m, status: "loaded", props: { totalItems: _(h, "totalItems") } })), i([t._id], { totalItems: _(h, "totalItems") })) : o((m) => ({ ...m, status: "loaded", props: ea(h) ? h : {} }));
    }).catch((h) => {
      u ? (c((m) => ({
        ...m,
        [t._id]: { status: "error", error: h, props: [] }
      })), o((m) => ({ ...m, status: "error", error: h, props: {} }))) : o((m) => ({ ...m, status: "error", error: h, props: {} }));
    })));
  }, [t == null ? void 0 : t._id, d, u, p, r, e]), {
    $loading: _(s, "status") === "loading",
    ...t ? _(s, "props", {}) : {}
  };
}, si = P(null);
si.debugLabel = "chaiBuilderPropsAtom";
const ah = P({});
ah.debugLabel = "chaiExternalDataAtom";
const lh = P({});
lh.debugLabel = "chaiRjsfFieldsAtom";
const ch = P({});
ch.debugLabel = "chaiRjsfWidgetsAtom";
const dh = P({});
dh.debugLabel = "chaiRjsfTemplatesAtom";
const ii = P({});
ii.debugLabel = "chaiPageExternalDataAtom";
const Er = P({});
Er.debugLabel = "chaiDesignTokensAtom";
const Un = () => {
  const [t] = Jl(), e = M(() => {
    const r = {};
    return Object.entries(t).forEach(([s, o]) => {
      o.status === "loaded" && o.repeaterItems && (r[o.repeaterItems.replace("}}", `/${s}`).replace("{{", "")] = o.props);
    }), r;
  }, [t]);
  return { ...Ue(ii), ...e };
}, Bo = P(0), Yl = P({
  isOpen: !1,
  blockId: null
}), uh = [
  {
    name: "no-nested-div-in-p",
    description: "Prevents div elements from being nested inside paragraph elements",
    validate: (t, e) => {
      const n = [], r = (s, o = !1) => {
        s.forEach((i) => {
          const a = i._type === "Paragraph";
          i._type === "Box" && o && n.push({
            id: `div-in-paragraph-${i._id}`,
            message: "Box (div) cannot be nested inside Paragraph elements",
            severity: "error",
            blockId: i._id
          }), i.children && i.children.length > 0 && r(i.children, a);
        });
      };
      return r(e), n;
    }
  },
  {
    name: "no-interactive-nesting",
    description: "Prevents interactive elements (links, buttons with href) from being nested inside other interactive elements",
    validate: (t, e) => {
      const n = [], r = (o, i = !1, a = []) => {
        o.forEach((c) => {
          const d = [...a, c._id], u = c._type === "Link", p = c._type === "Button" && c.link && c.link.href && c.link.href.trim() !== "", f = u || p;
          if (f && i) {
            const h = u ? "Link" : "Button with href";
            n.push({
              id: `nested-interactive-tree-${c._id}`,
              message: `${h} cannot be nested inside another interactive element (link or button with href)`,
              severity: "error",
              blockId: c._id
            });
          }
          c.children && c.children.length > 0 && r(c.children, f, d);
        });
      }, s = (o) => {
        o.filter((a) => a._type === "Link" || a._type === "Button" && a.link && a.link.href && a.link.href.trim() !== "").forEach((a) => {
          if (a._parent) {
            const c = o.find((f) => f._id === a._parent), d = c && c._type === "Link", u = c && c._type === "Button" && c.link && c.link.href && c.link.href.trim() !== "";
            if (d || u) {
              const f = a._type === "Link" ? "Link" : "Button with href", h = d ? "Link" : "Button with href";
              n.push({
                id: `nested-interactive-parent-${a._id}`,
                message: `${f} cannot be nested inside ${h}`,
                severity: "error",
                blockId: a._id
              });
            }
            let p = c;
            for (; p && p._parent; ) {
              const f = o.find((h) => h._id === p._parent);
              if (f) {
                const h = f._type === "Link", m = f._type === "Button" && f.link && f.link.href && f.link.href.trim() !== "";
                if (h || m) {
                  const g = a._type === "Link" ? "Link" : "Button with href", y = h ? "Link" : "Button with href";
                  n.push({
                    id: `nested-interactive-ancestor-${a._id}`,
                    message: `${g} cannot be nested inside ${y}`,
                    severity: "error",
                    blockId: a._id
                  });
                  break;
                }
              }
              p = f;
            }
          }
        });
      };
      return r(e), s(t), n;
    }
  },
  {
    name: "listitem-in-list",
    description: "Ensures ListItems are only inside List containers",
    validate: (t, e) => {
      const n = [], r = (s, o = null) => {
        s.forEach((i) => {
          i._type === "ListItem" && o !== "List" && n.push({
            id: `listitem-outside-list-${i._id}`,
            message: "List Item must be inside a List container",
            severity: "error",
            blockId: i._id
          }), i.children && i.children.length > 0 && r(i.children, i._type);
        });
      };
      return r(e), n;
    }
  },
  {
    name: "table-cell-structure",
    description: "Validates proper table hierarchy (TableCell -> TableRow -> TableHead/Body -> Table)",
    validate: (t, e) => {
      const n = [], r = (s, o = []) => {
        s.forEach((i) => {
          const a = [...o, i._type];
          if (i._type === "TableCell") {
            const c = a.includes("TableRow"), d = a.includes("TableHead") || a.includes("TableBody"), u = a.includes("Table");
            (!c || !d || !u) && n.push({
              id: `table-cell-structure-${i._id}`,
              message: "Table Cell must be inside a Table Row, which must be inside Table Head/Body, which must be inside a Table",
              severity: "error",
              blockId: i._id
            });
          }
          i._type === "TableRow" && !a.slice(0, -1).includes("Table") && n.push({
            id: `table-row-outside-table-${i._id}`,
            message: "Table Row must be inside a Table (Table Head or Table Body)",
            severity: "error",
            blockId: i._id
          }), (i._type === "TableHead" || i._type === "TableBody") && !a.slice(0, -1).includes("Table") && n.push({
            id: `table-section-outside-table-${i._id}`,
            message: "Table Head/Body must be inside a Table",
            severity: "error",
            blockId: i._id
          }), i.children && i.children.length > 0 && r(i.children, a);
        });
      };
      return r(e), n;
    }
  },
  {
    name: "no-nested-buttons",
    description: "Prevents buttons from being nested inside other buttons",
    validate: (t, e) => {
      const n = [], r = (s, o = !1) => {
        s.forEach((i) => {
          const a = i._type === "Button";
          a && o && n.push({
            id: `nested-button-${i._id}`,
            message: "Button cannot be nested inside another button",
            severity: "error",
            blockId: i._id
          }), i.children && i.children.length > 0 && r(i.children, a);
        });
      };
      return r(e), n;
    }
  },
  {
    name: "no-nested-paragraphs",
    description: "Prevents paragraph elements from being nested inside other paragraph elements at any level",
    validate: (t, e) => {
      const n = [], r = (s, o = []) => {
        s.forEach((i) => {
          const a = i._type === "Paragraph";
          if (a && o.length > 0 && n.push({
            id: `nested-paragraph-${i._id}`,
            message: "Paragraph cannot be nested inside another paragraph",
            severity: "error",
            blockId: i._id
          }), i.children && i.children.length > 0) {
            const c = a ? [...o, i._id] : o;
            r(i.children, c);
          }
        });
      };
      return r(e), n;
    }
  },
  {
    name: "heading-structure",
    description: "Checks for proper heading hierarchy and warns about skipped levels",
    validate: (t, e) => {
      const n = [], r = [], s = (o, i = []) => {
        o.forEach((a) => {
          if (a._type === "Heading") {
            const c = a.tag || "h2", d = parseInt(c.replace("h", "")) || 2;
            r.push({ level: d, blockId: a._id, path: [...i, a._id] });
          }
          a.children && a.children.length > 0 && s(a.children, [...i, a._id]);
        });
      };
      s(e);
      for (let o = 1; o < r.length; o++) {
        const i = r[o], a = r[o - 1];
        i.level > a.level + 1 && n.push({
          id: `heading-level-skip-${i.blockId}`,
          message: `Heading level skipped: h${a.level} followed by h${i.level}. Consider using h${a.level + 1}`,
          severity: "warning",
          blockId: i.blockId
        });
      }
      return n;
    }
  }
], ph = [
  {
    name: "image-alt-text",
    description: "Warns if images are missing alt text",
    validate: (t, e) => {
      const n = [], r = (s) => {
        s.forEach((o) => {
          o._type === "Image" && !o.alt && n.push({
            id: `image-missing-alt-${o._id}`,
            message: "Image should have alt text for accessibility",
            severity: "warning",
            blockId: o._id
          }), o.children && o.children.length > 0 && r(o.children);
        });
      };
      return r(e), n;
    }
  },
  {
    name: "button-accessibility",
    description: "Ensures buttons have accessible labels",
    validate: (t, e) => {
      const n = [], r = (s) => {
        s.forEach((o) => {
          o._type === "Button" && (o.content || o.children && o.children.length > 0 || n.push({
            id: `button-no-label-${o._id}`,
            message: "Button should have accessible content (text or icon)",
            severity: "warning",
            blockId: o._id
          })), o.children && o.children.length > 0 && r(o.children);
        });
      };
      return r(e), n;
    }
  }
];
class fh {
  constructor() {
    Yt(this, "rules", [...uh]);
  }
  addRule(e) {
    this.rules.push(e);
  }
  removeRule(e) {
    const n = this.rules.findIndex((r) => r.name === e);
    return n > -1 ? (this.rules.splice(n, 1), !0) : !1;
  }
  getRules() {
    return [...this.rules];
  }
  enableAccessibilityRules() {
    this.rules.push(...ph);
  }
  getRuleNames() {
    return this.rules.map((e) => e.name);
  }
}
const Qo = new fh(), ai = (t = {}) => {
  const e = G("flags.validateStructure", !0), n = vt(Gn), r = vt(Qs), s = vt(ei), o = vt(ti), i = B(
    (c) => {
      const d = c;
      if (!e || !d || d.length === 0) return;
      const u = Zs(d), p = [];
      let f = Qo.getRules();
      t.enableAccessibilityRules && (Qo.enableAccessibilityRules(), f = Qo.getRules()), t.customRules && t.customRules.length > 0 && f.push(...t.customRules), f.forEach((y) => {
        try {
          const x = y.validate(d, u);
          p.push(...x);
        } catch (x) {
          console.error(`Error running structure rule "${y.name}":`, x);
        }
      });
      const h = p.filter((y) => y.severity === "error").length > 0, m = p.filter((y) => y.severity === "warning").length > 0, g = !h;
      n(p), r(g), s(h), o(m);
    },
    [
      e,
      t,
      n,
      r,
      s,
      o
    ]
  );
  return Nt(
    i,
    [
      e,
      t,
      n,
      r,
      s,
      o
    ],
    1e3
  );
}, hh = [
  "hover",
  "focus",
  "focus-within",
  "focus-visible",
  "active",
  "visited",
  "target",
  "first",
  "last",
  "only",
  "odd",
  "even",
  "first-of-type",
  "last-of-type",
  "only-of-type",
  "empty",
  "disabled",
  "checked",
  "indeterminate",
  "default",
  "required",
  "valid",
  "invalid",
  "in-range",
  "out-of-range",
  "placeholder-shown",
  "autofill",
  "read-only",
  "open",
  "before",
  "after",
  "first-letter",
  "first-line",
  "marker",
  "selection",
  "file",
  "placeholder",
  // preline
  "hs-collapse-open",
  "hs-accordion-active"
], ks = {
  bodyFont: "Arial",
  headingFont: "Arial",
  roundedCorners: 5,
  primaryColor: "#570df8",
  secondaryColor: "#f002b8",
  bodyBgDarkColor: "#031022",
  bodyBgLightColor: "#fcfcfc",
  bodyTextDarkColor: "#ffffff",
  bodyTextLightColor: "#000000"
}, mh = P(ks);
P(null);
const gh = () => {
  const [t, e] = D(mh);
  return [
    Os(t) ? { ...ks, ...t } : ks,
    e
  ];
}, bh = P(null), yh = () => ({ currentPage: Ue(bh) }), xh = Mu((t) => {
  const e = Pe(t), n = _(e, "schema.properties", {});
  return jn(
    Object.keys(n).map((r) => _(n[r], "builderProp", !1) || _(n[r], "runtime", !1) ? r : null)
  );
}), vh = () => {
  const [t] = gh(), { currentPage: e } = yh(), [n] = ue();
  return B(() => {
    const r = A(n, (s) => vr(s, xh(s._type)));
    return {
      currentPage: e,
      blocks: r
    };
  }, [t, e, n]);
}, Xl = P(!1), wh = () => D(Xl), gt = () => {
  const t = G("permissions", null);
  return { hasPermission: B(
    (n) => t ? t.includes(n) : !0,
    [t]
  ) };
}, ql = (t) => Z(
  t.map(
    (e) => e._type === "PartialBlock" || e._type === "GlobalBlock" ? _(e, "partialBlockId", _(e, "globalBlock", "")) : null
  ),
  Boolean
);
function Zl(t, e, n, r = /* @__PURE__ */ new Set()) {
  if (t === e) return !0;
  if (r.has(e)) return !1;
  r.add(e);
  const s = n[e] || [];
  for (const o of s)
    if (o === t || Zl(t, o, n, r)) return !0;
  return !1;
}
function Cs(t, e, n = /* @__PURE__ */ new Set()) {
  if (n.has(t)) return 0;
  n.add(t);
  const r = e[t] || [];
  return r.length === 0 ? 1 : 1 + Math.max(...r.map((s) => Cs(s, e, new Set(n))));
}
const Ql = () => {
  const [t, e] = $(!1), [n, r] = $(null), [s, o] = D(Xf), i = G("getPartialBlocks", async () => ({})), a = B(async () => {
    e(!0), r(null);
    try {
      const c = await i();
      o(c), e(!1);
    } catch (c) {
      r(c instanceof Error ? c.message : "Failed to fetch partial blocks"), e(!1);
    }
  }, [i, o]);
  return z(() => {
    a();
  }, []), { data: s, isLoading: t, refetch: a, error: n };
}, li = () => {
  const [t, e] = D(Ut), n = B(
    (s) => _(t, `${s}.blocks`, []),
    [t]
  ), r = B(() => e({}), [e]);
  return { getPartialBlocks: n, reset: r };
}, io = 4, kh = () => {
  const [t] = D(Ut);
  return M(() => {
    const e = {};
    return Object.entries(t).forEach(([n, r]) => {
      e[n] = r.dependencies;
    }), e;
  }, [t]);
}, ec = () => {
  const t = G("pageId", ""), e = kh();
  return B(
    (n) => {
      if (!t) return { canAdd: !0 };
      if (t === n)
        return { canAdd: !1, reason: "Cannot add a partial inside itself" };
      if (Zl(t, n, e))
        return { canAdd: !1, reason: "Adding this partial would create a circular reference" };
      const r = Cs(t, e), s = Cs(n, e);
      return Math.max(r, 1 + s) > io ? { canAdd: !1, reason: `Maximum nesting depth (${io} levels) would be exceeded` } : { canAdd: !0 };
    },
    [t, e]
  );
}, Ch = () => {
  const [t] = ue(), [e, n] = D(Ut), r = G("getPartialBlockBlocks", async (c) => []), s = ne(/* @__PURE__ */ new Set()), o = M(() => t.filter((c) => c._type === "PartialBlock" || c._type === "GlobalBlock").map((c) => _(c, "partialBlockId", _(c, "globalBlock", ""))).filter(Boolean), [t]), i = M(() => {
    const c = [];
    return Object.values(e).forEach((d) => {
      d.status === "loaded" && c.push(...d.dependencies);
    }), c;
  }, [e]), a = M(() => [.../* @__PURE__ */ new Set([...o, ...i])], [o, i]);
  z(() => {
    const c = a.filter((d) => {
      const u = e[d], p = s.current.has(d);
      return (!u || u.status === "idle") && !p;
    });
    c.length !== 0 && (c.forEach((d) => s.current.add(d)), n((d) => {
      const u = {};
      return c.forEach((p) => {
        u[p] = { blocks: [], dependencies: [], status: "loading" };
      }), { ...d, ...u };
    }), Promise.all(
      c.map(async (d) => {
        try {
          const u = await r(d), p = ql(u);
          n((f) => ({
            ...f,
            [d]: { blocks: u, dependencies: p, status: "loaded" }
          }));
        } catch (u) {
          n((p) => ({
            ...p,
            [d]: {
              blocks: [],
              dependencies: [],
              status: "error",
              error: u instanceof Error ? u.message : "Failed to fetch"
            }
          }));
        } finally {
          s.current.delete(d);
        }
      })
    ));
  }, [a, e, n, r]);
}, Io = P("SAVED");
Io.debugLabel = "builderSaveStateAtom";
const Nh = (t, e) => e ? t.some((n) => {
  if (!(n != null && n._type) || n._type === "PartialBlock")
    return !1;
  try {
    const r = Pe(n._type);
    return r ? (le(r, "i18nProps") ? r.i18nProps ?? [] : []).some((o) => {
      const i = `${o}-${e}`;
      return !n[i] || F(n[i]);
    }) : !1;
  } catch (r) {
    return console.warn(`Failed to get block definition for type: ${n._type}`, r), !1;
  }
}) : !1, _r = () => {
  const [t, e] = D(Io), n = G("onSave", async (S) => {
  }), r = G("onSaveStateChange", wt), s = vh(), { hasPermission: o } = gt(), { selectedLang: i, fallbackLang: a } = Je(), [c] = wh(), d = Ue(Ut), u = ai(), [, p] = D(Bo), f = () => {
    const S = s();
    return !i || i === a ? !1 : Nh(S.blocks || [], i);
  }, h = B(
    (S) => {
      const v = /* @__PURE__ */ new Set(), k = ql(S);
      for (; k.length > 0; ) {
        const T = k.shift();
        if (v.has(T)) continue;
        v.add(T);
        const C = d[T];
        (C == null ? void 0 : C.status) === "loaded" && C.dependencies.length > 0 && k.push(...C.dependencies);
      }
      return [...v];
    },
    [d]
  ), m = B((S) => {
    const v = JSON.stringify(S), k = /pageType:[^:]+:([a-f0-9-]{36})/gi, T = [];
    let C;
    for (; (C = k.exec(v)) !== null; )
      C[1] && T.push(C[1]);
    return jn([...new Set(T)]);
  }, []), g = B((S) => {
    const v = /dt#[^ "]+/g, k = {};
    for (const T of S) {
      const C = JSON.stringify(T);
      let N;
      for (; (N = v.exec(C)) !== null; )
        if (N[0]) {
          const E = N[0];
          k[E] || (k[E] = {}), k[E][T._id] = T._name || T._type;
        }
    }
    return k;
  }, []), y = B(
    (S) => !S && (!o("save_page") || !c) || !S && t === "SAVED",
    [o, c, t]
  );
  return { savePage: pn(
    async (S = !1, v = !1) => {
      if (y(v))
        return;
      const k = s();
      return k != null && k.blocks && u(k.blocks), e("SAVING"), r("SAVING"), p(0), await n({
        autoSave: S,
        blocks: k.blocks,
        needTranslations: f(),
        partialIds: h(k.blocks || []),
        linkPageIds: m(k.blocks || []),
        designTokens: g(k.blocks || [])
      }), setTimeout(() => {
        e("SAVED"), r("SAVED");
      }, 100), !0;
    },
    [
      y,
      s,
      e,
      p,
      n,
      r,
      c,
      u,
      h,
      m,
      g
    ],
    3e3
    // save only every 3 seconds
  ), savePageAsync: async (S = !1) => {
    if (y(S))
      return;
    e("SAVING"), r("SAVING");
    const v = s();
    return p(0), await n({
      autoSave: !0,
      blocks: v.blocks,
      needTranslations: f(),
      partialIds: h(v.blocks || []),
      linkPageIds: m(v.blocks || []),
      designTokens: g(v.blocks || [])
    }), setTimeout(() => {
      e("SAVED"), r("SAVED");
    }, 100), !0;
  }, saveState: t, setSaveState: e, needTranslations: f };
}, Sh = () => {
  const { savePage: t, saveState: e } = _r(), n = G("autoSave", !0), r = G("autoSaveActionsCount", 10), [s] = D(Bo);
  z(() => {
    n && (e === "SAVED" || e === "SAVING" || s >= r && t(!0));
  }, [n, t, e, s, r]);
}, Eh = () => {
  const [, t] = D(Bo), { setSaveState: e } = _r();
  return B(() => {
    t((n) => n + 1), e((n) => n !== "UNSAVED" ? "UNSAVED" : n);
  }, [t, e]);
};
function _h(t, e, n, r) {
  const s = [...e];
  let o = [...t];
  if (n) {
    const d = t.find((u) => u._id === n);
    if (d && d.content !== void 0 && d.content !== "" && !t.some((p) => p._parent === n)) {
      const f = {
        _id: fn(),
        _parent: n,
        _type: "Text",
        content: d.content
      };
      Object.keys(d).forEach((h) => {
        h.startsWith("content-") && (f[h] = d[h]);
      }), s.unshift(f), o = o.map((h) => {
        if (h._id === n) {
          const m = { ...h, content: "" };
          return Object.keys(m).forEach((g) => {
            g.startsWith("content-") && (m[g] = "");
          }), m;
        }
        return h;
      });
    }
  }
  let i = o.filter((d) => !d._parent);
  n && (i = o.filter((d) => d._parent === n));
  const a = r !== void 0 && !isNaN(r) && r > -1 ? Math.min(r, i.length) : i.length;
  let c = o.length;
  for (let d = 0, u = 0; d < o.length; d++)
    if (n !== void 0 ? o[d]._parent === n : !o[d]._parent) {
      if (u === a) {
        c = d;
        break;
      }
      u++;
    }
  return !n && r !== void 0 && r >= i.length && (c = o.length), [
    ...o.slice(0, c),
    ...s,
    ...o.slice(c)
  ];
}
function Ah(t) {
  return Zs(t);
}
function Th(t) {
  let e = [];
  return t.walk((n) => (delete n.model.children, e.push(n.model), !0)), e;
}
function ia(t, e) {
  return t.first((n) => n.model._id === e) || null;
}
function Bh(t, e, n, r) {
  var d, u;
  const s = ia(t, e), o = ia(t, n);
  if (!s || !o) return !1;
  o.children || (o.model.children = []);
  let i = (d = o == null ? void 0 : o.children) == null ? void 0 : d.findIndex((p) => p.model._id === e);
  s.drop(), i = Math.max(i, 0);
  const c = (((u = s == null ? void 0 : s.model) == null ? void 0 : u._parent) || "root") === n && i <= r ? r - 1 : r;
  try {
    o.addChildAtIndex(s, c);
  } catch (p) {
    return console.error("Error adding child to parent:", p), !1;
  }
  return !0;
}
function Ih(t, e) {
  if (!e || !e._parent) return t;
  const n = e._parent, r = t.find((o) => o._id === n);
  if (!r) return t;
  const s = t.filter((o) => o._parent === n);
  if (s.length === 2) {
    const o = s.find((i) => i._id !== e._id);
    if (o && o._type === "Text" && "content" in r)
      return t.map((a) => {
        if (a._id === n) {
          const c = { ...a, content: o.content };
          return Object.keys(o).forEach((d) => {
            d.startsWith("content-") && (c[d] = o[d]);
          }), c;
        }
        return a;
      }).filter((a) => a._id !== o._id);
  }
  return t;
}
function Rh(t, e, n) {
  if (!n || n === "root") return t;
  const r = t.find((s) => s._id === n);
  if (!r) return t;
  if (r.content !== void 0 && r.content !== "" && !t.some((o) => o._parent === n && o._id !== e._id)) {
    const i = {
      _id: fn(),
      _parent: n,
      _type: "Text",
      content: r.content
    };
    Object.keys(r).forEach((d) => {
      d.startsWith("content-") && (i[d] = r[d]);
    });
    const a = t.map((d) => {
      if (d._id === n) {
        const u = { ...d, content: "" };
        return Object.keys(u).forEach((p) => {
          p.startsWith("content-") && (u[p] = "");
        }), u;
      }
      return d;
    }), c = a.findIndex((d) => d._id === e._id);
    return c !== -1 ? [...a.slice(0, c), i, ...a.slice(c)] : [i, ...a];
  }
  return t;
}
function Lh(t, e, n, r) {
  if (!e) return t;
  const s = t.find((d) => d._id === e);
  if (!s) return t;
  let o = Ih(t, s);
  const i = n || "root", c = new of().parse({ _id: "root", children: Ah(o) });
  if (Bh(c, e, i, r)) {
    let d = Th(c);
    const u = d.find((p) => p._id === e);
    return u && (u._parent = i === "root" ? null : i), d.shift(), n && (d = Rh(d, s, n)), d;
  }
  return o;
}
const nr = new BroadcastChannel("chaibuilder"), tc = () => {
  const t = G("pageId", "chaibuilder_page");
  return { postMessage: Nt(
    (n) => nr.postMessage({ ...n, pageId: t }),
    [t],
    200
  ) };
}, Ph = () => {
  const [, t] = ue(), e = G("pageId", "chaibuilder_page"), { updateBlocksProps: n } = nc();
  z(() => (nr.onmessageerror = (r) => {
    console.log("error", r);
  }, nr.onmessage = (r) => {
    r.data.type === "blocks-updated" && r.data.pageId === e && t(r.data.blocks), r.data.type === "blocks-props-updated" && r.data.pageId === e && n(r.data.blocks);
  }, () => {
    nr.onmessage = null, nr.onmessageerror = null;
  }), [t, e]);
}, ci = (t, e) => {
  let n = [...t], r = [];
  e.forEach((a) => {
    const c = n.find((p) => p._id === a);
    if (!c || !c._parent) return;
    const d = c._parent, u = n.filter((p) => p._parent === d);
    if (u.length === 2) {
      const p = u.find((f) => f._id !== a);
      if (p && p._type === "Text") {
        const f = n.find((h) => h._id === d);
        f && "content" in f && (n = n.map((h) => {
          if (h._id === d) {
            const m = { ...h, content: p.content };
            return Object.keys(p).forEach((g) => {
              g.startsWith("content-") && (m[g] = p[g]);
            }), m;
          }
          return h;
        }), r.push(p._id));
      }
    }
  });
  const s = [...e, ...r], o = [], i = Z(n, (a) => Be(s, a._id) || Be(s, a._parent) ? (o.push(a._id), !1) : !0);
  return F(o) ? i : ci(i, o);
}, di = () => {
  const [t] = ue(), [e, n] = oe(), { setNewBlocks: r } = $e(), { hasPermission: s } = gt();
  return B(
    (o) => {
      var a;
      if (!s(Ie.DELETE_BLOCK)) return;
      const i = ((a = ee(t, { _id: o[0] })) == null ? void 0 : a._parent) || null;
      r(ci(t, o)), setTimeout(() => n(i ? [i] : []), 200);
    },
    [t, n, e, s]
  );
}, Oh = P(
  null,
  // it's a convention to pass `null` for the first argument
  (t, e, { id: n, props: r }) => {
    const s = t(Sr), o = ee(s, (i) => t(i)._id === n);
    return o ? e(o, { ...t(o), ...r }) : Dh(t, e, n, r);
  }
);
function Dh(t, e, n, r) {
  const s = t(Ut);
  for (const [o, i] of Object.entries(s))
    if (i.blocks.some((a) => a._id === n))
      return e(Ut, {
        ...s,
        [o]: {
          ...i,
          blocks: i.blocks.map((a) => a._id === n ? { ...a, ...r } : a)
        }
      }), null;
  return null;
}
const Mh = () => vt(Oh), oC = (t) => Cl(
  B(
    (e, n, r) => {
      const s = e(t);
      if (!s || !s.length)
        return null;
      const o = ee(
        s,
        (i) => e(i)._id === (Ct(r) ? r : e(r)._id)
      );
      return o ? e(o) : null;
    },
    [t]
  ),
  { store: Qe }
), $h = (t) => Cl(
  B(
    (e, n, r) => {
      const s = e(t);
      if (!s || !s.length)
        return console.warn("No blocks available in splitAtoms"), null;
      const o = ee(
        s,
        (i) => e(i)._id === (Ct(r) ? r : e(r)._id)
      );
      return o || (console.warn(`Block with id ${r} not found`), null);
    },
    [t]
  ),
  { store: Qe }
), nc = () => {
  const [, t] = ue(), { postMessage: e } = tc(), n = Mh(), r = ai(), s = Eh();
  return {
    setNewBlocks: (o) => {
      t(o), e({ type: "blocks-updated", blocks: o });
    },
    addBlocks: (o, i, a) => {
      t((c) => {
        const d = _h(c, o, i, a);
        return e({ type: "blocks-updated", blocks: d }), r(d), s(), d;
      });
    },
    removeBlocks: (o) => {
      t((i) => {
        const a = ci(i, o);
        return e({ type: "blocks-updated", blocks: a }), r(a), s(), a;
      });
    },
    moveBlocks: (o, i, a) => {
      t((c) => {
        let d = [...c];
        for (let u = 0; u < o.length; u++)
          d = Lh(d, o[u], i, a);
        return ht(o, (u) => {
          const p = ee(d, (f) => f._id === u);
          p && n({ id: u, props: { _parent: p._parent || null } });
        }), e({ type: "blocks-updated", blocks: d }), r(d), s(), d;
      });
    },
    updateBlocksProps: (o) => {
      o.forEach((i) => {
        const a = vr(i, "_id");
        n({ id: i._id, props: a });
      }), e({ type: "blocks-props-updated", blocks: o }), s();
    }
  };
}, ft = new sf();
ft.setLimit(50);
const Fh = P({
  canUndo: !1,
  canRedo: !1
}), Ar = () => {
  const [, t] = D(Io), [e, n] = D(Fh), r = G("onSaveStateChange", wt), s = B(() => {
    const d = {
      canUndo: ft.hasUndo(),
      canRedo: ft.hasRedo()
    };
    n(d), t("UNSAVED"), r("UNSAVED");
  }, [n, t, r]);
  z(() => (ft.setCallback(s), () => {
    ft.setCallback(wt);
  }), [s]);
  const o = B(
    (d) => {
      ft.add(d), s();
    },
    [s]
  ), i = B(() => {
    ft.undo(), s();
  }, [s]), a = B(() => {
    ft.redo(), s();
  }, [s]), c = B(() => {
    ft.clear(), n({
      canUndo: !1,
      canRedo: !1
    });
  }, [n]);
  return M(
    () => ({
      add: o,
      undo: i,
      redo: a,
      hasUndo: () => e.canUndo,
      hasRedo: () => e.canRedo,
      clear: c
    }),
    [o, i, a, e.canUndo, e.canRedo, c]
  );
}, aa = () => {
  const t = Qe.get(Ut);
  return [
    ...Qe.get(He),
    ...Object.values(t).flatMap((e) => e.blocks)
  ];
}, ue = () => D(He), $e = () => {
  const { add: t } = Ar(), {
    setNewBlocks: e,
    addBlocks: n,
    removeBlocks: r,
    moveBlocks: s,
    updateBlocksProps: o
  } = nc();
  return {
    moveBlocks: (h, m, g) => {
      const y = Qe.get(He), x = A(h, (S) => {
        const k = y.find((N) => N._id === S)._parent || null, C = y.filter((N) => k ? N._parent === k : !N._parent).map((N) => N._id).indexOf(S);
        return { _id: S, oldParent: k, oldPosition: C };
      }), w = x.find(({ _id: S }) => S === h[0]);
      w && w.oldParent === m && w.oldPosition === g || (s(h, m ?? null, g), t({
        undo: () => ht(x, ({ _id: S, oldParent: v, oldPosition: k }) => {
          s([S], v ?? null, k);
        }),
        redo: () => s(h, m ?? null, g)
      }));
    },
    addBlocks: (h, m, g) => {
      n(h, m, g), t({
        undo: () => r(A(h, "_id")),
        redo: () => n(h, m, g)
      });
    },
    removeBlocks: (h) => {
      var w;
      const m = Qe.get(He), g = (w = ye(h)) == null ? void 0 : w._parent, x = m.filter((S) => g ? S._parent === g : !S._parent).indexOf(ye(h));
      r(A(h, "_id")), t({
        undo: () => n(h, g ?? void 0, x),
        redo: () => r(A(h, "_id"))
      });
    },
    updateBlocks: (h, m, g) => {
      const y = aa();
      let x = [];
      if (g)
        x = A(h, (w) => ({ _id: w, ...g }));
      else {
        const w = kt(m);
        x = A(h, (S) => {
          const v = y.find((T) => T._id === S), k = { _id: S };
          return ht(w, (T) => k[T] = v == null ? void 0 : v[T]), k;
        });
      }
      o(A(h, (w) => ({ _id: w, ...m }))), t({
        undo: () => o(x),
        redo: () => o(A(h, (w) => ({ _id: w, ...m })))
      });
    },
    updateBlocksRuntime: (h, m) => {
      o(A(h, (g) => ({ _id: g, ...m })));
    },
    setNewBlocks: (h) => {
      const m = Qe.get(He);
      e(h), t({
        undo: () => e(m),
        redo: () => e(h)
      });
    },
    updateMultipleBlocksProps: (h) => {
      const m = aa();
      let g = [];
      g = A(h, (y) => {
        const x = kt(y), w = m.find((v) => v._id === y._id), S = {};
        return ht(x, (v) => S[v] = w == null ? void 0 : w[v]), S;
      }), o(h), t({
        undo: () => o(g),
        redo: () => o(h)
      });
    }
  };
}, zh = ({ block: t, children: e }) => {
  const { t: n } = K(), [r] = ue(), { hasPermission: s } = gt(), o = _(t, "_id"), i = _(t, "_parent"), a = Z(r, (p) => i ? _(p, "_parent") === i : !_(p, "_parent")), c = so(_(t, "_type", "")), d = ir(a, { _id: o }), u = (p) => {
    if (p === "CHILD")
      me.publish(se.OPEN_ADD_BLOCK, t);
    else {
      const f = { _id: i || "", position: a == null ? void 0 : a.length };
      p === "BEFORE" ? f.position = Math.max(d, 0) : p === "AFTER" && (f.position = d + 1), me.publish(se.OPEN_ADD_BLOCK, f);
    }
  };
  return s(Ie.ADD_BLOCK) ? /* @__PURE__ */ b(kn, { children: [
    /* @__PURE__ */ l(Cn, { children: e }),
    /* @__PURE__ */ b(Ft, { className: "border border-blue-500 bg-primary text-white shadow-2xl", children: [
      c && /* @__PURE__ */ l(Ee, { className: "cursor-pointer text-xs", onClick: () => u("CHILD"), children: n("Add inside") }),
      /* @__PURE__ */ l(Ee, { className: "cursor-pointer text-xs", onClick: () => u("BEFORE"), children: n("Add before") }),
      /* @__PURE__ */ l(Ee, { className: "cursor-pointer text-xs", onClick: () => u("AFTER"), children: n("Add after") })
    ] })
  ] }) : null;
}, Ro = P(null), Tr = P({
  isVisible: !1,
  isValid: !1,
  position: "inside",
  placeholderOrientation: "horizontal",
  isEmpty: !1,
  top: 0,
  left: 0,
  width: 0,
  height: 0
});
let Pn = !1;
const ui = (t) => {
  Pn = t;
}, pi = P(0), Hh = P(!1);
Hh.debugLabel = "readOnlyModeAtom";
const Vh = P("online");
Vh.debugLabel = "networkModeAtom";
P("");
const jh = P(!1);
jh.debugLabel = "editLayerNameAtom";
const Wh = P("");
Wh.debugLabel = "activeLanguageAtom";
const Gh = P("");
Gh.debugLabel = "primaryLanguageAtom";
const Lo = P(null);
Lo.debugLabel = "canvasIframeAtom";
const Uh = P("outline");
Uh.debugLabel = "activePanelAtom";
const rc = P("");
rc.debugLabel = "showPredefinedBlockCategoryAtom";
const Kh = P(!1);
Kh.debugLabel = "draggingFlagAtom";
const fi = P(null);
fi.debugLabel = "treeRefAtom";
const Jh = P({});
Jh.debugLabel = "canvasSettingsAtom";
const oc = P(!1);
oc.debugLabel = "aiAssistantActiveAtom";
const Yh = P(!1);
Yh.debugLabel = "codeEditorOpenAtom";
const Xh = Et("codeEditorHeight", 500);
Xh.debugLabel = "codeEditorHeightAtom";
const qh = P([]);
qh.debugLabel = "xShowBlocksAtom";
const hi = Et("_selectedLibrary", null);
hi.debugLabel = "selectedLibraryAtom";
const sc = P(!0);
sc.debugLabel = "dataBindingActiveAtom";
const Zh = Et("chai-builder-theme", Ks), Kn = () => D(Lo);
let he = null, Pt = null;
function Qh(t, e) {
  const n = t.getAttribute("data-block-name"), r = t.getAttribute("data-block-type"), s = n || r || "Container", o = e.createElement("div");
  return o.className = "chai-drag-parent-label", o.textContent = s, o.className = "absolute top-0 -left-0.5 -translate-x-0.5 -translate-y-full -mt-1 bg-green-500/95 text-white px-2 py-1 text-xs font-semibold font-sans leading-tight whitespace-nowrap shadow-lg z-[999999] pointer-events-none select-none", o;
}
function es() {
  Pt && Pt.parentNode && (Pt.parentNode.removeChild(Pt), Pt = null);
}
const mi = () => {
  const [t] = Kn(), e = M(
    () => {
      var s;
      return (t == null ? void 0 : t.contentDocument) || ((s = t == null ? void 0 : t.contentWindow) == null ? void 0 : s.document);
    },
    [t]
  ), n = B(
    (s) => {
      if (!e) return;
      let o = null;
      if (!s) {
        he && (he.style.outline = "", he.style.outlineOffset = "", he.style.backgroundColor = "", he.style.position = "", he = null), es();
        return;
      }
      typeof s != "string" ? o = s : o = e.querySelector(`[data-block-id="${s}"]`), !(o === he && Pt && Pt.parentNode) && (he && he !== o && (he.style.outline = "", he.style.outlineOffset = "", he.style.backgroundColor = "", he.style.position = ""), es(), o ? (o.style.outline = "2px dashed rgba(34, 197, 94, 1)", o.style.outlineOffset = "2px", o.style.backgroundColor = "rgba(34, 197, 94, 0.05)", window.getComputedStyle(o).position === "static" && (o.style.position = "relative"), Pt = Qh(o, e), o.appendChild(Pt), he = o) : he = null);
    },
    [e]
  ), r = B(() => {
    he && (he.style.outline = "", he.style.outlineOffset = "", he.style.backgroundColor = "", window.getComputedStyle(he).position === "relative" && he.style.position === "relative" && (he.style.position = ""), he = null), es();
  }, []);
  return {
    highlightParent: n,
    clearParentHighlight: r,
    lastDragHighlighted: he
  };
}, em = () => {
  const [, t] = D(Ro), [, e] = D(Tr), [n] = Kn(), { clearParentHighlight: r } = mi(), [s, o] = D(pi), i = n == null ? void 0 : n.contentDocument;
  return B(() => {
    t(null), e({
      isVisible: !1,
      isValid: !1,
      position: "inside",
      placeholderOrientation: "horizontal",
      isEmpty: !1,
      top: 0,
      left: 0,
      width: 0,
      height: 0
    }), tm(i), r(), i && i.querySelectorAll("[data-dragging]").forEach((c) => {
      c.removeAttribute("data-dragging");
    }), ui(!1), o(s + 1);
  }, [t, e, i, r, s, o]);
};
function tm(t) {
  if (!t) return;
  t.querySelectorAll("[data-drop-target]").forEach((n) => n.removeAttribute("data-drop-target"));
}
function mn(t, e = null) {
  const n = window.getComputedStyle(t), r = e ? window.getComputedStyle(e) : null, s = n.display, o = r ? r.display : null;
  if (s === "flex" || s === "inline-flex") {
    const i = n.flexDirection;
    return i === "column" || i === "column-reverse" ? "vertical" : "horizontal";
  } else if (s === "grid") {
    const i = n.gridAutoFlow, a = n.gridTemplateColumns;
    return i.includes("column") || a && a !== "none" && a !== "" && !a.includes("calc") && // Handle calc expressions
    a.split(" ").length <= 1 ? "vertical" : "horizontal";
  } else if (o === "inline-block" || o === "inline")
    return "horizontal";
  return "vertical";
}
const nm = [
  "Heading",
  "Text",
  "Image",
  "Paragraph",
  "Icon",
  "Input",
  "Radio",
  "Checkbox",
  "Select",
  "CustomHTML",
  "TextArea",
  "Divider",
  "Repeater",
  "Video"
];
function rm(t) {
  try {
    return nm.includes(t);
  } catch {
    return !1;
  }
}
const xt = {
  /** Minimum edge zone size in pixels */
  MIN_EDGE_ZONE: 10,
  /** Maximum edge zone size in pixels */
  MAX_EDGE_ZONE: 30,
  /** Percentage of element size to use for edge zones (0.2 = 20%) */
  EDGE_ZONE_PERCENTAGE: 0.2,
  /** Gap detection threshold - minimum space between elements to show gap placeholder */
  GAP_THRESHOLD: 8,
  /** Minimum element size (width/height) to enable dynamic edge zones */
  MIN_SIZE_FOR_EDGE_ZONES: 50,
  /** Distance from parent edge (in pixels) to trigger parent-level placement */
  PARENT_EDGE_PROXIMITY: 20
};
function la(t) {
  try {
    if (t < xt.MIN_SIZE_FOR_EDGE_ZONES)
      return 0;
    const e = t * xt.EDGE_ZONE_PERCENTAGE;
    return Math.max(xt.MIN_EDGE_ZONE, Math.min(xt.MAX_EDGE_ZONE, e));
  } catch {
    return xt.MIN_EDGE_ZONE;
  }
}
function Gt(t) {
  try {
    const e = [], n = t.children;
    for (let r = 0; r < n.length; r++) {
      const s = n[r];
      s.hasAttribute("data-block-id") && e.push(s);
    }
    return e;
  } catch {
    return [];
  }
}
function Jr(t) {
  try {
    return Gt(t).length > 0;
  } catch {
    return !1;
  }
}
function om(t, e, n, r) {
  try {
    const s = Gt(t);
    if (s.length < 2)
      return null;
    const o = lm(s, e, n, r);
    if (o) {
      const i = gi(s, o, r);
      i.sort((a, c) => {
        const d = a.getBoundingClientRect(), u = c.getBoundingClientRect();
        return r === "vertical" ? d.top - u.top : d.left - u.left;
      });
      for (let a = 0; a < i.length - 1; a++) {
        const c = i[a], d = i[a + 1], u = c.getBoundingClientRect(), p = d.getBoundingClientRect();
        if (r === "vertical") {
          const f = u.bottom, h = p.top, m = h - f, g = n >= f && n <= h, y = e >= Math.min(u.left, p.left) && e <= Math.max(u.right, p.right);
          if (g && y && m >= xt.GAP_THRESHOLD)
            return { before: c, after: d };
        } else {
          const f = u.right, h = p.left, m = h - f, g = e >= f && e <= h, y = n >= Math.min(u.top, p.top) && n <= Math.max(u.bottom, p.bottom);
          if (g && y && m >= xt.GAP_THRESHOLD)
            return { before: c, after: d };
        }
      }
    }
    for (let i = 0; i < s.length - 1; i++) {
      const a = s[i], c = s[i + 1], d = a.getBoundingClientRect(), u = c.getBoundingClientRect();
      if (r === "vertical") {
        const p = d.bottom, f = u.top, h = f - p, m = n >= p && n <= f, g = e >= Math.min(d.left, u.left) && e <= Math.max(d.right, u.right);
        if (m && g && h >= xt.GAP_THRESHOLD)
          return { before: a, after: c };
      } else {
        const p = d.right, f = u.left, h = f - p, m = e >= p && e <= f, g = n >= Math.min(d.top, u.top) && n <= Math.max(d.bottom, u.bottom);
        if (m && g && h >= xt.GAP_THRESHOLD)
          return { before: a, after: c };
      }
    }
    return null;
  } catch {
    return null;
  }
}
function sm(t, e, n, r) {
  try {
    const s = t.getBoundingClientRect(), o = xt.PARENT_EDGE_PROXIMITY;
    if (r === "vertical") {
      if (n <= s.top + o)
        return "start";
      if (n >= s.bottom - o)
        return "end";
    } else {
      if (e <= s.left + o)
        return "start";
      if (e >= s.right - o)
        return "end";
    }
    return null;
  } catch {
    return null;
  }
}
function im(t, e, n, r, s) {
  const o = t.getBoundingClientRect();
  if (s === "vertical") {
    const a = (n - o.top) / o.height, c = la(o.height), d = c / o.height;
    return r ? c > 0 && a < d ? {
      position: "before",
      confidence: 1 - a / d
    } : c > 0 && a > 1 - d ? {
      position: "after",
      confidence: (a - (1 - d)) / d
    } : {
      position: "inside",
      confidence: 1 - Math.abs(a - 0.5) * 2
      // Higher confidence at center
    } : a < 0.5 ? {
      position: "before",
      confidence: 1 - a * 2
      // Higher confidence closer to top
    } : {
      position: "after",
      confidence: (a - 0.5) * 2
      // Higher confidence closer to bottom
    };
  } else {
    const a = (e - o.left) / o.width, c = la(o.width), d = c / o.width;
    return r ? c > 0 && a < d ? {
      position: "before",
      confidence: 1 - a / d
    } : c > 0 && a > 1 - d ? {
      position: "after",
      confidence: (a - (1 - d)) / d
    } : {
      position: "inside",
      confidence: 1 - Math.abs(a - 0.5) * 2
    } : a < 0.5 ? {
      position: "before",
      confidence: 1 - a * 2
    } : {
      position: "after",
      confidence: (a - 0.5) * 2
    };
  }
}
function am(t, e, n, r, s) {
  var S, v, k, T;
  const o = t.getAttribute("data-block-id"), i = t.getAttribute("data-block-type") || "Box";
  if (!o)
    return null;
  let a = t.parentElement;
  for (; a && !a.hasAttribute("data-block-id"); )
    a = a.parentElement;
  const c = o === "canvas" ? o : a == null ? void 0 : a.getAttribute("data-block-id"), d = a ? mn(a) : "vertical", u = mn(t), p = rm(i), f = !p && mt(i, r), h = ((S = s.defaultView) == null ? void 0 : S.scrollY) || 0, m = ((v = s.defaultView) == null ? void 0 : v.scrollX) || 0;
  if (o === "canvas" && Jr(t)) {
    const C = Gt(t), N = C[C.length - 1];
    if (N) {
      const E = N.getBoundingClientRect(), I = t.getBoundingClientRect(), L = window.getComputedStyle(t), R = parseFloat(L.paddingLeft) || 0, V = parseFloat(L.paddingRight) || 0, J = I.width - R - V, q = I.left + m + R;
      return {
        position: "after",
        placeholderOrientation: "horizontal",
        rect: {
          top: E.bottom + h,
          left: q,
          width: J,
          height: 4
        },
        targetElement: N,
        targetBlockId: N.getAttribute("data-block-id"),
        targetParentId: "canvas",
        isEmpty: !1,
        confidence: 1
      };
    }
  }
  if (f && !p && Jr(t)) {
    const C = om(t, e, n, u);
    if (C) {
      const N = C.before.getBoundingClientRect(), E = C.after.getBoundingClientRect(), I = t.getBoundingClientRect(), L = window.getComputedStyle(t), R = parseFloat(L.paddingLeft) || 0, V = parseFloat(L.paddingRight) || 0, J = Gt(t), q = gi(J, C.before, u);
      let ve = 0;
      if (q.forEach((we) => {
        const fe = we.getBoundingClientRect();
        fe.height > ve && (ve = fe.height);
      }), u === "vertical") {
        const we = I.width - R - V, fe = I.left + m + R;
        return {
          position: "after",
          placeholderOrientation: "horizontal",
          rect: {
            top: N.bottom + h,
            left: fe,
            width: we,
            height: 4
          },
          targetElement: C.before,
          targetBlockId: C.before.getAttribute("data-block-id"),
          targetParentId: o,
          isGapZone: !0,
          confidence: 1
          // High confidence for gap zones
        };
      } else {
        const we = N.top + h, fe = ve > 0 ? ve : Math.max(N.height, E.height);
        return {
          position: "after",
          placeholderOrientation: "vertical",
          rect: {
            top: we,
            left: N.right + m,
            width: 4,
            height: fe
          },
          targetElement: C.before,
          targetBlockId: C.before.getAttribute("data-block-id"),
          targetParentId: o,
          isGapZone: !0,
          confidence: 1
        };
      }
    }
  }
  if (a && c) {
    const C = sm(a, e, n, d);
    if (C) {
      const N = a.getBoundingClientRect(), E = window.getComputedStyle(a), I = parseFloat(E.paddingLeft) || 0, L = parseFloat(E.paddingRight) || 0, R = parseFloat(E.paddingTop) || 0, V = parseFloat(E.paddingBottom) || 0, J = ((k = s.defaultView) == null ? void 0 : k.scrollY) || 0, q = ((T = s.defaultView) == null ? void 0 : T.scrollX) || 0, ve = d === "vertical" ? "horizontal" : "vertical", we = ic(a);
      if (C === "start") {
        const fe = Gt(a)[0];
        if (fe) {
          const ze = fe.getBoundingClientRect();
          if (d === "vertical") {
            const Y = N.width - I - L, Te = N.left + q + I;
            return {
              position: "before",
              placeholderOrientation: ve,
              rect: {
                top: ze.top + J - 2,
                left: Te,
                width: Y,
                height: 4
              },
              targetElement: fe,
              targetBlockId: fe.getAttribute("data-block-id"),
              targetParentId: c,
              confidence: 0.9
            };
          } else {
            const Y = N.top + J + R, Te = we.maxHeight > 0 ? we.maxHeight : N.height - R - V;
            return {
              position: "before",
              placeholderOrientation: ve,
              rect: {
                top: Y,
                left: ze.left + q - 2,
                width: 4,
                height: Te
              },
              targetElement: fe,
              targetBlockId: fe.getAttribute("data-block-id"),
              targetParentId: c,
              confidence: 0.9
            };
          }
        }
      } else {
        const fe = Gt(a), ze = fe[fe.length - 1];
        if (ze) {
          const Y = ze.getBoundingClientRect();
          if (d === "vertical") {
            const Te = N.width - I - L, ut = N.left + q + I;
            return {
              position: "after",
              placeholderOrientation: ve,
              rect: {
                top: Y.bottom + J - 2,
                left: ut,
                width: Te,
                height: 4
              },
              targetElement: ze,
              targetBlockId: ze.getAttribute("data-block-id"),
              targetParentId: c,
              confidence: 0.9
            };
          } else {
            const Te = N.top + J + R, ut = we.maxHeight > 0 ? we.maxHeight : N.height - R - V;
            return {
              position: "after",
              placeholderOrientation: ve,
              rect: {
                top: Te,
                left: Y.right + q - 2,
                width: 4,
                height: ut
              },
              targetElement: ze,
              targetBlockId: ze.getAttribute("data-block-id"),
              targetParentId: c,
              confidence: 0.9
            };
          }
        }
      }
    }
  }
  let g = im(t, e, n, f, d);
  if (p && g.position === "inside") {
    const C = t.getBoundingClientRect();
    d === "vertical" ? g = {
      position: (n - C.top) / C.height < 0.5 ? "before" : "after",
      confidence: g.confidence
    } : g = {
      position: (e - C.left) / C.width < 0.5 ? "before" : "after",
      confidence: g.confidence
    };
  }
  let y;
  g.position === "inside" ? y = u === "vertical" ? "horizontal" : "vertical" : y = d === "vertical" ? "horizontal" : "vertical";
  const x = cm(
    t,
    a,
    g.position,
    y,
    s
  ), w = g.position === "inside" ? o : c;
  return {
    position: g.position,
    placeholderOrientation: y,
    rect: x,
    targetElement: t,
    targetBlockId: o,
    targetParentId: w ?? "",
    isEmpty: g.position === "inside" && !Jr(t),
    confidence: g.confidence
  };
}
function lm(t, e, n, r) {
  if (t.length === 0) return null;
  const s = t.filter((a) => {
    const c = a.getBoundingClientRect();
    return r === "vertical" ? n >= c.top && n <= c.bottom : e >= c.left && e <= c.right;
  });
  if (s.length === 0) {
    const a = /* @__PURE__ */ new Map();
    t.forEach((u) => {
      const p = u.getBoundingClientRect(), f = Math.round(r === "vertical" ? p.top : p.left);
      a.has(f) || a.set(f, []), a.get(f).push(u);
    });
    let c = null, d = 1 / 0;
    a.forEach((u, p) => {
      const f = Math.abs(r === "vertical" ? n - p : e - p);
      f < d && (d = f, c = u);
    }), c && s.push(c);
  }
  if (s.length === 0) return null;
  let o = s[0], i = 1 / 0;
  return s.forEach((a) => {
    const c = a.getBoundingClientRect(), d = c.left + c.width / 2, u = c.top + c.height / 2, p = Math.sqrt(Math.pow(e - d, 2) + Math.pow(n - u, 2));
    p < i && (i = p, o = a);
  }), o;
}
function ic(t) {
  const e = Gt(t);
  if (e.length === 0)
    return { maxWidth: 0, maxHeight: 0 };
  let n = 0, r = 0;
  return e.forEach((s) => {
    const o = s.getBoundingClientRect();
    o.width > n && (n = o.width), o.height > r && (r = o.height);
  }), { maxWidth: n, maxHeight: r };
}
function gi(t, e, n) {
  const r = e.getBoundingClientRect(), s = 5;
  return t.filter((o) => {
    const i = o.getBoundingClientRect();
    return n === "vertical" ? Math.abs(i.top - r.top) <= s : Math.abs(i.left - r.left) <= s;
  });
}
function cm(t, e, n, r, s) {
  var R, V;
  const o = t.getBoundingClientRect(), i = window.getComputedStyle(t), a = ((R = s.defaultView) == null ? void 0 : R.scrollY) || 0, c = ((V = s.defaultView) == null ? void 0 : V.scrollX) || 0, d = parseFloat(i.marginTop) || 0, u = parseFloat(i.marginBottom) || 0, p = parseFloat(i.marginLeft) || 0, f = parseFloat(i.marginRight) || 0, h = parseFloat(i.paddingTop) || 0, m = parseFloat(i.paddingBottom) || 0, g = parseFloat(i.paddingLeft) || 0, y = parseFloat(i.paddingRight) || 0, x = e == null ? void 0 : e.getBoundingClientRect(), w = e && parseFloat(window.getComputedStyle(e).paddingLeft) || 0, S = e && parseFloat(window.getComputedStyle(e).paddingRight) || 0, v = e && parseFloat(window.getComputedStyle(e).paddingTop) || 0, k = e && parseFloat(window.getComputedStyle(e).paddingBottom) || 0, T = e ? ic(e) : { maxHeight: 0 }, C = e ? mn(e) : "vertical", N = e ? Gt(e) : [], E = gi(N, t, C);
  let I = 0, L = 0;
  if (E.forEach((J) => {
    const q = J.getBoundingClientRect();
    q.height > I && (I = q.height), q.width > L && (L = q.width);
  }), n === "before")
    if (r === "horizontal") {
      const J = x ? x.width - w - S : o.width, q = x ? x.left + c + w : o.left + c;
      return {
        top: o.top + a - d - 2,
        left: q,
        width: J,
        height: 4
      };
    } else {
      const J = o.top + a, q = C === "horizontal" && I > 0 ? I : T.maxHeight > 0 ? T.maxHeight : x ? x.height - v - k : o.height;
      return {
        top: J,
        left: o.left + c - p - 2,
        width: 4,
        height: q
      };
    }
  else if (n === "after")
    if (r === "horizontal") {
      const J = x ? x.width - w - S : o.width, q = x ? x.left + c + w : o.left + c;
      return {
        top: o.bottom + a + u - 2,
        left: q,
        width: J,
        height: 4
      };
    } else {
      const J = o.top + a, q = C === "horizontal" && I > 0 ? I : T.maxHeight > 0 ? T.maxHeight : x ? x.height - v - k : o.height;
      return {
        top: J,
        left: o.right + c + f - 2,
        width: 4,
        height: q
      };
    }
  else
    return Jr(t) ? mn(t) === "vertical" ? {
      top: o.bottom + a - m - 2,
      left: o.left + c + g,
      width: o.width - g - y,
      height: 4
    } : {
      top: o.top + a + h,
      left: o.right + c - y - 2,
      width: 4,
      height: o.height - h - m
    } : {
      top: o.top + a + h,
      left: o.left + c + g,
      width: o.width - g - y,
      height: Math.max(o.height - h - m, 20)
    };
}
const dm = 100, Nn = () => {
  const [t] = ue(), [, e] = oe(), { addBlocks: n } = $e(), r = B(
    (o, i, a) => {
      for (let f = 0; f < o.length; f++) {
        const { _id: h } = o[f];
        o[f]._id = fn();
        const m = Z(o, { _parent: h });
        for (let g = 0; g < m.length; g++)
          m[g]._parent = o[f]._id;
      }
      const c = ye(o);
      let d, u;
      return i && (d = ee(t, { _id: i }), o[0]._parent = i, vo(o, (f) => {
        f != null && f._parent || (f._parent = i);
      }), u = i), !(d ? mt(d == null ? void 0 : d._type, c._type) : !0) && d && (o[0]._parent = d._parent, u = d._parent), n(o, u ?? void 0, a), e([c._id]), c;
    },
    [n, t, e]
  );
  return { addCoreBlock: B(
    (o, i, a) => {
      if (le(o, "blocks")) {
        const g = o.blocks;
        return r(g, i ?? void 0, a);
      }
      const c = fn(), d = Ws(o.type), u = {
        _type: o.type,
        _id: c,
        ...d,
        ...le(o, "_name") && { _name: o._name },
        ...le(o, "partialBlockId") && { partialBlockId: o.partialBlockId }
      };
      let p, f;
      return i && (p = ee(t, { _id: i }), u._parent = i, f = i), !mt(p == null ? void 0 : p._type, u._type) && p && (u._parent = p._parent, f = p._parent), n([u], f ?? void 0, a), setTimeout(() => e([u._id]), dm), u;
    },
    [n, r, t, e]
  ), addPredefinedBlock: r };
};
let It = null;
const At = () => {
  const [t] = D(Lo), e = M(() => {
    var s;
    return (t == null ? void 0 : t.contentDocument) || ((s = t == null ? void 0 : t.contentWindow) == null ? void 0 : s.document);
  }, [t]), n = B(
    (s) => {
      if (e)
        if (It && It.removeAttribute("data-highlighted"), typeof s != "string")
          s.setAttribute("data-highlighted", "true"), It = s;
        else if (typeof s == "string") {
          const o = e.querySelector(`[data-block-id="${s}"]`);
          o && (o.setAttribute("data-highlighted", "true"), It = o);
        } else
          It = null;
    },
    [e]
  ), r = B(() => {
    It && (It.removeAttribute("data-highlighted"), It = null);
  }, []);
  return { highlightBlock: n, clearHighlight: r, lastHighlighted: It };
}, Br = P([]);
Br.debugLabel = "selectedStylingBlocksAtom";
const Fe = () => D(Br), um = () => {
  const [t, e] = D(Ro), [n, r] = D(Tr), [s] = ue(), [o] = Kn(), { addCoreBlock: i } = Nn(), { moveBlocks: a } = $e(), [, c] = oe(), [, d] = Fe(), { clearHighlight: u } = At(), { clearParentHighlight: p } = mi(), [f, h] = D(pi), m = _t(), g = ec(), y = o == null ? void 0 : o.contentDocument;
  return B(
    (x) => {
      if (x.preventDefault(), x.stopPropagation(), ui(!1), fm(y), ca(y), p(), r({
        isVisible: !1,
        isValid: !1,
        position: "inside",
        placeholderOrientation: "horizontal",
        isEmpty: !1,
        top: 0,
        left: 0,
        width: 0,
        height: 0
      }), setTimeout(() => {
        p(), ca(y), r({
          isVisible: !1,
          isValid: !1,
          position: "inside",
          placeholderOrientation: "horizontal",
          isEmpty: !1,
          top: 0,
          left: 0,
          width: 0,
          height: 0
        });
      }, 50), !t)
        return;
      if (!n.isValid || !n.targetBlockId) {
        p();
        return;
      }
      e(null);
      const w = n.targetBlockId, S = n.targetParentId;
      if (!w)
        return;
      const { parentId: v, index: k, replaceImageUrl: T } = pm(
        s,
        w,
        S,
        n.position,
        t
      ), C = t._id !== void 0;
      if (T && ac(t)) {
        m([w], { image: _(t, "blocks.0.image") }), setTimeout(() => {
          h(f + 1);
        }, 50);
        return;
      }
      if (C)
        a([t._id], v === null ? void 0 : v, k), u(), d([]), c([t._id]);
      else {
        const N = t._type || t.type, E = t != null && t.blocks ? Zt(t == null ? void 0 : t.blocks) ? Eo(t == null ? void 0 : t.blocks()) : t == null ? void 0 : t.blocks : null;
        if (N === "PartialBlock") {
          const I = t.partialBlockId || "", { canAdd: L, reason: R } = g(I);
          if (!L) {
            Ce.error(R || "Cannot add this partial block");
            return;
          }
          i(
            {
              blocks: [{ _type: N, _id: "partial-block", partialBlockId: t.partialBlockId }]
            },
            v,
            k
          );
        } else
          i(
            (E == null ? void 0 : E.length) > 0 ? { blocks: [...E] } : { type: N },
            v,
            k
          );
      }
      setTimeout(() => {
        h(f + 1);
      }, 50);
    },
    [
      t,
      n,
      s,
      y,
      i,
      a,
      e,
      r,
      p,
      u,
      c,
      d,
      f,
      h,
      m,
      g
    ]
  );
}, ac = (t) => {
  var o, i;
  const e = le(t, "blocks"), n = t == null ? void 0 : t.blocks, r = (n == null ? void 0 : n.length) === 1 && ((o = n == null ? void 0 : n[0]) == null ? void 0 : o._type) === "Image", s = !((i = n == null ? void 0 : n[0]) != null && i._id);
  return e && r && s;
};
function pm(t, e, n, r, s) {
  var o, i;
  try {
    if (e === n && ((o = s == null ? void 0 : s.blocks) == null ? void 0 : o.length) === 1 && _(s, "blocks.0._type") === "Image" && ((i = ee(t, { _id: e })) == null ? void 0 : i._type) === "Image")
      return { parentId: "", index: -1, replaceImageUrl: !0 };
    if (e === "canvas" || r === "inside" && e === "canvas")
      return {
        parentId: null,
        // null for root/canvas
        index: Z(t, (h) => !(h != null && h._parent)).length
      };
    if (r === "inside") {
      const f = Z(t, { _parent: e });
      return {
        parentId: e,
        index: f.length
      };
    }
    const a = !n || n === "canvas", c = a ? void 0 : n, d = Z(t, (f) => a ? !(f != null && f._parent) : (f == null ? void 0 : f._parent) === c), u = d.findIndex((f) => f._id === e);
    if (u === -1)
      return {
        parentId: a ? null : n,
        index: d.length
      };
    const p = r === "before" ? u : u + 1;
    return {
      parentId: a ? null : n,
      index: p
    };
  } catch {
    return {
      parentId: null,
      index: Z(t, (c) => !(c != null && c._parent)).length
    };
  }
}
function ca(t) {
  if (!t) return;
  t.querySelectorAll("[data-drop-target]").forEach((n) => n.removeAttribute("data-drop-target"));
}
function fm(t) {
  if (!t) return;
  t.querySelectorAll("[data-dragging]").forEach((n) => {
    n.removeAttribute("data-dragging");
  });
}
function lc(t, e, n) {
  if (!t || !e) return !1;
  if (t === e) return !0;
  const r = n.find((o) => o._id === t);
  if (!r) return !1;
  let s = r;
  for (; s._parent; ) {
    if (s._parent === e)
      return !0;
    const o = n.find((i) => i._id === s._parent);
    if (!o) break;
    s = o;
  }
  return !1;
}
function cc(t, e, n) {
  return !t || !e ? !0 : !lc(e, t, n);
}
function hm(t, e, n) {
  if (!t) return !0;
  const r = n.find((o) => o._id === e);
  if (!r) return !0;
  const s = r._parent;
  return cc(t, s, n);
}
const mm = [
  "Heading",
  "Text",
  "Image",
  "Paragraph",
  "Icon",
  "Input",
  "Radio",
  "Checkbox",
  "Select",
  "CustomHTML",
  "TextArea",
  "Divider",
  "Repeater",
  "Video"
], Vt = {
  /** Edge zone size in pixels where auto-scroll triggers */
  EDGE_ZONE: 50,
  /** Maximum scroll speed in pixels per frame */
  MAX_SCROLL_SPEED: 10,
  /** Minimum scroll speed in pixels per frame */
  MIN_SCROLL_SPEED: 10
}, gm = () => {
  const [t] = D(Ro), [e] = Kn(), [, n] = D(Tr), { clearParentHighlight: r, highlightParent: s } = mi(), [o] = ue(), i = e == null ? void 0 : e.contentDocument, a = ne(null), c = ne(0), d = B(
    (p) => {
      if (!(i != null && i.defaultView)) return;
      const f = i.defaultView, h = f.innerHeight, m = f.scrollY, g = i.documentElement.scrollHeight;
      c.current = p;
      const y = p, x = h - p;
      let w = !1, S = null, v = 0;
      if (y < Vt.EDGE_ZONE && m > 0 ? (w = !0, S = "up", v = y) : x < Vt.EDGE_ZONE && m + h < g && (w = !0, S = "down", v = x), !w && a.current !== null) {
        cancelAnimationFrame(a.current), a.current = null;
        return;
      }
      if (w && S) {
        const k = 1 - v / Vt.EDGE_ZONE, T = Vt.MIN_SCROLL_SPEED + (Vt.MAX_SCROLL_SPEED - Vt.MIN_SCROLL_SPEED) * k, C = () => {
          if (!Pn || !f) {
            a.current = null;
            return;
          }
          const N = S === "up" ? -T : T;
          f.scrollBy(0, N);
          const E = f.scrollY, I = E > 0, L = E + h < g, R = c.current, V = h - c.current;
          S === "up" && I && R < Vt.EDGE_ZONE || S === "down" && L && V < Vt.EDGE_ZONE ? a.current = requestAnimationFrame(C) : a.current = null;
        };
        a.current === null && (a.current = requestAnimationFrame(C));
      }
    },
    [i]
  );
  z(() => () => {
    a.current !== null && (cancelAnimationFrame(a.current), a.current = null);
  }, []), z(() => {
    !Pn && a.current !== null && (cancelAnimationFrame(a.current), a.current = null);
  }, [Pn]);
  const u = B(
    $u((p) => {
      if (!Pn || !t)
        return;
      r();
      const f = bm(p), { element: h, targetBlockId: m, targetParentId: g } = f;
      if (!h || !m)
        return;
      const y = t._id;
      if (y && (m === y || lc(m, y, o)))
        return;
      const x = t._type || t.type;
      if (!x)
        return;
      const w = p.clientX, S = p.clientY;
      if (d(S), !i) return;
      const v = am(h, w, S, x, i);
      if (!v)
        return;
      const k = h.getAttribute("data-block-type") || "Box";
      let T = !1;
      const C = mm.includes(k);
      if (k === "Image" && x === "Image" && ac(t)) {
        s(m), n({
          isVisible: !0,
          isValid: !0,
          position: v.position,
          placeholderOrientation: v.placeholderOrientation,
          isEmpty: !0,
          top: h.offsetTop,
          left: v.rect.left,
          width: h.clientWidth,
          height: h.clientHeight,
          targetBlockId: v.targetBlockId,
          targetParentId: v.targetBlockId
        });
        return;
      }
      if (v.position === "inside") {
        if (C || y && !cc(y, m, o))
          return;
        T = mt(k, x);
      } else {
        let E = h.parentElement, I = "Box";
        for (; E && !E.hasAttribute("data-block-id"); )
          E = E.parentElement;
        if (E && (I = E.getAttribute("data-block-type") || "Box"), y && !hm(y, m, o))
          return;
        T = mt(I, x);
      }
      if (!T)
        return;
      s(v.targetParentId);
      const N = v.targetParentId || g || void 0;
      n({
        isVisible: !0,
        isValid: !0,
        position: v.position,
        placeholderOrientation: v.placeholderOrientation,
        isEmpty: v.isEmpty ?? !1,
        top: v.rect.top,
        left: v.rect.left,
        width: v.rect.width,
        height: v.rect.height,
        targetBlockId: v.targetBlockId,
        targetParentId: N
      }), ym(i), v.targetElement.setAttribute("data-drop-target", "true");
    }, 300),
    [i, t, n, r, s, o, d]
  );
  return B(
    (p) => {
      p.preventDefault(), p.stopPropagation(), u(p);
    },
    [u]
  );
};
function bm(t) {
  let e = t.target;
  for (; e && !e.hasAttribute("data-block-id"); )
    e = e.parentElement;
  if (!e)
    return {
      element: null,
      targetBlockId: null,
      targetBlockType: null,
      targetParentId: null,
      targetParentType: null,
      orientation: "vertical"
    };
  const n = e.getAttribute("data-block-id"), r = e.getAttribute("data-block-type") || "Box";
  let s = e.parentElement;
  for (; s && !s.hasAttribute("data-block-id"); )
    s = s.parentElement;
  const o = (s == null ? void 0 : s.getAttribute("data-block-id")) || null, i = (s == null ? void 0 : s.getAttribute("data-block-type")) || "Box", a = mn(e);
  return {
    element: e,
    targetBlockId: n,
    targetBlockType: r,
    targetParentId: o,
    targetParentType: i,
    orientation: a
  };
}
function ym(t) {
  if (!t) return;
  t.querySelectorAll("[data-drop-target]").forEach((n) => n.removeAttribute("data-drop-target"));
}
function xm(t) {
  var o;
  const e = document.createElement("div");
  e.className = "absolute -top-[1000px] -left-[1000px] pl-3 pr-1 py-1 bg-white/60 border border-blue-400/30 rounded shadow-md flex items-center gap-1.5 font-sans pointer-events-none z-[9999] scale-90";
  const n = t.type || t._type || "Box", r = document.createElement("div");
  r.className = "w-3 h-3 flex items-center justify-center text-blue-600";
  try {
    n === "Image" ? r.innerHTML = '<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 0.72 0.72"><path d="M.57.12H.15a.09.09 0 0 0-.09.09v.3A.09.09 0 0 0 .15.6h.42A.09.09 0 0 0 .66.51v-.3A.09.09 0 0 0 .57.12M.15.54A.03.03 0 0 1 .12.51V.437L.219.338a.03.03 0 0 1 .042 0L.462.54ZM.6.51a.03.03 0 0 1-.03.03H.547L.433.425.459.399a.03.03 0 0 1 .042 0L.6.498Zm0-.097L.544.357a.09.09 0 0 0-.127 0L.391.383.305.297a.09.09 0 0 0-.127 0L.12.353V.21A.03.03 0 0 1 .15.18h.42A.03.03 0 0 1 .6.21Z"/></svg>' : r.innerHTML = ((o = document.querySelector(`[data-add-core-block-icon="${n}"]`)) == null ? void 0 : o.outerHTML) || '<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/></svg>';
  } catch {
    r.textContent = "";
  }
  const s = document.createElement("span");
  return s.className = "text-[10px] font-medium text-blue-600 whitespace-nowrap", s.textContent = t.label || t.type || t._name || t._type || "Block", e.appendChild(r), e.appendChild(s), document.body.appendChild(e), e;
}
function da(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
const vm = () => {
  const [, t] = oe(), [, e] = Fe(), { clearHighlight: n } = At(), [, r] = D(Ro), [, s] = D(Tr), o = ne(null);
  return B(
    (i, a, c = !0) => {
      var u;
      o.current && (da(o.current), o.current = null);
      const d = c ? dn(a, ["type", "blocks", "partialBlockId"]) : a;
      if (r(d), i.dataTransfer.setData("text/plain", JSON.stringify({ block: d })), i.dataTransfer.effectAllowed = "move", !c && a._id) {
        const p = (u = document.getElementById("canvas-iframe")) == null ? void 0 : u.contentDocument;
        if (p) {
          const f = p.querySelector(`[data-block-id="${a._id}"]`);
          f && setTimeout(() => {
            if (f) {
              const m = f.getBoundingClientRect().height;
              mn(f == null ? void 0 : f.parentElement) === "vertical" && m > 200 && (f.style.height = "max-content", f.style.maxHeight = "max-content", f.style.minHeight = "0", f.style.overflow = "hidden", f.innerHTML = "<div class='flex items-center justify-center w-full h-full outline-[1px] outline-dashed font-medium outline-gray-500 bg-gray-500/10 py-4 text-transparent'>-</div>", f.style.opacity = "0.4"), f.style.opacity = "0.4", f.setAttribute("data-dragging", "true");
            }
          }, 0);
        }
      }
      if (a != null && a._type || a != null && a.type) {
        const p = xm(a);
        o.current = p, i.dataTransfer.setDragImage(p, 0, 0), setTimeout(() => {
          o.current && (da(o.current), o.current = null);
        }, 50);
      }
      t([]), n(), e([]), me.publish(se.CLOSE_ADD_BLOCK), ui(!0), s({
        isVisible: !0,
        isValid: !0,
        position: "inside",
        placeholderOrientation: "horizontal",
        isEmpty: !0,
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        targetBlockId: "canvas",
        targetParentId: void 0
      });
    },
    [t, n, r, s]
  );
}, Jn = () => {
  const t = vm(), e = gm(), n = um(), r = em();
  return {
    onDragStart: t,
    onDragOver: e,
    onDrop: n,
    onDragEnd: r,
    isDragging: Pn
  };
}, wm = () => {
  const [t] = D(Tr);
  return t;
}, bt = () => {
  const { dragAndDrop: t } = G("flags", { dragAndDrop: !0 });
  return t;
};
let dc, uc;
typeof document < "u" && (dc = document);
typeof window < "u" && (uc = window);
const pc = te.createContext({ document: dc, window: uc }), yt = () => te.useContext(pc), { Provider: km, Consumer: sC } = pc, Cm = [
  { ControlIcon: lp, dir: "VERTICAL", key: "UP" },
  { ControlIcon: cp, dir: "VERTICAL", key: "DOWN" },
  { ControlIcon: dp, dir: "HORIZONTAL", key: "LEFT" },
  { ControlIcon: up, dir: "HORIZONTAL", key: "RIGHT" }
], Nm = (t, e, n) => {
  try {
    if (!t || !n) return "VERTICAL";
    const r = `[data-block-id='${t}']`, s = n == null ? void 0 : n.querySelector(r);
    if (s) {
      const o = n == null ? void 0 : n.querySelector(`[data-block-id='${e}']`);
      return mn(s, o).toUpperCase();
    }
    return "VERTICAL";
  } catch {
    return "VERTICAL";
  }
}, fc = (t, e, n) => !!(t && (n === "UP" || n === "LEFT") || e && (n === "DOWN" || n === "RIGHT")), Sm = (t, e) => {
  const [n] = ue(), { document: r } = yt(), { moveBlocks: s } = $e(), o = _(t, "_id"), i = _(t, "_parent"), a = Z(n, (m) => i ? _(m, "_parent") === i : !_(m, "_parent")), c = (a == null ? void 0 : a.length) <= 1, d = ir(a, { _id: o }), u = d <= 0, p = d + 1 === (a == null ? void 0 : a.length), f = Nm(i, o, r), h = B(
    (m) => {
      fc(u, p, m) || c || (m === "UP" || m === "LEFT" ? s([o], i || void 0, d - 1) : (m === "DOWN" || m === "RIGHT") && s([o], i || void 0, d + 2), e());
    },
    [u, p, c, d, o, i, e]
  );
  return Rt(
    "shift+up, shift+down, shift+left, shift+right",
    ({ key: m }) => {
      var g;
      h((g = m == null ? void 0 : m.replace("Arrow", "")) == null ? void 0 : g.toUpperCase());
    },
    { document: r },
    [h]
  ), { isOnlyChild: c, isFirstBlock: u, isLastBlock: p, moveBlock: h, orientation: f };
}, Em = ({ block: t, updateFloatingBar: e }) => {
  const { isOnlyChild: n, isFirstBlock: r, isLastBlock: s, moveBlock: o, orientation: i } = Sm(
    t,
    e
  );
  return n ? null : /* @__PURE__ */ l(Q, { children: Cm.map(({ ControlIcon: a, dir: c, key: d }) => i !== c || fc(r, s, d) ? null : /* @__PURE__ */ l(
    a,
    {
      onClick: () => o(d),
      className: "rounded p-px hover:bg-white hover:text-blue-500"
    },
    d
  )) });
}, bi = () => {
  const [t] = ue(), [, e] = oe(), { addBlocks: n } = $e();
  return B(
    (r, s = null) => {
      const o = [];
      ht(r, (i) => {
        const a = t.find((f) => f._id === i);
        s ? s === "root" && (s = null) : s = (a == null ? void 0 : a._parent) ?? null;
        const u = Z(
          t,
          (f) => Ct(s) ? f._parent === s : !f._parent
        ).indexOf(a) + 1, p = ws(t, i, s);
        n(p, s ?? void 0, u), o.push(_(p, "0._id", ""));
      }), e(o);
    },
    [t, e]
  );
}, _m = P(""), hc = () => D(_m), mc = P("");
mc.debugLabel = "inlineEditingActiveAtom";
const gc = P(0);
gc.debugLabel = "inlineEditingItemIndexAtom";
const Sn = () => {
  const [t, e] = D(mc), [n, r] = D(gc);
  return {
    editingBlockId: t,
    editingItemIndex: n,
    setEditingBlockId: e,
    setEditingItemIndex: r
  };
}, bc = P("outline");
bc.debugLabel = "sidebarActivePanelAtom";
const yi = () => D(bc), Am = ({ blockId: t, className: e }) => /* @__PURE__ */ l(pp, { className: e, onClick: () => {
  t && me.publish(se.GOTO_BLOCK_SETTINGS, t);
} }), ua = ["wheel", "touchstart", "touchmove", "pointerdown", "keydown"], Tm = 700, yc = "instant", Bm = 2, Im = (t) => {
  const e = t.graceMs ?? Tm, n = t.tolerance ?? Bm;
  return !(Math.abs(t.scrollY - t.intended) <= n || t.now - t.lastGestureAt <= e || t.now - t.lastIntentionalAt <= e);
};
let xc = Number.NEGATIVE_INFINITY;
const Rm = (t = performance.now()) => {
  xc = t;
}, Lm = () => xc, Pm = (t, e) => t.bottom > 0 && t.top < e, Om = (t, e, n, r = 24) => Pm(t, e) ? null : Math.max(0, Math.round(n + t.top - r)), Dm = P(0), vc = P(0);
function xi(t) {
  if (t.getAttribute("data-block-id") === "canvas")
    return null;
  if (t.getAttribute("data-block-id") || t.getAttribute("data-block-parent"))
    return t;
  const e = t.closest("[data-block-id]");
  return (e == null ? void 0 : e.getAttribute("data-block-id")) === "canvas" ? null : e;
}
const Mm = ["Heading", "Paragraph", "Text", "Link", "Span", "Button"], $m = (t) => {
  var e;
  return (t == null ? void 0 : t.getAttribute("data-block-type")) === "RichText" || ((e = t == null ? void 0 : t.parentElement) == null ? void 0 : e.getAttribute("data-block-type")) === "RichText";
}, wc = (t) => t ? Fu(t.children, (e) => {
  const n = e;
  return n.hasAttribute("data-block-id") || wc(n);
}) : !1, Fm = (t, e) => {
  if ($m(t))
    return !0;
  const n = t == null ? void 0 : t.getAttribute("data-block-type");
  return n ? Mm.includes(n) : !1;
}, zm = () => {
  const { editingBlockId: t, setEditingBlockId: e, setEditingItemIndex: n } = Sn();
  return B(
    (r) => {
      var a;
      if (r == null || r.preventDefault(), r == null || r.stopPropagation(), t) return;
      const s = xi(r.target);
      if (!s || !Fm(s) || wc(s)) return;
      const o = s.getAttribute("data-block-id");
      if (!o) return;
      const i = s.closest('[data-block-type="Repeater"]');
      i ? (a = i == null ? void 0 : i.childNodes) == null || a.forEach((c, d) => {
        c.contains(s) && n(d);
      }) : n(-1), e(o);
    },
    [t, e, n]
  );
}, Hm = () => {
  const { editingBlockId: t } = Sn(), { clearHighlight: e } = At(), [, n] = Fe(), [r] = D(vc);
  return B(
    (s) => {
      if (t) return;
      s.stopPropagation();
      const o = xi(s.target);
      if (!o) {
        e(), n([]), me.publish(se.CANVAS_BLOCK_SELECTED, []);
        return;
      }
      if (r !== 2) {
        if (o != null && o.getAttribute("data-block-id") && (o == null ? void 0 : o.getAttribute("data-block-id")) === "container") {
          me.publish(se.CLEAR_CANVAS_SELECTION);
          return;
        }
        if (o != null && o.getAttribute("data-block-parent")) {
          const i = o.getAttribute("data-style-prop"), a = o.getAttribute("data-style-id"), c = o.getAttribute("data-block-parent");
          me.publish(se.CANVAS_BLOCK_STYLE_SELECTED, { blockId: c, styleId: a, styleProp: i });
        } else if (o != null && o.getAttribute("data-block-id")) {
          const i = o.getAttribute("data-block-id");
          me.publish(se.CANVAS_BLOCK_SELECTED, i === "canvas" ? [] : [i]);
        }
        e();
      }
    },
    [t, r, e, n]
  );
}, Vm = () => {
  const { editingBlockId: t } = Sn(), { highlightBlock: e } = At();
  return pn(
    (n) => {
      if (t) return;
      const r = xi(n.target);
      r && e(r);
    },
    [t, e],
    100
  );
}, jm = () => {
  const { clearHighlight: t } = At();
  return B(() => t(), [t]);
}, Wm = ({ children: t }) => {
  const e = zm(), n = Hm(), r = Vm(), s = jm();
  return /* @__PURE__ */ l(
    "div",
    {
      "data-block-id": "canvas",
      id: "canvas",
      onClick: n,
      onDoubleClick: e,
      onMouseMove: r,
      onMouseLeave: s,
      className: "relative h-full max-w-full p-px",
      children: t
    }
  );
}, kc = (t, e) => t.querySelector(`[data-block-id="${e}"]`), Gm = (t, e) => t.querySelector(`[data-style-id="${e}"]`), Um = () => {
  const t = ae(), { document: e } = yt(), [n] = Fe(), [r, s] = $([]), [, o] = $([]), { onDragStart: i, onDragEnd: a, isDragging: c } = Jn(), [d, u] = $(null), p = bt();
  return z(() => {
    if (t != null && t._id && t.type !== "Multiple" && e) {
      const f = kc(e, t._id);
      if (f) {
        const h = e.defaultView;
        if (h) {
          const m = f.getBoundingClientRect(), g = Om({ top: m.top, bottom: m.bottom }, h.innerHeight, h.scrollY);
          g !== null && (Rm(), h.scrollTo({ top: g, behavior: yc }));
        }
        s([f]);
      }
    }
  }, [t == null ? void 0 : t._id, t == null ? void 0 : t.type, e]), z(() => {
    if (!F(n) && e) {
      const f = Gm(e, ye(n).id);
      o(f ? [f] : [null]);
    } else
      o([null]);
  }, [n, e]), /* @__PURE__ */ l(
    "div",
    {
      onDragEnd: () => {
        u(null), a();
      },
      draggable: p && !!t,
      onDragStart: (f) => {
        u(r == null ? void 0 : r[0]), i(f, t, !1);
      },
      children: t && /* @__PURE__ */ l(
        Km,
        {
          block: t,
          isDragging: c && !!d,
          selectedBlockElement: r[0] || (c ? d : null)
        }
      )
    }
  );
}, Km = ({ block: t, isDragging: e, selectedBlockElement: n }) => {
  const r = di(), s = bi(), [, o] = oe(), [, i] = hc(), [, a] = Fe(), { hasPermission: c } = gt(), { editingBlockId: d } = Sn(), { document: u } = yt(), p = bt(), f = G("flags.gotoSettings", !1), h = G("flags.ai", !1), { floatingStyles: m, refs: g, update: y } = ip({
    placement: "top-start",
    middleware: [
      ap({
        boundary: u == null ? void 0 : u.body,
        limiter: sp({
          offset: 8,
          mainAxis: !0,
          crossAxis: !0
        })
      }),
      rp({
        boundary: u == null ? void 0 : u.body,
        fallbackPlacements: ["bottom-start", "top-end", "bottom-end", "inside"]
      }),
      op({
        boundary: u == null ? void 0 : u.body,
        apply({ availableWidth: v, availableHeight: k, elements: T }) {
          Object.assign(T.floating.style, {
            maxWidth: `${Math.max(200, v)}px`,
            maxHeight: `${Math.max(100, k)}px`
          });
        }
      })
    ],
    elements: { reference: n }
  });
  ys(n, () => y(), n !== null), ys(u == null ? void 0 : u.body, () => y(), (u == null ? void 0 : u.body) !== null);
  const x = _(t, "_parent", null), w = F(_(t, "_name", "")) ? _(t, "_type", "") : _(t, "_name", "");
  z(() => {
    let v = null;
    return n ? (v = setTimeout(() => y(), 500), () => {
      v && clearTimeout(v);
    }) : (y(), () => {
      v && clearTimeout(v);
    });
  }, [n, t == null ? void 0 : t._id]);
  const [, S] = yi();
  return !e && (!n || !t || d) ? null : /* @__PURE__ */ l(Q, { children: /* @__PURE__ */ l(
    "div",
    {
      role: "button",
      tabIndex: 0,
      ref: g.setFloating,
      style: m,
      onClick: (v) => {
        v.stopPropagation(), v.preventDefault();
      },
      onMouseEnter: (v) => {
        v.stopPropagation(), i(null);
      },
      onKeyDown: (v) => v.stopPropagation(),
      className: `isolate z-[999] flex h-6 items-center justify-between bg-blue-500 py-2 text-xs text-white ${e ? "opacity-0" : ""}`,
      children: /* @__PURE__ */ b(Q, { children: [
        /* @__PURE__ */ b("div", { className: "flex items-center", children: [
          p && /* @__PURE__ */ l(fp, { className: "flex-shrink-0 cursor-grab rounded p-0.5 hover:bg-white/20 active:cursor-grabbing" }),
          x && /* @__PURE__ */ l(
            qt,
            {
              className: "flex-shrink-0 rounded p-0.5 hover:bg-white/20",
              onClick: () => {
                a([]), o([x]);
              }
            }
          )
        ] }),
        /* @__PURE__ */ l("div", { className: `w-full ${p ? "cursor-grab active:cursor-grabbing" : ""}`, children: /* @__PURE__ */ l("div", { className: "mr-10 w-full items-center space-x-1 px-1 leading-tight", children: w }) }),
        /* @__PURE__ */ b("div", { className: "flex items-center gap-1 pl-1 pr-1.5", children: [
          c(Ie.ADD_BLOCK) && h && /* @__PURE__ */ l(
            Ys,
            {
              className: "h-4 w-4 rounded hover:bg-white hover:text-blue-500",
              onClick: () => {
                S("chai-chat-panel"), me.publish(se.OPEN_AI_PANEL);
              }
            }
          ),
          f && /* @__PURE__ */ l(
            Am,
            {
              blockId: t == null ? void 0 : t._id,
              className: "h-4 w-4 rounded p-px hover:bg-white hover:text-blue-500"
            }
          ),
          !p && /* @__PURE__ */ l(zh, { block: t, children: /* @__PURE__ */ l(qe, { className: "h-4 w-4 rounded p-px hover:bg-white hover:text-blue-500" }) }),
          Xs(_(t, "_type", "")) && c(Ie.ADD_BLOCK) ? /* @__PURE__ */ l(
            zs,
            {
              className: "h-4 w-4 rounded p-px hover:bg-white hover:text-blue-500",
              onClick: () => s([t == null ? void 0 : t._id])
            }
          ) : null,
          qs(_(t, "_type", "")) && c(Ie.DELETE_BLOCK) ? /* @__PURE__ */ l(
            Hs,
            {
              className: "h-4 w-4 rounded p-px hover:bg-white hover:text-blue-500",
              onClick: () => r([t == null ? void 0 : t._id])
            }
          ) : null,
          c(Ie.MOVE_BLOCK) && /* @__PURE__ */ l(Em, { block: t, updateFloatingBar: y })
        ] })
      ] })
    }
  ) });
}, Jm = `<!doctype html>
<html lang="en" dir="__HTML_DIR__" class="scroll-smooth h-full overflow-y-auto">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com/3.4.17?plugins=forms@0.5.9,typography@0.5.15,aspect-ratio@0.4.2"><\/script>
    <style>
      html { height: 100%; overflow:auto; }
      body { height: 100%; }
      .air-highlight{ outline: 1px solid #42a1fc !important; outline-offset: -1px;}
      .air-highlight-multi{ outline: 1px solid #29e503 !important; outline-offset: -1px;}
      body{   -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none;
              -moz-user-select: none;-ms-user-select: none; user-select: none; }
      html{
        -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
      }
      /** IMPORTANT: Make fields content editable in SAFARI */
      [contenteditable] {-webkit-user-select: text;user-select: text;}
  
      html::-webkit-scrollbar { width: 0 !important }
      .aspect-auto{aspect-ratio: auto;}
      .aspect-square{aspect-ratio: 1/1;}
      .aspect-video{aspect-ratio: 16/9;}
      .dragging [data-dnd="leaf"] { pointer-events: none; } .dragging [data-dnd="leaf"] * { pointer-events: none; }
      .dragging [data-dnd="ignore"], .dragging [data-dnd="ignore"] * { pointer-events: none; }
      a{ pointer-events: none !important; }
      [contenteditable="true"], [contenteditable="true"] * { cursor: text !important; }
      [contenteditable="true"] {
          outline: none;
          box-shadow: 0 0 0px 4px rgba(36, 150, 255, 0.2);
          -webkit-user-select: text;
          -moz-user-select: text;
          user-select: text;
      }
      .frame-root .frame-content { height: 100%; }
      [data-drop="yes"] { outline: 2px dashed orange !important; outline-offset: -2px }
      [data-dnd="yes"] { pointer-events: auto !important}
      [data-dnd="no"],[data-block-type="GlobalBlock"],[data-block-type="PartialBlock"] > * { pointer-events: none !important; }
      [data-block-type="GlobalBlock"],[data-block-type="PartialBlock"] { position: relative !important; }
      .partial-overlay { pointer-events: auto !important; }
      [data-dnd-dragged="yes"] { opacity: 0.6; pointer-events: none; }
      [data-dnd-dragged="no"] { opacity: 1; pointer-events: auto !important; }
      [force-show] { display: block !important; }
      [data-cut-block="yes"] { pointer-events: none !important; display: none !important; }
    </style>    
    <style id="highlighted-block">
      [data-highlighted]{
        outline: 1px solid #42a1fc !important; outline-offset: -1px;
      }
    </style>
    <style>
      .react-colorful {
        height: 120px !important;
        width: 180px !important;
      }
      .react-colorful > div {
        margin-bottom: 4px;
      }
      .react-colorful__saturation {
        border-radius: 4px !important;
      }
      .react-colorful__hue,
      .react-colorful__alpha {
        height: 12px !important;
        border-radius: 4px !important;
      }
      .react-colorful__pointer {
        width: 16px !important;
        height: 16px !important;
        border: 1.5px solid #fff !important;
        cursor: pointer !important;
        z-index: 10002 !important;
      }
      #active-inline-editing-element{outline: 2px solid #00c951;}
    </style>
    <style type="text/tailwindcss">
      @layer utilities {
        .rte {
          h1 {
            @apply text-2xl;
          }
          h2 {
            @apply text-xl;
          }
          h3 {
            @apply text-lg;
          }
          h4 {
            @apply text-base;
          }
          h5 {
            @apply text-sm;
          }
          h6 {
            @apply text-xs;
          }
          p {
            &:empty {
              @apply h-4;
            }
          }
          ul {
            @apply list-disc pl-6 text-base;
          }
          ol {
            @apply list-decimal pl-6 text-base;
          }
          li > p {
            @apply m-0;
          }
          blockquote {
            @apply pl-4 text-base;
            p {
              @apply pl-4 text-base;
            }
          }
        }
      }
    </style>
  </head>
  <body class="font-body antialiased h-full">
    <div class="frame-root h-full"></div>
  </body>
</html>`;
class Ym extends sl {
  componentDidMount() {
    this.props.contentDidMount();
  }
  componentDidUpdate() {
    this.props.contentDidUpdate();
  }
  render() {
    return Xu.only(this.props.children);
  }
}
class Cc extends sl {
  constructor(n, r) {
    super(n, r);
    Yt(this, "setRef", (n) => {
      this.nodeRef.current = n;
      const { forwardedRef: r } = this.props;
      typeof r == "function" ? r(n) : r && (r.current = n);
    });
    Yt(this, "handleLoad", () => {
      clearInterval(this.loadCheck), this.state.iframeLoaded || this.setState({ iframeLoaded: !0 });
    });
    // In certain situations on a cold cache DOMContentLoaded never gets called
    // fallback to an interval to check if that's the case
    Yt(this, "loadCheck", () => setInterval(() => {
      this.handleLoad();
    }, 500));
    this._isMounted = !1, this.nodeRef = te.createRef(), this.state = { iframeLoaded: !1 };
  }
  componentDidMount() {
    this._isMounted = !0, this.getDoc() && this.nodeRef.current.contentWindow.addEventListener("DOMContentLoaded", this.handleLoad);
  }
  componentWillUnmount() {
    this._isMounted = !1, this.nodeRef.current.removeEventListener("DOMContentLoaded", this.handleLoad);
  }
  getDoc() {
    return this.nodeRef.current ? this.nodeRef.current.contentDocument : null;
  }
  getMountTarget() {
    const n = this.getDoc();
    return this.props.mountTarget ? n.querySelector(this.props.mountTarget) : n.body.children[0];
  }
  renderFrameContents() {
    if (!this._isMounted)
      return null;
    const n = this.getDoc();
    if (!n)
      return null;
    const r = this.props.contentDidMount, s = this.props.contentDidUpdate, o = n.defaultView || n.parentView, i = /* @__PURE__ */ l(Ym, { contentDidMount: r, contentDidUpdate: s, children: /* @__PURE__ */ l(km, { value: { document: n, window: o }, children: /* @__PURE__ */ l("div", { className: "frame-content", children: this.props.children }) }) }), a = this.getMountTarget();
    return [oa.createPortal(this.props.head, this.getDoc().head), oa.createPortal(i, a)];
  }
  render() {
    const n = {
      ...this.props,
      srcDoc: this.props.initialContent,
      children: void 0
      // The iframe isn't ready so we drop children from props here. #12, #17
    };
    return delete n.head, delete n.initialContent, delete n.mountTarget, delete n.contentDidMount, delete n.contentDidUpdate, delete n.forwardedRef, /* @__PURE__ */ l("iframe", { ...n, ref: this.setRef, onLoad: this.handleLoad, children: this.state.iframeLoaded && this.renderFrameContents() });
  }
}
Yt(Cc, "defaultProps", {
  style: {},
  head: null,
  children: void 0,
  mountTarget: void 0,
  contentDidMount: () => {
  },
  contentDidUpdate: () => {
  },
  initialContent: '<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'
});
const Xm = te.forwardRef((t, e) => /* @__PURE__ */ l(Cc, { ...t, forwardedRef: e })), Nc = P([]), Po = () => {
  const [t, e] = D(Nc), n = vt(Sc), r = B(
    (s) => {
      e(s), n([]);
    },
    [e, n]
  );
  return [t, r];
}, Sc = P([]), Ec = () => {
  const [t] = ue(), [e, n] = D(Sc), r = vt(Nc), { getPartialBlocks: s } = li(), o = G("flags.copyPaste", !0), i = B(
    (c) => c.some((d) => ws(t, d, null).some((p) => p._type === "PartialBlock" || p._type === "GlobalBlock")),
    [t]
  ), a = B(
    async (c, d = !1) => {
      try {
        if (F(c)) return;
        n(c), r([]);
        const u = {
          _chai_copied_blocks: c.flatMap((p) => {
            const f = ws(t, p, null);
            if (!d)
              return f;
            let h = [];
            for (const m of f)
              if (m._type === "PartialBlock" || m._type === "GlobalBlock") {
                let g = s(m.partialBlockId);
                m._parent && (g == null ? void 0 : g.length) > 0 && (g = g.map((y) => (F(y._parent) && Ge(y, "_parent", m._parent), y))), h = [...h, ...g];
              } else
                h.push(m);
            return h;
          })
        };
        if (!o)
          return;
        if (!navigator.clipboard) {
          Ce.error("Clipboard not available.");
          return;
        }
        Ce.promise(navigator.clipboard.writeText(JSON.stringify(u)), {
          success: "Blocks copied successfully",
          error: "Failed to copy blocks to clipboard"
        });
      } catch (u) {
        Ce.error("Failed to copy blocks to clipboard"), console.error("Failed to copy blocks to clipboard:", u);
      }
    },
    [n, r, t]
  );
  return [e, a, i];
}, ts = () => navigator.userAgent.toLowerCase().includes("firefox"), qm = () => {
  const [t] = ue();
  return (e, n) => {
    var o;
    const r = ((o = ee(t, { _id: n })) == null ? void 0 : o._type) || null, s = ye(e.map((i) => {
      var a;
      return (a = ee(t, { _id: i })) == null ? void 0 : a._type;
    }));
    return mt(r, s);
  };
}, Zm = () => {
  const t = Ue(He), { moveBlocks: e } = $e();
  return B(
    (n, r) => {
      const s = Array.isArray(r) ? r[0] : r;
      if (r === "root") {
        const o = t == null ? void 0 : t.filter((i) => !i._parent);
        e(n, void 0, (o == null ? void 0 : o.length) || 0);
      } else {
        const o = t == null ? void 0 : t.filter((i) => i._parent === s);
        e(n, s, (o == null ? void 0 : o.length) || 0);
      }
    },
    [e, t]
  );
}, vi = () => {
  const [t, e] = Po(), n = Zm(), { addPredefinedBlock: r } = Nn(), s = qm();
  return {
    canPaste: B(
      async (i) => {
        if (t.length > 0)
          return s(t, i);
        if (ts())
          return !1;
        try {
          const a = await navigator.clipboard.readText();
          if (a) {
            const c = JSON.parse(a);
            return le(c, "_chai_copied_blocks");
          }
        } catch {
          return !1;
        }
        return !1;
      },
      [s, t]
    ),
    pasteBlocks: B(
      async (i) => {
        const a = Array.isArray(i) ? i[0] : i;
        if (!F(t)) {
          n(t, i), e([]), ts() || await navigator.clipboard.writeText("");
          return;
        }
        if (ts()) {
          Ce.error("Paste is not supported in Firefox");
          return;
        }
        if (!(navigator != null && navigator.permissions)) {
          Ce.error("Cannot check clipboard permissions.");
          return;
        }
        try {
          if ((await navigator.permissions.query({ name: "clipboard-read" })).state === "denied") {
            Ce.error("Clipboard paste permission denied. Please allow clipboard access.");
            return;
          }
        } catch {
          Ce.error("Failed to check clipboard permissions. Please allow clipboard access.");
          return;
        }
        Ce.promise(
          async () => {
            const c = await navigator.clipboard.readText();
            if (c) {
              const d = JSON.parse(c);
              if (le(d, "_chai_copied_blocks"))
                r(d._chai_copied_blocks, a === "root" ? null : a);
              else
                throw new Error("Nothing to paste");
            } else
              throw new Error("Nothing to paste");
          },
          {
            success: () => "Blocks pasted successfully",
            error: () => "Nothing to paste"
          }
        );
      },
      [t, n, e, r]
    )
  };
}, _c = (t) => {
  const [e, n] = oe(), r = ae(), s = di(), o = bi(), { undo: i, redo: a } = Ar(), [, c] = Po(), [, d] = Ec(), { canPaste: u, pasteBlocks: p } = vi(), f = t ? { document: t } : {};
  Rt(
    "ctrl+z,meta+z",
    (h) => {
      h.preventDefault(), ft.hasUndo() && i();
    },
    { ...f, preventDefault: !0 },
    [i]
  ), Rt(
    "ctrl+y,meta+y",
    (h) => {
      h.preventDefault(), ft.hasRedo() && a();
    },
    { ...f, preventDefault: !0 },
    [a]
  ), Rt(
    "ctrl+x,meta+x",
    (h) => {
      const m = window.getSelection();
      m && m.toString().length > 0 || (h.preventDefault(), F(e) || c(e));
    },
    { ...f, enabled: !F(e) },
    [e, c]
  ), Rt(
    "ctrl+c,meta+c",
    (h) => {
      const m = window.getSelection();
      m && m.toString().length > 0 || (h.preventDefault(), d(e));
    },
    { ...f, enabled: !F(e) },
    [e, d]
  ), Rt(
    "ctrl+v,meta+v",
    async () => {
      await u(e[0]) && p(e);
    },
    { ...f, enabled: !F(e), preventDefault: !0 },
    [e, u, p]
  ), Rt("esc", () => n([]), f, [n]), Rt(
    "ctrl+d,meta+d",
    () => o(e),
    { ...f, enabled: !F(e), preventDefault: !0 },
    [e, o]
  ), Rt(
    "del, backspace",
    (h) => {
      h.preventDefault(), qs(_(r, "_type", "")) && s(e);
    },
    f,
    [e, s]
  );
}, Qm = () => {
  const { document: t } = yt();
  return _c(t), null;
}, eg = () => {
  const { t } = K(), { hasPermission: e } = gt(), n = e(Ie.ADD_BLOCK), r = bt();
  return n ? /* @__PURE__ */ b("div", { id: "add-block-bottom", className: "group relative w-full cursor-pointer py-2", children: [
    /* @__PURE__ */ l("br", {}),
    !r && /* @__PURE__ */ l(
      "div",
      {
        role: "button",
        onClick: () => me.publish(se.OPEN_ADD_BLOCK),
        className: "block h-1 rounded bg-primary opacity-0 duration-200 group-hover:opacity-100",
        children: /* @__PURE__ */ b("div", { className: "absolute left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center gap-x-1 rounded-full bg-primary px-3 py-1 text-xs leading-tight text-white hover:bg-primary", children: [
          /* @__PURE__ */ l(qe, { className: "size-2.5 stroke-[3]" }),
          " ",
          t("Add block")
        ] })
      }
    ),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("br", {})
  ] }) : null;
}, Ac = ({ theme: t }) => {
  const e = M(() => Nf({ theme: t }), [t]);
  return /* @__PURE__ */ l("style", { id: "chai-theme", dangerouslySetInnerHTML: { __html: e } });
}, Tc = Et("darkMode", !1), Ir = () => {
  const [t, e] = D(Tc);
  return [t, e];
}, tg = (t = Al) => {
  const e = Ks;
  return t.fontFamily && (e.fontFamily = Object.entries(t.fontFamily).reduce(
    (n, [r, s]) => ({
      ...n,
      [r.replace("font-", "")]: s
    }),
    e.fontFamily
  )), e.borderRadius = t.borderRadius, t.colors && (e.colors = t.colors.reduce((n, r) => (Object.entries(r.items).forEach(([s, o]) => {
    s in n && (n[s] = o);
  }), n), e.colors)), e;
}, ng = P({}), Oo = () => {
  const t = Rr(), e = M(() => tg(t), [t]), n = G("theme", {}), [r, s] = D(ng);
  return [M(
    () => ({ ...e, ...!F(n) && n, ...!F(r) && r }),
    [e, n, r]
  ), s];
}, Rr = () => {
  const t = G("themeOptions", (n) => n);
  return M(() => t(Al), [t]);
}, rg = P("block"), og = () => D(rg), sg = P("settings"), Bc = () => D(sg), ig = () => {
  const [t] = Oo(), e = Rr(), [n] = Ir(), { document: r, window: s } = yt();
  return z(() => {
    n ? r == null || r.documentElement.classList.add("dark") : r == null || r.documentElement.classList.remove("dark");
  }, [n, r]), z(() => {
    !s || !s.tailwind || (s.tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          container: {
            center: !0,
            padding: "1rem",
            screens: {
              "2xl": "1400px"
            }
          },
          ...Ef(e)
        }
      },
      plugins: [
        $f,
        Mf,
        Of,
        Df,
        Sf(function({ addBase: o, theme: i }) {
          o({
            "h1,h2,h3,h4,h5,h6": {
              fontFamily: i("fontFamily.heading")
            },
            body: {
              fontFamily: i("fontFamily.body"),
              color: i("colors.foreground"),
              backgroundColor: i("colors.background")
            }
          });
        })
      ]
    });
  }, [t, e, s]), /* @__PURE__ */ b(Q, { children: [
    /* @__PURE__ */ l(Ac, { theme: t }),
    /* @__PURE__ */ l(cg, {}),
    /* @__PURE__ */ l(lg, {}),
    /* @__PURE__ */ l(ag, {})
  ] });
}, ag = () => {
  const [t] = Fe(), [e] = oe(), n = M(() => `${A(t, ({ id: r }) => `[data-style-id="${r}"]`).join(",")}{
                outline: 1px solid ${e.length > 0 ? "#42a1fc" : "#de8f09"} !important; outline-offset: -1px;
            }`, [t, e]);
  return /* @__PURE__ */ l("style", { id: "selected-styling-blocks", dangerouslySetInnerHTML: { __html: n } });
}, lg = () => {
  const [t] = oe(), e = M(() => `${A(t, (n) => `[data-block-id="${n}"]`).join(",")}{
                outline: 1px solid #42a1fc !important; outline-offset: -1px;
            }`, [t]);
  return /* @__PURE__ */ l("style", { id: "selected-blocks", dangerouslySetInnerHTML: { __html: e } });
}, cg = () => {
  const [t] = Oo(), e = Js(), n = M(() => {
    const { heading: o, body: i } = {
      heading: _(t, "fontFamily.heading"),
      body: _(t, "fontFamily.body")
    };
    return e.filter((a) => a.family === o || a.family === i);
  }, [t == null ? void 0 : t.fontFamily, e]), r = M(
    () => _f(Z(n, (o) => le(o, "url"))),
    [n]
  ), s = M(
    () => Af(Z(n, (o) => le(o, "src"))),
    [n]
  );
  return /* @__PURE__ */ b(Q, { children: [
    r.map((o, i) => /* @__PURE__ */ l("link", { rel: "stylesheet", href: o }, `google-font-${i}`)),
    /* @__PURE__ */ l("style", { id: "chai-custom-fonts", dangerouslySetInnerHTML: { __html: s } })
  ] });
}, dg = ({ children: t, onMount: e, onResize: n }) => {
  const [, r] = oe(), [, s] = Fe(), o = ne(null), i = Nt(
    () => {
      const { clientWidth: c } = o.current;
      n(c);
    },
    [o.current],
    100
  );
  ys(o.current, i, o.current !== null), z(() => {
    const { clientWidth: c } = o.current;
    e(c);
  }, []);
  const a = B(() => {
    r([]), s([]);
  }, [r, s]);
  return /* @__PURE__ */ l(
    "div",
    {
      id: "main-content",
      onClick: a,
      className: "h-full w-full border-l-4 border-r-4 pb-0",
      ref: o,
      children: t
    }
  );
}, ug = () => {
  const [, t] = oe(), { onDragStart: e, onDragEnd: n } = Jn(), [r] = ue(), s = ne(null), [o, i] = D(Dm), [a, c] = D(vc), d = B(
    (f) => {
      var x;
      if (f.button !== 0) return;
      const h = Date.now(), m = h - o;
      if (m < 400 && m > 0) {
        c(2);
        return;
      }
      i(h);
      const y = (x = f.target.closest("[data-block-id]")) == null ? void 0 : x.getAttribute("data-block-id");
      y && (t([y]), s.current = y);
    },
    [t, o, i, a, c]
  ), u = B(
    (f) => {
      if (!s.current) return;
      const h = ee(r, { _id: s.current });
      h && e(f, h, !1);
    },
    [r, e]
  ), p = B(() => {
    n(), s.current = null;
  }, [n]);
  return {
    onMouseDown: d,
    onDragStart: u,
    onDragEnd: p
  };
}, pg = () => {
  const [t] = ue();
  return B(
    (e, n) => F(n) ? {} : Object.entries(n).reduce(
      (r, [s, o]) => {
        const i = [];
        let a = ee(t, { _id: e });
        for (; a; )
          i.push(a), a = ee(t, { _id: a._parent });
        const c = ee(i, { _type: o.block });
        return c && (r[s] = _(c, _(o, "prop"), null)), r;
      },
      {}
    ),
    [t]
  );
}, fg = P("edit"), Ic = () => {
  const [t, e] = D(fg);
  return { mode: t, setMode: e };
}, hg = ({ children: t, block: e }) => {
  const n = M(() => Pe(e._type), [e._type]), r = _(n, "dataProviderDependencies"), s = _(n, "dataProvider"), o = _(n, "dataProviderMode", "mock"), i = ih(e, o, r, s);
  return t(i);
}, mg = () => /* @__PURE__ */ l("div", { className: "flex min-h-[100px] items-center justify-center bg-red-50 p-2 text-center text-red-500", children: "Something went wrong." });
function ke(...t) {
  return _l(kf(t));
}
const Ns = ({
  editor: t,
  trigger: e,
  content: n,
  from: r,
  menuRef: s
}) => {
  const { document: o } = yt(), [i, a] = $({ left: void 0, right: void 0, top: void 0, bottom: void 0 }), [c, d] = $(!1), u = ne(null);
  if (z(() => {
    var x, w;
    if (!c) {
      a({ left: void 0, right: void 0, top: void 0, bottom: void 0 });
      return;
    }
    const p = (x = u.current) == null ? void 0 : x.getBoundingClientRect();
    if (!p || !o) return;
    const f = (w = s.current) == null ? void 0 : w.getBoundingClientRect();
    if (!f) return;
    let h = p.left, m = p.bottom + 4, g, y;
    (f == null ? void 0 : f.left) + (f == null ? void 0 : f.width) + 50 >= o.body.offsetWidth && (h = void 0, g = o.body.offsetWidth - (p == null ? void 0 : p.right)), m + 202 >= o.body.clientHeight && (m = void 0, y = o.body.clientHeight - p.bottom + f.height), a({ left: h, top: m, right: g, bottom: y });
  }, [c]), r === "canvas") {
    const p = () => {
      d(!1), t && (t == null || t.view.focus(), t == null || t.chain().focus().run());
    };
    return /* @__PURE__ */ b(Q, { children: [
      /* @__PURE__ */ l("div", { ref: u, onClick: () => d((f) => !f), className: "cursor-pointer", children: e }),
      c && (i.left !== void 0 || i.top !== void 0 || i.right !== void 0 || i.bottom !== void 0) && Tf(
        /* @__PURE__ */ l(
          "div",
          {
            id: "chaibuilder-rte-dropdown-menu-content",
            onClick: p,
            className: "fixed inset-0 left-0 top-0 z-[10001] h-full w-screen",
            children: /* @__PURE__ */ l(
              "div",
              {
                onClick: (f) => f.stopPropagation(),
                className: "absolute rounded-md border border-gray-500 bg-white p-1.5 text-xs shadow-2xl",
                style: Object.assign(
                  {},
                  { left: i.left, top: i.top, right: i.right, bottom: i.bottom }
                ),
                children: typeof n == "function" ? n(p) : n
              }
            )
          }
        ),
        o.body,
        "chaibuilder-rte-dropdown-menu"
      )
    ] });
  }
  return /* @__PURE__ */ l(Q, { children: /* @__PURE__ */ b(kn, { open: c, onOpenChange: d, children: [
    /* @__PURE__ */ l(Cn, { className: "relative outline-none", asChild: !0, children: e }),
    /* @__PURE__ */ l(Ft, { className: "z-50 rounded-md border bg-white p-1 text-xs shadow-xl", children: c && (typeof n == "function" ? n(() => d(!1)) : n) })
  ] }) });
}, gg = (t, e, n) => {
  const r = n === "settings", s = typeof e == "boolean" ? e : e.some((o) => t.isActive(o));
  return {
    "rounded p-1": !0,
    "hover:bg-blue-900 hover:text-blue-100": !s && !r,
    "hover:bg-blue-100 hover:text-blue-900": !s && r,
    "bg-blue-500 text-white": s && r,
    "bg-white text-blue-500": s && !r
  };
}, pa = ({ themeColors: t, onClose: e, color: n, onChange: r, onRemove: s }) => /* @__PURE__ */ b(Q, { children: [
  /* @__PURE__ */ l("div", { className: "flex w-[180px] flex-wrap gap-1 pb-2", children: (t == null ? void 0 : t.length) > 0 && Ds(t).map((o) => {
    var i;
    return /* @__PURE__ */ l(
      "button",
      {
        className: ke(
          "h-4 w-4 cursor-pointer rounded-full border border-gray-900 shadow duration-200 hover:scale-105 hover:shadow-xl",
          {
            "border-2": o === n
          }
        ),
        style: { backgroundColor: o },
        onClick: () => {
          r(o), e();
        },
        title: (i = o || "#000000") == null ? void 0 : i.toUpperCase()
      },
      o
    );
  }) }),
  /* @__PURE__ */ l(Cf, { color: n, onChange: r, style: { width: "200px", height: "200px" } }),
  /* @__PURE__ */ b("div", { className: "mt-1 flex items-center justify-between gap-1", children: [
    /* @__PURE__ */ l(
      Cr,
      {
        type: "text",
        value: n || "#000000f2",
        onChange: (o) => r(o.target.value, !0),
        className: "!h-5 !w-[105px] rounded-sm !p-0 text-center font-light uppercase text-gray-600 outline-none ring-0 focus:ring-0",
        placeholder: "#000000"
      }
    ),
    /* @__PURE__ */ b(
      "button",
      {
        className: "flex h-4 w-max cursor-pointer items-center gap-x-1 rounded-full bg-transparent px-1 text-red-600 shadow-none duration-200 hover:bg-red-100",
        onClick: () => {
          s(), e();
        },
        title: "Remove",
        children: [
          /* @__PURE__ */ l(at, { className: "h-3 w-3" }),
          " Remove"
        ]
      }
    )
  ] })
] }), bg = ({
  textColor: t,
  highlightColor: e,
  onChangeTextColor: n,
  onChangeHighlightColor: r,
  onRemoveTextColor: s,
  onRemoveHighlightColor: o,
  onClose: i
}) => {
  const [a] = Ir(), [c] = D(Zh), d = (c == null ? void 0 : c.colors) || {}, u = Object.values(d).map((h) => _(h, a ? "1" : "0")), [p, f] = $("TEXT");
  return /* @__PURE__ */ b("div", { id: "rte-widget-color-picker", className: "px-1", children: [
    /* @__PURE__ */ b("div", { className: "mb-2 flex items-center justify-between rounded-md border bg-muted", children: [
      /* @__PURE__ */ l(
        "div",
        {
          className: `w-full cursor-pointer rounded p-0.5 text-center ${p === "TEXT" ? "bg-blue-500 text-white" : "hover:bg-blue-100 hover:text-blue-500"}`,
          onClick: () => f("TEXT"),
          children: "Text Color"
        }
      ),
      /* @__PURE__ */ l(
        "div",
        {
          className: `w-full cursor-pointer rounded p-0.5 text-center ${p === "HIGHLIGHT" ? "bg-blue-500 text-white" : "hover:bg-blue-100 hover:text-blue-500"}`,
          onClick: () => f("HIGHLIGHT"),
          children: "Highlight Color"
        }
      )
    ] }),
    p === "TEXT" ? /* @__PURE__ */ l(
      pa,
      {
        themeColors: u,
        onClose: i,
        onChange: n,
        color: t,
        onRemove: s
      }
    ) : /* @__PURE__ */ l(
      pa,
      {
        themeColors: u,
        onClose: i,
        onChange: r,
        color: e,
        onRemove: o
      }
    )
  ] });
}, yg = ({ editor: t, from: e, menuRef: n }) => {
  var w, S;
  const r = (w = t == null ? void 0 : t.getAttributes("textStyle")) == null ? void 0 : w.color, s = (S = t == null ? void 0 : t.getAttributes("highlight")) == null ? void 0 : S.color, [o, i] = $(r || "#000000F2"), [a, c] = $(s || "#00000057"), [d, u] = Zi(o, 150), [p, f] = Zi(a, 150), h = (v, k) => {
    k ? (i(v), u(v)) : (t == null || t.chain().setColor(v).run(), i(v));
  }, m = (v, k) => {
    k ? (c(v), f(v)) : (t == null || t.chain().setHighlight({ color: v }).run(), c(v));
  }, g = () => {
    t == null || t.chain().unsetColor().run(), i("#000000F2");
  }, y = () => {
    t == null || t.chain().unsetHighlight().run();
  };
  return z(() => {
    s && c(s);
  }, [s]), z(() => {
    p != null && p.includes("#") && (p == null ? void 0 : p.length) >= 3 && (t == null || t.chain().setHighlight({ color: p }).run());
  }, [p]), z(() => {
    d != null && d.includes("#") && (d == null ? void 0 : d.length) >= 3 && (t == null || t.chain().setColor(d).run());
  }, [d]), /* @__PURE__ */ l(
    Ns,
    {
      editor: t,
      from: e,
      menuRef: n,
      trigger: /* @__PURE__ */ b("div", { className: ke("relative flex items-center", gg(t, !!r, e)), title: "Text Color", children: [
        /* @__PURE__ */ l(
          "div",
          {
            className: "h-4 w-4 rounded-full",
            style: {
              backgroundColor: r || (e === "canvas" ? "#FFFFFF" : "#000000")
            }
          }
        ),
        /* @__PURE__ */ l(gs, { className: "h-3 w-3 opacity-50" })
      ] }),
      content: (v) => /* @__PURE__ */ l(
        bg,
        {
          textColor: o,
          highlightColor: a,
          onChangeTextColor: h,
          onChangeHighlightColor: m,
          onRemoveTextColor: g,
          onRemoveHighlightColor: y,
          onClose: v
        }
      )
    }
  );
}, Ye = (t, e, n) => {
  const r = n === "settings", s = typeof e == "boolean" ? e : e.some((o) => t.isActive(o));
  return {
    "rounded p-1": !0,
    "hover:bg-blue-900 hover:text-blue-100": !s && !r,
    "hover:bg-blue-100 hover:text-blue-900": !s && r,
    "bg-blue-500 text-white": s && r,
    "bg-white text-blue-500": s && !r
  };
}, Rc = ({ editor: t, from: e = "settings", onExpand: n }) => {
  const r = ne(null);
  if (!t) return null;
  const s = () => {
    const i = window.prompt("URL");
    i && t.chain().focus().extendMarkRange("link").setLink({ href: i }).run();
  }, o = () => {
    t.chain().focus().unsetLink().run();
  };
  return /* @__PURE__ */ b(
    "div",
    {
      ref: r,
      id: "chai-rich-text-menu-bar",
      className: ke("mb-1 flex flex-wrap gap-0.5 rounded-t-md border-b border-border bg-gray-50 p-1", {
        "mb-0 rounded-md border-none bg-blue-500 text-white": e === "canvas"
      }),
      children: [
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => t.chain().focus().toggleBold().run(),
            className: ke("", Ye(t, ["bold"], e)),
            title: "Bold",
            children: /* @__PURE__ */ l(hp, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => t.chain().focus().toggleItalic().run(),
            className: ke("", Ye(t, ["italic"], e)),
            title: "Italic",
            children: /* @__PURE__ */ l(dl, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => t.chain().focus().toggleUnderline().run(),
            className: ke("", Ye(t, ["underline"], e)),
            title: "Underline",
            children: /* @__PURE__ */ l(ul, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => t.chain().focus().toggleStrike().run(),
            className: ke("", Ye(t, ["strike"], e)),
            title: "Strike",
            children: /* @__PURE__ */ l(mp, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ l("div", { className: "mx-1 h-5 w-px self-center bg-border" }),
        /* @__PURE__ */ l(yg, { editor: t, from: e, menuRef: r }),
        /* @__PURE__ */ l("div", { className: "mx-1 h-5 w-px self-center bg-border" }),
        /* @__PURE__ */ l(
          Ns,
          {
            editor: t,
            menuRef: r,
            from: e,
            trigger: /* @__PURE__ */ b(
              "button",
              {
                type: "button",
                className: ke("flex items-center", Ye(t, ["bulletList", "orderedList"], e)),
                title: "Bullet List",
                children: [
                  /* @__PURE__ */ l(bs, { className: "h-4 w-4" }),
                  /* @__PURE__ */ l(gs, { className: "h-3 w-3 opacity-50" })
                ]
              }
            ),
            content: (i) => /* @__PURE__ */ b(Q, { children: [
              /* @__PURE__ */ b(
                "div",
                {
                  onClick: () => {
                    t.chain().focus().toggleBulletList().run(), i();
                  },
                  className: ke(
                    "flex cursor-pointer items-center gap-x-1 outline-none hover:outline-none",
                    Ye(t, ["bulletList"], e)
                  ),
                  children: [
                    /* @__PURE__ */ l(bs, { className: "h-4 w-4" }),
                    " Unordered List"
                  ]
                }
              ),
              /* @__PURE__ */ b(
                "div",
                {
                  onClick: () => {
                    t.chain().focus().toggleOrderedList().run(), i();
                  },
                  className: ke(
                    "flex cursor-pointer items-center gap-x-1 outline-none hover:outline-none",
                    Ye(t, ["orderedList"], e)
                  ),
                  children: [
                    /* @__PURE__ */ l(gp, { className: "h-4 w-4" }),
                    "Ordered List"
                  ]
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ l(
          Ns,
          {
            editor: t,
            menuRef: r,
            from: e,
            trigger: /* @__PURE__ */ b(
              "button",
              {
                type: "button",
                className: ke(
                  "flex items-center",
                  Ye(
                    t,
                    t.isActive({ textAlign: "center" }) || t.isActive({ textAlign: "right" }),
                    e
                  )
                ),
                title: "Text Alignment",
                children: [
                  t.isActive({ textAlign: "center" }) ? /* @__PURE__ */ l(Xi, { className: "h-4 w-4" }) : t.isActive({ textAlign: "right" }) ? /* @__PURE__ */ l(qi, { className: "h-4 w-4" }) : /* @__PURE__ */ l(Yi, { className: "h-4 w-4" }),
                  /* @__PURE__ */ l(gs, { className: "h-3 w-3 opacity-50" })
                ]
              }
            ),
            content: (i) => /* @__PURE__ */ b(Q, { children: [
              /* @__PURE__ */ b(
                "div",
                {
                  onClick: () => {
                    t.chain().focus().setTextAlign("left").run(), i();
                  },
                  className: ke(
                    "flex cursor-pointer items-center gap-x-1 outline-none hover:outline-none",
                    Ye(t, t.isActive({ textAlign: "left" }), e)
                  ),
                  children: [
                    /* @__PURE__ */ l(Yi, { className: "h-4 w-4" }),
                    " Align Left"
                  ]
                }
              ),
              /* @__PURE__ */ b(
                "div",
                {
                  onClick: () => {
                    t.chain().focus().setTextAlign("center").run(), i();
                  },
                  className: ke(
                    "flex cursor-pointer items-center gap-x-1 outline-none hover:outline-none",
                    Ye(t, t.isActive({ textAlign: "center" }), e)
                  ),
                  children: [
                    /* @__PURE__ */ l(Xi, { className: "h-4 w-4" }),
                    " Align Center"
                  ]
                }
              ),
              /* @__PURE__ */ b(
                "div",
                {
                  onClick: () => {
                    t.chain().focus().setTextAlign("right").run(), i();
                  },
                  className: ke(
                    "flex cursor-pointer items-center gap-x-1 outline-none hover:outline-none",
                    Ye(t, t.isActive({ textAlign: "right" }), e)
                  ),
                  children: [
                    /* @__PURE__ */ l(qi, { className: "h-4 w-4" }),
                    " Align Right"
                  ]
                }
              )
            ] })
          }
        ),
        t.isActive("link") ? /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: o,
            className: ke("", Ye(t, ["link"], e)),
            title: "Remove Link",
            disabled: !t.isActive("link"),
            children: /* @__PURE__ */ l(pl, { className: "h-3.5 w-3.5" })
          }
        ) : /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: s,
            className: ke("", Ye(t, ["link"], e)),
            title: "Add Link",
            children: /* @__PURE__ */ l(bp, { className: "h-3.5 w-3.5" })
          }
        ),
        n && /* @__PURE__ */ b(Q, { children: [
          /* @__PURE__ */ l("div", { className: "mx-1 h-5 w-px self-center bg-border" }),
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              onClick: n,
              className: ke("", Ye(t, !1, e)),
              title: "Open in full screen mode",
              children: /* @__PURE__ */ l(yp, { className: "h-3.5 w-3.5" })
            }
          )
        ] })
      ]
    }
  );
};
function De(t) {
  this.content = t;
}
De.prototype = {
  constructor: De,
  find: function(t) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === t) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(t) {
    var e = this.find(t);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(t, e, n) {
    var r = n && n != t ? this.remove(n) : this, s = r.find(t), o = r.content.slice();
    return s == -1 ? o.push(n || t, e) : (o[s + 1] = e, n && (o[s] = n)), new De(o);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(t) {
    var e = this.find(t);
    if (e == -1) return this;
    var n = this.content.slice();
    return n.splice(e, 2), new De(n);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(t, e) {
    return new De([t, e].concat(this.remove(t).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(t, e) {
    var n = this.remove(t).content.slice();
    return n.push(t, e), new De(n);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(t, e, n) {
    var r = this.remove(e), s = r.content.slice(), o = r.find(t);
    return s.splice(o == -1 ? s.length : o, 0, e, n), new De(s);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(t) {
    for (var e = 0; e < this.content.length; e += 2)
      t(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(t) {
    return t = De.from(t), t.size ? new De(t.content.concat(this.subtract(t).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(t) {
    return t = De.from(t), t.size ? new De(this.subtract(t).content.concat(t.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(t) {
    var e = this;
    t = De.from(t);
    for (var n = 0; n < t.content.length; n += 2)
      e = e.remove(t.content[n]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var t = {};
    return this.forEach(function(e, n) {
      t[e] = n;
    }), t;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
De.from = function(t) {
  if (t instanceof De) return t;
  var e = [];
  if (t) for (var n in t) e.push(n, t[n]);
  return new De(e);
};
function Lc(t, e, n) {
  for (let r = 0; ; r++) {
    if (r == t.childCount || r == e.childCount)
      return t.childCount == e.childCount ? null : n;
    let s = t.child(r), o = e.child(r);
    if (s == o) {
      n += s.nodeSize;
      continue;
    }
    if (!s.sameMarkup(o))
      return n;
    if (s.isText && s.text != o.text) {
      for (let i = 0; s.text[i] == o.text[i]; i++)
        n++;
      return n;
    }
    if (s.content.size || o.content.size) {
      let i = Lc(s.content, o.content, n + 1);
      if (i != null)
        return i;
    }
    n += s.nodeSize;
  }
}
function Pc(t, e, n, r) {
  for (let s = t.childCount, o = e.childCount; ; ) {
    if (s == 0 || o == 0)
      return s == o ? null : { a: n, b: r };
    let i = t.child(--s), a = e.child(--o), c = i.nodeSize;
    if (i == a) {
      n -= c, r -= c;
      continue;
    }
    if (!i.sameMarkup(a))
      return { a: n, b: r };
    if (i.isText && i.text != a.text) {
      let d = 0, u = Math.min(i.text.length, a.text.length);
      for (; d < u && i.text[i.text.length - d - 1] == a.text[a.text.length - d - 1]; )
        d++, n--, r--;
      return { a: n, b: r };
    }
    if (i.content.size || a.content.size) {
      let d = Pc(i.content, a.content, n - 1, r - 1);
      if (d)
        return d;
    }
    n -= c, r -= c;
  }
}
class H {
  /**
  @internal
  */
  constructor(e, n) {
    if (this.content = e, this.size = n || 0, n == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, n, r, s = 0, o) {
    for (let i = 0, a = 0; a < n; i++) {
      let c = this.content[i], d = a + c.nodeSize;
      if (d > e && r(c, s + a, o || null, i) !== !1 && c.content.size) {
        let u = a + 1;
        c.nodesBetween(Math.max(0, e - u), Math.min(c.content.size, n - u), r, s + u);
      }
      a = d;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, n, r, s) {
    let o = "", i = !0;
    return this.nodesBetween(e, n, (a, c) => {
      let d = a.isText ? a.text.slice(Math.max(e, c) - c, n - c) : a.isLeaf ? s ? typeof s == "function" ? s(a) : s : a.type.spec.leafText ? a.type.spec.leafText(a) : "" : "";
      a.isBlock && (a.isLeaf && d || a.isTextblock) && r && (i ? i = !1 : o += r), o += d;
    }, 0), o;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let n = this.lastChild, r = e.firstChild, s = this.content.slice(), o = 0;
    for (n.isText && n.sameMarkup(r) && (s[s.length - 1] = n.withText(n.text + r.text), o = 1); o < e.content.length; o++)
      s.push(e.content[o]);
    return new H(s, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, n = this.size) {
    if (e == 0 && n == this.size)
      return this;
    let r = [], s = 0;
    if (n > e)
      for (let o = 0, i = 0; i < n; o++) {
        let a = this.content[o], c = i + a.nodeSize;
        c > e && ((i < e || c > n) && (a.isText ? a = a.cut(Math.max(0, e - i), Math.min(a.text.length, n - i)) : a = a.cut(Math.max(0, e - i - 1), Math.min(a.content.size, n - i - 1))), r.push(a), s += a.nodeSize), i = c;
      }
    return new H(r, s);
  }
  /**
  @internal
  */
  cutByIndex(e, n) {
    return e == n ? H.empty : e == 0 && n == this.content.length ? this : new H(this.content.slice(e, n));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, n) {
    let r = this.content[e];
    if (r == n)
      return this;
    let s = this.content.slice(), o = this.size + n.nodeSize - r.nodeSize;
    return s[e] = n, new H(s, o);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new H([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new H(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let n = 0; n < this.content.length; n++)
      if (!this.content[n].eq(e.content[n]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let n = this.content[e];
    if (!n)
      throw new RangeError("Index " + e + " out of range for " + this);
    return n;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let n = 0, r = 0; n < this.content.length; n++) {
      let s = this.content[n];
      e(s, r, n), r += s.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, n = 0) {
    return Lc(this, e, n);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, n = this.size, r = e.size) {
    return Pc(this, e, n, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return Fr(0, e);
    if (e == this.size)
      return Fr(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let n = 0, r = 0; ; n++) {
      let s = this.child(n), o = r + s.nodeSize;
      if (o >= e)
        return o == e ? Fr(n + 1, o) : Fr(n, r);
      r = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      return H.empty;
    if (!Array.isArray(n))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new H(n.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return H.empty;
    let n, r = 0;
    for (let s = 0; s < e.length; s++) {
      let o = e[s];
      r += o.nodeSize, s && o.isText && e[s - 1].sameMarkup(o) ? (n || (n = e.slice(0, s)), n[n.length - 1] = o.withText(n[n.length - 1].text + o.text)) : n && n.push(o);
    }
    return new H(n || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return H.empty;
    if (e instanceof H)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new H([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
H.empty = new H([], 0);
const ns = { index: 0, offset: 0 };
function Fr(t, e) {
  return ns.index = t, ns.offset = e, ns;
}
function ao(t, e) {
  if (t === e)
    return !0;
  if (!(t && typeof t == "object") || !(e && typeof e == "object"))
    return !1;
  let n = Array.isArray(t);
  if (Array.isArray(e) != n)
    return !1;
  if (n) {
    if (t.length != e.length)
      return !1;
    for (let r = 0; r < t.length; r++)
      if (!ao(t[r], e[r]))
        return !1;
  } else {
    for (let r in t)
      if (!(r in e) || !ao(t[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in t))
        return !1;
  }
  return !0;
}
class ce {
  /**
  @internal
  */
  constructor(e, n) {
    this.type = e, this.attrs = n;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let n, r = !1;
    for (let s = 0; s < e.length; s++) {
      let o = e[s];
      if (this.eq(o))
        return e;
      if (this.type.excludes(o.type))
        n || (n = e.slice(0, s));
      else {
        if (o.type.excludes(this.type))
          return e;
        !r && o.type.rank > this.type.rank && (n || (n = e.slice(0, s)), n.push(this), r = !0), n && n.push(o);
      }
    }
    return n || (n = e.slice()), r || n.push(this), n;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let n = 0; n < e.length; n++)
      if (this.eq(e[n]))
        return e.slice(0, n).concat(e.slice(n + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let n = 0; n < e.length; n++)
      if (this.eq(e[n]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && ao(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, n) {
    if (!n)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[n.type];
    if (!r)
      throw new RangeError(`There is no mark type ${n.type} in this schema`);
    let s = r.create(n.attrs);
    return r.checkAttrs(s.attrs), s;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, n) {
    if (e == n)
      return !0;
    if (e.length != n.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(n[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return ce.none;
    if (e instanceof ce)
      return [e];
    let n = e.slice();
    return n.sort((r, s) => r.type.rank - s.type.rank), n;
  }
}
ce.none = [];
class lo extends Error {
}
class X {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, n, r) {
    this.content = e, this.openStart = n, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, n) {
    let r = Dc(this.content, e + this.openStart, n);
    return r && new X(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, n) {
    return new X(Oc(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      return X.empty;
    let r = n.openStart || 0, s = n.openEnd || 0;
    if (typeof r != "number" || typeof s != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new X(H.fromJSON(e, n.content), r, s);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, n = !0) {
    let r = 0, s = 0;
    for (let o = e.firstChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.firstChild)
      r++;
    for (let o = e.lastChild; o && !o.isLeaf && (n || !o.type.spec.isolating); o = o.lastChild)
      s++;
    return new X(e, r, s);
  }
}
X.empty = new X(H.empty, 0, 0);
function Oc(t, e, n) {
  let { index: r, offset: s } = t.findIndex(e), o = t.maybeChild(r), { index: i, offset: a } = t.findIndex(n);
  if (s == e || o.isText) {
    if (a != n && !t.child(i).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(n));
  }
  if (r != i)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(r, o.copy(Oc(o.content, e - s - 1, n - s - 1)));
}
function Dc(t, e, n, r) {
  let { index: s, offset: o } = t.findIndex(e), i = t.maybeChild(s);
  if (o == e || i.isText)
    return r && !r.canReplace(s, s, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
  let a = Dc(i.content, e - o - 1, n, i);
  return a && t.replaceChild(s, i.copy(a));
}
function xg(t, e, n) {
  if (n.openStart > t.depth)
    throw new lo("Inserted content deeper than insertion position");
  if (t.depth - n.openStart != e.depth - n.openEnd)
    throw new lo("Inconsistent open depths");
  return Mc(t, e, n, 0);
}
function Mc(t, e, n, r) {
  let s = t.index(r), o = t.node(r);
  if (s == e.index(r) && r < t.depth - n.openStart) {
    let i = Mc(t, e, n, r + 1);
    return o.copy(o.content.replaceChild(s, i));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
      let i = t.parent, a = i.content;
      return ln(i, a.cut(0, t.parentOffset).append(n.content).append(a.cut(e.parentOffset)));
    } else {
      let { start: i, end: a } = vg(n, t);
      return ln(o, Fc(t, i, a, e, r));
    }
  else return ln(o, co(t, e, r));
}
function $c(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new lo("Cannot join " + e.type.name + " onto " + t.type.name);
}
function Ss(t, e, n) {
  let r = t.node(n);
  return $c(r, e.node(n)), r;
}
function an(t, e) {
  let n = e.length - 1;
  n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t);
}
function lr(t, e, n, r) {
  let s = (e || t).node(n), o = 0, i = e ? e.index(n) : s.childCount;
  t && (o = t.index(n), t.depth > n ? o++ : t.textOffset && (an(t.nodeAfter, r), o++));
  for (let a = o; a < i; a++)
    an(s.child(a), r);
  e && e.depth == n && e.textOffset && an(e.nodeBefore, r);
}
function ln(t, e) {
  return t.type.checkContent(e), t.copy(e);
}
function Fc(t, e, n, r, s) {
  let o = t.depth > s && Ss(t, e, s + 1), i = r.depth > s && Ss(n, r, s + 1), a = [];
  return lr(null, t, s, a), o && i && e.index(s) == n.index(s) ? ($c(o, i), an(ln(o, Fc(t, e, n, r, s + 1)), a)) : (o && an(ln(o, co(t, e, s + 1)), a), lr(e, n, s, a), i && an(ln(i, co(n, r, s + 1)), a)), lr(r, null, s, a), new H(a);
}
function co(t, e, n) {
  let r = [];
  if (lr(null, t, n, r), t.depth > n) {
    let s = Ss(t, e, n + 1);
    an(ln(s, co(t, e, n + 1)), r);
  }
  return lr(e, null, n, r), new H(r);
}
function vg(t, e) {
  let n = e.depth - t.openStart, s = e.node(n).copy(t.content);
  for (let o = n - 1; o >= 0; o--)
    s = e.node(o).copy(H.from(s));
  return {
    start: s.resolveNoCache(t.openStart + n),
    end: s.resolveNoCache(s.content.size - t.openEnd - n)
  };
}
class mr {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.pos = e, this.path = n, this.parentOffset = r, this.depth = n.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, n = this.index(this.depth);
    if (n == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], s = e.child(n);
    return r ? e.child(n).cut(r) : s;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), n = this.pos - this.path[this.path.length - 1];
    return n ? this.parent.child(e).cut(0, n) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, n) {
    n = this.resolveDepth(n);
    let r = this.path[n * 3], s = n == 0 ? 0 : this.path[n * 3 - 1] + 1;
    for (let o = 0; o < e; o++)
      s += r.child(o).nodeSize;
    return s;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, n = this.index();
    if (e.content.size == 0)
      return ce.none;
    if (this.textOffset)
      return e.child(n).marks;
    let r = e.maybeChild(n - 1), s = e.maybeChild(n);
    if (!r) {
      let a = r;
      r = s, s = a;
    }
    let o = r.marks;
    for (var i = 0; i < o.length; i++)
      o[i].type.spec.inclusive === !1 && (!s || !o[i].isInSet(s.marks)) && (o = o[i--].removeFromSet(o));
    return o;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let n = this.parent.maybeChild(this.index());
    if (!n || !n.isInline)
      return null;
    let r = n.marks, s = e.parent.maybeChild(e.index());
    for (var o = 0; o < r.length; o++)
      r[o].type.spec.inclusive === !1 && (!s || !r[o].isInSet(s.marks)) && (r = r[o--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let n = this.depth; n > 0; n--)
      if (this.start(n) <= e && this.end(n) >= e)
        return n;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, n) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!n || n(this.node(r))))
        return new uo(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let n = 1; n <= this.depth; n++)
      e += (e ? "/" : "") + this.node(n).type.name + "_" + this.index(n - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, n) {
    if (!(n >= 0 && n <= e.content.size))
      throw new RangeError("Position " + n + " out of range");
    let r = [], s = 0, o = n;
    for (let i = e; ; ) {
      let { index: a, offset: c } = i.content.findIndex(o), d = o - c;
      if (r.push(i, a, s + c), !d || (i = i.child(a), i.isText))
        break;
      o = d - 1, s += c + 1;
    }
    return new mr(n, r, o);
  }
  /**
  @internal
  */
  static resolveCached(e, n) {
    let r = fa.get(e);
    if (r)
      for (let o = 0; o < r.elts.length; o++) {
        let i = r.elts[o];
        if (i.pos == n)
          return i;
      }
    else
      fa.set(e, r = new wg());
    let s = r.elts[r.i] = mr.resolve(e, n);
    return r.i = (r.i + 1) % kg, s;
  }
}
class wg {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const kg = 12, fa = /* @__PURE__ */ new WeakMap();
class uo {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const Cg = /* @__PURE__ */ Object.create(null);
let cn = class Es {
  /**
  @internal
  */
  constructor(e, n, r, s = ce.none) {
    this.type = e, this.attrs = n, this.marks = s, this.content = r || H.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, n, r, s = 0) {
    this.content.nodesBetween(e, n, r, s, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
  */
  textBetween(e, n, r, s) {
    return this.content.textBetween(e, n, r, s);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, n, r) {
    return this.type == e && ao(this.attrs, n || e.defaultAttrs || Cg) && ce.sameSet(this.marks, r || ce.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Es(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Es(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, n = this.content.size) {
    return e == 0 && n == this.content.size ? this : this.copy(this.content.cut(e, n));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, n = this.content.size, r = !1) {
    if (e == n)
      return X.empty;
    let s = this.resolve(e), o = this.resolve(n), i = r ? 0 : s.sharedDepth(n), a = s.start(i), d = s.node(i).content.cut(s.pos - a, o.pos - a);
    return new X(d, s.depth - i, o.depth - i);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, n, r) {
    return xg(this.resolve(e), this.resolve(n), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let n = this; ; ) {
      let { index: r, offset: s } = n.content.findIndex(e);
      if (n = n.maybeChild(r), !n)
        return null;
      if (s == e || n.isText)
        return n;
      e -= s + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: n, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(n), index: n, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: n, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(n), index: n, offset: r };
    let s = this.content.child(n - 1);
    return { node: s, index: n - 1, offset: r - s.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return mr.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return mr.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, n, r) {
    let s = !1;
    return n > e && this.nodesBetween(e, n, (o) => (r.isInSet(o.marks) && (s = !0), !s)), s;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), zc(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let n = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!n)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return n;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, n, r = H.empty, s = 0, o = r.childCount) {
    let i = this.contentMatchAt(e).matchFragment(r, s, o), a = i && i.matchFragment(this.content, n);
    if (!a || !a.validEnd)
      return !1;
    for (let c = s; c < o; c++)
      if (!this.type.allowsMarks(r.child(c).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, n, r, s) {
    if (s && !this.type.allowsMarks(s))
      return !1;
    let o = this.contentMatchAt(e).matchType(r), i = o && o.matchFragment(this.content, n);
    return i ? i.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = ce.none;
    for (let n = 0; n < this.marks.length; n++) {
      let r = this.marks[n];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!ce.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((n) => n.type.name)}`);
    this.content.forEach((n) => n.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((n) => n.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r;
    if (n.marks) {
      if (!Array.isArray(n.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = n.marks.map(e.markFromJSON);
    }
    if (n.type == "text") {
      if (typeof n.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(n.text, r);
    }
    let s = H.fromJSON(e, n.content), o = e.nodeType(n.type).create(n.attrs, s, r);
    return o.type.checkAttrs(o.attrs), o;
  }
};
cn.prototype.text = void 0;
class po extends cn {
  /**
  @internal
  */
  constructor(e, n, r, s) {
    if (super(e, n, null, s), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : zc(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, n) {
    return this.text.slice(e, n);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new po(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new po(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, n = this.text.length) {
    return e == 0 && n == this.text.length ? this : this.withText(this.text.slice(e, n));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function zc(t, e) {
  for (let n = t.length - 1; n >= 0; n--)
    e = t[n].type.name + "(" + e + ")";
  return e;
}
class gn {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, n) {
    let r = new Ng(e, n);
    if (r.next == null)
      return gn.empty;
    let s = Hc(r);
    r.next && r.err("Unexpected trailing text");
    let o = Ig(Bg(s));
    return Rg(o, r), o;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let n = 0; n < this.next.length; n++)
      if (this.next[n].type == e)
        return this.next[n].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, n = 0, r = e.childCount) {
    let s = this;
    for (let o = n; s && o < r; o++)
      s = s.matchType(e.child(o).type);
    return s;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: n } = this.next[e];
      if (!(n.isText || n.hasRequiredAttrs()))
        return n;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let n = 0; n < this.next.length; n++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[n].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, n = !1, r = 0) {
    let s = [this];
    function o(i, a) {
      let c = i.matchFragment(e, r);
      if (c && (!n || c.validEnd))
        return H.from(a.map((d) => d.createAndFill()));
      for (let d = 0; d < i.next.length; d++) {
        let { type: u, next: p } = i.next[d];
        if (!(u.isText || u.hasRequiredAttrs()) && s.indexOf(p) == -1) {
          s.push(p);
          let f = o(p, a.concat(u));
          if (f)
            return f;
        }
      }
      return null;
    }
    return o(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let n = this.computeWrapping(e);
    return this.wrapCache.push(e, n), n;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let n = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let s = r.shift(), o = s.match;
      if (o.matchType(e)) {
        let i = [];
        for (let a = s; a.type; a = a.via)
          i.push(a.type);
        return i.reverse();
      }
      for (let i = 0; i < o.next.length; i++) {
        let { type: a, next: c } = o.next[i];
        !a.isLeaf && !a.hasRequiredAttrs() && !(a.name in n) && (!s.type || c.validEnd) && (r.push({ match: a.contentMatch, type: a, via: s }), n[a.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function n(r) {
      e.push(r);
      for (let s = 0; s < r.next.length; s++)
        e.indexOf(r.next[s].next) == -1 && n(r.next[s].next);
    }
    return n(this), e.map((r, s) => {
      let o = s + (r.validEnd ? "*" : " ") + " ";
      for (let i = 0; i < r.next.length; i++)
        o += (i ? ", " : "") + r.next[i].type.name + "->" + e.indexOf(r.next[i].next);
      return o;
    }).join(`
`);
  }
}
gn.empty = new gn(!0);
class Ng {
  constructor(e, n) {
    this.string = e, this.nodeTypes = n, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function Hc(t) {
  let e = [];
  do
    e.push(Sg(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function Sg(t) {
  let e = [];
  do
    e.push(Eg(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function Eg(t) {
  let e = Tg(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = _g(t, e);
    else
      break;
  return e;
}
function ha(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function _g(t, e) {
  let n = ha(t), r = n;
  return t.eat(",") && (t.next != "}" ? r = ha(t) : r = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: n, max: r, expr: e };
}
function Ag(t, e) {
  let n = t.nodeTypes, r = n[e];
  if (r)
    return [r];
  let s = [];
  for (let o in n) {
    let i = n[o];
    i.isInGroup(e) && s.push(i);
  }
  return s.length == 0 && t.err("No node type or group '" + e + "' found"), s;
}
function Tg(t) {
  if (t.eat("(")) {
    let e = Hc(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = Ag(t, t.next).map((n) => (t.inline == null ? t.inline = n.isInline : t.inline != n.isInline && t.err("Mixing inline and block content"), { type: "name", value: n }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function Bg(t) {
  let e = [[]];
  return s(o(t, 0), n()), e;
  function n() {
    return e.push([]) - 1;
  }
  function r(i, a, c) {
    let d = { term: c, to: a };
    return e[i].push(d), d;
  }
  function s(i, a) {
    i.forEach((c) => c.to = a);
  }
  function o(i, a) {
    if (i.type == "choice")
      return i.exprs.reduce((c, d) => c.concat(o(d, a)), []);
    if (i.type == "seq")
      for (let c = 0; ; c++) {
        let d = o(i.exprs[c], a);
        if (c == i.exprs.length - 1)
          return d;
        s(d, a = n());
      }
    else if (i.type == "star") {
      let c = n();
      return r(a, c), s(o(i.expr, c), c), [r(c)];
    } else if (i.type == "plus") {
      let c = n();
      return s(o(i.expr, a), c), s(o(i.expr, c), c), [r(c)];
    } else {
      if (i.type == "opt")
        return [r(a)].concat(o(i.expr, a));
      if (i.type == "range") {
        let c = a;
        for (let d = 0; d < i.min; d++) {
          let u = n();
          s(o(i.expr, c), u), c = u;
        }
        if (i.max == -1)
          s(o(i.expr, c), c);
        else
          for (let d = i.min; d < i.max; d++) {
            let u = n();
            r(c, u), s(o(i.expr, c), u), c = u;
          }
        return [r(c)];
      } else {
        if (i.type == "name")
          return [r(a, void 0, i.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function Vc(t, e) {
  return e - t;
}
function ma(t, e) {
  let n = [];
  return r(e), n.sort(Vc);
  function r(s) {
    let o = t[s];
    if (o.length == 1 && !o[0].term)
      return r(o[0].to);
    n.push(s);
    for (let i = 0; i < o.length; i++) {
      let { term: a, to: c } = o[i];
      !a && n.indexOf(c) == -1 && r(c);
    }
  }
}
function Ig(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return n(ma(t, 0));
  function n(r) {
    let s = [];
    r.forEach((i) => {
      t[i].forEach(({ term: a, to: c }) => {
        if (!a)
          return;
        let d;
        for (let u = 0; u < s.length; u++)
          s[u][0] == a && (d = s[u][1]);
        ma(t, c).forEach((u) => {
          d || s.push([a, d = []]), d.indexOf(u) == -1 && d.push(u);
        });
      });
    });
    let o = e[r.join(",")] = new gn(r.indexOf(t.length - 1) > -1);
    for (let i = 0; i < s.length; i++) {
      let a = s[i][1].sort(Vc);
      o.next.push({ type: s[i][0], next: e[a.join(",")] || n(a) });
    }
    return o;
  }
}
function Rg(t, e) {
  for (let n = 0, r = [t]; n < r.length; n++) {
    let s = r[n], o = !s.validEnd, i = [];
    for (let a = 0; a < s.next.length; a++) {
      let { type: c, next: d } = s.next[a];
      i.push(c.name), o && !(c.isText || c.hasRequiredAttrs()) && (o = !1), r.indexOf(d) == -1 && r.push(d);
    }
    o && e.err("Only non-generatable nodes (" + i.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function jc(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let r = t[n];
    if (!r.hasDefault)
      return null;
    e[n] = r.default;
  }
  return e;
}
function Wc(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let r in t) {
    let s = e && e[r];
    if (s === void 0) {
      let o = t[r];
      if (o.hasDefault)
        s = o.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    n[r] = s;
  }
  return n;
}
function Gc(t, e, n, r) {
  for (let s in e)
    if (!(s in t))
      throw new RangeError(`Unsupported attribute ${s} for ${n} of type ${s}`);
  for (let s in t) {
    let o = t[s];
    o.validate && o.validate(e[s]);
  }
}
function Uc(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      n[r] = new Pg(t, r, e[r]);
  return n;
}
class fo {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.name = e, this.schema = n, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = Uc(e, r.attrs), this.defaultAttrs = jc(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == gn.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : Wc(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, n, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new cn(this, this.computeAttrs(e), H.from(n), ce.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, n, r) {
    return n = H.from(n), this.checkContent(n), new cn(this, this.computeAttrs(e), n, ce.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, n, r) {
    if (e = this.computeAttrs(e), n = H.from(n), n.size) {
      let i = this.contentMatch.fillBefore(n);
      if (!i)
        return null;
      n = i.append(n);
    }
    let s = this.contentMatch.matchFragment(n), o = s && s.fillBefore(H.empty, !0);
    return o ? new cn(this, e, n.append(o), ce.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let n = this.contentMatch.matchFragment(e);
    if (!n || !n.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Gc(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let n = 0; n < e.length; n++)
      if (!this.allowsMarkType(e[n].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let n;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? n && n.push(e[r]) : n || (n = e.slice(0, r));
    return n ? n.length ? n : ce.none : e;
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((o, i) => r[o] = new fo(o, n, i));
    let s = n.spec.topNode || "doc";
    if (!r[s])
      throw new RangeError("Schema is missing its top node type ('" + s + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let o in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
}
function Lg(t, e, n) {
  let r = n.split("|");
  return (s) => {
    let o = s === null ? "null" : typeof s;
    if (r.indexOf(o) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${t}, got ${o}`);
  };
}
class Pg {
  constructor(e, n, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? Lg(e, n, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class wi {
  /**
  @internal
  */
  constructor(e, n, r, s) {
    this.name = e, this.rank = n, this.schema = r, this.spec = s, this.attrs = Uc(e, s.attrs), this.excluded = null;
    let o = jc(this.attrs);
    this.instance = o ? new ce(this, o) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new ce(this, Wc(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null), s = 0;
    return e.forEach((o, i) => r[o] = new wi(o, s++, n, i)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var n = 0; n < e.length; n++)
      e[n].type == this && (e = e.slice(0, n).concat(e.slice(n + 1)), n--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let n = 0; n < e.length; n++)
      if (e[n].type == this)
        return e[n];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Gc(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class Og {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let n = this.spec = {};
    for (let s in e)
      n[s] = e[s];
    n.nodes = De.from(e.nodes), n.marks = De.from(e.marks || {}), this.nodes = fo.compile(this.spec.nodes, this), this.marks = wi.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in this.nodes) {
      if (s in this.marks)
        throw new RangeError(s + " can not be both a node and a mark");
      let o = this.nodes[s], i = o.spec.content || "", a = o.spec.marks;
      if (o.contentMatch = r[i] || (r[i] = gn.parse(i, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!o.isInline || !o.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = o;
      }
      o.markSet = a == "_" ? null : a ? ga(this, a.split(" ")) : a == "" || !o.inlineContent ? [] : null;
    }
    for (let s in this.marks) {
      let o = this.marks[s], i = o.spec.excludes;
      o.excluded = i == null ? [o] : i == "" ? [] : ga(this, i.split(" "));
    }
    this.nodeFromJSON = (s) => cn.fromJSON(this, s), this.markFromJSON = (s) => ce.fromJSON(this, s), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, n = null, r, s) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof fo) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(n, r, s);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, n) {
    let r = this.nodes.text;
    return new po(r, r.defaultAttrs, e, ce.setFrom(n));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, n) {
    return typeof e == "string" && (e = this.marks[e]), e.create(n);
  }
  /**
  @internal
  */
  nodeType(e) {
    let n = this.nodes[e];
    if (!n)
      throw new RangeError("Unknown node type: " + e);
    return n;
  }
}
function ga(t, e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r], o = t.marks[s], i = o;
    if (o)
      n.push(o);
    else
      for (let a in t.marks) {
        let c = t.marks[a];
        (s == "_" || c.spec.group && c.spec.group.split(" ").indexOf(s) > -1) && n.push(i = c);
      }
    if (!i)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return n;
}
function Dg(t) {
  return t.tag != null;
}
function Mg(t) {
  return t.style != null;
}
class On {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, n) {
    this.schema = e, this.rules = n, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    n.forEach((s) => {
      if (Dg(s))
        this.tags.push(s);
      else if (Mg(s)) {
        let o = /[^=]*/.exec(s.style)[0];
        r.indexOf(o) < 0 && r.push(o), this.styles.push(s);
      }
    }), this.normalizeLists = !this.tags.some((s) => {
      if (!/^(ul|ol)\b/.test(s.tag) || !s.node)
        return !1;
      let o = e.nodes[s.node];
      return o.contentMatch.matchType(o);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, n = {}) {
    let r = new ya(this, n, !1);
    return r.addAll(e, ce.none, n.from, n.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, n = {}) {
    let r = new ya(this, n, !0);
    return r.addAll(e, ce.none, n.from, n.to), X.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, n, r) {
    for (let s = r ? this.tags.indexOf(r) + 1 : 0; s < this.tags.length; s++) {
      let o = this.tags[s];
      if (zg(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || n.matchesContext(o.context))) {
        if (o.getAttrs) {
          let i = o.getAttrs(e);
          if (i === !1)
            continue;
          o.attrs = i || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, n, r, s) {
    for (let o = s ? this.styles.indexOf(s) + 1 : 0; o < this.styles.length; o++) {
      let i = this.styles[o], a = i.style;
      if (!(a.indexOf(e) != 0 || i.context && !r.matchesContext(i.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      a.length > e.length && (a.charCodeAt(e.length) != 61 || a.slice(e.length + 1) != n))) {
        if (i.getAttrs) {
          let c = i.getAttrs(n);
          if (c === !1)
            continue;
          i.attrs = c || void 0;
        }
        return i;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let n = [];
    function r(s) {
      let o = s.priority == null ? 50 : s.priority, i = 0;
      for (; i < n.length; i++) {
        let a = n[i];
        if ((a.priority == null ? 50 : a.priority) < o)
          break;
      }
      n.splice(i, 0, s);
    }
    for (let s in e.marks) {
      let o = e.marks[s].spec.parseDOM;
      o && o.forEach((i) => {
        r(i = xa(i)), i.mark || i.ignore || i.clearMark || (i.mark = s);
      });
    }
    for (let s in e.nodes) {
      let o = e.nodes[s].spec.parseDOM;
      o && o.forEach((i) => {
        r(i = xa(i)), i.node || i.ignore || i.mark || (i.node = s);
      });
    }
    return n;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new On(e, On.schemaRules(e)));
  }
}
const Kc = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, $g = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, Jc = { ol: !0, ul: !0 }, gr = 1, _s = 2, cr = 4;
function ba(t, e, n) {
  return e != null ? (e ? gr : 0) | (e === "full" ? _s : 0) : t && t.whitespace == "pre" ? gr | _s : n & ~cr;
}
class zr {
  constructor(e, n, r, s, o, i) {
    this.type = e, this.attrs = n, this.marks = r, this.solid = s, this.options = i, this.content = [], this.activeMarks = ce.none, this.match = o || (i & cr ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let n = this.type.contentMatch.fillBefore(H.from(e));
      if (n)
        this.match = this.type.contentMatch.matchFragment(n);
      else {
        let r = this.type.contentMatch, s;
        return (s = r.findWrapping(e.type)) ? (this.match = r, s) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & gr)) {
      let r = this.content[this.content.length - 1], s;
      if (r && r.isText && (s = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let o = r;
        r.text.length == s[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - s[0].length));
      }
    }
    let n = H.from(this.content);
    return !e && this.match && (n = n.append(this.match.fillBefore(H.empty, !0))), this.type ? this.type.create(this.attrs, n, this.marks) : n;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Kc.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class ya {
  constructor(e, n, r) {
    this.parser = e, this.options = n, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let s = n.topNode, o, i = ba(null, n.preserveWhitespace, 0) | (r ? cr : 0);
    s ? o = new zr(s.type, s.attrs, ce.none, !0, n.topMatch || s.type.contentMatch, i) : r ? o = new zr(null, null, ce.none, !0, null, i) : o = new zr(e.schema.topNodeType, null, ce.none, !0, null, i), this.nodes = [o], this.find = n.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, n) {
    e.nodeType == 3 ? this.addTextNode(e, n) : e.nodeType == 1 && this.addElement(e, n);
  }
  addTextNode(e, n) {
    let r = e.nodeValue, s = this.top, o = s.options & _s ? "full" : this.localPreserveWS || (s.options & gr) > 0, { schema: i } = this.parser;
    if (o === "full" || s.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (o)
        if (o === "full")
          r = r.replace(/\r\n?/g, `
`);
        else if (i.linebreakReplacement && /[\r\n]/.test(r) && this.top.findWrapping(i.linebreakReplacement.create())) {
          let a = r.split(/\r?\n|\r/);
          for (let c = 0; c < a.length; c++)
            c && this.insertNode(i.linebreakReplacement.create(), n, !0), a[c] && this.insertNode(i.text(a[c]), n, !/\S/.test(a[c]));
          r = "";
        } else
          r = r.replace(/\r?\n|\r/g, " ");
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let a = s.content[s.content.length - 1], c = e.previousSibling;
        (!a || c && c.nodeName == "BR" || a.isText && /[ \t\r\n\u000c]$/.test(a.text)) && (r = r.slice(1));
      }
      r && this.insertNode(i.text(r), n, !/\S/.test(r)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, n, r) {
    let s = this.localPreserveWS, o = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let i = e.nodeName.toLowerCase(), a;
    Jc.hasOwnProperty(i) && this.parser.normalizeLists && Fg(e);
    let c = this.options.ruleFromNode && this.options.ruleFromNode(e) || (a = this.parser.matchTag(e, this, r));
    e: if (c ? c.ignore : $g.hasOwnProperty(i))
      this.findInside(e), this.ignoreFallback(e, n);
    else if (!c || c.skip || c.closeParent) {
      c && c.closeParent ? this.open = Math.max(0, this.open - 1) : c && c.skip.nodeType && (e = c.skip);
      let d, u = this.needsBlock;
      if (Kc.hasOwnProperty(i))
        o.content.length && o.content[0].isInline && this.open && (this.open--, o = this.top), d = !0, o.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, n);
        break e;
      }
      let p = c && c.skip ? n : this.readStyles(e, n);
      p && this.addAll(e, p), d && this.sync(o), this.needsBlock = u;
    } else {
      let d = this.readStyles(e, n);
      d && this.addElementByRule(e, c, d, c.consuming === !1 ? a : void 0);
    }
    this.localPreserveWS = s;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, n) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), n);
  }
  // Called for ignored nodes
  ignoreFallback(e, n) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), n, !0);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, n) {
    let r = e.style;
    if (r && r.length)
      for (let s = 0; s < this.parser.matchedStyles.length; s++) {
        let o = this.parser.matchedStyles[s], i = r.getPropertyValue(o);
        if (i)
          for (let a = void 0; ; ) {
            let c = this.parser.matchStyle(o, i, this, a);
            if (!c)
              break;
            if (c.ignore)
              return null;
            if (c.clearMark ? n = n.filter((d) => !c.clearMark(d)) : n = n.concat(this.parser.schema.marks[c.mark].create(c.attrs)), c.consuming === !1)
              a = c;
            else
              break;
          }
      }
    return n;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, n, r, s) {
    let o, i;
    if (n.node)
      if (i = this.parser.schema.nodes[n.node], i.isLeaf)
        this.insertNode(i.create(n.attrs), r, e.nodeName == "BR") || this.leafFallback(e, r);
      else {
        let c = this.enter(i, n.attrs || null, r, n.preserveWhitespace);
        c && (o = !0, r = c);
      }
    else {
      let c = this.parser.schema.marks[n.mark];
      r = r.concat(c.create(n.attrs));
    }
    let a = this.top;
    if (i && i.isLeaf)
      this.findInside(e);
    else if (s)
      this.addElement(e, r, s);
    else if (n.getContent)
      this.findInside(e), n.getContent(e, this.parser.schema).forEach((c) => this.insertNode(c, r, !1));
    else {
      let c = e;
      typeof n.contentElement == "string" ? c = e.querySelector(n.contentElement) : typeof n.contentElement == "function" ? c = n.contentElement(e) : n.contentElement && (c = n.contentElement), this.findAround(e, c, !0), this.addAll(c, r), this.findAround(e, c, !1);
    }
    o && this.sync(a) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, n, r, s) {
    let o = r || 0;
    for (let i = r ? e.childNodes[r] : e.firstChild, a = s == null ? null : e.childNodes[s]; i != a; i = i.nextSibling, ++o)
      this.findAtPoint(e, o), this.addDOM(i, n);
    this.findAtPoint(e, o);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, n, r) {
    let s, o;
    for (let i = this.open, a = 0; i >= 0; i--) {
      let c = this.nodes[i], d = c.findWrapping(e);
      if (d && (!s || s.length > d.length + a) && (s = d, o = c, !d.length))
        break;
      if (c.solid) {
        if (r)
          break;
        a += 2;
      }
    }
    if (!s)
      return null;
    this.sync(o);
    for (let i = 0; i < s.length; i++)
      n = this.enterInner(s[i], null, n, !1);
    return n;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, n, r) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let o = this.textblockFromContext();
      o && (n = this.enterInner(o, null, n));
    }
    let s = this.findPlace(e, n, r);
    if (s) {
      this.closeExtra();
      let o = this.top;
      o.match && (o.match = o.match.matchType(e.type));
      let i = ce.none;
      for (let a of s.concat(e.marks))
        (o.type ? o.type.allowsMarkType(a.type) : va(a.type, e.type)) && (i = a.addToSet(i));
      return o.content.push(e.mark(i)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, n, r, s) {
    let o = this.findPlace(e.create(n), r, !1);
    return o && (o = this.enterInner(e, n, r, !0, s)), o;
  }
  // Open a node of the given type
  enterInner(e, n, r, s = !1, o) {
    this.closeExtra();
    let i = this.top;
    i.match = i.match && i.match.matchType(e);
    let a = ba(e, o, i.options);
    i.options & cr && i.content.length == 0 && (a |= cr);
    let c = ce.none;
    return r = r.filter((d) => (i.type ? i.type.allowsMarkType(d.type) : va(d.type, e)) ? (c = d.addToSet(c), !1) : !0), this.nodes.push(new zr(e, n, c, s, null, a)), this.open++, r;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let n = this.nodes.length - 1;
    if (n > this.open) {
      for (; n > this.open; n--)
        this.nodes[n - 1].content.push(this.nodes[n].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let n = this.open; n >= 0; n--) {
      if (this.nodes[n] == e)
        return this.open = n, !0;
      this.localPreserveWS && (this.nodes[n].options |= gr);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let n = this.open; n >= 0; n--) {
      let r = this.nodes[n].content;
      for (let s = r.length - 1; s >= 0; s--)
        e += r[s].nodeSize;
      n && e++;
    }
    return e;
  }
  findAtPoint(e, n) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == n && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].pos == null && e.nodeType == 1 && e.contains(this.find[n].node) && (this.find[n].pos = this.currentPos);
  }
  findAround(e, n, r) {
    if (e != n && this.find)
      for (let s = 0; s < this.find.length; s++)
        this.find[s].pos == null && e.nodeType == 1 && e.contains(this.find[s].node) && n.compareDocumentPosition(this.find[s].node) & (r ? 2 : 4) && (this.find[s].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].node == e && (this.find[n].pos = this.currentPos - (e.nodeValue.length - this.find[n].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let n = e.split("/"), r = this.options.context, s = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), o = -(r ? r.depth + 1 : 0) + (s ? 0 : 1), i = (a, c) => {
      for (; a >= 0; a--) {
        let d = n[a];
        if (d == "") {
          if (a == n.length - 1 || a == 0)
            continue;
          for (; c >= o; c--)
            if (i(a - 1, c))
              return !0;
          return !1;
        } else {
          let u = c > 0 || c == 0 && s ? this.nodes[c].type : r && c >= o ? r.node(c - o).type : null;
          if (!u || u.name != d && !u.isInGroup(d))
            return !1;
          c--;
        }
      }
      return !0;
    };
    return i(n.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let n = e.depth; n >= 0; n--) {
        let r = e.node(n).contentMatchAt(e.indexAfter(n)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let n in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[n];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
}
function Fg(t) {
  for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && Jc.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : r == "li" ? n = e : r && (n = null);
  }
}
function zg(t, e) {
  return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
}
function xa(t) {
  let e = {};
  for (let n in t)
    e[n] = t[n];
  return e;
}
function va(t, e) {
  let n = e.schema.nodes;
  for (let r in n) {
    let s = n[r];
    if (!s.allowsMarkType(t))
      continue;
    let o = [], i = (a) => {
      o.push(a);
      for (let c = 0; c < a.edgeCount; c++) {
        let { type: d, next: u } = a.edge(c);
        if (d == e || o.indexOf(u) < 0 && i(u))
          return !0;
      }
    };
    if (i(s.contentMatch))
      return !0;
  }
}
const Yc = 65535, Xc = Math.pow(2, 16);
function Hg(t, e) {
  return t + e * Xc;
}
function wa(t) {
  return t & Yc;
}
function Vg(t) {
  return (t - (t & Yc)) / Xc;
}
const qc = 1, Zc = 2, Yr = 4, Qc = 8;
class ka {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.pos = e, this.delInfo = n, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & Qc) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (qc | Yr)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (Zc | Yr)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Yr) > 0;
  }
}
class st {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, n = !1) {
    if (this.ranges = e, this.inverted = n, !e.length && st.empty)
      return st.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let n = 0, r = wa(e);
    if (!this.inverted)
      for (let s = 0; s < r; s++)
        n += this.ranges[s * 3 + 2] - this.ranges[s * 3 + 1];
    return this.ranges[r * 3] + n + Vg(e);
  }
  mapResult(e, n = 1) {
    return this._map(e, n, !1);
  }
  map(e, n = 1) {
    return this._map(e, n, !0);
  }
  /**
  @internal
  */
  _map(e, n, r) {
    let s = 0, o = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2;
    for (let a = 0; a < this.ranges.length; a += 3) {
      let c = this.ranges[a] - (this.inverted ? s : 0);
      if (c > e)
        break;
      let d = this.ranges[a + o], u = this.ranges[a + i], p = c + d;
      if (e <= p) {
        let f = d ? e == c ? -1 : e == p ? 1 : n : n, h = c + s + (f < 0 ? 0 : u);
        if (r)
          return h;
        let m = e == (n < 0 ? c : p) ? null : Hg(a / 3, e - c), g = e == c ? Zc : e == p ? qc : Yr;
        return (n < 0 ? e != c : e != p) && (g |= Qc), new ka(h, g, m);
      }
      s += u - d;
    }
    return r ? e + s : new ka(e + s, 0, null);
  }
  /**
  @internal
  */
  touches(e, n) {
    let r = 0, s = wa(n), o = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2;
    for (let a = 0; a < this.ranges.length; a += 3) {
      let c = this.ranges[a] - (this.inverted ? r : 0);
      if (c > e)
        break;
      let d = this.ranges[a + o], u = c + d;
      if (e <= u && a == s * 3)
        return !0;
      r += this.ranges[a + i] - d;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let n = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let s = 0, o = 0; s < this.ranges.length; s += 3) {
      let i = this.ranges[s], a = i - (this.inverted ? o : 0), c = i + (this.inverted ? 0 : o), d = this.ranges[s + n], u = this.ranges[s + r];
      e(a, a + d, c, c + u), o += u - d;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new st(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? st.empty : new st(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
st.empty = new st([]);
const rs = /* @__PURE__ */ Object.create(null);
class je {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return st.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, n) {
    if (!n || !n.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = rs[n.stepType];
    if (!r)
      throw new RangeError(`No step type ${n.stepType} defined`);
    return r.fromJSON(e, n);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, n) {
    if (e in rs)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return rs[e] = n, n.prototype.jsonID = e, n;
  }
}
class Le {
  /**
  @internal
  */
  constructor(e, n) {
    this.doc = e, this.failed = n;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new Le(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new Le(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, n, r, s) {
    try {
      return Le.ok(e.replace(n, r, s));
    } catch (o) {
      if (o instanceof lo)
        return Le.fail(o.message);
      throw o;
    }
  }
}
function ki(t, e, n) {
  let r = [];
  for (let s = 0; s < t.childCount; s++) {
    let o = t.child(s);
    o.content.size && (o = o.copy(ki(o.content, e, o))), o.isInline && (o = e(o, n, s)), r.push(o);
  }
  return H.fromArray(r);
}
class Qt extends je {
  /**
  Create a mark step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = e.resolve(this.from), s = r.node(r.sharedDepth(this.to)), o = new X(ki(n.content, (i, a) => !i.isAtom || !a.type.allowsMarkType(this.mark.type) ? i : i.mark(this.mark.addToSet(i.marks)), s), n.openStart, n.openEnd);
    return Le.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new en(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new Qt(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Qt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Qt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new Qt(n.from, n.to, e.markFromJSON(n.mark));
  }
}
je.jsonID("addMark", Qt);
class en extends je {
  /**
  Create a mark-removing step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = new X(ki(n.content, (s) => s.mark(this.mark.removeFromSet(s.marks)), e), n.openStart, n.openEnd);
    return Le.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new Qt(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new en(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof en && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new en(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new en(n.from, n.to, e.markFromJSON(n.mark));
  }
}
je.jsonID("removeMark", en);
class tn extends je {
  /**
  Create a node mark step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return Le.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
    return Le.fromReplace(e, this.pos, this.pos + 1, new X(H.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    if (n) {
      let r = this.mark.addToSet(n.marks);
      if (r.length == n.marks.length) {
        for (let s = 0; s < n.marks.length; s++)
          if (!n.marks[s].isInSet(r))
            return new tn(this.pos, n.marks[s]);
        return new tn(this.pos, this.mark);
      }
    }
    return new br(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new tn(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new tn(n.pos, e.markFromJSON(n.mark));
  }
}
je.jsonID("addNodeMark", tn);
class br extends je {
  /**
  Create a mark-removing step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return Le.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
    return Le.fromReplace(e, this.pos, this.pos + 1, new X(H.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    return !n || !this.mark.isInSet(n.marks) ? this : new tn(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new br(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new br(n.pos, e.markFromJSON(n.mark));
  }
}
je.jsonID("removeNodeMark", br);
class ot extends je {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, n, r, s = !1) {
    super(), this.from = e, this.to = n, this.slice = r, this.structure = s;
  }
  apply(e) {
    return this.structure && As(e, this.from, this.to) ? Le.fail("Structure replace would overwrite content") : Le.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new st([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new ot(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deletedAcross && r.deletedAcross ? null : new ot(n.pos, Math.max(n.pos, r.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof ot) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let n = this.slice.size + e.slice.size == 0 ? X.empty : new X(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new ot(this.from, this.to + (e.to - e.from), n, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let n = this.slice.size + e.slice.size == 0 ? X.empty : new X(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new ot(e.from, this.to, n, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new ot(n.from, n.to, X.fromJSON(e, n.slice), !!n.structure);
  }
}
je.jsonID("replace", ot);
class et extends je {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, n, r, s, o, i, a = !1) {
    super(), this.from = e, this.to = n, this.gapFrom = r, this.gapTo = s, this.slice = o, this.insert = i, this.structure = a;
  }
  apply(e) {
    if (this.structure && (As(e, this.from, this.gapFrom) || As(e, this.gapTo, this.to)))
      return Le.fail("Structure gap-replace would overwrite content");
    let n = e.slice(this.gapFrom, this.gapTo);
    if (n.openStart || n.openEnd)
      return Le.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, n.content);
    return r ? Le.fromReplace(e, this.from, this.to, r) : Le.fail("Content does not fit in gap");
  }
  getMap() {
    return new st([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let n = this.gapTo - this.gapFrom;
    return new et(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), s = this.from == this.gapFrom ? n.pos : e.map(this.gapFrom, -1), o = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return n.deletedAcross && r.deletedAcross || s < n.pos || o > r.pos ? null : new et(n.pos, r.pos, s, o, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number" || typeof n.gapFrom != "number" || typeof n.gapTo != "number" || typeof n.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new et(n.from, n.to, n.gapFrom, n.gapTo, X.fromJSON(e, n.slice), n.insert, !!n.structure);
  }
}
je.jsonID("replaceAround", et);
function As(t, e, n) {
  let r = t.resolve(e), s = n - e, o = r.depth;
  for (; s > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
    o--, s--;
  if (s > 0) {
    let i = r.node(o).maybeChild(r.indexAfter(o));
    for (; s > 0; ) {
      if (!i || i.isLeaf)
        return !0;
      i = i.firstChild, s--;
    }
  }
  return !1;
}
function jg(t, e, n) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
}
function Yn(t) {
  let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth, s = 0, o = 0; ; --r) {
    let i = t.$from.node(r), a = t.$from.index(r) + s, c = t.$to.indexAfter(r) - o;
    if (r < t.depth && i.canReplace(a, c, n))
      return r;
    if (r == 0 || i.type.spec.isolating || !jg(i, a, c))
      break;
    a && (s = 1), c < i.childCount && (o = 1);
  }
  return null;
}
function ed(t, e, n = null, r = t) {
  let s = Wg(t, e), o = s && Gg(r, e);
  return o ? s.map(Ca).concat({ type: e, attrs: n }).concat(o.map(Ca)) : null;
}
function Ca(t) {
  return { type: t, attrs: null };
}
function Wg(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t, o = n.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let i = o.length ? o[0] : e;
  return n.canReplaceWith(r, s, i) ? o : null;
}
function Gg(t, e) {
  let { parent: n, startIndex: r, endIndex: s } = t, o = n.child(r), i = e.contentMatch.findWrapping(o.type);
  if (!i)
    return null;
  let c = (i.length ? i[i.length - 1] : e).contentMatch;
  for (let d = r; c && d < s; d++)
    c = c.matchType(n.child(d).type);
  return !c || !c.validEnd ? null : i;
}
function Mt(t, e, n = 1, r) {
  let s = t.resolve(e), o = s.depth - n, i = r && r[r.length - 1] || s.parent;
  if (o < 0 || s.parent.type.spec.isolating || !s.parent.canReplace(s.index(), s.parent.childCount) || !i.type.validContent(s.parent.content.cutByIndex(s.index(), s.parent.childCount)))
    return !1;
  for (let d = s.depth - 1, u = n - 2; d > o; d--, u--) {
    let p = s.node(d), f = s.index(d);
    if (p.type.spec.isolating)
      return !1;
    let h = p.content.cutByIndex(f, p.childCount), m = r && r[u + 1];
    m && (h = h.replaceChild(0, m.type.create(m.attrs)));
    let g = r && r[u] || p;
    if (!p.canReplace(f + 1, p.childCount) || !g.type.validContent(h))
      return !1;
  }
  let a = s.indexAfter(o), c = r && r[0];
  return s.node(o).canReplaceWith(a, a, c ? c.type : s.node(o + 1).type);
}
function En(t, e) {
  let n = t.resolve(e), r = n.index();
  return td(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function Ug(t, e) {
  e.content.size || t.type.compatibleContent(e.type);
  let n = t.contentMatchAt(t.childCount), { linebreakReplacement: r } = t.type.schema;
  for (let s = 0; s < e.childCount; s++) {
    let o = e.child(s), i = o.type == r ? t.type.schema.nodes.text : o.type;
    if (n = n.matchType(i), !n || !t.type.allowsMarks(o.marks))
      return !1;
  }
  return n.validEnd;
}
function td(t, e) {
  return !!(t && e && !t.isLeaf && Ug(t, e));
}
function Do(t, e, n = -1) {
  let r = t.resolve(e);
  for (let s = r.depth; ; s--) {
    let o, i, a = r.index(s);
    if (s == r.depth ? (o = r.nodeBefore, i = r.nodeAfter) : n > 0 ? (o = r.node(s + 1), a++, i = r.node(s).maybeChild(a)) : (o = r.node(s).maybeChild(a - 1), i = r.node(s + 1)), o && !o.isTextblock && td(o, i) && r.node(s).canReplace(a, a + 1))
      return e;
    if (s == 0)
      break;
    e = n < 0 ? r.before(s) : r.after(s);
  }
}
function Ci(t, e, n = e, r = X.empty) {
  if (e == n && !r.size)
    return null;
  let s = t.resolve(e), o = t.resolve(n);
  return Kg(s, o, r) ? new ot(e, n, r) : new Jg(s, o, r).fit();
}
function Kg(t, e, n) {
  return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
}
class Jg {
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.unplaced = r, this.frontier = [], this.placed = H.empty;
    for (let s = 0; s <= e.depth; s++) {
      let o = e.node(s);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(s))
      });
    }
    for (let s = e.depth; s > 0; s--)
      this.placed = H.from(e.node(s).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let d = this.findFittable();
      d ? this.placeNodes(d) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), n = this.placed.size - this.depth - this.$from.depth, r = this.$from, s = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!s)
      return null;
    let o = this.placed, i = r.depth, a = s.depth;
    for (; i && a && o.childCount == 1; )
      o = o.firstChild.content, i--, a--;
    let c = new X(o, i, a);
    return e > -1 ? new et(r.pos, e, this.$to.pos, this.$to.end(), c, n) : c.size || r.pos != this.$to.pos ? new ot(r.pos, s.pos, c) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let n = this.unplaced.content, r = 0, s = this.unplaced.openEnd; r < e; r++) {
      let o = n.firstChild;
      if (n.childCount > 1 && (s = 0), o.type.spec.isolating && s <= r) {
        e = r;
        break;
      }
      n = o.content;
    }
    for (let n = 1; n <= 2; n++)
      for (let r = n == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let s, o = null;
        r ? (o = ss(this.unplaced.content, r - 1).firstChild, s = o.content) : s = this.unplaced.content;
        let i = s.firstChild;
        for (let a = this.depth; a >= 0; a--) {
          let { type: c, match: d } = this.frontier[a], u, p = null;
          if (n == 1 && (i ? d.matchType(i.type) || (p = d.fillBefore(H.from(i), !1)) : o && c.compatibleContent(o.type)))
            return { sliceDepth: r, frontierDepth: a, parent: o, inject: p };
          if (n == 2 && i && (u = d.findWrapping(i.type)))
            return { sliceDepth: r, frontierDepth: a, parent: o, wrap: u };
          if (o && d.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, s = ss(e, n);
    return !s.childCount || s.firstChild.isLeaf ? !1 : (this.unplaced = new X(e, n + 1, Math.max(r, s.size + n >= e.size - r ? n + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, s = ss(e, n);
    if (s.childCount <= 1 && n > 0) {
      let o = e.size - n <= n + s.size;
      this.unplaced = new X(rr(e, n - 1, 1), n - 1, o ? n - 1 : r);
    } else
      this.unplaced = new X(rr(e, n, 1), n, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: n, parent: r, inject: s, wrap: o }) {
    for (; this.depth > n; )
      this.closeFrontierNode();
    if (o)
      for (let g = 0; g < o.length; g++)
        this.openFrontierNode(o[g]);
    let i = this.unplaced, a = r ? r.content : i.content, c = i.openStart - e, d = 0, u = [], { match: p, type: f } = this.frontier[n];
    if (s) {
      for (let g = 0; g < s.childCount; g++)
        u.push(s.child(g));
      p = p.matchFragment(s);
    }
    let h = a.size + e - (i.content.size - i.openEnd);
    for (; d < a.childCount; ) {
      let g = a.child(d), y = p.matchType(g.type);
      if (!y)
        break;
      d++, (d > 1 || c == 0 || g.content.size) && (p = y, u.push(nd(g.mark(f.allowedMarks(g.marks)), d == 1 ? c : 0, d == a.childCount ? h : -1)));
    }
    let m = d == a.childCount;
    m || (h = -1), this.placed = or(this.placed, n, H.from(u)), this.frontier[n].match = p, m && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let g = 0, y = a; g < h; g++) {
      let x = y.lastChild;
      this.frontier.push({ type: x.type, match: x.contentMatchAt(x.childCount) }), y = x.content;
    }
    this.unplaced = m ? e == 0 ? X.empty : new X(rr(i.content, e - 1, 1), e - 1, h < 0 ? i.openEnd : e - 1) : new X(rr(i.content, e, d), i.openStart, i.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], n;
    if (!e.type.isTextblock || !is(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (n = this.findCloseLevel(this.$to)) && n.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, s = this.$to.after(r);
    for (; r > 1 && s == this.$to.end(--r); )
      ++s;
    return s;
  }
  findCloseLevel(e) {
    e: for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
      let { match: r, type: s } = this.frontier[n], o = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)), i = is(e, n, s, r, o);
      if (i) {
        for (let a = n - 1; a >= 0; a--) {
          let { match: c, type: d } = this.frontier[a], u = is(e, a, d, c, !0);
          if (!u || u.childCount)
            continue e;
        }
        return { depth: n, fit: i, move: o ? e.doc.resolve(e.after(n + 1)) : e };
      }
    }
  }
  close(e) {
    let n = this.findCloseLevel(e);
    if (!n)
      return null;
    for (; this.depth > n.depth; )
      this.closeFrontierNode();
    n.fit.childCount && (this.placed = or(this.placed, n.depth, n.fit)), e = n.move;
    for (let r = n.depth + 1; r <= e.depth; r++) {
      let s = e.node(r), o = s.type.contentMatch.fillBefore(s.content, !0, e.index(r));
      this.openFrontierNode(s.type, s.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, n = null, r) {
    let s = this.frontier[this.depth];
    s.match = s.match.matchType(e), this.placed = or(this.placed, this.depth, H.from(e.create(n, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let n = this.frontier.pop().match.fillBefore(H.empty, !0);
    n.childCount && (this.placed = or(this.placed, this.frontier.length, n));
  }
}
function rr(t, e, n) {
  return e == 0 ? t.cutByIndex(n, t.childCount) : t.replaceChild(0, t.firstChild.copy(rr(t.firstChild.content, e - 1, n)));
}
function or(t, e, n) {
  return e == 0 ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(or(t.lastChild.content, e - 1, n)));
}
function ss(t, e) {
  for (let n = 0; n < e; n++)
    t = t.firstChild.content;
  return t;
}
function nd(t, e, n) {
  if (e <= 0)
    return t;
  let r = t.content;
  return e > 1 && (r = r.replaceChild(0, nd(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(H.empty, !0)))), t.copy(r);
}
function is(t, e, n, r, s) {
  let o = t.node(e), i = s ? t.indexAfter(e) : t.index(e);
  if (i == o.childCount && !n.compatibleContent(o.type))
    return null;
  let a = r.fillBefore(o.content, !0, i);
  return a && !Yg(n, o.content, i) ? a : null;
}
function Yg(t, e, n) {
  for (let r = n; r < e.childCount; r++)
    if (!t.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
class dr extends je {
  /**
  Construct an attribute step.
  */
  constructor(e, n, r) {
    super(), this.pos = e, this.attr = n, this.value = r;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return Le.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in n.attrs)
      r[o] = n.attrs[o];
    r[this.attr] = this.value;
    let s = n.type.create(r, null, n.marks);
    return Le.fromReplace(e, this.pos, this.pos + 1, new X(H.from(s), 0, n.isLeaf ? 0 : 1));
  }
  getMap() {
    return st.empty;
  }
  invert(e) {
    return new dr(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new dr(n.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.pos != "number" || typeof n.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new dr(n.pos, n.attr, n.value);
  }
}
je.jsonID("attr", dr);
class ho extends je {
  /**
  Construct an attribute step.
  */
  constructor(e, n) {
    super(), this.attr = e, this.value = n;
  }
  apply(e) {
    let n = /* @__PURE__ */ Object.create(null);
    for (let s in e.attrs)
      n[s] = e.attrs[s];
    n[this.attr] = this.value;
    let r = e.type.create(n, e.content, e.marks);
    return Le.ok(r);
  }
  getMap() {
    return st.empty;
  }
  invert(e) {
    return new ho(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new ho(n.attr, n.value);
  }
}
je.jsonID("docAttr", ho);
let yr = class extends Error {
};
yr = function t(e) {
  let n = Error.call(this, e);
  return n.__proto__ = t.prototype, n;
};
yr.prototype = Object.create(Error.prototype);
yr.prototype.constructor = yr;
yr.prototype.name = "TransformError";
const as = /* @__PURE__ */ Object.create(null);
class ie {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, n, r) {
    this.$anchor = e, this.$head = n, this.ranges = r || [new Xg(e.min(n), e.max(n))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let n = 0; n < e.length; n++)
      if (e[n].$from.pos != e[n].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, n = X.empty) {
    let r = n.content.lastChild, s = null;
    for (let a = 0; a < n.openEnd; a++)
      s = r, r = r.lastChild;
    let o = e.steps.length, i = this.ranges;
    for (let a = 0; a < i.length; a++) {
      let { $from: c, $to: d } = i[a], u = e.mapping.slice(o);
      e.replaceRange(u.map(c.pos), u.map(d.pos), a ? X.empty : n), a == 0 && Ea(e, o, (r ? r.isInline : s && s.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, n) {
    let r = e.steps.length, s = this.ranges;
    for (let o = 0; o < s.length; o++) {
      let { $from: i, $to: a } = s[o], c = e.mapping.slice(r), d = c.map(i.pos), u = c.map(a.pos);
      o ? e.deleteRange(d, u) : (e.replaceRangeWith(d, u, n), Ea(e, r, n.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, n, r = !1) {
    let s = e.parent.inlineContent ? new ge(e) : Ln(e.node(0), e.parent, e.pos, e.index(), n, r);
    if (s)
      return s;
    for (let o = e.depth - 1; o >= 0; o--) {
      let i = n < 0 ? Ln(e.node(0), e.node(o), e.before(o + 1), e.index(o), n, r) : Ln(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, n, r);
      if (i)
        return i;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, n = 1) {
    return this.findFrom(e, n) || this.findFrom(e, -n) || new ct(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return Ln(e, e, 0, 0, 1) || new ct(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return Ln(e, e, e.content.size, e.childCount, -1) || new ct(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, n) {
    if (!n || !n.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = as[n.type];
    if (!r)
      throw new RangeError(`No selection type ${n.type} defined`);
    return r.fromJSON(e, n);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, n) {
    if (e in as)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return as[e] = n, n.prototype.jsonID = e, n;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return ge.between(this.$anchor, this.$head).getBookmark();
  }
}
ie.prototype.visible = !0;
class Xg {
  /**
  Create a range.
  */
  constructor(e, n) {
    this.$from = e, this.$to = n;
  }
}
let Na = !1;
function Sa(t) {
  !Na && !t.parent.inlineContent && (Na = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
}
class ge extends ie {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, n = e) {
    Sa(e), Sa(n), super(e, n);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, n) {
    let r = e.resolve(n.map(this.head));
    if (!r.parent.inlineContent)
      return ie.near(r);
    let s = e.resolve(n.map(this.anchor));
    return new ge(s.parent.inlineContent ? s : r, r);
  }
  replace(e, n = X.empty) {
    if (super.replace(e, n), n == X.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof ge && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Mo(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number" || typeof n.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new ge(e.resolve(n.anchor), e.resolve(n.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, n, r = n) {
    let s = e.resolve(n);
    return new this(s, r == n ? s : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, n, r) {
    let s = e.pos - n.pos;
    if ((!r || s) && (r = s >= 0 ? 1 : -1), !n.parent.inlineContent) {
      let o = ie.findFrom(n, r, !0) || ie.findFrom(n, -r, !0);
      if (o)
        n = o.$head;
      else
        return ie.near(n, r);
    }
    return e.parent.inlineContent || (s == 0 ? e = n : (e = (ie.findFrom(e, -r, !0) || ie.findFrom(e, r, !0)).$anchor, e.pos < n.pos != s < 0 && (e = n))), new ge(e, n);
  }
}
ie.jsonID("text", ge);
class Mo {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Mo(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return ge.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class de extends ie {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let n = e.nodeAfter, r = e.node(0).resolve(e.pos + n.nodeSize);
    super(e, r), this.node = n;
  }
  map(e, n) {
    let { deleted: r, pos: s } = n.mapResult(this.anchor), o = e.resolve(s);
    return r ? ie.near(o) : new de(o);
  }
  content() {
    return new X(H.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof de && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new Ni(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new de(e.resolve(n.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, n) {
    return new de(e.resolve(n));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
de.prototype.visible = !1;
ie.jsonID("node", de);
class Ni {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: r } = e.mapResult(this.anchor);
    return n ? new Mo(r, r) : new Ni(r);
  }
  resolve(e) {
    let n = e.resolve(this.anchor), r = n.nodeAfter;
    return r && de.isSelectable(r) ? new de(n) : ie.near(n);
  }
}
class ct extends ie {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, n = X.empty) {
    if (n == X.empty) {
      e.delete(0, e.doc.content.size);
      let r = ie.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, n);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new ct(e);
  }
  map(e) {
    return new ct(e);
  }
  eq(e) {
    return e instanceof ct;
  }
  getBookmark() {
    return qg;
  }
}
ie.jsonID("all", ct);
const qg = {
  map() {
    return this;
  },
  resolve(t) {
    return new ct(t);
  }
};
function Ln(t, e, n, r, s, o = !1) {
  if (e.inlineContent)
    return ge.create(t, n);
  for (let i = r - (s > 0 ? 0 : 1); s > 0 ? i < e.childCount : i >= 0; i += s) {
    let a = e.child(i);
    if (a.isAtom) {
      if (!o && de.isSelectable(a))
        return de.create(t, n - (s < 0 ? a.nodeSize : 0));
    } else {
      let c = Ln(t, a, n + s, s < 0 ? a.childCount : 0, s, o);
      if (c)
        return c;
    }
    n += a.nodeSize * s;
  }
  return null;
}
function Ea(t, e, n) {
  let r = t.steps.length - 1;
  if (r < e)
    return;
  let s = t.steps[r];
  if (!(s instanceof ot || s instanceof et))
    return;
  let o = t.mapping.maps[r], i;
  o.forEach((a, c, d, u) => {
    i == null && (i = u);
  }), t.setSelection(ie.near(t.doc.resolve(i), n));
}
function _a(t, e) {
  return !e || !t ? t : t.bind(e);
}
class Hr {
  constructor(e, n, r) {
    this.name = e, this.init = _a(n.init, r), this.apply = _a(n.apply, r);
  }
}
new Hr("doc", {
  init(t) {
    return t.doc || t.schema.topNodeType.createAndFill();
  },
  apply(t) {
    return t.doc;
  }
}), new Hr("selection", {
  init(t, e) {
    return t.selection || ie.atStart(e.doc);
  },
  apply(t) {
    return t.selection;
  }
}), new Hr("storedMarks", {
  init(t) {
    return t.storedMarks || null;
  },
  apply(t, e, n, r) {
    return r.selection.$cursor ? t.storedMarks : null;
  }
}), new Hr("scrollToSelection", {
  init() {
    return 0;
  },
  apply(t, e) {
    return t.scrolledIntoView ? e + 1 : e;
  }
});
function rd(t, e, n) {
  for (let r in t) {
    let s = t[r];
    s instanceof Function ? s = s.bind(e) : r == "handleDOMEvents" && (s = rd(s, e, {})), n[r] = s;
  }
  return n;
}
class _n {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && rd(e.props, this, this.props), this.key = e.key ? e.key.key : od("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const ls = /* @__PURE__ */ Object.create(null);
function od(t) {
  return t in ls ? t + "$" + ++ls[t] : (ls[t] = 0, t + "$");
}
class An {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = od(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Si = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function sd(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n;
}
const id = (t, e, n) => {
  let r = sd(t, n);
  if (!r)
    return !1;
  let s = Ei(r);
  if (!s) {
    let i = r.blockRange(), a = i && Yn(i);
    return a == null ? !1 : (e && e(t.tr.lift(i, a).scrollIntoView()), !0);
  }
  let o = s.nodeBefore;
  if (md(t, s, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (Hn(o, "end") || de.isSelectable(o)))
    for (let i = r.depth; ; i--) {
      let a = Ci(t.doc, r.before(i), r.after(i), X.empty);
      if (a && a.slice.size < a.to - a.from) {
        if (e) {
          let c = t.tr.step(a);
          c.setSelection(Hn(o, "end") ? ie.findFrom(c.doc.resolve(c.mapping.map(s.pos, -1)), -1) : de.create(c.doc, s.pos - o.nodeSize)), e(c.scrollIntoView());
        }
        return !0;
      }
      if (i == 1 || r.node(i - 1).childCount > 1)
        break;
    }
  return o.isAtom && s.depth == r.depth - 1 ? (e && e(t.tr.delete(s.pos - o.nodeSize, s.pos).scrollIntoView()), !0) : !1;
}, Zg = (t, e, n) => {
  let r = sd(t, n);
  if (!r)
    return !1;
  let s = Ei(r);
  return s ? ad(t, s, e) : !1;
}, Qg = (t, e, n) => {
  let r = cd(t, n);
  if (!r)
    return !1;
  let s = _i(r);
  return s ? ad(t, s, e) : !1;
};
function ad(t, e, n) {
  let r = e.nodeBefore, s = r, o = e.pos - 1;
  for (; !s.isTextblock; o--) {
    if (s.type.spec.isolating)
      return !1;
    let u = s.lastChild;
    if (!u)
      return !1;
    s = u;
  }
  let i = e.nodeAfter, a = i, c = e.pos + 1;
  for (; !a.isTextblock; c++) {
    if (a.type.spec.isolating)
      return !1;
    let u = a.firstChild;
    if (!u)
      return !1;
    a = u;
  }
  let d = Ci(t.doc, o, c, X.empty);
  if (!d || d.from != o || d instanceof ot && d.slice.size >= c - o)
    return !1;
  if (n) {
    let u = t.tr.step(d);
    u.setSelection(ge.create(u.doc, o)), n(u.scrollIntoView());
  }
  return !0;
}
function Hn(t, e, n = !1) {
  for (let r = t; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (n && r.childCount != 1)
      return !1;
  }
  return !1;
}
const ld = (t, e, n) => {
  let { $head: r, empty: s } = t.selection, o = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
      return !1;
    o = Ei(r);
  }
  let i = o && o.nodeBefore;
  return !i || !de.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(de.create(t.doc, o.pos - i.nodeSize)).scrollIntoView()), !0);
};
function Ei(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      if (t.index(e) > 0)
        return t.doc.resolve(t.before(e + 1));
      if (t.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function cd(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n;
}
const dd = (t, e, n) => {
  let r = cd(t, n);
  if (!r)
    return !1;
  let s = _i(r);
  if (!s)
    return !1;
  let o = s.nodeAfter;
  if (md(t, s, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (Hn(o, "start") || de.isSelectable(o))) {
    let i = Ci(t.doc, r.before(), r.after(), X.empty);
    if (i && i.slice.size < i.to - i.from) {
      if (e) {
        let a = t.tr.step(i);
        a.setSelection(Hn(o, "start") ? ie.findFrom(a.doc.resolve(a.mapping.map(s.pos)), 1) : de.create(a.doc, a.mapping.map(s.pos))), e(a.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && s.depth == r.depth - 1 ? (e && e(t.tr.delete(s.pos, s.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, ud = (t, e, n) => {
  let { $head: r, empty: s } = t.selection, o = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size)
      return !1;
    o = _i(r);
  }
  let i = o && o.nodeAfter;
  return !i || !de.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(de.create(t.doc, o.pos)).scrollIntoView()), !0);
};
function _i(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      let n = t.node(e);
      if (t.index(e) + 1 < n.childCount)
        return t.doc.resolve(t.after(e + 1));
      if (n.type.spec.isolating)
        break;
    }
  return null;
}
const eb = (t, e) => {
  let n = t.selection, r = n instanceof de, s;
  if (r) {
    if (n.node.isTextblock || !En(t.doc, n.from))
      return !1;
    s = n.from;
  } else if (s = Do(t.doc, n.from, -1), s == null)
    return !1;
  if (e) {
    let o = t.tr.join(s);
    r && o.setSelection(de.create(o.doc, s - t.doc.resolve(s).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, tb = (t, e) => {
  let n = t.selection, r;
  if (n instanceof de) {
    if (n.node.isTextblock || !En(t.doc, n.to))
      return !1;
    r = n.to;
  } else if (r = Do(t.doc, n.to, 1), r == null)
    return !1;
  return e && e(t.tr.join(r).scrollIntoView()), !0;
}, nb = (t, e) => {
  let { $from: n, $to: r } = t.selection, s = n.blockRange(r), o = s && Yn(s);
  return o == null ? !1 : (e && e(t.tr.lift(s, o).scrollIntoView()), !0);
}, pd = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0);
};
function Ai(t) {
  for (let e = 0; e < t.edgeCount; e++) {
    let { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
const rb = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  if (!n.parent.type.spec.code || !n.sameParent(r))
    return !1;
  let s = n.node(-1), o = n.indexAfter(-1), i = Ai(s.contentMatchAt(o));
  if (!i || !s.canReplaceWith(o, o, i))
    return !1;
  if (e) {
    let a = n.after(), c = t.tr.replaceWith(a, a, i.createAndFill());
    c.setSelection(ie.near(c.doc.resolve(a), 1)), e(c.scrollIntoView());
  }
  return !0;
}, fd = (t, e) => {
  let n = t.selection, { $from: r, $to: s } = n;
  if (n instanceof ct || r.parent.inlineContent || s.parent.inlineContent)
    return !1;
  let o = Ai(s.parent.contentMatchAt(s.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let i = (!r.parentOffset && s.index() < s.parent.childCount ? r : s).pos, a = t.tr.insert(i, o.createAndFill());
    a.setSelection(ge.create(a.doc, i + 1)), e(a.scrollIntoView());
  }
  return !0;
}, hd = (t, e) => {
  let { $cursor: n } = t.selection;
  if (!n || n.parent.content.size)
    return !1;
  if (n.depth > 1 && n.after() != n.end(-1)) {
    let o = n.before();
    if (Mt(t.doc, o))
      return e && e(t.tr.split(o).scrollIntoView()), !0;
  }
  let r = n.blockRange(), s = r && Yn(r);
  return s == null ? !1 : (e && e(t.tr.lift(r, s).scrollIntoView()), !0);
};
function ob(t) {
  return (e, n) => {
    let { $from: r, $to: s } = e.selection;
    if (e.selection instanceof de && e.selection.node.isBlock)
      return !r.parentOffset || !Mt(e.doc, r.pos) ? !1 : (n && n(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let o = [], i, a, c = !1, d = !1;
    for (let h = r.depth; ; h--)
      if (r.node(h).isBlock) {
        c = r.end(h) == r.pos + (r.depth - h), d = r.start(h) == r.pos - (r.depth - h), a = Ai(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1))), o.unshift(c && a ? { type: a } : null), i = h;
        break;
      } else {
        if (h == 1)
          return !1;
        o.unshift(null);
      }
    let u = e.tr;
    (e.selection instanceof ge || e.selection instanceof ct) && u.deleteSelection();
    let p = u.mapping.map(r.pos), f = Mt(u.doc, p, o.length, o);
    if (f || (o[0] = a ? { type: a } : null, f = Mt(u.doc, p, o.length, o)), !f)
      return !1;
    if (u.split(p, o.length, o), !c && d && r.node(i).type != a) {
      let h = u.mapping.map(r.before(i)), m = u.doc.resolve(h);
      a && r.node(i - 1).canReplaceWith(m.index(), m.index() + 1, a) && u.setNodeMarkup(u.mapping.map(r.before(i)), a);
    }
    return n && n(u.scrollIntoView()), !0;
  };
}
const sb = ob(), ib = (t, e) => {
  let { $from: n, to: r } = t.selection, s, o = n.sharedDepth(r);
  return o == 0 ? !1 : (s = n.before(o), e && e(t.tr.setSelection(de.create(t.doc, s))), !0);
};
function ab(t, e, n) {
  let r = e.nodeBefore, s = e.nodeAfter, o = e.index();
  return !r || !s || !r.type.compatibleContent(s.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(s.isTextblock || En(t.doc, e.pos)) ? !1 : (n && n(t.tr.join(e.pos).scrollIntoView()), !0);
}
function md(t, e, n, r) {
  let s = e.nodeBefore, o = e.nodeAfter, i, a, c = s.type.spec.isolating || o.type.spec.isolating;
  if (!c && ab(t, e, n))
    return !0;
  let d = !c && e.parent.canReplace(e.index(), e.index() + 1);
  if (d && (i = (a = s.contentMatchAt(s.childCount)).findWrapping(o.type)) && a.matchType(i[0] || o.type).validEnd) {
    if (n) {
      let h = e.pos + o.nodeSize, m = H.empty;
      for (let x = i.length - 1; x >= 0; x--)
        m = H.from(i[x].create(null, m));
      m = H.from(s.copy(m));
      let g = t.tr.step(new et(e.pos - 1, h, e.pos, h, new X(m, 1, 0), i.length, !0)), y = g.doc.resolve(h + 2 * i.length);
      y.nodeAfter && y.nodeAfter.type == s.type && En(g.doc, y.pos) && g.join(y.pos), n(g.scrollIntoView());
    }
    return !0;
  }
  let u = o.type.spec.isolating || r > 0 && c ? null : ie.findFrom(e, 1), p = u && u.$from.blockRange(u.$to), f = p && Yn(p);
  if (f != null && f >= e.depth)
    return n && n(t.tr.lift(p, f).scrollIntoView()), !0;
  if (d && Hn(o, "start", !0) && Hn(s, "end")) {
    let h = s, m = [];
    for (; m.push(h), !h.isTextblock; )
      h = h.lastChild;
    let g = o, y = 1;
    for (; !g.isTextblock; g = g.firstChild)
      y++;
    if (h.canReplace(h.childCount, h.childCount, g.content)) {
      if (n) {
        let x = H.empty;
        for (let S = m.length - 1; S >= 0; S--)
          x = H.from(m[S].copy(x));
        let w = t.tr.step(new et(e.pos - m.length, e.pos + o.nodeSize, e.pos + y, e.pos + o.nodeSize - y, new X(x, m.length, 0), 0, !0));
        n(w.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function gd(t) {
  return function(e, n) {
    let r = e.selection, s = t < 0 ? r.$from : r.$to, o = s.depth;
    for (; s.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return s.node(o).isTextblock ? (n && n(e.tr.setSelection(ge.create(e.doc, t < 0 ? s.start(o) : s.end(o)))), !0) : !1;
  };
}
const lb = gd(-1), cb = gd(1);
function db(t, e = null) {
  return function(n, r) {
    let { $from: s, $to: o } = n.selection, i = s.blockRange(o), a = i && ed(i, t, e);
    return a ? (r && r(n.tr.wrap(i, a).scrollIntoView()), !0) : !1;
  };
}
function Aa(t, e = null) {
  return function(n, r) {
    let s = !1;
    for (let o = 0; o < n.selection.ranges.length && !s; o++) {
      let { $from: { pos: i }, $to: { pos: a } } = n.selection.ranges[o];
      n.doc.nodesBetween(i, a, (c, d) => {
        if (s)
          return !1;
        if (!(!c.isTextblock || c.hasMarkup(t, e)))
          if (c.type == t)
            s = !0;
          else {
            let u = n.doc.resolve(d), p = u.index();
            s = u.parent.canReplaceWith(p, p + 1, t);
          }
      });
    }
    if (!s)
      return !1;
    if (r) {
      let o = n.tr;
      for (let i = 0; i < n.selection.ranges.length; i++) {
        let { $from: { pos: a }, $to: { pos: c } } = n.selection.ranges[i];
        o.setBlockType(a, c, t, e);
      }
      r(o.scrollIntoView());
    }
    return !0;
  };
}
function Ti(...t) {
  return function(e, n, r) {
    for (let s = 0; s < t.length; s++)
      if (t[s](e, n, r))
        return !0;
    return !1;
  };
}
Ti(Si, id, ld);
Ti(Si, dd, ud);
Ti(pd, fd, hd, sb);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function ub(t, e = null) {
  return function(n, r) {
    let { $from: s, $to: o } = n.selection, i = s.blockRange(o);
    if (!i)
      return !1;
    let a = r ? n.tr : null;
    return pb(a, i, t, e) ? (r && r(a.scrollIntoView()), !0) : !1;
  };
}
function pb(t, e, n, r = null) {
  let s = !1, o = e, i = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let c = i.resolve(e.start - 2);
    o = new uo(c, c, e.depth), e.endIndex < e.parent.childCount && (e = new uo(e.$from, i.resolve(e.$to.end(e.depth)), e.depth)), s = !0;
  }
  let a = ed(o, n, r, e);
  return a ? (t && fb(t, e, a, s, n), !0) : !1;
}
function fb(t, e, n, r, s) {
  let o = H.empty;
  for (let u = n.length - 1; u >= 0; u--)
    o = H.from(n[u].type.create(n[u].attrs, o));
  t.step(new et(e.start - (r ? 2 : 0), e.end, e.start, e.end, new X(o, 0, 0), n.length, !0));
  let i = 0;
  for (let u = 0; u < n.length; u++)
    n[u].type == s && (i = u + 1);
  let a = n.length - i, c = e.start + n.length - (r ? 2 : 0), d = e.parent;
  for (let u = e.startIndex, p = e.endIndex, f = !0; u < p; u++, f = !1)
    !f && Mt(t.doc, c, a) && (t.split(c, a), c += 2 * a), c += d.child(u).nodeSize;
  return t;
}
function hb(t) {
  return function(e, n) {
    let { $from: r, $to: s } = e.selection, o = r.blockRange(s, (i) => i.childCount > 0 && i.firstChild.type == t);
    return o ? n ? r.node(o.depth - 1).type == t ? mb(e, n, t, o) : gb(e, n, o) : !0 : !1;
  };
}
function mb(t, e, n, r) {
  let s = t.tr, o = r.end, i = r.$to.end(r.depth);
  o < i && (s.step(new et(o - 1, i, o, i, new X(H.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new uo(s.doc.resolve(r.$from.pos), s.doc.resolve(i), r.depth));
  const a = Yn(r);
  if (a == null)
    return !1;
  s.lift(r, a);
  let c = s.doc.resolve(s.mapping.map(o, -1) - 1);
  return En(s.doc, c.pos) && c.nodeBefore.type == c.nodeAfter.type && s.join(c.pos), e(s.scrollIntoView()), !0;
}
function gb(t, e, n) {
  let r = t.tr, s = n.parent;
  for (let h = n.end, m = n.endIndex - 1, g = n.startIndex; m > g; m--)
    h -= s.child(m).nodeSize, r.delete(h - 1, h + 1);
  let o = r.doc.resolve(n.start), i = o.nodeAfter;
  if (r.mapping.map(n.end) != n.start + o.nodeAfter.nodeSize)
    return !1;
  let a = n.startIndex == 0, c = n.endIndex == s.childCount, d = o.node(-1), u = o.index(-1);
  if (!d.canReplace(u + (a ? 0 : 1), u + 1, i.content.append(c ? H.empty : H.from(s))))
    return !1;
  let p = o.pos, f = p + i.nodeSize;
  return r.step(new et(p - (a ? 1 : 0), f + (c ? 1 : 0), p + 1, f - 1, new X((a ? H.empty : H.from(s.copy(H.empty))).append(c ? H.empty : H.from(s.copy(H.empty))), a ? 0 : 1, c ? 0 : 1), a ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function bb(t) {
  return function(e, n) {
    let { $from: r, $to: s } = e.selection, o = r.blockRange(s, (d) => d.childCount > 0 && d.firstChild.type == t);
    if (!o)
      return !1;
    let i = o.startIndex;
    if (i == 0)
      return !1;
    let a = o.parent, c = a.child(i - 1);
    if (c.type != t)
      return !1;
    if (n) {
      let d = c.lastChild && c.lastChild.type == a.type, u = H.from(d ? t.create() : null), p = new X(H.from(t.create(null, H.from(a.type.create(null, u)))), d ? 3 : 1, 0), f = o.start, h = o.end;
      n(e.tr.step(new et(f - (d ? 3 : 1), h, f, h, p, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function bd(t) {
  const { state: e, transaction: n } = t;
  let { selection: r } = n, { doc: s } = n, { storedMarks: o } = n;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return o;
    },
    get selection() {
      return r;
    },
    get doc() {
      return s;
    },
    get tr() {
      return r = n.selection, s = n.doc, o = n.storedMarks, n;
    }
  };
}
class yb {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: n, state: r } = this, { view: s } = n, { tr: o } = r, i = this.buildProps(o);
    return Object.fromEntries(Object.entries(e).map(([a, c]) => [a, (...u) => {
      const p = c(...u)(i);
      return !o.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(o), p;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, n = !0) {
    const { rawCommands: r, editor: s, state: o } = this, { view: i } = s, a = [], c = !!e, d = e || o.tr, u = () => (!c && n && !d.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(d), a.every((f) => f === !0)), p = {
      ...Object.fromEntries(Object.entries(r).map(([f, h]) => [f, (...g) => {
        const y = this.buildProps(d, n), x = h(...g)(y);
        return a.push(x), p;
      }])),
      run: u
    };
    return p;
  }
  createCan(e) {
    const { rawCommands: n, state: r } = this, s = !1, o = e || r.tr, i = this.buildProps(o, s);
    return {
      ...Object.fromEntries(Object.entries(n).map(([c, d]) => [c, (...u) => d(...u)({ ...i, dispatch: void 0 })])),
      chain: () => this.createChain(o, s)
    };
  }
  buildProps(e, n = !0) {
    const { rawCommands: r, editor: s, state: o } = this, { view: i } = s, a = {
      tr: e,
      editor: s,
      view: i,
      state: bd({
        state: o,
        transaction: e
      }),
      dispatch: n ? () => {
      } : void 0,
      chain: () => this.createChain(e, n),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([c, d]) => [c, (...u) => d(...u)(a)]));
      }
    };
    return a;
  }
}
function nn(t, e, n) {
  return t.config[e] === void 0 && t.parent ? nn(t.parent, e, n) : typeof t.config[e] == "function" ? t.config[e].bind({
    ...n,
    parent: t.parent ? nn(t.parent, e, n) : null
  }) : t.config[e];
}
function xb(t) {
  const e = t.filter((s) => s.type === "extension"), n = t.filter((s) => s.type === "node"), r = t.filter((s) => s.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: n,
    markExtensions: r
  };
}
function Ve(t, e) {
  if (typeof t == "string") {
    if (!e.nodes[t])
      throw Error(`There is no node type named '${t}'. Maybe you forgot to add the extension?`);
    return e.nodes[t];
  }
  return t;
}
function vb(t) {
  return typeof t == "function";
}
function sr(t, e = void 0, ...n) {
  return vb(t) ? e ? t.bind(e)(...n) : t(...n) : t;
}
function wb(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
function kb(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function Vr(t) {
  return kb(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function yd(t, e) {
  const n = { ...t };
  return Vr(t) && Vr(e) && Object.keys(e).forEach((r) => {
    Vr(e[r]) && Vr(t[r]) ? n[r] = yd(t[r], e[r]) : n[r] = e[r];
  }), n;
}
class dt {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = sr(nn(this, "addOptions", {
      name: this.name
    }))), this.storage = sr(nn(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new dt(e);
  }
  configure(e = {}) {
    const n = this.extend({
      ...this.config,
      addOptions: () => yd(this.options, e)
    });
    return n.name = this.name, n.parent = this.parent, n;
  }
  extend(e = {}) {
    const n = new dt({ ...this.config, ...e });
    return n.parent = this, this.child = n, n.name = e.name ? e.name : n.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`), n.options = sr(nn(n, "addOptions", {
      name: n.name
    })), n.storage = sr(nn(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
}
function Cb(t, e, n) {
  const { from: r, to: s } = e, { blockSeparator: o = `

`, textSerializers: i = {} } = n || {};
  let a = "";
  return t.nodesBetween(r, s, (c, d, u, p) => {
    var f;
    c.isBlock && d > r && (a += o);
    const h = i == null ? void 0 : i[c.type.name];
    if (h)
      return u && (a += h({
        node: c,
        pos: d,
        parent: u,
        index: p,
        range: e
      })), !1;
    c.isText && (a += (f = c == null ? void 0 : c.text) === null || f === void 0 ? void 0 : f.slice(Math.max(r, d) - d, s - d));
  }), a;
}
function Nb(t) {
  return Object.fromEntries(Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, n]) => [e, n.spec.toText]));
}
dt.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new _n({
        key: new An("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: t } = this, { state: e, schema: n } = t, { doc: r, selection: s } = e, { ranges: o } = s, i = Math.min(...o.map((u) => u.$from.pos)), a = Math.max(...o.map((u) => u.$to.pos)), c = Nb(n);
            return Cb(r, { from: i, to: a }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: c
            });
          }
        }
      })
    ];
  }
});
const Sb = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  var n;
  t.isDestroyed || (e.dom.blur(), (n = window == null ? void 0 : window.getSelection()) === null || n === void 0 || n.removeAllRanges());
}), !0), Eb = (t = !1) => ({ commands: e }) => e.setContent("", t), _b = () => ({ state: t, tr: e, dispatch: n }) => {
  const { selection: r } = e, { ranges: s } = r;
  return n && s.forEach(({ $from: o, $to: i }) => {
    t.doc.nodesBetween(o.pos, i.pos, (a, c) => {
      if (a.type.isText)
        return;
      const { doc: d, mapping: u } = e, p = d.resolve(u.map(c)), f = d.resolve(u.map(c + a.nodeSize)), h = p.blockRange(f);
      if (!h)
        return;
      const m = Yn(h);
      if (a.type.isTextblock) {
        const { defaultType: g } = p.parent.contentMatchAt(p.index());
        e.setNodeMarkup(h.start, g);
      }
      (m || m === 0) && e.lift(h, m);
    });
  }), !0;
}, Ab = (t) => (e) => t(e), Tb = () => ({ state: t, dispatch: e }) => fd(t, e), Bb = (t, e) => ({ editor: n, tr: r }) => {
  const { state: s } = n, o = s.doc.slice(t.from, t.to);
  r.deleteRange(t.from, t.to);
  const i = r.mapping.map(e);
  return r.insert(i, o.content), r.setSelection(new ge(r.doc.resolve(Math.max(i - 1, 0)))), !0;
}, Ib = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, r = n.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const s = t.selection.$anchor;
  for (let o = s.depth; o > 0; o -= 1)
    if (s.node(o).type === r.type) {
      if (e) {
        const a = s.before(o), c = s.after(o);
        t.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Rb = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const s = Ve(t, n.schema), o = e.selection.$anchor;
  for (let i = o.depth; i > 0; i -= 1)
    if (o.node(i).type === s) {
      if (r) {
        const c = o.before(i), d = o.after(i);
        e.delete(c, d).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Lb = (t) => ({ tr: e, dispatch: n }) => {
  const { from: r, to: s } = t;
  return n && e.delete(r, s), !0;
}, Pb = () => ({ state: t, dispatch: e }) => Si(t, e), Ob = () => ({ commands: t }) => t.keyboardShortcut("Enter"), Db = () => ({ state: t, dispatch: e }) => rb(t, e);
function mo(t, e, n = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((s) => n.strict ? e[s] === t[s] : wb(e[s]) ? e[s].test(t[s]) : e[s] === t[s]) : !0;
}
function xd(t, e, n = {}) {
  return t.find((r) => r.type === e && mo(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(n).map((s) => [s, r.attrs[s]])),
    n
  ));
}
function Ta(t, e, n = {}) {
  return !!xd(t, e, n);
}
function vd(t, e, n) {
  var r;
  if (!t || !e)
    return;
  let s = t.parent.childAfter(t.parentOffset);
  if ((!s.node || !s.node.marks.some((u) => u.type === e)) && (s = t.parent.childBefore(t.parentOffset)), !s.node || !s.node.marks.some((u) => u.type === e) || (n = n || ((r = s.node.marks[0]) === null || r === void 0 ? void 0 : r.attrs), !xd([...s.node.marks], e, n)))
    return;
  let i = s.index, a = t.start() + s.offset, c = i + 1, d = a + s.node.nodeSize;
  for (; i > 0 && Ta([...t.parent.child(i - 1).marks], e, n); )
    i -= 1, a -= t.parent.child(i).nodeSize;
  for (; c < t.parent.childCount && Ta([...t.parent.child(c).marks], e, n); )
    d += t.parent.child(c).nodeSize, c += 1;
  return {
    from: a,
    to: d
  };
}
function Jt(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t])
      throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
    return e.marks[t];
  }
  return t;
}
const Mb = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  const o = Jt(t, r.schema), { doc: i, selection: a } = n, { $from: c, from: d, to: u } = a;
  if (s) {
    const p = vd(c, o, e);
    if (p && p.from <= d && p.to >= u) {
      const f = ge.create(i, p.from, p.to);
      n.setSelection(f);
    }
  }
  return !0;
}, $b = (t) => (e) => {
  const n = typeof t == "function" ? t(e) : t;
  for (let r = 0; r < n.length; r += 1)
    if (n[r](e))
      return !0;
  return !1;
};
function wd(t) {
  return t instanceof ge;
}
function rn(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function Fb(t, e = null) {
  if (!e)
    return null;
  const n = ie.atStart(t), r = ie.atEnd(t);
  if (e === "start" || e === !0)
    return n;
  if (e === "end")
    return r;
  const s = n.from, o = r.to;
  return e === "all" ? ge.create(t, rn(0, s, o), rn(t.content.size, s, o)) : ge.create(t, rn(e, s, o), rn(e, s, o));
}
function zb() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function Bi() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const Hb = (t = null, e = {}) => ({ editor: n, view: r, tr: s, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const i = () => {
    (Bi() || zb()) && r.dom.focus(), requestAnimationFrame(() => {
      n.isDestroyed || (r.focus(), e != null && e.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && t === null || t === !1)
    return !0;
  if (o && t === null && !wd(n.state.selection))
    return i(), !0;
  const a = Fb(s.doc, t) || n.state.selection, c = n.state.selection.eq(a);
  return o && (c || s.setSelection(a), c && s.storedMarks && s.setStoredMarks(s.storedMarks), i()), !0;
}, Vb = (t, e) => (n) => t.every((r, s) => e(r, { ...n, index: s })), jb = (t, e) => ({ tr: n, commands: r }) => r.insertContentAt({ from: n.selection.from, to: n.selection.to }, t, e), kd = (t) => {
  const e = t.childNodes;
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const r = e[n];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? t.removeChild(r) : r.nodeType === 1 && kd(r);
  }
  return t;
};
function jr(t) {
  const e = `<body>${t}</body>`, n = new window.DOMParser().parseFromString(e, "text/html").body;
  return kd(n);
}
function xr(t, e, n) {
  if (t instanceof cn || t instanceof H)
    return t;
  n = {
    slice: !0,
    parseOptions: {},
    ...n
  };
  const r = typeof t == "object" && t !== null, s = typeof t == "string";
  if (r)
    try {
      if (Array.isArray(t) && t.length > 0)
        return H.fromArray(t.map((a) => e.nodeFromJSON(a)));
      const i = e.nodeFromJSON(t);
      return n.errorOnInvalidContent && i.check(), i;
    } catch (o) {
      if (n.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: o });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", o), xr("", e, n);
    }
  if (s) {
    if (n.errorOnInvalidContent) {
      let i = !1, a = "";
      const c = new Og({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (d) => (i = !0, a = typeof d == "string" ? d : d.outerHTML, null)
              }
            ]
          }
        })
      });
      if (n.slice ? On.fromSchema(c).parseSlice(jr(t), n.parseOptions) : On.fromSchema(c).parse(jr(t), n.parseOptions), n.errorOnInvalidContent && i)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${a}`) });
    }
    const o = On.fromSchema(e);
    return n.slice ? o.parseSlice(jr(t), n.parseOptions).content : o.parse(jr(t), n.parseOptions);
  }
  return xr("", e, n);
}
function Wb(t, e, n) {
  const r = t.steps.length - 1;
  if (r < e)
    return;
  const s = t.steps[r];
  if (!(s instanceof ot || s instanceof et))
    return;
  const o = t.mapping.maps[r];
  let i = 0;
  o.forEach((a, c, d, u) => {
    i === 0 && (i = u);
  }), t.setSelection(ie.near(t.doc.resolve(i), n));
}
const Gb = (t) => !("type" in t), Ub = (t, e, n) => ({ tr: r, dispatch: s, editor: o }) => {
  var i;
  if (s) {
    n = {
      parseOptions: o.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...n
    };
    let a;
    const c = (y) => {
      o.emit("contentError", {
        editor: o,
        error: y,
        disableCollaboration: () => {
          o.storage.collaboration && (o.storage.collaboration.isDisabled = !0);
        }
      });
    }, d = {
      preserveWhitespace: "full",
      ...n.parseOptions
    };
    if (!n.errorOnInvalidContent && !o.options.enableContentCheck && o.options.emitContentError)
      try {
        xr(e, o.schema, {
          parseOptions: d,
          errorOnInvalidContent: !0
        });
      } catch (y) {
        c(y);
      }
    try {
      a = xr(e, o.schema, {
        parseOptions: d,
        errorOnInvalidContent: (i = n.errorOnInvalidContent) !== null && i !== void 0 ? i : o.options.enableContentCheck
      });
    } catch (y) {
      return c(y), !1;
    }
    let { from: u, to: p } = typeof t == "number" ? { from: t, to: t } : { from: t.from, to: t.to }, f = !0, h = !0;
    if ((Gb(a) ? a : [a]).forEach((y) => {
      y.check(), f = f ? y.isText && y.marks.length === 0 : !1, h = h ? y.isBlock : !1;
    }), u === p && h) {
      const { parent: y } = r.doc.resolve(u);
      y.isTextblock && !y.type.spec.code && !y.childCount && (u -= 1, p += 1);
    }
    let g;
    if (f) {
      if (Array.isArray(e))
        g = e.map((y) => y.text || "").join("");
      else if (e instanceof H) {
        let y = "";
        e.forEach((x) => {
          x.text && (y += x.text);
        }), g = y;
      } else typeof e == "object" && e && e.text ? g = e.text : g = e;
      r.insertText(g, u, p);
    } else
      g = a, r.replaceWith(u, p, g);
    n.updateSelection && Wb(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", { from: u, text: g }), n.applyPasteRules && r.setMeta("applyPasteRules", { from: u, text: g });
  }
  return !0;
}, Kb = () => ({ state: t, dispatch: e }) => eb(t, e), Jb = () => ({ state: t, dispatch: e }) => tb(t, e), Yb = () => ({ state: t, dispatch: e }) => id(t, e), Xb = () => ({ state: t, dispatch: e }) => dd(t, e), qb = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Do(t.doc, t.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, Zb = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Do(t.doc, t.selection.$from.pos, 1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, Qb = () => ({ state: t, dispatch: e }) => Zg(t, e), ey = () => ({ state: t, dispatch: e }) => Qg(t, e);
function Cd() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function ty(t) {
  const e = t.split(/-(?!$)/);
  let n = e[e.length - 1];
  n === "Space" && (n = " ");
  let r, s, o, i;
  for (let a = 0; a < e.length - 1; a += 1) {
    const c = e[a];
    if (/^(cmd|meta|m)$/i.test(c))
      i = !0;
    else if (/^a(lt)?$/i.test(c))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(c))
      s = !0;
    else if (/^s(hift)?$/i.test(c))
      o = !0;
    else if (/^mod$/i.test(c))
      Bi() || Cd() ? i = !0 : s = !0;
    else
      throw new Error(`Unrecognized modifier name: ${c}`);
  }
  return r && (n = `Alt-${n}`), s && (n = `Ctrl-${n}`), i && (n = `Meta-${n}`), o && (n = `Shift-${n}`), n;
}
const ny = (t) => ({ editor: e, view: n, tr: r, dispatch: s }) => {
  const o = ty(t).split(/-(?!$)/), i = o.find((d) => !["Alt", "Ctrl", "Meta", "Shift"].includes(d)), a = new KeyboardEvent("keydown", {
    key: i === "Space" ? " " : i,
    altKey: o.includes("Alt"),
    ctrlKey: o.includes("Ctrl"),
    metaKey: o.includes("Meta"),
    shiftKey: o.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), c = e.captureTransaction(() => {
    n.someProp("handleKeyDown", (d) => d(n, a));
  });
  return c == null || c.steps.forEach((d) => {
    const u = d.map(r.mapping);
    u && s && r.maybeStep(u);
  }), !0;
};
function Ii(t, e, n = {}) {
  const { from: r, to: s, empty: o } = t.selection, i = e ? Ve(e, t.schema) : null, a = [];
  t.doc.nodesBetween(r, s, (p, f) => {
    if (p.isText)
      return;
    const h = Math.max(r, f), m = Math.min(s, f + p.nodeSize);
    a.push({
      node: p,
      from: h,
      to: m
    });
  });
  const c = s - r, d = a.filter((p) => i ? i.name === p.node.type.name : !0).filter((p) => mo(p.node.attrs, n, { strict: !1 }));
  return o ? !!d.length : d.reduce((p, f) => p + f.to - f.from, 0) >= c;
}
const ry = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = Ve(t, n.schema);
  return Ii(n, s, e) ? nb(n, r) : !1;
}, oy = () => ({ state: t, dispatch: e }) => hd(t, e), sy = (t) => ({ state: e, dispatch: n }) => {
  const r = Ve(t, e.schema);
  return hb(r)(e, n);
}, iy = () => ({ state: t, dispatch: e }) => pd(t, e);
function Nd(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function Ba(t, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((r, s) => (n.includes(s) || (r[s] = t[s]), r), {});
}
const ay = (t, e) => ({ tr: n, state: r, dispatch: s }) => {
  let o = null, i = null;
  const a = Nd(typeof t == "string" ? t : t.name, r.schema);
  return a ? (a === "node" && (o = Ve(t, r.schema)), a === "mark" && (i = Jt(t, r.schema)), s && n.selection.ranges.forEach((c) => {
    r.doc.nodesBetween(c.$from.pos, c.$to.pos, (d, u) => {
      o && o === d.type && n.setNodeMarkup(u, void 0, Ba(d.attrs, e)), i && d.marks.length && d.marks.forEach((p) => {
        i === p.type && n.addMark(u, u + d.nodeSize, i.create(Ba(p.attrs, e)));
      });
    });
  }), !0) : !1;
}, ly = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), cy = () => ({ tr: t, dispatch: e }) => {
  if (e) {
    const n = new ct(t.doc);
    t.setSelection(n);
  }
  return !0;
}, dy = () => ({ state: t, dispatch: e }) => ld(t, e), uy = () => ({ state: t, dispatch: e }) => ud(t, e), py = () => ({ state: t, dispatch: e }) => ib(t, e), fy = () => ({ state: t, dispatch: e }) => cb(t, e), hy = () => ({ state: t, dispatch: e }) => lb(t, e);
function my(t, e, n = {}, r = {}) {
  return xr(t, e, {
    slice: !1,
    parseOptions: n,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
const gy = (t, e = !1, n = {}, r = {}) => ({ editor: s, tr: o, dispatch: i, commands: a }) => {
  var c, d;
  const { doc: u } = o;
  if (n.preserveWhitespace !== "full") {
    const p = my(t, s.schema, n, {
      errorOnInvalidContent: (c = r.errorOnInvalidContent) !== null && c !== void 0 ? c : s.options.enableContentCheck
    });
    return i && o.replaceWith(0, u.content.size, p).setMeta("preventUpdate", !e), !0;
  }
  return i && o.setMeta("preventUpdate", !e), a.insertContentAt({ from: 0, to: u.content.size }, t, {
    parseOptions: n,
    errorOnInvalidContent: (d = r.errorOnInvalidContent) !== null && d !== void 0 ? d : s.options.enableContentCheck
  });
};
function by(t, e) {
  const n = Jt(e, t.schema), { from: r, to: s, empty: o } = t.selection, i = [];
  o ? (t.storedMarks && i.push(...t.storedMarks), i.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, s, (c) => {
    i.push(...c.marks);
  });
  const a = i.find((c) => c.type.name === n.name);
  return a ? { ...a.attrs } : {};
}
function yy(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
function xy(t, e) {
  for (let n = t.depth; n > 0; n -= 1) {
    const r = t.node(n);
    if (e(r))
      return {
        pos: n > 0 ? t.before(n) : 0,
        start: t.start(n),
        depth: n,
        node: r
      };
  }
}
function Ri(t) {
  return (e) => xy(e.$from, t);
}
function Xr(t, e, n) {
  return Object.fromEntries(Object.entries(n).filter(([r]) => {
    const s = t.find((o) => o.type === e && o.name === r);
    return s ? s.attribute.keepOnSplit : !1;
  }));
}
function vy(t, e, n = {}) {
  const { empty: r, ranges: s } = t.selection, o = e ? Jt(e, t.schema) : null;
  if (r)
    return !!(t.storedMarks || t.selection.$from.marks()).filter((p) => o ? o.name === p.type.name : !0).find((p) => mo(p.attrs, n, { strict: !1 }));
  let i = 0;
  const a = [];
  if (s.forEach(({ $from: p, $to: f }) => {
    const h = p.pos, m = f.pos;
    t.doc.nodesBetween(h, m, (g, y) => {
      if (!g.isText && !g.marks.length)
        return;
      const x = Math.max(h, y), w = Math.min(m, y + g.nodeSize), S = w - x;
      i += S, a.push(...g.marks.map((v) => ({
        mark: v,
        from: x,
        to: w
      })));
    });
  }), i === 0)
    return !1;
  const c = a.filter((p) => o ? o.name === p.mark.type.name : !0).filter((p) => mo(p.mark.attrs, n, { strict: !1 })).reduce((p, f) => p + f.to - f.from, 0), d = a.filter((p) => o ? p.mark.type !== o && p.mark.type.excludes(o) : !0).reduce((p, f) => p + f.to - f.from, 0);
  return (c > 0 ? c + d : c) >= i;
}
function Ia(t, e) {
  const { nodeExtensions: n } = xb(e), r = n.find((i) => i.name === t);
  if (!r)
    return !1;
  const s = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = sr(nn(r, "group", s));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function Sd(t, { checkChildren: e = !0, ignoreWhitespace: n = !1 } = {}) {
  var r;
  if (n) {
    if (t.type.name === "hardBreak")
      return !0;
    if (t.isText)
      return /^\s*$/m.test((r = t.text) !== null && r !== void 0 ? r : "");
  }
  if (t.isText)
    return !t.text;
  if (t.isAtom || t.isLeaf)
    return !1;
  if (t.content.childCount === 0)
    return !0;
  if (e) {
    let s = !0;
    return t.content.forEach((o) => {
      s !== !1 && (Sd(o, { ignoreWhitespace: n, checkChildren: e }) || (s = !1));
    }), s;
  }
  return !1;
}
function wy(t, e, n) {
  var r;
  const { selection: s } = e;
  let o = null;
  if (wd(s) && (o = s.$cursor), o) {
    const a = (r = t.storedMarks) !== null && r !== void 0 ? r : o.marks();
    return !!n.isInSet(a) || !a.some((c) => c.type.excludes(n));
  }
  const { ranges: i } = s;
  return i.some(({ $from: a, $to: c }) => {
    let d = a.depth === 0 ? t.doc.inlineContent && t.doc.type.allowsMarkType(n) : !1;
    return t.doc.nodesBetween(a.pos, c.pos, (u, p, f) => {
      if (d)
        return !1;
      if (u.isInline) {
        const h = !f || f.type.allowsMarkType(n), m = !!n.isInSet(u.marks) || !u.marks.some((g) => g.type.excludes(n));
        d = h && m;
      }
      return !d;
    }), d;
  });
}
const ky = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  const { selection: o } = n, { empty: i, ranges: a } = o, c = Jt(t, r.schema);
  if (s)
    if (i) {
      const d = by(r, c);
      n.addStoredMark(c.create({
        ...d,
        ...e
      }));
    } else
      a.forEach((d) => {
        const u = d.$from.pos, p = d.$to.pos;
        r.doc.nodesBetween(u, p, (f, h) => {
          const m = Math.max(h, u), g = Math.min(h + f.nodeSize, p);
          f.marks.find((x) => x.type === c) ? f.marks.forEach((x) => {
            c === x.type && n.addMark(m, g, c.create({
              ...x.attrs,
              ...e
            }));
          }) : n.addMark(m, g, c.create(e));
        });
      });
  return wy(r, n, c);
}, Cy = (t, e) => ({ tr: n }) => (n.setMeta(t, e), !0), Ny = (t, e = {}) => ({ state: n, dispatch: r, chain: s }) => {
  const o = Ve(t, n.schema);
  let i;
  return n.selection.$anchor.sameParent(n.selection.$head) && (i = n.selection.$anchor.parent.attrs), o.isTextblock ? s().command(({ commands: a }) => Aa(o, { ...i, ...e })(n) ? !0 : a.clearNodes()).command(({ state: a }) => Aa(o, { ...i, ...e })(a, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, Sy = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, s = rn(t, 0, r.content.size), o = de.create(r, s);
    e.setSelection(o);
  }
  return !0;
}, Ey = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, { from: s, to: o } = typeof t == "number" ? { from: t, to: t } : t, i = ge.atStart(r).from, a = ge.atEnd(r).to, c = rn(s, i, a), d = rn(o, i, a), u = ge.create(r, c, d);
    e.setSelection(u);
  }
  return !0;
}, _y = (t) => ({ state: e, dispatch: n }) => {
  const r = Ve(t, e.schema);
  return bb(r)(e, n);
};
function Ra(t, e) {
  const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (n) {
    const r = n.filter((s) => e == null ? void 0 : e.includes(s.type.name));
    t.tr.ensureMarks(r);
  }
}
const Ay = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: n, dispatch: r, editor: s }) => {
  const { selection: o, doc: i } = e, { $from: a, $to: c } = o, d = s.extensionManager.attributes, u = Xr(d, a.node().type.name, a.node().attrs);
  if (o instanceof de && o.node.isBlock)
    return !a.parentOffset || !Mt(i, a.pos) ? !1 : (r && (t && Ra(n, s.extensionManager.splittableMarks), e.split(a.pos).scrollIntoView()), !0);
  if (!a.parent.isBlock)
    return !1;
  const p = c.parentOffset === c.parent.content.size, f = a.depth === 0 ? void 0 : yy(a.node(-1).contentMatchAt(a.indexAfter(-1)));
  let h = p && f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0, m = Mt(e.doc, e.mapping.map(a.pos), 1, h);
  if (!h && !m && Mt(e.doc, e.mapping.map(a.pos), 1, f ? [{ type: f }] : void 0) && (m = !0, h = f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0), r) {
    if (m && (o instanceof ge && e.deleteSelection(), e.split(e.mapping.map(a.pos), 1, h), f && !p && !a.parentOffset && a.parent.type !== f)) {
      const g = e.mapping.map(a.before()), y = e.doc.resolve(g);
      a.node(-1).canReplaceWith(y.index(), y.index() + 1, f) && e.setNodeMarkup(e.mapping.map(a.before()), f);
    }
    t && Ra(n, s.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return m;
}, Ty = (t, e = {}) => ({ tr: n, state: r, dispatch: s, editor: o }) => {
  var i;
  const a = Ve(t, r.schema), { $from: c, $to: d } = r.selection, u = r.selection.node;
  if (u && u.isBlock || c.depth < 2 || !c.sameParent(d))
    return !1;
  const p = c.node(-1);
  if (p.type !== a)
    return !1;
  const f = o.extensionManager.attributes;
  if (c.parent.content.size === 0 && c.node(-1).childCount === c.indexAfter(-1)) {
    if (c.depth === 2 || c.node(-3).type !== a || c.index(-2) !== c.node(-2).childCount - 1)
      return !1;
    if (s) {
      let x = H.empty;
      const w = c.index(-1) ? 1 : c.index(-2) ? 2 : 3;
      for (let N = c.depth - w; N >= c.depth - 3; N -= 1)
        x = H.from(c.node(N).copy(x));
      const S = c.indexAfter(-1) < c.node(-2).childCount ? 1 : c.indexAfter(-2) < c.node(-3).childCount ? 2 : 3, v = {
        ...Xr(f, c.node().type.name, c.node().attrs),
        ...e
      }, k = ((i = a.contentMatch.defaultType) === null || i === void 0 ? void 0 : i.createAndFill(v)) || void 0;
      x = x.append(H.from(a.createAndFill(null, k) || void 0));
      const T = c.before(c.depth - (w - 1));
      n.replace(T, c.after(-S), new X(x, 4 - w, 0));
      let C = -1;
      n.doc.nodesBetween(T, n.doc.content.size, (N, E) => {
        if (C > -1)
          return !1;
        N.isTextblock && N.content.size === 0 && (C = E + 1);
      }), C > -1 && n.setSelection(ge.near(n.doc.resolve(C))), n.scrollIntoView();
    }
    return !0;
  }
  const h = d.pos === c.end() ? p.contentMatchAt(0).defaultType : null, m = {
    ...Xr(f, p.type.name, p.attrs),
    ...e
  }, g = {
    ...Xr(f, c.node().type.name, c.node().attrs),
    ...e
  };
  n.delete(c.pos, d.pos);
  const y = h ? [
    { type: a, attrs: m },
    { type: h, attrs: g }
  ] : [{ type: a, attrs: m }];
  if (!Mt(n.doc, c.pos, 2))
    return !1;
  if (s) {
    const { selection: x, storedMarks: w } = r, { splittableMarks: S } = o.extensionManager, v = w || x.$to.parentOffset && x.$from.marks();
    if (n.split(c.pos, 2, y).scrollIntoView(), !v || !s)
      return !0;
    const k = v.filter((T) => S.includes(T.type.name));
    n.ensureMarks(k);
  }
  return !0;
}, cs = (t, e) => {
  const n = Ri((i) => i.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (r === void 0)
    return !0;
  const s = t.doc.nodeAt(r);
  return n.node.type === (s == null ? void 0 : s.type) && En(t.doc, n.pos) && t.join(n.pos), !0;
}, ds = (t, e) => {
  const n = Ri((i) => i.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(n.start).after(n.depth);
  if (r === void 0)
    return !0;
  const s = t.doc.nodeAt(r);
  return n.node.type === (s == null ? void 0 : s.type) && En(t.doc, r) && t.join(r), !0;
}, By = (t, e, n, r = {}) => ({ editor: s, tr: o, state: i, dispatch: a, chain: c, commands: d, can: u }) => {
  const { extensions: p, splittableMarks: f } = s.extensionManager, h = Ve(t, i.schema), m = Ve(e, i.schema), { selection: g, storedMarks: y } = i, { $from: x, $to: w } = g, S = x.blockRange(w), v = y || g.$to.parentOffset && g.$from.marks();
  if (!S)
    return !1;
  const k = Ri((T) => Ia(T.type.name, p))(g);
  if (S.depth >= 1 && k && S.depth - k.depth <= 1) {
    if (k.node.type === h)
      return d.liftListItem(m);
    if (Ia(k.node.type.name, p) && h.validContent(k.node.content) && a)
      return c().command(() => (o.setNodeMarkup(k.pos, h), !0)).command(() => cs(o, h)).command(() => ds(o, h)).run();
  }
  return !n || !v || !a ? c().command(() => u().wrapInList(h, r) ? !0 : d.clearNodes()).wrapInList(h, r).command(() => cs(o, h)).command(() => ds(o, h)).run() : c().command(() => {
    const T = u().wrapInList(h, r), C = v.filter((N) => f.includes(N.type.name));
    return o.ensureMarks(C), T ? !0 : d.clearNodes();
  }).wrapInList(h, r).command(() => cs(o, h)).command(() => ds(o, h)).run();
}, Iy = (t, e = {}, n = {}) => ({ state: r, commands: s }) => {
  const { extendEmptyMarkRange: o = !1 } = n, i = Jt(t, r.schema);
  return vy(r, i, e) ? s.unsetMark(i, { extendEmptyMarkRange: o }) : s.setMark(i, e);
}, Ry = (t, e, n = {}) => ({ state: r, commands: s }) => {
  const o = Ve(t, r.schema), i = Ve(e, r.schema), a = Ii(r, o, n);
  let c;
  return r.selection.$anchor.sameParent(r.selection.$head) && (c = r.selection.$anchor.parent.attrs), a ? s.setNode(i, c) : s.setNode(o, { ...c, ...n });
}, Ly = (t, e = {}) => ({ state: n, commands: r }) => {
  const s = Ve(t, n.schema);
  return Ii(n, s, e) ? r.lift(s) : r.wrapIn(s, e);
}, Py = () => ({ state: t, dispatch: e }) => {
  const n = t.plugins;
  for (let r = 0; r < n.length; r += 1) {
    const s = n[r];
    let o;
    if (s.spec.isInputRules && (o = s.getState(t))) {
      if (e) {
        const i = t.tr, a = o.transform;
        for (let c = a.steps.length - 1; c >= 0; c -= 1)
          i.step(a.steps[c].invert(a.docs[c]));
        if (o.text) {
          const c = i.doc.resolve(o.from).marks();
          i.replaceWith(o.from, o.to, t.schema.text(o.text, c));
        } else
          i.delete(o.from, o.to);
      }
      return !0;
    }
  }
  return !1;
}, Oy = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, { empty: r, ranges: s } = n;
  return r || e && s.forEach((o) => {
    t.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, Dy = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  var o;
  const { extendEmptyMarkRange: i = !1 } = e, { selection: a } = n, c = Jt(t, r.schema), { $from: d, empty: u, ranges: p } = a;
  if (!s)
    return !0;
  if (u && i) {
    let { from: f, to: h } = a;
    const m = (o = d.marks().find((y) => y.type === c)) === null || o === void 0 ? void 0 : o.attrs, g = vd(d, c, m);
    g && (f = g.from, h = g.to), n.removeMark(f, h, c);
  } else
    p.forEach((f) => {
      n.removeMark(f.$from.pos, f.$to.pos, c);
    });
  return n.removeStoredMark(c), !0;
}, My = (t, e = {}) => ({ tr: n, state: r, dispatch: s }) => {
  let o = null, i = null;
  const a = Nd(typeof t == "string" ? t : t.name, r.schema);
  return a ? (a === "node" && (o = Ve(t, r.schema)), a === "mark" && (i = Jt(t, r.schema)), s && n.selection.ranges.forEach((c) => {
    const d = c.$from.pos, u = c.$to.pos;
    let p, f, h, m;
    n.selection.empty ? r.doc.nodesBetween(d, u, (g, y) => {
      o && o === g.type && (h = Math.max(y, d), m = Math.min(y + g.nodeSize, u), p = y, f = g);
    }) : r.doc.nodesBetween(d, u, (g, y) => {
      y < d && o && o === g.type && (h = Math.max(y, d), m = Math.min(y + g.nodeSize, u), p = y, f = g), y >= d && y <= u && (o && o === g.type && n.setNodeMarkup(y, void 0, {
        ...g.attrs,
        ...e
      }), i && g.marks.length && g.marks.forEach((x) => {
        if (i === x.type) {
          const w = Math.max(y, d), S = Math.min(y + g.nodeSize, u);
          n.addMark(w, S, i.create({
            ...x.attrs,
            ...e
          }));
        }
      }));
    }), f && (p !== void 0 && n.setNodeMarkup(p, void 0, {
      ...f.attrs,
      ...e
    }), i && f.marks.length && f.marks.forEach((g) => {
      i === g.type && n.addMark(h, m, i.create({
        ...g.attrs,
        ...e
      }));
    }));
  }), !0) : !1;
}, $y = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = Ve(t, n.schema);
  return db(s, e)(n, r);
}, Fy = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const s = Ve(t, n.schema);
  return ub(s, e)(n, r);
};
var zy = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: Sb,
  clearContent: Eb,
  clearNodes: _b,
  command: Ab,
  createParagraphNear: Tb,
  cut: Bb,
  deleteCurrentNode: Ib,
  deleteNode: Rb,
  deleteRange: Lb,
  deleteSelection: Pb,
  enter: Ob,
  exitCode: Db,
  extendMarkRange: Mb,
  first: $b,
  focus: Hb,
  forEach: Vb,
  insertContent: jb,
  insertContentAt: Ub,
  joinBackward: Yb,
  joinDown: Jb,
  joinForward: Xb,
  joinItemBackward: qb,
  joinItemForward: Zb,
  joinTextblockBackward: Qb,
  joinTextblockForward: ey,
  joinUp: Kb,
  keyboardShortcut: ny,
  lift: ry,
  liftEmptyBlock: oy,
  liftListItem: sy,
  newlineInCode: iy,
  resetAttributes: ay,
  scrollIntoView: ly,
  selectAll: cy,
  selectNodeBackward: dy,
  selectNodeForward: uy,
  selectParentNode: py,
  selectTextblockEnd: fy,
  selectTextblockStart: hy,
  setContent: gy,
  setMark: ky,
  setMeta: Cy,
  setNode: Ny,
  setNodeSelection: Sy,
  setTextSelection: Ey,
  sinkListItem: _y,
  splitBlock: Ay,
  splitListItem: Ty,
  toggleList: By,
  toggleMark: Iy,
  toggleNode: Ry,
  toggleWrap: Ly,
  undoInputRule: Py,
  unsetAllMarks: Oy,
  unsetMark: Dy,
  updateAttributes: My,
  wrapIn: $y,
  wrapInList: Fy
});
dt.create({
  name: "commands",
  addCommands() {
    return {
      ...zy
    };
  }
});
dt.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new _n({
        key: new An("tiptapDrop"),
        props: {
          handleDrop: (t, e, n, r) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: n,
              moved: r
            });
          }
        }
      })
    ];
  }
});
dt.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new _n({
        key: new An("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
});
const Hy = new An("focusEvents");
dt.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new _n({
        key: Hy,
        props: {
          handleDOMEvents: {
            focus: (e, n) => {
              t.isFocused = !0;
              const r = t.state.tr.setMeta("focus", { event: n }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, n) => {
              t.isFocused = !1;
              const r = t.state.tr.setMeta("blur", { event: n }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
});
dt.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () => this.editor.commands.first(({ commands: i }) => [
      () => i.undoInputRule(),
      // maybe convert first text block node to default node
      () => i.command(({ tr: a }) => {
        const { selection: c, doc: d } = a, { empty: u, $anchor: p } = c, { pos: f, parent: h } = p, m = p.parent.isTextblock && f > 0 ? a.doc.resolve(f - 1) : p, g = m.parent.type.spec.isolating, y = p.pos - p.parentOffset, x = g && m.parent.childCount === 1 ? y === p.pos : ie.atStart(d).from === f;
        return !u || !h.type.isTextblock || h.textContent.length || !x || x && p.parent.type.name === "paragraph" ? !1 : i.clearNodes();
      }),
      () => i.deleteSelection(),
      () => i.joinBackward(),
      () => i.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: i }) => [
      () => i.deleteSelection(),
      () => i.deleteCurrentNode(),
      () => i.joinForward(),
      () => i.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: i }) => [
        () => i.newlineInCode(),
        () => i.createParagraphNear(),
        () => i.liftEmptyBlock(),
        () => i.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: t,
      "Mod-Backspace": t,
      "Shift-Backspace": t,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, s = {
      ...r
    }, o = {
      ...r,
      "Ctrl-h": t,
      "Alt-Backspace": t,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return Bi() || Cd() ? o : s;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new _n({
        key: new An("clearDocument"),
        appendTransaction: (t, e, n) => {
          if (t.some((g) => g.getMeta("composition")))
            return;
          const r = t.some((g) => g.docChanged) && !e.doc.eq(n.doc), s = t.some((g) => g.getMeta("preventClearDocument"));
          if (!r || s)
            return;
          const { empty: o, from: i, to: a } = e.selection, c = ie.atStart(e.doc).from, d = ie.atEnd(e.doc).to;
          if (o || !(i === c && a === d) || !Sd(n.doc))
            return;
          const f = n.tr, h = bd({
            state: n,
            transaction: f
          }), { commands: m } = new yb({
            editor: this.editor,
            state: h
          });
          if (m.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
});
dt.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new _n({
        key: new An("tiptapPaste"),
        props: {
          handlePaste: (t, e, n) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: n
            });
          }
        }
      })
    ];
  }
});
dt.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new _n({
        key: new An("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
const Vy = dt.create({
  name: "color",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          color: {
            default: null,
            parseHTML: (t) => {
              var e;
              return (e = t.style.color) === null || e === void 0 ? void 0 : e.replace(/['"]+/g, "");
            },
            renderHTML: (t) => t.color ? {
              style: `color: ${t.color}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setColor: (t) => ({ chain: e }) => e().setMark("textStyle", { color: t }).run(),
      unsetColor: () => ({ chain: t }) => t().setMark("textStyle", { color: null }).removeEmptyTextStyle().run()
    };
  }
}), Ed = ({
  blockId: t,
  value: e = "",
  onUpdate: n = () => {
  },
  onBlur: r = () => {
  },
  placeholder: s = "",
  from: o = "settings",
  style: i = {}
}) => pf(
  {
    extensions: [
      vf,
      hf,
      Vy.configure({
        types: ["textStyle"]
      }),
      mf.configure({
        multicolor: !0
      }),
      gf.configure({
        openOnClick: !1,
        HTMLAttributes: {
          class: "underline"
        }
      }),
      yf.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right"],
        defaultAlignment: "left"
      }),
      xf,
      bf.configure({
        placeholder: s || "Enter text here",
        emptyEditorClass: "cursor-text before:content-[attr(data-placeholder)] before:absolute before:opacity-50 before:pointer-events-none"
      })
    ],
    content: e || "",
    onUpdate: n,
    onBlur: r,
    editorProps: {
      attributes: {
        ...i ? { style: i } : {},
        class: o !== "canvas" ? "text-sm p-1 px-2 rte" : "rte"
      }
    }
  },
  [t]
);
function jy(t) {
  let e = t;
  for (; e; ) {
    if (e.style && e.style.textAlign)
      return e.style.textAlign;
    const n = window.getComputedStyle(e).textAlign;
    if (n && n !== "start" && n !== "initial" && n !== "inherit")
      return n;
    e = e.parentElement;
  }
  return null;
}
const Wy = kr(
  ({
    blockContent: t,
    editingElement: e,
    onClose: n,
    onChange: r,
    onEscape: s
  }) => {
    const { document: o } = yt(), i = Ed({
      value: t,
      blockId: "active-inline-editing-element",
      placeholder: "Enter text here",
      onUpdate: ({ editor: d }) => r((d == null ? void 0 : d.getHTML()) || ""),
      onBlur: ({ editor: d, event: u }) => {
        if (!o) return;
        const p = u == null ? void 0 : u.relatedTarget, f = o.querySelector(".ProseMirror"), h = o.querySelector(".tippy-box"), m = o.querySelector("#chai-rich-text-menu-bar"), g = f == null ? void 0 : f.contains(p), y = h == null ? void 0 : h.contains(p), x = m == null ? void 0 : m.contains(p), w = window.document.getElementById("rte-widget-color-picker");
        if (!g && !y && !x && !w) {
          const S = (d == null ? void 0 : d.getHTML()) || "";
          n(S);
        }
      },
      from: "canvas"
    });
    z(() => {
      var u, p;
      const d = jy(e);
      d && ((u = i == null ? void 0 : i.commands) == null || u.setTextAlign(d)), (p = i == null ? void 0 : i.commands) == null || p.focus(), i == null || i.emit("focus", {
        editor: i,
        event: new FocusEvent("focus"),
        transaction: []
      });
    }, [e, i]);
    const a = M(() => {
      var p;
      const d = "max-w-none shadow-none outline outline-[2px] [&_*]:shadow-none";
      if (!e) return d;
      const u = ((p = e == null ? void 0 : e.className) == null ? void 0 : p.replace("sr-only", "")) || "";
      return `${d} ${u}`;
    }, [e]), c = (d) => {
      d.key === "Escape" && s(d);
    };
    return i && /* @__PURE__ */ b("div", { onKeyDown: c, onClick: (d) => d.stopPropagation(), className: "relative", children: [
      /* @__PURE__ */ l(
        ff,
        {
          editor: i,
          shouldShow: () => i && (i == null ? void 0 : i.isFocused),
          tippyOptions: { duration: 100, arrow: !0, hideOnClick: !1 },
          className: "w-max",
          children: /* @__PURE__ */ l(Rc, { editor: i, from: "canvas" })
        }
      ),
      /* @__PURE__ */ l(
        El,
        {
          id: "active-inline-editing-element",
          onKeyDown: c,
          value: t,
          editor: i,
          className: a
        }
      )
    ] });
  }
), Gy = kr(
  ({
    editingElement: t,
    blockContent: e,
    onClose: n,
    editorRef: r,
    onChange: s,
    onEscape: o
  }) => {
    const { document: i, window: a } = yt();
    z(() => {
      if (!(!i || !a))
        if (r.current) {
          r.current.innerHTML = e, r.current.focus();
          const f = i.createRange(), h = a.getSelection();
          f.selectNodeContents(r.current), f.collapse(!1), h == null || h.removeAllRanges(), h == null || h.addRange(f), r.current.focus();
        } else
          n();
    }, [e, i, r, n, a]);
    const c = M(() => {
      var h;
      const f = ((h = t == null ? void 0 : t.tagName) == null ? void 0 : h.toLowerCase()) || "div";
      return f === "button" ? "div" : f;
    }, [t]), d = B(
      (f) => {
        (f.key === "Enter" || f.key === "Escape") && o(f);
      },
      [o]
    ), u = B(() => {
      n();
    }, [n]), p = M(() => {
      var f;
      return {
        id: "active-inline-editing-element",
        contentEditable: !0,
        className: `${((f = t == null ? void 0 : t.className) == null ? void 0 : f.replace("sr-only", "")) || ""} outline outline-[2px] outline-green-500 shadow-none empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400 empty:before:absolute empty:before:pointer-events-none empty:before:select-none empty:before:inset-0 empty:before:z-0 relative min-h-[1em]`,
        style: to(t == null ? void 0 : t.style) || {},
        onInput: (h) => {
          const m = h.target;
          m && (m.innerText.trim() === "" ? (m.setAttribute("data-placeholder", "Enter text here"), m.children.length > 0 && m.children[0].remove()) : h.target.removeAttribute("data-placeholder"), s(h.target.innerText));
        },
        onClick: (h) => {
          h.stopPropagation(), h.preventDefault();
        }
      };
    }, [t == null ? void 0 : t.className, t == null ? void 0 : t.style, s]);
    return /* @__PURE__ */ l(Q, { children: un(c, {
      ref: r,
      onBlur: u,
      onKeyDown: d,
      ...p
    }) });
  }
), Uy = kr(
  ({ block: t, children: e }) => {
    const n = "content", { document: r } = yt(), { editingBlockId: s, editingItemIndex: o, setEditingBlockId: i, setEditingItemIndex: a } = Sn(), [c, d] = $(null), u = ne(null), { clearHighlight: p } = At(), f = _t(), { selectedLang: h } = Je(), [, m] = oe(), g = ne(null), y = s, { blockContent: x, blockType: w } = M(() => {
      var L;
      const C = t._type;
      let N = t[n];
      const E = Pe(t._type);
      return h && ((L = E == null ? void 0 : E.i18nProps) == null ? void 0 : L.includes(n)) && le(t, `${n}-${h}`) && (N = _(t, `${n}-${h}`)), { blockContent: N, blockType: C };
    }, [t, h]), S = B(
      (C) => {
        var E;
        const N = C || ((E = u.current) == null ? void 0 : E.innerText);
        f([y], { [n]: N }), d(null), i(""), a(-1), m([]), y && setTimeout(() => m([y]), 100);
      },
      [f, y, i, a, m]
    ), v = Nt(
      (C) => {
        f([y], { [n]: C });
      },
      [y, t, f, h],
      1e3
    ), k = B(
      (C) => {
        C.preventDefault(), y && (g.current = y), S(), setTimeout(() => {
          const N = g.current;
          g.current = null, N && m([N]);
        }, 100);
      },
      [y, S, m]
    );
    z(() => {
      var I;
      if (!y || !r) return;
      const C = `[data-block-id="${y}"]`, N = o >= 0 ? `[data-block-index="${o}"]` : "", E = r.querySelector(`${C}${N}`);
      E && ((I = E == null ? void 0 : E.classList) == null || I.add("sr-only"), qu(() => d(E)));
    }, [y, w, r, o]);
    const T = M(() => c ? (p(), ["RichText", "Paragraph"].includes(w) ? /* @__PURE__ */ l(
      Wy,
      {
        blockContent: x,
        editingElement: c,
        onChange: v,
        onClose: S,
        onEscape: k
      }
    ) : /* @__PURE__ */ l(
      Gy,
      {
        editorRef: u,
        blockContent: x,
        editingElement: c,
        onClose: S,
        onChange: v,
        onEscape: k
      }
    )) : null, [c, p, w, x, S, v, k]);
    return /* @__PURE__ */ b(Q, { children: [
      T,
      e
    ] });
  },
  (t, e) => t.block._id === e.block._id && t.block.content === e.block.content
), _d = wo({
  index: -1,
  key: ""
}), La = wo(0), Ky = [
  "Box",
  "Repeater",
  "GlobalBlock",
  "PartialBlock",
  "Heading",
  "Text",
  "RichText",
  "Span",
  "Image",
  "Button",
  "Paragraph",
  "Link",
  "Video",
  "Audio",
  "Icon",
  "List",
  "ListItem",
  "CustomScript",
  "CustomHTML"
], Jy = ({
  asyncProps: t,
  blockAtom: e,
  children: n
}) => {
  const { editingBlockId: r, editingItemIndex: s } = Sn(), [o] = D(e), i = M(() => Pe(o._type), [o._type]), { selectedLang: a, fallbackLang: c } = Je(), d = pg(), u = Un(), [p] = D(sc), f = _(i, "component", null), { index: h, key: m } = yn(_d), { mode: g } = Ic(), y = Ue(Er), x = bt(), w = g === "edit", S = ug(), v = M(
    () => p ? Sl(ta(o, a, i), u, {
      index: h,
      key: m
    }) : ta(o, a, i),
    [o, a, i, u, p, h, m]
  ), k = M(
    () => na(o, !0, y),
    [o, na, y]
  ), T = M(
    () => d(o._id, ra(o._type)),
    [o._id, o._type, d, ra]
  ), C = M(() => {
    const V = {
      "data-block-id": o._id,
      "data-block-type": o._type,
      "data-block-index": h
    };
    return w && x ? {
      ...V,
      draggable: !r,
      onMouseDown: S.onMouseDown,
      onDragStart: S.onDragStart,
      onDragEnd: S.onDragEnd
    } : V;
  }, [o._id, o._type, h, w, x, S, r]), N = M(
    () => ({
      blockProps: C,
      inBuilder: g === "edit",
      lang: a || c,
      pageData: u,
      ...v,
      ...k,
      ...T,
      ...t
    }),
    [g, C, a, c, v, k, T, t]
  ), E = M(() => !Ky.includes(o._type), [o._type]), I = M(() => {
    const V = _(o, "_show", !0);
    return Ct(V) ? p ? lf(V, u) !== "false" : !0 : V;
  }, [o, p, u]);
  if (tl(f) || !I) return null;
  let L = /* @__PURE__ */ l(We, { children: un(f, {
    ...N,
    children: n({
      _id: o._id,
      _type: o._type,
      ...wr(v.repeaterItems) ? {
        repeaterItems: cf(v.repeaterItems, o),
        $repeaterItemsKey: v.$repeaterItemsKey
      } : {},
      ...o.partialBlockId ? { partialBlockId: o.partialBlockId } : "",
      ...o.globalBlock ? { partialBlockId: o.globalBlock } : ""
    })
  }) });
  const R = r === o._id && (s === h || h < 0) ? /* @__PURE__ */ l(Uy, { block: o, children: L }) : L;
  return E ? /* @__PURE__ */ l(on, { fallbackRender: mg, children: R }) : R;
}, Yy = ({ children: t, partialBlockId: e }) => {
  const n = G("gotoPage", wt), { saveState: r } = _r(), { selectedLang: s, fallbackLang: o } = Je(), i = B(
    (a) => {
      if (a.stopPropagation(), r !== "SAVED") {
        Ce.error("You have unsaved changes. Please save the page first.");
        return;
      }
      n({ pageId: e, lang: s || o });
    },
    [r, n, e, s, o]
  );
  return /* @__PURE__ */ b(Q, { children: [
    t,
    /* @__PURE__ */ l("div", { className: "partial-overlay group absolute inset-0 z-50", children: /* @__PURE__ */ l(
      "div",
      {
        onDoubleClick: i,
        className: "flex h-full w-full items-center justify-center bg-black/10 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:backdrop-opacity-85",
        children: /* @__PURE__ */ l("p", { className: "rounded-md bg-white px-2 py-1 text-xs", children: "Partial block. Double click to edit." })
      }
    ) })
  ] });
}, Xy = () => /* @__PURE__ */ l("div", { className: "flex items-center justify-center rounded-md border border-destructive bg-destructive/10 p-4 text-center text-sm text-destructive", children: /* @__PURE__ */ b("p", { children: [
  "Maximum partial nesting depth (",
  io,
  " levels) exceeded"
] }) }), qy = ({ partialBlockId: t }) => {
  const { getPartialBlocks: e } = li(), n = yn(La), r = M(() => e(t), [e, t]), s = M(() => kl(P(r)), [r]);
  return n >= io ? /* @__PURE__ */ l(Xy, {}) : F(r) ? null : /* @__PURE__ */ l(La.Provider, { value: n + 1, children: /* @__PURE__ */ l(Yy, { partialBlockId: t, children: /* @__PURE__ */ l(go, { splitAtoms: s, blocks: r, type: "PartialBlock" }) }) });
}, go = ({
  blocks: t,
  parent: e = null,
  splitAtoms: n = void 0,
  type: r = ""
}) => {
  const s = $h(n);
  let o = M(
    () => Z(t, (a) => le(a, "_id") && (F(e) ? !a._parent : a._parent === e)),
    [t, e]
  );
  const i = B(
    (a) => Z(t, (c) => c._parent === a).length > 0,
    [t]
  );
  return (r === "Heading" || r === "Paragraph" || r === "Link") && (o = af(o)), A(o, (a) => {
    const c = s(a._id);
    return c ? /* @__PURE__ */ l(hg, { block: a, children: (d) => /* @__PURE__ */ l(Jy, { blockAtom: c, asyncProps: d, children: ({ _id: u, _type: p, partialBlockId: f, repeaterItems: h, $repeaterItemsKey: m }) => p === "Repeater" ? wr(h) && h.map((g, y) => /* @__PURE__ */ l(_d.Provider, { value: { index: y, key: m }, children: /* @__PURE__ */ l(go, { splitAtoms: n, blocks: t, parent: a._id, type: p }) }, `${u}-${y}`)) : p === "GlobalBlock" || p === "PartialBlock" ? /* @__PURE__ */ l(rf, { store: Qe, children: /* @__PURE__ */ l(qy, { partialBlockId: f }) }) : i(u) ? /* @__PURE__ */ l(go, { splitAtoms: n, blocks: t, parent: a._id, type: p }) : null }) }, a._id) : null;
  });
}, Zy = () => {
  const [t] = ue();
  return /* @__PURE__ */ l(go, { splitAtoms: Sr, blocks: t });
}, Qy = () => {
  const [t] = ue(), [e] = D(pi), n = F(t) ? null : /* @__PURE__ */ l(Zy, {}, e);
  return /* @__PURE__ */ l(Q, { children: n });
}, ex = Et("canvasZoom", 100), tx = () => D(ex), nx = () => D(Gl), Ad = Et("canvasWidth", 800), rx = Et("canvasDisplayWidth", 800), Td = P((t) => {
  const e = t(Ad);
  return Nl(e).toLowerCase();
}), bo = () => {
  const [t, e] = D(Ad), n = Ue(Td), [r, s] = nx();
  return z(() => {
    r !== "xs" && s(n);
  }, [n, r, s]), [t, n, e];
}, Li = () => {
  const [t, e] = D(rx);
  return [t, e];
}, ox = (t) => {
  const [e] = Li(), [, n] = tx(), r = G("htmlDir", "ltr"), [s, o] = $({}), i = B(() => {
    const { width: a, height: c } = t;
    if (a < e) {
      const d = parseFloat((a / e).toFixed(2).toString());
      let u = {};
      const p = c * d, f = a * d;
      c && (u = {
        // Eureka! This is the formula to calculate the height of the scaled element. Thank you ChatGPT 4
        height: 100 + (c - p) / p * 100 + "%",
        width: 100 + (a - f) / f * 100 + "%"
      }), o({
        position: "relative",
        top: 0,
        transform: `scale(${d})`,
        transformOrigin: r === "rtl" ? "top right" : "top left",
        ...u,
        maxWidth: "none"
        // TODO: Add max-width to the wrapper
      }), n(d * 100);
    } else
      o({}), n(100);
  }, [e, t, r, n]);
  return z(() => {
    i();
  }, [e, t, n, i]), s;
}, sx = () => {
  const { document: t } = yt();
  return z(() => {
    const e = t == null ? void 0 : t.defaultView;
    if (!e) return;
    let n = e.scrollY, r = Number.NEGATIVE_INFINITY;
    const s = () => {
      r = e.performance.now(), n = e.scrollY;
    }, o = () => {
      const i = e.performance.now(), a = {
        scrollY: e.scrollY,
        intended: n,
        lastGestureAt: r,
        lastIntentionalAt: Lm(),
        now: i
      };
      if (Im(a)) {
        e.scrollTo({ top: n, behavior: yc });
        return;
      }
      n = e.scrollY;
    };
    for (const i of ua)
      e.addEventListener(i, s, { passive: !0, capture: !0 });
    return e.addEventListener("scroll", o, { passive: !0 }), () => {
      for (const i of ua)
        e.removeEventListener(i, s, { capture: !0 });
      e.removeEventListener("scroll", o);
    };
  }, [t]), null;
};
function Dn(t, e) {
  z(() => {
    const n = me.subscribe(t, e);
    return () => n();
  }, [t, e]);
}
const ix = () => {
  const [, t] = oe(), [e, n] = Fe(), { document: r } = yt(), { clearHighlight: s } = At(), [o] = oe(), [i] = D(fi);
  return z(() => {
    setTimeout(() => {
      if (!F(e))
        return;
      const a = kc(r, ye(o));
      if (a) {
        const c = a.getAttribute("data-style-prop");
        if (c) {
          const d = a.getAttribute("data-style-id"), u = a.getAttribute("data-block-parent");
          n([{ id: d, prop: c, blockId: u }]);
        }
      }
    }, 100);
  }, [r, o, n, e]), z(() => () => s(), [s]), Dn(se.CANVAS_BLOCK_SELECTED, (a) => {
    a && (!F(a) && !Be(o, ye(a)) && (i == null || i.closeAll()), t(a));
  }), Dn(
    se.CANVAS_BLOCK_STYLE_SELECTED,
    (a) => {
      if (!a) return;
      const { blockId: c, styleId: d, styleProp: u } = a;
      c && (Be(o, c) || i == null || i.closeAll(), n([{ id: d, prop: u, blockId: c }]), t([c]));
    }
  ), Dn(se.CLEAR_CANVAS_SELECTION, () => {
    s(), t([]), n([]);
  }), null;
}, ax = () => {
  const [t] = Li(), [, e] = hc(), n = ne(null), r = ne(null), [s, o] = $({ width: 0, height: 0 }), i = ox(s), [, a] = Kn(), c = G("loading", !1), d = G("htmlDir", "ltr"), { onDragOver: u, onDrop: p, onDragEnd: f } = Jn(), h = wm(), m = B(
    (y) => {
      o((x) => ({ ...x, width: y }));
    },
    [o]
  );
  z(() => {
    if (!r.current) return;
    const { clientWidth: y, clientHeight: x } = r.current;
    o({ width: y, height: x });
  }, [r, t]);
  const g = M(() => {
    let y = Jm;
    return y = y.replace("__HTML_DIR__", d), y;
  }, [d]);
  return /* @__PURE__ */ l(dg, { onMount: m, onResize: m, children: /* @__PURE__ */ l(
    "div",
    {
      onMouseLeave: () => setTimeout(() => e(""), 300),
      className: "relative mx-auto h-full w-full overflow-hidden",
      onDragOver: u,
      onDrop: p,
      onDragEnd: f,
      ref: r,
      children: /* @__PURE__ */ b(
        Xm,
        {
          contentDidMount: () => a(n.current),
          ref: n,
          id: "canvas-iframe",
          style: { ...i, ...F(i) ? { width: `${t}px` } : {} },
          className: "relative mx-auto box-content h-full w-full max-w-full shadow-lg transition-all duration-300 ease-linear",
          initialContent: g,
          children: [
            /* @__PURE__ */ l(Qm, {}),
            /* @__PURE__ */ l(Um, {}),
            /* @__PURE__ */ l(ig, {}),
            /* @__PURE__ */ b(np, { children: [
              /* @__PURE__ */ b(Wm, { children: [
                c ? /* @__PURE__ */ l("div", { className: "h-full p-4", children: /* @__PURE__ */ l(zn, { className: "h-full" }) }) : /* @__PURE__ */ l(Qy, {}),
                /* @__PURE__ */ l(eg, {})
              ] }),
              /* @__PURE__ */ l(ix, {}),
              /* @__PURE__ */ l(sx, {})
            ] }),
            h.isVisible && /* @__PURE__ */ l(
              "div",
              {
                id: "placeholder",
                className: `pointer-events-none absolute z-[99999] max-w-full transition-all duration-150 ${h.isEmpty ? "bg-purple-500/10 outline-dashed outline-2 -outline-offset-2 outline-purple-500" : "rounded-full bg-green-500"}`,
                style: {
                  top: h.top,
                  left: h.left,
                  width: h.width,
                  height: h.height
                }
              }
            )
          ]
        }
      )
    }
  ) });
}, ur = () => {
  const { t } = K();
  return /* @__PURE__ */ l("div", { className: "h-full w-full rounded-md bg-red-200 p-4 text-red-500", children: /* @__PURE__ */ b("div", { className: "flex h-full w-full flex-col items-center justify-center", children: [
    /* @__PURE__ */ l("p", { className: "font-semibold", children: t("Oops! Something went wrong.") }),
    /* @__PURE__ */ l("p", { children: t("Please try again.") })
  ] }) });
}, lx = P(null), Bd = () => D(lx), cx = te.lazy(() => import("./code-editor-BBqVRgoa.js")), dx = () => {
  const [t] = Bd(), e = G("onError", wt);
  return /* @__PURE__ */ l("div", { className: "flex h-full max-h-full w-full flex-1 flex-col", children: /* @__PURE__ */ b("div", { className: "relative flex h-full max-h-full flex-col overflow-hidden bg-gray-100/40", children: [
    /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l(zn, { className: "h-full" }), children: /* @__PURE__ */ l(on, { fallback: /* @__PURE__ */ l(ur, {}), onError: e, children: /* @__PURE__ */ l(ax, {}) }) }),
    t ? /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l(zn, { className: "h-full" }), children: /* @__PURE__ */ l(cx, {}) }) : null
  ] }) });
}, Vn = {
  ab: "Abkhazian",
  aa: "Afar",
  af: "Afrikaans",
  ak: "Akan",
  sq: "Albanian",
  am: "Amharic",
  ar: "Arabic",
  an: "Aragonese",
  hy: "Armenian",
  as: "Assamese",
  av: "Avaric",
  ae: "Avestan",
  ay: "Aymara",
  az: "Azerbaijani",
  bm: "Bambara",
  ba: "Bashkir",
  eu: "Basque",
  be: "Belarusian",
  bn: "Bengali",
  bh: "Bihari",
  bi: "Bislama",
  bs: "Bosnian",
  br: "Breton",
  bg: "Bulgarian",
  my: "Burmese",
  ca: "Catalan",
  ch: "Chamorro",
  ce: "Chechen",
  ny: "Chichewa",
  zh: "Chinese",
  "zh-Hans": "Chinese (Simplified)",
  "zh-Hant": "Chinese (Traditional)",
  cv: "Chuvash",
  kw: "Cornish",
  co: "Corsican",
  cr: "Cree",
  hr: "Croatian",
  cs: "Czech",
  da: "Danish",
  dv: "Maldivian",
  nl: "Dutch",
  dz: "Dzongkha",
  en: "English",
  eo: "Esperanto",
  et: "Estonian",
  ee: "Ewe",
  fo: "Faroese",
  fj: "Fijian",
  fi: "Finnish",
  fr: "French",
  ff: "Fula, Pular",
  gl: "Galician",
  gd: "Gaelic (Scottish)",
  gv: "Manx",
  ka: "Georgian",
  de: "German",
  el: "Greek",
  kl: "Kalaallisut",
  gn: "Guarani",
  gu: "Gujarati",
  ht: "Haitian Creole",
  ha: "Hausa",
  he: "Hebrew",
  hz: "Herero",
  hi: "Hindi",
  ho: "Hiri Motu",
  hu: "Hungarian",
  is: "Icelandic",
  io: "Ido",
  ig: "Igbo",
  id: "Indonesian",
  ia: "Interlingua",
  ie: "Interlingue",
  iu: "Inuktitut",
  ik: "Inupiak",
  ga: "Irish",
  it: "Italian",
  ja: "Japanese",
  jv: "Javanese",
  kn: "Kannada",
  kr: "Kanuri",
  ks: "Kashmiri",
  kk: "Kazakh",
  km: "Khmer",
  ki: "Kikuyu",
  rw: "Kinyarwanda",
  rn: "Kirundi",
  ky: "Kyrgyz",
  kv: "Komi",
  kg: "Kongo",
  ko: "Korean",
  ku: "Kurdish",
  kj: "Kwanyama",
  lo: "Lao",
  la: "Latin",
  lv: "Latvian",
  li: "Limburgish",
  ln: "Lingala",
  lt: "Lithuanian",
  lu: "Luga-Katanga",
  lg: "Luganda, Ganda",
  lb: "Luxembourgish",
  mk: "Macedonian",
  mg: "Malagasy",
  ms: "Malay",
  ml: "Malayalam",
  mt: "Maltese",
  mi: "Maori",
  mr: "Marathi",
  mh: "Marshallese",
  mo: "Moldavian",
  mn: "Mongolian",
  na: "Nauru",
  nv: "Navajo",
  ng: "Ndonga",
  nd: "Northern Ndebele",
  ne: "Nepali",
  no: "Norwegian",
  nb: "Norwegian bokmål",
  nn: "Norwegian nynorsk",
  ii: "Sichuan Yi",
  oc: "Occitan",
  oj: "Ojibwe",
  cu: "Old Church Slavonic",
  or: "Oriya",
  om: "Oromo",
  os: "Ossetian",
  pi: "Pāli",
  ps: "Pashto, Pushto",
  fa: "Persian (Farsi)",
  pl: "Polish",
  pt: "Portuguese",
  pa: "Punjabi (Eastern)",
  qu: "Quechua",
  rm: "Romansh",
  ro: "Romanian",
  ru: "Russian",
  se: "Sami",
  sm: "Samoan",
  sg: "Sango",
  sa: "Sanskrit",
  sr: "Serbian",
  sh: "Serbo-Croatian",
  st: "Sesotho",
  tn: "Setswana",
  sn: "Shona",
  sd: "Sindhi",
  si: "Sinhalese",
  ss: "Swati",
  sk: "Slovak",
  sl: "Slovenian",
  so: "Somali",
  nr: "Southern Ndebele",
  es: "Spanish",
  su: "Sundanese",
  sw: "Swahili (Kiswahili)",
  sv: "Swedish",
  tl: "Tagalog",
  ty: "Tahitian",
  tg: "Tajik",
  ta: "Tamil",
  tt: "Tatar",
  te: "Telugu",
  th: "Thai",
  bo: "Tibetan",
  ti: "Tigrinya",
  to: "Tonga",
  ts: "Tsonga",
  tr: "Turkish",
  tk: "Turkmen",
  tw: "Twi",
  ug: "Uyghur",
  uk: "Ukrainian",
  ur: "Urdu",
  uz: "Uzbek",
  ve: "Venda",
  vi: "Vietnamese",
  vo: "Volapük",
  wa: "Wallon",
  cy: "Welsh",
  wo: "Wolof",
  fy: "Western Frisian",
  xh: "Xhosa",
  yi: "Yiddish",
  yo: "Yoruba",
  za: "Zhuang, Chuang",
  zu: "Zulu"
}, ux = ({ id: t, placeholder: e }) => {
  const { t: n } = K(), [, r] = Bd(), { selectedLang: s } = Je(), o = ae(), i = t.replace("root.", ""), a = Pe(o == null ? void 0 : o._type), d = Be(_(a, "i18nProps", []), i) && s ? `${i}-${s}` : i, u = _(o, d, ""), p = M(() => _(Vn, s, s), [s]), f = () => {
    const h = o == null ? void 0 : o._id;
    r({ blockId: h, blockProp: d, placeholder: e, initialCode: u });
  };
  return /* @__PURE__ */ b("div", { className: "mt-2 flex flex-col gap-y-1", children: [
    /* @__PURE__ */ b("label", { htmlFor: t, children: [
      "HTML Code",
      p && /* @__PURE__ */ b("small", { className: "text-[9px] text-zinc-400", children: [
        " ",
        p
      ] })
    ] }),
    /* @__PURE__ */ l(
      "button",
      {
        onClick: f,
        className: "w-[90%] max-w-full cursor-default truncate text-pretty rounded border border-border bg-background p-2 text-left text-[10px]",
        children: u.trim().length > 0 ? u.substring(0, 46) : e || "Eg: <script>console.log('Hello, world!');<\/script>"
      }
    ),
    /* @__PURE__ */ l(re, { onClick: f, size: "sm", variant: "outline", className: "w-fit", children: n("Open code editor") })
  ] });
}, px = ({ id: t, value: e, onChange: n, onBlur: r }) => {
  const s = G("collections", []), o = ae(), i = _(o, "repeaterItems", "").replace(/\{\{(.*)\}\}/g, "$1").replace(Dt, ""), a = ee(s, { id: i }), d = _(a, t === "root.filter" ? "filters" : "sorts", []);
  return /* @__PURE__ */ l("div", { children: /* @__PURE__ */ b("select", { value: e, onChange: (u) => n(u.target.value), onBlur: (u) => r(t, u.target.value), children: [
    /* @__PURE__ */ l("option", { value: "", children: "Select" }),
    d.map((u) => /* @__PURE__ */ l("option", { value: u.id, children: u.name }, u.id))
  ] }) });
}, fx = $s(() => import("./IconPicker-DtXDFa1g.js").then((t) => ({ default: t.IconPicker }))), hx = (t) => {
  try {
    let e = t.replace(/<svg([^>]*)\sheight="[^"]*"([^>]*)>/gi, "<svg$1$2>").replace(/<svg([^>]*)\swidth="[^"]*"([^>]*)>/gi, "<svg$1$2>");
    return e = e.replace(/>\s+</g, "><"), e = e.replace(/\n/g, "").replace(/\s{2,}/g, " "), e = e.replace(/\s+=/g, "=").replace(/=\s+/g, "="), e = e.replace(/<!--[\s\S]*?-->/g, ""), e.trim();
  } catch {
    return t;
  }
}, mx = ({ value: t, onChange: e, id: n }) => {
  const { t: r } = K(), [s, o] = $(t || "");
  z(() => {
    o(t || "");
  }, [t]);
  const i = (a) => {
    o(a);
    const c = hx(a);
    e(c);
  };
  return /* @__PURE__ */ b("div", { className: "mt-1 flex flex-col gap-2", id: "icon-picker-field", children: [
    /* @__PURE__ */ b("div", { className: "flex items-center gap-x-2", children: [
      /* @__PURE__ */ l("div", { className: "flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border bg-gray-50", children: s ? /* @__PURE__ */ l("div", { className: "h-6 w-6", dangerouslySetInnerHTML: { __html: s } }) : /* @__PURE__ */ l("span", { className: "text-xs text-gray-400", children: "SVG" }) }),
      /* @__PURE__ */ l(
        "textarea",
        {
          id: n,
          autoCapitalize: "off",
          autoCorrect: "off",
          spellCheck: "false",
          value: s,
          onChange: (a) => i(a.target.value),
          placeholder: r("SVG_code"),
          rows: 2,
          className: "no-scrollbar w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        }
      )
    ] }),
    /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l("div", { className: "text-xs text-muted-foreground", children: "Loading..." }), children: /* @__PURE__ */ l(fx, { onSelectIcon: i }) }),
      /* @__PURE__ */ l("p", { className: "text-xs text-muted-foreground", children: r("Paste SVG_code") })
    ] })
  ] });
}, $o = xe.Root, gx = xe.Trigger, bx = xe.Portal, Id = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  xe.Overlay,
  {
    ref: n,
    className: j(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e
  }
));
Id.displayName = xe.Overlay.displayName;
const Lr = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ b(bx, { children: [
  /* @__PURE__ */ l(Id, {}),
  /* @__PURE__ */ b(
    xe.Content,
    {
      ref: r,
      className: j(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        t
      ),
      ...n,
      children: [
        e,
        /* @__PURE__ */ b(xe.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ l(at, { className: "h-4 w-4" }),
          /* @__PURE__ */ l("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Lr.displayName = xe.Content.displayName;
const Fo = ({ className: t, ...e }) => /* @__PURE__ */ l("div", { className: j("flex flex-col space-y-1.5 text-center sm:text-left", t), ...e });
Fo.displayName = "DialogHeader";
const yx = ({ className: t, ...e }) => /* @__PURE__ */ l("div", { className: j("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t), ...e });
yx.displayName = "DialogFooter";
const Pr = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  xe.Title,
  {
    ref: n,
    className: j("text-lg font-semibold leading-none tracking-tight", t),
    ...e
  }
));
Pr.displayName = xe.Title.displayName;
const xx = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(xe.Description, { ref: n, className: j("text-sm text-muted-foreground", t), ...e }));
xx.displayName = xe.Description.displayName;
const qr = ({
  assetId: t,
  children: e,
  onSelect: n,
  mode: r = "image"
}) => {
  const [s, o] = $(!1), i = Zu();
  return /* @__PURE__ */ b($o, { open: s, onOpenChange: (c) => o(c), children: [
    /* @__PURE__ */ l(gx, { asChild: !0, children: e }),
    /* @__PURE__ */ b(Lr, { className: "flex max-h-[90vh] max-w-7xl border-border md:w-fit", children: [
      /* @__PURE__ */ l(Pr, { className: "sr-only", children: "Media Manager" }),
      /* @__PURE__ */ l("div", { className: "h-full w-full", children: i ? /* @__PURE__ */ l(i, { close: () => o(!1), onSelect: (...c) => {
        n.call(void 0, ...c), o(!1);
      }, mode: r, assetId: t }) : null })
    ] })
  ] });
};
qr.displayName = "MediaManagerModal";
function vx(t, e, n) {
  if (!t) return t;
  const { baseClasses: r, classes: s } = vn(t), o = (c) => c.split(" ").filter((d) => d && !(e && d === "w-full") && !(n && d === "h-full")).join(" "), i = o(r), a = o(s);
  return `${St}${i},${a}`;
}
const Wr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2Q1ZDdkYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIFBsYWNlaG9sZGVyPC90ZXh0Pjwvc3ZnPg==", wx = (t) => {
  var s;
  if (!t || Re(t, "data")) return "";
  const e = ((s = t.split("/").pop()) == null ? void 0 : s.split("?")[0]) || "";
  return [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".bmp", ".ico", ".avif"].some((o) => e.toLowerCase().endsWith(o)) ? e : "";
}, kx = ({ value: t, onChange: e, id: n, onBlur: r, uiSchema: s }) => {
  const { t: o } = K(), { selectedLang: i } = Je(), a = ae(), c = _t(), d = Un(), u = (s == null ? void 0 : s["ui:allowEmpty"]) === !0, p = n.split(".").pop() || "", f = i ? `_${p}Id-${i}` : `_${p}Id`, h = F(i) && (a == null ? void 0 : a._type) === "Image" && le(a, "assetId"), m = _(a, f, h ? a == null ? void 0 : a.assetId : ""), g = M(() => {
    if (!t || !a || !/\{\{.*?\}\}/.test(t)) return t;
    const k = { ...a, [p]: t }, T = Sl(k, d, { index: -1, key: "" });
    return _(T, p, t);
  }, [t, a, d, p]), y = !!m || g !== Wr && g !== "", x = (v) => {
    const k = wr(v) ? ye(v) : v;
    if (k) {
      e(k == null ? void 0 : k.url);
      const T = k == null ? void 0 : k.width, C = k == null ? void 0 : k.height, N = f.includes("mobile");
      if (a != null && a._id) {
        const E = {
          ...T && { [N ? "mobileWidth" : "width"]: T },
          ...C && { [N ? "mobileHeight" : "height"]: C },
          ...k.description && { alt: k.description }
        };
        if (Ge(E, f, k.id), (T || C) && (a != null && a._type) && (a != null && a.styles)) {
          const I = Ws(a._type), L = _(I, "styles", "");
          a.styles === L && (E.styles = vx(a.styles, T, C));
        }
        if (F(E)) return;
        c([a._id], E);
      }
    }
  }, w = B(() => {
    if (e(u ? "" : Wr), a != null && a._id) {
      const k = {}, T = f.includes("mobile");
      Ge(k, f, ""), Ge(k, T ? "mobileWidth" : "width", ""), Ge(k, T ? "mobileHeight" : "height", ""), c([a._id], k);
    }
  }, [a, e, c, f, u]), S = wx(g);
  return /* @__PURE__ */ b("div", { className: "mt-1.5 flex items-start gap-x-3", children: [
    g ? /* @__PURE__ */ b("div", { className: "group relative", children: [
      /* @__PURE__ */ l(
        "img",
        {
          src: g,
          className: "h-[72px] w-[72px] overflow-hidden rounded-md border border-border object-cover transition duration-200 " + (m && m !== "" ? "cursor-pointer group-hover:blur-sm" : ""),
          alt: ""
        }
      ),
      y && /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          onClick: w,
          className: "absolute -right-2 -top-2 z-20 rounded-full bg-destructive p-1 text-destructive-foreground hover:bg-destructive/90",
          children: /* @__PURE__ */ l(at, { className: "h-3 w-3" })
        }
      ),
      m && m !== "" && /* @__PURE__ */ l(qr, { onSelect: x, assetId: m, children: /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          className: "absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/10 opacity-0 transition duration-200 group-hover:bg-black/30 group-hover:opacity-100",
          children: /* @__PURE__ */ l(ko, { className: "h-4 w-4 text-white" })
        }
      ) })
    ] }) : /* @__PURE__ */ l(qr, { onSelect: x, mode: "image", assetId: m, children: /* @__PURE__ */ l("div", { className: "h-[72px] w-[72px] cursor-pointer rounded-md border border-border bg-[radial-gradient(#AAA,transparent_1px)] duration-300 [background-size:10px_10px]" }) }),
    /* @__PURE__ */ b("div", { className: "flex w-3/5 flex-col", children: [
      /* @__PURE__ */ b(Q, { children: [
        /* @__PURE__ */ l("p", { className: "max-w-[250px] truncate pr-2 text-xs text-gray-400", children: S }),
        /* @__PURE__ */ l(qr, { onSelect: x, assetId: "", children: /* @__PURE__ */ l("small", { className: "mb-1 h-6 w-full cursor-pointer rounded-md bg-secondary px-1 py-1 text-center text-xs text-secondary-foreground hover:bg-secondary/80", children: !F(g) && g !== Wr ? o("Replace image") : o("Choose image") }) }),
        /* @__PURE__ */ l("div", { className: "text-center text-xs text-gray-400", children: "OR" })
      ] }),
      /* @__PURE__ */ l(
        "input",
        {
          id: n,
          autoCapitalize: "off",
          autoCorrect: "off",
          spellCheck: "false",
          type: "url",
          className: "h-6 text-xs",
          placeholder: o("Enter image URL"),
          value: t === Wr ? "" : t,
          onBlur: ({ target: { value: v } }) => r(n, v),
          onChange: (v) => e(v.target.value)
        }
      )
    ] })
  ] });
}, Cx = Us(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Pi({ className: t, variant: e, ...n }) {
  return /* @__PURE__ */ l("div", { className: j(Cx({ variant: e }), t), ...n });
}
const Ts = Fn.Provider, Ne = Fn.Root, Se = Fn.Trigger, be = W.forwardRef(({ className: t, sideOffset: e = 4, ...n }, r) => /* @__PURE__ */ l(Fn.Portal, { children: /* @__PURE__ */ l(
  Fn.Content,
  {
    ref: r,
    sideOffset: e,
    className: j(
      "z-50 origin-[--radix-tooltip-content-transform-origin] overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...n
  }
) }));
be.displayName = Fn.Content.displayName;
const Rd = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  tt,
  {
    ref: n,
    className: j(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      t
    ),
    ...e
  }
));
Rd.displayName = tt.displayName;
const Ld = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ b("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ l(fl, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ l(
    tt.Input,
    {
      ref: n,
      className: j(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        t
      ),
      ...e
    }
  )
] }));
Ld.displayName = tt.Input.displayName;
const Pd = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  tt.List,
  {
    ref: n,
    className: j("max-h-[300px] overflow-y-auto overflow-x-hidden", t),
    ...e
  }
));
Pd.displayName = tt.List.displayName;
const Od = W.forwardRef((t, e) => /* @__PURE__ */ l(tt.Empty, { ref: e, className: "py-6 text-center text-sm", ...t }));
Od.displayName = tt.Empty.displayName;
const Dd = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  tt.Group,
  {
    ref: n,
    className: j(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      t
    ),
    ...e
  }
));
Dd.displayName = tt.Group.displayName;
const Nx = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(tt.Separator, { ref: n, className: j("-mx-1 h-px bg-border", t), ...e }));
Nx.displayName = tt.Separator.displayName;
const Bs = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  tt.Item,
  {
    ref: n,
    className: j(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      t
    ),
    ...e
  }
));
Bs.displayName = tt.Item.displayName;
const Oi = hr.Root, Di = hr.Trigger, zo = W.forwardRef(({ className: t, align: e = "center", sideOffset: n = 4, ...r }, s) => /* @__PURE__ */ l(hr.Portal, { children: /* @__PURE__ */ l(
  hr.Content,
  {
    ref: s,
    align: e,
    sideOffset: n,
    className: j(
      "z-50 w-72 origin-[--radix-popover-content-transform-origin] rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t
    ),
    ...r
  }
) }));
zo.displayName = hr.Content.displayName;
const Sx = ({ data: t, onSelect: e, dataType: n }) => {
  const [r, s] = te.useState([]), [o, i] = te.useState(t), a = (p) => Array.isArray(p) ? "array" : typeof p == "object" && p !== null ? "object" : "value", c = te.useCallback(
    (p) => {
      const f = (h) => n === "value" ? h === "value" || h === "object" : n === "array" ? h === "array" : h === n;
      p.type === "object" ? (s((h) => [...h, p.key]), i(p.value)) : f(p.type) && e([...r, p.key].join("."), n);
    },
    [r, e, n]
  ), d = te.useCallback(() => {
    if (r.length > 0) {
      const p = r.slice(0, -1);
      s(p), i(p.reduce((f, h) => f[h], t));
    }
  }, [r, t]), u = te.useMemo(() => o ? Object.entries(o).map(([p, f]) => ({ key: p, value: f, type: a(f) })).filter((p) => !Re(p.key, ar) && p.key.includes("/") ? !1 : n === "value" ? p.type === "value" || p.type === "object" : n === "array" ? p.type === "array" || p.type === "object" : n === "object" ? p.type === "object" : !0) : [], [o, n]);
  return /* @__PURE__ */ b(Rd, { className: "fields-command", children: [
    /* @__PURE__ */ l(Ld, { className: "border-none", placeholder: "Search..." }),
    /* @__PURE__ */ b(Pd, { children: [
      /* @__PURE__ */ l(Od, { children: er("No option found.") }),
      /* @__PURE__ */ b(Dd, { children: [
        r.length > 0 && /* @__PURE__ */ b(Bs, { onSelect: d, className: "flex items-center text-sm", children: [
          /* @__PURE__ */ l(hl, { className: "mr-2 h-4 w-4" }),
          er("Back")
        ] }),
        u.map((p) => /* @__PURE__ */ b(
          Bs,
          {
            value: p.key,
            disabled: !1,
            onSelect: () => c(p),
            className: "flex items-center justify-between",
            children: [
              /* @__PURE__ */ b("span", { className: "flex items-center gap-x-2", children: [
                Re(p.key, ar) ? /* @__PURE__ */ l(ml, {}) : Re(p.key, Dt) ? /* @__PURE__ */ l(gl, {}) : null,
                Re(p.key, ar) ? er("Repeater Data") : Re(p.key, Dt) ? p.key.replace(Dt, "") : p.key
              ] }),
              /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
                n === "object" && p.type === "object" && /* @__PURE__ */ l(
                  re,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "h-6 px-2 hover:bg-primary hover:text-primary-foreground",
                    onClick: (f) => {
                      f.stopPropagation(), e([...r, p.key].join("."), n);
                    },
                    children: er("Select")
                  }
                ),
                p.type === "object" && /* @__PURE__ */ l("div", { className: "cursor-pointer rounded p-1 hover:bg-muted", children: /* @__PURE__ */ l(Wn, { className: "h-4 w-4 opacity-50" }) })
              ] })
            ]
          },
          p.key
        ))
      ] })
    ] })
  ] });
};
function Md({ data: t, onSelect: e, dataType: n = "value" }) {
  const [r, s] = te.useState(!1), o = G("collections", []), i = te.useMemo(() => n === "array" ? { ...o.map((c) => c.id).reduce((c, d) => ({ ...c, [Dt + d]: [] }), {}), ...t } : t, [t, o, n]);
  return /* @__PURE__ */ b(Oi, { open: r, onOpenChange: s, children: [
    /* @__PURE__ */ b(Ne, { children: [
      /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(Di, { asChild: !0, children: /* @__PURE__ */ l(
        re,
        {
          size: "sm",
          variant: "ghost",
          className: "h-5 rounded-sm px-1 py-0 text-[9px] text-muted-foreground",
          role: "combobox",
          "aria-expanded": r,
          children: /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24px", height: "24px", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ l(
            "path",
            {
              d: "M9.5 5H9C7.89543 5 7 5.89543 7 7V9C7 10 6.4 12 4 12C5 12 7 12.6 7 15V17.0002C7 18.1048 7.89543 19 9 19H9.5M14.5 5H15C16.1046 5 17 5.89543 17 7V9C17 10 17.6 12 20 12C19 12 17 12.6 17 15V17.0002C17 18.1048 16.1046 19 15 19H14.5",
              stroke: "#000000",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2"
            }
          ) })
        }
      ) }) }),
      /* @__PURE__ */ l(be, { children: er("Add field") })
    ] }),
    /* @__PURE__ */ l(zo, { className: "z-[1000]! relative mr-3 w-[300px] p-0", children: /* @__PURE__ */ l(
      Sx,
      {
        data: i,
        onSelect: (a, c) => {
          e(a, c), s(!1);
        },
        dataType: n
      }
    ) })
  ] });
}
const $d = ({
  schema: t,
  onChange: e,
  id: n,
  formData: r
}) => {
  const s = Un(), o = G("flags.dataBinding", !0), i = nh(), a = ae(), c = M(() => {
    if (i.length === 1) return "";
    const p = i.find((m) => m._type === "Repeater"), h = _(p, "repeaterItems", "").replace(/\{\{(.*)\}\}/g, "$1");
    return `${ar}${Re(h, Dt) ? `${h}/${p == null ? void 0 : p._id}` : h}`;
  }, [i]), d = M(() => ye(_(s, c.replace(ar, ""), [])), [c, s]), u = B(
    (p, f) => {
      if (p = F(c) ? p : p.replace(`${c}`, "$index"), f === "array" || f === "object") {
        e(`{{${p}}}`, {}, n);
        return;
      }
      const h = (x) => /[.,!?;:]/.test(x), m = (x, w, S) => {
        let v = "", k = "";
        const T = w > 0 ? x[w - 1] : "", C = w < x.length ? x[w] : "";
        return w > 0 && (T === "." || !h(T) && T !== " ") && (v = " "), w < x.length && !h(C) && C !== " " && (k = " "), {
          text: v + S + k,
          prefixLength: v.length,
          suffixLength: k.length
        };
      }, g = document.getElementById(n);
      if (!g) return;
      const y = document.getElementById(`chai-rte-${n}`) || document.getElementById(`chai-rte-modal-${n}`);
      if (y && (y.querySelector(".ProseMirror") || y.__chaiRTE)) {
        const x = y.__chaiRTE;
        if (x) {
          const w = `{{${p}}}`;
          x.commands.focus();
          const { from: S, to: v } = x.state.selection;
          if (S !== v)
            x.chain().deleteSelection().insertContent(w).run();
          else {
            const { state: T } = x, C = T.selection.from, N = T.doc.textBetween(Math.max(0, C - 1), C), E = T.doc.textBetween(C, Math.min(C + 1, T.doc.content.size));
            let I = "";
            C > 0 && N !== " " && !h(N) && (I = " ");
            let L = "";
            E && E !== " " && !h(E) && (L = " "), x.chain().insertContent(I + w + L).run();
          }
          setTimeout(() => e(x.getHTML(), {}, n), 100);
          return;
        }
      } else {
        const x = g, w = x.selectionStart || 0, S = x.value || "", v = x.selectionEnd || w;
        if (v > w) {
          const E = `{{${p}}}`, { text: I } = m(S, w, E), L = S.slice(0, w) + I + S.slice(v);
          e(L, {}, n);
          return;
        }
        const T = `{{${p}}}`, { text: C } = m(S, w, T), N = S.slice(0, w) + C + S.slice(w);
        e(N, {}, n);
      }
    },
    [n, e, r, a == null ? void 0 : a._id, c]
  );
  return o ? /* @__PURE__ */ l(
    Md,
    {
      data: {
        ...d && { [c]: d },
        ...s
      },
      onSelect: u,
      dataType: t.binding === "array" ? "array" : "value"
    }
  ) : null;
}, Ex = (t) => {
  const { id: e, classNames: n, label: r, children: s, errors: o, help: i, hidden: a, required: c, schema: d, formData: u, onChange: p } = t, { selectedLang: f, fallbackLang: h, languages: m } = Je(), g = M(
    () => F(m) ? "" : F(f) ? h : f,
    [m, f, h]
  ), y = M(() => _(Vn, g, g), [g]), x = Un(), w = ae(), S = Gs(), v = M(
    () => _(S, [w == null ? void 0 : w._type, "i18nProps"], []),
    [S, w == null ? void 0 : w._type]
  ), [k, T] = $(null);
  if (a)
    return null;
  if (d.type === "boolean") return /* @__PURE__ */ l("div", { className: n, children: s });
  const N = v == null ? void 0 : v.includes(e.replace("root.", ""));
  if (d.type === "array") {
    const L = k === e;
    return /* @__PURE__ */ b("div", { className: `${n} relative`, children: [
      d.title && /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-1", children: /* @__PURE__ */ b(
        "label",
        {
          htmlFor: e,
          onClick: () => T(L ? null : e),
          className: "flex cursor-pointer items-center gap-x-1 py-1 leading-tight duration-200 hover:bg-slate-100",
          children: [
            L ? /* @__PURE__ */ l(xn, { className: "h-3 w-3" }) : /* @__PURE__ */ l(Wn, { className: "h-3 w-3" }),
            /* @__PURE__ */ l(bs, { className: "h-3 w-3" }),
            /* @__PURE__ */ l("span", { className: "leading-tight", children: r }),
            " ",
            /* @__PURE__ */ l(Pi, { className: "m-0 bg-gray-200 px-2 leading-tight text-gray-500 hover:bg-gray-200 hover:text-gray-500", children: /* @__PURE__ */ l("span", { className: "text-[9px] font-medium text-slate-600", children: u == null ? void 0 : u.length }) }),
            d.description && /* @__PURE__ */ l(Ts, { children: /* @__PURE__ */ b(Ne, { children: [
              /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(
                pr,
                {
                  className: "h-3 w-3 text-muted-foreground/70",
                  onClick: (R) => R.stopPropagation(),
                  onMouseDown: (R) => R.stopPropagation()
                }
              ) }),
              /* @__PURE__ */ l(be, { className: "max-w-xs", children: d.description })
            ] }) })
          ]
        }
      ) }),
      (u == null ? void 0 : u.length) === 0 ? /* @__PURE__ */ l("div", { className: "h-0 overflow-hidden", children: s }) : /* @__PURE__ */ b("div", { className: `${L ? "pt-0.5" : "h-0 overflow-hidden"}`, children: [
        s,
        o,
        i
      ] })
    ] });
  }
  const E = e.replace("root.", ""), I = v.includes(E) && !F(f) && F(u);
  return /* @__PURE__ */ b("div", { className: n, children: [
    d.title && /* @__PURE__ */ b("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ b("label", { htmlFor: e, className: d.type === "object" ? "pb-2" : "", children: [
          r,
          " ",
          N && /* @__PURE__ */ b("small", { className: "text-[9px] text-zinc-400", children: [
            " ",
            y
          ] }),
          c && d.type !== "object" ? " *" : null
        ] }),
        d.description && /* @__PURE__ */ l(Ts, { children: /* @__PURE__ */ b(Ne, { children: [
          /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(pr, { className: "h-3 w-3 text-muted-foreground/70" }) }),
          /* @__PURE__ */ l(be, { className: "max-w-xs", children: d.description })
        ] }) })
      ] }),
      !d.enum && !d.oneOf && x && /* @__PURE__ */ b("span", { className: "flex items-center space-x-1", children: [
        I ? /* @__PURE__ */ b(Ne, { children: [
          /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ b(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              className: "lucide lucide-triangle-alert-icon lucide-triangle-alert h-3 w-3 text-orange-400",
              children: [
                /* @__PURE__ */ l("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }),
                /* @__PURE__ */ l("path", { d: "M12 9v4" }),
                /* @__PURE__ */ l("path", { d: "M12 17h.01" })
              ]
            }
          ) }),
          /* @__PURE__ */ b(be, { className: "max-w-xs", children: [
            "No translation provided. ",
            /* @__PURE__ */ l("br", {}),
            "Using default language value."
          ] })
        ] }) : null,
        /* @__PURE__ */ l(
          $d,
          {
            schema: d,
            onChange: (L) => {
              p(L, u, e);
            },
            id: e,
            formData: u
          }
        )
      ] })
    ] }),
    s,
    o,
    i
  ] });
}, _x = ({ href: t, onChange: e }) => {
  const { t: n } = K(), r = G("searchPageTypeItems", (v, k) => []), [s, o] = $(!1), [i, a] = $(!1), [c, d] = $(""), [u, p] = $([]), [f, h] = $(-1), m = ne(null);
  z(() => {
    if (d(""), p([]), h(-1), a(!1), !t || s || !Re(t, "pageType:")) return;
    const v = zu(t, ":");
    (async () => {
      const k = await r("", [_(v, 2, "page")]);
      k && Array.isArray(k) && d(_(k, [0, "name"], ""));
    })();
  }, [t]);
  const g = Nt(
    async (v) => {
      if (F(v))
        p([]);
      else {
        const k = await r("", v);
        p(k);
      }
      o(!1), h(-1);
    },
    [],
    300
  ), y = (v) => {
    const k = ["pageType", v.pageType || "page", v.primaryPage ?? v.id];
    e(k.join(":")), d(v.name), a(!1), p([]), h(-1);
  }, x = (v) => {
    switch (v.key) {
      case "ArrowDown":
        v.preventDefault(), h((k) => k < u.length - 1 ? k + 1 : k);
        break;
      case "ArrowUp":
        v.preventDefault(), h((k) => k > 0 ? k - 1 : k);
        break;
      case "Enter":
        if (v.preventDefault(), u.length === 0) return;
        f >= 0 && y(u[f]);
        break;
      case "Escape":
        v.preventDefault(), w();
        break;
    }
  };
  z(() => {
    if (f >= 0 && m.current) {
      const v = m.current.children[f];
      v == null || v.scrollIntoView({ block: "nearest" });
    }
  }, [f]);
  const w = () => {
    d(""), p([]), h(-1), a(!1), e("");
  }, S = (v) => {
    d(v), a(!F(v)), o(!0), g(v);
  };
  return /* @__PURE__ */ b("div", { children: [
    /* @__PURE__ */ b("div", { className: "group relative flex items-center", children: [
      /* @__PURE__ */ l(
        "input",
        {
          type: "text",
          value: c,
          onChange: (v) => S(v.target.value),
          onKeyDown: x,
          placeholder: n("Search pages"),
          className: "w-full rounded-md border border-gray-300 p-2 pr-16"
        }
      ),
      /* @__PURE__ */ l("div", { className: "absolute bottom-2 right-2 top-3 flex items-center gap-1.5", children: c && /* @__PURE__ */ l("button", { onClick: w, className: "text-gray-400 hover:text-gray-600", title: n("Clear search"), children: /* @__PURE__ */ l(at, { className: "h-4 w-4" }) }) })
    ] }),
    (s || !F(u) || i && F(u)) && /* @__PURE__ */ l("div", { className: "absolute z-40 mt-2 max-h-40 w-full max-w-[250px] overflow-y-auto rounded-md border border-border bg-background shadow-lg", children: s ? /* @__PURE__ */ b("div", { className: "space-y-1 p-2", children: [
      /* @__PURE__ */ l("div", { className: "h-6 w-full animate-pulse rounded bg-gray-200" }),
      /* @__PURE__ */ l("div", { className: "h-6 w-full animate-pulse rounded bg-gray-200" })
    ] }) : i && F(u) ? /* @__PURE__ */ b("div", { className: "flex items-center justify-center p-4 text-sm text-gray-500", children: [
      n("No results found for"),
      ' "',
      c,
      '"'
    ] }) : /* @__PURE__ */ l("ul", { ref: m, children: A(u == null ? void 0 : u.slice(0, 20), (v, k) => /* @__PURE__ */ b(
      "li",
      {
        onClick: () => y(v),
        className: `cursor-pointer p-2 text-xs ${t != null && t.includes(v.id) ? "bg-blue-200" : k === f ? "bg-gray-100" : "hover:bg-gray-100"}`,
        children: [
          v.name,
          " ",
          v.slug && /* @__PURE__ */ b("small", { className: "font-light text-gray-500", children: [
            "( ",
            v.slug,
            " )"
          ] }),
          v.lang && /* @__PURE__ */ l("small", { className: "ml-1 rounded bg-gray-200 px-1 py-0.5 text-[10px] font-medium text-gray-600", children: v.lang })
        ]
      },
      v.id
    )) }) })
  ] });
}, Ax = ({ schema: t, formData: e, onChange: n, name: r }) => {
  const { t: s } = K(), { type: o = "pageType", href: i = "", target: a = "self" } = e ?? {}, c = G("pageTypes", []), { selectedLang: d, fallbackLang: u, languages: p } = Je(), f = M(
    () => F(p) ? "" : F(d) ? u : d,
    [p, d, u]
  ), h = M(() => _(Vn, f, f), [f]), m = o === "pageType" && F(c) ? "url" : o;
  return /* @__PURE__ */ b("div", { children: [
    /* @__PURE__ */ b("span", { className: "flex items-center justify-between gap-x-2 text-xs font-medium", children: [
      /* @__PURE__ */ b("span", { children: [
        (t == null ? void 0 : t.title) ?? "Link",
        /* @__PURE__ */ l("span", { className: "pl-1 text-[9px] text-zinc-400", children: h })
      ] }),
      /* @__PURE__ */ l(
        $d,
        {
          schema: t,
          onChange: (g) => {
            n({ ...e, href: g, ...m === "pageType" ? { type: "url" } : {} });
          },
          id: `root.${r}.href`,
          formData: e
        }
      )
    ] }),
    /* @__PURE__ */ b("div", { className: "flex flex-col gap-y-1.5", children: [
      /* @__PURE__ */ l("select", { name: "type", value: o, onChange: (g) => n({ ...e, type: g.target.value }), children: A(
        [
          ...F(c) ? [] : [{ const: "pageType", title: s("Goto Page") }],
          { const: "url", title: s("Open URL") },
          { const: "email", title: s("Compose Email") },
          { const: "telephone", title: s("Call Phone") },
          { const: "scroll", title: s("Scroll to element") }
        ],
        (g) => /* @__PURE__ */ l("option", { value: g.const, children: g.title }, g.const)
      ) }),
      m === "pageType" && !F(c) ? /* @__PURE__ */ l(_x, { href: i, onChange: (g) => n({ ...e, href: g }) }) : null,
      /* @__PURE__ */ l(
        "input",
        {
          id: `root.${r}.href`,
          autoCapitalize: "off",
          autoCorrect: "off",
          spellCheck: "false",
          name: "href",
          type: "text",
          className: m === "pageType" ? "!hidden" : "",
          value: i,
          onChange: (g) => n({ ...e, href: g.target.value }),
          placeholder: s(o === "url" ? "Enter URL" : o === "scroll" ? "#ElementID" : "Enter details")
        }
      ),
      m === "url" && /* @__PURE__ */ b("div", { className: "flex items-center gap-x-2 text-muted-foreground", children: [
        /* @__PURE__ */ l(
          "input",
          {
            id: `root.${r}.target`,
            autoCapitalize: "off",
            autoCorrect: "off",
            spellCheck: "false",
            type: "checkbox",
            checked: a === "_blank",
            className: "!w-fit cursor-pointer rounded-md border border-border",
            onChange: () => n({ ...e, target: a === "_blank" ? "_self" : "_blank" })
          }
        ),
        /* @__PURE__ */ l("span", { className: "pt-1 text-xs", children: s("Open in new tab") })
      ] })
    ] })
  ] });
}, Tx = ({ value: t, onChange: e }) => {
  var o;
  if (!t)
    return /* @__PURE__ */ b("div", { className: "mt-1 flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-2 py-1.5 text-xs text-gray-500 text-gray-600", children: [
      /* @__PURE__ */ l(xp, { className: "h-4 w-4" }),
      " Choose a collection"
    ] });
  const n = `{{${Dt}`, r = t == null ? void 0 : t.startsWith(n);
  let s = t;
  return r && (s = (o = t == null ? void 0 : t.replace(n, "")) == null ? void 0 : o.replace("}}", "")), /* @__PURE__ */ l("div", { className: "mt-1 flex flex-col gap-1", children: /* @__PURE__ */ b("div", { className: "flex items-center justify-between gap-2 rounded-md border border-blue-200 bg-blue-50 px-2 py-1 text-xs text-blue-600", children: [
    /* @__PURE__ */ b("span", { className: "flex max-w-[200px] items-center gap-2", children: [
      " ",
      r ? /* @__PURE__ */ l(gl, { className: "h-3 min-h-3 w-3 min-w-3" }) : null,
      /* @__PURE__ */ b(Ne, { delayDuration: 500, children: [
        /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l("span", { className: "cursor-default truncate", children: s }) }),
        /* @__PURE__ */ l(be, { side: "left", hidden: s.length < 50, children: s })
      ] })
    ] }),
    /* @__PURE__ */ b(Ne, { children: [
      /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(
        re,
        {
          variant: "ghost",
          size: "icon",
          className: "h-5 w-5 rounded-full bg-gray-200 text-gray-900 hover:bg-gray-300",
          onClick: () => e(""),
          children: /* @__PURE__ */ l(at, { className: "h-4 w-4" })
        }
      ) }),
      /* @__PURE__ */ l(be, { side: "left", children: "Remove binding" })
    ] })
  ] }) });
}, Fd = P((t) => {
  var i;
  const e = t(He), n = t(Ao), r = n.length === 1 ? n[0] : null;
  if (!r) return null;
  const s = ee(e, { _id: r });
  if (!s) return null;
  let o = s._parent;
  for (; o; ) {
    const a = ee(e, { _id: o });
    if (!a) return null;
    if ((i = Pe(a._type)) != null && i.wrapper)
      return a;
    o = a._parent;
  }
  return null;
});
Fd.debugLabel = "wrapperBlockAtom";
const Mi = () => Ue(Fd), Bx = () => {
  const t = ae(), e = Mi(), { addCoreBlock: n } = Nn();
  if (!t && !e) return null;
  const r = (t == null ? void 0 : t._type) === "Row" ? t : e;
  return /* @__PURE__ */ l("div", { className: "pt-1", children: /* @__PURE__ */ b(
    "button",
    {
      type: "button",
      className: "duratiom-300 flex items-center gap-x-1 rounded border border-gray-400 bg-gray-100 px-4 py-1 text-[11px] font-medium leading-tight hover:bg-slate-200",
      onClick: () => n({ type: "Column", styles: "#styles:," }, r == null ? void 0 : r._id),
      children: [
        /* @__PURE__ */ l(qe, { className: "h-4 w-4" }),
        " Add Column"
      ]
    }
  ) });
}, Ix = te.lazy(() => import("./rte-widget-modal-DlVy56_Y.js")), Rx = ({ blockId: t, id: e, placeholder: n, value: r, onChange: s, onBlur: o }) => {
  const i = ne(null), [a, c] = $(!1), d = Ed({
    blockId: t,
    value: r,
    placeholder: n,
    onBlur: ({ editor: f }) => {
      const h = f == null ? void 0 : f.getHTML();
      o(e, h);
    },
    onUpdate: ({ editor: f }) => {
      const h = f == null ? void 0 : f.getHTML();
      s(h);
    }
  });
  z(() => {
    i.current && d && (i.current.__chaiRTE = d);
  }, [t, d]);
  const u = () => {
    c(!1);
  }, p = /* @__PURE__ */ b("div", { id: `chai-rte-${e}`, ref: i, className: "mt-1 rounded-md border border-input", children: [
    /* @__PURE__ */ l(Rc, { editor: d, onExpand: () => c(!0) }),
    /* @__PURE__ */ l(
      El,
      {
        editor: d,
        id: e,
        placeholder: n,
        className: `overflow-auto ${a ? "max-h-[500px] min-h-[400px]" : "max-h-[200px] min-h-[100px]"}`
      },
      e
    )
  ] });
  return /* @__PURE__ */ b(Q, { children: [
    a && /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l("div", { children: "Loading..." }), children: /* @__PURE__ */ l(Ix, { isOpen: a, onClose: u, editor: d, rteElement: p }) }),
    a ? /* @__PURE__ */ l("div", { children: "Open in modal" }) : /* @__PURE__ */ l("div", { className: "relative", children: p })
  ] });
}, Lx = (t) => {
  const { editingBlockId: e } = Sn(), [n, r] = $(null), s = ae(), o = s == null ? void 0 : s._id;
  return z(() => {
    r(o);
  }, [o]), n && n !== e ? /* @__PURE__ */ l(Rx, { ...t, blockId: n }, n) : null;
}, Px = ({ formData: t, onChange: e }) => {
  const [n] = ue(), r = ae(), s = Mi(), { addCoreBlock: o } = Nn(), [, i] = oe(), a = (r == null ? void 0 : r._type) === "Slider" ? r : s, c = ee(n, { _parent: a == null ? void 0 : a._id, _type: "Slides" }), d = Z(n, { _parent: c == null ? void 0 : c._id, _type: "Slide" }), u = (t == null ? void 0 : t.currentSlide) || _(d, "0._id");
  if (z(() => {
    (r == null ? void 0 : r._type) === "Slide" && (t == null ? void 0 : t.currentSlide) !== (r == null ? void 0 : r._id) && e({ ...t, currentSlide: r == null ? void 0 : r._id });
  }, [r]), z(() => {
    d != null && d.length && !ee(d, { _id: t == null ? void 0 : t.currentSlide }) && e({ ...t, currentSlide: _(d, "0._id") });
  }, [t, d]), !r && !s || !c) return null;
  const p = () => {
    const m = ir(d, { _id: u });
    if (m > -1) {
      const g = (m + 1) % d.length, y = _(d, [g, "_id"]);
      if (!y) return;
      e({ ...t, currentSlide: y }), i([y]);
    }
  }, f = () => {
    const m = ir(d, { _id: u });
    if (m > -1) {
      const g = (m - 1 + d.length) % d.length, y = _(d, [g, "_id"]);
      if (!y) return;
      e({ ...t, currentSlide: y }), i([y]);
    }
  }, h = () => {
    const m = o(
      { styles: "#styles:,h-full w-full min-w-full", type: "Slide" },
      c == null ? void 0 : c._id
    ), g = m == null ? void 0 : m._id;
    g && (e({ ...t, currentSlide: g }), i([g]));
  };
  return /* @__PURE__ */ b("div", { className: "space-y-1.5 px-2", children: [
    /* @__PURE__ */ b("div", { className: "flex items-center gap-x-2 pb-2 text-[12px]", children: [
      /* @__PURE__ */ l("button", { onClick: f, className: "rounded bg-gray-200 p-1.5 hover:opacity-80", children: /* @__PURE__ */ l(hl, { className: "h-3 w-3" }) }),
      /* @__PURE__ */ l("div", { className: "whitespace-nowrap text-center text-[10px] text-slate-500", children: u ? /* @__PURE__ */ b("span", { className: "", children: [
        /* @__PURE__ */ b("b", { className: "text-[12px]", children: [
          " ",
          ir(d, { _id: u }) + 1
        ] }),
        "/",
        d.length
      ] }) : "-" }),
      /* @__PURE__ */ l("button", { onClick: p, className: "rounded bg-gray-200 p-1.5 hover:opacity-80", children: /* @__PURE__ */ l(Wn, { className: "h-3 w-3" }) }),
      /* @__PURE__ */ b(
        "button",
        {
          onClick: h,
          className: "flex w-full items-center justify-center gap-x-1 rounded bg-gray-200 p-1.5 text-xs font-medium leading-tight hover:opacity-80",
          children: [
            /* @__PURE__ */ l(vp, { className: "h-3 w-3" }),
            "Add Slide"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ b("div", { className: "flex items-center gap-x-2 leading-tight", children: [
      /* @__PURE__ */ l(
        "input",
        {
          type: "checkbox",
          checked: !!(t != null && t.showSlideButton),
          onChange: () => e({ ...t, showSlideButton: !(t != null && t.showSlideButton) }),
          className: "cursor-pointer"
        }
      ),
      /* @__PURE__ */ l("label", { htmlFor: "autoplay", className: "mt-0.5 text-[12px]", children: "Show Slide Buttons" })
    ] }),
    /* @__PURE__ */ b("div", { className: "flex items-center gap-x-2 leading-tight", children: [
      /* @__PURE__ */ l(
        "input",
        {
          type: "checkbox",
          checked: !!(t != null && t.showSlideNavbar),
          onChange: () => e({ ...t, showSlideNavbar: !(t != null && t.showSlideNavbar) }),
          className: "cursor-pointer"
        }
      ),
      /* @__PURE__ */ l("label", { htmlFor: "autoplay", className: "mt-0.5 text-[12px]", children: "Show Slide Navbar" })
    ] }),
    /* @__PURE__ */ l("div", { children: /* @__PURE__ */ b("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ b("div", { className: "flex items-center gap-x-2 leading-tight", children: [
        /* @__PURE__ */ l(
          "input",
          {
            type: "checkbox",
            checked: !!(t != null && t.autoplay),
            onChange: () => e({ ...t, autoplay: !(t != null && t.autoplay) }),
            className: "cursor-pointer"
          }
        ),
        /* @__PURE__ */ l("label", { htmlFor: "autoplay", className: "mt-0.5 text-[12px]", children: "Autoplay slides" })
      ] }),
      (t == null ? void 0 : t.autoplay) && /* @__PURE__ */ b("div", { className: "pt-0.5 leading-tight", children: [
        /* @__PURE__ */ b("label", { htmlFor: "interval", className: "whitespace-nowrap text-[9px]", children: [
          "Autoplay Interval ",
          /* @__PURE__ */ l("span", { className: "font-light opacity-80", children: "(in seconds)" })
        ] }),
        /* @__PURE__ */ l(
          "input",
          {
            type: "number",
            id: "interval",
            name: "interval",
            placeholder: "0",
            value: t == null ? void 0 : t.autoplayInterval,
            className: "text-xs",
            pattern: "[0-9]*",
            onChange: (m) => {
              let g = m.target.value;
              g.length && (g = g.replace("-", "")), e({ ...t, autoplayInterval: g });
            }
          }
        )
      ] })
    ] }) })
  ] });
}, Ox = ({ formData: t, onChange: e }) => {
  const n = _(t, "srcsets", []) || [], r = (i, a) => {
    const c = i.target.name, d = i.target.value;
    e({
      srcsets: A(n, (u, p) => p === a ? { ...u, [c]: d } : u)
    });
  }, s = () => {
    e({ srcsets: [...n, {}] });
  }, o = (i) => {
    e({ srcsets: Ur(n, (a, c) => parseInt(c) === i) });
  };
  return /* @__PURE__ */ b("div", { children: [
    /* @__PURE__ */ b("div", { className: "flex items-center justify-between pb-2", children: [
      /* @__PURE__ */ l("label", { children: "Responsive Video (optional)" }),
      /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          onClick: s,
          className: "flex items-center gap-x-1 rounded-md border border-blue-500 bg-blue-100 px-2 py-px text-xs text-blue-600 hover:opacity-80",
          children: /* @__PURE__ */ l(qe, { className: "h-3 w-3" })
        }
      )
    ] }),
    /* @__PURE__ */ l("div", { className: "space-y-2", children: n.length === 0 ? /* @__PURE__ */ l("div", { className: "rounded border border-dashed border-gray-200 p-2 text-xs italic text-gray-500", children: "Add additional sources to create responsive videos" }) : A(n, (i, a) => /* @__PURE__ */ b("div", { className: "group relative space-y-1.5 rounded border border-gray-200 px-2 pb-1.5", children: [
      /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          onClick: () => o(a),
          className: "absolute -right-px -top-0 -translate-y-1/2 rounded-full bg-red-100 p-1 opacity-0 hover:bg-red-200 group-hover:opacity-100",
          children: /* @__PURE__ */ l(at, { className: "h-2.5 w-2.5 text-red-500" })
        }
      ),
      /* @__PURE__ */ b("div", { className: "flex items-center gap-x-2 rounded border", children: [
        /* @__PURE__ */ l("label", { className: "flex !h-6 h-full w-1/4 items-center justify-center bg-gray-200 px-2 !text-[10px] !font-medium", children: "Width" }),
        /* @__PURE__ */ l(
          "input",
          {
            name: "width",
            placeholder: "Enter width (in px)",
            type: "number",
            value: _(i, "width"),
            onChange: (c) => r(c, a),
            className: "!placeholder:text-gray-100 !mt-0 !rounded-none !border-0 !p-0 !text-xs"
          }
        )
      ] }),
      /* @__PURE__ */ b("div", { className: "flex items-center gap-x-2 rounded border", children: [
        /* @__PURE__ */ l("label", { className: "flex !h-6 h-full w-1/4 items-center justify-center bg-gray-200 px-2 !text-[10px] !font-medium", children: "URL" }),
        /* @__PURE__ */ l(
          "input",
          {
            name: "url",
            placeholder: "Enter url",
            className: "!mt-0 !rounded-none !border-0 !p-0 !text-xs !shadow-none",
            value: _(i, "url", ""),
            onChange: (c) => r(c, a)
          }
        )
      ] })
    ] }, a)) })
  ] });
}, Dx = (t) => /* @__PURE__ */ l("button", { ...t, className: "duration absolute right-2 top-2 cursor-pointer text-blue-400 hover:text-blue-500", children: /* @__PURE__ */ b("div", { className: "flex items-center gap-x-0.5 text-[11px] leading-tight", children: [
  /* @__PURE__ */ l(qe, { className: "h-3 w-3" }),
  " ",
  /* @__PURE__ */ l("span", { children: "Add" })
] }) }), Pa = kr(({ blockId: t, schema: e, uiSchema: n, formData: r, onChange: s }) => {
  const { selectedLang: o } = Je(), i = Zo("widget"), a = Zo("field"), c = Zo("template"), d = pn(
    async ({ formData: u }, p) => {
      _(u, p) === void 0 && Ge(u, p, ""), s({ formData: u }, p);
    },
    [s, o],
    400
    // save only every 5 seconds
  );
  return /* @__PURE__ */ l(
    ef,
    {
      widgets: {
        richtext: Lx,
        icon: mx,
        image: kx,
        code: ux,
        colCount: Bx,
        collectionSelect: px,
        repeaterBinding: Tx,
        ...i
      },
      fields: {
        link: Ax,
        slider: Px,
        sources: Ox,
        ...a
      },
      templates: {
        FieldTemplate: Ex,
        ButtonTemplates: {
          AddButton: Dx
        },
        ...c
      },
      idSeparator: ".",
      autoComplete: "off",
      omitExtraData: !1,
      liveOmit: !1,
      liveValidate: !1,
      validator: tf,
      uiSchema: n,
      schema: e,
      formData: r,
      onChange: ({ formData: u }, p) => {
        if (!p || t !== (u == null ? void 0 : u._id)) return;
        const f = Hu(p.split("."), 2).join(".").replace("root.", "");
        d({ formData: u }, f);
      }
    },
    o
  );
}), Ho = W.forwardRef(
  ({
    className: t,
    thumbClassName: e,
    ...n
  }, r) => /* @__PURE__ */ l(
    vs.Root,
    {
      className: j(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        t
      ),
      ...n,
      ref: r,
      children: /* @__PURE__ */ l(
        vs.Thumb,
        {
          className: j(
            "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform",
            e,
            "data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  )
);
Ho.displayName = vs.Root.displayName;
const Mx = new df({
  tags: ["{{", "}}"],
  autoEscape: !0,
  autoTrim: !1,
  useWith: !0,
  parse: { interpolate: "", exec: "~", raw: "~" }
}), $x = [
  /\b(?:window|document|globalThis|process|Function|eval|import|fetch|XMLHttpRequest|WebSocket|localStorage|sessionStorage)\b/,
  /(^|[^=!<>])=([^=]|$)/,
  /\b(?:while|for|try|catch|class|new)\b/
], zd = (t) => wr(t) ? "array" : t === null ? "null" : Os(t) ? "JSON" : typeof t, us = (t, e) => {
  const n = e ? _(t, e) : t;
  return !Os(n) || n === null || wr(n) ? [] : Object.entries(n).filter(([r]) => !r.startsWith("#")).map(([r, s]) => ({
    path: e ? `${e}.${r}` : r,
    type: zd(s)
  }));
}, Gr = (t) => {
  const e = t.trim();
  if (!e) return null;
  if ($x.some((r) => r.test(e)))
    return "Unsafe expression detected";
  try {
    return Mx.compile(`{{${e}}}`), null;
  } catch {
    return "Invalid expression syntax";
  }
}, Fx = ({ currentExpression: t, externalData: e, onSave: n }) => {
  const r = ne(null), s = ne(null), [o, i] = $(t), [a, c] = $(null), [d, u] = $(0), [p, f] = $(null);
  z(() => {
    i(t), c(Gr(t)), f(null), u(0);
  }, [t]);
  const h = M(
    () => Object.entries(e ?? {}).filter(([y]) => !y.startsWith("#")).map(([y, x]) => ({
      key: y,
      type: zd(x)
    })),
    [e]
  ), m = (y, x) => {
    const S = y.slice(0, x).match(/[A-Za-z_$][\w$.]*\.?$/);
    if (!S) {
      f(null);
      return;
    }
    const v = S[0];
    let k;
    if (v.endsWith(".")) {
      const T = v.slice(0, -1);
      k = us(e, T);
    } else {
      const T = v.lastIndexOf(".");
      if (T === -1)
        k = us(e, "").filter((C) => C.path.toLowerCase().startsWith(v.toLowerCase()));
      else {
        const C = v.slice(0, T), N = v.slice(T + 1).toLowerCase();
        k = us(e, C).filter((E) => E.path.slice(E.path.lastIndexOf(".") + 1).toLowerCase().startsWith(N));
      }
    }
    if (k = k.slice(0, 8), !k.length) {
      f(null), u(0);
      return;
    }
    f({
      start: x - v.length,
      end: x,
      options: k
    }), u(0);
  }, g = (y) => {
    if (!p) return;
    const x = o.slice(0, p.start) + y + o.slice(p.end);
    i(x), c(Gr(x)), f(null), u(0), requestAnimationFrame(() => {
      var S, v;
      const w = p.start + y.length;
      (S = r.current) == null || S.focus(), (v = r.current) == null || v.setSelectionRange(w, w);
    });
  };
  return z(() => {
    if (!p || !s.current) return;
    const y = s.current.children[d];
    y == null || y.scrollIntoView({ block: "nearest" });
  }, [d, p]), /* @__PURE__ */ b("div", { className: "grid gap-2", children: [
    /* @__PURE__ */ b("div", { children: [
      /* @__PURE__ */ l("p", { className: "mb-1 text-[10px] font-medium text-muted-foreground", children: "Data" }),
      /* @__PURE__ */ l("div", { className: "flex flex-wrap gap-1", children: h.map((y) => /* @__PURE__ */ b("span", { className: "inline-flex items-center rounded bg-muted px-1.5 py-0.5 text-[10px]", children: [
        /* @__PURE__ */ l("span", { className: "font-medium", children: y.key }),
        /* @__PURE__ */ b("span", { className: "ml-0.5 text-muted-foreground", children: [
          ": ",
          y.type
        ] })
      ] }, y.key)) })
    ] }),
    /* @__PURE__ */ b("div", { className: "relative", children: [
      /* @__PURE__ */ l(
        Cr,
        {
          ref: r,
          id: "expression",
          value: o,
          className: `h-8 text-xs ${a ? "border-red-500" : ""}`,
          onChange: (y) => {
            const x = y.target.value, w = y.target.selectionStart ?? x.length;
            i(x), c(Gr(x)), m(x, w);
          },
          onKeyDown: (y) => {
            if (p && p.options.length) {
              if (y.key === "ArrowDown") {
                y.preventDefault(), u((x) => x >= p.options.length - 1 ? 0 : x + 1);
                return;
              }
              if (y.key === "ArrowUp") {
                y.preventDefault(), u((x) => x <= 0 ? p.options.length - 1 : x - 1);
                return;
              }
              if (y.key === "Enter" || y.key === "Tab") {
                y.preventDefault();
                const x = p.options[d];
                x && g(x.path);
                return;
              }
              if (y.key === "Escape") {
                y.preventDefault(), f(null), u(0);
                return;
              }
            }
            if (y.key === "Enter") {
              y.preventDefault();
              const x = Gr(o);
              c(x), x || n(o.trim());
            }
          },
          placeholder: "name === 'x'",
          autoComplete: "off"
        }
      ),
      p && /* @__PURE__ */ l(
        "div",
        {
          ref: s,
          className: "absolute z-20 mt-1 max-h-36 w-full overflow-auto rounded border bg-background p-1 shadow",
          children: p.options.map((y, x) => /* @__PURE__ */ b(
            "button",
            {
              type: "button",
              className: `block w-full rounded px-2 py-1 text-left text-[10px] hover:bg-muted ${x === d ? "bg-muted" : ""}`,
              onMouseDown: (w) => {
                w.preventDefault(), g(y.path);
              },
              children: [
                /* @__PURE__ */ l("span", { className: "font-medium", children: y.path.slice(y.path.lastIndexOf(".") + 1) }),
                /* @__PURE__ */ b("span", { className: "ml-1 text-muted-foreground", children: [
                  ": ",
                  y.type
                ] })
              ]
            },
            y.path
          ))
        }
      )
    ] }),
    a && /* @__PURE__ */ l("p", { className: "text-[10px] text-red-500", children: a })
  ] });
}, zx = () => {
  const { t } = K(), e = ae(), n = Un(), r = _t(), [s, o] = $(!1), i = (f) => {
    if (e) {
      if (!f || f.trim() === "") {
        Ct(e._show) && r([e._id], { _show: !0 });
        return;
      }
      r([e._id], {
        _show: `{{${f.trim()}}}`
      });
    }
  }, a = (f) => {
    o(f);
  }, c = () => {
    if (!e) return;
    const f = le(e, "_show") ? e._show : !0;
    r([e._id], {
      _show: !f
    });
  }, d = () => {
    e && (r([e._id], { _show: !0 }), o(!1));
  };
  if (!e) return null;
  const u = Ct(e._show), p = u ? e._show.startsWith("{{") && e._show.endsWith("}}") ? e._show.slice(2, -2).trim() : e._show : "";
  return /* @__PURE__ */ b("div", { className: "my-2 flex items-center justify-between", children: [
    /* @__PURE__ */ l("p", { className: "text-xs text-gray-500", children: t("Visibility") }),
    /* @__PURE__ */ b("div", { className: "group relative", children: [
      /* @__PURE__ */ b(Oi, { open: s, onOpenChange: a, children: [
        /* @__PURE__ */ l(Di, { asChild: !0, children: /* @__PURE__ */ l(
          "div",
          {
            className: `absolute -left-2 -top-1.5 z-10 h-3.5 w-3.5 cursor-pointer rounded-full border border-white bg-blue-500 transition-all hover:scale-125 ${u ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`
          }
        ) }),
        /* @__PURE__ */ l(zo, { side: "left", className: "w-64 p-3", children: /* @__PURE__ */ b("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ b("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ b("div", { className: "space-y-1", children: [
              /* @__PURE__ */ l("h4", { className: "text-xs font-medium leading-none", children: t("Conditional Visibility") }),
              /* @__PURE__ */ l("p", { className: "text-[10px] text-muted-foreground", children: t("Enter a JavaScript expression") })
            ] }),
            u && /* @__PURE__ */ l(
              re,
              {
                variant: "ghost",
                size: "sm",
                className: "h-6 w-6 p-0 text-muted-foreground hover:text-red-500",
                onClick: d,
                children: /* @__PURE__ */ l(Hs, { className: "h-3.5 w-3.5" })
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "relative", children: /* @__PURE__ */ l(
            Fx,
            {
              currentExpression: p,
              externalData: n,
              onSave: (f) => {
                i(f), o(!1);
              }
            }
          ) })
        ] }) })
      ] }),
      /* @__PURE__ */ l(
        Ho,
        {
          checked: u ? !0 : le(e, "_show") ? e._show : !0,
          onCheckedChange: c,
          disabled: u
        }
      )
    ] })
  ] });
}, Oa = (t, e, n) => {
  const r = to(t);
  return vo(kt(t), (s) => {
    Be(_(n, "i18nProps", []), s) && !F(e) && (r[s] = _(t, `${s}-${e}`));
  }), r;
};
function Da() {
  const { selectedLang: t } = Je(), e = ae(), n = Kl(), r = _t(), s = Pe(e == null ? void 0 : e._type), o = Oa(e, t, s), [i, a] = $(o), [c, d] = $(!1), u = Mi(), p = Pe(u == null ? void 0 : u._type), f = Oa(u, t, p), h = ({ formData: k }, T, C) => {
    T && (i == null ? void 0 : i._id) === e._id && r([e._id], { [T]: _(k, T) }, C);
  }, m = B(
    Ms(({ formData: k }, T, C) => {
      h({ formData: k }, T, C), a(k);
    }, 1500),
    [e == null ? void 0 : e._id, t]
  ), g = ({ formData: k }, T) => {
    T && (n([e._id], { [T]: _(k, T) }), m({ formData: k }, T, { [T]: _(i, T) }));
  }, y = ({ formData: k }, T) => {
    T && (n([u._id], { [T]: _(k, T) }), m({ formData: k }, T, { [T]: _(i, T) }));
  }, { schema: x, uiSchema: w } = M(() => {
    const k = e == null ? void 0 : e._type;
    if (!k)
      return { schema: {}, uiSchema: {} };
    try {
      const { schema: T, uiSchema: C } = Qi(k);
      if (k === "Repeater") {
        const N = _(e, "repeaterItems", "");
        Re(N, `{{${Dt}`) ? (Ge(C, "filter", { "ui:widget": "collectionSelect" }), Ge(C, "sort", { "ui:widget": "collectionSelect" })) : (Ge(C, "filter", { "ui:widget": "hidden" }), Ge(C, "sort", { "ui:widget": "hidden" }));
      }
      return { schema: T, uiSchema: C };
    } catch {
      return { schema: {}, uiSchema: {} };
    }
  }, [e]), { wrapperSchema: S, wrapperUiSchema: v } = M(() => {
    if (!u || !(u != null && u._type))
      return { wrapperSchema: {}, wrapperUiSchema: {} };
    const k = u == null ? void 0 : u._type, { schema: T = {}, uiSchema: C = {} } = Qi(k);
    return { wrapperSchema: T, wrapperUiSchema: C };
  }, [u]);
  return /* @__PURE__ */ b("div", { className: "no-scrollbar overflow-x-hidden px-px", children: [
    /* @__PURE__ */ l(zx, {}),
    !F(u) && /* @__PURE__ */ b("div", { className: "mb-4 rounded border bg-zinc-100 px-1", children: [
      /* @__PURE__ */ b(
        "div",
        {
          onClick: () => d((k) => !k),
          className: "flex cursor-pointer items-center gap-x-1 py-2 text-xs font-medium leading-tight hover:bg-slate-100",
          children: [
            c ? /* @__PURE__ */ l(xn, { className: "h-4 w-4 text-slate-400" }) : /* @__PURE__ */ l(Wn, { className: "h-4 w-4 text-slate-400" }),
            Kt(u._type),
            " settings",
            " ",
            u._name && /* @__PURE__ */ b("span", { className: "text-[11px] font-light text-slate-400", children: [
              "(",
              u._name,
              ")"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ l("div", { className: c ? "h-auto" : "invisible h-0", children: /* @__PURE__ */ l(
        Pa,
        {
          blockId: u == null ? void 0 : u._id,
          onChange: y,
          formData: f,
          schema: S,
          uiSchema: v
        }
      ) })
    ] }),
    F(x) ? null : /* @__PURE__ */ l(
      Pa,
      {
        blockId: e == null ? void 0 : e._id,
        onChange: g,
        formData: o,
        schema: x,
        uiSchema: w
      }
    )
  ] });
}
const Hx = hn.Root, Hd = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(hn.Item, { ref: n, className: j("border-b", t), ...e }));
Hd.displayName = "AccordionItem";
const Vd = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ l(hn.Header, { className: "flex", children: /* @__PURE__ */ b(
  hn.Trigger,
  {
    ref: r,
    className: j(
      "flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      t
    ),
    ...n,
    children: [
      e,
      /* @__PURE__ */ l(xn, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
Vd.displayName = hn.Trigger.displayName;
const jd = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ l(
  hn.Content,
  {
    ref: r,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: /* @__PURE__ */ l("div", { className: j("pb-4 pt-0", t), children: e })
  }
));
jd.displayName = hn.Content.displayName;
const Vx = P(null, (t, e, { blockIds: n, fullClasses: r }) => {
  const s = ye(t(Br)), o = Z(
    t(Sr),
    (i) => (
      // @ts-ignore
      n.includes(t(i)._id)
    )
  );
  return A(o, (i) => {
    const a = t(i), c = r;
    let { classes: d, baseClasses: u } = vn(_(a, s.prop, `${St},`));
    return ht(c, (p) => {
      const f = p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), h = new RegExp(`(^|\\s)${f}(?=\\s|$)`, "g");
      d = d.replace(h, " ").replace(/\s+/g, " ").trim();
      const m = ye(p.split(":"));
      Be(["2xl", "xl", "lg", "md", "sm"], m) && c.push(p.split(":").pop().trim());
    }), ht(c, (p) => {
      const f = p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), h = new RegExp(`(^|\\s)${f}(?=\\s|$)`, "g");
      u = u.replace(h, " ").replace(/\s+/g, " ").trim();
    }), {
      ids: [a._id],
      props: {
        [s.prop]: `${St}${u},${d}`
      }
    };
  });
}), jx = (t) => {
  const e = Object.keys(t).filter(
    (r) => typeof t[r] == "string" && t[r].startsWith(St)
  ), n = {};
  return e.forEach((r) => {
    n[r] = `${St},`;
  }), {
    ids: [t._id],
    props: n
  };
}, Wx = () => {
  const { updateBlocks: t, updateBlocksRuntime: e } = $e();
  return B(
    (n, r = !1) => {
      const { ids: s, props: o } = jx(n);
      r ? t(s, o) : e(s, o);
    },
    [t, e]
  );
}, $i = () => {
  const { updateBlocks: t, updateBlocksRuntime: e } = $e(), n = vt(Vx);
  return B(
    (r, s, o = !1) => {
      const i = n({ blockIds: r, fullClasses: s });
      o ? t(r, i[0].props) : e(r, i[0].props);
    },
    [n]
  );
}, Wd = () => {
  const t = ae(), e = _t(), n = B((i) => Ws(i) || {}, []), r = B((i) => Object.keys(i).filter(
    (a) => typeof i[a] == "string" && i[a].startsWith("#styles:")
  ), []), s = B(
    (i) => {
      if (!t) return;
      const c = n(t._type)[i] ?? "#styles:,";
      e([t._id], { [i]: c });
    },
    [t, n, e]
  );
  return { resetAll: B(() => {
    if (!t) return;
    const i = r(t);
    if (i.length === 0) return;
    const a = n(t._type), c = dn(a, i);
    e([t._id], c);
  }, [t, r, n, e]), reset: s };
}, Gx = () => {
  var h;
  const t = ae(), [e, n] = Fe(), r = $i(), [s] = oe(), { t: o } = K(), { reset: i } = Wd();
  if (!t) return null;
  const a = Object.keys(t).filter(
    (m) => typeof t[m] == "string" && t[m].startsWith("#styles:")
  ), c = !F(a) && a.length > 1, d = _(t, (h = e[0]) == null ? void 0 : h.prop, ""), { classes: u = "" } = vn(d) || {}, p = u ? u.split(" ").filter((m) => !F(m)) : [], f = (m) => ee(e, (g) => g.prop === m);
  return /* @__PURE__ */ l(Q, { children: c && /* @__PURE__ */ b("div", { className: "flex flex-wrap gap-1", children: [
    /* @__PURE__ */ b("label", { htmlFor: "block-styling-props", className: "py-1 text-xs", children: [
      o("Style element"),
      ":"
    ] }),
    /* @__PURE__ */ l("div", { className: "flex flex-wrap gap-2", children: A(a, (m) => /* @__PURE__ */ b(
      Pi,
      {
        className: "flex cursor-pointer items-center gap-1 pr-1",
        variant: f(m) ? "default" : "secondary",
        onClick: () => {
          n([{ id: `${m}-${t._id}`, blockId: t._id, prop: m }]);
        },
        children: [
          Kt(m),
          /* @__PURE__ */ b(kn, { children: [
            /* @__PURE__ */ l(Cn, { asChild: !0, children: /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                className: "ml-1 rounded-sm p-0.5 hover:bg-blue-300 hover:text-blue-600",
                onClick: (g) => g.stopPropagation(),
                children: /* @__PURE__ */ l(Co, { className: "h-3 w-3" })
              }
            ) }),
            /* @__PURE__ */ b(Ft, { side: "bottom", className: "border-border text-xs", children: [
              /* @__PURE__ */ l(
                Ee,
                {
                  className: "text-xs",
                  onClick: () => {
                    i(m);
                  },
                  children: o("Reset style")
                }
              ),
              /* @__PURE__ */ l(
                Ee,
                {
                  className: "text-xs",
                  onClick: () => {
                    r(s, p, !0);
                  },
                  children: o("Clear styles")
                }
              )
            ] })
          ] })
        ]
      },
      m
    )) }),
    /* @__PURE__ */ l("div", { className: "my-2 h-[1px] w-full bg-border" })
  ] }) });
}, Gd = te.createContext({
  setDragData: () => {
  }
}), Ma = (t, e) => {
  t = t.toLowerCase();
  let n = t.trim().replace(/ |\+/g, "");
  if ((n === "auto" || n === "none") && e.includes(n))
    return { value: "", unit: n };
  const r = e.length ? new RegExp(e.join("|"), "g") : /XXXXXX/g;
  n = n.replace(r, "");
  const s = t.match(r), o = s && s.length > 1, i = !F(n) && Number.isNaN(Number(n));
  return o || i ? { error: "Invalid value" } : s && (s[0] === "auto" || s[0] === "none") ? { value: s[0], unit: "" } : { value: n, unit: s ? s[0] : "" };
}, Ux = (t) => {
  const e = t.startsWith("-") ? "-" : "", n = t.split("-").pop();
  if (["auto", "none"].includes(n))
    return { value: "", unit: n };
  if (n === "px") return { value: "1", unit: "px" };
  if (n === "screen") return { value: "100", unit: t.indexOf("w-") !== -1 ? "vw" : "vh" };
  if (n === "full") return { value: "100", unit: "%" };
  if (Be(t, "skew-"))
    return { value: `${e}${n}`, unit: "deg" };
  if (Be(t, "rotate-"))
    return { value: `${e}${n}`, unit: "deg" };
  if (Be(t, "opacity-"))
    return { value: `${n / 100}`, unit: "-" };
  if (Be(t, "duration-") || Be(t, "delay-"))
    return { value: `${n}`, unit: "ms" };
  if (Be(t, "translate-") && !n.includes("/"))
    return { value: `${e}${`${n / 4}`}`, unit: "rem" };
  if (Be(t, "scale-"))
    return { value: `${e}${`${n / 100}`}`, unit: "-" };
  if (Re(t, "border")) {
    const r = t.match(/border-?(x|y|t|r|b|l)?\d+/g);
    if (r) return { value: r[0].split("-").pop(), unit: "px" };
    if (t.match(/border-?(x|y|t|r|b|l)?/g)) return { value: "1", unit: "px" };
  }
  if (Re(t, "max-w-")) {
    if (t === "max-w-screen-sm") return { value: "640", unit: "px" };
    if (t === "max-w-screen-md") return { value: "768", unit: "px" };
    if (t === "max-w-screen-lg") return { value: "1024", unit: "px" };
    if (t === "max-w-screen-xl") return { value: "1280", unit: "px" };
    if (t === "max-w-screen-2xl") return { value: "1536", unit: "px" };
    if (n === "xs") return { value: "320", unit: "px" };
    if (n === "sm") return { value: "384", unit: "px" };
    if (n === "md") return { value: "448", unit: "px" };
    if (n === "lg") return { value: "512", unit: "px" };
    if (n === "xl") return { value: "576", unit: "px" };
    if (n === "2xl") return { value: "672", unit: "px" };
    if (n === "3xl") return { value: "768", unit: "px" };
    if (n === "4xl") return { value: "896", unit: "px" };
    if (n === "5xl") return { value: "1024", unit: "px" };
    if (n === "6xl") return { value: "1152", unit: "px" };
    if (n === "7xl") return { value: "1280", unit: "px" };
    if (n === "prose") return { value: "65", unit: "ch" };
  }
  if (Re(t, "text-")) {
    if (n === "xs") return { value: "12", unit: "px" };
    if (n === "sm") return { value: "14", unit: "px" };
    if (n === "base") return { value: "16", unit: "px" };
    if (n === "lg") return { value: "18", unit: "px" };
    if (n === "xl") return { value: "20", unit: "px" };
    if (n === "2xl") return { value: "24", unit: "px" };
    if (n === "3xl") return { value: "30", unit: "px" };
    if (n === "4xl") return { value: "36", unit: "px" };
    if (n === "5xl") return { value: "48", unit: "px" };
    if (n === "6xl") return { value: "60", unit: "px" };
    if (n === "7xl") return { value: "72", unit: "px" };
    if (n === "8xl") return { value: "96", unit: "px" };
    if (n === "9xl") return { value: "128", unit: "px" };
  }
  if (Re(t, "leading-")) {
    if (n === "none") return { value: "1", unit: "-" };
    if (n === "tight") return { value: "1.25", unit: "-" };
    if (n === "snug") return { value: "1.375", unit: "-" };
    if (n === "normal") return { value: "1.5", unit: "-" };
    if (n === "relaxed") return { value: "1.625", unit: "-" };
    if (n === "loose") return { value: "2", unit: "-" };
  }
  if (Re(t, "tracking-")) {
    if (n === "tighter") return { value: "-0.05", unit: "em" };
    if (n === "tight") return { value: "-0.025", unit: "em" };
    if (n === "normal") return { value: "0", unit: "em" };
    if (n === "wide") return { value: "0.025", unit: "em" };
    if (n === "wider") return { value: "0.05", unit: "em" };
    if (n === "widest") return { value: "0.1", unit: "em" };
  }
  if (["max", "min", "fit"].includes(n)) return { value: t, unit: "class" };
  if (n.includes("/")) {
    const [r, s] = A(n.split("/"), (o) => parseInt(o, 10));
    return { value: e + (r / s * 100).toFixed(2).replace(".00", ""), unit: "%" };
  }
  return Vu(parseFloat(n)) ? { value: `${e + parseFloat(n) * 4}`, unit: "px" } : { value: n, unit: "class" };
}, Kx = (t) => {
  if (F(t))
    return { value: "", unit: "" };
  const e = t.match(/\[.*\]/g);
  if (e === null)
    return Jx(t);
  const n = _(e, "0", "").replace(/\[|\]/g, ""), r = t.startsWith("-") ? "-" : "", s = ye(n.match(/\d+.\d+|\d+/g));
  return { value: `${r}${s}`, unit: n.replace(s, "") };
}, Jx = (t) => F(t) ? { value: "", unit: "" } : Ux(t), Yx = ({
  unit: t,
  currentValue: e,
  onDrag: n,
  onDragEnd: r,
  onDragStart: s,
  negative: o,
  cssProperty: i
}) => {
  const { setDragData: a } = yn(Gd);
  return /* @__PURE__ */ l(
    "button",
    {
      type: "button",
      onMouseDown: (c) => {
        const d = {
          onDrag: n,
          onDragEnd: r,
          dragging: !0,
          dragStartY: c.pageY,
          dragStartValue: `${e}`,
          dragUnit: t,
          negative: o,
          cssProperty: i
        };
        s(d), a(d);
      },
      color: void 0,
      className: "relative z-50 ml-1 hidden h-6 cursor-row-resize rounded bg-background/70 px-2 group-hover:inline",
      children: /* @__PURE__ */ l(kp, {})
    }
  );
}, Xx = ({ onSelect: t, current: e, units: n }) => /* @__PURE__ */ l("div", { "data-theme": "light", className: "-m-[7px] -mx-[13px] flex w-9 flex-col", children: n.map((r) => /* @__PURE__ */ l(
  re,
  {
    className: "h-max rounded-none px-1 py-1 text-right text-[11px] hover:bg-blue-400",
    color: e === r ? "primary" : void 0,
    size: "sm",
    onClick: (s) => {
      s.stopPropagation(), t(r);
    },
    children: r
  },
  r
)) }), $a = 50, qx = (t) => {
  const [e, n] = $(!1), [r, s] = $(""), { currentClass: o, onChange: i, classPrefix: a, cssProperty: c, units: d, negative: u } = t, [p, f] = $(c != null && c.toLowerCase().includes("width") ? "%" : d[0]), [h, m] = $(!1), [g, y] = $(""), [x, w] = $(!1), [S, v] = $(!1);
  z(() => {
    const { value: E, unit: I } = Kx(o);
    if (I === "") {
      s(E), f(c != null && c.toLowerCase().includes("width") ? "%" : ye(d));
      return;
    }
    f(I), s(I === "class" || F(E) ? "" : E);
  }, [o, c, d]);
  const k = pn((E) => i(E), [i], $a), T = pn((E) => i(E, !1), [i], $a), C = B(
    (E = !1) => {
      const I = Ma(`${r}`, d);
      if (_(I, "error", !1)) {
        m(!0);
        return;
      }
      const L = _(I, "unit") !== "" ? _(I, "unit") : p;
      if (L === "auto" || L === "none") {
        k(`${a}${L}`);
        return;
      }
      if (_(I, "value") === "")
        return;
      const V = `${_(I, "value", "").startsWith("-") ? "-" : ""}${a}[${_(I, "value", "").replace("-", "")}${L === "-" ? "" : L}]`;
      E ? T(V) : k(V);
    },
    [k, T, r, p, a, d]
  ), N = B(
    (E) => {
      const I = Ma(`${r}`, d);
      if (_(I, "error", !1)) {
        m(!0);
        return;
      }
      if (E === "auto" || E === "none") {
        k(`${a}${E}`);
        return;
      }
      if (_(I, "value") === "")
        return;
      const L = _(I, "unit") !== "" ? _(I, "unit") : E, V = `${_(I, "value", "").startsWith("-") ? "-" : ""}${a}[${_(I, "value", "").replace("-", "")}${L === "-" ? "" : L}]`;
      k(V);
    },
    [k, r, a, d]
  );
  return /* @__PURE__ */ l("div", { className: "flex w-full flex-col", children: /* @__PURE__ */ l("div", { className: "flex items-center justify-start", children: p === "class" ? /* @__PURE__ */ b(Q, { children: [
    /* @__PURE__ */ l(
      "input",
      {
        className: "h-6 w-24 rounded border border-foreground/20 bg-background px-2 py-0.5 text-sm focus-visible:outline-0",
        readOnly: !0,
        value: o
      }
    ),
    /* @__PURE__ */ b(Ne, { children: [
      /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l("button", { type: "button", className: "invisible ml-3 mt-1 text-blue-600 group-hover:visible", children: /* @__PURE__ */ l(pr, {}) }) }),
      /* @__PURE__ */ l(be, { children: "Current value is using a Tailwind preset class." })
    ] })
  ] }) : /* @__PURE__ */ b("div", { className: `group relative flex items-center ${x ? "z-auto" : ""}`, children: [
    /* @__PURE__ */ b("div", { className: "flex items-center rounded-md border border-border", children: [
      ["none", "auto"].indexOf(p) !== -1 ? null : /* @__PURE__ */ l(
        "input",
        {
          readOnly: p === "class",
          onKeyPress: (E) => {
            E.key === "Enter" && C();
          },
          onKeyDown: (E) => {
            if (E.keyCode !== 38 && E.keyCode !== 40)
              return;
            E.preventDefault(), v(!0);
            const I = ju(E.target.value);
            let L = Wu(I) ? 0 : I;
            E.keyCode === 38 && (L += 1), E.keyCode === 40 && (L -= 1);
            const R = `${L}`, J = `${R.startsWith("-") ? "-" : ""}${a}[${R.replace("-", "")}${p === "-" ? "" : p}]`;
            T(J);
          },
          onKeyUp: (E) => {
            S && (E.preventDefault(), v(!1));
          },
          onBlur: () => C(),
          onChange: (E) => {
            m(!1), s(E.target.value);
          },
          onClick: (E) => {
            var I;
            (I = E == null ? void 0 : E.target) == null || I.select(), n(!1);
          },
          value: x ? g : r,
          className: "h-6 w-14 rounded rounded-r-none border border-transparent bg-background pl-2 text-sm focus-visible:outline-0".concat(
            " ",
            h ? "border-red-500 text-red-500" : "border-foreground/20"
          )
        }
      ),
      /* @__PURE__ */ b(Ne, { open: e, delayDuration: 100, children: [
        /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ b(
          "button",
          {
            type: "button",
            onClick: () => n(!e),
            className: "flex h-6 cursor-pointer items-center gap-x-1 rounded rounded-l-none bg-background p-px px-1 text-[11px] uppercase",
            children: [
              /* @__PURE__ */ l("span", { className: `inline-block ${d.length === 1 ? "px-2 font-semibold" : ""}`, children: p }),
              d.length > 1 ? /* @__PURE__ */ l(wp, {}) : null
            ]
          }
        ) }),
        /* @__PURE__ */ l(be, { className: "bg-background", children: /* @__PURE__ */ l(
          Xx,
          {
            units: d,
            current: p,
            onSelect: (E) => {
              n(!1), f(E), N(E);
            }
          }
        ) })
      ] })
    ] }),
    ["none", "auto"].indexOf(p) !== -1 || x ? null : /* @__PURE__ */ l(
      Yx,
      {
        onDragStart: () => w(!0),
        onDragEnd: (E) => {
          if (y(() => ""), w(!1), F(E))
            return;
          const I = `${E}`, R = `${I.startsWith("-") ? "-" : ""}${a}[${I.replace("-", "")}${p === "-" ? "" : p}]`;
          k(R);
        },
        onDrag: (E) => {
          if (F(E))
            return;
          y(E);
          const I = `${E}`, R = `${I.startsWith("-") ? "-" : ""}${a}[${I.replace("-", "")}${p === "-" ? "" : p}]`;
          T(R);
        },
        currentValue: r,
        unit: p,
        negative: u,
        cssProperty: c
      }
    )
  ] }) }) });
}, Or = wo({ canReset: !1, canChange: !0 }), Zx = ({ children: t, canReset: e = !1, canChange: n = !0 }) => (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  /* @__PURE__ */ l(Or.Provider, { value: { canReset: e, canChange: n }, children: t })
), ps = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  14,
  16,
  20,
  24,
  28,
  32,
  36,
  40,
  44,
  48,
  52,
  56,
  60,
  64,
  72,
  80,
  96
], O = {
  columns: [...Xe(1, 13), "auto", "3xs", "2xs", "xs", "sm", "md", "lg", "xl", ...A(Xe(2, 8), (t) => `${t}xl`)],
  breakAfter: ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
  breakInside: ["auto", "avoid", "avoid-page", "avoid-column"],
  display: ["block", "flex", "grid", "inline-block", "inline", "hidden"],
  objectFit: ["contain", "cover", "fill", "none", "scale-down"],
  objectPosition: ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
  overflow: ["auto", "hidden", "clip", "visible", "scroll"],
  overscroll: ["auto", "contain", "none"],
  trbl: [0, "px", "0.5", 1, 1.5, 2, 2.5, 3, 3.5, ...Xe(4, 13), 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, "auto", "1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "full"],
  flexBasis: [...ps, "auto", "px", "0.5", "1.5", "2.5", "3.5", "1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "1/5", "2/5", "3/5", "4/5", "1/6", "2/6", "3/6", "4/6", "5/6", "1/12", "2/12", "3/12", "4/12", "5/12", "6/12", "7/12", "8/12", "9/12", "10/12", "11/12", "full"],
  padding: [...ps, "px", "0.5", "1.5", "2.5", "3.5"],
  margin: ["auto", ...ps, "px", "0.5", "1.5", "2.5", "3.5"],
  scale: [0, 50, 75, 90, 95, 100, 105, 110, 125, 150],
  origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left"],
  blendEffect: ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
  borderWidth: [0, 2, 4, 8],
  borderRadius: ["global", "none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
  indent: [0, "px", "0.5", 1, 1.5, 2, 2.5, 3, 3.5, ...Xe(4, 13), 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96],
  maxHeight: [0, "px", "0.5", 1, 1.5, 2, 2.5, 3, 3.5, ...Xe(4, 13), 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, "full", "screen", "min", "max", "fit"],
  space: [0, "px", "0.5", 1, 1.5, 2, 2.5, 3, 3.5, ...Xe(4, 13), 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, "px", "reverse"],
  width: ["0", "px", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96", "auto", "1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "1/5", "2/5", "3/5", "4/5", "1/6", "2/6", "3/6", "4/6", "5/6", "1/12", "2/12", "3/12", "4/12", "5/12", "6/12", "7/12", "8/12", "9/12", "10/12", "11/12"],
  maxWidth: ["0", "none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "full", "min", "max", "fit", "prose", "screen-sm", "screen-md", "screen-lg", "screen-xl", "screen-2xl"],
  height: ["0", "px", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96", "auto", "1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "1/5", "2/5", "3/5", "4/5", "1/6", "2/6", "3/6", "4/6", "5/6", "full", "screen", "min", "max", "fit"]
}, Mn = {
  textColor: {
    classes: [],
    regExp: "text-(black|transparent|current|white|__THEME_COLORS_REGEXP__|\\S+-\\d+)"
  },
  // LAYOUT
  aspectRatio: {
    classes: ["aspect-auto", "aspect-square", "aspect-video"],
    regExp: "aspect-(auto|square|video)"
  },
  container: {
    classes: ["container"],
    regExp: "container"
  },
  columns: {
    classes: A(O.columns, (t) => `columns-${t}`),
    regExp: "columns-(auto|[0-9]xl|[0-9]xs|xs|sm|md|lg|xl|\\d+)"
  },
  breakAfter: {
    classes: A(O.breakAfter, (t) => `break-after-${t}`),
    regExp: "break-after-\\S+"
  },
  breakBefore: {
    classes: A(O.breakAfter, (t) => `break-before-${t}`),
    regExp: "break-before-\\S+"
  },
  breakInside: {
    classes: A(O.breakInside, (t) => `break-inside-${t}`),
    regExp: "break-inside-\\S+"
  },
  boxDecoration: {
    classes: ["box-decoration-clone", "box-decoration-slice"],
    regExp: "box-decoration-\\S+"
  },
  boxSizing: {
    classes: ["box-border", "box-content"],
    regExp: "box-(border|content)"
  },
  flexDirection: {
    classes: ["flex-row", "flex-row-reverse", "flex-col", "flex-col-reverse"],
    regExp: "flex-(row|row-reverse|col|col-reverse)"
  },
  flexWrap: {
    classes: ["flex-wrap", "flex-wrap-reverse", "flex-nowrap"],
    regExp: "flex-(wrap|wrap-reverse|nowrap)"
  },
  flexGrowShrink: {
    classes: ["flex-1", "flex-auto", "flex-initial", "flex-none"],
    regExp: "flex-1|flex-auto|flex-initial|flex-none"
  },
  gridColumns: {
    classes: A([...Xe(0, 13), "none"], (t) => `grid-cols-${t}`),
    regExp: "grid-cols-(\\d+|none)"
  },
  gridFlow: {
    classes: ["grid-flow-row", "grid-flow-col", "grid-flow-row-dense", "grid-flow-col-dense"],
    regExp: "grid-flow-(row|col|row-dense|col-dense)"
  },
  outlineStyle: {
    classes: A(["none", "dashed", "dotted", "double", "hidden"], (t) => `outline-${t}`),
    regExp: "outline-(none|dashed|dotted|double|hidden)"
  },
  borderStyle: {
    classes: A(["solid", "dashed", "dotted", "double", "hidden", "none"], (t) => `border-${t}`),
    regExp: "border-(solid|dashed|dotted|double|hidden|none)"
  },
  overflow: {
    classes: A(O.overflow, (t) => `overflow-${t}`),
    regExp: `overflow-(${O.overflow.join("|")})`
  },
  overflowX: {
    classes: A(O.overflow, (t) => `overflow-x-${t}`),
    regExp: `overflow-x-(${O.overflow.join("|")})`
  },
  overflowY: {
    classes: A(O.overflow, (t) => `overflow-y-${t}`),
    regExp: `overflow-y-(${O.overflow.join("|")})`
  },
  gridRows: { classes: A([1, 2, 3, 4, 5, 6, "none"], (t) => `grid-rows-${t}`), regExp: "grid-rows-(\\d|none)" },
  display: {
    classes: A(O.display, (t) => t.toString()),
    regExp: `(${O.display.join("|")})`
  },
  float: {
    classes: ["float-right", "float-left", "float-none"],
    regExp: "float-\\S+"
  },
  clear: {
    classes: ["clear-right", "clear-left", "clear-none", "clear-both"],
    regExp: "clear-\\S+"
  },
  isolation: {
    classes: ["isolate", "isolation-auto"],
    regExp: "isolate|isolation-auto"
  },
  objectFit: {
    classes: A(O.objectFit, (t) => `object-${t}`),
    regExp: "object-(contain|cover|fill|none|scale-down)"
  },
  objectPosition: {
    classes: A(O.objectPosition, (t) => `object-${t}`),
    regExp: `object-(${O.objectPosition.join("|")})`
  },
  overscroll: {
    classes: A(O.overscroll, (t) => `overscroll-${t}`),
    regExp: `overscroll-(${O.overscroll.join("|")})`
  },
  overscrollX: {
    classes: A(O.overscroll, (t) => `overscroll-x-${t}`),
    regExp: `overscroll-x-(${O.overscroll.join("|")})`
  },
  overscrollY: {
    classes: A(O.overscroll, (t) => `overscroll-y-${t}`),
    regExp: `overscroll-y-(${O.overscroll.join("|")})`
  },
  inset: {
    classes: A(O.trbl, (t) => `inset-${t}`),
    regExp: "-?inset-(px|\\d\\/\\d|\\d\\.\\d|\\d+|full|auto|\\[.*\\])"
  },
  insetX: {
    classes: A(O.trbl, (t) => `inset-x-${t}`),
    regExp: "-?inset-x-(px|\\d\\/\\d|\\d\\.\\d|\\d+|full|auto|\\[.*\\])"
  },
  insetY: {
    classes: A(O.trbl, (t) => `inset-y-${t}`),
    regExp: "-?inset-y-(px|\\d\\/\\d|\\d\\.\\d|\\d+|full|auto|\\[.*\\])"
  },
  top: {
    classes: A(O.trbl, (t) => `top-${t}`),
    regExp: "-?top-(px|\\d\\/\\d|\\d\\.\\d|\\d+|full|auto|\\[.*\\])"
  },
  topX: {
    classes: A(O.trbl, (t) => `top-x-${t}`),
    regExp: "-?top-x-(px|\\d\\/\\d|\\d\\.\\d|\\d+|full|auto|\\[.*\\])"
  },
  topY: {
    classes: A(O.trbl, (t) => `top-y-${t}`),
    regExp: "-?top-y-(px|\\d\\/\\d|\\d\\.\\d|\\d+|full|auto|\\[.*\\])"
  },
  right: {
    classes: A(O.trbl, (t) => `right-${t}`),
    regExp: "-?right-(px|\\d\\/\\d|\\d\\.\\d|\\d+|full|auto|\\[.*\\])"
  },
  rightX: {
    classes: A(O.trbl, (t) => `right-x-${t}`),
    regExp: "-?right-x-(px|\\d\\/\\d|\\d\\.\\d|\\d+|full|auto|\\[.*\\])"
  },
  rightY: {
    classes: A(O.trbl, (t) => `right-y-${t}`),
    regExp: "-?right-y-(px|\\d\\/\\d|\\d\\.\\d|\\d+|full|auto|\\[.*\\])"
  },
  bottom: {
    classes: A(O.trbl, (t) => `bottom-${t}`),
    regExp: "-?bottom-(px|\\d\\/\\d|\\d\\.\\d|\\d+|full|auto|\\[.*\\])"
  },
  bottomX: {
    classes: A(O.trbl, (t) => `bottom-x-${t}`),
    regExp: "-?bottom-x-(px|\\d\\/\\d|\\d\\.\\d|\\d+|full|auto|\\[.*\\])"
  },
  bottomY: {
    classes: A(O.trbl, (t) => `bottom-y-${t}`),
    regExp: "-?bottom-y-(px|\\d\\/\\d|\\d\\.\\d|\\d+|full|auto|\\[.*\\])"
  },
  left: {
    classes: A(O.trbl, (t) => `left-${t}`),
    regExp: "-?left-(px|\\d\\/\\d|\\d\\.\\d|\\d+|full|auto|\\[.*\\])"
  },
  leftX: {
    classes: A(O.trbl, (t) => `left-x-${t}`),
    regExp: "-?left-x-(px|\\d\\/\\d|\\d\\.\\d|\\d+|full|auto|\\[.*\\])"
  },
  leftY: {
    classes: A(O.trbl, (t) => `left-y-${t}`),
    regExp: "-?left-y-(px|\\d\\/\\d|\\d\\.\\d|\\d+|full|auto|\\[.*\\])"
  },
  visibility: {
    classes: ["visible", "invisible"],
    regExp: "invisible|visible"
  },
  zIndex: {
    classes: A(["0", 10, 20, 30, 40, 50, "auto"], (t) => `z-${t}`),
    regExp: "-?z-(\\d+|auto|\\[.*\\])"
  },
  // Flex box and grids
  flexBasis: {
    classes: A(O.flexBasis, (t) => `basis-${t}`),
    regExp: "basis-(\\d+|\\S+)"
  },
  flexGrow: { classes: ["grow", "grow-0"], regExp: "grow(-0)?" },
  flexShrink: { classes: ["shrink", "shrink-0"], regExp: "shrink(-0)?" },
  // grid
  gridColSpan: {
    classes: ["col-auto", ...A(Xe(1, 13), (t) => `col-span-${t}`), "col-span-full"],
    regExp: "col-(auto|span-(\\d+|full))"
  },
  gridColStart: {
    classes: [...A(Xe(1, 14), (t) => `col-start-${t}`), "col-start-auto"],
    regExp: "col-start-(\\d+|auto)"
  },
  gridColEnd: {
    classes: [...A(Xe(1, 14), (t) => `col-end-${t}`), "col-end-auto"],
    regExp: "col-end-(\\d+|auto)"
  },
  gridRowSpan: {
    classes: ["row-auto", ...A(Xe(1, 7), (t) => `row-span-${t}`), "row-span-full"],
    regExp: "row-(auto|span-(\\d+|full))"
  },
  gridRowStart: {
    classes: [...A(Xe(1, 8), (t) => `row-start-${t}`), "row-start-auto"],
    regExp: "row-start-(\\d+|auto)"
  },
  gridRowEnd: {
    classes: [...A(Xe(1, 8), (t) => `row-end-${t}`), "row-end-auto"],
    regExp: "row-end-(\\d+|auto)"
  },
  gridAutoColumns: {
    classes: ["auto-cols-auto", "auto-cols-min", "auto-cols-max", "auto-cols-fr"],
    regExp: "auto-cols-(auto|min|max|fr)"
  },
  gridAutoRows: {
    classes: ["auto-rows-auto", "auto-rows-min", "auto-rows-max", "auto-rows-fr"],
    regExp: "auto-rows-(auto|min|max|fr)"
  },
  gap: { classes: A(O.indent, (t) => `gap-${t}`), regExp: "gap-(px|\\d.\\d|\\d|\\[.*\\])" },
  gapX: { classes: A(O.indent, (t) => `gap-x-${t}`), regExp: "gap-x-(px|\\d.\\d|\\d|\\[.*\\])" },
  gapY: { classes: A(O.indent, (t) => `gap-y-${t}`), regExp: "gap-y-(px|\\d.\\d|\\d|\\[.*\\])" },
  justifyContent: {
    classes: ["justify-start", "justify-end", "justify-center", "justify-between", "justify-around", "justify-evenly"],
    regExp: "justify-(start|end|center|between|around|evenly)"
  },
  justifyItems: {
    classes: ["justify-items-start", "justify-items-end", "justify-items-center", "justify-items-stretch"],
    regExp: "justify-items-(start|end|center|stretch)"
  },
  justifySelf: {
    classes: [
      "justify-self-auto",
      "justify-self-start",
      "justify-self-end",
      "justify-self-center",
      "justify-self-stretch"
    ],
    regExp: "justify-self-(auto|start|end|center|stretch)"
  },
  placeContent: {
    classes: [
      "place-content-center",
      "place-content-start",
      "place-content-end",
      "place-content-between",
      "place-content-around",
      "place-content-evenly",
      "place-content-stretch"
    ],
    regExp: "place-content-(center|start|end|between|around|evenly|stretch)"
  },
  placeItems: {
    classes: ["place-items-start", "place-items-end", "place-items-center", "place-items-stretch"],
    regExp: "place-items-(start|end|center|stretch)"
  },
  placeSelf: {
    classes: ["place-self-auto", "place-self-start", "place-self-end", "place-self-center", "place-self-stretch"],
    regExp: "place-self-(auto|start|end|center|stretch)"
  },
  alignContent: {
    classes: ["content-center", "content-start", "content-end", "content-between", "content-around", "content-evenly"],
    regExp: "content-(center|start|end|between|around|evenly)"
  },
  alignItems: {
    classes: ["items-start", "items-end", "items-center", "items-baseline", "items-stretch"],
    regExp: "items-(start|end|center|baseline|stretch)"
  },
  alignSelf: {
    classes: ["self-auto", "self-start", "self-end", "self-center", "self-stretch", "self-baseline"],
    regExp: "self-(auto|start|end|center|stretch|baseline)"
  },
  backgroundClip: {
    classes: ["bg-clip-border", "bg-clip-padding", "bg-clip-content", "bg-clip-text"],
    regExp: "bg-clip-(border|padding|content|text)"
  },
  // FIXME: Add drop-shadow class
  dropShadow: {
    classes: A(["sm", "md", "lg", "xl", "2xl", "none"], (t) => `drop-shadow-${t}`),
    regExp: "drop-shadow-(sm|md|lg|xl|2xl|none)"
  },
  backdropBlur: {
    classes: A(["none", "sm", "md", "lg", "xl", "2xl", "3xl"], (t) => `backdrop-blur-${t}`),
    regExp: "backdrop-blur-(none|sm|md|lg|xl|2xl|3xl)"
  },
  backdropBrightness: {
    classes: A([0, 50, 75, 90, 95, 100, 105, 110, 125, 150, 200], (t) => `backdrop-brightness-${t}`),
    regExp: "backdrop-brightness-(\\d+)"
  },
  backdropContrast: {
    classes: A([0, 50, 75, 100, 125, 150, 200], (t) => `backdrop-contrast-${t}`),
    regExp: "backdrop-contrast-(\\d+)"
  },
  backdropGrayScale: {
    classes: ["backdrop-grayscale-0", "backdrop-grayscale"],
    regExp: "backdrop-grayscale(-0)?"
  },
  backdropHueRotate: {
    classes: A([0, 15, 30, 60, 90, 180], (t) => `backdrop-hue-rotate-${t}`),
    regExp: "-?backdrop-hue-rotate-(\\d+)"
  },
  backdropInvert: {
    classes: ["backdrop-invert-0", "backdrop-invert"],
    regExp: "backdrop-invert(-0)?"
  },
  backdropOpacity: {
    classes: A([0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100], (t) => `backdrop-opacity-${t}`),
    regExp: "backdrop-opacity-(\\d+)"
  },
  backdropSaturate: {
    classes: A([0, 50, 100, 150, 200], (t) => `backdrop-saturate-${t}`),
    regExp: "backdrop-saturate-(\\d+)"
  },
  backdropSepia: {
    classes: ["backdrop-sepia-0, backdrop-sepia"],
    regExp: "backdrop-sepia(-0)?"
  },
  backgroundOrigin: {
    classes: ["bg-origin-border", "bg-origin-padding", "bg-origin-content"],
    regExp: "bg-origin-(border|padding|content)"
  },
  transformOrigin: {
    classes: A(O.origin, (t) => `origin-${t}`),
    regExp: "origin-(\\d+|\\S+)"
  },
  // spacing
  padding: {
    classes: A(O.padding, (t) => `p-${t}`),
    regExp: "p-(\\d+|\\S+|\\[.*\\])"
  },
  paddingX: {
    classes: A(O.padding, (t) => `px-${t}`),
    regExp: "px-(\\d+|\\S+|\\[.*\\])"
  },
  paddingY: {
    classes: A(O.padding, (t) => `py-${t}`),
    regExp: "py-(\\d+|\\S+|\\[.*\\])"
  },
  paddingTop: {
    classes: A(O.padding, (t) => `pt-${t}`),
    regExp: "pt-(\\d+|\\S+|\\[.*\\])"
  },
  paddingRight: {
    classes: A(O.padding, (t) => `pr-${t}`),
    regExp: "pr-(\\d+|\\S+|\\[.*\\])"
  },
  paddingBottom: {
    classes: A(O.padding, (t) => `pb-${t}`),
    regExp: "pb-(\\d+|\\S+|\\[.*\\])"
  },
  paddingLeft: {
    classes: A(O.padding, (t) => `pl-${t}`),
    regExp: "pl-(\\d+|\\S+|\\[.*\\])"
  },
  textDecorationStyle: {
    classes: ["decoration-solid", "decoration-double", "decoration-dotted", "decoration-dashed", "decoration-wavy"],
    regExp: "decoration-(solid|double|dotted|dashed|wavy)"
  },
  textDecorationThickness: {
    classes: A(["auto", "from-font", "0", 1, 2, 4, 8], (t) => `decoration-${t}`),
    regExp: "decoration-(auto|from-font|\\d+|\\S+)"
  },
  fromColor: {
    classes: [],
    regExp: "from-(black|transparent|current|white|__THEME_COLORS_REGEXP__|\\S+-\\d+)"
  },
  margin: {
    classes: A(O.margin, (t) => `m-${t}`),
    regExp: "-?m-(\\d+|\\S+|\\[.*\\])"
  },
  marginX: {
    classes: A(O.margin, (t) => `mx-${t}`),
    regExp: "-?mx-(\\d+|\\S+|\\[.*\\])"
  },
  marginY: {
    classes: A(O.margin, (t) => `my-${t}`),
    regExp: "-?my-(\\d+|\\S+|\\[.*\\])"
  },
  marginTop: {
    classes: A(O.margin, (t) => `mt-${t}`),
    regExp: "-?mt-(\\d+|\\S+|\\[.*\\])"
  },
  marginRight: {
    classes: A(O.margin, (t) => `mr-${t}`),
    regExp: "-?mr-(\\d+|\\S+|\\[.*\\])"
  },
  marginBottom: {
    classes: A(O.margin, (t) => `mb-${t}`),
    regExp: "-?mb-(\\d+|\\S+|\\[.*\\])"
  },
  marginLeft: {
    classes: A(O.margin, (t) => `ml-${t}`),
    regExp: "-?ml-(\\d+|\\S+|\\[.*\\])"
  },
  spaceX: {
    classes: A(O.space, (t) => `space-x-${t}`),
    regExp: "-?space-x-(\\d+|\\S+|\\[.*\\])"
  },
  spaceY: {
    classes: A(O.space, (t) => `space-y-${t}`),
    regExp: "-?space-y-(\\d+|\\S+|\\[.*\\])"
  },
  boxShadow: {
    classes: A(["sm", "md", "lg", "xl", "2xl", "inner", "none"], (t) => `shadow-${t}`),
    regExp: "shadow-(sm|md|lg|xl|2xl|inner|none)"
  },
  // sizing
  minWidth: {
    classes: ["min-w-0", "min-w-full", "min-w-min", "min-w-max", "min-w-fit"],
    regExp: "min-w-(\\d+|\\S+|\\[.*\\])"
  },
  maxWidth: {
    classes: A(O.maxWidth, (t) => `max-w-${t}`),
    regExp: "max-w-(\\d+|\\S+|\\[.*\\])"
  },
  width: {
    classes: A([...O.width, "full", "screen", "min", "max", "fit"], (t) => `w-${t}`),
    regExp: "w-(\\d+.\\d+|\\d+|px|auto|full|screen|min|max|fit|\\[.*\\])$"
  },
  minHeight: {
    classes: ["min-h-0", "min-h-full", "min-h-screen", "min-h-min", "min-h-max", "min-h-fit"],
    regExp: "min-h-(\\d+|\\S+|\\[.*\\])"
  },
  maxHeight: {
    classes: A(O.maxHeight, (t) => `max-h-${t}`),
    regExp: "max-h-(\\d+|\\S+|\\[.*\\])"
  },
  height: {
    classes: A(O.height, (t) => `h-${t}`),
    regExp: "h-(\\d+.\\d+|\\d+|px|auto|full|screen|min|max|fit|\\[.*\\])"
  },
  // typography
  fontFamily: {
    classes: ["font-heading", "font-body", "font-sans", "font-serif", "font-mono"],
    regExp: "font-(heading|body|sans|serif|mono)"
  },
  textAlign: {
    classes: ["text-left", "text-center", "text-right", "text-justify"],
    regExp: "text-(left|center|right|justify)"
  },
  textOverflow: {
    classes: ["truncate", "text-ellipsis", "text-clip"],
    regExp: "truncate|text-ellipsis|text-clip"
  },
  verticalAlign: {
    classes: [
      "align-baseline",
      "align-top",
      "align-middle",
      "align-bottom",
      "align-text-top",
      "align-text-bottom",
      "align-sub",
      "align-super"
    ],
    regExp: "align-(baseline|top|middle|bottom|text-top|text-bottom|sub|super)"
  },
  fontSize: {
    classes: [
      "text-xs",
      "text-sm",
      "text-base",
      "text-lg",
      "text-xl",
      "text-2xl",
      "text-3xl",
      "text-4xl",
      "text-5xl",
      "text-6xl",
      "text-7xl",
      "text-8xl",
      "text-9xl"
    ],
    regExp: "text-(\\d+|\\S+|\\[.*\\])"
  },
  fontSmoothing: {
    classes: ["antialiased", "subpixel-antialiased"],
    regExp: "antialiased|subpixel-antialiased"
  },
  fontStyle: { classes: ["italic", "not-italic"], regExp: "not-italic|italic" },
  fontWeight: {
    classes: [
      "font-thin",
      "font-extralight",
      "font-light",
      "font-normal",
      "font-medium",
      "font-semibold",
      "font-bold",
      "font-extrabold",
      "font-black"
    ],
    regExp: "font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)"
  },
  fontVariantNum: {
    classes: [
      "normal-nums",
      "ordinal",
      "diagonal-fractions",
      "stacked-fractions",
      "tabular-nums",
      "oldstyle-nums",
      "proportional-nums",
      "lining-nums",
      "slashed-zero"
    ],
    regExp: "normal-nums|ordinal|diagonal-fractions|stacked-fractions|tabular-nums|oldstyle-nums|proportional-nums|lining-nums|slashed-zero"
  },
  letterSpacing: {
    classes: [
      "tracking-tighter",
      "tracking-tight",
      "tracking-normal",
      "tracking-wide",
      "tracking-wider",
      "tracking-widest"
    ],
    regExp: "-?tracking-(tighter|tight|normal|wide|wider|widest|\\[.*\\])"
  },
  lineHeight: {
    classes: [
      "leading-none",
      "leading-tight",
      "leading-snug",
      "leading-normal",
      "leading-relaxed",
      "leading-loose",
      "leading-3",
      "leading-4",
      "leading-5",
      "leading-6",
      "leading-7",
      "leading-8",
      "leading-9",
      "leading-10"
    ],
    regExp: "leading-(none|tight|snug|normal|relaxed|loose|\\[.*\\]|\\d+)"
  },
  listStyleType: {
    classes: ["list-none", "list-disc", "list-decimal"],
    regExp: "list-(none|disc|decimal)"
  },
  listStylePosition: {
    classes: ["list-inside", "list-outside"],
    regExp: "list-(inside|outside)"
  },
  textUnderlineOffset: {
    classes: [
      "underline-offset-auto",
      "underline-offset-0",
      "underline-offset-1",
      "underline-offset-2",
      "underline-offset-4",
      "underline-offset-8"
    ],
    regExp: "underline-offset-(auto|\\d+|\\S+)"
  },
  textDecoration: {
    classes: ["underline", "overline", "line-through", "no-underline"],
    regExp: "underline|overline|line-through|no-underline"
  },
  textDecorationColor: {
    classes: [],
    regExp: "decoration-(black|transparent|current|white|__THEME_COLORS_REGEXP__|\\S+-\\d+)"
  },
  textTransform: {
    classes: ["uppercase", "lowercase", "capitalize", "normal-case"],
    regExp: "uppercase|lowercase|capitalize|normal-case"
  },
  textIndent: {
    classes: A(O.indent, (t) => `indent-${t}`),
    regExp: "-?indent-(\\d+|\\S+)"
  },
  whitespace: {
    classes: ["whitespace-normal", "whitespace-nowrap", "whitespace-pre", "whitespace-pre-line", "whitespace-pre-wrap"],
    regExp: "whitespace-(normal|nowrap|pre|pre-line|pre-wrap)"
  },
  wordBreak: {
    classes: ["break-normal", "break-words", "break-all"],
    regExp: "break-(normal|words|all)"
  },
  content: { classes: ["content-none"], regExp: "content-none" },
  backgroundAttachment: {
    classes: A(["fixed", "local", "scroll"], (t) => `bg-${t}`),
    regExp: "bg-(fixed|local|scroll)"
  },
  backgroundColor: {
    classes: [],
    regExp: "bg-(black|transparent|current|white|__THEME_COLORS_REGEXP__|\\S+-\\d+)"
  },
  backgroundPosition: {
    classes: [
      "bg-bottom",
      "bg-center",
      "bg-left",
      "bg-left-bottom",
      "bg-left-top",
      "bg-right",
      "bg-right-bottom",
      "bg-right-top",
      "bg-top"
    ],
    regExp: "bg-(bottom|center|left|left-bottom|left-top|right|right-bottom|right-top|top)"
  },
  backgroundRepeat: {
    classes: ["bg-repeat", "bg-repeat-x", "bg-repeat-y", "bg-no-repeat", "bg-repeat-round", "bg-repeat-space"],
    regExp: "bg-(repeat|repeat-x|repeat-y|no-repeat|repeat-round|repeat-space)"
  },
  backgroundSize: {
    classes: ["bg-auto", "bg-cover", "bg-contain"],
    regExp: "bg-(auto|cover|contain)"
  },
  backgroundGradient: {
    classes: [
      "bg-gradient-none",
      "bg-gradient-to-t",
      "bg-gradient-to-tr",
      "bg-gradient-to-r",
      "bg-gradient-to-br",
      "bg-gradient-to-b",
      "bg-gradient-to-bl",
      "bg-gradient-to-l",
      "bg-gradient-to-tl"
    ],
    regExp: "bg-gradient-(none|to-(t|tr|r|br|b|bl|l|tl))"
  },
  viaColor: {
    classes: [],
    regExp: "via-(black|transparent|current|white|__THEME_COLORS_REGEXP__|\\S+-\\d+)"
  },
  toColor: {
    classes: [],
    regExp: "to-(black|transparent|current|white|__THEME_COLORS_REGEXP__|\\S+-\\d+)"
  },
  position: {
    classes: ["static", "fixed", "absolute", "relative", "sticky"],
    regExp: "(static|fixed|absolute|relative|sticky)"
  },
  // border
  borderRadiusTopLeft: {
    classes: ["rounded-tl", ...A(O.borderRadius, (t) => `rounded-tl-${t}`)],
    regExp: "rounded-tl-?(\\d+|\\S+)?"
  },
  borderRadiusTopRight: {
    classes: ["rounded-tr", ...A(O.borderRadius, (t) => `rounded-tr-${t}`)],
    regExp: "rounded-tr-?(\\d+|\\S+)?"
  },
  borderRadiusBottomRight: {
    classes: ["rounded-br", ...A(O.borderRadius, (t) => `rounded-br-${t}`)],
    regExp: "rounded-br-?(\\d+|\\S+)?"
  },
  borderRadiusBottomLeft: {
    classes: ["rounded-bl", ...A(O.borderRadius, (t) => `rounded-bl-${t}`)],
    regExp: "rounded-bl-?(\\d+|\\S+)?"
  },
  borderRadiusTop: {
    classes: ["rounded-t", ...A(O.borderRadius, (t) => `rounded-t-${t}`)],
    regExp: "rounded-t-?(\\d+|\\S+)?"
  },
  borderRadiusRight: {
    classes: ["rounded-r", ...A(O.borderRadius, (t) => `rounded-r-${t}`)],
    regExp: "rounded-r-?(\\d+|\\S+)?"
  },
  borderRadiusBottom: {
    classes: ["rounded-b", ...A(O.borderRadius, (t) => `rounded-b-${t}`)],
    regExp: "rounded-b-?(\\d+|\\S+)?"
  },
  borderRadiusLeft: {
    classes: ["rounded-l", ...A(O.borderRadius, (t) => `rounded-l-${t}`)],
    regExp: `(rounded-l-(${O.borderRadius.join("|")})|rounded-l$)`
  },
  borderRadius: {
    classes: ["rounded", ...A(O.borderRadius, (t) => `rounded-${t}`)],
    regExp: `(rounded-(${O.borderRadius.join("|")}$)|rounded)`
  },
  borderX: {
    classes: ["border-x", ...A(O.borderWidth, (t) => `border-x-${t}`)],
    regExp: "border-x-?(\\d+|\\S+|\\[.*\\])?"
  },
  borderY: {
    classes: ["border-y", ...A(O.borderWidth, (t) => `border-y-${t}`)],
    regExp: "border-y-?(\\d+|\\S+|\\[.*\\])?"
  },
  borderTop: {
    classes: ["border-t", ...A(O.borderWidth, (t) => `border-t-${t}`)],
    regExp: "border-t-?(\\d+|\\S+|\\[.*\\])?"
  },
  borderRight: {
    classes: ["border-r", ...A(O.borderWidth, (t) => `border-r-${t}`)],
    regExp: "border-r-?(\\d+|\\S+|\\[.*\\])?"
  },
  borderBottom: {
    classes: ["border-b", ...A(O.borderWidth, (t) => `border-b-${t}`)],
    regExp: "border-b-?(\\d+|\\S+|\\[.*\\])?"
  },
  borderLeft: {
    classes: ["border-l", ...A(O.borderWidth, (t) => `border-l-${t}`)],
    regExp: "border-l-?(\\d+|\\S+|\\[.*\\])?"
  },
  borderColor: {
    classes: [],
    regExp: "^border-(black|transparent|current|white|__THEME_COLORS_REGEXP__|\\w+-\\d+|\\[#[0-9a-fA-F]+\\])$"
  },
  border: {
    classes: ["border", ...A(O.borderWidth, (t) => `border-${t}`)],
    regExp: "^border(-\\d+|\\[\\d+px\\])?$"
  },
  order: {
    classes: A([...Xe(0, 13), "first", "last", "none"], (t) => `order-${t}`),
    regExp: "-?order-(\\d+|first|last|none)"
  },
  divideXWidth: {
    classes: A(["0", 2, 4, 8], (t) => `divide-x-${t}`),
    regExp: "divide-x-(\\d+|\\[.*\\])"
  },
  divideYWidth: {
    classes: A(["0", 2, 4, 8], (t) => `divide-y-${t}`),
    regExp: "divide-y-(\\d+|\\[.*\\])"
  },
  divideColor: {
    classes: [],
    regExp: "divide-(black|transparent|current|white|__THEME_COLORS_REGEXP__|\\S+-\\d+)"
  },
  divideStyle: {
    classes: A(["solid", "dashed", "dotted", "double", "none"], (t) => `divide-${t}`),
    regExp: "divide-(solid|dashed|dotted|double|none)"
  },
  outlineWidth: {
    classes: A([0, 1, 2, 4, 8], (t) => `outline-${t}`),
    regExp: "outline-(\\d+)"
  },
  outlineOffset: {
    classes: A([0, 1, 2, 4, 8], (t) => `outline-offset-${t}`),
    regExp: "outline-offset-(\\d+)"
  },
  outlineColor: {
    classes: [],
    regExp: "outline-(black|transparent|current|white|__THEME_COLORS_REGEXP__|\\S+-\\d+)"
  },
  ringWidth: {
    classes: A([0, 1, 2, 4, 8, "inset"], (t) => `ring-${t}`),
    regExp: "ring-(\\d+|inset)"
  },
  ringOffsetWidth: {
    classes: A([0, 1, 2, 4, 8], (t) => `ring-offset-${t}`),
    regExp: "ring-offset-(\\d+)"
  },
  ringOffsetColor: {
    classes: [],
    regExp: "ring-offset-(black|transparent|current|white|__THEME_COLORS_REGEXP__|\\S+-\\d+)"
  },
  ringColor: {
    classes: [],
    regExp: "ring-(black|transparent|current|white|__THEME_COLORS_REGEXP__|\\S+-\\d+)"
  },
  // Effects
  // FIXME: "add shadow class
  boxShadowColor: {
    classes: [],
    regExp: "shadow-(black|transparent|current|white|__THEME_COLORS_REGEXP__|\\S+-\\d+)"
  },
  opacity: {
    classes: A([0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100], (t) => `opacity-${t}`),
    regExp: "opacity-(\\d+|\\[.*\\])"
  },
  mixBlendMode: {
    classes: A(O.blendEffect, (t) => `mix-blend-${t}`),
    regExp: "mix-blend-(\\d+|\\S+)"
  },
  bgBlendMode: {
    classes: A(O.blendEffect, (t) => `bg-blend-${t}`),
    regExp: "bg-blend-(\\d+|\\S+)"
  },
  // filters
  blur: {
    classes: A(["none", "sm", "md", "lg", "xl", "2xl", "3xl"], (t) => `blur-${t}`),
    regExp: "blur-(none|sm|md|lg|xl|2xl|3xl)"
  },
  brightness: {
    classes: A([0, 50, 75, 90, 95, 100, 105, 110, 125, 150, 200], (t) => `brightness-${t}`),
    regExp: "brightness-(\\d+)"
  },
  contrast: {
    classes: A([0, 50, 75, 100, 125, 150, 200], (t) => `contrast-${t}`),
    regExp: "contrast-(\\d+)"
  },
  grayScale: {
    classes: ["grayscale-0", "grayscale"],
    regExp: "grayscale(-0)?"
  },
  hueRotate: {
    classes: A([0, 15, 30, 60, 90, 180], (t) => `hue-rotate-${t}`),
    regExp: "-?hue-rotate-(\\d+)"
  },
  invert: { classes: ["invert-0", "invert"], regExp: "invert(-0)?" },
  saturate: {
    classes: A([0, 50, 100, 150, 200], (t) => `saturate-${t}`),
    regExp: "saturate-(\\d+)"
  },
  sepia: { classes: ["sepia-0", "sepia"], regExp: "sepia(-0)?" },
  // transitions
  transition: {
    classes: [
      "transition-none",
      "transition-all",
      // "transition",
      "transition-colors",
      "transition-opacity",
      "transition-shadow",
      "transition-transform"
    ],
    regExp: "transition-(none|all|colors|opacity|shadow|transform)"
  },
  duration: {
    classes: A([75, 100, 150, 200, 300, 500, 700, 1e3], (t) => `duration-${t}`),
    regExp: "duration-(\\d+|\\[.*\\])"
  },
  transitionEase: {
    classes: ["ease-linear", "ease-in", "ease-out", "ease-in-out"],
    regExp: "eas(e-linear|e-in|e-out|e-in-out)"
  },
  transitionDelay: {
    classes: A([75, 100, 150, 200, 300, 500, 700, 1e3], (t) => `delay-${t}`),
    regExp: "delay-(\\d+|\\[.*\\])"
  },
  animation: {
    classes: ["animate-none", "animate-spin", "animate-ping"],
    regExp: "animate-(none|spin|ping)"
  },
  scaleX: {
    classes: A(O.scale, (t) => `scale-x-${t}`),
    regExp: "-?scale-x-(\\d+|\\S+|\\[.*\\])"
  },
  scaleY: {
    classes: A(O.scale, (t) => `scale-y-${t}`),
    regExp: "-?scale-y-(\\d+|\\S+|\\[.*\\])"
  },
  scale: {
    classes: A(O.scale, (t) => `scale-${t}`),
    regExp: "-?scale-(\\d+|\\S+|\\[.*\\])"
  },
  rotate: {
    classes: A([0, 1, 2, 3, 6, 12, 45, 90, 180], (t) => `rotate-${t}`),
    regExp: "-?rotate-(\\d+|\\S+|\\[.*\\])"
  },
  translateX: {
    classes: A([0, "px", "0.5", 1], (t) => `translate-x-${t}`),
    regExp: "-?translate-x-(\\d+|\\S+|\\[.*\\])"
  },
  translateY: {
    classes: A([0, "px", "0.5", 1], (t) => `translate-y-${t}`),
    regExp: "-?translate-y-(\\d+|\\S+|\\[.*\\])"
  },
  skewX: {
    classes: A([0, 1, 2, 3, 6, 12], (t) => `skew-x-${t}`),
    regExp: "-?skew-x-(\\d+|\\S+|\\[.*\\])"
  },
  skewY: {
    classes: A([0, 1, 2, 3, 6, 12], (t) => `skew-y-${t}`),
    regExp: "-?skew-y-(\\d+|\\S+|\\[.*\\])"
  },
  // interactivity
  accentColor: {
    classes: [],
    regExp: "accent-(black|transparent|current|white|__THEME_COLORS_REGEXP__|\\S+-\\d+)"
  },
  appearance: { classes: ["appearance-none"], regExp: "appearance-none" },
  cursor: {
    classes: [
      "cursor-auto",
      "cursor-default",
      "cursor-pointer",
      "cursor-wait",
      "cursor-text",
      "cursor-move",
      "cursor-help",
      "cursor-not-allowed"
    ],
    regExp: "cursor-(auto|default|pointer|wait|text|move|help|not-allowed)"
  },
  caretColor: {
    classes: [],
    regExp: "caret-(black|transparent|current|white|__THEME_COLORS_REGEXP__|\\S+-\\d+)"
  },
  pointerEvents: {
    classes: ["pointer-events-none", "pointer-events-auto"],
    regExp: "pointer-events-(none|auto)"
  },
  userSelect: {
    classes: ["select-none", "select-text", "select-all", "select-auto"],
    regExp: "select-(none|text|all|auto)"
  },
  // SVG
  fill: { classes: [], regExp: "caret-(black|transparent|current|white|__THEME_COLORS_REGEXP__|\\S+-\\d+)" },
  stroke: {
    classes: [],
    regExp: "caret-(black|transparent|current|white|__THEME_COLORS_REGEXP__|\\S+-\\d+)"
  },
  strokeWidth: {
    classes: ["stroke-0", "stroke-1", "stroke-2"],
    regExp: "stroke-(\\d+|\\[.*\\])"
  }
}, Qx = {
  backgroundColor: "bg",
  textColor: "text",
  borderColor: "border",
  boxShadowColor: "shadow",
  outlineColor: "outline",
  divideColor: "divide",
  fromColor: "from",
  viaColor: "via",
  toColor: "to",
  ringColor: "ring",
  ringOffsetColor: "ring-offset"
}, e0 = ["current", "inherit", "transparent", "black", "white"], t0 = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose"
], n0 = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"], Is = A(Lt(Qx), (t) => t), r0 = Ot([
  ...A(e0, (t) => $t(A(Is, (e) => `${e}-${t}`))),
  ...A(
    t0,
    (t) => Ot(A(Is, (e) => Ot(A(n0, (n) => `${e}-${t}-${n}`))))
  )
]), o0 = A(
  Ot(
    Lt(Mn).map((t) => t.classes).concat(r0)
  ),
  (t) => ({
    name: t
  })
), s0 = () => {
  const t = Rr(), e = M(() => {
    let n = [];
    if (t.colors) {
      const r = Ot(A(t.colors, ({ items: s }) => kt(s)));
      n = Ot(A(r, (s) => $t(A(Is, (o) => `${o}-${s}`))));
    }
    return t.fontFamily && (n = [...n, ...A(kt(t.fontFamily), (r) => `${r}`)]), A(n, (r) => ({ name: r }));
  }, [t]);
  return M(
    () => new Tl([...o0, ...e], {
      isCaseSensitive: !1,
      threshold: 0.2,
      minMatchCharLength: 2,
      keys: ["name"]
    }),
    [e]
  );
}, Vo = () => {
  const t = Rr(), e = M(() => {
    if (t.colors) {
      const s = Ot(A(t.colors, ({ items: o }) => kt(o)));
      ht(Mn, (o, i) => {
        Ge(Mn, `${i}.regExp`, o.regExp.replace("__THEME_COLORS_REGEXP__", s.join("|")));
      });
    }
    return Mn;
  }, [t]), n = B(
    (s, o) => {
      const i = _(e, `${s}.regExp`, "");
      return o.match(new RegExp(i));
    },
    [e]
  ), r = B(
    (s, o = []) => _(e, `${s}.classes`, o),
    [e]
  );
  return { match: n, getClasses: r };
}, Ud = ({ label: t, property: e, onChange: n }) => {
  const { getClasses: r } = Vo(), s = r(e), o = Dr(e), i = M(() => _(o, "cls", ""), [o]), { canChange: a } = yn(Or), c = /\[.*\]/g.test(i);
  return /* @__PURE__ */ l("div", { className: t ? "w-full rounded" : "grow", children: c ? /* @__PURE__ */ b("div", { className: "flex items-center", children: [
    /* @__PURE__ */ l(Cr, { className: "w-[70%] rounded py-1", readOnly: !0, value: i }),
    /* @__PURE__ */ b(Ne, { delayDuration: 100, children: [
      /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l("button", { type: "button", className: "invisible ml-3 mt-1 text-blue-600 group-hover:visible", children: /* @__PURE__ */ l(pr, {}) }) }),
      /* @__PURE__ */ l(be, { children: "Current value is using a Tailwind arbitrary value." })
    ] })
  ] }) : /* @__PURE__ */ l(
    Rs,
    {
      rounded: t,
      onChange: (d) => n(d, e),
      selected: i,
      options: s,
      disabled: !a
    }
  ) });
};
function Rs({ selected: t, onChange: e, rounded: n = !1, options: r, disabled: s = !1 }) {
  const o = t.replace(/.*:/g, "").trim(), { undo: i, redo: a } = Ar();
  return /* @__PURE__ */ b(
    "select",
    {
      disabled: !r.length || s,
      className: `${n ? "rounded-md border border-border" : "border-0"} disable:bg-gray-500 h-full w-full truncate rounded bg-background px-2 py-1 text-xs outline-none disabled:cursor-not-allowed`,
      onChange: (c) => e(c.target.value),
      onKeyDown: (c) => {
        c.ctrlKey && (c.key === "z" && i(), c.key === "y" && a());
      },
      value: o,
      children: [
        /* @__PURE__ */ l("option", { className: "bg-transparent", value: "" }),
        r.map((c, d) => /* @__PURE__ */ l("option", { className: "bg-transparent", value: c, children: c }, `option-${d}`))
      ]
    }
  );
}
const i0 = {
  backgroundColor: "bg",
  textColor: "text",
  borderColor: "border",
  boxShadowColor: "shadow",
  outlineColor: "outline",
  divideColor: "divide",
  fromColor: "from",
  viaColor: "via",
  toColor: "to",
  ringColor: "ring",
  ringOffsetColor: "ring-offset"
}, a0 = ({ property: t, onChange: e }) => {
  const n = Dr(t), r = M(() => _(n, "cls", ""), [n]), { canChange: s } = yn(Or), [o, i] = $([]), [a, c] = $({ color: "", shade: "" }), d = r.split("-"), u = _(d, "1", ""), p = _(d, "2", ""), f = B(
    (g) => {
      ["current", "inherit", "transparent", "black", "white"].includes(g) ? (i([]), c({ color: g })) : (i(["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), c((y) => ({ ...y, color: g, shade: y.shade ? y.shade : "500" })));
    },
    [i, c]
  );
  z(() => {
    if (["current", "inherit", "transparent", "black", "white"].includes(u))
      return i([]);
    i(["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"]);
  }, [u]);
  const h = B(
    (g) => {
      c({ color: u, shade: g });
    },
    [u]
  );
  z(() => {
    c({ color: "", shade: "" });
  }, [n]);
  const { match: m } = Vo();
  return z(() => {
    const y = `${_(i0, t, "")}-${a.color}${a.shade ? `-${a.shade}` : ""}`;
    m(t, y) && e(y, t);
  }, [m, a, e, t]), /* @__PURE__ */ b("div", { className: "flex flex-row divide-x divide-solid divide-border rounded-lg border border-transparent text-xs", children: [
    /* @__PURE__ */ l("div", { className: "grow text-center", children: /* @__PURE__ */ l(
      Rs,
      {
        disabled: !s,
        rounded: !0,
        selected: u,
        onChange: f,
        options: [
          "current",
          "transparent",
          "primary",
          "secondary",
          "black",
          "white",
          "slate",
          "gray",
          "zinc",
          "neutral",
          "stone",
          "red",
          "orange",
          "amber",
          "yellow",
          "lime",
          "green",
          "emerald",
          "teal",
          "cyan",
          "sky",
          "blue",
          "indigo",
          "violet",
          "purple",
          "fuchsia",
          "pink",
          "rose"
        ]
      }
    ) }),
    /* @__PURE__ */ l("button", { type: "button", className: "grow text-center", children: /* @__PURE__ */ l(Rs, { rounded: !0, selected: p, disabled: !u || !s, onChange: h, options: o }) })
  ] });
}, Kd = {
  "not-italic": () => /* @__PURE__ */ l("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ l("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 3H11V5H9V11H11V13H5V11H7V5H5V3H9Z", fill: "white" }) }),
  // visibility
  visible: yl,
  invisible: no,
  // display
  hidden: no,
  gap: Bt,
  gapX: rt,
  gapY: nt,
  spaceX: rt,
  spaceY: nt,
  overscroll: Bt,
  overscrollX: rt,
  overscrollY: nt,
  overflow: Bt,
  overflowX: rt,
  overflowY: nt,
  top: qt,
  right: Qn,
  bottom: Rn,
  left: Zn,
  inset: Bt,
  insetX: rt,
  insetY: nt,
  border: Bt,
  borderX: rt,
  borderY: nt,
  borderTop: qt,
  borderRight: Qn,
  borderBottom: Rn,
  borderLeft: Zn,
  borderRadius: Bt,
  borderRadiusX: rt,
  borderRadiusY: nt,
  borderRadiusTop: qt,
  borderRadiusRight: Qn,
  borderRadiusBottom: Rn,
  borderRadiusLeft: Zn,
  borderRadiusTopLeft: Ip,
  borderRadiusTopRight: bl,
  borderRadiusBottomRight: Bp,
  borderRadiusBottomLeft: Tp,
  divideXWidth: rt,
  divideYWidth: nt,
  scale: Bt,
  scaleX: rt,
  scaleY: nt,
  skewX: rt,
  skewY: nt,
  translateX: rt,
  translateY: nt,
  // padding
  padding: Bt,
  paddingX: rt,
  paddingY: nt,
  paddingTop: qt,
  paddingRight: Qn,
  paddingBottom: Rn,
  paddingLeft: Zn,
  // margin
  margin: Bt,
  marginX: rt,
  marginY: nt,
  marginTop: qt,
  marginRight: Qn,
  marginBottom: Rn,
  marginLeft: Zn,
  // text-align
  textLeft: Ap,
  textCenter: _p,
  textRight: Ep,
  textJustify: Sp,
  // font style
  italic: dl,
  // "not-italic": "",
  // decoration
  underline: ul,
  overline: Np,
  // transform
  uppercase: Cp,
  block: () => /* @__PURE__ */ b("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ l(
      "path",
      {
        opacity: "0.6",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 2H14V14H2V2ZM1 1H15V15H1V1Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ l("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 4H4V12H7V4ZM9 4H12V12H9V4Z", fill: "currentColor" })
  ] }),
  // floats
  "float-right": () => /* @__PURE__ */ b("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ l("path", { d: "M8 4H16V12H8V4Z", fill: "currentColor" }),
    /* @__PURE__ */ l(
      "path",
      {
        opacity: "0.6",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0 4H6V6H0V4ZM0 7H6V9H0V7ZM4 10H0V12H4V10Z",
        fill: "currentColor"
      }
    )
  ] }),
  "float-left": () => /* @__PURE__ */ b("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ l("path", { d: "M0 4H8V12H0V4Z", fill: "currentColor" }),
    /* @__PURE__ */ l(
      "path",
      {
        opacity: "0.6",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 4H16V6H10V4ZM10 7H16V9H10V7ZM14 10H10V12H14V10Z",
        fill: "currentColor"
      }
    )
  ] }),
  "float-none": No,
  // position
  fixed: () => /* @__PURE__ */ b("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ l(
      "path",
      {
        opacity: "0.6",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15 2H14V4H13V5H14V6H15V2ZM10 5V4H9V2H1V8H2V5H10ZM7 4V3H5V4H7ZM4 4V3H2V4H4ZM1 13H7V14H1V13Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ l(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11 2H10V3H11V6H12V3H13V2H11ZM2 9H1V12H2V11H7V10H2V9ZM15 7H8V14H15V7Z",
        fill: "currentColor"
      }
    )
  ] }),
  absolute: () => /* @__PURE__ */ b("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ l(
      "path",
      {
        opacity: "0.6",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 2H15V6H14V2ZM9 3V2H1V8H2V3H9ZM7 13H1V14H7V13Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ l(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11 2H10V3H11V6H12V3H13V2H11ZM2 9H1V12H2V11H7V10H2V9ZM15 7H8V14H15V7Z",
        fill: "currentColor"
      }
    )
  ] }),
  relative: () => /* @__PURE__ */ l("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ l(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11 2H9V3H11V6H12V3H14V2H11ZM2 8H1V13H2V11H7V10H2V8ZM15 7H8V14H15V7Z",
      fill: "currentColor"
    }
  ) }),
  sticky: () => /* @__PURE__ */ b("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ l(
      "path",
      {
        d: "M12.9998 7C13.6558 7 14.2937 6.78498 14.8158 6.38787C15.338 5.99076 15.7156 5.43345 15.8908 4.80128C16.066 4.16912 16.0292 3.49694 15.7859 2.8877C15.5427 2.27846 15.1065 1.76573 14.5441 1.42804C13.9817 1.09034 13.3241 0.946293 12.672 1.01795C12.02 1.08961 11.4094 1.37303 10.9337 1.8248C10.4581 2.27658 10.1436 2.8718 10.0385 3.51932C9.93341 4.16685 10.0434 4.83097 10.3518 5.41L6.88176 8.88C6.80034 8.96122 6.73572 9.05769 6.69158 9.16388C6.64744 9.27008 6.62465 9.38393 6.62451 9.49894C6.62437 9.61395 6.64689 9.72785 6.69077 9.83416C6.73465 9.94046 6.79904 10.0371 6.88026 10.1185C6.96149 10.1999 7.05795 10.2645 7.16415 10.3087C7.27035 10.3528 7.3842 10.3756 7.4992 10.3758C7.61421 10.3759 7.72812 10.3534 7.83442 10.3095C7.94072 10.2656 8.03734 10.2012 8.11876 10.12L11.5888 6.648C12.0088 6.873 12.4888 7 12.9988 7H12.9998Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ l(
      "path",
      {
        opacity: "0.6",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.535 2H1V14H15V7.465C14.69 7.645 14.355 7.783 14 7.875V13H2V5H9.126C8.86504 3.98486 9.01223 2.90789 9.536 2H9.535ZM7 3V4H5V3H7ZM4 3V4H2V3H4Z",
        fill: "currentColor"
      }
    )
  ] }),
  static: at
}, l0 = ({ property: t, onChange: e }) => {
  const { getClasses: n } = Vo(), r = n(t), { canChange: s } = yn(Or), o = Dr(t), i = M(() => _(o, "cls", ""), [o]);
  return /* @__PURE__ */ l("div", { className: "flex grow flex-wrap gap-1", children: A(r, (a) => /* @__PURE__ */ b(Ne, { children: [
    /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        disabled: !s,
        onClick: () => e(a, t),
        className: `cursor-pointer rounded border border-border p-1 disabled:cursor-not-allowed ${i === a ? "bg-primary text-white" : "disabled:bg-gray-600 disabled:text-gray-400"}`,
        children: te.createElement(_(Kd, a, So))
      }
    ) }),
    /* @__PURE__ */ l(be, { children: Kt(nl(a)) })
  ] })) });
}, c0 = ({ property: t, onChange: e }) => {
  const { canReset: n, canChange: r } = yn(Or), s = Dr(t), o = M(() => _(s, "cls", ""), [s]), { getClasses: i } = Vo(), a = i(t, [""]), c = a.indexOf(o) > -1 ? a.indexOf(o) : 0, d = /\[.*\]/g.test(o);
  return /* @__PURE__ */ l("div", { className: "flex flex-row divide-x divide-solid divide-border rounded border border-border text-xs", children: d ? /* @__PURE__ */ l("div", { className: "px-2 py-[5px]", children: o }) : /* @__PURE__ */ b(Q, { children: [
    /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        className: "hover:bg-bg-gray-700 box-border w-2/12 rounded-bl rounded-tl bg-background px-1 text-center disabled:cursor-not-allowed disabled:bg-gray-600",
        disabled: !r && (!n || c - 1 < 0),
        onClick: () => e(Ki(a, c - 1), t),
        children: /* @__PURE__ */ l("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ l(
          Rp,
          {
            className: !r && (!n || c - 1 < 0) ? "text-gray-500" : "text-black/60 dark:text-white/60"
          }
        ) })
      }
    ),
    /* @__PURE__ */ l("div", { className: "w-8/12 text-center", children: /* @__PURE__ */ l(Ud, { label: !1, property: t, onChange: e }) }),
    /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        className: "hover:bg-bg-gray-700 w-2/12 rounded-br rounded-tr bg-background px-1 text-center disabled:cursor-not-allowed disabled:bg-gray-600",
        disabled: !r && (!n || c + 1 >= a.length),
        onClick: () => e(Ki(a, c + 1), t),
        children: /* @__PURE__ */ l("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ l(
          qe,
          {
            className: !r && (!n || c + 1 >= a.length) ? "text-gray-500" : "text-black/60 dark:text-white/60"
          }
        ) })
      }
    )
  ] }) });
};
function d0(t) {
  if (F(t.trim())) return "";
  const e = t.match(/sm:|md:|lg:|xl:|2xl:/g);
  return _(e, 0, "xs").replace(":", "");
}
function u0(t) {
  const e = A(hh, (r) => `${r}:`).join("|"), n = new RegExp(e, "g");
  return _(n.exec(t.trim()), 0, "").replace(":", "");
}
function p0(t) {
  return t.trim().split(":").pop() || "";
}
const fs = {};
function f0(t) {
  if (F(t)) return "";
  if (fs[t])
    return fs[t];
  let e = "";
  for (const n in Mn) {
    const r = _(Mn, `${n}.regExp`, "");
    if (new RegExp(r, "g").test(t)) {
      e = n, fs[t] = e;
      break;
    }
  }
  return e;
}
function Fi(t) {
  return F(t) ? null : {
    dark: Re(t, "dark:"),
    mq: d0(t),
    mod: u0(t),
    cls: p0(t),
    fullCls: t,
    property: f0(t)
  };
}
function h0(t) {
  let e = "";
  return t.dark && (e += "dark:"), t.mq.toLowerCase() !== "xs" && (e += `${t.mq}:`), t.mod && (e += `${t.mod}:`), e += t.cls, e;
}
function Xt(t) {
  t = t.replace(/\s+/g, " ");
  const e = t.split(" ").map(Fi).filter((r) => r !== null), n = ["xs", "sm", "md", "lg", "xl", "2xl"];
  return e.sort((r, s) => n.indexOf(r.mq) - n.indexOf(s.mq)).map((r) => r.fullCls).join(" ");
}
import.meta.vitest && test("orderClassesByBreakpoint", () => {
  expect(Xt("bg-red-400 sm:bg-red-500")).toBe("bg-red-400 sm:bg-red-500"), expect(Xt("bg-red-400 sm:bg-red-500 md:bg-red-600")).toBe(
    "bg-red-400 sm:bg-red-500 md:bg-red-600"
  ), expect(Xt("xl:sticky block sm:absolute")).toBe("block sm:absolute xl:sticky"), expect(Xt("sm:bg-red-500 bg-red-400")).toBe("bg-red-400 sm:bg-red-500"), expect(Xt("sm:w-[30%] w-[30%]")).toBe("w-[30%] sm:w-[30%]"), expect(Xt("text-[30px]       sm:text-[20px]")).toBe("text-[30px] sm:text-[20px]");
});
function pt(t) {
  if (t = t.replace(/\s+/g, " "), !t) return "";
  const e = ["xs", "sm", "md", "lg", "xl", "2xl"], n = t.split(" ").map(Fi).filter((s) => s !== null);
  let r = t;
  if (n.length === 1) return n[0].fullCls;
  for (const s of n) {
    const o = s.property, i = e.indexOf(s.mq);
    for (let a = i + 1; a < e.length; a++) {
      const c = e[a], d = n.find((u) => u.property === o && u.mq === c);
      if (d && d.cls === s.cls)
        r = r.replace(d.fullCls, "");
      else if (d && d.cls !== s.cls)
        break;
    }
  }
  return r.replace(/\s+/g, " ").trim();
}
import.meta.vitest && test("removeDuplicateClasses (tailwind classes) at higher breakpoints", () => {
  expect(pt("")).toBe(""), expect(pt("bg-red-400")).toBe("bg-red-400"), expect(pt("bg-red-400    sm:bg-red-500")).toBe("bg-red-400 sm:bg-red-500"), expect(pt("bg-red-400 sm:bg-red-400")).toBe("bg-red-400"), expect(pt("bg-red-400 sm:bg-red-400 lg:bg-red-400")).toBe("bg-red-400"), expect(pt("p-4 sm:p-6 md:p-4")).toBe("p-4 sm:p-6 md:p-4"), expect(pt("p-4 sm:p-6 md:p-4 lg:p-4")).toBe("p-4 sm:p-6 md:p-4"), expect(pt("sm:bg-red-400 bg-red-400")).toBe("bg-red-400"), expect(pt("w-[30%] sm:w-[30%]")).toBe("w-[30%]"), expect(pt("w-[30%] sm:w-[30%] md:w-[40%]")).toBe("w-[30%] md:w-[40%]");
});
const m0 = P(null, (t, e, { blockIds: n, newClasses: r }) => {
  const s = Z(
    t(Sr),
    (i) => (
      // @ts-ignore
      n.includes(t(i)._id)
    )
  ), o = ye(t(Br));
  return A(s, (i) => {
    const a = t(i), c = _(a, o.prop, `${St},`), { classes: d } = vn(c);
    return {
      ids: [a._id],
      props: {
        [o.prop]: `${St},${Xt(
          pt(_l(d, r))
        )}`
      }
    };
  });
}), Jd = () => {
  const t = vt(m0), { updateBlocks: e, updateBlocksRuntime: n } = $e();
  return B(
    (r, s, o = !1) => {
      const i = t({ blockIds: r, newClasses: s });
      if (!o) {
        n(r, i[0].props);
        return;
      }
      e(r, i[0].props);
    },
    [t, e, n]
  );
}, g0 = (t) => {
  const e = ["xs", "sm", "md", "lg", "xl", "2xl"], n = e.indexOf(t);
  return n === -1 ? ["xs"] : e.slice(0, n + 1);
}, b0 = P((t) => {
  const e = ye(t(Br)), n = t(To);
  if (!e || e.blockId !== _(n, "_id", null)) return [];
  const r = _(n, e.prop, `${St},`), { classes: s } = vn(r);
  return Z(A(s.trim().split(" "), Fi), (o) => !tl(o));
}), Fa = { xs: 0, sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }, y0 = P((t) => {
  const e = t(Td), n = t(ri), r = t(Tc), s = g0(e);
  let o = Z(t(b0), { mod: n });
  return Re(n, "_") || (o = Z(o, (i) => s.includes(i.mq))), o = o.sort((i, a) => Fa[i.mq] - Fa[a.mq]), r || (o = Z(o, { dark: !1 })), o;
}), jo = () => Ue(y0), x0 = () => D(ri), Dr = (t) => {
  const e = jo();
  return Gu(e, { property: t });
}, v0 = (t, e) => {
  const n = {
    xs: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
    "2xl": 5
  };
  return n[_(t, "mq", "xs")] <= n[e];
}, w0 = {
  width: "w-",
  height: "h-",
  minWidth: "min-w-",
  minHeight: "min-h-",
  maxWidth: "max-w-",
  maxHeight: "max-h-",
  zIndex: "z-",
  gap: "gap-",
  gapX: "gap-x-",
  gapY: "gap-y-",
  margin: "m-",
  marginX: "mx-",
  marginY: "my-",
  marginTop: "mt-",
  marginBottom: "mb-",
  marginLeft: "ml-",
  marginRight: "mr-",
  padding: "p-",
  paddingX: "px-",
  paddingY: "py-",
  paddingTop: "pt-",
  paddingBottom: "pb-",
  paddingLeft: "pl-",
  paddingRight: "pr-",
  spaceX: "space-x-",
  spaceY: "space-y-",
  border: "border-",
  borderTop: "border-t-",
  borderBottom: "border-b-",
  borderLeft: "border-l-",
  borderRight: "border-r-",
  borderX: "border-x-",
  borderY: "border-y-",
  borderRadius: "rounded-",
  borderRadiusTop: "rounded-t-",
  borderRadiusRight: "rounded-r-",
  borderRadiusBottom: "rounded-b-",
  borderRadiusLeft: "rounded-l-",
  borderRadiusTopLeft: "rounded-tl-",
  borderRadiusTopRight: "rounded-tr-",
  borderRadiusBottomRight: "rounded-br-",
  borderRadiusBottomLeft: "rounded-bl-",
  fontSize: "text-",
  lineHeight: "leading-",
  letterSpacing: "tracking-",
  textIndent: "indent-",
  rotate: "rotate-",
  duration: "duration-",
  transitionDelay: "delay-",
  scale: "scale-",
  scaleX: "scale-x-",
  scaleY: "scale-y-",
  translateX: "translate-x-",
  translateY: "translate-y-",
  skewX: "skew-x-",
  skewY: "skew-y-",
  top: "top-",
  bottom: "bottom-",
  left: "left-",
  right: "right-",
  inset: "inset-",
  insetX: "inset-x-",
  insetY: "inset-y-",
  opacity: "opacity-",
  flexBasis: "basis-"
}, za = {
  xs: "",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
}, k0 = (t) => `${t.toUpperCase()} ${za[t] ? `(${za[t]} & up)` : ""}`, yo = (t) => {
  const { t: e } = K(), { type: n = "icons", label: r, property: s, onEmitChange: o = () => {
  }, units: i, negative: a = !1 } = t, [c] = Ir(), [d] = x0(), [, u] = bo(), p = Dr(s), f = Jd(), h = $i(), [m] = oe(), g = M(() => _(p, "fullCls", ""), [p]), y = B(
    (T, C = !0) => {
      const N = { dark: c, mq: u, mod: d, cls: T };
      (c || d !== "") && (N.mq = "xs");
      const E = h0(N);
      f(m, [E], C);
    },
    [m, c, u, d, s, f]
  ), x = B(() => {
    h(m, [g], !0);
  }, [m, g, h]), w = M(() => v0(p, u), [p, u]);
  z(() => {
    o(w, p);
  }, [w, o, p]);
  const [, , S] = bo(), v = B(
    (T) => {
      S({
        xs: 400,
        sm: 640,
        md: 800,
        lg: 1024,
        xl: 1420,
        "2xl": 1920
      }[T]);
    },
    [S]
  ), k = _(p, "dark", null) === c && _(p, "mod", null) === d && _(p, "mq", null) === u;
  return /* @__PURE__ */ l(Zx, { canChange: w, canReset: p && k, children: /* @__PURE__ */ b("div", { className: "group flex flex-row items-center py-2 first:pt-0 last:pb-0", children: [
    /* @__PURE__ */ l("div", { className: "relative w-[70px] truncate text-xs text-foreground", children: /* @__PURE__ */ l("span", { className: `text-[11px] ${p && !k ? "text-foreground" : ""}`, children: e(r) }) }),
    /* @__PURE__ */ b("div", { className: "flex flex-row items-center", children: [
      /* @__PURE__ */ b("div", { className: "w-[150px]", children: [
        n === "arbitrary" ? /* @__PURE__ */ l(
          qx,
          {
            currentClass: _(p, "cls", ""),
            classPrefix: _(w0, s, ""),
            units: i || [],
            onChange: y,
            negative: a,
            cssProperty: s
          }
        ) : null,
        n === "icons" && /* @__PURE__ */ l(l0, { property: s, onChange: y }),
        n === "range" && /* @__PURE__ */ l(c0, { property: s, onChange: y }),
        n === "color" && /* @__PURE__ */ l(a0, { property: s, onChange: y }),
        n === "dropdown" && /* @__PURE__ */ l(Ud, { label: r, property: s, onChange: y })
      ] }),
      /* @__PURE__ */ l("div", { className: `w-[30px] cursor-pointer ${g ? "visible" : "invisible"}`, children: k ? /* @__PURE__ */ l("button", { type: "button", onClick: () => x(), title: "Reset", className: "flex px-1.5 text-xs", children: /* @__PURE__ */ l(Lp, { className: "h-5 w-5 text-blue-500 hover:opacity-80" }) }) : w && p ? /* @__PURE__ */ b(Ne, { delayDuration: 100, children: [
        /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            className: "invisible ml-3 mt-1 rounded-full bg-primary text-white group-hover:visible",
            children: /* @__PURE__ */ l(pr, {})
          }
        ) }),
        /* @__PURE__ */ l(be, { children: /* @__PURE__ */ l("div", { className: "text-right", children: /* @__PURE__ */ b("div", { children: [
          "Current style is set at  ",
          /* @__PURE__ */ b("span", { className: "font-bold", children: [
            k0(_(p, "mq")),
            c && !p.dark ? "(Light mode)" : ""
          ] }),
          /* @__PURE__ */ l("br", {}),
          /* @__PURE__ */ b(
            "button",
            {
              type: "button",
              onClick: () => v(_(p, "mq")),
              className: "block w-full cursor-default text-right font-semibold text-blue-500",
              children: [
                "Switch to ",
                _(p, "mq").toUpperCase()
              ]
            }
          )
        ] }) }) })
      ] }) : null })
    ] })
  ] }) });
}, C0 = ["px", "%", "em", "rem", "ch", "vh", "vw"], Ls = ({
  label: t,
  options: e,
  borderB: n = !1,
  borderT: r = !1,
  type: s = "arbitrary",
  units: o = C0,
  negative: i = !1
}) => {
  const { t: a } = K(), [c, d] = $(e[0].key), u = jo(), p = B((f) => A(u, "property").includes(f), [u]);
  return /* @__PURE__ */ b(
    "div",
    {
      className: `mb-2 border-border py-2 first:pt-0 last:pb-0 ${n ? "border-b" : ""} ${r ? "border-t" : ""}`,
      children: [
        /* @__PURE__ */ b("div", { className: "flex flex-row text-xs", children: [
          t && /* @__PURE__ */ l("span", { className: "relative w-[70px] flex-none text-xs text-foreground", children: a(t) }),
          /* @__PURE__ */ l("div", { className: "mb-3 flex grow flex-row flex-wrap gap-x-px", children: e.map(({ label: f, key: h }, m) => /* @__PURE__ */ l("div", { className: "first:rounded-l last:rounded-r", children: /* @__PURE__ */ b(Ne, { children: [
            /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ b(
              "button",
              {
                type: "button",
                onClick: () => d(h),
                className: `relative cursor-pointer rounded-full p-1 text-[8px] ${h === c ? "bg-[#3E57F0] text-white" : "text-gray-600 dark:text-gray-300"}`,
                children: [
                  te.createElement("div", {
                    className: p(h) ? "-bottom-1.5 absolute bg-[#3E57F0] h-[2px] left-0 w-full" : ""
                  }),
                  te.createElement(_(Kd, h, So), { className: "text-inherit w-3 h-3" })
                ]
              }
            ) }),
            /* @__PURE__ */ l(be, { children: Kt(nl(f)) })
          ] }) }, `option-${m}`)) })
        ] }),
        /* @__PURE__ */ l("div", { className: "mt-0 flex items-center", children: /* @__PURE__ */ l(
          yo,
          {
            type: s,
            units: [...o],
            label: "",
            property: c,
            negative: i
          }
        ) })
      ]
    }
  );
}, Ha = ({ heading: t, items: e }) => {
  const { t: n } = K(), r = jo(), s = M(() => {
    const o = (c) => $t(
      c.map((d) => d.styleType === "multiple" ? A(d.options, "key") : d.property)
    ), i = $t(
      e.map((c) => c.styleType === "accordion" ? o(c.items) : c.styleType === "multiple" ? A(c.options, "key") : c.property)
    ), a = A(r, "property");
    return Uu(i, a).length > 0;
  }, [r, e]);
  return /* @__PURE__ */ b("details", { children: [
    /* @__PURE__ */ l("summary", { className: "my-px cursor-default rounded-md bg-gray-50 p-px px-2 text-[11px] text-foreground dark:bg-gray-800", children: /* @__PURE__ */ b("div", { className: "inline", children: [
      Kt(n(t.toLowerCase())),
      s ? /* @__PURE__ */ l(
        "span",
        {
          className: `ml-1 mr-2 inline-block h-[8px] w-[8px] rounded-full ${s ? "bg-primary" : "bg-gray-300"}`
        }
      ) : null
    ] }) }),
    /* @__PURE__ */ l("div", { className: "p-2", children: e.map((o) => o.styleType === "multiple" ? /* @__PURE__ */ l(Ls, { ...o }, o.label) : /* @__PURE__ */ l(yo, { ...o }, o.label)) })
  ] });
}, N0 = wo({}), hs = ({ section: t, showAccordian: e }) => {
  const { t: n } = K(), r = jo(), s = B(
    (i = []) => {
      const a = {};
      for (let d = 0; d < r.length; d++)
        a[r[d].property] = r[d].cls;
      let c = !0;
      for (const d in i)
        if (!le(a, d) || a[d] !== i[d]) {
          c = !1;
          break;
        }
      return c;
    },
    [r]
  ), o = M(() => ({}), []);
  return /* @__PURE__ */ l(N0.Provider, { value: o, children: e ? /* @__PURE__ */ b(Hd, { value: t.heading, className: "border-none", children: [
    /* @__PURE__ */ l(Vd, { className: "border-slate-150 border-t py-2 text-xs", children: /* @__PURE__ */ l("div", { className: "flex items-center py-2", children: /* @__PURE__ */ l("div", { className: "flex items-center gap-x-2 text-xs font-medium", children: Kt(n(t.heading)) }) }) }),
    /* @__PURE__ */ l(jd, { className: "py-2", children: t.items.map((i) => le(i, "component") ? te.createElement(i.component, { key: i.label }) : le(i, "styleType") ? i.styleType === "multiple" ? /* @__PURE__ */ l(Ls, { ...i }, i.label + "multiple-choices") : i.styleType === "accordion" && s(i == null ? void 0 : i.conditions) ? /* @__PURE__ */ l(Ha, { ...i }, i.label + "nested-options") : null : /* @__PURE__ */ l(yo, { ...i }, i.label + "block-style")) })
  ] }) : /* @__PURE__ */ l("div", { className: "py-2", children: t.items.map((i, a) => le(i, "component") ? te.createElement(i.component, { key: i.label }) : le(i, "styleType") ? i.styleType === "multiple" ? /* @__PURE__ */ l(Ls, { ...i }, i.label + "multiple-choices" + a) : i.styleType === "accordion" && s(i == null ? void 0 : i.conditions) ? /* @__PURE__ */ l(Ha, { ...i }, i.label + "nested-options" + a) : null : /* @__PURE__ */ l(yo, { ...i }, i.label + "block-style" + a)) }) });
}, S0 = _o.Root, E0 = _o.Trigger, Yd = W.forwardRef(({ className: t, align: e = "center", sideOffset: n = 4, ...r }, s) => /* @__PURE__ */ l(
  _o.Content,
  {
    ref: s,
    align: e,
    sideOffset: n,
    className: j(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-[--radix-hover-card-content-transform-origin] rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
      t
    ),
    ...r
  }
));
Yd.displayName = _o.Content.displayName;
const _0 = Et("selectedBreakpoints", ["XS", "MD", "XL"]), A0 = () => {
  const [t, e] = D(_0);
  return [t, e];
}, Va = ({ className: t = "" }) => /* @__PURE__ */ b(
  "svg",
  {
    className: Ze("h-4 w-4", t),
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ l("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }),
      /* @__PURE__ */ l("line", { x1: "12", y1: "18", x2: "12.01", y2: "18" })
    ]
  }
), T0 = ({ className: t = "" }) => /* @__PURE__ */ b(
  "svg",
  {
    className: Ze("h-4 w-4", t),
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ l("rect", { x: "2", y: "4", width: "20", height: "12", rx: "2", ry: "2" }),
      /* @__PURE__ */ l("line", { x1: "6", y1: "20", x2: "18", y2: "20" }),
      /* @__PURE__ */ l("line", { x1: "12", y1: "16", x2: "12", y2: "20" })
    ]
  }
), B0 = ({ className: t = "" }) => /* @__PURE__ */ b(
  "svg",
  {
    className: Ze("h-4 w-4", t),
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ l("rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", ry: "2" }),
      /* @__PURE__ */ l("line", { x1: "8", y1: "21", x2: "16", y2: "21" }),
      /* @__PURE__ */ l("line", { x1: "12", y1: "17", x2: "12", y2: "21" })
    ]
  }
), ja = ({ landscape: t = !1, className: e = "" }) => /* @__PURE__ */ b(
  "svg",
  {
    className: Ze("h-4 w-4", t ? "rotate-90" : "", e),
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ l("rect", { x: "4", y: "2", width: "16", height: "20", rx: "2", ry: "2" }),
      /* @__PURE__ */ l("line", { x1: "12", y1: "18", x2: "12.01", y2: "18" })
    ]
  }
), Ps = [
  {
    title: "Mobile (Base)",
    content: "Styles set here are applied to all screen unless edited at higher breakpoint",
    breakpoint: "xs",
    icon: /* @__PURE__ */ l(Va, { className: "h-4 w-4" }),
    width: 400
  },
  {
    title: "Mobile landscape (SM)",
    content: "Styles set here are applied at 640px and up unless edited at higher breakpoint",
    breakpoint: "sm",
    icon: /* @__PURE__ */ l(Va, { className: "h-4 w-4 rotate-90" }),
    width: 640
  },
  {
    title: "Tablet (MD)",
    content: "Styles set here are applied at 768px and up",
    breakpoint: "md",
    icon: /* @__PURE__ */ l(ja, {}),
    width: 800
  },
  {
    title: "Tablet Landscape (LG)",
    content: "Styles set here are applied at 1024px and up unless edited at higher breakpoint",
    breakpoint: "lg",
    icon: /* @__PURE__ */ l(ja, { landscape: !0 }),
    width: 1024
  },
  {
    title: "Desktop (XL)",
    content: "Styles set here are applied at 1280px and up unless edited at higher breakpoint",
    breakpoint: "xl",
    icon: /* @__PURE__ */ l(T0, { className: "h-4 w-4" }),
    width: 1420
  },
  {
    title: "Large Desktop (2XL)",
    content: "Styles set here are applied at 1536px and up",
    breakpoint: "2xl",
    icon: /* @__PURE__ */ l(B0, { className: "h-4 w-4" }),
    width: 1920
  }
], Wa = ({
  canvas: t = !1,
  openDelay: e = 400,
  tooltip: n = !0,
  title: r,
  content: s,
  currentBreakpoint: o,
  breakpoint: i,
  width: a,
  icon: c,
  onClick: d,
  buttonClass: u = "",
  activeButtonClass: p = ""
}) => {
  const { t: f } = K();
  return n ? /* @__PURE__ */ b(S0, { openDelay: e, children: [
    /* @__PURE__ */ l(E0, { asChild: !0, children: /* @__PURE__ */ l(
      re,
      {
        onClick: () => d(a),
        size: "sm",
        className: Ze("h-7 w-7 rounded-md p-1", i === o ? p : u),
        variant: "ghost",
        children: c
      }
    ) }),
    /* @__PURE__ */ l(Yd, { className: "w-fit max-w-52 border-border", children: /* @__PURE__ */ l("div", { className: "flex justify-between space-x-4", children: /* @__PURE__ */ b("div", { className: "space-y-1", children: [
      /* @__PURE__ */ l("h4", { className: "text-sm font-semibold", children: f(r) }),
      t && /* @__PURE__ */ l("p", { className: "text-xs", children: f(s) })
    ] }) }) })
  ] }) : /* @__PURE__ */ l(
    re,
    {
      onClick: () => d(a),
      size: "sm",
      className: "h-7 w-7 rounded-md p-1",
      variant: i === o ? "outline" : "ghost",
      children: c
    }
  );
}, I0 = ({
  openDelay: t = 400,
  canvas: e = !1,
  tooltip: n = !0,
  buttonClass: r = "",
  activeButtonClass: s = ""
}) => {
  const [o, , i] = bo(), [a, c] = Li(), [d, u] = A0(), p = d, f = u, { t: h } = K(), m = G("breakpoints", Ps), g = (w) => {
    p.includes(w) ? p.length > 2 && f(p.filter((S) => S !== w)) : f((S) => [...S, w]);
  }, y = (w) => {
    e || i(w), c(w);
  }, x = Nl(e ? a : o).toLowerCase();
  return m.length < 4 ? /* @__PURE__ */ l("div", { className: "flex items-center rounded-md", children: A(m, (w) => /* @__PURE__ */ un(
    Wa,
    {
      canvas: e,
      ...w,
      onClick: y,
      key: w.breakpoint,
      currentBreakpoint: x,
      activeButtonClass: "bg-gray-700"
    }
  )) }) : /* @__PURE__ */ b("div", { className: "flex w-full items-center justify-between rounded-md", children: [
    /* @__PURE__ */ l("div", { className: "flex items-center", children: A(
      m.filter((w) => Be(p, qo(w.breakpoint))),
      (w) => /* @__PURE__ */ un(
        Wa,
        {
          canvas: e,
          openDelay: t,
          tooltip: n,
          ...w,
          onClick: y,
          key: w.breakpoint,
          currentBreakpoint: x,
          buttonClass: r,
          activeButtonClass: s
        }
      )
    ) }),
    /* @__PURE__ */ b(kn, { children: [
      /* @__PURE__ */ l(Cn, { asChild: !0, children: /* @__PURE__ */ l("span", { className: "cursor-pointer rounded-md p-1 hover:bg-background", children: /* @__PURE__ */ l(xn, { className: "scale-90 transform" }) }) }),
      /* @__PURE__ */ b(Ft, { className: "w-56 border-border text-xs", children: [
        /* @__PURE__ */ l(Ll, { children: h("Screen sizes") }),
        /* @__PURE__ */ l(Pl, {}),
        A(m, (w) => /* @__PURE__ */ l(
          Rl,
          {
            disabled: w.breakpoint === "xs",
            onCheckedChange: () => g(qo(w.breakpoint)),
            checked: Be(p, qo(w.breakpoint)),
            onSelect: (S) => S.preventDefault(),
            children: h(w.title)
          },
          w.breakpoint
        ))
      ] })
    ] })
  ] });
};
function R0() {
  const [, t] = bo(), { t: e } = K(), n = M(() => {
    const r = Ps.find((s) => s.breakpoint === t);
    return (r == null ? void 0 : r.content) ?? "";
  }, [t, Ps]);
  return /* @__PURE__ */ b(Q, { children: [
    /* @__PURE__ */ b("div", { className: "sticky top-0 z-10 flex items-center justify-start bg-muted px-2 py-1 shadow-sm", children: [
      /* @__PURE__ */ b("p", { className: "text-xs text-muted-foreground", children: [
        e("Screen"),
        " "
      ] }),
      /* @__PURE__ */ l(I0, { openDelay: 1e3, tooltip: !1 })
    ] }),
    /* @__PURE__ */ l("div", { className: "mb-2 flex items-center justify-between rounded-md rounded-t-none border border-border p-1", children: /* @__PURE__ */ l("p", { className: "flex flex-1 items-center space-x-2 text-[10px] text-foreground", children: /* @__PURE__ */ b("span", { className: "text-xs text-foreground", children: [
      /* @__PURE__ */ l("span", { className: "rounded-md bg-muted px-1 py-px text-xs font-bold uppercase text-muted-foreground", children: t === "xs" ? "Base" : t }),
      "  ",
      e(n)
    ] }) }) })
  ] });
}
const Xd = ({ className: t = "" }) => /* @__PURE__ */ l(Pp, { className: t });
function qd({
  from: t = "default",
  classFromProps: e,
  onAddNew: n,
  onRemove: r,
  showDesignTokenSuggestions: s = !0
}) {
  var Xn;
  const o = ne(null), [i, a] = $(""), [c, d] = $(!1), [u, p] = $(-1), f = ne(!1), h = s0(), { t: m } = K(), [g] = Fe(), y = ae(), x = Jd(), w = $i(), [S] = oe(), [v, k] = $(""), T = Ue(Er), C = (Xn = ye(g)) == null ? void 0 : Xn.prop, { classes: N } = vn(_(y, C, "")), I = (t === "default" ? N : e ?? "").split(" ").filter((U) => !F(U)), L = M(() => [...I].sort((U, pe) => {
    const Oe = U.startsWith(Mr), Tt = pe.startsWith(Mr);
    return Oe && !Tt ? -1 : !Oe && Tt ? 1 : 0;
  }), [I]), R = G("flags.copyPaste", !0), V = (U) => {
    const pe = U.startsWith(Mr), Oe = /* @__PURE__ */ l("div", { className: "group relative flex max-w-[260px] items-center", children: /* @__PURE__ */ b(
      "button",
      {
        onDoubleClick: () => {
          k(J(U)), t === "default" ? w(S, [U], !0) : (Zt(r) && r(U), k(U)), setTimeout(() => {
            o.current && o.current.focus();
          }, 10);
        },
        className: "flex h-max cursor-default items-center gap-x-1 truncate break-words rounded bg-gray-200 py-px pl-0.5 pr-1 text-[11px] text-gray-600 dark:bg-gray-800 dark:text-gray-300",
        children: [
          /* @__PURE__ */ b("div", { className: "z-10 flex h-full w-max items-center justify-center", children: [
            /* @__PURE__ */ l(
              No,
              {
                onClick: () => {
                  t === "default" ? w(S, [U], !0) : Zt(r) && r(U);
                },
                className: "hidden h-max w-3.5 cursor-pointer rounded bg-gray-100 p-0.5 text-red-500 hover:bg-gray-50 group-hover:block"
              }
            ),
            /* @__PURE__ */ b(
              "svg",
              {
                className: "h-3.5 w-3.5 group-hover:hidden",
                fill: "rgba(55, 65, 81, 0.4)",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                xmlSpace: "preserve",
                children: [
                  /* @__PURE__ */ l("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
                  /* @__PURE__ */ l("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }),
                  /* @__PURE__ */ l("g", { id: "SVGRepo_iconCarrier", children: /* @__PURE__ */ l(
                    "path",
                    {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"
                    }
                  ) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { children: J(U) })
        ]
      }
    ) }, U);
    return pe && T[U] ? /* @__PURE__ */ b(Ne, { delayDuration: 200, children: [
      /* @__PURE__ */ l(Se, { asChild: !0, children: Oe }),
      /* @__PURE__ */ l(be, { side: "bottom", className: "max-w-[300px]", children: /* @__PURE__ */ l("p", { className: "font-light", children: T[U].value }) })
    ] }, U) : Oe;
  }, J = (U) => {
    if (U.startsWith(Mr)) {
      const pe = T[U];
      return pe ? pe.name : U;
    }
    return U;
  }, q = (U) => {
    const pe = Object.entries(T).find(([, Oe]) => Oe.name === U);
    return pe ? `${pe[0]}` : U;
  }, ve = () => {
    const U = v.trim().replace(/ +(?= )/g, "").split(" ").map(q);
    t === "designToken" ? Zt(n) && n(U) : x(S, U, !0), k("");
  }, [we, fe] = $([]), ze = G("flags.designTokens", !0), Y = ({ value: U }) => {
    const pe = U.trim().toLowerCase(), Oe = pe.match(/.+:/g);
    let Tt = [], Yo = [];
    if (ze && s && (pe === "" ? Yo = Object.entries(T).map(([Ht, qn]) => ({
      name: qn.name,
      id: `${Ht}`,
      isDesignToken: !0
    })) : Yo = Object.entries(T).filter(([, Ht]) => Ht.name.toLowerCase().includes(pe)).map(([Ht, qn]) => ({
      name: qn.name,
      id: `${Ht}`,
      isDesignToken: !0
    }))), Oe && Oe.length > 0) {
      const [Ht] = Oe, qn = pe.replace(Ht, "");
      Tt = h.search(qn).map((Xo) => ({
        ...Xo,
        item: { ...Xo.item, name: Ht + Xo.item.name }
      }));
    } else
      Tt = h.search(pe);
    const Iu = [...Yo, ...A(Tt, "item")];
    return fe(Iu);
  }, Te = () => {
    fe([]);
  }, ut = (U) => U.name, Tn = (U) => /* @__PURE__ */ b("div", { className: "flex items-center gap-2 rounded-md p-1", children: [
    U.isDesignToken && /* @__PURE__ */ l(Xd, { className: "h-4 w-4 text-gray-600" }),
    /* @__PURE__ */ l("span", { children: U.name })
  ] }), Bn = M(
    () => ({
      ref: o,
      autoComplete: "off",
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: !1,
      placeholder: `${m(s ? "Enter classes separated by space or design tokens" : "Enter classes separated by space")}`,
      value: v,
      onFocus: (U) => {
        setTimeout(() => {
          U.target && U.target.select();
        }, 0);
      },
      onKeyDown: (U) => {
        if (U.key === "Enter" && v.trim() !== "") {
          if (f.current) {
            f.current = !1;
            return;
          }
          U.preventDefault(), ve();
        }
        if (U.key === "Tab" && we.length > 0) {
          U.preventDefault();
          const pe = new KeyboardEvent("keydown", {
            key: "ArrowDown",
            code: "ArrowDown",
            keyCode: 40,
            bubbles: !0
          });
          U.target.dispatchEvent(pe);
        }
      },
      onChange: (U, { newValue: pe }) => k(pe),
      className: `w-full rounded-md text-xs px-2 hover:outline-0 bg-background border-border ${t === "default" ? "py-1" : "py-1.5"}`
    }),
    [v, m, o, we.length]
  ), zt = (U) => {
    const pe = i.trim().replace(/ +(?= )/g, "").split(" ").map(q);
    w(S, [U], !0), x(S, pe, !0), a(""), p(-1);
  }, Ui = () => {
    if (navigator.clipboard === void 0) {
      Ce.error(m("Clipboard not supported"));
      return;
    }
    navigator.clipboard.writeText(I.join(" ")), Ce.success(m("Classes copied to clipboard")), d(!0), setTimeout(() => d(!1), 2e3);
  };
  return /* @__PURE__ */ b(
    "div",
    {
      className: `flex w-full flex-col gap-y-1.5 pb-4 ${t === "designToken" ? "border-none" : "border-b border-border"}`,
      children: [
        /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-x-2", children: /* @__PURE__ */ l("div", { className: "flex w-full items-center justify-between gap-x-2 text-muted-foreground", children: /* @__PURE__ */ b("span", { className: "flex items-center gap-x-1", children: [
          /* @__PURE__ */ l("span", { children: m("Classes") }),
          R && /* @__PURE__ */ b(Ne, { children: [
            /* @__PURE__ */ l(Se, { asChild: !0, children: c ? /* @__PURE__ */ l(Nr, { className: "rounded-full border border-green-500 bg-green-500/10 text-green-500" }) : /* @__PURE__ */ l(zs, { onClick: Ui, className: "cursor-pointer" }) }),
            /* @__PURE__ */ l(be, { children: /* @__PURE__ */ l("p", { children: m("Copy classes to clipboard") }) })
          ] })
        ] }) }) }),
        /* @__PURE__ */ b("div", { className: "relative flex items-center gap-x-3", children: [
          /* @__PURE__ */ l("div", { className: "relative flex w-full items-center gap-x-3", children: /* @__PURE__ */ l(
            Bf,
            {
              suggestions: we,
              onSuggestionsFetchRequested: Y,
              onSuggestionsClearRequested: Te,
              getSuggestionValue: ut,
              renderSuggestion: Tn,
              inputProps: Bn,
              onSuggestionSelected: (U, { suggestionValue: pe }) => {
                f.current = !0;
                const Tt = [q(pe)];
                t === "designToken" ? Zt(n) && n(Tt) : x(S, Tt, !0), k("");
              },
              containerProps: {
                className: "relative h-8 w-full gap-y-1 py-1 border-border text-xs"
              },
              theme: {
                suggestion: "bg-transparent",
                suggestionHighlighted: "!bg-gray-300 dark:!bg-gray-800 cursor-pointer",
                suggestionsContainerOpen: "absolute bg-background no-scrollbar z-50 max-h-[230px] overflow-y-auto w-full  border border-border rounded-md"
              }
            }
          ) }),
          /* @__PURE__ */ l(
            re,
            {
              variant: "outline",
              className: `border-border ${t === "default" ? "h-6" : "mt-1 h-7"}`,
              onClick: ve,
              disabled: v.trim() === "",
              size: "sm",
              children: /* @__PURE__ */ l(qe, {})
            }
          )
        ] }),
        /* @__PURE__ */ l("div", { className: "flex w-full flex-wrap gap-2 overflow-x-hidden", children: L.map(
          (U, pe) => u === pe ? /* @__PURE__ */ l(
            "input",
            {
              ref: o,
              value: i,
              onChange: (Oe) => a(Oe.target.value),
              onBlur: () => {
                zt(U);
              },
              onKeyDown: (Oe) => {
                Oe.key === "Enter" && zt(U);
              },
              onFocus: (Oe) => {
                setTimeout(() => {
                  Oe.target.select();
                }, 0);
              },
              className: "group relative flex max-w-[260px] cursor-default items-center gap-x-1 truncate break-words rounded border border-border bg-gray-200 p-px px-1.5 pr-2 text-[11px] text-gray-600 hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
            },
            U
          ) : V(U)
        ) })
      ]
    }
  );
}
const Me = ["px", "%", "em", "rem", "ch", "vh", "vw"], L0 = {
  heading: "flex.heading",
  items: [
    { type: "arbitrary", label: "flex.basis", units: Me, property: "flexBasis" },
    { type: "range", label: "flex.order", property: "order" },
    { type: "dropdown", label: "flex.flex", property: "flexGrowShrink" },
    { type: "dropdown", label: "flex.grow", property: "flexGrow" },
    { type: "dropdown", label: "flex.shrink", property: "flexShrink" }
  ]
}, P0 = {
  heading: "grid.heading",
  items: [
    { type: "range", label: "grid.col_span", property: "gridColSpan" },
    { type: "range", label: "grid.col_start", property: "gridColStart" },
    { type: "range", label: "grid.col_end", property: "gridColEnd" },
    { type: "range", label: "grid.row_span", property: "gridRowSpan" },
    { type: "range", label: "grid.row_start", property: "gridRowStart" },
    { type: "range", label: "grid.row_end", property: "gridRowEnd" },
    { type: "range", label: "grid.order", property: "order" }
  ]
}, O0 = [
  {
    heading: "Styles",
    items: [
      { component: qd },
      { component: R0 },
      { type: "arbitrary", label: "layout.width", units: Me.concat("auto"), property: "width" },
      { type: "arbitrary", label: "layout.height", units: Me.concat("auto"), property: "height" },
      {
        styleType: "multiple",
        label: "layout.margin",
        negative: !0,
        units: [...Me, "auto"],
        options: [
          { key: "margin", label: "layout.margin_all" },
          { key: "marginX", label: "layout.margin_lr" },
          { key: "marginY", label: "layout.margin_tb" },
          { key: "marginTop", label: "layout.margin_top" },
          { key: "marginRight", label: "layout.margin_right" },
          { key: "marginBottom", label: "layout.margin_bottom" },
          { key: "marginLeft", label: "layout.margin_left" }
        ]
      },
      {
        styleType: "multiple",
        label: "layout.padding",
        options: [
          { key: "padding", label: "layout.padding_all" },
          { key: "paddingX", label: "layout.padding_lr" },
          { key: "paddingY", label: "layout.padding_tb" },
          { key: "paddingTop", label: "layout.padding_top" },
          { key: "paddingRight", label: "layout.padding_right" },
          { key: "paddingBottom", label: "layout.padding_bottom" },
          { key: "paddingLeft", label: "layout.padding_left" }
        ]
      },
      {
        styleType: "accordion",
        heading: "typography.heading",
        items: [
          { type: "dropdown", property: "textAlign", label: "typography.align" },
          { type: "dropdown", property: "fontFamily", label: "typography.font" },
          { type: "arbitrary", property: "fontSize", label: "typography.size", units: Me },
          { type: "arbitrary", property: "lineHeight", label: "typography.height", units: Me.concat("-") },
          { type: "range", property: "fontWeight", label: "typography.weight" },
          { type: "color", property: "textColor", label: "typography.color" }
        ]
      },
      {
        styleType: "accordion",
        heading: "background.heading",
        items: [
          { type: "color", label: "background.bgcolor", property: "backgroundColor" },
          { type: "dropdown", label: "background.attachment", property: "backgroundAttachment" },
          { type: "dropdown", label: "background.clipping", property: "backgroundClip" },
          { type: "dropdown", label: "background.origin", property: "backgroundOrigin" },
          { type: "dropdown", label: "background.position", property: "backgroundPosition" },
          { type: "dropdown", label: "background.repeat", property: "backgroundRepeat" },
          { type: "dropdown", label: "background.size", property: "backgroundSize" }
        ]
      }
    ]
  }
];
Me.concat("auto"), Me.concat("auto"), [...Me], Me.concat("auto"), Me.concat("auto"), Me.concat("auto"), Me.concat("auto"), Me.concat("-");
const D0 = {
  px: 1,
  "%": 1,
  em: 100,
  rem: 100,
  ch: 1,
  vw: 1,
  vh: 1,
  "-": 1,
  deg: 1,
  ms: 0.1
};
function Ga() {
  const { flexChild: t, gridChild: e } = eh(), [n] = Fe(), [r, s] = te.useState(""), [o, i] = te.useState({
    onDrag: (d) => d,
    onDragEnd: (d) => d,
    dragStartY: 0,
    dragging: !1,
    dragStartValue: 0,
    dragUnit: "",
    negative: !1,
    cssProperty: ""
  }), a = pn(
    (d) => {
      const u = !_(o, "negative", !1), p = _(o, "cssProperty", "");
      let f = parseFloat(o.dragStartValue);
      f = isNaN(f) ? 0 : f;
      let h = D0[o.dragUnit];
      (Re(p, "scale") || p === "opacity") && (h = 10);
      let g = (o.dragStartY - d.pageY) / h + f;
      u && g < 0 && (g = 0), p === "opacity" && g > 1 && (g = 1), o.onDrag(`${g}`), s(`${g}`);
    },
    [o],
    50
  ), c = B(() => {
    setTimeout(() => o.onDragEnd(`${r}`), 100), i({
      onDrag: (d) => d,
      onDragEnd: (d) => d,
      dragStartY: 0,
      dragging: !1,
      dragStartValue: 0,
      dragUnit: "",
      negative: !1,
      cssProperty: ""
    });
  }, [o, r, i]);
  return F(n) ? null : /* @__PURE__ */ b(Gd.Provider, { value: { setDragData: i }, children: [
    o.dragging ? /* @__PURE__ */ l(
      "div",
      {
        onMouseMove: a,
        onMouseUp: () => c(),
        className: "absolute inset-0 z-30 cursor-row-resize bg-gray-300/10"
      }
    ) : null,
    /* @__PURE__ */ b("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ l(Gx, {}),
      /* @__PURE__ */ b(Hx, { defaultValue: ["Styles"], type: "multiple", className: "w-full", children: [
        t && /* @__PURE__ */ l(hs, { section: L0, showAccordian: t || e }),
        e && /* @__PURE__ */ l(hs, { section: P0, showAccordian: t || e }),
        O0.map((d) => /* @__PURE__ */ l(hs, { section: d, showAccordian: t || e }, d.heading))
      ] })
    ] })
  ] });
}
const xo = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ b(sn.Root, { ref: r, className: j("relative overflow-hidden", t), ...n, children: [
  /* @__PURE__ */ l(sn.Viewport, { className: "h-full w-full rounded-[inherit]", children: e }),
  /* @__PURE__ */ l(Zd, {}),
  /* @__PURE__ */ l(sn.Corner, {})
] }));
xo.displayName = sn.Root.displayName;
const Zd = W.forwardRef(({ className: t, orientation: e = "vertical", ...n }, r) => /* @__PURE__ */ l(
  sn.ScrollAreaScrollbar,
  {
    ref: r,
    orientation: e,
    className: j(
      "flex touch-none select-none transition-colors",
      e === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      e === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      t
    ),
    ...n,
    children: /* @__PURE__ */ l(sn.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Zd.displayName = sn.ScrollAreaScrollbar.displayName;
const zi = wn.Root, Wo = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  wn.List,
  {
    ref: n,
    className: j(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      t
    ),
    ...e
  }
));
Wo.displayName = wn.List.displayName;
const lt = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  wn.Trigger,
  {
    ref: n,
    className: j(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      t
    ),
    ...e
  }
));
lt.displayName = wn.Trigger.displayName;
const jt = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  wn.Content,
  {
    ref: n,
    className: j(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t
    ),
    ...e
  }
));
jt.displayName = wn.Content.displayName;
const M0 = ({
  block: t,
  disabled: e,
  parentId: n,
  position: r
}) => {
  const { type: s, icon: o, label: i, disabledReason: a } = t, c = e || t.disabled, { addCoreBlock: d, addPredefinedBlock: u } = Nn(), p = () => {
    if (le(t, "blocks")) {
      const y = Zt(t.blocks) ? t.blocks() : t.blocks;
      u(Eo(y), n || null, r);
    } else
      d(t, n || null, r);
    me.publish(se.CLOSE_ADD_BLOCK);
  }, f = bt(), { t: h } = K(), { onDragStart: m, onDragEnd: g } = Jn();
  return /* @__PURE__ */ l(Q, { children: /* @__PURE__ */ b(Ne, { children: [
    /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ b(
      "button",
      {
        disabled: c,
        onClick: p,
        type: "button",
        onDragStart: (y) => !c && m(y, { ...t, label: i, icon: o }),
        onDragEnd: g,
        draggable: f && !c,
        className: `${rl(`chai-block-${s}`)} ${f && !c ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"} space-y-2 rounded-lg border border-border p-3 text-center hover:bg-slate-300/50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 dark:border-gray-700 dark:text-white dark:hover:bg-slate-800/50 dark:disabled:bg-gray-900 dark:disabled:text-foreground ${c ? "opacity-50" : ""}`,
        children: [
          un(o || So, { className: "w-4 h-4 mx-auto", "data-add-core-block-icon": s }),
          /* @__PURE__ */ l("p", { className: "truncate text-xs", children: $n(h(i || s)) })
        ]
      }
    ) }),
    /* @__PURE__ */ l(be, { children: /* @__PURE__ */ l("p", { children: c && a ? a : h(i || s) }) })
  ] }) });
}, $0 = ({
  parentId: t,
  position: e,
  gridCols: n = "grid-cols-2",
  disableBlockGroupsSidebar: r = !1
}) => {
  const s = Gs(), o = ol(s, "category"), i = Ds(A(o.core, "group"));
  return /* @__PURE__ */ l(
    au,
    {
      gridCols: n,
      parentId: t,
      position: e,
      groups: i,
      blocks: o.core,
      disableBlockGroupsSidebar: r
    }
  );
}, Qd = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l("div", { ref: n, className: j("rounded-xl border bg-card text-card-foreground shadow", t), ...e }));
Qd.displayName = "Card";
const eu = W.forwardRef(
  ({ className: t, ...e }, n) => /* @__PURE__ */ l("div", { ref: n, className: j("flex flex-col space-y-1.5 p-6", t), ...e })
);
eu.displayName = "CardHeader";
const F0 = W.forwardRef(
  ({ className: t, ...e }, n) => /* @__PURE__ */ l("div", { ref: n, className: j("font-semibold leading-none tracking-tight", t), ...e })
);
F0.displayName = "CardTitle";
const tu = W.forwardRef(
  ({ className: t, ...e }, n) => /* @__PURE__ */ l("div", { ref: n, className: j("text-sm text-muted-foreground", t), ...e })
);
tu.displayName = "CardDescription";
const nu = W.forwardRef(
  ({ className: t, ...e }, n) => /* @__PURE__ */ l("div", { ref: n, className: j("p-6 pt-0", t), ...e })
);
nu.displayName = "CardContent";
const ru = W.forwardRef(
  ({ className: t, ...e }, n) => /* @__PURE__ */ l("div", { ref: n, className: j("flex items-center p-6 pt-0", t), ...e })
);
ru.displayName = "CardFooter";
const z0 = Us(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), bn = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  Bl.Root,
  {
    ref: n,
    className: j(z0(), t),
    ...e
  }
));
bn.displayName = Bl.Root.displayName;
const Go = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  "textarea",
  {
    className: j(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      t
    ),
    ref: n,
    ...e
  }
));
Go.displayName = "Textarea";
const H0 = ({
  parentId: t,
  position: e,
  fromSidebar: n
}) => {
  const { t: r } = K(), [s, o] = $(""), { addPredefinedBlock: i } = Nn(), [a, c] = $(!1), d = async () => {
    c(!0);
    const u = await Qu(s), p = fr(u);
    i([...p], t, e), o(""), c(!1), me.publish(se.CLOSE_ADD_BLOCK);
  };
  return /* @__PURE__ */ b(Qd, { className: `border-border/0 p-0 shadow-none ${n ? "w-full" : "max-w-full"}`, children: [
    /* @__PURE__ */ l(eu, { className: n ? "p-0" : "p-3", children: /* @__PURE__ */ l(tu, { className: n ? "text-xs" : "", children: r("Use HTML snippets from Tailwind CSS component libraries") }) }),
    /* @__PURE__ */ l(nu, { className: `space-y-2 py-0 ${n ? "p-0" : "px-3"}`, children: /* @__PURE__ */ b("div", { className: "space-y-1", children: [
      /* @__PURE__ */ l(bn, { htmlFor: "current", className: "text-sm", children: r("Tailwind HTML snippet") }),
      /* @__PURE__ */ l(
        Go,
        {
          onChange: (u) => o(u.target.value),
          rows: 12,
          value: s,
          placeholder: r("Enter your code snippet here"),
          className: "resize-none overflow-x-auto whitespace-pre bg-background font-mono text-xs font-normal"
        }
      )
    ] }) }),
    /* @__PURE__ */ l(ru, { className: "flex flex-col justify-end p-3", children: /* @__PURE__ */ l(re, { disabled: s.trim() === "" || a, onClick: () => d(), size: "sm", className: "w-fit", children: a ? /* @__PURE__ */ b(Q, { children: [
      /* @__PURE__ */ l(cl, { className: "mr-2 h-4 w-4 animate-spin" }),
      " ",
      r("Importing...")
    ] }) : r("Import HTML") }) })
  ] });
}, Hi = _e.Root, Vi = _e.Value, Uo = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ b(
  _e.Trigger,
  {
    ref: r,
    className: j(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-muted-foreground [&>span]:line-clamp-1",
      t
    ),
    ...n,
    children: [
      e,
      /* @__PURE__ */ l(_e.Icon, { asChild: !0, children: /* @__PURE__ */ l(xn, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Uo.displayName = _e.Trigger.displayName;
const ou = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  _e.ScrollUpButton,
  {
    ref: n,
    className: j("flex cursor-default items-center justify-center py-1", t),
    ...e,
    children: /* @__PURE__ */ l(Op, { className: "h-4 w-4" })
  }
));
ou.displayName = _e.ScrollUpButton.displayName;
const su = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  _e.ScrollDownButton,
  {
    ref: n,
    className: j("flex cursor-default items-center justify-center py-1", t),
    ...e,
    children: /* @__PURE__ */ l(xn, { className: "h-4 w-4" })
  }
));
su.displayName = _e.ScrollDownButton.displayName;
const Ko = W.forwardRef(({ className: t, children: e, position: n = "popper", ...r }, s) => /* @__PURE__ */ l(_e.Portal, { children: /* @__PURE__ */ b(
  _e.Content,
  {
    ref: s,
    className: j(
      "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] origin-[--radix-select-content-transform-origin] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      t
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ l(ou, {}),
      /* @__PURE__ */ l(
        _e.Viewport,
        {
          className: j(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: e
        }
      ),
      /* @__PURE__ */ l(su, {})
    ]
  }
) }));
Ko.displayName = _e.Content.displayName;
const V0 = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(_e.Label, { ref: n, className: j("px-2 py-1.5 text-sm font-semibold", t), ...e }));
V0.displayName = _e.Label.displayName;
const Jo = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ b(
  _e.Item,
  {
    ref: r,
    className: j(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...n,
    children: [
      /* @__PURE__ */ l("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l(_e.ItemIndicator, { children: /* @__PURE__ */ l(Nr, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ l(_e.ItemText, { children: e })
    ]
  }
));
Jo.displayName = _e.Item.displayName;
const j0 = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(_e.Separator, { ref: n, className: j("-mx-1 my-1 h-px bg-muted", t), ...e }));
j0.displayName = _e.Separator.displayName;
const W0 = ({
  defaultValue: t = "",
  onValueChange: e,
  options: n,
  placeholder: r = "Select",
  className: s = "",
  height: o = ""
}) => {
  const [i, a] = $(t), c = (d) => {
    const u = d.target.value;
    a(u), e(u);
  };
  return /* @__PURE__ */ l("div", { className: Ze("relative inline-block w-full", s), children: /* @__PURE__ */ b(
    "select",
    {
      className: Ze(
        "mt-1 flex w-full rounded-md border border-border bg-background px-3 py-1 text-sm text-foreground shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        o
      ),
      value: i,
      onChange: c,
      children: [
        /* @__PURE__ */ l("option", { value: "", disabled: !0, children: r }),
        n.map((d) => /* @__PURE__ */ l("option", { value: d.value, children: d.label }, d.value))
      ]
    }
  ) });
};
function G0({
  uiLibraries: t,
  library: e,
  setLibrary: n
}) {
  const { t: r } = K();
  return e ? /* @__PURE__ */ b("div", { className: "h-12", children: [
    /* @__PURE__ */ l("p", { className: "text-xs font-bold text-gray-500", children: r("Choose library") }),
    /* @__PURE__ */ l(
      W0,
      {
        className: "mb-1",
        options: t.map((s) => ({
          value: s.id,
          label: s.name
        })),
        defaultValue: e,
        onValueChange: (s) => n(s)
      }
    )
  ] }) : null;
}
const U0 = P({}), K0 = (t) => {
  const [e, n] = D(U0), r = M(() => (t == null ? void 0 : t.getBlocksList) || (() => []), [t]), s = _(e, `${t == null ? void 0 : t.id}.blocks`, null), o = _(e, `${t == null ? void 0 : t.id}.loading`, "idle"), i = _(e, `${t == null ? void 0 : t.id}.error`, !1), a = ne("idle");
  z(() => {
    (async () => {
      if (t && !(o === "complete" || a.current === "loading")) {
        a.current = "loading", n((d) => ({ ...d, [t == null ? void 0 : t.id]: { loading: "loading", blocks: [], error: !1 } }));
        try {
          const d = await r(t);
          a.current = "idle", n((u) => ({
            ...u,
            [t == null ? void 0 : t.id]: { loading: "complete", blocks: d || [], error: !1 }
          }));
        } catch {
          a.current = "idle", n((d) => ({ ...d, [t == null ? void 0 : t.id]: { loading: "complete", blocks: [], error: !0 } }));
        }
      }
    })();
  }, [t, s, o, a, n, r]);
  const c = B(
    (d) => {
      n((u) => ({ ...u, [d]: { loading: "idle", blocks: [], error: !1 } }));
    },
    [n]
  );
  return { data: s || [], isLoading: o === "loading", isError: i, resetLibrary: c };
}, J0 = () => D(hi), Y0 = ({
  block: t,
  html: e,
  blocks: n,
  children: r,
  onDragStart: s,
  onDragEnd: o,
  draggable: i,
  className: a = "",
  type: c = "Box"
}) => {
  const { onDragStart: d, onDragEnd: u } = Jn(), p = bt(), [, f] = oe(), { clearHighlight: h } = At(), m = i !== void 0 ? i : p;
  return /* @__PURE__ */ l(
    "div",
    {
      draggable: m,
      onDragStart: async (x) => {
        try {
          if (s) {
            s(x);
            return;
          }
          let w = null;
          if (c === "Image") {
            if (!(t != null && t.image)) return;
            w = {
              type: "Image",
              blocks: [
                {
                  _type: "Image",
                  styles: "#styles:,w-full h-full object-cover",
                  image: t == null ? void 0 : t.image,
                  alt: (t == null ? void 0 : t.alt) || "",
                  _name: (t == null ? void 0 : t.name) || "Image"
                }
              ]
            };
          } else if (e) {
            const S = typeof e == "function" ? await e() : e, v = fr(S);
            if (F(v)) return;
            w = {
              type: "Box",
              blocks: v,
              name: _(v, "0._type", "Block")
            };
          } else if (n) {
            const S = typeof n == "function" ? await n() : n;
            if (F(S)) return;
            w = {
              type: "Box",
              blocks: S,
              name: _(S, "0._type", "Block")
            };
          } else if (t) {
            const S = typeof t == "function" ? await t() : t;
            w = typeof S == "object" ? vr(S, ["component", "icon"]) : S;
          }
          if (!w) return;
          d(x, w, !0), setTimeout(() => {
            f([]), h();
          }, 200);
        } catch (w) {
          console.error("Error in ChaiDraggableBlock drag start:", w);
        }
      },
      onDragEnd: (x) => {
        o ? o(x) : u();
      },
      className: `${m ? "cursor-grab active:cursor-grabbing" : ""} ${a}`.trim(),
      children: r
    }
  );
};
function iu({ value: t, setValue: e }) {
  const { t: n } = K();
  return /* @__PURE__ */ l("div", { className: "flex py-2", children: /* @__PURE__ */ b("div", { className: "relative flex w-full max-w-md items-center rounded border px-2", children: [
    /* @__PURE__ */ b("div", { className: "flex w-full items-center gap-x-2", children: [
      /* @__PURE__ */ l(fl, { className: "h-5 w-5 flex-shrink-0 stroke-[1px] text-muted-foreground" }),
      /* @__PURE__ */ l(
        Cr,
        {
          placeholder: n("Search blocks..."),
          value: t,
          onChange: (r) => e(r.target.value),
          className: "w-full flex-1 border-none p-0 leading-tight outline-none"
        }
      )
    ] }),
    t && /* @__PURE__ */ l(
      "button",
      {
        onClick: () => e(""),
        className: "absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground",
        children: /* @__PURE__ */ l(at, { className: "h-3.5 w-3.5" })
      }
    )
  ] }) });
}
const Ua = ({
  block: t,
  library: e,
  parentId: n = void 0,
  position: r = -1
}) => {
  const [s, o] = $(!1), i = M(() => (e == null ? void 0 : e.getBlock) || (() => []), [e]), { addCoreBlock: a, addPredefinedBlock: c } = Nn(), d = _(t, "name", _(t, "label")), u = _(t, "description", ""), { onDragStart: p, onDragEnd: f } = Jn(), h = bt(), m = B(
    async (y) => {
      if (y.stopPropagation(), le(t, "component")) {
        a(t, n, r), me.publish(se.CLOSE_ADD_BLOCK);
        return;
      }
      o(!0);
      let x = await i({ library: e, block: t });
      typeof x == "string" && (x = fr(x)), F(x) || c(Eo(x), n, r), me.publish(se.CLOSE_ADD_BLOCK), setTimeout(() => o(!1), 1e3);
    },
    [a, c, t, i, e, n, r]
  );
  return /* @__PURE__ */ b(Ne, { children: [
    /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(Y0, { draggable: h, onDragStart: async (y) => {
      if (!h) return;
      let x = await i({ library: e, block: t });
      typeof x == "string" && (x = fr(x)), p(y, { type: "Box", blocks: x, name: d }, !0);
    }, onDragEnd: f, children: /* @__PURE__ */ b(
      "div",
      {
        onClick: s ? () => {
        } : m,
        className: wf(
          "relative mt-2 overflow-hidden rounded-md border border-border duration-200 hover:border-blue-500 hover:shadow-xl",
          h ? "" : "cursor-pointer"
        ),
        children: [
          s && /* @__PURE__ */ b("div", { className: "absolute flex h-full w-full items-center justify-center bg-black/70", children: [
            /* @__PURE__ */ l(Vs, { className: "h-4 w-4 animate-spin text-white" }),
            /* @__PURE__ */ l("span", { className: "pl-2 text-sm text-white", children: "Adding..." })
          ] }),
          t.preview ? /* @__PURE__ */ l("img", { src: t.preview, className: "min-h-[45px] w-full rounded-md", alt: d }) : /* @__PURE__ */ b("div", { className: "flex h-fit w-full flex-col items-center justify-center gap-1 rounded-md border border-border p-6 py-10 text-center", children: [
            /* @__PURE__ */ l("p", { className: "font-medium text-gray-800", children: d }),
            u && /* @__PURE__ */ l("p", { className: "text-sm text-gray-600", children: u })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ l(be, { children: /* @__PURE__ */ l("div", { className: "max-w-xs", children: /* @__PURE__ */ l("p", { className: "font-medium", children: d }) }) })
  ] });
}, X0 = ({
  parentId: t,
  position: e,
  fromSidebar: n
}) => {
  const [r, s] = J0(), o = il(), i = o.find((R) => R.id === r) || ye(o), { data: a, isLoading: c, isError: d, resetLibrary: u } = K0(i), [p, f] = $(""), [h, m] = $([]), g = ne(null);
  z(() => {
    a && Array.isArray(a) && a.length > 0 && (g.current = new Tl(a, {
      keys: ["name", "label", "description", "group"],
      threshold: 0.4,
      ignoreLocation: !0
    }));
  }, [a]), z(() => {
    if (!p.trim() || !g.current) {
      m([]);
      return;
    }
    const R = g.current.search(p).map((V) => V.item);
    m(R);
  }, [p]);
  const y = p.trim() && !F(h) ? h : a || [], x = ol(y, "group"), [w, S] = $(null);
  z(() => {
    if (F(kt(x))) {
      S(null);
      return;
    }
    if (!w || !x[w]) {
      S(ye(kt(x)) || null);
      return;
    }
  }, [x, w]);
  const v = _(x, w || "", []), k = ne(null), { t: T } = K(), C = ne(null);
  z(() => {
    var V;
    const R = (V = C.current) == null ? void 0 : V.querySelector("[data-radix-scroll-area-viewport]");
    R && R.scrollTo({ top: 0, behavior: "smooth" });
  }, [i, w]);
  const N = (R) => {
    k.current && (clearTimeout(k.current), k.current = null), k.current = setTimeout(() => {
      k.current && S(R);
    }, 400);
  }, E = () => {
    i != null && i.id && u(i.id);
  };
  if (c)
    return /* @__PURE__ */ b("div", { className: "mt-4 grid h-full w-full grid-cols-12 gap-2", children: [
      /* @__PURE__ */ l(zn, { className: "col-span-3 h-full" }),
      /* @__PURE__ */ l(zn, { className: "col-span-9 h-full" })
    ] });
  const I = Z(v, (R, V) => V % 2 === 0), L = Z(v, (R, V) => V % 2 === 1);
  return /* @__PURE__ */ l(Q, { children: /* @__PURE__ */ b("div", { className: "flex h-full max-h-full flex-col", children: [
    /* @__PURE__ */ l(iu, { value: p, setValue: f }),
    /* @__PURE__ */ l("div", { className: "relative flex h-full max-h-full flex-1 overflow-hidden bg-background", children: /* @__PURE__ */ b("div", { className: `flex h-full flex-1 pt-2 ${n ? "flex-col" : ""}`, children: [
      /* @__PURE__ */ b(
        "div",
        {
          className: `flex max-h-full min-w-60 flex-col gap-1 ${n ? "pb-2" : "w-60 max-w-60 px-1 pr-2"}`,
          children: [
            /* @__PURE__ */ l(G0, { library: i == null ? void 0 : i.id, setLibrary: s, uiLibraries: o }),
            /* @__PURE__ */ b("div", { className: "mt-2 flex h-full max-h-full w-full flex-1 flex-col", children: [
              /* @__PURE__ */ l("span", { className: "text-xs font-bold text-gray-500", children: T("Groups") }),
              !n && /* @__PURE__ */ l("hr", { className: "mt-1 border-border" }),
              /* @__PURE__ */ l(
                "div",
                {
                  className: `no-scrollbar mt-2 h-full max-h-full flex-1 overflow-y-auto ${n ? "" : "pb-20"}`,
                  children: F(x) ? /* @__PURE__ */ l("div", { className: "mt-4 flex flex-col items-center justify-center gap-3 p-4 text-center", children: p ? /* @__PURE__ */ l("p", { className: "text-sm", children: T("No matching blocks found") }) : d ? /* @__PURE__ */ b(Q, { children: [
                    /* @__PURE__ */ l("p", { className: "text-sm", children: T("Failed to load the UI library. Try again") }),
                    /* @__PURE__ */ b(re, { onClick: E, variant: "outline", size: "sm", className: "gap-2", children: [
                      /* @__PURE__ */ l(Vs, { className: "h-4 w-4" }),
                      T("Retry")
                    ] })
                  ] }) : /* @__PURE__ */ l("p", { className: "text-sm", children: T("This library is empty") }) }) : n ? /* @__PURE__ */ b(Hi, { value: w ?? "", onValueChange: S, children: [
                    /* @__PURE__ */ l(Uo, { className: "w-full", children: /* @__PURE__ */ l(Vi, { placeholder: T("Select a group") }) }),
                    /* @__PURE__ */ l(Ko, { children: A(x, (R, V) => /* @__PURE__ */ l(Jo, { value: V, children: $n(T(V.toLowerCase())) }, V)) })
                  ] }) : A(x, (R, V) => /* @__PURE__ */ b(
                    "div",
                    {
                      onMouseEnter: () => N(V),
                      onMouseLeave: () => k.current && clearTimeout(k.current),
                      role: "button",
                      onClick: () => S(V),
                      className: j(
                        "flex w-full cursor-pointer items-center justify-between rounded-md p-2 text-sm text-foreground transition-all ease-in-out hover:bg-gray-200 dark:hover:bg-gray-800",
                        V === w ? "bg-primary text-primary-foreground hover:bg-primary/80" : ""
                      ),
                      children: [
                        /* @__PURE__ */ l("span", { children: $n(T(V.toLowerCase())) }),
                        /* @__PURE__ */ l(Dp, { className: "ml-2 h-5 w-5" })
                      ]
                    },
                    V
                  ))
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ l("div", { className: `flex h-full max-h-full w-full flex-col border-border ${n ? "" : "border-l"}`, children: /* @__PURE__ */ b(
        xo,
        {
          ref: C,
          onMouseEnter: () => k.current && clearTimeout(k.current),
          className: "z-10 flex h-full max-h-full w-full flex-col gap-2 transition-all ease-linear",
          children: [
            F(v) && !F(x) ? /* @__PURE__ */ l("div", { className: "flex h-full flex-col items-center justify-center p-6 text-center", children: /* @__PURE__ */ l("p", { className: "text-sm", children: T("No blocks found in this group") }) }) : /* @__PURE__ */ b("div", { className: `grid w-full gap-2 ${n ? "grid-cols-1 pb-20" : "grid-cols-2 px-2"}`, children: [
              /* @__PURE__ */ l("div", { className: "flex flex-col gap-1", children: I.map((R, V) => /* @__PURE__ */ l(
                Ua,
                {
                  parentId: t,
                  position: e,
                  block: R,
                  library: i
                },
                `block-${V}`
              )) }),
              /* @__PURE__ */ l("div", { className: "flex flex-col gap-1", children: L.map((R, V) => /* @__PURE__ */ l(
                Ua,
                {
                  parentId: t,
                  position: e,
                  block: R,
                  library: i
                },
                `block-second-${V}`
              )) })
            ] }),
            /* @__PURE__ */ l("br", {}),
            /* @__PURE__ */ l("br", {}),
            /* @__PURE__ */ l("br", {})
          ]
        }
      ) })
    ] }) })
  ] }) });
}, q0 = ({
  parentId: t,
  position: e,
  fromSidebar: n
}) => /* @__PURE__ */ l(X0, { parentId: t, position: e, fromSidebar: n }), Z0 = P({
  blocks: [],
  groups: [],
  isLoading: !0,
  error: null
}), Q0 = P(!1), Ka = (t) => {
  if (!t) return "";
  let e = t.replace(/[-_]/g, " ");
  return e = e.replace(/([a-z])([A-Z])/g, "$1 $2"), e.split(" ").map((n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()).join(" ");
}, ev = ({
  parentId: t,
  position: e,
  gridCols: n = "grid-cols-2",
  disableBlockGroupsSidebar: r = !1
}) => {
  const { data: s, isLoading: o, refetch: i, error: a } = Ql(), [c, d] = D(Z0), [u, p] = D(Q0), f = ec();
  z(() => {
    if (!u || Object.keys(c.blocks).length === 0)
      if (a)
        d({
          blocks: [],
          groups: [],
          isLoading: !1,
          error: a
        }), p(!0);
      else if (!o && Object.keys(s || {}).length > 0) {
        const g = Object.entries(s).map(([x, w]) => {
          const S = w, v = S.type || "partial", k = Ka(v);
          return {
            type: "PartialBlock",
            // Set the type to PartialBlock
            label: Ka(S.name || x),
            description: S.description || "",
            icon: Mp,
            group: k,
            // Use formatted type as group
            category: "partial",
            partialBlockId: x,
            // Store the original ID as partialBlockId
            _name: S.name
          };
        }), y = Ds(A(g, "group"));
        d({
          blocks: g,
          groups: y,
          isLoading: !1,
          error: null
        }), p(!0);
      } else o ? d((g) => ({ ...g, isLoading: !0, error: null })) : !o && Object.keys(s || {}).length === 0 && (d({
        blocks: [],
        groups: [],
        isLoading: !1,
        error: "No partial blocks available"
      }), p(!0));
  }, [
    o,
    s,
    u,
    p,
    d,
    c.blocks,
    a
  ]);
  const h = () => {
    d((g) => ({ ...g, isLoading: !0, error: null })), p(!1), i();
  }, m = M(() => c.blocks.map((g) => {
    const { canAdd: y, reason: x } = f(g.partialBlockId);
    return {
      ...g,
      disabled: !y,
      disabledReason: x
    };
  }), [c.blocks, f]);
  return c.isLoading ? /* @__PURE__ */ l("div", { className: "flex items-center justify-center p-8 text-center text-muted-foreground", children: "Loading partial blocks..." }) : c.error || c.blocks.length === 0 ? /* @__PURE__ */ b("div", { className: "flex flex-col items-center justify-center gap-4 p-8 text-center text-muted-foreground", children: [
    /* @__PURE__ */ l("p", { children: c.error || "No partial blocks available" }),
    /* @__PURE__ */ l(
      "button",
      {
        onClick: h,
        className: "rounded-md bg-primary px-3 py-1 text-sm text-primary-foreground hover:bg-primary/90",
        children: "Refresh"
      }
    )
  ] }) : /* @__PURE__ */ l(
    au,
    {
      gridCols: n,
      parentId: t,
      position: e,
      groups: c.groups,
      blocks: m,
      disableBlockGroupsSidebar: r
    }
  );
}, Ja = ["basic", "typography", "media", "layout", "form", "advanced", "other"], au = ({
  groups: t,
  blocks: e,
  parentId: n,
  position: r,
  gridCols: s = "grid-cols-4",
  disableBlockGroupsSidebar: o
}) => {
  var L;
  const { t: i } = K(), [a] = ue(), [c, d] = $(""), u = ne(null), [p] = D(lu), f = (L = ee(a, (R) => R._id === n)) == null ? void 0 : L._type, [h, m] = $("all"), [g, y] = $(null), x = ne(null), w = G("flags.dragAndDrop", !0);
  z(() => {
    const R = setTimeout(() => {
      var V;
      (V = u.current) == null || V.focus();
    }, 0);
    return () => clearTimeout(R);
  }, [p]), z(() => {
    c && (m("all"), y(null));
  }, [c]), z(() => (x.current = Ms((R) => {
    m(R);
  }, 500), () => {
    x.current && x.current.cancel();
  }), []);
  const S = B((R) => {
    y(R), x.current && x.current(R);
  }, []), v = B(() => {
    y(null), x.current && x.current.cancel();
  }, []), k = B((R) => {
    x.current && x.current.cancel(), m(R), y(null);
  }, []), T = M(
    () => c ? Lt(e).filter(
      (R) => {
        var V, J;
        return (((V = R.label) == null ? void 0 : V.toLowerCase()) + " " + ((J = R.type) == null ? void 0 : J.toLowerCase())).includes(c.toLowerCase());
      }
    ) : e,
    [e, c]
  ), C = M(
    () => c ? t.filter(
      (R) => Ur(Z(Lt(T), { group: R }), { hidden: !0 }).length > 0
    ) : t.filter((R) => Ur(Z(Lt(e), { group: R }), { hidden: !0 }).length > 0),
    [e, T, t, c]
  ), N = M(
    () => Ku(C, (R) => Ja.indexOf(R) === -1 ? 99 : Ja.indexOf(R)),
    [C]
  ), E = M(() => h === "all" ? T : Z(Lt(T), { group: h }), [T, h]), I = M(() => h === "all" ? N : [h], [N, h]);
  return /* @__PURE__ */ b("div", { className: "mx-auto flex h-full w-full flex-col", children: [
    /* @__PURE__ */ l(iu, { value: c, setValue: d }),
    /* @__PURE__ */ b("div", { className: "sticky top-10 flex h-[calc(100%-48px)] overflow-hidden pt-2", children: [
      !o && N.length > 0 && /* @__PURE__ */ l("div", { className: "w-1/4 min-w-[120px] border-r border-border", children: /* @__PURE__ */ l(xo, { className: "h-full", children: /* @__PURE__ */ b("div", { className: "space-y-1", children: [
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => k("all"),
            onMouseEnter: () => S("all"),
            onMouseLeave: v,
            className: `w-full rounded-md px-2 py-1.5 text-left text-sm font-medium ${h === "all" || g === "all" ? "bg-primary text-primary-foreground" : "hover:bg-primary/50 hover:text-primary-foreground"}`,
            children: i("All")
          },
          "sidebar-all"
        ),
        N.map((R) => /* @__PURE__ */ l(
          "button",
          {
            onClick: () => k(R),
            onMouseEnter: () => S(R),
            onMouseLeave: v,
            className: `w-full rounded-md px-2 py-1.5 text-left text-sm ${h === R || g === R ? "bg-primary text-primary-foreground" : "hover:bg-primary/50 hover:text-primary-foreground"}`,
            children: $n(i(R.toLowerCase()))
          },
          `sidebar-${R}`
        ))
      ] }) }) }),
      /* @__PURE__ */ l(
        "div",
        {
          className: `h-full flex-1 overflow-hidden ${!o && N.length > 0 ? "w-3/4" : "w-full"}`,
          children: /* @__PURE__ */ l(xo, { id: "add-blocks-scroll-area", className: "no-scrollbar h-full", children: C.length === 0 && c ? /* @__PURE__ */ l("div", { className: "flex flex-col items-center justify-center p-8 text-center text-muted-foreground", children: /* @__PURE__ */ b("p", { children: [
            i("No blocks found matching"),
            ' "',
            c,
            '"'
          ] }) }) : /* @__PURE__ */ l("div", { className: `${o ? "p-0" : "p-4"} space-y-6`, children: I.map((R, V) => /* @__PURE__ */ b("div", { className: "space-y-3", children: [
            /* @__PURE__ */ l("h3", { className: "px-1 text-sm font-medium", children: $n(i(R.toLowerCase())) }),
            /* @__PURE__ */ l("div", { className: "grid gap-2 " + s, children: Ur(
              h === "all" ? Z(Lt(E), { group: R }) : Lt(E),
              { hidden: !0 }
            ).map((J, q) => /* @__PURE__ */ l(
              M0,
              {
                parentId: n,
                position: r,
                block: J,
                disabled: !w && (!mt(f, J.type) || !Gf(f, J.type))
              },
              J.type + "-" + V + "-" + q
            )) })
          ] }, R)) }) })
        }
      )
    ] })
  ] });
}, lu = Et("__add_block_tab", "library"), cu = ({
  className: t,
  showHeading: e = !0,
  parentId: n = void 0,
  position: r = -1,
  fromSidebar: s = !1
}) => {
  const { t: o } = K(), [i, a] = D(lu), [, c] = D(rc), d = G("flags.importHtml", !0), { data: u } = Ql(), p = Object.keys(u || {}).length > 0, { hasPermission: f } = gt();
  z(() => {
    i === "partials" && !p && a("library");
  }, [i, p, a]);
  const h = B(() => {
    me.publish(se.CLOSE_ADD_BLOCK);
  }, []), m = ep(), g = d && f(Ie.IMPORT_HTML), x = il().length > 0;
  return z(() => {
    i === "library" && !x && a("core");
  }, [i, x, a]), /* @__PURE__ */ b("div", { className: Ze("flex h-full w-full flex-col overflow-hidden", t), children: [
    e ? /* @__PURE__ */ b("div", { className: "mb-2 flex flex-col justify-between rounded-md bg-background/30 p-1", children: [
      /* @__PURE__ */ l("h1", { className: "flex flex-col items-baseline px-1 text-xl font-semibold xl:flex-col", children: o("Add block") }),
      /* @__PURE__ */ l("span", { className: "p-0 text-xs font-light leading-3 opacity-80 xl:pl-1", children: o(i === "html" ? "Enter or paste TailwindCSS HTML snippet" : "Click to add block to page") })
    ] }) : null,
    /* @__PURE__ */ b(
      zi,
      {
        onValueChange: (w) => {
          c(""), a(w);
        },
        value: i,
        className: "flex h-full max-h-full flex-col overflow-hidden",
        children: [
          /* @__PURE__ */ b(Wo, { className: `flex items-center ${s ? "h-max w-max justify-start p-1" : "w-full"}`, children: [
            x && /* @__PURE__ */ l(lt, { value: "library", className: s ? "h-5 px-2 text-xs" : "", children: o("Library") }),
            /* @__PURE__ */ l(lt, { value: "core", className: s ? "h-5 px-2 text-xs" : "", children: o("Blocks") }),
            p && /* @__PURE__ */ l(lt, { value: "partials", className: s ? "h-5 px-2 text-xs" : "", children: o("Partials") }),
            g ? /* @__PURE__ */ l(lt, { value: "html", className: s ? "h-5 px-2 text-xs" : "", children: o("Import") }) : null,
            A(m, (w) => /* @__PURE__ */ l(
              lt,
              {
                value: w.id,
                className: s ? "h-5 px-2 text-xs" : "",
                children: te.createElement(w.tab)
              },
              `tab-add-block-${w.id}`
            ))
          ] }),
          /* @__PURE__ */ l(jt, { value: "core", className: "h-full max-h-full flex-1 pb-20", children: /* @__PURE__ */ l("div", { className: "h-full max-h-full overflow-hidden", children: /* @__PURE__ */ l("div", { className: "h-full w-full", children: /* @__PURE__ */ l(
            $0,
            {
              gridCols: s ? "grid-cols-2" : "grid-cols-4",
              parentId: n,
              position: r,
              disableBlockGroupsSidebar: s
            }
          ) }) }) }),
          x && /* @__PURE__ */ l(jt, { value: "library", className: "h-full max-h-full flex-1 pb-20", children: /* @__PURE__ */ l(q0, { fromSidebar: s, parentId: n, position: r }) }),
          p && /* @__PURE__ */ l(jt, { value: "partials", className: "h-full max-h-full flex-1 pb-20", children: /* @__PURE__ */ l("div", { className: "h-full max-h-full overflow-hidden", children: /* @__PURE__ */ l("div", { className: "h-full w-full", children: /* @__PURE__ */ l(
            ev,
            {
              gridCols: s ? "grid-cols-2" : "grid-cols-4",
              parentId: n,
              position: r,
              disableBlockGroupsSidebar: s
            }
          ) }) }) }),
          g ? /* @__PURE__ */ l(jt, { value: "html", className: "h-full max-h-full flex-1 pb-20 ", children: /* @__PURE__ */ l(H0, { parentId: n, position: r, fromSidebar: s }) }) : null,
          A(m, (w) => /* @__PURE__ */ l(jt, { value: w.id, children: te.createElement(w.tabContent, { close: h, parentId: n, position: r }) }, `panel-add-block-${w.id}`))
        ]
      }
    )
  ] });
}, tv = {
  display: "flex",
  alignItems: "center",
  zIndex: 1
}, nv = te.memo(function({ top: e, left: n, indent: r }) {
  const s = {
    position: "absolute",
    pointerEvents: "none",
    top: e - 1 + "px",
    left: "0px",
    right: 0,
    paddingLeft: n + r + "px"
  };
  return /* @__PURE__ */ b("div", { style: { ...tv, ...s }, children: [
    /* @__PURE__ */ l("div", { className: "h-1 w-1 rounded-full bg-green-500" }),
    /* @__PURE__ */ l("div", { className: "h-[1px] flex-1 rounded-[1px] border-t border-green-500" })
  ] });
}), rv = [
  { key: "ArrowDown", command: "selectNext" },
  { key: "ArrowUp", command: "selectPrev" },
  { key: "ArrowLeft", command: "selectParent", when: "isLeaf || isClosed" },
  { key: "ArrowLeft", command: "close", when: "isOpen" },
  { key: "ArrowRight", command: "open", when: "isClosed" },
  { key: "ArrowRight", command: "selectNext", when: "isOpen" },
  { key: "Home", command: "selectFirst" },
  { key: "End", command: "selectLast" }
];
function ov(t) {
  t.firstNode && t.select(t.firstNode.id);
}
function sv(t) {
  t.lastNode && t.select(t.lastNode.id);
}
function iv(t) {
  const e = t.selectedNodes[0].next || t.firstNode;
  t.select(e.id);
}
function av(t) {
  const e = t.selectedNodes[0].prev || t.lastNode;
  t.select(e.id);
}
const lv = (t, e) => {
  const n = t.selectedNodes[0], r = (n == null ? void 0 : n.parent) || null;
  r && e && t.select(r.id);
}, cv = (t, e) => {
  const n = t.selectedNodes[0];
  n.isInternal && e && n.open();
}, dv = (t, e) => {
  const n = t.selectedNodes[0];
  n.isInternal && e && n.close();
}, du = Ke.Root, uv = Ke.Trigger, pv = Ke.Portal, uu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  Ke.Overlay,
  {
    className: j(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
      t
    ),
    ...e,
    ref: n
  }
));
uu.displayName = Ke.Overlay.displayName;
const ji = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ b(pv, { children: [
  /* @__PURE__ */ l(uu, {}),
  /* @__PURE__ */ l(
    Ke.Content,
    {
      ref: n,
      className: j(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
        t
      ),
      ...e
    }
  )
] }));
ji.displayName = Ke.Content.displayName;
const Wi = ({ className: t, ...e }) => /* @__PURE__ */ l("div", { className: j("flex flex-col space-y-2 text-center sm:text-left", t), ...e });
Wi.displayName = "AlertDialogHeader";
const pu = ({ className: t, ...e }) => /* @__PURE__ */ l("div", { className: j("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t), ...e });
pu.displayName = "AlertDialogFooter";
const Gi = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(Ke.Title, { ref: n, className: j("text-lg font-semibold", t), ...e }));
Gi.displayName = Ke.Title.displayName;
const fu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(Ke.Description, { ref: n, className: j("text-sm text-muted-foreground", t), ...e }));
fu.displayName = Ke.Description.displayName;
const hu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(Ke.Action, { ref: n, className: j(al(), t), ...e }));
hu.displayName = Ke.Action.displayName;
const mu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  Ke.Cancel,
  {
    ref: n,
    className: j(al({ variant: "outline" }), "mt-2 sm:mt-0", t),
    ...e
  }
));
mu.displayName = Ke.Cancel.displayName;
const fv = ({ children: t }) => {
  const { t: e } = K(), { setNewBlocks: n } = $e(), [, r] = oe(), [, s] = Fe(), o = B(() => {
    n([]), r([]), s([]);
  }, [n]);
  return /* @__PURE__ */ l("div", { className: "flex items-center", children: /* @__PURE__ */ b(du, { children: [
    /* @__PURE__ */ l(uv, { asChild: !0, children: t || /* @__PURE__ */ l(re, { size: "sm", variant: "ghost", className: "flex items-center", children: /* @__PURE__ */ l(xl, {}) }) }),
    /* @__PURE__ */ b(ji, { className: "border-border", children: [
      /* @__PURE__ */ b(Wi, { children: [
        /* @__PURE__ */ l(Gi, { className: "text-foreground", children: e("Clear whole canvas?") }),
        /* @__PURE__ */ l(fu, { children: e("Are you sure you want to clear the page?") })
      ] }),
      /* @__PURE__ */ b(pu, { children: [
        /* @__PURE__ */ l(mu, { className: "text-foreground", children: e("Cancel") }),
        /* @__PURE__ */ l(hu, { onClick: o, children: e("Yes") })
      ] })
    ] })
  ] }) });
}, hv = () => {
  const t = ae(), { t: e } = K(), [, n] = D(Yl), r = ll(), s = () => {
    t && n({
      isOpen: !0,
      blockId: t._id
    });
  };
  return r ? /* @__PURE__ */ b(Ee, { className: "flex items-center gap-x-4 text-xs", onClick: s, children: [
    /* @__PURE__ */ l(Nr, { className: "h-4 w-4" }),
    " ",
    t != null && t._libBlockId ? e("Update library block") : e("Save to library")
  ] }) : null;
}, mv = () => {
  const { t } = K(), e = ae(), n = _t();
  return /* @__PURE__ */ b(Ee, { onClick: () => {
    e && n([e._id], {
      _libBlockId: null
    });
  }, className: "flex items-center gap-x-4 text-xs", children: [
    /* @__PURE__ */ l(pl, { className: "h-4 w-4" }),
    " ",
    t("Unlink from library")
  ] });
}, Ya = () => {
  const { t } = K(), [e] = oe();
  return G("flags.exportCode", !1) ? /* @__PURE__ */ b(
    Ee,
    {
      className: "flex items-center gap-x-4 text-xs",
      onClick: () => me.publish(se.OPEN_EXPORT_CODE, e),
      children: [
        /* @__PURE__ */ l($p, {}),
        " ",
        t("Export")
      ]
    }
  ) : null;
}, Xa = ({ isFromBody: t = !1 }) => {
  const [e] = ue(), [n] = oe(), { pasteBlocks: r } = vi(), [, s, o] = Ec(), { t: i } = K(), a = ae(), c = G("flags.copyPaste", !0), d = B(() => {
    var f;
    const p = (t ? (f = e == null ? void 0 : e.filter((h) => !(h != null && h._parent))) == null ? void 0 : f.map((h) => h == null ? void 0 : h._id) : n).map((h) => {
      const m = e.find((g) => g._id === h);
      return {
        id: h,
        data: m
      };
    });
    o(p.map((h) => h.id)) ? Ce.warning("Partial blocks detected. Clone partial blocks?", {
      cancel: {
        label: i("No"),
        onClick: () => {
          s(p.map((h) => h.id)), Ce.dismiss();
        }
      },
      action: {
        label: i("Yes"),
        onClick: () => {
          s(
            p.map((h) => h.id),
            !0
          ), Ce.dismiss();
        }
      },
      position: "top-center"
    }) : s(p.map((h) => h.id));
  }, [n, e, s, o]);
  return /* @__PURE__ */ b(Q, { children: [
    c && /* @__PURE__ */ b(
      Ee,
      {
        disabled: !Xs(a == null ? void 0 : a._type),
        onClick: d,
        className: "flex items-center gap-x-4 text-xs",
        children: [
          /* @__PURE__ */ l(zs, {}),
          " ",
          i("Copy")
        ]
      }
    ),
    c && /* @__PURE__ */ b(
      Ee,
      {
        className: "flex items-center gap-x-4 text-xs",
        onClick: () => {
          r(n);
        },
        children: [
          /* @__PURE__ */ l(js, {}),
          " ",
          i("Paste")
        ]
      }
    )
  ] });
}, gv = () => {
  const [t] = oe(), [, e] = Po(), { t: n } = K(), r = G("flags.copyPaste", !0);
  return /* @__PURE__ */ l(Q, { children: r && /* @__PURE__ */ b(Ee, { className: "flex items-center gap-x-4 text-xs", onClick: () => e(t), children: [
    /* @__PURE__ */ l(zp, {}),
    " ",
    n("Cut")
  ] }) });
}, bv = () => {
  const [t] = oe(), e = di(), n = ae(), { t: r } = K();
  return /* @__PURE__ */ b(
    Ee,
    {
      disabled: !qs(n == null ? void 0 : n._type),
      className: "flex items-center gap-x-4 text-xs",
      onClick: () => e(t),
      children: [
        /* @__PURE__ */ l(Hs, {}),
        " ",
        r("Remove")
      ]
    }
  );
}, yv = ({ node: t }) => {
  const { t: e } = K();
  return /* @__PURE__ */ b(
    Ee,
    {
      onClick: (n) => {
        n.stopPropagation(), t.edit(), t.deselect();
      },
      className: "flex items-center gap-x-4 text-xs",
      children: [
        /* @__PURE__ */ l(ko, { className: "h-4 w-4" }),
        " ",
        e("Rename")
      ]
    }
  );
}, xv = ({ node: t }) => {
  const { t: e } = K(), [n] = oe(), r = bi(), s = ae(), { hasPermission: o } = gt(), { librarySite: i } = G("flags", { librarySite: !1 }), a = bt(), c = B(() => {
    r(n);
  }, [n, r]), d = M(() => le(s, "_libBlockId") && !F(s._libBlockId), [s == null ? void 0 : s._libBlockId]);
  return t === "BODY" ? /* @__PURE__ */ l(Ft, { side: "bottom", className: "border-border text-xs", children: o(Ie.ADD_BLOCK) && /* @__PURE__ */ b(Q, { children: [
    /* @__PURE__ */ b(
      Ee,
      {
        disabled: !1,
        className: "flex items-center gap-x-4 text-xs",
        onClick: () => me.publish(se.OPEN_ADD_BLOCK, s),
        children: [
          /* @__PURE__ */ l(qe, { className: "h-3.5 w-3.5" }),
          " ",
          e("Add block")
        ]
      }
    ),
    o(Ie.ADD_BLOCK) && /* @__PURE__ */ l(Xa, { isFromBody: !0 }),
    /* @__PURE__ */ l(Ya, {}),
    /* @__PURE__ */ l(
      Ee,
      {
        disabled: !1,
        onClick: (u) => u.preventDefault(),
        className: "flex items-center gap-x-4 text-xs",
        children: /* @__PURE__ */ l(
          fv,
          {
            children: /* @__PURE__ */ b("div", { className: "flex items-center gap-x-4 text-xs", children: [
              /* @__PURE__ */ l(xl, {}),
              " ",
              e("Clear canvas")
            ] })
          }
        )
      }
    )
  ] }) }) : /* @__PURE__ */ b(Ft, { side: "bottom", className: "border-border text-xs", children: [
    o(Ie.ADD_BLOCK) && /* @__PURE__ */ b(Q, { children: [
      !a && /* @__PURE__ */ b(
        Ee,
        {
          disabled: !so(s == null ? void 0 : s._type),
          className: "flex items-center gap-x-4 text-xs",
          onClick: () => me.publish(se.OPEN_ADD_BLOCK, s),
          children: [
            /* @__PURE__ */ l(qe, { className: "h-3.5 w-3.5" }),
            " ",
            e("Add block")
          ]
        }
      ),
      /* @__PURE__ */ b(
        Ee,
        {
          disabled: !Xs(s == null ? void 0 : s._type),
          className: "flex items-center gap-x-4 text-xs",
          onClick: c,
          children: [
            /* @__PURE__ */ l(Fp, {}),
            " ",
            e("Duplicate")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ l(yv, { node: t }),
    o(Ie.MOVE_BLOCK) && /* @__PURE__ */ l(gv, {}),
    o(Ie.ADD_BLOCK) && /* @__PURE__ */ l(Xa, {}),
    d && i && /* @__PURE__ */ l(mv, {}),
    o(Ie.CREATE_LIBRARY_BLOCK) && i && /* @__PURE__ */ l(hv, {}),
    /* @__PURE__ */ l(Ya, {}),
    o(Ie.DELETE_BLOCK) && /* @__PURE__ */ l(bv, {})
  ] });
}, gu = ({ children: t, id: e, node: n }) => {
  const [, r] = oe();
  return /* @__PURE__ */ l(Q, { children: /* @__PURE__ */ b(
    kn,
    {
      onOpenChange: (s) => {
        s && r([e]);
      },
      children: [
        /* @__PURE__ */ l(Cn, { children: t }),
        /* @__PURE__ */ l(xv, { node: n })
      ]
    }
  ) });
}, qa = "h-3 w-3 flex-shrink-0", bu = (t) => {
  const e = Gs(), n = _(e, [t.type, "icon"]);
  return n ? te.createElement(n, { className: qa }) : /* @__PURE__ */ l(So, { className: qa });
}, vv = () => {
  const [t] = D(Gn), [e] = D(Qs), [n] = D(ei), [r] = D(ti), [s] = D($l), [o] = D(Fl), [i] = D(zl);
  return {
    errors: t,
    isValid: e,
    hasErrors: n,
    hasWarnings: r,
    errorCount: s,
    warningCount: o,
    errorsByBlock: i,
    // Helper functions
    getBlockErrors: (a) => i[a] || [],
    getErrorsBySeverity: (a) => t.filter((c) => c.severity === a),
    getErrorMessages: () => t.map((a) => a.message),
    getErrorMessagesBySeverity: (a) => t.filter((c) => c.severity === a).map((c) => c.message),
    // Get all error messages for display
    getAllErrorMessages: () => ({
      errors: t.filter((a) => a.severity === "error").map((a) => a.message),
      warnings: t.filter((a) => a.severity === "warning").map((a) => a.message)
    })
  };
}, wv = ({ node: t }) => {
  var e, n;
  return /* @__PURE__ */ l(
    "input",
    {
      autoFocus: !0,
      className: ke(
        "ml-2 !h-4 w-full rounded-sm border border-border bg-background px-1 text-[11px] leading-tight outline-none",
        t.isSelected ? "text-black dark:text-white" : ""
      ),
      type: "text",
      defaultValue: ((e = t.data) == null ? void 0 : e._name) || ((n = t.data) == null ? void 0 : n._type),
      onFocus: (r) => r.currentTarget.select(),
      onBlur: (r) => t.submit(r.currentTarget.value),
      onKeyDown: (r) => {
        r.key === "Enter" && t.submit(r.currentTarget.value);
      }
    }
  );
}, kv = P(null), ms = (t) => {
  var e;
  return t != null && t._name ? t._name : (t == null ? void 0 : t._type) === "Box" && (t != null && t.tag) && (t == null ? void 0 : t.tag) !== "div" ? Kt(t.tag) : ((e = t == null ? void 0 : t._type) == null ? void 0 : e.split("/").pop()) || "";
}, Cv = (t, e) => t.length > e ? t.substring(0, e) + "..." : t, Nv = kr(({ node: t, style: e, dragHandle: n }) => {
  var fe, ze;
  const { t: r } = K(), s = _t(), [o] = D(Lo);
  let i = null;
  const a = t.children && t.children.length > 0, { highlightBlock: c, clearHighlight: d } = At(), u = bt(), { id: p, data: f, isSelected: h, willReceiveDrop: m, isDragging: g, isEditing: y, handleClick: x } = t, w = vv(), S = M(() => w.getBlockErrors(p), [w, p]), v = _(f, "_show", !0), k = (Y) => {
    Y.stopPropagation(), v && t.toggle();
  }, T = (Y) => {
    Y.isInternal && (i = Y.isOpen, Y.isOpen && Y.close());
  }, C = (Y) => {
    Y.isInternal && i !== null && (i ? Y.open() : Y.close(), i = null);
  }, [N, E] = D(kv), I = () => {
    var Y, Te;
    L(), (Y = t.parent) != null && Y.isSelected || E((Te = t == null ? void 0 : t.parent) == null ? void 0 : Te.id);
  }, L = () => {
    E(null);
  }, R = (Y) => {
    L(), Y.stopPropagation(), !t.isOpen && v && t.toggle(), x(Y);
  };
  z(() => {
    const Y = setTimeout(() => {
      m && !t.isOpen && !g && v && t.toggle();
    }, 500);
    return () => clearTimeout(Y);
  }, [m, t, g, v]);
  const V = (Y, Te) => {
    var Xn;
    const ut = o.contentDocument || ((Xn = o.contentWindow) == null ? void 0 : Xn.document), Tn = ut == null ? void 0 : ut.querySelector(`[data-block-id=${Y}]`);
    Tn && Tn.setAttribute("data-drop", Te);
    const Bn = Tn.getBoundingClientRect(), zt = o.getBoundingClientRect();
    !(Bn.top >= zt.top && Bn.left >= zt.left && Bn.bottom <= zt.bottom && Bn.right <= zt.right) && ut && (ut.documentElement.scrollTop = Tn.offsetTop - zt.top);
  }, J = (Y) => {
    L();
    const Te = _(t, "parent.id");
    Te !== "__REACT_ARBORIST_INTERNAL_ROOT__" ? me.publish(se.OPEN_ADD_BLOCK, { _id: Te, position: Y }) : me.publish(se.OPEN_ADD_BLOCK, { position: Y });
  }, { librarySite: q } = G("flags", { librarySite: !1 }), ve = M(() => q && le(f, "_libBlockId") && !F(f._libBlockId), [f, q]), we = M(() => (f == null ? void 0 : f._type) === "PartialBlock" || (f == null ? void 0 : f._type) === "GlobalBlock", [f]);
  return p === Kr ? /* @__PURE__ */ b("div", { className: "group relative mt-2 w-full cursor-pointer", children: [
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l(
      "div",
      {
        role: "button",
        onClick: () => J(-1),
        className: "h-1 rounded bg-primary opacity-0 duration-200 group-hover:opacity-100",
        children: /* @__PURE__ */ b("div", { className: "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center gap-x-1 rounded-full bg-primary px-3 py-1 text-[9px] leading-tight text-white hover:bg-primary", children: [
          /* @__PURE__ */ l(qe, { className: "w-2.4 h-2.5 stroke-[5] text-white" }),
          " ",
          r("Add block")
        ] })
      }
    ),
    /* @__PURE__ */ l("br", {})
  ] }) : /* @__PURE__ */ l("div", { className: ke("relative flex h-full w-full items-center", h ? "bg-primary/20" : "hover:bg-gray-100"), children: /* @__PURE__ */ b(
    "div",
    {
      className: "w-full",
      onMouseEnter: () => c(p),
      onMouseLeave: () => d(),
      onClick: R,
      style: e,
      "data-node-id": p,
      ref: n,
      onDragStart: () => T(t),
      onDragEnd: () => C(t),
      onDragOver: (Y) => {
        Y.preventDefault(), V(p, "yes");
      },
      onDragLeave: (Y) => {
        Y.preventDefault(), V(p, "no");
      },
      onDrop: (Y) => {
        Y.preventDefault(), V(p, "no");
      },
      children: [
        t.level > 0 && /* @__PURE__ */ l("div", { className: "pointer-events-none absolute left-0 top-0 h-full", children: Array.from({ length: t.level }).map((Y, Te) => /* @__PURE__ */ l(
          "div",
          {
            className: "absolute top-0 h-full border-l border-black/5 transition-colors group-hover/parent:border-black/30",
            style: {
              left: `${Te * 14 + 10}px`
            }
          },
          Te
        )) }),
        !u && (t == null ? void 0 : t.rowIndex) !== null && (t == null ? void 0 : t.rowIndex) !== void 0 && (t == null ? void 0 : t.rowIndex) > 0 && (((fe = t.parent) == null ? void 0 : fe.isOpen) && so(_(t, "parent.data._type")) || ((ze = t == null ? void 0 : t.parent) == null ? void 0 : ze.id) === "__REACT_ARBORIST_INTERNAL_ROOT__") && /* @__PURE__ */ l("div", { className: "group relative ml-5 h-full w-full cursor-pointer", children: /* @__PURE__ */ l(
          "div",
          {
            onClick: (Y) => {
              Y.stopPropagation(), J(t.childIndex);
            },
            onMouseEnter: I,
            onMouseLeave: L,
            className: "absolute -top-0.5 h-0.5 w-[90%] rounded bg-primary/80 opacity-0 delay-200 duration-200 group-hover:opacity-100",
            children: /* @__PURE__ */ l("div", { className: "absolute left-1/2 top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-primary/80 p-1 outline outline-2 outline-white hover:bg-primary/80", children: /* @__PURE__ */ l(qe, { className: "h-2 w-2 stroke-[2] text-white" }) })
          }
        ) }),
        /* @__PURE__ */ l("div", { className: "absolute left-0 right-0 top-0 -z-10 h-full", children: /* @__PURE__ */ l(
          "div",
          {
            className: ke(
              "h-full transition-colors",
              m && mt(f._type, "Icon") ? "bg-green-200" : "",
              (t == null ? void 0 : t.id) === N ? "bg-gray-100 dark:bg-gray-900" : ""
            )
          }
        ) }),
        /* @__PURE__ */ b(
          "div",
          {
            className: ke(
              "group relative flex w-full cursor-pointer items-center justify-between space-x-px p-1 py-0 outline-none",
              g && "opacity-20",
              v ? "" : "line-through opacity-50",
              ve && h && "text-primary"
            ),
            children: [
              /* @__PURE__ */ b("div", { className: "flex items-center", children: [
                /* @__PURE__ */ l(
                  "div",
                  {
                    className: `flex h-4 w-4 rotate-0 transform cursor-pointer items-center justify-center transition-transform duration-100 ${t.isOpen ? "rotate-90" : ""}`,
                    children: a && /* @__PURE__ */ l("button", { onClick: k, type: "button", children: /* @__PURE__ */ l(Wn, { className: "h-3 w-3" }) })
                  }
                ),
                /* @__PURE__ */ b(
                  "div",
                  {
                    className: ke(
                      "leading-1 flex w-full items-center",
                      ve && "text-orange-600/90",
                      ve && h && "text-orange-800",
                      we && "text-purple-600/90",
                      we && h && "text-purple-800"
                    ),
                    children: [
                      S.length > 0 ? /* @__PURE__ */ l("div", { className: "text-red-500", children: /* @__PURE__ */ l(Hp, { className: "h-3 w-3" }) }) : /* @__PURE__ */ l(bu, { type: f == null ? void 0 : f._type }),
                      y ? /* @__PURE__ */ l(wv, { node: t }) : /* @__PURE__ */ l(
                        "div",
                        {
                          className: "ml-1.5 flex items-center gap-x-1 truncate text-[13px]",
                          onDoubleClick: (Y) => {
                            Y.stopPropagation(), t.edit(), t.deselect();
                          },
                          children: /* @__PURE__ */ l("span", { title: ms(f).length > 17 ? ms(f) : "", children: Cv(ms(f), 17) })
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ b("div", { className: "invisible flex items-center space-x-1.5 pr-px group-hover:visible", children: [
                so(f == null ? void 0 : f._type) && v ? /* @__PURE__ */ b(Ne, { children: [
                  /* @__PURE__ */ l(
                    Se,
                    {
                      onClick: () => me.publish(se.OPEN_ADD_BLOCK, { _id: p }),
                      className: "cursor-pointer rounded bg-transparent p-px hover:bg-primary/10",
                      asChild: !0,
                      children: /* @__PURE__ */ l(qe, { className: "h-4 w-4" })
                    }
                  ),
                  /* @__PURE__ */ l(be, { className: "isolate z-[9999]", side: "bottom", children: r("Add block inside") })
                ] }) : null,
                /* @__PURE__ */ b(Ne, { children: [
                  /* @__PURE__ */ l(
                    Se,
                    {
                      onClick: (Y) => {
                        Y.stopPropagation(), s([p], { _show: !v }), t.isOpen && t.toggle();
                      },
                      className: "cursor-pointer rounded bg-transparent p-0.5 hover:bg-primary/10",
                      asChild: !0,
                      children: v ? /* @__PURE__ */ l(no, { className: "h-4 w-4" }) : /* @__PURE__ */ l(yl, { className: "h-4 w-4" })
                    }
                  ),
                  /* @__PURE__ */ l(be, { className: "isolate z-[9999] text-xs", side: "bottom", children: r(v ? "Hide the block from page" : "Show the block on page") })
                ] }),
                /* @__PURE__ */ l(gu, { node: t, id: p, children: /* @__PURE__ */ l("div", { className: "cursor-pointer rounded bg-transparent p-px hover:bg-primary/10", children: /* @__PURE__ */ l(Co, { className: "h-3 w-3" }) }) })
              ] })
            ]
          }
        )
      ]
    }
  ) });
}), yu = (t, e) => {
  const n = Z(t, { _parent: e });
  if (n.length === 0) return [];
  const r = [...n];
  return n.forEach((s) => {
    r.push(...yu(t, s == null ? void 0 : s._id));
  }), r;
}, Sv = () => {
  const [t, e] = D(Yl), { t: n } = K(), [r] = ue(), s = () => e({ isOpen: !1, blockId: null }), o = ll(), i = M(() => {
    if (!t.blockId) return [];
    const a = ee(r, { _id: t.blockId });
    return a == null || delete a._parent, [a, ...yu(r, a == null ? void 0 : a._id)];
  }, [t.blockId, r]);
  return /* @__PURE__ */ l($o, { open: t.isOpen, onOpenChange: (a) => !a && s(), children: /* @__PURE__ */ b(Lr, { className: "p-4 sm:max-w-[450px]", children: [
    /* @__PURE__ */ l(Fo, { className: "pb-2", children: /* @__PURE__ */ l(Pr, { children: n("Save to Library") }) }),
    o && !F(t.blockId) && /* @__PURE__ */ l(o, { blockId: t.blockId, blocks: i, close: s })
  ] }) });
}, Ie = {
  ADD_BLOCK: "add_block",
  DELETE_BLOCK: "delete_block",
  EDIT_BLOCK: "edit_block",
  MOVE_BLOCK: "move_block",
  EDIT_THEME: "edit_theme",
  SAVE_PAGE: "save_page",
  EDIT_STYLES: "edit_styles",
  IMPORT_HTML: "import_html",
  //LIbrary permissions
  CREATE_LIBRARY_BLOCK: "create_library_block",
  CREATE_LIBRARY_GROUP: "create_library_group",
  EDIT_LIBRARY_BLOCK: "edit_library_block",
  DELETE_LIBRARY_BLOCK: "delete_library_block"
};
Object.values(Ie);
const Ev = ({
  parentContext: t,
  setParentContext: e
}) => {
  const { t: n } = K(), { canPaste: r, pasteBlocks: s } = vi(), o = G("flags.copyPaste", !0);
  return z(() => {
    r("root") || e(null);
  }, [r("root")]), !t || !r("root") || !o ? null : /* @__PURE__ */ l("div", { className: "absolute inset-0", children: /* @__PURE__ */ b(kn, { open: !0, onOpenChange: () => e(null), children: [
    /* @__PURE__ */ l(Cn, { className: "hidden" }),
    /* @__PURE__ */ l(
      Ft,
      {
        className: "absolute w-28 p-1 text-xs",
        style: { top: t.y, left: t.x },
        children: /* @__PURE__ */ b(
          Ee,
          {
            className: "flex items-center gap-x-4 text-xs",
            onClick: () => {
              s("root"), e(null);
            },
            children: [
              /* @__PURE__ */ l(js, {}),
              " ",
              n("Paste")
            ]
          }
        )
      }
    )
  ] }) });
}, _v = () => {
  const [t] = ue();
  return (e, n) => {
    if (!n)
      return !!ye(e.map((i) => {
        var a;
        return (a = ee(t, { _id: i })) == null ? void 0 : a._type;
      }));
    const r = ee(t, { _id: n });
    if (!r) return !1;
    const s = ye(e.map((o) => {
      var i;
      return (i = ee(t, { _id: o })) == null ? void 0 : i._type;
    }));
    return s ? mt(r._type, s) : !1;
  };
}, Av = () => {
  const [t] = D(Dl), [e, n] = oe(), [r] = Po(), s = _t(), [, o] = Fe(), { moveBlocks: i } = $e(), a = _v(), c = ne(null), [, d] = D(fi), { t: u } = K(), [p, f] = $(null), h = () => {
    n([]), o([]);
  }, m = M(() => {
    const C = (E, I) => E.filter((L) => !I.includes(L._id)).map((L) => ({
      ...L,
      children: L.children ? C(L.children, I) : []
    }));
    return [...C(t, r), { _type: Kr, _id: Kr, children: [] }];
  }, [t, r]), g = ({ id: C, name: N, node: E }) => {
    s([C], { _name: N }, E.data._name);
  }, y = ({ dragIds: C, parentId: N, index: E }) => {
    a(C, N) && i(C, N ?? void 0, E);
  }, x = (C) => {
    if (C.length === 0) return;
    const N = C[0] ? C[0].id : "";
    o([]), n([N]);
  }, w = (C) => {
    var I;
    C.preventDefault(), p && f(null);
    const N = C.target, E = N.getAttribute("data-node-id") || ((I = N.closest("[data-node-id]")) == null ? void 0 : I.getAttribute("data-node-id"));
    E ? (o([]), n([E])) : (o([]), n([]), f({ x: C.clientX, y: C.clientY }));
  }, S = Nt(
    ({ parentNode: C, dragNodes: N }) => {
      var E;
      return (C == null ? void 0 : C.data._type) === Kr || !mt(C == null ? void 0 : C.data._type, (E = N[0]) == null ? void 0 : E.data._type);
    },
    [],
    300
  ), v = (C, N) => {
    if (!C) return !0;
    const E = {
      isLeaf: !N.isInternal,
      isClosed: !N.isOpen,
      isOpen: N.isOpen
    };
    try {
      let I = C;
      return Object.keys(E).forEach((L) => {
        const R = new RegExp(`\\b${L}\\b`, "g");
        I = I.replace(R, String(E[L]));
      }), new Function(`return ${I}`)();
    } catch {
      return console.warn("Invalid condition expression:", C), !1;
    }
  }, k = (C) => {
    if (!c.current) return;
    const N = c.current, E = N.selectedNodes[0];
    if (!E) return;
    n([E.id]), o([]);
    const I = !E.isInternal, L = !E.isOpen, R = E.isOpen, V = rv.find(
      (J) => J.key === C.key && (!J.when || v(J.when, E))
    );
    if (V)
      switch (C.preventDefault(), V.command) {
        case "selectNext":
          iv(N);
          break;
        case "selectPrev":
          av(N);
          break;
        case "selectParent":
          lv(N, I || L);
          break;
        case "close":
          dv(N, R);
          break;
        case "open":
          cv(N, L);
          break;
        case "selectFirst":
          ov(N);
          break;
        case "selectLast":
          sv(N);
          break;
      }
  };
  z(() => {
    const C = () => {
      c.current && d(c.current);
    };
    C();
    const N = new MutationObserver(C);
    return N.observe(document.body, { childList: !0, subtree: !0 }), () => N.disconnect();
  }, [d]);
  const { hasPermission: T } = gt();
  return F(t) ? /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l("div", { className: "mt-10 flex h-full w-full items-center justify-center p-8", children: /* @__PURE__ */ b("div", { className: "flex flex-col items-center space-y-6 text-center", children: [
    /* @__PURE__ */ l("div", { className: "rounded-full bg-muted p-6", children: /* @__PURE__ */ l(Vp, { className: "h-12 w-12 text-muted-foreground" }) }),
    /* @__PURE__ */ b("div", { className: "space-y-2", children: [
      /* @__PURE__ */ l("h3", { className: "text-lg font-semibold text-foreground", children: u("This page is empty") }),
      /* @__PURE__ */ l("p", { className: "max-w-sm text-sm text-muted-foreground", children: u("Get started by adding your first block to begin building your page") })
    ] }),
    T(Ie.ADD_BLOCK) && /* @__PURE__ */ b(
      re,
      {
        onClick: () => me.publish(se.OPEN_ADD_BLOCK),
        className: "bg-primary shadow-sm hover:bg-primary/90",
        size: "sm",
        children: [
          /* @__PURE__ */ l(qe, { className: "h-4 w-4" }),
          u("Add Block")
        ]
      }
    )
  ] }) }) }) : /* @__PURE__ */ b(Q, { children: [
    /* @__PURE__ */ l(
      "div",
      {
        className: Ze("chai-outline group/parent parent-group flex h-full select-none flex-col space-y-1"),
        onClick: () => h(),
        children: /* @__PURE__ */ b(
          "div",
          {
            id: "outline-view ",
            className: "no-scrollbar h-full overflow-y-auto text-sm",
            onKeyDown: (C) => {
              c.current && !c.current.isEditing && k(C);
            },
            children: [
              /* @__PURE__ */ b("div", { className: "mb-2 flex items-center justify-end gap-x-1 pb-2 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ b(Ne, { children: [
                  /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(re, { className: "h-fit p-1", onClick: () => {
                    var C;
                    return (C = c == null ? void 0 : c.current) == null ? void 0 : C.openAll();
                  }, variant: "ghost", size: "sm", children: /* @__PURE__ */ l(jp, { className: "h-2 w-2" }) }) }),
                  /* @__PURE__ */ l(be, { className: "isolate z-[9999]", children: u("Expand all") })
                ] }),
                /* @__PURE__ */ b(Ne, { children: [
                  /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(re, { className: "h-fit p-1", onClick: () => {
                    var C;
                    return (C = c == null ? void 0 : c.current) == null ? void 0 : C.closeAll();
                  }, variant: "ghost", size: "sm", children: /* @__PURE__ */ l(Wp, { className: "h-2 w-2" }) }) }),
                  /* @__PURE__ */ l(be, { className: "isolate z-[9999]", children: u("Collapse all") })
                ] })
              ] }),
              /* @__PURE__ */ l("div", { className: "group relative z-30 ml-5 w-full cursor-pointer", children: /* @__PURE__ */ l(
                "div",
                {
                  onClick: () => me.publish(se.OPEN_ADD_BLOCK, { position: 0 }),
                  className: "h-1 w-[90%] rounded bg-primary opacity-0 duration-200 group-hover:opacity-100",
                  children: /* @__PURE__ */ l("div", { className: "absolute left-[45%] top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-primary p-1 outline outline-2 outline-white hover:bg-primary", children: /* @__PURE__ */ l(qe, { className: "h-3 w-3 stroke-[3] text-white" }) })
                }
              ) }),
              /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(
                "div",
                {
                  role: "treeitem",
                  "aria-level": 0,
                  "aria-selected": !0,
                  "aria-expanded": !1,
                  onClick: () => n([]),
                  className: "flex min-h-[25px] items-center",
                  children: /* @__PURE__ */ b(
                    "div",
                    {
                      className: Ze(
                        "group flex h-[25px] w-full cursor-pointer items-center justify-between space-x-px px-2 py-0 outline-none",
                        e.length === 0 ? "bg-primary/20" : ""
                      ),
                      children: [
                        /* @__PURE__ */ b("div", { className: "leading-1 flex items-center", children: [
                          /* @__PURE__ */ l(js, { className: "h-3 w-3 flex-shrink-0 rotate-180" }),
                          /* @__PURE__ */ l("div", { className: "ml-1.5 flex items-center gap-x-1 truncate text-[13px]", children: "Body" })
                        ] }),
                        /* @__PURE__ */ l(gu, { node: "BODY", id: "BODY", children: /* @__PURE__ */ l("div", { className: "hidden cursor-pointer rounded bg-transparent p-px hover:bg-primary/10 group-hover:block", children: /* @__PURE__ */ l(Co, { className: "h-3 w-3" }) }) })
                      ]
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ l(
                Rf,
                {
                  ref: c,
                  height: window.innerHeight - 160,
                  className: "no-scrollbar !h-full max-w-full !overflow-y-auto !overflow-x-hidden",
                  rowClassName: "flex items-center h-full",
                  selection: e[0] || "",
                  onRename: g,
                  openByDefault: !1,
                  onMove: y,
                  data: [...m],
                  renderCursor: nv,
                  onSelect: x,
                  childrenAccessor: (C) => C.children,
                  width: "100%",
                  rowHeight: 25,
                  renderDragPreview: () => null,
                  indent: 14,
                  onContextMenu: w,
                  disableDrop: S,
                  idAccessor: "_id",
                  children: Nv
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l(Sv, {}),
    /* @__PURE__ */ l(Ev, { parentContext: p, setParentContext: f })
  ] });
}, Zr = W.forwardRef(({ className: t, orientation: e = "horizontal", decorative: n = !0, ...r }, s) => /* @__PURE__ */ l(
  Il.Root,
  {
    ref: s,
    decorative: n,
    orientation: e,
    className: j("shrink-0 bg-border", e === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", t),
    ...r
  }
));
Zr.displayName = Il.Root.displayName;
const xu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ b(
  tr.Root,
  {
    ref: n,
    className: j("relative flex w-full touch-none select-none items-center", t),
    ...e,
    children: [
      /* @__PURE__ */ l(tr.Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-neutral-300", children: /* @__PURE__ */ l(tr.Range, { className: "absolute h-full bg-neutral-900" }) }),
      /* @__PURE__ */ l(tr.Thumb, { className: "block h-4 w-4 rounded-full border border-neutral-900 bg-neutral-900 shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
xu.displayName = tr.Root.displayName;
const Tv = ({ value: t, onChange: e, disabled: n }) => {
  const [r, s] = $(t), o = pn(e, [t], 200, !0);
  return /* @__PURE__ */ l(
    xu,
    {
      min: 0,
      step: 1,
      max: 50,
      disabled: n,
      value: [Number(r.replace("px", ""))],
      onValueChange: (i) => {
        s(i[0].toString() + "px"), o(i[0].toString());
      },
      className: "flex-1 cursor-pointer"
    }
  );
}, Bv = ({ value: t, onChange: e }) => {
  const n = Ms((r) => e(r), 200);
  return /* @__PURE__ */ l(
    "div",
    {
      className: "relative flex h-6 w-6 cursor-pointer rounded-lg border border-border",
      style: { backgroundColor: t },
      children: /* @__PURE__ */ l(
        "input",
        {
          type: "color",
          value: t.startsWith("#") ? t : "#000000",
          onChange: (r) => {
            const s = r.target.value;
            /^#[0-9A-F]{6}$/i.test(s) && n(s);
          },
          className: "absolute inset-0 h-full w-full cursor-pointer rounded-lg border-0 opacity-0"
        }
      )
    }
  );
}, Iv = ({
  label: t,
  value: e,
  onChange: n
}) => {
  const r = Js(), { t: s } = K();
  return z(() => {
    r.some((o) => o.family === e) || n(r[0].family);
  }, [e, n]), /* @__PURE__ */ b("div", { className: "space-y-0.5", children: [
    /* @__PURE__ */ l(bn, { className: "mb-1 block text-xs text-gray-600", children: s(Kt(t)) }),
    /* @__PURE__ */ b(Hi, { value: e, onValueChange: n, children: [
      /* @__PURE__ */ l(Uo, { className: "h-8 w-full text-xs text-black", children: /* @__PURE__ */ l(Vi, { placeholder: s("Select font") }) }),
      /* @__PURE__ */ l(Ko, { children: r.map((o) => /* @__PURE__ */ l(Jo, { value: o.family, children: o.family }, o.family)) })
    ] })
  ] });
}, Rv = () => {
  const t = G("onSaveWebsiteData", async (c) => {
  }), [e] = Oo(), n = ne(!1), r = B(
    async (c) => {
      if (!n.current) {
        n.current = !0;
        try {
          await t(c);
        } finally {
          n.current = !1;
        }
      }
    },
    [t]
  ), s = B(
    async (c) => {
      await r({ type: "THEME", data: c ?? e });
    },
    [r, e]
  ), o = B(
    async (c) => {
      const d = c ?? Qe.get(Er);
      await r({ type: "DESIGN_TOKENS", data: d });
    },
    [r]
  ), i = Nt(s, [s], 1e3), a = Nt(o, [o], 1e3);
  return {
    saveWebsiteData: r,
    saveTheme: s,
    saveDesignTokens: o,
    debouncedSaveTheme: i,
    debouncedSaveDesignTokens: a
  };
}, Lv = {
  fontFamily: {
    heading: "Poppins",
    body: "Poppins"
  },
  borderRadius: "6px",
  colors: {
    background: ["#ffffff", "#0a0a0a"],
    foreground: ["#0a0a0a", "#fafafa"],
    primary: ["#171717", "#e5e5e5"],
    "primary-foreground": ["#fafafa", "#171717"],
    secondary: ["#f5f5f5", "#262626"],
    "secondary-foreground": ["#171717", "#fafafa"],
    muted: ["#f5f5f5", "#262626"],
    "muted-foreground": ["#737373", "#a1a1a1"],
    accent: ["#f5f5f5", "#404040"],
    "accent-foreground": ["#171717", "#fafafa"],
    destructive: ["#e7000b", "#ff6467"],
    "destructive-foreground": ["#ffffff", "#fafafa"],
    border: ["#e5e5e5", "#282828"],
    input: ["#e5e5e5", "#343434"],
    ring: ["#a1a1a1", "#737373"],
    card: ["#ffffff", "#171717"],
    "card-foreground": ["#0a0a0a", "#fafafa"],
    popover: ["#ffffff", "#262626"],
    "popover-foreground": ["#0a0a0a", "#fafafa"]
  }
}, Pv = {
  fontFamily: {
    heading: "Poppins",
    body: "Poppins"
  },
  borderRadius: "4px",
  colors: {
    background: ["#ffffff", "#000000"],
    foreground: ["#0f1419", "#e7e9ea"],
    primary: ["#1e9df1", "#1c9cf0"],
    "primary-foreground": ["#ffffff", "#ffffff"],
    secondary: ["#0f1419", "#f0f3f4"],
    "secondary-foreground": ["#ffffff", "#0f1419"],
    muted: ["#e5e5e6", "#181818"],
    "muted-foreground": ["#0f1419", "#72767a"],
    accent: ["#e3ecf6", "#061622"],
    "accent-foreground": ["#1e9df1", "#1c9cf0"],
    destructive: ["#f4212e", "#f4212e"],
    "destructive-foreground": ["#ffffff", "#ffffff"],
    border: ["#e1eaef", "#242628"],
    input: ["#f7f9fa", "#22303c"],
    ring: ["#1da1f2", "#1da1f2"],
    card: ["#f7f8f8", "#17181c"],
    "card-foreground": ["#0f1419", "#d9d9d9"],
    popover: ["#ffffff", "#000000"],
    "popover-foreground": ["#0f1419", "#e7e9ea"]
  }
}, Ov = {
  fontFamily: {
    heading: "Geist",
    body: "Geist"
  },
  borderRadius: "4px",
  colors: {
    background: ["#fdf6e3", "#002b36"],
    foreground: ["#073642", "#93a1a1"],
    primary: ["#d33682", "#d33682"],
    "primary-foreground": ["#ffffff", "#ffffff"],
    secondary: ["#2aa198", "#2aa198"],
    "secondary-foreground": ["#ffffff", "#ffffff"],
    muted: ["#93a1a1", "#586e75"],
    "muted-foreground": ["#073642", "#93a1a1"],
    accent: ["#cb4b16", "#cb4b16"],
    "accent-foreground": ["#ffffff", "#ffffff"],
    destructive: ["#dc322f", "#dc322f"],
    "destructive-foreground": ["#ffffff", "#ffffff"],
    border: ["#839496", "#586e75"],
    input: ["#839496", "#586e75"],
    ring: ["#d33682", "#d33682"],
    card: ["#eee8d5", "#073642"],
    "card-foreground": ["#073642", "#93a1a1"],
    popover: ["#eee8d5", "#073642"],
    "popover-foreground": ["#073642", "#93a1a1"]
  }
}, Dv = {
  fontFamily: {
    heading: "Poppins",
    body: "Poppins"
  },
  borderRadius: "6px",
  colors: {
    background: ["#faf9f5", "#262624"],
    foreground: ["#3d3929", "#c3c0b6"],
    primary: ["#c96442", "#d97757"],
    "primary-foreground": ["#ffffff", "#ffffff"],
    secondary: ["#e9e6dc", "#faf9f5"],
    "secondary-foreground": ["#535146", "#30302e"],
    muted: ["#ede9de", "#1b1b19"],
    "muted-foreground": ["#83827d", "#b7b5a9"],
    accent: ["#e9e6dc", "#1a1915"],
    "accent-foreground": ["#28261b", "#f5f4ee"],
    destructive: ["#141413", "#ef4444"],
    "destructive-foreground": ["#ffffff", "#ffffff"],
    border: ["#dad9d4", "#3e3e38"],
    input: ["#b4b2a7", "#52514a"],
    ring: ["#c96442", "#d97757"],
    card: ["#faf9f5", "#262624"],
    "card-foreground": ["#141413", "#faf9f5"],
    popover: ["#ffffff", "#30302e"],
    "popover-foreground": ["#28261b", "#e5e5e2"]
  }
}, Mv = {
  fontFamily: {
    heading: "Inter",
    body: "Inter"
  },
  borderRadius: "6px",
  colors: {
    background: ["#fff9f5", "#2a2024"],
    foreground: ["#3d3436", "#f2e9e4"],
    primary: ["#ff7e5f", "#ff7e5f"],
    "primary-foreground": ["#ffffff", "#ffffff"],
    secondary: ["#ffedea", "#463a41"],
    "secondary-foreground": ["#b35340", "#f2e9e4"],
    muted: ["#fff0eb", "#392f35"],
    "muted-foreground": ["#78716c", "#d7c6bc"],
    accent: ["#feb47b", "#feb47b"],
    "accent-foreground": ["#3d3436", "#2a2024"],
    destructive: ["#e63946", "#e63946"],
    "destructive-foreground": ["#ffffff", "#ffffff"],
    border: ["#ffe0d6", "#463a41"],
    input: ["#ffe0d6", "#463a41"],
    ring: ["#ff7e5f", "#ff7e5f"],
    card: ["#ffffff", "#392f35"],
    "card-foreground": ["#3d3436", "#f2e9e4"],
    popover: ["#ffffff", "#392f35"],
    "popover-foreground": ["#3d3436", "#f2e9e4"]
  }
}, $v = $s(
  () => import("./css-import-modal-20TFmVm8.js").then((t) => ({ default: t.CssImportModal }))
), vu = "chai-builder-previous-theme", Fv = [
  { shadcn_default: Lv },
  { twitter_theme: Pv },
  { solarized_theme: Ov },
  { claude_theme: Dv },
  { supabase_theme: Mv }
], zv = (t) => {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(vu, JSON.stringify(t));
    } catch (e) {
      console.warn("Failed to save previous theme to localStorage:", e);
    }
}, Hv = () => {
  if (!(typeof window > "u"))
    try {
      localStorage.removeItem(vu);
    } catch (t) {
      console.warn("Failed to clear previous theme from localStorage:", t);
    }
}, Vv = W.memo(({ className: t = "" }) => {
  const [e, n] = Ir(), [r, s] = W.useState(""), [o, i] = W.useState(!1), a = G("themePresets", {}), { hasPermission: c } = gt(), { debouncedSaveTheme: d } = Rv(), u = G("flags.importTheme", !0), p = G("flags.darkMode", !1), f = Js();
  (!a || a.length === 0) && Fv.map((N) => {
    a.push(N);
  });
  const [h, m] = Oo(), g = Rr(), { t: y } = K(), x = W.useCallback(
    (N) => {
      const E = { ...h };
      zv(E), m(N), d(), Ce.success("Theme updated", {
        action: {
          label: /* @__PURE__ */ b("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ l(ro, { className: "h-4 w-4" }),
            " Undo"
          ] }),
          onClick: () => {
            m(E), Hv(), Ce.dismiss();
          }
        },
        closeButton: !0,
        duration: 15e3
      });
    },
    [h, m, d]
  ), w = () => {
    const N = a.find((E) => Object.keys(E)[0] === r);
    if (N) {
      const E = Object.values(N)[0];
      E && typeof E == "object" && "fontFamily" in E && "borderRadius" in E && "colors" in E ? (x(E), s("")) : console.error("Invalid preset structure:", E);
    } else
      console.error("Preset not found:", r);
  }, S = (N) => {
    x(N), s("");
  }, v = Nt(
    (N, E) => {
      m(() => ({
        ...h,
        fontFamily: {
          ...h.fontFamily,
          [N.replace(/font-/g, "")]: E
        }
      })), d();
    },
    [h, d],
    200
  ), k = W.useCallback(
    (N) => {
      m(() => ({
        ...h,
        borderRadius: `${N}px`
      })), d();
    },
    [h, m, d]
  ), T = Nt(
    (N, E) => {
      m(() => {
        const I = _(h, `colors.${N}`);
        return e ? Ge(I, 1, E) : Ge(I, 0, E), {
          ...h,
          colors: {
            ...h.colors,
            [N]: I
          }
        };
      }), d();
    },
    [h, d],
    200
  ), C = (N) => /* @__PURE__ */ l("div", { className: "grid grid-cols-1", children: Object.entries(N.items).map(([E]) => {
    const I = _(h, `colors.${E}.${e ? 1 : 0}`);
    return I ? /* @__PURE__ */ b("div", { id: `theme-${E}`, className: "mt-1 flex items-center gap-x-2", children: [
      /* @__PURE__ */ l(
        Bv,
        {
          value: I,
          onChange: (L) => T(E, L)
        }
      ),
      /* @__PURE__ */ l(bn, { className: "text-xs font-normal leading-tight", children: E.split(/(?=[A-Z])/).join(" ").replace(/-/g, " ").split(" ").map((L) => L.charAt(0).toUpperCase() + L.slice(1)).join(" ") + (!E.toLowerCase().includes("foreground") && !E.toLowerCase().includes("border") && !E.toLowerCase().includes("input") && !E.toLowerCase().includes("ring") && !E.toLowerCase().includes("background") ? " Background" : "") })
    ] }, E) : null;
  }) });
  return c("edit_theme") ? /* @__PURE__ */ l("div", { className: "relative w-full", children: /* @__PURE__ */ b("div", { className: Ze("no-scrollbar h-full w-full overflow-y-auto", t), children: [
    a.length > 0 && /* @__PURE__ */ b("div", { className: "mx-0 my-2 flex flex-col gap-1 py-2", children: [
      /* @__PURE__ */ b("div", { className: "flex w-full items-center justify-between", children: [
        /* @__PURE__ */ l(bn, { className: "text-sm", children: y("Presets") }),
        /* @__PURE__ */ l("div", { className: "flex gap-2", children: u && /* @__PURE__ */ b(re, { className: "px-1", variant: "link", size: "sm", onClick: () => i(!0), children: [
          /* @__PURE__ */ l(Gp, { className: "h-4 w-4" }),
          y("Import theme")
        ] }) })
      ] }),
      /* @__PURE__ */ b("div", { className: "flex items-center gap-2 px-0", children: [
        /* @__PURE__ */ l("div", { className: "w-[70%]", children: /* @__PURE__ */ b(Hi, { value: r, onValueChange: s, children: [
          /* @__PURE__ */ l(Uo, { className: "h-9 w-full text-sm", children: /* @__PURE__ */ l(Vi, { placeholder: y("Select preset") }) }),
          /* @__PURE__ */ l(Ko, { children: Array.isArray(a) && a.map((N) => {
            const E = Object.keys(N)[0], I = E.replaceAll("_", " ");
            return /* @__PURE__ */ l(Jo, { value: E, children: $n(I) }, E);
          }) })
        ] }) }),
        /* @__PURE__ */ l("div", { className: "w-[25%]", children: /* @__PURE__ */ l(re, { className: "w-full text-sm", disabled: !r, onClick: w, children: y("Apply") }) })
      ] })
    ] }),
    /* @__PURE__ */ l(Zr, {}),
    /* @__PURE__ */ b("div", { className: Ze("my-2 space-y-3", t), children: [
      f.length > 0 ? /* @__PURE__ */ b(Q, { children: [
        /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ l(Up, { className: "h-3 w-3 text-gray-600" }),
          /* @__PURE__ */ l("span", { className: "text-xs font-medium text-gray-700", children: y("Typography") })
        ] }),
        (g == null ? void 0 : g.fontFamily) && /* @__PURE__ */ l("div", { className: "space-y-2", children: Object.entries(g.fontFamily).map(([N, E]) => /* @__PURE__ */ l(
          Iv,
          {
            label: N,
            value: h.fontFamily[N.replace(/font-/g, "")] || E[Object.keys(E)[0]],
            onChange: (I) => v(N, I)
          },
          N
        )) }),
        /* @__PURE__ */ l(Zr, {})
      ] }) : "",
      (g == null ? void 0 : g.borderRadius) && /* @__PURE__ */ b("div", { className: "space-y-0.5", children: [
        /* @__PURE__ */ b("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ l(Kp, { className: "h-3 w-3 text-gray-600" }),
            /* @__PURE__ */ l("span", { className: "text-xs font-medium text-gray-700", children: y("Border Radius") })
          ] }),
          /* @__PURE__ */ l(Pi, { variant: "secondary", className: "text-xs", children: h.borderRadius })
        ] }),
        /* @__PURE__ */ l("div", { className: "flex items-center gap-4 py-2", children: /* @__PURE__ */ l(Tv, { value: h.borderRadius, onChange: k }) })
      ] }),
      /* @__PURE__ */ l(Zr, {}),
      (g == null ? void 0 : g.colors) && /* @__PURE__ */ b("div", { className: "space-y-3", children: [
        /* @__PURE__ */ b("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ l(oo, { className: "h-3 w-3 text-gray-600" }),
            /* @__PURE__ */ l("span", { className: "text-xs font-medium text-gray-700", children: y("Colors") })
          ] }),
          p && /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ l(vl, { className: "h-4 w-4" }),
            /* @__PURE__ */ l(
              Ho,
              {
                checked: e,
                onCheckedChange: (N) => n(N),
                "aria-label": y("Toggle dark mode"),
                className: "mx-1"
              }
            ),
            /* @__PURE__ */ l(wl, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ l("div", { className: "space-y-2", children: g.colors.map((N) => /* @__PURE__ */ l("div", { children: C(N) }, N.group)) })
      ] }),
      /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l("div", { children: y("Loading...") }), children: o && u && /* @__PURE__ */ l(
        $v,
        {
          open: o,
          onOpenChange: i,
          onImport: S
        }
      ) })
    ] }),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("br", {})
  ] }) }) : /* @__PURE__ */ l("div", { className: "relative w-full", children: /* @__PURE__ */ l("div", { className: Ze("no-scrollbar h-full w-full overflow-y-auto text-center", t), children: /* @__PURE__ */ l("div", { className: "mt-10 h-full items-center justify-center gap-2 text-muted-foreground", children: /* @__PURE__ */ l("p", { className: "text-sm", children: y("You don't have permission to edit the theme. Please contact your administrator to get access.") }) }) }) });
}), jv = "Core", Wv = "Import", Gv = "Breakpoints", Uv = "Clear", Kv = "Cancel", Jv = "Yes", Yv = "Preview", Xv = "Settings", qv = "Style", Zv = "Enter SVG code here", Qv = "Remove", ew = "Choose", tw = "Cut", nw = "Copy", rw = "Paste", ow = "Delete", sw = "classes", iw = "Theme", aw = "Outline", lw = "Copied", cw = "Stop", dw = "Edit", uw = "Tag", pw = "Value", fw = "URL", hw = "Images", mw = "Library", gw = "Blocks", bw = "Basic", yw = "Media", xw = "Advanced", vw = "Form", ww = "Groups", kw = "Accordions", Cw = "Buttons", Nw = "Layouts", Sw = "FAQ", Ew = "Hero", _w = "Features", Aw = "Footer", Tw = "Navbar", Bw = "Icons", Iw = "Testimonials", Rw = "Blog", Lw = "Saved", Pw = "Unsaved", Ow = "Randomize", Dw = "Classes", Mw = "All", $w = "Undo", Fw = "Redo", zw = "Duplicate", Hw = "Close", Vw = "Selected", jw = "Select", Ww = "Attributes", Gw = "apply", Uw = "presets", Kw = "Orientation", Jw = "Color", Yw = "Upload", Xw = "Apply", qw = "Back", Zw = "Insert", Qw = "Rename", ek = "Partials", tk = "Happy", nk = "Sad", rk = "Retry", ok = "Canvas is empty", sk = "Presets", ik = "No", ak = "Saving", lk = { heading_font: "Heading Font", body_font: "Body Font", rounded_corner: "Rounded Corners", primary: "Primary", secondary: "Secondary", background: "Background", text_color: "Text Color", background_dark_mode: "Background (Dark Mode)", text_color_dark_mode: "Text Color (Dark Mode)" }, ck = { box: "box", tag: "Tag", div: "div", level: "Level", header: "header", footer: "footer", section: "section", article: "article", aside: "aside", main: "main", nav: "navigation", figure: "figure", details: "details", summary: "summary", dialog: "dialog", strike: "strike", caption: "caption", legend: "legend", figcaption: "figure caption", mark: "mark", background_image: "Background Image", label: "Label", default: "default", icon_size: "Icon Size", icon_position: "Icon Position", start: "Start", end: "End", button: "Button", custom_html: "Custom HTML", html_code: "HTML Code", default_snippet: "The HTML snippet goes here...", placeholder: "Enter custom HTML code here", custom_script: "Custom Script", dark_mode: "Dark Mode", divider: "Divider", empty_box: "Empty Box", heading: "Heading", image: "Image", alt: "Alt", width: "Width", height: "Height", video: "Video", span: "Span", content: "Content", icon: "Icon", richtext: "Rich Text", list: "List", list_type: "List Type", listitem: "List Item", link: "Link", list_item: "List Item", none: "None", disc: "Disc", number: "Number", paragraph: "Paragraph", lightbox_link: "Lightbox Link", href: "Link", type: "Type", iframe: "iframe", inline: "inline", ajax: "ajax", autoplay: "Video autoplay", max_width: "Max Width", backdrop_color: "Background Color", gallery_name: "Gallery Name", slot: "Slot", empty_slot: "Empty Slot", text: "Text", video_url: "Video URL", controls: "Show Controls", loop: "Loop", muted: "Muted", checkbox: "Checkbox", required: "Required", checked: "Checked", submit_button: "Submit Button", form: "Form", submit_url: "Submit URL", error_message: "Error Message", success_message: "Success Message", input: "Input", value: "Value", show_label: "Show Label", field_name: "Field Name", radio: "Radio", multiple: "Multiple", options: "Options", select: "Select", multiple_choice: "Multiple Choice", textarea: "Textarea", rows: "Rows" }, dk = "Add", uk = "Save", pk = "Screen", fk = {
  "Add block": "Add Block",
  "Add Block": "Add Block",
  "Add blocks": "Add blocks",
  "Add inside": "Add inside",
  "Add before": "Add before",
  "Add after": "Add after",
  "Add block inside": "Add block inside",
  "Add field": "Add field",
  "Enter or paste TailwindCSS HTML snippet": "Enter or paste TailwindCSS HTML snippet",
  "Click to add block to page": "Click to add block to page",
  Core: jv,
  "Custom Blocks": "Custom Blocks",
  "UI Library": "UI Library",
  Import: Wv,
  "Use HTML snippets from Tailwind CSS component libraries": "Use HTML snippets from Tailwind CSS component libraries",
  "Tailwind HTML snippet": "Tailwind HTML snippet",
  "Enter your code snippet here": "Enter your code snippet here",
  "Import HTML": "Import HTML",
  "Imported HTML Note": "NOTE: Imported html will be added to the currently selected block. If no block is selected, the html will be added to the page.",
  "Dark Mode": "Dark Mode",
  "This page has no blocks. Add a block by clicking the + button": "This page has no blocks. Add a block by clicking the + button",
  "This page is empty": "This page is empty",
  "Please select a block to edit settings or styles": "Please select a block to edit settings or styles",
  "Please select a block to Ask AI": "Please select a block to ask AI",
  "Please select a styling block": "Please select a styling block",
  "Drop your block here": "Drop your block here",
  "Use setting": "Use setting",
  "Mobile (XS)": "Mobile (XS)",
  "Styles set here are applied to all screen unless edited at higher breakpoint": "Styles set here are applied to all screen unless edited at higher breakpoint",
  "Mobile landscape (SM)": "Mobile landscape (SM)",
  "Styles set here are applied at 640px and up unless edited at higher breakpoint": "Styles set here are applied at 640px and up unless edited at higher breakpoint",
  "Tablet (MD)": "Tablet (MD)",
  "Styles set here are applied at 768px and up": "Styles set here are applied at 768px and up",
  "Tablet Landscape (LG)": "Tablet Landscape (LG)",
  "Styles set here are applied at 1024px and up unless edited at higher breakpoint": "Styles set here are applied at 1024px and up unless edited at higher breakpoint",
  "Desktop (XL)": "Desktop (XL)",
  "Styles set here are applied at 1280px and up unless edited at higher breakpoint": "Styles set here are applied at 1280px and up unless edited at higher breakpoint",
  "Large Desktop (2XL)": "Large Desktop (2XL)",
  "Styles set here are applied at 1536px and up": "Styles set here are applied at 1536px and up",
  Breakpoints: Gv,
  Clear: Uv,
  "Clear whole canvas?": "Clear whole canvas?",
  "Are you sure you want to clear the whole canvas?": "Are you sure you want to clear the whole canvas?",
  Cancel: Kv,
  Yes: Jv,
  Preview: Yv,
  Settings: Xv,
  Styling: qv,
  SVG_code: Zv,
  "Paste SVG_code": "Choose icon or paste SVG code",
  "Enter Key": "Enter Key",
  "Data Provider": "Data Provider",
  "Remove Provider Confirmation": "Are you sure you want to remove <span class='text-blue-500'>{name}</span> provider?",
  "Your data provider will be removed from this page and all added data binding will be not visible on blocks.": "Your data provider will be removed from this page and all added data binding will be not visible on blocks.",
  Remove: Qv,
  "You have no data providers registered. Please add a data provider to your project.": "You have no data providers registered. Please add a data provider to your project.",
  "Learn more": "Learn more",
  "Add data providers:": "Add data providers:",
  "Select a provider": "Select a provider",
  Choose: ew,
  "Page data providers:": "Page data providers:",
  "View Data": "View Data",
  "Mark as Global": "Mark as Global",
  "Note: Global blocks are single instances. Editing global blocks will be reflected on all pages using these blocks.": "Note: Global blocks are single instances. Editing global blocks will be reflected on all pages using these blocks.",
  "Global blocks are indicated with": "Global blocks are indicated with",
  "Global blocks are available under 'Global' category": "Global blocks are available under 'Global' category",
  "Enter global block name": "Enter global block name",
  "Eg: Header, Footer": "Eg: Header, Footer",
  "{length} blocks selected.": "{length} blocks selected.",
  Cut: tw,
  Copy: nw,
  Paste: rw,
  Delete: ow,
  "Clear Selection": "Clear Selection",
  "This is dev mode. Visit": "This is dev mode. Visit",
  "to see page preview": "to see page preview",
  classes: sw,
  Theme: iw,
  Outline: aw,
  "Not supported": "Not supported",
  "Please use Chrome, Firefox or Safari": "Please use Chrome, Firefox or Safari",
  "Download Complete": "Download complete",
  Copied: lw,
  "Enter Classes": "Add classes or design tokens (space-separated)",
  "Ask AI": "Ask AI",
  "Edit with AI": "Edit with AI",
  "Generating... Please wait...": "Generating... Please wait...",
  "Saving... Please wait...": "Saving... Please wait...",
  "Deleting... Please wait...": "Deleting... Please wait...",
  Stop: cw,
  "E.g.: This page is about an AI assistant app called Chai Studio. It allows users to create beautiful webpages and edit content with AI": "E.g.: This page is about an AI assistant app called Chai Studio. It allows users to create beautiful webpages and edit content with AI.",
  "Ask AI to edit styles": "Ask AI to edit styles",
  "Ask AI to edit content": "Ask AI to edit content",
  "AI Context": "AI Context",
  "Select Block for AI": "Select a block to edit with AI",
  "Select Block to Edit": "Please select a block to edit",
  Edit: dw,
  "Describe this page. E.g.: This page is about...": "Describe this page. E.g.: This page is about...",
  Tag: uw,
  Value: pw,
  "Background Image": "Background Image",
  "Enter image URL": "Enter image URL",
  "Enter URL": "Enter URL",
  URL: fw,
  "Replace image": "Replace image",
  "Choose image": "Choose image",
  Images: hw,
  Library: mw,
  Blocks: gw,
  Basic: bw,
  Media: yw,
  Advanced: xw,
  Form: vw,
  "Choose Icon or SVG": "Choose an icon or enter SVG",
  Groups: ww,
  "UI Libraries": "UI Libraries",
  Accordions: kw,
  Buttons: Cw,
  Layouts: Nw,
  "Choose Library": "Choose library",
  "No Library Found": "No library found.",
  FAQ: Sw,
  Hero: Ew,
  Features: _w,
  Footer: Aw,
  Navbar: Tw,
  Icons: Bw,
  Testimonials: Iw,
  Blog: Rw,
  "Remove context": "Remove context",
  "Yes, Delete": "Yes, Delete",
  "AI Context Updated": "AI Context Updated",
  "You can now ask AI to edit your content.": "You can now ask AI to edit your content.",
  Saved: Lw,
  Unsaved: Pw,
  "Saving...": "Saving...",
  "Improve writing": "Improve writing",
  "Replace placeholder content": "Replace placeholder content",
  "Discard current placeholder content and replace with meaningful relevant content.": "Discard current placeholder content and replace with meaningful relevant content.",
  "Fix grammar": "Fix grammar",
  "Fix grammar in all text elements. Ensuring the text is grammatically correct and free of errors.": "Fix grammar in all text elements. Ensuring the text is grammatically correct and free of errors.",
  "Make longer": "Make longer",
  "Make all text elements longer.": "Make all text elements longer.",
  "Make shorter": "Make shorter",
  "Make all text elements shorter.": "Make all text elements shorter.",
  "Add emojis": "Add emojis",
  "Add emojis to text elements if relevant.": "Add emojis to text elements if relevant.",
  Randomize: Ow,
  "Randomize all text elements.": "Randomize all text elements.",
  "Edit Block": "Edit Block",
  "AI Assistant": "AI Assistant",
  "Generate with AI": "Generate with AI",
  "Theme Config": { "Heading Font": "Heading Font", "Body Font": "Body Font", "Rounded Corner": "Rounded Corners", Primary: "Primary", Secondary: "Secondary", Background: "Background", "Text Color": "Text Color", "Background Dark Mode": "Background (Dark Mode)", "Text Color Dark Mode": "Text Color (Dark Mode)", "Reset styles": "Reset styles" },
  "Copy classes to clipboard": "Copy classes to clipboard",
  "Classes copied to clipboard": "Classes copied to clipboard",
  Classes: Dw,
  All: Mw,
  "Enter classes separated by space": "Add classes (space-separated)",
  "Enter classes separated by space or design tokens": "Add classes or design tokens (space-separated)",
  "Show hidden blocks": "Show hidden blocks",
  "Expand all": "Expand all",
  "Collapse all": "Collapse all",
  "Choose library": "Choose library",
  "Close Preview": "Close Preview",
  Error: "Error",
  "Failed to copy template": "Failed to copy template",
  "Total tokens used": "Total tokens used",
  "Updated AI Context": "Updated AI Context",
  "You can now Ask AI to edit your content": "You can now Ask AI to edit your content",
  "Tell about this page eg this page is about": "Tell about this page eg this page is about..",
  "Delete Context": "Delete Context",
  "Keyboard shortcuts": "Keyboard shortcuts",
  Undo: $w,
  Redo: Fw,
  Duplicate: zw,
  "Deselect blocks": "Deselect blocks",
  "Delete block": "Delete block",
  "Save page": "Save page",
  "Scripts will be only executed in preview and live mode.": "Scripts will be only executed in preview and live mode.",
  "HTML Code Editor |": "HTML Code Editor |",
  Close: Hw,
  "Coming soon": "Coming soon",
  Selected: Vw,
  Select: jw,
  "Choose Builder Layout": "Choose Builder Layout",
  "Single side panel": "Single side panel",
  "Suitable for smaller screens. Bigger canvas size.": "Suitable for smaller screens. Bigger canvas size.",
  "Dual side panel": "Dual side panel",
  "Suitable for larger screens. Smaller canvas size.": "Suitable for larger screens. Smaller canvas size.",
  "Dual side panel advanced": "Dual side panel advanced",
  "Suitable for heavy styling & block editing. Setting are always visible.": "Suitable for heavy styling & block editing. Setting are always visible.",
  "Block Settings": "Block Settings",
  "Visibility settings": "Visibility settings",
  "Show on canvas": "Show on canvas",
  Attributes: Ww,
  "Apply Presets": "Apply Presets",
  apply: Gw,
  presets: Uw,
  "Global presets": "Global presets",
  Orientation: Kw,
  Color: Jw,
  "Please select an image": "Please select an image",
  "click to upload": "click to upload",
  "SVG, PNG, JPG or GIF (Max. 2mb)": "SVG, PNG, JPG or GIF (Max. 2mb)",
  "Uploading...": "Uploading...",
  Upload: Yw,
  "Something went wrong": "Something went wrong",
  "Fetching...": "Fetching...",
  "No images found": "No images found",
  "It looks like you haven't uploaded any images yet. Start by clicking the upload button above.": "It looks like you haven't uploaded any images yet. Start by clicking the upload button above.",
  "Open Code Editor": "Open Code Editor",
  "Clear search": "Clear search",
  "No results found for": "No results found for",
  "Search {{pageTypeName}}": "Search {{pageTypeName}}",
  "Goto Page": "Goto Page",
  "Open URL": "Open URL",
  "Compose Email": "Compose Email",
  "Call Phone": "Call Phone",
  "Scroll to element": "Scroll to element",
  "#ElementID": "#ElementID",
  "Enter details": "Enter details",
  "Open in new tab": "Open in new tab",
  Apply: Xw,
  Back: qw,
  Insert: Zw,
  Rename: Qw,
  "Unlink from library": "Unlink from library",
  "Save to Library": "Save to Library",
  "No blocks found in this group": "No blocks found in this group",
  "No blocks found matching": "No blocks found matching",
  "No matching blocks found": "No matching blocks found",
  "Search blocks...": "Search blocks...",
  Partials: ek,
  Happy: tk,
  Sad: nk,
  "Importing...": "Importing...",
  "Failed to load the UI library. Try again": "Failed to load the UI library. Try again",
  Retry: rk,
  "Oops! Something went wrong.": "Oops! Something went wrong.",
  "Please try again.": "Please try again.",
  "No option found.": "No option found.",
  "Clipboard not supported": "Clipboard not supported",
  "Are you sure you want to clear the page?": "Are you sure you want to clear the page?",
  canvas_empty: ok,
  Presets: sk,
  "Reset style": "Reset style",
  "Reset styles": "Reset styles",
  "Clear styles": "Clear styles",
  "Open code editor": "Open code editor",
  "Style element": "Style element",
  "Repeater Data": "Repeater Data",
  "Toggle Data Binding": "Toggle Data Binding",
  No: ik,
  Saving: ak,
  "Screen sizes": "Screen sizes",
  "Theme Settings": "Theme Settings",
  "Import CSS Theme": "Import CSS Theme",
  "Import theme": "Import theme",
  "Import Theme": "Import Theme",
  "CSS Variables": "CSS Variables",
  "You don't have permission to edit settings or styles": "You don't have permission to edit settings or styles",
  "Please contact your administrator to get access": "Please contact your administrator to get access",
  "flex.heading": "Flex Child",
  "flex.basis": "Basis",
  "flex.order": "Order",
  "flex.flex": "Flex",
  "flex.grow": "Grow",
  "flex.shrink": "Shrink",
  "grid.heading": "Grid Child",
  "grid.col_span": "Col Span",
  "grid.col_start": "Col Start",
  "grid.col_end": "Col End",
  "grid.row_span": "Row Span",
  "grid.row_start": "Row Start",
  "grid.row_end": "Row End",
  "grid.order": "Order",
  "layout.heading": "Layout",
  "layout.width": "Width",
  "layout.height": "Height",
  "layout.margin": "Margin",
  "layout.margin_all": "All",
  "layout.margin_lr": "Left-Right",
  "layout.margin_tb": "Top-Bottom",
  "layout.margin_top": "Top",
  "layout.margin_right": "Right",
  "layout.margin_bottom": "Bottom",
  "layout.margin_left": "Left",
  "layout.padding": "Padding",
  "layout.padding_all": "All",
  "layout.padding_lr": "Left-Right",
  "layout.padding_tb": "Top-Bottom",
  "layout.padding_top": "Top",
  "layout.padding_right": "Right",
  "layout.padding_bottom": "Bottom",
  "layout.padding_left": "Left",
  "layout.space_bt": "Space Bt.",
  "layout.space_lr": "Left-Right",
  "layout.space_tb": "Top-Bottom",
  "size.heading": "Size",
  "size.min_width_height": "Min width & height",
  "size.min_width": "Min Width",
  "size.min_height": "Min Height",
  "size.max_width_height": "Max width & height",
  "size.max_width": "Max Width",
  "size.max_height": "Max Height",
  "size.object_options_aspect_ratio": "Object options & aspect ratio",
  "size.aspect": "Aspect",
  "size.fit": "Fit",
  "size.position": "Position",
  "display.heading": "Display",
  "display.display": "Display",
  "display.flex_options": "Flex options",
  "display.flex_direction": "Direction",
  "display.flex_wrap": "Wrap",
  "display.justify_content": "Justify",
  "display.align_content": "Content",
  "display.align_items": "Items",
  "display.gap": "Gap",
  "display.gap_all": "All",
  "display.gap_lr": "Left-Right",
  "display.gap_tb": "Top-Bottom",
  "display.grid_options": "Grid options",
  "display.grid_columns": "Columns",
  "display.grid_rows": "Rows",
  "display.grid_auto_flow": "Auto Flow",
  "display.grid_auto_cols": "Auto Cols",
  "display.grid_auto_rows": "Auto Rows",
  "display.visibility_opacity": "Visibility & Opacity",
  "display.visibility": "Visibility",
  "display.opacity": "Opacity",
  "position.heading": "Position",
  "position.position": "Position",
  "position.options": "Position options",
  "position.direction": "Direction",
  "position.top": "Top",
  "position.right": "Right",
  "position.bottom": "Bottom",
  "position.left": "Left",
  "position.inset": "Inset",
  "position.all": "All",
  "position.lr": "Left Right",
  "position.tb": "Top Bottom",
  "position.z_index": "Z-Index",
  "position.float_clear": "Float & Clear",
  "position.float": "Float",
  "position.clear": "Clear",
  "position.overflow_overscroll": "Overflow & Overscroll",
  "position.overflow": "Overflow",
  "position.overscroll": "Overscroll",
  "typography.heading": "Typography",
  "typography.font": "Font",
  "typography.size": "Size",
  "typography.height": "Height",
  "typography.weight": "Weight",
  "typography.color": "Color",
  "typography.alignments": "Alignments",
  "typography.align": "Align",
  "typography.valign": "V. Align",
  "typography.spacing_decoration_more": "Spacing, decoration & more",
  "typography.spacing": "Spacing",
  "typography.decoration": "Decoration",
  "typography.thickness": "Thickness",
  "typography.transform": "Transform",
  "typography.whitespace_breaks": "White space & breaks",
  "typography.whitespace": "Whitespace",
  "typography.wordbreak": "Wordbreak",
  "background.heading": "Background",
  "background.bgcolor": "Bg. Color",
  "background.position_size_more": "Position, Size & more",
  "background.attachment": "Attachment",
  "background.clipping": "Clipping",
  "background.origin": "Origin",
  "background.position": "Position",
  "background.repeat": "Repeat",
  "background.size": "Size",
  "background.gradient": "Gradient",
  "background.gradient_colors": "Gradient colors",
  "background.from_color": "From",
  "background.via_color": "Via",
  "background.to_color": "To",
  "border.heading": "Border & Outline",
  "border.width": "Width",
  "border.all": "All",
  "border.lr": "Left Right",
  "border.tb": "Top bottom",
  "border.top": "Top",
  "border.right": "Right",
  "border.bottom": "Bottom",
  "border.left": "Left",
  "border.corners": "Corners",
  "border.top_left": "Top Left",
  "border.top_right": "Top right",
  "border.bottom_right": "Bottom right",
  "border.bottom_left": "Bottom left",
  "border.color": "Color",
  "border.style": "Style",
  "border.divide_options": "Divide options",
  "border.divide_color": "Color",
  "border.divide_style": "Style",
  "border.outline_styling": "Outline styling",
  "border.outline_width": "Width",
  "border.outline_offset": "Offset",
  "border.outline_style": "Style",
  "border.ring_options": "Ring options",
  "border.ring_width": "Width",
  "border.ring_color": "Color",
  "border.ring_offset_width": "Offset",
  "border.ring_offset_color": "Off. color",
  "effect.heading": "Effect & Animation",
  "effect.shadow": "Shadow",
  "effect.color": "Color",
  "effect.cursor": "Cursor",
  "effect.blend_cursor": "Blend & Cursor",
  "effect.mix_blend": "Mix Blend",
  "effect.bg_blend": "Bg. Blend",
  "effect.transform": "Transform",
  "effect.origin": "Origin",
  "effect.scale": "Scale",
  "effect.all": "All",
  "effect.lr": "Left-Right",
  "effect.tb": "Top-Bottom",
  "effect.skew": "Skew",
  "effect.translate": "Translate",
  "effect.rotate": "Rotate",
  "effect.animation": "Animation",
  "effect.transition": "Transition",
  "effect.easing": "Easing",
  "effect.duration": "Duration",
  "effect.delay": "Delay",
  "classes.heading": "Classes",
  theme_config: lk,
  web_blocks: ck,
  "Export Code": "Export Code",
  "Exporting {{count}} blocks": "Exporting {{count}} blocks",
  "Exporting all blocks": "Exporting all blocks",
  "Export code copied!": "Export code copied!",
  "Failed to copy export code": "Failed to copy export code",
  "Export code downloaded successfully!": "Export code downloaded successfully!",
  "Failed to generate export HTML": "Failed to generate export HTML",
  "Enter value": "Enter value",
  "Attribute keys cannot start with @": "Attribute keys cannot start with @",
  "Enter key": "Enter key",
  Add: dk,
  Save: uk,
  Screen: pk
};
xs.use(Qp).init({
  // the translations
  // (tip move them in a JSON file and import them,
  // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
  resources: {
    en: {
      translation: fk
    }
  },
  lng: "en",
  // if you're using a language detector, do not define the lng option
  fallbackLng: "en",
  interpolation: {
    escapeValue: !1
    // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  }
});
function hk(t, e, n) {
  n.push(ee(t, { _id: e }));
  const r = Z(t, { _parent: e });
  for (const s of r)
    n.push(...wu(s._id, t));
  return n;
}
const wu = (t, e) => {
  let n = [];
  return n = Ot([...n, ...hk(e, t, n)]), n;
}, mk = (t, e, n) => jn(
  t.map((r) => {
    const s = ["_id", "_type", "_parent"], o = dn(r, s), i = Pe(r._type), a = {}, c = _(i, "aiProps", []);
    for (const d in r)
      if (!s.includes(d) && c.includes(d)) {
        const u = _(r, `${d}-${e}`, ""), p = _(r, d, "");
        a[d] = Ct(u) && u.trim() || p, n && (a[d] = p);
      }
    return F(a) ? !1 : (le(o, "_parent") && F(o._parent) && delete o._parent, { ...o, ...a });
  })
), gk = (t, e, n) => !e || n !== "content" ? t : `${t}. Generate content in ${_(Vn, e, e)} language.`, bk = P(!1), ku = () => {
  const [t, e] = D(bk), [n, r] = $(null), s = G("askAiCallBack", wt), o = sh(), i = rh(), [a] = ue(), { selectedLang: c, fallbackLang: d } = Je(), u = c.length ? c : d, p = (f, h) => {
    const m = to(h.find((g) => g._id === f));
    for (const g in m) {
      const y = m[g];
      if (typeof y == "string" && Re(y, St)) {
        const { baseClasses: x, classes: w } = vn(y);
        m[g] = jn(Ot([x, w])).join(" ");
      } else
        g !== "_id" && delete m[g];
    }
    return m;
  };
  return {
    askAi: B(
      async (f, h, m, g) => {
        if (s) {
          e(!0), r(null);
          try {
            const y = c === d ? "" : c, x = m.toLowerCase().includes("translate the content"), w = f === "content" ? mk(to(wu(h, a)), c, x) : [p(h, a)], S = await s(f, gk(m, u, f), w, y);
            if (S === void 0) return;
            const { blocks: v, error: k } = S;
            if (k) {
              r(k);
              return;
            }
            if (f === "styles") {
              const T = v.map((C) => {
                for (const N in C)
                  N !== "_id" && (C[N] = `${St},${C[N]}`);
                return C;
              });
              i(T);
            } else
              o(v);
            g && g(S);
          } catch (y) {
            r(y);
          } finally {
            e(!1), g && g();
          }
        }
      },
      [
        s,
        e,
        c,
        d,
        a,
        u,
        i,
        o
      ]
    ),
    loading: t,
    error: n
  };
};
function yk({ onClick: t }) {
  const { loading: e } = ku(), { t: n } = K(), { selectedLang: r, fallbackLang: s } = Je(), i = [...[
    {
      name: n("Improve writing"),
      icon: ko,
      prompt: n(
        "Improving writing in all text elements. Replacing placeholder content with meaningful relevant content."
      )
    },
    {
      name: n("Replace placeholder content"),
      icon: ml,
      prompt: n("Discard current placeholder content and replace with meaningful relevant content.")
    },
    {
      name: n("Fix grammar"),
      icon: Nr,
      prompt: n("Fix grammar in all text elements. Ensuring the text is grammatically correct and free of errors.")
    },
    {
      name: n("Make longer"),
      icon: qt,
      prompt: n("Make all text elements longer.")
    },
    {
      name: n("Make shorter"),
      icon: Rn,
      prompt: n("Make all text elements shorter.")
    },
    {
      name: n("Add emojis"),
      icon: Jp,
      prompt: n("Add emojis to text elements if relevant.")
    },
    {
      name: n("Randomize"),
      icon: Yp,
      prompt: n("Randomize all text elements.")
    }
  ]];
  return r && r !== s && i.splice(0, 0, {
    name: n("Translate to {{lang}}", { lang: _(Vn, r, r) }),
    icon: Xp,
    prompt: n("Translate the content to {{lang}}. Maintain same tone, style and length.", {
      lang: _(Vn, r, r)
    })
  }), /* @__PURE__ */ l("div", { className: e ? "pointer-events-none opacity-50" : "", children: /* @__PURE__ */ l("ul", { className: "space-y-1", children: i.map(
    ({ name: a, icon: c, subMenus: d, prompt: u }) => d ? /* @__PURE__ */ b(Oi, { children: [
      /* @__PURE__ */ l(Di, { asChild: !0, children: /* @__PURE__ */ b(
        "li",
        {
          className: "flex cursor-pointer items-center space-x-2 rounded p-1 pl-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800",
          children: [
            /* @__PURE__ */ l(c, { className: "h-4 w-4" }),
            /* @__PURE__ */ l("span", { children: a })
          ]
        },
        a
      ) }),
      /* @__PURE__ */ l(zo, { side: "right", children: /* @__PURE__ */ l("ul", { children: /* @__PURE__ */ l("li", { children: n("Happy") }) }) })
    ] }) : /* @__PURE__ */ b(
      "li",
      {
        onClick: () => t(u),
        className: "flex cursor-pointer items-center space-x-2 rounded p-1 text-xs hover:bg-primary/10 hover:text-primary dark:hover:bg-gray-800",
        children: [
          /* @__PURE__ */ l(c, { className: "h-3.5 w-3.5" }),
          /* @__PURE__ */ l("span", { children: n(a) })
        ]
      },
      a
    )
  ) }) });
}
const xk = ({ blockId: t }) => {
  const { t: e } = K(), { askAi: n, loading: r, error: s } = ku(), [o, i] = $(""), a = ne(null), c = ne(null), d = ae();
  z(() => {
    var p;
    (p = a.current) == null || p.focus();
  }, []);
  const u = () => {
    s || i("");
  };
  return /* @__PURE__ */ l("div", { className: "", children: t ? /* @__PURE__ */ b("div", { className: "", children: [
    /* @__PURE__ */ l("label", { className: "text-xs font-medium text-gray-500", children: e("Selected block") }),
    d && /* @__PURE__ */ b("div", { className: "flex items-center gap-x-1 rounded border border-primary/20 bg-primary/10 p-1.5 text-xs text-primary", children: [
      /* @__PURE__ */ l(bu, { type: d._type }),
      " ",
      /* @__PURE__ */ l("p", { className: "truncate whitespace-nowrap leading-none", children: d._name || d._type })
    ] }),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("label", { className: "text-xs font-medium text-gray-500", children: e("Quick actions") }),
    /* @__PURE__ */ l("div", { className: "rounded border p-2 text-sm", children: /* @__PURE__ */ l(
      yk,
      {
        onClick: (p) => {
          c.current && clearTimeout(c.current), n("content", t, p, u);
        }
      }
    ) }),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("label", { className: "text-xs font-medium text-gray-500", children: e("Ask AI") }),
    /* @__PURE__ */ b("div", { className: "rounded border p-2 text-xs focus-within:border-gray-300", children: [
      /* @__PURE__ */ l(
        Go,
        {
          ref: a,
          value: o,
          onChange: (p) => i(p.target.value),
          placeholder: e("Ask AI to edit content"),
          className: "w-full resize-none border-none p-0 text-xs shadow-none outline-none",
          rows: 3,
          onKeyDown: (p) => {
            p.key === "Enter" && (p.preventDefault(), c.current && clearTimeout(c.current), n("content", t, o, u));
          }
        }
      ),
      /* @__PURE__ */ b("div", { className: "flex items-center justify-end", children: [
        r && /* @__PURE__ */ l(re, { variant: "destructive", onClick: () => stop(), className: "hidden h-4 w-4", size: "icon", children: /* @__PURE__ */ l(qp, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ l(
          re,
          {
            onClick: () => {
              c.current && clearTimeout(c.current), n("content", t, o, u);
            },
            variant: "default",
            className: "h-7 w-7",
            disabled: r || o.trim().length < 1,
            size: "icon",
            children: r ? /* @__PURE__ */ l(Vs, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ l(bl, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l("div", { className: "max-w-full pt-2", children: s && /* @__PURE__ */ l("p", { className: "break-words rounded border border-red-500 bg-red-100 p-1 text-xs text-red-500", children: s.message }) })
  ] }) : /* @__PURE__ */ l("div", { className: "p-4 text-center", children: /* @__PURE__ */ b("div", { className: "space-y-4 rounded-xl p-4 text-muted-foreground", children: [
    /* @__PURE__ */ l(Ys, { className: "mx-auto h-7 w-7 text-muted-foreground" }),
    /* @__PURE__ */ l("h1", { children: e("Please select a block to Ask AI") })
  ] }) }) });
}, Cu = () => {
  const [t] = oe();
  return /* @__PURE__ */ l("div", { className: "no-scrollbar mt-2 flex-1 overflow-y-auto", children: /* @__PURE__ */ l(xk, { blockId: ye(t) }) });
};
function iC() {
  const [t, e] = Ir();
  return /* @__PURE__ */ b("div", { className: "flex items-center", children: [
    t ? /* @__PURE__ */ l(wl, { className: "size-4 shrink-0" }) : /* @__PURE__ */ l(vl, { className: "size-4 shrink-0" }),
    /* @__PURE__ */ l(
      Ho,
      {
        id: "dark-mode-switch",
        checked: t,
        onCheckedChange: () => {
          e(!t);
        },
        className: `${t ? "bg-violet-600" : "bg-violet-300"} relative ml-2 inline-flex h-[20px] w-[32px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`,
        children: /* @__PURE__ */ l(
          "span",
          {
            "aria-hidden": "true",
            className: `${t ? "translate-x-5" : "translate-x-0"} pointer-events-none -mt-px inline-block h-[18px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`
          }
        )
      }
    )
  ] });
}
const aC = () => {
  const { hasUndo: t, hasRedo: e, undo: n, redo: r } = Ar();
  return /* @__PURE__ */ b("div", { className: "flex items-center", children: [
    /* @__PURE__ */ l(re, { disabled: !t(), size: "sm", onClick: n, className: "rounded-full", variant: "ghost", children: /* @__PURE__ */ l(ro, {}) }),
    /* @__PURE__ */ l(re, { disabled: !e(), onClick: r, size: "sm", className: "rounded-full", variant: "ghost", children: /* @__PURE__ */ l(ro, { className: "rotate-180 scale-y-[-1] transform" }) })
  ] });
}, vk = xe.Root, wk = xe.Portal, Nu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  xe.Overlay,
  {
    className: j(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      t
    ),
    ...e,
    ref: n
  }
));
Nu.displayName = xe.Overlay.displayName;
const kk = Us(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), Su = W.forwardRef(
  ({ side: t = "right", className: e, children: n, ...r }, s) => /* @__PURE__ */ b(wk, { children: [
    /* @__PURE__ */ l(Nu, {}),
    /* @__PURE__ */ b(xe.Content, { ref: s, className: j(kk({ side: t }), e), ...r, children: [
      /* @__PURE__ */ b(xe.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
        /* @__PURE__ */ l(at, { className: "h-4 w-4" }),
        /* @__PURE__ */ l("span", { className: "sr-only", children: "Close" })
      ] }),
      n
    ] })
  ] })
);
Su.displayName = xe.Content.displayName;
const Eu = ({ className: t, ...e }) => /* @__PURE__ */ l("div", { className: j("flex flex-col space-y-2 text-center sm:text-left", t), ...e });
Eu.displayName = "SheetHeader";
const _u = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(xe.Title, { ref: n, className: j("text-lg font-semibold text-foreground", t), ...e }));
_u.displayName = xe.Title.displayName;
const Ck = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(xe.Description, { ref: n, className: j("text-sm text-muted-foreground", t), ...e }));
Ck.displayName = xe.Description.displayName;
const Nk = () => {
  const { t } = K(), [e, n] = $(null), [r, s] = $(-1), [o, i] = $(!1), a = bt(), [, c] = yi();
  return Dn(se.OPEN_ADD_BLOCK, (d) => {
    a ? c("add-block") : (n(d ? d._id : null), s((d == null ? void 0 : d.position) ?? -1), i(!0));
  }), Dn(se.CLOSE_ADD_BLOCK, () => {
    n(null), s(-1), i(!1);
  }), /* @__PURE__ */ l(du, { open: o, onOpenChange: () => o ? i(!1) : "", children: /* @__PURE__ */ b(ji, { className: "max-w-5xl overflow-hidden border-border", children: [
    /* @__PURE__ */ b(Wi, { className: "flex flex-row items-center justify-between", children: [
      /* @__PURE__ */ l(Gi, { className: "text-foreground", children: t("Add blocks") }),
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => i(!1),
          className: "text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
          children: /* @__PURE__ */ l(No, { className: "h-6 w-6" })
        }
      )
    ] }),
    /* @__PURE__ */ l("div", { className: "no-scrollbar h-[500px] max-h-full overflow-hidden", children: /* @__PURE__ */ l(cu, { parentId: e ?? "", position: r, showHeading: !1 }) })
  ] }) });
}, Sk = te.memo(function({
  preloadedAttributes: e = [],
  onAttributesChange: n
}) {
  const [r, s] = $([]), [o, i] = $(""), [a, c] = $(""), [d, u] = $(null), [p, f] = $(""), h = ne(null), m = ne(null), g = Un(), { t: y } = K();
  z(() => {
    s(e);
  }, [e]);
  const x = () => {
    if (o.startsWith("@")) {
      f(y("Attribute keys cannot start with @"));
      return;
    }
    if (o) {
      const C = [...r, { key: o, value: a }];
      n == null || n(C), s(r), i(""), c(""), f("");
    }
  }, w = (C) => {
    const N = r.filter((E, I) => I !== C);
    n == null || n(N), s(N);
  }, S = (C) => {
    u(C), i(r[C].key), c(r[C].value);
  }, v = () => {
    if (o.startsWith("@")) {
      f(y("Attribute keys cannot start with @"));
      return;
    }
    if (d !== null && o) {
      const C = [...r];
      C[d] = { key: o, value: a }, n == null || n(C), s(C), u(null), i(""), c(""), f("");
    }
  }, k = (C) => {
    C.key === "Enter" && !C.shiftKey && (C.preventDefault(), d !== null ? v() : x());
  }, T = B((C) => {
    const N = (L) => /[.,!?;:]/.test(L), E = (L, R, V) => {
      let J = "", q = "";
      const ve = R > 0 ? L[R - 1] : "", we = R < L.length ? L[R] : "";
      return R > 0 && (ve === "." || !N(ve) && ve !== " ") && (J = " "), R < L.length && !N(we) && we !== " " && (q = " "), {
        text: J + V + q,
        prefixLength: J.length,
        suffixLength: q.length
      };
    }, I = m.current;
    if (I) {
      const L = I.selectionStart || 0, R = I.value || "", V = I.selectionEnd || L;
      if (V > L) {
        const fe = `{{${C}}}`, { text: ze } = E(R, L, fe), Y = R.slice(0, L) + ze + R.slice(V);
        c(Y);
        return;
      }
      const q = `{{${C}}}`, { text: ve } = E(R, L, q), we = R.slice(0, L) + ve + R.slice(L);
      c(we);
    }
  }, []);
  return /* @__PURE__ */ b("div", { className: "flex max-h-full flex-1 flex-col", children: [
    /* @__PURE__ */ b(
      "form",
      {
        onSubmit: (C) => {
          C.preventDefault(), d !== null ? v() : x();
        },
        className: "space-y-3",
        children: [
          /* @__PURE__ */ b("div", { className: "flex flex-col gap-y-1", children: [
            /* @__PURE__ */ b("div", { className: "w-full", children: [
              /* @__PURE__ */ l(bn, { htmlFor: "attrKey", className: "text-[11px] font-normal leading-tight text-slate-600", children: y("Key") }),
              /* @__PURE__ */ l(
                Cr,
                {
                  autoCapitalize: "off",
                  autoCorrect: "off",
                  spellCheck: "false",
                  id: "attrKey",
                  ref: h,
                  value: o,
                  onChange: (C) => i(C.target.value),
                  placeholder: y("Enter key"),
                  className: "py-0 text-xs font-normal leading-tight placeholder:text-slate-400"
                }
              )
            ] }),
            /* @__PURE__ */ b("div", { className: "w-full", children: [
              /* @__PURE__ */ b("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ l(bn, { htmlFor: "attrValue", className: "text-[11px] font-normal text-slate-600", children: y("Value") }),
                !F(g) && /* @__PURE__ */ l(Md, { data: g, onSelect: T })
              ] }),
              /* @__PURE__ */ l(
                Go,
                {
                  autoCapitalize: "off",
                  autoCorrect: "off",
                  spellCheck: "false",
                  id: "attrValue",
                  ref: m,
                  value: a,
                  onChange: (C) => c(C.target.value),
                  onKeyDown: k,
                  placeholder: y("Enter value"),
                  className: "text-xs font-normal leading-tight placeholder:text-slate-400"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ l("div", { className: "flex justify-end", children: /* @__PURE__ */ l(re, { type: "submit", disabled: !o.length, variant: "default", size: "sm", className: "h-8 w-24 text-xs", children: y(d !== null ? "Save" : "Add") }) }),
          p && /* @__PURE__ */ l("p", { className: "text-xs text-red-500", children: p })
        ]
      }
    ),
    /* @__PURE__ */ l("div", { className: "space-y-1 py-4", children: r.map((C, N) => /* @__PURE__ */ b("div", { className: "flex items-center justify-between rounded border p-2 text-sm", children: [
      /* @__PURE__ */ b("div", { className: "flex flex-col text-xs leading-tight", children: [
        /* @__PURE__ */ l("span", { className: "truncate text-[12px] font-light text-muted-foreground", children: C.key }),
        /* @__PURE__ */ l("span", { className: "max-w-[200px] text-wrap font-normal", children: C.value.toString() })
      ] }),
      /* @__PURE__ */ b("div", { className: "flex-shrink-0 text-slate-400", children: [
        /* @__PURE__ */ l(re, { variant: "ghost", size: "icon", className: "h-6 w-6", onClick: () => S(N), children: /* @__PURE__ */ l(ko, { className: "h-3 w-3" }) }),
        /* @__PURE__ */ l(re, { variant: "ghost", size: "icon", className: "h-6 w-6", onClick: () => w(N), children: /* @__PURE__ */ l(at, { className: "h-3 w-3" }) })
      ] })
    ] }, N)) })
  ] });
}), Ek = W.memo(() => {
  const t = ae(), [e, n] = $([]), [r] = Fe(), s = _t(), o = `${_(r, "0.prop")}_attrs`;
  W.useEffect(() => {
    const a = A(_(t, o), (c, d) => ({ key: d, value: c }));
    F(a) ? n([]) : n(a);
  }, [_(t, o)]);
  const i = W.useCallback(
    (a = []) => {
      if (!t) return;
      const c = {};
      vo(a, (d) => {
        F(d.key) || Ge(c, d.key, d.value);
      }), s([_(t, "_id")], { [o]: c });
    },
    [t, s, o]
  );
  return /* @__PURE__ */ l("div", { className: "flex-col gap-y-2", children: /* @__PURE__ */ l("div", { className: "flex flex-col", children: /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(Sk, { preloadedAttributes: e, onAttributesChange: i }) }) }) });
}), In = () => null, Za = () => {
  const { resetAll: t } = Wd(), e = ae(), [n] = Fe(), r = Wx(), { t: s } = K();
  return !e || F(n) ? null : /* @__PURE__ */ b(kn, { children: [
    /* @__PURE__ */ l(Cn, { asChild: !0, children: /* @__PURE__ */ l("div", { className: "inline-flex rounded-sm p-0.5 hover:bg-gray-300", onClick: (o) => o.stopPropagation(), children: /* @__PURE__ */ l(Co, { className: "h-3 w-3" }) }) }),
    /* @__PURE__ */ b(Ft, { side: "bottom", className: "border-border text-xs", children: [
      /* @__PURE__ */ b(
        Ee,
        {
          className: "flex items-center gap-1 text-xs",
          onClick: () => {
            t();
          },
          children: [
            /* @__PURE__ */ l(ro, { className: "h-3 w-3" }),
            s("Reset styles")
          ]
        }
      ),
      /* @__PURE__ */ b(
        Ee,
        {
          className: "text-xs",
          onClick: () => {
            e && r(e, !0);
          },
          children: [
            /* @__PURE__ */ l(No, { className: "h-3 w-3" }),
            s("Clear styles")
          ]
        }
      )
    ] })
  ] });
};
function Qa() {
  const { t } = K(), [e, n] = $(!0), [r] = Fe();
  return F(r) ? null : /* @__PURE__ */ b(Q, { children: [
    /* @__PURE__ */ b(
      "div",
      {
        onClick: () => n(!e),
        className: "flex cursor-pointer items-center justify-between border-t border-border py-3 text-xs font-medium hover:underline",
        children: [
          /* @__PURE__ */ l("span", { children: t("Attributes") }),
          /* @__PURE__ */ l("span", { children: /* @__PURE__ */ l(xn, { className: "h-4 w-4 text-gray-500 " + (e ? "rotate-180" : "") }) })
        ]
      }
    ),
    e && /* @__PURE__ */ l(Ek, {})
  ] });
}
const _k = ({ partialBlockId: t }) => {
  const e = G("gotoPage", wt), { saveState: n } = _r(), { selectedLang: r, fallbackLang: s } = Je(), o = B(
    (i) => {
      if (i.stopPropagation(), n !== "SAVED") {
        Ce.error("You have unsaved changes. Please save the page first.");
        return;
      }
      e({ pageId: t, lang: r || s });
    },
    [n, e, t, r, s]
  );
  return /* @__PURE__ */ l(Q, { children: /* @__PURE__ */ l("div", { className: "hidden", children: /* @__PURE__ */ l("div", { onDoubleClick: o, className: "h-full w-full items-center justify-center", children: /* @__PURE__ */ l("p", { className: "rounded-md bg-white px-2 py-1 text-xs", children: "Partial block. Double click to edit." }) }) }) });
}, Ak = () => {
  const t = ae(), { t: e } = K(), n = G("onError", wt), { hasPermission: r } = gt();
  let s = !r(Ie.EDIT_BLOCK);
  const o = !r(Ie.EDIT_STYLES), [i, a] = Bc();
  return t && t._type === "PartialBlock" ? /* @__PURE__ */ l(_k, { partialBlockId: t.partialBlockId }) : t ? s && o ? /* @__PURE__ */ l("div", { className: "p-4 text-center", children: /* @__PURE__ */ b("div", { className: "space-y-4 rounded-xl p-4 text-muted-foreground", children: [
    /* @__PURE__ */ l(oo, { className: "mx-auto text-3xl" }),
    /* @__PURE__ */ l("h1", { children: e("You don't have permission to edit settings or styles") }),
    /* @__PURE__ */ l("p", { children: e("Please contact your administrator to get access") })
  ] }) }) : o ? /* @__PURE__ */ l(on, { fallback: /* @__PURE__ */ l(ur, {}), onError: n, children: /* @__PURE__ */ b("div", { className: "no-scrollbar h-full max-h-min w-full overflow-y-auto", children: [
    /* @__PURE__ */ l(Da, {}, t == null ? void 0 : t._id),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("br", {})
  ] }) }) : s ? /* @__PURE__ */ l(on, { fallback: /* @__PURE__ */ l(ur, {}), onError: n, children: /* @__PURE__ */ b("div", { className: "no-scrollbar h-full max-h-min w-full overflow-y-auto overflow-x-hidden", children: [
    /* @__PURE__ */ l("div", { className: "flex w-full items-center justify-end", children: /* @__PURE__ */ l(Za, {}) }),
    /* @__PURE__ */ l(Ga, {}),
    /* @__PURE__ */ l(Qa, {}),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("br", {})
  ] }) }) : /* @__PURE__ */ l(on, { fallback: /* @__PURE__ */ l(ur, {}), onError: n, children: /* @__PURE__ */ b(zi, { value: i, onValueChange: (u) => {
    (u === "settings" || u === "styles") && a(u);
  }, className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ b(Wo, { className: "grid h-auto w-full grid-cols-2 p-1 py-1", children: [
      /* @__PURE__ */ l(lt, { value: "settings", className: "text-xs", children: e("Settings") }),
      /* @__PURE__ */ l(lt, { value: "styles", className: "text-xs", children: /* @__PURE__ */ b("div", { className: "flex w-full items-center justify-between", children: [
        /* @__PURE__ */ l("span", { className: "w-[90%] text-center", children: e("Styling") }),
        /* @__PURE__ */ l("span", { className: "w-[10%]", children: /* @__PURE__ */ l(Za, {}) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ b(jt, { value: "settings", className: "no-scrollbar h-full max-h-min overflow-y-auto", children: [
      /* @__PURE__ */ l(Da, {}, t == null ? void 0 : t._id),
      /* @__PURE__ */ l("br", {}),
      /* @__PURE__ */ l("br", {})
    ] }),
    /* @__PURE__ */ b(
      jt,
      {
        value: "styles",
        className: "no-scrollbar h-full max-h-min max-w-full overflow-y-auto overflow-x-hidden",
        children: [
          /* @__PURE__ */ l(Ga, {}),
          /* @__PURE__ */ l(Qa, {}),
          /* @__PURE__ */ l("br", {}),
          /* @__PURE__ */ l("br", {}),
          /* @__PURE__ */ l("br", {})
        ]
      }
    )
  ] }) }) : /* @__PURE__ */ l("div", { className: "p-4 text-center", children: /* @__PURE__ */ b("div", { className: "space-y-4 rounded-xl p-4 text-muted-foreground", children: [
    /* @__PURE__ */ l(oo, { className: "mx-auto text-3xl" }),
    /* @__PURE__ */ l("h1", { children: e("Please select a block to edit settings or styles") })
  ] }) });
}, Wt = 280, Tk = ({ isActive: t, show: e }) => /* @__PURE__ */ l(re, { variant: t ? "default" : "ghost", size: "icon", onClick: e, children: /* @__PURE__ */ l(zf, { className: "h-5 w-5" }) }), Bk = ({ isActive: t, show: e }) => bt() && /* @__PURE__ */ l(re, { variant: t ? "default" : "ghost", size: "icon", onClick: e, children: /* @__PURE__ */ l(Ff, { className: "h-5 w-5" }) }), Ik = ({ isActive: t, show: e }) => G("flags.ai", !1) ? /* @__PURE__ */ l(re, { variant: t ? "default" : "ghost", size: "icon", onClick: e, children: /* @__PURE__ */ l(Ys, {}) }) : null;
Fs("add-block", {
  button: Bk,
  label: "Add Blocks",
  position: "top",
  isInternal: !0,
  width: Wt,
  panel: () => /* @__PURE__ */ l(cu, { showHeading: !1, fromSidebar: !0, parentId: void 0, position: -1 })
});
Fs("chai-chat-panel", {
  button: Ik,
  label: "Ask AI",
  position: "top",
  isInternal: !0,
  width: Wt,
  panel: () => /* @__PURE__ */ l("div", { className: "", children: /* @__PURE__ */ l(Cu, {}) })
});
Fs("outline", {
  button: Tk,
  label: "Outline",
  position: "top",
  isInternal: !0,
  width: Wt,
  panel: () => /* @__PURE__ */ l("div", { className: "-mt-8", children: /* @__PURE__ */ l(Av, {}) })
});
const Rk = () => {
  const t = tp(), [e, n] = yi(), r = ne("outline"), [s, o] = $(Wt), [i, a] = og(), [, c] = Bc(), d = Ji("top"), u = Ji("bottom"), p = Ju([...u ?? []]), f = B((N) => {
    N.preventDefault();
  }, []), h = M(() => [d].flat(), [d]), m = B(
    (N) => {
      console.log("handleMenuItemClick", N, e), n(e === N ? null : N);
    },
    [e, n]
  ), { t: g } = K(), y = M(() => [...d, ...u], [d, u]), x = G("htmlDir", "ltr"), w = ee(y, { id: e }) ?? ye(y), S = _(w, "width", Wt);
  z(() => {
    if (e !== null) {
      const N = ee(y, { id: e });
      N && _(N, "view", "standard") === "standard" && (r.current = e, o(_(N, "width", Wt)));
    }
  }, [e, y]);
  const v = M(() => {
    if (e === null) return 0;
    const N = ee(y, { id: e });
    return _(N, "view", "standard") === "standard" ? S : s;
  }, [e, S, s, y]), k = B(() => {
    n(r.current);
  }, [n, e]), T = B(() => {
    n("outline");
  }, [n]);
  z(() => {
    e !== null && !ee(y, { id: e }) && n("outline");
  }, [e, y]);
  const C = B(
    (N) => {
      m(N);
    },
    [m]
  );
  return /* @__PURE__ */ l("div", { dir: x, className: "h-screen max-h-full w-screen overflow-x-hidden bg-background text-foreground", children: /* @__PURE__ */ b(Ts, { children: [
    /* @__PURE__ */ b("div", { onContextMenu: f, className: "flex h-full max-h-full flex-col", children: [
      /* @__PURE__ */ l("div", { className: "flex h-[50px] w-screen items-center border-b border-gray-200 bg-gray-50 text-gray-900", children: /* @__PURE__ */ l(We, { children: /* @__PURE__ */ l(t, {}) }) }),
      /* @__PURE__ */ b("main", { className: "relative flex h-[calc(100vh-56px)] max-w-full flex-1 flex-row", children: [
        /* @__PURE__ */ b(
          "div",
          {
            id: "sidebar",
            className: "flex w-12 flex-col items-center justify-between border-r border-gray-200 bg-gray-50 py-2 text-gray-900",
            children: [
              /* @__PURE__ */ l("div", { className: "flex flex-col gap-y-1", children: h.map((N, E) => /* @__PURE__ */ b(Ne, { children: [
                /* @__PURE__ */ l(Se, { asChild: !0, children: un(_(N, "button", In), {
                  position: "top",
                  panelId: N.id,
                  isActive: e === N.id,
                  show: () => C(N.id)
                }) }),
                /* @__PURE__ */ l(be, { side: "right", children: /* @__PURE__ */ l("p", { children: g(N.label) }) })
              ] }, "button-top-" + E)) }),
              /* @__PURE__ */ l("div", { className: "flex flex-col space-y-1" }),
              /* @__PURE__ */ l("div", { className: "flex flex-col", children: p == null ? void 0 : p.map((N, E) => /* @__PURE__ */ b(Ne, { children: [
                /* @__PURE__ */ l(Se, { asChild: !0, children: un(_(N, "button", In), {
                  position: "bottom",
                  panelId: N.id,
                  isActive: e === N.id,
                  show: () => C(N.id)
                }) }),
                /* @__PURE__ */ l(be, { side: "right", children: /* @__PURE__ */ l("p", { children: g(N.label) }) })
              ] }, "button-bottom-" + E)) })
            ]
          }
        ),
        /* @__PURE__ */ l(
          $r.div,
          {
            id: "left-panel",
            className: "h-full max-h-full border-r border-gray-200 bg-white text-gray-900",
            initial: { width: v },
            animate: { width: v },
            transition: { duration: 0.3, ease: "easeInOut" },
            children: e !== null && _(w, "view", "standard") === "standard" && /* @__PURE__ */ b("div", { className: "no-scrollbar flex h-full flex-col overflow-hidden px-3 py-2", children: [
              _(w, "label", "") !== "" ? /* @__PURE__ */ l(
                "div",
                {
                  className: `absolute top-2 flex h-10 items-center space-x-1 py-2 text-base font-bold ${_(w, "isInternal", !1) ? "" : "w-64"}`,
                  children: /* @__PURE__ */ l("span", { children: g(_(w, "label", "")) })
                }
              ) : null,
              /* @__PURE__ */ l(
                "div",
                {
                  className: "no-scrollbar h-full max-h-full overflow-y-auto " + (_(w, "label", "") !== "" ? "pt-10" : ""),
                  children: /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l("div", { children: "Loading..." }), children: te.createElement(_(w, "panel", In), {}) })
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ l("div", { id: "canvas-container", className: "flex h-full max-h-full flex-1 flex-col bg-slate-800/20", children: /* @__PURE__ */ l(We, { children: /* @__PURE__ */ l(dx, {}) }) }),
        /* @__PURE__ */ l(
          $r.div,
          {
            id: "right-panel",
            className: "h-full max-h-full border-l border-gray-200 bg-white text-gray-900",
            initial: { width: e === "ai" ? 0 : Wt },
            animate: { width: e === "ai" ? 0 : Wt },
            transition: { duration: 0.3, ease: "easeInOut" },
            children: /* @__PURE__ */ l("div", { className: "no-scrollbar overflow h-full max-h-full overflow-hidden", children: /* @__PURE__ */ b("div", { className: "flex h-full max-h-full flex-col overflow-hidden p-3", children: [
              /* @__PURE__ */ l("h2", { className: "-mt-1 flex items-center space-x-1 text-base font-bold", children: /* @__PURE__ */ l("div", { className: "flex grow items-center gap-2", children: /* @__PURE__ */ l("div", { className: "flex w-full items-center justify-between gap-2", children: i === "ai" ? /* @__PURE__ */ l(Q, { children: /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ l(Zp, { className: "rtl:ml-2" }),
                " ",
                g("AI Assistant")
              ] }) }) : i === "design-tokens" ? /* @__PURE__ */ b("div", { className: "mb-1 flex w-full items-center justify-between gap-2", children: [
                /* @__PURE__ */ b("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ l(Xd, { className: "h-4 w-4 text-gray-600" }),
                  g("Design Tokens")
                ] }),
                /* @__PURE__ */ l(
                  re,
                  {
                    onClick: () => {
                      c("styles"), a("block");
                    },
                    variant: "ghost",
                    size: "icon",
                    className: "text-xs",
                    children: /* @__PURE__ */ l(at, { className: "h-4 w-4 rtl:ml-2" })
                  }
                )
              ] }) : i === "theme" ? /* @__PURE__ */ b("div", { className: "flex w-full items-center justify-between gap-2", children: [
                /* @__PURE__ */ b("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ l(oo, { className: "h-4 w-4 text-gray-600" }),
                  g("Theme Settings")
                ] }),
                /* @__PURE__ */ l(
                  re,
                  {
                    onClick: () => a("block"),
                    variant: "ghost",
                    size: "icon",
                    className: "text-xs",
                    children: /* @__PURE__ */ l(at, { className: "h-4 w-4 rtl:ml-2" })
                  }
                )
              ] }) : null }) }) }),
              /* @__PURE__ */ l("div", { className: "flex h-full max-h-full w-full", children: /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l("div", { children: "Loading..." }), children: i === "ai" ? /* @__PURE__ */ l(Cu, {}) : i === "theme" ? /* @__PURE__ */ l(Vv, {}) : /* @__PURE__ */ l(Ak, {}) }) })
            ] }) })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l(Nk, {}),
    e !== null && _(w, "view") === "drawer" && /* @__PURE__ */ l(vk, { open: !0, onOpenChange: () => k(), children: /* @__PURE__ */ b(
      Su,
      {
        side: "left",
        className: "flex flex-col gap-0 p-0 sm:max-w-full",
        style: { width: `${S}px` },
        children: [
          /* @__PURE__ */ l(Eu, { className: "border-b border-border px-2 py-2.5", children: /* @__PURE__ */ b(_u, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ l("span", { className: "inline-block", children: _(w, "icon", null) }),
            /* @__PURE__ */ l("span", { children: g(_(w, "label", "")) })
          ] }) }),
          /* @__PURE__ */ l("div", { className: "h-full max-h-full overflow-y-auto p-4", children: /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l("div", { children: "Loading..." }), children: te.createElement(_(w, "panel", In), {
            close: T
          }) }) })
        ]
      }
    ) }),
    " ",
    e !== null && _(w, "view") === "modal" && /* @__PURE__ */ l($o, { open: !0, onOpenChange: () => k(), children: /* @__PURE__ */ b(Lr, { className: "gap-0 p-0", style: { maxWidth: `${S}px` }, children: [
      /* @__PURE__ */ l(Fo, { className: "border-b border-border px-2 py-3.5", children: /* @__PURE__ */ b(Pr, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ l("span", { className: "inline-block", children: _(w, "icon", null) }),
        /* @__PURE__ */ l("span", { children: g(_(w, "label", "")) })
      ] }) }),
      /* @__PURE__ */ l("div", { className: "max-h-[70vh] overflow-y-auto p-4", children: /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l("div", { children: "Loading..." }), children: te.createElement(_(w, "panel", In), {
        close: T
      }) }) })
    ] }) }),
    e !== null && _(w, "view") === "overlay" && /* @__PURE__ */ l(
      $r.div,
      {
        className: "absolute bottom-0 left-12 right-0 top-0 z-50",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
        children: /* @__PURE__ */ l("div", { className: "h-full w-full", children: /* @__PURE__ */ b(
          $r.div,
          {
            className: "flex h-full w-full flex-col bg-background",
            initial: { y: -20, opacity: 0 },
            animate: { y: 0, opacity: 1 },
            exit: { y: 20, opacity: 0 },
            transition: { duration: 0.3, delay: 0.1 },
            children: [
              /* @__PURE__ */ b("div", { className: "flex h-[50px] items-center justify-between border-b border-border p-4", children: [
                /* @__PURE__ */ b("div", { className: "-ml-2 flex items-center gap-2 text-lg font-bold", children: [
                  /* @__PURE__ */ l("span", { className: "rtl:ml-2 rtl:inline-block", children: _(w, "icon", null) }),
                  /* @__PURE__ */ l("span", { children: g(_(w, "label", "")) })
                ] }),
                /* @__PURE__ */ l(re, { onClick: () => k(), variant: "ghost", size: "icon", className: "", children: /* @__PURE__ */ l(at, { className: "h-5 w-5" }) })
              ] }),
              /* @__PURE__ */ l("div", { className: "flex-1 overflow-y-auto p-4", children: /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l("div", { children: "Loading..." }), children: te.createElement(_(w, "panel", In), {
                close: T
              }) }) })
            ]
          }
        ) })
      }
    )
  ] }) });
}, Lk = P(!1), Pk = () => {
  const [t, e] = D(Lk);
  return [t, e];
}, Ok = () => {
  const [t, e] = Pk(), { t: n } = K(), r = G("previewComponent", null);
  return t ? /* @__PURE__ */ b("div", { className: Ze("fixed inset-0 z-[999] bg-background", t ? "block" : "hidden"), children: [
    /* @__PURE__ */ b(re, { size: "sm", className: "absolute right-0 top-0 m-4 space-x-2", onClick: () => e(!1), children: [
      /* @__PURE__ */ l(no, {}),
      /* @__PURE__ */ l("span", { children: n("Close Preview") })
    ] }),
    /* @__PURE__ */ l("div", { children: r ? /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l(zn, { className: "h-96 w-full" }), children: te.createElement(r) }) : null })
  ] }) : null;
}, Dk = (t) => {
}, Mk = [
  "data-block-index",
  "draggable",
  "data-drop",
  "data-style-id",
  "data-block-parent",
  "data-style-prop",
  "data-highlighted"
], $k = [
  "Box",
  "Button",
  "Checkbox",
  "Divider",
  "EmptyBox",
  "Form",
  "FormButton",
  "Heading",
  "Image",
  "Input",
  "Label",
  "LineBreak",
  "Link",
  "List",
  "ListItem",
  "Paragraph",
  "Radio",
  "RichText",
  "Select",
  "Span",
  "Text",
  "TextArea",
  "Video"
], Au = (t) => t.type === "element" && ["script", "style", "link"].includes(t.tagName || "") || t.type === "comment" ? null : t.type === "text" ? t : t.type === "element" && t.attributes && t.attributes.find((e) => e.key === "id" && e.value === "add-block-bottom") ? null : (t.type === "element" && t.attributes && (t.attributes = t.attributes.filter((e) => !Mk.includes(e.key))), t.children && (t.children = t.children.map(Au).filter((e) => e !== null)), t), Qr = (t, e, n = {}) => {
  var o, i, a, c, d, u;
  if (t.type !== "element" || !t.attributes)
    return t;
  if (t.tagName === "span" && t.attributes.find((f) => f.key === "role" && f.value === "link")) {
    t.tagName = "a", t.attributes = t.attributes.filter((m) => m.key !== "role");
    const f = (o = t.attributes.find((m) => m.key === "data-block-id")) == null ? void 0 : o.value, h = e == null ? void 0 : e.find((m) => (m == null ? void 0 : m._id) === f);
    if (h != null && h.link && ((a = (i = h == null ? void 0 : h.link) == null ? void 0 : i.href) == null ? void 0 : a.length) > 0) {
      const m = (c = h == null ? void 0 : h.link) == null ? void 0 : c.href, g = (d = h == null ? void 0 : h.link) == null ? void 0 : d.target;
      t.attributes.push({ key: "href", value: m }), typeof g == "string" && g.length > 0 && t.attributes.push({ key: "target", value: g });
    }
  }
  const r = t.attributes.find((p) => p.key === "data-block-type"), s = t.attributes.find((p) => p.key === "data-block-id");
  if (r) {
    const p = r.value;
    if ($k.includes(p) || (u = n == null ? void 0 : n.additionalCoreBlocks) != null && u.includes(p))
      t.attributes = t.attributes.filter((f) => f.key !== "data-block-type"), t.children && (t.children = t.children.map((f) => Qr(f, e, n)));
    else {
      const f = `chai-${rl(p)}`;
      t.tagName = f, t.attributes = [], t.attributes.push({ key: "chai-type", value: p });
      const h = Pe(p), m = e.find((g) => g._id === (s == null ? void 0 : s.value));
      if (m && t.attributes.push(
        ...Object.entries(m).filter(([g]) => !["_id", "_type", "_parent", "_index", "_name"].includes(g)).map(([g, y]) => ({
          key: g,
          value: typeof y == "string" ? y : JSON.stringify(y)
        }))
      ), h && (h != null && h.description) && t.attributes.push({
        key: "about-this-component",
        value: h.description
      }), h) {
        if (h.canMove) {
          const g = typeof h.canMove == "function" ? h.canMove() : h.canMove;
          t.attributes.push({
            key: "can-move",
            value: String(g)
          });
        }
        if (h.canDelete) {
          const g = typeof h.canDelete == "function" ? h.canDelete() : h.canDelete;
          t.attributes.push({
            key: "can-delete",
            value: String(g)
          });
        }
      }
      p === "Icon" && (t.attributes = t.attributes.filter((g) => g.key !== "icon")), h && h.canAcceptBlock ? t.children && (t.children = t.children.map((g) => Qr(g, e, n))) : t.children = [];
    }
  } else
    t.children && (t.children = t.children.map((p) => Qr(p, e, n)));
  return s && t.attributes.push({ key: "bid", value: s.value }), t.attributes = t.attributes.filter((p) => p.key !== "data-block-type" && p.key !== "data-block-id"), t;
}, Fk = () => {
  const [t] = Kn();
  return B(
    (e) => {
      var d, u;
      if (!t) return "";
      const n = e != null && e.blockId ? `[data-block-id="${e.blockId}"]` : "#canvas", r = (u = (d = t.contentDocument) == null ? void 0 : d.querySelector(n)) == null ? void 0 : u[n === "#canvas" ? "innerHTML" : "outerHTML"];
      if (!r) return "";
      const o = Lf(r).map(Au).filter((p) => p !== null), i = qf(), a = o.map((p) => Qr(p, i, e));
      let c = Pf(a);
      return c = c.replace(/#styles:,/g, "#styles:"), c.replace(/\s+/g, " ").trim();
    },
    [t]
  );
};
function el(t) {
  const e = {
    class: "className",
    for: "htmlFor",
    tabindex: "tabIndex",
    readonly: "readOnly",
    maxlength: "maxLength",
    minlength: "minLength",
    autocomplete: "autoComplete",
    autofocus: "autoFocus",
    autoplay: "autoPlay",
    formaction: "formAction",
    formenctype: "formEncType",
    formmethod: "formMethod",
    formnovalidate: "formNoValidate",
    formtarget: "formTarget",
    novalidate: "noValidate",
    crossorigin: "crossOrigin",
    datetime: "dateTime",
    rowspan: "rowSpan",
    colspan: "colSpan",
    usemap: "useMap",
    frameborder: "frameBorder",
    allowfullscreen: "allowFullScreen"
  };
  if (e[t.toLowerCase()])
    return e[t.toLowerCase()];
  const n = {
    "accent-height": "accentHeight",
    "alignment-baseline": "alignmentBaseline",
    "arabic-form": "arabicForm",
    "baseline-shift": "baselineShift",
    "cap-height": "capHeight",
    "clip-path": "clipPath",
    "clip-rule": "clipRule",
    "color-interpolation": "colorInterpolation",
    "color-interpolation-filters": "colorInterpolationFilters",
    "color-profile": "colorProfile",
    "color-rendering": "colorRendering",
    "dominant-baseline": "dominantBaseline",
    "enable-background": "enableBackground",
    "fill-opacity": "fillOpacity",
    "fill-rule": "fillRule",
    "flood-color": "floodColor",
    "flood-opacity": "floodOpacity",
    "font-family": "fontFamily",
    "font-size": "fontSize",
    "font-size-adjust": "fontSizeAdjust",
    "font-stretch": "fontStretch",
    "font-style": "fontStyle",
    "font-variant": "fontVariant",
    "font-weight": "fontWeight",
    "glyph-name": "glyphName",
    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
    "glyph-orientation-vertical": "glyphOrientationVertical",
    "horiz-adv-x": "horizAdvX",
    "horiz-origin-x": "horizOriginX",
    "image-rendering": "imageRendering",
    "letter-spacing": "letterSpacing",
    "lighting-color": "lightingColor",
    "marker-end": "markerEnd",
    "marker-mid": "markerMid",
    "marker-start": "markerStart",
    "overline-position": "overlinePosition",
    "overline-thickness": "overlineThickness",
    "paint-order": "paintOrder",
    "panose-1": "panose1",
    "pointer-events": "pointerEvents",
    "rendering-intent": "renderingIntent",
    "shape-rendering": "shapeRendering",
    "stop-color": "stopColor",
    "stop-opacity": "stopOpacity",
    "strikethrough-position": "strikethroughPosition",
    "strikethrough-thickness": "strikethroughThickness",
    "stroke-dasharray": "strokeDasharray",
    "stroke-dashoffset": "strokeDashoffset",
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "stroke-miterlimit": "strokeMiterlimit",
    "stroke-opacity": "strokeOpacity",
    "stroke-width": "strokeWidth",
    "text-anchor": "textAnchor",
    "text-decoration": "textDecoration",
    "text-rendering": "textRendering",
    "underline-position": "underlinePosition",
    "underline-thickness": "underlineThickness",
    "unicode-bidi": "unicodeBidi",
    "unicode-range": "unicodeRange",
    "units-per-em": "unitsPerEm",
    "v-alphabetic": "vAlphabetic",
    "v-hanging": "vHanging",
    "v-ideographic": "vIdeographic",
    "v-mathematical": "vMathematical",
    "vector-effect": "vectorEffect",
    "vert-adv-y": "vertAdvY",
    "vert-origin-x": "vertOriginX",
    "vert-origin-y": "vertOriginY",
    "word-spacing": "wordSpacing",
    "writing-mode": "writingMode",
    "x-height": "xHeight"
  };
  return n[t] ? n[t] : t;
}
function eo(t, e = 0) {
  var d;
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return eo(t[0], e);
    const u = "  ".repeat(e);
    let p = `${u}<>
`;
    for (const f of t)
      p += eo(f, e + 1);
    return p += `${u}</>
`, p;
  }
  const n = "  ".repeat(e);
  if (t.nodeType === Node.TEXT_NODE) {
    const u = (d = t.textContent) == null ? void 0 : d.trim();
    return u ? `${n}${u}
` : "";
  }
  if (t.nodeType !== Node.ELEMENT_NODE)
    return "";
  const r = t.tagName.toLowerCase();
  if ([
    "img",
    "br",
    "hr",
    "input",
    "meta",
    "link",
    "area",
    "base",
    "col",
    "embed",
    "source",
    "track",
    "wbr"
  ].includes(r)) {
    const u = [];
    for (const f of t.attributes)
      if (f.name.startsWith("on") && f.name !== "on") {
        const h = f.name.toLowerCase().replace(/on(\w)/, (m, g) => "on" + g.toUpperCase());
        u.push(`${h}={${f.value}}`);
      } else if (f.name === "style" && f.value) {
        const h = f.value.split(";").reduce(
          (m, g) => {
            const [y, x] = g.split(":").map((w) => w.trim());
            if (y && x) {
              const w = y.replace(/-([a-z])/g, (S) => S[1].toUpperCase());
              m[w] = x.replace(/['"]/g, "");
            }
            return m;
          },
          {}
        );
        u.push(`style={${JSON.stringify(h)}}`);
      } else {
        const h = el(f.name);
        u.push(`${h}="${f.value}"`);
      }
    const p = u.length > 0 ? ` ${u.join(" ")}` : "";
    return `${n}<${r}${p} />
`;
  }
  let o = `${n}<${r}`;
  const i = [];
  for (const u of t.attributes)
    if (u.name.startsWith("on") && u.name !== "on") {
      const p = u.name.toLowerCase().replace(/on(\w)/, (f, h) => "on" + h.toUpperCase());
      i.push(`${p}={${u.value}}`);
    } else if (u.name === "style" && u.value) {
      const p = u.value.split(";").reduce(
        (f, h) => {
          const [m, g] = h.split(":").map((y) => y.trim());
          if (m && g) {
            const y = m.replace(/-([a-z])/g, (x) => x[1].toUpperCase());
            f[y] = g.replace(/['"]/g, "");
          }
          return f;
        },
        {}
      );
      i.push(`style={${JSON.stringify(p)}}`);
    } else {
      const p = el(u.name);
      i.push(`${p}="${u.value}"`);
    }
  i.length > 0 && (o += " " + i.join(" "));
  const a = Array.from(t.childNodes);
  if (!a.some((u) => {
    var p;
    return u.nodeType === Node.TEXT_NODE ? (p = u.textContent) == null ? void 0 : p.trim() : !0;
  }))
    o += ` />
`;
  else {
    o += `>
`;
    for (const u of a)
      o += eo(u, e + 1);
    o += `${n}</${r}>
`;
  }
  return o;
}
function zk(t) {
  if (!t)
    return "";
  let e = "", n = 0;
  const r = "  ";
  return t = t.replace(/>\s+</g, "><").trim(), t.split(/(<\/?[^>]+>)/g).filter((o) => o.trim()).forEach((o) => {
    o.match(/^<\/\w/) ? (n = Math.max(0, n - 1), e += r.repeat(n) + o + `
`) : o.match(/\/>$/) ? e += r.repeat(n) + o + `
` : o.match(/^<\w[^>]*[^\/]>$/) ? (e += r.repeat(n) + o + `
`, n++) : o.trim() && (e += r.repeat(n) + o.trim() + `
`);
  }), e.trim();
}
const Hk = $s(() => import("./code-display-BaLKScgW.js"));
async function Vk(t) {
  try {
    const e = document.createElement("div");
    e.innerHTML = t;
    const n = Array.from(e.children);
    return { jsx: eo(n.length === 1 ? n[0] : n), html: e.innerHTML };
  } catch {
    return { html: t, jsx: t };
  }
}
const jk = async ({
  selectedBlock: t,
  html: e,
  isTypeScript: n = !1
}) => {
  let r = (t == null ? void 0 : t._name) || (t == null ? void 0 : t._type) || "Component";
  r = Yu(r).replace(/^./, (d) => d.toUpperCase());
  const s = "  ";
  let { jsx: o, html: i } = await Vk(e);
  return o = o == null ? void 0 : o.split(`
`).join(`
${s}${s}`), o = `${n ? `import React from 'react';

` : ""}export const ${r}${n ? ": React.FC" : ""} = () => {
${s}return (
${s}${s}${o == null ? void 0 : o.trimEnd()}
${s})
}`, { jsx: o, html: zk(i), componentName: r };
}, Wk = ({ tab: t }) => {
  var x;
  const { t: e } = K(), [n, r] = $({ html: "", jsx: "" }), s = ae(), o = Fk(), [i, a] = $(""), [c, d] = $(!1), u = () => {
    switch (t) {
      case "js":
        return `${i}.jsx`;
      case "ts":
        return `${i}.tsx`;
      case "html":
        return `${i}.html`;
      case "tailwind":
        return "tailwind.config.js";
    }
  }, p = () => {
    switch (t) {
      case "js":
      case "ts":
        return "javascript";
      case "html":
        return "HTML";
      case "tailwind":
        return "JSON";
    }
  }, f = B(async () => {
    const w = s ?? { _name: "Body", _type: "Body" };
    try {
      d(!1);
      let S = o(
        s ? { blockId: s._id, additionalCoreBlocks: ["Icon"] } : { additionalCoreBlocks: ["Icon"] }
      );
      S = S.replace(/\s*bid=["'][^"']*["']/g, "");
      const v = t === "ts", {
        jsx: k,
        html: T,
        componentName: C
      } = await jk({
        selectedBlock: w,
        html: S,
        isTypeScript: v
      });
      r({ html: T || "", jsx: k }), a(C), d(!0);
    } catch {
      const S = "<div>Export failed. Close the modal and try again.</div>";
      r({ html: S, jsx: S }), Ce.error(e("Failed to generate export HTML"));
    }
  }, [e, t, s, o]);
  z(() => {
    f();
  }, [f, t]);
  const h = B(
    async (w) => {
      try {
        navigator.clipboard.writeText(w), Ce.success(e("Export code copied!"));
      } catch {
        Ce.error(e("Failed to copy export code"));
      }
    },
    [e]
  ), m = (w) => {
    const S = new Blob([w], { type: "text/jsx" }), v = URL.createObjectURL(S), k = document.createElement("a");
    k.href = v, k.download = u() ?? "", document.body.appendChild(k), k.click(), URL.revokeObjectURL(v), document.body.removeChild(k), Ce.success(e("Export code downloaded successfully!"));
  }, g = /* @__PURE__ */ b("span", { children: [
    "Download ",
    /* @__PURE__ */ l("span", { className: "font-mono text-xs font-light text-gray-300", children: u() })
  ] }), y = M(() => {
    const w = { extend: Hf() }, S = JSON.stringify(w, null, 2);
    return `{
  // Your tailwind config ...

  "theme": ${S == null ? void 0 : S.split(`
`).join(`
  `)},
}`;
  }, []);
  return ((x = n == null ? void 0 : n.jsx) == null ? void 0 : x.length) > 0 && c ? /* @__PURE__ */ l(
    Hk,
    {
      onCopy: h,
      code: t === "tailwind" ? y : t === "html" ? n.html : n.jsx,
      language: p() || "",
      downloadText: g,
      onDownload: m
    },
    t
  ) : /* @__PURE__ */ l("div", { className: "flex h-[620px] w-full items-center justify-center p-4", children: "Generating code..." });
}, Gk = () => {
  const { t } = K(), [e, n] = $(!1), { setMode: r } = Ic(), [s, o] = $("js"), i = B(async () => {
    o("js"), r("view"), n(!0);
  }, [o, r, n]);
  return Dn(se.OPEN_EXPORT_CODE, i), /* @__PURE__ */ l($o, { open: e, onOpenChange: async () => {
    r("edit"), await new Promise((c) => setTimeout(c, 300)), n(!1);
  }, children: /* @__PURE__ */ b(Lr, { className: "max-w-5xl overflow-hidden border-border", children: [
    /* @__PURE__ */ b(Fo, { className: "flex flex-row items-center justify-between", children: [
      /* @__PURE__ */ l(Pr, { className: "text-foreground", children: t("Export Code") }),
      /* @__PURE__ */ l(zi, { defaultValue: "js", onValueChange: o, children: /* @__PURE__ */ b(Wo, { children: [
        /* @__PURE__ */ l(lt, { value: "js", children: "Javascript" }),
        /* @__PURE__ */ l(lt, { value: "ts", children: "Typescript" }),
        /* @__PURE__ */ l(lt, { value: "html", children: "HTML" }),
        /* @__PURE__ */ l(lt, { value: "tailwind", children: "Tailwind config" })
      ] }) }),
      /* @__PURE__ */ l("div", {})
    ] }),
    /* @__PURE__ */ l("div", { className: "flex min-h-[400px] flex-col gap-4", children: e && /* @__PURE__ */ l(
      We,
      {
        fallback: /* @__PURE__ */ l("div", { className: "flex h-[400px] items-center justify-center text-muted-foreground", children: "Loading code editor..." }),
        children: /* @__PURE__ */ l(on, { fallback: /* @__PURE__ */ l("div", { children: "Something went wrong" }), children: /* @__PURE__ */ l(Wk, { tab: s }) })
      }
    ) })
  ] }) });
}, Uk = () => {
  const t = G("smallScreenComponent", null);
  return /* @__PURE__ */ l("section", { className: "fixed inset-0 z-[99999] flex h-screen w-screen items-center justify-center bg-white xl:hidden", children: t ? te.createElement(t) : /* @__PURE__ */ l("div", { className: "flex h-full w-full items-center justify-center bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:10px_10px] py-12 sm:py-16 lg:py-20", children: /* @__PURE__ */ l("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ b("div", { className: "mx-auto max-w-md space-y-6 text-center", children: [
    /* @__PURE__ */ b("div", { className: "space-y-4", children: [
      /* @__PURE__ */ l("h2", { className: "text-5xl font-bold tracking-tight text-gray-900", children: "Screen too small" }),
      /* @__PURE__ */ b("p", { className: "mx-auto max-w-sm text-sm leading-7 text-gray-600", children: [
        "Please view this page on greater than ",
        /* @__PURE__ */ l("strong", { className: "font-medium", children: "1280px" }),
        " screen width for the best experience."
      ] })
    ] }),
    /* @__PURE__ */ l("div", { className: "pt-4", children: /* @__PURE__ */ b("div", { className: "inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700", children: [
      /* @__PURE__ */ l("svg", { className: "mr-2 h-5 w-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ l(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        }
      ) }),
      "Minimum width: 1280px"
    ] }) })
  ] }) }) }) });
}, Kk = () => {
  const { clear: t } = Ar(), [, e] = oe(), { clearHighlight: n } = At(), [, r] = Fe(), [, s] = D(oc), { reset: o } = li(), { setSaveState: i } = _r(), [, a] = Jl(), [, c] = D(Bo);
  return () => {
    a({}), e([]), r([]), n(), t(), s(!1), o(), i("SAVED"), c(0);
  };
}, Jk = (t, e) => {
  const n = [];
  let r = ee(t, { _id: e }), s = _(r, "_parent", "");
  for (; Ct(s) && !F(s); )
    n.push(r == null ? void 0 : r._parent), r = ee(t, { _id: s }), s = r == null ? void 0 : r._parent;
  return $t(n);
}, Yk = P([]), Xk = () => {
  const [t] = oe(), e = Ue(He), [, n] = D(Yk);
  z(() => {
    let r = [];
    const s = ye(t);
    Ct(s) && (r = [s, ...Jk(e, s)]), n(r);
  }, [t, e, n]);
}, qk = (t) => {
  const [, e] = ue(), n = Kk(), [r] = D(Io);
  D(hi), _c(), Xk(), Sh(), Ch(), Ph();
  const { postMessage: s } = tc(), [, o] = D(Xl), i = ai();
  return z(() => {
    Qe.set(
      // @ts-ignore
      si,
      vr(t, ["blocks", "translations", "pageExternalData", "globalStyles"])
    );
  }, [t]), z(() => {
    Qe.set(ii, t.pageExternalData || {});
  }, [t.pageExternalData]), z(() => {
    Qe.set(Er, t.designTokens || {});
  }, [t.designTokens]), z(() => {
    o(!1), setTimeout(() => {
      const a = Eo(t.blocks || []);
      e(a), a && a.length > 0 && s({ type: "blocks-updated", blocks: a }), n(), o(!0), i(a);
    }, 400);
  }, [t.blocks]), z(() => {
    xs.changeLanguage(t.locale || "en");
  }, [t.locale]), z(() => {
    Dk(t.debugLogs ?? !1);
  }, [t.debugLogs]), z(() => {
    t.translations && ht(t.translations, (a, c) => {
      xs.addResourceBundle(c, "translation", a, !0, !0);
    });
  }, [t.translations]), z(() => (r !== "SAVED" ? window.onbeforeunload = () => "" : window.onbeforeunload = null, () => {
    window.onbeforeunload = null;
  }), [r]), null;
}, Zk = (t) => {
  const e = M(() => t.layout || Rk, [t.layout]), n = G("builderTheme", Ks), r = G("flags.exportCode", !1);
  return /* @__PURE__ */ b(Q, { children: [
    t.children,
    /* @__PURE__ */ l(Ac, { theme: n }),
    /* @__PURE__ */ l(e, {}),
    r && /* @__PURE__ */ l(Gk, {})
  ] });
}, lC = (t) => {
  const e = t.onError || wt;
  return /* @__PURE__ */ l("div", { className: "h-screen w-screen", children: /* @__PURE__ */ b(on, { fallback: /* @__PURE__ */ l(ur, {}), onError: e, children: [
    /* @__PURE__ */ l(Uk, {}),
    /* @__PURE__ */ l(Zk, { ...t }),
    /* @__PURE__ */ l(qk, { ...t }),
    /* @__PURE__ */ l(Ok, {}),
    /* @__PURE__ */ l(If, { richColors: !0 })
  ] }) });
}, cC = ({
  baseUrl: t = "https://chaibuilder-sdk.vercel.app"
} = {}) => ({
  name: "Chai Library",
  description: "",
  getBlocksList: async (e) => {
    try {
      const n = await fetch(`${t}/library-blocks/blocks-list.json`);
      return n.ok ? (await n.json()).map((s) => {
        var o;
        return {
          ...s,
          preview: (o = s.preview) != null && o.startsWith("http") ? s.preview : `${t}${s.preview}`
        };
      }) : (console.error("Failed to fetch blocks list:", n.status, n.statusText), []);
    } catch (n) {
      return console.error("Error fetching blocks list:", n), [];
    }
  },
  getBlock: async ({ block: e }) => {
    try {
      const n = await fetch(`${t}/${e.id}.html?raw`);
      return n.ok ? await n.text() : (console.error(
        `Failed to fetch block "${e.id}" from "${t}/${e.id}.html?raw": ${n.status} ${n.statusText}`
      ), `<!-- Error loading block "${e.id}": ${n.status} ${n.statusText} -->`);
    } catch (n) {
      return console.error(`Error fetching block "${e.id}" from "${t}/${e.id}.html?raw":`, n), `<!-- Error loading block "${e.id}" -->`;
    }
  }
}), Qk = (t, e) => t.map((n) => {
  const r = Pe(n._type);
  if (!r) return n;
  const s = r.i18nProps;
  if (!s) return n;
  const o = Z(e, { _type: n._type }), i = dn(n, s);
  return ht(i, (a, c) => {
    const d = ee(o, (u) => {
      var h;
      const p = typeof u[c] == "string" ? (h = u[c]) == null ? void 0 : h.trim().toLowerCase() : JSON.stringify(u[c]), f = typeof a == "string" ? a.trim().toLowerCase() : JSON.stringify(a);
      return p === f;
    });
    if (d) {
      const u = Z(Object.keys(d), (f) => Re(f, `${c}-`)), p = dn(d, u);
      n = { ...n, ...p };
    }
  }), n;
}), dC = () => {
  const [t] = ue();
  return B(
    (e) => {
      const n = fr(e), r = uf(n, t);
      return Qk(r, t);
    },
    [t]
  );
}, Tu = (t, e) => {
  const n = t.filter((s) => s._parent === e), r = n.flatMap((s) => Tu(t, s._id));
  return [...n, ...r];
}, e1 = (t, e) => {
  const n = e.find((s) => s._id === t);
  if (!n) return [];
  const r = Tu(e, t);
  return [n, ...r];
}, uC = () => {
  const t = ae(), [e] = ue();
  return B(
    (n = "") => {
      const r = t != null && t._id ? e1(t._id, e) : e;
      return r ? jn(
        r.map((s) => {
          const o = Pe(s._type);
          if (!o) return null;
          const i = (o == null ? void 0 : o.i18nProps) ?? [];
          if (i.length === 0) return null;
          const a = n === "ALL" ? Object.keys(s).filter((d) => i.find((u) => d.startsWith(u))) : i.map((d) => n ? `${d}-${n}` : d), c = dn(s, ["_id"]);
          return ht(a, (d) => {
            c[d] = _(s, d, _(s, d.replace(`-${n}`, "")));
          }), c;
        })
      ) : [];
    },
    [t == null ? void 0 : t._id, e]
  );
}, Bu = (t, e) => {
  const n = t.filter((o) => o._parent === e), r = n.map((o) => o._id), s = n.flatMap((o) => Bu(t, o._id));
  return [...r, ...s];
}, t1 = (t, e, n) => {
  const r = ee(t, { _id: e });
  if (!r) return t;
  const s = t.findIndex((p) => p._id === e), o = Bu(t, e), i = /* @__PURE__ */ new Set([e, ...o]), a = t.filter((p) => !i.has(p._id)), c = new Set(n.map((p) => p._id)), d = n.map((p) => !p._parent || !c.has(p._parent) ? { ...p, _parent: r._parent } : p);
  return [
    ...a.slice(0, s),
    ...d,
    ...a.slice(s)
  ];
}, pC = () => {
  const [, t] = oe(), { setNewBlocks: e } = $e(), { hasPermission: n } = gt();
  return B(
    (r, s) => {
      if (!n(Ie.EDIT_BLOCK)) return;
      const o = Qe.get(He), i = r ? t1(o, r, s) : s;
      e(i), s.length > 0 && setTimeout(() => t([s[0]._id]), 200);
    },
    [t, e, n]
  );
};
if (typeof window > "u")
  throw new Error("@chaibuilder/sdk is only supported in the browser. Avoid using it in the server side.");
export {
  lt as $,
  Ko as A,
  Pi as B,
  Rd as C,
  $o as D,
  Jo as E,
  Ne as F,
  Se as G,
  be as H,
  Qd as I,
  eu as J,
  F0 as K,
  Vn as L,
  nu as M,
  Md as N,
  ru as O,
  zo as P,
  Oi as Q,
  Di as R,
  Hi as S,
  Go as T,
  Nn as U,
  pC as V,
  di as W,
  Fk as X,
  gt as Y,
  zi as Z,
  Wo as _,
  oe as a,
  bi as a$,
  du as a0,
  ji as a1,
  Wi as a2,
  Gi as a3,
  fu as a4,
  pu as a5,
  mu as a6,
  hu as a7,
  xo as a8,
  uv as a9,
  Ck as aA,
  lC as aB,
  jt as aC,
  cu as aD,
  Da as aE,
  Ga as aF,
  dx as aG,
  H0 as aH,
  Av as aI,
  Vv as aJ,
  q0 as aK,
  xk as aL,
  Nk as aM,
  Ek as aN,
  $0 as aO,
  Y0 as aP,
  Gk as aQ,
  Kx as aR,
  cC as aS,
  dC as aT,
  nh as aU,
  Oo as aV,
  Rr as aW,
  Ar as aX,
  ft as aY,
  rh as aZ,
  $e as a_,
  E0 as aa,
  S0 as ab,
  Yd as ac,
  gx as ad,
  Ts as ae,
  Ho as af,
  tx as ag,
  G as ah,
  sc as ai,
  iC as aj,
  I0 as ak,
  aC as al,
  fv as am,
  Ie as an,
  ng as ao,
  Er as ap,
  Zr as aq,
  _r as ar,
  ue as as,
  og as at,
  Ll as au,
  Pl as av,
  vk as aw,
  Su as ax,
  Eu as ay,
  _u as az,
  _t as b,
  Fe as b0,
  Ut as b1,
  li as b2,
  Eh as b3,
  Sr as b4,
  oC as b5,
  Li as b6,
  A0 as b7,
  Kl as c,
  Je as d,
  Lr as e,
  Fo as f,
  Pr as g,
  Un as h,
  Ld as i,
  Pd as j,
  Od as k,
  Dd as l,
  Bs as m,
  yi as n,
  xx as o,
  bn as p,
  yx as q,
  ae as r,
  uC as s,
  sh as t,
  Bd as u,
  kn as v,
  Cn as w,
  Ft as x,
  Ee as y,
  Uo as z
};
