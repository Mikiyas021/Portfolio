import React from 'react'
import Footer from './Footer'
import contact from './images/contact.svg'
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
function Contact() {
  return (
    <div>
    <div className='contactpage'>
        <div className='imgcontact'>
          <img src={contact}></img>
        </div>
        <div className='contactinfo'>
            <div id='boxes'>
                <div><p><FontAwesomeIcon icon={faPhone} /></p><p>0906449327</p></div>
                <div><p><FontAwesomeIcon icon={faPhone} /></p><p>0984948339</p></div>
                <div><p><FontAwesomeIcon icon={faEnvelope} /></p><p>mikiyas021@gmail.com</p></div>

            </div>
        </div>
       
    </div> 
    <Footer />
    </div>
  )
}

export default Contact