import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroSvg from "@/components/HeroSvg";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import TestimonialsCarousel from "@/components/landing/TestimonialsCarousel";
import FaqAccordion from "@/components/landing/FaqAccordion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center gap-4 py-24 md:py-32">
        <div className="flex max-w-5xl flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter md:text-6xl lg:text-7xl">
            Transform Learning with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              AI-Powered Personalization
            </span>
          </h1>
          <p className="mt-6 max-w-[42rem] text-muted-foreground md:text-xl">
            Smart Learnify AI adapts to your learning style, providing personalized education 
            experiences that evolve with you. Master concepts faster with intelligent feedback and adaptive content.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/sign-up">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/features">Learn More</Link>
            </Button>
          </div>
        </div>
        {/* Hero SVG/Image */}
        <div className="mt-16 flex w-full max-w-4xl items-center justify-center">
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
        <div className="rounded-lg bg-primary p-8 md:p-10">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:text-left lg:flex-row">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground md:text-4xl">
                Ready to Transform Your Learning?
              </h2>
              <p className="mt-4 max-w-[42rem] text-primary-foreground/90">
                Join thousands of students already benefiting from personalized, AI-powered learning.
              </p>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/sign-up">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
