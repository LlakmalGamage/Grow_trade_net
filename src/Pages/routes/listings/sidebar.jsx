
import { Link } from 'react-router-dom';
import "./sidebar.css";
import React, { useState } from "react";

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
                  {/* ::before */}
                  <nav className="dashboard-menu">
                    <ul>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                          {/* ::before */}
                          <span className="menu-head">Orders</span>
                         
                        </div>
                      </li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                          {/* ::before */}
                          <a title="Orders" href="/listings/orders">
                            <i className="icn shop">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/466/466200.png?ga=GA1.1.973300323.1696606310&track=ais"
                                
                                href="https://cdn-icons-png.flaticon.com/128/466/466200.png?ga=GA1.1.973300323.1696606310&track=ais"
                              />
                            </i>
                            <span className="menu-item_title">Orders</span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                          {/* ::before */}
                          <a title="Downloads" href="/listings/downloads">
                            <i className="icn shop">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/724/724933.png?ga=GA1.1.973300323.1696606310&track=ais"
                                href="https://cdn-icons-png.flaticon.com/128/724/724933.png?ga=GA1.1.973300323.1696606310&track=ais"
                              />
                            </i>
                            <span className="menu-item_title">Downloads</span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                          {/* ::before */}
                          <a
                            title="Cancellation Request"
                            href="/listings/cancellation-requests"
                          >
                            <i className="icn shop">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/320/320022.png?ga=GA1.1.973300323.1696606310&track=ais"
                                href="https://cdn-icons-png.flaticon.com/128/320/320022.png?ga=GA1.1.973300323.1696606310&track=ais"
                              />
                            </i>
                            <span className="menu-item_title">
                              Cancellation Requests
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                          {/* ::before */}
                          <a
                            className="My RFQ Requests"
                            href="/listings/RFQ"
                          >
                            <i className="icn shop">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/1725/1725853.png?ga=GA1.1.973300323.1696606310&track=ais"
                                href="https://cdn-icons-png.flaticon.com/128/1725/1725853.png?ga=GA1.1.973300323.1696606310&track=ais"
                              />
                            </i>
                            <span className="menu-item_title">RFQ Requests</span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                          {/* ::before */}
                          <a
                            title="My Re-quote Requests"
                            href="/listings/re-quoted-requests"
                          >
                            <i className="icn shop">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/6164/6164999.png?ga=GA1.1.973300323.1696606310&track=ais"
                                href="https://cdn-icons-png.flaticon.com/128/6164/6164999.png?ga=GA1.1.973300323.1696606310&track=ais"
                              />
                            </i>
                            <span className="menu-item_title">
                              Re-quote Requests
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                          {/* ::before */}
                          <a
                            title="Return Requests"
                            href="/listings/return-requests"
                          >
                            <i className="icn shop">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/81/81200.png?ga=GA1.1.973300323.1696606310&track=ais"
                                href="https://cdn-icons-png.flaticon.com/128/81/81200.png?ga=GA1.1.973300323.1696606310&track=ais"
                              />
                            </i>
                            <span className="menu-item_title">Return Requests</span>
                          </a>
                        </div>
                      </li>
                      <li className="divider"></li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                          {/* ::before  */}
                          <span className="menu-head">Offers & Rewards</span>
                        </div>
                      </li>

                      <li className="menu_item">
                        <div className="menu_item_inner">
                          {/* ::before  */}
                          <a title="My Offers" href="/listings/offers">
                            <i className="icn shop">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/582/582925.png?ga=GA1.1.973300323.1696606310&track=ais"
                                href="https://cdn-icons-png.flaticon.com/128/582/582925.png?ga=GA1.1.973300323.1696606310&track=ais"
                              />
                            </i>
                            <span className="menu-item_title">My Offers</span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                          {/* ::before  */}
                          <a title="Reward Points" href="/listings/reward-points">
                            <i className="icn shop">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/10307/10307138.png?ga=GA1.1.973300323.1696606310&track=ais"
                                href="https://cdn-icons-png.flaticon.com/128/10307/10307138.png?ga=GA1.1.973300323.1696606310&track=ais"
                              />
                            </i>
                            <span className="menu-item_title">Reward Points</span>
                          </a>
                        </div>
                      </li>
                     
                      <li className="divider"></li>
                      <li className="menu_item">
                        <div className="menu_item_inner">
                          {/* ::before */}
                          <span className="menu-head">General</span>
                        </div>
                      </li>
                      <li className="menu_item ">
                        <div className="menu_item_inner">
                          {/* ::before */}
                          <a title="Messages" href="/listings/messages">
                            <i className="icn shop">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/1380/1380338.png?ga=GA1.1.2106283487.1696538246&track=ais"
                                href="https://cdn-icons-png.flaticon.com/128/1380/1380338.png?ga=GA1.1.2106283487.1696538246&track=ais"
                              />
                            </i>
                            <span className="menu-item_title">Messages</span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item ">
                        <div className="menu_item_inner">
                          {/* ::before */}
                          <a title="My Credits" href="/listings/credits">
                            <i className="icn shop">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/423/423468.png?ga=GA1.1.973300323.1696606310&track=ais"
                                href="https://cdn-icons-png.flaticon.com/128/423/423468.png?ga=GA1.1.973300323.1696606310&track=ais"
                              />
                            </i>
                            <span className="menu-item_title">My Credits</span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item ">
                        <div className="menu_item_inner">
                          {/* ::before */}
                          <a title="Wishlist" href="/listings/wishlist">
                            <i className="icn shop">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/10238/10238087.png?ga=GA1.1.973300323.1696606310&track=ais"
                                href="https://cdn-icons-png.flaticon.com/128/10238/10238087.png?ga=GA1.1.973300323.1696606310&track=ais"
                              />
                            </i>
                            <span className="menu-item_title">Wishlist</span>
                          </a>
                        </div>
                      </li>
                      <li className="menu_item ">
                        <div className="menu_item_inner">
                          {/* ::before */}
                          <a
                            title="Saved Searchers"
                            href="/listings/saved-products-search"
                          >
                            <i className="icn shop">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/5042/5042310.png?ga=GA1.1.973300323.1696606310&track=ais"
                                href="https://cdn-icons-png.flaticon.com/128/5042/5042310.png?ga=GA1.1.973300323.1696606310&track=ais"
                              />
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
                            <i className="icn shop">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/10441/10441749.png?ga=GA1.1.973300323.1696606310&track=ais"
                                href="https://cdn-icons-png.flaticon.com/128/10441/10441749.png?ga=GA1.1.973300323.1696606310&track=ais"
                              />
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
                            <i className="icn shop">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/470/470756.png?ga=GA1.1.973300323.1696606310&track=ais"
                                href="src/assets/manage-addresses.png"
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
                            <i className="icn shop">
                              <img
                                src="https://cdn-icons-png.flaticon.com/128/3064/3064155.png?ga=GA1.1.973300323.1696606310&track=ais"
                                href="https://cdn-icons-png.flaticon.com/128/3064/3064155.png?ga=GA1.1.973300323.1696606310&track=ais"
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
                              <a
                                href="javascript:void(0);"
                                onclick="setSiteDefaultCurrency(5)"
                              >
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
