<template>
<v-dialog
      v-model="$store.state.loader.show" 
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          {{$store.state.loader.message||"請稍候..."}}
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>
<script>
export default {
 name: 'Loader',
  data () {
    return {
      
    }
  },
  created(){
  },
  methods:{
    
  }
}
</script>