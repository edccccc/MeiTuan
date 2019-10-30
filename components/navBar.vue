<template>
  <div class="navBar">
    <ul>
      <li class="hasChild">
        我的美团
        <dl>
          <dd>我的订单</dd>
          <dd>我的收藏</dd>
          <dd>抵用券</dd>
          <dd>账户设置</dd>
        </dl>
      </li>
      <li>手机app</li>
      <li class="hasChild">
        商家中心
        <dl class="second-item">
          <dd>登录商家中心</dd>
          <dd>美团智能收银</dd>
          <dd>我想合作</dd>
          <dd>手机免费开店</dd>
          <dd>餐饮代理商招募</dd>
          <dd>商家申请开票</dd>
          <dd>免费合作美团开店</dd>
        </dl>
      </li>
      <li class="hasChild">
        美团规则
        <dl>
          <dd>我的订单</dd>
          <dd>我的收藏</dd>
          <dd>抵用券</dd>
          <dd>账户设置</dd>
        </dl>
      </li>
      <li class="hasChild">
        网站导航
        <div class="large">
          <div class="large-first">
            <dt>酒店旅游</dt>
            <dd></dd>
          </div>
          <div class="large-second">
            <dt>酒店旅游</dt>
            <dd></dd>
          </div>
          <div class="large-third">
            <dt>酒店旅游</dt>
            <dd></dd>
          </div>
          <div class="large-fourth">
            <dt>酒店旅游</dt>
            <dd></dd>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.navBar {
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 440px;
    height: 40px;
    li {
      cursor: pointer;
      display: inline-block;
      padding: 12px 14px;
      &:hover {
        color: #fe8c00;
      }
    }
    .hasChild {
      position: relative;
      .second-item {
        width: 150%;
      }
      .large {
        width: 1200px;
        position: absolute;
        right: -1px;
        top: 40px;
        display: none;
        background: #fff;
        border: 1px solid #e5e5e5;
        border-top: 0;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        box-sizing: content-box;
        z-index: 9999;
        padding: 30px 36px 36px 47px;
        .large-first {
            
        }
        .large-second {
        }
        .large-third {
        }
        .large-forth {
        }
      }
      dl {
        position: absolute;
        top: 40px;
        right: -1px;
        z-index: 9999;
        line-height: 35px;
        width: auto;
        display: none;
        color: #999;
        width: 100%;
        border: 1px solid #e5e5e5;
        border-top: 0;
        background: #fff;
        text-align: center;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        box-sizing: content-box;
        dd {
          &:hover {
            color: #fe8c00;
          }
        }
      }
      &:hover {
        color: #fe8c00;
        background-color: #fff;
        border-color: #e5e5e5;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        dl {
          display: block;
        }
        .large {
          display: block;
        }
      }
    }
  }
}
</style>
