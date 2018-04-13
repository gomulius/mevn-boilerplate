import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {
    token: null,
    user: null,
    loggedIn: false,
    message: '',
    error: ''
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.loggedIn = true
      } else {
        state.loggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    },
    setMessage (state, message) {
      state.message = message
    },
    setError (state, error) {
      state.error = error
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setMessage ({commit}, message) {
      commit('setMessage', message)
    },
    setError ({commit}, error) {
      commit('setError', error)
    }
  }
})
