"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
import { GitFork, Star, Users, BookOpen, Activity, TrendingUp, GitCommit, Award } from "lucide-react";

const username = "shivamkaware";

const statCards = [
  { label: "Public Repos",   value: "20+", icon: BookOpen, color: "text-[#F97316]", bg: "from-orange-500/10" },
  { label: "Total Stars",    value: "45+", icon: Star,     color: "text-amber-400", bg: "from-amber-400/10"  },
  { label: "Followers",      value: "30+", icon: Users,    color: "text-blue-400",  bg: "from-blue-400/10"   },
  { label: "Contributions",  value: "500+",icon: Activity,  color: "text-purple-400",bg: "from-purple-400/10" },
];

const languages = [
  { name: "JavaScript", pct: 40, color: "#F97316" },
  { name: "TypeScript",  pct: 20, color: "#EA580C" },
  { name: "CSS",         pct: 15, color: "#FBBF24" },
  { name: "HTML",        pct: 15, color: "#FB923C" },
  { name: "Other",       pct: 10, color: "#d1d5db" },
];

const achievements = [
  { icon: <Award size={16} />,      title: "Top Contributor",  desc: "500+ commits in 2024",         color: "text-[#F97316]" },
  { icon: <GitCommit size={16} />,  title: "Consistent Coder", desc: "Active 200+ days in 2024",      color: "text-amber-500" },
  { icon: <Star size={16} />,       title: "Open Source",      desc: "45+ stars across repos",        color: "text-blue-500"  },
];

export default function GithubStats() {
  return (
    <div className="bg-white dark:bg-[#0F0F0F] rounded-[24px]">
      <div className="py-10 px-5 sm:px-8">

        {/* Header */}
        <div className="flex items-start justify-between mb-8 gap-4 flex-wrap">
          <div>
            <h2 className="text-xl font-black font-space text-gray-900 dark:text-white section-title">GitHub Activity</h2>
            <p className="text-sm text-gray-400 mt-4">Live coding stats & contributions</p>
          </div>
          <Link
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 dark:bg-[#161616] text-white rounded-xl text-sm font-bold hover:bg-gray-800 hover:shadow-lg transition-all hover:-translate-y-0.5 border border-gray-700"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            @{username}
          </Link>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {statCards.map(({ label, value, icon: Icon, color, bg }) => (
            <div key={label} className={`bg-gradient-to-br ${bg} to-transparent border border-orange-50 dark:border-white/[0.05] rounded-2xl p-5 hover:shadow-lg transition-all hover:-translate-y-1 group hover:border-[#F97316]/20`}>
              <div className="flex items-center justify-between mb-3">
                <Icon size={20} className={`${color} group-hover:scale-110 transition-transform`} />
                <TrendingUp size={14} className="text-gray-200 dark:text-gray-700" />
              </div>
              <p className={`text-2xl font-black ${color}`}>{value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">{label}</p>
            </div>
          ))}
        </div>

        {/* GitHub Stats Cards via API */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div className="rounded-2xl overflow-hidden border border-orange-50 dark:border-white/[0.05] bg-[#111111]">
            <Image
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&hide_border=true&bg_color=111111&text_color=ffffff&icon_color=F97316&title_color=F97316`}
              alt="GitHub Stats"
              width={495}
              height={195}
              className="w-full"
              unoptimized
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-orange-50 dark:border-white/[0.05] bg-[#111111]">
            <Image
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true&background=111111&stroke=F97316&ring=F97316&fire=EA580C&currStreakLabel=F97316`}
              alt="GitHub Streak"
              width={495}
              height={195}
              className="w-full"
              unoptimized
            />
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {achievements.map((a) => (
            <div key={a.title} className="bg-[#F8F5F1] dark:bg-[#161616] rounded-2xl p-4 text-center border border-orange-50 dark:border-white/[0.05] hover:border-[#F97316]/20 transition-all">
              <div className={`${a.color} flex justify-center mb-2`}>{a.icon}</div>
              <p className={`text-xs font-black ${a.color}`}>{a.title}</p>
              <p className="text-[10px] text-gray-400 mt-0.5">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Language Breakdown */}
        <div className="bg-[#F8F5F1] dark:bg-[#161616] rounded-2xl p-6 border border-orange-50 dark:border-white/[0.05]">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <GitFork size={16} className="text-[#F97316]" />
            Most Used Languages
          </h3>
          <div className="space-y-3">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{lang.name}</span>
                  <span className="text-sm font-black" style={{ color: lang.color }}>{lang.pct}%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-[#1D1D1D] rounded-full h-2">
                  <div className="h-2 rounded-full transition-all duration-1000" style={{ width: `${lang.pct}%`, backgroundColor: lang.color }} />
                </div>
              </div>
            ))}
          </div>

          {/* Contribution Graph */}
          <div className="mt-6 rounded-xl overflow-hidden">
            <Image
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github-dark&hide_border=true&color=F97316&line=F97316&point=ffffff&bg_color=111111`}
              alt="Contribution Graph"
              width={900}
              height={200}
              className="w-full"
              unoptimized
            />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
