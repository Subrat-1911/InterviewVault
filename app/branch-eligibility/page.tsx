"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BranchEligibility() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center pt-24">
        <span className="text-yellow-500 font-mono text-xs tracking-widest bg-yellow-500/10 px-3 py-1 rounded-full uppercase mb-4">
          Vault Gatekeeper
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide text-white mb-2 uppercase">
          Branch Eligibility Matrix
        </h1>
        <div className="w-12 h-[1px] bg-gray-800 my-4"></div>
        <p className="text-gray-500 max-w-md text-sm md:text-base font-light mb-8">
          Check exact constraints, open vs closed roles across multiple departments, and raw shortlist probabilities.
        </p>
        <div className="inline-flex items-center gap-2 bg-gray-900/40 border border-gray-800 px-4 py-2 rounded-xl text-xs font-mono text-gray-400 animate-pulse">
          ⏳ Processing Branch Cutoffs...
        </div>
        
        <Link href="/" className="mt-8 text-sm text-yellow-500 hover:underline">
          &larr; Back to Home
        </Link>
      </main>

      <Footer />
    </div>
  );
}