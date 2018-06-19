<template>
  <div v-if="visible" class="empty">
    暂无数据
  </div>
</template>
<script>
export default {
  name: 'Empty',
  props: {
    visible: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.empty{font-size:18px;color:#8492a6;padding:30px;

}
</style>
