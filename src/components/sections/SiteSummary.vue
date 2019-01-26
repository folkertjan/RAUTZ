<template lang="html">
  <section id="summary">
    <div class="container">
      <h2>Summary</h2>
      <p>To conclude the comparison, we collected information about the actual amount of money made by the selection of farmer households. Not every farmer could provide an accurate amount, so the pool of households is somewhat smaller than in previous results, so keep this in mind when viewing the chart.</p>
      <div class="flex">
        <div class="flex-item">
          <div class="content">
            <h3>Income per month</h3>
            <p>Because there is data on what share of income farmer households have, we can indicate what they earn each month. We compare this to the LivingIncome benchmark of Ghana, which is a specific amount of money needed by a family of 5 (2 adults and 3 children) for a fairly comfortable life.</p>
            <p>Living income Ghana: $329 per family per month</p>
          </div>
          <div class="income-counter">
            <h4>${{incomeAnim}}</h4>
            <p>per household per month</p>
            <p>(${{isNaN(income / 12 / memsize) ? 0 : (income / 12 / memsize).toFixed(2)}} per family member)</p>
          </div>
          <p>*based on {{total}} farmers, with a mean household size of {{memsize}} members</p>
          <div class="chart light-bg">
            <h3>Income sources</h3>
            <stacked-bar-chart :id="'bar-income-summary'" :data="farmers" :factor="0.8" :perc="0.45" :axisTitles="['Percentage share of income', '']"/>
          </div>
        </div>
        <div class="flex-item">
          <h3>Poverty Propability Index</h3>
          <p>It is based on the answers to 10 questions about a household’s characteristics and asset ownership, which are scored to compute the likelihood that the household is living below the poverty line – or above by only a narrow margin. This score gives insight in the chance of how much a household might earn each day. </p>
          <div class="chart light-bg">
            <h3>Chance for households to earn under or over a specific amount per day</h3>
            <div class="counter">
              <p>Based on <span>{{ all }}</span> farmers</p>
            </div>
            <side-bar-chart :id="'bar-ppi'" :data="ppi" :factor="0.5" :perc="0.5"  :axisTitles="['', 'Change in %']" />
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
      incomePerMemb: 0,
      ppi: [],
      all: 0
    }
  },
  computed: {
    incomeAnim: function() {
      return this.incomePerMemb.toFixed(2)
    }
  },
  watch: {
    income: function(newValue) {
      TweenLite.to(this.$data, 0.5, {
        incomePerMemb: isNaN(newValue) ? 0 : newValue / 12
      })
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
        this.ppi = format.ppi(data)
        this.all = state.filtered.length
        const result = format.income(data)
        this.farmers = format.incomeStack(result.filtered)
        this.income = result.income
        this.total = result.total
        this.memsize = result.memsize
      }
    })
  }
}
</script>

<style lang="scss">
#summary {
  overflow: hidden;
  .counter {
    p {
      margin-bottom: -2rem;
      margin-top: 2rem;
      text-align: center;
    }
  }
}
.flex {
  @media screen and (min-width: 60rem) {
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
}
.chart {
  h3 {
    text-align: left;
  }
}
.income-counter {
  padding: 1.25rem 1.25rem;
  background-color: lightgrey;
  border-radius: 25px;
  display: table;
  h3,
  h4 {
    margin: 0;
  }
  h4 {
    font-size: 2.5rem;
  }
  margin-bottom: 1rem;
  p {
    margin-bottom: 0;
  }
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
