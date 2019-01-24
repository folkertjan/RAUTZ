<template lang="html">
  <section id="introduction">
    <div class="container">
      <h2>Introduction</h2>
      <p>Cocoa is the essential ingredient in many of the world's most loved products. It's production mainly takes place in Ghana and Cote d’Ivoire. But how much do we actually know about this sector, and the lives of the farmers producing it?</p>
      <p>In 2016, the Royal Tropical Institute (KIT) initiated a study into the lives of approximately 3000 randomly selected farmer households in Ghana and Cote d'Ivoire. This resulted in a dataset which can help demystify the cocoa sector in these countries.</p>
      <p>This interactive website aims to provide visitors with the tools to explore this data themselves. By providing you with multiple filter options and comparative functions you can see what influences a farmers income and food security.</p>
      <p>For demonstration purposes we decided to focus on the data from Ghana, which provided us with 1560 different households to explore.</p>
    </div>
    <leaves />
  </section>
</template>

<script>
import Leaves from '@/components/organisms/Leaves.vue'
export default {
  components: {
    Leaves
  }
}
</script>

<style lang="scss" >
#introduction {
  // background-color: var(--color-dark-blue);
  &::before {
    // background-color: var(--color-dark-blue);
  }
}
</style>
