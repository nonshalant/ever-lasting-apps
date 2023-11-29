import React, { useEffect } from 'react'
import { images } from '../../images'
import Footer from '../Footer/Footer'
import './About.css'
import AboutLanding from './partials/AboutLanding'
import LeftSide from './partials/LeftSide'

const About = ({projectImages}) => {

  const aboutImages = images.about;

  useEffect(()=>{
    window.scrollTo(0,0)
    
  },[])

  return (
    <div className='about'>
        <AboutLanding projectImages={projectImages} />
        <LeftSide aboutImages={aboutImages} />
        <Footer />
    </div>
  )
}

export default About