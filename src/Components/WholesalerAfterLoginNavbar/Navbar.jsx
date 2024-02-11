import {useState} from 'react'
import './navbar.css'
// import {MdOutlineTravelExplore} from 'react-icons/md'
import {RiPlantFill} from 'react-icons/ri'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import {HiOutlineInboxArrowDown} from 'react-icons/hi2'
import {FcBusinessman} from 'react-icons/fc'
// import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const[active,setActive] = useState('navBar');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  // Function to toggle navBar
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }
  // Function to remove navBar
  const removeNavbar = ()=>{
    setActive('navBar');
    setDropdownVisible(false);
  }
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <section className='navBarSection'>
      <header className='header flex'>

        <div className='logoDiv'>
          <a href='/whole/home' className='logo flex'>
          <RiPlantFill className='icon'/>
            <h1 className='logo-heading'> GROW TRADE NET</h1>
            <h5 className='farmers-heading'>WHOLESALERS</h5>
          </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href='/whole/home' className='navLink'>Home</a>
            </li>
            <li className='navItem'>
              {/* <CustomLink to='/information' className='navLink'>Information</CustomLink> */}
              {/* <a href='/information' className='navLink'>Information</a> */}
            </li>
            <li className='navItem'>
              {/* <CustomLink to='/market' className='navLink'>Market</CustomLink> */}
              <a href='/whole/market' className='navLink'>Market</a>
            </li>
            <li className='navItem'>
              <a href='/whole/list' className='navLink'>Listings</a>
            </li>
            <li className='navItem'>
              <a href='/whole/support' className='navLink'>Support</a>
            </li>
            {/* <li className='navItem'>
              <a href='#link' className='navLink'>Dashboard</a>
            </li>
            */}
            <button className='btn'>
            <a href="#link"><HiOutlineInboxArrowDown className='icon'/></a>
            </button> 

            {/* profile photo */}
              <button className="btn" onClick={toggleDropdown}>
                <FcBusinessman className="icon" />
              </button>
              {dropdownVisible && (
                <div className="dropdownMenu">
                  <ul>
                    <li>
                      <a href="/profile">Profile</a>
                    </li>
                    <li>
                      <a href="/logout">Logout</a>
                    </li>
                  </ul>
                </div>
              )}
              
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav} className='toggleNavbar'>
          <TbGridDots className='icon'/>

        </div>

      </header>
    </section>
  )
}


export default Navbar