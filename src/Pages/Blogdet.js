import React from 'react'
import './Blogdet.css';
import Blogleft from '../Components/Blogleft';
import Blogright from '../Components/Blogright';
import Comment from '../Components/Comment';

const Blogdet = () => {
  return (
      <div className='Blogdet'>
          <h1>Blogdet</h1>
          <div className='upper'>
              <div className='Blogleft-sec'>
                  <Blogleft/>
              </div>
              <div className='Blogright-sec'>
                  <Blogright/>
              </div>
          </div>
          <div className='lower'>
              <Comment/>
          </div>
    </div>
  )
}

export default Blogdet