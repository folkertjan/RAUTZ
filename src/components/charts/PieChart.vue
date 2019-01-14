<template lang="html">
  <div :id="id">
  </div>
</template>

<script>
import pie from '@/modules/d3/pie.js'
export default {
  props: ['id', 'data'],
  mounted() {
    pie.draw(this.id, this.data)
    window.addEventListener('resize', () => pie.update(this.id, this.data))
  },
  watch: {
    data() {
      pie.update(this.id, this.data)
    }
  }
}
</script>

<style lang="css">
</style>
