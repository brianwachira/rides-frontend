import axios from 'axios'
const baseUrl = '/ride/'



let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

export default { setToken}