// app/components/UserSyncProvider.tsx
"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { handleUserSync } from "../actions/sync";
export default function UserSyncProvider() {
  const { isSignedIn, user } = useUser();
  // 👈 Yeh temporary log add karo dekhne ke liye ki component render hua ya nahi
  console.log("🔍 Provider Status:", { isSignedIn, hasUser: !!user });

  useEffect(() => {
    if (isSignedIn && user) {
      const clerkUserId = user.id;
      const email = user.primaryEmailAddress?.emailAddress;
      const name = user.fullName;

      if (email) {
        handleUserSync({ clerkUserId, email, name })
          .then((res: { success: boolean }) => {
            if (res.success) {
              console.log("🔥 Table 1: User synced safely via Provider!");
            }
          })
          .catch((err: unknown) => console.error("Sync trigger fail:", err));
      }
    }
  }, [isSignedIn, user]);

  // Yeh component screen par kuch dikhayega nahi, bas background mein kaam karega
  return null; 
}