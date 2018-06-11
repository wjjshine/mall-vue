import api from '../api'
const state = {
  addressList: []
}
const getters = {
  addressList: state => state.addressList
}
const mutations = {
  SET_ADDRESS_LIST (state, list) {
    state.addressList = list
  },
  DEFAULT_TEXT (state, isDefault = false) {
    // console.log(isDefault)
    // let a = isDefault ? '默认地址' : '设为默认'
  },
  CHANGE_DEFAULT_ADDRESS (state, index) {
    state.addressList.forEach((v, i) => {
      v.isDefault = i === index
    })
  },
  DELETE_ADDRESS (state, index) {
    state.addressList.splice(index, 1)
  }
}
const actions = {
  async getAddressList ({commit}, id) {
    let data = await api.getAddressList({id: id}).catch(err => {
      throw err
    })
    commit('SET_ADDRESS_LIST', data.list)
  },
  async add ({commit}, address) {
    await api.addAddress(address).catch(err => { throw err })
  },
  async update ({commit}, address) {
    await api.updateAddress(address).catch(err => { throw err })
  },
  async deleteAddress ({commit}, data) {
    await api.deleteAddress(data).catch(err => { throw err })
    commit('DELETE_ADDRESS', data.index)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
