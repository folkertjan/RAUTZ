import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import filter from '@/modules/filter.js'

export default new Vuex.Store({
  state: {
    farmers: [],
    filtered: [],
    filters: {},
    total: null,
    ids: []
  },
  mutations: {
    updateFarmers(state, payload) {
      state.farmers = payload.value
      state.total = payload.value.length
    },
    updateFilters(state, payload) {
      if (payload.operator) {
        state.filters[payload.name] = {
          operator: payload.operator,
          value: payload.value,
          steps: payload.steps
        }
      } else {
        state.filters[payload.name] = payload.value
      }
      state.filtered = filter.all(state.farmers, state.filters)
      state.total = state.filtered.length
      console.log(state.total)
    },
    updateTotal(state, payload) {
      state.total = payload.value
    },
    addID(state, payload) {
      state.ids.push(payload.value)
    }
  },
  actions: {},
  getters: {
    getFilter: state => name => state.filters[name]
  }
})
