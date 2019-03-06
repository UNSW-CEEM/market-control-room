<template>
  <div class="home">
    
  <h1 class="nes-text is-primary" >Deep Learning Logbook</h1>

  <p>This logbook tracks deep learning simulations of electricity markets. It is designed to provide insights into participant bidding behaviour. </p>

  <p>It is the user interface for the openai gym electricity market simulator, developed by Luke Marshall at the UNSW Center for Energy and Environmental Markets.</p>

  <p>You can find the deep learning simulation code at the project github <a href="https://github.com/luke-marshall/energy-market-deep-learning">here.</a></p>
  <p>The source code for this logbook dashboard tool can be found  <a href="https://github.com/luke-marshall/market-control-room">here.</a></p>
  
  </div>
</template>

<script>
// @ is an alias to /src
import Hyperparameters from '@/components/Hyperparameters.vue'

export default {
  name: 'home',
  components: {
    Hyperparameters
  }
}
</script>

<style lang="scss">

</style>
