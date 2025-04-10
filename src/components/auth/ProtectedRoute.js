"use client";

import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/sign-in");
    }
  }, [isLoaded, router, userId]);

  // Don't render anything until Clerk has loaded
  if (!isLoaded) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  // If no user, the useEffect will redirect, but we need to return something
  if (!userId) {
    return <div className="flex h-screen items-center justify-center">Redirecting to login...</div>;
  }

  // User is authenticated, render children
  return <>{children}</>;
} 