import React, { Fragment } from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'


const Home = () => {
  return (
    <Fragment>
      <div className='home' id='home'>
        <main>
          <h1>TechPanjabi</h1>
          <p>Empowering Panjabi Talent! Celebrating Panjabi Stars: Your Path to Stardom, Our Expertise. </p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
          We are a dedicated team of technology enthusiasts of Panjabi origin. We deal with the Personal Brands of Panjabi actors, singers and other celebrities.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          We are a passionate team rooted in Panjabi culture, deeply committed to nurturing and enhancing the personal brands of Panjabi actors, singers, and celebrities. With a profound love for our heritage and a keen understanding of the entertainment industry, we specialize in elevating the profiles of Panjabi luminaries. We merge our cultural heritage with cutting-edge technology and industry expertise to create tailored strategies that propel Panjabi luminaries to greater heights in the entertainment world. With a genuine passion for our heritage and a comprehensive understanding of the entertainment industry, we are a reliable partner for individuals looking to amplify their presence and impact.
          </p>
        </div>
      </div>

      <div className="home4" id='brands'>
        <div className='container'>
          <h1>Brands</h1>

          <article className='wrapper-container'>
            <div className='wrapper1'>

              <AiFillGoogleCircle />
              <p>Google</p>

            </div>
            <div className='wrapper2'>

              <AiFillAmazonCircle />
              <p>Amazon</p>

            </div>
            <div className='wrapper3'>

              <AiFillYoutube />
              <p>Youtube</p>

            </div>
            <div className='wrapper4'>

              <AiFillInstagram />
              <p>Instagram</p>

            </div>
          </article>
        </div>
      </div>
    </Fragment>
  )
}

export default Home