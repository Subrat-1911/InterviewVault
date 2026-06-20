"use client";
import Link from "next/link";

export default function FeaturesGrid() {
  return (
    <div className="w-full max-w-6xl mt-24 mb-24 px-4">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide  text-white mb-4">
          The Uncensored Truth
        </h2>
        <p className="text-gray-400 text-lg">
          No rumors. No generic advice. Just facts straight from your seniors.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Transparent CTCs */}
        <Link href="/transparent-ctc" className="group">
          <div className="h-full border border-gray-800 rounded-2xl bg-gray-900/40 p-8 hover:-translate-y-2 hover:border-yellow-500 transition-all duration-300 cursor-pointer">
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
        <div className="h-full border border-gray-800 border-dashed rounded-2xl bg-gray-900/10 p-8 opacity-50 flex flex-col justify-center items-center text-center select-none">
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
            <div className="h-full border border-gray-800 rounded-2xl bg-gray-900/40 p-8 hover:-translate-y-2 hover:border-yellow-500 transition-all duration-300 cursor-pointer">
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