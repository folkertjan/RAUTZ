<template lang="html">
  <section id="summary">
    <div class="container">
      <h2>Summary</h2>
      <p>After gaining insight in the last couple of chapters, you can gain insight in how much the farmers actually earn each month. In addition you can get an idea of how much each household might earn each day based on the PPI statistics.</p>
      <div class="flex">
        <div class="flex-item">
          <div class="content">
            <h3>Income per month</h3>
            <p>Because there is data on what share of income farmer households have, we can indicate what they earn each month. We compare this to the Living Income benchmark of Ghana, which is a specific amount of money needed by a family of 5 (2 adults and 3 children) for a fairly comfortable life.</p>
          </div>
          <div class="income-counter">
            <h4>${{incomeAnim}}</h4>
          </div>
          <p>*based on {{total}} farmers, with a mean household size of {{memsize}} members</p>
          <div class="chart light-bg">
            <stacked-bar-chart :id="'bar-income-summary'" :data="farmers" :factor="1.25" :perc="0.3"/>
          </div>
        </div>
        <div class="flex-item">
          <h3>Poverty Propability Index</h3>
          <p>The Poverty Probability Index is a score based on ten questions (such as : What kind of material is used for the walls?). This score gives insight in how much a household might earn each day. The 2011 edition also provides chances for earning over or under a specific amount.</p>
          <div class="chart light-bg"> 
          </div>
        </div>
      </div>
    </div>
    <leaves />
  </section>
</template>

<script>
import TweenLite from 'gsap/TweenLite'
import store from '@/store.js'
import StackedBarChart from '@/components/charts/StackedBarChart.vue'
import SideBarChart from '@/components/charts/SideBarChart.vue'
import Leaves from '@/components/organisms/Leaves.vue'
import format from '@/modules/format.js'

export default {
  components: {
    StackedBarChart,
    SideBarChart,
    Leaves
  },
  data() {
    return {
      farmers: [],
      income: 0,
      total: 0,
      memsize: 0,
      incomePerMemb: 0
    }
  },
  computed: {
    incomeAnim: function() {
      return this.incomePerMemb.toFixed(2);
    }
  },
  watch: {
    income: function(newValue) {
      TweenLite.to(this.$data, 0.5, { incomePerMemb: newValue / this.memsize });
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
        const result = format.income(data)
        this.farmers = format.incomeStack(result.filtered)
        this.income = result.income
        this.total = result.total
        this.memsize = result.memsize
      }
    })
  },
}
</script>

<style lang="scss">
#summary {
  overflow: hidden;
}
.flex {
  display: flex;
  padding: 3rem 0;
  > div {
    width: 50%;
    padding-right: 3rem;
    &:last-of-type {
      padding-left: 3rem;
    }
  }
}
.income-counter {
  padding: 1.25rem 1.25rem;
  background-color: lightgrey;
  border-radius: 25px;
  display: table;
  h3, h4 {
    margin: 0;
  }
  h4 {
    font-size: 2.5rem;
  }
  margin-bottom: 1rem;
  + p {
    margin-bottom: 3rem;
  }
  // justify-content: center;
  // align-items: center;
  // h3, h4 {
  //   margin: 0;
  // }
}
</style>
