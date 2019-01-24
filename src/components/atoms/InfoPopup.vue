<template lang="html">
  <div class="info-popup">
    <div :class="(show ? 'show ' : '') + position + ' info-popup-content'">
      <!-- <button @click="toggle" class="info-popup-close" type="button" name="button">Close</button> -->
      <h4>{{title}}</h4>
      <p>{{text}}</p>
    </div>
    <button @mouseover="toggle" @mouseleave="toggle" class="info-popup-button" type="button" name="button">i</button>
  </div>
</template>

<script>
export default {
  props: ['title', 'text', 'position'],
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggle: function() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss">
.info-popup {
  display: inline-block;
  position: relative;
  h4,
  p {
    color: var(--color-dark);
  }
  .info-popup-content {
    width: 25rem;
    position: absolute;
    bottom: 3rem;
    padding: 2rem 1.25rem 1.5rem;
    background-color: var(--color-grey);
    pointer-events: none;
    opacity: 0;
    z-index: -1;
    transition: all 0.3s;
    &::after {
      display: block;
      width: 20px;
      height: 20px;
      position: absolute;
      bottom: -10px;
      left: 4px;
      content: '';
      background-color: var(--color-grey);
      transform: rotate(45deg);
    }
    &.bottom {
      top: 3rem;
      bottom: auto;
      &::after {
        top: -10px;

        bottom: auto;
      }
    }
    &.center {
      left: -12rem;
      &::after {
        right: 11.5rem;
        left: auto;
      }
    }
    &.left {
      left: -24rem;
      &::after {
        right: 4px;
        left: auto;
      }
    }
    &.show {
      opacity: 1;
      z-index: 2;
    }
    h4 {
      font-size: 1.25rem;
      white-space: normal;
    }
    p {
      font-weight: 400;
      font-size: 1rem;
      white-space: normal;
    }
    .info-popup-close {
      position: absolute;
      min-height: 40px;
      padding: 0.5rem;
      display: block;
      top: 0;
      right: 0;
      pointer-events: all;
    }
  }
  .info-popup-button {
    font-weight: 700;
    font-size: 0.875rem;
    padding: 0;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-grey);
    border-radius: 50%;
    color: var(--color-dark);
  }
}
</style>
