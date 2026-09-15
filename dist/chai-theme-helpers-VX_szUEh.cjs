"use strict";const n=require("lodash-es"),m=require("./fonts-D5fTqvSS.cjs"),f={fontFamily:{"font-heading":"Arial","font-body":"Arial"},borderRadius:"10px",colors:[{group:"Body",items:{background:["#FFFFFF","#121212"],foreground:["#121212","#FFFFFF"]}},{group:"Primary",items:{primary:["#2563EB","#3B82F6"],"primary-foreground":["#FFFFFF","#FFFFFF"]}},{group:"Secondary",items:{secondary:["#F3F4F6","#374151"],"secondary-foreground":["#1F2937","#F9FAFB"]}},{group:"Border, Input & Ring",items:{border:["#E5E7EB","#374151"],input:["#E5E7EB","#374151"],ring:["#2563EB","#3B82F6"]}},{group:"Card",items:{card:["#FFFFFF","#1F2937"],"card-foreground":["#121212","#FFFFFF"]}},{group:"Popover",items:{popover:["#FFFFFF","#1F2937"],"popover-foreground":["#121212","#FFFFFF"]}},{group:"Muted",items:{muted:["#F3F4F6","#374151"],"muted-foreground":["#6B7280","#9CA3AF"]}},{group:"Accent",items:{accent:["#F3F4F6","#374151"],"accent-foreground":["#1F2937","#FFFFFF"]}},{group:"Destructive",items:{destructive:["#DC2626","#EF4444"],"destructive-foreground":["#FFFFFF","#FFFFFF"]}}]},g={fontFamily:{heading:"Arial",body:"Arial"},borderRadius:"6px",colors:{background:["#FFFFFF","#09090B"],foreground:["#09090B","#FFFFFF"],primary:["#2563EB","#3B82F6"],"primary-foreground":["#FFFFFF","#FFFFFF"],secondary:["#F4F4F5","#27272A"],"secondary-foreground":["#09090B","#FFFFFF"],muted:["#F4F4F5","#27272A"],"muted-foreground":["#71717A","#A1A1AA"],accent:["#F4F4F5","#27272A"],"accent-foreground":["#09090B","#FFFFFF"],destructive:["#EF4444","#7F1D1D"],"destructive-foreground":["#FFFFFF","#FFFFFF"],border:["#E4E4E7","#27272A"],input:["#E4E4E7","#27272A"],ring:["#2563EB","#3B82F6"],card:["#FFFFFF","#09090B"],"card-foreground":["#09090B","#FFFFFF"],popover:["#FFFFFF","#09090B"],"popover-foreground":["#09090B","#FFFFFF"]}},h=e=>({fontFamily:e.fontFamily?n.keys(e.fontFamily).reduce((r,t)=>({...r,[t.replace("font-","")]:`var(--${t})`}),{}):{},borderRadius:e.borderRadius?{lg:"var(--radius)",md:"calc(var(--radius) - 2px)",sm:"calc(var(--radius) - 4px)"}:{},colors:e.colors?n.flatten(e.colors.map(r=>Object.entries(r.items))).reduce((r,[t])=>({...r,[t]:`hsl(var(--${t}))`}),{}):{}}),p=e=>{const o=n.keys(e.fontFamily||{}),r=n.flatten((e.colors||[]).map(F=>n.keys(F.items))),t=o.map(F=>`--chai-${F}: var(--${F});`),a=[...o.map(F=>`--font-${F.replace("font-","")}: var(--chai-${F});`),...e.borderRadius?["--radius-lg: var(--radius);","--radius-md: calc(var(--radius) - 2px);","--radius-sm: calc(var(--radius) - 4px);"]:[],...r.map(F=>`--color-${F}: hsl(var(--${F}));`)];return`:root {
    ${t.join(`
    `)}
  }
  @theme static {
    ${a.join(`
    `)}

    --animate-accordion-down: accordion-down 0.2s ease-out;
    --animate-accordion-up: accordion-up 0.2s ease-out;

    @keyframes accordion-down {
      from { height: 0; }
      to { height: var(--radix-accordion-content-height); }
    }

    @keyframes accordion-up {
      from { height: var(--radix-accordion-content-height); }
      to { height: 0; }
    }
  }
  @layer base {
    h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }
    body {
      font-family: var(--font-body);
      color: hsl(var(--foreground));
      background-color: hsl(var(--background));
    }
  }`};function l(e){const o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);let r=parseInt(o[1],16),t=parseInt(o[2],16),a=parseInt(o[3],16);r/=255,t/=255,a/=255;const F=Math.max(r,t,a),s=Math.min(r,t,a);let i=0,c=0;const u=(F+s)/2;if(F==s)i=c=0;else{const d=F-s;switch(c=u>.5?d/(2-F-s):d/(F+s),F){case r:i=(t-a)/d+(t<a?6:0);break;case t:i=(a-r)/d+2;break;case a:i=(r-t)/d+4;break}i/=6}return`${Math.round(i*360)} ${Math.round(c*100)}% ${Math.round(u*100)}%`}const y=e=>{const r=m.getAllRegisteredFonts().find(t=>t.family===e);return`"${e}", ${n.get(r,"fallback","")}`},$=({theme:e})=>{const o=e;return`:root {
    ${e.fontFamily?Object.entries(e.fontFamily).map(([r,t])=>`--font-${r}: ${y(t)};`).join(`
    `):""}
    ${o.borderRadius?`--radius: ${o.borderRadius};`:""}
    ${o.colors?Object.entries(o.colors).map(([r,t])=>`--${r}: ${l(t[0])};`).join(`
    `):""}
  }
  .dark {
    ${o.colors?Object.entries(o.colors).map(([r,t])=>`--${r}: ${l(t[1])};`).join(`
    `):""}
  }`},b=e=>!e||e.length===0?"":n.uniqBy(e,"family").map(o=>`<link rel="stylesheet" href="${o.url}" />`).join(`
`),v=e=>!e||e.length===0?[]:n.uniqBy(e,"family").map(o=>o.url),B=e=>!e||e.length===0?"":n.uniqBy(e,"family").map(o=>`@import url("${o.url}");`).join(`
`),A=e=>!e||e.length===0?"":n.uniqBy(e,"family").map(o=>o.src.map(r=>`@font-face {
        font-family: "${o.family}";
        src: url("${r.url}") format("${r.format}");
        font-display: swap;
        ${r.fontWeight?`font-weight: ${r.fontWeight};`:""}
        ${r.fontStyle?`font-style: ${r.fontStyle};`:""}
        ${r.fontStretch?`font-stretch: ${r.fontStretch};`:""}
      }`).join(`
`)).join(`
`);exports.defaultThemeOptions=f;exports.defaultThemeValues=g;exports.getChaiThemeCssTheme=p;exports.getChaiThemeCssVariables=$;exports.getChaiThemeOptions=h;exports.getThemeCustomFontFace=A;exports.getThemeFontsCSSImport=B;exports.getThemeFontsLinkMarkup=b;exports.getThemeFontsUrls=v;
