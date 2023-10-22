import "../listingHeader/listingHeader.css";
import img47 from '../../../assets/47.jpg'
import img48 from '../../../assets/48.jpg'


const ListingHeader =() => { 
    return (
        <header id="header-dashboard" className="header-dashboard no-print" role="header-dashboard">
        <div className="header-icons-group">
          <ul className="c-header-links">
            <li className>
              <a title="Dashboard" data-org-url="/buyer" href="/listings/dashboard">
                <i className="icn-dashboard">
                  {/* <img class="img-dashboard"> */}
                  <img src={img47} href={img47} className="icon-image"/>
                  {/* </img> */}
                  
                </i>
              </a>
            </li>
            <li>
              <a title="Home" target="_blank" href="/">
                <i className="icn-home">
                  <img src={img48} href={img48} className="icon-image" />
                </i>
              </a>
            </li>
          </ul>
          
        </div>
      </header>
    )
}

export default ListingHeader;