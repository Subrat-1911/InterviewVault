"use client";

import React, { useState } from 'react';
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  // 🎯 SMOOTH SCROLLING ENGINE PIPELINE
  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-5 border-b border-gray-800 bg-black/80 backdrop-blur-md select-none">
      
      {/* 🚀 LEFT NODE: LOGO / BRAND NAME */}
      <div 
        onClick={() => handleScrollTo('home')} 
        className="text-2xl font-bold tracking-widest cursor-pointer select-none whitespace-nowrap"
      >
        INTERVIEW<span className="text-yellow-500">VAULT</span>
      </div>

      {/* 🎯 DESKTOP LINK SYSTEM: SHIFTED TO RIGHT WITH YELLOW THEME HOVER (NO BRACKETS) */}
      {/* ml-auto se saare options right side chale gaye hain aur mr-8 se auth button se thodi doori banayi hai */}
      <div className="hidden md:flex items-center gap-8 text-xs font-mono font-bold uppercase tracking-wider ml-auto mr-8 text-zinc-400">
        <button 
          onClick={() => handleScrollTo('home')} 
          className="hover:text-yellow-500 transition-colors duration-200 cursor-pointer bg-transparent border-none py-1"
        >
          Home
        </button>
        
        <button 
          onClick={() => handleScrollTo('senior-insights')} 
          className="hover:text-yellow-500 transition-colors duration-200 cursor-pointer bg-transparent border-none py-1"
        >
          Senior Insights
        </button>
        
        <button 
          onClick={() => handleScrollTo('department-wise')} 
          className="hover:text-yellow-500 transition-colors duration-200 cursor-pointer bg-transparent border-none py-1"
        >
          Department Wise
        </button>
      </div>

      {/* 🔐 RIGHT NODE: CLERK AUTH STATE TOGGLER */}
      <div className="hidden md:flex items-center shrink-0">
        {!isSignedIn ? (
          <SignInButton mode="modal">
            <button className="bg-white text-black px-6 py-2 rounded-md font-bold hover:bg-gray-200 transition cursor-pointer whitespace-nowrap">
              Join
            </button>
          </SignInButton>
        ) : (
          <UserButton />
        )}
      </div>

      {/* 📱 MOBILE HAMBURGER TOGGLE BUTTON */}
      <div className="md:hidden flex items-center gap-4">
        {!isSignedIn ? (
          <SignInButton mode="modal">
            <button className="bg-white text-black px-4 py-1.5 text-xs rounded-md font-bold hover:bg-gray-200 transition">
              Join
            </button>
          </SignInButton>
        ) : (
          <UserButton />
        )}

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-zinc-400 hover:text-white focus:outline-none ml-2"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 📱 MOBILE NAVIGATION PANEL DROPDOWN */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 border-b border-gray-800 flex flex-col p-5 space-y-4 font-mono font-bold text-sm md:hidden shadow-2xl">
          <button 
            onClick={() => handleScrollTo('home')} 
            className="text-left text-zinc-400 hover:text-yellow-500 py-1"
          >
            &gt; Home
          </button>
          <button 
            onClick={() => handleScrollTo('senior-insights')} 
            className="text-left text-zinc-400 hover:text-yellow-500 py-1"
          >
            &gt; Senior Insights
          </button>
          <button 
            onClick={() => handleScrollTo('department-wise')} 
            className="text-left text-zinc-400 hover:text-yellow-500 py-1"
          >
            &gt; Department Wise
          </button>
        </div>
      )}

    </nav>
  );
}