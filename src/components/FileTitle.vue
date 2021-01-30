<template>
  <div class="file-title">
    <span class="name">文件名</span>

    <span class="size">大小</span>
    <span class="modify-time">修改日期</span>
  </div>
</template>
<script>
export default {
  name: 'FileTitle'
}
</script>
<style lang="scss" scoped>
.file-title {
  min-width: 800px;
  height: 20px;
  margin-left: 100px;
  margin-top: 15px;
  line-height: 20px;
  font-size: 14px;
  span {
    display: inline-block;
    width: 100px;
  }
  .size {
    margin-left: 300px;
  }
  .modify-time {
    margin-left: 100px;
  }
}
</style>