
import { Router } from 'express';
import { validateBody } from '../middlewares/validate-body';
import { CreateOrder, orderSchema } from '../controllers/order/create';
import { listOrders } from '../controllers/order/list';
import { getOrderById } from '../controllers/order/getById';

const orderRouters = Router();

orderRouters.get('/v1/order', listOrders)
orderRouters.get('/v1/order/:id', getOrderById)
orderRouters.post('/v1/order/create', validateBody(orderSchema), CreateOrder)


export default orderRouters;