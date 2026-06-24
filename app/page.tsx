"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion"; 

// 🔌 CUSTOM RESOLVED COMPONENT IMPORTS (New Names Applied 🚀)
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection"; 
import Tabs from "./components/Tabs";
import PlacementInsights from "./components/PlacementInsights"; 
import InterviewArchives from "./components/InterviewArchives"; 

// 🎬 MOTION PRESETS IMPORT
import { 
  fadeInUp, 
  navbarDrop, 
  heroEntrance, 
  bannerReveal, 
  tabSwitchPreset 
} from "./animations/motionPresets";

import MidPageBanner from "./components/MidPageBanner";
import FeaturesGrid from "./components/FeaturesGrid"; 
import BranchwiseSection from "./components/BranchwiseSection"; 
import StatsSection from "./components/StatsSection"; 
import Footer from "./components/Footer";
import UserSyncProvider from "./components/UserSyncProvider";
import StarfieldBg from "./components/StarfieldBg";

export default function Home() {
  const [activeTab, setActiveTab] = useState("insights");

  return (
    <div className="min-h-screen text-white relative overflow-hidden scroll-smooth bg-black">
      
      <StarfieldBg /> 
      <UserSyncProvider />
      
      {/* 1️⃣ NAVBAR JOINED WITH PRESET */}
      <motion.div
        variants={navbarDrop}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-50"
      >
        <Navbar />
      </motion.div>
      
      <main className="flex flex-col items-center px-4 w-full pt-24 pb-16 relative z-10">
        
        {/* 2️⃣ HERO & TABS MODULE */}
        <motion.section 
          id="home" 
          variants={heroEntrance}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center border-b border-zinc-900/40 pb-8 scroll-mt-32"
        >
          <HeroSection />
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          
          {/* Slider Content Matrix */}
          <div className="w-full min-h-[220px] flex justify-center relative overflow-hidden mt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                {...tabSwitchPreset(activeTab)} // Dynamic execution hook injected safely
                className="w-full flex justify-center"
              >
                {activeTab === "insights" ? (
                  <PlacementInsights />
                ) : (
                  <InterviewArchives />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>
        
        {/* 3️⃣ CONDITIONAL SECTIONS DISPLAY */}
        {activeTab === "insights" && (
          <div className="w-full flex flex-col items-center space-y-12 mt-10">
            
            <motion.section 
              id="senior-insights"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="w-full flex justify-center scroll-mt-24"
            >
              <FeaturesGrid />
            </motion.section>
            
            <motion.section 
              id="department-wise"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="w-full flex justify-center scroll-mt-24"
            >
              <BranchwiseSection />
            </motion.section>
            
          </div>
        )}

        {/* 4️⃣ GLOBAL STATS (Dono tabs ke liye common element) */}
        <StatsSection />

        {/* 5️⃣ EDGE-TO-EDGE BANNER */}
        <motion.div 
          variants={bannerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-14 mb-0 w-full flex justify-center"
        >
          <MidPageBanner />
        </motion.div>
      </main>
      
      <div className="relative z-20 w-full bg-black/90 border-t border-gray-800">
        <Footer />
      </div>
      
    </div>
  );
}