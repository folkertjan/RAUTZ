<template lang="html">
  <section id="landing">
    <div class="container">
      <h1>A cocoa farmer's life in Ghana</h1>
      <div class="scroll-btn-holder">
        <button @click="scroll" id="scroll-btn" type="button" name="button">scroll down to start reading</button>
      </div>
    </div>

    <leaves />
  </section>
</template>

<script>
import store from '@/store.js'
import animation from '@/modules/animation/scroll.js'
import Leaves from '@/components/organisms/Leaves.vue'
export default {
  components: {
    Leaves
  },
  computed: {
    total() {
      return store.state.total
    }
  },
  methods: {
    scroll: function() {
      animation.scroll('/#introduction')
    }
  }
}
</script>

<style lang="scss" >
#landing {
  // background-image: url('/images/background.png');
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position: center;
  display: flex;
  background-color: transparent;
  &::before {
    background-color: var(--color-dark-blue);
  }
  h1 {
    font-size: 3rem;
    text-align: center;
    margin: 0;
    color: var(--color-dark-blue);
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;
  }
  .scroll-btn-holder {
    position: relative;
    // left: 50%;
    // top: calc(50% + 5rem);
    // transform: translateX(-50%);
  }
  #scroll-btn {
    background: 0;
    border: 0;
    position: relative;
    color: var(--color-dark-blue);
    font-weight: 700;
    &:focus {
      outline: none;
    }
    &:hover {
      color: var(--color-dark-blue);
      &::after {
        background-color: var(--color-dark-blue);
      }
      &::before {
        border-color: var(--color-dark-blue);
      }
    }
    &::before,
    &::after {
      display: none;
      content: '';
      position: absolute;
      top: -3rem;
      left: 50%;
      transform: translateX(-50%);
    }
    &::before {
      width: 1.5rem;
      height: 3rem;
      border-radius: 25px;
      border: 2px solid var(--color-dark-blue);
    }
    &::after {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      top: -2.5rem;
      background: var(--color-dark-blue);
      animation: scroll 1.5s ease-out infinite;
    }
  }
  #loader,
  #loaded {
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease-out;
    color: var(--color-gold);
  }
  #loader {
    height: 0;
    padding: 0;
    margin: 0;
  }
  #loaded {
    opacity: 1;
    color: var(--color-green);
  }
  .loading {
    #loader {
      opacity: 1;
      color: white;
    }
    #loaded {
      opacity: 0;
      color: goldenrod;
    }
  }
}
</style>
