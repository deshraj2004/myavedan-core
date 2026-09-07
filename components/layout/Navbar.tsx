import React from "react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-lg">
            आ
          </div>
          <span className="font-extrabold text-xl tracking-tight text-white">
            myAvedan <span className="text-blue-400 text-sm font-semibold">(माई आवेदन)</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#ecosystem" className="hover:text-white transition">इकोसिस्टम</a>
          <a href="/sectors/education" className="hover:text-white transition">शिक्षा</a>
          <a href="/sectors/business" className="hover:text-white transition">व्यापार</a>
          <a href="/sectors/public-g2c" className="hover:text-white transition">लोक सेवाएं</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/vault"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition shadow-sm"
          >
            वॉल्ट लॉगिन (SSO)
          </a>
        </div>
      </div>
    </header>
  );
}
