import Vue from 'vue'

const toDecimal = Vue.filter('toDecimal', (x) => {
  var f = 0
  if (typeof (x) === 'string') {
    if (x !== null && x !== '') {
      f = parseFloat(x)
    }
  } else {
    f = x
  }
  f = f.toFixed(2)
  return f
})
export default {toDecimal}
