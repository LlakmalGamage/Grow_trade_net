//import React, { useState } from "react"
import './app.css'
//import { Routes } from 'react-router-dom'

//import NavbarAfterLogin  from "./Components/Navbar After Login/Navbar"
//import NavbarBeforeLogin from "./Components/Navbar Before Login/Navbar"
import NavbarMarket from "./Components/Market Navbar/Navbar"

import HomeMarket from "./Components/Market Home/Home"
//import HomeInformation from "./Components/Information Home/Home"
//import HomeSupport from "./Components/Support Home/Home"

import MainMarket from "./Components/Market Main/Main"
//import MainInformation from "./Components/Information Main/Main"
//import MainSupport from "./Components/Support Main/Main"

import Footer from "./Components/Footer/Footer"

const App = () => {
    return(
        <>
        <NavbarMarket/>
        <HomeMarket/>
        <MainMarket/>
        <Footer/>
        </>
    )
}

export default App
