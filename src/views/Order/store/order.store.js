const state = {
}
const getters = {
  orderProductList: state => {
    let cartProductList = JSON.parse(localStorage['cartProductList'])
    let orderProductList = []
    cartProductList.forEach(v => {
      if (v.isSelected) {
        orderProductList.push(v)
      }
    })
    return cartProductList
  },
  productTotalPrice: (state, getters) => {
    let productTotalPrice = 0
    getters.orderProductList.forEach(v => {
      productTotalPrice = productTotalPrice + v.price * v.cartNum
    })
    return productTotalPrice
  }
}
const mutations = {
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
