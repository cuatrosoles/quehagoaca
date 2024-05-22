import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from '../src/App'
import { BrowserRouter as Router } from "react-router-dom"
import { MainContextProvider } from "../src/context/MainContext"
import * as serviceWorkerRegistration from '../src/serviceWorkerRegistration';

ReactDOM.render(
  <MainContextProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </MainContextProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
