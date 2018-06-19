import axios from 'axios'

axios.getClassifyList = params => { return axios.post('/api/classify/list') }
export default axios
