// imports 
import Home from './client/Home/Home';
import Navigation from './client/Navigation/Navigation';
import WebDev from './client/Expertise/Webdev/WebDev';
import Projects from './client/Projects/Projects';
import Careers from './client/Careers/Careers';
import {Route, Routes} from 'react-router-dom'
import AppDevelopment from './client/Expertise/AppDevelopment/AppDevelopment';
import DigitalMarketing from './client/Expertise/DigitalMarketing/DigitalMarketing';
import { useCallback, useEffect, useState } from 'react';
import './App.css';

// images 
import {images} from './images';
import About from './client/About/About';
import Contact from './client/Contact/Contact';

function App() {
  const projectImages     =       images.project_images
  const reputationImages  =       images.reputation_images
  const careerImages      =       images.careersImages

  // useState 
  const [y, setY]                                 = useState(document.scrollingElement.scrollHeight);
  const [scrollDirection, setScrollDirection]     = useState(true);
  const [dropDown, setDropDown]                   = useState(false);
  
  const handleNavigation = useCallback((e) => {
    if (y > window.scrollY) {
      setScrollDirection(true);
    } else if (y < window.scrollY) {
      setScrollDirection(false);
    }
    setY(window.scrollY)
  }, [y]);

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div className="App">
      <Navigation
        dropDown={dropDown} 
        setDropDown={setDropDown} 
        scrollDirection={scrollDirection} 
        projectImages={projectImages}   
      />
      <Routes>
        <Route path='/'                             element={<Home reputationImages={reputationImages}/>}></Route>
        <Route path='/expertise/web-development'    element={<WebDev setDropDown={setDropDown}/>}></Route>
        <Route path='/expertise/app-development'    element={<AppDevelopment setDropDown={setDropDown}/>}></Route>
        <Route path='/expertise/digital-marketing'  element={<DigitalMarketing setDropDown={setDropDown} />}></Route>
        <Route path='/projects'                     element={<Projects reputationImages={reputationImages}/>}></Route>
        <Route path='/about'                        element={<About projectImages={projectImages} />}></Route>
        <Route path='/contact'                      element={<Contact />}></Route>
        <Route path='/careers'                      element={<Careers setDropDown={setDropDown} careerImages={careerImages} projectImages={projectImages}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
