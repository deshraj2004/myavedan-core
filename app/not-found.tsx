import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full rounded-2xl bg-slate-900 border border-slate-800 p-8 text-center">
        <h1 className="text-5xl font-black text-blue-500 mb-2">404</h1>
        <h2 className="text-lg font-bold text-white mb-2">पृष्ठ नहीं मिला (Page Not Found)</h2>
        <p className="text-xs text-slate-400 mb-6 leading-relaxed">
          आप जिस पृष्ठ की तलाश कर रहे हैं वह मौजूद नहीं है या स्थानांतरित कर दिया गया है।
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition"
        >
          मुख्य पृष्ठ पर लौटें (Return Home)
        </Link>
      </div>
    </div>
  );
}
