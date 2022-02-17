import React from 'react';
import './Home.css';

// import components
import PalmButton from '../../components/PalmButton/PalmButton';

// import assets
import logo from '../../static/logos/loco-moco-large-removebg-preview.png';
import pig from '../../static/icons/pig.png';
import sun from '../../static/icons/sun.png';
import training from '../../static/icons/training.png';
import speaker from '../../static/icons/speaker.png';

export default function Home() {
  return (
    <div className='home-page'>

      <div className='col left'>
        <img src={logo} className='hero-logo' alt='locomocosec logo'/>
      </div>

      <div className='col right'>
        <div className='sizzle-box'>
          <div className='sizzle-title'>Loco Moco</div>
          <div className='sizzle-sub-title'>Hawaii's Premier Product Security Conference</div>
          <div className='sizzle-text'>
            <p>
            Join us in the beautiful city of Honolulu in Oahu, Hawaii for the LocoMocoSec Product Security Conference.
            </p>


            <div className="sizzle-bullets">
                <div className='sizzle-bullet-item'>
                  <div className='sizzle-icon'>
                    <img src={speaker} alt="speaker-logo"/>
                  </div>
                  <div className='sizzle-bullet'>
                    <div className='sizzle-bullet-title'>
                      Top-Notch Speakers
                    </div>
                    <div className='sizzle-bullet-desc'>
                      We have some of the best product security speakers in the industry come to Loco Moco. In addition to the well known, who's who in the application security industry, our lineup also often has rising stars in the infosec space.
                    </div>
                  </div>
                </div>
                <div className='sizzle-bullet-item'>
                  <div className='sizzle-icon'>
                    <img src={training} alt="training-logo"/>
                  </div>
                  <div className='sizzle-bullet'>
                    <div className='sizzle-bullet-title'>
                      Professional Training Courses
                    </div>
                    <div className='sizzle-bullet-desc'>
                      Come early and get training. Each year we strive to offer exceptional training courses meant to further your knowledge in all facets of security - whether you're a beginner or a seasoned veteran. 
                    </div>
                  </div>
                </div>
                <div className='sizzle-bullet-item'>
                  <div className='sizzle-icon'>
                    <img src={pig} alt="hands-on-logo"/>
                  </div>
                  <div className='sizzle-bullet'>
                    <div className='sizzle-bullet-title'>
                      Food
                    </div>
                    <div className='sizzle-bullet-desc'>
                      Please come try some authentic Hawaiian food. Each year we make it a habit to introduce new and exciting Hawaiian dishes to our attendees. Come for the food, stay for the conversation and the company.
                    </div>
                  </div>
                </div>
                <div className='sizzle-bullet-item'>
                  <div className='sizzle-icon'>
                    <img src={sun} alt="competitions-logo"/>
                  </div>
                  <div className='sizzle-bullet'>
                    <div className='sizzle-bullet-title'>
                      Sun
                    </div>
                    <div className='sizzle-bullet-desc'>
                      You aren't the only one who has a little cabin fever! After being stuck indoors for almost two years, what could be a better place to travel to than Oahu?
                    </div>
                  </div>
                </div>
              </div>

          </div>
          <div className='sizzle-button-area'>
            <PalmButton wording='Register' link='https://www.eventbrite.com/e/loco-moco-product-security-conference-tickets-268236260877'/>
          </div>
        </div>

      </div>

    </div>

  );
}