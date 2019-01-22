<template lang="html">
  <section id="land">
    <div class="container">
      <h2>Land</h2>
      <p>In Ghana, the most important crop is cocoa. Most farmers mainly farm cocoa, but many of them also have a second crop which they farm.</p>
      <div class="form-holder">
        <form-land />
        <div class="img-holder">
          <img src="images/land/land_small.svg" alt="">
          <p class="landsize">{{ `${animLandsize} Ha` }}</p>
        </div>
      </div>
    </div>
    <leaves />
  </section>
</template>

<script>
import FormLand from '@/components/forms/FormLand.vue'
import Leaves from '@/components/organisms/Leaves.vue'
import format from '@/modules/format.js'
import store from '@/store.js'
export default {
  components: {
    FormLand,
    Leaves
  },
  data() {
    return {
      landsize: 0,
      newLandsize: 0
    }
  },
  computed: {
    animLandsize: function() {
      return this.newLandsize.toFixed(2);
    }
  },
  watch: {
    landsize: function(newValue) {
      TweenLite.to(this.$data, 0.5, { newLandsize: newValue });
    }
  },
  mounted() {
    store.subscribe((mutation, state) => {
      if (
        mutation.type === 'updateFilters' ||
        mutation.type === 'updateFarmers'
      ) {
        const data =
          mutation.type === 'updateFarmers' ? state.farmers : state.filtered
        const result = format.landsize(data)
        this.landsize = result
      }
    })
  }
}
</script>

<style lang="scss">
#land {
  .form-holder {
    form {
      margin-right: 5rem;
    }
    display: flex;
  }
  .landsize {
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
  }
  .img-holder {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      max-width: 100%;
      height: auto;
    }
  }
}

</style>
