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
              <a href="/whole">
                <buttonx>
                WHOLESALERS <i className='fa fa-long-arrow-alt-right'></i>
                </buttonx>
              </a>
              <a href="/signup">
                <buttonx>
                  REGISTER NOW <i className='fa fa-long-arrow-alt-right'></i>
                </buttonx>
              </a>
            </div>
      </section>
    </>
  );
}

export default Hero;
