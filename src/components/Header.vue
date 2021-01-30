<template>
  <div class="header">
    <div class="icon">
      icon
    </div>
    网盘
    {{$store.state.username}}
  </div>
</template>
<script>
export default {
  name: "PageHeader"
}
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 60px;
  background-color: #181A1B;
  color: #ccc;
  .icon {
    float: left;
    width: 200px;
    height: 100%;
  }
}
</style>