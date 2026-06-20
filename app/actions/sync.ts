"use server"

import { db } from "@/lib/db";

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
    // ✅ print() ki jagah console.error() kiya taaki crash na ho
    console.error("❌ Backend User Sync Error:", error);
    throw new Error("Failed to sync user data");
  }
}