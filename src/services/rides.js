import axios from 'axios'
const baseUrl = '/rides/'



let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

export default { setToken}