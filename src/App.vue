<template>
  <div id="app">
    <site-header/>
    <section :class="open ? 'mobile open' : 'mobile'" v-if="screenWidth < 35 * 16 && screenHeight < 768">
      <div class="container">
        <h3>Mobile version under construction</h3>
        <p>Please for the time being view this website on a large desktop screen for the right experience.</p>
        <button @click="toggle" type="button" name="button">Got it!</button>
      </div>
    </section>
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
  },
  mounted() {
    this.screen()
  },
  data() {
    return {
      screenWidth: 0,
      screenHeight: 0,
      open: true
    }
  },
  methods: {
    screen: function() {
      const w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight
      this.screenWidth = x
      this.screenHeight = y
    },
    toggle: function() {
      this.open = !this.open
    }
  }
}
</script>
<style lang="scss">
@import 'assets/css/style.scss';
section {
  &.mobile {
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    width: 90%;
    padding: 1.5rem 0;
    background-color: var(--color-dark-blue);
    min-height: 0;
    height: auto;
    z-index: -2;
    pointer-events: none;
    opacity: 0;
    transition: all 0.3s;
    &.open {
      z-index: 10;
      pointer-events: all;
      opacity: 1;
    }
    &::before,
    &::after {
      display: none;
    }
    h3 {
      color: var(--color-white-broken);
    }
    p {
      color: var(--color-white-broken);
    }
  }
}
</style>
