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
import Notification from './Components/Notification/Notification';

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
        <Notification/>
        <Switch>
          <Route exact path="/auth/login">
            {isLoggedIn ? <Redirect to="/" /> : <Login/>}
          </Route>
          <Route exact path="/">
            {!isLoggedIn ? <Redirect to="/auth/login" /> : <Home/>}
          </Route>
          <Route exact path="/drivers">
            {!isLoggedIn ? <Redirect to="/auth/login" /> : <Drivers/>}
          </Route>
          <Route exact path="/passengers">
            {!isLoggedIn ? <Redirect to="/auth/login" /> : <Passengers/>}
          </Route>
          <Route exact path="/rides">
            {!isLoggedIn ? <Redirect to="/auth/login" /> : <Rides/>}
          </Route>
          <Route component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
