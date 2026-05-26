"use client";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineItems = [
  {
    period: "2024 – 2025",
    title: "Advanced Self-Learning",
    subtitle: "Online Resources & Courses",
    content: "C, C++, Python, Java, Linux, System Programming",
    bg: "#23CE6B",
  },
  {
    period: "2023 – 2024",
    title: "Cyber Security Certification",
    subtitle: "Online Resources & Training",
    content: "Ethical Hacking, Network Security, Penetration Testing",
    bg: "#FF9800",
  },
  {
    period: "2023 – 2024",
    title: "App Development",
    subtitle: "Online Resources & Courses",
    content: "React Native, Expo, Cross-platform Mobile Development",
    bg: "#03A9F4",
  },
  {
    period: "2022 – 2023",
    title: "Full Stack Development",
    subtitle: "Maxotag Technology (OPC) Pvt. Ltd.",
    content: "MERN Stack — MongoDB, Express, React, Node.js",
    bg: "#673AB7",
  },
  {
    period: "2021 – 2022",
    title: "Web Developer (IT/ITES)",
    subtitle: "Global Reach Skill Training India Pvt. Ltd.",
    content: "HTML, CSS, JavaScript, PHP, MySQL",
    bg: "#E91E63",
  },
];

export default function Education() {
  return (
    <div className="bg-[#F8FBFB] dark:bg-[#0a0a0a] py-10 px-2 sm:px-5 md:px-10 w-full">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 ml-2 section-title">
        Education & Training
      </h2>
      <VerticalTimeline animate={true} lineColor="rgba(35,206,107,0.3)">
        {timelineItems.map((item) => (
          <VerticalTimelineElement
            key={item.period}
            className="vertical-timeline-element--education"
            iconStyle={{ background: item.bg, color: "#fff", boxShadow: `0 0 0 4px ${item.bg}30` }}
            icon={<FaGraduationCap />}
          >
            <div className="bg-white dark:bg-[#111111] rounded-2xl p-5 border border-gray-100 dark:border-[#1D1D1D] shadow-md hover:shadow-lg transition-shadow">
              <span className="text-xs font-semibold text-[#23CE6B] uppercase tracking-wider">
                {item.period}
              </span>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                {item.subtitle}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 font-medium">
                {item.content}
              </p>
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: "#23CE6B", color: "#fff" }}
          icon={<FaGraduationCap />}
        />
      </VerticalTimeline>
    </div>
  );
}
