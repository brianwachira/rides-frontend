import React from 'react'
import {useSelector} from 'react-redux'

import './Notification.scss'

const Notification = () => {

  const notification = useSelector(state => state.notification)

  if(!notification){
      return null
  }
  return (
        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <img src="..." className="rounded me-2" alt="..."/>
                <strong className="me-auto">{notification.title}</strong>
                <small className="text-muted">just now</small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
                {notification.message}
            </div>
      </div>
  )
}

export default Notification