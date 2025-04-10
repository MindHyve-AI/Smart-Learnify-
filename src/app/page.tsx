import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto max-w-full">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold tracking-tighter md:text-6xl">
              Smart Learning for{" "}
              <span className="text-indigo-600">
                the Digital Age
              </span>
            </h1>
            <p className="mt-6 text-muted-foreground text-lg">
              Personalized learning paths, interactive courses, and AI-powered assessments to help you master new skills and advance your career.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Link href="/sign-up">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300">
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative w-full h-[300px] md:h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Students learning with laptops
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center">
          <div className="text-center mb-16">
            <h3 className="text-sm uppercase tracking-wider text-indigo-600 font-semibold mb-2">FEATURES</h3>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              A better way to learn
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
              Smart Learnify offers a comprehensive learning experience with features designed to accelerate your growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {/* Personalized Learning Paths */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                <div className="h-10 w-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Personalized Learning Paths</h3>
                <p className="text-muted-foreground">Customized learning journeys based on your goals, skills, and learning style.</p>
              </div>
            </div>
            
            {/* Interactive Courses */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                <div className="h-10 w-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Interactive Courses</h3>
                <p className="text-muted-foreground">Engaging content with videos, quizzes, and hands-on projects to reinforce learning.</p>
              </div>
            </div>
            
            {/* AI-Powered Assessments */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                <div className="h-10 w-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">AI-Powered Assessments</h3>
                <p className="text-muted-foreground">Smart evaluations that adapt to your knowledge level and provide targeted feedback.</p>
              </div>
            </div>
            
            {/* Community Learning */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                <div className="h-10 w-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Community Learning</h3>
                <p className="text-muted-foreground">Connect with peers, join study groups, and collaborate on projects to enhance learning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500">
        <p>© 2025 Smart Learnify. All rights reserved.</p>
      </footer>
    </div>
  );
} 