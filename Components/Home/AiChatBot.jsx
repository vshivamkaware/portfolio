"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, Bot, User, Sparkles, RefreshCw, AlertCircle, ExternalLink } from "lucide-react";

/* ─── System prompt injected as context ─────────────────────────────────── */
const SYSTEM_CTX = `You are a professional AI assistant embedded in Shivam Kaware's portfolio website.
Your job: help HR managers, recruiters, and clients understand Shivam's background quickly.

## Profile
- **Name:** Shivam Kaware
- **Role:** Full Stack Developer & Founder, SoftVue Technology (OPC) Pvt. Ltd.
- **Location:** Pune, India | Available worldwide (remote)
- **Experience:** 3+ years professional, 20+ projects delivered
- **Status:** OPEN TO WORK — freelance, full-time, collaborations

## Skills (proficiency %)
- Next.js 15: 95% | React.js: 90% | Tailwind CSS: 95%
- Node.js: 75% | REST APIs: 90% | MongoDB: 80% | Firebase: 80%
- React Native: 70% | Expo: 75% | TypeScript: 70% | Figma: 65%

## Experience
1. **Founder & CEO — SoftVue Technology** (Jan 2024–Present): 15+ clients (India, UAE, US), 8 web apps, 3 mobile apps
2. **Full Stack Dev — Digital Minds** (Jul–Dec 2023): 3 MERN projects, 10k+ daily users, reduced load time 40%
3. **Intern — Maxotag Technology** (Nov 2022–Jun 2023): MERN training, built internal dashboard for 50+ staff

## Projects
- Blog website (React + Laravel) — 2k+ monthly readers
- SoftVue platform — 15+ clients onboarded
- E-commerce SaaS (Stripe) — ₹2L+ revenue tracked
- Barber Shop App (React Native + Firebase) — 500+ bookings
- College CMS (Next.js) — 500+ students, role-based access

## Contact
- Email: shivai@softvuetechnology.in
- Phone: +91 9921076909
- WhatsApp: https://wa.me/919921076909
- Website: https://softvuetechnology.in

## Rules
- Be concise, professional, friendly
- Use bullet points for lists
- Don't invent information not listed above
- For pricing: say it depends on scope, advise to contact directly
- Respond in the user's language`;

/* ─── Suggestion chips ──────────────────────────────────────────────────── */
const CHIPS = [
  "What are your top skills?",
  "Are you open to hire?",
  "Describe your experience",
  "How do I contact you?",
  "What projects have you built?",
];

/* ─── Gemini REST call (no SDK dependency needed) ───────────────────────── */
async function askGemini(conversationHistory, newUserMsg) {
  const key = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!key || key === "YOUR_KEY_HERE") {
    throw new Error("NO_KEY");
  }

  // Build contents: system context primed as a user/model exchange, then real history
  const contents = [
    {
      role: "user",
      parts: [{ text: `[Context — follow strictly]\n${SYSTEM_CTX}` }],
    },
    {
      role: "model",
      parts: [{ text: "Understood. I'm Shivam's portfolio assistant. Ready to help!" }],
    },
    // Inject prior real messages (skip the initial bot greeting at index 0)
    ...conversationHistory.slice(1).map((m) => ({
      role: m.role === "bot" ? "model" : "user",
      parts: [{ text: m.text }],
    })),
    { role: "user", parts: [{ text: newUserMsg }] },
  ];

  const endpoint =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + key;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents,
      generationConfig: {
        temperature: 0.65,
        topK: 40,
        topP: 0.9,
        maxOutputTokens: 400,
      },
    }),
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    const msg = errData?.error?.message || `HTTP ${res.status}`;
    throw new Error(msg);
  }

  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Empty response from Gemini");
  return text.trim();
}

/* ─── Inline markdown-lite (bold only) ─────────────────────────────────── */
function MsgText({ text }) {
  return (
    <div className="space-y-1.5 leading-relaxed">
      {text.split("\n").map((line, li) => {
        if (!line.trim()) return <div key={li} className="h-1" />;
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={li}>
            {parts.map((part, pi) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={pi} className="font-semibold">{part.slice(2, -2)}</strong>
              ) : (
                <span key={pi}>{part}</span>
              )
            )}
          </p>
        );
      })}
    </div>
  );
}

/* ─── Main component ────────────────────────────────────────────────────── */
export default function AiChatBot() {
  const WELCOME = {
    role: "bot",
    text: "Hi! 👋 I'm Shivam's AI assistant, powered by **Gemini 2.5**.\n\nAsk me about his skills, experience, projects, or availability!",
  };

  const [open, setOpen]           = useState(false);
  const [msgs, setMsgs]           = useState([WELCOME]);
  const [input, setInput]         = useState("");
  const [busy, setBusy]           = useState(false);
  const [err, setErr]             = useState(null);
  const endRef                    = useRef(null);
  const inputRef                  = useRef(null);

  /* Auto-scroll */
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, busy]);

  /* Focus input when chat opens */
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 120);
  }, [open]);

  const send = useCallback(async (text) => {
    const msg = (text || input).trim();
    if (!msg || busy) return;

    setMsgs((p) => [...p, { role: "user", text: msg }]);
    setInput("");
    setBusy(true);
    setErr(null);

    try {
      // Pass current msgs (before appending user msg) as history
      const reply = await askGemini(msgs, msg);
      setMsgs((p) => [...p, { role: "bot", text: reply }]);
    } catch (e) {
      const isNoKey = e.message === "NO_KEY";
      const errMsg = isNoKey
        ? "AI key not configured. Please contact Shivam directly at shivai@softvuetechnology.in 😊"
        : `Gemini error: ${e.message}. Try again or use WhatsApp!`;
      setErr(e.message);
      setMsgs((p) => [...p, { role: "bot", text: errMsg }]);
    } finally {
      setBusy(false);
    }
  }, [input, msgs, busy]);

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  const reset = () => { setMsgs([WELCOME]); setErr(null); };

  const isFirstMsg = msgs.length === 1;

  return (
    <div className="chat-widget">
      {/* ── Window ─────────────────────────────────────────────────────────── */}
      {open && (
        <div
          className="absolute bottom-20 right-0 w-80 sm:w-[360px] rounded-2xl overflow-hidden shadow-2xl shadow-black/25 border border-gray-200 dark:border-[#252525] bg-white dark:bg-[#111111]"
          style={{ animation: "scaleIn 0.22s ease-out" }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#F97316] to-[#EA580C] px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <Sparkles size={15} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Portfolio AI</p>
                <p className="text-white/70 text-[10px] font-medium">Gemini 2.5 Flash</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={reset} title="Reset"
                className="p-1.5 rounded-lg hover:bg-white/15 text-white/70 hover:text-white transition-colors">
                <RefreshCw size={13} />
              </button>
              <button onClick={() => setOpen(false)} aria-label="Close"
                className="p-1.5 rounded-lg hover:bg-white/15 text-white/70 hover:text-white transition-colors">
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[290px] overflow-y-auto p-4 space-y-3 scrollbar-hide">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} gap-2 items-end`}>
                {m.role === "bot" && (
                  <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 mb-px">
                    <Bot size={11} className="text-[#F97316]" />
                  </div>
                )}
                <div className={`max-w-[84%] px-3.5 py-2.5 rounded-2xl text-[12.5px] ${
                  m.role === "user"
                    ? "bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white rounded-br-sm font-medium"
                    : "bg-gray-100 dark:bg-[#1E1E1E] text-gray-800 dark:text-gray-100 rounded-bl-sm"
                }`}>
                  {m.role === "bot" ? <MsgText text={m.text} /> : m.text}
                </div>
                {m.role === "user" && (
                  <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-[#2A2A2A] flex items-center justify-center flex-shrink-0 mb-px">
                    <User size={11} className="text-gray-500" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing dots */}
            {busy && (
              <div className="flex items-end gap-2">
                <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                  <Bot size={11} className="text-[#F97316]" />
                </div>
                <div className="bg-gray-100 dark:bg-[#1E1E1E] px-4 py-3 rounded-2xl rounded-bl-sm">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 bg-[#F97316] rounded-full inline-block"
                        style={{ animation: `bounce 0.9s ease-in-out ${i * 0.2}s infinite` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Suggestion chips — shown only before first reply */}
          {isFirstMsg && (
            <div className="px-3 pb-2 flex flex-wrap gap-1.5 border-t border-gray-100 dark:border-[#1E1E1E] pt-2.5">
              {CHIPS.map((c) => (
                <button
                  key={c}
                  onClick={() => send(c)}
                  className="text-[10.5px] px-2.5 py-1.5 bg-orange-50 dark:bg-[#1D1D1D] text-[#F97316] border border-orange-200/60 dark:border-orange-500/20 rounded-full hover:bg-[#F97316] hover:text-white hover:border-transparent transition-all font-medium"
                >
                  {c}
                </button>
              ))}
            </div>
          )}

          {/* Error notice */}
          {err && err !== "NO_KEY" && (
            <div className="mx-3 mb-2 px-3 py-2 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/40 rounded-xl flex items-center gap-2">
              <AlertCircle size={12} className="text-red-500 flex-shrink-0" />
              <span className="text-[10.5px] text-red-600 dark:text-red-400">Network error — try again</span>
              <a href="https://wa.me/919921076909" target="_blank" rel="noopener noreferrer"
                className="ml-auto text-[10.5px] text-[#F97316] font-medium flex items-center gap-0.5 hover:underline">
                WhatsApp <ExternalLink size={9} />
              </a>
            </div>
          )}

          {/* Input */}
          <div className="px-3 pb-3 flex gap-2 border-t border-gray-100 dark:border-[#1E1E1E] pt-3">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask me anything…"
              disabled={busy}
              className="flex-1 px-3.5 py-2.5 bg-gray-100 dark:bg-[#1E1E1E] rounded-xl text-[13px] text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F97316]/25 border border-transparent disabled:opacity-50"
            />
            <button
              onClick={() => send()}
              disabled={!input.trim() || busy}
              aria-label="Send"
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F97316] to-[#EA580C] flex items-center justify-center text-white shadow shadow-orange-500/25 hover:scale-105 active:scale-95 transition-transform disabled:opacity-35 disabled:cursor-not-allowed flex-shrink-0"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}

      {/* ── Trigger ─────────────────────────────────────────────────────────── */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Chat with AI"}
        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F97316] to-[#EA580C] shadow-xl shadow-orange-500/35 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-200 relative"
      >
        {open ? <X size={22} /> : <Sparkles size={22} />}
        {!open && (
          <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white dark:bg-[#0F0F0F] text-[#F97316] text-[9px] font-black flex items-center justify-center shadow border border-orange-100 dark:border-[#252525]">
            AI
          </span>
        )}
      </button>
    </div>
  );
}
