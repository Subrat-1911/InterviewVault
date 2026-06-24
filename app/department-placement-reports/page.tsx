"use client";

import { useState } from "react";
import Navbr from "./components/navbr";

export default function Page() {
  const [currentMetrics, setCurrentMetrics] = useState<any>(null);

  return (
    <div className="w-full min-h-screen bg-[#030303] text-zinc-100 p-4 md:p-10 space-y-12 antialiased">
      
      {/* 🚀 Render autonomous Navbr component */}
      <Navbr onDataChange={(data) => setCurrentMetrics(data)} />

      {/* ==================== 🎯 MONITOR ZONE ==================== */}
      <div className="max-w-7xl mx-auto space-y-6">
        {currentMetrics?.activeBranchStat ? (
          <div className="border border-dashed border-zinc-800/60 rounded-3xl p-12 text-center text-zinc-500 text-xs font-mono tracking-wider bg-zinc-900/10">
            <p className="text-yellow-500 font-bold mb-2">🚀 ACTIVE PIPELINE METRICS SECURED:</p>
            [ {currentMetrics.selectedInsti?.name} • {currentMetrics.selectedBranch} • {currentMetrics.selectedProgram} • {currentMetrics.selectedYear} ]
            <p className="text-[11px] text-zinc-400 mt-4">
              Placement Percentage: {currentMetrics.activeBranchStat.percentage}% | Placed Candidates: {currentMetrics.activeBranchStat.placed}
            </p>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto border border-dashed border-zinc-800/60 rounded-3xl p-16 text-center text-zinc-600 text-xs font-mono tracking-wider">
            [ CASCADING ENGINE ARMED • FILL PREVIOUS STEPS TO RELEASE SYSTEM DATA ]
          </div>
        )}
      </div>

    </div>
  );
}