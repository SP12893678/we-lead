<template>
<v-snackbar top color=""
      v-model="$store.state.snackBar.show"
      :timeout="timeout"
    >
        <v-layout>
            <v-flex xs2>
                <v-icon v-if="$store.state.snackBar.icon=='error'" color="red">warning</v-icon>
                <v-icon v-if="$store.state.snackBar.icon=='success'" color="green">check</v-icon>
                
            </v-flex>
             <v-flex class="pt-1">
               {{ $store.state.snackBar.message }}
            </v-flex>
        </v-layout>
        <v-btn
            color="amber"
            flat
            @click="$store.commit('snackBar',{show:false})"
        >
            關閉
        </v-btn>
    </v-snackbar>
</template>
<script>
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
 name: 'SnackBar',
  
  data () {
    return {
       
        timeout: 0,
    }
  },
  updated(){
      if(this.$store.state.snackBar.show){
        setTimeout(()=>{
            this.$store.commit('snackBar',{show:false});
        },3500);
      }
  },
  created(){
  },
  methods:{
    
  }
}
</script>