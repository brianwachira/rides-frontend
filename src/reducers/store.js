import { createStore, combineReducers, applyMiddleware}  from 'redux'
import loginReducer from './loginReducer'
import driverReducer from './driverReducer'
import passengerReducer from './passengerReducer'
import thunk from 'redux-thunk'
const reducer = combineReducers ({
    admin: loginReducer,
    drivers: driverReducer,
    passengers: passengerReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store