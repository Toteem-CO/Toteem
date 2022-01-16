// Should Always Be First In This File
import {} from '@toteem/shared/env-loader';
import { __Config } from '../config';

import Koa from 'koa';
import cors from '@koa/cors';

import logger from '@toteem/shared/logger';
import { MongoDB } from './database/MongoDB';
import { ApiRouter } from './components';
import { CatchErrors } from './middleware/CatchErrors';

const app = new Koa();

await MongoDB.connect();

app.use(CatchErrors);
app.use(cors());
app.use(ApiRouter.routes());

app.listen(__Config.PORT, async () => {
  await logger.info(`[ToteemAPI::Listen] Listening On Port ${__Config.PORT}`);
});
