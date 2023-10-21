import './main.css'

const Navbar = () => {
    return (
            <ul className='navLists flex'>
                <a href='/dashboard' className='navLink'>DASHBOARD</a>
                <a href='/farmers' className='navLink'>FARMERS</a>
                <a href='/exporters' className='navLink'>EXPORTERS</a>
                <a href='/support' className='navLink'>Support</a>
            </ul>
    )
  }
  
  export default Navbar
  