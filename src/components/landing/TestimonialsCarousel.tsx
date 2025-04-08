import * as React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      id: 1,
      content:
        "Smart Learnify AI transformed my learning experience. The personalized approach helped me grasp complex concepts faster than ever before.",
      author: "Sarah Johnson",
      role: "Computer Science Student",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      content:
        "As someone who struggled with traditional learning methods, Smart Learnify's adaptive approach was a game-changer. I've improved my grades significantly.",
      author: "Michael Chen",
      role: "Engineering Student",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      content:
        "The AI feedback is like having a personal tutor available 24/7. It pinpoints exactly where I need to improve and suggests personalized resources.",
      author: "Jessica Rodriguez",
      role: "Medical Student",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      content:
        "I've tried many learning platforms, but Smart Learnify AI stands out with its intuitive interface and truly adaptive content that evolves with my progress.",
      author: "David Okafor",
      role: "Business Student",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 5,
      content:
        "The collaborative features make studying with classmates seamless. We can share insights while the AI helps guide our discussions toward key concepts.",
      author: "Sophia Martinez",
      role: "Psychology Student",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mt-12 w-full max-w-4xl">
      <div className="relative rounded-lg border bg-background p-8 shadow-sm">
        <div className="absolute left-8 top-8 opacity-20">
          <Quote className="h-12 w-12 text-primary" />
        </div>
        
        <div className="min-h-[200px] pt-8">
          <p className="mb-6 text-lg italic">{testimonials[activeIndex].content}</p>
          
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 overflow-hidden rounded-full">
              <img 
                src={testimonials[activeIndex].avatar} 
                alt={testimonials[activeIndex].author}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold">{testimonials[activeIndex].author}</h4>
              <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-8 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary" : "bg-primary/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 