<template>
  <div class="new-folder">
    <span>新建文件夹</span><br>
    <input type="text" maxlength="12" placeholder="名字" v-model="folderName"><br>
    <button class="btn" @click="clickBtnNewFolder">新建</button>
    <button class="shut" @click="clickBtnShut">x</button>
  </div>
</template>
<script>
import { ref } from 'vue'

import { PostNew, GetMsg } from '@/server'
import { useStore } from 'vuex'

export default {
  name: 'NewFolder',
  emit: ['setFalse'],
  setup (props, {emit}) {
    const folderName = ref(""),
      store = useStore()
    const clickBtnNewFolder = () => {
      const _name = folderName.value
      if (_name.length<=0) {
        alert("名称不能为空")
        return
      }
      PostNew({
        token: sessionStorage.getItem("token"), 
        path: store.state.path,
        file: _name,
      })
      GetMsg({token: sessionStorage.getItem("token"), path: store.state.path})
      emit("setFalse")
    }
    const clickBtnShut = () => {
      emit("setFalse")
    }
    return {
      folderName,
      clickBtnNewFolder,
      clickBtnShut
    }
  }
}
</script>
<style lang="scss" scoped>
.new-folder {
  position: absolute;
  left: 500px;
  top: 300px;
  z-index: 100;
  width: 400px;
  height: 280px;
  padding-top: 30px;
  border-top: 1px solid transparent;
  background-color: #3C3938;
  color: #fff;
  text-align: center;
  span {
    font-size: 22px;
    line-height: 48px;
  }
  input {
    margin-top: 40px;
    font-size: 20px;
    width: 250px;
    height: 40px;
  }
  .btn {
    overflow: hidden;
    width: 84px;
    height: 32px;
    margin-top: 32px;
    background-color: #0098EA;
    border-radius: 5px;
    line-height: 32px;
    color: #fff;
    cursor: pointer;
  }
  .shut {
    position: absolute;
    top: 20px;
    right: 40px;
    width: 30px;
    height: 30px;
  }
}
</style>