import { useDispatch, useSelector  } from 'react-redux'
import { ReactComponent as NothingHereImage } from "../../Assets/Images/empty.svg"
import "./Drivers.scss"
import "bootstrap/js/src/collapse.js";
import { addDriver, suspendDriver, unsuspendDriver } from '../../reducers/driverReducer';
import RegisterModal from '../../Components/Modal/RegisterModal';
import { useState } from 'react';
const Drivers = () => {

    const dispatch = useDispatch()

    const drivers = useSelector(state => state.drivers)
    console.log(drivers)
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    // When theres no drivers
    if (drivers.length < 1){
        return (
        <NothingHereImage/>
        )
    }

    const createDriver = () => {
        console.log("licjed")
        const newDriver = {
            name,
            phoneNumber
        }
        dispatch(addDriver(newDriver))
    }
    return (
        <>
         <h2>Drivers</h2>
        <RegisterModal
            label='Add driver'
            name={name}
            setName={setName}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            handleSubmit = {createDriver}/>
        <table className="table table-striped table-hover">
            <thead>
                
                <tr>
                    <th>name</th>
                    <th>phone number</th>
                    <th>suspended</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {drivers.map(driver =>
                    <tr
                        key={driver.id}>
                        <td>{driver.name}</td>
                        <td>{driver.phoneNumber}</td>
                        <td>{`${driver.suspended}`}</td>
                        <td>
                            <div className="btn-group">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"  data-bs-target="#dropdownMenuButton" aria-expanded="false">
                                    
                                </button>
                                <ul className="dropdown-menu" id="dropdownMenuButton" aria-labelledby="dropdownMenuButton">
                                    {
                                        driver.suspended?
                                        <li className="dropdown-item" onClick={() => dispatch(unsuspendDriver(driver.id))}>Unsuspend Driver</li>
                                        :
                                        <li className="dropdown-item" onClick={() => dispatch(suspendDriver(driver.id))}>Suspend Driver</li>
                                        
                                        }
                                        <li className="dropdown-item" >Delete Driver Account</li>
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

export default Drivers