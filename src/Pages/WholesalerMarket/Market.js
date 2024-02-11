import Navbar from '../../Components/WholesalerMarketNavbar/Navbar'
import Home from "../../Components/Market Home/Home"
import Main from "../../Components/Market Main/Main"
import Footer from "../../Components/Footer/Footer"
import '../../App.css'

function Market() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Market