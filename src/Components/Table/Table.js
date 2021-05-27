import React from "react"

const Table = (props) => {
    // setCoordinates([ride.pickupPoint],[ride.destinationPoint])
    const {rides, handleClick , buttonLabel, setCoordinates} = props

    return (
        <>
                <table className="table table-striped table-hover table-responsive">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Pickup Point</th>
                            <th>Destination Point</th>
                            <th>Driver</th>
                            <th>Passenger</th>
                            <th>Status</th>
                            {buttonLabel ? <th>Options</th> : ''}
                        </tr>
                    </thead>
                    <tbody>
                        {rides.map((ride, index) =>
                            <tr
                                key={ride.id}
                                onClick={setCoordinates? () => setCoordinates(ride.pickupPoint,ride.destinationPoint) : null}>
                                <td>{index}</td>
                                <td>{ride.pickupPoint.toString()}</td>
                                <td>{ride.destinationPoint.toString()}</td>
                                <td>{ride.driver["name"]}</td>
                                <td>{ride.passenger["name"]}</td>
                                <td>{ride.status}</td>
                                {buttonLabel ?
                                <td>
                                    <div className="btn-group">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"  data-bs-target="#dropdownMenuButton" aria-expanded="false">
                                            
                                        </button>
                                        <ul className="dropdown-menu" id="dropdownMenuButton" aria-labelledby="dropdownMenuButton">
                                            <li className="dropdown-item"  onClick={() => handleClick(ride.id)} >{buttonLabel}</li>
                                        </ul>
                                    </div> 
                                </td>
                                :
                                ''
                                 }
                            </tr>
                            )}                    
                    </tbody>
                </table>                    
        </>
    )

}
export default Table