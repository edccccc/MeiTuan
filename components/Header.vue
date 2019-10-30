<template>
  <div class="headerBar">
    <div class="header-content">
      <div class="header-left">
        <div class="header-geo">
          <div class="header-location">
            <div class="current-city">
              <i class="el-icon-location"></i>厦门
            </div>
            <a class="change-city">更换城市</a>
            <div class="near-city">
              [
              <span>鼓浪屿</span>
              <span>鼓浪屿</span>
              <span>鼓浪屿</span>
              ]
            </div>
          </div>
        </div>
        <div class="user_action">
          <el-link type="warning" href='/logIn'>立即登录</el-link>
          <el-link type="info" href='/signIn'>注册</el-link>
        </div>
      </div>
      <div class="header-item">
          <nav-bar></nav-bar>
      </div>
    </div>
  </div>
</template>
<script>
import navBar from './navBar'
export default {
  data() {
    return {
    };
  },
  components:{
      navBar
  }
};
</script>

<style scoped lang="scss">
.headerBar {
  background: #f8f8f8;
  width: 100%;
  font-size: 12px;
  color: #999;
  height: 40px;
  .header-content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-location {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .current-city {
          i {
            font-size: 1.2em;
            margin-right: 2px;
          }
          line-height: 40px;
          font-size: 12px;
          color: #666;
        }
        .change-city {
          background: #f4f4f4;
          border: 1px solid #e5e5e5;
          border-radius: 2px;
          color: #666;
          margin: 0 4px;
          padding: 0 5px;
          display: inline-block;
          height: 18px;
          cursor: pointer;
        }
      }
      .user_action {
        margin-left: 20px;
      }
    }
  }
}
</style>
<style lang="scss">
.user_action {
  .el-link--inner {
    font-size: 12px;
  }
}
</style>
