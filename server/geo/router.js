const Router = require('koa-router');
const $axios = require('../utils/axios.js')
const router = new Router({
  prefix: '/geo'
});


router.get('/getPosition', async (ctx) => {
  const {
    status,
    data
  } = await $axios.get('http://cp-tools.cn/geo/getPosition')
  if (status === 200) {
    ctx.body = {
      ...data
    }
  } else {
    ctx.body = {}
  }
})

module.exports = router
