import { Request, Response } from "express"
import { db } from "../../database/db"
import { startOrderSchema } from "../../schemas/start-order-schema"
import { IOrderInfo } from "../../models/order-info"
import { IOrder } from "../../models/order"
import { BadRequestError } from "../../errors/bad-request"
import { NotFoundError } from "../../errors/not-found"


export const startOrder = async (req: Request, res: Response) => {
  const { id } = req.params
  const { start_date } = startOrderSchema.parse(req.body)

  const order = await db<IOrder>('orders').select('*').where('id', id).first()
  const orderInfo = await db<IOrderInfo>('order_infos').select('*').where('order_id', id).first()
  if (!order || !orderInfo) {
    throw new NotFoundError('Order not found!')
  }

  const orderDate = new Date(order.order_date)
  const startDate = new Date(start_date)

  if (orderDate.getTime() >= startDate.getTime()) {
    throw new BadRequestError('Invalid date, start date must be greater than scheduled date!')
  }

  await db<IOrderInfo>('order_infos').update({ start_time: start_date }).where('order_id', id)
  res.status(200).send()
  return
}