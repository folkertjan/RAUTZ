<template lang="html">
  <section id="food-security">
    <div class="container">
      <h2>Food security</h2>
      <tag text="Result #3" />
      <div class="content">
        <p>Food security is defined by how many meals a family can securely have during every month of the year. While most families are able to reach the goal of 3 meals a day, during the warmer months of the year this can sometimes fluctuate.</p>
      </div>
      <div :class="split ? 'split split-holder full-width' : 'split-holder full-width'">

        <div class="chart">
          <h3>Meals per day for each month of the year</h3>
          <div class="counter">
            <p>Based on <span>{{ total }}</span> farmers <info-popup position="bottom center" :title="`Based on ${total} farmers`" text="Everytime you specify a choice, we will show you how many farmers the data is based on. Keep this in mind when looking at the data, as sometimes the data might be based on a very small selection of farmers, and thus the results might not be reliable." /></p>
          </div>
          <stacked-bar-chart :id="'bar-foodsec'" :data="farmers" :factor="0.6" :perc="size" :axisTitles="['Distribution within selection', '']"/>
        </div>
        <div class="chart">
          <h3>Meals per day for each month of the year</h3>
          <div class="counter">
            <p>Based on <span>{{ splitTotal }}</span> farmers</p>
          </div>
          <stacked-bar-chart :id="'bar-foodsec-split'" :data="splitdata" :factor="0.6" :perc="0.5" :axisTitles="['Distribution within selection', '']"/>
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
import Tag from '@/components/atoms/Tag.vue'
import InfoPopup from '@/components/atoms/InfoPopup.vue'
import format from '@/modules/format.js'
export default {
  components: {
    // PieChart
    StackedBarChart,
    Leaves,
    Tag,
    InfoPopup
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

<style lang="scss" scoped>
.chart {
  align-items: flex-start;
}
</style>
