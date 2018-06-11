
import api from '@/api'

api.getAddressList = params => { return api.get(`/api/shippingAddress/list/${params.id}`) }
api.addAddress = params => { return api.post('/api/shippingAddress/add', params) }
api.updateAddress = params => { return api.put('/api/shippingAddress/update', params) }
api.deleteAddress = params => { return api.delete(`/api/shippingAddress/delete/${params.userId}/${params.addressId}`) }

export default api
