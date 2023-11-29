import { Image } from 'cloudinary-react'
import React from 'react'
import {Link} from 'react-router-dom'

const LeftSide = ({aboutImages}) => {
  return (
    <div className="content">
          <div className="left">
            <div className="left_title">
                <h1>Welcome To Ever Lasting Apps</h1>
                <h2>A leading IT consultancy startup dedicated to helping businesses optimize their technology systems and processes for increased efficiency and growth. Our team of experienced and highly skilled technology experts are committed to delivering innovative solutions that meet the unique needs of each of our clients.</h2>
                <h2>Ever Lasting Apps has quickly established itself as a trusted partner to companies across a range of industries. With a focus on delivering top-notch services and unparalleled customer support, we have earned a reputation for excellence and are committed to maintaining our position as a leader in the field.</h2>
            </div>

            <div className="container mission_statement">
                <h2>Mission</h2>
                <p>Our mission is to provide exceptional IT consultancy services to our clients, leveraging our expertise and knowledge to help them navigate the complex world of technology. We strive to deliver innovative solutions that meet their business needs, enhance their operations, and drive growth. We are committed to providing our clients with outstanding customer service, working closely with them to understand their unique requirements and delivering tailored solutions that exceed their expectations. Our ultimate goal is to be a trusted partner to our clients, empowering them to leverage technology to achieve their business objectives and thrive in an ever-evolving digital landscape.</p>
            </div>

            <div className="our_services container">
                <h2>Our Services</h2>
                <p className='sub_heading'>At Ever Lasting Apps, we offer a comprehensive suite of IT consultancy services designed to help businesses of all sizes enhance their digital foot-print. These services include:</p>   
                <div className="inner_container">
                    <div className="service">
                        <p> <span> Website Development </span> We work with you to develop a customized website that aligns with your business goals and ensures that your website is optimized for growth and efficiency.</p>  
                        {
                            aboutImages.map(image => image.id === 'website development' && 
                                <div key={image.id} className="image">
                                    <Image cloudName={image.cloudName} publicId={image.image}/>
                                </div>
                            )
                        }
                    </div>
                    <div className="service">
                        {
                            aboutImages.map(image => image.id === 'app development' && 
                                <div key={image.id} className="image">
                                    <Image cloudName={image.cloudName} publicId={image.image}/>
                                </div>
                            )
                        }
                        <p> <span>Mobile App Development</span> We collaborate with you to create a personalized mobile application that is tailored to your business objectives and guarantees optimal growth and efficiency.</p>
                    </div>
                    <div className="service">
                        <p> <span>Marketing</span> Our team of experienced professionals offers a wide range of services, including market research, branding, digital marketing, social media management, and more.</p>  
                        {
                            aboutImages.map(image => image.id === 'marketing' && 
                                <div key={image.id} className="image">
                                    <Image cloudName={image.cloudName} publicId={image.image}/>
                                </div>
                            )
                        }
                    </div>
                </div>              
            </div>

            <div className="why_choose_us container">
                <h2>Why Choose Us</h2>
                <p>At Ever Lasting Apps, we are committed to delivering the best possible customer experience. Our team of experts are dedicated to providing customized, innovative solutions that meet the unique needs of each of our clients. Additionally, we offer a wide range of benefits that set us apart from other IT consultancy companies, including:</p>
                <ul className="list">
                    <li><span>Experienced and Skilled Team:</span>  Our team of technology experts is highly experienced and has a proven track record of delivering outstanding results for our clients.</li>
                    <li><span>Customer-Focused Approach:</span> We are committed to delivering exceptional customer service and support, and we always put the needs of our clients first.</li>
                    <li><span>Innovative Solutions:</span> We stay up-to-date with the latest advancements in technology and are always looking for new and innovative ways to help our clients succeed.</li>
                </ul>        
                <p>Flexible Services: We understand that every business is unique, and we offer flexible services that can be tailored to meet the specific needs of each of our clients.</p>
            </div>

            <div className="get_in_touch container">
                <h2>Get in Touch</h2>
                <p>If you're looking for an IT consultancy company that is dedicated to helping your business succeed, look no further than Ever Lasting Apps. To learn more about our services and how we can help you optimize your technology systems and processes, contact us today. Our team is always available to answer your questions and help you get started.</p>
                <Link to='/contact'><button>Get In Touch</button></Link>
            </div>
        </div>
    </div>
  )
}

export default LeftSide