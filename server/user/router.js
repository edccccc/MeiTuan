const Router = require('koa-router');
const Redis = require('koa-redis')
const nodeMailer = require('nodemailer')
const User = require('../dbs/models/user')
const Email = require('../dbs/config')
const $axios = require('../utils/axios')
const Passport = require('../utils/passport')

const Store = new Redis().client
const router = new Router({
  prefix: '/user'
});
router.get('/test', (ctx, next) => {
  ctx.body = {
    code: 0,
    mes: 'test'
  }
});
router.post('/signIn', async (ctx, next) => {
  const {
    username,
    password,
    email,
    code
  } = ctx.request.body

  if (code) {
    const saveCode = await Store.hget(`mail:${username}`, 'code')
    const saveExpire = await Store.hget(`mail:${username}`, 'expire')
    if (code === saveCode) {
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: 409,
          err: '验证码已过期！'
        }
        return false
      }
    } else {
      ctx.body = {
        code: 409,
        err: '验证码不正确！'
      }
      return false
    }
  } else {
    ctx.body = {
      code: 409,
      err: '请填写验证码！'
    }
  }
  const user = await User.find({
    username
  })
  if (user.length) {
    ctx.body = {
      code: 409,
      err: '该账号已经被注册！'
    }
    return
  }
  const newUser = await User.create({
    username,
    password,
    email
  })
  if (newUser) {
    const {
      data
    } = await $axios.post('/user/login')
    if (data && data.code === 200) {
      ctx.body = {
        code: 200,
        mes: '注册成功！'
      }
    } else {
      ctx.body = {
        code: -1,
        err: '未知错误！'
      }
    }
  } else {
    ctx.body = {
      code: 409,
      err: '注册失败！'
    }
  }
});

router.post('/login', async (ctx, next) => {
  return Passport.authenticate('local', (err, user, info, status) => {
    if (err) {
      ctx.body = {
        code: 409,
        err
      }
    } else {
      if (user) {
        ctx.body = {
          code: 200,
          msg: '登陆成功！',
          user
        }
        return ctx.login(user)
      } else {
        ctx.body = {
          code: 409,
          err: info
        }
      }

    }
  })(ctx, next)
})

router.post('/verify', async (ctx, next) => {
  const username = ctx.request.body.username
  const saveExpire = await Store.hget(`mail:${username}`, 'expire')
  if (saveExpire && new Date().getTime() - saveExpire > 0) {
    ctx.body = {
      code: 409,
      err: '操作过于频繁，请稍后重试！'
    }
  } else {
    const transporter = nodeMailer.createTransport({
      host: Email.smtp.host,
      prot: 587,
      secure: false,
      auth: {
        user: Email.smtp.user,
        pass: Email.smtp.pass
      }
    })
    const ko = {
      code: Email.smtp.code,
      expire: Email.smtp.expire,
      email: ctx.request.body.email,
      user: ctx.request.body.username
    }
    const mailText = {
      from: `<认证邮件>${Email.smtp.user}美团系统`,
      to: ko.email,
      subject: '<美团网站注册验证码>',
      html: `您的注册码是${ko.code}`
    }
    await transporter.sendMail(mailText, (err, info) => {
      if (err) {
        ctx.body = {
          code: 409,
          err
        }
        return console.log(err)
      } else {
        Store.hmset(`mail:${username}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.mail)
        ctx.body = {
          code: 200,
          msg: '验证码已发出，有效期为一分钟！'
        }
      }
    })
  }
})

router.get('logout', async (ctx) => {
  await ctx.logout()
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: 200,
      msg: '退出成功！'
    }
  } else {
    ctx.body = {
      code: 409,
      err: '退出失败！'
    }
  }
})

router.get('getUserInfo', (ctx) => {
  if (ctx.isAuthenticated()) {
    const {
      username,
      email
    } = ctx.session.passport.user
    ctx.body = {
      username,
      email
    }
  } else {
    ctx.body = {
      code: 409,
      err: '还未登录账号！'
    }
  }
})
module.exports = router
