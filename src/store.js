import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import filter from '@/modules/filter.js'

export default new Vuex.Store({
  state: {
    farmers: [],
    filtered: [],
    filters: {
      head_gender: '',
      all_land_known_yn: ''
    },
    total: null
  },
  mutations: {
    updateFarmers(state, payload) {
      state.farmers = payload.value
      state.total = payload.value.length
    },
    updateFilters(state, payload) {
      state.filters[payload.name] = payload.value
      state.filtered = filter.all(state.farmers, state.filters)
      state.total = state.filtered.length
    },
    updateTotal(state, payload) {
      state.total = payload.value
    }
  },
  actions: {},
  getters: {
    getFilter: (state) => (name) => state.filters[name]
  }
})
