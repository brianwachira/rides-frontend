import React from "react" 
import Card from "../../Components/Card/Card"
import SideBar from '../../Components/SideBar/SideBar'
import './Home.scss'
const Home = () => {

    return (
        <>
            <div className="row">
                <SideBar/>
                <div className="col-md-4">
                    <Card
                        icon={<i className="fa fa-globe fa-4x icon-custom" aria-hidden="true"></i>}
                        label='No. Of Rides Today'
                        number='20'
                    />
                </div>
                <div className="col-md-4">
                    <Card
                        icon={<i className="fa fa-motorcycle fa-4x icon-custom" aria-hidden="true"></i>}
                        label='No. Of Active Rides'
                        number='20'
                        />

                </div>
                <div className="col-md-4">
                    <Card
                        icon={<i className="fa fa-check-circle fa-4x icon-custom" aria-hidden="true"></i>}
                        label='No. Of Rides Today'
                        number='20'
                        />

                </div>
            </div>
        </>
    )

}

export default Home