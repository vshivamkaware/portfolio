/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // ── Static Export Requirement ──────────────────────────────────────────
  output: "export",

  // ── Compiler Optimisations ──────────────────────────────────────────────
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // strip console.log in prod
  },

  // ── Image Optimisation ─────────────────────────────────────────────────
  // GitHub Pages cannot run the Next.js image server. Images must be unoptimized.
  // Remote images (like your GitHub stats) will still load directly from their source URLs.
  images: {
    unoptimized: true,
  },
  
  // NOTE: If your GitHub repo is named something like "portfolio" instead of 
  // "username.github.io", you MUST uncomment the line below and add your repo name.
  // basePath: "/portfolio",
};

module.exports = nextConfig;
