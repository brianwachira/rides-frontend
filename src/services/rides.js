import axios from 'axios'
const baseUrl = 'api/rides'



let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}
const getAll = async () => {
  
  const config = {
    headers: { Authorization: token },
  }

  const newUrl = `${baseUrl}/all`
  const request = axios.get(newUrl,config)
  const response = await request
  return response.data
  
}
const ongoing = async () => {
  
  const config = {
    headers: { Authorization: token },
  }

  const newUrl = `${baseUrl}/ongoing`
  const request = axios.get(newUrl,config)
  const response = await request
  return response.data

}
const done = async () => {
  
  const config = {
    headers: { Authorization: token },
  }

  const newUrl = `${baseUrl}/done`
  const request = axios.get(newUrl,config)
  const response = await request
  return response.data

}

// eslint-disable-next-line import/no-anonymous-default-export
export default { setToken, getAll, ongoing, done}