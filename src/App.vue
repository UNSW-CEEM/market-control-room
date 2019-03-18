<template>

  <div id="app">
    <div class="top">
      <a href="/"><div class="title nes-text is-primary"> Deep Learning Logbook</div></a>
      <div class="ceem"> UNSW CEEM <i class="nes-icon github is-small"></i></div>
    </div>

    <div class="main">
      <div class="nav">
        <!-- <router-link to="/">Home</router-link>
        <router-link to="/api">API Sample</router-link> -->
        <sim-search v-bind:simulations="simulations"/>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>

</template>

<script>
import SimSearch from '@/components/SimSearch.vue'
export default {
  name: 'app',
  components: {
    SimSearch
  },
  data () {
    return {
      simulations: []
    }
  },
  mounted () {
    for (var i = 0; i < 100; i++) {
      this.simulations.push({
        id: i,
        label: 'Simulation ' + i
      })
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');
$nes-black: #212529;

$nes-blue: #209cee;

#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'Press Start 2P', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  cursor: auto;
}
a{
  cursor:auto;
}

.top{
  width:100%;
  background-color: $nes-black;
  color:white;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items: center;
  height: 5vh;

  a:hover{
    text-decoration: none;
  }

  .title{
    margin: 0 1vw 0 1vw;

  }

  .ceem{
    margin: 0 1vw 0 1vw;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    i{
      margin: 0 0 0 1vw;
    }
  }
}

.main{
  width:100%;

  display:flex;
  flex-direction:row;
  justify-content:flex-start;

  .nav {
    width:15vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    border-right:4px solid $nes-black;
    height:95vh;

    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .content{
    width:85vw;
    height:95vh;
    padding:3vh 3vw 1vh 3vw;
    overflow:scroll;
  }

}

</style>
