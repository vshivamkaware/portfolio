"use client";
import React, { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import GithubStats from "./GithubStats";
import Gallery from "./Gallery";
import { User, FileText, Briefcase, Mail, BarChart2, Award } from "lucide-react";

const tabs = [
  { id: 1, label: "About",    icon: User },
  { id: 2, label: "Resume",   icon: FileText },
  { id: 3, label: "Projects", icon: Briefcase },
  { id: 4, label: "Contact",  icon: Mail },
  { id: 5, label: "Gallery",  icon: Award },
  { id: 6, label: "Stats",    icon: BarChart2 },
];

export default function TabRouting({ activeTab, setActiveTab }) {
  const [animating, setAnimating] = useState(false);

  const handleTabChange = (id) => {
    if (id === activeTab || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveTab(id);
      setAnimating(false);
    }, 140);
  };

  const renderPanel = () => {
    switch (activeTab) {
      case 1: return <About setActiveTab={setActiveTab} />;
      case 2: return <Resume />;
      case 3: return <Projects />;
      case 4: return <Contact />;
      case 5: return <Gallery />;
      case 6: return <GithubStats />;
      default: return <About setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div>
      {/* ── Tab Bar ── */}
      <div className="bg-white dark:bg-[#0F0F0F] p-3 rounded-2xl border border-gray-100 dark:border-white/[0.04] mb-3 shadow-sm">
        <nav className="flex gap-1.5 overflow-x-auto scrollbar-hide" role="tablist" aria-label="Portfolio sections">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeTab === id}
              aria-label={label}
              onClick={() => handleTabChange(id)}
              className={`flex flex-col items-center gap-1 px-3.5 py-2.5 rounded-xl text-[11.5px] font-semibold min-w-[60px] flex-shrink-0 transition-all duration-200 ${
                activeTab === id
                  ? "bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white shadow-md shadow-orange-500/30 scale-[1.04]"
                  : "bg-gray-50 dark:bg-[#181818] text-gray-500 dark:text-gray-400 hover:bg-orange-50 dark:hover:bg-[#1D1D1D] hover:text-[#F97316] dark:hover:text-[#F97316] border border-transparent hover:border-orange-100 dark:hover:border-orange-500/15"
              }`}
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* ── Tab Content ── */}
      <div
        key={activeTab}
        className={`transition-all duration-200 ${
          animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0 tab-panel"
        }`}
      >
        {renderPanel()}
      </div>
    </div>
  );
}
