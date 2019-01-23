<template lang="html">
  <section id="food-security">
    <div class="container">
      <h2>Food security</h2>
      <div class="content">
        <p>Foodsecurity is defined by how many meals a family can securely have during every month of the year. While most families are able to reach the goal of 3 meals a day, during the warmer months of the year this can sometimes fluctuate because of failed crops during drought.</p>
      </div>
      <div :class="split ? 'split split-holder full-width' : 'split-holder full-width'">

        <div class="chart">
          <div class="counter">
            <p>Based on <span>{{ total }}</span> farmers</p>
          </div>
          <stacked-bar-chart :id="'bar-foodsec'" :data="farmers" :factor="0.6" :perc="size" :axisTitles="['Percentage share of meals per day', '']"/>
        </div>
        <div class="chart">
          <div class="counter">
            <p>Based on <span>{{ splitTotal }}</span> farmers</p>
          </div>
          <stacked-bar-chart :id="'bar-foodsec-split'" :data="splitdata" :factor="0.6" :perc="0.5" :axisTitles="['Percentage share of meals per day', '']"/>
          <button class="btn filter-btn" @click="toggleEdit">Edit selection<div></div><div></div></button>
        </div>
      </div>
      <button class="btn splitbtn" @click="toggleSplit">{{split ? 'Return' : 'Compare'}}</button>
    </div>
    </div>
    <leaves />
  </section>
</template>

<script>
import store from '@/store.js'
import StackedBarChart from '@/components/charts/StackedBarChart.vue'
import Leaves from '@/components/organisms/Leaves.vue'
import format from '@/modules/format.js'
export default {
  components: {
    // PieChart
    StackedBarChart,
    Leaves
  },
  data() {
    return {
      farmers: [],
      split: false,
      splitdata: [],
      size: 0.6
    }
  },
  computed: {
    total() {
      return store.state.total
    },
    splitTotal() {
      return store.state.split.total
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
        if (this.splitdata.length === 0) {
          this.splitdata = this.farmers
        }
      }
    })
    store.subscribe((mutation, state) => {
      if (mutation.type === 'updateSplitFilters') {
        const data = state.split.filtered
        this.splitdata = format.foodsecStack(data)
      }
    })
  },
  methods: {
    toggleSplit: function() {
      this.split = !this.split
      this.size = this.split ? 0.5 : 0.6
    },
    toggleEdit: function() {
      store.commit('toggleSplitSidebar')
    }
  }
}
</script>

<style lang="scss">
</style>
