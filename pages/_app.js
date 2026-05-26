import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";

/*
  Typography System — Self-hosted, zero network dependency.
  Served from /public/fonts/ by Next.js static asset pipeline.

  BODY / UI: Plus Jakarta Sans
    — Warm, highly legible, rounded terminals.
    — Used by Stripe, Loom, Linear. Premium modern SaaS aesthetic.
    — Excellent at small sizes (nav labels, captions, form inputs).

  HEADINGS: Space Grotesk
    — Geometric, technical, distinctive.
    — Conveys precision and craft — perfect for a developer brand.
    — Bold weights create strong visual hierarchy.
*/

const jakarta = localFont({
  src: [
    { path: "../public/fonts/jakarta-300.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/jakarta-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/jakarta-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/jakarta-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/jakarta-700.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/jakarta-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

const spaceGrotesk = localFont({
  src: [
    { path: "../public/fonts/space-300.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/space-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/space-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/space-600.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/space-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-space",
  display: "swap",
  preload: true,
  fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class" defaultTheme="dark">
      {/*
        font-jakarta class sets Plus Jakarta Sans as the base for everything.
        CSS variables --font-jakarta and --font-space are available globally.
        Use font-space on headings for the geometric premium look.
      */}
      <div className={`${jakarta.variable} ${spaceGrotesk.variable} font-jakarta`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
