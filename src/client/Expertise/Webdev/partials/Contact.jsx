import React from 'react'
import { Link } from 'react-router-dom' 

const Contact = () => {
  return (
    <div className='webdev-contact'>
        <h2>Lets Discuss Your Project</h2>
        <p>We are eager to listen to your project aspirations and transform them into a cutting-edge digital product. <br /> Book a complimentary consultation today.
        </p>
        <Link to='/contact'>Schedule Appointment</Link>
    </div>
  )
}

export default Contact