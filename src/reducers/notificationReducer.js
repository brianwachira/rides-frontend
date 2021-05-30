const notificationReducer = (state = '', action) => {
    switch(action.type) {
      case 'SET_NOTIFICATION':
        state = action.data
        return state
      default:
        return state
    }
  }
  
  
  export const setNotification = notification => {
    return {
      type: 'SET_NOTIFICATION',
      data: notification
    }
  }
  
  export default notificationReducer