<template lang="html">
  <section id="income">
    <div class="container">
      <h2>Income</h2>
      <p>The income of a farmer usually consists out of a few different categories. The biggest part of most farmers’ income comes from the farming of cocoa, but many farmers also get their income from different places. Some of these different ways are secondary crops, small business’ outside of farming and other.</p>
      <div :class="split ? 'split split-holder full-width' : 'split-holder full-width'">
        <div class="chart light-bg center">
          <div class="counter">
            <p>Based on <span>{{ total }}</span> farmers</p>
          </div>
          <stacked-bar-chart :id="'bar-income'" :data="farmers" :factor="0.8" :perc="0.45" :axisTitles="['Percentage share of income', '']"/>
        </div>
        <div class="chart light-bg center">
          <div class="counter">
            <p>Based on <span>{{ splitTotal }}</span> farmers</p>
          </div>
          <stacked-bar-chart :id="'bar-income-split'" :data="splitdata" :factor="0.8" :perc="0.45" :axisTitles="['Percentage share of income', '']"/>
          <button class="btn filter-btn" @click="toggleEdit">Edit selection<div></div><div></div></button>
        </div>
      </div>
      <button class="btn splitbtn" @click="toggleSplit">{{split ? 'Return' : 'Compare'}}</button>
    </div>
    <leaves />
  </section>
</template>

<script>
import store from '@/store.js'
// import PieChart from '@/components/charts/PieChart.vue'
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
      splitdata: []
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
        this.farmers = format.incomeStack(data)
        if (this.splitdata.length === 0) {
          this.splitdata = this.farmers
        }
      }
    })
    store.subscribe((mutation, state) => {
      if (mutation.type === 'updateSplitFilters') {
        const data = state.split.filtered
        this.splitdata = format.incomeStack(data)
      }
    })
  },
  methods: {
    toggleSplit: function() {
      this.split = !this.split
      if (this.split === false) {
        store.commit('toggleSplitSidebar', false)
      }

    },
    toggleEdit: function() {
      store.commit('toggleSplitSidebar')
    }
  }
}
</script>
