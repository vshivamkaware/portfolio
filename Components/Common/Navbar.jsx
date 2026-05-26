"use client";
import React, { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "About",    tab: 1 },
  { label: "Resume",   tab: 2 },
  { label: "Projects", tab: 3 },
  { label: "Contact",  tab: 4 },
  { label: "Stats",    tab: 5 },
];

export default function Navbar({ activeTab, setActiveTab }) {
  const [scrolled, setScrolled]           = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen]           = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const doc = document.documentElement;
      const pct = (window.scrollY / (doc.scrollHeight - doc.clientHeight)) * 100;
      setScrollProgress(Math.min(pct, 100));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (tab) => { setActiveTab(tab); setMenuOpen(false); };

  return (
    <>
      {/* Scroll Progress */}
      <div
        style={{ width: `${scrollProgress}%` }}
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#F97316] to-[#FBBF24] z-[9999] transition-all duration-100"
      />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 dark:bg-[#080808]/85 backdrop-blur-xl shadow-xl shadow-black/5 border-b border-orange-100/50 dark:border-white/[0.04]"
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3.5 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#F97316] to-[#EA580C] flex items-center justify-center text-white font-black text-sm shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-200">
              SK
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
            </div>
            <div className="leading-none">
              <div className="text-[15px] font-bold font-space tracking-tight">
                <span className="gradient-text-warm">Shivam</span>
                <span className="text-gray-900 dark:text-white"> Kaware</span>
              </div>
              <div className="text-[10px] text-gray-400 font-inter font-medium tracking-widest uppercase">
                Full Stack Developer
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.tab}
                onClick={() => handleNav(link.tab)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === link.tab
                    ? "bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white shadow-md shadow-orange-500/30"
                    : "text-gray-500 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-[#161616] hover:text-[#F97316]"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="mx-2 h-5 w-px bg-gray-200 dark:bg-white/10" />
            <a
              href="https://drive.google.com/uc?export=download&id=1C6ej0sl9pBTXjV3nJWx3c0q-hBcpAP53"
              className="flex items-center gap-1.5 px-4 py-2 bg-orange-50 dark:bg-[#161616] border border-orange-200/60 dark:border-orange-500/20 text-[#F97316] rounded-xl text-sm font-semibold hover:bg-gradient-to-r hover:from-[#F97316] hover:to-[#EA580C] hover:text-white hover:border-transparent transition-all duration-200"
            >
              <Download size={14} />
              CV
            </a>
            <div className="ml-1">
              <ThemeToggler />
            </div>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggler />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-xl bg-orange-50 dark:bg-[#161616] text-[#F97316] hover:bg-orange-100 dark:hover:bg-[#1D1D1D] transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-white/95 dark:bg-[#080808]/95 backdrop-blur-xl border-t border-orange-100/50 dark:border-white/[0.04]`}>
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.tab}
                onClick={() => handleNav(link.tab)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === link.tab
                    ? "bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-[#161616]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
