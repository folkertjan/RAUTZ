<template lang="html">
  <div :id="id">
  </div>
</template>

<script>
import stack from '@/modules/d3/stacked.js'
export default {
  props: ['id', 'data'],
  mounted() {
    stack.draw(this.id, this.data)
    window.addEventListener('resize', () => stack.update(this.id, this.data))
  },
  watch: {
    data() {
      stack.update(this.id, this.data)
    }
  }
}
</script>

<style lang="css">
</style>
