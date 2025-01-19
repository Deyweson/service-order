import { z } from "zod";

export const orderSchema = z.object({
  clientId: z.coerce.number(),
  title: z.string().min(8),
  date: z.coerce.date(),
  local: z.string().min(10),
})