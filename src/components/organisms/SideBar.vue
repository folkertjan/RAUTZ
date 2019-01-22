<template lang="html">
  <div class="sidebar-holder" :class="open ? 'open' : ''">
    <button id="toggle" @click="toggle">{{open ? 'Close filters' : 'Change filters'}}</button>
    <div id="sidebar">
      <div class="form-holder main">
        <h2>Main</h2>
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
import FormSplit from '@/components/forms/FormSplit.vue'
export default {
  components: {
    FormFarmer,
    FormLand,
    FormSplit
  },
  computed: {
    total() {
      return store.state.total
    }
  },
  data() {
    return {
      open: false,
      split: false
    }
  },
  methods: {
    toggle: function() {
      this.open = !this.open
      store.commit('toggleSidebar')
    }
  }
}
</script>

<style lang="scss">
#sidebar {
  width: 20rem;
  position: fixed;
  right: -20rem;
  top: 0;
  height: 100vh;
  background-color: lightgrey;
  transition: all 0.3s ease-out;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 5;
  display: flex;
  &.split {
    .form-holder {
      transform: translateX(-100%);
    }
  }
  .form-holder {
    padding: 3rem 2rem;
    min-width: 100%;
    transition: all 0.5s;
  }
  form {
    .fieldset {
      margin-left: auto;
      margin-right: auto;
    }
    &:last-of-type {
      padding-bottom: 8rem;
    }
  }
}
.open {
  #sidebar,
  #toggle{
    transform: translateX(-20rem);
  }
}
#toggle {
  width: 80px;
  height: 60px;
  border-radius: 10px 0 0 10px;
  background-image: url('/images/farmer.svg');
  background-color: var(--color-grey);
  background-position: center;
  background-size: 40px;
  background-repeat: no-repeat;
  color: transparent;
  white-space: nowrap;
  overflow: hidden;
  padding: 0;
  z-index: 4;
  position: fixed;
  top: 5rem;
  right: 0rem;
  transition: all 0.3s ease-out;
}
</style>
