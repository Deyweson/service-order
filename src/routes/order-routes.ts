
import { Router } from 'express';
import { validateBody } from '../middlewares/validate-body';
import { CreateOrder, orderSchema } from '../controllers/order/create';
import { listOrders } from '../controllers/order/list';
import { getOrderById } from '../controllers/order/getById';
import { startOrderSchema } from '../schemas/start-order-schema';
import { startOrder } from '../controllers/order/start';
import { endOrder, endOrderSchema } from '../controllers/order/end';

const orderRouters = Router();

orderRouters.get('/v1/order', listOrders)
orderRouters.get('/v1/order/:id', getOrderById)
orderRouters.post('/v1/order/create', validateBody(orderSchema), CreateOrder)
orderRouters.put('/v1/order/:id', validateBody(startOrderSchema), startOrder)
orderRouters.put('/v1/order/end/:id', validateBody(endOrderSchema), endOrder)


export default orderRouters;