import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { ReactComponent as NothingHereImage } from "../../Assets/Images/empty.svg"
import SideBar from "../SideBar/SideBar"

const Driver = (props) => {

    
    const {id} = useParams()
    const driver = useSelector(({drivers}) => {
        return drivers.find(driver =>  driver.id === id)
    })

    const passengers = useSelector(state=> state.passengers)

    const getPassenger = (passengerId) => {
           const passenger =passengers.find(passenger => passenger.id === passengerId)

           return passenger.name
    }

    if(!driver){
        return <NothingHereImage/>
    }
    return (
        <>
            <main className="container-fluid">
                <div className="row">
                    <div className="col-md-3 ps-0">
                        <SideBar/>
                    </div>
                    <div className="col-md-3 ps-0 px-5 py-5">
                        <p>Driver Name :{driver.name}</p>
                        <p>Driver Phone Number : {driver.phoneNumber}</p>
                        <h5>Rides</h5>
                        {driver['rides'].map(ride => 
                            <details key={ride.id}>
                                <summary>Passenger : {getPassenger(ride.passenger)}</summary>
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

export default Driver