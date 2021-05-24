import axios from 'axios'
const baseUrl = '/ride'



let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}


const start = async (passengerId,driverId) => {
  const config = {
    headers: { Authorization: token },
  }
  const newUrl = `${baseUrl}/${passengerId}/${driverId}`
  const response = await axios.post(newUrl,config)

  return response.data

}
const stop = async rideId => {
  const config = {
    headers: { Authorization: token },
  }
  const newUrl = `${baseUrl}/${rideId}/stop`
  const response = await axios.post(newUrl,config)

  return response.data
  
}

export default { setToken, start, stop}