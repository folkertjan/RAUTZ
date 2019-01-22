<template lang="html">
  <header id="nav" :class="open ? 'open' : ''">
    <button @click="toggleNav" id="nav-button" type="button" name="button">{{open ? 'close' : 'menu'}}</button>
    <nav>
      <ul>
        <li><a @click="scroll" href="#landing">Top of page</a></li>
        <li><a @click="scroll" href="#farmer">Farmer</a></li>
        <li><a @click="scroll" href="#land">Land</a></li>
        <li><a @click="scroll" href="#plant-nutrients">Plant nutrients & pesticides</a></li>
        <li><a @click="scroll" href="#income">Income</a></li>
        <li><a @click="scroll" href="#food-security">Food security</a></li>
        <li><a @click="scroll" href="#summary">Summary</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import animation from '@/modules/animation/scroll.js'
export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    scroll: function(e) {
      e.preventDefault()
      animation.scroll(e.target.href)
    },
    toggleNav: function() {
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  display: flex;
  align-items: stretch;
  #nav-button {
    padding: 0 1rem;
    border: 0;
    white-space: nowrap;
    color: var(--color-gold);
    padding: 0;
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    letter-spacing: 0;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    background: transparent;
    min-height: 40px;
    width: 72px;
    min-width: 72px;
    overflow: hidden;
    font-weight: 700;
    transition: all 0.3s;
    padding-bottom: 0.5rem;
    &:focus {
      outline: none;
    }
    &::after, &::before {
      display: block;
      content: "";
      width: 35px;
      height: 2px;
      background-color: var(--color-gold);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, calc(-50% - 6px));
      transition: all 0.3s;
    }
    &::after {
      transform: translate(-50%, -50%);
    }
    &:hover {
      color: var(--color-grey);
      &::before, &::after {
        background-color: var(--color-grey);
      }
    }
  }
  nav {
    height: 3.3rem;
    display: flex;
    align-items: center;
    background-color: lightgrey;
    transition: all 0.5s;
    max-width: 0;
    overflow: hidden;
    pointer-events: none;
    padding: 0;
    ul {
      display: flex;
      list-style-type: none;
      padding: 0 1rem;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
      li {
        white-space: nowrap;
        padding: 1rem 0.75rem;
      }
    }
    a {
      font-size: 1rem;
      text-decoration: none;
      transition: all 0.3s;
      &.router-link-exact-active {
        text-decoration: underline;
      }
      &:hover {
        color: var(--color-white-broken);
      }
    }
  }
  &.open {
    #nav-button {
      background-color: var(--color-grey);
      color: var(--color-dark);
      &::before, &::after {
        width: 20px;
        background-color: var(--color-dark);
      }
      &::before {
        transform: translate(-50%, calc(-50% - 5px)) rotate(-45deg);
      }
      &::after {
        transform: translate(-50%, calc(-50% - 5px)) rotate(45deg);
      }
    }
    nav {
      pointer-events: all;
      max-width: 100%;
    }
  }
}
</style>
