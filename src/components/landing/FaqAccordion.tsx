"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
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

export default function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left font-medium">
            {item.question}
          </AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
} 