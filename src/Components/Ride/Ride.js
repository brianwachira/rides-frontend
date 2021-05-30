import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { ReactComponent as NothingHereImage } from "../../Assets/Images/empty.svg"
import SideBar from "../SideBar/SideBar"

const Ride = (props) => {

    
    const {id} = useParams()



    return (
        <>
            <h1>Hello</h1>
        </>
    )
}

export default Ride