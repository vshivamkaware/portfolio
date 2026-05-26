"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import Link from "next/link";
import Footer from "./Footer";
import { TrendingUp, Users, Clock, Star } from "lucide-react";

const categories = ["All", "Web", "Mobile", "Full Stack", "SaaS"];

const projects = [
  {
    title:    "My Blog Website",
    image:    "/blog-web.png",
    category: "Web",
    status:   "Live",
    impact:   "2k+ monthly readers",
    tech:     ["React.js", "Bootstrap", "Laravel", "REST API"],
    desc:     "A personal blog platform with dynamic content management. Built with React frontend + Laravel backend. Integrated real-time APIs, SEO optimization, and a custom admin panel.",
    highlights: ["Custom CMS", "SEO Optimized", "REST APIs", "Admin Panel"],
    live:     "https://blog.softvuetechnology.in/",
    github:   "#",
    color:    "from-orange-500/15 via-red-500/5",
    accent:   "#F97316",
  },
  {
    title:    "SoftVue Technology Platform",
    image:    null,
    category: "Full Stack",
    status:   "Live",
    impact:   "15+ clients onboarded",
    tech:     ["Next.js", "React", "Node.js", "MongoDB"],
    desc:     "Official company website & service platform for SoftVue Technology. Features service listings, lead capture system, contact management & blog. Fully SEO optimized with perfect Lighthouse scores.",
    highlights: ["100 Lighthouse", "Lead System", "Blog + CMS", "Analytics"],
    live:     "https://softvuetechnology.in/",
    github:   "#",
    color:    "from-blue-500/15 via-purple-500/5",
    accent:   "#6366F1",
  },
  {
    title:    "Portfolio v2.0",
    image:    null,
    category: "Web",
    status:   "Live",
    impact:   "AI-powered dev portfolio",
    tech:     ["Next.js 15", "React 19", "Tailwind", "AI Chat"],
    desc:     "This portfolio — built with Next.js 15 + React 19. Features dark mode, animated UI, AI chatbot, GitHub stats integration, and full SEO with structured data schema.",
    highlights: ["AI Chatbot", "GitHub Stats", "Dark Mode", "Schema.org"],
    live:     "#",
    github:   "#",
    color:    "from-purple-500/15 via-pink-500/5",
    accent:   "#A855F7",
  },
  {
    title:    "E-commerce SaaS Platform",
    image:    null,
    category: "SaaS",
    status:   "Delivered",
    impact:   "₹2L+ revenue tracked",
    tech:     ["Next.js", "Stripe", "MongoDB", "AWS S3"],
    desc:     "Multi-vendor e-commerce SaaS platform with Stripe payment integration, vendor dashboards, inventory management, and order tracking. Delivered to a Pune-based retail client.",
    highlights: ["Multi-vendor", "Stripe", "Inventory", "Order Track"],
    live:     "#",
    github:   "#",
    color:    "from-emerald-500/15 via-teal-500/5",
    accent:   "#10B981",
  },
  {
    title:    "Barber Shop Marketplace",
    image:    null,
    category: "Mobile",
    status:   "Delivered",
    impact:   "500+ bookings processed",
    tech:     ["React Native", "Expo", "Firebase", "Node.js"],
    desc:     "Cross-platform mobile app for barber shop discovery & appointment booking. Real-time availability, push notifications, payment integration, and admin management dashboard.",
    highlights: ["iOS + Android", "Real-time", "Push Notif", "Payments"],
    live:     "#",
    github:   "#",
    color:    "from-amber-500/15 via-orange-500/5",
    accent:   "#F59E0B",
  },
  {
    title:    "College CMS System",
    image:    null,
    category: "Full Stack",
    status:   "Delivered",
    impact:   "500+ students served",
    tech:     ["Next.js", "Node.js", "MongoDB", "Auth"],
    desc:     "Full CMS for a Pune college — manage notices, events, faculty profiles, and student information. Dynamic admin panel with role-based access control and audit logs.",
    highlights: ["Role-based", "Dynamic CMS", "Audit Logs", "Multi-dept"],
    live:     "#",
    github:   "#",
    color:    "from-sky-500/15 via-blue-500/5",
    accent:   "#0EA5E9",
  },
];

const techColors = {
  "React.js":    "bg-[#61dafb]/10 text-[#00a8cc]",
  "Next.js":     "bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300",
  "Next.js 15":  "bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300",
  "React 19":    "bg-[#61dafb]/10 text-[#00a8cc]",
  "Tailwind":    "bg-[#38bdf8]/10 text-[#0369a1]",
  "Node.js":     "bg-[#8cc84b]/10 text-[#4a7c0d]",
  "MongoDB":     "bg-[#47a248]/10 text-[#276128]",
  "Bootstrap":   "bg-[#7952b3]/10 text-[#7952b3]",
  "Laravel":     "bg-red-100 text-red-600",
  "REST API":    "bg-orange-100 text-[#EA580C]",
  "Firebase":    "bg-amber-100 text-amber-700",
  "Stripe":      "bg-indigo-100 text-indigo-700",
  "Expo":        "bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300",
  "React Native":"bg-[#61dafb]/10 text-[#00a8cc]",
  "AI Chat":     "bg-purple-100 text-purple-700",
  default:       "bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400",
};

const statusColors = {
  "Live":      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800",
  "Delivered": "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800",
};

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white dark:bg-[#161616] rounded-2xl border border-orange-50 dark:border-white/[0.05] hover:border-[#F97316]/25 transition-all duration-300 overflow-hidden group hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-500/8 flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image / Gradient area */}
      <div className={`relative h-40 bg-gradient-to-br ${project.color} to-transparent overflow-hidden`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={300}
            className={`w-full h-full object-cover transition-transform duration-500 ${hovered ? "scale-105" : "scale-100"}`}
          />
        ) : (
          <div className="h-full flex flex-col items-center justify-center gap-2">
            <div className="text-4xl">
              {project.category === "Mobile" ? "📱" : project.category === "SaaS" ? "☁️" : "🚀"}
            </div>
            <div className="flex flex-wrap gap-1.5 px-4 justify-center">
              {project.highlights.map((h) => (
                <span key={h} className="text-[10px] px-2 py-0.5 rounded-md font-bold" style={{ color: project.accent, background: `${project.accent}18` }}>
                  {h}
                </span>
              ))}
            </div>
          </div>
        )}
        {/* Overlay badges */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
          <span className={`text-[10px] font-black px-2.5 py-1 rounded-lg border ${statusColors[project.status]}`}>
            {project.status === "Live" ? "● " : "✓ "}{project.status}
          </span>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-black/30 text-white backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-[15px] font-bold text-gray-900 dark:text-white leading-snug group-hover:text-[#F97316] transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Impact metric */}
        <div className="flex items-center gap-1.5 mb-3">
          <TrendingUp size={12} className="text-[#F97316]" />
          <span className="text-[11px] font-bold text-[#F97316]">{project.impact}</span>
        </div>

        <p className="text-[12.5px] text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">
          {project.desc}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((tag) => (
            <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${techColors[tag] || techColors.default}`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2 mt-auto">
          {project.live !== "#" ? (
            <Link href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white text-xs font-bold rounded-xl hover:shadow-md hover:shadow-orange-500/30 transition-all">
              <LuExternalLink size={12} /> Live Demo
            </Link>
          ) : (
            <div className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-gray-100 dark:bg-[#1D1D1D] text-gray-400 text-xs font-bold rounded-xl cursor-not-allowed">
              🔒 Private
            </div>
          )}
          <Link href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 bg-gray-100 dark:bg-[#1D1D1D] text-gray-600 dark:text-gray-400 text-xs font-bold rounded-xl hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all">
            <LuGithub size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  const liveCount = projects.filter((p) => p.status === "Live").length;

  return (
    <div className="bg-white dark:bg-[#0F0F0F] rounded-[24px]">
      <div className="py-10 px-5 sm:px-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-xl font-black font-space text-gray-900 dark:text-white section-title">
            My Projects
          </h2>
          <p className="text-sm text-gray-400 mt-4 mb-3">
            {projects.length} projects built — {liveCount} currently live
          </p>
          {/* Stats row */}
          <div className="flex flex-wrap gap-4 mb-5 text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1.5"><Star size={12} className="text-[#F97316]" /><strong className="text-gray-800 dark:text-gray-200">{projects.length}+</strong> Total Projects</span>
            <span className="flex items-center gap-1.5"><TrendingUp size={12} className="text-emerald-500" /><strong className="text-gray-800 dark:text-gray-200">{liveCount}</strong> Live in Production</span>
            <span className="flex items-center gap-1.5"><Users size={12} className="text-blue-500" /><strong className="text-gray-800 dark:text-gray-200">15+</strong> Happy Clients</span>
            <span className="flex items-center gap-1.5"><Clock size={12} className="text-purple-500" /><strong className="text-gray-800 dark:text-gray-200">3+</strong> Years Delivering</span>
          </div>
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                  active === cat
                    ? "bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white shadow-md shadow-orange-500/25"
                    : "bg-[#F8F5F1] dark:bg-[#161616] text-gray-600 dark:text-gray-400 border border-orange-50 dark:border-white/[0.05] hover:border-[#F97316]/20 hover:text-[#F97316]"
                }`}
              >
                {cat}
                <span className="ml-1.5 text-[10px] opacity-70">
                  ({cat === "All" ? projects.length : projects.filter(p => p.category === cat).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filtered.map((p) => <ProjectCard key={p.title} project={p} />)}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center py-6 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-[#161616] dark:to-[#111111] rounded-2xl border border-orange-100 dark:border-orange-500/15">
          <p className="text-base font-bold text-gray-900 dark:text-white mb-1">
            Have a project in mind?
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Let&apos;s build something great together
          </p>
          <a
             href="https://wa.me/919921076909?text=Hi%20Shivam%2C%20I%27d%20like%20to%20discuss%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white font-bold rounded-xl text-sm hover:shadow-lg hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5"
          >
            🚀 Let&apos;s Work Together
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
