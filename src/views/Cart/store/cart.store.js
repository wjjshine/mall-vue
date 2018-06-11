
const state = {
  cartProductList: localStorage['cartProductList']
    ? JSON.parse(localStorage['cartProductList'])
    : []
}
const getters = {
  cartProductList: state => state.cartProductList,
  cartSelectedList: state => {
    let selectedList = []
    state.cartProductList.forEach(v => {
      if (v.isSelected) selectedList.push(v)
    })
    return selectedList
  },
  cartProductNum: state => {
    return state.cartProductList.length || 0
  },
  totalPrice: state => {
    let price = 0
    state.cartProductList.forEach(v => {
      if (v.isSelected) {
        price = price + v.cartNum * v.price
      }
    })
    return price
  }
}

const mutations = {
  ADDTOCART (state, product) {
    let { id } = product
    let exitProduct = state.cartProductList.find(v => v.id === id)
    if (exitProduct) {
      exitProduct.cartNum++
    } else {
      let newProduct = Object.assign({}, product, {isSelected: true, cartNum: 1})
      state.cartProductList.push(newProduct)
    }

    localStorage.setItem('cartProductList', JSON.stringify(state.cartProductList))
  },
  DELETE_CART_PRODUCT (state, index) {
    state.cartProductList.splice(index, 1)
    localStorage.setItem('cartProductList', JSON.stringify(state.cartProductList))
  },
  CHANGE_NUMBER (state, {index, newCartNum}) {
    localStorage.setItem('cartProductList', JSON.stringify(state.cartProductList))
  },
  TOOGLE_SELECT (state, index) {
    state.cartProductList[index].isSelected = !state.cartProductList[index].isSelected
    localStorage.setItem('cartProductList', JSON.stringify(state.cartProductList))
  },
  SELECT_ALL (state, status) {
    state.cartProductList.forEach(v => {
      v.isSelected = !status
    })
    localStorage.setItem('cartProductList', JSON.stringify(state.cartProductList))
  }
}
const actions = {

}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
