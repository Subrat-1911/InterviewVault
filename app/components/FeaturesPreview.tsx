"use client";

export default function FeaturesPreview() {
  return (
    <div className="w-full max-w-6xl mt-24 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide uppercase text-white mb-4">
          Stop Guessing, Start Knowing
        </h2>
        <p className="text-gray-400 text-lg">
          Exclusive tools built for your campus. Sign in to unlock full access.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CARD 1: The Real CTC Calculator */}
        <div className="border border-gray-800 rounded-2xl bg-gray-900/30 p-8 relative overflow-hidden group">
          <h3 className="text-2xl font-bold text-yellow-500 mb-2">The Real CTC Calculator</h3>
          <p className="text-gray-400 mb-6">See beyond the 30 LPA headline. Get the actual in-hand breakdown.</p>
          
          {/* Dummy UI (Blurred) */}
          <div className="bg-black/50 p-6 rounded-xl border border-gray-800 relative">
            <div className="flex justify-between text-gray-500 mb-4 text-sm font-bold uppercase">
              <span>Component</span>
              <span>Amount (LPA)</span>
            </div>
            <div className="space-y-4 blur-[3px] select-none pointer-events-none transition-all duration-300 group-hover:blur-[2px]">
              <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span className="text-gray-300">Base Pay</span>
                <span className="text-green-400 font-mono">18.50</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                <span className="text-gray-300">ESOPs (Stocks)</span>
                <span className="text-blue-400 font-mono">8.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Joining Bonus</span>
                <span className="text-yellow-400 font-mono">3.50</span>
              </div>
            </div>

            {/* Lock Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent rounded-xl">
              <span className="bg-yellow-500 text-black px-4 py-2 rounded-md font-bold text-sm">
                Unlock Breakdown 🔒
              </span>
            </div>
          </div>
        </div>

        {/* CARD 2: Smart Eligibility Matrix */}
        <div className="border border-gray-800 rounded-2xl bg-gray-900/30 p-8 relative overflow-hidden group">
          <h3 className="text-2xl font-bold text-yellow-500 mb-2">Smart Eligibility Matrix</h3>
          <p className="text-gray-400 mb-6">Filter companies by your Branch and CPI cutoff instantly.</p>
          
          {/* Dummy UI (Blurred) */}
          <div className="bg-black/50 p-6 rounded-xl border border-gray-800 relative">
            {/* Mock Filters */}
            <div className="flex gap-2 mb-6">
              <div className="bg-gray-800 text-gray-400 px-3 py-1 rounded text-xs">Branch: CSE, EE</div>
              <div className="bg-gray-800 text-gray-400 px-3 py-1 rounded text-xs">CPI {">"} 8.0</div>
            </div>

            <div className="space-y-3 blur-[3px] select-none pointer-events-none transition-all duration-300 group-hover:blur-[2px]">
              <div className="bg-gray-800/50 p-3 rounded flex justify-between items-center">
                <span className="font-bold text-white">Tower Research</span>
                <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">Eligible</span>
              </div>
              <div className="bg-gray-800/50 p-3 rounded flex justify-between items-center">
                <span className="font-bold text-white">Jane Street</span>
                <span className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded">CPI Too Low</span>
              </div>
            </div>

            {/* Lock Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent rounded-xl">
              <span className="bg-yellow-500 text-black px-4 py-2 rounded-md font-bold text-sm">
                Check Eligibility 🔒
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}