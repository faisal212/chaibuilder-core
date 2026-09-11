var Du = Object.defineProperty;
var $u = (t, e, n) => e in t ? Du(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Yt = (t, e, n) => $u(t, typeof e != "symbol" ? e + "" : e, n);
import { jsx as l, jsxs as b, Fragment as Q } from "react/jsx-runtime";
import { noop as wt, get as _, has as ce, find as ee, filter as Z, flatten as $t, map as A, includes as Ie, without as Fu, compact as jn, forEach as vo, keys as kt, isEmpty as F, set as Ge, unset as zu, omit as vr, isString as Ct, chunk as Hu, values as Lt, pick as dn, startsWith as Re, isFunction as Zt, isObject as $s, memoize as Vu, each as ht, first as ye, findIndex as ir, throttle as ju, some as Wu, uniq as Fs, cloneDeep as to, isArray as wr, isNull as al, split as Gu, reject as Ur, take as Uu, debounce as zs, startCase as Kt, isNumber as Ku, parseInt as Ju, isNaN as Yu, range as Xe, flattenDeep as Ot, toLower as ll, nth as Xi, findLast as Xu, intersection as qu, toUpper as qo, kebabCase as cl, capitalize as $n, groupBy as dl, sortBy as Zu, reverse as Qu, camelCase as ep } from "lodash-es";
import * as W from "react";
import te, { useMemo as D, useCallback as I, useState as $, useEffect as z, useRef as ne, Component as ul, Children as tp, memo as kr, startTransition as np, createElement as un, createContext as wo, useContext as yn, Suspense as We, lazy as Hs } from "react";
import { ErrorBoundary as on } from "react-error-boundary";
import { F as j, z as Cr, B as oe, n as rp, u as Zo, o as op, l as pl, d as sp, G as fl, s as hl, v as Vs, y as ip, w as qi } from "./register-chai-top-bar-DWmJ2efT.js";
import { Provider as ap } from "react-wrap-balancer";
import { flip as lp, size as cp, limitShift as dp } from "@floating-ui/dom";
import { useFloating as up, shift as pp } from "@floating-ui/react-dom";
import { ChevronRightIcon as Wn, CheckIcon as Nr, CircleIcon as ml, PinTopIcon as fp, PinBottomIcon as hp, PinLeftIcon as mp, PinRightIcon as gp, GearIcon as bp, DragHandleDots2Icon as yp, ArrowUpIcon as qt, PlusIcon as qe, CopyIcon as js, TrashIcon as Ws, CaretDownIcon as gs, Cross1Icon as at, FontBoldIcon as xp, FontItalicIcon as gl, UnderlineIcon as bl, StrikethroughIcon as vp, ListBulletIcon as bs, ValueIcon as wp, TextAlignLeftIcon as Zi, TextAlignCenterIcon as Qi, TextAlignRightIcon as ea, Link2Icon as kp, LinkBreak2Icon as yl, EnterFullScreenIcon as Cp, Pencil2Icon as ko, MagnifyingGlassIcon as xl, ChevronLeftIcon as vl, LoopIcon as wl, IdCardIcon as kl, ChevronDownIcon as xn, InfoCircledIcon as pr, FileIcon as Np, PlusCircledIcon as Sp, DotsVerticalIcon as Co, TriangleDownIcon as Ep, RowSpacingIcon as _p, Cross2Icon as No, LetterCaseUppercaseIcon as Ap, OverlineIcon as Tp, StretchHorizontallyIcon as Ip, AlignRightIcon as Bp, AlignCenterHorizontallyIcon as Rp, AlignLeftIcon as Lp, ArrowLeftIcon as Zn, ArrowDownIcon as Rn, ArrowRightIcon as Qn, HeightIcon as nt, WidthIcon as rt, BorderAllIcon as It, ArrowBottomLeftIcon as Pp, ArrowBottomRightIcon as Op, ArrowTopRightIcon as Cl, ArrowTopLeftIcon as Mp, EyeClosedIcon as no, EyeOpenIcon as Nl, BoxIcon as So, MinusIcon as Dp, CrossCircledIcon as $p, TokensIcon as Fp, ChevronUpIcon as zp, ReloadIcon as Gs, CaretRightIcon as Hp, FrameIcon as Vp, EraserIcon as Sl, DownloadIcon as jp, CardStackPlusIcon as Wp, CardStackIcon as Us, ScissorsIcon as Gp, ExclamationTriangleIcon as Up, StackIcon as Kp, DoubleArrowDownIcon as Jp, DoubleArrowUpIcon as Yp, ResetIcon as ro, UploadIcon as Xp, TextIcon as qp, CornerTopRightIcon as Zp, MixerHorizontalIcon as oo, SunIcon as El, MoonIcon as _l, FaceIcon as Qp, ShuffleIcon as ef, ChatBubbleIcon as tf, StopIcon as nf, LightningBoltIcon as rf } from "@radix-ui/react-icons";
import { useDebouncedCallback as Nt, useThrottledCallback as pn, useResizeObserver as ys, useDebouncedState as ta } from "@react-hookz/web";
import { useTranslation as K, initReactI18next as of } from "react-i18next";
import * as Ae from "@radix-ui/react-dropdown-menu";
import { f as Pe, a as Ks, j as Eo, l as Js, b as na } from "./core-nSRy3D7z.js";
import sf from "@rjsf/core";
import af from "@rjsf/validator-ajv8";
import { atom as P, getDefaultStore as lf, useAtomValue as Ue, useAtom as M, useSetAtom as vt, Provider as cf } from "jotai";
import { C as Mt, S as St, R as ar, D as Dr, a as Kr } from "./STRINGS-BExFecZW.js";
import { isObject as ra } from "@rjsf/utils";
import { splitAtom as Al, atomWithStorage as Et, useAtomCallback as Tl } from "jotai/utils";
import { g as fn, a as Il, c as Ze } from "./common-functions-D2lMFR6K.js";
import df from "tree-model";
import uf from "undo-manager";
import * as xe from "@radix-ui/react-dialog";
import { f as pf, a as Bl, b as oa, c as sa, d as ia, r as ff, e as hf, j as vn, k as mf, g as fr, m as gf } from "./apply-binding-v_W4uR3U.js";
import { cva as Ys } from "class-variance-authority";
import * as Fn from "@radix-ui/react-tooltip";
import xs, { t as er } from "i18next";
import { Command as tt } from "cmdk";
import * as hr from "@radix-ui/react-popover";
import { useEditor as bf, BubbleMenu as yf, EditorContent as Rl } from "@tiptap/react";
import xf from "@tiptap/extension-text-style";
import vf from "@tiptap/extension-highlight";
import wf from "@tiptap/extension-link";
import kf from "@tiptap/extension-placeholder";
import Cf from "@tiptap/extension-text-align";
import Nf from "@tiptap/extension-underline";
import Sf from "@tiptap/starter-kit";
import Ef, { clsx as _f } from "clsx";
import { twMerge as Ll } from "tailwind-merge";
import { HexAlphaColorPicker as Af } from "react-colorful";
import { e as Xs, a as Tf, d as Pl, p as If, g as Bf, f as Rf, h as Lf } from "./chai-theme-helpers-BEf2rwE4.js";
import aa, { createPortal as Pf } from "react-dom";
import * as vs from "@radix-ui/react-switch";
import * as hn from "@radix-ui/react-accordion";
import Ol from "fuse.js";
import * as _o from "@radix-ui/react-hover-card";
import Of from "react-autosuggest";
import { toast as Ce, Toaster as Mf } from "sonner";
import * as sn from "@radix-ui/react-scroll-area";
import * as wn from "@radix-ui/react-tabs";
import * as Ml from "@radix-ui/react-label";
import * as _e from "@radix-ui/react-select";
import { Tree as Df } from "react-arborist";
import * as Ke from "@radix-ui/react-alert-dialog";
import * as Dl from "@radix-ui/react-separator";
import * as tr from "@radix-ui/react-slider";
import { u as qs } from "./fonts-B3UYxuJI.js";
import { parse as $f, stringify as Ff } from "himalaya";
import "nanoid";
import "@mhsdesign/jit-browser-tailwindcss";
import zf from "@tailwindcss/aspect-ratio";
import Hf from "@tailwindcss/container-queries";
import Vf from "@tailwindcss/forms";
import jf from "@tailwindcss/typography";
import { motion as $r } from "framer-motion";
import { PlusIcon as Wf, ListTree as Gf } from "lucide-react";
import { s as Uf } from "./get-chai-builder-tailwind-config-k8l5sdcw.js";
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
const Zs = ({
  className: t = "h-full w-full",
  onClick: e = wt
}) => /* @__PURE__ */ l("svg", { className: t, viewBox: "0 0 256 256", fill: "currentColor", onClick: e, children: /* @__PURE__ */ l("path", { d: "m198.39 128.986-52.16-19.216-19.216-52.16a16 16 0 0 0-30.028 0L77.77 109.77l-52.16 19.216a16 16 0 0 0 0 30.028l52.16 19.216 19.216 52.16a16 16 0 0 0 30.028 0l19.216-52.16 52.16-19.216a16 16 0 0 0 0-30.028m-57.69 34.23a15.97 15.97 0 0 0-9.483 9.483l-19.22 52.152-19.214-52.15a15.97 15.97 0 0 0-9.482-9.484l-52.152-19.22 52.15-19.214a15.97 15.97 0 0 0 9.484-9.482l19.22-52.152 19.214 52.15a15.97 15.97 0 0 0 9.482 9.484l52.152 19.22ZM144 40a8 8 0 0 1 8-8h16V16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V48h-16a8 8 0 0 1-8-8m104 48a8 8 0 0 1-8 8h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 8 8" }) }), kn = Ae.Root, Cn = Ae.Trigger, Kf = W.forwardRef(({ className: t, inset: e, children: n, ...r }, o) => /* @__PURE__ */ b(
  Ae.SubTrigger,
  {
    ref: o,
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
Kf.displayName = Ae.SubTrigger.displayName;
const Jf = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
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
Jf.displayName = Ae.SubContent.displayName;
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
const $l = W.forwardRef(({ className: t, children: e, checked: n, ...r }, o) => /* @__PURE__ */ b(
  Ae.CheckboxItem,
  {
    ref: o,
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
$l.displayName = Ae.CheckboxItem.displayName;
const Yf = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ b(
  Ae.RadioItem,
  {
    ref: r,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...n,
    children: [
      /* @__PURE__ */ l("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l(Ae.ItemIndicator, { children: /* @__PURE__ */ l(ml, { className: "h-2 w-2 fill-current" }) }) }),
      e
    ]
  }
));
Yf.displayName = Ae.RadioItem.displayName;
const Fl = W.forwardRef(({ className: t, inset: e, ...n }, r) => /* @__PURE__ */ l(
  Ae.Label,
  {
    ref: r,
    className: j("px-2 py-1.5 text-sm font-semibold", e && "pl-8", t),
    ...n
  }
));
Fl.displayName = Ae.Label.displayName;
const zl = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(Ae.Separator, { ref: n, className: j("-mx-1 my-1 h-px bg-muted", t), ...e }));
zl.displayName = Ae.Separator.displayName;
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
  return e ? ce(e, "canAcceptBlock") : !1;
}, Xf = (t, e) => {
  const n = Pe(e);
  return n && n.canBeNested ? n.canBeNested(t) : !0;
}, Qs = (t) => {
  const e = Pe(t);
  return e && e.canDuplicate ? e.canDuplicate() : !0;
}, ei = (t) => {
  const e = Pe(t);
  return e && e.canDelete ? e.canDelete() : !0;
}, la = (t, { dragSource: e, dropTarget: n }) => {
  const r = _(e, "data._type", ""), o = _(n, "data._type", "");
  return mt(o, r);
};
import.meta.vitest && describe("canDropBlock Function", () => {
  it('should return false if dragSourceType is "Slot"', () => {
    const t = { data: { _type: "Slot" } }, e = { data: {} };
    expect(la({}, { dragSource: t, dropTarget: e })).toBe(!0);
  }), it("should return true if dropTargetType is empty", () => {
    const t = { data: { _type: "Box" } }, e = { data: {} };
    expect(la({}, { dragSource: t, dropTarget: e })).toBe(!0);
  });
});
class qf {
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
    r && r.forEach((o) => o(n));
  }
}
const me = new qf();
function Hl(t, e, n) {
  const r = Z(t, (s) => s._parent === e), o = [];
  for (let s = 0; s < r.length; s++)
    if (Z(t, { _parent: r[s]._id }).length > 0) {
      const i = fn();
      o.push({ ...r[s], oldId: r[s]._id, _id: i, _parent: n }), o.push($t(Hl(t, r[s]._id, i)));
    } else
      o.push({
        ...r[s],
        oldId: r[s]._id,
        _id: fn(),
        _parent: n
      });
  return $t(o);
}
function ti(t) {
  const e = {};
  t.forEach((r) => {
    e[r._id] = { ...r, children: [] };
  });
  const n = [];
  return t.forEach((r) => {
    if (r._parent) {
      const o = e[r._parent];
      o && o.children.push(e[r._id]);
    } else
      n.push(e[r._id]);
  }), n;
}
const ws = (t, e, n = null) => {
  let r = ee(t, { _id: e });
  r = { ...r, oldId: r._id, _id: fn() }, n !== (r == null ? void 0 : r._parent) && (r = { ...r, _parent: n });
  const o = [r];
  return Z(t, { _parent: e }).length > 0 && o.push($t(Hl(t, e, r._id))), $t(o);
}, He = P([]);
He.debugLabel = "presentBlocksAtom";
const Vl = P((t) => {
  const e = t(He);
  return ti([...e]);
});
Vl.debugLabel = "treeDSBlocks";
const Sr = Al(He);
Sr.debugLabel = "pageBlocksAtomsAtom";
const Zf = P("");
Zf.debugLabel = "builderActivePageAtom";
const Qf = P(-1);
Qf.debugLabel = "destinationDropIndexAtom";
const jl = P([]);
jl.debugLabel = "buildingBlocksAtom";
const eh = P((t) => {
  const e = t(jl);
  return Z(e, (n) => ce(n, "blockId"));
});
eh.debugLabel = "globalBlocksAtom";
const Gn = P([]);
Gn.debugLabel = "structureErrorsAtom";
const ni = P(!0);
ni.debugLabel = "structureValidationValidAtom";
const ri = P(!1);
ri.debugLabel = "hasStructureErrorsAtom";
const oi = P(!1);
oi.debugLabel = "hasStructureWarningsAtom";
const Wl = P((t) => t(Gn).filter((n) => n.severity === "error").length);
Wl.debugLabel = "structureErrorCountAtom";
const Gl = P((t) => t(Gn).filter((n) => n.severity === "warning").length);
Gl.debugLabel = "structureWarningCountAtom";
const Ul = P((t) => {
  const e = t(Gn), n = {};
  return e.forEach((r) => {
    r.blockId && (n[r.blockId] || (n[r.blockId] = []), n[r.blockId].push(r));
  }), n;
});
Ul.debugLabel = "structureErrorsByBlockAtom";
const Ut = P({}), th = P({}), Qe = lf(), nh = () => Qe.get(He), G = (t, e) => {
  const n = Ue(li);
  return D(() => _(n, t, e), [n, t, e]);
}, Kl = P("");
Kl.debugLabel = "selectedLanguageAtom";
const Je = () => {
  const t = G("languages", []), e = G("fallbackLang", "en"), [n, r] = M(Kl), o = (s) => {
    r(e === s ? "" : s);
  };
  return {
    languages: t == null ? void 0 : t.filter((s) => s !== e),
    fallbackLang: e,
    selectedLang: n,
    setSelectedLang: o
  };
}, Ao = P([]);
Ao.debugLabel = "selectedBlockIdsAtom";
const Jl = P((t) => {
  const e = t(Ut), n = Object.values(e).flatMap((r) => r.blocks);
  return [...t(He), ...n];
});
Jl.debugLabel = "selectableBlocksAtom";
const si = P((t) => {
  const e = t(Jl), n = t(Ao);
  return A(
    Z(e, ({ _id: r }) => Ie(n, r)),
    (r) => ({ ...r })
  );
});
si.debugLabel = "selectedBlocksAtom";
const To = P((t) => {
  const e = t(si);
  if (e.length !== 0 && e.length === 1)
    return e[0];
});
To.debugLabel = "selectedBlockAtom";
const ae = () => Ue(To), rh = (t) => _(t, "_parent", null), oh = P((t) => {
  const e = t(si), n = A(e, rh);
  return Z(t(He), (r) => Ie(n, r._id));
});
oh.debugLabel = "selectedBlocksParentsAtom";
const Yl = P(() => !1);
Yl.debugLabel = "selectedBlockFlexChildAtom";
const Xl = P(() => !1);
Xl.debugLabel = "selectedBlockGridChildAtom";
const ii = P("");
ii.debugLabel = "styleStateAtom";
const ql = Et("styleBreakpoint", "xs");
ql.debugLabel = "styleBreakpointAtom";
const sh = () => ({
  flexChild: Ue(Yl),
  gridChild: Ue(Xl)
}), ih = P((t) => {
  const e = t(To), n = t(He);
  let r = e;
  const o = [e];
  do {
    const s = n.find(({ _id: i }) => i === (r == null ? void 0 : r._parent));
    r = s, s && o.push(s);
  } while (r != null && r._parent);
  return o;
}), ah = () => jn(Ue(ih)), re = () => {
  const [t, e] = M(Ao), n = I(
    (r) => {
      e((o) => Ie(o, r) ? Fu(o, r) : [...o, r]);
    },
    [e]
  );
  return [t, e, n];
}, Zl = (t, e, n) => {
  const r = Pe(_(n, "_type", ""));
  if (!r) return t;
  const o = { ...t };
  return vo(kt(t), (s) => {
    if (Ie(_(r, "i18nProps", []), s) && !F(e)) {
      const i = `${s}-${e}`;
      Ge(o, i, t[s]), zu(o, s);
    }
  }), o;
}, _t = () => {
  const { updateBlocks: t } = $e(), { selectedLang: e } = Je(), n = ae();
  return I(
    (r, o, s) => {
      const i = Zl(o, e, n);
      t(r, i, s);
    },
    [e, n, t]
  );
}, lh = () => {
  const { updateMultipleBlocksProps: t } = $e();
  return I(
    (e) => {
      t(e);
    },
    [t]
  );
}, ch = () => {
  const { updateBlocksRuntime: t } = $e();
  return I(
    async (e, n, r = 30) => {
      const o = kt(vr(n, ["_id"]));
      for (const s of o) {
        const i = n[s];
        if (Ct(i)) {
          const a = Hu(i.split(""), 12);
          let c = "";
          t([e], { [s]: "" });
          for (let d = 0; d < a.length; d++)
            c += a[d].join(""), t([e], { [s]: c }), await new Promise((u) => setTimeout(u, r));
        }
      }
    },
    [t]
  );
}, dh = () => {
  const { updateMultipleBlocksProps: t } = $e(), e = ch();
  return I(
    async (n) => {
      for (const r of n)
        await e(r._id, r);
      t(n);
    },
    [e, t]
  );
}, Ql = () => {
  const { updateBlocksRuntime: t } = $e(), { selectedLang: e } = Je(), n = ae();
  return I(
    (r, o) => {
      const s = Zl(o, e, n);
      t(r, s);
    },
    [e, n, t]
  );
}, ai = P({});
ai.debugLabel = "blockRepeaterDataAtom";
const ec = () => M(ai), uh = (t, e, n, r) => {
  const [o, s] = $({
    status: "idle",
    props: {},
    error: void 0
  }), i = Ql(), a = G("getBlockAsyncProps", async (h) => ({})), c = vt(ai), d = JSON.stringify([t == null ? void 0 : t._id, ...Lt(dn(t, n ?? []))]), u = (t == null ? void 0 : t._type) === "Repeater" && Re(t.repeaterItems, `{{${Mt}`), p = (t == null ? void 0 : t._type) !== "Repeater" && e === "live";
  return z(() => {
    if (e === "mock") {
      if (Zt(r)) {
        s((m) => ({ ...m, status: "loading", props: {} }));
        const h = r({ block: t });
        if (!ra(h))
          throw new Error("mockDataProvider should return an object");
        s((m) => ({ ...m, status: "loaded", props: h }));
      }
      return;
    }
    e === "live" && (!u && !p || (s((h) => ({ ...h, status: "loading", props: {} })), a({ block: t }).then((h = {}) => {
      u ? (c((m) => ({
        ...m,
        [t._id]: {
          status: "loaded",
          props: _(h, "items", []),
          repeaterItems: t.repeaterItems
        }
      })), s((m) => ({ ...m, status: "loaded", props: { totalItems: _(h, "totalItems") } })), i([t._id], { totalItems: _(h, "totalItems") })) : s((m) => ({ ...m, status: "loaded", props: ra(h) ? h : {} }));
    }).catch((h) => {
      u ? (c((m) => ({
        ...m,
        [t._id]: { status: "error", error: h, props: [] }
      })), s((m) => ({ ...m, status: "error", error: h, props: {} }))) : s((m) => ({ ...m, status: "error", error: h, props: {} }));
    })));
  }, [t == null ? void 0 : t._id, d, u, p, r, e]), {
    $loading: _(o, "status") === "loading",
    ...t ? _(o, "props", {}) : {}
  };
}, li = P(null);
li.debugLabel = "chaiBuilderPropsAtom";
const ph = P({});
ph.debugLabel = "chaiExternalDataAtom";
const fh = P({});
fh.debugLabel = "chaiRjsfFieldsAtom";
const hh = P({});
hh.debugLabel = "chaiRjsfWidgetsAtom";
const mh = P({});
mh.debugLabel = "chaiRjsfTemplatesAtom";
const ci = P({});
ci.debugLabel = "chaiPageExternalDataAtom";
const Er = P({});
Er.debugLabel = "chaiDesignTokensAtom";
const Un = () => {
  const [t] = ec(), e = D(() => {
    const r = {};
    return Object.entries(t).forEach(([o, s]) => {
      s.status === "loaded" && s.repeaterItems && (r[s.repeaterItems.replace("}}", `/${o}`).replace("{{", "")] = s.props);
    }), r;
  }, [t]);
  return { ...Ue(ci), ...e };
}, Io = P(0), tc = P({
  isOpen: !1,
  blockId: null
}), gh = [
  {
    name: "no-nested-div-in-p",
    description: "Prevents div elements from being nested inside paragraph elements",
    validate: (t, e) => {
      const n = [], r = (o, s = !1) => {
        o.forEach((i) => {
          const a = i._type === "Paragraph";
          i._type === "Box" && s && n.push({
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
      const n = [], r = (s, i = !1, a = []) => {
        s.forEach((c) => {
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
      }, o = (s) => {
        s.filter((a) => a._type === "Link" || a._type === "Button" && a.link && a.link.href && a.link.href.trim() !== "").forEach((a) => {
          if (a._parent) {
            const c = s.find((f) => f._id === a._parent), d = c && c._type === "Link", u = c && c._type === "Button" && c.link && c.link.href && c.link.href.trim() !== "";
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
              const f = s.find((h) => h._id === p._parent);
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
      return r(e), o(t), n;
    }
  },
  {
    name: "listitem-in-list",
    description: "Ensures ListItems are only inside List containers",
    validate: (t, e) => {
      const n = [], r = (o, s = null) => {
        o.forEach((i) => {
          i._type === "ListItem" && s !== "List" && n.push({
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
      const n = [], r = (o, s = []) => {
        o.forEach((i) => {
          const a = [...s, i._type];
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
      const n = [], r = (o, s = !1) => {
        o.forEach((i) => {
          const a = i._type === "Button";
          a && s && n.push({
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
      const n = [], r = (o, s = []) => {
        o.forEach((i) => {
          const a = i._type === "Paragraph";
          if (a && s.length > 0 && n.push({
            id: `nested-paragraph-${i._id}`,
            message: "Paragraph cannot be nested inside another paragraph",
            severity: "error",
            blockId: i._id
          }), i.children && i.children.length > 0) {
            const c = a ? [...s, i._id] : s;
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
      const n = [], r = [], o = (s, i = []) => {
        s.forEach((a) => {
          if (a._type === "Heading") {
            const c = a.tag || "h2", d = parseInt(c.replace("h", "")) || 2;
            r.push({ level: d, blockId: a._id, path: [...i, a._id] });
          }
          a.children && a.children.length > 0 && o(a.children, [...i, a._id]);
        });
      };
      o(e);
      for (let s = 1; s < r.length; s++) {
        const i = r[s], a = r[s - 1];
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
], bh = [
  {
    name: "image-alt-text",
    description: "Warns if images are missing alt text",
    validate: (t, e) => {
      const n = [], r = (o) => {
        o.forEach((s) => {
          s._type === "Image" && !s.alt && n.push({
            id: `image-missing-alt-${s._id}`,
            message: "Image should have alt text for accessibility",
            severity: "warning",
            blockId: s._id
          }), s.children && s.children.length > 0 && r(s.children);
        });
      };
      return r(e), n;
    }
  },
  {
    name: "button-accessibility",
    description: "Ensures buttons have accessible labels",
    validate: (t, e) => {
      const n = [], r = (o) => {
        o.forEach((s) => {
          s._type === "Button" && (s.content || s.children && s.children.length > 0 || n.push({
            id: `button-no-label-${s._id}`,
            message: "Button should have accessible content (text or icon)",
            severity: "warning",
            blockId: s._id
          })), s.children && s.children.length > 0 && r(s.children);
        });
      };
      return r(e), n;
    }
  }
];
class yh {
  constructor() {
    Yt(this, "rules", [...gh]);
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
    this.rules.push(...bh);
  }
  getRuleNames() {
    return this.rules.map((e) => e.name);
  }
}
const Qo = new yh(), di = (t = {}) => {
  const e = G("flags.validateStructure", !0), n = vt(Gn), r = vt(ni), o = vt(ri), s = vt(oi), i = I(
    (c) => {
      const d = c;
      if (!e || !d || d.length === 0) return;
      const u = ti(d), p = [];
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
      n(p), r(g), o(h), s(m);
    },
    [
      e,
      t,
      n,
      r,
      o,
      s
    ]
  );
  return Nt(
    i,
    [
      e,
      t,
      n,
      r,
      o,
      s
    ],
    1e3
  );
}, xh = [
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
}, vh = P(ks);
P(null);
const wh = () => {
  const [t, e] = M(vh);
  return [
    $s(t) ? { ...ks, ...t } : ks,
    e
  ];
}, kh = P(null), Ch = () => ({ currentPage: Ue(kh) }), Nh = Vu((t) => {
  const e = Pe(t), n = _(e, "schema.properties", {});
  return jn(
    Object.keys(n).map((r) => _(n[r], "builderProp", !1) || _(n[r], "runtime", !1) ? r : null)
  );
}), Sh = () => {
  const [t] = wh(), { currentPage: e } = Ch(), [n] = le();
  return I(() => {
    const r = A(n, (o) => vr(o, Nh(o._type)));
    return {
      currentPage: e,
      blocks: r
    };
  }, [t, e, n]);
}, nc = P(!1), Eh = () => M(nc), gt = () => {
  const t = G("permissions", null);
  return { hasPermission: I(
    (n) => t ? t.includes(n) : !0,
    [t]
  ) };
}, rc = (t) => Z(
  t.map(
    (e) => e._type === "PartialBlock" || e._type === "GlobalBlock" ? _(e, "partialBlockId", _(e, "globalBlock", "")) : null
  ),
  Boolean
);
function oc(t, e, n, r = /* @__PURE__ */ new Set()) {
  if (t === e) return !0;
  if (r.has(e)) return !1;
  r.add(e);
  const o = n[e] || [];
  for (const s of o)
    if (s === t || oc(t, s, n, r)) return !0;
  return !1;
}
function Cs(t, e, n = /* @__PURE__ */ new Set()) {
  if (n.has(t)) return 0;
  n.add(t);
  const r = e[t] || [];
  return r.length === 0 ? 1 : 1 + Math.max(...r.map((o) => Cs(o, e, new Set(n))));
}
const sc = () => {
  const [t, e] = $(!1), [n, r] = $(null), [o, s] = M(th), i = G("getPartialBlocks", async () => ({})), a = I(async () => {
    e(!0), r(null);
    try {
      const c = await i();
      s(c), e(!1);
    } catch (c) {
      r(c instanceof Error ? c.message : "Failed to fetch partial blocks"), e(!1);
    }
  }, [i, s]);
  return z(() => {
    a();
  }, []), { data: o, isLoading: t, refetch: a, error: n };
}, ui = () => {
  const [t, e] = M(Ut), n = I(
    (o) => _(t, `${o}.blocks`, []),
    [t]
  ), r = I(() => e({}), [e]);
  return { getPartialBlocks: n, reset: r };
}, io = 4, _h = () => {
  const [t] = M(Ut);
  return D(() => {
    const e = {};
    return Object.entries(t).forEach(([n, r]) => {
      e[n] = r.dependencies;
    }), e;
  }, [t]);
}, ic = () => {
  const t = G("pageId", ""), e = _h();
  return I(
    (n) => {
      if (!t) return { canAdd: !0 };
      if (t === n)
        return { canAdd: !1, reason: "Cannot add a partial inside itself" };
      if (oc(t, n, e))
        return { canAdd: !1, reason: "Adding this partial would create a circular reference" };
      const r = Cs(t, e), o = Cs(n, e);
      return Math.max(r, 1 + o) > io ? { canAdd: !1, reason: `Maximum nesting depth (${io} levels) would be exceeded` } : { canAdd: !0 };
    },
    [t, e]
  );
}, Ah = () => {
  const [t] = le(), [e, n] = M(Ut), r = G("getPartialBlockBlocks", async (c) => []), o = ne(/* @__PURE__ */ new Set()), s = D(() => t.filter((c) => c._type === "PartialBlock" || c._type === "GlobalBlock").map((c) => _(c, "partialBlockId", _(c, "globalBlock", ""))).filter(Boolean), [t]), i = D(() => {
    const c = [];
    return Object.values(e).forEach((d) => {
      d.status === "loaded" && c.push(...d.dependencies);
    }), c;
  }, [e]), a = D(() => [.../* @__PURE__ */ new Set([...s, ...i])], [s, i]);
  z(() => {
    const c = a.filter((d) => {
      const u = e[d], p = o.current.has(d);
      return (!u || u.status === "idle") && !p;
    });
    c.length !== 0 && (c.forEach((d) => o.current.add(d)), n((d) => {
      const u = {};
      return c.forEach((p) => {
        u[p] = { blocks: [], dependencies: [], status: "loading" };
      }), { ...d, ...u };
    }), Promise.all(
      c.map(async (d) => {
        try {
          const u = await r(d), p = rc(u);
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
          o.current.delete(d);
        }
      })
    ));
  }, [a, e, n, r]);
}, Bo = P("SAVED");
Bo.debugLabel = "builderSaveStateAtom";
const Th = (t, e) => e ? t.some((n) => {
  if (!(n != null && n._type) || n._type === "PartialBlock")
    return !1;
  try {
    const r = Pe(n._type);
    return r ? (ce(r, "i18nProps") ? r.i18nProps ?? [] : []).some((s) => {
      const i = `${s}-${e}`;
      return !n[i] || F(n[i]);
    }) : !1;
  } catch (r) {
    return console.warn(`Failed to get block definition for type: ${n._type}`, r), !1;
  }
}) : !1, _r = () => {
  const [t, e] = M(Bo), n = G("onSave", async (S) => {
  }), r = G("onSaveStateChange", wt), o = Sh(), { hasPermission: s } = gt(), { selectedLang: i, fallbackLang: a } = Je(), [c] = Eh(), d = Ue(Ut), u = di(), [, p] = M(Io), f = () => {
    const S = o();
    return !i || i === a ? !1 : Th(S.blocks || [], i);
  }, h = I(
    (S) => {
      const v = /* @__PURE__ */ new Set(), k = rc(S);
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
  ), m = I((S) => {
    const v = JSON.stringify(S), k = /pageType:[^:]+:([a-f0-9-]{36})/gi, T = [];
    let C;
    for (; (C = k.exec(v)) !== null; )
      C[1] && T.push(C[1]);
    return jn([...new Set(T)]);
  }, []), g = I((S) => {
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
  }, []), y = I(
    (S) => !S && (!s("save_page") || !c) || !S && t === "SAVED",
    [s, c, t]
  );
  return { savePage: pn(
    async (S = !1, v = !1) => {
      if (y(v))
        return;
      const k = o();
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
      o,
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
    const v = o();
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
}, Ih = () => {
  const { savePage: t, saveState: e } = _r(), n = G("autoSave", !0), r = G("autoSaveActionsCount", 10), [o] = M(Io);
  z(() => {
    n && (e === "SAVED" || e === "SAVING" || o >= r && t(!0));
  }, [n, t, e, o, r]);
}, Bh = () => {
  const [, t] = M(Io), { setSaveState: e } = _r();
  return I(() => {
    t((n) => n + 1), e((n) => n !== "UNSAVED" ? "UNSAVED" : n);
  }, [t, e]);
};
function Rh(t, e, n, r) {
  const o = [...e];
  let s = [...t];
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
      }), o.unshift(f), s = s.map((h) => {
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
  let i = s.filter((d) => !d._parent);
  n && (i = s.filter((d) => d._parent === n));
  const a = r !== void 0 && !isNaN(r) && r > -1 ? Math.min(r, i.length) : i.length;
  let c = s.length;
  for (let d = 0, u = 0; d < s.length; d++)
    if (n !== void 0 ? s[d]._parent === n : !s[d]._parent) {
      if (u === a) {
        c = d;
        break;
      }
      u++;
    }
  return !n && r !== void 0 && r >= i.length && (c = s.length), [
    ...s.slice(0, c),
    ...o,
    ...s.slice(c)
  ];
}
function Lh(t) {
  return ti(t);
}
function Ph(t) {
  let e = [];
  return t.walk((n) => (delete n.model.children, e.push(n.model), !0)), e;
}
function ca(t, e) {
  return t.first((n) => n.model._id === e) || null;
}
function Oh(t, e, n, r) {
  var d, u;
  const o = ca(t, e), s = ca(t, n);
  if (!o || !s) return !1;
  s.children || (s.model.children = []);
  let i = (d = s == null ? void 0 : s.children) == null ? void 0 : d.findIndex((p) => p.model._id === e);
  o.drop(), i = Math.max(i, 0);
  const c = (((u = o == null ? void 0 : o.model) == null ? void 0 : u._parent) || "root") === n && i <= r ? r - 1 : r;
  try {
    s.addChildAtIndex(o, c);
  } catch (p) {
    return console.error("Error adding child to parent:", p), !1;
  }
  return !0;
}
function Mh(t, e) {
  if (!e || !e._parent) return t;
  const n = e._parent, r = t.find((s) => s._id === n);
  if (!r) return t;
  const o = t.filter((s) => s._parent === n);
  if (o.length === 2) {
    const s = o.find((i) => i._id !== e._id);
    if (s && s._type === "Text" && "content" in r)
      return t.map((a) => {
        if (a._id === n) {
          const c = { ...a, content: s.content };
          return Object.keys(s).forEach((d) => {
            d.startsWith("content-") && (c[d] = s[d]);
          }), c;
        }
        return a;
      }).filter((a) => a._id !== s._id);
  }
  return t;
}
function Dh(t, e, n) {
  if (!n || n === "root") return t;
  const r = t.find((o) => o._id === n);
  if (!r) return t;
  if (r.content !== void 0 && r.content !== "" && !t.some((s) => s._parent === n && s._id !== e._id)) {
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
function $h(t, e, n, r) {
  if (!e) return t;
  const o = t.find((d) => d._id === e);
  if (!o) return t;
  let s = Mh(t, o);
  const i = n || "root", c = new df().parse({ _id: "root", children: Lh(s) });
  if (Oh(c, e, i, r)) {
    let d = Ph(c);
    const u = d.find((p) => p._id === e);
    return u && (u._parent = i === "root" ? null : i), d.shift(), n && (d = Dh(d, o, n)), d;
  }
  return s;
}
const nr = new BroadcastChannel("chaibuilder"), ac = () => {
  const t = G("pageId", "chaibuilder_page");
  return { postMessage: Nt(
    (n) => nr.postMessage({ ...n, pageId: t }),
    [t],
    200
  ) };
}, Fh = () => {
  const [, t] = le(), e = G("pageId", "chaibuilder_page"), { updateBlocksProps: n } = lc();
  z(() => (nr.onmessageerror = (r) => {
    console.log("error", r);
  }, nr.onmessage = (r) => {
    r.data.type === "blocks-updated" && r.data.pageId === e && t(r.data.blocks), r.data.type === "blocks-props-updated" && r.data.pageId === e && n(r.data.blocks);
  }, () => {
    nr.onmessage = null, nr.onmessageerror = null;
  }), [t, e]);
}, pi = (t, e) => {
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
  const o = [...e, ...r], s = [], i = Z(n, (a) => Ie(o, a._id) || Ie(o, a._parent) ? (s.push(a._id), !1) : !0);
  return F(s) ? i : pi(i, s);
}, fi = () => {
  const [t] = le(), [e, n] = re(), { setNewBlocks: r } = $e(), { hasPermission: o } = gt();
  return I(
    (s) => {
      var a;
      if (!o(Be.DELETE_BLOCK)) return;
      const i = ((a = ee(t, { _id: s[0] })) == null ? void 0 : a._parent) || null;
      r(pi(t, s)), setTimeout(() => n(i ? [i] : []), 200);
    },
    [t, n, e, o]
  );
}, zh = P(
  null,
  // it's a convention to pass `null` for the first argument
  (t, e, { id: n, props: r }) => {
    const o = t(Sr), s = ee(o, (i) => t(i)._id === n);
    return s ? e(s, { ...t(s), ...r }) : Hh(t, e, n, r);
  }
);
function Hh(t, e, n, r) {
  const o = t(Ut);
  for (const [s, i] of Object.entries(o))
    if (i.blocks.some((a) => a._id === n))
      return e(Ut, {
        ...o,
        [s]: {
          ...i,
          blocks: i.blocks.map((a) => a._id === n ? { ...a, ...r } : a)
        }
      }), null;
  return null;
}
const Vh = () => vt(zh), vC = (t) => Tl(
  I(
    (e, n, r) => {
      const o = e(t);
      if (!o || !o.length)
        return null;
      const s = ee(
        o,
        (i) => e(i)._id === (Ct(r) ? r : e(r)._id)
      );
      return s ? e(s) : null;
    },
    [t]
  ),
  { store: Qe }
), jh = (t) => Tl(
  I(
    (e, n, r) => {
      const o = e(t);
      if (!o || !o.length)
        return console.warn("No blocks available in splitAtoms"), null;
      const s = ee(
        o,
        (i) => e(i)._id === (Ct(r) ? r : e(r)._id)
      );
      return s || (console.warn(`Block with id ${r} not found`), null);
    },
    [t]
  ),
  { store: Qe }
), lc = () => {
  const [, t] = le(), { postMessage: e } = ac(), n = Vh(), r = di(), o = Bh();
  return {
    setNewBlocks: (s) => {
      t(s), e({ type: "blocks-updated", blocks: s });
    },
    addBlocks: (s, i, a) => {
      t((c) => {
        const d = Rh(c, s, i, a);
        return e({ type: "blocks-updated", blocks: d }), r(d), o(), d;
      });
    },
    removeBlocks: (s) => {
      t((i) => {
        const a = pi(i, s);
        return e({ type: "blocks-updated", blocks: a }), r(a), o(), a;
      });
    },
    moveBlocks: (s, i, a) => {
      t((c) => {
        let d = [...c];
        for (let u = 0; u < s.length; u++)
          d = $h(d, s[u], i, a);
        return ht(s, (u) => {
          const p = ee(d, (f) => f._id === u);
          p && n({ id: u, props: { _parent: p._parent || null } });
        }), e({ type: "blocks-updated", blocks: d }), r(d), o(), d;
      });
    },
    updateBlocksProps: (s) => {
      s.forEach((i) => {
        const a = vr(i, "_id");
        n({ id: i._id, props: a });
      }), e({ type: "blocks-props-updated", blocks: s }), o();
    }
  };
}, ft = new uf();
ft.setLimit(50);
const Wh = P({
  canUndo: !1,
  canRedo: !1
}), Ar = () => {
  const [, t] = M(Bo), [e, n] = M(Wh), r = G("onSaveStateChange", wt), o = I(() => {
    const d = {
      canUndo: ft.hasUndo(),
      canRedo: ft.hasRedo()
    };
    n(d), t("UNSAVED"), r("UNSAVED");
  }, [n, t, r]);
  z(() => (ft.setCallback(o), () => {
    ft.setCallback(wt);
  }), [o]);
  const s = I(
    (d) => {
      ft.add(d), o();
    },
    [o]
  ), i = I(() => {
    ft.undo(), o();
  }, [o]), a = I(() => {
    ft.redo(), o();
  }, [o]), c = I(() => {
    ft.clear(), n({
      canUndo: !1,
      canRedo: !1
    });
  }, [n]);
  return D(
    () => ({
      add: s,
      undo: i,
      redo: a,
      hasUndo: () => e.canUndo,
      hasRedo: () => e.canRedo,
      clear: c
    }),
    [s, i, a, e.canUndo, e.canRedo, c]
  );
}, da = () => {
  const t = Qe.get(Ut);
  return [
    ...Qe.get(He),
    ...Object.values(t).flatMap((e) => e.blocks)
  ];
}, le = () => M(He), $e = () => {
  const { add: t } = Ar(), {
    setNewBlocks: e,
    addBlocks: n,
    removeBlocks: r,
    moveBlocks: o,
    updateBlocksProps: s
  } = lc();
  return {
    moveBlocks: (h, m, g) => {
      const y = Qe.get(He), x = A(h, (S) => {
        const k = y.find((N) => N._id === S)._parent || null, C = y.filter((N) => k ? N._parent === k : !N._parent).map((N) => N._id).indexOf(S);
        return { _id: S, oldParent: k, oldPosition: C };
      }), w = x.find(({ _id: S }) => S === h[0]);
      w && w.oldParent === m && w.oldPosition === g || (o(h, m ?? null, g), t({
        undo: () => ht(x, ({ _id: S, oldParent: v, oldPosition: k }) => {
          o([S], v ?? null, k);
        }),
        redo: () => o(h, m ?? null, g)
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
      const y = da();
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
      s(A(h, (w) => ({ _id: w, ...m }))), t({
        undo: () => s(x),
        redo: () => s(A(h, (w) => ({ _id: w, ...m })))
      });
    },
    updateBlocksRuntime: (h, m) => {
      s(A(h, (g) => ({ _id: g, ...m })));
    },
    setNewBlocks: (h) => {
      const m = Qe.get(He);
      e(h), t({
        undo: () => e(m),
        redo: () => e(h)
      });
    },
    updateMultipleBlocksProps: (h) => {
      const m = da();
      let g = [];
      g = A(h, (y) => {
        const x = kt(y), w = m.find((v) => v._id === y._id), S = {};
        return ht(x, (v) => S[v] = w == null ? void 0 : w[v]), S;
      }), s(h), t({
        undo: () => s(g),
        redo: () => s(h)
      });
    }
  };
}, Gh = ({ block: t, children: e }) => {
  const { t: n } = K(), [r] = le(), { hasPermission: o } = gt(), s = _(t, "_id"), i = _(t, "_parent"), a = Z(r, (p) => i ? _(p, "_parent") === i : !_(p, "_parent")), c = so(_(t, "_type", "")), d = ir(a, { _id: s }), u = (p) => {
    if (p === "CHILD")
      me.publish(se.OPEN_ADD_BLOCK, t);
    else {
      const f = { _id: i || "", position: a == null ? void 0 : a.length };
      p === "BEFORE" ? f.position = Math.max(d, 0) : p === "AFTER" && (f.position = d + 1), me.publish(se.OPEN_ADD_BLOCK, f);
    }
  };
  return o(Be.ADD_BLOCK) ? /* @__PURE__ */ b(kn, { children: [
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
const hi = (t) => {
  Pn = t;
}, mi = P(0), Uh = P(!1);
Uh.debugLabel = "readOnlyModeAtom";
const Kh = P("online");
Kh.debugLabel = "networkModeAtom";
P("");
const Jh = P(!1);
Jh.debugLabel = "editLayerNameAtom";
const Yh = P("");
Yh.debugLabel = "activeLanguageAtom";
const Xh = P("");
Xh.debugLabel = "primaryLanguageAtom";
const Lo = P(null);
Lo.debugLabel = "canvasIframeAtom";
const qh = P("outline");
qh.debugLabel = "activePanelAtom";
const cc = P("");
cc.debugLabel = "showPredefinedBlockCategoryAtom";
const Zh = P(!1);
Zh.debugLabel = "draggingFlagAtom";
const gi = P(null);
gi.debugLabel = "treeRefAtom";
const Qh = P({});
Qh.debugLabel = "canvasSettingsAtom";
const dc = P(!1);
dc.debugLabel = "aiAssistantActiveAtom";
const em = P(!1);
em.debugLabel = "codeEditorOpenAtom";
const tm = Et("codeEditorHeight", 500);
tm.debugLabel = "codeEditorHeightAtom";
const nm = P([]);
nm.debugLabel = "xShowBlocksAtom";
const bi = Et("_selectedLibrary", null);
bi.debugLabel = "selectedLibraryAtom";
const uc = P(!0);
uc.debugLabel = "dataBindingActiveAtom";
const rm = Et("chai-builder-theme", Xs), Kn = () => M(Lo);
let he = null, Pt = null;
function om(t, e) {
  const n = t.getAttribute("data-block-name"), r = t.getAttribute("data-block-type"), o = n || r || "Container", s = e.createElement("div");
  return s.className = "chai-drag-parent-label", s.textContent = o, s.className = "absolute top-0 -left-0.5 -translate-x-0.5 -translate-y-full -mt-1 bg-green-500/95 text-white px-2 py-1 text-xs font-semibold font-sans leading-tight whitespace-nowrap shadow-lg z-[999999] pointer-events-none select-none", s;
}
function es() {
  Pt && Pt.parentNode && (Pt.parentNode.removeChild(Pt), Pt = null);
}
const yi = () => {
  const [t] = Kn(), e = D(
    () => {
      var o;
      return (t == null ? void 0 : t.contentDocument) || ((o = t == null ? void 0 : t.contentWindow) == null ? void 0 : o.document);
    },
    [t]
  ), n = I(
    (o) => {
      if (!e) return;
      let s = null;
      if (!o) {
        he && (he.style.outline = "", he.style.outlineOffset = "", he.style.backgroundColor = "", he.style.position = "", he = null), es();
        return;
      }
      typeof o != "string" ? s = o : s = e.querySelector(`[data-block-id="${o}"]`), !(s === he && Pt && Pt.parentNode) && (he && he !== s && (he.style.outline = "", he.style.outlineOffset = "", he.style.backgroundColor = "", he.style.position = ""), es(), s ? (s.style.outline = "2px dashed rgba(34, 197, 94, 1)", s.style.outlineOffset = "2px", s.style.backgroundColor = "rgba(34, 197, 94, 0.05)", window.getComputedStyle(s).position === "static" && (s.style.position = "relative"), Pt = om(s, e), s.appendChild(Pt), he = s) : he = null);
    },
    [e]
  ), r = I(() => {
    he && (he.style.outline = "", he.style.outlineOffset = "", he.style.backgroundColor = "", window.getComputedStyle(he).position === "relative" && he.style.position === "relative" && (he.style.position = ""), he = null), es();
  }, []);
  return {
    highlightParent: n,
    clearParentHighlight: r,
    lastDragHighlighted: he
  };
}, sm = () => {
  const [, t] = M(Ro), [, e] = M(Tr), [n] = Kn(), { clearParentHighlight: r } = yi(), [o, s] = M(mi), i = n == null ? void 0 : n.contentDocument;
  return I(() => {
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
    }), im(i), r(), i && i.querySelectorAll("[data-dragging]").forEach((c) => {
      c.removeAttribute("data-dragging");
    }), hi(!1), s(o + 1);
  }, [t, e, i, r, o, s]);
};
function im(t) {
  if (!t) return;
  t.querySelectorAll("[data-drop-target]").forEach((n) => n.removeAttribute("data-drop-target"));
}
function mn(t, e = null) {
  const n = window.getComputedStyle(t), r = e ? window.getComputedStyle(e) : null, o = n.display, s = r ? r.display : null;
  if (o === "flex" || o === "inline-flex") {
    const i = n.flexDirection;
    return i === "column" || i === "column-reverse" ? "vertical" : "horizontal";
  } else if (o === "grid") {
    const i = n.gridAutoFlow, a = n.gridTemplateColumns;
    return i.includes("column") || a && a !== "none" && a !== "" && !a.includes("calc") && // Handle calc expressions
    a.split(" ").length <= 1 ? "vertical" : "horizontal";
  } else if (s === "inline-block" || s === "inline")
    return "horizontal";
  return "vertical";
}
const am = [
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
function lm(t) {
  try {
    return am.includes(t);
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
function ua(t) {
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
      const o = n[r];
      o.hasAttribute("data-block-id") && e.push(o);
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
function cm(t, e, n, r) {
  try {
    const o = Gt(t);
    if (o.length < 2)
      return null;
    const s = fm(o, e, n, r);
    if (s) {
      const i = xi(o, s, r);
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
    for (let i = 0; i < o.length - 1; i++) {
      const a = o[i], c = o[i + 1], d = a.getBoundingClientRect(), u = c.getBoundingClientRect();
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
function dm(t, e, n, r) {
  try {
    const o = t.getBoundingClientRect(), s = xt.PARENT_EDGE_PROXIMITY;
    if (r === "vertical") {
      if (n <= o.top + s)
        return "start";
      if (n >= o.bottom - s)
        return "end";
    } else {
      if (e <= o.left + s)
        return "start";
      if (e >= o.right - s)
        return "end";
    }
    return null;
  } catch {
    return null;
  }
}
function um(t, e, n, r, o) {
  const s = t.getBoundingClientRect();
  if (o === "vertical") {
    const a = (n - s.top) / s.height, c = ua(s.height), d = c / s.height;
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
    const a = (e - s.left) / s.width, c = ua(s.width), d = c / s.width;
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
function pm(t, e, n, r, o) {
  var S, v, k, T;
  const s = t.getAttribute("data-block-id"), i = t.getAttribute("data-block-type") || "Box";
  if (!s)
    return null;
  let a = t.parentElement;
  for (; a && !a.hasAttribute("data-block-id"); )
    a = a.parentElement;
  const c = s === "canvas" ? s : a == null ? void 0 : a.getAttribute("data-block-id"), d = a ? mn(a) : "vertical", u = mn(t), p = lm(i), f = !p && mt(i, r), h = ((S = o.defaultView) == null ? void 0 : S.scrollY) || 0, m = ((v = o.defaultView) == null ? void 0 : v.scrollX) || 0;
  if (s === "canvas" && Jr(t)) {
    const C = Gt(t), N = C[C.length - 1];
    if (N) {
      const E = N.getBoundingClientRect(), B = t.getBoundingClientRect(), L = window.getComputedStyle(t), R = parseFloat(L.paddingLeft) || 0, V = parseFloat(L.paddingRight) || 0, J = B.width - R - V, q = B.left + m + R;
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
    const C = cm(t, e, n, u);
    if (C) {
      const N = C.before.getBoundingClientRect(), E = C.after.getBoundingClientRect(), B = t.getBoundingClientRect(), L = window.getComputedStyle(t), R = parseFloat(L.paddingLeft) || 0, V = parseFloat(L.paddingRight) || 0, J = Gt(t), q = xi(J, C.before, u);
      let ve = 0;
      if (q.forEach((we) => {
        const fe = we.getBoundingClientRect();
        fe.height > ve && (ve = fe.height);
      }), u === "vertical") {
        const we = B.width - R - V, fe = B.left + m + R;
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
          targetParentId: s,
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
          targetParentId: s,
          isGapZone: !0,
          confidence: 1
        };
      }
    }
  }
  if (a && c) {
    const C = dm(a, e, n, d);
    if (C) {
      const N = a.getBoundingClientRect(), E = window.getComputedStyle(a), B = parseFloat(E.paddingLeft) || 0, L = parseFloat(E.paddingRight) || 0, R = parseFloat(E.paddingTop) || 0, V = parseFloat(E.paddingBottom) || 0, J = ((k = o.defaultView) == null ? void 0 : k.scrollY) || 0, q = ((T = o.defaultView) == null ? void 0 : T.scrollX) || 0, ve = d === "vertical" ? "horizontal" : "vertical", we = pc(a);
      if (C === "start") {
        const fe = Gt(a)[0];
        if (fe) {
          const ze = fe.getBoundingClientRect();
          if (d === "vertical") {
            const Y = N.width - B - L, Te = N.left + q + B;
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
            const Te = N.width - B - L, ut = N.left + q + B;
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
  let g = um(t, e, n, f, d);
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
  const x = hm(
    t,
    a,
    g.position,
    y,
    o
  ), w = g.position === "inside" ? s : c;
  return {
    position: g.position,
    placeholderOrientation: y,
    rect: x,
    targetElement: t,
    targetBlockId: s,
    targetParentId: w ?? "",
    isEmpty: g.position === "inside" && !Jr(t),
    confidence: g.confidence
  };
}
function fm(t, e, n, r) {
  if (t.length === 0) return null;
  const o = t.filter((a) => {
    const c = a.getBoundingClientRect();
    return r === "vertical" ? n >= c.top && n <= c.bottom : e >= c.left && e <= c.right;
  });
  if (o.length === 0) {
    const a = /* @__PURE__ */ new Map();
    t.forEach((u) => {
      const p = u.getBoundingClientRect(), f = Math.round(r === "vertical" ? p.top : p.left);
      a.has(f) || a.set(f, []), a.get(f).push(u);
    });
    let c = null, d = 1 / 0;
    a.forEach((u, p) => {
      const f = Math.abs(r === "vertical" ? n - p : e - p);
      f < d && (d = f, c = u);
    }), c && o.push(c);
  }
  if (o.length === 0) return null;
  let s = o[0], i = 1 / 0;
  return o.forEach((a) => {
    const c = a.getBoundingClientRect(), d = c.left + c.width / 2, u = c.top + c.height / 2, p = Math.sqrt(Math.pow(e - d, 2) + Math.pow(n - u, 2));
    p < i && (i = p, s = a);
  }), s;
}
function pc(t) {
  const e = Gt(t);
  if (e.length === 0)
    return { maxWidth: 0, maxHeight: 0 };
  let n = 0, r = 0;
  return e.forEach((o) => {
    const s = o.getBoundingClientRect();
    s.width > n && (n = s.width), s.height > r && (r = s.height);
  }), { maxWidth: n, maxHeight: r };
}
function xi(t, e, n) {
  const r = e.getBoundingClientRect(), o = 5;
  return t.filter((s) => {
    const i = s.getBoundingClientRect();
    return n === "vertical" ? Math.abs(i.top - r.top) <= o : Math.abs(i.left - r.left) <= o;
  });
}
function hm(t, e, n, r, o) {
  var R, V;
  const s = t.getBoundingClientRect(), i = window.getComputedStyle(t), a = ((R = o.defaultView) == null ? void 0 : R.scrollY) || 0, c = ((V = o.defaultView) == null ? void 0 : V.scrollX) || 0, d = parseFloat(i.marginTop) || 0, u = parseFloat(i.marginBottom) || 0, p = parseFloat(i.marginLeft) || 0, f = parseFloat(i.marginRight) || 0, h = parseFloat(i.paddingTop) || 0, m = parseFloat(i.paddingBottom) || 0, g = parseFloat(i.paddingLeft) || 0, y = parseFloat(i.paddingRight) || 0, x = e == null ? void 0 : e.getBoundingClientRect(), w = e && parseFloat(window.getComputedStyle(e).paddingLeft) || 0, S = e && parseFloat(window.getComputedStyle(e).paddingRight) || 0, v = e && parseFloat(window.getComputedStyle(e).paddingTop) || 0, k = e && parseFloat(window.getComputedStyle(e).paddingBottom) || 0, T = e ? pc(e) : { maxHeight: 0 }, C = e ? mn(e) : "vertical", N = e ? Gt(e) : [], E = xi(N, t, C);
  let B = 0, L = 0;
  if (E.forEach((J) => {
    const q = J.getBoundingClientRect();
    q.height > B && (B = q.height), q.width > L && (L = q.width);
  }), n === "before")
    if (r === "horizontal") {
      const J = x ? x.width - w - S : s.width, q = x ? x.left + c + w : s.left + c;
      return {
        top: s.top + a - d - 2,
        left: q,
        width: J,
        height: 4
      };
    } else {
      const J = s.top + a, q = C === "horizontal" && B > 0 ? B : T.maxHeight > 0 ? T.maxHeight : x ? x.height - v - k : s.height;
      return {
        top: J,
        left: s.left + c - p - 2,
        width: 4,
        height: q
      };
    }
  else if (n === "after")
    if (r === "horizontal") {
      const J = x ? x.width - w - S : s.width, q = x ? x.left + c + w : s.left + c;
      return {
        top: s.bottom + a + u - 2,
        left: q,
        width: J,
        height: 4
      };
    } else {
      const J = s.top + a, q = C === "horizontal" && B > 0 ? B : T.maxHeight > 0 ? T.maxHeight : x ? x.height - v - k : s.height;
      return {
        top: J,
        left: s.right + c + f - 2,
        width: 4,
        height: q
      };
    }
  else
    return Jr(t) ? mn(t) === "vertical" ? {
      top: s.bottom + a - m - 2,
      left: s.left + c + g,
      width: s.width - g - y,
      height: 4
    } : {
      top: s.top + a + h,
      left: s.right + c - y - 2,
      width: 4,
      height: s.height - h - m
    } : {
      top: s.top + a + h,
      left: s.left + c + g,
      width: s.width - g - y,
      height: Math.max(s.height - h - m, 20)
    };
}
const pa = ["wheel", "touchstart", "touchmove", "pointerdown", "keydown"], mm = 700, Ns = "instant", fc = 2, gm = 400, bm = (t) => {
  const e = t.graceMs ?? mm, n = t.tolerance ?? fc, r = t.holdMs ?? gm;
  return t.now <= (t.glideUntil ?? Number.NEGATIVE_INFINITY) ? "glide" : t.now - t.lastEditAt > r ? "adopt" : Math.abs(t.scrollY - t.intended) <= n ? "hold" : t.now - t.lastGestureAt <= e ? "adopt" : "restore";
}, ym = (t, e, n) => Math.max(0, Math.min(Math.round(t), Math.max(0, Math.round(e - n))));
let Ss = null;
const xm = (t, e = Number.NEGATIVE_INFINITY) => {
  Ss = { target: t, glideUntil: e };
}, vm = () => {
  const t = Ss;
  return Ss = null, t;
}, wm = 140, km = 260, Cm = 0.1, Nm = (t) => Math.round(
  Math.min(km, Math.max(wm, Math.abs(t) * Cm))
), Sm = (t) => {
  const e = Math.min(1, Math.max(0, t));
  return 1 - Math.pow(1 - e, 3);
}, Em = (t, e, n, r) => r <= 0 ? Math.round(e) : Math.round(t + (e - t) * Sm(n / r));
let fa = 0;
const _m = (t, e) => {
  var c;
  const n = t.scrollY, o = ((c = t.matchMedia) == null ? void 0 : c.call(t, "(prefers-reduced-motion: reduce)").matches) === !0 ? 0 : Nm(e - n), s = t.performance.now();
  xm(e, s + o);
  const i = ++fa;
  if (o === 0) {
    t.scrollTo({ top: Math.round(e), behavior: Ns });
    return;
  }
  const a = () => {
    if (i !== fa) return;
    const d = t.performance.now() - s;
    t.scrollTo({ top: Em(n, e, d, o), behavior: Ns }), d < o && t.requestAnimationFrame(a);
  };
  t.requestAnimationFrame(a);
}, Am = 24, Tm = /* @__PURE__ */ new Set(["canvas", "container"]), ha = (t) => {
  const e = t.getAttribute("data-block-id");
  return e !== null && !Tm.has(e);
}, Im = (t) => {
  let e = ha(t) ? t : null, n = t.parentElement;
  for (; n; )
    ha(n) && (e = n), n = n.parentElement;
  return e;
}, Bm = (t, e, n, r = Am) => {
  const o = n + t.section.top - r, s = t.selected.bottom - t.section.top + r;
  let i = o;
  if (s > e) {
    const c = n + t.selected.top - r, d = n + t.selected.bottom + r - e;
    i = Math.min(c, d);
  }
  const a = Math.max(0, Math.round(i));
  return Math.abs(a - n) <= fc ? null : a;
};
let Es = null;
const ma = (t) => {
  Es = t;
}, Rm = (t) => {
  const e = Es === t;
  return Es = null, e;
}, Lm = 100, Nn = () => {
  const [t] = le(), [, e] = re(), { addBlocks: n } = $e(), r = I(
    (s, i, a) => {
      for (let f = 0; f < s.length; f++) {
        const { _id: h } = s[f];
        s[f]._id = fn();
        const m = Z(s, { _parent: h });
        for (let g = 0; g < m.length; g++)
          m[g]._parent = s[f]._id;
      }
      const c = ye(s);
      let d, u;
      return i && (d = ee(t, { _id: i }), s[0]._parent = i, vo(s, (f) => {
        f != null && f._parent || (f._parent = i);
      }), u = i), !(d ? mt(d == null ? void 0 : d._type, c._type) : !0) && d && (s[0]._parent = d._parent, u = d._parent), n(s, u ?? void 0, a), ma(c._id), e([c._id]), c;
    },
    [n, t, e]
  );
  return { addCoreBlock: I(
    (s, i, a) => {
      if (ce(s, "blocks")) {
        const g = s.blocks;
        return r(g, i ?? void 0, a);
      }
      const c = fn(), d = Ks(s.type), u = {
        _type: s.type,
        _id: c,
        ...d,
        ...ce(s, "_name") && { _name: s._name },
        ...ce(s, "partialBlockId") && { partialBlockId: s.partialBlockId }
      };
      let p, f;
      return i && (p = ee(t, { _id: i }), u._parent = i, f = i), !mt(p == null ? void 0 : p._type, u._type) && p && (u._parent = p._parent, f = p._parent), n([u], f ?? void 0, a), setTimeout(() => {
        ma(u._id), e([u._id]);
      }, Lm), u;
    },
    [n, r, t, e]
  ), addPredefinedBlock: r };
};
let Bt = null;
const At = () => {
  const [t] = M(Lo), e = D(() => {
    var o;
    return (t == null ? void 0 : t.contentDocument) || ((o = t == null ? void 0 : t.contentWindow) == null ? void 0 : o.document);
  }, [t]), n = I(
    (o) => {
      if (e)
        if (Bt && Bt.removeAttribute("data-highlighted"), typeof o != "string")
          o.setAttribute("data-highlighted", "true"), Bt = o;
        else if (typeof o == "string") {
          const s = e.querySelector(`[data-block-id="${o}"]`);
          s && (s.setAttribute("data-highlighted", "true"), Bt = s);
        } else
          Bt = null;
    },
    [e]
  ), r = I(() => {
    Bt && (Bt.removeAttribute("data-highlighted"), Bt = null);
  }, []);
  return { highlightBlock: n, clearHighlight: r, lastHighlighted: Bt };
}, Ir = P([]);
Ir.debugLabel = "selectedStylingBlocksAtom";
const Fe = () => M(Ir), Pm = () => {
  const [t, e] = M(Ro), [n, r] = M(Tr), [o] = le(), [s] = Kn(), { addCoreBlock: i } = Nn(), { moveBlocks: a } = $e(), [, c] = re(), [, d] = Fe(), { clearHighlight: u } = At(), { clearParentHighlight: p } = yi(), [f, h] = M(mi), m = _t(), g = ic(), y = s == null ? void 0 : s.contentDocument;
  return I(
    (x) => {
      if (x.preventDefault(), x.stopPropagation(), hi(!1), Mm(y), ga(y), p(), r({
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
        p(), ga(y), r({
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
      const { parentId: v, index: k, replaceImageUrl: T } = Om(
        o,
        w,
        S,
        n.position,
        t
      ), C = t._id !== void 0;
      if (T && hc(t)) {
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
          const B = t.partialBlockId || "", { canAdd: L, reason: R } = g(B);
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
      o,
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
}, hc = (t) => {
  var s, i;
  const e = ce(t, "blocks"), n = t == null ? void 0 : t.blocks, r = (n == null ? void 0 : n.length) === 1 && ((s = n == null ? void 0 : n[0]) == null ? void 0 : s._type) === "Image", o = !((i = n == null ? void 0 : n[0]) != null && i._id);
  return e && r && o;
};
function Om(t, e, n, r, o) {
  var s, i;
  try {
    if (e === n && ((s = o == null ? void 0 : o.blocks) == null ? void 0 : s.length) === 1 && _(o, "blocks.0._type") === "Image" && ((i = ee(t, { _id: e })) == null ? void 0 : i._type) === "Image")
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
function ga(t) {
  if (!t) return;
  t.querySelectorAll("[data-drop-target]").forEach((n) => n.removeAttribute("data-drop-target"));
}
function Mm(t) {
  if (!t) return;
  t.querySelectorAll("[data-dragging]").forEach((n) => {
    n.removeAttribute("data-dragging");
  });
}
function mc(t, e, n) {
  if (!t || !e) return !1;
  if (t === e) return !0;
  const r = n.find((s) => s._id === t);
  if (!r) return !1;
  let o = r;
  for (; o._parent; ) {
    if (o._parent === e)
      return !0;
    const s = n.find((i) => i._id === o._parent);
    if (!s) break;
    o = s;
  }
  return !1;
}
function gc(t, e, n) {
  return !t || !e ? !0 : !mc(e, t, n);
}
function Dm(t, e, n) {
  if (!t) return !0;
  const r = n.find((s) => s._id === e);
  if (!r) return !0;
  const o = r._parent;
  return gc(t, o, n);
}
const $m = [
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
}, Fm = () => {
  const [t] = M(Ro), [e] = Kn(), [, n] = M(Tr), { clearParentHighlight: r, highlightParent: o } = yi(), [s] = le(), i = e == null ? void 0 : e.contentDocument, a = ne(null), c = ne(0), d = I(
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
          const E = f.scrollY, B = E > 0, L = E + h < g, R = c.current, V = h - c.current;
          S === "up" && B && R < Vt.EDGE_ZONE || S === "down" && L && V < Vt.EDGE_ZONE ? a.current = requestAnimationFrame(C) : a.current = null;
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
  const u = I(
    ju((p) => {
      if (!Pn || !t)
        return;
      r();
      const f = zm(p), { element: h, targetBlockId: m, targetParentId: g } = f;
      if (!h || !m)
        return;
      const y = t._id;
      if (y && (m === y || mc(m, y, s)))
        return;
      const x = t._type || t.type;
      if (!x)
        return;
      const w = p.clientX, S = p.clientY;
      if (d(S), !i) return;
      const v = pm(h, w, S, x, i);
      if (!v)
        return;
      const k = h.getAttribute("data-block-type") || "Box";
      let T = !1;
      const C = $m.includes(k);
      if (k === "Image" && x === "Image" && hc(t)) {
        o(m), n({
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
        if (C || y && !gc(y, m, s))
          return;
        T = mt(k, x);
      } else {
        let E = h.parentElement, B = "Box";
        for (; E && !E.hasAttribute("data-block-id"); )
          E = E.parentElement;
        if (E && (B = E.getAttribute("data-block-type") || "Box"), y && !Dm(y, m, s))
          return;
        T = mt(B, x);
      }
      if (!T)
        return;
      o(v.targetParentId);
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
      }), Hm(i), v.targetElement.setAttribute("data-drop-target", "true");
    }, 300),
    [i, t, n, r, o, s, d]
  );
  return I(
    (p) => {
      p.preventDefault(), p.stopPropagation(), u(p);
    },
    [u]
  );
};
function zm(t) {
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
  let o = e.parentElement;
  for (; o && !o.hasAttribute("data-block-id"); )
    o = o.parentElement;
  const s = (o == null ? void 0 : o.getAttribute("data-block-id")) || null, i = (o == null ? void 0 : o.getAttribute("data-block-type")) || "Box", a = mn(e);
  return {
    element: e,
    targetBlockId: n,
    targetBlockType: r,
    targetParentId: s,
    targetParentType: i,
    orientation: a
  };
}
function Hm(t) {
  if (!t) return;
  t.querySelectorAll("[data-drop-target]").forEach((n) => n.removeAttribute("data-drop-target"));
}
function Vm(t) {
  var s;
  const e = document.createElement("div");
  e.className = "absolute -top-[1000px] -left-[1000px] pl-3 pr-1 py-1 bg-white/60 border border-blue-400/30 rounded shadow-md flex items-center gap-1.5 font-sans pointer-events-none z-[9999] scale-90";
  const n = t.type || t._type || "Box", r = document.createElement("div");
  r.className = "w-3 h-3 flex items-center justify-center text-blue-600";
  try {
    n === "Image" ? r.innerHTML = '<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 0.72 0.72"><path d="M.57.12H.15a.09.09 0 0 0-.09.09v.3A.09.09 0 0 0 .15.6h.42A.09.09 0 0 0 .66.51v-.3A.09.09 0 0 0 .57.12M.15.54A.03.03 0 0 1 .12.51V.437L.219.338a.03.03 0 0 1 .042 0L.462.54ZM.6.51a.03.03 0 0 1-.03.03H.547L.433.425.459.399a.03.03 0 0 1 .042 0L.6.498Zm0-.097L.544.357a.09.09 0 0 0-.127 0L.391.383.305.297a.09.09 0 0 0-.127 0L.12.353V.21A.03.03 0 0 1 .15.18h.42A.03.03 0 0 1 .6.21Z"/></svg>' : r.innerHTML = ((s = document.querySelector(`[data-add-core-block-icon="${n}"]`)) == null ? void 0 : s.outerHTML) || '<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/></svg>';
  } catch {
    r.textContent = "";
  }
  const o = document.createElement("span");
  return o.className = "text-[10px] font-medium text-blue-600 whitespace-nowrap", o.textContent = t.label || t.type || t._name || t._type || "Block", e.appendChild(r), e.appendChild(o), document.body.appendChild(e), e;
}
function ba(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
const jm = () => {
  const [, t] = re(), [, e] = Fe(), { clearHighlight: n } = At(), [, r] = M(Ro), [, o] = M(Tr), s = ne(null);
  return I(
    (i, a, c = !0) => {
      var u;
      s.current && (ba(s.current), s.current = null);
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
        const p = Vm(a);
        s.current = p, i.dataTransfer.setDragImage(p, 0, 0), setTimeout(() => {
          s.current && (ba(s.current), s.current = null);
        }, 50);
      }
      t([]), n(), e([]), me.publish(se.CLOSE_ADD_BLOCK), hi(!0), o({
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
    [t, n, r, o]
  );
}, Jn = () => {
  const t = jm(), e = Fm(), n = Pm(), r = sm();
  return {
    onDragStart: t,
    onDragOver: e,
    onDrop: n,
    onDragEnd: r,
    isDragging: Pn
  };
}, Wm = () => {
  const [t] = M(Tr);
  return t;
}, bt = () => {
  const { dragAndDrop: t } = G("flags", { dragAndDrop: !0 });
  return t;
};
let bc, yc;
typeof document < "u" && (bc = document);
typeof window < "u" && (yc = window);
const xc = te.createContext({ document: bc, window: yc }), yt = () => te.useContext(xc), { Provider: Gm, Consumer: wC } = xc, Um = [
  { ControlIcon: fp, dir: "VERTICAL", key: "UP" },
  { ControlIcon: hp, dir: "VERTICAL", key: "DOWN" },
  { ControlIcon: mp, dir: "HORIZONTAL", key: "LEFT" },
  { ControlIcon: gp, dir: "HORIZONTAL", key: "RIGHT" }
], Km = (t, e, n) => {
  try {
    if (!t || !n) return "VERTICAL";
    const r = `[data-block-id='${t}']`, o = n == null ? void 0 : n.querySelector(r);
    if (o) {
      const s = n == null ? void 0 : n.querySelector(`[data-block-id='${e}']`);
      return mn(o, s).toUpperCase();
    }
    return "VERTICAL";
  } catch {
    return "VERTICAL";
  }
}, vc = (t, e, n) => !!(t && (n === "UP" || n === "LEFT") || e && (n === "DOWN" || n === "RIGHT")), Jm = (t, e) => {
  const [n] = le(), { document: r } = yt(), { moveBlocks: o } = $e(), s = _(t, "_id"), i = _(t, "_parent"), a = Z(n, (m) => i ? _(m, "_parent") === i : !_(m, "_parent")), c = (a == null ? void 0 : a.length) <= 1, d = ir(a, { _id: s }), u = d <= 0, p = d + 1 === (a == null ? void 0 : a.length), f = Km(i, s, r), h = I(
    (m) => {
      vc(u, p, m) || c || (m === "UP" || m === "LEFT" ? o([s], i || void 0, d - 1) : (m === "DOWN" || m === "RIGHT") && o([s], i || void 0, d + 2), e());
    },
    [u, p, c, d, s, i, e]
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
}, Ym = ({ block: t, updateFloatingBar: e }) => {
  const { isOnlyChild: n, isFirstBlock: r, isLastBlock: o, moveBlock: s, orientation: i } = Jm(
    t,
    e
  );
  return n ? null : /* @__PURE__ */ l(Q, { children: Um.map(({ ControlIcon: a, dir: c, key: d }) => i !== c || vc(r, o, d) ? null : /* @__PURE__ */ l(
    a,
    {
      onClick: () => s(d),
      className: "rounded p-px hover:bg-white hover:text-blue-500"
    },
    d
  )) });
}, vi = () => {
  const [t] = le(), [, e] = re(), { addBlocks: n } = $e();
  return I(
    (r, o = null) => {
      const s = [];
      ht(r, (i) => {
        const a = t.find((f) => f._id === i);
        o ? o === "root" && (o = null) : o = (a == null ? void 0 : a._parent) ?? null;
        const u = Z(
          t,
          (f) => Ct(o) ? f._parent === o : !f._parent
        ).indexOf(a) + 1, p = ws(t, i, o);
        n(p, o ?? void 0, u), s.push(_(p, "0._id", ""));
      }), e(s);
    },
    [t, e]
  );
}, Xm = P(""), wc = () => M(Xm), kc = P("");
kc.debugLabel = "inlineEditingActiveAtom";
const Cc = P(0);
Cc.debugLabel = "inlineEditingItemIndexAtom";
const Sn = () => {
  const [t, e] = M(kc), [n, r] = M(Cc);
  return {
    editingBlockId: t,
    editingItemIndex: n,
    setEditingBlockId: e,
    setEditingItemIndex: r
  };
}, Nc = P("outline");
Nc.debugLabel = "sidebarActivePanelAtom";
const wi = () => M(Nc), qm = ({ blockId: t, className: e }) => /* @__PURE__ */ l(bp, { className: e, onClick: () => {
  t && me.publish(se.GOTO_BLOCK_SETTINGS, t);
} }), Zm = P(0), Sc = P(0);
function ki(t) {
  if (t.getAttribute("data-block-id") === "canvas")
    return null;
  if (t.getAttribute("data-block-id") || t.getAttribute("data-block-parent"))
    return t;
  const e = t.closest("[data-block-id]");
  return (e == null ? void 0 : e.getAttribute("data-block-id")) === "canvas" ? null : e;
}
const Qm = ["Heading", "Paragraph", "Text", "Link", "Span", "Button"], eg = (t) => {
  var e;
  return (t == null ? void 0 : t.getAttribute("data-block-type")) === "RichText" || ((e = t == null ? void 0 : t.parentElement) == null ? void 0 : e.getAttribute("data-block-type")) === "RichText";
}, Ec = (t) => t ? Wu(t.children, (e) => {
  const n = e;
  return n.hasAttribute("data-block-id") || Ec(n);
}) : !1, tg = (t, e) => {
  if (eg(t))
    return !0;
  const n = t == null ? void 0 : t.getAttribute("data-block-type");
  return n ? Qm.includes(n) : !1;
}, ng = () => {
  const { editingBlockId: t, setEditingBlockId: e, setEditingItemIndex: n } = Sn();
  return I(
    (r) => {
      var a;
      if (r == null || r.preventDefault(), r == null || r.stopPropagation(), t) return;
      const o = ki(r.target);
      if (!o || !tg(o) || Ec(o)) return;
      const s = o.getAttribute("data-block-id");
      if (!s) return;
      const i = o.closest('[data-block-type="Repeater"]');
      i ? (a = i == null ? void 0 : i.childNodes) == null || a.forEach((c, d) => {
        c.contains(o) && n(d);
      }) : n(-1), e(s);
    },
    [t, e, n]
  );
}, rg = () => {
  const { editingBlockId: t } = Sn(), { clearHighlight: e } = At(), [, n] = Fe(), [r] = M(Sc);
  return I(
    (o) => {
      if (t) return;
      o.stopPropagation();
      const s = ki(o.target);
      if (!s) {
        e(), n([]), me.publish(se.CANVAS_BLOCK_SELECTED, []);
        return;
      }
      if (r !== 2) {
        if (s != null && s.getAttribute("data-block-id") && (s == null ? void 0 : s.getAttribute("data-block-id")) === "container") {
          me.publish(se.CLEAR_CANVAS_SELECTION);
          return;
        }
        if (s != null && s.getAttribute("data-block-parent")) {
          const i = s.getAttribute("data-style-prop"), a = s.getAttribute("data-style-id"), c = s.getAttribute("data-block-parent");
          me.publish(se.CANVAS_BLOCK_STYLE_SELECTED, { blockId: c, styleId: a, styleProp: i });
        } else if (s != null && s.getAttribute("data-block-id")) {
          const i = s.getAttribute("data-block-id");
          me.publish(se.CANVAS_BLOCK_SELECTED, i === "canvas" ? [] : [i]);
        }
        e();
      }
    },
    [t, r, e, n]
  );
}, og = () => {
  const { editingBlockId: t } = Sn(), { highlightBlock: e } = At();
  return pn(
    (n) => {
      if (t) return;
      const r = ki(n.target);
      r && e(r);
    },
    [t, e],
    100
  );
}, sg = () => {
  const { clearHighlight: t } = At();
  return I(() => t(), [t]);
}, ig = ({ children: t }) => {
  const e = ng(), n = rg(), r = og(), o = sg();
  return /* @__PURE__ */ l(
    "div",
    {
      "data-block-id": "canvas",
      id: "canvas",
      onClick: n,
      onDoubleClick: e,
      onMouseMove: r,
      onMouseLeave: o,
      className: "relative h-full max-w-full p-px",
      children: t
    }
  );
}, _c = (t, e) => t.querySelector(`[data-block-id="${e}"]`), ag = (t, e) => t.querySelector(`[data-style-id="${e}"]`), lg = () => {
  const t = ae(), { document: e } = yt(), [n] = Fe(), [r, o] = $([]), [, s] = $([]), { onDragStart: i, onDragEnd: a, isDragging: c } = Jn(), [d, u] = $(null), p = bt();
  return z(() => {
    if (t != null && t._id && t.type !== "Multiple" && e) {
      const f = _c(e, t._id);
      if (f) {
        const h = e.defaultView;
        if (h && Rm(t._id)) {
          const m = Im(f) ?? f, g = (x) => {
            const w = x.getBoundingClientRect();
            return { top: w.top, bottom: w.bottom };
          }, y = Bm(
            { section: g(m), selected: g(f) },
            h.innerHeight,
            h.scrollY
          );
          y !== null && _m(h, y);
        }
        o([f]);
      }
    }
  }, [t == null ? void 0 : t._id, t == null ? void 0 : t.type, e]), z(() => {
    if (!F(n) && e) {
      const f = ag(e, ye(n).id);
      s(f ? [f] : [null]);
    } else
      s([null]);
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
        cg,
        {
          block: t,
          isDragging: c && !!d,
          selectedBlockElement: r[0] || (c ? d : null)
        }
      )
    }
  );
}, cg = ({ block: t, isDragging: e, selectedBlockElement: n }) => {
  const r = fi(), o = vi(), [, s] = re(), [, i] = wc(), [, a] = Fe(), { hasPermission: c } = gt(), { editingBlockId: d } = Sn(), { document: u } = yt(), p = bt(), f = G("flags.gotoSettings", !1), h = G("flags.ai", !1), { floatingStyles: m, refs: g, update: y } = up({
    placement: "top-start",
    middleware: [
      pp({
        boundary: u == null ? void 0 : u.body,
        limiter: dp({
          offset: 8,
          mainAxis: !0,
          crossAxis: !0
        })
      }),
      lp({
        boundary: u == null ? void 0 : u.body,
        fallbackPlacements: ["bottom-start", "top-end", "bottom-end", "inside"]
      }),
      cp({
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
  const [, S] = wi();
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
          p && /* @__PURE__ */ l(yp, { className: "flex-shrink-0 cursor-grab rounded p-0.5 hover:bg-white/20 active:cursor-grabbing" }),
          x && /* @__PURE__ */ l(
            qt,
            {
              className: "flex-shrink-0 rounded p-0.5 hover:bg-white/20",
              onClick: () => {
                a([]), s([x]);
              }
            }
          )
        ] }),
        /* @__PURE__ */ l("div", { className: `w-full ${p ? "cursor-grab active:cursor-grabbing" : ""}`, children: /* @__PURE__ */ l("div", { className: "mr-10 w-full items-center space-x-1 px-1 leading-tight", children: w }) }),
        /* @__PURE__ */ b("div", { className: "flex items-center gap-1 pl-1 pr-1.5", children: [
          c(Be.ADD_BLOCK) && h && /* @__PURE__ */ l(
            Zs,
            {
              className: "h-4 w-4 rounded hover:bg-white hover:text-blue-500",
              onClick: () => {
                S("chai-chat-panel"), me.publish(se.OPEN_AI_PANEL);
              }
            }
          ),
          f && /* @__PURE__ */ l(
            qm,
            {
              blockId: t == null ? void 0 : t._id,
              className: "h-4 w-4 rounded p-px hover:bg-white hover:text-blue-500"
            }
          ),
          !p && /* @__PURE__ */ l(Gh, { block: t, children: /* @__PURE__ */ l(qe, { className: "h-4 w-4 rounded p-px hover:bg-white hover:text-blue-500" }) }),
          Qs(_(t, "_type", "")) && c(Be.ADD_BLOCK) ? /* @__PURE__ */ l(
            js,
            {
              className: "h-4 w-4 rounded p-px hover:bg-white hover:text-blue-500",
              onClick: () => o([t == null ? void 0 : t._id])
            }
          ) : null,
          ei(_(t, "_type", "")) && c(Be.DELETE_BLOCK) ? /* @__PURE__ */ l(
            Ws,
            {
              className: "h-4 w-4 rounded p-px hover:bg-white hover:text-blue-500",
              onClick: () => r([t == null ? void 0 : t._id])
            }
          ) : null,
          c(Be.MOVE_BLOCK) && /* @__PURE__ */ l(Ym, { block: t, updateFloatingBar: y })
        ] })
      ] })
    }
  ) });
}, dg = `<!doctype html>
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
class ug extends ul {
  componentDidMount() {
    this.props.contentDidMount();
  }
  componentDidUpdate() {
    this.props.contentDidUpdate();
  }
  render() {
    return tp.only(this.props.children);
  }
}
class Ac extends ul {
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
    const r = this.props.contentDidMount, o = this.props.contentDidUpdate, s = n.defaultView || n.parentView, i = /* @__PURE__ */ l(ug, { contentDidMount: r, contentDidUpdate: o, children: /* @__PURE__ */ l(Gm, { value: { document: n, window: s }, children: /* @__PURE__ */ l("div", { className: "frame-content", children: this.props.children }) }) }), a = this.getMountTarget();
    return [aa.createPortal(this.props.head, this.getDoc().head), aa.createPortal(i, a)];
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
Yt(Ac, "defaultProps", {
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
const pg = te.forwardRef((t, e) => /* @__PURE__ */ l(Ac, { ...t, forwardedRef: e })), Tc = P([]), Po = () => {
  const [t, e] = M(Tc), n = vt(Ic), r = I(
    (o) => {
      e(o), n([]);
    },
    [e, n]
  );
  return [t, r];
}, Ic = P([]), Bc = () => {
  const [t] = le(), [e, n] = M(Ic), r = vt(Tc), { getPartialBlocks: o } = ui(), s = G("flags.copyPaste", !0), i = I(
    (c) => c.some((d) => ws(t, d, null).some((p) => p._type === "PartialBlock" || p._type === "GlobalBlock")),
    [t]
  ), a = I(
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
                let g = o(m.partialBlockId);
                m._parent && (g == null ? void 0 : g.length) > 0 && (g = g.map((y) => (F(y._parent) && Ge(y, "_parent", m._parent), y))), h = [...h, ...g];
              } else
                h.push(m);
            return h;
          })
        };
        if (!s)
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
}, ts = () => navigator.userAgent.toLowerCase().includes("firefox"), fg = () => {
  const [t] = le();
  return (e, n) => {
    var s;
    const r = ((s = ee(t, { _id: n })) == null ? void 0 : s._type) || null, o = ye(e.map((i) => {
      var a;
      return (a = ee(t, { _id: i })) == null ? void 0 : a._type;
    }));
    return mt(r, o);
  };
}, hg = () => {
  const t = Ue(He), { moveBlocks: e } = $e();
  return I(
    (n, r) => {
      const o = Array.isArray(r) ? r[0] : r;
      if (r === "root") {
        const s = t == null ? void 0 : t.filter((i) => !i._parent);
        e(n, void 0, (s == null ? void 0 : s.length) || 0);
      } else {
        const s = t == null ? void 0 : t.filter((i) => i._parent === o);
        e(n, o, (s == null ? void 0 : s.length) || 0);
      }
    },
    [e, t]
  );
}, Ci = () => {
  const [t, e] = Po(), n = hg(), { addPredefinedBlock: r } = Nn(), o = fg();
  return {
    canPaste: I(
      async (i) => {
        if (t.length > 0)
          return o(t, i);
        if (ts())
          return !1;
        try {
          const a = await navigator.clipboard.readText();
          if (a) {
            const c = JSON.parse(a);
            return ce(c, "_chai_copied_blocks");
          }
        } catch {
          return !1;
        }
        return !1;
      },
      [o, t]
    ),
    pasteBlocks: I(
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
              if (ce(d, "_chai_copied_blocks"))
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
}, Rc = (t) => {
  const [e, n] = re(), r = ae(), o = fi(), s = vi(), { undo: i, redo: a } = Ar(), [, c] = Po(), [, d] = Bc(), { canPaste: u, pasteBlocks: p } = Ci(), f = t ? { document: t } : {};
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
    () => s(e),
    { ...f, enabled: !F(e), preventDefault: !0 },
    [e, s]
  ), Rt(
    "del, backspace",
    (h) => {
      h.preventDefault(), ei(_(r, "_type", "")) && o(e);
    },
    f,
    [e, o]
  );
}, mg = () => {
  const { document: t } = yt();
  return Rc(t), null;
}, gg = () => {
  const { t } = K(), { hasPermission: e } = gt(), n = e(Be.ADD_BLOCK), r = bt();
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
}, Lc = ({ theme: t }) => {
  const e = D(() => Tf({ theme: t }), [t]);
  return /* @__PURE__ */ l("style", { id: "chai-theme", dangerouslySetInnerHTML: { __html: e } });
}, Pc = Et("darkMode", !1), Br = () => {
  const [t, e] = M(Pc);
  return [t, e];
}, bg = (t = Pl) => {
  const e = Xs;
  return t.fontFamily && (e.fontFamily = Object.entries(t.fontFamily).reduce(
    (n, [r, o]) => ({
      ...n,
      [r.replace("font-", "")]: o
    }),
    e.fontFamily
  )), e.borderRadius = t.borderRadius, t.colors && (e.colors = t.colors.reduce((n, r) => (Object.entries(r.items).forEach(([o, s]) => {
    o in n && (n[o] = s);
  }), n), e.colors)), e;
}, yg = P({}), Oo = () => {
  const t = Rr(), e = D(() => bg(t), [t]), n = G("theme", {}), [r, o] = M(yg);
  return [D(
    () => ({ ...e, ...!F(n) && n, ...!F(r) && r }),
    [e, n, r]
  ), o];
}, Rr = () => {
  const t = G("themeOptions", (n) => n);
  return D(() => t(Pl), [t]);
}, xg = P("block"), vg = () => M(xg), wg = P("settings"), Oc = () => M(wg), kg = () => {
  const [t] = Oo(), e = Rr(), [n] = Br(), { document: r, window: o } = yt();
  return z(() => {
    n ? r == null || r.documentElement.classList.add("dark") : r == null || r.documentElement.classList.remove("dark");
  }, [n, r]), z(() => {
    !o || !o.tailwind || (o.tailwind.config = {
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
          ...Bf(e)
        }
      },
      plugins: [
        jf,
        Vf,
        zf,
        Hf,
        If(function({ addBase: s, theme: i }) {
          s({
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
  }, [t, e, o]), /* @__PURE__ */ b(Q, { children: [
    /* @__PURE__ */ l(Lc, { theme: t }),
    /* @__PURE__ */ l(Sg, {}),
    /* @__PURE__ */ l(Ng, {}),
    /* @__PURE__ */ l(Cg, {})
  ] });
}, Cg = () => {
  const [t] = Fe(), [e] = re(), n = D(() => `${A(t, ({ id: r }) => `[data-style-id="${r}"]`).join(",")}{
                outline: 1px solid ${e.length > 0 ? "#42a1fc" : "#de8f09"} !important; outline-offset: -1px;
            }`, [t, e]);
  return /* @__PURE__ */ l("style", { id: "selected-styling-blocks", dangerouslySetInnerHTML: { __html: n } });
}, Ng = () => {
  const [t] = re(), e = D(() => `${A(t, (n) => `[data-block-id="${n}"]`).join(",")}{
                outline: 1px solid #42a1fc !important; outline-offset: -1px;
            }`, [t]);
  return /* @__PURE__ */ l("style", { id: "selected-blocks", dangerouslySetInnerHTML: { __html: e } });
}, Sg = () => {
  const [t] = Oo(), e = qs(), n = D(() => {
    const { heading: s, body: i } = {
      heading: _(t, "fontFamily.heading"),
      body: _(t, "fontFamily.body")
    };
    return e.filter((a) => a.family === s || a.family === i);
  }, [t == null ? void 0 : t.fontFamily, e]), r = D(
    () => Rf(Z(n, (s) => ce(s, "url"))),
    [n]
  ), o = D(
    () => Lf(Z(n, (s) => ce(s, "src"))),
    [n]
  );
  return /* @__PURE__ */ b(Q, { children: [
    r.map((s, i) => /* @__PURE__ */ l("link", { rel: "stylesheet", href: s }, `google-font-${i}`)),
    /* @__PURE__ */ l("style", { id: "chai-custom-fonts", dangerouslySetInnerHTML: { __html: o } })
  ] });
}, Eg = ({ children: t, onMount: e, onResize: n }) => {
  const [, r] = re(), [, o] = Fe(), s = ne(null), i = Nt(
    () => {
      const { clientWidth: c } = s.current;
      n(c);
    },
    [s.current],
    100
  );
  ys(s.current, i, s.current !== null), z(() => {
    const { clientWidth: c } = s.current;
    e(c);
  }, []);
  const a = I(() => {
    r([]), o([]);
  }, [r, o]);
  return /* @__PURE__ */ l(
    "div",
    {
      id: "main-content",
      onClick: a,
      className: "h-full w-full border-l-4 border-r-4 pb-0",
      ref: s,
      children: t
    }
  );
}, _g = () => {
  const [, t] = re(), { onDragStart: e, onDragEnd: n } = Jn(), [r] = le(), o = ne(null), [s, i] = M(Zm), [a, c] = M(Sc), d = I(
    (f) => {
      var x;
      if (f.button !== 0) return;
      const h = Date.now(), m = h - s;
      if (m < 400 && m > 0) {
        c(2);
        return;
      }
      i(h);
      const y = (x = f.target.closest("[data-block-id]")) == null ? void 0 : x.getAttribute("data-block-id");
      y && (t([y]), o.current = y);
    },
    [t, s, i, a, c]
  ), u = I(
    (f) => {
      if (!o.current) return;
      const h = ee(r, { _id: o.current });
      h && e(f, h, !1);
    },
    [r, e]
  ), p = I(() => {
    n(), o.current = null;
  }, [n]);
  return {
    onMouseDown: d,
    onDragStart: u,
    onDragEnd: p
  };
}, Ag = () => {
  const [t] = le();
  return I(
    (e, n) => F(n) ? {} : Object.entries(n).reduce(
      (r, [o, s]) => {
        const i = [];
        let a = ee(t, { _id: e });
        for (; a; )
          i.push(a), a = ee(t, { _id: a._parent });
        const c = ee(i, { _type: s.block });
        return c && (r[o] = _(c, _(s, "prop"), null)), r;
      },
      {}
    ),
    [t]
  );
}, Tg = P("edit"), Mc = () => {
  const [t, e] = M(Tg);
  return { mode: t, setMode: e };
}, Ig = ({ children: t, block: e }) => {
  const n = D(() => Pe(e._type), [e._type]), r = _(n, "dataProviderDependencies"), o = _(n, "dataProvider"), s = _(n, "dataProviderMode", "mock"), i = uh(e, s, r, o);
  return t(i);
}, Bg = () => /* @__PURE__ */ l("div", { className: "flex min-h-[100px] items-center justify-center bg-red-50 p-2 text-center text-red-500", children: "Something went wrong." });
function ke(...t) {
  return Ll(_f(t));
}
const _s = ({
  editor: t,
  trigger: e,
  content: n,
  from: r,
  menuRef: o
}) => {
  const { document: s } = yt(), [i, a] = $({ left: void 0, right: void 0, top: void 0, bottom: void 0 }), [c, d] = $(!1), u = ne(null);
  if (z(() => {
    var x, w;
    if (!c) {
      a({ left: void 0, right: void 0, top: void 0, bottom: void 0 });
      return;
    }
    const p = (x = u.current) == null ? void 0 : x.getBoundingClientRect();
    if (!p || !s) return;
    const f = (w = o.current) == null ? void 0 : w.getBoundingClientRect();
    if (!f) return;
    let h = p.left, m = p.bottom + 4, g, y;
    (f == null ? void 0 : f.left) + (f == null ? void 0 : f.width) + 50 >= s.body.offsetWidth && (h = void 0, g = s.body.offsetWidth - (p == null ? void 0 : p.right)), m + 202 >= s.body.clientHeight && (m = void 0, y = s.body.clientHeight - p.bottom + f.height), a({ left: h, top: m, right: g, bottom: y });
  }, [c]), r === "canvas") {
    const p = () => {
      d(!1), t && (t == null || t.view.focus(), t == null || t.chain().focus().run());
    };
    return /* @__PURE__ */ b(Q, { children: [
      /* @__PURE__ */ l("div", { ref: u, onClick: () => d((f) => !f), className: "cursor-pointer", children: e }),
      c && (i.left !== void 0 || i.top !== void 0 || i.right !== void 0 || i.bottom !== void 0) && Pf(
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
        s.body,
        "chaibuilder-rte-dropdown-menu"
      )
    ] });
  }
  return /* @__PURE__ */ l(Q, { children: /* @__PURE__ */ b(kn, { open: c, onOpenChange: d, children: [
    /* @__PURE__ */ l(Cn, { className: "relative outline-none", asChild: !0, children: e }),
    /* @__PURE__ */ l(Ft, { className: "z-50 rounded-md border bg-white p-1 text-xs shadow-xl", children: c && (typeof n == "function" ? n(() => d(!1)) : n) })
  ] }) });
}, Rg = (t, e, n) => {
  const r = n === "settings", o = typeof e == "boolean" ? e : e.some((s) => t.isActive(s));
  return {
    "rounded p-1": !0,
    "hover:bg-blue-900 hover:text-blue-100": !o && !r,
    "hover:bg-blue-100 hover:text-blue-900": !o && r,
    "bg-blue-500 text-white": o && r,
    "bg-white text-blue-500": o && !r
  };
}, ya = ({ themeColors: t, onClose: e, color: n, onChange: r, onRemove: o }) => /* @__PURE__ */ b(Q, { children: [
  /* @__PURE__ */ l("div", { className: "flex w-[180px] flex-wrap gap-1 pb-2", children: (t == null ? void 0 : t.length) > 0 && Fs(t).map((s) => {
    var i;
    return /* @__PURE__ */ l(
      "button",
      {
        className: ke(
          "h-4 w-4 cursor-pointer rounded-full border border-gray-900 shadow duration-200 hover:scale-105 hover:shadow-xl",
          {
            "border-2": s === n
          }
        ),
        style: { backgroundColor: s },
        onClick: () => {
          r(s), e();
        },
        title: (i = s || "#000000") == null ? void 0 : i.toUpperCase()
      },
      s
    );
  }) }),
  /* @__PURE__ */ l(Af, { color: n, onChange: r, style: { width: "200px", height: "200px" } }),
  /* @__PURE__ */ b("div", { className: "mt-1 flex items-center justify-between gap-1", children: [
    /* @__PURE__ */ l(
      Cr,
      {
        type: "text",
        value: n || "#000000f2",
        onChange: (s) => r(s.target.value, !0),
        className: "!h-5 !w-[105px] rounded-sm !p-0 text-center font-light uppercase text-gray-600 outline-none ring-0 focus:ring-0",
        placeholder: "#000000"
      }
    ),
    /* @__PURE__ */ b(
      "button",
      {
        className: "flex h-4 w-max cursor-pointer items-center gap-x-1 rounded-full bg-transparent px-1 text-red-600 shadow-none duration-200 hover:bg-red-100",
        onClick: () => {
          o(), e();
        },
        title: "Remove",
        children: [
          /* @__PURE__ */ l(at, { className: "h-3 w-3" }),
          " Remove"
        ]
      }
    )
  ] })
] }), Lg = ({
  textColor: t,
  highlightColor: e,
  onChangeTextColor: n,
  onChangeHighlightColor: r,
  onRemoveTextColor: o,
  onRemoveHighlightColor: s,
  onClose: i
}) => {
  const [a] = Br(), [c] = M(rm), d = (c == null ? void 0 : c.colors) || {}, u = Object.values(d).map((h) => _(h, a ? "1" : "0")), [p, f] = $("TEXT");
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
      ya,
      {
        themeColors: u,
        onClose: i,
        onChange: n,
        color: t,
        onRemove: o
      }
    ) : /* @__PURE__ */ l(
      ya,
      {
        themeColors: u,
        onClose: i,
        onChange: r,
        color: e,
        onRemove: s
      }
    )
  ] });
}, Pg = ({ editor: t, from: e, menuRef: n }) => {
  var w, S;
  const r = (w = t == null ? void 0 : t.getAttributes("textStyle")) == null ? void 0 : w.color, o = (S = t == null ? void 0 : t.getAttributes("highlight")) == null ? void 0 : S.color, [s, i] = $(r || "#000000F2"), [a, c] = $(o || "#00000057"), [d, u] = ta(s, 150), [p, f] = ta(a, 150), h = (v, k) => {
    k ? (i(v), u(v)) : (t == null || t.chain().setColor(v).run(), i(v));
  }, m = (v, k) => {
    k ? (c(v), f(v)) : (t == null || t.chain().setHighlight({ color: v }).run(), c(v));
  }, g = () => {
    t == null || t.chain().unsetColor().run(), i("#000000F2");
  }, y = () => {
    t == null || t.chain().unsetHighlight().run();
  };
  return z(() => {
    o && c(o);
  }, [o]), z(() => {
    p != null && p.includes("#") && (p == null ? void 0 : p.length) >= 3 && (t == null || t.chain().setHighlight({ color: p }).run());
  }, [p]), z(() => {
    d != null && d.includes("#") && (d == null ? void 0 : d.length) >= 3 && (t == null || t.chain().setColor(d).run());
  }, [d]), /* @__PURE__ */ l(
    _s,
    {
      editor: t,
      from: e,
      menuRef: n,
      trigger: /* @__PURE__ */ b("div", { className: ke("relative flex items-center", Rg(t, !!r, e)), title: "Text Color", children: [
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
        Lg,
        {
          textColor: s,
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
  const r = n === "settings", o = typeof e == "boolean" ? e : e.some((s) => t.isActive(s));
  return {
    "rounded p-1": !0,
    "hover:bg-blue-900 hover:text-blue-100": !o && !r,
    "hover:bg-blue-100 hover:text-blue-900": !o && r,
    "bg-blue-500 text-white": o && r,
    "bg-white text-blue-500": o && !r
  };
}, Dc = ({ editor: t, from: e = "settings", onExpand: n }) => {
  const r = ne(null);
  if (!t) return null;
  const o = () => {
    const i = window.prompt("URL");
    i && t.chain().focus().extendMarkRange("link").setLink({ href: i }).run();
  }, s = () => {
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
            children: /* @__PURE__ */ l(xp, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => t.chain().focus().toggleItalic().run(),
            className: ke("", Ye(t, ["italic"], e)),
            title: "Italic",
            children: /* @__PURE__ */ l(gl, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => t.chain().focus().toggleUnderline().run(),
            className: ke("", Ye(t, ["underline"], e)),
            title: "Underline",
            children: /* @__PURE__ */ l(bl, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => t.chain().focus().toggleStrike().run(),
            className: ke("", Ye(t, ["strike"], e)),
            title: "Strike",
            children: /* @__PURE__ */ l(vp, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ l("div", { className: "mx-1 h-5 w-px self-center bg-border" }),
        /* @__PURE__ */ l(Pg, { editor: t, from: e, menuRef: r }),
        /* @__PURE__ */ l("div", { className: "mx-1 h-5 w-px self-center bg-border" }),
        /* @__PURE__ */ l(
          _s,
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
                    /* @__PURE__ */ l(wp, { className: "h-4 w-4" }),
                    "Ordered List"
                  ]
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ l(
          _s,
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
                  t.isActive({ textAlign: "center" }) ? /* @__PURE__ */ l(Qi, { className: "h-4 w-4" }) : t.isActive({ textAlign: "right" }) ? /* @__PURE__ */ l(ea, { className: "h-4 w-4" }) : /* @__PURE__ */ l(Zi, { className: "h-4 w-4" }),
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
                    /* @__PURE__ */ l(Zi, { className: "h-4 w-4" }),
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
                    /* @__PURE__ */ l(Qi, { className: "h-4 w-4" }),
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
                    /* @__PURE__ */ l(ea, { className: "h-4 w-4" }),
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
            onClick: s,
            className: ke("", Ye(t, ["link"], e)),
            title: "Remove Link",
            disabled: !t.isActive("link"),
            children: /* @__PURE__ */ l(yl, { className: "h-3.5 w-3.5" })
          }
        ) : /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: o,
            className: ke("", Ye(t, ["link"], e)),
            title: "Add Link",
            children: /* @__PURE__ */ l(kp, { className: "h-3.5 w-3.5" })
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
              children: /* @__PURE__ */ l(Cp, { className: "h-3.5 w-3.5" })
            }
          )
        ] })
      ]
    }
  );
};
function Me(t) {
  this.content = t;
}
Me.prototype = {
  constructor: Me,
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
    var r = n && n != t ? this.remove(n) : this, o = r.find(t), s = r.content.slice();
    return o == -1 ? s.push(n || t, e) : (s[o + 1] = e, n && (s[o] = n)), new Me(s);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(t) {
    var e = this.find(t);
    if (e == -1) return this;
    var n = this.content.slice();
    return n.splice(e, 2), new Me(n);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(t, e) {
    return new Me([t, e].concat(this.remove(t).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(t, e) {
    var n = this.remove(t).content.slice();
    return n.push(t, e), new Me(n);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(t, e, n) {
    var r = this.remove(e), o = r.content.slice(), s = r.find(t);
    return o.splice(s == -1 ? o.length : s, 0, e, n), new Me(o);
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
    return t = Me.from(t), t.size ? new Me(t.content.concat(this.subtract(t).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(t) {
    return t = Me.from(t), t.size ? new Me(this.subtract(t).content.concat(t.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(t) {
    var e = this;
    t = Me.from(t);
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
Me.from = function(t) {
  if (t instanceof Me) return t;
  var e = [];
  if (t) for (var n in t) e.push(n, t[n]);
  return new Me(e);
};
function $c(t, e, n) {
  for (let r = 0; ; r++) {
    if (r == t.childCount || r == e.childCount)
      return t.childCount == e.childCount ? null : n;
    let o = t.child(r), s = e.child(r);
    if (o == s) {
      n += o.nodeSize;
      continue;
    }
    if (!o.sameMarkup(s))
      return n;
    if (o.isText && o.text != s.text) {
      for (let i = 0; o.text[i] == s.text[i]; i++)
        n++;
      return n;
    }
    if (o.content.size || s.content.size) {
      let i = $c(o.content, s.content, n + 1);
      if (i != null)
        return i;
    }
    n += o.nodeSize;
  }
}
function Fc(t, e, n, r) {
  for (let o = t.childCount, s = e.childCount; ; ) {
    if (o == 0 || s == 0)
      return o == s ? null : { a: n, b: r };
    let i = t.child(--o), a = e.child(--s), c = i.nodeSize;
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
      let d = Fc(i.content, a.content, n - 1, r - 1);
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
  nodesBetween(e, n, r, o = 0, s) {
    for (let i = 0, a = 0; a < n; i++) {
      let c = this.content[i], d = a + c.nodeSize;
      if (d > e && r(c, o + a, s || null, i) !== !1 && c.content.size) {
        let u = a + 1;
        c.nodesBetween(Math.max(0, e - u), Math.min(c.content.size, n - u), r, o + u);
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
  textBetween(e, n, r, o) {
    let s = "", i = !0;
    return this.nodesBetween(e, n, (a, c) => {
      let d = a.isText ? a.text.slice(Math.max(e, c) - c, n - c) : a.isLeaf ? o ? typeof o == "function" ? o(a) : o : a.type.spec.leafText ? a.type.spec.leafText(a) : "" : "";
      a.isBlock && (a.isLeaf && d || a.isTextblock) && r && (i ? i = !1 : s += r), s += d;
    }, 0), s;
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
    let n = this.lastChild, r = e.firstChild, o = this.content.slice(), s = 0;
    for (n.isText && n.sameMarkup(r) && (o[o.length - 1] = n.withText(n.text + r.text), s = 1); s < e.content.length; s++)
      o.push(e.content[s]);
    return new H(o, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, n = this.size) {
    if (e == 0 && n == this.size)
      return this;
    let r = [], o = 0;
    if (n > e)
      for (let s = 0, i = 0; i < n; s++) {
        let a = this.content[s], c = i + a.nodeSize;
        c > e && ((i < e || c > n) && (a.isText ? a = a.cut(Math.max(0, e - i), Math.min(a.text.length, n - i)) : a = a.cut(Math.max(0, e - i - 1), Math.min(a.content.size, n - i - 1))), r.push(a), o += a.nodeSize), i = c;
      }
    return new H(r, o);
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
    let o = this.content.slice(), s = this.size + n.nodeSize - r.nodeSize;
    return o[e] = n, new H(o, s);
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
      let o = this.content[n];
      e(o, r, n), r += o.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, n = 0) {
    return $c(this, e, n);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, n = this.size, r = e.size) {
    return Fc(this, e, n, r);
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
      let o = this.child(n), s = r + o.nodeSize;
      if (s >= e)
        return s == e ? Fr(n + 1, s) : Fr(n, r);
      r = s;
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
    for (let o = 0; o < e.length; o++) {
      let s = e[o];
      r += s.nodeSize, o && s.isText && e[o - 1].sameMarkup(s) ? (n || (n = e.slice(0, o)), n[n.length - 1] = s.withText(n[n.length - 1].text + s.text)) : n && n.push(s);
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
class de {
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
    for (let o = 0; o < e.length; o++) {
      let s = e[o];
      if (this.eq(s))
        return e;
      if (this.type.excludes(s.type))
        n || (n = e.slice(0, o));
      else {
        if (s.type.excludes(this.type))
          return e;
        !r && s.type.rank > this.type.rank && (n || (n = e.slice(0, o)), n.push(this), r = !0), n && n.push(s);
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
    let o = r.create(n.attrs);
    return r.checkAttrs(o.attrs), o;
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
      return de.none;
    if (e instanceof de)
      return [e];
    let n = e.slice();
    return n.sort((r, o) => r.type.rank - o.type.rank), n;
  }
}
de.none = [];
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
    let r = Hc(this.content, e + this.openStart, n);
    return r && new X(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, n) {
    return new X(zc(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
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
    let r = n.openStart || 0, o = n.openEnd || 0;
    if (typeof r != "number" || typeof o != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new X(H.fromJSON(e, n.content), r, o);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, n = !0) {
    let r = 0, o = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (n || !s.type.spec.isolating); s = s.firstChild)
      r++;
    for (let s = e.lastChild; s && !s.isLeaf && (n || !s.type.spec.isolating); s = s.lastChild)
      o++;
    return new X(e, r, o);
  }
}
X.empty = new X(H.empty, 0, 0);
function zc(t, e, n) {
  let { index: r, offset: o } = t.findIndex(e), s = t.maybeChild(r), { index: i, offset: a } = t.findIndex(n);
  if (o == e || s.isText) {
    if (a != n && !t.child(i).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(n));
  }
  if (r != i)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(r, s.copy(zc(s.content, e - o - 1, n - o - 1)));
}
function Hc(t, e, n, r) {
  let { index: o, offset: s } = t.findIndex(e), i = t.maybeChild(o);
  if (s == e || i.isText)
    return r && !r.canReplace(o, o, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
  let a = Hc(i.content, e - s - 1, n, i);
  return a && t.replaceChild(o, i.copy(a));
}
function Og(t, e, n) {
  if (n.openStart > t.depth)
    throw new lo("Inserted content deeper than insertion position");
  if (t.depth - n.openStart != e.depth - n.openEnd)
    throw new lo("Inconsistent open depths");
  return Vc(t, e, n, 0);
}
function Vc(t, e, n, r) {
  let o = t.index(r), s = t.node(r);
  if (o == e.index(r) && r < t.depth - n.openStart) {
    let i = Vc(t, e, n, r + 1);
    return s.copy(s.content.replaceChild(o, i));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
      let i = t.parent, a = i.content;
      return ln(i, a.cut(0, t.parentOffset).append(n.content).append(a.cut(e.parentOffset)));
    } else {
      let { start: i, end: a } = Mg(n, t);
      return ln(s, Wc(t, i, a, e, r));
    }
  else return ln(s, co(t, e, r));
}
function jc(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new lo("Cannot join " + e.type.name + " onto " + t.type.name);
}
function As(t, e, n) {
  let r = t.node(n);
  return jc(r, e.node(n)), r;
}
function an(t, e) {
  let n = e.length - 1;
  n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t);
}
function lr(t, e, n, r) {
  let o = (e || t).node(n), s = 0, i = e ? e.index(n) : o.childCount;
  t && (s = t.index(n), t.depth > n ? s++ : t.textOffset && (an(t.nodeAfter, r), s++));
  for (let a = s; a < i; a++)
    an(o.child(a), r);
  e && e.depth == n && e.textOffset && an(e.nodeBefore, r);
}
function ln(t, e) {
  return t.type.checkContent(e), t.copy(e);
}
function Wc(t, e, n, r, o) {
  let s = t.depth > o && As(t, e, o + 1), i = r.depth > o && As(n, r, o + 1), a = [];
  return lr(null, t, o, a), s && i && e.index(o) == n.index(o) ? (jc(s, i), an(ln(s, Wc(t, e, n, r, o + 1)), a)) : (s && an(ln(s, co(t, e, o + 1)), a), lr(e, n, o, a), i && an(ln(i, co(n, r, o + 1)), a)), lr(r, null, o, a), new H(a);
}
function co(t, e, n) {
  let r = [];
  if (lr(null, t, n, r), t.depth > n) {
    let o = As(t, e, n + 1);
    an(ln(o, co(t, e, n + 1)), r);
  }
  return lr(e, null, n, r), new H(r);
}
function Mg(t, e) {
  let n = e.depth - t.openStart, o = e.node(n).copy(t.content);
  for (let s = n - 1; s >= 0; s--)
    o = e.node(s).copy(H.from(o));
  return {
    start: o.resolveNoCache(t.openStart + n),
    end: o.resolveNoCache(o.content.size - t.openEnd - n)
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
    let r = this.pos - this.path[this.path.length - 1], o = e.child(n);
    return r ? e.child(n).cut(r) : o;
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
    let r = this.path[n * 3], o = n == 0 ? 0 : this.path[n * 3 - 1] + 1;
    for (let s = 0; s < e; s++)
      o += r.child(s).nodeSize;
    return o;
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
      return de.none;
    if (this.textOffset)
      return e.child(n).marks;
    let r = e.maybeChild(n - 1), o = e.maybeChild(n);
    if (!r) {
      let a = r;
      r = o, o = a;
    }
    let s = r.marks;
    for (var i = 0; i < s.length; i++)
      s[i].type.spec.inclusive === !1 && (!o || !s[i].isInSet(o.marks)) && (s = s[i--].removeFromSet(s));
    return s;
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
    let r = n.marks, o = e.parent.maybeChild(e.index());
    for (var s = 0; s < r.length; s++)
      r[s].type.spec.inclusive === !1 && (!o || !r[s].isInSet(o.marks)) && (r = r[s--].removeFromSet(r));
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
    let r = [], o = 0, s = n;
    for (let i = e; ; ) {
      let { index: a, offset: c } = i.content.findIndex(s), d = s - c;
      if (r.push(i, a, o + c), !d || (i = i.child(a), i.isText))
        break;
      s = d - 1, o += c + 1;
    }
    return new mr(n, r, s);
  }
  /**
  @internal
  */
  static resolveCached(e, n) {
    let r = xa.get(e);
    if (r)
      for (let s = 0; s < r.elts.length; s++) {
        let i = r.elts[s];
        if (i.pos == n)
          return i;
      }
    else
      xa.set(e, r = new Dg());
    let o = r.elts[r.i] = mr.resolve(e, n);
    return r.i = (r.i + 1) % $g, o;
  }
}
class Dg {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const $g = 12, xa = /* @__PURE__ */ new WeakMap();
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
const Fg = /* @__PURE__ */ Object.create(null);
let cn = class Ts {
  /**
  @internal
  */
  constructor(e, n, r, o = de.none) {
    this.type = e, this.attrs = n, this.marks = o, this.content = r || H.empty;
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
  nodesBetween(e, n, r, o = 0) {
    this.content.nodesBetween(e, n, r, o, this);
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
  textBetween(e, n, r, o) {
    return this.content.textBetween(e, n, r, o);
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
    return this.type == e && ao(this.attrs, n || e.defaultAttrs || Fg) && de.sameSet(this.marks, r || de.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Ts(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Ts(this.type, this.attrs, this.content, e);
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
    let o = this.resolve(e), s = this.resolve(n), i = r ? 0 : o.sharedDepth(n), a = o.start(i), d = o.node(i).content.cut(o.pos - a, s.pos - a);
    return new X(d, o.depth - i, s.depth - i);
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
    return Og(this.resolve(e), this.resolve(n), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let n = this; ; ) {
      let { index: r, offset: o } = n.content.findIndex(e);
      if (n = n.maybeChild(r), !n)
        return null;
      if (o == e || n.isText)
        return n;
      e -= o + 1;
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
    let o = this.content.child(n - 1);
    return { node: o, index: n - 1, offset: r - o.nodeSize };
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
    let o = !1;
    return n > e && this.nodesBetween(e, n, (s) => (r.isInSet(s.marks) && (o = !0), !o)), o;
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
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Gc(this.marks, e);
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
  canReplace(e, n, r = H.empty, o = 0, s = r.childCount) {
    let i = this.contentMatchAt(e).matchFragment(r, o, s), a = i && i.matchFragment(this.content, n);
    if (!a || !a.validEnd)
      return !1;
    for (let c = o; c < s; c++)
      if (!this.type.allowsMarks(r.child(c).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, n, r, o) {
    if (o && !this.type.allowsMarks(o))
      return !1;
    let s = this.contentMatchAt(e).matchType(r), i = s && s.matchFragment(this.content, n);
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
    let e = de.none;
    for (let n = 0; n < this.marks.length; n++) {
      let r = this.marks[n];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!de.sameSet(e, this.marks))
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
    let o = H.fromJSON(e, n.content), s = e.nodeType(n.type).create(n.attrs, o, r);
    return s.type.checkAttrs(s.attrs), s;
  }
};
cn.prototype.text = void 0;
class po extends cn {
  /**
  @internal
  */
  constructor(e, n, r, o) {
    if (super(e, n, null, o), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Gc(this.marks, JSON.stringify(this.text));
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
function Gc(t, e) {
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
    let r = new zg(e, n);
    if (r.next == null)
      return gn.empty;
    let o = Uc(r);
    r.next && r.err("Unexpected trailing text");
    let s = Kg(Ug(o));
    return Jg(s, r), s;
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
    let o = this;
    for (let s = n; o && s < r; s++)
      o = o.matchType(e.child(s).type);
    return o;
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
    let o = [this];
    function s(i, a) {
      let c = i.matchFragment(e, r);
      if (c && (!n || c.validEnd))
        return H.from(a.map((d) => d.createAndFill()));
      for (let d = 0; d < i.next.length; d++) {
        let { type: u, next: p } = i.next[d];
        if (!(u.isText || u.hasRequiredAttrs()) && o.indexOf(p) == -1) {
          o.push(p);
          let f = s(p, a.concat(u));
          if (f)
            return f;
        }
      }
      return null;
    }
    return s(this, []);
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
      let o = r.shift(), s = o.match;
      if (s.matchType(e)) {
        let i = [];
        for (let a = o; a.type; a = a.via)
          i.push(a.type);
        return i.reverse();
      }
      for (let i = 0; i < s.next.length; i++) {
        let { type: a, next: c } = s.next[i];
        !a.isLeaf && !a.hasRequiredAttrs() && !(a.name in n) && (!o.type || c.validEnd) && (r.push({ match: a.contentMatch, type: a, via: o }), n[a.name] = !0);
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
      for (let o = 0; o < r.next.length; o++)
        e.indexOf(r.next[o].next) == -1 && n(r.next[o].next);
    }
    return n(this), e.map((r, o) => {
      let s = o + (r.validEnd ? "*" : " ") + " ";
      for (let i = 0; i < r.next.length; i++)
        s += (i ? ", " : "") + r.next[i].type.name + "->" + e.indexOf(r.next[i].next);
      return s;
    }).join(`
`);
  }
}
gn.empty = new gn(!0);
class zg {
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
function Uc(t) {
  let e = [];
  do
    e.push(Hg(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function Hg(t) {
  let e = [];
  do
    e.push(Vg(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function Vg(t) {
  let e = Gg(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = jg(t, e);
    else
      break;
  return e;
}
function va(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function jg(t, e) {
  let n = va(t), r = n;
  return t.eat(",") && (t.next != "}" ? r = va(t) : r = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: n, max: r, expr: e };
}
function Wg(t, e) {
  let n = t.nodeTypes, r = n[e];
  if (r)
    return [r];
  let o = [];
  for (let s in n) {
    let i = n[s];
    i.isInGroup(e) && o.push(i);
  }
  return o.length == 0 && t.err("No node type or group '" + e + "' found"), o;
}
function Gg(t) {
  if (t.eat("(")) {
    let e = Uc(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = Wg(t, t.next).map((n) => (t.inline == null ? t.inline = n.isInline : t.inline != n.isInline && t.err("Mixing inline and block content"), { type: "name", value: n }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function Ug(t) {
  let e = [[]];
  return o(s(t, 0), n()), e;
  function n() {
    return e.push([]) - 1;
  }
  function r(i, a, c) {
    let d = { term: c, to: a };
    return e[i].push(d), d;
  }
  function o(i, a) {
    i.forEach((c) => c.to = a);
  }
  function s(i, a) {
    if (i.type == "choice")
      return i.exprs.reduce((c, d) => c.concat(s(d, a)), []);
    if (i.type == "seq")
      for (let c = 0; ; c++) {
        let d = s(i.exprs[c], a);
        if (c == i.exprs.length - 1)
          return d;
        o(d, a = n());
      }
    else if (i.type == "star") {
      let c = n();
      return r(a, c), o(s(i.expr, c), c), [r(c)];
    } else if (i.type == "plus") {
      let c = n();
      return o(s(i.expr, a), c), o(s(i.expr, c), c), [r(c)];
    } else {
      if (i.type == "opt")
        return [r(a)].concat(s(i.expr, a));
      if (i.type == "range") {
        let c = a;
        for (let d = 0; d < i.min; d++) {
          let u = n();
          o(s(i.expr, c), u), c = u;
        }
        if (i.max == -1)
          o(s(i.expr, c), c);
        else
          for (let d = i.min; d < i.max; d++) {
            let u = n();
            r(c, u), o(s(i.expr, c), u), c = u;
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
function Kc(t, e) {
  return e - t;
}
function wa(t, e) {
  let n = [];
  return r(e), n.sort(Kc);
  function r(o) {
    let s = t[o];
    if (s.length == 1 && !s[0].term)
      return r(s[0].to);
    n.push(o);
    for (let i = 0; i < s.length; i++) {
      let { term: a, to: c } = s[i];
      !a && n.indexOf(c) == -1 && r(c);
    }
  }
}
function Kg(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return n(wa(t, 0));
  function n(r) {
    let o = [];
    r.forEach((i) => {
      t[i].forEach(({ term: a, to: c }) => {
        if (!a)
          return;
        let d;
        for (let u = 0; u < o.length; u++)
          o[u][0] == a && (d = o[u][1]);
        wa(t, c).forEach((u) => {
          d || o.push([a, d = []]), d.indexOf(u) == -1 && d.push(u);
        });
      });
    });
    let s = e[r.join(",")] = new gn(r.indexOf(t.length - 1) > -1);
    for (let i = 0; i < o.length; i++) {
      let a = o[i][1].sort(Kc);
      s.next.push({ type: o[i][0], next: e[a.join(",")] || n(a) });
    }
    return s;
  }
}
function Jg(t, e) {
  for (let n = 0, r = [t]; n < r.length; n++) {
    let o = r[n], s = !o.validEnd, i = [];
    for (let a = 0; a < o.next.length; a++) {
      let { type: c, next: d } = o.next[a];
      i.push(c.name), s && !(c.isText || c.hasRequiredAttrs()) && (s = !1), r.indexOf(d) == -1 && r.push(d);
    }
    s && e.err("Only non-generatable nodes (" + i.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Jc(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let r = t[n];
    if (!r.hasDefault)
      return null;
    e[n] = r.default;
  }
  return e;
}
function Yc(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let r in t) {
    let o = e && e[r];
    if (o === void 0) {
      let s = t[r];
      if (s.hasDefault)
        o = s.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    n[r] = o;
  }
  return n;
}
function Xc(t, e, n, r) {
  for (let o in e)
    if (!(o in t))
      throw new RangeError(`Unsupported attribute ${o} for ${n} of type ${o}`);
  for (let o in t) {
    let s = t[o];
    s.validate && s.validate(e[o]);
  }
}
function qc(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      n[r] = new Xg(t, r, e[r]);
  return n;
}
class fo {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.name = e, this.schema = n, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = qc(e, r.attrs), this.defaultAttrs = Jc(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
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
    return !e && this.defaultAttrs ? this.defaultAttrs : Yc(this.attrs, e);
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
    return new cn(this, this.computeAttrs(e), H.from(n), de.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, n, r) {
    return n = H.from(n), this.checkContent(n), new cn(this, this.computeAttrs(e), n, de.setFrom(r));
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
    let o = this.contentMatch.matchFragment(n), s = o && o.fillBefore(H.empty, !0);
    return s ? new cn(this, e, n.append(s), de.setFrom(r)) : null;
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
    Xc(this.attrs, e, "node", this.name);
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
    return n ? n.length ? n : de.none : e;
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((s, i) => r[s] = new fo(s, n, i));
    let o = n.spec.topNode || "doc";
    if (!r[o])
      throw new RangeError("Schema is missing its top node type ('" + o + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let s in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
}
function Yg(t, e, n) {
  let r = n.split("|");
  return (o) => {
    let s = o === null ? "null" : typeof o;
    if (r.indexOf(s) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${t}, got ${s}`);
  };
}
class Xg {
  constructor(e, n, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? Yg(e, n, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Ni {
  /**
  @internal
  */
  constructor(e, n, r, o) {
    this.name = e, this.rank = n, this.schema = r, this.spec = o, this.attrs = qc(e, o.attrs), this.excluded = null;
    let s = Jc(this.attrs);
    this.instance = s ? new de(this, s) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new de(this, Yc(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null), o = 0;
    return e.forEach((s, i) => r[s] = new Ni(s, o++, n, i)), r;
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
    Xc(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class qg {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let n = this.spec = {};
    for (let o in e)
      n[o] = e[o];
    n.nodes = Me.from(e.nodes), n.marks = Me.from(e.marks || {}), this.nodes = fo.compile(this.spec.nodes, this), this.marks = Ni.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in this.nodes) {
      if (o in this.marks)
        throw new RangeError(o + " can not be both a node and a mark");
      let s = this.nodes[o], i = s.spec.content || "", a = s.spec.marks;
      if (s.contentMatch = r[i] || (r[i] = gn.parse(i, this.nodes)), s.inlineContent = s.contentMatch.inlineContent, s.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!s.isInline || !s.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = s;
      }
      s.markSet = a == "_" ? null : a ? ka(this, a.split(" ")) : a == "" || !s.inlineContent ? [] : null;
    }
    for (let o in this.marks) {
      let s = this.marks[o], i = s.spec.excludes;
      s.excluded = i == null ? [s] : i == "" ? [] : ka(this, i.split(" "));
    }
    this.nodeFromJSON = (o) => cn.fromJSON(this, o), this.markFromJSON = (o) => de.fromJSON(this, o), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, n = null, r, o) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof fo) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(n, r, o);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, n) {
    let r = this.nodes.text;
    return new po(r, r.defaultAttrs, e, de.setFrom(n));
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
function ka(t, e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let o = e[r], s = t.marks[o], i = s;
    if (s)
      n.push(s);
    else
      for (let a in t.marks) {
        let c = t.marks[a];
        (o == "_" || c.spec.group && c.spec.group.split(" ").indexOf(o) > -1) && n.push(i = c);
      }
    if (!i)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return n;
}
function Zg(t) {
  return t.tag != null;
}
function Qg(t) {
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
    n.forEach((o) => {
      if (Zg(o))
        this.tags.push(o);
      else if (Qg(o)) {
        let s = /[^=]*/.exec(o.style)[0];
        r.indexOf(s) < 0 && r.push(s), this.styles.push(o);
      }
    }), this.normalizeLists = !this.tags.some((o) => {
      if (!/^(ul|ol)\b/.test(o.tag) || !o.node)
        return !1;
      let s = e.nodes[o.node];
      return s.contentMatch.matchType(s);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, n = {}) {
    let r = new Na(this, n, !1);
    return r.addAll(e, de.none, n.from, n.to), r.finish();
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
    let r = new Na(this, n, !0);
    return r.addAll(e, de.none, n.from, n.to), X.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, n, r) {
    for (let o = r ? this.tags.indexOf(r) + 1 : 0; o < this.tags.length; o++) {
      let s = this.tags[o];
      if (nb(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || n.matchesContext(s.context))) {
        if (s.getAttrs) {
          let i = s.getAttrs(e);
          if (i === !1)
            continue;
          s.attrs = i || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, n, r, o) {
    for (let s = o ? this.styles.indexOf(o) + 1 : 0; s < this.styles.length; s++) {
      let i = this.styles[s], a = i.style;
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
    function r(o) {
      let s = o.priority == null ? 50 : o.priority, i = 0;
      for (; i < n.length; i++) {
        let a = n[i];
        if ((a.priority == null ? 50 : a.priority) < s)
          break;
      }
      n.splice(i, 0, o);
    }
    for (let o in e.marks) {
      let s = e.marks[o].spec.parseDOM;
      s && s.forEach((i) => {
        r(i = Sa(i)), i.mark || i.ignore || i.clearMark || (i.mark = o);
      });
    }
    for (let o in e.nodes) {
      let s = e.nodes[o].spec.parseDOM;
      s && s.forEach((i) => {
        r(i = Sa(i)), i.node || i.ignore || i.mark || (i.node = o);
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
const Zc = {
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
}, eb = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, Qc = { ol: !0, ul: !0 }, gr = 1, Is = 2, cr = 4;
function Ca(t, e, n) {
  return e != null ? (e ? gr : 0) | (e === "full" ? Is : 0) : t && t.whitespace == "pre" ? gr | Is : n & ~cr;
}
class zr {
  constructor(e, n, r, o, s, i) {
    this.type = e, this.attrs = n, this.marks = r, this.solid = o, this.options = i, this.content = [], this.activeMarks = de.none, this.match = s || (i & cr ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let n = this.type.contentMatch.fillBefore(H.from(e));
      if (n)
        this.match = this.type.contentMatch.matchFragment(n);
      else {
        let r = this.type.contentMatch, o;
        return (o = r.findWrapping(e.type)) ? (this.match = r, o) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & gr)) {
      let r = this.content[this.content.length - 1], o;
      if (r && r.isText && (o = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let s = r;
        r.text.length == o[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - o[0].length));
      }
    }
    let n = H.from(this.content);
    return !e && this.match && (n = n.append(this.match.fillBefore(H.empty, !0))), this.type ? this.type.create(this.attrs, n, this.marks) : n;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Zc.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Na {
  constructor(e, n, r) {
    this.parser = e, this.options = n, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let o = n.topNode, s, i = Ca(null, n.preserveWhitespace, 0) | (r ? cr : 0);
    o ? s = new zr(o.type, o.attrs, de.none, !0, n.topMatch || o.type.contentMatch, i) : r ? s = new zr(null, null, de.none, !0, null, i) : s = new zr(e.schema.topNodeType, null, de.none, !0, null, i), this.nodes = [s], this.find = n.findPositions, this.needsBlock = !1;
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
    let r = e.nodeValue, o = this.top, s = o.options & Is ? "full" : this.localPreserveWS || (o.options & gr) > 0, { schema: i } = this.parser;
    if (s === "full" || o.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (s)
        if (s === "full")
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
        let a = o.content[o.content.length - 1], c = e.previousSibling;
        (!a || c && c.nodeName == "BR" || a.isText && /[ \t\r\n\u000c]$/.test(a.text)) && (r = r.slice(1));
      }
      r && this.insertNode(i.text(r), n, !/\S/.test(r)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, n, r) {
    let o = this.localPreserveWS, s = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let i = e.nodeName.toLowerCase(), a;
    Qc.hasOwnProperty(i) && this.parser.normalizeLists && tb(e);
    let c = this.options.ruleFromNode && this.options.ruleFromNode(e) || (a = this.parser.matchTag(e, this, r));
    e: if (c ? c.ignore : eb.hasOwnProperty(i))
      this.findInside(e), this.ignoreFallback(e, n);
    else if (!c || c.skip || c.closeParent) {
      c && c.closeParent ? this.open = Math.max(0, this.open - 1) : c && c.skip.nodeType && (e = c.skip);
      let d, u = this.needsBlock;
      if (Zc.hasOwnProperty(i))
        s.content.length && s.content[0].isInline && this.open && (this.open--, s = this.top), d = !0, s.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, n);
        break e;
      }
      let p = c && c.skip ? n : this.readStyles(e, n);
      p && this.addAll(e, p), d && this.sync(s), this.needsBlock = u;
    } else {
      let d = this.readStyles(e, n);
      d && this.addElementByRule(e, c, d, c.consuming === !1 ? a : void 0);
    }
    this.localPreserveWS = o;
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
      for (let o = 0; o < this.parser.matchedStyles.length; o++) {
        let s = this.parser.matchedStyles[o], i = r.getPropertyValue(s);
        if (i)
          for (let a = void 0; ; ) {
            let c = this.parser.matchStyle(s, i, this, a);
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
  addElementByRule(e, n, r, o) {
    let s, i;
    if (n.node)
      if (i = this.parser.schema.nodes[n.node], i.isLeaf)
        this.insertNode(i.create(n.attrs), r, e.nodeName == "BR") || this.leafFallback(e, r);
      else {
        let c = this.enter(i, n.attrs || null, r, n.preserveWhitespace);
        c && (s = !0, r = c);
      }
    else {
      let c = this.parser.schema.marks[n.mark];
      r = r.concat(c.create(n.attrs));
    }
    let a = this.top;
    if (i && i.isLeaf)
      this.findInside(e);
    else if (o)
      this.addElement(e, r, o);
    else if (n.getContent)
      this.findInside(e), n.getContent(e, this.parser.schema).forEach((c) => this.insertNode(c, r, !1));
    else {
      let c = e;
      typeof n.contentElement == "string" ? c = e.querySelector(n.contentElement) : typeof n.contentElement == "function" ? c = n.contentElement(e) : n.contentElement && (c = n.contentElement), this.findAround(e, c, !0), this.addAll(c, r), this.findAround(e, c, !1);
    }
    s && this.sync(a) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, n, r, o) {
    let s = r || 0;
    for (let i = r ? e.childNodes[r] : e.firstChild, a = o == null ? null : e.childNodes[o]; i != a; i = i.nextSibling, ++s)
      this.findAtPoint(e, s), this.addDOM(i, n);
    this.findAtPoint(e, s);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, n, r) {
    let o, s;
    for (let i = this.open, a = 0; i >= 0; i--) {
      let c = this.nodes[i], d = c.findWrapping(e);
      if (d && (!o || o.length > d.length + a) && (o = d, s = c, !d.length))
        break;
      if (c.solid) {
        if (r)
          break;
        a += 2;
      }
    }
    if (!o)
      return null;
    this.sync(s);
    for (let i = 0; i < o.length; i++)
      n = this.enterInner(o[i], null, n, !1);
    return n;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, n, r) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let s = this.textblockFromContext();
      s && (n = this.enterInner(s, null, n));
    }
    let o = this.findPlace(e, n, r);
    if (o) {
      this.closeExtra();
      let s = this.top;
      s.match && (s.match = s.match.matchType(e.type));
      let i = de.none;
      for (let a of o.concat(e.marks))
        (s.type ? s.type.allowsMarkType(a.type) : Ea(a.type, e.type)) && (i = a.addToSet(i));
      return s.content.push(e.mark(i)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, n, r, o) {
    let s = this.findPlace(e.create(n), r, !1);
    return s && (s = this.enterInner(e, n, r, !0, o)), s;
  }
  // Open a node of the given type
  enterInner(e, n, r, o = !1, s) {
    this.closeExtra();
    let i = this.top;
    i.match = i.match && i.match.matchType(e);
    let a = Ca(e, s, i.options);
    i.options & cr && i.content.length == 0 && (a |= cr);
    let c = de.none;
    return r = r.filter((d) => (i.type ? i.type.allowsMarkType(d.type) : Ea(d.type, e)) ? (c = d.addToSet(c), !1) : !0), this.nodes.push(new zr(e, n, c, o, null, a)), this.open++, r;
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
      for (let o = r.length - 1; o >= 0; o--)
        e += r[o].nodeSize;
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
      for (let o = 0; o < this.find.length; o++)
        this.find[o].pos == null && e.nodeType == 1 && e.contains(this.find[o].node) && n.compareDocumentPosition(this.find[o].node) & (r ? 2 : 4) && (this.find[o].pos = this.currentPos);
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
    let n = e.split("/"), r = this.options.context, o = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), s = -(r ? r.depth + 1 : 0) + (o ? 0 : 1), i = (a, c) => {
      for (; a >= 0; a--) {
        let d = n[a];
        if (d == "") {
          if (a == n.length - 1 || a == 0)
            continue;
          for (; c >= s; c--)
            if (i(a - 1, c))
              return !0;
          return !1;
        } else {
          let u = c > 0 || c == 0 && o ? this.nodes[c].type : r && c >= s ? r.node(c - s).type : null;
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
function tb(t) {
  for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && Qc.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : r == "li" ? n = e : r && (n = null);
  }
}
function nb(t, e) {
  return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
}
function Sa(t) {
  let e = {};
  for (let n in t)
    e[n] = t[n];
  return e;
}
function Ea(t, e) {
  let n = e.schema.nodes;
  for (let r in n) {
    let o = n[r];
    if (!o.allowsMarkType(t))
      continue;
    let s = [], i = (a) => {
      s.push(a);
      for (let c = 0; c < a.edgeCount; c++) {
        let { type: d, next: u } = a.edge(c);
        if (d == e || s.indexOf(u) < 0 && i(u))
          return !0;
      }
    };
    if (i(o.contentMatch))
      return !0;
  }
}
const ed = 65535, td = Math.pow(2, 16);
function rb(t, e) {
  return t + e * td;
}
function _a(t) {
  return t & ed;
}
function ob(t) {
  return (t - (t & ed)) / td;
}
const nd = 1, rd = 2, Yr = 4, od = 8;
class Aa {
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
    return (this.delInfo & od) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (nd | Yr)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (rd | Yr)) > 0;
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
    let n = 0, r = _a(e);
    if (!this.inverted)
      for (let o = 0; o < r; o++)
        n += this.ranges[o * 3 + 2] - this.ranges[o * 3 + 1];
    return this.ranges[r * 3] + n + ob(e);
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
    let o = 0, s = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2;
    for (let a = 0; a < this.ranges.length; a += 3) {
      let c = this.ranges[a] - (this.inverted ? o : 0);
      if (c > e)
        break;
      let d = this.ranges[a + s], u = this.ranges[a + i], p = c + d;
      if (e <= p) {
        let f = d ? e == c ? -1 : e == p ? 1 : n : n, h = c + o + (f < 0 ? 0 : u);
        if (r)
          return h;
        let m = e == (n < 0 ? c : p) ? null : rb(a / 3, e - c), g = e == c ? rd : e == p ? nd : Yr;
        return (n < 0 ? e != c : e != p) && (g |= od), new Aa(h, g, m);
      }
      o += u - d;
    }
    return r ? e + o : new Aa(e + o, 0, null);
  }
  /**
  @internal
  */
  touches(e, n) {
    let r = 0, o = _a(n), s = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2;
    for (let a = 0; a < this.ranges.length; a += 3) {
      let c = this.ranges[a] - (this.inverted ? r : 0);
      if (c > e)
        break;
      let d = this.ranges[a + s], u = c + d;
      if (e <= u && a == o * 3)
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
    for (let o = 0, s = 0; o < this.ranges.length; o += 3) {
      let i = this.ranges[o], a = i - (this.inverted ? s : 0), c = i + (this.inverted ? 0 : s), d = this.ranges[o + n], u = this.ranges[o + r];
      e(a, a + d, c, c + u), s += u - d;
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
  static fromReplace(e, n, r, o) {
    try {
      return Le.ok(e.replace(n, r, o));
    } catch (s) {
      if (s instanceof lo)
        return Le.fail(s.message);
      throw s;
    }
  }
}
function Si(t, e, n) {
  let r = [];
  for (let o = 0; o < t.childCount; o++) {
    let s = t.child(o);
    s.content.size && (s = s.copy(Si(s.content, e, s))), s.isInline && (s = e(s, n, o)), r.push(s);
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
    let n = e.slice(this.from, this.to), r = e.resolve(this.from), o = r.node(r.sharedDepth(this.to)), s = new X(Si(n.content, (i, a) => !i.isAtom || !a.type.allowsMarkType(this.mark.type) ? i : i.mark(this.mark.addToSet(i.marks)), o), n.openStart, n.openEnd);
    return Le.fromReplace(e, this.from, this.to, s);
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
    let n = e.slice(this.from, this.to), r = new X(Si(n.content, (o) => o.mark(this.mark.removeFromSet(o.marks)), e), n.openStart, n.openEnd);
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
        for (let o = 0; o < n.marks.length; o++)
          if (!n.marks[o].isInSet(r))
            return new tn(this.pos, n.marks[o]);
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
  constructor(e, n, r, o = !1) {
    super(), this.from = e, this.to = n, this.slice = r, this.structure = o;
  }
  apply(e) {
    return this.structure && Bs(e, this.from, this.to) ? Le.fail("Structure replace would overwrite content") : Le.fromReplace(e, this.from, this.to, this.slice);
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
  constructor(e, n, r, o, s, i, a = !1) {
    super(), this.from = e, this.to = n, this.gapFrom = r, this.gapTo = o, this.slice = s, this.insert = i, this.structure = a;
  }
  apply(e) {
    if (this.structure && (Bs(e, this.from, this.gapFrom) || Bs(e, this.gapTo, this.to)))
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
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), o = this.from == this.gapFrom ? n.pos : e.map(this.gapFrom, -1), s = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return n.deletedAcross && r.deletedAcross || o < n.pos || s > r.pos ? null : new et(n.pos, r.pos, o, s, this.slice, this.insert, this.structure);
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
function Bs(t, e, n) {
  let r = t.resolve(e), o = n - e, s = r.depth;
  for (; o > 0 && s > 0 && r.indexAfter(s) == r.node(s).childCount; )
    s--, o--;
  if (o > 0) {
    let i = r.node(s).maybeChild(r.indexAfter(s));
    for (; o > 0; ) {
      if (!i || i.isLeaf)
        return !0;
      i = i.firstChild, o--;
    }
  }
  return !1;
}
function sb(t, e, n) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
}
function Yn(t) {
  let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth, o = 0, s = 0; ; --r) {
    let i = t.$from.node(r), a = t.$from.index(r) + o, c = t.$to.indexAfter(r) - s;
    if (r < t.depth && i.canReplace(a, c, n))
      return r;
    if (r == 0 || i.type.spec.isolating || !sb(i, a, c))
      break;
    a && (o = 1), c < i.childCount && (s = 1);
  }
  return null;
}
function sd(t, e, n = null, r = t) {
  let o = ib(t, e), s = o && ab(r, e);
  return s ? o.map(Ta).concat({ type: e, attrs: n }).concat(s.map(Ta)) : null;
}
function Ta(t) {
  return { type: t, attrs: null };
}
function ib(t, e) {
  let { parent: n, startIndex: r, endIndex: o } = t, s = n.contentMatchAt(r).findWrapping(e);
  if (!s)
    return null;
  let i = s.length ? s[0] : e;
  return n.canReplaceWith(r, o, i) ? s : null;
}
function ab(t, e) {
  let { parent: n, startIndex: r, endIndex: o } = t, s = n.child(r), i = e.contentMatch.findWrapping(s.type);
  if (!i)
    return null;
  let c = (i.length ? i[i.length - 1] : e).contentMatch;
  for (let d = r; c && d < o; d++)
    c = c.matchType(n.child(d).type);
  return !c || !c.validEnd ? null : i;
}
function Dt(t, e, n = 1, r) {
  let o = t.resolve(e), s = o.depth - n, i = r && r[r.length - 1] || o.parent;
  if (s < 0 || o.parent.type.spec.isolating || !o.parent.canReplace(o.index(), o.parent.childCount) || !i.type.validContent(o.parent.content.cutByIndex(o.index(), o.parent.childCount)))
    return !1;
  for (let d = o.depth - 1, u = n - 2; d > s; d--, u--) {
    let p = o.node(d), f = o.index(d);
    if (p.type.spec.isolating)
      return !1;
    let h = p.content.cutByIndex(f, p.childCount), m = r && r[u + 1];
    m && (h = h.replaceChild(0, m.type.create(m.attrs)));
    let g = r && r[u] || p;
    if (!p.canReplace(f + 1, p.childCount) || !g.type.validContent(h))
      return !1;
  }
  let a = o.indexAfter(s), c = r && r[0];
  return o.node(s).canReplaceWith(a, a, c ? c.type : o.node(s + 1).type);
}
function En(t, e) {
  let n = t.resolve(e), r = n.index();
  return id(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function lb(t, e) {
  e.content.size || t.type.compatibleContent(e.type);
  let n = t.contentMatchAt(t.childCount), { linebreakReplacement: r } = t.type.schema;
  for (let o = 0; o < e.childCount; o++) {
    let s = e.child(o), i = s.type == r ? t.type.schema.nodes.text : s.type;
    if (n = n.matchType(i), !n || !t.type.allowsMarks(s.marks))
      return !1;
  }
  return n.validEnd;
}
function id(t, e) {
  return !!(t && e && !t.isLeaf && lb(t, e));
}
function Mo(t, e, n = -1) {
  let r = t.resolve(e);
  for (let o = r.depth; ; o--) {
    let s, i, a = r.index(o);
    if (o == r.depth ? (s = r.nodeBefore, i = r.nodeAfter) : n > 0 ? (s = r.node(o + 1), a++, i = r.node(o).maybeChild(a)) : (s = r.node(o).maybeChild(a - 1), i = r.node(o + 1)), s && !s.isTextblock && id(s, i) && r.node(o).canReplace(a, a + 1))
      return e;
    if (o == 0)
      break;
    e = n < 0 ? r.before(o) : r.after(o);
  }
}
function Ei(t, e, n = e, r = X.empty) {
  if (e == n && !r.size)
    return null;
  let o = t.resolve(e), s = t.resolve(n);
  return cb(o, s, r) ? new ot(e, n, r) : new db(o, s, r).fit();
}
function cb(t, e, n) {
  return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
}
class db {
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.unplaced = r, this.frontier = [], this.placed = H.empty;
    for (let o = 0; o <= e.depth; o++) {
      let s = e.node(o);
      this.frontier.push({
        type: s.type,
        match: s.contentMatchAt(e.indexAfter(o))
      });
    }
    for (let o = e.depth; o > 0; o--)
      this.placed = H.from(e.node(o).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let d = this.findFittable();
      d ? this.placeNodes(d) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), n = this.placed.size - this.depth - this.$from.depth, r = this.$from, o = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!o)
      return null;
    let s = this.placed, i = r.depth, a = o.depth;
    for (; i && a && s.childCount == 1; )
      s = s.firstChild.content, i--, a--;
    let c = new X(s, i, a);
    return e > -1 ? new et(r.pos, e, this.$to.pos, this.$to.end(), c, n) : c.size || r.pos != this.$to.pos ? new ot(r.pos, o.pos, c) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let n = this.unplaced.content, r = 0, o = this.unplaced.openEnd; r < e; r++) {
      let s = n.firstChild;
      if (n.childCount > 1 && (o = 0), s.type.spec.isolating && o <= r) {
        e = r;
        break;
      }
      n = s.content;
    }
    for (let n = 1; n <= 2; n++)
      for (let r = n == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let o, s = null;
        r ? (s = ss(this.unplaced.content, r - 1).firstChild, o = s.content) : o = this.unplaced.content;
        let i = o.firstChild;
        for (let a = this.depth; a >= 0; a--) {
          let { type: c, match: d } = this.frontier[a], u, p = null;
          if (n == 1 && (i ? d.matchType(i.type) || (p = d.fillBefore(H.from(i), !1)) : s && c.compatibleContent(s.type)))
            return { sliceDepth: r, frontierDepth: a, parent: s, inject: p };
          if (n == 2 && i && (u = d.findWrapping(i.type)))
            return { sliceDepth: r, frontierDepth: a, parent: s, wrap: u };
          if (s && d.matchType(s.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, o = ss(e, n);
    return !o.childCount || o.firstChild.isLeaf ? !1 : (this.unplaced = new X(e, n + 1, Math.max(r, o.size + n >= e.size - r ? n + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, o = ss(e, n);
    if (o.childCount <= 1 && n > 0) {
      let s = e.size - n <= n + o.size;
      this.unplaced = new X(rr(e, n - 1, 1), n - 1, s ? n - 1 : r);
    } else
      this.unplaced = new X(rr(e, n, 1), n, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: n, parent: r, inject: o, wrap: s }) {
    for (; this.depth > n; )
      this.closeFrontierNode();
    if (s)
      for (let g = 0; g < s.length; g++)
        this.openFrontierNode(s[g]);
    let i = this.unplaced, a = r ? r.content : i.content, c = i.openStart - e, d = 0, u = [], { match: p, type: f } = this.frontier[n];
    if (o) {
      for (let g = 0; g < o.childCount; g++)
        u.push(o.child(g));
      p = p.matchFragment(o);
    }
    let h = a.size + e - (i.content.size - i.openEnd);
    for (; d < a.childCount; ) {
      let g = a.child(d), y = p.matchType(g.type);
      if (!y)
        break;
      d++, (d > 1 || c == 0 || g.content.size) && (p = y, u.push(ad(g.mark(f.allowedMarks(g.marks)), d == 1 ? c : 0, d == a.childCount ? h : -1)));
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
    let { depth: r } = this.$to, o = this.$to.after(r);
    for (; r > 1 && o == this.$to.end(--r); )
      ++o;
    return o;
  }
  findCloseLevel(e) {
    e: for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
      let { match: r, type: o } = this.frontier[n], s = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)), i = is(e, n, o, r, s);
      if (i) {
        for (let a = n - 1; a >= 0; a--) {
          let { match: c, type: d } = this.frontier[a], u = is(e, a, d, c, !0);
          if (!u || u.childCount)
            continue e;
        }
        return { depth: n, fit: i, move: s ? e.doc.resolve(e.after(n + 1)) : e };
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
      let o = e.node(r), s = o.type.contentMatch.fillBefore(o.content, !0, e.index(r));
      this.openFrontierNode(o.type, o.attrs, s);
    }
    return e;
  }
  openFrontierNode(e, n = null, r) {
    let o = this.frontier[this.depth];
    o.match = o.match.matchType(e), this.placed = or(this.placed, this.depth, H.from(e.create(n, r))), this.frontier.push({ type: e, match: e.contentMatch });
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
function ad(t, e, n) {
  if (e <= 0)
    return t;
  let r = t.content;
  return e > 1 && (r = r.replaceChild(0, ad(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(H.empty, !0)))), t.copy(r);
}
function is(t, e, n, r, o) {
  let s = t.node(e), i = o ? t.indexAfter(e) : t.index(e);
  if (i == s.childCount && !n.compatibleContent(s.type))
    return null;
  let a = r.fillBefore(s.content, !0, i);
  return a && !ub(n, s.content, i) ? a : null;
}
function ub(t, e, n) {
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
    for (let s in n.attrs)
      r[s] = n.attrs[s];
    r[this.attr] = this.value;
    let o = n.type.create(r, null, n.marks);
    return Le.fromReplace(e, this.pos, this.pos + 1, new X(H.from(o), 0, n.isLeaf ? 0 : 1));
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
    for (let o in e.attrs)
      n[o] = e.attrs[o];
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
    this.$anchor = e, this.$head = n, this.ranges = r || [new pb(e.min(n), e.max(n))];
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
    let r = n.content.lastChild, o = null;
    for (let a = 0; a < n.openEnd; a++)
      o = r, r = r.lastChild;
    let s = e.steps.length, i = this.ranges;
    for (let a = 0; a < i.length; a++) {
      let { $from: c, $to: d } = i[a], u = e.mapping.slice(s);
      e.replaceRange(u.map(c.pos), u.map(d.pos), a ? X.empty : n), a == 0 && Ra(e, s, (r ? r.isInline : o && o.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, n) {
    let r = e.steps.length, o = this.ranges;
    for (let s = 0; s < o.length; s++) {
      let { $from: i, $to: a } = o[s], c = e.mapping.slice(r), d = c.map(i.pos), u = c.map(a.pos);
      s ? e.deleteRange(d, u) : (e.replaceRangeWith(d, u, n), Ra(e, r, n.isInline ? -1 : 1));
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
    let o = e.parent.inlineContent ? new ge(e) : Ln(e.node(0), e.parent, e.pos, e.index(), n, r);
    if (o)
      return o;
    for (let s = e.depth - 1; s >= 0; s--) {
      let i = n < 0 ? Ln(e.node(0), e.node(s), e.before(s + 1), e.index(s), n, r) : Ln(e.node(0), e.node(s), e.after(s + 1), e.index(s) + 1, n, r);
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
class pb {
  /**
  Create a range.
  */
  constructor(e, n) {
    this.$from = e, this.$to = n;
  }
}
let Ia = !1;
function Ba(t) {
  !Ia && !t.parent.inlineContent && (Ia = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
}
class ge extends ie {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, n = e) {
    Ba(e), Ba(n), super(e, n);
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
    let o = e.resolve(n.map(this.anchor));
    return new ge(o.parent.inlineContent ? o : r, r);
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
    return new Do(this.anchor, this.head);
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
    let o = e.resolve(n);
    return new this(o, r == n ? o : e.resolve(r));
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
    let o = e.pos - n.pos;
    if ((!r || o) && (r = o >= 0 ? 1 : -1), !n.parent.inlineContent) {
      let s = ie.findFrom(n, r, !0) || ie.findFrom(n, -r, !0);
      if (s)
        n = s.$head;
      else
        return ie.near(n, r);
    }
    return e.parent.inlineContent || (o == 0 ? e = n : (e = (ie.findFrom(e, -r, !0) || ie.findFrom(e, r, !0)).$anchor, e.pos < n.pos != o < 0 && (e = n))), new ge(e, n);
  }
}
ie.jsonID("text", ge);
class Do {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new Do(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return ge.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class ue extends ie {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let n = e.nodeAfter, r = e.node(0).resolve(e.pos + n.nodeSize);
    super(e, r), this.node = n;
  }
  map(e, n) {
    let { deleted: r, pos: o } = n.mapResult(this.anchor), s = e.resolve(o);
    return r ? ie.near(s) : new ue(s);
  }
  content() {
    return new X(H.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof ue && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new _i(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new ue(e.resolve(n.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, n) {
    return new ue(e.resolve(n));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
ue.prototype.visible = !1;
ie.jsonID("node", ue);
class _i {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: r } = e.mapResult(this.anchor);
    return n ? new Do(r, r) : new _i(r);
  }
  resolve(e) {
    let n = e.resolve(this.anchor), r = n.nodeAfter;
    return r && ue.isSelectable(r) ? new ue(n) : ie.near(n);
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
    return fb;
  }
}
ie.jsonID("all", ct);
const fb = {
  map() {
    return this;
  },
  resolve(t) {
    return new ct(t);
  }
};
function Ln(t, e, n, r, o, s = !1) {
  if (e.inlineContent)
    return ge.create(t, n);
  for (let i = r - (o > 0 ? 0 : 1); o > 0 ? i < e.childCount : i >= 0; i += o) {
    let a = e.child(i);
    if (a.isAtom) {
      if (!s && ue.isSelectable(a))
        return ue.create(t, n - (o < 0 ? a.nodeSize : 0));
    } else {
      let c = Ln(t, a, n + o, o < 0 ? a.childCount : 0, o, s);
      if (c)
        return c;
    }
    n += a.nodeSize * o;
  }
  return null;
}
function Ra(t, e, n) {
  let r = t.steps.length - 1;
  if (r < e)
    return;
  let o = t.steps[r];
  if (!(o instanceof ot || o instanceof et))
    return;
  let s = t.mapping.maps[r], i;
  s.forEach((a, c, d, u) => {
    i == null && (i = u);
  }), t.setSelection(ie.near(t.doc.resolve(i), n));
}
function La(t, e) {
  return !e || !t ? t : t.bind(e);
}
class Hr {
  constructor(e, n, r) {
    this.name = e, this.init = La(n.init, r), this.apply = La(n.apply, r);
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
function ld(t, e, n) {
  for (let r in t) {
    let o = t[r];
    o instanceof Function ? o = o.bind(e) : r == "handleDOMEvents" && (o = ld(o, e, {})), n[r] = o;
  }
  return n;
}
class _n {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && ld(e.props, this, this.props), this.key = e.key ? e.key.key : cd("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const ls = /* @__PURE__ */ Object.create(null);
function cd(t) {
  return t in ls ? t + "$" + ++ls[t] : (ls[t] = 0, t + "$");
}
class An {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = cd(e);
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
const Ai = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function dd(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n;
}
const ud = (t, e, n) => {
  let r = dd(t, n);
  if (!r)
    return !1;
  let o = Ti(r);
  if (!o) {
    let i = r.blockRange(), a = i && Yn(i);
    return a == null ? !1 : (e && e(t.tr.lift(i, a).scrollIntoView()), !0);
  }
  let s = o.nodeBefore;
  if (vd(t, o, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (Hn(s, "end") || ue.isSelectable(s)))
    for (let i = r.depth; ; i--) {
      let a = Ei(t.doc, r.before(i), r.after(i), X.empty);
      if (a && a.slice.size < a.to - a.from) {
        if (e) {
          let c = t.tr.step(a);
          c.setSelection(Hn(s, "end") ? ie.findFrom(c.doc.resolve(c.mapping.map(o.pos, -1)), -1) : ue.create(c.doc, o.pos - s.nodeSize)), e(c.scrollIntoView());
        }
        return !0;
      }
      if (i == 1 || r.node(i - 1).childCount > 1)
        break;
    }
  return s.isAtom && o.depth == r.depth - 1 ? (e && e(t.tr.delete(o.pos - s.nodeSize, o.pos).scrollIntoView()), !0) : !1;
}, hb = (t, e, n) => {
  let r = dd(t, n);
  if (!r)
    return !1;
  let o = Ti(r);
  return o ? pd(t, o, e) : !1;
}, mb = (t, e, n) => {
  let r = hd(t, n);
  if (!r)
    return !1;
  let o = Ii(r);
  return o ? pd(t, o, e) : !1;
};
function pd(t, e, n) {
  let r = e.nodeBefore, o = r, s = e.pos - 1;
  for (; !o.isTextblock; s--) {
    if (o.type.spec.isolating)
      return !1;
    let u = o.lastChild;
    if (!u)
      return !1;
    o = u;
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
  let d = Ei(t.doc, s, c, X.empty);
  if (!d || d.from != s || d instanceof ot && d.slice.size >= c - s)
    return !1;
  if (n) {
    let u = t.tr.step(d);
    u.setSelection(ge.create(u.doc, s)), n(u.scrollIntoView());
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
const fd = (t, e, n) => {
  let { $head: r, empty: o } = t.selection, s = r;
  if (!o)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
      return !1;
    s = Ti(r);
  }
  let i = s && s.nodeBefore;
  return !i || !ue.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(ue.create(t.doc, s.pos - i.nodeSize)).scrollIntoView()), !0);
};
function Ti(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      if (t.index(e) > 0)
        return t.doc.resolve(t.before(e + 1));
      if (t.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function hd(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n;
}
const md = (t, e, n) => {
  let r = hd(t, n);
  if (!r)
    return !1;
  let o = Ii(r);
  if (!o)
    return !1;
  let s = o.nodeAfter;
  if (vd(t, o, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (Hn(s, "start") || ue.isSelectable(s))) {
    let i = Ei(t.doc, r.before(), r.after(), X.empty);
    if (i && i.slice.size < i.to - i.from) {
      if (e) {
        let a = t.tr.step(i);
        a.setSelection(Hn(s, "start") ? ie.findFrom(a.doc.resolve(a.mapping.map(o.pos)), 1) : ue.create(a.doc, a.mapping.map(o.pos))), e(a.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && o.depth == r.depth - 1 ? (e && e(t.tr.delete(o.pos, o.pos + s.nodeSize).scrollIntoView()), !0) : !1;
}, gd = (t, e, n) => {
  let { $head: r, empty: o } = t.selection, s = r;
  if (!o)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size)
      return !1;
    s = Ii(r);
  }
  let i = s && s.nodeAfter;
  return !i || !ue.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(ue.create(t.doc, s.pos)).scrollIntoView()), !0);
};
function Ii(t) {
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
const gb = (t, e) => {
  let n = t.selection, r = n instanceof ue, o;
  if (r) {
    if (n.node.isTextblock || !En(t.doc, n.from))
      return !1;
    o = n.from;
  } else if (o = Mo(t.doc, n.from, -1), o == null)
    return !1;
  if (e) {
    let s = t.tr.join(o);
    r && s.setSelection(ue.create(s.doc, o - t.doc.resolve(o).nodeBefore.nodeSize)), e(s.scrollIntoView());
  }
  return !0;
}, bb = (t, e) => {
  let n = t.selection, r;
  if (n instanceof ue) {
    if (n.node.isTextblock || !En(t.doc, n.to))
      return !1;
    r = n.to;
  } else if (r = Mo(t.doc, n.to, 1), r == null)
    return !1;
  return e && e(t.tr.join(r).scrollIntoView()), !0;
}, yb = (t, e) => {
  let { $from: n, $to: r } = t.selection, o = n.blockRange(r), s = o && Yn(o);
  return s == null ? !1 : (e && e(t.tr.lift(o, s).scrollIntoView()), !0);
}, bd = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0);
};
function Bi(t) {
  for (let e = 0; e < t.edgeCount; e++) {
    let { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
const xb = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  if (!n.parent.type.spec.code || !n.sameParent(r))
    return !1;
  let o = n.node(-1), s = n.indexAfter(-1), i = Bi(o.contentMatchAt(s));
  if (!i || !o.canReplaceWith(s, s, i))
    return !1;
  if (e) {
    let a = n.after(), c = t.tr.replaceWith(a, a, i.createAndFill());
    c.setSelection(ie.near(c.doc.resolve(a), 1)), e(c.scrollIntoView());
  }
  return !0;
}, yd = (t, e) => {
  let n = t.selection, { $from: r, $to: o } = n;
  if (n instanceof ct || r.parent.inlineContent || o.parent.inlineContent)
    return !1;
  let s = Bi(o.parent.contentMatchAt(o.indexAfter()));
  if (!s || !s.isTextblock)
    return !1;
  if (e) {
    let i = (!r.parentOffset && o.index() < o.parent.childCount ? r : o).pos, a = t.tr.insert(i, s.createAndFill());
    a.setSelection(ge.create(a.doc, i + 1)), e(a.scrollIntoView());
  }
  return !0;
}, xd = (t, e) => {
  let { $cursor: n } = t.selection;
  if (!n || n.parent.content.size)
    return !1;
  if (n.depth > 1 && n.after() != n.end(-1)) {
    let s = n.before();
    if (Dt(t.doc, s))
      return e && e(t.tr.split(s).scrollIntoView()), !0;
  }
  let r = n.blockRange(), o = r && Yn(r);
  return o == null ? !1 : (e && e(t.tr.lift(r, o).scrollIntoView()), !0);
};
function vb(t) {
  return (e, n) => {
    let { $from: r, $to: o } = e.selection;
    if (e.selection instanceof ue && e.selection.node.isBlock)
      return !r.parentOffset || !Dt(e.doc, r.pos) ? !1 : (n && n(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let s = [], i, a, c = !1, d = !1;
    for (let h = r.depth; ; h--)
      if (r.node(h).isBlock) {
        c = r.end(h) == r.pos + (r.depth - h), d = r.start(h) == r.pos - (r.depth - h), a = Bi(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1))), s.unshift(c && a ? { type: a } : null), i = h;
        break;
      } else {
        if (h == 1)
          return !1;
        s.unshift(null);
      }
    let u = e.tr;
    (e.selection instanceof ge || e.selection instanceof ct) && u.deleteSelection();
    let p = u.mapping.map(r.pos), f = Dt(u.doc, p, s.length, s);
    if (f || (s[0] = a ? { type: a } : null, f = Dt(u.doc, p, s.length, s)), !f)
      return !1;
    if (u.split(p, s.length, s), !c && d && r.node(i).type != a) {
      let h = u.mapping.map(r.before(i)), m = u.doc.resolve(h);
      a && r.node(i - 1).canReplaceWith(m.index(), m.index() + 1, a) && u.setNodeMarkup(u.mapping.map(r.before(i)), a);
    }
    return n && n(u.scrollIntoView()), !0;
  };
}
const wb = vb(), kb = (t, e) => {
  let { $from: n, to: r } = t.selection, o, s = n.sharedDepth(r);
  return s == 0 ? !1 : (o = n.before(s), e && e(t.tr.setSelection(ue.create(t.doc, o))), !0);
};
function Cb(t, e, n) {
  let r = e.nodeBefore, o = e.nodeAfter, s = e.index();
  return !r || !o || !r.type.compatibleContent(o.type) ? !1 : !r.content.size && e.parent.canReplace(s - 1, s) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(s, s + 1) || !(o.isTextblock || En(t.doc, e.pos)) ? !1 : (n && n(t.tr.join(e.pos).scrollIntoView()), !0);
}
function vd(t, e, n, r) {
  let o = e.nodeBefore, s = e.nodeAfter, i, a, c = o.type.spec.isolating || s.type.spec.isolating;
  if (!c && Cb(t, e, n))
    return !0;
  let d = !c && e.parent.canReplace(e.index(), e.index() + 1);
  if (d && (i = (a = o.contentMatchAt(o.childCount)).findWrapping(s.type)) && a.matchType(i[0] || s.type).validEnd) {
    if (n) {
      let h = e.pos + s.nodeSize, m = H.empty;
      for (let x = i.length - 1; x >= 0; x--)
        m = H.from(i[x].create(null, m));
      m = H.from(o.copy(m));
      let g = t.tr.step(new et(e.pos - 1, h, e.pos, h, new X(m, 1, 0), i.length, !0)), y = g.doc.resolve(h + 2 * i.length);
      y.nodeAfter && y.nodeAfter.type == o.type && En(g.doc, y.pos) && g.join(y.pos), n(g.scrollIntoView());
    }
    return !0;
  }
  let u = s.type.spec.isolating || r > 0 && c ? null : ie.findFrom(e, 1), p = u && u.$from.blockRange(u.$to), f = p && Yn(p);
  if (f != null && f >= e.depth)
    return n && n(t.tr.lift(p, f).scrollIntoView()), !0;
  if (d && Hn(s, "start", !0) && Hn(o, "end")) {
    let h = o, m = [];
    for (; m.push(h), !h.isTextblock; )
      h = h.lastChild;
    let g = s, y = 1;
    for (; !g.isTextblock; g = g.firstChild)
      y++;
    if (h.canReplace(h.childCount, h.childCount, g.content)) {
      if (n) {
        let x = H.empty;
        for (let S = m.length - 1; S >= 0; S--)
          x = H.from(m[S].copy(x));
        let w = t.tr.step(new et(e.pos - m.length, e.pos + s.nodeSize, e.pos + y, e.pos + s.nodeSize - y, new X(x, m.length, 0), 0, !0));
        n(w.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function wd(t) {
  return function(e, n) {
    let r = e.selection, o = t < 0 ? r.$from : r.$to, s = o.depth;
    for (; o.node(s).isInline; ) {
      if (!s)
        return !1;
      s--;
    }
    return o.node(s).isTextblock ? (n && n(e.tr.setSelection(ge.create(e.doc, t < 0 ? o.start(s) : o.end(s)))), !0) : !1;
  };
}
const Nb = wd(-1), Sb = wd(1);
function Eb(t, e = null) {
  return function(n, r) {
    let { $from: o, $to: s } = n.selection, i = o.blockRange(s), a = i && sd(i, t, e);
    return a ? (r && r(n.tr.wrap(i, a).scrollIntoView()), !0) : !1;
  };
}
function Pa(t, e = null) {
  return function(n, r) {
    let o = !1;
    for (let s = 0; s < n.selection.ranges.length && !o; s++) {
      let { $from: { pos: i }, $to: { pos: a } } = n.selection.ranges[s];
      n.doc.nodesBetween(i, a, (c, d) => {
        if (o)
          return !1;
        if (!(!c.isTextblock || c.hasMarkup(t, e)))
          if (c.type == t)
            o = !0;
          else {
            let u = n.doc.resolve(d), p = u.index();
            o = u.parent.canReplaceWith(p, p + 1, t);
          }
      });
    }
    if (!o)
      return !1;
    if (r) {
      let s = n.tr;
      for (let i = 0; i < n.selection.ranges.length; i++) {
        let { $from: { pos: a }, $to: { pos: c } } = n.selection.ranges[i];
        s.setBlockType(a, c, t, e);
      }
      r(s.scrollIntoView());
    }
    return !0;
  };
}
function Ri(...t) {
  return function(e, n, r) {
    for (let o = 0; o < t.length; o++)
      if (t[o](e, n, r))
        return !0;
    return !1;
  };
}
Ri(Ai, ud, fd);
Ri(Ai, md, gd);
Ri(bd, yd, xd, wb);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function _b(t, e = null) {
  return function(n, r) {
    let { $from: o, $to: s } = n.selection, i = o.blockRange(s);
    if (!i)
      return !1;
    let a = r ? n.tr : null;
    return Ab(a, i, t, e) ? (r && r(a.scrollIntoView()), !0) : !1;
  };
}
function Ab(t, e, n, r = null) {
  let o = !1, s = e, i = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let c = i.resolve(e.start - 2);
    s = new uo(c, c, e.depth), e.endIndex < e.parent.childCount && (e = new uo(e.$from, i.resolve(e.$to.end(e.depth)), e.depth)), o = !0;
  }
  let a = sd(s, n, r, e);
  return a ? (t && Tb(t, e, a, o, n), !0) : !1;
}
function Tb(t, e, n, r, o) {
  let s = H.empty;
  for (let u = n.length - 1; u >= 0; u--)
    s = H.from(n[u].type.create(n[u].attrs, s));
  t.step(new et(e.start - (r ? 2 : 0), e.end, e.start, e.end, new X(s, 0, 0), n.length, !0));
  let i = 0;
  for (let u = 0; u < n.length; u++)
    n[u].type == o && (i = u + 1);
  let a = n.length - i, c = e.start + n.length - (r ? 2 : 0), d = e.parent;
  for (let u = e.startIndex, p = e.endIndex, f = !0; u < p; u++, f = !1)
    !f && Dt(t.doc, c, a) && (t.split(c, a), c += 2 * a), c += d.child(u).nodeSize;
  return t;
}
function Ib(t) {
  return function(e, n) {
    let { $from: r, $to: o } = e.selection, s = r.blockRange(o, (i) => i.childCount > 0 && i.firstChild.type == t);
    return s ? n ? r.node(s.depth - 1).type == t ? Bb(e, n, t, s) : Rb(e, n, s) : !0 : !1;
  };
}
function Bb(t, e, n, r) {
  let o = t.tr, s = r.end, i = r.$to.end(r.depth);
  s < i && (o.step(new et(s - 1, i, s, i, new X(H.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new uo(o.doc.resolve(r.$from.pos), o.doc.resolve(i), r.depth));
  const a = Yn(r);
  if (a == null)
    return !1;
  o.lift(r, a);
  let c = o.doc.resolve(o.mapping.map(s, -1) - 1);
  return En(o.doc, c.pos) && c.nodeBefore.type == c.nodeAfter.type && o.join(c.pos), e(o.scrollIntoView()), !0;
}
function Rb(t, e, n) {
  let r = t.tr, o = n.parent;
  for (let h = n.end, m = n.endIndex - 1, g = n.startIndex; m > g; m--)
    h -= o.child(m).nodeSize, r.delete(h - 1, h + 1);
  let s = r.doc.resolve(n.start), i = s.nodeAfter;
  if (r.mapping.map(n.end) != n.start + s.nodeAfter.nodeSize)
    return !1;
  let a = n.startIndex == 0, c = n.endIndex == o.childCount, d = s.node(-1), u = s.index(-1);
  if (!d.canReplace(u + (a ? 0 : 1), u + 1, i.content.append(c ? H.empty : H.from(o))))
    return !1;
  let p = s.pos, f = p + i.nodeSize;
  return r.step(new et(p - (a ? 1 : 0), f + (c ? 1 : 0), p + 1, f - 1, new X((a ? H.empty : H.from(o.copy(H.empty))).append(c ? H.empty : H.from(o.copy(H.empty))), a ? 0 : 1, c ? 0 : 1), a ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function Lb(t) {
  return function(e, n) {
    let { $from: r, $to: o } = e.selection, s = r.blockRange(o, (d) => d.childCount > 0 && d.firstChild.type == t);
    if (!s)
      return !1;
    let i = s.startIndex;
    if (i == 0)
      return !1;
    let a = s.parent, c = a.child(i - 1);
    if (c.type != t)
      return !1;
    if (n) {
      let d = c.lastChild && c.lastChild.type == a.type, u = H.from(d ? t.create() : null), p = new X(H.from(t.create(null, H.from(a.type.create(null, u)))), d ? 3 : 1, 0), f = s.start, h = s.end;
      n(e.tr.step(new et(f - (d ? 3 : 1), h, f, h, p, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function kd(t) {
  const { state: e, transaction: n } = t;
  let { selection: r } = n, { doc: o } = n, { storedMarks: s } = n;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return s;
    },
    get selection() {
      return r;
    },
    get doc() {
      return o;
    },
    get tr() {
      return r = n.selection, o = n.doc, s = n.storedMarks, n;
    }
  };
}
class Pb {
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
    const { rawCommands: e, editor: n, state: r } = this, { view: o } = n, { tr: s } = r, i = this.buildProps(s);
    return Object.fromEntries(Object.entries(e).map(([a, c]) => [a, (...u) => {
      const p = c(...u)(i);
      return !s.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(s), p;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, n = !0) {
    const { rawCommands: r, editor: o, state: s } = this, { view: i } = o, a = [], c = !!e, d = e || s.tr, u = () => (!c && n && !d.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(d), a.every((f) => f === !0)), p = {
      ...Object.fromEntries(Object.entries(r).map(([f, h]) => [f, (...g) => {
        const y = this.buildProps(d, n), x = h(...g)(y);
        return a.push(x), p;
      }])),
      run: u
    };
    return p;
  }
  createCan(e) {
    const { rawCommands: n, state: r } = this, o = !1, s = e || r.tr, i = this.buildProps(s, o);
    return {
      ...Object.fromEntries(Object.entries(n).map(([c, d]) => [c, (...u) => d(...u)({ ...i, dispatch: void 0 })])),
      chain: () => this.createChain(s, o)
    };
  }
  buildProps(e, n = !0) {
    const { rawCommands: r, editor: o, state: s } = this, { view: i } = o, a = {
      tr: e,
      editor: o,
      view: i,
      state: kd({
        state: s,
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
function Ob(t) {
  const e = t.filter((o) => o.type === "extension"), n = t.filter((o) => o.type === "node"), r = t.filter((o) => o.type === "mark");
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
function Mb(t) {
  return typeof t == "function";
}
function sr(t, e = void 0, ...n) {
  return Mb(t) ? e ? t.bind(e)(...n) : t(...n) : t;
}
function Db(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
function $b(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function Vr(t) {
  return $b(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function Cd(t, e) {
  const n = { ...t };
  return Vr(t) && Vr(e) && Object.keys(e).forEach((r) => {
    Vr(e[r]) && Vr(t[r]) ? n[r] = Cd(t[r], e[r]) : n[r] = e[r];
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
      addOptions: () => Cd(this.options, e)
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
function Fb(t, e, n) {
  const { from: r, to: o } = e, { blockSeparator: s = `

`, textSerializers: i = {} } = n || {};
  let a = "";
  return t.nodesBetween(r, o, (c, d, u, p) => {
    var f;
    c.isBlock && d > r && (a += s);
    const h = i == null ? void 0 : i[c.type.name];
    if (h)
      return u && (a += h({
        node: c,
        pos: d,
        parent: u,
        index: p,
        range: e
      })), !1;
    c.isText && (a += (f = c == null ? void 0 : c.text) === null || f === void 0 ? void 0 : f.slice(Math.max(r, d) - d, o - d));
  }), a;
}
function zb(t) {
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
            const { editor: t } = this, { state: e, schema: n } = t, { doc: r, selection: o } = e, { ranges: s } = o, i = Math.min(...s.map((u) => u.$from.pos)), a = Math.max(...s.map((u) => u.$to.pos)), c = zb(n);
            return Fb(r, { from: i, to: a }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: c
            });
          }
        }
      })
    ];
  }
});
const Hb = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  var n;
  t.isDestroyed || (e.dom.blur(), (n = window == null ? void 0 : window.getSelection()) === null || n === void 0 || n.removeAllRanges());
}), !0), Vb = (t = !1) => ({ commands: e }) => e.setContent("", t), jb = () => ({ state: t, tr: e, dispatch: n }) => {
  const { selection: r } = e, { ranges: o } = r;
  return n && o.forEach(({ $from: s, $to: i }) => {
    t.doc.nodesBetween(s.pos, i.pos, (a, c) => {
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
}, Wb = (t) => (e) => t(e), Gb = () => ({ state: t, dispatch: e }) => yd(t, e), Ub = (t, e) => ({ editor: n, tr: r }) => {
  const { state: o } = n, s = o.doc.slice(t.from, t.to);
  r.deleteRange(t.from, t.to);
  const i = r.mapping.map(e);
  return r.insert(i, s.content), r.setSelection(new ge(r.doc.resolve(Math.max(i - 1, 0)))), !0;
}, Kb = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, r = n.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const o = t.selection.$anchor;
  for (let s = o.depth; s > 0; s -= 1)
    if (o.node(s).type === r.type) {
      if (e) {
        const a = o.before(s), c = o.after(s);
        t.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Jb = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const o = Ve(t, n.schema), s = e.selection.$anchor;
  for (let i = s.depth; i > 0; i -= 1)
    if (s.node(i).type === o) {
      if (r) {
        const c = s.before(i), d = s.after(i);
        e.delete(c, d).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Yb = (t) => ({ tr: e, dispatch: n }) => {
  const { from: r, to: o } = t;
  return n && e.delete(r, o), !0;
}, Xb = () => ({ state: t, dispatch: e }) => Ai(t, e), qb = () => ({ commands: t }) => t.keyboardShortcut("Enter"), Zb = () => ({ state: t, dispatch: e }) => xb(t, e);
function mo(t, e, n = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((o) => n.strict ? e[o] === t[o] : Db(e[o]) ? e[o].test(t[o]) : e[o] === t[o]) : !0;
}
function Nd(t, e, n = {}) {
  return t.find((r) => r.type === e && mo(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(n).map((o) => [o, r.attrs[o]])),
    n
  ));
}
function Oa(t, e, n = {}) {
  return !!Nd(t, e, n);
}
function Sd(t, e, n) {
  var r;
  if (!t || !e)
    return;
  let o = t.parent.childAfter(t.parentOffset);
  if ((!o.node || !o.node.marks.some((u) => u.type === e)) && (o = t.parent.childBefore(t.parentOffset)), !o.node || !o.node.marks.some((u) => u.type === e) || (n = n || ((r = o.node.marks[0]) === null || r === void 0 ? void 0 : r.attrs), !Nd([...o.node.marks], e, n)))
    return;
  let i = o.index, a = t.start() + o.offset, c = i + 1, d = a + o.node.nodeSize;
  for (; i > 0 && Oa([...t.parent.child(i - 1).marks], e, n); )
    i -= 1, a -= t.parent.child(i).nodeSize;
  for (; c < t.parent.childCount && Oa([...t.parent.child(c).marks], e, n); )
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
const Qb = (t, e = {}) => ({ tr: n, state: r, dispatch: o }) => {
  const s = Jt(t, r.schema), { doc: i, selection: a } = n, { $from: c, from: d, to: u } = a;
  if (o) {
    const p = Sd(c, s, e);
    if (p && p.from <= d && p.to >= u) {
      const f = ge.create(i, p.from, p.to);
      n.setSelection(f);
    }
  }
  return !0;
}, ey = (t) => (e) => {
  const n = typeof t == "function" ? t(e) : t;
  for (let r = 0; r < n.length; r += 1)
    if (n[r](e))
      return !0;
  return !1;
};
function Ed(t) {
  return t instanceof ge;
}
function rn(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function ty(t, e = null) {
  if (!e)
    return null;
  const n = ie.atStart(t), r = ie.atEnd(t);
  if (e === "start" || e === !0)
    return n;
  if (e === "end")
    return r;
  const o = n.from, s = r.to;
  return e === "all" ? ge.create(t, rn(0, o, s), rn(t.content.size, o, s)) : ge.create(t, rn(e, o, s), rn(e, o, s));
}
function ny() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function Li() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const ry = (t = null, e = {}) => ({ editor: n, view: r, tr: o, dispatch: s }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const i = () => {
    (Li() || ny()) && r.dom.focus(), requestAnimationFrame(() => {
      n.isDestroyed || (r.focus(), e != null && e.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && t === null || t === !1)
    return !0;
  if (s && t === null && !Ed(n.state.selection))
    return i(), !0;
  const a = ty(o.doc, t) || n.state.selection, c = n.state.selection.eq(a);
  return s && (c || o.setSelection(a), c && o.storedMarks && o.setStoredMarks(o.storedMarks), i()), !0;
}, oy = (t, e) => (n) => t.every((r, o) => e(r, { ...n, index: o })), sy = (t, e) => ({ tr: n, commands: r }) => r.insertContentAt({ from: n.selection.from, to: n.selection.to }, t, e), _d = (t) => {
  const e = t.childNodes;
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const r = e[n];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? t.removeChild(r) : r.nodeType === 1 && _d(r);
  }
  return t;
};
function jr(t) {
  const e = `<body>${t}</body>`, n = new window.DOMParser().parseFromString(e, "text/html").body;
  return _d(n);
}
function xr(t, e, n) {
  if (t instanceof cn || t instanceof H)
    return t;
  n = {
    slice: !0,
    parseOptions: {},
    ...n
  };
  const r = typeof t == "object" && t !== null, o = typeof t == "string";
  if (r)
    try {
      if (Array.isArray(t) && t.length > 0)
        return H.fromArray(t.map((a) => e.nodeFromJSON(a)));
      const i = e.nodeFromJSON(t);
      return n.errorOnInvalidContent && i.check(), i;
    } catch (s) {
      if (n.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: s });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", s), xr("", e, n);
    }
  if (o) {
    if (n.errorOnInvalidContent) {
      let i = !1, a = "";
      const c = new qg({
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
    const s = On.fromSchema(e);
    return n.slice ? s.parseSlice(jr(t), n.parseOptions).content : s.parse(jr(t), n.parseOptions);
  }
  return xr("", e, n);
}
function iy(t, e, n) {
  const r = t.steps.length - 1;
  if (r < e)
    return;
  const o = t.steps[r];
  if (!(o instanceof ot || o instanceof et))
    return;
  const s = t.mapping.maps[r];
  let i = 0;
  s.forEach((a, c, d, u) => {
    i === 0 && (i = u);
  }), t.setSelection(ie.near(t.doc.resolve(i), n));
}
const ay = (t) => !("type" in t), ly = (t, e, n) => ({ tr: r, dispatch: o, editor: s }) => {
  var i;
  if (o) {
    n = {
      parseOptions: s.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...n
    };
    let a;
    const c = (y) => {
      s.emit("contentError", {
        editor: s,
        error: y,
        disableCollaboration: () => {
          s.storage.collaboration && (s.storage.collaboration.isDisabled = !0);
        }
      });
    }, d = {
      preserveWhitespace: "full",
      ...n.parseOptions
    };
    if (!n.errorOnInvalidContent && !s.options.enableContentCheck && s.options.emitContentError)
      try {
        xr(e, s.schema, {
          parseOptions: d,
          errorOnInvalidContent: !0
        });
      } catch (y) {
        c(y);
      }
    try {
      a = xr(e, s.schema, {
        parseOptions: d,
        errorOnInvalidContent: (i = n.errorOnInvalidContent) !== null && i !== void 0 ? i : s.options.enableContentCheck
      });
    } catch (y) {
      return c(y), !1;
    }
    let { from: u, to: p } = typeof t == "number" ? { from: t, to: t } : { from: t.from, to: t.to }, f = !0, h = !0;
    if ((ay(a) ? a : [a]).forEach((y) => {
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
    n.updateSelection && iy(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", { from: u, text: g }), n.applyPasteRules && r.setMeta("applyPasteRules", { from: u, text: g });
  }
  return !0;
}, cy = () => ({ state: t, dispatch: e }) => gb(t, e), dy = () => ({ state: t, dispatch: e }) => bb(t, e), uy = () => ({ state: t, dispatch: e }) => ud(t, e), py = () => ({ state: t, dispatch: e }) => md(t, e), fy = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Mo(t.doc, t.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, hy = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Mo(t.doc, t.selection.$from.pos, 1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, my = () => ({ state: t, dispatch: e }) => hb(t, e), gy = () => ({ state: t, dispatch: e }) => mb(t, e);
function Ad() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function by(t) {
  const e = t.split(/-(?!$)/);
  let n = e[e.length - 1];
  n === "Space" && (n = " ");
  let r, o, s, i;
  for (let a = 0; a < e.length - 1; a += 1) {
    const c = e[a];
    if (/^(cmd|meta|m)$/i.test(c))
      i = !0;
    else if (/^a(lt)?$/i.test(c))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(c))
      o = !0;
    else if (/^s(hift)?$/i.test(c))
      s = !0;
    else if (/^mod$/i.test(c))
      Li() || Ad() ? i = !0 : o = !0;
    else
      throw new Error(`Unrecognized modifier name: ${c}`);
  }
  return r && (n = `Alt-${n}`), o && (n = `Ctrl-${n}`), i && (n = `Meta-${n}`), s && (n = `Shift-${n}`), n;
}
const yy = (t) => ({ editor: e, view: n, tr: r, dispatch: o }) => {
  const s = by(t).split(/-(?!$)/), i = s.find((d) => !["Alt", "Ctrl", "Meta", "Shift"].includes(d)), a = new KeyboardEvent("keydown", {
    key: i === "Space" ? " " : i,
    altKey: s.includes("Alt"),
    ctrlKey: s.includes("Ctrl"),
    metaKey: s.includes("Meta"),
    shiftKey: s.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), c = e.captureTransaction(() => {
    n.someProp("handleKeyDown", (d) => d(n, a));
  });
  return c == null || c.steps.forEach((d) => {
    const u = d.map(r.mapping);
    u && o && r.maybeStep(u);
  }), !0;
};
function Pi(t, e, n = {}) {
  const { from: r, to: o, empty: s } = t.selection, i = e ? Ve(e, t.schema) : null, a = [];
  t.doc.nodesBetween(r, o, (p, f) => {
    if (p.isText)
      return;
    const h = Math.max(r, f), m = Math.min(o, f + p.nodeSize);
    a.push({
      node: p,
      from: h,
      to: m
    });
  });
  const c = o - r, d = a.filter((p) => i ? i.name === p.node.type.name : !0).filter((p) => mo(p.node.attrs, n, { strict: !1 }));
  return s ? !!d.length : d.reduce((p, f) => p + f.to - f.from, 0) >= c;
}
const xy = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const o = Ve(t, n.schema);
  return Pi(n, o, e) ? yb(n, r) : !1;
}, vy = () => ({ state: t, dispatch: e }) => xd(t, e), wy = (t) => ({ state: e, dispatch: n }) => {
  const r = Ve(t, e.schema);
  return Ib(r)(e, n);
}, ky = () => ({ state: t, dispatch: e }) => bd(t, e);
function Td(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function Ma(t, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((r, o) => (n.includes(o) || (r[o] = t[o]), r), {});
}
const Cy = (t, e) => ({ tr: n, state: r, dispatch: o }) => {
  let s = null, i = null;
  const a = Td(typeof t == "string" ? t : t.name, r.schema);
  return a ? (a === "node" && (s = Ve(t, r.schema)), a === "mark" && (i = Jt(t, r.schema)), o && n.selection.ranges.forEach((c) => {
    r.doc.nodesBetween(c.$from.pos, c.$to.pos, (d, u) => {
      s && s === d.type && n.setNodeMarkup(u, void 0, Ma(d.attrs, e)), i && d.marks.length && d.marks.forEach((p) => {
        i === p.type && n.addMark(u, u + d.nodeSize, i.create(Ma(p.attrs, e)));
      });
    });
  }), !0) : !1;
}, Ny = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), Sy = () => ({ tr: t, dispatch: e }) => {
  if (e) {
    const n = new ct(t.doc);
    t.setSelection(n);
  }
  return !0;
}, Ey = () => ({ state: t, dispatch: e }) => fd(t, e), _y = () => ({ state: t, dispatch: e }) => gd(t, e), Ay = () => ({ state: t, dispatch: e }) => kb(t, e), Ty = () => ({ state: t, dispatch: e }) => Sb(t, e), Iy = () => ({ state: t, dispatch: e }) => Nb(t, e);
function By(t, e, n = {}, r = {}) {
  return xr(t, e, {
    slice: !1,
    parseOptions: n,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
const Ry = (t, e = !1, n = {}, r = {}) => ({ editor: o, tr: s, dispatch: i, commands: a }) => {
  var c, d;
  const { doc: u } = s;
  if (n.preserveWhitespace !== "full") {
    const p = By(t, o.schema, n, {
      errorOnInvalidContent: (c = r.errorOnInvalidContent) !== null && c !== void 0 ? c : o.options.enableContentCheck
    });
    return i && s.replaceWith(0, u.content.size, p).setMeta("preventUpdate", !e), !0;
  }
  return i && s.setMeta("preventUpdate", !e), a.insertContentAt({ from: 0, to: u.content.size }, t, {
    parseOptions: n,
    errorOnInvalidContent: (d = r.errorOnInvalidContent) !== null && d !== void 0 ? d : o.options.enableContentCheck
  });
};
function Ly(t, e) {
  const n = Jt(e, t.schema), { from: r, to: o, empty: s } = t.selection, i = [];
  s ? (t.storedMarks && i.push(...t.storedMarks), i.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, o, (c) => {
    i.push(...c.marks);
  });
  const a = i.find((c) => c.type.name === n.name);
  return a ? { ...a.attrs } : {};
}
function Py(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
function Oy(t, e) {
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
function Oi(t) {
  return (e) => Oy(e.$from, t);
}
function Xr(t, e, n) {
  return Object.fromEntries(Object.entries(n).filter(([r]) => {
    const o = t.find((s) => s.type === e && s.name === r);
    return o ? o.attribute.keepOnSplit : !1;
  }));
}
function My(t, e, n = {}) {
  const { empty: r, ranges: o } = t.selection, s = e ? Jt(e, t.schema) : null;
  if (r)
    return !!(t.storedMarks || t.selection.$from.marks()).filter((p) => s ? s.name === p.type.name : !0).find((p) => mo(p.attrs, n, { strict: !1 }));
  let i = 0;
  const a = [];
  if (o.forEach(({ $from: p, $to: f }) => {
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
  const c = a.filter((p) => s ? s.name === p.mark.type.name : !0).filter((p) => mo(p.mark.attrs, n, { strict: !1 })).reduce((p, f) => p + f.to - f.from, 0), d = a.filter((p) => s ? p.mark.type !== s && p.mark.type.excludes(s) : !0).reduce((p, f) => p + f.to - f.from, 0);
  return (c > 0 ? c + d : c) >= i;
}
function Da(t, e) {
  const { nodeExtensions: n } = Ob(e), r = n.find((i) => i.name === t);
  if (!r)
    return !1;
  const o = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, s = sr(nn(r, "group", o));
  return typeof s != "string" ? !1 : s.split(" ").includes("list");
}
function Id(t, { checkChildren: e = !0, ignoreWhitespace: n = !1 } = {}) {
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
    let o = !0;
    return t.content.forEach((s) => {
      o !== !1 && (Id(s, { ignoreWhitespace: n, checkChildren: e }) || (o = !1));
    }), o;
  }
  return !1;
}
function Dy(t, e, n) {
  var r;
  const { selection: o } = e;
  let s = null;
  if (Ed(o) && (s = o.$cursor), s) {
    const a = (r = t.storedMarks) !== null && r !== void 0 ? r : s.marks();
    return !!n.isInSet(a) || !a.some((c) => c.type.excludes(n));
  }
  const { ranges: i } = o;
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
const $y = (t, e = {}) => ({ tr: n, state: r, dispatch: o }) => {
  const { selection: s } = n, { empty: i, ranges: a } = s, c = Jt(t, r.schema);
  if (o)
    if (i) {
      const d = Ly(r, c);
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
  return Dy(r, n, c);
}, Fy = (t, e) => ({ tr: n }) => (n.setMeta(t, e), !0), zy = (t, e = {}) => ({ state: n, dispatch: r, chain: o }) => {
  const s = Ve(t, n.schema);
  let i;
  return n.selection.$anchor.sameParent(n.selection.$head) && (i = n.selection.$anchor.parent.attrs), s.isTextblock ? o().command(({ commands: a }) => Pa(s, { ...i, ...e })(n) ? !0 : a.clearNodes()).command(({ state: a }) => Pa(s, { ...i, ...e })(a, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, Hy = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, o = rn(t, 0, r.content.size), s = ue.create(r, o);
    e.setSelection(s);
  }
  return !0;
}, Vy = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, { from: o, to: s } = typeof t == "number" ? { from: t, to: t } : t, i = ge.atStart(r).from, a = ge.atEnd(r).to, c = rn(o, i, a), d = rn(s, i, a), u = ge.create(r, c, d);
    e.setSelection(u);
  }
  return !0;
}, jy = (t) => ({ state: e, dispatch: n }) => {
  const r = Ve(t, e.schema);
  return Lb(r)(e, n);
};
function $a(t, e) {
  const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (n) {
    const r = n.filter((o) => e == null ? void 0 : e.includes(o.type.name));
    t.tr.ensureMarks(r);
  }
}
const Wy = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: n, dispatch: r, editor: o }) => {
  const { selection: s, doc: i } = e, { $from: a, $to: c } = s, d = o.extensionManager.attributes, u = Xr(d, a.node().type.name, a.node().attrs);
  if (s instanceof ue && s.node.isBlock)
    return !a.parentOffset || !Dt(i, a.pos) ? !1 : (r && (t && $a(n, o.extensionManager.splittableMarks), e.split(a.pos).scrollIntoView()), !0);
  if (!a.parent.isBlock)
    return !1;
  const p = c.parentOffset === c.parent.content.size, f = a.depth === 0 ? void 0 : Py(a.node(-1).contentMatchAt(a.indexAfter(-1)));
  let h = p && f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0, m = Dt(e.doc, e.mapping.map(a.pos), 1, h);
  if (!h && !m && Dt(e.doc, e.mapping.map(a.pos), 1, f ? [{ type: f }] : void 0) && (m = !0, h = f ? [
    {
      type: f,
      attrs: u
    }
  ] : void 0), r) {
    if (m && (s instanceof ge && e.deleteSelection(), e.split(e.mapping.map(a.pos), 1, h), f && !p && !a.parentOffset && a.parent.type !== f)) {
      const g = e.mapping.map(a.before()), y = e.doc.resolve(g);
      a.node(-1).canReplaceWith(y.index(), y.index() + 1, f) && e.setNodeMarkup(e.mapping.map(a.before()), f);
    }
    t && $a(n, o.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return m;
}, Gy = (t, e = {}) => ({ tr: n, state: r, dispatch: o, editor: s }) => {
  var i;
  const a = Ve(t, r.schema), { $from: c, $to: d } = r.selection, u = r.selection.node;
  if (u && u.isBlock || c.depth < 2 || !c.sameParent(d))
    return !1;
  const p = c.node(-1);
  if (p.type !== a)
    return !1;
  const f = s.extensionManager.attributes;
  if (c.parent.content.size === 0 && c.node(-1).childCount === c.indexAfter(-1)) {
    if (c.depth === 2 || c.node(-3).type !== a || c.index(-2) !== c.node(-2).childCount - 1)
      return !1;
    if (o) {
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
  if (!Dt(n.doc, c.pos, 2))
    return !1;
  if (o) {
    const { selection: x, storedMarks: w } = r, { splittableMarks: S } = s.extensionManager, v = w || x.$to.parentOffset && x.$from.marks();
    if (n.split(c.pos, 2, y).scrollIntoView(), !v || !o)
      return !0;
    const k = v.filter((T) => S.includes(T.type.name));
    n.ensureMarks(k);
  }
  return !0;
}, cs = (t, e) => {
  const n = Oi((i) => i.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (r === void 0)
    return !0;
  const o = t.doc.nodeAt(r);
  return n.node.type === (o == null ? void 0 : o.type) && En(t.doc, n.pos) && t.join(n.pos), !0;
}, ds = (t, e) => {
  const n = Oi((i) => i.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(n.start).after(n.depth);
  if (r === void 0)
    return !0;
  const o = t.doc.nodeAt(r);
  return n.node.type === (o == null ? void 0 : o.type) && En(t.doc, r) && t.join(r), !0;
}, Uy = (t, e, n, r = {}) => ({ editor: o, tr: s, state: i, dispatch: a, chain: c, commands: d, can: u }) => {
  const { extensions: p, splittableMarks: f } = o.extensionManager, h = Ve(t, i.schema), m = Ve(e, i.schema), { selection: g, storedMarks: y } = i, { $from: x, $to: w } = g, S = x.blockRange(w), v = y || g.$to.parentOffset && g.$from.marks();
  if (!S)
    return !1;
  const k = Oi((T) => Da(T.type.name, p))(g);
  if (S.depth >= 1 && k && S.depth - k.depth <= 1) {
    if (k.node.type === h)
      return d.liftListItem(m);
    if (Da(k.node.type.name, p) && h.validContent(k.node.content) && a)
      return c().command(() => (s.setNodeMarkup(k.pos, h), !0)).command(() => cs(s, h)).command(() => ds(s, h)).run();
  }
  return !n || !v || !a ? c().command(() => u().wrapInList(h, r) ? !0 : d.clearNodes()).wrapInList(h, r).command(() => cs(s, h)).command(() => ds(s, h)).run() : c().command(() => {
    const T = u().wrapInList(h, r), C = v.filter((N) => f.includes(N.type.name));
    return s.ensureMarks(C), T ? !0 : d.clearNodes();
  }).wrapInList(h, r).command(() => cs(s, h)).command(() => ds(s, h)).run();
}, Ky = (t, e = {}, n = {}) => ({ state: r, commands: o }) => {
  const { extendEmptyMarkRange: s = !1 } = n, i = Jt(t, r.schema);
  return My(r, i, e) ? o.unsetMark(i, { extendEmptyMarkRange: s }) : o.setMark(i, e);
}, Jy = (t, e, n = {}) => ({ state: r, commands: o }) => {
  const s = Ve(t, r.schema), i = Ve(e, r.schema), a = Pi(r, s, n);
  let c;
  return r.selection.$anchor.sameParent(r.selection.$head) && (c = r.selection.$anchor.parent.attrs), a ? o.setNode(i, c) : o.setNode(s, { ...c, ...n });
}, Yy = (t, e = {}) => ({ state: n, commands: r }) => {
  const o = Ve(t, n.schema);
  return Pi(n, o, e) ? r.lift(o) : r.wrapIn(o, e);
}, Xy = () => ({ state: t, dispatch: e }) => {
  const n = t.plugins;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    let s;
    if (o.spec.isInputRules && (s = o.getState(t))) {
      if (e) {
        const i = t.tr, a = s.transform;
        for (let c = a.steps.length - 1; c >= 0; c -= 1)
          i.step(a.steps[c].invert(a.docs[c]));
        if (s.text) {
          const c = i.doc.resolve(s.from).marks();
          i.replaceWith(s.from, s.to, t.schema.text(s.text, c));
        } else
          i.delete(s.from, s.to);
      }
      return !0;
    }
  }
  return !1;
}, qy = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, { empty: r, ranges: o } = n;
  return r || e && o.forEach((s) => {
    t.removeMark(s.$from.pos, s.$to.pos);
  }), !0;
}, Zy = (t, e = {}) => ({ tr: n, state: r, dispatch: o }) => {
  var s;
  const { extendEmptyMarkRange: i = !1 } = e, { selection: a } = n, c = Jt(t, r.schema), { $from: d, empty: u, ranges: p } = a;
  if (!o)
    return !0;
  if (u && i) {
    let { from: f, to: h } = a;
    const m = (s = d.marks().find((y) => y.type === c)) === null || s === void 0 ? void 0 : s.attrs, g = Sd(d, c, m);
    g && (f = g.from, h = g.to), n.removeMark(f, h, c);
  } else
    p.forEach((f) => {
      n.removeMark(f.$from.pos, f.$to.pos, c);
    });
  return n.removeStoredMark(c), !0;
}, Qy = (t, e = {}) => ({ tr: n, state: r, dispatch: o }) => {
  let s = null, i = null;
  const a = Td(typeof t == "string" ? t : t.name, r.schema);
  return a ? (a === "node" && (s = Ve(t, r.schema)), a === "mark" && (i = Jt(t, r.schema)), o && n.selection.ranges.forEach((c) => {
    const d = c.$from.pos, u = c.$to.pos;
    let p, f, h, m;
    n.selection.empty ? r.doc.nodesBetween(d, u, (g, y) => {
      s && s === g.type && (h = Math.max(y, d), m = Math.min(y + g.nodeSize, u), p = y, f = g);
    }) : r.doc.nodesBetween(d, u, (g, y) => {
      y < d && s && s === g.type && (h = Math.max(y, d), m = Math.min(y + g.nodeSize, u), p = y, f = g), y >= d && y <= u && (s && s === g.type && n.setNodeMarkup(y, void 0, {
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
}, ex = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const o = Ve(t, n.schema);
  return Eb(o, e)(n, r);
}, tx = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const o = Ve(t, n.schema);
  return _b(o, e)(n, r);
};
var nx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: Hb,
  clearContent: Vb,
  clearNodes: jb,
  command: Wb,
  createParagraphNear: Gb,
  cut: Ub,
  deleteCurrentNode: Kb,
  deleteNode: Jb,
  deleteRange: Yb,
  deleteSelection: Xb,
  enter: qb,
  exitCode: Zb,
  extendMarkRange: Qb,
  first: ey,
  focus: ry,
  forEach: oy,
  insertContent: sy,
  insertContentAt: ly,
  joinBackward: uy,
  joinDown: dy,
  joinForward: py,
  joinItemBackward: fy,
  joinItemForward: hy,
  joinTextblockBackward: my,
  joinTextblockForward: gy,
  joinUp: cy,
  keyboardShortcut: yy,
  lift: xy,
  liftEmptyBlock: vy,
  liftListItem: wy,
  newlineInCode: ky,
  resetAttributes: Cy,
  scrollIntoView: Ny,
  selectAll: Sy,
  selectNodeBackward: Ey,
  selectNodeForward: _y,
  selectParentNode: Ay,
  selectTextblockEnd: Ty,
  selectTextblockStart: Iy,
  setContent: Ry,
  setMark: $y,
  setMeta: Fy,
  setNode: zy,
  setNodeSelection: Hy,
  setTextSelection: Vy,
  sinkListItem: jy,
  splitBlock: Wy,
  splitListItem: Gy,
  toggleList: Uy,
  toggleMark: Ky,
  toggleNode: Jy,
  toggleWrap: Yy,
  undoInputRule: Xy,
  unsetAllMarks: qy,
  unsetMark: Zy,
  updateAttributes: Qy,
  wrapIn: ex,
  wrapInList: tx
});
dt.create({
  name: "commands",
  addCommands() {
    return {
      ...nx
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
const rx = new An("focusEvents");
dt.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new _n({
        key: rx,
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
    }, o = {
      ...r
    }, s = {
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
    return Li() || Ad() ? s : o;
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
          const r = t.some((g) => g.docChanged) && !e.doc.eq(n.doc), o = t.some((g) => g.getMeta("preventClearDocument"));
          if (!r || o)
            return;
          const { empty: s, from: i, to: a } = e.selection, c = ie.atStart(e.doc).from, d = ie.atEnd(e.doc).to;
          if (s || !(i === c && a === d) || !Id(n.doc))
            return;
          const f = n.tr, h = kd({
            state: n,
            transaction: f
          }), { commands: m } = new Pb({
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
const ox = dt.create({
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
}), Bd = ({
  blockId: t,
  value: e = "",
  onUpdate: n = () => {
  },
  onBlur: r = () => {
  },
  placeholder: o = "",
  from: s = "settings",
  style: i = {}
}) => bf(
  {
    extensions: [
      Sf,
      xf,
      ox.configure({
        types: ["textStyle"]
      }),
      vf.configure({
        multicolor: !0
      }),
      wf.configure({
        openOnClick: !1,
        HTMLAttributes: {
          class: "underline"
        }
      }),
      Cf.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right"],
        defaultAlignment: "left"
      }),
      Nf,
      kf.configure({
        placeholder: o || "Enter text here",
        emptyEditorClass: "cursor-text before:content-[attr(data-placeholder)] before:absolute before:opacity-50 before:pointer-events-none"
      })
    ],
    content: e || "",
    onUpdate: n,
    onBlur: r,
    editorProps: {
      attributes: {
        ...i ? { style: i } : {},
        class: s !== "canvas" ? "text-sm p-1 px-2 rte" : "rte"
      }
    }
  },
  [t]
);
function sx(t) {
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
const ix = kr(
  ({
    blockContent: t,
    editingElement: e,
    onClose: n,
    onChange: r,
    onEscape: o
  }) => {
    const { document: s } = yt(), i = Bd({
      value: t,
      blockId: "active-inline-editing-element",
      placeholder: "Enter text here",
      onUpdate: ({ editor: d }) => r((d == null ? void 0 : d.getHTML()) || ""),
      onBlur: ({ editor: d, event: u }) => {
        if (!s) return;
        const p = u == null ? void 0 : u.relatedTarget, f = s.querySelector(".ProseMirror"), h = s.querySelector(".tippy-box"), m = s.querySelector("#chai-rich-text-menu-bar"), g = f == null ? void 0 : f.contains(p), y = h == null ? void 0 : h.contains(p), x = m == null ? void 0 : m.contains(p), w = window.document.getElementById("rte-widget-color-picker");
        if (!g && !y && !x && !w) {
          const S = (d == null ? void 0 : d.getHTML()) || "";
          n(S);
        }
      },
      from: "canvas"
    });
    z(() => {
      var u, p;
      const d = sx(e);
      d && ((u = i == null ? void 0 : i.commands) == null || u.setTextAlign(d)), (p = i == null ? void 0 : i.commands) == null || p.focus(), i == null || i.emit("focus", {
        editor: i,
        event: new FocusEvent("focus"),
        transaction: []
      });
    }, [e, i]);
    const a = D(() => {
      var p;
      const d = "max-w-none shadow-none outline outline-[2px] [&_*]:shadow-none";
      if (!e) return d;
      const u = ((p = e == null ? void 0 : e.className) == null ? void 0 : p.replace("sr-only", "")) || "";
      return `${d} ${u}`;
    }, [e]), c = (d) => {
      d.key === "Escape" && o(d);
    };
    return i && /* @__PURE__ */ b("div", { onKeyDown: c, onClick: (d) => d.stopPropagation(), className: "relative", children: [
      /* @__PURE__ */ l(
        yf,
        {
          editor: i,
          shouldShow: () => i && (i == null ? void 0 : i.isFocused),
          tippyOptions: { duration: 100, arrow: !0, hideOnClick: !1 },
          className: "w-max",
          children: /* @__PURE__ */ l(Dc, { editor: i, from: "canvas" })
        }
      ),
      /* @__PURE__ */ l(
        Rl,
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
), ax = kr(
  ({
    editingElement: t,
    blockContent: e,
    onClose: n,
    editorRef: r,
    onChange: o,
    onEscape: s
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
    const c = D(() => {
      var h;
      const f = ((h = t == null ? void 0 : t.tagName) == null ? void 0 : h.toLowerCase()) || "div";
      return f === "button" ? "div" : f;
    }, [t]), d = I(
      (f) => {
        (f.key === "Enter" || f.key === "Escape") && s(f);
      },
      [s]
    ), u = I(() => {
      n();
    }, [n]), p = D(() => {
      var f;
      return {
        id: "active-inline-editing-element",
        contentEditable: !0,
        className: `${((f = t == null ? void 0 : t.className) == null ? void 0 : f.replace("sr-only", "")) || ""} outline outline-[2px] outline-green-500 shadow-none empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400 empty:before:absolute empty:before:pointer-events-none empty:before:select-none empty:before:inset-0 empty:before:z-0 relative min-h-[1em]`,
        style: to(t == null ? void 0 : t.style) || {},
        onInput: (h) => {
          const m = h.target;
          m && (m.innerText.trim() === "" ? (m.setAttribute("data-placeholder", "Enter text here"), m.children.length > 0 && m.children[0].remove()) : h.target.removeAttribute("data-placeholder"), o(h.target.innerText));
        },
        onClick: (h) => {
          h.stopPropagation(), h.preventDefault();
        }
      };
    }, [t == null ? void 0 : t.className, t == null ? void 0 : t.style, o]);
    return /* @__PURE__ */ l(Q, { children: un(c, {
      ref: r,
      onBlur: u,
      onKeyDown: d,
      ...p
    }) });
  }
), lx = kr(
  ({ block: t, children: e }) => {
    const n = "content", { document: r } = yt(), { editingBlockId: o, editingItemIndex: s, setEditingBlockId: i, setEditingItemIndex: a } = Sn(), [c, d] = $(null), u = ne(null), { clearHighlight: p } = At(), f = _t(), { selectedLang: h } = Je(), [, m] = re(), g = ne(null), y = o, { blockContent: x, blockType: w } = D(() => {
      var L;
      const C = t._type;
      let N = t[n];
      const E = Pe(t._type);
      return h && ((L = E == null ? void 0 : E.i18nProps) == null ? void 0 : L.includes(n)) && ce(t, `${n}-${h}`) && (N = _(t, `${n}-${h}`)), { blockContent: N, blockType: C };
    }, [t, h]), S = I(
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
    ), k = I(
      (C) => {
        C.preventDefault(), y && (g.current = y), S(), setTimeout(() => {
          const N = g.current;
          g.current = null, N && m([N]);
        }, 100);
      },
      [y, S, m]
    );
    z(() => {
      var B;
      if (!y || !r) return;
      const C = `[data-block-id="${y}"]`, N = s >= 0 ? `[data-block-index="${s}"]` : "", E = r.querySelector(`${C}${N}`);
      E && ((B = E == null ? void 0 : E.classList) == null || B.add("sr-only"), np(() => d(E)));
    }, [y, w, r, s]);
    const T = D(() => c ? (p(), ["RichText", "Paragraph"].includes(w) ? /* @__PURE__ */ l(
      ix,
      {
        blockContent: x,
        editingElement: c,
        onChange: v,
        onClose: S,
        onEscape: k
      }
    ) : /* @__PURE__ */ l(
      ax,
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
), Rd = wo({
  index: -1,
  key: ""
}), Fa = wo(0), cx = [
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
], dx = ({
  asyncProps: t,
  blockAtom: e,
  children: n
}) => {
  const { editingBlockId: r, editingItemIndex: o } = Sn(), [s] = M(e), i = D(() => Pe(s._type), [s._type]), { selectedLang: a, fallbackLang: c } = Je(), d = Ag(), u = Un(), [p] = M(uc), f = _(i, "component", null), { index: h, key: m } = yn(Rd), { mode: g } = Mc(), y = Ue(Er), x = bt(), w = g === "edit", S = _g(), v = D(
    () => p ? Bl(oa(s, a, i), u, {
      index: h,
      key: m
    }) : oa(s, a, i),
    [s, a, i, u, p, h, m]
  ), k = D(
    () => sa(s, !0, y),
    [s, sa, y]
  ), T = D(
    () => d(s._id, ia(s._type)),
    [s._id, s._type, d, ia]
  ), C = D(() => {
    const V = {
      "data-block-id": s._id,
      "data-block-type": s._type,
      "data-block-index": h
    };
    return w && x ? {
      ...V,
      draggable: !r,
      onMouseDown: S.onMouseDown,
      onDragStart: S.onDragStart,
      onDragEnd: S.onDragEnd
    } : V;
  }, [s._id, s._type, h, w, x, S, r]), N = D(
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
  ), E = D(() => !cx.includes(s._type), [s._type]), B = D(() => {
    const V = _(s, "_show", !0);
    return Ct(V) ? p ? ff(V, u) !== "false" : !0 : V;
  }, [s, p, u]);
  if (al(f) || !B) return null;
  let L = /* @__PURE__ */ l(We, { children: un(f, {
    ...N,
    children: n({
      _id: s._id,
      _type: s._type,
      ...wr(v.repeaterItems) ? {
        repeaterItems: hf(v.repeaterItems, s),
        $repeaterItemsKey: v.$repeaterItemsKey
      } : {},
      ...s.partialBlockId ? { partialBlockId: s.partialBlockId } : "",
      ...s.globalBlock ? { partialBlockId: s.globalBlock } : ""
    })
  }) });
  const R = r === s._id && (o === h || h < 0) ? /* @__PURE__ */ l(lx, { block: s, children: L }) : L;
  return E ? /* @__PURE__ */ l(on, { fallbackRender: Bg, children: R }) : R;
}, ux = ({ children: t, partialBlockId: e }) => {
  const n = G("gotoPage", wt), { saveState: r } = _r(), { selectedLang: o, fallbackLang: s } = Je(), i = I(
    (a) => {
      if (a.stopPropagation(), r !== "SAVED") {
        Ce.error("You have unsaved changes. Please save the page first.");
        return;
      }
      n({ pageId: e, lang: o || s });
    },
    [r, n, e, o, s]
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
}, px = () => /* @__PURE__ */ l("div", { className: "flex items-center justify-center rounded-md border border-destructive bg-destructive/10 p-4 text-center text-sm text-destructive", children: /* @__PURE__ */ b("p", { children: [
  "Maximum partial nesting depth (",
  io,
  " levels) exceeded"
] }) }), fx = ({ partialBlockId: t }) => {
  const { getPartialBlocks: e } = ui(), n = yn(Fa), r = D(() => e(t), [e, t]), o = D(() => Al(P(r)), [r]);
  return n >= io ? /* @__PURE__ */ l(px, {}) : F(r) ? null : /* @__PURE__ */ l(Fa.Provider, { value: n + 1, children: /* @__PURE__ */ l(ux, { partialBlockId: t, children: /* @__PURE__ */ l(go, { splitAtoms: o, blocks: r, type: "PartialBlock" }) }) });
}, go = ({
  blocks: t,
  parent: e = null,
  splitAtoms: n = void 0,
  type: r = ""
}) => {
  const o = jh(n);
  let s = D(
    () => Z(t, (a) => ce(a, "_id") && (F(e) ? !a._parent : a._parent === e)),
    [t, e]
  );
  const i = I(
    (a) => Z(t, (c) => c._parent === a).length > 0,
    [t]
  );
  return (r === "Heading" || r === "Paragraph" || r === "Link") && (s = pf(s)), A(s, (a) => {
    const c = o(a._id);
    return c ? /* @__PURE__ */ l(Ig, { block: a, children: (d) => /* @__PURE__ */ l(dx, { blockAtom: c, asyncProps: d, children: ({ _id: u, _type: p, partialBlockId: f, repeaterItems: h, $repeaterItemsKey: m }) => p === "Repeater" ? wr(h) && h.map((g, y) => /* @__PURE__ */ l(Rd.Provider, { value: { index: y, key: m }, children: /* @__PURE__ */ l(go, { splitAtoms: n, blocks: t, parent: a._id, type: p }) }, `${u}-${y}`)) : p === "GlobalBlock" || p === "PartialBlock" ? /* @__PURE__ */ l(cf, { store: Qe, children: /* @__PURE__ */ l(fx, { partialBlockId: f }) }) : i(u) ? /* @__PURE__ */ l(go, { splitAtoms: n, blocks: t, parent: a._id, type: p }) : null }) }, a._id) : null;
  });
}, hx = () => {
  const [t] = le();
  return /* @__PURE__ */ l(go, { splitAtoms: Sr, blocks: t });
}, mx = () => {
  const [t] = le(), [e] = M(mi), n = F(t) ? null : /* @__PURE__ */ l(hx, {}, e);
  return /* @__PURE__ */ l(Q, { children: n });
}, gx = Et("canvasZoom", 100), bx = () => M(gx), yx = () => M(ql), Ld = Et("canvasWidth", 800), xx = Et("canvasDisplayWidth", 800), Pd = P((t) => {
  const e = t(Ld);
  return Il(e).toLowerCase();
}), bo = () => {
  const [t, e] = M(Ld), n = Ue(Pd), [r, o] = yx();
  return z(() => {
    r !== "xs" && o(n);
  }, [n, r, o]), [t, n, e];
}, Mi = () => {
  const [t, e] = M(xx);
  return [t, e];
}, vx = (t) => {
  const [e] = Mi(), [, n] = bx(), r = G("htmlDir", "ltr"), [o, s] = $({}), i = I(() => {
    const { width: a, height: c } = t;
    if (a < e) {
      const d = parseFloat((a / e).toFixed(2).toString());
      let u = {};
      const p = c * d, f = a * d;
      c && (u = {
        // Eureka! This is the formula to calculate the height of the scaled element. Thank you ChatGPT 4
        height: 100 + (c - p) / p * 100 + "%",
        width: 100 + (a - f) / f * 100 + "%"
      }), s({
        position: "relative",
        top: 0,
        transform: `scale(${d})`,
        transformOrigin: r === "rtl" ? "top right" : "top left",
        ...u,
        maxWidth: "none"
        // TODO: Add max-width to the wrapper
      }), n(d * 100);
    } else
      s({}), n(100);
  }, [e, t, r, n]);
  return z(() => {
    i();
  }, [e, t, n, i]), o;
}, wx = () => {
  const { document: t } = yt(), [e] = le(), [n] = re(), r = ne(Number.NEGATIVE_INFINITY);
  return z(() => {
    var o;
    r.current = ((o = t == null ? void 0 : t.defaultView) == null ? void 0 : o.performance.now()) ?? Number.NEGATIVE_INFINITY;
  }, [e, n, t]), z(() => {
    const o = t == null ? void 0 : t.defaultView;
    if (!o) return;
    let s = o.scrollY, i = Number.NEGATIVE_INFINITY, a = Number.NEGATIVE_INFINITY;
    const c = () => {
      i = o.performance.now(), s = o.scrollY, a = Number.NEGATIVE_INFINITY;
    }, d = () => {
      const u = vm();
      if (u !== null) {
        const f = o.document.documentElement;
        s = ym(u.target, f.scrollHeight, o.innerHeight), a = u.glideUntil;
      }
      const p = bm({
        scrollY: o.scrollY,
        intended: s,
        lastGestureAt: i,
        // The hold window runs from the END of the editor's own animation, not from the selection
        // that started it — otherwise a 260ms glide would spend most of its own protection.
        lastEditAt: Math.max(r.current, a),
        glideUntil: a,
        now: o.performance.now()
      });
      if (p !== "glide") {
        if (p === "restore") {
          o.scrollTo({ top: s, behavior: Ns });
          return;
        }
        p === "adopt" && (s = o.scrollY);
      }
    };
    for (const u of pa)
      o.addEventListener(u, c, { passive: !0, capture: !0 });
    return o.addEventListener("scroll", d, { passive: !0 }), () => {
      for (const u of pa)
        o.removeEventListener(u, c, { capture: !0 });
      o.removeEventListener("scroll", d);
    };
  }, [t]), null;
};
function Mn(t, e) {
  z(() => {
    const n = me.subscribe(t, e);
    return () => n();
  }, [t, e]);
}
const kx = () => {
  const [, t] = re(), [e, n] = Fe(), { document: r } = yt(), { clearHighlight: o } = At(), [s] = re(), [i] = M(gi);
  return z(() => {
    setTimeout(() => {
      if (!F(e))
        return;
      const a = _c(r, ye(s));
      if (a) {
        const c = a.getAttribute("data-style-prop");
        if (c) {
          const d = a.getAttribute("data-style-id"), u = a.getAttribute("data-block-parent");
          n([{ id: d, prop: c, blockId: u }]);
        }
      }
    }, 100);
  }, [r, s, n, e]), z(() => () => o(), [o]), Mn(se.CANVAS_BLOCK_SELECTED, (a) => {
    a && (!F(a) && !Ie(s, ye(a)) && (i == null || i.closeAll()), t(a));
  }), Mn(
    se.CANVAS_BLOCK_STYLE_SELECTED,
    (a) => {
      if (!a) return;
      const { blockId: c, styleId: d, styleProp: u } = a;
      c && (Ie(s, c) || i == null || i.closeAll(), n([{ id: d, prop: u, blockId: c }]), t([c]));
    }
  ), Mn(se.CLEAR_CANVAS_SELECTION, () => {
    o(), t([]), n([]);
  }), null;
}, Cx = () => {
  const [t] = Mi(), [, e] = wc(), n = ne(null), r = ne(null), [o, s] = $({ width: 0, height: 0 }), i = vx(o), [, a] = Kn(), c = G("loading", !1), d = G("htmlDir", "ltr"), { onDragOver: u, onDrop: p, onDragEnd: f } = Jn(), h = Wm(), m = I(
    (y) => {
      s((x) => ({ ...x, width: y }));
    },
    [s]
  );
  z(() => {
    if (!r.current) return;
    const { clientWidth: y, clientHeight: x } = r.current;
    s({ width: y, height: x });
  }, [r, t]);
  const g = D(() => {
    let y = dg;
    return y = y.replace("__HTML_DIR__", d), y;
  }, [d]);
  return /* @__PURE__ */ l(Eg, { onMount: m, onResize: m, children: /* @__PURE__ */ l(
    "div",
    {
      onMouseLeave: () => setTimeout(() => e(""), 300),
      className: "relative mx-auto h-full w-full overflow-hidden",
      onDragOver: u,
      onDrop: p,
      onDragEnd: f,
      ref: r,
      children: /* @__PURE__ */ b(
        pg,
        {
          contentDidMount: () => a(n.current),
          ref: n,
          id: "canvas-iframe",
          style: { ...i, ...F(i) ? { width: `${t}px` } : {} },
          className: "relative mx-auto box-content h-full w-full max-w-full shadow-lg transition-all duration-300 ease-linear",
          initialContent: g,
          children: [
            /* @__PURE__ */ l(mg, {}),
            /* @__PURE__ */ l(lg, {}),
            /* @__PURE__ */ l(kg, {}),
            /* @__PURE__ */ b(ap, { children: [
              /* @__PURE__ */ b(ig, { children: [
                c ? /* @__PURE__ */ l("div", { className: "h-full p-4", children: /* @__PURE__ */ l(zn, { className: "h-full" }) }) : /* @__PURE__ */ l(mx, {}),
                /* @__PURE__ */ l(gg, {})
              ] }),
              /* @__PURE__ */ l(kx, {}),
              /* @__PURE__ */ l(wx, {})
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
}, Nx = P(null), Od = () => M(Nx), Sx = te.lazy(() => import("./code-editor-BuibiRik.js")), Ex = () => {
  const [t] = Od(), e = G("onError", wt);
  return /* @__PURE__ */ l("div", { className: "flex h-full max-h-full w-full flex-1 flex-col", children: /* @__PURE__ */ b("div", { className: "relative flex h-full max-h-full flex-col overflow-hidden bg-gray-100/40", children: [
    /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l(zn, { className: "h-full" }), children: /* @__PURE__ */ l(on, { fallback: /* @__PURE__ */ l(ur, {}), onError: e, children: /* @__PURE__ */ l(Cx, {}) }) }),
    t ? /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l(zn, { className: "h-full" }), children: /* @__PURE__ */ l(Sx, {}) }) : null
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
}, _x = ({ id: t, placeholder: e }) => {
  const { t: n } = K(), [, r] = Od(), { selectedLang: o } = Je(), s = ae(), i = t.replace("root.", ""), a = Pe(s == null ? void 0 : s._type), d = Ie(_(a, "i18nProps", []), i) && o ? `${i}-${o}` : i, u = _(s, d, ""), p = D(() => _(Vn, o, o), [o]), f = () => {
    const h = s == null ? void 0 : s._id;
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
    /* @__PURE__ */ l(oe, { onClick: f, size: "sm", variant: "outline", className: "w-fit", children: n("Open code editor") })
  ] });
}, Ax = ({ id: t, value: e, onChange: n, onBlur: r }) => {
  const o = G("collections", []), s = ae(), i = _(s, "repeaterItems", "").replace(/\{\{(.*)\}\}/g, "$1").replace(Mt, ""), a = ee(o, { id: i }), d = _(a, t === "root.filter" ? "filters" : "sorts", []);
  return /* @__PURE__ */ l("div", { children: /* @__PURE__ */ b("select", { value: e, onChange: (u) => n(u.target.value), onBlur: (u) => r(t, u.target.value), children: [
    /* @__PURE__ */ l("option", { value: "", children: "Select" }),
    d.map((u) => /* @__PURE__ */ l("option", { value: u.id, children: u.name }, u.id))
  ] }) });
}, Tx = Hs(() => import("./IconPicker-DcNZxJ9G.js").then((t) => ({ default: t.IconPicker }))), Ix = (t) => {
  try {
    let e = t.replace(/<svg([^>]*)\sheight="[^"]*"([^>]*)>/gi, "<svg$1$2>").replace(/<svg([^>]*)\swidth="[^"]*"([^>]*)>/gi, "<svg$1$2>");
    return e = e.replace(/>\s+</g, "><"), e = e.replace(/\n/g, "").replace(/\s{2,}/g, " "), e = e.replace(/\s+=/g, "=").replace(/=\s+/g, "="), e = e.replace(/<!--[\s\S]*?-->/g, ""), e.trim();
  } catch {
    return t;
  }
}, Bx = ({ value: t, onChange: e, id: n }) => {
  const { t: r } = K(), [o, s] = $(t || "");
  z(() => {
    s(t || "");
  }, [t]);
  const i = (a) => {
    s(a);
    const c = Ix(a);
    e(c);
  };
  return /* @__PURE__ */ b("div", { className: "mt-1 flex flex-col gap-2", id: "icon-picker-field", children: [
    /* @__PURE__ */ b("div", { className: "flex items-center gap-x-2", children: [
      /* @__PURE__ */ l("div", { className: "flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border bg-gray-50", children: o ? /* @__PURE__ */ l("div", { className: "h-6 w-6", dangerouslySetInnerHTML: { __html: o } }) : /* @__PURE__ */ l("span", { className: "text-xs text-gray-400", children: "SVG" }) }),
      /* @__PURE__ */ l(
        "textarea",
        {
          id: n,
          autoCapitalize: "off",
          autoCorrect: "off",
          spellCheck: "false",
          value: o,
          onChange: (a) => i(a.target.value),
          placeholder: r("SVG_code"),
          rows: 2,
          className: "no-scrollbar w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        }
      )
    ] }),
    /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l("div", { className: "text-xs text-muted-foreground", children: "Loading..." }), children: /* @__PURE__ */ l(Tx, { onSelectIcon: i }) }),
      /* @__PURE__ */ l("p", { className: "text-xs text-muted-foreground", children: r("Paste SVG_code") })
    ] })
  ] });
}, $o = xe.Root, Rx = xe.Trigger, Lx = xe.Portal, Md = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
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
Md.displayName = xe.Overlay.displayName;
const Lr = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ b(Lx, { children: [
  /* @__PURE__ */ l(Md, {}),
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
const Px = ({ className: t, ...e }) => /* @__PURE__ */ l("div", { className: j("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t), ...e });
Px.displayName = "DialogFooter";
const Pr = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  xe.Title,
  {
    ref: n,
    className: j("text-lg font-semibold leading-none tracking-tight", t),
    ...e
  }
));
Pr.displayName = xe.Title.displayName;
const Ox = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(xe.Description, { ref: n, className: j("text-sm text-muted-foreground", t), ...e }));
Ox.displayName = xe.Description.displayName;
const qr = ({
  assetId: t,
  children: e,
  onSelect: n,
  mode: r = "image"
}) => {
  const [o, s] = $(!1), i = rp();
  return /* @__PURE__ */ b($o, { open: o, onOpenChange: (c) => s(c), children: [
    /* @__PURE__ */ l(Rx, { asChild: !0, children: e }),
    /* @__PURE__ */ b(Lr, { className: "flex max-h-[90vh] max-w-7xl border-border md:w-fit", children: [
      /* @__PURE__ */ l(Pr, { className: "sr-only", children: "Media Manager" }),
      /* @__PURE__ */ l("div", { className: "h-full w-full", children: i ? /* @__PURE__ */ l(i, { close: () => s(!1), onSelect: (...c) => {
        n.call(void 0, ...c), s(!1);
      }, mode: r, assetId: t }) : null })
    ] })
  ] });
};
qr.displayName = "MediaManagerModal";
function Mx(t, e, n) {
  if (!t) return t;
  const { baseClasses: r, classes: o } = vn(t), s = (c) => c.split(" ").filter((d) => d && !(e && d === "w-full") && !(n && d === "h-full")).join(" "), i = s(r), a = s(o);
  return `${St}${i},${a}`;
}
const Wr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2Q1ZDdkYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIFBsYWNlaG9sZGVyPC90ZXh0Pjwvc3ZnPg==", Dx = (t) => {
  var o;
  if (!t || Re(t, "data")) return "";
  const e = ((o = t.split("/").pop()) == null ? void 0 : o.split("?")[0]) || "";
  return [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".bmp", ".ico", ".avif"].some((s) => e.toLowerCase().endsWith(s)) ? e : "";
}, $x = ({ value: t, onChange: e, id: n, onBlur: r, uiSchema: o }) => {
  const { t: s } = K(), { selectedLang: i } = Je(), a = ae(), c = _t(), d = Un(), u = (o == null ? void 0 : o["ui:allowEmpty"]) === !0, p = n.split(".").pop() || "", f = i ? `_${p}Id-${i}` : `_${p}Id`, h = F(i) && (a == null ? void 0 : a._type) === "Image" && ce(a, "assetId"), m = _(a, f, h ? a == null ? void 0 : a.assetId : ""), g = D(() => {
    if (!t || !a || !/\{\{.*?\}\}/.test(t)) return t;
    const k = { ...a, [p]: t }, T = Bl(k, d, { index: -1, key: "" });
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
          const B = Ks(a._type), L = _(B, "styles", "");
          a.styles === L && (E.styles = Mx(a.styles, T, C));
        }
        if (F(E)) return;
        c([a._id], E);
      }
    }
  }, w = I(() => {
    if (e(u ? "" : Wr), a != null && a._id) {
      const k = {}, T = f.includes("mobile");
      Ge(k, f, ""), Ge(k, T ? "mobileWidth" : "width", ""), Ge(k, T ? "mobileHeight" : "height", ""), c([a._id], k);
    }
  }, [a, e, c, f, u]), S = Dx(g);
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
        /* @__PURE__ */ l(qr, { onSelect: x, assetId: "", children: /* @__PURE__ */ l("small", { className: "mb-1 h-6 w-full cursor-pointer rounded-md bg-secondary px-1 py-1 text-center text-xs text-secondary-foreground hover:bg-secondary/80", children: !F(g) && g !== Wr ? s("Replace image") : s("Choose image") }) }),
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
          placeholder: s("Enter image URL"),
          value: t === Wr ? "" : t,
          onBlur: ({ target: { value: v } }) => r(n, v),
          onChange: (v) => e(v.target.value)
        }
      )
    ] })
  ] });
}, Fx = Ys(
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
function Di({ className: t, variant: e, ...n }) {
  return /* @__PURE__ */ l("div", { className: j(Fx({ variant: e }), t), ...n });
}
const Rs = Fn.Provider, Ne = Fn.Root, Se = Fn.Trigger, be = W.forwardRef(({ className: t, sideOffset: e = 4, ...n }, r) => /* @__PURE__ */ l(Fn.Portal, { children: /* @__PURE__ */ l(
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
const Dd = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
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
Dd.displayName = tt.displayName;
const $d = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ b("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ l(xl, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
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
$d.displayName = tt.Input.displayName;
const Fd = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  tt.List,
  {
    ref: n,
    className: j("max-h-[300px] overflow-y-auto overflow-x-hidden", t),
    ...e
  }
));
Fd.displayName = tt.List.displayName;
const zd = W.forwardRef((t, e) => /* @__PURE__ */ l(tt.Empty, { ref: e, className: "py-6 text-center text-sm", ...t }));
zd.displayName = tt.Empty.displayName;
const Hd = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
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
Hd.displayName = tt.Group.displayName;
const zx = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(tt.Separator, { ref: n, className: j("-mx-1 h-px bg-border", t), ...e }));
zx.displayName = tt.Separator.displayName;
const Ls = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
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
Ls.displayName = tt.Item.displayName;
const $i = hr.Root, Fi = hr.Trigger, zo = W.forwardRef(({ className: t, align: e = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ l(hr.Portal, { children: /* @__PURE__ */ l(
  hr.Content,
  {
    ref: o,
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
const Hx = ({ data: t, onSelect: e, dataType: n }) => {
  const [r, o] = te.useState([]), [s, i] = te.useState(t), a = (p) => Array.isArray(p) ? "array" : typeof p == "object" && p !== null ? "object" : "value", c = te.useCallback(
    (p) => {
      const f = (h) => n === "value" ? h === "value" || h === "object" : n === "array" ? h === "array" : h === n;
      p.type === "object" ? (o((h) => [...h, p.key]), i(p.value)) : f(p.type) && e([...r, p.key].join("."), n);
    },
    [r, e, n]
  ), d = te.useCallback(() => {
    if (r.length > 0) {
      const p = r.slice(0, -1);
      o(p), i(p.reduce((f, h) => f[h], t));
    }
  }, [r, t]), u = te.useMemo(() => s ? Object.entries(s).map(([p, f]) => ({ key: p, value: f, type: a(f) })).filter((p) => !Re(p.key, ar) && p.key.includes("/") ? !1 : n === "value" ? p.type === "value" || p.type === "object" : n === "array" ? p.type === "array" || p.type === "object" : n === "object" ? p.type === "object" : !0) : [], [s, n]);
  return /* @__PURE__ */ b(Dd, { className: "fields-command", children: [
    /* @__PURE__ */ l($d, { className: "border-none", placeholder: "Search..." }),
    /* @__PURE__ */ b(Fd, { children: [
      /* @__PURE__ */ l(zd, { children: er("No option found.") }),
      /* @__PURE__ */ b(Hd, { children: [
        r.length > 0 && /* @__PURE__ */ b(Ls, { onSelect: d, className: "flex items-center text-sm", children: [
          /* @__PURE__ */ l(vl, { className: "mr-2 h-4 w-4" }),
          er("Back")
        ] }),
        u.map((p) => /* @__PURE__ */ b(
          Ls,
          {
            value: p.key,
            disabled: !1,
            onSelect: () => c(p),
            className: "flex items-center justify-between",
            children: [
              /* @__PURE__ */ b("span", { className: "flex items-center gap-x-2", children: [
                Re(p.key, ar) ? /* @__PURE__ */ l(wl, {}) : Re(p.key, Mt) ? /* @__PURE__ */ l(kl, {}) : null,
                Re(p.key, ar) ? er("Repeater Data") : Re(p.key, Mt) ? p.key.replace(Mt, "") : p.key
              ] }),
              /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
                n === "object" && p.type === "object" && /* @__PURE__ */ l(
                  oe,
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
function Vd({ data: t, onSelect: e, dataType: n = "value" }) {
  const [r, o] = te.useState(!1), s = G("collections", []), i = te.useMemo(() => n === "array" ? { ...s.map((c) => c.id).reduce((c, d) => ({ ...c, [Mt + d]: [] }), {}), ...t } : t, [t, s, n]);
  return /* @__PURE__ */ b($i, { open: r, onOpenChange: o, children: [
    /* @__PURE__ */ b(Ne, { children: [
      /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(Fi, { asChild: !0, children: /* @__PURE__ */ l(
        oe,
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
      Hx,
      {
        data: i,
        onSelect: (a, c) => {
          e(a, c), o(!1);
        },
        dataType: n
      }
    ) })
  ] });
}
const jd = ({
  schema: t,
  onChange: e,
  id: n,
  formData: r
}) => {
  const o = Un(), s = G("flags.dataBinding", !0), i = ah(), a = ae(), c = D(() => {
    if (i.length === 1) return "";
    const p = i.find((m) => m._type === "Repeater"), h = _(p, "repeaterItems", "").replace(/\{\{(.*)\}\}/g, "$1");
    return `${ar}${Re(h, Mt) ? `${h}/${p == null ? void 0 : p._id}` : h}`;
  }, [i]), d = D(() => ye(_(o, c.replace(ar, ""), [])), [c, o]), u = I(
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
            let B = "";
            C > 0 && N !== " " && !h(N) && (B = " ");
            let L = "";
            E && E !== " " && !h(E) && (L = " "), x.chain().insertContent(B + w + L).run();
          }
          setTimeout(() => e(x.getHTML(), {}, n), 100);
          return;
        }
      } else {
        const x = g, w = x.selectionStart || 0, S = x.value || "", v = x.selectionEnd || w;
        if (v > w) {
          const E = `{{${p}}}`, { text: B } = m(S, w, E), L = S.slice(0, w) + B + S.slice(v);
          e(L, {}, n);
          return;
        }
        const T = `{{${p}}}`, { text: C } = m(S, w, T), N = S.slice(0, w) + C + S.slice(w);
        e(N, {}, n);
      }
    },
    [n, e, r, a == null ? void 0 : a._id, c]
  );
  return s ? /* @__PURE__ */ l(
    Vd,
    {
      data: {
        ...d && { [c]: d },
        ...o
      },
      onSelect: u,
      dataType: t.binding === "array" ? "array" : "value"
    }
  ) : null;
}, Vx = (t) => {
  const { id: e, classNames: n, label: r, children: o, errors: s, help: i, hidden: a, required: c, schema: d, formData: u, onChange: p } = t, { selectedLang: f, fallbackLang: h, languages: m } = Je(), g = D(
    () => F(m) ? "" : F(f) ? h : f,
    [m, f, h]
  ), y = D(() => _(Vn, g, g), [g]), x = Un(), w = ae(), S = Js(), v = D(
    () => _(S, [w == null ? void 0 : w._type, "i18nProps"], []),
    [S, w == null ? void 0 : w._type]
  ), [k, T] = $(null);
  if (a)
    return null;
  if (d.type === "boolean") return /* @__PURE__ */ l("div", { className: n, children: o });
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
            /* @__PURE__ */ l(Di, { className: "m-0 bg-gray-200 px-2 leading-tight text-gray-500 hover:bg-gray-200 hover:text-gray-500", children: /* @__PURE__ */ l("span", { className: "text-[9px] font-medium text-slate-600", children: u == null ? void 0 : u.length }) }),
            d.description && /* @__PURE__ */ l(Rs, { children: /* @__PURE__ */ b(Ne, { children: [
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
      (u == null ? void 0 : u.length) === 0 ? /* @__PURE__ */ l("div", { className: "h-0 overflow-hidden", children: o }) : /* @__PURE__ */ b("div", { className: `${L ? "pt-0.5" : "h-0 overflow-hidden"}`, children: [
        o,
        s,
        i
      ] })
    ] });
  }
  const E = e.replace("root.", ""), B = v.includes(E) && !F(f) && F(u);
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
        d.description && /* @__PURE__ */ l(Rs, { children: /* @__PURE__ */ b(Ne, { children: [
          /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(pr, { className: "h-3 w-3 text-muted-foreground/70" }) }),
          /* @__PURE__ */ l(be, { className: "max-w-xs", children: d.description })
        ] }) })
      ] }),
      !d.enum && !d.oneOf && x && /* @__PURE__ */ b("span", { className: "flex items-center space-x-1", children: [
        B ? /* @__PURE__ */ b(Ne, { children: [
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
          jd,
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
    o,
    s,
    i
  ] });
}, jx = ({ href: t, onChange: e }) => {
  const { t: n } = K(), r = G("searchPageTypeItems", (v, k) => []), [o, s] = $(!1), [i, a] = $(!1), [c, d] = $(""), [u, p] = $([]), [f, h] = $(-1), m = ne(null);
  z(() => {
    if (d(""), p([]), h(-1), a(!1), !t || o || !Re(t, "pageType:")) return;
    const v = Gu(t, ":");
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
      s(!1), h(-1);
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
    d(v), a(!F(v)), s(!0), g(v);
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
    (o || !F(u) || i && F(u)) && /* @__PURE__ */ l("div", { className: "absolute z-40 mt-2 max-h-40 w-full max-w-[250px] overflow-y-auto rounded-md border border-border bg-background shadow-lg", children: o ? /* @__PURE__ */ b("div", { className: "space-y-1 p-2", children: [
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
}, Wx = ({ schema: t, formData: e, onChange: n, name: r }) => {
  const { t: o } = K(), { type: s = "pageType", href: i = "", target: a = "self" } = e ?? {}, c = G("pageTypes", []), { selectedLang: d, fallbackLang: u, languages: p } = Je(), f = D(
    () => F(p) ? "" : F(d) ? u : d,
    [p, d, u]
  ), h = D(() => _(Vn, f, f), [f]), m = s === "pageType" && F(c) ? "url" : s;
  return /* @__PURE__ */ b("div", { children: [
    /* @__PURE__ */ b("span", { className: "flex items-center justify-between gap-x-2 text-xs font-medium", children: [
      /* @__PURE__ */ b("span", { children: [
        (t == null ? void 0 : t.title) ?? "Link",
        /* @__PURE__ */ l("span", { className: "pl-1 text-[9px] text-zinc-400", children: h })
      ] }),
      /* @__PURE__ */ l(
        jd,
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
      /* @__PURE__ */ l("select", { name: "type", value: s, onChange: (g) => n({ ...e, type: g.target.value }), children: A(
        [
          ...F(c) ? [] : [{ const: "pageType", title: o("Goto Page") }],
          { const: "url", title: o("Open URL") },
          { const: "email", title: o("Compose Email") },
          { const: "telephone", title: o("Call Phone") },
          { const: "scroll", title: o("Scroll to element") }
        ],
        (g) => /* @__PURE__ */ l("option", { value: g.const, children: g.title }, g.const)
      ) }),
      m === "pageType" && !F(c) ? /* @__PURE__ */ l(jx, { href: i, onChange: (g) => n({ ...e, href: g }) }) : null,
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
          placeholder: o(s === "url" ? "Enter URL" : s === "scroll" ? "#ElementID" : "Enter details")
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
        /* @__PURE__ */ l("span", { className: "pt-1 text-xs", children: o("Open in new tab") })
      ] })
    ] })
  ] });
}, Gx = ({ value: t, onChange: e }) => {
  var s;
  if (!t)
    return /* @__PURE__ */ b("div", { className: "mt-1 flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-2 py-1.5 text-xs text-gray-500 text-gray-600", children: [
      /* @__PURE__ */ l(Np, { className: "h-4 w-4" }),
      " Choose a collection"
    ] });
  const n = `{{${Mt}`, r = t == null ? void 0 : t.startsWith(n);
  let o = t;
  return r && (o = (s = t == null ? void 0 : t.replace(n, "")) == null ? void 0 : s.replace("}}", "")), /* @__PURE__ */ l("div", { className: "mt-1 flex flex-col gap-1", children: /* @__PURE__ */ b("div", { className: "flex items-center justify-between gap-2 rounded-md border border-blue-200 bg-blue-50 px-2 py-1 text-xs text-blue-600", children: [
    /* @__PURE__ */ b("span", { className: "flex max-w-[200px] items-center gap-2", children: [
      " ",
      r ? /* @__PURE__ */ l(kl, { className: "h-3 min-h-3 w-3 min-w-3" }) : null,
      /* @__PURE__ */ b(Ne, { delayDuration: 500, children: [
        /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l("span", { className: "cursor-default truncate", children: o }) }),
        /* @__PURE__ */ l(be, { side: "left", hidden: o.length < 50, children: o })
      ] })
    ] }),
    /* @__PURE__ */ b(Ne, { children: [
      /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(
        oe,
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
}, Wd = P((t) => {
  var i;
  const e = t(He), n = t(Ao), r = n.length === 1 ? n[0] : null;
  if (!r) return null;
  const o = ee(e, { _id: r });
  if (!o) return null;
  let s = o._parent;
  for (; s; ) {
    const a = ee(e, { _id: s });
    if (!a) return null;
    if ((i = Pe(a._type)) != null && i.wrapper)
      return a;
    s = a._parent;
  }
  return null;
});
Wd.debugLabel = "wrapperBlockAtom";
const zi = () => Ue(Wd), Ux = () => {
  const t = ae(), e = zi(), { addCoreBlock: n } = Nn();
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
}, Kx = te.lazy(() => import("./rte-widget-modal-CZSBC4Dr.js")), Jx = ({ blockId: t, id: e, placeholder: n, value: r, onChange: o, onBlur: s }) => {
  const i = ne(null), [a, c] = $(!1), d = Bd({
    blockId: t,
    value: r,
    placeholder: n,
    onBlur: ({ editor: f }) => {
      const h = f == null ? void 0 : f.getHTML();
      s(e, h);
    },
    onUpdate: ({ editor: f }) => {
      const h = f == null ? void 0 : f.getHTML();
      o(h);
    }
  });
  z(() => {
    i.current && d && (i.current.__chaiRTE = d);
  }, [t, d]);
  const u = () => {
    c(!1);
  }, p = /* @__PURE__ */ b("div", { id: `chai-rte-${e}`, ref: i, className: "mt-1 rounded-md border border-input", children: [
    /* @__PURE__ */ l(Dc, { editor: d, onExpand: () => c(!0) }),
    /* @__PURE__ */ l(
      Rl,
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
    a && /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l("div", { children: "Loading..." }), children: /* @__PURE__ */ l(Kx, { isOpen: a, onClose: u, editor: d, rteElement: p }) }),
    a ? /* @__PURE__ */ l("div", { children: "Open in modal" }) : /* @__PURE__ */ l("div", { className: "relative", children: p })
  ] });
}, Yx = (t) => {
  const { editingBlockId: e } = Sn(), [n, r] = $(null), o = ae(), s = o == null ? void 0 : o._id;
  return z(() => {
    r(s);
  }, [s]), n && n !== e ? /* @__PURE__ */ l(Jx, { ...t, blockId: n }, n) : null;
}, Xx = ({ formData: t, onChange: e }) => {
  const [n] = le(), r = ae(), o = zi(), { addCoreBlock: s } = Nn(), [, i] = re(), a = (r == null ? void 0 : r._type) === "Slider" ? r : o, c = ee(n, { _parent: a == null ? void 0 : a._id, _type: "Slides" }), d = Z(n, { _parent: c == null ? void 0 : c._id, _type: "Slide" }), u = (t == null ? void 0 : t.currentSlide) || _(d, "0._id");
  if (z(() => {
    (r == null ? void 0 : r._type) === "Slide" && (t == null ? void 0 : t.currentSlide) !== (r == null ? void 0 : r._id) && e({ ...t, currentSlide: r == null ? void 0 : r._id });
  }, [r]), z(() => {
    d != null && d.length && !ee(d, { _id: t == null ? void 0 : t.currentSlide }) && e({ ...t, currentSlide: _(d, "0._id") });
  }, [t, d]), !r && !o || !c) return null;
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
    const m = s(
      { styles: "#styles:,h-full w-full min-w-full", type: "Slide" },
      c == null ? void 0 : c._id
    ), g = m == null ? void 0 : m._id;
    g && (e({ ...t, currentSlide: g }), i([g]));
  };
  return /* @__PURE__ */ b("div", { className: "space-y-1.5 px-2", children: [
    /* @__PURE__ */ b("div", { className: "flex items-center gap-x-2 pb-2 text-[12px]", children: [
      /* @__PURE__ */ l("button", { onClick: f, className: "rounded bg-gray-200 p-1.5 hover:opacity-80", children: /* @__PURE__ */ l(vl, { className: "h-3 w-3" }) }),
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
            /* @__PURE__ */ l(Sp, { className: "h-3 w-3" }),
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
}, qx = ({ formData: t, onChange: e }) => {
  const n = _(t, "srcsets", []) || [], r = (i, a) => {
    const c = i.target.name, d = i.target.value;
    e({
      srcsets: A(n, (u, p) => p === a ? { ...u, [c]: d } : u)
    });
  }, o = () => {
    e({ srcsets: [...n, {}] });
  }, s = (i) => {
    e({ srcsets: Ur(n, (a, c) => parseInt(c) === i) });
  };
  return /* @__PURE__ */ b("div", { children: [
    /* @__PURE__ */ b("div", { className: "flex items-center justify-between pb-2", children: [
      /* @__PURE__ */ l("label", { children: "Responsive Video (optional)" }),
      /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          onClick: o,
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
          onClick: () => s(a),
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
}, Zx = (t) => /* @__PURE__ */ l("button", { ...t, className: "duration absolute right-2 top-2 cursor-pointer text-blue-400 hover:text-blue-500", children: /* @__PURE__ */ b("div", { className: "flex items-center gap-x-0.5 text-[11px] leading-tight", children: [
  /* @__PURE__ */ l(qe, { className: "h-3 w-3" }),
  " ",
  /* @__PURE__ */ l("span", { children: "Add" })
] }) }), za = kr(({ blockId: t, schema: e, uiSchema: n, formData: r, onChange: o }) => {
  const { selectedLang: s } = Je(), i = Zo("widget"), a = Zo("field"), c = Zo("template"), d = pn(
    async ({ formData: u }, p) => {
      _(u, p) === void 0 && Ge(u, p, ""), o({ formData: u }, p);
    },
    [o, s],
    400
    // save only every 5 seconds
  );
  return /* @__PURE__ */ l(
    sf,
    {
      widgets: {
        richtext: Yx,
        icon: Bx,
        image: $x,
        code: _x,
        colCount: Ux,
        collectionSelect: Ax,
        repeaterBinding: Gx,
        ...i
      },
      fields: {
        link: Wx,
        slider: Xx,
        sources: qx,
        ...a
      },
      templates: {
        FieldTemplate: Vx,
        ButtonTemplates: {
          AddButton: Zx
        },
        ...c
      },
      idSeparator: ".",
      autoComplete: "off",
      omitExtraData: !1,
      liveOmit: !1,
      liveValidate: !1,
      validator: af,
      uiSchema: n,
      schema: e,
      formData: r,
      onChange: ({ formData: u }, p) => {
        if (!p || t !== (u == null ? void 0 : u._id)) return;
        const f = Uu(p.split("."), 2).join(".").replace("root.", "");
        d({ formData: u }, f);
      }
    },
    s
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
const Qx = new mf({
  tags: ["{{", "}}"],
  autoEscape: !0,
  autoTrim: !1,
  useWith: !0,
  parse: { interpolate: "", exec: "~", raw: "~" }
}), e0 = [
  /\b(?:window|document|globalThis|process|Function|eval|import|fetch|XMLHttpRequest|WebSocket|localStorage|sessionStorage)\b/,
  /(^|[^=!<>])=([^=]|$)/,
  /\b(?:while|for|try|catch|class|new)\b/
], Gd = (t) => wr(t) ? "array" : t === null ? "null" : $s(t) ? "JSON" : typeof t, us = (t, e) => {
  const n = e ? _(t, e) : t;
  return !$s(n) || n === null || wr(n) ? [] : Object.entries(n).filter(([r]) => !r.startsWith("#")).map(([r, o]) => ({
    path: e ? `${e}.${r}` : r,
    type: Gd(o)
  }));
}, Gr = (t) => {
  const e = t.trim();
  if (!e) return null;
  if (e0.some((r) => r.test(e)))
    return "Unsafe expression detected";
  try {
    return Qx.compile(`{{${e}}}`), null;
  } catch {
    return "Invalid expression syntax";
  }
}, t0 = ({ currentExpression: t, externalData: e, onSave: n }) => {
  const r = ne(null), o = ne(null), [s, i] = $(t), [a, c] = $(null), [d, u] = $(0), [p, f] = $(null);
  z(() => {
    i(t), c(Gr(t)), f(null), u(0);
  }, [t]);
  const h = D(
    () => Object.entries(e ?? {}).filter(([y]) => !y.startsWith("#")).map(([y, x]) => ({
      key: y,
      type: Gd(x)
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
    const x = s.slice(0, p.start) + y + s.slice(p.end);
    i(x), c(Gr(x)), f(null), u(0), requestAnimationFrame(() => {
      var S, v;
      const w = p.start + y.length;
      (S = r.current) == null || S.focus(), (v = r.current) == null || v.setSelectionRange(w, w);
    });
  };
  return z(() => {
    if (!p || !o.current) return;
    const y = o.current.children[d];
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
          value: s,
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
              const x = Gr(s);
              c(x), x || n(s.trim());
            }
          },
          placeholder: "name === 'x'",
          autoComplete: "off"
        }
      ),
      p && /* @__PURE__ */ l(
        "div",
        {
          ref: o,
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
}, n0 = () => {
  const { t } = K(), e = ae(), n = Un(), r = _t(), [o, s] = $(!1), i = (f) => {
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
    s(f);
  }, c = () => {
    if (!e) return;
    const f = ce(e, "_show") ? e._show : !0;
    r([e._id], {
      _show: !f
    });
  }, d = () => {
    e && (r([e._id], { _show: !0 }), s(!1));
  };
  if (!e) return null;
  const u = Ct(e._show), p = u ? e._show.startsWith("{{") && e._show.endsWith("}}") ? e._show.slice(2, -2).trim() : e._show : "";
  return /* @__PURE__ */ b("div", { className: "my-2 flex items-center justify-between", children: [
    /* @__PURE__ */ l("p", { className: "text-xs text-gray-500", children: t("Visibility") }),
    /* @__PURE__ */ b("div", { className: "group relative", children: [
      /* @__PURE__ */ b($i, { open: o, onOpenChange: a, children: [
        /* @__PURE__ */ l(Fi, { asChild: !0, children: /* @__PURE__ */ l(
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
              oe,
              {
                variant: "ghost",
                size: "sm",
                className: "h-6 w-6 p-0 text-muted-foreground hover:text-red-500",
                onClick: d,
                children: /* @__PURE__ */ l(Ws, { className: "h-3.5 w-3.5" })
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "relative", children: /* @__PURE__ */ l(
            t0,
            {
              currentExpression: p,
              externalData: n,
              onSave: (f) => {
                i(f), s(!1);
              }
            }
          ) })
        ] }) })
      ] }),
      /* @__PURE__ */ l(
        Ho,
        {
          checked: u ? !0 : ce(e, "_show") ? e._show : !0,
          onCheckedChange: c,
          disabled: u
        }
      )
    ] })
  ] });
}, Ha = (t, e, n) => {
  const r = to(t);
  return vo(kt(t), (o) => {
    Ie(_(n, "i18nProps", []), o) && !F(e) && (r[o] = _(t, `${o}-${e}`));
  }), r;
};
function Va() {
  const { selectedLang: t } = Je(), e = ae(), n = Ql(), r = _t(), o = Pe(e == null ? void 0 : e._type), s = Ha(e, t, o), [i, a] = $(s), [c, d] = $(!1), u = zi(), p = Pe(u == null ? void 0 : u._type), f = Ha(u, t, p), h = ({ formData: k }, T, C) => {
    T && (i == null ? void 0 : i._id) === e._id && r([e._id], { [T]: _(k, T) }, C);
  }, m = I(
    zs(({ formData: k }, T, C) => {
      h({ formData: k }, T, C), a(k);
    }, 1500),
    [e == null ? void 0 : e._id, t]
  ), g = ({ formData: k }, T) => {
    T && (n([e._id], { [T]: _(k, T) }), m({ formData: k }, T, { [T]: _(i, T) }));
  }, y = ({ formData: k }, T) => {
    T && (n([u._id], { [T]: _(k, T) }), m({ formData: k }, T, { [T]: _(i, T) }));
  }, { schema: x, uiSchema: w } = D(() => {
    const k = e == null ? void 0 : e._type;
    if (!k)
      return { schema: {}, uiSchema: {} };
    try {
      const { schema: T, uiSchema: C } = na(k);
      if (k === "Repeater") {
        const N = _(e, "repeaterItems", "");
        Re(N, `{{${Mt}`) ? (Ge(C, "filter", { "ui:widget": "collectionSelect" }), Ge(C, "sort", { "ui:widget": "collectionSelect" })) : (Ge(C, "filter", { "ui:widget": "hidden" }), Ge(C, "sort", { "ui:widget": "hidden" }));
      }
      return { schema: T, uiSchema: C };
    } catch {
      return { schema: {}, uiSchema: {} };
    }
  }, [e]), { wrapperSchema: S, wrapperUiSchema: v } = D(() => {
    if (!u || !(u != null && u._type))
      return { wrapperSchema: {}, wrapperUiSchema: {} };
    const k = u == null ? void 0 : u._type, { schema: T = {}, uiSchema: C = {} } = na(k);
    return { wrapperSchema: T, wrapperUiSchema: C };
  }, [u]);
  return /* @__PURE__ */ b("div", { className: "no-scrollbar overflow-x-hidden px-px", children: [
    /* @__PURE__ */ l(n0, {}),
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
        za,
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
      za,
      {
        blockId: e == null ? void 0 : e._id,
        onChange: g,
        formData: s,
        schema: x,
        uiSchema: w
      }
    )
  ] });
}
const r0 = hn.Root, Ud = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(hn.Item, { ref: n, className: j("border-b", t), ...e }));
Ud.displayName = "AccordionItem";
const Kd = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ l(hn.Header, { className: "flex", children: /* @__PURE__ */ b(
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
Kd.displayName = hn.Trigger.displayName;
const Jd = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ l(
  hn.Content,
  {
    ref: r,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: /* @__PURE__ */ l("div", { className: j("pb-4 pt-0", t), children: e })
  }
));
Jd.displayName = hn.Content.displayName;
const o0 = P(null, (t, e, { blockIds: n, fullClasses: r }) => {
  const o = ye(t(Ir)), s = Z(
    t(Sr),
    (i) => (
      // @ts-ignore
      n.includes(t(i)._id)
    )
  );
  return A(s, (i) => {
    const a = t(i), c = r;
    let { classes: d, baseClasses: u } = vn(_(a, o.prop, `${St},`));
    return ht(c, (p) => {
      const f = p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), h = new RegExp(`(^|\\s)${f}(?=\\s|$)`, "g");
      d = d.replace(h, " ").replace(/\s+/g, " ").trim();
      const m = ye(p.split(":"));
      Ie(["2xl", "xl", "lg", "md", "sm"], m) && c.push(p.split(":").pop().trim());
    }), ht(c, (p) => {
      const f = p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), h = new RegExp(`(^|\\s)${f}(?=\\s|$)`, "g");
      u = u.replace(h, " ").replace(/\s+/g, " ").trim();
    }), {
      ids: [a._id],
      props: {
        [o.prop]: `${St}${u},${d}`
      }
    };
  });
}), s0 = (t) => {
  const e = Object.keys(t).filter(
    (r) => typeof t[r] == "string" && t[r].startsWith(St)
  ), n = {};
  return e.forEach((r) => {
    n[r] = `${St},`;
  }), {
    ids: [t._id],
    props: n
  };
}, i0 = () => {
  const { updateBlocks: t, updateBlocksRuntime: e } = $e();
  return I(
    (n, r = !1) => {
      const { ids: o, props: s } = s0(n);
      r ? t(o, s) : e(o, s);
    },
    [t, e]
  );
}, Hi = () => {
  const { updateBlocks: t, updateBlocksRuntime: e } = $e(), n = vt(o0);
  return I(
    (r, o, s = !1) => {
      const i = n({ blockIds: r, fullClasses: o });
      s ? t(r, i[0].props) : e(r, i[0].props);
    },
    [n]
  );
}, Yd = () => {
  const t = ae(), e = _t(), n = I((i) => Ks(i) || {}, []), r = I((i) => Object.keys(i).filter(
    (a) => typeof i[a] == "string" && i[a].startsWith("#styles:")
  ), []), o = I(
    (i) => {
      if (!t) return;
      const c = n(t._type)[i] ?? "#styles:,";
      e([t._id], { [i]: c });
    },
    [t, n, e]
  );
  return { resetAll: I(() => {
    if (!t) return;
    const i = r(t);
    if (i.length === 0) return;
    const a = n(t._type), c = dn(a, i);
    e([t._id], c);
  }, [t, r, n, e]), reset: o };
}, a0 = () => {
  var h;
  const t = ae(), [e, n] = Fe(), r = Hi(), [o] = re(), { t: s } = K(), { reset: i } = Yd();
  if (!t) return null;
  const a = Object.keys(t).filter(
    (m) => typeof t[m] == "string" && t[m].startsWith("#styles:")
  ), c = !F(a) && a.length > 1, d = _(t, (h = e[0]) == null ? void 0 : h.prop, ""), { classes: u = "" } = vn(d) || {}, p = u ? u.split(" ").filter((m) => !F(m)) : [], f = (m) => ee(e, (g) => g.prop === m);
  return /* @__PURE__ */ l(Q, { children: c && /* @__PURE__ */ b("div", { className: "flex flex-wrap gap-1", children: [
    /* @__PURE__ */ b("label", { htmlFor: "block-styling-props", className: "py-1 text-xs", children: [
      s("Style element"),
      ":"
    ] }),
    /* @__PURE__ */ l("div", { className: "flex flex-wrap gap-2", children: A(a, (m) => /* @__PURE__ */ b(
      Di,
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
                  children: s("Reset style")
                }
              ),
              /* @__PURE__ */ l(
                Ee,
                {
                  className: "text-xs",
                  onClick: () => {
                    r(o, p, !0);
                  },
                  children: s("Clear styles")
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
}, Xd = te.createContext({
  setDragData: () => {
  }
}), ja = (t, e) => {
  t = t.toLowerCase();
  let n = t.trim().replace(/ |\+/g, "");
  if ((n === "auto" || n === "none") && e.includes(n))
    return { value: "", unit: n };
  const r = e.length ? new RegExp(e.join("|"), "g") : /XXXXXX/g;
  n = n.replace(r, "");
  const o = t.match(r), s = o && o.length > 1, i = !F(n) && Number.isNaN(Number(n));
  return s || i ? { error: "Invalid value" } : o && (o[0] === "auto" || o[0] === "none") ? { value: o[0], unit: "" } : { value: n, unit: o ? o[0] : "" };
}, l0 = (t) => {
  const e = t.startsWith("-") ? "-" : "", n = t.split("-").pop();
  if (["auto", "none"].includes(n))
    return { value: "", unit: n };
  if (n === "px") return { value: "1", unit: "px" };
  if (n === "screen") return { value: "100", unit: t.indexOf("w-") !== -1 ? "vw" : "vh" };
  if (n === "full") return { value: "100", unit: "%" };
  if (Ie(t, "skew-"))
    return { value: `${e}${n}`, unit: "deg" };
  if (Ie(t, "rotate-"))
    return { value: `${e}${n}`, unit: "deg" };
  if (Ie(t, "opacity-"))
    return { value: `${n / 100}`, unit: "-" };
  if (Ie(t, "duration-") || Ie(t, "delay-"))
    return { value: `${n}`, unit: "ms" };
  if (Ie(t, "translate-") && !n.includes("/"))
    return { value: `${e}${`${n / 4}`}`, unit: "rem" };
  if (Ie(t, "scale-"))
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
    const [r, o] = A(n.split("/"), (s) => parseInt(s, 10));
    return { value: e + (r / o * 100).toFixed(2).replace(".00", ""), unit: "%" };
  }
  return Ku(parseFloat(n)) ? { value: `${e + parseFloat(n) * 4}`, unit: "px" } : { value: n, unit: "class" };
}, c0 = (t) => {
  if (F(t))
    return { value: "", unit: "" };
  const e = t.match(/\[.*\]/g);
  if (e === null)
    return d0(t);
  const n = _(e, "0", "").replace(/\[|\]/g, ""), r = t.startsWith("-") ? "-" : "", o = ye(n.match(/\d+.\d+|\d+/g));
  return { value: `${r}${o}`, unit: n.replace(o, "") };
}, d0 = (t) => F(t) ? { value: "", unit: "" } : l0(t), u0 = ({
  unit: t,
  currentValue: e,
  onDrag: n,
  onDragEnd: r,
  onDragStart: o,
  negative: s,
  cssProperty: i
}) => {
  const { setDragData: a } = yn(Xd);
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
          negative: s,
          cssProperty: i
        };
        o(d), a(d);
      },
      color: void 0,
      className: "relative z-50 ml-1 hidden h-6 cursor-row-resize rounded bg-background/70 px-2 group-hover:inline",
      children: /* @__PURE__ */ l(_p, {})
    }
  );
}, p0 = ({ onSelect: t, current: e, units: n }) => /* @__PURE__ */ l("div", { "data-theme": "light", className: "-m-[7px] -mx-[13px] flex w-9 flex-col", children: n.map((r) => /* @__PURE__ */ l(
  oe,
  {
    className: "h-max rounded-none px-1 py-1 text-right text-[11px] hover:bg-blue-400",
    color: e === r ? "primary" : void 0,
    size: "sm",
    onClick: (o) => {
      o.stopPropagation(), t(r);
    },
    children: r
  },
  r
)) }), Wa = 50, f0 = (t) => {
  const [e, n] = $(!1), [r, o] = $(""), { currentClass: s, onChange: i, classPrefix: a, cssProperty: c, units: d, negative: u } = t, [p, f] = $(c != null && c.toLowerCase().includes("width") ? "%" : d[0]), [h, m] = $(!1), [g, y] = $(""), [x, w] = $(!1), [S, v] = $(!1);
  z(() => {
    const { value: E, unit: B } = c0(s);
    if (B === "") {
      o(E), f(c != null && c.toLowerCase().includes("width") ? "%" : ye(d));
      return;
    }
    f(B), o(B === "class" || F(E) ? "" : E);
  }, [s, c, d]);
  const k = pn((E) => i(E), [i], Wa), T = pn((E) => i(E, !1), [i], Wa), C = I(
    (E = !1) => {
      const B = ja(`${r}`, d);
      if (_(B, "error", !1)) {
        m(!0);
        return;
      }
      const L = _(B, "unit") !== "" ? _(B, "unit") : p;
      if (L === "auto" || L === "none") {
        k(`${a}${L}`);
        return;
      }
      if (_(B, "value") === "")
        return;
      const V = `${_(B, "value", "").startsWith("-") ? "-" : ""}${a}[${_(B, "value", "").replace("-", "")}${L === "-" ? "" : L}]`;
      E ? T(V) : k(V);
    },
    [k, T, r, p, a, d]
  ), N = I(
    (E) => {
      const B = ja(`${r}`, d);
      if (_(B, "error", !1)) {
        m(!0);
        return;
      }
      if (E === "auto" || E === "none") {
        k(`${a}${E}`);
        return;
      }
      if (_(B, "value") === "")
        return;
      const L = _(B, "unit") !== "" ? _(B, "unit") : E, V = `${_(B, "value", "").startsWith("-") ? "-" : ""}${a}[${_(B, "value", "").replace("-", "")}${L === "-" ? "" : L}]`;
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
        value: s
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
            const B = Ju(E.target.value);
            let L = Yu(B) ? 0 : B;
            E.keyCode === 38 && (L += 1), E.keyCode === 40 && (L -= 1);
            const R = `${L}`, J = `${R.startsWith("-") ? "-" : ""}${a}[${R.replace("-", "")}${p === "-" ? "" : p}]`;
            T(J);
          },
          onKeyUp: (E) => {
            S && (E.preventDefault(), v(!1));
          },
          onBlur: () => C(),
          onChange: (E) => {
            m(!1), o(E.target.value);
          },
          onClick: (E) => {
            var B;
            (B = E == null ? void 0 : E.target) == null || B.select(), n(!1);
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
              d.length > 1 ? /* @__PURE__ */ l(Ep, {}) : null
            ]
          }
        ) }),
        /* @__PURE__ */ l(be, { className: "bg-background", children: /* @__PURE__ */ l(
          p0,
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
      u0,
      {
        onDragStart: () => w(!0),
        onDragEnd: (E) => {
          if (y(() => ""), w(!1), F(E))
            return;
          const B = `${E}`, R = `${B.startsWith("-") ? "-" : ""}${a}[${B.replace("-", "")}${p === "-" ? "" : p}]`;
          k(R);
        },
        onDrag: (E) => {
          if (F(E))
            return;
          y(E);
          const B = `${E}`, R = `${B.startsWith("-") ? "-" : ""}${a}[${B.replace("-", "")}${p === "-" ? "" : p}]`;
          T(R);
        },
        currentValue: r,
        unit: p,
        negative: u,
        cssProperty: c
      }
    )
  ] }) }) });
}, Or = wo({ canReset: !1, canChange: !0 }), h0 = ({ children: t, canReset: e = !1, canChange: n = !0 }) => (
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
}, Dn = {
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
}, m0 = {
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
}, g0 = ["current", "inherit", "transparent", "black", "white"], b0 = [
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
], y0 = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"], Ps = A(Lt(m0), (t) => t), x0 = Ot([
  ...A(g0, (t) => $t(A(Ps, (e) => `${e}-${t}`))),
  ...A(
    b0,
    (t) => Ot(A(Ps, (e) => Ot(A(y0, (n) => `${e}-${t}-${n}`))))
  )
]), v0 = A(
  Ot(
    Lt(Dn).map((t) => t.classes).concat(x0)
  ),
  (t) => ({
    name: t
  })
), w0 = () => {
  const t = Rr(), e = D(() => {
    let n = [];
    if (t.colors) {
      const r = Ot(A(t.colors, ({ items: o }) => kt(o)));
      n = Ot(A(r, (o) => $t(A(Ps, (s) => `${s}-${o}`))));
    }
    return t.fontFamily && (n = [...n, ...A(kt(t.fontFamily), (r) => `${r}`)]), A(n, (r) => ({ name: r }));
  }, [t]);
  return D(
    () => new Ol([...v0, ...e], {
      isCaseSensitive: !1,
      threshold: 0.2,
      minMatchCharLength: 2,
      keys: ["name"]
    }),
    [e]
  );
}, Vo = () => {
  const t = Rr(), e = D(() => {
    if (t.colors) {
      const o = Ot(A(t.colors, ({ items: s }) => kt(s)));
      ht(Dn, (s, i) => {
        Ge(Dn, `${i}.regExp`, s.regExp.replace("__THEME_COLORS_REGEXP__", o.join("|")));
      });
    }
    return Dn;
  }, [t]), n = I(
    (o, s) => {
      const i = _(e, `${o}.regExp`, "");
      return s.match(new RegExp(i));
    },
    [e]
  ), r = I(
    (o, s = []) => _(e, `${o}.classes`, s),
    [e]
  );
  return { match: n, getClasses: r };
}, qd = ({ label: t, property: e, onChange: n }) => {
  const { getClasses: r } = Vo(), o = r(e), s = Mr(e), i = D(() => _(s, "cls", ""), [s]), { canChange: a } = yn(Or), c = /\[.*\]/g.test(i);
  return /* @__PURE__ */ l("div", { className: t ? "w-full rounded" : "grow", children: c ? /* @__PURE__ */ b("div", { className: "flex items-center", children: [
    /* @__PURE__ */ l(Cr, { className: "w-[70%] rounded py-1", readOnly: !0, value: i }),
    /* @__PURE__ */ b(Ne, { delayDuration: 100, children: [
      /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l("button", { type: "button", className: "invisible ml-3 mt-1 text-blue-600 group-hover:visible", children: /* @__PURE__ */ l(pr, {}) }) }),
      /* @__PURE__ */ l(be, { children: "Current value is using a Tailwind arbitrary value." })
    ] })
  ] }) : /* @__PURE__ */ l(
    Os,
    {
      rounded: t,
      onChange: (d) => n(d, e),
      selected: i,
      options: o,
      disabled: !a
    }
  ) });
};
function Os({ selected: t, onChange: e, rounded: n = !1, options: r, disabled: o = !1 }) {
  const s = t.replace(/.*:/g, "").trim(), { undo: i, redo: a } = Ar();
  return /* @__PURE__ */ b(
    "select",
    {
      disabled: !r.length || o,
      className: `${n ? "rounded-md border border-border" : "border-0"} disable:bg-gray-500 h-full w-full truncate rounded bg-background px-2 py-1 text-xs outline-none disabled:cursor-not-allowed`,
      onChange: (c) => e(c.target.value),
      onKeyDown: (c) => {
        c.ctrlKey && (c.key === "z" && i(), c.key === "y" && a());
      },
      value: s,
      children: [
        /* @__PURE__ */ l("option", { className: "bg-transparent", value: "" }),
        r.map((c, d) => /* @__PURE__ */ l("option", { className: "bg-transparent", value: c, children: c }, `option-${d}`))
      ]
    }
  );
}
const k0 = {
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
}, C0 = ({ property: t, onChange: e }) => {
  const n = Mr(t), r = D(() => _(n, "cls", ""), [n]), { canChange: o } = yn(Or), [s, i] = $([]), [a, c] = $({ color: "", shade: "" }), d = r.split("-"), u = _(d, "1", ""), p = _(d, "2", ""), f = I(
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
  const h = I(
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
    const y = `${_(k0, t, "")}-${a.color}${a.shade ? `-${a.shade}` : ""}`;
    m(t, y) && e(y, t);
  }, [m, a, e, t]), /* @__PURE__ */ b("div", { className: "flex flex-row divide-x divide-solid divide-border rounded-lg border border-transparent text-xs", children: [
    /* @__PURE__ */ l("div", { className: "grow text-center", children: /* @__PURE__ */ l(
      Os,
      {
        disabled: !o,
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
    /* @__PURE__ */ l("button", { type: "button", className: "grow text-center", children: /* @__PURE__ */ l(Os, { rounded: !0, selected: p, disabled: !u || !o, onChange: h, options: s }) })
  ] });
}, Zd = {
  "not-italic": () => /* @__PURE__ */ l("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ l("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 3H11V5H9V11H11V13H5V11H7V5H5V3H9Z", fill: "white" }) }),
  // visibility
  visible: Nl,
  invisible: no,
  // display
  hidden: no,
  gap: It,
  gapX: rt,
  gapY: nt,
  spaceX: rt,
  spaceY: nt,
  overscroll: It,
  overscrollX: rt,
  overscrollY: nt,
  overflow: It,
  overflowX: rt,
  overflowY: nt,
  top: qt,
  right: Qn,
  bottom: Rn,
  left: Zn,
  inset: It,
  insetX: rt,
  insetY: nt,
  border: It,
  borderX: rt,
  borderY: nt,
  borderTop: qt,
  borderRight: Qn,
  borderBottom: Rn,
  borderLeft: Zn,
  borderRadius: It,
  borderRadiusX: rt,
  borderRadiusY: nt,
  borderRadiusTop: qt,
  borderRadiusRight: Qn,
  borderRadiusBottom: Rn,
  borderRadiusLeft: Zn,
  borderRadiusTopLeft: Mp,
  borderRadiusTopRight: Cl,
  borderRadiusBottomRight: Op,
  borderRadiusBottomLeft: Pp,
  divideXWidth: rt,
  divideYWidth: nt,
  scale: It,
  scaleX: rt,
  scaleY: nt,
  skewX: rt,
  skewY: nt,
  translateX: rt,
  translateY: nt,
  // padding
  padding: It,
  paddingX: rt,
  paddingY: nt,
  paddingTop: qt,
  paddingRight: Qn,
  paddingBottom: Rn,
  paddingLeft: Zn,
  // margin
  margin: It,
  marginX: rt,
  marginY: nt,
  marginTop: qt,
  marginRight: Qn,
  marginBottom: Rn,
  marginLeft: Zn,
  // text-align
  textLeft: Lp,
  textCenter: Rp,
  textRight: Bp,
  textJustify: Ip,
  // font style
  italic: gl,
  // "not-italic": "",
  // decoration
  underline: bl,
  overline: Tp,
  // transform
  uppercase: Ap,
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
}, N0 = ({ property: t, onChange: e }) => {
  const { getClasses: n } = Vo(), r = n(t), { canChange: o } = yn(Or), s = Mr(t), i = D(() => _(s, "cls", ""), [s]);
  return /* @__PURE__ */ l("div", { className: "flex grow flex-wrap gap-1", children: A(r, (a) => /* @__PURE__ */ b(Ne, { children: [
    /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        disabled: !o,
        onClick: () => e(a, t),
        className: `cursor-pointer rounded border border-border p-1 disabled:cursor-not-allowed ${i === a ? "bg-primary text-white" : "disabled:bg-gray-600 disabled:text-gray-400"}`,
        children: te.createElement(_(Zd, a, So))
      }
    ) }),
    /* @__PURE__ */ l(be, { children: Kt(ll(a)) })
  ] })) });
}, S0 = ({ property: t, onChange: e }) => {
  const { canReset: n, canChange: r } = yn(Or), o = Mr(t), s = D(() => _(o, "cls", ""), [o]), { getClasses: i } = Vo(), a = i(t, [""]), c = a.indexOf(s) > -1 ? a.indexOf(s) : 0, d = /\[.*\]/g.test(s);
  return /* @__PURE__ */ l("div", { className: "flex flex-row divide-x divide-solid divide-border rounded border border-border text-xs", children: d ? /* @__PURE__ */ l("div", { className: "px-2 py-[5px]", children: s }) : /* @__PURE__ */ b(Q, { children: [
    /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        className: "hover:bg-bg-gray-700 box-border w-2/12 rounded-bl rounded-tl bg-background px-1 text-center disabled:cursor-not-allowed disabled:bg-gray-600",
        disabled: !r && (!n || c - 1 < 0),
        onClick: () => e(Xi(a, c - 1), t),
        children: /* @__PURE__ */ l("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ l(
          Dp,
          {
            className: !r && (!n || c - 1 < 0) ? "text-gray-500" : "text-black/60 dark:text-white/60"
          }
        ) })
      }
    ),
    /* @__PURE__ */ l("div", { className: "w-8/12 text-center", children: /* @__PURE__ */ l(qd, { label: !1, property: t, onChange: e }) }),
    /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        className: "hover:bg-bg-gray-700 w-2/12 rounded-br rounded-tr bg-background px-1 text-center disabled:cursor-not-allowed disabled:bg-gray-600",
        disabled: !r && (!n || c + 1 >= a.length),
        onClick: () => e(Xi(a, c + 1), t),
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
function E0(t) {
  if (F(t.trim())) return "";
  const e = t.match(/sm:|md:|lg:|xl:|2xl:/g);
  return _(e, 0, "xs").replace(":", "");
}
function _0(t) {
  const e = A(xh, (r) => `${r}:`).join("|"), n = new RegExp(e, "g");
  return _(n.exec(t.trim()), 0, "").replace(":", "");
}
function A0(t) {
  return t.trim().split(":").pop() || "";
}
const fs = {};
function T0(t) {
  if (F(t)) return "";
  if (fs[t])
    return fs[t];
  let e = "";
  for (const n in Dn) {
    const r = _(Dn, `${n}.regExp`, "");
    if (new RegExp(r, "g").test(t)) {
      e = n, fs[t] = e;
      break;
    }
  }
  return e;
}
function Vi(t) {
  return F(t) ? null : {
    dark: Re(t, "dark:"),
    mq: E0(t),
    mod: _0(t),
    cls: A0(t),
    fullCls: t,
    property: T0(t)
  };
}
function I0(t) {
  let e = "";
  return t.dark && (e += "dark:"), t.mq.toLowerCase() !== "xs" && (e += `${t.mq}:`), t.mod && (e += `${t.mod}:`), e += t.cls, e;
}
function Xt(t) {
  t = t.replace(/\s+/g, " ");
  const e = t.split(" ").map(Vi).filter((r) => r !== null), n = ["xs", "sm", "md", "lg", "xl", "2xl"];
  return e.sort((r, o) => n.indexOf(r.mq) - n.indexOf(o.mq)).map((r) => r.fullCls).join(" ");
}
import.meta.vitest && test("orderClassesByBreakpoint", () => {
  expect(Xt("bg-red-400 sm:bg-red-500")).toBe("bg-red-400 sm:bg-red-500"), expect(Xt("bg-red-400 sm:bg-red-500 md:bg-red-600")).toBe(
    "bg-red-400 sm:bg-red-500 md:bg-red-600"
  ), expect(Xt("xl:sticky block sm:absolute")).toBe("block sm:absolute xl:sticky"), expect(Xt("sm:bg-red-500 bg-red-400")).toBe("bg-red-400 sm:bg-red-500"), expect(Xt("sm:w-[30%] w-[30%]")).toBe("w-[30%] sm:w-[30%]"), expect(Xt("text-[30px]       sm:text-[20px]")).toBe("text-[30px] sm:text-[20px]");
});
function pt(t) {
  if (t = t.replace(/\s+/g, " "), !t) return "";
  const e = ["xs", "sm", "md", "lg", "xl", "2xl"], n = t.split(" ").map(Vi).filter((o) => o !== null);
  let r = t;
  if (n.length === 1) return n[0].fullCls;
  for (const o of n) {
    const s = o.property, i = e.indexOf(o.mq);
    for (let a = i + 1; a < e.length; a++) {
      const c = e[a], d = n.find((u) => u.property === s && u.mq === c);
      if (d && d.cls === o.cls)
        r = r.replace(d.fullCls, "");
      else if (d && d.cls !== o.cls)
        break;
    }
  }
  return r.replace(/\s+/g, " ").trim();
}
import.meta.vitest && test("removeDuplicateClasses (tailwind classes) at higher breakpoints", () => {
  expect(pt("")).toBe(""), expect(pt("bg-red-400")).toBe("bg-red-400"), expect(pt("bg-red-400    sm:bg-red-500")).toBe("bg-red-400 sm:bg-red-500"), expect(pt("bg-red-400 sm:bg-red-400")).toBe("bg-red-400"), expect(pt("bg-red-400 sm:bg-red-400 lg:bg-red-400")).toBe("bg-red-400"), expect(pt("p-4 sm:p-6 md:p-4")).toBe("p-4 sm:p-6 md:p-4"), expect(pt("p-4 sm:p-6 md:p-4 lg:p-4")).toBe("p-4 sm:p-6 md:p-4"), expect(pt("sm:bg-red-400 bg-red-400")).toBe("bg-red-400"), expect(pt("w-[30%] sm:w-[30%]")).toBe("w-[30%]"), expect(pt("w-[30%] sm:w-[30%] md:w-[40%]")).toBe("w-[30%] md:w-[40%]");
});
const B0 = P(null, (t, e, { blockIds: n, newClasses: r }) => {
  const o = Z(
    t(Sr),
    (i) => (
      // @ts-ignore
      n.includes(t(i)._id)
    )
  ), s = ye(t(Ir));
  return A(o, (i) => {
    const a = t(i), c = _(a, s.prop, `${St},`), { classes: d } = vn(c);
    return {
      ids: [a._id],
      props: {
        [s.prop]: `${St},${Xt(
          pt(Ll(d, r))
        )}`
      }
    };
  });
}), Qd = () => {
  const t = vt(B0), { updateBlocks: e, updateBlocksRuntime: n } = $e();
  return I(
    (r, o, s = !1) => {
      const i = t({ blockIds: r, newClasses: o });
      if (!s) {
        n(r, i[0].props);
        return;
      }
      e(r, i[0].props);
    },
    [t, e, n]
  );
}, R0 = (t) => {
  const e = ["xs", "sm", "md", "lg", "xl", "2xl"], n = e.indexOf(t);
  return n === -1 ? ["xs"] : e.slice(0, n + 1);
}, L0 = P((t) => {
  const e = ye(t(Ir)), n = t(To);
  if (!e || e.blockId !== _(n, "_id", null)) return [];
  const r = _(n, e.prop, `${St},`), { classes: o } = vn(r);
  return Z(A(o.trim().split(" "), Vi), (s) => !al(s));
}), Ga = { xs: 0, sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }, P0 = P((t) => {
  const e = t(Pd), n = t(ii), r = t(Pc), o = R0(e);
  let s = Z(t(L0), { mod: n });
  return Re(n, "_") || (s = Z(s, (i) => o.includes(i.mq))), s = s.sort((i, a) => Ga[i.mq] - Ga[a.mq]), r || (s = Z(s, { dark: !1 })), s;
}), jo = () => Ue(P0), O0 = () => M(ii), Mr = (t) => {
  const e = jo();
  return Xu(e, { property: t });
}, M0 = (t, e) => {
  const n = {
    xs: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
    "2xl": 5
  };
  return n[_(t, "mq", "xs")] <= n[e];
}, D0 = {
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
}, Ua = {
  xs: "",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
}, $0 = (t) => `${t.toUpperCase()} ${Ua[t] ? `(${Ua[t]} & up)` : ""}`, yo = (t) => {
  const { t: e } = K(), { type: n = "icons", label: r, property: o, onEmitChange: s = () => {
  }, units: i, negative: a = !1 } = t, [c] = Br(), [d] = O0(), [, u] = bo(), p = Mr(o), f = Qd(), h = Hi(), [m] = re(), g = D(() => _(p, "fullCls", ""), [p]), y = I(
    (T, C = !0) => {
      const N = { dark: c, mq: u, mod: d, cls: T };
      (c || d !== "") && (N.mq = "xs");
      const E = I0(N);
      f(m, [E], C);
    },
    [m, c, u, d, o, f]
  ), x = I(() => {
    h(m, [g], !0);
  }, [m, g, h]), w = D(() => M0(p, u), [p, u]);
  z(() => {
    s(w, p);
  }, [w, s, p]);
  const [, , S] = bo(), v = I(
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
  return /* @__PURE__ */ l(h0, { canChange: w, canReset: p && k, children: /* @__PURE__ */ b("div", { className: "group flex flex-row items-center py-2 first:pt-0 last:pb-0", children: [
    /* @__PURE__ */ l("div", { className: "relative w-[70px] truncate text-xs text-foreground", children: /* @__PURE__ */ l("span", { className: `text-[11px] ${p && !k ? "text-foreground" : ""}`, children: e(r) }) }),
    /* @__PURE__ */ b("div", { className: "flex flex-row items-center", children: [
      /* @__PURE__ */ b("div", { className: "w-[150px]", children: [
        n === "arbitrary" ? /* @__PURE__ */ l(
          f0,
          {
            currentClass: _(p, "cls", ""),
            classPrefix: _(D0, o, ""),
            units: i || [],
            onChange: y,
            negative: a,
            cssProperty: o
          }
        ) : null,
        n === "icons" && /* @__PURE__ */ l(N0, { property: o, onChange: y }),
        n === "range" && /* @__PURE__ */ l(S0, { property: o, onChange: y }),
        n === "color" && /* @__PURE__ */ l(C0, { property: o, onChange: y }),
        n === "dropdown" && /* @__PURE__ */ l(qd, { label: r, property: o, onChange: y })
      ] }),
      /* @__PURE__ */ l("div", { className: `w-[30px] cursor-pointer ${g ? "visible" : "invisible"}`, children: k ? /* @__PURE__ */ l("button", { type: "button", onClick: () => x(), title: "Reset", className: "flex px-1.5 text-xs", children: /* @__PURE__ */ l($p, { className: "h-5 w-5 text-blue-500 hover:opacity-80" }) }) : w && p ? /* @__PURE__ */ b(Ne, { delayDuration: 100, children: [
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
            $0(_(p, "mq")),
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
}, F0 = ["px", "%", "em", "rem", "ch", "vh", "vw"], Ms = ({
  label: t,
  options: e,
  borderB: n = !1,
  borderT: r = !1,
  type: o = "arbitrary",
  units: s = F0,
  negative: i = !1
}) => {
  const { t: a } = K(), [c, d] = $(e[0].key), u = jo(), p = I((f) => A(u, "property").includes(f), [u]);
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
                  te.createElement(_(Zd, h, So), { className: "text-inherit w-3 h-3" })
                ]
              }
            ) }),
            /* @__PURE__ */ l(be, { children: Kt(ll(f)) })
          ] }) }, `option-${m}`)) })
        ] }),
        /* @__PURE__ */ l("div", { className: "mt-0 flex items-center", children: /* @__PURE__ */ l(
          yo,
          {
            type: o,
            units: [...s],
            label: "",
            property: c,
            negative: i
          }
        ) })
      ]
    }
  );
}, Ka = ({ heading: t, items: e }) => {
  const { t: n } = K(), r = jo(), o = D(() => {
    const s = (c) => $t(
      c.map((d) => d.styleType === "multiple" ? A(d.options, "key") : d.property)
    ), i = $t(
      e.map((c) => c.styleType === "accordion" ? s(c.items) : c.styleType === "multiple" ? A(c.options, "key") : c.property)
    ), a = A(r, "property");
    return qu(i, a).length > 0;
  }, [r, e]);
  return /* @__PURE__ */ b("details", { children: [
    /* @__PURE__ */ l("summary", { className: "my-px cursor-default rounded-md bg-gray-50 p-px px-2 text-[11px] text-foreground dark:bg-gray-800", children: /* @__PURE__ */ b("div", { className: "inline", children: [
      Kt(n(t.toLowerCase())),
      o ? /* @__PURE__ */ l(
        "span",
        {
          className: `ml-1 mr-2 inline-block h-[8px] w-[8px] rounded-full ${o ? "bg-primary" : "bg-gray-300"}`
        }
      ) : null
    ] }) }),
    /* @__PURE__ */ l("div", { className: "p-2", children: e.map((s) => s.styleType === "multiple" ? /* @__PURE__ */ l(Ms, { ...s }, s.label) : /* @__PURE__ */ l(yo, { ...s }, s.label)) })
  ] });
}, z0 = wo({}), hs = ({ section: t, showAccordian: e }) => {
  const { t: n } = K(), r = jo(), o = I(
    (i = []) => {
      const a = {};
      for (let d = 0; d < r.length; d++)
        a[r[d].property] = r[d].cls;
      let c = !0;
      for (const d in i)
        if (!ce(a, d) || a[d] !== i[d]) {
          c = !1;
          break;
        }
      return c;
    },
    [r]
  ), s = D(() => ({}), []);
  return /* @__PURE__ */ l(z0.Provider, { value: s, children: e ? /* @__PURE__ */ b(Ud, { value: t.heading, className: "border-none", children: [
    /* @__PURE__ */ l(Kd, { className: "border-slate-150 border-t py-2 text-xs", children: /* @__PURE__ */ l("div", { className: "flex items-center py-2", children: /* @__PURE__ */ l("div", { className: "flex items-center gap-x-2 text-xs font-medium", children: Kt(n(t.heading)) }) }) }),
    /* @__PURE__ */ l(Jd, { className: "py-2", children: t.items.map((i) => ce(i, "component") ? te.createElement(i.component, { key: i.label }) : ce(i, "styleType") ? i.styleType === "multiple" ? /* @__PURE__ */ l(Ms, { ...i }, i.label + "multiple-choices") : i.styleType === "accordion" && o(i == null ? void 0 : i.conditions) ? /* @__PURE__ */ l(Ka, { ...i }, i.label + "nested-options") : null : /* @__PURE__ */ l(yo, { ...i }, i.label + "block-style")) })
  ] }) : /* @__PURE__ */ l("div", { className: "py-2", children: t.items.map((i, a) => ce(i, "component") ? te.createElement(i.component, { key: i.label }) : ce(i, "styleType") ? i.styleType === "multiple" ? /* @__PURE__ */ l(Ms, { ...i }, i.label + "multiple-choices" + a) : i.styleType === "accordion" && o(i == null ? void 0 : i.conditions) ? /* @__PURE__ */ l(Ka, { ...i }, i.label + "nested-options" + a) : null : /* @__PURE__ */ l(yo, { ...i }, i.label + "block-style" + a)) }) });
}, H0 = _o.Root, V0 = _o.Trigger, eu = W.forwardRef(({ className: t, align: e = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ l(
  _o.Content,
  {
    ref: o,
    align: e,
    sideOffset: n,
    className: j(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-[--radix-hover-card-content-transform-origin] rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
      t
    ),
    ...r
  }
));
eu.displayName = _o.Content.displayName;
const j0 = Et("selectedBreakpoints", ["XS", "MD", "XL"]), W0 = () => {
  const [t, e] = M(j0);
  return [t, e];
}, Ja = ({ className: t = "" }) => /* @__PURE__ */ b(
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
), G0 = ({ className: t = "" }) => /* @__PURE__ */ b(
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
), U0 = ({ className: t = "" }) => /* @__PURE__ */ b(
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
), Ya = ({ landscape: t = !1, className: e = "" }) => /* @__PURE__ */ b(
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
), Ds = [
  {
    title: "Mobile (Base)",
    content: "Styles set here are applied to all screen unless edited at higher breakpoint",
    breakpoint: "xs",
    icon: /* @__PURE__ */ l(Ja, { className: "h-4 w-4" }),
    width: 400
  },
  {
    title: "Mobile landscape (SM)",
    content: "Styles set here are applied at 640px and up unless edited at higher breakpoint",
    breakpoint: "sm",
    icon: /* @__PURE__ */ l(Ja, { className: "h-4 w-4 rotate-90" }),
    width: 640
  },
  {
    title: "Tablet (MD)",
    content: "Styles set here are applied at 768px and up",
    breakpoint: "md",
    icon: /* @__PURE__ */ l(Ya, {}),
    width: 800
  },
  {
    title: "Tablet Landscape (LG)",
    content: "Styles set here are applied at 1024px and up unless edited at higher breakpoint",
    breakpoint: "lg",
    icon: /* @__PURE__ */ l(Ya, { landscape: !0 }),
    width: 1024
  },
  {
    title: "Desktop (XL)",
    content: "Styles set here are applied at 1280px and up unless edited at higher breakpoint",
    breakpoint: "xl",
    icon: /* @__PURE__ */ l(G0, { className: "h-4 w-4" }),
    width: 1420
  },
  {
    title: "Large Desktop (2XL)",
    content: "Styles set here are applied at 1536px and up",
    breakpoint: "2xl",
    icon: /* @__PURE__ */ l(U0, { className: "h-4 w-4" }),
    width: 1920
  }
], Xa = ({
  canvas: t = !1,
  openDelay: e = 400,
  tooltip: n = !0,
  title: r,
  content: o,
  currentBreakpoint: s,
  breakpoint: i,
  width: a,
  icon: c,
  onClick: d,
  buttonClass: u = "",
  activeButtonClass: p = ""
}) => {
  const { t: f } = K();
  return n ? /* @__PURE__ */ b(H0, { openDelay: e, children: [
    /* @__PURE__ */ l(V0, { asChild: !0, children: /* @__PURE__ */ l(
      oe,
      {
        onClick: () => d(a),
        size: "sm",
        className: Ze("h-7 w-7 rounded-md p-1", i === s ? p : u),
        variant: "ghost",
        children: c
      }
    ) }),
    /* @__PURE__ */ l(eu, { className: "w-fit max-w-52 border-border", children: /* @__PURE__ */ l("div", { className: "flex justify-between space-x-4", children: /* @__PURE__ */ b("div", { className: "space-y-1", children: [
      /* @__PURE__ */ l("h4", { className: "text-sm font-semibold", children: f(r) }),
      t && /* @__PURE__ */ l("p", { className: "text-xs", children: f(o) })
    ] }) }) })
  ] }) : /* @__PURE__ */ l(
    oe,
    {
      onClick: () => d(a),
      size: "sm",
      className: "h-7 w-7 rounded-md p-1",
      variant: i === s ? "outline" : "ghost",
      children: c
    }
  );
}, K0 = ({
  openDelay: t = 400,
  canvas: e = !1,
  tooltip: n = !0,
  buttonClass: r = "",
  activeButtonClass: o = ""
}) => {
  const [s, , i] = bo(), [a, c] = Mi(), [d, u] = W0(), p = d, f = u, { t: h } = K(), m = G("breakpoints", Ds), g = (w) => {
    p.includes(w) ? p.length > 2 && f(p.filter((S) => S !== w)) : f((S) => [...S, w]);
  }, y = (w) => {
    e || i(w), c(w);
  }, x = Il(e ? a : s).toLowerCase();
  return m.length < 4 ? /* @__PURE__ */ l("div", { className: "flex items-center rounded-md", children: A(m, (w) => /* @__PURE__ */ un(
    Xa,
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
      m.filter((w) => Ie(p, qo(w.breakpoint))),
      (w) => /* @__PURE__ */ un(
        Xa,
        {
          canvas: e,
          openDelay: t,
          tooltip: n,
          ...w,
          onClick: y,
          key: w.breakpoint,
          currentBreakpoint: x,
          buttonClass: r,
          activeButtonClass: o
        }
      )
    ) }),
    /* @__PURE__ */ b(kn, { children: [
      /* @__PURE__ */ l(Cn, { asChild: !0, children: /* @__PURE__ */ l("span", { className: "cursor-pointer rounded-md p-1 hover:bg-background", children: /* @__PURE__ */ l(xn, { className: "scale-90 transform" }) }) }),
      /* @__PURE__ */ b(Ft, { className: "w-56 border-border text-xs", children: [
        /* @__PURE__ */ l(Fl, { children: h("Screen sizes") }),
        /* @__PURE__ */ l(zl, {}),
        A(m, (w) => /* @__PURE__ */ l(
          $l,
          {
            disabled: w.breakpoint === "xs",
            onCheckedChange: () => g(qo(w.breakpoint)),
            checked: Ie(p, qo(w.breakpoint)),
            onSelect: (S) => S.preventDefault(),
            children: h(w.title)
          },
          w.breakpoint
        ))
      ] })
    ] })
  ] });
};
function J0() {
  const [, t] = bo(), { t: e } = K(), n = D(() => {
    const r = Ds.find((o) => o.breakpoint === t);
    return (r == null ? void 0 : r.content) ?? "";
  }, [t, Ds]);
  return /* @__PURE__ */ b(Q, { children: [
    /* @__PURE__ */ b("div", { className: "sticky top-0 z-10 flex items-center justify-start bg-muted px-2 py-1 shadow-sm", children: [
      /* @__PURE__ */ b("p", { className: "text-xs text-muted-foreground", children: [
        e("Screen"),
        " "
      ] }),
      /* @__PURE__ */ l(K0, { openDelay: 1e3, tooltip: !1 })
    ] }),
    /* @__PURE__ */ l("div", { className: "mb-2 flex items-center justify-between rounded-md rounded-t-none border border-border p-1", children: /* @__PURE__ */ l("p", { className: "flex flex-1 items-center space-x-2 text-[10px] text-foreground", children: /* @__PURE__ */ b("span", { className: "text-xs text-foreground", children: [
      /* @__PURE__ */ l("span", { className: "rounded-md bg-muted px-1 py-px text-xs font-bold uppercase text-muted-foreground", children: t === "xs" ? "Base" : t }),
      "  ",
      e(n)
    ] }) }) })
  ] });
}
const tu = ({ className: t = "" }) => /* @__PURE__ */ l(Fp, { className: t });
function nu({
  from: t = "default",
  classFromProps: e,
  onAddNew: n,
  onRemove: r,
  showDesignTokenSuggestions: o = !0
}) {
  var Xn;
  const s = ne(null), [i, a] = $(""), [c, d] = $(!1), [u, p] = $(-1), f = ne(!1), h = w0(), { t: m } = K(), [g] = Fe(), y = ae(), x = Qd(), w = Hi(), [S] = re(), [v, k] = $(""), T = Ue(Er), C = (Xn = ye(g)) == null ? void 0 : Xn.prop, { classes: N } = vn(_(y, C, "")), B = (t === "default" ? N : e ?? "").split(" ").filter((U) => !F(U)), L = D(() => [...B].sort((U, pe) => {
    const Oe = U.startsWith(Dr), Tt = pe.startsWith(Dr);
    return Oe && !Tt ? -1 : !Oe && Tt ? 1 : 0;
  }), [B]), R = G("flags.copyPaste", !0), V = (U) => {
    const pe = U.startsWith(Dr), Oe = /* @__PURE__ */ l("div", { className: "group relative flex max-w-[260px] items-center", children: /* @__PURE__ */ b(
      "button",
      {
        onDoubleClick: () => {
          k(J(U)), t === "default" ? w(S, [U], !0) : (Zt(r) && r(U), k(U)), setTimeout(() => {
            s.current && s.current.focus();
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
    if (U.startsWith(Dr)) {
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
    if (ze && o && (pe === "" ? Yo = Object.entries(T).map(([Ht, qn]) => ({
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
    const Mu = [...Yo, ...A(Tt, "item")];
    return fe(Mu);
  }, Te = () => {
    fe([]);
  }, ut = (U) => U.name, Tn = (U) => /* @__PURE__ */ b("div", { className: "flex items-center gap-2 rounded-md p-1", children: [
    U.isDesignToken && /* @__PURE__ */ l(tu, { className: "h-4 w-4 text-gray-600" }),
    /* @__PURE__ */ l("span", { children: U.name })
  ] }), In = D(
    () => ({
      ref: s,
      autoComplete: "off",
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: !1,
      placeholder: `${m(o ? "Enter classes separated by space or design tokens" : "Enter classes separated by space")}`,
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
    [v, m, s, we.length]
  ), zt = (U) => {
    const pe = i.trim().replace(/ +(?= )/g, "").split(" ").map(q);
    w(S, [U], !0), x(S, pe, !0), a(""), p(-1);
  }, Yi = () => {
    if (navigator.clipboard === void 0) {
      Ce.error(m("Clipboard not supported"));
      return;
    }
    navigator.clipboard.writeText(B.join(" ")), Ce.success(m("Classes copied to clipboard")), d(!0), setTimeout(() => d(!1), 2e3);
  };
  return /* @__PURE__ */ b(
    "div",
    {
      className: `flex w-full flex-col gap-y-1.5 pb-4 ${t === "designToken" ? "border-none" : "border-b border-border"}`,
      children: [
        /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-x-2", children: /* @__PURE__ */ l("div", { className: "flex w-full items-center justify-between gap-x-2 text-muted-foreground", children: /* @__PURE__ */ b("span", { className: "flex items-center gap-x-1", children: [
          /* @__PURE__ */ l("span", { children: m("Classes") }),
          R && /* @__PURE__ */ b(Ne, { children: [
            /* @__PURE__ */ l(Se, { asChild: !0, children: c ? /* @__PURE__ */ l(Nr, { className: "rounded-full border border-green-500 bg-green-500/10 text-green-500" }) : /* @__PURE__ */ l(js, { onClick: Yi, className: "cursor-pointer" }) }),
            /* @__PURE__ */ l(be, { children: /* @__PURE__ */ l("p", { children: m("Copy classes to clipboard") }) })
          ] })
        ] }) }) }),
        /* @__PURE__ */ b("div", { className: "relative flex items-center gap-x-3", children: [
          /* @__PURE__ */ l("div", { className: "relative flex w-full items-center gap-x-3", children: /* @__PURE__ */ l(
            Of,
            {
              suggestions: we,
              onSuggestionsFetchRequested: Y,
              onSuggestionsClearRequested: Te,
              getSuggestionValue: ut,
              renderSuggestion: Tn,
              inputProps: In,
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
            oe,
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
              ref: s,
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
const De = ["px", "%", "em", "rem", "ch", "vh", "vw"], Y0 = {
  heading: "flex.heading",
  items: [
    { type: "arbitrary", label: "flex.basis", units: De, property: "flexBasis" },
    { type: "range", label: "flex.order", property: "order" },
    { type: "dropdown", label: "flex.flex", property: "flexGrowShrink" },
    { type: "dropdown", label: "flex.grow", property: "flexGrow" },
    { type: "dropdown", label: "flex.shrink", property: "flexShrink" }
  ]
}, X0 = {
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
}, q0 = [
  {
    heading: "Styles",
    items: [
      { component: nu },
      { component: J0 },
      { type: "arbitrary", label: "layout.width", units: De.concat("auto"), property: "width" },
      { type: "arbitrary", label: "layout.height", units: De.concat("auto"), property: "height" },
      {
        styleType: "multiple",
        label: "layout.margin",
        negative: !0,
        units: [...De, "auto"],
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
          { type: "arbitrary", property: "fontSize", label: "typography.size", units: De },
          { type: "arbitrary", property: "lineHeight", label: "typography.height", units: De.concat("-") },
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
De.concat("auto"), De.concat("auto"), [...De], De.concat("auto"), De.concat("auto"), De.concat("auto"), De.concat("auto"), De.concat("-");
const Z0 = {
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
function qa() {
  const { flexChild: t, gridChild: e } = sh(), [n] = Fe(), [r, o] = te.useState(""), [s, i] = te.useState({
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
      const u = !_(s, "negative", !1), p = _(s, "cssProperty", "");
      let f = parseFloat(s.dragStartValue);
      f = isNaN(f) ? 0 : f;
      let h = Z0[s.dragUnit];
      (Re(p, "scale") || p === "opacity") && (h = 10);
      let g = (s.dragStartY - d.pageY) / h + f;
      u && g < 0 && (g = 0), p === "opacity" && g > 1 && (g = 1), s.onDrag(`${g}`), o(`${g}`);
    },
    [s],
    50
  ), c = I(() => {
    setTimeout(() => s.onDragEnd(`${r}`), 100), i({
      onDrag: (d) => d,
      onDragEnd: (d) => d,
      dragStartY: 0,
      dragging: !1,
      dragStartValue: 0,
      dragUnit: "",
      negative: !1,
      cssProperty: ""
    });
  }, [s, r, i]);
  return F(n) ? null : /* @__PURE__ */ b(Xd.Provider, { value: { setDragData: i }, children: [
    s.dragging ? /* @__PURE__ */ l(
      "div",
      {
        onMouseMove: a,
        onMouseUp: () => c(),
        className: "absolute inset-0 z-30 cursor-row-resize bg-gray-300/10"
      }
    ) : null,
    /* @__PURE__ */ b("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ l(a0, {}),
      /* @__PURE__ */ b(r0, { defaultValue: ["Styles"], type: "multiple", className: "w-full", children: [
        t && /* @__PURE__ */ l(hs, { section: Y0, showAccordian: t || e }),
        e && /* @__PURE__ */ l(hs, { section: X0, showAccordian: t || e }),
        q0.map((d) => /* @__PURE__ */ l(hs, { section: d, showAccordian: t || e }, d.heading))
      ] })
    ] })
  ] });
}
const xo = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ b(sn.Root, { ref: r, className: j("relative overflow-hidden", t), ...n, children: [
  /* @__PURE__ */ l(sn.Viewport, { className: "h-full w-full rounded-[inherit]", children: e }),
  /* @__PURE__ */ l(ru, {}),
  /* @__PURE__ */ l(sn.Corner, {})
] }));
xo.displayName = sn.Root.displayName;
const ru = W.forwardRef(({ className: t, orientation: e = "vertical", ...n }, r) => /* @__PURE__ */ l(
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
ru.displayName = sn.ScrollAreaScrollbar.displayName;
const ji = wn.Root, Wo = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
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
const Q0 = ({
  block: t,
  disabled: e,
  parentId: n,
  position: r
}) => {
  const { type: o, icon: s, label: i, disabledReason: a } = t, c = e || t.disabled, { addCoreBlock: d, addPredefinedBlock: u } = Nn(), p = () => {
    if (ce(t, "blocks")) {
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
        onDragStart: (y) => !c && m(y, { ...t, label: i, icon: s }),
        onDragEnd: g,
        draggable: f && !c,
        className: `${cl(`chai-block-${o}`)} ${f && !c ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"} space-y-2 rounded-lg border border-border p-3 text-center hover:bg-slate-300/50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 dark:border-gray-700 dark:text-white dark:hover:bg-slate-800/50 dark:disabled:bg-gray-900 dark:disabled:text-foreground ${c ? "opacity-50" : ""}`,
        children: [
          un(s || So, { className: "w-4 h-4 mx-auto", "data-add-core-block-icon": o }),
          /* @__PURE__ */ l("p", { className: "truncate text-xs", children: $n(h(i || o)) })
        ]
      }
    ) }),
    /* @__PURE__ */ l(be, { children: /* @__PURE__ */ l("p", { children: c && a ? a : h(i || o) }) })
  ] }) });
}, ev = ({
  parentId: t,
  position: e,
  gridCols: n = "grid-cols-2",
  disableBlockGroupsSidebar: r = !1
}) => {
  const o = Js(), s = dl(o, "category"), i = Fs(A(s.core, "group"));
  return /* @__PURE__ */ l(
    pu,
    {
      gridCols: n,
      parentId: t,
      position: e,
      groups: i,
      blocks: s.core,
      disableBlockGroupsSidebar: r
    }
  );
}, ou = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l("div", { ref: n, className: j("rounded-xl border bg-card text-card-foreground shadow", t), ...e }));
ou.displayName = "Card";
const su = W.forwardRef(
  ({ className: t, ...e }, n) => /* @__PURE__ */ l("div", { ref: n, className: j("flex flex-col space-y-1.5 p-6", t), ...e })
);
su.displayName = "CardHeader";
const tv = W.forwardRef(
  ({ className: t, ...e }, n) => /* @__PURE__ */ l("div", { ref: n, className: j("font-semibold leading-none tracking-tight", t), ...e })
);
tv.displayName = "CardTitle";
const iu = W.forwardRef(
  ({ className: t, ...e }, n) => /* @__PURE__ */ l("div", { ref: n, className: j("text-sm text-muted-foreground", t), ...e })
);
iu.displayName = "CardDescription";
const au = W.forwardRef(
  ({ className: t, ...e }, n) => /* @__PURE__ */ l("div", { ref: n, className: j("p-6 pt-0", t), ...e })
);
au.displayName = "CardContent";
const lu = W.forwardRef(
  ({ className: t, ...e }, n) => /* @__PURE__ */ l("div", { ref: n, className: j("flex items-center p-6 pt-0", t), ...e })
);
lu.displayName = "CardFooter";
const nv = Ys(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), bn = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  Ml.Root,
  {
    ref: n,
    className: j(nv(), t),
    ...e
  }
));
bn.displayName = Ml.Root.displayName;
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
const rv = ({
  parentId: t,
  position: e,
  fromSidebar: n
}) => {
  const { t: r } = K(), [o, s] = $(""), { addPredefinedBlock: i } = Nn(), [a, c] = $(!1), d = async () => {
    c(!0);
    const u = await op(o), p = fr(u);
    i([...p], t, e), s(""), c(!1), me.publish(se.CLOSE_ADD_BLOCK);
  };
  return /* @__PURE__ */ b(ou, { className: `border-border/0 p-0 shadow-none ${n ? "w-full" : "max-w-full"}`, children: [
    /* @__PURE__ */ l(su, { className: n ? "p-0" : "p-3", children: /* @__PURE__ */ l(iu, { className: n ? "text-xs" : "", children: r("Use HTML snippets from Tailwind CSS component libraries") }) }),
    /* @__PURE__ */ l(au, { className: `space-y-2 py-0 ${n ? "p-0" : "px-3"}`, children: /* @__PURE__ */ b("div", { className: "space-y-1", children: [
      /* @__PURE__ */ l(bn, { htmlFor: "current", className: "text-sm", children: r("Tailwind HTML snippet") }),
      /* @__PURE__ */ l(
        Go,
        {
          onChange: (u) => s(u.target.value),
          rows: 12,
          value: o,
          placeholder: r("Enter your code snippet here"),
          className: "resize-none overflow-x-auto whitespace-pre bg-background font-mono text-xs font-normal"
        }
      )
    ] }) }),
    /* @__PURE__ */ l(lu, { className: "flex flex-col justify-end p-3", children: /* @__PURE__ */ l(oe, { disabled: o.trim() === "" || a, onClick: () => d(), size: "sm", className: "w-fit", children: a ? /* @__PURE__ */ b(Q, { children: [
      /* @__PURE__ */ l(ml, { className: "mr-2 h-4 w-4 animate-spin" }),
      " ",
      r("Importing...")
    ] }) : r("Import HTML") }) })
  ] });
}, Wi = _e.Root, Gi = _e.Value, Uo = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ b(
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
const cu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  _e.ScrollUpButton,
  {
    ref: n,
    className: j("flex cursor-default items-center justify-center py-1", t),
    ...e,
    children: /* @__PURE__ */ l(zp, { className: "h-4 w-4" })
  }
));
cu.displayName = _e.ScrollUpButton.displayName;
const du = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  _e.ScrollDownButton,
  {
    ref: n,
    className: j("flex cursor-default items-center justify-center py-1", t),
    ...e,
    children: /* @__PURE__ */ l(xn, { className: "h-4 w-4" })
  }
));
du.displayName = _e.ScrollDownButton.displayName;
const Ko = W.forwardRef(({ className: t, children: e, position: n = "popper", ...r }, o) => /* @__PURE__ */ l(_e.Portal, { children: /* @__PURE__ */ b(
  _e.Content,
  {
    ref: o,
    className: j(
      "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] origin-[--radix-select-content-transform-origin] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      t
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ l(cu, {}),
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
      /* @__PURE__ */ l(du, {})
    ]
  }
) }));
Ko.displayName = _e.Content.displayName;
const ov = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(_e.Label, { ref: n, className: j("px-2 py-1.5 text-sm font-semibold", t), ...e }));
ov.displayName = _e.Label.displayName;
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
const sv = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(_e.Separator, { ref: n, className: j("-mx-1 my-1 h-px bg-muted", t), ...e }));
sv.displayName = _e.Separator.displayName;
const iv = ({
  defaultValue: t = "",
  onValueChange: e,
  options: n,
  placeholder: r = "Select",
  className: o = "",
  height: s = ""
}) => {
  const [i, a] = $(t), c = (d) => {
    const u = d.target.value;
    a(u), e(u);
  };
  return /* @__PURE__ */ l("div", { className: Ze("relative inline-block w-full", o), children: /* @__PURE__ */ b(
    "select",
    {
      className: Ze(
        "mt-1 flex w-full rounded-md border border-border bg-background px-3 py-1 text-sm text-foreground shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        s
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
function av({
  uiLibraries: t,
  library: e,
  setLibrary: n
}) {
  const { t: r } = K();
  return e ? /* @__PURE__ */ b("div", { className: "h-12", children: [
    /* @__PURE__ */ l("p", { className: "text-xs font-bold text-gray-500", children: r("Choose library") }),
    /* @__PURE__ */ l(
      iv,
      {
        className: "mb-1",
        options: t.map((o) => ({
          value: o.id,
          label: o.name
        })),
        defaultValue: e,
        onValueChange: (o) => n(o)
      }
    )
  ] }) : null;
}
const lv = P({}), cv = (t) => {
  const [e, n] = M(lv), r = D(() => (t == null ? void 0 : t.getBlocksList) || (() => []), [t]), o = _(e, `${t == null ? void 0 : t.id}.blocks`, null), s = _(e, `${t == null ? void 0 : t.id}.loading`, "idle"), i = _(e, `${t == null ? void 0 : t.id}.error`, !1), a = ne("idle");
  z(() => {
    (async () => {
      if (t && !(s === "complete" || a.current === "loading")) {
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
  }, [t, o, s, a, n, r]);
  const c = I(
    (d) => {
      n((u) => ({ ...u, [d]: { loading: "idle", blocks: [], error: !1 } }));
    },
    [n]
  );
  return { data: o || [], isLoading: s === "loading", isError: i, resetLibrary: c };
}, dv = () => M(bi), uv = ({
  block: t,
  html: e,
  blocks: n,
  children: r,
  onDragStart: o,
  onDragEnd: s,
  draggable: i,
  className: a = "",
  type: c = "Box"
}) => {
  const { onDragStart: d, onDragEnd: u } = Jn(), p = bt(), [, f] = re(), { clearHighlight: h } = At(), m = i !== void 0 ? i : p;
  return /* @__PURE__ */ l(
    "div",
    {
      draggable: m,
      onDragStart: async (x) => {
        try {
          if (o) {
            o(x);
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
        s ? s(x) : u();
      },
      className: `${m ? "cursor-grab active:cursor-grabbing" : ""} ${a}`.trim(),
      children: r
    }
  );
};
function uu({ value: t, setValue: e }) {
  const { t: n } = K();
  return /* @__PURE__ */ l("div", { className: "flex py-2", children: /* @__PURE__ */ b("div", { className: "relative flex w-full max-w-md items-center rounded border px-2", children: [
    /* @__PURE__ */ b("div", { className: "flex w-full items-center gap-x-2", children: [
      /* @__PURE__ */ l(xl, { className: "h-5 w-5 flex-shrink-0 stroke-[1px] text-muted-foreground" }),
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
const Za = ({
  block: t,
  library: e,
  parentId: n = void 0,
  position: r = -1
}) => {
  const [o, s] = $(!1), i = D(() => (e == null ? void 0 : e.getBlock) || (() => []), [e]), { addCoreBlock: a, addPredefinedBlock: c } = Nn(), d = _(t, "name", _(t, "label")), u = _(t, "description", ""), { onDragStart: p, onDragEnd: f } = Jn(), h = bt(), m = I(
    async (y) => {
      if (y.stopPropagation(), ce(t, "component")) {
        a(t, n, r), me.publish(se.CLOSE_ADD_BLOCK);
        return;
      }
      s(!0);
      let x = await i({ library: e, block: t });
      typeof x == "string" && (x = fr(x)), F(x) || c(Eo(x), n, r), me.publish(se.CLOSE_ADD_BLOCK), setTimeout(() => s(!1), 1e3);
    },
    [a, c, t, i, e, n, r]
  );
  return /* @__PURE__ */ b(Ne, { children: [
    /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(uv, { draggable: h, onDragStart: async (y) => {
      if (!h) return;
      let x = await i({ library: e, block: t });
      typeof x == "string" && (x = fr(x)), p(y, { type: "Box", blocks: x, name: d }, !0);
    }, onDragEnd: f, children: /* @__PURE__ */ b(
      "div",
      {
        onClick: o ? () => {
        } : m,
        className: Ef(
          "relative mt-2 overflow-hidden rounded-md border border-border duration-200 hover:border-blue-500 hover:shadow-xl",
          h ? "" : "cursor-pointer"
        ),
        children: [
          o && /* @__PURE__ */ b("div", { className: "absolute flex h-full w-full items-center justify-center bg-black/70", children: [
            /* @__PURE__ */ l(Gs, { className: "h-4 w-4 animate-spin text-white" }),
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
}, pv = ({
  parentId: t,
  position: e,
  fromSidebar: n
}) => {
  const [r, o] = dv(), s = pl(), i = s.find((R) => R.id === r) || ye(s), { data: a, isLoading: c, isError: d, resetLibrary: u } = cv(i), [p, f] = $(""), [h, m] = $([]), g = ne(null);
  z(() => {
    a && Array.isArray(a) && a.length > 0 && (g.current = new Ol(a, {
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
  const y = p.trim() && !F(h) ? h : a || [], x = dl(y, "group"), [w, S] = $(null);
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
  const B = Z(v, (R, V) => V % 2 === 0), L = Z(v, (R, V) => V % 2 === 1);
  return /* @__PURE__ */ l(Q, { children: /* @__PURE__ */ b("div", { className: "flex h-full max-h-full flex-col", children: [
    /* @__PURE__ */ l(uu, { value: p, setValue: f }),
    /* @__PURE__ */ l("div", { className: "relative flex h-full max-h-full flex-1 overflow-hidden bg-background", children: /* @__PURE__ */ b("div", { className: `flex h-full flex-1 pt-2 ${n ? "flex-col" : ""}`, children: [
      /* @__PURE__ */ b(
        "div",
        {
          className: `flex max-h-full min-w-60 flex-col gap-1 ${n ? "pb-2" : "w-60 max-w-60 px-1 pr-2"}`,
          children: [
            /* @__PURE__ */ l(av, { library: i == null ? void 0 : i.id, setLibrary: o, uiLibraries: s }),
            /* @__PURE__ */ b("div", { className: "mt-2 flex h-full max-h-full w-full flex-1 flex-col", children: [
              /* @__PURE__ */ l("span", { className: "text-xs font-bold text-gray-500", children: T("Groups") }),
              !n && /* @__PURE__ */ l("hr", { className: "mt-1 border-border" }),
              /* @__PURE__ */ l(
                "div",
                {
                  className: `no-scrollbar mt-2 h-full max-h-full flex-1 overflow-y-auto ${n ? "" : "pb-20"}`,
                  children: F(x) ? /* @__PURE__ */ l("div", { className: "mt-4 flex flex-col items-center justify-center gap-3 p-4 text-center", children: p ? /* @__PURE__ */ l("p", { className: "text-sm", children: T("No matching blocks found") }) : d ? /* @__PURE__ */ b(Q, { children: [
                    /* @__PURE__ */ l("p", { className: "text-sm", children: T("Failed to load the UI library. Try again") }),
                    /* @__PURE__ */ b(oe, { onClick: E, variant: "outline", size: "sm", className: "gap-2", children: [
                      /* @__PURE__ */ l(Gs, { className: "h-4 w-4" }),
                      T("Retry")
                    ] })
                  ] }) : /* @__PURE__ */ l("p", { className: "text-sm", children: T("This library is empty") }) }) : n ? /* @__PURE__ */ b(Wi, { value: w ?? "", onValueChange: S, children: [
                    /* @__PURE__ */ l(Uo, { className: "w-full", children: /* @__PURE__ */ l(Gi, { placeholder: T("Select a group") }) }),
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
                        /* @__PURE__ */ l(Hp, { className: "ml-2 h-5 w-5" })
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
              /* @__PURE__ */ l("div", { className: "flex flex-col gap-1", children: B.map((R, V) => /* @__PURE__ */ l(
                Za,
                {
                  parentId: t,
                  position: e,
                  block: R,
                  library: i
                },
                `block-${V}`
              )) }),
              /* @__PURE__ */ l("div", { className: "flex flex-col gap-1", children: L.map((R, V) => /* @__PURE__ */ l(
                Za,
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
}, fv = ({
  parentId: t,
  position: e,
  fromSidebar: n
}) => /* @__PURE__ */ l(pv, { parentId: t, position: e, fromSidebar: n }), hv = P({
  blocks: [],
  groups: [],
  isLoading: !0,
  error: null
}), mv = P(!1), Qa = (t) => {
  if (!t) return "";
  let e = t.replace(/[-_]/g, " ");
  return e = e.replace(/([a-z])([A-Z])/g, "$1 $2"), e.split(" ").map((n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()).join(" ");
}, gv = ({
  parentId: t,
  position: e,
  gridCols: n = "grid-cols-2",
  disableBlockGroupsSidebar: r = !1
}) => {
  const { data: o, isLoading: s, refetch: i, error: a } = sc(), [c, d] = M(hv), [u, p] = M(mv), f = ic();
  z(() => {
    if (!u || Object.keys(c.blocks).length === 0)
      if (a)
        d({
          blocks: [],
          groups: [],
          isLoading: !1,
          error: a
        }), p(!0);
      else if (!s && Object.keys(o || {}).length > 0) {
        const g = Object.entries(o).map(([x, w]) => {
          const S = w, v = S.type || "partial", k = Qa(v);
          return {
            type: "PartialBlock",
            // Set the type to PartialBlock
            label: Qa(S.name || x),
            description: S.description || "",
            icon: Vp,
            group: k,
            // Use formatted type as group
            category: "partial",
            partialBlockId: x,
            // Store the original ID as partialBlockId
            _name: S.name
          };
        }), y = Fs(A(g, "group"));
        d({
          blocks: g,
          groups: y,
          isLoading: !1,
          error: null
        }), p(!0);
      } else s ? d((g) => ({ ...g, isLoading: !0, error: null })) : !s && Object.keys(o || {}).length === 0 && (d({
        blocks: [],
        groups: [],
        isLoading: !1,
        error: "No partial blocks available"
      }), p(!0));
  }, [
    s,
    o,
    u,
    p,
    d,
    c.blocks,
    a
  ]);
  const h = () => {
    d((g) => ({ ...g, isLoading: !0, error: null })), p(!1), i();
  }, m = D(() => c.blocks.map((g) => {
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
    pu,
    {
      gridCols: n,
      parentId: t,
      position: e,
      groups: c.groups,
      blocks: m,
      disableBlockGroupsSidebar: r
    }
  );
}, el = ["basic", "typography", "media", "layout", "form", "advanced", "other"], pu = ({
  groups: t,
  blocks: e,
  parentId: n,
  position: r,
  gridCols: o = "grid-cols-4",
  disableBlockGroupsSidebar: s
}) => {
  var L;
  const { t: i } = K(), [a] = le(), [c, d] = $(""), u = ne(null), [p] = M(fu), f = (L = ee(a, (R) => R._id === n)) == null ? void 0 : L._type, [h, m] = $("all"), [g, y] = $(null), x = ne(null), w = G("flags.dragAndDrop", !0);
  z(() => {
    const R = setTimeout(() => {
      var V;
      (V = u.current) == null || V.focus();
    }, 0);
    return () => clearTimeout(R);
  }, [p]), z(() => {
    c && (m("all"), y(null));
  }, [c]), z(() => (x.current = zs((R) => {
    m(R);
  }, 500), () => {
    x.current && x.current.cancel();
  }), []);
  const S = I((R) => {
    y(R), x.current && x.current(R);
  }, []), v = I(() => {
    y(null), x.current && x.current.cancel();
  }, []), k = I((R) => {
    x.current && x.current.cancel(), m(R), y(null);
  }, []), T = D(
    () => c ? Lt(e).filter(
      (R) => {
        var V, J;
        return (((V = R.label) == null ? void 0 : V.toLowerCase()) + " " + ((J = R.type) == null ? void 0 : J.toLowerCase())).includes(c.toLowerCase());
      }
    ) : e,
    [e, c]
  ), C = D(
    () => c ? t.filter(
      (R) => Ur(Z(Lt(T), { group: R }), { hidden: !0 }).length > 0
    ) : t.filter((R) => Ur(Z(Lt(e), { group: R }), { hidden: !0 }).length > 0),
    [e, T, t, c]
  ), N = D(
    () => Zu(C, (R) => el.indexOf(R) === -1 ? 99 : el.indexOf(R)),
    [C]
  ), E = D(() => h === "all" ? T : Z(Lt(T), { group: h }), [T, h]), B = D(() => h === "all" ? N : [h], [N, h]);
  return /* @__PURE__ */ b("div", { className: "mx-auto flex h-full w-full flex-col", children: [
    /* @__PURE__ */ l(uu, { value: c, setValue: d }),
    /* @__PURE__ */ b("div", { className: "sticky top-10 flex h-[calc(100%-48px)] overflow-hidden pt-2", children: [
      !s && N.length > 0 && /* @__PURE__ */ l("div", { className: "w-1/4 min-w-[120px] border-r border-border", children: /* @__PURE__ */ l(xo, { className: "h-full", children: /* @__PURE__ */ b("div", { className: "space-y-1", children: [
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
          className: `h-full flex-1 overflow-hidden ${!s && N.length > 0 ? "w-3/4" : "w-full"}`,
          children: /* @__PURE__ */ l(xo, { id: "add-blocks-scroll-area", className: "no-scrollbar h-full", children: C.length === 0 && c ? /* @__PURE__ */ l("div", { className: "flex flex-col items-center justify-center p-8 text-center text-muted-foreground", children: /* @__PURE__ */ b("p", { children: [
            i("No blocks found matching"),
            ' "',
            c,
            '"'
          ] }) }) : /* @__PURE__ */ l("div", { className: `${s ? "p-0" : "p-4"} space-y-6`, children: B.map((R, V) => /* @__PURE__ */ b("div", { className: "space-y-3", children: [
            /* @__PURE__ */ l("h3", { className: "px-1 text-sm font-medium", children: $n(i(R.toLowerCase())) }),
            /* @__PURE__ */ l("div", { className: "grid gap-2 " + o, children: Ur(
              h === "all" ? Z(Lt(E), { group: R }) : Lt(E),
              { hidden: !0 }
            ).map((J, q) => /* @__PURE__ */ l(
              Q0,
              {
                parentId: n,
                position: r,
                block: J,
                disabled: !w && (!mt(f, J.type) || !Xf(f, J.type))
              },
              J.type + "-" + V + "-" + q
            )) })
          ] }, R)) }) })
        }
      )
    ] })
  ] });
}, fu = Et("__add_block_tab", "library"), hu = ({
  className: t,
  showHeading: e = !0,
  parentId: n = void 0,
  position: r = -1,
  fromSidebar: o = !1
}) => {
  const { t: s } = K(), [i, a] = M(fu), [, c] = M(cc), d = G("flags.importHtml", !0), { data: u } = sc(), p = Object.keys(u || {}).length > 0, { hasPermission: f } = gt();
  z(() => {
    i === "partials" && !p && a("library");
  }, [i, p, a]);
  const h = I(() => {
    me.publish(se.CLOSE_ADD_BLOCK);
  }, []), m = sp(), g = d && f(Be.IMPORT_HTML), x = pl().length > 0;
  return z(() => {
    i === "library" && !x && a("core");
  }, [i, x, a]), /* @__PURE__ */ b("div", { className: Ze("flex h-full w-full flex-col overflow-hidden", t), children: [
    e ? /* @__PURE__ */ b("div", { className: "mb-2 flex flex-col justify-between rounded-md bg-background/30 p-1", children: [
      /* @__PURE__ */ l("h1", { className: "flex flex-col items-baseline px-1 text-xl font-semibold xl:flex-col", children: s("Add block") }),
      /* @__PURE__ */ l("span", { className: "p-0 text-xs font-light leading-3 opacity-80 xl:pl-1", children: s(i === "html" ? "Enter or paste TailwindCSS HTML snippet" : "Click to add block to page") })
    ] }) : null,
    /* @__PURE__ */ b(
      ji,
      {
        onValueChange: (w) => {
          c(""), a(w);
        },
        value: i,
        className: "flex h-full max-h-full flex-col overflow-hidden",
        children: [
          /* @__PURE__ */ b(Wo, { className: `flex items-center ${o ? "h-max w-max justify-start p-1" : "w-full"}`, children: [
            x && /* @__PURE__ */ l(lt, { value: "library", className: o ? "h-5 px-2 text-xs" : "", children: s("Library") }),
            /* @__PURE__ */ l(lt, { value: "core", className: o ? "h-5 px-2 text-xs" : "", children: s("Blocks") }),
            p && /* @__PURE__ */ l(lt, { value: "partials", className: o ? "h-5 px-2 text-xs" : "", children: s("Partials") }),
            g ? /* @__PURE__ */ l(lt, { value: "html", className: o ? "h-5 px-2 text-xs" : "", children: s("Import") }) : null,
            A(m, (w) => /* @__PURE__ */ l(
              lt,
              {
                value: w.id,
                className: o ? "h-5 px-2 text-xs" : "",
                children: te.createElement(w.tab)
              },
              `tab-add-block-${w.id}`
            ))
          ] }),
          /* @__PURE__ */ l(jt, { value: "core", className: "h-full max-h-full flex-1 pb-20", children: /* @__PURE__ */ l("div", { className: "h-full max-h-full overflow-hidden", children: /* @__PURE__ */ l("div", { className: "h-full w-full", children: /* @__PURE__ */ l(
            ev,
            {
              gridCols: o ? "grid-cols-2" : "grid-cols-4",
              parentId: n,
              position: r,
              disableBlockGroupsSidebar: o
            }
          ) }) }) }),
          x && /* @__PURE__ */ l(jt, { value: "library", className: "h-full max-h-full flex-1 pb-20", children: /* @__PURE__ */ l(fv, { fromSidebar: o, parentId: n, position: r }) }),
          p && /* @__PURE__ */ l(jt, { value: "partials", className: "h-full max-h-full flex-1 pb-20", children: /* @__PURE__ */ l("div", { className: "h-full max-h-full overflow-hidden", children: /* @__PURE__ */ l("div", { className: "h-full w-full", children: /* @__PURE__ */ l(
            gv,
            {
              gridCols: o ? "grid-cols-2" : "grid-cols-4",
              parentId: n,
              position: r,
              disableBlockGroupsSidebar: o
            }
          ) }) }) }),
          g ? /* @__PURE__ */ l(jt, { value: "html", className: "h-full max-h-full flex-1 pb-20 ", children: /* @__PURE__ */ l(rv, { parentId: n, position: r, fromSidebar: o }) }) : null,
          A(m, (w) => /* @__PURE__ */ l(jt, { value: w.id, children: te.createElement(w.tabContent, { close: h, parentId: n, position: r }) }, `panel-add-block-${w.id}`))
        ]
      }
    )
  ] });
}, bv = {
  display: "flex",
  alignItems: "center",
  zIndex: 1
}, yv = te.memo(function({ top: e, left: n, indent: r }) {
  const o = {
    position: "absolute",
    pointerEvents: "none",
    top: e - 1 + "px",
    left: "0px",
    right: 0,
    paddingLeft: n + r + "px"
  };
  return /* @__PURE__ */ b("div", { style: { ...bv, ...o }, children: [
    /* @__PURE__ */ l("div", { className: "h-1 w-1 rounded-full bg-green-500" }),
    /* @__PURE__ */ l("div", { className: "h-[1px] flex-1 rounded-[1px] border-t border-green-500" })
  ] });
}), xv = [
  { key: "ArrowDown", command: "selectNext" },
  { key: "ArrowUp", command: "selectPrev" },
  { key: "ArrowLeft", command: "selectParent", when: "isLeaf || isClosed" },
  { key: "ArrowLeft", command: "close", when: "isOpen" },
  { key: "ArrowRight", command: "open", when: "isClosed" },
  { key: "ArrowRight", command: "selectNext", when: "isOpen" },
  { key: "Home", command: "selectFirst" },
  { key: "End", command: "selectLast" }
];
function vv(t) {
  t.firstNode && t.select(t.firstNode.id);
}
function wv(t) {
  t.lastNode && t.select(t.lastNode.id);
}
function kv(t) {
  const e = t.selectedNodes[0].next || t.firstNode;
  t.select(e.id);
}
function Cv(t) {
  const e = t.selectedNodes[0].prev || t.lastNode;
  t.select(e.id);
}
const Nv = (t, e) => {
  const n = t.selectedNodes[0], r = (n == null ? void 0 : n.parent) || null;
  r && e && t.select(r.id);
}, Sv = (t, e) => {
  const n = t.selectedNodes[0];
  n.isInternal && e && n.open();
}, Ev = (t, e) => {
  const n = t.selectedNodes[0];
  n.isInternal && e && n.close();
}, mu = Ke.Root, _v = Ke.Trigger, Av = Ke.Portal, gu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
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
gu.displayName = Ke.Overlay.displayName;
const Ui = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ b(Av, { children: [
  /* @__PURE__ */ l(gu, {}),
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
Ui.displayName = Ke.Content.displayName;
const Ki = ({ className: t, ...e }) => /* @__PURE__ */ l("div", { className: j("flex flex-col space-y-2 text-center sm:text-left", t), ...e });
Ki.displayName = "AlertDialogHeader";
const bu = ({ className: t, ...e }) => /* @__PURE__ */ l("div", { className: j("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t), ...e });
bu.displayName = "AlertDialogFooter";
const Ji = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(Ke.Title, { ref: n, className: j("text-lg font-semibold", t), ...e }));
Ji.displayName = Ke.Title.displayName;
const yu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(Ke.Description, { ref: n, className: j("text-sm text-muted-foreground", t), ...e }));
yu.displayName = Ke.Description.displayName;
const xu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(Ke.Action, { ref: n, className: j(fl(), t), ...e }));
xu.displayName = Ke.Action.displayName;
const vu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  Ke.Cancel,
  {
    ref: n,
    className: j(fl({ variant: "outline" }), "mt-2 sm:mt-0", t),
    ...e
  }
));
vu.displayName = Ke.Cancel.displayName;
const Tv = ({ children: t }) => {
  const { t: e } = K(), { setNewBlocks: n } = $e(), [, r] = re(), [, o] = Fe(), s = I(() => {
    n([]), r([]), o([]);
  }, [n]);
  return /* @__PURE__ */ l("div", { className: "flex items-center", children: /* @__PURE__ */ b(mu, { children: [
    /* @__PURE__ */ l(_v, { asChild: !0, children: t || /* @__PURE__ */ l(oe, { size: "sm", variant: "ghost", className: "flex items-center", children: /* @__PURE__ */ l(Sl, {}) }) }),
    /* @__PURE__ */ b(Ui, { className: "border-border", children: [
      /* @__PURE__ */ b(Ki, { children: [
        /* @__PURE__ */ l(Ji, { className: "text-foreground", children: e("Clear whole canvas?") }),
        /* @__PURE__ */ l(yu, { children: e("Are you sure you want to clear the page?") })
      ] }),
      /* @__PURE__ */ b(bu, { children: [
        /* @__PURE__ */ l(vu, { className: "text-foreground", children: e("Cancel") }),
        /* @__PURE__ */ l(xu, { onClick: s, children: e("Yes") })
      ] })
    ] })
  ] }) });
}, Iv = () => {
  const t = ae(), { t: e } = K(), [, n] = M(tc), r = hl(), o = () => {
    t && n({
      isOpen: !0,
      blockId: t._id
    });
  };
  return r ? /* @__PURE__ */ b(Ee, { className: "flex items-center gap-x-4 text-xs", onClick: o, children: [
    /* @__PURE__ */ l(Nr, { className: "h-4 w-4" }),
    " ",
    t != null && t._libBlockId ? e("Update library block") : e("Save to library")
  ] }) : null;
}, Bv = () => {
  const { t } = K(), e = ae(), n = _t();
  return /* @__PURE__ */ b(Ee, { onClick: () => {
    e && n([e._id], {
      _libBlockId: null
    });
  }, className: "flex items-center gap-x-4 text-xs", children: [
    /* @__PURE__ */ l(yl, { className: "h-4 w-4" }),
    " ",
    t("Unlink from library")
  ] });
}, tl = () => {
  const { t } = K(), [e] = re();
  return G("flags.exportCode", !1) ? /* @__PURE__ */ b(
    Ee,
    {
      className: "flex items-center gap-x-4 text-xs",
      onClick: () => me.publish(se.OPEN_EXPORT_CODE, e),
      children: [
        /* @__PURE__ */ l(jp, {}),
        " ",
        t("Export")
      ]
    }
  ) : null;
}, nl = ({ isFromBody: t = !1 }) => {
  const [e] = le(), [n] = re(), { pasteBlocks: r } = Ci(), [, o, s] = Bc(), { t: i } = K(), a = ae(), c = G("flags.copyPaste", !0), d = I(() => {
    var f;
    const p = (t ? (f = e == null ? void 0 : e.filter((h) => !(h != null && h._parent))) == null ? void 0 : f.map((h) => h == null ? void 0 : h._id) : n).map((h) => {
      const m = e.find((g) => g._id === h);
      return {
        id: h,
        data: m
      };
    });
    s(p.map((h) => h.id)) ? Ce.warning("Partial blocks detected. Clone partial blocks?", {
      cancel: {
        label: i("No"),
        onClick: () => {
          o(p.map((h) => h.id)), Ce.dismiss();
        }
      },
      action: {
        label: i("Yes"),
        onClick: () => {
          o(
            p.map((h) => h.id),
            !0
          ), Ce.dismiss();
        }
      },
      position: "top-center"
    }) : o(p.map((h) => h.id));
  }, [n, e, o, s]);
  return /* @__PURE__ */ b(Q, { children: [
    c && /* @__PURE__ */ b(
      Ee,
      {
        disabled: !Qs(a == null ? void 0 : a._type),
        onClick: d,
        className: "flex items-center gap-x-4 text-xs",
        children: [
          /* @__PURE__ */ l(js, {}),
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
          /* @__PURE__ */ l(Us, {}),
          " ",
          i("Paste")
        ]
      }
    )
  ] });
}, Rv = () => {
  const [t] = re(), [, e] = Po(), { t: n } = K(), r = G("flags.copyPaste", !0);
  return /* @__PURE__ */ l(Q, { children: r && /* @__PURE__ */ b(Ee, { className: "flex items-center gap-x-4 text-xs", onClick: () => e(t), children: [
    /* @__PURE__ */ l(Gp, {}),
    " ",
    n("Cut")
  ] }) });
}, Lv = () => {
  const [t] = re(), e = fi(), n = ae(), { t: r } = K();
  return /* @__PURE__ */ b(
    Ee,
    {
      disabled: !ei(n == null ? void 0 : n._type),
      className: "flex items-center gap-x-4 text-xs",
      onClick: () => e(t),
      children: [
        /* @__PURE__ */ l(Ws, {}),
        " ",
        r("Remove")
      ]
    }
  );
}, Pv = ({ node: t }) => {
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
}, Ov = ({ node: t }) => {
  const { t: e } = K(), [n] = re(), r = vi(), o = ae(), { hasPermission: s } = gt(), { librarySite: i } = G("flags", { librarySite: !1 }), a = bt(), c = I(() => {
    r(n);
  }, [n, r]), d = D(() => ce(o, "_libBlockId") && !F(o._libBlockId), [o == null ? void 0 : o._libBlockId]);
  return t === "BODY" ? /* @__PURE__ */ l(Ft, { side: "bottom", className: "border-border text-xs", children: s(Be.ADD_BLOCK) && /* @__PURE__ */ b(Q, { children: [
    /* @__PURE__ */ b(
      Ee,
      {
        disabled: !1,
        className: "flex items-center gap-x-4 text-xs",
        onClick: () => me.publish(se.OPEN_ADD_BLOCK, o),
        children: [
          /* @__PURE__ */ l(qe, { className: "h-3.5 w-3.5" }),
          " ",
          e("Add block")
        ]
      }
    ),
    s(Be.ADD_BLOCK) && /* @__PURE__ */ l(nl, { isFromBody: !0 }),
    /* @__PURE__ */ l(tl, {}),
    /* @__PURE__ */ l(
      Ee,
      {
        disabled: !1,
        onClick: (u) => u.preventDefault(),
        className: "flex items-center gap-x-4 text-xs",
        children: /* @__PURE__ */ l(
          Tv,
          {
            children: /* @__PURE__ */ b("div", { className: "flex items-center gap-x-4 text-xs", children: [
              /* @__PURE__ */ l(Sl, {}),
              " ",
              e("Clear canvas")
            ] })
          }
        )
      }
    )
  ] }) }) : /* @__PURE__ */ b(Ft, { side: "bottom", className: "border-border text-xs", children: [
    s(Be.ADD_BLOCK) && /* @__PURE__ */ b(Q, { children: [
      !a && /* @__PURE__ */ b(
        Ee,
        {
          disabled: !so(o == null ? void 0 : o._type),
          className: "flex items-center gap-x-4 text-xs",
          onClick: () => me.publish(se.OPEN_ADD_BLOCK, o),
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
          disabled: !Qs(o == null ? void 0 : o._type),
          className: "flex items-center gap-x-4 text-xs",
          onClick: c,
          children: [
            /* @__PURE__ */ l(Wp, {}),
            " ",
            e("Duplicate")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ l(Pv, { node: t }),
    s(Be.MOVE_BLOCK) && /* @__PURE__ */ l(Rv, {}),
    s(Be.ADD_BLOCK) && /* @__PURE__ */ l(nl, {}),
    d && i && /* @__PURE__ */ l(Bv, {}),
    s(Be.CREATE_LIBRARY_BLOCK) && i && /* @__PURE__ */ l(Iv, {}),
    /* @__PURE__ */ l(tl, {}),
    s(Be.DELETE_BLOCK) && /* @__PURE__ */ l(Lv, {})
  ] });
}, wu = ({ children: t, id: e, node: n }) => {
  const [, r] = re();
  return /* @__PURE__ */ l(Q, { children: /* @__PURE__ */ b(
    kn,
    {
      onOpenChange: (o) => {
        o && r([e]);
      },
      children: [
        /* @__PURE__ */ l(Cn, { children: t }),
        /* @__PURE__ */ l(Ov, { node: n })
      ]
    }
  ) });
}, rl = "h-3 w-3 flex-shrink-0", ku = (t) => {
  const e = Js(), n = _(e, [t.type, "icon"]);
  return n ? te.createElement(n, { className: rl }) : /* @__PURE__ */ l(So, { className: rl });
}, Mv = () => {
  const [t] = M(Gn), [e] = M(ni), [n] = M(ri), [r] = M(oi), [o] = M(Wl), [s] = M(Gl), [i] = M(Ul);
  return {
    errors: t,
    isValid: e,
    hasErrors: n,
    hasWarnings: r,
    errorCount: o,
    warningCount: s,
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
}, Dv = ({ node: t }) => {
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
}, $v = P(null), ms = (t) => {
  var e;
  return t != null && t._name ? t._name : (t == null ? void 0 : t._type) === "Box" && (t != null && t.tag) && (t == null ? void 0 : t.tag) !== "div" ? Kt(t.tag) : ((e = t == null ? void 0 : t._type) == null ? void 0 : e.split("/").pop()) || "";
}, Fv = (t, e) => t.length > e ? t.substring(0, e) + "..." : t, zv = kr(({ node: t, style: e, dragHandle: n }) => {
  var fe, ze;
  const { t: r } = K(), o = _t(), [s] = M(Lo);
  let i = null;
  const a = t.children && t.children.length > 0, { highlightBlock: c, clearHighlight: d } = At(), u = bt(), { id: p, data: f, isSelected: h, willReceiveDrop: m, isDragging: g, isEditing: y, handleClick: x } = t, w = Mv(), S = D(() => w.getBlockErrors(p), [w, p]), v = _(f, "_show", !0), k = (Y) => {
    Y.stopPropagation(), v && t.toggle();
  }, T = (Y) => {
    Y.isInternal && (i = Y.isOpen, Y.isOpen && Y.close());
  }, C = (Y) => {
    Y.isInternal && i !== null && (i ? Y.open() : Y.close(), i = null);
  }, [N, E] = M($v), B = () => {
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
    const ut = s.contentDocument || ((Xn = s.contentWindow) == null ? void 0 : Xn.document), Tn = ut == null ? void 0 : ut.querySelector(`[data-block-id=${Y}]`);
    Tn && Tn.setAttribute("data-drop", Te);
    const In = Tn.getBoundingClientRect(), zt = s.getBoundingClientRect();
    !(In.top >= zt.top && In.left >= zt.left && In.bottom <= zt.bottom && In.right <= zt.right) && ut && (ut.documentElement.scrollTop = Tn.offsetTop - zt.top);
  }, J = (Y) => {
    L();
    const Te = _(t, "parent.id");
    Te !== "__REACT_ARBORIST_INTERNAL_ROOT__" ? me.publish(se.OPEN_ADD_BLOCK, { _id: Te, position: Y }) : me.publish(se.OPEN_ADD_BLOCK, { position: Y });
  }, { librarySite: q } = G("flags", { librarySite: !1 }), ve = D(() => q && ce(f, "_libBlockId") && !F(f._libBlockId), [f, q]), we = D(() => (f == null ? void 0 : f._type) === "PartialBlock" || (f == null ? void 0 : f._type) === "GlobalBlock", [f]);
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
            onMouseEnter: B,
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
                      S.length > 0 ? /* @__PURE__ */ l("div", { className: "text-red-500", children: /* @__PURE__ */ l(Up, { className: "h-3 w-3" }) }) : /* @__PURE__ */ l(ku, { type: f == null ? void 0 : f._type }),
                      y ? /* @__PURE__ */ l(Dv, { node: t }) : /* @__PURE__ */ l(
                        "div",
                        {
                          className: "ml-1.5 flex items-center gap-x-1 truncate text-[13px]",
                          onDoubleClick: (Y) => {
                            Y.stopPropagation(), t.edit(), t.deselect();
                          },
                          children: /* @__PURE__ */ l("span", { title: ms(f).length > 17 ? ms(f) : "", children: Fv(ms(f), 17) })
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
                        Y.stopPropagation(), o([p], { _show: !v }), t.isOpen && t.toggle();
                      },
                      className: "cursor-pointer rounded bg-transparent p-0.5 hover:bg-primary/10",
                      asChild: !0,
                      children: v ? /* @__PURE__ */ l(no, { className: "h-4 w-4" }) : /* @__PURE__ */ l(Nl, { className: "h-4 w-4" })
                    }
                  ),
                  /* @__PURE__ */ l(be, { className: "isolate z-[9999] text-xs", side: "bottom", children: r(v ? "Hide the block from page" : "Show the block on page") })
                ] }),
                /* @__PURE__ */ l(wu, { node: t, id: p, children: /* @__PURE__ */ l("div", { className: "cursor-pointer rounded bg-transparent p-px hover:bg-primary/10", children: /* @__PURE__ */ l(Co, { className: "h-3 w-3" }) }) })
              ] })
            ]
          }
        )
      ]
    }
  ) });
}), Cu = (t, e) => {
  const n = Z(t, { _parent: e });
  if (n.length === 0) return [];
  const r = [...n];
  return n.forEach((o) => {
    r.push(...Cu(t, o == null ? void 0 : o._id));
  }), r;
}, Hv = () => {
  const [t, e] = M(tc), { t: n } = K(), [r] = le(), o = () => e({ isOpen: !1, blockId: null }), s = hl(), i = D(() => {
    if (!t.blockId) return [];
    const a = ee(r, { _id: t.blockId });
    return a == null || delete a._parent, [a, ...Cu(r, a == null ? void 0 : a._id)];
  }, [t.blockId, r]);
  return /* @__PURE__ */ l($o, { open: t.isOpen, onOpenChange: (a) => !a && o(), children: /* @__PURE__ */ b(Lr, { className: "p-4 sm:max-w-[450px]", children: [
    /* @__PURE__ */ l(Fo, { className: "pb-2", children: /* @__PURE__ */ l(Pr, { children: n("Save to Library") }) }),
    s && !F(t.blockId) && /* @__PURE__ */ l(s, { blockId: t.blockId, blocks: i, close: o })
  ] }) });
}, Be = {
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
Object.values(Be);
const Vv = ({
  parentContext: t,
  setParentContext: e
}) => {
  const { t: n } = K(), { canPaste: r, pasteBlocks: o } = Ci(), s = G("flags.copyPaste", !0);
  return z(() => {
    r("root") || e(null);
  }, [r("root")]), !t || !r("root") || !s ? null : /* @__PURE__ */ l("div", { className: "absolute inset-0", children: /* @__PURE__ */ b(kn, { open: !0, onOpenChange: () => e(null), children: [
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
              o("root"), e(null);
            },
            children: [
              /* @__PURE__ */ l(Us, {}),
              " ",
              n("Paste")
            ]
          }
        )
      }
    )
  ] }) });
}, jv = () => {
  const [t] = le();
  return (e, n) => {
    if (!n)
      return !!ye(e.map((i) => {
        var a;
        return (a = ee(t, { _id: i })) == null ? void 0 : a._type;
      }));
    const r = ee(t, { _id: n });
    if (!r) return !1;
    const o = ye(e.map((s) => {
      var i;
      return (i = ee(t, { _id: s })) == null ? void 0 : i._type;
    }));
    return o ? mt(r._type, o) : !1;
  };
}, Wv = () => {
  const [t] = M(Vl), [e, n] = re(), [r] = Po(), o = _t(), [, s] = Fe(), { moveBlocks: i } = $e(), a = jv(), c = ne(null), [, d] = M(gi), { t: u } = K(), [p, f] = $(null), h = () => {
    n([]), s([]);
  }, m = D(() => {
    const C = (E, B) => E.filter((L) => !B.includes(L._id)).map((L) => ({
      ...L,
      children: L.children ? C(L.children, B) : []
    }));
    return [...C(t, r), { _type: Kr, _id: Kr, children: [] }];
  }, [t, r]), g = ({ id: C, name: N, node: E }) => {
    o([C], { _name: N }, E.data._name);
  }, y = ({ dragIds: C, parentId: N, index: E }) => {
    a(C, N) && i(C, N ?? void 0, E);
  }, x = (C) => {
    if (C.length === 0) return;
    const N = C[0] ? C[0].id : "";
    s([]), n([N]);
  }, w = (C) => {
    var B;
    C.preventDefault(), p && f(null);
    const N = C.target, E = N.getAttribute("data-node-id") || ((B = N.closest("[data-node-id]")) == null ? void 0 : B.getAttribute("data-node-id"));
    E ? (s([]), n([E])) : (s([]), n([]), f({ x: C.clientX, y: C.clientY }));
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
      let B = C;
      return Object.keys(E).forEach((L) => {
        const R = new RegExp(`\\b${L}\\b`, "g");
        B = B.replace(R, String(E[L]));
      }), new Function(`return ${B}`)();
    } catch {
      return console.warn("Invalid condition expression:", C), !1;
    }
  }, k = (C) => {
    if (!c.current) return;
    const N = c.current, E = N.selectedNodes[0];
    if (!E) return;
    n([E.id]), s([]);
    const B = !E.isInternal, L = !E.isOpen, R = E.isOpen, V = xv.find(
      (J) => J.key === C.key && (!J.when || v(J.when, E))
    );
    if (V)
      switch (C.preventDefault(), V.command) {
        case "selectNext":
          kv(N);
          break;
        case "selectPrev":
          Cv(N);
          break;
        case "selectParent":
          Nv(N, B || L);
          break;
        case "close":
          Ev(N, R);
          break;
        case "open":
          Sv(N, L);
          break;
        case "selectFirst":
          vv(N);
          break;
        case "selectLast":
          wv(N);
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
    /* @__PURE__ */ l("div", { className: "rounded-full bg-muted p-6", children: /* @__PURE__ */ l(Kp, { className: "h-12 w-12 text-muted-foreground" }) }),
    /* @__PURE__ */ b("div", { className: "space-y-2", children: [
      /* @__PURE__ */ l("h3", { className: "text-lg font-semibold text-foreground", children: u("This page is empty") }),
      /* @__PURE__ */ l("p", { className: "max-w-sm text-sm text-muted-foreground", children: u("Get started by adding your first block to begin building your page") })
    ] }),
    T(Be.ADD_BLOCK) && /* @__PURE__ */ b(
      oe,
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
                  /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(oe, { className: "h-fit p-1", onClick: () => {
                    var C;
                    return (C = c == null ? void 0 : c.current) == null ? void 0 : C.openAll();
                  }, variant: "ghost", size: "sm", children: /* @__PURE__ */ l(Jp, { className: "h-2 w-2" }) }) }),
                  /* @__PURE__ */ l(be, { className: "isolate z-[9999]", children: u("Expand all") })
                ] }),
                /* @__PURE__ */ b(Ne, { children: [
                  /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(oe, { className: "h-fit p-1", onClick: () => {
                    var C;
                    return (C = c == null ? void 0 : c.current) == null ? void 0 : C.closeAll();
                  }, variant: "ghost", size: "sm", children: /* @__PURE__ */ l(Yp, { className: "h-2 w-2" }) }) }),
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
                          /* @__PURE__ */ l(Us, { className: "h-3 w-3 flex-shrink-0 rotate-180" }),
                          /* @__PURE__ */ l("div", { className: "ml-1.5 flex items-center gap-x-1 truncate text-[13px]", children: "Body" })
                        ] }),
                        /* @__PURE__ */ l(wu, { node: "BODY", id: "BODY", children: /* @__PURE__ */ l("div", { className: "hidden cursor-pointer rounded bg-transparent p-px hover:bg-primary/10 group-hover:block", children: /* @__PURE__ */ l(Co, { className: "h-3 w-3" }) }) })
                      ]
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ l(
                Df,
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
                  renderCursor: yv,
                  onSelect: x,
                  childrenAccessor: (C) => C.children,
                  width: "100%",
                  rowHeight: 25,
                  renderDragPreview: () => null,
                  indent: 14,
                  onContextMenu: w,
                  disableDrop: S,
                  idAccessor: "_id",
                  children: zv
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l(Hv, {}),
    /* @__PURE__ */ l(Vv, { parentContext: p, setParentContext: f })
  ] });
}, Zr = W.forwardRef(({ className: t, orientation: e = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ l(
  Dl.Root,
  {
    ref: o,
    decorative: n,
    orientation: e,
    className: j("shrink-0 bg-border", e === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", t),
    ...r
  }
));
Zr.displayName = Dl.Root.displayName;
const Nu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ b(
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
Nu.displayName = tr.Root.displayName;
const Gv = ({ value: t, onChange: e, disabled: n }) => {
  const [r, o] = $(t), s = pn(e, [t], 200, !0);
  return /* @__PURE__ */ l(
    Nu,
    {
      min: 0,
      step: 1,
      max: 50,
      disabled: n,
      value: [Number(r.replace("px", ""))],
      onValueChange: (i) => {
        o(i[0].toString() + "px"), s(i[0].toString());
      },
      className: "flex-1 cursor-pointer"
    }
  );
}, Uv = ({ value: t, onChange: e }) => {
  const n = zs((r) => e(r), 200);
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
            const o = r.target.value;
            /^#[0-9A-F]{6}$/i.test(o) && n(o);
          },
          className: "absolute inset-0 h-full w-full cursor-pointer rounded-lg border-0 opacity-0"
        }
      )
    }
  );
}, Kv = ({
  label: t,
  value: e,
  onChange: n
}) => {
  const r = qs(), { t: o } = K();
  return z(() => {
    r.some((s) => s.family === e) || n(r[0].family);
  }, [e, n]), /* @__PURE__ */ b("div", { className: "space-y-0.5", children: [
    /* @__PURE__ */ l(bn, { className: "mb-1 block text-xs text-gray-600", children: o(Kt(t)) }),
    /* @__PURE__ */ b(Wi, { value: e, onValueChange: n, children: [
      /* @__PURE__ */ l(Uo, { className: "h-8 w-full text-xs text-black", children: /* @__PURE__ */ l(Gi, { placeholder: o("Select font") }) }),
      /* @__PURE__ */ l(Ko, { children: r.map((s) => /* @__PURE__ */ l(Jo, { value: s.family, children: s.family }, s.family)) })
    ] })
  ] });
}, Jv = () => {
  const t = G("onSaveWebsiteData", async (c) => {
  }), [e] = Oo(), n = ne(!1), r = I(
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
  ), o = I(
    async (c) => {
      await r({ type: "THEME", data: c ?? e });
    },
    [r, e]
  ), s = I(
    async (c) => {
      const d = c ?? Qe.get(Er);
      await r({ type: "DESIGN_TOKENS", data: d });
    },
    [r]
  ), i = Nt(o, [o], 1e3), a = Nt(s, [s], 1e3);
  return {
    saveWebsiteData: r,
    saveTheme: o,
    saveDesignTokens: s,
    debouncedSaveTheme: i,
    debouncedSaveDesignTokens: a
  };
}, Yv = {
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
}, Xv = {
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
}, qv = {
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
}, Zv = {
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
}, Qv = {
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
}, ew = Hs(
  () => import("./css-import-modal-DRDu7eLi.js").then((t) => ({ default: t.CssImportModal }))
), Su = "chai-builder-previous-theme", tw = [
  { shadcn_default: Yv },
  { twitter_theme: Xv },
  { solarized_theme: qv },
  { claude_theme: Zv },
  { supabase_theme: Qv }
], nw = (t) => {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(Su, JSON.stringify(t));
    } catch (e) {
      console.warn("Failed to save previous theme to localStorage:", e);
    }
}, rw = () => {
  if (!(typeof window > "u"))
    try {
      localStorage.removeItem(Su);
    } catch (t) {
      console.warn("Failed to clear previous theme from localStorage:", t);
    }
}, ow = W.memo(({ className: t = "" }) => {
  const [e, n] = Br(), [r, o] = W.useState(""), [s, i] = W.useState(!1), a = G("themePresets", {}), { hasPermission: c } = gt(), { debouncedSaveTheme: d } = Jv(), u = G("flags.importTheme", !0), p = G("flags.darkMode", !1), f = qs();
  (!a || a.length === 0) && tw.map((N) => {
    a.push(N);
  });
  const [h, m] = Oo(), g = Rr(), { t: y } = K(), x = W.useCallback(
    (N) => {
      const E = { ...h };
      nw(E), m(N), d(), Ce.success("Theme updated", {
        action: {
          label: /* @__PURE__ */ b("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ l(ro, { className: "h-4 w-4" }),
            " Undo"
          ] }),
          onClick: () => {
            m(E), rw(), Ce.dismiss();
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
      E && typeof E == "object" && "fontFamily" in E && "borderRadius" in E && "colors" in E ? (x(E), o("")) : console.error("Invalid preset structure:", E);
    } else
      console.error("Preset not found:", r);
  }, S = (N) => {
    x(N), o("");
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
        const B = _(h, `colors.${N}`);
        return e ? Ge(B, 1, E) : Ge(B, 0, E), {
          ...h,
          colors: {
            ...h.colors,
            [N]: B
          }
        };
      }), d();
    },
    [h, d],
    200
  ), C = (N) => /* @__PURE__ */ l("div", { className: "grid grid-cols-1", children: Object.entries(N.items).map(([E]) => {
    const B = _(h, `colors.${E}.${e ? 1 : 0}`);
    return B ? /* @__PURE__ */ b("div", { id: `theme-${E}`, className: "mt-1 flex items-center gap-x-2", children: [
      /* @__PURE__ */ l(
        Uv,
        {
          value: B,
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
        /* @__PURE__ */ l("div", { className: "flex gap-2", children: u && /* @__PURE__ */ b(oe, { className: "px-1", variant: "link", size: "sm", onClick: () => i(!0), children: [
          /* @__PURE__ */ l(Xp, { className: "h-4 w-4" }),
          y("Import theme")
        ] }) })
      ] }),
      /* @__PURE__ */ b("div", { className: "flex items-center gap-2 px-0", children: [
        /* @__PURE__ */ l("div", { className: "w-[70%]", children: /* @__PURE__ */ b(Wi, { value: r, onValueChange: o, children: [
          /* @__PURE__ */ l(Uo, { className: "h-9 w-full text-sm", children: /* @__PURE__ */ l(Gi, { placeholder: y("Select preset") }) }),
          /* @__PURE__ */ l(Ko, { children: Array.isArray(a) && a.map((N) => {
            const E = Object.keys(N)[0], B = E.replaceAll("_", " ");
            return /* @__PURE__ */ l(Jo, { value: E, children: $n(B) }, E);
          }) })
        ] }) }),
        /* @__PURE__ */ l("div", { className: "w-[25%]", children: /* @__PURE__ */ l(oe, { className: "w-full text-sm", disabled: !r, onClick: w, children: y("Apply") }) })
      ] })
    ] }),
    /* @__PURE__ */ l(Zr, {}),
    /* @__PURE__ */ b("div", { className: Ze("my-2 space-y-3", t), children: [
      f.length > 0 ? /* @__PURE__ */ b(Q, { children: [
        /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ l(qp, { className: "h-3 w-3 text-gray-600" }),
          /* @__PURE__ */ l("span", { className: "text-xs font-medium text-gray-700", children: y("Typography") })
        ] }),
        (g == null ? void 0 : g.fontFamily) && /* @__PURE__ */ l("div", { className: "space-y-2", children: Object.entries(g.fontFamily).map(([N, E]) => /* @__PURE__ */ l(
          Kv,
          {
            label: N,
            value: h.fontFamily[N.replace(/font-/g, "")] || E[Object.keys(E)[0]],
            onChange: (B) => v(N, B)
          },
          N
        )) }),
        /* @__PURE__ */ l(Zr, {})
      ] }) : "",
      (g == null ? void 0 : g.borderRadius) && /* @__PURE__ */ b("div", { className: "space-y-0.5", children: [
        /* @__PURE__ */ b("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ l(Zp, { className: "h-3 w-3 text-gray-600" }),
            /* @__PURE__ */ l("span", { className: "text-xs font-medium text-gray-700", children: y("Border Radius") })
          ] }),
          /* @__PURE__ */ l(Di, { variant: "secondary", className: "text-xs", children: h.borderRadius })
        ] }),
        /* @__PURE__ */ l("div", { className: "flex items-center gap-4 py-2", children: /* @__PURE__ */ l(Gv, { value: h.borderRadius, onChange: k }) })
      ] }),
      /* @__PURE__ */ l(Zr, {}),
      (g == null ? void 0 : g.colors) && /* @__PURE__ */ b("div", { className: "space-y-3", children: [
        /* @__PURE__ */ b("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ l(oo, { className: "h-3 w-3 text-gray-600" }),
            /* @__PURE__ */ l("span", { className: "text-xs font-medium text-gray-700", children: y("Colors") })
          ] }),
          p && /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ l(El, { className: "h-4 w-4" }),
            /* @__PURE__ */ l(
              Ho,
              {
                checked: e,
                onCheckedChange: (N) => n(N),
                "aria-label": y("Toggle dark mode"),
                className: "mx-1"
              }
            ),
            /* @__PURE__ */ l(_l, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ l("div", { className: "space-y-2", children: g.colors.map((N) => /* @__PURE__ */ l("div", { children: C(N) }, N.group)) })
      ] }),
      /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l("div", { children: y("Loading...") }), children: s && u && /* @__PURE__ */ l(
        ew,
        {
          open: s,
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
}), sw = "Core", iw = "Import", aw = "Breakpoints", lw = "Clear", cw = "Cancel", dw = "Yes", uw = "Preview", pw = "Settings", fw = "Style", hw = "Enter SVG code here", mw = "Remove", gw = "Choose", bw = "Cut", yw = "Copy", xw = "Paste", vw = "Delete", ww = "classes", kw = "Theme", Cw = "Outline", Nw = "Copied", Sw = "Stop", Ew = "Edit", _w = "Tag", Aw = "Value", Tw = "URL", Iw = "Images", Bw = "Library", Rw = "Blocks", Lw = "Basic", Pw = "Media", Ow = "Advanced", Mw = "Form", Dw = "Groups", $w = "Accordions", Fw = "Buttons", zw = "Layouts", Hw = "FAQ", Vw = "Hero", jw = "Features", Ww = "Footer", Gw = "Navbar", Uw = "Icons", Kw = "Testimonials", Jw = "Blog", Yw = "Saved", Xw = "Unsaved", qw = "Randomize", Zw = "Classes", Qw = "All", ek = "Undo", tk = "Redo", nk = "Duplicate", rk = "Close", ok = "Selected", sk = "Select", ik = "Attributes", ak = "apply", lk = "presets", ck = "Orientation", dk = "Color", uk = "Upload", pk = "Apply", fk = "Back", hk = "Insert", mk = "Rename", gk = "Partials", bk = "Happy", yk = "Sad", xk = "Retry", vk = "Canvas is empty", wk = "Presets", kk = "No", Ck = "Saving", Nk = { heading_font: "Heading Font", body_font: "Body Font", rounded_corner: "Rounded Corners", primary: "Primary", secondary: "Secondary", background: "Background", text_color: "Text Color", background_dark_mode: "Background (Dark Mode)", text_color_dark_mode: "Text Color (Dark Mode)" }, Sk = { box: "box", tag: "Tag", div: "div", level: "Level", header: "header", footer: "footer", section: "section", article: "article", aside: "aside", main: "main", nav: "navigation", figure: "figure", details: "details", summary: "summary", dialog: "dialog", strike: "strike", caption: "caption", legend: "legend", figcaption: "figure caption", mark: "mark", background_image: "Background Image", label: "Label", default: "default", icon_size: "Icon Size", icon_position: "Icon Position", start: "Start", end: "End", button: "Button", custom_html: "Custom HTML", html_code: "HTML Code", default_snippet: "The HTML snippet goes here...", placeholder: "Enter custom HTML code here", custom_script: "Custom Script", dark_mode: "Dark Mode", divider: "Divider", empty_box: "Empty Box", heading: "Heading", image: "Image", alt: "Alt", width: "Width", height: "Height", video: "Video", span: "Span", content: "Content", icon: "Icon", richtext: "Rich Text", list: "List", list_type: "List Type", listitem: "List Item", link: "Link", list_item: "List Item", none: "None", disc: "Disc", number: "Number", paragraph: "Paragraph", lightbox_link: "Lightbox Link", href: "Link", type: "Type", iframe: "iframe", inline: "inline", ajax: "ajax", autoplay: "Video autoplay", max_width: "Max Width", backdrop_color: "Background Color", gallery_name: "Gallery Name", slot: "Slot", empty_slot: "Empty Slot", text: "Text", video_url: "Video URL", controls: "Show Controls", loop: "Loop", muted: "Muted", checkbox: "Checkbox", required: "Required", checked: "Checked", submit_button: "Submit Button", form: "Form", submit_url: "Submit URL", error_message: "Error Message", success_message: "Success Message", input: "Input", value: "Value", show_label: "Show Label", field_name: "Field Name", radio: "Radio", multiple: "Multiple", options: "Options", select: "Select", multiple_choice: "Multiple Choice", textarea: "Textarea", rows: "Rows" }, Ek = "Add", _k = "Save", Ak = "Screen", Tk = {
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
  Core: sw,
  "Custom Blocks": "Custom Blocks",
  "UI Library": "UI Library",
  Import: iw,
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
  Breakpoints: aw,
  Clear: lw,
  "Clear whole canvas?": "Clear whole canvas?",
  "Are you sure you want to clear the whole canvas?": "Are you sure you want to clear the whole canvas?",
  Cancel: cw,
  Yes: dw,
  Preview: uw,
  Settings: pw,
  Styling: fw,
  SVG_code: hw,
  "Paste SVG_code": "Choose icon or paste SVG code",
  "Enter Key": "Enter Key",
  "Data Provider": "Data Provider",
  "Remove Provider Confirmation": "Are you sure you want to remove <span class='text-blue-500'>{name}</span> provider?",
  "Your data provider will be removed from this page and all added data binding will be not visible on blocks.": "Your data provider will be removed from this page and all added data binding will be not visible on blocks.",
  Remove: mw,
  "You have no data providers registered. Please add a data provider to your project.": "You have no data providers registered. Please add a data provider to your project.",
  "Learn more": "Learn more",
  "Add data providers:": "Add data providers:",
  "Select a provider": "Select a provider",
  Choose: gw,
  "Page data providers:": "Page data providers:",
  "View Data": "View Data",
  "Mark as Global": "Mark as Global",
  "Note: Global blocks are single instances. Editing global blocks will be reflected on all pages using these blocks.": "Note: Global blocks are single instances. Editing global blocks will be reflected on all pages using these blocks.",
  "Global blocks are indicated with": "Global blocks are indicated with",
  "Global blocks are available under 'Global' category": "Global blocks are available under 'Global' category",
  "Enter global block name": "Enter global block name",
  "Eg: Header, Footer": "Eg: Header, Footer",
  "{length} blocks selected.": "{length} blocks selected.",
  Cut: bw,
  Copy: yw,
  Paste: xw,
  Delete: vw,
  "Clear Selection": "Clear Selection",
  "This is dev mode. Visit": "This is dev mode. Visit",
  "to see page preview": "to see page preview",
  classes: ww,
  Theme: kw,
  Outline: Cw,
  "Not supported": "Not supported",
  "Please use Chrome, Firefox or Safari": "Please use Chrome, Firefox or Safari",
  "Download Complete": "Download complete",
  Copied: Nw,
  "Enter Classes": "Add classes or design tokens (space-separated)",
  "Ask AI": "Ask AI",
  "Edit with AI": "Edit with AI",
  "Generating... Please wait...": "Generating... Please wait...",
  "Saving... Please wait...": "Saving... Please wait...",
  "Deleting... Please wait...": "Deleting... Please wait...",
  Stop: Sw,
  "E.g.: This page is about an AI assistant app called Chai Studio. It allows users to create beautiful webpages and edit content with AI": "E.g.: This page is about an AI assistant app called Chai Studio. It allows users to create beautiful webpages and edit content with AI.",
  "Ask AI to edit styles": "Ask AI to edit styles",
  "Ask AI to edit content": "Ask AI to edit content",
  "AI Context": "AI Context",
  "Select Block for AI": "Select a block to edit with AI",
  "Select Block to Edit": "Please select a block to edit",
  Edit: Ew,
  "Describe this page. E.g.: This page is about...": "Describe this page. E.g.: This page is about...",
  Tag: _w,
  Value: Aw,
  "Background Image": "Background Image",
  "Enter image URL": "Enter image URL",
  "Enter URL": "Enter URL",
  URL: Tw,
  "Replace image": "Replace image",
  "Choose image": "Choose image",
  Images: Iw,
  Library: Bw,
  Blocks: Rw,
  Basic: Lw,
  Media: Pw,
  Advanced: Ow,
  Form: Mw,
  "Choose Icon or SVG": "Choose an icon or enter SVG",
  Groups: Dw,
  "UI Libraries": "UI Libraries",
  Accordions: $w,
  Buttons: Fw,
  Layouts: zw,
  "Choose Library": "Choose library",
  "No Library Found": "No library found.",
  FAQ: Hw,
  Hero: Vw,
  Features: jw,
  Footer: Ww,
  Navbar: Gw,
  Icons: Uw,
  Testimonials: Kw,
  Blog: Jw,
  "Remove context": "Remove context",
  "Yes, Delete": "Yes, Delete",
  "AI Context Updated": "AI Context Updated",
  "You can now ask AI to edit your content.": "You can now ask AI to edit your content.",
  Saved: Yw,
  Unsaved: Xw,
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
  Randomize: qw,
  "Randomize all text elements.": "Randomize all text elements.",
  "Edit Block": "Edit Block",
  "AI Assistant": "AI Assistant",
  "Generate with AI": "Generate with AI",
  "Theme Config": { "Heading Font": "Heading Font", "Body Font": "Body Font", "Rounded Corner": "Rounded Corners", Primary: "Primary", Secondary: "Secondary", Background: "Background", "Text Color": "Text Color", "Background Dark Mode": "Background (Dark Mode)", "Text Color Dark Mode": "Text Color (Dark Mode)", "Reset styles": "Reset styles" },
  "Copy classes to clipboard": "Copy classes to clipboard",
  "Classes copied to clipboard": "Classes copied to clipboard",
  Classes: Zw,
  All: Qw,
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
  Undo: ek,
  Redo: tk,
  Duplicate: nk,
  "Deselect blocks": "Deselect blocks",
  "Delete block": "Delete block",
  "Save page": "Save page",
  "Scripts will be only executed in preview and live mode.": "Scripts will be only executed in preview and live mode.",
  "HTML Code Editor |": "HTML Code Editor |",
  Close: rk,
  "Coming soon": "Coming soon",
  Selected: ok,
  Select: sk,
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
  Attributes: ik,
  "Apply Presets": "Apply Presets",
  apply: ak,
  presets: lk,
  "Global presets": "Global presets",
  Orientation: ck,
  Color: dk,
  "Please select an image": "Please select an image",
  "click to upload": "click to upload",
  "SVG, PNG, JPG or GIF (Max. 2mb)": "SVG, PNG, JPG or GIF (Max. 2mb)",
  "Uploading...": "Uploading...",
  Upload: uk,
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
  Apply: pk,
  Back: fk,
  Insert: hk,
  Rename: mk,
  "Unlink from library": "Unlink from library",
  "Save to Library": "Save to Library",
  "No blocks found in this group": "No blocks found in this group",
  "No blocks found matching": "No blocks found matching",
  "No matching blocks found": "No matching blocks found",
  "Search blocks...": "Search blocks...",
  Partials: gk,
  Happy: bk,
  Sad: yk,
  "Importing...": "Importing...",
  "Failed to load the UI library. Try again": "Failed to load the UI library. Try again",
  Retry: xk,
  "Oops! Something went wrong.": "Oops! Something went wrong.",
  "Please try again.": "Please try again.",
  "No option found.": "No option found.",
  "Clipboard not supported": "Clipboard not supported",
  "Are you sure you want to clear the page?": "Are you sure you want to clear the page?",
  canvas_empty: vk,
  Presets: wk,
  "Reset style": "Reset style",
  "Reset styles": "Reset styles",
  "Clear styles": "Clear styles",
  "Open code editor": "Open code editor",
  "Style element": "Style element",
  "Repeater Data": "Repeater Data",
  "Toggle Data Binding": "Toggle Data Binding",
  No: kk,
  Saving: Ck,
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
  theme_config: Nk,
  web_blocks: Sk,
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
  Add: Ek,
  Save: _k,
  Screen: Ak
};
xs.use(of).init({
  // the translations
  // (tip move them in a JSON file and import them,
  // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
  resources: {
    en: {
      translation: Tk
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
function Ik(t, e, n) {
  n.push(ee(t, { _id: e }));
  const r = Z(t, { _parent: e });
  for (const o of r)
    n.push(...Eu(o._id, t));
  return n;
}
const Eu = (t, e) => {
  let n = [];
  return n = Ot([...n, ...Ik(e, t, n)]), n;
}, Bk = (t, e, n) => jn(
  t.map((r) => {
    const o = ["_id", "_type", "_parent"], s = dn(r, o), i = Pe(r._type), a = {}, c = _(i, "aiProps", []);
    for (const d in r)
      if (!o.includes(d) && c.includes(d)) {
        const u = _(r, `${d}-${e}`, ""), p = _(r, d, "");
        a[d] = Ct(u) && u.trim() || p, n && (a[d] = p);
      }
    return F(a) ? !1 : (ce(s, "_parent") && F(s._parent) && delete s._parent, { ...s, ...a });
  })
), Rk = (t, e, n) => !e || n !== "content" ? t : `${t}. Generate content in ${_(Vn, e, e)} language.`, Lk = P(!1), _u = () => {
  const [t, e] = M(Lk), [n, r] = $(null), o = G("askAiCallBack", wt), s = dh(), i = lh(), [a] = le(), { selectedLang: c, fallbackLang: d } = Je(), u = c.length ? c : d, p = (f, h) => {
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
    askAi: I(
      async (f, h, m, g) => {
        if (o) {
          e(!0), r(null);
          try {
            const y = c === d ? "" : c, x = m.toLowerCase().includes("translate the content"), w = f === "content" ? Bk(to(Eu(h, a)), c, x) : [p(h, a)], S = await o(f, Rk(m, u, f), w, y);
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
              s(v);
            g && g(S);
          } catch (y) {
            r(y);
          } finally {
            e(!1), g && g();
          }
        }
      },
      [
        o,
        e,
        c,
        d,
        a,
        u,
        i,
        s
      ]
    ),
    loading: t,
    error: n
  };
};
function Pk({ onClick: t }) {
  const { loading: e } = _u(), { t: n } = K(), { selectedLang: r, fallbackLang: o } = Je(), i = [...[
    {
      name: n("Improve writing"),
      icon: ko,
      prompt: n(
        "Improving writing in all text elements. Replacing placeholder content with meaningful relevant content."
      )
    },
    {
      name: n("Replace placeholder content"),
      icon: wl,
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
      icon: Qp,
      prompt: n("Add emojis to text elements if relevant.")
    },
    {
      name: n("Randomize"),
      icon: ef,
      prompt: n("Randomize all text elements.")
    }
  ]];
  return r && r !== o && i.splice(0, 0, {
    name: n("Translate to {{lang}}", { lang: _(Vn, r, r) }),
    icon: tf,
    prompt: n("Translate the content to {{lang}}. Maintain same tone, style and length.", {
      lang: _(Vn, r, r)
    })
  }), /* @__PURE__ */ l("div", { className: e ? "pointer-events-none opacity-50" : "", children: /* @__PURE__ */ l("ul", { className: "space-y-1", children: i.map(
    ({ name: a, icon: c, subMenus: d, prompt: u }) => d ? /* @__PURE__ */ b($i, { children: [
      /* @__PURE__ */ l(Fi, { asChild: !0, children: /* @__PURE__ */ b(
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
const Ok = ({ blockId: t }) => {
  const { t: e } = K(), { askAi: n, loading: r, error: o } = _u(), [s, i] = $(""), a = ne(null), c = ne(null), d = ae();
  z(() => {
    var p;
    (p = a.current) == null || p.focus();
  }, []);
  const u = () => {
    o || i("");
  };
  return /* @__PURE__ */ l("div", { className: "", children: t ? /* @__PURE__ */ b("div", { className: "", children: [
    /* @__PURE__ */ l("label", { className: "text-xs font-medium text-gray-500", children: e("Selected block") }),
    d && /* @__PURE__ */ b("div", { className: "flex items-center gap-x-1 rounded border border-primary/20 bg-primary/10 p-1.5 text-xs text-primary", children: [
      /* @__PURE__ */ l(ku, { type: d._type }),
      " ",
      /* @__PURE__ */ l("p", { className: "truncate whitespace-nowrap leading-none", children: d._name || d._type })
    ] }),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("label", { className: "text-xs font-medium text-gray-500", children: e("Quick actions") }),
    /* @__PURE__ */ l("div", { className: "rounded border p-2 text-sm", children: /* @__PURE__ */ l(
      Pk,
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
          value: s,
          onChange: (p) => i(p.target.value),
          placeholder: e("Ask AI to edit content"),
          className: "w-full resize-none border-none p-0 text-xs shadow-none outline-none",
          rows: 3,
          onKeyDown: (p) => {
            p.key === "Enter" && (p.preventDefault(), c.current && clearTimeout(c.current), n("content", t, s, u));
          }
        }
      ),
      /* @__PURE__ */ b("div", { className: "flex items-center justify-end", children: [
        r && /* @__PURE__ */ l(oe, { variant: "destructive", onClick: () => stop(), className: "hidden h-4 w-4", size: "icon", children: /* @__PURE__ */ l(nf, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ l(
          oe,
          {
            onClick: () => {
              c.current && clearTimeout(c.current), n("content", t, s, u);
            },
            variant: "default",
            className: "h-7 w-7",
            disabled: r || s.trim().length < 1,
            size: "icon",
            children: r ? /* @__PURE__ */ l(Gs, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ l(Cl, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l("div", { className: "max-w-full pt-2", children: o && /* @__PURE__ */ l("p", { className: "break-words rounded border border-red-500 bg-red-100 p-1 text-xs text-red-500", children: o.message }) })
  ] }) : /* @__PURE__ */ l("div", { className: "p-4 text-center", children: /* @__PURE__ */ b("div", { className: "space-y-4 rounded-xl p-4 text-muted-foreground", children: [
    /* @__PURE__ */ l(Zs, { className: "mx-auto h-7 w-7 text-muted-foreground" }),
    /* @__PURE__ */ l("h1", { children: e("Please select a block to Ask AI") })
  ] }) }) });
}, Au = () => {
  const [t] = re();
  return /* @__PURE__ */ l("div", { className: "no-scrollbar mt-2 flex-1 overflow-y-auto", children: /* @__PURE__ */ l(Ok, { blockId: ye(t) }) });
};
function kC() {
  const [t, e] = Br();
  return /* @__PURE__ */ b("div", { className: "flex items-center", children: [
    t ? /* @__PURE__ */ l(_l, { className: "size-4 shrink-0" }) : /* @__PURE__ */ l(El, { className: "size-4 shrink-0" }),
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
const CC = () => {
  const { hasUndo: t, hasRedo: e, undo: n, redo: r } = Ar();
  return /* @__PURE__ */ b("div", { className: "flex items-center", children: [
    /* @__PURE__ */ l(oe, { disabled: !t(), size: "sm", onClick: n, className: "rounded-full", variant: "ghost", children: /* @__PURE__ */ l(ro, {}) }),
    /* @__PURE__ */ l(oe, { disabled: !e(), onClick: r, size: "sm", className: "rounded-full", variant: "ghost", children: /* @__PURE__ */ l(ro, { className: "rotate-180 scale-y-[-1] transform" }) })
  ] });
}, Mk = xe.Root, Dk = xe.Portal, Tu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
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
Tu.displayName = xe.Overlay.displayName;
const $k = Ys(
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
), Iu = W.forwardRef(
  ({ side: t = "right", className: e, children: n, ...r }, o) => /* @__PURE__ */ b(Dk, { children: [
    /* @__PURE__ */ l(Tu, {}),
    /* @__PURE__ */ b(xe.Content, { ref: o, className: j($k({ side: t }), e), ...r, children: [
      /* @__PURE__ */ b(xe.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
        /* @__PURE__ */ l(at, { className: "h-4 w-4" }),
        /* @__PURE__ */ l("span", { className: "sr-only", children: "Close" })
      ] }),
      n
    ] })
  ] })
);
Iu.displayName = xe.Content.displayName;
const Bu = ({ className: t, ...e }) => /* @__PURE__ */ l("div", { className: j("flex flex-col space-y-2 text-center sm:text-left", t), ...e });
Bu.displayName = "SheetHeader";
const Ru = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(xe.Title, { ref: n, className: j("text-lg font-semibold text-foreground", t), ...e }));
Ru.displayName = xe.Title.displayName;
const Fk = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(xe.Description, { ref: n, className: j("text-sm text-muted-foreground", t), ...e }));
Fk.displayName = xe.Description.displayName;
const zk = () => {
  const { t } = K(), [e, n] = $(null), [r, o] = $(-1), [s, i] = $(!1), a = bt(), [, c] = wi();
  return Mn(se.OPEN_ADD_BLOCK, (d) => {
    a ? c("add-block") : (n(d ? d._id : null), o((d == null ? void 0 : d.position) ?? -1), i(!0));
  }), Mn(se.CLOSE_ADD_BLOCK, () => {
    n(null), o(-1), i(!1);
  }), /* @__PURE__ */ l(mu, { open: s, onOpenChange: () => s ? i(!1) : "", children: /* @__PURE__ */ b(Ui, { className: "max-w-5xl overflow-hidden border-border", children: [
    /* @__PURE__ */ b(Ki, { className: "flex flex-row items-center justify-between", children: [
      /* @__PURE__ */ l(Ji, { className: "text-foreground", children: t("Add blocks") }),
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => i(!1),
          className: "text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
          children: /* @__PURE__ */ l(No, { className: "h-6 w-6" })
        }
      )
    ] }),
    /* @__PURE__ */ l("div", { className: "no-scrollbar h-[500px] max-h-full overflow-hidden", children: /* @__PURE__ */ l(hu, { parentId: e ?? "", position: r, showHeading: !1 }) })
  ] }) });
}, Hk = te.memo(function({
  preloadedAttributes: e = [],
  onAttributesChange: n
}) {
  const [r, o] = $([]), [s, i] = $(""), [a, c] = $(""), [d, u] = $(null), [p, f] = $(""), h = ne(null), m = ne(null), g = Un(), { t: y } = K();
  z(() => {
    o(e);
  }, [e]);
  const x = () => {
    if (s.startsWith("@")) {
      f(y("Attribute keys cannot start with @"));
      return;
    }
    if (s) {
      const C = [...r, { key: s, value: a }];
      n == null || n(C), o(r), i(""), c(""), f("");
    }
  }, w = (C) => {
    const N = r.filter((E, B) => B !== C);
    n == null || n(N), o(N);
  }, S = (C) => {
    u(C), i(r[C].key), c(r[C].value);
  }, v = () => {
    if (s.startsWith("@")) {
      f(y("Attribute keys cannot start with @"));
      return;
    }
    if (d !== null && s) {
      const C = [...r];
      C[d] = { key: s, value: a }, n == null || n(C), o(C), u(null), i(""), c(""), f("");
    }
  }, k = (C) => {
    C.key === "Enter" && !C.shiftKey && (C.preventDefault(), d !== null ? v() : x());
  }, T = I((C) => {
    const N = (L) => /[.,!?;:]/.test(L), E = (L, R, V) => {
      let J = "", q = "";
      const ve = R > 0 ? L[R - 1] : "", we = R < L.length ? L[R] : "";
      return R > 0 && (ve === "." || !N(ve) && ve !== " ") && (J = " "), R < L.length && !N(we) && we !== " " && (q = " "), {
        text: J + V + q,
        prefixLength: J.length,
        suffixLength: q.length
      };
    }, B = m.current;
    if (B) {
      const L = B.selectionStart || 0, R = B.value || "", V = B.selectionEnd || L;
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
                  value: s,
                  onChange: (C) => i(C.target.value),
                  placeholder: y("Enter key"),
                  className: "py-0 text-xs font-normal leading-tight placeholder:text-slate-400"
                }
              )
            ] }),
            /* @__PURE__ */ b("div", { className: "w-full", children: [
              /* @__PURE__ */ b("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ l(bn, { htmlFor: "attrValue", className: "text-[11px] font-normal text-slate-600", children: y("Value") }),
                !F(g) && /* @__PURE__ */ l(Vd, { data: g, onSelect: T })
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
          /* @__PURE__ */ l("div", { className: "flex justify-end", children: /* @__PURE__ */ l(oe, { type: "submit", disabled: !s.length, variant: "default", size: "sm", className: "h-8 w-24 text-xs", children: y(d !== null ? "Save" : "Add") }) }),
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
        /* @__PURE__ */ l(oe, { variant: "ghost", size: "icon", className: "h-6 w-6", onClick: () => S(N), children: /* @__PURE__ */ l(ko, { className: "h-3 w-3" }) }),
        /* @__PURE__ */ l(oe, { variant: "ghost", size: "icon", className: "h-6 w-6", onClick: () => w(N), children: /* @__PURE__ */ l(at, { className: "h-3 w-3" }) })
      ] })
    ] }, N)) })
  ] });
}), Vk = W.memo(() => {
  const t = ae(), [e, n] = $([]), [r] = Fe(), o = _t(), s = `${_(r, "0.prop")}_attrs`;
  W.useEffect(() => {
    const a = A(_(t, s), (c, d) => ({ key: d, value: c }));
    F(a) ? n([]) : n(a);
  }, [_(t, s)]);
  const i = W.useCallback(
    (a = []) => {
      if (!t) return;
      const c = {};
      vo(a, (d) => {
        F(d.key) || Ge(c, d.key, d.value);
      }), o([_(t, "_id")], { [s]: c });
    },
    [t, o, s]
  );
  return /* @__PURE__ */ l("div", { className: "flex-col gap-y-2", children: /* @__PURE__ */ l("div", { className: "flex flex-col", children: /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(Hk, { preloadedAttributes: e, onAttributesChange: i }) }) }) });
}), Bn = () => null, ol = () => {
  const { resetAll: t } = Yd(), e = ae(), [n] = Fe(), r = i0(), { t: o } = K();
  return !e || F(n) ? null : /* @__PURE__ */ b(kn, { children: [
    /* @__PURE__ */ l(Cn, { asChild: !0, children: /* @__PURE__ */ l("div", { className: "inline-flex rounded-sm p-0.5 hover:bg-gray-300", onClick: (s) => s.stopPropagation(), children: /* @__PURE__ */ l(Co, { className: "h-3 w-3" }) }) }),
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
            o("Reset styles")
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
            o("Clear styles")
          ]
        }
      )
    ] })
  ] });
};
function sl() {
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
    e && /* @__PURE__ */ l(Vk, {})
  ] });
}
const jk = ({ partialBlockId: t }) => {
  const e = G("gotoPage", wt), { saveState: n } = _r(), { selectedLang: r, fallbackLang: o } = Je(), s = I(
    (i) => {
      if (i.stopPropagation(), n !== "SAVED") {
        Ce.error("You have unsaved changes. Please save the page first.");
        return;
      }
      e({ pageId: t, lang: r || o });
    },
    [n, e, t, r, o]
  );
  return /* @__PURE__ */ l(Q, { children: /* @__PURE__ */ l("div", { className: "hidden", children: /* @__PURE__ */ l("div", { onDoubleClick: s, className: "h-full w-full items-center justify-center", children: /* @__PURE__ */ l("p", { className: "rounded-md bg-white px-2 py-1 text-xs", children: "Partial block. Double click to edit." }) }) }) });
}, Wk = () => {
  const t = ae(), { t: e } = K(), n = G("onError", wt), { hasPermission: r } = gt();
  let o = !r(Be.EDIT_BLOCK);
  const s = !r(Be.EDIT_STYLES), [i, a] = Oc();
  return t && t._type === "PartialBlock" ? /* @__PURE__ */ l(jk, { partialBlockId: t.partialBlockId }) : t ? o && s ? /* @__PURE__ */ l("div", { className: "p-4 text-center", children: /* @__PURE__ */ b("div", { className: "space-y-4 rounded-xl p-4 text-muted-foreground", children: [
    /* @__PURE__ */ l(oo, { className: "mx-auto text-3xl" }),
    /* @__PURE__ */ l("h1", { children: e("You don't have permission to edit settings or styles") }),
    /* @__PURE__ */ l("p", { children: e("Please contact your administrator to get access") })
  ] }) }) : s ? /* @__PURE__ */ l(on, { fallback: /* @__PURE__ */ l(ur, {}), onError: n, children: /* @__PURE__ */ b("div", { className: "no-scrollbar h-full max-h-min w-full overflow-y-auto", children: [
    /* @__PURE__ */ l(Va, {}, t == null ? void 0 : t._id),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("br", {})
  ] }) }) : o ? /* @__PURE__ */ l(on, { fallback: /* @__PURE__ */ l(ur, {}), onError: n, children: /* @__PURE__ */ b("div", { className: "no-scrollbar h-full max-h-min w-full overflow-y-auto overflow-x-hidden", children: [
    /* @__PURE__ */ l("div", { className: "flex w-full items-center justify-end", children: /* @__PURE__ */ l(ol, {}) }),
    /* @__PURE__ */ l(qa, {}),
    /* @__PURE__ */ l(sl, {}),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("br", {})
  ] }) }) : /* @__PURE__ */ l(on, { fallback: /* @__PURE__ */ l(ur, {}), onError: n, children: /* @__PURE__ */ b(ji, { value: i, onValueChange: (u) => {
    (u === "settings" || u === "styles") && a(u);
  }, className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ b(Wo, { className: "grid h-auto w-full grid-cols-2 p-1 py-1", children: [
      /* @__PURE__ */ l(lt, { value: "settings", className: "text-xs", children: e("Settings") }),
      /* @__PURE__ */ l(lt, { value: "styles", className: "text-xs", children: /* @__PURE__ */ b("div", { className: "flex w-full items-center justify-between", children: [
        /* @__PURE__ */ l("span", { className: "w-[90%] text-center", children: e("Styling") }),
        /* @__PURE__ */ l("span", { className: "w-[10%]", children: /* @__PURE__ */ l(ol, {}) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ b(jt, { value: "settings", className: "no-scrollbar h-full max-h-min overflow-y-auto", children: [
      /* @__PURE__ */ l(Va, {}, t == null ? void 0 : t._id),
      /* @__PURE__ */ l("br", {}),
      /* @__PURE__ */ l("br", {})
    ] }),
    /* @__PURE__ */ b(
      jt,
      {
        value: "styles",
        className: "no-scrollbar h-full max-h-min max-w-full overflow-y-auto overflow-x-hidden",
        children: [
          /* @__PURE__ */ l(qa, {}),
          /* @__PURE__ */ l(sl, {}),
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
}, Wt = 280, Gk = ({ isActive: t, show: e }) => /* @__PURE__ */ l(oe, { variant: t ? "default" : "ghost", size: "icon", onClick: e, children: /* @__PURE__ */ l(Gf, { className: "h-5 w-5" }) }), Uk = ({ isActive: t, show: e }) => bt() && /* @__PURE__ */ l(oe, { variant: t ? "default" : "ghost", size: "icon", onClick: e, children: /* @__PURE__ */ l(Wf, { className: "h-5 w-5" }) }), Kk = ({ isActive: t, show: e }) => G("flags.ai", !1) ? /* @__PURE__ */ l(oe, { variant: t ? "default" : "ghost", size: "icon", onClick: e, children: /* @__PURE__ */ l(Zs, {}) }) : null;
Vs("add-block", {
  button: Uk,
  label: "Add Blocks",
  position: "top",
  isInternal: !0,
  width: Wt,
  panel: () => /* @__PURE__ */ l(hu, { showHeading: !1, fromSidebar: !0, parentId: void 0, position: -1 })
});
Vs("chai-chat-panel", {
  button: Kk,
  label: "Ask AI",
  position: "top",
  isInternal: !0,
  width: Wt,
  panel: () => /* @__PURE__ */ l("div", { className: "", children: /* @__PURE__ */ l(Au, {}) })
});
Vs("outline", {
  button: Gk,
  label: "Outline",
  position: "top",
  isInternal: !0,
  width: Wt,
  panel: () => /* @__PURE__ */ l("div", { className: "-mt-8", children: /* @__PURE__ */ l(Wv, {}) })
});
const Jk = () => {
  const t = ip(), [e, n] = wi(), r = ne("outline"), [o, s] = $(Wt), [i, a] = vg(), [, c] = Oc(), d = qi("top"), u = qi("bottom"), p = Qu([...u ?? []]), f = I((N) => {
    N.preventDefault();
  }, []), h = D(() => [d].flat(), [d]), m = I(
    (N) => {
      console.log("handleMenuItemClick", N, e), n(e === N ? null : N);
    },
    [e, n]
  ), { t: g } = K(), y = D(() => [...d, ...u], [d, u]), x = G("htmlDir", "ltr"), w = ee(y, { id: e }) ?? ye(y), S = _(w, "width", Wt);
  z(() => {
    if (e !== null) {
      const N = ee(y, { id: e });
      N && _(N, "view", "standard") === "standard" && (r.current = e, s(_(N, "width", Wt)));
    }
  }, [e, y]);
  const v = D(() => {
    if (e === null) return 0;
    const N = ee(y, { id: e });
    return _(N, "view", "standard") === "standard" ? S : o;
  }, [e, S, o, y]), k = I(() => {
    n(r.current);
  }, [n, e]), T = I(() => {
    n("outline");
  }, [n]);
  z(() => {
    e !== null && !ee(y, { id: e }) && n("outline");
  }, [e, y]);
  const C = I(
    (N) => {
      m(N);
    },
    [m]
  );
  return /* @__PURE__ */ l("div", { dir: x, className: "h-screen max-h-full w-screen overflow-x-hidden bg-background text-foreground", children: /* @__PURE__ */ b(Rs, { children: [
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
                /* @__PURE__ */ l(Se, { asChild: !0, children: un(_(N, "button", Bn), {
                  position: "top",
                  panelId: N.id,
                  isActive: e === N.id,
                  show: () => C(N.id)
                }) }),
                /* @__PURE__ */ l(be, { side: "right", children: /* @__PURE__ */ l("p", { children: g(N.label) }) })
              ] }, "button-top-" + E)) }),
              /* @__PURE__ */ l("div", { className: "flex flex-col space-y-1" }),
              /* @__PURE__ */ l("div", { className: "flex flex-col", children: p == null ? void 0 : p.map((N, E) => /* @__PURE__ */ b(Ne, { children: [
                /* @__PURE__ */ l(Se, { asChild: !0, children: un(_(N, "button", Bn), {
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
                  children: /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l("div", { children: "Loading..." }), children: te.createElement(_(w, "panel", Bn), {}) })
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ l("div", { id: "canvas-container", className: "flex h-full max-h-full flex-1 flex-col bg-slate-800/20", children: /* @__PURE__ */ l(We, { children: /* @__PURE__ */ l(Ex, {}) }) }),
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
                /* @__PURE__ */ l(rf, { className: "rtl:ml-2" }),
                " ",
                g("AI Assistant")
              ] }) }) : i === "design-tokens" ? /* @__PURE__ */ b("div", { className: "mb-1 flex w-full items-center justify-between gap-2", children: [
                /* @__PURE__ */ b("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ l(tu, { className: "h-4 w-4 text-gray-600" }),
                  g("Design Tokens")
                ] }),
                /* @__PURE__ */ l(
                  oe,
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
                  oe,
                  {
                    onClick: () => a("block"),
                    variant: "ghost",
                    size: "icon",
                    className: "text-xs",
                    children: /* @__PURE__ */ l(at, { className: "h-4 w-4 rtl:ml-2" })
                  }
                )
              ] }) : null }) }) }),
              /* @__PURE__ */ l("div", { className: "flex h-full max-h-full w-full", children: /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l("div", { children: "Loading..." }), children: i === "ai" ? /* @__PURE__ */ l(Au, {}) : i === "theme" ? /* @__PURE__ */ l(ow, {}) : /* @__PURE__ */ l(Wk, {}) }) })
            ] }) })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l(zk, {}),
    e !== null && _(w, "view") === "drawer" && /* @__PURE__ */ l(Mk, { open: !0, onOpenChange: () => k(), children: /* @__PURE__ */ b(
      Iu,
      {
        side: "left",
        className: "flex flex-col gap-0 p-0 sm:max-w-full",
        style: { width: `${S}px` },
        children: [
          /* @__PURE__ */ l(Bu, { className: "border-b border-border px-2 py-2.5", children: /* @__PURE__ */ b(Ru, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ l("span", { className: "inline-block", children: _(w, "icon", null) }),
            /* @__PURE__ */ l("span", { children: g(_(w, "label", "")) })
          ] }) }),
          /* @__PURE__ */ l("div", { className: "h-full max-h-full overflow-y-auto p-4", children: /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l("div", { children: "Loading..." }), children: te.createElement(_(w, "panel", Bn), {
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
      /* @__PURE__ */ l("div", { className: "max-h-[70vh] overflow-y-auto p-4", children: /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l("div", { children: "Loading..." }), children: te.createElement(_(w, "panel", Bn), {
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
                /* @__PURE__ */ l(oe, { onClick: () => k(), variant: "ghost", size: "icon", className: "", children: /* @__PURE__ */ l(at, { className: "h-5 w-5" }) })
              ] }),
              /* @__PURE__ */ l("div", { className: "flex-1 overflow-y-auto p-4", children: /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l("div", { children: "Loading..." }), children: te.createElement(_(w, "panel", Bn), {
                close: T
              }) }) })
            ]
          }
        ) })
      }
    )
  ] }) });
}, Yk = P(!1), Xk = () => {
  const [t, e] = M(Yk);
  return [t, e];
}, qk = () => {
  const [t, e] = Xk(), { t: n } = K(), r = G("previewComponent", null);
  return t ? /* @__PURE__ */ b("div", { className: Ze("fixed inset-0 z-[999] bg-background", t ? "block" : "hidden"), children: [
    /* @__PURE__ */ b(oe, { size: "sm", className: "absolute right-0 top-0 m-4 space-x-2", onClick: () => e(!1), children: [
      /* @__PURE__ */ l(no, {}),
      /* @__PURE__ */ l("span", { children: n("Close Preview") })
    ] }),
    /* @__PURE__ */ l("div", { children: r ? /* @__PURE__ */ l(We, { fallback: /* @__PURE__ */ l(zn, { className: "h-96 w-full" }), children: te.createElement(r) }) : null })
  ] }) : null;
}, Zk = (t) => {
}, Qk = [
  "data-block-index",
  "draggable",
  "data-drop",
  "data-style-id",
  "data-block-parent",
  "data-style-prop",
  "data-highlighted"
], e1 = [
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
], Lu = (t) => t.type === "element" && ["script", "style", "link"].includes(t.tagName || "") || t.type === "comment" ? null : t.type === "text" ? t : t.type === "element" && t.attributes && t.attributes.find((e) => e.key === "id" && e.value === "add-block-bottom") ? null : (t.type === "element" && t.attributes && (t.attributes = t.attributes.filter((e) => !Qk.includes(e.key))), t.children && (t.children = t.children.map(Lu).filter((e) => e !== null)), t), Qr = (t, e, n = {}) => {
  var s, i, a, c, d, u;
  if (t.type !== "element" || !t.attributes)
    return t;
  if (t.tagName === "span" && t.attributes.find((f) => f.key === "role" && f.value === "link")) {
    t.tagName = "a", t.attributes = t.attributes.filter((m) => m.key !== "role");
    const f = (s = t.attributes.find((m) => m.key === "data-block-id")) == null ? void 0 : s.value, h = e == null ? void 0 : e.find((m) => (m == null ? void 0 : m._id) === f);
    if (h != null && h.link && ((a = (i = h == null ? void 0 : h.link) == null ? void 0 : i.href) == null ? void 0 : a.length) > 0) {
      const m = (c = h == null ? void 0 : h.link) == null ? void 0 : c.href, g = (d = h == null ? void 0 : h.link) == null ? void 0 : d.target;
      t.attributes.push({ key: "href", value: m }), typeof g == "string" && g.length > 0 && t.attributes.push({ key: "target", value: g });
    }
  }
  const r = t.attributes.find((p) => p.key === "data-block-type"), o = t.attributes.find((p) => p.key === "data-block-id");
  if (r) {
    const p = r.value;
    if (e1.includes(p) || (u = n == null ? void 0 : n.additionalCoreBlocks) != null && u.includes(p))
      t.attributes = t.attributes.filter((f) => f.key !== "data-block-type"), t.children && (t.children = t.children.map((f) => Qr(f, e, n)));
    else {
      const f = `chai-${cl(p)}`;
      t.tagName = f, t.attributes = [], t.attributes.push({ key: "chai-type", value: p });
      const h = Pe(p), m = e.find((g) => g._id === (o == null ? void 0 : o.value));
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
  return o && t.attributes.push({ key: "bid", value: o.value }), t.attributes = t.attributes.filter((p) => p.key !== "data-block-type" && p.key !== "data-block-id"), t;
}, t1 = () => {
  const [t] = Kn();
  return I(
    (e) => {
      var d, u;
      if (!t) return "";
      const n = e != null && e.blockId ? `[data-block-id="${e.blockId}"]` : "#canvas", r = (u = (d = t.contentDocument) == null ? void 0 : d.querySelector(n)) == null ? void 0 : u[n === "#canvas" ? "innerHTML" : "outerHTML"];
      if (!r) return "";
      const s = $f(r).map(Lu).filter((p) => p !== null), i = nh(), a = s.map((p) => Qr(p, i, e));
      let c = Ff(a);
      return c = c.replace(/#styles:,/g, "#styles:"), c.replace(/\s+/g, " ").trim();
    },
    [t]
  );
};
function il(t) {
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
        const h = il(f.name);
        u.push(`${h}="${f.value}"`);
      }
    const p = u.length > 0 ? ` ${u.join(" ")}` : "";
    return `${n}<${r}${p} />
`;
  }
  let s = `${n}<${r}`;
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
      const p = il(u.name);
      i.push(`${p}="${u.value}"`);
    }
  i.length > 0 && (s += " " + i.join(" "));
  const a = Array.from(t.childNodes);
  if (!a.some((u) => {
    var p;
    return u.nodeType === Node.TEXT_NODE ? (p = u.textContent) == null ? void 0 : p.trim() : !0;
  }))
    s += ` />
`;
  else {
    s += `>
`;
    for (const u of a)
      s += eo(u, e + 1);
    s += `${n}</${r}>
`;
  }
  return s;
}
function n1(t) {
  if (!t)
    return "";
  let e = "", n = 0;
  const r = "  ";
  return t = t.replace(/>\s+</g, "><").trim(), t.split(/(<\/?[^>]+>)/g).filter((s) => s.trim()).forEach((s) => {
    s.match(/^<\/\w/) ? (n = Math.max(0, n - 1), e += r.repeat(n) + s + `
`) : s.match(/\/>$/) ? e += r.repeat(n) + s + `
` : s.match(/^<\w[^>]*[^\/]>$/) ? (e += r.repeat(n) + s + `
`, n++) : s.trim() && (e += r.repeat(n) + s.trim() + `
`);
  }), e.trim();
}
const r1 = Hs(() => import("./code-display-BaLKScgW.js"));
async function o1(t) {
  try {
    const e = document.createElement("div");
    e.innerHTML = t;
    const n = Array.from(e.children);
    return { jsx: eo(n.length === 1 ? n[0] : n), html: e.innerHTML };
  } catch {
    return { html: t, jsx: t };
  }
}
const s1 = async ({
  selectedBlock: t,
  html: e,
  isTypeScript: n = !1
}) => {
  let r = (t == null ? void 0 : t._name) || (t == null ? void 0 : t._type) || "Component";
  r = ep(r).replace(/^./, (d) => d.toUpperCase());
  const o = "  ";
  let { jsx: s, html: i } = await o1(e);
  return s = s == null ? void 0 : s.split(`
`).join(`
${o}${o}`), s = `${n ? `import React from 'react';

` : ""}export const ${r}${n ? ": React.FC" : ""} = () => {
${o}return (
${o}${o}${s == null ? void 0 : s.trimEnd()}
${o})
}`, { jsx: s, html: n1(i), componentName: r };
}, i1 = ({ tab: t }) => {
  var x;
  const { t: e } = K(), [n, r] = $({ html: "", jsx: "" }), o = ae(), s = t1(), [i, a] = $(""), [c, d] = $(!1), u = () => {
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
  }, f = I(async () => {
    const w = o ?? { _name: "Body", _type: "Body" };
    try {
      d(!1);
      let S = s(
        o ? { blockId: o._id, additionalCoreBlocks: ["Icon"] } : { additionalCoreBlocks: ["Icon"] }
      );
      S = S.replace(/\s*bid=["'][^"']*["']/g, "");
      const v = t === "ts", {
        jsx: k,
        html: T,
        componentName: C
      } = await s1({
        selectedBlock: w,
        html: S,
        isTypeScript: v
      });
      r({ html: T || "", jsx: k }), a(C), d(!0);
    } catch {
      const S = "<div>Export failed. Close the modal and try again.</div>";
      r({ html: S, jsx: S }), Ce.error(e("Failed to generate export HTML"));
    }
  }, [e, t, o, s]);
  z(() => {
    f();
  }, [f, t]);
  const h = I(
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
  ] }), y = D(() => {
    const w = { extend: Uf() }, S = JSON.stringify(w, null, 2);
    return `{
  // Your tailwind config ...

  "theme": ${S == null ? void 0 : S.split(`
`).join(`
  `)},
}`;
  }, []);
  return ((x = n == null ? void 0 : n.jsx) == null ? void 0 : x.length) > 0 && c ? /* @__PURE__ */ l(
    r1,
    {
      onCopy: h,
      code: t === "tailwind" ? y : t === "html" ? n.html : n.jsx,
      language: p() || "",
      downloadText: g,
      onDownload: m
    },
    t
  ) : /* @__PURE__ */ l("div", { className: "flex h-[620px] w-full items-center justify-center p-4", children: "Generating code..." });
}, a1 = () => {
  const { t } = K(), [e, n] = $(!1), { setMode: r } = Mc(), [o, s] = $("js"), i = I(async () => {
    s("js"), r("view"), n(!0);
  }, [s, r, n]);
  return Mn(se.OPEN_EXPORT_CODE, i), /* @__PURE__ */ l($o, { open: e, onOpenChange: async () => {
    r("edit"), await new Promise((c) => setTimeout(c, 300)), n(!1);
  }, children: /* @__PURE__ */ b(Lr, { className: "max-w-5xl overflow-hidden border-border", children: [
    /* @__PURE__ */ b(Fo, { className: "flex flex-row items-center justify-between", children: [
      /* @__PURE__ */ l(Pr, { className: "text-foreground", children: t("Export Code") }),
      /* @__PURE__ */ l(ji, { defaultValue: "js", onValueChange: s, children: /* @__PURE__ */ b(Wo, { children: [
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
        children: /* @__PURE__ */ l(on, { fallback: /* @__PURE__ */ l("div", { children: "Something went wrong" }), children: /* @__PURE__ */ l(i1, { tab: o }) })
      }
    ) })
  ] }) });
}, l1 = () => {
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
}, c1 = () => {
  const { clear: t } = Ar(), [, e] = re(), { clearHighlight: n } = At(), [, r] = Fe(), [, o] = M(dc), { reset: s } = ui(), { setSaveState: i } = _r(), [, a] = ec(), [, c] = M(Io);
  return () => {
    a({}), e([]), r([]), n(), t(), o(!1), s(), i("SAVED"), c(0);
  };
}, d1 = (t, e) => {
  const n = [];
  let r = ee(t, { _id: e }), o = _(r, "_parent", "");
  for (; Ct(o) && !F(o); )
    n.push(r == null ? void 0 : r._parent), r = ee(t, { _id: o }), o = r == null ? void 0 : r._parent;
  return $t(n);
}, u1 = P([]), p1 = () => {
  const [t] = re(), e = Ue(He), [, n] = M(u1);
  z(() => {
    let r = [];
    const o = ye(t);
    Ct(o) && (r = [o, ...d1(e, o)]), n(r);
  }, [t, e, n]);
}, f1 = (t) => {
  const [, e] = le(), n = c1(), [r] = M(Bo);
  M(bi), Rc(), p1(), Ih(), Ah(), Fh();
  const { postMessage: o } = ac(), [, s] = M(nc), i = di();
  return z(() => {
    Qe.set(
      // @ts-ignore
      li,
      vr(t, ["blocks", "translations", "pageExternalData", "globalStyles"])
    );
  }, [t]), z(() => {
    Qe.set(ci, t.pageExternalData || {});
  }, [t.pageExternalData]), z(() => {
    Qe.set(Er, t.designTokens || {});
  }, [t.designTokens]), z(() => {
    s(!1), setTimeout(() => {
      const a = Eo(t.blocks || []);
      e(a), a && a.length > 0 && o({ type: "blocks-updated", blocks: a }), n(), s(!0), i(a);
    }, 400);
  }, [t.blocks]), z(() => {
    xs.changeLanguage(t.locale || "en");
  }, [t.locale]), z(() => {
    Zk(t.debugLogs ?? !1);
  }, [t.debugLogs]), z(() => {
    t.translations && ht(t.translations, (a, c) => {
      xs.addResourceBundle(c, "translation", a, !0, !0);
    });
  }, [t.translations]), z(() => (r !== "SAVED" ? window.onbeforeunload = () => "" : window.onbeforeunload = null, () => {
    window.onbeforeunload = null;
  }), [r]), null;
}, h1 = (t) => {
  const e = D(() => t.layout || Jk, [t.layout]), n = G("builderTheme", Xs), r = G("flags.exportCode", !1);
  return /* @__PURE__ */ b(Q, { children: [
    t.children,
    /* @__PURE__ */ l(Lc, { theme: n }),
    /* @__PURE__ */ l(e, {}),
    r && /* @__PURE__ */ l(a1, {})
  ] });
}, NC = (t) => {
  const e = t.onError || wt;
  return /* @__PURE__ */ l("div", { className: "h-screen w-screen", children: /* @__PURE__ */ b(on, { fallback: /* @__PURE__ */ l(ur, {}), onError: e, children: [
    /* @__PURE__ */ l(l1, {}),
    /* @__PURE__ */ l(h1, { ...t }),
    /* @__PURE__ */ l(f1, { ...t }),
    /* @__PURE__ */ l(qk, {}),
    /* @__PURE__ */ l(Mf, { richColors: !0 })
  ] }) });
}, SC = ({
  baseUrl: t = "https://chaibuilder-sdk.vercel.app"
} = {}) => ({
  name: "Chai Library",
  description: "",
  getBlocksList: async (e) => {
    try {
      const n = await fetch(`${t}/library-blocks/blocks-list.json`);
      return n.ok ? (await n.json()).map((o) => {
        var s;
        return {
          ...o,
          preview: (s = o.preview) != null && s.startsWith("http") ? o.preview : `${t}${o.preview}`
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
}), m1 = (t, e) => t.map((n) => {
  const r = Pe(n._type);
  if (!r) return n;
  const o = r.i18nProps;
  if (!o) return n;
  const s = Z(e, { _type: n._type }), i = dn(n, o);
  return ht(i, (a, c) => {
    const d = ee(s, (u) => {
      var h;
      const p = typeof u[c] == "string" ? (h = u[c]) == null ? void 0 : h.trim().toLowerCase() : JSON.stringify(u[c]), f = typeof a == "string" ? a.trim().toLowerCase() : JSON.stringify(a);
      return p === f;
    });
    if (d) {
      const u = Z(Object.keys(d), (f) => Re(f, `${c}-`)), p = dn(d, u);
      n = { ...n, ...p };
    }
  }), n;
}), EC = () => {
  const [t] = le();
  return I(
    (e) => {
      const n = fr(e), r = gf(n, t);
      return m1(r, t);
    },
    [t]
  );
}, Pu = (t, e) => {
  const n = t.filter((o) => o._parent === e), r = n.flatMap((o) => Pu(t, o._id));
  return [...n, ...r];
}, g1 = (t, e) => {
  const n = e.find((o) => o._id === t);
  if (!n) return [];
  const r = Pu(e, t);
  return [n, ...r];
}, _C = () => {
  const t = ae(), [e] = le();
  return I(
    (n = "") => {
      const r = t != null && t._id ? g1(t._id, e) : e;
      return r ? jn(
        r.map((o) => {
          const s = Pe(o._type);
          if (!s) return null;
          const i = (s == null ? void 0 : s.i18nProps) ?? [];
          if (i.length === 0) return null;
          const a = n === "ALL" ? Object.keys(o).filter((d) => i.find((u) => d.startsWith(u))) : i.map((d) => n ? `${d}-${n}` : d), c = dn(o, ["_id"]);
          return ht(a, (d) => {
            c[d] = _(o, d, _(o, d.replace(`-${n}`, "")));
          }), c;
        })
      ) : [];
    },
    [t == null ? void 0 : t._id, e]
  );
}, Ou = (t, e) => {
  const n = t.filter((s) => s._parent === e), r = n.map((s) => s._id), o = n.flatMap((s) => Ou(t, s._id));
  return [...r, ...o];
}, b1 = (t, e, n) => {
  const r = ee(t, { _id: e });
  if (!r) return t;
  const o = t.findIndex((p) => p._id === e), s = Ou(t, e), i = /* @__PURE__ */ new Set([e, ...s]), a = t.filter((p) => !i.has(p._id)), c = new Set(n.map((p) => p._id)), d = n.map((p) => !p._parent || !c.has(p._parent) ? { ...p, _parent: r._parent } : p);
  return [
    ...a.slice(0, o),
    ...d,
    ...a.slice(o)
  ];
}, AC = () => {
  const [, t] = re(), { setNewBlocks: e } = $e(), { hasPermission: n } = gt();
  return I(
    (r, o) => {
      if (!n(Be.EDIT_BLOCK)) return;
      const s = Qe.get(He), i = r ? b1(s, r, o) : o;
      e(i), o.length > 0 && setTimeout(() => t([o[0]._id]), 200);
    },
    [t, e, n]
  );
};
if (typeof window > "u")
  throw new Error("@chaibuilder/sdk is only supported in the browser. Avoid using it in the server side.");
export {
  lt as $,
  Ko as A,
  Di as B,
  Dd as C,
  $o as D,
  Jo as E,
  Ne as F,
  Se as G,
  be as H,
  ou as I,
  su as J,
  tv as K,
  Vn as L,
  au as M,
  Vd as N,
  lu as O,
  zo as P,
  $i as Q,
  Fi as R,
  Wi as S,
  Go as T,
  Nn as U,
  AC as V,
  fi as W,
  t1 as X,
  gt as Y,
  ji as Z,
  Wo as _,
  re as a,
  vi as a$,
  mu as a0,
  Ui as a1,
  Ki as a2,
  Ji as a3,
  yu as a4,
  bu as a5,
  vu as a6,
  xu as a7,
  xo as a8,
  _v as a9,
  Fk as aA,
  NC as aB,
  jt as aC,
  hu as aD,
  Va as aE,
  qa as aF,
  Ex as aG,
  rv as aH,
  Wv as aI,
  ow as aJ,
  fv as aK,
  Ok as aL,
  zk as aM,
  Vk as aN,
  ev as aO,
  uv as aP,
  a1 as aQ,
  c0 as aR,
  SC as aS,
  EC as aT,
  ah as aU,
  Oo as aV,
  Rr as aW,
  Ar as aX,
  ft as aY,
  lh as aZ,
  $e as a_,
  V0 as aa,
  H0 as ab,
  eu as ac,
  Rx as ad,
  Rs as ae,
  Ho as af,
  bx as ag,
  G as ah,
  uc as ai,
  kC as aj,
  K0 as ak,
  CC as al,
  Tv as am,
  Be as an,
  yg as ao,
  Er as ap,
  Zr as aq,
  _r as ar,
  le as as,
  vg as at,
  Fl as au,
  zl as av,
  Mk as aw,
  Iu as ax,
  Bu as ay,
  Ru as az,
  _t as b,
  Fe as b0,
  Ut as b1,
  ui as b2,
  Bh as b3,
  Sr as b4,
  vC as b5,
  Mi as b6,
  W0 as b7,
  ma as b8,
  Ql as c,
  Je as d,
  Lr as e,
  Fo as f,
  Pr as g,
  Un as h,
  $d as i,
  Fd as j,
  zd as k,
  Hd as l,
  Ls as m,
  wi as n,
  Ox as o,
  bn as p,
  Px as q,
  ae as r,
  _C as s,
  dh as t,
  Od as u,
  kn as v,
  Cn as w,
  Ft as x,
  Ee as y,
  Uo as z
};
