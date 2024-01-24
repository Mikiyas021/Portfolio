import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Graphics from './Works/Graphics'
import Web from './Works/Web'
import Video from './Works/Video'
import Footer from './Footer'

function Works() {
  return (
    <div>
        <div className='workstitle'>
          <h1>MY WORK</h1>
          <h2>Awesome projects</h2>
        </div>
        <div className='navWorks'>
            <NavLink to='Graphics' id='graphics'>Graphics Designing</NavLink>
            <NavLink to='website' id='web'>Website Development</NavLink>
            <NavLink to='Video' id='video'>Video Editing</NavLink>
        </div>
        <Routes>
            <Route exact path='/Graphics' element={<Graphics />}></Route>
            <Route exact path='/Website' element={<Web/>}></Route>
            <Route exact path='/Video' element={<Video/>}></Route>
        </Routes>
        
    </div>
  )
}

export default Works