"use server"

import { db } from "@/lib/db";

// ==========================================
// 🔒 EXISTING: USER AUTH SYNC PIPELINE
// ==========================================
export async function syncUserToDatabase(clerkUserId: string, email: string, name: string | null) {
  try {
    // 🕵️‍♂️ Dynamic Role Verification Logic
    const isAcademicEmail = email.toLowerCase().endsWith(".ac.in");
    const assignedRole = isAcademicEmail ? 1 : 0;

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { clerkUserId }
    });

    if (existingUser) {
      return await db.user.update({
        where: { clerkUserId },
        data: { name, email, role: assignedRole }
      });
    }

    // Naya user create karne ka block
    return await db.user.create({
      data: {
        clerkUserId,
        email,
        name,
        role: assignedRole
      }
    });

  } catch (error) {
    console.error("❌ Backend User Sync Error:", error);
    throw new Error("Failed to sync user data");
  }
}

// ==========================================
// 🎓 NEW: FILTER METADATA FETCH (Filter 1 & 2 Cascade)
// ==========================================
export async function getFilterMetadata() {
  try {
    const institutions = await (db as any).institution.findMany({
      select: {
        id: true,
        name: true,
        type: true,
        slug: true,
        yearlyData: {
          select: {
            academicYear: true,
          },
        },
      },
    });
    return institutions;
  } catch (error) {
    console.error("❌ Error fetching filter metadata:", error);
    return [];
  }
}

// ==========================================
// 📊 NEW: DASHBOARD DATA FETCH (Charts & Metrics Engine)
// ==========================================
export async function getInstitutionDashboardData(slug: string, year: string) {
  try {
    const yearData = await (db as any).institutionYearData.findFirst({
      where: {
        institution: { slug: slug },
        academicYear: year,
      },
      include: {
        branchStats: true,
        sectorStats: true,
        salaryStats: true,
      },
    });

    return yearData;
  } catch (error) {
    console.error("❌ Error fetching dashboard data:", error);
    return null;
  }
}