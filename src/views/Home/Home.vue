<template>
  <div class="mall-home-wrap">
    <Banner />
    <!--精选推荐-->
    <div class="selected-wrap home-product-box product-box">
      <div class="home-product-box__title">
        <img src="../../assets/home/selected.png" >
      </div>
      <grid :cols="2" :show-lr-borders="false">
        <grid-item v-for="(item,index) in selectedList" :key="index" :link="{ path: '/product/detail'}" >
          <i class="iconfont mall-icon-cart product-cart" @click.stop="addCart(item)"></i>
          <img slot="icon" :src="item.imgUrl">
          <template slot="label">
            <div class="product-name">{{item.name}}</div>
            <div class="product-price">¥{{item.price}}</div>
          </template>
        </grid-item>
      </grid>
    </div>
    <!--热卖-->
    <div class="billboard-wrap home-product-box product-box">
      <div class="home-product-box__title">
        <img src="../../assets/home/billboard.png" >
      </div>
      <grid :cols="2" :show-lr-borders="false">
        <grid-item  v-for="(item,index) in billboardList" :key="index" :link="{ path: '/product/detail'}">
          <i class="iconfont mall-icon-cart product-cart" @click.stop="addCart(item)"></i>
          <img slot="icon" :src="item.imgUrl">
          <template slot="label">
            <div class="product-name">{{item.name}}</div>
            <div class="product-price">¥{{item.price}}</div>
          </template>
        </grid-item>
      </grid>
    </div>
  </div>
</template>
<script>
import Banner from './components/Banner'
import { mapGetters } from 'vuex'
export default {
  components: {Banner},
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      user: 'user',
      selectedList: 'home/selectedList',
      billboardList: 'home/billboardList'
    })
  },
  mounted () {
    this.getSelectedList()
    this.getBillboardList()
  },
  methods: {
    async getSelectedList () {
      await this.$store.dispatch('home/getSelectedList').catch(err => {
        console.log(err)
      })
    },
    async getBillboardList () {
      await this.$store.dispatch('home/getBillboardList').catch(err => {
        console.log(err)
      })
    },
    addCart (product) {
      if (this.user) {
        this.$store.commit('cart/ADDTOCART', product)
      } else {
        this.$router.push({path: '/login', query: {redirect: '/home'}})
      }
    }
  }
}
</script>
<style lang="less" scoped>
.home-product-box{
  &__title{
    img{width:100%;display: block;}
  }
}

</style>
