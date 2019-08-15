import Vue from 'vue';
import Vuex from 'vuex';
import login from './module/login';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...login.state,
  },
  mutations: {
    ...login.mutations,
  },
  actions: {
    ...login.actions
  },
  // getters:{
  //   ...login.getters
  // },
  modules: {
    // 
  }
})