import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <span className="text-lg font-bold text-primary-foreground">SL</span>
            </div>
            <span className="hidden font-bold sm:inline-block text-xl">Smart Learnify AI</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Courses
          </Link>
          <Link
            href="/features"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/sign-in"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Sign In
          </Link>
          <Button asChild size="sm">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </nav>
        
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/courses"
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                Courses
              </Link>
              <Link
                href="/features"
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/sign-in"
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                Sign In
              </Link>
              <Button asChild className="mt-2">
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
} 