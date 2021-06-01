import { useDispatch, useSelector  } from 'react-redux'
import { ReactComponent as NothingHereImage } from "../../Assets/Images/empty.svg"
import "./Drivers.scss"
import "bootstrap/js/src/collapse.js";
import { addDriver, suspendDriver, unsuspendDriver } from '../../reducers/driverReducer';
import RegisterModal from '../../Components/Modal/RegisterModal';
import { useState } from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import { setNotification } from '../../reducers/notificationReducer';
import { Link } from 'react-router-dom';
const Drivers = () => {

    const dispatch = useDispatch()

    const drivers = useSelector(state => state.drivers)
    
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    // When theres no drivers
    if (!drivers){
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

    const createDriver = () => {

        try{

            const newDriver = {
                name,
                phoneNumber
            }
            dispatch(addDriver(newDriver))
            setName('')
            setPhoneNumber('')
    
            dispatch(setNotification({
                title: 'success',
                message: 'Success'
                
            }))
    
            setTimeout(() =>  {
              dispatch(setNotification(''))
            }, 5000)



        }catch(exception){
            const notification = {
              title:'error',
              message: 'Phone Number Already Exists'
            }
            dispatch(setNotification(notification))
            setTimeout(() =>  {
              dispatch(setNotification(''))
            }, 5000)

        }

        
    }
    return (
        <>

        <main className="container-fluid">
            <div className="row">
                <div className="col-md-3 px-0">
                    <SideBar/>
                </div>
                <div className="col-md-9">
                    <h3 className="my-5">Drivers</h3>
                        <RegisterModal
                            label='Add driver'
                            name={name}
                            setName={setName}
                            phoneNumber={phoneNumber}
                            setPhoneNumber={setPhoneNumber}
                            handleSubmit = {createDriver}/>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover mt-5">
                            <thead className="table-blue text-light">             
                                <tr>
                                    <th>#</th>
                                    <th>name</th>
                                    <th>phone number</th>
                                    <th>suspended</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {drivers.map((driver, index) =>
                                        <tr
                                            key={driver.id}>
                                            
                                            <td><Link to={`drivers/${driver.id}`}>{index+1}</Link></td>
                                            <td><Link to={`drivers/${driver.id}`}>{driver.name}</Link></td>
                                            <td><Link to={`drivers/${driver.id}`}>{driver.phoneNumber}</Link></td>
                                            <td><Link to={`drivers/${driver.id}`}>{driver.suspended === true ? <span className="badge bg-danger fs-6">true</span> : <span className="badge bg-success fs-6">false</span> }</Link></td>
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
                    </div>
                </div>
            </div>                                      
        </main>
        </>
    )
}

export default Drivers