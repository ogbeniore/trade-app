import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trades: [],
    apiError: '',
    currentLocation: {},
  },
  mutations: {
    saveTrades: (state, payload) => {
      state.trades = payload;
    },
    saveRequestError: (state, payload) => {
      state.apiError = payload;
    },
    saveCurrentLocation: (state, payload) => {
      state.currentLocation = payload;
    }
  },
  actions: {
    loadTrades: ({commit}) => {
      let xhr = new XMLHttpRequest();
      xhr.open('get', 'https://wrenew-backend.herokuapp.com/api/trades')
      xhr.onload = () => {
        if (xhr.status === 200) {
          let response = JSON.parse(xhr.responseText);
          commit('saveTrades', response.trades);
        }
        else {
          commit('saveRequestError', xhr.status);
        }
      };
      xhr.send()
    }
  },
  getters: {
    getTrades: (state) => state.trades,
    getApiError: (state) => state.apiError,
    currentLocation: (state) => state.currentLocation,
  }
})
