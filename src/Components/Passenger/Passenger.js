import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { ReactComponent as NothingHereImage } from "../../Assets/Images/empty.svg"
//import Ride from "../Ride/Ride"
import SideBar from "../SideBar/SideBar"
import './Passenger.scss'
const Passenger = (props) => {

    const {id} = useParams()
    const passenger = useSelector(({passengers}) => {
        return passengers.find(passenger => passenger.id === id)
    })

    const drivers = useSelector(state => state.drivers)

    const getDriver = (driverId) => {
        const driver = drivers.find(driver => driver.id === driverId)

        return driver.name
    }

    if(!passenger){
        return <NothingHereImage/>
    }
    return (
        <>
        <main className="container-fluid">
            <div className="row">
                <div className="col-md-3 ps-0">
                    <SideBar/>
                </div>
                <div className="col-md-6 ps-0 px-5 py-5">
                    <p>Passenger Name : {passenger.name}</p>
                    <p>Passenger Phone Number : {passenger.phoneNumber}</p>
                    <h5>Rides</h5>
                    {passenger['rides'].map(ride =>
                        <details key={ride.id}>
                            <summary>Driver : {getDriver(ride.driver)}</summary>
                            <p>Status : {ride.status}</p>
                            <p>Pick Up Point : {ride.pickupPoint}</p>
                            <p>Destination Point : {ride.destinationPoint}</p>
                        </details>
                        )}
                </div>
            </div>
        </main>
        </>
    )

}

export default Passenger