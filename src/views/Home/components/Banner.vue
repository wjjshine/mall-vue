<template>
   <swiper :aspect-ratio="310/1090"
            loop
            auto
            dots-position="center"
            :duration="800">
            <swiper-item class="swiper-item"
                v-for="(item, index) in list"
                :key="index"
                @click.native="linkToDetail(item.key_word)">
                <img :src="item.img.url"
                    alt="image">
            </swiper-item>
        </swiper>
</template>
<script>
import { Swiper, SwiperItem } from 'vux'
export default {
  components: { Swiper, SwiperItem },
  data () {
    return {
      index: 0,
      list: [{
        'key_word': '6',
        'type': 1,
        'img': {
          'url': require('../../../assets/banner/baby.jpg')
        }
      }, {
        'key_word': '25',
        'type': 1,
        'img': {
          'url': require('../../../assets/banner/food.jpg')
        }
      }, {
        'key_word': '11',
        'type': 1,
        'img': {
          'url': require('../../../assets/banner/kitchen.jpg')
        }
      }]
    }
  },
  methods: {
    linkToDetail () {

    }
  }
}
</script>
<style lang="less" scoped>
.vux-slider{
  .vux-swiper-item{
    img{width:100%}
  }
}

</style>
