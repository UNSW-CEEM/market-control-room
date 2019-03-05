<template>

  <div id="app">
    <div class="top nes-container">Top</div>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/api">API Sample</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');

#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'Press Start 2P', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
}

.top{
  width:100%;
}

#nav {

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#plus {
  padding: 0 20px 0 20px;
  display: inline-block;
  font-size: 50px;
  vertical-align: top;
  line-height: 100px;
}

</style>
