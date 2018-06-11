import Axios from 'axios'

Axios.getSelectedList = params => { return Axios.get('/api/selected') }
Axios.getBillboardList = params => { return Axios.get('/api/billboard') }

export default Axios
