<template>
  <div class="nes-container with-title">
    <h3 class="title">Chart: {{timeseries.label}}</h3>
    <highcharts :options="chartOptions"></highcharts>

  </div>
</template>

<script>
export default {
  name: 'Simplechart',
  props: {
    timeseries: Object
  },
  data () {
    return {
      chartOptions: {
        title: {
          text: ''
        },
        series: [{
          name: this.timeseries.label,
          data: this.timeseries.data // sample data
        }]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$blue-bg: #98cbea;
.nes-container{
    margin: 3vh 0 3vh 0;
    background-color: $blue-bg;
}
</style>
