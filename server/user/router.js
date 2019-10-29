const Router = require('koa-router');
const router = new Router({
    prefix:'/user'
});
router.get('/test', (ctx, next) => {
  ctx.body = {
    code: 0,
    mes: 'test'
  }
});
module.exports= router
