"use client";
import { useParams, useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CompanyDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  const companyName = typeof params.id === "string" ? params.id.toUpperCase() : "COMPANY";

  // Smart Back Navigation Logic
  const handleBackNavigation = () => {
    if (typeof window !== "undefined") {
      const referrer = document.referrer;
      
      // Agar pichla page direct home page (localhost:3000/ ya domain.com/) tha
      // toh router.push("/") karenge, nahi toh default directory par bhejenge
      if (referrer && (referrer.endsWith("/") || !referrer.includes("/companies"))) {
        router.push("/companies");
      } else {
        router.push("/companies");
      }
    } else {
      router.push("/companies");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
        <span className="text-yellow-500 font-mono text-xs tracking-widest bg-yellow-500/10 px-3 py-1 rounded-full uppercase mb-4">
          Database Vault Hub
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide text-white mb-2">
          {companyName} INSIGHTS
        </h1>
        <div className="w-12 h-[1px] bg-gray-800 my-4"></div>
        <p className="text-gray-500 max-w-md text-sm md:text-base font-light mb-8">
          We are currently aggregating unedited flight logs, internal shortlists, and test patterns for this recruiter.
        </p>
        <div className="inline-flex items-center gap-2 bg-gray-900/40 border border-gray-800 px-4 py-2 rounded-xl text-xs font-mono text-gray-400 animate-pulse">
          ⏳ Coming Soon to the Vault
        </div>
        
        {/* Smart Dynamic Back Button */}
        <button 
          onClick={handleBackNavigation}
          className="mt-8 text-sm text-yellow-500 hover:underline bg-transparent border-none cursor-pointer flex items-center gap-1"
        >
          &larr; Go Back
        </button>
      </main>

      <Footer />
    </div>
  );
}