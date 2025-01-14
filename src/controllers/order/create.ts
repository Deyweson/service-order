import { z } from "zod"
import { CustomRequest } from "../../@types/custom-request"
import { Response } from "express"
import { db } from "../../database/db"
import { IOrder } from "../../models/order"
import { JwtPayload } from "jsonwebtoken";


export const orderSchema = z.object({
  clientId: z.coerce.number(),
  title: z.string().min(8),
  date: z.coerce.date(),
  local: z.string().min(10),
})

export const CreateOrder = async (req: CustomRequest, res: Response) => {
  try {
    console.log(req.body, req.token, 'AQUIIII')
    const { clientId, date, local, title } = orderSchema.parse(req.body)
    const userId = Number(req.token)

    const order = await db<IOrder>('orders').insert({
      client_id: clientId,
      user_id: userId,
      order_date: date,
      order_local: local,
      title,
    }).returning('*')

    res.status(201).json(order)
    return
  } catch (er) {
    console.log(er)
    res.status(500).json({ message: 'Invalid body' })
    return
  }
}

