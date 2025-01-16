import { z } from "zod"
import { CustomRequest } from "../../@types/custom-request"
import { Response } from "express"
import { db } from "../../database/db"
import { IOrder } from "../../models/order"
import { IOrderInfo } from "../../models/order-info"


export const orderSchema = z.object({
  clientId: z.coerce.number(),
  title: z.string().min(8),
  date: z.coerce.date(),
  local: z.string().min(10),
})

export const CreateOrder = async (req: CustomRequest, res: Response) => {

  const { clientId, date, local, title } = orderSchema.parse(req.body)
  console.log('userId', req.token)
  const userId = Number(req.token)


  const order = await db<IOrder>('orders').insert({
    client_id: clientId,
    user_id: userId,
    order_date: date,
    order_local: local,
    title,
  }).returning('*')

  await db<IOrderInfo>('order_infos').insert({
    order_id: order[0].id
  })

  res.status(201).json(order)
  return

}

