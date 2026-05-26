"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme }   = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-[#161616] animate-pulse" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 rounded-xl bg-orange-50 dark:bg-[#161616] border border-orange-100 dark:border-white/[0.06] flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gradient-to-br hover:from-[#F97316] hover:to-[#EA580C] hover:text-white hover:border-transparent transition-all duration-200 group"
      aria-label="Toggle theme"
    >
      <span className="transition-transform duration-300 group-hover:scale-110">
        {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
      </span>
    </button>
  );
}
