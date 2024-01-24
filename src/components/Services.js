import React from 'react'
import design from './images/design.png';
import video from './images/Videos.png';
import web from './images/web.png';
import { NavLink, Routes } from 'react-router-dom';
import Footer from './Footer';

function Services() {
  return (
    <div className='services'>
        <h1>My Services</h1>
        <div className='boxesservices'>
          <div id='boxes'>
          <div>
            <img src={design} alt="" />
            </div><h3>Graphics Designing</h3></div>
          <div id='boxes'>
          <div>
          <img src={video} alt="" />
            </div><h3>Video Editing</h3></div>
          <div id='boxes'>
          <div>
          <img src={web} alt="" />
            </div><h3>Website Development</h3></div>
        </div>
        <div className='HomeLink'>
          <h3>Click here to see my works</h3> 
            <NavLink to='/portfolio' className='button-17 '>My Works</NavLink>
            
        </div>
        
    </div>
  )
}

export default Services