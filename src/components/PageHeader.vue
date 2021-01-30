<template>
  <div class="page-header clearfix">
      <div class="go-back" @click="clickBtnBack()">
        <i class="fa fa-arrow-left fa-lg"></i>
      </div>
      <div class="btn upload">
        <input type="file" title="上传文件" multiple name="" id="" :onchange="ClickFile" style="position:absolute;opacity:0;top:0;left:0;width:100%;height:100%;cursor:pointer;">
        <i class="fa fa-upload fa-lg" aria-hidden="true"></i>
        <span>上传</span>
      </div>
      <div class="btn delete">
        <span>删除</span>
      </div>
      <div class="btn new" @click="clickBtnNewFolder">
        <span>新建文件夹</span>
      </div>
      <div v-if="newFolder">
        <NewFolder @setFalse="setFalse" />
      </div>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { GetMsg } from '@/server'
import { PostUpload } from '@/server'
import { ref } from 'vue'
import NewFolder from './TopPage/NewFolder.vue'

export default {
  name: "PageHeader",
  components: {
    NewFolder
  },
  setup () {
    const store = useStore(),
      newFolder = ref(false)
    const ClickFile = (e) => {
      let file = e.target.files[0]
      var token = sessionStorage.getItem("token")
      var path = store.state.path
      let formdata = new FormData()
      formdata.append('upload', file)
      e.target.files = null
      PostUpload({token:token, file:formdata, path:path})
      GetMsg({token: sessionStorage.getItem("token"), path: store.state.path})
    }
    const clickBtnBack = () => {
      var path = store.state.path,
        token = sessionStorage.getItem("token")
      path = path.split("/")
      if (path.length <= 2) {
        return
      } else {
        path.splice(-2, 1)
      }
      path = path.join("/")
      store.commit("setPath", path)
      GetMsg({token: token, path: path})
    }
    const clickBtnNewFolder = () => {
      newFolder.value = true
    }
    const setFalse = () => {
      newFolder.value = false
    }
    const clickBtnDel = () => {}
    return {
      newFolder,
      ClickFile,
      clickBtnBack,
      clickBtnDel,
      clickBtnNewFolder,
      setFalse
    }
  }
}
</script>
<style lang="scss" scoped>
.page-header {
  width: 100%;
  min-width: 800px;
  height: 40px;
  .go-back {
    float: left;
    width: 30px;
    height: 32px;
    line-height: 32px;
    cursor: pointer;
  }
  .btn {
    float: right;
    overflow: hidden;
    width: 84px;
    height: 32px;
    background-color: #0098EA;
    border-radius: 5px;
    line-height: 32px;
    color: #fff;
    cursor: pointer;
  }
  .upload {
    float: left;
    position: relative;
    i {
      width: 32px;
      height: 100%;
      padding-left: 10px;
    }
    span {
      margin-left: 5px;
      font-size: 14px;
      cursor: pointer;
    }
  }
  .new {
    margin-right: 15px;
    width: 100px;
    text-align: center;
  }
  .delete {
    
    text-align: center;
    cursor: pointer;
  }
}
</style>