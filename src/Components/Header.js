import React from 'react'
import './Header.css';
import Homebg from '../Assets/Homebg.png'

const Header = () => {
  return (
      <div className='Header'>
          <div className='header-img'>
              <img src={Homebg} alt='' />
              <div className='overlay'></div>
          </div>
          <div className='write-up'>
              <div className='big-text'>
                  <h1>Tranform Your Mindset,
                      Tranform Your Life
                  </h1>
              </div>
              <div className='paragraph'>
                  <p>Welcome to a place where your mind is enlightened to function beyond mediocrity and live up to the fullness of your potentials</p>
              </div>
              <div className='buttons'>
                  <button className='explore'>Explore Our Blog</button>
                  <button className='learn'>Learn More About Us</button>
              </div>
        </div>
    </div>
  )
}

export default Header