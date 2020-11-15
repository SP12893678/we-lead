// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from '@/store' 
import { sync } from 'vuex-router-sync'
import VueLodash from 'vue-lodash';

// import 'material-design-icons-iconfont/dist/material-design-icons.css'
// const unsync = sync(store, router) 


Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueLodash); 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  vuetify,
  components: { App },
  template: '<App/>'
})
// store.commit('dialogBox',{dialog:true,option:{title:"參數錯誤",message:"Oops!我們找不到必要的參數！"}},{root:true});
// store.commit('loadingBox',{show:true,message:"asdas"});

