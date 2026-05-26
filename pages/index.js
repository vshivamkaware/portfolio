"use client";
import Navbar from "@/Components/Common/Navbar";
import FixedDetails from "@/Components/Home/FixedDetails";
import TabRouting from "@/Components/Home/TabRouting";
import AiChatBot from "@/Components/Home/AiChatBot";
import Head from "next/head";
import { useState } from "react";

/* ── Structured data (JSON-LD) ─────────────────────────────────────────── */
const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://shivai.softvuetechnology.in/#shivam",
  name: "Shivam Kaware",
  givenName: "Shivam",
  familyName: "Kaware",
  url: "https://shivai.softvuetechnology.in/",
  image: "https://shivai.softvuetechnology.in/CV-Profile.png",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer & Founder of SoftVue Technology. Expert in Next.js, React, Node.js, and React Native. 20+ projects delivered across India, UAE & US. Open to freelance, full-time roles, and collaborations.",
  email: "shivai@softvuetechnology.in",
  telephone: "+919921076909",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
    postalCode: "411001",
  },
  worksFor: {
    "@type": "Organization",
    name: "SoftVue Technology (OPC) Pvt. Ltd.",
    url: "https://softvuetechnology.in/",
  },
  alumniOf: {
    "@type": "Organization",
    name: "Maxotag Technology Pvt. Ltd.",
  },
  knowsAbout: [
    "Next.js", "React.js", "Node.js", "React Native", "MongoDB", "Firebase",
    "Tailwind CSS", "TypeScript", "Full Stack Development", "Mobile App Development",
    "SaaS Development", "REST API", "E-commerce Development",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Developer",
    occupationLocation: {
      "@type": "Country",
      name: "India",
    },
    skills: "Next.js, React, Node.js, MongoDB, Firebase, React Native",
  },
  sameAs: [
    "https://github.com/shivamkaware",
    "https://www.linkedin.com/in/shivam-kaware/",
    "https://twitter.com/shivamkaware",
    "https://softvuetechnology.in/",
  ],
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://shivai.softvuetechnology.in/#website",
  name: "Shivam Kaware — Portfolio",
  url: "https://shivai.softvuetechnology.in/",
  description: "Professional portfolio of Shivam Kaware, Full Stack Developer & Founder of SoftVue Technology.",
  author: { "@id": "https://shivai.softvuetechnology.in/#shivam" },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://shivai.softvuetechnology.in/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const PAGE_TITLE = "Shivam Kaware — Full Stack Developer & Founder | SoftVue Technology";
const META_DESC  =
  "Hire Shivam Kaware — Full Stack Developer & Founder of SoftVue Technology, Pune. Expert in Next.js, React, Node.js & React Native. 20+ projects, 15+ clients. Open to freelance & full-time.";

export default function Home() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <Head>
        {/* ── Primary SEO ── */}
        <title>{PAGE_TITLE}</title>
        <meta name="description"      content={META_DESC} />
        <meta name="keywords"         content="Shivam Kaware, portfolio, Full Stack Developer, Next.js developer, React developer, Node.js, React Native, hire developer India, SoftVue Technology, Pune developer, freelance developer" />
        <meta name="author"           content="Shivam Kaware" />
        <meta name="robots"           content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="viewport"         content="width=device-width, initial-scale=1.0" />
        <link  rel="canonical"        href="https://shivai.softvuetechnology.in/" />

        {/* ── Open Graph (Facebook, LinkedIn, WhatsApp) ── */}
        <meta property="og:type"         content="profile" />
        <meta property="og:title"        content={PAGE_TITLE} />
        <meta property="og:description"  content={META_DESC} />
        <meta property="og:url"          content="https://shivai.softvuetechnology.in/" />
        <meta property="og:image"        content="https://shivai.softvuetechnology.in/CV-Profile.png" />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt"    content="Shivam Kaware — Full Stack Developer" />
        <meta property="og:site_name"    content="Shivam Kaware Portfolio" />
        <meta property="og:locale"       content="en_IN" />
        <meta property="profile:first_name" content="Shivam" />
        <meta property="profile:last_name"  content="Kaware" />

        {/* ── Twitter / X Card ── */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={PAGE_TITLE} />
        <meta name="twitter:description" content={META_DESC} />
        <meta name="twitter:image"       content="https://shivai.softvuetechnology.in/CV-Profile.png" />
        <meta name="twitter:image:alt"   content="Shivam Kaware — Full Stack Developer" />
        <meta name="twitter:creator"     content="@shivamkaware" />
        <meta name="twitter:site"        content="@shivamkaware" />

        {/* ── JSON-LD Structured Data — boosts Google + AI understanding ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
      </Head>

      {/* ── App Shell ── */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main
        id="main-content"
        className="min-h-screen bg-[#F5F0EB] dark:bg-[#080808] transition-colors duration-300"
      >
        {/* Decorative ambient blobs — pure CSS, zero JS cost */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-orange-400/[0.04] blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-amber-300/[0.04] blur-3xl" />
        </div>

        {/* Content grid */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 grid grid-cols-12 gap-5 lg:gap-7 items-start">
          {/* Sidebar */}
          <aside
            className="col-span-12 lg:col-span-4 lg:sticky lg:top-24"
            aria-label="Profile sidebar"
          >
            <FixedDetails setActiveTab={setActiveTab} />
          </aside>

          {/* Main content */}
          <section
            className="col-span-12 lg:col-span-8"
            aria-label="Portfolio content"
          >
            <TabRouting activeTab={activeTab} setActiveTab={setActiveTab} />
          </section>
        </div>
      </main>

      <AiChatBot />
    </>
  );
}
