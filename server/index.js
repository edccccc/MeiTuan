const Koa = require('koa')
const consola = require('consola')
const {
  Nuxt,
  Builder
} = require('nuxt')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
const userRouter = require('./user/router')
const geoRouter = require('./geo/router')
const Redis = require('koa-redis')
const dbConfig = require('./dbs/config')
const mongoose = require('mongoose')
const passport = require('./utils/passport')

const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
      port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  mongoose.connect(dbConfig.dbs, {
    useNewUrlParser: true
  })
  app.use(passport.initialize())
  app.use(bodyParser())
  app.keys = ['mt', 'keyskeys']
  app.use(session({
    key: 'mt',
    prefix: 'mt:uid',
    store: new Redis()
  }, app))
  app
    .use(userRouter.routes())
    .use(userRouter.allowedMethods());
  app
    .use(geoRouter.routes())
    .use(geoRouter.allowedMethods());
  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
