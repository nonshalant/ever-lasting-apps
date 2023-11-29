// dependencies
import React, { useEffect } from 'react'
import './webdev.css'
import ExpertiseLanding from './partials/WebDevLanding'
import Process from './partials/Process'
import Footer from '../../Footer/Footer'
import Contact from './partials/Contact'

const WebDev = ({setDropDown}) => {
  useEffect(()=>{
    window.scrollTo(0,0)
    setDropDown(false)
  },[])
  
  return (
    <div className='webdev'>
        <ExpertiseLanding />
        <div className="process_container_outer">
          <h1>Development process</h1>
          <Process />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default WebDev