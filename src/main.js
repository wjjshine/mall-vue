// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import { AlertPlugin, ToastPlugin, XButton, XInput, Tabbar, TabbarItem, ViewBox, Grid, GridItem, TransferDom, Popup, Group, Toast } from 'vux'
import lodash from 'lodash'
// import MyInput from '@/components/MyInput'
import './styles/variable.less'
import './styles/index.less'
import filter from './utils/filter'
import Empty from './components/Empty'

// Vue.use(MyInput)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(Empty)

Vue.component('x-input', XInput)
Vue.component('x-button', XButton)
Vue.component('view-box', ViewBox)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)
Vue.component('group', Group)
Vue.component('popup', Popup)
Vue.component('toast', Toast)
Vue.prototype.$Lodash = lodash

Vue.directive('transfer-dom', TransferDom)

Vue.config.productionTip = false
/**
 *  点击延迟
 */
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  filter,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
