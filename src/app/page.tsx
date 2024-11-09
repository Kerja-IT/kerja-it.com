import { api, HydrateClient } from "~/trpc/server";
import { SalaryDisplay } from "./_components/salary-display";

export default async function Home() {
  const jobs = await api.job.getLatest();

  return (
    <HydrateClient>
      <div className="mx-auto flex max-w-screen-lg flex-col px-4">
        <div className="mx-auto mt-8 flex max-w-screen-md flex-col gap-2 text-center">
          <h1 className="text-2xl font-black">
            Find Your Next Tech Opportunity in Malaysia
          </h1>
          <p className="text-sm">
            Explore exciting opportunities in software engineering, data
            science, cybersecurity, and more.
          </p>
        </div>
      </div>
      <main className="mx-auto mt-8 flex max-w-screen-lg flex-col gap-4 px-4">
        {jobs.map((job) => (
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
      </main>
    </HydrateClient>
  );
}
