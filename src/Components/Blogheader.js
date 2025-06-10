import React from 'react'
import './Blogheader.css';

const Blogheader = () => {
  return (
      <div className='Blogheader'>
          <div className='first-block'>
              <h1>Our Blog</h1>
              <p>Discover insightful articles and resources on leadership,
                  mindset transformation and personal growth</p>
          </div>
          <div className='second-block'>
              <h1>Embracing Change: The Leader's Guide to Navigating Uncertainty</h1>
              <p>In an ever-evolving world, the ability to embrace and lead through Change
                  is paramount. This article explores strategies for fostering adaptability and resilience
                  withing your team, turning challenges into opportunities for growth and innovation.
              </p>
              <button className='but'>Read more</button>
          </div>
          <div className='blog-cat'>
              <div className='cat-search'>
                  <input type='text' placeholder='search articles by title or keywords' />
              </div>
              <div className='cats'>
                  <p className='active'>All</p>
                  <p>Leadership</p>
                  <p>Mindset</p>
                  <p>Teams</p>
                  <p>Strategy</p>
                  <p>Communication</p>
                  <p>Resilience</p>
                  <p>Innovation</p>
                  <p>Personal Growth</p>
                  <p>Management</p>
              </div>
          </div>
    </div>
  )
}

export default Blogheader