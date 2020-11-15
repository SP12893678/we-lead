<template>
<v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="onCancel()">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="onSave()">儲存</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <slot name="child" :clickSave="clickSave" :clickCancel="clickCancel" :clickCreate="clickCreate"></slot>
      </v-card>
    </v-dialog>
</template>
<script>
export default {
 name: 'modifier',
 props:["dialog","title"],
  data () {
    return {
        clickSave:false,
        clickCancel:false,
        clickCreate:false
    }
  },
  created(){
  },
  methods:{
    onSave(){
        this.clickSave=!this.clickSave;
         
    },
    onCancel(){
        this.clickCancel=!this.clickCancel;
        this.$emit('onCancel');
    },
    onAfterSave(){
        console.log("onAfterSave");
        this.$emit('onAfterSave');
    },
  }
}
</script>