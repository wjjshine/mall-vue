<template>
  <div id="app" class="home">
    <div v-transfer-dom>
      <loading :show="isLoading"></loading>
    </div>
    <view-box ref="viewBox" :style="viewBoxStyle"
                  :body-padding-top="isPaddingTop"
                  :body-padding-bottom="isPaddingBottom">
      <Header slot="header" v-if="showHeader"/>
      <transition
      @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
      :name="viewTransition" :css="!!direction">
        <router-view key="page" class="router-view"/>
      </transition>
      <footer-tab-bar slot="bottom" v-if="showFooter"/>
    </view-box>
    <toast v-model="toast.show" :type="toast.type">{{toast.msg}}</toast>
  </div>
</template>

<script>
import { Loading, TransferDom } from 'vux'
import FooterTabBar from '@components/FooterTabBar/FooterTabBar'
import Header from '@components/Header/Header'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  directives: {
    TransferDom
  },
  components: { Loading, TransferDom, Header, FooterTabBar },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading',
      toast: 'toast'
    }),
    isPaddingTop () {
      if (/login/.test(this.$route.path)) {
        return 0
      }
      return '46px'
    },
    isPaddingBottom () {
      if (/order/.test(this.$route.path)) {
        return '0'
      }
      return '53px'
    },
    showHeader () {
      return this.$route.path !== '/login'
    },
    showFooter () {
      return this.$route.path !== '/order' && this.$route.path !== '/address'
    },
    viewBoxStyle () {
      if (/address/.test(this.$route.path)) {
        return 'background:rgb(247, 247, 250)'
      }
      return ''
    },
    direction () {
      return this.$store.state.vux.direction
    },
    viewTransition () {
      if (!this.direction) return ''
      return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
    }
  },
  data () {
    return {
      toastShow: true,
      toastMsg: 'success'
    }
  }
}
</script>

<style lang="less">
@import "~vux/src/styles/1px.less";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #263240;
  font-size: 30px;
  height: 100%;
}
.router-view {
  width: 100%;
}
.view-box{

}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  /*will-change: transform;*/
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
  /*perspective: 1000;*/
}

.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(0, 0, 0);
}

.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(0, 0, 0);
}
</style>
