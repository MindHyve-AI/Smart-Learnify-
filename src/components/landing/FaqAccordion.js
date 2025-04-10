import React, { useState } from 'react';

const faqs = [
  {
    question: "How does Smart Learnify adapt to my learning style?",
    answer: "Smart Learnify uses advanced AI algorithms to analyze your learning patterns, strengths, and areas for improvement. It tracks how you interact with content, your response times, and your performance on assessments to build a personalized learning profile. This profile is continuously updated as you learn, ensuring that the platform evolves with you."
  },
  {
    question: "Is Smart Learnify suitable for all subjects?",
    answer: "Yes! Smart Learnify is designed to work across a wide range of subjects including mathematics, sciences, languages, humanities, and professional skills. Our adaptive technology works regardless of the subject matter to provide personalized learning experiences."
  },
  {
    question: "Can I track my progress over time?",
    answer: "Absolutely. Smart Learnify provides detailed analytics and visualizations of your learning journey. You can see your progress across different subjects, topics, and skills, helping you understand where you've improved and where you might need additional focus."
  },
  {
    question: "How much does Smart Learnify cost?",
    answer: "Smart Learnify offers several subscription tiers to fit different needs. We have a free basic plan with limited features, as well as premium plans starting at $9.99/month that unlock the full power of our AI-adaptive learning platform. Educational institutions can contact us for special pricing."
  },
  {
    question: "Can I use Smart Learnify on multiple devices?",
    answer: "Yes, Smart Learnify is fully responsive and works seamlessly across desktop, tablet, and mobile devices. Your progress and preferences sync automatically across all your devices, allowing you to continue your learning journey wherever you are."
  }
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
            onClick={() => toggleFaq(index)}
          >
            <span className="font-medium">{faq.question}</span>
            <span className="ml-6 flex-shrink-0">
              {openIndex === index ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 bg-gray-50">
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion; 