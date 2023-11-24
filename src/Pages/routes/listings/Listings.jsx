import React, { useState } from "react";
import "./Listings.css";
import SideBar from "./sidebar";
import ListingHeader from "./listingHeader";
import ContentDashboard from "./contentDashboard/contentDashboard";
import ContentOrder from "./contentOrder";
import { Outlet } from "react-router-dom";

const Listings = () => {
  return (
    <div className="listings">
      <div className="banner-image">
        <h1 className="overlay-title">Listings</h1>
        <img
          src="https://shop.tradebridge.co.in/img/tradebridge.fd772ad3.bdb748aa.png"
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

