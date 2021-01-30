<template>
  <Header/>
  <SideBar/>
  <PageBoard/>
</template>

<script>
import Header from '@/components/Header.vue'
import SideBar from '@/components/SideBar.vue'
import PageBoard from '@/components/PageBoard.vue'

export default {
  name: 'HomePage',
  components: {
    Header,
    SideBar,
    PageBoard
  }
}
</script>
