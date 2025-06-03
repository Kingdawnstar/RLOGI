import React from 'react'
import './Homesummary.css';
import Sumpic from '../Assets/sumpic.png'
import tran from '../Assets/tran.png'
import comm from '../Assets/comm.png'

const Homesummary = () => {
  return (
    <div className='Homesummary'>
          <div className='sum-left'>
              <div className='caption'>
                  <h2>Our Purpose: Empowering Leaders to Thrive</h2>
              </div>
              <div className='sum-para'>
                  <div className='first-para'>
                      <h3>Vision</h3>
                      <p>The Purpose of this great move is to build and raise selfless, sacrificial,
                          visionary and revolutionary leaders that would effect transformational change in
                          every aspect of human stratification thereby becoming agent of societal change    
                      </p>
                  </div>
                  <div className='second-para'>
                      <h3>Mission</h3>
                      <p>Equipping people who are visionless, timid, have low self esteem and ignorant of their
                          inherent potential with the right and required knowledge to discover who they are and
                          become the best version of themselves turning them into astounding leaders for global impact.</p>
                  </div>
                  <div className='left-bottom'>
                      <div className='transform'>
                          <img className='trans' src={tran} alt='' />
                          <div className='par'>
                              <p className='thick'>
                                  Transformative Insights
                              </p>
                              <p>Gain fresh Perspectives that challenge old beliefs
                                  and foster new understanding.
                              </p>
                          </div>
                      </div>
                      <div className='community'>
                          <img className='commun' src={comm} alt='' />
                          <div className='par2'>
                              <p className='thick'>
                                  Community Connection
                              </p>
                              <p>Connect with a network of like-minded leaders and visionary</p>
                          </div>
                      </div>
                  </div>
              </div>
              
          </div>
          <div className='sum-right'>
                  <img className='sum-photo' src={Sumpic} alt=''/>
              </div>
    </div>
  )
}

export default Homesummary