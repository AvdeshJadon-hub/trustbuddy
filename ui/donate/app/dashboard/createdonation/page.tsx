"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function CreateDonationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    goal: "",
    image: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Donation campaign created:", formData);
    // Redirect to the dashboard or a success page
    router.push("/dashboard");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create a Donation Campaign</h1>
      <Card>
        <CardHeader>
          <CardTitle>Campaign Details</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Campaign Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter campaign title"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={formData.category} onValueChange={handleSelectChange}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Environment">Environment</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Animals">Animals</SelectItem>
                  <SelectItem value="Humanitarian">Humanitarian</SelectItem>
                  <SelectItem value="Health">Health</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your campaign"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="goal">Fundraising Goal ($)</Label>
              <Input
                id="goal"
                name="goal"
                type="number"
                value={formData.goal}
                onChange={handleInputChange}
                placeholder="Enter your fundraising goal"
                min="1"
                step="1"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Campaign Image URL</Label>
              <Input
                id="image"
                name="image"
                type="url"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="Enter image URL"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Create Campaign</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

