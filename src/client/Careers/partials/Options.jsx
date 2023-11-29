import { Image } from 'cloudinary-react'
import React from 'react'

const Options = ({careerImages}) => {
  return (
    <div className='options'>
        <div className="options-container">
          {
          careerImages.map(image => image.options === 'skills' && image.id === 'web dev career' &&
            <div className='option' key={image.id}>
              <Image cloudName={image.cloudName} publicId={image.image} />
            </div>
          )
         }
            <div className="info">
              <h2> Do you have experience with Software Development? <br /> Send us a copy of your resume or a portfolio of your work to be considered.
                <br /> Technologies used at Ever Lasting Apps</h2>
                <div className="subheading">
                  <div className="technologies">
                    <h3>Front End Technologies</h3>
                    <ul className='container'>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript</li>
                      <li>React</li>
                      <li>React Native</li>
                    </ul>
                  </div>
                  <div className="technologies">
                    <h3>Back End Technologies</h3>
                    <ul className='container'>
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                </div>
                <a target='_blank' href="mailto:everlastapps.co@gmail.com">Apply</a>
            </div>
        </div>

        {/* UI  */}

        <div className="options-container">
          <div className="info">
            <h2>Do you have experience with design?</h2>
            <p>If you have experience with design, then you are in the right place! We are always looking for talented and creative individuals who are passionate about using design to create amazing experiences. If you are a skilled designer who is dedicated to quality and committed to professional development and growth, we would love to hear from you. Join our team and help us design stunning experiences for the best brands in the world! <br /> Send us a copy of your resume or a portfolio of your work to be considered.</p>
            <a target='_blank' href="mailto:everlastapps.co@gmail.com">Apply</a>
          </div>
          {
            careerImages.map(image => image.options === 'skills' && image.id === 'ui career' &&
              <div className='option' key={image.id}>
                <Image cloudName={image.cloudName} publicId={image.image}/>
              </div>
            )
          } 
        </div>
        <div className="options-container">
          {
              careerImages.map(image => image.options === 'skills' && image.id === 'social media career' &&
                <div className='option' key={image.id}>
                  <Image cloudName={image.cloudName} publicId={image.image}/>
                </div>
              )
            }
            <div className="info">
              <h2>Do you have experience with social media marketing?</h2>
              <p>If you have experience with marketing then you're in the right place. Social media marketing, is an increasingly crucial aspect of a company's overall marketing strategy. The ability to effectively utilize various social media platforms to reach and engage target audiences can lead to increased brand awareness, stronger relationships with customers, and improved sales. As such, having experience in this field is highly valued in today's business world. <br /> Send us a copy of your resume or a portfolio of your work to be considered. </p>
              <a target='_blank' href="mailto:everlastapps.co@gmail.com">Apply</a>
            </div>
        </div>
    </div>
  )
}

export default Options