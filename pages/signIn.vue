<template>
  <div class="sign-in">
    <div class="header">
      <div class="content">
        <div class="logo">
          <h1>
            <a href="/">美团首页</a>
          </h1>
        </div>
        <div class="login">
          <span>已有美团账号？</span>
          <a href="/logIn">登录</a>
        </div>
      </div>
    </div>
    <div class="form-con">
      <div class="form">
        <el-form ref="form" :model="form" label-width="90px">
          <el-form-item label="邮箱">
            <el-input v-model="form.mail"></el-input>
          </el-form-item>
          <el-form-item label="邮箱动态码">
            <el-input v-model="form.code"></el-input>
            <el-button round>验证码</el-button>
          </el-form-item>
          <el-form-item label="创建密码">
            <el-input v-model="form.pwd"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input v-model="form.confirmPwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" class="submit-btn">同意以下协议并注册</el-button>
          </el-form-item>
          <el-form-item>
            <a class="f1" href="http://www.meituan.com/about/terms" target="_blank">《美团网用户协议》</a>
            <a
              class="f1"
              href="https://rules-center.meituan.com/rules-detail/2"
              target="_blank"
            >《美团网隐私协议》</a>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <footer class="footer">
      <p class="copyright">
        ©
        <a class="f1" href="/">meituan.com</a>&nbsp;
        <a class="f1" target="_blank" href="http://www.miibeian.gov.cn/">京ICP证070791号</a>&nbsp;
        <span class="f1">京公网安备11010502025545号</span>
      </p>
    </footer>
  </div>
</template>
<script>
export default {
  layout: "none",
  data() {
    return {
      form: {
        mail: "",
        code: "",
        pwd: "",
        confirmPwd: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style scoped lang="scss">
.sign-in {
  .header {
    height: 60px;
    display: flex;
    border-bottom: 2px solid #d8d8d8;
    color: #666;
    .content {
      padding: 10px 0;
      width: 1000px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        height: 100%;
        h1 {
          height: 100%;
          a {
            display: block;
            width: 128px;
            height: 100%;
            background: url("https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png")
              no-repeat left center;
            background-size: contain;
            text-indent: -1000px;
            overflow: hidden;
          }
        }
      }
      .login {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          color: #666;
          font-size: 14px;
        }
        a {
          text-decoration: none;
          font-size: 14px;
          margin-left: 10px;
          padding: 5px 10px;
          display: block;
          color: #222;
          background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
          border-width: 0;
          box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
          background-size: 100%;
          border-radius: 4px;
        }
      }
    }
  }
  .form-con {
    width: 1000px;
    margin: 0 auto;
    .form {
      width: 400px;
      margin-top: 30px;
      .f1 {
        color: #fe8c00;
        text-decoration: none;
      }
    }
  }
  .footer {
    border-top: 1px solid #eee;
    padding-top: 20px;
    text-align: center;
    .copyright {
      font-size: 12px;
      .f1 {
        color: #999;
        font-size: 13px;
        text-decoration: none;
      }
    }
  }
}
</style>
<style lang="scss" >
.sign-in {
  .el-form-item:nth-child(2) {
    margin-bottom: 10px;
  }
  .el-form-item {
    margin-bottom: 15px;
    .el-input__inner:focus {
      border-color: #fe8c00;
      outline: 0;
    }
    .el-button {
      margin-top: 10px;
      padding: 7px 15px;
    }
    .submit-btn {
      background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
      border-width: 0;
      box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
      background-size: 100%;
      color: #222;
      font-weight: 700;
      padding: 10px 15px;
    }
  }
}
</style>