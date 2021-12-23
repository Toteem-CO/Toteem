import Router from '@koa/router';
import koaBody from 'koa-body';

import { AuthenticateUser } from '../../middleware/AuthenticateUser';
import { EnsureUsersSchema } from '../../middleware/EnsureUsersSchema';
import { UsersController } from './Controller';

export const UsersRouter = new Router();

UsersRouter.get('/me', AuthenticateUser, UsersController.getCurrentUser);
UsersRouter.post('/', koaBody(), EnsureUsersSchema, UsersController.createUser);
UsersRouter.post('/login', koaBody(), UsersController.login);
