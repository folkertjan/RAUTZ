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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
