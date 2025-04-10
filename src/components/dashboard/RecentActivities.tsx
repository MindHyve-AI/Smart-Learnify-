"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, BookOpen, CheckCircle, MessageSquare } from "lucide-react";

type Activity = {
  id: string;
  icon: React.ReactNode;
  description: React.ReactNode;
  timestamp: string;
};

const activities: Activity[] = [
  {
    id: "a1",
    icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    description: (
      <span>
        Completed <span className="font-medium">JavaScript Fundamentals Quiz</span>
      </span>
    ),
    timestamp: "10 minutes ago",
  },
  {
    id: "a2",
    icon: <BookOpen className="h-5 w-5 text-indigo-500" />,
    description: (
      <span>
        Started <span className="font-medium">Advanced Data Visualization</span> lesson
      </span>
    ),
    timestamp: "2 hours ago",
  },
  {
    id: "a3",
    icon: <MessageSquare className="h-5 w-5 text-violet-500" />,
    description: (
      <span>
        Responded to discussion on <span className="font-medium">Network Security</span>
      </span>
    ),
    timestamp: "Yesterday at 4:30 PM",
  },
  {
    id: "a4",
    icon: <Clock className="h-5 w-5 text-amber-500" />,
    description: (
      <span>
        Spent <span className="font-medium">45 minutes</span> on Python programming
      </span>
    ),
    timestamp: "Yesterday at 2:15 PM",
  },
];

export default function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardDescription>Your latest learning activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start">
              <div className="mr-4 mt-0.5">{activity.icon}</div>
              <div className="space-y-1">
                <p className="text-sm">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 