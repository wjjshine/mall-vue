import MyInput from './MyInput.vue'
import './my-input.less'
MyInput.install = Vue => {
  Vue.component(MyInput.name, MyInput)
}
export default MyInput
