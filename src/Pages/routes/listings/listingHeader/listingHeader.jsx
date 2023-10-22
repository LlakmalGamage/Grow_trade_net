import "../listingHeader/listingHeader.css"
import dashboard from "../../../assets/icon-dashboard.png"
import home from "../../../assets/Home.png"

const ListingHeader =() => { 
    return (
        <header id="header-dashboard" className="header-dashboard no-print" role="header-dashboard">
        <div className="header-icons-group">
          <ul className="c-header-links">
            <li className>
              <a title="Dashboard" data-org-url="/buyer" href="/listings/dashboard">
                <i className="icn-dashboard">
                  <img src={dashboard} className="icon-image"></img>
                  
                </i>
              </a>
            </li>
            <li>
              <a title="Home" target="_blank" href="/">
                <i className="icn-home">
                  <img src={home} className="icon-image"/>
                </i>
              </a>
            </li>
          </ul>
          
        </div>
      </header>
    )
}

export default ListingHeader;