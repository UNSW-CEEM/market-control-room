<template>
  <div class="archiving nes-container">
    
    <div class="archive-scenario" v-if="archived">
      <h3>Archived</h3>
    </div>

    <div class="archive-scenario" v-else>
      <h3>Not Archived</h3>

       <button  type="button" class="nes-btn is-success" v-bind:class="{ 'is-warning': is_submitting }" v-on:click="submit_archive()">
        <span v-if="is_submitting">Archiving...</span>
        <span v-else>Archive</span>
      </button>
    </div>
    <!-- <div class="label-line" v-if="mode=='display'">
        
        <div class="edit-label" v-on:click="mode='edit'" v-if="mode=='display'">Edit</div>
    </div> -->
    
    <!-- <label for="textarea_field">Textarea</label>
    <textarea v-if="mode=='edit'" id="textarea_field" class="nes-textarea" v-model="label_text"></textarea>
    -->

  </div>
</template>

<script>
import $backend from '../backend'
export default {
  name: 'Notes',
  props: {
    archived:Boolean,
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
    submit_archive () {
      if (!this.is_submitting) {
        this.is_submitting = true
        $backend.postArchive(this.id)
          .then(responseData => {
            console.log('Archive submitted. Response:', responseData)
            this.mode = 'display'
            this.is_submitting = false
          }).catch(error => {
            console.log('Archive submission error: ', error.message)
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
.nes-btn{
  padding: 0 0 0 0;
}

.archiving{
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  width:100%;
}

.archive-scenario{
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  width:100%;
}

</style>
