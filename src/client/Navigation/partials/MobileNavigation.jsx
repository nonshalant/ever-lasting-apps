import { Image } from 'cloudinary-react';
import React, { useEffect } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const MobileNavigation = (props) => {

  const {
    setDropDown, 
    dropDown, 
    handleHambugerClick, 
    hamberClicked, 
    projectImages, 
  } = props;

  return (
    <div className='mobile'>
       <div>
            {
              projectImages.map(logo => logo.id === "logo" && 
                <div key={logo.id} onClick={()=>handleHambugerClick(false)} className='logo-container'>
                    <Link to='/'>
                        <Image
                          cloudName={logo.cloudName} 
                          publicId={logo.image} 
                          className="businessLogo"
                        />
                    </Link>
                </div>
              )
            }
          </div>
       <div onClick={()=>handleHambugerClick(!hamberClicked)} className="hamburger">
          <GiHamburgerMenu size={40} />
          <strong>MENU</strong>
        </div>
       {
        hamberClicked &&
          <div className='mobile_nav_active'>
              <div className="mobile_container">
                <div className="mobile_title">
                  <h1>Browse</h1>
                  <strong onClick={()=>handleHambugerClick(!hamberClicked)}>Close</strong>
                </div>
                <ul className='mobile_nav_links'>                
                    <li onClick={()=>setDropDown(!dropDown)} className={dropDown ? 'active' : undefined}>Expertise<AiOutlineArrowRight/></li>
                    {
                        dropDown ? 
                        <div className="mobile_sub_navigation">
                          <div className="mobile_title">
                            <h1>Expertise</h1>
                            <strong onClick={()=>setDropDown(!dropDown)}>Back</strong>
                          </div>
                          <ul className='mobile_sub_links'> 
                              <li><Link to='/expertise/web-development' onClick={()=>handleHambugerClick(false)}>Web Development <AiOutlineArrowRight/></Link ></li>
                              <li><Link to='/expertise/app-development' onClick={()=>handleHambugerClick(false)}>App Development <AiOutlineArrowRight/></Link ></li>
                              {/* <li><Link to='/expertise/user-experience' onClick={()=>handleHambugerClick(false)}>User Experience <AiOutlineArrowRight/></Link></li> */}
                              {/* <li><Link to='/expertise/digital-marketing' onClick={()=>handleHambugerClick(false)}>Digital Marketing<AiOutlineArrowRight/></Link></li> */}
                            </ul>
                        </div>
                        : undefined
                    }
                    <Link onClick={()=>handleHambugerClick(false)}  to='/projects'> Projects</Link>
                    <Link onClick={()=>handleHambugerClick(false)} to='/careers'> Careers</Link>
                    <Link onClick={()=>handleHambugerClick(false)} to='/about'>About</Link>
                    <Link onClick={()=>handleHambugerClick(false)} to='/contact' className='mobile_contact'>Contact</Link>
                </ul>
              </div>
          </div>
      }
    </div>
  )
}

export default MobileNavigation