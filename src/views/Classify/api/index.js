import axios from 'axios'

axios.getClassifyList = params => { return axios.get('/api/classify') }
export default axios
