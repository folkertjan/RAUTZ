<template lang="html">
  <section id="income">
    <div class="container">
      <h2>Income</h2>
      <div :class="split ? 'split split-holder' : 'split-holder'">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div class="chart">
          <stacked-bar-chart :id="'bar-income'" :data="farmers" :factor="1.2" :perc="0.475"/>
        </div>
        <div class="chart">
          <stacked-bar-chart :id="'bar-income-split'" :data="splitdata" :factor="1.2" :perc="0.475"/>
        </div>
      </div>
      <button class="btn" @click="toggleSplit">split</button>
    </div>
  </section>
</template>

<script>
import store from '@/store.js'
// import PieChart from '@/components/charts/PieChart.vue'
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
      splitdata: []
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
        this.farmers = format.incomeStack(data)
      }
    })
  },
  methods: {
    toggleSplit: function() {
      store.commit('toggleSplit')
      this.splitdata = this.split ? [] : this.farmers
      this.split = !this.split
    }
  }
}
</script>

<style lang="scss">
</style>
