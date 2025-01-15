
import { Router } from 'express';
import userRouters from './user-routes';
import orderRouters from './order-routes';
import { auth } from '../middlewares/auth';
import clientRouters from './client-routes';

const router = Router();

router.use(userRouters)


router.use(auth)
router.use(orderRouters)
router.use(clientRouters)

export default router;