"use client";

import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("myAvedan Root Error Boundary:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full rounded-2xl bg-slate-900 border border-slate-800 p-8 text-center">
        <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center mx-auto mb-4 text-2xl">
          ⚠️
        </div>
        <h2 className="text-xl font-bold text-white mb-2">कुछ अप्रत्याशित त्रुटि हुई</h2>
        <p className="text-xs text-slate-400 mb-6 leading-relaxed">
          सिस्टम में अस्थायी समस्या आई है। कृपया पुनः प्रयास करें।
        </p>
        <button
          onClick={() => reset()}
          className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition"
        >
          पुनः प्रयास करें (Retry)
        </button>
      </div>
    </div>
  );
}
