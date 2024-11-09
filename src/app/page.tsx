import { api, HydrateClient } from "~/trpc/server";
import { LatestJob } from "./_components/job";

export default async function Home() {
  void api.job.getLatest.prefetch();

  return (
    <HydrateClient>
      <main>
        <p>Hello World</p>
        <LatestJob />
      </main>
    </HydrateClient>
  );
}
