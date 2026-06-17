// lib/userSync.ts
import { db } from "@/lib/db";

interface ClerkUserParams {
  clerkUserId: string;
  email: string;
  name?: string | null;
}

export async function syncUserWithDb({ clerkUserId, email, name }: ClerkUserParams) {
  try {
    // Check karo agar user pehle se Table 1 mein exist karta hai
    const existingUser = await db.user.findUnique({
      where: { clerkUserId },
    });

    // Agar user nahi hai, toh Table 1 mein save karo
    if (!existingUser) {
      const newUser = await db.user.create({
        data: {
          clerkUserId,
          email,
          name: name || null,
        },
      });
      return newUser;
    }

    return existingUser;
  } catch (error) {
    console.error("❌ Database sync mein error aaya:", error);
    throw error;
  }
}