import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import user from './modules/user'
import notify from './modules/notify'
import validation from './modules/validation'
import shoppingcart from './modules/shoppingcart'

import http from './modules/http'

Vue.use(Vuex)
const _modules=function(){
  return {
    user:user,
    validation:validation,
    http:http,
    notify:notify,
    shoppingcart:shoppingcart
  };
}
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [createPersistedState({key:'iotapp',paths:['user.uid','user.utkn']})],
  modules: _modules(),
  state: {
    
    loader:{
      show:false,
      message:"",
    },
    dialogBox:{ 
      dialog:false,
      option: {}
    },
    snackBar:{ 
      show:false,
      message:"",
      icon:""
    }
  },
  actions: {
    resetAllState({ commit, state }){
      var m=_modules();
      for(var key in m){
        commit(key+"/reset");
      }
    }
  },
  mutations: {
    snackBar(state,value){ 
      state.snackBar.show=value.show;
      state.snackBar.icon=value.icon?value.icon:"";
      state.snackBar.message=value.message?value.message:"";
    },
    dialogBox(state,value){ 
      state.dialogBox.dialog=value.dialog;
      state.dialogBox.option=value.option?value.option:{};
    },
  	loadingBox(state,value){
      state.loader.show=value.show;
       state.loader.message=value.message?value.message:"";
  	},
  }
})
