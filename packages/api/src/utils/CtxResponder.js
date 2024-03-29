import { __HttpCodes } from '@toteem/shared/constants/index.js';

export const CtxResponder = function (ctx, status = __HttpCodes.OK, message = 'Ok', data = {}) {
  ctx.status = status;
  ctx.body = { message, data };

  return ctx;
};
