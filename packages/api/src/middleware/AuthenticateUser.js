import jwt from 'jsonwebtoken';

import logger from '@toteem/shared/logger/index.js';
import { __HttpCodes } from '@toteem/shared/constants/index.js';
import { __Config } from '../../config/index.js';
import { MongoDB } from '../database/MongoDB.js';
import { CtxResponder } from '../utils/CtxResponder.js';

const __TokenPropertyName = 'X-Toteem-Access-Token';

export const AuthenticateUser = async function (ctx, next) {
  try {
    const token = ctx.headers[__TokenPropertyName.toLowerCase()];
    const payload = jwt.verify(token, __Config.JSONWEBTOKEN_SECRET);
    const db = await MongoDB.getDatabase();
    const user = await db.collection('users').findOne({ email: payload.email });

    if (!user) {
      await logger.error(`[AuthenticateUser] User ${payload.email} Not Found`);
      return CtxResponder(ctx, __HttpCodes.UNAUTHORIZED, 'Unauthorized');
    } else {
      await logger.info(`[AuthenticateUser] User ${payload.email} Authenticated!`);
      ctx.state.user = user;
    }
  } catch (e) {
    await logger.error(`[AuthenticateUser] Token Not Valid`);
    return CtxResponder(ctx, __HttpCodes.UNAUTHORIZED, 'Unauthorized');
  }

  return next();
};
