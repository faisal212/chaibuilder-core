import { c as s, T as c, P as u, a as i, b as m, C as P, Q as d } from "./AP7HFJJL-BEa456qx.js";
import { r as h, s as v, t as e } from "./index-B7uaTTVA.js";
var C = (r) => {
  const [t, o] = s({
    prefix: "TanstackQueryDevtools"
  }), a = h(), l = v(() => {
    const n = r.theme || t.theme_preference || c;
    return n !== "system" ? n : a();
  });
  return e(d.Provider, {
    value: r,
    get children() {
      return e(u, {
        disabled: !0,
        localStore: t,
        setLocalStore: o,
        get children() {
          return e(i.Provider, {
            value: l,
            get children() {
              return e(m, {
                get children() {
                  return e(P, {
                    localStore: t,
                    setLocalStore: o,
                    get onClose() {
                      return r.onClose;
                    },
                    showPanelViewOnly: !0
                  });
                }
              });
            }
          });
        }
      });
    }
  });
}, E = C;
export {
  E as default
};
