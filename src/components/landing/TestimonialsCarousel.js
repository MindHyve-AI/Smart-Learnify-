import React, { useState } from 'react';

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Medical Student",
    content: "Smart Learnify has transformed how I approach my medical studies. The AI adapts to my learning style and has helped me improve my knowledge retention by 30%.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Sarah Johnson",
    role: "Computer Science Major",
    content: "I was struggling with advanced programming concepts until I started using Smart Learnify. The personalized approach made all the difference in helping me understand complex topics.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Michael Chen",
    role: "High School Teacher",
    content: "I recommend Smart Learnify to all my students. The adaptive learning technology helps each student progress at their own pace, and I've seen remarkable improvements in their test scores.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "Language Learner",
    content: "Learning a new language was always challenging for me until I found Smart Learnify. The AI-powered approach helps me practice exactly what I need, when I need it.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg"
  }
];

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-4xl mt-10 px-4 relative">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-6">
          <img 
            src={testimonials[activeIndex].avatar} 
            alt={testimonials[activeIndex].name} 
            className="w-14 h-14 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
            <p className="text-muted-foreground">{testimonials[activeIndex].role}</p>
          </div>
        </div>
        <p className="text-lg italic mb-6">"{testimonials[activeIndex].content}"</p>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel; 