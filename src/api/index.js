import axios from 'axios'

const api = axios.create({timeout: 20000})
// 请求 拦截器
api.interceptors.request.use(
  config => (config),
  err => {
    return Promise.reject(err)
  }
)
// 响应 拦截器
api.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    const {status, data} = err.response
    if (status === 400) {
      console.log('账号异常')
    }
    if (status === 401) {
      alert('无权限')
    }
    if (status === 500) {
      alert('系统错误')
    }
    return data ? Promise.reject(data) : Promise.reject(err.response)
  }
)
export default api
