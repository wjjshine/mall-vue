<template>
  <div class="mall-user-wrap">
    <div class="user-info">
      <div class="cart-portrait">
        <img src="@assets/logo.png">
      </div>
      <div class="info">
        <p class="name">{{user.name}}</p>
        <p class="phone">{{user.phone}}</p>
      </div>
    </div>
    <grid>
      <grid-item  label="地址设置" @click.native="$router.push({path:'/address'})">
        <i slot="icon" class="iconfont mall-icon-coord"></i>
      </grid-item>
      <grid-item  label="全部订单" >
        <i slot="icon" class="iconfont mall-icon-order"></i>
      </grid-item>
    </grid>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      'user': 'public/user'
    })
  }
}
</script>
<style lang="less">
@import '~@/styles/variable.less';
@import '~vux/src/styles/1px.less';
.mall-user-wrap{padding:20px;
  .user-info{.vux-1px;padding:20px 30px;margin-bottom:20px;text-align:left;
    & > *{.vm;}
    &:before{content: " "!important;.border-radius(30px);}
    .cart-portrait{width:20%;
      img{width:100%;}
    }
    .info{margin-left:20px;
      .name{font-size: 40px;}
    }
  }
  .weui-grid__icon{
    .iconfont{color:#8492a6;font-size:50px;}
  }
  .weui-grid__label{color:#8492a6;font-size:18px;}
}
</style>
