import React, { useEffect } from 'react'
import './contact.css'
import LetsGetStarted from '../Home/partials/LetsGetStarted'
import Footer from '../Footer/Footer'

const Contact = () => {

  useEffect(()=>{
    
    window.scrollTo(0,0)
  },[])

  return (
    <div className='contact_page'>
        <LetsGetStarted />
        <Footer/>
    </div>
  )
}

export default Contact