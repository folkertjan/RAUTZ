<template lang="html">
  <div class="input-label-holder">
    <input @change="filter.update" :type="type" :name="name" :id="name + '_' + text" :value="value" :checked="checked">
    <label :for="name + '_' + text">{{ text }}</label>
  </div>
</template>

<script>
import filter from '@/modules/filter.js'

export default {
  data(){
    return {
      filter: filter
    }
  },
  props: ['name', 'text', 'value', 'type', 'checked']
}
</script>

<style lang="css">
</style>
