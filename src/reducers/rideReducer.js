import rideService from '../services/ride'
import ridesService from '../services/rides'
const rideReducer = ( state = [], action) => {
    switch(action.type) {
        case 'INIT_RIDES' :
            return action.data
        case 'START_RIDE':
            return [...state, action.data]
        case 'STOP_RIDE':
            const rideId = action.data.id

            return state.map(ride => ride.id === rideId ? action.data : ride)
        case 'ONGOING_RIDES':
            return action.data
        case 'DONE_RIDES':
            return action.data
        default:
            return state
    }
}


export const initializeRides = () => {

    return async dispatch => {
        const rides = await ridesService.getAll()

        dispatch({
            type: 'INIT_RIDES',
            data: rides
        })
    }
}

export const startRide = (passengerId,driverId) => {

    return async dispatch => {
        const newRide = await rideService.start(passengerId,driverId)

        dispatch({
            type: 'START_RIDE',
            data: newRide
        })
    }
}

export const stopRide = rideId => {

    return async dispatch => {
        const stoppedRide = await rideService.stop(rideId)

        dispatch({
            type: 'STOP_RIDE',
            data: stoppedRide
        })
    }
}

export const getOngoingRides = () => {

    return async dispatch => {
        const ongoingRides = await ridesService.ongoing()

        dispatch({
            type: 'ONGOING_RIDES',
            data: ongoingRides
        })
    }
}

export const getDoneRides = () => {

    return async dispatch => {
        const doneRides = await ridesService.done()

        dispatch({
            type: 'DONE_RIDES',
            data: doneRides
        })
    }
}

export default rideReducer