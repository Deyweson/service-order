import { Request, Response } from "express"
import { IOrder } from "../../models/order"
import { db } from "../../database/db"

export const listOrders = async (_req: Request, res: Response) => {

  const orders = await db<IOrder>('orders')
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
    .where('orders.status', '=', 'EM_ABERTO')
    .orderBy('orders.order_date', 'asc')

  res.status(200).json(orders)
  return
}