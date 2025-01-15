import { Request, Response } from "express"
import { IOrder } from "../../models/order"
import { db } from "../../database/db"
import { NotFoundError } from "../../errors/not-found"

export const getOrders = async (req: Request, res: Response) => {

  const { id } = req.params

  const order = await db<IOrder>('orders')
    .select([
      'orders.id',
      'orders.title',
      'orders.order_date',
      'orders.order_local',
      'orders.status',
      'clients.name as client',
      'users.username as user'
    ])
    .join('clients', 'clients.id', 'orders.client_id')
    .join('users', 'users.id', 'orders.user_id')
    .where('orders.client_id', '=', id)
    .orderBy('orders.order_date', 'asc')

  if (order.length === 0) {
    throw new NotFoundError('Orders not found')
  }

  res.status(200).json(order)
  return
}