import api from '../api'

const state = {
  classifyList: []
}
const getters = {
  classifyList: (state) => {
    let classifyList = state.classifyList
    classifyList.forEach(v => {
      v.productList.forEach(p => {
        p.imgUrl = require(`../../../assets/product/5af441c1N1af45077.png`)
      })
    })
    return classifyList
  }
  // state => state.classifyList
}
const mutations = {
  SET_STATE: (state, payload) => {
    state[payload.target] = payload.data
  }
}
const actions = {
  getClassifyList: async ({commit, state}) => {
    let res = await api.getClassifyList({}).catch(err => { throw err })
    commit('SET_STATE', {target: 'classifyList', data: res.data.list})
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
