import Axios from 'axios'

Axios.getSelectedList = params => { return Axios.get('/api/product/selected') }
Axios.getBillboardList = params => { return Axios.get('/api/product/billboard') }

export default Axios
