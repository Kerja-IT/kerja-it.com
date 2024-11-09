import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const jobRouter = createTRPCRouter({
  getLatest: publicProcedure.query(async ({ ctx }) => {
    const job = await ctx.db.job.findFirst({
      orderBy: { createdAt: "desc" },
    });

    return job ?? null;
  }),
});
