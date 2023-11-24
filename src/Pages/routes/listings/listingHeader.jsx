import "./listingHeader.css";

const ListingHeader =() => { 
    return (
        <header id="header-dashboard" className="header-dashboard no-print" role="header-dashboard">
        <div className="header-icons-group">
          <ul className="c-header-links">
            <li className>
              <a title="Dashboard" data-org-url="/buyer" href="/listings/dashboard">
                <i className="icn-dashboard">
                  {/* <img class="img-dashboard"> */}
                  <img src="https://cdn-icons-png.flaticon.com/128/1256/1256936.png?ga=GA1.1.2106283487.1696538246&track=ais" href="https://cdn-icons-png.flaticon.com/128/1256/1256936.png?ga=GA1.1.2106283487.1696538246&track=ais" className="icon-image"/>
                  {/* </img> */}
                  
                </i>
              </a>
            </li>
            <li>
              <a title="Home" target="_blank" href="/">
                <i className="icn-home">
                  <img src="https://cdn-icons-png.flaticon.com/128/25/25694.png?ga=GA1.1.2106283487.1696538246&track=ais" href="https://cdn-icons-png.flaticon.com/128/25/25694.png?ga=GA1.1.2106283487.1696538246&track=ais" className="icon-image" />
                </i>
              </a>
            </li>
          </ul>
          
        </div>
      </header>
    )
}

export default ListingHeader;