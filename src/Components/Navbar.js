import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo2.png';
import search from '../Assets/search.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='Navbar'>
      <div className='Navbar-left'>
        <div className='nav-img'>
         <Link to={'/RLOGI'}> <img src={logo} alt='' /> </Link>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to={'/RLOGI'}> <p className='active-link'>Home</p> </Link>
          <Link to={'/RLOGI/Blog'}> <p className='link'>Blog</p> </Link>
          <Link to={'/RLOGI/About'}> <p className='link'>About</p> </Link>
           <Link to={'/RLOGI/Contact'}> <p className='link'>Contact us</p> </Link>
        </div>
      </div>
      <div className='Navbar-right'>
        <div className='search'>
          <img className='search-img' src={search} alt='' />
          <input 
            type='text'
            placeholder='Search articles...' 
          />      
        </div>
        <button className='menu-button' onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </div>
  );
}

export default Navbar;