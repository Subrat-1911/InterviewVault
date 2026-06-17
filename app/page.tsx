"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection"; 
import Tabs from "./components/Tabs";
import DataSection from "./components/DataSection";
import MidPageBanner from "./components/MidPageBanner";
import FeaturesGrid from "./components/FeaturesGrid"; 
import Footer from "./components/Footer";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const [activeTab, setActiveTab] = useState("insights");
  const { isSignedIn } = useUser();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col items-center px-4 w-full pt-24">
        {/* HERO ASSEMBLY */}
        <div className="flex flex-col items-center w-full">
          <HeroSection />
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <DataSection activeTab={activeTab} />
        </div>
        
        {/* FEATURES GRID SECTION - Hero ke theek niche */}
        {<FeaturesGrid />}
        {/* 2. THE PERFECT MIDDLE BANNER */}
        {<MidPageBanner />}
      </main>
      {/* 2. FOOTER AT THE VERY BOTTOM */}
      <Footer />
    </div>
  );
}