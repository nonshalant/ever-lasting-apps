import { Image } from 'cloudinary-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Reputation = ({reputationImages}) => {
  return (
    <div className='reputation_container'>
        <div className="content">
            <h1>Our reputation is of utmost significance.</h1>
            <h3>Our clients span a diverse range of industries, from startups, personal blogs, and E-Commerce stores. We have a proven track record of delivering measurable online success to each and every one. Regardless of the size or nature of your business, we have the experience and expertise to help you achieve your goals online.<Link to='/projects'>Learn More <AiOutlineArrowRight /></Link> </h3>
        </div>
        <div className="images">
          {
            reputationImages.map(image =>
              <div key={image.id}>
                <Image 
                  cloudName={image.cloudName} 
                  publicId={image.image}
                />
              </div>
            )
          }
        </div>
    </div>
  )
}

export default Reputation