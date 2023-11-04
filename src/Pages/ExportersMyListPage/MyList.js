import NavbarE from '../../Components/Exporters MyList Navbar/Navbar'
import Home from "../../Components/Market Home/Home"
import Main from "../../Components/ExportersMarket Main/Main"
import Footer from "../../Components/Footer/Footer"
import '../../App.css'

function MyList() {
  return (
    <div>
        <NavbarE/>
        <Home/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default MyList