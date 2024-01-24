import React from 'react'
import weeding from './Graphics_Images/Weeding_mockup.png';
import turbo from './Graphics_Images/turbo_mockup.png';
import coffee from './Graphics_Images/Coffee_house_mock.png';
import barbar from './Graphics_Images/Gofere_barber_mockup.png';
import biruk from './Graphics_Images/Biruk_maintainance_mockup.jpg';
import resume from './Graphics_Images/Clean Simple Creative Designer Resume Template.jpg'
function Graphics() {
  return (
    <div className='GraphicWorksboxes'>
          <div id="box"><div><img src={weeding} alt="" /></div><h4>Weeding Invitation Card</h4></div>
          <div id="box"><div><img src={turbo} alt="" /></div><h4>Logo for Oumer Turbo Charger</h4></div>
          <div id="box"><div><img src={coffee} alt="" /></div><h4>Logo for Hirut Coffee House</h4></div>
          <div id="box"><div><img src={barbar} alt="" /></div><h4>Logo for Gofere Barber in Dessie</h4></div>
          <div id="box"><div><img src={biruk} alt="" /></div><h4>Poster design for Biruk Computer Maintainance</h4></div>
          <div id="box"><div><img src={resume} alt="" /></div><h4>Resume design for Mikiyas Gashaw</h4></div>
          
    </div>
  )
}

export default Graphics
