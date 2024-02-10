import Navbar from "../../Components/ExportersAfterLoginNavbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Home from "../../Components/ExportersHome/Home";
//import Residencies from "../../Components/ExportersResidencies/Residencies";
import Main from "../../Components/ExportersMain/main"
import '../../App.css'

function ExporterHome() {
    return (
        <div>
          <Navbar/>
          <Home/>  
          <Main/>
          <Footer/>
        </div>
      );
    }
  
  export default ExporterHome;  