<template>
  <div class="nes-container with-title">
    <h3 class="title">Metadata</h3>

     <table class="nes-table is-bordered is-centered" style="width:100%">
        <!-- <tr>

          <th>Parameter</th>
          <th>Value</th>
        </tr> -->
        <tr v-for="(value, key) in metadata">

          <td>{{key}}</td>
          <td>{{value}}</td>
        </tr>

      </table>
  </div>
</template>

<script>
export default {
  name: 'Metadata',
  props: {
    metadata: Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
