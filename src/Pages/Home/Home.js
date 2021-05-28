import React from "react" 
import { useSelector } from "react-redux"
import Card from "../../Components/Card/Card"
import SideBar from '../../Components/SideBar/SideBar'
import './Home.scss'
const Home = () => {

    const rides = useSelector(state => state.rides)
    const ongoingRides = rides.filter(ride => ride.status === 'ongoing')
    return (
        <>
        <main className="container-fluid">
            <div className="row">
                <div className="col-md-3 ps-0">
                    <SideBar/>

                </div>
                <div className="col-md-3 mt-5">
                    <Card
                        icon={<i className="fa fa-globe fa-4x icon-custom" aria-hidden="true"></i>}
                        label='All Rides'
                        number={rides.length}
                    />
                </div>
                <div className="col-md-3 mt-5">
                    <Card
                        icon={<i className="fa fa-motorcycle fa-4x icon-custom" aria-hidden="true"></i>}
                        label='No. Of ongoing Rides'
                        number={ongoingRides.length}
                        />

                </div>
                <div className="col-md-3 mt-5">
                    <Card
                        icon={<i className="fa fa-check-circle fa-4x icon-custom" aria-hidden="true"></i>}
                        label='No. Of Rides Today'
                        number='20'
                        />
                </div>
            </div>
        </main>
        </>
    )

}

export default Home