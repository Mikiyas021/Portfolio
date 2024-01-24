import React from 'react'
import Footer from './Footer'
import contact from './images/contact.svg'

function Contact() {
  return (
    <div>
    <div className='contactpage'>
        <div className='imgcontact'>
          <img src={contact}></img>
        </div>
        <div className='contactinfo'>
            <div id='boxes'>
                <div><p><i class="fa-solid fa-phone"></i></p><p>0906449327</p></div>
                <div><p><i class="fa-solid fa-phone"></i></p><p>0984948339</p></div>
                <div><p><i class="fa-solid fa-envelope"></i></p><p>mikiyas021@gmail.com</p></div>

            </div>
        </div>
       
    </div> 
    <Footer />
    </div>
  )
}

export default Contact
