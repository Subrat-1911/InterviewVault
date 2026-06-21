"use client";
import Link from "next/link";

export default function PlacementInsights() {
  const companies = ["Google", "Jane Street", "Microsoft", "Tower Research", "Optiver", "Amazon", "Uber", "Sprinklr"];
  const marqueeCompanies = [...companies, ...companies];

  return (
    <div className="w-full max-w-7xl mt-2 overflow-hidden py-10 relative">
      
      {/* Edge Blur Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Track */}
      <div className="flex w-max animate-scroll gap-8 px-6 hover:[animation-play-state:paused]">
        {marqueeCompanies.map((company, index) => (
          <Link 
            href={`/company/${company.toLowerCase().replace(/\s+/g, '-')}`} 
            key={index}
          >
            {/* 🚀 FIXED: Matte black hatakar pehle waala original gray-900 base tone wapas laga diya hai */}
            <div className="w-72 h-48 border border-gray-800 rounded-2xl bg-gray-900/30 backdrop-blur-xs flex flex-col items-center justify-center hover:border-yellow-500 hover:scale-[1.03] hover:bg-gray-900/60 transition-all duration-300 cursor-pointer group shadow-xl">
              <h3 className="text-2xl font-extrabold text-white group-hover:text-yellow-500 transition-colors tracking-wide">
                {company}
              </h3>
              <p className="text-[10px] font-mono uppercase text-gray-600 mt-1 tracking-widest group-hover:text-yellow-500/40 transition-colors">
                Drive Archive
              </p>
              <p className="text-gray-500 font-mono text-xs mt-4 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                View Insights &rarr;
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}