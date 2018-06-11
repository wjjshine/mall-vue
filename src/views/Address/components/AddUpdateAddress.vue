<template>
  <div class="add-update-address" v-transfer-dom>
    <popup v-model="visible" height="100%" :popup-style="{zIndex:501}" @on-show="open" @on-hide="resetFrom">
      <div class="vux-header">
        <div class="vux-header-left" @click="close">
          <a class="vux-header-back">返回 </a><div class="left-arrow"></div>
        </div>
        <h1 class="vux-header-title"><span>{{adData ? '编辑地址':'新增地址'}}</span></h1>
      </div>
      <group class="from">
        <x-input
          ref="name"
          title="收货人"
          v-model="from.name"
          required></x-input>
        <x-input
          ref="phone"
          title="联系电话"
          v-model="from.phone"
          type="tel"
          is-type="china-mobile"
          required></x-input>
        <x-address
          ref="area"
          :popup-style="{zIndex:505}"
          title="所在地区"
          v-model="from.areaId"
          :list="addressData"
          @on-shadow-change="onShadowChange"
          placeholder="请选择地址"
          :show.sync="showAddress"
          required></x-address>
        <x-input
          ref="detailAddress"
          title="详细地址"
          v-model="from.detailAddress"
          required></x-input>
      </group>
      <div style="padding: 15px;">
        <x-button type="warn" @click.native="submit">保存</x-button>
      </div>
    </popup>
  </div>
</template>
<script>
import { XAddress, ChinaAddressV4Data } from 'vux'
import { mapMutations, mapGetters } from 'vuex'
export default {
  components: {
    XAddress
  },
  props: {
    visible: {
      default: false,
      type: Boolean
    },
    adData: {
      default: null
    }
  },
  data () {
    return {
      default: null,
      addressData: ChinaAddressV4Data,
      from: {
        ofUser: null,
        name: '',
        phone: '',
        areaId: [],
        area: '',
        detailAddress: ''
      },
      showAddress: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'public/user'
    })
  },
  mounted () {
  },
  methods: {
    ...mapMutations({
      SHOW_TOAST: 'SHOW_TOAST'
    }),
    open () {
      if (this.adData) {
        this.from = this.$Lodash.cloneDeep(this.adData)
      }
    },
    close () {
      this.$emit('update:visible', false)
    },
    onShadowChange (ids, names) {
      this.from.area = String(names)
    },
    submit () {
      if (!(this.$refs.name.valid && this.$refs.phone.valid && this.from.areaId.length > 0 && this.$refs.detailAddress.valid)) {
        this.SHOW_TOAST({show: true, msg: '请正确填写表单', type: 'warn'})
        return true
      }
      // this.from.ofUser = this.user._id
      this.adData ? this.update() : this.add()
    },
    async add () {
      this.from.isDefault = false
      await this.$store.dispatch('address/add', this.from).catch(err => {
        this.$vux.toast.show(err)
        throw err
      })
      this.$vux.toast.show()
      this.close()
      this.$emit('refresh-page')
    },
    async update () {
      await this.$store.dispatch('address/update', this.from).catch(err => {
        this.$vux.toast.show(err)
        throw err
      })
      this.$vux.toast.show()
      this.close()
      this.$emit('refresh-page')
    },
    resetFrom () {
      this.$refs.name.reset()
      this.$refs.phone.reset()
      this.from.areaId = []
      this.$refs.detailAddress.reset()
    }
  }
}
</script>
