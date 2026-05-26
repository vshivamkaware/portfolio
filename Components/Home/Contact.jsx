"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle, AlertCircle, Calendar } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const contactCards = [
  {
    icon: <Phone size={20} />,
    title: "Phone / Call",
    value: "+91 9921076909",
    sub: "Mon–Sat, 10AM–7PM IST",
    href: "tel:+919921076909",
    color: "text-[#F97316]",
    bg: "from-orange-500/10 to-orange-400/5",
    border: "border-orange-100 dark:border-orange-500/15",
  },
  {
    icon: <Mail size={20} />,
    title: "Email",
    value: "shivai@softvuetechnology.in",
    sub: "Reply within 4–24 hours",
    href: "mailto:shivai@softvuetechnology.in",
    color: "text-blue-500",
    bg: "from-blue-500/10 to-blue-400/5",
    border: "border-blue-100 dark:border-blue-500/15",
  },
  {
    icon: <FaWhatsapp size={20} />,
    title: "WhatsApp",
    value: "+91 9921076909",
    sub: "Fastest response guaranteed",
    href: "https://wa.me/919921076909?text=Hi%20Shivam%2C%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!",
    color: "text-emerald-500",
    bg: "from-emerald-500/10 to-emerald-400/5",
    border: "border-emerald-100 dark:border-emerald-500/15",
  },
  {
    icon: <MapPin size={20} />,
    title: "Location",
    value: "Pune, Maharashtra",
    sub: "Available for remote worldwide",
    href: "https://goo.gl/maps/TVUp3o21Qxo6f1BZ8",
    color: "text-purple-500",
    bg: "from-purple-500/10 to-purple-400/5",
    border: "border-purple-100 dark:border-purple-500/15",
  },
];

const subjects = [
  "Project Enquiry — Web Development",
  "Project Enquiry — Mobile App",
  "Job / Full-time Opportunity",
  "Freelance Collaboration",
  "Technical Consultation",
  "Other",
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [focused, setFocused] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      formRef.current?.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass = (field) => `w-full bg-[#F8F5F1] dark:bg-[#161616] border text-sm text-gray-800 dark:text-gray-200 rounded-xl px-4 py-3 outline-none transition-all duration-200 placeholder-gray-400 ${
    focused === field
      ? "border-[#F97316] ring-2 ring-[#F97316]/20"
      : "border-orange-100 dark:border-white/[0.06] hover:border-orange-200 dark:hover:border-white/10"
  }`;

  return (
    <div className="bg-white dark:bg-[#0F0F0F] rounded-[24px]">
      <div className="py-10 px-5 sm:px-8 space-y-10">

        {/* Header */}
        <div>
          <h2 className="text-xl font-black font-space text-gray-900 dark:text-white section-title">Get In Touch</h2>
          <p className="text-sm text-gray-400 mt-4">
            Open to <strong className="text-[#F97316]">freelance projects</strong>, <strong className="text-blue-500]">full-time roles</strong>, and <strong className="text-emerald-500">collaborations</strong>. Let&apos;s build something great.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-2 gap-3">
          {contactCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`flex items-start gap-3 p-4 bg-gradient-to-br ${card.bg} to-transparent rounded-2xl border ${card.border} hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 group`}
            >
              <div className={`w-9 h-9 rounded-xl bg-white dark:bg-[#0F0F0F] shadow-sm flex items-center justify-center ${card.color} flex-shrink-0 group-hover:scale-110 transition-transform border ${card.border}`}>
                {card.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{card.title}</p>
                <p className={`text-[12px] font-bold ${card.color} truncate`}>{card.value}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{card.sub}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Availability Banner */}
        <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-[#F97316]/10 to-[#FBBF24]/5 rounded-2xl border border-orange-100 dark:border-orange-500/20">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F97316] to-[#EA580C] flex items-center justify-center text-white flex-shrink-0">
            <Calendar size={18} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900 dark:text-white">Currently Available</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Taking new projects from <strong className="text-[#F97316]">June 2025</strong>. Response time: <strong>under 4 hours</strong> on weekdays.
            </p>
          </div>
          <Clock size={20} className="text-[#F97316] ml-auto flex-shrink-0" />
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <MessageSquare size={16} className="text-[#F97316]" />
            Send Me a Message
          </h3>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Your Name *</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="John Doe"
                  className={inputClass("name")}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email Address *</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="john@company.com"
                  className={inputClass("email")}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Company (Optional)</label>
              <input
                type="text"
                name="user_company"
                placeholder="Your company or startup"
                className={inputClass("company")}
                onFocus={() => setFocused("company")}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Subject *</label>
              <select
                name="subject"
                required
                className={`${inputClass("subject")} cursor-pointer`}
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused(null)}
              >
                <option value="" disabled selected>Choose a topic</option>
                {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Message *</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, budget range, timeline, or opportunity..."
                className={`${inputClass("message")} resize-none`}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
              />
            </div>

            {/* Status messages */}
            {status === "success" && (
              <div className="flex items-center gap-2 p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-emerald-700 dark:text-emerald-400 text-sm font-semibold">
                <CheckCircle size={16} /> Message sent! I&apos;ll reply within 4–24 hours. 🚀
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-400 text-sm font-semibold">
                <AlertCircle size={16} /> Something went wrong. Try WhatsApp instead!
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white font-bold rounded-xl text-sm hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === "sending" ? (
                <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
              ) : status === "success" ? (
                <><CheckCircle size={16} /> Message Sent!</>
              ) : (
                <><Send size={16} /> Send Message</>
              )}
            </button>

            <p className="text-center text-[11px] text-gray-400">
              Or contact me directly via{" "}
              <a href="https://wa.me/919921076909" target="_blank" rel="noopener noreferrer" className="text-emerald-500 font-semibold hover:underline">
                WhatsApp
              </a>{" "}
              for the fastest response.
            </p>
          </form>
        </div>

      </div>
      <Footer />
    </div>
  );
}
