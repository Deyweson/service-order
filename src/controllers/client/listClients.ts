import { Request, Response } from "express"
import { IOrder } from "../../models/order"
import { db } from "../../database/db"
import { NotFoundError } from "../../errors/not-found"
import { IClient } from "../../models/client"

export const listClients = async (req: Request, res: Response) => {

  const clients = await db<IClient>('clients').select('*')
  if (clients.length === 0) {
    throw new NotFoundError('Clients not found')
  }

  res.status(200).json(clients)
  return

}