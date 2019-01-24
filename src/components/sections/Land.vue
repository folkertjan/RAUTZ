<template lang="html">
  <section id="land">
    <div class="container">
      <h2>Land composition</h2>
      <tag text="Filter options #2"/>
      <p>Different farmers have different plots of land varying in size, this can have an impact on their production and livelihood.</p>
      <p>In Ghana, the most important crop is cocoa, but many of them also produce a secondary crop.</p>
      <p>Use the dropdown menu to select the second most important crop and the slider to adjust the size of the land.</p>
      <div class="form-holder">
        <form-land />
        <div class="img-holder">
          <transition-group name="fade">
            <img :key="1" v-if="landsize <= 7" src="images/land/land_small.svg" alt="">
            <img :key="2" v-if="landsize > 7 && landsize <= 14" src="images/land/land_large.svg" alt="">
            <img :key="3" v-if="landsize > 14" src="images/land/land_medium.svg" alt="">
          </transition-group>
          <p class="landsize">Median landsisze: <span>{{ animLandsize }}</span> Ha</p>
          <p>based on {{total}} farmers <info-popup :title="`Based on ${total} farmers`" text="Everytime you specify a choice, we will show you how many farmers the data is based on. Keep this in mind when looking at the data, as sometimes the data might be based on a very small selection of farmers, and thus the results might not be reliable." /></p>
        </div>
      </div>
    </div>
    <leaves />
  </section>
</template>

<script>
import FormLand from '@/components/forms/FormLand.vue'
import Leaves from '@/components/organisms/Leaves.vue'
import Tag from '@/components/atoms/Tag.vue'
import InfoPopup from '@/components/atoms/InfoPopup.vue'
import format from '@/modules/format.js'
import store from '@/store.js'
export default {
  components: {
    FormLand,
    Leaves,
    Tag,
    InfoPopup
  },
  data() {
    return {
      landsize: 0,
      newLandsize: 0
    }
  },
  computed: {
    animLandsize() {
      return this.newLandsize.toFixed(2)
    },
    total() {
      return store.state.total
    }
  },
  watch: {
    landsize: function(newValue) {
      TweenLite.to(this.$data, 0.5, { newLandsize: newValue })
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
    span {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
  .img-holder {
    min-height: 60vh;
    width: 100%;
    position: relative;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
      position: absolute;
      bottom: -2rem;
      left: 50%;
      transform: translateX(-50%);
      &:last-of-type {
        bottom: 0;
      }
    }
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    width: auto;
  }
}
</style>
