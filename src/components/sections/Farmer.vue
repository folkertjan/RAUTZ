<template lang="html">
  <section id="farmer">
    <div class="container">
      <h2>Farmer</h2>
      <p>Customize your farmer by filtering through the different categories on this page. Our tool is based on a dataset of 1561 farmers total. By filtering through these categories it will have an effect on the next sections of the site and also on the amount of farmers the information is based on. In the side bar you can view all your current settings and adjust them at any time. </p>
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
export default {
  components: {
    FormFarmer,
    Leaves
  }
}
</script>
