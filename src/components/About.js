import React from 'react'
import './About.css'
import intern from './images/intern.png';
import Graduated from './images/graduate.png';
import logo from './images/micky_logo.png';



function About() {
  return (
    <div className='Aboutpage'>
      <div className='Aboutpagediv'>
        <h3>Who am I?</h3>
        <h2>About Me</h2>
      </div>
        <p>I am a highly motivated and enthusiastic individual with a passion for learning and personal development. I am a quick learner and enjoy taking on new challenges. I have excellent communication skill and i am able to work well both independently and as a part of a team.I have excellent communication skill and i am able to work well both independently and as a part of a team.I have excellent communication skill and i am able to work well both independently and as a part of a team.</p>
      <div>
        <div className='boxesabout'>
          <div id="box"><div id='imgbox'><img src={intern} alt="" /></div><div id='boxtext'><h3>July - Auguest 2022</h3><h4>Internship at Abyssinia Bank</h4></div></div>
          <div id="box"><div id='imgbox'><img src={Graduated} alt="" /></div><div id='boxtext'><h3>July 2023</h3><h4>Graduated from Bahir Dar university with Bsc degree in Computer Science</h4></div></div>
          <div id="box"><div id='imgbox'><img src={logo} alt="" /></div><div id='boxtext'><h3>2023</h3><h4>Freelancer as Graphics designer, Video editor and web developer</h4></div></div>
          
        </div>
       
      </div>
      
    </div>
  )
}

export default About
