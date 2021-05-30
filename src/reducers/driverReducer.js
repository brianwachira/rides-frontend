import driverService from '../services/driver'

const driverReducer = (state = [], action) => {
    switch(action.type) {
        case 'INIT_DRIVERS':
            return action.data
        case 'NEW_DRIVER':
            return [...state, action.data]
        case 'SUSPEND_DRIVER':
            const suspendedDriverId = action.data.id
            
            return state.map(driver => driver.id === suspendedDriverId ? {...driver,suspended : true} : driver)
        case 'UNSUSPEND_DRIVER':
            const unsuspendedDriverId = action.data.id

            return state.map(driver => driver.id === unsuspendedDriverId ? {...driver, suspended : false} : driver)
        case 'GET_FREE_DRIVERS':
            // eslint-disable-next-line array-callback-return
            return state.filter(driver => {
                if((driver['rides'].some(ride => ride['status'] === "ongoing")) === false){
                    return driver
                }

            })

        default:
            return state
    }
}

export const initializeDrivers = () => {
    return async dispatch => {
        const drivers = await driverService.getAll()

        dispatch ({
            type: 'INIT_DRIVERS',
            data: drivers
        })
    }
}

export const addDriver = driver => {
    return async dispatch => {
        const newDriver = await driverService.create(driver)
        dispatch({
            type: 'NEW_DRIVER',
            data: newDriver
        })
    }
}
export const suspendDriver = id => {

    return async dispatch => {
        await driverService.suspend(id)
        dispatch({
            type: 'SUSPEND_DRIVER',
            data: {id}
        })
    }
}

export const unsuspendDriver = id => {

    return async dispatch => {
        await driverService.unsuspend(id)
        dispatch({
            type: 'UNSUSPEND_DRIVER',
            data: {id}
        })
    }


}

export const getFreeDrivers = () => {
    return dispatch => {
        dispatch({
            type: 'GET_FREE_DRIVERS'
        })
    }
}



export default driverReducer