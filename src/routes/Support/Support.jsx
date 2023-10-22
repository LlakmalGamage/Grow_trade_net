// import React from 'react';
import "./Support.css";
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'
import img7 from '../../assets/7.jpg'
import img8 from '../../assets/8.jpg'
import img9 from '../../assets/9.jpg'

const Support = () => {
  return (
 
    <div className="support">
      <div className="cover-image">
        <img alt='Market Cover' src={img1}/>
        <h1 className="support-title">Support</h1>
      </div>
      <div className="services-container">
        <h2 className="container-title">Our Logistics Services</h2>
        <div className="card-container">
          <div className="card">
            <img alt='Card Image' src={img2}/>
            <div className="card-content">
              <h3>Wholesale Advisory Services</h3 >
              <p>Timely, product specific and location-specific advice on wholesale decisions,transport and storage techniques</p>
            </div>
          </div>
          <div className="card">
           <img alt='Card Image' src={img3}/>
            <div className="card-content">
              <h3>Market Information</h3 >
              <p>Supplying wholesalers with market trends, prices, and demand forecasts for informed decisions on selling agricultural produce.</p>
            </div>
          </div>
          <div className="card">
            <img alt='Card Image' src={img4}/>
            <div className="card-content">
              <h3>Community and Networking</h3 >
              <p>Facilitating wholesaler networks and communities to encourage knowledge sharing, peer learning, and collective problem-solving.</p>
            </div>
          </div>
          <div className="card">
          <img alt='Card Image' src={img5}/>
            <div className="card-content">
              <h3>Financial and Insurance Services</h3 >
              <p>Assisting wholesalers with tailored financial products, loans, and insurance plans to meet their agricultural needs.</p>
            </div>
          </div>
          <div className="card">
          <img alt='Card Image' src={img6}/>
            <div className="card-content">
              <h3>Technology Adoption</h3 >
              <p>Introducing wholesalers to advanced agricultural technologies for improved productivity and resource management.</p>
            </div>
          </div>
          <div className="card">
          <img alt='Card Image' src={img7}/>
            <div className="card-content">
              <h3>Government Scheme Guidance</h3 >
              <p>Informing  wholesalers about various government agricultural schemes, subsidies, and incentives they can support in agrciculture wholesales.</p>
            </div>
          </div>
          <div className="card">
          <img alt='Card Image' src={img8}/>
            <div className="card-content">
              <h3>Warehouse management</h3 >
              <p>Connecting with nearest warehouses to store products in quality </p>
            </div>
          </div>
          <div className="card">
          <img alt='Card Image' src={img9}/>
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






