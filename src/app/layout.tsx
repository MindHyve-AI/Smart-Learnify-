import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Learnify AI - Adaptive Learning Platform",
  description: "AI-powered adaptive learning platform for personalized education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <div className="flex flex-1">
            <main className="flex-1 p-4 md:p-6">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
