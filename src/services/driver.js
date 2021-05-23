import axios from 'axios'
const baseUrl = '/driver/'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}
const getAll = () => {
    const newUrl = `${baseUrl}/all`
    const request = axios.get(newUrl)
    return request.then(response => response.data)
}

const suspendDriver = async driverId => {
    const config = {
        headers: { Authorization: token},
        
    }
    const newUrl = `${baseUrl}/${driverId}/suspend`

    const response = await axios.post(newUrl, config)

    return response.data

}

const unsuspendDriver = async driverId => {
    const config = {
        headers: { Authorization: token},
        
    }
    const newUrl = `${baseUrl}/${driverId}/suspend`

    const response = await axios.delete(newUrl, config)

    return response.data

}
export default { getAll, setToken, suspendDriver, unsuspendDriver}