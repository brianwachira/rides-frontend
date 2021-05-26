import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as NothingHereImage } from "../../Assets/Images/empty.svg"
import Table from '../../Components/Table/Table'
import { getDoneRides, getOngoingRides, initializeRides, stopRide } from '../../reducers/rideReducer'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import './Rides.scss'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const Rides = () => {
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    
    L.Marker.prototype.options.icon = DefaultIcon;
    const dispatch = useDispatch()

    const allRides = useSelector(state => state.rides)

    const ongoingRides = allRides.filter(ride => ride.status === 'ongoing')
    const doneRides = allRides.filter(ride => ride.status === 'done')

    if(!allRides){
        <NothingHereImage/>
    }

    const stop = (id) => {

        dispatch(stopRide(id))
    }
    const polyline = [
        [51.505, -0.09],
        [51.51, -0.1],
      ]
      const limeOptions = { color: 'blue' }
    return (
        <>
            <p>Rides</p>

            
            <ul className="nav nav-tabs nav-pills" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="ongoing-tab" data-bs-toggle="tab" data-bs-target="#ongoing" type="button" role="tab" aria-controls="ongoing" aria-selected="true">Ongoing Rides</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="done-tab" data-bs-toggle="tab" data-bs-target="#done" type="button" role="tab" aria-controls="done" aria-selected="false">Done Rides</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="false">All Rides</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="ongoing" role="tabpanel" aria-labelledby="ongoing-tab" onClick={() => dispatch(getOngoingRides())}>
                    <div className="row">
                        <div className="col-md-6">
                            <Table
                            rides={ongoingRides}
                            handleClick={stop}
                            buttonLabel='Stop Ride'/>
                        </div>
                        <div className="col-md-6">
                            <MapContainer 
                                center={[51.505, -0.09]} 
                                zoom={13} 
                                scrollWheelZoom={false}        
                                style={{ height:"400px",marginTop:"40px", marginBottom:'90px'}} className="bg-map">
                                    <TileLayer
                                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={polyline[0]}>
                                        <Popup>
                                        Pickup Point
                                        </Popup>
                                    </Marker>
                                    <Marker position={polyline[1]}>
                                        <Popup>
                                        Destination Point
                                        </Popup>
                                    </Marker>
                                    <Polyline pathOptions={limeOptions} positions={polyline} />
                            </MapContainer>                    
                        </div>
                    </div>               
                </div>
                <div className="tab-pane fade" id="done" role="tabpanel" aria-labelledby="done-tab" onClick={() => dispatch(getDoneRides())}>
                    <Table
                    rides={doneRides}/> 
                </div>
                <div className="tab-pane fade" id="all" role="tabpanel" aria-labelledby="all-tab" onClick={()=> dispatch(initializeRides())}>
                    <Table
                    rides={allRides}/> 
                </div>
            </div>          
        </>
    )
}

export default Rides