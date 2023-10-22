// import React, { useState } from "react";
import "./Listings.css";
import SideBar from "./sidebar";
import ListingHeader from "../listings/listingHeader/listingHeader";
import { Outlet } from "react-router-dom";
import img46 from '../../assets/46.jpg'

const Listings = () => {
  return (
    <div className="listings">
      <div className="banner-image">
        <h1 className="overlay-title">Listings</h1>
        <img
          src={img46}
          alt=""
        />
      </div>
      
      <div className="wrapper">
        
        <div className="sidebar">
          <SideBar />
        </div>
        
        <div className="listing-header">
          <ListingHeader />
          
      

         {/* <div className="ContentDashboard">
          <ContentDashboard/>
          </div>  */}
          

           {/* <div className="ContentOrder">
          <ContentOrder/>
          </div> */}
        
        

        

          <Outlet/>
        </div>
        
      </div>
    </div>
  );
};

export default Listings;

