import express from 'express';
import 'express-async-errors'
import { registerController } from './controllers/user/register';
import { validateBody } from './middlewares/validate-body';
import { userSchema } from './schemas/user-schema';
import { loginController } from './controllers/user/login';
import { auth } from './middlewares/auth';
import { CreateOrder, orderSchema } from './controllers/order/create';
import { errorHandler } from './middlewares/error-handler';


const app = express();
app.use(express.json());

app.post('/v1/user/register', validateBody(userSchema), registerController);
app.post('/v1/user/login', validateBody(userSchema), loginController);

app.use(auth)
app.post('/v1/order/create', validateBody(orderSchema), CreateOrder)

app.use(errorHandler)

export default app;