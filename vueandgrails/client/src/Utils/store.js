import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    test: false,
    item: null
  },
  mutations: {
    increment (state) {
      state.count++
    },
    test (state, payload) {
      state.test = payload
    },
    item (state, payload) {
      state.item = payload
    }
  }
})
