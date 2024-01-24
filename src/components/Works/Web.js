import React from 'react'
import example from './Graphics_Images/web_dev.jpg'
import Footer from '../Footer'
function Web() {
  return (
    <div className='Webboxes'>
          <div id="box"><div><img src={example} alt="" /></div><h4>E-learning System for Capital College of Bussiness and Health Science(CCOBH)</h4></div>
          <div id="box"><div><img src={example} alt="" /></div><h4>Ethiopian Historic Site</h4></div>
          <div id="box"><div><img src={example} alt="" /></div><h4>E-commerce site</h4></div>
        
    </div>
  )
}

export default Web