"use client";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useUser();
  return (
    // Fixed position, top-0, aur z-50 se ye hamesha upar rahega
    // bg-black/80 aur backdrop-blur-md se premium glass effect aayega
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-5 border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="text-2xl font-bold tracking-widest">
        INTERVIEW<span className="text-yellow-500">VAULT</span>
      </div>
      <div>
        {!isSignedIn ? (
          <SignInButton mode="modal">
            <button className="bg-white text-black px-6 py-2 rounded-md font-bold hover:bg-gray-200 transition">
              Join
            </button>
          </SignInButton>
        ) : (
          <UserButton />
        )}
      </div>
    </nav>
  );
}