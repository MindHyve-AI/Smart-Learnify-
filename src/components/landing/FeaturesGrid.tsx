"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  LineChart, 
  MessageSquare, 
  Users, 
  Calendar, 
  Shield 
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Adaptive Learning Paths",
    description:
      "Personalized learning journeys that adjust based on your performance, learning style, and goals.",
    icon: <Brain className="h-10 w-10" />,
  },
  {
    title: "Real-time Progress Tracking",
    description:
      "Visualize your learning journey with comprehensive analytics and growth metrics.",
    icon: <LineChart className="h-10 w-10" />,
  },
  {
    title: "AI-Powered Feedback",
    description:
      "Receive instant, intelligent feedback on your work to accelerate understanding and mastery.",
    icon: <MessageSquare className="h-10 w-10" />,
  },
  {
    title: "Collaborative Learning",
    description:
      "Connect with peers and form study groups to enhance your learning experience.",
    icon: <Users className="h-10 w-10" />,
  },
  {
    title: "Smart Scheduling",
    description:
      "Optimize your study time with AI-recommended schedules based on your learning patterns.",
    icon: <Calendar className="h-10 w-10" />,
  },
  {
    title: "Secure Learning Environment",
    description:
      "Industry-leading security to protect your data and privacy while you learn.",
    icon: <Shield className="h-10 w-10" />,
  },
];

export default function FeaturesGrid() {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col rounded-lg border bg-background p-6 shadow-sm"
        >
          <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary w-fit">
            {feature.icon}
          </div>
          <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
} 