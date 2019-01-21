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
    ids: [],
    split: false,
    sidebar: false
  },
  mutations: {
    updateFarmers(state, payload) {
      state.farmers = payload.value
      state.total = payload.value.length
    },
    updateFilters(state, payload) {
      if (payload.element == 'checkbox') {
        if (!state.filters[payload.name]) {
          state.filters[payload.name] = []
        }
        let index = state.filters[payload.name].indexOf(payload.value)
        if (index > -1) {
          state.filters[payload.name].splice(index, 1);
        } else {
          state.filters[payload.name].push(payload.value)
        }
        console.log(state.filters[payload.name].length)
      } else if (payload.operator) {
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
    },
    updateTotal(state, payload) {
      state.total = payload.value
    },
    addID(state, payload) {
      state.ids.push(payload.value)
    },
    toggleSplit(state){
      state.split = !state.split
    },
    toggleSidebar(state){
      state.sidebar = !state.sidebar
    }
  },
  actions: {},
  getters: {
    getFilter: state => name => state.filters[name]
  }
})
