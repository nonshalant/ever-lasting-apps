import { Image } from 'cloudinary-react'
import React from 'react'

const Culture = ({careerImages}) => {
  return (
    <div className='culture'>
        {
            careerImages.map(image => image.id === 'culture' &&
                <div className='images' key={image.id}>
                    <Image 
                        cloudName={image.cloudName} 
                        publicId={image.image} 
                    />
                </div>
            )
        }
        <div className="content">
            <h1>Culture & Values</h1>
            <div className="container">
               <div className="inner-container">
                    <h2>Transparency</h2>
                    <p>This is when everyone in the company knows what’s going on, from the top-level management to the employees. This can create a more trusting and open work environment.</p>
               </div>
               <div className="inner-container">
                    <h2>Collaboration</h2>
                    <p>Startups need teamwork to thrive. By fostering a culture of collaboration, employees can work together to achieve common goals.</p>
               </div>
               <div className="inner-container">
                    <h2>Customer-centricity</h2>
                    <p>Startups need to prioritize their customers above all else. By building a customer-centric culture, teams can work together to create products and services that people want to use.</p>
               </div>
               <div className="inner-container">
                    <h2>Innovation</h2>
                    <p>Startups need to be creative and think outside the box in order to succeed. By fostering a culture of innovation, startups can encourage their employees to come up with new and creative solutions to problems.</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Culture