"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Feedback = {
  id: string;
  course: string;
  message: string;
  timestamp: string;
  isNew: boolean;
};

const feedbackItems: Feedback[] = [
  {
    id: "f1",
    course: "Web Development",
    message: "Great progress on your React project! Consider adding form validation to enhance user experience.",
    timestamp: "2 hours ago",
    isNew: true,
  },
  {
    id: "f2",
    course: "Data Science",
    message: "Your data visualization improved significantly. Try exploring more interactive charts in your next assignment.",
    timestamp: "Yesterday",
    isNew: false,
  },
  {
    id: "f3",
    course: "Cybersecurity",
    message: "You've mastered the fundamentals of network security. I recommend focusing on practical encryption methods next.",
    timestamp: "2 days ago",
    isNew: false,
  },
];

export default function AiFeedbackPanel() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-xl">AI Learning Feedback</CardTitle>
          <CardDescription>Personalized insights to help you improve</CardDescription>
        </div>
        <Brain className="h-5 w-5 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {feedbackItems.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col space-y-2 rounded-md border p-4"
            >
              {item.isNew && (
                <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              )}
              <div className="flex items-center justify-between">
                <h4 className="font-medium">{item.course}</h4>
                <span className="text-xs text-muted-foreground">{item.timestamp}</span>
              </div>
              <p className="text-sm text-muted-foreground">{item.message}</p>
              <Button variant="ghost" size="sm" className="w-full justify-between" asChild>
                <a href="#">
                  View details
                  <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 