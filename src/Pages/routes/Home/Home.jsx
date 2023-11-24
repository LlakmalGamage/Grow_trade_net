import React from 'react';
import "../Home/Home.css";

const Home = () => {

  return (
    <div className="home">   
      <div className="banner-image">
        <h2 className="overlay-title">Welcome Wholesalers</h2>
        <img src="https://tradebridge.co.in/static/images/banner/banner-new.jpg" alt="Banner Image" />
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank"><img src="data:image/webp;base64,UklGRrIBAABXRUJQVlA4WAoAAAAQAAAAJwAAJwAAQUxQSPcAAAANgJBtW9bqiUAEItBgNHANpgnOlsCZwC2BmEBswBqwBpwGngz+wXcKRMQE8H+VWaVUqL5YxVqr8HFLLnX/4aCyl9p3Kcvzxum69d1ySk1kvd+aeMJMZNbT2x0yPfmHjzugB0oOY9ibKDs90taTwqpvNnRVCktYtZTvH4CyAowKcEXibYRKxNWDFaE0GplGjEauFRONlEVJkboQrIwI0YgIMFcSPOBqCTOQki23BICuLfdmHbClkt+g6VWhB9upG8q82PfzUMJ9D+B+23zuw+Hnb68yvb6cdGNvciwN52NjWn1meTuyus5W1yNx9GR3s7eWC8S/GDgJAFZQOCCUAAAAUAUAnQEqKAAoAD7dXKxNKKUkoi47+ZkQG4llANDMSEKqTYvare5cskUQ4hxYbVwD8WUAAP71a0YXH7C5gxLtdwfhKLkaRBzs0OcDhd/LIH0hghJOn56vkk8jyS5+X0qGZTNwcaUvaRyuqqncK9AKb5zRkTbTwLvObIoZl+J/byo1dUIa0maPyNb340ZmKy9gogAAAA==" alt="" /></a>
          <a href="https://instagram.com" target="_blank"><img src="data:image/webp;base64,UklGRvYBAABXRUJQVlA4WAoAAAAQAAAAJwAAJwAAQUxQSPkAAAANgJBte5bqibAIa+DXwDUQEwAJzjEBkkBMACQAE5zZYDZYhHXgb9sxQERMAP9YCbiQSkoxAKKse8/R1G/JTiNnGbsQpWo4qsvq2R1TEzFVI9dwQHoim/7qdsmD6Gq6uR1qIqGaar/1R1LVXzfuJJbivqIvqWhGv2hI37SAKjKorIeCHIsZLllcXlBkYSxCngaVicZk8329/i4WJ3l4QtA5hADW5DADY5nDC7Bap/MOoG3StSwHkVTerlD3qWrW3fhI07LdqSrF4HdQn6t4w5vdtW5idR8O3t+9jhFqjttb8aOOhOdAzNCNRSl73DgTOwxjEDkpCB/nOAgAVlA4INYAAAAwBgCdASooACgAPt1qrFGopaQio4sBEBuJYwDO0TNgvRsP4FDOrJrvq5vcUO2LAsKNdGgFUcn+Io6AAP74rINW1bNQjgdjY+c6d9e7s5SAwJSBHvF3C7bgdhtN36Tm+WpFDvlLHQrd8gXAoM4MKK6oBHXvqgY5waS6rET8i2x4x0V8IQlfQAjFBl5pDjAyHWors8ipSZV6rIaVokp0mjen6JnVivlYVQljLudWhikl5XK8baDcpS9W5DK95OYnZl+4oM5y0iaQTPsNn8C8JARZ5l+uAAAA" alt="" /></a>
          <a href="https://twitter.com" target="_blank"><img src="data:image/webp;base64,UklGRsIBAABXRUJQVlA4WAoAAAAQAAAAJwAAJwAAQUxQSPYAAAANgJBte5bqifBFoIFr4Bo4EwgJOCRAEyAJhATOBAcb7DQgwteBv23XCRARE8A/L+5kjICG+es1nq0t62KKs5v6KY7pOOpqmhDhfiGi7T73I/ImcmuvukveRLftVff8ktB0V93qSGpuzYYr0lCqX+tI/Wp08UNyKZ+LOh11DzgyFOvhkgOXD9gsnEckCxEMeRb8tzYbzSZkA5PNI0AwOQRgsjlMwHjLYQSC2nSzAvR1ugdLLzZVCCs0rSSqWA9jl6Zhe6BMMegOqnMZb/iyuyraWI+Zg/fvq4gxVxyfGlfLEe09MfU5upvZE0ZPbB1GNeYkoH8hcBBWUDggpgAAANAFAJ0BKigAKAA+3WCqT6ilI6InOAyREBuJQBnDqHivj5dnnoDBOmspmbj1uhUDskpIxGMOs04A/vloOAsLdJMRnWNeDPyupu/TC3fdVlz/5Ha63rDDIAqosjWOIFrm6f2HD+xuDPEc4sXVWqeMJsef3Eh0zAlBhOY+A6EtZwRhPnnkFgoySTkwR2LjYWcfUS+AiZKM6tY80Fvapc1pjOOxfRvngAA=" alt="" /></a>
          <a href="https://youtube.com" target="_blank"><img src="data:image/webp;base64,UklGRrIBAABXRUJQVlA4WAoAAAAQAAAAJwAAJwAAQUxQSPMAAAANgJdtW9fqiUCDQwQaSIPZYJrAywTOBB4T4BIME4w1IAJrQAd/Aec6/0fEBPCXNYSQS9WVEoCU3q8uJms6Tip1U24MSbThqqiH52+8NilSDnXrL4g3ieVrXk6JF+nNZznzJqdZ7dFEXjOGPa0yiandM+TWctk05B/GzVCA1AsoSrytcC+itqCKQIMuRVLmTzGS/9urMj5ERBERnC7CwacqIUSwdQkWCK4pYAZ43vM5ti402dod+kFkGtmPvcnj7QF2NTl8z8nlO6TzPacfX5PK91xcZqOSjJbLvq07ccn1JH08dafORDuTOto5alltwtd5zgMAVlA4IJgAAADQBQCdASooACgAPt1kq0+opSOiLjQIARAbiWUBBgGScOUHuS34JqnGmOlUKJd2Hu8rIH2JIxMAAP7yn/rEC1c4vH1qdnS0/P7Rb6O3/dqnFlqozVZ7KA5xImrRWjRGqwuBj1wsMG7zjQfQPY8z5acqzkAfxCrttoxlBXqjAilfdVDc6Tn9WqQU/NmoAdLOnFUp1MJeOoYAAA==" alt="" /></a>
          <a href="https://linkedin.com" target="_blank"><img src="data:image/webp;base64,UklGRrQBAABXRUJQVlA4WAoAAAAQAAAAJwAAJwAAQUxQSPUAAAANgFDbdtXoSHgScDBxQEZBUwUUBRQFbRVQFBQUFAnBQcYBEuKBX/LWCIiICeCfF1cWduWX2S/pbGPZtUVpQ+/TmI6zruHlEzwvJLSP0J6RL4nv1W88JF+Sm+4aD8iXjKa7xr2OrKapd5zkwTFtyIPcnzau7mSX23tV5aPpAYdCcQNcNFDOYFW4CREVIhh0FmgVNUaNXq8GvNURIBgNC+CthgkYKw0jEKLNt0SAvsn3Yj2JzRXCBm2Xq2Y79J88LfsDtxxDPEBd3tINM4fr4pHqtXDyOX+KFEvNed+6Rs7EfiJlfI+uMkfCOJE6DmM05kcg/oXASQBWUDggmAAAAJAFAJ0BKigAKAA+3WCuUKilJKKqtVlZEBuJYwDLaDaiAVvsn3+1q1NrYVXqdFVRWmFudNAAAP734ouIwRsEff5RP0D7EowR0zeMajjioocL3cRxSWiBccaMyBtI4znzYxBoq/5xl8ycnA/meydbA0DaYYZdXiKOapWZIWeu9YqW8QhO2TE1n0j1QJZU1lC6AUF6abUHNzIA" alt="" /></a>
        </div>
      </div>  
      <div className= "features-container">
        <h3 className="container-title">Key Features</h3>
        <div className="card-container">
          <div className="card">
            <img src="https://tradebridge.co.in/static/images/keyfeatures/1.png" />
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
            <img src="https://tradebridge.co.in/static/images/keyfeatures/1.png" />
            <div className="card-content">
              <h4>Wholesale Advisory Services</h4 >
              <ul>
                <li>transport and storage techniques</li>
                <li>Timely, product specific and location-specific advice on wholesale</li>          
              </ul>
            </div>
          </div>
          <div className="card">
            <img src="https://tradebridge.co.in/static/images/keyfeatures/1.png" />
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
            <img src="https://tradebridge.co.in/static/images/keyfeatures/1.png" />
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
            <img src="https://tradebridge.co.in/static/images/keyfeatures/1.png" />
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
            <img src="https://tradebridge.co.in/static/images/keyfeatures/1.png" />
            <div className="card-content">
              <h4>Price Discovery</h4 >
              <ul>
                <li>AI-driven fair pricing</li>
                <li>Determined by open market demand and supply dynamics</li>
                
              </ul>
            </div>
          </div>
          <div className="card">
            <img src="https://tradebridge.co.in/static/images/keyfeatures/1.png" />
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
            <img src="https://tradebridge.co.in/static/images/keyfeatures/1.png" />
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
          <img src="https://tradebridge.co.in/static/images/revised/our-approach.png"/>
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
          
            <img src="https://tradebridge.co.in/static/images/revised/pan-india-network.png" alt='' />           
            <div className="wrap-card-content">
            <p>Sri Lanka Network</p >
            </div>  
          </div>
          <div className="wrap-card">
            <img src="https://tradebridge.co.in/static/images/revised/TotalRegisteredUsers.png" alt=''/>
            <div className="wrap-card-content">
              <p>52,000+
               Total Registered Users</p >
            </div>  
          </div>
          <div className="wrap-card">
            <img src="https://tradebridge.co.in/static/images/revised/MonthlyActiveUsers.png" alt=''/>
            <div className="wrap-card-content">
              <p>12,000+
              Monthly Active Users</p >
            </div>  
          </div>
          <div className="wrap-card">
            <img src="https://tradebridge.co.in/static/images/revised/RepeatCustomers.png" alt=''/>
            <div className="wrap-card-content">
              <p>65%
              Repeat Customer</p >
            </div>  
          </div>
          <div className="wrap-card">
            <img src="https://tradebridge.co.in/static/images/revised/AverageOrderValue.png" alt=''/>
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
             <img src="https://tradebridge.co.in/static/images/clients/logo6.png" alt="" /> 
          </div>
        
          <div className="clients-card">
             <img src="https://tradebridge.co.in/static/images/clients/logo12.png" alt="" /> 
          </div>
          <div className="clients-card">
             <img src="https://tradebridge.co.in/static/images/clients/logo2.png" alt="" /> 
          </div>
          <div className="clients-card">
             <img src="https://tradebridge.co.in/static/images/clients/logo1.png" alt="" /> 
          </div>
          <div className="clients-card">
             <img src="https://tradebridge.co.in/static/images/clients/logo4.png" alt="" /> 
          </div>
          <div className="clients-card">
             <img src="https://tradebridge.co.in/static/images/clients/logo11.png" alt="" /> 
          </div>
          <div className="clients-card">
             <img src="https://tradebridge.co.in/static/images/clients/logo9.png" alt="" /> 
          </div>
          <div className="clients-card">
             <img src="https://tradebridge.co.in/static/images/clients/logo7.png" alt="" /> 
          </div>
          <div className="clients-card">
             <img src="https://tradebridge.co.in/static/images/clients/logo3.png" alt="" /> 
          </div>
          <div className="clients-card">
             <img src="https://tradebridge.co.in/static/images/clients/logo8.png" alt="" /> 
          </div>
          <div className="clients-card">
             <img src="https://tradebridge.co.in/static/images/clients/logo5.png" alt="" /> 
          </div>
          <div className="clients-card">
             <img src="https://tradebridge.co.in/static/images/clients/logo10.png" alt="" /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;