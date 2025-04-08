import * as React from "react";
import {
  Brain,
  LineChart,
  MessageSquare,
  Users,
  Calendar,
  Shield,
} from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: Brain,
      title: "Adaptive Learning Paths",
      description:
        "Personalized learning journeys that adjust based on your performance, learning style, and goals.",
    },
    {
      icon: LineChart,
      title: "Real-time Progress Tracking",
      description:
        "Visualize your learning journey with comprehensive analytics and growth metrics.",
    },
    {
      icon: MessageSquare,
      title: "AI-Powered Feedback",
      description:
        "Receive instant, intelligent feedback on your work to accelerate understanding and mastery.",
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description:
        "Connect with peers and form study groups to enhance your learning experience.",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "Optimize your study time with AI-recommended schedules based on your learning patterns.",
    },
    {
      icon: Shield,
      title: "Secure Learning Environment",
      description:
        "Industry-leading security to protect your data and privacy while you learn.",
    },
  ];

  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={feature.title}
            className="flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
} 