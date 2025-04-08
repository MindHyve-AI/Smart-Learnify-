import * as React from "react";

export default function TestimonialsCarousel() {
  const testimonials = [
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

  return (
    <div className="mt-12 w-full max-w-4xl">
      <div className="relative flex flex-col items-center overflow-hidden px-8 py-10">
        <div className="space-y-12">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col space-y-2 rounded-md border p-6"
            >
              <p className="mb-6 max-w-2xl text-lg">"{item.content}"</p>
              <div className="flex flex-col items-center">
                <h4 className="text-lg font-semibold">{item.author}</h4>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 