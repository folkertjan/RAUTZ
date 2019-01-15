<template>
  <div id="app">
    <site-header/>
    <router-view/>
    <side-bar />
  </div>
</template>

<script>
import SiteHeader from '@/components/organisms/SiteHeader.vue'
import SideBar from '@/components/organisms/SideBar.vue'
export default {
  components: {
    SiteHeader,
    SideBar
  }
}
</script>
<style lang="scss">
@import 'assets/css/style.scss';
</style>
