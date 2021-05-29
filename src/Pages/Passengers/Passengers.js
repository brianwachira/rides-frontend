import { useDispatch, useSelector  } from 'react-redux'
import { ReactComponent as NothingHereImage } from "../../Assets/Images/empty.svg"
import "./Passengers.scss"
import "bootstrap/js/src/collapse.js";
import { addPassenger } from '../../reducers/passengerReducer';
import RegisterModal from '../../Components/Modal/RegisterModal';
import { useState } from 'react';
import SideBar from '../../Components/SideBar/SideBar';
const Passengers = () => {

    const dispatch = useDispatch()

    const passengers = useSelector(state => state.passengers)
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    //When theres no Passengers
    if (!passengers){
        return (
            <>
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
            </>
        )
    }
    const createPassenger = () => {
        const newPassenger = {
            name,
            phoneNumber
        }
        dispatch(addPassenger(newPassenger))
    }
    return (
        <>
         <main className="container-fluid">
             <div className="row">
                 <div className="col-md-3 px-0">
                    <SideBar/>
                 </div>
                 <div className="col-md-9">
                    <h3 className="my-5">Passengers</h3>
                    <RegisterModal
                        label='Add passenger'
                        name={name}
                        setName={setName}
                        phoneNumber={phoneNumber}
                        setPhoneNumber={setPhoneNumber}
                        handleSubmit = {createPassenger}/>
                    
                    <div className="table-responsive">
                        <table className="table table-striped table-hover mt-5">
                            <thead className="table-blue text-light">
                                
                                <tr>
                                    <th>#</th>
                                    <th>name</th>
                                    <th>phone number</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {passengers.map((passenger,index )=>
                                    <tr
                                        key={passenger.id}>
                                        <td>{index}</td>
                                        <td>{passenger.name}</td>
                                        <td>{passenger.phoneNumber}</td>
                                        <td>
                                            <div className="btn-group">
                                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"  data-bs-target="#dropdownMenuButton" aria-expanded="false">
                                                    
                                                </button>
                                                <ul className="dropdown-menu" id="dropdownMenuButton" aria-labelledby="dropdownMenuButton">
                                                    <li className="dropdown-item" >Delete Passenger Account</li>
                                                </ul>
                                            </div> 
                                        </td>
                                    </tr>
                                    )}
                            </tbody>
                        </table>
                    </div>
                 </div>
             </div>
         </main>
        </>
    )
}

export default Passengers