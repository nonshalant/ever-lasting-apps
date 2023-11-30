import { Image } from 'cloudinary-react';
import React from 'react'
import { images } from '../../../../images'
import {ImArrowDown, ImArrowRight } from 'react-icons/im'
import { useMediaQuery } from 'react-responsive';

const Process = () => {
  const appDevImages = images.webdev;
  const isMobile = useMediaQuery({query: `(max-width: 1023px)`})

  return (
    <div className='process_container process-app-dev'>
    <div className="step step_container">
        {
          appDevImages.map(image => image.id === 'consultaion' &&
            <div className="consultaion_image_container" key={image.id}>
              <Image cloudName={image.cloudName} publicId={image.image} />
            </div>
          )
        }
        <h2>Consultation</h2>
        <p>The first step in the process is to understand your needs and goals. Contact us today to schedule a consultation and take the first step towards creating your outstanding app! </p>
        <p>To proceed to the next phase of this process a retainer is required.</p> 
        <p>Retainer price varies from <span className='retainer_price'>2500 - 3000</span> based on complexity of the app. </p> 
    </div>
    {
      isMobile ? <ImArrowDown size={30} /> : <ImArrowRight size={30} />
    }
    <div className="step step_container">
        {
          appDevImages.map(image => image.id === 'working' &&
            <div className="consultaion_image_container" key={image.id}>
              <Image cloudName={image.cloudName} publicId={image.image} />
            </div>
          )
        }
        <h2>App in Progress</h2>
        <p>Next step is to kick your feet up while everything discussed inside the consultation is developed into your magnificent mobile app! </p>
        <p>Please allow 3-5 months for completion of your masterpiece.</p>
        <p>Periodic progress reports ( to be discussed in the consultation... ) are given throughout this process.</p>
    </div>
    {
      isMobile ? <ImArrowDown size={30} /> : <ImArrowRight size={30} />
    }
    <div className="step step_container">
        {
          appDevImages.map(image => image.id === 'finished' && 
            <div className='consultaion_image_container' key={image.id}>
                <Image cloudName={image.cloudName} publicId={image.image}/>
            </div>
          )
        }
        <h2>Finish Line</h2>
        <p>Alright the wait is finally over! Its time for us to hand over your breathtaking mobile app.</p>
        <p>Prior to transferring ownership, we kindly request receipt of the final payment of <br /><span className="retainer_price">2500 - 3000</span>. </p>
    </div>
</div>
  )
}

export default Process