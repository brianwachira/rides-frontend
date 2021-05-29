import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as NothingHereImage } from "../../Assets/Images/empty.svg"
import Table from '../../Components/Table/Table'
import { getDoneRides, getOngoingRides, initializeRides, stopRide } from '../../reducers/rideReducer'
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet'
import './Rides.scss'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useState } from 'react'
import SideBar from '../../Components/SideBar/SideBar'

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
        <main className="container-fluid">
            <div className="row">
                <div className="col-md-3 ps-0">
                    <SideBar/>
                </div>
                <div className="col-md-3 ps-0">
                    <NothingHereImage/>
                </div>
            </div>
        </main>
    }

    const stop = (id) => {

        dispatch(stopRide(id))
    }
    const[polylines, setPolylines ]= useState([ [51.505, -0.09],[51.51, -0.1]])
    const polyline = [
        [51.505, -0.09],
        [51.51, -0.1],
      ]
      const limeOptions = { color: 'blue' }


      const showCoordinates = (pickupPoint,destinationPoint) => {

            //console.log(pickupPoint)
            //console.log(destinationPoint)
            setPolylines([pickupPoint,destinationPoint])

            console.log(polylines)
      }

      const ChangeView = ({center}) =>{
          const map = useMap()
          map.flyTo(center)
          return null;
      }


    return (
        <>
        <main className="container-fluid">
            <div className="row">
                <div className="col-md-3 py-0 px-0">
                    <SideBar/>
                </div>
                <div className="col-md-9">
                    <h3 className="my-5">Rides</h3>
                    <div className="card">
                        <div className="card-header">
                            <ul className="nav nav-pills" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="ongoing-tab" data-bs-toggle="tab" data-bs-target="#ongoing" type="button" role="tab" aria-controls="ongoing" aria-selected="true" onClick={() => dispatch(getOngoingRides())}>Ongoing Rides</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="done-tab" data-bs-toggle="tab" data-bs-target="#done" type="button" role="tab" aria-controls="done" aria-selected="false" onClick={() => dispatch(getDoneRides())}>Done Rides</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button" role="tab" aria-controls="all" aria-selected="false" onClick={()=> dispatch(initializeRides())}>All Rides</button>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="ongoing" role="tabpanel" aria-labelledby="ongoing-tab">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Table
                                        rides={ongoingRides}
                                        handleClick={stop}
                                        buttonLabel='Stop Ride'
                                        setCoordinates={showCoordinates}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <MapContainer 
                                            center={polylines[0]} 
                                            zoom={13} 
                                            scrollWheelZoom={true}        
                                            style={{ height:"400px", marginLeft:"10px", marginRight:"10px", marginTop:"40px", marginBottom:'10px', borderRadius:"3px"}} className="bg-map">
                                                <ChangeView center={polylines[0]}/>
                                                <TileLayer
                                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                />
                                                <Marker position={polylines[0]}>
                                                    <Popup>
                                                    Pickup Point
                                                    </Popup>
                                                </Marker>
                                                <Marker position={polylines[1]}>
                                                    <Popup>
                                                    Destination Point
                                                    </Popup>
                                                </Marker>
                                                <Polyline pathOptions={limeOptions} positions={polylines} />
                                        </MapContainer>  
                                    </div>
                                </div>               
                            </div>
                            <div className="tab-pane fade" id="done" role="tabpanel" aria-labelledby="done-tab">
                                <Table
                                rides={doneRides}/> 
                            </div>
                            <div className="tab-pane fade" id="all" role="tabpanel" aria-labelledby="all-tab">
                                <Table
                                rides={allRides}/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>          
        </>
    )
}

export default Rides