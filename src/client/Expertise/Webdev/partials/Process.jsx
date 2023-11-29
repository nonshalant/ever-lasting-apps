import { Image } from 'cloudinary-react';
import React from 'react'
import { ImArrowDown, ImArrowRight } from 'react-icons/im';
import { useMediaQuery } from 'react-responsive';
import { images } from '../../../../images'

const Process = () => {
    const webDevImages = images.webdev;
    const isMobile = useMediaQuery({ query: `(max-width: 1023px)` }); 


  return (
    <div className='process_container'>
        <div className="step step_container">
            {
                webDevImages.map(image => image.id === 'consultaion' && 
                <div key={image.id} className='consultaion_image_container'>
                    <Image cloudName={image.cloudName} publicId={image.image}/>
                </div>
                )
            }
            <h2>Consultation</h2>
            <p>The first step in the process is to understand your needs and goals. Contact us today to schedule a consultation and take the first step towards transforming your business.</p> 
            <p>To proceed to the next phase of this process a retainer of <span className='retainer_price'>500</span> is required. </p>
        </div>
        {
            isMobile ? <ImArrowDown size={30} /> : <ImArrowRight size={30} />
        }
        <div className="step step_container">
            {
                webDevImages.map(image => image.id === 'working' && 
                <div key={image.cloudName} className='consultaion_image_container'>
                    <Image cloudName={image.cloudName} publicId={image.image}/>
                </div>
                )
            }
            <h2>Website In Progress</h2>
            <p>Next step is to kick your feet up while everything discussed inside the consultation is developed into your magnificent website! </p>
            <p>Please allow 2-4 weeks for completion of your masterpiece.</p>
        </div>
        {
            isMobile ? <ImArrowDown size={30} /> : <ImArrowRight size={30} />
        }
        <div className="step step_container">
            {
                webDevImages.map(image => image.id === 'finished' && 
                <div key={image.id} className='consultaion_image_container'>
                    <Image cloudName={image.cloudName} publicId={image.image}/>
                </div>
                )
            }
            <h2>Finish Line</h2>
            <p>Alright the wait is finally over! Its time for us to hand over your breathtaking creation.</p>
            <p>Prior to transferring ownership, we kindly request receipt of the final payment of <span className="retainer_price">500</span>. </p>
        </div>
       
    </div>
  )
}

export default Process