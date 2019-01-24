<template lang="html">
  <div class="input-label-holder">
    <label :for="'select-'+split+uniqueID">{{ text }}</label>
    <select @change="onChange" v-model="value" :data-operator="operator" :data-steps="steps" :name="name" :class="'select-'+name" :id="'select-'+split+uniqueID">
      <option value="any" selected>Any</option>
      <option v-for="(obj, i) in values" :key="i" :value="obj.value">{{obj.label}}</option>
    </select>
  </div>
</template>

<script>
import store from '@/store.js'

export default {
  data() {
    return {
      value: 'any'
    }
  },
  props: ['name', 'text', 'values', 'steps', 'operator', 'split'],
  computed: {
    uniqueID() {
      return this._uid
    }
  },
  methods: {
    onChange: function(e) {
      this.$emit('changed', e)
    }
  },
  mounted() {
    store.subscribe((mutation, state) => {
      if (mutation.type === 'updateFilters' && this.split == '') {
        const filters = state.filters
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
      } else if (this.split == 'split') {
        // split bar
      }
    })
  }
}
</script>

<style lang="css">
</style>
