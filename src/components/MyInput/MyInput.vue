<template>
  <div class="my-input">
    <input class="input" v-model="model" :disabled="disabled" :placeholder="placeholder" >
  </div>
</template>
<script>
export default {
  name: 'MyInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      model: ''
    }
  }
}
</script>
