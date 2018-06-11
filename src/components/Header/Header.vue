<template>
  <x-header slot="header"
    :left-options="leftOptions"
    :right-options="rightOptions"
    :title="headerTitle"
    @on-click-more="onClickMore"
    style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>

</template>
<script>
import { XHeader } from 'vux'
import { mapGetters } from 'vuex'

export default {
  components: {
    XHeader
  },
  data () {
    return {
      // leftOptions: {
      //   showBack: true,
      //   backText: '返回'
      // },
      rightOptions: {
        showMore: false
      }
    }
  },
  mounted () {
  },
  computed: {
    ...mapGetters(['headerTitle']),
    leftOptions () {
      return {
        backText: '返回',
        showBack: this.$route.path !== '/home'
      }
    }
  },
  methods: {
    onClickMore () {}
  }
}
</script>
<style lang="less" scoped>

</style>
