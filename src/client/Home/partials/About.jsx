// dependencies
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about_container'>
        <div className="image_container">
            <img src='https://media.istockphoto.com/photos/shot-of-a-businessman-using-a-computer-while-working-in-a-call-center-picture-id1331493599?b=1&k=20&m=1331493599&s=170667a&w=0&h=IHNyiSNrCtfcVyLAOTT2Nc8HFTdKEs8N5ZgV0Uoob5M=' alt="image" />
        </div>
        <div className='content'>
            <h1>Dedicated to advancing your success.</h1>
            <h3>Ever Last Apps has been committed to delivering exceptional web design, development, hosting, and digital marketing services. Our focus is on your success, and we partner with you to create customized online solutions that meet your specific needs. Your success is our success, and we strive to find the most effective ways to help your business grow online..</h3>
            <Link to='/about'><button>More About Us</button></Link>
        </div>
    </div>
  )
}

export default About