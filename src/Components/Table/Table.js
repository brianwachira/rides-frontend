import React from "react"

const Table = (props) => {
    const {rides, handleClick , buttonLabel, setCoordinates} = props

    const OptionsButton = () => {
        if(buttonLabel){
            return <th>Options</th>
        }
        return null
    }

    const Options = (rideId) => {

        if(buttonLabel) {
            return(
            <td>
                <div className="btn-group">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"  data-bs-target="#dropdownMenuButton" aria-expanded="false">
                        
                    </button>
                    <ul className="dropdown-menu" id="dropdownMenuButton" aria-labelledby="dropdownMenuButton">
                        <li className="dropdown-item"  onClick={() => handleClick(rideId)} >{buttonLabel}</li>
                    </ul>
                </div> 
            </td> 
            )
        }
        return null
    }
    return (
        <>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="table-blue text-light">
                        <tr>
                            <th>#</th>
                            <th>Pickup Point</th>
                            <th>Destination Point</th>
                            <th>Driver</th>
                            <th>Passenger</th>
                            <th>Status</th>
                            <OptionsButton/>
                        </tr>
                    </thead>
                    <tbody>
                        {rides.map((ride, index) =>
                            <tr
                                key={ride.id}
                                onClick={setCoordinates? () => setCoordinates(ride.pickupPoint,ride.destinationPoint) : null}>
                                <td>{index+1}</td>
                                <td>{ride.pickupPoint.toString()}</td>
                                <td>{ride.destinationPoint.toString()}</td>
                                <td>{ride.driver["name"]}</td>
                                <td>{ride.passenger["name"]}</td>
                                <td>{ride.status === 'ongoing' ? <span className="badge bg-orange">Ongoing</span> : <span className="badge bg-blue">Done</span>}</td>
                                {Options(ride.id)}
                            </tr>
                            )}                    
                    </tbody>
                </table>  
            </div>                  
        </>
    )

}
export default Table