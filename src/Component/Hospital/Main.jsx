import React, { useEffect } from 'react';
import '../Hospital/Main.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import background from '../../Assests/img/background.png'
import anh1 from '../../Assests/img/anh1.png'
import anh2 from '../../Assests/img/anh2.png'
import next from '../../Assests/img/next.png'
import googleplay from '../../Assests/img/googleplay.png'
import mobileapp from '../../Assests/img/mobileapp.png'
import appstore from '../../Assests/img/appstore.png'

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className='main-landing' >
        <div className='main-landingText' data-aos="fade-up" data-aos-duration="1000">
          <h1>Bringing The Future Of <span style={{ color: 'red', fontSize: '5vw' }}>Healthcare</span></h1>
          <h3>Deep created replenish herb without night fruit day earth evening Called
            his green were they're fruitful to over Sea bearing sixth Earth face
            <div className='main-btn'>
              <a href='#'>Read more</a>
            </div>
          </h3>
        </div>
        <div className='main-landingImage' data-aos="fade-down" data-aos-duration="2000">
          <img src={background}></img>
        </div>
      </div>

      <div className='main-about'>
        <div className='main-aboutText' data-aos="fade-up" data-aos-duration="1000">
          <h1>Our Patients Are at the Centre<span style={{ color: 'aqua', fontSize: '3vw' }}> of everything We Do</span></h1>
          <img src={anh1} width={650} height={531}></img>
        </div>
        <div className='main-aboutList' data-aos="fade-left" data-aos-duration="1000">
          <ol>
            <li>
              <span>01</span>
              <p>Modern Technology</p>
            </li>
            <li>
              <span>02</span>
              <p>Worldclass Facilities.</p>
            </li>
            <li>
              <span>03</span>
              <p>Experienced Nurse.</p>
            </li>
            <li>
              <span>04</span>
              <p>24 Hours Support.</p>
            </li>
          </ol>
        </div>
      </div>

      <div className='main-infoSection'>
        <div className='main-infoMain' data-aos="fade-up" data-aos-duration="1000">
          <h1>We Analyse Your Health States <br></br><span style={{ color: 'red' }}></span> In Order To Top Service.</h1>
        </div>
        <div className='main-infoCards'>
          <div className='main-card one' data-aos="fade-up" data-aos-duration="1000">
            <img src={anh2} className='main-cardoneImg' data-aos="fade-up" data-aos-duration="1100"></img>
            <div className='main-cardbgone'></div>
            <div className='main-cardContent'>
              <h2>Health Service</h2>
              <p>An so vulgar to on points wanted rapture ous resolving contiuned household</p>
              <a href='#'>
                <div className='main-cardBtn'>
                  <img src={next} className='main-cardIcon'></img>
                </div>
              </a>
            </div>
          </div>

          <div className='main-card two' data-aos="fade-up" data-aos-duration="1300">
            <img src={anh2} className='main-cardtwoImg' data-aos="fade-up" data-aos-duration="1200"></img>
            <div className='main-cardbgtwo'></div>
            <div className='main-cardContent'>
              <h2>Qualified Doctors</h2>
              <p>An so vulgar to on points wanted rapture ous resolving contiuned household</p>
              <a href='#'>
                <div className='main-cardBtn'>
                  <img src={next} className='main-cardIcon'></img>
                </div>
              </a>
            </div>
          </div>

          <div className='main-card three' data-aos="fade-up" data-aos-duration="1300">
            <img src={anh2} className='main-cardthreeImg' data-aos="fade-up" data-aos-duration="1200"></img>
            <div className='main-cardbgthree'></div>
            <div className='main-cardContent'>
              <h2>Easy Appointment</h2>
              <p>An so vulgar to on points wanted rapture ous resolving contiuned household</p>
              <a href='#'>
                <div className='main-cardBtn'>
                  <img src={next} className='main-cardIcon'></img>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='main-banner'>
        <div className='main-bannerText' data-aos="fade-right" data-aos-duration="1000">
          <h1>Download the Medisen App Today <br></br> <span style={{ fontSize: "1.6vw", fontWeight: "normal" }} className='header-bannerInnerText'>
            Stay Update and get all your medical needs taken care of!
          </span></h1>
          <a href='#'><img src={googleplay}></img></a>
          <a href='#'><img src={appstore}></img></a>
        </div>
        <div className='main-bannerImg' data-aos="fade-up" data-aos-duration="1000">
          <img src={mobileapp}></img>
        </div>
      </div>

    </>
  )
}

export default Main;