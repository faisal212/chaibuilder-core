import { clsx as r } from "clsx";
import "lodash-es";
import { nanoid as e } from "nanoid";
import { twMerge as n } from "tailwind-merge";
function p(o = 6) {
  return e(o);
}
const s = (o) => o >= 1536 ? "2XL" : o >= 1280 ? "XL" : o >= 1024 ? "LG" : o >= 768 ? "MD" : o >= 640 ? "SM" : "XS", f = (...o) => n(r(o));
export {
  s as a,
  f as c,
  p as g
};
