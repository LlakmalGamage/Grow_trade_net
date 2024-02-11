import Navbar from "../../Components/ExportersAfterLoginNavbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Rate from "../../Components/CurrencyExchange/Exrate";
//import Residencies from "../../Components/ExportersResidencies/Residencies";
// import Main from "../../Components/ExportersMain/main"
// import '../../App.css'

function Currency() {
    return (
        <div>
          <Navbar/>
          <Rate/>
          <Footer/>
        </div>
      );
    }
  
  export default Currency;  