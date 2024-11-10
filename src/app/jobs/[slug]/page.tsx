"use client";
import { format } from "date-fns";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

import { NavBar } from "@/app/_components/navbar";
import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";
import { getCurrencyRangeString } from "@/utils";

export default function JobDescription({
  params,
}: {
  params: { slug: string };
}) {
  const [job] = api.job.getOneJob.useSuspenseQuery({ slug: params.slug });

  if (!job) {
    return (
      <div className="flex h-dvh w-full flex-col items-center justify-center">
        <h1 className="text-2xl">404 - Job Not Found</h1>
        <p>The job your are looking for does not exist.</p>
        <p className="mt-8">
          Go back to{" "}
          <Link
            className="font-medium text-gray-700 underline hover:text-black"
            href="/"
          >
            browse all jobs
          </Link>{" "}
          or{" "}
          <Link
            className="font-medium text-gray-700 underline hover:text-black"
            href="/"
          >
            post a job
          </Link>{" "}
          for free.
        </p>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="mx-auto w-full max-w-screen-lg px-4">
        <Button className="p-0" variant="link" asChild>
          <Link href="/" className="flex items-center">
            <MoveLeft />
            <span>Back to all jobs</span>
          </Link>
        </Button>
        <main className="mt-4 flex w-full flex-col gap-4">
          <p className="text-gray-500">
            Posted on {format(job.createdAt, "d MMM yyyy")}
          </p>
          <h1 className="text-4xl font-medium">{job.title}</h1>
          <div className="flex flex-col">
            <p className="capitalize">
              {job.employementType.replaceAll("_", " ")} / {job.locationType}{" "}
              {job.minSalary
                ? `/ ${getCurrencyRangeString(job.minSalary, job.maxSalary)}`
                : ""}
            </p>
            <p>
              {job.locationCity}, {job.locationState}
            </p>
          </div>
          <div>
            <Button>Apply to this job</Button>
          </div>
        </main>
      </div>
    </div>
  );
}
