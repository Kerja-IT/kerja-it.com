import Link from "next/link";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { api, HydrateClient } from "@/trpc/server";
import { getCurrencyRangeString } from "@/utils";

import { Footer } from "./_components/footer";
import { NavBar } from "./_components/navbar";

export default async function Home() {
  const jobs = await api.job.getLatestJobs();

  return (
    <HydrateClient>
      <NavBar />
      <div className="mx-auto flex max-w-screen-lg flex-col px-4">
        <div className="mx-auto mt-4 flex max-w-screen-md flex-col gap-2 text-center md:gap-4">
          <h1 className="text-2xl font-medium md:text-6xl">
            Find Your Next Tech Opportunity in Malaysia
          </h1>
          <p className="text-xs md:text-base">
            <span>
              Explore exciting opportunities in software engineering, data
              science, cybersecurity, and more.
            </span>
            <span className="hidden md:inline"> </span>
            <span className="hidden md:inline">
              Begin your journey toward a meaningful tech career today.
            </span>
          </p>
        </div>
      </div>
      <main className="mx-auto mt-8 flex max-w-screen-lg flex-col gap-2 px-4 md:mt-16">
        {[
          ...jobs,
          ...jobs,
          ...jobs,
          ...jobs,
          ...jobs,
          ...jobs,
          ...jobs,
          ...jobs,
          ...jobs,
          ...jobs,
        ].map((job) => (
          <Link
            href={`/jobs/${job.slug}`}
            key={job.id}
            className="group flex items-center justify-between rounded-lg border bg-white p-4 hover:border-black"
          >
            <div className="text-left">
              <p className="text-xs">{job.companyName}</p>
              <p className="text-lg font-medium">{job.title}</p>
            </div>
            <div className="flex flex-col items-end text-sm">
              <p className="capitalize">
                {job.employementType.replaceAll("_", " ")} / {job.locationType}
              </p>
              <p>{getCurrencyRangeString(job.minSalary, job.maxSalary)}</p>
            </div>
          </Link>
        ))}
        <div className="mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
      <Footer />
    </HydrateClient>
  );
}
