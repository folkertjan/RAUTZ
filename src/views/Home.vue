<template>
  <main id="main" :class="'home' + (loading ? ' loading' : '')">
    <background />
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
    }
  },
  mounted() {
    this.init()
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
