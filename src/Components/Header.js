//import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContex';
import '../styles/header.css';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div className='header'>
      <nav className='navbar'>
        <div className='nav-links'>
          <div className='nav-item'>
            <Link className='navbar-logo' to='/'>Grow Trade Net</Link>
          </div>
          {user ? (
            <>
              <div className='nav-item'>
                <Link className='nav-link' to='/dashboard'>Dashboard</Link>
              </div>
              <div className='nav-item'>
                <div className='user-info'>Hi {user.username}</div>
              </div>
              <div className='nav-item'>
                <button className='logout-button' onClick={logout}>Logout</button>
              </div>
            </>
          ) : (
            <>
              <div className='nav-item'>
                <Link className='nav-link' to='/login'>Login</Link>
              </div>
              <div className='nav-item'>
                <Link className='nav-link' to='/register'>Register</Link>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
