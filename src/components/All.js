import React, { useState } from 'react'
import { Link, Routes,Route, NavLink } from 'react-router-dom';
import './Front.css';
import About from './About';
import Contact from './Contact.js';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Home from './Home.js';
import Services from './Services.js';
import Works from './Works.js';
function All() {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () =>{
    setShowMenu(!showMenu);
  }
  return (
    <div>
        <nav  className="header">
        <div className='headdiv'>
        <div className='likelogo'><h2 id='first'>Personal</h2><h2 id='second'>Portfolio</h2></div><div className='menuicon'><button onClick={toggleMenu} id='menuicon'><FontAwesomeIcon icon={faBars} /></button></div>
      </div>
      
       <ul className={showMenu? 'navclass' : 'menu2'}> 

       <NavLink to='/' id='home'><li>HOME</li></NavLink>
       <NavLink to='/about' id='about'><li>ABOUT</li></NavLink>
       <NavLink to='/services' id='services'><li>SERVICES</li></NavLink>
       <NavLink to='/portfolio' id='portfolio'><li>WORKS</li></NavLink>
       <NavLink to='/contact' id='contact'><li>CONTACT ME</li></NavLink>
      
        </ul> 
       </nav>
       <div className={showMenu ? 'navclass2': ' menu'}>
       <NavLink to='/' id='home'><li>HOME</li></NavLink>
       <NavLink to='/about' id='about'><li>ABOUT</li></NavLink>
       <NavLink to='/services' id='services'><li>SERVICES</li></NavLink>
       <NavLink to='/portfolio' id='portfolio'><li>WORKS</li></NavLink>
       <NavLink to='/contact' id='contact'><li>CONTACT ME</li></NavLink>
       </div>
       <Routes>
             <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/about' element={<About/>}></Route>
              <Route exact path='/contact' element={<Contact/>}></Route>
              <Route exact path='/services' element={<Services/>}></Route>
              <Route exact path='/portfolio/*' element={<Works/>}></Route>



          </Routes>

    </div>
  )
}

export default All