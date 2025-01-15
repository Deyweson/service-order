
import { Router } from 'express';
import { validateBody } from '../middlewares/validate-body';
import { CreateOrder, orderSchema } from '../controllers/order/create';
import { auth } from '../middlewares/auth';

const orderRouters = Router();

orderRouters.use(auth)
orderRouters.post('/v1/order/create', validateBody(orderSchema), CreateOrder)

export default orderRouters;