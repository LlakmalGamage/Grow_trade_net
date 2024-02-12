// import React from "react";
import "./main.css";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <section className='hero'>
            <h1 className="header-text">GROW TRADE NET</h1>
            <div className='button'>
              <Link to="/farmers/home">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <buttonx>
                  FARMERS<i className='fa fa-long-arrow-alt-right'></i>
                </buttonx>
              </Link>
              <a href="/exporters/homeex">
                <buttonx>
                  EXPORTERS <i className='fa fa-long-arrow-alt-right'></i>
                </buttonx>
              </a>
              <a href="/fertilizer">
                <buttonx>
                  FERTILIZER-SELLERS <i className='fa fa-long-arrow-alt-right'></i>
                </buttonx>
              </a>
              <a href="/whole/home">
                <buttonx>
                WHOLESALERS <i className='fa fa-long-arrow-alt-right'></i>
                </buttonx>
              </a>
              <a href="/dashboard">
                <buttonx>
                Admin DashBoard <i className='fa fa-long-arrow-alt-right'></i>
                </buttonx>
              </a>
              
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
             

              
              <a href="/signup">
                <buttonxx>
                  REGISTER NOW <i className='fa fa-long-arrow-alt-right'></i>
                </buttonxx>
              </a>
              <a href="/login">
                <buttonxx>
                  LOGIN <i className='fa fa-long-arrow-alt-right'></i>
                </buttonxx>
              </a>
            </div>
      </section>
    </>
  );
}

export default Hero;
