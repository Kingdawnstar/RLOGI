import React from 'react'
import './Home.css';
import Header from '../Components/Header';
import Homesummary from '../Components/Homesummary';
import Featured from '../Components/Featured';

const Home = () => {
  return (
      <div className='Home'>
      <Header />
      <div className='home2'><Homesummary /></div>
       <div className='Feat'><Featured /></div>
    </div>
  )
}

export default Home