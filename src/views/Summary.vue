<template>
  <div class="summary">
    <h1>Summary:{{id}}</h1>
    
    {{simulation}}
    <hyperparameters />
  </div>
</template>

<script>
// @ is an alias to /src

import Hyperparameters from '@/components/Hyperparameters.vue'
import $backend from '../backend'

export default {
  name: 'Summary',
  props:{
    id: String,
  },
  data(){
    return {
      simulation:null,
    }
  },
  components: {
    Hyperparameters
  },
  mounted(){
    $backend.fetchResource()
    .then(responseData => {
      this.resources.push(responseData)
    }).catch(error => {
      this.error = error.message
    })
  }
}
</script>

<style lang="scss">

</style>
