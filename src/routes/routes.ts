
import { Router } from 'express';
import userRouters from './user-routes';
import orderRouters from './order-routes';

const router = Router();

router.use(userRouters)
router.use(orderRouters)

export default router;