import React, { useEffect } from 'react'
import './home.css'

// imports
import LandingPage from './partials/LandingPage'
import LetsGetStarted from './partials/LetsGetStarted'
import Reputation from './partials/Reputation'
import Footer from '../Footer/Footer'
import About from './partials/About'
import Expertise from './partials/Expertise'
import Reviews from './partials/Reviews'

const Home = ({reputationImages}) => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className='home'>
      <div className="home_container">
        <LandingPage    />
        <Expertise      />
        <About          />
        <Reputation 
          reputationImages={reputationImages} 
        />
        <Reviews />
        <LetsGetStarted />
      </div>
      <div className="footer">
        <Footer         />
      </div>
    </div>
  )
}

export default Home