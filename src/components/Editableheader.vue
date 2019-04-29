<template>
  <div class="">
    <div class="label-line" v-if="mode=='display'">
        <h1 >{{label_text}}</h1>
        <div class="edit-label" v-on:click="mode='edit'" v-if="mode=='display'">Edit</div>
    </div>
    
    <!-- <label for="textarea_field">Textarea</label> -->
    <textarea v-if="mode=='edit'" id="textarea_field" class="nes-textarea" v-model="label_text"></textarea>
    <button v-if="mode=='edit'" type="button" class="nes-btn is-success" v-bind:class="{ 'is-warning': is_submitting }" v-on:click="submit_label()">
        <span v-if="is_submitting">Uploading...</span>
        <span v-else>Submit</span>
    </button>
   
  </div>
</template>

<script>
import $backend from '../backend'
export default {
  name: 'Notes',
  props: {
    label: String,
    id: String
  },
  data () {
    return {
      label_text: 'Sample',
      mode: 'display',
      is_submitting: false
    }
  },
  methods: {
    submit_label () {
      if (!this.is_submitting) {
        this.is_submitting = true
        $backend.postLabel(this.id, this.label_text)
          .then(responseData => {
            console.log('Label submitted. Response:', responseData)
            this.mode = 'display'
            this.is_submitting = false
          }).catch(error => {
            console.log('Label submission error: ', error.message)
          })
      }
    }
  },
 
  mounted () {
    this.label_text = this.label
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$blue-bg: #98cbea;
.nes-textarea{
    height: 30vh;
}
.nes-container{
    margin: 3vh 0 3vh 0;
    background-color:$blue-bg;
}
.notes-text{
    background-color:white;
}

.edit-label{
    cursor: pointer;
    margin-left:3vw;
}

.label-line{
    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
}
</style>
