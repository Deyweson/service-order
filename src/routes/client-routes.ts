
import { Router } from 'express';
import { getOrders } from '../controllers/client/getOrders';
import { listClients } from '../controllers/client/listClients';

const clientRouters = Router();

clientRouters.get('/v1/client', listClients)
clientRouters.get('/v1/client/:id', getOrders)


export default clientRouters;