import z from "zod";

export const postSchema = z.object({
  title: z.string().min(5).max(100),
  body: z.string().min(20),
  image: z.instanceof(File),
});
