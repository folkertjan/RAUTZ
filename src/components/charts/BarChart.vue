<template lang="html">
  <div :id="id" class="svg-holder">
  </div>
</template>

<script>
import bar from '@/modules/d3/bar.js'
export default {
  props: ['id', 'data'],
  mounted() {
    bar.draw(this.id, this.data)
    window.addEventListener('resize', () => bar.update(this.id, this.data))
  },
  watch: {
    data() {
      bar.update(this.id, this.data)
    }
  }
}
</script>

<style lang="css">
</style>
