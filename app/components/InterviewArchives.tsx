"use client";
import Link from "next/link";

export default function InterviewArchives() {
  const interviewExperiences = [
    { id: "google-se", company: "Google", role: "SWE", text: "3 Technical Rounds focusing heavily on Graphs & Advanced DP. Shortlisting was strictly based on clean optimization code structure." },
    { id: "jane-street-quant", company: "Jane Street", role: "Quant", text: "Extremely fast-paced mental math, probability theory matrix, and abstract puzzle rounds. Expected speed is crazy." },
    { id: "rubrik-se", company: "Rubrik", role: "Storage Eng", text: "Systems and OS core fundamentals checked. System design round expected deep multi-threading logic explanation." },
    { id: "graviton-quant", company: "Graviton", role: "Trader", text: "Intense focus on game theory simulations, fast algorithmic market brain twisters, and continuous conditional math." },
    { id: "uber-se", company: "Uber", role: "Backend Eng", text: "LLD round was challenging—asked to design a real-time ride assignment system pipeline under high concurrency specs." }
  ];
  const marqueeArchives = [...interviewExperiences, ...interviewExperiences];

  return (
    // 🚀 FIXED: Exact same structure and h-48 w-72 dimensions as insights marquee
    <div className="w-full max-w-7xl mt-2 overflow-hidden py-10 relative">
      
      {/* Edge Blur Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Track */}
      <div className="flex w-max animate-scroll gap-8 px-6 hover:[animation-play-state:paused]">
        {marqueeArchives.map((exp, index) => (
          <Link 
            href={`/archives/${exp.id}`} 
            key={index}
          >
            {/* 🚀 FIXED: Changed border-2 to border, kept gray color tone, and injected backdrop-blur-xs for bubble clarity */}
            <div className="w-72 h-48 border border-gray-800 rounded-2xl bg-gray-900/30 backdrop-blur-xs p-5 flex flex-col justify-between hover:border-yellow-500 hover:scale-[1.03] hover:bg-gray-900/60 transition-all duration-300 cursor-pointer group shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-extrabold text-white group-hover:text-yellow-500 transition-colors tracking-wide">
                    {exp.company}
                  </h3>
                  <span className="text-[9px] font-mono font-bold tracking-widest bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-2 py-0.5 rounded-md uppercase">
                    Soon
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 font-sans line-clamp-4 leading-normal tracking-wide mt-1">
                  <span className="text-zinc-500 font-mono font-bold">[{exp.role}]:</span> {exp.text}
                </p>
              </div>
              <p className="text-gray-500 font-mono text-[10px] uppercase opacity-0 transform translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 tracking-wider">
                Read Full Exp &rarr;
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}