<template>
  <div class="address-mng-wrap">
    <ul>
      <template v-for="(address,index) in addressList">
        <li class="address-box" :key="index">
          <div class="address-info">
            <p class="consignee">{{address.name}}</p>
            <p class="address">{{address.area}}{{address.detailAddress}}</p>
          </div>
          <div class="address-opt">
            <div class="default-checkbox" @click="changeDefault(index)">
              <i class="iconfont" :class="address.isDefault ? 'mall-icon-circular_fill_selected text-error':'mall-icon-circular_unselected'" @click="toogleSelect(index)"></i>
              {{address.isDefault? '默认地址' : '设为默认'}}
            </div>
            <div class="opt">
               <span class="btn" @click="updateAddress(address)">
                <i class="iconfont mall-icon-delete" ></i>
                 编辑
              </span>
              <span class="btn" @click="openDeleteActionSheet(address,index)">
                <i class="iconfont mall-icon-delete"></i>
                 删除
              </span>
            </div>
          </div>
        </li>
      </template>
    </ul>
    <div class="address-footer">
      <x-button type="warn" @click.native="addAddress">添加新地址</x-button>
    </div>
    <actionsheet v-model="deleteActionSheet" :menus="deleteMenus" show-cancel @on-click-menu="deleteAddress" v-if="deleteActionSheet">
      <p slot="header" v-html="'确定删除这个地址?</span>'"></p>
    </actionsheet>
    <AddUpdateAddress :visible.sync="addupdateVisible" :ad-data="currentAddress" @refresh-page="getAddressList"/>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { Actionsheet } from 'vux'
import AddUpdateAddress from './components/AddUpdateAddress'
export default {
  components: {
    Actionsheet,
    AddUpdateAddress
  },
  data () {
    return {
      deleteActionSheet: false,
      deleteMenus: [{
        key: 'delete',
        label: '删除',
        type: 'warn'
      }],
      showSuccess: false,
      currentAddress: null,
      currentAddressIndex: null,
      addupdateVisible: false

    }
  },
  computed: {
    ...mapGetters({
      'addressList': 'address/addressList',
      'user': 'public/user'
    })
  },
  mounted () {
    this.getAddressList()
  },
  methods: {
    ...mapMutations({
      CHANGE_DEFAULT_ADDRESS: 'address/CHANGE_DEFAULT_ADDRESS',
      SHOW_TOAST: 'SHOW_TOAST'
    }),
    async getAddressList () {
      await this.$store.dispatch('address/getAddressList', this.user._id).catch(err => {
        throw err
      })
    },
    changeDefault (index) {
      this.CHANGE_DEFAULT_ADDRESS(index)
    },
    addAddress () {
      this.currentAddress = null
      this.addupdateVisible = true
    },
    updateAddress (address) {
      this.currentAddress = address
      this.addupdateVisible = true
    },
    openDeleteActionSheet (address, index) {
      this.deleteActionSheet = true
      this.currentAddress = address
      this.currentAddressIndex = index
    },
    async deleteAddress (key, item) {
      if (item.key === 'delete') {
        let data = {
          userId: this.user._id,
          addressId: this.currentAddress._id,
          index: this.currentAddressIndex
        }
        await this.$store.dispatch('address/deleteAddress', data).catch(err => {
          throw err
        })
        this.$vux.toast.show()
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/styles/variable.less';
@import '~vux/src/styles/1px.less';
.address-box{text-align: left;background-color:#fff;
  & +.address-box{margin-top: 20px;}
  &>*{padding:20px 30px;}
  .address-info{
    .consignee{font-size: 35px;margin-bottom:10px;}
  }
  .address-opt{.flex-container;.vux-1px-t;
    &>*{.flex;}
    .iconfont{font-size:30px;}
    .opt{text-align: right;
      .btn{margin-left:10px;
        &:hover,&:active{.text-error;cursor: pointer;

        }
      }
    }
  }
}
.address-footer{position:fixed;left: 0;bottom: 0;right: 0;padding:20px 30px;background-color: #fff;

}
</style>
