<template>
  <div class="add-update-address" v-transfer-dom>
    <popup v-model="visible" height="100%" :popup-style="{zIndex:501}">
      <div class="vux-header">
        <div class="vux-header-left" @click="close">
          <a class="vux-header-back">返回</a><div class="left-arrow"></div>
        </div>
        <h1 class="vux-header-title"><span>新增地址</span></h1>
      </div>
      <group class="from">
        <x-input title="收货人" v-model="from.consignee"></x-input>
        <x-input title="联系电话" v-model="from.phone"></x-input>
        <x-address :popup-style="{zIndex:505}" @on-hide="logHide" @on-show="logShow" title="所在地区" v-model="from.area" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址" :show.sync="showAddress"></x-address>
        <x-input title="详细地址" v-model="from.detailAddress"></x-input>
      </group>
      <div style="padding: 15px;">
        <x-button type="warn" @click.native="submit">保存</x-button>
      </div>
    </popup>
  </div>
</template>
<script>
import { XAddress, ChinaAddressV4Data } from 'vux'
export default {
  components: {
    XAddress
  },
  props: {
    visible: {
      default: false,
      type: Boolean
    },
    data: {
      default: null
    }
  },
  data () {
    return {
      default: null,
      addressData: ChinaAddressV4Data,
      from: {
        consignee: '',
        phone: '',
        area: [],
        detailAddress: ''
      },
      showAddress: false
    }
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    },
    logHide (str) {
      console.log('on-hide', str)
    },
    logShow (str) {
      console.log('on-show')
      this.showAddress = true
    },
    onShadowChange (ids, names) {
      console.log(ids, names)
    }
  }
}
</script>
