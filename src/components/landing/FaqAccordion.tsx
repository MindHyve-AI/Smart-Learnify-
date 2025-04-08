import * as React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion() {
  const faqs = [
    {
      question: "How does Smart Learnify AI personalize my learning experience?",
      answer:
        "Smart Learnify AI analyzes your learning patterns, strengths, weaknesses, and preferences to create a personalized learning path. As you interact with the platform, our AI continuously refines its understanding of your learning style to provide more tailored content and recommendations.",
    },
    {
      question: "Can I access Smart Learnify AI on multiple devices?",
      answer:
        "Yes, Smart Learnify AI is fully responsive and works on desktops, laptops, tablets, and smartphones. Your learning progress syncs across all devices, allowing you to seamlessly continue your education wherever you are.",
    },
    {
      question: "How secure is my data on Smart Learnify AI?",
      answer:
        "We take data security and privacy very seriously. Smart Learnify AI uses industry-standard encryption, secure authentication, and follows strict data protection regulations. Your personal information and learning data are never shared with third parties without your explicit consent.",
    },
    {
      question: "Do I need to be online to use Smart Learnify AI?",
      answer:
        "While most features require an internet connection for real-time AI analysis and content delivery, we do offer offline study modes for specific content that you can download in advance. Once you're back online, your progress will sync automatically.",
    },
    {
      question: "How does the AI feedback system work?",
      answer:
        "Our AI feedback system analyzes your responses and work to provide specific, actionable insights. It identifies knowledge gaps, misconceptions, and areas where you excel. The feedback includes contextualized explanations, additional resources, and suggested practice exercises tailored to your needs.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`rounded-lg border transition-all ${
            openIndex === index ? "border-primary/50" : "border-border"
          }`}
        >
          <button
            onClick={() => toggleFaq(index)}
            className="flex w-full items-center justify-between p-4 text-left font-medium"
            aria-expanded={openIndex === index}
          >
            <span>{faq.question}</span>
            <ChevronDown 
              className={`h-5 w-5 text-muted-foreground transition-transform ${
                openIndex === index ? "rotate-180 text-primary" : ""
              }`} 
            />
          </button>
          <div 
            className={`overflow-hidden transition-all ${
              openIndex === index 
                ? "max-h-96 opacity-100" 
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="p-4 pt-0 text-muted-foreground">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 