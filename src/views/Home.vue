<template>
  <main class="home" :class="loading ? 'loading' : ''">
    <section class="" v-if="screenWidth < 1080 && screenHeight < 768">
      <div class="container">
        <h3>This is a desktop site</h3>
      </div>
    </section>
    <div class="section-holder" v-else>
      <side-bar />
      <landing />
      <farmer />
      <land />
      <income />
      <food-diversity />
      <food-security />
      <site-summary />
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import store from '@/store.js'
import data from '@/modules/format.js'
import Landing from '@/components/sections/Landing.vue'
import Farmer from '@/components/sections/Farmer.vue'
import Land from '@/components/sections/Land.vue'
import Income from '@/components/sections/Income.vue'
import FoodDiversity from '@/components/sections/FoodDiversity.vue'
import FoodSecurity from '@/components/sections/FoodSecurity.vue'
import SiteSummary from '@/components/sections/SiteSummary.vue'
import SideBar from '@/components/organisms/SideBar.vue'

export default {
  name: 'home',
  components: {
    Landing,
    Farmer,
    Land,
    Income,
    FoodDiversity,
    FoodSecurity,
    SiteSummary,
    SideBar
  },
  data() {
    return {
      loading: true,
      screenWidth: 1920,
      screenHeight: 1080
    }
  },
  methods: {
    format: function() {
      this.loading = true
      const file = '/data/data.csv'
      data.format(file).then(raw => {
        // .map(farmer => farmer.all_land_cultivated_ha)
        // .filter(value => value ? true : false)
        store.commit({
          type: 'updateFarmers',
          value: raw
        })
        this.loading = false
      })
    },
    screen: function() {
      const w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight
      this.screenWidth = x
      this.screenHeight = y
    }
  },
  mounted() {
    this.format()
    this.screen()
    window.addEventListener('resize', () => {
      this.screen()
    })
  }
}
</script>

<style scoped lang="scss">
h1 {
  padding-left: 1rem;
}
</style>
