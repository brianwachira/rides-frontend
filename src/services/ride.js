import axios from 'axios'
const baseUrl = 'api/ride'



let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}


const start = async (ride,passengerId,driverId) => {
  const config = {
    headers: { Authorization: token },
  }
  const newUrl = `${baseUrl}/${passengerId}/${driverId}`
  const response = await axios.post(newUrl,ride,config)

  return response.data

}
const stop = async rideId => {
  const config = {
    headers: { Authorization: token },
  }
  const newUrl = `${baseUrl}/${rideId}/stop`
  const response = await axios.post(newUrl,null,config)

  return response.data
  
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { setToken, start, stop}