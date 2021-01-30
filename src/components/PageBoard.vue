<template>
  <div class="pageboard">
    <page-header/>
    <FileTitle/>
    <ul>
      <li v-for="item of data" :key="item.Name">
        <FileItem :item="item"/>
      </li>
    </ul>
  </div>
</template>
<script>
import { GetMsg } from '@/server'
import { useStore } from 'vuex'

import { computed, onMounted } from 'vue'

import FileItem from './FileItem.vue'
import FileTitle from './FileTitle.vue'
import PageHeader from './PageHeader.vue'
export default {
  name: 'PageBoard',
  components: {
    FileItem,
    FileTitle,
    PageHeader
  },
  setup () {
    const store = useStore()
    onMounted(() => {
      var path = "/"
      GetMsg({token: sessionStorage.getItem("token"), path: path})
    })
    return {
      data: computed(() => store.state.item)
    }
  }
}
</script>
<style lang="scss" scoped>
.pageboard {
  height: 100%;
  padding: 80px 20px 20px 220px;
}
</style>