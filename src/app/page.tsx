import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, BookOpen, Brain, GraduationCap, Sparkles } from "lucide-react";
import HeroSvg from "@/components/HeroSvg";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import TestimonialsCarousel from "@/components/landing/TestimonialsCarousel";
import FaqAccordion from "@/components/landing/FaqAccordion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="hero-gradient relative w-full overflow-hidden py-24 md:py-32">
        {/* Floating shape decorations */}
        <div className="absolute left-0 top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute right-0 bottom-12 h-80 w-80 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 h-6 w-6 rounded-full bg-primary/40 animate-float" style={{ animationDelay: "0.2s" }}></div>
        <div className="absolute top-1/3 right-1/4 h-4 w-4 rounded-full bg-accent/40 animate-float" style={{ animationDelay: "1.1s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 h-8 w-8 rounded-full bg-secondary/40 animate-float" style={{ animationDelay: "0.5s" }}></div>
        
        <div className="container relative z-10">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <div className="inline-flex animate-fade-in items-center rounded-full border bg-background/80 px-3 py-1 text-sm backdrop-blur mb-6">
              <span className="mr-2 rounded-full bg-primary/20 px-2 py-1 text-xs text-primary flex items-center">
                <Sparkles className="mr-1 h-3 w-3" /> New
              </span>
              <span className="text-muted-foreground">AI-powered personalized learning</span>
            </div>
            
            <h1 className="animate-fade-up mb-4 text-balance text-shadow">
              Transform Learning with{" "}
              <span className="text-gradient">
                AI-Powered Personalization
              </span>
            </h1>
            
            <p className="animate-fade-up text-balance mt-6 max-w-[42rem] text-muted-foreground text-lg md:text-xl">
              Smart Learnify AI adapts to your unique learning style, providing personalized education 
              experiences that evolve with you. Master concepts faster with intelligent feedback.
            </p>
            
            <div className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="btn-gradient group h-12 px-8">
                <Link href="/sign-up" className="flex items-center">
                  Get Started
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="btn-outline-gradient h-12 px-8">
                <Link href="/features" className="flex items-center">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Learn More
                </Link>
              </Button>
            </div>
            
            {/* Hero Stats */}
            <div className="animate-fade-up mt-16 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
              <div className="glass-effect rounded-xl p-4 text-center">
                <div className="flex items-center justify-center">
                  <Brain className="mr-2 h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">10k+</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">Active Students</p>
              </div>
              <div className="glass-effect rounded-xl p-4 text-center">
                <div className="flex items-center justify-center">
                  <BookOpen className="mr-2 h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">500+</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">Unique Courses</p>
              </div>
              <div className="glass-effect rounded-xl p-4 text-center">
                <div className="flex items-center justify-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">95%</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">Success Rate</p>
              </div>
              <div className="glass-effect rounded-xl p-4 text-center">
                <div className="flex items-center justify-center">
                  <Sparkles className="mr-2 h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold text-primary">24/7</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">AI Support</p>
              </div>
            </div>
          </div>
          
          {/* Hero SVG/Image */}
          <div className="animate-fade-up mt-16 flex w-full max-w-5xl mx-auto items-center justify-center">
            <div className="relative w-full">
              <HeroSvg />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" style={{ height: '30%', bottom: 0, top: 'auto' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full bg-secondary/30 py-24">
        <div className="container flex flex-col items-center">
          <div className="flex flex-col items-center max-w-2xl text-center mb-16">
            <h2 className="text-gradient mb-4">
              Powerful Features for Smarter Learning
            </h2>
            <p className="text-balance text-muted-foreground text-lg">
              Discover how Smart Learnify AI transforms education with cutting-edge technology
              designed to enhance your learning journey.
            </p>
          </div>
          <FeaturesGrid />
        </div>
      </section>

      {/* Statistics Section - Removed as we now have stats in the hero */}

      {/* Testimonials */}
      <section className="w-full py-24">
        <div className="container flex flex-col items-center">
          <div className="flex flex-col items-center max-w-2xl text-center mb-16">
            <h2 className="text-gradient mb-4">
              What Our Students Say
            </h2>
            <p className="text-balance text-muted-foreground text-lg">
              Hear from students who have transformed their learning experience with Smart Learnify AI.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-secondary/30 py-24">
        <div className="container flex flex-col items-center">
          <div className="flex flex-col items-center max-w-2xl text-center mb-16">
            <h2 className="text-gradient mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-balance text-muted-foreground text-lg">
              Find answers to common questions about Smart Learnify AI.
            </p>
          </div>
          <div className="w-full max-w-3xl">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          
          <div className="relative flex flex-col items-center justify-between gap-8 p-12 md:flex-row md:p-16 md:text-left text-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">
                Ready to Transform Your Learning?
              </h2>
              <p className="mt-4 max-w-[42rem] text-white/90 text-lg">
                Join thousands of students already benefiting from personalized, AI-powered learning.
              </p>
            </div>
            <Button size="lg" variant="secondary" asChild className="group h-12 px-8">
              <Link href="/sign-up" className="flex items-center">
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
