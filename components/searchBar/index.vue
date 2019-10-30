vue<template>
  <div class="search-bar">
    <top></top>
    <bottom></bottom>
  </div>
</template>
<script>
import top from "./top";
import bottom from "./bottom";
export default {
  data() {
    return {};
  },
  components: {
    top,
    bottom
  }
};
</script>

<style scoped lang="scss">
.search-bar {
  width: 1200px;
  margin: 0 auto;
  height: 160px;
}
</style>
