import { useDispatch, useSelector  } from 'react-redux'
import { ReactComponent as NothingHereImage } from "../../Assets/Images/empty.svg"
import "./Passengers.scss"
import "bootstrap/js/src/collapse.js";
import { addPassenger } from '../../reducers/passengerReducer';
import RegisterModal from '../../Components/Modal/RegisterModal';
import { useState } from 'react';
const Passengers = () => {

    const dispatch = useDispatch()

    const passengers = useSelector(state => state.passengers)
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    // When theres no Passengers
    if (Passengers.length < 1){
        return (
        <NothingHereImage/>
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
         <h2>Passengers</h2>
        <RegisterModal
            label='Add passenger'
            name={name}
            setName={setName}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            handleSubmit = {createPassenger}/>
        <table className="table table-striped table-hover">
            <thead>
                
                <tr>
                    <th>name</th>
                    <th>phone number</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {passengers.map(passenger =>
                    <tr
                        key={passenger.id}>
                        <td>{passenger.name}</td>
                        <td>{passenger.phoneNumber}</td>
                        <td>{`${passenger.suspended}`}</td>
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
        </>
    )
}

export default Passengers