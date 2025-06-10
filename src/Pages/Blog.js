import React from 'react'
import './Blog.css';
import Blogheader from '../Components/Blogheader';
import Blogs from '../Components/Blogs';

const Blog = () => {
  return (
      <div className='Blog-sec'>
          <div className='blog-top'>
              <Blogheader />
          </div>
          <div className='Blogs-sec'>
              <Blogs />
          </div>
    </div>
  )
}

export default Blog