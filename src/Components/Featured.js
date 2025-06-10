import React from "react";
import "./Featured.css";
import mount from "../Assets/mount.png";
import fb from "../Assets/faceboard.png";
import cliff from "../Assets/cliff.png";
import read from "../Assets/read.png";

const Featured = () => {
  return (
      <div className="Featured">
          <div className="top">
              <h3>Featured Articles</h3>
              <div className="view">
                  <p>View All Articles</p>
                  <img src={read} alt=""/>
              </div>
              
          </div>
      
      <div className="Articles">
        <div className="Article">
          <img src={mount} alt="" />
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
          <img src={fb} alt="" />
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
          <img src={cliff} alt="" />
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
          <img src={mount} alt="" />
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
      </div>
    </div>
  );
};

export default Featured;
