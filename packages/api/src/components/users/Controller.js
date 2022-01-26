import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { __HttpCodes } from '@toteem/shared/constants';
import { __Config } from '../../../config';
import { MongoDB } from '../../database/MongoDB';
import { CtxResponder } from '../../utils/CtxResponder';

export const UsersController = {
  getCurrentUser(ctx) {
    const currentUser = ctx.state.user;

    delete currentUser._id;
    delete currentUser.password;
    CtxResponder(ctx, __HttpCodes.OK, 'Ok', currentUser);
  },

  async createUser(ctx) {
    const { email, password } = ctx.state.userPayload;
    const hash = bcrypt.hashSync(password, __Config.BCRYPT_COST);
    const db = await MongoDB.getDatabase();
    const foundUser = await db.collection('users').findOne({ email });

    if (!foundUser) {
      await db.collection('users').insertOne({ ...ctx.state.userPayload, password: hash });
      CtxResponder(ctx, __HttpCodes.CREATED, 'User Successfully Created');
    } else {
      CtxResponder(ctx, __HttpCodes.UNPROCESSABLE_ENTITY, 'Unable To Create User');
    }
  },

  async login(ctx) {
    const { email, password } = ctx.request.body;
    const db = await MongoDB.getDatabase();
    const foundUser = await db.collection('users').findOne({ email });
    const expirationDate = new Date(new Date().setDate(new Date().getDate() + __Config.JSONWEBTOKEN_DURATION_IN_DAYS));
    const msToS = 1000;
    const expiresIn = Math.floor((expirationDate - new Date()) / msToS);
    const createdAt = new Date().toISOString();
    const token = jwt.sign({ email, createdAt }, __Config.JSONWEBTOKEN_SECRET, { expiresIn });

    if (!foundUser) {
      CtxResponder(ctx, __HttpCodes.FORBIDDEN, 'Forbidden');
    } else if (bcrypt.compareSync(password, foundUser.password)) {
      CtxResponder(ctx, __HttpCodes.OK, 'Ok', { token });
    } else {
      CtxResponder(ctx, __HttpCodes.FORBIDDEN, 'Forbidden');
    }
  },
};
