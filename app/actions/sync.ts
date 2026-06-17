"use server";

import { syncUserWithDb } from "@/lib/userSync";

interface SyncParams {
  clerkUserId: string;
  email: string;
  name: string | null;
}

export async function handleUserSync({ clerkUserId, email, name }: SyncParams) {
  try {
    await syncUserWithDb({ clerkUserId, email, name });
    return { success: true };
  } catch (error) {
    console.error("Action sync error:", error);
    return { success: false };
  }
}