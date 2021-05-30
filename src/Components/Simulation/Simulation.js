import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startRide } from '../../reducers/rideReducer'
import './Simulation.scss'


const Simulation = () => {
  
  const dispatch = useDispatch()
  
  const passengersFree = useSelector(({passengers}) => {
    // eslint-disable-next-line array-callback-return
    return passengers.filter(passenger => {
      if((passenger['rides'].some(ride => ride['status'] === "ongoing")) === false){
          return passenger
      }
    })
  })


  const driversFree = useSelector(({drivers}) => {
    // eslint-disable-next-line array-callback-return
    return drivers.filter(driver => {
      if((driver['rides'].some(ride => ride['status'] === "ongoing")) === false){
          return driver
      }
    })
  })
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
    if(randomPassenger && randomDriver) {
      dispatch(startRide(newRide, randomPassenger.id, randomDriver.id))
    }
  }
  return (
      <>
      <p>Passenger Name : {randomPassenger.name}</p>
      <p>Driver Name : {randomDriver.name}</p>
      <p>Pick Up Point : [{pickupPointLat}, {pickupPointLong}]</p>
      <p>Destination Point : [{destinationPointLat}:{destinationPointLong}]</p>
      <button onClick={(event) => handleRides(event)} className="btn btn-primary">Run Simulation</button>
      </>
  )

}
export default Simulation