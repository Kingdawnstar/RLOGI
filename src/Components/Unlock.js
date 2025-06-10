import React from 'react'
import './Unlock.css';

const Unlock = () => {
  return (
      <div className='Unlock'>
          <div className='unlock-box'>
              <div className='unlock-left'>
                  <h3>Unlock Your Leadership Potential. Stay Informed.</h3>
                  <p>Receive weekly insights, exclusive articles and event invitations
                      directly in your inbox. No spam, just pure value.
                  </p>
              </div>
              <div className='unlock-right'>
                  <input type='text' placeholder='Enter your email address' />
                  <button>Subscribe Now</button>
              </div>
        </div>
    </div>
  )
}

export default Unlock