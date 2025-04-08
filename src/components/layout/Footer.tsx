import * as React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <span className="text-lg font-bold text-primary-foreground">SL</span>
            </div>
            <span className="text-xl font-bold">Smart Learnify AI</span>
          </Link>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Revolutionizing education with AI-powered personalized learning experiences.
          </p>
          <div className="mt-4 flex space-x-4">
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://facebook.com" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://github.com" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Learn</h3>
          <div className="flex flex-col gap-2">
            <Link href="/courses" className="text-sm text-muted-foreground hover:text-foreground">
              Courses
            </Link>
            <Link href="/features" className="text-sm text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
            <Link href="/testimonials" className="text-sm text-muted-foreground hover:text-foreground">
              Testimonials
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Company</h3>
          <div className="flex flex-col gap-2">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About Us
            </Link>
            <Link href="/team" className="text-sm text-muted-foreground hover:text-foreground">
              Our Team
            </Link>
            <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
              Careers
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Legal</h3>
          <div className="flex flex-col gap-2">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container mt-8 border-t pt-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Smart Learnify AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 