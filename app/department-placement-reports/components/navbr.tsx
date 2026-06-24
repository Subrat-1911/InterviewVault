"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { getFilterMetadata, getInstitutionDashboardData } from "@/app/actions/sync";

interface NavbrProps {
  onDataChange: (payload: {
    selectedInsti: any;
    selectedBranch: string;
    selectedProgram: string;
    selectedYear: string;
    activeBranchStat: any;
    dashboardData: any;
  }) => void;
}

const ALL_23_IITS = [
  { name: "IIT Kharagpur", slug: "iit-kharagpur" },
  { name: "IIT Bombay", slug: "iit-bombay" },
  { name: "IIT Madras", slug: "iit-madras" },
  { name: "IIT Kanpur", slug: "iit-kanpur" },
  { name: "IIT Delhi", slug: "iit-delhi" },
  { name: "IIT Guwahati", slug: "iit-guwahati" },
  { name: "IIT Roorkee", slug: "iit-roorkee" },
  { name: "IIT Ropar", slug: "iit-ropar" },
  { name: "IIT Bhubaneswar", slug: "iit-bhubaneswar" },
  { name: "IIT Gandhinagar", slug: "iit-gandhinagar" },
  { name: "IIT Hyderabad", slug: "iit-hyderabad" },
  { name: "IIT Patna", slug: "iit-patna" },
  { name: "IIT Jodhpur", slug: "iit-jodhpur" },
  { name: "IIT Indore", slug: "iit-indore" },
  { name: "IIT Mandi", slug: "iit-mandi" },
  { name: "IIT (BHU) Varanasi", slug: "iit-bhu-varanasi" },
  { name: "IIT Palakkad", slug: "iit-palakkad" },
  { name: "IIT Tirupati", slug: "iit-tirupati" },
  { name: "IIT (ISM) Dhanbad", slug: "iit-ism-dhanbad" },
  { name: "IIT Bhilai", slug: "iit-bhilai" },
  { name: "IIT Goa", slug: "iit-goa" },
  { name: "IIT Jammu", slug: "iit-jammu" },
  { name: "IIT Dharwad", slug: "iit-dharwad" }
];

export default function Navbr({ onDataChange }: NavbrProps) {
  const [metaData, setMetaData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Core internal navigation states
  const [typeFilter, setTypeFilter] = useState<string>("IIT"); 
  const [selectedInsti, setSelectedInsti] = useState<any>(null); 
  const [selectedBranch, setSelectedBranch] = useState<string>(""); 
  const [selectedProgram, setSelectedProgram] = useState<string>(""); 
  const [selectedYear, setSelectedYear] = useState<string>("2023-24"); 

  const [dashboardData, setDashboardData] = useState<any>(null);

  // 🚀 FIXED: Store callback in a ref to prevent inline function reference identity loops
  const onDataChangeRef = useRef(onDataChange);
  useEffect(() => {
    onDataChangeRef.current = onDataChange;
  }, [onDataChange]);

  useEffect(() => { setMounted(true); }, []);

  // Hook 1: Fetch metadata
  useEffect(() => {
    async function loadMeta() {
      const data = await getFilterMetadata();
      setMetaData(data);
      const defaultInsti = data.find((i: any) => i.type === "IIT" && i.slug === "iit-bombay");
      if (defaultInsti) {
        setSelectedInsti(defaultInsti);
      }
      setLoading(false);
    }
    if (mounted) loadMeta();
  }, [mounted]);

  // Hook 2: Fetch specific data block
  useEffect(() => {
    async function loadDashboardContent() {
      if (selectedInsti) {
        const targetYear = selectedYear || selectedInsti.yearlyData?.[0]?.academicYear || "2023-24";
        const data = await getInstitutionDashboardData(selectedInsti.slug, targetYear);
        setDashboardData(data);
        if (!selectedYear && selectedInsti.yearlyData?.length > 0) {
          setSelectedYear(selectedInsti.yearlyData[0].academicYear);
        }
      } else {
        setDashboardData(null);
      }
    }
    if (mounted) loadDashboardContent();
  }, [selectedInsti, mounted]);

  // Hook 3: Year shifts explicitly
  useEffect(() => {
    async function handleYearShift() {
      if (selectedInsti && selectedYear) {
        const data = await getInstitutionDashboardData(selectedInsti.slug, selectedYear);
        setDashboardData(data);
      }
    }
    if (mounted && selectedInsti && selectedYear) handleYearShift();
  }, [selectedYear, mounted]);

  const dropdownCampuses = useMemo(() => {
    if (typeFilter === "IIT") return ALL_23_IITS;
    return metaData.filter((insti) => insti.type === typeFilter);
  }, [typeFilter, metaData]);

  const availableBranches = useMemo(() => {
    if (!dashboardData?.branchStats) return [];
    const branches = dashboardData.branchStats.map((b: any) => b.branch);
    return Array.from(new Set(branches)) as string[];
  }, [dashboardData]);

  const availablePrograms = useMemo(() => {
    if (!dashboardData?.branchStats || !selectedBranch) return [];
    const programs = dashboardData.branchStats
      .filter((b: any) => b.branch === selectedBranch)
      .map((b: any) => b.program);
    return Array.from(new Set(programs)) as string[];
  }, [dashboardData, selectedBranch]);

  const activeBranchStat = useMemo(() => {
    if (!dashboardData?.branchStats || !selectedBranch || !selectedProgram) return null;
    return dashboardData.branchStats.find(
      (b: any) => b.branch === selectedBranch && b.program === selectedProgram
    ) || null;
  }, [dashboardData, selectedBranch, selectedProgram]);

  // 🚀 FIXED: Runs synchronization safely through the stable ref pointer
  useEffect(() => {
    if (mounted && !loading) {
      onDataChangeRef.current({
        selectedInsti,
        selectedBranch,
        selectedProgram,
        selectedYear,
        activeBranchStat,
        dashboardData
      });
    }
  }, [selectedInsti, selectedBranch, selectedProgram, selectedYear, activeBranchStat, dashboardData, loading, mounted]);

  // Pipeline structural locks
  const isCampusLocked = !typeFilter;
  const isBranchLocked = isCampusLocked || !selectedInsti || !selectedInsti.slug;
  const isDegreeLocked = isBranchLocked || !selectedBranch || selectedBranch === "";
  const isYearLocked = isDegreeLocked || !selectedProgram || selectedProgram === "";

  if (!mounted || loading) {
    return (
      <div className="max-w-7xl mx-auto bg-zinc-900/20 border border-zinc-800 p-5 rounded-3xl text-center text-xs font-mono text-zinc-500 animate-pulse">
        ⚡ PIPELINE DATA FLOW STREAMING...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto bg-zinc-900/40 border border-zinc-800/80 p-5 rounded-3xl backdrop-blur-xl flex flex-col items-stretch justify-between gap-6 relative overflow-hidden shadow-2xl sticky top-4 z-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent shadow-[0_0_15px_rgba(245,158,11,0.8)]" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center w-full">
        {/* STEP 1: CLUSTER */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider font-bold">1. Cluster Tier</label>
          <div className="flex gap-1 bg-black/40 p-1 rounded-2xl border border-zinc-800/50 h-11 items-center">
            {["IIT", "NIT", "IIIT", "OTHER"].map((cluster) => (
              <button
                key={cluster}
                onClick={() => { 
                  setTypeFilter(cluster); 
                  setSelectedInsti(null); 
                  setSelectedBranch("");
                  setSelectedProgram("");
                  setSelectedYear("");
                }}
                className={`flex-1 h-full rounded-xl text-[11px] font-black font-mono tracking-tight transition-all duration-200 ${
                  typeFilter === cluster ? "bg-white text-black shadow-md" : "text-zinc-500 hover:text-white"
                }`}
              >
                {cluster}
              </button>
            ))}
          </div>
        </div>

        {/* STEP 2: CAMPUS */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider font-bold">2. Target Campus</label>
          <div className="relative h-11">
            <select
              value={selectedInsti?.slug || ""}
              disabled={isCampusLocked}
              onChange={(e) => {
                let insti = metaData.find(i => i.slug === e.target.value);
                if (!insti) {
                  const staticMatch = dropdownCampuses.find(c => c.slug === e.target.value);
                  insti = staticMatch ? { ...staticMatch, yearlyData: [] } : null;
                }
                setSelectedInsti(insti);
                setSelectedBranch("");
                setSelectedProgram("");
                setSelectedYear("");
              }}
              className="w-full h-full bg-black/60 border border-zinc-800 rounded-xl px-4 text-xs font-semibold text-zinc-300 focus:outline-none focus:border-yellow-500 appearance-none cursor-pointer pr-10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <option value="" disabled>-- Select Campus --</option>
              {dropdownCampuses.map((c) => (
                <option key={c.slug} value={c.slug}>{c.name}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-zinc-600 text-[9px]">▼</div>
          </div>
        </div>

        {/* STEP 3: DEPARTMENT */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider font-bold">3. Department</label>
          <div className="relative h-11">
            <select
              value={selectedBranch}
              disabled={isBranchLocked}
              onChange={(e) => {
                setSelectedBranch(e.target.value);
                setSelectedProgram("");
                setSelectedYear("");
              }}
              className="w-full h-full bg-black/60 border border-zinc-800 rounded-xl px-4 text-xs font-semibold text-zinc-300 focus:outline-none focus:border-yellow-500 appearance-none cursor-pointer pr-10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <option value="" disabled>-- Select Branch --</option>
              {availableBranches.map((br) => (
                <option key={br} value={br}>{br}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-zinc-600 text-[9px]">▼</div>
          </div>
        </div>

        {/* STEP 4: DEGREE TYPE */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider font-bold">4. Degree Type</label>
          <div className="relative h-11">
            <select
              value={selectedProgram}
              disabled={isDegreeLocked}
              onChange={(e) => {
                setSelectedProgram(e.target.value);
                setSelectedYear("");
              }}
              className="w-full h-full bg-black/60 border border-zinc-800 rounded-xl px-4 text-xs font-semibold text-zinc-300 focus:outline-none focus:border-yellow-500 appearance-none cursor-pointer pr-10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <option value="" disabled>-- Select Degree --</option>
              {availablePrograms.map((prog) => (
                <option key={prog} value={prog}>{prog}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-zinc-600 text-[9px]">▼</div>
          </div>
        </div>

        {/* STEP 5: TIMELINE YEAR */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider font-bold">5. Academic Year</label>
          <div className="relative h-11">
            <select
              value={selectedYear}
              disabled={isYearLocked}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full h-full bg-black/60 border border-zinc-800 rounded-xl px-4 text-xs font-semibold text-zinc-300 focus:outline-none focus:border-yellow-500 appearance-none cursor-pointer pr-10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <option value="" disabled>-- Select Year --</option>
              {selectedInsti?.yearlyData?.map((y: any) => (
                <option key={y.academicYear} value={y.academicYear}>{y.academicYear}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-zinc-600 text-[9px]">▼</div>
          </div>
        </div>

      </div>
    </div>
  );
}