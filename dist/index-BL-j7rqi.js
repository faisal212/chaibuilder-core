var rp = Object.defineProperty;
var op = (t, e, n) => e in t ? rp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Jt = (t, e, n) => op(t, typeof e != "symbol" ? e + "" : e, n);
import { jsx as l, jsxs as b, Fragment as Q } from "react/jsx-runtime";
import { noop as Ct, get as _, has as le, find as ee, filter as Z, flatten as $t, map as A, includes as Ie, without as sp, compact as Wn, forEach as So, keys as yt, isEmpty as F, set as Ue, unset as ip, omit as vr, isString as Nt, chunk as ap, values as Lt, pick as dn, startsWith as Re, isFunction as Zt, isObject as Vs, memoize as lp, each as bt, first as ye, isEqual as cp, findIndex as ir, throttle as dp, some as up, uniq as js, cloneDeep as so, isArray as kr, isNull as yl, split as pp, reject as Yr, take as fp, debounce as Ws, startCase as Kt, isNumber as hp, parseInt as mp, isNaN as gp, range as qe, flattenDeep as Ot, toLower as xl, nth as na, findLast as bp, intersection as yp, toUpper as es, kebabCase as wl, capitalize as Fn, groupBy as vl, sortBy as xp, reverse as wp, camelCase as vp } from "lodash-es";
import * as W from "react";
import ne, { useMemo as M, useCallback as B, useState as $, useEffect as z, useRef as te, Component as kl, Children as kp, memo as Gn, startTransition as Cp, createElement as un, createContext as Eo, useContext as yn, Suspense as Ge, lazy as Gs, useId as Np } from "react";
import { ErrorBoundary as on } from "react-error-boundary";
import { F as j, z as Cr, B as re, n as Sp, u as ts, o as Ep, l as Cl, d as _p, G as Nl, s as Sl, v as Us, y as Ap, w as ra } from "./register-chai-top-bar-DWmJ2efT.js";
import { Provider as Tp } from "react-wrap-balancer";
import { flip as Ip, size as Bp, limitShift as Rp } from "@floating-ui/dom";
import { useFloating as Lp, shift as Pp } from "@floating-ui/react-dom";
import { ChevronRightIcon as Un, CheckIcon as Nr, CircleIcon as El, PinTopIcon as Op, PinBottomIcon as Mp, PinLeftIcon as Dp, PinRightIcon as $p, GearIcon as Fp, DragHandleDots2Icon as zp, ArrowUpIcon as qt, PlusIcon as Ze, CopyIcon as Ks, TrashIcon as Ys, CaretDownIcon as vs, Cross1Icon as at, FontBoldIcon as Hp, FontItalicIcon as _l, UnderlineIcon as Al, StrikethroughIcon as Vp, ListBulletIcon as ks, ValueIcon as jp, TextAlignLeftIcon as oa, TextAlignCenterIcon as sa, TextAlignRightIcon as ia, Link2Icon as Wp, LinkBreak2Icon as Tl, EnterFullScreenIcon as Gp, Pencil2Icon as _o, MagnifyingGlassIcon as Il, ChevronLeftIcon as Bl, LoopIcon as Rl, IdCardIcon as Ll, ChevronDownIcon as xn, InfoCircledIcon as pr, FileIcon as Up, PlusCircledIcon as Kp, DotsVerticalIcon as Ao, TriangleDownIcon as Yp, RowSpacingIcon as Jp, Cross2Icon as To, LetterCaseUppercaseIcon as Xp, OverlineIcon as qp, StretchHorizontallyIcon as Zp, AlignRightIcon as Qp, AlignCenterHorizontallyIcon as ef, AlignLeftIcon as tf, ArrowLeftIcon as Qn, ArrowDownIcon as Rn, ArrowRightIcon as er, HeightIcon as nt, WidthIcon as rt, BorderAllIcon as It, ArrowBottomLeftIcon as nf, ArrowBottomRightIcon as rf, ArrowTopRightIcon as Pl, ArrowTopLeftIcon as of, EyeClosedIcon as io, EyeOpenIcon as Ol, BoxIcon as Io, MinusIcon as sf, CrossCircledIcon as af, TokensIcon as lf, ChevronUpIcon as cf, ReloadIcon as Js, CaretRightIcon as df, FrameIcon as uf, EraserIcon as Ml, DownloadIcon as pf, CardStackPlusIcon as ff, CardStackIcon as Xs, ScissorsIcon as hf, ExclamationTriangleIcon as mf, StackIcon as gf, DoubleArrowDownIcon as bf, DoubleArrowUpIcon as yf, ResetIcon as ao, UploadIcon as xf, TextIcon as wf, CornerTopRightIcon as vf, MixerHorizontalIcon as lo, SunIcon as Dl, MoonIcon as $l, FaceIcon as kf, ShuffleIcon as Cf, ChatBubbleIcon as Nf, StopIcon as Sf, LightningBoltIcon as Ef } from "@radix-ui/react-icons";
import { useDebouncedCallback as dt, useThrottledCallback as pn, useResizeObserver as Cs } from "@react-hookz/web";
import { useTranslation as K, initReactI18next as _f } from "react-i18next";
import * as Ae from "@radix-ui/react-dropdown-menu";
import { f as Oe, a as qs, j as Bo, l as Zs, b as aa } from "./core-nSRy3D7z.js";
import Af from "@rjsf/core";
import Tf from "@rjsf/validator-ajv8";
import { atom as P, getDefaultStore as If, useAtomValue as Ke, useAtom as D, useSetAtom as gt, Provider as Bf } from "jotai";
import { C as Mt, S as St, R as ar, D as Fr, a as Jr } from "./STRINGS-BExFecZW.js";
import { isObject as la } from "@rjsf/utils";
import { splitAtom as Fl, atomWithStorage as Et, useAtomCallback as zl } from "jotai/utils";
import { g as fn, a as Hl, c as Qe } from "./common-functions-D2lMFR6K.js";
import Rf from "tree-model";
import Lf from "undo-manager";
import * as xe from "@radix-ui/react-dialog";
import { f as Pf, a as Vl, b as ca, c as da, d as ua, r as Of, e as Mf, h as wn, k as Df, g as fr, m as $f } from "./apply-binding-EyK74wCy.js";
import { cva as Qs } from "class-variance-authority";
import * as zn from "@radix-ui/react-tooltip";
import Ns, { t as Pn } from "i18next";
import { Command as tt } from "cmdk";
import * as hr from "@radix-ui/react-popover";
import { useEditor as Ff, BubbleMenu as zf, EditorContent as jl } from "@tiptap/react";
import Hf from "@tiptap/extension-text-style";
import Vf from "@tiptap/extension-highlight";
import jf from "@tiptap/extension-link";
import Wf from "@tiptap/extension-placeholder";
import Gf from "@tiptap/extension-text-align";
import Uf from "@tiptap/extension-underline";
import Kf from "@tiptap/starter-kit";
import Yf, { clsx as Jf } from "clsx";
import { twMerge as Wl } from "tailwind-merge";
import { HexAlphaColorPicker as Xf } from "react-colorful";
import { e as ei, a as qf, d as Gl, f as Zf, h as Qf, g as eh, i as th } from "./chai-theme-helpers-a3cYjSJr.js";
import pa, { createPortal as nh } from "react-dom";
import * as Ss from "@radix-ui/react-switch";
import * as hn from "@radix-ui/react-accordion";
import Ul from "fuse.js";
import * as Ro from "@radix-ui/react-hover-card";
import rh from "react-autosuggest";
import { toast as Ce, Toaster as oh } from "sonner";
import * as sn from "@radix-ui/react-scroll-area";
import * as vn from "@radix-ui/react-tabs";
import * as Kl from "@radix-ui/react-label";
import * as _e from "@radix-ui/react-select";
import { Tree as sh } from "react-arborist";
import * as Ye from "@radix-ui/react-alert-dialog";
import * as Yl from "@radix-ui/react-separator";
import * as tr from "@radix-ui/react-slider";
import { u as ti } from "./fonts-CnJAmks1.js";
import { parse as ih, stringify as ah } from "himalaya";
import "nanoid";
import lh from "@tailwindcss/container-queries";
import ch from "@tailwindcss/forms";
import dh from "@tailwindcss/typography";
import { motion as zr } from "framer-motion";
import { PlusIcon as uh, ListTree as ph } from "lucide-react";
import { s as fh } from "./get-chai-builder-tailwind-config-CABRhEOd.js";
import { useHotkeys as Rt } from "react-hotkeys-hook";
import hh from "tailwindcss/plugin";
function Hn({
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
const ni = ({
  className: t = "h-full w-full",
  onClick: e = Ct
}) => /* @__PURE__ */ l("svg", { className: t, viewBox: "0 0 256 256", fill: "currentColor", onClick: e, children: /* @__PURE__ */ l("path", { d: "m198.39 128.986-52.16-19.216-19.216-52.16a16 16 0 0 0-30.028 0L77.77 109.77l-52.16 19.216a16 16 0 0 0 0 30.028l52.16 19.216 19.216 52.16a16 16 0 0 0 30.028 0l19.216-52.16 52.16-19.216a16 16 0 0 0 0-30.028m-57.69 34.23a15.97 15.97 0 0 0-9.483 9.483l-19.22 52.152-19.214-52.15a15.97 15.97 0 0 0-9.482-9.484l-52.152-19.22 52.15-19.214a15.97 15.97 0 0 0 9.484-9.482l19.22-52.152 19.214 52.15a15.97 15.97 0 0 0 9.482 9.484l52.152 19.22ZM144 40a8 8 0 0 1 8-8h16V16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0V48h-16a8 8 0 0 1-8-8m104 48a8 8 0 0 1-8 8h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 8 8" }) }), kn = Ae.Root, Cn = Ae.Trigger, mh = W.forwardRef(({ className: t, inset: e, children: n, ...r }, o) => /* @__PURE__ */ b(
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
      /* @__PURE__ */ l(Un, { className: "ml-auto h-4 w-4" })
    ]
  }
));
mh.displayName = Ae.SubTrigger.displayName;
const gh = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
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
gh.displayName = Ae.SubContent.displayName;
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
const Jl = W.forwardRef(({ className: t, children: e, checked: n, ...r }, o) => /* @__PURE__ */ b(
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
Jl.displayName = Ae.CheckboxItem.displayName;
const bh = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ b(
  Ae.RadioItem,
  {
    ref: r,
    className: j(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t
    ),
    ...n,
    children: [
      /* @__PURE__ */ l("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ l(Ae.ItemIndicator, { children: /* @__PURE__ */ l(El, { className: "h-2 w-2 fill-current" }) }) }),
      e
    ]
  }
));
bh.displayName = Ae.RadioItem.displayName;
const Xl = W.forwardRef(({ className: t, inset: e, ...n }, r) => /* @__PURE__ */ l(
  Ae.Label,
  {
    ref: r,
    className: j("px-2 py-1.5 text-sm font-semibold", e && "pl-8", t),
    ...n
  }
));
Xl.displayName = Ae.Label.displayName;
const ql = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(Ae.Separator, { ref: n, className: j("-mx-1 my-1 h-px bg-muted", t), ...e }));
ql.displayName = Ae.Separator.displayName;
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
}, xt = (t, e) => {
  if (!t) return !0;
  const n = Oe(t);
  return n && n.canAcceptBlock ? n.canAcceptBlock(e) : !1;
}, co = (t) => {
  const e = Oe(t);
  return e ? le(e, "canAcceptBlock") : !1;
}, yh = (t, e) => {
  const n = Oe(e);
  return n && n.canBeNested ? n.canBeNested(t) : !0;
}, ri = (t) => {
  const e = Oe(t);
  return e && e.canDuplicate ? e.canDuplicate() : !0;
}, oi = (t) => {
  const e = Oe(t);
  return e && e.canDelete ? e.canDelete() : !0;
}, fa = (t, { dragSource: e, dropTarget: n }) => {
  const r = _(e, "data._type", ""), o = _(n, "data._type", "");
  return xt(o, r);
};
import.meta.vitest && describe("canDropBlock Function", () => {
  it('should return false if dragSourceType is "Slot"', () => {
    const t = { data: { _type: "Slot" } }, e = { data: {} };
    expect(fa({}, { dragSource: t, dropTarget: e })).toBe(!0);
  }), it("should return true if dropTargetType is empty", () => {
    const t = { data: { _type: "Box" } }, e = { data: {} };
    expect(fa({}, { dragSource: t, dropTarget: e })).toBe(!0);
  });
});
class xh {
  constructor() {
    Jt(this, "subscribers", /* @__PURE__ */ new Map());
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
const me = new xh();
function Zl(t, e, n) {
  const r = Z(t, (s) => s._parent === e), o = [];
  for (let s = 0; s < r.length; s++)
    if (Z(t, { _parent: r[s]._id }).length > 0) {
      const i = fn();
      o.push({ ...r[s], oldId: r[s]._id, _id: i, _parent: n }), o.push($t(Zl(t, r[s]._id, i)));
    } else
      o.push({
        ...r[s],
        oldId: r[s]._id,
        _id: fn(),
        _parent: n
      });
  return $t(o);
}
function si(t) {
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
const Es = (t, e, n = null) => {
  let r = ee(t, { _id: e });
  r = { ...r, oldId: r._id, _id: fn() }, n !== (r == null ? void 0 : r._parent) && (r = { ...r, _parent: n });
  const o = [r];
  return Z(t, { _parent: e }).length > 0 && o.push($t(Zl(t, e, r._id))), $t(o);
}, Fe = P([]);
Fe.debugLabel = "presentBlocksAtom";
const Ql = P((t) => {
  const e = t(Fe);
  return si([...e]);
});
Ql.debugLabel = "treeDSBlocks";
const Sr = Fl(Fe);
Sr.debugLabel = "pageBlocksAtomsAtom";
const wh = P("");
wh.debugLabel = "builderActivePageAtom";
const vh = P(-1);
vh.debugLabel = "destinationDropIndexAtom";
const ec = P([]);
ec.debugLabel = "buildingBlocksAtom";
const kh = P((t) => {
  const e = t(ec);
  return Z(e, (n) => le(n, "blockId"));
});
kh.debugLabel = "globalBlocksAtom";
const Kn = P([]);
Kn.debugLabel = "structureErrorsAtom";
const ii = P(!0);
ii.debugLabel = "structureValidationValidAtom";
const ai = P(!1);
ai.debugLabel = "hasStructureErrorsAtom";
const li = P(!1);
li.debugLabel = "hasStructureWarningsAtom";
const tc = P((t) => t(Kn).filter((n) => n.severity === "error").length);
tc.debugLabel = "structureErrorCountAtom";
const nc = P((t) => t(Kn).filter((n) => n.severity === "warning").length);
nc.debugLabel = "structureWarningCountAtom";
const rc = P((t) => {
  const e = t(Kn), n = {};
  return e.forEach((r) => {
    r.blockId && (n[r.blockId] || (n[r.blockId] = []), n[r.blockId].push(r));
  }), n;
});
rc.debugLabel = "structureErrorsByBlockAtom";
const Ut = P({}), Ch = P({}), Pe = If(), Nh = () => Pe.get(Fe), G = (t, e) => {
  const n = Ke(pi);
  return M(() => _(n, t, e), [n, t, e]);
}, oc = P("");
oc.debugLabel = "selectedLanguageAtom";
const Je = () => {
  const t = G("languages", []), e = G("fallbackLang", "en"), [n, r] = D(oc), o = (s) => {
    r(e === s ? "" : s);
  };
  return {
    languages: t == null ? void 0 : t.filter((s) => s !== e),
    fallbackLang: e,
    selectedLang: n,
    setSelectedLang: o
  };
}, Er = P([]);
Er.debugLabel = "selectedBlockIdsAtom";
const sc = P((t) => {
  const e = t(Ut), n = Object.values(e).flatMap((r) => r.blocks);
  return [...t(Fe), ...n];
});
sc.debugLabel = "selectableBlocksAtom";
const ci = P((t) => {
  const e = t(sc), n = t(Er);
  return A(
    Z(e, ({ _id: r }) => Ie(n, r)),
    (r) => ({ ...r })
  );
});
ci.debugLabel = "selectedBlocksAtom";
const Lo = P((t) => {
  const e = t(ci);
  if (e.length !== 0 && e.length === 1)
    return e[0];
});
Lo.debugLabel = "selectedBlockAtom";
const ae = () => Ke(Lo), Sh = (t) => _(t, "_parent", null), Eh = P((t) => {
  const e = t(ci), n = A(e, Sh);
  return Z(t(Fe), (r) => Ie(n, r._id));
});
Eh.debugLabel = "selectedBlocksParentsAtom";
const ic = P(() => !1);
ic.debugLabel = "selectedBlockFlexChildAtom";
const ac = P(() => !1);
ac.debugLabel = "selectedBlockGridChildAtom";
const di = P("");
di.debugLabel = "styleStateAtom";
const lc = Et("styleBreakpoint", "xs");
lc.debugLabel = "styleBreakpointAtom";
const _h = () => ({
  flexChild: Ke(ic),
  gridChild: Ke(ac)
}), Ah = P((t) => {
  const e = t(Lo), n = t(Fe);
  let r = e;
  const o = [e];
  do {
    const s = n.find(({ _id: i }) => i === (r == null ? void 0 : r._parent));
    r = s, s && o.push(s);
  } while (r != null && r._parent);
  return o;
}), Th = () => Wn(Ke(Ah)), oe = () => {
  const [t, e] = D(Er), n = B(
    (r) => {
      e((o) => Ie(o, r) ? sp(o, r) : [...o, r]);
    },
    [e]
  );
  return [t, e, n];
}, cc = (t, e, n) => {
  const r = Oe(_(n, "_type", ""));
  if (!r) return t;
  const o = { ...t };
  return So(yt(t), (s) => {
    if (Ie(_(r, "i18nProps", []), s) && !F(e)) {
      const i = `${s}-${e}`;
      Ue(o, i, t[s]), ip(o, s);
    }
  }), o;
}, _t = () => {
  const { updateBlocks: t } = ze(), { selectedLang: e } = Je(), n = ae();
  return B(
    (r, o, s) => {
      const i = cc(o, e, n);
      t(r, i, s);
    },
    [e, n, t]
  );
}, Ih = () => {
  const { updateMultipleBlocksProps: t } = ze();
  return B(
    (e) => {
      t(e);
    },
    [t]
  );
}, Bh = () => {
  const { updateBlocksRuntime: t } = ze();
  return B(
    async (e, n, r = 30) => {
      const o = yt(vr(n, ["_id"]));
      for (const s of o) {
        const i = n[s];
        if (Nt(i)) {
          const a = ap(i.split(""), 12);
          let c = "";
          t([e], { [s]: "" });
          for (let d = 0; d < a.length; d++)
            c += a[d].join(""), t([e], { [s]: c }), await new Promise((p) => setTimeout(p, r));
        }
      }
    },
    [t]
  );
}, Rh = () => {
  const { updateMultipleBlocksProps: t } = ze(), e = Bh();
  return B(
    async (n) => {
      for (const r of n)
        await e(r._id, r);
      t(n);
    },
    [e, t]
  );
}, dc = () => {
  const { updateBlocksRuntime: t } = ze(), { selectedLang: e } = Je(), n = ae();
  return B(
    (r, o) => {
      const s = cc(o, e, n);
      t(r, s);
    },
    [e, n, t]
  );
}, ui = P({});
ui.debugLabel = "blockRepeaterDataAtom";
const uc = () => D(ui), Lh = (t, e, n, r) => {
  const [o, s] = $({
    status: "idle",
    props: {},
    error: void 0
  }), i = dc(), a = G("getBlockAsyncProps", async (h) => ({})), c = gt(ui), d = JSON.stringify([t == null ? void 0 : t._id, ...Lt(dn(t, n ?? []))]), p = (t == null ? void 0 : t._type) === "Repeater" && Re(t.repeaterItems, `{{${Mt}`), u = (t == null ? void 0 : t._type) !== "Repeater" && e === "live";
  return z(() => {
    if (e === "mock") {
      if (Zt(r)) {
        s((g) => ({ ...g, status: "loading", props: {} }));
        const h = r({ block: t });
        if (!la(h))
          throw new Error("mockDataProvider should return an object");
        s((g) => ({ ...g, status: "loaded", props: h }));
      }
      return;
    }
    e === "live" && (!p && !u || (s((h) => ({ ...h, status: "loading", props: {} })), a({ block: t }).then((h = {}) => {
      p ? (c((g) => ({
        ...g,
        [t._id]: {
          status: "loaded",
          props: _(h, "items", []),
          repeaterItems: t.repeaterItems
        }
      })), s((g) => ({ ...g, status: "loaded", props: { totalItems: _(h, "totalItems") } })), i([t._id], { totalItems: _(h, "totalItems") })) : s((g) => ({ ...g, status: "loaded", props: la(h) ? h : {} }));
    }).catch((h) => {
      p ? (c((g) => ({
        ...g,
        [t._id]: { status: "error", error: h, props: [] }
      })), s((g) => ({ ...g, status: "error", error: h, props: {} }))) : s((g) => ({ ...g, status: "error", error: h, props: {} }));
    })));
  }, [t == null ? void 0 : t._id, d, p, u, r, e]), {
    $loading: _(o, "status") === "loading",
    ...t ? _(o, "props", {}) : {}
  };
}, pi = P(null);
pi.debugLabel = "chaiBuilderPropsAtom";
const Ph = P({});
Ph.debugLabel = "chaiExternalDataAtom";
const Oh = P({});
Oh.debugLabel = "chaiRjsfFieldsAtom";
const Mh = P({});
Mh.debugLabel = "chaiRjsfWidgetsAtom";
const Dh = P({});
Dh.debugLabel = "chaiRjsfTemplatesAtom";
const fi = P({});
fi.debugLabel = "chaiPageExternalDataAtom";
const _r = P({});
_r.debugLabel = "chaiDesignTokensAtom";
const Yn = () => {
  const [t] = uc(), e = M(() => {
    const r = {};
    return Object.entries(t).forEach(([o, s]) => {
      s.status === "loaded" && s.repeaterItems && (r[s.repeaterItems.replace("}}", `/${o}`).replace("{{", "")] = s.props);
    }), r;
  }, [t]);
  return { ...Ke(fi), ...e };
}, Po = P(0), pc = P({
  isOpen: !1,
  blockId: null
}), $h = [
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
          const d = [...a, c._id], p = c._type === "Link", u = c._type === "Button" && c.link && c.link.href && c.link.href.trim() !== "", f = p || u;
          if (f && i) {
            const h = p ? "Link" : "Button with href";
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
            const c = s.find((f) => f._id === a._parent), d = c && c._type === "Link", p = c && c._type === "Button" && c.link && c.link.href && c.link.href.trim() !== "";
            if (d || p) {
              const f = a._type === "Link" ? "Link" : "Button with href", h = d ? "Link" : "Button with href";
              n.push({
                id: `nested-interactive-parent-${a._id}`,
                message: `${f} cannot be nested inside ${h}`,
                severity: "error",
                blockId: a._id
              });
            }
            let u = c;
            for (; u && u._parent; ) {
              const f = s.find((h) => h._id === u._parent);
              if (f) {
                const h = f._type === "Link", g = f._type === "Button" && f.link && f.link.href && f.link.href.trim() !== "";
                if (h || g) {
                  const m = a._type === "Link" ? "Link" : "Button with href", y = h ? "Link" : "Button with href";
                  n.push({
                    id: `nested-interactive-ancestor-${a._id}`,
                    message: `${m} cannot be nested inside ${y}`,
                    severity: "error",
                    blockId: a._id
                  });
                  break;
                }
              }
              u = f;
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
            const c = a.includes("TableRow"), d = a.includes("TableHead") || a.includes("TableBody"), p = a.includes("Table");
            (!c || !d || !p) && n.push({
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
], Fh = [
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
class zh {
  constructor() {
    Jt(this, "rules", [...$h]);
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
    this.rules.push(...Fh);
  }
  getRuleNames() {
    return this.rules.map((e) => e.name);
  }
}
const ns = new zh(), hi = (t = {}) => {
  const e = G("flags.validateStructure", !0), n = gt(Kn), r = gt(ii), o = gt(ai), s = gt(li), i = B(
    (c) => {
      const d = c;
      if (!e || !d || d.length === 0) return;
      const p = si(d), u = [];
      let f = ns.getRules();
      t.enableAccessibilityRules && (ns.enableAccessibilityRules(), f = ns.getRules()), t.customRules && t.customRules.length > 0 && f.push(...t.customRules), f.forEach((y) => {
        try {
          const x = y.validate(d, p);
          u.push(...x);
        } catch (x) {
          console.error(`Error running structure rule "${y.name}":`, x);
        }
      });
      const h = u.filter((y) => y.severity === "error").length > 0, g = u.filter((y) => y.severity === "warning").length > 0, m = !h;
      n(u), r(m), o(h), s(g);
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
  return dt(
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
}, Hh = [
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
], _s = {
  bodyFont: "Arial",
  headingFont: "Arial",
  roundedCorners: 5,
  primaryColor: "#570df8",
  secondaryColor: "#f002b8",
  bodyBgDarkColor: "#031022",
  bodyBgLightColor: "#fcfcfc",
  bodyTextDarkColor: "#ffffff",
  bodyTextLightColor: "#000000"
}, Vh = P(_s);
P(null);
const jh = () => {
  const [t, e] = D(Vh);
  return [
    Vs(t) ? { ..._s, ...t } : _s,
    e
  ];
}, Wh = P(null), Gh = () => ({ currentPage: Ke(Wh) }), Uh = lp((t) => {
  const e = Oe(t), n = _(e, "schema.properties", {});
  return Wn(
    Object.keys(n).map((r) => _(n[r], "builderProp", !1) || _(n[r], "runtime", !1) ? r : null)
  );
}), Kh = () => {
  const [t] = jh(), { currentPage: e } = Gh(), [n] = ue();
  return B(() => {
    const r = A(n, (o) => vr(o, Uh(o._type)));
    return {
      currentPage: e,
      blocks: r
    };
  }, [t, e, n]);
}, fc = P(!1), Yh = () => D(fc), wt = () => {
  const t = G("permissions", null);
  return { hasPermission: B(
    (n) => t ? t.includes(n) : !0,
    [t]
  ) };
}, hc = (t) => Z(
  t.map(
    (e) => e._type === "PartialBlock" || e._type === "GlobalBlock" ? _(e, "partialBlockId", _(e, "globalBlock", "")) : null
  ),
  Boolean
);
function mc(t, e, n, r = /* @__PURE__ */ new Set()) {
  if (t === e) return !0;
  if (r.has(e)) return !1;
  r.add(e);
  const o = n[e] || [];
  for (const s of o)
    if (s === t || mc(t, s, n, r)) return !0;
  return !1;
}
function As(t, e, n = /* @__PURE__ */ new Set()) {
  if (n.has(t)) return 0;
  n.add(t);
  const r = e[t] || [];
  return r.length === 0 ? 1 : 1 + Math.max(...r.map((o) => As(o, e, new Set(n))));
}
const gc = () => {
  const [t, e] = $(!1), [n, r] = $(null), [o, s] = D(Ch), i = G("getPartialBlocks", async () => ({})), a = B(async () => {
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
}, mi = () => {
  const [t, e] = D(Ut), n = B(
    (o) => _(t, `${o}.blocks`, []),
    [t]
  ), r = B(() => e({}), [e]);
  return { getPartialBlocks: n, reset: r };
}, uo = 4, Jh = () => {
  const [t] = D(Ut);
  return M(() => {
    const e = {};
    return Object.entries(t).forEach(([n, r]) => {
      e[n] = r.dependencies;
    }), e;
  }, [t]);
}, bc = () => {
  const t = G("pageId", ""), e = Jh();
  return B(
    (n) => {
      if (!t) return { canAdd: !0 };
      if (t === n)
        return { canAdd: !1, reason: "Cannot add a partial inside itself" };
      if (mc(t, n, e))
        return { canAdd: !1, reason: "Adding this partial would create a circular reference" };
      const r = As(t, e), o = As(n, e);
      return Math.max(r, 1 + o) > uo ? { canAdd: !1, reason: `Maximum nesting depth (${uo} levels) would be exceeded` } : { canAdd: !0 };
    },
    [t, e]
  );
}, Xh = () => {
  const [t] = ue(), [e, n] = D(Ut), r = G("getPartialBlockBlocks", async (c) => []), o = te(/* @__PURE__ */ new Set()), s = M(() => t.filter((c) => c._type === "PartialBlock" || c._type === "GlobalBlock").map((c) => _(c, "partialBlockId", _(c, "globalBlock", ""))).filter(Boolean), [t]), i = M(() => {
    const c = [];
    return Object.values(e).forEach((d) => {
      d.status === "loaded" && c.push(...d.dependencies);
    }), c;
  }, [e]), a = M(() => [.../* @__PURE__ */ new Set([...s, ...i])], [s, i]);
  z(() => {
    const c = a.filter((d) => {
      const p = e[d], u = o.current.has(d);
      return (!p || p.status === "idle") && !u;
    });
    c.length !== 0 && (c.forEach((d) => o.current.add(d)), n((d) => {
      const p = {};
      return c.forEach((u) => {
        p[u] = { blocks: [], dependencies: [], status: "loading" };
      }), { ...d, ...p };
    }), Promise.all(
      c.map(async (d) => {
        try {
          const p = await r(d), u = hc(p);
          n((f) => ({
            ...f,
            [d]: { blocks: p, dependencies: u, status: "loaded" }
          }));
        } catch (p) {
          n((u) => ({
            ...u,
            [d]: {
              blocks: [],
              dependencies: [],
              status: "error",
              error: p instanceof Error ? p.message : "Failed to fetch"
            }
          }));
        } finally {
          o.current.delete(d);
        }
      })
    ));
  }, [a, e, n, r]);
}, mr = P("SAVED");
mr.debugLabel = "builderSaveStateAtom";
const qh = (t, e) => e ? t.some((n) => {
  if (!(n != null && n._type) || n._type === "PartialBlock")
    return !1;
  try {
    const r = Oe(n._type);
    return r ? (le(r, "i18nProps") ? r.i18nProps ?? [] : []).some((s) => {
      const i = `${s}-${e}`;
      return !n[i] || F(n[i]);
    }) : !1;
  } catch (r) {
    return console.warn(`Failed to get block definition for type: ${n._type}`, r), !1;
  }
}) : !1, Zh = (t) => t !== !1 && !(t instanceof Error), Ar = () => {
  const [t, e] = D(mr), n = G("onSave", async (N) => {
  }), r = G("onSaveStateChange", Ct), o = Kh(), { hasPermission: s } = wt(), { selectedLang: i, fallbackLang: a } = Je(), [c] = Yh(), d = Ke(Ut), p = hi(), [, u] = D(Po), f = () => {
    const N = o();
    return !i || i === a ? !1 : qh(N.blocks || [], i);
  }, h = B(
    (N) => {
      const T = /* @__PURE__ */ new Set(), k = hc(N);
      for (; k.length > 0; ) {
        const C = k.shift();
        if (T.has(C)) continue;
        T.add(C);
        const E = d[C];
        (E == null ? void 0 : E.status) === "loaded" && E.dependencies.length > 0 && k.push(...E.dependencies);
      }
      return [...T];
    },
    [d]
  ), g = B((N) => {
    const T = JSON.stringify(N), k = /pageType:[^:]+:([a-f0-9-]{36})/gi, C = [];
    let E;
    for (; (E = k.exec(T)) !== null; )
      E[1] && C.push(E[1]);
    return Wn([...new Set(C)]);
  }, []), m = B((N) => {
    const T = /dt#[^ "]+/g, k = {};
    for (const C of N) {
      const E = JSON.stringify(C);
      let I;
      for (; (I = T.exec(E)) !== null; )
        if (I[0]) {
          const L = I[0];
          k[L] || (k[L] = {}), k[L][C._id] = C._name || C._type;
        }
    }
    return k;
  }, []), y = B(
    (N) => !N && (!s("save_page") || !c) || !N && t === "SAVED",
    [s, c, t]
  ), x = async (N) => {
    try {
      return await n(N);
    } catch (T) {
      return T instanceof Error ? T : new Error("save_failed");
    }
  }, w = (N) => Zh(N) ? (setTimeout(() => {
    Pe.get(mr) === "SAVING" && (e("SAVED"), r("SAVED"));
  }, 100), !0) : (e("UNSAVED"), r("UNSAVED"), !1);
  return { savePage: pn(
    async (N = !1, T = !1) => {
      if (y(T))
        return;
      const k = o();
      return k != null && k.blocks && p(k.blocks), e("SAVING"), r("SAVING"), u(0), w(
        await x({
          autoSave: N,
          blocks: k.blocks,
          needTranslations: f(),
          partialIds: h(k.blocks || []),
          linkPageIds: g(k.blocks || []),
          designTokens: m(k.blocks || [])
        })
      );
    },
    [
      y,
      o,
      e,
      u,
      n,
      r,
      c,
      p,
      h,
      g,
      m
    ],
    3e3
    // save only every 3 seconds
  ), savePageAsync: async (N = !1) => {
    if (y(N))
      return;
    e("SAVING"), r("SAVING");
    const T = o();
    return u(0), w(
      await x({
        autoSave: !0,
        blocks: T.blocks,
        needTranslations: f(),
        partialIds: h(T.blocks || []),
        linkPageIds: g(T.blocks || []),
        designTokens: m(T.blocks || [])
      })
    );
  }, saveState: t, setSaveState: e, needTranslations: f };
}, Qh = () => {
  const { savePage: t, saveState: e } = Ar(), n = G("autoSave", !0), r = G("autoSaveActionsCount", 10), [o] = D(Po);
  z(() => {
    n && (e === "SAVED" || e === "SAVING" || o >= r && t(!0));
  }, [n, t, e, o, r]);
}, em = () => {
  const [, t] = D(Po), { setSaveState: e } = Ar();
  return B(() => {
    t((n) => n + 1), e((n) => n !== "UNSAVED" ? "UNSAVED" : n);
  }, [t, e]);
};
function tm(t, e, n, r) {
  const o = [...e];
  let s = [...t];
  if (n) {
    const d = t.find((p) => p._id === n);
    if (d && d.content !== void 0 && d.content !== "" && !t.some((u) => u._parent === n)) {
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
          const g = { ...h, content: "" };
          return Object.keys(g).forEach((m) => {
            m.startsWith("content-") && (g[m] = "");
          }), g;
        }
        return h;
      });
    }
  }
  let i = s.filter((d) => !d._parent);
  n && (i = s.filter((d) => d._parent === n));
  const a = r !== void 0 && !isNaN(r) && r > -1 ? Math.min(r, i.length) : i.length;
  let c = s.length;
  for (let d = 0, p = 0; d < s.length; d++)
    if (n !== void 0 ? s[d]._parent === n : !s[d]._parent) {
      if (p === a) {
        c = d;
        break;
      }
      p++;
    }
  return !n && r !== void 0 && r >= i.length && (c = s.length), [
    ...s.slice(0, c),
    ...o,
    ...s.slice(c)
  ];
}
function nm(t) {
  return si(t);
}
function rm(t) {
  let e = [];
  return t.walk((n) => (delete n.model.children, e.push(n.model), !0)), e;
}
function ha(t, e) {
  return t.first((n) => n.model._id === e) || null;
}
function om(t, e, n, r) {
  var d, p;
  const o = ha(t, e), s = ha(t, n);
  if (!o || !s) return !1;
  s.children || (s.model.children = []);
  let i = (d = s == null ? void 0 : s.children) == null ? void 0 : d.findIndex((u) => u.model._id === e);
  o.drop(), i = Math.max(i, 0);
  const c = (((p = o == null ? void 0 : o.model) == null ? void 0 : p._parent) || "root") === n && i <= r ? r - 1 : r;
  try {
    s.addChildAtIndex(o, c);
  } catch (u) {
    return console.error("Error adding child to parent:", u), !1;
  }
  return !0;
}
function sm(t, e) {
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
function im(t, e, n) {
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
        const p = { ...d, content: "" };
        return Object.keys(p).forEach((u) => {
          u.startsWith("content-") && (p[u] = "");
        }), p;
      }
      return d;
    }), c = a.findIndex((d) => d._id === e._id);
    return c !== -1 ? [...a.slice(0, c), i, ...a.slice(c)] : [i, ...a];
  }
  return t;
}
function am(t, e, n, r) {
  if (!e) return t;
  const o = t.find((d) => d._id === e);
  if (!o) return t;
  let s = sm(t, o);
  const i = n || "root", c = new Rf().parse({ _id: "root", children: nm(s) });
  if (om(c, e, i, r)) {
    let d = rm(c);
    const p = d.find((u) => u._id === e);
    return p && (p._parent = i === "root" ? null : i), d.shift(), n && (d = im(d, o, n)), d;
  }
  return s;
}
const nr = new BroadcastChannel("chaibuilder"), yc = () => {
  const t = G("pageId", "chaibuilder_page");
  return { postMessage: dt(
    (n) => nr.postMessage({ ...n, pageId: t }),
    [t],
    200
  ) };
}, lm = () => {
  const [, t] = ue(), e = G("pageId", "chaibuilder_page"), { updateBlocksProps: n } = xc();
  z(() => (nr.onmessageerror = (r) => {
    console.log("error", r);
  }, nr.onmessage = (r) => {
    r.data.type === "blocks-updated" && r.data.pageId === e && t(r.data.blocks), r.data.type === "blocks-props-updated" && r.data.pageId === e && n(r.data.blocks);
  }, () => {
    nr.onmessage = null, nr.onmessageerror = null;
  }), [t, e]);
}, gi = (t, e) => {
  let n = [...t], r = [];
  e.forEach((a) => {
    const c = n.find((u) => u._id === a);
    if (!c || !c._parent) return;
    const d = c._parent, p = n.filter((u) => u._parent === d);
    if (p.length === 2) {
      const u = p.find((f) => f._id !== a);
      if (u && u._type === "Text") {
        const f = n.find((h) => h._id === d);
        f && "content" in f && (n = n.map((h) => {
          if (h._id === d) {
            const g = { ...h, content: u.content };
            return Object.keys(u).forEach((m) => {
              m.startsWith("content-") && (g[m] = u[m]);
            }), g;
          }
          return h;
        }), r.push(u._id));
      }
    }
  });
  const o = [...e, ...r], s = [], i = Z(n, (a) => Ie(o, a._id) || Ie(o, a._parent) ? (s.push(a._id), !1) : !0);
  return F(s) ? i : gi(i, s);
}, bi = () => {
  const [t] = ue(), [e, n] = oe(), { setNewBlocks: r } = ze(), { hasPermission: o } = wt();
  return B(
    (s) => {
      var a;
      if (!o(Be.DELETE_BLOCK)) return;
      const i = ((a = ee(t, { _id: s[0] })) == null ? void 0 : a._parent) || null;
      r(gi(t, s)), setTimeout(() => n(i ? [i] : []), 200);
    },
    [t, n, e, o]
  );
}, cm = P(
  null,
  // it's a convention to pass `null` for the first argument
  (t, e, { id: n, props: r }) => {
    const o = t(Sr), s = ee(o, (i) => t(i)._id === n);
    return s ? e(s, { ...t(s), ...r }) : dm(t, e, n, r);
  }
);
function dm(t, e, n, r) {
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
const um = () => gt(cm), eN = (t) => zl(
  B(
    (e, n, r) => {
      const o = e(t);
      if (!o || !o.length)
        return null;
      const s = ee(
        o,
        (i) => e(i)._id === (Nt(r) ? r : e(r)._id)
      );
      return s ? e(s) : null;
    },
    [t]
  ),
  { store: Pe }
), pm = (t) => zl(
  B(
    (e, n, r) => {
      const o = e(t);
      if (!o || !o.length)
        return console.warn("No blocks available in splitAtoms"), null;
      const s = ee(
        o,
        (i) => e(i)._id === (Nt(r) ? r : e(r)._id)
      );
      return s || (console.warn(`Block with id ${r} not found`), null);
    },
    [t]
  ),
  { store: Pe }
), xc = () => {
  const [, t] = ue(), { postMessage: e } = yc(), n = um(), r = hi(), o = em();
  return {
    setNewBlocks: (s) => {
      t(s), e({ type: "blocks-updated", blocks: s });
    },
    addBlocks: (s, i, a) => {
      t((c) => {
        const d = tm(c, s, i, a);
        return e({ type: "blocks-updated", blocks: d }), r(d), o(), d;
      });
    },
    removeBlocks: (s) => {
      t((i) => {
        const a = gi(i, s);
        return e({ type: "blocks-updated", blocks: a }), r(a), o(), a;
      });
    },
    moveBlocks: (s, i, a) => {
      t((c) => {
        let d = [...c];
        for (let p = 0; p < s.length; p++)
          d = am(d, s[p], i, a);
        return bt(s, (p) => {
          const u = ee(d, (f) => f._id === p);
          u && n({ id: p, props: { _parent: u._parent || null } });
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
}, mt = new Lf();
mt.setLimit(50);
const fm = P({
  canUndo: !1,
  canRedo: !1
}), Tr = () => {
  const [, t] = D(mr), [e, n] = D(fm), r = G("onSaveStateChange", Ct), o = B(() => {
    const d = {
      canUndo: mt.hasUndo(),
      canRedo: mt.hasRedo()
    };
    n(d), t("UNSAVED"), r("UNSAVED");
  }, [n, t, r]);
  z(() => (mt.setCallback(o), () => {
    mt.setCallback(Ct);
  }), [o]);
  const s = B(
    (d) => {
      mt.add(d), o();
    },
    [o]
  ), i = B(() => {
    mt.undo(), o();
  }, [o]), a = B(() => {
    mt.redo(), o();
  }, [o]), c = B(() => {
    mt.clear(), n({
      canUndo: !1,
      canRedo: !1
    });
  }, [n]);
  return M(
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
}, ma = () => {
  const t = Pe.get(Ut);
  return [
    ...Pe.get(Fe),
    ...Object.values(t).flatMap((e) => e.blocks)
  ];
}, ga = (t, e, n, r) => t.some((o) => {
  const s = r ?? n.find((i) => i._id === o);
  return s ? yt(e).some((i) => i !== "_id" && !cp(s[i], e[i])) : !0;
}), ue = () => D(Fe), ze = () => {
  const { add: t } = Tr(), {
    setNewBlocks: e,
    addBlocks: n,
    removeBlocks: r,
    moveBlocks: o,
    updateBlocksProps: s
  } = xc();
  return {
    moveBlocks: (h, g, m) => {
      const y = Pe.get(Fe), x = A(h, (S) => {
        const N = y.find((C) => C._id === S)._parent || null, k = y.filter((C) => N ? C._parent === N : !C._parent).map((C) => C._id).indexOf(S);
        return { _id: S, oldParent: N, oldPosition: k };
      }), w = x.find(({ _id: S }) => S === h[0]);
      w && w.oldParent === g && w.oldPosition === m || (o(h, g ?? null, m), t({
        undo: () => bt(x, ({ _id: S, oldParent: v, oldPosition: N }) => {
          o([S], v ?? null, N);
        }),
        redo: () => o(h, g ?? null, m)
      }));
    },
    addBlocks: (h, g, m) => {
      n(h, g, m), t({
        undo: () => r(A(h, "_id")),
        redo: () => n(h, g, m)
      });
    },
    removeBlocks: (h) => {
      var w;
      const g = Pe.get(Fe), m = (w = ye(h)) == null ? void 0 : w._parent, x = g.filter((S) => m ? S._parent === m : !S._parent).indexOf(ye(h));
      r(A(h, "_id")), t({
        undo: () => n(h, m ?? void 0, x),
        redo: () => r(A(h, "_id"))
      });
    },
    updateBlocks: (h, g, m) => {
      const y = ma();
      if (!ga(h, g, y, m)) return;
      let x = [];
      if (m)
        x = A(h, (w) => ({ _id: w, ...m }));
      else {
        const w = yt(g);
        x = A(h, (S) => {
          const v = y.find((T) => T._id === S), N = { _id: S };
          return bt(w, (T) => N[T] = v == null ? void 0 : v[T]), N;
        });
      }
      s(A(h, (w) => ({ _id: w, ...g }))), t({
        undo: () => s(x),
        redo: () => s(A(h, (w) => ({ _id: w, ...g })))
      });
    },
    updateBlocksRuntime: (h, g) => {
      s(A(h, (m) => ({ _id: m, ...g })));
    },
    setNewBlocks: (h) => {
      const g = Pe.get(Fe);
      e(h), t({
        undo: () => e(g),
        redo: () => e(h)
      });
    },
    updateMultipleBlocksProps: (h) => {
      const g = ma();
      if (!h.some((y) => ga([y._id], y, g))) return;
      let m = [];
      m = A(h, (y) => {
        const x = yt(y), w = g.find((v) => v._id === y._id), S = {};
        return bt(x, (v) => S[v] = w == null ? void 0 : w[v]), S;
      }), s(h), t({
        undo: () => s(m),
        redo: () => s(h)
      });
    }
  };
}, hm = ({ block: t, children: e }) => {
  const { t: n } = K(), [r] = ue(), { hasPermission: o } = wt(), s = _(t, "_id"), i = _(t, "_parent"), a = Z(r, (u) => i ? _(u, "_parent") === i : !_(u, "_parent")), c = co(_(t, "_type", "")), d = ir(a, { _id: s }), p = (u) => {
    if (u === "CHILD")
      me.publish(se.OPEN_ADD_BLOCK, t);
    else {
      const f = { _id: i || "", position: a == null ? void 0 : a.length };
      u === "BEFORE" ? f.position = Math.max(d, 0) : u === "AFTER" && (f.position = d + 1), me.publish(se.OPEN_ADD_BLOCK, f);
    }
  };
  return o(Be.ADD_BLOCK) ? /* @__PURE__ */ b(kn, { children: [
    /* @__PURE__ */ l(Cn, { children: e }),
    /* @__PURE__ */ b(Ft, { className: "border border-blue-500 bg-primary text-white shadow-2xl", children: [
      c && /* @__PURE__ */ l(Ee, { className: "cursor-pointer text-xs", onClick: () => p("CHILD"), children: n("Add inside") }),
      /* @__PURE__ */ l(Ee, { className: "cursor-pointer text-xs", onClick: () => p("BEFORE"), children: n("Add before") }),
      /* @__PURE__ */ l(Ee, { className: "cursor-pointer text-xs", onClick: () => p("AFTER"), children: n("Add after") })
    ] })
  ] }) : null;
}, Oo = P(null), Ir = P({
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
let On = !1;
const yi = (t) => {
  On = t;
}, xi = P(0), mm = P(!1);
mm.debugLabel = "readOnlyModeAtom";
const gm = P("online");
gm.debugLabel = "networkModeAtom";
P("");
const bm = P(!1);
bm.debugLabel = "editLayerNameAtom";
const ym = P("");
ym.debugLabel = "activeLanguageAtom";
const xm = P("");
xm.debugLabel = "primaryLanguageAtom";
const Mo = P(null);
Mo.debugLabel = "canvasIframeAtom";
const wm = P("outline");
wm.debugLabel = "activePanelAtom";
const wc = P("");
wc.debugLabel = "showPredefinedBlockCategoryAtom";
const vm = P(!1);
vm.debugLabel = "draggingFlagAtom";
const wi = P(null);
wi.debugLabel = "treeRefAtom";
const km = P({});
km.debugLabel = "canvasSettingsAtom";
const vc = P(!1);
vc.debugLabel = "aiAssistantActiveAtom";
const Cm = P(!1);
Cm.debugLabel = "codeEditorOpenAtom";
const Nm = Et("codeEditorHeight", 500);
Nm.debugLabel = "codeEditorHeightAtom";
const Sm = P([]);
Sm.debugLabel = "xShowBlocksAtom";
const vi = Et("_selectedLibrary", null);
vi.debugLabel = "selectedLibraryAtom";
const kc = P(!0);
kc.debugLabel = "dataBindingActiveAtom";
const Em = Et("chai-builder-theme", ei), Jn = () => D(Mo);
let he = null, Pt = null;
function _m(t, e) {
  const n = t.getAttribute("data-block-name"), r = t.getAttribute("data-block-type"), o = n || r || "Container", s = e.createElement("div");
  return s.className = "chai-drag-parent-label", s.textContent = o, s.className = "absolute top-0 -left-0.5 -translate-x-0.5 -translate-y-full -mt-1 bg-green-500/95 text-white px-2 py-1 text-xs font-semibold font-sans leading-tight whitespace-nowrap shadow-lg z-[999999] pointer-events-none select-none", s;
}
function rs() {
  Pt && Pt.parentNode && (Pt.parentNode.removeChild(Pt), Pt = null);
}
const ki = () => {
  const [t] = Jn(), e = M(
    () => {
      var o;
      return (t == null ? void 0 : t.contentDocument) || ((o = t == null ? void 0 : t.contentWindow) == null ? void 0 : o.document);
    },
    [t]
  ), n = B(
    (o) => {
      if (!e) return;
      let s = null;
      if (!o) {
        he && (he.style.outline = "", he.style.outlineOffset = "", he.style.backgroundColor = "", he.style.position = "", he = null), rs();
        return;
      }
      typeof o != "string" ? s = o : s = e.querySelector(`[data-block-id="${o}"]`), !(s === he && Pt && Pt.parentNode) && (he && he !== s && (he.style.outline = "", he.style.outlineOffset = "", he.style.backgroundColor = "", he.style.position = ""), rs(), s ? (s.style.outline = "2px dashed rgba(34, 197, 94, 1)", s.style.outlineOffset = "2px", s.style.backgroundColor = "rgba(34, 197, 94, 0.05)", window.getComputedStyle(s).position === "static" && (s.style.position = "relative"), Pt = _m(s, e), s.appendChild(Pt), he = s) : he = null);
    },
    [e]
  ), r = B(() => {
    he && (he.style.outline = "", he.style.outlineOffset = "", he.style.backgroundColor = "", window.getComputedStyle(he).position === "relative" && he.style.position === "relative" && (he.style.position = ""), he = null), rs();
  }, []);
  return {
    highlightParent: n,
    clearParentHighlight: r,
    lastDragHighlighted: he
  };
}, Cc = () => {
  const [, t] = D(Oo), [, e] = D(Ir), [n] = Jn(), { clearParentHighlight: r } = ki(), [o, s] = D(xi), i = n == null ? void 0 : n.contentDocument;
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
    }), Am(i), r(), i && i.querySelectorAll("[data-dragging]").forEach((c) => {
      c.removeAttribute("data-dragging");
    }), yi(!1), s(o + 1);
  }, [t, e, i, r, o, s]);
};
function Am(t) {
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
const Tm = [
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
function Im(t) {
  try {
    return Tm.includes(t);
  } catch {
    return !1;
  }
}
const kt = {
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
function ba(t) {
  try {
    if (t < kt.MIN_SIZE_FOR_EDGE_ZONES)
      return 0;
    const e = t * kt.EDGE_ZONE_PERCENTAGE;
    return Math.max(kt.MIN_EDGE_ZONE, Math.min(kt.MAX_EDGE_ZONE, e));
  } catch {
    return kt.MIN_EDGE_ZONE;
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
function Xr(t) {
  try {
    return Gt(t).length > 0;
  } catch {
    return !1;
  }
}
function Bm(t, e, n, r) {
  try {
    const o = Gt(t);
    if (o.length < 2)
      return null;
    const s = Om(o, e, n, r);
    if (s) {
      const i = Ci(o, s, r);
      i.sort((a, c) => {
        const d = a.getBoundingClientRect(), p = c.getBoundingClientRect();
        return r === "vertical" ? d.top - p.top : d.left - p.left;
      });
      for (let a = 0; a < i.length - 1; a++) {
        const c = i[a], d = i[a + 1], p = c.getBoundingClientRect(), u = d.getBoundingClientRect();
        if (r === "vertical") {
          const f = p.bottom, h = u.top, g = h - f, m = n >= f && n <= h, y = e >= Math.min(p.left, u.left) && e <= Math.max(p.right, u.right);
          if (m && y && g >= kt.GAP_THRESHOLD)
            return { before: c, after: d };
        } else {
          const f = p.right, h = u.left, g = h - f, m = e >= f && e <= h, y = n >= Math.min(p.top, u.top) && n <= Math.max(p.bottom, u.bottom);
          if (m && y && g >= kt.GAP_THRESHOLD)
            return { before: c, after: d };
        }
      }
    }
    for (let i = 0; i < o.length - 1; i++) {
      const a = o[i], c = o[i + 1], d = a.getBoundingClientRect(), p = c.getBoundingClientRect();
      if (r === "vertical") {
        const u = d.bottom, f = p.top, h = f - u, g = n >= u && n <= f, m = e >= Math.min(d.left, p.left) && e <= Math.max(d.right, p.right);
        if (g && m && h >= kt.GAP_THRESHOLD)
          return { before: a, after: c };
      } else {
        const u = d.right, f = p.left, h = f - u, g = e >= u && e <= f, m = n >= Math.min(d.top, p.top) && n <= Math.max(d.bottom, p.bottom);
        if (g && m && h >= kt.GAP_THRESHOLD)
          return { before: a, after: c };
      }
    }
    return null;
  } catch {
    return null;
  }
}
function Rm(t, e, n, r) {
  try {
    const o = t.getBoundingClientRect(), s = kt.PARENT_EDGE_PROXIMITY;
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
function Lm(t, e, n, r, o) {
  const s = t.getBoundingClientRect();
  if (o === "vertical") {
    const a = (n - s.top) / s.height, c = ba(s.height), d = c / s.height;
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
    const a = (e - s.left) / s.width, c = ba(s.width), d = c / s.width;
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
function Pm(t, e, n, r, o) {
  var S, v, N, T;
  const s = t.getAttribute("data-block-id"), i = t.getAttribute("data-block-type") || "Box";
  if (!s)
    return null;
  let a = t.parentElement;
  for (; a && !a.hasAttribute("data-block-id"); )
    a = a.parentElement;
  const c = s === "canvas" ? s : a == null ? void 0 : a.getAttribute("data-block-id"), d = a ? mn(a) : "vertical", p = mn(t), u = Im(i), f = !u && xt(i, r), h = ((S = o.defaultView) == null ? void 0 : S.scrollY) || 0, g = ((v = o.defaultView) == null ? void 0 : v.scrollX) || 0;
  if (s === "canvas" && Xr(t)) {
    const k = Gt(t), C = k[k.length - 1];
    if (C) {
      const E = C.getBoundingClientRect(), I = t.getBoundingClientRect(), L = window.getComputedStyle(t), R = parseFloat(L.paddingLeft) || 0, V = parseFloat(L.paddingRight) || 0, Y = I.width - R - V, q = I.left + g + R;
      return {
        position: "after",
        placeholderOrientation: "horizontal",
        rect: {
          top: E.bottom + h,
          left: q,
          width: Y,
          height: 4
        },
        targetElement: C,
        targetBlockId: C.getAttribute("data-block-id"),
        targetParentId: "canvas",
        isEmpty: !1,
        confidence: 1
      };
    }
  }
  if (f && !u && Xr(t)) {
    const k = Bm(t, e, n, p);
    if (k) {
      const C = k.before.getBoundingClientRect(), E = k.after.getBoundingClientRect(), I = t.getBoundingClientRect(), L = window.getComputedStyle(t), R = parseFloat(L.paddingLeft) || 0, V = parseFloat(L.paddingRight) || 0, Y = Gt(t), q = Ci(Y, k.before, p);
      let we = 0;
      if (q.forEach((ve) => {
        const fe = ve.getBoundingClientRect();
        fe.height > we && (we = fe.height);
      }), p === "vertical") {
        const ve = I.width - R - V, fe = I.left + g + R;
        return {
          position: "after",
          placeholderOrientation: "horizontal",
          rect: {
            top: C.bottom + h,
            left: fe,
            width: ve,
            height: 4
          },
          targetElement: k.before,
          targetBlockId: k.before.getAttribute("data-block-id"),
          targetParentId: s,
          isGapZone: !0,
          confidence: 1
          // High confidence for gap zones
        };
      } else {
        const ve = C.top + h, fe = we > 0 ? we : Math.max(C.height, E.height);
        return {
          position: "after",
          placeholderOrientation: "vertical",
          rect: {
            top: ve,
            left: C.right + g,
            width: 4,
            height: fe
          },
          targetElement: k.before,
          targetBlockId: k.before.getAttribute("data-block-id"),
          targetParentId: s,
          isGapZone: !0,
          confidence: 1
        };
      }
    }
  }
  if (a && c) {
    const k = Rm(a, e, n, d);
    if (k) {
      const C = a.getBoundingClientRect(), E = window.getComputedStyle(a), I = parseFloat(E.paddingLeft) || 0, L = parseFloat(E.paddingRight) || 0, R = parseFloat(E.paddingTop) || 0, V = parseFloat(E.paddingBottom) || 0, Y = ((N = o.defaultView) == null ? void 0 : N.scrollY) || 0, q = ((T = o.defaultView) == null ? void 0 : T.scrollX) || 0, we = d === "vertical" ? "horizontal" : "vertical", ve = Nc(a);
      if (k === "start") {
        const fe = Gt(a)[0];
        if (fe) {
          const Ve = fe.getBoundingClientRect();
          if (d === "vertical") {
            const J = C.width - I - L, Te = C.left + q + I;
            return {
              position: "before",
              placeholderOrientation: we,
              rect: {
                top: Ve.top + Y - 2,
                left: Te,
                width: J,
                height: 4
              },
              targetElement: fe,
              targetBlockId: fe.getAttribute("data-block-id"),
              targetParentId: c,
              confidence: 0.9
            };
          } else {
            const J = C.top + Y + R, Te = ve.maxHeight > 0 ? ve.maxHeight : C.height - R - V;
            return {
              position: "before",
              placeholderOrientation: we,
              rect: {
                top: J,
                left: Ve.left + q - 2,
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
        const fe = Gt(a), Ve = fe[fe.length - 1];
        if (Ve) {
          const J = Ve.getBoundingClientRect();
          if (d === "vertical") {
            const Te = C.width - I - L, ft = C.left + q + I;
            return {
              position: "after",
              placeholderOrientation: we,
              rect: {
                top: J.bottom + Y - 2,
                left: ft,
                width: Te,
                height: 4
              },
              targetElement: Ve,
              targetBlockId: Ve.getAttribute("data-block-id"),
              targetParentId: c,
              confidence: 0.9
            };
          } else {
            const Te = C.top + Y + R, ft = ve.maxHeight > 0 ? ve.maxHeight : C.height - R - V;
            return {
              position: "after",
              placeholderOrientation: we,
              rect: {
                top: Te,
                left: J.right + q - 2,
                width: 4,
                height: ft
              },
              targetElement: Ve,
              targetBlockId: Ve.getAttribute("data-block-id"),
              targetParentId: c,
              confidence: 0.9
            };
          }
        }
      }
    }
  }
  let m = Lm(t, e, n, f, d);
  if (u && m.position === "inside") {
    const k = t.getBoundingClientRect();
    d === "vertical" ? m = {
      position: (n - k.top) / k.height < 0.5 ? "before" : "after",
      confidence: m.confidence
    } : m = {
      position: (e - k.left) / k.width < 0.5 ? "before" : "after",
      confidence: m.confidence
    };
  }
  let y;
  m.position === "inside" ? y = p === "vertical" ? "horizontal" : "vertical" : y = d === "vertical" ? "horizontal" : "vertical";
  const x = Mm(
    t,
    a,
    m.position,
    y,
    o
  ), w = m.position === "inside" ? s : c;
  return {
    position: m.position,
    placeholderOrientation: y,
    rect: x,
    targetElement: t,
    targetBlockId: s,
    targetParentId: w ?? "",
    isEmpty: m.position === "inside" && !Xr(t),
    confidence: m.confidence
  };
}
function Om(t, e, n, r) {
  if (t.length === 0) return null;
  const o = t.filter((a) => {
    const c = a.getBoundingClientRect();
    return r === "vertical" ? n >= c.top && n <= c.bottom : e >= c.left && e <= c.right;
  });
  if (o.length === 0) {
    const a = /* @__PURE__ */ new Map();
    t.forEach((p) => {
      const u = p.getBoundingClientRect(), f = Math.round(r === "vertical" ? u.top : u.left);
      a.has(f) || a.set(f, []), a.get(f).push(p);
    });
    let c = null, d = 1 / 0;
    a.forEach((p, u) => {
      const f = Math.abs(r === "vertical" ? n - u : e - u);
      f < d && (d = f, c = p);
    }), c && o.push(c);
  }
  if (o.length === 0) return null;
  let s = o[0], i = 1 / 0;
  return o.forEach((a) => {
    const c = a.getBoundingClientRect(), d = c.left + c.width / 2, p = c.top + c.height / 2, u = Math.sqrt(Math.pow(e - d, 2) + Math.pow(n - p, 2));
    u < i && (i = u, s = a);
  }), s;
}
function Nc(t) {
  const e = Gt(t);
  if (e.length === 0)
    return { maxWidth: 0, maxHeight: 0 };
  let n = 0, r = 0;
  return e.forEach((o) => {
    const s = o.getBoundingClientRect();
    s.width > n && (n = s.width), s.height > r && (r = s.height);
  }), { maxWidth: n, maxHeight: r };
}
function Ci(t, e, n) {
  const r = e.getBoundingClientRect(), o = 5;
  return t.filter((s) => {
    const i = s.getBoundingClientRect();
    return n === "vertical" ? Math.abs(i.top - r.top) <= o : Math.abs(i.left - r.left) <= o;
  });
}
function Mm(t, e, n, r, o) {
  var R, V;
  const s = t.getBoundingClientRect(), i = window.getComputedStyle(t), a = ((R = o.defaultView) == null ? void 0 : R.scrollY) || 0, c = ((V = o.defaultView) == null ? void 0 : V.scrollX) || 0, d = parseFloat(i.marginTop) || 0, p = parseFloat(i.marginBottom) || 0, u = parseFloat(i.marginLeft) || 0, f = parseFloat(i.marginRight) || 0, h = parseFloat(i.paddingTop) || 0, g = parseFloat(i.paddingBottom) || 0, m = parseFloat(i.paddingLeft) || 0, y = parseFloat(i.paddingRight) || 0, x = e == null ? void 0 : e.getBoundingClientRect(), w = e && parseFloat(window.getComputedStyle(e).paddingLeft) || 0, S = e && parseFloat(window.getComputedStyle(e).paddingRight) || 0, v = e && parseFloat(window.getComputedStyle(e).paddingTop) || 0, N = e && parseFloat(window.getComputedStyle(e).paddingBottom) || 0, T = e ? Nc(e) : { maxHeight: 0 }, k = e ? mn(e) : "vertical", C = e ? Gt(e) : [], E = Ci(C, t, k);
  let I = 0, L = 0;
  if (E.forEach((Y) => {
    const q = Y.getBoundingClientRect();
    q.height > I && (I = q.height), q.width > L && (L = q.width);
  }), n === "before")
    if (r === "horizontal") {
      const Y = x ? x.width - w - S : s.width, q = x ? x.left + c + w : s.left + c;
      return {
        top: s.top + a - d - 2,
        left: q,
        width: Y,
        height: 4
      };
    } else {
      const Y = s.top + a, q = k === "horizontal" && I > 0 ? I : T.maxHeight > 0 ? T.maxHeight : x ? x.height - v - N : s.height;
      return {
        top: Y,
        left: s.left + c - u - 2,
        width: 4,
        height: q
      };
    }
  else if (n === "after")
    if (r === "horizontal") {
      const Y = x ? x.width - w - S : s.width, q = x ? x.left + c + w : s.left + c;
      return {
        top: s.bottom + a + p - 2,
        left: q,
        width: Y,
        height: 4
      };
    } else {
      const Y = s.top + a, q = k === "horizontal" && I > 0 ? I : T.maxHeight > 0 ? T.maxHeight : x ? x.height - v - N : s.height;
      return {
        top: Y,
        left: s.right + c + f - 2,
        width: 4,
        height: q
      };
    }
  else
    return Xr(t) ? mn(t) === "vertical" ? {
      top: s.bottom + a - g - 2,
      left: s.left + c + m,
      width: s.width - m - y,
      height: 4
    } : {
      top: s.top + a + h,
      left: s.right + c - y - 2,
      width: 4,
      height: s.height - h - g
    } : {
      top: s.top + a + h,
      left: s.left + c + m,
      width: s.width - m - y,
      height: Math.max(s.height - h - g, 20)
    };
}
const ya = ["wheel", "touchstart", "touchmove", "pointerdown", "keydown"], Dm = 700, qr = "instant", po = 2, Sc = 400, $m = (t) => {
  const e = t.graceMs ?? Dm, n = t.tolerance ?? po, r = t.holdMs ?? Sc;
  return t.now <= (t.glideUntil ?? Number.NEGATIVE_INFINITY) ? "glide" : t.now - t.lastEditAt > r ? "adopt" : Math.abs(t.scrollY - t.intended) <= n ? "hold" : t.now - t.lastGestureAt <= e ? "adopt" : "restore";
}, Ec = (t, e, n) => Math.max(0, Math.min(Math.round(t), Math.max(0, Math.round(e - n))));
let Ni = null;
const xa = (t, e = Number.NEGATIVE_INFINITY) => {
  Ni = { target: t, until: e };
}, Fm = () => Ni, _c = () => {
  Ni = null;
}, zm = 140, Hm = 260, Vm = 0.1, jm = (t) => Math.round(
  Math.min(Hm, Math.max(zm, Math.abs(t) * Vm))
), Wm = (t) => {
  const e = Math.min(1, Math.max(0, t));
  return 1 - Math.pow(1 - e, 3);
}, Gm = (t, e, n, r) => r <= 0 ? Math.round(e) : Math.round(t + (e - t) * Wm(n / r)), Um = 20, wa = (t, e) => {
  let n = !1;
  const r = () => {
    n || (n = !0, e());
  };
  t.requestAnimationFrame(r), t.setTimeout(r, Um);
};
let Zr = 0;
const va = () => {
  Zr += 1, _c();
}, Km = 900, ss = 150, Ym = (t, e) => {
  var d;
  const n = t.scrollY, o = ((d = t.matchMedia) == null ? void 0 : d.call(t, "(prefers-reduced-motion: reduce)").matches) === !0 ? 0 : jm(e - n), s = t.performance.now(), i = ++Zr;
  xa(e, s + o);
  const a = (p) => {
    if (i !== Zr || Math.abs(t.scrollY - e) <= po || t.performance.now() - p > Km) return;
    const u = t.document.documentElement, f = Ec(e, u.scrollHeight, t.innerHeight);
    f > t.scrollY + po && (xa(e, t.performance.now()), t.scrollTo({ top: f, behavior: qr })), t.setTimeout(() => a(p), ss);
  };
  if (o === 0) {
    t.scrollTo({ top: Math.round(e), behavior: qr }), t.setTimeout(() => a(t.performance.now()), ss);
    return;
  }
  const c = () => {
    if (i !== Zr) return;
    const p = t.performance.now() - s;
    if (t.scrollTo({ top: Gm(n, e, p, o), behavior: qr }), p < o) {
      wa(t, c);
      return;
    }
    t.setTimeout(() => a(t.performance.now()), ss);
  };
  wa(t, c);
}, Jm = 24, Xm = /* @__PURE__ */ new Set(["canvas", "container"]), Ts = (t) => {
  const e = t.getAttribute("data-block-id");
  return e !== null && !Xm.has(e);
}, qm = (t) => {
  let e = t;
  for (; e; ) {
    if (Ts(e)) return e;
    e = e.parentElement;
  }
  return null;
}, Zm = (t) => {
  let e = Ts(t) ? t : null, n = t.parentElement;
  for (; n; )
    Ts(n) && (e = n), n = n.parentElement;
  return e;
}, Qm = (t, e, n, r = Jm) => {
  const o = n + t.section.top - r, s = t.selected.bottom - t.section.top + r;
  let i = o;
  if (s > e) {
    const c = n + t.selected.top - r, d = n + t.selected.bottom + r - e;
    i = Math.min(c, d);
  }
  const a = Math.max(0, Math.round(i));
  return Math.abs(a - n) <= po ? null : a;
};
let Is = null;
const ka = (t) => {
  Is = t;
}, eg = (t) => {
  const e = Is === t;
  return Is = null, e;
}, tg = 100, Nn = () => {
  const [t] = ue(), [, e] = oe(), { addBlocks: n } = ze(), r = B(
    (s, i, a) => {
      for (let f = 0; f < s.length; f++) {
        const { _id: h } = s[f];
        s[f]._id = fn();
        const g = Z(s, { _parent: h });
        for (let m = 0; m < g.length; m++)
          g[m]._parent = s[f]._id;
      }
      const c = ye(s);
      let d, p;
      return i && (d = ee(t, { _id: i }), s[0]._parent = i, So(s, (f) => {
        f != null && f._parent || (f._parent = i);
      }), p = i), !(d ? xt(d == null ? void 0 : d._type, c._type) : !0) && d && (s[0]._parent = d._parent, p = d._parent), n(s, p ?? void 0, a), ka(c._id), e([c._id]), c;
    },
    [n, t, e]
  );
  return { addCoreBlock: B(
    (s, i, a) => {
      if (le(s, "blocks")) {
        const m = s.blocks;
        return r(m, i ?? void 0, a);
      }
      const c = fn(), d = qs(s.type), p = {
        _type: s.type,
        _id: c,
        ...d,
        ...le(s, "_name") && { _name: s._name },
        ...le(s, "partialBlockId") && { partialBlockId: s.partialBlockId }
      };
      let u, f;
      return i && (u = ee(t, { _id: i }), p._parent = i, f = i), !xt(u == null ? void 0 : u._type, p._type) && u && (p._parent = u._parent, f = u._parent), n([p], f ?? void 0, a), setTimeout(() => {
        ka(p._id), e([p._id]);
      }, tg), p;
    },
    [n, r, t, e]
  ), addPredefinedBlock: r };
};
let Bt = null;
const At = () => {
  const [t] = D(Mo), e = M(() => {
    var o;
    return (t == null ? void 0 : t.contentDocument) || ((o = t == null ? void 0 : t.contentWindow) == null ? void 0 : o.document);
  }, [t]), n = B(
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
  ), r = B(() => {
    Bt && (Bt.removeAttribute("data-highlighted"), Bt = null);
  }, []);
  return { highlightBlock: n, clearHighlight: r, lastHighlighted: Bt };
}, Br = P([]);
Br.debugLabel = "selectedStylingBlocksAtom";
const He = () => D(Br), ng = () => {
  const [t, e] = D(Oo), [n, r] = D(Ir), [o] = ue(), [s] = Jn(), { addCoreBlock: i } = Nn(), { moveBlocks: a } = ze(), [, c] = oe(), [, d] = He(), { clearHighlight: p } = At(), { clearParentHighlight: u } = ki(), [f, h] = D(xi), g = _t(), m = bc(), y = s == null ? void 0 : s.contentDocument;
  return B(
    (x) => {
      if (x.preventDefault(), x.stopPropagation(), yi(!1), og(y), Ca(y), u(), r({
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
        u(), Ca(y), r({
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
        u();
        return;
      }
      e(null);
      const w = n.targetBlockId, S = n.targetParentId;
      if (!w)
        return;
      const { parentId: v, index: N, replaceImageUrl: T } = rg(
        o,
        w,
        S,
        n.position,
        t
      ), k = t._id !== void 0;
      if (T && Ac(t)) {
        g([w], { image: _(t, "blocks.0.image") }), setTimeout(() => {
          h(f + 1);
        }, 50);
        return;
      }
      if (k)
        a([t._id], v === null ? void 0 : v, N), p(), d([]), c([t._id]);
      else {
        const C = t._type || t.type, E = t != null && t.blocks ? Zt(t == null ? void 0 : t.blocks) ? Bo(t == null ? void 0 : t.blocks()) : t == null ? void 0 : t.blocks : null;
        if (C === "PartialBlock") {
          const I = t.partialBlockId || "", { canAdd: L, reason: R } = m(I);
          if (!L) {
            Ce.error(R || "Cannot add this partial block");
            return;
          }
          i(
            {
              blocks: [{ _type: C, _id: "partial-block", partialBlockId: t.partialBlockId }]
            },
            v,
            N
          );
        } else
          i(
            (E == null ? void 0 : E.length) > 0 ? { blocks: [...E] } : { type: C },
            v,
            N
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
      u,
      p,
      c,
      d,
      f,
      h,
      g,
      m
    ]
  );
}, Ac = (t) => {
  var s, i;
  const e = le(t, "blocks"), n = t == null ? void 0 : t.blocks, r = (n == null ? void 0 : n.length) === 1 && ((s = n == null ? void 0 : n[0]) == null ? void 0 : s._type) === "Image", o = !((i = n == null ? void 0 : n[0]) != null && i._id);
  return e && r && o;
};
function rg(t, e, n, r, o) {
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
    const a = !n || n === "canvas", c = a ? void 0 : n, d = Z(t, (f) => a ? !(f != null && f._parent) : (f == null ? void 0 : f._parent) === c), p = d.findIndex((f) => f._id === e);
    if (p === -1)
      return {
        parentId: a ? null : n,
        index: d.length
      };
    const u = r === "before" ? p : p + 1;
    return {
      parentId: a ? null : n,
      index: u
    };
  } catch {
    return {
      parentId: null,
      index: Z(t, (c) => !(c != null && c._parent)).length
    };
  }
}
function Ca(t) {
  if (!t) return;
  t.querySelectorAll("[data-drop-target]").forEach((n) => n.removeAttribute("data-drop-target"));
}
function og(t) {
  if (!t) return;
  t.querySelectorAll("[data-dragging]").forEach((n) => {
    n.removeAttribute("data-dragging");
  });
}
function Tc(t, e, n) {
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
function Ic(t, e, n) {
  return !t || !e ? !0 : !Tc(e, t, n);
}
function sg(t, e, n) {
  if (!t) return !0;
  const r = n.find((s) => s._id === e);
  if (!r) return !0;
  const o = r._parent;
  return Ic(t, o, n);
}
const ig = [
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
}, ag = () => {
  const [t] = D(Oo), [e] = Jn(), [, n] = D(Ir), { clearParentHighlight: r, highlightParent: o } = ki(), [s] = ue(), i = e == null ? void 0 : e.contentDocument, a = te(null), c = te(0), d = B(
    (u) => {
      if (!(i != null && i.defaultView)) return;
      const f = i.defaultView, h = f.innerHeight, g = f.scrollY, m = i.documentElement.scrollHeight;
      c.current = u;
      const y = u, x = h - u;
      let w = !1, S = null, v = 0;
      if (y < Vt.EDGE_ZONE && g > 0 ? (w = !0, S = "up", v = y) : x < Vt.EDGE_ZONE && g + h < m && (w = !0, S = "down", v = x), !w && a.current !== null) {
        cancelAnimationFrame(a.current), a.current = null;
        return;
      }
      if (w && S) {
        const N = 1 - v / Vt.EDGE_ZONE, T = Vt.MIN_SCROLL_SPEED + (Vt.MAX_SCROLL_SPEED - Vt.MIN_SCROLL_SPEED) * N, k = () => {
          if (!On || !f) {
            a.current = null;
            return;
          }
          const C = S === "up" ? -T : T;
          f.scrollBy(0, C);
          const E = f.scrollY, I = E > 0, L = E + h < m, R = c.current, V = h - c.current;
          S === "up" && I && R < Vt.EDGE_ZONE || S === "down" && L && V < Vt.EDGE_ZONE ? a.current = requestAnimationFrame(k) : a.current = null;
        };
        a.current === null && (a.current = requestAnimationFrame(k));
      }
    },
    [i]
  );
  z(() => () => {
    a.current !== null && (cancelAnimationFrame(a.current), a.current = null);
  }, []), z(() => {
    !On && a.current !== null && (cancelAnimationFrame(a.current), a.current = null);
  }, [On]);
  const p = B(
    dp((u) => {
      if (!On || !t)
        return;
      r();
      const f = lg(u), { element: h, targetBlockId: g, targetParentId: m } = f;
      if (!h || !g)
        return;
      const y = t._id;
      if (y && (g === y || Tc(g, y, s)))
        return;
      const x = t._type || t.type;
      if (!x)
        return;
      const w = u.clientX, S = u.clientY;
      if (d(S), !i) return;
      const v = Pm(h, w, S, x, i);
      if (!v)
        return;
      const N = h.getAttribute("data-block-type") || "Box";
      let T = !1;
      const k = ig.includes(N);
      if (N === "Image" && x === "Image" && Ac(t)) {
        o(g), n({
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
        if (k || y && !Ic(y, g, s))
          return;
        T = xt(N, x);
      } else {
        let E = h.parentElement, I = "Box";
        for (; E && !E.hasAttribute("data-block-id"); )
          E = E.parentElement;
        if (E && (I = E.getAttribute("data-block-type") || "Box"), y && !sg(y, g, s))
          return;
        T = xt(I, x);
      }
      if (!T)
        return;
      o(v.targetParentId);
      const C = v.targetParentId || m || void 0;
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
        targetParentId: C
      }), cg(i), v.targetElement.setAttribute("data-drop-target", "true");
    }, 300),
    [i, t, n, r, o, s, d]
  );
  return B(
    (u) => {
      u.preventDefault(), u.stopPropagation(), p(u);
    },
    [p]
  );
};
function lg(t) {
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
function cg(t) {
  if (!t) return;
  t.querySelectorAll("[data-drop-target]").forEach((n) => n.removeAttribute("data-drop-target"));
}
function dg(t) {
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
function Na(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
const Bc = () => {
  const [, t] = oe(), [, e] = He(), { clearHighlight: n } = At(), [, r] = D(Oo), [, o] = D(Ir), s = te(null);
  return B(
    (i, a, c = !0) => {
      var p;
      s.current && (Na(s.current), s.current = null);
      const d = c ? dn(a, ["type", "blocks", "partialBlockId"]) : a;
      if (r(d), i.dataTransfer.setData("text/plain", JSON.stringify({ block: d })), i.dataTransfer.effectAllowed = "move", !c && a._id) {
        const u = (p = document.getElementById("canvas-iframe")) == null ? void 0 : p.contentDocument;
        if (u) {
          const f = u.querySelector(`[data-block-id="${a._id}"]`);
          f && setTimeout(() => {
            if (f) {
              const g = f.getBoundingClientRect().height;
              mn(f == null ? void 0 : f.parentElement) === "vertical" && g > 200 && (f.style.height = "max-content", f.style.maxHeight = "max-content", f.style.minHeight = "0", f.style.overflow = "hidden", f.innerHTML = "<div class='flex items-center justify-center w-full h-full outline-[1px] outline-dashed font-medium outline-gray-500 bg-gray-500/10 py-4 text-transparent'>-</div>", f.style.opacity = "0.4"), f.style.opacity = "0.4", f.setAttribute("data-dragging", "true");
            }
          }, 0);
        }
      }
      if (a != null && a._type || a != null && a.type) {
        const u = dg(a);
        s.current = u, i.dataTransfer.setDragImage(u, 0, 0), setTimeout(() => {
          s.current && (Na(s.current), s.current = null);
        }, 50);
      }
      t([]), n(), e([]), me.publish(se.CLOSE_ADD_BLOCK), yi(!0), o({
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
}, Rr = () => {
  const t = Bc(), e = ag(), n = ng(), r = Cc();
  return {
    onDragStart: t,
    onDragOver: e,
    onDrop: n,
    onDragEnd: r,
    isDragging: On
  };
}, ug = () => {
  const [t] = D(Ir);
  return t;
}, vt = () => {
  const { dragAndDrop: t } = G("flags", { dragAndDrop: !0 });
  return t;
};
let Rc, Lc;
typeof document < "u" && (Rc = document);
typeof window < "u" && (Lc = window);
const Pc = ne.createContext({ document: Rc, window: Lc }), pt = () => ne.useContext(Pc), { Provider: pg, Consumer: tN } = Pc, fg = [
  { ControlIcon: Op, dir: "VERTICAL", key: "UP" },
  { ControlIcon: Mp, dir: "VERTICAL", key: "DOWN" },
  { ControlIcon: Dp, dir: "HORIZONTAL", key: "LEFT" },
  { ControlIcon: $p, dir: "HORIZONTAL", key: "RIGHT" }
], hg = (t, e, n) => {
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
}, Oc = (t, e, n) => !!(t && (n === "UP" || n === "LEFT") || e && (n === "DOWN" || n === "RIGHT")), mg = (t, e) => {
  const [n] = ue(), { document: r } = pt(), { moveBlocks: o } = ze(), s = _(t, "_id"), i = _(t, "_parent"), a = Z(n, (g) => i ? _(g, "_parent") === i : !_(g, "_parent")), c = (a == null ? void 0 : a.length) <= 1, d = ir(a, { _id: s }), p = d <= 0, u = d + 1 === (a == null ? void 0 : a.length), f = hg(i, s, r), h = B(
    (g) => {
      Oc(p, u, g) || c || (g === "UP" || g === "LEFT" ? o([s], i || void 0, d - 1) : (g === "DOWN" || g === "RIGHT") && o([s], i || void 0, d + 2), e());
    },
    [p, u, c, d, s, i, e]
  );
  return Rt(
    "shift+up, shift+down, shift+left, shift+right",
    ({ key: g }) => {
      var m;
      h((m = g == null ? void 0 : g.replace("Arrow", "")) == null ? void 0 : m.toUpperCase());
    },
    { document: r },
    [h]
  ), { isOnlyChild: c, isFirstBlock: p, isLastBlock: u, moveBlock: h, orientation: f };
}, gg = ({ block: t, updateFloatingBar: e }) => {
  const { isOnlyChild: n, isFirstBlock: r, isLastBlock: o, moveBlock: s, orientation: i } = mg(
    t,
    e
  );
  return n ? null : /* @__PURE__ */ l(Q, { children: fg.map(({ ControlIcon: a, dir: c, key: d }) => i !== c || Oc(r, o, d) ? null : /* @__PURE__ */ l(
    a,
    {
      onClick: () => s(d),
      className: "rounded p-px hover:bg-white hover:text-blue-500"
    },
    d
  )) });
}, Si = () => {
  const [t] = ue(), [, e] = oe(), { addBlocks: n } = ze();
  return B(
    (r, o = null) => {
      const s = [];
      bt(r, (i) => {
        const a = t.find((f) => f._id === i);
        o ? o === "root" && (o = null) : o = (a == null ? void 0 : a._parent) ?? null;
        const p = Z(
          t,
          (f) => Nt(o) ? f._parent === o : !f._parent
        ).indexOf(a) + 1, u = Es(t, i, o);
        n(u, o ?? void 0, p), s.push(_(u, "0._id", ""));
      }), e(s);
    },
    [t, e]
  );
}, bg = P(""), Mc = () => D(bg), Dc = P("");
Dc.debugLabel = "inlineEditingActiveAtom";
const $c = P(0);
$c.debugLabel = "inlineEditingItemIndexAtom";
const Sn = () => {
  const [t, e] = D(Dc), [n, r] = D($c);
  return {
    editingBlockId: t,
    editingItemIndex: n,
    setEditingBlockId: e,
    setEditingItemIndex: r
  };
}, Fc = P("outline");
Fc.debugLabel = "sidebarActivePanelAtom";
const Ei = () => D(Fc), yg = ({ blockId: t, className: e }) => /* @__PURE__ */ l(Fp, { className: e, onClick: () => {
  t && me.publish(se.GOTO_BLOCK_SETTINGS, t);
} }), Sa = P(0), zc = P(0);
function _i(t) {
  if (t.getAttribute("data-block-id") === "canvas")
    return null;
  if (t.getAttribute("data-block-id") || t.getAttribute("data-block-parent"))
    return t;
  const e = t.closest("[data-block-id]");
  return (e == null ? void 0 : e.getAttribute("data-block-id")) === "canvas" ? null : e;
}
const xg = ["Heading", "Paragraph", "Text", "Link", "Span", "Button"], wg = (t) => {
  var e;
  return (t == null ? void 0 : t.getAttribute("data-block-type")) === "RichText" || ((e = t == null ? void 0 : t.parentElement) == null ? void 0 : e.getAttribute("data-block-type")) === "RichText";
}, Hc = (t) => t ? up(t.children, (e) => {
  const n = e;
  return n.hasAttribute("data-block-id") || Hc(n);
}) : !1, vg = (t, e) => {
  if (wg(t))
    return !0;
  const n = t == null ? void 0 : t.getAttribute("data-block-type");
  return n ? xg.includes(n) : !1;
}, kg = () => {
  const { editingBlockId: t, setEditingBlockId: e, setEditingItemIndex: n } = Sn();
  return B(
    (r) => {
      var a;
      if (r == null || r.preventDefault(), r == null || r.stopPropagation(), t) return;
      const o = _i(r.target);
      if (!o || !vg(o) || Hc(o)) return;
      const s = o.getAttribute("data-block-id");
      if (!s) return;
      const i = o.closest('[data-block-type="Repeater"]');
      i ? (a = i == null ? void 0 : i.childNodes) == null || a.forEach((c, d) => {
        c.contains(o) && n(d);
      }) : n(-1), e(s);
    },
    [t, e, n]
  );
}, Cg = () => {
  const { editingBlockId: t } = Sn(), { clearHighlight: e } = At(), [, n] = He(), [r] = D(zc);
  return B(
    (o) => {
      if (t) return;
      o.stopPropagation();
      const s = _i(o.target);
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
}, Ng = () => {
  const { editingBlockId: t } = Sn(), { highlightBlock: e } = At();
  return pn(
    (n) => {
      if (t) return;
      const r = _i(n.target);
      r && e(r);
    },
    [t, e],
    100
  );
}, Sg = () => {
  const { clearHighlight: t } = At();
  return B(() => t(), [t]);
}, Eg = ({ children: t }) => {
  const e = kg(), n = Cg(), r = Ng(), o = Sg();
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
}, Vc = (t, e) => t.querySelector(`[data-block-id="${e}"]`), _g = (t, e) => t.querySelector(`[data-style-id="${e}"]`), Ag = () => {
  const t = ae(), { document: e } = pt(), [n] = He(), [r, o] = $([]), [, s] = $([]), { onDragStart: i, onDragEnd: a, isDragging: c } = Rr(), [d, p] = $(null), u = vt();
  return z(() => {
    if (!(t != null && t._id)) return;
    const f = eg(t._id);
    if (t.type !== "Multiple" && e) {
      const h = Vc(e, t._id);
      if (h) {
        const g = e.defaultView;
        if (g && f) {
          const m = Zm(h) ?? h, y = (w) => {
            const S = w.getBoundingClientRect();
            return { top: S.top, bottom: S.bottom };
          }, x = Qm(
            { section: y(m), selected: y(h) },
            g.innerHeight,
            g.scrollY
          );
          x !== null && Ym(g, x);
        }
        o([h]);
      }
    }
  }, [t == null ? void 0 : t._id, t == null ? void 0 : t.type, e]), z(() => {
    if (!F(n) && e) {
      const f = _g(e, ye(n).id);
      s(f ? [f] : [null]);
    } else
      s([null]);
  }, [n, e]), /* @__PURE__ */ l(
    "div",
    {
      onDragEnd: () => {
        p(null), a();
      },
      draggable: u && !!t,
      onDragStart: (f) => {
        p(r == null ? void 0 : r[0]), i(f, t, !1);
      },
      children: t && /* @__PURE__ */ l(
        Tg,
        {
          block: t,
          isDragging: c && !!d,
          selectedBlockElement: r[0] || (c ? d : null)
        }
      )
    }
  );
}, Tg = ({ block: t, isDragging: e, selectedBlockElement: n }) => {
  const r = bi(), o = Si(), [, s] = oe(), [, i] = Mc(), [, a] = He(), { hasPermission: c } = wt(), { editingBlockId: d } = Sn(), { document: p } = pt(), u = vt(), f = G("flags.gotoSettings", !1), h = G("flags.ai", !1), { floatingStyles: g, refs: m, update: y } = Lp({
    placement: "top-start",
    middleware: [
      Pp({
        boundary: p == null ? void 0 : p.body,
        limiter: Rp({
          offset: 8,
          mainAxis: !0,
          crossAxis: !0
        })
      }),
      Ip({
        boundary: p == null ? void 0 : p.body,
        fallbackPlacements: ["bottom-start", "top-end", "bottom-end", "inside"]
      }),
      Bp({
        boundary: p == null ? void 0 : p.body,
        apply({ availableWidth: v, availableHeight: N, elements: T }) {
          Object.assign(T.floating.style, {
            maxWidth: `${Math.max(200, v)}px`,
            maxHeight: `${Math.max(100, N)}px`
          });
        }
      })
    ],
    elements: { reference: n }
  });
  Cs(n, () => y(), n !== null), Cs(p == null ? void 0 : p.body, () => y(), (p == null ? void 0 : p.body) !== null);
  const x = _(t, "_parent", null), w = F(_(t, "_name", "")) ? _(t, "_type", "") : _(t, "_name", "");
  z(() => {
    let v = null;
    return n ? (v = setTimeout(() => y(), 500), () => {
      v && clearTimeout(v);
    }) : (y(), () => {
      v && clearTimeout(v);
    });
  }, [n, t == null ? void 0 : t._id]);
  const [, S] = Ei();
  return !e && (!n || !t || d) ? null : /* @__PURE__ */ l(Q, { children: /* @__PURE__ */ l(
    "div",
    {
      role: "button",
      tabIndex: 0,
      ref: m.setFloating,
      style: g,
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
          u && /* @__PURE__ */ l(zp, { className: "flex-shrink-0 cursor-grab rounded p-0.5 hover:bg-white/20 active:cursor-grabbing" }),
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
        /* @__PURE__ */ l("div", { className: `w-full ${u ? "cursor-grab active:cursor-grabbing" : ""}`, children: /* @__PURE__ */ l("div", { className: "mr-10 w-full items-center space-x-1 px-1 leading-tight", children: w }) }),
        /* @__PURE__ */ b("div", { className: "flex items-center gap-1 pl-1 pr-1.5", children: [
          c(Be.ADD_BLOCK) && h && /* @__PURE__ */ l(
            ni,
            {
              className: "h-4 w-4 rounded hover:bg-white hover:text-blue-500",
              onClick: () => {
                S("chai-chat-panel"), me.publish(se.OPEN_AI_PANEL);
              }
            }
          ),
          f && /* @__PURE__ */ l(
            yg,
            {
              blockId: t == null ? void 0 : t._id,
              className: "h-4 w-4 rounded p-px hover:bg-white hover:text-blue-500"
            }
          ),
          !u && /* @__PURE__ */ l(hm, { block: t, children: /* @__PURE__ */ l(Ze, { className: "h-4 w-4 rounded p-px hover:bg-white hover:text-blue-500" }) }),
          ri(_(t, "_type", "")) && c(Be.ADD_BLOCK) ? /* @__PURE__ */ l(
            Ks,
            {
              className: "h-4 w-4 rounded p-px hover:bg-white hover:text-blue-500",
              onClick: () => o([t == null ? void 0 : t._id])
            }
          ) : null,
          oi(_(t, "_type", "")) && c(Be.DELETE_BLOCK) ? /* @__PURE__ */ l(
            Ys,
            {
              className: "h-4 w-4 rounded p-px hover:bg-white hover:text-blue-500",
              onClick: () => r([t == null ? void 0 : t._id])
            }
          ) : null,
          c(Be.MOVE_BLOCK) && /* @__PURE__ */ l(gg, { block: t, updateFloatingBar: y })
        ] })
      ] })
    }
  ) });
}, Ig = `<!doctype html>
<html lang="en" dir="__HTML_DIR__" class="scroll-smooth h-full overflow-y-auto">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="__TAILWIND_SCRIPT__"><\/script>
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
    __TAILWIND_STYLE__
  </head>
  <body class="font-body antialiased h-full">
    <div class="frame-root h-full"></div>
  </body>
</html>`, Ai = "chai-tailwind-theme", jc = `
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
      }`, Bg = `<style type="text/tailwindcss">${jc}
    </style>`, Rg = `<style type="text/tailwindcss">
      @custom-variant dark (&:where(.dark, .dark *));
      @layer base {
        *,
        ::after,
        ::before {
          border-color: var(--color-border, currentColor);
        }
        body {
          color: var(--color-foreground);
          background-color: var(--color-background);
        }
      }${jc}
    </style>
    <!--
      Theme placeholder, filled by TailwindV4Theme. It ships in the initial content so the first
      compile registers it: the build only re-reads stylesheets on a "full" rebuild, and it starts
      watching a style element's content once it has seen it. A style added later is only picked up
      through the added-node path, and anything it misses there is never compiled and never errors.
    -->
    <style type="text/tailwindcss" id="${Ai}"></style>`, Lg = {
  3: "https://cdn.tailwindcss.com/3.4.17?plugins=forms@0.5.9,typography@0.5.15,aspect-ratio@0.4.2",
  4: "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
}, Pg = {
  3: Bg,
  4: Rg
}, Wc = ({
  htmlDir: t = "ltr",
  tailwindCSS: e = "4",
  tailwindScriptUrl: n
} = {}) => Ig.replace("__HTML_DIR__", t).replace("__TAILWIND_SCRIPT__", n || Lg[e]).replace("__TAILWIND_STYLE__", Pg[e]);
Wc();
class Og extends kl {
  componentDidMount() {
    this.props.contentDidMount();
  }
  componentDidUpdate() {
    this.props.contentDidUpdate();
  }
  render() {
    return kp.only(this.props.children);
  }
}
class Gc extends kl {
  constructor(n, r) {
    super(n, r);
    Jt(this, "setRef", (n) => {
      this.nodeRef.current = n;
      const { forwardedRef: r } = this.props;
      typeof r == "function" ? r(n) : r && (r.current = n);
    });
    Jt(this, "handleLoad", () => {
      clearInterval(this.loadCheck), this.state.iframeLoaded || this.setState({ iframeLoaded: !0 });
    });
    // In certain situations on a cold cache DOMContentLoaded never gets called
    // fallback to an interval to check if that's the case
    Jt(this, "loadCheck", () => setInterval(() => {
      this.handleLoad();
    }, 500));
    this._isMounted = !1, this.nodeRef = ne.createRef(), this.state = { iframeLoaded: !1 };
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
    const r = this.props.contentDidMount, o = this.props.contentDidUpdate, s = n.defaultView || n.parentView, i = /* @__PURE__ */ l(Og, { contentDidMount: r, contentDidUpdate: o, children: /* @__PURE__ */ l(pg, { value: { document: n, window: s }, children: /* @__PURE__ */ l("div", { className: "frame-content", children: this.props.children }) }) }), a = this.getMountTarget();
    return [pa.createPortal(this.props.head, this.getDoc().head), pa.createPortal(i, a)];
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
Jt(Gc, "defaultProps", {
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
const Mg = ne.forwardRef((t, e) => /* @__PURE__ */ l(Gc, { ...t, forwardedRef: e })), Uc = P([]), Do = () => {
  const [t, e] = D(Uc), n = gt(Kc), r = B(
    (o) => {
      e(o), n([]);
    },
    [e, n]
  );
  return [t, r];
}, Kc = P([]), Yc = () => {
  const [t] = ue(), [e, n] = D(Kc), r = gt(Uc), { getPartialBlocks: o } = mi(), s = G("flags.copyPaste", !0), i = B(
    (c) => c.some((d) => Es(t, d, null).some((u) => u._type === "PartialBlock" || u._type === "GlobalBlock")),
    [t]
  ), a = B(
    async (c, d = !1) => {
      try {
        if (F(c)) return;
        n(c), r([]);
        const p = {
          _chai_copied_blocks: c.flatMap((u) => {
            const f = Es(t, u, null);
            if (!d)
              return f;
            let h = [];
            for (const g of f)
              if (g._type === "PartialBlock" || g._type === "GlobalBlock") {
                let m = o(g.partialBlockId);
                g._parent && (m == null ? void 0 : m.length) > 0 && (m = m.map((y) => (F(y._parent) && Ue(y, "_parent", g._parent), y))), h = [...h, ...m];
              } else
                h.push(g);
            return h;
          })
        };
        if (!s)
          return;
        if (!navigator.clipboard) {
          Ce.error("Clipboard not available.");
          return;
        }
        Ce.promise(navigator.clipboard.writeText(JSON.stringify(p)), {
          success: "Blocks copied successfully",
          error: "Failed to copy blocks to clipboard"
        });
      } catch (p) {
        Ce.error("Failed to copy blocks to clipboard"), console.error("Failed to copy blocks to clipboard:", p);
      }
    },
    [n, r, t]
  );
  return [e, a, i];
}, is = () => navigator.userAgent.toLowerCase().includes("firefox"), Dg = () => {
  const [t] = ue();
  return (e, n) => {
    var s;
    const r = ((s = ee(t, { _id: n })) == null ? void 0 : s._type) || null, o = ye(e.map((i) => {
      var a;
      return (a = ee(t, { _id: i })) == null ? void 0 : a._type;
    }));
    return xt(r, o);
  };
}, $g = () => {
  const t = Ke(Fe), { moveBlocks: e } = ze();
  return B(
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
}, Ti = () => {
  const [t, e] = Do(), n = $g(), { addPredefinedBlock: r } = Nn(), o = Dg();
  return {
    canPaste: B(
      async (i) => {
        if (t.length > 0)
          return o(t, i);
        if (is())
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
      [o, t]
    ),
    pasteBlocks: B(
      async (i) => {
        const a = Array.isArray(i) ? i[0] : i;
        if (!F(t)) {
          n(t, i), e([]), is() || await navigator.clipboard.writeText("");
          return;
        }
        if (is()) {
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
}, Jc = (t) => {
  const [e, n] = oe(), r = ae(), o = bi(), s = Si(), { undo: i, redo: a } = Tr(), [, c] = Do(), [, d] = Yc(), { canPaste: p, pasteBlocks: u } = Ti(), f = t ? { document: t } : {};
  Rt(
    "ctrl+z,meta+z",
    (h) => {
      h.preventDefault(), mt.hasUndo() && i();
    },
    { ...f, preventDefault: !0 },
    [i]
  ), Rt(
    "ctrl+y,meta+y",
    (h) => {
      h.preventDefault(), mt.hasRedo() && a();
    },
    { ...f, preventDefault: !0 },
    [a]
  ), Rt(
    "ctrl+x,meta+x",
    (h) => {
      const g = window.getSelection();
      g && g.toString().length > 0 || (h.preventDefault(), F(e) || c(e));
    },
    { ...f, enabled: !F(e) },
    [e, c]
  ), Rt(
    "ctrl+c,meta+c",
    (h) => {
      const g = window.getSelection();
      g && g.toString().length > 0 || (h.preventDefault(), d(e));
    },
    { ...f, enabled: !F(e) },
    [e, d]
  ), Rt(
    "ctrl+v,meta+v",
    async () => {
      await p(e[0]) && u(e);
    },
    { ...f, enabled: !F(e), preventDefault: !0 },
    [e, p, u]
  ), Rt("esc", () => n([]), f, [n]), Rt(
    "ctrl+d,meta+d",
    () => s(e),
    { ...f, enabled: !F(e), preventDefault: !0 },
    [e, s]
  ), Rt(
    "delete, backspace",
    (h) => {
      h.preventDefault(), oi(_(r, "_type", "")) && o(e);
    },
    f,
    [e, o]
  );
}, Fg = () => {
  const { document: t } = pt();
  return Jc(t), null;
}, zg = () => {
  const { t } = K(), { hasPermission: e } = wt(), n = e(Be.ADD_BLOCK), r = vt();
  return n ? /* @__PURE__ */ b("div", { id: "add-block-bottom", className: "group relative w-full cursor-pointer py-2", children: [
    /* @__PURE__ */ l("br", {}),
    !r && /* @__PURE__ */ l(
      "div",
      {
        role: "button",
        onClick: () => me.publish(se.OPEN_ADD_BLOCK),
        className: "block h-1 rounded bg-primary opacity-0 duration-200 group-hover:opacity-100",
        children: /* @__PURE__ */ b("div", { className: "absolute left-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center gap-x-1 rounded-full bg-primary px-3 py-1 text-xs leading-tight text-white hover:bg-primary", children: [
          /* @__PURE__ */ l(Ze, { className: "size-2.5 stroke-[3]" }),
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
}, Hg = 300;
function as(t) {
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return !1;
  const e = t;
  return e.tagName === "STYLE" && e.parentNode === e.ownerDocument.head && !e.id && !e.hasAttribute("type") && !e.hasAttribute("href") && !e.hasAttribute("data-precedence");
}
function Xc(t) {
  return t.type === "characterData" ? as(t.target.parentNode) : as(t.target) ? !0 : Array.from(t.addedNodes).some(as);
}
function Vg(t, e, n = Hg) {
  const r = t.defaultView ?? e;
  let o, s = !0, i = !1;
  const a = () => {
    o = void 0;
    const p = e.tailwind;
    !s || !(p != null && p.config) || (s = !1, i = !0, p.config = { ...p.config });
  }, c = () => {
    o !== void 0 && r.clearTimeout(o), o = r.setTimeout(a, n);
  }, d = new r.MutationObserver((p) => {
    let u = !1;
    for (const f of p)
      Xc(f) && (u = !0, i ? i = !1 : s = !0);
    u && c();
  });
  return d.observe(t.head, { childList: !0, subtree: !0, characterData: !0 }), c(), () => {
    d.disconnect(), o !== void 0 && r.clearTimeout(o);
  };
}
const jg = "data-tailwind-ready", Ea = (t) => Array.from(t.head.querySelectorAll("style")).filter((e) => !e.id && !e.hasAttribute("type") && !e.hasAttribute("data-precedence")).map((e) => e.textContent ?? "").join(""), _a = (t) => {
  const e = t.getElementById(Ai);
  return !e || (e.textContent ?? "").trim().length > 0;
};
function Wg(t) {
  const e = t.defaultView;
  if (!e) return () => {
  };
  const n = () => t.documentElement.setAttribute(jg, "true");
  if (_a(t) && Ea(t).trim())
    return n(), () => {
    };
  const r = new e.MutationObserver((o) => {
    o.some(Xc) && (!_a(t) || !Ea(t).trim() || (n(), r.disconnect()));
  });
  return r.observe(t.head, { childList: !0, subtree: !0, characterData: !0 }), () => r.disconnect();
}
const qc = ({ theme: t }) => {
  const e = M(() => qf({ theme: t }), [t]);
  return /* @__PURE__ */ l("style", { id: "chai-theme", dangerouslySetInnerHTML: { __html: e } });
}, Zc = Et("darkMode", !1), Lr = () => {
  const [t, e] = D(Zc);
  return [t, e];
}, Gg = (t = Gl) => {
  const e = ei;
  return t.fontFamily && (e.fontFamily = Object.entries(t.fontFamily).reduce(
    (n, [r, o]) => ({
      ...n,
      [r.replace("font-", "")]: o
    }),
    e.fontFamily
  )), e.borderRadius = t.borderRadius, t.colors && (e.colors = t.colors.reduce((n, r) => (Object.entries(r.items).forEach(([o, s]) => {
    o in n && (n[o] = s);
  }), n), e.colors)), e;
}, Ug = P({}), $o = () => {
  const t = Pr(), e = M(() => Gg(t), [t]), n = G("theme", {}), [r, o] = D(Ug);
  return [M(
    () => ({ ...e, ...!F(n) && n, ...!F(r) && r }),
    [e, n, r]
  ), o];
}, Pr = () => {
  const t = G("themeOptions", (n) => n);
  return M(() => t(Gl), [t]);
}, Kg = P("block"), Yg = () => D(Kg), Jg = P("settings"), Qc = () => D(Jg), Xg = (t) => ({
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
      ...eh(t)
    }
  },
  plugins: [
    dh,
    ch,
    lh,
    hh(function({ addBase: e, theme: n }) {
      e({
        "h1,h2,h3,h4,h5,h6": {
          fontFamily: n("fontFamily.heading")
        },
        body: {
          fontFamily: n("fontFamily.body"),
          color: n("colors.foreground"),
          backgroundColor: n("colors.background")
        }
      });
    })
  ]
}), qg = (t, e, n, r, o) => {
  z(() => {
    const s = r;
    !o || !s || !s.tailwind || (s.tailwind.config = Xg(e));
  }, [t, e, r, o]), z(() => {
    if (!(!o || !n || !r))
      return Vg(n, r);
  }, [n, r, o]);
}, Zg = ({ chaiThemeOptions: t }) => {
  const { document: e } = pt(), n = M(() => th(t), [t]);
  return z(() => {
    const r = e == null ? void 0 : e.getElementById(Ai);
    r && r.textContent !== n && (r.textContent = n);
  }, [e, n]), null;
}, Qg = (t) => {
  z(() => {
    if (t)
      return Wg(t);
  }, [t]);
}, eb = () => {
  const [t] = $o(), e = Pr(), [n] = Lr(), { document: r, window: o } = pt(), s = G("tailwindCSS", "4");
  return z(() => {
    n ? r == null || r.documentElement.classList.add("dark") : r == null || r.documentElement.classList.remove("dark");
  }, [n, r]), qg(t, e, r, o, s === "3"), Qg(r), /* @__PURE__ */ b(Q, { children: [
    /* @__PURE__ */ l(qc, { theme: t }),
    s === "4" ? /* @__PURE__ */ l(Zg, { chaiThemeOptions: e }) : null,
    /* @__PURE__ */ l(rb, {}),
    /* @__PURE__ */ l(nb, {}),
    /* @__PURE__ */ l(tb, {})
  ] });
}, tb = () => {
  const [t] = He(), [e] = oe(), n = M(() => `${A(t, ({ id: r }) => `[data-style-id="${r}"]`).join(",")}{
                outline: 1px solid ${e.length > 0 ? "#42a1fc" : "#de8f09"} !important; outline-offset: -1px;
            }`, [t, e]);
  return /* @__PURE__ */ l("style", { id: "selected-styling-blocks", dangerouslySetInnerHTML: { __html: n } });
}, nb = () => {
  const [t] = oe(), e = M(() => `${A(t, (n) => `[data-block-id="${n}"]`).join(",")}{
                outline: 1px solid #42a1fc !important; outline-offset: -1px;
            }`, [t]);
  return /* @__PURE__ */ l("style", { id: "selected-blocks", dangerouslySetInnerHTML: { __html: e } });
}, rb = Gn(function() {
  const [e] = $o(), n = ti(), r = M(() => {
    const { heading: i, body: a } = {
      heading: _(e, "fontFamily.heading"),
      body: _(e, "fontFamily.body")
    };
    return n.filter((c) => c.family === i || c.family === a);
  }, [e == null ? void 0 : e.fontFamily, n]), o = M(
    () => Zf(Z(r, (i) => le(i, "url"))),
    [r]
  ), s = M(
    () => Qf(Z(r, (i) => le(i, "src"))),
    [r]
  );
  return /* @__PURE__ */ b(Q, { children: [
    o.map((i, a) => /* @__PURE__ */ l("link", { rel: "stylesheet", href: i }, `google-font-${a}`)),
    /* @__PURE__ */ l("style", { id: "chai-custom-fonts", dangerouslySetInnerHTML: { __html: s } })
  ] });
}), ob = ({ children: t, onMount: e, onResize: n }) => {
  const [, r] = oe(), [, o] = He(), s = te(null), i = dt(
    () => {
      const { clientWidth: c } = s.current;
      n(c);
    },
    [s.current],
    100
  );
  Cs(s.current, i, s.current !== null), z(() => {
    const { clientWidth: c } = s.current;
    e(c);
  }, []);
  const a = B(() => {
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
}, sb = () => {
  const t = gt(Er), e = Bc(), n = Cc(), r = te(null), o = B(
    (a) => {
      var f;
      if (a.button !== 0) return;
      const c = Date.now(), d = c - Pe.get(Sa);
      if (d < 400 && d > 0) {
        Pe.set(zc, 2);
        return;
      }
      Pe.set(Sa, c);
      const u = (f = a.target.closest("[data-block-id]")) == null ? void 0 : f.getAttribute("data-block-id");
      u && (t([u]), r.current = u);
    },
    [t]
  ), s = B(
    (a) => {
      if (!r.current) return;
      const c = ee(Pe.get(Fe), { _id: r.current });
      c && e(a, c, !1);
    },
    [e]
  ), i = B(() => {
    n(), r.current = null;
  }, [n]);
  return {
    onMouseDown: o,
    onDragStart: s,
    onDragEnd: i
  };
}, ib = () => {
  const [t] = ue();
  return B(
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
}, ab = P("edit"), ed = () => {
  const [t, e] = D(ab);
  return { mode: t, setMode: e };
}, lb = ({ children: t, block: e }) => {
  const n = M(() => Oe(e._type), [e._type]), r = _(n, "dataProviderDependencies"), o = _(n, "dataProvider"), s = _(n, "dataProviderMode", "mock"), i = Lh(e, s, r, o);
  return t(i);
}, cb = () => /* @__PURE__ */ l("div", { className: "flex min-h-[100px] items-center justify-center bg-red-50 p-2 text-center text-red-500", children: "Something went wrong." });
function ke(...t) {
  return Wl(Jf(t));
}
const Bs = ({
  editor: t,
  trigger: e,
  content: n,
  from: r,
  menuRef: o
}) => {
  const { document: s } = pt(), [i, a] = $({ left: void 0, right: void 0, top: void 0, bottom: void 0 }), [c, d] = $(!1), p = te(null);
  if (z(() => {
    var x, w;
    if (!c) {
      a({ left: void 0, right: void 0, top: void 0, bottom: void 0 });
      return;
    }
    const u = (x = p.current) == null ? void 0 : x.getBoundingClientRect();
    if (!u || !s) return;
    const f = (w = o.current) == null ? void 0 : w.getBoundingClientRect();
    if (!f) return;
    let h = u.left, g = u.bottom + 4, m, y;
    (f == null ? void 0 : f.left) + (f == null ? void 0 : f.width) + 50 >= s.body.offsetWidth && (h = void 0, m = s.body.offsetWidth - (u == null ? void 0 : u.right)), g + 202 >= s.body.clientHeight && (g = void 0, y = s.body.clientHeight - u.bottom + f.height), a({ left: h, top: g, right: m, bottom: y });
  }, [c]), r === "canvas") {
    const u = () => {
      d(!1), t && (t == null || t.view.focus(), t == null || t.chain().focus().run());
    };
    return /* @__PURE__ */ b(Q, { children: [
      /* @__PURE__ */ l("div", { ref: p, onClick: () => d((f) => !f), className: "cursor-pointer", children: e }),
      c && (i.left !== void 0 || i.top !== void 0 || i.right !== void 0 || i.bottom !== void 0) && nh(
        /* @__PURE__ */ l(
          "div",
          {
            id: "chaibuilder-rte-dropdown-menu-content",
            onClick: u,
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
                children: typeof n == "function" ? n(u) : n
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
}, db = (t, e, n) => {
  const r = n === "settings", o = typeof e == "boolean" ? e : e.some((s) => t.isActive(s));
  return {
    "rounded p-1": !0,
    "hover:bg-blue-900 hover:text-blue-100": !o && !r,
    "hover:bg-blue-100 hover:text-blue-900": !o && r,
    "bg-blue-500 text-white": o && r,
    "bg-white text-blue-500": o && !r
  };
}, Aa = ({ themeColors: t, onClose: e, color: n, onChange: r, onRemove: o }) => /* @__PURE__ */ b(Q, { children: [
  /* @__PURE__ */ l("div", { className: "flex w-[180px] flex-wrap gap-1 pb-2", children: (t == null ? void 0 : t.length) > 0 && js(t).map((s) => {
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
  /* @__PURE__ */ l(Xf, { color: n, onChange: r, style: { width: "200px", height: "200px" } }),
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
] }), ub = ({
  textColor: t,
  highlightColor: e,
  onChangeTextColor: n,
  onChangeHighlightColor: r,
  onRemoveTextColor: o,
  onRemoveHighlightColor: s,
  onClose: i
}) => {
  const [a] = Lr(), [c] = D(Em), d = (c == null ? void 0 : c.colors) || {}, p = Object.values(d).map((h) => _(h, a ? "1" : "0")), [u, f] = $("TEXT");
  return /* @__PURE__ */ b("div", { id: "rte-widget-color-picker", className: "px-1", children: [
    /* @__PURE__ */ b("div", { className: "mb-2 flex items-center justify-between rounded-md border bg-muted", children: [
      /* @__PURE__ */ l(
        "div",
        {
          className: `w-full cursor-pointer rounded p-0.5 text-center ${u === "TEXT" ? "bg-blue-500 text-white" : "hover:bg-blue-100 hover:text-blue-500"}`,
          onClick: () => f("TEXT"),
          children: "Text Color"
        }
      ),
      /* @__PURE__ */ l(
        "div",
        {
          className: `w-full cursor-pointer rounded p-0.5 text-center ${u === "HIGHLIGHT" ? "bg-blue-500 text-white" : "hover:bg-blue-100 hover:text-blue-500"}`,
          onClick: () => f("HIGHLIGHT"),
          children: "Highlight Color"
        }
      )
    ] }),
    u === "TEXT" ? /* @__PURE__ */ l(
      Aa,
      {
        themeColors: p,
        onClose: i,
        onChange: n,
        color: t,
        onRemove: o
      }
    ) : /* @__PURE__ */ l(
      Aa,
      {
        themeColors: p,
        onClose: i,
        onChange: r,
        color: e,
        onRemove: s
      }
    )
  ] });
}, pb = ({ editor: t, from: e, menuRef: n }) => {
  var x, w;
  const r = (x = t == null ? void 0 : t.getAttributes("textStyle")) == null ? void 0 : x.color, o = (w = t == null ? void 0 : t.getAttributes("highlight")) == null ? void 0 : w.color, [s, i] = $(r || "#000000F2"), [a, c] = $(o || "#00000057"), d = (S) => S.includes("#") && S.length >= 3, p = dt(
    (S) => {
      d(S) && (t == null || t.chain().setColor(S).run());
    },
    [t],
    150
  ), u = dt(
    (S) => {
      d(S) && (t == null || t.chain().setHighlight({ color: S }).run());
    },
    [t],
    150
  ), f = (S, v) => {
    v ? (i(S), p(S)) : (t == null || t.chain().setColor(S).run(), i(S));
  }, h = (S, v) => {
    v ? (c(S), u(S)) : (t == null || t.chain().setHighlight({ color: S }).run(), c(S));
  }, g = () => {
    t == null || t.chain().unsetColor().run(), i("#000000F2");
  }, m = () => {
    t == null || t.chain().unsetHighlight().run();
  };
  return z(() => {
    o && c(o);
  }, [o]), /* @__PURE__ */ l(
    Bs,
    {
      editor: t,
      from: e,
      menuRef: n,
      trigger: /* @__PURE__ */ b("div", { className: ke("relative flex items-center", db(t, !!r, e)), title: "Text Color", children: [
        /* @__PURE__ */ l(
          "div",
          {
            className: "h-4 w-4 rounded-full",
            style: {
              backgroundColor: r || (e === "canvas" ? "#FFFFFF" : "#000000")
            }
          }
        ),
        /* @__PURE__ */ l(vs, { className: "h-3 w-3 opacity-50" })
      ] }),
      content: (S) => /* @__PURE__ */ l(
        ub,
        {
          textColor: s,
          highlightColor: a,
          onChangeTextColor: f,
          onChangeHighlightColor: h,
          onRemoveTextColor: g,
          onRemoveHighlightColor: m,
          onClose: S
        }
      )
    }
  );
}, Xe = (t, e, n) => {
  const r = n === "settings", o = typeof e == "boolean" ? e : e.some((s) => t.isActive(s));
  return {
    "rounded p-1": !0,
    "hover:bg-blue-900 hover:text-blue-100": !o && !r,
    "hover:bg-blue-100 hover:text-blue-900": !o && r,
    "bg-blue-500 text-white": o && r,
    "bg-white text-blue-500": o && !r
  };
}, td = ({ editor: t, from: e = "settings", onExpand: n }) => {
  const r = te(null);
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
            className: ke("", Xe(t, ["bold"], e)),
            title: "Bold",
            children: /* @__PURE__ */ l(Hp, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => t.chain().focus().toggleItalic().run(),
            className: ke("", Xe(t, ["italic"], e)),
            title: "Italic",
            children: /* @__PURE__ */ l(_l, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => t.chain().focus().toggleUnderline().run(),
            className: ke("", Xe(t, ["underline"], e)),
            title: "Underline",
            children: /* @__PURE__ */ l(Al, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => t.chain().focus().toggleStrike().run(),
            className: ke("", Xe(t, ["strike"], e)),
            title: "Strike",
            children: /* @__PURE__ */ l(Vp, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ l("div", { className: "mx-1 h-5 w-px self-center bg-border" }),
        /* @__PURE__ */ l(pb, { editor: t, from: e, menuRef: r }),
        /* @__PURE__ */ l("div", { className: "mx-1 h-5 w-px self-center bg-border" }),
        /* @__PURE__ */ l(
          Bs,
          {
            editor: t,
            menuRef: r,
            from: e,
            trigger: /* @__PURE__ */ b(
              "button",
              {
                type: "button",
                className: ke("flex items-center", Xe(t, ["bulletList", "orderedList"], e)),
                title: "Bullet List",
                children: [
                  /* @__PURE__ */ l(ks, { className: "h-4 w-4" }),
                  /* @__PURE__ */ l(vs, { className: "h-3 w-3 opacity-50" })
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
                    Xe(t, ["bulletList"], e)
                  ),
                  children: [
                    /* @__PURE__ */ l(ks, { className: "h-4 w-4" }),
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
                    Xe(t, ["orderedList"], e)
                  ),
                  children: [
                    /* @__PURE__ */ l(jp, { className: "h-4 w-4" }),
                    "Ordered List"
                  ]
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ l(
          Bs,
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
                  Xe(
                    t,
                    t.isActive({ textAlign: "center" }) || t.isActive({ textAlign: "right" }),
                    e
                  )
                ),
                title: "Text Alignment",
                children: [
                  t.isActive({ textAlign: "center" }) ? /* @__PURE__ */ l(sa, { className: "h-4 w-4" }) : t.isActive({ textAlign: "right" }) ? /* @__PURE__ */ l(ia, { className: "h-4 w-4" }) : /* @__PURE__ */ l(oa, { className: "h-4 w-4" }),
                  /* @__PURE__ */ l(vs, { className: "h-3 w-3 opacity-50" })
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
                    Xe(t, t.isActive({ textAlign: "left" }), e)
                  ),
                  children: [
                    /* @__PURE__ */ l(oa, { className: "h-4 w-4" }),
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
                    Xe(t, t.isActive({ textAlign: "center" }), e)
                  ),
                  children: [
                    /* @__PURE__ */ l(sa, { className: "h-4 w-4" }),
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
                    Xe(t, t.isActive({ textAlign: "right" }), e)
                  ),
                  children: [
                    /* @__PURE__ */ l(ia, { className: "h-4 w-4" }),
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
            className: ke("", Xe(t, ["link"], e)),
            title: "Remove Link",
            disabled: !t.isActive("link"),
            children: /* @__PURE__ */ l(Tl, { className: "h-3.5 w-3.5" })
          }
        ) : /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: o,
            className: ke("", Xe(t, ["link"], e)),
            title: "Add Link",
            children: /* @__PURE__ */ l(Wp, { className: "h-3.5 w-3.5" })
          }
        ),
        n && /* @__PURE__ */ b(Q, { children: [
          /* @__PURE__ */ l("div", { className: "mx-1 h-5 w-px self-center bg-border" }),
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              onClick: n,
              className: ke("", Xe(t, !1, e)),
              title: "Open in full screen mode",
              children: /* @__PURE__ */ l(Gp, { className: "h-3.5 w-3.5" })
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
    var r = n && n != t ? this.remove(n) : this, o = r.find(t), s = r.content.slice();
    return o == -1 ? s.push(n || t, e) : (s[o + 1] = e, n && (s[o] = n)), new De(s);
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
    var r = this.remove(e), o = r.content.slice(), s = r.find(t);
    return o.splice(s == -1 ? o.length : s, 0, e, n), new De(o);
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
function nd(t, e, n) {
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
      let i = nd(o.content, s.content, n + 1);
      if (i != null)
        return i;
    }
    n += o.nodeSize;
  }
}
function rd(t, e, n, r) {
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
      let d = 0, p = Math.min(i.text.length, a.text.length);
      for (; d < p && i.text[i.text.length - d - 1] == a.text[a.text.length - d - 1]; )
        d++, n--, r--;
      return { a: n, b: r };
    }
    if (i.content.size || a.content.size) {
      let d = rd(i.content, a.content, n - 1, r - 1);
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
        let p = a + 1;
        c.nodesBetween(Math.max(0, e - p), Math.min(c.content.size, n - p), r, o + p);
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
    return nd(this, e, n);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, n = this.size, r = e.size) {
    return rd(this, e, n, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return Hr(0, e);
    if (e == this.size)
      return Hr(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let n = 0, r = 0; ; n++) {
      let o = this.child(n), s = r + o.nodeSize;
      if (s >= e)
        return s == e ? Hr(n + 1, s) : Hr(n, r);
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
const ls = { index: 0, offset: 0 };
function Hr(t, e) {
  return ls.index = t, ls.offset = e, ls;
}
function fo(t, e) {
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
      if (!fo(t[r], e[r]))
        return !1;
  } else {
    for (let r in t)
      if (!(r in e) || !fo(t[r], e[r]))
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
    return this == e || this.type == e.type && fo(this.attrs, e.attrs);
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
      return ce.none;
    if (e instanceof ce)
      return [e];
    let n = e.slice();
    return n.sort((r, o) => r.type.rank - o.type.rank), n;
  }
}
ce.none = [];
class ho extends Error {
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
    let r = sd(this.content, e + this.openStart, n);
    return r && new X(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, n) {
    return new X(od(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
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
function od(t, e, n) {
  let { index: r, offset: o } = t.findIndex(e), s = t.maybeChild(r), { index: i, offset: a } = t.findIndex(n);
  if (o == e || s.isText) {
    if (a != n && !t.child(i).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(n));
  }
  if (r != i)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(r, s.copy(od(s.content, e - o - 1, n - o - 1)));
}
function sd(t, e, n, r) {
  let { index: o, offset: s } = t.findIndex(e), i = t.maybeChild(o);
  if (s == e || i.isText)
    return r && !r.canReplace(o, o, n) ? null : t.cut(0, e).append(n).append(t.cut(e));
  let a = sd(i.content, e - s - 1, n, i);
  return a && t.replaceChild(o, i.copy(a));
}
function fb(t, e, n) {
  if (n.openStart > t.depth)
    throw new ho("Inserted content deeper than insertion position");
  if (t.depth - n.openStart != e.depth - n.openEnd)
    throw new ho("Inconsistent open depths");
  return id(t, e, n, 0);
}
function id(t, e, n, r) {
  let o = t.index(r), s = t.node(r);
  if (o == e.index(r) && r < t.depth - n.openStart) {
    let i = id(t, e, n, r + 1);
    return s.copy(s.content.replaceChild(o, i));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
      let i = t.parent, a = i.content;
      return ln(i, a.cut(0, t.parentOffset).append(n.content).append(a.cut(e.parentOffset)));
    } else {
      let { start: i, end: a } = hb(n, t);
      return ln(s, ld(t, i, a, e, r));
    }
  else return ln(s, mo(t, e, r));
}
function ad(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new ho("Cannot join " + e.type.name + " onto " + t.type.name);
}
function Rs(t, e, n) {
  let r = t.node(n);
  return ad(r, e.node(n)), r;
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
function ld(t, e, n, r, o) {
  let s = t.depth > o && Rs(t, e, o + 1), i = r.depth > o && Rs(n, r, o + 1), a = [];
  return lr(null, t, o, a), s && i && e.index(o) == n.index(o) ? (ad(s, i), an(ln(s, ld(t, e, n, r, o + 1)), a)) : (s && an(ln(s, mo(t, e, o + 1)), a), lr(e, n, o, a), i && an(ln(i, mo(n, r, o + 1)), a)), lr(r, null, o, a), new H(a);
}
function mo(t, e, n) {
  let r = [];
  if (lr(null, t, n, r), t.depth > n) {
    let o = Rs(t, e, n + 1);
    an(ln(o, mo(t, e, n + 1)), r);
  }
  return lr(e, null, n, r), new H(r);
}
function hb(t, e) {
  let n = e.depth - t.openStart, o = e.node(n).copy(t.content);
  for (let s = n - 1; s >= 0; s--)
    o = e.node(s).copy(H.from(o));
  return {
    start: o.resolveNoCache(t.openStart + n),
    end: o.resolveNoCache(o.content.size - t.openEnd - n)
  };
}
class gr {
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
      return ce.none;
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
        return new go(this, e, r);
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
    return new gr(n, r, s);
  }
  /**
  @internal
  */
  static resolveCached(e, n) {
    let r = Ta.get(e);
    if (r)
      for (let s = 0; s < r.elts.length; s++) {
        let i = r.elts[s];
        if (i.pos == n)
          return i;
      }
    else
      Ta.set(e, r = new mb());
    let o = r.elts[r.i] = gr.resolve(e, n);
    return r.i = (r.i + 1) % gb, o;
  }
}
class mb {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const gb = 12, Ta = /* @__PURE__ */ new WeakMap();
class go {
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
const bb = /* @__PURE__ */ Object.create(null);
let cn = class Ls {
  /**
  @internal
  */
  constructor(e, n, r, o = ce.none) {
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
    return this.type == e && fo(this.attrs, n || e.defaultAttrs || bb) && ce.sameSet(this.marks, r || ce.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Ls(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Ls(this.type, this.attrs, this.content, e);
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
    return fb(this.resolve(e), this.resolve(n), r);
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
    return gr.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return gr.resolve(this, e);
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
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), cd(this.marks, e);
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
    let o = H.fromJSON(e, n.content), s = e.nodeType(n.type).create(n.attrs, o, r);
    return s.type.checkAttrs(s.attrs), s;
  }
};
cn.prototype.text = void 0;
class bo extends cn {
  /**
  @internal
  */
  constructor(e, n, r, o) {
    if (super(e, n, null, o), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : cd(this.marks, JSON.stringify(this.text));
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
    return e == this.marks ? this : new bo(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new bo(this.type, this.attrs, e, this.marks);
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
function cd(t, e) {
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
    let r = new yb(e, n);
    if (r.next == null)
      return gn.empty;
    let o = dd(r);
    r.next && r.err("Unexpected trailing text");
    let s = Sb(Nb(o));
    return Eb(s, r), s;
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
        let { type: p, next: u } = i.next[d];
        if (!(p.isText || p.hasRequiredAttrs()) && o.indexOf(u) == -1) {
          o.push(u);
          let f = s(u, a.concat(p));
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
class yb {
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
function dd(t) {
  let e = [];
  do
    e.push(xb(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function xb(t) {
  let e = [];
  do
    e.push(wb(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function wb(t) {
  let e = Cb(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = vb(t, e);
    else
      break;
  return e;
}
function Ia(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function vb(t, e) {
  let n = Ia(t), r = n;
  return t.eat(",") && (t.next != "}" ? r = Ia(t) : r = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: n, max: r, expr: e };
}
function kb(t, e) {
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
function Cb(t) {
  if (t.eat("(")) {
    let e = dd(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = kb(t, t.next).map((n) => (t.inline == null ? t.inline = n.isInline : t.inline != n.isInline && t.err("Mixing inline and block content"), { type: "name", value: n }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function Nb(t) {
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
          let p = n();
          o(s(i.expr, c), p), c = p;
        }
        if (i.max == -1)
          o(s(i.expr, c), c);
        else
          for (let d = i.min; d < i.max; d++) {
            let p = n();
            r(c, p), o(s(i.expr, c), p), c = p;
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
function ud(t, e) {
  return e - t;
}
function Ba(t, e) {
  let n = [];
  return r(e), n.sort(ud);
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
function Sb(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return n(Ba(t, 0));
  function n(r) {
    let o = [];
    r.forEach((i) => {
      t[i].forEach(({ term: a, to: c }) => {
        if (!a)
          return;
        let d;
        for (let p = 0; p < o.length; p++)
          o[p][0] == a && (d = o[p][1]);
        Ba(t, c).forEach((p) => {
          d || o.push([a, d = []]), d.indexOf(p) == -1 && d.push(p);
        });
      });
    });
    let s = e[r.join(",")] = new gn(r.indexOf(t.length - 1) > -1);
    for (let i = 0; i < o.length; i++) {
      let a = o[i][1].sort(ud);
      s.next.push({ type: o[i][0], next: e[a.join(",")] || n(a) });
    }
    return s;
  }
}
function Eb(t, e) {
  for (let n = 0, r = [t]; n < r.length; n++) {
    let o = r[n], s = !o.validEnd, i = [];
    for (let a = 0; a < o.next.length; a++) {
      let { type: c, next: d } = o.next[a];
      i.push(c.name), s && !(c.isText || c.hasRequiredAttrs()) && (s = !1), r.indexOf(d) == -1 && r.push(d);
    }
    s && e.err("Only non-generatable nodes (" + i.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function pd(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let r = t[n];
    if (!r.hasDefault)
      return null;
    e[n] = r.default;
  }
  return e;
}
function fd(t, e) {
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
function hd(t, e, n, r) {
  for (let o in e)
    if (!(o in t))
      throw new RangeError(`Unsupported attribute ${o} for ${n} of type ${o}`);
  for (let o in t) {
    let s = t[o];
    s.validate && s.validate(e[o]);
  }
}
function md(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      n[r] = new Ab(t, r, e[r]);
  return n;
}
class yo {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.name = e, this.schema = n, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = md(e, r.attrs), this.defaultAttrs = pd(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
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
    return !e && this.defaultAttrs ? this.defaultAttrs : fd(this.attrs, e);
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
    let o = this.contentMatch.matchFragment(n), s = o && o.fillBefore(H.empty, !0);
    return s ? new cn(this, e, n.append(s), ce.setFrom(r)) : null;
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
    hd(this.attrs, e, "node", this.name);
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
    e.forEach((s, i) => r[s] = new yo(s, n, i));
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
function _b(t, e, n) {
  let r = n.split("|");
  return (o) => {
    let s = o === null ? "null" : typeof o;
    if (r.indexOf(s) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${t}, got ${s}`);
  };
}
class Ab {
  constructor(e, n, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? _b(e, n, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Ii {
  /**
  @internal
  */
  constructor(e, n, r, o) {
    this.name = e, this.rank = n, this.schema = r, this.spec = o, this.attrs = md(e, o.attrs), this.excluded = null;
    let s = pd(this.attrs);
    this.instance = s ? new ce(this, s) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new ce(this, fd(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null), o = 0;
    return e.forEach((s, i) => r[s] = new Ii(s, o++, n, i)), r;
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
    hd(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class Tb {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let n = this.spec = {};
    for (let o in e)
      n[o] = e[o];
    n.nodes = De.from(e.nodes), n.marks = De.from(e.marks || {}), this.nodes = yo.compile(this.spec.nodes, this), this.marks = Ii.compile(this.spec.marks, this);
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
      s.markSet = a == "_" ? null : a ? Ra(this, a.split(" ")) : a == "" || !s.inlineContent ? [] : null;
    }
    for (let o in this.marks) {
      let s = this.marks[o], i = s.spec.excludes;
      s.excluded = i == null ? [s] : i == "" ? [] : Ra(this, i.split(" "));
    }
    this.nodeFromJSON = (o) => cn.fromJSON(this, o), this.markFromJSON = (o) => ce.fromJSON(this, o), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
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
    else if (e instanceof yo) {
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
    return new bo(r, r.defaultAttrs, e, ce.setFrom(n));
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
function Ra(t, e) {
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
function Ib(t) {
  return t.tag != null;
}
function Bb(t) {
  return t.style != null;
}
class Mn {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, n) {
    this.schema = e, this.rules = n, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    n.forEach((o) => {
      if (Ib(o))
        this.tags.push(o);
      else if (Bb(o)) {
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
    let r = new Pa(this, n, !1);
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
    let r = new Pa(this, n, !0);
    return r.addAll(e, ce.none, n.from, n.to), X.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, n, r) {
    for (let o = r ? this.tags.indexOf(r) + 1 : 0; o < this.tags.length; o++) {
      let s = this.tags[o];
      if (Pb(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || n.matchesContext(s.context))) {
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
        r(i = Oa(i)), i.mark || i.ignore || i.clearMark || (i.mark = o);
      });
    }
    for (let o in e.nodes) {
      let s = e.nodes[o].spec.parseDOM;
      s && s.forEach((i) => {
        r(i = Oa(i)), i.node || i.ignore || i.mark || (i.node = o);
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
    return e.cached.domParser || (e.cached.domParser = new Mn(e, Mn.schemaRules(e)));
  }
}
const gd = {
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
}, Rb = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, bd = { ol: !0, ul: !0 }, br = 1, Ps = 2, cr = 4;
function La(t, e, n) {
  return e != null ? (e ? br : 0) | (e === "full" ? Ps : 0) : t && t.whitespace == "pre" ? br | Ps : n & ~cr;
}
class Vr {
  constructor(e, n, r, o, s, i) {
    this.type = e, this.attrs = n, this.marks = r, this.solid = o, this.options = i, this.content = [], this.activeMarks = ce.none, this.match = s || (i & cr ? null : e.contentMatch);
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
    if (!(this.options & br)) {
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
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !gd.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Pa {
  constructor(e, n, r) {
    this.parser = e, this.options = n, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let o = n.topNode, s, i = La(null, n.preserveWhitespace, 0) | (r ? cr : 0);
    o ? s = new Vr(o.type, o.attrs, ce.none, !0, n.topMatch || o.type.contentMatch, i) : r ? s = new Vr(null, null, ce.none, !0, null, i) : s = new Vr(e.schema.topNodeType, null, ce.none, !0, null, i), this.nodes = [s], this.find = n.findPositions, this.needsBlock = !1;
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
    let r = e.nodeValue, o = this.top, s = o.options & Ps ? "full" : this.localPreserveWS || (o.options & br) > 0, { schema: i } = this.parser;
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
    bd.hasOwnProperty(i) && this.parser.normalizeLists && Lb(e);
    let c = this.options.ruleFromNode && this.options.ruleFromNode(e) || (a = this.parser.matchTag(e, this, r));
    e: if (c ? c.ignore : Rb.hasOwnProperty(i))
      this.findInside(e), this.ignoreFallback(e, n);
    else if (!c || c.skip || c.closeParent) {
      c && c.closeParent ? this.open = Math.max(0, this.open - 1) : c && c.skip.nodeType && (e = c.skip);
      let d, p = this.needsBlock;
      if (gd.hasOwnProperty(i))
        s.content.length && s.content[0].isInline && this.open && (this.open--, s = this.top), d = !0, s.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, n);
        break e;
      }
      let u = c && c.skip ? n : this.readStyles(e, n);
      u && this.addAll(e, u), d && this.sync(s), this.needsBlock = p;
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
      let i = ce.none;
      for (let a of o.concat(e.marks))
        (s.type ? s.type.allowsMarkType(a.type) : Ma(a.type, e.type)) && (i = a.addToSet(i));
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
    let a = La(e, s, i.options);
    i.options & cr && i.content.length == 0 && (a |= cr);
    let c = ce.none;
    return r = r.filter((d) => (i.type ? i.type.allowsMarkType(d.type) : Ma(d.type, e)) ? (c = d.addToSet(c), !1) : !0), this.nodes.push(new Vr(e, n, c, o, null, a)), this.open++, r;
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
      this.localPreserveWS && (this.nodes[n].options |= br);
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
          let p = c > 0 || c == 0 && o ? this.nodes[c].type : r && c >= s ? r.node(c - s).type : null;
          if (!p || p.name != d && !p.isInGroup(d))
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
function Lb(t) {
  for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && bd.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : r == "li" ? n = e : r && (n = null);
  }
}
function Pb(t, e) {
  return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
}
function Oa(t) {
  let e = {};
  for (let n in t)
    e[n] = t[n];
  return e;
}
function Ma(t, e) {
  let n = e.schema.nodes;
  for (let r in n) {
    let o = n[r];
    if (!o.allowsMarkType(t))
      continue;
    let s = [], i = (a) => {
      s.push(a);
      for (let c = 0; c < a.edgeCount; c++) {
        let { type: d, next: p } = a.edge(c);
        if (d == e || s.indexOf(p) < 0 && i(p))
          return !0;
      }
    };
    if (i(o.contentMatch))
      return !0;
  }
}
const yd = 65535, xd = Math.pow(2, 16);
function Ob(t, e) {
  return t + e * xd;
}
function Da(t) {
  return t & yd;
}
function Mb(t) {
  return (t - (t & yd)) / xd;
}
const wd = 1, vd = 2, Qr = 4, kd = 8;
class $a {
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
    return (this.delInfo & kd) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (wd | Qr)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (vd | Qr)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & Qr) > 0;
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
    let n = 0, r = Da(e);
    if (!this.inverted)
      for (let o = 0; o < r; o++)
        n += this.ranges[o * 3 + 2] - this.ranges[o * 3 + 1];
    return this.ranges[r * 3] + n + Mb(e);
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
      let d = this.ranges[a + s], p = this.ranges[a + i], u = c + d;
      if (e <= u) {
        let f = d ? e == c ? -1 : e == u ? 1 : n : n, h = c + o + (f < 0 ? 0 : p);
        if (r)
          return h;
        let g = e == (n < 0 ? c : u) ? null : Ob(a / 3, e - c), m = e == c ? vd : e == u ? wd : Qr;
        return (n < 0 ? e != c : e != u) && (m |= kd), new $a(h, m, g);
      }
      o += p - d;
    }
    return r ? e + o : new $a(e + o, 0, null);
  }
  /**
  @internal
  */
  touches(e, n) {
    let r = 0, o = Da(n), s = this.inverted ? 2 : 1, i = this.inverted ? 1 : 2;
    for (let a = 0; a < this.ranges.length; a += 3) {
      let c = this.ranges[a] - (this.inverted ? r : 0);
      if (c > e)
        break;
      let d = this.ranges[a + s], p = c + d;
      if (e <= p && a == o * 3)
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
      let i = this.ranges[o], a = i - (this.inverted ? s : 0), c = i + (this.inverted ? 0 : s), d = this.ranges[o + n], p = this.ranges[o + r];
      e(a, a + d, c, c + p), s += p - d;
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
const cs = /* @__PURE__ */ Object.create(null);
class We {
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
    let r = cs[n.stepType];
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
    if (e in cs)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return cs[e] = n, n.prototype.jsonID = e, n;
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
      if (s instanceof ho)
        return Le.fail(s.message);
      throw s;
    }
  }
}
function Bi(t, e, n) {
  let r = [];
  for (let o = 0; o < t.childCount; o++) {
    let s = t.child(o);
    s.content.size && (s = s.copy(Bi(s.content, e, s))), s.isInline && (s = e(s, n, o)), r.push(s);
  }
  return H.fromArray(r);
}
class Qt extends We {
  /**
  Create a mark step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = e.resolve(this.from), o = r.node(r.sharedDepth(this.to)), s = new X(Bi(n.content, (i, a) => !i.isAtom || !a.type.allowsMarkType(this.mark.type) ? i : i.mark(this.mark.addToSet(i.marks)), o), n.openStart, n.openEnd);
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
We.jsonID("addMark", Qt);
class en extends We {
  /**
  Create a mark-removing step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = new X(Bi(n.content, (o) => o.mark(this.mark.removeFromSet(o.marks)), e), n.openStart, n.openEnd);
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
We.jsonID("removeMark", en);
class tn extends We {
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
    return new yr(this.pos, this.mark);
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
We.jsonID("addNodeMark", tn);
class yr extends We {
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
    return n.deletedAfter ? null : new yr(n.pos, this.mark);
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
    return new yr(n.pos, e.markFromJSON(n.mark));
  }
}
We.jsonID("removeNodeMark", yr);
class ot extends We {
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
    return this.structure && Os(e, this.from, this.to) ? Le.fail("Structure replace would overwrite content") : Le.fromReplace(e, this.from, this.to, this.slice);
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
We.jsonID("replace", ot);
class et extends We {
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
    if (this.structure && (Os(e, this.from, this.gapFrom) || Os(e, this.gapTo, this.to)))
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
We.jsonID("replaceAround", et);
function Os(t, e, n) {
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
function Db(t, e, n) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
}
function Xn(t) {
  let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth, o = 0, s = 0; ; --r) {
    let i = t.$from.node(r), a = t.$from.index(r) + o, c = t.$to.indexAfter(r) - s;
    if (r < t.depth && i.canReplace(a, c, n))
      return r;
    if (r == 0 || i.type.spec.isolating || !Db(i, a, c))
      break;
    a && (o = 1), c < i.childCount && (s = 1);
  }
  return null;
}
function Cd(t, e, n = null, r = t) {
  let o = $b(t, e), s = o && Fb(r, e);
  return s ? o.map(Fa).concat({ type: e, attrs: n }).concat(s.map(Fa)) : null;
}
function Fa(t) {
  return { type: t, attrs: null };
}
function $b(t, e) {
  let { parent: n, startIndex: r, endIndex: o } = t, s = n.contentMatchAt(r).findWrapping(e);
  if (!s)
    return null;
  let i = s.length ? s[0] : e;
  return n.canReplaceWith(r, o, i) ? s : null;
}
function Fb(t, e) {
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
  for (let d = o.depth - 1, p = n - 2; d > s; d--, p--) {
    let u = o.node(d), f = o.index(d);
    if (u.type.spec.isolating)
      return !1;
    let h = u.content.cutByIndex(f, u.childCount), g = r && r[p + 1];
    g && (h = h.replaceChild(0, g.type.create(g.attrs)));
    let m = r && r[p] || u;
    if (!u.canReplace(f + 1, u.childCount) || !m.type.validContent(h))
      return !1;
  }
  let a = o.indexAfter(s), c = r && r[0];
  return o.node(s).canReplaceWith(a, a, c ? c.type : o.node(s + 1).type);
}
function En(t, e) {
  let n = t.resolve(e), r = n.index();
  return Nd(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function zb(t, e) {
  e.content.size || t.type.compatibleContent(e.type);
  let n = t.contentMatchAt(t.childCount), { linebreakReplacement: r } = t.type.schema;
  for (let o = 0; o < e.childCount; o++) {
    let s = e.child(o), i = s.type == r ? t.type.schema.nodes.text : s.type;
    if (n = n.matchType(i), !n || !t.type.allowsMarks(s.marks))
      return !1;
  }
  return n.validEnd;
}
function Nd(t, e) {
  return !!(t && e && !t.isLeaf && zb(t, e));
}
function Fo(t, e, n = -1) {
  let r = t.resolve(e);
  for (let o = r.depth; ; o--) {
    let s, i, a = r.index(o);
    if (o == r.depth ? (s = r.nodeBefore, i = r.nodeAfter) : n > 0 ? (s = r.node(o + 1), a++, i = r.node(o).maybeChild(a)) : (s = r.node(o).maybeChild(a - 1), i = r.node(o + 1)), s && !s.isTextblock && Nd(s, i) && r.node(o).canReplace(a, a + 1))
      return e;
    if (o == 0)
      break;
    e = n < 0 ? r.before(o) : r.after(o);
  }
}
function Ri(t, e, n = e, r = X.empty) {
  if (e == n && !r.size)
    return null;
  let o = t.resolve(e), s = t.resolve(n);
  return Hb(o, s, r) ? new ot(e, n, r) : new Vb(o, s, r).fit();
}
function Hb(t, e, n) {
  return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
}
class Vb {
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
        r ? (s = ds(this.unplaced.content, r - 1).firstChild, o = s.content) : o = this.unplaced.content;
        let i = o.firstChild;
        for (let a = this.depth; a >= 0; a--) {
          let { type: c, match: d } = this.frontier[a], p, u = null;
          if (n == 1 && (i ? d.matchType(i.type) || (u = d.fillBefore(H.from(i), !1)) : s && c.compatibleContent(s.type)))
            return { sliceDepth: r, frontierDepth: a, parent: s, inject: u };
          if (n == 2 && i && (p = d.findWrapping(i.type)))
            return { sliceDepth: r, frontierDepth: a, parent: s, wrap: p };
          if (s && d.matchType(s.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, o = ds(e, n);
    return !o.childCount || o.firstChild.isLeaf ? !1 : (this.unplaced = new X(e, n + 1, Math.max(r, o.size + n >= e.size - r ? n + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, o = ds(e, n);
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
      for (let m = 0; m < s.length; m++)
        this.openFrontierNode(s[m]);
    let i = this.unplaced, a = r ? r.content : i.content, c = i.openStart - e, d = 0, p = [], { match: u, type: f } = this.frontier[n];
    if (o) {
      for (let m = 0; m < o.childCount; m++)
        p.push(o.child(m));
      u = u.matchFragment(o);
    }
    let h = a.size + e - (i.content.size - i.openEnd);
    for (; d < a.childCount; ) {
      let m = a.child(d), y = u.matchType(m.type);
      if (!y)
        break;
      d++, (d > 1 || c == 0 || m.content.size) && (u = y, p.push(Sd(m.mark(f.allowedMarks(m.marks)), d == 1 ? c : 0, d == a.childCount ? h : -1)));
    }
    let g = d == a.childCount;
    g || (h = -1), this.placed = or(this.placed, n, H.from(p)), this.frontier[n].match = u, g && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, y = a; m < h; m++) {
      let x = y.lastChild;
      this.frontier.push({ type: x.type, match: x.contentMatchAt(x.childCount) }), y = x.content;
    }
    this.unplaced = g ? e == 0 ? X.empty : new X(rr(i.content, e - 1, 1), e - 1, h < 0 ? i.openEnd : e - 1) : new X(rr(i.content, e, d), i.openStart, i.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], n;
    if (!e.type.isTextblock || !us(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (n = this.findCloseLevel(this.$to)) && n.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, o = this.$to.after(r);
    for (; r > 1 && o == this.$to.end(--r); )
      ++o;
    return o;
  }
  findCloseLevel(e) {
    e: for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
      let { match: r, type: o } = this.frontier[n], s = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)), i = us(e, n, o, r, s);
      if (i) {
        for (let a = n - 1; a >= 0; a--) {
          let { match: c, type: d } = this.frontier[a], p = us(e, a, d, c, !0);
          if (!p || p.childCount)
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
function ds(t, e) {
  for (let n = 0; n < e; n++)
    t = t.firstChild.content;
  return t;
}
function Sd(t, e, n) {
  if (e <= 0)
    return t;
  let r = t.content;
  return e > 1 && (r = r.replaceChild(0, Sd(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(H.empty, !0)))), t.copy(r);
}
function us(t, e, n, r, o) {
  let s = t.node(e), i = o ? t.indexAfter(e) : t.index(e);
  if (i == s.childCount && !n.compatibleContent(s.type))
    return null;
  let a = r.fillBefore(s.content, !0, i);
  return a && !jb(n, s.content, i) ? a : null;
}
function jb(t, e, n) {
  for (let r = n; r < e.childCount; r++)
    if (!t.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
class dr extends We {
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
We.jsonID("attr", dr);
class xo extends We {
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
    return new xo(this.attr, e.attrs[this.attr]);
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
    return new xo(n.attr, n.value);
  }
}
We.jsonID("docAttr", xo);
let xr = class extends Error {
};
xr = function t(e) {
  let n = Error.call(this, e);
  return n.__proto__ = t.prototype, n;
};
xr.prototype = Object.create(Error.prototype);
xr.prototype.constructor = xr;
xr.prototype.name = "TransformError";
const ps = /* @__PURE__ */ Object.create(null);
class ie {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, n, r) {
    this.$anchor = e, this.$head = n, this.ranges = r || [new Wb(e.min(n), e.max(n))];
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
      let { $from: c, $to: d } = i[a], p = e.mapping.slice(s);
      e.replaceRange(p.map(c.pos), p.map(d.pos), a ? X.empty : n), a == 0 && Va(e, s, (r ? r.isInline : o && o.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, n) {
    let r = e.steps.length, o = this.ranges;
    for (let s = 0; s < o.length; s++) {
      let { $from: i, $to: a } = o[s], c = e.mapping.slice(r), d = c.map(i.pos), p = c.map(a.pos);
      s ? e.deleteRange(d, p) : (e.replaceRangeWith(d, p, n), Va(e, r, n.isInline ? -1 : 1));
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
    let r = ps[n.type];
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
    if (e in ps)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return ps[e] = n, n.prototype.jsonID = e, n;
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
class Wb {
  /**
  Create a range.
  */
  constructor(e, n) {
    this.$from = e, this.$to = n;
  }
}
let za = !1;
function Ha(t) {
  !za && !t.parent.inlineContent && (za = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
}
class ge extends ie {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, n = e) {
    Ha(e), Ha(n), super(e, n);
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
    return new zo(this.anchor, this.head);
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
class zo {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new zo(e.map(this.anchor), e.map(this.head));
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
    let { deleted: r, pos: o } = n.mapResult(this.anchor), s = e.resolve(o);
    return r ? ie.near(s) : new de(s);
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
    return new Li(this.anchor);
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
class Li {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: r } = e.mapResult(this.anchor);
    return n ? new zo(r, r) : new Li(r);
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
    return Gb;
  }
}
ie.jsonID("all", ct);
const Gb = {
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
      if (!s && de.isSelectable(a))
        return de.create(t, n - (o < 0 ? a.nodeSize : 0));
    } else {
      let c = Ln(t, a, n + o, o < 0 ? a.childCount : 0, o, s);
      if (c)
        return c;
    }
    n += a.nodeSize * o;
  }
  return null;
}
function Va(t, e, n) {
  let r = t.steps.length - 1;
  if (r < e)
    return;
  let o = t.steps[r];
  if (!(o instanceof ot || o instanceof et))
    return;
  let s = t.mapping.maps[r], i;
  s.forEach((a, c, d, p) => {
    i == null && (i = p);
  }), t.setSelection(ie.near(t.doc.resolve(i), n));
}
function ja(t, e) {
  return !e || !t ? t : t.bind(e);
}
class jr {
  constructor(e, n, r) {
    this.name = e, this.init = ja(n.init, r), this.apply = ja(n.apply, r);
  }
}
new jr("doc", {
  init(t) {
    return t.doc || t.schema.topNodeType.createAndFill();
  },
  apply(t) {
    return t.doc;
  }
}), new jr("selection", {
  init(t, e) {
    return t.selection || ie.atStart(e.doc);
  },
  apply(t) {
    return t.selection;
  }
}), new jr("storedMarks", {
  init(t) {
    return t.storedMarks || null;
  },
  apply(t, e, n, r) {
    return r.selection.$cursor ? t.storedMarks : null;
  }
}), new jr("scrollToSelection", {
  init() {
    return 0;
  },
  apply(t, e) {
    return t.scrolledIntoView ? e + 1 : e;
  }
});
function Ed(t, e, n) {
  for (let r in t) {
    let o = t[r];
    o instanceof Function ? o = o.bind(e) : r == "handleDOMEvents" && (o = Ed(o, e, {})), n[r] = o;
  }
  return n;
}
class _n {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Ed(e.props, this, this.props), this.key = e.key ? e.key.key : _d("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const fs = /* @__PURE__ */ Object.create(null);
function _d(t) {
  return t in fs ? t + "$" + ++fs[t] : (fs[t] = 0, t + "$");
}
class An {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = _d(e);
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
const Pi = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function Ad(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n;
}
const Td = (t, e, n) => {
  let r = Ad(t, n);
  if (!r)
    return !1;
  let o = Oi(r);
  if (!o) {
    let i = r.blockRange(), a = i && Xn(i);
    return a == null ? !1 : (e && e(t.tr.lift(i, a).scrollIntoView()), !0);
  }
  let s = o.nodeBefore;
  if ($d(t, o, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (Vn(s, "end") || de.isSelectable(s)))
    for (let i = r.depth; ; i--) {
      let a = Ri(t.doc, r.before(i), r.after(i), X.empty);
      if (a && a.slice.size < a.to - a.from) {
        if (e) {
          let c = t.tr.step(a);
          c.setSelection(Vn(s, "end") ? ie.findFrom(c.doc.resolve(c.mapping.map(o.pos, -1)), -1) : de.create(c.doc, o.pos - s.nodeSize)), e(c.scrollIntoView());
        }
        return !0;
      }
      if (i == 1 || r.node(i - 1).childCount > 1)
        break;
    }
  return s.isAtom && o.depth == r.depth - 1 ? (e && e(t.tr.delete(o.pos - s.nodeSize, o.pos).scrollIntoView()), !0) : !1;
}, Ub = (t, e, n) => {
  let r = Ad(t, n);
  if (!r)
    return !1;
  let o = Oi(r);
  return o ? Id(t, o, e) : !1;
}, Kb = (t, e, n) => {
  let r = Rd(t, n);
  if (!r)
    return !1;
  let o = Mi(r);
  return o ? Id(t, o, e) : !1;
};
function Id(t, e, n) {
  let r = e.nodeBefore, o = r, s = e.pos - 1;
  for (; !o.isTextblock; s--) {
    if (o.type.spec.isolating)
      return !1;
    let p = o.lastChild;
    if (!p)
      return !1;
    o = p;
  }
  let i = e.nodeAfter, a = i, c = e.pos + 1;
  for (; !a.isTextblock; c++) {
    if (a.type.spec.isolating)
      return !1;
    let p = a.firstChild;
    if (!p)
      return !1;
    a = p;
  }
  let d = Ri(t.doc, s, c, X.empty);
  if (!d || d.from != s || d instanceof ot && d.slice.size >= c - s)
    return !1;
  if (n) {
    let p = t.tr.step(d);
    p.setSelection(ge.create(p.doc, s)), n(p.scrollIntoView());
  }
  return !0;
}
function Vn(t, e, n = !1) {
  for (let r = t; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (n && r.childCount != 1)
      return !1;
  }
  return !1;
}
const Bd = (t, e, n) => {
  let { $head: r, empty: o } = t.selection, s = r;
  if (!o)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
      return !1;
    s = Oi(r);
  }
  let i = s && s.nodeBefore;
  return !i || !de.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(de.create(t.doc, s.pos - i.nodeSize)).scrollIntoView()), !0);
};
function Oi(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      if (t.index(e) > 0)
        return t.doc.resolve(t.before(e + 1));
      if (t.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Rd(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n;
}
const Ld = (t, e, n) => {
  let r = Rd(t, n);
  if (!r)
    return !1;
  let o = Mi(r);
  if (!o)
    return !1;
  let s = o.nodeAfter;
  if ($d(t, o, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (Vn(s, "start") || de.isSelectable(s))) {
    let i = Ri(t.doc, r.before(), r.after(), X.empty);
    if (i && i.slice.size < i.to - i.from) {
      if (e) {
        let a = t.tr.step(i);
        a.setSelection(Vn(s, "start") ? ie.findFrom(a.doc.resolve(a.mapping.map(o.pos)), 1) : de.create(a.doc, a.mapping.map(o.pos))), e(a.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && o.depth == r.depth - 1 ? (e && e(t.tr.delete(o.pos, o.pos + s.nodeSize).scrollIntoView()), !0) : !1;
}, Pd = (t, e, n) => {
  let { $head: r, empty: o } = t.selection, s = r;
  if (!o)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size)
      return !1;
    s = Mi(r);
  }
  let i = s && s.nodeAfter;
  return !i || !de.isSelectable(i) ? !1 : (e && e(t.tr.setSelection(de.create(t.doc, s.pos)).scrollIntoView()), !0);
};
function Mi(t) {
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
const Yb = (t, e) => {
  let n = t.selection, r = n instanceof de, o;
  if (r) {
    if (n.node.isTextblock || !En(t.doc, n.from))
      return !1;
    o = n.from;
  } else if (o = Fo(t.doc, n.from, -1), o == null)
    return !1;
  if (e) {
    let s = t.tr.join(o);
    r && s.setSelection(de.create(s.doc, o - t.doc.resolve(o).nodeBefore.nodeSize)), e(s.scrollIntoView());
  }
  return !0;
}, Jb = (t, e) => {
  let n = t.selection, r;
  if (n instanceof de) {
    if (n.node.isTextblock || !En(t.doc, n.to))
      return !1;
    r = n.to;
  } else if (r = Fo(t.doc, n.to, 1), r == null)
    return !1;
  return e && e(t.tr.join(r).scrollIntoView()), !0;
}, Xb = (t, e) => {
  let { $from: n, $to: r } = t.selection, o = n.blockRange(r), s = o && Xn(o);
  return s == null ? !1 : (e && e(t.tr.lift(o, s).scrollIntoView()), !0);
}, Od = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0);
};
function Di(t) {
  for (let e = 0; e < t.edgeCount; e++) {
    let { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
const qb = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  if (!n.parent.type.spec.code || !n.sameParent(r))
    return !1;
  let o = n.node(-1), s = n.indexAfter(-1), i = Di(o.contentMatchAt(s));
  if (!i || !o.canReplaceWith(s, s, i))
    return !1;
  if (e) {
    let a = n.after(), c = t.tr.replaceWith(a, a, i.createAndFill());
    c.setSelection(ie.near(c.doc.resolve(a), 1)), e(c.scrollIntoView());
  }
  return !0;
}, Md = (t, e) => {
  let n = t.selection, { $from: r, $to: o } = n;
  if (n instanceof ct || r.parent.inlineContent || o.parent.inlineContent)
    return !1;
  let s = Di(o.parent.contentMatchAt(o.indexAfter()));
  if (!s || !s.isTextblock)
    return !1;
  if (e) {
    let i = (!r.parentOffset && o.index() < o.parent.childCount ? r : o).pos, a = t.tr.insert(i, s.createAndFill());
    a.setSelection(ge.create(a.doc, i + 1)), e(a.scrollIntoView());
  }
  return !0;
}, Dd = (t, e) => {
  let { $cursor: n } = t.selection;
  if (!n || n.parent.content.size)
    return !1;
  if (n.depth > 1 && n.after() != n.end(-1)) {
    let s = n.before();
    if (Dt(t.doc, s))
      return e && e(t.tr.split(s).scrollIntoView()), !0;
  }
  let r = n.blockRange(), o = r && Xn(r);
  return o == null ? !1 : (e && e(t.tr.lift(r, o).scrollIntoView()), !0);
};
function Zb(t) {
  return (e, n) => {
    let { $from: r, $to: o } = e.selection;
    if (e.selection instanceof de && e.selection.node.isBlock)
      return !r.parentOffset || !Dt(e.doc, r.pos) ? !1 : (n && n(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let s = [], i, a, c = !1, d = !1;
    for (let h = r.depth; ; h--)
      if (r.node(h).isBlock) {
        c = r.end(h) == r.pos + (r.depth - h), d = r.start(h) == r.pos - (r.depth - h), a = Di(r.node(h - 1).contentMatchAt(r.indexAfter(h - 1))), s.unshift(c && a ? { type: a } : null), i = h;
        break;
      } else {
        if (h == 1)
          return !1;
        s.unshift(null);
      }
    let p = e.tr;
    (e.selection instanceof ge || e.selection instanceof ct) && p.deleteSelection();
    let u = p.mapping.map(r.pos), f = Dt(p.doc, u, s.length, s);
    if (f || (s[0] = a ? { type: a } : null, f = Dt(p.doc, u, s.length, s)), !f)
      return !1;
    if (p.split(u, s.length, s), !c && d && r.node(i).type != a) {
      let h = p.mapping.map(r.before(i)), g = p.doc.resolve(h);
      a && r.node(i - 1).canReplaceWith(g.index(), g.index() + 1, a) && p.setNodeMarkup(p.mapping.map(r.before(i)), a);
    }
    return n && n(p.scrollIntoView()), !0;
  };
}
const Qb = Zb(), ey = (t, e) => {
  let { $from: n, to: r } = t.selection, o, s = n.sharedDepth(r);
  return s == 0 ? !1 : (o = n.before(s), e && e(t.tr.setSelection(de.create(t.doc, o))), !0);
};
function ty(t, e, n) {
  let r = e.nodeBefore, o = e.nodeAfter, s = e.index();
  return !r || !o || !r.type.compatibleContent(o.type) ? !1 : !r.content.size && e.parent.canReplace(s - 1, s) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(s, s + 1) || !(o.isTextblock || En(t.doc, e.pos)) ? !1 : (n && n(t.tr.join(e.pos).scrollIntoView()), !0);
}
function $d(t, e, n, r) {
  let o = e.nodeBefore, s = e.nodeAfter, i, a, c = o.type.spec.isolating || s.type.spec.isolating;
  if (!c && ty(t, e, n))
    return !0;
  let d = !c && e.parent.canReplace(e.index(), e.index() + 1);
  if (d && (i = (a = o.contentMatchAt(o.childCount)).findWrapping(s.type)) && a.matchType(i[0] || s.type).validEnd) {
    if (n) {
      let h = e.pos + s.nodeSize, g = H.empty;
      for (let x = i.length - 1; x >= 0; x--)
        g = H.from(i[x].create(null, g));
      g = H.from(o.copy(g));
      let m = t.tr.step(new et(e.pos - 1, h, e.pos, h, new X(g, 1, 0), i.length, !0)), y = m.doc.resolve(h + 2 * i.length);
      y.nodeAfter && y.nodeAfter.type == o.type && En(m.doc, y.pos) && m.join(y.pos), n(m.scrollIntoView());
    }
    return !0;
  }
  let p = s.type.spec.isolating || r > 0 && c ? null : ie.findFrom(e, 1), u = p && p.$from.blockRange(p.$to), f = u && Xn(u);
  if (f != null && f >= e.depth)
    return n && n(t.tr.lift(u, f).scrollIntoView()), !0;
  if (d && Vn(s, "start", !0) && Vn(o, "end")) {
    let h = o, g = [];
    for (; g.push(h), !h.isTextblock; )
      h = h.lastChild;
    let m = s, y = 1;
    for (; !m.isTextblock; m = m.firstChild)
      y++;
    if (h.canReplace(h.childCount, h.childCount, m.content)) {
      if (n) {
        let x = H.empty;
        for (let S = g.length - 1; S >= 0; S--)
          x = H.from(g[S].copy(x));
        let w = t.tr.step(new et(e.pos - g.length, e.pos + s.nodeSize, e.pos + y, e.pos + s.nodeSize - y, new X(x, g.length, 0), 0, !0));
        n(w.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Fd(t) {
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
const ny = Fd(-1), ry = Fd(1);
function oy(t, e = null) {
  return function(n, r) {
    let { $from: o, $to: s } = n.selection, i = o.blockRange(s), a = i && Cd(i, t, e);
    return a ? (r && r(n.tr.wrap(i, a).scrollIntoView()), !0) : !1;
  };
}
function Wa(t, e = null) {
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
            let p = n.doc.resolve(d), u = p.index();
            o = p.parent.canReplaceWith(u, u + 1, t);
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
function $i(...t) {
  return function(e, n, r) {
    for (let o = 0; o < t.length; o++)
      if (t[o](e, n, r))
        return !0;
    return !1;
  };
}
$i(Pi, Td, Bd);
$i(Pi, Ld, Pd);
$i(Od, Md, Dd, Qb);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function sy(t, e = null) {
  return function(n, r) {
    let { $from: o, $to: s } = n.selection, i = o.blockRange(s);
    if (!i)
      return !1;
    let a = r ? n.tr : null;
    return iy(a, i, t, e) ? (r && r(a.scrollIntoView()), !0) : !1;
  };
}
function iy(t, e, n, r = null) {
  let o = !1, s = e, i = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let c = i.resolve(e.start - 2);
    s = new go(c, c, e.depth), e.endIndex < e.parent.childCount && (e = new go(e.$from, i.resolve(e.$to.end(e.depth)), e.depth)), o = !0;
  }
  let a = Cd(s, n, r, e);
  return a ? (t && ay(t, e, a, o, n), !0) : !1;
}
function ay(t, e, n, r, o) {
  let s = H.empty;
  for (let p = n.length - 1; p >= 0; p--)
    s = H.from(n[p].type.create(n[p].attrs, s));
  t.step(new et(e.start - (r ? 2 : 0), e.end, e.start, e.end, new X(s, 0, 0), n.length, !0));
  let i = 0;
  for (let p = 0; p < n.length; p++)
    n[p].type == o && (i = p + 1);
  let a = n.length - i, c = e.start + n.length - (r ? 2 : 0), d = e.parent;
  for (let p = e.startIndex, u = e.endIndex, f = !0; p < u; p++, f = !1)
    !f && Dt(t.doc, c, a) && (t.split(c, a), c += 2 * a), c += d.child(p).nodeSize;
  return t;
}
function ly(t) {
  return function(e, n) {
    let { $from: r, $to: o } = e.selection, s = r.blockRange(o, (i) => i.childCount > 0 && i.firstChild.type == t);
    return s ? n ? r.node(s.depth - 1).type == t ? cy(e, n, t, s) : dy(e, n, s) : !0 : !1;
  };
}
function cy(t, e, n, r) {
  let o = t.tr, s = r.end, i = r.$to.end(r.depth);
  s < i && (o.step(new et(s - 1, i, s, i, new X(H.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new go(o.doc.resolve(r.$from.pos), o.doc.resolve(i), r.depth));
  const a = Xn(r);
  if (a == null)
    return !1;
  o.lift(r, a);
  let c = o.doc.resolve(o.mapping.map(s, -1) - 1);
  return En(o.doc, c.pos) && c.nodeBefore.type == c.nodeAfter.type && o.join(c.pos), e(o.scrollIntoView()), !0;
}
function dy(t, e, n) {
  let r = t.tr, o = n.parent;
  for (let h = n.end, g = n.endIndex - 1, m = n.startIndex; g > m; g--)
    h -= o.child(g).nodeSize, r.delete(h - 1, h + 1);
  let s = r.doc.resolve(n.start), i = s.nodeAfter;
  if (r.mapping.map(n.end) != n.start + s.nodeAfter.nodeSize)
    return !1;
  let a = n.startIndex == 0, c = n.endIndex == o.childCount, d = s.node(-1), p = s.index(-1);
  if (!d.canReplace(p + (a ? 0 : 1), p + 1, i.content.append(c ? H.empty : H.from(o))))
    return !1;
  let u = s.pos, f = u + i.nodeSize;
  return r.step(new et(u - (a ? 1 : 0), f + (c ? 1 : 0), u + 1, f - 1, new X((a ? H.empty : H.from(o.copy(H.empty))).append(c ? H.empty : H.from(o.copy(H.empty))), a ? 0 : 1, c ? 0 : 1), a ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function uy(t) {
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
      let d = c.lastChild && c.lastChild.type == a.type, p = H.from(d ? t.create() : null), u = new X(H.from(t.create(null, H.from(a.type.create(null, p)))), d ? 3 : 1, 0), f = s.start, h = s.end;
      n(e.tr.step(new et(f - (d ? 3 : 1), h, f, h, u, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function zd(t) {
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
class py {
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
    return Object.fromEntries(Object.entries(e).map(([a, c]) => [a, (...p) => {
      const u = c(...p)(i);
      return !s.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(s), u;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, n = !0) {
    const { rawCommands: r, editor: o, state: s } = this, { view: i } = o, a = [], c = !!e, d = e || s.tr, p = () => (!c && n && !d.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(d), a.every((f) => f === !0)), u = {
      ...Object.fromEntries(Object.entries(r).map(([f, h]) => [f, (...m) => {
        const y = this.buildProps(d, n), x = h(...m)(y);
        return a.push(x), u;
      }])),
      run: p
    };
    return u;
  }
  createCan(e) {
    const { rawCommands: n, state: r } = this, o = !1, s = e || r.tr, i = this.buildProps(s, o);
    return {
      ...Object.fromEntries(Object.entries(n).map(([c, d]) => [c, (...p) => d(...p)({ ...i, dispatch: void 0 })])),
      chain: () => this.createChain(s, o)
    };
  }
  buildProps(e, n = !0) {
    const { rawCommands: r, editor: o, state: s } = this, { view: i } = o, a = {
      tr: e,
      editor: o,
      view: i,
      state: zd({
        state: s,
        transaction: e
      }),
      dispatch: n ? () => {
      } : void 0,
      chain: () => this.createChain(e, n),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([c, d]) => [c, (...p) => d(...p)(a)]));
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
function fy(t) {
  const e = t.filter((o) => o.type === "extension"), n = t.filter((o) => o.type === "node"), r = t.filter((o) => o.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: n,
    markExtensions: r
  };
}
function je(t, e) {
  if (typeof t == "string") {
    if (!e.nodes[t])
      throw Error(`There is no node type named '${t}'. Maybe you forgot to add the extension?`);
    return e.nodes[t];
  }
  return t;
}
function hy(t) {
  return typeof t == "function";
}
function sr(t, e = void 0, ...n) {
  return hy(t) ? e ? t.bind(e)(...n) : t(...n) : t;
}
function my(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
function gy(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function Wr(t) {
  return gy(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function Hd(t, e) {
  const n = { ...t };
  return Wr(t) && Wr(e) && Object.keys(e).forEach((r) => {
    Wr(e[r]) && Wr(t[r]) ? n[r] = Hd(t[r], e[r]) : n[r] = e[r];
  }), n;
}
class ut {
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
    return new ut(e);
  }
  configure(e = {}) {
    const n = this.extend({
      ...this.config,
      addOptions: () => Hd(this.options, e)
    });
    return n.name = this.name, n.parent = this.parent, n;
  }
  extend(e = {}) {
    const n = new ut({ ...this.config, ...e });
    return n.parent = this, this.child = n, n.name = e.name ? e.name : n.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`), n.options = sr(nn(n, "addOptions", {
      name: n.name
    })), n.storage = sr(nn(n, "addStorage", {
      name: n.name,
      options: n.options
    })), n;
  }
}
function by(t, e, n) {
  const { from: r, to: o } = e, { blockSeparator: s = `

`, textSerializers: i = {} } = n || {};
  let a = "";
  return t.nodesBetween(r, o, (c, d, p, u) => {
    var f;
    c.isBlock && d > r && (a += s);
    const h = i == null ? void 0 : i[c.type.name];
    if (h)
      return p && (a += h({
        node: c,
        pos: d,
        parent: p,
        index: u,
        range: e
      })), !1;
    c.isText && (a += (f = c == null ? void 0 : c.text) === null || f === void 0 ? void 0 : f.slice(Math.max(r, d) - d, o - d));
  }), a;
}
function yy(t) {
  return Object.fromEntries(Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, n]) => [e, n.spec.toText]));
}
ut.create({
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
            const { editor: t } = this, { state: e, schema: n } = t, { doc: r, selection: o } = e, { ranges: s } = o, i = Math.min(...s.map((p) => p.$from.pos)), a = Math.max(...s.map((p) => p.$to.pos)), c = yy(n);
            return by(r, { from: i, to: a }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: c
            });
          }
        }
      })
    ];
  }
});
const xy = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  var n;
  t.isDestroyed || (e.dom.blur(), (n = window == null ? void 0 : window.getSelection()) === null || n === void 0 || n.removeAllRanges());
}), !0), wy = (t = !1) => ({ commands: e }) => e.setContent("", t), vy = () => ({ state: t, tr: e, dispatch: n }) => {
  const { selection: r } = e, { ranges: o } = r;
  return n && o.forEach(({ $from: s, $to: i }) => {
    t.doc.nodesBetween(s.pos, i.pos, (a, c) => {
      if (a.type.isText)
        return;
      const { doc: d, mapping: p } = e, u = d.resolve(p.map(c)), f = d.resolve(p.map(c + a.nodeSize)), h = u.blockRange(f);
      if (!h)
        return;
      const g = Xn(h);
      if (a.type.isTextblock) {
        const { defaultType: m } = u.parent.contentMatchAt(u.index());
        e.setNodeMarkup(h.start, m);
      }
      (g || g === 0) && e.lift(h, g);
    });
  }), !0;
}, ky = (t) => (e) => t(e), Cy = () => ({ state: t, dispatch: e }) => Md(t, e), Ny = (t, e) => ({ editor: n, tr: r }) => {
  const { state: o } = n, s = o.doc.slice(t.from, t.to);
  r.deleteRange(t.from, t.to);
  const i = r.mapping.map(e);
  return r.insert(i, s.content), r.setSelection(new ge(r.doc.resolve(Math.max(i - 1, 0)))), !0;
}, Sy = () => ({ tr: t, dispatch: e }) => {
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
}, Ey = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const o = je(t, n.schema), s = e.selection.$anchor;
  for (let i = s.depth; i > 0; i -= 1)
    if (s.node(i).type === o) {
      if (r) {
        const c = s.before(i), d = s.after(i);
        e.delete(c, d).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, _y = (t) => ({ tr: e, dispatch: n }) => {
  const { from: r, to: o } = t;
  return n && e.delete(r, o), !0;
}, Ay = () => ({ state: t, dispatch: e }) => Pi(t, e), Ty = () => ({ commands: t }) => t.keyboardShortcut("Enter"), Iy = () => ({ state: t, dispatch: e }) => qb(t, e);
function wo(t, e, n = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((o) => n.strict ? e[o] === t[o] : my(e[o]) ? e[o].test(t[o]) : e[o] === t[o]) : !0;
}
function Vd(t, e, n = {}) {
  return t.find((r) => r.type === e && wo(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(n).map((o) => [o, r.attrs[o]])),
    n
  ));
}
function Ga(t, e, n = {}) {
  return !!Vd(t, e, n);
}
function jd(t, e, n) {
  var r;
  if (!t || !e)
    return;
  let o = t.parent.childAfter(t.parentOffset);
  if ((!o.node || !o.node.marks.some((p) => p.type === e)) && (o = t.parent.childBefore(t.parentOffset)), !o.node || !o.node.marks.some((p) => p.type === e) || (n = n || ((r = o.node.marks[0]) === null || r === void 0 ? void 0 : r.attrs), !Vd([...o.node.marks], e, n)))
    return;
  let i = o.index, a = t.start() + o.offset, c = i + 1, d = a + o.node.nodeSize;
  for (; i > 0 && Ga([...t.parent.child(i - 1).marks], e, n); )
    i -= 1, a -= t.parent.child(i).nodeSize;
  for (; c < t.parent.childCount && Ga([...t.parent.child(c).marks], e, n); )
    d += t.parent.child(c).nodeSize, c += 1;
  return {
    from: a,
    to: d
  };
}
function Yt(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t])
      throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
    return e.marks[t];
  }
  return t;
}
const By = (t, e = {}) => ({ tr: n, state: r, dispatch: o }) => {
  const s = Yt(t, r.schema), { doc: i, selection: a } = n, { $from: c, from: d, to: p } = a;
  if (o) {
    const u = jd(c, s, e);
    if (u && u.from <= d && u.to >= p) {
      const f = ge.create(i, u.from, u.to);
      n.setSelection(f);
    }
  }
  return !0;
}, Ry = (t) => (e) => {
  const n = typeof t == "function" ? t(e) : t;
  for (let r = 0; r < n.length; r += 1)
    if (n[r](e))
      return !0;
  return !1;
};
function Wd(t) {
  return t instanceof ge;
}
function rn(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function Ly(t, e = null) {
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
function Py() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function Fi() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const Oy = (t = null, e = {}) => ({ editor: n, view: r, tr: o, dispatch: s }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const i = () => {
    (Fi() || Py()) && r.dom.focus(), requestAnimationFrame(() => {
      n.isDestroyed || (r.focus(), e != null && e.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && t === null || t === !1)
    return !0;
  if (s && t === null && !Wd(n.state.selection))
    return i(), !0;
  const a = Ly(o.doc, t) || n.state.selection, c = n.state.selection.eq(a);
  return s && (c || o.setSelection(a), c && o.storedMarks && o.setStoredMarks(o.storedMarks), i()), !0;
}, My = (t, e) => (n) => t.every((r, o) => e(r, { ...n, index: o })), Dy = (t, e) => ({ tr: n, commands: r }) => r.insertContentAt({ from: n.selection.from, to: n.selection.to }, t, e), Gd = (t) => {
  const e = t.childNodes;
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const r = e[n];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? t.removeChild(r) : r.nodeType === 1 && Gd(r);
  }
  return t;
};
function Gr(t) {
  const e = `<body>${t}</body>`, n = new window.DOMParser().parseFromString(e, "text/html").body;
  return Gd(n);
}
function wr(t, e, n) {
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
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", s), wr("", e, n);
    }
  if (o) {
    if (n.errorOnInvalidContent) {
      let i = !1, a = "";
      const c = new Tb({
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
      if (n.slice ? Mn.fromSchema(c).parseSlice(Gr(t), n.parseOptions) : Mn.fromSchema(c).parse(Gr(t), n.parseOptions), n.errorOnInvalidContent && i)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${a}`) });
    }
    const s = Mn.fromSchema(e);
    return n.slice ? s.parseSlice(Gr(t), n.parseOptions).content : s.parse(Gr(t), n.parseOptions);
  }
  return wr("", e, n);
}
function $y(t, e, n) {
  const r = t.steps.length - 1;
  if (r < e)
    return;
  const o = t.steps[r];
  if (!(o instanceof ot || o instanceof et))
    return;
  const s = t.mapping.maps[r];
  let i = 0;
  s.forEach((a, c, d, p) => {
    i === 0 && (i = p);
  }), t.setSelection(ie.near(t.doc.resolve(i), n));
}
const Fy = (t) => !("type" in t), zy = (t, e, n) => ({ tr: r, dispatch: o, editor: s }) => {
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
        wr(e, s.schema, {
          parseOptions: d,
          errorOnInvalidContent: !0
        });
      } catch (y) {
        c(y);
      }
    try {
      a = wr(e, s.schema, {
        parseOptions: d,
        errorOnInvalidContent: (i = n.errorOnInvalidContent) !== null && i !== void 0 ? i : s.options.enableContentCheck
      });
    } catch (y) {
      return c(y), !1;
    }
    let { from: p, to: u } = typeof t == "number" ? { from: t, to: t } : { from: t.from, to: t.to }, f = !0, h = !0;
    if ((Fy(a) ? a : [a]).forEach((y) => {
      y.check(), f = f ? y.isText && y.marks.length === 0 : !1, h = h ? y.isBlock : !1;
    }), p === u && h) {
      const { parent: y } = r.doc.resolve(p);
      y.isTextblock && !y.type.spec.code && !y.childCount && (p -= 1, u += 1);
    }
    let m;
    if (f) {
      if (Array.isArray(e))
        m = e.map((y) => y.text || "").join("");
      else if (e instanceof H) {
        let y = "";
        e.forEach((x) => {
          x.text && (y += x.text);
        }), m = y;
      } else typeof e == "object" && e && e.text ? m = e.text : m = e;
      r.insertText(m, p, u);
    } else
      m = a, r.replaceWith(p, u, m);
    n.updateSelection && $y(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", { from: p, text: m }), n.applyPasteRules && r.setMeta("applyPasteRules", { from: p, text: m });
  }
  return !0;
}, Hy = () => ({ state: t, dispatch: e }) => Yb(t, e), Vy = () => ({ state: t, dispatch: e }) => Jb(t, e), jy = () => ({ state: t, dispatch: e }) => Td(t, e), Wy = () => ({ state: t, dispatch: e }) => Ld(t, e), Gy = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Fo(t.doc, t.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, Uy = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = Fo(t.doc, t.selection.$from.pos, 1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, Ky = () => ({ state: t, dispatch: e }) => Ub(t, e), Yy = () => ({ state: t, dispatch: e }) => Kb(t, e);
function Ud() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Jy(t) {
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
      Fi() || Ud() ? i = !0 : o = !0;
    else
      throw new Error(`Unrecognized modifier name: ${c}`);
  }
  return r && (n = `Alt-${n}`), o && (n = `Ctrl-${n}`), i && (n = `Meta-${n}`), s && (n = `Shift-${n}`), n;
}
const Xy = (t) => ({ editor: e, view: n, tr: r, dispatch: o }) => {
  const s = Jy(t).split(/-(?!$)/), i = s.find((d) => !["Alt", "Ctrl", "Meta", "Shift"].includes(d)), a = new KeyboardEvent("keydown", {
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
    const p = d.map(r.mapping);
    p && o && r.maybeStep(p);
  }), !0;
};
function zi(t, e, n = {}) {
  const { from: r, to: o, empty: s } = t.selection, i = e ? je(e, t.schema) : null, a = [];
  t.doc.nodesBetween(r, o, (u, f) => {
    if (u.isText)
      return;
    const h = Math.max(r, f), g = Math.min(o, f + u.nodeSize);
    a.push({
      node: u,
      from: h,
      to: g
    });
  });
  const c = o - r, d = a.filter((u) => i ? i.name === u.node.type.name : !0).filter((u) => wo(u.node.attrs, n, { strict: !1 }));
  return s ? !!d.length : d.reduce((u, f) => u + f.to - f.from, 0) >= c;
}
const qy = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const o = je(t, n.schema);
  return zi(n, o, e) ? Xb(n, r) : !1;
}, Zy = () => ({ state: t, dispatch: e }) => Dd(t, e), Qy = (t) => ({ state: e, dispatch: n }) => {
  const r = je(t, e.schema);
  return ly(r)(e, n);
}, ex = () => ({ state: t, dispatch: e }) => Od(t, e);
function Kd(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function Ua(t, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((r, o) => (n.includes(o) || (r[o] = t[o]), r), {});
}
const tx = (t, e) => ({ tr: n, state: r, dispatch: o }) => {
  let s = null, i = null;
  const a = Kd(typeof t == "string" ? t : t.name, r.schema);
  return a ? (a === "node" && (s = je(t, r.schema)), a === "mark" && (i = Yt(t, r.schema)), o && n.selection.ranges.forEach((c) => {
    r.doc.nodesBetween(c.$from.pos, c.$to.pos, (d, p) => {
      s && s === d.type && n.setNodeMarkup(p, void 0, Ua(d.attrs, e)), i && d.marks.length && d.marks.forEach((u) => {
        i === u.type && n.addMark(p, p + d.nodeSize, i.create(Ua(u.attrs, e)));
      });
    });
  }), !0) : !1;
}, nx = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), rx = () => ({ tr: t, dispatch: e }) => {
  if (e) {
    const n = new ct(t.doc);
    t.setSelection(n);
  }
  return !0;
}, ox = () => ({ state: t, dispatch: e }) => Bd(t, e), sx = () => ({ state: t, dispatch: e }) => Pd(t, e), ix = () => ({ state: t, dispatch: e }) => ey(t, e), ax = () => ({ state: t, dispatch: e }) => ry(t, e), lx = () => ({ state: t, dispatch: e }) => ny(t, e);
function cx(t, e, n = {}, r = {}) {
  return wr(t, e, {
    slice: !1,
    parseOptions: n,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
const dx = (t, e = !1, n = {}, r = {}) => ({ editor: o, tr: s, dispatch: i, commands: a }) => {
  var c, d;
  const { doc: p } = s;
  if (n.preserveWhitespace !== "full") {
    const u = cx(t, o.schema, n, {
      errorOnInvalidContent: (c = r.errorOnInvalidContent) !== null && c !== void 0 ? c : o.options.enableContentCheck
    });
    return i && s.replaceWith(0, p.content.size, u).setMeta("preventUpdate", !e), !0;
  }
  return i && s.setMeta("preventUpdate", !e), a.insertContentAt({ from: 0, to: p.content.size }, t, {
    parseOptions: n,
    errorOnInvalidContent: (d = r.errorOnInvalidContent) !== null && d !== void 0 ? d : o.options.enableContentCheck
  });
};
function ux(t, e) {
  const n = Yt(e, t.schema), { from: r, to: o, empty: s } = t.selection, i = [];
  s ? (t.storedMarks && i.push(...t.storedMarks), i.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, o, (c) => {
    i.push(...c.marks);
  });
  const a = i.find((c) => c.type.name === n.name);
  return a ? { ...a.attrs } : {};
}
function px(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
function fx(t, e) {
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
function Hi(t) {
  return (e) => fx(e.$from, t);
}
function eo(t, e, n) {
  return Object.fromEntries(Object.entries(n).filter(([r]) => {
    const o = t.find((s) => s.type === e && s.name === r);
    return o ? o.attribute.keepOnSplit : !1;
  }));
}
function hx(t, e, n = {}) {
  const { empty: r, ranges: o } = t.selection, s = e ? Yt(e, t.schema) : null;
  if (r)
    return !!(t.storedMarks || t.selection.$from.marks()).filter((u) => s ? s.name === u.type.name : !0).find((u) => wo(u.attrs, n, { strict: !1 }));
  let i = 0;
  const a = [];
  if (o.forEach(({ $from: u, $to: f }) => {
    const h = u.pos, g = f.pos;
    t.doc.nodesBetween(h, g, (m, y) => {
      if (!m.isText && !m.marks.length)
        return;
      const x = Math.max(h, y), w = Math.min(g, y + m.nodeSize), S = w - x;
      i += S, a.push(...m.marks.map((v) => ({
        mark: v,
        from: x,
        to: w
      })));
    });
  }), i === 0)
    return !1;
  const c = a.filter((u) => s ? s.name === u.mark.type.name : !0).filter((u) => wo(u.mark.attrs, n, { strict: !1 })).reduce((u, f) => u + f.to - f.from, 0), d = a.filter((u) => s ? u.mark.type !== s && u.mark.type.excludes(s) : !0).reduce((u, f) => u + f.to - f.from, 0);
  return (c > 0 ? c + d : c) >= i;
}
function Ka(t, e) {
  const { nodeExtensions: n } = fy(e), r = n.find((i) => i.name === t);
  if (!r)
    return !1;
  const o = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, s = sr(nn(r, "group", o));
  return typeof s != "string" ? !1 : s.split(" ").includes("list");
}
function Yd(t, { checkChildren: e = !0, ignoreWhitespace: n = !1 } = {}) {
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
      o !== !1 && (Yd(s, { ignoreWhitespace: n, checkChildren: e }) || (o = !1));
    }), o;
  }
  return !1;
}
function mx(t, e, n) {
  var r;
  const { selection: o } = e;
  let s = null;
  if (Wd(o) && (s = o.$cursor), s) {
    const a = (r = t.storedMarks) !== null && r !== void 0 ? r : s.marks();
    return !!n.isInSet(a) || !a.some((c) => c.type.excludes(n));
  }
  const { ranges: i } = o;
  return i.some(({ $from: a, $to: c }) => {
    let d = a.depth === 0 ? t.doc.inlineContent && t.doc.type.allowsMarkType(n) : !1;
    return t.doc.nodesBetween(a.pos, c.pos, (p, u, f) => {
      if (d)
        return !1;
      if (p.isInline) {
        const h = !f || f.type.allowsMarkType(n), g = !!n.isInSet(p.marks) || !p.marks.some((m) => m.type.excludes(n));
        d = h && g;
      }
      return !d;
    }), d;
  });
}
const gx = (t, e = {}) => ({ tr: n, state: r, dispatch: o }) => {
  const { selection: s } = n, { empty: i, ranges: a } = s, c = Yt(t, r.schema);
  if (o)
    if (i) {
      const d = ux(r, c);
      n.addStoredMark(c.create({
        ...d,
        ...e
      }));
    } else
      a.forEach((d) => {
        const p = d.$from.pos, u = d.$to.pos;
        r.doc.nodesBetween(p, u, (f, h) => {
          const g = Math.max(h, p), m = Math.min(h + f.nodeSize, u);
          f.marks.find((x) => x.type === c) ? f.marks.forEach((x) => {
            c === x.type && n.addMark(g, m, c.create({
              ...x.attrs,
              ...e
            }));
          }) : n.addMark(g, m, c.create(e));
        });
      });
  return mx(r, n, c);
}, bx = (t, e) => ({ tr: n }) => (n.setMeta(t, e), !0), yx = (t, e = {}) => ({ state: n, dispatch: r, chain: o }) => {
  const s = je(t, n.schema);
  let i;
  return n.selection.$anchor.sameParent(n.selection.$head) && (i = n.selection.$anchor.parent.attrs), s.isTextblock ? o().command(({ commands: a }) => Wa(s, { ...i, ...e })(n) ? !0 : a.clearNodes()).command(({ state: a }) => Wa(s, { ...i, ...e })(a, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, xx = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, o = rn(t, 0, r.content.size), s = de.create(r, o);
    e.setSelection(s);
  }
  return !0;
}, wx = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, { from: o, to: s } = typeof t == "number" ? { from: t, to: t } : t, i = ge.atStart(r).from, a = ge.atEnd(r).to, c = rn(o, i, a), d = rn(s, i, a), p = ge.create(r, c, d);
    e.setSelection(p);
  }
  return !0;
}, vx = (t) => ({ state: e, dispatch: n }) => {
  const r = je(t, e.schema);
  return uy(r)(e, n);
};
function Ya(t, e) {
  const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (n) {
    const r = n.filter((o) => e == null ? void 0 : e.includes(o.type.name));
    t.tr.ensureMarks(r);
  }
}
const kx = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: n, dispatch: r, editor: o }) => {
  const { selection: s, doc: i } = e, { $from: a, $to: c } = s, d = o.extensionManager.attributes, p = eo(d, a.node().type.name, a.node().attrs);
  if (s instanceof de && s.node.isBlock)
    return !a.parentOffset || !Dt(i, a.pos) ? !1 : (r && (t && Ya(n, o.extensionManager.splittableMarks), e.split(a.pos).scrollIntoView()), !0);
  if (!a.parent.isBlock)
    return !1;
  const u = c.parentOffset === c.parent.content.size, f = a.depth === 0 ? void 0 : px(a.node(-1).contentMatchAt(a.indexAfter(-1)));
  let h = u && f ? [
    {
      type: f,
      attrs: p
    }
  ] : void 0, g = Dt(e.doc, e.mapping.map(a.pos), 1, h);
  if (!h && !g && Dt(e.doc, e.mapping.map(a.pos), 1, f ? [{ type: f }] : void 0) && (g = !0, h = f ? [
    {
      type: f,
      attrs: p
    }
  ] : void 0), r) {
    if (g && (s instanceof ge && e.deleteSelection(), e.split(e.mapping.map(a.pos), 1, h), f && !u && !a.parentOffset && a.parent.type !== f)) {
      const m = e.mapping.map(a.before()), y = e.doc.resolve(m);
      a.node(-1).canReplaceWith(y.index(), y.index() + 1, f) && e.setNodeMarkup(e.mapping.map(a.before()), f);
    }
    t && Ya(n, o.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return g;
}, Cx = (t, e = {}) => ({ tr: n, state: r, dispatch: o, editor: s }) => {
  var i;
  const a = je(t, r.schema), { $from: c, $to: d } = r.selection, p = r.selection.node;
  if (p && p.isBlock || c.depth < 2 || !c.sameParent(d))
    return !1;
  const u = c.node(-1);
  if (u.type !== a)
    return !1;
  const f = s.extensionManager.attributes;
  if (c.parent.content.size === 0 && c.node(-1).childCount === c.indexAfter(-1)) {
    if (c.depth === 2 || c.node(-3).type !== a || c.index(-2) !== c.node(-2).childCount - 1)
      return !1;
    if (o) {
      let x = H.empty;
      const w = c.index(-1) ? 1 : c.index(-2) ? 2 : 3;
      for (let C = c.depth - w; C >= c.depth - 3; C -= 1)
        x = H.from(c.node(C).copy(x));
      const S = c.indexAfter(-1) < c.node(-2).childCount ? 1 : c.indexAfter(-2) < c.node(-3).childCount ? 2 : 3, v = {
        ...eo(f, c.node().type.name, c.node().attrs),
        ...e
      }, N = ((i = a.contentMatch.defaultType) === null || i === void 0 ? void 0 : i.createAndFill(v)) || void 0;
      x = x.append(H.from(a.createAndFill(null, N) || void 0));
      const T = c.before(c.depth - (w - 1));
      n.replace(T, c.after(-S), new X(x, 4 - w, 0));
      let k = -1;
      n.doc.nodesBetween(T, n.doc.content.size, (C, E) => {
        if (k > -1)
          return !1;
        C.isTextblock && C.content.size === 0 && (k = E + 1);
      }), k > -1 && n.setSelection(ge.near(n.doc.resolve(k))), n.scrollIntoView();
    }
    return !0;
  }
  const h = d.pos === c.end() ? u.contentMatchAt(0).defaultType : null, g = {
    ...eo(f, u.type.name, u.attrs),
    ...e
  }, m = {
    ...eo(f, c.node().type.name, c.node().attrs),
    ...e
  };
  n.delete(c.pos, d.pos);
  const y = h ? [
    { type: a, attrs: g },
    { type: h, attrs: m }
  ] : [{ type: a, attrs: g }];
  if (!Dt(n.doc, c.pos, 2))
    return !1;
  if (o) {
    const { selection: x, storedMarks: w } = r, { splittableMarks: S } = s.extensionManager, v = w || x.$to.parentOffset && x.$from.marks();
    if (n.split(c.pos, 2, y).scrollIntoView(), !v || !o)
      return !0;
    const N = v.filter((T) => S.includes(T.type.name));
    n.ensureMarks(N);
  }
  return !0;
}, hs = (t, e) => {
  const n = Hi((i) => i.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (r === void 0)
    return !0;
  const o = t.doc.nodeAt(r);
  return n.node.type === (o == null ? void 0 : o.type) && En(t.doc, n.pos) && t.join(n.pos), !0;
}, ms = (t, e) => {
  const n = Hi((i) => i.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(n.start).after(n.depth);
  if (r === void 0)
    return !0;
  const o = t.doc.nodeAt(r);
  return n.node.type === (o == null ? void 0 : o.type) && En(t.doc, r) && t.join(r), !0;
}, Nx = (t, e, n, r = {}) => ({ editor: o, tr: s, state: i, dispatch: a, chain: c, commands: d, can: p }) => {
  const { extensions: u, splittableMarks: f } = o.extensionManager, h = je(t, i.schema), g = je(e, i.schema), { selection: m, storedMarks: y } = i, { $from: x, $to: w } = m, S = x.blockRange(w), v = y || m.$to.parentOffset && m.$from.marks();
  if (!S)
    return !1;
  const N = Hi((T) => Ka(T.type.name, u))(m);
  if (S.depth >= 1 && N && S.depth - N.depth <= 1) {
    if (N.node.type === h)
      return d.liftListItem(g);
    if (Ka(N.node.type.name, u) && h.validContent(N.node.content) && a)
      return c().command(() => (s.setNodeMarkup(N.pos, h), !0)).command(() => hs(s, h)).command(() => ms(s, h)).run();
  }
  return !n || !v || !a ? c().command(() => p().wrapInList(h, r) ? !0 : d.clearNodes()).wrapInList(h, r).command(() => hs(s, h)).command(() => ms(s, h)).run() : c().command(() => {
    const T = p().wrapInList(h, r), k = v.filter((C) => f.includes(C.type.name));
    return s.ensureMarks(k), T ? !0 : d.clearNodes();
  }).wrapInList(h, r).command(() => hs(s, h)).command(() => ms(s, h)).run();
}, Sx = (t, e = {}, n = {}) => ({ state: r, commands: o }) => {
  const { extendEmptyMarkRange: s = !1 } = n, i = Yt(t, r.schema);
  return hx(r, i, e) ? o.unsetMark(i, { extendEmptyMarkRange: s }) : o.setMark(i, e);
}, Ex = (t, e, n = {}) => ({ state: r, commands: o }) => {
  const s = je(t, r.schema), i = je(e, r.schema), a = zi(r, s, n);
  let c;
  return r.selection.$anchor.sameParent(r.selection.$head) && (c = r.selection.$anchor.parent.attrs), a ? o.setNode(i, c) : o.setNode(s, { ...c, ...n });
}, _x = (t, e = {}) => ({ state: n, commands: r }) => {
  const o = je(t, n.schema);
  return zi(n, o, e) ? r.lift(o) : r.wrapIn(o, e);
}, Ax = () => ({ state: t, dispatch: e }) => {
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
}, Tx = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, { empty: r, ranges: o } = n;
  return r || e && o.forEach((s) => {
    t.removeMark(s.$from.pos, s.$to.pos);
  }), !0;
}, Ix = (t, e = {}) => ({ tr: n, state: r, dispatch: o }) => {
  var s;
  const { extendEmptyMarkRange: i = !1 } = e, { selection: a } = n, c = Yt(t, r.schema), { $from: d, empty: p, ranges: u } = a;
  if (!o)
    return !0;
  if (p && i) {
    let { from: f, to: h } = a;
    const g = (s = d.marks().find((y) => y.type === c)) === null || s === void 0 ? void 0 : s.attrs, m = jd(d, c, g);
    m && (f = m.from, h = m.to), n.removeMark(f, h, c);
  } else
    u.forEach((f) => {
      n.removeMark(f.$from.pos, f.$to.pos, c);
    });
  return n.removeStoredMark(c), !0;
}, Bx = (t, e = {}) => ({ tr: n, state: r, dispatch: o }) => {
  let s = null, i = null;
  const a = Kd(typeof t == "string" ? t : t.name, r.schema);
  return a ? (a === "node" && (s = je(t, r.schema)), a === "mark" && (i = Yt(t, r.schema)), o && n.selection.ranges.forEach((c) => {
    const d = c.$from.pos, p = c.$to.pos;
    let u, f, h, g;
    n.selection.empty ? r.doc.nodesBetween(d, p, (m, y) => {
      s && s === m.type && (h = Math.max(y, d), g = Math.min(y + m.nodeSize, p), u = y, f = m);
    }) : r.doc.nodesBetween(d, p, (m, y) => {
      y < d && s && s === m.type && (h = Math.max(y, d), g = Math.min(y + m.nodeSize, p), u = y, f = m), y >= d && y <= p && (s && s === m.type && n.setNodeMarkup(y, void 0, {
        ...m.attrs,
        ...e
      }), i && m.marks.length && m.marks.forEach((x) => {
        if (i === x.type) {
          const w = Math.max(y, d), S = Math.min(y + m.nodeSize, p);
          n.addMark(w, S, i.create({
            ...x.attrs,
            ...e
          }));
        }
      }));
    }), f && (u !== void 0 && n.setNodeMarkup(u, void 0, {
      ...f.attrs,
      ...e
    }), i && f.marks.length && f.marks.forEach((m) => {
      i === m.type && n.addMark(h, g, i.create({
        ...m.attrs,
        ...e
      }));
    }));
  }), !0) : !1;
}, Rx = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const o = je(t, n.schema);
  return oy(o, e)(n, r);
}, Lx = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const o = je(t, n.schema);
  return sy(o, e)(n, r);
};
var Px = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: xy,
  clearContent: wy,
  clearNodes: vy,
  command: ky,
  createParagraphNear: Cy,
  cut: Ny,
  deleteCurrentNode: Sy,
  deleteNode: Ey,
  deleteRange: _y,
  deleteSelection: Ay,
  enter: Ty,
  exitCode: Iy,
  extendMarkRange: By,
  first: Ry,
  focus: Oy,
  forEach: My,
  insertContent: Dy,
  insertContentAt: zy,
  joinBackward: jy,
  joinDown: Vy,
  joinForward: Wy,
  joinItemBackward: Gy,
  joinItemForward: Uy,
  joinTextblockBackward: Ky,
  joinTextblockForward: Yy,
  joinUp: Hy,
  keyboardShortcut: Xy,
  lift: qy,
  liftEmptyBlock: Zy,
  liftListItem: Qy,
  newlineInCode: ex,
  resetAttributes: tx,
  scrollIntoView: nx,
  selectAll: rx,
  selectNodeBackward: ox,
  selectNodeForward: sx,
  selectParentNode: ix,
  selectTextblockEnd: ax,
  selectTextblockStart: lx,
  setContent: dx,
  setMark: gx,
  setMeta: bx,
  setNode: yx,
  setNodeSelection: xx,
  setTextSelection: wx,
  sinkListItem: vx,
  splitBlock: kx,
  splitListItem: Cx,
  toggleList: Nx,
  toggleMark: Sx,
  toggleNode: Ex,
  toggleWrap: _x,
  undoInputRule: Ax,
  unsetAllMarks: Tx,
  unsetMark: Ix,
  updateAttributes: Bx,
  wrapIn: Rx,
  wrapInList: Lx
});
ut.create({
  name: "commands",
  addCommands() {
    return {
      ...Px
    };
  }
});
ut.create({
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
ut.create({
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
const Ox = new An("focusEvents");
ut.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new _n({
        key: Ox,
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
ut.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () => this.editor.commands.first(({ commands: i }) => [
      () => i.undoInputRule(),
      // maybe convert first text block node to default node
      () => i.command(({ tr: a }) => {
        const { selection: c, doc: d } = a, { empty: p, $anchor: u } = c, { pos: f, parent: h } = u, g = u.parent.isTextblock && f > 0 ? a.doc.resolve(f - 1) : u, m = g.parent.type.spec.isolating, y = u.pos - u.parentOffset, x = m && g.parent.childCount === 1 ? y === u.pos : ie.atStart(d).from === f;
        return !p || !h.type.isTextblock || h.textContent.length || !x || x && u.parent.type.name === "paragraph" ? !1 : i.clearNodes();
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
    return Fi() || Ud() ? s : o;
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
          if (t.some((m) => m.getMeta("composition")))
            return;
          const r = t.some((m) => m.docChanged) && !e.doc.eq(n.doc), o = t.some((m) => m.getMeta("preventClearDocument"));
          if (!r || o)
            return;
          const { empty: s, from: i, to: a } = e.selection, c = ie.atStart(e.doc).from, d = ie.atEnd(e.doc).to;
          if (s || !(i === c && a === d) || !Yd(n.doc))
            return;
          const f = n.tr, h = zd({
            state: n,
            transaction: f
          }), { commands: g } = new py({
            editor: this.editor,
            state: h
          });
          if (g.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
});
ut.create({
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
ut.create({
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
const Mx = ut.create({
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
}), Jd = ({
  blockId: t,
  value: e = "",
  onUpdate: n = () => {
  },
  onBlur: r = () => {
  },
  placeholder: o = "",
  from: s = "settings",
  style: i = {}
}) => Ff(
  {
    // Created on the first render. Left undefined, TipTap 2.27 treats any page with `window.next`
    // (every Next.js host) as server-rendered: it logs "SSR has been detected" and returns no editor,
    // meaning to build one later from an effect. Measured 2026-09-14 in a Next.js host: the FIRST
    // paragraph double-click after the editor loaded opened nothing at all — no ProseMirror, no
    // `#active-inline-editing-element` — and only a second inline edit (a heading, say) made it work.
    // This hook only ever runs in the browser — the canvas iframe and the settings panel — so there
    // is no server render to protect.
    immediatelyRender: !0,
    extensions: [
      Kf,
      Hf,
      Mx.configure({
        types: ["textStyle"]
      }),
      Vf.configure({
        multicolor: !0
      }),
      jf.configure({
        openOnClick: !1,
        HTMLAttributes: {
          class: "underline"
        }
      }),
      Gf.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right"],
        defaultAlignment: "left"
      }),
      Uf,
      Wf.configure({
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
), Dx = /* @__PURE__ */ new Set([
  "Heading",
  "Paragraph",
  "RichText",
  "Span",
  "ListItem",
  "TableCell",
  "Label"
]), Xd = (t) => Dx.has(t);
function $x(t, e, n) {
  Xd(n) ? t.innerHTML = e : t.textContent = e;
}
function qd(t, e) {
  return Xd(e) ? t.innerHTML : t.innerText ?? t.textContent ?? "";
}
const Ja = (t, e) => t !== null && e === t ? null : e;
function Fx(t) {
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
const zx = Gn(
  ({
    blockContent: t,
    editingElement: e,
    onClose: n,
    onChange: r,
    onEscape: o
  }) => {
    const { document: s } = pt(), i = te(null), a = Jd({
      value: t,
      blockId: "active-inline-editing-element",
      placeholder: "Enter text here",
      onUpdate: ({ editor: u }) => r((u == null ? void 0 : u.getHTML()) || ""),
      onBlur: ({ editor: u, event: f }) => {
        if (!s) return;
        const h = f == null ? void 0 : f.relatedTarget, g = s.querySelector(".ProseMirror"), m = s.querySelector(".tippy-box"), y = s.querySelector("#chai-rich-text-menu-bar"), x = g == null ? void 0 : g.contains(h), w = m == null ? void 0 : m.contains(h), S = y == null ? void 0 : y.contains(h), v = window.document.getElementById("rte-widget-color-picker");
        !x && !w && !S && !v && n(Ja(i.current, (u == null ? void 0 : u.getHTML()) || ""));
      },
      from: "canvas"
    }), c = M(() => Fx(e), [e]);
    z(() => {
      var u;
      a && i.current === null && (i.current = a.getHTML()), (u = a == null ? void 0 : a.commands) == null || u.focus(), a == null || a.emit("focus", {
        editor: a,
        event: new FocusEvent("focus"),
        transaction: []
      });
    }, [e, a]);
    const d = M(() => {
      var h;
      const u = "max-w-none shadow-none outline outline-[2px] [&_*]:shadow-none";
      if (!e) return u;
      const f = ((h = e == null ? void 0 : e.className) == null ? void 0 : h.replace("sr-only", "")) || "";
      return `${u} ${f}`;
    }, [e]), p = (u) => {
      u.key === "Escape" && o(u, Ja(i.current, (a == null ? void 0 : a.getHTML()) || ""));
    };
    return a && /* @__PURE__ */ b(
      "div",
      {
        onKeyDown: p,
        onClick: (u) => u.stopPropagation(),
        className: "relative",
        style: c ? { textAlign: c } : void 0,
        children: [
          /* @__PURE__ */ l(
            zf,
            {
              editor: a,
              shouldShow: () => a && (a == null ? void 0 : a.isFocused),
              tippyOptions: { duration: 100, arrow: !0, hideOnClick: !1 },
              className: "w-max",
              children: /* @__PURE__ */ l(td, { editor: a, from: "canvas" })
            }
          ),
          /* @__PURE__ */ l(
            jl,
            {
              id: "active-inline-editing-element",
              onKeyDown: p,
              value: t,
              editor: a,
              className: d
            }
          )
        ]
      }
    );
  }
), Hx = Gn(
  ({
    editingElement: t,
    blockContent: e,
    blockType: n,
    onClose: r,
    editorRef: o,
    onChange: s,
    onEscape: i
  }) => {
    const { document: a, window: c } = pt();
    z(() => {
      if (!(!a || !c))
        if (o.current) {
          $x(o.current, e, n), o.current.focus();
          const h = a.createRange(), g = c.getSelection();
          h.selectNodeContents(o.current), h.collapse(!1), g == null || g.removeAllRanges(), g == null || g.addRange(h), o.current.focus();
        } else
          r();
    }, [e, n, a, o, r, c]);
    const d = M(() => {
      var g;
      const h = ((g = t == null ? void 0 : t.tagName) == null ? void 0 : g.toLowerCase()) || "div";
      return h === "button" ? "div" : h;
    }, [t]), p = B(
      (h) => {
        (h.key === "Enter" || h.key === "Escape") && i(h);
      },
      [i]
    ), u = B(() => {
      r();
    }, [r]), f = M(() => {
      var h;
      return {
        id: "active-inline-editing-element",
        contentEditable: !0,
        className: `${((h = t == null ? void 0 : t.className) == null ? void 0 : h.replace("sr-only", "")) || ""} outline outline-[2px] outline-green-500 shadow-none empty:before:content-[attr(data-placeholder)] empty:before:text-gray-400 empty:before:absolute empty:before:pointer-events-none empty:before:select-none empty:before:inset-0 empty:before:z-0 relative min-h-[1em]`,
        style: so(t == null ? void 0 : t.style) || {},
        onInput: (g) => {
          const m = g.target;
          m && (m.innerText.trim() === "" ? (m.setAttribute("data-placeholder", "Enter text here"), m.children.length > 0 && m.children[0].remove()) : g.target.removeAttribute("data-placeholder"), s(qd(m, n)));
        },
        onClick: (g) => {
          g.stopPropagation(), g.preventDefault();
        }
      };
    }, [t == null ? void 0 : t.className, t == null ? void 0 : t.style, s, n]);
    return /* @__PURE__ */ l(Q, { children: un(d, {
      ref: o,
      onBlur: u,
      onKeyDown: p,
      ...f
    }) });
  }
), Vx = Gn(
  ({ block: t, children: e }) => {
    const n = "content", { document: r } = pt(), { editingBlockId: o, editingItemIndex: s, setEditingBlockId: i, setEditingItemIndex: a } = Sn(), [c, d] = $(null), p = te(null), { clearHighlight: u } = At(), f = _t(), { selectedLang: h } = Je(), [, g] = oe(), m = te(null), y = o, { blockContent: x, blockType: w } = M(() => {
      var L;
      const k = t._type;
      let C = t[n];
      const E = Oe(t._type);
      return h && ((L = E == null ? void 0 : E.i18nProps) == null ? void 0 : L.includes(n)) && le(t, `${n}-${h}`) && (C = _(t, `${n}-${h}`)), { blockContent: C, blockType: k };
    }, [t, h]), S = B(
      (k) => {
        if (k !== null) {
          const C = k || (p.current ? qd(p.current, w) : void 0);
          f([y], { [n]: C });
        }
        d(null), i(""), a(-1), g([]), y && setTimeout(() => g([y]), 100);
      },
      [f, y, w, i, a, g]
    ), v = dt(
      (k) => {
        f([y], { [n]: k });
      },
      [y, t, f, h],
      1e3
    ), N = B(
      (k, C) => {
        k.preventDefault(), y && (m.current = y), S(C), setTimeout(() => {
          const E = m.current;
          m.current = null, E && g([E]);
        }, 100);
      },
      [y, S, g]
    );
    z(() => {
      var I;
      if (!y || !r) return;
      const k = `[data-block-id="${y}"]`, C = s >= 0 ? `[data-block-index="${s}"]` : "", E = r.querySelector(`${k}${C}`);
      E && ((I = E == null ? void 0 : E.classList) == null || I.add("sr-only"), Cp(() => d(E)));
    }, [y, w, r, s]);
    const T = M(() => c ? (u(), ["RichText", "Paragraph"].includes(w) ? /* @__PURE__ */ l(
      zx,
      {
        blockContent: x,
        editingElement: c,
        onChange: v,
        onClose: S,
        onEscape: N
      }
    ) : /* @__PURE__ */ l(
      Hx,
      {
        editorRef: p,
        blockContent: x,
        blockType: w,
        editingElement: c,
        onClose: S,
        onChange: v,
        onEscape: N
      }
    )) : null, [c, u, w, x, S, v, N]);
    return /* @__PURE__ */ b(Q, { children: [
      T,
      e
    ] });
  },
  (t, e) => t.block._id === e.block._id && t.block.content === e.block.content
), Zd = Eo({
  index: -1,
  key: ""
}), Xa = Eo(0), jx = [
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
], Wx = ({
  asyncProps: t,
  blockAtom: e,
  children: n
}) => {
  const { editingBlockId: r, editingItemIndex: o } = Sn(), [s] = D(e), i = M(() => Oe(s._type), [s._type]), { selectedLang: a, fallbackLang: c } = Je(), d = ib(), p = Yn(), [u] = D(kc), f = _(i, "component", null), { index: h, key: g } = yn(Zd), { mode: m } = ed(), y = Ke(_r), x = vt(), w = m === "edit", S = sb(), v = M(
    () => u ? Vl(ca(s, a, i), p, {
      index: h,
      key: g
    }) : ca(s, a, i),
    [s, a, i, p, u, h, g]
  ), N = M(
    () => da(s, !0, y),
    [s, da, y]
  ), T = M(
    () => d(s._id, ua(s._type)),
    [s._id, s._type, d, ua]
  ), k = M(() => {
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
  }, [s._id, s._type, h, w, x, S, r]), C = M(
    () => ({
      blockProps: k,
      inBuilder: m === "edit",
      lang: a || c,
      pageData: p,
      ...v,
      ...N,
      ...T,
      ...t
    }),
    [m, k, a, c, v, N, T, t]
  ), E = M(() => !jx.includes(s._type), [s._type]), I = M(() => {
    const V = _(s, "_show", !0);
    return Nt(V) ? u ? Of(V, p) !== "false" : !0 : V;
  }, [s, u, p]), L = M(
    () => yl(f) || !I ? null : /* @__PURE__ */ l(Ge, { children: un(f, {
      ...C,
      children: n({
        _id: s._id,
        _type: s._type,
        ...kr(v.repeaterItems) ? {
          repeaterItems: Mf(v.repeaterItems, s),
          $repeaterItemsKey: v.$repeaterItemsKey
        } : {},
        ...s.partialBlockId ? { partialBlockId: s.partialBlockId } : "",
        ...s.globalBlock ? { partialBlockId: s.globalBlock } : ""
      })
    }) }),
    [f, I, C, n, s, v.repeaterItems, v.$repeaterItemsKey]
  );
  if (L === null) return null;
  const R = r === s._id && (o === h || h < 0) ? /* @__PURE__ */ l(Vx, { block: s, children: L }) : L;
  return E ? /* @__PURE__ */ l(on, { fallbackRender: cb, children: R }) : R;
}, Gx = ({ children: t, partialBlockId: e }) => {
  const n = G("gotoPage", Ct), { saveState: r } = Ar(), { selectedLang: o, fallbackLang: s } = Je(), i = B(
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
}, Ux = () => /* @__PURE__ */ l("div", { className: "flex items-center justify-center rounded-md border border-destructive bg-destructive/10 p-4 text-center text-sm text-destructive", children: /* @__PURE__ */ b("p", { children: [
  "Maximum partial nesting depth (",
  uo,
  " levels) exceeded"
] }) }), Kx = ({ partialBlockId: t }) => {
  const { getPartialBlocks: e } = mi(), n = yn(Xa), r = M(() => e(t), [e, t]), o = M(() => Fl(P(r)), [r]);
  return n >= uo ? /* @__PURE__ */ l(Ux, {}) : F(r) ? null : /* @__PURE__ */ l(Xa.Provider, { value: n + 1, children: /* @__PURE__ */ l(Gx, { partialBlockId: t, children: /* @__PURE__ */ l(vo, { splitAtoms: o, blocks: r, type: "PartialBlock" }) }) });
}, vo = ({
  blocks: t,
  parent: e = null,
  splitAtoms: n = void 0,
  type: r = ""
}) => {
  const o = pm(n);
  let s = M(
    () => Z(t, (a) => le(a, "_id") && (F(e) ? !a._parent : a._parent === e)),
    [t, e]
  );
  const i = B(
    (a) => Z(t, (c) => c._parent === a).length > 0,
    [t]
  );
  return (r === "Heading" || r === "Paragraph" || r === "Link") && (s = Pf(s)), A(s, (a) => {
    const c = o(a._id);
    return c ? /* @__PURE__ */ l(lb, { block: a, children: (d) => /* @__PURE__ */ l(Wx, { blockAtom: c, asyncProps: d, children: ({ _id: p, _type: u, partialBlockId: f, repeaterItems: h, $repeaterItemsKey: g }) => u === "Repeater" ? kr(h) && h.map((m, y) => /* @__PURE__ */ l(Zd.Provider, { value: { index: y, key: g }, children: /* @__PURE__ */ l(vo, { splitAtoms: n, blocks: t, parent: a._id, type: u }) }, `${p}-${y}`)) : u === "GlobalBlock" || u === "PartialBlock" ? /* @__PURE__ */ l(Bf, { store: Pe, children: /* @__PURE__ */ l(Kx, { partialBlockId: f }) }) : i(p) ? /* @__PURE__ */ l(vo, { splitAtoms: n, blocks: t, parent: a._id, type: u }) : null }) }, a._id) : null;
  });
}, Yx = () => {
  const [t] = ue();
  return /* @__PURE__ */ l(vo, { splitAtoms: Sr, blocks: t });
}, Jx = () => {
  const [t] = ue(), [e] = D(xi), n = F(t) ? null : /* @__PURE__ */ l(Yx, {}, e);
  return /* @__PURE__ */ l(Q, { children: n });
}, Xx = Et("canvasZoom", 100), qx = () => D(Xx), Zx = () => D(lc), Qd = Et("canvasWidth", 800), Qx = Et("canvasDisplayWidth", 800), eu = P((t) => {
  const e = t(Qd);
  return Hl(e).toLowerCase();
}), ko = () => {
  const [t, e] = D(Qd), n = Ke(eu), [r, o] = Zx();
  return z(() => {
    r !== "xs" && o(n);
  }, [n, r, o]), [t, n, e];
}, Vi = () => {
  const [t, e] = D(Qx);
  return [t, e];
}, e0 = (t) => {
  const [e] = Vi(), [, n] = qx(), r = G("htmlDir", "ltr"), [o, s] = $({}), i = B(() => {
    const { width: a, height: c } = t;
    if (a < e) {
      const d = parseFloat((a / e).toFixed(2).toString());
      let p = {};
      const u = c * d, f = a * d;
      c && (p = {
        // Eureka! This is the formula to calculate the height of the scaled element. Thank you ChatGPT 4
        height: 100 + (c - u) / u * 100 + "%",
        width: 100 + (a - f) / f * 100 + "%"
      }), s({
        position: "relative",
        top: 0,
        transform: `scale(${d})`,
        transformOrigin: r === "rtl" ? "top right" : "top left",
        ...p,
        maxWidth: "none"
        // TODO: Add max-width to the wrapper
      }), n(d * 100);
    } else
      s({}), n(100);
  }, [e, t, r, n]);
  return z(() => {
    i();
  }, [e, t, n, i]), o;
}, t0 = () => {
  const { document: t } = pt(), [e] = ue(), [n] = oe(), r = te(Number.NEGATIVE_INFINITY);
  return z(() => {
    var o;
    r.current = ((o = t == null ? void 0 : t.defaultView) == null ? void 0 : o.performance.now()) ?? Number.NEGATIVE_INFINITY;
  }, [e, n, t]), z(() => {
    const o = t == null ? void 0 : t.defaultView;
    if (!o) return;
    let s = o.scrollY, i = Number.NEGATIVE_INFINITY, a = Number.NEGATIVE_INFINITY;
    const c = () => {
      i = o.performance.now(), s = o.scrollY, a = Number.NEGATIVE_INFINITY, va();
    }, d = () => {
      const u = Fm();
      if (u !== null) {
        const h = o.document.documentElement;
        s = Ec(u.target, h.scrollHeight, o.innerHeight), a = u.until, o.performance.now() > u.until + Sc && _c();
      }
      const f = $m({
        scrollY: o.scrollY,
        intended: s,
        lastGestureAt: i,
        // The hold window runs from the END of the editor's own animation, not from the selection
        // that started it — otherwise a 260ms glide would spend most of its own protection.
        lastEditAt: Math.max(r.current, a),
        glideUntil: a,
        now: o.performance.now()
      });
      if (f !== "glide") {
        if (f === "restore") {
          o.scrollTo({ top: s, behavior: qr });
          return;
        }
        f === "adopt" && (s = o.scrollY);
      }
    }, p = (u) => {
      const f = u.target;
      f && typeof f.closest == "function" && qm(f) !== null || c();
    };
    for (const u of ya)
      o.addEventListener(u, u === "pointerdown" ? p : c, {
        passive: !0,
        capture: !0
      });
    return o.addEventListener("scroll", d, { passive: !0 }), () => {
      for (const u of ya)
        o.removeEventListener(u, u === "pointerdown" ? p : c, {
          capture: !0
        });
      o.removeEventListener("scroll", d), va();
    };
  }, [t]), null;
};
function Dn(t, e) {
  z(() => {
    const n = me.subscribe(t, e);
    return () => n();
  }, [t, e]);
}
const n0 = () => {
  const [, t] = oe(), [e, n] = He(), { document: r } = pt(), { clearHighlight: o } = At(), [s] = oe(), [i] = D(wi);
  return z(() => {
    setTimeout(() => {
      if (!F(e))
        return;
      const a = Vc(r, ye(s));
      if (a) {
        const c = a.getAttribute("data-style-prop");
        if (c) {
          const d = a.getAttribute("data-style-id"), p = a.getAttribute("data-block-parent");
          n([{ id: d, prop: c, blockId: p }]);
        }
      }
    }, 100);
  }, [r, s, n, e]), z(() => () => o(), [o]), Dn(se.CANVAS_BLOCK_SELECTED, (a) => {
    a && (!F(a) && !Ie(s, ye(a)) && (i == null || i.closeAll()), t(a));
  }), Dn(
    se.CANVAS_BLOCK_STYLE_SELECTED,
    (a) => {
      if (!a) return;
      const { blockId: c, styleId: d, styleProp: p } = a;
      c && (Ie(s, c) || i == null || i.closeAll(), n([{ id: d, prop: p, blockId: c }]), t([c]));
    }
  ), Dn(se.CLEAR_CANVAS_SELECTION, () => {
    o(), t([]), n([]);
  }), null;
}, r0 = () => {
  const [t] = Vi(), [, e] = Mc(), n = te(null), r = te(null), [o, s] = $({ width: 0, height: 0 }), i = e0(o), [, a] = Jn(), c = G("loading", !1), d = G("htmlDir", "ltr"), p = G("tailwindCSS", "4"), u = G("tailwindScriptUrl", void 0), { onDragOver: f, onDrop: h, onDragEnd: g } = Rr(), m = ug(), y = B(
    (w) => {
      s((S) => ({ ...S, width: w }));
    },
    [s]
  );
  z(() => {
    if (!r.current) return;
    const { clientWidth: w, clientHeight: S } = r.current;
    s({ width: w, height: S });
  }, [r, t]);
  const x = M(
    () => Wc({ htmlDir: d, tailwindCSS: p, tailwindScriptUrl: u }),
    [d, p, u]
  );
  return /* @__PURE__ */ l(ob, { onMount: y, onResize: y, children: /* @__PURE__ */ l(
    "div",
    {
      onMouseLeave: () => setTimeout(() => e(""), 300),
      className: "relative mx-auto h-full w-full overflow-hidden",
      onDragOver: f,
      onDrop: h,
      onDragEnd: g,
      ref: r,
      children: /* @__PURE__ */ b(
        Mg,
        {
          contentDidMount: () => a(n.current),
          ref: n,
          id: "canvas-iframe",
          style: { ...i, ...F(i) ? { width: `${t}px` } : {} },
          className: "relative mx-auto box-content h-full w-full max-w-full shadow-lg transition-all duration-300 ease-linear",
          initialContent: x,
          children: [
            /* @__PURE__ */ l(Fg, {}),
            /* @__PURE__ */ l(Ag, {}),
            /* @__PURE__ */ l(eb, {}),
            /* @__PURE__ */ b(Tp, { children: [
              /* @__PURE__ */ b(Eg, { children: [
                c ? /* @__PURE__ */ l("div", { className: "h-full p-4", children: /* @__PURE__ */ l(Hn, { className: "h-full" }) }) : /* @__PURE__ */ l(Jx, {}),
                /* @__PURE__ */ l(zg, {})
              ] }),
              /* @__PURE__ */ l(n0, {}),
              /* @__PURE__ */ l(t0, {})
            ] }),
            m.isVisible && /* @__PURE__ */ l(
              "div",
              {
                id: "placeholder",
                className: `pointer-events-none absolute z-[99999] max-w-full transition-all duration-150 ${m.isEmpty ? "bg-purple-500/10 outline-dashed outline-2 -outline-offset-2 outline-purple-500" : "rounded-full bg-green-500"}`,
                style: {
                  top: m.top,
                  left: m.left,
                  width: m.width,
                  height: m.height
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
}, o0 = P(null), tu = () => D(o0), s0 = ne.lazy(() => import("./code-editor-COosMH-5.js")), i0 = () => {
  const [t] = tu(), e = G("onError", Ct);
  return /* @__PURE__ */ l("div", { className: "flex h-full max-h-full w-full flex-1 flex-col", children: /* @__PURE__ */ b("div", { className: "relative flex h-full max-h-full flex-col overflow-hidden bg-gray-100/40", children: [
    /* @__PURE__ */ l(Ge, { fallback: /* @__PURE__ */ l(Hn, { className: "h-full" }), children: /* @__PURE__ */ l(on, { fallback: /* @__PURE__ */ l(ur, {}), onError: e, children: /* @__PURE__ */ l(r0, {}) }) }),
    t ? /* @__PURE__ */ l(Ge, { fallback: /* @__PURE__ */ l(Hn, { className: "h-full" }), children: /* @__PURE__ */ l(s0, {}) }) : null
  ] }) });
}, jn = {
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
}, a0 = ({ id: t, placeholder: e }) => {
  const { t: n } = K(), [, r] = tu(), { selectedLang: o } = Je(), s = ae(), i = t.replace("root.", ""), a = Oe(s == null ? void 0 : s._type), d = Ie(_(a, "i18nProps", []), i) && o ? `${i}-${o}` : i, p = _(s, d, ""), u = M(() => _(jn, o, o), [o]), f = () => {
    const h = s == null ? void 0 : s._id;
    r({ blockId: h, blockProp: d, placeholder: e, initialCode: p });
  };
  return /* @__PURE__ */ b("div", { className: "mt-2 flex flex-col gap-y-1", children: [
    /* @__PURE__ */ b("label", { htmlFor: t, children: [
      "HTML Code",
      u && /* @__PURE__ */ b("small", { className: "text-[9px] text-zinc-400", children: [
        " ",
        u
      ] })
    ] }),
    /* @__PURE__ */ l(
      "button",
      {
        onClick: f,
        className: "w-[90%] max-w-full cursor-default truncate text-pretty rounded border border-border bg-background p-2 text-left text-[10px]",
        children: p.trim().length > 0 ? p.substring(0, 46) : e || "Eg: <script>console.log('Hello, world!');<\/script>"
      }
    ),
    /* @__PURE__ */ l(re, { onClick: f, size: "sm", variant: "outline", className: "w-fit", children: n("Open code editor") })
  ] });
}, l0 = ({ id: t, value: e, onChange: n, onBlur: r }) => {
  const o = G("collections", []), s = ae(), i = _(s, "repeaterItems", "").replace(/\{\{(.*)\}\}/g, "$1").replace(Mt, ""), a = ee(o, { id: i }), d = _(a, t === "root.filter" ? "filters" : "sorts", []);
  return /* @__PURE__ */ l("div", { children: /* @__PURE__ */ b("select", { value: e, onChange: (p) => n(p.target.value), onBlur: (p) => r(t, p.target.value), children: [
    /* @__PURE__ */ l("option", { value: "", children: "Select" }),
    d.map((p) => /* @__PURE__ */ l("option", { value: p.id, children: p.name }, p.id))
  ] }) });
}, c0 = Gs(() => import("./IconPicker-rQ96umcu.js").then((t) => ({ default: t.IconPicker }))), d0 = (t) => {
  try {
    let e = t.replace(/<svg([^>]*)\sheight="[^"]*"([^>]*)>/gi, "<svg$1$2>").replace(/<svg([^>]*)\swidth="[^"]*"([^>]*)>/gi, "<svg$1$2>");
    return e = e.replace(/>\s+</g, "><"), e = e.replace(/\n/g, "").replace(/\s{2,}/g, " "), e = e.replace(/\s+=/g, "=").replace(/=\s+/g, "="), e = e.replace(/<!--[\s\S]*?-->/g, ""), e.trim();
  } catch {
    return t;
  }
}, u0 = ({ value: t, onChange: e, id: n }) => {
  const { t: r } = K(), [o, s] = $(t || "");
  z(() => {
    s(t || "");
  }, [t]);
  const i = (a) => {
    s(a);
    const c = d0(a);
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
      /* @__PURE__ */ l(Ge, { fallback: /* @__PURE__ */ l("div", { className: "text-xs text-muted-foreground", children: "Loading..." }), children: /* @__PURE__ */ l(c0, { onSelectIcon: i }) }),
      /* @__PURE__ */ l("p", { className: "text-xs text-muted-foreground", children: r("Paste SVG_code") })
    ] })
  ] });
}, Ho = xe.Root, p0 = xe.Trigger, f0 = xe.Portal, nu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
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
nu.displayName = xe.Overlay.displayName;
const Or = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ b(f0, { children: [
  /* @__PURE__ */ l(nu, {}),
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
Or.displayName = xe.Content.displayName;
const Vo = ({ className: t, ...e }) => /* @__PURE__ */ l("div", { className: j("flex flex-col space-y-1.5 text-center sm:text-left", t), ...e });
Vo.displayName = "DialogHeader";
const h0 = ({ className: t, ...e }) => /* @__PURE__ */ l("div", { className: j("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t), ...e });
h0.displayName = "DialogFooter";
const Mr = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  xe.Title,
  {
    ref: n,
    className: j("text-lg font-semibold leading-none tracking-tight", t),
    ...e
  }
));
Mr.displayName = xe.Title.displayName;
const m0 = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(xe.Description, { ref: n, className: j("text-sm text-muted-foreground", t), ...e }));
m0.displayName = xe.Description.displayName;
const to = ({
  assetId: t,
  children: e,
  onSelect: n,
  mode: r = "image"
}) => {
  const [o, s] = $(!1), i = Sp();
  return /* @__PURE__ */ b(Ho, { open: o, onOpenChange: (c) => s(c), children: [
    /* @__PURE__ */ l(p0, { asChild: !0, children: e }),
    /* @__PURE__ */ b(Or, { className: "flex max-h-[90vh] max-w-7xl border-border md:w-fit", children: [
      /* @__PURE__ */ l(Mr, { className: "sr-only", children: "Media Manager" }),
      /* @__PURE__ */ l("div", { className: "h-full w-full", children: i ? /* @__PURE__ */ l(i, { close: () => s(!1), onSelect: (...c) => {
        n.call(void 0, ...c), s(!1);
      }, mode: r, assetId: t }) : null })
    ] })
  ] });
};
to.displayName = "MediaManagerModal";
function g0(t, e, n) {
  if (!t) return t;
  const { baseClasses: r, classes: o } = wn(t), s = (c) => c.split(" ").filter((d) => d && !(e && d === "w-full") && !(n && d === "h-full")).join(" "), i = s(r), a = s(o);
  return `${St}${i},${a}`;
}
const Ur = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2Q1ZDdkYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIFBsYWNlaG9sZGVyPC90ZXh0Pjwvc3ZnPg==", b0 = (t) => {
  var o;
  if (!t || Re(t, "data")) return "";
  const e = ((o = t.split("/").pop()) == null ? void 0 : o.split("?")[0]) || "";
  return [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".bmp", ".ico", ".avif"].some((s) => e.toLowerCase().endsWith(s)) ? e : "";
}, y0 = ({ value: t, onChange: e, id: n, onBlur: r, uiSchema: o }) => {
  const { t: s } = K(), { selectedLang: i } = Je(), a = ae(), c = _t(), d = Yn(), p = (o == null ? void 0 : o["ui:allowEmpty"]) === !0, u = n.split(".").pop() || "", f = i ? `_${u}Id-${i}` : `_${u}Id`, h = F(i) && (a == null ? void 0 : a._type) === "Image" && le(a, "assetId"), g = _(a, f, h ? a == null ? void 0 : a.assetId : ""), m = M(() => {
    if (!t || !a || !/\{\{.*?\}\}/.test(t)) return t;
    const N = { ...a, [u]: t }, T = Vl(N, d, { index: -1, key: "" });
    return _(T, u, t);
  }, [t, a, d, u]), y = !!g || m !== Ur && m !== "", x = (v) => {
    const N = kr(v) ? ye(v) : v;
    if (N) {
      e(N == null ? void 0 : N.url);
      const T = N == null ? void 0 : N.width, k = N == null ? void 0 : N.height, C = f.includes("mobile");
      if (a != null && a._id) {
        const E = {
          ...T && { [C ? "mobileWidth" : "width"]: T },
          ...k && { [C ? "mobileHeight" : "height"]: k },
          ...N.description && { alt: N.description }
        };
        if (Ue(E, f, N.id), (T || k) && (a != null && a._type) && (a != null && a.styles)) {
          const I = qs(a._type), L = _(I, "styles", "");
          a.styles === L && (E.styles = g0(a.styles, T, k));
        }
        if (F(E)) return;
        c([a._id], E);
      }
    }
  }, w = B(() => {
    if (e(p ? "" : Ur), a != null && a._id) {
      const N = {}, T = f.includes("mobile");
      Ue(N, f, ""), Ue(N, T ? "mobileWidth" : "width", ""), Ue(N, T ? "mobileHeight" : "height", ""), c([a._id], N);
    }
  }, [a, e, c, f, p]), S = b0(m);
  return /* @__PURE__ */ b("div", { className: "mt-1.5 flex items-start gap-x-3", children: [
    m ? /* @__PURE__ */ b("div", { className: "group relative", children: [
      /* @__PURE__ */ l(
        "img",
        {
          src: m,
          className: "h-[72px] w-[72px] overflow-hidden rounded-md border border-border object-cover transition duration-200 " + (g && g !== "" ? "cursor-pointer group-hover:blur-sm" : ""),
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
      g && g !== "" && /* @__PURE__ */ l(to, { onSelect: x, assetId: g, children: /* @__PURE__ */ l(
        "button",
        {
          type: "button",
          className: "absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/10 opacity-0 transition duration-200 group-hover:bg-black/30 group-hover:opacity-100",
          children: /* @__PURE__ */ l(_o, { className: "h-4 w-4 text-white" })
        }
      ) })
    ] }) : /* @__PURE__ */ l(to, { onSelect: x, mode: "image", assetId: g, children: /* @__PURE__ */ l("div", { className: "h-[72px] w-[72px] cursor-pointer rounded-md border border-border bg-[radial-gradient(#AAA,transparent_1px)] duration-300 [background-size:10px_10px]" }) }),
    /* @__PURE__ */ b("div", { className: "flex w-3/5 flex-col", children: [
      /* @__PURE__ */ b(Q, { children: [
        /* @__PURE__ */ l("p", { className: "max-w-[250px] truncate pr-2 text-xs text-gray-400", children: S }),
        /* @__PURE__ */ l(to, { onSelect: x, assetId: "", children: /* @__PURE__ */ l("small", { className: "mb-1 h-6 w-full cursor-pointer rounded-md bg-secondary px-1 py-1 text-center text-xs text-secondary-foreground hover:bg-secondary/80", children: !F(m) && m !== Ur ? s("Replace image") : s("Choose image") }) }),
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
          value: t === Ur ? "" : t,
          onBlur: ({ target: { value: v } }) => r(n, v),
          onChange: (v) => e(v.target.value)
        }
      )
    ] })
  ] });
}, x0 = Qs(
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
function ji({ className: t, variant: e, ...n }) {
  return /* @__PURE__ */ l("div", { className: j(x0({ variant: e }), t), ...n });
}
const Ms = zn.Provider, Ne = zn.Root, Se = zn.Trigger, be = W.forwardRef(({ className: t, sideOffset: e = 4, ...n }, r) => /* @__PURE__ */ l(zn.Portal, { children: /* @__PURE__ */ l(
  zn.Content,
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
be.displayName = zn.Content.displayName;
const ru = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
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
ru.displayName = tt.displayName;
const ou = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ b("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ l(Il, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
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
ou.displayName = tt.Input.displayName;
const su = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  tt.List,
  {
    ref: n,
    className: j("max-h-[300px] overflow-y-auto overflow-x-hidden", t),
    ...e
  }
));
su.displayName = tt.List.displayName;
const iu = W.forwardRef((t, e) => /* @__PURE__ */ l(tt.Empty, { ref: e, className: "py-6 text-center text-sm", ...t }));
iu.displayName = tt.Empty.displayName;
const au = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
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
au.displayName = tt.Group.displayName;
const w0 = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(tt.Separator, { ref: n, className: j("-mx-1 h-px bg-border", t), ...e }));
w0.displayName = tt.Separator.displayName;
const Ds = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
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
Ds.displayName = tt.Item.displayName;
const Wi = hr.Root, Gi = hr.Trigger, jo = W.forwardRef(({ className: t, align: e = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ l(hr.Portal, { children: /* @__PURE__ */ l(
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
jo.displayName = hr.Content.displayName;
const v0 = ({ data: t, onSelect: e, dataType: n }) => {
  const [r, o] = ne.useState([]), [s, i] = ne.useState(t), a = (u) => Array.isArray(u) ? "array" : typeof u == "object" && u !== null ? "object" : "value", c = ne.useCallback(
    (u) => {
      const f = (h) => n === "value" ? h === "value" || h === "object" : n === "array" ? h === "array" : h === n;
      u.type === "object" ? (o((h) => [...h, u.key]), i(u.value)) : f(u.type) && e([...r, u.key].join("."), n);
    },
    [r, e, n]
  ), d = ne.useCallback(() => {
    if (r.length > 0) {
      const u = r.slice(0, -1);
      o(u), i(u.reduce((f, h) => f[h], t));
    }
  }, [r, t]), p = ne.useMemo(() => s ? Object.entries(s).map(([u, f]) => ({ key: u, value: f, type: a(f) })).filter((u) => !Re(u.key, ar) && u.key.includes("/") ? !1 : n === "value" ? u.type === "value" || u.type === "object" : n === "array" ? u.type === "array" || u.type === "object" : n === "object" ? u.type === "object" : !0) : [], [s, n]);
  return /* @__PURE__ */ b(ru, { className: "fields-command", children: [
    /* @__PURE__ */ l(ou, { className: "border-none", placeholder: "Search..." }),
    /* @__PURE__ */ b(su, { children: [
      /* @__PURE__ */ l(iu, { children: Pn("No option found.") }),
      /* @__PURE__ */ b(au, { children: [
        r.length > 0 && /* @__PURE__ */ b(Ds, { onSelect: d, className: "flex items-center text-sm", children: [
          /* @__PURE__ */ l(Bl, { className: "mr-2 h-4 w-4" }),
          Pn("Back")
        ] }),
        p.map((u) => /* @__PURE__ */ b(
          Ds,
          {
            value: u.key,
            disabled: !1,
            onSelect: () => c(u),
            className: "flex items-center justify-between",
            children: [
              /* @__PURE__ */ b("span", { className: "flex items-center gap-x-2", children: [
                Re(u.key, ar) ? /* @__PURE__ */ l(Rl, {}) : Re(u.key, Mt) ? /* @__PURE__ */ l(Ll, {}) : null,
                Re(u.key, ar) ? Pn("Repeater Data") : Re(u.key, Mt) ? u.key.replace(Mt, "") : u.key
              ] }),
              /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
                n === "object" && u.type === "object" && /* @__PURE__ */ l(
                  re,
                  {
                    size: "sm",
                    variant: "ghost",
                    className: "h-6 px-2 hover:bg-primary hover:text-primary-foreground",
                    onClick: (f) => {
                      f.stopPropagation(), e([...r, u.key].join("."), n);
                    },
                    children: Pn("Select")
                  }
                ),
                u.type === "object" && /* @__PURE__ */ l("div", { className: "cursor-pointer rounded p-1 hover:bg-muted", children: /* @__PURE__ */ l(Un, { className: "h-4 w-4 opacity-50" }) })
              ] })
            ]
          },
          u.key
        ))
      ] })
    ] })
  ] });
};
function lu({ data: t, onSelect: e, dataType: n = "value" }) {
  const [r, o] = ne.useState(!1), s = G("collections", []), i = ne.useMemo(() => n === "array" ? { ...s.map((c) => c.id).reduce((c, d) => ({ ...c, [Mt + d]: [] }), {}), ...t } : t, [t, s, n]);
  return /* @__PURE__ */ b(Wi, { open: r, onOpenChange: o, children: [
    /* @__PURE__ */ b(Ne, { children: [
      /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(Gi, { asChild: !0, children: /* @__PURE__ */ l(
        re,
        {
          size: "sm",
          variant: "ghost",
          className: "h-5 rounded-sm px-1 py-0 text-[9px] text-muted-foreground",
          role: "combobox",
          "aria-label": Pn("Add field"),
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
      /* @__PURE__ */ l(be, { children: Pn("Add field") })
    ] }),
    /* @__PURE__ */ l(jo, { className: "z-[1000]! relative mr-3 w-[300px] p-0", children: /* @__PURE__ */ l(
      v0,
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
const cu = ({
  schema: t,
  onChange: e,
  id: n,
  formData: r
}) => {
  const o = Yn(), s = G("flags.dataBinding", !0), i = Th(), a = ae(), c = M(() => {
    if (i.length === 1) return "";
    const u = i.find((g) => g._type === "Repeater"), h = _(u, "repeaterItems", "").replace(/\{\{(.*)\}\}/g, "$1");
    return `${ar}${Re(h, Mt) ? `${h}/${u == null ? void 0 : u._id}` : h}`;
  }, [i]), d = M(() => ye(_(o, c.replace(ar, ""), [])), [c, o]), p = B(
    (u, f) => {
      if (u = F(c) ? u : u.replace(`${c}`, "$index"), f === "array" || f === "object") {
        e(`{{${u}}}`, {}, n);
        return;
      }
      const h = (x) => /[.,!?;:]/.test(x), g = (x, w, S) => {
        let v = "", N = "";
        const T = w > 0 ? x[w - 1] : "", k = w < x.length ? x[w] : "";
        return w > 0 && (T === "." || !h(T) && T !== " ") && (v = " "), w < x.length && !h(k) && k !== " " && (N = " "), {
          text: v + S + N,
          prefixLength: v.length,
          suffixLength: N.length
        };
      }, m = document.getElementById(n);
      if (!m) return;
      const y = document.getElementById(`chai-rte-${n}`) || document.getElementById(`chai-rte-modal-${n}`);
      if (y && (y.querySelector(".ProseMirror") || y.__chaiRTE)) {
        const x = y.__chaiRTE;
        if (x) {
          const w = `{{${u}}}`;
          x.commands.focus();
          const { from: S, to: v } = x.state.selection;
          if (S !== v)
            x.chain().deleteSelection().insertContent(w).run();
          else {
            const { state: T } = x, k = T.selection.from, C = T.doc.textBetween(Math.max(0, k - 1), k), E = T.doc.textBetween(k, Math.min(k + 1, T.doc.content.size));
            let I = "";
            k > 0 && C !== " " && !h(C) && (I = " ");
            let L = "";
            E && E !== " " && !h(E) && (L = " "), x.chain().insertContent(I + w + L).run();
          }
          setTimeout(() => e(x.getHTML(), {}, n), 100);
          return;
        }
      } else {
        const x = m, w = x.selectionStart || 0, S = x.value || "", v = x.selectionEnd || w;
        if (v > w) {
          const E = `{{${u}}}`, { text: I } = g(S, w, E), L = S.slice(0, w) + I + S.slice(v);
          e(L, {}, n);
          return;
        }
        const T = `{{${u}}}`, { text: k } = g(S, w, T), C = S.slice(0, w) + k + S.slice(w);
        e(C, {}, n);
      }
    },
    [n, e, r, a == null ? void 0 : a._id, c]
  );
  return s ? /* @__PURE__ */ l(
    lu,
    {
      data: {
        ...d && { [c]: d },
        ...o
      },
      onSelect: p,
      dataType: t.binding === "array" ? "array" : "value"
    }
  ) : null;
}, k0 = (t) => {
  const { id: e, classNames: n, label: r, children: o, errors: s, help: i, hidden: a, required: c, schema: d, formData: p, onChange: u } = t, { selectedLang: f, fallbackLang: h, languages: g } = Je(), m = M(
    () => F(g) ? "" : F(f) ? h : f,
    [g, f, h]
  ), y = M(() => _(jn, m, m), [m]), x = Yn(), w = ae(), S = Zs(), v = M(
    () => _(S, [w == null ? void 0 : w._type, "i18nProps"], []),
    [S, w == null ? void 0 : w._type]
  ), [N, T] = $(null);
  if (a)
    return null;
  if (d.type === "boolean") return /* @__PURE__ */ l("div", { className: n, children: o });
  const C = v == null ? void 0 : v.includes(e.replace("root.", ""));
  if (d.type === "array") {
    const L = N === e;
    return /* @__PURE__ */ b("div", { className: `${n} relative`, children: [
      d.title && /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-1", children: /* @__PURE__ */ b(
        "label",
        {
          htmlFor: e,
          onClick: () => T(L ? null : e),
          className: "flex cursor-pointer items-center gap-x-1 py-1 leading-tight duration-200 hover:bg-slate-100",
          children: [
            L ? /* @__PURE__ */ l(xn, { className: "h-3 w-3" }) : /* @__PURE__ */ l(Un, { className: "h-3 w-3" }),
            /* @__PURE__ */ l(ks, { className: "h-3 w-3" }),
            /* @__PURE__ */ l("span", { className: "leading-tight", children: r }),
            " ",
            /* @__PURE__ */ l(ji, { className: "m-0 bg-gray-200 px-2 leading-tight text-gray-500 hover:bg-gray-200 hover:text-gray-500", children: /* @__PURE__ */ l("span", { className: "text-[9px] font-medium text-slate-600", children: p == null ? void 0 : p.length }) }),
            d.description && /* @__PURE__ */ l(Ms, { children: /* @__PURE__ */ b(Ne, { children: [
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
      (p == null ? void 0 : p.length) === 0 ? /* @__PURE__ */ l("div", { className: "h-0 overflow-hidden", children: o }) : /* @__PURE__ */ b("div", { className: `${L ? "pt-0.5" : "h-0 overflow-hidden"}`, children: [
        o,
        s,
        i
      ] })
    ] });
  }
  const E = e.replace("root.", ""), I = v.includes(E) && !F(f) && F(p);
  return /* @__PURE__ */ b("div", { className: n, children: [
    d.title && /* @__PURE__ */ b("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ b("label", { htmlFor: e, className: d.type === "object" ? "pb-2" : "", children: [
          r,
          " ",
          C && /* @__PURE__ */ b("small", { className: "text-[9px] text-zinc-400", children: [
            " ",
            y
          ] }),
          c && d.type !== "object" ? " *" : null
        ] }),
        d.description && /* @__PURE__ */ l(Ms, { children: /* @__PURE__ */ b(Ne, { children: [
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
          cu,
          {
            schema: d,
            onChange: (L) => {
              u(L, p, e);
            },
            id: e,
            formData: p
          }
        )
      ] })
    ] }),
    o,
    s,
    i
  ] });
}, C0 = ({ href: t, onChange: e }) => {
  const { t: n } = K(), r = G("searchPageTypeItems", (v, N) => []), [o, s] = $(!1), [i, a] = $(!1), [c, d] = $(""), [p, u] = $([]), [f, h] = $(-1), g = te(null);
  z(() => {
    if (d(""), u([]), h(-1), a(!1), !t || o || !Re(t, "pageType:")) return;
    const v = pp(t, ":");
    (async () => {
      const N = await r("", [_(v, 2, "page")]);
      N && Array.isArray(N) && d(_(N, [0, "name"], ""));
    })();
  }, [t]);
  const m = dt(
    async (v) => {
      if (F(v))
        u([]);
      else {
        const N = await r("", v);
        u(N);
      }
      s(!1), h(-1);
    },
    [],
    300
  ), y = (v) => {
    const N = ["pageType", v.pageType || "page", v.primaryPage ?? v.id];
    e(N.join(":")), d(v.name), a(!1), u([]), h(-1);
  }, x = (v) => {
    switch (v.key) {
      case "ArrowDown":
        v.preventDefault(), h((N) => N < p.length - 1 ? N + 1 : N);
        break;
      case "ArrowUp":
        v.preventDefault(), h((N) => N > 0 ? N - 1 : N);
        break;
      case "Enter":
        if (v.preventDefault(), p.length === 0) return;
        f >= 0 && y(p[f]);
        break;
      case "Escape":
        v.preventDefault(), w();
        break;
    }
  };
  z(() => {
    if (f >= 0 && g.current) {
      const v = g.current.children[f];
      v == null || v.scrollIntoView({ block: "nearest" });
    }
  }, [f]);
  const w = () => {
    d(""), u([]), h(-1), a(!1), e("");
  }, S = (v) => {
    d(v), a(!F(v)), s(!0), m(v);
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
    (o || !F(p) || i && F(p)) && /* @__PURE__ */ l("div", { className: "absolute z-40 mt-2 max-h-40 w-full max-w-[250px] overflow-y-auto rounded-md border border-border bg-background shadow-lg", children: o ? /* @__PURE__ */ b("div", { className: "space-y-1 p-2", children: [
      /* @__PURE__ */ l("div", { className: "h-6 w-full animate-pulse rounded bg-gray-200" }),
      /* @__PURE__ */ l("div", { className: "h-6 w-full animate-pulse rounded bg-gray-200" })
    ] }) : i && F(p) ? /* @__PURE__ */ b("div", { className: "flex items-center justify-center p-4 text-sm text-gray-500", children: [
      n("No results found for"),
      ' "',
      c,
      '"'
    ] }) : /* @__PURE__ */ l("ul", { ref: g, children: A(p == null ? void 0 : p.slice(0, 20), (v, N) => /* @__PURE__ */ b(
      "li",
      {
        onClick: () => y(v),
        className: `cursor-pointer p-2 text-xs ${t != null && t.includes(v.id) ? "bg-blue-200" : N === f ? "bg-gray-100" : "hover:bg-gray-100"}`,
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
}, N0 = ({ schema: t, formData: e, onChange: n, name: r }) => {
  const { t: o } = K(), { type: s = "pageType", href: i = "", target: a = "self" } = e ?? {}, c = G("pageTypes", []), { selectedLang: d, fallbackLang: p, languages: u } = Je(), f = M(
    () => F(u) ? "" : F(d) ? p : d,
    [u, d, p]
  ), h = M(() => _(jn, f, f), [f]), g = s === "pageType" && F(c) ? "url" : s;
  return /* @__PURE__ */ b("div", { children: [
    /* @__PURE__ */ b("span", { className: "flex items-center justify-between gap-x-2 text-xs font-medium", children: [
      /* @__PURE__ */ b("span", { children: [
        (t == null ? void 0 : t.title) ?? "Link",
        /* @__PURE__ */ l("span", { className: "pl-1 text-[9px] text-zinc-400", children: h })
      ] }),
      /* @__PURE__ */ l(
        cu,
        {
          schema: t,
          onChange: (m) => {
            n({ ...e, href: m, ...g === "pageType" ? { type: "url" } : {} });
          },
          id: `root.${r}.href`,
          formData: e
        }
      )
    ] }),
    /* @__PURE__ */ b("div", { className: "flex flex-col gap-y-1.5", children: [
      /* @__PURE__ */ l("select", { name: "type", value: s, onChange: (m) => n({ ...e, type: m.target.value }), children: A(
        [
          ...F(c) ? [] : [{ const: "pageType", title: o("Goto Page") }],
          { const: "url", title: o("Open URL") },
          { const: "email", title: o("Compose Email") },
          { const: "telephone", title: o("Call Phone") },
          { const: "scroll", title: o("Scroll to element") }
        ],
        (m) => /* @__PURE__ */ l("option", { value: m.const, children: m.title }, m.const)
      ) }),
      g === "pageType" && !F(c) ? /* @__PURE__ */ l(C0, { href: i, onChange: (m) => n({ ...e, href: m }) }) : null,
      /* @__PURE__ */ l(
        "input",
        {
          id: `root.${r}.href`,
          autoCapitalize: "off",
          autoCorrect: "off",
          spellCheck: "false",
          name: "href",
          type: "text",
          className: g === "pageType" ? "!hidden" : "",
          value: i,
          onChange: (m) => n({ ...e, href: m.target.value }),
          placeholder: o(s === "url" ? "Enter URL" : s === "scroll" ? "#ElementID" : "Enter details")
        }
      ),
      g === "url" && /* @__PURE__ */ b("div", { className: "flex items-center gap-x-2 text-muted-foreground", children: [
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
}, S0 = ({ value: t, onChange: e }) => {
  var s;
  if (!t)
    return /* @__PURE__ */ b("div", { className: "mt-1 flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-2 py-1.5 text-xs text-gray-500 text-gray-600", children: [
      /* @__PURE__ */ l(Up, { className: "h-4 w-4" }),
      " Choose a collection"
    ] });
  const n = `{{${Mt}`, r = t == null ? void 0 : t.startsWith(n);
  let o = t;
  return r && (o = (s = t == null ? void 0 : t.replace(n, "")) == null ? void 0 : s.replace("}}", "")), /* @__PURE__ */ l("div", { className: "mt-1 flex flex-col gap-1", children: /* @__PURE__ */ b("div", { className: "flex items-center justify-between gap-2 rounded-md border border-blue-200 bg-blue-50 px-2 py-1 text-xs text-blue-600", children: [
    /* @__PURE__ */ b("span", { className: "flex max-w-[200px] items-center gap-2", children: [
      " ",
      r ? /* @__PURE__ */ l(Ll, { className: "h-3 min-h-3 w-3 min-w-3" }) : null,
      /* @__PURE__ */ b(Ne, { delayDuration: 500, children: [
        /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l("span", { className: "cursor-default truncate", children: o }) }),
        /* @__PURE__ */ l(be, { side: "left", hidden: o.length < 50, children: o })
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
}, du = P((t) => {
  var i;
  const e = t(Fe), n = t(Er), r = n.length === 1 ? n[0] : null;
  if (!r) return null;
  const o = ee(e, { _id: r });
  if (!o) return null;
  let s = o._parent;
  for (; s; ) {
    const a = ee(e, { _id: s });
    if (!a) return null;
    if ((i = Oe(a._type)) != null && i.wrapper)
      return a;
    s = a._parent;
  }
  return null;
});
du.debugLabel = "wrapperBlockAtom";
const Ui = () => Ke(du), E0 = () => {
  const t = ae(), e = Ui(), { addCoreBlock: n } = Nn();
  if (!t && !e) return null;
  const r = (t == null ? void 0 : t._type) === "Row" ? t : e;
  return /* @__PURE__ */ l("div", { className: "pt-1", children: /* @__PURE__ */ b(
    "button",
    {
      type: "button",
      className: "duratiom-300 flex items-center gap-x-1 rounded border border-gray-400 bg-gray-100 px-4 py-1 text-[11px] font-medium leading-tight hover:bg-slate-200",
      onClick: () => n({ type: "Column", styles: "#styles:," }, r == null ? void 0 : r._id),
      children: [
        /* @__PURE__ */ l(Ze, { className: "h-4 w-4" }),
        " Add Column"
      ]
    }
  ) });
}, _0 = ne.lazy(() => import("./rte-widget-modal-Bqwm1UkH.js")), A0 = ({ blockId: t, id: e, placeholder: n, value: r, onChange: o, onBlur: s }) => {
  const i = te(null), [a, c] = $(!1), d = Jd({
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
  const p = () => {
    c(!1);
  }, u = /* @__PURE__ */ b("div", { id: `chai-rte-${e}`, ref: i, className: "mt-1 rounded-md border border-input", children: [
    /* @__PURE__ */ l(td, { editor: d, onExpand: () => c(!0) }),
    /* @__PURE__ */ l(
      jl,
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
    a && /* @__PURE__ */ l(Ge, { fallback: /* @__PURE__ */ l("div", { children: "Loading..." }), children: /* @__PURE__ */ l(_0, { isOpen: a, onClose: p, editor: d, rteElement: u }) }),
    a ? /* @__PURE__ */ l("div", { children: "Open in modal" }) : /* @__PURE__ */ l("div", { className: "relative", children: u })
  ] });
}, T0 = (t) => {
  const { editingBlockId: e } = Sn(), [n, r] = $(null), o = ae(), s = o == null ? void 0 : o._id;
  return z(() => {
    r(s);
  }, [s]), n && n !== e ? /* @__PURE__ */ l(A0, { ...t, blockId: n }, n) : null;
}, I0 = ({ formData: t, onChange: e }) => {
  const [n] = ue(), r = ae(), o = Ui(), { addCoreBlock: s } = Nn(), [, i] = oe(), a = (r == null ? void 0 : r._type) === "Slider" ? r : o, c = ee(n, { _parent: a == null ? void 0 : a._id, _type: "Slides" }), d = Z(n, { _parent: c == null ? void 0 : c._id, _type: "Slide" }), p = (t == null ? void 0 : t.currentSlide) || _(d, "0._id");
  if (z(() => {
    (r == null ? void 0 : r._type) === "Slide" && (t == null ? void 0 : t.currentSlide) !== (r == null ? void 0 : r._id) && e({ ...t, currentSlide: r == null ? void 0 : r._id });
  }, [r]), z(() => {
    d != null && d.length && !ee(d, { _id: t == null ? void 0 : t.currentSlide }) && e({ ...t, currentSlide: _(d, "0._id") });
  }, [t, d]), !r && !o || !c) return null;
  const u = () => {
    const g = ir(d, { _id: p });
    if (g > -1) {
      const m = (g + 1) % d.length, y = _(d, [m, "_id"]);
      if (!y) return;
      e({ ...t, currentSlide: y }), i([y]);
    }
  }, f = () => {
    const g = ir(d, { _id: p });
    if (g > -1) {
      const m = (g - 1 + d.length) % d.length, y = _(d, [m, "_id"]);
      if (!y) return;
      e({ ...t, currentSlide: y }), i([y]);
    }
  }, h = () => {
    const g = s(
      { styles: "#styles:,h-full w-full min-w-full", type: "Slide" },
      c == null ? void 0 : c._id
    ), m = g == null ? void 0 : g._id;
    m && (e({ ...t, currentSlide: m }), i([m]));
  };
  return /* @__PURE__ */ b("div", { className: "space-y-1.5 px-2", children: [
    /* @__PURE__ */ b("div", { className: "flex items-center gap-x-2 pb-2 text-[12px]", children: [
      /* @__PURE__ */ l("button", { onClick: f, className: "rounded bg-gray-200 p-1.5 hover:opacity-80", children: /* @__PURE__ */ l(Bl, { className: "h-3 w-3" }) }),
      /* @__PURE__ */ l("div", { className: "whitespace-nowrap text-center text-[10px] text-slate-500", children: p ? /* @__PURE__ */ b("span", { className: "", children: [
        /* @__PURE__ */ b("b", { className: "text-[12px]", children: [
          " ",
          ir(d, { _id: p }) + 1
        ] }),
        "/",
        d.length
      ] }) : "-" }),
      /* @__PURE__ */ l("button", { onClick: u, className: "rounded bg-gray-200 p-1.5 hover:opacity-80", children: /* @__PURE__ */ l(Un, { className: "h-3 w-3" }) }),
      /* @__PURE__ */ b(
        "button",
        {
          onClick: h,
          className: "flex w-full items-center justify-center gap-x-1 rounded bg-gray-200 p-1.5 text-xs font-medium leading-tight hover:opacity-80",
          children: [
            /* @__PURE__ */ l(Kp, { className: "h-3 w-3" }),
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
            onChange: (g) => {
              let m = g.target.value;
              m.length && (m = m.replace("-", "")), e({ ...t, autoplayInterval: m });
            }
          }
        )
      ] })
    ] }) })
  ] });
}, B0 = ({ formData: t, onChange: e }) => {
  const n = _(t, "srcsets", []) || [], r = (i, a) => {
    const c = i.target.name, d = i.target.value;
    e({
      srcsets: A(n, (p, u) => u === a ? { ...p, [c]: d } : p)
    });
  }, o = () => {
    e({ srcsets: [...n, {}] });
  }, s = (i) => {
    e({ srcsets: Yr(n, (a, c) => parseInt(c) === i) });
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
          children: /* @__PURE__ */ l(Ze, { className: "h-3 w-3" })
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
}, R0 = (t) => /* @__PURE__ */ l("button", { ...t, className: "duration absolute right-2 top-2 cursor-pointer text-blue-400 hover:text-blue-500", children: /* @__PURE__ */ b("div", { className: "flex items-center gap-x-0.5 text-[11px] leading-tight", children: [
  /* @__PURE__ */ l(Ze, { className: "h-3 w-3" }),
  " ",
  /* @__PURE__ */ l("span", { children: "Add" })
] }) }), qa = Gn(({ blockId: t, schema: e, uiSchema: n, formData: r, onChange: o }) => {
  const { selectedLang: s } = Je(), i = ts("widget"), a = ts("field"), c = ts("template"), d = pn(
    async ({ formData: p }, u) => {
      _(p, u) === void 0 && Ue(p, u, ""), o({ formData: p }, u);
    },
    [o, s],
    400
    // save only every 5 seconds
  );
  return /* @__PURE__ */ l(
    Af,
    {
      widgets: {
        richtext: T0,
        icon: u0,
        image: y0,
        code: a0,
        colCount: E0,
        collectionSelect: l0,
        repeaterBinding: S0,
        ...i
      },
      fields: {
        link: N0,
        slider: I0,
        sources: B0,
        ...a
      },
      templates: {
        FieldTemplate: k0,
        ButtonTemplates: {
          AddButton: R0
        },
        ...c
      },
      idSeparator: ".",
      autoComplete: "off",
      omitExtraData: !1,
      liveOmit: !1,
      liveValidate: !1,
      validator: Tf,
      uiSchema: n,
      schema: e,
      formData: r,
      onChange: ({ formData: p }, u) => {
        if (!u || t !== (p == null ? void 0 : p._id)) return;
        const f = fp(u.split("."), 2).join(".").replace("root.", "");
        d({ formData: p }, f);
      }
    },
    s
  );
}), Wo = W.forwardRef(
  ({
    className: t,
    thumbClassName: e,
    ...n
  }, r) => /* @__PURE__ */ l(
    Ss.Root,
    {
      className: j(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        t
      ),
      ...n,
      ref: r,
      children: /* @__PURE__ */ l(
        Ss.Thumb,
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
Wo.displayName = Ss.Root.displayName;
const L0 = new Df({
  tags: ["{{", "}}"],
  autoEscape: !0,
  autoTrim: !1,
  useWith: !0,
  parse: { interpolate: "", exec: "~", raw: "~" }
}), P0 = [
  /\b(?:window|document|globalThis|process|Function|eval|import|fetch|XMLHttpRequest|WebSocket|localStorage|sessionStorage)\b/,
  /(^|[^=!<>])=([^=]|$)/,
  /\b(?:while|for|try|catch|class|new)\b/
], uu = (t) => kr(t) ? "array" : t === null ? "null" : Vs(t) ? "JSON" : typeof t, gs = (t, e) => {
  const n = e ? _(t, e) : t;
  return !Vs(n) || n === null || kr(n) ? [] : Object.entries(n).filter(([r]) => !r.startsWith("#")).map(([r, o]) => ({
    path: e ? `${e}.${r}` : r,
    type: uu(o)
  }));
}, Kr = (t) => {
  const e = t.trim();
  if (!e) return null;
  if (P0.some((r) => r.test(e)))
    return "Unsafe expression detected";
  try {
    return L0.compile(`{{${e}}}`), null;
  } catch {
    return "Invalid expression syntax";
  }
}, O0 = ({ currentExpression: t, externalData: e, onSave: n }) => {
  const r = te(null), o = te(null), [s, i] = $(t), [a, c] = $(null), [d, p] = $(0), [u, f] = $(null);
  z(() => {
    i(t), c(Kr(t)), f(null), p(0);
  }, [t]);
  const h = M(
    () => Object.entries(e ?? {}).filter(([y]) => !y.startsWith("#")).map(([y, x]) => ({
      key: y,
      type: uu(x)
    })),
    [e]
  ), g = (y, x) => {
    const S = y.slice(0, x).match(/[A-Za-z_$][\w$.]*\.?$/);
    if (!S) {
      f(null);
      return;
    }
    const v = S[0];
    let N;
    if (v.endsWith(".")) {
      const T = v.slice(0, -1);
      N = gs(e, T);
    } else {
      const T = v.lastIndexOf(".");
      if (T === -1)
        N = gs(e, "").filter((k) => k.path.toLowerCase().startsWith(v.toLowerCase()));
      else {
        const k = v.slice(0, T), C = v.slice(T + 1).toLowerCase();
        N = gs(e, k).filter((E) => E.path.slice(E.path.lastIndexOf(".") + 1).toLowerCase().startsWith(C));
      }
    }
    if (N = N.slice(0, 8), !N.length) {
      f(null), p(0);
      return;
    }
    f({
      start: x - v.length,
      end: x,
      options: N
    }), p(0);
  }, m = (y) => {
    if (!u) return;
    const x = s.slice(0, u.start) + y + s.slice(u.end);
    i(x), c(Kr(x)), f(null), p(0), requestAnimationFrame(() => {
      var S, v;
      const w = u.start + y.length;
      (S = r.current) == null || S.focus(), (v = r.current) == null || v.setSelectionRange(w, w);
    });
  };
  return z(() => {
    if (!u || !o.current) return;
    const y = o.current.children[d];
    y == null || y.scrollIntoView({ block: "nearest" });
  }, [d, u]), /* @__PURE__ */ b("div", { className: "grid gap-2", children: [
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
            i(x), c(Kr(x)), g(x, w);
          },
          onKeyDown: (y) => {
            if (u && u.options.length) {
              if (y.key === "ArrowDown") {
                y.preventDefault(), p((x) => x >= u.options.length - 1 ? 0 : x + 1);
                return;
              }
              if (y.key === "ArrowUp") {
                y.preventDefault(), p((x) => x <= 0 ? u.options.length - 1 : x - 1);
                return;
              }
              if (y.key === "Enter" || y.key === "Tab") {
                y.preventDefault();
                const x = u.options[d];
                x && m(x.path);
                return;
              }
              if (y.key === "Escape") {
                y.preventDefault(), f(null), p(0);
                return;
              }
            }
            if (y.key === "Enter") {
              y.preventDefault();
              const x = Kr(s);
              c(x), x || n(s.trim());
            }
          },
          placeholder: "name === 'x'",
          autoComplete: "off"
        }
      ),
      u && /* @__PURE__ */ l(
        "div",
        {
          ref: o,
          className: "absolute z-20 mt-1 max-h-36 w-full overflow-auto rounded border bg-background p-1 shadow",
          children: u.options.map((y, x) => /* @__PURE__ */ b(
            "button",
            {
              type: "button",
              className: `block w-full rounded px-2 py-1 text-left text-[10px] hover:bg-muted ${x === d ? "bg-muted" : ""}`,
              onMouseDown: (w) => {
                w.preventDefault(), m(y.path);
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
}, M0 = () => {
  const { t } = K(), e = ae(), n = Yn(), r = _t(), [o, s] = $(!1), i = (f) => {
    if (e) {
      if (!f || f.trim() === "") {
        Nt(e._show) && r([e._id], { _show: !0 });
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
    const f = le(e, "_show") ? e._show : !0;
    r([e._id], {
      _show: !f
    });
  }, d = () => {
    e && (r([e._id], { _show: !0 }), s(!1));
  };
  if (!e) return null;
  const p = Nt(e._show), u = p ? e._show.startsWith("{{") && e._show.endsWith("}}") ? e._show.slice(2, -2).trim() : e._show : "";
  return /* @__PURE__ */ b("div", { className: "my-2 flex items-center justify-between", children: [
    /* @__PURE__ */ l("p", { className: "text-xs text-gray-500", children: t("Visibility") }),
    /* @__PURE__ */ b("div", { className: "group relative", children: [
      /* @__PURE__ */ b(Wi, { open: o, onOpenChange: a, children: [
        /* @__PURE__ */ l(Gi, { asChild: !0, children: /* @__PURE__ */ l(
          "div",
          {
            className: `absolute -left-2 -top-1.5 z-10 h-3.5 w-3.5 cursor-pointer rounded-full border border-white bg-blue-500 transition-all hover:scale-125 ${p ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`
          }
        ) }),
        /* @__PURE__ */ l(jo, { side: "left", className: "w-64 p-3", children: /* @__PURE__ */ b("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ b("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ b("div", { className: "space-y-1", children: [
              /* @__PURE__ */ l("h4", { className: "text-xs font-medium leading-none", children: t("Conditional Visibility") }),
              /* @__PURE__ */ l("p", { className: "text-[10px] text-muted-foreground", children: t("Enter a JavaScript expression") })
            ] }),
            p && /* @__PURE__ */ l(
              re,
              {
                variant: "ghost",
                size: "sm",
                className: "h-6 w-6 p-0 text-muted-foreground hover:text-red-500",
                onClick: d,
                children: /* @__PURE__ */ l(Ys, { className: "h-3.5 w-3.5" })
              }
            )
          ] }),
          /* @__PURE__ */ l("div", { className: "relative", children: /* @__PURE__ */ l(
            O0,
            {
              currentExpression: u,
              externalData: n,
              onSave: (f) => {
                i(f), s(!1);
              }
            }
          ) })
        ] }) })
      ] }),
      /* @__PURE__ */ l(
        Wo,
        {
          "aria-label": t("Visibility"),
          checked: p ? !0 : le(e, "_show") ? e._show : !0,
          onCheckedChange: c,
          disabled: p
        }
      )
    ] })
  ] });
}, Za = (t, e, n) => {
  const r = so(t);
  return So(yt(t), (o) => {
    Ie(_(n, "i18nProps", []), o) && !F(e) && (r[o] = _(t, `${o}-${e}`));
  }), r;
};
function Qa() {
  const { selectedLang: t } = Je(), e = ae(), n = dc(), r = _t(), o = Oe(e == null ? void 0 : e._type), s = Za(e, t, o), [i, a] = $(s), [c, d] = $(!1), p = Ui(), u = Oe(p == null ? void 0 : p._type), f = Za(p, t, u), h = ({ formData: N }, T, k) => {
    T && (i == null ? void 0 : i._id) === e._id && r([e._id], { [T]: _(N, T) }, k);
  }, g = B(
    Ws(({ formData: N }, T, k) => {
      h({ formData: N }, T, k), a(N);
    }, 1500),
    [e == null ? void 0 : e._id, t]
  ), m = ({ formData: N }, T) => {
    T && (n([e._id], { [T]: _(N, T) }), g({ formData: N }, T, { [T]: _(i, T) }));
  }, y = ({ formData: N }, T) => {
    T && (n([p._id], { [T]: _(N, T) }), g({ formData: N }, T, { [T]: _(i, T) }));
  }, { schema: x, uiSchema: w } = M(() => {
    const N = e == null ? void 0 : e._type;
    if (!N)
      return { schema: {}, uiSchema: {} };
    try {
      const { schema: T, uiSchema: k } = aa(N);
      if (N === "Repeater") {
        const C = _(e, "repeaterItems", "");
        Re(C, `{{${Mt}`) ? (Ue(k, "filter", { "ui:widget": "collectionSelect" }), Ue(k, "sort", { "ui:widget": "collectionSelect" })) : (Ue(k, "filter", { "ui:widget": "hidden" }), Ue(k, "sort", { "ui:widget": "hidden" }));
      }
      return { schema: T, uiSchema: k };
    } catch {
      return { schema: {}, uiSchema: {} };
    }
  }, [e]), { wrapperSchema: S, wrapperUiSchema: v } = M(() => {
    if (!p || !(p != null && p._type))
      return { wrapperSchema: {}, wrapperUiSchema: {} };
    const N = p == null ? void 0 : p._type, { schema: T = {}, uiSchema: k = {} } = aa(N);
    return { wrapperSchema: T, wrapperUiSchema: k };
  }, [p]);
  return /* @__PURE__ */ b("div", { className: "no-scrollbar overflow-x-hidden px-px", children: [
    /* @__PURE__ */ l(M0, {}),
    !F(p) && /* @__PURE__ */ b("div", { className: "mb-4 rounded border bg-zinc-100 px-1", children: [
      /* @__PURE__ */ b(
        "div",
        {
          onClick: () => d((N) => !N),
          className: "flex cursor-pointer items-center gap-x-1 py-2 text-xs font-medium leading-tight hover:bg-slate-100",
          children: [
            c ? /* @__PURE__ */ l(xn, { className: "h-4 w-4 text-slate-400" }) : /* @__PURE__ */ l(Un, { className: "h-4 w-4 text-slate-400" }),
            Kt(p._type),
            " settings",
            " ",
            p._name && /* @__PURE__ */ b("span", { className: "text-[11px] font-light text-slate-400", children: [
              "(",
              p._name,
              ")"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ l("div", { className: c ? "h-auto" : "invisible h-0", children: /* @__PURE__ */ l(
        qa,
        {
          blockId: p == null ? void 0 : p._id,
          onChange: y,
          formData: f,
          schema: S,
          uiSchema: v
        }
      ) })
    ] }),
    F(x) ? null : /* @__PURE__ */ l(
      qa,
      {
        blockId: e == null ? void 0 : e._id,
        onChange: m,
        formData: s,
        schema: x,
        uiSchema: w
      }
    )
  ] });
}
const D0 = hn.Root, pu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(hn.Item, { ref: n, className: j("border-b", t), ...e }));
pu.displayName = "AccordionItem";
const fu = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ l(hn.Header, { className: "flex", children: /* @__PURE__ */ b(
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
fu.displayName = hn.Trigger.displayName;
const hu = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ l(
  hn.Content,
  {
    ref: r,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: /* @__PURE__ */ l("div", { className: j("pb-4 pt-0", t), children: e })
  }
));
hu.displayName = hn.Content.displayName;
const $0 = P(null, (t, e, { blockIds: n, fullClasses: r }) => {
  const o = ye(t(Br)), s = Z(
    t(Sr),
    (i) => (
      // @ts-ignore
      n.includes(t(i)._id)
    )
  );
  return A(s, (i) => {
    const a = t(i), c = r;
    let { classes: d, baseClasses: p } = wn(_(a, o.prop, `${St},`));
    return bt(c, (u) => {
      const f = u.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), h = new RegExp(`(^|\\s)${f}(?=\\s|$)`, "g");
      d = d.replace(h, " ").replace(/\s+/g, " ").trim();
      const g = ye(u.split(":"));
      Ie(["2xl", "xl", "lg", "md", "sm"], g) && c.push(u.split(":").pop().trim());
    }), bt(c, (u) => {
      const f = u.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), h = new RegExp(`(^|\\s)${f}(?=\\s|$)`, "g");
      p = p.replace(h, " ").replace(/\s+/g, " ").trim();
    }), {
      ids: [a._id],
      props: {
        [o.prop]: `${St}${p},${d}`
      }
    };
  });
}), F0 = (t) => {
  const e = Object.keys(t).filter(
    (r) => typeof t[r] == "string" && t[r].startsWith(St)
  ), n = {};
  return e.forEach((r) => {
    n[r] = `${St},`;
  }), {
    ids: [t._id],
    props: n
  };
}, z0 = () => {
  const { updateBlocks: t, updateBlocksRuntime: e } = ze();
  return B(
    (n, r = !1) => {
      const { ids: o, props: s } = F0(n);
      r ? t(o, s) : e(o, s);
    },
    [t, e]
  );
}, Ki = () => {
  const { updateBlocks: t, updateBlocksRuntime: e } = ze(), n = gt($0);
  return B(
    (r, o, s = !1) => {
      const i = n({ blockIds: r, fullClasses: o });
      s ? t(r, i[0].props) : e(r, i[0].props);
    },
    [n]
  );
}, mu = () => {
  const t = ae(), e = _t(), n = B((i) => qs(i) || {}, []), r = B((i) => Object.keys(i).filter(
    (a) => typeof i[a] == "string" && i[a].startsWith("#styles:")
  ), []), o = B(
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
  }, [t, r, n, e]), reset: o };
}, H0 = () => {
  var h;
  const t = ae(), [e, n] = He(), r = Ki(), [o] = oe(), { t: s } = K(), { reset: i } = mu();
  if (!t) return null;
  const a = Object.keys(t).filter(
    (g) => typeof t[g] == "string" && t[g].startsWith("#styles:")
  ), c = !F(a) && a.length > 1, d = _(t, (h = e[0]) == null ? void 0 : h.prop, ""), { classes: p = "" } = wn(d) || {}, u = p ? p.split(" ").filter((g) => !F(g)) : [], f = (g) => ee(e, (m) => m.prop === g);
  return /* @__PURE__ */ l(Q, { children: c && /* @__PURE__ */ b("div", { className: "flex flex-wrap gap-1", children: [
    /* @__PURE__ */ b("label", { htmlFor: "block-styling-props", className: "py-1 text-xs", children: [
      s("Style element"),
      ":"
    ] }),
    /* @__PURE__ */ l("div", { className: "flex flex-wrap gap-2", children: A(a, (g) => /* @__PURE__ */ b(
      ji,
      {
        className: "flex cursor-pointer items-center gap-1 pr-1",
        variant: f(g) ? "default" : "secondary",
        onClick: () => {
          n([{ id: `${g}-${t._id}`, blockId: t._id, prop: g }]);
        },
        children: [
          Kt(g),
          /* @__PURE__ */ b(kn, { children: [
            /* @__PURE__ */ l(Cn, { asChild: !0, children: /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                className: "ml-1 rounded-sm p-0.5 hover:bg-blue-300 hover:text-blue-600",
                onClick: (m) => m.stopPropagation(),
                children: /* @__PURE__ */ l(Ao, { className: "h-3 w-3" })
              }
            ) }),
            /* @__PURE__ */ b(Ft, { side: "bottom", className: "border-border text-xs", children: [
              /* @__PURE__ */ l(
                Ee,
                {
                  className: "text-xs",
                  onClick: () => {
                    i(g);
                  },
                  children: s("Reset style")
                }
              ),
              /* @__PURE__ */ l(
                Ee,
                {
                  className: "text-xs",
                  onClick: () => {
                    r(o, u, !0);
                  },
                  children: s("Clear styles")
                }
              )
            ] })
          ] })
        ]
      },
      g
    )) }),
    /* @__PURE__ */ l("div", { className: "my-2 h-[1px] w-full bg-border" })
  ] }) });
}, gu = ne.createContext({
  setDragData: () => {
  }
}), el = (t, e) => {
  t = t.toLowerCase();
  let n = t.trim().replace(/ |\+/g, "");
  if ((n === "auto" || n === "none") && e.includes(n))
    return { value: "", unit: n };
  const r = e.length ? new RegExp(e.join("|"), "g") : /XXXXXX/g;
  n = n.replace(r, "");
  const o = t.match(r), s = o && o.length > 1, i = !F(n) && Number.isNaN(Number(n));
  return s || i ? { error: "Invalid value" } : o && (o[0] === "auto" || o[0] === "none") ? { value: o[0], unit: "" } : { value: n, unit: o ? o[0] : "" };
}, V0 = (t) => {
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
  return hp(parseFloat(n)) ? { value: `${e + parseFloat(n) * 4}`, unit: "px" } : { value: n, unit: "class" };
}, j0 = (t) => {
  if (F(t))
    return { value: "", unit: "" };
  const e = t.match(/\[.*\]/g);
  if (e === null)
    return W0(t);
  const n = _(e, "0", "").replace(/\[|\]/g, ""), r = t.startsWith("-") ? "-" : "", o = ye(n.match(/\d+.\d+|\d+/g));
  return { value: `${r}${o}`, unit: n.replace(o, "") };
}, W0 = (t) => F(t) ? { value: "", unit: "" } : V0(t), G0 = ({
  unit: t,
  currentValue: e,
  onDrag: n,
  onDragEnd: r,
  onDragStart: o,
  negative: s,
  cssProperty: i
}) => {
  const { setDragData: a } = yn(gu);
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
      children: /* @__PURE__ */ l(Jp, {})
    }
  );
}, U0 = ({ onSelect: t, current: e, units: n }) => /* @__PURE__ */ l("div", { "data-theme": "light", className: "-m-[7px] -mx-[13px] flex w-9 flex-col", children: n.map((r) => /* @__PURE__ */ l(
  re,
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
)) }), tl = 50, K0 = (t) => {
  const [e, n] = $(!1), [r, o] = $(""), { currentClass: s, onChange: i, classPrefix: a, cssProperty: c, units: d, negative: p } = t, [u, f] = $(c != null && c.toLowerCase().includes("width") ? "%" : d[0]), [h, g] = $(!1), [m, y] = $(""), [x, w] = $(!1), [S, v] = $(!1);
  z(() => {
    const { value: E, unit: I } = j0(s);
    if (I === "") {
      o(E), f(c != null && c.toLowerCase().includes("width") ? "%" : ye(d));
      return;
    }
    f(I), o(I === "class" || F(E) ? "" : E);
  }, [s, c, d]);
  const N = pn((E) => i(E), [i], tl), T = pn((E) => i(E, !1), [i], tl), k = B(
    (E = !1) => {
      const I = el(`${r}`, d);
      if (_(I, "error", !1)) {
        g(!0);
        return;
      }
      const L = _(I, "unit") !== "" ? _(I, "unit") : u;
      if (L === "auto" || L === "none") {
        N(`${a}${L}`);
        return;
      }
      if (_(I, "value") === "")
        return;
      const V = `${_(I, "value", "").startsWith("-") ? "-" : ""}${a}[${_(I, "value", "").replace("-", "")}${L === "-" ? "" : L}]`;
      E ? T(V) : N(V);
    },
    [N, T, r, u, a, d]
  ), C = B(
    (E) => {
      const I = el(`${r}`, d);
      if (_(I, "error", !1)) {
        g(!0);
        return;
      }
      if (E === "auto" || E === "none") {
        N(`${a}${E}`);
        return;
      }
      if (_(I, "value") === "")
        return;
      const L = _(I, "unit") !== "" ? _(I, "unit") : E, V = `${_(I, "value", "").startsWith("-") ? "-" : ""}${a}[${_(I, "value", "").replace("-", "")}${L === "-" ? "" : L}]`;
      N(V);
    },
    [N, r, a, d]
  );
  return /* @__PURE__ */ l("div", { className: "flex w-full flex-col", children: /* @__PURE__ */ l("div", { className: "flex items-center justify-start", children: u === "class" ? /* @__PURE__ */ b(Q, { children: [
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
      ["none", "auto"].indexOf(u) !== -1 ? null : /* @__PURE__ */ l(
        "input",
        {
          readOnly: u === "class",
          onKeyPress: (E) => {
            E.key === "Enter" && k();
          },
          onKeyDown: (E) => {
            if (E.keyCode !== 38 && E.keyCode !== 40)
              return;
            E.preventDefault(), v(!0);
            const I = mp(E.target.value);
            let L = gp(I) ? 0 : I;
            E.keyCode === 38 && (L += 1), E.keyCode === 40 && (L -= 1);
            const R = `${L}`, Y = `${R.startsWith("-") ? "-" : ""}${a}[${R.replace("-", "")}${u === "-" ? "" : u}]`;
            T(Y);
          },
          onKeyUp: (E) => {
            S && (E.preventDefault(), v(!1));
          },
          onBlur: () => k(),
          onChange: (E) => {
            g(!1), o(E.target.value);
          },
          onClick: (E) => {
            var I;
            (I = E == null ? void 0 : E.target) == null || I.select(), n(!1);
          },
          value: x ? m : r,
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
              /* @__PURE__ */ l("span", { className: `inline-block ${d.length === 1 ? "px-2 font-semibold" : ""}`, children: u }),
              d.length > 1 ? /* @__PURE__ */ l(Yp, {}) : null
            ]
          }
        ) }),
        /* @__PURE__ */ l(be, { className: "bg-background", children: /* @__PURE__ */ l(
          U0,
          {
            units: d,
            current: u,
            onSelect: (E) => {
              n(!1), f(E), C(E);
            }
          }
        ) })
      ] })
    ] }),
    ["none", "auto"].indexOf(u) !== -1 || x ? null : /* @__PURE__ */ l(
      G0,
      {
        onDragStart: () => w(!0),
        onDragEnd: (E) => {
          if (y(() => ""), w(!1), F(E))
            return;
          const I = `${E}`, R = `${I.startsWith("-") ? "-" : ""}${a}[${I.replace("-", "")}${u === "-" ? "" : u}]`;
          N(R);
        },
        onDrag: (E) => {
          if (F(E))
            return;
          y(E);
          const I = `${E}`, R = `${I.startsWith("-") ? "-" : ""}${a}[${I.replace("-", "")}${u === "-" ? "" : u}]`;
          T(R);
        },
        currentValue: r,
        unit: u,
        negative: p,
        cssProperty: c
      }
    )
  ] }) }) });
}, Dr = Eo({ canReset: !1, canChange: !0 }), Y0 = ({ children: t, canReset: e = !1, canChange: n = !0 }) => (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  /* @__PURE__ */ l(Dr.Provider, { value: { canReset: e, canChange: n }, children: t })
), bs = [
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
  columns: [...qe(1, 13), "auto", "3xs", "2xs", "xs", "sm", "md", "lg", "xl", ...A(qe(2, 8), (t) => `${t}xl`)],
  breakAfter: ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
  breakInside: ["auto", "avoid", "avoid-page", "avoid-column"],
  display: ["block", "flex", "grid", "inline-block", "inline", "hidden"],
  objectFit: ["contain", "cover", "fill", "none", "scale-down"],
  objectPosition: ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
  overflow: ["auto", "hidden", "clip", "visible", "scroll"],
  overscroll: ["auto", "contain", "none"],
  trbl: [0, "px", "0.5", 1, 1.5, 2, 2.5, 3, 3.5, ...qe(4, 13), 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, "auto", "1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "full"],
  flexBasis: [...bs, "auto", "px", "0.5", "1.5", "2.5", "3.5", "1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "1/5", "2/5", "3/5", "4/5", "1/6", "2/6", "3/6", "4/6", "5/6", "1/12", "2/12", "3/12", "4/12", "5/12", "6/12", "7/12", "8/12", "9/12", "10/12", "11/12", "full"],
  padding: [...bs, "px", "0.5", "1.5", "2.5", "3.5"],
  margin: ["auto", ...bs, "px", "0.5", "1.5", "2.5", "3.5"],
  scale: [0, 50, 75, 90, 95, 100, 105, 110, 125, 150],
  origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left"],
  blendEffect: ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
  borderWidth: [0, 2, 4, 8],
  borderRadius: ["global", "none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
  indent: [0, "px", "0.5", 1, 1.5, 2, 2.5, 3, 3.5, ...qe(4, 13), 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96],
  maxHeight: [0, "px", "0.5", 1, 1.5, 2, 2.5, 3, 3.5, ...qe(4, 13), 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, "full", "screen", "min", "max", "fit"],
  space: [0, "px", "0.5", 1, 1.5, 2, 2.5, 3, 3.5, ...qe(4, 13), 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96, "px", "reverse"],
  width: ["0", "px", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96", "auto", "1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "1/5", "2/5", "3/5", "4/5", "1/6", "2/6", "3/6", "4/6", "5/6", "1/12", "2/12", "3/12", "4/12", "5/12", "6/12", "7/12", "8/12", "9/12", "10/12", "11/12"],
  maxWidth: ["0", "none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "full", "min", "max", "fit", "prose", "screen-sm", "screen-md", "screen-lg", "screen-xl", "screen-2xl"],
  height: ["0", "px", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96", "auto", "1/2", "1/3", "2/3", "1/4", "2/4", "3/4", "1/5", "2/5", "3/5", "4/5", "1/6", "2/6", "3/6", "4/6", "5/6", "full", "screen", "min", "max", "fit"]
}, $n = {
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
    classes: A([...qe(0, 13), "none"], (t) => `grid-cols-${t}`),
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
    classes: ["col-auto", ...A(qe(1, 13), (t) => `col-span-${t}`), "col-span-full"],
    regExp: "col-(auto|span-(\\d+|full))"
  },
  gridColStart: {
    classes: [...A(qe(1, 14), (t) => `col-start-${t}`), "col-start-auto"],
    regExp: "col-start-(\\d+|auto)"
  },
  gridColEnd: {
    classes: [...A(qe(1, 14), (t) => `col-end-${t}`), "col-end-auto"],
    regExp: "col-end-(\\d+|auto)"
  },
  gridRowSpan: {
    classes: ["row-auto", ...A(qe(1, 7), (t) => `row-span-${t}`), "row-span-full"],
    regExp: "row-(auto|span-(\\d+|full))"
  },
  gridRowStart: {
    classes: [...A(qe(1, 8), (t) => `row-start-${t}`), "row-start-auto"],
    regExp: "row-start-(\\d+|auto)"
  },
  gridRowEnd: {
    classes: [...A(qe(1, 8), (t) => `row-end-${t}`), "row-end-auto"],
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
    classes: A([...qe(0, 13), "first", "last", "none"], (t) => `order-${t}`),
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
}, J0 = {
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
}, X0 = ["current", "inherit", "transparent", "black", "white"], q0 = [
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
], Z0 = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"], $s = A(Lt(J0), (t) => t), Q0 = Ot([
  ...A(X0, (t) => $t(A($s, (e) => `${e}-${t}`))),
  ...A(
    q0,
    (t) => Ot(A($s, (e) => Ot(A(Z0, (n) => `${e}-${t}-${n}`))))
  )
]), ew = A(
  Ot(
    Lt($n).map((t) => t.classes).concat(Q0)
  ),
  (t) => ({
    name: t
  })
), tw = () => {
  const t = Pr(), e = M(() => {
    let n = [];
    if (t.colors) {
      const r = Ot(A(t.colors, ({ items: o }) => yt(o)));
      n = Ot(A(r, (o) => $t(A($s, (s) => `${s}-${o}`))));
    }
    return t.fontFamily && (n = [...n, ...A(yt(t.fontFamily), (r) => `${r}`)]), A(n, (r) => ({ name: r }));
  }, [t]);
  return M(
    () => new Ul([...ew, ...e], {
      isCaseSensitive: !1,
      threshold: 0.2,
      minMatchCharLength: 2,
      keys: ["name"]
    }),
    [e]
  );
}, Go = () => {
  const t = Pr(), e = M(() => {
    if (t.colors) {
      const o = Ot(A(t.colors, ({ items: s }) => yt(s)));
      bt($n, (s, i) => {
        Ue($n, `${i}.regExp`, s.regExp.replace("__THEME_COLORS_REGEXP__", o.join("|")));
      });
    }
    return $n;
  }, [t]), n = B(
    (o, s) => {
      const i = _(e, `${o}.regExp`, "");
      return s.match(new RegExp(i));
    },
    [e]
  ), r = B(
    (o, s = []) => _(e, `${o}.classes`, s),
    [e]
  );
  return { match: n, getClasses: r };
}, bu = ({ label: t, property: e, onChange: n }) => {
  const { getClasses: r } = Go(), o = r(e), s = $r(e), i = M(() => _(s, "cls", ""), [s]), { canChange: a } = yn(Dr), c = /\[.*\]/g.test(i);
  return /* @__PURE__ */ l("div", { className: t ? "w-full rounded" : "grow", children: c ? /* @__PURE__ */ b("div", { className: "flex items-center", children: [
    /* @__PURE__ */ l(Cr, { className: "w-[70%] rounded py-1", readOnly: !0, value: i }),
    /* @__PURE__ */ b(Ne, { delayDuration: 100, children: [
      /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l("button", { type: "button", className: "invisible ml-3 mt-1 text-blue-600 group-hover:visible", children: /* @__PURE__ */ l(pr, {}) }) }),
      /* @__PURE__ */ l(be, { children: "Current value is using a Tailwind arbitrary value." })
    ] })
  ] }) : /* @__PURE__ */ l(
    Fs,
    {
      rounded: t,
      onChange: (d) => n(d, e),
      selected: i,
      options: o,
      disabled: !a
    }
  ) });
};
function Fs({ selected: t, onChange: e, rounded: n = !1, options: r, disabled: o = !1 }) {
  const s = t.replace(/.*:/g, "").trim(), { undo: i, redo: a } = Tr();
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
const nw = {
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
}, rw = ({ property: t, onChange: e }) => {
  const n = $r(t), r = M(() => _(n, "cls", ""), [n]), { canChange: o } = yn(Dr), [s, i] = $([]), [a, c] = $({ color: "", shade: "" }), d = r.split("-"), p = _(d, "1", ""), u = _(d, "2", ""), f = B(
    (m) => {
      ["current", "inherit", "transparent", "black", "white"].includes(m) ? (i([]), c({ color: m })) : (i(["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), c((y) => ({ ...y, color: m, shade: y.shade ? y.shade : "500" })));
    },
    [i, c]
  );
  z(() => {
    if (["current", "inherit", "transparent", "black", "white"].includes(p))
      return i([]);
    i(["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"]);
  }, [p]);
  const h = B(
    (m) => {
      c({ color: p, shade: m });
    },
    [p]
  );
  z(() => {
    c({ color: "", shade: "" });
  }, [n]);
  const { match: g } = Go();
  return z(() => {
    const y = `${_(nw, t, "")}-${a.color}${a.shade ? `-${a.shade}` : ""}`;
    g(t, y) && e(y, t);
  }, [g, a, e, t]), /* @__PURE__ */ b("div", { className: "flex flex-row divide-x divide-solid divide-border rounded-lg border border-transparent text-xs", children: [
    /* @__PURE__ */ l("div", { className: "grow text-center", children: /* @__PURE__ */ l(
      Fs,
      {
        disabled: !o,
        rounded: !0,
        selected: p,
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
    /* @__PURE__ */ l("button", { type: "button", className: "grow text-center", children: /* @__PURE__ */ l(Fs, { rounded: !0, selected: u, disabled: !p || !o, onChange: h, options: s }) })
  ] });
}, yu = {
  "not-italic": () => /* @__PURE__ */ l("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ l("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 3H11V5H9V11H11V13H5V11H7V5H5V3H9Z", fill: "white" }) }),
  // visibility
  visible: Ol,
  invisible: io,
  // display
  hidden: io,
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
  right: er,
  bottom: Rn,
  left: Qn,
  inset: It,
  insetX: rt,
  insetY: nt,
  border: It,
  borderX: rt,
  borderY: nt,
  borderTop: qt,
  borderRight: er,
  borderBottom: Rn,
  borderLeft: Qn,
  borderRadius: It,
  borderRadiusX: rt,
  borderRadiusY: nt,
  borderRadiusTop: qt,
  borderRadiusRight: er,
  borderRadiusBottom: Rn,
  borderRadiusLeft: Qn,
  borderRadiusTopLeft: of,
  borderRadiusTopRight: Pl,
  borderRadiusBottomRight: rf,
  borderRadiusBottomLeft: nf,
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
  paddingRight: er,
  paddingBottom: Rn,
  paddingLeft: Qn,
  // margin
  margin: It,
  marginX: rt,
  marginY: nt,
  marginTop: qt,
  marginRight: er,
  marginBottom: Rn,
  marginLeft: Qn,
  // text-align
  textLeft: tf,
  textCenter: ef,
  textRight: Qp,
  textJustify: Zp,
  // font style
  italic: _l,
  // "not-italic": "",
  // decoration
  underline: Al,
  overline: qp,
  // transform
  uppercase: Xp,
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
  "float-none": To,
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
}, ow = ({ property: t, onChange: e }) => {
  const { getClasses: n } = Go(), r = n(t), { canChange: o } = yn(Dr), s = $r(t), i = M(() => _(s, "cls", ""), [s]);
  return /* @__PURE__ */ l("div", { className: "flex grow flex-wrap gap-1", children: A(r, (a) => /* @__PURE__ */ b(Ne, { children: [
    /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        disabled: !o,
        onClick: () => e(a, t),
        className: `cursor-pointer rounded border border-border p-1 disabled:cursor-not-allowed ${i === a ? "bg-primary text-white" : "disabled:bg-gray-600 disabled:text-gray-400"}`,
        children: ne.createElement(_(yu, a, Io))
      }
    ) }),
    /* @__PURE__ */ l(be, { children: Kt(xl(a)) })
  ] })) });
}, sw = ({ property: t, onChange: e }) => {
  const { canReset: n, canChange: r } = yn(Dr), o = $r(t), s = M(() => _(o, "cls", ""), [o]), { getClasses: i } = Go(), a = i(t, [""]), c = a.indexOf(s) > -1 ? a.indexOf(s) : 0, d = /\[.*\]/g.test(s);
  return /* @__PURE__ */ l("div", { className: "flex flex-row divide-x divide-solid divide-border rounded border border-border text-xs", children: d ? /* @__PURE__ */ l("div", { className: "px-2 py-[5px]", children: s }) : /* @__PURE__ */ b(Q, { children: [
    /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        className: "hover:bg-bg-gray-700 box-border w-2/12 rounded-bl rounded-tl bg-background px-1 text-center disabled:cursor-not-allowed disabled:bg-gray-600",
        disabled: !r && (!n || c - 1 < 0),
        onClick: () => e(na(a, c - 1), t),
        children: /* @__PURE__ */ l("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ l(
          sf,
          {
            className: !r && (!n || c - 1 < 0) ? "text-gray-500" : "text-black/60 dark:text-white/60"
          }
        ) })
      }
    ),
    /* @__PURE__ */ l("div", { className: "w-8/12 text-center", children: /* @__PURE__ */ l(bu, { label: !1, property: t, onChange: e }) }),
    /* @__PURE__ */ l(
      "button",
      {
        type: "button",
        className: "hover:bg-bg-gray-700 w-2/12 rounded-br rounded-tr bg-background px-1 text-center disabled:cursor-not-allowed disabled:bg-gray-600",
        disabled: !r && (!n || c + 1 >= a.length),
        onClick: () => e(na(a, c + 1), t),
        children: /* @__PURE__ */ l("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ l(
          Ze,
          {
            className: !r && (!n || c + 1 >= a.length) ? "text-gray-500" : "text-black/60 dark:text-white/60"
          }
        ) })
      }
    )
  ] }) });
};
function iw(t) {
  if (F(t.trim())) return "";
  const e = t.match(/sm:|md:|lg:|xl:|2xl:/g);
  return _(e, 0, "xs").replace(":", "");
}
function aw(t) {
  const e = A(Hh, (r) => `${r}:`).join("|"), n = new RegExp(e, "g");
  return _(n.exec(t.trim()), 0, "").replace(":", "");
}
function lw(t) {
  return t.trim().split(":").pop() || "";
}
const ys = {};
function cw(t) {
  if (F(t)) return "";
  if (ys[t])
    return ys[t];
  let e = "";
  for (const n in $n) {
    const r = _($n, `${n}.regExp`, "");
    if (new RegExp(r, "g").test(t)) {
      e = n, ys[t] = e;
      break;
    }
  }
  return e;
}
function Yi(t) {
  return F(t) ? null : {
    dark: Re(t, "dark:"),
    mq: iw(t),
    mod: aw(t),
    cls: lw(t),
    fullCls: t,
    property: cw(t)
  };
}
function dw(t) {
  let e = "";
  return t.dark && (e += "dark:"), t.mq.toLowerCase() !== "xs" && (e += `${t.mq}:`), t.mod && (e += `${t.mod}:`), e += t.cls, e;
}
function Xt(t) {
  t = t.replace(/\s+/g, " ");
  const e = t.split(" ").map(Yi).filter((r) => r !== null), n = ["xs", "sm", "md", "lg", "xl", "2xl"];
  return e.sort((r, o) => n.indexOf(r.mq) - n.indexOf(o.mq)).map((r) => r.fullCls).join(" ");
}
import.meta.vitest && test("orderClassesByBreakpoint", () => {
  expect(Xt("bg-red-400 sm:bg-red-500")).toBe("bg-red-400 sm:bg-red-500"), expect(Xt("bg-red-400 sm:bg-red-500 md:bg-red-600")).toBe(
    "bg-red-400 sm:bg-red-500 md:bg-red-600"
  ), expect(Xt("xl:sticky block sm:absolute")).toBe("block sm:absolute xl:sticky"), expect(Xt("sm:bg-red-500 bg-red-400")).toBe("bg-red-400 sm:bg-red-500"), expect(Xt("sm:w-[30%] w-[30%]")).toBe("w-[30%] sm:w-[30%]"), expect(Xt("text-[30px]       sm:text-[20px]")).toBe("text-[30px] sm:text-[20px]");
});
function ht(t) {
  if (t = t.replace(/\s+/g, " "), !t) return "";
  const e = ["xs", "sm", "md", "lg", "xl", "2xl"], n = t.split(" ").map(Yi).filter((o) => o !== null);
  let r = t;
  if (n.length === 1) return n[0].fullCls;
  for (const o of n) {
    const s = o.property, i = e.indexOf(o.mq);
    for (let a = i + 1; a < e.length; a++) {
      const c = e[a], d = n.find((p) => p.property === s && p.mq === c);
      if (d && d.cls === o.cls)
        r = r.replace(d.fullCls, "");
      else if (d && d.cls !== o.cls)
        break;
    }
  }
  return r.replace(/\s+/g, " ").trim();
}
import.meta.vitest && test("removeDuplicateClasses (tailwind classes) at higher breakpoints", () => {
  expect(ht("")).toBe(""), expect(ht("bg-red-400")).toBe("bg-red-400"), expect(ht("bg-red-400    sm:bg-red-500")).toBe("bg-red-400 sm:bg-red-500"), expect(ht("bg-red-400 sm:bg-red-400")).toBe("bg-red-400"), expect(ht("bg-red-400 sm:bg-red-400 lg:bg-red-400")).toBe("bg-red-400"), expect(ht("p-4 sm:p-6 md:p-4")).toBe("p-4 sm:p-6 md:p-4"), expect(ht("p-4 sm:p-6 md:p-4 lg:p-4")).toBe("p-4 sm:p-6 md:p-4"), expect(ht("sm:bg-red-400 bg-red-400")).toBe("bg-red-400"), expect(ht("w-[30%] sm:w-[30%]")).toBe("w-[30%]"), expect(ht("w-[30%] sm:w-[30%] md:w-[40%]")).toBe("w-[30%] md:w-[40%]");
});
const uw = P(null, (t, e, { blockIds: n, newClasses: r }) => {
  const o = Z(
    t(Sr),
    (i) => (
      // @ts-ignore
      n.includes(t(i)._id)
    )
  ), s = ye(t(Br));
  return A(o, (i) => {
    const a = t(i), c = _(a, s.prop, `${St},`), { classes: d } = wn(c);
    return {
      ids: [a._id],
      props: {
        [s.prop]: `${St},${Xt(
          ht(Wl(d, r))
        )}`
      }
    };
  });
}), xu = () => {
  const t = gt(uw), { updateBlocks: e, updateBlocksRuntime: n } = ze();
  return B(
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
}, pw = (t) => {
  const e = ["xs", "sm", "md", "lg", "xl", "2xl"], n = e.indexOf(t);
  return n === -1 ? ["xs"] : e.slice(0, n + 1);
}, fw = P((t) => {
  const e = ye(t(Br)), n = t(Lo);
  if (!e || e.blockId !== _(n, "_id", null)) return [];
  const r = _(n, e.prop, `${St},`), { classes: o } = wn(r);
  return Z(A(o.trim().split(" "), Yi), (s) => !yl(s));
}), nl = { xs: 0, sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }, hw = P((t) => {
  const e = t(eu), n = t(di), r = t(Zc), o = pw(e);
  let s = Z(t(fw), { mod: n });
  return Re(n, "_") || (s = Z(s, (i) => o.includes(i.mq))), s = s.sort((i, a) => nl[i.mq] - nl[a.mq]), r || (s = Z(s, { dark: !1 })), s;
}), Uo = () => Ke(hw), mw = () => D(di), $r = (t) => {
  const e = Uo();
  return bp(e, { property: t });
}, gw = (t, e) => {
  const n = {
    xs: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
    "2xl": 5
  };
  return n[_(t, "mq", "xs")] <= n[e];
}, bw = {
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
}, rl = {
  xs: "",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
}, yw = (t) => `${t.toUpperCase()} ${rl[t] ? `(${rl[t]} & up)` : ""}`, Co = (t) => {
  const { t: e } = K(), { type: n = "icons", label: r, property: o, onEmitChange: s = () => {
  }, units: i, negative: a = !1 } = t, [c] = Lr(), [d] = mw(), [, p] = ko(), u = $r(o), f = xu(), h = Ki(), [g] = oe(), m = M(() => _(u, "fullCls", ""), [u]), y = B(
    (T, k = !0) => {
      const C = { dark: c, mq: p, mod: d, cls: T };
      (c || d !== "") && (C.mq = "xs");
      const E = dw(C);
      f(g, [E], k);
    },
    [g, c, p, d, o, f]
  ), x = B(() => {
    h(g, [m], !0);
  }, [g, m, h]), w = M(() => gw(u, p), [u, p]);
  z(() => {
    s(w, u);
  }, [w, s, u]);
  const [, , S] = ko(), v = B(
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
  ), N = _(u, "dark", null) === c && _(u, "mod", null) === d && _(u, "mq", null) === p;
  return /* @__PURE__ */ l(Y0, { canChange: w, canReset: u && N, children: /* @__PURE__ */ b("div", { className: "group flex flex-row items-center py-2 first:pt-0 last:pb-0", children: [
    /* @__PURE__ */ l("div", { className: "relative w-[70px] truncate text-xs text-foreground", children: /* @__PURE__ */ l("span", { className: `text-[11px] ${u && !N ? "text-foreground" : ""}`, children: e(r) }) }),
    /* @__PURE__ */ b("div", { className: "flex flex-row items-center", children: [
      /* @__PURE__ */ b("div", { className: "w-[150px]", children: [
        n === "arbitrary" ? /* @__PURE__ */ l(
          K0,
          {
            currentClass: _(u, "cls", ""),
            classPrefix: _(bw, o, ""),
            units: i || [],
            onChange: y,
            negative: a,
            cssProperty: o
          }
        ) : null,
        n === "icons" && /* @__PURE__ */ l(ow, { property: o, onChange: y }),
        n === "range" && /* @__PURE__ */ l(sw, { property: o, onChange: y }),
        n === "color" && /* @__PURE__ */ l(rw, { property: o, onChange: y }),
        n === "dropdown" && /* @__PURE__ */ l(bu, { label: r, property: o, onChange: y })
      ] }),
      /* @__PURE__ */ l("div", { className: `w-[30px] cursor-pointer ${m ? "visible" : "invisible"}`, children: N ? /* @__PURE__ */ l("button", { type: "button", onClick: () => x(), title: "Reset", className: "flex px-1.5 text-xs", children: /* @__PURE__ */ l(af, { className: "h-5 w-5 text-blue-500 hover:opacity-80" }) }) : w && u ? /* @__PURE__ */ b(Ne, { delayDuration: 100, children: [
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
            yw(_(u, "mq")),
            c && !u.dark ? "(Light mode)" : ""
          ] }),
          /* @__PURE__ */ l("br", {}),
          /* @__PURE__ */ b(
            "button",
            {
              type: "button",
              onClick: () => v(_(u, "mq")),
              className: "block w-full cursor-default text-right font-semibold text-blue-500",
              children: [
                "Switch to ",
                _(u, "mq").toUpperCase()
              ]
            }
          )
        ] }) }) })
      ] }) : null })
    ] })
  ] }) });
}, xw = ["px", "%", "em", "rem", "ch", "vh", "vw"], zs = ({
  label: t,
  options: e,
  borderB: n = !1,
  borderT: r = !1,
  type: o = "arbitrary",
  units: s = xw,
  negative: i = !1
}) => {
  const { t: a } = K(), [c, d] = $(e[0].key), p = Uo(), u = B((f) => A(p, "property").includes(f), [p]);
  return /* @__PURE__ */ b(
    "div",
    {
      className: `mb-2 border-border py-2 first:pt-0 last:pb-0 ${n ? "border-b" : ""} ${r ? "border-t" : ""}`,
      children: [
        /* @__PURE__ */ b("div", { className: "flex flex-row text-xs", children: [
          t && /* @__PURE__ */ l("span", { className: "relative w-[70px] flex-none text-xs text-foreground", children: a(t) }),
          /* @__PURE__ */ l("div", { className: "mb-3 flex grow flex-row flex-wrap gap-x-px", children: e.map(({ label: f, key: h }, g) => /* @__PURE__ */ l("div", { className: "first:rounded-l last:rounded-r", children: /* @__PURE__ */ b(Ne, { children: [
            /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ b(
              "button",
              {
                type: "button",
                onClick: () => d(h),
                className: `relative cursor-pointer rounded-full p-1 text-[8px] ${h === c ? "bg-[#3E57F0] text-white" : "text-gray-600 dark:text-gray-300"}`,
                children: [
                  ne.createElement("div", {
                    className: u(h) ? "-bottom-1.5 absolute bg-[#3E57F0] h-[2px] left-0 w-full" : ""
                  }),
                  ne.createElement(_(yu, h, Io), { className: "text-inherit w-3 h-3" })
                ]
              }
            ) }),
            /* @__PURE__ */ l(be, { children: Kt(xl(f)) })
          ] }) }, `option-${g}`)) })
        ] }),
        /* @__PURE__ */ l("div", { className: "mt-0 flex items-center", children: /* @__PURE__ */ l(
          Co,
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
}, ol = ({ heading: t, items: e }) => {
  const { t: n } = K(), r = Uo(), o = M(() => {
    const s = (c) => $t(
      c.map((d) => d.styleType === "multiple" ? A(d.options, "key") : d.property)
    ), i = $t(
      e.map((c) => c.styleType === "accordion" ? s(c.items) : c.styleType === "multiple" ? A(c.options, "key") : c.property)
    ), a = A(r, "property");
    return yp(i, a).length > 0;
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
    /* @__PURE__ */ l("div", { className: "p-2", children: e.map((s) => s.styleType === "multiple" ? /* @__PURE__ */ l(zs, { ...s }, s.label) : /* @__PURE__ */ l(Co, { ...s }, s.label)) })
  ] });
}, ww = Eo({}), xs = ({ section: t, showAccordian: e }) => {
  const { t: n } = K(), r = Uo(), o = B(
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
  ), s = M(() => ({}), []);
  return /* @__PURE__ */ l(ww.Provider, { value: s, children: e ? /* @__PURE__ */ b(pu, { value: t.heading, className: "border-none", children: [
    /* @__PURE__ */ l(fu, { className: "border-slate-150 border-t py-2 text-xs", children: /* @__PURE__ */ l("div", { className: "flex items-center py-2", children: /* @__PURE__ */ l("div", { className: "flex items-center gap-x-2 text-xs font-medium", children: Kt(n(t.heading)) }) }) }),
    /* @__PURE__ */ l(hu, { className: "py-2", children: t.items.map((i) => le(i, "component") ? ne.createElement(i.component, { key: i.label }) : le(i, "styleType") ? i.styleType === "multiple" ? /* @__PURE__ */ l(zs, { ...i }, i.label + "multiple-choices") : i.styleType === "accordion" && o(i == null ? void 0 : i.conditions) ? /* @__PURE__ */ l(ol, { ...i }, i.label + "nested-options") : null : /* @__PURE__ */ l(Co, { ...i }, i.label + "block-style")) })
  ] }) : /* @__PURE__ */ l("div", { className: "py-2", children: t.items.map((i, a) => le(i, "component") ? ne.createElement(i.component, { key: i.label }) : le(i, "styleType") ? i.styleType === "multiple" ? /* @__PURE__ */ l(zs, { ...i }, i.label + "multiple-choices" + a) : i.styleType === "accordion" && o(i == null ? void 0 : i.conditions) ? /* @__PURE__ */ l(ol, { ...i }, i.label + "nested-options" + a) : null : /* @__PURE__ */ l(Co, { ...i }, i.label + "block-style" + a)) }) });
}, vw = Ro.Root, kw = Ro.Trigger, wu = W.forwardRef(({ className: t, align: e = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ l(
  Ro.Content,
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
wu.displayName = Ro.Content.displayName;
const Cw = Et("selectedBreakpoints", ["XS", "MD", "XL"]), Nw = () => {
  const [t, e] = D(Cw);
  return [t, e];
}, sl = ({ className: t = "" }) => /* @__PURE__ */ b(
  "svg",
  {
    className: Qe("h-4 w-4", t),
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
), Sw = ({ className: t = "" }) => /* @__PURE__ */ b(
  "svg",
  {
    className: Qe("h-4 w-4", t),
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
), Ew = ({ className: t = "" }) => /* @__PURE__ */ b(
  "svg",
  {
    className: Qe("h-4 w-4", t),
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
), il = ({ landscape: t = !1, className: e = "" }) => /* @__PURE__ */ b(
  "svg",
  {
    className: Qe("h-4 w-4", t ? "rotate-90" : "", e),
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
), Hs = [
  {
    title: "Mobile (Base)",
    content: "Styles set here are applied to all screen unless edited at higher breakpoint",
    breakpoint: "xs",
    icon: /* @__PURE__ */ l(sl, { className: "h-4 w-4" }),
    width: 400
  },
  {
    title: "Mobile landscape (SM)",
    content: "Styles set here are applied at 640px and up unless edited at higher breakpoint",
    breakpoint: "sm",
    icon: /* @__PURE__ */ l(sl, { className: "h-4 w-4 rotate-90" }),
    width: 640
  },
  {
    title: "Tablet (MD)",
    content: "Styles set here are applied at 768px and up",
    breakpoint: "md",
    icon: /* @__PURE__ */ l(il, {}),
    width: 800
  },
  {
    title: "Tablet Landscape (LG)",
    content: "Styles set here are applied at 1024px and up unless edited at higher breakpoint",
    breakpoint: "lg",
    icon: /* @__PURE__ */ l(il, { landscape: !0 }),
    width: 1024
  },
  {
    title: "Desktop (XL)",
    content: "Styles set here are applied at 1280px and up unless edited at higher breakpoint",
    breakpoint: "xl",
    icon: /* @__PURE__ */ l(Sw, { className: "h-4 w-4" }),
    width: 1420
  },
  {
    title: "Large Desktop (2XL)",
    content: "Styles set here are applied at 1536px and up",
    breakpoint: "2xl",
    icon: /* @__PURE__ */ l(Ew, { className: "h-4 w-4" }),
    width: 1920
  }
], al = ({
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
  buttonClass: p = "",
  activeButtonClass: u = ""
}) => {
  const { t: f } = K();
  return n ? /* @__PURE__ */ b(vw, { openDelay: e, children: [
    /* @__PURE__ */ l(kw, { asChild: !0, children: /* @__PURE__ */ l(
      re,
      {
        onClick: () => d(a),
        size: "sm",
        className: Qe("h-7 w-7 rounded-md p-1", i === s ? u : p),
        variant: "ghost",
        children: c
      }
    ) }),
    /* @__PURE__ */ l(wu, { className: "w-fit max-w-52 border-border", children: /* @__PURE__ */ l("div", { className: "flex justify-between space-x-4", children: /* @__PURE__ */ b("div", { className: "space-y-1", children: [
      /* @__PURE__ */ l("h4", { className: "text-sm font-semibold", children: f(r) }),
      t && /* @__PURE__ */ l("p", { className: "text-xs", children: f(o) })
    ] }) }) })
  ] }) : /* @__PURE__ */ l(
    re,
    {
      onClick: () => d(a),
      size: "sm",
      className: "h-7 w-7 rounded-md p-1",
      variant: i === s ? "outline" : "ghost",
      children: c
    }
  );
}, _w = ({
  openDelay: t = 400,
  canvas: e = !1,
  tooltip: n = !0,
  buttonClass: r = "",
  activeButtonClass: o = ""
}) => {
  const [s, , i] = ko(), [a, c] = Vi(), [d, p] = Nw(), u = d, f = p, { t: h } = K(), g = G("breakpoints", Hs), m = (w) => {
    u.includes(w) ? u.length > 2 && f(u.filter((S) => S !== w)) : f((S) => [...S, w]);
  }, y = (w) => {
    e || i(w), c(w);
  }, x = Hl(e ? a : s).toLowerCase();
  return g.length < 4 ? /* @__PURE__ */ l("div", { className: "flex items-center rounded-md", children: A(g, (w) => /* @__PURE__ */ un(
    al,
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
      g.filter((w) => Ie(u, es(w.breakpoint))),
      (w) => /* @__PURE__ */ un(
        al,
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
        /* @__PURE__ */ l(Xl, { children: h("Screen sizes") }),
        /* @__PURE__ */ l(ql, {}),
        A(g, (w) => /* @__PURE__ */ l(
          Jl,
          {
            disabled: w.breakpoint === "xs",
            onCheckedChange: () => m(es(w.breakpoint)),
            checked: Ie(u, es(w.breakpoint)),
            onSelect: (S) => S.preventDefault(),
            children: h(w.title)
          },
          w.breakpoint
        ))
      ] })
    ] })
  ] });
};
function Aw() {
  const [, t] = ko(), { t: e } = K(), n = M(() => {
    const r = Hs.find((o) => o.breakpoint === t);
    return (r == null ? void 0 : r.content) ?? "";
  }, [t, Hs]);
  return /* @__PURE__ */ b(Q, { children: [
    /* @__PURE__ */ b("div", { className: "sticky top-0 z-10 flex items-center justify-start bg-muted px-2 py-1 shadow-sm", children: [
      /* @__PURE__ */ b("p", { className: "text-xs text-muted-foreground", children: [
        e("Screen"),
        " "
      ] }),
      /* @__PURE__ */ l(_w, { openDelay: 1e3, tooltip: !1 })
    ] }),
    /* @__PURE__ */ l("div", { className: "mb-2 flex items-center justify-between rounded-md rounded-t-none border border-border p-1", children: /* @__PURE__ */ l("p", { className: "flex flex-1 items-center space-x-2 text-[10px] text-foreground", children: /* @__PURE__ */ b("span", { className: "text-xs text-foreground", children: [
      /* @__PURE__ */ l("span", { className: "rounded-md bg-muted px-1 py-px text-xs font-bold uppercase text-muted-foreground", children: t === "xs" ? "Base" : t }),
      "  ",
      e(n)
    ] }) }) })
  ] });
}
const vu = ({ className: t = "" }) => /* @__PURE__ */ l(lf, { className: t });
function ku({
  from: t = "default",
  classFromProps: e,
  onAddNew: n,
  onRemove: r,
  showDesignTokenSuggestions: o = !0
}) {
  var qn;
  const s = te(null), [i, a] = $(""), [c, d] = $(!1), [p, u] = $(-1), f = te(!1), h = tw(), { t: g } = K(), [m] = He(), y = ae(), x = xu(), w = Ki(), [S] = oe(), [v, N] = $(""), T = Ke(_r), k = (qn = ye(m)) == null ? void 0 : qn.prop, { classes: C } = wn(_(y, k, "")), I = (t === "default" ? C : e ?? "").split(" ").filter((U) => !F(U)), L = M(() => [...I].sort((U, pe) => {
    const Me = U.startsWith(Fr), Tt = pe.startsWith(Fr);
    return Me && !Tt ? -1 : !Me && Tt ? 1 : 0;
  }), [I]), R = G("flags.copyPaste", !0), V = (U) => {
    const pe = U.startsWith(Fr), Me = /* @__PURE__ */ l("div", { className: "group relative flex max-w-[260px] items-center", children: /* @__PURE__ */ b(
      "button",
      {
        onDoubleClick: () => {
          N(Y(U)), t === "default" ? w(S, [U], !0) : (Zt(r) && r(U), N(U)), setTimeout(() => {
            s.current && s.current.focus();
          }, 10);
        },
        className: "flex h-max cursor-default items-center gap-x-1 truncate break-words rounded bg-gray-200 py-px pl-0.5 pr-1 text-[11px] text-gray-600 dark:bg-gray-800 dark:text-gray-300",
        children: [
          /* @__PURE__ */ b("div", { className: "z-10 flex h-full w-max items-center justify-center", children: [
            /* @__PURE__ */ l(
              To,
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
          /* @__PURE__ */ l("div", { children: Y(U) })
        ]
      }
    ) }, U);
    return pe && T[U] ? /* @__PURE__ */ b(Ne, { delayDuration: 200, children: [
      /* @__PURE__ */ l(Se, { asChild: !0, children: Me }),
      /* @__PURE__ */ l(be, { side: "bottom", className: "max-w-[300px]", children: /* @__PURE__ */ l("p", { className: "font-light", children: T[U].value }) })
    ] }, U) : Me;
  }, Y = (U) => {
    if (U.startsWith(Fr)) {
      const pe = T[U];
      return pe ? pe.name : U;
    }
    return U;
  }, q = (U) => {
    const pe = Object.entries(T).find(([, Me]) => Me.name === U);
    return pe ? `${pe[0]}` : U;
  }, we = () => {
    const U = v.trim().replace(/ +(?= )/g, "").split(" ").map(q);
    t === "designToken" ? Zt(n) && n(U) : x(S, U, !0), N("");
  }, [ve, fe] = $([]), Ve = G("flags.designTokens", !0), J = ({ value: U }) => {
    const pe = U.trim().toLowerCase(), Me = pe.match(/.+:/g);
    let Tt = [], Zo = [];
    if (Ve && o && (pe === "" ? Zo = Object.entries(T).map(([Ht, Zn]) => ({
      name: Zn.name,
      id: `${Ht}`,
      isDesignToken: !0
    })) : Zo = Object.entries(T).filter(([, Ht]) => Ht.name.toLowerCase().includes(pe)).map(([Ht, Zn]) => ({
      name: Zn.name,
      id: `${Ht}`,
      isDesignToken: !0
    }))), Me && Me.length > 0) {
      const [Ht] = Me, Zn = pe.replace(Ht, "");
      Tt = h.search(Zn).map((Qo) => ({
        ...Qo,
        item: { ...Qo.item, name: Ht + Qo.item.name }
      }));
    } else
      Tt = h.search(pe);
    const np = [...Zo, ...A(Tt, "item")];
    return fe(np);
  }, Te = () => {
    fe([]);
  }, ft = (U) => U.name, Tn = (U) => /* @__PURE__ */ b("div", { className: "flex items-center gap-2 rounded-md p-1", children: [
    U.isDesignToken && /* @__PURE__ */ l(vu, { className: "h-4 w-4 text-gray-600" }),
    /* @__PURE__ */ l("span", { children: U.name })
  ] }), In = M(
    () => ({
      ref: s,
      autoComplete: "off",
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: !1,
      placeholder: `${g(o ? "Enter classes separated by space or design tokens" : "Enter classes separated by space")}`,
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
          U.preventDefault(), we();
        }
        if (U.key === "Tab" && ve.length > 0) {
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
      onChange: (U, { newValue: pe }) => N(pe),
      className: `w-full rounded-md text-xs px-2 hover:outline-0 bg-background border-border ${t === "default" ? "py-1" : "py-1.5"}`
    }),
    [v, g, s, ve.length]
  ), zt = (U) => {
    const pe = i.trim().replace(/ +(?= )/g, "").split(" ").map(q);
    w(S, [U], !0), x(S, pe, !0), a(""), u(-1);
  }, ta = () => {
    if (navigator.clipboard === void 0) {
      Ce.error(g("Clipboard not supported"));
      return;
    }
    navigator.clipboard.writeText(I.join(" ")), Ce.success(g("Classes copied to clipboard")), d(!0), setTimeout(() => d(!1), 2e3);
  };
  return /* @__PURE__ */ b(
    "div",
    {
      className: `flex w-full flex-col gap-y-1.5 pb-4 ${t === "designToken" ? "border-none" : "border-b border-border"}`,
      children: [
        /* @__PURE__ */ l("div", { className: "flex items-center justify-between gap-x-2", children: /* @__PURE__ */ l("div", { className: "flex w-full items-center justify-between gap-x-2 text-muted-foreground", children: /* @__PURE__ */ b("span", { className: "flex items-center gap-x-1", children: [
          /* @__PURE__ */ l("span", { children: g("Classes") }),
          R && /* @__PURE__ */ b(Ne, { children: [
            /* @__PURE__ */ l(Se, { asChild: !0, children: c ? /* @__PURE__ */ l(Nr, { className: "rounded-full border border-green-500 bg-green-500/10 text-green-500" }) : /* @__PURE__ */ l(Ks, { onClick: ta, className: "cursor-pointer" }) }),
            /* @__PURE__ */ l(be, { children: /* @__PURE__ */ l("p", { children: g("Copy classes to clipboard") }) })
          ] })
        ] }) }) }),
        /* @__PURE__ */ b("div", { className: "relative flex items-center gap-x-3", children: [
          /* @__PURE__ */ l("div", { className: "relative flex w-full items-center gap-x-3", children: /* @__PURE__ */ l(
            rh,
            {
              suggestions: ve,
              onSuggestionsFetchRequested: J,
              onSuggestionsClearRequested: Te,
              getSuggestionValue: ft,
              renderSuggestion: Tn,
              inputProps: In,
              onSuggestionSelected: (U, { suggestionValue: pe }) => {
                f.current = !0;
                const Tt = [q(pe)];
                t === "designToken" ? Zt(n) && n(Tt) : x(S, Tt, !0), N("");
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
              onClick: we,
              disabled: v.trim() === "",
              size: "sm",
              children: /* @__PURE__ */ l(Ze, {})
            }
          )
        ] }),
        /* @__PURE__ */ l("div", { className: "flex w-full flex-wrap gap-2 overflow-x-hidden", children: L.map(
          (U, pe) => p === pe ? /* @__PURE__ */ l(
            "input",
            {
              ref: s,
              value: i,
              onChange: (Me) => a(Me.target.value),
              onBlur: () => {
                zt(U);
              },
              onKeyDown: (Me) => {
                Me.key === "Enter" && zt(U);
              },
              onFocus: (Me) => {
                setTimeout(() => {
                  Me.target.select();
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
const $e = ["px", "%", "em", "rem", "ch", "vh", "vw"], Tw = {
  heading: "flex.heading",
  items: [
    { type: "arbitrary", label: "flex.basis", units: $e, property: "flexBasis" },
    { type: "range", label: "flex.order", property: "order" },
    { type: "dropdown", label: "flex.flex", property: "flexGrowShrink" },
    { type: "dropdown", label: "flex.grow", property: "flexGrow" },
    { type: "dropdown", label: "flex.shrink", property: "flexShrink" }
  ]
}, Iw = {
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
}, Bw = [
  {
    heading: "Styles",
    items: [
      { component: ku },
      { component: Aw },
      { type: "arbitrary", label: "layout.width", units: $e.concat("auto"), property: "width" },
      { type: "arbitrary", label: "layout.height", units: $e.concat("auto"), property: "height" },
      {
        styleType: "multiple",
        label: "layout.margin",
        negative: !0,
        units: [...$e, "auto"],
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
          { type: "arbitrary", property: "fontSize", label: "typography.size", units: $e },
          { type: "arbitrary", property: "lineHeight", label: "typography.height", units: $e.concat("-") },
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
$e.concat("auto"), $e.concat("auto"), [...$e], $e.concat("auto"), $e.concat("auto"), $e.concat("auto"), $e.concat("auto"), $e.concat("-");
const Rw = {
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
function ll() {
  const { flexChild: t, gridChild: e } = _h(), [n] = He(), [r, o] = ne.useState(""), [s, i] = ne.useState({
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
      const p = !_(s, "negative", !1), u = _(s, "cssProperty", "");
      let f = parseFloat(s.dragStartValue);
      f = isNaN(f) ? 0 : f;
      let h = Rw[s.dragUnit];
      (Re(u, "scale") || u === "opacity") && (h = 10);
      let m = (s.dragStartY - d.pageY) / h + f;
      p && m < 0 && (m = 0), u === "opacity" && m > 1 && (m = 1), s.onDrag(`${m}`), o(`${m}`);
    },
    [s],
    50
  ), c = B(() => {
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
  return F(n) ? null : /* @__PURE__ */ b(gu.Provider, { value: { setDragData: i }, children: [
    s.dragging ? /* @__PURE__ */ l(
      "div",
      {
        onMouseMove: a,
        onMouseUp: () => c(),
        className: "absolute inset-0 z-30 cursor-row-resize bg-gray-300/10"
      }
    ) : null,
    /* @__PURE__ */ b("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ l(H0, {}),
      /* @__PURE__ */ b(D0, { defaultValue: ["Styles"], type: "multiple", className: "w-full", children: [
        t && /* @__PURE__ */ l(xs, { section: Tw, showAccordian: t || e }),
        e && /* @__PURE__ */ l(xs, { section: Iw, showAccordian: t || e }),
        Bw.map((d) => /* @__PURE__ */ l(xs, { section: d, showAccordian: t || e }, d.heading))
      ] })
    ] })
  ] });
}
const No = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ b(sn.Root, { ref: r, className: j("relative overflow-hidden", t), ...n, children: [
  /* @__PURE__ */ l(sn.Viewport, { className: "h-full w-full rounded-[inherit]", children: e }),
  /* @__PURE__ */ l(Cu, {}),
  /* @__PURE__ */ l(sn.Corner, {})
] }));
No.displayName = sn.Root.displayName;
const Cu = W.forwardRef(({ className: t, orientation: e = "vertical", ...n }, r) => /* @__PURE__ */ l(
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
Cu.displayName = sn.ScrollAreaScrollbar.displayName;
const Ji = vn.Root, Ko = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  vn.List,
  {
    ref: n,
    className: j(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      t
    ),
    ...e
  }
));
Ko.displayName = vn.List.displayName;
const lt = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  vn.Trigger,
  {
    ref: n,
    className: j(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      t
    ),
    ...e
  }
));
lt.displayName = vn.Trigger.displayName;
const jt = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  vn.Content,
  {
    ref: n,
    className: j(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t
    ),
    ...e
  }
));
jt.displayName = vn.Content.displayName;
const Lw = ({
  block: t,
  disabled: e,
  parentId: n,
  position: r
}) => {
  const { type: o, icon: s, label: i, disabledReason: a } = t, c = e || t.disabled, { addCoreBlock: d, addPredefinedBlock: p } = Nn(), u = () => {
    if (le(t, "blocks")) {
      const y = Zt(t.blocks) ? t.blocks() : t.blocks;
      p(Bo(y), n || null, r);
    } else
      d(t, n || null, r);
    me.publish(se.CLOSE_ADD_BLOCK);
  }, f = vt(), { t: h } = K(), { onDragStart: g, onDragEnd: m } = Rr();
  return /* @__PURE__ */ l(Q, { children: /* @__PURE__ */ b(Ne, { children: [
    /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ b(
      "button",
      {
        disabled: c,
        onClick: u,
        type: "button",
        onDragStart: (y) => !c && g(y, { ...t, label: i, icon: s }),
        onDragEnd: m,
        draggable: f && !c,
        className: `${wl(`chai-block-${o}`)} ${f && !c ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"} space-y-2 rounded-lg border border-border p-3 text-center hover:bg-slate-300/50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 dark:border-gray-700 dark:text-white dark:hover:bg-slate-800/50 dark:disabled:bg-gray-900 dark:disabled:text-foreground ${c ? "opacity-50" : ""}`,
        children: [
          un(s || Io, { className: "w-4 h-4 mx-auto", "data-add-core-block-icon": o }),
          /* @__PURE__ */ l("p", { className: "truncate text-xs", children: Fn(h(i || o)) })
        ]
      }
    ) }),
    /* @__PURE__ */ l(be, { children: /* @__PURE__ */ l("p", { children: c && a ? a : h(i || o) }) })
  ] }) });
}, Pw = ({
  parentId: t,
  position: e,
  gridCols: n = "grid-cols-2",
  disableBlockGroupsSidebar: r = !1
}) => {
  const o = Zs(), s = vl(o, "category"), i = js(A(s.core, "group"));
  return /* @__PURE__ */ l(
    Ru,
    {
      gridCols: n,
      parentId: t,
      position: e,
      groups: i,
      blocks: s.core,
      disableBlockGroupsSidebar: r
    }
  );
}, Nu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l("div", { ref: n, className: j("rounded-xl border bg-card text-card-foreground shadow", t), ...e }));
Nu.displayName = "Card";
const Su = W.forwardRef(
  ({ className: t, ...e }, n) => /* @__PURE__ */ l("div", { ref: n, className: j("flex flex-col space-y-1.5 p-6", t), ...e })
);
Su.displayName = "CardHeader";
const Ow = W.forwardRef(
  ({ className: t, ...e }, n) => /* @__PURE__ */ l("div", { ref: n, className: j("font-semibold leading-none tracking-tight", t), ...e })
);
Ow.displayName = "CardTitle";
const Eu = W.forwardRef(
  ({ className: t, ...e }, n) => /* @__PURE__ */ l("div", { ref: n, className: j("text-sm text-muted-foreground", t), ...e })
);
Eu.displayName = "CardDescription";
const _u = W.forwardRef(
  ({ className: t, ...e }, n) => /* @__PURE__ */ l("div", { ref: n, className: j("p-6 pt-0", t), ...e })
);
_u.displayName = "CardContent";
const Au = W.forwardRef(
  ({ className: t, ...e }, n) => /* @__PURE__ */ l("div", { ref: n, className: j("flex items-center p-6 pt-0", t), ...e })
);
Au.displayName = "CardFooter";
const Mw = Qs(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), bn = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  Kl.Root,
  {
    ref: n,
    className: j(Mw(), t),
    ...e
  }
));
bn.displayName = Kl.Root.displayName;
const Yo = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
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
Yo.displayName = "Textarea";
const Dw = ({
  parentId: t,
  position: e,
  fromSidebar: n
}) => {
  const { t: r } = K(), [o, s] = $(""), { addPredefinedBlock: i } = Nn(), [a, c] = $(!1), d = async () => {
    c(!0);
    const p = await Ep(o), u = fr(p);
    i([...u], t, e), s(""), c(!1), me.publish(se.CLOSE_ADD_BLOCK);
  };
  return /* @__PURE__ */ b(Nu, { className: `border-border/0 p-0 shadow-none ${n ? "w-full" : "max-w-full"}`, children: [
    /* @__PURE__ */ l(Su, { className: n ? "p-0" : "p-3", children: /* @__PURE__ */ l(Eu, { className: n ? "text-xs" : "", children: r("Use HTML snippets from Tailwind CSS component libraries") }) }),
    /* @__PURE__ */ l(_u, { className: `space-y-2 py-0 ${n ? "p-0" : "px-3"}`, children: /* @__PURE__ */ b("div", { className: "space-y-1", children: [
      /* @__PURE__ */ l(bn, { htmlFor: "current", className: "text-sm", children: r("Tailwind HTML snippet") }),
      /* @__PURE__ */ l(
        Yo,
        {
          onChange: (p) => s(p.target.value),
          rows: 12,
          value: o,
          placeholder: r("Enter your code snippet here"),
          className: "resize-none overflow-x-auto whitespace-pre bg-background font-mono text-xs font-normal"
        }
      )
    ] }) }),
    /* @__PURE__ */ l(Au, { className: "flex flex-col justify-end p-3", children: /* @__PURE__ */ l(re, { disabled: o.trim() === "" || a, onClick: () => d(), size: "sm", className: "w-fit", children: a ? /* @__PURE__ */ b(Q, { children: [
      /* @__PURE__ */ l(El, { className: "mr-2 h-4 w-4 animate-spin" }),
      " ",
      r("Importing...")
    ] }) : r("Import HTML") }) })
  ] });
}, Xi = _e.Root, qi = _e.Value, Jo = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ b(
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
Jo.displayName = _e.Trigger.displayName;
const Tu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  _e.ScrollUpButton,
  {
    ref: n,
    className: j("flex cursor-default items-center justify-center py-1", t),
    ...e,
    children: /* @__PURE__ */ l(cf, { className: "h-4 w-4" })
  }
));
Tu.displayName = _e.ScrollUpButton.displayName;
const Iu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  _e.ScrollDownButton,
  {
    ref: n,
    className: j("flex cursor-default items-center justify-center py-1", t),
    ...e,
    children: /* @__PURE__ */ l(xn, { className: "h-4 w-4" })
  }
));
Iu.displayName = _e.ScrollDownButton.displayName;
const Xo = W.forwardRef(({ className: t, children: e, position: n = "popper", ...r }, o) => /* @__PURE__ */ l(_e.Portal, { children: /* @__PURE__ */ b(
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
      /* @__PURE__ */ l(Tu, {}),
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
      /* @__PURE__ */ l(Iu, {})
    ]
  }
) }));
Xo.displayName = _e.Content.displayName;
const $w = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(_e.Label, { ref: n, className: j("px-2 py-1.5 text-sm font-semibold", t), ...e }));
$w.displayName = _e.Label.displayName;
const qo = W.forwardRef(({ className: t, children: e, ...n }, r) => /* @__PURE__ */ b(
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
qo.displayName = _e.Item.displayName;
const Fw = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(_e.Separator, { ref: n, className: j("-mx-1 my-1 h-px bg-muted", t), ...e }));
Fw.displayName = _e.Separator.displayName;
const zw = ({
  defaultValue: t = "",
  onValueChange: e,
  options: n,
  placeholder: r = "Select",
  className: o = "",
  height: s = ""
}) => {
  const [i, a] = $(t), c = (d) => {
    const p = d.target.value;
    a(p), e(p);
  };
  return /* @__PURE__ */ l("div", { className: Qe("relative inline-block w-full", o), children: /* @__PURE__ */ b(
    "select",
    {
      className: Qe(
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
function Hw({
  uiLibraries: t,
  library: e,
  setLibrary: n
}) {
  const { t: r } = K();
  return e ? /* @__PURE__ */ b("div", { className: "h-12", children: [
    /* @__PURE__ */ l("p", { className: "text-xs font-bold text-gray-500", children: r("Choose library") }),
    /* @__PURE__ */ l(
      zw,
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
const Vw = P({}), jw = (t) => {
  const [e, n] = D(Vw), r = M(() => (t == null ? void 0 : t.getBlocksList) || (() => []), [t]), o = _(e, `${t == null ? void 0 : t.id}.blocks`, null), s = _(e, `${t == null ? void 0 : t.id}.loading`, "idle"), i = _(e, `${t == null ? void 0 : t.id}.error`, !1), a = te("idle");
  z(() => {
    (async () => {
      if (t && !(s === "complete" || a.current === "loading")) {
        a.current = "loading", n((d) => ({ ...d, [t == null ? void 0 : t.id]: { loading: "loading", blocks: [], error: !1 } }));
        try {
          const d = await r(t);
          a.current = "idle", n((p) => ({
            ...p,
            [t == null ? void 0 : t.id]: { loading: "complete", blocks: d || [], error: !1 }
          }));
        } catch {
          a.current = "idle", n((d) => ({ ...d, [t == null ? void 0 : t.id]: { loading: "complete", blocks: [], error: !0 } }));
        }
      }
    })();
  }, [t, o, s, a, n, r]);
  const c = B(
    (d) => {
      n((p) => ({ ...p, [d]: { loading: "idle", blocks: [], error: !1 } }));
    },
    [n]
  );
  return { data: o || [], isLoading: s === "loading", isError: i, resetLibrary: c };
}, Ww = () => D(vi), Gw = ({
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
  const { onDragStart: d, onDragEnd: p } = Rr(), u = vt(), [, f] = oe(), { clearHighlight: h } = At(), g = i !== void 0 ? i : u;
  return /* @__PURE__ */ l(
    "div",
    {
      draggable: g,
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
        s ? s(x) : p();
      },
      className: `${g ? "cursor-grab active:cursor-grabbing" : ""} ${a}`.trim(),
      children: r
    }
  );
};
function Bu({ value: t, setValue: e }) {
  const { t: n } = K();
  return /* @__PURE__ */ l("div", { className: "flex py-2", children: /* @__PURE__ */ b("div", { className: "relative flex w-full max-w-md items-center rounded border px-2", children: [
    /* @__PURE__ */ b("div", { className: "flex w-full items-center gap-x-2", children: [
      /* @__PURE__ */ l(Il, { className: "h-5 w-5 flex-shrink-0 stroke-[1px] text-muted-foreground" }),
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
const cl = ({
  block: t,
  library: e,
  parentId: n = void 0,
  position: r = -1
}) => {
  const [o, s] = $(!1), i = M(() => (e == null ? void 0 : e.getBlock) || (() => []), [e]), { addCoreBlock: a, addPredefinedBlock: c } = Nn(), d = _(t, "name", _(t, "label")), p = _(t, "description", ""), { onDragStart: u, onDragEnd: f } = Rr(), h = vt(), g = B(
    async (y) => {
      if (y.stopPropagation(), le(t, "component")) {
        a(t, n, r), me.publish(se.CLOSE_ADD_BLOCK);
        return;
      }
      s(!0);
      let x = await i({ library: e, block: t });
      typeof x == "string" && (x = fr(x)), F(x) || c(Bo(x), n, r), me.publish(se.CLOSE_ADD_BLOCK), setTimeout(() => s(!1), 1e3);
    },
    [a, c, t, i, e, n, r]
  );
  return /* @__PURE__ */ b(Ne, { children: [
    /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(Gw, { draggable: h, onDragStart: async (y) => {
      if (!h) return;
      let x = await i({ library: e, block: t });
      typeof x == "string" && (x = fr(x)), u(y, { type: "Box", blocks: x, name: d }, !0);
    }, onDragEnd: f, children: /* @__PURE__ */ b(
      "div",
      {
        onClick: o ? () => {
        } : g,
        className: Yf(
          "relative mt-2 overflow-hidden rounded-md border border-border duration-200 hover:border-blue-500 hover:shadow-xl",
          h ? "" : "cursor-pointer"
        ),
        children: [
          o && /* @__PURE__ */ b("div", { className: "absolute flex h-full w-full items-center justify-center bg-black/70", children: [
            /* @__PURE__ */ l(Js, { className: "h-4 w-4 animate-spin text-white" }),
            /* @__PURE__ */ l("span", { className: "pl-2 text-sm text-white", children: "Adding..." })
          ] }),
          t.preview ? /* @__PURE__ */ l("img", { src: t.preview, className: "min-h-[45px] w-full rounded-md", alt: d }) : /* @__PURE__ */ b("div", { className: "flex h-fit w-full flex-col items-center justify-center gap-1 rounded-md border border-border p-6 py-10 text-center", children: [
            /* @__PURE__ */ l("p", { className: "font-medium text-gray-800", children: d }),
            p && /* @__PURE__ */ l("p", { className: "text-sm text-gray-600", children: p })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ l(be, { children: /* @__PURE__ */ l("div", { className: "max-w-xs", children: /* @__PURE__ */ l("p", { className: "font-medium", children: d }) }) })
  ] });
}, Uw = ({
  parentId: t,
  position: e,
  fromSidebar: n
}) => {
  const [r, o] = Ww(), s = Cl(), i = s.find((R) => R.id === r) || ye(s), { data: a, isLoading: c, isError: d, resetLibrary: p } = jw(i), [u, f] = $(""), [h, g] = $([]), m = te(null);
  z(() => {
    a && Array.isArray(a) && a.length > 0 && (m.current = new Ul(a, {
      keys: ["name", "label", "description", "group"],
      threshold: 0.4,
      ignoreLocation: !0
    }));
  }, [a]), z(() => {
    if (!u.trim() || !m.current) {
      g([]);
      return;
    }
    const R = m.current.search(u).map((V) => V.item);
    g(R);
  }, [u]);
  const y = u.trim() && !F(h) ? h : a || [], x = vl(y, "group"), [w, S] = $(null);
  z(() => {
    if (F(yt(x))) {
      S(null);
      return;
    }
    if (!w || !x[w]) {
      S(ye(yt(x)) || null);
      return;
    }
  }, [x, w]);
  const v = _(x, w || "", []), N = te(null), { t: T } = K(), k = te(null);
  z(() => {
    var V;
    const R = (V = k.current) == null ? void 0 : V.querySelector("[data-radix-scroll-area-viewport]");
    R && R.scrollTo({ top: 0, behavior: "smooth" });
  }, [i, w]);
  const C = (R) => {
    N.current && (clearTimeout(N.current), N.current = null), N.current = setTimeout(() => {
      N.current && S(R);
    }, 400);
  }, E = () => {
    i != null && i.id && p(i.id);
  };
  if (c)
    return /* @__PURE__ */ b("div", { className: "mt-4 grid h-full w-full grid-cols-12 gap-2", children: [
      /* @__PURE__ */ l(Hn, { className: "col-span-3 h-full" }),
      /* @__PURE__ */ l(Hn, { className: "col-span-9 h-full" })
    ] });
  const I = Z(v, (R, V) => V % 2 === 0), L = Z(v, (R, V) => V % 2 === 1);
  return /* @__PURE__ */ l(Q, { children: /* @__PURE__ */ b("div", { className: "flex h-full max-h-full flex-col", children: [
    /* @__PURE__ */ l(Bu, { value: u, setValue: f }),
    /* @__PURE__ */ l("div", { className: "relative flex h-full max-h-full flex-1 overflow-hidden bg-background", children: /* @__PURE__ */ b("div", { className: `flex h-full flex-1 pt-2 ${n ? "flex-col" : ""}`, children: [
      /* @__PURE__ */ b(
        "div",
        {
          className: `flex max-h-full min-w-60 flex-col gap-1 ${n ? "pb-2" : "w-60 max-w-60 px-1 pr-2"}`,
          children: [
            /* @__PURE__ */ l(Hw, { library: i == null ? void 0 : i.id, setLibrary: o, uiLibraries: s }),
            /* @__PURE__ */ b("div", { className: "mt-2 flex h-full max-h-full w-full flex-1 flex-col", children: [
              /* @__PURE__ */ l("span", { className: "text-xs font-bold text-gray-500", children: T("Groups") }),
              !n && /* @__PURE__ */ l("hr", { className: "mt-1 border-border" }),
              /* @__PURE__ */ l(
                "div",
                {
                  className: `no-scrollbar mt-2 h-full max-h-full flex-1 overflow-y-auto ${n ? "" : "pb-20"}`,
                  children: F(x) ? /* @__PURE__ */ l("div", { className: "mt-4 flex flex-col items-center justify-center gap-3 p-4 text-center", children: u ? /* @__PURE__ */ l("p", { className: "text-sm", children: T("No matching blocks found") }) : d ? /* @__PURE__ */ b(Q, { children: [
                    /* @__PURE__ */ l("p", { className: "text-sm", children: T("Failed to load the UI library. Try again") }),
                    /* @__PURE__ */ b(re, { onClick: E, variant: "outline", size: "sm", className: "gap-2", children: [
                      /* @__PURE__ */ l(Js, { className: "h-4 w-4" }),
                      T("Retry")
                    ] })
                  ] }) : /* @__PURE__ */ l("p", { className: "text-sm", children: T("This library is empty") }) }) : n ? /* @__PURE__ */ b(Xi, { value: w ?? "", onValueChange: S, children: [
                    /* @__PURE__ */ l(Jo, { className: "w-full", children: /* @__PURE__ */ l(qi, { placeholder: T("Select a group") }) }),
                    /* @__PURE__ */ l(Xo, { children: A(x, (R, V) => /* @__PURE__ */ l(qo, { value: V, children: Fn(T(V.toLowerCase())) }, V)) })
                  ] }) : A(x, (R, V) => /* @__PURE__ */ b(
                    "div",
                    {
                      onMouseEnter: () => C(V),
                      onMouseLeave: () => N.current && clearTimeout(N.current),
                      role: "button",
                      onClick: () => S(V),
                      className: j(
                        "flex w-full cursor-pointer items-center justify-between rounded-md p-2 text-sm text-foreground transition-all ease-in-out hover:bg-gray-200 dark:hover:bg-gray-800",
                        V === w ? "bg-primary text-primary-foreground hover:bg-primary/80" : ""
                      ),
                      children: [
                        /* @__PURE__ */ l("span", { children: Fn(T(V.toLowerCase())) }),
                        /* @__PURE__ */ l(df, { className: "ml-2 h-5 w-5" })
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
        No,
        {
          ref: k,
          onMouseEnter: () => N.current && clearTimeout(N.current),
          className: "z-10 flex h-full max-h-full w-full flex-col gap-2 transition-all ease-linear",
          children: [
            F(v) && !F(x) ? /* @__PURE__ */ l("div", { className: "flex h-full flex-col items-center justify-center p-6 text-center", children: /* @__PURE__ */ l("p", { className: "text-sm", children: T("No blocks found in this group") }) }) : /* @__PURE__ */ b("div", { className: `grid w-full gap-2 ${n ? "grid-cols-1 pb-20" : "grid-cols-2 px-2"}`, children: [
              /* @__PURE__ */ l("div", { className: "flex flex-col gap-1", children: I.map((R, V) => /* @__PURE__ */ l(
                cl,
                {
                  parentId: t,
                  position: e,
                  block: R,
                  library: i
                },
                `block-${V}`
              )) }),
              /* @__PURE__ */ l("div", { className: "flex flex-col gap-1", children: L.map((R, V) => /* @__PURE__ */ l(
                cl,
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
}, Kw = ({
  parentId: t,
  position: e,
  fromSidebar: n
}) => /* @__PURE__ */ l(Uw, { parentId: t, position: e, fromSidebar: n }), Yw = P({
  blocks: [],
  groups: [],
  isLoading: !0,
  error: null
}), Jw = P(!1), dl = (t) => {
  if (!t) return "";
  let e = t.replace(/[-_]/g, " ");
  return e = e.replace(/([a-z])([A-Z])/g, "$1 $2"), e.split(" ").map((n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase()).join(" ");
}, Xw = ({
  parentId: t,
  position: e,
  gridCols: n = "grid-cols-2",
  disableBlockGroupsSidebar: r = !1
}) => {
  const { data: o, isLoading: s, refetch: i, error: a } = gc(), [c, d] = D(Yw), [p, u] = D(Jw), f = bc();
  z(() => {
    if (!p || Object.keys(c.blocks).length === 0)
      if (a)
        d({
          blocks: [],
          groups: [],
          isLoading: !1,
          error: a
        }), u(!0);
      else if (!s && Object.keys(o || {}).length > 0) {
        const m = Object.entries(o).map(([x, w]) => {
          const S = w, v = S.type || "partial", N = dl(v);
          return {
            type: "PartialBlock",
            // Set the type to PartialBlock
            label: dl(S.name || x),
            description: S.description || "",
            icon: uf,
            group: N,
            // Use formatted type as group
            category: "partial",
            partialBlockId: x,
            // Store the original ID as partialBlockId
            _name: S.name
          };
        }), y = js(A(m, "group"));
        d({
          blocks: m,
          groups: y,
          isLoading: !1,
          error: null
        }), u(!0);
      } else s ? d((m) => ({ ...m, isLoading: !0, error: null })) : !s && Object.keys(o || {}).length === 0 && (d({
        blocks: [],
        groups: [],
        isLoading: !1,
        error: "No partial blocks available"
      }), u(!0));
  }, [
    s,
    o,
    p,
    u,
    d,
    c.blocks,
    a
  ]);
  const h = () => {
    d((m) => ({ ...m, isLoading: !0, error: null })), u(!1), i();
  }, g = M(() => c.blocks.map((m) => {
    const { canAdd: y, reason: x } = f(m.partialBlockId);
    return {
      ...m,
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
    Ru,
    {
      gridCols: n,
      parentId: t,
      position: e,
      groups: c.groups,
      blocks: g,
      disableBlockGroupsSidebar: r
    }
  );
}, ul = ["basic", "typography", "media", "layout", "form", "advanced", "other"], Ru = ({
  groups: t,
  blocks: e,
  parentId: n,
  position: r,
  gridCols: o = "grid-cols-4",
  disableBlockGroupsSidebar: s
}) => {
  var L;
  const { t: i } = K(), [a] = ue(), [c, d] = $(""), p = te(null), [u] = D(Lu), f = (L = ee(a, (R) => R._id === n)) == null ? void 0 : L._type, [h, g] = $("all"), [m, y] = $(null), x = te(null), w = G("flags.dragAndDrop", !0);
  z(() => {
    const R = setTimeout(() => {
      var V;
      (V = p.current) == null || V.focus();
    }, 0);
    return () => clearTimeout(R);
  }, [u]), z(() => {
    c && (g("all"), y(null));
  }, [c]), z(() => (x.current = Ws((R) => {
    g(R);
  }, 500), () => {
    x.current && x.current.cancel();
  }), []);
  const S = B((R) => {
    y(R), x.current && x.current(R);
  }, []), v = B(() => {
    y(null), x.current && x.current.cancel();
  }, []), N = B((R) => {
    x.current && x.current.cancel(), g(R), y(null);
  }, []), T = M(
    () => c ? Lt(e).filter(
      (R) => {
        var V, Y;
        return (((V = R.label) == null ? void 0 : V.toLowerCase()) + " " + ((Y = R.type) == null ? void 0 : Y.toLowerCase())).includes(c.toLowerCase());
      }
    ) : e,
    [e, c]
  ), k = M(
    () => c ? t.filter(
      (R) => Yr(Z(Lt(T), { group: R }), { hidden: !0 }).length > 0
    ) : t.filter((R) => Yr(Z(Lt(e), { group: R }), { hidden: !0 }).length > 0),
    [e, T, t, c]
  ), C = M(
    () => xp(k, (R) => ul.indexOf(R) === -1 ? 99 : ul.indexOf(R)),
    [k]
  ), E = M(() => h === "all" ? T : Z(Lt(T), { group: h }), [T, h]), I = M(() => h === "all" ? C : [h], [C, h]);
  return /* @__PURE__ */ b("div", { className: "mx-auto flex h-full w-full flex-col", children: [
    /* @__PURE__ */ l(Bu, { value: c, setValue: d }),
    /* @__PURE__ */ b("div", { className: "sticky top-10 flex h-[calc(100%-48px)] overflow-hidden pt-2", children: [
      !s && C.length > 0 && /* @__PURE__ */ l("div", { className: "w-1/4 min-w-[120px] border-r border-border", children: /* @__PURE__ */ l(No, { className: "h-full", children: /* @__PURE__ */ b("div", { className: "space-y-1", children: [
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => N("all"),
            onMouseEnter: () => S("all"),
            onMouseLeave: v,
            className: `w-full rounded-md px-2 py-1.5 text-left text-sm font-medium ${h === "all" || m === "all" ? "bg-primary text-primary-foreground" : "hover:bg-primary/50 hover:text-primary-foreground"}`,
            children: i("All")
          },
          "sidebar-all"
        ),
        C.map((R) => /* @__PURE__ */ l(
          "button",
          {
            onClick: () => N(R),
            onMouseEnter: () => S(R),
            onMouseLeave: v,
            className: `w-full rounded-md px-2 py-1.5 text-left text-sm ${h === R || m === R ? "bg-primary text-primary-foreground" : "hover:bg-primary/50 hover:text-primary-foreground"}`,
            children: Fn(i(R.toLowerCase()))
          },
          `sidebar-${R}`
        ))
      ] }) }) }),
      /* @__PURE__ */ l(
        "div",
        {
          className: `h-full flex-1 overflow-hidden ${!s && C.length > 0 ? "w-3/4" : "w-full"}`,
          children: /* @__PURE__ */ l(No, { id: "add-blocks-scroll-area", className: "no-scrollbar h-full", children: k.length === 0 && c ? /* @__PURE__ */ l("div", { className: "flex flex-col items-center justify-center p-8 text-center text-muted-foreground", children: /* @__PURE__ */ b("p", { children: [
            i("No blocks found matching"),
            ' "',
            c,
            '"'
          ] }) }) : /* @__PURE__ */ l("div", { className: `${s ? "p-0" : "p-4"} space-y-6`, children: I.map((R, V) => /* @__PURE__ */ b("div", { className: "space-y-3", children: [
            /* @__PURE__ */ l("h3", { className: "px-1 text-sm font-medium", children: Fn(i(R.toLowerCase())) }),
            /* @__PURE__ */ l("div", { className: "grid gap-2 " + o, children: Yr(
              h === "all" ? Z(Lt(E), { group: R }) : Lt(E),
              { hidden: !0 }
            ).map((Y, q) => /* @__PURE__ */ l(
              Lw,
              {
                parentId: n,
                position: r,
                block: Y,
                disabled: !w && (!xt(f, Y.type) || !yh(f, Y.type))
              },
              Y.type + "-" + V + "-" + q
            )) })
          ] }, R)) }) })
        }
      )
    ] })
  ] });
}, Lu = Et("__add_block_tab", "library"), Pu = ({
  className: t,
  showHeading: e = !0,
  parentId: n = void 0,
  position: r = -1,
  fromSidebar: o = !1
}) => {
  const { t: s } = K(), [i, a] = D(Lu), [, c] = D(wc), d = G("flags.importHtml", !0), { data: p } = gc(), u = Object.keys(p || {}).length > 0, { hasPermission: f } = wt();
  z(() => {
    i === "partials" && !u && a("library");
  }, [i, u, a]);
  const h = B(() => {
    me.publish(se.CLOSE_ADD_BLOCK);
  }, []), g = _p(), m = d && f(Be.IMPORT_HTML), x = Cl().length > 0;
  return z(() => {
    i === "library" && !x && a("core");
  }, [i, x, a]), /* @__PURE__ */ b("div", { className: Qe("flex h-full w-full flex-col overflow-hidden", t), children: [
    e ? /* @__PURE__ */ b("div", { className: "mb-2 flex flex-col justify-between rounded-md bg-background/30 p-1", children: [
      /* @__PURE__ */ l("h1", { className: "flex flex-col items-baseline px-1 text-xl font-semibold xl:flex-col", children: s("Add block") }),
      /* @__PURE__ */ l("span", { className: "p-0 text-xs font-light leading-3 opacity-80 xl:pl-1", children: s(i === "html" ? "Enter or paste TailwindCSS HTML snippet" : "Click to add block to page") })
    ] }) : null,
    /* @__PURE__ */ b(
      Ji,
      {
        onValueChange: (w) => {
          c(""), a(w);
        },
        value: i,
        className: "flex h-full max-h-full flex-col overflow-hidden",
        children: [
          /* @__PURE__ */ b(Ko, { className: `flex items-center ${o ? "h-max w-max justify-start p-1" : "w-full"}`, children: [
            x && /* @__PURE__ */ l(lt, { value: "library", className: o ? "h-5 px-2 text-xs" : "", children: s("Library") }),
            /* @__PURE__ */ l(lt, { value: "core", className: o ? "h-5 px-2 text-xs" : "", children: s("Blocks") }),
            u && /* @__PURE__ */ l(lt, { value: "partials", className: o ? "h-5 px-2 text-xs" : "", children: s("Partials") }),
            m ? /* @__PURE__ */ l(lt, { value: "html", className: o ? "h-5 px-2 text-xs" : "", children: s("Import") }) : null,
            A(g, (w) => /* @__PURE__ */ l(
              lt,
              {
                value: w.id,
                className: o ? "h-5 px-2 text-xs" : "",
                children: ne.createElement(w.tab)
              },
              `tab-add-block-${w.id}`
            ))
          ] }),
          /* @__PURE__ */ l(jt, { value: "core", className: "h-full max-h-full flex-1 pb-20", children: /* @__PURE__ */ l("div", { className: "h-full max-h-full overflow-hidden", children: /* @__PURE__ */ l("div", { className: "h-full w-full", children: /* @__PURE__ */ l(
            Pw,
            {
              gridCols: o ? "grid-cols-2" : "grid-cols-4",
              parentId: n,
              position: r,
              disableBlockGroupsSidebar: o
            }
          ) }) }) }),
          x && /* @__PURE__ */ l(jt, { value: "library", className: "h-full max-h-full flex-1 pb-20", children: /* @__PURE__ */ l(Kw, { fromSidebar: o, parentId: n, position: r }) }),
          u && /* @__PURE__ */ l(jt, { value: "partials", className: "h-full max-h-full flex-1 pb-20", children: /* @__PURE__ */ l("div", { className: "h-full max-h-full overflow-hidden", children: /* @__PURE__ */ l("div", { className: "h-full w-full", children: /* @__PURE__ */ l(
            Xw,
            {
              gridCols: o ? "grid-cols-2" : "grid-cols-4",
              parentId: n,
              position: r,
              disableBlockGroupsSidebar: o
            }
          ) }) }) }),
          m ? /* @__PURE__ */ l(jt, { value: "html", className: "h-full max-h-full flex-1 pb-20 ", children: /* @__PURE__ */ l(Dw, { parentId: n, position: r, fromSidebar: o }) }) : null,
          A(g, (w) => /* @__PURE__ */ l(jt, { value: w.id, children: ne.createElement(w.tabContent, { close: h, parentId: n, position: r }) }, `panel-add-block-${w.id}`))
        ]
      }
    )
  ] });
}, qw = {
  display: "flex",
  alignItems: "center",
  zIndex: 1
}, Zw = ne.memo(function({ top: e, left: n, indent: r }) {
  const o = {
    position: "absolute",
    pointerEvents: "none",
    top: e - 1 + "px",
    left: "0px",
    right: 0,
    paddingLeft: n + r + "px"
  };
  return /* @__PURE__ */ b("div", { style: { ...qw, ...o }, children: [
    /* @__PURE__ */ l("div", { className: "h-1 w-1 rounded-full bg-green-500" }),
    /* @__PURE__ */ l("div", { className: "h-[1px] flex-1 rounded-[1px] border-t border-green-500" })
  ] });
}), Qw = [
  { key: "ArrowDown", command: "selectNext" },
  { key: "ArrowUp", command: "selectPrev" },
  { key: "ArrowLeft", command: "selectParent", when: "isLeaf || isClosed" },
  { key: "ArrowLeft", command: "close", when: "isOpen" },
  { key: "ArrowRight", command: "open", when: "isClosed" },
  { key: "ArrowRight", command: "selectNext", when: "isOpen" },
  { key: "Home", command: "selectFirst" },
  { key: "End", command: "selectLast" }
];
function ev(t) {
  t.firstNode && t.select(t.firstNode.id);
}
function tv(t) {
  t.lastNode && t.select(t.lastNode.id);
}
function nv(t) {
  const e = t.selectedNodes[0].next || t.firstNode;
  t.select(e.id);
}
function rv(t) {
  const e = t.selectedNodes[0].prev || t.lastNode;
  t.select(e.id);
}
const ov = (t, e) => {
  const n = t.selectedNodes[0], r = (n == null ? void 0 : n.parent) || null;
  r && e && t.select(r.id);
}, sv = (t, e) => {
  const n = t.selectedNodes[0];
  n.isInternal && e && n.open();
}, iv = (t, e) => {
  const n = t.selectedNodes[0];
  n.isInternal && e && n.close();
}, Ou = Ye.Root, av = Ye.Trigger, lv = Ye.Portal, Mu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  Ye.Overlay,
  {
    className: j(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",
      t
    ),
    ...e,
    ref: n
  }
));
Mu.displayName = Ye.Overlay.displayName;
const Zi = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ b(lv, { children: [
  /* @__PURE__ */ l(Mu, {}),
  /* @__PURE__ */ l(
    Ye.Content,
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
Zi.displayName = Ye.Content.displayName;
const Qi = ({ className: t, ...e }) => /* @__PURE__ */ l("div", { className: j("flex flex-col space-y-2 text-center sm:text-left", t), ...e });
Qi.displayName = "AlertDialogHeader";
const Du = ({ className: t, ...e }) => /* @__PURE__ */ l("div", { className: j("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t), ...e });
Du.displayName = "AlertDialogFooter";
const ea = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(Ye.Title, { ref: n, className: j("text-lg font-semibold", t), ...e }));
ea.displayName = Ye.Title.displayName;
const $u = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(Ye.Description, { ref: n, className: j("text-sm text-muted-foreground", t), ...e }));
$u.displayName = Ye.Description.displayName;
const Fu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(Ye.Action, { ref: n, className: j(Nl(), t), ...e }));
Fu.displayName = Ye.Action.displayName;
const zu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
  Ye.Cancel,
  {
    ref: n,
    className: j(Nl({ variant: "outline" }), "mt-2 sm:mt-0", t),
    ...e
  }
));
zu.displayName = Ye.Cancel.displayName;
const cv = ({ children: t }) => {
  const { t: e } = K(), { setNewBlocks: n } = ze(), [, r] = oe(), [, o] = He(), s = B(() => {
    n([]), r([]), o([]);
  }, [n]);
  return /* @__PURE__ */ l("div", { className: "flex items-center", children: /* @__PURE__ */ b(Ou, { children: [
    /* @__PURE__ */ l(av, { asChild: !0, children: t || /* @__PURE__ */ l(re, { size: "sm", variant: "ghost", className: "flex items-center", children: /* @__PURE__ */ l(Ml, {}) }) }),
    /* @__PURE__ */ b(Zi, { className: "border-border", children: [
      /* @__PURE__ */ b(Qi, { children: [
        /* @__PURE__ */ l(ea, { className: "text-foreground", children: e("Clear whole canvas?") }),
        /* @__PURE__ */ l($u, { children: e("Are you sure you want to clear the page?") })
      ] }),
      /* @__PURE__ */ b(Du, { children: [
        /* @__PURE__ */ l(zu, { className: "text-foreground", children: e("Cancel") }),
        /* @__PURE__ */ l(Fu, { onClick: s, children: e("Yes") })
      ] })
    ] })
  ] }) });
}, dv = () => {
  const t = ae(), { t: e } = K(), [, n] = D(pc), r = Sl(), o = () => {
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
}, uv = () => {
  const { t } = K(), e = ae(), n = _t();
  return /* @__PURE__ */ b(Ee, { onClick: () => {
    e && n([e._id], {
      _libBlockId: null
    });
  }, className: "flex items-center gap-x-4 text-xs", children: [
    /* @__PURE__ */ l(Tl, { className: "h-4 w-4" }),
    " ",
    t("Unlink from library")
  ] });
}, pl = () => {
  const { t } = K(), [e] = oe();
  return G("flags.exportCode", !1) ? /* @__PURE__ */ b(
    Ee,
    {
      className: "flex items-center gap-x-4 text-xs",
      onClick: () => me.publish(se.OPEN_EXPORT_CODE, e),
      children: [
        /* @__PURE__ */ l(pf, {}),
        " ",
        t("Export")
      ]
    }
  ) : null;
}, fl = ({ isFromBody: t = !1 }) => {
  const [e] = ue(), [n] = oe(), { pasteBlocks: r } = Ti(), [, o, s] = Yc(), { t: i } = K(), a = ae(), c = G("flags.copyPaste", !0), d = B(() => {
    var f;
    const u = (t ? (f = e == null ? void 0 : e.filter((h) => !(h != null && h._parent))) == null ? void 0 : f.map((h) => h == null ? void 0 : h._id) : n).map((h) => {
      const g = e.find((m) => m._id === h);
      return {
        id: h,
        data: g
      };
    });
    s(u.map((h) => h.id)) ? Ce.warning("Partial blocks detected. Clone partial blocks?", {
      cancel: {
        label: i("No"),
        onClick: () => {
          o(u.map((h) => h.id)), Ce.dismiss();
        }
      },
      action: {
        label: i("Yes"),
        onClick: () => {
          o(
            u.map((h) => h.id),
            !0
          ), Ce.dismiss();
        }
      },
      position: "top-center"
    }) : o(u.map((h) => h.id));
  }, [n, e, o, s]);
  return /* @__PURE__ */ b(Q, { children: [
    c && /* @__PURE__ */ b(
      Ee,
      {
        disabled: !ri(a == null ? void 0 : a._type),
        onClick: d,
        className: "flex items-center gap-x-4 text-xs",
        children: [
          /* @__PURE__ */ l(Ks, {}),
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
          /* @__PURE__ */ l(Xs, {}),
          " ",
          i("Paste")
        ]
      }
    )
  ] });
}, pv = () => {
  const [t] = oe(), [, e] = Do(), { t: n } = K(), r = G("flags.copyPaste", !0);
  return /* @__PURE__ */ l(Q, { children: r && /* @__PURE__ */ b(Ee, { className: "flex items-center gap-x-4 text-xs", onClick: () => e(t), children: [
    /* @__PURE__ */ l(hf, {}),
    " ",
    n("Cut")
  ] }) });
}, fv = () => {
  const [t] = oe(), e = bi(), n = ae(), { t: r } = K();
  return /* @__PURE__ */ b(
    Ee,
    {
      disabled: !oi(n == null ? void 0 : n._type),
      className: "flex items-center gap-x-4 text-xs",
      onClick: () => e(t),
      children: [
        /* @__PURE__ */ l(Ys, {}),
        " ",
        r("Remove")
      ]
    }
  );
}, hv = ({ node: t }) => {
  const { t: e } = K();
  return /* @__PURE__ */ b(
    Ee,
    {
      onClick: (n) => {
        n.stopPropagation(), t.edit(), t.deselect();
      },
      className: "flex items-center gap-x-4 text-xs",
      children: [
        /* @__PURE__ */ l(_o, { className: "h-4 w-4" }),
        " ",
        e("Rename")
      ]
    }
  );
}, mv = ({ node: t }) => {
  const { t: e } = K(), [n] = oe(), r = Si(), o = ae(), { hasPermission: s } = wt(), { librarySite: i } = G("flags", { librarySite: !1 }), a = vt(), c = B(() => {
    r(n);
  }, [n, r]), d = M(() => le(o, "_libBlockId") && !F(o._libBlockId), [o == null ? void 0 : o._libBlockId]);
  return t === "BODY" ? /* @__PURE__ */ l(Ft, { side: "bottom", className: "border-border text-xs", children: s(Be.ADD_BLOCK) && /* @__PURE__ */ b(Q, { children: [
    /* @__PURE__ */ b(
      Ee,
      {
        disabled: !1,
        className: "flex items-center gap-x-4 text-xs",
        onClick: () => me.publish(se.OPEN_ADD_BLOCK, o),
        children: [
          /* @__PURE__ */ l(Ze, { className: "h-3.5 w-3.5" }),
          " ",
          e("Add block")
        ]
      }
    ),
    s(Be.ADD_BLOCK) && /* @__PURE__ */ l(fl, { isFromBody: !0 }),
    /* @__PURE__ */ l(pl, {}),
    /* @__PURE__ */ l(
      Ee,
      {
        disabled: !1,
        onClick: (p) => p.preventDefault(),
        className: "flex items-center gap-x-4 text-xs",
        children: /* @__PURE__ */ l(
          cv,
          {
            children: /* @__PURE__ */ b("div", { className: "flex items-center gap-x-4 text-xs", children: [
              /* @__PURE__ */ l(Ml, {}),
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
          disabled: !co(o == null ? void 0 : o._type),
          className: "flex items-center gap-x-4 text-xs",
          onClick: () => me.publish(se.OPEN_ADD_BLOCK, o),
          children: [
            /* @__PURE__ */ l(Ze, { className: "h-3.5 w-3.5" }),
            " ",
            e("Add block")
          ]
        }
      ),
      /* @__PURE__ */ b(
        Ee,
        {
          disabled: !ri(o == null ? void 0 : o._type),
          className: "flex items-center gap-x-4 text-xs",
          onClick: c,
          children: [
            /* @__PURE__ */ l(ff, {}),
            " ",
            e("Duplicate")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ l(hv, { node: t }),
    s(Be.MOVE_BLOCK) && /* @__PURE__ */ l(pv, {}),
    s(Be.ADD_BLOCK) && /* @__PURE__ */ l(fl, {}),
    d && i && /* @__PURE__ */ l(uv, {}),
    s(Be.CREATE_LIBRARY_BLOCK) && i && /* @__PURE__ */ l(dv, {}),
    /* @__PURE__ */ l(pl, {}),
    s(Be.DELETE_BLOCK) && /* @__PURE__ */ l(fv, {})
  ] });
}, Hu = ({ children: t, id: e, node: n }) => {
  const [, r] = oe();
  return /* @__PURE__ */ l(Q, { children: /* @__PURE__ */ b(
    kn,
    {
      onOpenChange: (o) => {
        o && r([e]);
      },
      children: [
        /* @__PURE__ */ l(Cn, { children: t }),
        /* @__PURE__ */ l(mv, { node: n })
      ]
    }
  ) });
}, hl = "h-3 w-3 flex-shrink-0", Vu = (t) => {
  const e = Zs(), n = _(e, [t.type, "icon"]);
  return n ? ne.createElement(n, { className: hl }) : /* @__PURE__ */ l(Io, { className: hl });
}, gv = () => {
  const [t] = D(Kn), [e] = D(ii), [n] = D(ai), [r] = D(li), [o] = D(tc), [s] = D(nc), [i] = D(rc);
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
}, bv = ({ node: t }) => {
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
}, yv = P(null), ws = (t) => {
  var e;
  return t != null && t._name ? t._name : (t == null ? void 0 : t._type) === "Box" && (t != null && t.tag) && (t == null ? void 0 : t.tag) !== "div" ? Kt(t.tag) : ((e = t == null ? void 0 : t._type) == null ? void 0 : e.split("/").pop()) || "";
}, xv = (t, e) => t.length > e ? t.substring(0, e) + "..." : t, wv = Gn(({ node: t, style: e, dragHandle: n }) => {
  var fe, Ve;
  const { t: r } = K(), o = _t(), [s] = D(Mo);
  let i = null;
  const a = t.children && t.children.length > 0, { highlightBlock: c, clearHighlight: d } = At(), p = vt(), { id: u, data: f, isSelected: h, willReceiveDrop: g, isDragging: m, isEditing: y, handleClick: x } = t, w = gv(), S = M(() => w.getBlockErrors(u), [w, u]), v = _(f, "_show", !0), N = (J) => {
    J.stopPropagation(), v && t.toggle();
  }, T = (J) => {
    J.isInternal && (i = J.isOpen, J.isOpen && J.close());
  }, k = (J) => {
    J.isInternal && i !== null && (i ? J.open() : J.close(), i = null);
  }, [C, E] = D(yv), I = () => {
    var J, Te;
    L(), (J = t.parent) != null && J.isSelected || E((Te = t == null ? void 0 : t.parent) == null ? void 0 : Te.id);
  }, L = () => {
    E(null);
  }, R = (J) => {
    L(), J.stopPropagation(), !t.isOpen && v && t.toggle(), x(J);
  };
  z(() => {
    const J = setTimeout(() => {
      g && !t.isOpen && !m && v && t.toggle();
    }, 500);
    return () => clearTimeout(J);
  }, [g, t, m, v]);
  const V = (J, Te) => {
    var qn;
    const ft = s.contentDocument || ((qn = s.contentWindow) == null ? void 0 : qn.document), Tn = ft == null ? void 0 : ft.querySelector(`[data-block-id=${J}]`);
    Tn && Tn.setAttribute("data-drop", Te);
    const In = Tn.getBoundingClientRect(), zt = s.getBoundingClientRect();
    !(In.top >= zt.top && In.left >= zt.left && In.bottom <= zt.bottom && In.right <= zt.right) && ft && (ft.documentElement.scrollTop = Tn.offsetTop - zt.top);
  }, Y = (J) => {
    L();
    const Te = _(t, "parent.id");
    Te !== "__REACT_ARBORIST_INTERNAL_ROOT__" ? me.publish(se.OPEN_ADD_BLOCK, { _id: Te, position: J }) : me.publish(se.OPEN_ADD_BLOCK, { position: J });
  }, { librarySite: q } = G("flags", { librarySite: !1 }), we = M(() => q && le(f, "_libBlockId") && !F(f._libBlockId), [f, q]), ve = M(() => (f == null ? void 0 : f._type) === "PartialBlock" || (f == null ? void 0 : f._type) === "GlobalBlock", [f]);
  return u === Jr ? /* @__PURE__ */ b("div", { className: "group relative mt-2 w-full cursor-pointer", children: [
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l(
      "div",
      {
        role: "button",
        onClick: () => Y(-1),
        className: "h-1 rounded bg-primary opacity-0 duration-200 group-hover:opacity-100",
        children: /* @__PURE__ */ b("div", { className: "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center gap-x-1 rounded-full bg-primary px-3 py-1 text-[9px] leading-tight text-white hover:bg-primary", children: [
          /* @__PURE__ */ l(Ze, { className: "w-2.4 h-2.5 stroke-[5] text-white" }),
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
      onMouseEnter: () => c(u),
      onMouseLeave: () => d(),
      onClick: R,
      style: e,
      "data-node-id": u,
      ref: n,
      onDragStart: () => T(t),
      onDragEnd: () => k(t),
      onDragOver: (J) => {
        J.preventDefault(), V(u, "yes");
      },
      onDragLeave: (J) => {
        J.preventDefault(), V(u, "no");
      },
      onDrop: (J) => {
        J.preventDefault(), V(u, "no");
      },
      children: [
        t.level > 0 && /* @__PURE__ */ l("div", { className: "pointer-events-none absolute left-0 top-0 h-full", children: Array.from({ length: t.level }).map((J, Te) => /* @__PURE__ */ l(
          "div",
          {
            className: "absolute top-0 h-full border-l border-black/5 transition-colors group-hover/parent:border-black/30",
            style: {
              left: `${Te * 14 + 10}px`
            }
          },
          Te
        )) }),
        !p && (t == null ? void 0 : t.rowIndex) !== null && (t == null ? void 0 : t.rowIndex) !== void 0 && (t == null ? void 0 : t.rowIndex) > 0 && (((fe = t.parent) == null ? void 0 : fe.isOpen) && co(_(t, "parent.data._type")) || ((Ve = t == null ? void 0 : t.parent) == null ? void 0 : Ve.id) === "__REACT_ARBORIST_INTERNAL_ROOT__") && /* @__PURE__ */ l("div", { className: "group relative ml-5 h-full w-full cursor-pointer", children: /* @__PURE__ */ l(
          "div",
          {
            onClick: (J) => {
              J.stopPropagation(), Y(t.childIndex);
            },
            onMouseEnter: I,
            onMouseLeave: L,
            className: "absolute -top-0.5 h-0.5 w-[90%] rounded bg-primary/80 opacity-0 delay-200 duration-200 group-hover:opacity-100",
            children: /* @__PURE__ */ l("div", { className: "absolute left-1/2 top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-primary/80 p-1 outline outline-2 outline-white hover:bg-primary/80", children: /* @__PURE__ */ l(Ze, { className: "h-2 w-2 stroke-[2] text-white" }) })
          }
        ) }),
        /* @__PURE__ */ l("div", { className: "absolute left-0 right-0 top-0 -z-10 h-full", children: /* @__PURE__ */ l(
          "div",
          {
            className: ke(
              "h-full transition-colors",
              g && xt(f._type, "Icon") ? "bg-green-200" : "",
              (t == null ? void 0 : t.id) === C ? "bg-gray-100 dark:bg-gray-900" : ""
            )
          }
        ) }),
        /* @__PURE__ */ b(
          "div",
          {
            className: ke(
              "group relative flex w-full cursor-pointer items-center justify-between space-x-px p-1 py-0 outline-none",
              m && "opacity-20",
              v ? "" : "line-through opacity-50",
              we && h && "text-primary"
            ),
            children: [
              /* @__PURE__ */ b("div", { className: "flex items-center", children: [
                /* @__PURE__ */ l(
                  "div",
                  {
                    className: `flex h-4 w-4 rotate-0 transform cursor-pointer items-center justify-center transition-transform duration-100 ${t.isOpen ? "rotate-90" : ""}`,
                    children: a && /* @__PURE__ */ l("button", { onClick: N, type: "button", children: /* @__PURE__ */ l(Un, { className: "h-3 w-3" }) })
                  }
                ),
                /* @__PURE__ */ b(
                  "div",
                  {
                    className: ke(
                      "leading-1 flex w-full items-center",
                      we && "text-orange-600/90",
                      we && h && "text-orange-800",
                      ve && "text-purple-600/90",
                      ve && h && "text-purple-800"
                    ),
                    children: [
                      S.length > 0 ? /* @__PURE__ */ l("div", { className: "text-red-500", children: /* @__PURE__ */ l(mf, { className: "h-3 w-3" }) }) : /* @__PURE__ */ l(Vu, { type: f == null ? void 0 : f._type }),
                      y ? /* @__PURE__ */ l(bv, { node: t }) : /* @__PURE__ */ l(
                        "div",
                        {
                          className: "ml-1.5 flex items-center gap-x-1 truncate text-[13px]",
                          onDoubleClick: (J) => {
                            J.stopPropagation(), t.edit(), t.deselect();
                          },
                          children: /* @__PURE__ */ l("span", { title: ws(f).length > 17 ? ws(f) : "", children: xv(ws(f), 17) })
                        }
                      )
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ b("div", { className: "invisible flex items-center space-x-1.5 pr-px group-hover:visible", children: [
                co(f == null ? void 0 : f._type) && v ? /* @__PURE__ */ b(Ne, { children: [
                  /* @__PURE__ */ l(
                    Se,
                    {
                      onClick: () => me.publish(se.OPEN_ADD_BLOCK, { _id: u }),
                      className: "cursor-pointer rounded bg-transparent p-px hover:bg-primary/10",
                      asChild: !0,
                      children: /* @__PURE__ */ l(Ze, { className: "h-4 w-4" })
                    }
                  ),
                  /* @__PURE__ */ l(be, { className: "isolate z-[9999]", side: "bottom", children: r("Add block inside") })
                ] }) : null,
                /* @__PURE__ */ b(Ne, { children: [
                  /* @__PURE__ */ l(
                    Se,
                    {
                      onClick: (J) => {
                        J.stopPropagation(), o([u], { _show: !v }), t.isOpen && t.toggle();
                      },
                      className: "cursor-pointer rounded bg-transparent p-0.5 hover:bg-primary/10",
                      asChild: !0,
                      children: v ? /* @__PURE__ */ l(io, { className: "h-4 w-4" }) : /* @__PURE__ */ l(Ol, { className: "h-4 w-4" })
                    }
                  ),
                  /* @__PURE__ */ l(be, { className: "isolate z-[9999] text-xs", side: "bottom", children: r(v ? "Hide the block from page" : "Show the block on page") })
                ] }),
                /* @__PURE__ */ l(Hu, { node: t, id: u, children: /* @__PURE__ */ l("div", { className: "cursor-pointer rounded bg-transparent p-px hover:bg-primary/10", children: /* @__PURE__ */ l(Ao, { className: "h-3 w-3" }) }) })
              ] })
            ]
          }
        )
      ]
    }
  ) });
}), ju = (t, e) => {
  const n = Z(t, { _parent: e });
  if (n.length === 0) return [];
  const r = [...n];
  return n.forEach((o) => {
    r.push(...ju(t, o == null ? void 0 : o._id));
  }), r;
}, vv = () => {
  const [t, e] = D(pc), { t: n } = K(), [r] = ue(), o = () => e({ isOpen: !1, blockId: null }), s = Sl(), i = M(() => {
    if (!t.blockId) return [];
    const a = ee(r, { _id: t.blockId });
    return a == null || delete a._parent, [a, ...ju(r, a == null ? void 0 : a._id)];
  }, [t.blockId, r]);
  return /* @__PURE__ */ l(Ho, { open: t.isOpen, onOpenChange: (a) => !a && o(), children: /* @__PURE__ */ b(Or, { className: "p-4 sm:max-w-[450px]", children: [
    /* @__PURE__ */ l(Vo, { className: "pb-2", children: /* @__PURE__ */ l(Mr, { children: n("Save to Library") }) }),
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
const kv = ({
  parentContext: t,
  setParentContext: e
}) => {
  const { t: n } = K(), { canPaste: r, pasteBlocks: o } = Ti(), s = G("flags.copyPaste", !0);
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
              /* @__PURE__ */ l(Xs, {}),
              " ",
              n("Paste")
            ]
          }
        )
      }
    )
  ] }) });
}, Cv = () => {
  const [t] = ue();
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
    return o ? xt(r._type, o) : !1;
  };
}, Nv = () => {
  const [t] = D(Ql), [e, n] = oe(), [r] = Do(), o = _t(), [, s] = He(), { moveBlocks: i } = ze(), a = Cv(), c = te(null), [, d] = D(wi), { t: p } = K(), [u, f] = $(null), h = () => {
    n([]), s([]);
  }, g = M(() => {
    const k = (E, I) => E.filter((L) => !I.includes(L._id)).map((L) => ({
      ...L,
      children: L.children ? k(L.children, I) : []
    }));
    return [...k(t, r), { _type: Jr, _id: Jr, children: [] }];
  }, [t, r]), m = ({ id: k, name: C, node: E }) => {
    o([k], { _name: C }, E.data._name);
  }, y = ({ dragIds: k, parentId: C, index: E }) => {
    a(k, C) && i(k, C ?? void 0, E);
  }, x = (k) => {
    if (k.length === 0) return;
    const C = k[0] ? k[0].id : "";
    s([]), n([C]);
  }, w = (k) => {
    var I;
    k.preventDefault(), u && f(null);
    const C = k.target, E = C.getAttribute("data-node-id") || ((I = C.closest("[data-node-id]")) == null ? void 0 : I.getAttribute("data-node-id"));
    E ? (s([]), n([E])) : (s([]), n([]), f({ x: k.clientX, y: k.clientY }));
  }, S = dt(
    ({ parentNode: k, dragNodes: C }) => {
      var E;
      return (k == null ? void 0 : k.data._type) === Jr || !xt(k == null ? void 0 : k.data._type, (E = C[0]) == null ? void 0 : E.data._type);
    },
    [],
    300
  ), v = (k, C) => {
    if (!k) return !0;
    const E = {
      isLeaf: !C.isInternal,
      isClosed: !C.isOpen,
      isOpen: C.isOpen
    };
    try {
      let I = k;
      return Object.keys(E).forEach((L) => {
        const R = new RegExp(`\\b${L}\\b`, "g");
        I = I.replace(R, String(E[L]));
      }), new Function(`return ${I}`)();
    } catch {
      return console.warn("Invalid condition expression:", k), !1;
    }
  }, N = (k) => {
    if (!c.current) return;
    const C = c.current, E = C.selectedNodes[0];
    if (!E) return;
    n([E.id]), s([]);
    const I = !E.isInternal, L = !E.isOpen, R = E.isOpen, V = Qw.find(
      (Y) => Y.key === k.key && (!Y.when || v(Y.when, E))
    );
    if (V)
      switch (k.preventDefault(), V.command) {
        case "selectNext":
          nv(C);
          break;
        case "selectPrev":
          rv(C);
          break;
        case "selectParent":
          ov(C, I || L);
          break;
        case "close":
          iv(C, R);
          break;
        case "open":
          sv(C, L);
          break;
        case "selectFirst":
          ev(C);
          break;
        case "selectLast":
          tv(C);
          break;
      }
  };
  z(() => {
    const k = () => {
      c.current && d(c.current);
    };
    k();
    const C = new MutationObserver(k);
    return C.observe(document.body, { childList: !0, subtree: !0 }), () => C.disconnect();
  }, [d]);
  const { hasPermission: T } = wt();
  return F(t) ? /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l("div", { className: "mt-10 flex h-full w-full items-center justify-center p-8", children: /* @__PURE__ */ b("div", { className: "flex flex-col items-center space-y-6 text-center", children: [
    /* @__PURE__ */ l("div", { className: "rounded-full bg-muted p-6", children: /* @__PURE__ */ l(gf, { className: "h-12 w-12 text-muted-foreground" }) }),
    /* @__PURE__ */ b("div", { className: "space-y-2", children: [
      /* @__PURE__ */ l("h3", { className: "text-lg font-semibold text-foreground", children: p("This page is empty") }),
      /* @__PURE__ */ l("p", { className: "max-w-sm text-sm text-muted-foreground", children: p("Get started by adding your first block to begin building your page") })
    ] }),
    T(Be.ADD_BLOCK) && /* @__PURE__ */ b(
      re,
      {
        onClick: () => me.publish(se.OPEN_ADD_BLOCK),
        className: "bg-primary shadow-sm hover:bg-primary/90",
        size: "sm",
        children: [
          /* @__PURE__ */ l(Ze, { className: "h-4 w-4" }),
          p("Add Block")
        ]
      }
    )
  ] }) }) }) : /* @__PURE__ */ b(Q, { children: [
    /* @__PURE__ */ l(
      "div",
      {
        className: Qe("chai-outline group/parent parent-group flex h-full select-none flex-col space-y-1"),
        onClick: () => h(),
        children: /* @__PURE__ */ b(
          "div",
          {
            id: "outline-view ",
            className: "no-scrollbar h-full overflow-y-auto text-sm",
            onKeyDown: (k) => {
              c.current && !c.current.isEditing && N(k);
            },
            children: [
              /* @__PURE__ */ b("div", { className: "mb-2 flex items-center justify-end gap-x-1 pb-2 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ b(Ne, { children: [
                  /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(re, { className: "h-fit p-1", onClick: () => {
                    var k;
                    return (k = c == null ? void 0 : c.current) == null ? void 0 : k.openAll();
                  }, variant: "ghost", size: "sm", children: /* @__PURE__ */ l(bf, { className: "h-2 w-2" }) }) }),
                  /* @__PURE__ */ l(be, { className: "isolate z-[9999]", children: p("Expand all") })
                ] }),
                /* @__PURE__ */ b(Ne, { children: [
                  /* @__PURE__ */ l(Se, { asChild: !0, children: /* @__PURE__ */ l(re, { className: "h-fit p-1", onClick: () => {
                    var k;
                    return (k = c == null ? void 0 : c.current) == null ? void 0 : k.closeAll();
                  }, variant: "ghost", size: "sm", children: /* @__PURE__ */ l(yf, { className: "h-2 w-2" }) }) }),
                  /* @__PURE__ */ l(be, { className: "isolate z-[9999]", children: p("Collapse all") })
                ] })
              ] }),
              /* @__PURE__ */ l("div", { className: "group relative z-30 ml-5 w-full cursor-pointer", children: /* @__PURE__ */ l(
                "div",
                {
                  onClick: () => me.publish(se.OPEN_ADD_BLOCK, { position: 0 }),
                  className: "h-1 w-[90%] rounded bg-primary opacity-0 duration-200 group-hover:opacity-100",
                  children: /* @__PURE__ */ l("div", { className: "absolute left-[45%] top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-primary p-1 outline outline-2 outline-white hover:bg-primary", children: /* @__PURE__ */ l(Ze, { className: "h-3 w-3 stroke-[3] text-white" }) })
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
                      className: Qe(
                        "group flex h-[25px] w-full cursor-pointer items-center justify-between space-x-px px-2 py-0 outline-none",
                        e.length === 0 ? "bg-primary/20" : ""
                      ),
                      children: [
                        /* @__PURE__ */ b("div", { className: "leading-1 flex items-center", children: [
                          /* @__PURE__ */ l(Xs, { className: "h-3 w-3 flex-shrink-0 rotate-180" }),
                          /* @__PURE__ */ l("div", { className: "ml-1.5 flex items-center gap-x-1 truncate text-[13px]", children: "Body" })
                        ] }),
                        /* @__PURE__ */ l(Hu, { node: "BODY", id: "BODY", children: /* @__PURE__ */ l("div", { className: "hidden cursor-pointer rounded bg-transparent p-px hover:bg-primary/10 group-hover:block", children: /* @__PURE__ */ l(Ao, { className: "h-3 w-3" }) }) })
                      ]
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ l(
                sh,
                {
                  ref: c,
                  height: window.innerHeight - 160,
                  className: "no-scrollbar !h-full max-w-full !overflow-y-auto !overflow-x-hidden",
                  rowClassName: "flex items-center h-full",
                  selection: e[0] || "",
                  onRename: m,
                  openByDefault: !1,
                  onMove: y,
                  data: [...g],
                  renderCursor: Zw,
                  onSelect: x,
                  childrenAccessor: (k) => k.children,
                  width: "100%",
                  rowHeight: 25,
                  renderDragPreview: () => null,
                  indent: 14,
                  onContextMenu: w,
                  disableDrop: S,
                  idAccessor: "_id",
                  children: wv
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ l(vv, {}),
    /* @__PURE__ */ l(kv, { parentContext: u, setParentContext: f })
  ] });
}, no = W.forwardRef(({ className: t, orientation: e = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ l(
  Yl.Root,
  {
    ref: o,
    decorative: n,
    orientation: e,
    className: j("shrink-0 bg-border", e === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", t),
    ...r
  }
));
no.displayName = Yl.Root.displayName;
const Wu = W.forwardRef(({ className: t, thumbLabel: e, ...n }, r) => /* @__PURE__ */ b(
  tr.Root,
  {
    ref: r,
    className: j("relative flex w-full touch-none select-none items-center", t),
    ...n,
    children: [
      /* @__PURE__ */ l(tr.Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-neutral-300", children: /* @__PURE__ */ l(tr.Range, { className: "absolute h-full bg-neutral-900" }) }),
      /* @__PURE__ */ l(
        tr.Thumb,
        {
          "aria-label": e,
          className: "block h-4 w-4 rounded-full border border-neutral-900 bg-neutral-900 shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 disabled:pointer-events-none disabled:opacity-50"
        }
      )
    ]
  }
));
Wu.displayName = tr.Root.displayName;
const Sv = ({ value: t, onChange: e, disabled: n }) => {
  const [r, o] = $(t), s = pn(e, [t], 200, !0);
  return /* @__PURE__ */ l(
    Wu,
    {
      thumbLabel: "Border radius",
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
}, Ev = ({
  value: t,
  onChange: e,
  label: n
}) => {
  const r = Ws((o) => e(o), 200);
  return /* @__PURE__ */ l(
    "div",
    {
      className: "relative flex h-6 w-6 cursor-pointer rounded-lg border border-border",
      style: { backgroundColor: t },
      children: /* @__PURE__ */ l(
        "input",
        {
          type: "color",
          "aria-label": n,
          value: t.startsWith("#") ? t : "#000000",
          onChange: (o) => {
            const s = o.target.value;
            /^#[0-9A-F]{6}$/i.test(s) && r(s);
          },
          className: "absolute inset-0 h-full w-full cursor-pointer rounded-lg border-0 opacity-0"
        }
      )
    }
  );
}, _v = ({
  label: t,
  value: e,
  onChange: n
}) => {
  const r = ti(), { t: o } = K();
  z(() => {
    r.some((i) => i.family === e) || n(r[0].family);
  }, [e, n]);
  const s = Np();
  return /* @__PURE__ */ b("div", { className: "space-y-0.5", children: [
    /* @__PURE__ */ l(bn, { htmlFor: s, className: "mb-1 block text-xs text-gray-600", children: o(Kt(t)) }),
    /* @__PURE__ */ b(Xi, { value: e, onValueChange: n, children: [
      /* @__PURE__ */ l(Jo, { id: s, className: "h-8 w-full text-xs text-black", children: /* @__PURE__ */ l(qi, { placeholder: o("Select font") }) }),
      /* @__PURE__ */ l(Xo, { children: r.map((i) => /* @__PURE__ */ l(qo, { value: i.family, children: i.family }, i.family)) })
    ] })
  ] });
}, Av = () => {
  const t = G("onSaveWebsiteData", async (c) => {
  }), [e] = $o(), n = te(!1), r = B(
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
  ), o = B(
    async (c) => {
      await r({ type: "THEME", data: c ?? e });
    },
    [r, e]
  ), s = B(
    async (c) => {
      const d = c ?? Pe.get(_r);
      await r({ type: "DESIGN_TOKENS", data: d });
    },
    [r]
  ), i = dt(o, [o], 1e3), a = dt(s, [s], 1e3);
  return {
    saveWebsiteData: r,
    saveTheme: o,
    saveDesignTokens: s,
    debouncedSaveTheme: i,
    debouncedSaveDesignTokens: a
  };
}, Tv = {
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
}, Iv = {
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
}, Bv = {
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
}, Rv = {
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
}, Lv = {
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
}, Pv = Gs(
  () => import("./css-import-modal-XmEUJYiF.js").then((t) => ({ default: t.CssImportModal }))
), Gu = "chai-builder-previous-theme", Ov = [
  { shadcn_default: Tv },
  { twitter_theme: Iv },
  { solarized_theme: Bv },
  { claude_theme: Rv },
  { supabase_theme: Lv }
], Mv = (t) => {
  if (!(typeof window > "u"))
    try {
      localStorage.setItem(Gu, JSON.stringify(t));
    } catch (e) {
      console.warn("Failed to save previous theme to localStorage:", e);
    }
}, Dv = () => {
  if (!(typeof window > "u"))
    try {
      localStorage.removeItem(Gu);
    } catch (t) {
      console.warn("Failed to clear previous theme from localStorage:", t);
    }
}, $v = W.memo(({ className: t = "" }) => {
  const [e, n] = Lr(), [r, o] = W.useState(""), [s, i] = W.useState(!1), a = G("themePresets", {}), { hasPermission: c } = wt(), { debouncedSaveTheme: d } = Av(), p = G("flags.importTheme", !0), u = G("flags.darkMode", !1), f = ti();
  (!a || a.length === 0) && Ov.map((C) => {
    a.push(C);
  });
  const [h, g] = $o(), m = Pr(), { t: y } = K(), x = W.useCallback(
    (C) => {
      const E = { ...h };
      Mv(E), g(C), d(), Ce.success("Theme updated", {
        action: {
          label: /* @__PURE__ */ b("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ l(ao, { className: "h-4 w-4" }),
            " Undo"
          ] }),
          onClick: () => {
            g(E), Dv(), Ce.dismiss();
          }
        },
        closeButton: !0,
        duration: 15e3
      });
    },
    [h, g, d]
  ), w = () => {
    const C = a.find((E) => Object.keys(E)[0] === r);
    if (C) {
      const E = Object.values(C)[0];
      E && typeof E == "object" && "fontFamily" in E && "borderRadius" in E && "colors" in E ? (x(E), o("")) : console.error("Invalid preset structure:", E);
    } else
      console.error("Preset not found:", r);
  }, S = (C) => {
    x(C), o("");
  }, v = dt(
    (C, E) => {
      g(() => ({
        ...h,
        fontFamily: {
          ...h.fontFamily,
          [C.replace(/font-/g, "")]: E
        }
      })), d();
    },
    [h, d],
    200
  ), N = W.useCallback(
    (C) => {
      g(() => ({
        ...h,
        borderRadius: `${C}px`
      })), d();
    },
    [h, g, d]
  ), T = dt(
    (C, E) => {
      g(() => {
        const I = _(h, `colors.${C}`);
        return e ? Ue(I, 1, E) : Ue(I, 0, E), {
          ...h,
          colors: {
            ...h.colors,
            [C]: I
          }
        };
      }), d();
    },
    [h, d],
    200
  ), k = (C) => /* @__PURE__ */ l("div", { className: "grid grid-cols-1", children: Object.entries(C.items).map(([E]) => {
    const I = _(h, `colors.${E}.${e ? 1 : 0}`);
    if (!I) return null;
    const L = E.split(/(?=[A-Z])/).join(" ").replace(/-/g, " ").split(" ").map((R) => R.charAt(0).toUpperCase() + R.slice(1)).join(" ") + (!E.toLowerCase().includes("foreground") && !E.toLowerCase().includes("border") && !E.toLowerCase().includes("input") && !E.toLowerCase().includes("ring") && !E.toLowerCase().includes("background") ? " Background" : "");
    return /* @__PURE__ */ b("div", { id: `theme-${E}`, className: "mt-1 flex items-center gap-x-2", children: [
      /* @__PURE__ */ l(
        Ev,
        {
          value: I,
          label: L,
          onChange: (R) => T(E, R)
        }
      ),
      /* @__PURE__ */ l(bn, { className: "text-xs font-normal leading-tight", children: L })
    ] }, E);
  }) });
  return c("edit_theme") ? /* @__PURE__ */ l("div", { className: "relative w-full", children: /* @__PURE__ */ b("div", { className: Qe("no-scrollbar h-full w-full overflow-y-auto", t), children: [
    a.length > 0 && /* @__PURE__ */ b("div", { className: "mx-0 my-2 flex flex-col gap-1 py-2", children: [
      /* @__PURE__ */ b("div", { className: "flex w-full items-center justify-between", children: [
        /* @__PURE__ */ l(bn, { className: "text-sm", children: y("Presets") }),
        /* @__PURE__ */ l("div", { className: "flex gap-2", children: p && /* @__PURE__ */ b(re, { className: "px-1", variant: "link", size: "sm", onClick: () => i(!0), children: [
          /* @__PURE__ */ l(xf, { className: "h-4 w-4" }),
          y("Import theme")
        ] }) })
      ] }),
      /* @__PURE__ */ b("div", { className: "flex items-center gap-2 px-0", children: [
        /* @__PURE__ */ l("div", { className: "w-[70%]", children: /* @__PURE__ */ b(Xi, { value: r, onValueChange: o, children: [
          /* @__PURE__ */ l(Jo, { className: "h-9 w-full text-sm", children: /* @__PURE__ */ l(qi, { placeholder: y("Select preset") }) }),
          /* @__PURE__ */ l(Xo, { children: Array.isArray(a) && a.map((C) => {
            const E = Object.keys(C)[0], I = E.replaceAll("_", " ");
            return /* @__PURE__ */ l(qo, { value: E, children: Fn(I) }, E);
          }) })
        ] }) }),
        /* @__PURE__ */ l("div", { className: "w-[25%]", children: /* @__PURE__ */ l(re, { className: "w-full text-sm", disabled: !r, onClick: w, children: y("Apply") }) })
      ] })
    ] }),
    /* @__PURE__ */ l(no, {}),
    /* @__PURE__ */ b("div", { className: Qe("my-2 space-y-3", t), children: [
      f.length > 0 ? /* @__PURE__ */ b(Q, { children: [
        /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ l(wf, { className: "h-3 w-3 text-gray-600" }),
          /* @__PURE__ */ l("span", { className: "text-xs font-medium text-gray-700", children: y("Typography") })
        ] }),
        (m == null ? void 0 : m.fontFamily) && /* @__PURE__ */ l("div", { className: "space-y-2", children: Object.entries(m.fontFamily).map(([C, E]) => /* @__PURE__ */ l(
          _v,
          {
            label: C,
            value: h.fontFamily[C.replace(/font-/g, "")] || E[Object.keys(E)[0]],
            onChange: (I) => v(C, I)
          },
          C
        )) }),
        /* @__PURE__ */ l(no, {})
      ] }) : "",
      (m == null ? void 0 : m.borderRadius) && /* @__PURE__ */ b("div", { className: "space-y-0.5", children: [
        /* @__PURE__ */ b("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ l(vf, { className: "h-3 w-3 text-gray-600" }),
            /* @__PURE__ */ l("span", { className: "text-xs font-medium text-gray-700", children: y("Border Radius") })
          ] }),
          /* @__PURE__ */ l(ji, { variant: "secondary", className: "text-xs", children: h.borderRadius })
        ] }),
        /* @__PURE__ */ l("div", { className: "flex items-center gap-4 py-2", children: /* @__PURE__ */ l(Sv, { value: h.borderRadius, onChange: N }) })
      ] }),
      /* @__PURE__ */ l(no, {}),
      (m == null ? void 0 : m.colors) && /* @__PURE__ */ b("div", { className: "space-y-3", children: [
        /* @__PURE__ */ b("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ l(lo, { className: "h-3 w-3 text-gray-600" }),
            /* @__PURE__ */ l("span", { className: "text-xs font-medium text-gray-700", children: y("Colors") })
          ] }),
          u && /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ l(Dl, { className: "h-4 w-4" }),
            /* @__PURE__ */ l(
              Wo,
              {
                checked: e,
                onCheckedChange: (C) => n(C),
                "aria-label": y("Toggle dark mode"),
                className: "mx-1"
              }
            ),
            /* @__PURE__ */ l($l, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ l("div", { className: "space-y-2", children: m.colors.map((C) => /* @__PURE__ */ l("div", { children: k(C) }, C.group)) })
      ] }),
      /* @__PURE__ */ l(Ge, { fallback: /* @__PURE__ */ l("div", { children: y("Loading...") }), children: s && p && /* @__PURE__ */ l(
        Pv,
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
  ] }) }) : /* @__PURE__ */ l("div", { className: "relative w-full", children: /* @__PURE__ */ l("div", { className: Qe("no-scrollbar h-full w-full overflow-y-auto text-center", t), children: /* @__PURE__ */ l("div", { className: "mt-10 h-full items-center justify-center gap-2 text-muted-foreground", children: /* @__PURE__ */ l("p", { className: "text-sm", children: y("You don't have permission to edit the theme. Please contact your administrator to get access.") }) }) }) });
}), Fv = "Core", zv = "Import", Hv = "Breakpoints", Vv = "Clear", jv = "Cancel", Wv = "Yes", Gv = "Preview", Uv = "Settings", Kv = "Style", Yv = "Enter SVG code here", Jv = "Remove", Xv = "Choose", qv = "Cut", Zv = "Copy", Qv = "Paste", ek = "Delete", tk = "classes", nk = "Theme", rk = "Outline", ok = "Copied", sk = "Stop", ik = "Edit", ak = "Tag", lk = "Value", ck = "URL", dk = "Images", uk = "Library", pk = "Blocks", fk = "Basic", hk = "Media", mk = "Advanced", gk = "Form", bk = "Groups", yk = "Accordions", xk = "Buttons", wk = "Layouts", vk = "FAQ", kk = "Hero", Ck = "Features", Nk = "Footer", Sk = "Navbar", Ek = "Icons", _k = "Testimonials", Ak = "Blog", Tk = "Saved", Ik = "Unsaved", Bk = "Randomize", Rk = "Classes", Lk = "All", Pk = "Undo", Ok = "Redo", Mk = "Duplicate", Dk = "Close", $k = "Selected", Fk = "Select", zk = "Attributes", Hk = "apply", Vk = "presets", jk = "Orientation", Wk = "Color", Gk = "Upload", Uk = "Apply", Kk = "Back", Yk = "Insert", Jk = "Rename", Xk = "Partials", qk = "Happy", Zk = "Sad", Qk = "Retry", e1 = "Canvas is empty", t1 = "Presets", n1 = "No", r1 = "Saving", o1 = { heading_font: "Heading Font", body_font: "Body Font", rounded_corner: "Rounded Corners", primary: "Primary", secondary: "Secondary", background: "Background", text_color: "Text Color", background_dark_mode: "Background (Dark Mode)", text_color_dark_mode: "Text Color (Dark Mode)" }, s1 = { box: "box", tag: "Tag", div: "div", level: "Level", header: "header", footer: "footer", section: "section", article: "article", aside: "aside", main: "main", nav: "navigation", figure: "figure", details: "details", summary: "summary", dialog: "dialog", strike: "strike", caption: "caption", legend: "legend", figcaption: "figure caption", mark: "mark", background_image: "Background Image", label: "Label", default: "default", icon_size: "Icon Size", icon_position: "Icon Position", start: "Start", end: "End", button: "Button", custom_html: "Custom HTML", html_code: "HTML Code", default_snippet: "The HTML snippet goes here...", placeholder: "Enter custom HTML code here", custom_script: "Custom Script", dark_mode: "Dark Mode", divider: "Divider", empty_box: "Empty Box", heading: "Heading", image: "Image", alt: "Alt", width: "Width", height: "Height", video: "Video", span: "Span", content: "Content", icon: "Icon", richtext: "Rich Text", list: "List", list_type: "List Type", listitem: "List Item", link: "Link", list_item: "List Item", none: "None", disc: "Disc", number: "Number", paragraph: "Paragraph", lightbox_link: "Lightbox Link", href: "Link", type: "Type", iframe: "iframe", inline: "inline", ajax: "ajax", autoplay: "Video autoplay", max_width: "Max Width", backdrop_color: "Background Color", gallery_name: "Gallery Name", slot: "Slot", empty_slot: "Empty Slot", text: "Text", video_url: "Video URL", controls: "Show Controls", loop: "Loop", muted: "Muted", checkbox: "Checkbox", required: "Required", checked: "Checked", submit_button: "Submit Button", form: "Form", submit_url: "Submit URL", error_message: "Error Message", success_message: "Success Message", input: "Input", value: "Value", show_label: "Show Label", field_name: "Field Name", radio: "Radio", multiple: "Multiple", options: "Options", select: "Select", multiple_choice: "Multiple Choice", textarea: "Textarea", rows: "Rows" }, i1 = "Add", a1 = "Save", l1 = "Screen", c1 = {
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
  Core: Fv,
  "Custom Blocks": "Custom Blocks",
  "UI Library": "UI Library",
  Import: zv,
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
  Breakpoints: Hv,
  Clear: Vv,
  "Clear whole canvas?": "Clear whole canvas?",
  "Are you sure you want to clear the whole canvas?": "Are you sure you want to clear the whole canvas?",
  Cancel: jv,
  Yes: Wv,
  Preview: Gv,
  Settings: Uv,
  Styling: Kv,
  SVG_code: Yv,
  "Paste SVG_code": "Choose icon or paste SVG code",
  "Enter Key": "Enter Key",
  "Data Provider": "Data Provider",
  "Remove Provider Confirmation": "Are you sure you want to remove <span class='text-blue-500'>{name}</span> provider?",
  "Your data provider will be removed from this page and all added data binding will be not visible on blocks.": "Your data provider will be removed from this page and all added data binding will be not visible on blocks.",
  Remove: Jv,
  "You have no data providers registered. Please add a data provider to your project.": "You have no data providers registered. Please add a data provider to your project.",
  "Learn more": "Learn more",
  "Add data providers:": "Add data providers:",
  "Select a provider": "Select a provider",
  Choose: Xv,
  "Page data providers:": "Page data providers:",
  "View Data": "View Data",
  "Mark as Global": "Mark as Global",
  "Note: Global blocks are single instances. Editing global blocks will be reflected on all pages using these blocks.": "Note: Global blocks are single instances. Editing global blocks will be reflected on all pages using these blocks.",
  "Global blocks are indicated with": "Global blocks are indicated with",
  "Global blocks are available under 'Global' category": "Global blocks are available under 'Global' category",
  "Enter global block name": "Enter global block name",
  "Eg: Header, Footer": "Eg: Header, Footer",
  "{length} blocks selected.": "{length} blocks selected.",
  Cut: qv,
  Copy: Zv,
  Paste: Qv,
  Delete: ek,
  "Clear Selection": "Clear Selection",
  "This is dev mode. Visit": "This is dev mode. Visit",
  "to see page preview": "to see page preview",
  classes: tk,
  Theme: nk,
  Outline: rk,
  "Not supported": "Not supported",
  "Please use Chrome, Firefox or Safari": "Please use Chrome, Firefox or Safari",
  "Download Complete": "Download complete",
  Copied: ok,
  "Enter Classes": "Add classes or design tokens (space-separated)",
  "Ask AI": "Ask AI",
  "Edit with AI": "Edit with AI",
  "Generating... Please wait...": "Generating... Please wait...",
  "Saving... Please wait...": "Saving... Please wait...",
  "Deleting... Please wait...": "Deleting... Please wait...",
  Stop: sk,
  "E.g.: This page is about an AI assistant app called Chai Studio. It allows users to create beautiful webpages and edit content with AI": "E.g.: This page is about an AI assistant app called Chai Studio. It allows users to create beautiful webpages and edit content with AI.",
  "Ask AI to edit styles": "Ask AI to edit styles",
  "Ask AI to edit content": "Ask AI to edit content",
  "AI Context": "AI Context",
  "Select Block for AI": "Select a block to edit with AI",
  "Select Block to Edit": "Please select a block to edit",
  Edit: ik,
  "Describe this page. E.g.: This page is about...": "Describe this page. E.g.: This page is about...",
  Tag: ak,
  Value: lk,
  "Background Image": "Background Image",
  "Enter image URL": "Enter image URL",
  "Enter URL": "Enter URL",
  URL: ck,
  "Replace image": "Replace image",
  "Choose image": "Choose image",
  Images: dk,
  Library: uk,
  Blocks: pk,
  Basic: fk,
  Media: hk,
  Advanced: mk,
  Form: gk,
  "Choose Icon or SVG": "Choose an icon or enter SVG",
  Groups: bk,
  "UI Libraries": "UI Libraries",
  Accordions: yk,
  Buttons: xk,
  Layouts: wk,
  "Choose Library": "Choose library",
  "No Library Found": "No library found.",
  FAQ: vk,
  Hero: kk,
  Features: Ck,
  Footer: Nk,
  Navbar: Sk,
  Icons: Ek,
  Testimonials: _k,
  Blog: Ak,
  "Remove context": "Remove context",
  "Yes, Delete": "Yes, Delete",
  "AI Context Updated": "AI Context Updated",
  "You can now ask AI to edit your content.": "You can now ask AI to edit your content.",
  Saved: Tk,
  Unsaved: Ik,
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
  Randomize: Bk,
  "Randomize all text elements.": "Randomize all text elements.",
  "Edit Block": "Edit Block",
  "AI Assistant": "AI Assistant",
  "Generate with AI": "Generate with AI",
  "Theme Config": { "Heading Font": "Heading Font", "Body Font": "Body Font", "Rounded Corner": "Rounded Corners", Primary: "Primary", Secondary: "Secondary", Background: "Background", "Text Color": "Text Color", "Background Dark Mode": "Background (Dark Mode)", "Text Color Dark Mode": "Text Color (Dark Mode)", "Reset styles": "Reset styles" },
  "Copy classes to clipboard": "Copy classes to clipboard",
  "Classes copied to clipboard": "Classes copied to clipboard",
  Classes: Rk,
  All: Lk,
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
  Undo: Pk,
  Redo: Ok,
  Duplicate: Mk,
  "Deselect blocks": "Deselect blocks",
  "Delete block": "Delete block",
  "Save page": "Save page",
  "Scripts will be only executed in preview and live mode.": "Scripts will be only executed in preview and live mode.",
  "HTML Code Editor |": "HTML Code Editor |",
  Close: Dk,
  "Coming soon": "Coming soon",
  Selected: $k,
  Select: Fk,
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
  Attributes: zk,
  "Apply Presets": "Apply Presets",
  apply: Hk,
  presets: Vk,
  "Global presets": "Global presets",
  Orientation: jk,
  Color: Wk,
  "Please select an image": "Please select an image",
  "click to upload": "click to upload",
  "SVG, PNG, JPG or GIF (Max. 2mb)": "SVG, PNG, JPG or GIF (Max. 2mb)",
  "Uploading...": "Uploading...",
  Upload: Gk,
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
  Apply: Uk,
  Back: Kk,
  Insert: Yk,
  Rename: Jk,
  "Unlink from library": "Unlink from library",
  "Save to Library": "Save to Library",
  "No blocks found in this group": "No blocks found in this group",
  "No blocks found matching": "No blocks found matching",
  "No matching blocks found": "No matching blocks found",
  "Search blocks...": "Search blocks...",
  Partials: Xk,
  Happy: qk,
  Sad: Zk,
  "Importing...": "Importing...",
  "Failed to load the UI library. Try again": "Failed to load the UI library. Try again",
  Retry: Qk,
  "Oops! Something went wrong.": "Oops! Something went wrong.",
  "Please try again.": "Please try again.",
  "No option found.": "No option found.",
  "Clipboard not supported": "Clipboard not supported",
  "Are you sure you want to clear the page?": "Are you sure you want to clear the page?",
  canvas_empty: e1,
  Presets: t1,
  "Reset style": "Reset style",
  "Reset styles": "Reset styles",
  "Clear styles": "Clear styles",
  "Open code editor": "Open code editor",
  "Style element": "Style element",
  "Repeater Data": "Repeater Data",
  "Toggle Data Binding": "Toggle Data Binding",
  No: n1,
  Saving: r1,
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
  theme_config: o1,
  web_blocks: s1,
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
  Add: i1,
  Save: a1,
  Screen: l1
};
Ns.use(_f).init({
  // the translations
  // (tip move them in a JSON file and import them,
  // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
  resources: {
    en: {
      translation: c1
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
function d1(t, e, n) {
  n.push(ee(t, { _id: e }));
  const r = Z(t, { _parent: e });
  for (const o of r)
    n.push(...Uu(o._id, t));
  return n;
}
const Uu = (t, e) => {
  let n = [];
  return n = Ot([...n, ...d1(e, t, n)]), n;
}, u1 = (t, e, n) => Wn(
  t.map((r) => {
    const o = ["_id", "_type", "_parent"], s = dn(r, o), i = Oe(r._type), a = {}, c = _(i, "aiProps", []);
    for (const d in r)
      if (!o.includes(d) && c.includes(d)) {
        const p = _(r, `${d}-${e}`, ""), u = _(r, d, "");
        a[d] = Nt(p) && p.trim() || u, n && (a[d] = u);
      }
    return F(a) ? !1 : (le(s, "_parent") && F(s._parent) && delete s._parent, { ...s, ...a });
  })
), p1 = (t, e, n) => !e || n !== "content" ? t : `${t}. Generate content in ${_(jn, e, e)} language.`, f1 = P(!1), Ku = () => {
  const [t, e] = D(f1), [n, r] = $(null), o = G("askAiCallBack", Ct), s = Rh(), i = Ih(), [a] = ue(), { selectedLang: c, fallbackLang: d } = Je(), p = c.length ? c : d, u = (f, h) => {
    const g = so(h.find((m) => m._id === f));
    for (const m in g) {
      const y = g[m];
      if (typeof y == "string" && Re(y, St)) {
        const { baseClasses: x, classes: w } = wn(y);
        g[m] = Wn(Ot([x, w])).join(" ");
      } else
        m !== "_id" && delete g[m];
    }
    return g;
  };
  return {
    askAi: B(
      async (f, h, g, m) => {
        if (o) {
          e(!0), r(null);
          try {
            const y = c === d ? "" : c, x = g.toLowerCase().includes("translate the content"), w = f === "content" ? u1(so(Uu(h, a)), c, x) : [u(h, a)], S = await o(f, p1(g, p, f), w, y);
            if (S === void 0) return;
            const { blocks: v, error: N } = S;
            if (N) {
              r(N);
              return;
            }
            if (f === "styles") {
              const T = v.map((k) => {
                for (const C in k)
                  C !== "_id" && (k[C] = `${St},${k[C]}`);
                return k;
              });
              i(T);
            } else
              s(v);
            m && m(S);
          } catch (y) {
            r(y);
          } finally {
            e(!1), m && m();
          }
        }
      },
      [
        o,
        e,
        c,
        d,
        a,
        p,
        i,
        s
      ]
    ),
    loading: t,
    error: n
  };
};
function h1({ onClick: t }) {
  const { loading: e } = Ku(), { t: n } = K(), { selectedLang: r, fallbackLang: o } = Je(), i = [...[
    {
      name: n("Improve writing"),
      icon: _o,
      prompt: n(
        "Improving writing in all text elements. Replacing placeholder content with meaningful relevant content."
      )
    },
    {
      name: n("Replace placeholder content"),
      icon: Rl,
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
      icon: kf,
      prompt: n("Add emojis to text elements if relevant.")
    },
    {
      name: n("Randomize"),
      icon: Cf,
      prompt: n("Randomize all text elements.")
    }
  ]];
  return r && r !== o && i.splice(0, 0, {
    name: n("Translate to {{lang}}", { lang: _(jn, r, r) }),
    icon: Nf,
    prompt: n("Translate the content to {{lang}}. Maintain same tone, style and length.", {
      lang: _(jn, r, r)
    })
  }), /* @__PURE__ */ l("div", { className: e ? "pointer-events-none opacity-50" : "", children: /* @__PURE__ */ l("ul", { className: "space-y-1", children: i.map(
    ({ name: a, icon: c, subMenus: d, prompt: p }) => d ? /* @__PURE__ */ b(Wi, { children: [
      /* @__PURE__ */ l(Gi, { asChild: !0, children: /* @__PURE__ */ b(
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
      /* @__PURE__ */ l(jo, { side: "right", children: /* @__PURE__ */ l("ul", { children: /* @__PURE__ */ l("li", { children: n("Happy") }) }) })
    ] }) : /* @__PURE__ */ b(
      "li",
      {
        onClick: () => t(p),
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
const m1 = ({ blockId: t }) => {
  const { t: e } = K(), { askAi: n, loading: r, error: o } = Ku(), [s, i] = $(""), a = te(null), c = te(null), d = ae();
  z(() => {
    var u;
    (u = a.current) == null || u.focus();
  }, []);
  const p = () => {
    o || i("");
  };
  return /* @__PURE__ */ l("div", { className: "", children: t ? /* @__PURE__ */ b("div", { className: "", children: [
    /* @__PURE__ */ l("label", { className: "text-xs font-medium text-gray-500", children: e("Selected block") }),
    d && /* @__PURE__ */ b("div", { className: "flex items-center gap-x-1 rounded border border-primary/20 bg-primary/10 p-1.5 text-xs text-primary", children: [
      /* @__PURE__ */ l(Vu, { type: d._type }),
      " ",
      /* @__PURE__ */ l("p", { className: "truncate whitespace-nowrap leading-none", children: d._name || d._type })
    ] }),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("label", { className: "text-xs font-medium text-gray-500", children: e("Quick actions") }),
    /* @__PURE__ */ l("div", { className: "rounded border p-2 text-sm", children: /* @__PURE__ */ l(
      h1,
      {
        onClick: (u) => {
          c.current && clearTimeout(c.current), n("content", t, u, p);
        }
      }
    ) }),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("label", { className: "text-xs font-medium text-gray-500", children: e("Ask AI") }),
    /* @__PURE__ */ b("div", { className: "rounded border p-2 text-xs focus-within:border-gray-300", children: [
      /* @__PURE__ */ l(
        Yo,
        {
          ref: a,
          value: s,
          onChange: (u) => i(u.target.value),
          placeholder: e("Ask AI to edit content"),
          className: "w-full resize-none border-none p-0 text-xs shadow-none outline-none",
          rows: 3,
          onKeyDown: (u) => {
            u.key === "Enter" && (u.preventDefault(), c.current && clearTimeout(c.current), n("content", t, s, p));
          }
        }
      ),
      /* @__PURE__ */ b("div", { className: "flex items-center justify-end", children: [
        r && /* @__PURE__ */ l(re, { variant: "destructive", onClick: () => stop(), className: "hidden h-4 w-4", size: "icon", children: /* @__PURE__ */ l(Sf, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ l(
          re,
          {
            onClick: () => {
              c.current && clearTimeout(c.current), n("content", t, s, p);
            },
            variant: "default",
            className: "h-7 w-7",
            disabled: r || s.trim().length < 1,
            size: "icon",
            children: r ? /* @__PURE__ */ l(Js, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ l(Pl, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l("div", { className: "max-w-full pt-2", children: o && /* @__PURE__ */ l("p", { className: "break-words rounded border border-red-500 bg-red-100 p-1 text-xs text-red-500", children: o.message }) })
  ] }) : /* @__PURE__ */ l("div", { className: "p-4 text-center", children: /* @__PURE__ */ b("div", { className: "space-y-4 rounded-xl p-4 text-muted-foreground", children: [
    /* @__PURE__ */ l(ni, { className: "mx-auto h-7 w-7 text-muted-foreground" }),
    /* @__PURE__ */ l("h1", { children: e("Please select a block to Ask AI") })
  ] }) }) });
}, Yu = () => {
  const [t] = oe();
  return /* @__PURE__ */ l("div", { className: "no-scrollbar mt-2 flex-1 overflow-y-auto", children: /* @__PURE__ */ l(m1, { blockId: ye(t) }) });
};
function nN() {
  const [t, e] = Lr();
  return /* @__PURE__ */ b("div", { className: "flex items-center", children: [
    t ? /* @__PURE__ */ l($l, { className: "size-4 shrink-0" }) : /* @__PURE__ */ l(Dl, { className: "size-4 shrink-0" }),
    /* @__PURE__ */ l(
      Wo,
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
const rN = () => {
  const { hasUndo: t, hasRedo: e, undo: n, redo: r } = Tr();
  return /* @__PURE__ */ b("div", { className: "flex items-center", children: [
    /* @__PURE__ */ l(re, { disabled: !t(), size: "sm", onClick: n, className: "rounded-full", variant: "ghost", children: /* @__PURE__ */ l(ao, {}) }),
    /* @__PURE__ */ l(re, { disabled: !e(), onClick: r, size: "sm", className: "rounded-full", variant: "ghost", children: /* @__PURE__ */ l(ao, { className: "rotate-180 scale-y-[-1] transform" }) })
  ] });
}, g1 = xe.Root, b1 = xe.Portal, Ju = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(
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
Ju.displayName = xe.Overlay.displayName;
const y1 = Qs(
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
), Xu = W.forwardRef(
  ({ side: t = "right", className: e, children: n, ...r }, o) => /* @__PURE__ */ b(b1, { children: [
    /* @__PURE__ */ l(Ju, {}),
    /* @__PURE__ */ b(xe.Content, { ref: o, className: j(y1({ side: t }), e), ...r, children: [
      /* @__PURE__ */ b(xe.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
        /* @__PURE__ */ l(at, { className: "h-4 w-4" }),
        /* @__PURE__ */ l("span", { className: "sr-only", children: "Close" })
      ] }),
      n
    ] })
  ] })
);
Xu.displayName = xe.Content.displayName;
const qu = ({ className: t, ...e }) => /* @__PURE__ */ l("div", { className: j("flex flex-col space-y-2 text-center sm:text-left", t), ...e });
qu.displayName = "SheetHeader";
const Zu = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(xe.Title, { ref: n, className: j("text-lg font-semibold text-foreground", t), ...e }));
Zu.displayName = xe.Title.displayName;
const x1 = W.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ l(xe.Description, { ref: n, className: j("text-sm text-muted-foreground", t), ...e }));
x1.displayName = xe.Description.displayName;
const w1 = () => {
  const { t } = K(), [e, n] = $(null), [r, o] = $(-1), [s, i] = $(!1), a = vt(), [, c] = Ei();
  return Dn(se.OPEN_ADD_BLOCK, (d) => {
    a ? c("add-block") : (n(d ? d._id : null), o((d == null ? void 0 : d.position) ?? -1), i(!0));
  }), Dn(se.CLOSE_ADD_BLOCK, () => {
    n(null), o(-1), i(!1);
  }), /* @__PURE__ */ l(Ou, { open: s, onOpenChange: () => s ? i(!1) : "", children: /* @__PURE__ */ b(Zi, { className: "max-w-5xl overflow-hidden border-border", children: [
    /* @__PURE__ */ b(Qi, { className: "flex flex-row items-center justify-between", children: [
      /* @__PURE__ */ l(ea, { className: "text-foreground", children: t("Add blocks") }),
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => i(!1),
          className: "text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
          children: /* @__PURE__ */ l(To, { className: "h-6 w-6" })
        }
      )
    ] }),
    /* @__PURE__ */ l("div", { className: "no-scrollbar h-[500px] max-h-full overflow-hidden", children: /* @__PURE__ */ l(Pu, { parentId: e ?? "", position: r, showHeading: !1 }) })
  ] }) });
}, v1 = ne.memo(function({
  preloadedAttributes: e = [],
  onAttributesChange: n
}) {
  const [r, o] = $([]), [s, i] = $(""), [a, c] = $(""), [d, p] = $(null), [u, f] = $(""), h = te(null), g = te(null), m = Yn(), { t: y } = K();
  z(() => {
    o(e);
  }, [e]);
  const x = () => {
    if (s.startsWith("@")) {
      f(y("Attribute keys cannot start with @"));
      return;
    }
    if (s) {
      const k = [...r, { key: s, value: a }];
      n == null || n(k), o(r), i(""), c(""), f("");
    }
  }, w = (k) => {
    const C = r.filter((E, I) => I !== k);
    n == null || n(C), o(C);
  }, S = (k) => {
    p(k), i(r[k].key), c(r[k].value);
  }, v = () => {
    if (s.startsWith("@")) {
      f(y("Attribute keys cannot start with @"));
      return;
    }
    if (d !== null && s) {
      const k = [...r];
      k[d] = { key: s, value: a }, n == null || n(k), o(k), p(null), i(""), c(""), f("");
    }
  }, N = (k) => {
    k.key === "Enter" && !k.shiftKey && (k.preventDefault(), d !== null ? v() : x());
  }, T = B((k) => {
    const C = (L) => /[.,!?;:]/.test(L), E = (L, R, V) => {
      let Y = "", q = "";
      const we = R > 0 ? L[R - 1] : "", ve = R < L.length ? L[R] : "";
      return R > 0 && (we === "." || !C(we) && we !== " ") && (Y = " "), R < L.length && !C(ve) && ve !== " " && (q = " "), {
        text: Y + V + q,
        prefixLength: Y.length,
        suffixLength: q.length
      };
    }, I = g.current;
    if (I) {
      const L = I.selectionStart || 0, R = I.value || "", V = I.selectionEnd || L;
      if (V > L) {
        const fe = `{{${k}}}`, { text: Ve } = E(R, L, fe), J = R.slice(0, L) + Ve + R.slice(V);
        c(J);
        return;
      }
      const q = `{{${k}}}`, { text: we } = E(R, L, q), ve = R.slice(0, L) + we + R.slice(L);
      c(ve);
    }
  }, []);
  return /* @__PURE__ */ b("div", { className: "flex max-h-full flex-1 flex-col", children: [
    /* @__PURE__ */ b(
      "form",
      {
        onSubmit: (k) => {
          k.preventDefault(), d !== null ? v() : x();
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
                  onChange: (k) => i(k.target.value),
                  placeholder: y("Enter key"),
                  className: "py-0 text-xs font-normal leading-tight placeholder:text-slate-400"
                }
              )
            ] }),
            /* @__PURE__ */ b("div", { className: "w-full", children: [
              /* @__PURE__ */ b("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ l(bn, { htmlFor: "attrValue", className: "text-[11px] font-normal text-slate-600", children: y("Value") }),
                !F(m) && /* @__PURE__ */ l(lu, { data: m, onSelect: T })
              ] }),
              /* @__PURE__ */ l(
                Yo,
                {
                  autoCapitalize: "off",
                  autoCorrect: "off",
                  spellCheck: "false",
                  id: "attrValue",
                  ref: g,
                  value: a,
                  onChange: (k) => c(k.target.value),
                  onKeyDown: N,
                  placeholder: y("Enter value"),
                  className: "text-xs font-normal leading-tight placeholder:text-slate-400"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ l("div", { className: "flex justify-end", children: /* @__PURE__ */ l(re, { type: "submit", disabled: !s.length, variant: "default", size: "sm", className: "h-8 w-24 text-xs", children: y(d !== null ? "Save" : "Add") }) }),
          u && /* @__PURE__ */ l("p", { className: "text-xs text-red-500", children: u })
        ]
      }
    ),
    /* @__PURE__ */ l("div", { className: "space-y-1 py-4", children: r.map((k, C) => /* @__PURE__ */ b("div", { className: "flex items-center justify-between rounded border p-2 text-sm", children: [
      /* @__PURE__ */ b("div", { className: "flex flex-col text-xs leading-tight", children: [
        /* @__PURE__ */ l("span", { className: "truncate text-[12px] font-light text-muted-foreground", children: k.key }),
        /* @__PURE__ */ l("span", { className: "max-w-[200px] text-wrap font-normal", children: k.value.toString() })
      ] }),
      /* @__PURE__ */ b("div", { className: "flex-shrink-0 text-slate-400", children: [
        /* @__PURE__ */ l(re, { variant: "ghost", size: "icon", className: "h-6 w-6", onClick: () => S(C), children: /* @__PURE__ */ l(_o, { className: "h-3 w-3" }) }),
        /* @__PURE__ */ l(re, { variant: "ghost", size: "icon", className: "h-6 w-6", onClick: () => w(C), children: /* @__PURE__ */ l(at, { className: "h-3 w-3" }) })
      ] })
    ] }, C)) })
  ] });
}), k1 = W.memo(() => {
  const t = ae(), [e, n] = $([]), [r] = He(), o = _t(), s = `${_(r, "0.prop")}_attrs`;
  W.useEffect(() => {
    const a = A(_(t, s), (c, d) => ({ key: d, value: c }));
    F(a) ? n([]) : n(a);
  }, [_(t, s)]);
  const i = W.useCallback(
    (a = []) => {
      if (!t) return;
      const c = {};
      So(a, (d) => {
        F(d.key) || Ue(c, d.key, d.value);
      }), o([_(t, "_id")], { [s]: c });
    },
    [t, o, s]
  );
  return /* @__PURE__ */ l("div", { className: "flex-col gap-y-2", children: /* @__PURE__ */ l("div", { className: "flex flex-col", children: /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(v1, { preloadedAttributes: e, onAttributesChange: i }) }) }) });
}), Bn = () => null, ml = () => {
  const { resetAll: t } = mu(), e = ae(), [n] = He(), r = z0(), { t: o } = K();
  return !e || F(n) ? null : /* @__PURE__ */ b(kn, { children: [
    /* @__PURE__ */ l(Cn, { asChild: !0, children: /* @__PURE__ */ l("div", { className: "inline-flex rounded-sm p-0.5 hover:bg-gray-300", onClick: (s) => s.stopPropagation(), children: /* @__PURE__ */ l(Ao, { className: "h-3 w-3" }) }) }),
    /* @__PURE__ */ b(Ft, { side: "bottom", className: "border-border text-xs", children: [
      /* @__PURE__ */ b(
        Ee,
        {
          className: "flex items-center gap-1 text-xs",
          onClick: () => {
            t();
          },
          children: [
            /* @__PURE__ */ l(ao, { className: "h-3 w-3" }),
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
            /* @__PURE__ */ l(To, { className: "h-3 w-3" }),
            o("Clear styles")
          ]
        }
      )
    ] })
  ] });
};
function gl() {
  const { t } = K(), [e, n] = $(!0), [r] = He();
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
    e && /* @__PURE__ */ l(k1, {})
  ] });
}
const C1 = ({ partialBlockId: t }) => {
  const e = G("gotoPage", Ct), { saveState: n } = Ar(), { selectedLang: r, fallbackLang: o } = Je(), s = B(
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
}, N1 = () => {
  const t = ae(), { t: e } = K(), n = G("onError", Ct), { hasPermission: r } = wt();
  let o = !r(Be.EDIT_BLOCK);
  const s = !r(Be.EDIT_STYLES), [i, a] = Qc();
  return t && t._type === "PartialBlock" ? /* @__PURE__ */ l(C1, { partialBlockId: t.partialBlockId }) : t ? o && s ? /* @__PURE__ */ l("div", { className: "p-4 text-center", children: /* @__PURE__ */ b("div", { className: "space-y-4 rounded-xl p-4 text-muted-foreground", children: [
    /* @__PURE__ */ l(lo, { className: "mx-auto text-3xl" }),
    /* @__PURE__ */ l("h1", { children: e("You don't have permission to edit settings or styles") }),
    /* @__PURE__ */ l("p", { children: e("Please contact your administrator to get access") })
  ] }) }) : s ? /* @__PURE__ */ l(on, { fallback: /* @__PURE__ */ l(ur, {}), onError: n, children: /* @__PURE__ */ b("div", { className: "no-scrollbar h-full max-h-min w-full overflow-y-auto", children: [
    /* @__PURE__ */ l(Qa, {}, t == null ? void 0 : t._id),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("br", {})
  ] }) }) : o ? /* @__PURE__ */ l(on, { fallback: /* @__PURE__ */ l(ur, {}), onError: n, children: /* @__PURE__ */ b("div", { className: "no-scrollbar h-full max-h-min w-full overflow-y-auto overflow-x-hidden", children: [
    /* @__PURE__ */ l("div", { className: "flex w-full items-center justify-end", children: /* @__PURE__ */ l(ml, {}) }),
    /* @__PURE__ */ l(ll, {}),
    /* @__PURE__ */ l(gl, {}),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("br", {}),
    /* @__PURE__ */ l("br", {})
  ] }) }) : /* @__PURE__ */ l(on, { fallback: /* @__PURE__ */ l(ur, {}), onError: n, children: /* @__PURE__ */ b(Ji, { value: i, onValueChange: (p) => {
    (p === "settings" || p === "styles") && a(p);
  }, className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ b(Ko, { className: "grid h-auto w-full grid-cols-2 p-1 py-1", children: [
      /* @__PURE__ */ l(lt, { value: "settings", className: "text-xs", children: e("Settings") }),
      /* @__PURE__ */ l(lt, { value: "styles", className: "text-xs", children: /* @__PURE__ */ b("div", { className: "flex w-full items-center justify-between", children: [
        /* @__PURE__ */ l("span", { className: "w-[90%] text-center", children: e("Styling") }),
        /* @__PURE__ */ l("span", { className: "w-[10%]", children: /* @__PURE__ */ l(ml, {}) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ b(jt, { value: "settings", className: "no-scrollbar h-full max-h-min overflow-y-auto", children: [
      /* @__PURE__ */ l(Qa, {}, t == null ? void 0 : t._id),
      /* @__PURE__ */ l("br", {}),
      /* @__PURE__ */ l("br", {})
    ] }),
    /* @__PURE__ */ b(
      jt,
      {
        value: "styles",
        className: "no-scrollbar h-full max-h-min max-w-full overflow-y-auto overflow-x-hidden",
        children: [
          /* @__PURE__ */ l(ll, {}),
          /* @__PURE__ */ l(gl, {}),
          /* @__PURE__ */ l("br", {}),
          /* @__PURE__ */ l("br", {}),
          /* @__PURE__ */ l("br", {})
        ]
      }
    )
  ] }) }) : /* @__PURE__ */ l("div", { className: "p-4 text-center", children: /* @__PURE__ */ b("div", { className: "space-y-4 rounded-xl p-4 text-muted-foreground", children: [
    /* @__PURE__ */ l(lo, { className: "mx-auto text-3xl" }),
    /* @__PURE__ */ l("h1", { children: e("Please select a block to edit settings or styles") })
  ] }) });
}, Wt = 280, S1 = ({ isActive: t, show: e }) => /* @__PURE__ */ l(re, { variant: t ? "default" : "ghost", size: "icon", onClick: e, children: /* @__PURE__ */ l(ph, { className: "h-5 w-5" }) }), E1 = ({ isActive: t, show: e }) => vt() && /* @__PURE__ */ l(re, { variant: t ? "default" : "ghost", size: "icon", onClick: e, children: /* @__PURE__ */ l(uh, { className: "h-5 w-5" }) }), _1 = ({ isActive: t, show: e }) => G("flags.ai", !1) ? /* @__PURE__ */ l(re, { variant: t ? "default" : "ghost", size: "icon", onClick: e, children: /* @__PURE__ */ l(ni, {}) }) : null;
Us("add-block", {
  button: E1,
  label: "Add Blocks",
  position: "top",
  isInternal: !0,
  width: Wt,
  panel: () => /* @__PURE__ */ l(Pu, { showHeading: !1, fromSidebar: !0, parentId: void 0, position: -1 })
});
Us("chai-chat-panel", {
  button: _1,
  label: "Ask AI",
  position: "top",
  isInternal: !0,
  width: Wt,
  panel: () => /* @__PURE__ */ l("div", { className: "", children: /* @__PURE__ */ l(Yu, {}) })
});
Us("outline", {
  button: S1,
  label: "Outline",
  position: "top",
  isInternal: !0,
  width: Wt,
  panel: () => /* @__PURE__ */ l("div", { className: "-mt-8", children: /* @__PURE__ */ l(Nv, {}) })
});
const A1 = () => {
  const t = Ap(), [e, n] = Ei(), r = te("outline"), [o, s] = $(Wt), [i, a] = Yg(), [, c] = Qc(), d = ra("top"), p = ra("bottom"), u = wp([...p ?? []]), f = B((C) => {
    C.preventDefault();
  }, []), h = M(() => [d].flat(), [d]), g = B(
    (C) => {
      console.log("handleMenuItemClick", C, e), n(e === C ? null : C);
    },
    [e, n]
  ), { t: m } = K(), y = M(() => [...d, ...p], [d, p]), x = G("htmlDir", "ltr"), w = ee(y, { id: e }) ?? ye(y), S = _(w, "width", Wt);
  z(() => {
    if (e !== null) {
      const C = ee(y, { id: e });
      C && _(C, "view", "standard") === "standard" && (r.current = e, s(_(C, "width", Wt)));
    }
  }, [e, y]);
  const v = M(() => {
    if (e === null) return 0;
    const C = ee(y, { id: e });
    return _(C, "view", "standard") === "standard" ? S : o;
  }, [e, S, o, y]), N = B(() => {
    n(r.current);
  }, [n, e]), T = B(() => {
    n("outline");
  }, [n]);
  z(() => {
    e !== null && !ee(y, { id: e }) && n("outline");
  }, [e, y]);
  const k = B(
    (C) => {
      g(C);
    },
    [g]
  );
  return /* @__PURE__ */ l("div", { dir: x, className: "h-screen max-h-full w-screen overflow-x-hidden bg-background text-foreground", children: /* @__PURE__ */ b(Ms, { children: [
    /* @__PURE__ */ b("div", { onContextMenu: f, className: "flex h-full max-h-full flex-col", children: [
      /* @__PURE__ */ l("div", { className: "flex h-[50px] w-screen items-center border-b border-gray-200 bg-gray-50 text-gray-900", children: /* @__PURE__ */ l(Ge, { children: /* @__PURE__ */ l(t, {}) }) }),
      /* @__PURE__ */ b("main", { className: "relative flex h-[calc(100vh-56px)] max-w-full flex-1 flex-row", children: [
        /* @__PURE__ */ b(
          "div",
          {
            id: "sidebar",
            className: "flex w-12 flex-col items-center justify-between border-r border-gray-200 bg-gray-50 py-2 text-gray-900",
            children: [
              /* @__PURE__ */ l("div", { className: "flex flex-col gap-y-1", children: h.map((C, E) => /* @__PURE__ */ b(Ne, { children: [
                /* @__PURE__ */ l(Se, { asChild: !0, children: un(_(C, "button", Bn), {
                  position: "top",
                  panelId: C.id,
                  isActive: e === C.id,
                  show: () => k(C.id)
                }) }),
                /* @__PURE__ */ l(be, { side: "right", children: /* @__PURE__ */ l("p", { children: m(C.label) }) })
              ] }, "button-top-" + E)) }),
              /* @__PURE__ */ l("div", { className: "flex flex-col space-y-1" }),
              /* @__PURE__ */ l("div", { className: "flex flex-col", children: u == null ? void 0 : u.map((C, E) => /* @__PURE__ */ b(Ne, { children: [
                /* @__PURE__ */ l(Se, { asChild: !0, children: un(_(C, "button", Bn), {
                  position: "bottom",
                  panelId: C.id,
                  isActive: e === C.id,
                  show: () => k(C.id)
                }) }),
                /* @__PURE__ */ l(be, { side: "right", children: /* @__PURE__ */ l("p", { children: m(C.label) }) })
              ] }, "button-bottom-" + E)) })
            ]
          }
        ),
        /* @__PURE__ */ l(
          zr.div,
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
                  children: /* @__PURE__ */ l("span", { children: m(_(w, "label", "")) })
                }
              ) : null,
              /* @__PURE__ */ l(
                "div",
                {
                  className: "no-scrollbar h-full max-h-full overflow-y-auto " + (_(w, "label", "") !== "" ? "pt-10" : ""),
                  children: /* @__PURE__ */ l(Ge, { fallback: /* @__PURE__ */ l("div", { children: "Loading..." }), children: ne.createElement(_(w, "panel", Bn), {}) })
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ l("div", { id: "canvas-container", className: "flex h-full max-h-full flex-1 flex-col bg-slate-800/20", children: /* @__PURE__ */ l(Ge, { children: /* @__PURE__ */ l(i0, {}) }) }),
        /* @__PURE__ */ l(
          zr.div,
          {
            id: "right-panel",
            className: "h-full max-h-full border-l border-gray-200 bg-white text-gray-900",
            initial: { width: e === "ai" ? 0 : Wt },
            animate: { width: e === "ai" ? 0 : Wt },
            transition: { duration: 0.3, ease: "easeInOut" },
            children: /* @__PURE__ */ l("div", { className: "no-scrollbar overflow h-full max-h-full overflow-hidden", children: /* @__PURE__ */ b("div", { className: "flex h-full max-h-full flex-col overflow-hidden p-3", children: [
              /* @__PURE__ */ l("h2", { className: "-mt-1 flex items-center space-x-1 text-base font-bold", children: /* @__PURE__ */ l("div", { className: "flex grow items-center gap-2", children: /* @__PURE__ */ l("div", { className: "flex w-full items-center justify-between gap-2", children: i === "ai" ? /* @__PURE__ */ l(Q, { children: /* @__PURE__ */ b("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ l(Ef, { className: "rtl:ml-2" }),
                " ",
                m("AI Assistant")
              ] }) }) : i === "design-tokens" ? /* @__PURE__ */ b("div", { className: "mb-1 flex w-full items-center justify-between gap-2", children: [
                /* @__PURE__ */ b("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ l(vu, { className: "h-4 w-4 text-gray-600" }),
                  m("Design Tokens")
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
                  /* @__PURE__ */ l(lo, { className: "h-4 w-4 text-gray-600" }),
                  m("Theme Settings")
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
              /* @__PURE__ */ l("div", { className: "flex h-full max-h-full w-full", children: /* @__PURE__ */ l(Ge, { fallback: /* @__PURE__ */ l("div", { children: "Loading..." }), children: i === "ai" ? /* @__PURE__ */ l(Yu, {}) : i === "theme" ? /* @__PURE__ */ l($v, {}) : /* @__PURE__ */ l(N1, {}) }) })
            ] }) })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ l(w1, {}),
    e !== null && _(w, "view") === "drawer" && /* @__PURE__ */ l(g1, { open: !0, onOpenChange: () => N(), children: /* @__PURE__ */ b(
      Xu,
      {
        side: "left",
        className: "flex flex-col gap-0 p-0 sm:max-w-full",
        style: { width: `${S}px` },
        children: [
          /* @__PURE__ */ l(qu, { className: "border-b border-border px-2 py-2.5", children: /* @__PURE__ */ b(Zu, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ l("span", { className: "inline-block", children: _(w, "icon", null) }),
            /* @__PURE__ */ l("span", { children: m(_(w, "label", "")) })
          ] }) }),
          /* @__PURE__ */ l("div", { className: "h-full max-h-full overflow-y-auto p-4", children: /* @__PURE__ */ l(Ge, { fallback: /* @__PURE__ */ l("div", { children: "Loading..." }), children: ne.createElement(_(w, "panel", Bn), {
            close: T
          }) }) })
        ]
      }
    ) }),
    " ",
    e !== null && _(w, "view") === "modal" && /* @__PURE__ */ l(Ho, { open: !0, onOpenChange: () => N(), children: /* @__PURE__ */ b(Or, { className: "gap-0 p-0", style: { maxWidth: `${S}px` }, children: [
      /* @__PURE__ */ l(Vo, { className: "border-b border-border px-2 py-3.5", children: /* @__PURE__ */ b(Mr, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ l("span", { className: "inline-block", children: _(w, "icon", null) }),
        /* @__PURE__ */ l("span", { children: m(_(w, "label", "")) })
      ] }) }),
      /* @__PURE__ */ l("div", { className: "max-h-[70vh] overflow-y-auto p-4", children: /* @__PURE__ */ l(Ge, { fallback: /* @__PURE__ */ l("div", { children: "Loading..." }), children: ne.createElement(_(w, "panel", Bn), {
        close: T
      }) }) })
    ] }) }),
    e !== null && _(w, "view") === "overlay" && /* @__PURE__ */ l(
      zr.div,
      {
        className: "absolute bottom-0 left-12 right-0 top-0 z-50",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
        children: /* @__PURE__ */ l("div", { className: "h-full w-full", children: /* @__PURE__ */ b(
          zr.div,
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
                  /* @__PURE__ */ l("span", { children: m(_(w, "label", "")) })
                ] }),
                /* @__PURE__ */ l(re, { onClick: () => N(), variant: "ghost", size: "icon", className: "", children: /* @__PURE__ */ l(at, { className: "h-5 w-5" }) })
              ] }),
              /* @__PURE__ */ l("div", { className: "flex-1 overflow-y-auto p-4", children: /* @__PURE__ */ l(Ge, { fallback: /* @__PURE__ */ l("div", { children: "Loading..." }), children: ne.createElement(_(w, "panel", Bn), {
                close: T
              }) }) })
            ]
          }
        ) })
      }
    )
  ] }) });
}, T1 = P(!1), I1 = () => {
  const [t, e] = D(T1);
  return [t, e];
}, B1 = () => {
  const [t, e] = I1(), { t: n } = K(), r = G("previewComponent", null);
  return t ? /* @__PURE__ */ b("div", { className: Qe("fixed inset-0 z-[999] bg-background", t ? "block" : "hidden"), children: [
    /* @__PURE__ */ b(re, { size: "sm", className: "absolute right-0 top-0 m-4 space-x-2", onClick: () => e(!1), children: [
      /* @__PURE__ */ l(io, {}),
      /* @__PURE__ */ l("span", { children: n("Close Preview") })
    ] }),
    /* @__PURE__ */ l("div", { children: r ? /* @__PURE__ */ l(Ge, { fallback: /* @__PURE__ */ l(Hn, { className: "h-96 w-full" }), children: ne.createElement(r) }) : null })
  ] }) : null;
}, R1 = (t) => {
}, L1 = [
  "data-block-index",
  "draggable",
  "data-drop",
  "data-style-id",
  "data-block-parent",
  "data-style-prop",
  "data-highlighted"
], P1 = [
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
], Qu = (t) => t.type === "element" && ["script", "style", "link"].includes(t.tagName || "") || t.type === "comment" ? null : t.type === "text" ? t : t.type === "element" && t.attributes && t.attributes.find((e) => e.key === "id" && e.value === "add-block-bottom") ? null : (t.type === "element" && t.attributes && (t.attributes = t.attributes.filter((e) => !L1.includes(e.key))), t.children && (t.children = t.children.map(Qu).filter((e) => e !== null)), t), ro = (t, e, n = {}) => {
  var s, i, a, c, d, p;
  if (t.type !== "element" || !t.attributes)
    return t;
  if (t.tagName === "span" && t.attributes.find((f) => f.key === "role" && f.value === "link")) {
    t.tagName = "a", t.attributes = t.attributes.filter((g) => g.key !== "role");
    const f = (s = t.attributes.find((g) => g.key === "data-block-id")) == null ? void 0 : s.value, h = e == null ? void 0 : e.find((g) => (g == null ? void 0 : g._id) === f);
    if (h != null && h.link && ((a = (i = h == null ? void 0 : h.link) == null ? void 0 : i.href) == null ? void 0 : a.length) > 0) {
      const g = (c = h == null ? void 0 : h.link) == null ? void 0 : c.href, m = (d = h == null ? void 0 : h.link) == null ? void 0 : d.target;
      t.attributes.push({ key: "href", value: g }), typeof m == "string" && m.length > 0 && t.attributes.push({ key: "target", value: m });
    }
  }
  const r = t.attributes.find((u) => u.key === "data-block-type"), o = t.attributes.find((u) => u.key === "data-block-id");
  if (r) {
    const u = r.value;
    if (P1.includes(u) || (p = n == null ? void 0 : n.additionalCoreBlocks) != null && p.includes(u))
      t.attributes = t.attributes.filter((f) => f.key !== "data-block-type"), t.children && (t.children = t.children.map((f) => ro(f, e, n)));
    else {
      const f = `chai-${wl(u)}`;
      t.tagName = f, t.attributes = [], t.attributes.push({ key: "chai-type", value: u });
      const h = Oe(u), g = e.find((m) => m._id === (o == null ? void 0 : o.value));
      if (g && t.attributes.push(
        ...Object.entries(g).filter(([m]) => !["_id", "_type", "_parent", "_index", "_name"].includes(m)).map(([m, y]) => ({
          key: m,
          value: typeof y == "string" ? y : JSON.stringify(y)
        }))
      ), h && (h != null && h.description) && t.attributes.push({
        key: "about-this-component",
        value: h.description
      }), h) {
        if (h.canMove) {
          const m = typeof h.canMove == "function" ? h.canMove() : h.canMove;
          t.attributes.push({
            key: "can-move",
            value: String(m)
          });
        }
        if (h.canDelete) {
          const m = typeof h.canDelete == "function" ? h.canDelete() : h.canDelete;
          t.attributes.push({
            key: "can-delete",
            value: String(m)
          });
        }
      }
      u === "Icon" && (t.attributes = t.attributes.filter((m) => m.key !== "icon")), h && h.canAcceptBlock ? t.children && (t.children = t.children.map((m) => ro(m, e, n))) : t.children = [];
    }
  } else
    t.children && (t.children = t.children.map((u) => ro(u, e, n)));
  return o && t.attributes.push({ key: "bid", value: o.value }), t.attributes = t.attributes.filter((u) => u.key !== "data-block-type" && u.key !== "data-block-id"), t;
}, O1 = () => {
  const [t] = Jn();
  return B(
    (e) => {
      var d, p;
      if (!t) return "";
      const n = e != null && e.blockId ? `[data-block-id="${e.blockId}"]` : "#canvas", r = (p = (d = t.contentDocument) == null ? void 0 : d.querySelector(n)) == null ? void 0 : p[n === "#canvas" ? "innerHTML" : "outerHTML"];
      if (!r) return "";
      const s = ih(r).map(Qu).filter((u) => u !== null), i = Nh(), a = s.map((u) => ro(u, i, e));
      let c = ah(a);
      return c = c.replace(/#styles:,/g, "#styles:"), c.replace(/\s+/g, " ").trim();
    },
    [t]
  );
};
function bl(t) {
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
function oo(t, e = 0) {
  var d;
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return oo(t[0], e);
    const p = "  ".repeat(e);
    let u = `${p}<>
`;
    for (const f of t)
      u += oo(f, e + 1);
    return u += `${p}</>
`, u;
  }
  const n = "  ".repeat(e);
  if (t.nodeType === Node.TEXT_NODE) {
    const p = (d = t.textContent) == null ? void 0 : d.trim();
    return p ? `${n}${p}
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
    const p = [];
    for (const f of t.attributes)
      if (f.name.startsWith("on") && f.name !== "on") {
        const h = f.name.toLowerCase().replace(/on(\w)/, (g, m) => "on" + m.toUpperCase());
        p.push(`${h}={${f.value}}`);
      } else if (f.name === "style" && f.value) {
        const h = f.value.split(";").reduce(
          (g, m) => {
            const [y, x] = m.split(":").map((w) => w.trim());
            if (y && x) {
              const w = y.replace(/-([a-z])/g, (S) => S[1].toUpperCase());
              g[w] = x.replace(/['"]/g, "");
            }
            return g;
          },
          {}
        );
        p.push(`style={${JSON.stringify(h)}}`);
      } else {
        const h = bl(f.name);
        p.push(`${h}="${f.value}"`);
      }
    const u = p.length > 0 ? ` ${p.join(" ")}` : "";
    return `${n}<${r}${u} />
`;
  }
  let s = `${n}<${r}`;
  const i = [];
  for (const p of t.attributes)
    if (p.name.startsWith("on") && p.name !== "on") {
      const u = p.name.toLowerCase().replace(/on(\w)/, (f, h) => "on" + h.toUpperCase());
      i.push(`${u}={${p.value}}`);
    } else if (p.name === "style" && p.value) {
      const u = p.value.split(";").reduce(
        (f, h) => {
          const [g, m] = h.split(":").map((y) => y.trim());
          if (g && m) {
            const y = g.replace(/-([a-z])/g, (x) => x[1].toUpperCase());
            f[y] = m.replace(/['"]/g, "");
          }
          return f;
        },
        {}
      );
      i.push(`style={${JSON.stringify(u)}}`);
    } else {
      const u = bl(p.name);
      i.push(`${u}="${p.value}"`);
    }
  i.length > 0 && (s += " " + i.join(" "));
  const a = Array.from(t.childNodes);
  if (!a.some((p) => {
    var u;
    return p.nodeType === Node.TEXT_NODE ? (u = p.textContent) == null ? void 0 : u.trim() : !0;
  }))
    s += ` />
`;
  else {
    s += `>
`;
    for (const p of a)
      s += oo(p, e + 1);
    s += `${n}</${r}>
`;
  }
  return s;
}
function M1(t) {
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
const D1 = Gs(() => import("./code-display-BaLKScgW.js"));
async function $1(t) {
  try {
    const e = document.createElement("div");
    e.innerHTML = t;
    const n = Array.from(e.children);
    return { jsx: oo(n.length === 1 ? n[0] : n), html: e.innerHTML };
  } catch {
    return { html: t, jsx: t };
  }
}
const F1 = async ({
  selectedBlock: t,
  html: e,
  isTypeScript: n = !1
}) => {
  let r = (t == null ? void 0 : t._name) || (t == null ? void 0 : t._type) || "Component";
  r = vp(r).replace(/^./, (d) => d.toUpperCase());
  const o = "  ";
  let { jsx: s, html: i } = await $1(e);
  return s = s == null ? void 0 : s.split(`
`).join(`
${o}${o}`), s = `${n ? `import React from 'react';

` : ""}export const ${r}${n ? ": React.FC" : ""} = () => {
${o}return (
${o}${o}${s == null ? void 0 : s.trimEnd()}
${o})
}`, { jsx: s, html: M1(i), componentName: r };
}, z1 = ({ tab: t }) => {
  var x;
  const { t: e } = K(), [n, r] = $({ html: "", jsx: "" }), o = ae(), s = O1(), [i, a] = $(""), [c, d] = $(!1), p = () => {
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
  }, u = () => {
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
    const w = o ?? { _name: "Body", _type: "Body" };
    try {
      d(!1);
      let S = s(
        o ? { blockId: o._id, additionalCoreBlocks: ["Icon"] } : { additionalCoreBlocks: ["Icon"] }
      );
      S = S.replace(/\s*bid=["'][^"']*["']/g, "");
      const v = t === "ts", {
        jsx: N,
        html: T,
        componentName: k
      } = await F1({
        selectedBlock: w,
        html: S,
        isTypeScript: v
      });
      r({ html: T || "", jsx: N }), a(k), d(!0);
    } catch {
      const S = "<div>Export failed. Close the modal and try again.</div>";
      r({ html: S, jsx: S }), Ce.error(e("Failed to generate export HTML"));
    }
  }, [e, t, o, s]);
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
  ), g = (w) => {
    const S = new Blob([w], { type: "text/jsx" }), v = URL.createObjectURL(S), N = document.createElement("a");
    N.href = v, N.download = p() ?? "", document.body.appendChild(N), N.click(), URL.revokeObjectURL(v), document.body.removeChild(N), Ce.success(e("Export code downloaded successfully!"));
  }, m = /* @__PURE__ */ b("span", { children: [
    "Download ",
    /* @__PURE__ */ l("span", { className: "font-mono text-xs font-light text-gray-300", children: p() })
  ] }), y = M(() => {
    const w = { extend: fh() }, S = JSON.stringify(w, null, 2);
    return `{
  // Your tailwind config ...

  "theme": ${S == null ? void 0 : S.split(`
`).join(`
  `)},
}`;
  }, []);
  return ((x = n == null ? void 0 : n.jsx) == null ? void 0 : x.length) > 0 && c ? /* @__PURE__ */ l(
    D1,
    {
      onCopy: h,
      code: t === "tailwind" ? y : t === "html" ? n.html : n.jsx,
      language: u() || "",
      downloadText: m,
      onDownload: g
    },
    t
  ) : /* @__PURE__ */ l("div", { className: "flex h-[620px] w-full items-center justify-center p-4", children: "Generating code..." });
}, H1 = () => {
  const { t } = K(), [e, n] = $(!1), { setMode: r } = ed(), [o, s] = $("js"), i = B(async () => {
    s("js"), r("view"), n(!0);
  }, [s, r, n]);
  return Dn(se.OPEN_EXPORT_CODE, i), /* @__PURE__ */ l(Ho, { open: e, onOpenChange: async () => {
    r("edit"), await new Promise((c) => setTimeout(c, 300)), n(!1);
  }, children: /* @__PURE__ */ b(Or, { className: "max-w-5xl overflow-hidden border-border", children: [
    /* @__PURE__ */ b(Vo, { className: "flex flex-row items-center justify-between", children: [
      /* @__PURE__ */ l(Mr, { className: "text-foreground", children: t("Export Code") }),
      /* @__PURE__ */ l(Ji, { defaultValue: "js", onValueChange: s, children: /* @__PURE__ */ b(Ko, { children: [
        /* @__PURE__ */ l(lt, { value: "js", children: "Javascript" }),
        /* @__PURE__ */ l(lt, { value: "ts", children: "Typescript" }),
        /* @__PURE__ */ l(lt, { value: "html", children: "HTML" }),
        /* @__PURE__ */ l(lt, { value: "tailwind", children: "Tailwind config" })
      ] }) }),
      /* @__PURE__ */ l("div", {})
    ] }),
    /* @__PURE__ */ l("div", { className: "flex min-h-[400px] flex-col gap-4", children: e && /* @__PURE__ */ l(
      Ge,
      {
        fallback: /* @__PURE__ */ l("div", { className: "flex h-[400px] items-center justify-center text-muted-foreground", children: "Loading code editor..." }),
        children: /* @__PURE__ */ l(on, { fallback: /* @__PURE__ */ l("div", { children: "Something went wrong" }), children: /* @__PURE__ */ l(z1, { tab: o }) })
      }
    ) })
  ] }) });
}, V1 = () => {
  const t = G("smallScreenComponent", null);
  return /* @__PURE__ */ l("section", { className: "fixed inset-0 z-[99999] flex h-screen w-screen items-center justify-center bg-white xl:hidden", children: t ? ne.createElement(t) : /* @__PURE__ */ l("div", { className: "flex h-full w-full items-center justify-center bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:10px_10px] py-12 sm:py-16 lg:py-20", children: /* @__PURE__ */ l("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ b("div", { className: "mx-auto max-w-md space-y-6 text-center", children: [
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
}, j1 = () => {
  const { clear: t } = Tr(), [, e] = oe(), { clearHighlight: n } = At(), [, r] = He(), [, o] = D(vc), { reset: s } = mi(), { setSaveState: i } = Ar(), [, a] = uc(), [, c] = D(Po);
  return () => {
    a({}), e([]), r([]), n(), t(), o(!1), s(), i("SAVED"), c(0);
  };
}, W1 = (t) => {
  const [, e] = ue(), n = j1(), { postMessage: r } = yc(), [, o] = D(fc), s = hi();
  z(() => {
    const i = Bo(t || []);
    e(i), i && i.length > 0 && r({ type: "blocks-updated", blocks: i }), n(), o(!0), s(i);
  }, [t]);
}, G1 = (t, e) => {
  const n = [];
  let r = ee(t, { _id: e }), o = _(r, "_parent", "");
  for (; Nt(o) && !F(o); )
    n.push(r == null ? void 0 : r._parent), r = ee(t, { _id: o }), o = r == null ? void 0 : r._parent;
  return $t(n);
}, U1 = P([]), K1 = () => {
  const [t] = oe(), e = Ke(Fe), [, n] = D(U1);
  z(() => {
    let r = [];
    const o = ye(t);
    Nt(o) && (r = [o, ...G1(e, o)]), n(r);
  }, [t, e, n]);
}, Y1 = (t) => {
  const [e] = D(mr);
  return D(vi), Jc(), K1(), Qh(), Xh(), lm(), z(() => {
    Pe.set(
      // @ts-ignore
      pi,
      vr(t, ["blocks", "translations", "pageExternalData", "globalStyles"])
    );
  }, [t]), z(() => {
    Pe.set(fi, t.pageExternalData || {});
  }, [t.pageExternalData]), z(() => {
    Pe.set(_r, t.designTokens || {});
  }, [t.designTokens]), W1(t.blocks), z(() => {
    Ns.changeLanguage(t.locale || "en");
  }, [t.locale]), z(() => {
    R1(t.debugLogs ?? !1);
  }, [t.debugLogs]), z(() => {
    t.translations && bt(t.translations, (n, r) => {
      Ns.addResourceBundle(r, "translation", n, !0, !0);
    });
  }, [t.translations]), z(() => (e !== "SAVED" ? window.onbeforeunload = () => "" : window.onbeforeunload = null, () => {
    window.onbeforeunload = null;
  }), [e]), null;
}, J1 = (t) => {
  const e = M(() => t.layout || A1, [t.layout]), n = G("builderTheme", ei), r = G("flags.exportCode", !1);
  return /* @__PURE__ */ b(Q, { children: [
    t.children,
    /* @__PURE__ */ l(qc, { theme: n }),
    /* @__PURE__ */ l(e, {}),
    r && /* @__PURE__ */ l(H1, {})
  ] });
}, oN = (t) => {
  const e = t.onError || Ct;
  return /* @__PURE__ */ l("div", { className: "h-screen w-screen", children: /* @__PURE__ */ b(on, { fallback: /* @__PURE__ */ l(ur, {}), onError: e, children: [
    /* @__PURE__ */ l(V1, {}),
    /* @__PURE__ */ l(J1, { ...t }),
    /* @__PURE__ */ l(Y1, { ...t }),
    /* @__PURE__ */ l(B1, {}),
    /* @__PURE__ */ l(oh, { richColors: !0 })
  ] }) });
}, sN = ({
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
}), X1 = (t, e) => t.map((n) => {
  const r = Oe(n._type);
  if (!r) return n;
  const o = r.i18nProps;
  if (!o) return n;
  const s = Z(e, { _type: n._type }), i = dn(n, o);
  return bt(i, (a, c) => {
    const d = ee(s, (p) => {
      var h;
      const u = typeof p[c] == "string" ? (h = p[c]) == null ? void 0 : h.trim().toLowerCase() : JSON.stringify(p[c]), f = typeof a == "string" ? a.trim().toLowerCase() : JSON.stringify(a);
      return u === f;
    });
    if (d) {
      const p = Z(Object.keys(d), (f) => Re(f, `${c}-`)), u = dn(d, p);
      n = { ...n, ...u };
    }
  }), n;
}), iN = () => {
  const [t] = ue();
  return B(
    (e) => {
      const n = fr(e), r = $f(n, t);
      return X1(r, t);
    },
    [t]
  );
}, ep = (t, e) => {
  const n = t.filter((o) => o._parent === e), r = n.flatMap((o) => ep(t, o._id));
  return [...n, ...r];
}, q1 = (t, e) => {
  const n = e.find((o) => o._id === t);
  if (!n) return [];
  const r = ep(e, t);
  return [n, ...r];
}, aN = () => {
  const t = ae(), [e] = ue();
  return B(
    (n = "") => {
      const r = t != null && t._id ? q1(t._id, e) : e;
      return r ? Wn(
        r.map((o) => {
          const s = Oe(o._type);
          if (!s) return null;
          const i = (s == null ? void 0 : s.i18nProps) ?? [];
          if (i.length === 0) return null;
          const a = n === "ALL" ? Object.keys(o).filter((d) => i.find((p) => d.startsWith(p))) : i.map((d) => n ? `${d}-${n}` : d), c = dn(o, ["_id"]);
          return bt(a, (d) => {
            c[d] = _(o, d, _(o, d.replace(`-${n}`, "")));
          }), c;
        })
      ) : [];
    },
    [t == null ? void 0 : t._id, e]
  );
}, tp = (t, e) => {
  const n = t.filter((s) => s._parent === e), r = n.map((s) => s._id), o = n.flatMap((s) => tp(t, s._id));
  return [...r, ...o];
}, Z1 = (t, e, n) => {
  const r = ee(t, { _id: e });
  if (!r) return t;
  const o = t.findIndex((u) => u._id === e), s = tp(t, e), i = /* @__PURE__ */ new Set([e, ...s]), a = t.filter((u) => !i.has(u._id)), c = new Set(n.map((u) => u._id)), d = n.map((u) => !u._parent || !c.has(u._parent) ? { ...u, _parent: r._parent } : u);
  return [
    ...a.slice(0, o),
    ...d,
    ...a.slice(o)
  ];
}, lN = () => {
  const [, t] = oe(), { setNewBlocks: e } = ze(), { hasPermission: n } = wt();
  return B(
    (r, o) => {
      if (!n(Be.EDIT_BLOCK)) return;
      const s = Pe.get(Fe), i = r ? Z1(s, r, o) : o;
      e(i), o.length > 0 && setTimeout(() => t([o[0]._id]), 200);
    },
    [t, e, n]
  );
};
if (typeof window > "u")
  throw new Error("@chaibuilder/sdk is only supported in the browser. Avoid using it in the server side.");
export {
  lt as $,
  Xo as A,
  ji as B,
  ru as C,
  Ho as D,
  qo as E,
  Ne as F,
  Se as G,
  be as H,
  Nu as I,
  Su as J,
  Ow as K,
  jn as L,
  _u as M,
  lu as N,
  Au as O,
  jo as P,
  Wi as Q,
  Gi as R,
  Xi as S,
  Yo as T,
  Nn as U,
  lN as V,
  bi as W,
  O1 as X,
  wt as Y,
  Ji as Z,
  Ko as _,
  oe as a,
  Si as a$,
  Ou as a0,
  Zi as a1,
  Qi as a2,
  ea as a3,
  $u as a4,
  Du as a5,
  zu as a6,
  Fu as a7,
  No as a8,
  av as a9,
  x1 as aA,
  oN as aB,
  jt as aC,
  Pu as aD,
  Qa as aE,
  ll as aF,
  i0 as aG,
  Dw as aH,
  Nv as aI,
  $v as aJ,
  Kw as aK,
  m1 as aL,
  w1 as aM,
  k1 as aN,
  Pw as aO,
  Gw as aP,
  H1 as aQ,
  j0 as aR,
  sN as aS,
  iN as aT,
  Th as aU,
  $o as aV,
  Pr as aW,
  Tr as aX,
  mt as aY,
  Ih as aZ,
  ze as a_,
  kw as aa,
  vw as ab,
  wu as ac,
  p0 as ad,
  Ms as ae,
  Wo as af,
  qx as ag,
  G as ah,
  kc as ai,
  nN as aj,
  _w as ak,
  rN as al,
  cv as am,
  Be as an,
  Ug as ao,
  _r as ap,
  no as aq,
  Ar as ar,
  ue as as,
  Yg as at,
  Xl as au,
  ql as av,
  g1 as aw,
  Xu as ax,
  qu as ay,
  Zu as az,
  _t as b,
  He as b0,
  Ut as b1,
  mi as b2,
  em as b3,
  Sr as b4,
  eN as b5,
  Vi as b6,
  Nw as b7,
  ka as b8,
  dc as c,
  Je as d,
  Or as e,
  Vo as f,
  Mr as g,
  Yn as h,
  ou as i,
  su as j,
  iu as k,
  au as l,
  Ds as m,
  Ei as n,
  m0 as o,
  bn as p,
  h0 as q,
  ae as r,
  aN as s,
  Rh as t,
  tu as u,
  kn as v,
  Cn as w,
  Ft as x,
  Ee as y,
  Jo as z
};
