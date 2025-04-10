"use client";

import * as React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DonutChart, Legend } from "@tremor/react";

const data = [
  {
    name: "Web Development",
    value: 35,
  },
  {
    name: "Data Science",
    value: 25,
  },
  {
    name: "Cybersecurity",
    value: 15,
  },
  {
    name: "UI/UX Design",
    value: 15,
  },
  {
    name: "Mobile Development",
    value: 10,
  },
];

const valueFormatter = (number: number) => `${number}%`;

export default function ProfileChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Learning Profile</CardTitle>
        <CardDescription>Your learning focus distribution</CardDescription>
      </CardHeader>
      <CardContent>
        <DonutChart
          className="mt-4 h-40"
          data={data}
          category="value"
          index="name"
          valueFormatter={valueFormatter}
          colors={["indigo", "violet", "fuchsia", "cyan", "teal"]}
        />
        <Legend
          className="mt-6"
          categories={data.map(item => item.name)}
          colors={["indigo", "violet", "fuchsia", "cyan", "teal"]}
        />
      </CardContent>
    </Card>
  );
} 