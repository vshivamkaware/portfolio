"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaFacebookF, FaDownload, FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { saveAs } from "file-saver";
import Link from "next/link";
import { ExternalLink, Calendar, Star, Award } from "lucide-react";

const socialLinks = [
  { icon: <FaGithub />,    href: "https://github.com/shivamkaware",              label: "GitHub",    color: "hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900" },
  { icon: <FaLinkedinIn />,href: "https://www.linkedin.com/in/shivam-kaware/",   label: "LinkedIn",  color: "hover:bg-[#0077B5] hover:text-white" },
  { icon: <FaTwitter />,   href: "https://twitter.com/shivamkaware",             label: "Twitter/X", color: "hover:bg-[#1D9BF0] hover:text-white" },
  { icon: <FaFacebookF />, href: "https://www.facebook.com/shivamkaware",        label: "Facebook",  color: "hover:bg-[#1877F2] hover:text-white" },
];

const contactInfo = [
  { icon: <FaPhone />,         label: "Phone",    value: "+91 9921076909",              href: "tel:+919921076909",                    color: "text-[#F97316]" },
  { icon: <MdEmail />,         label: "Email",    value: "shivai@softvuetechnology.in", href: "mailto:shivai@softvuetechnology.in",   color: "text-[#FB923C]" },
  { icon: <MdLocationOn />,    label: "Location", value: "Pune, India",                href: "https://goo.gl/maps/TVUp3o21Qxo6f1BZ8", color: "text-[#FBBF24]" },
];

const badges = [
  { icon: <Award size={11} />,    label: "MERN Stack"   },
  { icon: <Star size={11} />,     label: "Next.js Pro"  },
  { icon: <Award size={11} />,    label: "Cyber Sec"    },
];

export default function FixedDetails({ setActiveTab }) {
  const [downloading, setDownloading] = useState(false);

  const saveFile = async () => {
    setDownloading(true);
    try {
      await saveAs("https://drive.google.com/uc?export=download&id=1C6ej0sl9pBTXjV3nJWx3c0q-hBcpAP53", "Shivam_Kaware_CV.pdf");
    } finally {
      setTimeout(() => setDownloading(false), 2000);
    }
  };

  return (
    <div className="w-full mx-auto relative bg-white dark:bg-[#0F0F0F] px-5 pt-0 pb-5 rounded-[28px] shadow-xl shadow-black/6 dark:shadow-black/40 overflow-hidden border border-orange-50 dark:border-white/[0.04]">

      {/* Top gradient band */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-[#F97316]/20 via-[#FBBF24]/10 to-transparent" />

      {/* Profile photo */}
      <div className="flex justify-center pt-8 relative z-10">
        <div className="relative">
          {/* Animated ring */}
          <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-[#F97316] to-[#FBBF24] animate-[spin-slow_8s_linear_infinite] opacity-90" />
          <div className="relative w-[118px] h-[118px] rounded-full overflow-hidden border-[3px] border-white dark:border-[#0F0F0F]">
            <Image
              src="/cv-bg-none.png"
              alt="Shivam Kaware"
              width={118}
              height={118}
              className="object-cover w-full h-full"
              draggable={false}
            />
          </div>
          {/* Online indicator */}
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white dark:border-[#0F0F0F] animate-pulse" title="Available" />
        </div>
      </div>

      {/* Name & title */}
      <div className="text-center mt-4 relative z-10 space-y-1.5">
        <h2 className="text-[22px] font-black font-space text-gray-900 dark:text-white tracking-tight leading-tight">
          Shivam Kaware
        </h2>
        <div className="flex items-center justify-center gap-2">
          <span className="status-dot" />
          <span className="text-[13px] text-gray-500 dark:text-gray-400 font-medium">
            Full Stack Developer
          </span>
        </div>

        {/* Availability badge */}
        <div className="flex items-center justify-center gap-1.5 mt-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400 rounded-full text-[11px] font-bold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            OPEN TO WORK
          </span>
        </div>

        {/* Skill badges */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-2">
          {badges.map((b) => (
            <span key={b.label} className="inline-flex items-center gap-1 px-2.5 py-1 bg-orange-50 dark:bg-[#161616] border border-orange-100 dark:border-orange-500/20 text-[#F97316] rounded-lg text-[10px] font-bold">
              {b.icon}{b.label}
            </span>
          ))}
        </div>
      </div>

      {/* Social links */}
      <div className="flex gap-2 justify-center mt-5">
        {socialLinks.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className={`w-9 h-9 flex items-center justify-center rounded-xl bg-orange-50 dark:bg-[#161616] border border-orange-100/60 dark:border-white/[0.05] text-gray-500 dark:text-gray-400 transition-all duration-200 ${s.color} hover:scale-110 hover:shadow-md hover:border-transparent text-sm`}
          >
            {s.icon}
          </Link>
        ))}
      </div>

      {/* Contact info */}
      <div className="mt-4 bg-[#F8F5F1] dark:bg-[#161616] rounded-2xl p-4 space-y-3 border border-orange-50 dark:border-white/[0.04]">
        {contactInfo.map((info) => (
          <div key={info.label} className="flex items-center gap-3 group">
            <div className={`w-9 h-9 flex items-center justify-center rounded-xl bg-white dark:bg-[#0F0F0F] shadow-sm ${info.color} text-base flex-shrink-0 group-hover:scale-105 transition-transform border border-orange-50 dark:border-white/[0.04]`}>
              {info.icon}
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">{info.label}</p>
              <Link
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-[12px] text-gray-800 dark:text-gray-200 hover:text-[#F97316] transition-colors truncate block font-semibold"
              >
                {info.value}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="mt-4 space-y-2.5">
        {/* Hire Me — Primary */}
        <button
          onClick={() => setActiveTab && setActiveTab(4)}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#F97316] text-white font-bold py-3 rounded-2xl transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] text-[14px] tracking-wide"
        >
          <Calendar size={16} />
          Hire Me / Book a Call
        </button>

        {/* Download CV — Secondary */}
        <button
          onClick={saveFile}
          disabled={downloading}
          className="w-full flex items-center justify-center gap-2 bg-white dark:bg-[#161616] border-2 border-[#F97316] text-[#F97316] font-bold py-2.5 rounded-2xl transition-all duration-300 hover:bg-[#F97316] hover:text-white disabled:opacity-60 text-[13px]"
        >
          {downloading ? (
            <><div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" /> Downloading...</>
          ) : (
            <><FaDownload size={13} /> Download CV</>
          )}
        </button>

        {/* WhatsApp — Quick contact */}
        <a
          href="https://wa.me/919921076909?text=Hi%20Shivam%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold py-2.5 rounded-2xl text-[13px] hover:bg-[#25D366] hover:text-white transition-all duration-200"
        >
          <FaWhatsapp size={15} />
          WhatsApp Me
        </a>
      </div>

      {/* Footer link */}
      <div className="mt-4 text-center">
        <Link
          href="https://softvuetechnology.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] text-gray-400 hover:text-[#F97316] transition-colors font-medium"
        >
          <ExternalLink size={10} />
          softvuetechnology.in
        </Link>
      </div>
    </div>
  );
}
