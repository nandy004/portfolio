import React from 'react'
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

const index = () => {
  return (
    <>
    <div className='space-y-32'>
    <Navbar/>
    <section id="Home">
  <div className="h-16 md:h-20"></div> {/* Spacer */}
  <Home />
</section>
<section id="About">
  <div className="h-16 md:h-20"></div>
  <About />
</section>
<section id="Projects">
  <div className="h-16 md:h-20"></div>
  <Projects />
</section>
<section id="Contact">
  <div className="h-16 md:h-20"></div>
  <Contact />
</section>
    </div>
   
    </>
  )
}

export default index