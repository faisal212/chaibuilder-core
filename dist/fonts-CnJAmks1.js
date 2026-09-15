const e = [
  {
    family: "Arial",
    fallback: "Helvetica, sans-serif"
  },
  {
    family: "Times New Roman",
    fallback: "Georgia, serif"
  },
  {
    family: "Courier New",
    fallback: "Courier, monospace"
  }
], r = (s, a) => {
  e.unshift({
    family: s,
    ...a
  });
}, t = () => e, i = (s) => e.find((a) => a.family === s), n = () => e;
export {
  i as a,
  n as g,
  r,
  t as u
};
