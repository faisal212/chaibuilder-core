"use strict";var Vi=Object.defineProperty;var Gi=(e,n,r)=>n in e?Vi(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var Ce=(e,n,r)=>Gi(e,typeof n!="symbol"?n+"":n,r);const t=require("./index-TL6HYjXS.cjs");var ji=e=>e!=null,Wi=e=>e.filter(ji);function Qi(e){return(...n)=>{for(const r of e)r&&r(...n)}}var k=e=>typeof e=="function"&&!e.length?e():e,$n=e=>Array.isArray(e)?e:e?[e]:[];function Yi(e,...n){return typeof e=="function"?e(...n):e}var Xi=t.onCleanup;function Zi(e,n,r,o){const i=e.length,a=n.length;let l=0;if(!a){for(;l<i;l++)r(e[l]);return}if(!i){for(;l<a;l++)o(n[l]);return}for(;l<a&&n[l]===e[l];l++);let c,s;n=n.slice(l),e=e.slice(l);for(c of n)e.includes(c)||o(c);for(s of e)n.includes(s)||r(s)}function Ji(e){const[n,r]=t.createSignal(),o=e!=null&&e.throw?(u,g)=>{throw r(u instanceof Error?u:new Error(g)),u}:(u,g)=>{r(u instanceof Error?u:new Error(g))},i=e!=null&&e.api?Array.isArray(e.api)?e.api:[e.api]:[globalThis.localStorage].filter(Boolean),a=e!=null&&e.prefix?`${e.prefix}.`:"",l=new Map,c=new Proxy({},{get(u,g){let h=l.get(g);h||(h=t.createSignal(void 0,{equals:!1}),l.set(g,h)),h[0]();const v=i.reduce((p,y)=>{if(p!==null||!y)return p;try{return y.getItem(`${a}${g}`)}catch(b){return o(b,`Error reading ${a}${g} from ${y.name}`),null}},null);return v!==null&&(e!=null&&e.deserializer)?e.deserializer(v,g,e.options):v}}),s=(u,g,h)=>{const v=e!=null&&e.serializer?e.serializer(g,u,h??e.options):g,p=`${a}${u}`;i.forEach(b=>{try{b.getItem(p)!==v&&b.setItem(p,v)}catch(w){o(w,`Error setting ${a}${u} to ${v} in ${b.name}`)}});const y=l.get(u);y&&y[1]()},d=u=>i.forEach(g=>{try{g.removeItem(`${a}${u}`)}catch(h){o(h,`Error removing ${a}${u} from ${g.name}`)}}),m=()=>i.forEach(u=>{try{u.clear()}catch(g){o(g,`Error clearing ${u.name}`)}}),f=()=>{const u={},g=(h,v)=>{if(!u.hasOwnProperty(h)){const p=v&&(e!=null&&e.deserializer)?e.deserializer(v,h,e.options):v;p&&(u[h]=p)}};return i.forEach(h=>{if(typeof h.getAll=="function"){let v;try{v=h.getAll()}catch(p){o(p,`Error getting all values from in ${h.name}`)}for(const p of v)g(p,v[p])}else{let v=0,p;try{for(;p=h.key(v++);)u.hasOwnProperty(p)||g(p,h.getItem(p))}catch(y){o(y,`Error getting all values from ${h.name}`)}}}),u};return(e==null?void 0:e.sync)!==!1&&t.onMount(()=>{const u=g=>{var v;let h=!1;i.forEach(p=>{try{p!==g.storageArea&&g.key&&g.newValue!==p.getItem(g.key)&&(g.newValue?p.setItem(g.key,g.newValue):p.removeItem(g.key),h=!0)}catch(y){o(y,`Error synching api ${p.name} from storage event (${g.key}=${g.newValue})`)}}),h&&g.key&&((v=l.get(g.key))==null||v[1]())};"addEventListener"in globalThis?(globalThis.addEventListener("storage",u),t.onCleanup(()=>globalThis.removeEventListener("storage",u))):(i.forEach(g=>{var h;return(h=g.addEventListener)==null?void 0:h.call(g,"storage",u)}),t.onCleanup(()=>i.forEach(g=>{var h;return(h=g.removeEventListener)==null?void 0:h.call(g,"storage",u)})))}),[c,s,{clear:m,error:n,remove:d,toJSON:f}]}var es=Ji,ts=e=>(typeof e.clear=="function"||(e.clear=()=>{let n;for(;n=e.key(0);)e.removeItem(n)}),e),yr=e=>{if(!e)return"";let n="";for(const r in e){if(!e.hasOwnProperty(r))continue;const o=e[r];n+=o instanceof Date?`; ${r}=${o.toUTCString()}`:typeof o=="boolean"?`; ${r}`:`; ${r}=${o}`}return n},Se=ts({_cookies:[globalThis.document,"cookie"],getItem:e=>{var n;return((n=Se._cookies[0][Se._cookies[1]].match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)"))==null?void 0:n.pop())??null},setItem:(e,n,r)=>{const o=Se.getItem(e);Se._cookies[0][Se._cookies[1]]=`${e}=${n}${yr(r)}`;const i=Object.assign(new Event("storage"),{key:e,oldValue:o,newValue:n,url:globalThis.document.URL,storageArea:Se});window.dispatchEvent(i)},removeItem:e=>{Se._cookies[0][Se._cookies[1]]=`${e}=deleted${yr({expires:new Date(0)})}`},key:e=>{let n=null,r=0;return Se._cookies[0][Se._cookies[1]].replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,(o,i)=>(!n&&i&&r++===e&&(n=i),"")),n},get length(){let e=0;return Se._cookies[0][Se._cookies[1]].replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g,n=>(e+=n?1:0,"")),e}}),ns=1024,ft=796,qn=700,rs="bottom-right",En="bottom",os="system",is=!1,en=500,ss=500,tn=500,as=Object.keys(t.sortFns)[0],br=1,ls=Object.keys(t.mutationSortFns)[0],go=t.createContext({client:void 0,onlineManager:void 0,queryFlavor:"",version:"",shadowDOMTarget:void 0});function O(){return t.useContext(go)}var wr=class extends Error{},ho=t.createContext(void 0),cs=e=>{const[n,r]=t.createSignal(null),o=()=>{const l=n();l!=null&&(l.close(),r(null))},i=(l,c)=>{if(n()!=null)return;const s=window.open("","TSQD-Devtools-Panel",`width=${l},height=${c},popup`);if(!s)throw new wr("Failed to open popup. Please allow popups for this site to view the devtools in picture-in-picture mode.");s.document.head.innerHTML="",s.document.body.innerHTML="",t.clearDelegatedEvents(s.document),s.document.title="TanStack Query Devtools",s.document.body.style.margin="0",s.addEventListener("pagehide",()=>{e.setLocalStore("pip_open","false"),r(null)}),[...(O().shadowDOMTarget||document).styleSheets].forEach(d=>{try{const m=[...d.cssRules].map(h=>h.cssText).join(""),f=document.createElement("style"),u=d.ownerNode;let g="";u&&"id"in u&&(g=u.id),g&&f.setAttribute("id",g),f.textContent=m,s.document.head.appendChild(f)}catch{const f=document.createElement("link");if(d.href==null)return;f.rel="stylesheet",f.type=d.type,f.media=d.media.toString(),f.href=d.href,s.document.head.appendChild(f)}}),t.delegateEvents(["focusin","focusout","pointermove","keydown","pointerdown","pointerup","click","mousedown","input"],s.document),e.setLocalStore("pip_open","true"),r(s)};t.createEffect(()=>{if((e.localStore.pip_open??"false")==="true"&&!e.disabled)try{i(Number(window.innerWidth),Number(e.localStore.height||ss))}catch(c){if(c instanceof wr){e.setLocalStore("pip_open","false"),e.setLocalStore("open","false");return}throw c}}),t.createEffect(()=>{const l=(O().shadowDOMTarget||document).querySelector("#_goober"),c=n();if(l&&c){const s=new MutationObserver(()=>{const d=(O().shadowDOMTarget||c.document).querySelector("#_goober");d&&(d.textContent=l.textContent)});s.observe(l,{childList:!0,subtree:!0,characterDataOldValue:!0}),t.onCleanup(()=>{s.disconnect()})}});const a=t.createMemo(()=>({pipWindow:n(),requestPipWindow:i,closePipWindow:o,disabled:e.disabled??!1}));return t.createComponent(ho.Provider,{value:a,get children(){return e.children}})},_n=()=>t.createMemo(()=>{const n=t.useContext(ho);if(!n)throw new Error("usePiPWindow must be used within a PiPProvider");return n()}),mo=t.createContext(()=>"dark");function le(){return t.useContext(mo)}var po={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},us=Object.keys(po).join("|"),ds=new RegExp(us,"g");function fs(e){return e.replace(ds,n=>po[n])}var pe={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};function xr(e,n,r){var o;if(r=r||{},r.threshold=(o=r.threshold)!=null?o:pe.MATCHES,!r.accessors){const l=Cr(e,n,r);return{rankedValue:e,rank:l,accessorIndex:-1,accessorThreshold:r.threshold,passed:l>=r.threshold}}const i=ps(e,r.accessors),a={rankedValue:e,rank:pe.NO_MATCH,accessorIndex:-1,accessorThreshold:r.threshold,passed:!1};for(let l=0;l<i.length;l++){const c=i[l];let s=Cr(c.itemValue,n,r);const{minRanking:d,maxRanking:m,threshold:f=r.threshold}=c.attributes;s<d&&s>=pe.MATCHES?s=d:s>m&&(s=m),s=Math.min(s,m),s>=f&&s>a.rank&&(a.rank=s,a.passed=!0,a.accessorIndex=l,a.accessorThreshold=f,a.rankedValue=c.itemValue)}return a}function Cr(e,n,r){return e=Sr(e,r),n=Sr(n,r),n.length>e.length?pe.NO_MATCH:e===n?pe.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase(),n=n.toLowerCase(),e===n?pe.EQUAL:e.startsWith(n)?pe.STARTS_WITH:e.includes(` ${n}`)?pe.WORD_STARTS_WITH:e.includes(n)?pe.CONTAINS:n.length===1?pe.NO_MATCH:gs(e).includes(n)?pe.ACRONYM:hs(e,n))}function gs(e){let n="";return e.split(" ").forEach(o=>{o.split("-").forEach(a=>{n+=a.substr(0,1)})}),n}function hs(e,n){let r=0,o=0;function i(s,d,m){for(let f=m,u=d.length;f<u;f++)if(d[f]===s)return r+=1,f+1;return-1}function a(s){const d=1/s,m=r/n.length;return pe.MATCHES+m*d}const l=i(n[0],e,0);if(l<0)return pe.NO_MATCH;o=l;for(let s=1,d=n.length;s<d;s++){const m=n[s];if(o=i(m,e,o),!(o>-1))return pe.NO_MATCH}const c=o-l;return a(c)}function Sr(e,n){let{keepDiacritics:r}=n;return e=`${e}`,r||(e=fs(e)),e}function ms(e,n){let r=n;typeof n=="object"&&(r=n.accessor);const o=r(e);return o==null?[]:Array.isArray(o)?o:[String(o)]}function ps(e,n){const r=[];for(let o=0,i=n.length;o<i;o++){const a=n[o],l=vs(a),c=ms(e,a);for(let s=0,d=c.length;s<d;s++)r.push({itemValue:c[s],attributes:l})}return r}var $r={maxRanking:1/0,minRanking:-1/0};function vs(e){return typeof e=="function"?$r:{...$r,...e}}var ys={data:""},bs=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||ys,ws=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,xs=/\/\*[^]*?\*\/|  +/g,Er=/\n+/g,dt=(e,n)=>{let r="",o="",i="";for(let a in e){let l=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+l+";":o+=a[1]=="f"?dt(l,a):a+"{"+dt(l,a[1]=="k"?"":n)+"}":typeof l=="object"?o+=dt(l,n?n.replace(/([^,])+/g,c=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,s=>/&/.test(s)?s.replace(/&/g,c):c?c+" "+s:s)):a):l!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=dt.p?dt.p(a,l):a+":"+l+";")}return r+(n&&i?n+"{"+i+"}":i)+o},je={},vo=e=>{if(typeof e=="object"){let n="";for(let r in e)n+=r+vo(e[r]);return n}return e},Cs=(e,n,r,o,i)=>{let a=vo(e),l=je[a]||(je[a]=(s=>{let d=0,m=11;for(;d<s.length;)m=101*m+s.charCodeAt(d++)>>>0;return"go"+m})(a));if(!je[l]){let s=a!==e?e:(d=>{let m,f,u=[{}];for(;m=ws.exec(d.replace(xs,""));)m[4]?u.shift():m[3]?(f=m[3].replace(Er," ").trim(),u.unshift(u[0][f]=u[0][f]||{})):u[0][m[1]]=m[2].replace(Er," ").trim();return u[0]})(e);je[l]=dt(i?{["@keyframes "+l]:s}:s,r?"":"."+l)}let c=r&&je.g?je.g:null;return r&&(je.g=je[l]),((s,d,m,f)=>{f?d.data=d.data.replace(f,s):d.data.indexOf(s)===-1&&(d.data=m?s+d.data:d.data+s)})(je[l],n,o,c),l},Ss=(e,n,r)=>e.reduce((o,i,a)=>{let l=n[a];if(l&&l.call){let c=l(r),s=c&&c.props&&c.props.className||/^go/.test(c)&&c;l=s?"."+s:c&&typeof c=="object"?c.props?"":dt(c,""):c===!1?"":c}return o+i+(l??"")},"");function N(e){let n=this||{},r=e.call?e(n.p):e;return Cs(r.unshift?r.raw?Ss(r,[].slice.call(arguments,1),n.p):r.reduce((o,i)=>Object.assign(o,i&&i.call?i(n.p):i),{}):r,bs(n.target),n.g,n.o,n.k)}N.bind({g:1});N.bind({k:1});function yo(e){var n,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(r=yo(e[n]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function D(){for(var e,n,r=0,o="",i=arguments.length;r<i;r++)(e=arguments[r])&&(n=yo(e))&&(o&&(o+=" "),o+=n);return o}function $s(e,n){const r=t.untrack(e),{onChange:o}=n;let i=new Set(n.appear?void 0:r);const a=new WeakSet,[l,c]=t.createSignal([],{equals:!1}),[s]=t.useTransition(),d=f=>{c(u=>(u.push.apply(u,f),u));for(const u of f)a.delete(u)},m=(f,u,g)=>f.splice(g,0,u);return t.createMemo(f=>{const u=l(),g=e();if(g[t.$TRACK],t.untrack(s))return s(),f;if(u.length){const h=f.filter(v=>!u.includes(v));return u.length=0,o({list:h,added:[],removed:[],unchanged:h,finishRemoved:d}),h}return t.untrack(()=>{const h=new Set(g),v=g.slice(),p=[],y=[],b=[];for(const x of g)(i.has(x)?b:p).push(x);let w=!p.length;for(let x=0;x<f.length;x++){const C=f[x];h.has(C)||(a.has(C)||(y.push(C),a.add(C)),m(v,C,x)),w&&C!==v[x]&&(w=!1)}return!y.length&&w?f:(o({list:v,added:p,removed:y,unchanged:b,finishRemoved:d}),i=h,v)})},n.appear?[]:r.slice())}function he(...e){return Qi(e)}var kr=e=>e instanceof Element;function kn(e,n){if(n(e))return e;if(typeof e=="function"&&!e.length)return kn(e(),n);if(Array.isArray(e)){const r=[];for(const o of e){const i=kn(o,n);i&&(Array.isArray(i)?r.push.apply(r,i):r.push(i))}return r.length?r:null}return null}function Es(e,n=kr,r=kr){const o=t.createMemo(e),i=t.createMemo(()=>kn(o(),n));return i.toArray=()=>{const a=i();return Array.isArray(a)?a:a?[a]:[]},i}function ks(e){return t.createMemo(()=>{const n=e.name||"s";return{enterActive:(e.enterActiveClass||n+"-enter-active").split(" "),enter:(e.enterClass||n+"-enter").split(" "),enterTo:(e.enterToClass||n+"-enter-to").split(" "),exitActive:(e.exitActiveClass||n+"-exit-active").split(" "),exit:(e.exitClass||n+"-exit").split(" "),exitTo:(e.exitToClass||n+"-exit-to").split(" "),move:(e.moveClass||n+"-move").split(" ")}})}function bo(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function As(e,n,r,o){const{onBeforeEnter:i,onEnter:a,onAfterEnter:l}=n;i==null||i(r),r.classList.add(...e.enter),r.classList.add(...e.enterActive),queueMicrotask(()=>{if(!r.parentNode)return o==null?void 0:o();a==null||a(r,()=>c())}),bo(()=>{r.classList.remove(...e.enter),r.classList.add(...e.enterTo),(!a||a.length<2)&&(r.addEventListener("transitionend",c),r.addEventListener("animationend",c))});function c(s){(!s||s.target===r)&&(r.removeEventListener("transitionend",c),r.removeEventListener("animationend",c),r.classList.remove(...e.enterActive),r.classList.remove(...e.enterTo),l==null||l(r))}}function Ms(e,n,r,o){const{onBeforeExit:i,onExit:a,onAfterExit:l}=n;if(!r.parentNode)return o==null?void 0:o();i==null||i(r),r.classList.add(...e.exit),r.classList.add(...e.exitActive),a==null||a(r,()=>c()),bo(()=>{r.classList.remove(...e.exit),r.classList.add(...e.exitTo),(!a||a.length<2)&&(r.addEventListener("transitionend",c),r.addEventListener("animationend",c))});function c(s){(!s||s.target===r)&&(o==null||o(),r.removeEventListener("transitionend",c),r.removeEventListener("animationend",c),r.classList.remove(...e.exitActive),r.classList.remove(...e.exitTo),l==null||l(r))}}var Ar=e=>{const n=ks(e);return $s(Es(()=>e.children).toArray,{appear:e.appear,onChange({added:r,removed:o,finishRemoved:i,list:a}){const l=n();for(const s of r)As(l,e,s);const c=[];for(const s of a)s.isConnected&&(s instanceof HTMLElement||s instanceof SVGElement)&&c.push({el:s,rect:s.getBoundingClientRect()});queueMicrotask(()=>{const s=[];for(const{el:d,rect:m}of c)if(d.isConnected){const f=d.getBoundingClientRect(),u=m.left-f.left,g=m.top-f.top;(u||g)&&(d.style.transform=`translate(${u}px, ${g}px)`,d.style.transitionDuration="0s",s.push(d))}document.body.offsetHeight;for(const d of s){let m=function(f){(f.target===d||/transform$/.test(f.propertyName))&&(d.removeEventListener("transitionend",m),d.classList.remove(...l.move))};d.classList.add(...l.move),d.style.transform=d.style.transitionDuration="",d.addEventListener("transitionend",m)}});for(const s of o)Ms(l,e,s,()=>i([s]))}})},bn=Symbol("fallback");function Mr(e){for(const n of e)n.dispose()}function Ps(e,n,r,o={}){const i=new Map;return t.onCleanup(()=>Mr(i.values())),()=>{const l=e()||[];return l[t.$TRACK],t.untrack(()=>{var m,f;if(!l.length)return Mr(i.values()),i.clear(),o.fallback?[t.createRoot(g=>(i.set(bn,{dispose:g}),o.fallback()))]:[];const c=new Array(l.length),s=i.get(bn);if(!i.size||s){s==null||s.dispose(),i.delete(bn);for(let u=0;u<l.length;u++){const g=l[u],h=n(g,u);a(c,g,u,h)}return c}const d=new Set(i.keys());for(let u=0;u<l.length;u++){const g=l[u],h=n(g,u);d.delete(h);const v=i.get(h);v?(c[u]=v.mapped,(m=v.setIndex)==null||m.call(v,u),v.setItem(()=>g)):a(c,g,u,h)}for(const u of d)(f=i.get(u))==null||f.dispose(),i.delete(u);return c})};function a(l,c,s,d){t.createRoot(m=>{const[f,u]=t.createSignal(c),g={setItem:u,dispose:m};if(r.length>1){const[h,v]=t.createSignal(s);g.setIndex=v,g.mapped=r(f,h)}else g.mapped=r(f);i.set(d,g),l[s]=g.mapped})}}function nn(e){const{by:n}=e;return t.createMemo(Ps(()=>e.each,typeof n=="function"?n:r=>r[n],e.children,"fallback"in e?{fallback:()=>e.fallback}:void 0))}function Ds(e,n,r,o){return e.addEventListener(n,r,o),Xi(e.removeEventListener.bind(e,n,r,o))}function Ts(e,n,r,o){const i=()=>{$n(k(e)).forEach(a=>{a&&$n(k(n)).forEach(l=>Ds(a,l,r,o))})};typeof e=="function"?t.createEffect(i):t.createRenderEffect(i)}function Fs(e,n){const r=new ResizeObserver(e);return t.onCleanup(r.disconnect.bind(r)),{observe:o=>r.observe(o,n),unobserve:r.unobserve.bind(r)}}function wo(e,n,r){const o=new WeakMap,{observe:i,unobserve:a}=Fs(l=>{for(const c of l){const{contentRect:s,target:d}=c,m=Math.round(s.width),f=Math.round(s.height),u=o.get(d);(!u||u.width!==m||u.height!==f)&&(n(s,d,c),o.set(d,{width:m,height:f}))}},r);t.createEffect(l=>{const c=Wi($n(k(e)));return Zi(c,l,i,a),c},[])}var Is=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function Pr(e){const n={};let r;for(;r=Is.exec(e);)n[r[1]]=r[2];return n}function un(e,n){if(typeof e=="string"){if(typeof n=="string")return`${e};${n}`;e=Pr(e)}else typeof n=="string"&&(n=Pr(n));return{...e,...n}}function Ls(e,n,r=-1){return r in e?[...e.slice(0,r),n,...e.slice(r)]:[...e,n]}function An(e,n){const r=[...e],o=r.indexOf(n);return o!==-1&&r.splice(o,1),r}function Os(e){return typeof e=="number"}function bt(e){return Object.prototype.toString.call(e)==="[object String]"}function qs(e){return typeof e=="function"}function Bt(e){return n=>`${e()}-${n}`}function ke(e,n){return e?e===n||e.contains(n):!1}function qt(e,n=!1){const{activeElement:r}=Re(e);if(!(r!=null&&r.nodeName))return null;if(xo(r)&&r.contentDocument)return qt(r.contentDocument.body,n);if(n){const o=r.getAttribute("aria-activedescendant");if(o){const i=Re(r).getElementById(o);if(i)return i}}return r}function _s(e){return Re(e).defaultView||window}function Re(e){return e?e.ownerDocument||e:document}function xo(e){return e.tagName==="IFRAME"}var Rn=(e=>(e.Escape="Escape",e.Enter="Enter",e.Tab="Tab",e.Space=" ",e.ArrowDown="ArrowDown",e.ArrowLeft="ArrowLeft",e.ArrowRight="ArrowRight",e.ArrowUp="ArrowUp",e.End="End",e.Home="Home",e.PageDown="PageDown",e.PageUp="PageUp",e))(Rn||{});function Nn(e){var n;return typeof window<"u"&&window.navigator!=null?e.test(((n=window.navigator.userAgentData)==null?void 0:n.platform)||window.navigator.platform):!1}function dn(){return Nn(/^Mac/i)}function Rs(){return Nn(/^iPhone/i)}function Ns(){return Nn(/^iPad/i)||dn()&&navigator.maxTouchPoints>1}function zs(){return Rs()||Ns()}function Ks(){return dn()||zs()}function J(e,n){return n&&(qs(n)?n(e):n[0](n[1],e)),e==null?void 0:e.defaultPrevented}function ae(e){return n=>{for(const r of e)J(n,r)}}function Bs(e){return dn()?e.metaKey&&!e.ctrlKey:e.ctrlKey&&!e.metaKey}function fe(e){if(e)if(Us())e.focus({preventScroll:!0});else{const n=Hs(e);e.focus(),Vs(n)}}var Xt=null;function Us(){if(Xt==null){Xt=!1;try{document.createElement("div").focus({get preventScroll(){return Xt=!0,!0}})}catch{}}return Xt}function Hs(e){let n=e.parentNode;const r=[],o=document.scrollingElement||document.documentElement;for(;n instanceof HTMLElement&&n!==o;)(n.offsetHeight<n.scrollHeight||n.offsetWidth<n.scrollWidth)&&r.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),n=n.parentNode;return o instanceof HTMLElement&&r.push({element:o,scrollTop:o.scrollTop,scrollLeft:o.scrollLeft}),r}function Vs(e){for(const{element:n,scrollTop:r,scrollLeft:o}of e)n.scrollTop=r,n.scrollLeft=o}var Co=["input:not([type='hidden']):not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","[tabindex]","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]:not([contenteditable='false'])"],Gs=[...Co,'[tabindex]:not([tabindex="-1"]):not([disabled])'],zn=Co.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])",js=Gs.join(':not([hidden]):not([tabindex="-1"]),');function So(e,n){const o=Array.from(e.querySelectorAll(zn)).filter(Dr);return n&&Dr(e)&&o.unshift(e),o.forEach((i,a)=>{if(xo(i)&&i.contentDocument){const l=i.contentDocument.body,c=So(l,!1);o.splice(a,1,...c)}}),o}function Dr(e){return $o(e)&&!Ws(e)}function $o(e){return e.matches(zn)&&Kn(e)}function Ws(e){return parseInt(e.getAttribute("tabindex")||"0",10)<0}function Kn(e,n){return e.nodeName!=="#comment"&&Qs(e)&&Ys(e,n)&&(!e.parentElement||Kn(e.parentElement,e))}function Qs(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;const{display:n,visibility:r}=e.style;let o=n!=="none"&&r!=="hidden"&&r!=="collapse";if(o){if(!e.ownerDocument.defaultView)return o;const{getComputedStyle:i}=e.ownerDocument.defaultView,{display:a,visibility:l}=i(e);o=a!=="none"&&l!=="hidden"&&l!=="collapse"}return o}function Ys(e,n){return!e.hasAttribute("hidden")&&(e.nodeName==="DETAILS"&&n&&n.nodeName!=="SUMMARY"?e.hasAttribute("open"):!0)}function Xs(e,n,r){const o=n!=null&&n.tabbable?js:zn,i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(a){var l;return(l=n==null?void 0:n.from)!=null&&l.contains(a)?NodeFilter.FILTER_REJECT:a.matches(o)&&Kn(a)&&(!(n!=null&&n.accept)||n.accept(a))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return n!=null&&n.from&&(i.currentNode=n.from),i}function Tr(e){for(;e&&!Zs(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function Zs(e){const n=window.getComputedStyle(e);return/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY)}function Js(){}function ea(e,n){const[r,o]=e;let i=!1;const a=n.length;for(let l=a,c=0,s=l-1;c<l;s=c++){const[d,m]=n[c],[f,u]=n[s],[,g]=n[s===0?l-1:s-1]||[0,0],h=(m-u)*(r-d)-(d-f)*(o-m);if(u<m){if(o>=u&&o<m){if(h===0)return!0;h>0&&(o===u?o>g&&(i=!i):i=!i)}}else if(m<u){if(o>m&&o<=u){if(h===0)return!0;h<0&&(o===u?o<g&&(i=!i):i=!i)}}else if(o==m&&(r>=f&&r<=d||r>=d&&r<=f))return!0}return i}function z(e,n){return t.mergeProps(e,n)}var Ft=new Map,Fr=new Set;function Ir(){if(typeof window>"u")return;const e=r=>{if(!r.target)return;let o=Ft.get(r.target);o||(o=new Set,Ft.set(r.target,o),r.target.addEventListener("transitioncancel",n)),o.add(r.propertyName)},n=r=>{if(!r.target)return;const o=Ft.get(r.target);if(o&&(o.delete(r.propertyName),o.size===0&&(r.target.removeEventListener("transitioncancel",n),Ft.delete(r.target)),Ft.size===0)){for(const i of Fr)i();Fr.clear()}};document.body.addEventListener("transitionrun",e),document.body.addEventListener("transitionend",n)}typeof document<"u"&&(document.readyState!=="loading"?Ir():document.addEventListener("DOMContentLoaded",Ir));function Mn(e,n){const r=Lr(e,n,"left"),o=Lr(e,n,"top"),i=n.offsetWidth,a=n.offsetHeight;let l=e.scrollLeft,c=e.scrollTop;const s=l+e.offsetWidth,d=c+e.offsetHeight;r<=l?l=r:r+i>s&&(l+=r+i-s),o<=c?c=o:o+a>d&&(c+=o+a-d),e.scrollLeft=l,e.scrollTop=c}function Lr(e,n,r){const o=r==="left"?"offsetLeft":"offsetTop";let i=0;for(;n.offsetParent&&(i+=n[o],n.offsetParent!==e);){if(n.offsetParent.contains(e)){i-=e[o];break}n=n.offsetParent}return i}function ta(e,n){var r,o;if(document.contains(e)){const i=document.scrollingElement||document.documentElement;if(window.getComputedStyle(i).overflow==="hidden"){let l=Tr(e);for(;e&&l&&e!==i&&l!==i;)Mn(l,e),e=l,l=Tr(e)}else{const{left:l,top:c}=e.getBoundingClientRect();(r=e==null?void 0:e.scrollIntoView)==null||r.call(e,{block:"nearest"});const{left:s,top:d}=e.getBoundingClientRect();(Math.abs(l-s)>1||Math.abs(c-d)>1)&&((o=e.scrollIntoView)==null||o.call(e,{block:"nearest"}))}}}var Eo={border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:"0",position:"absolute",width:"1px","white-space":"nowrap"};function Ae(e){return n=>(e(n),()=>e(void 0))}function fn(e,n){const[r,o]=t.createSignal(Or(n==null?void 0:n()));return t.createEffect(()=>{var i;o(((i=e())==null?void 0:i.tagName.toLowerCase())||Or(n==null?void 0:n()))}),r}function Or(e){return bt(e)?e:void 0}function ee(e){const[n,r]=t.splitProps(e,["as"]);if(!n.as)throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");return t.createComponent(t.Dynamic,t.mergeProps(r,{get component(){return n.as}}))}var na=["id","name","validationState","required","disabled","readOnly"];function ra(e){const n=`form-control-${t.createUniqueId()}`,r=z({id:n},e),[o,i]=t.createSignal(),[a,l]=t.createSignal(),[c,s]=t.createSignal(),[d,m]=t.createSignal(),f=(v,p,y)=>{const b=y!=null||o()!=null;return[y,o(),b&&p!=null?v:void 0].filter(Boolean).join(" ")||void 0},u=v=>[c(),d(),v].filter(Boolean).join(" ")||void 0,g=t.createMemo(()=>({"data-valid":k(r.validationState)==="valid"?"":void 0,"data-invalid":k(r.validationState)==="invalid"?"":void 0,"data-required":k(r.required)?"":void 0,"data-disabled":k(r.disabled)?"":void 0,"data-readonly":k(r.readOnly)?"":void 0}));return{formControlContext:{name:()=>k(r.name)??k(r.id),dataset:g,validationState:()=>k(r.validationState),isRequired:()=>k(r.required),isDisabled:()=>k(r.disabled),isReadOnly:()=>k(r.readOnly),labelId:o,fieldId:a,descriptionId:c,errorMessageId:d,getAriaLabelledBy:f,getAriaDescribedBy:u,generateId:Bt(()=>k(r.id)),registerLabel:Ae(i),registerField:Ae(l),registerDescription:Ae(s),registerErrorMessage:Ae(m)}}}var ko=t.createContext();function Ut(){const e=t.useContext(ko);if(e===void 0)throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");return e}function Ao(e){const n=Ut(),r=z({id:n.generateId("description")},e);return t.createEffect(()=>t.onCleanup(n.registerDescription(r.id))),t.createComponent(ee,t.mergeProps({as:"div"},()=>n.dataset(),r))}function Mo(e){const n=Ut(),r=z({id:n.generateId("error-message")},e),[o,i]=t.splitProps(r,["forceMount"]),a=()=>n.validationState()==="invalid";return t.createEffect(()=>{a()&&t.onCleanup(n.registerErrorMessage(i.id))}),t.createComponent(t.Show,{get when(){return o.forceMount||a()},get children(){return t.createComponent(ee,t.mergeProps({as:"div"},()=>n.dataset(),i))}})}function oa(e){let n;const r=Ut(),o=z({id:r.generateId("label")},e),[i,a]=t.splitProps(o,["ref"]),l=fn(()=>n,()=>"label");return t.createEffect(()=>t.onCleanup(r.registerLabel(a.id))),t.createComponent(ee,t.mergeProps({as:"label",ref(c){const s=he(d=>n=d,i.ref);typeof s=="function"&&s(c)},get for(){return t.memo(()=>l()==="label")()?r.fieldId():void 0}},()=>r.dataset(),a))}function ia(e,n){t.createEffect(t.on(e,r=>{if(r==null)return;const o=sa(r);o!=null&&(o.addEventListener("reset",n,{passive:!0}),t.onCleanup(()=>{o.removeEventListener("reset",n)}))}))}function sa(e){return aa(e)?e.form:e.closest("form")}function aa(e){return e.matches("textarea, input, select, button")}function Ht(e){var l;const[n,r]=t.createSignal((l=e.defaultValue)==null?void 0:l.call(e)),o=t.createMemo(()=>{var c;return((c=e.value)==null?void 0:c.call(e))!==void 0}),i=t.createMemo(()=>{var c;return o()?(c=e.value)==null?void 0:c.call(e):n()});return[i,c=>{t.untrack(()=>{var d;const s=Yi(c,i());return Object.is(s,i())||(o()||r(s),(d=e.onChange)==null||d.call(e,s)),s})}]}function Po(e){const[n,r]=Ht(e);return[()=>n()??!1,r]}function la(e){const[n,r]=Ht(e);return[()=>n()??[],r]}function ca(e={}){const[n,r]=Po({value:()=>k(e.isSelected),defaultValue:()=>!!k(e.defaultIsSelected),onChange:a=>{var l;return(l=e.onSelectedChange)==null?void 0:l.call(e,a)}});return{isSelected:n,setIsSelected:a=>{!k(e.isReadOnly)&&!k(e.isDisabled)&&r(a)},toggle:()=>{!k(e.isReadOnly)&&!k(e.isDisabled)&&r(!n())}}}var ua=Object.defineProperty,gn=(e,n)=>{for(var r in n)ua(e,r,{get:n[r],enumerable:!0})},Do=t.createContext();function To(){return t.useContext(Do)}function da(){const e=To();if(e===void 0)throw new Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");return e}function Fo(e,n){return!!(n.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}function fa(e,n){var i;const r=n.ref();if(!r)return-1;let o=e.length;if(!o)return-1;for(;o--;){const a=(i=e[o])==null?void 0:i.ref();if(a&&Fo(a,r))return o+1}return 0}function ga(e){const n=e.map((o,i)=>[i,o]);let r=!1;return n.sort(([o,i],[a,l])=>{const c=i.ref(),s=l.ref();return c===s||!c||!s?0:Fo(c,s)?(o>a&&(r=!0),-1):(o<a&&(r=!0),1)}),r?n.map(([o,i])=>i):e}function Io(e,n){const r=ga(e);e!==r&&n(r)}function ha(e){var i,a;const n=e[0],r=(i=e[e.length-1])==null?void 0:i.ref();let o=(a=n==null?void 0:n.ref())==null?void 0:a.parentElement;for(;o;){if(r&&o.contains(r))return o;o=o.parentElement}return Re(o).body}function ma(e,n){t.createEffect(()=>{const r=setTimeout(()=>{Io(e(),n)});t.onCleanup(()=>clearTimeout(r))})}function pa(e,n){if(typeof IntersectionObserver!="function"){ma(e,n);return}let r=[];t.createEffect(()=>{const o=()=>{const l=!!r.length;r=e(),l&&Io(e(),n)},i=ha(e()),a=new IntersectionObserver(o,{root:i});for(const l of e()){const c=l.ref();c&&a.observe(c)}t.onCleanup(()=>a.disconnect())})}function va(e={}){const[n,r]=la({value:()=>k(e.items),onChange:a=>{var l;return(l=e.onItemsChange)==null?void 0:l.call(e,a)}});pa(n,r);const o=a=>(r(l=>{const c=fa(l,a);return Ls(l,a,c)}),()=>{r(l=>{const c=l.filter(s=>s.ref()!==a.ref());return l.length===c.length?l:c})});return{DomCollectionProvider:a=>t.createComponent(Do.Provider,{value:{registerItem:o},get children(){return a.children}})}}function ya(e){const n=da(),r=z({shouldRegisterItem:!0},e);t.createEffect(()=>{if(!r.shouldRegisterItem)return;const o=n.registerItem(r.getItem());t.onCleanup(o)})}function Lo(e){let n=e.startIndex??0;const r=e.startLevel??0,o=[],i=s=>{if(s==null)return"";const d=e.getKey??"key",m=bt(d)?s[d]:d(s);return m!=null?String(m):""},a=s=>{if(s==null)return"";const d=e.getTextValue??"textValue",m=bt(d)?s[d]:d(s);return m!=null?String(m):""},l=s=>{if(s==null)return!1;const d=e.getDisabled??"disabled";return(bt(d)?s[d]:d(s))??!1},c=s=>{var d;if(s!=null)return bt(e.getSectionChildren)?s[e.getSectionChildren]:(d=e.getSectionChildren)==null?void 0:d.call(e,s)};for(const s of e.dataSource){if(bt(s)||Os(s)){o.push({type:"item",rawValue:s,key:String(s),textValue:String(s),disabled:l(s),level:r,index:n}),n++;continue}if(c(s)!=null){o.push({type:"section",rawValue:s,key:"",textValue:"",disabled:!1,level:r,index:n}),n++;const d=c(s)??[];if(d.length>0){const m=Lo({dataSource:d,getKey:e.getKey,getTextValue:e.getTextValue,getDisabled:e.getDisabled,getSectionChildren:e.getSectionChildren,startIndex:n,startLevel:r+1});o.push(...m),n+=m.length}}else o.push({type:"item",rawValue:s,key:i(s),textValue:a(s),disabled:l(s),level:r,index:n}),n++}return o}function ba(e,n=[]){return t.createMemo(()=>{const r=Lo({dataSource:k(e.dataSource),getKey:k(e.getKey),getTextValue:k(e.getTextValue),getDisabled:k(e.getDisabled),getSectionChildren:k(e.getSectionChildren)});for(let o=0;o<n.length;o++)n[o]();return e.factory(r)})}var wa=new Set(["Avst","Arab","Armi","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),xa=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function Ca(e){if(Intl.Locale){const r=new Intl.Locale(e).maximize().script??"";return wa.has(r)}const n=e.split("-")[0];return xa.has(n)}function Sa(e){return Ca(e)?"rtl":"ltr"}function Oo(){let e=typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";return{locale:e,direction:Sa(e)}}var Pn=Oo(),_t=new Set;function qr(){Pn=Oo();for(const e of _t)e(Pn)}function $a(){const[e,n]=t.createSignal(Pn),r=t.createMemo(()=>e());return t.onMount(()=>{_t.size===0&&window.addEventListener("languagechange",qr),_t.add(n),t.onCleanup(()=>{_t.delete(n),_t.size===0&&window.removeEventListener("languagechange",qr)})}),{locale:()=>r().locale,direction:()=>r().direction}}var Ea=t.createContext();function at(){const e=$a();return t.useContext(Ea)||e}var wn=new Map;function ka(e){const{locale:n}=at(),r=t.createMemo(()=>n()+(e?Object.entries(e).sort((o,i)=>o[0]<i[0]?-1:1).join():""));return t.createMemo(()=>{const o=r();let i;return wn.has(o)&&(i=wn.get(o)),i||(i=new Intl.Collator(n(),e),wn.set(o,i)),i})}var We=class qo extends Set{constructor(r,o,i){super(r);Ce(this,"anchorKey");Ce(this,"currentKey");r instanceof qo?(this.anchorKey=o||r.anchorKey,this.currentKey=i||r.currentKey):(this.anchorKey=o,this.currentKey=i)}};function Aa(e){const[n,r]=Ht(e);return[()=>n()??new We,r]}function _o(e){return Ks()?e.altKey:e.ctrlKey}function wt(e){return dn()?e.metaKey:e.ctrlKey}function _r(e){return new We(e)}function Ma(e,n){if(e.size!==n.size)return!1;for(const r of e)if(!n.has(r))return!1;return!0}function Pa(e){const n=z({selectionMode:"none",selectionBehavior:"toggle"},e),[r,o]=t.createSignal(!1),[i,a]=t.createSignal(),l=t.createMemo(()=>{const v=k(n.selectedKeys);return v!=null?_r(v):v}),c=t.createMemo(()=>{const v=k(n.defaultSelectedKeys);return v!=null?_r(v):new We}),[s,d]=Aa({value:l,defaultValue:c,onChange:v=>{var p;return(p=n.onSelectionChange)==null?void 0:p.call(n,v)}}),[m,f]=t.createSignal(k(n.selectionBehavior)),u=()=>k(n.selectionMode),g=()=>k(n.disallowEmptySelection)??!1,h=v=>{(k(n.allowDuplicateSelectionEvents)||!Ma(v,s()))&&d(v)};return t.createEffect(()=>{const v=s();k(n.selectionBehavior)==="replace"&&m()==="toggle"&&typeof v=="object"&&v.size===0&&f("replace")}),t.createEffect(()=>{f(k(n.selectionBehavior)??"toggle")}),{selectionMode:u,disallowEmptySelection:g,selectionBehavior:m,setSelectionBehavior:f,isFocused:r,setFocused:o,focusedKey:i,setFocusedKey:a,selectedKeys:s,setSelectedKeys:h}}function Da(e){const[n,r]=t.createSignal(""),[o,i]=t.createSignal(-1);return{typeSelectHandlers:{onKeyDown:l=>{var u;if(k(e.isDisabled))return;const c=k(e.keyboardDelegate),s=k(e.selectionManager);if(!c.getKeyForSearch)return;const d=Ta(l.key);if(!d||l.ctrlKey||l.metaKey)return;d===" "&&n().trim().length>0&&(l.preventDefault(),l.stopPropagation());let m=r(g=>g+d),f=c.getKeyForSearch(m,s.focusedKey())??c.getKeyForSearch(m);f==null&&Fa(m)&&(m=m[0],f=c.getKeyForSearch(m,s.focusedKey())??c.getKeyForSearch(m)),f!=null&&(s.setFocusedKey(f),(u=e.onTypeSelect)==null||u.call(e,f)),clearTimeout(o()),i(window.setTimeout(()=>r(""),500))}}}}function Ta(e){return e.length===1||!/^[A-Z]/i.test(e)?e:""}function Fa(e){return e.split("").every(n=>n===e[0])}function Ia(e,n,r){const o={selectOnFocus:()=>k(e.selectionManager).selectionBehavior()==="replace"},i=t.mergeProps(o,e),a=()=>n(),{direction:l}=at();let c={top:0,left:0};Ts(()=>k(i.isVirtualized)?void 0:a(),"scroll",()=>{const p=a();p&&(c={top:p.scrollTop,left:p.scrollLeft})});const{typeSelectHandlers:s}=Da({isDisabled:()=>k(i.disallowTypeAhead),keyboardDelegate:()=>k(i.keyboardDelegate),selectionManager:()=>k(i.selectionManager)}),d=()=>k(i.orientation)??"vertical",m=p=>{var F,S,M,I,q,V,K,Q;J(p,s.onKeyDown),p.altKey&&p.key==="Tab"&&p.preventDefault();const y=n();if(!(y!=null&&y.contains(p.target)))return;const b=k(i.selectionManager),w=k(i.selectOnFocus),x=L=>{L!=null&&(b.setFocusedKey(L),p.shiftKey&&b.selectionMode()==="multiple"?b.extendSelection(L):w&&!_o(p)&&b.replaceSelection(L))},C=k(i.keyboardDelegate),T=k(i.shouldFocusWrap),E=b.focusedKey();switch(p.key){case(d()==="vertical"?"ArrowDown":"ArrowRight"):{if(C.getKeyBelow){p.preventDefault();let L;E!=null?L=C.getKeyBelow(E):L=(F=C.getFirstKey)==null?void 0:F.call(C),L==null&&T&&(L=(S=C.getFirstKey)==null?void 0:S.call(C,E)),x(L)}break}case(d()==="vertical"?"ArrowUp":"ArrowLeft"):{if(C.getKeyAbove){p.preventDefault();let L;E!=null?L=C.getKeyAbove(E):L=(M=C.getLastKey)==null?void 0:M.call(C),L==null&&T&&(L=(I=C.getLastKey)==null?void 0:I.call(C,E)),x(L)}break}case(d()==="vertical"?"ArrowLeft":"ArrowUp"):{if(C.getKeyLeftOf){p.preventDefault();const L=l()==="rtl";let R;E!=null?R=C.getKeyLeftOf(E):R=L?(q=C.getFirstKey)==null?void 0:q.call(C):(V=C.getLastKey)==null?void 0:V.call(C),x(R)}break}case(d()==="vertical"?"ArrowRight":"ArrowDown"):{if(C.getKeyRightOf){p.preventDefault();const L=l()==="rtl";let R;E!=null?R=C.getKeyRightOf(E):R=L?(K=C.getLastKey)==null?void 0:K.call(C):(Q=C.getFirstKey)==null?void 0:Q.call(C),x(R)}break}case"Home":if(C.getFirstKey){p.preventDefault();const L=C.getFirstKey(E,wt(p));L!=null&&(b.setFocusedKey(L),wt(p)&&p.shiftKey&&b.selectionMode()==="multiple"?b.extendSelection(L):w&&b.replaceSelection(L))}break;case"End":if(C.getLastKey){p.preventDefault();const L=C.getLastKey(E,wt(p));L!=null&&(b.setFocusedKey(L),wt(p)&&p.shiftKey&&b.selectionMode()==="multiple"?b.extendSelection(L):w&&b.replaceSelection(L))}break;case"PageDown":if(C.getKeyPageBelow&&E!=null){p.preventDefault();const L=C.getKeyPageBelow(E);x(L)}break;case"PageUp":if(C.getKeyPageAbove&&E!=null){p.preventDefault();const L=C.getKeyPageAbove(E);x(L)}break;case"a":wt(p)&&b.selectionMode()==="multiple"&&k(i.disallowSelectAll)!==!0&&(p.preventDefault(),b.selectAll());break;case"Escape":p.defaultPrevented||(p.preventDefault(),k(i.disallowEmptySelection)||b.clearSelection());break;case"Tab":if(!k(i.allowsTabNavigation)){if(p.shiftKey)y.focus();else{const L=Xs(y,{tabbable:!0});let R,B;do B=L.lastChild(),B&&(R=B);while(B);R&&!R.contains(document.activeElement)&&fe(R)}break}}},f=p=>{var x,C;const y=k(i.selectionManager),b=k(i.keyboardDelegate),w=k(i.selectOnFocus);if(y.isFocused()){p.currentTarget.contains(p.target)||y.setFocused(!1);return}if(p.currentTarget.contains(p.target)){if(y.setFocused(!0),y.focusedKey()==null){const T=F=>{F!=null&&(y.setFocusedKey(F),w&&y.replaceSelection(F))},E=p.relatedTarget;E&&p.currentTarget.compareDocumentPosition(E)&Node.DOCUMENT_POSITION_FOLLOWING?T(y.lastSelectedKey()??((x=b.getLastKey)==null?void 0:x.call(b))):T(y.firstSelectedKey()??((C=b.getFirstKey)==null?void 0:C.call(b)))}else if(!k(i.isVirtualized)){const T=a();if(T){T.scrollTop=c.top,T.scrollLeft=c.left;const E=T.querySelector(`[data-key="${y.focusedKey()}"]`);E&&(fe(E),Mn(T,E))}}}},u=p=>{const y=k(i.selectionManager);p.currentTarget.contains(p.relatedTarget)||y.setFocused(!1)},g=p=>{a()===p.target&&p.preventDefault()},h=()=>{var T,E;const p=k(i.autoFocus);if(!p)return;const y=k(i.selectionManager),b=k(i.keyboardDelegate);let w;p==="first"&&(w=(T=b.getFirstKey)==null?void 0:T.call(b)),p==="last"&&(w=(E=b.getLastKey)==null?void 0:E.call(b));const x=y.selectedKeys();x.size&&(w=x.values().next().value),y.setFocused(!0),y.setFocusedKey(w);const C=n();C&&w==null&&!k(i.shouldUseVirtualFocus)&&fe(C)};return t.onMount(()=>{i.deferAutoFocus?setTimeout(h,0):h()}),t.createEffect(t.on([a,()=>k(i.isVirtualized),()=>k(i.selectionManager).focusedKey()],p=>{var x;const[y,b,w]=p;if(b)w&&((x=i.scrollToKey)==null||x.call(i,w));else if(w&&y){const C=y.querySelector(`[data-key="${w}"]`);C&&Mn(y,C)}})),{tabIndex:t.createMemo(()=>{if(!k(i.shouldUseVirtualFocus))return k(i.selectionManager).focusedKey()==null?0:-1}),onKeyDown:m,onMouseDown:g,onFocusIn:f,onFocusOut:u}}function Ro(e,n){const r=()=>k(e.selectionManager),o=()=>k(e.key),i=()=>k(e.shouldUseVirtualFocus),a=b=>{r().selectionMode()!=="none"&&(r().selectionMode()==="single"?r().isSelected(o())&&!r().disallowEmptySelection()?r().toggleSelection(o()):r().replaceSelection(o()):b!=null&&b.shiftKey?r().extendSelection(o()):r().selectionBehavior()==="toggle"||wt(b)||"pointerType"in b&&b.pointerType==="touch"?r().toggleSelection(o()):r().replaceSelection(o()))},l=()=>r().isSelected(o()),c=()=>k(e.disabled)||r().isDisabled(o()),s=()=>!c()&&r().canSelectItem(o());let d=null;const m=b=>{s()&&(d=b.pointerType,b.pointerType==="mouse"&&b.button===0&&!k(e.shouldSelectOnPressUp)&&a(b))},f=b=>{s()&&b.pointerType==="mouse"&&b.button===0&&k(e.shouldSelectOnPressUp)&&k(e.allowsDifferentPressOrigin)&&a(b)},u=b=>{s()&&(k(e.shouldSelectOnPressUp)&&!k(e.allowsDifferentPressOrigin)||d!=="mouse")&&a(b)},g=b=>{!s()||!["Enter"," "].includes(b.key)||(_o(b)?r().toggleSelection(o()):a(b))},h=b=>{c()&&b.preventDefault()},v=b=>{const w=n();i()||c()||!w||b.target===w&&r().setFocusedKey(o())},p=t.createMemo(()=>{if(!(i()||c()))return o()===r().focusedKey()?0:-1}),y=t.createMemo(()=>k(e.virtualized)?void 0:o());return t.createEffect(t.on([n,o,i,()=>r().focusedKey(),()=>r().isFocused()],([b,w,x,C,T])=>{b&&w===C&&T&&!x&&document.activeElement!==b&&(e.focus?e.focus():fe(b))})),{isSelected:l,isDisabled:c,allowsSelection:s,tabIndex:p,dataKey:y,onPointerDown:m,onPointerUp:f,onClick:u,onKeyDown:g,onMouseDown:h,onFocus:v}}var La=class{constructor(e,n){Ce(this,"collection");Ce(this,"state");this.collection=e,this.state=n}selectionMode(){return this.state.selectionMode()}disallowEmptySelection(){return this.state.disallowEmptySelection()}selectionBehavior(){return this.state.selectionBehavior()}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}isFocused(){return this.state.isFocused()}setFocused(e){this.state.setFocused(e)}focusedKey(){return this.state.focusedKey()}setFocusedKey(e){(e==null||this.collection().getItem(e))&&this.state.setFocusedKey(e)}selectedKeys(){return this.state.selectedKeys()}isSelected(e){if(this.state.selectionMode()==="none")return!1;const n=this.getKey(e);return n==null?!1:this.state.selectedKeys().has(n)}isEmpty(){return this.state.selectedKeys().size===0}isSelectAll(){if(this.isEmpty())return!1;const e=this.state.selectedKeys();return this.getAllSelectableKeys().every(n=>e.has(n))}firstSelectedKey(){let e;for(const n of this.state.selectedKeys()){const r=this.collection().getItem(n),o=(r==null?void 0:r.index)!=null&&(e==null?void 0:e.index)!=null&&r.index<e.index;(!e||o)&&(e=r)}return e==null?void 0:e.key}lastSelectedKey(){let e;for(const n of this.state.selectedKeys()){const r=this.collection().getItem(n),o=(r==null?void 0:r.index)!=null&&(e==null?void 0:e.index)!=null&&r.index>e.index;(!e||o)&&(e=r)}return e==null?void 0:e.key}extendSelection(e){if(this.selectionMode()==="none")return;if(this.selectionMode()==="single"){this.replaceSelection(e);return}const n=this.getKey(e);if(n==null)return;const r=this.state.selectedKeys(),o=r.anchorKey||n,i=new We(r,o,n);for(const a of this.getKeyRange(o,r.currentKey||n))i.delete(a);for(const a of this.getKeyRange(n,o))this.canSelectItem(a)&&i.add(a);this.state.setSelectedKeys(i)}getKeyRange(e,n){const r=this.collection().getItem(e),o=this.collection().getItem(n);return r&&o?r.index!=null&&o.index!=null&&r.index<=o.index?this.getKeyRangeInternal(e,n):this.getKeyRangeInternal(n,e):[]}getKeyRangeInternal(e,n){const r=[];let o=e;for(;o!=null;){const i=this.collection().getItem(o);if(i&&i.type==="item"&&r.push(o),o===n)return r;o=this.collection().getKeyAfter(o)}return[]}getKey(e){const n=this.collection().getItem(e);return n?!n||n.type!=="item"?null:n.key:e}toggleSelection(e){if(this.selectionMode()==="none")return;if(this.selectionMode()==="single"&&!this.isSelected(e)){this.replaceSelection(e);return}const n=this.getKey(e);if(n==null)return;const r=new We(this.state.selectedKeys());r.has(n)?r.delete(n):this.canSelectItem(n)&&(r.add(n),r.anchorKey=n,r.currentKey=n),!(this.disallowEmptySelection()&&r.size===0)&&this.state.setSelectedKeys(r)}replaceSelection(e){if(this.selectionMode()==="none")return;const n=this.getKey(e);if(n==null)return;const r=this.canSelectItem(n)?new We([n],n,n):new We;this.state.setSelectedKeys(r)}setSelectedKeys(e){if(this.selectionMode()==="none")return;const n=new We;for(const r of e){const o=this.getKey(r);if(o!=null&&(n.add(o),this.selectionMode()==="single"))break}this.state.setSelectedKeys(n)}selectAll(){this.selectionMode()==="multiple"&&this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()))}clearSelection(){const e=this.state.selectedKeys();!this.disallowEmptySelection()&&e.size>0&&this.state.setSelectedKeys(new We)}toggleSelectAll(){this.isSelectAll()?this.clearSelection():this.selectAll()}select(e,n){this.selectionMode()!=="none"&&(this.selectionMode()==="single"?this.isSelected(e)&&!this.disallowEmptySelection()?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior()==="toggle"||n&&n.pointerType==="touch"?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys())return!0;const n=this.selectedKeys();if(e.size!==n.size)return!1;for(const r of e)if(!n.has(r))return!1;for(const r of n)if(!e.has(r))return!1;return!0}canSelectItem(e){if(this.state.selectionMode()==="none")return!1;const n=this.collection().getItem(e);return n!=null&&!n.disabled}isDisabled(e){const n=this.collection().getItem(e);return!n||n.disabled}getAllSelectableKeys(){const e=[];return(r=>{for(;r!=null;){if(this.canSelectItem(r)){const o=this.collection().getItem(r);if(!o)continue;o.type==="item"&&e.push(r)}r=this.collection().getKeyAfter(r)}})(this.collection().getFirstKey()),e}},Rr=class{constructor(e){Ce(this,"keyMap",new Map);Ce(this,"iterable");Ce(this,"firstKey");Ce(this,"lastKey");this.iterable=e;for(const o of e)this.keyMap.set(o.key,o);if(this.keyMap.size===0)return;let n,r=0;for(const[o,i]of this.keyMap)n?(n.nextKey=o,i.prevKey=n.key):(this.firstKey=o,i.prevKey=void 0),i.type==="item"&&(i.index=r++),n=i,n.nextKey=void 0;this.lastKey=n.key}*[Symbol.iterator](){yield*this.iterable}getSize(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){var n;return(n=this.keyMap.get(e))==null?void 0:n.prevKey}getKeyAfter(e){var n;return(n=this.keyMap.get(e))==null?void 0:n.nextKey}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){const n=[...this.getKeys()];return this.getItem(n[e])}};function Oa(e){const n=Pa(e),o=ba({dataSource:()=>k(e.dataSource),getKey:()=>k(e.getKey),getTextValue:()=>k(e.getTextValue),getDisabled:()=>k(e.getDisabled),getSectionChildren:()=>k(e.getSectionChildren),factory:a=>e.filter?new Rr(e.filter(a)):new Rr(a)},[()=>e.filter]),i=new La(o,n);return t.createComputed(()=>{const a=n.focusedKey();a!=null&&!o().getItem(a)&&n.setFocusedKey(void 0)}),{collection:o,selectionManager:()=>i}}var de=e=>typeof e=="function"?e():e,qa=e=>{const n=t.createMemo(()=>{const l=de(e.element);if(l)return getComputedStyle(l)}),r=()=>{var l;return((l=n())==null?void 0:l.animationName)??"none"},[o,i]=t.createSignal(de(e.show)?"present":"hidden");let a="none";return t.createEffect(l=>{const c=de(e.show);return t.untrack(()=>{var m;if(l===c)return c;const s=a,d=r();c?i("present"):d==="none"||((m=n())==null?void 0:m.display)==="none"?i("hidden"):i(l===!0&&s!==d?"hiding":"hidden")}),c}),t.createEffect(()=>{const l=de(e.element);if(!l)return;const c=d=>{d.target===l&&(a=r())},s=d=>{const f=r().includes(d.animationName);d.target===l&&f&&o()==="hiding"&&i("hidden")};l.addEventListener("animationstart",c),l.addEventListener("animationcancel",s),l.addEventListener("animationend",s),t.onCleanup(()=>{l.removeEventListener("animationstart",c),l.removeEventListener("animationcancel",s),l.removeEventListener("animationend",s)})}),{present:()=>o()==="present"||o()==="hiding",state:o}},_a=qa,No=_a,rn="data-kb-top-layer",zo,Dn=!1,Ye=[];function Rt(e){return Ye.findIndex(n=>n.node===e)}function Ra(e){return Ye[Rt(e)]}function Na(e){return Ye[Ye.length-1].node===e}function Ko(){return Ye.filter(e=>e.isPointerBlocking)}function za(){return[...Ko()].slice(-1)[0]}function Bn(){return Ko().length>0}function Bo(e){var r;const n=Rt((r=za())==null?void 0:r.node);return Rt(e)<n}function Ka(e){Ye.push(e)}function Ba(e){const n=Rt(e);n<0||Ye.splice(n,1)}function Ua(){for(const{node:e}of Ye)e.style.pointerEvents=Bo(e)?"none":"auto"}function Ha(e){if(Bn()&&!Dn){const n=Re(e);zo=document.body.style.pointerEvents,n.body.style.pointerEvents="none",Dn=!0}}function Va(e){if(Bn())return;const n=Re(e);n.body.style.pointerEvents=zo,n.body.style.length===0&&n.body.removeAttribute("style"),Dn=!1}var ve={layers:Ye,isTopMostLayer:Na,hasPointerBlockingLayer:Bn,isBelowPointerBlockingLayer:Bo,addLayer:Ka,removeLayer:Ba,indexOf:Rt,find:Ra,assignPointerEventToLayers:Ua,disableBodyPointerEvents:Ha,restoreBodyPointerEvents:Va},Ga={};gn(Ga,{Button:()=>Qa,Root:()=>Un});var ja=["button","color","file","image","reset","submit"];function Wa(e){const n=e.tagName.toLowerCase();return n==="button"?!0:n==="input"&&e.type?ja.indexOf(e.type)!==-1:!1}function Un(e){let n;const r=z({type:"button"},e),[o,i]=t.splitProps(r,["ref","type","disabled"]),a=fn(()=>n,()=>"button"),l=t.createMemo(()=>{const d=a();return d==null?!1:Wa({tagName:d,type:o.type})}),c=t.createMemo(()=>a()==="input"),s=t.createMemo(()=>a()==="a"&&(n==null?void 0:n.getAttribute("href"))!=null);return t.createComponent(ee,t.mergeProps({as:"button",ref(d){const m=he(f=>n=f,o.ref);typeof m=="function"&&m(d)},get type(){return l()||c()?o.type:void 0},get role(){return!l()&&!s()?"button":void 0},get tabIndex(){return!l()&&!s()&&!o.disabled?0:void 0},get disabled(){return l()||c()?o.disabled:void 0},get"aria-disabled"(){return!l()&&!c()&&o.disabled?!0:void 0},get"data-disabled"(){return o.disabled?"":void 0}},i))}var Qa=Un,Ya=["top","right","bottom","left"],_e=Math.min,be=Math.max,on=Math.round,Zt=Math.floor,ot=e=>({x:e,y:e}),Xa={left:"right",right:"left",bottom:"top",top:"bottom"},Za={start:"end",end:"start"};function Tn(e,n,r){return be(e,_e(n,r))}function mt(e,n){return typeof e=="function"?e(n):e}function it(e){return e.split("-")[0]}function $t(e){return e.split("-")[1]}function Uo(e){return e==="x"?"y":"x"}function Hn(e){return e==="y"?"height":"width"}function gt(e){return["top","bottom"].includes(it(e))?"y":"x"}function Vn(e){return Uo(gt(e))}function Ja(e,n,r){r===void 0&&(r=!1);const o=$t(e),i=Vn(e),a=Hn(i);let l=i==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return n.reference[a]>n.floating[a]&&(l=sn(l)),[l,sn(l)]}function el(e){const n=sn(e);return[Fn(e),n,Fn(n)]}function Fn(e){return e.replace(/start|end/g,n=>Za[n])}function tl(e,n,r){const o=["left","right"],i=["right","left"],a=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return r?n?i:o:n?o:i;case"left":case"right":return n?a:l;default:return[]}}function nl(e,n,r,o){const i=$t(e);let a=tl(it(e),r==="start",o);return i&&(a=a.map(l=>l+"-"+i),n&&(a=a.concat(a.map(Fn)))),a}function sn(e){return e.replace(/left|right|bottom|top/g,n=>Xa[n])}function rl(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ho(e){return typeof e!="number"?rl(e):{top:e,right:e,bottom:e,left:e}}function an(e){const{x:n,y:r,width:o,height:i}=e;return{width:o,height:i,top:r,left:n,right:n+o,bottom:r+i,x:n,y:r}}function Nr(e,n,r){let{reference:o,floating:i}=e;const a=gt(n),l=Vn(n),c=Hn(l),s=it(n),d=a==="y",m=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,u=o[c]/2-i[c]/2;let g;switch(s){case"top":g={x:m,y:o.y-i.height};break;case"bottom":g={x:m,y:o.y+o.height};break;case"right":g={x:o.x+o.width,y:f};break;case"left":g={x:o.x-i.width,y:f};break;default:g={x:o.x,y:o.y}}switch($t(n)){case"start":g[l]-=u*(r&&d?-1:1);break;case"end":g[l]+=u*(r&&d?-1:1);break}return g}var ol=async(e,n,r)=>{const{placement:o="bottom",strategy:i="absolute",middleware:a=[],platform:l}=r,c=a.filter(Boolean),s=await(l.isRTL==null?void 0:l.isRTL(n));let d=await l.getElementRects({reference:e,floating:n,strategy:i}),{x:m,y:f}=Nr(d,o,s),u=o,g={},h=0;for(let v=0;v<c.length;v++){const{name:p,fn:y}=c[v],{x:b,y:w,data:x,reset:C}=await y({x:m,y:f,initialPlacement:o,placement:u,strategy:i,middlewareData:g,rects:d,platform:l,elements:{reference:e,floating:n}});m=b??m,f=w??f,g={...g,[p]:{...g[p],...x}},C&&h<=50&&(h++,typeof C=="object"&&(C.placement&&(u=C.placement),C.rects&&(d=C.rects===!0?await l.getElementRects({reference:e,floating:n,strategy:i}):C.rects),{x:m,y:f}=Nr(d,u,s)),v=-1)}return{x:m,y:f,placement:u,strategy:i,middlewareData:g}};async function Nt(e,n){var r;n===void 0&&(n={});const{x:o,y:i,platform:a,rects:l,elements:c,strategy:s}=e,{boundary:d="clippingAncestors",rootBoundary:m="viewport",elementContext:f="floating",altBoundary:u=!1,padding:g=0}=mt(n,e),h=Ho(g),p=c[u?f==="floating"?"reference":"floating":f],y=an(await a.getClippingRect({element:(r=await(a.isElement==null?void 0:a.isElement(p)))==null||r?p:p.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(c.floating)),boundary:d,rootBoundary:m,strategy:s})),b=f==="floating"?{x:o,y:i,width:l.floating.width,height:l.floating.height}:l.reference,w=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c.floating)),x=await(a.isElement==null?void 0:a.isElement(w))?await(a.getScale==null?void 0:a.getScale(w))||{x:1,y:1}:{x:1,y:1},C=an(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:b,offsetParent:w,strategy:s}):b);return{top:(y.top-C.top+h.top)/x.y,bottom:(C.bottom-y.bottom+h.bottom)/x.y,left:(y.left-C.left+h.left)/x.x,right:(C.right-y.right+h.right)/x.x}}var il=e=>({name:"arrow",options:e,async fn(n){const{x:r,y:o,placement:i,rects:a,platform:l,elements:c,middlewareData:s}=n,{element:d,padding:m=0}=mt(e,n)||{};if(d==null)return{};const f=Ho(m),u={x:r,y:o},g=Vn(i),h=Hn(g),v=await l.getDimensions(d),p=g==="y",y=p?"top":"left",b=p?"bottom":"right",w=p?"clientHeight":"clientWidth",x=a.reference[h]+a.reference[g]-u[g]-a.floating[h],C=u[g]-a.reference[g],T=await(l.getOffsetParent==null?void 0:l.getOffsetParent(d));let E=T?T[w]:0;(!E||!await(l.isElement==null?void 0:l.isElement(T)))&&(E=c.floating[w]||a.floating[h]);const F=x/2-C/2,S=E/2-v[h]/2-1,M=_e(f[y],S),I=_e(f[b],S),q=M,V=E-v[h]-I,K=E/2-v[h]/2+F,Q=Tn(q,K,V),L=!s.arrow&&$t(i)!=null&&K!==Q&&a.reference[h]/2-(K<q?M:I)-v[h]/2<0,R=L?K<q?K-q:K-V:0;return{[g]:u[g]+R,data:{[g]:Q,centerOffset:K-Q-R,...L&&{alignmentOffset:R}},reset:L}}}),sl=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var r,o;const{placement:i,middlewareData:a,rects:l,initialPlacement:c,platform:s,elements:d}=n,{mainAxis:m=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:v=!0,...p}=mt(e,n);if((r=a.arrow)!=null&&r.alignmentOffset)return{};const y=it(i),b=gt(c),w=it(c)===c,x=await(s.isRTL==null?void 0:s.isRTL(d.floating)),C=u||(w||!v?[sn(c)]:el(c)),T=h!=="none";!u&&T&&C.push(...nl(c,v,h,x));const E=[c,...C],F=await Nt(n,p),S=[];let M=((o=a.flip)==null?void 0:o.overflows)||[];if(m&&S.push(F[y]),f){const K=Ja(i,l,x);S.push(F[K[0]],F[K[1]])}if(M=[...M,{placement:i,overflows:S}],!S.every(K=>K<=0)){var I,q;const K=(((I=a.flip)==null?void 0:I.index)||0)+1,Q=E[K];if(Q)return{data:{index:K,overflows:M},reset:{placement:Q}};let L=(q=M.filter(R=>R.overflows[0]<=0).sort((R,B)=>R.overflows[1]-B.overflows[1])[0])==null?void 0:q.placement;if(!L)switch(g){case"bestFit":{var V;const R=(V=M.filter(B=>{if(T){const X=gt(B.placement);return X===b||X==="y"}return!0}).map(B=>[B.placement,B.overflows.filter(X=>X>0).reduce((X,re)=>X+re,0)]).sort((B,X)=>B[1]-X[1])[0])==null?void 0:V[0];R&&(L=R);break}case"initialPlacement":L=c;break}if(i!==L)return{reset:{placement:L}}}return{}}}};function zr(e,n){return{top:e.top-n.height,right:e.right-n.width,bottom:e.bottom-n.height,left:e.left-n.width}}function Kr(e){return Ya.some(n=>e[n]>=0)}var al=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(n){const{rects:r}=n,{strategy:o="referenceHidden",...i}=mt(e,n);switch(o){case"referenceHidden":{const a=await Nt(n,{...i,elementContext:"reference"}),l=zr(a,r.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:Kr(l)}}}case"escaped":{const a=await Nt(n,{...i,altBoundary:!0}),l=zr(a,r.floating);return{data:{escapedOffsets:l,escaped:Kr(l)}}}default:return{}}}}};async function ll(e,n){const{placement:r,platform:o,elements:i}=e,a=await(o.isRTL==null?void 0:o.isRTL(i.floating)),l=it(r),c=$t(r),s=gt(r)==="y",d=["left","top"].includes(l)?-1:1,m=a&&s?-1:1,f=mt(n,e);let{mainAxis:u,crossAxis:g,alignmentAxis:h}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return c&&typeof h=="number"&&(g=c==="end"?h*-1:h),s?{x:g*m,y:u*d}:{x:u*d,y:g*m}}var cl=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){var r,o;const{x:i,y:a,placement:l,middlewareData:c}=n,s=await ll(n,e);return l===((r=c.offset)==null?void 0:r.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+s.x,y:a+s.y,data:{...s,placement:l}}}}},ul=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:r,y:o,placement:i}=n,{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:p=>{let{x:y,y:b}=p;return{x:y,y:b}}},...s}=mt(e,n),d={x:r,y:o},m=await Nt(n,s),f=gt(it(i)),u=Uo(f);let g=d[u],h=d[f];if(a){const p=u==="y"?"top":"left",y=u==="y"?"bottom":"right",b=g+m[p],w=g-m[y];g=Tn(b,g,w)}if(l){const p=f==="y"?"top":"left",y=f==="y"?"bottom":"right",b=h+m[p],w=h-m[y];h=Tn(b,h,w)}const v=c.fn({...n,[u]:g,[f]:h});return{...v,data:{x:v.x-r,y:v.y-o}}}}},dl=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(n){const{placement:r,rects:o,platform:i,elements:a}=n,{apply:l=()=>{},...c}=mt(e,n),s=await Nt(n,c),d=it(r),m=$t(r),f=gt(r)==="y",{width:u,height:g}=o.floating;let h,v;d==="top"||d==="bottom"?(h=d,v=m===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?"start":"end")?"left":"right"):(v=d,h=m==="end"?"top":"bottom");const p=g-s.top-s.bottom,y=u-s.left-s.right,b=_e(g-s[h],p),w=_e(u-s[v],y),x=!n.middlewareData.shift;let C=b,T=w;if(f?T=m||x?_e(w,y):y:C=m||x?_e(b,p):p,x&&!m){const F=be(s.left,0),S=be(s.right,0),M=be(s.top,0),I=be(s.bottom,0);f?T=u-2*(F!==0||S!==0?F+S:be(s.left,s.right)):C=g-2*(M!==0||I!==0?M+I:be(s.top,s.bottom))}await l({...n,availableWidth:T,availableHeight:C});const E=await i.getDimensions(a.floating);return u!==E.width||g!==E.height?{reset:{rects:!0}}:{}}}};function Et(e){return Vo(e)?(e.nodeName||"").toLowerCase():"#document"}function we(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function Xe(e){var n;return(n=(Vo(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function Vo(e){return e instanceof Node||e instanceof we(e).Node}function Ie(e){return e instanceof Element||e instanceof we(e).Element}function Ne(e){return e instanceof HTMLElement||e instanceof we(e).HTMLElement}function Br(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof we(e).ShadowRoot}function Vt(e){const{overflow:n,overflowX:r,overflowY:o,display:i}=Le(e);return/auto|scroll|overlay|hidden|clip/.test(n+o+r)&&!["inline","contents"].includes(i)}function fl(e){return["table","td","th"].includes(Et(e))}function hn(e){return[":popover-open",":modal"].some(n=>{try{return e.matches(n)}catch{return!1}})}function Gn(e){const n=jn(),r=Ie(e)?Le(e):e;return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!n&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!n&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(r.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(r.contain||"").includes(o))}function gl(e){let n=st(e);for(;Ne(n)&&!St(n);){if(Gn(n))return n;if(hn(n))return null;n=st(n)}return null}function jn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function St(e){return["html","body","#document"].includes(Et(e))}function Le(e){return we(e).getComputedStyle(e)}function mn(e){return Ie(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function st(e){if(Et(e)==="html")return e;const n=e.assignedSlot||e.parentNode||Br(e)&&e.host||Xe(e);return Br(n)?n.host:n}function Go(e){const n=st(e);return St(n)?e.ownerDocument?e.ownerDocument.body:e.body:Ne(n)&&Vt(n)?n:Go(n)}function zt(e,n,r){var o;n===void 0&&(n=[]),r===void 0&&(r=!0);const i=Go(e),a=i===((o=e.ownerDocument)==null?void 0:o.body),l=we(i);return a?n.concat(l,l.visualViewport||[],Vt(i)?i:[],l.frameElement&&r?zt(l.frameElement):[]):n.concat(i,zt(i,[],r))}function jo(e){const n=Le(e);let r=parseFloat(n.width)||0,o=parseFloat(n.height)||0;const i=Ne(e),a=i?e.offsetWidth:r,l=i?e.offsetHeight:o,c=on(r)!==a||on(o)!==l;return c&&(r=a,o=l),{width:r,height:o,$:c}}function Wn(e){return Ie(e)?e:e.contextElement}function Ct(e){const n=Wn(e);if(!Ne(n))return ot(1);const r=n.getBoundingClientRect(),{width:o,height:i,$:a}=jo(n);let l=(a?on(r.width):r.width)/o,c=(a?on(r.height):r.height)/i;return(!l||!Number.isFinite(l))&&(l=1),(!c||!Number.isFinite(c))&&(c=1),{x:l,y:c}}var hl=ot(0);function Wo(e){const n=we(e);return!jn()||!n.visualViewport?hl:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function ml(e,n,r){return n===void 0&&(n=!1),!r||n&&r!==we(e)?!1:n}function ht(e,n,r,o){n===void 0&&(n=!1),r===void 0&&(r=!1);const i=e.getBoundingClientRect(),a=Wn(e);let l=ot(1);n&&(o?Ie(o)&&(l=Ct(o)):l=Ct(e));const c=ml(a,r,o)?Wo(a):ot(0);let s=(i.left+c.x)/l.x,d=(i.top+c.y)/l.y,m=i.width/l.x,f=i.height/l.y;if(a){const u=we(a),g=o&&Ie(o)?we(o):o;let h=u,v=h.frameElement;for(;v&&o&&g!==h;){const p=Ct(v),y=v.getBoundingClientRect(),b=Le(v),w=y.left+(v.clientLeft+parseFloat(b.paddingLeft))*p.x,x=y.top+(v.clientTop+parseFloat(b.paddingTop))*p.y;s*=p.x,d*=p.y,m*=p.x,f*=p.y,s+=w,d+=x,h=we(v),v=h.frameElement}}return an({width:m,height:f,x:s,y:d})}function pl(e){let{elements:n,rect:r,offsetParent:o,strategy:i}=e;const a=i==="fixed",l=Xe(o),c=n?hn(n.floating):!1;if(o===l||c&&a)return r;let s={scrollLeft:0,scrollTop:0},d=ot(1);const m=ot(0),f=Ne(o);if((f||!f&&!a)&&((Et(o)!=="body"||Vt(l))&&(s=mn(o)),Ne(o))){const u=ht(o);d=Ct(o),m.x=u.x+o.clientLeft,m.y=u.y+o.clientTop}return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-s.scrollLeft*d.x+m.x,y:r.y*d.y-s.scrollTop*d.y+m.y}}function vl(e){return Array.from(e.getClientRects())}function Qo(e){return ht(Xe(e)).left+mn(e).scrollLeft}function yl(e){const n=Xe(e),r=mn(e),o=e.ownerDocument.body,i=be(n.scrollWidth,n.clientWidth,o.scrollWidth,o.clientWidth),a=be(n.scrollHeight,n.clientHeight,o.scrollHeight,o.clientHeight);let l=-r.scrollLeft+Qo(e);const c=-r.scrollTop;return Le(o).direction==="rtl"&&(l+=be(n.clientWidth,o.clientWidth)-i),{width:i,height:a,x:l,y:c}}function bl(e,n){const r=we(e),o=Xe(e),i=r.visualViewport;let a=o.clientWidth,l=o.clientHeight,c=0,s=0;if(i){a=i.width,l=i.height;const d=jn();(!d||d&&n==="fixed")&&(c=i.offsetLeft,s=i.offsetTop)}return{width:a,height:l,x:c,y:s}}function wl(e,n){const r=ht(e,!0,n==="fixed"),o=r.top+e.clientTop,i=r.left+e.clientLeft,a=Ne(e)?Ct(e):ot(1),l=e.clientWidth*a.x,c=e.clientHeight*a.y,s=i*a.x,d=o*a.y;return{width:l,height:c,x:s,y:d}}function Ur(e,n,r){let o;if(n==="viewport")o=bl(e,r);else if(n==="document")o=yl(Xe(e));else if(Ie(n))o=wl(n,r);else{const i=Wo(e);o={...n,x:n.x-i.x,y:n.y-i.y}}return an(o)}function Yo(e,n){const r=st(e);return r===n||!Ie(r)||St(r)?!1:Le(r).position==="fixed"||Yo(r,n)}function xl(e,n){const r=n.get(e);if(r)return r;let o=zt(e,[],!1).filter(c=>Ie(c)&&Et(c)!=="body"),i=null;const a=Le(e).position==="fixed";let l=a?st(e):e;for(;Ie(l)&&!St(l);){const c=Le(l),s=Gn(l);!s&&c.position==="fixed"&&(i=null),(a?!s&&!i:!s&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Vt(l)&&!s&&Yo(e,l))?o=o.filter(m=>m!==l):i=c,l=st(l)}return n.set(e,o),o}function Cl(e){let{element:n,boundary:r,rootBoundary:o,strategy:i}=e;const l=[...r==="clippingAncestors"?hn(n)?[]:xl(n,this._c):[].concat(r),o],c=l[0],s=l.reduce((d,m)=>{const f=Ur(n,m,i);return d.top=be(f.top,d.top),d.right=_e(f.right,d.right),d.bottom=_e(f.bottom,d.bottom),d.left=be(f.left,d.left),d},Ur(n,c,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function Sl(e){const{width:n,height:r}=jo(e);return{width:n,height:r}}function $l(e,n,r){const o=Ne(n),i=Xe(n),a=r==="fixed",l=ht(e,!0,a,n);let c={scrollLeft:0,scrollTop:0};const s=ot(0);if(o||!o&&!a)if((Et(n)!=="body"||Vt(i))&&(c=mn(n)),o){const f=ht(n,!0,a,n);s.x=f.x+n.clientLeft,s.y=f.y+n.clientTop}else i&&(s.x=Qo(i));const d=l.left+c.scrollLeft-s.x,m=l.top+c.scrollTop-s.y;return{x:d,y:m,width:l.width,height:l.height}}function xn(e){return Le(e).position==="static"}function Hr(e,n){return!Ne(e)||Le(e).position==="fixed"?null:n?n(e):e.offsetParent}function Xo(e,n){const r=we(e);if(hn(e))return r;if(!Ne(e)){let i=st(e);for(;i&&!St(i);){if(Ie(i)&&!xn(i))return i;i=st(i)}return r}let o=Hr(e,n);for(;o&&fl(o)&&xn(o);)o=Hr(o,n);return o&&St(o)&&xn(o)&&!Gn(o)?r:o||gl(e)||r}var El=async function(e){const n=this.getOffsetParent||Xo,r=this.getDimensions,o=await r(e.floating);return{reference:$l(e.reference,await n(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function kl(e){return Le(e).direction==="rtl"}var Zo={convertOffsetParentRelativeRectToViewportRelativeRect:pl,getDocumentElement:Xe,getClippingRect:Cl,getOffsetParent:Xo,getElementRects:El,getClientRects:vl,getDimensions:Sl,getScale:Ct,isElement:Ie,isRTL:kl};function Al(e,n){let r=null,o;const i=Xe(e);function a(){var c;clearTimeout(o),(c=r)==null||c.disconnect(),r=null}function l(c,s){c===void 0&&(c=!1),s===void 0&&(s=1),a();const{left:d,top:m,width:f,height:u}=e.getBoundingClientRect();if(c||n(),!f||!u)return;const g=Zt(m),h=Zt(i.clientWidth-(d+f)),v=Zt(i.clientHeight-(m+u)),p=Zt(d),b={rootMargin:-g+"px "+-h+"px "+-v+"px "+-p+"px",threshold:be(0,_e(1,s))||1};let w=!0;function x(C){const T=C[0].intersectionRatio;if(T!==s){if(!w)return l();T?l(!1,T):o=setTimeout(()=>{l(!1,1e-7)},1e3)}w=!1}try{r=new IntersectionObserver(x,{...b,root:i.ownerDocument})}catch{r=new IntersectionObserver(x,b)}r.observe(e)}return l(!0),a}function Ml(e,n,r,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:s=!1}=o,d=Wn(e),m=i||a?[...d?zt(d):[],...zt(n)]:[];m.forEach(y=>{i&&y.addEventListener("scroll",r,{passive:!0}),a&&y.addEventListener("resize",r)});const f=d&&c?Al(d,r):null;let u=-1,g=null;l&&(g=new ResizeObserver(y=>{let[b]=y;b&&b.target===d&&g&&(g.unobserve(n),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var w;(w=g)==null||w.observe(n)})),r()}),d&&!s&&g.observe(d),g.observe(n));let h,v=s?ht(e):null;s&&p();function p(){const y=ht(e);v&&(y.x!==v.x||y.y!==v.y||y.width!==v.width||y.height!==v.height)&&r(),v=y,h=requestAnimationFrame(p)}return r(),()=>{var y;m.forEach(b=>{i&&b.removeEventListener("scroll",r),a&&b.removeEventListener("resize",r)}),f==null||f(),(y=g)==null||y.disconnect(),g=null,s&&cancelAnimationFrame(h)}}var Pl=cl,Dl=ul,Tl=sl,Fl=dl,Il=al,Ll=il,Ol=(e,n,r)=>{const o=new Map,i={platform:Zo,...r},a={...i.platform,_c:o};return ol(e,n,{...i,platform:a})},Qn=t.createContext();function Yn(){const e=t.useContext(Qn);if(e===void 0)throw new Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");return e}var ql=t.template('<svg display="block" viewBox="0 0 30 30" style="transform:scale(1.02)"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z">'),In=30,Vr=In/2,_l={top:180,right:-90,bottom:0,left:90};function Xn(e){const n=Yn(),r=z({size:In},e),[o,i]=t.splitProps(r,["ref","style","size"]),a=()=>n.currentPlacement().split("-")[0],l=Rl(n.contentRef),c=()=>{var u;return((u=l())==null?void 0:u.getPropertyValue("background-color"))||"none"},s=()=>{var u;return((u=l())==null?void 0:u.getPropertyValue(`border-${a()}-color`))||"none"},d=()=>{var u;return((u=l())==null?void 0:u.getPropertyValue(`border-${a()}-width`))||"0px"},m=()=>Number.parseInt(d())*2*(In/o.size),f=()=>`rotate(${_l[a()]} ${Vr} ${Vr}) translate(0 2)`;return t.createComponent(ee,t.mergeProps({as:"div",ref(u){const g=he(n.setArrowRef,o.ref);typeof g=="function"&&g(u)},"aria-hidden":"true",get style(){return un({position:"absolute","font-size":`${o.size}px`,width:"1em",height:"1em","pointer-events":"none",fill:c(),stroke:s(),"stroke-width":m()},o.style)}},i,{get children(){const u=ql(),g=u.firstChild;return t.createRenderEffect(()=>t.setAttribute(g,"transform",f())),u}}))}function Rl(e){const[n,r]=t.createSignal();return t.createEffect(()=>{const o=e();o&&r(_s(o).getComputedStyle(o))}),n}function Nl(e){const n=Yn(),[r,o]=t.splitProps(e,["ref","style"]);return t.createComponent(ee,t.mergeProps({as:"div",ref(i){const a=he(n.setPositionerRef,r.ref);typeof a=="function"&&a(i)},"data-popper-positioner":"",get style(){return un({position:"absolute",top:0,left:0,"min-width":"max-content"},r.style)}},o))}function Gr(e){const{x:n=0,y:r=0,width:o=0,height:i=0}=e??{};if(typeof DOMRect=="function")return new DOMRect(n,r,o,i);const a={x:n,y:r,width:o,height:i,top:r,right:n+o,bottom:r+i,left:n};return{...a,toJSON:()=>a}}function zl(e,n){return{contextElement:e,getBoundingClientRect:()=>{const o=n(e);return o?Gr(o):e?e.getBoundingClientRect():Gr()}}}function Kl(e){return/^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e)}var Bl={top:"bottom",right:"left",bottom:"top",left:"right"};function Ul(e,n){const[r,o]=e.split("-"),i=Bl[r];return o?r==="left"||r==="right"?`${i} ${o==="start"?"top":"bottom"}`:o==="start"?`${i} ${n==="rtl"?"right":"left"}`:`${i} ${n==="rtl"?"left":"right"}`:`${i} center`}function Hl(e){const n=z({getAnchorRect:u=>u==null?void 0:u.getBoundingClientRect(),placement:"bottom",gutter:0,shift:0,flip:!0,slide:!0,overlap:!1,sameWidth:!1,fitViewport:!1,hideWhenDetached:!1,detachedPadding:0,arrowPadding:4,overflowPadding:8},e),[r,o]=t.createSignal(),[i,a]=t.createSignal(),[l,c]=t.createSignal(n.placement),s=()=>{var u;return zl((u=n.anchorRef)==null?void 0:u.call(n),n.getAnchorRect)},{direction:d}=at();async function m(){var T,E;const u=s(),g=r(),h=i();if(!u||!g)return;const v=((h==null?void 0:h.clientHeight)||0)/2,p=typeof n.gutter=="number"?n.gutter+v:n.gutter??v;g.style.setProperty("--kb-popper-content-overflow-padding",`${n.overflowPadding}px`),u.getBoundingClientRect();const y=[Pl(({placement:F})=>{const S=!!F.split("-")[1];return{mainAxis:p,crossAxis:S?void 0:n.shift,alignmentAxis:n.shift}})];if(n.flip!==!1){const F=typeof n.flip=="string"?n.flip.split(" "):void 0;if(F!==void 0&&!F.every(Kl))throw new Error("`flip` expects a spaced-delimited list of placements");y.push(Tl({padding:n.overflowPadding,fallbackPlacements:F}))}(n.slide||n.overlap)&&y.push(Dl({mainAxis:n.slide,crossAxis:n.overlap,padding:n.overflowPadding})),y.push(Fl({padding:n.overflowPadding,apply({availableWidth:F,availableHeight:S,rects:M}){const I=Math.round(M.reference.width);F=Math.floor(F),S=Math.floor(S),g.style.setProperty("--kb-popper-anchor-width",`${I}px`),g.style.setProperty("--kb-popper-content-available-width",`${F}px`),g.style.setProperty("--kb-popper-content-available-height",`${S}px`),n.sameWidth&&(g.style.width=`${I}px`),n.fitViewport&&(g.style.maxWidth=`${F}px`,g.style.maxHeight=`${S}px`)}})),n.hideWhenDetached&&y.push(Il({padding:n.detachedPadding})),h&&y.push(Ll({element:h,padding:n.arrowPadding}));const b=await Ol(u,g,{placement:n.placement,strategy:"absolute",middleware:y,platform:{...Zo,isRTL:()=>d()==="rtl"}});if(c(b.placement),(T=n.onCurrentPlacementChange)==null||T.call(n,b.placement),!g)return;g.style.setProperty("--kb-popper-content-transform-origin",Ul(b.placement,d()));const w=Math.round(b.x),x=Math.round(b.y);let C;if(n.hideWhenDetached&&(C=(E=b.middlewareData.hide)!=null&&E.referenceHidden?"hidden":"visible"),Object.assign(g.style,{top:"0",left:"0",transform:`translate3d(${w}px, ${x}px, 0)`,visibility:C}),h&&b.middlewareData.arrow){const{x:F,y:S}=b.middlewareData.arrow,M=b.placement.split("-")[0];Object.assign(h.style,{left:F!=null?`${F}px`:"",top:S!=null?`${S}px`:"",[M]:"100%"})}}t.createEffect(()=>{const u=s(),g=r();if(!u||!g)return;const h=Ml(u,g,m,{elementResize:typeof ResizeObserver=="function"});t.onCleanup(h)}),t.createEffect(()=>{var h;const u=r(),g=(h=n.contentRef)==null?void 0:h.call(n);!u||!g||queueMicrotask(()=>{u.style.zIndex=getComputedStyle(g).zIndex})});const f={currentPlacement:l,contentRef:()=>{var u;return(u=n.contentRef)==null?void 0:u.call(n)},setPositionerRef:o,setArrowRef:a};return t.createComponent(Qn.Provider,{value:f,get children(){return n.children}})}var Jo=Object.assign(Hl,{Arrow:Xn,Context:Qn,usePopperContext:Yn,Positioner:Nl});function Vl(e){const n=r=>{var o;r.key===Rn.Escape&&((o=e.onEscapeKeyDown)==null||o.call(e,r))};t.createEffect(()=>{var o;if(k(e.isDisabled))return;const r=((o=e.ownerDocument)==null?void 0:o.call(e))??Re();r.addEventListener("keydown",n),t.onCleanup(()=>{r.removeEventListener("keydown",n)})})}var jr="interactOutside.pointerDownOutside",Wr="interactOutside.focusOutside";function Gl(e,n){let r,o=Js;const i=()=>Re(n()),a=f=>{var u;return(u=e.onPointerDownOutside)==null?void 0:u.call(e,f)},l=f=>{var u;return(u=e.onFocusOutside)==null?void 0:u.call(e,f)},c=f=>{var u;return(u=e.onInteractOutside)==null?void 0:u.call(e,f)},s=f=>{var g;const u=f.target;return!(u instanceof HTMLElement)||u.closest(`[${rn}]`)||!ke(i(),u)||ke(n(),u)?!1:!((g=e.shouldExcludeElement)!=null&&g.call(e,u))},d=f=>{function u(){const g=n(),h=f.target;if(!g||!h||!s(f))return;const v=ae([a,c]);h.addEventListener(jr,v,{once:!0});const p=new CustomEvent(jr,{bubbles:!1,cancelable:!0,detail:{originalEvent:f,isContextMenu:f.button===2||Bs(f)&&f.button===0}});h.dispatchEvent(p)}f.pointerType==="touch"?(i().removeEventListener("click",u),o=u,i().addEventListener("click",u,{once:!0})):u()},m=f=>{const u=n(),g=f.target;if(!u||!g||!s(f))return;const h=ae([l,c]);g.addEventListener(Wr,h,{once:!0});const v=new CustomEvent(Wr,{bubbles:!1,cancelable:!0,detail:{originalEvent:f,isContextMenu:!1}});g.dispatchEvent(v)};t.createEffect(()=>{k(e.isDisabled)||(r=window.setTimeout(()=>{i().addEventListener("pointerdown",d,!0)},0),i().addEventListener("focusin",m,!0),t.onCleanup(()=>{window.clearTimeout(r),i().removeEventListener("click",o),i().removeEventListener("pointerdown",d,!0),i().removeEventListener("focusin",m,!0)}))})}var ei=t.createContext();function jl(){return t.useContext(ei)}function Wl(e){let n;const r=jl(),[o,i]=t.splitProps(e,["ref","disableOutsidePointerEvents","excludedElements","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","bypassTopMostLayerCheck"]),a=new Set([]),l=f=>{a.add(f);const u=r==null?void 0:r.registerNestedLayer(f);return()=>{a.delete(f),u==null||u()}};Gl({shouldExcludeElement:f=>{var u;return n?((u=o.excludedElements)==null?void 0:u.some(g=>ke(g(),f)))||[...a].some(g=>ke(g,f)):!1},onPointerDownOutside:f=>{var u,g,h;!n||ve.isBelowPointerBlockingLayer(n)||!o.bypassTopMostLayerCheck&&!ve.isTopMostLayer(n)||((u=o.onPointerDownOutside)==null||u.call(o,f),(g=o.onInteractOutside)==null||g.call(o,f),f.defaultPrevented||(h=o.onDismiss)==null||h.call(o))},onFocusOutside:f=>{var u,g,h;(u=o.onFocusOutside)==null||u.call(o,f),(g=o.onInteractOutside)==null||g.call(o,f),f.defaultPrevented||(h=o.onDismiss)==null||h.call(o)}},()=>n),Vl({ownerDocument:()=>Re(n),onEscapeKeyDown:f=>{var u;!n||!ve.isTopMostLayer(n)||((u=o.onEscapeKeyDown)==null||u.call(o,f),!f.defaultPrevented&&o.onDismiss&&(f.preventDefault(),o.onDismiss()))}}),t.onMount(()=>{if(!n)return;ve.addLayer({node:n,isPointerBlocking:o.disableOutsidePointerEvents,dismiss:o.onDismiss});const f=r==null?void 0:r.registerNestedLayer(n);ve.assignPointerEventToLayers(),ve.disableBodyPointerEvents(n),t.onCleanup(()=>{n&&(ve.removeLayer(n),f==null||f(),ve.assignPointerEventToLayers(),ve.restoreBodyPointerEvents(n))})}),t.createEffect(t.on([()=>n,()=>o.disableOutsidePointerEvents],([f,u])=>{if(!f)return;const g=ve.find(f);g&&g.isPointerBlocking!==u&&(g.isPointerBlocking=u,ve.assignPointerEventToLayers()),u&&ve.disableBodyPointerEvents(f),t.onCleanup(()=>{ve.restoreBodyPointerEvents(f)})},{defer:!0}));const m={registerNestedLayer:l};return t.createComponent(ei.Provider,{value:m,get children(){return t.createComponent(ee,t.mergeProps({as:"div",ref(f){const u=he(g=>n=g,o.ref);typeof u=="function"&&u(f)}},i))}})}function ti(e={}){const[n,r]=Po({value:()=>k(e.open),defaultValue:()=>!!k(e.defaultOpen),onChange:l=>{var c;return(c=e.onOpenChange)==null?void 0:c.call(e,l)}}),o=()=>{r(!0)},i=()=>{r(!1)};return{isOpen:n,setIsOpen:r,open:o,close:i,toggle:()=>{n()?i():o()}}}var Ee={};gn(Ee,{Description:()=>Ao,ErrorMessage:()=>Mo,Item:()=>ii,ItemControl:()=>si,ItemDescription:()=>ai,ItemIndicator:()=>li,ItemInput:()=>ci,ItemLabel:()=>ui,Label:()=>di,RadioGroup:()=>Ql,Root:()=>fi});var ni=t.createContext();function ri(){const e=t.useContext(ni);if(e===void 0)throw new Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");return e}var oi=t.createContext();function Gt(){const e=t.useContext(oi);if(e===void 0)throw new Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");return e}function ii(e){const n=Ut(),r=ri(),o=`${n.generateId("item")}-${t.createUniqueId()}`,i=z({id:o},e),[a,l]=t.splitProps(i,["value","disabled","onPointerDown"]),[c,s]=t.createSignal(),[d,m]=t.createSignal(),[f,u]=t.createSignal(),[g,h]=t.createSignal(),[v,p]=t.createSignal(!1),y=t.createMemo(()=>r.isSelectedValue(a.value)),b=t.createMemo(()=>a.disabled||n.isDisabled()||!1),w=T=>{J(T,a.onPointerDown),v()&&T.preventDefault()},x=t.createMemo(()=>({...n.dataset(),"data-disabled":b()?"":void 0,"data-checked":y()?"":void 0})),C={value:()=>a.value,dataset:x,isSelected:y,isDisabled:b,inputId:c,labelId:d,descriptionId:f,inputRef:g,select:()=>r.setSelectedValue(a.value),generateId:Bt(()=>l.id),registerInput:Ae(s),registerLabel:Ae(m),registerDescription:Ae(u),setIsFocused:p,setInputRef:h};return t.createComponent(oi.Provider,{value:C,get children(){return t.createComponent(ee,t.mergeProps({as:"div",role:"group",onPointerDown:w},x,l))}})}function si(e){const n=Gt(),r=z({id:n.generateId("control")},e),[o,i]=t.splitProps(r,["onClick","onKeyDown"]),a=c=>{var s;J(c,o.onClick),n.select(),(s=n.inputRef())==null||s.focus()},l=c=>{var s;J(c,o.onKeyDown),c.key===Rn.Space&&(n.select(),(s=n.inputRef())==null||s.focus())};return t.createComponent(ee,t.mergeProps({as:"div",onClick:a,onKeyDown:l},()=>n.dataset(),i))}function ai(e){const n=Gt(),r=z({id:n.generateId("description")},e);return t.createEffect(()=>t.onCleanup(n.registerDescription(r.id))),t.createComponent(ee,t.mergeProps({as:"div"},()=>n.dataset(),r))}function li(e){const n=Gt(),r=z({id:n.generateId("indicator")},e),[o,i]=t.splitProps(r,["ref","forceMount"]),[a,l]=t.createSignal(),{present:c}=No({show:()=>o.forceMount||n.isSelected(),element:()=>a()??null});return t.createComponent(t.Show,{get when(){return c()},get children(){return t.createComponent(ee,t.mergeProps({as:"div",ref(s){const d=he(l,o.ref);typeof d=="function"&&d(s)}},()=>n.dataset(),i))}})}function ci(e){const n=Ut(),r=ri(),o=Gt(),i=z({id:o.generateId("input")},e),[a,l]=t.splitProps(i,["ref","style","aria-labelledby","aria-describedby","onChange","onFocus","onBlur"]),c=()=>[a["aria-labelledby"],o.labelId(),a["aria-labelledby"]!=null&&l["aria-label"]!=null?l.id:void 0].filter(Boolean).join(" ")||void 0,s=()=>[a["aria-describedby"],o.descriptionId(),r.ariaDescribedBy()].filter(Boolean).join(" ")||void 0,[d,m]=t.createSignal(!1),f=h=>{if(J(h,a.onChange),h.stopPropagation(),!d()){r.setSelectedValue(o.value());const v=h.target;v.checked=o.isSelected()}m(!1)},u=h=>{J(h,a.onFocus),o.setIsFocused(!0)},g=h=>{J(h,a.onBlur),o.setIsFocused(!1)};return t.createEffect(t.on([()=>o.isSelected(),()=>o.value()],h=>{if(!h[0]&&h[1]===o.value())return;m(!0);const v=o.inputRef();v==null||v.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),v==null||v.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))},{defer:!0})),t.createEffect(()=>t.onCleanup(o.registerInput(l.id))),t.createComponent(ee,t.mergeProps({as:"input",ref(h){const v=he(o.setInputRef,a.ref);typeof v=="function"&&v(h)},type:"radio",get name(){return n.name()},get value(){return o.value()},get checked(){return o.isSelected()},get required(){return n.isRequired()},get disabled(){return o.isDisabled()},get readonly(){return n.isReadOnly()},get style(){return un({...Eo},a.style)},get"aria-labelledby"(){return c()},get"aria-describedby"(){return s()},onChange:f,onFocus:u,onBlur:g},()=>o.dataset(),l))}function ui(e){const n=Gt(),r=z({id:n.generateId("label")},e);return t.createEffect(()=>t.onCleanup(n.registerLabel(r.id))),t.createComponent(ee,t.mergeProps({as:"label",get for(){return n.inputId()}},()=>n.dataset(),r))}function di(e){return t.createComponent(oa,t.mergeProps({as:"span"},e))}function fi(e){let n;const r=`radiogroup-${t.createUniqueId()}`,o=z({id:r,orientation:"vertical"},e),[i,a,l]=t.splitProps(o,["ref","value","defaultValue","onChange","orientation","aria-labelledby","aria-describedby"],na),[c,s]=Ht({value:()=>i.value,defaultValue:()=>i.defaultValue,onChange:h=>{var v;return(v=i.onChange)==null?void 0:v.call(i,h)}}),{formControlContext:d}=ra(a);ia(()=>n,()=>s(i.defaultValue??""));const m=()=>d.getAriaLabelledBy(k(a.id),l["aria-label"],i["aria-labelledby"]),f=()=>d.getAriaDescribedBy(i["aria-describedby"]),u=h=>h===c(),g={ariaDescribedBy:f,isSelectedValue:u,setSelectedValue:h=>{if(!(d.isReadOnly()||d.isDisabled())&&(s(h),n))for(const v of n.querySelectorAll("[type='radio']")){const p=v;p.checked=u(p.value)}}};return t.createComponent(ko.Provider,{value:d,get children(){return t.createComponent(ni.Provider,{value:g,get children(){return t.createComponent(ee,t.mergeProps({as:"div",ref(h){const v=he(p=>n=p,i.ref);typeof v=="function"&&v(h)},role:"radiogroup",get id(){return k(a.id)},get"aria-invalid"(){return d.validationState()==="invalid"||void 0},get"aria-required"(){return d.isRequired()||void 0},get"aria-disabled"(){return d.isDisabled()||void 0},get"aria-readonly"(){return d.isReadOnly()||void 0},get"aria-orientation"(){return i.orientation},get"aria-labelledby"(){return m()},get"aria-describedby"(){return f()}},()=>d.dataset(),l))}})}})}var Ql=Object.assign(fi,{Description:Ao,ErrorMessage:Mo,Item:ii,ItemControl:si,ItemDescription:ai,ItemIndicator:li,ItemInput:ci,ItemLabel:ui,Label:di}),Yl=class{constructor(e,n,r){Ce(this,"collection");Ce(this,"ref");Ce(this,"collator");this.collection=e,this.ref=n,this.collator=r}getKeyBelow(e){let n=this.collection().getKeyAfter(e);for(;n!=null;){const r=this.collection().getItem(n);if(r&&r.type==="item"&&!r.disabled)return n;n=this.collection().getKeyAfter(n)}}getKeyAbove(e){let n=this.collection().getKeyBefore(e);for(;n!=null;){const r=this.collection().getItem(n);if(r&&r.type==="item"&&!r.disabled)return n;n=this.collection().getKeyBefore(n)}}getFirstKey(){let e=this.collection().getFirstKey();for(;e!=null;){const n=this.collection().getItem(e);if(n&&n.type==="item"&&!n.disabled)return e;e=this.collection().getKeyAfter(e)}}getLastKey(){let e=this.collection().getLastKey();for(;e!=null;){const n=this.collection().getItem(e);if(n&&n.type==="item"&&!n.disabled)return e;e=this.collection().getKeyBefore(e)}}getItem(e){var n,r;return((r=(n=this.ref)==null?void 0:n.call(this))==null?void 0:r.querySelector(`[data-key="${e}"]`))??null}getKeyPageAbove(e){var a;const n=(a=this.ref)==null?void 0:a.call(this);let r=this.getItem(e);if(!n||!r)return;const o=Math.max(0,r.offsetTop+r.offsetHeight-n.offsetHeight);let i=e;for(;i&&r&&r.offsetTop>o;)i=this.getKeyAbove(i),r=i!=null?this.getItem(i):null;return i}getKeyPageBelow(e){var a;const n=(a=this.ref)==null?void 0:a.call(this);let r=this.getItem(e);if(!n||!r)return;const o=Math.min(n.scrollHeight,r.offsetTop-r.offsetHeight+n.offsetHeight);let i=e;for(;i&&r&&r.offsetTop<o;)i=this.getKeyBelow(i),r=i!=null?this.getItem(i):null;return i}getKeyForSearch(e,n){var i;const r=(i=this.collator)==null?void 0:i.call(this);if(!r)return;let o=n!=null?this.getKeyBelow(n):this.getFirstKey();for(;o!=null;){const a=this.collection().getItem(o);if(a){const l=a.textValue.slice(0,e.length);if(a.textValue&&r.compare(l,e)===0)return o}o=this.getKeyBelow(o)}}};function Xl(e,n,r){const o=ka({usage:"search",sensitivity:"base"}),i=t.createMemo(()=>{const a=k(e.keyboardDelegate);return a||new Yl(e.collection,n,o)});return Ia({selectionManager:()=>k(e.selectionManager),keyboardDelegate:i,autoFocus:()=>k(e.autoFocus),deferAutoFocus:()=>k(e.deferAutoFocus),shouldFocusWrap:()=>k(e.shouldFocusWrap),disallowEmptySelection:()=>k(e.disallowEmptySelection),selectOnFocus:()=>k(e.selectOnFocus),disallowTypeAhead:()=>k(e.disallowTypeAhead),shouldUseVirtualFocus:()=>k(e.shouldUseVirtualFocus),allowsTabNavigation:()=>k(e.allowsTabNavigation),isVirtualized:()=>k(e.isVirtualized),scrollToKey:a=>{var l;return(l=k(e.scrollToKey))==null?void 0:l(a)},orientation:()=>k(e.orientation)},n)}var Cn="focusScope.autoFocusOnMount",Sn="focusScope.autoFocusOnUnmount",Qr={bubbles:!1,cancelable:!0},Yr={stack:[],active(){return this.stack[0]},add(e){var n;e!==this.active()&&((n=this.active())==null||n.pause()),this.stack=An(this.stack,e),this.stack.unshift(e)},remove(e){var n;this.stack=An(this.stack,e),(n=this.active())==null||n.resume()}};function Zl(e,n){const[r,o]=t.createSignal(!1),i={pause(){o(!0)},resume(){o(!1)}};let a=null;const l=h=>{var v;return(v=e.onMountAutoFocus)==null?void 0:v.call(e,h)},c=h=>{var v;return(v=e.onUnmountAutoFocus)==null?void 0:v.call(e,h)},s=()=>Re(n()),d=()=>{const h=s().createElement("span");return h.setAttribute("data-focus-trap",""),h.tabIndex=0,Object.assign(h.style,Eo),h},m=()=>{const h=n();return h?So(h,!0).filter(v=>!v.hasAttribute("data-focus-trap")):[]},f=()=>{const h=m();return h.length>0?h[0]:null},u=()=>{const h=m();return h.length>0?h[h.length-1]:null},g=()=>{const h=n();if(!h)return!1;const v=qt(h);return!v||ke(h,v)?!1:$o(v)};t.createEffect(()=>{const h=n();if(!h)return;Yr.add(i);const v=qt(h);if(!ke(h,v)){const y=new CustomEvent(Cn,Qr);h.addEventListener(Cn,l),h.dispatchEvent(y),y.defaultPrevented||setTimeout(()=>{fe(f()),qt(h)===v&&fe(h)},0)}t.onCleanup(()=>{h.removeEventListener(Cn,l),setTimeout(()=>{const y=new CustomEvent(Sn,Qr);g()&&y.preventDefault(),h.addEventListener(Sn,c),h.dispatchEvent(y),y.defaultPrevented||fe(v??s().body),h.removeEventListener(Sn,c),Yr.remove(i)},0)})}),t.createEffect(()=>{const h=n();if(!h||!k(e.trapFocus)||r())return;const v=y=>{const b=y.target;b!=null&&b.closest(`[${rn}]`)||(ke(h,b)?a=b:fe(a))},p=y=>{const w=y.relatedTarget??qt(h);w!=null&&w.closest(`[${rn}]`)||ke(h,w)||fe(a)};s().addEventListener("focusin",v),s().addEventListener("focusout",p),t.onCleanup(()=>{s().removeEventListener("focusin",v),s().removeEventListener("focusout",p)})}),t.createEffect(()=>{const h=n();if(!h||!k(e.trapFocus)||r())return;const v=d();h.insertAdjacentElement("afterbegin",v);const p=d();h.insertAdjacentElement("beforeend",p);function y(w){const x=f(),C=u();w.relatedTarget===x?fe(C):fe(x)}v.addEventListener("focusin",y),p.addEventListener("focusin",y);const b=new MutationObserver(w=>{for(const x of w)x.previousSibling===p&&(p.remove(),h.insertAdjacentElement("beforeend",p)),x.nextSibling===v&&(v.remove(),h.insertAdjacentElement("afterbegin",v))});b.observe(h,{childList:!0,subtree:!1}),t.onCleanup(()=>{v.removeEventListener("focusin",y),p.removeEventListener("focusin",y),v.remove(),p.remove(),b.disconnect()})})}var Jl="data-live-announcer";function ec(e){t.createEffect(()=>{k(e.isDisabled)||t.onCleanup(tc(k(e.targets),k(e.root)))})}var It=new WeakMap,$e=[];function tc(e,n=document.body){const r=new Set(e),o=new Set,i=s=>{for(const u of s.querySelectorAll(`[${Jl}], [${rn}]`))r.add(u);const d=u=>{if(r.has(u)||u.parentElement&&o.has(u.parentElement)&&u.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(const g of r)if(u.contains(g))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},m=document.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,{acceptNode:d}),f=d(s);if(f===NodeFilter.FILTER_ACCEPT&&a(s),f!==NodeFilter.FILTER_REJECT){let u=m.nextNode();for(;u!=null;)a(u),u=m.nextNode()}},a=s=>{const d=It.get(s)??0;s.getAttribute("aria-hidden")==="true"&&d===0||(d===0&&s.setAttribute("aria-hidden","true"),o.add(s),It.set(s,d+1))};$e.length&&$e[$e.length-1].disconnect(),i(n);const l=new MutationObserver(s=>{for(const d of s)if(!(d.type!=="childList"||d.addedNodes.length===0)&&![...r,...o].some(m=>m.contains(d.target))){for(const m of d.removedNodes)m instanceof Element&&(r.delete(m),o.delete(m));for(const m of d.addedNodes)(m instanceof HTMLElement||m instanceof SVGElement)&&(m.dataset.liveAnnouncer==="true"||m.dataset.reactAriaTopLayer==="true")?r.add(m):m instanceof Element&&i(m)}});l.observe(n,{childList:!0,subtree:!0});const c={observe(){l.observe(n,{childList:!0,subtree:!0})},disconnect(){l.disconnect()}};return $e.push(c),()=>{l.disconnect();for(const s of o){const d=It.get(s);if(d==null)return;d===1?(s.removeAttribute("aria-hidden"),It.delete(s)):It.set(s,d-1)}c===$e[$e.length-1]?($e.pop(),$e.length&&$e[$e.length-1].observe()):$e.splice($e.indexOf(c),1)}}var Jt=new Map,nc=e=>{t.createEffect(()=>{const n=de(e.style)??{},r=de(e.properties)??[],o={};for(const a in n)o[a]=e.element.style[a];const i=Jt.get(e.key);i?i.activeCount++:Jt.set(e.key,{activeCount:1,originalStyles:o,properties:r.map(a=>a.key)}),Object.assign(e.element.style,e.style);for(const a of r)e.element.style.setProperty(a.key,a.value);t.onCleanup(()=>{var l;const a=Jt.get(e.key);if(a){if(a.activeCount!==1){a.activeCount--;return}Jt.delete(e.key);for(const[c,s]of Object.entries(a.originalStyles))e.element.style[c]=s;for(const c of a.properties)e.element.style.removeProperty(c);e.element.style.length===0&&e.element.removeAttribute("style"),(l=e.cleanup)==null||l.call(e)}})})},Xr=nc,rc=(e,n)=>{switch(n){case"x":return[e.clientWidth,e.scrollLeft,e.scrollWidth];case"y":return[e.clientHeight,e.scrollTop,e.scrollHeight]}},oc=(e,n)=>{const r=getComputedStyle(e),o=n==="x"?r.overflowX:r.overflowY;return o==="auto"||o==="scroll"||e.tagName==="HTML"&&o==="visible"},ic=(e,n,r)=>{const o=n==="x"&&window.getComputedStyle(e).direction==="rtl"?-1:1;let i=e,a=0,l=0,c=!1;do{const[s,d,m]=rc(i,n),f=m-s-o*d;(d!==0||f!==0)&&oc(i,n)&&(a+=f,l+=d),i===(r??document.documentElement)?c=!0:i=i._$host??i.parentElement}while(i&&!c);return[a,l]},[Zr,Jr]=t.createSignal([]),sc=e=>Zr().indexOf(e)===Zr().length-1,ac=e=>{const n=t.mergeProps({element:null,enabled:!0,hideScrollbar:!0,preventScrollbarShift:!0,preventScrollbarShiftMode:"padding",restoreScrollPosition:!0,allowPinchZoom:!1},e),r=t.createUniqueId();let o=[0,0],i=null,a=null;t.createEffect(()=>{de(n.enabled)&&(Jr(d=>[...d,r]),t.onCleanup(()=>{Jr(d=>d.filter(m=>m!==r))}))}),t.createEffect(()=>{if(!de(n.enabled)||!de(n.hideScrollbar))return;const{body:d}=document,m=window.innerWidth-d.offsetWidth;if(de(n.preventScrollbarShift)){const f={overflow:"hidden"},u=[];m>0&&(de(n.preventScrollbarShiftMode)==="padding"?f.paddingRight=`calc(${window.getComputedStyle(d).paddingRight} + ${m}px)`:f.marginRight=`calc(${window.getComputedStyle(d).marginRight} + ${m}px)`,u.push({key:"--scrollbar-width",value:`${m}px`}));const g=window.scrollY,h=window.scrollX;Xr({key:"prevent-scroll",element:d,style:f,properties:u,cleanup:()=>{de(n.restoreScrollPosition)&&m>0&&window.scrollTo(h,g)}})}else Xr({key:"prevent-scroll",element:d,style:{overflow:"hidden"}})}),t.createEffect(()=>{!sc(r)||!de(n.enabled)||(document.addEventListener("wheel",c,{passive:!1}),document.addEventListener("touchstart",l,{passive:!1}),document.addEventListener("touchmove",s,{passive:!1}),t.onCleanup(()=>{document.removeEventListener("wheel",c),document.removeEventListener("touchstart",l),document.removeEventListener("touchmove",s)}))});const l=d=>{o=eo(d),i=null,a=null},c=d=>{const m=d.target,f=de(n.element),u=lc(d),g=Math.abs(u[0])>Math.abs(u[1])?"x":"y",h=g==="x"?u[0]:u[1],v=to(m,g,h,f);let p;f&&Ln(f,m)?p=!v:p=!0,p&&d.cancelable&&d.preventDefault()},s=d=>{const m=de(n.element),f=d.target;let u;if(d.touches.length===2)u=!de(n.allowPinchZoom);else{if(i==null||a===null){const g=eo(d).map((v,p)=>o[p]-v),h=Math.abs(g[0])>Math.abs(g[1])?"x":"y";i=h,a=h==="x"?g[0]:g[1]}if(f.type==="range")u=!1;else{const g=to(f,i,a,m);m&&Ln(m,f)?u=!g:u=!0}}u&&d.cancelable&&d.preventDefault()}},lc=e=>[e.deltaX,e.deltaY],eo=e=>e.changedTouches[0]?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0],to=(e,n,r,o)=>{const i=o!==null&&Ln(o,e),[a,l]=ic(e,n,i?o:void 0);return!(r>0&&Math.abs(a)<=1||r<0&&Math.abs(l)<1)},Ln=(e,n)=>{if(e.contains(n))return!0;let r=n;for(;r;){if(r===e)return!0;r=r._$host??r.parentElement}return!1},cc=ac,uc=cc,gi=t.createContext();function hi(){return t.useContext(gi)}function Ze(){const e=hi();if(e===void 0)throw new Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");return e}var mi=t.createContext();function Zn(){const e=t.useContext(mi);if(e===void 0)throw new Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");return e}var pi=t.createContext();function ze(){const e=t.useContext(pi);if(e===void 0)throw new Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");return e}function Jn(e){let n;const r=ze(),o=Ze(),i=z({id:r.generateId(`item-${t.createUniqueId()}`)},e),[a,l]=t.splitProps(i,["ref","textValue","disabled","closeOnSelect","checked","indeterminate","onSelect","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]),[c,s]=t.createSignal(),[d,m]=t.createSignal(),[f,u]=t.createSignal(),g=()=>o.listState().selectionManager(),h=()=>l.id,v=()=>g().focusedKey()===h(),p=()=>{var S;(S=a.onSelect)==null||S.call(a),a.closeOnSelect&&setTimeout(()=>{o.close(!0)})};ya({getItem:()=>{var S;return{ref:()=>n,type:"item",key:h(),textValue:a.textValue??((S=f())==null?void 0:S.textContent)??(n==null?void 0:n.textContent)??"",disabled:a.disabled??!1}}});const y=Ro({key:h,selectionManager:g,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>a.disabled},()=>n),b=S=>{J(S,a.onPointerMove),S.pointerType==="mouse"&&(a.disabled?o.onItemLeave(S):(o.onItemEnter(S),S.defaultPrevented||(fe(S.currentTarget),o.listState().selectionManager().setFocused(!0),o.listState().selectionManager().setFocusedKey(h()))))},w=S=>{J(S,a.onPointerLeave),S.pointerType==="mouse"&&o.onItemLeave(S)},x=S=>{J(S,a.onPointerUp),!a.disabled&&S.button===0&&p()},C=S=>{if(J(S,a.onKeyDown),!S.repeat&&!a.disabled)switch(S.key){case"Enter":case" ":p();break}},T=t.createMemo(()=>{if(a.indeterminate)return"mixed";if(a.checked!=null)return a.checked}),E=t.createMemo(()=>({"data-indeterminate":a.indeterminate?"":void 0,"data-checked":a.checked&&!a.indeterminate?"":void 0,"data-disabled":a.disabled?"":void 0,"data-highlighted":v()?"":void 0})),F={isChecked:()=>a.checked,dataset:E,setLabelRef:u,generateId:Bt(()=>l.id),registerLabel:Ae(s),registerDescription:Ae(m)};return t.createComponent(mi.Provider,{value:F,get children(){return t.createComponent(ee,t.mergeProps({as:"div",ref(S){const M=he(I=>n=I,a.ref);typeof M=="function"&&M(S)},get tabIndex(){return y.tabIndex()},get"aria-checked"(){return T()},get"aria-disabled"(){return a.disabled},get"aria-labelledby"(){return c()},get"aria-describedby"(){return d()},get"data-key"(){return y.dataKey()},get onPointerDown(){return ae([a.onPointerDown,y.onPointerDown])},get onPointerUp(){return ae([x,y.onPointerUp])},get onClick(){return ae([a.onClick,y.onClick])},get onKeyDown(){return ae([C,y.onKeyDown])},get onMouseDown(){return ae([a.onMouseDown,y.onMouseDown])},get onFocus(){return ae([a.onFocus,y.onFocus])},onPointerMove:b,onPointerLeave:w},E,l))}})}function vi(e){const n=z({closeOnSelect:!1},e),[r,o]=t.splitProps(n,["checked","defaultChecked","onChange","onSelect"]),i=ca({isSelected:()=>r.checked,defaultIsSelected:()=>r.defaultChecked,onSelectedChange:l=>{var c;return(c=r.onChange)==null?void 0:c.call(r,l)},isDisabled:()=>o.disabled}),a=()=>{var l;(l=r.onSelect)==null||l.call(r),i.toggle()};return t.createComponent(Jn,t.mergeProps({role:"menuitemcheckbox",get checked(){return i.isSelected()},onSelect:a},o))}var dc=t.createContext();function pn(){return t.useContext(dc)}var Kt={next:(e,n)=>e==="ltr"?n==="horizontal"?"ArrowRight":"ArrowDown":n==="horizontal"?"ArrowLeft":"ArrowUp",previous:(e,n)=>Kt.next(e==="ltr"?"rtl":"ltr",n)},no={first:e=>e==="horizontal"?"ArrowDown":"ArrowRight",last:e=>e==="horizontal"?"ArrowUp":"ArrowLeft"};function yi(e){const n=ze(),r=Ze(),o=pn(),{direction:i}=at(),a=z({id:n.generateId("trigger")},e),[l,c]=t.splitProps(a,["ref","id","disabled","onPointerDown","onClick","onKeyDown","onMouseOver","onFocus"]);let s=()=>n.value();o!==void 0&&(s=()=>n.value()??l.id,o.lastValue()===void 0&&o.setLastValue(s));const d=fn(()=>r.triggerRef(),()=>"button"),m=t.createMemo(()=>{var y;return d()==="a"&&((y=r.triggerRef())==null?void 0:y.getAttribute("href"))!=null});t.createEffect(t.on(()=>o==null?void 0:o.value(),y=>{var b;m()&&y===s()&&((b=r.triggerRef())==null||b.focus())}));const f=()=>{o!==void 0?r.isOpen()?o.value()===s()&&o.closeMenu():(o.autoFocusMenu()||o.setAutoFocusMenu(!0),r.open(!1)):r.toggle(!0)},u=y=>{J(y,l.onPointerDown),y.currentTarget.dataset.pointerType=y.pointerType,!l.disabled&&y.pointerType!=="touch"&&y.button===0&&f()},g=y=>{J(y,l.onClick),l.disabled||y.currentTarget.dataset.pointerType==="touch"&&f()},h=y=>{if(J(y,l.onKeyDown),!l.disabled){if(m())switch(y.key){case"Enter":case" ":return}switch(y.key){case"Enter":case" ":case no.first(n.orientation()):y.stopPropagation(),y.preventDefault(),ta(y.currentTarget),r.open("first"),o==null||o.setAutoFocusMenu(!0),o==null||o.setValue(s);break;case no.last(n.orientation()):y.stopPropagation(),y.preventDefault(),r.open("last");break;case Kt.next(i(),n.orientation()):if(o===void 0)break;y.stopPropagation(),y.preventDefault(),o.nextMenu();break;case Kt.previous(i(),n.orientation()):if(o===void 0)break;y.stopPropagation(),y.preventDefault(),o.previousMenu();break}}},v=y=>{var b;J(y,l.onMouseOver),((b=r.triggerRef())==null?void 0:b.dataset.pointerType)!=="touch"&&!l.disabled&&o!==void 0&&o.value()!==void 0&&o.setValue(s)},p=y=>{J(y,l.onFocus),o!==void 0&&y.currentTarget.dataset.pointerType!=="touch"&&o.setValue(s)};return t.createEffect(()=>t.onCleanup(r.registerTriggerId(l.id))),t.createComponent(Un,t.mergeProps({ref(y){const b=he(r.setTriggerRef,l.ref);typeof b=="function"&&b(y)},get"data-kb-menu-value-trigger"(){return n.value()},get id(){return l.id},get disabled(){return l.disabled},"aria-haspopup":"true",get"aria-expanded"(){return r.isOpen()},get"aria-controls"(){return t.memo(()=>!!r.isOpen())()?r.contentId():void 0},get"data-highlighted"(){return s()!==void 0&&(o==null?void 0:o.value())===s()?!0:void 0},get tabIndex(){return o!==void 0?o.value()===s()||o.lastValue()===s()?0:-1:void 0},onPointerDown:u,onMouseOver:v,onClick:g,onKeyDown:h,onFocus:p,role:o!==void 0?"menuitem":void 0},()=>r.dataset(),c))}var fc=t.createContext();function bi(){return t.useContext(fc)}function wi(e){let n;const r=ze(),o=Ze(),i=pn(),a=bi(),{direction:l}=at(),c=z({id:r.generateId(`content-${t.createUniqueId()}`)},e),[s,d]=t.splitProps(c,["ref","id","style","onOpenAutoFocus","onCloseAutoFocus","onEscapeKeyDown","onFocusOutside","onPointerEnter","onPointerMove","onKeyDown","onMouseDown","onFocusIn","onFocusOut"]);let m=0;const f=()=>o.parentMenuContext()==null&&i===void 0&&r.isModal(),u=Xl({selectionManager:o.listState().selectionManager,collection:o.listState().collection,autoFocus:o.autoFocus,deferAutoFocus:!0,shouldFocusWrap:!0,disallowTypeAhead:()=>!o.listState().selectionManager().isFocused(),orientation:()=>r.orientation()==="horizontal"?"vertical":"horizontal"},()=>n);Zl({trapFocus:()=>f()&&o.isOpen(),onMountAutoFocus:w=>{var x;i===void 0&&((x=s.onOpenAutoFocus)==null||x.call(s,w))},onUnmountAutoFocus:s.onCloseAutoFocus},()=>n);const g=w=>{if(ke(w.currentTarget,w.target)&&(w.key==="Tab"&&o.isOpen()&&w.preventDefault(),i!==void 0&&w.currentTarget.getAttribute("aria-haspopup")!=="true"))switch(w.key){case Kt.next(l(),r.orientation()):w.stopPropagation(),w.preventDefault(),o.close(!0),i.setAutoFocusMenu(!0),i.nextMenu();break;case Kt.previous(l(),r.orientation()):if(w.currentTarget.hasAttribute("data-closed"))break;w.stopPropagation(),w.preventDefault(),o.close(!0),i.setAutoFocusMenu(!0),i.previousMenu();break}},h=w=>{var x;(x=s.onEscapeKeyDown)==null||x.call(s,w),i==null||i.setAutoFocusMenu(!1),o.close(!0)},v=w=>{var x;(x=s.onFocusOutside)==null||x.call(s,w),r.isModal()&&w.preventDefault()},p=w=>{var x,C;J(w,s.onPointerEnter),o.isOpen()&&((x=o.parentMenuContext())==null||x.listState().selectionManager().setFocused(!1),(C=o.parentMenuContext())==null||C.listState().selectionManager().setFocusedKey(void 0))},y=w=>{if(J(w,s.onPointerMove),w.pointerType!=="mouse")return;const x=w.target,C=m!==w.clientX;ke(w.currentTarget,x)&&C&&(o.setPointerDir(w.clientX>m?"right":"left"),m=w.clientX)};t.createEffect(()=>t.onCleanup(o.registerContentId(s.id)));const b={ref:he(w=>{o.setContentRef(w),n=w},s.ref),role:"menu",get id(){return s.id},get tabIndex(){return u.tabIndex()},get"aria-labelledby"(){return o.triggerId()},onKeyDown:ae([s.onKeyDown,u.onKeyDown,g]),onMouseDown:ae([s.onMouseDown,u.onMouseDown]),onFocusIn:ae([s.onFocusIn,u.onFocusIn]),onFocusOut:ae([s.onFocusOut,u.onFocusOut]),onPointerEnter:p,onPointerMove:y,get"data-orientation"(){return r.orientation()}};return t.createComponent(t.Show,{get when(){return o.contentPresent()},get children(){return t.createComponent(t.Show,{get when(){return a===void 0||o.parentMenuContext()!=null},get fallback(){return t.createComponent(ee,t.mergeProps({as:"div"},()=>o.dataset(),b,d))},get children(){return t.createComponent(Jo.Positioner,{get children(){return t.createComponent(Wl,t.mergeProps({get disableOutsidePointerEvents(){return t.memo(()=>!!f())()&&o.isOpen()},get excludedElements(){return[o.triggerRef]},bypassTopMostLayerCheck:!0,get style(){return un({"--kb-menu-content-transform-origin":"var(--kb-popper-content-transform-origin)",position:"relative"},s.style)},onEscapeKeyDown:h,onFocusOutside:v,get onDismiss(){return o.close}},()=>o.dataset(),b,d))}})}})}})}function gc(e){let n;const r=ze(),o=Ze(),[i,a]=t.splitProps(e,["ref"]);return uc({element:()=>n??null,enabled:()=>o.contentPresent()&&r.preventScroll()}),t.createComponent(wi,t.mergeProps({ref(l){const c=he(s=>{n=s},i.ref);typeof c=="function"&&c(l)}},a))}var xi=t.createContext();function hc(){const e=t.useContext(xi);if(e===void 0)throw new Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");return e}function er(e){const n=ze(),r=z({id:n.generateId(`group-${t.createUniqueId()}`)},e),[o,i]=t.createSignal(),a={generateId:Bt(()=>r.id),registerLabelId:Ae(i)};return t.createComponent(xi.Provider,{value:a,get children(){return t.createComponent(ee,t.mergeProps({as:"div",role:"group",get"aria-labelledby"(){return o()}},r))}})}function Ci(e){const n=hc(),r=z({id:n.generateId("label")},e),[o,i]=t.splitProps(r,["id"]);return t.createEffect(()=>t.onCleanup(n.registerLabelId(o.id))),t.createComponent(ee,t.mergeProps({as:"span",get id(){return o.id},"aria-hidden":"true"},i))}function Si(e){const n=Ze(),r=z({children:"▼"},e);return t.createComponent(ee,t.mergeProps({as:"span","aria-hidden":"true"},()=>n.dataset(),r))}function $i(e){return t.createComponent(Jn,t.mergeProps({role:"menuitem",closeOnSelect:!0},e))}function Ei(e){const n=Zn(),r=z({id:n.generateId("description")},e),[o,i]=t.splitProps(r,["id"]);return t.createEffect(()=>t.onCleanup(n.registerDescription(o.id))),t.createComponent(ee,t.mergeProps({as:"div",get id(){return o.id}},()=>n.dataset(),i))}function ki(e){const n=Zn(),r=z({id:n.generateId("indicator")},e),[o,i]=t.splitProps(r,["forceMount"]);return t.createComponent(t.Show,{get when(){return o.forceMount||n.isChecked()},get children(){return t.createComponent(ee,t.mergeProps({as:"div"},()=>n.dataset(),i))}})}function Ai(e){const n=Zn(),r=z({id:n.generateId("label")},e),[o,i]=t.splitProps(r,["ref","id"]);return t.createEffect(()=>t.onCleanup(n.registerLabel(o.id))),t.createComponent(ee,t.mergeProps({as:"div",ref(a){const l=he(n.setLabelRef,o.ref);typeof l=="function"&&l(a)},get id(){return o.id}},()=>n.dataset(),i))}function Mi(e){const n=Ze();return t.createComponent(t.Show,{get when(){return n.contentPresent()},get children(){return t.createComponent(t.Portal,e)}})}var Pi=t.createContext();function mc(){const e=t.useContext(Pi);if(e===void 0)throw new Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");return e}function Di(e){const r=ze().generateId(`radiogroup-${t.createUniqueId()}`),o=z({id:r},e),[i,a]=t.splitProps(o,["value","defaultValue","onChange","disabled"]),[l,c]=Ht({value:()=>i.value,defaultValue:()=>i.defaultValue,onChange:d=>{var m;return(m=i.onChange)==null?void 0:m.call(i,d)}}),s={isDisabled:()=>i.disabled,isSelectedValue:d=>d===l(),setSelectedValue:c};return t.createComponent(Pi.Provider,{value:s,get children(){return t.createComponent(er,a)}})}function Ti(e){const n=mc(),r=z({closeOnSelect:!1},e),[o,i]=t.splitProps(r,["value","onSelect"]),a=()=>{var l;(l=o.onSelect)==null||l.call(o),n.setSelectedValue(o.value)};return t.createComponent(Jn,t.mergeProps({role:"menuitemradio",get checked(){return n.isSelectedValue(o.value)},onSelect:a},i))}function pc(e,n,r){const o=e.split("-")[0],i=r.getBoundingClientRect(),a=[],l=n.clientX,c=n.clientY;switch(o){case"top":a.push([l,c+5]),a.push([i.left,i.bottom]),a.push([i.left,i.top]),a.push([i.right,i.top]),a.push([i.right,i.bottom]);break;case"right":a.push([l-5,c]),a.push([i.left,i.top]),a.push([i.right,i.top]),a.push([i.right,i.bottom]),a.push([i.left,i.bottom]);break;case"bottom":a.push([l,c-5]),a.push([i.right,i.top]),a.push([i.right,i.bottom]),a.push([i.left,i.bottom]),a.push([i.left,i.top]);break;case"left":a.push([l+5,c]),a.push([i.right,i.bottom]),a.push([i.left,i.bottom]),a.push([i.left,i.top]),a.push([i.right,i.top]);break}return a}function vc(e,n){return n?ea([e.clientX,e.clientY],n):!1}function Fi(e){const n=ze(),r=To(),o=hi(),i=pn(),a=bi(),l=z({placement:n.orientation()==="horizontal"?"bottom-start":"right-start"},e),[c,s]=t.splitProps(l,["open","defaultOpen","onOpenChange"]);let d=0,m=null,f="right";const[u,g]=t.createSignal(),[h,v]=t.createSignal(),[p,y]=t.createSignal(),[b,w]=t.createSignal(),[x,C]=t.createSignal(!0),[T,E]=t.createSignal(s.placement),[F,S]=t.createSignal([]),[M,I]=t.createSignal([]),{DomCollectionProvider:q}=va({items:M,onItemsChange:I}),V=ti({open:()=>c.open,defaultOpen:()=>c.defaultOpen,onOpenChange:_=>{var ce;return(ce=c.onOpenChange)==null?void 0:ce.call(c,_)}}),{present:K}=No({show:()=>n.forceMount()||V.isOpen(),element:()=>b()??null}),Q=Oa({selectionMode:"none",dataSource:M}),L=_=>{C(_),V.open()},R=(_=!1)=>{V.close(),_&&o&&o.close(!0)},B=_=>{C(_),V.toggle()},X=()=>{const _=b();_&&(fe(_),Q.selectionManager().setFocused(!0),Q.selectionManager().setFocusedKey(void 0))},re=()=>{a!=null?setTimeout(()=>X()):X()},me=_=>{S(ue=>[...ue,_]);const ce=o==null?void 0:o.registerNestedMenu(_);return()=>{S(ue=>An(ue,_)),ce==null||ce()}},ne=_=>f===(m==null?void 0:m.side)&&vc(_,m==null?void 0:m.area),ge=_=>{ne(_)&&_.preventDefault()},A=_=>{ne(_)||re()},te=_=>{ne(_)&&_.preventDefault()};ec({isDisabled:()=>!(o==null&&V.isOpen()&&n.isModal()),targets:()=>[b(),...F()].filter(Boolean)}),t.createEffect(()=>{const _=b();if(!_||!o)return;const ce=o.registerNestedMenu(_);t.onCleanup(()=>{ce()})}),t.createEffect(()=>{o===void 0&&(i==null||i.registerMenu(n.value(),[b(),...F()]))}),t.createEffect(()=>{var _;o!==void 0||i===void 0||(i.value()===n.value()?((_=p())==null||_.focus(),i.autoFocusMenu()&&L(!0)):R())}),t.createEffect(()=>{o!==void 0||i===void 0||V.isOpen()&&i.setValue(n.value())}),t.onCleanup(()=>{o===void 0&&(i==null||i.unregisterMenu(n.value()))});const Je={dataset:t.createMemo(()=>({"data-expanded":V.isOpen()?"":void 0,"data-closed":V.isOpen()?void 0:""})),isOpen:V.isOpen,contentPresent:K,nestedMenus:F,currentPlacement:T,pointerGraceTimeoutId:()=>d,autoFocus:x,listState:()=>Q,parentMenuContext:()=>o,triggerRef:p,contentRef:b,triggerId:u,contentId:h,setTriggerRef:y,setContentRef:w,open:L,close:R,toggle:B,focusContent:re,onItemEnter:ge,onItemLeave:A,onTriggerLeave:te,setPointerDir:_=>f=_,setPointerGraceTimeoutId:_=>d=_,setPointerGraceIntent:_=>m=_,registerNestedMenu:me,registerItemToParentDomCollection:r==null?void 0:r.registerItem,registerTriggerId:Ae(g),registerContentId:Ae(v)};return t.createComponent(q,{get children(){return t.createComponent(gi.Provider,{value:Je,get children(){return t.createComponent(t.Show,{when:a===void 0,get fallback(){return s.children},get children(){return t.createComponent(Jo,t.mergeProps({anchorRef:p,contentRef:b,onCurrentPlacementChange:E},s))}})}})}})}function Ii(e){const{direction:n}=at();return t.createComponent(Fi,t.mergeProps({get placement(){return n()==="rtl"?"left-start":"right-start"},flip:!0},e))}var yc={close:(e,n)=>e==="ltr"?[n==="horizontal"?"ArrowLeft":"ArrowUp"]:[n==="horizontal"?"ArrowRight":"ArrowDown"]};function Li(e){const n=Ze(),r=ze(),[o,i]=t.splitProps(e,["onFocusOutside","onKeyDown"]),{direction:a}=at(),l=m=>{m.preventDefault()},c=m=>{m.preventDefault()},s=m=>{var u;(u=o.onFocusOutside)==null||u.call(o,m);const f=m.target;ke(n.triggerRef(),f)||n.close()},d=m=>{J(m,o.onKeyDown);const f=ke(m.currentTarget,m.target),u=yc.close(a(),r.orientation()).includes(m.key),g=n.parentMenuContext()!=null;f&&u&&g&&(n.close(),fe(n.triggerRef()))};return t.createComponent(wi,t.mergeProps({onOpenAutoFocus:l,onCloseAutoFocus:c,onFocusOutside:s,onKeyDown:d},i))}var ro=["Enter"," "],bc={open:(e,n)=>e==="ltr"?[...ro,n==="horizontal"?"ArrowRight":"ArrowDown"]:[...ro,n==="horizontal"?"ArrowLeft":"ArrowUp"]};function Oi(e){let n;const r=ze(),o=Ze(),i=z({id:r.generateId(`sub-trigger-${t.createUniqueId()}`)},e),[a,l]=t.splitProps(i,["ref","id","textValue","disabled","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]);let c=null;const s=()=>{c&&window.clearTimeout(c),c=null},{direction:d}=at(),m=()=>a.id,f=()=>{const w=o.parentMenuContext();if(w==null)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");return w.listState().selectionManager()},u=()=>o.listState().collection(),g=()=>f().focusedKey()===m(),h=Ro({key:m,selectionManager:f,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>a.disabled},()=>n),v=w=>{J(w,a.onClick),!o.isOpen()&&!a.disabled&&o.open(!0)},p=w=>{var C;if(J(w,a.onPointerMove),w.pointerType!=="mouse")return;const x=o.parentMenuContext();if(x==null||x.onItemEnter(w),!w.defaultPrevented){if(a.disabled){x==null||x.onItemLeave(w);return}!o.isOpen()&&!c&&((C=o.parentMenuContext())==null||C.setPointerGraceIntent(null),c=window.setTimeout(()=>{o.open(!1),s()},100)),x==null||x.onItemEnter(w),w.defaultPrevented||(o.listState().selectionManager().isFocused()&&(o.listState().selectionManager().setFocused(!1),o.listState().selectionManager().setFocusedKey(void 0)),fe(w.currentTarget),x==null||x.listState().selectionManager().setFocused(!0),x==null||x.listState().selectionManager().setFocusedKey(m()))}},y=w=>{if(J(w,a.onPointerLeave),w.pointerType!=="mouse")return;s();const x=o.parentMenuContext(),C=o.contentRef();if(C){x==null||x.setPointerGraceIntent({area:pc(o.currentPlacement(),w,C),side:o.currentPlacement().split("-")[0]}),window.clearTimeout(x==null?void 0:x.pointerGraceTimeoutId());const T=window.setTimeout(()=>{x==null||x.setPointerGraceIntent(null)},300);x==null||x.setPointerGraceTimeoutId(T)}else{if(x==null||x.onTriggerLeave(w),w.defaultPrevented)return;x==null||x.setPointerGraceIntent(null)}x==null||x.onItemLeave(w)},b=w=>{J(w,a.onKeyDown),!w.repeat&&(a.disabled||bc.open(d(),r.orientation()).includes(w.key)&&(w.stopPropagation(),w.preventDefault(),f().setFocused(!1),f().setFocusedKey(void 0),o.isOpen()||o.open("first"),o.focusContent(),o.listState().selectionManager().setFocused(!0),o.listState().selectionManager().setFocusedKey(u().getFirstKey())))};return t.createEffect(()=>{if(o.registerItemToParentDomCollection==null)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");const w=o.registerItemToParentDomCollection({ref:()=>n,type:"item",key:m(),textValue:a.textValue??(n==null?void 0:n.textContent)??"",disabled:a.disabled??!1});t.onCleanup(w)}),t.createEffect(t.on(()=>{var w;return(w=o.parentMenuContext())==null?void 0:w.pointerGraceTimeoutId()},w=>{t.onCleanup(()=>{var x;window.clearTimeout(w),(x=o.parentMenuContext())==null||x.setPointerGraceIntent(null)})})),t.createEffect(()=>t.onCleanup(o.registerTriggerId(a.id))),t.onCleanup(()=>{s()}),t.createComponent(ee,t.mergeProps({as:"div",ref(w){const x=he(C=>{o.setTriggerRef(C),n=C},a.ref);typeof x=="function"&&x(w)},get id(){return a.id},role:"menuitem",get tabIndex(){return h.tabIndex()},"aria-haspopup":"true",get"aria-expanded"(){return o.isOpen()},get"aria-controls"(){return t.memo(()=>!!o.isOpen())()?o.contentId():void 0},get"aria-disabled"(){return a.disabled},get"data-key"(){return h.dataKey()},get"data-highlighted"(){return g()?"":void 0},get"data-disabled"(){return a.disabled?"":void 0},get onPointerDown(){return ae([a.onPointerDown,h.onPointerDown])},get onPointerUp(){return ae([a.onPointerUp,h.onPointerUp])},get onClick(){return ae([v,h.onClick])},get onKeyDown(){return ae([b,h.onKeyDown])},get onMouseDown(){return ae([a.onMouseDown,h.onMouseDown])},get onFocus(){return ae([a.onFocus,h.onFocus])},onPointerMove:p,onPointerLeave:y},()=>o.dataset(),l))}function wc(e){const n=pn(),r=`menu-${t.createUniqueId()}`,o=z({id:r,modal:!0},e),[i,a]=t.splitProps(o,["id","modal","preventScroll","forceMount","open","defaultOpen","onOpenChange","value","orientation"]),l=ti({open:()=>i.open,defaultOpen:()=>i.defaultOpen,onOpenChange:s=>{var d;return(d=i.onOpenChange)==null?void 0:d.call(i,s)}}),c={isModal:()=>i.modal??!0,preventScroll:()=>i.preventScroll??c.isModal(),forceMount:()=>i.forceMount??!1,generateId:Bt(()=>i.id),value:()=>i.value,orientation:()=>i.orientation??(n==null?void 0:n.orientation())??"horizontal"};return t.createComponent(pi.Provider,{value:c,get children(){return t.createComponent(Fi,t.mergeProps({get open(){return l.isOpen()},get onOpenChange(){return l.setIsOpen}},a))}})}var xc={};gn(xc,{Root:()=>vn,Separator:()=>Cc});function vn(e){let n;const r=z({orientation:"horizontal"},e),[o,i]=t.splitProps(r,["ref","orientation"]),a=fn(()=>n,()=>"hr");return t.createComponent(ee,t.mergeProps({as:"hr",ref(l){const c=he(s=>n=s,o.ref);typeof c=="function"&&c(l)},get role(){return a()!=="hr"?"separator":void 0},get"aria-orientation"(){return o.orientation==="vertical"?"vertical":void 0},get"data-orientation"(){return o.orientation}},i))}var Cc=vn,j={};gn(j,{Arrow:()=>Xn,CheckboxItem:()=>vi,Content:()=>qi,DropdownMenu:()=>Sc,Group:()=>er,GroupLabel:()=>Ci,Icon:()=>Si,Item:()=>$i,ItemDescription:()=>Ei,ItemIndicator:()=>ki,ItemLabel:()=>Ai,Portal:()=>Mi,RadioGroup:()=>Di,RadioItem:()=>Ti,Root:()=>_i,Separator:()=>vn,Sub:()=>Ii,SubContent:()=>Li,SubTrigger:()=>Oi,Trigger:()=>yi});function qi(e){const n=ze(),r=Ze(),[o,i]=t.splitProps(e,["onCloseAutoFocus","onInteractOutside"]);let a=!1;const l=s=>{var d;(d=o.onCloseAutoFocus)==null||d.call(o,s),a||fe(r.triggerRef()),a=!1,s.preventDefault()},c=s=>{var d;(d=o.onInteractOutside)==null||d.call(o,s),(!n.isModal()||s.detail.isContextMenu)&&(a=!0)};return t.createComponent(gc,t.mergeProps({onCloseAutoFocus:l,onInteractOutside:c},i))}function _i(e){const n=`dropdownmenu-${t.createUniqueId()}`,r=z({id:n},e);return t.createComponent(wc,r)}var Sc=Object.assign(_i,{Arrow:Xn,CheckboxItem:vi,Content:qi,Group:er,GroupLabel:Ci,Icon:Si,Item:$i,ItemDescription:Ei,ItemIndicator:ki,ItemLabel:Ai,Portal:Mi,RadioGroup:Di,RadioItem:Ti,Separator:vn,Sub:Ii,SubContent:Li,SubTrigger:Oi,Trigger:yi}),$={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{90:"e5",80:"cc"},font:{size:{xs:"calc(var(--tsqd-font-size) * 0.75)",sm:"calc(var(--tsqd-font-size) * 0.875)",md:"var(--tsqd-font-size)"},lineHeight:{xs:"calc(var(--tsqd-font-size) * 1)",sm:"calc(var(--tsqd-font-size) * 1.25)",md:"calc(var(--tsqd-font-size) * 1.5)"},weight:{medium:"500",semibold:"600",bold:"700"}},border:{radius:{xs:"calc(var(--tsqd-font-size) * 0.125)",sm:"calc(var(--tsqd-font-size) * 0.25)",full:"9999px"}},size:{.25:"calc(var(--tsqd-font-size) * 0.0625)",.5:"calc(var(--tsqd-font-size) * 0.125)",1:"calc(var(--tsqd-font-size) * 0.25)",1.5:"calc(var(--tsqd-font-size) * 0.375)",2:"calc(var(--tsqd-font-size) * 0.5)",2.5:"calc(var(--tsqd-font-size) * 0.625)",3:"calc(var(--tsqd-font-size) * 0.75)",3.5:"calc(var(--tsqd-font-size) * 0.875)",4:"calc(var(--tsqd-font-size) * 1)",4.5:"calc(var(--tsqd-font-size) * 1.125)",5:"calc(var(--tsqd-font-size) * 1.25)",6:"calc(var(--tsqd-font-size) * 1.5)",6.5:"calc(var(--tsqd-font-size) * 1.625)",14:"calc(var(--tsqd-font-size) * 3.5)"},shadow:{xs:(e="rgb(0 0 0 / 0.1)")=>"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:(e="rgb(0 0 0 / 0.1)")=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e="rgb(0 0 0 / 0.1)")=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e="rgb(0 0 0 / 0.1)")=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e="rgb(0 0 0 / 0.1)")=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e="rgb(0 0 0 / 0.25)")=>`0 25px 50px -12px ${e}`,inner:(e="rgb(0 0 0 / 0.05)")=>`inset 0 2px 4px 0 ${e}`,none:()=>"none"}},$c=t.template('<svg width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13 13L9.00007 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),Ec=t.template('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),kc=t.template('<svg width=10 height=6 viewBox="0 0 10 6"fill=none xmlns=http://www.w3.org/2000/svg><path d="M1 1L5 5L9 1"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),Ac=t.template('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 13.3333V2.66667M8 2.66667L4 6.66667M8 2.66667L12 6.66667"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),tr=t.template('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),Mc=t.template('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Pc=t.template('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 15.844a10.424 10.424 0 0 1-4.306.925c-5.779 0-10.463-4.684-10.463-10.462 0-1.536.33-2.994.925-4.307A10.464 10.464 0 0 0 2 11.538C2 17.316 6.684 22 12.462 22c4.243 0 7.896-2.526 9.538-6.156Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Dc=t.template('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 21h8m-4-4v4m-5.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Tc=t.template('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z">'),Fc=t.template('<svg stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"></path><path d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z">'),Ic=t.template('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Lc=t.template('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Oc=t.template('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>'),qc=t.template('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M2.5 21.4998L8.04927 19.3655C8.40421 19.229 8.58168 19.1607 8.74772 19.0716C8.8952 18.9924 9.0358 18.901 9.16804 18.7984C9.31692 18.6829 9.45137 18.5484 9.72028 18.2795L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99981C19.8955 1.89525 18.1046 1.89524 17 2.99981L5.72028 14.2795C5.45138 14.5484 5.31692 14.6829 5.20139 14.8318C5.09877 14.964 5.0074 15.1046 4.92823 15.2521C4.83911 15.4181 4.77085 15.5956 4.63433 15.9506L2.5 21.4998ZM2.5 21.4998L4.55812 16.1488C4.7054 15.7659 4.77903 15.5744 4.90534 15.4867C5.01572 15.4101 5.1523 15.3811 5.2843 15.4063C5.43533 15.4351 5.58038 15.5802 5.87048 15.8703L8.12957 18.1294C8.41967 18.4195 8.56472 18.5645 8.59356 18.7155C8.61877 18.8475 8.58979 18.9841 8.51314 19.0945C8.42545 19.2208 8.23399 19.2944 7.85107 19.4417L2.5 21.4998Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Ri=t.template('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),_c=t.template('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Rc=t.template('<svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 xmlns=http://www.w3.org/2000/svg><rect class=list width=20 height=20 y=2 x=2 rx=2></rect><line class=list-item y1=7 y2=7 x1=6 x2=18></line><line class=list-item y2=12 y1=12 x1=6 x2=18></line><line class=list-item y1=17 y2=17 x1=6 x2=18>'),Nc=t.template('<svg viewBox="0 0 24 24"height=20 width=20 fill=none xmlns=http://www.w3.org/2000/svg><path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),zc=t.template('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Kc=t.template('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><animateTransform attributeName=transform attributeType=XML type=rotate from=0 to=360 dur=2s repeatCount=indefinite>'),Bc=t.template('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Uc=t.template('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.5 15V9M14.5 15V9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Hc=t.template('<svg version=1.0 viewBox="0 0 633 633"><linearGradient x1=-666.45 x2=-666.45 y1=163.28 y2=163.99 gradientTransform="matrix(633 0 0 633 422177 -103358)"gradientUnits=userSpaceOnUse><stop stop-color=#6BDAFF offset=0></stop><stop stop-color=#F9FFB5 offset=.32></stop><stop stop-color=#FFA770 offset=.71></stop><stop stop-color=#FF7373 offset=1></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5></circle><defs><filter x=-137.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=316.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=316.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=316.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=272.2 y=308 width=176.9 height=129.3 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=272.2 y=308 width=176.9 height=129.3 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><line x1=436 x2=431 y1=403.2 y2=431.8 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=291 x2=280 y1=341.5 y2=403.5 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=332.9 x2=328.6 y1=384.1 y2=411.2 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><linearGradient x1=-670.75 x2=-671.59 y1=164.4 y2=164.49 gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)"gradientUnits=userSpaceOnUse><stop stop-color=#EE2700 offset=0></stop><stop stop-color=#FF008E offset=1></stop></linearGradient><path d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd fill-rule=evenodd></path><line x1=428.2 x2=429.1 y1=384.5 y2=378 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=395.2 x2=396.1 y1=379.5 y2=373 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=362.2 x2=363.1 y1=373.5 y2=367.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=324.2 x2=328.4 y1=351.3 y2=347.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=303.2 x2=307.4 y1=331.3 y2=327.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line></g><defs><filter x=73.2 y=113.8 width=280.6 height=317.4 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=73.2 y=113.8 width=280.6 height=317.4 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-672.16 x2=-672.16 y1=165.03 y2=166.03 gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)"gradientUnits=userSpaceOnUse><stop stop-color=#A17500 offset=0></stop><stop stop-color=#5D2100 offset=1></stop></linearGradient><path d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6"clip-rule=evenodd fill-rule=evenodd></path><g stroke=#2F8A00><linearGradient x1=-660.23 x2=-660.23 y1=166.72 y2=167.72 gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-661.36 x2=-661.36 y1=164.18 y2=165.18 gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.79 x2=-656.79 y1=165.15 y2=166.15 gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-663.07 x2=-663.07 y1=165.44 y2=166.44 gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-662.57 x2=-662.57 y1=164.44 y2=165.44 gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.43 x2=-656.43 y1=163.86 y2=164.86 gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><path d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1"fill=none stroke-linecap=round stroke-width=8></path><path d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8"fill=none stroke-linecap=round stroke-width=8></path><path d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9"fill=none stroke-linecap=round stroke-width=8></path><path d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32"fill=none stroke-linecap=round stroke-width=8></path></g></g><defs><filter x=50.5 y=399 width=532 height=633 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=50.5 y=399 width=532 height=633 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-666.06 x2=-666.23 y1=163.36 y2=163.75 gradientTransform="matrix(532 0 0 633 354760 -102959)"gradientUnits=userSpaceOnUse><stop stop-color=#FFF400 offset=0></stop><stop stop-color=#3C8700 offset=1></stop></linearGradient><ellipse cx=316.5 cy=715.5 rx=266 ry=316.5></ellipse></g><defs><filter x=391 y=-24 width=288 height=283 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=391 y=-24 width=288 height=283 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-664.56 x2=-664.56 y1=163.79 y2=164.79 gradientTransform="matrix(227 0 0 227 151421 -37204)"gradientUnits=userSpaceOnUse><stop stop-color=#FFDF00 offset=0></stop><stop stop-color=#FF9D00 offset=1></stop></linearGradient><circle cx=565.5 cy=89.5 r=113.5></circle><linearGradient x1=-644.5 x2=-645.77 y1=342 y2=342 gradientTransform="matrix(30 0 0 1 19770 -253)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=427 x2=397 y1=89 y2=89 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-641.56 x2=-642.83 y1=196.02 y2=196.07 gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=430.5 x2=404 y1=55.5 y2=50 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-643.73 x2=-645 y1=185.83 y2=185.9 gradientTransform="matrix(29 0 0 8 19107 -1361)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=431 x2=402 y1=122 y2=130 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-638.94 x2=-640.22 y1=177.09 y2=177.39 gradientTransform="matrix(24 0 0 13 15783 -2145)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=442 x2=418 y1=153 y2=166 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-633.42 x2=-634.7 y1=172.41 y2=173.31 gradientTransform="matrix(20 0 0 19 13137 -3096)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=464 x2=444 y1=180 y2=199 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-619.05 x2=-619.52 y1=170.82 y2=171.82 gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=491.4 x2=477.5 y1=203 y2=225.9 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-578.5 x2=-578.63 y1=170.31 y2=171.31 gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=524.5 x2=517 y1=219.5 y2=244 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=666.5 x2=666.5 y1=170.31 y2=171.31 gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=564.5 x2=565 y1=228.5 y2=253 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12>');function Vc(){return $c()}function Ni(){return Ec()}function xt(){return kc()}function oo(){return Ac()}function io(){return tr()}function Gc(){return(()=>{var e=tr();return e.style.setProperty("transform","rotate(90deg)"),e})()}function jc(){return(()=>{var e=tr();return e.style.setProperty("transform","rotate(-90deg)"),e})()}function Wc(){return Mc()}function Qc(){return Pc()}function Yc(){return Dc()}function Xc(){return Tc()}function Zc(){return Fc()}function Jc(){return Ic()}function eu(){return Lc()}function tu(){return Oc()}function nu(){return qc()}function ru(e){return(()=>{var n=Ri(),r=n.firstChild;return t.createRenderEffect(()=>t.setAttribute(r,"stroke",e.theme==="dark"?"#12B76A":"#027A48")),n})()}function ou(){return _c()}function iu(){return Rc()}function su(e){return[t.createComponent(t.Show,{get when(){return e.checked},get children(){var n=Ri(),r=n.firstChild;return t.createRenderEffect(()=>t.setAttribute(r,"stroke",e.theme==="dark"?"#9B8AFB":"#6938EF")),n}}),t.createComponent(t.Show,{get when(){return!e.checked},get children(){var n=Nc(),r=n.firstChild;return t.createRenderEffect(()=>t.setAttribute(r,"stroke",e.theme==="dark"?"#9B8AFB":"#6938EF")),n}})]}function On(){return zc()}function au(){return Kc()}function lu(){return Bc()}function cu(){return Uc()}function so(){const e=t.createUniqueId();return(()=>{var n=Hc(),r=n.firstChild,o=r.nextSibling,i=o.nextSibling,a=i.firstChild,l=i.nextSibling,c=l.firstChild,s=l.nextSibling,d=s.nextSibling,m=d.firstChild,f=d.nextSibling,u=f.firstChild,g=f.nextSibling,h=g.nextSibling,v=h.firstChild,p=h.nextSibling,y=p.firstChild,b=p.nextSibling,w=b.nextSibling,x=w.firstChild,C=w.nextSibling,T=C.firstChild,E=C.nextSibling,F=E.nextSibling,S=F.firstChild,M=F.nextSibling,I=M.firstChild,q=M.nextSibling,V=q.nextSibling,K=V.firstChild,Q=V.nextSibling,L=Q.firstChild,R=Q.nextSibling,B=R.nextSibling,X=B.firstChild,re=B.nextSibling,me=re.firstChild,ne=re.nextSibling,ge=ne.firstChild,A=ge.nextSibling,te=A.nextSibling,U=te.nextSibling,Je=U.nextSibling,_=ne.nextSibling,ce=_.firstChild,ue=_.nextSibling,pt=ue.firstChild,xe=ue.nextSibling,et=xe.firstChild,lt=et.nextSibling,Ke=lt.nextSibling,Oe=Ke.firstChild,Be=Oe.nextSibling,P=Be.nextSibling,H=P.nextSibling,oe=H.nextSibling,W=oe.nextSibling,Y=W.nextSibling,Z=Y.nextSibling,ie=Z.nextSibling,G=ie.nextSibling,Ue=G.nextSibling,He=Ue.nextSibling,De=xe.nextSibling,ct=De.firstChild,Ve=De.nextSibling,ut=Ve.firstChild,Ge=Ve.nextSibling,tt=Ge.firstChild,Wt=tt.nextSibling,Mt=Ge.nextSibling,Qt=Mt.firstChild,vt=Mt.nextSibling,Yt=vt.firstChild,Pt=vt.nextSibling,Dt=Pt.firstChild,Tt=Dt.nextSibling,yt=Tt.nextSibling,or=yt.nextSibling,ir=or.nextSibling,sr=ir.nextSibling,ar=sr.nextSibling,lr=ar.nextSibling,cr=lr.nextSibling,ur=cr.nextSibling,dr=ur.nextSibling,fr=dr.nextSibling,gr=fr.nextSibling,hr=gr.nextSibling,mr=hr.nextSibling,pr=mr.nextSibling,vr=pr.nextSibling,Hi=vr.nextSibling;return t.setAttribute(r,"id",`a-${e}`),t.setAttribute(o,"fill",`url(#a-${e})`),t.setAttribute(a,"id",`am-${e}`),t.setAttribute(l,"id",`b-${e}`),t.setAttribute(c,"filter",`url(#am-${e})`),t.setAttribute(s,"mask",`url(#b-${e})`),t.setAttribute(m,"id",`ah-${e}`),t.setAttribute(f,"id",`k-${e}`),t.setAttribute(u,"filter",`url(#ah-${e})`),t.setAttribute(g,"mask",`url(#k-${e})`),t.setAttribute(v,"id",`ae-${e}`),t.setAttribute(p,"id",`j-${e}`),t.setAttribute(y,"filter",`url(#ae-${e})`),t.setAttribute(b,"mask",`url(#j-${e})`),t.setAttribute(x,"id",`ai-${e}`),t.setAttribute(C,"id",`i-${e}`),t.setAttribute(T,"filter",`url(#ai-${e})`),t.setAttribute(E,"mask",`url(#i-${e})`),t.setAttribute(S,"id",`aj-${e}`),t.setAttribute(M,"id",`h-${e}`),t.setAttribute(I,"filter",`url(#aj-${e})`),t.setAttribute(q,"mask",`url(#h-${e})`),t.setAttribute(K,"id",`ag-${e}`),t.setAttribute(Q,"id",`g-${e}`),t.setAttribute(L,"filter",`url(#ag-${e})`),t.setAttribute(R,"mask",`url(#g-${e})`),t.setAttribute(X,"id",`af-${e}`),t.setAttribute(re,"id",`f-${e}`),t.setAttribute(me,"filter",`url(#af-${e})`),t.setAttribute(ne,"mask",`url(#f-${e})`),t.setAttribute(U,"id",`m-${e}`),t.setAttribute(Je,"fill",`url(#m-${e})`),t.setAttribute(ce,"id",`ak-${e}`),t.setAttribute(ue,"id",`e-${e}`),t.setAttribute(pt,"filter",`url(#ak-${e})`),t.setAttribute(xe,"mask",`url(#e-${e})`),t.setAttribute(et,"id",`n-${e}`),t.setAttribute(lt,"fill",`url(#n-${e})`),t.setAttribute(Oe,"id",`r-${e}`),t.setAttribute(Be,"fill",`url(#r-${e})`),t.setAttribute(P,"id",`s-${e}`),t.setAttribute(H,"fill",`url(#s-${e})`),t.setAttribute(oe,"id",`q-${e}`),t.setAttribute(W,"fill",`url(#q-${e})`),t.setAttribute(Y,"id",`p-${e}`),t.setAttribute(Z,"fill",`url(#p-${e})`),t.setAttribute(ie,"id",`o-${e}`),t.setAttribute(G,"fill",`url(#o-${e})`),t.setAttribute(Ue,"id",`l-${e}`),t.setAttribute(He,"fill",`url(#l-${e})`),t.setAttribute(ct,"id",`al-${e}`),t.setAttribute(Ve,"id",`d-${e}`),t.setAttribute(ut,"filter",`url(#al-${e})`),t.setAttribute(Ge,"mask",`url(#d-${e})`),t.setAttribute(tt,"id",`u-${e}`),t.setAttribute(Wt,"fill",`url(#u-${e})`),t.setAttribute(Qt,"id",`ad-${e}`),t.setAttribute(vt,"id",`c-${e}`),t.setAttribute(Yt,"filter",`url(#ad-${e})`),t.setAttribute(Pt,"mask",`url(#c-${e})`),t.setAttribute(Dt,"id",`t-${e}`),t.setAttribute(Tt,"fill",`url(#t-${e})`),t.setAttribute(yt,"id",`v-${e}`),t.setAttribute(or,"stroke",`url(#v-${e})`),t.setAttribute(ir,"id",`aa-${e}`),t.setAttribute(sr,"stroke",`url(#aa-${e})`),t.setAttribute(ar,"id",`w-${e}`),t.setAttribute(lr,"stroke",`url(#w-${e})`),t.setAttribute(cr,"id",`ac-${e}`),t.setAttribute(ur,"stroke",`url(#ac-${e})`),t.setAttribute(dr,"id",`ab-${e}`),t.setAttribute(fr,"stroke",`url(#ab-${e})`),t.setAttribute(gr,"id",`y-${e}`),t.setAttribute(hr,"stroke",`url(#y-${e})`),t.setAttribute(mr,"id",`x-${e}`),t.setAttribute(pr,"stroke",`url(#x-${e})`),t.setAttribute(vr,"id",`z-${e}`),t.setAttribute(Hi,"stroke",`url(#z-${e})`),n})()}var uu=t.template('<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),du=t.template('<button title="Copy object to clipboard">'),fu=t.template('<button title="Remove all items"aria-label="Remove all items">'),gu=t.template('<button title="Delete item"aria-label="Delete item">'),hu=t.template('<button title="Toggle value"aria-label="Toggle value">'),mu=t.template('<button title="Bulk Edit Data"aria-label="Bulk Edit Data">'),Lt=t.template("<div>"),pu=t.template("<div><button> <span></span> <span> "),vu=t.template("<input>"),ao=t.template("<span>"),yu=t.template("<div><label>:"),bu=t.template("<div><div><button> [<!>...<!>]");function wu(e,n){let r=0;const o=[];for(;r<e.length;)o.push(e.slice(r,r+n)),r=r+n;return o}var lo=e=>{const n=le(),r=O().shadowDOMTarget?N.bind({target:O().shadowDOMTarget}):N,o=t.createMemo(()=>n()==="dark"?At(r):kt(r));return(()=>{var i=uu();return t.createRenderEffect(()=>t.className(i,D(o().expander,r`
          transform: rotate(${e.expanded?90:0}deg);
        `,e.expanded&&r`
            & svg {
              top: -1px;
            }
          `))),i})()},xu=e=>{const n=le(),r=O().shadowDOMTarget?N.bind({target:O().shadowDOMTarget}):N,o=t.createMemo(()=>n()==="dark"?At(r):kt(r)),[i,a]=t.createSignal("NoCopy");return(()=>{var l=du();return t.addEventListener(l,"click",i()==="NoCopy"?()=>{navigator.clipboard.writeText(t.stringify(e.value)).then(()=>{a("SuccessCopy"),setTimeout(()=>{a("NoCopy")},1500)},c=>{a("ErrorCopy"),setTimeout(()=>{a("NoCopy")},1500)})}:void 0,!0),t.insert(l,t.createComponent(t.Switch,{get children(){return[t.createComponent(t.Match,{get when(){return i()==="NoCopy"},get children(){return t.createComponent(tu,{})}}),t.createComponent(t.Match,{get when(){return i()==="SuccessCopy"},get children(){return t.createComponent(ru,{get theme(){return n()}})}}),t.createComponent(t.Match,{get when(){return i()==="ErrorCopy"},get children(){return t.createComponent(ou,{})}})]}})),t.createRenderEffect(c=>{var s=o().actionButton,d=`${i()==="NoCopy"?"Copy object to clipboard":i()==="SuccessCopy"?"Object copied to clipboard":"Error copying object to clipboard"}`;return s!==c.e&&t.className(l,c.e=s),d!==c.t&&t.setAttribute(l,"aria-label",c.t=d),c},{e:void 0,t:void 0}),l})()},Cu=e=>{const n=le(),r=O().shadowDOMTarget?N.bind({target:O().shadowDOMTarget}):N,o=t.createMemo(()=>n()==="dark"?At(r):kt(r)),i=O().client;return(()=>{var a=fu();return a.$$click=()=>{const l=e.activeQuery.state.data,c=t.updateNestedDataByPath(l,e.dataPath,[]);i.setQueryData(e.activeQuery.queryKey,c)},t.insert(a,t.createComponent(iu,{})),t.createRenderEffect(()=>t.className(a,o().actionButton)),a})()},co=e=>{const n=le(),r=O().shadowDOMTarget?N.bind({target:O().shadowDOMTarget}):N,o=t.createMemo(()=>n()==="dark"?At(r):kt(r)),i=O().client;return(()=>{var a=gu();return a.$$click=()=>{const l=e.activeQuery.state.data,c=t.deleteNestedDataByPath(l,e.dataPath);i.setQueryData(e.activeQuery.queryKey,c)},t.insert(a,t.createComponent(Ni,{})),t.createRenderEffect(()=>t.className(a,D(o().actionButton))),a})()},Su=e=>{const n=le(),r=O().shadowDOMTarget?N.bind({target:O().shadowDOMTarget}):N,o=t.createMemo(()=>n()==="dark"?At(r):kt(r)),i=O().client;return(()=>{var a=hu();return a.$$click=()=>{const l=e.activeQuery.state.data,c=t.updateNestedDataByPath(l,e.dataPath,!e.value);i.setQueryData(e.activeQuery.queryKey,c)},t.insert(a,t.createComponent(su,{get theme(){return n()},get checked(){return e.value}})),t.createRenderEffect(()=>t.className(a,D(o().actionButton,r`
          width: ${$.size[3.5]};
          height: ${$.size[3.5]};
        `))),a})()};function uo(e){return Symbol.iterator in e}function nt(e){const n=le(),r=O().shadowDOMTarget?N.bind({target:O().shadowDOMTarget}):N,o=t.createMemo(()=>n()==="dark"?At(r):kt(r)),i=O().client,[a,l]=t.createSignal((e.defaultExpanded||[]).includes(e.label)),c=()=>l(v=>!v),[s,d]=t.createSignal([]),m=t.createMemo(()=>Array.isArray(e.value)?e.value.map((v,p)=>({label:p.toString(),value:v})):e.value!==null&&typeof e.value=="object"&&uo(e.value)&&typeof e.value[Symbol.iterator]=="function"?e.value instanceof Map?Array.from(e.value,([v,p])=>({label:v,value:p})):Array.from(e.value,(v,p)=>({label:p.toString(),value:v})):typeof e.value=="object"&&e.value!==null?Object.entries(e.value).map(([v,p])=>({label:v,value:p})):[]),f=t.createMemo(()=>Array.isArray(e.value)?"array":e.value!==null&&typeof e.value=="object"&&uo(e.value)&&typeof e.value[Symbol.iterator]=="function"?"Iterable":typeof e.value=="object"&&e.value!==null?"object":typeof e.value),u=t.createMemo(()=>wu(m(),100)),g=e.dataPath??[],h=t.createUniqueId();return(()=>{var v=Lt();return t.insert(v,t.createComponent(t.Show,{get when(){return u().length},get children(){return[(()=>{var p=pu(),y=p.firstChild,b=y.firstChild,w=b.nextSibling,x=w.nextSibling,C=x.nextSibling,T=C.firstChild;return y.$$click=()=>c(),t.insert(y,t.createComponent(lo,{get expanded(){return a()}}),b),t.insert(w,()=>e.label),t.insert(C,()=>String(f()).toLowerCase()==="iterable"?"(Iterable) ":"",T),t.insert(C,()=>m().length,T),t.insert(C,()=>m().length>1?"items":"item",null),t.insert(p,t.createComponent(t.Show,{get when(){return e.editable},get children(){var E=Lt();return t.insert(E,t.createComponent(xu,{get value(){return e.value}}),null),t.insert(E,t.createComponent(t.Show,{get when(){return e.itemsDeletable&&e.activeQuery!==void 0},get children(){return t.createComponent(co,{get activeQuery(){return e.activeQuery},dataPath:g})}}),null),t.insert(E,t.createComponent(t.Show,{get when(){return f()==="array"&&e.activeQuery!==void 0},get children(){return t.createComponent(Cu,{get activeQuery(){return e.activeQuery},dataPath:g})}}),null),t.insert(E,t.createComponent(t.Show,{get when(){return t.memo(()=>!!e.onEdit)()&&!t.serialize(e.value).meta},get children(){var F=mu();return F.$$click=()=>{var S;(S=e.onEdit)==null||S.call(e)},t.insert(F,t.createComponent(nu,{})),t.createRenderEffect(()=>t.className(F,o().actionButton)),F}}),null),t.createRenderEffect(()=>t.className(E,o().actions)),E}}),null),t.createRenderEffect(E=>{var F=o().expanderButtonContainer,S=o().expanderButton,M=a()?"true":"false",I=o().info;return F!==E.e&&t.className(p,E.e=F),S!==E.t&&t.className(y,E.t=S),M!==E.a&&t.setAttribute(y,"aria-expanded",E.a=M),I!==E.o&&t.className(C,E.o=I),E},{e:void 0,t:void 0,a:void 0,o:void 0}),p})(),t.createComponent(t.Show,{get when(){return a()},get children(){return[t.createComponent(t.Show,{get when(){return u().length===1},get children(){var p=Lt();return t.insert(p,t.createComponent(nn,{get each(){return m()},by:y=>y.label,children:y=>t.createComponent(nt,{get defaultExpanded(){return e.defaultExpanded},get label(){return y().label},get value(){return y().value},get editable(){return e.editable},get dataPath(){return[...g,y().label]},get activeQuery(){return e.activeQuery},get itemsDeletable(){return f()==="array"||f()==="Iterable"||f()==="object"}})})),t.createRenderEffect(()=>t.className(p,o().subEntry)),p}}),t.createComponent(t.Show,{get when(){return u().length>1},get children(){var p=Lt();return t.insert(p,t.createComponent(t.Index,{get each(){return u()},children:(y,b)=>(()=>{var w=bu(),x=w.firstChild,C=x.firstChild,T=C.firstChild,E=T.nextSibling,F=E.nextSibling,S=F.nextSibling;return S.nextSibling,C.$$click=()=>d(M=>M.includes(b)?M.filter(I=>I!==b):[...M,b]),t.insert(C,t.createComponent(lo,{get expanded(){return s().includes(b)}}),T),t.insert(C,b*100,E),t.insert(C,b*100+100-1,S),t.insert(x,t.createComponent(t.Show,{get when(){return s().includes(b)},get children(){var M=Lt();return t.insert(M,t.createComponent(nn,{get each(){return y()},by:I=>I.label,children:I=>t.createComponent(nt,{get defaultExpanded(){return e.defaultExpanded},get label(){return I().label},get value(){return I().value},get editable(){return e.editable},get dataPath(){return[...g,I().label]},get activeQuery(){return e.activeQuery}})})),t.createRenderEffect(()=>t.className(M,o().subEntry)),M}}),null),t.createRenderEffect(M=>{var I=o().entry,q=o().expanderButton;return I!==M.e&&t.className(x,M.e=I),q!==M.t&&t.className(C,M.t=q),M},{e:void 0,t:void 0}),w})()})),t.createRenderEffect(()=>t.className(p,o().subEntry)),p}})]}})]}}),null),t.insert(v,t.createComponent(t.Show,{get when(){return u().length===0},get children(){var p=yu(),y=p.firstChild,b=y.firstChild;return t.setAttribute(y,"for",h),t.insert(y,()=>e.label,b),t.insert(p,t.createComponent(t.Show,{get when(){return t.memo(()=>!!(e.editable&&e.activeQuery!==void 0))()&&(f()==="string"||f()==="number"||f()==="boolean")},get fallback(){return(()=>{var w=ao();return t.insert(w,()=>t.displayValue(e.value)),t.createRenderEffect(()=>t.className(w,o().value)),w})()},get children(){return[t.createComponent(t.Show,{get when(){return t.memo(()=>!!(e.editable&&e.activeQuery!==void 0))()&&(f()==="string"||f()==="number")},get children(){var w=vu();return w.addEventListener("change",x=>{const C=e.activeQuery.state.data,T=t.updateNestedDataByPath(C,g,f()==="number"?x.target.valueAsNumber:x.target.value);i.setQueryData(e.activeQuery.queryKey,T)}),t.setAttribute(w,"id",h),t.createRenderEffect(x=>{var C=f()==="number"?"number":"text",T=D(o().value,o().editableInput);return C!==x.e&&t.setAttribute(w,"type",x.e=C),T!==x.t&&t.className(w,x.t=T),x},{e:void 0,t:void 0}),t.createRenderEffect(()=>w.value=e.value),w}}),t.createComponent(t.Show,{get when(){return f()==="boolean"},get children(){var w=ao();return t.insert(w,t.createComponent(Su,{get activeQuery(){return e.activeQuery},dataPath:g,get value(){return e.value}}),null),t.insert(w,()=>t.displayValue(e.value),null),t.createRenderEffect(()=>t.className(w,D(o().value,o().actions,o().editableInput))),w}})]}}),null),t.insert(p,t.createComponent(t.Show,{get when(){return e.editable&&e.itemsDeletable&&e.activeQuery!==void 0},get children(){return t.createComponent(co,{get activeQuery(){return e.activeQuery},dataPath:g})}}),null),t.createRenderEffect(w=>{var x=o().row,C=o().label;return x!==w.e&&t.className(p,w.e=x),C!==w.t&&t.className(y,w.t=C),w},{e:void 0,t:void 0}),p}}),null),t.createRenderEffect(()=>t.className(v,o().entry)),v})()}var zi=(e,n)=>{const{colors:r,font:o,size:i,border:a}=$,l=(c,s)=>e==="light"?c:s;return{entry:n`
      & * {
        font-size: ${o.size.xs};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      position: relative;
      outline: none;
      word-break: break-word;
    `,subEntry:n`
      margin: 0 0 0 0.5em;
      padding-left: 0.75em;
      border-left: 2px solid ${l(r.gray[300],r.darkGray[400])};
      /* outline: 1px solid ${r.teal[400]}; */
    `,expander:n`
      & path {
        stroke: ${r.gray[400]};
      }
      & svg {
        width: ${i[3]};
        height: ${i[3]};
      }
      display: inline-flex;
      align-items: center;
      transition: all 0.1s ease;
      /* outline: 1px solid ${r.blue[400]}; */
    `,expanderButtonContainer:n`
      display: flex;
      align-items: center;
      line-height: ${i[4]};
      min-height: ${i[4]};
      gap: ${i[2]};
    `,expanderButton:n`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      height: ${i[5]};
      background: transparent;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: ${i[1]};
      position: relative;
      /* outline: 1px solid ${r.green[400]}; */

      &:focus-visible {
        border-radius: ${a.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }

      & svg {
        position: relative;
        left: 1px;
      }
    `,info:n`
      color: ${l(r.gray[500],r.gray[500])};
      font-size: ${o.size.xs};
      margin-left: ${i[1]};
      /* outline: 1px solid ${r.yellow[400]}; */
    `,label:n`
      color: ${l(r.gray[700],r.gray[300])};
      white-space: nowrap;
    `,value:n`
      color: ${l(r.purple[600],r.purple[400])};
      flex-grow: 1;
    `,actions:n`
      display: inline-flex;
      gap: ${i[2]};
      align-items: center;
    `,row:n`
      display: inline-flex;
      gap: ${i[2]};
      width: 100%;
      margin: ${i[.25]} 0px;
      line-height: ${i[4.5]};
      align-items: center;
    `,editableInput:n`
      border: none;
      padding: ${i[.5]} ${i[1]} ${i[.5]} ${i[1.5]};
      flex-grow: 1;
      border-radius: ${a.radius.xs};
      background-color: ${l(r.gray[200],r.darkGray[500])};

      &:hover {
        background-color: ${l(r.gray[300],r.darkGray[600])};
      }
    `,actionButton:n`
      background-color: transparent;
      color: ${l(r.gray[500],r.gray[500])};
      border: none;
      display: inline-flex;
      padding: 0px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: ${i[3]};
      height: ${i[3]};
      position: relative;
      z-index: 1;

      &:hover svg {
        color: ${l(r.gray[600],r.gray[400])};
      }

      &:focus-visible {
        border-radius: ${a.radius.xs};
        outline: 2px solid ${r.blue[800]};
        outline-offset: 2px;
      }
    `}},kt=e=>zi("light",e),At=e=>zi("dark",e);t.delegateEvents(["click"]);var $u=t.template('<div><div aria-hidden=true></div><button type=button aria-label="Open Tanstack query devtools"class=tsqd-open-btn>'),jt=t.template("<div>"),Eu=t.template('<aside aria-label="Tanstack query devtools"><div role=separator aria-label="Resize devtools panel"tabindex=0></div><button aria-label="Close tanstack query devtools">'),ku=t.template('<select name=tsqd-queries-filter-sort aria-label="Sort queries by">'),Au=t.template('<select name=tsqd-mutations-filter-sort aria-label="Sort mutations by">'),Mu=t.template("<span>Asc"),Pu=t.template("<span>Desc"),Du=t.template('<button aria-label="Open in picture-in-picture mode"title="Open in picture-in-picture mode">'),Tu=t.template("<div>Settings"),Fu=t.template("<span>Position"),Iu=t.template("<span>Top"),Lu=t.template("<span>Bottom"),Ou=t.template("<span>Left"),qu=t.template("<span>Right"),_u=t.template("<span>Theme"),Ru=t.template("<span>Light"),Nu=t.template("<span>Dark"),zu=t.template("<span>System"),Ku=t.template("<span>Disabled Queries"),Bu=t.template("<span>Show"),Uu=t.template("<span>Hide"),Hu=t.template("<div><div class=tsqd-queries-container>"),Vu=t.template("<div><div class=tsqd-mutations-container>"),Gu=t.template('<div><div><div><button aria-label="Close Tanstack query devtools"><span>TANSTACK</span><span> v</span></button></div></div><div><div><div><input aria-label="Filter queries by query key"type=text placeholder=Filter name=tsqd-query-filter-input></div><div></div><button class=tsqd-query-filter-sort-order-btn></button></div><div><button aria-label="Clear query cache"></button><button>'),fo=t.template("<option>Sort by "),ju=t.template("<div class=tsqd-query-disabled-indicator aria-hidden=true>disabled"),Wu=t.template("<div class=tsqd-query-static-indicator aria-hidden=true>static"),Ki=t.template("<button><div></div><code class=tsqd-query-hash>"),Qu=t.template("<div role=tooltip id=tsqd-status-tooltip>"),Yu=t.template("<span>"),Xu=t.template("<button><span aria-hidden=true></span><span>"),Zu=t.template("<button><span aria-hidden=true></span> Error"),Ju=t.template('<div><span aria-hidden=true></span>Trigger Error<select aria-label="Select error type to trigger"><option value=""disabled selected>'),ed=t.template('<div class="tsqd-query-details-explorer-container tsqd-query-details-data-explorer">'),td=t.template('<form><textarea name=data aria-label="Edit query data as JSON"></textarea><div><span></span><div><button type=button>Cancel</button><button>Save'),nd=t.template('<div><div role=heading aria-level=2>Query Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span role=status aria-live=polite></span></div><div class=tsqd-query-details-observers-count><span>Observers:</span><span></span></div><div class=tsqd-query-details-last-updated><span>Last Updated:</span><span></span></div></div><div role=heading aria-level=2>Actions</div><div><button><span aria-hidden=true></span>Refetch</button><button><span aria-hidden=true></span>Invalidate</button><button><span aria-hidden=true></span>Reset</button><button><span aria-hidden=true></span>Remove</button><button><span aria-hidden=true></span> Loading</button></div><div role=heading aria-level=2>Data </div><div role=heading aria-level=2>Query Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),rd=t.template("<option>"),od=t.template('<div><div role=heading aria-level=2>Mutation Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span role=status aria-live=polite></span></div><div class=tsqd-query-details-last-updated><span>Submitted At:</span><span></span></div></div><div role=heading aria-level=2>Variables Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div role=heading aria-level=2>Context Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div role=heading aria-level=2>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div role=heading aria-level=2>Mutations Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),[ye,yn]=t.createSignal(null),[rt,Bi]=t.createSignal(null),[Fe,nr]=t.createSignal(0),[Ot,id]=t.createSignal(!1),sd=e=>{const n=le(),r=O().shadowDOMTarget?N.bind({target:O().shadowDOMTarget}):N,o=t.createMemo(()=>n()==="dark"?Pe(r):Me(r)),i=t.createMemo(()=>O().onlineManager);t.onMount(()=>{const f=i().subscribe(u=>{id(!u)});t.onCleanup(()=>{f()})});const a=_n(),l=t.createMemo(()=>O().buttonPosition||rs),c=t.createMemo(()=>e.localStore.open==="true"?!0:e.localStore.open==="false"?!1:O().initialIsOpen||is),s=t.createMemo(()=>e.localStore.position||O().position||En);let d;t.createEffect(()=>{const f=d.parentElement,u=e.localStore.height||en,g=e.localStore.width||tn,h=s();f.style.setProperty("--tsqd-panel-height",`${h==="top"?"-":""}${u}px`),f.style.setProperty("--tsqd-panel-width",`${h==="left"?"-":""}${g}px`)}),t.onMount(()=>{const f=()=>{const u=d.parentElement,g=getComputedStyle(u).fontSize;u.style.setProperty("--tsqd-font-size",g)};f(),window.addEventListener("focus",f),t.onCleanup(()=>{window.removeEventListener("focus",f)})});const m=t.createMemo(()=>e.localStore.pip_open??"false");return[t.createComponent(t.Show,{get when(){return t.memo(()=>!!a().pipWindow)()&&m()=="true"},get children(){return t.createComponent(t.Portal,{get mount(){var f;return(f=a().pipWindow)==null?void 0:f.document.body},get children(){return t.createComponent(ad,{get children(){return t.createComponent(rr,e)}})}})}}),(()=>{var f=jt(),u=d;return typeof u=="function"?t.use(u,f):d=f,t.insert(f,t.createComponent(Ar,{name:"tsqd-panel-transition",get children(){return t.createComponent(t.Show,{get when(){return t.memo(()=>!!(c()&&!a().pipWindow))()&&m()=="false"},get children(){return t.createComponent(cd,{get localStore(){return e.localStore},get setLocalStore(){return e.setLocalStore}})}})}}),null),t.insert(f,t.createComponent(Ar,{name:"tsqd-button-transition",get children(){return t.createComponent(t.Show,{get when(){return!c()},get children(){var g=$u(),h=g.firstChild,v=h.nextSibling;return t.insert(h,t.createComponent(so,{})),v.$$click=()=>e.setLocalStore("open","true"),t.insert(v,t.createComponent(so,{})),t.createRenderEffect(()=>t.className(g,D(o().devtoolsBtn,o()[`devtoolsBtn-position-${l()}`],"tsqd-open-btn-container"))),g}})}}),null),t.createRenderEffect(()=>t.className(f,D(r`
            & .tsqd-panel-transition-exit-active,
            & .tsqd-panel-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
            }

            & .tsqd-panel-transition-exit-to,
            & .tsqd-panel-transition-enter {
              ${s()==="top"||s()==="bottom"?"transform: translateY(var(--tsqd-panel-height));":"transform: translateX(var(--tsqd-panel-width));"}
            }

            & .tsqd-button-transition-exit-active,
            & .tsqd-button-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
              opacity: 1;
            }

            & .tsqd-button-transition-exit-to,
            & .tsqd-button-transition-enter {
              transform: ${l()==="relative"?"none;":l()==="top-left"?"translateX(-72px);":l()==="top-right"?"translateX(72px);":"translateY(72px);"};
              opacity: 0;
            }
          `,"tsqd-transitions-container"))),f})()]},ad=e=>{const n=_n(),r=le(),o=O().shadowDOMTarget?N.bind({target:O().shadowDOMTarget}):N,i=t.createMemo(()=>r()==="dark"?Pe(o):Me(o)),a=()=>{const{colors:l}=$,c=(s,d)=>r()==="dark"?d:s;return Fe()<ft?o`
        flex-direction: column;
        background-color: ${c(l.gray[300],l.gray[600])};
      `:o`
      flex-direction: row;
      background-color: ${c(l.gray[200],l.darkGray[900])};
    `};return t.createEffect(()=>{const l=n().pipWindow,c=()=>{l&&nr(l.innerWidth)};l&&(l.addEventListener("resize",c),c()),t.onCleanup(()=>{l&&l.removeEventListener("resize",c)})}),(()=>{var l=jt();return l.style.setProperty("--tsqd-font-size","16px"),l.style.setProperty("max-height","100vh"),l.style.setProperty("height","100vh"),l.style.setProperty("width","100vw"),t.insert(l,()=>e.children),t.createRenderEffect(()=>t.className(l,D(i().panel,a(),{[o`
            min-width: min-content;
          `]:Fe()<qn},"tsqd-main-panel"))),l})()},ld=e=>{const n=le(),r=O().shadowDOMTarget?N.bind({target:O().shadowDOMTarget}):N,o=t.createMemo(()=>n()==="dark"?Pe(r):Me(r));let i;t.onMount(()=>{wo(i,({width:l},c)=>{c===i&&nr(l)})});const a=()=>{const{colors:l}=$,c=(s,d)=>n()==="dark"?d:s;return Fe()<ft?r`
        flex-direction: column;
        background-color: ${c(l.gray[300],l.gray[600])};
      `:r`
      flex-direction: row;
      background-color: ${c(l.gray[200],l.darkGray[900])};
    `};return(()=>{var l=jt(),c=i;return typeof c=="function"?t.use(c,l):i=l,l.style.setProperty("--tsqd-font-size","16px"),t.insert(l,()=>e.children),t.createRenderEffect(()=>t.className(l,D(o().parentPanel,a(),{[r`
            min-width: min-content;
          `]:Fe()<qn},"tsqd-main-panel"))),l})()},cd=e=>{const n=le(),r=O().shadowDOMTarget?N.bind({target:O().shadowDOMTarget}):N,o=t.createMemo(()=>n()==="dark"?Pe(r):Me(r));let i;t.onMount(()=>{i.focus()});const[a,l]=t.createSignal(!1),c=t.createMemo(()=>e.localStore.position||O().position||En),s=f=>{const u=f.currentTarget.parentElement;if(!u)return;l(!0);const{height:g,width:h}=u.getBoundingClientRect(),v=f.clientX,p=f.clientY;let y=0;const b=t.convertRemToPixels(3.5),w=t.convertRemToPixels(12),x=T=>{if(T.preventDefault(),c()==="left"||c()==="right"){const E=c()==="right"?v-T.clientX:T.clientX-v;y=Math.round(h+E),y<w&&(y=w),e.setLocalStore("width",String(Math.round(y)));const F=u.getBoundingClientRect().width;Number(e.localStore.width)<F&&e.setLocalStore("width",String(F))}else{const E=c()==="bottom"?p-T.clientY:T.clientY-p;y=Math.round(g+E),y<b&&(y=b,yn(null)),e.setLocalStore("height",String(Math.round(y)))}},C=()=>{a()&&l(!1),document.removeEventListener("mousemove",x,!1),document.removeEventListener("mouseup",C,!1)};document.addEventListener("mousemove",x,!1),document.addEventListener("mouseup",C,!1)};let d;t.onMount(()=>{wo(d,({width:f},u)=>{u===d&&nr(f)})}),t.createEffect(()=>{var p,y;const f=(y=(p=d.parentElement)==null?void 0:p.parentElement)==null?void 0:y.parentElement;if(!f)return;const u=e.localStore.position||En,g=t.getSidedProp("padding",u),h=e.localStore.position==="left"||e.localStore.position==="right",v=(({padding:b,paddingTop:w,paddingBottom:x,paddingLeft:C,paddingRight:T})=>({padding:b,paddingTop:w,paddingBottom:x,paddingLeft:C,paddingRight:T}))(f.style);f.style[g]=`${h?e.localStore.width:e.localStore.height}px`,t.onCleanup(()=>{Object.entries(v).forEach(([b,w])=>{f.style[b]=w})})});const m=()=>{const{colors:f}=$,u=(g,h)=>n()==="dark"?h:g;return Fe()<ft?r`
        flex-direction: column;
        background-color: ${u(f.gray[300],f.gray[600])};
      `:r`
      flex-direction: row;
      background-color: ${u(f.gray[200],f.darkGray[900])};
    `};return(()=>{var f=Eu(),u=f.firstChild,g=u.nextSibling,h=d;typeof h=="function"?t.use(h,f):d=f,u.$$keydown=p=>{const b=t.convertRemToPixels(3.5),w=t.convertRemToPixels(12);if(c()==="top"||c()==="bottom"){if(p.key==="ArrowUp"||p.key==="ArrowDown"){p.preventDefault();const x=Number(e.localStore.height||en),C=c()==="bottom"?p.key==="ArrowUp"?10:-10:p.key==="ArrowDown"?10:-10,T=Math.max(b,x+C);e.setLocalStore("height",String(T))}}else if(p.key==="ArrowLeft"||p.key==="ArrowRight"){p.preventDefault();const x=Number(e.localStore.width||tn),C=c()==="right"?p.key==="ArrowLeft"?10:-10:p.key==="ArrowRight"?10:-10,T=Math.max(w,x+C);e.setLocalStore("width",String(T))}},u.$$mousedown=s,g.$$click=()=>e.setLocalStore("open","false");var v=i;return typeof v=="function"?t.use(v,g):i=g,t.insert(g,t.createComponent(xt,{})),t.insert(f,t.createComponent(rr,e),null),t.createRenderEffect(p=>{var y=D(o().panel,o()[`panel-position-${c()}`],m(),{[r`
            min-width: min-content;
          `]:Fe()<qn&&(c()==="right"||c()==="left")},"tsqd-main-panel"),b=c()==="bottom"||c()==="top"?`${e.localStore.height||en}px`:"auto",w=c()==="right"||c()==="left"?`${e.localStore.width||tn}px`:"auto",x=c()==="top"||c()==="bottom"?"horizontal":"vertical",C=c()==="top"||c()==="bottom"?t.convertRemToPixels(3.5):t.convertRemToPixels(12),T=c()==="top"||c()==="bottom"?Number(e.localStore.height||en):Number(e.localStore.width||tn),E=D(o().dragHandle,o()[`dragHandle-position-${c()}`],"tsqd-drag-handle"),F=D(o().closeBtn,o()[`closeBtn-position-${c()}`],"tsqd-minimize-btn");return y!==p.e&&t.className(f,p.e=y),b!==p.t&&((p.t=b)!=null?f.style.setProperty("height",b):f.style.removeProperty("height")),w!==p.a&&((p.a=w)!=null?f.style.setProperty("width",w):f.style.removeProperty("width")),x!==p.o&&t.setAttribute(u,"aria-orientation",p.o=x),C!==p.i&&t.setAttribute(u,"aria-valuemin",p.i=C),T!==p.n&&t.setAttribute(u,"aria-valuenow",p.n=T),E!==p.s&&t.className(u,p.s=E),F!==p.h&&t.className(g,p.h=F),p},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),f})()},rr=e=>{pd(),vd();let n;const r=le(),o=O().shadowDOMTarget?N.bind({target:O().shadowDOMTarget}):N,i=t.createMemo(()=>r()==="dark"?Pe(o):Me(o)),a=_n(),[l,c]=t.createSignal("queries"),s=t.createMemo(()=>e.localStore.sort||as),d=t.createMemo(()=>Number(e.localStore.sortOrder)||br),m=t.createMemo(()=>e.localStore.mutationSort||ls),f=t.createMemo(()=>Number(e.localStore.mutationSortOrder)||br),u=t.createMemo(()=>t.sortFns[s()]),g=t.createMemo(()=>t.mutationSortFns[m()]),h=t.createMemo(()=>O().onlineManager),v=t.createMemo(()=>O().client.getQueryCache()),p=t.createMemo(()=>O().client.getMutationCache()),y=se(E=>E().getAll().length,!1),b=t.createMemo(t.on(()=>[y(),e.localStore.filter,s(),d(),e.localStore.hideDisabledQueries],()=>{const E=v().getAll();let F=e.localStore.filter?E.filter(M=>xr(M.queryHash,e.localStore.filter||"").passed):[...E];return e.localStore.hideDisabledQueries==="true"&&(F=F.filter(M=>!M.isDisabled())),u()?F.sort((M,I)=>u()(M,I)*d()):F})),w=Te(E=>E().getAll().length,!1),x=t.createMemo(t.on(()=>[w(),e.localStore.mutationFilter,m(),f()],()=>{const E=p().getAll(),F=e.localStore.mutationFilter?E.filter(M=>{const I=`${M.options.mutationKey?JSON.stringify(M.options.mutationKey)+" - ":""}${new Date(M.state.submittedAt).toLocaleString()}`;return xr(I,e.localStore.mutationFilter||"").passed}):[...E];return g()?F.sort((M,I)=>g()(M,I)*f()):F})),C=E=>{e.setLocalStore("position",E)},T=E=>{const S=getComputedStyle(n).getPropertyValue("--tsqd-font-size");E.style.setProperty("--tsqd-font-size",S)};return[(()=>{var E=Gu(),F=E.firstChild,S=F.firstChild,M=S.firstChild,I=M.firstChild,q=I.nextSibling,V=q.firstChild,K=F.nextSibling,Q=K.firstChild,L=Q.firstChild,R=L.firstChild,B=L.nextSibling,X=B.nextSibling,re=Q.nextSibling,me=re.firstChild,ne=me.nextSibling,ge=n;return typeof ge=="function"?t.use(ge,E):n=E,M.$$click=()=>{if(!a().pipWindow&&!e.showPanelViewOnly){e.setLocalStore("open","false");return}e.onClose&&e.onClose()},t.insert(q,()=>O().queryFlavor,V),t.insert(q,()=>O().version,null),t.insert(S,t.createComponent(Ee.Root,{get class(){return D(i().viewToggle)},get value(){return l()},"aria-label":"Toggle between queries and mutations view",onChange:A=>{c(A),yn(null),Bi(null)},get children(){return[t.createComponent(Ee.Item,{value:"queries",class:"tsqd-radio-toggle",get children(){return[t.createComponent(Ee.ItemInput,{}),t.createComponent(Ee.ItemControl,{get children(){return t.createComponent(Ee.ItemIndicator,{})}}),t.createComponent(Ee.ItemLabel,{title:"Toggle Queries View",children:"Queries"})]}}),t.createComponent(Ee.Item,{value:"mutations",class:"tsqd-radio-toggle",get children(){return[t.createComponent(Ee.ItemInput,{}),t.createComponent(Ee.ItemControl,{get children(){return t.createComponent(Ee.ItemIndicator,{})}}),t.createComponent(Ee.ItemLabel,{title:"Toggle Mutations View",children:"Mutations"})]}})]}}),null),t.insert(F,t.createComponent(t.Show,{get when(){return l()==="queries"},get children(){return t.createComponent(fd,{})}}),null),t.insert(F,t.createComponent(t.Show,{get when(){return l()==="mutations"},get children(){return t.createComponent(gd,{})}}),null),t.insert(L,t.createComponent(Vc,{}),R),R.$$input=A=>{l()==="queries"?e.setLocalStore("filter",A.currentTarget.value):e.setLocalStore("mutationFilter",A.currentTarget.value)},t.insert(B,t.createComponent(t.Show,{get when(){return l()==="queries"},get children(){var A=ku();return A.addEventListener("change",te=>{e.setLocalStore("sort",te.currentTarget.value)}),t.insert(A,()=>Object.keys(t.sortFns).map(te=>(()=>{var U=fo();return U.firstChild,U.value=te,t.insert(U,te,null),U})())),t.createRenderEffect(()=>A.value=s()),A}}),null),t.insert(B,t.createComponent(t.Show,{get when(){return l()==="mutations"},get children(){var A=Au();return A.addEventListener("change",te=>{e.setLocalStore("mutationSort",te.currentTarget.value)}),t.insert(A,()=>Object.keys(t.mutationSortFns).map(te=>(()=>{var U=fo();return U.firstChild,U.value=te,t.insert(U,te,null),U})())),t.createRenderEffect(()=>A.value=m()),A}}),null),t.insert(B,t.createComponent(xt,{}),null),X.$$click=()=>{l()==="queries"?e.setLocalStore("sortOrder",String(d()*-1)):e.setLocalStore("mutationSortOrder",String(f()*-1))},t.insert(X,t.createComponent(t.Show,{get when(){return(l()==="queries"?d():f())===1},get children(){return[Mu(),t.createComponent(oo,{})]}}),null),t.insert(X,t.createComponent(t.Show,{get when(){return(l()==="queries"?d():f())===-1},get children(){return[Pu(),t.createComponent(io,{})]}}),null),me.$$click=()=>{l()==="queries"?(qe({type:"CLEAR_QUERY_CACHE"}),v().clear()):(qe({type:"CLEAR_MUTATION_CACHE"}),p().clear())},t.insert(me,t.createComponent(Ni,{})),ne.$$click=()=>{h().setOnline(!h().isOnline())},t.insert(ne,(()=>{var A=t.memo(()=>!!Ot());return()=>A()?t.createComponent(Zc,{}):t.createComponent(Xc,{})})()),t.insert(re,t.createComponent(t.Show,{get when(){return t.memo(()=>!a().pipWindow)()&&!a().disabled},get children(){var A=Du();return A.$$click=()=>{a().requestPipWindow(Number(window.innerWidth),Number(e.localStore.height??500))},t.insert(A,t.createComponent(eu,{})),t.createRenderEffect(()=>t.className(A,D(i().actionsBtn,"tsqd-actions-btn","tsqd-action-open-pip"))),A}}),null),t.insert(re,t.createComponent(j.Root,{gutter:4,get children(){return[t.createComponent(j.Trigger,{get class(){return D(i().actionsBtn,"tsqd-actions-btn","tsqd-action-settings")},"aria-label":"Open settings menu",title:"Open settings menu",get children(){return t.createComponent(Jc,{})}}),t.createComponent(j.Portal,{ref:A=>T(A),get mount(){return t.memo(()=>!!a().pipWindow)()?a().pipWindow.document.body:document.body},get children(){return t.createComponent(j.Content,{get class(){return D(i().settingsMenu,"tsqd-settings-menu")},get children(){return[(()=>{var A=Tu();return t.createRenderEffect(()=>t.className(A,D(i().settingsMenuHeader,"tsqd-settings-menu-header"))),A})(),t.createComponent(t.Show,{get when(){return!e.showPanelViewOnly},get children(){return t.createComponent(j.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[t.createComponent(j.SubTrigger,{get class(){return D(i().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[Fu(),t.createComponent(xt,{})]}}),t.createComponent(j.Portal,{ref:A=>T(A),get mount(){return t.memo(()=>!!a().pipWindow)()?a().pipWindow.document.body:document.body},get children(){return t.createComponent(j.SubContent,{get class(){return D(i().settingsMenu,"tsqd-settings-submenu")},get children(){return t.createComponent(j.RadioGroup,{"aria-label":"Position settings",get value(){return e.localStore.position},onChange:A=>C(A),get children(){return[t.createComponent(j.RadioItem,{value:"top",get class(){return D(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[Iu(),t.createComponent(oo,{})]}}),t.createComponent(j.RadioItem,{value:"bottom",get class(){return D(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[Lu(),t.createComponent(io,{})]}}),t.createComponent(j.RadioItem,{value:"left",get class(){return D(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[Ou(),t.createComponent(Gc,{})]}}),t.createComponent(j.RadioItem,{value:"right",get class(){return D(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-right")},get children(){return[qu(),t.createComponent(jc,{})]}})]}})}})}})]}})}}),t.createComponent(j.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[t.createComponent(j.SubTrigger,{get class(){return D(i().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[_u(),t.createComponent(xt,{})]}}),t.createComponent(j.Portal,{ref:A=>T(A),get mount(){return t.memo(()=>!!a().pipWindow)()?a().pipWindow.document.body:document.body},get children(){return t.createComponent(j.SubContent,{get class(){return D(i().settingsMenu,"tsqd-settings-submenu")},get children(){return t.createComponent(j.RadioGroup,{get value(){return e.localStore.theme_preference},onChange:A=>{e.setLocalStore("theme_preference",A)},"aria-label":"Theme preference",get children(){return[t.createComponent(j.RadioItem,{value:"light",get class(){return D(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[Ru(),t.createComponent(Wc,{})]}}),t.createComponent(j.RadioItem,{value:"dark",get class(){return D(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[Nu(),t.createComponent(Qc,{})]}}),t.createComponent(j.RadioItem,{value:"system",get class(){return D(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[zu(),t.createComponent(Yc,{})]}})]}})}})}})]}}),t.createComponent(j.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[t.createComponent(j.SubTrigger,{get class(){return D(i().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-disabled-queries")},get children(){return[Ku(),t.createComponent(xt,{})]}}),t.createComponent(j.Portal,{ref:A=>T(A),get mount(){return t.memo(()=>!!a().pipWindow)()?a().pipWindow.document.body:document.body},get children(){return t.createComponent(j.SubContent,{get class(){return D(i().settingsMenu,"tsqd-settings-submenu")},get children(){return t.createComponent(j.RadioGroup,{get value(){return e.localStore.hideDisabledQueries},"aria-label":"Hide disabled queries setting",onChange:A=>e.setLocalStore("hideDisabledQueries",A),get children(){return[t.createComponent(j.RadioItem,{value:"false",get class(){return D(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-show")},get children(){return[Bu(),t.createComponent(t.Show,{get when(){return e.localStore.hideDisabledQueries!=="true"},get children(){return t.createComponent(On,{})}})]}}),t.createComponent(j.RadioItem,{value:"true",get class(){return D(i().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-hide")},get children(){return[Uu(),t.createComponent(t.Show,{get when(){return e.localStore.hideDisabledQueries==="true"},get children(){return t.createComponent(On,{})}})]}})]}})}})}})]}})]}})}})]}}),null),t.insert(E,t.createComponent(t.Show,{get when(){return l()==="queries"},get children(){var A=Hu(),te=A.firstChild;return t.insert(te,t.createComponent(nn,{by:U=>U.queryHash,get each(){return b()},children:U=>t.createComponent(ud,{get query(){return U()}})})),t.createRenderEffect(()=>t.className(A,D(i().overflowQueryContainer,"tsqd-queries-overflow-container"))),A}}),null),t.insert(E,t.createComponent(t.Show,{get when(){return l()==="mutations"},get children(){var A=Vu(),te=A.firstChild;return t.insert(te,t.createComponent(nn,{by:U=>U.mutationId,get each(){return x()},children:U=>t.createComponent(dd,{get mutation(){return U()}})})),t.createRenderEffect(()=>t.className(A,D(i().overflowQueryContainer,"tsqd-mutations-overflow-container"))),A}}),null),t.createRenderEffect(A=>{var te=D(i().queriesContainer,Fe()<ft&&(ye()||rt())&&o`
              height: 50%;
              max-height: 50%;
            `,Fe()<ft&&!(ye()||rt())&&o`
              height: 100%;
              max-height: 100%;
            `,"tsqd-queries-container"),U=D(i().row,"tsqd-header"),Je=i().logoAndToggleContainer,_=D(i().logo,"tsqd-text-logo-container"),ce=D(i().tanstackLogo,"tsqd-text-logo-tanstack"),ue=D(i().queryFlavorLogo,"tsqd-text-logo-query-flavor"),pt=D(i().row,"tsqd-filters-actions-container"),xe=D(i().filtersContainer,"tsqd-filters-container"),et=D(i().filterInput,"tsqd-query-filter-textfield-container"),lt=D("tsqd-query-filter-textfield"),Ke=D(i().filterSelect,"tsqd-query-filter-sort-container"),Oe=`Sort order ${(l()==="queries"?d():f())===-1?"descending":"ascending"}`,Be=(l()==="queries"?d():f())===-1,P=D(i().actionsContainer,"tsqd-actions-container"),H=D(i().actionsBtn,"tsqd-actions-btn","tsqd-action-clear-cache"),oe=`Clear ${l()} cache`,W=D(i().actionsBtn,Ot()&&i().actionsBtnOffline,"tsqd-actions-btn","tsqd-action-mock-offline-behavior"),Y=`${Ot()?"Unset offline mocking behavior":"Mock offline behavior"}`,Z=Ot(),ie=`${Ot()?"Unset offline mocking behavior":"Mock offline behavior"}`;return te!==A.e&&t.className(E,A.e=te),U!==A.t&&t.className(F,A.t=U),Je!==A.a&&t.className(S,A.a=Je),_!==A.o&&t.className(M,A.o=_),ce!==A.i&&t.className(I,A.i=ce),ue!==A.n&&t.className(q,A.n=ue),pt!==A.s&&t.className(K,A.s=pt),xe!==A.h&&t.className(Q,A.h=xe),et!==A.r&&t.className(L,A.r=et),lt!==A.d&&t.className(R,A.d=lt),Ke!==A.l&&t.className(B,A.l=Ke),Oe!==A.u&&t.setAttribute(X,"aria-label",A.u=Oe),Be!==A.c&&t.setAttribute(X,"aria-pressed",A.c=Be),P!==A.w&&t.className(re,A.w=P),H!==A.m&&t.className(me,A.m=H),oe!==A.f&&t.setAttribute(me,"title",A.f=oe),W!==A.y&&t.className(ne,A.y=W),Y!==A.g&&t.setAttribute(ne,"aria-label",A.g=Y),Z!==A.p&&t.setAttribute(ne,"aria-pressed",A.p=Z),ie!==A.b&&t.setAttribute(ne,"title",A.b=ie),A},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),t.createRenderEffect(()=>R.value=l()==="queries"?e.localStore.filter||"":e.localStore.mutationFilter||""),E})(),t.createComponent(t.Show,{get when(){return t.memo(()=>l()==="queries")()&&ye()},get children(){return t.createComponent(hd,{})}}),t.createComponent(t.Show,{get when(){return t.memo(()=>l()==="mutations")()&&rt()},get children(){return t.createComponent(md,{})}})]},ud=e=>{const n=le(),r=O().shadowDOMTarget?N.bind({target:O().shadowDOMTarget}):N,o=t.createMemo(()=>n()==="dark"?Pe(r):Me(r)),{colors:i,alpha:a}=$,l=(h,v)=>n()==="dark"?v:h,c=se(h=>{var v;return(v=h().find({queryKey:e.query.queryKey}))==null?void 0:v.state},!0,h=>h.query.queryHash===e.query.queryHash),s=se(h=>{var v;return((v=h().find({queryKey:e.query.queryKey}))==null?void 0:v.isDisabled())??!1},!0,h=>h.query.queryHash===e.query.queryHash),d=se(h=>{var v;return((v=h().find({queryKey:e.query.queryKey}))==null?void 0:v.isStatic())??!1},!0,h=>h.query.queryHash===e.query.queryHash),m=se(h=>{var v;return((v=h().find({queryKey:e.query.queryKey}))==null?void 0:v.isStale())??!1},!0,h=>h.query.queryHash===e.query.queryHash),f=se(h=>{var v;return((v=h().find({queryKey:e.query.queryKey}))==null?void 0:v.getObserversCount())??0},!0,h=>h.query.queryHash===e.query.queryHash),u=t.createMemo(()=>t.getQueryStatusColor({queryState:c(),observerCount:f(),isStale:m()})),g=()=>u()==="gray"?r`
        background-color: ${l(i[u()][200],i[u()][700])};
        color: ${l(i[u()][700],i[u()][300])};
      `:r`
      background-color: ${l(i[u()][200]+a[80],i[u()][900])};
      color: ${l(i[u()][800],i[u()][300])};
    `;return t.createComponent(t.Show,{get when(){return c()},get children(){var h=Ki(),v=h.firstChild,p=v.nextSibling;return h.$$click=()=>yn(e.query.queryHash===ye()?null:e.query.queryHash),t.insert(v,f),t.insert(p,()=>e.query.queryHash),t.insert(h,t.createComponent(t.Show,{get when(){return s()},get children(){return ju()}}),null),t.insert(h,t.createComponent(t.Show,{get when(){return d()},get children(){return Wu()}}),null),t.createRenderEffect(y=>{var b=D(o().queryRow,ye()===e.query.queryHash&&o().selectedQueryRow,"tsqd-query-row"),w=`Query key ${e.query.queryHash}${s()?", disabled":""}${d()?", static":""}`,x=D(g(),"tsqd-query-observer-count");return b!==y.e&&t.className(h,y.e=b),w!==y.t&&t.setAttribute(h,"aria-label",y.t=w),x!==y.a&&t.className(v,y.a=x),y},{e:void 0,t:void 0,a:void 0}),h}})},dd=e=>{const n=le(),r=O().shadowDOMTarget?N.bind({target:O().shadowDOMTarget}):N,o=t.createMemo(()=>n()==="dark"?Pe(r):Me(r)),{colors:i,alpha:a}=$,l=(u,g)=>n()==="dark"?g:u,c=Te(u=>{const h=u().getAll().find(v=>v.mutationId===e.mutation.mutationId);return h==null?void 0:h.state}),s=Te(u=>{const h=u().getAll().find(v=>v.mutationId===e.mutation.mutationId);return h?h.state.isPaused:!1}),d=Te(u=>{const h=u().getAll().find(v=>v.mutationId===e.mutation.mutationId);return h?h.state.status:"idle"}),m=t.createMemo(()=>t.getMutationStatusColor({isPaused:s(),status:d()})),f=()=>m()==="gray"?r`
        background-color: ${l(i[m()][200],i[m()][700])};
        color: ${l(i[m()][700],i[m()][300])};
      `:r`
      background-color: ${l(i[m()][200]+a[80],i[m()][900])};
      color: ${l(i[m()][800],i[m()][300])};
    `;return t.createComponent(t.Show,{get when(){return c()},get children(){var u=Ki(),g=u.firstChild,h=g.nextSibling;return u.$$click=()=>{Bi(e.mutation.mutationId===rt()?null:e.mutation.mutationId)},t.insert(g,t.createComponent(t.Show,{get when(){return m()==="purple"},get children(){return t.createComponent(cu,{})}}),null),t.insert(g,t.createComponent(t.Show,{get when(){return m()==="green"},get children(){return t.createComponent(On,{})}}),null),t.insert(g,t.createComponent(t.Show,{get when(){return m()==="red"},get children(){return t.createComponent(lu,{})}}),null),t.insert(g,t.createComponent(t.Show,{get when(){return m()==="yellow"},get children(){return t.createComponent(au,{})}}),null),t.insert(h,t.createComponent(t.Show,{get when(){return e.mutation.options.mutationKey},get children(){return[t.memo(()=>JSON.stringify(e.mutation.options.mutationKey))," -"," "]}}),null),t.insert(h,()=>new Date(e.mutation.state.submittedAt).toLocaleString(),null),t.createRenderEffect(v=>{var p=D(o().queryRow,rt()===e.mutation.mutationId&&o().selectedQueryRow,"tsqd-query-row"),y=`Mutation submitted at ${new Date(e.mutation.state.submittedAt).toLocaleString()}`,b=D(f(),"tsqd-query-observer-count");return p!==v.e&&t.className(u,v.e=p),y!==v.t&&t.setAttribute(u,"aria-label",v.t=y),b!==v.a&&t.className(g,v.a=b),v},{e:void 0,t:void 0,a:void 0}),u}})},fd=()=>{const e=se(s=>s().getAll().filter(d=>t.getQueryStatusLabel(d)==="stale").length),n=se(s=>s().getAll().filter(d=>t.getQueryStatusLabel(d)==="fresh").length),r=se(s=>s().getAll().filter(d=>t.getQueryStatusLabel(d)==="fetching").length),o=se(s=>s().getAll().filter(d=>t.getQueryStatusLabel(d)==="paused").length),i=se(s=>s().getAll().filter(d=>t.getQueryStatusLabel(d)==="inactive").length),a=le(),l=O().shadowDOMTarget?N.bind({target:O().shadowDOMTarget}):N,c=t.createMemo(()=>a()==="dark"?Pe(l):Me(l));return(()=>{var s=jt();return t.insert(s,t.createComponent(Qe,{label:"Fresh",color:"green",get count(){return n()}}),null),t.insert(s,t.createComponent(Qe,{label:"Fetching",color:"blue",get count(){return r()}}),null),t.insert(s,t.createComponent(Qe,{label:"Paused",color:"purple",get count(){return o()}}),null),t.insert(s,t.createComponent(Qe,{label:"Stale",color:"yellow",get count(){return e()}}),null),t.insert(s,t.createComponent(Qe,{label:"Inactive",color:"gray",get count(){return i()}}),null),t.createRenderEffect(()=>t.className(s,D(c().queryStatusContainer,"tsqd-query-status-container"))),s})()},gd=()=>{const e=Te(c=>c().getAll().filter(s=>t.getMutationStatusColor({isPaused:s.state.isPaused,status:s.state.status})==="green").length),n=Te(c=>c().getAll().filter(s=>t.getMutationStatusColor({isPaused:s.state.isPaused,status:s.state.status})==="yellow").length),r=Te(c=>c().getAll().filter(s=>t.getMutationStatusColor({isPaused:s.state.isPaused,status:s.state.status})==="purple").length),o=Te(c=>c().getAll().filter(s=>t.getMutationStatusColor({isPaused:s.state.isPaused,status:s.state.status})==="red").length),i=le(),a=O().shadowDOMTarget?N.bind({target:O().shadowDOMTarget}):N,l=t.createMemo(()=>i()==="dark"?Pe(a):Me(a));return(()=>{var c=jt();return t.insert(c,t.createComponent(Qe,{label:"Paused",color:"purple",get count(){return r()}}),null),t.insert(c,t.createComponent(Qe,{label:"Pending",color:"yellow",get count(){return n()}}),null),t.insert(c,t.createComponent(Qe,{label:"Success",color:"green",get count(){return e()}}),null),t.insert(c,t.createComponent(Qe,{label:"Error",color:"red",get count(){return o()}}),null),t.createRenderEffect(()=>t.className(c,D(l().queryStatusContainer,"tsqd-query-status-container"))),c})()},Qe=e=>{const n=le(),r=O().shadowDOMTarget?N.bind({target:O().shadowDOMTarget}):N,o=t.createMemo(()=>n()==="dark"?Pe(r):Me(r)),{colors:i,alpha:a}=$,l=(g,h)=>n()==="dark"?h:g;let c;const[s,d]=t.createSignal(!1),[m,f]=t.createSignal(!1),u=t.createMemo(()=>!(ye()&&Fe()<ns&&Fe()>ft||Fe()<ft));return(()=>{var g=Xu(),h=g.firstChild,v=h.nextSibling,p=c;return typeof p=="function"?t.use(p,g):c=g,g.addEventListener("mouseleave",()=>{d(!1),f(!1)}),g.addEventListener("mouseenter",()=>d(!0)),g.addEventListener("blur",()=>f(!1)),g.addEventListener("focus",()=>f(!0)),t.spread(g,t.mergeProps({get disabled(){return u()},get"aria-label"(){return`${e.label}: ${e.count}`},get class(){return D(o().queryStatusTag,!u()&&r`
            cursor: pointer;
            &:hover {
              background: ${l(i.gray[200],i.darkGray[400])}${a[80]};
            }
          `,"tsqd-query-status-tag",`tsqd-query-status-tag-${e.label.toLowerCase()}`)}},()=>s()||m()?{"aria-describedby":"tsqd-status-tooltip"}:{}),!1,!0),t.insert(g,t.createComponent(t.Show,{get when(){return t.memo(()=>!u())()&&(s()||m())},get children(){var y=Qu();return t.insert(y,()=>e.label),t.createRenderEffect(()=>t.className(y,D(o().statusTooltip,"tsqd-query-status-tooltip"))),y}}),h),t.insert(g,t.createComponent(t.Show,{get when(){return u()},get children(){var y=Yu();return t.insert(y,()=>e.label),t.createRenderEffect(()=>t.className(y,D(o().queryStatusTagLabel,"tsqd-query-status-tag-label"))),y}}),v),t.insert(v,()=>e.count),t.createRenderEffect(y=>{var b=D(r`
            width: ${$.size[1.5]};
            height: ${$.size[1.5]};
            border-radius: ${$.border.radius.full};
            background-color: ${$.colors[e.color][500]};
          `,"tsqd-query-status-tag-dot"),w=D(o().queryStatusCount,e.count>0&&e.color!=="gray"&&r`
              background-color: ${l(i[e.color][100],i[e.color][900])};
              color: ${l(i[e.color][700],i[e.color][300])};
            `,"tsqd-query-status-tag-count");return b!==y.e&&t.className(h,y.e=b),w!==y.t&&t.className(v,y.t=w),y},{e:void 0,t:void 0}),g})()},hd=()=>{const e=le(),n=O().shadowDOMTarget?N.bind({target:O().shadowDOMTarget}):N,r=t.createMemo(()=>e()==="dark"?Pe(n):Me(n)),{colors:o}=$,i=(S,M)=>e()==="dark"?M:S,a=O().client,[l,c]=t.createSignal(!1),[s,d]=t.createSignal("view"),[m,f]=t.createSignal(!1),u=t.createMemo(()=>O().errorTypes||[]),g=se(S=>S().getAll().find(M=>M.queryHash===ye()),!1),h=se(S=>S().getAll().find(M=>M.queryHash===ye()),!1),v=se(S=>{var M;return(M=S().getAll().find(I=>I.queryHash===ye()))==null?void 0:M.state},!1),p=se(S=>{var M;return(M=S().getAll().find(I=>I.queryHash===ye()))==null?void 0:M.state.data},!1),y=se(S=>{const M=S().getAll().find(I=>I.queryHash===ye());return M?t.getQueryStatusLabel(M):"inactive"}),b=se(S=>{const M=S().getAll().find(I=>I.queryHash===ye());return M?M.state.status:"pending"}),w=se(S=>{var M;return((M=S().getAll().find(I=>I.queryHash===ye()))==null?void 0:M.getObserversCount())??0}),x=t.createMemo(()=>t.getQueryStatusColorByLabel(y())),C=()=>{var M,I;qe({type:"REFETCH",queryHash:(M=g())==null?void 0:M.queryHash});const S=(I=g())==null?void 0:I.fetch();S==null||S.catch(()=>{})},T=S=>{const M=g();if(!M)return;qe({type:"TRIGGER_ERROR",queryHash:M.queryHash,metadata:{error:S==null?void 0:S.name}});const I=(S==null?void 0:S.initializer(M))??new Error("Unknown error from devtools"),q=M.options;M.setState({status:"error",error:I,fetchMeta:{...M.state.fetchMeta,__previousQueryOptions:q}})},E=()=>{const S=g();if(!S)return;qe({type:"RESTORE_LOADING",queryHash:S.queryHash});const M=S.state,I=S.state.fetchMeta?S.state.fetchMeta.__previousQueryOptions:null;S.cancel({silent:!0}),S.setState({...M,fetchStatus:"idle",fetchMeta:null}),I&&S.fetch(I)};t.createEffect(()=>{y()!=="fetching"&&c(!1)});const F=()=>x()==="gray"?n`
        background-color: ${i(o[x()][200],o[x()][700])};
        color: ${i(o[x()][700],o[x()][300])};
        border-color: ${i(o[x()][400],o[x()][600])};
      `:n`
      background-color: ${i(o[x()][100],o[x()][900])};
      color: ${i(o[x()][700],o[x()][300])};
      border-color: ${i(o[x()][400],o[x()][600])};
    `;return t.createComponent(t.Show,{get when(){return t.memo(()=>!!g())()&&v()},get children(){var S=nd(),M=S.firstChild,I=M.nextSibling,q=I.firstChild,V=q.firstChild,K=V.firstChild,Q=V.nextSibling,L=q.nextSibling,R=L.firstChild,B=R.nextSibling,X=L.nextSibling,re=X.firstChild,me=re.nextSibling,ne=I.nextSibling,ge=ne.nextSibling,A=ge.firstChild,te=A.firstChild,U=A.nextSibling,Je=U.firstChild,_=U.nextSibling,ce=_.firstChild,ue=_.nextSibling,pt=ue.firstChild,xe=ue.nextSibling,et=xe.firstChild,lt=et.nextSibling,Ke=ge.nextSibling;Ke.firstChild;var Oe=Ke.nextSibling,Be=Oe.nextSibling;return t.insert(K,()=>t.displayValue(g().queryKey,!0)),t.insert(Q,y),t.insert(B,w),t.insert(me,()=>new Date(v().dataUpdatedAt).toLocaleTimeString()),A.$$click=C,U.$$click=()=>{var P;qe({type:"INVALIDATE",queryHash:(P=g())==null?void 0:P.queryHash}),a.invalidateQueries(g())},_.$$click=()=>{var P;qe({type:"RESET",queryHash:(P=g())==null?void 0:P.queryHash}),a.resetQueries(g())},ue.$$click=()=>{var P;qe({type:"REMOVE",queryHash:(P=g())==null?void 0:P.queryHash}),a.removeQueries(g()),yn(null)},xe.$$click=()=>{var P;if(((P=g())==null?void 0:P.state.data)===void 0)c(!0),E();else{const H=g();if(!H)return;qe({type:"TRIGGER_LOADING",queryHash:H.queryHash});const oe=H.options;H.fetch({...oe,queryFn:()=>new Promise(()=>{}),gcTime:-1}),H.setState({data:void 0,status:"pending",fetchMeta:{...H.state.fetchMeta,__previousQueryOptions:oe}})}},t.insert(xe,()=>b()==="pending"?"Restore":"Trigger",lt),t.insert(ge,t.createComponent(t.Show,{get when(){return u().length===0||b()==="error"},get children(){var P=Zu(),H=P.firstChild,oe=H.nextSibling;return P.$$click=()=>{var W;g().state.error?(qe({type:"RESTORE_ERROR",queryHash:(W=g())==null?void 0:W.queryHash}),a.resetQueries(g())):T()},t.insert(P,()=>b()==="error"?"Restore":"Trigger",oe),t.createRenderEffect(W=>{var Y=D(n`
                  color: ${i(o.red[500],o.red[400])};
                `,"tsqd-query-details-actions-btn","tsqd-query-details-action-error"),Z=b()==="pending",ie=n`
                  background-color: ${i(o.red[500],o.red[400])};
                `;return Y!==W.e&&t.className(P,W.e=Y),Z!==W.t&&(P.disabled=W.t=Z),ie!==W.a&&t.className(H,W.a=ie),W},{e:void 0,t:void 0,a:void 0}),P}}),null),t.insert(ge,t.createComponent(t.Show,{get when(){return!(u().length===0||b()==="error")},get children(){var P=Ju(),H=P.firstChild,oe=H.nextSibling,W=oe.nextSibling;return W.firstChild,W.addEventListener("change",Y=>{const Z=u().find(ie=>ie.name===Y.currentTarget.value);T(Z)}),t.insert(W,t.createComponent(t.For,{get each(){return u()},children:Y=>(()=>{var Z=rd();return t.insert(Z,()=>Y.name),t.createRenderEffect(()=>Z.value=Y.name),Z})()}),null),t.insert(P,t.createComponent(xt,{}),null),t.createRenderEffect(Y=>{var Z=D(r().actionsSelect,"tsqd-query-details-actions-btn","tsqd-query-details-action-error-multiple"),ie=n`
                  background-color: ${$.colors.red[400]};
                `,G=b()==="pending";return Z!==Y.e&&t.className(P,Y.e=Z),ie!==Y.t&&t.className(H,Y.t=ie),G!==Y.a&&(W.disabled=Y.a=G),Y},{e:void 0,t:void 0,a:void 0}),P}}),null),t.insert(Ke,()=>s()==="view"?"Explorer":"Editor",null),t.insert(S,t.createComponent(t.Show,{get when(){return s()==="view"},get children(){var P=ed();return t.insert(P,t.createComponent(nt,{label:"Data",defaultExpanded:["Data"],get value(){return p()},editable:!0,onEdit:()=>d("edit"),get activeQuery(){return g()}})),t.createRenderEffect(H=>(H=$.size[2])!=null?P.style.setProperty("padding",H):P.style.removeProperty("padding")),P}}),Oe),t.insert(S,t.createComponent(t.Show,{get when(){return s()==="edit"},get children(){var P=td(),H=P.firstChild,oe=H.nextSibling,W=oe.firstChild,Y=W.nextSibling,Z=Y.firstChild,ie=Z.nextSibling;return P.addEventListener("submit",G=>{G.preventDefault();const He=new FormData(G.currentTarget).get("data");try{const De=JSON.parse(He);g().setState({...g().state,data:De}),d("view")}catch{f(!0)}}),H.addEventListener("focus",()=>f(!1)),t.insert(W,()=>m()?"Invalid Value":""),Z.$$click=()=>d("view"),t.createRenderEffect(G=>{var Ue=D(r().devtoolsEditForm,"tsqd-query-details-data-editor"),He=r().devtoolsEditTextarea,De=m(),ct=r().devtoolsEditFormActions,Ve=r().devtoolsEditFormError,ut=r().devtoolsEditFormActionContainer,Ge=D(r().devtoolsEditFormAction,n`
                      color: ${i(o.gray[600],o.gray[300])};
                    `),tt=D(r().devtoolsEditFormAction,n`
                      color: ${i(o.blue[600],o.blue[400])};
                    `);return Ue!==G.e&&t.className(P,G.e=Ue),He!==G.t&&t.className(H,G.t=He),De!==G.a&&t.setAttribute(H,"data-error",G.a=De),ct!==G.o&&t.className(oe,G.o=ct),Ve!==G.i&&t.className(W,G.i=Ve),ut!==G.n&&t.className(Y,G.n=ut),Ge!==G.s&&t.className(Z,G.s=Ge),tt!==G.h&&t.className(ie,G.h=tt),G},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),t.createRenderEffect(()=>H.value=JSON.stringify(p(),null,2)),P}}),Oe),t.insert(Be,t.createComponent(nt,{label:"Query",defaultExpanded:["Query","queryKey"],get value(){return h()}})),t.createRenderEffect(P=>{var H=D(r().detailsContainer,"tsqd-query-details-container"),oe=D(r().detailsHeader,"tsqd-query-details-header"),W=D(r().detailsBody,"tsqd-query-details-summary-container"),Y=D(r().queryDetailsStatus,F()),Z=D(r().detailsHeader,"tsqd-query-details-header"),ie=D(r().actionsBody,"tsqd-query-details-actions-container"),G=D(n`
                color: ${i(o.blue[600],o.blue[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-refetch"),Ue=y()==="fetching",He=n`
                background-color: ${i(o.blue[600],o.blue[400])};
              `,De=D(n`
                color: ${i(o.yellow[600],o.yellow[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-invalidate"),ct=b()==="pending",Ve=n`
                background-color: ${i(o.yellow[600],o.yellow[400])};
              `,ut=D(n`
                color: ${i(o.gray[600],o.gray[300])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-reset"),Ge=b()==="pending",tt=n`
                background-color: ${i(o.gray[600],o.gray[400])};
              `,Wt=D(n`
                color: ${i(o.pink[500],o.pink[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-remove"),Mt=y()==="fetching",Qt=n`
                background-color: ${i(o.pink[500],o.pink[400])};
              `,vt=D(n`
                color: ${i(o.cyan[500],o.cyan[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-loading"),Yt=l(),Pt=n`
                background-color: ${i(o.cyan[500],o.cyan[400])};
              `,Dt=D(r().detailsHeader,"tsqd-query-details-header"),Tt=D(r().detailsHeader,"tsqd-query-details-header"),yt=$.size[2];return H!==P.e&&t.className(S,P.e=H),oe!==P.t&&t.className(M,P.t=oe),W!==P.a&&t.className(I,P.a=W),Y!==P.o&&t.className(Q,P.o=Y),Z!==P.i&&t.className(ne,P.i=Z),ie!==P.n&&t.className(ge,P.n=ie),G!==P.s&&t.className(A,P.s=G),Ue!==P.h&&(A.disabled=P.h=Ue),He!==P.r&&t.className(te,P.r=He),De!==P.d&&t.className(U,P.d=De),ct!==P.l&&(U.disabled=P.l=ct),Ve!==P.u&&t.className(Je,P.u=Ve),ut!==P.c&&t.className(_,P.c=ut),Ge!==P.w&&(_.disabled=P.w=Ge),tt!==P.m&&t.className(ce,P.m=tt),Wt!==P.f&&t.className(ue,P.f=Wt),Mt!==P.y&&(ue.disabled=P.y=Mt),Qt!==P.g&&t.className(pt,P.g=Qt),vt!==P.p&&t.className(xe,P.p=vt),Yt!==P.b&&(xe.disabled=P.b=Yt),Pt!==P.T&&t.className(et,P.T=Pt),Dt!==P.A&&t.className(Ke,P.A=Dt),Tt!==P.O&&t.className(Oe,P.O=Tt),yt!==P.I&&((P.I=yt)!=null?Be.style.setProperty("padding",yt):Be.style.removeProperty("padding")),P},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0,T:void 0,A:void 0,O:void 0,I:void 0}),S}})},md=()=>{const e=le(),n=O().shadowDOMTarget?N.bind({target:O().shadowDOMTarget}):N,r=t.createMemo(()=>e()==="dark"?Pe(n):Me(n)),{colors:o}=$,i=(m,f)=>e()==="dark"?f:m,a=Te(m=>{const u=m().getAll().find(g=>g.mutationId===rt());return u?u.state.isPaused:!1}),l=Te(m=>{const u=m().getAll().find(g=>g.mutationId===rt());return u?u.state.status:"idle"}),c=t.createMemo(()=>t.getMutationStatusColor({isPaused:a(),status:l()})),s=Te(m=>m().getAll().find(f=>f.mutationId===rt()),!1),d=()=>c()==="gray"?n`
        background-color: ${i(o[c()][200],o[c()][700])};
        color: ${i(o[c()][700],o[c()][300])};
        border-color: ${i(o[c()][400],o[c()][600])};
      `:n`
      background-color: ${i(o[c()][100],o[c()][900])};
      color: ${i(o[c()][700],o[c()][300])};
      border-color: ${i(o[c()][400],o[c()][600])};
    `;return t.createComponent(t.Show,{get when(){return s()},get children(){var m=od(),f=m.firstChild,u=f.nextSibling,g=u.firstChild,h=g.firstChild,v=h.firstChild,p=h.nextSibling,y=g.nextSibling,b=y.firstChild,w=b.nextSibling,x=u.nextSibling,C=x.nextSibling,T=C.nextSibling,E=T.nextSibling,F=E.nextSibling,S=F.nextSibling,M=S.nextSibling,I=M.nextSibling;return t.insert(v,t.createComponent(t.Show,{get when(){return s().options.mutationKey},fallback:"No mutationKey found",get children(){return t.displayValue(s().options.mutationKey,!0)}})),t.insert(p,t.createComponent(t.Show,{get when(){return c()==="purple"},children:"pending"}),null),t.insert(p,t.createComponent(t.Show,{get when(){return c()!=="purple"},get children(){return l()}}),null),t.insert(w,()=>new Date(s().state.submittedAt).toLocaleTimeString()),t.insert(C,t.createComponent(nt,{label:"Variables",defaultExpanded:["Variables"],get value(){return s().state.variables}})),t.insert(E,t.createComponent(nt,{label:"Context",defaultExpanded:["Context"],get value(){return s().state.context}})),t.insert(S,t.createComponent(nt,{label:"Data",defaultExpanded:["Data"],get value(){return s().state.data}})),t.insert(I,t.createComponent(nt,{label:"Mutation",defaultExpanded:["Mutation"],get value(){return s()}})),t.createRenderEffect(q=>{var V=D(r().detailsContainer,"tsqd-query-details-container"),K=D(r().detailsHeader,"tsqd-query-details-header"),Q=D(r().detailsBody,"tsqd-query-details-summary-container"),L=D(r().queryDetailsStatus,d()),R=D(r().detailsHeader,"tsqd-query-details-header"),B=$.size[2],X=D(r().detailsHeader,"tsqd-query-details-header"),re=$.size[2],me=D(r().detailsHeader,"tsqd-query-details-header"),ne=$.size[2],ge=D(r().detailsHeader,"tsqd-query-details-header"),A=$.size[2];return V!==q.e&&t.className(m,q.e=V),K!==q.t&&t.className(f,q.t=K),Q!==q.a&&t.className(u,q.a=Q),L!==q.o&&t.className(p,q.o=L),R!==q.i&&t.className(x,q.i=R),B!==q.n&&((q.n=B)!=null?C.style.setProperty("padding",B):C.style.removeProperty("padding")),X!==q.s&&t.className(T,q.s=X),re!==q.h&&((q.h=re)!=null?E.style.setProperty("padding",re):E.style.removeProperty("padding")),me!==q.r&&t.className(F,q.r=me),ne!==q.d&&((q.d=ne)!=null?S.style.setProperty("padding",ne):S.style.removeProperty("padding")),ge!==q.l&&t.className(M,q.l=ge),A!==q.u&&((q.u=A)!=null?I.style.setProperty("padding",A):I.style.removeProperty("padding")),q},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),m}})},ln=new Map,pd=()=>{const e=t.createMemo(()=>O().client.getQueryCache()),n=e().subscribe(r=>{t.batch(()=>{for(const[o,i]of ln.entries())i.shouldUpdate(r)&&i.setter(o(e))})});return t.onCleanup(()=>{ln.clear(),n()}),n},se=(e,n=!0,r=()=>!0)=>{const o=t.createMemo(()=>O().client.getQueryCache()),[i,a]=t.createSignal(e(o),n?void 0:{equals:!1});return t.createEffect(()=>{a(e(o))}),ln.set(e,{setter:a,shouldUpdate:r}),t.onCleanup(()=>{ln.delete(e)}),i},cn=new Map,vd=()=>{const e=t.createMemo(()=>O().client.getMutationCache()),n=e().subscribe(()=>{for(const[r,o]of cn.entries())queueMicrotask(()=>{o(r(e))})});return t.onCleanup(()=>{cn.clear(),n()}),n},Te=(e,n=!0)=>{const r=t.createMemo(()=>O().client.getMutationCache()),[o,i]=t.createSignal(e(r),n?void 0:{equals:!1});return t.createEffect(()=>{i(e(r))}),cn.set(e,i),t.onCleanup(()=>{cn.delete(e)}),o},yd="@tanstack/query-devtools-event",qe=({type:e,queryHash:n,metadata:r})=>{const o=new CustomEvent(yd,{detail:{type:e,queryHash:n,metadata:r},bubbles:!0,cancelable:!0});window.dispatchEvent(o)},Ui=(e,n)=>{const{colors:r,font:o,size:i,alpha:a,shadow:l,border:c}=$,s=(d,m)=>e==="light"?d:m;return{devtoolsBtn:n`
      z-index: 100000;
      position: fixed;
      padding: 4px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      box-shadow: ${l.md()};
      overflow: hidden;

      & div {
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 9999px;

        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        filter: blur(6px) saturate(1.2) contrast(1.1);
      }

      &:focus-within {
        outline-offset: 2px;
        outline: 3px solid ${r.green[600]};
      }

      & button {
        position: relative;
        z-index: 1;
        padding: 0;
        border-radius: 9999px;
        background-color: transparent;
        border: none;
        height: 40px;
        display: flex;
        width: 40px;
        overflow: hidden;
        cursor: pointer;
        outline: none;
        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    `,panel:n`
      position: fixed;
      z-index: 9999;
      display: flex;
      gap: ${$.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${s(r.gray[300],r.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${s(r.gray[400],r.darkGray[300])};
      }
    `,parentPanel:n`
      z-index: 9999;
      display: flex;
      height: 100%;
      gap: ${$.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${s(r.gray[300],r.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${s(r.gray[400],r.darkGray[300])};
      }
    `,"devtoolsBtn-position-bottom-right":n`
      bottom: 12px;
      right: 12px;
    `,"devtoolsBtn-position-bottom-left":n`
      bottom: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-left":n`
      top: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-right":n`
      top: 12px;
      right: 12px;
    `,"devtoolsBtn-position-relative":n`
      position: relative;
    `,"panel-position-top":n`
      top: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${i[14]};
      border-bottom: ${s(r.gray[400],r.darkGray[300])} 1px solid;
    `,"panel-position-bottom":n`
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${i[14]};
      border-top: ${s(r.gray[400],r.darkGray[300])} 1px solid;
    `,"panel-position-right":n`
      bottom: 0;
      right: 0;
      top: 0;
      border-left: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      max-width: 90%;
    `,"panel-position-left":n`
      bottom: 0;
      left: 0;
      top: 0;
      border-right: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      max-width: 90%;
    `,closeBtn:n`
      position: absolute;
      cursor: pointer;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${s(r.gray[50],r.darkGray[700])};
      &:hover {
        background-color: ${s(r.gray[200],r.darkGray[500])};
      }
      &:focus-visible {
        outline: 2px solid ${r.blue[600]};
      }
      & svg {
        color: ${s(r.gray[600],r.gray[400])};
        width: ${i[2]};
        height: ${i[2]};
      }
    `,"closeBtn-position-top":n`
      bottom: 0;
      right: ${i[2]};
      transform: translate(0, 100%);
      border-right: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-left: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-top: none;
      border-bottom: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-radius: 0px 0px ${c.radius.sm} ${c.radius.sm};
      padding: ${i[.5]} ${i[1.5]} ${i[1]} ${i[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: -${i[2.5]};
        height: ${i[1.5]};
        width: calc(100% + ${i[5]});
      }

      & svg {
        transform: rotate(180deg);
      }
    `,"closeBtn-position-bottom":n`
      top: 0;
      right: ${i[2]};
      transform: translate(0, -100%);
      border-right: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-left: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-top: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-bottom: none;
      border-radius: ${c.radius.sm} ${c.radius.sm} 0px 0px;
      padding: ${i[1]} ${i[1.5]} ${i[.5]} ${i[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${i[2.5]};
        height: ${i[1.5]};
        width: calc(100% + ${i[5]});
      }
    `,"closeBtn-position-right":n`
      bottom: ${i[2]};
      left: 0;
      transform: translate(-100%, 0);
      border-right: none;
      border-left: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-top: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-bottom: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-radius: ${c.radius.sm} 0px 0px ${c.radius.sm};
      padding: ${i[1.5]} ${i[.5]} ${i[1.5]} ${i[1]};

      &::after {
        content: ' ';
        position: absolute;
        left: 100%;
        height: calc(100% + ${i[5]});
        width: ${i[1.5]};
      }

      & svg {
        transform: rotate(-90deg);
      }
    `,"closeBtn-position-left":n`
      bottom: ${i[2]};
      right: 0;
      transform: translate(100%, 0);
      border-left: none;
      border-right: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-top: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-bottom: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-radius: 0px ${c.radius.sm} ${c.radius.sm} 0px;
      padding: ${i[1.5]} ${i[1]} ${i[1.5]} ${i[.5]};

      &::after {
        content: ' ';
        position: absolute;
        right: 100%;
        height: calc(100% + ${i[5]});
        width: ${i[1.5]};
      }

      & svg {
        transform: rotate(90deg);
      }
    `,queriesContainer:n`
      flex: 1 1 700px;
      background-color: ${s(r.gray[50],r.darkGray[700])};
      display: flex;
      flex-direction: column;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
    `,dragHandle:n`
      position: absolute;
      transition: background-color 0.125s ease;
      &:hover {
        background-color: ${r.purple[400]}${s("",a[90])};
      }
      &:focus {
        outline: none;
        background-color: ${r.purple[400]}${s("",a[90])};
      }
      &:focus-visible {
        outline: 2px solid ${r.blue[800]};
        outline-offset: -2px;
        background-color: ${r.purple[400]}${s("",a[90])};
      }
      z-index: 4;
    `,"dragHandle-position-top":n`
      bottom: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-bottom":n`
      top: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-right":n`
      left: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,"dragHandle-position-left":n`
      right: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,row:n`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${$.size[2]} ${$.size[2.5]};
      gap: ${$.size[2.5]};
      border-bottom: ${s(r.gray[300],r.darkGray[500])} 1px solid;
      align-items: center;
      & > button {
        padding: 0;
        background: transparent;
        border: none;
        display: flex;
        gap: ${i[.5]};
        flex-direction: column;
      }
    `,logoAndToggleContainer:n`
      display: flex;
      gap: ${$.size[3]};
      align-items: center;
    `,logo:n`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      gap: ${$.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${c.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
    `,tanstackLogo:n`
      font-size: ${o.size.md};
      font-weight: ${o.weight.bold};
      line-height: ${o.lineHeight.xs};
      white-space: nowrap;
      color: ${s(r.gray[600],r.gray[300])};
    `,queryFlavorLogo:n`
      font-weight: ${o.weight.semibold};
      font-size: ${o.size.xs};
      background: linear-gradient(
        to right,
        ${s("#ea4037, #ff9b11","#dd524b, #e9a03b")}
      );
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,queryStatusContainer:n`
      display: flex;
      gap: ${$.size[2]};
      height: min-content;
    `,queryStatusTag:n`
      display: flex;
      gap: ${$.size[1.5]};
      box-sizing: border-box;
      height: ${$.size[6.5]};
      background: ${s(r.gray[50],r.darkGray[500])};
      color: ${s(r.gray[700],r.gray[300])};
      border-radius: ${$.border.radius.sm};
      font-size: ${o.size.sm};
      padding: ${$.size[1]};
      padding-left: ${$.size[1.5]};
      align-items: center;
      font-weight: ${o.weight.medium};
      border: ${s("1px solid "+r.gray[300],"1px solid transparent")};
      user-select: none;
      position: relative;
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${r.blue[800]};
      }
    `,queryStatusTagLabel:n`
      font-size: ${o.size.xs};
    `,queryStatusCount:n`
      font-size: ${o.size.xs};
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${s(r.gray[500],r.gray[400])};
      background-color: ${s(r.gray[200],r.darkGray[300])};
      border-radius: 2px;
      font-variant-numeric: tabular-nums;
      height: ${$.size[4.5]};
    `,statusTooltip:n`
      position: absolute;
      z-index: 1;
      background-color: ${s(r.gray[50],r.darkGray[500])};
      top: 100%;
      left: 50%;
      transform: translate(-50%, calc(${$.size[2]}));
      padding: ${$.size[.5]} ${$.size[2]};
      border-radius: ${$.border.radius.sm};
      font-size: ${o.size.xs};
      border: 1px solid ${s(r.gray[400],r.gray[600])};
      color: ${s(r.gray[600],r.gray[300])};

      &::before {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, -100%);
        position: absolute;
        border-color: transparent transparent
          ${s(r.gray[400],r.gray[600])} transparent;
        border-style: solid;
        border-width: 7px;
        /* transform: rotate(180deg); */
      }

      &::after {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, calc(-100% + 2px));
        position: absolute;
        border-color: transparent transparent
          ${s(r.gray[100],r.darkGray[500])} transparent;
        border-style: solid;
        border-width: 7px;
      }
    `,filtersContainer:n`
      display: flex;
      gap: ${$.size[2]};
      & > button {
        cursor: pointer;
        padding: ${$.size[.5]} ${$.size[1.5]} ${$.size[.5]}
          ${$.size[2]};
        border-radius: ${$.border.radius.sm};
        background-color: ${s(r.gray[100],r.darkGray[400])};
        border: 1px solid ${s(r.gray[300],r.darkGray[200])};
        color: ${s(r.gray[700],r.gray[300])};
        font-size: ${o.size.xs};
        display: flex;
        align-items: center;
        line-height: ${o.lineHeight.sm};
        gap: ${$.size[1.5]};
        max-width: 160px;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${c.radius.xs};
          outline: 2px solid ${r.blue[800]};
        }
        & svg {
          width: ${$.size[3]};
          height: ${$.size[3]};
          color: ${s(r.gray[500],r.gray[400])};
        }
      }
    `,filterInput:n`
      padding: ${i[.5]} ${i[2]};
      border-radius: ${$.border.radius.sm};
      background-color: ${s(r.gray[100],r.darkGray[400])};
      display: flex;
      box-sizing: content-box;
      align-items: center;
      gap: ${$.size[1.5]};
      max-width: 160px;
      min-width: 100px;
      border: 1px solid ${s(r.gray[300],r.darkGray[200])};
      height: min-content;
      color: ${s(r.gray[600],r.gray[400])};
      & > svg {
        width: ${i[3]};
        height: ${i[3]};
      }
      & input {
        font-size: ${o.size.xs};
        width: 100%;
        background-color: ${s(r.gray[100],r.darkGray[400])};
        border: none;
        padding: 0;
        line-height: ${o.lineHeight.sm};
        color: ${s(r.gray[700],r.gray[300])};
        &::placeholder {
          color: ${s(r.gray[700],r.gray[300])};
        }
        &:focus {
          outline: none;
        }
      }

      &:focus-within {
        outline-offset: 2px;
        border-radius: ${c.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
    `,filterSelect:n`
      padding: ${$.size[.5]} ${$.size[2]};
      border-radius: ${$.border.radius.sm};
      background-color: ${s(r.gray[100],r.darkGray[400])};
      display: flex;
      align-items: center;
      gap: ${$.size[1.5]};
      box-sizing: content-box;
      max-width: 160px;
      border: 1px solid ${s(r.gray[300],r.darkGray[200])};
      height: min-content;
      & > svg {
        color: ${s(r.gray[600],r.gray[400])};
        width: ${$.size[2]};
        height: ${$.size[2]};
      }
      & > select {
        appearance: none;
        color: ${s(r.gray[700],r.gray[300])};
        min-width: 100px;
        line-height: ${o.lineHeight.sm};
        font-size: ${o.size.xs};
        background-color: ${s(r.gray[100],r.darkGray[400])};
        border: none;
        &:focus {
          outline: none;
        }
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${c.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
    `,actionsContainer:n`
      display: flex;
      gap: ${$.size[2]};
    `,actionsBtn:n`
      border-radius: ${$.border.radius.sm};
      background-color: ${s(r.gray[100],r.darkGray[400])};
      border: 1px solid ${s(r.gray[300],r.darkGray[200])};
      width: ${$.size[6.5]};
      height: ${$.size[6.5]};
      justify-content: center;
      display: flex;
      align-items: center;
      gap: ${$.size[1.5]};
      max-width: 160px;
      cursor: pointer;
      padding: 0;
      &:hover {
        background-color: ${s(r.gray[200],r.darkGray[500])};
      }
      & svg {
        color: ${s(r.gray[700],r.gray[300])};
        width: ${$.size[3]};
        height: ${$.size[3]};
      }
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${c.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
    `,actionsBtnOffline:n`
      & svg {
        stroke: ${s(r.yellow[700],r.yellow[500])};
        fill: ${s(r.yellow[700],r.yellow[500])};
      }
    `,overflowQueryContainer:n`
      flex: 1;
      overflow-y: auto;
      & > div {
        display: flex;
        flex-direction: column;
      }
    `,queryRow:n`
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      cursor: pointer;
      color: ${s(r.gray[700],r.gray[300])};
      background-color: ${s(r.gray[50],r.darkGray[700])};
      line-height: 1;
      &:focus {
        outline: none;
      }
      &:focus-visible {
        outline-offset: -2px;
        border-radius: ${c.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
      &:hover .tsqd-query-hash {
        background-color: ${s(r.gray[200],r.darkGray[600])};
      }

      & .tsqd-query-observer-count {
        padding: 0 ${$.size[1]};
        user-select: none;
        min-width: ${$.size[6.5]};
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${o.size.xs};
        font-weight: ${o.weight.medium};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom: 1px solid ${s(r.gray[300],r.darkGray[700])};
      }
      & .tsqd-query-hash {
        user-select: text;
        font-size: ${o.size.xs};
        display: flex;
        align-items: center;
        min-height: ${$.size[6]};
        flex: 1;
        padding: ${$.size[1]} ${$.size[2]};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        border-bottom: 1px solid ${s(r.gray[300],r.darkGray[400])};
        text-align: left;
        text-overflow: clip;
        word-break: break-word;
      }

      & .tsqd-query-disabled-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${$.size[2]};
        color: ${s(r.gray[800],r.gray[300])};
        background-color: ${s(r.gray[300],r.darkGray[600])};
        border-bottom: 1px solid ${s(r.gray[300],r.darkGray[400])};
        font-size: ${o.size.xs};
      }

      & .tsqd-query-static-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${$.size[2]};
        color: ${s(r.teal[800],r.teal[300])};
        background-color: ${s(r.teal[100],r.teal[900])};
        border-bottom: 1px solid ${s(r.teal[300],r.teal[700])};
        font-size: ${o.size.xs};
      }
    `,selectedQueryRow:n`
      background-color: ${s(r.gray[200],r.darkGray[500])};
    `,detailsContainer:n`
      flex: 1 1 700px;
      background-color: ${s(r.gray[50],r.darkGray[700])};
      color: ${s(r.gray[700],r.gray[300])};
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      display: flex;
      text-align: left;
    `,detailsHeader:n`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${s(r.gray[200],r.darkGray[600])};
      padding: ${$.size[1.5]} ${$.size[2]};
      font-weight: ${o.weight.medium};
      font-size: ${o.size.xs};
      line-height: ${o.lineHeight.xs};
      text-align: left;
    `,detailsBody:n`
      margin: ${$.size[1.5]} 0px ${$.size[2]} 0px;
      & > div {
        display: flex;
        align-items: stretch;
        padding: 0 ${$.size[2]};
        line-height: ${o.lineHeight.sm};
        justify-content: space-between;
        & > span {
          font-size: ${o.size.xs};
        }
        & > span:nth-child(2) {
          font-variant-numeric: tabular-nums;
        }
      }

      & > div:first-child {
        margin-bottom: ${$.size[1.5]};
      }

      & code {
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        margin: 0;
        font-size: ${o.size.xs};
        line-height: ${o.lineHeight.xs};
        max-width: 100%;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      & pre {
        margin: 0;
        display: flex;
        align-items: center;
      }
    `,queryDetailsStatus:n`
      border: 1px solid ${r.darkGray[200]};
      border-radius: ${$.border.radius.sm};
      font-weight: ${o.weight.medium};
      padding: ${$.size[1]} ${$.size[2.5]};
    `,actionsBody:n`
      flex-wrap: wrap;
      margin: ${$.size[2]} 0px ${$.size[2]} 0px;
      display: flex;
      gap: ${$.size[2]};
      padding: 0px ${$.size[2]};
      & > button {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
        font-size: ${o.size.xs};
        padding: ${$.size[1]} ${$.size[2]};
        display: flex;
        border-radius: ${$.border.radius.sm};
        background-color: ${s(r.gray[100],r.darkGray[600])};
        border: 1px solid ${s(r.gray[300],r.darkGray[400])};
        align-items: center;
        gap: ${$.size[2]};
        font-weight: ${o.weight.medium};
        line-height: ${o.lineHeight.xs};
        cursor: pointer;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${c.radius.xs};
          outline: 2px solid ${r.blue[800]};
        }
        &:hover {
          background-color: ${s(r.gray[200],r.darkGray[500])};
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        & > span {
          width: ${i[1.5]};
          height: ${i[1.5]};
          border-radius: ${$.border.radius.full};
        }
      }
    `,actionsSelect:n`
      font-size: ${o.size.xs};
      padding: ${$.size[.5]} ${$.size[2]};
      display: flex;
      border-radius: ${$.border.radius.sm};
      overflow: hidden;
      background-color: ${s(r.gray[100],r.darkGray[600])};
      border: 1px solid ${s(r.gray[300],r.darkGray[400])};
      align-items: center;
      gap: ${$.size[2]};
      font-weight: ${o.weight.medium};
      line-height: ${o.lineHeight.sm};
      color: ${s(r.red[500],r.red[400])};
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${s(r.gray[200],r.darkGray[500])};
      }
      & > span {
        width: ${i[1.5]};
        height: ${i[1.5]};
        border-radius: ${$.border.radius.full};
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${c.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
      & select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        appearance: none;
        background-color: transparent;
        border: none;
        color: transparent;
        outline: none;
      }

      & svg path {
        stroke: ${$.colors.red[400]};
      }
      & svg {
        width: ${$.size[2]};
        height: ${$.size[2]};
      }
    `,settingsMenu:n`
      display: flex;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
      flex-direction: column;
      gap: ${i[.5]};
      border-radius: ${$.border.radius.sm};
      border: 1px solid ${s(r.gray[300],r.gray[700])};
      background-color: ${s(r.gray[50],r.darkGray[600])};
      font-size: ${o.size.xs};
      color: ${s(r.gray[700],r.gray[300])};
      z-index: 99999;
      min-width: 120px;
      padding: ${i[.5]};
    `,settingsSubTrigger:n`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${$.border.radius.xs};
      padding: ${$.size[1]} ${$.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: ${s(r.gray[700],r.gray[300])};
      & svg {
        color: ${s(r.gray[600],r.gray[400])};
        transform: rotate(-90deg);
        width: ${$.size[2]};
        height: ${$.size[2]};
      }
      &:hover {
        background-color: ${s(r.gray[200],r.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${r.blue[800]};
      }
      &.data-disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,settingsMenuHeader:n`
      padding: ${$.size[1]} ${$.size[1]};
      font-weight: ${o.weight.medium};
      border-bottom: 1px solid ${s(r.gray[300],r.darkGray[400])};
      color: ${s(r.gray[500],r.gray[400])};
      font-size: ${o.size.xs};
    `,settingsSubButton:n`
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${s(r.gray[700],r.gray[300])};
      font-size: ${o.size.xs};
      border-radius: ${$.border.radius.xs};
      padding: ${$.size[1]} ${$.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      & svg {
        color: ${s(r.gray[600],r.gray[400])};
      }
      &:hover {
        background-color: ${s(r.gray[200],r.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${r.blue[800]};
      }
      &[data-checked] {
        background-color: ${s(r.purple[100],r.purple[900])};
        color: ${s(r.purple[700],r.purple[300])};
        & svg {
          color: ${s(r.purple[700],r.purple[300])};
        }
        &:hover {
          background-color: ${s(r.purple[100],r.purple[900])};
        }
      }
    `,viewToggle:n`
      border-radius: ${$.border.radius.sm};
      background-color: ${s(r.gray[200],r.darkGray[600])};
      border: 1px solid ${s(r.gray[300],r.darkGray[200])};
      display: flex;
      padding: 0;
      font-size: ${o.size.xs};
      color: ${s(r.gray[700],r.gray[300])};
      overflow: hidden;

      &:has(:focus-visible) {
        outline: 2px solid ${r.blue[800]};
      }

      & .tsqd-radio-toggle {
        opacity: 0.5;
        display: flex;
        & label {
          display: flex;
          align-items: center;
          cursor: pointer;
          line-height: ${o.lineHeight.md};
        }

        & label:hover {
          background-color: ${s(r.gray[100],r.darkGray[500])};
        }
      }

      & > [data-checked] {
        opacity: 1;
        background-color: ${s(r.gray[100],r.darkGray[400])};
        & label:hover {
          background-color: ${s(r.gray[100],r.darkGray[400])};
        }
      }

      & .tsqd-radio-toggle:first-child {
        & label {
          padding: 0 ${$.size[1.5]} 0 ${$.size[2]};
        }
        border-right: 1px solid ${s(r.gray[300],r.darkGray[200])};
      }

      & .tsqd-radio-toggle:nth-child(2) {
        & label {
          padding: 0 ${$.size[2]} 0 ${$.size[1.5]};
        }
      }
    `,devtoolsEditForm:n`
      padding: ${i[2]};
      & > [data-error='true'] {
        outline: 2px solid ${s(r.red[200],r.red[800])};
        outline-offset: 2px;
        border-radius: ${c.radius.xs};
      }
    `,devtoolsEditTextarea:n`
      width: 100%;
      max-height: 500px;
      font-family: 'Fira Code', monospace;
      font-size: ${o.size.xs};
      border-radius: ${c.radius.sm};
      field-sizing: content;
      padding: ${i[2]};
      background-color: ${s(r.gray[100],r.darkGray[800])};
      color: ${s(r.gray[900],r.gray[100])};
      border: 1px solid ${s(r.gray[200],r.gray[700])};
      resize: none;
      &:focus {
        outline-offset: 2px;
        border-radius: ${c.radius.xs};
        outline: 2px solid ${s(r.blue[200],r.blue[800])};
      }
    `,devtoolsEditFormActions:n`
      display: flex;
      justify-content: space-between;
      gap: ${i[2]};
      align-items: center;
      padding-top: ${i[1]};
      font-size: ${o.size.xs};
    `,devtoolsEditFormError:n`
      color: ${s(r.red[700],r.red[500])};
    `,devtoolsEditFormActionContainer:n`
      display: flex;
      gap: ${i[2]};
    `,devtoolsEditFormAction:n`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      font-size: ${o.size.xs};
      padding: ${i[1]} ${$.size[2]};
      display: flex;
      border-radius: ${c.radius.sm};
      background-color: ${s(r.gray[100],r.darkGray[600])};
      border: 1px solid ${s(r.gray[300],r.darkGray[400])};
      align-items: center;
      gap: ${i[2]};
      font-weight: ${o.weight.medium};
      line-height: ${o.lineHeight.xs};
      cursor: pointer;
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${c.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
      &:hover {
        background-color: ${s(r.gray[200],r.darkGray[500])};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `}},Me=e=>Ui("light",e),Pe=e=>Ui("dark",e);t.delegateEvents(["click","mousedown","keydown","input"]);exports.ContentView=rr;exports.Devtools=sd;exports.ParentPanel=ld;exports.PiPProvider=cs;exports.QueryDevtoolsContext=go;exports.THEME_PREFERENCE=os;exports.ThemeContext=mo;exports.createLocalStorage=es;
