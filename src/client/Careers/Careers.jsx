import React, { useCallback, useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import './careers.css'
import CompanyStats from './partials/CompanyStats'
import Culture from './partials/Culture'
import LandingPage from './partials/LandingPage'
import Options from './partials/Options'
import OurLocations from './partials/OurLocations'

const Careers = ({setDropDown, careerImages, projectImages}) => {

  useEffect(()=>{
    window.scrollTo(0,0)
    setDropDown(false)

  },[])

  return (
    <div className='careers'>
        <LandingPage projectImages={projectImages}/>
        <CompanyStats />
        <OurLocations careerImages={careerImages}/>
        <Culture careerImages={careerImages}/>
        <Options careerImages={careerImages} />
        <Footer />
    </div>
  )
}

export default Careers