<template>
  <div class="home">
  <hyperparameters />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Hyperparameters from '@/components/Hyperparameters.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Hyperparameters
  }
}
</script>

<style lang="scss">

</style>
