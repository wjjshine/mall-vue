import Vue from 'vue'
import Vuex from 'vuex'
import publicStore from '@views/public/store'
import home from '@views/Home/store'
import user from '@views/User/store'
import cart from '@views/Cart/store'
import order from '@views/Order/store'
import address from '@views/Address/store'
import classify from '@views/Classify/store'

Vue.use(Vuex)

let modules = {
  public: publicStore,
  home,
  user,
  cart,
  order,
  address,
  classify
}

const state = {
  isLoading: false,
  direction: 'forward',
  headerTitle: '生鲜商城',
  tabBarActive: '',
  historyPath: {},
  toast: {
    show: false,
    type: 'success',
    msg: '成功'
  }
}
const getters = {
  toast: state => state.toast,
  isLoading: state => state.isLoading,
  headerTitle: state => state.headerTitle,
  tabBarActive: state => state.tabBarActive,
  tabBarActiveText: state => {
    switch (state.tabBarActive) {
      case 0:
        return 'home'
      case 1:
        return 'classify'
      case 2:
        return 'cart'
      case 3:
        return 'user'
    }
  },
  historyPath: state => state.historyPath
}
const mutations = {
  SET_STATE (state, payload) {
    state[payload.target] = payload.data
  },
  UPDATE_LOADING (state, status) {
    state.isLoading = status
  },
  SHOW_TOAST (state, config) {
    for (let k in config) {
      state.toast[k] = config[k]
    }
  }
}
const actions = {
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules
})

const shouldUseTransition = !/transition=none/.test(location.href)

store.registerModule('vux', {
  state: {
    demoScrollTop: 0,
    isLoading: false,
    direction: shouldUseTransition ? 'forward' : ''
  },
  mutations: {
    updateDirection (state, payload) {
      if (!shouldUseTransition) {
        return
      }
      state.direction = payload.direction
    }
  },
  actions: {
  }
})

export default store
