import React from "react"

const Table = (props) => {

    const {rides, handleClick , buttonLabel} = props

    return (
        <>

            {rides.length < 1 ?
            
                <>hello</>
                :
                rides.map(ride => 
                    

                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Pickup Point</th>
                            <th>Destination Point</th>
                            <th>Driver</th>
                            <th>Passenger</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rides.map((ride, index) =>
                            <tr
                                key={ride.id}>
                                <td>{index}</td>
                                <td>{ride.pickupPoint}</td>
                                <td>{ride.destinationPoint}</td>
                                <td>{ride.driver}</td>
                                <td>{ride.passenger}</td>
                                <td>{ride.status}</td>
                                <td>
                                    <div className="btn-group">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"  data-bs-target="#dropdownMenuButton" aria-expanded="false">
                                            
                                        </button>
                                        <ul className="dropdown-menu" id="dropdownMenuButton" aria-labelledby="dropdownMenuButton">
                                            <li className="dropdown-item" onClick={handleClick}>{buttonLabel}</li>
                                        </ul>
                                    </div> 
                                </td>
                            </tr>
                            )}                    
                    </tbody>
                </table>                    )
            }
        </>
    )

}
export default Table