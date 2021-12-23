import Joi from 'joi';

import { __PasswordRegex, __EmailRegex } from '@toteem/shared/constants';

export const UsersSchema = Joi.object({
  password: Joi.string().pattern(new RegExp(__PasswordRegex)).required(),
  email: Joi.string().pattern(new RegExp(__EmailRegex)).required(),
});
