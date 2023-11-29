import React from 'react'

// dependencies 
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='landing_page_container'>
        <div className="title">
            <h1>Creating Digital Experiences That Drive Growth</h1>
            <h2>Ever Lasting Apps is an IT startup that provides expert advice and support to businesses and organizations in the development and use of technology solutions.</h2>
            <Link to='/about'><button className='learn_more active'>Learn More</button></Link>
        </div>
        <div className="photos">
            <img id='image_one' src='https://wallpaperaccess.com/thumb/7274183.jpg' alt="image" />

            <img id='image_two' src='https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60' alt="image" />

            <img id='image_three' src='https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2Vic2l0ZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60' alt="image" />

            <img id='image_four' src='https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYnNpdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt="image" />

            <img id='image_five' src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHdlYnNpdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt="image" />
        </div>
    </div>
  )
}

export default LandingPage