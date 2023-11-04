import {useState} from 'react';
import './navbar.css';
// import {MdOutlineTravelExplore} from 'react-icons/md';
import {RiPlantFill} from 'react-icons/ri';
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';
import {HiOutlineInboxArrowDown} from 'react-icons/hi2';
import {FcBusinessman} from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const[active,setActive] = useState('navBar')
  // Function to toggle navBar
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }
  // Function to remove navBar
  const removeNavbar = ()=>{
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
      <header className='header flex'>

      <div className='logoDiv'>
          <a href='/home' className='logo flex'>
          <RiPlantFill className='icon'/>
            <h1 className='logo-heading'> GROW TRADE NET</h1>
            <h5 className='farmers-heading'>WHOLESALERS</h5>
          </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              {/*<a href='#link' className='navLink'>Home</a>*/}
              <Link to="/home_w" className="navLink" >
              Home
              </Link>
            </li>

            <li className='navItem'>
              {/*<a href='#link' className='navLink'>Listings</a>*/}
              <Link to="/listings" className="navLink" >
              Listings
              </Link>
            </li>

            <li className='navItem'>
              {/*<a href='#link' className='navLink'>Market</a>*/}
              <Link to="/market" className="navLink" >
              Market
              </Link>
            </li>

            <li className='navItem'>
              {/*<a href='#link' className='navLink'>Contact</a>*/}
              <Link to="/support_w" className="navLink" >
              Support
              </Link>
            </li>

            
            


           
 

            <button className='btn'>
            <a href="#link"><HiOutlineInboxArrowDown className='icon'/></a>
            </button> 

            <button className='btn'>
            <a href="#link"><FcBusinessman className='icon'/></a>
            </button> 

            {/* <li className='navItem'>
              <a href='#' className='navLink'>Login</a>
            </li> 
            <li className='navItem'>
              <a href='#' className='navLink'>Sign Up</a>
            </li>  */}
            
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
  );
};

export default Navbar;
