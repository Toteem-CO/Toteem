import Router from '@koa/router';

import { PingRouter } from './ping';
import { UsersRouter } from './users';

export const ApiRouter = new Router();

ApiRouter.use('/ping', PingRouter.routes());
ApiRouter.use('/users', UsersRouter.routes());
