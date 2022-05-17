import Joi from 'joi';

import { __PasswordRegex, __EmailRegex, __NameRegex, __Roles } from '@toteem/shared/constants/index.js';

export const UsersSchema = Joi.object({
  password: Joi.string().pattern(new RegExp(__PasswordRegex)).required(),
  email: Joi.string().pattern(new RegExp(__EmailRegex)).required(),
  role: Joi.string()
    .valid(...Object.values(__Roles))
    .required(),
  firstName: Joi.string().pattern(new RegExp(__NameRegex, 'i')).required(),
  lastName: Joi.string().pattern(new RegExp(__NameRegex, 'i')).required(),
});
