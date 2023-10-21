import "../contentDashboard/contentDashboard.css"

const ContentDashboard = () =>{
return (
    <div>
    <div className="content-wrapper">
      <div className="content-header row">
        <div className="col"> 
          <h2 className="content-header-title">Dashboard</h2>
        </div>
        <div className="col-auto">
          <div className="btn-group">
              <a href="/account/wishlist" className="btn btn-outline-primary btn--sm">Favorites </a>
              <a href="/account/my-addresses" className="btn btn-outline-primary btn--sm"> Manage Addresses </a>
          </div>
        </div>
      </div>
      <div className="content-body">
        <div className="js-widget-scroll widget-scroll slick-initialized slick-slider" role="toolbar">
          <div arial-live="polite" className="slick-list draggable">
            <div className="slick-track" role="listbox"  >
              <div className="widget widget-stats slick-slide slick-current slick-active" tabIndex="-1" role="option" aria-describedby='slick-slide00'  data-slick-index="0" aria-hidden="false">
                <a href="/account/credits" tabIndex="0">
                  <div className="cards">
                    <div className="cards-header">
                      <h5 className="cards-title">Credits</h5>
                      <i className="icn">
                        <img src="https://cdn-icons-png.flaticon.com/128/423/423468.png?ga=GA1.1.973300323.1696606310&track=ais" href="https://cdn-icons-png.flaticon.com/128/423/423468.png?ga=GA1.1.973300323.1696606310&track=ais"/>
                      </i>
                    </div>
                    <div className="cards-content">
                      <div className="stats">
                        <div className="stats-number">
                          <ul>
                            <li>
                              <span className="total">Total Credits</span>
                              <span className="total-numbers">$0.00</span>
                            </li>
                            <li>
                              <span className="total">Credits Earned Today</span>
                              <span className="total-numbers">$0.00</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="widget widget-stats slick-slide " tabIndex="-1" role="option" aria-describedby='slick-slide01'  data-slick-index="1" aria-hidden="true">
                <a href='/buyer/orders' tabIndex="-1">
                  <div className="cards">
                    <div className="cards-header">
                      <h5 className="cards-title">Orders</h5>
                      <i className="icn">
                        <img src="https://cdn-icons-png.flaticon.com/128/466/466200.png?ga=GA1.1.973300323.1696606310&track=ais" href="https://cdn-icons-png.flaticon.com/128/466/466200.png?ga=GA1.1.973300323.1696606310&track=ais"/>
                      </i>
                    </div>
                    <div className="cards-content">
                      <div className="stats">
                        <div className="stats-number">
                          <ul>
                            <li>
                              <span className="total">Total Orders</span>
                              <span className="total-numbers">0</span>
                            </li>
                            <li>
                              <span className="total">Pending Orders</span>
                              <span className="total-numbers">0</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="widget widget-stats slick-slide " tabIndex="-1" role="option" aria-describedby='slick-slide02'  data-slick-index="2" aria-hidden="true">
                <a href='/buyer/reward-points' tabIndex="-1">
                  <div className="cards">
                    <div className="cards-header">
                      <h5 className="cards-title">Reward Points</h5>
                      <i className="icn">
                        <img src="https://cdn-icons-png.flaticon.com/128/466/466200.png?ga=GA1.1.973300323.1696606310&track=ais" href="https://cdn-icons-png.flaticon.com/128/466/466200.png?ga=GA1.1.973300323.1696606310&track=ais"/>
                      </i>
                    </div>
                    <div className="cards-content">
                      <div className="stats">
                        <div className="stats-number">
                          <ul>
                            <li>
                              <span className="total">Current Reward Points</span>
                              <span className="total-numbers">0</span>
                            </li>
                            <li>
                              <span className="total">Currency Value</span>
                              <span className="total-numbers">$0.00</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="cards">
              <div className="cards-header">
                <h5 className="cards-title">Recent Orders</h5>
                    {/* <div class="actions"></div> */}
              </div>
              <div className="cards-content">
                <table className="table-scroll" >
                  <tbody>
                    <tr className="">
                      <th colSpan="2" width="70%">Order Details</th>
                      <th width="20%">Payment Info</th>
                      <th width="10%"></th>
                    </tr>
                    <tr>
                      <td colSpan="4">
                        <div className="block-empty-text-center">
                            <img loading="lazy" className="block_img" src="https://media.istockphoto.com/id/1035413550/vector/scrutiny-document-plan-icon-in-flat-style-review-statement-vector-illustration-on-white.jpg?s=612x612&w=0&k=20&c=TDOJkpL2Clw85P5I1gyJ9ilFwn2nTypMMgwWviBUdTw=" 
                            alt="No Record Found" width="80"/>
                            <h5>No Record Found</h5>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="cards">
              <div className="cards-header">
                <h5 className="cards-title">Latest Offers</h5>
                      {/* <div class="actions"></div> */}
                </div>
                <div className="cards-content">
                  <table className="table-scroll" >
                    <tbody>
                      <tr className="">
                        <th colSpan="2" width="55%">Offer Particulars</th>
                        <th width="25%">Expires On</th>
                        <th width="50%">Min Order</th>
                      </tr>
                      <tr>
                        <td colSpan="4">
                          <div className="block-empty-text-center">
                            <img loading="lazy" className="block_img" src="https://media.istockphoto.com/id/1035413550/vector/scrutiny-document-plan-icon-in-flat-style-review-statement-vector-illustration-on-white.jpg?s=612x612&w=0&k=20&c=TDOJkpL2Clw85P5I1gyJ9ilFwn2nTypMMgwWviBUdTw=" 
                            alt="No Record Found" width="80"/>
                            <h5>No Record Found</h5>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="cards">
              <div className="cards-header">
                <h5 className="cards-title">Return Requests</h5>
                    
              </div>
              <div className="cards-content">
                <table className="table-scroll" >
                  <tbody>
                    <tr className="">
                      <th width="70%">Order Details</th>
                      <th width="20%">Qty</th>
                      <th width="10%">Status</th>
                    </tr>
                    <tr>
                      <td colSpan="4">
                        <div className="block-empty-text-center">
                            <img loading="lazy" className="block_img" src="https://media.istockphoto.com/id/1035413550/vector/scrutiny-document-plan-icon-in-flat-style-review-statement-vector-illustration-on-white.jpg?s=612x612&w=0&k=20&c=TDOJkpL2Clw85P5I1gyJ9ilFwn2nTypMMgwWviBUdTw=" 
                            alt="No Record Found" width="80"/>
                            <h5>No Record Found</h5>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="cards">
              <div className="cards-header">
                <h5 className="cards-title">Cancellation Requests</h5>
                    
              </div>
              <div className="cards-content">
                <table className="table-scroll" >
                  <tbody>
                    <tr className="">
                      <th width="40%">Order Details</th>
                      <th width="50%">Details</th>
                      <th width="10%">Status</th>
                    </tr>
                    <tr>
                      <td colSpan="4">
                        <div className="block-empty-text-center">
                            <img loading="lazy" className="block_img" src="https://media.istockphoto.com/id/1035413550/vector/scrutiny-document-plan-icon-in-flat-style-review-statement-vector-illustration-on-white.jpg?s=612x612&w=0&k=20&c=TDOJkpL2Clw85P5I1gyJ9ilFwn2nTypMMgwWviBUdTw=" 
                            alt="No Record Found" width="80"/>
                            <h5>No Record Found</h5>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> */}
      </div>
        
      
    
    </div>
   
  );
}

export default ContentDashboard;