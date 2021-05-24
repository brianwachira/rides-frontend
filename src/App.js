import {useEffect} from 'react'
import './App.css';
import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { useDispatch } from 'react-redux'
// pages
import Login from "./Pages/Auth/Login/Login";
import PageNotFound from "./Pages/404/PageNotFound";
import { initializeUser } from './reducers/loginReducer';
import { initializeDrivers } from './reducers/driverReducer';
import { initializePassengers } from './reducers/passengerReducer';
import Drivers from './Pages/Drivers/Drivers';
import Passengers from './Pages/Passengers/Passengers';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const loggedAdminJSON = window.localStorage.getItem('admin')

    if(loggedAdminJSON) {
      const admin = JSON.parse(loggedAdminJSON)

      dispatch(initializeUser(admin))

       dispatch(initializeDrivers())

      dispatch(initializePassengers())

    }
  },[dispatch])
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/auth/login" component={Login}/>
        <Route exact path="/drivers" component={Drivers}/>
        <Route exact path="/passengers" component={Passengers}/>
        <Route component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
