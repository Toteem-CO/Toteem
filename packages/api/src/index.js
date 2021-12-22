import env from './env-loader.js';
import Koa from 'koa';
import Router from '@koa/router';
import Joi from 'joi';
import koaBody from 'koa-body';
import bcrypt from 'bcryptjs';
import { MongoClient } from 'mongodb';
import config from '../config/index.js';

/*const Koa = require('koa');
const Router = require('@koa/router');
const Joi = require('joi');*/

const app = new Koa();
const router = new Router();

let db = null;

async function connect() {
  if (db) return db;
  db = await MongoClient.connect(config.MONGO_URI);
  db = db.db('toteem');
  return db;
}

const schema = Joi.object({
  password: Joi.string().pattern(new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')).required(),

  email: Joi.string().email().required(),
});

router.post('/users', koaBody(), async (ctx) => {
  await schema.validateAsync(ctx.request.body);
  const { email, password } = ctx.request.body;
  const hash = bcrypt.hashSync(password, 10);
  await connect();
  const user = await db.collection('users').insert({ email, password: hash });
  ctx.body = 'ok';
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

app.listen(3000);
