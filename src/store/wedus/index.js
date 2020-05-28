import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // namespaced: true,
  state: {
    wedus: 10
  },
  mutations: {
    crot(state, x) {
      state.wedus = x
    }
  },
  actions: {},
  modules: {}
})
