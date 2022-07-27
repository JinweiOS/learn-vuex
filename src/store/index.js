import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    token: '12345yu',
    caseId: '1234567',
    userId: 12345678
  },
  getters: { // 3.二次处理state中的数据
    userIdAndToken(state) {
      return state.token + state.userId;
    } 
  },
  mutations: {
    increment(state) {
      state.count++
    },
    updateToke(state, token) {
      state.token = token
    }
  },
  actions: {
    async updateToken(context) {
      // 
      const res = await axios.get('http://learn.api.futureruntime.com/');
      const token = res.data.data
      context.commit('updateToke', token)
    }
  },
  modules: {
  }
})