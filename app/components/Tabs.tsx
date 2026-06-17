"use client";

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="flex space-x-8 md:space-x-12 mb-10">
      <button 
        onClick={() => setActiveTab("insights")} 
        className={`pb-2 text-lg md:text-xl font-bold transition-all ${
          activeTab === "insights" ? "text-yellow-500 border-b-2 border-yellow-500" : "text-gray-500 hover:text-gray-300"
        }`}
      >
        Placement Insights
      </button>
      
      <button 
        onClick={() => setActiveTab("archives")} 
        className={`pb-2 text-lg md:text-xl font-bold transition-all ${
          activeTab === "archives" ? "text-yellow-500 border-b-2 border-yellow-500" : "text-gray-500 hover:text-gray-300"
        }`}
      >
        Interview Archives
      </button>
    </div>
  );
}