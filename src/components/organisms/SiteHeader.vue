<template lang="html">
  <header id="nav">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  nav {
    padding: 1rem;
    a {
      font-size: 1rem;
      color: #42b983;
      text-decoration: none;
      &.router-link-exact-active {
        text-decoration: underline;
      }
    }
  }
}
</style>
