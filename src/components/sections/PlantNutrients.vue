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
            <p>Based on <span>{{ splitTotal }}</span> farmers</p>
          </div>
          <side-bar-chart :id="'bar-nutrients-split'" :data="splitdata" :factor="0.5" :perc="0.5"/>
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
import SideBarChart from '@/components/charts/SideBarChart.vue'
import Leaves from '@/components/organisms/Leaves.vue'
import FormSplit from '@/components/forms/FormSplit.vue'
import format from '@/modules/format.js'
export default {
  components: {
    FormSplit,
    SideBarChart,
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
        this.farmers = format.nutrients(data)
        if (this.splitdata.length === 0) {
          this.splitdata = this.farmers
        }
      }
    })
    store.subscribe((mutation, state) => {
      if (mutation.type === 'updateSplitFilters') {
        const data = state.split.filtered
        this.splitdata = format.nutrients(data)
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
