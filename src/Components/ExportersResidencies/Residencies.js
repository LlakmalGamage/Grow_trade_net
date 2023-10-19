// import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react';
import "swiper/css";
import './Residencies.css'
import data from '../../Utils/slider.json'
import { sliderSettings } from '../../Utils/common';

const Residencies = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            
            <div className="r-head flexColStart">
                <span className="orangeText">Your Gateway To</span>
                <span className="primaryText">Agricultural Exports</span>
            </div>
            </div>
        <Swiper {...sliderSettings}>
            <SliderButtons/>
            
    
            {data.map((card,i)=>(
                <SwiperSlide key={i}>
                    <div className="flexColStart r-card">
                        <img src={card.image} alt="home"/>
                        <span className="secondaryText r-discription">
                            {/* <span style={{ color: "orange"}} ></span><span>{card.price}</span> */}
                        </span>

                        <span className="primaryText">{card.name}</span>
                        <span className="secondaryText">{card.detail}</span>
                    </div>
                </SwiperSlide>
            ))
        }
        </Swiper>




        





    </section>
  )
}

export default Residencies;

const SliderButtons = ()=>{
    const swiper=useSwiper();
    return(
        <div className="flexCenter r-buttons">
           <button onClick={()=> swiper.slidePrev()}>&lt;</button>
           <button onClick={()=> swiper.slideNext()}>&gt;</button>
           
        </div>
    );
};