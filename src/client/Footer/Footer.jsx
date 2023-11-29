import React from 'react'
import './footer.css'

// icons 
import {BsFillTelephoneFill, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_container">
            <div className="column_one column">
                <h2>Office Headquarters</h2>
                <h3>New York, New York</h3>
                <a href="tel:6463522512"><BsFillTelephoneFill/> 646-352-2512</a>
                <br />
                <a href="mailto:everlastapps.co@gmail.com">everlastapps.co@gmail.com</a>
            </div>
            <div className="social_links column">
                <h2> Follow Us!</h2>
                <a href="http://instagram.com/everlastingapps" target='_blank'><BsInstagram/> Instagram</a>
            </div>
        </div>
    </div>
  )
}

export default Footer