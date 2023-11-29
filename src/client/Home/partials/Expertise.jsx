// dependencies 
import React from 'react'
import { Link } from 'react-router-dom'

// icons 
import {CgWebsite} from 'react-icons/cg'
import {AiOutlineUser} from 'react-icons/ai'
import {MdDesignServices, MdWork} from 'react-icons/md'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Expertise = () => {
  return (
    <div className='expertise_container'>
      <h1>Our Expertise</h1>
      <div className="expertise_categories_container">
        <div className="categories">
          <CgWebsite size={70} color='black'/>
          <h2>Website Development</h2>
          <h3> Creating stunning and functional websites that help businesses and individuals succeed online is what we do! Our team of skilled developers and designers work closely with clients to understand their needs and create customized solutions that are tailored to their specific requirements.</h3>
          <Link className='expertise_redirect' to='/expertise/web-development'><button>Learn More<AiOutlineArrowRight/></button></Link>
        </div>
        <div className="categories">
          <AiOutlineUser size={70} color='black'/>
          <h2>App Development</h2>
          <h3>Our team of expert developers and designers work closely with clients to understand their needs and create customized solutions that exceed their expectations. With a focus on user experience and cutting-edge technology, we create apps that are intuitive, responsive, and easy to use.</h3>
          <Link className='expertise_redirect' to='/expertise/app-development'><button>Learn More <AiOutlineArrowRight/></button></Link>
        </div>
        <div className="categories">
          <MdDesignServices size={70} color='black'/>
          <h2>Digital Marketing</h2>
          <h3>We craft comprehensive growth strategies for your business, utilizing a range of tactics including SEO, content creation, email marketing, and more. Our approach drives results and propels your business forward, helping you reach new heights and achieve your goals.</h3>
          {/* <Link to='/expertise/digital-marketing'><button>Learn More <AiOutlineArrowRight/></button></Link> */}
          <Link to='/'><button>* Coming Soon *</button></Link>
        </div>
        <div className="categories">
          <MdWork size={70} color='black'/> 
          <h2>Careers</h2>
          <h3>Are you seeking to become part of the Ever Lasting Apps community? We embrace diversity and welcome individuals from a wide range of backgrounds in engineering, marketing, and design to join us!</h3>
          <Link className='expertise_redirect' to='/careers'><button>Learn More <AiOutlineArrowRight/></button></Link>
        </div>
      </div>
    </div>
  )
}

export default Expertise