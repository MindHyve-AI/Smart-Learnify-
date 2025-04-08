import * as React from "react";

export default function FeaturesGrid() {
  const features = [
    {
      title: "Adaptive Learning Paths",
      description:
        "Personalized learning journeys that adjust based on your performance, learning style, and goals.",
    },
    {
      title: "Real-time Progress Tracking",
      description:
        "Visualize your learning journey with comprehensive analytics and growth metrics.",
    },
    {
      title: "AI-Powered Feedback",
      description:
        "Receive instant, intelligent feedback on your work to accelerate understanding and mastery.",
    },
    {
      title: "Collaborative Learning",
      description:
        "Connect with peers and form study groups to enhance your learning experience.",
    },
    {
      title: "Smart Scheduling",
      description:
        "Optimize your study time with AI-recommended schedules based on your learning patterns.",
    },
    {
      title: "Secure Learning Environment",
      description:
        "Industry-leading security to protect your data and privacy while you learn.",
    },
  ];

  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <div
          key={feature.title}
          className="flex flex-col rounded-lg border bg-background p-6 shadow-sm"
        >
          <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  );
} 