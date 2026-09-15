import r from "tailwindcss/plugin";
import { d as i, g as a } from "./chai-theme-helpers-a3cYjSJr.js";
const l = r(function({ addBase: n, theme: o }) {
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
}), c = (n = i) => ({
  container: {
    center: !0,
    padding: "1rem",
    screens: { "2xl": "1400px" }
  },
  ...a(n)
});
export {
  l as c,
  c as g
};
