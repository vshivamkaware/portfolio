/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#F97316",
          dark:    "#EA580C",
          light:   "#FB923C",
          glow:    "rgba(249,115,22,0.30)",
        },
      },
      fontFamily: {
        // These map to CSS variables injected by next/font/local in _app.js
        sans:    ["var(--font-jakarta)", "Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        space:   ["var(--font-space)",   "Space Grotesk",    "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.68rem",  { lineHeight: "1rem" }],
        "xs":  ["0.75rem",  { lineHeight: "1.125rem" }],
        "sm":  ["0.8125rem",{ lineHeight: "1.25rem" }],
        "base":["0.9375rem",{ lineHeight: "1.6rem" }],
        "lg":  ["1.0625rem",{ lineHeight: "1.65rem" }],
      },
      animation: {
        "fade-in-up":    "fadeInUp 0.5s ease-out forwards",
        "fade-in":       "fadeIn 0.4s ease-out forwards",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
        "float":         "float 3s ease-in-out infinite",
        "pulse-glow":    "pulseGlow 2s ease-in-out infinite",
        "spin-slow":     "spin 8s linear infinite",
        "shimmer":       "shimmer 2s linear infinite",
        "gradient-x":    "gradient-x 4s ease infinite",
      },
      keyframes: {
        fadeInUp:    { "0%":{ opacity:"0", transform:"translateY(20px)" }, "100%":{ opacity:"1", transform:"translateY(0)" } },
        fadeIn:      { "0%":{ opacity:"0" }, "100%":{ opacity:"1" } },
        slideInLeft: { "0%":{ opacity:"0", transform:"translateX(-20px)" }, "100%":{ opacity:"1", transform:"translateX(0)" } },
        float:       { "0%,100%":{ transform:"translateY(0)" }, "50%":{ transform:"translateY(-8px)" } },
        pulseGlow:   {
          "0%,100%":{ boxShadow:"0 0 0 0 rgba(249,115,22,0.45)" },
          "50%":     { boxShadow:"0 0 0 6px rgba(249,115,22,0)" },
        },
        shimmer:     { from:{ backgroundPosition:"-200% 0" }, to:{ backgroundPosition:"200% 0" } },
        "gradient-x": {
          "0%,100%":{ backgroundPosition:"0% 50%" },
          "50%":     { backgroundPosition:"100% 50%" },
        },
      },
      backdropBlur: { xs: "2px" },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
