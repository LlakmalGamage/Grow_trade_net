import React from 'react';
import "../Home/Home.css";
import banner from "../../assets/home-banner.jpg"
import facebook from "../../assets/facebook.webp"
import instagram from "../../assets/instagram.webp"
import twitter from "../../assets/twiiter.webp"
import utube from "../../assets/utube.webp"
import linkedin from "../../assets/linkedin.webp"
import GR from "../../assets/GR.png"
import credit from "../../assets/credit.png"
import quality from "../../assets/quality.png"
import data from "../../assets/data.png"
import price from "../../assets/price.png"
import tech from "../../assets/tech.png"
import approach from "../../assets/our-approach.png"
import wrapImg1 from "../../assets/network.png"
import wrapImg2 from "../../assets/TotalRegisteredUsers.png"
import wrapImg3 from "../../assets/MonthlyActiveUsers.png"
import wrapImg4 from "../../assets/RepeatCustomers.png"
import wrapImg5 from "../../assets/AverageOrderValue.png"
import clientcard1 from "../../assets/logo1.png"
import clientcard2 from "../../assets/logo2.png"
import clientcard3 from "../../assets/logo3.png"
import clientcard4 from "../../assets/logo4.png"
import clientcard5 from "../../assets/logo5.png"
import clientcard6 from "../../assets/logo6.png"
import clientcard7 from "../../assets/logo7.png"
import clientcard8 from "../../assets/logo8.png"
import clientcard9 from "../../assets/logo9.png"
import clientcard10 from "../../assets/logo10.png"
import clientcard11 from "../../assets/logo11.png"
import clientcard12 from "../../assets/logo12.png"

const Home = () => {

  return (
    <div className="home">   
      <div className="banner-image">
        <h2 className="overlay-title">Welcome Wholesalers</h2>
       
        <img src={banner} alt="Banner Image" />
        <div className="social-icons">
  
          <a href="https://facebook.com" target="_blank"><img src={facebook} alt="" /> </a>
          <a href="https://instagram.com" target="_blank"><img src={instagram} alt="" /></a>
          <a href="https://twitter.com" target="_blank"><img src={twitter} alt="" /></a>
          <a href="https://youtube.com" target="_blank"><img src={utube} alt="" /></a>
          <a href="https://linkedin.com" target="_blank"><img src={linkedin} alt="" /></a>
        </div>
      </div>  
      <div className= "features-container">
        <h3 className="container-title">Key Features</h3>
        <div className="card-container">
          <div className="card">
            
            <img src={GR}/>
            <div className="card-content">
              <h4>Fast wholesale Facilities</h4 >
              <ul>
                <li>Real-time tracking</li>
                <li>Hassle-free product pickup and delivery</li>
                <li>find nearest warehouses</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src={GR} />
            <div className="card-content">
              <h4>Wholesale Advisory Services</h4 >
              <ul>
                <li>transport and storage techniques</li>
                <li>Timely, product specific and location-specific advice on wholesale</li>          
              </ul>
            </div>
          </div>
          <div className="card">
            <img src={credit} />
            <div className="card-content">
              <h4>Credit facility</h4 >
              <ul>
                <li>Real Time affordable Credit</li>
                <li>Quick and easy KYC</li>
                <li>Customized repayment</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src={quality} />
            <div className="card-content">
              <h4>Quality Standardization</h4 >
              <ul> 
                <li>Standardized products for every trade</li>
                <li>Rigorous and regular quality audits</li>
                <li>Assured quality product delivery </li>               
              </ul>
            </div>
          </div>
          <div className="card">
            <img src={data} />
            <div className="card-content">
              <h4>Data Analytics</h4 >
              <ul>
                <li>Pricing Trend</li>
                <li>Market insights and Industry news</li>
                <li>Crop reports</li>
                <li>Experts views</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src={price} />
            <div className="card-content">
              <h4>Price Discovery</h4 >
              <ul>
                <li>AI-driven fair pricing</li>
                <li>Determined by open market demand and supply dynamics</li>
                
              </ul>
            </div>
          </div>
          <div className="card">
            <img src={GR} />
            <div className="card-content">
              <h4>Grievance redressal</h4 >
              <ul>
                <li>Easy returns policy</li>
                <li>Round-the-clock service for consumers</li>
                <li>24 hours support</li>
              </ul>
            </div>
          </div>
                 
          <div className="card">
            <img src={tech} />
            <div className="card-content">
              <h4>Technology Adoption</h4 >
              <ul>
                <li>Introducing wholesalers to advanced agricultural technologies</li>
              </ul>
            </div>
          </div>        
        </div>
        
      </div>  
      <div className= "approach-container">
        <div className="approach-card">
          <h5 className="approach-title">Our Approach</h5> 
          <p>Grow Trade Net is an e-marketplace to connect farmers, fertilizers & importers seamless access to millions of retailers & wholesalers. </p> 
          <p>We have built a complete digital platform for farmers,fertilizers , importers & wholesalers; a trade marketplace to to solve all stakeholders isuues, without having to worry about anything but "Price". We take care of logistics, quality inspections, secure payments, returns, grievance redressals & extension of credit. We are introducing technology to improve food traceability and sustainability, and insurance coverage for all the major risks in the agri-business.</p>
        </div>
        <div className= "approach-image-card">
          <img src={approach}/>
          
          <ul>
            <li>Unified Marketplace</li>
            <li>User Friendly Interface</li>
            <li>Unlimited access to Sri lankan markets</li>
            <li>Transparent and Reliable Market information</li>
            <li>Integrated and secured payment gateways</li>
            <li>Verified buyers and sellers</li>
            <li>24x7 Market</li>
          </ul>
        </div>
      </div>
      <div className= "wrap">
        <div className="wrap-container">
          <div className="wrap-card">
          
            <img src={wrapImg1} alt='' />           
            <div className="wrap-card-content">
            <p>Sri Lanka Network</p >
            </div>  
          </div>
          <div className="wrap-card">
            <img src={wrapImg2} alt=''/>
            <div className="wrap-card-content">
              <p>52,000+
               Total Registered Users</p >
            </div>  
          </div>
          <div className="wrap-card">
            <img src={wrapImg3} alt=''/>
            <div className="wrap-card-content">
              <p>12,000+
              Monthly Active Users</p >
            </div>  
          </div>
          <div className="wrap-card">
            <img src={wrapImg4} alt=''/>
            <div className="wrap-card-content">
              <p>65%
              Repeat Customer</p >
            </div>  
          </div>
          <div className="wrap-card">
            <img src={wrapImg5} alt=''/>
            <div className="wrap-card-content">
              <p>15,000+
              Average Order Value</p >
            </div>  
          </div>
        </div>
      </div>
      <div className= "Key-Clients">
        <h6 className="clients-title">Our Key Clients</h6>
        <div className="clients-container">
          <div className="clients-card">
             <img src={clientcard1} alt="" /> 
          </div>
        
          <div className="clients-card">
             <img src={clientcard2} alt="" /> 
          </div>
          <div className="clients-card">
             <img src={clientcard3} alt="" /> 
          </div>
          <div className="clients-card">
             <img src={clientcard4} alt="" /> 
          </div>
          <div className="clients-card">
             <img src={clientcard5} alt="" /> 
          </div>
          <div className="clients-card">
             <img src={clientcard6} alt="" /> 
          </div>
          <div className="clients-card">
             <img src={clientcard7} alt="" /> 
          </div>
          <div className="clients-card">
             <img src={clientcard8} alt="" /> 
          </div>
          <div className="clients-card">
             <img src={clientcard9} alt="" /> 
          </div>
          <div className="clients-card">
             <img src={clientcard10} alt="" /> 
          </div>
          <div className="clients-card">
             <img src={clientcard11} alt="" /> 
          </div>
          <div className="clients-card">
             <img src={clientcard12} alt="" /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;