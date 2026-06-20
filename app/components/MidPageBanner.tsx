"use client";

import React, { useState, useEffect } from 'react';

export default function MidPageBanner() {
  // 📸 STRICT 5-IMAGES ARRAY MATRIX (IITB Campus Assets)
  const bgImages = [
    "/images/iitb1.jpg",
    "/images/iitb2.jpg",
    "/images/iitb3.jpg",
    "/images/iitb4.jpg",
    "/images/iitb5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ⏳ Dynamic Interval Tick (Changes every 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [bgImages.length]);

  return (
    <div className="w-full max-w-5xl my-12 px-2 select-none">
      {/* 🚀 FIXED: Height ko h-[320px] md:h-[290px] kiya hai jo ki perfectly balanced hai (pehle se thoda bada, par zyada bada nahi) */}
      <div className="relative w-full rounded-3xl overflow-hidden border border-zinc-850 bg-zinc-950 h-[320px] md:h-[290px] flex items-center justify-center shadow-2xl">
        
        {/* 🚀 LAYER 1: UNIFORM AUTOMATED IMAGE SLIDER ENGINE */}
        {bgImages.map((image, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url('${image}')` }}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-50 scale-100" : "opacity-0 scale-105"
            } transform duration-[2000ms]`}
          />
        ))}

        {/* 🚀 LAYER 2: LIGHTING REFLECTION MASK */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/45 z-10" />

        {/* 🚀 LAYER 3: CORE CONTENT COMPONENT */}
        <div className="relative z-20 text-center px-6 py-8 max-w-3xl mx-auto flex flex-col items-center justify-center h-full">
          
          {/* <span className="text-[10px] font-mono font-bold tracking-widest bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-3 py-1 rounded-full uppercase mb-4 shadow-md">
            IIT Bombay Exclusive
          </span> */}

          <p className="text-sm md:text-base text-white font-bold leading-relaxed tracking-wide antialiased drop-shadow-[0_4px_6px_rgba(0,0,0,0.95)]">
            Built independently to eliminate official PR filters and campus rumors. This 
            platform bridges the information gap, delivering pure, unedited placement insights 
            straight from the insti interview rooms.
          </p>

          <div className="mt-5 text-xs font-mono text-zinc-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
            Created by ~ <span className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors cursor-pointer">IITB Students</span>
          </div>

        </div>

        {/* 🚀 LAYER 4: CAROUSEL DOTS INDICATORS */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-30">
          {bgImages.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-5 bg-yellow-500" : "w-1 bg-zinc-400/70"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}