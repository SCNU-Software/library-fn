import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {
      userName: ''
    }
  },
  mutations: {
    setUserName(state, userName){
      state.user.userName = userName;
    }
  }
})

export default store;

