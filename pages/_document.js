import { Html, Head, Main, NextScript } from "next/document";

/*
  _document.js — Server-rendered shell. Runs once on the server.
  This is where we put:
  - Resource hints (preload, preconnect, dns-prefetch)
  - No external scripts — all fonts are self-hosted via next/font/local
*/
export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* ── Favicon ── */}
        <link rel="icon"       href="/favicon.ico" />
        <link rel="icon"       type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        {/* ── Theme colors ── */}
        <meta name="theme-color"       content="#F97316" />
        <meta name="msapplication-TileColor" content="#F97316" />
        <meta name="color-scheme"      content="dark light" />

        {/* ── External DNS prefetch only (no font links — next/font handles this) ── */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//api.github.com" />
        <link rel="preconnect"   href="https://github-readme-stats.vercel.app" />

        {/*
          AI crawler hints — helps Googlebot, Bingbot, GPTBot understand the site.
          These meta tags tell crawlers what this page is about.
        */}
        <meta name="googlebot"      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot"        content="index, follow" />

        {/* ── Charset & viewport handled by Next.js automatically ── */}
      </Head>

      <body className="antialiased bg-[#F5F0EB] dark:bg-[#080808] transition-colors">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
