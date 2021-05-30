import { createStore, combineReducers, applyMiddleware}  from 'redux'
import loginReducer from './loginReducer'
import driverReducer from './driverReducer'
import passengerReducer from './passengerReducer'
import thunk from 'redux-thunk'
import rideReducer from './rideReducer'
import notificationReducer from './notificationReducer'
const reducer = combineReducers ({
    admin: loginReducer,
    drivers: driverReducer,
    passengers: passengerReducer,
    rides: rideReducer,
    notification: notificationReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store