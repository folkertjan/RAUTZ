<template lang="html">
  <div class="sidebar-holder" :class="open ? 'open' : ''">
    <button id="toggle" @click="toggle">{{open ? 'close sidebar' : 'open sidebar'}}</button>
    <div id="counter">
      <p>Farmers in selection: <span>{{ total }}</span></p>
    </div>
    <div id="sidebar" :class="split ? 'split' : ''">
      <nav>
        <ul>
          <li><button type="button" @click="toggleSplit" name="button">All</button></li>
          <li><button type="button" @click="toggleSplit" name="button">Split</button></li>
        </ul>
      </nav>
      <div class="form-holder main">
        <h2>Main</h2>
        <form-farmer />
        <form-land />
      </div>
      <div class="form-holder secondary">
        <h2>Secondary</h2>
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
      open: false,
      split: false
    }
  },
  methods: {
    toggle: function() {
      this.open = !this.open
    },
    toggleSplit: function() {
      this.split = !this.split
    }
  }
}
</script>

<style lang="scss">
#sidebar {
  width: 23rem;
  position: fixed;
  right: -23rem;
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
    padding: 3rem 1rem;
    min-width: 100%;
    transition: all 0.5s;
    &.secondary {
      background: goldenrod;
    }
  }
  nav {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    ul {
      width: 100%;
      display: flex;
      list-style: none;
      li {
        flex-grow: 1;
        button {
          width: 100%;
        }
      }
    }
  }
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
  top: 5rem;
  right: 1rem;
  transition: all 0.3s ease-out;
}
#counter {
  z-index: 2;
  position: fixed;
  top: 1rem;
  right: 1rem;
  transition: all 0.3s ease-out;
  span {
    font-size: 2rem;
    font-weight: bold;
  }
}
</style>
