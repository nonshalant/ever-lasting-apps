// dependencies 
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './navigation.css'

// icons
import {AiOutlineDown} from 'react-icons/ai'
import { Image } from 'cloudinary-react'
import { useMediaQuery } from 'react-responsive'
import MobileNavigation from './partials/MobileNavigation'


const Navigation = ({dropDown, setDropDown, scrollDirection, projectImages}) => {
    
    const [hamberClicked, setHamburgerClicked] = useState(false);
    const isMobile = useMediaQuery({ query: `(max-width: 1023px)`});
    
    const handleHambugerClick = (bool) => {
        setHamburgerClicked(bool)
    };

    useEffect(()=>{
        if(scrollDirection === true) {
            setHamburgerClicked(false)
        };
        if(scrollDirection === false){
            setHamburgerClicked(false)
        };
    },[scrollDirection]);

  return (
    <div className={scrollDirection ? 'navigation' : 'intersectingTrue'}>
        <div className="navigation_container">
            {
                isMobile  &&
                <MobileNavigation
                    projectImages = {projectImages}
                    dropDown = {dropDown}
                    hamberClicked =  {hamberClicked}
                    setDropDown   =  {setDropDown}
                    handleHambugerClick = {handleHambugerClick}
                />
            }
            {
                !isMobile && 
                <>
                    <div className="logo">
                        {
                            projectImages.map(logo => logo.id === "logo" && 
                                <div key={logo.id} onClick={()=>setDropDown(false)} className='logo-container'>
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
                    <ul className="navigation_links">
                        <ul className='expertise_dropDown' onClick={()=>setDropDown(!dropDown)}>
                            <li className={dropDown ? 'active' : undefined}>Expertise<AiOutlineDown/></li>
                            {
                                dropDown ? 
                                    <ul className="sub_navigation"> 
                                        <li><Link to='/expertise/web-development'>Web Development</Link ></li>
                                        <li><Link to='/expertise/app-development'>App Development</Link></li>
                                        {/* <li><Link to='/expertise/digital-marketing'>Digital Marketing</Link></li> */}
                                    </ul>
                                    : undefined
                            }
                        </ul>
                        <Link onClick={()=>setDropDown(false)} to='/projects'> Projects</Link>
                        <Link onClick={()=>setDropDown(false)} to='/careers'> Careers</Link>
                        <Link onClick={()=>setDropDown(false)} to='/about'>About</Link>
                        <Link onClick={()=>setDropDown(false)} to='/contact' className='contact'>Contact</Link>
                    </ul>
                </> 
            } 
        </div>
    </div>
  )
}

export default Navigation