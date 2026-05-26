"use client";
import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import { Code2, Settings, HeadphonesIcon, Shield, ArrowRight, Zap, Users, Trophy, Calendar, CheckCircle, Quote } from "lucide-react";

// ── Stats ──────────────────────────────────────────────────────────────
const stats = [
  { value: 20, label: "Projects Delivered",  suffix: "+", desc: "Across web & mobile" },
  { value: 3,  label: "Years Experience",     suffix: "+", desc: "Professional coding" },
  { value: 15, label: "Happy Clients",        suffix: "+", desc: "India, US & UAE"     },
  { value: 99, label: "Uptime SLA",           suffix: "%", desc: "Production systems"  },
];

// ── Services ──────────────────────────────────────────────────────────
const services = [
  {
    icon: <Code2 size={22} />,
    title: "Web Development",
    subtitle: "Next.js · React · Node.js",
    desc: "High-performance, SEO-optimized web apps. From landing pages to complex SaaS platforms — built to scale.",
    tags: ["Next.js 15", "React 19", "Node.js", "MongoDB"],
    color: "from-orange-500/10 to-orange-400/5",
    accent: "text-[#F97316]",
    border: "border-orange-100 dark:border-orange-500/15",
    hover: "hover:border-[#F97316]/30 hover:shadow-orange-500/10",
  },
  {
    icon: <Settings size={22} />,
    title: "Full Stack SaaS",
    subtitle: "Architecture · Backend · Deployment",
    desc: "End-to-end SaaS systems with auth, subscriptions, multi-tenancy & admin dashboards ready for scale.",
    tags: ["REST APIs", "Firebase", "JWT Auth", "Vercel"],
    color: "from-amber-500/10 to-amber-400/5",
    accent: "text-amber-500",
    border: "border-amber-100 dark:border-amber-500/15",
    hover: "hover:border-amber-500/30 hover:shadow-amber-500/10",
  },
  {
    icon: <HeadphonesIcon size={22} />,
    title: "Mobile Apps",
    subtitle: "React Native · Expo",
    desc: "Cross-platform iOS & Android apps. Native performance, beautiful UI, smooth publish to App Store & Play Store.",
    tags: ["React Native", "Expo", "iOS", "Android"],
    color: "from-blue-500/10 to-blue-400/5",
    accent: "text-blue-500",
    border: "border-blue-100 dark:border-blue-500/15",
    hover: "hover:border-blue-500/30 hover:shadow-blue-500/10",
  },
  {
    icon: <Shield size={22} />,
    title: "Consulting & Audit",
    subtitle: "Code Review · Security · Performance",
    desc: "Technical audits, architecture reviews & performance optimization for existing codebases and teams.",
    tags: ["Code Audit", "Security", "Performance", "CI/CD"],
    color: "from-emerald-500/10 to-emerald-400/5",
    accent: "text-emerald-500",
    border: "border-emerald-100 dark:border-emerald-500/15",
    hover: "hover:border-emerald-500/30 hover:shadow-emerald-500/10",
  },
];

// ── Process Steps ──────────────────────────────────────────────────────
const processSteps = [
  { num: "01", label: "Discovery",  icon: <Users size={18} />,    desc: "Deep-dive call to understand your goals, audience, and tech needs. 1-hour kickoff meeting." },
  { num: "02", label: "Planning",   icon: <Calendar size={18} />, desc: "Architecture design, timeline, milestones, and technology stack selection. Delivered in 48hrs." },
  { num: "03", label: "Build",      icon: <Code2 size={18} />,    desc: "Agile sprints with weekly demos, clean code, thorough testing, and progress reports." },
  { num: "04", label: "Launch",     icon: <Zap size={18} />,      desc: "Deployment, domain setup, monitoring & 30-day post-launch support included." },
];

// ── Typing words ─────────────────────────────────────────────────────
const typingWords = ["Full Stack Developer", "React/Next.js Expert", "Founder @ SoftVue", "Problem Solver", "UI/UX Enthusiast"];

// ── Testimonials ─────────────────────────────────────────────────────
const testimonials = [
  {
    name:    "Rahul Mehta",
    role:    "Product Manager",
    company: "TechCorp India",
    text:    "Shivam delivered our SaaS dashboard in 3 weeks — pixel-perfect, fast, and with zero bugs on launch. He communicates proactively and treats your project like his own.",
    rating:  5,
    avatar:  "RM",
    color:   "from-orange-500 to-red-500",
  },
  {
    name:    "Priya Sharma",
    role:    "Founder",
    company: "EduStart Pune",
    text:    "Hired Shivam for our React Native app. The code quality and documentation were exceptional. He suggested improvements we hadn't even thought of. Highly recommended!",
    rating:  5,
    avatar:  "PS",
    color:   "from-blue-500 to-purple-500",
  },
  {
    name:    "Ahmed Al-Hassan",
    role:    "CTO",
    company: "Innovate UAE",
    text:    "Working across time zones was seamless. Shivam delivered a complex multi-tenant platform under budget. His technical depth and professionalism are top-tier.",
    rating:  5,
    avatar:  "AH",
    color:   "from-emerald-500 to-teal-500",
  },
];

// ── Tools ─────────────────────────────────────────────────────────────
const tools = [
  "React.js", "Next.js", "Node.js", "MongoDB", "Tailwind", "TypeScript",
  "React Native", "Firebase", "Vercel", "GitHub", "Figma", "REST APIs",
];

// ────────────────────────────────────────────────────────────────────

function StatCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 35);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}</span>;
}

function TestimonialCard({ t }) {
  return (
    <div className="bg-white dark:bg-[#161616] rounded-2xl p-6 border border-orange-50 dark:border-white/[0.05] hover:border-[#F97316]/20 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-black`}>
          {t.avatar}
        </div>
        <Quote size={20} className="text-orange-200 dark:text-orange-900" />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 italic">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-gray-900 dark:text-white">{t.name}</p>
          <p className="text-xs text-gray-400">{t.role} · {t.company}</p>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <svg key={i} viewBox="0 0 20 20" fill="#F97316" className="w-3.5 h-3.5">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function About({ setActiveTab }) {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const word = typingWords[currentWord];
    let timeout;
    if (!isDeleting) {
      if (displayText.length < word.length) {
        timeout = setTimeout(() => setDisplayText(word.slice(0, displayText.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
      } else {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % typingWords.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWord]);

  return (
    <div className="bg-white dark:bg-[#0F0F0F] rounded-[24px]">
      <div className="py-10 px-5 sm:px-8 space-y-14">

        {/* ── Hero ── */}
        <div className="space-y-5">
          {/* Availability tag */}
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-full text-emerald-700 dark:text-emerald-400 text-xs font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new projects — Response within 24hrs
          </span>

          <div>
            <h1 className="text-3xl sm:text-4xl font-black font-space text-gray-900 dark:text-white leading-tight tracking-tight">
              Hi, I&apos;m <span className="gradient-text-warm">Shivam Kaware</span> 👋
            </h1>
            <div className="mt-1 text-lg text-gray-500 dark:text-gray-400 font-medium h-7">
              <span className="text-[#F97316] font-bold typing-cursor">{displayText}</span>
            </div>
          </div>

          <p className="text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
            I build <strong className="text-gray-900 dark:text-white">fast, scalable, and visually stunning</strong> digital products.
            As Founder of{" "}
            <a href="https://softvuetechnology.in" target="_blank" rel="noopener noreferrer" className="text-[#F97316] font-semibold hover:underline">
              SoftVue Technology
            </a>
            , I&apos;ve helped startups and enterprises across India, UAE &amp; US ship products that
            users love — on time and on budget.
          </p>

          {/* Quick CTAs for HR/Clients */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab && setActiveTab(4)}
              className="flex items-center gap-2 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Calendar size={15} /> Book a Call
            </button>
            <button
              onClick={() => setActiveTab && setActiveTab(2)}
              className="flex items-center gap-2 bg-orange-50 dark:bg-[#161616] border border-orange-200 dark:border-orange-500/20 text-[#F97316] px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#F97316] hover:text-white hover:border-transparent transition-all duration-200"
            >
              View Resume <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#F8F5F1] dark:bg-[#161616] rounded-2xl p-4 text-center border border-orange-50 dark:border-white/[0.04] hover:border-[#F97316]/20 transition-all duration-200 group">
              <div className="text-2xl sm:text-3xl font-black gradient-text-warm">
                <StatCounter target={s.value} suffix={s.suffix} />{s.suffix}
              </div>
              <div className="text-[12px] font-bold text-gray-700 dark:text-gray-200 mt-1">{s.label}</div>
              <div className="text-[10px] text-gray-400 mt-0.5">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* ── What I Do (Services) ── */}
        <div>
          <h2 className="text-xl font-black font-space text-gray-900 dark:text-white mb-1 section-title">What I Offer</h2>
          <p className="text-sm text-gray-400 mt-3 mb-6">Services tailored for startups, enterprises & individuals</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <div key={s.title} className={`bg-gradient-to-br ${s.color} to-transparent p-5 rounded-2xl border ${s.border} ${s.hover} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group shine-card`}>
                <div className={`w-10 h-10 rounded-2xl bg-white dark:bg-[#0F0F0F] shadow-sm flex items-center justify-center ${s.accent} mb-3 group-hover:scale-110 transition-transform border ${s.border}`}>
                  {s.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">{s.title}</h3>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-0.5">{s.subtitle}</p>
                <p className="text-[13px] text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {s.tags.map((t) => (
                    <span key={t} className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${s.accent} bg-white/50 dark:bg-black/20`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── How I Work ── */}
        <div>
          <h2 className="text-xl font-black font-space text-gray-900 dark:text-white mb-1 section-title">How I Work</h2>
          <p className="text-sm text-gray-400 mt-3 mb-6">A transparent, structured process for predictable results</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
              <div key={step.num} className="relative bg-[#F8F5F1] dark:bg-[#161616] rounded-2xl p-4 border border-orange-50 dark:border-white/[0.04] hover:border-[#F97316]/20 transition-all duration-200 hover:-translate-y-1 group">
                {/* Connector */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(100%-2px)] w-4 z-10">
                    <div className="h-px bg-gradient-to-r from-[#F97316] to-transparent" />
                  </div>
                )}
                <div className="text-xs font-black text-[#F97316] mb-2 font-space">{step.num}</div>
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F97316]/15 to-[#EA580C]/5 flex items-center justify-center text-[#F97316] mb-3 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">{step.label}</h4>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 leading-snug">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tech Stack ── */}
        <div>
          <h2 className="text-xl font-black font-space text-gray-900 dark:text-white mb-1 section-title">Tech Stack</h2>
          <p className="text-sm text-gray-400 mt-3 mb-6">Technologies I work with daily</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <span
                key={tool}
                className="px-3.5 py-1.5 bg-[#F8F5F1] dark:bg-[#161616] border border-orange-50 dark:border-white/[0.05] rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-[#F97316] hover:to-[#EA580C] hover:text-white hover:border-transparent transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* ── Why Choose Me ── */}
        <div className="bg-gradient-to-br from-[#F97316]/8 via-[#FBBF24]/5 to-transparent rounded-2xl p-6 border border-orange-100 dark:border-orange-500/15">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F97316] to-[#EA580C] flex items-center justify-center text-white flex-shrink-0">
              <Trophy size={22} />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">Why hire me?</h3>
              <div className="space-y-2">
                {[
                  "3+ years building production-grade web & mobile applications",
                  "Founder experience — I understand business goals, not just code",
                  "Clean, documented code with proper testing & CI/CD pipelines",
                  "Responsive, punctual communication (avg. reply within 4 hours)",
                  "30-day post-launch support included in every project",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle size={14} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Testimonials ── */}
        <div>
          <h2 className="text-xl font-black font-space text-gray-900 dark:text-white mb-1 section-title">Client Reviews</h2>
          <p className="text-sm text-gray-400 mt-3 mb-6">What people say after working with me</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {testimonials.map((t) => <TestimonialCard key={t.name} t={t} />)}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
