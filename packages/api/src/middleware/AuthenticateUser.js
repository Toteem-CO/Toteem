import jwt from 'jsonwebtoken';

import { __HttpCodes } from '@toteem/shared/constants';
import { __Config } from '../../config';
import { MongoDB } from '../database/MongoDB';
import { CtxResponder } from '../utils/CtxResponder';

const __TokenPropertyName = 'X-Toteem-Access-Token';

export const AuthenticateUser = async function (ctx, next) {
  try {
    const token = ctx.headers[__TokenPropertyName.toLowerCase()];
    const payload = jwt.verify(token, __Config.JSONWEBTOKEN_SECRET);
    const db = await MongoDB.getDatabase();
    const user = await db.collection('users').findOne({ email: payload.email });

    if (!user) {
      return CtxResponder(ctx, __HttpCodes.UNAUTHORIZED, 'Unauthorized');
    } else {
      ctx.state.user = user;
    }
  } catch (e) {
    return CtxResponder(ctx, __HttpCodes.UNAUTHORIZED, 'Unauthorized');
  }

  return next();
};
