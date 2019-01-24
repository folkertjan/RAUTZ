<template lang="html">
  <h3 class="tag">{{text}}</h3>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="scss">
.tag {
  display: table;
  padding: 0.5rem 0.75rem;
  background-color: var(--color-grey);
  color: var(--color-dark);
  font-size: 1.25rem;
  font-weight: 400;
}
</style>
