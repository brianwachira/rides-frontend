import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './reducers/store'
import './index.css';
import './Global.scss';
// import bootstrap
import 'bootstrap/dist/js/bootstrap.js'
// import leaflet
import 'leaflet/dist/leaflet.js'
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

