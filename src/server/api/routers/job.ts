import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const jobRouter = createTRPCRouter({
  getLatestJobs: publicProcedure.query(async ({ ctx }) => {
    const jobs = await ctx.db.job.findMany({
      orderBy: { createdAt: "desc" },
    });

    return jobs ?? null;
  }),
  getOneJob: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.job.findFirst({ where: { slug: input.slug } });
    }),
});
