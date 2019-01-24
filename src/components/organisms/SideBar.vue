<template lang="html">
  <div class="sidebar-holder" :class="open ? 'open' : ''">
    <button id="toggle" @click="toggle">{{open ? 'Close' : 'Filters'}}<div class="dot"></div><div class="dot"></div></button>
    <div id="sidebar">
      <button @click="toggle" class="sidebar-close" type="button" name="button">close</button>
      <div class="form-holder main">
        <h2>Main</h2>
        <p>Edit selection of main graphs</p>
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
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle: function() {
      this.open = !this.open
      store.commit('toggleSidebar')
    }
  },
  mounted() {
    const main = document.querySelector('main')
    const section = document.querySelector('#plant-nutrients')
    const toggle = document.querySelector('#toggle')
    main.addEventListener('scroll', function() {
      if (toggle.classList.contains('show')) {
        if (this.scrollTop < section.offsetTop - section.offsetHeight / 2) {
          toggle.classList.remove('show')
        }
      } else {
        if (this.scrollTop > section.offsetTop - section.offsetHeight / 2) {
          toggle.classList.add('show')
        }
      }
    })
  }
}
</script>

<style lang="scss">
#sidebar {
  &::-webkit-scrollbar-track {
    background-color: lightgrey;
  }
  direction: rtl;
  width: 20rem;
  position: fixed;
  left: -20rem;
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
  .info-popup {
    display: none;
  }
  .form-holder {
    direction: ltr;
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
  #sidebar {
    transform: translateX(20rem);
  }
  #toggle {
    transform: translate(20rem, -50%);
    background-color: var(--color-grey);
    border-color: var(--color-grey);
    color: var(--color-dark);
    &::after,
    &::before,
    div {
      background-color: var(--color-dark);
    }
    div {
      transform: translate(-7px, calc(-50% - 14px));
      &:last-of-type {
        transform: translate(2px, calc(-50% - 4px));
      }
    }
  }
}
#toggle {
  width: 80px;
  height: 5rem;
  border-radius: 0px 10px 10px 0px;
  // background-image: url('/images/farmer.svg');
  background-color: var(--color-gold);
  border: 0;
  color: var(--color-white-broken);
  white-space: nowrap;
  overflow: hidden;
  padding: 0;
  z-index: 4;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
  top: 50%;
  transform: translateY(-50%);
  left: -80px;
  transition: all 0.3s ease-out;
  &.show {
    left: 0;
  }
  &::after,
  &::before,
  div {
    width: 40px;
    height: 3px;
    display: block;
    position: absolute;
    background-color: var(--color-white-broken);
    content: '';
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s;
  }
  div {
    z-index: 1;
    background-color: var(--color-white-broken);
    border-radius: 50%;
    height: 8px;
    width: 8px;
    transform: translate(2px, calc(-50% - 14px));
    &:last-of-type {
      transform: translate(-7px, calc(-50% - 4px));
    }
  }
  &::after {
    transform: translate(-50%, calc(-50% - 14px));
  }
  &::before {
    transform: translate(-50%, calc(-50% - 4px));
  }
  &:hover {
    background-color: lightgrey;
    border-color: lightgrey;
    color: var(--color-dark);
    &::after,
    &::before,
    div {
      background-color: var(--color-dark);
    }
  }
}
</style>
