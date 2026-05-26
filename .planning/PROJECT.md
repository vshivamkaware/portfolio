# Portfolio v2.0 — Shivam Kaware

## Project
Professional developer portfolio built with Next.js 15 + React 19 + Tailwind CSS.
Orange-themed, targeting HR managers and high-value clients.

## Critical Issues (current)
1. **Fonts broken** — Google Fonts network blocked; `next/font` fails silently, fallback serif used
2. **AI Chatbot broken** — Gemini API fetch fails; no error handling; chat does not respond
3. **Missing tab** — No Events/Photos/Certificates section
4. **Font misuse** — Syne (display font) applied to small UI text making it unreadable
5. **No production build test** — untested

## Tech Stack
- Framework: Next.js 15.5 (Turbopack)
- Styling: Tailwind CSS + globals.css
- AI: Gemini 2.0 Flash API (key: NEXT_PUBLIC_GEMINI_API_KEY)
- Fonts: Inter (body) + Syne (headings only) — must be self-hosted or CDN-safe
- Icons: lucide-react + react-icons
- Animation: framer-motion

## Directory
d:/portfolio
