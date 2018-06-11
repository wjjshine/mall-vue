<template>
  <tabbar @on-index-change="indexChange">
    <tabbar-item link="/home" :selected="selectedActive(/home/)">
      <i slot="icon"  class="iconfont mall-icon-home"></i>
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item link="/classify" :selected="selectedActive(/classify/)">
      <i slot="icon" class="iconfont mall-icon-classify"></i>
      <span slot="label">分类</span>
    </tabbar-item>
    <tabbar-item link="/cart" :badge="String(cartProductNum)" :selected="selectedActive(/cart/)">
      <i slot="icon" class="iconfont mall-icon-cart"></i>
      <span slot="label">购物车</span>
    </tabbar-item>
    <tabbar-item link="/user" :selected="selectedActive(/user/)">
       <i slot="icon" class="iconfont mall-icon-mine"></i>
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</template>
<script>
import { mapGetters } from 'vuex'
import { Badge } from 'vux'
export default {
  components: {Badge},
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      'cartProductNum': 'cart/cartProductNum'
    })
  },
  mounted () {
  },
  methods: {
    selectedActive (reg) {
      return reg.test(this.$route.path)
    },
    indexChange (val) {
      this.$store.commit('SET_STATE', {target: 'tabBarActive', data: val})
    }
  }
}
</script>
