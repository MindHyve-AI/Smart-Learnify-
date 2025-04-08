"use client";

import * as React from "react";
import {
  Brain,
  LineChart,
  MessageSquare,
  Users,
  Calendar,
  Shield,
} from "lucide-react";
import { useInView } from "framer-motion";

export default function FeaturesGrid() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const features = [
    {
      icon: Brain,
      title: "Adaptive Learning Paths",
      description:
        "Personalized learning journeys that adjust based on your performance, learning style, and goals.",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: LineChart,
      title: "Real-time Progress Tracking",
      description:
        "Visualize your learning journey with comprehensive analytics and growth metrics.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: MessageSquare,
      title: "AI-Powered Feedback",
      description:
        "Receive instant, intelligent feedback on your work to accelerate understanding and mastery.",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description:
        "Connect with peers and form study groups to enhance your learning experience.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "Optimize your study time with AI-recommended schedules based on your learning patterns.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Shield,
      title: "Secure Learning Environment",
      description:
        "Industry-leading security to protect your data and privacy while you learn.",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <div 
      ref={ref}
      className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'none' : 'translateY(20px)',
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
      }}
    >
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={feature.title}
            className="rich-card group"
            style={{
              transitionDelay: `${index * 0.1}s`,
            }}
          >
            <div className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} p-3`}>
              <Icon className="h-8 w-8 text-white" />
              <div className="absolute inset-0 rounded-xl bg-white opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40"></div>
            </div>
            <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
} 