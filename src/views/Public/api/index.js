
import api from '@/api'

api.login = params => { return api.post('/api/users/login', params) }

export default api
