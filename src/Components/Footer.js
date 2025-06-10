import React from 'react'
import './Footer.css';
import Logo from '../Assets/logo2.png';
import twit from '../Assets/twit.jpg';
import faceb from '../Assets/faceb.jpg';
import insta from '../Assets/insta.jpg'

const Footer = () => {
  return (
      <div className='Footer'>
          <div className='foot-top'>
              <img src={Logo} alt='' />
              <p>Raising Leaders of Global Impact</p>
          </div>
          <div className='foot-bot'>
              <p className='lang'>English</p>
              <p className='des'><span>c</span>2025 Raising Leaders of Global Impact</p>
              <div className='foot-bot-img'>
                  <img src={faceb} alt='' />
                  <img src={twit} alt='' />
                    <img src={insta} alt='' />
              </div>
          </div>
    </div>
  )
}

export default Footer