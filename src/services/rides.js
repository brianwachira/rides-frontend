import axios from 'axios'
const baseUrl = '/rides'



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
const ongoing = () => {
  
  const config = {
    headers: { Authorization: token },
  }

  const newUrl = `${baseUrl}/ongoing`
  const request = axios.get(newUrl,config)
  return request.then(response => response.data)

}
const done = () => {
  
  const config = {
    headers: { Authorization: token },
  }

  const newUrl = `${baseUrl}/done`
  const request = axios.get(newUrl,config)
  return request.then(response => response.data)

}
export default { setToken, getAll, ongoing, done}