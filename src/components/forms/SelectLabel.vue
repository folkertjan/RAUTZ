<template lang="html">
  <div class="input-label-holder">
    <label :for="'select-'+uniqueID">{{ text }}</label>
    <select @change="filter.update" v-model="value" :data-operator="operator" :data-steps="steps" :name="name" :class="'select-'+name" :id="'select-'+uniqueID">
      <option value="any" selected>Any</option>
      <option v-for="(obj, i) in values" :key="i" :value="obj.value">{{obj.label}}</option>
    </select>
  </div>
</template>

<script>
import store from '@/store.js'
import filter from '@/modules/filter.js'

export default {
  data() {
    return {
      filter: filter,
      value: 'any'
    }
  },
  props: ['name', 'text', 'values', 'steps', 'operator'],
  computed: {
    uniqueID() {
      return this._uid
    }
  },
  mounted() {
    store.subscribe((mutation, state) => {
      if (mutation.type === 'updateFilters') {
        const filters = store.state.filters
        if (filters[this.name]) {
          if (typeof filters[this.name] == 'string') {
            if (!this.value) {
              this.value = 'any'
            }
            this.value = filters[this.name]
          } else {
            this.value = filters[this.name].value
          }
        }
      }
    })
  }
}
</script>

<style lang="css">
</style>
