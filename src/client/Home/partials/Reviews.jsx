import { Image } from 'cloudinary-react';
import React from 'react';
import { images } from '../../../images';

const Reviews = () => {
  const reviews = images.reviews;

  return (
    <div className='review'>
      <div className='reviews'>
        <div className="reviews_container_outer">
          {
            reviews.map(review => 
              <Image cloudName={review.cloudName} publicId={review.image} />
            )
          }
        </div>
      </div>
      <div className="review_title">
        <h1>Here are some of our client's reviews</h1>
      </div>
    </div>
  );
};

export default Reviews;