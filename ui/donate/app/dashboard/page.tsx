"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const donationCauses = [
  { 
    id: 1, 
    title: "Clean Water Initiative", 
    category: "Environment", 
    amountRaised: 5000, 
    goal: 10000
  },
  { 
    id: 2, 
    title: "Education for All", 
    category: "Education", 
    amountRaised: 7500, 
    goal: 15000
  },
  { 
    id: 3, 
    title: "Wildlife Conservation", 
    category: "Animals", 
    amountRaised: 3000, 
    goal: 8000
  },
  { 
    id: 4, 
    title: "Hunger Relief Program", 
    category: "Humanitarian", 
    amountRaised: 12000, 
    goal: 20000
  },
  { 
    id: 5, 
    title: "Mental Health Support", 
    category: "Health", 
    amountRaised: 6000, 
    goal: 12000
  },
  { 
    id: 6, 
    title: "Renewable Energy Project", 
    category: "Environment", 
    amountRaised: 9000, 
    goal: 18000
  },
  { 
    id: 7, 
    title: "Elderly Care Services", 
    category: "Health", 
    amountRaised: 4000, 
    goal: 10000
  },
  { 
    id: 8, 
    title: "Youth Empowerment Program", 
    category: "Education", 
    amountRaised: 5500, 
    goal: 11000
  }
];

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCauses = donationCauses.filter((cause) => 
    cause.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "all" || cause.category === selectedCategory)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Active Donation Campaigns</h1>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Input
          type="text"
          placeholder="Search campaigns..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Environment">Environment</SelectItem>
            <SelectItem value="Education">Education</SelectItem>
            <SelectItem value="Animals">Animals</SelectItem>
            <SelectItem value="Humanitarian">Humanitarian</SelectItem>
            <SelectItem value="Health">Health</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCauses.map((cause) => (
          <Card key={cause.id} className="flex flex-col">
            <CardHeader className="p-0">
              <div className="w-full h-40 bg-gray-100 flex items-center justify-center rounded-t-lg">
                <p className="text-lg font-medium text-gray-700 text-center px-4">
                  {cause.title}
                </p>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="text-xl mb-2">{cause.title}</CardTitle>
              <Badge className="mb-2">{cause.category}</Badge>
              <div className="mt-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${(cause.amountRaised / cause.goal) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                ${cause.amountRaised.toLocaleString()} raised of ${cause.goal.toLocaleString()} goal
              </p>
            </CardContent>
            <CardFooter>
              <a href={"http://localhost:8000/"} className="w-full">
                <Button className="w-full">Donate Now</Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {filteredCauses.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No matching donation campaigns found.</p>
      )}
    </div>
  );
}
