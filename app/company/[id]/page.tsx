// app/company/[id]/page.tsx
import { db } from "../../../lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface CompanyPageProps {
  params: Promise<{ id: string }>;
}

export default async function CompanyDetailPage({ params }: CompanyPageProps) {
  const { id } = await params;

  // 🚀 Table 2 se direct single-query mein data fetch karo (No complex includes!)
  const company = await (db as any).company.findUnique({
    where: { id },
  });

  // Agar database mein company nahi milti toh direct 404 page dikhao
  if (!company) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      <main className="flex-grow max-w-5xl w-full mx-auto px-4 pt-28 pb-16">
        
        {/* HEADER BLOCK */}
        <div className="border border-gray-800 rounded-2xl bg-gradient-to-b from-gray-900/40 to-transparent p-8 md:p-12 mb-8">
          <span className="text-yellow-500 font-mono text-xs tracking-widest bg-yellow-500/10 px-3 py-1 rounded-full uppercase mb-4 inline-block">
            {company.sector} Domain
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-3">
            {company.name}
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl font-light">
            Verified recruitment statistics, baseline package info, and criteria directly mapped from the insti placement portal records.
          </p>
        </div>

        {/* 3-COLUMN METRICS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* 1. SALARY VAULT - WITH DIRECT BREAKDOWN LINK TO TRANSPARENT CTC */}
          <div className="border border-gray-800 bg-neutral-950/40 p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-semibold tracking-wider text-gray-500 font-mono uppercase mb-4">
                💰 Compensation
              </h3>
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Gross CTC</p>
                <p className="text-3xl font-black text-yellow-500 tracking-tight">{company.grossCtc}</p>
              </div>
              <p className="text-xs text-gray-500 mt-3 font-light leading-relaxed">
                Base salary, variable bonuses, and stock vesting allocations are hidden here for platform synergy.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-900">
              <Link 
                href={`/transparent-ctc?search=${id}`}
                className="w-full block text-center text-xs font-mono font-semibold bg-gray-900 hover:bg-yellow-500 hover:text-black text-gray-300 py-2.5 rounded-xl border border-gray-800 hover:border-yellow-500 transition-all duration-300"
              >
                Breakdown Salary Structure &rarr;
              </Link>
            </div>
          </div>

          {/* 2. ELIGIBILITY MATRIX - LINK TO BRANCH ELIGIBILITY */}
          <div className="border border-gray-800 bg-neutral-950/40 p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-semibold tracking-wider text-gray-500 font-mono uppercase mb-4">
                🎓 Cutoffs & Criteria
              </h3>
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Minimum CPI Cutoff</p>
                <p className="text-3xl font-black text-white tracking-tight">{company.cpiCutoff.toFixed(2)}</p>
              </div>
              <p className="text-xs text-gray-500 mt-3 font-light leading-relaxed">
                Branch specific constraints and special degree slot restrictions apply to this company's JAF.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-900">
              <Link 
                href={`/branch-eligibility?search=${id}`}
                className="w-full block text-center text-xs font-mono font-semibold bg-gray-900 hover:bg-white hover:text-black text-gray-300 py-2.5 rounded-xl border border-gray-800 hover:border-white transition-all duration-300"
              >
                Check Branch Eligibility &rarr;
              </Link>
            </div>
          </div>

          {/* 3. RECRUITMENT TIMELINE (EVALUATION FORMAT) */}
          <div className="border border-gray-800 bg-neutral-950/40 p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-semibold tracking-wider text-gray-500 font-mono uppercase mb-4">
                📝 Evaluation Format
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500">Test Platform</p>
                  <p className="text-sm font-bold text-white">{company.testPlatform}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Assessment Setup</p>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {company.testPattern}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* INTERVIEW ARCHIVES HUB LINK */}
        <div className="border border-gray-800 bg-gradient-to-r from-neutral-950 via-gray-900/20 to-neutral-950 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-400 font-mono uppercase mb-1">
              📚 ARCHIVED INTERVIEW EXPERIENCES
            </h3>
            <p className="text-xs text-gray-500 font-mono mb-2">Structure: {company.interviewRounds}</p>
            <p className="text-sm text-gray-400 font-light max-w-2xl">
              Read real, unedited interview logs, exact technical questions asked, and preparation strategies shared by IITB seniors who cleared this company's process.
            </p>
          </div>
          
          <Link 
            href={`/interview-archives?company=${id}`}
            className="whitespace-nowrap px-5 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xs font-mono uppercase rounded-xl transition-all duration-200 self-start md:set-center cursor-pointer shadow-lg shadow-yellow-500/5"
          >
            Open Interview Archives &rarr;
          </Link>
        </div>

        {/* BACK TO DIRECTORY */}
        <div className="mt-12 text-center">
          <Link href="/companies" className="text-xs font-mono text-gray-500 hover:text-yellow-500 transition-colors">
            &larr; Back to Directory Tracker
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}