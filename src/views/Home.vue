<template>
  <div class="home">
    <h1>RAUTZ</h1>
    <p v-if="!farmers" id="loader">{{ loading }}</p>
    <div v-if="farmers" class="form-holder">
      <form-farmer></form-farmer>
    </div>
    <p id="counter">Farmers in the selection: <span>{{ total }}</span></p>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store.js'
import data from '@/modules/format.js'
import FormFarmer from '@/components/forms/FormFarmer.vue'

export default {
  name: 'home',
  components: {
    FormFarmer
  },
  data() {
    return {
      loading: '',
      farmers: null
    }
  },
  computed: {
    total() {
      return store.state.total
    }
  },
  methods: {
    format: function() {
      this.loading = 'Loading...'
      const file = '/data/data.csv'
      data
        .format(file)
        .then(dat => {
            // .map(farmer => farmer.all_land_cultivated_ha)
            // .filter(value => value ? true : false)
          store.commit({
            type: 'updateFarmers',
            value: dat
          })
          this.farmers = true
          this.loading = 'Done.'
          console.log(dat)
        })
    }
  },
  mounted() {
    this.format()
  }
}
</script>

<style scoped lang="scss">
#counter {
  display: flex;
  justify-content: space-between;
  text-align: left;
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 15rem;
}
</style>
