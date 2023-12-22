// import React from 'react';
import "../Home/Home.css";
import img40 from '../../assets/40.jpg'
import img41 from '../../assets/41.jpg'
import img42 from '../../assets/42.jpg'
import img43 from '../../assets/43.jpg'
import img44 from '../../assets/44.jpg'
import img20 from '../../assets/20.jpg'
import img21 from '../../assets/21.jpg'
import img22 from '../../assets/22.jpg'
import img23 from '../../assets/23.jpg'
import img24 from '../../assets/24.jpg'
import img25 from '../../assets/25.jpg'
import img26 from '../../assets/26.jpg'
import img27 from '../../assets/27.jpg'
import img28 from '../../assets/28.jpg'
import img29 from '../../assets/29.jpg'
import img30 from '../../assets/30.jpg'
import img31 from '../../assets/31.jpg'
import img32 from '../../assets/32.jpg'
import img33 from '../../assets/33.jpg'
import img34 from '../../assets/34.jpg'
import img35 from '../../assets/35.jpg'
import img36 from '../../assets/36.jpg'
import img37 from '../../assets/37.jpg'
import img38 from '../../assets/38.jpg'
import img39 from '../../assets/39.jpg'


const Home = () => {

  return (
    <div className="home">   
      <div className="banner-image">
        <h2 className="overlay-title">Welcome Wholesalers</h2>
        <img src={img39} alt="Banner Image" />
        <div className="social-icons">
        {/* <img alt='Card Image' src={img2}/> */}
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <img src={img40} alt="LinkedIn"/>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <img src={img41} alt="Instagram"/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <img src={img42} alt="Twitter"/>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <img src={img43} alt="YouTube"/>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <img src={img44} alt="LinkedIn"/>
        </a>

        </div>
      </div>  
      <div className= "features-container">
        <h3 className="container-title">Key Features</h3>
        <div className="card-container">
          <div className="card">
            <img src={img38} />
            {/* <img src="src/assets/homecard1.png"></img> */}
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
            <img src={img38} />
            <div className="card-content">
              <h4>Wholesale Advisory Services</h4 >
              <ul>
                <li>transport and storage techniques</li>
                <li>Timely, product specific and location-specific advice on wholesale</li>          
              </ul>
            </div>
          </div>
          <div className="card">
            <img src={img38} />
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
            <img src={img38} />
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
            <img src={img38} />
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
            <img src={img38} />
            <div className="card-content">
              <h4>Price Discovery</h4 >
              <ul>
                <li>AI-driven fair pricing</li>
                <li>Determined by open market demand and supply dynamics</li>
                
              </ul>
            </div>
          </div>
          <div className="card">
            <img src={img38} />
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
            <img src={img38} />
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
          <p>We have built a complete digital platform for farmers,fertilizers , importers & wholesalers; a trade marketplace to to solve all stakeholders isuues, without having to worry about anything but Price. We take care of logistics, quality inspections, secure payments, returns, grievance redressals & extension of credit. We are introducing technology to improve food traceability and sustainability, and insurance coverage for all the major risks in the agri-business.</p>
        </div>
        <div className= "approach-image-card">
          <img src={img37}/>
          {/* <img src="src/assets/our-approach.png" /> */}
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
          
            <img src={img36} alt='' />           
            <div className="wrap-card-content">
            <p>Sri Lanka Network</p >
            </div>  
          </div>
          <div className="wrap-card">
            <img src={img35} alt=''/>
            <div className="wrap-card-content">
              <p>52,000+
               Total Registered Users</p >
            </div>  
          </div>
          <div className="wrap-card">
            <img src={img34} alt=''/>
            <div className="wrap-card-content">
              <p>12,000+
              Monthly Active Users</p >
            </div>  
          </div>
          <div className="wrap-card">
            <img src={img33} alt=''/>
            <div className="wrap-card-content">
              <p>65%
              Repeat Customer</p >
            </div>  
          </div>
          <div className="wrap-card">
            <img src={img32} alt=''/>
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
             <img src={img31} alt="" /> 
          </div>
        
          <div className="clients-card">
             <img src={img30} alt="" /> 
          </div>
          <div className="clients-card">
             <img src={img29} alt="" /> 
          </div>
          <div className="clients-card">
             <img src={img28} alt="" /> 
          </div>
          <div className="clients-card">
             <img src={img27} alt="" /> 
          </div>
          <div className="clients-card">
             <img src={img26} alt="" /> 
          </div>
          <div className="clients-card">
             <img src={img25} alt="" /> 
          </div>
          <div className="clients-card">
             <img src={img24} alt="" /> 
          </div>
          <div className="clients-card">
             <img src={img23} alt="" /> 
          </div>
          <div className="clients-card">
             <img src={img22} alt="" /> 
          </div>
          <div className="clients-card">
             <img src={img21}  alt="" /> 
          </div>
          <div className="clients-card">
             <img src={img20} alt="" /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;