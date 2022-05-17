import Router from '@koa/router';

import { PingRouter } from './ping/index.js';
import { UsersRouter } from './users/index.js';

export const ApiRouter = new Router();

ApiRouter.use('/ping', PingRouter.routes());
ApiRouter.use('/users', UsersRouter.routes());
