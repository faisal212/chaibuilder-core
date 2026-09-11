import { jsxs as R, Fragment as J, jsx as m } from "react/jsx-runtime";
import { Bot as Y } from "lucide-react";
import { useCallback as Z, Fragment as tt, Suspense as et, lazy as nt, startTransition as z } from "react";
import { toast as rt } from "sonner";
import { U as st, V as ot, W as at, r as it, a as ct, X as lt } from "./index-z9dYL-7R.js";
import { C as ut, a as dt, b as mt, R as ft, c as pt, d as ht, T as gt, M as At, e as kt, f as yt, h as It, S as bt, i as St } from "./selected-block-display-DTZ3Z4ZF.js";
import { i as Ct, j as Et } from "./index-CN6iBDcU.js";
import { useQueryClient as vt } from "@tanstack/react-query";
import { g as Q } from "./apply-binding-v_W4uR3U.js";
const wt = () => {
  const { addPredefinedBlock: I } = st(), F = ot(), b = at(), x = vt(), N = async (o, n) => {
    if (!n) return;
    const e = Q(n);
    await I(e, o.parentId, o.position);
  }, w = async (o, n) => {
    if (!o.blockId || !n) return;
    const e = Q(n);
    await F(o.blockId, e);
  }, C = async (o) => {
    !o.ids || o.ids.length === 0 || await b(o.ids);
  };
  let d = null;
  const H = (o, n) => {
    const e = document.getElementById("canvas-iframe");
    if (!e)
      return null;
    const l = e == null ? void 0 : e.contentDocument;
    if (!l)
      return null;
    l.querySelectorAll("[data-stream-canvas]").forEach((f) => f.remove());
    let s = null;
    if (o && o !== "undefined" && (s = l.querySelector(`[data-block-id="${o}"]`)), s || (s = l.body), !s)
      return null;
    if (d = l.createElement("div"), d.setAttribute("data-stream-canvas", "true"), n !== void 0 && n >= 0 && s.children) {
      const f = Math.min(n, s.children.length);
      f < s.children.length ? s.insertBefore(d, s.children[f]) : s.appendChild(d);
    } else
      s.appendChild(d);
    return d;
  }, P = (o) => {
    var s;
    const n = document.getElementById("canvas-iframe");
    if (!n)
      return null;
    const e = n == null ? void 0 : n.contentDocument;
    if (!e)
      return null;
    e.querySelectorAll("[data-stream-canvas]").forEach((f) => f.remove());
    const u = e.querySelector(`[data-block-id="${o}"]`);
    return u ? (d = e.createElement("div"), d.setAttribute("data-stream-canvas", "true"), (s = u.parentNode) == null || s.insertBefore(d, u.nextSibling), u.style.display = "none", d) : null;
  }, L = (o) => {
    const n = document.getElementById("canvas-iframe");
    (n == null ? void 0 : n.contentWindow) && o.scrollIntoView({ behavior: "smooth", block: "end" });
  }, B = (o, n, e) => {
    const l = H(n, e);
    l && (l.innerHTML = o, L(l));
  }, T = (o, n) => {
    const e = P(n);
    e && (e.innerHTML = o, L(e));
  }, O = (o) => {
    const n = o.match(/^--ACTION=(.+)--$/);
    if (!n) return null;
    let l = n[1].replace(/--/g, "").split("|");
    const s = { type: l[0] };
    return l.forEach((f) => {
      const t = f.trim();
      if (t.startsWith("PARENT=")) {
        const g = t.substring(7);
        s.parentId = g === "undefined" ? void 0 : g;
      } else t.startsWith("POS=") ? s.position = parseInt(t.substring(4)) : t.startsWith("ID=") ? s.blockId = t.substring(3) : t.startsWith("IDS=") && (s.ids = t.substring(4).split(",").map((g) => g.trim()));
    }), s;
  };
  return Z(
    async (o, n) => {
      const e = new TextDecoder();
      let l = "", u = "", s = !1, f = null;
      const t = {
        isInAction: !1,
        currentAction: null,
        htmlBuffer: "",
        isCapturingHtml: !1
      }, g = async (r) => {
        const a = r.trim();
        if (a === "--START--") {
          s = !0;
          return;
        }
        if (s) {
          if (a === "--END--") {
            t.currentAction && (t.htmlBuffer || t.currentAction.type === "REMOVE") && await M(t.currentAction, t.htmlBuffer), d && (d.remove(), d = null);
            return;
          }
          if (a.startsWith("--THINKING=")) {
            const i = a.substring(11);
            n((c) => {
              const p = [...c], h = p[p.length - 1];
              if (h && h.role === "assistant" && h.isReasoning)
                h.content = i, h.isStreaming = !1;
              else {
                const $ = {
                  id: Date.now().toString(),
                  role: "assistant",
                  content: i,
                  isReasoning: !0,
                  isStreaming: !1
                };
                p.push($);
              }
              return p;
            });
            return;
          }
          if (a.startsWith("--TASK=")) {
            const i = a.substring(7), c = `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, p = {
              id: c,
              role: "assistant",
              content: i.replace(/--$/, ""),
              isTask: !0,
              isTaskLoading: !0,
              isTaskCompleted: !1
            };
            f = c, n((h) => [...h, p]);
            return;
          }
          if (a.startsWith("--MSG=")) {
            const i = a.substring(6), c = {
              id: Date.now().toString(),
              role: "assistant",
              content: i.replace(/--$/g, ""),
              isReasoning: !1,
              isStreaming: !1
            };
            n((p) => [...p, c]);
            return;
          }
          if (a.startsWith("--ACTION=")) {
            t.currentAction && (t.htmlBuffer || t.currentAction.type === "REMOVE") && await M(t.currentAction, t.htmlBuffer), t.currentAction = O(a), t.htmlBuffer = "", t.isInAction = !0;
            return;
          }
          if (a === "--ENDACTION--") {
            t.currentAction && (t.htmlBuffer || t.currentAction.type === "REMOVE") && await M(t.currentAction, t.htmlBuffer), f && (n((i) => i.map((c) => c.isTask ? { ...c, isTaskCompleted: !0 } : c)), f = null), t.currentAction = null, t.htmlBuffer = "", t.isInAction = !1;
            return;
          }
          if (a === "--HTML--") {
            t.isCapturingHtml = !0;
            return;
          }
          if (a === "--ENDHTML--") {
            t.isCapturingHtml = !1;
            return;
          }
          if (a.startsWith("--HTML--") && a.includes("--ENDHTML--")) {
            const i = a.match(/^--HTML--(.+?)--ENDHTML--$/);
            if (i && t.currentAction) {
              const c = i[1];
              t.htmlBuffer += c, t.currentAction.type === "ADD" ? B(t.htmlBuffer, t.currentAction.parentId, t.currentAction.position) : t.currentAction.type === "EDIT" && t.currentAction.blockId && T(t.htmlBuffer, t.currentAction.blockId);
            }
            return;
          }
          t.isCapturingHtml && t.currentAction && (t.htmlBuffer += r + `
`, t.currentAction.type === "ADD" ? B(t.htmlBuffer, t.currentAction.parentId, t.currentAction.position) : t.currentAction.type === "EDIT" && t.currentAction.blockId && T(t.htmlBuffer, t.currentAction.blockId));
        }
      }, M = async (r, a) => {
        try {
          switch (r.type) {
            case "ADD":
              await N(r, a);
              break;
            case "EDIT":
              await w(r, a);
              break;
            case "REMOVE":
              await C(r);
              break;
          }
          n((i) => i.filter((c) => !c.isTask));
        } catch (i) {
          console.log(i);
        }
      };
      try {
        for (; ; ) {
          const { done: r, value: a } = await o.read();
          if (r) break;
          const i = e.decode(a, { stream: !0 });
          l += i, u += i;
          const c = u.split(`
`);
          u = c.pop() || "";
          for (const p of c)
            await g(p);
        }
        u && await g(u), x.invalidateQueries({
          queryKey: ["AI_USAGE"]
        });
      } catch (r) {
        console.log(r);
      }
    },
    [b]
  );
}, Bt = nt(() => import("./ai-prompt-input-CW3824iz.js")), Ft = ({
  t: I,
  fetch: F,
  input: b,
  messages: x,
  setInput: N,
  isLoading: w,
  setMessages: C,
  handleStop: d,
  setIsLoading: H,
  currentBlock: P,
  fallbackLang: L,
  setCurrentBlock: B,
  setAbortController: T,
  selectedModel: O,
  onModelChange: o
}) => {
  const { models: n } = Ct(), e = Et(), l = n.find((r) => r.id === "google/gemini-3-flash") || n[0], u = O || l.id, s = it(), [, f] = ct(), t = lt(), g = wt(), M = async (r, a, i, c) => {
    var V, _;
    if (!r || w) return;
    B(s);
    const p = t(s ? { blockId: s._id, additionalCoreBlocks: ["Icon"] } : { additionalCoreBlocks: ["Icon"] });
    if (s && !p) {
      rt.error(I("Something went wrong. Please try again."));
      return;
    }
    const h = {
      id: Date.now().toString(),
      role: "user",
      content: St({
        language: L,
        userInput: a || r,
        currentHtml: p
      }),
      userMessage: r
    }, $ = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: "",
      isReasoning: !0,
      isStreaming: !0
    };
    C((A) => [...A, h, $]), H(!0);
    const X = new AbortController();
    T(X);
    const S = c || u;
    (V = e.onAIEvent) == null || V.call(e, { type: "stream_start", model: S, timestamp: Date.now() });
    try {
      const A = {
        messages: [h].map((k) => ({
          role: k.role,
          content: k.content
        })),
        model: c || u,
        context: e.context
      };
      i && (A.image = i);
      const W = await F({ body: { action: "ASK_AI", data: A }, streamResponse: !0 });
      if (!W.ok)
        throw new Error(I("Failed to get AI response"));
      const y = (_ = W.body) == null ? void 0 : _.getReader();
      if (!y) throw new Error(I("Response body is not readable"));
      await g(y, C), C((k) => (z(() => {
        var j, K, G, U;
        const D = k.filter((q) => q.role === "assistant" && !q.isReasoning && !q.isTask), E = ((j = D[D.length - 1]) == null ? void 0 : j.content) || "", v = Date.now();
        (K = e.onSuccess) == null || K.call(e, { content: E, model: S, timestamp: v }), (G = e.onComplete) == null || G.call(e, { success: !0, content: E, model: S, timestamp: v }), (U = e.onAIEvent) == null || U.call(e, {
          type: "completion",
          content: E,
          model: S,
          timestamp: v
        });
      }), k));
    } catch (A) {
      if (A.name !== "AbortError") {
        const W = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: I("Sorry, I encountered an error. Please try again.")
        };
        C((y) => [...y, W]), z(() => {
          var D, E, v;
          const y = A instanceof Error ? A.message : String(A), k = Date.now();
          (D = e.onError) == null || D.call(e, { error: y, model: S, timestamp: k }), (E = e.onComplete) == null || E.call(e, { success: !1, error: y, model: S, timestamp: k }), (v = e.onAIEvent) == null || v.call(e, { type: "error", error: y, model: S, timestamp: k });
        });
      }
    } finally {
      N(""), H(!1), B(null), T(null);
    }
  };
  return /* @__PURE__ */ R(J, { children: [
    /* @__PURE__ */ R(ut, { className: "no-scrollbar", children: [
      /* @__PURE__ */ R(dt, { className: "gap-2 px-0", children: [
        x.length === 0 && /* @__PURE__ */ m(
          mt,
          {
            icon: /* @__PURE__ */ m(Y, { size: 48, className: "text-gray-300" }),
            title: "Start a conversation",
            description: I("Start a conversation with the AI assistant to add/edit current page")
          }
        ),
        x.map(
          (r) => r.role !== "system" && /* @__PURE__ */ m(tt, { children: r.isReasoning ? /* @__PURE__ */ R(ft, { isStreaming: r.isStreaming, defaultOpen: !0, children: [
            /* @__PURE__ */ m(pt, { className: "text-xs [&_p]:text-muted-foreground" }),
            /* @__PURE__ */ m(ht, { className: "p-0 text-xs", children: r.content })
          ] }) : r.isTask && !r.isTaskCompleted ? /* @__PURE__ */ m(gt, { content: r.content, isLoading: r.isTaskLoading }) : /* @__PURE__ */ m(At, { from: r.role, children: /* @__PURE__ */ m(kt, { className: "p-0", children: r.role === "assistant" ? /* @__PURE__ */ m(yt, { className: "p-0 text-xs", children: r.content }) : /* @__PURE__ */ m("div", { className: "p-0 text-xs", children: r.userMessage || r.content }) }) }) }, r.id)
        )
      ] }),
      /* @__PURE__ */ m(It, {})
    ] }),
    /* @__PURE__ */ R("div", { className: "border-gray-200 pb-2", children: [
      /* @__PURE__ */ m(bt, { onRemove: () => f([]), isLoading: w }),
      /* @__PURE__ */ m(et, { fallback: /* @__PURE__ */ m("div", { children: "Loading..." }), children: /* @__PURE__ */ m(
        Bt,
        {
          input: b,
          setInput: N,
          onSend: M,
          onStop: d,
          isLoading: w,
          selectedLang: "",
          currentBlock: s || P,
          disabled: (b == null ? void 0 : b.length) === 0,
          selectedModel: u,
          onModelChange: o
        }
      ) })
    ] })
  ] });
};
export {
  Ft as default
};
