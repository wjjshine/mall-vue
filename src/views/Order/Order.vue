<template>
  <div class="mall-order-wrap">
    <address></address>
    <div class="order-body">
      <ul class="order-product">
        <li class="order-product-li" v-for="(product,index) in orderProductList" :key="index">
          <div class="img-box">
            <img :src="product.imgUrl">
          </div>
          <div class="info">
            <div class="product-name">{{product.name}}</div>
          </div>
          <div class="opt">
            <div class="total text-error">¥{{product.price * product.cartNum | toDecimal}}</div>
            <span class="num text-grey">X {{product.cartNum}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="order-footer">
      <ul>
        <li>
          <label>商品金额</label><span class="text-error">¥{{productTotalPrice|toDecimal}}</span>
        </li>
        <li>
          <label>运费</label><span class="text-error">¥{{freight|toDecimal}}</span>
        </li>
        <li>
          <label>总价</label><span class="text-error total">¥{{freight + productTotalPrice |toDecimal}}</span>
        </li>
        <li>
          <x-button type="warn">确认支付</x-button>
        </li>
      </ul>
    </div>
    <div v-transfer-dom>
      <popup v-model="show7" height="270px" is-transparent>
        <div style="width: 95%;background-color:#fff;height:250px;margin:0 auto;border-radius:5px;padding-top:10px;">
         <group>
          <cell title="Product" value="Donate"></cell>
          <cell title="Total" value="$10.24"></cell>
         </group>
         <div style="padding:20px 15px;">
          <x-button type="primary">Pay</x-button>
          <x-button @click.native="show7 = false">Cancel</x-button>
         </div>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Address from './components/Address.vue'
export default {
  components: {
    Address
  },
  data () {
    return {
      freight: 10,
      show7: false
    }
  },
  computed: {
    ...mapGetters({
      'orderProductList': 'order/orderProductList',
      'productTotalPrice': 'order/productTotalPrice'
    })
  }
}
</script>
<style lang="less" scoped>
@import '~@/styles/variable.less';
@import '~vux/src/styles/1px.less';
.mall-order-wrap{height:100%;.flex-container;.flex-direction;
  .order-body{.flex;
    .order-product{
      &-li{.flex-container;align-items: center;padding:20px 30px;.vux-1px-b;
        .checkbox{padding:0 30px;
          .iconfont{font-size:45px;}
        }
        .img-box{width:20%;
          img{width:100%;height:100%;.vm;}
        }
        .info{.flex(2);text-align:left;padding:0 20px;
          .product-name{font-size: 33px;font-weight: 500;margin-bottom:15px;}

        }
        .opt{.flex;text-align:right;
          .total{font-size:28px;margin-bottom:15px;}
          .iconfont{font-size:32px;}
        }
      }
    }
  }
  .order-footer{.box-shadow(0,-10px,10px,rgba(0,0,0,0.08));
    ul{padding:20px 0;}
    li{padding:10px 30px;
      label{float: left;}
      span{float: right;
        &.total{font-size:40px;font-weight: 500}
      }
      &:last-child{margin-top:20px;}
    }
  }
}

</style>
