import Router from '@koa/router';
import koaBody from 'koa-body';

import { AuthenticateUser } from '../../middleware/AuthenticateUser.js';
import { EnsureUsersSchema } from '../../middleware/EnsureUsersSchema.js';
import { UsersController } from './Controller.js';

export const UsersRouter = new Router();

UsersRouter.get('/me', AuthenticateUser, UsersController.getCurrentUser);
UsersRouter.post('/', koaBody(), EnsureUsersSchema, UsersController.createUser);
UsersRouter.post('/login', koaBody(), UsersController.login);
