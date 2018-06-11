<template>
  <div class="login-wrap">
    <div class="login-wrap-head">
      <div class="logo-box">
        <img src="../../assets/logo.png" alt="">
      </div>
      <h5 class="ignore login-text">Login</h5>
    </div>
    <div class="login-form">
      <!-- <x-input type="tel" v-model="phone" placeholder="请输入11位手机号码" is-type="china-mobile" ref="refPhone" @on-change="keyDown" /> -->
      <x-input v-model="name" placeholder="请输入姓名"  ref="refName" @on-change="keyDown" />
      <x-input type="password" v-model="pwd" placeholder="请输入密码"  ref="refPwd" @on-change="keyDown" />
      <x-button type="primary" class="ignore" :disabled="disabled" @click.native="login">登录</x-button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
// import api from './api'
export default {
  data () {
    return {
      name: 'admin',
      phone: '18305987654',
      pwd: 'admin',
      disabled: true
    }
  },
  computed: {
    ...mapGetters({
      'tabBarActiveText': 'tabBarActiveText'
    })
  },
  mounted () {
  },
  methods: {
    ...mapMutations({
      SHOW_TOAST: 'SHOW_TOAST'
    }),
    keyDown () {
      if (this.name !== '' && this.pwd !== '') {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    async login () {
      let user = {name: this.name, phone: this.phone, password: this.pwd}
      await this.$store.dispatch('public/login', user).catch(err => {
        // this.SHOW_TOAST({show: true, type: 'warn', msg: err.desc})
        this.$vux.toast.show({text: err.desc, type: 'warn'})
        throw err
      })
      if (this.$route.query.redirect) {
        this.$router.push({path: this.$route.query.redirect})
      } else {
        this.$router.push({path: '/home'})
      }
    }
  }
}
</script>
<style lang="less">
.login-wrap{
  &-head{margin-bottom:20px;padding:20px 0;font-size: 40px;background-color:#f0f1f4;
    .logo-box{width:200px;margin: 0 auto;
      img{width:100%}
    }
  }
  .login-form{width:600px;margin:0 auto;padding:40px 0;
    .weui-btn{margin-top:10px;}
  }
}

</style>
