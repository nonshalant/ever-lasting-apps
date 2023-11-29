import React from 'react'
import { useEffect } from 'react'
import Footer from '../../Footer/Footer'
import Contact from '../Webdev/partials/Contact'
import Process from '../Webdev/partials/Process'
import './DigitalMarketing.css'
import DigitalMarkingLanding from './partials/DigitalMarketingLanding'

const DigitalMarketing = ({setDropDown}) => {
    useEffect (()=>{
        window.scrollTo(0,0)
        setDropDown(false)
    },[])
    
  return (
        <div className='digital-marketing'>
            <DigitalMarkingLanding />
            <Process />
            <Contact />
            <Footer />
        </div>
    )
}

export default DigitalMarketing