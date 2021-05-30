import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFreeDrivers } from '../../reducers/driverReducer'
import { setNotification } from '../../reducers/notificationReducer'
import { getFreePassengers } from '../../reducers/passengerReducer'
import { startRide } from '../../reducers/rideReducer'
import './Simulation.scss'


const Simulation = () => {
  
  const dispatch = useDispatch()
  
  const passengersFree = useSelector(state => state.passengers) 


  const driversFree = useSelector(state => state.drivers) 

  const randomPassenger = passengersFree[Math.floor(Math.random() * passengersFree.length)];
  const randomDriver = driversFree[Math.floor(Math.random() * driversFree.length)];

  const getRandomInRange = (from, to, fixed) => {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number  
  }

  const pickupPointLat = getRandomInRange(-180,180,3)
  const pickupPointLong = getRandomInRange(-180,180,3)
  const destinationPointLat = getRandomInRange(-180,180,2)
  const destinationPointLong = getRandomInRange(-180,180,2)

  const newRide = {
    pickupPoint :[pickupPointLat,pickupPointLong],
    destinationPoint : [destinationPointLat, destinationPointLong]
  }

  const handleRides = (event) => {
    event.preventDefault()
    
    try{
      if(randomPassenger && randomDriver) {
        dispatch(startRide(newRide, randomPassenger.id, randomDriver.id))

        dispatch(getFreePassengers())
        dispatch(getFreeDrivers())
      }
      dispatch(setNotification({
        title: 'Start Ride Success',
        message: 'Start Ride Succesfull'
      }))
      setTimeout(()=> {
        dispatch(setNotification(''))
  
      },5000)
    }catch(exception){
      const notification = {
        status:'error',
        message: 'Either Driver Or Passenger Is On Ride'
      }
      dispatch(setNotification(notification))
      setTimeout(() =>  {
        dispatch(setNotification({
          status: '',
          message: ''
        }))
      }, 5000)

    }

  }

  if(!randomDriver) {
    return <p className="text-center px-5 py-5">All Drivers Are ON The Road Or Suspended</p>
  }
  if(!randomPassenger) {
    return <p className="text-center px-5 py-5">All Passengers Are ON The Road</p>
  }
  return (
      <>
      <div className="px-4 py-4">
        <p>Passenger Name : {randomPassenger.name}</p>
        <p>Driver Name : {randomDriver.name}</p>
        <p>Pick Up Point : [{pickupPointLat}, {pickupPointLong}]</p>
        <p>Destination Point : [{destinationPointLat}:{destinationPointLong}]</p>
        <button onClick={(event) => handleRides(event)} className="btn btn-primary">Run Simulation</button>
      </div>
      </>
  )

}
export default Simulation