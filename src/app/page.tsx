import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import HeroSvg from "@/components/HeroSvg";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import TestimonialsCarousel from "@/components/landing/TestimonialsCarousel";
import FaqAccordion from "@/components/landing/FaqAccordion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="container relative overflow-hidden flex flex-col items-center justify-center gap-4 py-24 md:py-32">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        
        <div className="flex max-w-5xl flex-col items-center text-center">
          <div className="inline-flex animate-fade-in items-center rounded-full border bg-background px-3 py-1 text-sm mb-4">
            <span className="mr-2 rounded-full bg-primary/20 px-2 py-1 text-xs text-primary">New</span>
            <span className="text-muted-foreground">AI-powered learning for everyone</span>
          </div>
          
          <h1 className="animate-fade-up text-4xl font-bold tracking-tighter md:text-6xl lg:text-7xl">
            Transform Learning with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              AI-Powered Personalization
            </span>
          </h1>
          <p className="animate-fade-up mt-6 max-w-[42rem] text-muted-foreground md:text-xl">
            Smart Learnify AI adapts to your learning style, providing personalized education 
            experiences that evolve with you. Master concepts faster with intelligent feedback and adaptive content.
          </p>
          <div className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="group">
              <Link href="/sign-up">
                Get Started
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/features">Learn More</Link>
            </Button>
          </div>
        </div>
        {/* Hero SVG/Image */}
        <div className="animate-fade-up mt-16 flex w-full max-w-4xl items-center justify-center">
          <HeroSvg />
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full bg-muted/40 py-20">
        <div className="container flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold tracking-tighter md:text-4xl">
            Powerful Features for Smarter Learning
          </h2>
          <p className="mt-4 max-w-[42rem] text-center text-muted-foreground">
            Discover how Smart Learnify AI transforms education with cutting-edge technology
            designed to enhance your learning journey.
          </p>
          <FeaturesGrid />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="w-full py-20 bg-background border-y">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">10k+</div>
              <p className="text-center text-sm text-muted-foreground">Active Students</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">500+</div>
              <p className="text-center text-sm text-muted-foreground">Courses</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">95%</div>
              <p className="text-center text-sm text-muted-foreground">Success Rate</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">24/7</div>
              <p className="text-center text-sm text-muted-foreground">AI Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20">
        <div className="container flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold tracking-tighter md:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 max-w-[42rem] text-center text-muted-foreground">
            Hear from students who have transformed their learning experience with Smart Learnify AI.
          </p>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-muted/40 py-20">
        <div className="container flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold tracking-tighter md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-[42rem] text-center text-muted-foreground">
            Find answers to common questions about Smart Learnify AI.
          </p>
          <div className="mt-8 w-full max-w-3xl">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="relative overflow-hidden rounded-lg bg-primary p-8 md:p-10">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-primary-foreground/10 blur-3xl" />
          
          <div className="relative flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground md:text-4xl">
                Ready to Transform Your Learning?
              </h2>
              <p className="mt-4 max-w-[42rem] text-primary-foreground/90">
                Join thousands of students already benefiting from personalized, AI-powered learning.
              </p>
            </div>
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="/sign-up">
                Get Started Now
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
