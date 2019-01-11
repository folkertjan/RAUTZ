<template lang="html">
  <section id="landing">
    <div class="container">
      <h1>RAUTZ</h1>
    </div>
  </section>
</template>

<script>
import store from '@/store.js'
export default {
  computed: {
    total() {
      return store.state.total
    }
  }
}
</script>

<style lang="scss" scoped>
#landing {
  display: flex;
  h1 {
    font-size: 3rem;
    text-align: center;
    margin: 0;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;
  }
}
</style>
