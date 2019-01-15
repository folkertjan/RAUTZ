<template lang="html">
  <section id="landing">
    <div class="container">
      <h1>RAUTZ</h1>
      <p id="loader">Loading...</p>
      <p id="loaded">Finished loading</p>
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

<style lang="scss" >
#loader, #loaded {
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease-out;
  color: goldenrod;
}
#loader {
  height: 0;
  padding: 0;
  margin: 0;
}
#loaded {
  opacity: 1;
  color: white;
}
.loading {
  #loader {
    opacity: 1;
    color: white;
  }
  #loaded {
    opacity: 0;
    color: goldenrod;
  }
}
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
