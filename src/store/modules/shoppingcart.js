import axios from 'axios'
const $http=axios;
const initState=function(){
  return{
    cart_items:[{course_id:1,teacher_name:"談驊",course_price:800,course_name:"履歷表重塑",course_start_time:"2021-01-13"}],
  }
};
const state = initState();
const getters = {};

// actions
const actions = {
  
  getUserData ({ dispatch,commit, state }) {
    return new Promise((resolve, reject) => {
      dispatch("http/post",{api:"profile"},{root:true}).then((data)=>{
        
        if(data.status){
          commit('setUserData',data.result);
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
  
  addItem(state,value){
    let new_item={
        course_id:value.course_id,
        course_name:value.course_name,
        course_price:value.course_price,
        teacher_name:value.teacher_name,
        course_start_time:value.course_start_time
    }
    state.cart_items.push(new_item);
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