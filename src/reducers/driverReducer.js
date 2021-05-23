import driverService from '../services/driver'

const driverReducer = (state = [], action) => {
    switch(action.type) {
        case 'INIT_DRIVERS':
            return action.data
        case 'SUSPEND_DRIVER':
            const suspendedDriverId = action.data.id
            
            return state.map(driver => driver.id === suspendedDriverId ? driver.suspended = true : driver)
        case 'UNSUSPEND_DRIVER':
            const unsuspendedDriverId = action.data.id

            return state.map(driver => driver.id === unsuspendedDriverId ? driver.suspended = false : driver)
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

export const suspendDriver = id => {

    return async dispatch => {
        await driverService.suspendDriver(id)
        dispatch({
            type: 'SUSPEND_DRIVER',
            data: {id}
        })
    }
}

export const unsuspendDriver = id => {

    return async dispatch => {
        await driverService.unsuspendDriver(id)
        dispatch({
            type: 'UNSUSPEND_DRIVER',
            data: {id}
        })
    }


}



export default driverReducer