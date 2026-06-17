"use client";
import Link from "next/link";

export default function DataSection({ activeTab }: { activeTab: string }) {
  // Array of companies
  const companies = ["Google", "Jane Street", "Microsoft", "Tower Research", "Optiver", "Amazon", "Uber", "Sprinklr"];
  
  // Array ko double kiya taaki infinite loop ban sake
  const marqueeCompanies = [...companies, ...companies];

  if (activeTab === "archives") {
    return (
      <div className="w-full mt-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-600 tracking-widest uppercase">
          Coming Soon
        </h2>
      </div>
    );
  }

  // Insights Tab - Auto Scrolling
  return (
    <div className="w-full max-w-6xl mt-4 overflow-hidden py-8 relative">
      {/* Left aur Right mein fade effect ke liye gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling Container */}
      <div className="flex w-max animate-scroll gap-6 px-4 hover:[animation-play-state:paused]">
        {marqueeCompanies.map((company, index) => (
          <Link 
            href={`/company/${company.toLowerCase().replace(/\s+/g, '-')}`} 
            key={index}
          >
            <div className="w-64 h-40 border-2 border-gray-800 rounded-xl bg-gray-900/50 flex flex-col items-center justify-center hover:border-yellow-500 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <h3 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">
                {company}
              </h3>
              <p className="text-gray-500 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to view &rarr;
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}