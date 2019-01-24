<template lang="html">
  <section id="income">
    <div class="container">
      <h2>Income composition</h2>
      <tag text="Result #2" />
      <p>The KIT data provides insight in what makes up a farmers income. We boiled it down to 5 categories which each represent a share of their complete income.</p>
      <p class="alert">You can change your already picked filter choices at any time in the sidebar on the left.</p>
      <div :class="split ? 'split split-holder full-width' : 'split-holder full-width'">
        <div class="chart light-bg center">
          <h3>Income sources</h3>
          <div class="counter">
            <p>Based on <span>{{ total }}</span> farmers <info-popup position="bottom left" :title="`Based on ${total} farmers`" text="Everytime you specify a choice, we will show you how many farmers the data is based on. Keep this in mind when looking at the data, as sometimes the data might be based on a very small selection of farmers, and thus the results might not be reliable." /></p>
          </div>
          <stacked-bar-chart :id="'bar-income'" :data="farmers" :factor="0.8" :perc="0.4" :axisTitles="['Percentage share of income', '']"/>
        </div>
        <div class="chart light-bg center">
          <h3>Income sources</h3>
          <div class="counter">
            <p>Based on <span>{{ splitTotal }}</span> farmers</p>
          </div>
          <stacked-bar-chart :id="'bar-income-split'" :data="splitdata" :factor="0.8" :perc="0.4" :axisTitles="['Percentage share of income', '']"/>
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
import Tag from '@/components/atoms/Tag.vue'
import InfoPopup from '@/components/atoms/InfoPopup.vue'
import Leaves from '@/components/organisms/Leaves.vue'
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
