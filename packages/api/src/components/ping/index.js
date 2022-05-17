import Router from '@koa/router';

import { PingController } from './Controller.js';

export const PingRouter = new Router();

PingRouter.get('/', PingController.ping);
