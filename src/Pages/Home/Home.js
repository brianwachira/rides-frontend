import React from "react" 
import { useSelector } from "react-redux"
import Card from "../../Components/Card/Card"
import SideBar from '../../Components/SideBar/SideBar'
import { Link } from 'react-router-dom'
import './Home.scss'
const Home = () => {

    const rides = useSelector(state => state.rides)
    const ongoingRides = rides.filter(ride => ride.status === 'ongoing')
    return (
        <>
        <main className="container-fluid">
            <div className="row">
                <div className="col-md-3 ps-0 px-0">
                    <SideBar/>

                </div>
                <div className="col-md-3 mt-5">
                    <Link to="/rides">
                        <Card
                            icon={<i className="fa fa-globe fa-4x icon-custom" aria-hidden="true"></i>}
                            label='All Rides'
                            number={rides.length}
                        />
                    </Link>
                </div>
                <div className="col-md-3 mt-5">
                    <Link to="/rides">
                        <Card
                            icon={<i className="fa fa-motorcycle fa-4x icon-custom" aria-hidden="true"></i>}
                            label='No. Of ongoing Rides'
                            number={ongoingRides.length}
                            />
                    </Link>

                </div>
                <div className="col-md-3 mt-5">
                    <Link to="/rides">
                        <Card
                            icon={<i className="fa fa-check-circle fa-4x icon-custom" aria-hidden="true"></i>}
                            label='No. Of Done Rides'
                            number={ongoingRides.length}
                            />
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3 mt-5">
                    <Link to="/passengers">
                        <Card
                            icon={<i className="fa fa-check-circle fa-4x icon-custom" aria-hidden="true"></i>}
                            label='All Passengers'
                            number='20'
                            />
                    </Link>
                </div>
                <div className="col-md-3 mt-5">
                    <Link to="/passengers">
                        <Card
                            icon={<i className="fa  fa-user fa-4x icon-custom" aria-hidden="true"></i>}
                            label='No. Of Passengers On Rides'
                            number='20'
                            />
                    </Link>
                </div>
                <div className="col-md-3 mt-5">
                    <Link to="/passengers">
                        <Card
                            icon={<i className="fa  fa-user fa-4x icon-custom" aria-hidden="true"></i>}
                            label='No. Of Passengers on Done Rides'
                            number='20'
                            />
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3 mt-5">
                    <Link to="/drivers">
                        <Card
                            icon={<i className="fa fa-check-circle fa-4x icon-custom" aria-hidden="true"></i>}
                            label='No. Of Drivers Today'
                            number='20'
                            />
                    </Link>
                </div>
                <div className="col-md-3 mt-5">
                    <Link to="/drivers">
                        <Card
                            icon={<i className="fa  fa-user fa-4x icon-custom" aria-hidden="true"></i>}
                            label='No. Of Drivers on Rides'
                            number='20'
                            />
                    </Link>
                </div>
                <div className="col-md-3 mt-5">
                    <Link to="/drivers">
                        <Card
                            icon={<i className="fa  fa-user fa-4x icon-custom" aria-hidden="true"></i>}
                            label='No. Of Drivers on Done Rides'
                            number='20'
                            />
                    </Link>
                </div>
            </div>
        </main>
        </>
    )

}

export default Home