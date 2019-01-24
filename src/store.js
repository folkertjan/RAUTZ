import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import filter from '@/modules/filter.js'

const update = (state, payload, property) => {
  if (payload.element == 'range') {
    state[property][payload.name] = [
      Number(payload.value[0]),
      Number(payload.value[1])
    ]
  } else if (payload.element == 'checkbox') {
    if (!state[property][payload.name]) {
      state[property][payload.name] = []
    }
    let index = state[property][payload.name].indexOf(payload.value)
    if (index > -1) {
      state[property][payload.name].splice(index, 1)
    } else {
      state[property][payload.name].push(payload.value)
    }
  } else if (payload.operator) {
    state[property][payload.name] = {
      operator: payload.operator,
      value: payload.value,
      steps: payload.steps
    }
  } else {
    state[property][payload.name] = payload.value
  }
}

export default new Vuex.Store({
  state: {
    farmers: [],
    filtered: [],
    filters: {
      crops_important1: 10
    },
    total: null,
    ids: [],
    // split: false,
    splitFilters: {
      crops_important1: 10
    },
    split: {
      filtered: [],
      total: null,
      sidebar: false
    },
    sidebar: false
  },
  mutations: {
    updateFarmers(state, payload) {
      state.farmers = payload.value
      state.filtered = filter.all(state.farmers, state.filters)
      state.total = state.filtered.length
      state.split.filtered = state.filtered
      state.split.total = state.split.filtered.length
    },
    resetFilters(state) {
      state.filters = { crops_important1: 10 }
      state.filtered = filter.all(state.farmers, state.filters)
      state.total = state.filtered.length
    },
    updateFilters(state, payload) {
      update(state, payload, 'filters')
      state.filtered = filter.all(state.farmers, state.filters)
      state.total = state.filtered.length
    },
    resetSplitFilters(state) {
      state.splitFilters = { crops_important1: 10 }
      state.split.filtered = filter.all(state.farmers, state.splitFilters)
      state.split.total = state.split.filtered.length
    },
    updateSplitFilters(state, payload) {
      update(state, payload, 'splitFilters')
      state.split.filtered = filter.all(state.farmers, state.splitFilters)
      state.split.total = state.split.filtered.length
      console.log(state.split.total)
    },
    updateTotal(state, payload) {
      state.total = payload.value
    },
    addID(state, payload) {
      state.ids.push(payload.value)
    },
    toggleSidebar(state) {
      state.sidebar = !state.sidebar
    },
    toggleSplitSidebar(state, value = 'none') {
      if (value === 'none') {
        state.split.sidebar = !state.split.sidebar
      } else {
        state.split.sidebar = value
      }
    }
  },
  actions: {},
  getters: {
    getFilter: state => name => state.filters[name]
  }
})
