import React from 'react'
import './Home.css';
import Header from '../Components/Header';
import Homesummary from '../Components/Homesummary';
import Featured from '../Components/Featured';
import Elevate from '../Components/Elevate';
import Latest from '../Components/Latest';
import Unlock from '../Components/Unlock';


const Home = () => {
  return (
      <div className='Home'>
      <Header />
      <div className='home2'><Homesummary /></div>
      <div className='Feat'><Featured /></div>
      <div className='Ele'><Elevate /></div>
      <div className='Lat'><Latest /></div>
      <div className='Unl'><Unlock /></div>
    </div>
  )
}

export default Home