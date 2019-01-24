<template lang="html">
  <div :id="id" class="svg-holder bar">
  </div>
</template>

<script>
import stack from '@/modules/d3/stacked.js'
export default {
  props: ['id', 'data', 'factor', 'perc', 'axisTitles'],
  mounted() {
    stack.draw(this.id, this.data, this.factor, this.perc, this.axisTitles)
    window.addEventListener('resize', () =>
      stack.update(this.id, this.data, this.factor, this.perc)
    )
  },
  watch: {
    data() {
      stack.update(this.id, this.data, this.factor, this.perc)
    },
    perc() {
      stack.update(this.id, this.data, this.factor, this.perc)
    }
  }
}
</script>

<style lang="scss">
</style>
