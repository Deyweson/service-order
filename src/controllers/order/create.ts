import { z } from "zod"
import { CustomRequest } from "../../@types/custom-request"
import { Response } from "express"
import { db } from "../../database/db"
import { IOrder } from "../../models/order"
import { IOrderInfo } from "../../models/order-info"
import { orderSchema } from "../../schemas/order-schema"




export const CreateOrder = async (req: CustomRequest, res: Response) => {

  const { clientId, date, local, title } = orderSchema.parse(req.body)
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

