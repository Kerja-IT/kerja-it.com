import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const jobRouter = createTRPCRouter({
  getLatest: publicProcedure.query(async ({ ctx }) => {
    const jobs = await ctx.db.job.findMany({
      orderBy: { createdAt: "desc" },
    });

    return jobs ?? null;
  }),
});
