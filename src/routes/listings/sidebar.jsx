
import { Link } from 'react-router-dom';
import "./sidebar.css";
import { useState } from "react";
import img50 from '../../assets/50.jpg'
import img51 from '../../assets/51.jpg'
import img52 from '../../assets/52.jpg'
import img53 from '../../assets/53.jpg'
import img54 from '../../assets/54.jpg'
import img55 from '../../assets/55.jpg'
import img56 from '../../assets/56.jpg'
import img57 from '../../assets/57.jpg'
import img58 from '../../assets/58.jpg'
import img59 from '../../assets/59.jpg'
import img60 from '../../assets/60.jpg'
import img61 from '../../assets/61.jpg'
import img62 from '../../assets/62.jpg'
import img63 from '../../assets/63.jpg'
import img64 from '../../assets/64.jpg'

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
                                src={img50}
                                
                                href={img50}
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
                                src={img51}
                                href={img51}
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
                                src={img52}
                                href={img52}
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
                                src={img53}
                                href={img53}
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
                                src={img54}
                                href={img54}
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
                                src={img55}
                                href={img55}
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
                                src={img56}
                                href={img56}
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
                                src={img57}
                                href={img57}
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
                                src={img58}
                                href={img58}
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
                                src={img59}
                                href={img59}
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
                                src={img60}
                                href={img60}
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
                                src={img61}
                                href={img61}
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
                                src={img62}
                                href={img62}
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
                                src={img63}
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
                                src={img64}
                                href={img64}
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
