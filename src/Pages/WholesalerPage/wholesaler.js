// import React from "react";
import '../../app.css';
import Navbar from "../../Components/Navbar After Login/Navbar";
import Footer from "../../Components/Footer/Footer";
import Home from '../../routes/Home/Home';
import Listings from "../../routes/listings/Listings"
import Market from '../../routes/Market/Market'
import Information from '../../routes/Information/Information'
import Support from '../../routes/Support/Support'
import { Routes, Route } from 'react-router-dom'
import ContentDashboard from "../../routes/listings/contentDashboard/contentDashboard"
import ContentOrder from "../../routes/listings/contentOrder/contentOrder"
import RFQ from "../../routes/listings/RFQ/RFQ"
import ReturnRequests from "../../routes/listings/returnRequests/returnRequests"
import CancellationRequests from "../../routes/listings/cancellationRequests/cancellationRequests"


const App = () => {
    return (
            <div className="App">
                <Navbar/>
                <div className="routes">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/listings" element={<Listings />}>
                          <Route index element={<ContentDashboard />} />
                          <Route path="dashboard" element={<ContentDashboard />} />
                          <Route path="orders" element={<ContentOrder />} />
                          <Route path="RFQ" element={<RFQ />} />
                          <Route path="return-requests" element={<ReturnRequests />} />
                          <Route path="cancellation-requests" element={<CancellationRequests />} />
                        </Route>
                        <Route path="/market" element={<Market />} />
                        <Route path="/information" element={<Information />} />
                        <Route path="/support" element={<Support />} />
                        
                        
                    </Routes>
                </div>
                <div style={{ marginTop: "45%" }}>
                 <Footer/>    
                </div>
            </div>
        
    );
};

export default App;