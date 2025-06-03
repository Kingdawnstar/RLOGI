import React from 'react'
import './Latest.css';
import read from '../Assets/read.png';
import inno from '../Assets/inno.png';
import team from '../Assets/team.png';
import chess from '../Assets/chessm.png';
import dec from '../Assets/dec.png'
import eq from '../Assets/eq.png';
import mas from '../Assets/mas.png';

const Latest = () => {
  return (
      <div className='Latest'>
            <div className="Lat-top">
                        <h3>Latest Insights</h3>
                        <div className="Lat-view">
                            <p>Browse All Articles</p>
                            <img src={read} alt=""/>
                        </div>
                        
                    </div>
                
                <div className="Articles">
                  <div className="Article">
                    <img src={inno} alt="" />
                    <p className="top-writeup">Personal Growth</p>
                    <p className="art-cap">The Power of a Growth Mindset</p>
                    <p className="exp">
                      Discover how shifting your perspective can unlock unparallel
                      potential and resilience in both personal and professional life
                    </p>
                    <div className="artdet">
                      <p>Dr. Emily Carter</p>
                      <p>Oct 28, 2023</p>
                    </div>
                    <div className="read">
                      <p className="readmore">Read More</p>
                      <img src={read} alt="" />
                    </div>
                  </div>
                  <div className="Article">
                    <img src={chess} alt="" />
                    <p className="top-writeup">Resilience</p>
                    <p className="art-cap">Cultivating Unwavering Resilience</p>
                    <p className="exp">
                      Discover how shifting your perspective can unlock unparallel
                      potential and resilience in both personal and professional life
                    </p>
                    <div className="artdet">
                      <p>Dr. Emily Carter</p>
                      <p>Oct 28, 2023</p>
                    </div>
                    <div className="read">
                      <p className="readmore">Read More</p>
                      <img src={read} alt="" />
                    </div>
                  </div>
                  <div className="Article">
                    <img src={team} alt="" />
                    <p className="top-writeup">Leadership Strategies</p>
                    <p className="art-cap">Leading with Empathy and Vision</p>
                    <p className="exp">
                      Learn the essential qualities of compassionate leadership and how to
                      inspire your team towards a shared, brighter future
                    </p>
                    <div className="artdet">
                      <p>Dr. Marcus J. Tom</p>
                      <p>Oct 20, 2023</p>
                    </div>
                    <div className="read">
                      <p className="readmore">Read More</p>
                      <img src={read} alt="" />
                    </div>
              </div>
               <div className="Article">
                    <img src={eq} alt="" />
                    <p className="top-writeup">Leadership Strategies</p>
                    <p className="art-cap">Leading with Empathy and Vision</p>
                    <p className="exp">
                      Learn the essential qualities of compassionate leadership and how to
                      inspire your team towards a shared, brighter future
                    </p>
                    <div className="artdet">
                      <p>Dr. Marcus J. Tom</p>
                      <p>Oct 20, 2023</p>
                    </div>
                    <div className="read">
                      <p className="readmore">Read More</p>
                      <img src={read} alt="" />
                    </div>
              </div>
               <div className="Article">
                    <img src={dec} alt="" />
                    <p className="top-writeup">Leadership Strategies</p>
                    <p className="art-cap">Leading with Empathy and Vision</p>
                    <p className="exp">
                      Learn the essential qualities of compassionate leadership and how to
                      inspire your team towards a shared, brighter future
                    </p>
                    <div className="artdet">
                      <p>Dr. Marcus J. Tom</p>
                      <p>Oct 20, 2023</p>
                    </div>
                    <div className="read">
                      <p className="readmore">Read More</p>
                      <img src={read} alt="" />
                    </div>
              </div>
               <div className="Article">
                    <img src={mas} alt="" />
                    <p className="top-writeup">Leadership Strategies</p>
                    <p className="art-cap">Leading with Empathy and Vision</p>
                    <p className="exp">
                      Learn the essential qualities of compassionate leadership and how to
                      inspire your team towards a shared, brighter future
                    </p>
                    <div className="artdet">
                      <p>Dr. Marcus J. Tom</p>
                      <p>Oct 20, 2023</p>
                    </div>
                    <div className="read">
                      <p className="readmore">Read More</p>
                      <img src={read} alt="" />
                    </div>
                  </div>
          </div>
          
          
    </div>
  )
}

export default Latest