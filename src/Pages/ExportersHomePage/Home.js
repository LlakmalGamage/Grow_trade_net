import Navbar from "../../Components/ExportersAfterLoginNavbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Home from "../../Components/ExportersHome/Home";
import Residencies from "../../Components/ExportersResidencies/Residencies";
import '../../App.css'

function ExporterHome() {
    return (
        <div>
          <Navbar/>
          <Home/>  
          <Residencies/>
          <Footer/>
        </div>
      );
    }
  
  export default ExporterHome;  