import express, { Response } from 'express';
import { registerController } from './controllers/user/register';
import { validateBody } from './middlewares/validate-body';
import { userSchema } from './schemas/user-schema';
import { loginController } from './controllers/user/login';
import { auth } from './middlewares/auth';
import { CreateOrder, orderSchema } from './controllers/order/create';


const app = express();
app.use(express.json());

app.post('/v1/user/register', validateBody(userSchema), registerController);
app.post('/v1/user/login', validateBody(userSchema), loginController);


app.post('/v1/order/create', auth, validateBody(orderSchema), CreateOrder)




export default app;