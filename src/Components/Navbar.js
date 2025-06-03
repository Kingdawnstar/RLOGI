import React from 'react'
import './Navbar.css';
import logo from '../Assets/logo2.png';
import search from '../Assets/search.png';

const Navbar = () => {
  return (
      <div className='Navbar'>
      <div className='Navbar-left'>
        <div className='nav-img'>
          <img src={logo} alt=''/>
        </div>
        <div className='nav-links'>
          <p>Home</p>
          <p>Blog</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
      <div className='Navbar-right'>
        <div className='search'>
          <img className='search-img' src={search} alt=''/>
          <input 
            type='text'
            placeholder='Search articles...' />      
          </div>
      </div>
    </div>
  )
}

export default Navbar