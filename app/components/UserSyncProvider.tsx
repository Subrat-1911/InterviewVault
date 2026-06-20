"use client"

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
// ✅ Relative path se directly connect kiya
import { syncUserToDatabase } from "../actions/sync";

export default function UserSyncProvider() {
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    async function sync() {
      if (isLoaded && isSignedIn && user) {
        const fullName = user.firstName 
          ? `${user.firstName} ${user.lastName || ""}`.trim() 
          : "Anonymous User";
        
        const email = user.emailAddresses[0]?.emailAddress;

        try {
          // ✅ Direct values pass karien bagair curly braces object ke, kyunki sync.ts flat string maang raha hai
          await syncUserToDatabase(user.id, email, fullName);
          console.log("🎯 User successfully synced with Name and Role!");
        } catch (err) {
          console.log("❌ Synchronization triggered failure:", err);
        }
      }
    }
    sync();
  }, [isLoaded, isSignedIn, user]);

  return null;
}