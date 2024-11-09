import Image from "next/image";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import { api, HydrateClient } from "~/trpc/server";

import Footer from "./_components/footer";
import { SalaryDisplay } from "./_components/salary-display";

export default async function Home() {
  const jobs = await api.job.getLatest();

  return (
    <HydrateClient>
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Kerja IT Logo"
            width={300}
            height={300}
            className="h-10 w-10"
          />
          <p className="text-sm font-semibold">Kerja-IT.com</p>
        </Link>
        <Button variant="default">Post a Job – Free</Button>
      </nav>
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
      <main className="mx-auto mt-8 flex max-w-screen-lg flex-col gap-4 px-4 md:mt-16">
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
          <div
            key={job.id}
            className="flex items-center justify-between rounded-lg border bg-white p-4"
          >
            <div className="text-left">
              <p className="text-xs">{job.companyName}</p>
              <p className="text-lg font-medium">{job.title}</p>
            </div>
            <div className="flex flex-col items-end text-sm">
              <p className="capitalize">
                {job.employementType.replaceAll("_", " ")} / {job.locationType}
              </p>
              <SalaryDisplay min={job.minSalary} max={job.maxSalary} />
            </div>
          </div>
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
