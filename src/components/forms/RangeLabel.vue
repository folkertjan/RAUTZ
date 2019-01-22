<template lang="html">
  <div class="input-label-holder range">
    <label :for="'input-'+uniqueID">{{ text }}</label>
    <p>Currently selects everything between: {{`${sort()[0]} & ${sort()[1]}`}}</p>
    <div class="range-holder">
      <input @change="onChange" class="min" type="range" :name="name" :id="'input-'+uniqueID" :class="'input-'+name" :min="min" :value="minValue" :max="max" :step="step">
      <input @change="onChange" class="max" type="range" :name="name" :id="'input-'+uniqueID" :class="'input-'+name" :min="min" :value="maxValue" :max="max" :step="step">
    </div>
  </div>
</template>

<script>
import store from '@/store.js'

export default {
  props: ['name', 'text', 'min', 'max', 'step'],
  data() {
    return {
      minValue: this.min,
      maxValue: this.max
    }
  },
  computed: {
    uniqueID() {
      return this._uid
    }
  },
  methods: {
    onChange: function(e) {
      if (e.target.classList.contains('min')) {
        this.minValue = e.target.value
      } else {
        this.maxValue = e.target.value
      }
      this.$emit('changed', {
        value: [this.minValue, this.maxValue],
        name: e.target.name
      })
    },
    sort: function() {
      return [this.minValue, this.maxValue].sort((a, b) => a - b)
    }
  },
  mounted() {
    // store.subscribe((mutation, state) => {
    //   if (mutation.type === 'updateFilters' && !this.split) {
    //     const filters = state.filters
    //     const element = document.querySelector('#input-' + this.uniqueID)
    //     if (typeof(filters[this.name]) === 'object') {
    //       if (filters[this.name].indexOf(this.value) > -1) {
    //         element.checked = true
    //       } else {
    //         element.checked = false
    //       }
    //     } else if (filters[this.name] == this.value) {
    //       element.checked = true
    //     }
    //   } else if (this.split) {
    //     // split bar
    //   }
    // })
  }
}
</script>
