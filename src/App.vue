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

p,
label,
select {
  font-size: 16px;
}

.items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > * {
    margin: 0.2em 0.6em;
  }
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:first-child {
    font-size: 0.8rem;
  }
}
</style>
