import "dotenv/config";
import { z } from "zod";


const envSchema = z.object({
  PORT: z.coerce.number().default(3000),

  DBHOST: z.string(),
  DBPORT: z.coerce.number(),
  DBUSER: z.string(),
  DBPASS: z.string(),
  DBNAME: z.string(),

  JWT_SECRET: z.string().default(""),
})

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  throw new Error('Invalid enviroment variables')
}

export const env = _env.data;