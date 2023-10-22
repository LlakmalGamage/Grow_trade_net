
import { Link } from 'react-router-dom';
import "./sidebar.css";
import React, { useState } from "react";
import orders from "../../assets/icons8-purchase-order-48.png"
import downloads from "../../assets/downloads.png"
import CR from "../../assets/cancellation-requests.png"
import RFQ from "../../assets/my-requests.png"
import reQuote from "../../assets/my_re-quote-requets.png"
import returnR from "../../assets/return-requests-2.png"
import offers from "../../assets/offers.png"
import rewards from "../../assets/Rewards-points.png"
import messages from "../../assets/messages.png"
import credits from "../../assets/credits.png"
import heart from "../../assets/wishlist.png"
import savedS from "../../assets/saved-search.png"
import account from "../../assets/account.png"
import address from "../../assets/manage-addresses.png"
import lock from "../../assets/credentials.png"


const SideBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };



  return (
    
    <sidebar className="sidebar"> 
       {/* <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}> */}
      <div className="logo-wrapper">
        <div className="logo-dashboard">
          {/* <a href="/"> */}
          <Link to="/">
            <img loading="lazy" src="" alt="" title="" />
          </Link>
          {/* </a> */}
        </div>
        <div className="js-hamburger hamburger-toggle"  onClick={toggleSidebar}>
          <span className="bar-top"></span>
          <span className="bar-mid"></span>
          <span className="bar-bot"></span>
        </div>
      </div>
      <div className="sidebar_content-custom-scrollbar" data-simplebar="init">
        <div className="simplebar-wrapper">
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer"></div>
          </div>
          <div className="simplebar-mask">
            <div className="simplebar-offset">
              <div className="simplebar-content">
                <div className="simplebar-resize-wrapper">
                  <nav className="dashboard-menu">
                    <ul>
                      <li className="menu_item">
                        <div className="menu_item_inner"> 
                          <span className="menu-head">Orders</span>
                         
                        </div>
                      </li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                         
                          <a title="Orders" href="/listings/orders">
                            <i className="icn img">
                              <img src= {orders}/>
                            </i>
                            <span className="menu-item_title">Orders</span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                      
                          <a title="Downloads" href="/listings/downloads">
                            <i className="icn img">
                              <img src={downloads}/>
                              
                            </i>
                            <span className="menu-item_title">Downloads</span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                      
                          <a
                            title="Cancellation Request"
                            href="/listings/cancellation-requests"
                          >
                            <i className="icn img">
                              <img src={CR} />
                            </i>
                            <span className="menu-item_title">
                              Cancellation Requests
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                          
                          <a
                            className="My RFQ Requests"
                            href="/listings/RFQ"
                          >
                            <i className="icn img">
                              <img src={RFQ}/>
                            </i>
                            <span className="menu-item_title">RFQ Requests</span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                          
                          <a
                            title="My Re-quote Requests"
                            href="/listings/re-quoted-requests"
                          >
                            <i className="icn img">
                              <img src={reQuote}/>
                            </i>
                            <span className="menu-item_title">
                              Re-quote Requests
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                          
                          <a
                            title="Return Requests"
                            href="/listings/return-requests"
                          >
                            <i className="icn img">
                              <img src={returnR}/>
                            </i>
                            <span className="menu-item_title">Return Requests</span>
                          </a>
                        </div>
                      </li>
                      <li className="divider"></li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                         
                          <span className="menu-head">Offers & Rewards</span>
                        </div>
                      </li>

                      <li className="menu_item">
                        <div className="menu_item_inner">
                          
                          <a title="My Offers" href="/listings/offers">
                            <i className="icn img">
                              <img src={offers}/>
                            </i>
                            <span className="menu-item_title">My Offers</span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                          {/* ::before  */}
                          <a title="Reward Points" href="/listings/reward-points">
                            <i className="icn img">
                              <img
                                src={rewards}/>
                            </i>
                            <span className="menu-item_title">Reward Points</span>
                          </a>
                        </div>
                      </li>
                     
                      <li className="divider"></li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                          
                          <span className="menu-head">General</span>
                        </div>
                      </li>
                      <li className="menu_item ">
                        <div className="menu_item_inner">
                          
                          <a title="Messages" href="/listings/messages">
                            <i className="icn img">
                              <img
                                src={messages}/>
                            </i>
                            <span className="menu-item_title">Messages</span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item ">
                        <div className="menu_item_inner">
                         
                          <a title="My Credits" href="/listings/credits">
                            <i className="icn img">
                              <img src={credits}/>
                            </i>
                            <span className="menu-item_title">My Credits</span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item ">
                        <div className="menu_item_inner">
                          
                          <a title="Wishlist" href="/listings/wishlist">
                            <i className="icn img">
                              <img
                                src={heart}/>
                            </i>
                            <span className="menu-item_title">Wishlist</span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item ">
                        <div className="menu_item_inner">
                          
                          <a
                            title="Saved Searchers"
                            href="/listings/saved-products-search"
                          >
                            <i className="icn img">
                              <img src={savedS}/>
                            </i>
                            <span className="menu-item_title">Saved Searches</span>
                          </a>
                        </div>
                      </li>
                      <li className="divider"></li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                          <span className="menu-head">Profile</span>
                        </div>
                      </li>
                      <li className="menu_item ">
                        <div className="menu_item_inner">
                          
                          <a
                            title="Account Settings"
                            href="/listings/profile-info"
                          >
                            <i className="icn img">
                              <img
                                src={account}/>
                            </i>
                            <span className="menu-item_title">
                              Account Settings
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item ">
                        <div className="menu_item_inner">
                          
                          <a
                            title="Manage Addresses"
                            href="/listings/my-addresses"
                          >
                            <i className="icn img">
                              <img
                                src={address}
                              />
                            </i>
                            <span className="menu-item_title">
                              Manage Addresses
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item ">
                        <div className="menu_item_inner">
                          
                          <a
                            title="Update Credentials"
                            href="/listings/change-email-password"
                          >
                            <i className="icn img">
                              <img
                                src={lock}
                              />
                            </i>
                            <span className="menu-item_title">
                              Update Credentials
                            </span>
                          </a>
                        </div>
                      </li>
                      {/* <li className="divider"></li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                          <span className="menu-head">Language &amp; Currency</span>
                        </div>
                      </li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                          <a title="" href="" class="accordianheader">
                            <i className="icn ">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/8781/8781099.png?ga=GA1.1.973300323.1696606310&track=ais"
                                href="https://cdn-icons-png.flaticon.com/128/8781/8781099.png?ga=GA1.1.973300323.1696606310&track=ais"
                              />
                            </i>
                            <span className="menu-item_title">Currency</span>
                          </a> */}
                          {/* <ul class="accordianbody dashboard-menu">
                            {/* <li class="is-active menu_item ">
                              <a
                                href="javascript:void(0);"
                                onclick="setSiteDefaultCurrency(1)"
                              >
                                {/* USD 
                              </a>
                            </li>  */}
                            {/* <li class="is-active menu_item">
                              
                                LKR
                              </a>
                            </li> */}
                          {/* </ul>  */}
                        {/* </div> */}
                      {/* </li> */}
                    </ul>
                  </nav>
                  {/* ::after */}
                </div>
              </div>
            </div>
          </div>
          {/* <div class="simplebar-placeholder"></div> */}
        </div>
        {/* <div class="simplebar-track simplebar-horizontal">
          <div class="simplebar-scrollbar"></div>
        </div>
        <div class="simplebar-track simplebar-vertical">
          <div class="simplebar-scrollbar"></div>
        </div> */}
      </div>
    
    </sidebar>
    
    
  );
};

export default SideBar;
