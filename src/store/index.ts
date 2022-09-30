import { createStore } from 'vuex'

export default createStore({
  state: {
    base: '',
    convert: {
      amount: null,
      to: {}
    },
    fluctuation: {
      start: '',
      end: '',
      symbols: ''
    },
    symbols: '',
    data: {},
    date: ''
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
