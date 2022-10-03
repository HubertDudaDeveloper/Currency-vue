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
    latest: {
      symbols: '',
      base: ''
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
