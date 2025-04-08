"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      id: 1,
      content:
        "Smart Learnify AI transformed my learning experience. The personalized approach helped me grasp complex concepts faster than ever before.",
      author: "Sarah Johnson",
      role: "Computer Science Student",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5,
    },
    {
      id: 2,
      content:
        "As someone who struggled with traditional learning methods, Smart Learnify's adaptive approach was a game-changer. I've improved my grades significantly.",
      author: "Michael Chen",
      role: "Engineering Student",
      avatar: "https://i.pravatar.cc/150?img=2",
      rating: 5,
    },
    {
      id: 3,
      content:
        "The AI feedback is like having a personal tutor available 24/7. It pinpoints exactly where I need to improve and suggests personalized resources.",
      author: "Jessica Rodriguez",
      role: "Medical Student",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 4,
    },
    {
      id: 4,
      content:
        "I've tried many learning platforms, but Smart Learnify AI stands out with its intuitive interface and truly adaptive content that evolves with my progress.",
      author: "David Okafor",
      role: "Business Student",
      avatar: "https://i.pravatar.cc/150?img=4",
      rating: 5,
    },
    {
      id: 5,
      content:
        "The collaborative features make studying with classmates seamless. We can share insights while the AI helps guide our discussions toward key concepts.",
      author: "Sophia Martinez",
      role: "Psychology Student",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, autoplay]);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full max-w-4xl">
      <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/5 to-accent/5 border p-8 md:p-10">
        <div className="absolute right-10 top-10 opacity-10 transform rotate-12">
          <Quote className="h-24 w-24 text-primary" />
        </div>
        
        <div 
          className="min-h-[240px]"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="relative pb-12"
            >
              <div className="flex mb-4">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
                {Array.from({ length: 5 - testimonials[activeIndex].rating }).map((_, i) => (
                  <Star key={i + testimonials[activeIndex].rating} className="h-4 w-4 text-gray-300" />
                ))}
              </div>
              
              <p className="mb-8 text-lg md:text-xl italic text-balance">{testimonials[activeIndex].content}</p>
              
              <div className="flex items-center">
                <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-primary/20 shadow-md">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg">{testimonials[activeIndex].author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-full">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`h-2 w-10 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary" : "bg-primary/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-8 right-8 flex gap-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="h-9 w-9 rounded-full bg-background/80 backdrop-blur"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="h-9 w-9 rounded-full bg-background/80 backdrop-blur"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
} 