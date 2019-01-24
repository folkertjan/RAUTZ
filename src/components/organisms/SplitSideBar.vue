<template lang="html">
  <div class="sidebar-holder" :class="open ? 'open' : ''">
    <div id="split-sidebar">
      <button @click="toggle" class="sidebar-close" type="button" name="button">close</button>
      <div class="form-holder">
        <h2>Compare</h2>
        <p>Edit selection of comparison graphs</p>
        <form-split />
      </div>
    </div>
  </div>

</template>

<script>
import store from '@/store.js'
import FormSplit from '@/components/forms/FormSplit.vue'
export default {
  components: {
    FormSplit
  },
  computed: {
    open() {
      return store.state.split.sidebar
    }
  },
  methods: {
    toggle: function() {
      store.commit('toggleSplitSidebar', false)
    }
  }
}
</script>

<style lang="scss">
#split-sidebar {
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
  .sidebar-close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.75rem;
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
  #split-sidebar {
    transform: translateX(-20rem);
  }
}
</style>
