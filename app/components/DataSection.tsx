"use client";
import Link from "next/link";

export default function DataSection({ activeTab }: { activeTab: string }) {
  // Array of companies
  const companies = ["Google", "Jane Street", "Microsoft", "Tower Research", "Optiver", "Amazon", "Uber", "Sprinklr"];
  
  // Array ko double kiya taaki infinite loop ban sake
  const marqueeCompanies = [...companies, ...companies];

  if (activeTab === "archives") {
    return (
      <div className="w-full mt-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-700 tracking-widest uppercase">
          Coming Soon
        </h2>
      </div>
    );
  }

  // Insights Tab - Auto Scrolling
  return (
    // 🚀 FIXED: mt-12 kiya taaki tabs aur buttons se ye poora scrolling box thoda aur neeche shift ho jaye
    <div className="w-full max-w-7xl mt-12 overflow-hidden py-10 relative">
      
      {/* Left aur Right mein smooth fade effect ke liye gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling Container */}
      <div className="flex w-max animate-scroll gap-8 px-6 hover:[animation-play-state:paused]">
        {marqueeCompanies.map((company, index) => (
          <Link 
            href={`/company/${company.toLowerCase().replace(/\s+/g, '-')}`} 
            key={index}
          >
            {/* 🚀 FIXED: Size badha kar w-72 h-48 kiya taaki cards premium aur bade dikhein */}
            <div className="w-72 h-48 border-2 border-gray-800 rounded-2xl bg-gray-900/30 flex flex-col items-center justify-center hover:border-yellow-500 hover:scale-[1.03] hover:bg-gray-900/60 transition-all duration-300 cursor-pointer group shadow-xl">
              
              <h3 className="text-2xl font-extrabold text-white group-hover:text-yellow-500 transition-colors tracking-wide">
                {company}
              </h3>
              
              {/* Subtle metadata placeholder text for better balance inside big box */}
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