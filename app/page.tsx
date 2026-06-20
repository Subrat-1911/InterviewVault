"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection"; 
import Tabs from "./components/Tabs";
import DataSection from "./components/DataSection";
import MidPageBanner from "./components/MidPageBanner";
import FeaturesGrid from "./components/FeaturesGrid"; 
import BranchwiseSection from "./components/BranchwiseSection"; 
import Footer from "./components/Footer";
import UserSyncProvider from "./components/UserSyncProvider";
import StarfieldBg from "./components/StarfieldBg";

export default function Home() {
  const [activeTab, setActiveTab] = useState("insights");

  return (
    <div className="min-h-screen text-white relative overflow-hidden scroll-smooth bg-black">
      
      {/* 🚀 ANIMATED CANVAS BACKGROUND LAYER */}
      <StarfieldBg /> 

      {/* 🔄 Background synchronization provider */}
      <UserSyncProvider />
      <Navbar />
      
      <main className="flex flex-col items-center px-4 w-full pt-24 relative z-10">
        
        {/* 2️⃣ HOME NODE ANCHOR */}
        <section id="home" className="w-full flex flex-col items-center border-b border-zinc-900/40 pb-8 scroll-mt-32">
          <HeroSection />
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <DataSection activeTab={activeTab} />
        </section>
        
        {/* CONDITIONAL CORE WRAPPER */}
        {activeTab === "insights" && (
          <div className="w-full flex flex-col items-center space-y-12 mt-10">
            <section id="senior-insights" className="w-full flex justify-center scroll-mt-24">
              <FeaturesGrid />
            </section>
            <section id="department-wise" className="w-full flex justify-center scroll-mt-24">
              <BranchwiseSection />
            </section>
          </div>
        )}

        {/* 5️⃣ BANNER NODE */}
        <div className="mt-14 mb-16 w-full flex justify-center">
          <MidPageBanner />
        </div>
      </main>
      
      {/* 🚀 FIXED FEATURE: Footer wrapped inside relative high stack z-index wrapper */}
      <div className="relative z-20 w-full bg-black/90 border-t border-gray-800">
        <Footer />
      </div>

    </div>
  );
}