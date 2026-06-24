"use client";

import { useState } from "react";

interface EvaluationCardProps {
  company: {
    id: string;
    testPlatform: string;
    selectionProcess?: string[]; // 🚀 DB Mapped Array ["Heading | Description"]
  };
}

export default function EvaluationCard({ company }: EvaluationCardProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 🔄 Fallback steps agar database mein data na ho (Split pattern safe template)
  const defaultSteps = [
    "OA | 3 Coding Questions, 90 mins on Platform",
    "Technical Interview 1 | Deep Core DSA & Problem Solving Sprints",
    "Technical Interview 2 | System Architecture & Analytical Review",
    "HR Round | Cultural Fitment & Behavioral Assessment"
  ];

  const activeSteps = company.selectionProcess && company.selectionProcess.length > 0
    ? company.selectionProcess
    : defaultSteps;

  return (
    <>
      {/* Custom Animation for Single Slow Fill without Erasing */}
      <style>{`
        @keyframes lineGrow {
          0% { height: 0%; }
          100% { height: 100%; }
        }
        .line-fill-once {
          animation: lineGrow 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      {/* 3. RECRUITMENT TIMELINE CARD FRAME */}
      <div className="border border-gray-800 bg-neutral-950/40 p-6 rounded-2xl flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xs font-semibold tracking-wider text-gray-500 font-mono uppercase mb-4">
            📝 Evaluation Format
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500 font-mono">Main Assessment Center</p>
              <p className="text-sm font-bold text-white mt-0.5">{company.testPlatform || "HackerRank / Core Portal"}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">Process Paradigm</p>
              <p className="text-xs text-gray-400 font-light leading-relaxed mt-1">
                Multi-stage sequential filter rounds managed directly via the active JAF layout.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-900">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="w-full text-center text-xs font-mono font-semibold bg-gray-900 hover:bg-yellow-500 hover:text-black text-yellow-500 py-2.5 rounded-xl border border-gray-800 hover:border-yellow-500 transition-all duration-300 cursor-pointer active:scale-[0.98]"
          >
            View Selection Process &rarr;
          </button>
        </div>
      </div>

      {/* ==================== 🛸 THE DYNAMIC SPLIT POPUP ==================== */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setIsPopupOpen(false)} className="absolute inset-0 bg-black/85 backdrop-blur-xs transition-opacity" />

          <div className="relative w-full max-w-xl bg-[#09090b] border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="absolute top-0 right-0 p-3 text-zinc-700 text-[9px] font-mono select-none">RECRUITMENT_MAP_v3.0</div>

            <div className="flex justify-between items-start border-b border-zinc-900 pb-4 mb-6">
              <div className="space-y-1">
                <span className="text-[9px] font-mono tracking-widest text-yellow-500 uppercase font-black">Pipeline Telemetry</span>
                <h3 className="text-base font-black tracking-tight text-zinc-100">Selection Roadmap Flow</h3>
              </div>
              <button onClick={() => setIsPopupOpen(false)} className="text-zinc-500 hover:text-white font-mono text-xs px-2 py-1 hover:bg-zinc-900 rounded-lg transition-colors cursor-pointer">
                [ CLOSE ]
              </button>
            </div>

            {/* Core Track Layout */}
            <div className="relative space-y-6 py-2 overflow-hidden">
              <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-zinc-900 rounded-full" />
              <div className="absolute left-[11px] top-0 w-[2px] bg-gradient-to-b from-yellow-500 to-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.8)] rounded-full line-fill-once" />

              {/* 🔄 LOOPING & SPLITTING THE DATABASE DATA */}
              {activeSteps.map((rawStep, index) => {
                // Safely split into Heading and Description using the '|' delimiter
                const parts = rawStep.split(" | ");
                const heading = parts[0] || `STAGE_0${index + 1}`;
                const description = parts[1] || "Evaluation parameters pending sync.";

                return (
                  <div key={index} className="relative pl-8 group">
                    {/* Centered target dot anchor */}
                    <div className="absolute left-[6px] top-1 w-3 h-3 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-yellow-500 group-hover:bg-yellow-500/20 transition-colors duration-300 z-10 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-transparent group-hover:bg-yellow-400 transition-colors" />
                    </div>

                    <div className="space-y-0.5">
                      <span className="text-[9px] font-mono font-bold text-zinc-600 group-hover:text-yellow-500/80 transition-colors uppercase">
                        Round {index + 1}
                      </span>
                      {/* 🎯 HEADING FROM DB */}
                      <h4 className="text-sm font-black text-zinc-200 group-hover:text-white transition-colors tracking-tight">
                        {heading}
                      </h4>
                      {/* 📋 DESCRIPTION FROM DB */}
                      <p className="text-xs text-zinc-500 font-sans leading-relaxed group-hover:text-zinc-400 transition-colors">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      )}
    </>
  );
}