// Should Always Be First In This File
import { } from '@toteem/shared/env-loader/index.js';
import { __Config } from '../config/index.js';

import Koa from 'koa';
import cors from '@koa/cors';

import logger from '@toteem/shared/logger/index.js';
import { MongoDB } from './database/MongoDB.js';
import { ApiRouter } from './components/index.js';
import { CatchErrors } from './middleware/CatchErrors.js';

const app = new Koa();

await MongoDB.connect();

app.use(CatchErrors);
app.use(cors());
app.use(ApiRouter.routes());

app.listen(__Config.PORT, async () => {
  await logger.info(`[ToteemAPI::Listen] Listening On Port ${__Config.PORT}`);
});
