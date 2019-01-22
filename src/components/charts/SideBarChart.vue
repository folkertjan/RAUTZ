<template lang="html">
  <div :id="id">
  </div>
</template>

<script>
import horizontal from '@/modules/d3/horizontal.js'
export default {
  props: ['id', 'data', 'factor', 'perc'],
  mounted() {
    horizontal.draw(this.id, this.data, this.factor, this.perc)
    window.addEventListener('resize', () => horizontal.update(this.id, this.data, this.factor, this.perc))
  },
  watch: {
    data() {
      horizontal.update(this.id, this.data, this.factor, this.perc)
    }
  }
}
</script>
