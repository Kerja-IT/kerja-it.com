"use client";

import { api } from "@/trpc/react";

export function LatestJob() {
  const [lastestJob] = api.job.getLatest.useSuspenseQuery();

  return (
    <div className="w-full max-w-xs">
      {lastestJob ? (
        <p className="truncate">
          Your most recent post: {lastestJob[0]?.title}
        </p>
      ) : (
        <p>You have no posts yet.</p>
      )}
    </div>
  );
}
