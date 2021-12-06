require('dotenv').config();

const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();


app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  console.log(`Request Processed In ${new Date() - start}`);
});

router.get('/', (ctx, next) => {
  ctx.body = 'Hello World!';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

module.exports = {
  app,
};
