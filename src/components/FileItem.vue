<template>
  <div class="file-item clearfix">
    <div class="check-icon">
      <input type="checkbox" name="icon" :id="item.Name">
      <label :for="item.Name" :class="['icon',item.IsDir?'folder':'file']"></label>
      <span class="btn" @click="clickBtnDel">删除</span>
    </div>
    <div class="file-name">
      <span @click="clickBtnLink">{{item.Name}}</span>
    </div>

    <div class="size">
      <span v-if="item.IsDir">-
      </span>
      <span v-else>
        {{(item.Size/1024).toFixed(1)}}KB
      </span>
    </div>
  </div>
</template>
<script>
import { GetMsg, GetDownload, PostDelete } from '@/server'
import { useStore } from 'vuex'
export default {
  name: "FileItem",
  props: {
    item: Object,
    id: Number,
    key: String,
  },
  setup (props) {
    const store = useStore()
    const clickBtnLink = () => {
      if (props.item.IsDir) {
        var token = sessionStorage.getItem('token')
        var path = store.state.path+props.item.Name+"/"
        store.commit("setPath", path)
        GetMsg({token: token, path: path})
      } else {
        var token = sessionStorage.getItem('token')
        var path = store.state.path
        GetDownload({token: token, path: path, filename: props.item.Name})
      }
    }
    const clickBtnDel = () => {
      PostDelete({token: sessionStorage.getItem("token"),path: store.state.path,file: props.item.Name})
      GetMsg({token: sessionStorage.getItem("token"), path: store.state.path})
    }
    // console.log(props.item.IsDir)
    return {
      clickBtnLink,
      clickBtnDel
    }
  }
}
</script>
<style lang="scss" scoped>
.file-item {
  position: relative;
  width: 100%;
  min-width: 800px;
  height: 40px;
  line-height: 40px;
  margin: 5px 0;
  .check-icon {
    float: left;
    width: 500px;
    height: 100%;
    .icon {
      display: inline-block;
      vertical-align: middle;
      width: 400px;
      height: 40px;
      margin-left: 15px;
    }
    .folder::before {
      content: "";
      display: inline-block;
      width: 35px;
      height: 35px;
      background: url('~@/assets/img/folder.png')  no-repeat top left/35px 35px;
    }
    .file::before {
      content: "";
      display: inline-block;
      width: 35px;
      height: 35px;
      background: url('~@/assets/img/file.png')  no-repeat top left/35px 35px;
    }
    .btn {
      position: absolute;
      top: 0;
      left: 4000px;
      width: 84px;
      // width: 0;
      height: 32px;
      background-color: #0098EA;
      border-radius: 5px;
      line-height: 32px;
      color: #fff;
      text-align: center;
      cursor: pointer;
    }
    input[type="checkbox"]:checked ~ .btn {
      left: 400px;
    }
  }
  .file-name {
    position: absolute;
    left: 100px;
    max-width: 150px;
    height: 100%;
    font-size: 14px;

  }
  .size {
    position: absolute;
    left: 500px;
    width: 50px;
    height: 100%;
    user-select: none;
  }
}
</style>