<template lang="html">
  <div class="sidebar-holder" :class="open ? 'open' : ''">
    <button id="toggle" @click="toggle">{{open ? 'close sidebar' : 'open sidebar'}}</button>
    <div id="counter">
      <p>Farmers in selection: {{ total }}</p>
    </div>
    <div id="sidebar">
      <div class="form-holder">
        <form-farmer />
        <form-land />
      </div>
    </div>
  </div>

</template>

<script>
import store from '@/store.js'
import FormFarmer from '@/components/forms/FormFarmer.vue'
import FormLand from '@/components/forms/FormLand.vue'
export default {
  components: {
    FormFarmer,
    FormLand
  },
  computed: {
    total() {
      return store.state.total
    }
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle: function() {
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss">
#sidebar {
  width: 23rem;
  padding: 3rem 1rem;
  position: fixed;
  right: -23rem;
  top: 0;
  height: 100vh;
  background-color: lightgrey;
  transition: all 0.3s ease-out;
  overflow-y: scroll;
  z-index: 2;
  form {
    fieldset {
      margin-left: auto;
      margin-right: auto;
    }
  }
}
.open {
  #sidebar,
  #toggle,
  #counter {
    transform: translateX(-23rem);
  }
}
#toggle {
  z-index: 2;
  position: fixed;
  top: 3rem;
  right: 1rem;
  transition: all 0.3s ease-out;
}
#counter {
  z-index: 2;
  color: #42b983;
  position: fixed;
  top: 1rem;
  right: 1rem;
  transition: all 0.3s ease-out;
}
</style>
