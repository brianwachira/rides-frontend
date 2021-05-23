import './App.css';
import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Login from "./Pages/Auth/Login/Login.js";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/auth/login" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
