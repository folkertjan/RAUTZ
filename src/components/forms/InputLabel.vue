<template lang="html">
  <div :class="type == 'radio' ? 'input-label-holder radio' : 'input-label-holder'">
    <label v-if="type != 'radio'" :for="'input-'+split+uniqueID">{{ text }}</label>
    <input @change="onChange" :type="type" :name="name" :id="'input-'+split+uniqueID" :class="'input-'+name" :value="value" :checked="checked">
    <label v-if="type == 'radio'" :for="'input-'+split+uniqueID">{{ text }}</label>
  </div>
</template>

<script>
import store from '@/store.js'

export default {
  props: ['name', 'text', 'value', 'type', 'checked', 'split'],
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
      if (mutation.type === 'updateFilters' && !this.split) {
        const filters = state.filters
        if (filters[this.name] == this.value) {
          document.querySelector('#input-' + this.uniqueID).checked = true
        }
      } else if (this.split) {
        console.log('splitbar')
      }
    })
  }
}
</script>

<style lang="css">
</style>
