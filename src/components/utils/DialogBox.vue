<template>
  <v-layout row justify-center>
    <v-dialog v-model="$store.state.dialogBox.dialog" 
        :persistent="persistent" max-width="400" >
      <v-card>
        <v-card-title class="title">{{title}}</v-card-title>

        <v-card-text class="pt-0">
          <div class="text-xs-center">
            <div class="mb-3">
              <v-icon v-if="icon=='success'"  size="80" color="green">check_circle</v-icon>
              <v-icon v-if="icon=='error'" size="80" color="red">error</v-icon>
              <v-icon v-if="icon=='warning'" size="80" color="yellow darken-2">warning</v-icon>
              <v-icon v-if="icon=='info'" size="80" color="blue">info</v-icon> 
            </div>
            <div>{{message}}</div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn v-if="btnCancelShow" color="blue darken-1" flat @click="btnCancel()">{{btnCancelText}}</v-btn>
          <v-btn v-if="btnConfirmShow" color="blue darken-1" flat  @click="btnConfirm()">{{btnConfirmText}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script type="text/javascript">
  const isEmpty=function(obj,checkStr){
    if(checkStr===undefined){
      checkStr=false;
    }
    if(checkStr){
      if(obj===undefined||obj=='')
        return true;
    }else{
      if(obj===undefined)
        return true;
    }
    return false;
  };
  
  export default {
    name: 'dialog-box',
    
    updated:function(){
      var opt=this.$store.state.dialogBox.option;
      
      this.title=isEmpty(opt.title,true)?this.$data.title:opt.title;
      this.persistent= isEmpty(opt.persistent)?this.persistent:opt.persistent;
      this.message=isEmpty(opt.message,true)?this.message:opt.message;
      this.icon=isEmpty(opt.icon,true)?this.icon:opt.icon;
      this.btnConfirmShow=isEmpty(opt.btnConfirmShow)?this.btnConfirmShow:opt.btnConfirmShow;
      this.btnConfirmText=isEmpty(opt.btnConfirmText,true)?this.btnConfirmText:opt.btnConfirmText;
      this.btnConfirmEvent=isEmpty(opt.btnConfirmEvent)?this.btnConfirmEvent:opt.btnConfirmEvent;
      this.btnCancelShow=isEmpty(opt.btnCancelShow)?this.btnCancelShow:opt.btnCancelShow;
      this.btnCancelText=isEmpty(opt.btnCancelText,true)?this.btnCancelText:opt.btnCancelText;
      this.btnCancelEvent=isEmpty(opt.btnCancelEvent)?this.btnCancelEvent:opt.btnCancelEvent;

    },
    data () {
      return { 
        title: '訊息',
        persistent: false,
        message:'',
        icon:'',
        btnConfirmShow:true,
        btnConfirmText:"我知道了",
        btnCancelShow:false,
        btnCancelText:"取消",
        btnConfirmEvent:function(){return true;},
        btnCancelEvent:function(){return true;}
        
      }
    },
     
    methods:{
      btnConfirm(){
        this.btnConfirmEvent();
        this.$store.commit('dialogBox',{dialog:false});
      },
      btnCancel(){
        this.btnCancelEvent();
        this.$store.commit('dialogBox',{dialog:false});
      }
        
    },

     
  }
</script>