import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  console.log("🛰️ Syncing company records incrementally...");

  // =========================================================================
  // 📦 NODE 1: AMAZON (Upsert Pattern)
  // =========================================================================
  await (db as any).company.upsert({
    where: { id: "amazon" },
    update: {}, 
    create: { 
      id: "amazon",
      name: "Amazon",
      sector: "Technology & E-Commerce",
      grossCtc: "44.15 LPA", 
      cpiCutoff: 7.0,        
      allowedBranches: [
        "Computer Science & Engineering",
        "Electrical Engineering",
        "Engineering Physics", 
        "Mechanical Engineering",
        "Chemical Engineering",
        "Aerospace Engineering"
      ],
      allowedDegrees: ["B.Tech.", "M.Tech.", "Dual Degree"],
      testPlatform: "HackerRank", 
      testPattern: "2 Coding Questions + 7 Debugging Cases + Work Style Assessment (145 Mins)",
      selectionProcess: [
        "OA | 2 DSA Coding Problems (Medium) + 7 Code Debugging Cases + Work Style Assessment on HackerRank Portal",
        "Technical Interview 1 | Deep core Data Structures & Algorithms sprint focusing on Strings, Trees, and Graphs",
        "Technical Interview 2 | Advanced problem solving, Space/Time Optimization matrices, and Object-Oriented Design (OOD)",
        "Bar Raiser Round | Scalable system scenario brainstorming heavily audited against Amazon's 16 Leadership Principles"
      ]
    }
  });

  // =========================================================================
  // 📦 NODE 2: GOOGLE (Upsert Pattern - FIXED TYPO HERE)
  // =========================================================================
  await (db as any).company.upsert({
    where: { id: "google" },
    update: {},
    create: {
      id: "google",
      name: "Google",
      sector: "Technology & Software Engineering",
      grossCtc: "54.57 LPA", 
      cpiCutoff: 8.5,        
      allowedBranches: [
        "Computer Science & Engineering",
        "Electrical Engineering",
        "Engineering Physics", 
        "Mechanical Engineering"
      ],
      allowedDegrees: ["B.Tech.", "M.Tech.", "Dual Degree"],
      testPlatform: "HackerEarth / Google Portal", 
      testPattern: "2 Complex Algorithmic Questions (Graphs/DP) - 60 Mins",
      selectionProcess: [
        "OA | 2 Highly Advanced DSA Problems (typically focusing on Dynamic Programming or Graph Optimization) - Strict 60-minute constraint",
        "Technical Interview 1 | Heavy data structures architecture run, focusing on runtime optimization, edge-case debugging, and memory metrics",
        "Technical Interview 2 | Advanced problem solving, Space/Time Optimization matrices, and Object-Oriented Design (OOD)",
        "Technical Interview 3 | System level algorithmic problem solving, sorting pipelines, and custom data structure scaling scenarios",
        "Googliness Round | Behavioral telemetry evaluation checking cultural fitness, leadership capabilities, and situational crisis response"
      ]
    }
  });

  console.log("⚡ [SUCCESS] All target nodes synced without data loss!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding Crashed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });