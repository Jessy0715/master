<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">About</router-link> |
      <router-link to="/about">Designer</router-link> |

      <router-link to="/mark">Mark</router-link> |
      <router-link to="/amy">Amy</router-link> |
      <router-link to="/john">John</router-link> |
      <router-link to="/debby">Debby</router-link> |
      <router-link to="/fang">Fang</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
