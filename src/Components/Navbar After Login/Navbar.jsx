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
            <h1><RiPlantFill className='icon'/> GROW TRADE NET</h1>
          </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href='/home' className='navLink'>Home</a>
            </li>
            <li className='navItem'>
              {/* <CustomLink to='/information' className='navLink'>Information</CustomLink> */}
              {/* <a href='/information' className='navLink'>Information</a> */}
            </li>
            <li className='navItem'>
              {/* <CustomLink to='/market' className='navLink'>Market</CustomLink> */}
              <a href='/market' className='navLink'>Market</a>
            </li>
            <li className='navItem'>
              <a href='/weather' className='navLink'>Weather</a>
            </li>
            <li className='navItem'>
              <a href='/support' className='navLink'>Support</a>
            </li>
            {/* <li className='navItem'>
              <a href='#link' className='navLink'>Dashboard</a>
            </li>
            */}
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
  )
}


export default Navbar