import React, { useState } from 'react'
import './SideBar.scss'
import { NavLink } from 'react-router-dom'

const SideBar = () => {

    const [collapsed, setCollapsed] = useState(false)
    return (
        <>
            <nav className="navbar navbar-dark bg-blue d-flex d-md-none ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={(event)=> {
                        event.preventDefault()
                        setCollapsed(!collapsed)}}>
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <nav className={collapsed === true ? 'main-nav collapse show' : 'main-nav collapse d-md-flex'} >
                <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-sidebar" style={{ width: '280px' }}>
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <i class="fa fa-superpowers me-2" aria-hidden="true"></i>
                        <span className="fs-4">Rides Dashboard</span>
                    </a>
                    <hr/>
                    <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link text-white" aria-current="page" activeClassName="active text-blue" exact>
                            <i className="fa fa-home me-2" aria-hidden="true"></i>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/rides" className="nav-link text-white" activeClassName="active text-blue">
                            <i className="fa fa-motorcycle me-2" aria-hidden="true"></i>
                            Rides
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/drivers" className="nav-link text-white" activeClassName="active text-blue">
                            <i className="fa fa-circle-o me-2" aria-hidden="true"></i>

                        Drivers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/passengers" className="nav-link text-white" activeClassName="active text-blue">
                            <i className="fa fa-user me-2" aria-hidden="true"></i>

                        Passengers
                        </NavLink>
                    </li>
                    </ul>
                    <hr/>
                    <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                        <strong>mdo</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )

}
export default SideBar