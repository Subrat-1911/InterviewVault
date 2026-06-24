import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function AdminAddCompanyPage() {
  
  async function addCompanyAction(formData: FormData) {
    "use server";

    // 🔐 SECURITY CHECK: Reading the password input
    const adminPasswordInput = formData.get("adminPassword") as string;
    const correctPassword = process.env.ADMIN_PASSWORD;

    if (!correctPassword || adminPasswordInput !== correctPassword) {
      // Agar password galat hai toh database bypass karke direct access denied page ya error drop karo
      throw new Error("🔒 ACCESS DENIED: Invalid System Admin Password Node.");
    }

    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const sector = formData.get("sector") as string;
    const grossCtc = formData.get("grossCtc") as string;
    const cpiCutoffRaw = formData.get("cpiCutoff") as string;
    const testPlatform = formData.get("testPlatform") as string;
    const testPattern = formData.get("testPattern") as string;
    
    const allowedBranches = (formData.get("allowedBranches") as string)
      .split(",")
      .map((b) => b.trim());
      
    const allowedDegrees = (formData.get("allowedDegrees") as string)
      .split(",")
      .map((d) => d.trim());

    const selectionProcessRaw = formData.get("selectionProcess") as string;
    const selectionProcess = selectionProcessRaw
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    const cpiCutoff = cpiCutoffRaw ? parseFloat(cpiCutoffRaw) : null;

    // Secure Upsert Execution
    await (db as any).company.upsert({
      where: { id: id.toLowerCase().replace(/\s+/g, "-") },
      update: {
        name, sector, grossCtc, cpiCutoff,
        allowedBranches, allowedDegrees, testPlatform, testPattern, selectionProcess,
      },
      create: {
        id: id.toLowerCase().replace(/\s+/g, "-"),
        name, sector, grossCtc, cpiCutoff,
        allowedBranches, allowedDegrees, testPlatform, testPattern, selectionProcess,
      },
    });

    redirect("/companies");
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white antialiased">
      <Navbar />

      <main className="flex-grow max-w-2xl w-full mx-auto px-4 pt-28 pb-16">
        <div className="border border-zinc-800 rounded-2xl bg-zinc-950/40 p-6 md:p-8 shadow-2xl">
          <div className="mb-6 border-b border-zinc-900 pb-4">
            <span className="text-red-500 font-mono text-[10px] tracking-widest uppercase bg-red-500/10 px-2.5 py-1 rounded-full font-bold">
              Secure Auth Console
            </span>
            <h1 className="text-2xl font-black tracking-tight text-white mt-2">
              Register New Company Node
            </h1>
          </div>

          <form action={addCompanyAction} className="space-y-4 font-mono text-xs">
            
            {/* 🔒 THE ADMIN SECRET PASSWORD INPUT FIELD */}
            <div className="space-y-1 p-4 border border-zinc-800/80 bg-zinc-900/20 rounded-xl">
              <label className="text-yellow-500 font-bold block mb-1">🔑 CRITICAL: System Admin Password</label>
              <input 
                required 
                type="password" 
                name="adminPassword" 
                placeholder="Enter system master password to authorize write" 
                className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white focus:border-red-500 outline-none transition-colors tracking-widest text-sm" 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-zinc-400 block">Company ID (e.g., microsoft)</label>
                <input required name="id" placeholder="microsoft" className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 text-white focus:border-yellow-500 outline-none transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-zinc-400 block">Official Name (e.g., Microsoft)</label>
                <input required name="name" placeholder="Microsoft" className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 text-white focus:border-yellow-500 outline-none transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-zinc-400 block">Industry Sector</label>
                <input required name="sector" placeholder="Technology & Cloud" className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 text-white focus:border-yellow-500 outline-none transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-zinc-400 block">Gross CTC Package</label>
                <input required name="grossCtc" placeholder="51.00 LPA" className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 text-white focus:border-yellow-500 outline-none transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-zinc-400 block">CPI Cutoff</label>
                <input type="number" step="0.01" name="cpiCutoff" placeholder="8.0" className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 text-white focus:border-yellow-500 outline-none transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-zinc-400 block">Test Platform</label>
                <input required name="testPlatform" placeholder="Codility / HackerRank" className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 text-white focus:border-yellow-500 outline-none transition-colors" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-zinc-400 block">Test Pattern Description</label>
              <input required name="testPattern" placeholder="3 DSA Coding Questions - 90 Mins" className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 text-white focus:border-yellow-500 outline-none transition-colors" />
            </div>

            <div className="space-y-1">
              <label className="text-zinc-400 block">Allowed Branches (Comma separated)</label>
              <input required name="allowedBranches" placeholder="Computer Science & Engineering, Electrical Engineering" className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 text-white focus:border-yellow-500 outline-none transition-colors" />
            </div>

            <div className="space-y-1">
              <label className="text-zinc-400 block">Allowed Degrees (Comma separated)</label>
              <input required name="allowedDegrees" placeholder="B.Tech., M.Tech." className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 text-white focus:border-yellow-500 outline-none transition-colors" />
            </div>

            <div className="space-y-1">
              <label className="text-zinc-400 block">Selection Process Roadmap (Pipe | format)</label>
              <textarea 
                required 
                name="selectionProcess" 
                rows={4} 
                placeholder="OA | 3 Algorithmic Coding Questions on Codility&#10;Tech-1 | Core DSA checkpoint evaluating Graphs" 
                className="w-full bg-zinc-900/60 border border-zinc-800 rounded-xl p-3 text-white focus:border-yellow-500 outline-none transition-colors font-sans text-xs resize-none"
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-3 mt-2 rounded-xl font-black font-mono bg-red-600 hover:bg-red-700 text-white active:scale-[0.99] transition-all cursor-pointer text-center tracking-wider"
            >
              🔒 AUTHORIZE & DEPLOY NODE
            </button>

          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}