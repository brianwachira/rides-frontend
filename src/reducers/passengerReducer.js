import passengerService from '../services/passenger'

const passengerReducer = (state = [], action) => {
    switch(action.type) {
        case 'INIT_PASSENGERS':
            return action.data
        case 'NEW_PASSENGER':
            return [...state, action.data]
        case 'GET_FREE_PASSENGERS':
            return state.filter(passenger => {
                if((passenger['rides'].some(ride => ride['status'] === "ongoing")) === false){
                    return passenger
                }

            })
        default :
            return state
    }
}

export const initializePassengers = () => {
    return async dispatch => {
        const passengers = await passengerService.getAll()

        dispatch({
            type: 'INIT_PASSENGERS',
            data: passengers
        })
    }
}

export const addPassenger = passenger => {
    return async dispatch => {
        const newPassenger = await passengerService.create(passenger)

        dispatch({
            type: 'NEW_PASSENGER',
            data: newPassenger
        })
    }
}
export const getFreePassengers = () => {
    return dispatch => {
        dispatch({
            type: 'GET_FREE_PASSENGERS'
        })
    }
}
export default passengerReducer