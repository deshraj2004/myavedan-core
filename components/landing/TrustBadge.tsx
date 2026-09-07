import React from "react";

export function TrustBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-950/40 px-4 py-2 backdrop-blur-md shadow-inner transition hover:border-blue-400">
      <span className="flex h-2.5 w-2.5 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
      </span>

      <div className="flex items-center divide-x divide-blue-800/80 text-xs sm:text-sm font-medium text-slate-200">
        <span className="pr-3 text-blue-300 font-semibold tracking-wide">
          iStart Rajasthan Registered
        </span>
        <span className="px-3 font-mono text-amber-300">
          Reg No: 5F85FD9
        </span>
        <span className="pl-3 inline-flex items-center gap-1.5 text-orange-300 font-semibold">
          <span className="rounded bg-amber-500/20 px-1.5 py-0.5 text-[11px] font-bold text-amber-300 border border-amber-500/40">
            BRONZE
          </span>
          QRate Score: 14
        </span>
      </div>
    </div>
  );
}
