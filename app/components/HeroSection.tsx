"use client";
import { useUser } from "@clerk/nextjs";

export default function HeroSection() {
  const { isSignedIn } = useUser();

  // Agar user logged in hai, toh heading hide ho jayegi
  //if (isSignedIn) return null;

  return (
    <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-12 tracking-wide">
      Master Your Placements
    </h1>
  );
}