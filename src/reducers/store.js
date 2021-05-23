import { createStore, combineReducers, applyMiddleware}  from 'redux'
import loginReducer from './loginReducer'
import driverReducer from './driverReducer'
import thunk from 'redux-thunk'
const reducer = combineReducers ({
    admin: loginReducer,
    driver: driverReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store