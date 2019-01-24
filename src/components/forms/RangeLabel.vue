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
  }
}
</script>
