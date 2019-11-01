import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    globalState: 1

  },
  mutations: {
    setGlobalState (state, payload) {
      state.globalState = state.globalState + payload
    }
  },
  actions: {

  }
})
