import axios from 'axios'
const baseUrl = '/passenger/'


let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

export default { setToken}