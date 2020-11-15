import axios from 'axios'
const $http=axios;
const initState=function(){
  return{
   notify:[],
   notifyPipe:{
    board:{
      notify:0
    },
    monitor:{
      notify:2
    },
    dashboard:{
      notify:0
    },
    notifications:{
      notify:1
    },
    settings:{
      notify:0
    },
  }
  }
};
const state = initState();
const getters = {
  hasNotification:(state,getters)=>(val)=>{
    return state.notifyPipe[val].notify?true:false;
  },
};

// actions
const actions = {
  
  readNotify({ dispatch,commit, state },member_notify_id) {
    return new Promise((resolve, reject) => {
      let json={
        func_name:"updateNotifyStatus",
        member_notify_id:member_notify_id,
        status:2
      };
      dispatch("http/post",json,{root:true}).then((data)=>{
        if(data.status){
          commit('removeNotify');
        }
        
        resolve(true);
      });
    });
  },
   getAlertNotify ({ dispatch,commit, state }) {
    return new Promise((resolve, reject) => {
      let notify_type_id=2;
      dispatch("http/post",{func_name:"getNotifications",notify_type_id:notify_type_id,status:1},{root:true}).then((data)=>{
        if(data.result.length>0){
          commit('pushNotify',data.result[0]);
        }
        resolve(true);
      });
    });
  },
  getMessageNotify ({ dispatch,commit, state }) {
    return new Promise((resolve, reject) => {
      let notify_type_id=1;
      dispatch("http/post",{func_name:"getNotifications",notify_type_id:notify_type_id,status:0},{root:true}).then((data)=>{
        commit('setUserData',data.result);
          if(data.result.user_token!=''){
            resolve(true);
          }else{
            resolve(false);
          }
      });
    });
  },
}

// mutations
const mutations = {
  pushNotify(state,value){
    state.notify.push(value);
  },
  removeNotify(state,value){
    state.notify.shift();
  },
  reset(state) {
    state = Object.assign(state, initState());
  },
   
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}