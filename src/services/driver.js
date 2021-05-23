import axios from 'axios'
const baseUrl = '/driver'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}
const getAll = () => {
    const config = {
      headers: { Authorization: token },
    }
    const newUrl = `${baseUrl}/all`
    const request = axios.get(newUrl,config)
    return request.then(response => response.data)
}

const create = async newObject => {
    const config = {
      headers: { Authorization: token },
    }
    const response = await axios.post(baseUrl,newObject,config)
    return response.data
    
}

const unsuspend = async driverId => {

    const config = {
        headers: { Authorization: token},
        
    }
    const newUrl = `${baseUrl}/${driverId}/suspend`

    const response = await axios.delete(newUrl, config)

    return response.data

}


const suspend = async driverId => {

    const config = {
        headers: { Authorization: token},
        
    }
    const newUrl = `${baseUrl}/${driverId}/suspend`

    const response = await axios.post(newUrl, null,config)

    return response.data

}


export default { getAll, create, setToken, suspend, unsuspend}