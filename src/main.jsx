import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contoh from './Contoh.jsx'
import Home from './Pages/home.jsx'
import IndukProps from './Pages/induk-props.jsx'
import LandingPage from './Pages/LandingPage.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<Contoh />*/}
    {/* <Home /> */}
    {/* <IndukProps/> */}
    {/* <Utama/> */}
    {/* <App/> */}
    <LandingPage/>
  </React.StrictMode>,
)
