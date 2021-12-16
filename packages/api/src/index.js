require('dotenv').config();

const http2 = require('http2');
const { readFileSync } = require('fs');
const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

const cert = readFileSync('./cert.pem');
const key = readFileSync('./key.pem');

app.use(ctx => {
  ctx.body = 'Hello Toteem';
});

http2.createSecureServer({
  key,
  cert,
}, app.callback()).listen(443);

module.exports = {
  app,
};
