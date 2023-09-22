import React from "react"
import './app.css'
import Navbar from "./Components/Market Navbar/Navbar"
import Home from "./Components/Market Home/Home"
import Main from "./Components/Market Main/Main"
import Footer from "./Components/Footer/Footer"


const App = () => {
    return(
        <>
        <Navbar/>
        <Home/>
        <Main/>
        <Footer/>
        </>
    )
}

export default App