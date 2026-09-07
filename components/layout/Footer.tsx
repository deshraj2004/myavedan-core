import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-sm py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
              आ
            </div>
            <span className="font-bold text-white text-base">myAvedan</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-3">
            भारत का एकीकृत सूचना एवं सेवा इकोसिस्टम — शिक्षा, व्यापार एवं लोक सेवाएं।
          </p>
          <div className="text-xs text-slate-500">
            Founder: <strong>Deshraj Dhayal</strong>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
            Ecosystem Portals
          </h4>
          <ul className="space-y-2 text-xs">
            <li><span className="text-blue-400">Education:</span> Job Avedan • Exam Avedan</li>
            <li><span className="text-emerald-400">Business:</span> BizAvedan • Legal Avedan</li>
            <li><span className="text-amber-400">Public:</span> Yojana Avedan • Sarkari Avedan</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
            Trust & Compliance
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-400">
            <li>iStart Rajasthan Registered</li>
            <li className="font-mono text-amber-300">Reg No: 5F85FD9</li>
            <li>QRate Bronze (Score: 14)</li>
            <li>Zero-Disclosure Document Vault</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
            Registered Office
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Bajyawas, Sikar,<br />
            Rajasthan, India - 332601<br />
            Email: founder@myavedan.com
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-3">
        <span>© 2026 myAvedan (माई आवेदन). All rights reserved.</span>
        <span>Secure Citizen Identity & Digital Service Infrastructure</span>
      </div>
    </footer>
  );
}
