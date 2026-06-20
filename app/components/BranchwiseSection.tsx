"use client";

import React from 'react';
import Link from 'next/link';

export default function BranchwiseSection() {
  return (
    <div className="max-w-6xl w-full mt-12 mb-24 px-4">
      
      {/* 1️⃣ CENTERED HEADER CONTROLS */}
      {/* 🚀 FIXED: Isme mb-8 ko hata kar mb-16 kar diya hai taaki neeche ke 3 boxes se distance badh jaye */}
      <div className="border border-gray-800 rounded-2xl bg-gray-900/20 p-8 mb-16 text-center flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide text-white mb-2">
          ⚡ Departmentwise Analytics Dashboard
        </h2>
        <p className="text-gray-400 text-sm max-w-xl">
          Segmented data insights from insti databases and official macro reports over the years.
        </p>
      </div>

      {/* 2️⃣ 3-COLUMNS BALANCED RESPONSIVE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Branch Eligibility */}
        <Link href="/branch-eligibility" className="group block">
          <div className="h-full border border-gray-800 rounded-2xl bg-gray-900/40 p-8 hover:-translate-y-2 hover:border-yellow-500 transition-all duration-300 cursor-pointer flex flex-col justify-between">
            <div>
              <div className="text-yellow-500 text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                Branch Eligibility
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Don't waste time on companies not hiring your branch. Filter strictly by CS, EE, EP, and CPI cutoffs.
              </p>
            </div>
            <span className="text-[11px] font-mono text-gray-500 mt-6 block group-hover:text-yellow-500 transition-colors">
              Open Pipeline &rarr;
            </span>
          </div>
        </Link>

        {/* 🚀 Card 2: Branch-Wise Placement Stats */}
        <Link href="/department-placement-reports" className="group block">
          <div className="h-full border border-gray-800 rounded-2xl bg-gray-900/40 p-8 hover:-translate-y-2 hover:border-yellow-500 transition-all duration-300 cursor-pointer flex flex-col justify-between">
            <div>
              <div className="text-yellow-500 text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                Placement Metrics
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Verified historical placement percentages, registered vs placed ratios parsed straight from official archives.
              </p>
            </div>
            <span className="text-[11px] font-mono text-gray-500 mt-6 block group-hover:text-yellow-500 transition-colors">
              Open Analytics &rarr;
            </span>
          </div>
        </Link>

        {/* Card 3: Advanced Filters (Coming Soon Card Template) */}
        <div className="h-full border border-gray-800 border-dashed rounded-2xl bg-gray-900/10 p-8 opacity-50 flex flex-col justify-center items-center text-center select-none">
          <div className="text-gray-600 text-4xl mb-4">⏳</div>
          <h3 className="text-2xl font-bold text-gray-500 mb-3">Advanced Filters</h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Branch package comparison charts and dynamic salary timeline maps coming soon.
          </p>
        </div>

      </div>
    </div>
  );
}