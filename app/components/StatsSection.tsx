"use client";

import React from "react";

export default function StatsSection() {
  return (
    <div className="max-w-6xl w-full mt-12 mb-16 px-4 select-none">
      
      {/* SECTION HEADER */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-xs font-mono font-bold tracking-widest text-yellow-500 uppercase mb-2">
          // Platform Metrics & Live Registry
        </h2>
        <p className="text-xl md:text-2xl font-extrabold text-white tracking-wide">
          The Network in Numbers
        </p>
      </div>

      {/* CORE 4-COLUMN STATS MATRIX */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        {/* Metric 1: IITs Covered (Placement Insights) */}
        <div className="border border-zinc-800/80 bg-zinc-900/20 backdrop-blur-xs rounded-2xl p-6 flex flex-col justify-between hover:border-yellow-500 hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-xl">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-wider bg-zinc-800 text-zinc-400 px-2 py-1 rounded uppercase">
              Insights
            </span>
            <h3 className="text-4xl font-black text-white mt-4 mb-2 tracking-tight">
              23+ <span className="text-yellow-500">IITs</span>
            </h3>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed font-medium mt-4">
            Historical placement database parsed from top tier insti archives over the years.
          </p>
        </div>

        {/* Metric 2: Contributors (Placement Insights) */}
        <div className="border border-zinc-800/80 bg-zinc-900/20 backdrop-blur-xs rounded-2xl p-6 flex flex-col justify-between hover:border-yellow-500 hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-xl">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-wider bg-zinc-800 text-zinc-400 px-2 py-1 rounded uppercase">
              Contributors
            </span>
            <h3 className="text-4xl font-black text-white mt-4 mb-2 tracking-tight">
              450+ <span className="text-yellow-500">Seniors</span>
            </h3>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed font-medium mt-4">
            Verified inputs and real metrics shared independently by the campus community.
          </p>
        </div>

        {/* Metric 3: Companies Mapped (Interview Archives) */}
        <div className="border border-zinc-800/80 bg-zinc-900/20 backdrop-blur-xs rounded-2xl p-6 flex flex-col justify-between hover:border-yellow-500 hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-xl">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-wider bg-zinc-800 text-zinc-400 px-2 py-1 rounded uppercase">
              Archives
            </span>
            <h3 className="text-4xl font-black text-white mt-4 mb-2 tracking-tight">
              80+ <span className="text-yellow-500">Firms</span>
            </h3>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed font-medium mt-4">
            Interview questions and patterns cataloged from tech, quant, and core giants.
          </p>
        </div>

        {/* Metric 4: Exact Rounds (Interview Archives) */}
        <div className="border border-zinc-800/80 bg-zinc-900/20 backdrop-blur-xs rounded-2xl p-6 flex flex-col justify-between hover:border-yellow-500 hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-xl">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-wider bg-zinc-800 text-zinc-400 px-2 py-1 rounded uppercase">
              Rounds
            </span>
            <h3 className="text-4xl font-black text-white mt-4 mb-2 tracking-tight">
              320+ <span className="text-yellow-500">Rounds</span>
            </h3>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed font-medium mt-4">
            Step-by-step breakdown of exact technical, coding, and HR round sequences.
          </p>
        </div>

      </div>
    </div>
  );
}