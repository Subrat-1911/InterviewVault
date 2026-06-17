"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Dummy Local Data for Testing (Baad mein isko Neon/Prisma DB se fetch karenge)
const ALL_COMPANIES = [
  { id: "amazon", name: "Amazon", sector: "Software" },
  { id: "google", name: "Google", sector: "Software" },
  { id: "graviton", name: "Graviton", sector: "Quant" },
  { id: "jaguar", name: "Jaguar Land Rover", sector: "Core Engg" },
  { id: "nk securities", name: "NK Securities", sector: "Quant" },
  { id: "optiver", name: "Optiver", sector: "Quant" },
  { id: "qualcomm", name: "Qualcomm", sector: "Hardware" },
  { id: "sprinklr", name: "Sprinklr", sector: "Software" },
  { id: "tower-research", name: "Tower Research", sector: "Quant" },
  { id: "uber", name: "Uber", sector: "Software" },
];

export default function CompaniesDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter Categories
  const sectors = ["All", "Software", "Quant", "Hardware", "Core Engg"];

  // Search & Filter Logic mixed together alphabetic sorted
  const filteredCompanies = ALL_COMPANIES.filter((company) => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "All" || company.sector === activeFilter;
    return matchesSearch && matchesFilter;
  }).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      <main className="flex-grow max-w-6xl w-full mx-auto px-6 pt-32 pb-16">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            Company Directory
          </h1>
          <p className="text-gray-400 mt-2">
            Search alphabetically and jump straight into raw recruitment metrics.
          </p>
        </div>

        {/* Search and Filters Shell */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10 w-full">
          {/* Search Box */}
          <div className="w-full md:max-w-md relative">
            <input
              type="text"
              placeholder="Search company name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-900/60 border border-gray-800 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveFilter(sector)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-lg border transition-all cursor-pointer ${
                  activeFilter === sector
                    ? "bg-yellow-500 text-black border-yellow-500"
                    : "bg-transparent border-gray-800 text-gray-400 hover:border-gray-600"
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

        {/* Sorted Alphabetical Grid */}
        {filteredCompanies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredCompanies.map((company) => (
              <Link key={company.id} href={`/company/${company.id}`}>
                <div className="border border-gray-900 bg-neutral-950/40 p-6 rounded-xl hover:border-yellow-500/50 transition-all duration-200 cursor-pointer flex justify-between items-center group">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-yellow-500 transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-mono mt-1">{company.sector}</p>
                  </div>
                  <span className="text-gray-600 group-hover:text-yellow-500 transition-colors text-sm">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-gray-900 rounded-2xl">
            <p className="text-gray-500 font-mono">No companies matching your criteria found.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}