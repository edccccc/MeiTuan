<template>
  <div class="bottomBar">
    <ul>
      <li>美团外卖</li>
      <li>猫眼电影</li>
      <li>民宿／公寓</li>
      <li>商家入驻</li>
      <li>美团公益</li>
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
.bottomBar {
  width: 600px;
  margin: 0 auto;
  padding: 0 20px;
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    li {
      color: #222;
      font-weight: 700;
      font-size: 16px;
      cursor: pointer;
      &:hover{
          color: #fe8c00;
      }
    }
  }
}
</style>
