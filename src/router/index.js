import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import store from '../store'
Vue.use(VueRouter)

let router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  let user = sessionStorage.getItem('user')
  store.commit('SET_STATE', {target: 'headerTitle', data: to.meta.title})
  if (to.matched.some(record => record.meta.requiresAuth) && !user) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
    return
  }
  // loading
  // store.commit('UPDATE_LOADING', true)
  next()
})

router.afterEach(function (to) {
  // setTimeout(() => {
  //   store.commit('UPDATE_LOADING', false)
  // }, 3000)
})

export default router
