"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

type Testimonial = {
  id: number;
  content: string;
  author: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "Smart Learnify AI transformed my learning experience. The personalized approach helped me grasp complex concepts faster than ever before.",
    author: "Sarah Johnson",
    role: "Computer Science Student",
  },
  {
    id: 2,
    content:
      "As someone who struggled with traditional learning methods, Smart Learnify's adaptive approach was a game-changer. I've improved my grades significantly.",
    author: "Michael Chen",
    role: "Engineering Student",
  },
  {
    id: 3,
    content:
      "The AI feedback is like having a personal tutor available 24/7. It pinpoints exactly where I need to improve and suggests personalized resources.",
    author: "Jessica Rodriguez",
    role: "Medical Student",
  },
];

export default function TestimonialsCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="mt-12 w-full max-w-4xl">
      <div className="relative flex flex-col items-center overflow-hidden px-8 py-10">
        <div className="absolute left-0 top-10 text-primary/20">
          <Quote className="h-24 w-24 rotate-180" />
        </div>
        <div className="absolute right-0 bottom-10 text-primary/20">
          <Quote className="h-24 w-24" />
        </div>
        
        <div className="relative h-[250px] w-full overflow-hidden">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentTestimonial}
              custom={direction}
              initial={{ opacity: 0, x: direction * 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -200 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <p className="mb-6 max-w-2xl text-lg">
                "{testimonials[currentTestimonial].content}"
              </p>
              <div className="flex flex-col items-center">
                <h4 className="text-lg font-semibold">
                  {testimonials[currentTestimonial].author}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="mt-6 flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full bg-muted-foreground/30 transition-colors",
                  { "bg-primary": index === currentTestimonial }
                )}
                onClick={() => {
                  setDirection(index > currentTestimonial ? 1 : -1);
                  setCurrentTestimonial(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
} 