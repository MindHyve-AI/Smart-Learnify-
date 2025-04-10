"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-medium">Smart Learnify</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className="text-sm font-medium transition-colors hover:text-gray-300"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-sm font-medium transition-colors hover:text-gray-300"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
} 