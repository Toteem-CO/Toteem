import { __HttpCodes } from '@toteem/shared/constants/index.js';
import { UsersSchema } from '../components/users/Schema.js';
import { CtxResponder } from '../utils/CtxResponder.js';

export const EnsureUsersSchema = async function (ctx, next) {
  try {
    ctx.state.userPayload = await UsersSchema.validateAsync(ctx.request.body);
  } catch (e) {
    return CtxResponder(ctx, __HttpCodes.BAD_REQUEST, 'Does Not Match Users Schema');
  }

  return next();
};
