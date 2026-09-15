import { c, T as l, P as m, a as u, D as v, Q as i } from "./AP7HFJJL-Dd1FYtpZ.js";
import { r as d, s as f, t as e } from "./index-2wK57tg2.js";
var h = (t) => {
  const [r, o] = c({
    prefix: "TanstackQueryDevtools"
  }), n = d(), s = f(() => {
    const a = t.theme || r.theme_preference || l;
    return a !== "system" ? a : n();
  });
  return e(i.Provider, {
    value: t,
    get children() {
      return e(m, {
        localStore: r,
        setLocalStore: o,
        get children() {
          return e(u.Provider, {
            value: s,
            get children() {
              return e(v, {
                localStore: r,
                setLocalStore: o
              });
            }
          });
        }
      });
    }
  });
}, C = h;
export {
  C as default
};
