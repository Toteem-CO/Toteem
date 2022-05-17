import env from 'dotenv';
import path from 'path';

import logger from '@toteem/shared/logger/index.js';

if (!process.env.HEROKU_CI) {
  const errorCode = 1;
  const loadedEnv = env.config({ path: path.resolve(process.cwd(), '.env.test') });

  if (loadedEnv.error) {
    await logger.error(loadedEnv.error);
    process.exit(errorCode);
  }
}
