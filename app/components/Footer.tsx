"use client";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-900 bg-black py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        
        {/* Logo Side */}
        <div className="text-sm font-bold tracking-widest text-gray-400">
          INTERVIEW<span className="text-yellow-500">VAULT</span>
        </div>
        
        {/* Copyright & Disclaimer */}
        <div className="text-xs text-gray-500 font-mono tracking-wide">
          &copy; {new Date().getFullYear()} • Built for the campus. Not affiliated with the official placement cell.
        </div>

      </div>
    </footer>
  );
}