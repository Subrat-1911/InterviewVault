"use client";
import Link from "next/link";

export default function FeaturesGrid() {
  return (
    <div className="w-full max-w-6xl mt-12 mb-24 px-4">
      
      {/* 🚀 FIXED: max-w-3xl hata kar w-full kiya taaki heading box 1st aur last card ke edges se perfectly align ho jaye */}
      <div className="w-full border border-gray-800 bg-gray-900/30 rounded-2xl p-6 md:p-8 text-center mb-14 shadow-xl relative overflow-hidden backdrop-blur-xs">
        
        {/* Subtle Cyber Yellow Accent Line on top edge */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        
        <h2 className="text-3xl md:text-4xl font-black tracking-wide text-white mb-3">
          The Uncensored Truth
        </h2>
        {/* 🚀 FIXED: text-zinc-400 ko text-gray-400 kiya font consistency ke liye */}
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
          No rumors. No generic advice. Just facts straight from your seniors.
        </p>
      </div>

      {/* Grid Cards (Ab heading box ke saath perfectly symmetrical hain) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Transparent CTCs */}
        <Link href="/transparent-ctc" className="group">
          {/* 🚀 FIXED: Matte black hatakar original gray-900/30 base tone aur gray-800 border wapas laga diya hai */}
          <div className="h-full border border-gray-800 rounded-2xl bg-gray-900/30 backdrop-blur-xs p-8 hover:-translate-y-2 hover:border-yellow-500 transition-all duration-300 cursor-pointer group shadow-xl">
            <div className="text-yellow-500 text-4xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
              Transparent CTCs
            </h3>
            <p className="text-gray-400 leading-relaxed">
              30 LPA on paper, but how much in hand? Get the exact Base, ESOPs, and Joining Bonus breakdown.
            </p>
          </div>
        </Link>
        
        {/* 🚀 Card 2: Coming Soon Feature Card */}
        {/* 🚀 FIXED: Added backdrop-blur-xs to match the global bubble visibility framework */}
        <div className="h-full border border-gray-800 border-dashed rounded-2xl bg-gray-900/10 backdrop-blur-xs p-8 opacity-50 flex flex-col justify-center items-center text-center select-none">
          <div className="text-gray-600 text-4xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold text-gray-500 mb-3">
            Alumni Track
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Direct sync pipelines mapping active alumni networks inside target recruiters. Coming Soon!
          </p>
        </div>

        {/* Card 3: All Companies Directory */}
        <Link href="/companies" className="group">
          {/* 🚀 FIXED: Matte black hatakar original gray-900/30 base tone aur gray-800 border wapas laga diya hai */}
          <div className="h-full border border-gray-800 rounded-2xl bg-gray-900/30 backdrop-blur-xs p-8 hover:-translate-y-2 hover:border-yellow-500 transition-all duration-300 cursor-pointer group shadow-xl">
            <div className="text-yellow-500 text-4xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
              All Companies
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Explore the complete list of visiting recruiters alphabetically. Use instant search and branch filters to find your targets.
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
}