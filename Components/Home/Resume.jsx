"use client";
import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import {
  FaGraduationCap, FaBriefcase, FaCode, FaCertificate,
} from "react-icons/fa";
import { TrendingUp, Star, Award } from "lucide-react";

// ── Skills ─────────────────────────────────────────────────────────────
const skillGroups = [
  {
    title: "Frontend",
    color: "#F97316",
    skills: [
      { name: "React.js",    pct: 90, years: "3+" },
      { name: "Next.js",     pct: 95, years: "2+" },
      { name: "Tailwind CSS",pct: 95, years: "3+" },
      { name: "TypeScript",  pct: 70, years: "1+" },
    ],
  },
  {
    title: "Backend",
    color: "#EA580C",
    skills: [
      { name: "Node.js",   pct: 75, years: "3+" },
      { name: "REST APIs", pct: 90, years: "3+" },
      { name: "MongoDB",   pct: 80, years: "2+" },
      { name: "Firebase",  pct: 80, years: "2+" },
    ],
  },
  {
    title: "Mobile & Tools",
    color: "#FBBF24",
    skills: [
      { name: "React Native", pct: 70, years: "1+" },
      { name: "Expo",         pct: 75, years: "1+" },
      { name: "Git/GitHub",   pct: 90, years: "3+" },
      { name: "Figma",        pct: 65, years: "2+" },
    ],
  },
];

// ── Experience ──────────────────────────────────────────────────────────
const experience = [
  {
    period: "Jan 2024 – Present",
    role: "Founder & CEO",
    company: "SoftVue Technology (OPC) Pvt. Ltd.",
    location: "Pune, India",
    type: "Full-time",
    achievements: [
      "Founded and scaled a software product company from 0 to 15+ paying clients",
      "Delivered 8 web & 3 mobile applications to clients in India, UAE & US",
      "Built multi-tenant SaaS platforms, e-commerce systems & enterprise portals",
      "Managing a team of 2 freelance developers and 1 UI/UX designer",
    ],
    tags: ["Next.js", "Node.js", "MongoDB", "React Native"],
    color: "#F97316",
  },
  {
    period: "Jul 2023 – Dec 2023",
    role: "Full Stack Developer",
    company: "Digital Minds",
    location: "Remote",
    type: "Contract",
    achievements: [
      "Developed 3 client projects using MERN stack with 98% satisfaction rate",
      "Reduced page load times by 40% through code-splitting and lazy loading",
      "Implemented REST APIs consumed by 10k+ daily active users",
    ],
    tags: ["React.js", "Node.js", "REST API", "AWS"],
    color: "#EA580C",
  },
  {
    period: "Nov 2022 – Jun 2023",
    role: "Full Stack Developer Intern",
    company: "Maxotag Technology (OPC) Pvt. Ltd.",
    location: "Pune, India",
    type: "Internship",
    achievements: [
      "Trained in full MERN stack — MongoDB, Express, React, Node.js",
      "Built internal admin dashboard used by 50+ staff daily",
      "Contributed to production codebase with code reviews from seniors",
    ],
    tags: ["React.js", "MongoDB", "Express", "Bootstrap"],
    color: "#FBBF24",
  },
];

// ── Certifications ──────────────────────────────────────────────────────
const certifications = [
  { title: "MERN Stack Development",       issuer: "Maxotag Technology",          year: "2023", color: "from-orange-500 to-red-500" },
  { title: "Cyber Security Essentials",    issuer: "Online Certification",        year: "2024", color: "from-blue-500 to-indigo-500" },
  { title: "React Native Development",     issuer: "Self-taught + Projects",      year: "2024", color: "from-teal-500 to-emerald-500" },
  { title: "Web Developer (IT/ITES)",      issuer: "Global Reach Skill Training", year: "2022", color: "from-purple-500 to-pink-500" },
];

// ── SkillBar component ──────────────────────────────────────────────────
function SkillBar({ name, pct, years, color }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setWidth(pct); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{name}</span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-gray-400 font-medium">{years} yrs</span>
          <span className="text-xs font-black" style={{ color }}>{pct}%</span>
        </div>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-[#1D1D1D] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1200 ease-out"
          style={{ width: `${width}%`, background: `linear-gradient(to right, ${color}, ${color}88)` }}
        />
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <div className="bg-white dark:bg-[#0F0F0F] rounded-[24px]">
      <div className="py-10 px-5 sm:px-8 space-y-12">

        {/* ── Skills Section ── */}
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-xl flex items-center justify-center text-white">
              <TrendingUp size={16} />
            </div>
            <h2 className="text-xl font-black font-space text-gray-900 dark:text-white section-title">
              Skills & Proficiency
            </h2>
          </div>
          <p className="text-sm text-gray-400 mt-4 mb-6">Skill ratings based on real project experience</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div key={group.title} className="bg-[#F8F5F1] dark:bg-[#161616] rounded-2xl p-5 border border-orange-50 dark:border-white/[0.04]">
                <h3 className="text-xs font-black uppercase tracking-widest mb-4 pb-2 border-b border-orange-100 dark:border-white/[0.05]" style={{ color: group.color }}>
                  {group.title}
                </h3>
                <div className="space-y-4">
                  {group.skills.map((s) => (
                    <SkillBar key={s.name} {...s} color={group.color} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Experience Timeline ── */}
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-xl flex items-center justify-center text-white">
              <FaBriefcase size={14} />
            </div>
            <h2 className="text-xl font-black font-space text-gray-900 dark:text-white section-title">
              Work Experience
            </h2>
          </div>
          <p className="text-sm text-gray-400 mt-4 mb-6">3+ years of professional full-stack development</p>
          <div className="relative space-y-6 pl-4">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#F97316] via-[#EA580C] to-transparent" />

            {experience.map((exp, i) => (
              <div key={i} className="relative ml-5">
                {/* Dot */}
                <div
                  className="absolute -left-[29px] top-5 w-4 h-4 rounded-full border-2 border-white dark:border-[#0F0F0F] shadow-md"
                  style={{ background: exp.color }}
                />
                <div className="bg-[#F8F5F1] dark:bg-[#161616] rounded-2xl p-5 border border-orange-50 dark:border-white/[0.04] hover:border-[#F97316]/20 transition-all duration-200 group hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                      <p className="text-sm font-semibold" style={{ color: exp.color }}>{exp.company}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{exp.location}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-orange-50 dark:bg-[#1D1D1D] text-[#F97316] border border-orange-100 dark:border-orange-500/20">
                        {exp.period}
                      </span>
                      <div className="mt-1">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{exp.type}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-2 text-[13px] text-gray-600 dark:text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md font-bold bg-white dark:bg-[#0F0F0F] text-gray-600 dark:text-gray-400 border border-orange-50 dark:border-white/[0.06]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Certifications ── */}
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-xl flex items-center justify-center text-white">
              <FaCertificate size={14} />
            </div>
            <h2 className="text-xl font-black font-space text-gray-900 dark:text-white section-title">
              Certifications
            </h2>
          </div>
          <p className="text-sm text-gray-400 mt-4 mb-6">Training & professional credentials</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div key={cert.title} className="flex items-center gap-4 bg-[#F8F5F1] dark:bg-[#161616] rounded-2xl p-4 border border-orange-50 dark:border-white/[0.04] hover:border-[#F97316]/20 transition-all duration-200 hover:-translate-y-0.5">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white flex-shrink-0 shadow-md`}>
                  <Award size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{cert.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{cert.issuer}</p>
                  <span className="text-[10px] font-black text-[#F97316] uppercase">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Education ── */}
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-xl flex items-center justify-center text-white">
              <FaGraduationCap size={14} />
            </div>
            <h2 className="text-xl font-black font-space text-gray-900 dark:text-white section-title">
              Education & Self-Learning
            </h2>
          </div>
          <p className="text-sm text-gray-400 mt-4 mb-6">Continuous learner — 1000+ hours of professional training</p>
          <div className="space-y-3">
            {[
              { period:"2024–25", title:"System Programming",   sub:"C, C++, Python, Java, Linux", color:"#F97316" },
              { period:"2023–24", title:"Cyber Security",        sub:"Ethical Hacking, Network Security, Pen Testing", color:"#EA580C" },
              { period:"2023–24", title:"Mobile Development",    sub:"React Native, Expo, Cross-platform Apps", color:"#FBBF24" },
              { period:"2022–23", title:"Full Stack Development", sub:"MERN Stack — MongoDB, Express, React, Node.js", color:"#34d399" },
              { period:"2021–22", title:"Web Developer (IT/ITES)", sub:"HTML, CSS, JavaScript, PHP, MySQL", color:"#60a5fa" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start bg-[#F8F5F1] dark:bg-[#161616] rounded-2xl p-4 border border-orange-50 dark:border-white/[0.04] hover:border-[#F97316]/20 transition-all duration-200">
                <div className="flex-shrink-0 w-2 mt-1.5 h-2 rounded-full" style={{ background: item.color }} />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</h4>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md" style={{ color: item.color, background: `${item.color}15` }}>{item.period}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
