<template lang="html">
  <section id="introduction">
    <div class="container">
      <h2>Introduction</h2>
      <p>The cocoa farmer’s in Ghana make their living off of growing and selling their cocoa crops. With this, they are able to support their household, provide an education for themselves or their children, and afford a decent living situation. However, lots of farmers also try to make some extra money on the side by growing different crops, starting small business’ and sometimes also borrowing money.</p>
      <p>By using this tool you can customize the living situation and standards of a farmer in Ghana.</p>
      <p>By doing this we hope that you can create a clearer view of what the life of a farmer looks like. Use the splitscreen option to compare different farmers and see what kind of influence this has on different aspects of their lifestyle.</p>
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
