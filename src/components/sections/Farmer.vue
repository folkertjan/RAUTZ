<template lang="html">
  <section id="farmer">
    <div class="container">
      <h2>Farmer</h2>
      <tag text="Filter options #1"/>
      <p>The KIT dataset provided us with a lot of different information about the farmer households. We selected a few to explore by filtering their characteristics. By default all households are selected, but by filtering options you can see the pool of households shrink or grow.</p>
      <div class="form-holder">
        <form-farmer />
      </div>
    </div>
    <leaves />
  </section>
</template>

<script>
import FormFarmer from '@/components/forms/FormFarmer.vue'
import Leaves from '@/components/organisms/Leaves.vue'
import Tag from '@/components/atoms/Tag.vue'
export default {
  components: {
    FormFarmer,
    Leaves,
    Tag
  }
}
</script>
