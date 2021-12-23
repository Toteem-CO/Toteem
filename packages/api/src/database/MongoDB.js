import { MongoClient } from 'mongodb';

import logger from '@toteem/shared/logger';
import { __Config } from '../../config';

let __Server = null;
let __Database = null;

export const MongoDB = {
  async connect() {
    await logger.info(`[MongoDB::Connect] Connecting To Database ${__Config.MONGO_DB_NAME}...`);
    __Server = await MongoClient.connect(__Config.MONGO_URI);
    __Database = __Server.db(__Config.MONGO_DB_NAME);
    await logger.info(`[MongoDB::Connect] Successfully Connected To Database ${__Config.MONGO_DB_NAME} !`);
  },

  async getDatabase() {
    return __Database || this.connect();
  },
};
