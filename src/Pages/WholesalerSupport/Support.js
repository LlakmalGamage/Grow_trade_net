import Navbar from '../../Components/WholesalerAfterLoginNavbar/Navbar'
// import Home from "../../Components/Support Home/Home"
// import Main from "../../Components/Support Main/Main"
import Home from "../../Components/WholesalerSupportHome/Home"
import Main from "../../Components/WholesalerSupportMain/Main"
import Footer from "../../Components/Footer/Footer"
import '../../App.css'

function Support() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Support
