"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-orange-50 dark:border-white/[0.04] px-8 py-5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-gray-400 dark:text-gray-500 text-center sm:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#F97316] font-semibold">Shivam Kaware</span>{" "}
          —{" "}
          <Link href="https://softvuetechnology.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F97316] transition-colors">
            SoftVue Technology
          </Link>
          . All rights reserved.
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Built with{" "}
          <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="text-[#F97316] hover:underline font-medium">
            Next.js 15
          </Link>{" "}
          &amp;{" "}
          <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-medium">
            React 19
          </Link>
        </p>
      </div>
    </footer>
  );
}
