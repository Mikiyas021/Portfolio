import React from 'react'
import About from './About';
import Footer from './Footer';
import Maincontent from './Maincontent';
import Services from './Services';

function Home() {
  return (
    <div>
         <div>
          
          <Maincontent />
          <About />
          <Services />
          <Footer />
          
        </div>
    </div>
  )
}

export default Home