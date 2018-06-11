import api from '../api'
const state = {
  user: {}
}
const getters = {
  user: state => {
    return JSON.parse(sessionStorage.getItem('user'))
  }
}
const mutations = {
  SET_USER (state, user) {
    sessionStorage.setItem('user', JSON.stringify(user))
  }
}
const actions = {
  async login ({commit}, user) {
    let res = await api.login(user).catch(err => {
      throw err
    })
    commit('SET_USER', res.data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
