import { __HttpCodes } from '@toteem/shared/constants/index.js';
import { CtxResponder } from '../utils/CtxResponder.js';

export const CatchErrors = async function (ctx, next) {
  try {
    await next();
  } catch (e) {
    CtxResponder(ctx, __HttpCodes.SERVER_ERROR, e?.message || 'Unknown Error');
  }
};
