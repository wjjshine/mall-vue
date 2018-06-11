<template>
  <div class="mall-classify-wrap">
    <div class="classify-menu">
      <ul>
        <li v-for="(menu,index) in classifyList" :key="index" @click="changeMenu(index)" :class="{'active':currentIndex==index}" class="classify-menu-li">
          {{menu.name}}
        </li>
      </ul>
    </div>
    <div class="classify-content">
      <grid :cols="2" :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item  v-for="(item,index) in currentMenu.productList" :key="index" :link="{ path: '/product/detail'}">
          <img slot="icon" :src="item.imgUrl">
          <template slot="label">
            <div class="product-name">{{item.name}}</div>
            <!-- <div class="product-price">{{item.price}}</div> -->
          </template>
        </grid-item>
      </grid>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      currentMenu: {},
      currentIndex: 0
    }
  },
  computed: {
    ...mapGetters({
      classifyList: 'classify/classifyList'
    })
  },
  mounted () {
    this.getClassifyList()
  },
  methods: {
    async getClassifyList () {
      await this.$store.dispatch('classify/getClassifyList').catch(err => {
        console.log(err)
      })
      this.currentMenu = this.classifyList[0]
      this.currentIndex = 0
    },
    changeMenu (index) {
      this.currentIndex = index
      this.currentMenu = this.classifyList.find((v, i) => {
        return i === index
      })
    }
  }
}
</script>
<style lang="less">
@import '~@/styles/variable.less';
@import '~vux/src/styles/1px.less';
.mall-classify-wrap{.flex-container;height:100%;
  .classify-menu{width:24%;.vux-1px-r;font-size:25px;
    &-li{height:80px;line-height: 80px;position: relative;
      &.active{color:#ff842b;
        &:before{background-color: #ff842b;transition:all 0.5s ease;}
      }
      &:before{content:'';width:5px;height:100%;background-color: transparent;position: absolute;left:0;transition:all 0.5s ease;}
    }
  }
  .classify-content{.flex;padding-top:10px;
    .weui-grids{
      &::before{border-top-color: transparent;}
    }
    .weui-grid { padding: 12px 10px;
      .weui-grid__icon{width:60px;height:60px}
      &:after,&:before{ border-bottom-color: transparent;}
    }
  }
}
</style>
