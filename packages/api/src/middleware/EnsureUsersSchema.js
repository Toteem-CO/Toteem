import { __HttpCodes } from '@toteem/shared/constants';
import { UsersSchema } from '../components/users/Schema';
import { CtxResponder } from '../utils/CtxResponder';

export const EnsureUsersSchema = async function (ctx, next) {
  try {
    ctx.state.userPayload = await UsersSchema.validateAsync(ctx.request.body);
  } catch (e) {
    return CtxResponder(ctx, __HttpCodes.BAD_REQUEST, 'Does Not Match Users Schema');
  }

  return next();
};
