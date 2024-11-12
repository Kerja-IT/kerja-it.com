"use client";
import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { NavBar } from "../_components/navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

function JobOpeningForm() {
  const [parent] = useAutoAnimate();

  const [showSalary, setShowSalary] = useState("");
  return (
    <div className="mb-32">
      <NavBar />
      <main className="mx-auto flex w-full max-w-screen-sm flex-col px-4">
        <h1 className="my-4 text-2xl font-medium md:mb-8 md:text-4xl">
          Post Job Opening
        </h1>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-medium">Job Details</p>
          <div className="flex flex-col gap-4" ref={parent}>
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Software Engineer" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Software Engineer" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="employment_type">Salary Display</Label>
              <Select
                value={showSalary}
                onValueChange={(value) => setShowSalary(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select salary display" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="range">Range</SelectItem>
                  <SelectItem value="exact">Exact</SelectItem>
                  <SelectItem value="hide">Hidden</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500">
                Listings with salary will be ranked higher to promote salary
                transparency.
              </p>
            </div>

            {showSalary === "exact" && (
              <div className="space-y-2">
                <Label htmlFor="salary">Salary</Label>
                <div className="relative">
                  <Input
                    id="salary"
                    className="peer pe-12 ps-10"
                    placeholder="5,000"
                    onBeforeInput={(e) => {
                      const regex = /^[0-9]*$/;
                      if (
                        !regex.test((e.nativeEvent as InputEvent).data ?? "")
                      ) {
                        e.preventDefault();
                      }
                    }}
                  />
                  <span className="text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm peer-disabled:opacity-50">
                    RM
                  </span>
                  <span className="text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm peer-disabled:opacity-50">
                    per month
                  </span>
                </div>
              </div>
            )}

            {showSalary === "range" && (
              <div className="flex flex-col gap-2">
                <div className="space-y-2">
                  <Label htmlFor="min_salary">Minimum Salary</Label>
                  <div className="relative">
                    <Input
                      id="min_salary"
                      className="peer pe-12 ps-10"
                      placeholder="1,700"
                      onBeforeInput={(e) => {
                        const regex = /^[0-9]*$/;
                        if (
                          !regex.test((e.nativeEvent as InputEvent).data ?? "")
                        ) {
                          e.preventDefault();
                        }
                      }}
                    />
                    <span className="text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm peer-disabled:opacity-50">
                      RM
                    </span>
                    <span className="text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm peer-disabled:opacity-50">
                      per month
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="max_salary">Maximum Salary</Label>
                  <div className="relative">
                    <Input
                      id="max_salary"
                      className="peer pe-12 ps-10"
                      placeholder="30,000"
                      onBeforeInput={(e) => {
                        const regex = /^[0-9]*$/;
                        if (
                          !regex.test((e.nativeEvent as InputEvent).data ?? "")
                        ) {
                          e.preventDefault();
                        }
                      }}
                    />
                    <span className="text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm peer-disabled:opacity-50">
                      RM
                    </span>
                    <span className="text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm peer-disabled:opacity-50">
                      per month
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="employment_type">Employment Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select employment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full_time">Full Time</SelectItem>
                  <SelectItem value="part_time">Part Time</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location_type">Working Arrangements</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select working arrangements" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="office">On-site</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="Shah Alam" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="office">Johor</SelectItem>
                  <SelectItem value="office">Kedah</SelectItem>
                  <SelectItem value="office">Kelantan</SelectItem>
                  <SelectItem value="office">Melaka</SelectItem>
                  <SelectItem value="office">Negeri Sembilan</SelectItem>
                  <SelectItem value="office">Pahang</SelectItem>
                  <SelectItem value="office">Perak</SelectItem>
                  <SelectItem value="office">Perlis</SelectItem>
                  <SelectItem value="office">Pulau Pinang</SelectItem>
                  <SelectItem value="office">Sabah</SelectItem>
                  <SelectItem value="office">Sarawak</SelectItem>
                  <SelectItem value="office">Selangor</SelectItem>
                  <SelectItem value="office">Terengganu</SelectItem>
                  <SelectItem value="remote">WP Kuala Lumpur</SelectItem>
                  <SelectItem value="office">WP Labuan</SelectItem>
                  <SelectItem value="hybrid">WP Putrajaya</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="min_experience">Min Working Experience</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select minimum years of experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">No experience needed</SelectItem>
                  <SelectItem value="1">1+ year</SelectItem>
                  <SelectItem value="2">2+ years</SelectItem>
                  <SelectItem value="3">3+ years</SelectItem>
                  <SelectItem value="4">4+ years</SelectItem>
                  <SelectItem value="5">5+ years</SelectItem>
                  <SelectItem value="6">6+ years</SelectItem>
                  <SelectItem value="7">7+ years</SelectItem>
                  <SelectItem value="8">8+ years</SelectItem>
                  <SelectItem value="9">9+ years</SelectItem>
                  <SelectItem value="10">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <hr className="mb-8 mt-10" />
        <div className="flex flex-col gap-2">
          <p className="text-xl font-medium">Company Details</p>
          <div className="flex flex-col gap-4" ref={parent}>
            <div className="space-y-2">
              <Label htmlFor="companyName">Name</Label>
              <Input id="companyName" placeholder="Apple" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyWebsite">Website</Label>
              <Input id="companyWebsite" placeholder="https://apple.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyLogo">Logo</Label>
              <Input id="companyLogo" type="file" />
            </div>
          </div>
        </div>
        <hr className="mb-8 mt-10" />
        <div className="flex flex-col gap-2">
          <p className="text-xl font-medium">Application Details</p>
          <div className="flex flex-col gap-4" ref={parent}>
            <div className="space-y-2">
              <Label htmlFor="applyUrl">URL</Label>
              <Input
                id="applyUrl"
                placeholder="https://apple.com/jobs/software-engineer"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="applyEmail">Email</Label>
              <Input id="applyEmail" placeholder="application@apple.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="applyPhone">Phone</Label>
              <Input id="applyPhone" placeholder="6013 123 1234" />
            </div>
          </div>
        </div>
        <hr className="mb-8 mt-10" />
        <div className="flex flex-col gap-2">
          <p className="text-xl font-medium">Contact Details</p>
          <div className="flex flex-col gap-4" ref={parent}>
            <div className="space-y-2">
              <Label htmlFor="contactName">Name</Label>
              <Input id="contactName" placeholder="Timmy Cooked" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Email</Label>
              <Input id="contactEmail" placeholder="timmy@apple.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPhone">Phone</Label>
              <Input id="contactPhone" placeholder="6013 123 1234" />
            </div>
          </div>
        </div>
        <hr className="mb-8 mt-10" />
        <div>
          <Button className="">Submit job post</Button>
        </div>
      </main>
    </div>
  );
}

export default JobOpeningForm;
