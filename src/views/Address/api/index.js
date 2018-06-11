
import api from '@/api'

api.getAddressList = params => { return api.get(`/api/shippingAddress/list?id=${params.id}`) }
api.addAddress = params => { return api.post('/api/shippingAddress/add', params) }
api.updateAddress = params => { return api.post('/api/shippingAddress/update', params) }
api.deleteAddress = params => { return api.post('/api/shippingAddress/delete', params) }

export default api
