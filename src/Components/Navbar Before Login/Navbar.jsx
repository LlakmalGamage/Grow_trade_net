import {useState} from 'react'
import './navbar.css'
// import {MdOutlineTravelExplore} from 'react-icons/md'
import {RiPlantFill} from 'react-icons/ri'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'


const Navbar = () => {
  const[active,setActive] = useState('navBar');
  // Function to toggle navBar
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }
  // Function to remove navBar
  const removeNavbar = ()=>{
    setActive('navBar');
  }

  return (
    <section className='navBarSection'>
      <header className='header flex'>

        <div className='logoDiv'>
          <a href='/home' className='logo flex'>
          <RiPlantFill className='icon'/>
            <h1 className='logo-heading'> GROW TRADE NET</h1>
            <h5 className='farmers-heading'>FARMERS</h5>
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
              <a href='/support_f' className='navLink'>Support</a>
            </li>
            <li className='navItem'>
              <a href='#' className='navLink'>Login</a>
            </li> 
            <li className='navItem'>
              <a href='#' className='navLink'>Sign Up</a>
            </li> 
        
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

            
  