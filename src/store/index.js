import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/** get modules */
let modules = {}
const modulesFilse = require.context('../views', true, /\.store.js$/)
modulesFilse.keys().forEach(key => { // key:./Public/store/public.store.js
  let fileName = key.split(/(\.\/)/)[2] // Public/store/public.store.js
  const keyName = fileName.split(/\//)[2].split('.')[0] // keyName:public
  modules[keyName] = require('../views/' + fileName).default
})

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
