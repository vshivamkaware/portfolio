/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ── Compiler Optimisations ──────────────────────────────────────────────
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // strip console.log in prod
  },

  // ── Image Optimisation ─────────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],           // modern formats first
    minimumCacheTTL: 60 * 60 * 24 * 30,             // 30 days browser cache
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: "https", hostname: "github-readme-stats.vercel.app" },
      { protocol: "https", hostname: "github-readme-streak-stats.herokuapp.com" },
      { protocol: "https", hostname: "github-readme-activity-graph.vercel.app" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },

  // ── HTTP Headers — Security + Performance ──────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security
          { key: "X-Content-Type-Options",  value: "nosniff" },
          { key: "X-Frame-Options",         value: "DENY" },
          { key: "X-XSS-Protection",        value: "1; mode=block" },
          { key: "Referrer-Policy",         value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",      value: "camera=(), microphone=(), geolocation=()" },
          // Performance hint for AI crawlers + SEO bots
          { key: "X-Robots-Tag",            value: "index, follow" },
        ],
      },
      // Long-term cache for self-hosted fonts
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Long-term cache for other static assets
      {
        source: "/:path*\\.(ico|svg|png|jpg|jpeg|webp|avif|gif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },

  // ── Redirects (for SEO — prefer trailing slash consistency) ────────────
  async redirects() {
    return [];
  },
};

module.exports = nextConfig;
