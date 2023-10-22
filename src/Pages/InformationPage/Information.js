import Navbar from '../../Components/Navbar After Login/Navbar'
import Home from "../../Components/Information Home/Home"
import Main from "../../Components/Information Main/Main"
import Footer from "../../Components/Footer/Footer"
import '../../App.css'

function Information() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Information