import { p as r, d as a, g as i } from "./chai-theme-helpers-BEf2rwE4.js";
const t = r(function({ addBase: n, theme: o }) {
  n({
    "h1,h2,h3,h4,h5,h6": {
      fontFamily: o("fontFamily.heading")
    },
    body: {
      fontFamily: o("fontFamily.body"),
      color: o("colors.foreground"),
      backgroundColor: o("colors.background")
    }
  });
}), l = (n = a) => ({
  container: {
    center: !0,
    padding: "1rem",
    screens: { "2xl": "1400px" }
  },
  ...i(n)
});
export {
  t as c,
  l as g
};
