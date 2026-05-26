"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "./Footer";
import { Award, Image as ImageIcon, Star, ExternalLink, X, ChevronLeft, ChevronRight, Calendar, Trophy, BookOpen } from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────────────────── */
const categories = ["All", "Certificates", "Events", "Awards"];

const items = [
  /* ── Certificates ── */
  {
    id: 1,
    type: "Certificates",
    title: "Full Stack MERN Development",
    org: "Maxotag Technology Pvt. Ltd.",
    date: "2023",
    desc: "Completed intensive training in MongoDB, Express.js, React.js & Node.js with hands-on project delivery.",
    icon: "🏆",
    gradient: "from-orange-500 to-red-500",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    id: 2,
    type: "Certificates",
    title: "Web Developer — IT/ITES",
    org: "Global Reach Skill Training Centre",
    date: "2022",
    desc: "Certified web developer covering HTML5, CSS3, JavaScript, PHP, and MySQL. Government-recognized certification.",
    icon: "🌐",
    gradient: "from-blue-500 to-indigo-500",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: 3,
    type: "Certificates",
    title: "Cyber Security Essentials",
    org: "Online Certification",
    date: "2024",
    desc: "Covered ethical hacking, network security, penetration testing, and security audit fundamentals.",
    icon: "🔐",
    gradient: "from-teal-500 to-emerald-500",
    tags: ["Ethical Hacking", "Network Security", "Pen Testing"],
  },
  {
    id: 4,
    type: "Certificates",
    title: "React Native Mobile Development",
    org: "Self-learning + Live Projects",
    date: "2024",
    desc: "Built 3 production-grade cross-platform apps using React Native and Expo, deployed to App Store & Play Store.",
    icon: "📱",
    gradient: "from-purple-500 to-pink-500",
    tags: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    id: 5,
    type: "Certificates",
    title: "System Programming",
    org: "Self-paced — C, C++, Python, Java",
    date: "2024–25",
    desc: "Deep dive into systems programming, data structures, algorithms, and OS fundamentals.",
    icon: "⚙️",
    gradient: "from-gray-600 to-gray-800",
    tags: ["C", "C++", "Python", "Java", "Linux"],
  },

  /* ── Events ── */
  {
    id: 6,
    type: "Events",
    title: "SoftVue Technology Launch",
    org: "Pune, India",
    date: "Jan 2024",
    desc: "Officially registered and launched SoftVue Technology (OPC) Pvt. Ltd. — a software product company focused on web & mobile solutions.",
    icon: "🚀",
    gradient: "from-orange-500 to-amber-500",
    tags: ["Startup", "Entrepreneurship", "Founder"],
    photo: null,
  },
  {
    id: 7,
    type: "Events",
    title: "First International Client — UAE",
    org: "Remote Project",
    date: "2024",
    desc: "Delivered a full-stack multi-tenant platform to a client in the UAE. First international project under SoftVue Technology.",
    icon: "🌍",
    gradient: "from-blue-500 to-cyan-500",
    tags: ["International", "Multi-tenant", "SaaS"],
    photo: null,
  },
  {
    id: 8,
    type: "Events",
    title: "10th Project Milestone",
    org: "SoftVue Technology",
    date: "Late 2024",
    desc: "Reached the milestone of 10 successfully delivered projects — spanning e-commerce, education, healthcare, and enterprise sectors.",
    icon: "🎯",
    gradient: "from-emerald-500 to-green-600",
    tags: ["Milestone", "10 Projects", "Growth"],
    photo: null,
  },
  {
    id: 9,
    type: "Events",
    title: "MERN Stack Training Completion",
    org: "Maxotag Technology Pvt. Ltd.",
    date: "Jun 2023",
    desc: "Completed a rigorous 8-month internship and training program. Graduated top of the batch with a production-grade project.",
    icon: "🎓",
    gradient: "from-indigo-500 to-purple-600",
    tags: ["Internship", "MERN", "Training"],
    photo: null,
  },

  /* ── Awards ── */
  {
    id: 10,
    type: "Awards",
    title: "Best Intern Award",
    org: "Maxotag Technology Pvt. Ltd.",
    date: "2023",
    desc: "Recognized as the top-performing intern for delivering a full internal dashboard used daily by 50+ staff members.",
    icon: "🥇",
    gradient: "from-yellow-500 to-orange-500",
    tags: ["Recognition", "Internship", "Performance"],
  },
  {
    id: 11,
    type: "Awards",
    title: "Founder — SoftVue Technology",
    org: "Ministry of Corporate Affairs, India",
    date: "2024",
    desc: "Officially recognized as the Founder & CEO of a legally incorporated One-Person Company under MCA India.",
    icon: "🏛️",
    gradient: "from-orange-500 to-red-600",
    tags: ["OPC", "MCA India", "Entrepreneur"],
  },
  {
    id: 12,
    type: "Awards",
    title: "Client Satisfaction Excellence",
    org: "Internal — SoftVue Technology",
    date: "2024",
    desc: "Achieved 100% client satisfaction rate across 15+ projects. Zero refunds, zero unresolved disputes.",
    icon: "⭐",
    gradient: "from-teal-500 to-cyan-600",
    tags: ["Client Success", "Quality", "Trust"],
  },
];

/* ─── Type icons ────────────────────────────────────────────────────────── */
const typeIcon = {
  Certificates: <BookOpen size={14} />,
  Events: <Calendar size={14} />,
  Awards: <Trophy size={14} />,
};

const typeColor = {
  Certificates: "text-blue-500 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800/40",
  Events:       "text-[#F97316] bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800/40",
  Awards:       "text-amber-500 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800/40",
};

/* ─── Card component ────────────────────────────────────────────────────── */
function GalleryCard({ item, onClick }) {
  return (
    <div
      onClick={() => onClick(item)}
      className="bg-white dark:bg-[#161616] rounded-2xl border border-gray-100 dark:border-white/[0.05] hover:border-[#F97316]/25 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-500/8 cursor-pointer group overflow-hidden"
    >
      {/* Gradient header */}
      <div className={`h-28 bg-gradient-to-br ${item.gradient} to-transparent relative flex items-center justify-center`}>
        <span className="text-5xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
          {item.icon}
        </span>
        <div className="absolute top-3 right-3">
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border flex items-center gap-1 ${typeColor[item.type]}`}>
            {typeIcon[item.type]} {item.type}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug group-hover:text-[#F97316] transition-colors">
            {item.title}
          </h3>
        </div>
        <p className="text-[11.5px] font-semibold text-[#F97316] mb-0.5">{item.org}</p>
        <p className="text-[10.5px] text-gray-400 mb-2">{item.date}</p>
        <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">{item.desc}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {item.tags.slice(0, 3).map((t) => (
            <span key={t} className="text-[9.5px] px-2 py-0.5 rounded-md font-bold bg-gray-100 dark:bg-[#1D1D1D] text-gray-500 dark:text-gray-400">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Lightbox / Detail modal ───────────────────────────────────────────── */
function DetailModal({ item, onClose, items, current, setCurrent }) {
  if (!item) return null;

  const filteredSame = items.filter((i) => i.type === item.type);
  const idx = filteredSame.findIndex((i) => i.id === item.id);

  const prev = () => {
    const ni = (idx - 1 + filteredSame.length) % filteredSame.length;
    setCurrent(filteredSame[ni]);
  };
  const next = () => {
    const ni = (idx + 1) % filteredSame.length;
    setCurrent(filteredSame[ni]);
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      style={{ animation: "fadeIn 0.2s ease-out" }}
    >
      <div
        className="bg-white dark:bg-[#111] rounded-3xl w-full max-w-md shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "scaleIn 0.2s ease-out" }}
      >
        {/* Header gradient */}
        <div className={`h-40 bg-gradient-to-br ${item.gradient} relative flex items-center justify-center`}>
          <span className="text-7xl filter drop-shadow-xl">{item.icon}</span>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 bg-black/20 hover:bg-black/40 rounded-xl flex items-center justify-center text-white transition-colors"
          >
            <X size={16} />
          </button>
          <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full border flex items-center gap-1 ${typeColor[item.type]}`}>
            {typeIcon[item.type]} {item.type}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h2>
          <p className="text-sm font-semibold text-[#F97316] mb-0.5">{item.org}</p>
          <p className="text-xs text-gray-400 mb-3">{item.date}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{item.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <span key={t} className="text-[11px] px-2.5 py-1 rounded-lg font-semibold bg-orange-50 dark:bg-orange-950/30 text-[#F97316] border border-orange-200/60 dark:border-orange-800/30">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        {filteredSame.length > 1 && (
          <div className="px-5 pb-5 flex items-center justify-between gap-3">
            <button
              onClick={prev}
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-[#F97316] transition-colors"
            >
              <ChevronLeft size={14} /> Prev
            </button>
            <span className="text-[11px] text-gray-400">{idx + 1} / {filteredSame.length}</span>
            <button
              onClick={next}
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-[#F97316] transition-colors"
            >
              Next <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main component ────────────────────────────────────────────────────── */
export default function Gallery() {
  const [active, setActive]     = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = active === "All" ? items : items.filter((i) => i.type === active);

  const counts = categories.reduce((acc, cat) => {
    acc[cat] = cat === "All" ? items.length : items.filter((i) => i.type === cat).length;
    return acc;
  }, {});

  return (
    <>
      <div className="bg-white dark:bg-[#0F0F0F] rounded-[24px]">
        <div className="py-10 px-5 sm:px-8">

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white section-title font-space">
              Achievements & Gallery
            </h2>
            <p className="text-sm text-gray-400 mt-5 mb-5">
              Certifications, events, awards & milestones
            </p>

            {/* Summary bar */}
            <div className="flex flex-wrap gap-4 mb-6">
              {[
                { icon: <BookOpen size={13} />, label: "5 Certificates", color: "text-blue-500" },
                { icon: <Calendar size={13} />, label: "4 Key Events", color: "text-[#F97316]" },
                { icon: <Trophy size={13} />,   label: "3 Awards",      color: "text-amber-500" },
              ].map((s) => (
                <div key={s.label} className={`flex items-center gap-1.5 text-xs font-semibold ${s.color}`}>
                  {s.icon} {s.label}
                </div>
              ))}
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                    active === cat
                      ? "bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white shadow-md shadow-orange-500/25"
                      : "bg-gray-100 dark:bg-[#181818] text-gray-500 dark:text-gray-400 hover:text-[#F97316] border border-gray-200 dark:border-white/[0.06]"
                  }`}
                >
                  {cat !== "All" && typeIcon[cat]}
                  {cat}
                  <span className="opacity-70">({counts[cat]})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item) => (
              <GalleryCard key={item.id} item={item} onClick={setSelected} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 p-6 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-[#161616] dark:to-[#111] rounded-2xl border border-orange-100 dark:border-orange-500/15 text-center">
            <Star size={24} className="text-[#F97316] mx-auto mb-2" />
            <p className="text-base font-bold text-gray-900 dark:text-white mb-1">Want to verify my credentials?</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              I&apos;m happy to share original certificates on request.
            </p>
            <a
              href="mailto:shivai@softvuetechnology.in?subject=Certificate%20Verification%20Request"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white font-bold text-sm rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5"
            >
              <ExternalLink size={14} />
              Request Verification
            </a>
          </div>

        </div>
        <Footer />
      </div>

      {/* Detail Modal */}
      {selected && (
        <DetailModal
          item={selected}
          onClose={() => setSelected(null)}
          items={items}
          current={selected}
          setCurrent={setSelected}
        />
      )}
    </>
  );
}
