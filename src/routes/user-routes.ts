
import { Router } from 'express';
import { validateBody } from '../middlewares/validate-body';
import { userSchema } from '../schemas/user-schema';
import { loginController } from '../controllers/user/login';
import { registerController } from '../controllers/user/register';

const userRouters = Router();

userRouters.post('/v1/user/register', validateBody(userSchema), registerController);
userRouters.post('/v1/user/login', validateBody(userSchema), loginController);

export default userRouters;