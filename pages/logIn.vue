<template>
  <div class="login">
    <header>
      <h1>
        <a class="logo" href="/">美团网</a>
      </h1>
    </header>
    <div class="content">
      <div class="left">
        <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt />
      </div>
      <div class="right">
        <el-input placeholder="手机号/邮箱" prefix-icon="el-icon-user" v-model="form.username"></el-input>
        <el-input placeholder="密码" prefix-icon="el-icon-lock" v-model="form.password"></el-input>
        <el-button type="primary" @click="onSubmit" class="submit-btn">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "none",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods:{
      async onSubmit(){
          const data = await this.$axios.post('/user/login',this.form)
      }
  }
};
</script>

<style scoped lang="scss">
.login {
  width: 1000px;
  margin: 0 auto;
  header {
    margin: 40px auto 30px;
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
  .content {
    display: flex;
    justify-content: space-between;
    .right {
      width: 300px;
    }
  }
}
</style>
<style lang="scss" >
.login {
  .el-input {
    margin-bottom: 15px;
  }
  .el-input__inner:focus {
    border-color: #fe8c00;
    outline: 0;
  }
}
</style>
