import { Image } from 'cloudinary-react'
import React from 'react'

const OurLocations = ({careerImages}) => {
  return (
    <div className='locations'>
        {
            careerImages.map(image => image.options === 'location' &&
               <div className='images' key={image.id}>
                    <Image 
                        cloudName={image.cloudName}
                        publicId={image.image}
                    /> 
                    <h1>{image.name}</h1>
               </div>  
            )
        }
    </div>
  )
}

export default OurLocations