import loginService from '../services/login'
import driverService from '../services/driver'
import passengerService from '../services/passenger'
import rideService from '../services/ride'
import ridesService from '../services/rides'

const loginReducer = (state = null, action) => {
    switch(action.type) {
      case 'LOGIN':
        return action.data
      case 'SET_ADMIN':
        return action.data
      default:
        return state
  
    }

}

export const login = (data) => {
    return async dispatch => {
        const admin = await loginService.login(data)

        console.log(admin.token)
        window.localStorage.setItem(
            'admin', JSON.stringify(admin)
        )
        dispatch({
            type: 'LOGIN',
            data: admin
        })
    }
}

export const initializeUser = userData => {
    return dispatch => {
      driverService.setToken(userData.token)
      passengerService.setToken(userData.token)
      rideService.setToken(userData.token)
      ridesService.setToken(userData.token)
      dispatch({
        type:'SET_ADMIN',
        data: userData
      })
    }
  }

export default loginReducer