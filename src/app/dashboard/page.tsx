import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardStats from "@/components/dashboard/DashboardStats";
import AiFeedbackPanel from "@/components/dashboard/AiFeedbackPanel";
import ProfileChart from "@/components/dashboard/ProfileChart";
import RecentActivities from "@/components/dashboard/RecentActivities";

export default function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      {/* Overview Stats */}
      <DashboardStats />
      
      <div className="grid gap-6 md:grid-cols-6">
        {/* Main Content */}
        <div className="col-span-4 flex flex-col gap-6">
          {/* Progress Tracker */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Track your course completion</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Web Development</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Data Science</span>
                    <span className="text-sm text-muted-foreground">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Cybersecurity</span>
                    <span className="text-sm text-muted-foreground">30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* AI Feedback Panel */}
          <AiFeedbackPanel />
          
          {/* Recent Activities */}
          <RecentActivities />
        </div>
        
        {/* Sidebar Content */}
        <div className="col-span-2 flex flex-col gap-6">
          {/* Profile Chart */}
          <ProfileChart />
          
          {/* Upcoming Deadlines */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Data Science Assignment</p>
                    <p className="text-sm text-muted-foreground">Project Submission</p>
                  </div>
                  <p className="text-sm font-medium text-destructive">Tomorrow</p>
                </li>
                <li className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Web Dev Quiz</p>
                    <p className="text-sm text-muted-foreground">Chapter 5 Assessment</p>
                  </div>
                  <p className="text-sm font-medium">In 3 days</p>
                </li>
                <li className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Cybersecurity Lab</p>
                    <p className="text-sm text-muted-foreground">Network Analysis</p>
                  </div>
                  <p className="text-sm font-medium">In 5 days</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 