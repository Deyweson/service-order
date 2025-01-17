import { Request, Response } from "express"
import { z } from 'zod'
import { db } from "../../database/db"
import { IOrderInfo } from "../../models/order-info"
import { CustomRequest } from "../../@types/custom-request"


export const endOrderSchema = z.object({
  description: z.string(),
  end_date: z.coerce.date()
})


export const endOrder = async (req: CustomRequest, res: Response) => {
  const { id } = req.params
  const { description, end_date } = endOrderSchema.parse(req.body)
  const userId = Number(req.token)

  await db<IOrderInfo>('order_infos').update({ description: description, end_time: end_date, user_id: userId }).where('order_id', id)
  res.status(200).send()
}