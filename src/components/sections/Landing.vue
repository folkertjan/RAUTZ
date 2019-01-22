<template lang="html">
  <section id="landing">
    <div class="container">
      <h1>RAUTZ</h1>
      <p id="loader">Loading...</p>
      <p id="loaded">Finished loading</p>
      <p>The cocoa farmer’s in Ghana make their living off of growing and selling their cocoa crops. With this, they are able to support their household, provide an education for themselves or their children, and afford a decent living situation. However, lots of farmers also try to make some extra money on the side by growing different crops, starting small business’ and sometimes also borrowing money.</p>
      <p>By using this tool you can customize the living situation and standards of a farmer in Ghana.</p>
      <p>By doing this we hope that you can create a clearer view of what the life of a farmer looks like. Use the splitscreen option to compare different farmers and see what kind of influence this has on different aspects of their lifestyle.</p>
    </div>
    <div class="scroll-btn-holder">
      <button @click="scroll" id="scroll-btn" type="button" name="button">scroll down</button>
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
      animation.scroll('/#farmer')
    }
  }
}
</script>

<style lang="scss" >
.scroll-btn-holder {
  position: absolute;
  left: 50%;
  bottom: 5rem;
  transform: translateX(-50%);
}
#scroll-btn {
  background: 0;
  border: 0;
  position: relative;
  &:focus {
    outline: none;
  }
  &:hover {
    color: var(--color-green);
    &::after {
      background-color: var(--color-green);
    }
    &::before {
      border-color: var(--color-green);
    }
  }
  &::before, &::after {
    display: block;
    content: "";
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
  }
  &::before {
    width: 1rem;
    height: 2rem;
    border-radius: 25px;
    border: 1px solid var(--color-dark);
  }
  &::after {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    top: -1.5rem;
    background: var(--color-dark);
    animation: scroll 1.5s ease-out infinite;
  }
}
#loader, #loaded {
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
#landing {
  display: flex;
  h1 {
    font-size: 3rem;
    text-align: center;
    margin: 0;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;
  }
}
</style>
