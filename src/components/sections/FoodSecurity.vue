<template lang="html">
  <section id="food-security">
    <div class="container">
      <h2>Food security</h2>
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div :class="split ? 'split split-holder full-width' : 'split-holder full-width'">

        <div class="chart">
          <stacked-bar-chart :id="'bar-foodsec'" :data="farmers" :factor="0.55" :perc="size"/>
        </div>
        <div class="chart">
          <stacked-bar-chart :id="'bar-foodsec-split'" :data="splitdata" :factor="0.55" :perc="0.475"/>
        </div>
      </div>
      <button class="btn" @click="toggleSplit">split</button>
    </div>
    </div>
  </section>
</template>

<script>
import store from '@/store.js'
import StackedBarChart from '@/components/charts/StackedBarChart.vue'
import format from '@/modules/format.js'
export default {
  components: {
    // PieChart
    StackedBarChart
  },
  data() {
    return {
      farmers: [],
      split: false,
      splitdata: [],
      size: 1
    }
  },
  mounted() {
    store.subscribe((mutation, state) => {
      if (
        mutation.type === 'updateFilters' ||
        mutation.type === 'updateFarmers'
      ) {
        const data =
          mutation.type === 'updateFarmers' ? state.farmers : state.filtered
        this.farmers = format.foodsecStack(data)
      }
    })
  },
  methods: {
    toggleSplit: function() {
      store.commit('toggleSplit')
      this.splitdata = this.split ? [] : this.farmers
      this.split = !this.split
      this.size = this.split ? 0.45 : 1
    }
  }
}
</script>

<style lang="scss">
</style>
