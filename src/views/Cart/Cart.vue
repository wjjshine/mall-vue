<template>
  <div class="mall-cart-wrap">
    <div class="cart-body">
      <ul class="cart-product">
        <li class="cart-product-li" v-for="(product,index) in cartProductList" :key="index">
          <div class="checkbox">
            <i class="iconfont" :class="product.isSelected ? 'mall-icon-circular_fill_selected':'mall-icon-circular_unselected'" @click="toogleSelect(index)"></i>
          </div>
          <div class="img-box">
            <img :src="product.imgUrl">
          </div>
          <div class="info">
            <div class="product-name">{{product.name}}</div>
            <inline-x-number v-model="product.cartNum" :min="0" width="50px" button-style="round"  @on-change="changeNumber(index,product)"></inline-x-number>
          </div>
          <div class="opt">
            <div class="total">¥{{product.price * product.cartNum | toDecimal}}</div>
            <i class="iconfont mall-icon-delete" @click="deleteCartProduct(index)"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="cart-footer">
      <div class="selected-all">
        <div class="selected-all-btn" @click="selectAll">
          <i class="iconfont" :class=" isSelectedAll ? 'mall-icon-circular_selected':'mall-icon-circular_unselected'"></i>
          <span>全选({{cartSelectedList.length || 0}})</span>
        </div>
      </div>
      <div class="total">总计：<span class="text-success">¥ {{totalPrice | toDecimal}}</span></div>
      <div class="clearing">
        <x-button mini type="warn" @click.native="settleAccounts" :disabled="cartSelectedList.length<=0">去结算</x-button>
      </div>
    </div>
  </div>
</template>
<script>
import { InlineXNumber } from 'vux'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {InlineXNumber},
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      'cartProductList': 'cart/cartProductList',
      'cartSelectedList': 'cart/cartSelectedList',
      'totalPrice': 'cart/totalPrice'
    }),
    isSelectedAll () {
      return this.cartSelectedList.length === this.cartProductList.length && this.cartSelectedList.length !== 0
    }
  },
  methods: {
    ...mapMutations({
      'TOOGLE_SELECT': 'cart/TOOGLE_SELECT',
      'SELECT_ALL': 'cart/SELECT_ALL',
      'CHANGE_NUMBER': 'cart/CHANGE_NUMBER',
      'DELETE_CART_PRODUCT': 'cart/DELETE_CART_PRODUCT'
    }),
    toogleSelect (index) {
      this.TOOGLE_SELECT(index)
    },
    selectAll () {
      this.SELECT_ALL(this.isSelectedAll)
    },
    changeNumber (index, product) {
      this.CHANGE_NUMBER({index: index, newCartNum: product.cartNum})
    },
    deleteCartProduct (index) {
      this.DELETE_CART_PRODUCT(index)
    },
    settleAccounts () {
      this.$router.push({path: '/order'})
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/styles/variable.less';
@import '~vux/src/styles/1px.less';
.mall-cart-wrap{height:100%;.flex-container;.flex-direction;
  .cart-body{.flex;
    .cart-product{
      &-li{.flex-container;align-items: center;padding:20px 0;.vux-1px-b;
        .checkbox{padding:0 30px;
          .iconfont{font-size:45px;}
        }
        .img-box{width:20%;
          img{width:100%;height:100%;.vm;}
        }
        .info{.flex(2);text-align:left;padding:0 20px;
          .product-name{font-size: 33px;font-weight: 500;margin-bottom:15px;}

        }
        .opt{.flex;
          .total{font-size:28px;margin-bottom:15px;}
          .iconfont{font-size:32px;}
        }
      }
    }
  }
  .cart-footer{height:100px;line-height: 100px;.flex-container;background-color: #f9f9f9;padding:0 30px;font-size:30px;
    &>*{.flex;}
    .iconfont{font-size:45px;margin-right:5px;}
    .selected-all{text-align: left;
      .selected-all-btn{
        *{.vm;}
      }
    }
    .clearing{text-align:right;}
  }
}
</style>
