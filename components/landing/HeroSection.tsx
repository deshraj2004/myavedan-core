"use client";

import React, { useState } from "react";
import { TrustBadge } from "./TrustBadge";

export function HeroSection() {
  const [lang, setLang] = useState<"hi" | "en">("hi");

  const content = {
    hi: {
      headlineMain: "भारत का एकीकृत सूचना एवं सेवा इकोसिस्टम",
      subHeadline: "शिक्षा, व्यापार एवं लोक सेवाएं (G2C)",
      description:
        "माई आवेदन (myAvedan) एक केंद्रीय मंच है जो सूचना खोज (Discovery) और आवेदन पूर्ति (Fulfillment) को एक ही सुरक्षित पहचान और डिजिटल दस्तावेज़ वॉल्ट से जोड़ता है।",
      ctaPrimary: "इकोसिस्टम एक्सप्लोर करें",
      ctaSecondary: "दस्तावेज़ वॉल्ट (SSO)",
    },
    en: {
      headlineMain: "India's Unified Information & Service Ecosystem",
      subHeadline: "Education, Business & Citizen Services (G2C)",
      description:
        "myAvedan acts as the central umbrella integrating seamless Information Discovery with execution assistance, backed by a unified identity and secure document vault.",
      ctaPrimary: "Explore Ecosystem",
      ctaSecondary: "Citizen Vault (SSO)",
    },
  };

  const t = content[lang];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 py-20 lg:py-28 text-slate-100">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="mb-6 flex items-center bg-slate-900/90 border border-slate-800 rounded-full p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setLang("hi")}
            className={`px-4 py-1 rounded-full text-xs font-semibold transition ${
              lang === "hi"
                ? "bg-blue-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            हिन्दी
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            className={`px-4 py-1 rounded-full text-xs font-semibold transition ${
              lang === "en"
                ? "bg-blue-600 text-white shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            English
          </button>
        </div>

        <div className="mb-8">
          <TrustBadge />
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
          {t.headlineMain}
        </h1>

        <p className="mt-4 text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
          {t.subHeadline}
        </p>

        <p className="mt-6 text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed">
          {t.description}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#ecosystem"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition shadow-lg shadow-blue-600/30"
          >
            {t.ctaPrimary}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="/vault"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700 font-semibold transition"
          >
            <svg className="mr-2 w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            {t.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
