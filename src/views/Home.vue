<template>
  <main id="main" :class="'home' + (loading ? ' loading' : '')">
    <background />
    <!-- <section class="" v-if="screenWidth < 1080 && screenHeight < 768">
      <div class="container">
        <h3 style="color: white">This is a desktop site</h3>
        <p style="color: white">Please view this website on a monitor</p>
      </div>
    </section> -->
    <div class="section-holder" >
      <landing />
      <introduction />
      <farmer />
      <land />
      <plant-nutrients />
      <income />
      <food-security />
      <site-summary />
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import store from '@/store.js'
import format from '@/modules/format.js'
import Background from '@/components/organisms/Background.vue'
import Landing from '@/components/sections/Landing.vue'
import Introduction from '@/components/sections/Introduction.vue'
import Farmer from '@/components/sections/Farmer.vue'
import Land from '@/components/sections/Land.vue'
import Income from '@/components/sections/Income.vue'
import PlantNutrients from '@/components/sections/PlantNutrients.vue'
import FoodSecurity from '@/components/sections/FoodSecurity.vue'
import SiteSummary from '@/components/sections/SiteSummary.vue'

export default {
  name: 'home',
  components: {
    Background,
    Landing,
    Introduction,
    Farmer,
    Land,
    PlantNutrients,
    Income,
    FoodSecurity,
    SiteSummary
  },
  data() {
    return {
      loading: true,
      sidebar: false,
      screenWidth: 1920,
      screenHeight: 1080
    }
  },
  methods: {
    init: function() {
      this.loading = true
      const file = '/data/data_good.csv'
      format.data(file).then(data => {
        // .map(farmer => farmer.all_land_cultivated_ha)
        // .filter(value => value ? true : false)
        store.commit({
          type: 'updateFarmers',
          value: data
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
    this.init()
    this.screen()
    store.subscribe((mutation, state) => {
      if (mutation.type === 'toggleSidebar') {
        this.sidebar = state.sidebar
      }
    })
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
main {
  transition: all 0.3s ease-out;
}
</style>
