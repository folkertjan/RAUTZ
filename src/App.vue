<template>
  <div id="app">
    <site-header/>
    <router-view/>
    <side-bar />
    <split-side-bar />
  </div>
</template>

<script>
import SiteHeader from '@/components/organisms/SiteHeader.vue'
import SideBar from '@/components/organisms/SideBar.vue'
import SplitSideBar from '@/components/organisms/SplitSideBar.vue'
export default {
  components: {
    SiteHeader,
    SideBar,
    SplitSideBar
  }
}
</script>
<style lang="scss">
@import 'assets/css/style.scss';
</style>
