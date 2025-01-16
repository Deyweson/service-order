import { z } from "zod";

export const startOrderSchema = z.object({
  start_date: z.coerce.date()
})