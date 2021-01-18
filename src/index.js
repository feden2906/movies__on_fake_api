import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from "react-redux";
import {store} from "./redux";

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>

      <Router>
        <App/>
        <ToastContainer/>
      </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
