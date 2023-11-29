import { Image } from 'cloudinary-react'
import React, { useEffect, useRef } from 'react'

const Works = ({reputationImages}) => {
    const myRef = useRef()

    useEffect(()=>{
        const options = {
            rootMargin: '0px',
            threshold: 0
        }

        const callback = (entries) =>{ 
            const entry = entries[0]
        }

        const observer = new IntersectionObserver(callback, options)
        observer.observe(myRef.current)
    },[])


  return (
    <div className='works-container'>
        <h1>Check out some of our <br /> most recent clients!</h1>
        {
            reputationImages.map(image => 
                <div ref={myRef} key={image.id} className='works'>
                    <a href={image.redirect} target="_blank" rel="noopener noreferrer">
                        <Image 
                            cloudName={image.cloudName} 
                            publicId={image.image} 
                        />
                        <p>{image.description}</p>
                    </a>
                </div>
            )
        }
    </div>
  )
}

export default Works