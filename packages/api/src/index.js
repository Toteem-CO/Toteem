import env from './env-loader.js';
import Koa from 'koa';
import Router from '@koa/router';
import Joi from 'joi';
import koaBody from 'koa-body';
import bcrypt from 'bcryptjs';
import { MongoClient } from 'mongodb';
import config from '../config/index.js';
import jwt from 'jsonwebtoken';

/*const Koa = require('koa');
const Router = require('@koa/router');
const Joi = require('joi');*/

const app = new Koa();
const router = new Router();

let db = null;

async function connect() {
  if (db) return db;
  db = await MongoClient.connect(config.MONGO_URI);
  db = db.db(config.MONGO_DB_NAME);
  return db;
}

const schema = Joi.object({
  password: Joi.string().pattern(new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')).required(),
  email: Joi.string().email().required(),
});

async function authenticateUser(ctx, next) {
  try {
    const token = ctx.headers['X-Toteem-Access-Token'.toLowerCase()];
    const payload = jwt.verify(token, config.JSONWEBTOKEN_SECRET);
    const db = await connect();
    const user = await db.collection('users').findOne({ email: payload.email });

    if (!user) {
      ctx.status = 404;
      ctx.body = { message: `User ${payload.email} Not Found` };
    } else {
      ctx.state.user = user;
      next();
    }
  } catch (e) {
    ctx.status = 401;
    ctx.body = { message: 'Unauthorized' };
  }
}

router.post('/users', koaBody(), async (ctx) => {
  await schema.validateAsync(ctx.request.body);
  const { email, password } = ctx.request.body;
  const hash = bcrypt.hashSync(password, config.BCRYPT_COST);
  await connect();
  const foundUser = await db.collection('users').findOne({ email });
  if (!foundUser) {
    const insertedUser = await db.collection('users').insertOne({ email, password: hash });
    ctx.body = { message: `User ${email} successfully created` };
    ctx.status = 201;
  } else {
    ctx.body = { message: `User ${email} already exists` };
    ctx.status = 422;
  }
});

router.post('/users/login', koaBody(), async (ctx) => {
  const { email, password } = ctx.request.body;

  await connect();

  const foundUser = await db.collection('users').findOne({ email });

  if (!foundUser) {
    ctx.body = { message: `User ${email} does not exist` };
    ctx.status = 404;
  } else if (bcrypt.compareSync(password, foundUser.password)) {
    const expirationDate = new Date(new Date().setDate(new Date().getDate() + config.JSONWEBTOKEN_DURATION_IN_DAYS));
    const expiresIn = Math.floor((expirationDate - new Date()) / 1000);
    const token = jwt.sign({ email }, config.JSONWEBTOKEN_SECRET, { expiresIn: 2 });
    ctx.body = { message: `Successfully authenticatd as ${email}`, token };
    ctx.status = 200;
  } else {
    ctx.body = { message: `Password does not match user ${email}` };
    ctx.status = 403;
  }
});

router.get('/users/me', authenticateUser, async (ctx) => {
  ctx.body = ctx.state.user.email;
});

router.get('/ping', (ctx) => {
  ctx.body = 'Pong';
});

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    ctx.body = e.message;
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(config.PORT, () => {
  console.log(`Toteem API Listening On Port ${config.PORT}`);
});
