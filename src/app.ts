import express, { Response } from 'express';
import { registerController } from './controllers/user/register';
import { validateBody } from './middlewares/validate-body';
import { userSchema } from './schemas/user-schema';
import { loginController } from './controllers/user/login';
import { auth, CustomRequest } from './middlewares/auth';


const app = express();
app.use(express.json());

app.post('/v1/user/register', validateBody(userSchema), registerController);
app.post('/v1/user/login', validateBody(userSchema), loginController);


export default app;