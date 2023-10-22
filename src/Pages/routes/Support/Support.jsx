import React from 'react';
import "./Support.css";
import Sbanner from "../../assets/support-banner.png" 
import supporcard1 from "../../assets/supportCard1.png"
import supportcard2 from "../../assets/supportcard2.png"
import supportcard3 from "../../assets/supportcard3.png"
import supportcard4 from "../../assets/supportcard4.png"
import supportcard5 from "../../assets/supportcard5.png"
import supportcard6 from "../../assets/supportcard6.png"
import supportcard7 from "../../assets/supportcard7.png"
import supportcard8 from "../../assets/supportcard8.png"

const Support = () => {
  return (
 
    <div className="support">
      <div className="cover-image">
        <img src={Sbanner} alt="" />
        <h1 className="support-title">Support</h1>
      </div>
      <div className="services-container">
        <h2 className="container-title">Our Logistics Services</h2>
        <div className="card-container">
          <div className="card">
            <img src={supporcard1} alt="Card Image" />
            <div className="card-content">
              <h3>Wholesale Advisory Services</h3 >
              <p>Timely, product specific and location-specific advice on wholesale decisions,transport and storage techniques</p>
            </div>
          </div>
          <div className="card">
            <img src={supportcard2} alt="Card Image" />
            <div className="card-content">
              <h3>Market Information</h3 >
              <p>Supplying wholesalers with market trends, prices, and demand forecasts for informed decisions on selling agricultural produce.</p>
            </div>
          </div>
          <div className="card">
            <img src={supportcard3} alt="Card Image" />
            <div className="card-content">
              <h3>Community and Networking</h3 >
              <p>Facilitating wholesaler networks and communities to encourage knowledge sharing, peer learning, and collective problem-solving.</p>
            </div>
          </div>
          <div className="card">
            <img src={supportcard4} alt="Card Image" />
            <div className="card-content">
              <h3>Financial and Insurance Services</h3 >
              <p>Assisting wholesalers with tailored financial products, loans, and insurance plans to meet their agricultural needs.</p>
            </div>
          </div>
          <div className="card">
            <img src={supportcard5} alt="Card Image" />
            <div className="card-content">
              <h3>Technology Adoption</h3 >
              <p>Introducing wholesalers to advanced agricultural technologies for improved productivity and resource management.</p>
            </div>
          </div>
          <div className="card">
            <img src={supportcard6} alt="Card Image" />
            <div className="card-content">
              <h3>Government Scheme Guidance</h3 >
              <p>Informing  wholesalers about various government agricultural schemes, subsidies, and incentives they can support in agrciculture wholesales.</p>
            </div>
          </div>
          <div className="card">
            <img src={supportcard7} alt="Card Image" />
            <div className="card-content">
              <h3>Warehouse management</h3 >
              <p>Connecting with nearest warehouses to store products in quality </p>
            </div>
          </div>
          <div className="card">
            <img src={supportcard8} alt="Card Image" />
            <div className="card-content">
              <h3>Environmental Sustainability</h3 >
              <p>Promoting eco-friendly and sustainable wholesale teachniques to minimize the bad impacts for products and preserve natural resources.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );

};
export default Support;






