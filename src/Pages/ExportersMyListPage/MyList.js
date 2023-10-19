import Navbar from '../../Components/Exporters MyList Navbar/Navbar'
import Home from "../../Components/Market Home/Home"
import Main from "../../Components/Market Main/Main"
import Footer from "../../Components/Footer/Footer"
import '../../app.css'

function MyList() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default MyList