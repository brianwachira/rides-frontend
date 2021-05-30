import {useEffect, useState} from 'react'
import './App.css';
import React from "react"
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom"

import { useDispatch } from 'react-redux'
// pages
import Login from "./Pages/Auth/Login/Login";
import PageNotFound from "./Pages/404/PageNotFound";
import { initializeUser } from './reducers/loginReducer';
import { initializeDrivers } from './reducers/driverReducer';
import { initializePassengers } from './reducers/passengerReducer';
import Drivers from './Pages/Drivers/Drivers';
import Passengers from './Pages/Passengers/Passengers';
import Home from './Pages/Home/Home';
import Rides from './Pages/Rides/Rides';
import { initializeRides } from './reducers/rideReducer';

function App() { 
  const[isLoggedIn, setLoggedIn] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    const loggedAdminJSON = window.localStorage.getItem('admin')

    if(loggedAdminJSON) {
      const admin = JSON.parse(loggedAdminJSON)
      setLoggedIn(true)
      dispatch(initializeUser(admin))

      dispatch(initializeDrivers())

      dispatch(initializePassengers())

      dispatch(initializeRides())
    }
  },[dispatch])
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/auth/login" component={Login}>
            {isLoggedIn ? <Redirect to="/" /> : <Login/>}
          </Route>
          <Route exact path="/" component={Home}>
            {!isLoggedIn ? <Redirect to="/auth/login" /> : <Home/>}
          </Route>
          <Route exact path="/drivers" component={Drivers}>
            {!isLoggedIn ? <Redirect to="/auth/login" /> : <Drivers/>}
          </Route>
          <Route exact path="/passengers" component={Passengers}>
            {!isLoggedIn ? <Redirect to="/auth/login" /> : <Passengers/>}
          </Route>
          <Route exact path="/rides" component={Rides}>
            {!isLoggedIn ? <Redirect to="/auth/login" /> : <Rides/>}
          </Route>
          <Route component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
