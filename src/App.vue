<template>
  <div id="app">
    <site-header/>
    <router-view/>
  </div>
</template>

<script>
import SiteHeader from '@/components/organisms/SiteHeader.vue'
export default {
  components: {
    SiteHeader
  }
}
</script>
<style lang="scss">
@import 'assets/css/style.scss';
</style>
