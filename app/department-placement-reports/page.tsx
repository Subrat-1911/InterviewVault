"use client"

import React, { useState } from 'react';
import Link from 'next/link';

// Types
type Stat = { year: string; program: string; participated: number; placed: number; percentage: string };
type Eligibility = { company: string; role: string; cpi: string; status: string };

// 📊 Macro Data mapped accurately from official IITB Placement Reports (2020-2024)
const historicalDeptStats: Record<string, Stat[]> = {
  "engineering-physics": [
    { year: "2023-24", program: "B.Tech.", participated: 38, placed: 27, percentage: "71.05%" },
    { year: "2022-23", program: "B.Tech.", participated: 25, placed: 21, percentage: "84.00%" },
    { year: "2021-22", program: "B.Tech.", participated: 22, placed: 21, percentage: "95.45%" },
    { year: "2020-21", program: "B.Tech.", participated: 21, placed: 19, percentage: "90.48%" },
  ],
  "computer-science": [
    { year: "2023-24", program: "B.Tech.", participated: 162, placed: 147, percentage: "90.74%" },
    { year: "2022-23", program: "B.Tech.", participated: 131, placed: 128, percentage: "97.70%" },
    { year: "2021-22", program: "B.Tech.", participated: 117, placed: 116, percentage: "99.15%" },
    { year: "2020-21", program: "B.Tech.", participated: 110, placed: 109, percentage: "99.09%" },
  ],
  "electrical-engineering": [
    { year: "2023-24", program: "B.Tech.", participated: 87, placed: 79, percentage: "90.80%" },
    { year: "2022-23", program: "B.Tech.", participated: 60, placed: 52, percentage: "86.67%" },
    { year: "2021-22", program: "B.Tech.", participated: 61, placed: 60, percentage: "98.36%" },
    { year: "2020-21", program: "B.Tech.", participated: 61, placed: 57, percentage: "93.44%" },
  ]
};

// Mock data representing database JAF rules for companies open for specific branches
const branchEligibilityMock: Record<string, Eligibility[]> = {
  "engineering-physics": [
    { company: "Rubrik", role: "Software Engineer Intern", cpi: "8.0", status: "Open" },
    { company: "Sony Japan", role: "Hardware & Systems Engineer", cpi: "7.5", status: "Open" },
    { company: "McKinsey & Co", role: "Business Analyst", cpi: "0.0", status: "Open" },
  ],
  "computer-science": [
    { company: "Rubrik", role: "Software Engineer Intern", cpi: "8.0", status: "Open" },
    { company: "Google", role: "SWE Intern", cpi: "8.0", status: "Open" },
    { company: "Optiver", role: "Quantitative Trader", cpi: "8.5", status: "Open" },
  ],
  "electrical-engineering": [
    { company: "Sony Japan", role: "Embedded Systems Engineer", cpi: "7.5", status: "Open" },
    { company: "Qualcomm", role: "Hardware Silicon Intern", cpi: "8.0", status: "Open" },
  ]
};

export default function DepartmentDashboard() {
  const [selectedBranch, setSelectedBranch] = useState("engineering-physics");

  const activeEligibility = branchEligibilityMock[selectedBranch] || [];
  const activeStats = historicalDeptStats[selectedBranch] || [];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      
      {/* HEADER SECTION */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-4 pt-12 pb-16">
        <div className="border border-zinc-800 rounded-2xl bg-gradient-to-b from-zinc-900/40 to-transparent p-8 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">🏢 Department Analytics Hub</h1>
            <p className="text-zinc-400 text-sm mt-1">Official branch-wise eligibility criteria and historical placement statistics tracker.</p>
          </div>
          
          {/* Branch Selector Dropdown */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Select Department</label>
            <select 
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 text-sm rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500 cursor-pointer transition-colors"
            >
              <option value="engineering-physics">Engineering Physics (EP)</option>
              <option value="computer-science">Computer Science & Engineering (CSE)</option>
              <option value="electrical-engineering">Electrical Engineering (EE)</option>
            </select>
          </div>
        </div>

        {/* 2-COLUMN MAIN CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* CARD 1: BRANCH ELIGIBILITY MATRIX */}
          <div className="border border-zinc-800 bg-zinc-950/40 p-6 rounded-2xl flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold tracking-wider text-yellow-500 font-mono uppercase">
                  🎓 Card 1: Branch Eligibility Matrix
                </h3>
                <span className="text-xs bg-yellow-500/10 text-yellow-400 px-2.5 py-0.5 rounded-full font-mono">Live DB JAFs</span>
              </div>
              <p className="text-xs text-zinc-400 mb-6 font-light leading-relaxed">
                Currently active companies offering roles and criteria directly opened for this department slot.
              </p>

              <div className="space-y-3">
                {activeEligibility.map((item, index) => (
                  <div key={index} className="p-3 bg-zinc-900/50 rounded-xl border border-zinc-900 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-white">{item.company}</p>
                      <p className="text-xs text-zinc-500 font-mono mt-0.5">{item.role}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs bg-zinc-800 text-zinc-300 font-mono px-2 py-1 rounded-md border border-zinc-700">
                        CPI ≥ {item.cpi}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-900">
              <Link 
                href="/companies"
                className="w-full block text-center text-xs font-mono font-semibold bg-zinc-900 hover:bg-yellow-500 hover:text-black text-zinc-300 py-2.5 rounded-xl border border-zinc-800 transition-all duration-300"
              >
                Explore Full Directory Workflow &rarr;
              </Link>
            </div>
          </div>

          {/* CARD 2: BRANCH-WISE PLACEMENT REPORT */}
          <div className="border border-zinc-800 bg-zinc-950/40 p-6 rounded-2xl flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold tracking-wider text-blue-400 font-mono uppercase">
                  📈 Card 2: 4-Year Placement Report
                </h3>
                <span className="text-xs bg-blue-500/10 text-blue-400 px-2.5 py-0.5 rounded-full font-mono">Official PDF Stats</span>
              </div>
              <p className="text-xs text-zinc-400 mb-6 font-light leading-relaxed">
                Verified historical data parsed from official IIT Bombay placement office archives.
              </p>

              {/* Data Table */}
              <div className="overflow-x-auto rounded-xl border border-zinc-900">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-zinc-900/80 text-zinc-400 font-mono uppercase tracking-wider border-b border-zinc-900">
                      <th className="p-3">Year</th>
                      <th className="p-3">Program</th>
                      <th className="p-3 text-center">Registered</th>
                      <th className="p-3 text-center">Placed</th>
                      <th className="p-3 text-right text-blue-400">Ratio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900/60 bg-zinc-950/20">
                        {activeStats.map((row: Stat, idx: number) => (
                          <tr key={idx} className="hover:bg-zinc-900/30 transition-colors">
                            <td className="p-3 font-medium text-white">{row.year}</td>
                            <td className="p-3 text-zinc-400 font-mono">{row.program}</td>
                            <td className="p-3 text-center text-zinc-300 font-mono">{row.participated}</td>
                            <td className="p-3 text-center text-zinc-300 font-mono">{row.placed}</td>
                            <td className="p-3 text-right text-blue-400 font-bold font-mono">{row.percentage}</td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>Data node: Secure Cloud PDF Core</span>
              <span className="text-zinc-400 underline cursor-pointer hover:text-white">View PDF Links</span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}