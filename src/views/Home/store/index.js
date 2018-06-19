import api from '../api'

const state = {
  selectedList: [],
  billboardList: []
}
const getters = {
  selectedList: state => {
    let list = state.selectedList
    list.forEach(item => {
      // item.imgUrl = require(`../../../assets/product/${item.id}.png`)
      item.imgUrl = require(`../../../assets/product/5af441c1N1af45077.png`)
    })
    return list
  },
  billboardList: state => {
    let list = state.billboardList
    list.forEach(item => {
      // item.imgUrl = require(`../../../assets/product/${item.id}.png`)
      item.imgUrl = require(`../../../assets/product/5af441c1N1af45077.png`)
    })
    return list
  }
}
const mutations = {
  SET_STATE: (state, payload) => {
    state[payload.target] = payload.data
  }
}
const actions = {
  getSelectedList: async ({commit, state}) => {
    let res = await api.getSelectedList({}).catch(err => { throw err })
    commit('SET_STATE', {target: 'selectedList', data: res.data.list})
  },
  getBillboardList: async ({commit, state}) => {
    let res = await api.getBillboardList({}).catch(err => { throw err })
    commit('SET_STATE', {target: 'billboardList', data: res.data.list})
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
