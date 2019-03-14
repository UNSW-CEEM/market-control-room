<template>
  <div class="nes-container with-title">
    <h3 class="title">Notes</h3>
    <div class="nes-container notes-text" v-if="mode=='display'">
        {{notes_text}}
    </div>
    <button type="button" class="nes-btn is-primary"  v-on:click="mode='edit'" v-if="mode=='display'">Edit</button>
    <!-- <label for="textarea_field">Textarea</label> -->
    <textarea v-if="mode=='edit'" id="textarea_field" class="nes-textarea" v-model="notes_text"></textarea>
    <button v-if="mode=='edit'" type="button" class="nes-btn is-success" v-bind:class="{ 'is-warning': is_submitting }" v-on:click="submit_notes()">
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
    notes:String,
    id:String,
  },
  data(){
      return {
          notes_text:"Sample",
          mode:"display",
          is_submitting:false
      }
  },
  methods:{
      submit_notes(){
          if(!this.is_submitting){
            this.is_submitting = true;
            $backend.postNotes(this.id, this.notes_text)
            .then(responseData => {
                console.log("Notes submitted. Response:", responseData)
                this.mode = 'display'
                this.is_submitting = false;
            }).catch(error => {
                console.log("Note submission error: ", error.message)
            })
          }
      }
  },
  watch:{
      notes_text(){
        //   console.log(this.notes_text);
      }
  },
  mounted(){
      this.notes_text = this.notes;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nes-textarea{
    height: 30vh;
}
.nes-container{
    margin: 3vh 0 3vh 0;
    background-color:#98cbea;
}
.notes-text{
    background-color:white;
}
</style>
