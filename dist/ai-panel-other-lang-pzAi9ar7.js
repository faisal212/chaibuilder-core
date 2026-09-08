import { jsxs as g, Fragment as L, jsx as s } from "react/jsx-runtime";
import { Bot as ee } from "lucide-react";
import { useRef as te, useEffect as se, Suspense as P, lazy as F, Fragment as oe, startTransition as j } from "react";
import { useTranslation as ne } from "react-i18next";
import { r as re, a as ae, s as le, t as ce } from "./index-BmV_dra3.js";
import { C as ie, a as de, b as me, R as ue, c as he, d as pe, T as Se, M as ye, e as Te, f as ke, S as ge, g as fe } from "./selected-block-display-D8WMwG9n.js";
import { i as we, j as xe } from "./index-D-G5gvhP.js";
const Ae = F(() => import("./ai-translation-prompt-B-dgO6j1.js")), Me = F(() => import("./ai-prompt-input-4bSbe3Qe.js")), Ce = ({
  fetch: _,
  input: m,
  messages: f,
  setInput: A,
  isLoading: u,
  handleStop: z,
  setMessages: M,
  setIsLoading: w,
  selectedLang: h,
  currentBlock: U,
  fallbackLang: q,
  abortController: x,
  setAbortController: J,
  setCurrentBlock: N,
  selectedModel: K,
  onModelChange: V
}) => {
  const { t: r } = ne(), { models: b } = we(), t = xe(), W = b.find((e) => e.id === "google/gemini-3-flash") || b[0], E = K || W.id, $ = te(null), p = re(), [, G] = ae(), R = le(), H = ce(), Q = () => {
    var e;
    (e = $.current) == null || e.scrollIntoView({ behavior: "smooth" });
  };
  se(() => {
    Q();
  }, [f, u]);
  const v = async (e, B, X) => {
    var D, O;
    p && N(p);
    const I = (e == null ? void 0 : e.toLowerCase()) === "translate", C = {
      id: Date.now().toString(),
      role: "user",
      content: fe({
        fallbackLang: q,
        userInput: B || e,
        language: h,
        blocks: I ? R() : R(h)
      }),
      userMessage: B || e || r("Translate the content")
    }, Y = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: "Thinking...",
      isReasoning: !0,
      isStreaming: !0
    };
    w(!0);
    const Z = new AbortController();
    J(Z), M((a) => [...a, C, Y]), w(!0);
    const n = X || E;
    (D = t.onAIEvent) == null || D.call(t, { type: "stream_start", model: n, timestamp: Date.now() });
    try {
      const a = {
        messages: [C],
        initiator: I ? "TRANSLATE_CONTENT" : "UPDATE_CONTENT",
        model: n,
        context: t.context
      }, l = await _({ body: { action: "ASK_AI", data: a }, streamResponse: !0 });
      if (!l.ok)
        throw new Error(r("Failed to get AI response"));
      const c = (O = l.body) == null ? void 0 : O.getReader(), S = new TextDecoder();
      let o = "";
      if (!c) throw new Error(r("Response body is not readable"));
      for (; ; ) {
        const { done: d, value: T } = await c.read();
        if (d)
          break;
        const k = S.decode(T, { stream: !0 });
        o += k, M((i) => (i[i.length - 1].content = o, [...i]));
      }
      const y = JSON.parse(o == null ? void 0 : o.replace("```json", "").replace("```", ""));
      H(y), j(() => {
        var T, k, i;
        const d = Date.now();
        (T = t.onSuccess) == null || T.call(t, { content: o, model: n, timestamp: d }), (k = t.onComplete) == null || k.call(t, { success: !0, content: o, model: n, timestamp: d }), (i = t.onAIEvent) == null || i.call(t, {
          type: "completion",
          content: o,
          model: n,
          timestamp: d
        });
      });
    } catch (a) {
      x == null || x.abort(), j(() => {
        var S, o, y;
        const l = a instanceof Error ? a.message : String(a), c = Date.now();
        (S = t.onError) == null || S.call(t, { error: l, model: n, timestamp: c }), (o = t.onComplete) == null || o.call(t, { success: !1, error: l, model: n, timestamp: c }), (y = t.onAIEvent) == null || y.call(t, { type: "error", error: l, model: n, timestamp: c });
      });
    } finally {
      w(!1), A(""), N(null);
    }
  };
  return /* @__PURE__ */ g(L, { children: [
    /* @__PURE__ */ s("div", { className: "py-2", children: /* @__PURE__ */ s(P, { fallback: /* @__PURE__ */ s("div", { children: r("Loading...") }), children: /* @__PURE__ */ s(
      Ae,
      {
        isLoading: u,
        selectedBlock: p,
        selectedLang: h,
        onClick: v
      }
    ) }) }),
    /* @__PURE__ */ s(ie, { children: /* @__PURE__ */ g(de, { className: "gap-4 px-0", children: [
      f.length === 0 && /* @__PURE__ */ s(
        me,
        {
          icon: /* @__PURE__ */ s(ee, { size: 48, className: "text-gray-300" }),
          title: r("Start a conversation with the AI assistant to translate/edit your content"),
          description: r(
            "Only content can be edited in secondary languages. To edit layout, styles and more, switch to the default language."
          )
        }
      ),
      f.map(
        (e) => e.role !== "system" && /* @__PURE__ */ s(oe, { children: e.isReasoning ? /* @__PURE__ */ g(ue, { isStreaming: e.isStreaming, defaultOpen: !0, children: [
          /* @__PURE__ */ s(he, { className: "text-xs [&_p]:text-muted-foreground" }),
          /* @__PURE__ */ s(pe, { className: "p-0 text-xs", children: e.content })
        ] }) : e.isTask ? /* @__PURE__ */ s(Se, { content: e.content, isLoading: e.isTaskLoading }) : /* @__PURE__ */ s(ye, { from: e.role, children: /* @__PURE__ */ s(Te, { className: "p-0", children: e.role === "assistant" ? /* @__PURE__ */ s(ke, { className: "p-0 text-xs", children: e.content }) : /* @__PURE__ */ s("div", { className: "p-0 text-xs", children: e.userMessage || e.content }) }) }) }, e.id)
      )
    ] }) }),
    /* @__PURE__ */ g("div", { className: "border-gray-200 pb-2", children: [
      /* @__PURE__ */ s(ge, { onRemove: () => G([]), isLoading: u }),
      /* @__PURE__ */ s(P, { fallback: /* @__PURE__ */ s("div", { children: r("Loading...") }), children: /* @__PURE__ */ s(
        Me,
        {
          input: m,
          setInput: A,
          onSend: v,
          onStop: z,
          isLoading: u,
          selectedLang: h,
          currentBlock: p || U,
          disabled: (m == null ? void 0 : m.length) === 0,
          selectedModel: E,
          onModelChange: V
        }
      ) })
    ] })
  ] });
};
export {
  Ce as default
};
