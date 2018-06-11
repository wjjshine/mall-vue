const Login = resolve => require.ensure([], () => resolve(require('@/views/Public/Login')), 'public')
const Home = resolve => require.ensure([], () => resolve(require('@/views/Home/Home')), 'Home')
const Classify = resolve => require.ensure([], () => resolve(require('@/views/Classify/Classify')), 'Classify')
const Cart = resolve => require.ensure([], () => resolve(require('@/views/Cart/Cart')), 'Cart')
const User = resolve => require.ensure([], () => resolve(require('@/views/User/User')), 'User')
const Order = resolve => require.ensure([], () => resolve(require('@/views/Order/Order')), 'Order')
const Address = resolve => require.ensure([], () => resolve(require('@/views/Address/Address')), 'Address')
// const AddUpdateAddress = resolve => require.ensure([], () => resolve(require('@/views/Address/AddUpdateAddress')), 'Address')

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '生鲜商城'
    }
  },
  {
    path: '/classify',
    name: 'Classify',
    component: Classify,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      title: '购物车',
      requiresAuth: true
    }
  }, {
    path: '/order',
    name: 'Order',
    component: Order,
    meta: {
      title: '确认订单',
      requiresAuth: true
    }
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      title: '我的',
      requiresAuth: true
    }
  },
  {
    path: '/address',
    name: 'Address',
    component: Address,
    meta: {
      title: '管理收货地址',
      requiresAuth: true
    }
  }
  // ,
  // {
  //   path: '/address/addUpdate',
  //   name: 'AddUpdateAddress',
  //   component: AddUpdateAddress,
  //   meta: {
  //     title: '地址',
  //     requiresAuth: true
  //   }
  // }

]

export default routes
