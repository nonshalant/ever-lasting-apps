import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";

// icons 
import {BsFillTelephoneFill} from 'react-icons/bs'
import {ImLocation} from 'react-icons/im'
import emailjs from '@emailjs/browser';

const LetsGetStarted = () => {
    const [formInputs, setFormInputs] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phoneNumber: '',
        description: '',
        hearAboutUs: '',
    })

    const [verified, setVerified] = useState('')

    const handleInputChange = (e) => {
        setFormInputs(
            {...formInputs, [e.target.name]: e.target.value}
        )
    }

    const checkIfVerified = () => {
        setVerified(true)
    }
     
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_u56okd4', 'template_rfhdnwm', e.target, 'X1AhV2j4lZFoBsbdP')
        alert('Your email has been sent. Someone from Ever Lasting Apps will be in contact with you shortly! Thank you.')
        setFormInputs({
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            phoneNumber: '',
            description: '',
            hearAboutUs: '',
        })
    };

    // const isMobile = useMediaQuery({ query: `(max-width: 767px)` }); 

  return (
    <div className='lgs_container'>
        <div className='lgs_form' onSubmit={handleSubmit}>
            <form className="content">
                <h1>Let's begin your journey.</h1>
                <div className="inputs">
                    <input required type="text" name='firstName' placeholder='First Name' onChange={handleInputChange} value={formInputs.firstName}/>
                    <input required type="text" name='lastName' placeholder='Last Name' onChange={handleInputChange} value={formInputs.lastName}/>
                    <input required type="text" name='company' placeholder='Company Name' onChange={handleInputChange} value={formInputs.company}/>
                    <input required type="email" name='email' placeholder='Email Address' onChange={handleInputChange} value={formInputs.email}/>
                    <input required type="text" name='phoneNumber' placeholder='Phone Number' onChange={handleInputChange} value={formInputs.phoneNumber}/>
                    <textarea name="description" id="description" cols="30" rows="5" placeholder='Please Describe Your Development Needs. (E-commerce website, Booking Site, Portfolio, Mobile App, etc...).' onChange={handleInputChange} value={formInputs.description}></textarea>
                    <input required type="text" name='hearAboutUs' placeholder='How Did You Hear About Us?' onChange={handleInputChange} value={formInputs.hearAboutUs}/>
                </div>
                {/* <ReCAPTCHA
                    sitekey='6Lfugi8lAAAAAMI9tszfccZ3MjYrJfDnDb1s4JvH'
                    onChange={checkIfVerified}
                />, */}
               <button>Submit</button>
            </form>
            <div className="contact_information">
                <>
                    <strong><ImLocation/> Located in NYC</strong>
                    <a href="tel:6463522512"><BsFillTelephoneFill/> 646-352-2512</a>
                </>
            </div>
        </div>
    </div>
  )
}

export default LetsGetStarted