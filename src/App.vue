<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Chord</router-link>
      {{ ' | ' }}
      <router-link to="/scale">Scale</router-link>
    </div>
    <router-view />
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

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 0.5em;
}
a {
  color: #42b983;
}

.chord-settings {
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 8px 4px;
  justify-content: center;

  label {
    justify-self: end;
  }
}
</style>
