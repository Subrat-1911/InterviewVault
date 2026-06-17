"use client";

export default function MidPageBanner() {
  return (
    <div className="w-full max-w-6xl px-4 my-10">
      {/* Clean & Minimal Poster Container */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-gray-800 via-yellow-500/10 to-gray-800 overflow-hidden">
        
        {/* Subtle Dark Glow */}
        <div className="absolute -right-24 -top-24 w-80 h-80 bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative rounded-2xl bg-gradient-to-b from-gray-950 to-black p-10 md:p-14 flex flex-col items-center text-center">
          
          {/* IIT Bombay Exclusive - Fixed Top Header */}
          <span className="text-yellow-500 font-bold text-xs uppercase tracking-widest bg-yellow-500/10 px-4 py-1.5 rounded-full mb-4">
            IIT Bombay Exclusive
          </span>
          
          {/* Clear 2-3 Lines Content */}
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed font-medium tracking-wide">
            Built independently to eliminate official PR filters and campus rumors. 
            This platform bridges the information gap, delivering pure, unedited placement 
            insights straight from the insti interview rooms.
          </p>

          {/* Author Style Signature */}
          <div className="w-full max-w-3xl text-right mt-8">
            <span className="text-gray-500 font-mono text-sm tracking-widest italic opacity-80 block pr-4">
              Created by <span className="text-yellow-500">~ IITB Students</span>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}