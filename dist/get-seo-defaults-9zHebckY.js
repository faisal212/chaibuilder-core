import { has as n, isObject as O, set as l } from "lodash-es";
const e = (o, f) => {
  const t = {
    seo: {
      keyword: "",
      title: "",
      description: "",
      noIndex: !1,
      noFollow: !1,
      canonicalUrl: "",
      ogTitle: "",
      ogDescription: "",
      jsonLD: "",
      metaOther: ""
    },
    jsonLD: {},
    metaOther: {}
  };
  o != null && o.defaultSeo && (n(o.defaultSeo, f) && O(o.defaultSeo[f]) ? t.seo = { ...t.seo, ...o.defaultSeo[f] } : t.seo = { ...t.seo, ...o.defaultSeo });
  let d = {};
  o != null && o.defaultJSONLD && (n(o.defaultJSONLD, f) && O(o.defaultJSONLD[f]) ? (d = o.defaultJSONLD[f], l(t, "seo.jsonLD", JSON.stringify(d))) : (d = o.defaultJSONLD, l(t, "seo.jsonLD", JSON.stringify(d))));
  let s = {};
  return o != null && o.defaultMetaTags && (n(o.defaultMetaTags, f) && O(o.defaultMetaTags[f]) ? (s = o.defaultMetaTags[f], l(t, "seo.metaOther", JSON.stringify(s))) : (s = o.defaultMetaTags, l(t, "seo.metaOther", JSON.stringify(s)))), { seo: t.seo, jsonLD: t.jsonLD, metaOther: s };
};
if (import.meta.vitest) {
  const { it: o, expect: f } = import.meta.vitest;
  o("should return default values", () => {
    const t = e(
      {
        defaultSeo: {
          keyword: "",
          title: "",
          description: "",
          noIndex: !1,
          noFollow: !1,
          canonicalUrl: "",
          ogTitle: "",
          ogDescription: "",
          jsonLD: ""
        },
        defaultJSONLD: {}
      },
      "en"
    );
    f(t).toEqual({
      seo: {
        keyword: "",
        title: "",
        description: "",
        noIndex: !1,
        noFollow: !1,
        canonicalUrl: "",
        ogTitle: "",
        ogDescription: "",
        jsonLD: "{}",
        metaOther: ""
      },
      jsonLD: {},
      metaOther: {}
    });
  });
}
export {
  e as g
};
