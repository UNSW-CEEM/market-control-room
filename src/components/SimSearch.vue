<template>
  <div class="search">
    <h4>Simulations</h4>
    <div class="simlist">
      <div v-for="sim in simulations">
        <router-link class="simlink" :to="{ name: 'summary', params: { id: sim.id } }" >{{sim.label}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>

import $backend from '../backend'
export default {
  name: 'SimSearch',
  data() {
    return {
      simulations:[],
    }
  },
  methods:{
      refresh(){
        this.simulation = null;
        $backend.fetchSimulationList()
        .then(responseData => {
          console.log("Sim List Response:", responseData);
          this.simulations = responseData;
        }).catch(error => {
          console.log(error.message)
        })
      }
  },
  mounted(){
    this.refresh()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search{
  margin-top:3vh;
  
  .simlist{
    height:85vh;
    overflow:scroll;
    width:100%;
    .simlink{
      font-size:0.6em;
    } 
  }

}
</style>
