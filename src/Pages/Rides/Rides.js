import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as NothingHereImage } from "../../Assets/Images/empty.svg"
import Table from '../../Components/Table/Table'
import { stopRide } from '../../reducers/rideReducer'
import './Rides.scss'
const Rides = () => {

    const dispatch = useDispatch()

    const ongoingRides = useSelector(({rides}) => {
        return rides.filter(ride => ride.status === 'ongoing')
    })
    const ongoing = useSelector(state => state.rides)

    const [ridesToShow, setRidesToShow] = useState(ongoingRides)

    if(!ridesToShow){
        <NothingHereImage/>
    }

    const stop = (id) => {

        dispatch(stopRide(id))
    }
    return (
        <>
            <p>Rides</p>
            <button className="btn btn-primary">All Rides</button>
            <button className="btn btn-primary">Upcoming Rides</button>
            <button className="btn btn-primary">Done Rides</button>
            <Table
            rides={ongoing}
            handleClick={stop}
            buttonLabel='Stop Ride'/>

            
        </>
    )
}

export default Rides