import React from 'react'
import { useEffect } from 'react'
import Footer from '../../Footer/Footer'
import Contact from '../Webdev/partials/Contact'
import Process from './partials/Process'
import AppDevelopmentLanding from './partials/AppDevelopmentLanding'
import './appdevelopment.css'

const AppDevelopment = ({setDropDown}) => {
  useEffect(()=>{
    window.scrollTo(0,0)
    setDropDown(false)
  },[])
  
  return (
    <div className='user-experience'>
        <AppDevelopmentLanding />
        <div className="process_container_outer">
          <h1>Development process</h1>
          <Process />
        </div>
        <Contact />
        <Footer />
    </div>
  )
}

export default AppDevelopment