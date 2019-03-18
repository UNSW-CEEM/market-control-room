<template>
  <div class="summary">
    <div v-if="simulation">
      <h1>{{simulation.label}}</h1>
      
      <metadata :metadata="simulation.metadata"/>
      <Notes :notes="simulation.notes" :id="id"/>
      <hyperparameters :hyperparameters="simulation.hyperparameters"/>

      <simplechart v-for="(value, key) in simulation.timeseries" :timeseries="value"/>
      <bidstack :bidstacks="simulation.bidstacks"/>
    </div>

    <div v-else class="loading">
      <h1>LOADING...</h1>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

import Hyperparameters from '@/components/Hyperparameters.vue'
import Metadata from '@/components/Metadata.vue'
import Notes from '@/components/Notes.vue'

import Bidstack from '@/components/Bidstack.vue'

import Simplechart from '@/components/Simplechart.vue'

import $backend from '../backend'

export default {
  name: 'Summary',
  props: {
    id: String
  },
  data () {
    return {
      simulation: null
    }
  },
  components: {
    Hyperparameters,
    Metadata,
    Notes,
    Simplechart,
    Bidstack
  },
  methods: {
    refresh () {
      this.simulation = null
      $backend.fetchSimulation(this.id)
        .then(responseData => {
          this.simulation = responseData
        }).catch(error => {
          console.log(error.message)
        })
    }
  },
  watch: {
    id () {
      this.refresh()
    }
  },
  mounted () {
    this.refresh()
  }
}
</script>

<style lang="scss">

.loading{
  height:90vh;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}
</style>
