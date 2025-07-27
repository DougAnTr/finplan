import z from "zod";

const envSchema = z.object({
  POSTGRES_URL: z.url(),
  APP_URL: z.url(),
});

export const env = envSchema.parse(process.env);
