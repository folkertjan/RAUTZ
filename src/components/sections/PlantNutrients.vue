<template lang="html">
  <section id="plant-nutrients">
    <div class="container">
      <h2>Plant nutrients & pesticides</h2>
      <div :class="split ? 'split split-holder' : 'split-holder'">
        <div class="content">
          <p>The use of plant nutrients (fertilizer) and pesticides can have an effect on how well and fast  a crop grows. However, the percentage of farmers choosing to use these products can differ, based on some of the farmers’ characteristics, such as education level and certification status. Play around with these settings in the sidebar to see the effects.</p>
        </div>
        <div class="chart center">
          <div class="counter">
            <p>Based on <span>{{ total }}</span> farmers</p>
          </div>
          <side-bar-chart :id="'bar-nutrients'" :data="farmers" :factor="0.5" :perc="0.5"/>
        </div>
        <div class="chart center">
          <div class="counter">
            <p>Based on <span>{{ total }}</span> farmers</p>
          </div>
          <side-bar-chart :id="'bar-nutrients-split'" :data="splitdata" :factor="0.5" :perc="0.5"/>
        </div>
      </div>
      <button class="btn splitbtn" @click="toggleSplit">{{split ? 'Return' : 'Compare'}}</button>
    </div>
    <leaves />
  </section>
</template>

<script>
import store from '@/store.js'
import SideBarChart from '@/components/charts/SideBarChart.vue'
import Leaves from '@/components/organisms/Leaves.vue'
// import BarChart from '@/components/charts/BarChart.vue'
import format from '@/modules/format.js'
export default {
  components: {
    // BarChart
    SideBarChart,
    Leaves
  },
  data() {
    return {
      farmers: [],
      split: false,
      splitdata: [],
    }
  },
  computed: {
    total() {
      return store.state.total
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
        this.farmers = format.nutrients(data)
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
