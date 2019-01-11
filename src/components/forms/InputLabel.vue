<template lang="html">
  <div :class="type == 'radio' ? 'input-label-holder radio' : 'input-label-holder'">
    <label v-if="type != 'radio'" :for="'input-'+uniqueID">{{ text }}</label>
    <input @change="filter.update" :type="type" :name="name" :id="'input-'+uniqueID" :class="'input-'+name" :value="value" :checked="checked">
    <label v-if="type == 'radio'" :for="'input-'+uniqueID">{{ text }}</label>
  </div>
</template>

<script>
import filter from '@/modules/filter.js'
import store from '@/store.js'
import calculations from '@/modules/calculations.js'

export default {
  data() {
    return {
      filter: filter
    }
  },
  props: ['name', 'text', 'value', 'type', 'checked'],
  computed: {
    uniqueID() {
      return this._uid
    }
  },
  mounted() {
    store.subscribe((mutation, state) => {
      if (mutation.type === 'updateFilters') {
        const filters = store.state.filters
        if (filters[this.name] == this.value) {
          document.querySelector('#input-' + this.uniqueID).checked = true
        }
      }
    })
  }
}
</script>

<style lang="css">
</style>
